<template>
	<div>
		<br>
		<h3><strong><font color="brown">通報案件查處情形一覽表</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報者" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="announce"
						name="radio-options1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="查處狀態" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="picked"
						:options="status"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件編號關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報公共設施名稱關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主題關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker3" v-model="value3" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker4" v-model="value4" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>通報案件查處結果公告一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('DivisionManager', row.item)">檢視</b-button>
						</template>
					</b-table>
					<b-pagination align="right"
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						first-number
					></b-pagination>
				</b-form-row>
			</b-container>
		</div>
	</div>
</template>


<script>


export default {
 data(){
	return{
		rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'caseNum',
				label:	'通報案件編號'
			},
			{
				key:	'submitDate',
				label:	'通報日期',
			},
			{
				key:	'constName',
				label:	'通報公共設施名稱',
				thStyle: { width: "12%" },
				tdClass: 'text-left',
			},
			{
				key:	'wkut',
				label:	'通報權責機關'
			},
			{
				key:	'address',
				label:	'所在縣市及地點',
				tdClass: 'text-left',
			},
			{
				key:	'source',
				label:	'通報案件源起',
				thStyle: { width: "8%" },
				tdClass: 'text-left',
			},
			{
				key:	'topic',
				label:	'通報主題',
				tdClass: 'text-left',
			},
			{
				key:	'category',
				label:	'設施類別',
				thStyle: { width: "8%" },
				tdClass: 'text-left',
			},
			{
				key:	'informPeople',
				label:	'通報者',
				thStyle: { width: "8%" },
			},
			{
				key:	'informWkut',
				label:	'查處機關',
				thStyle: { width: "8%" },
			},
			{
				key:	'status',
				label:	'查處狀態',
				thStyle: { width: "8%" },
				tdClass: 'text-left',
			},
			{
				key:	'desc',
				label:	'查處說明',
				tdClass: 'text-left',
				thStyle: { width: "10%" },
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "5%" },
			},
		],
		items:	[
			{	caseNum:'10200000002', submitDate:'102/11/14',constName:'金門國家公園範圍內道路約3公里長的路燈安裝好迄今未亮與破損,有礙行車安全',
			wkut: '內政部', address:'[金門縣] 金門縣 金寧鄉寧湖路', source:'民眾通報',topic:'道路路燈安裝好迄今未亮與破損,有礙行車安全',category:'交通建設(停車場、機場、觀光遊憩、道路、橋樑、漁港等)',
			desc:'移督工系統處理。',informPeople:'王XX',informWkut:'金門縣政府', status:'待查處機關完成查處'},
			{	caseNum:'10200000005', submitDate:'102/12/26',constName:'北濱海水浴場',
			wkut: '花蓮縣政府農業處', address:'[花蓮縣] 花蓮縣花蓮市海濱街', topic:'花蓮北濱海水浴場荒廢閒置無使用過',category:'交通建設(停車場、機場、觀光遊憩、道路、橋樑、漁港等)',
			desc:'依據教育部106年7月6日臺教社(三)字第1060096912號函查明，目前該設施刻辦理設施周邊工程，俟取得使用執照後將移交予OT廠商辦理裝修工程，完工後將作為無動力水上活動訓練基地，目前仍屬施工階段，如完工啟用後有閒置情形將予以納入列管。',
			informPeople:'',informWkut:'教育部', status:'待查處機關完成查處'},
		],
		announce:[
			{	text:	'民眾',	value:	'1',  },
			{	text:	'工程會',	value:	'2',  },
			{	text:	'工程會以外機關',	value:	'3',  },
			{	text:	'全部',	value:	'4',  },
		],
		status:[
			{	text:	'未分案',	value:	'1',  },
			{	text:	'未完成查處',	value:	'2',  },
			{	text:	'查處納入閒置系統列管',	value:	'3',  }, 
			{	text:	'查處不納入閒置系統列管',	value:	'5',  },
			{	text:	'全部',	value:	'4',  },
		]
	}
 },
 methods: {
	
 },
 mounted(){
	this.items.forEach((items, index) => { items.serial = index + 1; });
  },
}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
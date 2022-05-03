<template>
	<div>
		<br>
		<h3>查詢重點防汛工程在建標案啟用示警功能一覽表</h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="工程標案編號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="工程標案名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
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
				<br>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('FloWarnEdit', row.item)">檢視</b-button>&nbsp;
						</template>
					</b-table>
				</b-form-row>
				<b-form-row class="row justify-content-end">
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
				key: 'prjno',
				label:	'工程標案編號',
				tdClass: 'text-left',
				thStyle: { width: "8%" },
			},
			{
				key:	'name',
				label:	'工程標案名稱',
				tdClass: 'text-left',
				thStyle: { width: "12%" },
			},
			{
				key:	'wkut',
				label: '主辦機關'
			}, 
			{
				key:	'site',
				label:	'工程地點'
			}, 
			{
				key:	'amount',
				label:	'決標金額(千元)'
			}, 
			{
				key:	'decideDate',
				label:	'決標日期'
			}, 
			{
				key:	'preDate',
				label:	'預定完工日期'
			}, 
			{
				key:	'man',
				label:	'連絡人'
			},
			{
				key:	'mobile',
				label:	'手機號碼'
			},
			{
				key:	'mail',
				label:	'電子郵件'
			},
			{
				key:	'isReceive',
				label:	'是否接收災害示警通知'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{prjno: '1100219', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', decideDate: '102/08/09', 
				site:'宜蘭縣(非原住民地區)', preDate: '', man:'王XX',mobile:'09XXXXXXXX',
				mail:'test@test.com',isReceive:'是', amount:5260},
			{prjno: 'IAA-9402-01', name: '金山里18鄰、錦山里22鄰及東光里12鄰聯絡道路邊坡復建工程',	wkut: '工程會', decideDate: '105/04/07', 
				site:'新竹縣關西鎮',	inDate:'110/12/01', backUp:'否', preDate: '110/05/17', amount:352000},
			{prjno: '109-BG08', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', decideDate: '107/10/18', 
				site:'新竹縣寶山鄉雙新村水尾溝',	inDate:'110/12/01', backUp:'是', preDate: '', amount:1618800},
		]
	}
 },
 methods: {
	queryHandler(){
	},
	reset(){

	},
	alertMsg(){
		confirm("年度系統重點防汛工程共:40件，年度事件共:5件，是否轉入備查資料?");
	}
 },
	mounted(){
		this.items.forEach((items, index) => { items.serial = index + 1; });
	}
}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
<template>
	<div>
		<br>
		<h3><strong><font color="brown">通報案件查處情形公告一覽表</font></strong></h3>
		<br>
		<b-container >
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
						<template #cell(content)="row">
							<b-container>
								<b-row>
									<b-col><strong>通報主題：</strong></b-col>
								</b-row>
								<b-row>
									<b-col>{{row.item.topic}}</b-col>
								</b-row>
								<b-row>
									<b-col><strong>通報具體內容：</strong></b-col>
								</b-row>
								<b-row>
									<b-col>{{row.item.detail}}</b-col>
								</b-row>
								<b-row>
									<b-col><strong>通報設施類別：</strong></b-col>
								</b-row>
								<b-row>
									<b-col>{{row.item.category}}</b-col>
								</b-row>
							</b-container>
						</template>
						<template #thead-top>
							<b-tr>
								<b-th colspan="1" ></b-th>
								<b-th class="border border-dark " variant="secondary" colspan="7">民眾通報資料</b-th>
								<b-th colspan="1"></b-th>
							</b-tr>
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
				label:	'流水號',
				thStyle: { width: "5%" },
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
			},
			{
				key:	'wkut',
				label:	'通報權責機關'
			},
			{
				key:	'address',
				label:	'設施地點'
			},
			{
				key:	'content',
				label:	'通報內容',
				thStyle: { width: "20%" },
				tdClass: 'text-left',
			},
			{
				key:	'name',
				label:	'通報民眾',
			},
			{
				key:	'situation',
				label:	'機關查處情形',
				thStyle: { width: "40%" },
			},
			
		],
		items:	[
			{	caseNum:'10200000002', submitDate:'102/11/14',constName:'金門國家公園範圍內道路約3公里長的路燈安裝好迄今未亮與破損,有礙行車安全',
				wkut: '內政部', address:'[金門縣] 金門縣 金寧鄉寧湖路',name:'吳XX',situation:'(查處作業中)',topic:'(請查處閒置設施通報案件通知)'
				,detail:'TEST',category:'交通建設(停車場、機場、觀光遊憩、道路、橋樑、漁港等)'},
		]
	}
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
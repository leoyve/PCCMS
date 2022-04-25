<template>
	<div>
		<b-container >
			<br>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="事件名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
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
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="事件發佈日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="標案移入日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="備查資料" label-align-md="right">
					<b-checkbox></b-checkbox>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<br>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="toSee(row.item)">填報</b-button>
						</template>
						<template #cell(checkRecord)="row" >
							<template  v-for="data in row.item.Data">
								<b-container :key="data.id">
									<b-row>
										<b-col>事件名稱: {{ data.event	}} </b-col>
									</b-row>
									<b-row>
										<b-col>發佈日期: {{ data.releaseDate	}} </b-col>
									</b-row>
									<b-row>
										<b-col>抽查紀錄: <a href="#">{{ data.checkRecordFile}}</a> </b-col>
									</b-row>
									<br>
								</b-container>
							</template>
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
				key:	'id',
				label:	'流水號'
			},
			{
				key: 'plan',
				label:	'歸屬計畫'
			},
			{
				key: 'prjno',
				label:	'工程標案編號'
			},
			{
				key:	'name',
				label:	'工程標案名稱'
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
				key:	'checkRecord',
				label:	'抽查紀錄'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	undefined,
	}
 },
 methods: {
	toSee(item){
		console.log(item);
		this.$router.push({name:'FloEventFill'})
	},
	queryHandler(){
		this.items = 	[
			{	id: 1, plan: '災害準備金', prjno: '1100219', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', site:'宜蘭縣',	
				event:'颱風',releaseDate:'110/12/09',pk: 5566, 
				Data:[
						{event:'豪雨致災',id:'1',releaseDate:'110/11/11',checkRecordFile:'水溝清查.xls'},
						{event:'納莉颱風',id:'2',releaseDate:'110/11/11',checkRecordFile:'堤防巡查.xls'}
					] },
			{	id: 2, plan: '災害準備金', prjno: '1100219', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', site:'宜蘭縣',	
				event:'颱風',releaseDate:'110/12/09',pk: 5566, 
				Data:[
						{event:'豪雨致災',id:'1',releaseDate:'110/11/11',checkRecordFile:'水溝清查.xls'},
					] },
			{	id: 3, plan: '災害準備金', prjno: '1100219', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', site:'宜蘭縣',	
				event:'颱風',releaseDate:'110/12/09',pk: 5566,
				Data:[
						{event:'納莉颱風',id:'2',releaseDate:'110/11/11',checkRecordFile:'堤防巡查.xls'}
					] },
		]
	},
	goto(){
		this.$router.push({name:'FloEventCreate'})
	},

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
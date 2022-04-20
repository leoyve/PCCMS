<template>
	<div>
		<br>
		<h3><strong>查詢所屬標案</strong></h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="標案編號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="標案名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="工程地點" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="主辦機關" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>主辦機關於通報案件所在縣市之施工中或2年內完工標案一覽表</strong></h4></b-form-row>
				<b-form-row>
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					</b-table>
				</b-form-row>
				<b-pagination align="right"
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					first-number
				></b-pagination>
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
				key:	'workName',
				label:	'工程名稱'
			},
			{
				key:	'cmdNumber',
				label:	'標案編號'
			},
			{
				key:	'wkut',
				label: '主辦機關'
			}, 
			{
				key:	'workSite',
				label:	'工程地點'
			}, 
			{
				key:	'amount',
				label:	'決標金額'
			},
			{
				key:	'startDate',
				label:	'開工日期'
			},
			{
				key:	'endDate',
				label:	'完工日期'
			},
			{
				key:	'summery',
				label:	'工程概要'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{ id: 1, workName: '110年度大甲鐵砧山風景特定區及大安風景區週邊設施維護改善工程', cmdNumber: '110011912	', wkut: '臺中市風景區管理所',	
				workSite: '大甲區、大安區',	amount: '1,555', startDate:	'110/03/01',	endDate:	'',
				summery:	'完成(鐵砧山風景特定區、大安濱海樂園等)各項公共設施(含水電設備、廁所設備等)整建工程。',pk: 5566 },
			{ id: 2, workName: '108年度臺中市污水下水道零星用戶接管工程開口契約(一)', cmdNumber: '10805060091', wkut: '臺中市政府水利局污水營運科',	
				workSite: '中區、東區',	amount: '44,500', startDate:	'110/03/01',	endDate:	'109/09/29',
				summery:	'於履約地點範圍內，採用推進或明挖方式施工，以契約單價派工方式，埋設污水下水道管線及銜接用戶接管之工程。',pk: 5566 },
			{ id: 3, workName: '0年度臺中市路燈簡易巡修工程–北屯區及鄰近區域', cmdNumber: '109A-154-2	', wkut: '臺中市建設局養護工程處路燈養護科',	
				workSite: '北屯區及鄰近區域',	amount: '2,333', startDate:	'110/03/01',	endDate:	'',
				summery:	'臺中市路燈簡易巡修工程–北屯區及鄰近區域照明維持。',pk: 5566 },
		],
		checkAssign:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '未分案'	},
			{	value: 'Y', text: '已分案'	},
		],
		checkClosed:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '未結案'	},
			{	value: 'E', text: '逾期未結案'	},
			{	value: 'W', text: '待審查結案'	},
			{	value: 'Y', text: '已結案'	},
		],
		value1: '',
		value2: '',
		testBody:	[
			{
				test:	'1223'
			},
			{
				edit:	true,
			}
		]

	}
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
<template>
  <div>
    <br>
    <h3><strong><font color="brown">代訓機構開班一覽表</font></strong></h3>
    <br>
    <b-container fluid>
		<b-row class="col-sm row justify-content-end" >     
			<b-button size="sm" variant="success" @click="gotoParam('OpenPeriodNoticeQuery', {addFlag:true})">新增開班期別</b-button>&ensp; 
			<b-button size="sm" variant="outline-secondary" @click="$router.back(-1)">回上一頁</b-button>
		</b-row>
		<br>
		<b-form-row>
		<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="開班日期" label-align-md="right">
			<b-form-input type="search"></b-form-input>
		</b-form-group>
		</b-form-row>
		<b-form-row>
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="送審情形" label-align-md="right">
				<b-form-radio-group
					id="radio-group-1"
					v-model="picked"
					:options="options"
					name="radio-options"
				></b-form-radio-group>
			</b-form-group>
		</b-form-row>
		<b-form-row class="justify-content-end">
			<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
			<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
		</b-form-row>
    </b-container>
    <br>
    <b-container fluid>
		<!--依照使用者選的選項顯示品管/回訓-->
		<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>訓練主題班別開班一覽表</strong></h4></b-form-row>
		<b-form-row class="justify-content-end">
			<b-table striped hover :items="items" :fields="fields" head-variant="light">
				<!--工程會管理員且屬於回訓才有匯出回訓學員報表按鈕-->
				<template #cell(action)="row">
					<b-button size="sm" variant="warning"  @click="gotoParam('TrainingOpenDetail',row.item)" >檢視</b-button>&nbsp;
					<b-button size="sm" variant="info"  @click="gotoParam('')" >匯出回訓學員報表</b-button>&nbsp;
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
</template>


<script>

export default {
  data(){
    return{
     options: [
		{	text:	'送審中',	value:	'A'},
		{	text:	'審查退件',	value:	'B'},
		{	text:	'未送審',	value:	'C'},
		{	text:	'未備查',	value:	'C'},
		{	text:	'已備查',	value:	'C'},
		{	text:	'全部',	value:	'C'},
	],
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
			key:	'stage',
			label:	'期別'
		},
		{
			key:	'site',
			label:	'訓練地區'
		},
		{
			key:	'asdate',
			label: 	'開班日期'
		},
		{
			key:	'aedate',
			label: 	'結訓日期'
		},
		{
			key:	'timeSession',
			label: 	'開課時段'
		},
		{
			key:	'openType',
			label: 	'開課種類'
		},
		{
			key:	'status',
			label: 	'送審狀態'
		},
		{
			key:	'action',
			label: ''
		},
	],
	items:	[
		{
			id: 1, stage:'FE10001', site:'台北市',asdate:'100/04/25',aedate:'100/07/02',
			timeSession: '日間',	openType:'實體',status:'已備查',pk: 5566,
		},
		{
			id: 2, stage:'FE10002', site:'新北市',asdate:'100/02/25',aedate:'100/10/02',
			timeSession: '專案',	openType:'視訊',status:'已備查',	pk: 5566,
		},
		{
			id: 3, stage:'FE10003', site:'新竹市',asdate:'100/04/15',aedate:'100/07/22',
			timeSession: '假日',	openType:'視訊',status:'已備查',	pk: 5566,
		}
	]
  }
 },
 methods:  {

  },
  
}
</script>
<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
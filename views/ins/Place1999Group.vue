<template>
	<div>
		<br>
		<h3><strong>地方1999通報案件</strong></h3>
		<br>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="gotoParam('Case1999Info',{addFlag:true})" >新增</b-button> &nbsp; &nbsp;
				<b-button size="sm" variant="success" @click="batchReview()" >上傳案件</b-button>
			</b-form-row>
			<br>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container >
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>地方縣市1999通報案件統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('Place1999List',row.item)">查詢</b-button>
						</template>
					</b-table>
				</b-form-row>
			</b-container>
		</div>
	</div>
</template>

<script>

export default {
 data(){
	return{
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'wkutName',
				label:	'地方主管機關名稱'
			},
			{
				key:	'announcerNumber',
				label:	'通報案件數'
			},
			{
				key:	'avgDay',
				label: '平均處理天數'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:[
			{ id: 1, wkutName:	'行政院公共工程委員會',	announcerNumber:'3',	avgDay:	'1.5',	pk: 5566 },
			{ id: 2, wkutName:	'金門縣政府',	announcerNumber:'',	avgDay:	'',	pk: 5566 },
			{ id: 3, wkutName:	'臺北市政府',	announcerNumber:'',	avgDay:	'',	pk: 5566 },
			{ id: 4, wkutName:	'新北市政府',	announcerNumber:'5',	avgDay:	'2.66',	pk: 5566 },
			{ id: 5, wkutName:	'臺中市政府',	announcerNumber:'10',	avgDay:	'3.5',	pk: 5566 },
			{ id: 6, wkutName:	'臺南市政府',	announcerNumber:'',	avgDay:	'',	pk: 5566 },
			{ id: 7, wkutName:	'高雄市政府',	announcerNumber:'',	avgDay:	'',	pk: 5566 },
		],
	}
 },
 methods:{
	batchReview(){
		alert("檔案批次匯入。");
	}
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
<template>
	<div>
		<br>
		<h3><strong><font color="brown">訓練主題班別師資授課時數統計</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別種類" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="開班起訖日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
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
			<b-container >
				<!--帶入選項值-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}品管班師資授課時數統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('TeachingCourseDetail', row.item)">檢視</b-button>
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
		perPage: 10,
		currentPage: 1,
		options: [
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'B'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號',
			},
			{
				key:	'teacherName',
				label:	'教師姓名'
			},
			{
				key:	'serviceUnit',
				label:	'服務單位名稱'
			} ,
			{
				key:	'workSituation',
				label: '在職情形'
			}, 
			{
				key:	'teachClassNum',
				label: 	'授課總課程數'
			}, 
			{
				key:	'teachClassHours',
				label:	'授課總時數'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{
				id: '1',	teacherName: '王XX', serviceUnit: '內政部營建署建築工程設計隊(退休)', workSituation: '退休', 
				teachClassNum:'25',	teachClassHours:'144',	pk: 5566
			},
			{
				id: '2',	teacherName: '林XX', serviceUnit: '協展冷凍空調技師事務所', workSituation: '民間單位在職', 
				teachClassNum:'14',	teachClassHours:'86',	pk: 5566
			},
			{
				id: '3', 	teacherName: '陳XX', serviceUnit: '前桃園市政府交通局捷運工程處', workSituation: '政府單位在職', 
				teachClassNum:'10',	teachClassHours:'66',	pk: 5566
			}
		],
	}
 },
 methods: {

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
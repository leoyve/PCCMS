<template>
	<div>
		<br>
		<h3><strong><font color="brown">人員時數統計表</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="統計日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="課程種類" label-align-md="right">
					<b-form-checkbox-group
						v-model="selected"
						:options="checkOptions"
						class="mb-2"
						value-field="item"
						text-field="name"
						:disabled="disabledFlag"
						name="flavour-1a"
						inline
					></b-form-checkbox-group>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>人員時數統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('PersonHoursReportDetail', row.item)">明細</b-button>
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
		checkOptions: [
			{	name:	'開訓', item:1, notEnabled: false},
			{	name:	'課程',item:2,notEnabled: false},
			{	name:	'測驗', item:3,notEnabled: false},
			{	name:	'座談', item:4,notEnabled: false},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號',
			},
			{
				key:	'courseType',
				label:	'課程種類'
			} ,
			{
				key:	'personName',
				label:	'教師姓名'
			},
			{
				key:	'workSituation',
				label: '在職情形'
			}, 
			{
				key:	'hours',
				label:	'授課總時數'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{
				id: '1',courseType:'開訓',	personName: '王XX',  workSituation: '退休', 
				hours:'50',	pk: 5566
			},
			{
				id: '2',courseType:'課程',	personName: '林XX', workSituation: '民間單位在職', 
				hours:'66',	pk: 5566
			},
			{
				id: '3',courseType:'測驗',	personName: '陳XX', workSituation: '政府單位在職', 
				hours:'30',	pk: 5566
			},
			{
				id: '4',courseType:'座談',	personName: '許XX', workSituation: '政府單位在職', 
				hours:'45',	pk: 5566
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
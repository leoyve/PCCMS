<template>
	<div>
		<br>
		<h3><strong><font color="brown">歷史紀錄查詢</font></strong></h3>
		<br>
		<b-container >
			<br>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="創新產品名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="廠商名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="交流機關名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="交流或通知不交流時間" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="廠商登錄產品日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker3" v-model="value3" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker4" v-model="value4" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="交流狀態" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<b-form-row class="row justify-content-end">
					<b-button size="md" variant="success" @click="queryHandler" >匯出</b-button>
				</b-form-row>
				<br>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="toSee(row.item)">檢視</b-button>
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
		picked: 'A',
		options: [
			{	text:	'所有產品',	value:	'A'},
			{	text:	'交流中',	value:	'B'},
			{	text:	'已交流',	value:	'C'},
			{	text:	'不交流',	value:	'D'}
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
				key: 'communicateDate',
				label:	'交流或通知不交流日期'

			},
			{
				key: 'signDate',
				label:	'廠商登錄產品日期'

			},
			{
				key:	'name',
				label:	'創新產品名稱'
			},
			{
				key:	'vendorName',
				label: '廠商名稱'
			}, 
			{
				key:	'wkutName',
				label:	'交流機關名稱'
			}, 
			{
				key:	'action',
				label:	''
			},
			],
		items:	undefined,
		value1:	'',
		value2:	'',
		value3:	'',
		value4:	'',

	}
 },
 methods: {
	toSee(item){
		// alert(item.accpetType);
		console.log(item);
		this.$router.push({name:'OpinionView'})
	},
	queryHandler(){
		this.items = 	[
			{	id: 1, name: 'PCSR防水工法', communicateDate: '110/12/12', vendorName: '元X工程有限公司',	wkutName: '工程會', signDate: '110/12/12', pk: 5566, },
			{	id: 2, name: '無框架工法', vendorName: '易X工程有限公司',	wkutName: '行政院', signDate: '110/03/03',	communicateDate: '110/11/02', pk: 7788, },
			{	id: 3, name: '創新工法', vendorName: '大X工程有限公司',	wkutName: '台北市政府', signDate: '110/10/10', communicateDate: '110/12/22', pk: 1133,	}
		]
	},
	reset(){

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
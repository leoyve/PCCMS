<template>
	<div>
		<br>
		<h3><strong><font color="brown">開訓/結訓通知單</font></strong></h3>
		<br>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="l" variant="success"  @click="gotoParam('OpenAndEndNoticeNewQuery', )" >新增</b-button>&nbsp;&nbsp;
			</b-form-row>
			<br>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通知單號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="期別" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別種類" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options3"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="申請日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="申請種類" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options2"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="狀態" label-align-md="right">
					<b-form-select :options="classType"></b-form-select>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>測驗題目一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="info" @click="gotoParam('OpenEndNoticeEdit', {updateFlag:true,...row.item})">明細</b-button>&nbsp;
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
		options2: [
			{	text:	'開訓',	value:	'A'},
			{	text:	'結訓',	value:	'B'},
			{	text:	'不限',	value:	'C'},
		],
		options3:[
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'C'},
		],
		classType:[
			{ value: '', text: '全部' },
			{ value: '0', text: '未完成' },
			{ value: '1', text: '送審中' },
			{ value: '2', text: '已核准' },
			{ value: '3', text: '已駁回' },
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
				key:	'submitNum',
				label:	'申請單號',
			},
			{
				key:	'submitDate',
				label: '申請日期'
			},
			{
				key:	'stage',
				label:	'期別',
			},
			{
				key:	'classType',
				label: '訓練主題班別種類',
				thStyle: { width: "10%"},
			},
			{
				key:	'submitType',
				label: '申請種類',	
			},
			{
				key:	'status',
				label: '狀態',
			},
			{
				key:	'action',
				label: '',
			},
		],
		items:	[
			{
				id: 1, submitNum: 'E11000000001', submitDate: '110/01/03',stage:'FE11001',classType:'品管',
				submitType:'開訓',status:'未完成',pk: 5566, 
			},
			{
				id: 2,submitNum: 'E11000000002',submitDate: '110/02/09',stage:'FE11002',classType:'品管',
				submitType:'結訓',status:'送審中',pk: 5566
			},
			{
				id: 3, submitNum: 'E11100000002', submitDate: '111/03/06', stage:'LR11101',classType:'回訓',
				submitType:'結訓',status:'已核准',pk: 5566
			}
		]
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
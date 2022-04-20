<template>
	<div>
		<br>
		<h3><strong><font color="brown">尚未成功立案管理</font></strong></h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報者姓名" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報者電子郵件" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主題" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="填報日期" label-align-md="right">
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
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('CreateInsCase',row.item)">明細</b-button>
					</template>
				</b-table>
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
				key:	'number',
				label:	'案件編號'
			},
			{
				key:	'submitDate',
				label:	'通報日期'

			} ,
			{
				key:	'name',
				label: '通報人姓名'
			}, 
			{
				key:	'email',
				label:	'通報人電子郵件'
			}, 
			{
				key:	'title',
				label:	'通報主題'
			}, 
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{ id: 1, number: '11000000001', submitDate: '110/03/03', name: '林XX',	email: 'test@gmail.com',	title: '施工區域不明確', pk: 5566 },
			{ id: 2, number: '11000000002', submitDate: '110/05/05', name: '劉XX',	email: 'test@gmail.com',	title: '混凝土澆置品管', pk: 5566 },
			{ id: 3, number: '11000000003', submitDate: '110/11/11', name: '吳XX',	email: 'test@gmail.com',	title: '水溝蓋不平', pk: 5566 },
		],
    value1: '',
    value2: '',

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
<template>
	<div>
		<br>
		<h3><strong><font color="brown">民眾通報但尚未成功立案之案件管理畫面</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報者姓名關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報者電子郵件關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報公共設施名稱關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="填表日期" label-align-md="right">
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
				<!--應該依照時間近的在上面-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>尚未成功立案之通報案件一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('PeopleUnCase', row.item)">立案</b-button>
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
				label:	'流水號'
			},
			{
				key:	'caseNum',
				label:	'案件編號'
			},
			{
				key:	'submitDate',
				label:	'填表日期',
			},
			{
				key:	'name',
				label:	'通報人姓名'
			},
			{
				key:	'email',
				label:	'通報人電子郵件'
			},
			{
				key:	'constName',
				label:	'通報公共設施名稱',
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{
				caseNum: '10800000002', submitDate: '108/10/27',	name:'林小姐',	email:'test@gmail.com',	
				constName:'中和廟子尾鶴齡交誼中心',
			},
			{
				caseNum: '11000000002', submitDate: '110/01/11',	name:'黃先生',	email:'test@gmail.com',	
				constName:'隱藏建築',
			},
			{
				caseNum: '11000000005', submitDate: '110/04/08',	name:'黃小姐',	email:'test@gmail.com',	
				constName:'補助地方政府興建示範停車場計畫—花蓮縣花蓮市忠孝立體停車塔',
			},
		]
	}
 },
 methods: {
	
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
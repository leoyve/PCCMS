<template>
	<div>
		<br>
		<h3><strong>各主管機關通報案件民眾通知結案後滿意度調查統計表</strong></h3>
		<br>
		<b-container fluid>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件限辦日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="納入工程會督工報告有效統計案件" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkAssign" name="radio-validation-2"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主管機關類別" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkClosed" name="radio-validation-1"></b-form-radio-group>
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
				<b-form-row>
					<h4><font color="red">民眾於系統通知結案後所填寫之滿意度調查資料，方納入本表統計數據。</font></h4>
				</b-form-row>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>各主管機關通報案件民眾通知結案後滿意度調查統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="light">
					<template #cell(satA)="row">
						<a href="#" variant="primary" @click="toSee(row)" >{{row.item.satANum}}</a>
					</template>
					<template #cell(satB)="row">
						<a href="#" variant="primary" @click="toSee(row)" >{{row.item.satBNum}}</a>
					</template>
					<template #cell(satC)="row">
						<a href="#" variant="primary" @click="toSee(row)" >{{row.item.satCNum}}</a>
					</template>
					<template #cell(satD)="row">
						<a href="#" variant="primary" @click="toSee(row)" >{{row.item.satDNum}}</a>
					</template>
					<template #cell(satE)="row">
						<a href="#" variant="primary" @click="toSee(row)" >{{row.item.satENum}}</a>
					</template>
					<template #cell(satF)="row">
						<a href="#" variant="primary" @click="toSee(row)" >{{row.item.satFNum}}</a>
					</template>
					<template #cell(total)="row">
						<a href="#" variant="primary" @click="toSee(row)" >{{row.item.totalNum}}</a>
					</template>
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
				key:	'wkut',
				label:	'主管機關',
			},
			{
				key:	'caseNum',
				label:	'通報件數'
			},
			{
				key:	'satA',
				label:	'非常滿意(A)'
			},
			{
				key:	'satB',
				label:	'很滿意(B)'
			},
			{
				key:	'satC',
				label:	'滿意(C)'
			},
			{
				key:	'satD',
				label:	'不滿意'
			},
			{
				key:	'satE',
				label:	'很不滿意'
			},
			{
				key:	'satF',
				label:	'非常不滿意'
			},
			{
				key:	'total',
				label:	'小計(D)'
			},
			{
				key:	'rate',
				label:	'滿意件數比例(A+B+C)/(D)'
			},

		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', caseNum:'10',	satANum: '5', satBNum: '2',	satCNum: '0',	satDNum: '0', satENum:	'0',	satFNum:'0',
				totalNum:'7',	rate:'100.00%',	pk: 5566 },
			{ id: 2, wkut: '台中市政府', caseNum:'5',	satANum: '0', satBNum: '1',	satCNum: '0',	satDNum: '0', satENum:	'1',	satFNum:'1',
				totalNum:'3',	rate:'33.33%',	pk: 5566 },
			{ id: 3, wkut: '新北市政府', caseNum:'6',	satANum: '2', satBNum: '0',	satCNum: '0',	satDNum: '0', satENum:	'0',	satFNum:'1',
				totalNum:'3',	rate:'66.67%',	pk: 5566 },


		],
		checkAssign:	[
			{	value: '', text: '是'	},
			{	value: 'N', text: '否'	},
			{	value: 'Y', text: '不限'	},
		],
		checkClosed:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '中央'	},
			{	value: 'E', text: '地方'	},
		],
	}
 },
 methods: {
	toSee(row){
		//alert(item.pk);
		console.log(row.item.wkut);
		this.$router.push({name:'ReportCommonList',  params:{wkutName:	row.item.wkut}})
		
	},
  queryHandler(){

  },
  reset(){

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
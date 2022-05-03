<template>
	<div>
		<br>
		<h3><strong>各主管機關通報案件工程類別統計表</strong></h3>
		<br>
		<b-container fluid>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
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
				<!-- 紅字部分如果有TIP元件請使用TIP元件，另外文字比較長，請使用變數代入，畫面較，畫面較簡潔-->
				<b-form-row class="justify-content-start"><font color='red'>PS.系統管理機關所屬案件及尚未分文案件均不納入統計。</font></b-form-row>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>各主管機關通報案件工程類別統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="warning">
						<template #custom-foot>
							<b-tr>
								<b-th colspan="2">合計</b-th>
								<b-th >{{totalcategory1}}</b-th>
								<b-th >{{totalcategory2}}</b-th>
								<b-th >{{totalcategory3}}</b-th>
								<b-th >{{totalcategory4}}</b-th>
								<b-th >{{totalcategory5}}</b-th>
								<b-th >{{totalcategory6}}</b-th>
								<b-th >{{totalcategory7}}</b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('CaseCategoryList')" >{{totalOther}}</a></b-th>
								<b-th >{{totalSum}}</b-th>
							</b-tr>
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
				key:	'wkut',
				label:	'主管機關',
				thStyle: { width: "15%" },
			},
			{
				key:	'category1',
				label:	'水利'
			},
			{
				key:	'category2',
				label:	'交通運輸'
			},
			{
				key:	'category3',
				label:	'建築'
			},
			{
				key:	'category4',
				label:	'重劃'
			},
			{
				key:	'category5',
				label:	'管線'
			},
			{
				key:	'category6',
				label:	'維修'
			},
			{
				key:	'category7',
				label:	'環境'
			},
			{
				key:	'other',
				label:	'其他'
			},
			{
				key:	'total',
				label:	'小計'
			},
			
		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', category1: '3', category2: '18',	category3:'4',	category4:'',	category5:'',	category6:'', category7:'',	other:'1',
				total:'26',	pk: 5566 },
			{ id: 2, wkut: '台中市政府', category1: '44', category2: '1',	category3:'',	category4:'',	category5:'3',	category6:'', category7:'',	other:'1',
				total:'49',	pk: 5566 },
			{ id: 3, wkut: '內政部', category1: '1', category2: '4',	category3:'4',	category4:'',	category5:'1',	category6:'', category7:'3',	other:'',
				total:'13',	pk: 5566  },
		],
		totalcategory1:'48',
		totalcategory2:'23',
		totalcategory3:'8',
		totalcategory4:'',
		totalcategory5:'4',
		totalcategory6:'',
		totalcategory7:'3',
		totalOther:'2',
		totalSum:'88',
		checkClosed:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '中央'	},
			{	value: 'E', text: '地方'	},
		],
	}
 },
 mounted(){
	alert("合計中的其他可導至另外頁面。");
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
<template>
	<div>
		<b-container fluid>
			<h2><font color="blue">各主管機關通報案件處理結案情形統計表</font></h2>
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
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="納入督工有效統計案件" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkAssign" name="radio-validation-1"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主管機關類別" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkClosed" name="radio-validation-1"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container fluid>
				<!-- 紅字部分如果有TIP元件請使用TIP元件，另外文字比較長，請使用變數代入，畫面較，畫面較簡潔-->
				<b-form-row class="justify-content-start"><font color='red'>PS.已結案督工案件之處理天數，係自中央督工方案機關分案日期起至主辦機關申請結案日期止之天數；但其中主管機關如有因民眾滿意度調查於結案後表示不滿意，復改成未結案者</font></b-form-row>
				<b-form-row class="justify-content-start"><font color='red'>處理天數將扣除原結案通知民眾日期至民眾嗣後第1次表示不滿意日期間之天數。</font></b-form-row>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>各主管機關通報案件民眾通知結案後滿意度調查統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="warning">
						<template #cell(action)="row">
							<!-- 傳遞的參數應該是機關代碼和查詢條件-->
							<!-- 最下面那一列為合計-->
							<!-- 改成BUTTON-->
							<b-button size="sm" variant="primary" @click="toSee(row)" >{{row.item.wkut}}</b-button>
						</template>
						<template #custom-foot>
							<b-tr>
								<b-th colspan="2"><b-button size="sm" variant="primary" @click="toSee(row)" >合計</b-button></b-th>
								<b-th >{{total1}}</b-th>
								<b-th >{{total2}}</b-th>
								<b-th >{{total3}}</b-th>
								<b-th >{{total4}}</b-th>
								<b-th >{{total5}}</b-th>
								<b-th >{{total6}}</b-th>
								<b-th >{{total7}}</b-th>
								<b-th >{{total8}}</b-th>
								<b-th >{{total9}}</b-th>
							</b-tr>
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
				key:	'action',
				label:	'主管機關',
				thStyle: { width: "15%" },
			},
			{
				key:	'caseTotalA',
				label:	'通報案件總項數(A)'
			},
			{
				key:	'closeCaseB',
				label:	'結案項數'
			},
			{
				key:	'closeCaseRate',
				label:	'結案比例(B/A)'
			},
			{
				key:	'avgDay',
				label:	'處理天數平均值'
			},
			{
				key:	'avgStandDay',
				label:	'處理天數標準偏差值'
			},
			{
				key:	'delayNum',
				label:	'結案-逾期項數'
			},
			{
				key:	'nonClose',
				label:	'未結案項數(C)'
			},
			{
				key:	'nonCloseRate',
				label:	'未結案比例(C/A)'
			},
			{
				key:	'delayNum2',
				label:	'未結案-逾期項數'
			},

		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', caseTotalA: '5', closeCaseB: '5',	closeCaseRate: '100.00',	avgDay: '3.76', avgStandDay:	'5.23',	delayNum:'2',
				nonClose:	'1',	nonCloseRate:	'50.00',	delayNum2:'',	pk: 5566 },
			{ id: 2, wkut: '台中市政府', caseTotalA: '5', closeCaseB: '5',	closeCaseRate: '100.00',	avgDay: '3.76', avgStandDay:	'5.23',	delayNum:'',
				nonClose:	'',	nonCloseRate:	'',	delayNum2:'',	pk: 5566 },
			{ id: 3, wkut: '新北市政府', caseTotalA: '5', closeCaseB: '5',	closeCaseRate: '100.00',	avgDay: '3.76', avgStandDay:	'5.23',	delayNum:'2',
				nonClose:	'',	nonCloseRate:	'',	delayNum2:'',	pk: 5566 },


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
		total1:'200',
		total2:'180',
		total3:'50.00',
		total4:'2.55',
		total5:'4.3',
		total6:'3',
		total7:'',
		total8:'10.00',
		total9:'',
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
<template>
	<div>
		<br>
		<h3><strong>各主管機關通報缺失件數統計表</strong></h3>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>各主管機關通報缺失件數統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="warning">
						<template #custom-foot>
							<b-tr>
								<b-th colspan="2">合計</b-th>
								<b-th >{{totalFault1}}</b-th>
								<b-th >{{totalFault2}}</b-th>
								<b-th >{{totalFault3}}</b-th>
								<b-th >{{totalFault4}}</b-th>
								<b-th >{{totalFault5}}</b-th>
								<b-th >{{totalOther}}</b-th>
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
				key:	'fault1',
				label:	'規劃設計不周'
			},
			{
				key:	'fault2',
				label:	'工程品質不良'
			},
			{
				key:	'fault3',
				label:	'安全措施不足'
			},
			{
				key:	'fault4',
				label:	'環境設施不佳'
			},
			{
				key:	'fault5',
				label:	'工程進度緩慢'
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
			{ id: 1, wkut: '宜蘭縣政府', fault1: '24', fault2: '35',	fault3:'12',	fault4:'23',	fault5:'5',	other:'33', total:'132',	pk: 5566 },
			{ id: 2, wkut: '台中市政府', fault1: '12', fault2: '5',	fault3:'22',	fault4:'8',	fault5:'11',	other:'20', total:'78',	pk: 5566 },
			{ id: 3, wkut: '內政部', fault1: '5', fault2: '12',	fault3:'13',	fault4:'4',	fault5:'6',	other:'9', total:'49',	pk: 5566 },
		],
		totalFault1:'41',
		totalFault2:'52',
		totalFault3:'47',
		totalFault4:'35',
		totalFault5:'22',
		totalOther:'62',
		totalSum:'259',
		checkClosed:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '中央'	},
			{	value: 'E', text: '地方'	},
		],
	}
 },
 methods: {
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
<template>
	<div>
		<br>
		<h3><strong>主管機關分文至主辦機關天數統計表</strong></h3>
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
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container fluid>
				<!-- 紅字部分如果有TIP元件請使用TIP元件，另外文字比較長，請使用變數代入，畫面較，畫面較簡潔-->
				<b-form-row class="justify-content-start"><font color='red'>PS.尚未分文案件均不納入統計。</font></b-form-row>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>主管機關分文至主辦機關天數統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="warning">
						<template #custom-foot>
							<b-tr>
								<b-th>合計</b-th>
								<!-- 這個是平均天數 (確認一下邏輯)-->
								<b-th >{{avgDay}}</b-th>
								<b-th >{{totalNum}}</b-th>
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
				key:	'divisionDay',
				label:	'主管機關分案天數',
				thStyle: { width: "15%" },
			},
			{
				key:	'divisionNum',
				label:	'分案件數'
			},
			{
				key:	'rate',
				label:	'比例(%)'
			},
			
		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, divisionDay: '0', divisionNum: '200', rate: '83.68',	pk: 5566 },
			{ id: 2, divisionDay: '1', divisionNum: '30', rate: '12.55',	pk: 5566 },
			{ id: 3, divisionDay: '2', divisionNum: '9', rate: '3.77',	pk: 5566 },
		],
		avgDay:'0.2',
		totalNum:'239',
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
<template>
	<div>
		<b-container fluid>
			<h2><font color="blue">各通報案件缺失地點所在縣市件數統計表</font></h2>
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
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container fluid>
				<!-- 紅字部分如果有TIP元件請使用TIP元件，另外文字比較長，請使用變數代入，畫面較，畫面較簡潔-->
				<b-form-row class="justify-content-start"><font color='red'>PS.系統管理機關所屬案件及尚未分文案件均不納入統計。</font></b-form-row>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>各通報案件缺失地點所在縣市件數統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="warning">
						<template #custom-foot>
							<b-tr>
								<b-th colspan="2">合計</b-th>
								<b-th >{{totalNum}}</b-th>
								<b-th >{{totalRate}}</b-th>
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
				key:	'city',
				label:	'通報縣市',
				thStyle: { width: "15%" },
			},
			{
				key:	'informNum',
				label:	'通報件數'
			},
			{
				key:	'rate',
				label:	'比例(%)'
			},
			
		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, city: '宜蘭縣', informNum: '24', rate: '9.52',	pk: 5566 },
			{ id: 2, city: '台中市', informNum: '25', rate: '9.92',	pk: 5566 },
			{ id: 3, city: '基隆市', informNum: '9', rate: '3.57',	pk: 5566 },
		],
		totalNum:'252',
		totalRate:'100',
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
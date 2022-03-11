<template>
	<div>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{ this.$route.params.wkutName }}通報案件處理結案情形統計表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
			<b-table striped hover :items="items" :fields="fields" head-variant="warning">
				<template #thead-top>
					<b-tr>
						<b-th colspan="3"></b-th>
						<b-th class="border border-light" variant="secondary" colspan="5">已結案</b-th>
						<b-th class="border border-light " variant="primary" colspan="3">未結案</b-th>
					</b-tr>
				</template>
				<template #cell(action)="row">
					<!-- 傳遞的參數應該是機關代碼和查詢條件-->
					<!-- 最下面那一列應該為合計，技術上還未研究 -->
					<b-button size="sm" variant="primary" @click="toSee(row)" >{{row.item.wkut}}</b-button>
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
				label:	'主辦機關'
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
	}
 },
 methods: {
	toSee(row){
		//alert(item.pk);
		//console.log(item);
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
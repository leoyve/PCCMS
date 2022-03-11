<template>
	<div>
		<!-- 有資料才顯示 -->
		<b-container >
			<h3><strong>民眾滿意度調查一覽表</strong></h3>
			<br>
			<b-form-row class="justify-content-start">
				<h6><font color='red'>1.請先就民眾滿意度調查紀錄資料中，表示不滿意、很不滿意或非常不滿意之原因，填寫回應說明。</font></h6>
			</b-form-row>
			<b-form-row class="justify-content-start">
				<h6><font color='red'>2.本案件通報民眾將可檢視您填寫之回應說明，填寫內容務請審慎具體，以有效疏解民眾疑慮及提升滿意度。</font></h6>
			</b-form-row>
		</b-container>
		<br>
		<b-container >
			<b-form-row class="justify-content-center text-light bg-dark"><h4><strong>民眾滿意度調查及機關回應明紀錄資料</strong></h4></b-form-row>
			<b-form-row class="justify-content-center">
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(action)="row" >
						<b-button size="sm" variant="success" @click="toSee(row.item)">填寫</b-button>
					</template>
				</b-table>
			</b-form-row>
		</b-container>
	</div>
</template>


<script>


export default {
 data(){
	return{
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'submitDate',
				label: '填寫日期',
			}, 
			{
				key:	'status',
				label:	'滿意度'
			} ,
			{
				key:	'comment',
				label: '滿意/不滿意原因'
			},
			{
				key:	'responseDate',
				label: '機關回應日期',
			}, 
			{
				key:	'response',
				label:	'機關回應說明'
			} , 
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, submitDate: '110/02/03', responseDate: '110/03/03', status: '非常滿意',	comment:'督工系統管理者代為新增！',
			response:'已經盡快處理',	pk: 5566 },
			
		],
		
	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		this.$router.push({name:'SatisfactionResponse'})
	},
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
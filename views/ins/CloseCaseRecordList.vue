<template>
	<div>
		<!-- 有資料才顯示 -->
		<b-container >
			<b-form-row class="justify-content-center text-light bg-dark"><h4><strong>結案申請及審查歷次紀錄一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-center">
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(action)="row" >
						<!-- 只有在申請結案 && 結案申請還未被審查的時候才會出現-->
						<b-button size="sm" variant="danger" @click="toSee(row.item)" v-show="showFlag">撤回</b-button>
					</template>
				</b-table>
			</b-form-row>
		</b-container>
	</div>
</template>


<script>


export default {
	props:  ['showFlag'],
 data(){
	return{
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'disWkut',
				label: '處理機關',
				thStyle: { width: "10%" },
			}, 
			{
				key:	'closeDate',
				label:	'結案日期'
			} ,
			{
				key:	'backComment',
				label: '針對上次不同意結案理由之說明'
			},
			{
				key:	'reviewWkut',
				label: '審查機關',
				thStyle: { width: "10%" },
			}, 
			{
				key:	'reviewDate',
				label:	'審查日期'
			} ,
			{
				key:	'disAgreeComment',
				label:	'不同意結案理由'
			}, 
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, disWkut: '行政院公共工程委員會', closeDate: '110/03/03', backComment: '辦理進度嚴重落後，須檢討',	reviewWkut:'行政院公共工程委員會',	reviewDate: '110/03/03',	
			disAgreeComment:'辦理進度嚴重落後，須檢討',	pk: 5566 },
			
		],
		
	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		confirm('確認是否撤回?');
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
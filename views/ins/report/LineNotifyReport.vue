<template>
	<div>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>各主管機關啟用LineAPP通知服務人數統計表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="warning">
				</b-table>
			</b-form-row>
		</b-container>
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
				key:	'efficientAccountNum',
				label:	'有效帳號人數(A)'
			},
			{
				key:	'enableLineNum',
				label:	'啟用LineAPP通知服務人數(B)'
			},
			{
				key:	'enableRate',
				label:	'啟用比例(%)(B/A)'
			},

		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', efficientAccountNum: '5', enableLineNum: '0',	enableRate: '0.00',	pk: 5566 },
			{ id: 2, wkut: '台中市政府', efficientAccountNum: '20', enableLineNum: '10',	enableRate: '50.00',	pk: 5566 },
			{ id: 3, wkut: '新北市政府', efficientAccountNum: '17', enableLineNum: '5',	enableRate: '29.41',	pk: 5566 },


		],
	}
 },
 methods: {

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
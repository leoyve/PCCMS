<template>
	<div>
		<br>
		<h3>活化計畫各分項作業里程碑整體上鎖日期</h3>
		<br>
		<b-container>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>活化計畫各分項作業里程碑整體上鎖日期</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('MileStoneDetail', row.item)">修改</b-button>
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
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'yr',
				label:	'年度'
			},
			{
				key:	'lockDate1',
				label:	'里程碑項目及預定完成上鎖日期'
			},
			{
				key:	'lockDate2',
				label:	'實際完成上鎖日期'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{ yr:111,lockDate1:'111/02/26', lockDate2:'(未上鎖)'},
			{ yr:110,lockDate1:'(未上鎖)', lockDate2:'(未上鎖)'},
			{ yr:109,lockDate1:'109/06/30', lockDate2:'(未上鎖)'},
			{ yr:108,lockDate1:'108/12/31', lockDate2:'(未上鎖)'},

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
<template>
	<div>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>啟用行動推播服務人數統計表</strong></h4></b-form-row>
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
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'wkut',
				label:	'主管機關'
			},
			{
				key:	'useNum',
				label:	'使用人數'
			},
			{
				key:	'informNum',
				label:	'啟用行動推播服務人數'
			},
			
		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '中央研究院', informNum: '2',	pk: 5566 },
			{ id: 2, wkut: '內政部', informNum: '',	pk: 5566 },
			{ id: 3, wkut: '財政部', informNum: '1',	pk: 5566 },
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
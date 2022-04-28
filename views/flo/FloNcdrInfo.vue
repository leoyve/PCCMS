<template>
	<div>
		<br>
		<h3><strong>NCDR整體災害示警</strong></h3>
		<br>
		<b-container fluid>
			<b-row>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				</b-table>
			</b-row>
			<b-pagination align="right"
				v-model="currentPage"
				:total-rows="rows"
				:per-page="perPage"
				first-number
			></b-pagination>
		</b-container>
		<br>
	</div>
</template>


<script>
export default {
 data(){
	return{
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key: 'prjno',
				label:	'警報示別碼',
			},
			{
				key:	'name',
				label:	'警報發送機關',
			},
			{
				key:	'wkut',
				label: '警戒顏色燈號'
			}, 
			{
				key:	'site',
				label:	'生效時間'
			}, 
			{
				key:	'amount',
				label:	'到期時間'
			}, 
			{
				key:	'decideDate',
				label:	'事件'
			}, 
			{
				key:	'preDate',
				label:	'影響程度'
			}, 
			{
				key:	'man',
				label:	'影響區域'
			},
		],
	}
 },
 methods: {
 },mounted(){
	alert("無災害時顯示 '目前無生效中之災害示警！'");
 }
}


</script>

<style>

.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
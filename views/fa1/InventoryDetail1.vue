<template>
	<div>
		<br>
		<h3><strong><font color="brown">清查公共設施使用情形表</font></strong></h3>
		<br>		
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>設施管理機關所屬清查公共設施使用情形表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="light">
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('InventoryDetail2', row.item)">明細</b-button>
					</template>
				</b-table>
				<b-pagination align="right"
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					first-number
				></b-pagination>
			</b-form-row>
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
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'wkut',
				label:	'主管機關名稱'
			},
			{
				key:	'normal',
				label:	'正常使用(件)',
			},
			{
				key:	'unNormal',
				label:	'未正常使用(件)'
			},
			{
				key:	'total',
				label:	'合計(件)'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{	wkut: '金門縣政府', normal:91,	unNormal:0,	total:91,},
			{	wkut: '宜蘭縣政府', normal:102,	unNormal:0,	total:102,},
			{	wkut: '宜蘭縣頭城鎮公所', normal:3799,	unNormal:3,	total:3802,},
			{	wkut: '	宜蘭縣員山鄉公所', normal:538,	unNormal:1,	total:539,},
		]
	}
 },
 methods: {
	
 },
 mounted(){
	this.items.forEach((items, index) => { items.serial = index + 1; });
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
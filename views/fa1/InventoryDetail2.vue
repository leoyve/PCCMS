<template>
	<div>
		<br>
		<h3><strong><font color="brown">清查公共設施使用情形表</font></strong></h3>
		<br>		
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>清查公共設施使用情形一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="light">
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('InventoryInfo', row.item)">檢視</b-button>
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
				key:	'constName',
				label:	'設施名稱'
			},
			{
				key:	'wkut',
				label:	'設施管理機關',
			},
			{
				key:	'bosWkut',
				label:	'目的事業主管機關'
			},
			{
				key:	'category',
				label:	'設施類別'
			},
			{
				key:	'isUserful',
				label:	'是否正常使用'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{	constName:'宜蘭地區水資源回收中心',wkut: '宜蘭縣政府', bosWkut:'內政部',category:'工程設施',isUserful:'是'},
			{	constName:'羅東地區水資源回收中心',wkut: '宜蘭縣政府', bosWkut:'內政部',category:'工程設施',isUserful:'是'},
			{	constName:'榮湖水資源回收中心',wkut: '金門縣政府', bosWkut:'內政部',category:'工程設施',isUserful:'是'},
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
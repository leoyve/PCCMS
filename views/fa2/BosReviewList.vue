<template>
	<div>
		<br>
		<h3><strong><font color="brown">目的事業主管機關當期活化補助工作計畫審查一覽表</font></strong></h3>
		<br>	
		<div>
			<b-container fluid>
				<b-form-row class="row justify-content-center bg-info text-light">	<h3>目的事業主管機關當期活化補助工作計畫審查一覽表</h3></b-form-row>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('WorkDataBosSubmit', row.item)">審查</b-button>
						</template>
					</b-table>
				</b-form-row>
				<b-form-row class="row justify-content-end">
					<b-pagination align="right"
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						first-number
					></b-pagination>
				</b-form-row>
			</b-container>
		</div>
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
				key: 'PLNNO',
				label:	'活化計畫編號',
			},
			{
				key: 'plnName',
				label:	'活化計畫名稱',
				thStyle: { width: "15%" },
			},
			{
				key:	'wkut',
				label:	'主辦機關'
			},
			{
				key:	'constName',
				label: '公共設施名稱'
			}, 
			{
				key:	'PLNAMT',
				label:	'申請補助經費數(仟元)'
			}, 
			{
				key:	'bosMemo',
				label:	'審查意見'
			}, 
			{
				key:	'action',
				label:	''
			},
		],
		items:[
			{
				PLNNO:'1110000001',plnName:'頭份鎮停二立體停車場拆除工程',wkut:'苗栗縣頭份市公所',constName:'頭份鎮停二立體停車場',
				PLNAMT:'5,000',bosMemo:'審核同意',
			},
			{
				PLNNO:'1110000002',plnName:'嘉義縣布袋鎮布袋鎮景山國民小學推動閒置公共設施活化--正義校區活化計畫',wkut:'嘉義縣布袋鎮景山國民小學',constName:'嘉義縣布袋鎮景山國民小學正義校區',
				PLNAMT:'8,214',bosMemo:'審核通過',
			},
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
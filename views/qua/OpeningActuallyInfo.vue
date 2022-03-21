<template>
	<div>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>已填報本年度開班之各期別資料</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="light">
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
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'stage',
				label:	'期別'
			},
			{
				key:	'agency',
				label:	'代訓機構/分支單位'
			} ,
			{
				key:	'className',
				label: '訓練主題班別'
			}, 
			{
				key:	'classType',
				label:	'訓練主題類別'
			},
			{
				key:	'city',
				label:	'訓練地區'
			},
			{
				key:	'openingDate',
				label:	'開班日期'
			},
			{
				key:	'closeDate',
				label:	'結訓日期	'
			},
			{
				key:	'openingPeriod',
				label:	'開課時段',
			},
			{
				key:	'openingType',
				label:	'開課種類',
			},

			],
		items:	[
			{
				id: 1, stage: 'LE11101', agency: '淡江大學', className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', classType:'品管',	city:'台北市',	
				openingDate:'111/03/23',closeDate:'111/09/09',openingPeriod:'夜間',openingType:'實體',	pk: 5566
			},
			{
				id: 2,stage: 'LR11101', agency: '淡江大學', className: '公共工程品質管理訓練班(土建)', classType:'品管',	city:'台北市',	
				openingDate:'111/05/06',closeDate:'111/10/11',openingPeriod:'假日',openingType:'實體',	pk: 5566			},
			{
				id: 3, stage: 'LG11104', agency: '淡江大學', className: '公共工程品質管理訓練班(土建)', classType:'回訓',	city:'台北市',
				openingDate:'111/07/09',closeDate:'111/10/23',openingPeriod:'專案',openingType:'視訊',	pk: 5566
			}
		]
	}
 },
 methods: {

 }
}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
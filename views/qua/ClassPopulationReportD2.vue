<!-- 參數:年度-->
<!-- 參數:地區-->
<!-- 參數:代訓機構-->

<template>
	<div>
		<br>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>品管班開班及人數統計表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="light">
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('ClassPopulationReportD3', row.item)">檢視</b-button>
					</template>
					<template #custom-foot>
						<b-tr>
							<b-th colspan="6">合計</b-th>
							<b-th >121</b-th>
							<b-th >5643</b-th>
							<b-th >3241</b-th>
							<b-th >92%</b-th>
							<b-th ><b-button size="sm" variant="outline-secondary" @click="gotoParam('ClassPopulationReportD3', )">檢視</b-button></b-th>
						</b-tr>
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
		options: [
			{	text:	'品管班',	value:	'A'},
			{	text:	'回訓班',	value:	'B'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'agency',
				label:	'代訓機構'
			},
			{
				key:	'stage',
				label:	'期別'
			},
			{
				key:	'site',
				label:	'訓練地點'
			},
			{
				key:	'opeingDate',
				label:	'開訓日期'
			},
			{
				key:	'closeDate',
				label:	'結訓日期'
			},
			{
				key:	'joinPopulation',
				label: 	'參訓人數'
			}, 
			{
				key:	'closePopulation',
				label:	'結訓人數(A)'
			},
			{
				key:	'qualifiedNum',
				label:	'合格人數(B)'
			},
			{
				key:	'qualifiedRate',
				label:	'合格率(B/A)'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{
				id: 1, agency: '中原大學', stage: 'FE8601', site: '台南市', joinPopulation:'44',	closePopulation:'1423',	qualifiedNum:'780',	qualifiedRate:'89%',	
				opeingDate:'110/03/04',	closeDate:'110/06/05',	pk: 5566
			},
			{
				id: 2,	agency: '屏東科技大學', stage: 'FE8602', site: '新竹市', joinPopulation:'80',	closePopulation:'3578',	qualifiedNum:'2344',	qualifiedRate:'99.5%',	
				opeingDate:'110/03/04',	closeDate:'110/06/05',	pk: 5566
			},
			{
				id: 3, agency: '國立臺灣科技大學', stage: 'FE8602', site: '台中市', joinPopulation:'12',	closePopulation:'456',	qualifiedNum:'324',	qualifiedRate:'90%',	
				opeingDate:'110/03/04',	closeDate:'110/06/05',	pk: 5566
			}
		],
		agencyType: [
			{ value: '', text: '全部' },
			{ value: '0', text: '中原大學' },
			{ value: '1', text: '淡江大學' },
			{ value: '2', text: '中央大學' },
			{ value: '3', text: '成功大學' },
		],
		classType: [
			{ value: '', text: '全部' },
			{ value: '0', text: '公共工程品質管理訓練班(機電)' },
			{ value: '1', text: '工程會回訓班' },
			{ value: '2', text: '土木工程-材料實驗' },
		],
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
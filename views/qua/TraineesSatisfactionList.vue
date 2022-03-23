<template>		
	<div>
		<br>
		<br>
		<b-container fluid>
			<!--帶入選項值-->
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}學員滿意度調查一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" >
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('TraineesSatisfactionDetail', row.item)">明細</b-button>
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
		perPage: 10,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號',
			},
			{
				key:	'period',
				label:	'期別'
			},
			{
				key:	'participateNum',
				label:	'參訓人數'
			},
			{
				key:	'fillOpinionNum',
				label: 	'填寫意見表人數'
			}, 
			{
				key:	'scoreTRA',
				label:	'對本次訓練整體滿意度',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreSA',
				label:	'對代訓機構行政服務',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreFA',
				label:	'對代訓機構教學設施',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreTTA',
				label:	'對講師授課內容',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreCA',
				label:	'對訓練遴聘之講師',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreAT',
				label:	'總得分	',
				thStyle: { width: "8%" },
			},
			{
				key:	'otherOpinion',
				label:	'其他意見數	',
				thStyle: { width: "8%" },
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{
				id: '1',	period: 'EE11006', participateNum: '133', fillOpinionNum:'89',	scoreTRA:'17.19',	scoreSA:'17.36',
				scoreFA:'17.34',	scoreTTA:'17.36',	scoreCA:'17.41',	scoreAT:'86.66',otherOpinion:'1',pk: 5566
			},
			{
				id: '2',	period: 'EE11012', participateNum: '88', fillOpinionNum:'23',	scoreTRA:'18.64',	scoreSA:'18.74',
				scoreFA:'18.67',	scoreTTA:'18.54',	scoreCA:'18.54',	scoreAT:'93.13',otherOpinion:'',pk: 5566
			},
			{
				id: '3', 	period: 'ER11022', participateNum: '65', fillOpinionNum:'15',	scoreTRA:'20.00',	scoreSA:'20.00',
				scoreFA:'20.00',	scoreTTA:'20.00',	scoreCA:'20.00',	scoreAT:'100.00',otherOpinion:'3',pk: 5566
			}
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
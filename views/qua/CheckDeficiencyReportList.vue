<!-- 參數:查核分數-->
<template>
	<div>
		<b-container fluid>
			<!--帶入選項值-->
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}學員工程查核情形一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" >
					<template #cell(deduction)="row">
						<b-container>
							<b-row class="text-left">
								<b-col><strong>學員姓名:</strong> {{ row.item.studentNum	}} </b-col>
							</b-row>
							<b-row class="text-left">
								<b-col><strong>期別:</strong> {{ row.item.stage}} </b-col>
							</b-row>
							<b-row class="text-left">
								<b-col><strong>結業證書日期:</strong> {{ row.item.closeDate}} </b-col>
							</b-row>
							<b-row class="text-left">
								<b-col><strong>到職日期:</strong> {{ row.item.onJobDate}} </b-col>
							</b-row>
							<b-row class="text-left">
								<b-col><strong>離職日期:</strong> {{ row.item.resignDate}} </b-col>
							</b-row>
							<b-row class="text-left">
								<b-col><strong>扣點缺失項目:</strong> {{ row.item.deductSituation}} </b-col>
							</b-row>
							<b-row class="text-left">
								<b-col><strong>扣點數:</strong> {{ row.item.deductPoint}} </b-col>
							</b-row>
						</b-container>
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
		options: [
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'B'},
		],
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
				key:	'agency',
				label:	'代訓機構'
			},
			{
				key:	'checkTeam',
				label:	'查核小組'
			},
			{
				key:	'checkDate',
				label:	'查核日期'
			},
			{
				key:	'tenderNum',
				label:	'標案編號'
			} ,
			{
				key:	'tenderName',
				label: 	'標案名稱'
			}, 
			{
				key:	'wkut',
				label:	'主辦機關'
			},
			{
				key:	'deduction',
				label:	'扣點情形'
			},
		],
		items:	[
			{
				id: '1',	agency: '中原大學', studentNum: '王XX', classType: '品管', stage:'LR10933',	closeDate:'110/09/08',
				tenderNum:'N109220610007',	tenderName:'水頭港區S2~S3浮動碼頭增設工程',	wkut:'金門縣文化局',	
				onJobDate:'108/08/08',resignDate:'',checkTeam:'金門縣政府',checkDate:'110/02/23',checkScore:'76',deductPoint:'2',
				deductSituation:' 4.02.03.04□有無抽查施工作業及抽驗材料設備，並填具抽查(驗)紀錄表，或□有無製作材料設備檢（試）驗管制總表管控，或□有無對檢（試）驗報告判讀認可',pk: 5566
			},
			{
				id: '2',	agency: '國立臺北科技大學', studentNum: '林XX', classType: '回訓', stage:'LE10909',	closeDate:'110/11/13',
				tenderNum:'104-030',	tenderName:'公共行政及企業管理教育中心新建統包工程',	wkut:'金門縣港務處',	
				onJobDate:'108/11/12',resignDate:'110/06/12',checkTeam:'教育部',checkDate:'110/03/19',checkScore:'81',deductPoint:'2',
				deductSituation:'4.02.03.04□有無抽查施工作業及抽驗材料設備，並填具抽查(驗)紀錄表，或□有無製作材料設備檢（試）驗管制總表管控，或□有無對檢（試）驗報告判讀認可',pk: 5566
			},
			{
				id: '3', 	agency: '經濟部國營事業委員會(台電訓練所)', studentNum: '陳XX', classType: '回訓', stage:'LR10935',	closeDate:'111/03/07',
				tenderNum:'1080617-AA3',	tenderName:'蜆仔溝排水出口滯洪池興建工程',	wkut:'交通部臺灣鐵路管理局宜蘭工務段',	
				onJobDate:'109/12/13',resignDate:'',checkTeam:'經濟部',checkDate:'110/04/19',checkScore:'78',deductPoint:'2',
				deductSituation:' 4.02.03.04□有無抽查施工作業及抽驗材料設備，並填具抽查(驗)紀錄表，或□有無製作材料設備檢（試）驗管制總表管控，或□有無對檢（試）驗報告判讀認可',pk: 5566
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
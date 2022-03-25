<template>
	<div>
		<br>
		<h3><strong><font color="brown">期別申辦情形一覽表</font></strong></h3>
		<br>
		<div>
			<b-container fluid>
				<b-table-simple hover small caption-top responsive>
					<caption><h3>{{this.$route.params.stageNum}} 期別申辦情形一覽表</h3></caption>
					<b-thead head-variant="dark">
						<b-tr>
							<b-th>作業階段</b-th>
							<b-th>項目</b-th>
							<b-th>填報/修改	</b-th>
							<b-th>主要填報內容</b-th>
							<b-th>申辦及審查</b-th>
						</b-tr>
					</b-thead>
					<b-tbody>
						<b-tr>
							<b-th rowspan="3" class="align-middle" variant="success">壹、申報開訓</b-th>
							<b-th class="text-left align-middle">1.期別基本資料</b-th>
							<b-td class="align-middle"><b-button size="sm" variant="primary" @click="gotoParam('AgencyStageDetail', )">明細</b-button></b-td>
							<b-td class="text-left align-middle">	訓練主題班別：<br>
									課程時數：84<br>
									班別類別：<br>
									訓練地區：新北市<br>
									訓練日期：110/08/01~111/12/31<br>
									開課時段：夜間<br>
									訓練學員人數：12人
							</b-td>
							<b-th rowspan="3" class="align-middle">
								<b-button size="sm" variant="success" @click="gotoParam('Stage1Submit', )">送審</b-button>&nbsp;
								<!--看要不要固定按鈕文字，用其他紅字顯示狀況-->
								<b-button size="sm" variant="info" @click="gotoParam('Stage1Review', )">審查</b-button>&nbsp;
							</b-th>
						</b-tr>
						<b-tr>
							<b-th class="text-left align-middle">2.授課教師資料</b-th>
							<b-td class="align-middle"><b-button size="sm" variant="primary" @click="gotoParam('AgencyStageTeacherDetail', )">明細</b-button></b-td>
							<b-td class="text-left">	課程數：23課<br>
									應填報授課教師：18課<br>
									已填報授課教師：0課
							</b-td>
						</b-tr>
						<b-tr>
							<b-th class="text-left">3.學員名單資料</b-th>
							<b-td class="align-middle"><b-button size="sm" variant="primary" @click="gotoParam('AgencyStageStudentDetail', )">明細</b-button></b-td>
							<b-td class="text-left">已填報參訓學員：1人</b-td>
						</b-tr>
						<b-tr>
							<b-th class="align-middle" variant="info">貳、申報結訓成果</b-th>
							<b-th class="text-left align-middle">結訓成果</b-th>
							<b-td class="align-middle"><b-button size="sm" variant="primary" @click="gotoParam('AgencyStageScoreDetail', )">明細</b-button></b-td>
							<b-td class="text-left"> 	
								已填報結訓成果：0人<br>
								退訓：0人
							</b-td>
							<b-th class="align-middle">
								<b-button size="sm" variant="success" @click="gotoParam('Stage2Submit', )">送審</b-button>&nbsp;
								<!--看要不要固定按鈕文字，用其他紅字顯示狀況-->
								<b-button size="sm" variant="info" @click="gotoParam('Stage2Review', )">審查</b-button>&nbsp;
							</b-th>
						</b-tr>
						<b-tr>
							<b-th class="align-middle" variant="danger">參、申報補考成績</b-th>
							<b-th class="text-left align-middle">補考情形</b-th>
							<b-td class="align-middle"><b-button size="sm" variant="primary" @click="gotoParam('AgencyStageMakeUpDetail', )">明細</b-button></b-td>
							<b-td class="text-left">總補考學員：0人<br>
								已補考通過：0人<br>
								已補考2次未通過：0人<br>
								剩餘尚待補考學員：0人
							</b-td>
							<b-td></b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</b-container>
		</div>
	</div>
</template>


<script>


export default {
 data(){
	return{
		options: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'不限',	value:	'C'},
		],
		options2: [
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'C'},
		],
		type: [
			{ value: '', text: '全部' },
			{ value: '0', text: '中原大學' },
			{ value: '1', text: '淡江大學' },
			{ value: '2', text: '中央大學' },
			{ value: '3', text: '成功大學' },
		],
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
				key:	'stageNum',
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
				key:	'classHour',
				label:	'課程時數'
			},
			{
				key:	'site',
				label:	'訓練地區'
			},
			{
				key:	'openDate',
				label:	'開班日期'
			},
			{
				key:	'endDate',
				label:	'結訓日期'
			},
			{
				key:	'classCondition',
				label:	'開課情況',
				thStyle: { width: "10%" },
			},
			{
				key:	'isBackUp',
				label:	'備查結案'
			},
			{
				key:	'makeUpNum',
				label:	'待補考人數'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "10%" },
			},

			],
		items:	[
			{
				id: 1, stageNum: 'LR11002', agency: '代訓機構主管機關工程會', className: '公共工程品質管理訓練班(機電) 【109年4月起適用】',
				classHour:84,	classType:'品管',	site:'新北市',	openDate:'110/02/08',	endDate: '110/09/08',
				classCondition:'夜間(實體)',	isBackUp:'否',	makeUpNum:1,pk: 5566
			},
			{
				id: 2,stageNum: 'LG11102', agency: '國立屏東科技大學', className: '基礎開挖與品管【109年5月起適用】', 
				classHour:60,	classType:'品管',	site:'新北市',	openDate:'110/03/08',	endDate: '110/09/08',
				classCondition:'假日(視訊)',	isBackUp:'是',	makeUpNum:0,pk: 5566
			},
			{
				id: 3, stageNum: 'ER11101', agency: '中原大學', className: '	公共工程品質管理訓練班(土建) 【109年4月起適用】', 
				classHour:72,	classType:'回訓',	site:'桃園市',	openDate:'110/05/08',	endDate: '110/09/08',
				classCondition:'夜間(視訊)',	isBackUp:'否',	makeUpNum:2,pk: 5566
			}
		]
	}
 },
 methods: {
	checkIn(row){
		confirm("確定是否將該期別歸檔?(後續不能作申請異動) " + row.pk);
	},
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
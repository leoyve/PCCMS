<template>
	<div>
		<br>
		<h3><strong><font color="brown">開班期別審核申辦資料</font></strong></h3>
		<br>
		<b-form-row class="justify-content-end">
			<b-button size="l" variant="success"  @click="gotoParam('AgencyStageEdit', {addFlag:true})" >新增</b-button>&nbsp;&nbsp;
			<b-button size="l" variant="outline-secondary"  @click="goBack()" >回上一頁</b-button>&nbsp;&nbsp;
		</b-form-row>
		<br>
		<div>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>代訓機構代訓機構開班預告一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="info" @click="gotoParam('AgencyStageEdit', {addFlag:true, ...row.item})">轉入</b-button>&nbsp;
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
				key:	'agency',
				label:	'代訓機構/分支單位'
			} ,
			{
				key:	'className',
				label: '訓練主題班別'
			},
				{
				key:	'stageNum',
				label:	'期別'
			},
			{
				key:	'site',
				label:	'訓練地區'
			},
			{
				key:	'openDate',
				label:	'預定開班日期'
			},
			{
				key:	'endDate',
				label:	'預定結訓日期'
			},
			{
				key:	'classCondition',
				label:	'開課情況',
				thStyle: { width: "10%" },
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
				site:'新北市',	openDate:'110/02/08',	endDate: '110/09/08',
				classCondition:'夜間(實體)',pk: 5566
			},
			{
				id: 2,stageNum: 'LG11102', agency: '國立屏東科技大學', className: '基礎開挖與品管【109年5月起適用】', 
				site:'新北市',	openDate:'110/03/08',	endDate: '110/09/08',
				classCondition:'假日(視訊)',pk: 5566
			},
			{
				id: 3, stageNum: 'ER11101', agency: '中原大學', className: '	公共工程品質管理訓練班(土建) 【109年4月起適用】', 
				site:'桃園市',	openDate:'110/05/08',	endDate: '110/09/08',
				classCondition:'夜間(視訊)',pk: 5566
			}
		]
	}
 },
 methods: {
	checkIn(row){
		confirm("確定是否移入教師名冊? " + row.pk);
	},
	checkOut(row){
		confirm("確定是否移出教師名冊?" + row.pk);
	}
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
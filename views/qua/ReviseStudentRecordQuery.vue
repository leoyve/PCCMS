<template>
	<div>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="學員身分證字號" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="學員姓名" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<!--依照使用者選的選項顯示品管/回訓-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>學員歷次參訓紀錄</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(graduation)="row">
							<b-container>
								<b-row>
									<b-col>{{ row.item.graduationDate	}} </b-col>
								</b-row>
								<b-row>
									<b-col>{{ row.item.graduationNum	}} </b-col>
								</b-row>
							</b-container>
						</template>
						<template #cell(directorReview)="row">
							<b-container>
								<b-row>
									<b-col>{{ row.item.directorDate	}} </b-col>
								</b-row>
								<b-row>
									<b-col>{{ row.item.directorNum	}} </b-col>
								</b-row>
							</b-container>
						</template>
						<template #cell(scoreList)="row">
							<b-container>
								<b-row>
									<b-col>測驗成績: {{ row.item.testScore	}} </b-col>
								</b-row>
								<b-row>
									<b-col>第1次補考成績: {{ row.item.makeUpScore1	}} </b-col>
								</b-row>
								<b-row>
									<b-col>第2次補考成績: {{ row.item.makeUpScore2	}} </b-col>
								</b-row>
								<b-row>
									<b-col>總成績: {{ row.item.overallResult	}} </b-col>
								</b-row>
							</b-container>
						</template>
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="goto('StudentChangeStage')">變更期別</b-button>&nbsp;
							<b-button size="sm" variant="warning" @click="gotoParam('ReviseStudentRecord', row.item)">修正</b-button>
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
				key:	'studentName',
				label:	'姓名'
			},
			{
				key:	'mechanism',
				label:	'代訓機構'
			},
			{
				key:	'classType',
				label:	'班別種類'
			},
			{
				key:	'className',
				label:	'訓練主題班別',
				thStyle: { width: "8%" },
			},
			{
				key:	'classHour',
				label:	'課程時數'
			},
			{
				key:	'stage',
				label:	'期別'
			},
			{
				key:	'qualified',
				label:	'受訓資格',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreList',
				label:	'學員成績'
			},
			{
				key:	'isQualified',
				label:	'是否合格'
			},
			{
				key:	'graduation',
				label:	'結業證書期及字號',
				thStyle: { width: "5%" },
			},
			{
				key:	'directorReview',
				label:	'主管機關核准日期及文號',
				thStyle: { width: "5%" },
			},
			{
				key:	'certificateDate',
				label:	'證書可應用有效日期',
				thStyle: { width: "5%" },
			},
			{
				key:	'comment',
				label:	'備註'
			},
			{
				key:	'action',
				label:	''
			},

		],
		items:	[
			{
				id: 1, studentName: '張XX', mechanism: '中原大學',	classType:'品管',	className:'公共工程品質管理訓練班(土建) 【106年起適用】',	classHour:'84',	
				qualified:'取得公共工程類科專業技師或建築師證書者（含消防設備師）',	testScore:'73',	makeUpScore1:'58',	makeUpScore2:'60',
				overallResult:'70',	isQualified:'是',	graduationDate:'10908',	graduationNum:'DE1090211',	directorDate:'1090818',	directorNum:'工程管字第1090014530號',
				certificateDate:'113年06月17日',	comment:'test',	stage:'DE10902',	pk: 5566
			},
			{
				id: 2, studentName: '張XX', mechanism: '中原大學',	classType:'品管',	className:'公共工程品質管理訓練班(土建) 【109年起適用】',	classHour:'60',	
				qualified:'取得公共工程類科專業技師或建築師證書者（含消防設備師）',	testScore:'73',	makeUpScore1:'58',	makeUpScore2:'60',
				overallResult:'70',	isQualified:'是',	graduationDate:'10908',	graduationNum:'LR111012',	directorDate:'1090818',	directorNum:'工程管字第1090014530號',
				certificateDate:'113年06月17日',	comment:'test',	stage:'LR11102',	pk: 5566
			},
			{
				id: 3, studentName: '張XX', mechanism: '中原大學',	classType:'品管',	className:'公共工程品質管理訓練班(土建) 【106年起適用】',	classHour:'84',	
				qualified:'取得公共工程類科專業技師或建築師證書者（含消防設備師）',	testScore:'73',	makeUpScore1:'58',	makeUpScore2:'60',
				overallResult:'70',	isQualified:'是',	graduationDate:'10908',	graduationNum:'DE1090211',	directorDate:'1090818',	directorNum:'工程管字第1090014530號',
				certificateDate:'113年06月17日',	comment:'test',	stage:'DE10902',	pk: 5566
			},
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
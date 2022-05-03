<template>
	<div>
		<br>
		<h3><strong><font color="brown">訓練主題班別及開班申辦管理畫面</font></strong></h3>
		<br>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="l" variant="success"  @click="gotoParam('TrainingClassEdit',{addFlag:true})" >新增</b-button>&nbsp;&nbsp;
			</b-form-row>
			<br>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="僅顯示有送審之班別" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="代訓機構是否仍在運作" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="picked"
						:options="options"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別是否仍在運作" label-align-md="right">
					<b-form-radio-group
						id="radio-group-3"
						v-model="picked"
						:options="options"
						name="radio-options3"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="代訓機構" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別種類" label-align-md="right">
					<b-form-radio-group
						id="radio-group-4"
						v-model="picked"
						:options="options2"
						name="radio-options4"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>訓練主題班別及開班申報情形一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields">
						<template #thead-top>
							<b-tr>
								<b-th colspan="4"></b-th>
								<b-th class="border " variant="secondary" colspan="2">申請開辦</b-th>
								<b-th class="border border-light " variant="primary" colspan="3">師資授課</b-th>
								<b-th class="border border-light " variant="success" colspan="3">開訓申請</b-th>
								<b-th class="border border-light " variant="info" colspan="3">結訓成果</b-th>
								<!--平均天數超過兩天紅字?-->
								<b-th class="border border-light " variant="secondary" colspan="3">補考成績</b-th>
							</b-tr>
						</template>
						<template #cell(action1)="row">
							<b-button size="sm" variant="info" @click="gotoParam('TrainingClassDetail', row.item)">查詢</b-button>&nbsp;
						</template>
						<template #cell(action2)="row">
							<b-button size="sm" variant="info" @click="gotoParam('CourseTeacherQuery', row.item)">查詢</b-button>&nbsp;
						</template>
						<template #cell(action3)="row">
							<b-button size="sm" variant="info" @click="gotoParam('CourseClassQuery', row.item)">查詢</b-button>&nbsp;
						</template>
						<template #cell(action4)="row">
							<b-button size="sm" variant="info" @click="gotoParam('EndTrainingQuery', row.item)">查詢</b-button>&nbsp;
						</template>
						<template #cell(action5)="row">
							<b-button size="sm" variant="info" @click="gotoParam('MakeUpQuery', row.item)">查詢</b-button>&nbsp;
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
				key:	'agency',
				label:	'代訓機構'
			},
			{
				key:	'className',
				label: '訓練主題班別名稱'
			},
			{
				key:	'classType',
				label:	'訓練主題班別種類',
				thStyle: { width: "4%" },
			},
			{
				key:	'status',
				label:	'申報狀態',
				thStyle: { width: "4%" },
			} ,
			{
				key:	'action1',
				label: '檢視',
				thStyle: { width: "8%" },
			},
			{
				key:	'tNonBaupNum',
				label:	'填報系統但未備查之人數',
				thStyle: { width: "4%" },
			},
			{
				key:	'tSubmitNum',
				label:	'送審授課教師資料中之人數',
				thStyle: { width: "4%" },
			},
			{
				key:	'action2',
				label:	'檢視',
				thStyle: { width: "8%" },
			},
			{
				key:	'oNonBaupNum',
				label:	'填報系統但未備查開班之班數',
				thStyle: { width: "4%" },
			},
			{
				key:	'oSubmitNum',
				label:	'目前送審開班中之班數',
				thStyle: { width: "4%" },
			},
			{
				key:	'action3',
				label:	'檢視',
				thStyle: { width: "8%" },
			},
			{
				key:	'eNonBaupNum',
				label:	'備查開班但未備查結案之班數',
				thStyle: { width: "4%" },
			},
			{
				key:	'eSubmitNum',
				label:	'目前送審結案中之班數',
				thStyle: { width: "4%" },
			},
			{
				key:	'action4',
				label:	'檢視',
				thStyle: { width: "8%" },
			},
			{
				key:	'mNonBaupNum',
				label:	'核定尚可補考之人數',
				thStyle: { width: "4%" },
			},
			{
				key:	'mSubmitNum',
				label:	'送審最終成績中之人數',
				thStyle: { width: "4%" },
			},
			{
				key:	'action5',
				label:	'檢視',
				thStyle: { width: "8%" },
			},

		],
		items:	[
			{
				id: 1,agency: '代訓機構主管機關工程會', classType:'品管',className: '公共工程品質管理訓練班(機電) 【109年4月起適用】',
				status:'同意備查',tNonBaupNum:0, tSubmitNum:1,oNonBaupNum:0,oSubmitNum:1, eNonBaupNum:0,eSubmitNum:1,
				mNonBaupNum:0, mSubmitNum:1,pk: 5566
			},
			{
				id: 2,classType:'品管', agency: '國立屏東科技大學', className: '基礎開挖與品管【109年5月起適用】', 
				status:'同意備查',tNonBaupNum:0, tSubmitNum:1,oNonBaupNum:0,oSubmitNum:1, eNonBaupNum:0,eSubmitNum:1,
				mNonBaupNum:0, mSubmitNum:1,pk: 5566
			},
			{
				id: 3, classType:'回訓', agency: '中原大學', className: '	公共工程品質管理訓練班(土建) 【109年4月起適用】', 
				status:'同意備查',tNonBaupNum:0, tSubmitNum:1,oNonBaupNum:0,oSubmitNum:1, eNonBaupNum:0,eSubmitNum:1,
				mNonBaupNum:0, mSubmitNum:1,pk: 5566
			}
		]
	}
 },
 methods: {
	
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
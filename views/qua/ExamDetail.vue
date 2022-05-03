<template>
	<div>
		<br>
		<h3><strong><font color="brown">測驗卷題目一覽表</font></strong></h3>
		<br>	
		<div>
			<b-container fluid>
				<b-form-row class="justify-content-end">
					<b-button size="l" variant="outline-secondary"  @click="gotoParam('PropositionView', )" >回上一頁</b-button>
				</b-form-row>
				<b-row class="col-sm row justify-content-start" >
					<font color="red"><h5>以下測驗卷請審慎列印使用，切勿任意外流！(建議於Chrome瀏覽器列印，並取消頁首頁尾之網址資訊，以維最佳版面及資訊安全)</h5></font>
				</b-row>
				<b-row class="col-sm row justify-content-start" >
					<b-button size="sm" variant="success" @click="report('A卷')" >A卷</b-button>&ensp; 
					<b-button size="sm" variant="success" @click="report('B卷')">B卷</b-button>&ensp; 
					<b-button size="sm" variant="success" @click="report('C卷')">C卷</b-button>&ensp; 
					<b-button size="sm" variant="warning" @click="report('答案')">答案</b-button>
				</b-row>
			</b-container>
			<br>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{this.$route.params.examName}}測驗卷題目一覽表 </strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('ExamChange', row.item)">更換</b-button>&nbsp;
							<b-button size="sm" variant="warning" @click="gotoParam('QuestionEdit', {updateFlag:true,...row.item})">編輯</b-button>
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
				key:	'ANum',
				label:	'A卷題號',
			},
			{
				key:	'BNum',
				label:	'B卷題號',
			},
			{
				key:	'CNum',
				label:	'C卷題號',
			},
			{
				key:	'course',
				label:	'課程名稱',
				tdClass: 'text-left',
			},
			{
				key:	'isCore',
				label: '核心題庫'
			},
			{
				key:	'degree',
				label: '難易程度'
			}, 
			{
				key:	'questions',
				label: '題目',
				thStyle: { width: "40%"},
				tdClass: 'text-left',
			},
			{
				key:	'answer',
				label: '答案',
				
			},
			{
				key:	'author',
				label: '命題者',
				tdClass: 'text-left',
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
			],
		items:	[
			{
				id: 1, ANum:49,BNum:14,CNum:36,course: '政府採購全生命週期概論', degree: '最難', isCore:'Y',
				questions:'中央政府各機關辦理新建公共工程或直轄市政府及縣（市）政府辦理中央政府補助比率逾工程建造經費百分之五十且補助經費達多少金額以上之新建公共工程，需辦理生態檢核作業？（A）一千萬元（B）五千萬元（C）一億元（D）不論金額大小。',
				answer:'A',author:'工程會',pk: 5566, 
			},
			{
				id: 2,	ANum:22,BNum:3,CNum:44,course: '單元二：第五章 施工管制與檢驗', degree: '普通', isCore:'',
				questions:'下列何者非屬一百萬元以上未達一千萬元之公共工程監造計畫應撰寫之章節內容？（A）監造組織及權責分工（B）監造範圍（C）品質計畫審查作業程序（D）施工抽查程序及標準。',
				answer:'B',author:'',pk: 5566
			},
			{
				id: 3,	ANum:5,BNum:14,CNum:50,course: '單元二：第四章 工程進料檢驗與管制', degree: '容易', isCore:'Y',
				questions:'有關「全民督導公共工程實施方案」之080專線電話號碼為 (A)0800009509 (B)0800009409 (C)0800009309 (D)0800009609',
				answer:'C',author:'江健達政府採購全生命週期概論',pk: 5566
			}
		]
	}
 },
 methods: {
	report(str){
		alert(str+' 供列印網頁');
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
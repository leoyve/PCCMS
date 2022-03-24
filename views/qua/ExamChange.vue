<template>
	<div>
		<br>
		<h3><strong><font color="brown">測驗卷題目一覽表</font></strong></h3>
		<br>	
		<div>
			<b-container fluid>
				<b-form-row>
					<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="課程科目" label-align-md="right">
						<b-form-select :options="classType"></b-form-select>
					</b-form-group>
				</b-form-row>
				<b-form-row>
					<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="難易程度" label-align-md="right">
						<b-form-radio-group
							id="radio-group-1"
							v-model="picked"
							:options="options2"
							name="radio-options"
						></b-form-radio-group>
					</b-form-group>
				</b-form-row>
				<b-form-row>
					<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="核心題庫" label-align-md="right">
						<b-form-radio-group
							id="radio-group-1"
							v-model="picked"
							:options="options"
							name="radio-options"
						></b-form-radio-group>
					</b-form-group>
				</b-form-row>
				<b-form-row>
					<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="題目內容" label-align-md="right">
						<b-form-input type="search"></b-form-input>
					</b-form-group>
				</b-form-row>
				<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
			</b-container>
			<br>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>原題目</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="oItem" :fields="fields" head-variant="light">
					</b-table>
				</b-form-row>
			</b-container>
			<br>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{this.$route.params.examName}}測驗卷題目更換 </strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('PropositionView', row.item)">更換</b-button>&nbsp;
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
		options2:[
			{	text:	'最難',	value:	'A'},
			{	text:	'困難',	value:	'B'},
			{	text:	'普通',	value:	'C'},
			{	text:	'容易',	value:	'C'},
			{	text:	'不限',	value:	'C'},
		],
		options3:[
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'C'},
		],
		classType:[
			{ value: '', text: '全部' },
			{ value: '0', text: '政府採購全生命週期概論' },
			{ value: '1', text: '單元一：第一章 公共工程施工品質管理制度理念與導入' },
			{ value: '2', text: '單元二：第四章 工程進料檢驗與管制' },
			{ value: '3', text: '單元二：第五章 施工管制與檢驗' },
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
				id: 1,course: '政府採購全生命週期概論', degree: '最難', isCore:'Y',
				questions:'中央政府各機關辦理新建公共工程或直轄市政府及縣（市）政府辦理中央政府補助比率逾工程建造經費百分之五十且補助經費達多少金額以上之新建公共工程，需辦理生態檢核作業？（A）一千萬元（B）五千萬元（C）一億元（D）不論金額大小。',
				answer:'A',author:'工程會',pk: 5566, 
			},
			{
				id: 2,course: '單元二：第五章 施工管制與檢驗', degree: '普通', isCore:'',
				questions:'下列何者非屬一百萬元以上未達一千萬元之公共工程監造計畫應撰寫之章節內容？（A）監造組織及權責分工（B）監造範圍（C）品質計畫審查作業程序（D）施工抽查程序及標準。',
				answer:'B',author:'',pk: 5566
			},
			{
				id: 3,course: '單元二：第四章 工程進料檢驗與管制', degree: '容易', isCore:'Y',
				questions:'有關「全民督導公共工程實施方案」之080專線電話號碼為 (A)0800009509 (B)0800009409 (C)0800009309 (D)0800009609',
				answer:'C',author:'江健達政府採購全生命週期概論',pk: 5566
			}
		],
		oItem:	[
			{
				id: 1,course: this.$route.params.course, degree:  this.$route.params.degree, isCore:this.$route.params.isCore,
				questions:this.$route.params.questions,
				answer:this.$route.params.answer,author:this.$route.params.author,pk: 5566, 
			},
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
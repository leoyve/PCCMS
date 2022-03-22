<template>
	<div>
		<br>
		<h3><strong><font color="brown">快速審核師資授課之更新</font></strong></h3>
		<br>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>教師授課課程審核項目勾選一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(checkBar)="row">
						<b-checkbox v-model="model"	@value="row.item.id"></b-checkbox>
					</template>
					<template #cell(teacher)="row">
						<a href="#" variant="primary" @click="gotoParam('TeacherInfo', row.item)" >{{row.item.teacherName}}</a>
					</template>
					<template #cell(submitInfo)="row">
						<b-container>
							<b-row>
								<b-col>{{ row.item.submitDate	}} </b-col>
							</b-row>
							<b-row>
								<b-col>{{ row.item.submitDesc	}} </b-col>
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
		<br>
		<b-container>
			<b-row class="border border-dark">
				<b-col class="col-md-2 "><font color="red">*</font>主管機關審核許可日期</b-col>
				<b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 "><font color="red">*</font>主管機關審核許可文號</b-col>
				<b-col class="col-md-10 text-left"><b-input></b-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 "><font color="red">*</font>審查狀態註記</b-col>
				<b-col class="col-md-4 text-left">
					<b-form-radio-group v-model="check1" :options="check" name="radio-validation" :disabled="disabledFlag">
					</b-form-radio-group>
				</b-col>
			</b-row>
			<br>
			<b-row class="col-sm row justify-content-end" >
				<b-button size="sm" variant="success" @click="add">送出審查結果</b-button>&ensp; 
				<b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
			</b-row>
		</b-container>
		<br>
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
				key:	'checkBar',
				label:	''
			},
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'teacher',
				label:	'教師姓名'
			},
			{
				key:	'serviceUnit',
				label:	'服務單位'
			},
			{
				key:	'title',
				label: '職稱'
			},
			{
				key:	'className',
				label:	'訓練主題班別'
			},
			{
				key:	'stage',
				label:	'開班期別'
			},
			{
				key:	'courseName',
				label:	'課程名稱'
			},
			{
				key:	'hireUnit',
				label:	'服務單位'
			},
			{
				key:	'submitInfo',
				label:	'送審日期及文號'
			},
			],
		items:	[
			{
				id: 1, teacherName: '王XX', serviceUnit: '代訓機構主管機關工程會', title: '科長', className:'公共工程品質管理訓練班(土建) 【109年4月起適用】',	stage:'KE10902',
				courseName:'單元二：第二章 統計分析方法與應用',	hireUnit:'中原大學',	submitDate:'110/3/5',	submitDesc:'原工程會已備查',pk: 5566
			},
			{
				id: 2,teacherName: '林XX', serviceUnit: '國立屏東科技大學', title: '教授', className:'公共工程品質管理訓練班(土建)',	stage:'KE10902',
				courseName:'單元二：第十章 瀝青混凝土路面施工及檢驗基準',	hireUnit:'中原大學',	submitDate:'110/3/5',	submitDesc:'原工程會已備查',pk: 5566
			},
			{
				id: 3, teacherName: '陳XX', serviceUnit: '社團法人高雄市土木技師公會', title: '經理', className:'公共工程品質管理訓練班(土建)',	stage:'KE10902',
				courseName:'單元二：第三章 給排水衛生設備工程品質管理實務',	hireUnit:'中原大學',	submitDate:'110/3/5',	submitDesc:'原工程會已備查',pk: 5566
			}
		],
		check: [
			{ value: '1', text: '同意備查'},
			{ value: '2', text: '退回修正' },
			{ value: '2', text: '回復未審查狀態' },
			{ value: '2', text: '刪除本教師授課課程申請' },
      ],
	}
 },
 methods: {

 },

}


</script>

<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}
</style>
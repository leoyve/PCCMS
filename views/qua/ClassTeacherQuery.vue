<template>
	<div>
		<br>
		<h3><strong><font color="brown">依課程名稱搜尋教師名冊</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="查詢課程" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="courseOpt"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別是否仍在運作" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options2"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="課程名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<!--依照使用者選的選項顯示品管/回訓-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}開班課程</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(course)="row">
							<a href="#" variant="primary" @click="gotoParam('ClassTeacherList', row.item)" >{{row.item.courseName}}</a>
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
		courseOpt: [
			{	text:	'品管班',	value:	'A'},
			{	text:	'回訓班',	value:	'B'},
		],
		options2: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'不限',	value:	'C'},
		],
		type: [
			{ value: '', text: '全部' },
			{ value: '0', text: '公共工程品質管理訓練班(機電) 【106年起適用】' },
			{ value: '1', text: '公共工程品質管理訓練班(土建)' },
			{ value: '2', text: '公共工程品質管理訓練班(土建) 【109年4月起適用】' },
			{ value: '3', text: '公共工程品質管理訓練班(機電)' },
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
				key:	'className',
				label:	'訓練主題班別'
			},
			{
				key:	'course',
				label:	'開班課程'
			} ,
		],
		items:	[
			{
				id: 1, className: '公共工程品質管理訓練班(土建) 【106年起適用】', courseName: '單元一：公共工程施工品質管理制度教育宣導片',	pk: 5566
			},
			{
				id: 2,	className: '公共工程品質管理訓練班(土建) 【106年起適用】', courseName: '永續公共工程-節能減碳',	pk: 5566
			},
			{
				id: 3, className: '公共工程品質管理訓練班(土建) 【106年起適用】', courseName: '單元二：第四章 工程進料檢驗與管制',	pk: 5566
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
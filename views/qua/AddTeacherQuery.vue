<template>
	<div>
		<br>
		<h3><strong><font color="brown">建立代訓機構之教師名冊</font></strong></h3>
		<br>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="l" variant="success"  @click="gotoParam('TeacherEdit', {addFlag:true})" >新增</b-button>&nbsp;&nbsp;
				<b-button size="l" variant="info"  @click="upload()" >上傳EXCLE檔案</b-button>&nbsp;&nbsp;
				<b-button size="l" variant="warning"  @click="gotoParam('PccmTeacherList', {addFlag:true})" >工程會提供之師資名單</b-button>
			</b-form-row>
			<br>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="目前是否列入代訓機構聘請師資名冊" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="是否核備" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="picked"
						:options="options2"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="代訓機構" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="教師姓名" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="身份證字號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>代訓機構聘用師資名冊表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(detail)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('TeacherInfo', row.item)">檢視</b-button>
						</template>
						<template #cell(register)="row">
							<b-button size="sm" variant="success" @click="checkIn(row.item)">移入</b-button>&nbsp;
							<b-button size="sm" variant="warning" @click="checkOut(row.item)">移出</b-button>
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
			{	text:	'停用',	value:	'B'},
			{	text:	'不限',	value:	'C'},
		],
		options2: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'不限',	value:	'C'},
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
				key:	'teacherName',
				label:	'教師姓名'
			},
			{
				key:	'serviceUnit',
				label:	'服務單位名稱'
			} ,
			{
				key:	'title',
				label: '職稱'
			}, 
			{
				key:	'isRetire',
				label:	'是否退休'
			},
			{
				key:	'qualifications',
				label:	'符合教師資格之類別'
			},
			{
				key:	'isPccms',
				label:	'工程會提供師資名單'
			},
			{
				key:	'detail',
				label:	'教師資料及教授課程'
			},
			{
				key:	'register',
				label:	'師資名冊',
				thStyle: { width: "15%" },
			},

			],
		items:	[
			{
				id: 1, teacherName: '王XX', serviceUnit: '代訓機構主管機關工程會', title: '科長', isRetire:'政府單位在職',	
				qualifications:'機關、學校之薦任第九職等以上主管(含副主管)，且具專長相關實務經驗十五年以上',	isPccms:'',	pk: 5566
			},
			{
				id: 2,teacherName: '林XX', serviceUnit: '國立屏東科技大學', title: '教授', isRetire:'民間單位在職',	
				qualifications:'大專院校專任助理教授以上，且具專長相關教學經驗五年以上',	isPccms:'是',	pk: 5566
			},
			{
				id: 3, teacherName: '陳XX', serviceUnit: '社團法人高雄市土木技師公會', title: '經理', isRetire:'退休',	
				qualifications:'其他經本會核定之專家',	isPccms:'',	pk: 5566
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
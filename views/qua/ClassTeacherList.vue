<template>
	<div>
		<br>
		<b-container >
			<!-- 帶入課程名稱 -->
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{this.$route.params.courseName}}師資名冊表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="light">
					<template #cell(teacherInfo)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('TeacherInfo', row.item)">檢視</b-button>
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
				key:	'tel',
				label:	'電話'
			},
			{
				key:	'qualifications',
				label:	'符合教師資格之類別'
			},
			{
				key:	'teacherInfo',
				label:	'教師資料及教授課程',
			},

			],
		items:	[
			{
				id: 1, teacherName: '王XX', serviceUnit: '代訓機構主管機關工程會', title: '科長', isRetire:'政府單位在職',	tel:'09XXXXXXXX',
				qualifications:'機關、學校之薦任第九職等以上主管(含副主管)，且具專長相關實務經驗十五年以上',	isPccms:'',	pk: 5566
			},
			{
				id: 2,teacherName: '林XX', serviceUnit: '國立屏東科技大學', title: '教授', isRetire:'民間單位在職',	tel:'09XXXXXXXX',
				qualifications:'大專院校專任助理教授以上，且具專長相關教學經驗五年以上',	isPccms:'是',	pk: 5566
			},
			{
				id: 3, teacherName: '陳XX', serviceUnit: '社團法人高雄市土木技師公會', title: '經理', isRetire:'退休',	tel:'09XXXXXXXX',
				qualifications:'其他經本會核定之專家',	isPccms:'',	pk: 5566
			}
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
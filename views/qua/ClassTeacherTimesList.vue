<template>
	<div>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{this.$route.params.className}}課程教師授課次數統計表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="light">
					<template #cell(courseStatistics)="row">
						<template v-for="classPrint in row.item.classDetail" >
							<b-row :key="classPrint.id">
								<b-col><strong>姓名:</strong>{{ classPrint.name }}</b-col>
								<b-col><strong>授課次數:</strong>{{ classPrint.calssCount }}</b-col>
								<b-col><strong>單位:</strong>{{ classPrint.unit }}</b-col>
							</b-row>
						</template>
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
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'course',
				label:	'課程名稱'
			},
			{
				key:	'courseHour',
				label:	'課程時數'
			} ,
			{
				key:	'teacherNum',
				label: 	'實際授課教師人數'
			}, 
			{
				key:	'courseStatistics',
				label:	'授課次數統計	'
			},
			],
		items:	[
			{
				id: 1, course: '第一章 電氣設備工程品質管理實務', courseHour: '6', teacherNum: '1', classDetail:[{id:'1', name:'王XX', calssCount:'3', unit:'XX有限公司'},],pk: 5566
			},
			{
				id: 2,	course: '第二章 空調設備工程品質管理實務', courseHour: '3', teacherNum: '2',classDetail:[{id:'1', name:'王XX', calssCount:'3', unit:'XX有限公司'},
				{id:'2', name:'林XX', calssCount:'1', unit:'XX有限公司'},
				],
				pk: 5566
			},
			{
				id: 3, course: '第三章 消防設備工程品質管理實務', courseHour: '1', teacherNum: '2',classDetail:[{id:'1', name:'陳XX', calssCount:'2', unit:'XX大學'},],pk: 5566
			}
		],
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
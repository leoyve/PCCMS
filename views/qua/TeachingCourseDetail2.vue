<template>
	<div>
		<br>
		<br>
		<b-container fluid>
			<!--帶入前一頁選項值-->
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{this.$route.params.teacherName}}{{picked}} 師資授課時數明細表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" >
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
				label:	'流水號',
			},
			{
				key:	'agency',
				label:	'代訓機構'
			},
			{
				key:	'className',
				label:	'訓練主題班別'
			},
			{
				key:	'course',
				label:	'課程名稱'
			} ,
			{
				key:	'classHour',
				label: '課程時數'
			}, 
			{
				key:	'stage',
				label: 	'期別'
			}, 
			{
				key:	'startDate',
				label:	'開始日期'
			},
			{
				key:	'endDate',
				label:	'結束日期'
			},
		],
		items:	[
			{
				id: '1',agency:'國立臺北科技大學',className: '土木工程品管案例研討【109年5月起適用】', course: '推管掘進機設備與操作實務', 
				classHour: '4',stage:'UR11001',startDate:'109/03/06',	endDate:'109/10/04',pk: 5566
			},
			{
				id: '2',agency:'淡江大學',className: '基礎開挖與品管【109年5月起適用】', course: '新舊建築基礎開挖工法與案例研討', classHour: '12', 
				teachClassCount:'14',	stage:'LR11001',startDate:'110/05/09',	endDate: '110/08/12',pk: 5566
			},
			{
				id: '3',agency:'工程會',className: '推進工程與工務行政【109年5月起適用】', course: '潛盾隧道施工案例', classHour: '8', 
				teachClassCount:'10',	stage:'KR11001',startDate:'111/02/13',	endDate: '111/06/26',pk: 5566
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
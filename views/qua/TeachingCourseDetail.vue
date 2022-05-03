<template>
	<div>
		<br>
		<br>
		<b-container fluid>
			<!--帶入前一頁選項值-->
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{tn}}{{picked}} 師資授課時數統計表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" >
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('TeachingCourseDetail2', row.item)">檢視</b-button>
					</template>
					<template #custom-foot>
						<b-tr>
							<b-th colspan="4">合計</b-th>
							<b-th >10</b-th>
							<b-th >8</b-th>
							<b-th ><b-button size="sm" variant="outline-secondary" @click="gotoParam('TeachingCourseDetail2', {teacherName:tn})">檢視</b-button></b-th>
						</b-tr>
					</template>
				</b-table>
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
				label:	'流水號',
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
				key:	'teachClassCount',
				label: 	'授課總次數'
			}, 
			{
				key:	'teachClassHours',
				label:	'授課總時數'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{
				id: '1',className: '土木工程品管案例研討【109年5月起適用】', course: '推管掘進機設備與操作實務', classHour: '4', 
				teachClassCount:'25',	teachClassHours:'144',	teacherName: this.$route.params.teacherName,pk: 5566
			},
			{
				id: '2',className: '基礎開挖與品管【109年5月起適用】', course: '新舊建築基礎開挖工法與案例研討', classHour: '12', 
				teachClassCount:'14',	teachClassHours:'86',	teacherName: this.$route.params.teacherName,pk: 5566
			},
			{
				id: '3',className: '推進工程與工務行政【109年5月起適用】', course: '潛盾隧道施工案例', classHour: '8', 
				teachClassCount:'10',	teachClassHours:'66',	teacherName: this.$route.params.teacherName,pk: 5566
			}
		],
		tn:this.$route.params.teacherName,
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
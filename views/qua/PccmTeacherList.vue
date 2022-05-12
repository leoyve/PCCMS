<template>
	<div>
		<br>
		<br>
		<b-container >
			<b-row class="col-sm row justify-content-end" >
				<b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
			</b-row>
			<br>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>工程會提供師資名單</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="light">
					<template #cell(detail)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('AgencyDetail', row.item)">檢視</b-button>
					</template>
					<template #cell(register)="row">
						<b-container>
							<b-row class="justify-content-center" v-show="row.item.showFlag">
								<b-button size="sm" variant="success" @click="checkIn(row.item)">移入</b-button>&nbsp;
							</b-row>
							<b-row class="justify-content-center" v-show="!row.item.showFlag">
								<b-col>(已移入)</b-col>
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
				key:	'qualifications',
				label:	'符合教師資格之類別'
			},
			{
				key:	'expertise',
				label:	'主要專長'
			},
			{
				key:	'register',
				label:	'移入代訓機構師資名冊',
				thStyle: { width: "15%" },
			},

			],
		items:	[
			{
				id: 1, teacherName: '王XX', serviceUnit: '代訓機構主管機關工程會', title: '科長', isRetire:'政府單位在職',	
				expertise:'政府採購全生命週期概論',	showFlag:true,	pk: 5566
			},
			{
				id: 2,teacherName: '林XX', serviceUnit: '國立屏東科技大學', title: '教授', isRetire:'民間單位在職',	
				expertise:'採購法規及履約管理',	showFlag:false,	pk: 5566
			},
			{
				id: 3, teacherName: '陳XX', serviceUnit: '社團法人高雄市土木技師公會', title: '經理', isRetire:'退休',	
				expertise:'控規劃、設計及監造',	showFlag:false,	pk: 5566
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
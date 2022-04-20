<template>
	<div>
		<br>
		<h3><strong>通報案件上傳照片批次審查勾選一覽表</strong></h3>
		<br>
		<b-container fluid>
			<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				<template #cell(checkBar)="row">
					<b-checkbox v-model="model"	@value="row.id"></b-checkbox>
				</template>
				<template #cell(photo)>
					<b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg"	width='100'	height='100'></b-img>
				</template>
				<template #cell(situation)="row">
					<b-container>
						<b-row>
							<b-col>申請日期: {{ row.item.submitDate	}} </b-col>
						</b-row>
						<b-row>
							<b-col>申請理由: {{ row.item.submitReason	}} </b-col>
						</b-row>
					</b-container>
				</template>
			</b-table>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >批次送審查通過</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="goBack()" >取消</b-button>
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
				key:	'number',
				label:	'通報案件編號'
			},
			{
				key:	'name',
				label:	'通報工程名稱'
			},
			{
				key:	'title',
				label: '通報主題'
			},
			{
				key:	'content',
				label:	'通報內容'
			},
			{
				key:	'uploadWkut',
				label:	'申請機關'
			},
			{
				key:	'situation',
				label:	'申請情形'
			}, 
			{
				key:	'reviewResult',
				label:	'審核結果'
			}, 
			],
		items:	[
			{ id: 1, number:	'11000000386',	name:'109年度新店區簡易自來水維護及修繕工程',	title:	'施工人員從高空亂丟垃圾',	
				content:'1.廠商在未告知停車場情況下於公有停車場進行鋼樑吊掛。 2.廠商作業期間附近無任何安全措施。 3.廠商作業期間部分時段無人看管，逕將拖車及鋼梁放置於公有停車場。',
				uploadWkut:	'民眾',	submitDate:	'110/09/09',	submitReason:'(1)本案照片係上傳於編號11000000386內，惟系統出錯導致立案未完成，爰申請免上傳照片。 (2)已請通報人重新通報立案。',
				reviewResult:	'',	pk: 5566 },
			{ id: 2, number:	'11000000386',	name:'109年度新店區簡易自來水維護及修繕工程',	title:	'施工人員從高空亂丟垃圾',	
				content:'1.廠商在未告知停車場情況下於公有停車場進行鋼樑吊掛。 2.廠商作業期間附近無任何安全措施。 3.廠商作業期間部分時段無人看管，逕將拖車及鋼梁放置於公有停車場。',
				uploadWkut:	'民眾',	submitDate:	'110/09/09',	submitReason:'(1)本案照片係上傳於編號11000000386內，惟系統出錯導致立案未完成，爰申請免上傳照片。 (2)已請通報人重新通報立案。',
				reviewResult:	'',	pk: 5566 },
			{ id: 3, number:	'11000000386',	name:'109年度新店區簡易自來水維護及修繕工程',	title:	'施工人員從高空亂丟垃圾',	
				content:'1.廠商在未告知停車場情況下於公有停車場進行鋼樑吊掛。 2.廠商作業期間附近無任何安全措施。 3.廠商作業期間部分時段無人看管，逕將拖車及鋼梁放置於公有停車場。',
				uploadWkut:	'民眾',	submitDate:	'110/09/09',	submitReason:'(1)本案照片係上傳於編號11000000386內，惟系統出錯導致立案未完成，爰申請免上傳照片。 (2)已請通報人重新通報立案。',
				reviewResult:	'',	pk: 5566 },

		],

	}
 },
}
</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
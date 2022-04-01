<template>
	<div>
		<br>
		<h3><strong>免需上傳照片審查</strong></h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件編號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件工程名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主題" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件照片審查結果" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="reviewResult" name="radio-validation-1"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件照片審查情形" label-align-md="right">
					<b-form-radio-group v-model="check3" :options="reviewSituation" name="radio-validation-2"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<h3>申請免需上傳改善照片檔案督工案件一覽表</h3>
				<br>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(checkBar)="row">
						<b-checkbox v-model="model"	@value="row.item.id"></b-checkbox>
					</template>
					<template #cell(action)="row">
						<b-button size="sm" variant="success" @click="toSee(row.item)">審核</b-button>
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
				<b-form-row class="justify-content-start">
					<b-button size="sm" variant="success" @click="batchReview" >批次審核</b-button>
				</b-form-row>
				<b-pagination align="right"
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					first-number
				></b-pagination>
			</b-container>
		</div>

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
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{ id: 1, number:	'11000000386',	name:'109年度新店區簡易自來水維護及修繕工程',	title:	'施工人員從高空亂丟垃圾',	
				content:'1.廠商在未告知停車場情況下於公有停車場進行鋼樑吊掛。 2.廠商作業期間附近無任何安全措施。 3.廠商作業期間部分時段無人看管，逕將拖車及鋼梁放置於公有停車場。',
				uploadWkut:	'民眾',	submitDate:	'110/09/09',	submitReason:'(1)本案照片係上傳於編號11000000386內，惟系統出錯導致立案未完成，爰申請免上傳照片。 (2)已請通報人重新通報立案。',
				reviewResult:	'通過',	pk: 5566 },
			{ id: 2, number:	'11000000386',	name:'109年度新店區簡易自來水維護及修繕工程',	title:	'施工人員從高空亂丟垃圾',	
				content:'1.廠商在未告知停車場情況下於公有停車場進行鋼樑吊掛。 2.廠商作業期間附近無任何安全措施。 3.廠商作業期間部分時段無人看管，逕將拖車及鋼梁放置於公有停車場。',
				uploadWkut:	'民眾',	submitDate:	'110/09/09',	submitReason:'(1)本案照片係上傳於編號11000000386內，惟系統出錯導致立案未完成，爰申請免上傳照片。 (2)已請通報人重新通報立案。',
				reviewResult:	'通過',	pk: 5566 },
			{ id: 3, number:	'11000000386',	name:'109年度新店區簡易自來水維護及修繕工程',	title:	'施工人員從高空亂丟垃圾',	
				content:'1.廠商在未告知停車場情況下於公有停車場進行鋼樑吊掛。 2.廠商作業期間附近無任何安全措施。 3.廠商作業期間部分時段無人看管，逕將拖車及鋼梁放置於公有停車場。',
				uploadWkut:	'民眾',	submitDate:	'110/09/09',	submitReason:'(1)本案照片係上傳於編號11000000386內，惟系統出錯導致立案未完成，爰申請免上傳照片。 (2)已請通報人重新通報立案。',
				reviewResult:	'通過',	pk: 5566 },

		],
		reviewResult:	[
			{	value: '', text: '全部'	},
			{	value: 'Y', text: '審查合格'	},
			{	value: 'N', text: '審查不通過'	},
		],
		reviewSituation:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '尚未審查'	},
			{	value: 'T', text: '今日審查'	},
			{	value: 'D', text: '七日內審查'	},
			{	value: 'Y', text: '已審查'	},
		],
		value1: '',
		value2: '',
		check2:	'',
		check3:	'N',

	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		this.$router.push({name:'NoPhotoReview'})
	},
	batchReview(){
		this.$router.push({name:'NoPhotoReviewBatch'})
  },
  reset(){

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
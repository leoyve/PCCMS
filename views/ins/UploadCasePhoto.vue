<template>
	<div>
		<b-container >
			<h2><strong>上傳處理照片</strong></h2>
			<b-form-row class="justify-content-center">
				<b-button size="sm" variant="success" @click="tt" >上傳處理照片</b-button>&ensp; &ensp; &ensp; &ensp; 
				<b-button size="sm" variant="success" @click="goTo(null, 'NoPhotoReviewSubmit')">申請免需上傳改善照片檔案</b-button>
			</b-form-row>
			<br>
			<b-form-row class="justify-content-start">
				<h6><font color='red'>1.通報案件如經審查同意結案，機關先前已上傳之照片檔案及相關資料即予鎖定，無法修改、更換或刪除！</font></h6>
			</b-form-row>
			<b-form-row class="justify-content-start">
				<h6><font color='red'>2.自結案之次日起120天以內(不含結案當日)，仍可新增上傳後續之改善處理照片；但照片經審查後即無法修改、更換或刪除！</font></h6>
			</b-form-row>
			<b-form-row class="justify-content-start">
				<h6><font color='red'>3.請注意上傳的照片請勿含有任何個資內容！</font></h6>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<b-form-row class="justify-content-center text-light bg-dark"><h4><strong>全民督工通報案件[編號：111XXXXXX]上傳照片一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-center">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(change)="row">
							<b-button size="sm" variant="success" @click="goTo(row.item, 'ChangePhotoReview')">修改</b-button>
						</template>
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="test(row.item)">更換</b-button>&ensp;
							<b-button size="sm" variant="danger" @click="deleteCase">刪除</b-button>
						</template>
						<template #cell(photo)>
							<b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg"	width='100'	height='100'></b-img>
						</template>
					</b-table>
				</b-form-row>
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
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'wkut',
				label:	'上傳機關'
			} ,
			{
				key:	'photo',
				label: '照片預覽圖'
			}, 
			{
				key:	'photoComment',
				label:	'照片說明',
				thStyle: { width: "20%" },
			}, 
			{
				key:	'review',
				label:	'審核結果'
			},
			{
				key:	'reviewComment',
				label:	'審核不通過理由'
			},
			{
				key:	'change',
				label:	'說明'
			},
			{
				key:	'action',
				label:	'照片'
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, number: '11000000001',	wkut: '行政院公共工程委員會',	photoComment:'施工人員未戴安全帽及穿著反光背心, 鋼筋裸露未加保護套, 土堆未覆蓋，造成揚塵.',
			review:'(尚未審核)',	reviewComment:'照片過於模糊',	pk: 5566 },
			
		],

	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);

		this.$router.push({name:'CaseRecordEdit'})

		
	},
	goTo(item, path){
      this.$router.push({name:path})
    },
	deleteCase(){
      confirm('確定刪除?');
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
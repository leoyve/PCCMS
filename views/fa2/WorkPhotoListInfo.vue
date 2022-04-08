<template>
	<div>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-secondary"><h4><strong>上傳照片一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-center">
				<b-table striped hover :items="items" :fields="fields">
					<template #cell(photo)>
						<b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg"	width='100'	height='100'></b-img>
					</template>
					<template #cell(action)="row" v-if="modifyFlag">
						<b-button size="sm" variant="success" @click="gotoParam('WorkPhotoEdit', {updateFlag:true,...row.item})">修改</b-button>&nbsp;
						<b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
					</template>
				</b-table>
			</b-form-row>
		</b-container>
	</div>
</template>


<script>


export default {
	props:['modifyFlag'],
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
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, number: '11000000001',	wkut: '行政院公共工程委員會',	photoComment:'施工人員未戴安全帽及穿著反光背心, 鋼筋裸露未加保護套, 土堆未覆蓋，造成揚塵.',
			review:'(尚未審核)',	pk: 5566 },
			
		],

	}
 },
 methods: {
	uploadPhoto(){
		alert('上傳照片通用元件。');
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
<template>
	<div>
		<b-container fluid>
			<h3>上傳文件檔案批次審查一覽表</h3>
			<br>
			<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				<template #cell(checkBar)="row">
					<b-checkbox v-model="model"	@value="row.id"></b-checkbox>
				</template>
				<template #cell(photo)>
					<b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg"	width='100'	height='100'></b-img>
				</template>
			</b-table>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >送出批次審查通過結果</b-button>&nbsp;
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
				key:	'photo',
				label:	'照片'
			},
			{
				key:	'photoDesc',
				label:	'照片說明'
			},
			{
				key:	'uploadWkut',
				label:	'上傳機關'
			}, 
			{
				key:	'reviewResult',
				label:	'審核結果'
			},
			],
		items:	[
			{ id: 1, number:	'11000000386',	name:'109年度新店區簡易自來水維護及修繕工程',	title:	'施工人員從高空亂丟垃圾',	photoDesc:'螺帽與菸蒂掉在下方的水溝',
				uploadDate:	'110/12/12',	uploadWkut:	'民眾',	reviewResult:	'',	pk: 5566 },
			{ id: 2, number:	'11000000386',	name:'舊酒廠立體停車場',	title:	'請早上8點過後在施工',	photoDesc:'民眾反應早上施工問題電話紀錄',
				uploadDate:	'110/12/04',	uploadWkut:	'工程會',	reviewResult:	'',	pk: 5566 },
			{ id: 3, number:	'11000000329',	name:'	大嵙崁勤水園區景觀工程',	title:	'停車場排水不良、施工圍籬遮蔽車行視線',	photoDesc:'改善後',
				uploadDate:	'110/11/11',	uploadWkut:	'民眾',	reviewResult:	'',	pk: 5566 },	

		],

	}
 },
 methods: {
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
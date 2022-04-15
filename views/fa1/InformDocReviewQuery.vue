<template>
	<div>
		<br>
		<h3><strong>審查管理通報案件上傳文件檔案主畫面</strong></h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="案件編號關鍵字" label-align-md="right">
					<b-form-input></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="案件公共設施名稱關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="案件主題關鍵字" label-align-md="right">
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4>閒置公共設施案件上傳文件檔案審查情形一覽表</h4></b-form-row>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(checkBar)="row">
						<b-checkbox v-model="model"	@value="row.id"></b-checkbox>
					</template>
					<template #cell(photo)>
						<b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg"	width='100'	height='100'></b-img>
					</template>
					<template #cell(action)="row">
						<b-button size="sm" variant="success" @click="gotoParam('InformDocReview', row.item)">審核</b-button>&nbsp;
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('InformDocChange', row.item)">更換</b-button>
					</template>
				</b-table>
				<b-form-row class="justify-content-start">
					<b-button size="sm" variant="success" @click="gotoParam('InformDocReviewBatch')" >批次審核</b-button>
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
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'number',
				label:	'案件編號'
			},
			{
				key:	'name',
				label:	'公共設施名稱'
			},
			{
				key:	'title',
				label: '通報主題'
			},
			{
				key:	'photo',
				label:	'上傳文件檔案'
			},
			{
				key:	'photoDesc',
				label:	'上傳文件檔案說明'
			},
			{
				key:	'uploadDate',
				label:	'上傳日期'
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
			{ id: 1, number:	'11000000386',	name:'109年度新店區簡易自來水維護及修繕工程',	title:	'施工人員從高空亂丟垃圾',	photoDesc:'螺帽與菸蒂掉在下方的水溝',
				uploadDate:	'110/12/12',	reviewResult:	'通過',	pk: 5566 },
			{ id: 2, number:	'11000000386',	name:'舊酒廠立體停車場',	title:	'請早上8點過後在施工',	photoDesc:'民眾反應早上施工問題電話紀錄',
				uploadDate:	'110/12/04',reviewResult:	'通過',	pk: 5566 },
			{ id: 3, number:	'11000000329',	name:'	大嵙崁勤水園區景觀工程',	title:	'停車場排水不良、施工圍籬遮蔽車行視線',	photoDesc:'改善後',
				uploadDate:	'110/11/11',	reviewResult:	'',	pk: 5566 },	

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


	}
 },
 methods: {
 },
 mounted(){
	this.items.forEach((items, index) => { items.serial = index + 1; });
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
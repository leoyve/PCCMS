<template>
	<div>
		<br>
		<h3><strong>上傳照片審查管理</strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="照片說明" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="識別碼" label-align-md="right">
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
				<h3>上傳照片審查情形一覽表</h3>
				<br>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(checkBar)="row">
						<b-checkbox v-model="model"	@value="row.id"></b-checkbox>
					</template>
					<template #cell(photo)>
						<b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg"	width='100'	height='100'></b-img>
					</template>
					<template #cell(action)="row">
						<b-button size="sm" variant="success" @click="gotoParam('PhotoReview', row.item)">審核</b-button>&nbsp;
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('PhotoChange', row.item)">更換</b-button>
					</template>
				</b-table>
				<b-form-row class="justify-content-start">
					<b-button size="sm" variant="success" @click="gotoParam('PhotoReviewBatch')" >批次審核</b-button>
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
				key:	'wkut',
				label:	'主辦機關'
			}, 
			{
				key:	'number',
				label:	'識別碼'
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
			{ id: 1, number:'11000000386',	wkut:'桃園市政府交通局',photoDesc:'螺帽與菸蒂掉在下方的水溝',
				uploadDate:	'110/12/12',reviewResult:	'通過',	pk: 5566 },
			{ id: 2, number:'11000000386',	wkut:'舊酒廠立體停車場',photoDesc:'民眾反應早上施工問題電話紀錄',
				uploadDate:	'110/12/04',reviewResult:	'通過',	pk: 5566 },
			{ id: 3, number:'11000000329',	wkut:'新竹縣政府民政處',photoDesc:'改善後',
				uploadDate:	'110/11/11',reviewResult:'',	pk: 5566 },	

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
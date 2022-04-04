<template>
  <div>
	<b-container fluid>
		<br>
		<b-form-row class="row justify-content-end">
			<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				<template #cell(action)="row">
					<!--中央主管機關以及工程會才有刪除的按鈕-->
					<b-button size="sm" variant="success" @click="gotoParam('PublicFacilityEdit', {updateFlag:true})" v-show="buttonFlag">編輯</b-button>&nbsp;
					<b-button size="sm" variant="danger" @click="gotoParam('DeleteFacility', row.item)"  v-show="buttonFlag">刪除</b-button>
				</template>
				<template #cell(mym)="row">
					<b-container>
					<b-row>
					<b-col>{{row.item.year}}年</b-col><b-col>{{row.item.month}}月</b-col>
					</b-row>
					</b-container>
				</template>
				<template #cell(file)="row">
					<b-container>
						<b-row v-if="row.item.fileYM != null">
							<b-col>檔案年月:{{row.item.fileYM}}</b-col>
						</b-row>
						<b-row v-if="row.item.fileYM != null">
							<b-col>檔案<a href="#">下載</a></b-col>
						</b-row>
						<b-row v-if="row.item.fileYM != null">
							<b-col>檔案說明: {{row.item.fileDesc}}</b-col>
						</b-row>
						<b-row v-if="row.item.fileYM == null">
							<b-col class="bg-warning">沒有維護紀錄</b-col>
							</b-row>
					</b-container>
				</template>
			</b-table>
		</b-form-row>
		<b-form-row class="row justify-content-end">
			<b-pagination align="right"
				v-model="currentPage"
				:total-rows="rows"
				:per-page="perPage"
				first-number
			></b-pagination>
		</b-form-row>
	</b-container>
    <br>
  </div>
</template>


<script>


export default {
  props:['replaceItems','buttonFlag'],
  data(){
	
    return{
        rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key: 'mainType',
				label:	'主類別'
			},
			{
				key: 'subType',
				label:	'次類別'
			},
			{
				key:	'equName',
				label:	'施備名稱'
			},
			{
				key:	'BOSCODE',
				label:	'主管法規之中央目的事業主管機關'
			},
			{
				key:	'EBOSOCDE',
				label:	'養護機關'
			},
			{
				key:	'UBOSCODE',
				label:	'上一級養護管理機關'
			},
			{
				key:	'OBOSCODE',
				label:	'中央部會及地方政府'
			},
			{
				key:	'mym',
				label:	'養護頻率'
			},
			{
				key:	'file',
				label:	'養護紀錄',
				thStyle: { width: "15%" },
			},
			{
				key:	'lastDate',
				label:	'最近一次養護日期'
			},
			{
				key:	'status',
				label:	'維護管理狀況',
				thStyle: { width: "10%" },
			},
			{
				key:	'lastStatus',
				label:	'近期維護管理執行情形',
				thStyle: { width: "10%" },
			},
			{
				key:	'abnormal',
				label:	'異常狀況',
				thStyle: { width: "10%" },
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "10%" },
			},
		],
		items: this.replaceItems,
  }
 },
 methods:  {
   
  },
  mounted(){
	this.items.forEach((items, index) => { items.serial = index + 1; });
  }

}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-md-4 {
  background-color:white;
  color: white;
  text-align: left;
}

</style>
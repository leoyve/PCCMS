<template>
  <div>
	<b-container fluid>
		<br>
		<b-form-row class="row justify-content-end">
			<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				<template #cell(action)="row">
					<!--中央主管機關以及工程會才有刪除的按鈕-->
					<b-button size="sm" variant="success" @click="gotoParam('PublicFacilityEdit', {updateFlag:true})">編輯</b-button>&nbsp;
					<b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
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
  props:['mountFlag', 'replaceField', 'replaceItems'],
  data(){
	
    return{
        rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: this.replaceField,
		items: this.replaceItems,
  }
 },
 methods:  {
   
  },
  mounted(){
		
	if(this.mountFlag){
		this.items=[
		{id:1, mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
			OBOSCODE:'經濟部',year:0,month:6,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'每年自行簡易保養或委託專業廠商依契約內容執行設施維護管理作業，維護管理狀況良好，使用正常。'},
		{id:2, mainType:'交通設施', subType:'道路', equName:'4-1道路', BOSCODE:'交通部', EBOSOCDE:'墾丁國家公園管理處', UBOSCODE:'內政部營建署',
			OBOSCODE:'內政部',year:0,month:1, lastDate:'2022/03/31', status:'已依規定維護正常使用',
			lastStatus:'本處道路開口契約廠商隨時機動進行道路設施之維護'},
		{id:3, mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
			OBOSCODE:'經濟部',year:0,month:6,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'每年自行簡易保養或委託專業廠商依契約內容執行設施維護管理作業，維護管理狀況良好，使用正常。'}, ];
	}

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
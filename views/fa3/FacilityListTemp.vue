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
  //props:['replaceField', 'replaceItems'],
  data(){
	
    return{
        rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: this.$route.params.replaceField,
		items: this.$route.params.replaceItems,
  }
 },
 methods:  {
   
  },
  mounted(){
	this.$forceUpdate();
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
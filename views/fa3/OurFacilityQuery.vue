<template>
  <div>
    <br>
    <h3><strong>維護本機關關鍵公共設施</strong></h3>
    <br>
    <facilityListTemp :replaceItems="items"/>
    <br>
  </div>
</template>


<script>
import facilityListTemp from './FacilityListTemp.vue'
export default {
  data(){
    return{
		items: undefined,
  }
 },
 methods:  {
   
  },
  components:{
    facilityListTemp
  },
  //mounted時元件就已經傳進去了，所以要在beforeMount就修改好要傳入的元件
  beforeMount(){
    this.items = [{mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
			OBOSCODE:'經濟部',year:0,month:6,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'每年自行簡易保養或委託專業廠商依契約內容執行設施維護管理作業，維護管理狀況良好，使用正常。'},
		{mainType:'交通設施', subType:'道路', equName:'4-1道路', BOSCODE:'交通部', EBOSOCDE:'墾丁國家公園管理處', UBOSCODE:'內政部營建署',
			OBOSCODE:'內政部',year:0,month:1, lastDate:'2022/03/31', status:'已依規定維護正常使用',
			lastStatus:'本處道路開口契約廠商隨時機動進行道路設施之維護'},
		{mainType:'環保設施', subType:'污水處理廠', equName:'大發污水處理廠', BOSCODE:'經濟部工業局', EBOSOCDE:'高雄臨海林園大發工業區聯合污水理廠', UBOSCODE:'經濟部工業局工業區環境保護中心',
			OBOSCODE:'經濟部',year:0,month:6,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'每年自行簡易保養或委託專業廠商依契約內容執行設施維護管理作業，維護管理狀況良好，使用正常。'}  
		];
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
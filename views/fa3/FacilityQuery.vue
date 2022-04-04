<template>
  <div>
    <br>
    <h3><strong>維護本機關關鍵公共設施</strong></h3>
    <br>
    <facilityListTemp :replaceItems="items" :buttonFlag="true"/>
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
    this.items = [{mainType:'交通設施', subType:'邊坡', equName:'北坑巷(北坑幹G6746AC64台電桿號)5周邊', BOSCODE:'內政部', EBOSOCDE:'臺中市建設局養護工程處北北屯工程隊', UBOSCODE:'臺中市政府建設局',
			OBOSCODE:'臺中市政府',year:0,month:1,fileYM:'110-02', fileDesc:'檔案說明', lastDate:'2021/12/31', status:'已依規定維護正常使用',
			lastStatus:'定期巡查'},
		{mainType:'水利設施', subType:'滯洪池', equName:'三舍滯洪池', BOSCODE:'經濟部', EBOSOCDE:'臺南市政府水利局水門抽水站管理科', UBOSCODE:'臺南市政府水利局',
			OBOSCODE:'臺南市政府',year:0,month:7, lastDate:'2022/03/31', status:'已依規定維護正常使用',
			lastStatus:'依契約規定辦理維護'},
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
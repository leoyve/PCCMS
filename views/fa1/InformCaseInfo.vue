<template>
  <div>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置設施通報案件--通報資料</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">案件編號</b-col>
          <b-col class="col-md-10 text-left ">10200000002</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報日期</b-col>
          <b-col class="col-md-10 text-left ">102/11/14</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報案件源起</b-col>
          <b-col class="col-md-4 text-left ">民眾通報</b-col>
          <b-col class="col-md-2 ">原始資料來源</b-col>
          <b-col class="col-md-4 text-left"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施名稱</b-col>
          <b-col class="col-md-4 text-left ">金門國家公園範圍內道路約3公里長的路燈安裝好迄今未亮與破損,有礙行車安全</b-col>
          <b-col class="col-md-2 ">權責機關</b-col>
          <b-col class="col-md-4 text-left">金門國家公園管理處或金門縣政府</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">中央目的事業主管機關(暫列)</b-col>
          <b-col class="col-md-10 text-left "></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">地點</b-col>
          <b-col class="col-md-10 text-left ">[XX縣]XX縣 XX鄉寧湖路</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報者姓名</b-col>
          <b-col class="col-md-4 text-left ">XXX</b-col>
          <b-col class="col-md-2 ">通報者性別</b-col>
          <b-col class="col-md-4 text-left">男</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報者連絡地址</b-col>
          <b-col class="col-md-4 text-left">XX市XX區XX路1號3103室</b-col>
          <b-col class="col-md-2 ">通報者連絡電話</b-col>
          <b-col class="col-md-4 text-left">02-XXXXXXXX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報者傳真</b-col>
          <b-col class="col-md-4 text-left">02-XXXXXXXX</b-col>
          <b-col class="col-md-2 ">通報者電子郵件</b-col>
          <b-col class="col-md-4 text-left">test@gmail.com</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">通報主題</b-col>
          <b-col class="col-md-4 text-left">閒置空間</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施類別</b-col>
          <b-col class="col-md-10 text-left">文教設施(訓練所、文物館、校舍等)</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">具體內容</b-col>
          <b-col class="col-md-10 text-left">位在監察院對面，至少兩年大門緊閉</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">資料上鎖日期</b-col>
          <b-col class="col-md-10 text-left"></b-col>
        </b-row>
      </b-container>
  </div>
</template>


<script>

export default {
  props:["detailFlag"],
  data(){
    return{
     
  }
 },
 methods:  {
   
  },

}
</script>
<style>
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}

</style>
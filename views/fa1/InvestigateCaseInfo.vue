<template>
  <div>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置設施通報案件--查處資料</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施查處者姓名</b-col>
          <b-col class="col-md-4 text-left ">王XX</b-col>
          <b-col class="col-md-2 text-dark">設施查處者連絡電話</b-col>
          <b-col class="col-md-4 text-left ">0912XXXXXX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施查處者電子郵件地址</b-col>
          <b-col class="col-md-10 text-left ">test@XXX.com</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施正式名稱(查處後)</b-col>
          <b-col class="col-md-10 text-left ">排水工程</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施管理機關(查處後)</b-col>
          <b-col class="col-md-10 text-left ">雲林縣北港鎮公所</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施管理機關連絡人</b-col>
          <b-col class="col-md-4 text-left ">吳XX</b-col>
          <b-col class="col-md-2 text-dark">設施管理機關連絡電話</b-col>
          <b-col class="col-md-4 text-left ">02-xxxxxxxx</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施目的事業主管機關</b-col>
          <b-col class="col-md-10 text-left ">行政院</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施地址</b-col>
          <b-col class="col-md-10 text-left ">XX市XX區XX街XX巷X號X樓</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施地點X座標(經度)</b-col>
          <b-col class="col-md-4 text-left ">100</b-col>
          <b-col class="col-md-2 text-dark">設施地點Y座標(緯度)</b-col>
          <b-col class="col-md-4 text-left ">100</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">建造工程經費(千元)</b-col>
          <b-col class="col-md-10 text-left ">120</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">建造工程經費_中央(千元)</b-col>
          <b-col class="col-md-4 text-left ">100</b-col>
          <b-col class="col-md-2 text-dark">建造工程經費_地方(千元)</b-col>
          <b-col class="col-md-4 text-left ">100</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">完工日期</b-col>
          <b-col class="col-md-10 text-left ">110/11/12</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施摘要說明</b-col>
          <b-col class="col-md-10 text-left ">設施摘要說明</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">查處使用情形情形</b-col>
          <b-col class="col-md-10 text-left ">一、依案件所提內容係指該排水工程已無施工，並已超過完工期限，另現場地面道路坑洞多、高低落差甚大、無設置安全設施警告，且已完工排水溝與道路尚有高低落差。 二、上開各項目非屬閒置公共設施範疇，已轉由全民監督公共工程資訊系統錄案辦理（案件編號10400001969），後續將由該系統回復辦理情況。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">建議是否納入閒置系統列管</b-col>
          <b-col class="col-md-10 text-left ">否</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">建議不納入列管原因</b-col>
          <b-col class="col-md-10 text-left ">列管原因</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">建議不納入列管說明</b-col>
          <b-col class="col-md-10 text-left ">列管說明</b-col>
        </b-row>
      </b-container>
  </div>
</template>


<script>

export default {
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
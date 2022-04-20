<template>
  <div>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置公共設施基本資料表</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">閒置設施編號</b-col>
          <b-col class="col-md-4 text-left ">105-1104-013</b-col>
          <b-col class="col-md-2  ">先前列管最早設施編號</b-col>
          <b-col class="col-md-4 text-left ">105-1104-013</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">閒置設施名稱</b-col>
          <b-col class="col-md-10 text-left ">桃園市新明公有零售市場(原中壢區第二公有市場)</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">閒置設施類別</b-col>
          <b-col class="col-md-4 text-left ">市場設施</b-col>
          <b-col class="col-md-2 ">主辦人</b-col>
          <b-col class="col-md-4 text-left">王XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">聯絡電話</b-col>
          <b-col class="col-md-4 text-left ">03-XXXXXXXX</b-col>
          <b-col class="col-md-2 ">電子信箱</b-col>
          <b-col class="col-md-4 text-left">test@test.com</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">設施管理機關</b-col>
          <b-col class="col-md-10 text-left ">桃園市政府經濟發展局</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">目的事業主管機關</b-col>
          <b-col class="col-md-10 text-left ">經濟部</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">總建造費</b-col>
          <b-col class="col-md-10 text-left ">70003 千元(其中經費來源屬中央部會署 0 千元，屬地方政府 70003 千元)</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">設施所在地區</b-col>
          <b-col class="col-md-4 text-left ">XX市XX區</b-col>
          <b-col class="col-md-2 ">設施詳細地點</b-col>
          <b-col class="col-md-4 text-left">XX市XX區XX路60號</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">經度X座標</b-col>
          <b-col class="col-md-4 text-left">121.22</b-col>
          <b-col class="col-md-2 ">緯度Y座標</b-col>
          <b-col class="col-md-4 text-left">58.12</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">開工日期</b-col>
          <b-col class="col-md-4 text-left">76/07/01</b-col>
          <b-col class="col-md-2 ">完工日期</b-col>
          <b-col class="col-md-4 text-left">79/09/18</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">提案時之機關首長姓名職稱</b-col>
          <b-col class="col-md-4 text-left">待確認</b-col>
          <b-col class="col-md-2 ">開工時之機關首長姓名職稱</b-col>
          <b-col class="col-md-4 text-left">XXX市長</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">閒置起始日期</b-col>
          <b-col class="col-md-4 text-left">96/04/01</b-col>
          <b-col class="col-md-2 ">是否興建完成就閒置</b-col>
          <b-col class="col-md-4 text-left">否</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">管理人力</b-col>
          <b-col class="col-md-4 text-left">1人</b-col>
          <b-col class="col-md-2 ">是否委外經營</b-col>
          <b-col class="col-md-4 text-left">否</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施概要</b-col>
          <b-col class="col-md-10 text-left">新明市場大樓為地下2層，地上7層建設物，各層面積如下：地下二層3,076㎡、地下一層3,083㎡、第一層2,141㎡、第二層2,627㎡、第三層2,493㎡、第四層 2,627㎡、第五層 1,045㎡、第六層 1,665㎡、第七層 1,665㎡。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施使用情形</b-col>
          <b-col class="col-md-10 text-left">1.地下1、2樓委外經營(台灣路停股份有限公司)停車場正常使用中。 2.地上1、2樓為市場，第1樓各攤商正常營業中，第2樓部分攤商營業中(規劃110攤，實際營業9攤，餘101攤由本市中壢區公所辦理招租作業中)。 3.目前地上3樓至7樓分別由本市府社會局、勞動局、青年局規劃為本市公設民營托嬰中心及日照中心、工會辦公室、職業重建南區服務中心、青年創業中心、青年旅舍等，並依使用單位需求及特性規劃修繕整理作業中。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">閒置情形</b-col>
          <b-col class="col-md-4 text-left ">完全閒置</b-col>
          <b-col class="col-md-2  ">閒置原因類別</b-col>
          <b-col class="col-md-4 text-left ">管理不善</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">閒置原因簡述</b-col>
          <b-col class="col-md-10 text-left ">改制前中壢市公所與泰源建設開發股份有限公司集資興，投資協議為前開公司得無償使用市場15年，使用期滿後，因市公所承接不順暢及原承租戶糾紛，現場廢棄物及垃圾堆積如山，內部設備嚴重破壞不堪使用，為避免成治安死角，市公所於96年4月將地下2樓及地上2至7樓封閉，導致閒置。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">預定活化措施及效益</b-col>
          <b-col class="col-md-10 text-left ">1.本市場建築物為多目標使用，地下1樓至地下2樓為停車場，可紓解附近停車空間不足問題及交通阻礙問題。 2.地上1樓至地上2樓整建為市場，且採乾溼分離之規劃，本府並加強推廣行銷，提供市民優質採購環境。 3.規劃地上3樓為托嬰及日照中心、4樓為(民權路側)南區身障職業重建服務據點、4樓(明德路側)及5樓為青年創業中心、6樓及7樓為青年旅舍之多目標、多功能建物使用，活化正常營運後，應可充分發揮公共設施之機能，兼能促進周邊地區商業活動之發展。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">需協助解決事項</b-col>
          <b-col class="col-md-10 text-left ">	請中央補助經費加強更新、補充硬體設備及辦理行銷推廣作業。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">非閒置量化標準</b-col>
          <b-col class="col-md-10 text-left "></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">累計已投入活化經費</b-col>
          <b-col class="col-md-4 text-left ">	57303 千元</b-col>
          <b-col class="col-md-2  ">預估完成活化期程</b-col>
          <b-col class="col-md-4 text-left ">11012</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">原始資料來源</b-col>
          <b-col class="col-md-10 text-left "></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">列管緣起</b-col>
          <b-col class="col-md-10 text-left ">姚教授專書5披露</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">開始列管日期</b-col>
          <b-col class="col-md-4 text-left ">105/11/04</b-col>
          <b-col class="col-md-2  ">解除列管日期</b-col>
          <b-col class="col-md-4 text-left ">110/12/31</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">是否解除列管</b-col>
          <b-col class="col-md-10 text-left ">繼續列管</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">解除列管原因</b-col>
          <b-col class="col-md-10 text-left "></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">專案小組列管</b-col>
          <b-col class="col-md-4 text-left "></b-col>
          <b-col class="col-md-2  ">審計部編號</b-col>
          <b-col class="col-md-4 text-left "></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">最終設施類別</b-col>
          <b-col class="col-md-10 text-left "></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">基本資料上鎖日期</b-col>
          <b-col class="col-md-4 text-left "></b-col>
          <b-col class="col-md-2  ">新增本年度作業里程碑上鎖日期</b-col>
          <b-col class="col-md-4 text-left "></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2  ">實際執行資料上鎖日期</b-col>
          <b-col class="col-md-4 text-left "></b-col>
          <b-col class="col-md-2  ">資料是否開放檢視</b-col>
          <b-col class="col-md-4 text-left ">是</b-col>
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
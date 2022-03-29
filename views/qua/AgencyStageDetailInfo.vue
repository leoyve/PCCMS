<template>
  <div>
    <b-container fluid>
      <b-form-row class="justify-content-center "><h2><strong>開班期別基本資料表</strong></h2></b-form-row>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">開班期別名稱</b-col>
          <b-col class="col-md-10 text-left">LR11001</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">代訓機構</b-col>
          <b-col class="col-md-10 text-left">代訓機構主管機關工程會</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">訓練主題班別</b-col>
          <b-col class="col-md-4 text-left">公共工程品質管理訓練班(機電) 【109年4月起適用】</b-col>
          <b-col class="col-md-2 ">訓練主題班別編號</b-col>
          <b-col class="col-md-4 text-left">1090000002</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">訓練地址</b-col>
          <b-col class="col-md-10 text-left">新北市XX路XX街XX號X樓</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>訓練地址</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">電話</b-col>
          <b-col class="col-md-4 text-left">02-XXXXXXXX</b-col>
          <b-col class="col-md-2 ">傳真</b-col>
          <b-col class="col-md-4 text-left">02-XXXXXXXX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">執行長</b-col>
          <b-col class="col-md-4 text-left">王XX</b-col>
          <b-col class="col-md-2 ">承辦人</b-col>
          <b-col class="col-md-4 text-left">陳XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">駐班人員</b-col>
          <b-col class="col-md-4 text-left">王XX、林XX、劉XX</b-col>
          <b-col class="col-md-2 ">班導師</b-col>
          <b-col class="col-md-4 text-left">蔡XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">實際開訓日期</b-col>
          <b-col class="col-md-4 text-left">110/01/23</b-col>
          <b-col class="col-md-2 ">實際結訓日期</b-col>
          <b-col class="col-md-4 text-left">110/11/23</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">開課時段</b-col>
          <b-col class="col-md-4 text-left">夜間</b-col>
          <b-col class="col-md-2 ">開課種類</b-col>
          <b-col class="col-md-4 text-left">實體</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">預定訓練人數</b-col>
          <b-col class="col-md-10 text-left">50</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">申報開訓送審日期</b-col>
          <b-col class="col-md-4 text-left"></b-col>
          <b-col class="col-md-2 ">申報開訓送審文號</b-col>
          <b-col class="col-md-4 text-left"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">申報結訓送審日期</b-col>
          <b-col class="col-md-4 text-left"></b-col>
          <b-col class="col-md-2 ">申報結訓送審文號</b-col>
          <b-col class="col-md-4 text-left"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">申報結訓送審日期</b-col>
          <b-col class="col-md-4 text-left"></b-col>
          <b-col class="col-md-2 ">申報結訓送審文號</b-col>
          <b-col class="col-md-4 text-left"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主管機關許可開訓日期</b-col>
          <b-col class="col-md-4 text-left"></b-col>
          <b-col class="col-md-2 ">主管機關許可開訓文號</b-col>
          <b-col class="col-md-4 text-left"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主管機關許可結訓日期</b-col>
          <b-col class="col-md-4 text-left"></b-col>
          <b-col class="col-md-2 ">主管機關許可結訓文號</b-col>
          <b-col class="col-md-4 text-left"></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
  </div>
</template>


<script>


export default {
  data(){
    return{
     
  }
 },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
  },

}
</script>
<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
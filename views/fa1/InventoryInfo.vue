<template>
  <div>
    <br>
      <b-container fluid>
        <b-row>
          <b-col class="text-right">
            <b-button size="sm" variant="success" @click="goBack()">修改</b-button>&nbsp;
            <b-button size="sm" variant="danger" @click="goBack()">刪除</b-button>&nbsp;
            <b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-left"><h3><strong><font color="red">清查公共設施基本資料表</font></strong></h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">清查公共設施基本資料表</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施編號</b-col>
          <b-col class="col-md-10 text-left ">1010000000176</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施名稱</b-col>
          <b-col class="col-md-10 text-left ">頭份鎮停二立體停車場</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施類別</b-col>
          <b-col class="col-md-10 text-left ">工程設施</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施管理機關</b-col>
          <b-col class="col-md-10 text-left">苗栗縣頭份市公所</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主管機關</b-col>
          <b-col class="col-md-10 text-left">內政部</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">目的事業主管機關</b-col>
          <b-col class="col-md-10 text-left">內政部</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">設施規模概述</b-col>
          <b-col class="col-md-10 text-left ">設計水量5,000CMD</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">是否正常使用</b-col>
          <b-col class="col-md-10 text-left ">是</b-col>
        </b-row>
        
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施使用情形概述</b-col>
          <b-col class="col-md-10 text-left">處理生活污水或截流污水水量達設計水量 97.7%。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">備註</b-col>
          <b-col class="col-md-10 text-left"></b-col>
        </b-row>
        <b-row class="border border-dark" v-show="detailFlag">
          <b-col class="col-md-2 ">計畫基本資料是否上鎖</b-col>
          <b-col class="col-md-10 text-left">是</b-col>
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
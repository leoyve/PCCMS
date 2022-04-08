<template>
  <div>
    <br>
      <b-container fluid>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success"  @click="modify()" >修改</b-button>&nbsp;&nbsp;
          <b-button size="sm" variant="outline-secondary"  @click="goBack()" >取消</b-button>&nbsp;&nbsp;
        </b-form-row>
        <br>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light"><h3>活化補助工作計畫基本資料表</h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">活化計畫編號</b-col>
          <b-col class="col-md-10 text-left ">1060000004</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>活化計畫名稱</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">閒置設施</b-col>
          <b-col class="col-md-10 text-left ">閒置設施</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施活化類別</b-col>
          <b-col class="col-md-10 text-left">交通建設(停車場)</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">閒置設施管理機關</b-col>
          <b-col class="col-md-10 text-left">行政院</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>活化計畫起始日</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>活化計畫結束日</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>活化經費(千元)</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>聯絡人</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>連絡電話</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>電子信箱</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">手機號碼</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
          <b-col class="col-md-2 ">活化計畫日曆天數</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>行政院專案補助款(千元)</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>地方配合款(千元)</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>其他中央部會補助款(千元)</b-col>
          <b-col class="col-md-10 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施內容及使用現況<font color="red">(2000字)</font></b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">活化標準</b-col>
          <b-col class="col-md-10 text-left">1.停車場所在村（里）人口數逾3,000人者：「一個月內平均小時停車率40%以上」或「尖峰小時停車率70%以上」。 2.停車場所在村（里）人口數3,000人以下者：「一個月內平均小時停車率30%以上」或「尖峰小時停車率70%以上」。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>閒置原因分析<font color="red">(2000字)</font></b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>活化方向相關會議辦理情形<font color="red">(2000字)</font></b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>活化計畫內容（含計畫緣起、計畫目標、執行策略及方法）<font color="red">(2000字)</font></b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>活化計畫效益（含未來設施使用管理計畫）<font color="red">(2000字)</font></b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>經費編列整體說明（含財務自償性分析）<font color="red">(2000字)</font></b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">核定之計畫基本資料是否一併修改工程會專用<font color="red">工程會專用</font></b-col>
          <b-col class="col-md-10 text-left"><b-checkbox/></b-col>
        </b-row>
        <br>
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
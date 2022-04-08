<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>活化補助工作計畫基本資料解鎖管理表單</strong></h2></b-form-row>
      <br>
      <b-container fluid>
        <b-form-row class="bg-primary">
          <b-col class="col-md-12 text-light"><h3>活化補助工作計畫基本資料解鎖</h3></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>計畫基本資料是否上鎖</b-col>
          <b-col class="col-md-10 text-left ">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
            <font color="red">(欲解鎖計畫基本資料，本列須選擇"否"，且下列計畫基本資料上鎖日期須設定為未來之日期)</font>
          </b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>計畫基本資料上鎖日期</b-col>
          <b-col class="col-md-10 text-left ">
            <b-datepicker/> <font color="red">(欲解鎖計畫基本資料，本列上鎖日期須設定為未來之日期)</font>
          </b-col>
        </b-form-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="check()">提交</b-button>&nbsp;
          <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
        </b-form-row>
        <br>
      </b-container>      
    <br>
  </div>
</template>


<script>

export default {
  data(){
    return{
    options:[
      {text:'是', value:1},
      {text:'否', value:1},
    ]
  }
 },
 methods:  {
   check(){
     confirm('確定解鎖/上鎖資訊是否正確?');
   }
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
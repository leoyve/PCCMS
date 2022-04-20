<template>
  <div>
    <b-container>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>活化補助工作計畫基本資料表</strong></h2></b-form-row>
      <br>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">活化計畫編號</b-col>
          <b-col class="col-md-10 text-left">新增</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>活化計畫名稱</b-col>
          <b-col class="col-md-10 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>閒置設施</b-col>
          <b-col class="col-md-10">
            <b-form-select v-model="statusPicked" :options="status" :disabled="disabledFlag"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施活化類別</b-col>
          <b-col class="col-md-10">
            <b-form-select v-model="statusPicked" :options="status2" :disabled="disabledFlag"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>活化計畫起始日</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker/></b-col>
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
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="row justify-content-end" >
        <b-button size="sm" variant="success" @click="add">新增</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
      </b-row>
    </b-container>
    <br>
  </div>
</template>

<script>

export default {
  data(){
    return{
      status: [
        { value: '1', text: '世博台灣館'},
        { value: '2', text: '花蓮教師會館' },
        { value: '3', text: '新北活動中心' },
        { value: '4', text: 'XXX漁光市場' },

      ],
      status2: [
        { value: '1', text: '交通建設-停車場'},
        { value: '2', text: '交通建設-機場' },
        { value: '3', text: '體育場館-室內體育場館' },
        { value: '4', text: '社福設施-社福設施' },
      ],
  }
 },
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

</style>
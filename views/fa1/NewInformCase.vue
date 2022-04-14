<template>
  <div>
    <b-container>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>填寫通報表單資料</strong></h2></b-form-row>
      <br>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報案件編號:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報日期:</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報案件源起:</b-col>
          <b-col class="col-md-10">
            <b-form-select v-model="statusPicked" :options="status" :disabled="disabledFlag"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>公共設施名稱:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施機關:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>主管機關:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input/></b-col>
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
        { value: '1', text: '姚教授專書1'},
        { value: '2', text: '媒體報導' },
        { value: '3', text: '民眾通報' },
        { value: '4', text: '地方自行列管' },

      ],
  }
 },
 methods:  {
   
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
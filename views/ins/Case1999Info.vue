<template>
  <div>
      <br>
      <h3><strong>地方縣市1999通報案件資料表單畫面</strong></h3>
      <br>
      <b-container>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">案件編號</b-col>
          <b-col class="col-md-4 text-left">{{  caseNumber  }}</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報日期(YYYMMDD)</b-col>
          <b-col class="col-md-4"><b-form-input v-model="test" :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報工程名稱</b-col>
          <b-col class="col-md text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>主辦機關</b-col>
          <b-col class="col-md-4 text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報主題</b-col>
          <b-col class="col-md-4 text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>通報工程缺失地址</b-col>
          <b-col class="col-md-3 text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>結案日期(YYYMMDD)</b-col>
          <b-col class="col-md-3 text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">處理天數</b-col>
          <b-col class="col-md-3 text-left"><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <br>
        <b-row class="row justify-content-end">
          <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
          <b-button size="sm" variant="success" @click="update" v-show="updateFlag">編輯</b-button>&ensp; 
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
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      caseNumber: '11000000001'
  }
 },
  mounted(){  
    if(this.addFlag){
      this.caseNumber = '新增'
    }
  }
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-sm{
  padding: 1px;
}
</style>
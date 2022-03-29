<template>
  <div>
      <br>
      <br>
      <b-container class="border border-dark">
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
        <b-row>
          <b-col class="col-md"><b-button size="sm" variant="success" @click="queryHandler" v-show="isNew">新增</b-button></b-col>
          <b-col class="col-md"><b-button size="sm" variant="success" @click="queryHandler" v-show="isEdit">儲存</b-button></b-col>
          <b-col class="col-md"><b-button size="sm" variant="danger" @click="queryHandler" v-show="isDelete">刪除</b-button></b-col>
        </b-row>
      </b-container>
      <br>
  </div>
</template>


<script>
export default {
  data(){
    return{
      disabledFlag: this.$route.params.disabledFlag,
      isNew: this.$route.params.isNew,
      isEdit: this.$route.params.isEdit,
      isDelete: this.$route.params.isDelete,
      caseNumber: '11000000001'

  }
 },
 methods:  {

  },
  mounted(){  //ready已經不被使用了
      console.log(this.showFlag);

      if(this.isNew){
        this.caseNumber = '新增'
      }
     // this.disabledFlag =  this.$route.params.disabledFlag;
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
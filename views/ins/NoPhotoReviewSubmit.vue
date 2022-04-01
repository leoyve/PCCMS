<template>
  <div>
      <br>
      <h3><strong>申請免須上傳改善照片檔案</strong></h3>
      <br>
      <b-container>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">處理機關</b-col>
          <!-- 系統依照登入帳號自動代入:處理機關、姓名、電話、E-MAIL-->
          <b-col class="col-md text-left">行政院公共工程委員會</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">姓名</b-col>
          <b-col class="col-md text-left"><b-input></b-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">電話</b-col>
          <b-col class="col-md text-left"><b-input></b-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">EMAIL</b-col>
          <b-col class="col-md text-left"><b-input></b-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">免需上傳改善照片檔案之理由：<font color='red'>(必填，請填寫具體之合理事由，限500字內)</font></b-col>
          <b-col class="col-md text-left"><b-textarea></b-textarea></b-col>
        </b-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="queryHandler" >送出申請</b-button>&ensp; 
          <b-button size="sm" variant="outline-secondary" @click="goBack()" >取消</b-button>
        </b-form-row>
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
  },
  mounted(){  //ready已經不被使用了
    //  console.log(this.showFlag);
   //   this.showFlag =  this.$route.params.showFlag;
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
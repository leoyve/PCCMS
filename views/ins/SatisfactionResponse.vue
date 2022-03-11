<template>
  <div>
      <b-container>
        <h3><strong>民眾滿意度調查及機關回應明紀錄資料</strong></h3>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">填寫日期</b-col>
          <b-col class="col-md-8 text-left ">111/02/02</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">滿意度</b-col>
          <b-col class="col-md-8 text-left">非常滿意</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">滿意/不滿意原因</b-col>
          <b-col class="col-md-8 text-left">督工系統管理者代為新增！</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">機關回應日期</b-col>
          <b-col class="col-md-8 text-left">111/05/05</b-col>
        </b-row>
          <b-row class="border border-dark">
          <b-col class="col-md-2 ">機關回應說明</b-col>
          <b-col class="col-md-8 text-left"><b-textarea></b-textarea></b-col>
        </b-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="queryHandler" >送出填寫結果</b-button>&ensp;
          <b-button size="sm" variant="secondary" @click="queryHandler" >取消</b-button>
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
    queryHandler(){

    },
    reset(){

    }
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
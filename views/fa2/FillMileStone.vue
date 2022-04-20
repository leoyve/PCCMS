<template>
  <div>
    <br>
      <b-container fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light"><h3>活化工作里程碑執行情形表</h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">活化工作名稱</b-col>
          <b-col class="col-md-10 text-left ">高雄市旗津區中興市場二樓修繕工程</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">工作經費(千元)</b-col>
          <b-col class="col-md-4 text-left ">24762.5</b-col>
          <b-col class="col-md-2 text-dark">工作期程</b-col>
          <b-col class="col-md-4 text-left ">1071001~1090630</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">里程碑名稱</b-col>
          <b-col class="col-md-10 text-left ">招標公告日期</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">預定完成日期</b-col>
          <b-col class="col-md-4 text-left ">1071130</b-col>
          <b-col class="col-md-2 text-dark">實際完成日期</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">執行情形</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">逾期原因</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">解決對策</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">預估趲趕可完成日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker/></b-col>
        </b-row>
        <br>
        <b-row class="row justify-content-end" >
          <b-button size="sm" variant="success" @click="add">送出</b-button>&ensp; 
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
<template>
  <div>
    <br>
      <b-container fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light"><h3>活化計畫經費月累計執行情形表</h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">計畫編號</b-col>
          <b-col class="col-md-4 text-left ">1060000006</b-col>
          <b-col class="col-md-2 text-dark">計畫經費(千元)</b-col>
          <b-col class="col-md-4 text-left ">24762.5</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">計畫名稱</b-col>
          <b-col class="col-md-10 text-left ">高雄市旗津區中興市場二樓107年度活化計畫</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">累計預定執行數(千元)</b-col>
          <b-col class="col-md-4 text-left ">0</b-col>
          <b-col class="col-md-2 text-dark">累計實支數(千元)</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
        </b-row>
        
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">累計應付未付數(千元)</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
          <b-col class="col-md-2 text-dark">累計節餘數(千元)</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">本月預定執行經費說明</b-col>
          <b-col class="col-md-10 text-left">無</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">本月實際執行經費情形</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">預算執行率未達九成原因</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">預算執行率未達九成解決對策</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">活化標準本年度累計達成情形</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
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
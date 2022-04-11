<template>
  <div>
    <br>
      <b-container fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light"><h3>活化執行完畢後三年內使用情形執行情形表</h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">活化計畫名稱</b-col>
          <b-col class="col-md-10 text-left ">新竹縣關西鎮迎風館106年度活化計畫</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">活化標準</b-col>
          <b-col class="col-md-10 text-left ">全年展覽日數達50%以上。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">107年度使用情形</b-col>
          <b-col class="col-md-10 text-left "><b-textarea/></b-col>
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
<template>
  <div>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置設施通報案件--是否納入閒置系統列管資料</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">是否納入閒置系統列管</b-col>
          <b-col class="col-md-10 text-left ">Y</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">系統列管案件編號</b-col>
          <b-col class="col-md-10 text-left ">110XXXXXXX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">系統列管設施管理機關</b-col>
          <b-col class="col-md-10 text-left ">行政院</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">不納入列管原因</b-col>
          <b-col class="col-md-10 text-left">已達閒置設施活化基準者</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">資料上鎖日期</b-col>
          <b-col class="col-md-10 text-left">110/10/09</b-col>
        </b-row>
      </b-container>
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
<template>
  <div>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置設施通報案件--地方主管機關審查資料</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">地方主管機關審查者姓名</b-col>
          <b-col class="col-md-10 text-left ">王XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">地方主管機關審查者連絡電話</b-col>
          <b-col class="col-md-4 text-left ">0910XXXXXX</b-col>
          <b-col class="col-md-2 ">地方主管機關審查者電子郵件地址</b-col>
          <b-col class="col-md-4 text-left">test@XXX.com</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">地方主管機關建議是否納入閒置系統列管</b-col>
          <b-col class="col-md-10 text-left ">是</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">地方主管機關審查意見</b-col>
          <b-col class="col-md-10 text-left">地方主管機關審查意見</b-col>
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
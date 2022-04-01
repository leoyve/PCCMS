<template>
  <div>
      <b-container class="border border-dark" fluid>
        <b-row class="justify-content-center text-light bg-secondary"><h4><strong>通報案件資料</strong></h4></b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light bg-secondary"><strong>主管機關</strong></b-col>
          <b-col class="col-md-8 text-left">行政院公共工程委員會</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light bg-secondary"><strong>案件編號</strong></b-col>
          <b-col class="col-md-8 text-left">10900000947</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light bg-secondary"><strong>通報日期</strong></b-col>
          <b-col class="col-md-8 text-left">110/05/20</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light bg-secondary"><strong>通報主題</strong></b-col>
          <b-col class="col-md-8 text-left">施工進度緩慢</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light bg-secondary"><strong>通報地點</strong></b-col>
          <b-col class="col-md-8 text-left">[高雄市]高雄市新興區永寧里16鄰五福二路200號</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light bg-secondary"><strong>具體內容</strong></b-col>
          <b-col class="col-md-8 text-left">停工時間過長或超過告示牌原定完工期限而未完工</b-col>
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
    insertData(){
      alert('InsertData1111');
    },
    reset(){

    }
  },
  mounted(){  //ready已經不被使用了
      console.log(this.showFlag);
      this.showFlag =  this.$route.params.showFlag;
  }
}
</script>
<style>

</style>
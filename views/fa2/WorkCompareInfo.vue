<template>
  <div>
      <b-container fluid>
        <!--會比基本資料、活化工作、活化工作里程碑、各月預定支用經費-->
        <b-form-row class="row justify-content-center bg-secondary text-light"><h3>活化補助工作計畫要項修正資料比較表</h3></b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-sm-2 border border-dark ">項目</b-col>
          <b-col class="col-sm-5 border border-dark">前次核定</b-col>
          <b-col class="col-sm-5 border border-dark">本次修正</b-col>
        </b-form-row>
        <b-form-row class="row align-items-center border border-dark">
          <b-col class="col-sm-2 "><strong>計畫基本資料</strong></b-col>
          <b-col class="col-sm-5 border border-dark text-left">
            <b-container>
              <b-row>
                <b-col>設施名稱：桃園市新明公有零售市場(原中壢區第二公有市場)</b-col>
              </b-row>
              <b-row>
                <b-col>計畫名稱：桃園市中壢區新明公有零售市場6-7樓活化整修計畫</b-col>
              </b-row>
              <b-row>
                <b-col>計畫經費：42000</b-col>
              </b-row>
              <b-row>
                <b-col>計畫期程：1090316~1110901</b-col>
              </b-row>
            </b-container>
          </b-col>
          <b-col class="col-sm-5 text-left border border-dark">
            <b-container>
              <b-row>
                <b-col>設施名稱：桃園市新明公有零售市場(原中壢區第二公有市場)</b-col>
              </b-row>
              <b-row>
                <b-col>計畫名稱：桃園市中壢區新明公有零售市場6-7樓活化整修計畫1</b-col>
              </b-row>
              <b-row>
                <b-col>計畫經費：42000</b-col>
              </b-row>
              <b-row>
                <b-col>計畫期程：1090316~1110901</b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-form-row>
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
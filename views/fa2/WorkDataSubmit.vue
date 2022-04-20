<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>活化補助工作計畫提送管理</strong></h2></b-form-row>
      <br>
      <b-container fluid>
        <workSubmitInfo/>
        <br>
        <b-form-row class="justify-content-start">
          <font color="red"><strong>1.本次填寫資料送審，應先列印計畫檔案資料，並依序函報地方主管機關及中央目的事業主管機關核轉工程會。</strong></font>
        </b-form-row>
        <b-form-row class="justify-content-start">
          <font color="red"><strong>2.請填入以下函報之日期及文號，經工程會審核同意後，方能轉入本次提報計畫資料，並據以填報後續執行情形。</strong></font>
        </b-form-row>
        <workCompareInfo/>
        <br>
        <b-form-row class="bg-primary">
          <b-col class="col-md-12 text-light"><h3>活化補助工作計畫提送管理</h3></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>計畫主辦機關函報地方主管機關日期</b-col>
          <b-col class="col-md-10 text-left "><b-datepicker/></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>計畫主辦機關函報地方主管機關文號</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>計畫修正原因</b-col>
          <b-col class="col-md-10 text-left "><b-form-textarea/></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>地方主管機關核轉函報中央目的事業主管機關日期</b-col>
          <b-col class="col-md-10 text-left "><b-datepicker/></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>地方主管機關核轉函報中央目的事業主管機關文號</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-form-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="goBack()">提交</b-button>&nbsp;
          <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
        </b-form-row>
        <br>
        <b-form-row class="justify-content-start">
          <font color="red"><strong>請注意：</strong></font>
        </b-form-row>
        <b-form-row class="justify-content-start">
          <font color="red"><strong>1.應填報完整正確之計畫主辦及地方主管機關函報日期及文號，並列印計畫依序由地方主管機關、中央目的事業主管機關層轉函送工程會後，工程會才會進行計畫審核作業！</strong></font>
        </b-form-row>
        <b-form-row class="justify-content-start">
          <font color="red"><strong>2.當中央目的事業主管機關核轉函報工程會後，工程會即予以鎖定送審計畫資料，將不再允許修改！</strong></font>
        </b-form-row>
      </b-container>      
    <br>
  </div>
</template>


<script>
import workCompareInfo from './WorkCompareInfo.vue'
import workSubmitInfo from './WorkSubmitInfo.vue'

export default {
  data(){
    return{
    }
  },
  methods:  {
    check(){
      confirm('確定是否轉入?');
    }
  },
  components:{
    workSubmitInfo,workCompareInfo
  }
}
</script>
<style>
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}
</style>
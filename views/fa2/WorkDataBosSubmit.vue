<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>目的事業主管機關建議活化計畫補助審查</strong></h2></b-form-row>
      <br>
      <b-container fluid>
        <b-form-row class="justify-content-start">
          <font color="red"><h3><strong>本次填寫資料已有變更前次核定計畫之重要關鍵資料(比較如下表)！</strong></h3></font>
        </b-form-row>
        <workCompareInfo/>
        <br>
        
        <b-form-row class="bg-primary">
          <b-col class="col-md-12 text-light"><h3>目的事業主管機關建議活化計畫補助審查</h3></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>審查發函日期</b-col>
          <b-col class="col-md-10 text-left "><b-datepicker/></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>審查發函文號</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>審查結果</b-col>
          <b-col class="col-md-10 text-left ">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options1"
            ></b-form-radio-group>
          </b-col>
        </b-form-row>
        <b-form-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>審查意見</b-col>
          <b-col class="col-md-10 text-left "><b-form-textarea/></b-col>
        </b-form-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="goBack()">提交</b-button>&nbsp;
          <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
        </b-form-row>
        <br>
      </b-container>      
    <br>
  </div>
</template>


<script>
import workCompareInfo from './WorkCompareInfo.vue'



export default {
  data(){
    return{
    options: [
			{	text:	'核轉工程會',	value:	'A'},
			{	text:	'審查退件或不同意',	value:	'B'},
			{	text:	'回復未審查',	value:	'C'},
		],
  }
 },
 methods:  {
   check(){
     confirm('確定是否轉入?');
   }
  },
  components:{
    workCompareInfo
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
<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>訓練主題班別主管機關審核許可資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>代訓機構送審函報日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>代訓機構送審函報文號</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>主管機關審核許可日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>主管機關審核許可文號</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>審查狀態註記</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>是否有效</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options2"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>資料上鎖日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="update" >送出審核結果</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('TrainingClassDetail',)">取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data(){
    return{
      options: [
			{	text:	'同意備查',	value:	'A'},
			{	text:	'退回修正',	value:	'B'},
			{	text:	'回復未審查狀態',	value:	'B'},
		],
     options2: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
		],
  }
 },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
  },


}
</script>
<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
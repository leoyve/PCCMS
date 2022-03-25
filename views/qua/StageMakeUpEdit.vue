<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>學員結業情形資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">期別</b-col>
          <b-col class="col-md-10 text-left">FR11001</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">座號</b-col>
          <b-col class="col-md-10 text-left">FR1100101</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">姓名</b-col>
          <b-col class="col-md-10 text-left">黃昱舜</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>測驗成績</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
         <b-row class="border border-dark">
          <b-col class="col-md-2 ">第1次補考成績</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
         <b-row class="border border-dark">
          <b-col class="col-md-2 ">第1次補考成績</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>總成績</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>是否合格</b-col>
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
          <b-col class="col-md-2 "><font color="red">*</font>結業證書年月</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>結業證書字號</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>送審函報日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>送審函報文號</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="update" >送審</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data(){
    return{
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      options: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'退訓',	value:	'B'},
      {	text:	'延訓',	value:	'B'},
      {	text:	'其他已確認不予核發結業證書',	value:	'B'},
      {	text:	'撤銷結業證書',	value:	'B'},
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
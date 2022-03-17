<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>修改教師教授課程審查資料</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">姓名</b-col>
          <b-col class="col-md-10 text-left">王XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">聘用之代訓機構</b-col>
          <b-col class="col-md-10 text-left">XX科技大學</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">訓練主題班別</b-col>
          <b-col class="col-md-10 text-left">公共工程品質管理訓練班(土建) 【106年起適用】</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">課程名稱</b-col>
          <b-col class="col-md-10 text-left">單元二：第二章 統計分析方法與應用</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">送審日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">送審文號</b-col>
          <b-col class="col-md-10 text-left"><b-input></b-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">審查日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">審查文號</b-col>
          <b-col class="col-md-10 text-left"><b-input></b-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">審查狀態</b-col>
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
          <b-col class="col-md-2 ">是否有效</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group v-model="check1" :options="check" name="radio-validation" :disabled="disabledFlag">
            </b-form-radio-group>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="update">修改</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
      </b-row>
    </b-container>
    <br>
  </div>
</template>


<script>


export default {
  data(){
    return{
      check: [
        { value: '1', text: '是'},
        { value: '2', text: '否' },
      ],
    options: [
			{	text:	'同意備查',	value:	'A'},
			{	text:	'退回修正',	value:	'B'},
			{	text:	'回復未審查狀態',	value:	'B'},
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
  background-color: rgb(126, 216, 243);
  color: white;
  text-align: left;
}

</style>
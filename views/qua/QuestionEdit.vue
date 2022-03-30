<template>
  <div>
    <br>
    <br>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>測驗題目資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>課程名稱</b-col>
          <b-col class="col-md-8 text-left"><b-form-select :options="classType"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>難易程度</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options2"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>核心題目</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>題目</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-textarea></b-form-textarea>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>答案</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="ansOptions"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">命題者</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">命題日期</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-datepicker></b-form-datepicker>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>是否有效</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <!--預設為是-->
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>是否公開</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">修改</b-button>&ensp; 
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
      classType:[
        { value: '', text: '全部' },
        { value: '0', text: '政府採購全生命週期概論' },
        { value: '1', text: '單元一：第一章 公共工程施工品質管理制度理念與導入' },
        { value: '2', text: '單元二：第四章 工程進料檢驗與管制' },
        { value: '3', text: '單元二：第五章 施工管制與檢驗' },
      ],
      options2:[
			{	text:	'最難',	value:	'A'},
			{	text:	'困難',	value:	'B'},
			{	text:	'普通',	value:	'C'},
			{	text:	'容易',	value:	'C'},
			{	text:	'不限',	value:	'C'},
		],
    ansOptions:[
      {	text:	'A',	value:	'A'},
			{	text:	'B',	value:	'B'},
			{	text:	'C',	value:	'C'},
			{	text:	'D',	value:	'C'},
    ],
    options: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
		],
      check: [
        { value: '1', text: '是'},
        { value: '2', text: '否' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      
  }
 },
 methods:  {
   
  },

}
</script>
<style>
.col-md-4 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>教師人員基本資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>姓名</b-col>
          <b-col class="col-md-4 text-left"><b-form-input></b-form-input></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>身分證字號</b-col>
          <b-col class="col-md-4 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>目前服務單位名稱</b-col>
          <b-col class="col-md-4 text-left"><b-form-input></b-form-input></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>目前職稱</b-col>
          <b-col class="col-md-4 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>在職情形</b-col>
          <b-col class="col-md-4 text-left text-dark">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options2"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
          <b-col class="col-md-2 "><font color="red">*</font>可公開之連絡電話</b-col>
          <b-col class="col-md-4 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>主要專長類別1</b-col>
          <b-col class="col-md-4 text-left"><b-form-select :options="type"></b-form-select></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>主要專長內容1</b-col>
          <b-col class="col-md-4 text-left"><b-form-textarea></b-form-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主要專長類別2</b-col>
          <b-col class="col-md-4 text-left"><b-form-select :options="type"></b-form-select></b-col>
          <b-col class="col-md-2 ">主要專長內容2</b-col>
          <b-col class="col-md-4 text-left"><b-form-textarea></b-form-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">次要專長類別</b-col>
          <b-col class="col-md-4 text-left"><b-form-select :options="type"></b-form-select></b-col>
          <b-col class="col-md-2 ">次要專長內容</b-col>
          <b-col class="col-md-4 text-left"><b-form-textarea></b-form-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>代訓機構校核符合教師資格之類別</b-col>
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
          <b-col class="col-md-2 ">工程會提供師資名單</b-col>
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
      check: [
        { value: '1', text: '是'},
        { value: '2', text: '否' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
    options: [
			{	text:	'曾任或現任中央機關或其所屬(轄)機關、學校之薦任第九職等以上主管(含副主管)，且具專長(主要或次要)相關實務經驗十五年(含未滿第九職等及民間機構之年資)以上者',	value:	'A'},
			{	text:	'曾任或現任地方機關或其所屬(轄)機關、學校之薦任第八職等以上主管(含副主管)，且具專長(主要或次要)相關實務經驗十五年(含未滿第八職等及民間機構之年資)以上者',	value:	'B'},
			{	text:	'曾任或現任公營事業相當於薦任第八職等以上之主管(含副主管)，且具專長(主要或次要)相關實務經驗十五年(含未滿第八職等及民間機構之年資)以上者',	value:	'B'},
			{	text:	'具專業證照並執行業務之專門職業及技術人員，且具執行業務相關專長(主要或次要)實務經驗十年以上者',	value:	'C'},
      {	text:	'其他經本會核定之專家(例如由推薦機關附具其相關經歷報本會核定或由本會會商有關機關後核定)',	value:	'C'},
      {	text:	'曾任或現任公私立大專院校專任副教授以上，且具專長(主要或次要)相關教學經驗三年以上者',	value:	'C'},
      {	text:	'曾任或現任公私立大專院校專任助理教授以上，且具專長(主要或次要)相關教學經驗五年以上者',	value:	'C'},
      {	text:	'曾任或現任合法立案研究機構專職研究員以上，且具專長(主要或次要)相關研究經驗七年以上者',	value:	'C'},
      {	text:	'曾任或現任合法立案研究機構專職副研究員以上，且具專長(主要或次要)相關研究經驗十年以上者',	value:	'C'},
      {	text:	'具博士學位，且具所學專長(主要或次要)相關專職實務或研究經驗七年以上者',	value:	'C'},
      {	text:	'具碩士學位，且具所學專長(主要或次要)相關專職實務或研究經驗十年以上者',	value:	'C'},
		],
    options2: [
			{	text:	'退休',	value:	'A'},
			{	text:	'政府單位在職',	value:	'B'},
			{	text:	'民間單位在職',	value:	'B'},
			{	text:	'停用',	value:	'C'},
		],
    type:[
      {	text:	'土木',	value:	'A'},
			{	text:	'結構',	value:	'B'},
			{	text:	'水利',	value:	'B'},
			{	text:	'環工',	value:	'C'},
    ]
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
.col-md-4 {
  background-color: white;
  color: white;
  text-align: left;
}
</style>
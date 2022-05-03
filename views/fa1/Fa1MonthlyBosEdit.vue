<template>
  <div>
    <br />
    <b-form-row class="justify-content-center"><h2><strong>活化計畫各月活化辦理情形督辦登錄表單畫面</strong></h2></b-form-row>
    <br />
    <b-container>
      <b-row class="border border-dark">
        <b-col class="col-md-2">設施名稱:</b-col>
        <b-col class="col-md-10 text-left">雲林縣四湖鄉三條崙海水浴場</b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">年月:</b-col>
        <b-col class="col-md-10 text-left">111/04</b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">本月預定開始或完成里程碑:</b-col>
        <b-col class="col-md-10 text-left">續存建物委外經營(1100930預定開始)</b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">中央目的事業主管機關督辦情形:</b-col>
        <b-col class="col-md-10"><b-textarea /></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">中央目的事業主管機關確認進度:</b-col>
        <b-col class="col-md-10 text-left">
          <b-form-radio-group
            id="radio-group-2"
            v-model="itemPicked"
            :options="options"
            name="radio-options2"
          ></b-form-radio-group> <font color="red">(中央目的事業主管機關確認進度後逾60天，資料即予鎖定)</font>
        </b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">中央目的事業主管機關聯絡人姓名:</b-col>
        <b-col class="col-md-10"><b-input /></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">中央目的事業主管機關聯絡人電話:</b-col>
        <b-col class="col-md-10"><b-input /></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">中央目的事業主管機關聯絡人電子郵件地址:</b-col>
        <b-col class="col-md-10"><b-input /></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">執行資料上鎖日期:</b-col>
        <b-col class="col-md-10"><b-datepicker /></b-col>
      </b-row>
      <br />
      <b-row class="row justify-content-end">
        <b-button size="sm" variant="success" @click="update" >儲存</b-button>&ensp;
        <b-button size="sm" variant="outline-secondary" @click="goBack()" >取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      options:[
        {	text:	'正常',	value:	'A'},
        {	text:	'落後',	value:	'B'},
      ],
    };
  },
  methods: {},
};
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}
</style>
<template>
  <div>
    <b-container>
      <br />
      <b-form-row class="justify-content-center"><h2><strong>填寫通報表單資料</strong></h2></b-form-row>
      <br />
      <b-form-row class="justify-content-end ">
        <b-button size="xs" variant="info" @click="wkutHelp()">機關代碼</b-button>
      </b-form-row>
      <br>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2">通報案件編號:</b-col>
          <b-col class="col-md-10 text-left">11000000006</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>通報日期:</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>通報案件源起:</b-col>
          <b-col class="col-md-10">
            <b-form-select
              v-model="statusPicked"
              :options="status"
              :disabled="disabledFlag"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">原始資料來源:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">閒置公共設施地址:</b-col>
          <b-col class="col-md-3 text-left"><b-form-select :options="type"/></b-col>
          <b-col class="col-md-7 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">公共設施名稱:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">權責機關:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">中央目的事業主管機關(暫列):</b-col>
          <b-col class="col-md-10 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>通報主題:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>設施類別:</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="category"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>具體內容:</b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>通報者姓名:</b-col>
          <b-col class="col-md-4 text-left"><b-form-input /></b-col>
           <b-col class="col-md-2">通報者性別:</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options1"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">通報者聯絡地址:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>通報者連絡電話:</b-col>
          <b-col class="col-md-4 text-left"><b-form-input /></b-col>
          <b-col class="col-md-2">通報者傳真:</b-col>
          <b-col class="col-md-4 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>通報者電子郵件:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">資料上鎖日期:</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker /></b-col>
        </b-row>
        <br />
        <b-row class="row justify-content-end">
          <b-button size="sm" variant="success" @click="update">修改</b-button>&ensp;
          <b-button size="sm" variant="outline-secondary" @click="goBack()" >取消</b-button>
        </b-row>
      </b-container>
    </b-container>
    <br />
  </div>
</template>


<script>
export default {
  data() {
    return {
      status: [
        { value: "1", text: "姚教授專書1" },
        { value: "2", text: "媒體報導" },
        { value: "3", text: "民眾通報" },
        { value: "4", text: "地方自行列管" },
      ],
      type: [
        { value: "N", text: "基隆市" },
        { value: "Y", text: "新北市" },
        { value: "Y", text: "台北市" },
        { value: "Y", text: "高雄市" },
      ],
      category: [
        {
          value: "N",
          text: "交通建設(停車場、機場、觀光遊憩、道路、橋梁、漁港等)",
        },
        { value: "Y", text: "工商園區(工業、科技、生化、環保園區等)" },
        { value: "Y", text: "文教設施(訓練所、文物館、校舍等)" },
      ],
      options:[
        {	text:	'男',	value:	'A'},
        {	text:	'女',	value:	'B'},
      ]
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
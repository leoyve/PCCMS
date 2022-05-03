<template>
  <div>
    <b-container fluid>
      <br />
      <b-form-row class="justify-content-center"><h2><strong>閒置公共設施基本資料表單</strong></h2></b-form-row>
      <br />
      <b-form-row class="justify-content-end ">
        <b-button size="xs" variant="info" @click="wkutHelp()">機關代碼</b-button>
      </b-form-row>
      <br>
      <b-container fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">閒置設施編號</b-col>
          <b-col class="col-md-4 text-left ">105-1104-013</b-col>
          <b-col class="col-md-2 ">先前列管最早設施編號</b-col>
          <b-col class="col-md-4 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>閒置設施名稱</b-col>
          <b-col class="col-md-10 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>閒置設施類別</b-col>
          <b-col class="col-md-4 text-left "><b-form-select :options="category"></b-form-select></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>主辦人</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>聯絡電話</b-col>
          <b-col class="col-md-4 text-left "><b-input/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>電子信箱</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>設施管理機關代碼</b-col>
          <b-col class="col-md-10 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>目的事業主管機關</b-col>
          <b-col class="col-md-10 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>總建造費(千元)</b-col>
          <b-col class="col-md-4 text-left "><b-input/></b-col>
          <b-col class="col-md-3 text-left "><b-input placeholder="經費來源屬中央部會署"/></b-col>
          <b-col class="col-md-3 text-left "><b-input placeholder="屬地方政府"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施所在地區</b-col>
          <b-col class="col-md-4 text-left "><b-form-select :options="type"></b-form-select></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>設施詳細地點</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>經度X座標</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>緯度Y座標</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>開工日期</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>完工日期</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>提案時之機關首長姓名職稱</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>開工時之機關首長姓名職稱</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>閒置起始日期</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>是否興建完成就閒置</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-radio-group
              id="radio-group-2"
              v-model="itemPicked"
              :options="options"
              name="radio-options2"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>管理人力</b-col>
          <b-col class="col-md-4 text-left"><b-input placeholder="人"/></b-col>
          <b-col class="col-md-2 ">是否委外經營</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-radio-group
              id="radio-group-2"
              v-model="itemPicked"
              :options="options"
              name="radio-options2"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施土地面積(平方米)</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>設施樓地板面積(平方米)</b-col>
          <b-col class="col-md-4 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施概要</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施利用率(%)</b-col>
          <b-col class="col-md-10 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施使用情形</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>閒置情形</b-col>
          <b-col class="col-md-4 text-left ">
            <b-form-radio-group
              id="radio-group-2"
              v-model="itemPicked"
              :options="situation"
              name="radio-options2"
            ></b-form-radio-group>
          </b-col>
          <b-col class="col-md-2 "><font color="red">*</font>閒置原因類別</b-col>
          <b-col class="col-md-4 text-left "><b-form-select :options="reason"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>閒置原因簡述</b-col>
          <b-col class="col-md-10 text-left "><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>預定活化措施及效益</b-col>
          <b-col class="col-md-10 text-left "><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">需協助解決事項</b-col>
          <b-col class="col-md-10 text-left "><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">非閒置量化標準</b-col>
          <b-col class="col-md-10 text-left "><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>累計已投入活化經費</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
          <!--只要年月-->
          <b-col class="col-md-2 "><font color="red">*</font>預估完成活化期程</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>辦理本案有功有過人員獎懲紀錄</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">原始資料來源</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>列管緣起</b-col>
          <b-col class="col-md-10 text-left "><b-form-select :options="control"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">開始列管日期</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
          <b-col class="col-md-2 ">解除列管日期</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>是否解除列管</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-2"
              v-model="itemPicked"
              :options="isRemove"
              name="radio-options2"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>解除列管原因</b-col>
          <b-col class="col-md-10 text-left"><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">審計部編號</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>最終設施類別</b-col>
          <b-col class="col-md-10 text-left "><b-form-select :options="category"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">基本資料上鎖日期</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
          <b-col class="col-md-2 ">新增本年度作業里程碑上鎖日期</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">實際執行資料上鎖日期</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
          <b-col class="col-md-2 ">資料是否開放檢視</b-col>
          <b-col class="col-md-4 text-left ">
            <b-form-radio-group
              id="radio-group-2"
              v-model="itemPicked"
              :options="options"
              name="radio-options2"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <br />
        <b-row class="row justify-content-end">
          <b-button size="sm" variant="success" @click="update">編輯</b-button>&ensp;
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
      control: [
        { value: "1", text: "姚教授專書1" },
        { value: "11", text: "姚教授專書2" },
        { value: "12", text: "姚教授專書3" },
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
        {  value: "N",    text: "市場設施",  },
        { value: "Y", text: "停車場" },
        { value: "Y", text: "機場" },
        { value: "Y", text: "漁港" },
      ],
      options:[
        {	text:	'是',	value:	'A'},
        {	text:	'否',	value:	'B'},
      ],
      situation:[
        {	text:	'低度使用',	value:	'A'},
        {	text:	'完全閒置',	value:	'B'},
      ],
      reason:[
        { value: "N", text: "競選承諾" },
        { value: "Y", text: "缺乏經費" },
        { value: "Y", text: "環境變遷" },
        { value: "Y", text: "管理不善" },
        { value: "Y", text: "行政程序未完成" },
        { value: "Y", text: "其他" },
      ],
      isRemove:[
        { value: "N", text: "解除列管" },
        { value: "Y", text: "繼續列管" },
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
<template>
  <div>
    <br>
      <b-container fluid>
        <br>
        <b-row class="justify-content-start">
          <b-col class="text-left"><h5><font color="red">本項計畫活化經費為7600千元，目前已填報之活化工作經費為7600千元，可使用餘額為0千元。</font></h5></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light"><h3>閒置公共設施活化補助工作計畫活化工作基本資料</h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">活化計畫編號</b-col>
          <b-col class="col-md-10 text-left ">1060000004</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>活化計畫名稱</b-col>
          <b-col class="col-md-10 text-left ">桃園市龍潭區菱潭街興創基地暨龍元宮商圈多元展銷空間活化整修計畫</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">閒置設施</b-col>
          <b-col class="col-md-10 text-left ">閒置設施</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">閒置設施管理機關</b-col>
          <b-col class="col-md-10 text-left">行政院</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">工作編號</b-col>
          <b-col class="col-md-4 text-left ">108000000300001</b-col>
          <b-col class="col-md-2 "><font color="red">*</font>工作經費(千元)</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>工作名稱</b-col>
          <b-col class="col-md-10 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>工作類別</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
            <font color="red">(變更工作類別，將清除該工作已設定之里程碑，並重行設定該工作之預設里程碑)
              (選擇工程採購，將預設招標公告、決標、開工、完工、驗收等5項日期里程碑； 選擇勞務採購、財物採購、資訊採購，將預設招標公告、決標、開始履約、完成履約、驗收等5項日期里程碑； 
              選擇小額採購、獎補捐助，將預設核定、結案等2項日期里程碑 )</font>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>工作起始日</b-col>
          <b-col class="col-md-4 text-left "><b-datepicker/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>工作結束日</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>工作內容</b-col>
          <b-col class="col-md-10 text-left "><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">工作效益</b-col>
          <b-col class="col-md-10 text-left "><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">經費編列說明</b-col>
          <b-col class="col-md-10 text-left "><b-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">核定之計畫基本資料是否一併修改工程會專用<font color="red">工程會專用</font></b-col>
          <b-col class="col-md-10 text-left"><b-checkbox>確認一併修改核定之計畫活化工作基本資料</b-checkbox></b-col>
        </b-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success"  @click="modify()" >修改</b-button>&nbsp;&nbsp;
          <b-button size="sm" variant="outline-secondary"  @click="goBack()" >取消</b-button>&nbsp;&nbsp;
        </b-form-row>
      </b-container>
      <br>
  </div>
</template>


<script>

export default {
  props:["detailFlag"],
  data(){
    return{
     options:[
      {	text:	'工程採購',	value:	'A'},
			{	text:	'勞務採購',	value:	'B'},
			{	text:	'財物採購',	value:	'C'},
			{	text:	'資訊採購 ',	value:	'D'},
      {	text:	'小額採購 ',	value:	'E'},
      {	text:	'獎補捐助 ',	value:	'F'},
      {	text:	'維運人力 ',	value:	'G'},
      {	text:	'經常維運工作 ',	value:	'H'},
      {	text:	'其他 ',	value:	'I'},

     ]
  }
 },
}
</script>
<style>
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}

</style>
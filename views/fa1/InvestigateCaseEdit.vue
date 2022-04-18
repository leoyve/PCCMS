<template>
  <div>
      <br>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置設施通報案件--查處資料</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施查處者姓名</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施查處者連絡電話</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施查處者電子郵件地址</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施正式名稱(查處後)</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施管理機關(查處後)</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施管理機關連絡人</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施管理機關連絡電話</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施目的事業主管機關</b-col>
          <b-col class="col-md-10 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施地址</b-col>
          <b-col class="col-md-2 text-left "><b-form-select :options="type"/></b-col>
          <b-col class="col-md-6 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施地點X座標(經度)</b-col>
          <b-col class="col-md-4 text-left "><b-input/></b-col>
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施地點Y座標(緯度)</b-col>
          <b-col class="col-md-4 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>建造工程經費(千元)</b-col>
          <b-col class="col-md-10 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>建造工程經費_中央(千元)</b-col>
          <b-col class="col-md-4 text-left "><b-input/></b-col>
          <b-col class="col-md-2 text-dark"><font color="red">*</font>建造工程經費_地方(千元)</b-col>
          <b-col class="col-md-4 text-left "><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>完工日期</b-col>
          <b-col class="col-md-10 text-left "><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>設施摘要說明</b-col>
          <b-col class="col-md-10 text-left "><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>查處使用情形情形</b-col>
          <b-col class="col-md-10 text-left "><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>建議是否納入閒置系統列管</b-col>
          <b-col class="col-md-10 text-left ">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options1"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">建議不納入列管原因</b-col>
          <b-col class="col-md-10 text-left "><b-form-select :options="reason"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">建議不納入列管說明</b-col>
          <b-col class="col-md-10 text-left "><b-form-textarea/></b-col>
        </b-row>
        <br />
        <b-row class="row justify-content-end">
          <b-button size="sm" variant="success" @click="update">修改</b-button>&ensp;
          <b-button size="sm" variant="outline-secondary" @click="goBack()" >取消</b-button>
        </b-row>
      </b-container>
  </div>
</template>


<script>

export default {
  data(){
    return{
     type: [
        { value: "N", text: "基隆市" },
        { value: "Y", text: "新北市" },
        { value: "Y", text: "台北市" },
        { value: "Y", text: "高雄市" },
      ],
      options:[
        { value: "N", text: "不納入閒置系統列管" },
        { value: "Y", text: "納入閒置系統列管" },
      ],
      reason: [
        { value: "N", text: "已達閒置設施活化基準者" },
        { value: "Y", text: "已變更為非公有財產者" },
        { value: "Y", text: "已依財產報廢程序辦理報廢者" },
      ],
  }
 },
 methods:  {
   
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
<template>
  <div>
      <br>
      <b-form-row class="justify-content-end ">
        <b-button size="xs" variant="info" @click="wkutHelp()">機關代碼</b-button>
      </b-form-row>
      <br>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置設施通報案件--是否系統列管資料</b-col>
        </b-row>

        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>是否納入閒置系統列管</b-col>
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
          <b-col class="col-md-2 text-dark">閒置系統列管案件編號</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">閒置系統設施管理機關代碼</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">不納入列管原因</b-col>
          <b-col class="col-md-10 text-left "><b-form-select :options="reason"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>資料上鎖日期</b-col>
          <b-col class="col-md-10 text-left "><b-datepicker/></b-col>
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
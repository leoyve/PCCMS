<template>
  <div>
    <b-container>
      <br />
      <b-form-row class="justify-content-center"><h2><strong>閒置設施通報案件--分案資料</strong></h2></b-form-row>
      <br />
      <b-form-row class="justify-content-end ">
        <b-button size="xs" variant="info" @click="wkutHelp()">機關代碼</b-button>
      </b-form-row>
      <br>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>分案原因:</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options1"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">分案意見說明:</b-col>
          <b-col class="col-md-10 text-left"><b-textarea /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>設施查處機關代碼:</b-col>
          <b-col class="col-md-10"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2">地方主管機關代碼:</b-col>
          <b-col class="col-md-10 text-left"><b-form-input /></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>中央目的事業主管機關代碼:</b-col>
          <b-col class="col-md-10"><b-form-input/></b-col>
        </b-row>
        <br />
        <b-row class="row justify-content-end">
          <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
          <b-button size="sm" variant="success" @click="update" v-show="updateFlag">儲存</b-button>&ensp; 
          <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
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
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      options:[
        {	text:	'通報案件首次分案',	value:	'A'},
        {	text:	'再次分案，請進一步釐清設施相關資料及更新查處情形',	value:	'B'},
        {	text:	'變更查處機關',	value:	'C'},
        {	text:	'其他',	value:	'D'},
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
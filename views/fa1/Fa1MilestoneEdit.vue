<template>
  <div>
    <br />
    <b-form-row class="justify-content-center"><h2><strong>活化計畫各分項作業里程碑登錄表單畫面</strong></h2></b-form-row>
    <br />
    <b-container>
      <b-row class="border border-dark">
        <b-col class="col-md-2">設施名稱:</b-col>
        <b-col class="col-md-10 text-left">雲林縣四湖鄉三條崙海水浴場</b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2"><font color="red">*</font>活化計畫各分項作業里程碑:</b-col>
        <b-col class="col-md-10 text-left"><b-form-input/></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2"><font color="red">*</font> 開始日期:</b-col>
        <b-col class="col-md-10 text-left"><b-datepicker /></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2"><font color="red">*</font> 預定完成期限:</b-col>
        <b-col class="col-md-10"><b-datepicker /></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">實際完成日期:</b-col>
        <b-col class="col-md-10 text-left"><b-datepicker /></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">里程碑預定完成資料鎖定日期:</b-col>
        <b-col class="col-md-10"><b-datepicker /></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">里程碑實際完成資料鎖定日期:</b-col>
        <b-col class="col-md-10"><b-datepicker /></b-col>
      </b-row>
      <br />
      <b-row class="row justify-content-end">
        <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button >&ensp;
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">修改</b-button>&ensp;
        <b-button size="sm" variant="outline-secondary" @click="goBack()" >取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      addFlag:
        this.$route.params.addFlag == null ? false : this.$route.params.addFlag,
      updateFlag:
        this.$route.params.updateFlag == null ? false : this.$route.params.updateFlag,

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
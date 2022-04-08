<template>
  <div>
    <br>
      <b-container fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light"><h3>活化工作里程碑基本資料填報表單</h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">活化計畫編號</b-col>
          <b-col class="col-md-10 text-left ">1060000004</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>活化工作名稱</b-col>
          <b-col class="col-md-10 text-left "><b-form-select :options="type" v-model="se" :disabled="this.$route.params.updateFlag"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>里程碑</b-col>
          <b-col class="col-md-10 text-left "><b-form-input :value="this.$route.params.milestone" :disabled="this.$route.params.defaultFlag"/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>預定完成日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker/></b-col>
        </b-row>
        <b-row class="border border-dark" v-if="this.$route.params.addFlag">
          <b-col class="col-md-2 ">核定之計畫基本資料是否一併修改工程會專用<font color="red">工程會專用</font></b-col>
          <b-col class="col-md-10 text-left"><b-checkbox>確認一併修改核定之計畫活化工作基本資料</b-checkbox></b-col>
        </b-row>
        <br>
        <b-row class="row justify-content-end" >
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
  props:["detailFlag"],
  data(){
    return{
    addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
    updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
     type: [
        { value: '', text: '' , disabled: true},
        { value: '0', text: '五權砲陣地舊營舍活化計畫' },
        { value: '1', text: 'XXX計畫' },

      ],
      se:this.$route.params.addFlag == true ? '':1
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
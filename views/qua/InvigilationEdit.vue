<template>
  <div>
    <br>
    <br>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>監考人員資料表單</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">人員A</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">人員B</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">人員C</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">訓練班別種類</b-col>
          <b-col class="col-md-8 text-left"><b-form-select :options="check"></b-form-select></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">儲存</b-button>&ensp; 
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
        { value: '1', text: '品管'},
        { value: '2', text: '回訓' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      
  }
 },
 methods:  {
   
  },

}
</script>
<style>
.col-md-4 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>代訓機構基本資料表</strong></h2></b-form-row>
      <br>
      <h5 class="text-left"><font color="red">(代訓機構代碼為最重要之鍵值，僅能於新增代訓機構當天內變動；請勿任意變動，並特別注意是否填報正確？)</font></h5>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>代訓機構代碼</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>代訓機構名稱</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">分支訓練單位名稱</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>代訓機構地址</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>代訓機構電話</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">代訓機構傳真</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">電子郵件地址</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">網址</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>執行長</b-col>
          <b-col class="col-md-8 text-left"><b-textarea></b-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>承辦人</b-col>
          <b-col class="col-md-8 text-left"><b-textarea></b-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>駐班人員</b-col>
          <b-col class="col-md-8 text-left"><b-textarea></b-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">班導師</b-col>
          <b-col class="col-md-8 text-left"><b-textarea></b-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">是否有效</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-radio-group v-model="check1" :options="check" name="radio-validation" :disabled="disabledFlag">
            </b-form-radio-group></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">編輯</b-button>&ensp; 
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
        { value: '1', text: '是'},
        { value: '2', text: '否' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      
  }
 },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
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
<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>代訓機構開班期別基本資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>代訓機構</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="type"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>訓練主題班別</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="classType"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>開班期別</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>

        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>訓練地址</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>電話</b-col>
          <b-col class="col-md-4 text-left"><b-form-input></b-form-input></b-col>
          <b-col class="col-md-2 ">傳真</b-col>
          <b-col class="col-md-4 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">網址</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>執行長</b-col>
          <b-col class="col-md-4 text-left"><b-input></b-input></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>承辦人</b-col>
          <b-col class="col-md-4 text-left"><b-input></b-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>駐班人員</b-col>
          <b-col class="col-md-4 text-left"><b-input></b-input></b-col>
          <b-col class="col-md-2 ">班導師</b-col>
          <b-col class="col-md-4 text-left"><b-input></b-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>實際開班日期</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker></b-datepicker></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>實際結訓日期</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>開課時段</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">開課種類</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group v-model="check1" :options="check" name="radio-validation" :disabled="disabledFlag">
            </b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>預定訓練人數</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
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
  </div>
</template>


<script>

export default {
  data(){
    return{
      check: [
        { value: '1', text: '實體'},
        { value: '2', text: '視訊' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
    options:[
      { value: '0', text: '夜間' },
      { value: '0', text: '假日' },
      { value: '0', text: '專案' },
      { value: '0', text: '日間' },
    ],
    type: [
			{ value: '0', text: '中原大學' },
			{ value: '1', text: '淡江大學' },
			{ value: '2', text: '中央大學' },
			{ value: '3', text: '成功大學' },
		],
    classType: [
			{ value: '0', text: '[回訓] 公共工程品質管理教育訓練' },
			{ value: '1', text: '[回訓] 土木工程品管案例研討' },
			{ value: '2', text: '[回訓] 基礎開挖與品管' },
		],
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
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
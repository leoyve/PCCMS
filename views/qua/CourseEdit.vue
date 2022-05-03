<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>訓練主題班別課程表單</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>單元名稱</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>課程名稱</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>課程種類</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="type"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>課程摘要</b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea></b-form-textarea></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>課程時數</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主管機關是否指派師資</b-col>
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
          <b-col class="col-md-2 ">是否有效</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">儲存</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('TrainingClassDetail',)">取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>


export default {
  data(){
    return{

      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
   
    type: [
      { value: '5', text: '開訓' },
			{ value: '0', text: '課程' },
			{ value: '1', text: '測驗' },
			{ value: '2', text: '座談' },
		],
    options: [
			{ value: '1', text: '是' },
			{ value: '2', text: '否' },
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
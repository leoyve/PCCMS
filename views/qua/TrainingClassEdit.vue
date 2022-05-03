<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>訓練主題班別基本資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>代訓機構</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="type"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>訓練主題班別名稱</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>班別種類</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options2"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
          <b-col class="col-md-2 "><font color="red">*</font>課程總時數</b-col>
          <b-col class="col-md-4 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
         <b-row class="border border-dark">
          <b-col class="col-md-2 ">是否有效</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="vaild"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
          <b-col class="col-md-2 "><font color="red">*</font>停止適用日期</b-col>
          <b-col class="col-md-4 text-left"><b-datepicker></b-datepicker></b-col>
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
      type: [
			{ value: '', text: '全部' },
			{ value: '0', text: '中原大學' },
			{ value: '1', text: '淡江大學' },
			{ value: '2', text: '中央大學' },
			{ value: '3', text: '成功大學' },
		],
    options2:[
      { value: '', text: '品管' },
			{ value: '0', text: '回訓' },
    ],
    vaild:[
      { value: '', text: '是' },
			{ value: '0', text: '否' },
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
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>師資授課資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">訓練主題班別</b-col>
          <b-col class="col-md-10 text-left">機電設備工程品質管理實務(一)(二)【106年起適用】</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>教師姓名</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="teacherList"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>授課課程</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="courseList"></b-form-select></b-col>
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
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>送審函報日期</b-col>
          <b-col class="col-md-10 text-left"><b-form-datepicker></b-form-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>送審函報文號</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">修改</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('CourseTeacherQuery',)">取消</b-button>
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
      teacherList:[
        {text:'王XX', value:1},
        {text:'林XX', value:2},
        {text:'陳XX', value:3},
        {text:'黃XX', value:4},
      ],
      courseList:[
        {text:'公路品管工程', value:1},
        {text:'第一章 鋼筋、模板', value:2},
        {text:'第二章 品質分析方法與應用', value:3},
        {text:'第五章 施工管理與檢驗', value:4},
      ],
      options:[
        {text:'是', value:1},
        {text:'否', value:2},
      ]
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
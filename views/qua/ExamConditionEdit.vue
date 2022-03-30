<template>
  <div>
    <br>
    <br>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>測驗命題條件基本資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">命題版本編號</b-col>
          <b-col class="col-md-10 text-left">{{this.$route.params.version}}</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>訓練主題班別</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-select :options="type"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>訓練主題班別種類</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="classType"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2"><font color="red">*</font>卷別版本名稱</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>
        <!--依照選的課程來顯示題庫數，使用placeHolder-->
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>測驗總題數(A)=(B)+(C)+(D)+(E)</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-input ></b-form-input>
          </b-col>
          <b-col class="col-md-2 "><font color="red">*</font>核心題數</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-input ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>最難題數(B)</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-input :placeholder="qq"></b-form-input>
          </b-col>
          <b-col class="col-md-2 "><font color="red">*</font>困難題數(C)</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>普通題數(D)</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-input></b-form-input>
          </b-col>
          <b-col class="col-md-2 "><font color="red">*</font>容易題數(E)</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>第1次補考更換題數</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-input></b-form-input>
          </b-col>
          <b-col class="col-md-2 "><font color="red">*</font>第2次補考更換題數</b-col>
          <b-col class="col-md-4 text-left">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>新試卷從前試卷抽換部分題目產生之抽換題數</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-input></b-form-input>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>是否有效</b-col>
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
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">修改</b-button>&ensp; 
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
      qq:'(題庫數：379)',
      classType:[
        { value: '', text: '品管' },
        { value: '0', text: '回訓' },
      ],
      type: [
			{ value: '', text: '全部' },
			{ value: '0', text: '公共工程品質管理訓練班(機電) 【106年起適用】' },
			{ value: '1', text: '公共工程品質管理訓練班(土建)' },
			{ value: '2', text: '公共工程品質管理訓練班(土建) 【109年4月起適用】' },
			{ value: '3', text: '公共工程品質管理訓練班(機電)' },
		],
    options: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
		],
      check: [
        { value: '1', text: '是'},
        { value: '2', text: '否' },
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
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
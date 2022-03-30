<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>代訓機構評鑑作業</strong></h2></b-form-row>
      <br>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>代訓機構</b-col>
          <b-col class="col-md-8 text-left"><b-form-select :options="type" :disabled = updateFlag></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>評鑑年度</b-col>
          <b-col class="col-md-8 text-left"><b-form-input :disabled = updateFlag></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">評鑑成績</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>評鑑等級</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 "><font color="red">*</font>發文日期</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">發文字號</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark text-left bg-info">
          <b-col class="col-md-12"><strong>註：第一級:85分以上。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          第二級:80分以上,未滿85分。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          第三級:75分以上,未滿80分。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          第四級:未滿75分。</strong></b-col>
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
      check: [
        { value: '1', text: '是'},
        { value: '2', text: '否' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      type: [
			{ value: '0', text: '中原大學' },
			{ value: '1', text: '淡江大學' },
			{ value: '2', text: '中央大學' },
			{ value: '3', text: '成功大學' },
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
.col-md-4 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
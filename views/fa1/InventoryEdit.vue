<template>
  <div>
    <br>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>清查公共設施基本資料表單</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施編號	</b-col>
          <b-col class="col-md-10 text-left">{{number}}</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施名稱</b-col>
          <b-col class="col-md-10 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施類別</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="site" ></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施管理機關</b-col>
          <b-col class="col-md-10 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>主管機關</b-col>
          <b-col class="col-md-10 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>目的事業主管機關</b-col>
          <b-col class="col-md-10 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>設施規模概述</b-col>
          <b-col class="col-md-10 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>是否正常使用</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group v-model="check1" :options="check" name="radio-validation" />
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">設施使用情形概述</b-col>
          <b-col class="col-md-10 text-left"><b-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">備註</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">是否曾被列管</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-radio-group
              id="radio-group-2"
              v-model="itemPicked"
              :options="check"
              name="radio-options2"
            ></b-form-radio-group>
          </b-col>
			</b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="row justify-content-end" >
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
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      site: [
        { value: '1', text: '辦公廳舍'},
        { value: '2', text: '文教設施' },
        { value: '3', text: '社福設施' },
        { value: '4', text: '交通建設' },
        { value: '5', text: '其他' },
      ],
      check: [
        { value: 'Y', text: '是'},
        { value: 'N', text: '否' },
      ],
      number:''
    
  }
 },
 methods:  {
   
  },
  mounted(){
    if(this.addFlag){
      this.number = '新增'
    }else {
      this.number = '1010000012198'
    }
  }

}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

</style>
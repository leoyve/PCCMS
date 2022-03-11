<template>
  <div>
    <b-container>
      <b-container>
        <b-form-row class="justify-content-start">
          <b-button size="md" variant="success" @click="goTo('EditInsCase')">修改通報案件</b-button>&ensp; &ensp; 
          <b-button size="md" variant="success" @click="goTo('CaseRecord')">登錄處理情況</b-button>&ensp; &ensp; 
          <b-button size="md" variant="success" @click="goTo('UploadCasePhoto')">上傳處理照片</b-button>&ensp; &ensp; 
          <b-button size="md" variant="success" @click="goTo('CloseCase')">申請結案作業</b-button>&ensp; &ensp; 
          <!--新增按鈕民眾滿意度調查記錄(全都看的到)，讓機關可以進去回應，申請結案的時候幫他檢查這邊有沒有回覆-->
          <b-button size="md" variant="success" @click="goTo('SatisfactionList')">民眾滿意度調查記錄</b-button>&ensp; &ensp; 
          <!--展延結案日期:主管機關、工程會-->
          <!--修改通報案件、刪除通報案件、補新增滿意度:工程會-->
          <b-button size="md" variant="success" @click="goTo('ExtendCloseDate')">展延結案日期</b-button>&ensp; &ensp; 
          <b-button size="md" variant="success" @click="goTo('AddSatisfaction')">補新增滿意度</b-button>&ensp; &ensp; 
          <b-button size="md" variant="danger" @click="deleteCase">刪除通報案件</b-button>&ensp; &ensp; 
        </b-form-row>
      </b-container>
      <br>
      <h2 class="text-left"><font color="red">通報案件基本資料</font></h2>
      <caseVue :test="'不可編輯'" :disabledFlag="true"/>
      <br>
    </b-container>
    <br>
    <h2 class="text-center"><font color="red">通報缺失位置地圖</font></h2>
    <br>
    <caseMapInfoVue/>
    <br>
    <casePhotoInfoVue/>
  </div>
</template>


<script>
import caseVue from './CaseInfo.vue'
import caseMapInfoVue from './CaseMapInfo.vue'
import casePhotoInfoVue from './CasePhotoInfo.vue'

export default {
  data(){
    return{
      wkut: [
        { value: '1', text: '內政部-陳XX'},
        { value: '1', text: '法務部-林XX'},
        { value: '1', text: '行政院-陳XX'},
        { value: '1', text: '台北市政府-吳XX'},
        { value: '1', text: '國防部-劉XX'},
        { value: '1', text: '財政部-張XX'},
      ],
      category: [
        { value: '1', text: '機電工程'},
        { value: '2', text: '水電工程' },
        { value: '3', text: '空調工程' },
        { value: '4', text: '防漏工程' },
        { value: '6', text: '電梯工程' },
        { value: '7', text: '隧道工程' },
      ],
      check: [
        { value: 'Y', text: '是'},
        { value: 'N', text: '否' },
      ],
  }
 },
 methods:  {
    queryCmdCase(){
      this.$router.push({name:'CmdCaseQuery'})
    },
    goEdit(){
      this.$router.push({name:'EditInsCase'})
    },
    reset(){

    },
    goTo(path){
      this.$router.push({name:path})
    },
    deleteCase(){
      confirm('確定刪除?');
    }
  },
  components: {
    caseVue,
    caseMapInfoVue,
    casePhotoInfoVue
  },
}
</script>
<style>

</style>
<template>
  <div>
    <br>
    <b-container fluid>
      <b-container fluid>
        <b-form-row class="justify-content-end">
          <b-button size="md" variant="outline-secondary" @click="gotoParam('CaseInfoQuery')">回上一頁</b-button>&ensp;
        </b-form-row>
        <b-form-row class="justify-content-start">
          <b-button size="md" variant="success" @click="gotoParam('DuconCaseEdit', {updateFlag:true})">修改通報案件</b-button>&ensp; 
          <b-button size="md" variant="success" @click="gotoParam('CaseRecord')">登錄處理情況</b-button>&ensp;
          <b-button size="md" variant="success" @click="gotoParam('UploadCasePhoto')">上傳處理照片</b-button>&ensp; 
          <b-button size="md" variant="success" @click="gotoParam('CloseCase')">申請結案作業</b-button>&ensp; 
          <!--展延結案日期:主管機關、工程會-->
          <!--修改通報案件、刪除通報案件、補新增滿意度:工程會-->
          <b-button size="md" variant="success" @click="gotoParam('ExtendCloseDate')">展延結案日期</b-button>&ensp; 
          <b-button size="md" variant="success" @click="gotoParam('AddSatisfaction',{defaultText:'督工系統管理者代為新增！'})">補新增滿意度</b-button>&ensp;
          <b-button size="md" variant="danger" @click="deleteCheck()">刪除通報案件</b-button>&ensp;
        </b-form-row>
        <br>
      </b-container>
      <br>
      <h2 class="text-left"><font color="red">通報案件基本資料</font></h2>
      <caseVue :test="'不可編輯'" :disabledFlag="true"/>
      <br>
    </b-container>
    <br>
    <h2 class="text-left"><font color="red">通報缺失位置地圖</font></h2>
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
  components: {
    caseVue,
    caseMapInfoVue,
    casePhotoInfoVue
  },
}
</script>
<style>

</style>
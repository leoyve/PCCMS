<template>
  <div>
    <br>
    <b-container>
      <b-container>
        <b-row>
          <b-col class="col-md-2 "><font color="red">*</font>處理機關</b-col>
          <b-col ><b-form-select v-model="statusPicked" :options="wkut"></b-form-select></b-col>
        </b-row>
        <b-row>
          <b-col class="col-md-2 ">標案管理系統工程名稱</b-col>
          <b-col ><b-form-input :disabled="disabledFlag"></b-form-input></b-col>
        </b-row>
        <b-row>
          <b-col class="col-md-2 ">工程類別</b-col>
          <b-col ><b-form-select v-model="statusPicked" :options="category" :disabled="disabledFlag"></b-form-select></b-col>
        </b-row>
      </b-container>
      <b-container>
        <br>
        <b-row class="col-sm row justify-content-start">
          <b-button size="sm" variant="info" @click="queryCmdCase()" >查詢所屬標案</b-button>&ensp; 
          <b-button size="sm" variant="info" @click="queryNearby()" >檢視鄰近通報地點標案位置圖</b-button>&ensp; 
        </b-row>
        <b-row class="col-sm row justify-content-center">
          <b-button size="sm" variant="success" @click="queryHandler" >進行分文</b-button>&ensp; 
          <b-button size="sm" variant="outline-secondary" @click="gotoParam('CaseAssignQuery')">取消</b-button>
        </b-row>
      </b-container>
      <br>
      <h6 class="text-left"><font color="red">TIP</font></h6>
      <h6 class="text-left"><font color="red">完成分文後，系統將自動寄出分文通知電子郵件；如本案收文處理窗口迄未收到相關分文通知電子郵件， 煩請提醒該窗口先檢查信箱是否可能當成垃圾郵件處理（以MS Outlook為例，如於垃圾郵件發現分文通知電子郵件， 可於分文通知電子郵件按滑鼠右鍵，點選「垃圾郵件」，再點選「將寄件者加到安全的電子郵件寄件者清單」，以避免持續當成垃圾郵件處理）。
      </font></h6>
      <br>
        <h2 class="text-left"><font color="red">通報案件基本資料</font></h2>
        <caseInfoVue :test="'不可編輯'" :disabledFlag="true"/>
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
import caseInfoVue from './CaseInfo.vue'
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
  }
 },
 methods:  {
    queryCmdCase(){
      //新開視窗
      let routeUrl = this.$router.resolve({name:'CmdCaseQuery'})
      window.open(routeUrl.href, '_blank'); 

    },
    queryNearby(){
      let routeUrl = this.$router.resolve({name:'NearbyCase'})
      window.open(routeUrl.href, '_blank'); 
    },
    reset(){

    }
  },
  components: {
    caseInfoVue,
    caseMapInfoVue,
    casePhotoInfoVue,
  },
}


</script>
<style>

</style>
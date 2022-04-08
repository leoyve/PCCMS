<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>活化補助工作計畫管理畫面</strong></h2></b-form-row>
      <br>
      <b-container fluid>
		<b-form-row class="justify-content-end">
			<b-button size="sm" variant="outline-secondary" @click="gotoParam('ActivationsQuery')">回上一頁</b-button>
        </b-form-row>
        <b-form-row class="justify-content-start">
			<b-button size="sm" variant="info"  @click="deleteCheck()" >檢視活化計畫資料表</b-button>&nbsp;&nbsp;
			<b-button size="sm" variant="primary"  @click="deleteCheck()" >產生活化計畫Word檔案</b-button>&nbsp;&nbsp;
			<b-button size="sm" variant="primary"  @click="deleteCheck()" >組合產生要點Word檔案(發函送審用)</b-button>&nbsp;&nbsp;
			<b-button size="sm" variant="success"  @click="deleteCheck()" >提送本次填寫之計畫資料</b-button>&nbsp;&nbsp;
			<b-button size="sm" variant="warning"  @click="deleteCheck()" >基本資料解鎖</b-button>&nbsp;&nbsp;
        </b-form-row>
      <br>
      </b-container>
      <h2 class="text-left"><font color="blue">壹、活化計畫基本資料</font></h2>
		<b-form-row class="justify-content-end">
			<b-button size="sm" variant="success"  @click="gotoParam('ActivationsEdit')" >修改活化計畫</b-button>&nbsp;&nbsp;
			<b-button size="sm" variant="danger"  @click="deleteCheck()" >刪除活化計畫</b-button>&nbsp;&nbsp;
		</b-form-row>
		<br>
      <activationsInfo :detailFlag="true"/>
      <br>
      <h2 class="text-left"><font color="blue">貳、活化工作基本資料</font></h2>
		<b-form-row class="justify-content-end">
			<b-button size="sm" variant="success"  @click="gotoParam('NewWorkData')" >新增活化工作</b-button>&nbsp;&nbsp;
		</b-form-row>
		<br>
      <workDataInfo :modifyFlag="true"/>
      <br>
      <h2 class="text-left"><font color="blue">參、活化工作里程碑</font></h2>
		<b-form-row class="justify-content-end">
			<b-button size="sm" variant="success"  @click="gotoParam('WorkMilestoneEdit', {addFlag:true})" >新增工作里程碑</b-button>&nbsp;&nbsp;
		</b-form-row>
		<br>
      <workMilestoneInfo :modifyFlag="true"/>
      <br>
      <h2 class="text-left"><font color="blue">肆、各月累計預定執行經費</font></h2>
      <workExpensesInfo/>
      <br>
      <h2 class="text-left"><font color="blue">伍、上傳相關照片</font></h2>
      <workPhotoInfo/>
      <br>
      <h2 class="text-left"><font color="blue">陸、歷次送審及核定情形</font></h2>
      <workSubmitInfo/>
    <br>
  </div>
</template>


<script>
import activationsInfo from './ActivationsInfo.vue'
import workDataInfo from './WorkDataInfo.vue'
import workMilestoneInfo from './WorkMilestoneInfo.vue'
import workExpensesInfo from './WorkExpensesInfo.vue'
import workPhotoInfo from './WorkPhotoInfo.vue'
import workSubmitInfo from './WorkSubmitInfo.vue'



export default {
  data(){
    return{
    
  }
 },
 methods:  {
   check(){
     confirm('確定是否轉入?');
   }
  },
  components:{
    activationsInfo,workDataInfo,workMilestoneInfo,workExpensesInfo,workPhotoInfo,workSubmitInfo
  }

}
</script>
<style>
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}
</style>
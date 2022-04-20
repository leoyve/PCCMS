<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>轉入活化計畫</strong></h2></b-form-row>
      <br>
      <b-container fluid>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
        </b-form-row>
        <b-form-row class="justify-content-start">
          <b-button size="lg" variant="success"  @click="check()" >轉入</b-button>&nbsp;&nbsp;
        </b-form-row>
        <br>
      </b-container>
      <h2 class="text-left"><font color="blue">壹、活化計畫基本資料</font></h2>
      <activationsInfo/>
      <br>
      <h2 class="text-left"><font color="blue">貳、活化工作基本資料</font></h2>
      <workDataInfo/>
      <br>
      <h2 class="text-left"><font color="blue">參、活化工作里程碑</font></h2>
      <workMilestoneInfo/>
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
import workSubmitInfo from './WorkSubmitInfo'

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
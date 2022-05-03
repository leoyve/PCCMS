<template>
  <div>
      <br>
      <br>
      <b-container fluid>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
        </b-form-row>
      </b-container>
      <br>
      <judgeInfo v-if="this.$route.params.judgeFlag"/>
      <br>
      <h2 class="text-left"><font color="blue">壹、活化計畫基本資料 <div v-if="this.$route.params.verFlag">(核定版次:第2版)</div></font></h2>
      <activationsInfo :detailFlag="false"/>
      <br>
      <h2 class="text-left"><font color="blue">貳、活化工作基本資料</font></h2>
      <workDataInfo :modifyFlag="false"/>
      <br>
      <h2 class="text-left"><font color="blue">參、活化工作里程碑</font></h2>
      <workMilestoneInfo :modifyFlag="false"/>
      <br>
      <h2 class="text-left"><font color="blue">肆、各月累計預定執行經費</font></h2>
      <workExpensesInfo :modifyFlag="false"/>
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
import judgeInfo from './JudgeInfo.vue'

export default {
  data(){
    return{
    
  }
 },
  methods:  {
    check(){
      confirm('確定是否轉入?');
    },
    report(){
      alert('產生檔案下載');
    },
    reload(){
      confirm('如重行下載上次核定之計畫資料，目前已編輯之資料將被覆蓋，無法恢復，是否重新載入?');
    }
  },
  components:{
    activationsInfo,workDataInfo,workMilestoneInfo,workExpensesInfo,workPhotoInfo,workSubmitInfo,judgeInfo
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
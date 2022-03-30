<template>
  <div>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >      
        <b-button size="sm" variant="info" @click="gotoParam('',)">上傳EXCEL</b-button>&ensp;  
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('OpenPeriodDetail',)">回上一頁</b-button>
      </b-row>
    </b-container>
    <br>
    <stageSimplyInfo/>
    <br>
    <stageScoreInfo/>
  </div>
</template>


<script>
import stageSimplyInfo from './StageSimplyInfo.vue'
import stageScoreInfo from './StageScoreInfo.vue'
export default {
  data(){
    return{
     
     
  }
 },
 methods:  {

  },
  components:{
    stageSimplyInfo,stageScoreInfo
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
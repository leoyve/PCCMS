<template>
  <div>
    <br>
    <b-container fluid>
      <b-row class="col-sm row justify-content-end" >     
        <b-button size="sm" variant="success" @click="gotoParam('StageStudentEdit',{addFlag:true})">新增</b-button>&ensp;  
        <b-button size="sm" variant="info" @click="upload()">上傳EXCEL</b-button>&ensp;  
        <b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
      </b-row>
    </b-container>
    <br>
    <stageSimplyInfo/>
    <br>
	<stageStudentInfo/>
  </div>
</template>


<script>
import stageSimplyInfo from './StageSimplyInfo.vue'
import stageStudentInfo from './StageStudentInfo.vue'
export default {
  data(){
    return{
     
  }
 },
 methods:  {
    
  },
  components:{
    stageSimplyInfo,stageStudentInfo
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
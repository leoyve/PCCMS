<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>轉入活化計畫</strong></h2></b-form-row>
      <br>
      <b-container fluid>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success"  @click="gotoParam('AgencyEdit', {updateFlag:true})" >轉入</b-button>&nbsp;&nbsp;
          <b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
        </b-form-row>
        <br>
      </b-container>
      <h2 class="text-left"><font color="blue">壹、活化計畫基本資料</font></h2>
      <activationsInfo/>
      <br>
      <h2 class="text-left"><font color="blue">貳、活化工作基本資料</font></h2>
    
    <br>
  </div>
</template>


<script>
import activationsInfo from './ActivationsInfo.vue'

export default {
  data(){
    return{
    
  }
 },
 methods:  {
   
  },
  components:{
    activationsInfo
  }

}
</script>
<style>
</style>
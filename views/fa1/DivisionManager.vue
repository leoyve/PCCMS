<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>活化補助工作計畫管理畫面</strong></h2></b-form-row>
      <br>
      <b-container fluid>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="outline-secondary" @click="gotoParam('ActivationsQuery')">回上一頁</b-button>
        </b-form-row>
        <br>
      </b-container>
      <h4 class="text-left"><font color="red">壹、通報案件基本資料</font></h4>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="success"  @click="gotoParam('ActivationsEdit')" >修改通報案件</b-button>&nbsp;&nbsp;
        <b-button size="sm" variant="success"  @click="deleteCheck()" >刪除通報案件</b-button>&nbsp;&nbsp;
      </b-form-row>
      <br>
      <informCaseInfo/>

    <br>
  </div>
</template>


<script>
import informCaseInfo from './InformCaseInfo.vue'


export default {
  data(){
    return{
    
  }
 },
 methods:  {

  },
  components:{
    informCaseInfo
  },
  mounted(){
    
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
<template>
  <div>
    <b-container>
      <h2 class="text-left"><font color="red">民眾通報案件資料</font></h2>
      <caseVue :test="'可以編輯'" :disabledFlag="false" ref="caseVue"/>
    </b-container>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="queryHandler">修改</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
      </b-row>
    </b-container>
    <br>
  </div>
</template>


<script>
import caseVue from './CaseInfo.vue'

export default {
  data(){
    return{
  }
 },
 methods:  {
    queryHandler(){
      //CALL 子元素的Method
      this.$refs.caseVue.insertData();

    },
    reset(){

    }
  },
  components: {
    caseVue,
  },
}
</script>
<style>

</style>
<template>
  <div>
    <br>
    <br>
    <b-container>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="success"  @click="gotoParam('AgencyEdit', {updateFlag:true})" >編輯</b-button>&nbsp;&nbsp;
        <!-- 工程會管理員才有刪除權限 -->
        <b-button size="sm" variant="danger"  @click="deleteCheck()" >刪除</b-button>&nbsp;&nbsp;
        <b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
      </b-form-row>
    </b-container>
    <agencyInfo/>
    <br>
	<agencyCourseInfo :detailFlag="false"/>
  </div>
</template>


<script>
import agencyInfo from './AgencyInfo.vue'
import agencyCourseInfo from './AgencyCourseInfo.vue'

export default {
  data(){
    return{
  }
 },
 components: {
    agencyInfo,agencyCourseInfo
  },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
  },

}
</script>
<style>
.col-md-4 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
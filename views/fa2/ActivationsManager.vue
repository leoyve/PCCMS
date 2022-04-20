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
        <b-form-row class="justify-content-start">
          <b-col class="col-sm-7 text-left">
            <!--有核定過後且資料有異動才會出現-->
            <b-button size="sm" variant="info"  @click="reload()" >重新下載核定計畫資料並覆蓋</b-button>&nbsp;&nbsp;
            <b-button size="sm" variant="success"  @click="gotoParam('WorkDataSubmit')" >提送本次填寫之計畫資料</b-button>&nbsp;&nbsp;
            <!--審查主要是中央主管機關、工程會管理員也有(提送之後才有)，移到主管機關活化審核
            <b-button size="sm" variant="success"  @click="gotoParam('WorkDataBosSubmit')" >審查</b-button>&nbsp;&nbsp;-->
            <!--基本資料解鎖只有工程會有-->
            <b-button size="sm" variant="warning"  @click="gotoParam('WorkDataLock')" >基本資料解鎖</b-button>&nbsp;&nbsp;
          </b-col>
          <b-col class="col-sm-5 text-right">
            <!-- 這個感覺不需要
            <b-button size="sm" variant="info"  @click="deleteCheck()" >檢視活化計畫資料表</b-button>&nbsp;&nbsp;
            -->
            <b-button size="sm" variant="primary"  @click="gotoParam('ActivationsVersionDetail')" >檢視活化計畫資料表</b-button>&nbsp;&nbsp;
            <b-button size="sm" variant="primary"  @click="report()" >產生活化計畫Word檔案</b-button>&nbsp;&nbsp;
            <b-button size="sm" variant="primary"  @click="report()" >組合產生要點Word檔案(發函送審用)</b-button>&nbsp;&nbsp;
          </b-col>
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
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="success"  @click="gotoParam('WorkExpensesEdit', {addFlag:true})" >新增單月預定支用經費</b-button>&nbsp;&nbsp;
      </b-form-row>
      <br>
      <workExpensesInfo :modifyFlag="true"/>
      <br>
      <h2 class="text-left"><font color="blue">伍、上傳相關照片</font></h2>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="success"  @click="gotoParam('WorkPhotoEdit', {addFlag:true})" >上傳照片</b-button>&nbsp;&nbsp;
      </b-form-row>
      <br>
      <workPhotoListInfo :modifyFlag="true"/>
      <br>
      <!--核定後才會出現-->
      <reviewRecordInfo />
    <br>
  </div>
</template>


<script>
import activationsInfo from './ActivationsInfo.vue'
import workDataInfo from './WorkDataInfo.vue'
import workMilestoneInfo from './WorkMilestoneInfo.vue'
import workExpensesInfo from './WorkExpensesInfo.vue'
import workPhotoListInfo from './WorkPhotoListInfo.vue'
import reviewRecordInfo from './ReviewRecordInfo.vue'


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
      confirm('如重行下載上次核定之計畫資料，目前已修改之資料將被覆蓋，無法恢復，是否重新載入?');
    }
  },
  components:{
    activationsInfo,workDataInfo,workMilestoneInfo,workExpensesInfo,workPhotoListInfo,reviewRecordInfo
  },
  mounted(){
    alert("歷次核定版次一覽表核定後才會出現(修正已核定活化計畫)");
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
<template>
	<div>
		<br>
		<h3><strong><font color="brown">代訓機構開班期別詳細資料</font></strong></h3>
		<b-container fluid>
			<b-form-row >
				<b-col class="col-md-8 text-left"><h2><strong>壹、基本資料</strong></h2></b-col>
				<b-col class="col-md-4">
					<b-button size="sm" variant="success" @click="gotoParam('AgencyStageEdit',{updateFlag:true})">編輯</b-button>&ensp; 
					<b-button size="sm" variant="danger" @click="deleteCheck()">刪除</b-button>&ensp; 
					<b-button size="xs" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
				</b-col>
			</b-form-row>
			<br>
			<agencyStageDetailInfo/>
			<br>
			<b-form-row >
				<b-col class="col-md-8 text-left"><h2><strong>貳、課程明細</strong></h2></b-col>
				<b-col class="col-md-4">
					<b-button size="sm" variant="success" @click="upload()">上傳EXCEL</b-button>&nbsp;
				</b-col>
			</b-form-row>
			<stageTeacherInfo  :editableFlag="true"/>
			<br>
			<b-form-row >
				<b-col class="col-md-8 text-left"><h2><strong>參、學員明細</strong></h2></b-col>
				<b-col class="col-md-4">
					<b-button size="sm" variant="success" @click="gotoParam('StageStudentEdit',{addFlag:true})">新增</b-button>&ensp;  
					<b-button size="sm" variant="success" @click="upload()">上傳EXCEL</b-button>&nbsp;
				</b-col>
			</b-form-row>
			<stageStudentInfo/>
			<b-form-row class="justify-content-start">
				<!--備查是工程會管理員的權限-->
				<b-button size="lg" variant="info" @click="gotoParam('Stage1Submit', )">送審</b-button>&nbsp;
				<b-button size="lg" variant="success" @click="gotoParam('Stage1Review', )">備查(已備查、送審未備查...)</b-button>&nbsp;
			</b-form-row >
		</b-container>
		<br>
		
	</div>
</template>


<script>
import agencyStageDetailInfo from './AgencyStageDetailInfo.vue'
import stageTeacherInfo from './StageTeacherInfo.vue'
import stageStudentInfo from './StageStudentInfo.vue'

export default {
 data(){
	return{
		
	}
 },
 methods: {
	
 },
  components:{
    agencyStageDetailInfo,stageTeacherInfo,stageStudentInfo
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
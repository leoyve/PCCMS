<template>
	<div>
		<br>
		<b-container fluid>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
			</b-form-row>
			<h3><strong><font color="red">通報案件基本資料</font></strong></h3>
			<caseInfo :disabledFlag="true"/>
			<br>
			<h3><strong><font color="red">通報缺失位置地圖</font></strong></h3>
			<caseMapInfo/>
			<br>
			<h3><strong><font color="red">通報案件相關照片</font></strong></h3>
			<casePhotoInfo/>
			<br>
			<h3><strong><font color="red">通報案件處理資料</font></strong></h3>
			<caseHandleInfo/>
			<br>
			<closeCaseRecordList/>
			<br>
			<caseSatisfactionInfo/>
			<br>
			<wkutAssessmentInfo/>
			<br>
			<directorAssessmentInfo/>
		</b-container>
	</div>
</template>


<script>
import caseInfo from '../CaseInfo.vue';
import caseMapInfo from '../CaseMapInfo.vue';
import casePhotoInfo from '../CasePhotoInfo.vue';
import caseHandleInfo from '../CaseHandleInfo.vue';
import closeCaseRecordList from '../CloseCaseRecordList.vue';
import caseSatisfactionInfo from '../CaseSatisfactionInfo.vue';
import wkutAssessmentInfo from '../WkutAssessmentInfo.vue';
import directorAssessmentInfo from '../DirectorAssessmentInfo.vue';


export default {
 data(){
	return{
	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		//this.$router.push({name:'WkutCloseReportLine'})
	},
 },

  components: {
	caseInfo,	caseMapInfo,	casePhotoInfo,	caseHandleInfo,	closeCaseRecordList,	caseSatisfactionInfo,	wkutAssessmentInfo,	directorAssessmentInfo
  },


}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
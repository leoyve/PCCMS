<template>
	<div>
		<br>
		<br>
		<b-container>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
			</b-form-row>
			<br>
			<caseInfoSimple/>
			<br>
			<font color="red">(無處理資料時顯示)</font><font color="blue"><h2>本通報案件尚未完成改善及結案，謝謝您的關心及等候！</h2></font>
			<caseHandleInfo/>
			<br>
			<b-form-row class="justify-content-start">
				<b-col class="text-left"><font color="red">1.通報案件填寫滿意度調查資料紀錄達10次或已結案達14天以上者，均將不再開放填寫滿意度調查資料。</font></b-col>
			</b-form-row>
			<b-form-row class="justify-content-start">
				<b-col class="text-left"><font color="red">2.另考量系統資源有限，同一天內至多可填寫滿意度調查資料2次，並請勿重複填寫相同之滿意度調查資料。</font></b-col>
			</b-form-row>
			<b-form-row class="justify-content-start">
				<b-col class="text-left"><font color="red">3.如您不滿意通報案件之改善情形，敬請具體指出本案尚未完成改善之事項、時間及其位置等實情，俾利主辦機關檢討改善，謝謝！</font></b-col>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="md" variant="success" @click="gotoParam('AddSatisfaction',)">新增</b-button>
			</b-form-row>
			<br>
			<caseSatisfactionInfo/>
			<b-form-row class="justify-content-end">
				<b-button size="md" variant="success" @click="gotoParam('ChangePhotoReview',{addFlag:true})">新增</b-button>
			</b-form-row>
			<br>
			<casePhotoInfo/>
		</b-container>
	</div>
</template>


<script>
import caseInfoSimple from './CaseInfoSimple.vue'
import caseHandleInfo from './CaseHandleInfo.vue'
import casePhotoInfo from './CasePhotoInfo.vue'
import caseSatisfactionInfo from './CaseSatisfactionInfo.vue'



export default {
 data(){
	return{
		formBean:this.$route.params.formBean
		
	}
 },
 methods: {
	uploadPhoto(){
		alert('上傳處理照片服務');
	}

 },
 components:{
	caseInfoSimple,caseHandleInfo,casePhotoInfo,caseSatisfactionInfo
 },
 mounted(){
	console.log("test " + this.formBean.aa);
 }

}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
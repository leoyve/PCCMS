<template>
	<div>
		<b-container fluid>
			<h2><strong>通報案件審查結案（案件編號：11000000340）</strong></h2>
			<b-row>
				<font color='red'><strong>1.主管機關辦理審查結案作業，請檢視主辦機關登錄處理情形及上傳處理照片之完整度。</strong></font>
			</b-row>
			<b-row >
				<font color='red'><strong>2.確認通報案件已完成改善，請按「完成審查」鍵，系統將同時寄送結案郵件通知民眾填寫滿意度。</strong></font>
			</b-row>	
			<b-row >
				<font color='red'><strong>3.通報案件審查同意結案後，如超過結案日期達15天以上，即無法異動審查結果。</strong></font>
			</b-row>	
			<b-row >
				<font color='red'><strong>4.請注意民眾填寫滿意度如有不滿意之具體事由，或所屬主辦機關於結案15天內擬補正處理情形或照片，均請先改成不同意結案狀態。</strong></font>
			</b-row>	
			<b-row >
				<font color='red'><strong>(注意：結案時系統將同時寄送結案郵件通知民眾填寫滿意度，務請審慎確認案件已妥處改善)</strong></font>
			</b-row>	
		</b-container>
		<br>
		<b-container fluid>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">處理機關</b-col>
				<b-col class="col-md-8 text-left">桃園市政府</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">結案日期</b-col>
				<b-col class="col-md-8 text-left">110/03/31</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">審查機關</b-col>
				<b-col class="col-md-8 text-left">行政院公共工程委員會</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">工程名稱<font color='red'> (請填寫標案管理系統登載之名稱)</font></b-col>
				<b-col class="col-md-6 text-left"><b-form-input></b-form-input></b-col>
				<b-col class="col-md-4 text-left"><b-button size="sm" variant="success" @click="aa">查詢所屬標案</b-button></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">是否同意結案<font color='red'>*</font></b-col>
				<b-col class="col-md-8 text-left"><b-form-radio-group v-model="check2" :options="checkAssign" name="radio-validation-1"></b-form-radio-group></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">不同意結案理由之說明:<font color='red'>不同意結案時必填</font></b-col>
				<b-col class="col-md-8 text-left"><b-form-textarea></b-form-textarea></b-col>
			</b-row>
			<br>
			<b-row class="justify-content-end">
				<!-- 有ID且撈出來有資料就進行修改，無ID也無資料直接新增 -->
				<b-button size="sm" variant="info" @click="toPrint">處理情形列印畫面</b-button>&ensp; &ensp; 
				<b-button size="sm" variant="success" @click="queryHandler">完成審查</b-button>&ensp; &ensp; 
				<b-button size="sm" variant="outline-secondary" @click="toSee">取消</b-button>
			</b-row>
		</b-container>
		<br>
		<!--不要顯示撤回的按鈕-->
		<closeCaseRecordList :showFlag="false" ref="closeCaseRecordList"/>
		<br>
		<wkutPeopleInfo/>
		<br>
		<caseSatisfactionInfo/>
		<br>
		<caseHandleInfo/>
		<br>
		<casePhotoInfo/>
		<br>
		<caseInfo :disabledFlag="true"/>
	</div>
</template>


<script>
import wkutPeopleInfo from './WkutPeopleInfo.vue'
import closeCaseRecordList from './CloseCaseRecordList.vue';
import caseSatisfactionInfo from './CaseSatisfactionInfo.vue';
import caseHandleInfo from './CaseHandleInfo.vue';
import casePhotoInfo from './CasePhotoInfo.vue';
import caseInfo from './CaseInfo.vue';

export default {
 data(){
	return{
		checkAssign:[
			{	value: 'Y', text: '是'	},
			{	value: 'N', text: '否'	},
		],
		check2: 'N'
	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);

		this.$router.push({name:'CaseCloseQuery'})

	},
	toPrint(){
		//新開視窗
		let routeUrl = this.$router.resolve({name:'CaseRecordPrint'})
		window.open(routeUrl.href, '_blank'); 
	},
	aa(){
		//新開視窗
		let routeUrl = this.$router.resolve({name:'CmdCaseQuery'})
		window.open(routeUrl.href, '_blank'); 

	},
 },
 components: {
    wkutPeopleInfo,	closeCaseRecordList,	caseSatisfactionInfo,	caseHandleInfo,	casePhotoInfo,	caseInfo
  },

}


</script>

<style>

.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
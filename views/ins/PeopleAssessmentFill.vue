<template>
	<div>
		<b-container >
			<h3>民眾通報內容考核表</h3>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-info text-dark"><h5><strong>考核項目及權重</strong></h5></b-col>
				<b-col class="border  border-dark col-md-6 bg-info text-dark"><h5><strong>考核細項</strong></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-info text-dark text-center"><h5><strong>權重</strong></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-info text-dark text-center"><h5><strong>評分</strong></h5></b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-primary">
				<b-col class=" col-md-2 bg-primary"><h5>通報案件之影響面</h5></b-col>
				<b-col class=" col-md-8 bg-primary">
					<b-row class="border-0  border-dark">
						<b-col class="border border-dark col-md-9 bg-primary text-left text-light"><h5>通報案件內容具體明確，對監督政府規劃設計不周，工程品質不良，安全措施
							不足，環境衛生不佳，工程進度緩慢等缺失，有具體效益，具有實質公共利益。</h5>
						</b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>50</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-primary">
					<b-input size="sm"></b-input>
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-primary">
				<b-col class=" col-md-2 bg-primary"><h5>通報民眾熱心程度</h5></b-col>
				<b-col class=" col-md-8 bg-primary">
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>提供可資辨識之佐證資料，陳述通報案件案情完整度。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>40</h5></b-col>
					</b-row>
					<b-row>
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>通報後熱心積極協助追蹤情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>10</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-primary">
					<b-input size="sm"></b-input>
				</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-10 bg-primary text-light"><h5>總分<font color="red">(自動加總)</font></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-primary"><b-input size="sm"></b-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-10 bg-primary text-light"><h5>等級<font color="red">(自動判定)</font></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-primary"><b-input size="sm"></b-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-primary text-light"><h5>考核意見<font color="red">(如應繼續改善，請填寫具體意見)</font></h5></b-col>
				<b-col class="border  border-dark col-md-10 bg-primary"><b-textarea></b-textarea></b-col>
			</b-row>
			<br>
			<b-row class="row justify-content-end" >
				<b-button size="sm" variant="success" @click="add" >送出考核結果</b-button>&ensp; 
				<b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
			</b-row>
		</b-container>
		<br>
		<caseHandleInfo/>
		<br>
		<closeCaseRecordList/>
		<br>
		<caseSatisfactionInfo/>
		<br>
		<caseInfo :disabledFlag="true"/>
		<br>
		<caseMapInfo/>
	</div>
</template>


<script>
import caseInfo from './CaseInfo.vue';
import caseHandleInfo from './CaseHandleInfo.vue';
import closeCaseRecordList from './CloseCaseRecordList.vue';
import caseSatisfactionInfo from './CaseSatisfactionInfo.vue';
import caseMapInfo from './CaseMapInfo.vue';

export default {
 data(){
	return{
		options: [
			{ value: 'N', text: '否' },
			{ value: 'Y1', text: '是(未就通報內容完全改善)' },
			{ value: 'Y2', text: '是(改善情形未盡確實)' },
			{ value: 'Y4', text: '是(民眾滿意度調查意見未妥善處理)' },
		],
	}
 },
 components: {
    caseInfo,	caseHandleInfo,	closeCaseRecordList,	caseSatisfactionInfo,	caseMapInfo,
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
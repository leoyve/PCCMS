<template>
	<div>
		<b-container >
			<h3>工程主辦機關案件處理情形考核表</h3>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-info text-dark"><h5><strong>考核項目及權重</strong></h5></b-col>
				<b-col class="border  border-dark col-md-6 bg-info text-dark"><h5><strong>考核細項</strong></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-info text-dark text-center"><h5><strong>權重</strong></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-info text-dark text-center"><h5><strong>評分</strong></h5></b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-primary">
				<b-col class=" col-md-2 bg-primary"><h5>協調及整合機制</h5></b-col>
				<b-col class=" col-md-8 bg-primary">
					<b-row class="border-0  border-dark">
						<b-col class="border border-dark col-md-9 bg-primary text-left text-light"><h5>涉及一個以上機關權責事項協調情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>15</h5></b-col>
					</b-row>
					<b-row class="">
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>無法處理案件洽請上級機關、主管機關協助解決情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>15</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-primary">
					<b-input size="sm"></b-input>
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-primary">
				<b-col class=" col-md-2 bg-primary"><h5>通報處理之完整性</h5></b-col>
				<b-col class=" col-md-8 bg-primary">
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>案件處理過程之完整性。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>30</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>處理過程與民眾協調、召開會議或辦理現勘之互動情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>15</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>案件辦理時程。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>通報內容繁雜或行政程序冗長，能具體詳實處理。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>5</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-primary">
					<b-input size="sm"></b-input>
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-primary">
				<b-col class="border border-dark col-md-2 bg-primary"><h5>其他</h5></b-col>
				<b-col class="col-md-8 bg-primary">
					<b-row>
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>資料保密情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light text-center"><h5>5</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="border  border-dark col-md-2 bg-primary">
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
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-primary text-light"><h5><strong>本案是否應繼續改善</strong><font color="red">(另成立新的督工案件)</font></h5></b-col>
				<b-col class="border  border-dark col-md-10 bg-primary text-light">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-col>
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
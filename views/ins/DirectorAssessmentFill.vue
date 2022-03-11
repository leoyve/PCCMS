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
				<b-col class=" col-md-2 bg-primary"><h5>通報系統之完整性</h5></b-col>
				<b-col class=" col-md-8 bg-primary">
					<b-row class="border-0  border-dark">
						<b-col class="border border-dark col-md-9 bg-primary text-left text-light"><h5>民眾與所屬通報系統聯繫情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>10</h5></b-col>
					</b-row>
					<b-row class="">
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>涉及其他權責機關案件協調情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>10</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-primary">
					<b-input size="sm"></b-input>
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-primary">
				<b-col class=" col-md-2 bg-primary"><h5>通報案件處理情形</h5></b-col>
				<b-col class=" col-md-8 bg-primary">
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>案件處理過程之完整性。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>20</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>案件處理過程與民眾互動情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>案件辦理時程。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>10</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-primary">
					<b-input size="sm"></b-input>
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-primary">
				<b-col class="col-md-2 bg-primary"><h5>執行運作機制</h5></b-col>
				<b-col class="col-md-8 bg-primary">
					<b-row>
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>工程主管機關施工查核小組查核情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light text-center"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>定期辦理追蹤檢討會情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>確實配合工程會辦理檢討。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>5</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="border  border-dark col-md-2 bg-primary">
					<b-input size="sm"></b-input>
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-primary">
				<b-col class="col-md-2 bg-primary"><h5>特殊績效</h5></b-col>
				<b-col class="col-md-8 bg-primary">
					<b-row>
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>配合機關、學校、社團等組織宣導。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light text-center"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-primary text-light text-left"><h5>對民眾通報資料保密情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-primary text-light"><h5>5</h5></b-col>
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
		</b-container>
		<br>
		<wkutPeopleInfo/>
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
import wkutPeopleInfo from './WkutPeopleInfo.vue';
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
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		
	},

 },
 components: {
    caseInfo,	caseHandleInfo,	closeCaseRecordList,	caseSatisfactionInfo,	caseMapInfo,	wkutPeopleInfo
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
<template>
	<div>
		<b-container fluid>
			<h3>工程主辦機關案件處理情形考核表</h3>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-secondary text-dark"><h5><strong>考核項目及權重</strong></h5></b-col>
				<b-col class="border  border-dark col-md-6 bg-secondary text-dark"><h5><strong>考核細項</strong></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-secondary text-dark text-center"><h5><strong>權重</strong></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-secondary text-dark text-center"><h5><strong>評分</strong></h5></b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-secondary">
				<b-col class=" col-md-2 bg-secondary"><h5>通報系統之完整性</h5></b-col>
				<b-col class=" col-md-8 bg-secondary">
					<b-row class="border-0  border-dark">
						<b-col class="border border-dark col-md-9 bg-secondary text-left text-light"><h5>民眾與所屬通報系統聯繫情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>10</h5></b-col>
					</b-row>
					<b-row class="">
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>涉及其他權責機關案件協調情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>10</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-secondary">
					22
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-secondary">
				<b-col class=" col-md-2 bg-secondary"><h5>通報案件處理情形</h5></b-col>
				<b-col class=" col-md-8 bg-secondary">
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>案件處理過程之完整性。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>20</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>案件處理過程與民眾互動情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>案件辦理時程。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>10</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-secondary">
					10
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-secondary">
				<b-col class="col-md-2 bg-secondary"><h5>執行運作機制</h5></b-col>
				<b-col class="col-md-8 bg-secondary">
					<b-row>
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>工程主管機關施工查核小組查核情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light text-center"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>定期辦理追蹤檢討會情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>確實配合工程會辦理檢討。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>5</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="border  border-dark col-md-2 bg-secondary">
					12
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-secondary">
				<b-col class="col-md-2 bg-secondary"><h5>特殊績效</h5></b-col>
				<b-col class="col-md-8 bg-secondary">
					<b-row>
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>配合機關、學校、社團等組織宣導。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light text-center"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>對民眾通報資料保密情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>5</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="border  border-dark col-md-2 bg-secondary">
					6
				</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-10 bg-secondary text-light"><h5>總分<font color="red">(自動加總)</font></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-secondary">80</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-10 bg-secondary text-light"><h5>等級<font color="red">(自動判定)</font></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-secondary">甲等</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-secondary text-light"><h5>考核意見<font color="red">(如應繼續改善，請填寫具體意見)</font></h5></b-col>
				<b-col class="border  border-dark col-md-10 bg-secondary text-light">已結案</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-secondary text-light"><h5><strong>本案是否應繼續改善</strong><font color="red">(另成立新的督工案件)</font></h5></b-col>
				<b-col class="border  border-dark col-md-10 bg-secondary text-light">否</b-col>
			</b-row>
		</b-container>
	</div>
</template>


<script>

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

}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
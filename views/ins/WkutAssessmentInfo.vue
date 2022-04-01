<template>
	<div>
		<b-container fluid>
			<h3>工程主管機關案件處理情形考核表</h3>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-secondary text-dark"><h5><strong>考核項目及權重</strong></h5></b-col>
				<b-col class="border  border-dark col-md-6 bg-secondary text-dark"><h5><strong>考核細項</strong></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-secondary text-dark text-center"><h5><strong>權重</strong></h5></b-col>
				<b-col class="border  border-dark col-md-2 bg-secondary text-dark text-center"><h5><strong>評分</strong></h5></b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-secondary">
				<b-col class=" col-md-2 bg-secondary"><h5>協調及整合機制</h5></b-col>
				<b-col class=" col-md-8 bg-secondary">
					<b-row class="border-0  border-dark">
						<b-col class="border border-dark col-md-9 bg-secondary text-left text-light"><h5>涉及一個以上機關權責事項協調情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>15</h5></b-col>
					</b-row>
					<b-row class="">
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>無法處理案件洽請上級機關、主管機關協助解決情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>15</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-secondary">
					24
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-secondary">
				<b-col class=" col-md-2 bg-secondary"><h5>通報處理之完整性</h5></b-col>
				<b-col class=" col-md-8 bg-secondary">
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>案件處理過程之完整性。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>30</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>處理過程與民眾協調、召開會議或辦理現勘之互動情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>15</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>案件辦理時程。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>10</h5></b-col>
					</b-row>
					<b-row >
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>通報內容繁雜或行政程序冗長，能具體詳實處理。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light"><h5>5</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-secondary">
					48
				</b-col>
			</b-row>
			<b-row class="border  border-dark align-items-center bg-secondary">
				<b-col class="border border-dark col-md-2 bg-secondary"><h5>其他</h5></b-col>
				<b-col class="col-md-8 bg-secondary">
					<b-row>
						<b-col class="border border-dark col-md-9 bg-secondary text-light text-left"><h5>資料保密情形。</h5></b-col>
						<b-col class="border border-dark col-md-3 bg-secondary text-light text-center"><h5>5</h5></b-col>
					</b-row>
				</b-col>
				<b-col class="col-md-2 bg-secondary">
					8
				</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-10 bg-secondary text-light"><h5>總分<font color="red">(自動加總)</font></h5></b-col>
				<b-col class="col-md-2 bg-secondary">80</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-10 bg-secondary text-light"><h5>等級<font color="red">(自動判定)</font></h5></b-col>
				<b-col class=" col-md-2 bg-secondary">甲等</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-secondary text-light"><h5>考核意見<font color="red">(如應繼續改善，請填寫具體意見)</font></h5></b-col>
				<b-col class="col-md-10 bg-secondary text-light">已結案</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="border  border-dark col-md-2 bg-secondary text-light"><h5><strong>本案是否應繼續改善</strong></h5></b-col>
				<b-col class="col-md-10 bg-secondary text-light">
					否
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>


<script>


export default {
 data(){
	return{
	}
 },
 methods: {


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
<!-- 參數一覽表 -->
<!-- 機關代碼 iwkut-->
<!-- 通報案件限辦起迄日期 idate1、idate2-->
<!-- 工程會督工報告有效統計案件ieffect -->
<!-- 通報案件主管機關類別 ilocal-->
<!-- 主管機關代碼前三碼(感覺可以取消) -->
<!-- 滿意度 ieffect(isat)-->
<!-- 通報方式 iflag-->
<!-- 分案及結案情況 ikind-->
<!-- 通報案件編號關鍵字 iseq-->
<!-- 通報工程名稱關鍵字 iname-->
<!-- 通報缺失地點關鍵字 iaddr-->
<!-- 通報案件主題關鍵字 imaster-->
<!-- 通報缺失地點關鍵字 iaddr-->
<!-- 通報案件具體內容關鍵字 imemo-->
<!-- 通報日期 ireportDate1、ireportDate2-->
<!-- 性別 ise-->
<!-- 通報民眾 ipeo-->
<template>
	<div>
		<br>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary" v-show="this.$route.params.wkutName != null"><h4><strong>{{ this.$route.params.wkut }}所屬通報案件處理結案情形一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-center text-light bg-primary" v-show="this.$route.params.wkutName == null"><h4><strong>各主管機關通報案件處理結案情形一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="warning">
					<template #cell(action)="row">
						<!-- 傳遞的參數應該是機關代碼和查詢條件-->
						<!-- 最下面那一列應該為合計，技術上還未研究 -->
						<b-button size="sm" variant="success" @click="gotoParam('ReportCommonInfo', row.item)" >檢視</b-button>
					</template>
					<template #cell(informInfo)="row">
						<b-container>
							<b-row>
								<b-col><strong>通報人:</strong> {{ row.item.informName	}} </b-col>
							</b-row>
							<b-row>
								<b-col><strong>通報方式:</strong> {{ row.item.informMethod	}} </b-col>
							</b-row>
							<b-row>
								<b-col><strong>通報日期:</strong> {{ row.item.informDate	}} </b-col>
							</b-row>
						</b-container>
					</template>
					<template #cell(handleProcess)="row">
						<b-container>
							<b-row>
								<b-col><strong>分案日期:</strong> {{ row.item.disDate	}} </b-col>
							</b-row>
							<b-row>
								<b-col><strong>限辦日期:</strong> {{ row.item.limiteDate	}} </b-col>
							</b-row>
							<b-row>
								<b-col><strong>結案日期:</strong> {{ row.item.closeDate	}} </b-col>
							</b-row>
							<b-row>
								<b-col><strong>處理天數:</strong> {{ row.item.handleDay	}} </b-col>
							</b-row>
							<b-row>
								<b-col ><strong>逾期天數:</strong> {{ row.item.delayDay	}} </b-col>
							</b-row>
						</b-container>
					</template>
					<template #cell(latestHandle)="row">
						<b-container>
							<b-row>
								<b-col><strong>處理日期:</strong> {{ row.item.handleDate	}} </b-col>
							</b-row>
							<b-row>
								<b-col><strong>處理情形:</strong> {{ row.item.situation	}} </b-col>
							</b-row>
						</b-container>
					</template>
					<template #cell(saticfaction)="row">
						<b-container>
							<b-row>
								<b-col><strong>滿意度填寫日期：:</strong> {{ row.item.satDate	}} </b-col>
							</b-row>
							<b-row>
								<b-col><strong>滿意度:</strong> {{ row.item.satDegree	}} </b-col>
							</b-row>
							<b-row>
								<b-col><strong>滿意度意見:</strong> {{ row.item.satComment	}} </b-col>
							</b-row>
						</b-container>
					</template>
				</b-table>
			</b-form-row>
			<b-pagination align="right"
				v-model="currentPage"
				:total-rows="rows"
				:per-page="perPage"
				first-number
			></b-pagination>
		</b-container>
	</div>
</template>

<script>

export default {
 data(){
	return{
		rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'caseNum',
				label:	'通報案件編號'
			},
			{
				key:	'caseName',
				label:	'工程名稱',
				thStyle: { width: "10%" },
			},
			{
				key:	'wkut',
				label:	'主管機關'
			},
			{
				key:	'informInfo',
				label:	'通報資訊'
			},
			{
				key:	'informTopic',
				label:	'通報主題',
				thStyle: { width: "10%" },
			},
			{
				key:	'informComment',
				label:	'具體內容',
				thStyle: { width: "10%" },
			},
			{
				key:	'handleProcess',
				label:	'處理過程',
			},
			{
				key:	'latestHandle',
				label:	'最新處理情形',
				thStyle: { width: "10%" },
			},
			{
				key:	'delayReason',
				label:	'逾期展延原因',
	
			},
			{
				key:	'saticfaction',
				label:	'滿意度調查',
		
			},
			{
				key:	'assessment',
				label:	'考核結果',
		
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "5%" },
			},

		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', caseNum: '11000000072', caseName: '鎮西堡巨木群步道設施維護工程',	informName:'林XX',	informMethod:'電話',
			informDate:'110/10/10',	informTopic:'請明確加強文字上告知遊客',	
			informComment:'告示牌上面只有告訴遊客施工時間，卻沒有告訴遊客，維護期間請勿進入鎮西堡巨木群步道，麻煩盡快告知遊客，鎮西堡全面禁止遊客進入',
			disDate:'110/09/09',	limiteDate:'110/10/10',	closeDate:'110/10/03',	handleDay:'2',	delayDay:'0',	handleDate:'110/09/21',	
			situation:'一、本案經本部台電公司查處後，通報人所陳地點為該公司台電台南區營業處所轄管，有關路面人孔破損一事，台南區營業處已查明現況並改善完成，請通報人諒查。 二、鑑於台電公司已釐清及完成改善作業，本案同意結案。 三、通報人若有任何意見，歡迎E-MAIL或來電本部全民督工業務承辦人龔書聖：ssgoung@moea.gov.tw；02-23713161~654',	
			delayReason:'我沒時間!!',	satDate:'110/11/11',	satDegree:'很滿意',	satComment:'謝謝即時處理！',assessment:'甲等(80)',	pk: 5566 },
		],
	}
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
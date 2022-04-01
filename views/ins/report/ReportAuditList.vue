<template>
	<div>
		<br>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary" v-show="this.$route.params.wkut != null"><h4><strong>{{ this.$route.params.wkut }}所屬通報案件辦理查核一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-center text-light bg-primary" v-show="this.$route.params.wkut == null"><h4><strong>各主管機關通報案件辦理查核一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
			<b-table striped hover :items="items" :fields="fields" head-variant="warning">
				<template #cell(action)="row">
					<b-button size="sm" variant="success" @click="gotoParam('ReportCommonInfo', row.item)" >檢視</b-button>&nbsp;
					<b-button size="sm" variant="warning" @click="result()" v-show="classFlag" >考核結果</b-button>
				</template>
				<template #cell(assessment)="row">
					<b-container>
						<b-row>
							<b-col>{{row.item.score}}</b-col>
						</b-row>
						<b-row>
							<b-col>{{row.item.class}}</b-col>
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
		classFlag: this.$route.params.classFlag == null ? false:this.$route.params.classFlag,
		aa:true,
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
				key:	'wkutA',
				label:	'主管機關'
			},
			{
				key:	'wkutB',
				label:	'主辦機關'
			},
			{
				key:	'cmdNum',
				label:	'標案編號'
			},
			{
				key:	'caseName',
				label:	'工程名稱',
				thStyle: { width: "10%" },
			},
			{
				key:	'informDate',
				label:	'通報日期',
			},
			{
				key:	'informTopic',
				label:	'通報主題',
				thStyle: { width: "10%" },
			},
			{
				key:	'content',
				label:	'具體內容',
				thStyle: { width: "10%" },
			},
			{
				key:	'closeDate',
				label:	'結案日期',
			},
			{
				key:	'assessment',
				label:	'考核情形',
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "10%" },
			},

		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkutA:'行政院',wkutB: '宜蘭縣政府', caseNum: '11000000072', caseName: '鎮西堡巨木群步道設施維護工程',	cmdNum:'108-B-11-06-F-002060',
			informDate:'110/10/10',	informTopic:'請明確加強文字上告知遊客',	score:87,class:'甲等',
			content:'告示牌上面只有告訴遊客施工時間...',closeDate:'110/10/03',	assessment:'甲等(80)',	pk: 5566 },
		],
	}
 },
 methods: {
	result(){
		alert('考核結果請參考標管查核紀錄!');
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
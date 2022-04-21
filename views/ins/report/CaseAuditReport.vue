<template>
	<div>
		<br>
		<h3><strong>通報案件查核統計總表</strong></h3>
		<br>
		<b-container fluid>
			<h2><font color="blue"></font></h2>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報後幾天內辦理查核" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="納入督工有效統計案件" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkAssign" name="radio-validation-1"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主管機關類別" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkClosed" name="radio-validation-1"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container fluid>
				<!-- 通報後XXX天 是從上面的查詢條件帶下來-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>各主管機關通報案件於通報後60天內辦理查核統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="warning">
						<template #cell(submitCase)="row">
							<a href="#" variant="primary" @click="gotoParam('ReportAuditList', {classFlag:false, ...row.item})" >{{row.item.submitCaseNum}}</a>
						</template>
						<template #cell(auditTotal)="row">
							<a href="#" variant="primary" @click="gotoParam('ReportAuditList', {classFlag:true, ...row.item})" >{{row.item.auditNum}}</a>
						</template>
						<template #cell(auditA)="row">
							<a href="#" variant="primary" @click="gotoParam('ReportAuditList', {classFlag:true, ...row.item})" >{{row.item.auditANum}}</a>
						</template>
						<template #cell(auditB)="row">
							<a href="#" variant="primary" @click="gotoParam('ReportAuditList', {classFlag:true, ...row.item})" >{{row.item.auditBNum}}</a>
						</template>
						<template #cell(auditC)="row">
							<a href="#" variant="primary" @click="gotoParam('ReportAuditList', {classFlag:true, ...row.item})" >{{row.item.auditCNum}}</a>
						</template>
						<template #cell(auditD)="row">
							<a href="#" variant="primary" @click="gotoParam('ReportAuditList', {classFlag:true, ...row.item})" >{{row.item.auditDNum}}</a>
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
				key:	'wkut',
				label:	'主管機關',
				thStyle: { width: "15%" },
			},
			{
				key:	'caseNum',
				label:	'通報案件'
			},
			{
				key:	'submitCase',
				label:	'有登錄標案系統標案編號之件數'
			},
			{
				key:	'auditTotal',
				label:	'查核件數'
			},
			{
				key:	'auditA',
				label:	'查核優等'
			},
			{
				key:	'auditB',
				label:	'查核甲等'
			},
			{
				key:	'auditC',
				label:	'查核乙等'
			},
			{
				key:	'auditD',
				label:	'查核丙等'
			},

		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', caseNum: '5', submitCaseNum: '5',	auditNum: '1',	auditANum: '', auditBNum:	'1',	auditCNum:'',
				auditDNum:'',	pk: 5566 },
			{ id: 2, wkut: '台中市政府', caseNum: '13', submitCaseNum: '',	auditNum: '',	auditANum: '1', auditBNum:	'1',	auditCNum:'',
				auditDNum:'',	pk: 5566 },
			{ id: 3, wkut: '新北市政府', caseNum: '17', submitCaseNum: '3',	auditNum: '',	auditANum: '', auditBNum:	'1',	auditCNum:'',
				auditDNum:'',	pk: 5566 },


		],
		checkAssign:	[
			{	value: '', text: '是'	},
			{	value: 'N', text: '否'	},
			{	value: 'Y', text: '不限'	},
		],
		checkClosed:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '中央'	},
			{	value: 'E', text: '地方'	},
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
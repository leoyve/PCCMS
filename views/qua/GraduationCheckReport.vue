<template>
	<div>
		<br>
		<h3><strong><font color="brown">品管班結業學員查核統計</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別種類" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="結業證書起訖日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<!--帶入選項值-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}結業學員工程查核統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
						<template #cell(takeCheckCase)="row">
							<a href="#" variant="primary" @click="gotoParam('CheckReportList', row.item)" >{{row.item.takeCheckCaseNum}}</a>
						</template>
						<template #cell(takeCheckACase)="row">
							<a href="#" variant="primary" @click="gotoParam('CheckReportList', row.item)" >{{row.item.takeCheckACaseNum}}</a>
						</template>
						<template #cell(takeCheckCCase)="row">
							<a href="#" variant="primary" @click="gotoParam('CheckReportList', row.item)" >{{row.item.takeCheckCCaseNum}}</a>
						</template>
						<template #cell(deficiencyCase)="row">
							<a href="#" variant="primary" @click="gotoParam('CheckDeficiencyReportList', row.item)" >{{row.item.deficiencyCaseNum}}</a>
						</template>
						<template #custom-foot>
							<b-tr>
								<b-th colspan="2">總計</b-th>
								<b-th >234</b-th>
								<b-th >132</b-th>
								<b-th >321</b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('CheckReportList', {aa:true})" >12</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('CheckReportList', {aa:true})" >2</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('CheckReportList', {aa:true})" >1</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('CheckDeficiencyReportList', {aa:true})" >1</a></b-th>
							</b-tr>
						</template>
					</b-table>
				</b-form-row>
			</b-container>
		</div>
	</div>
</template>


<script>


export default {
 data(){
	return{
		options: [
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'B'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號',
			},
			{
				key:	'agency',
				label:	'代訓機構'
			},
			{
				key:	'closePopulation',
				label:	'結業人數'
			} ,
			{
				key:	'takePopulation',
				label: 	'任職標案監造或品管人員人數'
			}, 
			{
				key:	'takeCaseNum',
				label:	'任職期間標案數'
			},
			{
				key:	'takeCheckCase',
				label:	'任職期間查核標案數'
			},
			{
				key:	'takeCheckACase',
				label:	'任職期間查核甲等以上標案數'
			} ,
			{
				key:	'takeCheckCCase',
				label: 	'任職期間查核丙等標案數'
			}, 
			{
				key:	'deficiencyCase',
				label:	'任職期間查核人員缺失標案數'
			},
		],
		items:	[
			{
				id: '1',	agency: '中原大學', closePopulation: '325', takePopulation: '23', takeCaseNum:'12',	takeCheckCaseNum:'1',
				takeCheckACaseNum:'1',	takeCheckCCaseNum:'',	deficiencyCaseNum:'',	pk: 5566
			},
			{
				id: '2',	agency: '國立臺北科技大學', closePopulation: '234', takePopulation: '44', takeCaseNum:'13',	takeCheckCaseNum:'',
				takeCheckACaseNum:'',	takeCheckCCaseNum:'',	deficiencyCaseNum:'',	pk: 5566
			},
			{
				id: '3', 	agency: '經濟部國營事業委員會(台電訓練所)', closePopulation: '135', takePopulation: '32', takeCaseNum:'8',	takeCheckCaseNum:'12',
				takeCheckACaseNum:'5',	takeCheckCCaseNum:'7',	deficiencyCaseNum:'1',	pk: 5566
			}
		],
	}
 },
 methods: {

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
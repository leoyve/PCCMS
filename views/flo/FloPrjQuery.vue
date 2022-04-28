<template>
	<div>
		<b-container >
			<br>
			<b-form-row class="row justify-content-end">
				<b-button size="md" variant="info" @click="gotoParam('FloCmdQuery')" >標案移入</b-button>&nbsp;
				<b-button size="md" variant="success" @click="alertMsg" >備查年度系統重點防汛工程</b-button>
			</b-form-row>	
			<br>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="歸屬計畫" label-align-md="right">
					<b-form-radio-group	id="radio-group-1"	v-model="picked" name="radio-options">
						<b-form-radio class="col-md-3">流域綜合治理計畫</b-form-radio>
						<b-form-radio class="col-md-5">曾文南化及烏山頭水庫整體治理計畫</b-form-radio>
						<b-form-radio class="col-md-3">歷年風災復建</b-form-radio>
						<b-form-radio ><b-form-input placeholder="其他:請輸入計畫名稱"></b-form-input></b-form-radio>
					</b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="標案編號關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="標案名稱關鍵字" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="移入日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="備查資料" label-align-md="right">
					<b-checkbox></b-checkbox>
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
				<br>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(action)="row">
							<b-button size="sm" variant="warning" @click="gotoParam('', row.item)">移出</b-button>&nbsp;
						</template>
					</b-table>
				</b-form-row>
				<b-form-row class="row justify-content-end">
					<b-pagination align="right"
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						first-number
					></b-pagination>
				</b-form-row>
				
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
				key:	'serial',
				label:	'流水號'
			},
			{
				key: 'prjno',
				label:	'工程標案編號'
			},
			{
				key:	'name',
				label:	'工程標案名稱'
			},
			{
				key:	'wkut',
				label: '主辦機關'
			}, 
			{
				key:	'site',
				label:	'工程地點'
			}, 
			{
				key:	'amount',
				label:	'決標金額(千元)'
			}, 
			{
				key:	'decideDate',
				label:	'決標日期'
			}, 
			{
				key:	'preDate',
				label:	'預定完工日期'
			}, 
			{
				key:	'inDate',
				label:	'移入日期'
			},
			{
				key:	'backUp',
				label:	'是否備查'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{	plan: '災害準備金', prjno: '1100219', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', decideDate: '102/08/09', 
				site:'宜蘭縣(非原住民地區)',	inDate:'110/12/01', backUp:'是', preDate: '', amount:5260},
			{	plan: '災害準備金', prjno: 'IAA-9402-01', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', decideDate: '105/04/07', 
				site:'宜蘭縣(非原住民地區)',	inDate:'110/12/01', backUp:'否', preDate: '110/05/17', amount:352000},
			{	plan: '災害準備金', prjno: '109-BG08', name: '蘇澳鎮運動公園停車場擋土牆改善工程',	wkut: '工程會', decideDate: '107/10/18', 
				site:'宜蘭縣(非原住民地區)',	inDate:'110/12/01', backUp:'是', preDate: '', amount:1618800},
		]
	}
 },
 methods: {
	queryHandler(){
	},
	reset(){

	},
	alertMsg(){
		confirm("年度系統重點防汛工程共:40件，年度事件共:5件，是否轉入備查資料?");
	}
 },
	mounted(){
		this.items.forEach((items, index) => { items.serial = index + 1; });
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
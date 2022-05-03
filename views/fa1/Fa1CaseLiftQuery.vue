<template>
	<div>
		<br>
		<h3><strong><font color="brown">解除列管閒置公共設施前一年度使用情形一覽表</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="解列後填報次數" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="itemPicked"
						:options="itemOptions"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="設施編號關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="設施名稱關鍵字" label-align-md="right">
					<b-input type="search"></b-input>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>解除列管閒置公共設施前一年度使用情形一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('Fa1CaseDetail', row.item)">檢視</b-button>
						</template>
					</b-table>
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
		itemOptions: [
			{	text:	'未達3次且前一年度使用情形未填',	value:	'A'},
			{	text:	'未達3次',	value:	'B'},
			{	text:	'已達3次',	value:	'C'},
			{	text:	'全部',	value:	'C'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'constName',
				label:	'設施名稱',
				tdClass: 'text-left',
			},
			{
				key:	'wkut',
				label:	'設施管理機關'
			},
			{
				key:	'bosWkut',
				label:	'目的事業主管機關'
			},
			{
				key:	'liftDate',
				label:	'解除列管日期'
			},
			{
				key:	'count',
				label:	'解除列管後填報次數',
			},
			{
				key:	'ym',
				label:	'最近填報年月',
			},
			{
				key:	'situation',
				label:	'最近年度使用情形',
				tdClass: 'text-left',
				thStyle: { width: "18%" },
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
		items:	[
			{	constName:'頭份鎮停二立體停車場',wkut: '苗栗縣頭份市公所', bosWkut:'交通部',liftDate:'108/02/21',
				count:0,ym:'108/12', situation:'現況為廣場開放供民眾使用。'},
			{	constName:'海安路地下街',wkut: '臺南市政府交通局', bosWkut:'內政部',liftDate:'105/02/02',
				count:2,ym:'108/01', situation:'海安路地下停車場於103年3月28日以ROT方式委外營運。 停車場營運部份(以本停車場使用執照核定格位數1122席計算)： 107年全日平均停車率...'},
			{	constName:'	補助地方政府興建示範停車場計畫—南投縣埔里鎮停四(仁愛)立體停車場',wkut: '南投縣埔里鎮公所', bosWkut:'交通部',liftDate:'108/02/21',
				count:1,ym:'109/12', situation:'粨鴻科技公司經營車輛停車率每月平均達百分之六十，旅館經營部分亦於109年6月份起轉虧為盈，目前營運正常，契約營運至114年6月止。'},
		]
	}
 },

 mounted(){
	this.items.forEach((items, index) => { items.serial = index + 1; });
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
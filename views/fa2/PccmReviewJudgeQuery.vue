<template>
	<div>
		<br>
		<h3><strong>活化補助工作計畫辦理成果報告考核一覽表</strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="辦理成果報告是否已上鎖" label-align-md="right">
					<b-form-radio-group
                          id="radio-group-1"
                          v-model="picked"
                          :options="options"
                          name="radio-options1"
                    ></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="補助年度" label-align-md="right">
					<b-form-input type="search"></b-form-input>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>活化補助工作計畫辦理成果報告考核一覽表</strong></h4></b-form-row>
				<b-table striped hover :items="items" :fields="fields">
					<template #cell(checkBar)="row">
						<b-checkbox v-model="model"	@value="row.id"></b-checkbox>
					</template>
					<template #cell(action)="row">
						<b-button size="sm" variant="success" @click="gotoParam('PccmJudgeReview', row.item)">考核</b-button>&nbsp;
					</template>
					<template #cell(period)="row">
						<b-container >
							<b-row>
								<b-col>{{row.item.bdate}} ~ {{row.item.edate}}</b-col>
							</b-row>
						</b-container>
					</template>
				</b-table>
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
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'PLNNO',
				label:	'活化計畫編號'
			},
			{
				key:	'PLNNAME',
				label:	'活化計畫名稱'
			},
			{
				key:	'wkut',
				label:	'主辦機關'
			}, 
			{
				key:	'constName',
				label:	'公共設施名稱'
			},
			{
				key:	'period',
				label:	'計畫起訖期程'
			},
			{
				key:	'approveDate',
				label:	'實際核定日期'
			},	
			{
				key:	'scheduleDate',
				label:	'實際辦竣日期'
			},
			{
				key:	'plnamt',
				label:	'核定經費數(千元)'
			},
			{
				key:	'rate',
				label:	'經費達成率'
			},
			{
				key:	'degree',
				label:	'系統評分'
			},
			{
				key:	'point',
				label:	'系統計點數'
			},
			{
				key:	'pccmDegree',
				label:	'工程會考核總評分'
			},
			{
				key:	'isLock',
				label:	'上鎖成果報告'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
			],
		items:	[
			{PLNNO:'1110000001',PLNNAME:'頭份鎮停二立體停車場拆除工程',wkut:'苗栗縣頭份市公所',constName:'頭份鎮停二立體停車場',
				plnamt:'5,000',bdate:'1110401', edate:'1130401',approveDate:'1101213', scheduleDate:'1100831',
				rate:'0.00',degree:'65.8',point:'6', pccmDegree:71.8,isLock:''},
			{PLNNO:'1110000002',PLNNAME:'嘉義縣六腳鄉六腳國民小學推動閒置公共設施活化─新生校區活化計畫',wkut:'嘉義縣政府教育處',constName:'嘉義縣六腳鄉六腳國民小學新生校區',
				plnamt:'4,850',bdate:'1110401', edate:'1130401',approveDate:'1110303', scheduleDate:'1070716',
				rate:'100.00',degree:77.2,point:'8', pccmDegree:'',isLock:''},
			{PLNNO:'1110000003',PLNNAME:'高雄市旗津區中興市場二樓107年度活化計畫',wkut:'高雄市政府經濟發展局',constName:'高雄市旗津中興公有市場二樓',
				plnamt:'5,000',bdate:'1110401', edate:'1130401',approveDate:'1110303', scheduleDate:'1070716',
				rate:'100.00',degree:77.2,point:'8', pccmDegree:'',isLock:''},


		],
		options: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'不限',	value:	'C'},
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
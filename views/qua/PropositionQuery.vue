<template>
	<div>
		<br>
		<h3><strong><font color="brown">測驗自動命題作業</font></strong></h3>
		<br>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="l" variant="success"  @click="gotoParam('ExamConditionEdit', {addFlag:true})" >新增</b-button>&nbsp;
			</b-form-row>
			<br>
			<!--上下連動-->
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別種類" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options3"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="命題日期" label-align-md="right">
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>測驗命題版本一覽表 </strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('PropositionView', row.item)">檢視</b-button>&nbsp;
							<b-button size="sm" variant="danger" @click="deleteCheck(row)">刪除</b-button>
						</template>
						<template #cell(difficulty)="row">
							<b-container>
								<b-row>
									<b-col>最難:{{row.item.hardestNum}}</b-col>
								</b-row>
								<b-row>
									<b-col>困難:{{row.item.diffcultNum}}</b-col>
								</b-row>
								<b-row>
									<b-col>普通:{{row.item.normalNum}}</b-col>
								</b-row>
								<b-row>
									<b-col>容易:{{row.item.easyNum}}</b-col>
								</b-row>
							</b-container>
						</template>
						<template #cell(change)="row">
							<b-container>
								<b-row>
									<b-col>第1次補考更換題數:{{row.item.change1}}</b-col>
								</b-row>
								<b-row>
									<b-col>第2次補考更換題數:{{row.item.change2}}</b-col>
								</b-row>
								<b-row>
									<b-col>新測驗卷更換題數:{{row.item.changeNew}}</b-col>
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
				</b-form-row>
			</b-container>
		</div>
	</div>
</template>


<script>


export default {
 data(){
	return{
		options3:[
			{	text:	'全部',	value:	'A'},
			{	text:	'土建',	value:	'B'},
			{	text:	'機電',	value:	'B'},
			{	text:	'回訓',	value:	'C'},
		],
		type: [
			{ value: '', text: '全部' },
			{ value: '0', text: '公共工程品質管理訓練班(機電) 【106年起適用】' },
			{ value: '1', text: '公共工程品質管理訓練班(土建)' },
			{ value: '2', text: '公共工程品質管理訓練班(土建) 【109年4月起適用】' },
			{ value: '3', text: '公共工程品質管理訓練班(機電)' },
		],
		classType:[
			{ value: '', text: '全部' },
			{ value: '0', text: '政府採購全生命週期概論' },
			{ value: '1', text: '單元一：第一章 公共工程施工品質管理制度理念與導入' },
			{ value: '2', text: '單元二：第四章 工程進料檢驗與管制' },
			{ value: '3', text: '單元二：第五章 施工管制與檢驗' },
		],
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
				key:	'className',
				label:	'訓練主題班別',
				tdClass: 'text-left',
			},
			{
				key:	'classType',
				label: '班別種類'
			},
			{
				key:	'propositionSerial',
				label:	'命題版本編號',
			},
			{
				key:	'propositionDate',
				label: '命題版本日期'
			},
			{
				key:	'versionName',
				label:	'卷別版本名稱',
			} ,
			{
				key:	'testNum',
				label: '測驗總題數'
			}, 
			{
				key:	'coreNum',
				label: '核心題數'
			}, 
			{
				key:	'difficulty',
				label: '難度分配',
				
			},
			{
				key:	'change',
				label: '題數更換',
				tdClass: 'text-left',
			},
			{
				key:	'isVaild',
				label: '是否有效'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
			],
		items:	[
			{
				id: 1, className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', propositionSerial: '1090003', versionName: 'LR110', testNum:'50',
				hardestNum:'10',diffcultNum:10,normalNum:20,easyNum:10,coreNum:10,
				change1:20,change2:20,changeNew:50,propositionDate:'108/08/09',isVaild:'Y',classType:'品管',pk: 5566, 
			},
			{
				id: 2,className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', propositionSerial: '1090004', versionName: 'KR111', testNum:'80',
				hardestNum:'0',diffcultNum:10,normalNum:20,easyNum:20,coreNum:10,
				change1:20,change2:20,changeNew:50,propositionDate:'111/02/28',isVaild:'Y',classType:'品管',pk: 5566
			},
			{
				id: 3, className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', propositionSerial: '1090010', versionName: 'LL111', testNum:'100',
				hardestNum:5,diffcultNum:20,normalNum:20,easyNum:20,coreNum:20,
				change1:20,change2:20,changeNew:50,propositionDate:'110/03/09',isVaild:'Y',classType:'回訓',pk: 5566
			}
		]
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
<template>
	<div>
		<br>
		<h3><strong><font color="brown">開班期別審核申辦資料</font></strong></h3>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="l" variant="success"  @click="gotoParam('OpenPeriodNoticeQuery',)" >新增</b-button>&nbsp;&nbsp;
			</b-form-row>
			<br>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="開班日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="開班期別" label-align-md="right">
					<b-input></b-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="是否已備查結訓" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="picked"
						:options="options"
						name="radio-options1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="代訓機構是否仍在運作" label-align-md="right">
					<b-form-radio-group
						id="radio-group-3"
						v-model="picked"
						:options="options"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別是否仍在運作" label-align-md="right">
					<b-form-radio-group
						id="radio-group-4"
						v-model="picked"
						:options="options"
						name="radio-options3"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="代訓機構" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別種類" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options2"
						name="radio-options4"
					></b-form-radio-group>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>各開班期別一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('OpenPeriodDetail', row.item)">明細</b-button>&nbsp;
							<!--工程會管理員才有此按鈕、已歸檔不顯示此按鈕-->
							<b-button size="sm" variant="warning" @click="checkIn(row.item)">歸檔</b-button>&nbsp;
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
		options: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'不限',	value:	'C'},
		],
		options2: [
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'C'},
		],
		type: [
			{ value: '', text: '全部' },
			{ value: '0', text: '中原大學' },
			{ value: '1', text: '淡江大學' },
			{ value: '2', text: '中央大學' },
			{ value: '3', text: '成功大學' },
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
				key:	'stageNum',
				label:	'期別'
			},
			{
				key:	'agency',
				label:	'代訓機構/分支單位'
			} ,
			{
				key:	'className',
				label: '訓練主題班別'
			},
			{
				key:	'classType',
				label:	'訓練主題類別'
			},
			{
				key:	'classHour',
				label:	'課程時數'
			},
			{
				key:	'site',
				label:	'訓練地區'
			},
			{
				key:	'openDate',
				label:	'開班日期'
			},
			{
				key:	'endDate',
				label:	'結訓日期'
			},
			{
				key:	'classCondition',
				label:	'開課情況',
				thStyle: { width: "10%" },
			},
			{
				key:	'isBackUp',
				label:	'備查結案'
			},
			{
				key:	'makeUpNum',
				label:	'待補考人數'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "10%" },
			},

			],
		items:	[
			{
				id: 1, stageNum: 'LR11002', agency: '代訓機構主管機關工程會', className: '公共工程品質管理訓練班(機電) 【109年4月起適用】',
				classHour:84,	classType:'品管',	site:'新北市',	openDate:'110/02/08',	endDate: '110/09/08',
				classCondition:'夜間(實體)',	isBackUp:'否',	makeUpNum:1,pk: 5566
			},
			{
				id: 2,stageNum: 'LG11102', agency: '國立屏東科技大學', className: '基礎開挖與品管【109年5月起適用】', 
				classHour:60,	classType:'品管',	site:'新北市',	openDate:'110/03/08',	endDate: '110/09/08',
				classCondition:'假日(視訊)',	isBackUp:'是',	makeUpNum:0,pk: 5566
			},
			{
				id: 3, stageNum: 'ER11101', agency: '中原大學', className: '	公共工程品質管理訓練班(土建) 【109年4月起適用】', 
				classHour:72,	classType:'回訓',	site:'桃園市',	openDate:'110/05/08',	endDate: '110/09/08',
				classCondition:'夜間(視訊)',	isBackUp:'否',	makeUpNum:2,pk: 5566
			}
		]
	}
 },
 methods: {
	checkIn(row){
		confirm("確定是否將該期別歸檔?(後續不能作申請異動) " + row.id);
	},
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
<template>
	<div>
		<br>
		<h3><strong><font color="brown">查詢代訓機構新開班資訊</font></strong></h3>
		<br>
		<b-container >
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
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
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
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>代訓機構開班預告一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('OpeningInfoPublicDetail', row.item)">明細</b-button>&nbsp;
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
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'B'},
		],
		options2: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'不限',	value:	'C'},
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
				key:	'stage',
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
				key:	'city',
				label:	'訓練地區'
			},
			{
				key:	'openingDate',
				label:	'預定開班日期'
			},
			{
				key:	'closeDate',
				label:	'預定結訓日期	'
			},
			{
				key:	'openingPeriod',
				label:	'開課時段',
			},
			{
				key:	'openingType',
				label:	'開課種類',
			},
			{
				key:	'action',
				label:	'',
			},
			],
		items:	[
			{
				id: 1, stage: 'LE11101', agency: '淡江大學', className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', classType:'品管',	city:'台北市',	
				openingDate:'111/03/23',closeDate:'111/09/09',openingPeriod:'夜間',openingType:'實體',	pk: 5566
			},
			{
				id: 2,stage: 'LR11101', agency: '淡江大學', className: '公共工程品質管理訓練班(土建)', classType:'品管',	city:'台北市',	
				openingDate:'111/05/06',closeDate:'111/10/11',openingPeriod:'假日',openingType:'實體',	pk: 5566	},
			{
				id: 3, stage: 'LG11104', agency: '淡江大學', className: '公共工程品質管理訓練班(土建)', classType:'回訓',	city:'台北市',
				openingDate:'111/07/09',closeDate:'111/10/23',openingPeriod:'專案',openingType:'視訊',	pk: 5566
			}
		]
	}
 },
 methods: {
	checkIn(row){
		confirm("確定是否移入教師名冊? " + row.pk);
	},
	checkOut(row){
		confirm("確定是否移出教師名冊?" + row.pk);
	}
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
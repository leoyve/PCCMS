<template>
	<div>
		<br>
		<h3><strong>各主管機關通報案件結案處理天數統計表</strong></h3>
		<br>
		<b-container fluid>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="統計年度" label-align-md="right">
					<b-form-input></b-form-input>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>110年度各主管機關通報案件結案處理天數統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="">
						<template #thead-top>
							<b-tr>
								<b-th colspan="2"></b-th>
								<b-th class="border " variant="secondary" colspan="2">第一季</b-th>
								<b-th class="border border-light " variant="primary" colspan="2">第二季</b-th>
								<b-th class="border border-light " variant="success" colspan="2">第三季</b-th>
								<b-th class="border border-light " variant="info" colspan="2">第四季</b-th>
								<!--平均天數超過兩天紅字?-->
								<b-th class="border border-light " variant="secondary" colspan="5">全年累計</b-th>
							</b-tr>
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
				key:	'season1Num',
				label:	'件數'
			},
			{
				key:	'season1Day',
				label:	'平均天數'
			},
			{
				key:	'season2Num',
				label:	'件數'
			},
			{
				key:	'season2Day',
				label:	'平均天數'
			},
			{
				key:	'season3Num',
				label:	'件數'
			},
			{
				key:	'season3Day',
				label:	'平均天數'
			},
			{
				key:	'season4Num',
				label:	'件數'
			},
			{
				key:	'season4Day',
				label:	'平均天數'
			},
			{
				key:	'allNum',
				label:	'件數'
			},
			{
				key:	'allDay',
				label:	'平均天數'
			},
			{
				key:	'allStand',
				label:	'標準偏差天數'
			},
			{
				key:	'allMaxDay',
				label:	'最大天數'
			},
			{
				key:	'allMinDay',
				label:	'最小天數'
			},

		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', season1Num: '5', season1Day: '1.5',	season2Num: '17',	season2Day: '5', season3Num:'',	season3Day:'',
				season4Num:	'',	season4Day:	'',	allNum:'20',	allDay:'2.00',	allStand:'1.65',	allMaxDay:'2', 	allMinDay:'0',	pk: 5566 },
			{ id: 2, wkut: '教育部', season1Num: '1', season1Day: '1.0',	season2Num: '1',	season2Day: '1.00', season3Num:'',	season3Day:'',
				season4Num:	'',	season4Day:	'',	allNum:'3',	allDay:'1.00',	allStand:'0.00',	allMaxDay:'1.00', 	allMinDay:'1.00',	pk: 5566 },
			{ id: 3, wkut: '屏東縣政府', season1Num: '9', season1Day: '2.0',	season2Num: '',	season2Day: '', season3Num:'',	season3Day:'',
				season4Num:	'',	season4Day:	'',	allNum:'9',	allDay:'2.00',	allStand:'2.16',	allMaxDay:'8.00', 	allMinDay:'1.00',	pk: 5566 },
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
<template>
	<div>
		<br>
		<h3><strong>公共工程標案及督工通報案件施工廠商整體履約計分比較表</strong></h3>
		<br>
		<b-container fluid>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="完工起迄日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="決標金額(千元)" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-input/></b-col>~
							<b-col><b-input/></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報主題搜尋關鍵字" label-align-md="right">
					<b-input/>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報內容" label-align-md="right">
					<b-form-checkbox-group
						v-model="selected"
						:options="checkOptions"
						class="mb-2"
						value-field="item"
						text-field="name"
						disabled-field="notEnabled"
						name="flavour-1a"
						inline
					></b-form-checkbox-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件有效性" label-align-md="right">
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>公共工程標案及督工通報案件施工廠商整體履約計分比較表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table-simple hover small caption-top responsive border>
						<b-thead head-variant="dark">
							<b-tr>
								<b-th width="30%">計分項目</b-th>
								<b-th width="10%">公共工程標案</b-th>
								<b-th width="10%">督工通報案件</b-th>
								<b-th width="30%">計分大項</b-th>
								<b-th width="10%">公共工程標案</b-th>
								<b-th width="10%">督工通報案件</b-th>
							</b-tr>
						</b-thead>
						<b-tbody>
							<b-tr>
								<b-th class="align-middle">提前竣工加分</b-th>
								<b-th class="align-middle">.686	</b-th>
								<b-th class="align-middle">.689	</b-th>
								<b-th class="align-middle text-left" rowspan="2">工期</b-th>
								<b-th class="align-middle" rowspan="2">.513</b-th>
								<b-th class="align-middle" rowspan="2">.548</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">逾期竣工減分</b-th>
								<b-th class="align-middle">-.173</b-th>
								<b-th class="align-middle">-.141</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">替代方案加分</b-th>
								<b-th class="align-middle">.032</b-th>
								<b-th class="align-middle">.034</b-th>
								<b-th class="align-middle text-left" rowspan="2">履約成本及違約金</b-th>
								<b-th class="align-middle" rowspan="2">-.046</b-th>
								<b-th class="align-middle" rowspan="2">-3.15</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">違約金減分</b-th>
								<b-th class="align-middle">-.078</b-th>
								<b-th class="align-middle">-.349</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">驗收加分</b-th>
								<b-th class="align-middle">1.513</b-th>
								<b-th class="align-middle">1.18</b-th>
								<b-th class="align-middle text-left" rowspan="9">施工品質</b-th>
								<b-th class="align-middle" rowspan="9">1.472</b-th>
								<b-th class="align-middle" rowspan="9">1.527</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">驗收減分</b-th>
								<b-th class="align-middle">-.06</b-th>
								<b-th class="align-middle">-.18</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">施工作業減分</b-th>
								<b-th class="align-middle">-.102</b-th>
								<b-th class="align-middle">-.269</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">施工查核加分</b-th>
								<b-th class="align-middle">.13</b-th>
								<b-th class="align-middle">.763</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">施工查核減分</b-th>
								<b-th class="align-middle">-.001</b-th>
								<b-th class="align-middle">-.006</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">專任工程人員加分</b-th>
								<b-th class="align-middle">-.076</b-th>
								<b-th class="align-middle">.103</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">專任工程人員減分</b-th>
								<b-th class="align-middle">-.105</b-th>
								<b-th class="align-middle">-.201</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">技術士加分</b-th>
								<b-th class="align-middle">.011</b-th>
								<b-th class="align-middle">.066</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">品質獲獎加分</b-th>
								<b-th class="align-middle">.01</b-th>
								<b-th class="align-middle">.08</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">勞安獲獎加分</b-th>
								<b-th class="align-middle">.003</b-th>
								<b-th class="align-middle">.014</b-th>
								<b-th class="align-middle text-left" rowspan="4">安衛環保</b-th>
								<b-th class="align-middle" rowspan="4">2.22</b-th>
								<b-th class="align-middle" rowspan="4">4.606</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">無職災加分</b-th>
								<b-th class="align-middle">1.111</b-th>
								<b-th class="align-middle">2.323</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">發生職災減分</b-th>
								<b-th class="align-middle">-.004</b-th>
								<b-th class="align-middle">-.031</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">環保加分</b-th>
								<b-th class="align-middle">1.11</b-th>
								<b-th class="align-middle">2.3</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">民眾通報加分</b-th>
								<b-th class="align-middle">.796</b-th>
								<b-th class="align-middle">.862</b-th>
								<b-th class="align-middle text-left" rowspan="2">反映及停權</b-th>
								<b-th class="align-middle" rowspan="2">.781</b-th>
								<b-th class="align-middle" rowspan="2">.835</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle">停權減分</b-th>
								<b-th class="align-middle">-.015</b-th>
								<b-th class="align-middle">-.027</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle" colspan="4">停權減分</b-th>
								<b-th class="align-middle">81.887</b-th>
								<b-th class="align-middle">84.054</b-th>
							</b-tr>
							<b-tr>
								<b-th class="align-middle" colspan="4">件數</b-th>
								<b-th class="align-middle">51594</b-th>
								<b-th class="align-middle">268</b-th>
							</b-tr>
						</b-tbody>
					</b-table-simple>
				</b-form-row>
			</b-container>
			<br>
		</div>
	</div>
</template>

<script>

export default {
 data(){
	return{

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
				key:	'caseTotalA',
				label:	'通報案件總項數(A)'
			},
			{
				key:	'closeCaseB',
				label:	'結案項數'
			},
			{
				key:	'closeCaseRate',
				label:	'結案比例(B/A)'
			},
			{
				key:	'avgDay',
				label:	'處理天數平均值'
			},
			{
				key:	'avgStandDay',
				label:	'處理天數標準偏差值'
			},
			{
				key:	'delayNum',
				label:	'結案-逾期項數'
			},
			{
				key:	'nonClose',
				label:	'未結案項數(C)'
			},
			{
				key:	'nonCloseRate',
				label:	'未結案比例(C/A)'
			},
			{
				key:	'delayNum2',
				label:	'未結案-逾期項數'
			},
			{
				key:	'action',
				label:	''
			},

		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', caseTotalA: '5', closeCaseB: '5',	closeCaseRate: '100.00',	avgDay: '3.76', avgStandDay:	'5.23',	delayNum:'2',
				nonClose:	'1',	nonCloseRate:	'50.00',	delayNum2:'',	pk: 5566 },
			{ id: 2, wkut: '台中市政府', caseTotalA: '5', closeCaseB: '5',	closeCaseRate: '100.00',	avgDay: '3.76', avgStandDay:	'5.23',	delayNum:'',
				nonClose:	'',	nonCloseRate:	'',	delayNum2:'',	pk: 5566 },
			{ id: 3, wkut: '新北市政府', caseTotalA: '5', closeCaseB: '5',	closeCaseRate: '100.00',	avgDay: '3.76', avgStandDay:	'5.23',	delayNum:'2',
				nonClose:	'',	nonCloseRate:	'',	delayNum2:'',	pk: 5566 },
		],
		checkOptions: [
			{	name:	'規劃設計不周',	item:	'1', },
			{	name:	'工程品質不良',	item:	'2',  },
			{	name:	'安全措施不足',	item:	'3',  },
			{	name:	'環境設施不佳',	item:	'3',  },
			{	name:	'工程進度緩慢',	item:	'3',  },
			{	name:	'其他',	item:	'3',  },
		],
		checkClosed:	[
			{	value: '', text: '有效'	},
			{	value: 'N', text: '無效(不納入統計)'	},
			{	value: 'E', text: '全部'	},
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
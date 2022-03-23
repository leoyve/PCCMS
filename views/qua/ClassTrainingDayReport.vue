<template>
	<div>
		<br>
		<h3><strong><font color="brown">品管班訓練期程天數統計</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="起訖日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container fluid>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>品管班訓練期程統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
						<template #thead-top>
							<b-tr>
								<b-th colspan="3"></b-th>
								<b-th class="border " variant="secondary" colspan="4">訓練期程天數</b-th>
								<b-th class="border border-light " variant="primary" colspan="5">訓練期程班數</b-th>
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
				key:	'stageNum',
				label:	'開班期數'
			},
			{
				key:	'avg',
				label:	'平均值',
				thStyle: { width: "8%" },
			} ,
			{
				key:	'standard',
				label: 	'標準偏差值',
				thStyle: { width: "8%" },
			}, 
			{
				key:	'minimum',
				label:	'最小值',
				thStyle: { width: "8%" },
			},
			{
				key:	'maximum',
				label:	'最大值',
				thStyle: { width: "8%" },
			},
			{
				key:	'interval1',
				label:	'<=45天',
				thStyle: { width: "8%" },
			},
			{
				key:	'interval2',
				label:	'>45天;<=60天',
				thStyle: { width: "8%" },
			},
			{
				key:	'interval3',
				label:	'>60天;<=90天',
				thStyle: { width: "8%" },
			},
			{
				key:	'interval4',
				label:	'>90天;<=120天',
				thStyle: { width: "8%" },
			},
			{
				key:	'interval5',
				label: 	'>120天',
				thStyle: { width: "8%" },
			},
		],
		items:	[
			{
				id: '1',	agency: '中原大學', stageNum:'7',	avg: '49.00', standard: '0.00', minimum:'32',	maximum:'32',
				interval1:'',	interval2:'12',	interval3:'',	interval4:'',	interval5:'',	pk: 5566
			},
			{
				id: '2',	agency: '淡江大學學校財團法人淡江大學', stageNum:'4',	avg: '60.69', standard: '20.46', minimum:'8',	maximum:'99',
				interval1:'11',	interval2:'',	interval3:'48',	interval4:'',	interval5:'',	pk: 5566
			},
			{
				id: '3', 	agency: '國立中央大學', stageNum:'11',	avg: '72.33', standard: '3.30	', minimum:'12',	maximum:'45',
				interval1:'',	interval2:'12',	interval3:'24',	interval4:'',	interval5:'',	pk: 5566
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
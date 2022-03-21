<template>
	<div>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>品管班參訓學員期末測驗通過人數統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
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
				key:	'participants',
				label:	'參加測驗人數',
				thStyle: { width: "10%" },
			} ,
			{
				key:	'passNum',
				label: 	'通過測驗人數',
				thStyle: { width: "10%" },
			}, 
			{
				key:	'passRate',
				label:	'通過百分比',
				thStyle: { width: "10%" },
			},
			{
				key:	'stageNum',
				label:	'開班期數',
				thStyle: { width: "10%" },
			},
			{
				key:	'passAvgRate',
				label:	'各期通過百分比平均值',
				thStyle: { width: "10%" },
			} ,
			{
				key:	'passStandRate',
				label: 	'各期通過百分比標準偏差值',
				thStyle: { width: "10%" },
			},
		],
		items:	[
			{
				id: '1',	agency: '中原大學', participants: '234', passNum: '232', passRate:'91.23',	
				stageNum:'7',	passAvgRate:'92.32',	passStandRate:'3.12',	pk: 5566
			},
			{
				id: '2',	agency: '淡江大學學校財團法人淡江大學', participants: '190', passNum: '174', passRate:'88.43',	
				stageNum:'4',	passAvgRate:'90.11',	passStandRate:'2.89',	pk: 5566
			},
			{
				id: '3', 	agency: '國立中央大學', participants: '321', passNum: '311', passRate:'93.21',	
				stageNum:'8',	passAvgRate:'92.13',	passStandRate:'7.35',	pk: 5566
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
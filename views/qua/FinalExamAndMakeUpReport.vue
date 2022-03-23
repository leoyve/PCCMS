<template>
	<div>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="統計種類" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>品管班參訓學員期末測驗及補考通過人數統計表</strong></h4></b-form-row>
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
				key:	'stageNum',
				label:	'開班期數'
			},
			{
				key:	'fParticipants',
				label:	'測驗人數'
			} ,
			{
				key:	'fPassNum',
				label: 	'通過測驗人數'
			}, 
			{
				key:	'fPassRate',
				label:	'通過百分比'
			},
			{
				key:	'participants1',
				label:	'測驗人數'
			} ,
			{
				key:	'passNum1',
				label: 	'通過測驗人數'
			}, 
			{
				key:	'passRate1',
				label:	'通過百分比'
			},
			{
				key:	'participants2',
				label:	'測驗人數'
			} ,
			{
				key:	'passNum2',
				label: 	'通過測驗人數'
			}, 
			{
				key:	'passRate2',
				label:	'通過百分比'
			},
			{
				key:	'participantsTotal',
				label:	'測驗人數'
			} ,
			{
				key:	'passNumTotal',
				label: 	'通過測驗人數'
			}, 
			{
				key:	'passRateTotal',
				label:	'通過百分比'
			},
			
		],
		items:	[
			{
				id: '1',agency: '中原大學', stageNum:'7',fParticipants: '234', fPassNum: '232', fPassRate:'91.23',	participants1: '234', passNum1: '232', passRate1:'91.23',
				participants2: '234', passNum2: '232', passRate2:'91.23',	participantsTotal: '234', passNumTotal: '232', passRateTotal:'91.23',pk: 5566
			},
			{
				id: '2',agency: '中原大學', stageNum:'8',fParticipants: '234', fPassNum: '232', fPassRate:'91.23',	participants1: '234', passNum1: '232', passRate1:'91.23',
				participants2: '234', passNum2: '232', passRate2:'91.23',	participantsTotal: '234', passNumTotal: '232', passRateTotal:'91.23',pk: 5566
			},
			{
				id: '3',agency: '中原大學', stageNum:'4',fParticipants: '234', fPassNum: '232', fPassRate:'91.23',	participants1: '234', passNum1: '232', passRate1:'91.23',
				participants2: '234', passNum2: '232', passRate2:'91.23',	participantsTotal: '234', passNumTotal: '232', passRateTotal:'91.23',pk: 5566
			}
		],
		options: [
			{	text:	'開訓',	value:	'A'},
			{	text:	'結訓',	value:	'B'},
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
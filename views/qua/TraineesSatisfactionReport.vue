<template>
	<div>
		<br>
		<h3><strong><font color="brown">訓練主題班別學員滿意度調查</font></strong></h3>
		<br>
		<b-container >
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
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="開班起訖日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
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
				<!--帶入選項值-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}學員滿意度調查統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('TraineesSatisfactionList', row.item)">檢視</b-button>
						</template>
						<template #custom-foot>
							<b-tr>
								<b-th colspan="2">合計</b-th>
								<b-th >10</b-th>
								<b-th >232</b-th>
								<b-th >100</b-th>
								<b-th >18.42</b-th>
								<b-th >18.52</b-th>
								<b-th >18.48</b-th>
								<b-th >18.41</b-th>
								<b-th >18.43</b-th>
								<b-th >92.27</b-th>
								<b-th ><b-button size="sm" variant="outline-secondary" @click="gotoParam('TraineesSatisfactionList', '')">檢視</b-button></b-th>
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
		options: [
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'B'},
		],
		type: [
			{ value: '', text: '全部'},
			{ value: '0', text: '土木工程品管案例研討【109年5月起適用】' },
			{ value: '1', text: '基礎開挖與品管【109年5月起適用】' },
			{ value: '2', text: '推進工程與工務行政【109年5月起適用】' },
		],
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
				key:	'classNum',
				label:	'開班數'
			} ,
			{
				key:	'participateNum',
				label:	'參訓人數'
			},
			{
				key:	'fillOpinionNum',
				label: 	'填寫意見表人數'
			}, 
			{
				key:	'scoreTRA',
				label:	'對本次訓練整體滿意度平均得分',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreSA',
				label:	'對代訓機構行政服務平均得分',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreFA',
				label:	'對代訓機構教學設施平均得分',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreTTA',
				label:	'對講師授課內容平均得分',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreCA',
				label:	'對訓練遴聘之講師平均得分',
				thStyle: { width: "8%" },
			},
			{
				key:	'scoreAT',
				label:	'總平均得分	',
				thStyle: { width: "8%" },
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{
				id: '1',	agency: '國立中央大學', classNum: '3', participateNum: '133', fillOpinionNum:'89',
				scoreTRA:'17.19',	scoreSA:'17.36',	scoreFA:'17.34',	scoreTTA:'17.36',	scoreCA:'17.41',	scoreAT:'86.66',pk: 5566
			},
			{
				id: '2',	agency: '淡江大學', classNum: '4', participateNum: '88', fillOpinionNum:'23',
				scoreTRA:'18.64',	scoreSA:'18.74',	scoreFA:'18.67',	scoreTTA:'18.54',	scoreCA:'18.54',	scoreAT:'93.13',pk: 5566
			},
			{
				id: '3', 	agency: '行政院工程委員會', classNum: '1', participateNum: '65', fillOpinionNum:'15',
				scoreTRA:'20.00',	scoreSA:'20.00',	scoreFA:'20.00',	scoreTTA:'20.00',	scoreCA:'20.00',	scoreAT:'100.00',pk: 5566
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
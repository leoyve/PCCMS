<template>
	<div>
		<br>
		<h3><strong><font color="brown">訓練主題班別結訓人數</font></strong></h3>
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
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<!--帶入選項值-->
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}訓練主題班別結訓人數</strong></h4></b-form-row>
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
		options: [
			{	text:	'全部',	value:	'A'},
			{	text:	'品管',	value:	'B'},
			{	text:	'回訓',	value:	'B'},
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
				key:	'className',
				label:	'訓練主題班別'
			},
			{
				key:	'classHours',
				label: '課程時數'
			}, 
			{
				key:	'stageNum',
				label: 	'開班期數'
			}, 
			{
				key:	'participateNum',
				label:	'參訓人數'
			},
			{
				key:	'endTrainingNum',
				label:	'結訓人數'
			},
			{
				key:	'qualifiedNum',
				label:	'合格人數'
			},
		],
		items:	[
			{
				id: '1',	agency: '中原大學', className: '基礎開挖與品管【109年5月起適用】', classHours: '36', 
				stageNum:'4',	participateNum:'144',	endTrainingNum:'132',qualifiedNum:'132',pk: 5566
			},
			{
				id: '2',	agency: '淡江大學', className: '機電設備工程實務【109年5月起適用】', classHours: '36', 
				stageNum:'1',	participateNum:'86',	endTrainingNum:'',qualifiedNum:'132',pk: 5566
			},
			{
				id: '3', 	agency: '經濟部國營事業委員會(台電訓練所)', className: '橋樑隧道工程設計施工品質暨安全', classHours: '36', 
				stageNum:'8',	participateNum:'66',	endTrainingNum:'58',qualifiedNum:'57',pk: 5566
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
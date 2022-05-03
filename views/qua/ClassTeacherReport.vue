<template>
	<div>
		<br>
		<h3><strong><font color="brown">訓練主題班別師資統計</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="查詢類別" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="開訓期間" label-align-md="right">
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}訓練主題班別一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('ClassTeacherTimesList', row.item)">檢視</b-button>
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
			{	text:	'品管班',	value:	'A'},
			{	text:	'回訓班',	value:	'B'},
		],
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'agency',
				label:	'代訓機構'
			},
			{
				key:	'className',
				label:	'訓練主題班別'
			} ,
			{
				key:	'classHour',
				label: 	'課程時數'
			}, 
			{
				key:	'stageNum',
				label:	'開班期數	'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{
				id: 1, agency: '中原大學', className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', classHour: '84', stageNum:'6',pk: 5566
			},
			{
				id: 2,	agency: '淡江大學學校財團法人淡江大學', className: '公共工程品質管理訓練班(機電) 【109年4月起適用】', classHour: '36', stageNum:'3',pk: 5566
			},
			{
				id: 3, agency: '國立中央大學', className: '基礎開挖與品管【109年5月起適用】', classHour: '72', stageNum:'7',pk: 5566
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
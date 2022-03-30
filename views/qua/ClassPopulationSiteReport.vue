<template>
	<div>
		<br>
		<h3><strong><font color="brown">開班人數地區統計表</font></strong></h3>
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
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="代訓機構" label-align-md="right">
					<b-form-select :options="agencyType"></b-form-select>
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
			<b-form-row>
				<!--根據查詢類別替換這個選單-->
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="訓練主題班別" label-align-md="right">
					<b-form-select :options="classType"></b-form-select>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>品管班開班及人數統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('ClassPopulationReportD1', row.item)">明細</b-button>
						</template>
						<template #custom-foot>
							<b-tr>
								<b-th colspan="2">總計</b-th>
								<b-th >356</b-th>
								<b-th >7987</b-th>
								<b-th >121</b-th>
								<b-th >5643</b-th>
								<b-th >3241</b-th>
								<b-th >92%</b-th>
								<b-th ><b-button size="sm" variant="outline-secondary" @click="gotoParam('ClassPopulationReportD1', row.item)">明細</b-button></b-th>
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
				key:	'site',
				label:	'訓練地區'
			},
			{
				key:	'totalOpening',
				label:	'開班期數'
			} ,
			{
				key:	'joinPopulation',
				label: 	'參訓人數'
			}, 
			{
				key:	'totalClose',
				label:	'結訓期數'
			},
			{
				key:	'closePopulation',
				label:	'結訓人數(A)'
			},
			{
				key:	'qualifiedNum',
				label:	'合格人數(B)'
			},
			{
				key:	'qualifiedRate',
				label:	'合格率(B/A)'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{
				id: 1, site: '新北市', totalOpening: '80', joinPopulation: '2312', totalClose:'44',	closePopulation:'1423',	qualifiedNum:'780',	qualifiedRate:'89%',	pk: 5566
			},
			{
				id: 2,	site: '宜蘭縣', totalOpening: '112', joinPopulation: '4567', totalClose:'80',	closePopulation:'3578',	qualifiedNum:'2344',	qualifiedRate:'99.5%',	pk: 5566
			},
			{
				id: 3, site: '桃園市', totalOpening: '	20', joinPopulation: '897', totalClose:'12',	closePopulation:'456',	qualifiedNum:'324',	qualifiedRate:'90%',	pk: 5566
			}
		],
		agencyType: [
			{ value: '', text: '全部' },
			{ value: '0', text: '中原大學' },
			{ value: '1', text: '淡江大學' },
			{ value: '2', text: '中央大學' },
			{ value: '3', text: '成功大學' },
		],
		classType: [
			{ value: '', text: '全部' },
			{ value: '0', text: '公共工程品質管理訓練班(機電)' },
			{ value: '1', text: '工程會回訓班' },
			{ value: '2', text: '土木工程-材料實驗' },
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
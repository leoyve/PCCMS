<template>
	<div>
		<br>
		<h3><strong><font color="brown">品管暨回訓班性別統計表</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="統計時間" label-align-md="right">
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>品管班性別統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
					</b-table>
				</b-form-row>
			</b-container>
		</div>

		<div>
			<b-container >
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>回訓班性別統計表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items2" :fields="fields2" >
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
				key:	'classNum',
				label:	'品管班總數',
			},
			{
				key:	'classMNum',
				label:	'品管班男性人數'
			},
			{
				key:	'mRate',
				label:	'百分比'
			} ,
			{
				key:	'classFNum',
				label: 	'品管班女性人數'
			}, 
			{
				key:	'fRate',
				label:	'百分比'
			},
		],
		items:	[
			{
				classNum: '3865',	classMNum: '2576', mRate: '65%', classFNum: '2234', fRate:'45%',	pk: 5566
			},
		],

		fields2: [
			{
				key:	'classNum',
				label:	'回訓班總數',
			},
			{
				key:	'classMNum',
				label:	'品管班男性人數'
			},
			{
				key:	'mRate',
				label:	'百分比'
			} ,
			{
				key:	'classFNum',
				label: 	'品管班女性人數'
			}, 
			{
				key:	'fRate',
				label:	'百分比'
			},
		],
		items2:	[
			{
				classNum: '6532',	classMNum: '5267', mRate: '75%', classFNum: '3245', fRate:'25%',	pk: 5566
			},
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
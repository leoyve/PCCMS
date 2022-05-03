<template>
	<div>
		<br>
		<h3><strong><font color="brown">歷年學員回訓情形統計表</font></strong></h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="代訓機構" label-align-md="right">
					<b-form-select :options="agencyType"></b-form-select>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>歷年結業學員回訓情形統計</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" >
						<template #thead-top>
							<b-tr>
								<b-th></b-th>
								<b-th class="border border-light" variant="secondary" colspan="4">品管</b-th>
								<b-th class="border border-light " variant="primary" colspan="4">回訓</b-th>		
							</b-tr>
						</template>
						<template #custom-foot>
							<b-tr>
								<b-th >合計</b-th>
								<b-th >1345</b-th>
								<b-th >213</b-th>
								<b-th >134</b-th>
								<b-th >34</b-th>
								<b-th >1143</b-th>
								<b-th >211</b-th>
								<b-th >47</b-th>
								<b-th >612</b-th>
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
				key:	'year',
				label:	'年度',
			},
			{
				key:	'qClosePopulation',
				label:	'結業人數'
			},
			{
				key:	'qmPopulation',
				label:	'於本機構繼續回訓人數'
			} ,
			{
				key:	'qoPopulation',
				label: 	'於其他機構繼續回訓人數'
			}, 
			{
				key:	'qnPopulation',
				label:	'未繼續回訓人數'
			},
			{
				key:	'bClosePopulation',
				label:	'結業人數'
			},
			{
				key:	'bmPopulation',
				label:	'於本機構繼續回訓人數'
			} ,
			{
				key:	'boPopulation',
				label: 	'於其他機構繼續回訓人數'
			}, 
			{
				key:	'bnPopulation',
				label:	'未繼續回訓人數'
			},
		],
		items:	[
			{
				year: '110',	qClosePopulation: '571', qmPopulation: '80', qoPopulation: '23', qnPopulation:'5',	
				bClosePopulation:'232',	bmPopulation:'22',	boPopulation:'0',	bnPopulation:'121',	pk: 5566
			},
			{
				year: '109',	qClosePopulation: '456', qmPopulation: '112', qoPopulation: '44', qnPopulation:'13',	
				bClosePopulation:'444',	bmPopulation:'52',	boPopulation:'4',	bnPopulation:'231',	pk: 5566
			},
			{
				year: '108', 	qClosePopulation: '223', qmPopulation: '20', qoPopulation: '52', qnPopulation:'8',	
				bClosePopulation:'533',	bmPopulation:'133',	boPopulation:'43',	bnPopulation:'222',	pk: 5566
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
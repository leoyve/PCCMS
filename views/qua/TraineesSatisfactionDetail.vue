<template>		
	<div>
		<br>
		<br>
		<b-container fluid>
			<!--帶入選項值-->
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>{{picked}}學員滿意度調查 (期別：{{this.$route.params.period}})</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" >
					<template #cell(avg)="row">
						{{((row.item.SA*20 + row.item.SB*16 + row.item.SC*12 + row.item.SD*8 + row.item.SE*4)/
						(row.item.SA+row.item.SB+row.item.SC+row.item.SD+row.item.SE)).toFixed(2)}}
					</template>
					<template #custom-foot>
							<b-tr>
								<b-th colspan="6">總平均</b-th>
								<b-th >95.87</b-th>
							</b-tr>
						</template>
				</b-table>
			</b-form-row>
		</b-container>

		<br>
		<br>
		<b-container fluid>
			<b-table striped hover :items="items2" :fields="fields2" head-variant="dark">
				<template #cell(action)="row">
					<b-button size="sm" variant="success" @click="gotoParam('OpinionEdit', {updateFlag:true, ...row.item})">編輯</b-button>
				</template>
			</b-table>
		</b-container>
		<br>
		<br>
		<b-container class="border border-dark" fluid>
			<b-form-row class="border  border-dark bg-primary row justify-content-center text-light "><h3>未填意見表學員名單</h3></b-form-row>
			<b-form-row class="border  border-dark text-warning"><h4>王XX、林XX、陳XX</h4></b-form-row>
		</b-container>
	</div>
</template>


<script>


export default {
 data(){
	return{
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'item',
				label:	'項目',
			},
			{
				key:	'SA',
				label:	'非常滿意(20分)人數'
			},
			{
				key:	'SB',
				label:	'滿意(16分)人數'
			},
			{
				key:	'SC',
				label: 	'普通(12分)人數'
			}, 
			{
				key:	'SD',
				label:	'不滿意(8分)人數',
				thStyle: { width: "8%" },
			},
			{
				key:	'SE',
				label:	'非常不滿意(4分)人數',
				thStyle: { width: "8%" },
			},
			{
				key:	'avg',
				label:	'平均得分',
				thStyle: { width: "8%" },
			},
		],
		items:	[
			{
				item: '對本次訓練整體滿意度',	SA: 11, SB: 3, SC:6,	SD:4,	SE:1,	pk: 5566
			},
			{
				item: '對代訓機構教學設施',	SA: 28, SB: 3, SC:0,	SD:0,	SE:0,	pk: 5566
			},
			{
				item: '對代訓機構行政服務', SA: 26, SB: 5, SC:0,	SD:0,	SE:0,	pk: 5566
			},
			{
				item: '對講師授課內容',	SA: 22, SB: 9, SC:0,	SD:0,	SE:0,	pk: 5566
			},
			{
				item: '對訓練遴聘之講師',	SA: 22, SB: 9, SC:0,	SD:0,	SE:0,	pk: 5566
			}
		],
		fields2: [
			{
				key:	'opinion',
				label:	'建議與意見',
				thStyle: { width: "70%" },
			},
			{
				key:	'tel',
				label:	'聯絡電話'
			},
			{
				key:	'action',
				label:	'',
				
			},
		],
		items2:	[
			{
				opinion: '助理老師幫忙非常多，老師也非常專業，是我回訓的首選',	tel:'09XXXXXXXX',	pk: 5566
			},
			{
				opinion: '上課課程與實務非常容合',	tel:'',pk: 5566
			},
			{
				opinion: '老師上課很仔細，上課內容很豐富！ 回訓中心人員很細心講解！',tel:'',	pk: 5566
			},
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
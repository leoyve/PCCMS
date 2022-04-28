<template>
	<div>
		<br>
		<h3>重點防汛工程標案施工進度及查核情形統計</h3>
		<br>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="歸屬計畫" label-align-md="right">
					<b-form-radio-group	id="radio-group-1"	v-model="picked" name="radio-options">
						<b-form-radio>流域綜合治理計畫</b-form-radio>
						<b-form-radio>曾文南化及烏山頭水庫整體治理計畫</b-form-radio>
						<b-form-radio >歷年風災復建</b-form-radio>
						<b-form-radio >其他</b-form-radio>
					</b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="統計起訖日期" label-align-md="right">
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
				<b-form-row class="row justify-content-center bg-primary text-light">
					<h3>年度重點防汛工程標案施工進度及查核情形統計一覽表</h3>
				</b-form-row>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields">
						<template #thead-top>
							<b-tr>
								<b-th colspan="4"></b-th>
								<b-th class="border " variant="secondary" colspan="5">施工中</b-th>
								<b-th class="border border-light " variant="primary" colspan="6">查核總計</b-th>
							</b-tr>
						</template>
						<template #custom-foot >
							<b-tr variant="secondary">
								<b-th variant="secondary" colspan="2">合計</b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >39</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >0</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >39</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >1</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >0</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >3</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >0</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >0</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >0</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >0</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >0</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >0</a></b-th>
								<b-th ><a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >0</a></b-th>
							</b-tr>
						</template>
						<template #cell(report)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >{{row.item.reportNum}}</a>
						</template>
						<template #cell(finish)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >{{row.item.finishNum}}</a>
						</template>
						<template #cell(inWork)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >{{row.item.inWorkNum}}</a>
						</template>
						<template #cell(after5)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >{{row.item.after5Num}}</a>
						</template>
						<template #cell(nonSubmit)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >{{row.item.nonSubmitNum}}</a>
						</template>
						<template #cell(stop)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >{{row.item.stopNum}}</a>
						</template>
						<template #cell(cancel)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckDetail', row.item)" >{{row.item.cancelNum}}</a>
						</template>
						<template #cell(rateAPlus)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >{{row.item.rateAPlusNum}}</a>
						</template>
						<template #cell(rateA)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >{{row.item.rateANum}}</a>
						</template>
						<template #cell(rateB)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >{{row.item.rateBNum}}</a>
						</template>
						<template #cell(rateC)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >{{row.item.rateCNum}}</a>
						</template>
						<template #cell(noInclude)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >{{row.item.noIncludeNum}}</a>
						</template>
						<template #cell(total)="row">
							<a href="#" variant="primary" @click="gotoParam('FloCheckRateDetail', row.item)" >{{row.item.totalNum}}</a>
						</template>
					</b-table>
				</b-form-row>
				<b-form-row class="row justify-content-end">
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
		rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key: 'wkut',
				label:	'主管機關'
			},
			{
				key:	'report',
				label:	'提報件數'
			},
			{
				key:	'finish',
				label: '完工件數'
			}, 
			{
				key:	'inWork',
				label:	'件數'
			}, 
			{
				key:	'after5',
				label:	'進度落後5%以上'
			}, 
			{
				key:	'nonSubmit',
				label:	'最新進度未填'
			}, 
			{
				key:	'stop',
				label:	'停工中'
			}, 
			{
				key:	'cancel',
				label:	'已解約'
			},
			{
				key:	'rateAPlus',
				label:	'查核優等'
			},
			{
				key:	'rateA',
				label:	'查核甲等'
			},
			{
				key:	'rateB',
				label:	'查核乙等'
			},
			{
				key:	'rateC',
				label:	'查核丙等'
			},
			{
				key:	'noInclude',
				label:	'查核不計分'
			},
			{
				key:	'total',
				label:	'合計'
			},
		],
		items:	[
			{	wkut:'行政院公共工程委員會',reportNum:0,finishNum:0,inWorkNum:0,after5Num:0,nonSubmitNum:0,stopNum:0,cancelNum:0,
				rateAPlusNum:0,rateANum:0,rateBNum:0,rateCNum:0,noIncludeNum:0,totalNum:0},
			{	wkut:'宜蘭縣政府',reportNum:1,finishNum:0,inWorkNum:1,after5Num:0,nonSubmitNum:0,stopNum:0,cancelNum:0,
				rateAPlusNum:0,rateANum:0,rateBNum:0,rateCNum:0,noIncludeNum:0,totalNum:0},
			{	wkut:'新竹縣政府',reportNum:8,finishNum:0,inWorkNum:8,after5Num:0,nonSubmitNum:0,stopNum:3,cancelNum:0,
				rateAPlusNum:0,rateANum:0,rateBNum:0,rateCNum:0,noIncludeNum:0,totalNum:0},
		]
	}
 },
 methods: {
	queryHandler(){
	},
	reset(){

	},
	alertMsg(){
		confirm("年度系統重點防汛工程共:40件，年度事件共:5件，是否轉入備查資料?");
	}
 },
	mounted(){
		this.items.forEach((items, index) => { items.serial = index + 1; });
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
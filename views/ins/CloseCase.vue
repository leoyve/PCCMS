<template>
	<div>
		<br>
		<h3><strong>申請結案</strong></h3>
		<br>
		<b-container fluid>
			<b-form-row class="justify-content-end">
				<!--新增按鈕民眾滿意度調查記錄(全都看的到)，讓機關可以進去回應，申請結案的時候幫他檢查這邊有沒有回覆-->
				<b-button size="sm" variant="success" @click="gotoParam('SatisfactionList')" >民眾滿意度調查</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="gotoParam('CaseInfoEdit')" >回上一頁</b-button>
			</b-form-row>
			<b-form-row class="justify-content-start">
				<h5><font color='red'>請先就民眾滿意度調查紀錄資料中，表示不滿意、很不滿意或非常不滿意之原因，填寫回應說明。</font></h5>
			</b-form-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">工程名稱</b-col>
				<b-col class="col-md-6 text-left"><b-form-input></b-form-input></b-col>
				<b-col class="col-md-4 text-left"><b-button size="sm" variant="info" @click="aa">查詢所屬標案</b-button></b-col>
			</b-row>
			<!-- 處理機關(由登入的使用者機關待入)-->
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">申請機關</b-col>
				<b-col class="col-md-8 text-left">行政院公共工程委員會</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">限辦日期</b-col>
				<b-col class="col-md-8 text-left">110年04月12日</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">結案日期</b-col>
				<b-col class="col-md-8 text-left"><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">逾期結案原因說明<font color="red">(逾期結案必填)</font></b-col>
				<b-col class="col-md-8 text-left"><b-form-textarea></b-form-textarea></b-col>
			</b-row>
			<!-- 首次申請不顯示 針對上次不同意結案理由之說明 -->
			<b-row class="border border-dark" v-show="true">
				<b-col class="col-md-2 ">針對上次不同意結案理由之說明<font color="red">(首次申請免填)</font></b-col>
				<b-col class="col-md-8 text-left"><b-form-textarea></b-form-textarea></b-col>
			</b-row>
			<b-row class="border border-dark" v-show="true">
				<b-col class="col-md-2 "><font color="red">*</font>通報案件之影響面評價(1.通報缺失地點完整精確2.通報內容具體明確3.對品質之提升有具體效益4.具實質廣泛之公共利益)：</b-col>
				<b-col class="col-md-8 row align-items-center justify-content-center">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
				</b-col>
			</b-row>
			<b-row class="border border-dark" v-show="true">
				<b-col class="col-md-2 "><font color="red">*</font>通報民眾熱心程度評價(1.熱心配合協助辦理改善作業2.提供可資辨識之佐證資料3.通報後積極追蹤改善情形)：</b-col>
				<b-col class="col-md-8 row align-items-center justify-content-center">
					<b-form-radio-group
						id="radio-group-2"
						v-model="picked2"
						:options="options"
						name="radio-options2"
					></b-form-radio-group></b-col>
			</b-row>
			<br>
			<b-form-row class="justify-content-center">
				<!-- 有ID且撈出來有資料就進行修改，無ID也無資料直接新增 -->
				<b-button size="sm" variant="success" @click="queryHandler" >送出申請</b-button>&ensp; &ensp; &ensp; &ensp; 
				<b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
			</b-form-row>
		</b-container>
		<br>
		<!-- 寫成Template後續其他地方會用到 -->
		<closeCaseRecordList :showFlag="true" ref="closeCaseRecordList"/>
	</div>
</template>


<script>
import closeCaseRecordList from './CloseCaseRecordList.vue';



export default {
 components: { closeCaseRecordList },
 data(){
	return{
		options: [
			{	text:	'均能符合',	value:	'1'},
			{	text:	'大多能符合',	value:	'2'},
			{	text:	'部分符合',	value:	'3'},
			{	text:	'少數符合',	value:	'4'},
			{	text:	'均未能符合',	value:	'5'},
		],
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'date',
				label:	'處理日期'
			} ,
			{
				key:	'situation',
				label: '處理機關及人員'
			}, 
			{
				key:	'record',
				label:	'處理情形'
			}, 
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, number: '11000000001', date: '110/03/03', wkut: '行政院公共工程委員會',	people:'吳XX',	record: '施工區域不明確，規劃新動線以及人流管制',	
			tel:'02-12345678',	mail:'aaa@test.com',	pk: 5566 },
			
		],
		
	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		this.$router.push({name:'CaseInfoEdit'})
	},
	aa(){
		//新開視窗
		let routeUrl = this.$router.resolve({name:'CmdCaseQuery'})
		window.open(routeUrl.href, '_blank'); 

	},
  
 },

}


</script>

<style>
.col-md-2{
	background-color:blue;
  color: white;
  font-weight: bolder;
}
.col-md-4 {
  background-color:white;
  color: white;
  font-weight: bolder;
}
</style>
<template>
	<div>
		<b-container >
			<h2>登錄處理情形</h2>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">處理日期</b-col>
				<b-col class="col-md-8 text-left"><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>
			</b-row>
			<!-- 處理機關、人員基本資訊，由登入的使用者機關待入-->
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">處理機關</b-col>
				<b-col class="col-md-8 text-left">行政院公共工程委員會</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">處理人員姓名</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">處理人員電話</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">處理人員電子郵件</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">處理情形</b-col>
				<b-col class="col-md-8 text-left"><b-form-textarea></b-form-textarea></b-col>
			</b-row>
		</b-container>
		<br>
		<b-container>
			<b-row class="row justify-content-end" >
				<b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
				<b-button size="sm" variant="success" @click="update" v-show="updateFlag">儲存</b-button>&ensp; 
				<b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
			</b-row>
		</b-container>
	</div>
</template>

<script>

export default {
 data(){
	return{
		addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
		updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
	}
 },
}
</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
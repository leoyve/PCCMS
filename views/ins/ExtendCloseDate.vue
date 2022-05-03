<template>
	<div>
		<br>
		<h3><strong>展延結案日期</strong></h3>
		<br>
		<b-container >
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">原結案期限</b-col>
				<b-col class="col-md-6 text-left">110年04月12日</b-col>
			</b-row>
			<!-- 處理機關(由登入的使用者機關待入)-->
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">展延期限</b-col>
				<b-col class="col-md-8 text-left"><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>
			</b-row>
			<b-row class="border border-dark" v-show="true">
				<b-col class="col-md-2 ">展延原因:</b-col>
				<b-col class="col-md-8 text-left"><b-form-textarea></b-form-textarea></b-col>
			</b-row>
			<br>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >確認展延</b-button>&ensp;
				<b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
			</b-form-row>
		</b-container>
		<br>
	</div>
</template>

<script>

export default {
 data(){
	return{	
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
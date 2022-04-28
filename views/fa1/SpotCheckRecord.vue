<template>
	<div>
		<br>
		<b-container >
			<h2>抽查紀錄填寫表單</h2>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">抽查紀錄</b-col>
				<b-col class="col-md-8 text-left">
					<b-form-input></b-form-input>
				</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">抽查日期</b-col>
				<b-col class="col-md-8 text-left"><b-datepicker/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">備註</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
		</b-container>
		<br>
		<b-container>
			<b-row class="row justify-content-end" >
				<b-button size="sm" variant="success" @click="add" >新增</b-button>&ensp; 
				<b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
			</b-row>
		</b-container>

	</div>
</template>


<script>


export default {
 data(){
	return{

	}
 },
 methods: {
	
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
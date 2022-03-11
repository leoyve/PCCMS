<template>
	<div>
		<b-container class="border border-dark">
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">事件名稱 </b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">發佈日期</b-col>
				<b-col class="col-md-8 text-left"><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>
			</b-row>
		</b-container>
		<br>
		<b-container>
			<b-row class="col-sm row justify-content-end"> 
				<b-button size="sm" variant="success" @click="queryHandler">新增</b-button>&ensp;
				<b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
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
 }
}


</script>

<style>

.col-md-4 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
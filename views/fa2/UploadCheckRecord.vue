<template>
	<div>
		<br>
		<b-container >
			<h2>實地訪查文件</h2>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">上傳機關</b-col>
				<b-col class="col-md-10 text-left">行政院工程委員會</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">選擇文件</b-col>
				<b-col class="col-md-10 text-left"><input type="file"/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">文件名稱</b-col>
				<b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">文件所載訪查或會議日期</b-col>
				<b-col class="col-md-10 text-left"><b-datepicker/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">文件發函日期</b-col>
				<b-col class="col-md-10 text-left"><b-datepicker/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">文件發函字號</b-col>
				<b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
		</b-container>
		<br>
		<b-container>
			<b-row class="row justify-content-end" >
				<b-button size="sm" variant="success" @click="add" v-show="addFlag">新增</b-button>&ensp; 
				<b-button size="sm" variant="success" @click="update" v-show="updateFlag">編輯</b-button>&ensp; 
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
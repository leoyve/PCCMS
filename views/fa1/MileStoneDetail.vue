<template>
	<div>
		<br>
		<h3>活化計畫各分項作業里程碑整體上鎖登錄表單畫面</h3>
		<br>
		<b-container>
			<b-row>
				<b-col class="text-left"><h3><strong><font color="red">活化計畫各分項作業里程碑整體上鎖日期登錄資料表</font></strong></h3></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">年度</b-col>
				<b-col class="col-md-10 text-left ">111</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark"><font color="red">*</font>里程碑項目及預定完成上鎖日期</b-col>
				<b-col class="col-md-10 text-left "><b-datepicker/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">實際完成上鎖日期</b-col>
				<b-col class="col-md-10 text-left "><b-datepicker/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark"><font color="red">*</font>個別上鎖日期逾越整體上鎖日期之里程碑是否一併修改</b-col>
				<b-col class="col-md-10 text-left "><b-form-radio-group v-model="check1" :options="check" name="radio-validation" /></b-col>
			</b-row>
			<br>
			<b-row>
				<b-col class="text-right">
					<b-button size="sm" variant="success" @click="gotoParam('InventoryEdit', {updateFlag:true})">修改</b-button>&nbsp;
					<b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>


<script>
export default {
 data(){
	return{
		check: [
			{ value: 'Y', text: '是'},
			{ value: 'N', text: '否' },
		],
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
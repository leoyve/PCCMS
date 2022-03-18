<template>
	<div>
		<b-container fluid>
		<b-form-row class="justify-content-center "><h2><strong>變更學員參訓之開班期別</strong></h2></b-form-row>
			<b-container class="border border-dark" fluid>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">學員身份證字號</b-col>
					<b-col class="col-md-10 text-left">fxxxxxxxxx</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">學員姓名</b-col>
					<b-col class="col-md-10 text-left">王xx</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">訓練主題班別</b-col>
					<b-col class="col-md-10 text-left">公共工程品質管理訓練班(土建) 【106年起適用】</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">訓練主題班別類別</b-col>
					<b-col class="col-md-10 text-left">	品管</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">開班期別</b-col>
					<b-col class="col-md-10 text-left">	DE10902</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">擬變更之開班期別</b-col>
					<b-col class="col-md-10 text-left"><b-input></b-input></b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">座號</b-col>
					<b-col class="col-md-10 text-left">	DE1090218</b-col>
				</b-row>
				<b-row class="border border-dark">
					<b-col class="col-md-2 ">擬變更之開班期別所屬座號</b-col>
					<b-col class="col-md-10 text-left"><b-input></b-input></b-col>
				</b-row>
			</b-container>
			<b-row class="col-sm row justify-content-end" >
				<b-button size="sm" variant="success" @click="add">確定</b-button>&ensp; 
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
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}
</style>
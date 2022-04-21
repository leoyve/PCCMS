<template>
  <div>
    <br>
    <h3><strong>刪除機關關鍵公共設施</strong></h3>
    <br>
    <b-container>
		<b-row class="border border-dark">
			<b-col class="col-md-2 ">流水編號</b-col>
			<b-col class="col-md-8 text-left">5656</b-col>
		</b-row>
		<b-row class="border border-dark">
			<b-col class="col-md-2 ">設施名稱</b-col>
			<b-col class="col-md-8 text-left">三舍滯洪池</b-col>
		</b-row>
		<b-row class="border border-dark">
			<b-col class="col-md-2 ">刪除原因</b-col>
			<b-col class="col-md-8 text-left"><b-form-select :options="reason"></b-form-select></b-col>
		</b-row>
		<b-row class="border border-dark">
			<b-col class="col-md-2 ">與本設施重複的編號：</b-col>
			<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
		</b-row>
		<b-row class="border border-dark">
			<b-col class="col-md-2 ">備註</b-col>
			<b-col class="col-md-8 text-left"><b-form-textarea></b-form-textarea></b-col>
		</b-row>
	</b-container>
	<br>
	<b-container>
		<b-row class="row justify-content-end" >
			<b-button size="sm" variant="success" @click="deleteCheck()">刪除</b-button>&ensp; 
			<b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
		</b-row>
	</b-container>
    <br>
  </div>
</template>

<script>

export default {
	data(){
		return{
			reason:[
				{text:'有重複案件', value:1},
				{text:'非屬「公共設施維護管理資訊公開作業要點」第三點之適用範圍', value:2},
				{text:'其他', value:3},
			],
		}
	},
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}
.col-md-4 {
  background-color:white;
  color: white;
  text-align: left;
}
</style>
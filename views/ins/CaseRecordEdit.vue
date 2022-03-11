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
			<br>
			<b-row class="justify-content-center">
				<!-- 有ID且撈出來有資料就進行修改，無ID也無資料直接新增 -->
				<b-button size="sm" variant="success" @click="queryHandler" >儲存</b-button>&ensp; &ensp; &ensp; &ensp; 
				<b-button size="sm" variant="secondary" @click="toSee">取消</b-button>
			</b-row>
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
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);

		this.$router.push({name:'CaseRecord'})

		
	},
  queryHandler(){

  },
  reset(){

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
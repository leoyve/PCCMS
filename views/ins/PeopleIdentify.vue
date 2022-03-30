<template>
	<div>
		<br>
		<b-container >
			<h2>全民監督公共工程通報案件查詢作業</h2>
			<br>
			<b-row>
				<b-col class="text-left">
					<h4><font color="blue">
					本作業僅供通報人線上追蹤通報案件執行狀況及填寫滿意度使用。
					非通報人請使用『一般查詢』功能查閱相關資料。
					通報人請填入通報時填報之電子郵件地址及相關驗證資料(通報的電話、傳真、地址、姓名或案件編號)後，
					點選『查詢』鍵即可查詢曾通報全部案件。
					</font></h4>
				</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">處理人員電子郵件</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">通報的電話、傳真、地址、姓名或案件編號(擇一填寫)</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">驗證碼</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<br>
			<b-row class="justify-content-center">
				<b-button size="sm" variant="success" @click="gotoParam('CaseInfoIdentifyQuery')" >查詢</b-button>&ensp; &ensp; &ensp; &ensp; 
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
.col-md-4 {
  background-color: #57a6d4;
  color: white;
  font-weight: bolder;
}
</style>
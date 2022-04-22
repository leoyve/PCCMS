<template>
	<div>
		<br>
		<b-container >
			<h2>提請系統重行寄發通報案件之驗證立案電子郵件通知</h2>
			<br>
			<b-row>
				<b-col class="text-left">
					<h4><font color="blue">	
						本作業僅供通報人提請系統重行寄發通報案件之驗證立案電子郵件通知(限7日以內通報之案件)。
						請填入通報時填報之電子郵件位址及相關驗證資料(通報的電話、傳真、地址或姓名)，並點選「送出」鍵後，
						系統將對7日內通報但尚未成功立案之案件，重行寄發驗證立案之電子郵件通知。(請於5分鐘內完成操作，否則送出後，
						系統將會請您再回至本頁重行操作！)
					</font></h4>
				</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 text-left">通報的電子郵件地址：</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 text-left">通報的電話、傳真、地址、姓名或案件編號(擇一填寫)</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 text-left">驗證碼</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<br>
			<b-row class="justify-content-center">
				<b-button size="sm" variant="success" @click="gotoParam('')" >送出</b-button>&ensp; &ensp;  
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
}
</script>

<style>
.col-md-4 {
  background-color: #57a6d4;
  color: white;
  font-weight: bolder;
}
</style>
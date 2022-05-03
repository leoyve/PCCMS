<template>
	<div>
		<br>
		<h3><strong><font color="brown">民眾通報但尚未成功立案之案件查詢及處理畫面</font></strong></h3>
		<br>
		<b-container fluid>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">案件編號</b-col>
				<b-col class="col-md-10 text-left ">11000000002</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">填表日期</b-col>
				<b-col class="col-md-10 text-left ">110/01/11</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">民眾姓名</b-col>
				<b-col class="col-md-4 text-left ">黃先生</b-col>
				<b-col class="col-md-2 text-dark">民眾性別</b-col>
				<b-col class="col-md-4 text-left">男</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">民眾住址</b-col>
				<b-col class="col-md-4 text-left ">XX市XX區XX路X號X樓</b-col>
				<b-col class="col-md-2 text-dark">民眾電話</b-col>
				<b-col class="col-md-4 text-left">09XXXXXXXX</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">民眾傳真</b-col>
				<b-col class="col-md-4 text-left ">02-00008888</b-col>
				<b-col class="col-md-2 text-dark">電子郵件</b-col>
				<b-col class="col-md-4 text-left">text@gmail.com</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">設施名稱</b-col>
				<b-col class="col-md-10 text-left ">正大市場</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">權責機關</b-col>
				<b-col class="col-md-10 text-left ">XX區公所</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">地點</b-col>
				<b-col class="col-md-10 text-left ">[XX市] XX市XX區XX里X號X樓</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">通報主題</b-col>
				<b-col class="col-md-10 text-left ">正大市場</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">設施類別</b-col>
				<b-col class="col-md-10 text-left ">市場(零售市場等)</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 text-dark">具體內容</b-col>
				<b-col class="col-md-10 text-left ">從沒有營業過的蚊子市場，閒置至少20年以上。</b-col>
			</b-row>
			<br>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >立案</b-button>&nbsp;
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
 methods: {
	
 },
 mounted(){
	
  },
}


</script>

<style>
.col-md-2 {
  background-color: rgb(122, 209, 231);
  color: white;
  font-weight: bolder;
}
</style>
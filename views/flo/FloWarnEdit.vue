<template>
	<div>
		<br>
		<h3>選用接收災害示警通知服務</h3>
		<br>
		<b-container>
			<b-row>
				<font color="blue">
					<strong>一、請於下表之機關連絡人、是否接收示警通知、手機號碼、電子郵件等欄位，登錄正確之資料後，按「送出」鍵。</strong>
				</font>
			</b-row>
			<b-row>
				<font color="blue">
					<strong>二、如選擇接收示警通知，將可收到本標案相關影響之災害示警電子郵件及電信簡訊通知，俾利防災預警工作。</strong>
				</font>
			</b-row>
			<br>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">主辦機關 </b-col>
				<b-col class="col-md-8 text-left">宜蘭縣蘇澳鎮公所</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">標案編號</b-col>
				<b-col class="col-md-8 text-left">1100219</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">標案名稱</b-col>
				<b-col class="col-md-8 text-left">蘇澳鎮運動公園停車場擋土牆改善工程</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">重點防汛工程註記</b-col>
				<b-col class="col-md-8 text-left">是</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 "><font color="red">*</font>機關連絡人</b-col>
				<b-col class="col-md-8 text-left"><b-input/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 "><font color="red">*</font>是否接收示警通知</b-col>
				<b-col class="col-md-8 text-left">
					<b-form-radio-group v-model="check3" :options="isReceive" name="radio-validation-2"></b-form-radio-group>
				</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">手機號碼</b-col>
				<b-col class="col-md-8 text-left"><b-input/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">電子郵件</b-col>
				<b-col class="col-md-8 text-left"><b-input/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">臨近關鍵標的物</b-col>
				<b-col class="col-md-8 text-left">
					<b-container>
						<b-row><b-input/></b-row>
						<b-row><b-input/></b-row>
						<b-row><b-input/></b-row>
						<b-row><b-input/></b-row>
						<b-row><b-input/></b-row>
						<b-row>
							<font color="blue">
								(本項服務將先以圖台標示之各施工地點座標，與示警通知之影響區域進行勾稽；
								另可填寫6組臨近工程之正確標的物名稱(至少3字)，如○○水庫、○○溪、○○河、○○村、○○里等，
								以利進一步勾稽)
							</font>
						</b-row>
					</b-container>
				</b-col>
			</b-row>
			<br>
			<b-row class="col-sm row justify-content-end"> 
				<b-button size="sm" variant="success" @click="queryHandler">編輯</b-button>&ensp;
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
		isReceive:[
			{text:'是', value:1},
			{text:'否', value:1},
		]
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
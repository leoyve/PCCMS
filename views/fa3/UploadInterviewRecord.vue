<template>
	<div>
		<br>
		<b-container >
			<h2>上傳維護紀錄</h2>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">資料年月</b-col>
				<b-col class="col-md-8 text-left">
					<b-container>
						<b-row>
							<b-col><b-form-select :options="year"></b-form-select>年</b-col>
							<b-col><b-form-select :options="month"></b-form-select>月</b-col>
						</b-row>
					</b-container>
				</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">選擇檔案</b-col>
				<b-col class="col-md-8 text-left"><input type="file"/></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">備註</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
		</b-container>
		<br>
		<b-container>
			<b-row class="row justify-content-end" >
				<b-button size="sm" variant="success" @click="add" >新增</b-button>&ensp; 
				<b-button size="sm" variant="outline-secondary" @click="gotoParam('PublicFacilityEdit', {updateFlag:true})">取消</b-button>
			</b-row>
		</b-container>
	</div>
</template>

<script>

export default {
 data(){
	return{
		year:[
			{text:'109', value:1},
			{text:'110', value:1},
			{text:'111', value:1},
			{text:'112', value:1},
			{text:'113', value:1},
			{text:'114', value:1},
		],
		month:[
			{text:'1', value:1},
			{text:'2', value:1},
			{text:'3', value:1},
			{text:'4', value:1},
			{text:'5', value:1},
			{text:'6', value:1},
			{text:'7', value:1},
			{text:'8', value:1},
			{text:'9', value:1},
			{text:'10', value:1},
			{text:'11', value:1},
			{text:'12', value:1},
		]
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
<template>
	<div>
		<b-container >
			<h2>新增滿意度調查記錄</h2>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">填寫日期</b-col>
				<!-- 代入系統日期，不可編輯 -->
				<b-col class="col-md-6 text-left"><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">滿意度</b-col>
				<b-col class="col-md-8 text-left"><b-form-select v-model="statusPicked" :options="status" :disabled="disabledFlag"></b-form-select></b-col>
			</b-row>
			<b-row class="border border-dark" v-show="true">
				<b-col class="col-md-2 ">滿意/不滿意原因:</b-col>
				<!-- 預設代入:督工系統管理者代為新增！-->
				<b-col class="col-md-8 text-left"><b-form-textarea v-model="text"></b-form-textarea></b-col>
			</b-row>
			<br>
			<b-form-row class="justify-content-center">
				<b-button size="sm" variant="success" @click="queryHandler" >確認展延</b-button>&ensp; &ensp; &ensp; &ensp; 
				<b-button size="sm" variant="secondary" @click="toSee">取消</b-button>
			</b-form-row>
		</b-container>
		<br>
	</div>
</template>


<script>

export default {
 data(){
	return{
		text:'督工系統管理者代為新增！',
		value1:new Date,
		status: [
        { value: '1', text: '非常滿意'},
        { value: '2', text: '很滿意' },
        { value: '3', text: '滿意' },
        { value: '4', text: '不滿意' },
        { value: '6', text: '很不滿意' },
        { value: '7', text: '非常不滿意' },
      ]
		
	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);

		this.$router.push({name:'CaseInfoEdit'})

		
	},
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
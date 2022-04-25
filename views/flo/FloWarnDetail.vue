<template>
	<div>
		<br>
		<b-container fluid>
			<b-row class="col-sm row justify-content-end"> 
				<b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
			</b-row>
			<b-row>
				<h3><font color="red">
					<strong>示警標案基本資料</strong>
				</font></h3>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">標案編號</b-col>
				<b-col class="col-md-8 text-left">1090102-1</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">標案名稱</b-col>
				<b-col class="col-md-8 text-left">新北市三鶯大橋改建工程-第二期工程</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">主辦機關</b-col>
				<b-col class="col-md-8 text-left">新北市政府新建工程處工務科</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">契約金額(千元)</b-col>
				<b-col class="col-md-8 text-left">933000</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">開工日期</b-col>
				<b-col class="col-md-8 text-left">109/05/07</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">預定完工日期</b-col>
				<b-col class="col-md-8 text-left">112/08/14</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">工程地點</b-col>
				<b-col class="col-md-8 text-left">新北市鶯歌區三鶯大橋</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">工程內容</b-col>
				<b-col class="col-md-8 text-left">橋樑1座，長600M，引道長200M。</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">預定進度(%)</b-col>
				<b-col class="col-md-8 text-left">26.5</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">實際進度(%)</b-col>
				<b-col class="col-md-8 text-left">26.5</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-2 ">執行情形概述</b-col>
				<b-col class="col-md-8 text-left">縫合段吊梁完成</b-col>
			</b-row>
			<br>
			<b-row>
				<h3><font color="red">
					<strong>相關災害示警通知資料</strong>
				</font></h3>
			</b-row>
			<b-row>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				</b-table>
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
		],
		fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key: 'prjno',
				label:	'警報示別碼',
			},
			{
				key:	'name',
				label:	'警報發送機關',
			},
			{
				key:	'wkut',
				label: '警戒顏色燈號'
			}, 
			{
				key:	'site',
				label:	'事件類型'
			}, 
			{
				key:	'amount',
				label:	'標題'
			}, 
			{
				key:	'decideDate',
				label:	'緊急性'
			}, 
			{
				key:	'preDate',
				label:	'嚴重性'
			}, 
			{
				key:	'man',
				label:	'確定性'
			},
			{
				key:	'mobile',
				label:	'生效時間'
			},
			{
				key:	'mail',
				label:	'到期時間'
			},
			{
				key:	'isReceive',
				label:	'影響區域描述'
			},
		],
	}
 },
 methods: {
 }
}


</script>

<style>

.col-md-2 {
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
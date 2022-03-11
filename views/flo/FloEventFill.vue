<template>
	<div>
		<h3>標案相關資訊</h3>
		<b-container class="border border-dark">
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">歸屬計畫 </b-col>
				<b-col class="col-md-8 text-left">災害準備金</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">工程標案編號</b-col>
				<b-col class="col-md-8 text-left">1100219</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">工程標案名稱</b-col>
				<b-col class="col-md-8 text-left">蘇澳鎮運動公園停車場擋土牆改善工程</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">主辦機關</b-col>
				<b-col class="col-md-8 text-left">工程會</b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">工程地點</b-col>
				<b-col class="col-md-8 text-left">宜蘭縣</b-col>
			</b-row>
		</b-container>
		<br>
		<b-container class="border border-dark">
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">年度事件</b-col>
				<b-col class="col-md-8 text-left"><b-form-select v-model="statusPicked" :options="status"></b-form-select></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">抽查備註</b-col>
				<b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
			</b-row>
			<b-row class="border border-dark">
				<b-col class="col-md-4 ">上傳檔案</b-col>
				<b-col class="col-md-8 text-left"></b-col>
			</b-row>
		</b-container>
		<br>
		<div>
			<b-container >
				<br>
				<b-form-row class="row justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(action)="row">
							<b-button size="sm" variant="danger" @click="toSee(row.item)">刪除</b-button>
						</template>
						<template #cell(checkRecord)="row" >
							<b-container>
								<b-row>
									<b-col><a href="#">{{ row.item.checkRecordFile}}</a> </b-col>
								</b-row>
							</b-container>
						</template>
					</b-table>
				</b-form-row>		
			</b-container>
		</div>
		<br>
		<b-container>
			<b-row class="col-sm row justify-content-end"> 
				<b-button size="sm" variant="success" @click="queryHandler">新增</b-button>&ensp;
				<b-button size="sm" variant="outline-secondary" @click="reset">取消</b-button>
			</b-row>
		</b-container>
	</div>
</template>


<script>
export default {
 data(){
	return{
		status:[
			{text:'豪雨特報', value:'1'},
			{text:'納莉颱風', value:'2'},
		],
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key: 'event',
				label:	'年度事件'
			},
			{
				key: 'submitDate',
				label:	'填報日期'
			},
			{
				key:	'comment',
				label:	'抽查備註'
			},
			{
				key:	'checkRecord',
				label:	'抽查紀錄'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{	id: 1, event: '豪雨特報', submitDate: '110/10/10', comment: '排水設施巡查',checkRecordFile:'123.xls',pk:'222'	},
			
		],
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
<template>
	<div>
		<br>
		<h3><strong>公共工程整體災害示警</strong></h3>
		<br>
		<b-container fluid>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="標案主辦機關關鍵字" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="statusPicked"
						:options="statusOptions"
						name="radio-options-1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="標案編號關關鍵字" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="statusPicked"
						:options="caseOpt"
						name="radio-options-2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
			<b-row class="justify-content-center text-light bg-primary">
				<h3>公共工程整體災害示警一覽表</h3>
			</b-row>
			<b-row>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
				</b-table>
			</b-row>
			<b-pagination align="right"
				v-model="currentPage"
				:total-rows="rows"
				:per-page="perPage"
				first-number
			></b-pagination>
		</b-container>
		<br>
	</div>
</template>


<script>
export default {
 data(){
	return{
		statusOptions:[
			{text:'紅色', value:1},
			{text:'橙色', value:2},
			{text:'黃色', value:3},
			{text:'綠色', value:4},
			{text:'紅橙色', value:5},
			{text:'紅橙黃色', value:6},
			{text:'全部', value:7},
		],
		caseOpt:[
			{text:'本年度重點防汛工程', value:1},
			{text:'全部', value:2},
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
				label:	'生效時間'
			}, 
			{
				key:	'amount',
				label:	'到期時間'
			}, 
			{
				key:	'decideDate',
				label:	'事件'
			}, 
			{
				key:	'preDate',
				label:	'影響程度'
			}, 
			{
				key:	'man',
				label:	'影響區域'
			},
			{
				key:	'mobile',
				label:	'影響標案件數'
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
<template>
	<div>
		<b-container >
			<br>
			<b-form-row class="row justify-content-end">
				<b-button size="md" variant="success" @click="goto" >新增</b-button>
			</b-form-row>	
			<br>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="事件名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="發佈日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="備查資料" label-align-md="right">
					<b-checkbox></b-checkbox>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>&nbsp;
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
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
					</b-table>
				</b-form-row>
				<b-form-row class="row justify-content-end">
					<b-pagination align="right"
						v-model="currentPage"
						:total-rows="rows"
						:per-page="perPage"
						first-number
					></b-pagination>
				</b-form-row>
				
			</b-container>
		</div>
	</div>
</template>


<script>
export default {
 data(){
	return{
		rows: 100,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key: 'event',
				label:	'事件名稱'
			},
			{
				key: 'releaseDate',
				label:	'發佈日期'
			},
			{
				key:	'backUp',
				label:	'是否備查'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	undefined,
	}
 },
 methods: {
	toSee(item){
		console.log(item);
	},
	queryHandler(){
		this.items = 	[
			{	id: 1, event: '豪雨致災', releaseDate:'110/12/01', backUp:'是', pk: 5566, },
			{	id: 2, event: '納莉颱風', releaseDate:'110/10/01', backUp:'否', pk: 5566, },
			{	id: 3, event: '土石流', releaseDate:'110/08/01', backUp:'是', pk: 5566, },
		]
	},
	goto(){
		this.$router.push({name:'FloEventCreate'})
	},

 }
}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
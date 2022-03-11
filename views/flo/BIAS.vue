<template>
	<div>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="大宗資材種類" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
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
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >查詢</b-button>
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
							<b-button size="sm" variant="success" @click="toSee(row.item)">下載</b-button>
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
				key: 'type',
				label:	'大宗資材種類'
			},
			{
				key: 'releaseDate',
				label:	'發佈日期'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	undefined,
		type: [
			{ value: '', text: '' , disabled: true},
			{ value: '0', text: '大宗資材價格彙整表' },
			{ value: '1', text: '大宗資材價格及其漲跌幅彙整表' },
			{ value: '2', text: '砂石價格' },
			{ value: '3', text: '預拌混凝土價格' },
			{ value: '4', text: '鋼筋價格' },
			{ value: '5', text: 'H型鋼價格' },
			{ value: '5', text: '瀝青混凝土價格' },
			{ value: '5', text: '鋼板價格' },
			{ value: '5', text: '離島地區材料' },
		]
	}
 },
 methods: {
	toSee(item){
		console.log(item);
	},
	queryHandler(){
		this.items = 	[
			{	id: 1, type: '大宗資材價格彙整表', releaseDate:'110/12/01', pk: 5566, },
			{	id: 2, type: '大宗資材價格彙整表', releaseDate:'110/10/01', pk: 5566, },
			{	id: 3, type: '砂石價格', releaseDate:'110/10/01', pk: 5566, },
			{	id: 4, type: '鋼筋價格', releaseDate:'110/08/01', pk: 5566, },
		]
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
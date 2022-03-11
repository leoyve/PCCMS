<template>
	<div>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="md" variant="success"  @click="goNew" >新增</b-button>
			</b-form-row>
			<br>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="創新產品名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="廠商名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="交流機關名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="交流狀態" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options1"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="項目狀態" label-align-md="right">
					<b-form-radio-group
						id="radio-group-2"
						v-model="itemPicked"
						:options="itemOptions"
						name="radio-options2"
					></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>
                <b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="toSee(row.item)">檢視</b-button>
					</template>
				</b-table>
				<b-pagination align="right"
					v-model="currentPage"
					:total-rows="rows"
					:per-page="perPage"
					first-number
				></b-pagination>
			</b-container>
		</div>
	</div>
</template>


<script>
export default {
 data(){
	return{
		textValue: 'default',
		picked: 'A',
		itemPicked: 'A',
		options: [
			{	text:	'所有產品',	value:	'A'},
			{	text:	'交流中',	value:	'B'},
			{	text:	'已交流',	value:	'C'},
			{	text:	'不交流',	value:	'D'}
		],
		itemOptions: [
			{	text:	'全部',	value:	'A'},
			{	text:	'公開',	value:	'B'},
			{	text:	'草稿',	value:	'C'},
			{	text:	'送審中',	value:	'D'},
			{	text:	'已下架',	value:	'D'},
		],
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
				key:	'name',
				label:	'創新產品名稱'
			},
			{
				key:	'itemStatus',
				label:	'項目狀態'
			},
			{
				key:	'vendorName',
				label: '廠商名稱'
			},
			{
				key:	'wkutName',
				label:	'交流機關名稱'
			},
			{
				key:	'status',
				label:	'交流狀態'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	undefined
	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		this.$router.push({name:'ProView', params:{showType:	true}})
	},
	goNew(){
		this.$router.push({name:'ProView', 	params:{showType:	true}})
	},
	queryHandler(){
		this.items = 	[
			{	id: 1, name: '自吸式排水管', vendorName: '元X工程有限公司',	itemStatus: '公開',	wkutName: '工程會', status: '已交流', pk: 5566	},
			{	id: 2, name: '綠色工法', vendorName: '易X工程有限公司',	itemStatus: '草稿',	wkutName: '行政院', status: '不交流', pk: 7788	},
			{	id: 3, name: 'ASBD隔震系統', vendorName: '大X工程有限公司',	itemStatus: '送審中',	wkutName: '台北市政府', status: '交流中', pk: 1133	}
		]
	},
	reset(){

	}
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
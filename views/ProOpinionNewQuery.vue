<template>
	<div>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="創新交流編號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
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
						<b-button size="sm" variant="success" @click="toSee(row.item, 'Y')">受理交流</b-button> &nbsp;
						<b-button size="sm" variant="danger" @click="toSee(row.item, 'N')">不受理交流</b-button>
					</template>
				</b-table>
			</b-container>
		</div>
	</div>
</template>


<script>
export default {
 data(){
	return{
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'創新交流編號'
			},
			{
				key:	'name',
				label:	'項目名稱'
			},
			{
				key: 'category',
				label:	'項目狀態'

			} ,
			{
				key:	'vendorName',
				label: '廠商名稱'
			}, 
			{
				key:	'status',
				label:	'交流意見狀態'
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
	toSee(item, accept){
		//alert(accept);
		console.log(item);
		this.$router.push({name:'OpinionView',	params:{acceptType:	accept}})
	},
	queryHandler(){
		this.items = [
			{
				id: '2021100001', name: '特殊塗料PCR工法', category: '公開', vendorName: '元X工程有限公司',	status: '受理交流',	pk: 5566
			},
		]
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
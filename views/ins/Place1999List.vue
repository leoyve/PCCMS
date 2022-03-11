<template>
	<div>
		<b-container >
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="地方主管機關" label-align-md="right">
					<b-form-input v-model="wkut" type="search" disabled="true"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2" disabled="true"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2" disabled="true"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
		</b-container>
		<br>
		
		<div>
			<b-container >
				<h3>地方縣市1999通報案件一覽表</h3>
				<br>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(action)="row">
						<b-button size="sm" variant="success" @click="toEdit(row.item)">修改</b-button>
						<b-button size="sm" variant="danger" @click="toDelete(row.item)">刪除</b-button>
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
				key:	'number',
				label:	'通報案件編號'
			},
			{
				key:	'date',
				label:	'通報日期'
			},
			{
				key:	'workName',
				label: '通報工程名稱'
			},
			{//使用者自己KEY
				key:	'wkut',
				label:	'主辦機關'
			},
			{
				key:	'topic',
				label:	'通報主題'
			},
			{
				key:	'address',
				label:	'通報工程缺失地址'
			}, 
			{
				key:	'closeDate',
				label:	'結案日期'
			}, 
			{
				key:	'disDay',
				label:	'處理天數'
			},
			{	//建立人員的機關
				key:	'createWkut',
				label:	'資料更新機關'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{ id: 1, number:	'11000000386',	date:'1100202',	workName:	'建築工程	',	wkut:'工程會',	topic:	'路面平整度不佳',	address:	'台北市信義區松仁路3號',	
				closeDate:	'1101203',	disDay:	'2',	createWkut:	'行政院公共工程委員會',	pk: 5566 },
			{ id: 2, number:	'11000000386',	date:'1100505',	workName:	'道路新建工程	',	wkut:'工程會',	topic:	'工人施工未戴安全帽',	address:	'台北市信義區松仁路3號',	
				closeDate:	'1101213',	disDay:	'5',	createWkut:	'行政院公共工程委員會',	pk: 5566 },
			{ id: 3, number:	'11000000386',	date:'1101111',	workName:	'堤防工程	',	wkut:'工程會',	topic:	'土壤未確實夯實',	address:	'台北市信義區松仁路3號',	
				closeDate:	'1101223',	disDay:	'10',	createWkut:	'行政院公共工程委員會',	pk: 5566 },

		],
		reviewResult:	[
			{	value: '', text: '全部'	},
			{	value: 'Y', text: '審查合格'	},
			{	value: 'N', text: '審查不通過'	},
		],
		reviewSituation:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '尚未審查'	},
			{	value: 'T', text: '今日審查'	},
			{	value: 'D', text: '七日內審查'	},
			{	value: 'Y', text: '已審查'	},
		],
		wkut: '行政院公共工程委員會',
		value1:	new Date(),
		value2: new Date("2021/12/31"),

	}
 },
 methods: {
	toEdit(){
		//console.log(item);
		this.$router.push({name:'Case1999Info',	params:{disabledFlag:	false,	isNew:	false,	isEdit:	true,	isDelete:	false}})
	},
	toDelete(){
		this.$router.push({name:'Case1999Info',	params:{disabledFlag:	true,	isNew:	false,	isEdit:	false,	isDelete:	true}})
  },
  reset(){

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
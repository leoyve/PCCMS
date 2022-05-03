<template>
	<div>
		<br>
		<h3><strong><font color="brown">代訓機構資料管理</font></strong></h3>
		<br>
		<b-container >
			<b-form-row class="justify-content-end">
				<b-button size="l" variant="success"  @click="gotoParam('AgencyEdit', {addFlag:true})" >新增</b-button>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="交流狀態" label-align-md="right">
					<b-form-radio-group
						id="radio-group-1"
						v-model="picked"
						:options="options"
						name="radio-options"
					></b-form-radio-group>
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
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>代訓機構一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
						<template #cell(action)="row">
							<b-button size="sm" variant="outline-secondary" @click="gotoParam('AgencyDetail', row.item)">檢視</b-button>
						</template>
					</b-table>
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
		options: [
			{	text:	'是',	value:	'A'},
			{	text:	'否',	value:	'B'},
			{	text:	'不限',	value:	'C'},
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
				key:	'agencyCode',
				label:	'代訓機構代碼'
			},
			{
				key:	'agencyName',
				label:	'代訓機構名稱'
			} ,
			{
				key:	'isValid',
				label: '是否有效'
			}, 
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			{
				id: 1, agencyCode: 'A000000', agencyName: '代訓機構主管機關工程會', isValid: '是', pk: 5566
			},
			{
				id: 2,agencyCode: 'C000502', agencyName: '財團法人中國生產力中心', isValid: '是', pk: 5566
			},
			{
				id: 3, agencyCode: 'C000901', agencyName: '	社團法人高雄市土木技師公會', isValid: '否', pk: 5566
			}
		]
	}
 },
 methods: {

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
<template>
	<div>
		<br>
		<h3><strong>案件查詢/填報</strong></h3>
		<br>
		<b-container >
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件編號" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報工程名稱" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報案件主題" label-align-md="right">
					<b-form-input type="search"></b-form-input>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="通報日期" label-align-md="right">
					<b-container>
						<b-row>
							<b-col><b-form-datepicker id="example-datepicker1" v-model="value1" class="mb-2"></b-form-datepicker></b-col>~
							<b-col><b-form-datepicker id="example-datepicker2" v-model="value2" class="mb-2"></b-form-datepicker></b-col>
						</b-row>
					</b-container>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="分案情形" label-align-md="right">
					<b-form-radio-group v-model="check2" :options="checkAssign" name="radio-validation-1"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="結案情形" label-align-md="right">
					<b-form-radio-group v-model="check3" :options="checkClosed" name="radio-validation-2"></b-form-radio-group>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >查詢</b-button>&nbsp;
				<b-button size="sm" variant="outline-secondary" @click="reset">清除</b-button>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container fluid>
				<b-table striped hover :items="items" :fields="fields" head-variant="dark">
					<template #cell(action)="row">
						<b-button size="sm" variant="outline-secondary" @click="gotoParam('CaseInfoEdit', row.item)">檢視</b-button>
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
				key:	'submitDate',
				label:	'通報日期'
			} ,
			{
				key:	'name',
				label: '通報人姓名'
			}, 
			{
				key:	'workName',
				label:	'通報工程名稱'
			}, 
			{
				key:	'title',
				label:	'通報主題'
			},
			{
				key:	'wkut',
				label:	'主管機關'
			},
			{
				key:	'assignDate',
				label:	'分文日期'
			},
			{
				key:	'dealWkut',
				label:	'目前處理機關'
			},
			{
				key:	'beCloseDate',
				label:	'應結案日期'
			},
			{
				key:	'closeDate',
				label:	'結案日期'
			},
			{
				key:	'photoNumber',
				label:	'照片數'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, number: '11000000001', submitDate: '110/03/03', name: '林XX',	workName: '內政部營建署南區工程處空調設備節能改善',	title: '施工區域不明確', wkut:	'行政院工程會',
				assignDate:	'110/08/08',	dealWkut:'工程會',	beCloseDate:'110/09/01',	closeDate:	'110/09/09',	photoNumber:'5',	pk: 5566 },
			{ id: 2, number: '11000000001', submitDate: '110/08/08', name: '陳XX',	workName: '前金區東金公園改造工程',	title: '工程進度緩慢', wkut:	'臺中市政府',
				assignDate:	'110/07/07',	dealWkut:'工程會',	beCloseDate:'110/09/01',	photoNumber:'5',	closeDate:	'逾期未結案',	pk: 5566 },
			{ id: 3, number: '11000000001', submitDate: '110/10/10', name: '吳XX',	workName: '汐止區江長抽水站星座公園兒童遊戲新建工程',	title: '行人無法過馬路', wkut:	'新北市政府',
				assignDate:	'待分文',	dealWkut:'工程會',	beCloseDate:'110/09/01',	photoNumber:'5',	closeDate:	'待審查結案',	pk: 5566 },
		],
		checkAssign:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '未分案'	},
			{	value: 'Y', text: '已分案'	},
		],
		checkClosed:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '未結案'	},
			{	value: 'E', text: '逾期未結案'	},
			{	value: 'W', text: '待審查結案'	},
			{	value: 'Y', text: '已結案'	},
		],
		value1: '',
		value2: '',
		testBody:	[
			{
				test:	'1223'
			},
			{
				edit:	true,
			}
		],
		check2:	'N',
		check3:	'',
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
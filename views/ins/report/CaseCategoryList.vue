<template>
	<div>
		<br>
		<b-container fluid>
			<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>未填寫工程類別之通報案件一覽表</strong></h4></b-form-row>
			<b-form-row class="justify-content-end">
				<b-table striped hover :items="items" :fields="fields" head-variant="warning">
					<template #cell(action)="row">
						<b-button size="sm" variant="success" @click="gotoParam('CaseCategoryChange', row.item)">修改</b-button>
					</template>
				</b-table>
			</b-form-row>
		</b-container>
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
				label:	'流水號'
			},
			{
				key:	'caseNum',
				label:	'通報案件編號'
			},
			{
				key:	'submitDate',
				label:	'通報日期'
			},
			{
				key:	'wkut',
				label:	'主管機關',
			},
			{
				key:	'caseName',
				label:	'工程名稱'
			},
			{
				key:	'caseTopic',
				label:	'通報主題'
			},
			{
				key:	'category',
				label:	'工程類別'
			},
			{
				key:	'action',
				label:	''
			},
			
		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, wkut: '宜蘭縣政府', caseNum: '10800001770', submitDate: '111/3/4',	caseName:'台中火力發電廠',	caseTopic:'廠商偷工減料',	category:'',	pk: 5566 },
			{ id: 2, wkut: '台中市政府', caseNum: '10900001172', submitDate: '110/10/4',	caseName:'孔蓋不平',	caseTopic:'孔蓋不平',	category:'',	pk: 5566 },
			{ id: 3, wkut: '內政部',	caseNum: '10900000315', submitDate: '109/5/5',	caseName:'101年甲工區配電管路工程',	caseTopic:'台電設置人手孔蓋導致民眾滑倒',	category:'',	pk: 5566 },
		],
		totalcategory1:'48',
		totalcategory2:'23',
		totalcategory3:'8',
		totalcategory4:'',
		totalcategory5:'4',
		totalcategory6:'',
		totalcategory7:'3',
		totalOther:'2',
		totalSum:'88',
		checkClosed:	[
			{	value: '', text: '全部'	},
			{	value: 'N', text: '中央'	},
			{	value: 'E', text: '地方'	},
		],
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
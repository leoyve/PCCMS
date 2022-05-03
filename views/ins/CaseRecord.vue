<template>
	<div>
		<b-container >
			<h2>登錄處理情形</h2>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="outline-secondary" @click="gotoParam('CaseInfoEdit')" >回上一頁</b-button>
			</b-form-row>
			<b-form-row class="justify-content-start">
				<b-button size="sm" variant="info" @click="toPrint" >處理情形資料列印畫面</b-button>&ensp;
				<b-button size="sm" variant="success" @click="downloadDetail()">產生處理情形資料檔案</b-button>
			</b-form-row>
			<br>
			<b-form-row class="justify-content-start">
				<h6><font color='red'>1.請點按下表之「新增處理情形」、「編輯」或「刪除」鍵，填報通報案件之完整處理及改善情形。</font></h6>
			</b-form-row>
			<b-form-row class="justify-content-start">
				<h6><font color='red'>2.確認完成改善及上傳相關改善照片後，主辦機關應先申請結案作業，並由主管機關審查確認方可結案</font></h6>
			</b-form-row>
		</b-container>
		<br>
		<div>
			<b-container >
				<b-form-row class="justify-content-end">
					<b-button size="sm" variant="success" @click="gotoParam('CaseRecordEdit', {addFlag:true})" >新增</b-button>
				</b-form-row>
				<br>
				<b-form-row class="justify-content-center text-light bg-primary"><h4><strong>主辦機關處理情形紀錄一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-center">
					<b-table striped hover :items="items" :fields="fields" head-variant="dark">
						<template #cell(action)="row">
							<b-button size="sm" variant="success" @click="gotoParam('CaseRecordEdit', {updateFlag:true, ...row.item})">編輯</b-button> &ensp; 
							<b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
						</template>
						<template #cell(situation)="row">
							<b-container>
								<b-row>
									<b-col> {{ row.item.wkut}} </b-col>
								</b-row>
								<b-row>
									<b-col> {{ row.item.people	}} </b-col>
								</b-row>
								<b-row>
									<b-col> {{ row.item.tel	}} </b-col>
								</b-row>
								<b-row>
									<b-col> {{ row.item.mail	}} </b-col>
								</b-row>
							</b-container>
						</template>
					</b-table>
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
				key:	'date',
				label:	'處理日期'
			} ,
			{
				key:	'situation',
				label: '處理機關及人員'
			}, 
			{
				key:	'record',
				label:	'處理情形'
			}, 
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, number: '11000000001', date: '110/03/03', wkut: '行政院公共工程委員會',	people:'吳XX',	record: '施工區域不明確，規劃新動線以及人流管制',	
			tel:'02-12345678',	mail:'aaa@test.com',	pk: 5566 },
			
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
 methods: {
	toPrint(){
		//新開視窗
		let routeUrl = this.$router.resolve({name:'CaseRecordPrint'})
		window.open(routeUrl.href, '_blank'); 
	},
	downloadDetail(){
		alert("匯出明細檔案。");
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
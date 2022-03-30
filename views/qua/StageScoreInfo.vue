<template>
  <div>
    <br>
    <b-container fluid>
      <b-form-row class="justify-content-center text-light bg-primary"><h4><strong>受訓學員名單一覽表</strong></h4></b-form-row>
      <b-form-row class="justify-content-center ">
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
			<template #cell(action)="row">
				<b-button size="sm" variant="success" @click="gotoParam('StageScoreEdit', {updateFlag:true, ...row.item})">編輯</b-button>&nbsp;
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
      rows: 20,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'seatNumber',
				label:	'座號'
			},
			{
				key:	'name',
				label:	'姓名'
			},
			{
				key:	'testScore',
				label:	'測驗成績'
			},
			{
				key:	'makeUpScore1',
				label:	'第1次補考成績'
			},
			{
				key:	'makeUpScore2',
				label:	'第2次補考成績'
			},
			{
				key:	'overallResult',
				label:	'總成績'
			},
			{
				key:	'isQualifed',
				label:	'是否合格'
			},
			{
				key:	'graduationDate',
				label:	'結業證書年月'
			},
			{
				key:	'graduationNum',
				label:	'結業證書字號'
			},
			{
				key:	'action',
				label:	''
			},

		],
		items:	[
			{
				id: 1, seatNumber: 'FR1100101',name:'王XX',	testScore:67,makeUpScore1:'',makeUpScore2:'',overallResult:67,
				isQualifed:'是', graduationDate:'109/04',graduationNum:'FR1100101',pk: 5566
			},
			{
				id: 2, seatNumber: 'FR1100102', name:'陳XX',testScore:100,makeUpScore1:'',makeUpScore2:'',overallResult:100,
				isQualifed:'是', graduationDate:'110/06',graduationNum:'FR1100102',pk: 5566
			},
			{
				id: 3, seatNumber: 'FR1100103', name:'林XX',testScore:57,makeUpScore1:'59',makeUpScore2:'60',overallResult:60,
				isQualifed:'是', graduationDate:'111/03',graduationNum:'FR1100103',pk: 5566
			},
		],
     
  }
 },
 methods:  {
 }
}
</script>
<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
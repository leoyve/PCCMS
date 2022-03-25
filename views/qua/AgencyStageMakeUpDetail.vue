<template>
  <div>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >      
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('OpenPeriodDetail',)">回上一頁</b-button>
      </b-row>
    </b-container>
    <br>
    <stageSimplyInfo/>
    <br>
    <b-container>
      <b-form-row class="justify-content-center text-light bg-primary"><h4><strong>受訓學員補考成績及結業形一覽表</strong></h4></b-form-row>
      <b-form-row class="justify-content-center ">
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
			<template #cell(action)="row">
				<b-button size="sm" variant="success" @click="gotoParam('StageMakeUpEdit', {updateFlag:true, ...row.item})">編輯</b-button>&nbsp;
				<!--工程會管理員才有審查按鈕-->
				<b-button size="sm" variant="warning" @click="gotoParam('StageMakeUpSubmit', {updateFlag:true, ...row.item})">審查</b-button>&nbsp;
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
</template>


<script>
import stageSimplyInfo from './StageSimplyInfo.vue'
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
				key:	'stage',
				label:	'期別'
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
				label:	'第1次補考成績',
				thStyle: { width: "8%" },
			},
			{
				key:	'makeUpScore2',
				label:	'第2次補考成績',
				thStyle: { width: "8%" },
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
				key:	'submitStatus',
				label:	'送審狀態'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "12%" },
			},

		],
		items:	[
			{
				id: 1, stage:'FR11001',seatNumber: 'FR1100101',name:'王XX',	testScore:67,makeUpScore1:'',makeUpScore2:'',overallResult:67,
				isQualifed:'是', graduationDate:'109/04',graduationNum:'FR1100101',submitStatus:'未送審',pk: 5566
			},
			{
				id: 2,  stage:'FR11001',seatNumber: 'FR1100102', name:'陳XX',testScore:100,makeUpScore1:'',makeUpScore2:'',overallResult:100,
				isQualifed:'是', graduationDate:'110/06',graduationNum:'FR1100102',submitStatus:'送審中',pk: 5566
			},
			{
				id: 3,  stage:'FR11001',seatNumber: 'FR1100103', name:'林XX',testScore:57,makeUpScore1:'59',makeUpScore2:'60',overallResult:60,
				isQualifed:'是', graduationDate:'111/03',graduationNum:'FR1100103',submitStatus:'已送審',pk: 5566
			},
		],
     
  }
 },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
  },
  components:{
    stageSimplyInfo
  },
}
</script>
<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
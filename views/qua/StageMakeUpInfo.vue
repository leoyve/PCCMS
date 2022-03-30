<template>
  <div>
    <br>
    <b-container fluid>
      <b-form-row class="justify-content-center text-light bg-primary"><h4><strong>受訓學員補考成績及結業形一覽表</strong></h4></b-form-row>
      <b-form-row class="justify-content-center ">
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
			<template #cell(action)="row">
				<b-button size="sm" variant="success" @click="gotoParam('StageMakeUpEdit', {updateFlag:true, ...row.item})">編輯</b-button>&nbsp;
				<!--工程會管理員才有審查按鈕-->
				<b-button size="sm" variant="warning" @click="gotoParam('StageMakeUpSubmit', {updateFlag:true, ...row.item})">審查</b-button>&nbsp;
			</template>
		</b-table>
      </b-form-row>
    </b-container>
  </div>
</template>


<script>
export default {
  props:["items"],
  data(){
    return{
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
     
  }
 },
 methods:  {
   
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
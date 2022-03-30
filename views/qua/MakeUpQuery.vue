<template>
  <div>
    <br>
    <h3><strong><font color="brown">受訓學員補考成績及結業情形一覽表</font></strong></h3>
    <br>
    <b-container fluid>
		<b-row class="col-sm row justify-content-end" >
			<b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
		</b-row>
		<br>
		<b-form-row>
			<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="送審情形" label-align-md="right">
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
    <stageMakeUpInfo :items="items"/>
  </div>
</template>


<script>
import stageMakeUpInfo from './StageMakeUpInfo.vue'

export default {
  data(){
    return{
     options: [
		{	text:	'送審中',	value:	'A'},
		{	text:	'審查退件',	value:	'B'},
		{	text:	'未送審',	value:	'C'},
		{	text:	'未備查',	value:	'D'},
	],
	items:	[
		{
			id: 5, stage:'FR11001',seatNumber: 'FR1100101',name:'王XX',	testScore:67,makeUpScore1:'',makeUpScore2:'',overallResult:67,
			isQualifed:'是', graduationDate:'109/04',graduationNum:'FR1100101',submitStatus:'未送審',pk: 5566
		},
		{
			id: 6,  stage:'FR11001',seatNumber: 'FR1100102', name:'陳XX',testScore:100,makeUpScore1:'',makeUpScore2:'',overallResult:100,
			isQualifed:'是', graduationDate:'110/06',graduationNum:'FR1100102',submitStatus:'送審中',pk: 5566
		},
		{
			id: 7,  stage:'FR11001',seatNumber: 'FR1100103', name:'林XX',testScore:57,makeUpScore1:'59',makeUpScore2:'60',overallResult:60,
			isQualifed:'是', graduationDate:'111/03',graduationNum:'FR1100103',submitStatus:'已送審',pk: 5566
		},
	],
  }
 },
 methods:  {

  },
  components:{
    stageMakeUpInfo
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
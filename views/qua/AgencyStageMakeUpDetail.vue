<template>
  <div>
    <br>
    <b-container fluid>
      <b-row class="col-sm row justify-content-end" >      
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('OpenPeriodDetail',)">回上一頁</b-button>
      </b-row>
    </b-container>
    <br>
    <stageSimplyInfo/>
    <br>
    <stageMakeUpInfo :items="items"/>
  </div>
</template>


<script>
import stageSimplyInfo from './StageSimplyInfo.vue'
import stageMakeUpInfo from './StageMakeUpInfo.vue'

export default {
  data(){
    return{
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
    stageSimplyInfo,stageMakeUpInfo
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
<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>分案及查處詳細資料</strong></h2></b-form-row>
      <br>
      <b-container fluid>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="outline-secondary" @click="gotoParam('DivisionManager')">回上一頁</b-button>
        </b-form-row>
        <br>
      </b-container>
      <h4 class="text-left"><font color="blue">通報案件基本資料</font></h4>
      <br>
      <informCaseInfo/>
      <br>
      <h2 class="text-left"><font color="red">查處機關:雲林縣北港鎮公所</font></h2>
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11"><h4 class="text-left"><font color="red">◎分案資料</font><font color="blue">(工程會填報)</font></h4></b-col>
        <b-col class="col-md-1"><b-button size="sm" variant="success" @click="gotoParam('DivisionCaseEdit', {updateFlag:true})">編輯</b-button></b-col>
      </b-form-row>
      <divisionCaseInfo/>
      <br>
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11"><h4 class="text-left"><font color="red">◎查處資料</font><font color="blue">(查處機關填報)</font></h4></b-col>
        <b-col class="col-md-1"><b-button size="sm" variant="success" @click="gotoParam('InvestigateCaseEdit', )">編輯</b-button></b-col>
      </b-form-row>
      <investigateCaseInfo/>
      <br>
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11"><h4 class="text-left"><font color="red">◎地方主管機關審查資料</font><font color="blue">(地方主管機關填報)</font></h4></b-col>
        <b-col class="col-md-1"><b-button size="sm" variant="success" @click="gotoParam('LocalReviewCaseEdit', )">編輯</b-button></b-col>
      </b-form-row>
      <localReviewCaseInfo/>
      <br>
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11"><h4 class="text-left"><font color="red">◎中央目的事業主管機關審查資料</font><font color="blue">(中央目的事業主管機關填報)</font></h4></b-col>
        <b-col class="col-md-1"><b-button size="sm" variant="success" @click="gotoParam('CentralReviewCaseEdit', )">編輯</b-button></b-col>
      </b-form-row>
      <centerReviewCaseInfo/>
      <br>
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11"><h4 class="text-left"><font color="red">◎工程會審查意見資料</font><font color="blue">(查處機關依工程會意見填報)</font></h4></b-col>
        <b-col class="col-md-1"><b-button size="sm" variant="success" @click="gotoParam('PccmReviewCaseEdit', )">編輯</b-button></b-col>
      </b-form-row>
      <pccmReviewCaseInfo/>
      <br>
      <b-form-row class="justify-content-Start">
        <b-col class="col-md-11"><h4 class="text-left"><font color="red">◎是否納入閒置系統列管資料</font><font color="blue">(工程會填報)</font></h4></b-col>
        <b-col class="col-md-1"><b-button size="sm" variant="success" @click="gotoParam('FinalReivewCaseEdit', )">編輯</b-button></b-col>
      </b-form-row>
      <finalReviewCaseInfo/>
    <br>
  </div>
</template>


<script>
import informCaseInfo from './InformCaseInfo.vue'
import divisionCaseInfo from './DivisionCaseInfo.vue'
import investigateCaseInfo from './InvestigateCaseInfo.vue'
import localReviewCaseInfo from './LocalReviewCaseInfo.vue'
import centerReviewCaseInfo from './CenterReviewCaseInfo.vue'
import pccmReviewCaseInfo from './PccmReviewCaseInfo.vue'
import finalReviewCaseInfo from './FinalReviewCaseInfo.vue'




export default {
  data(){
    return{
    fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'divisionDate',
				label:	'分案日期'
			},
      {
				key:	'divisioNum',
				label:	'分案時間序號	'
			},
			{
				key:	'reason',
				label:	'分案原因'
			},
      {
				key:	'desc',
				label:	'分案意見說明	'
			},
      {
				key:	'wkut',
				label:	'查處機關	'
			},
      {
				key:	'situation',
				label:	'查處情形	',
        thStyle: { width: "30%" },
			},
      {
				key:	'isCheck',
				label:	'是否納入閒置系統列管	'
			},
      {
				key:	'caseNum',
				label:	'列管案件編號	'
			},
      {
				key:	'unReason',
				label:	'不納入列管原因	'
			},
      {
				key:	'action',
				label:	'',
        thStyle: { width: "10%" },
			},
		],
		items:	[
			{ divisionDate: '110/02/03', divisioNum:'1',reason:'分案原因',desc:'分案意見說明',wkut:'臺中市后里區后里國民小學',	
      situation:'依教育部104年9月23日臺教授國字第1040105213號函查處結果，「后里區后里國小通學步道工程」於104年5月12日與廠商終止契約，正辦理後續採購相關事宜，本設施尚處於施工期間，非屬閒置公共設施。',
      isCheck:'是',caseNum:'1100100001',unReason:'不納入列管原因', pk: 5566 },
	
		],
  }
 },
 methods:  {

  },
  components:{
    informCaseInfo,divisionCaseInfo,investigateCaseInfo,localReviewCaseInfo,centerReviewCaseInfo,pccmReviewCaseInfo,finalReviewCaseInfo
  },
  mounted(){
    this.items.forEach((items, index) => { items.serial = index + 1; });
  }

}
</script>
<style>
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}
</style>
<template>
	<div>
		<br>
		<h3><strong><font color="brown">學員結訓明細</font></strong></h3>
		<b-container fluid>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="gotoParam('',)">上傳EXCEL</b-button>&ensp; 
				<b-button size="xs" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
			</b-form-row>
		</b-container>
		<stageScoreInfo/>
		<br>
		<b-form-row class="justify-content-start">
			<!--備查是工程會管理員的權限-->
			<b-button size="lg" variant="info" @click="gotoParam('Stage2Submit', )">送審</b-button>&nbsp;
			<b-button size="lg" variant="success" @click="gotoParam('Stage2Review', )">備查(已備查、送審未備查...)</b-button>&nbsp;
		</b-form-row >
	</div>
</template>


<script>
import stageScoreInfo from './StageScoreInfo.vue'

export default {
 data(){
	return{
		
	}
 },
 methods: {
	
 },
  components:{
    stageScoreInfo
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
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
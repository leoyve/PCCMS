<template>
	<div>
		<br>
		<br>
		<b-container>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
			</b-form-row>
		</b-container>
		<br>
		<caseInfoSimple/>
		<br>
		<caseHandleInfo/>
		<br>
		<casePhotoInfo/>
	</div>
</template>


<script>
import caseInfoSimple from './CaseInfoSimple.vue'
import caseHandleInfo from './CaseHandleInfo.vue'
import casePhotoInfo from './CasePhotoInfo.vue'


export default {
 data(){
	return{
		
	}
 },
 methods: {
	

 },
 components:{
	caseInfoSimple,caseHandleInfo,casePhotoInfo
 }

}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
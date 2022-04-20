<template>
	<div>
		<br>
		<h3><strong>處理情形列印畫面</strong></h3>
		<br>
		<b-container fluid>
			<caseInfoSimple/>
			<caseHandleInfo/>
			<div style="text-align:left;"><h2 ><font color="red">滿意度之調查資料</font></h2></div>
			<caseSatisfactionInfo/>
		</b-container>
	</div>
</template>

<script>
import caseInfoSimple from './CaseInfoSimple.vue';
import caseHandleInfo from './CaseHandleInfo.vue';
import caseSatisfactionInfo from './CaseSatisfactionInfo.vue';

export default {
 data(){
	return{
		
	}
 },
 components: { caseInfoSimple, caseHandleInfo, caseSatisfactionInfo },
}
</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
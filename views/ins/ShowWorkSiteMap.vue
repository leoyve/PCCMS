<template>
	<div>
		<b-container>
			<b-row class="justify-content-end">
				<b-button size="sm" variant="success" v-promise-btn="{ promise: dataPromise }" @click="queryHandler" >回上一頁</b-button>&ensp; 
			</b-row>
			<b-row>
				<h2 class="text-center"><font color="red">[旱溪排水水環境及鄰近區域設施改善(第一標)]施工位置詳細圖</font></h2>
				<case-map-info-vue/>
			</b-row>
		</b-container>
		<br>
	</div>
</template>


<script>
import caseMapInfoVue from './CaseMapInfo.vue'

export default {
 data(){
	return{

	}
 },
 methods: {
	toSee(item){
		//alert(item.pk);
		console.log(item);
		if(item.wkut === '行政院工程會'){
			this.$router.push({name:'AssignCasePcc'})
		}else{
			this.$router.push({name:'AssignCaseHost'})
		}
		
	},
  queryHandler(){

  },
  reset(){

  }
 },
 components: {
    caseMapInfoVue,
  },

}


</script>

<style>
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
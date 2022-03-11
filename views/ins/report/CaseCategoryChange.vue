<template>
	<div>
		<b-container>
			<b-form-row >
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="工程類別" label-align-md="right">
					<b-form-select :options="type"></b-form-select>
				</b-form-group>
			</b-form-row>
			<b-form-row class="justify-content-end">
				<b-button size="sm" variant="success" @click="queryHandler" >補正類別</b-button>
			</b-form-row>
		</b-container>
		<br>
		<caseInfo/>
	</div>	
</template>


<script>
import caseInfo from '../CaseInfo.vue';

export default {
 data(){
	return{
		type: [
		{ value: '', text: '' , disabled: true},
        { value: '0', text: '建築新建工程' },
        { value: '1', text: '機電工程' },
        { value: '2', text: '水電工程' },
        { value: '3', text: '空調工程' },
		{ value: '4', text: '鐵路工程' },
      ],
	}
 },
 methods: {
	queryHandler(){
	},
	reset(){
	},
	toSee(){
		this.$router.push({name:'ReportCommonList'})
	},
 },
  components: {
	caseInfo
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
<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>開班期別結訓成果主管機關審核資料表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主管機關審核許可日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主管機關審核許可文號</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">審查狀態註記</b-col>
          <b-col class="col-md-10 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">申辦結訓成果資料上鎖日期</b-col>
          <b-col class="col-md-10 text-left"><b-datepicker></b-datepicker></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="update" >提交審核結果</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data(){
    return{
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      options: [
			{	text:	'同意備查',	value:	'A'},
			{	text:	'退回修正',	value:	'B'},
			{	text:	'回復未審查狀態',	value:	'B'},
		],
  }
 },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
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
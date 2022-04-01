<template>
  <div>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md bg-secondary text-light"><h3><strong>主辦機關對民眾通報案件之評價</strong></h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 bg-secondary text-light">通報案件之影響面評價(1.通報缺失地點完整精確2.通報內容具體明確3.對品質之提升有具體效益4.具實質廣泛之公共利益)：</b-col>
          <b-col class="col-md-8">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked1"
              :options="options"
              name="radio-options" disabled
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 bg-secondary text-light">通報民眾熱心程度評價(1.熱心配合協助辦理改善作業2.提供可資辨識之佐證資料3.通報後積極追蹤改善情形)：</b-col>
          <b-col class="col-md-8">
            <b-form-radio-group
              id="radio-group-2"
              v-model="picked2"
              :options="options"
              name="radio-options2" disabled
            ></b-form-radio-group>
          </b-col>
        </b-row>
      </b-container>
      <br>
  </div>
</template>


<script>
export default {
  props:  ['test',  'disabledFlag'],
  data(){
    return{
    options: [
			{	text:	'均能符合',	value:	'1'},
			{	text:	'大多能符合',	value:	'2'},
			{	text:	'部分符合',	value:	'3'},
			{	text:	'少數符合',	value:	'4'},
			{	text:	'均未能符合',	value:	'5'},
		],
    picked1:'2',
    picked2:'2'

  }
 },
 methods:  {
    insertData(){
      alert('InsertData1111');
    },
    reset(){

    }
  },
  mounted(){  //ready已經不被使用了
      console.log(this.showFlag);
      this.showFlag =  this.$route.params.showFlag;
  }
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

</style>
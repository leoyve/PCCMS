<template>
  <div>
    <br>
    <br>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>開訓/結訓通知單審查畫面</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">通知單號:</b-col>
          <b-col class="col-md-8 text-left">E11000000001</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">開班期別:</b-col>
          <b-col class="col-md-8 text-left">LR11001</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">代訓主題班別:</b-col>
          <b-col class="col-md-8 text-left">公共工程品質管理訓練班(土建) 【109年4月起適用】</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">狀態:</b-col>
          <b-col class="col-md-8 text-left">送審中</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">申請種類:</b-col>
          <b-col class="col-md-8 text-left">結訓</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">備註:</b-col>
          <b-col class="col-md-8 text-left">送審測試中</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">目前分配監考人員:</b-col>
          <b-col class="col-md-8 text-left">人員A:王XX、人員B:林XX、人員C:陳XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">監考人員:</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">卷別:</b-col>
          <b-col class="col-md-8 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="update">核准</b-button>&ensp;
        <b-button size="sm" variant="danger" @click="update">駁回</b-button>&ensp;
        <b-button size="sm" variant="info" @click="update">列印</b-button>&ensp;
        <b-button size="sm" variant="outline-secondary" @click="gotoParam('OpenAndEndSubmitQuery',)">取消</b-button>
      </b-row>
    </b-container>
    <br>
  </div>
</template>


<script>


export default {
  data(){
    return{
      options2: [
        {	text:	'開訓',	value:	'A'},
        {	text:	'結訓',	value:	'B'},
      ],
      check: [
        { value: '1', text: '是'},
        { value: '2', text: '否' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      
  }
 },
 methods:  {
   
  },

}
</script>
<style>
.col-md-4 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
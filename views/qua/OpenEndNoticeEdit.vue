<template>
  <div>
    <br>
    <br>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>開訓/結訓通知表單</strong></h2></b-form-row>
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
          <b-col class="col-md-8 text-left">未完成</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">申請種類:</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options2"
              name="radio-options"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-4 ">備註:</b-col>
          <b-col class="col-md-8 text-left">
            <b-form-textarea></b-form-textarea>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="add()" v-show="addFlag">新增</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">修改</b-button>&ensp; 
        <b-button size="sm" variant="success" @click="update" v-show="updateFlag">送審</b-button>&ensp; 
        <b-button size="sm" variant="danger" @click="update" v-show="updateFlag">作廢</b-button>&ensp; 
        <b-button size="sm" variant="info" @click="update" v-show="updateFlag">列印</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
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
   add(){
     alert('新增表單完成');
     this.gotoParam('OpenAndEndNoticeQuery', );
   }
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
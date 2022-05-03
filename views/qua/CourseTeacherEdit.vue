<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>授課教師名單表登錄表單</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">單元名稱</b-col>
          <b-col class="col-md-10 text-left">基礎開挖與品管</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">課程名稱</b-col>
          <b-col class="col-md-10 text-left">政府採購全生命週期概論</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">課程時數</b-col>
          <b-col class="col-md-10 text-left">4</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>授課教師</b-col>
          <b-col class="col-md-10 text-left"><b-form-select :options="type"></b-form-select></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="update">編輯</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
      </b-row>
    </b-container>
  </div>
</template>


<script>


export default {
  data(){
    return{

      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
   
    type: [
      { value: '5', text: '請選擇' },
			{ value: '0', text: '林XXX(XX處長)' },
			{ value: '1', text: '吳XX(XX教授)' },
			{ value: '2', text: '陳XX(課長)' },
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
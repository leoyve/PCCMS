<template>
  <div>
      <b-container>
        <h3>上傳照片資料</h3>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">上傳機關</b-col>
          <b-col class="col-md ">民眾</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">照片</b-col>
          <b-col class="col-md"><b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg" width="200"/>(點選可放大照片)
          <input type="file"/>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">照片說明</b-col>
          <b-col class="col-md"><b-form-input></b-form-input></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">上傳照片審查結果</b-col>
          <b-col class="col-md"><b-form-radio-group v-model="check2" :options="reviewResult" name="radio-validation-1"></b-form-radio-group></b-col>
        </b-row>
          <b-row class="border border-dark">
          <b-col class="col-md-2 ">審核不通過理由</b-col>
          <b-col class="col-md ">
              <b-form-radio-group v-model="check2" :options="reviewReason" name="radio-stacked" stacked></b-form-radio-group>
          </b-col>
        </b-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="queryHandler" >送出審查結果</b-button>&nbsp;
          <b-button size="sm" variant="outline-secondary" @click="goBack()" >取消</b-button>
        </b-form-row>
      </b-container>
      <br>
      
  </div>
</template>


<script>
export default {
  data(){
    return{
      reviewResult:	[
			{	value: '', text: '審查合格'	},
			{	value: 'Y', text: '審查不通過'	},
			{	value: 'N', text: '刪除'	},
      {	value: 'N', text: '回復未審查狀態'	},
		],
    reviewReason: [
      {	value: '1', text: '照片說明未填寫'	},
			{	value: '2', text: '照片說明未盡詳實'	},
			{	value: '3', text: '照片說明未與照片內容相符'	},
      {	value: '4', text: '照片說明不雅'	},
      {	value: '5', text: '照片影像不清或模糊'	},
      {	value: '6', text: '照片內容與通報案件無重大關聯'	},
      {	value: '7', text: '照片內容無任何特色或代表意義'	},
      {	value: '8', text: '照片內容不雅'	},
      {	value: '9', text: '照片內容含有個資'	},
      {	value: '10', text: '其他'	},
    ]
  }
 },
 methods:  {
    queryHandler(){

    },
    reset(){

    }
  },
  mounted(){  //ready已經不被使用了
    //  console.log(this.showFlag);
   //   this.showFlag =  this.$route.params.showFlag;
  }
}
</script>
<style>
.col-md-2 {
  background-color: rgb(0, 153, 255);
  color: white;
  text-align: left;
}

.col-sm{
  padding: 1px;
}
</style>
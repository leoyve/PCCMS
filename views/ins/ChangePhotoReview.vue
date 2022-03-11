<template>
  <div>
      <b-container>
        <h3>通報案件[編號：11000000075]上傳照片資料</h3>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">上傳機關</b-col>
          <b-col class="col-md text-left">行政院公共工程委員會</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">照片</b-col>
          <b-col class="col-md text-left"><b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg" width="200"></b-img></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">照片說明</b-col>
          <b-col class="col-md text-left"><b-textarea></b-textarea></b-col>
        </b-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="queryHandler" >修正照片說明文字</b-button> &ensp; 
          <b-button size="sm" variant="secondary" @click="queryHandler" >取消</b-button>
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
      {	value: 'Y', text: '同意免需上傳改善照片檔案'	},
			{	value: 'N', text: '不同意免需上傳改善照片檔案'	},
			{	value: 'W', text: '回復未審查狀態'	},
    ]
  }
 },
 methods:  {
    queryHandler(){
      this.$router.push({name:'UploadCasePhoto'})
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
<template>
  <div>
      <br>
      <h3><strong>上傳照片資料</strong></h3>
      <br>
      <b-container>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">申請日期</b-col>
          <b-col class="col-md text-left">110/04/09</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">申請機關</b-col>
          <b-col class="col-md text-left">新北市政府</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">姓名</b-col>
          <b-col class="col-md text-left">陳XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">電話</b-col>
          <b-col class="col-md text-left">09XX-XXX-XXX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">EMAIL</b-col>
          <b-col class="col-md text-left">text@pcc.gov.tw</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">申請理由</b-col>
          <b-col class="col-md text-left">(1)本案照片係上傳於編號11000000386內，惟系統出錯導致立案未完成，爰申請免上傳照片。 (2)已請通報人重新通報立案。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">審查結果</b-col>
          <b-col class="col-md text-left">
              <b-form-radio-group v-model="check2" :options="reviewReason" name="radio-stacked" ></b-form-radio-group>
          </b-col>
        </b-row>
          <b-row class="border border-dark">
          <b-col class="col-md-2 ">不同意理由</b-col>
          <b-col class="col-md text-left"><b-textarea></b-textarea></b-col>
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
        {	value: 'Y', text: '同意免需上傳改善照片檔案'	},
        {	value: 'N', text: '不同意免需上傳改善照片檔案'	},
        {	value: 'W', text: '回復未審查狀態'	},
      ]
  }
 },
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
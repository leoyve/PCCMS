<template>
  <div>
    <br>
      <b-container fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置設施通報案件--中央目的事業主管機關審查資料</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>中央目的事業主管機關審查者姓名</b-col>
          <b-col class="col-md-10 text-left "><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>中央目的事業主管機關審查者連絡電話</b-col>
          <b-col class="col-md-4 text-left "><b-form-input/></b-col>
          <b-col class="col-md-2 "><font color="red">*</font>中央目的事業主管機關審查者電子郵件地址</b-col>
          <b-col class="col-md-4 text-left"><b-form-input/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>中央目的事業主管機關建議是否納入閒置系統列管</b-col>
          <b-col class="col-md-10 text-left ">
            <b-form-radio-group
              id="radio-group-1"
              v-model="picked"
              :options="options"
              name="radio-options1"
            ></b-form-radio-group>
          </b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">中央目的事業主管機關審查意見</b-col>
          <b-col class="col-md-10 text-left"><b-form-textarea/></b-col>
        </b-row>
        <br />
        <b-row class="row justify-content-end">
          <b-button size="sm" variant="success" @click="update">儲存</b-button>&ensp;
          <b-button size="sm" variant="outline-secondary" @click="goBack()" >取消</b-button>
        </b-row>
      </b-container>
  </div>
</template>


<script>

export default {
  data(){
    return{
     options:[
        { value: "N", text: "不納入閒置系統列管" },
        { value: "Y", text: "納入閒置系統列管" },
      ],
  }
 },
 methods:  {
   
  },

}
</script>
<style>
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}

</style>
<template>
  <div>
    <br>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">閒置設施通報案件--審查意見資料</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark">工程會審查意見</b-col>
          <b-col class="col-md-10 text-left "><b-form-textarea/></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-dark"><font color="red">*</font>查處機關答覆說明</b-col>
          <b-col class="col-md-10 text-left "><b-form-textarea/></b-col>
        </b-row>
        <br />
        <b-row class="row justify-content-end">
          <b-button size="sm" variant="success" @click="update">修改</b-button>&ensp;
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
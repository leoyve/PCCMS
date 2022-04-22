<template>
  <div>
    <br>
    <h3>登錄閒置公共設施案件對象及地址</h3>
    <br>
    <b-container>
      <b-row >
        <b-col class="text-left">
          <b-img src="https://3.bp.blogspot.com/-w9HiLyHppwY/Wuvbr6udP9I/AAAAAAAFgyk/f3t4b7tQxi89EHyeYLsv2NefE_4BlbfZACLcBGAs/s1600/Snap6.jpg"></b-img>
        </b-col>
      </b-row>
      <br>
      <b-row class="border border-dark">
        <b-col class="col-md-2">閒置公共設施所在地點：</b-col>
        <b-col class="col-md-10 text-left"><b-input value="臺北市中正區文祥里1鄰杭州南路二段133之1號"/></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">公共設施名稱：</b-col>
        <b-col class="col-md-10 text-left"><b-input placeholder="通報地點鄰近如有列管中之閒置案件，將顯示於圖台供參，俾免重複通報"/></b-col>
      </b-row>
      <b-row class="border border-dark">
        <b-col class="col-md-2">權責機關：</b-col>
        <b-col class="col-md-10 text-left"><b-input/></b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <b-button size="sm" variant="success"  @click="queryHandler" >送出</b-button>&nbsp;
          <b-button size="sm" variant="outline-secondary"  @click="goBack()" >取消</b-button>&nbsp;
        </b-col>
      </b-row>
    </b-container>
    <br>
  </div>
</template>


<script>

export default {
  data(){
    return{
      city:[
        {text:'台北市', value:1},
        {text:'新北市', value:1},
        {text:'桃園市', value:1},
        {text:'新竹市', value:1},
      ],
      region:[
        {text:'新莊區', value:1},
        {text:'板橋區', value:1},
        {text:'三重區', value:1},
        {text:'新店區', value:1},
      ]
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
.col-form-label {
  background-color: #737373;
  color: white;
  font-weight: bolder;
}
</style>
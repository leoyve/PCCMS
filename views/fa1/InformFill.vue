<template>
  <div>
    <br>
    <h3>請先於地理圖台上定位您的通報案件所在地點</h3>
    <br>
    <b-container>
      <b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="縣市" label-align-md="right">
					<b-select :options="city"/>
				</b-form-group>
			</b-form-row>
      <b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="鄉鎮市區" label-align-md="right">
					<b-select :options="region"/>
				</b-form-group>
			</b-form-row>
      <b-form-row>
				<b-form-group class="col-md-12" label-cols-md="3" content-cols-md="9" label="地址" label-align-md="right">
					<b-input type="search"/>
				</b-form-group>
			</b-form-row>
      <b-form-row class="justify-content-end">
				<b-button size="sm" variant="success"  @click="queryHandler" >定位</b-button>&nbsp;
			</b-form-row>
      <b-form-row class="justify-content-end">
				<b-col class="text-left">請您先於圖台填入通報設施之地址，再以滑鼠移至正確之設施位置後點按一下，即可完成定位</b-col>
			</b-form-row>
      <br>
      <b-row >
        <b-col class="text-left">
          <b-img src="https://3.bp.blogspot.com/-w9HiLyHppwY/Wuvbr6udP9I/AAAAAAAFgyk/f3t4b7tQxi89EHyeYLsv2NefE_4BlbfZACLcBGAs/s1600/Snap6.jpg"></b-img>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <b-button size="lg" variant="success"  @click="gotoParam('InformFillDeatil')" >填寫通報資訊</b-button>&nbsp;
          <b-button size="lg" variant="outline-secondary"  @click="gotoParam('InfoInedx')" >取消</b-button>&nbsp;
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
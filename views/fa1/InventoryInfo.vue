<template>
  <div>
    <br>
      <b-container fluid>
        <b-row>
          <b-col class="text-right">
            <b-button size="sm" variant="success" @click="gotoParam('InventoryEdit', {updateFlag:true})">編輯</b-button>&nbsp;
            <b-button size="sm" variant="danger" @click="deleteCheck()">刪除</b-button>&nbsp;
            <b-button size="sm" variant="outline-secondary" @click="goBack()">回上一頁</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-left"><h3><strong><font color="red">清查公共設施基本資料表</font></strong></h3></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-12 bg-secondary text-light">清查公共設施基本資料表</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">設施編號</b-col>
          <b-col class="col-md-10 text-left ">1010000000176</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">設施名稱</b-col>
          <b-col class="col-md-10 text-left ">頭份鎮停二立體停車場</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">設施類別</b-col>
          <b-col class="col-md-10 text-left ">工程設施</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">設施管理機關</b-col>
          <b-col class="col-md-10 text-left">苗栗縣頭份市公所</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">主管機關</b-col>
          <b-col class="col-md-10 text-left">內政部</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">目的事業主管機關</b-col>
          <b-col class="col-md-10 text-left">內政部</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">設施規模概述</b-col>
          <b-col class="col-md-10 text-left ">設計水量5,000CMD</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">是否正常使用</b-col>
          <b-col class="col-md-10 text-left ">是</b-col>
        </b-row>
        
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">設施使用情形概述</b-col>
          <b-col class="col-md-10 text-left">處理生活污水或截流污水水量達設計水量 97.7%。</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">備註</b-col>
          <b-col class="col-md-10 text-left"></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 text-light">是否曾被列管</b-col>
          <b-col class="col-md-10 text-left">是</b-col>
        </b-row>
        <b-row class="border border-dark" v-show="detailFlag">
          <b-col class="col-md-2 text-light">計畫基本資料是否上鎖</b-col>
          <b-col class="col-md-10 text-left">是</b-col>
        </b-row>
      </b-container>
      <br>
      <b-container fluid>
        <b-form-row class="justify-content-center "><h2><strong><font color="red">抽查紀錄</font></strong></h2></b-form-row>
        <b-form-row class="justify-content-end ">
          <b-button size="xs" variant="success" @click="gotoParam('SpotCheckRecord')">新增</b-button>
        </b-form-row>
        <br>
        <b-form-row class="justify-content-center ">
          <b-table striped hover :items="items" :fields="fields" head-variant="dark">
            <template #cell(action)="row">
              <b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
            </template>
          </b-table>
        </b-form-row>
      </b-container>
  </div>
</template>


<script>

export default {
  props:["detailFlag"],
  data(){
    return{
     fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'record',
				label:	'抽查紀錄'
			},
      {
				key:	'recordDate',
				label:	'抽查日期'
			},
			{
				key:	'comment',
				label:	'備註'
			},
      {
				key:	'action',
				label:	''
			},
		],
		items:	[
			{ record:'抽查紀錄1',recordDate: '110/02/03', comment:'110年抽查紀錄',	pk: 5566 },
			{ record:'抽查紀錄2',recordDate: '109/11/12', comment:'109年抽查紀錄',	pk: 5566 },
			{ record:'抽查紀錄3',recordDate: '108/10/09', comment:'108年抽查紀錄',	pk: 5566 },
		],
  }
 },
 methods:  {
   
  },
  mounted(){
    this.items.forEach((items, index) => { items.serial = index + 1; });
  }

}
</script>
<style>
.col-md-2 {
  background-color: rgb(183, 197, 206);
  color: black;
  text-align: left;
}

</style>
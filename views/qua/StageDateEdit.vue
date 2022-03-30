<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-center "><h2><strong>開班期別基本資料異動申請表</strong></h2></b-form-row>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">異動申請單號:</b-col>
          <b-col class="col-md-10 text-left">R110000000XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">期別:</b-col>
          <b-col class="col-md-10 text-left">FR1100101</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">異動類別:</b-col>
          <!--選了授課資訊後-->
          <b-col class="col-md-10 text-left"><b-form-select :options="changeType"></b-form-select></b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">原欄位資訊</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
         <b-row class="border border-dark">
          <b-col class="col-md-2 ">異動後資訊</b-col>
          <b-col class="col-md-10 text-left"><b-form-input></b-form-input></b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container>
      <b-row class="col-sm row justify-content-end" >
        <b-button size="sm" variant="success" @click="update" >送審</b-button>&ensp; 
        <b-button size="sm" variant="danger" @click="update" v-show="updateFlag">作廢</b-button>&ensp; 
        <b-button size="sm" variant="info" @click="update" v-show="updateFlag">列印</b-button>&ensp; 
        <b-button size="sm" variant="outline-secondary" @click="goBack()">取消</b-button>
      </b-row>
    </b-container>
    <br>
    <b-container>
      <b-form-row class="justify-content-center text-light bg-primary"><h4><strong>授課教師名單表</strong></h4></b-form-row>
      <b-form-row class="justify-content-center ">
        <b-table striped hover :items="items" :fields="fields" head-variant="light">
          <template #cell(action)="row">
            <!--點了異動將資訊帶到上面-->
            <b-button size="sm" variant="warning" @click="gotoParam('', row.item)">異動</b-button>&nbsp;
          </template>
        </b-table>
      </b-form-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data(){
    return{
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      changeType: [
			{	text:	'期別',	value:	'A'},
			{	text:	'地址',	value:	'B'},
			{	text:	'結訓日期',	value:	'B'},
      {	text:	'訓練日期',	value:	'B'},
      {	text:	'授課資訊',	value:	'B'},
		],
    rows: 20,
		perPage: 1,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'className',
				label:	'單元名稱'
			},
			{
				key:	'course',
				label:	'課程名稱'
			},
			{
				key:	'classHours',
				label:	'課程時數'
			},
			{
				key:	'teacher',
				label:	'授課教師',
				thStyle: { width: "8%" },
			},
			{
				key:	'serviceUnit',
				label:	'目前服務單位'
			},
			{
				key:	'title',
				label:	'職稱'
			},
			{
				key:	'action',
				label:	''
			},

		],
		items:	[
			{
				id: 1, className: '基礎開挖與品管', course: '政府採購全生命週期概論',	classHours:1,teacher:'王XX',	
        serviceUnit:'行政院客家委員會', title:'主任',pk: 5566
			},
			{
				id: 2, className: '基礎開挖與品管', course: '	最新政策與法規',	classHours:4,	teacher:'陳XX',	
        serviceUnit:'淡江大學推廣教育處', title:'教授',pk: 5566
			},
			{
				id: 3, className: '基礎開挖與品管', course: '擋土樁工程',	classHours:6,	teacher:'林XX',	
        serviceUnit:'行政院工程委員會', title:'處長',pk: 5566
			},
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
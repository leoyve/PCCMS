<template>
  <div>
      <br>
      <h3><strong>更換照片</strong></h3>
      <br>
      <b-container>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">照片</b-col>
          <b-col class="col-md"><b-img src="https://www.mdnkids.com/upload/images/20210703-06-09.jpg" width="200"/>(點選可放大照片)
            <input type="file"/>
          </b-col>
        </b-row>
        <br>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="queryHandler" >更換</b-button>&nbsp;
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
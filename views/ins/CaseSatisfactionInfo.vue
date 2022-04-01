<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-center text-light bg-secondary">
        <h4><strong>滿意度調查資料一覽表</strong></h4>
      </b-row>
      <b-row>
        <b-table striped hover :items="items" :fields="fields" head-variant="light"></b-table>
      </b-row>
      <br>
    </b-container>
  </div>
</template>


<script>
export default {
  data(){
    return{
      fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'date',
				label:	'處理日期'
			} ,
			{
				key:	'satisfaction',
				label: '民眾滿意度'
			}, 
			{
				key:	'satisfactionComment',
				label:	'滿意/不滿意原因'
			}, 
			{
				key:	'dealWith',
				label:	'機關回復說明'
			},
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, number: '11000000001', date: '110/03/03', satisfaction: '非常滿意',  satisfactionComment: '督工系統管理者代為新增！',	dealWith:'已經盡快處理',  pk: 5566 },
			
		],
    
  }
 },
 methods:  {
    insertData(){
      alert('InsertData1111');
    },
    reset(){

    }
  },
  mounted(){  //ready已經不被使用了
      console.log(this.showFlag);
      this.showFlag =  this.$route.params.showFlag;
  }
}
</script>
<style>

</style>
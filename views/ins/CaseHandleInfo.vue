<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-center text-light bg-secondary">
        <h4><strong>主辦機關處理情形紀錄一覽表</strong></h4>
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
				key:	'wkut',
				label: '處理機關'
			}, 
			{
				key:	'record',
				label:	'處理情形'
			}, 
			{
				key:	'action',
				label:	''
			},
			],
		items:	[
			//待分文要顯示紅字，結案日期逾期未結案也要顯示紅字，應結案日期小於SYSDATE也要
			{ id: 1, number: '11000000001', date: '110/03/03', wkut: '行政院公共工程委員會',record: '施工區域不明確，規劃新動線以及人流管制',	pk: 5566 },
			
		],
    
  }
 },
  methods:  {
    insertData(){
      alert('InsertData1111');
    },
  },
  mounted(){ 
      this.showFlag =  this.$route.params.showFlag;
  }
}
</script>
<style>

</style>
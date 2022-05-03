<template>
  <div>
      <b-container  fluid>
        <b-form-row class="justify-content-center text-light bg-primary"><h4><strong>預算來源一覽表</strong></h4></b-form-row>
				<b-form-row class="justify-content-end">
					<b-table striped hover :items="items" :fields="fields" head-variant="light">
            <template #cell(action)="row">
              <b-button size="sm" variant="success" @click="gotoParam('Fa1BudgetEdit', {updateFlag:true, ...row.item})">編輯</b-button>&nbsp;
              <b-button size="sm" variant="danger" @click="deleteCheck()">刪除</b-button>
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
     fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key:	'type',
				label:	'中央或地方'
			},
			{
				key:	'unit',
				label:	'預算來源單位',
			},
			{
				key:	'plan',
				label:	'政策或計畫名稱',
			},
			{
				key:	'year',
				label:	'年度'
			},
			{
				key:	'amount',
				label:	'金額(千元)'
			},
			{
				key:	'action',
				label:	''
			},
		],
		items:	[
			{	type:'中央', unit:'台灣省交通處旅遊事業管理局',plan:'',year:'082',amount:'21334'},
			{	type:'中央', unit:'台灣省政府民政廳',plan:'公共造產補助款',year:'081',amount:'2680'},
      {	type:'地方', unit:'雲林縣政府',plan:'各項補助等',year:'083',amount:'37780'},
		]
  }
 },
 methods:  {
   
  },
  mounted(){
	this.items.forEach((items, index) => { items.serial = index + 1; });
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
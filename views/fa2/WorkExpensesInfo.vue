<template>
  <div>
      <b-container fluid>
        <b-form-row class="row justify-content-center bg-secondary text-light"><h3>各月預定支用經費一覽表</h3></b-form-row>
        <b-form-row class="row justify-content-end">
          <b-table striped hover :items="items" :fields="fields" >
            <template #cell(action)="row" v-if="modifyFlag">
              <b-button size="sm" variant="success" @click="gotoParam('WorkExpensesEdit', {updateFlag:true,...row.item})">修改</b-button>&nbsp;
              <b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
            </template>
          </b-table>
        </b-form-row>
      </b-container>
  </div>
</template>

<script>

export default {
  props:['modifyFlag'],
  data(){
    return{
      fields: [
			{
				key:	'serial',
				label:	'流水號'
			},
			{
				key: 'SYRMNTH',
				label:	'年月'
			},
			{
				key: 'PEXP',
				label:	'累計預定執行經費(千元)'
			},
			{
				key:	'MEMO',
				label:	'當月執行經費用途說明',
        tdClass: 'text-left',
			},
			{
        key:	'action',
				label:	'',
      }
		],
		items:[
      { SYRMNTH:'10701',PEXP:'200',MEMO:'	辦理頭份鎮停二立體停車場拆除工程上網公開招標事宜'},
      { SYRMNTH:'10702',PEXP:'1,000',MEMO:'	辦理頭份鎮停二立體停車場拆除工程開工事宜'},
      { SYRMNTH:'10703',PEXP:'2,500',MEMO:'	辦理頭份鎮停二立體停車場拆除工程施工事宜'},
      { SYRMNTH:'10704',PEXP:'3,500',MEMO:'	辦理頭份鎮停二立體停車場拆除工程施工事宜'},
      { SYRMNTH:'10705',PEXP:'5,00',MEMO:'	辦理頭份鎮停二立體停車場拆除工程完工驗收事宜'},
    ]
     
  }
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
<template>
  <div>
      <b-container fluid>
        <b-form-row class="row justify-content-center bg-secondary text-light"><h3>活化工作里程碑一覽表</h3></b-form-row>
        <b-form-row class="row justify-content-end">
          <b-table striped hover :items="items" :fields="fields" >
            <template #cell(action)="row" v-if="modifyFlag">
              <b-button size="sm" variant="outline-secondary" @click="gotoParam('WorkMilestoneList', row.item)">檢視</b-button>&nbsp;
              <b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
            </template>
            <template #cell(milestone)="row">
              <b-container >
                <b-row v-for="(milestone, index) in row.item.mileList" :key="milestone.key">
                  <b-col>{{index+1}}. {{milestone.desc}} {{milestone.date}}</b-col>
                </b-row>
              </b-container>
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
				key: 'PRJNO',
				label:	'工作編號'
			},
			{
				key: 'NAME',
				label:	'工作名稱'
			},
			{
				key:	'TOTAMT',
				label:	'經費(仟元)'
			},
			{
				key:	'BDATE',
				label:	'工作起始日期'
			},
      {
				key:	'EDATE',
				label:	'工作結束日期'
			},
      {
				key:	'PRJKIND',
				label:	'工作類別'
			},
      {
				key:	'milestone',
				label:	'工作說明資料',
        tdClass: 'text-left',
        thStyle: { width: "30%" },
			},
      {
				key:	'action',
				label:	''
			},
		],
		items:[
      { PRJNO:'106000000400001', NAME:'頭份鎮停二機械式立體停車場拆除工程',TOTAMT:'5,000',BDATE:'1070101',EDATE:'1070531',
        PRJKIND:'工程採購', mileList:[
        {desc:'招標公告日期', date:'1070205'},{desc:'決標日期', date:'1070226'},{desc:'開工日期', date:'1070301'},
        {desc:'完工日期', date:'1070529'},{desc:'驗收日期', date:'1070601'},]
      }
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
<template>
  <div>
      <b-container fluid>
        <b-form-row class="row justify-content-center bg-secondary text-light"><h3>歷次核定版次一覽表</h3></b-form-row>
        <b-form-row class="row justify-content-end">
          <b-table striped hover :items="items" :fields="fields" >
            <template #cell(action)="row">
              <b-button size="sm" variant="info" @click="gotoParam('ActivationsVersionDetail', {verFlag:true, ...row.item})">查詢</b-button>&nbsp;
            </template>
            <template #cell(pccm)="row">
              <b-container>
                <b-row>
                  <b-col>{{row.item.pccmDate}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.pccmNum}}</b-col>
                </b-row>
              </b-container>
            </template>
            <template #cell(executive)="row">
              <b-container>
                <b-row>
                  <b-col>{{row.item.executiveDate}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.executiveNum}}</b-col>
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
  data(){
    return{
      fields: [
			{
				key:	'ver',
				label:	'版次'
			},
			{
				key: 'planName',
				label:	'活化計畫名稱',
        tdClass: 'text-left',
        thStyle: { width: "15%" },
			},
			{
				key: 'constName',
				label:	'公共設施名稱',
        tdClass: 'text-left',
        thStyle: { width: "15%" },
			},
			{
				key:	'amount',
				label:	'核定經費數(仟元)',
			},
      {
				key:	'bdate',
				label:	'活化計畫起始日',
			},
      {
				key:	'edate',
				label:	'活化計畫結束日',
			},
      {
				key:	'pccm',
				label:	'工程會審查日期及文號',
        tdClass: 'text-left',
        thStyle: { width: "15%" },
			},
      {
				key:	'executive',
				label:	'行政院核定日期及文號',
        tdClass: 'text-left',
        thStyle: { width: "15%" },
			},
			{
        key:	'action',
				label:	'',
      }
		],
		items:[
      { ver:'2',planName:'新竹縣關西鎮迎風館106年度活化計畫',constName:'新竹縣關西鎮迎風館(原新竹縣產業交流中心迎風館)',amount:'4,850',
      bdate:'1070101',edate:'1070830',pccmDate:'1110202', pccmNum:'工程管字第11100004360號函',
      executiveDate:'1110303',executiveNum:'院臺工字第1110000586號'},
      { ver:'1',planName:'新竹縣關西鎮迎風館106年度活化計畫',constName:'新竹縣關西鎮迎風館(原新竹縣產業交流中心迎風館)',amount:'4,850',
      bdate:'1070101',edate:'1070630',pccmDate:'1070104', pccmNum:'工程管字第10700004360號函',
      executiveDate:'1070122',executiveNum:'院臺工字第1070000586號'},
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

</style>
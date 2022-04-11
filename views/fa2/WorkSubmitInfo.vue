<template>
  <div>
      <b-container fluid>
        <b-form-row class="row justify-content-center bg-secondary text-light"><h3>計畫歷次送審及核定情形一覽表</h3></b-form-row>
        <b-form-row class="row justify-content-end">
          <b-table striped hover :items="items" :fields="fields" >
            <template #cell(apply)="row">
              <b-container >
                <b-row>
                  <b-col>{{row.item.applyDate}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.apply}}</b-col>
                </b-row>
              </b-container>
            </template>
            <template #cell(apply2)="row">
              <b-container >
                <b-row>
                  <b-col>{{row.item.apply2Date}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.apply2}}</b-col>
                </b-row>
              </b-container>
            </template>
            <template #cell(apply3)="row">
              <b-container >
                <b-row>
                  <b-col>{{row.item.apply3Date}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.apply3}}</b-col>
                </b-row>
              </b-container>
            </template>
            <template #cell(review)="row">
              <b-container >
                <b-row>
                  <b-col><strong>工程會</strong></b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.reviewDate}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.review}}</b-col>
                </b-row>
                <b-row>
                  <b-col><strong>行政院</strong></b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.approveDate}}</b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.approve}}</b-col>
                </b-row>
              </b-container>
            </template>
            <template #cell(detail)="row">
              <b-container >
                <b-row>
                  <b-col>核定經費：{{row.item.plnamt}}千元</b-col>
                </b-row>
                <b-row>
                  <b-col>核定期程：{{row.item.bdate}} ~ {{row.item.edate}}</b-col>
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
				key:	'serial',
				label:	'流水號',
        thStyle: { width: "5%" },
			},
			{
				key: 'apply',
				label:	'主辦機關送審日期及文號',
        tdClass: 'text-left',
        thStyle: { width: "10%" },
			},
			{
				key: 'apply2',
				label:	'地方主管機關核轉送審日期及文號',
        tdClass: 'text-left',
        thStyle: { width: "10%" },
			},
			{
				key:	'apply3',
				label:	'中央目的事業主管機關核轉送審日期及文號',
        tdClass: 'text-left',
        thStyle: { width: "10%" },
			},
			{
				key:	'review',
				label:	'工程會核定日期及文號',
        tdClass: 'text-left',
        thStyle: { width: "10%" },
			},
      {
				key:	'reason',
				label:	'送審原因'
			},
      {
				key:	'RESULT',
				label:	'核定結果'
			},
      {
				key:	'MEMO',
				label:	'審核意見',
			},
      {
				key:	'detail',
				label:	'備註',
        tdClass: 'text-left',
        thStyle: { width: "15%" },
			},
		],
		items:[
      {applyDate:'1081111', apply:'臺教社(三)字第1080161801號', apply2Date:'1081004',apply2:'府授文圖字第1080154230號',
      apply3Date:'1070524', apply3:'107年4月30日經授營字第10720360870號函及107年5月24日經授營字第10720363060號書函',
      reviewDate:'1070723',review:'107年7月31日工程管字第10700235660號函',
      approveDate:'1070816',approve:'107年8月16日院臺工字第1070028500號函',reason:'送審測試',RESULT:'同意',
      MEMO:'無意見',plnamt:4850, bdate:'1070101', edate:'1070830'},
       {applyDate:'1081111', apply:'臺教社(三)字第1080161801號', apply2Date:'1081004',apply2:'府授文圖字第1080154230號',
      apply3Date:'1070524', apply3:'107年4月30日經授營字第10720360870號函及107年5月24日經授營字第10720363060號書函',
      reviewDate:'1070723',review:'107年7月31日工程管字第10700235660號函',
      approveDate:'1070816',approve:'107年8月16日院臺工字第1070028500號函',reason:'送審測試',RESULT:'審核中',
      MEMO:'無意見',plnamt:4850, bdate:'1070101', edate:'1070830'},
      
    ],
     
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
.col-md-4 {
  background-color: white;
  color: black;
  text-align: left;
}

</style>
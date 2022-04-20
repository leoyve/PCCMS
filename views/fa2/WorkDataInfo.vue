<template>
  <div>
      <b-container fluid>
        <b-form-row class="row justify-content-center bg-secondary text-light"><h3>活化工作一覽表</h3></b-form-row>
        <b-form-row class="row justify-content-end">
          <b-table striped hover :items="items" :fields="fields" >
            <template #cell(action)="row" v-if="modifyFlag">
              <b-button size="sm" variant="success" @click="gotoParam('WorkDataEdit', row.item)">修改</b-button>&nbsp;
              <b-button size="sm" variant="danger" @click="deleteCheck(row.item)">刪除</b-button>
            </template>
            <template #cell(descInfo)="row">
              <b-container >
                <b-row>
                  <b-col><strong>工作內容：</strong></b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.CONTAIN}}</b-col>
                </b-row>
                <br>
                <b-row>
                  <b-col><strong>工作效益:</strong></b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.EFFECT}}</b-col>
                </b-row>
                <br>
                <b-row>
                  <b-col><strong>工作經費使用說明：</strong></b-col>
                </b-row>
                <b-row>
                  <b-col>{{row.item.MEMO}}</b-col>
                </b-row>
              </b-container>
            </template>
            <template #custom-foot >
							<b-tr>
								<b-th colspan="3">合計</b-th>
								<b-th >5,000</b-th>
                <b-th ></b-th>
                <b-th ></b-th>
                <b-th ></b-th>
                <b-th ></b-th>
							</b-tr>
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
				key:	'descInfo',
				label:	'工作說明資料',
        tdClass: 'text-left',
        thStyle: { width: "30%" },
			},
      {
				key:	'action',
				label:	'',
			},
		],
		items:[
      {PRJNO:'106000000400001', NAME:'頭份鎮停二機械式立體停車場拆除工程',TOTAMT:'5,000',BDATE:'1070101',EDATE:'1070531',
      PRJKIND:'工程採購', CONTAIN:'頭份鎮停二機械式立體停車場拆除工程', EFFECT:'1.頭份鎮停二立體停車場拆除後之處理方式為：劃設平面停車格並納入本所路外收費停車場一部分，委託廠商經營。 2.廣停二平面停車場若由本所自行經營者，每年營收入估計為172.8萬，其計算方式為：40格*6小時*20元*360天=172.8萬〈24小時收費，每小時收費20元)。',
      MEMO:'1.本市停二立體停車場之拆除、基地整理及劃設停車格之工程費用擬由本市「停車場作業基金專戶」項下支應。 2.本市「停車場作業基金專戶」收入來源為路邊及路外停車場委託經營之權利金，107年預估收入為639萬元。 3.因本市尚有多項停車場租金及工程待執行，皆運用上開專戶基金辦理，故本案亟需補助款挹注，以利順利拆除、活化。'
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

.col-md-4 {
  background-color:white;
  color: black;
  text-align: left;
}

</style>
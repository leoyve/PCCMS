<template>
  <div>
      <br>
      <b-form-row class="justify-content-center "><h2><strong>活化補助工作計畫執行情形管理畫面</strong></h2></b-form-row>
      <br>
      <b-container fluid>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="outline-secondary" @click="gotoParam('FillActivationsQuery')">回上一頁</b-button>
        </b-form-row>
      <br>
      </b-container>
      <br>
      <b-container fluid>
        <b-row><h2 class="text-left"><font color="red">一、活化工作里程碑執行情形</font></h2></b-row>
        <b-row>
          <b-table striped hover :items="items" :fields="fields" head-variant="dark">
            <template #cell(action)="row">
              <b-button size="sm" variant="success" @click="gotoParam('FillMileStone', row.item)" >修改</b-button>
            </template>
            <template #cell(workPeriod)="row">
              <b-container>
                <b-row>{{row.item.bdate}}~{{row.item.edate}}</b-row>
              </b-container>
            </template>
          </b-table>
        </b-row>
        <br>
        <b-row><h2 class="text-left"><font color="red">二、活化計畫經費執行情形</font></h2></b-row>
        <b-row>
          <b-table striped hover :items="items2" :fields="fields2" head-variant="dark">
            <template #cell(action)="row">
              <b-button size="sm" variant="success" @click="gotoParam('FillPlnmnth', row.item)" >修改</b-button>
            </template>
            <template #cell(workPeriod)="row">
              <b-container>
                <b-row>{{row.item.bdate}}~{{row.item.edate}}</b-row>
              </b-container>
            </template>
          </b-table>
        </b-row>
        <br>
        <b-row><h2 class="text-left"><font color="red">三、結案申請補助款辦理成果報告</font></h2></b-row>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success" @click="gotoParam('FillJudge')">填寫辦理成果報告</b-button>&nbsp;
          <b-button size="sm" variant="info" @click="gotoParam('ActivationsVersionDetail', {judgeFlag:true})">列印辦理成果報告</b-button>
          <font color="red">&nbsp; (結案申請撥款請檢附)</font>
        </b-form-row>
        <br>
        <judgeInfo/>
        <br>
        <b-row><h2 class="text-left"><font color="red">四、上傳相關照片</font></h2></b-row>
        <br>
        <workPhotoListInfo/>
        <br>
        <b-row><h2 class="text-left"><font color="red">五、執行完畢後三年內使用情形</font></h2></b-row>
        <br>
        <b-table striped hover :items="items3" :fields="fields3" head-variant="dark">
            <template #cell(action)="row">
              <b-button size="sm" variant="success" @click="gotoParam('FillYearUserCase', row.item)" >修改</b-button>
            </template>
            <template #cell(workPeriod)="row">
              <b-container>
                <b-row>{{row.item.bdate}}~{{row.item.edate}}</b-row>
              </b-container>
            </template>
        </b-table>
        <br>
        <b-row><h2 class="text-left"><font color="red">工程會上傳實地訪查文件</font></h2></b-row>
        <b-form-row class="justify-content-end">
          <b-button size="sm" variant="success"  @click="gotoParam('UploadCheckRecord', {addFlag:true})" >上傳文件</b-button>&nbsp;&nbsp;
        </b-form-row>
        <br>
        <b-table striped hover :items="items4" :fields="fields4" head-variant="dark">
            <template #cell(action)="row">
              <b-button size="sm" variant="success" @click="gotoParam('UploadCheckRecord', {updateFlag:true, ...row.item})" >修改</b-button>&nbsp;
              <b-button size="sm" variant="danger" @click="deleteCheck()" >刪除</b-button>
            </template>
            <template #cell(docDownload)="row">
              <a href="#">檢視{{row.item.aa}}</a>
            </template>
        </b-table>
      </b-container>
    <br>
  </div>
</template>


<script>
import judgeInfo from './JudgeInfo.vue'
import workPhotoListInfo from './WorkPhotoListInfo.vue'

export default {
  data(){
    return{
    fields: [
			{
				key:	'PLNNO',
				label:	'工作編號',
			},
			{
				key:	'PLNNAME',
				label:	'工作名稱',
        tdClass: 'text-left',
        thStyle: { width: "15%" }
			},
			{
				key:	'workPeriod',
				label: '工作起迄日期'
			}, 
			{
				key:	'workCategory',
				label:	'工作類別'
			}, 
			{
				key:	'mileStone',
				label:	'里程碑'
			},
			{
				key:	'pbdate',
				label:	'預定完成日期'
			},
			{
				key:	'pedate',
				label:	'實際完成日期	'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
    items: [
        {
          PLNNO: "106000000600001",
          PLNNAME: "高雄市旗津區中興市場二樓修繕工程",
          workCategory: "工程採購",
          bdate: "1071001",
          edate: "1090630",
          mileStone:'招標公告日期',
          pbdate:'1071130',
          pedate:'1071127',
        },
        {
          PLNNO: "106000000600001",
          PLNNAME: "高雄市旗津區中興市場二樓修繕工程",
          workCategory: "工程採購",
          bdate: "1071001",
          edate: "1090630",
          mileStone:'決標日期',
          pbdate:'1080430',
          pedate:'1080709',
        },
        {
          PLNNO: "106000000600001",
          PLNNAME: "高雄市旗津區中興市場二樓修繕工程",
          workCategory: "工程採購",
          bdate: "1071001",
          edate: "1090630",
          mileStone:'開工日期',
          pbdate:'1080731',
          pedate:'1080715',
        },
        {
          PLNNO: "106000000600001",
          PLNNAME: "高雄市旗津區中興市場二樓修繕工程",
          workCategory: "工程採購",
          bdate: "1071001",
          edate: "1090630",
          mileStone:'完工日期',
          pbdate:'1090331	',
          pedate:'1090506',
        },
             {
          PLNNO: "106000000600001",
          PLNNAME: "高雄市旗津區中興市場二樓修繕工程",
          workCategory: "工程採購",
          bdate: "1071001",
          edate: "1090630",
          mileStone:'驗收日期',
          pbdate:'1090331',
          pedate:'1090617',
        },
  ],
  fields2: [
    {
				key:	'serial',
				label:	'流水號',
			},
			{
				key:	'ym',
				label:	'年月',
			},
			{
				key:	'a',
				label:	'累計預定執行數(千元)'
			},
			{
				key:	'b',
				label: '累計實支數(千元)'
			}, 
			{
				key:	'c',
				label:	'累計應付未付數(千元)'
			}, 
			{
				key:	'd',
				label:	'累計節餘數(千元)'
			},
			{
				key:	'e',
				label:	'累計實際執行數(千元)'
			},
			{
				key:	'f',
				label:	'執行率(%)'
			},
      {
				key:	'g',
				label:	'達成率(%)'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
    items2: [
        {
          ym: "10710",
          a:0,
          b:0,
          c:0,
          d:0,
          e:0,
          f:0,
          g:'0.00'
        },
        {
          ym: "10711",
          a:12381.25,
          b:2955.514,
          c:0,
          d:0,
          e:2955.514,
          f:23.87,
          g:11.94
        },
        {
          ym: "10801",
          a:12381.25,
          b:8546.431,
          c:0,
          d:0,
          e:8546.431,
          f:69.03,
          g:34.51
        },
        {
          ym: "10802",
          a:24762.5	,
          b:24762.5,
          c:0,
          d:0,
          e:24762.5,
          f:100.00,
          g:100.00
        },
         
  ],
  fields3: [
			{
				key:	'year',
				label:	'年度',
			},
      {
				key:	'situation',
				label:	'使用情形',
        thStyle: { width: "70%" },
        tdClass: 'text-left',
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
    items3: [
        {
          year: "110",
          situation:'業於107年9月27日正式營運，累積開啟天數為84天(107/9/27~107/12/31)，達全年開館天數23.01%。'
        },
        {
          year: "111",
          situation:'使用情形2'
         
        },
        {
          year: "112",
          situation:'使用情形3'
        },        
    ],
    fields4: [
      {
				key:	'serial',
				label:	'流水號',
			},
			{
				key:	'wkut',
				label:	'上傳機關',
			},
      {
				key:	'docName',
				label:	'文件名稱'
			},
      {
				key:	'docDate',
				label:	'文件所載訪查或會議日期'
			},
      {
				key:	'docSDate',
				label:	'文件發函日期'
			},
      {
				key:	'docSNum',
				label:	'文件發函字號'
			},
      {
				key:	'docDownload',
				label:	'文件檢視'
			},
			{
				key:	'action',
				label:	'',
				thStyle: { width: "8%" },
			},
		],
    items4: [
        {
          wkut: "工程會",docName:'訪查紀錄',docDate:'1070831',docSDate:'1070910',docSNum:'工程管字第10700283810號'
        },
    ],
    }
 },
 methods:  {
    queryDetail(){
      //新開視窗
      let routeUrl = this.$router.resolve({name:'ActivationsVersionDetail'})
      window.open(routeUrl.href, '_blank'); 

    },
  },components:{
    judgeInfo,workPhotoListInfo
  },
  mounted(){
    this.items2.forEach((items2, index) => { items2.serial = index + 1; });
    this.items4.forEach((items4, index) => { items4.serial = index + 1; });
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
<template>
  <div>
    <h3><strong><font color="red">壹、開班預告</font></strong></h3>
    <b-container>
      <b-container class="border border-dark">
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>開班期別</b-col>
          <b-col class="col-md-10 text-left">LR11102</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>代訓機構</b-col>
          <b-col class="col-md-10 text-left">財團法人中國生產力中心</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>訓練主題班別</b-col>
          <b-col class="col-md-10 text-left">邊坡工程品質管理實務【109年5月起適用】</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>訓練地址</b-col>
          <b-col class="col-md-10 text-left">高雄市苓雅區成功一路232號16樓</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>電話</b-col>
          <b-col class="col-md-4 text-left">02-1111XXXX</b-col>
          <b-col class="col-md-2 ">傳真</b-col>
          <b-col class="col-md-4 text-left">02-1111XXXX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">網址</b-col>
          <b-col class="col-md-10 text-left">xxxxx.xxx.com.tw</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>執行長</b-col>
          <b-col class="col-md-4 text-left">王XX</b-col>
          <b-col class="col-md-2 "><font color="red">*</font>承辦人</b-col>
          <b-col class="col-md-4 text-left">陳XX/林XX/劉XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>駐班人員</b-col>
          <b-col class="col-md-4 text-left">吳XX</b-col>
          <b-col class="col-md-2 ">班導師</b-col>
          <b-col class="col-md-4 text-left">蔡XX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>預定開班日期</b-col>
          <b-col class="col-md-4 text-left">111/01/02</b-col>
          <b-col class="col-md-2 "><font color="red">*</font>預定結訓日期</b-col>
          <b-col class="col-md-4 text-left">111/03/06</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>開課時段</b-col>
          <b-col class="col-md-10 text-left">假日</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">開課種類</b-col>
          <b-col class="col-md-10 text-left">實體</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>預定訓練人數</b-col>
          <b-col class="col-md-10 text-left">45</b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <br>
    <h3><strong><font color="red">貳、課程明細</font></strong></h3>
    <classDetailInfo/>
    <br>
    <h3><strong><font color="red">參、師資簡介</font></strong></h3>
    <b-container>
			<b-table striped hover :items="items2" :fields="fields2" head-variant="dark">
				</b-table>
				<b-pagination align="right"
					v-model="currentPage"
					:total-rows="rows"
          :per-page="perPage"
					first-number
				></b-pagination>
		</b-container>
  </div>
</template>


<script>
import classDetailInfo from './ClassDetailInfo.vue';

export default {
  data(){
    return{
      check: [
        { value: '1', text: '實體'},
        { value: '2', text: '視訊' },
      ],
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
    options:[
      { value: '0', text: '夜間' },
      { value: '0', text: '假日' },
      { value: '0', text: '專案' },
      { value: '0', text: '日間' },
    ],
    type: [
			{ value: '0', text: '中原大學' },
			{ value: '1', text: '淡江大學' },
			{ value: '2', text: '中央大學' },
			{ value: '3', text: '成功大學' },
		],
    classType: [
			{ value: '0', text: '[回訓] 公共工程品質管理教育訓練' },
			{ value: '1', text: '[回訓] 土木工程品管案例研討' },
			{ value: '2', text: '[回訓] 基礎開挖與品管' },
		],

    fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'unitName',
				label:	'單元名稱'
			},
			{
				key:	'className',
				label:	'課程名稱'
			} ,
			{
				key:	'summary',
				label: '課程摘要',
        thStyle: { width: "25%" },
			}, 
			{
				key:	'classHour',
				label:	'課程時數'
			},

			],
		items:	[
			{
				id: 1, unitName: '邊坡工程品質管理實務【109年5月起適用】', className: '政府採購全生命週期概論', summary: '	(1)現階段政策方向 (2)辦理採購之重點理念 (3)計畫撰擬、規劃設計、採購招標、決標、履約、施工驗收作業及維護管理等各階段重點事項 (4)採購法使用手冊重點內容 (5)各階段案例', 
        classHour:'1',	pk: 5566
			},
			{
				id: 2,unitName: '邊坡工程品質管理實務【109年5月起適用】', className: '最新政策與法規', summary: '就回訓期間每年更新說明工程會近期之政策與法規', 
        classHour:'11',	pk: 5566			},
			{
				id: 3, unitName: '邊坡工程品質管理實務【109年5月起適用】', className: '室內裝修施工與案例研討', summary: '建築物地下基礎開挖施工中不僅承商自己工程要安全完成，而且也要考慮不致在施工中、完工後影響鄰房基礎之安全。如果基礎型式選擇不當、設計方式錯誤，因為不適合在該地盤施作，或者施工管理不良，則基礎開挖過程不但容易造成本身施工危險，例如傾斜、沉陷、上浮或倒塌，而且產生鄰房龜裂、傾斜與沉陷。因此，工程師必須對地盤的土壤性質與地下水狀況及周邊建物等設施環境有深入的了解...', 
        classType:'3',pk: 5566
			}
		],
    fields2: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'teacherName',
				label:	'教師名稱'
			},
			{
				key:	'serviceUnit',
				label:	'服務單位'
			} ,
			{
				key:	'title',
				label: '職稱',
			}, 
			{
				key:	'main',
				label:	'主要專長'
			},
      {
				key:	'secondary',
				label:	'次要專長'
			},
      {
				key:	'teachCourse',
				label:	'教授課程'
			},

		],
		items2:	[
			{id: 1, teacherName: '王XX', serviceUnit: '淡江大學推廣教育處', title: '教授', main:'土木',	secondary:'',teachCourse:'新舊建築基礎開挖工法與案例研討',pk: 5566	},
			{id: 2,teacherName: '林XX', serviceUnit: '行政院公共工程委員會工程管理處', title: '科長', main:'品質管理',secondary:'土木',	teachCourse:'政府採購全生命週期概論',pk: 5566	},
			{id: 3, teacherName: '陳XX', serviceUnit: 'XXX建築師事務所', title: '建築師', main:'建築',secondary:'',teachCourse:'室內裝修施工與案例研討',pk: 5566	}
		]
  }
 },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
  },
   components: {
    classDetailInfo
  },

}
</script>
<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
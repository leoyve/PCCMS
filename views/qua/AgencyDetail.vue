<template>
  <div>
    <b-container>
      <b-form-row class="justify-content-end">
        <b-button size="sm" variant="success"  @click="gotoParam('AgencyEdit', {updateFlag:true})" >修改</b-button>&nbsp;&nbsp;
        <!-- 工程會管理員才有刪除權限 -->
        <b-button size="sm" variant="danger"  @click="confirm('真的要刪除代訓機構資料嗎?');" >刪除</b-button>&nbsp;&nbsp;
        <b-button size="sm" variant="outline-secondary" @click="reset">回上一頁</b-button>
      </b-form-row>
    </b-container>
    <agencyInfo/>
    <br>
    <b-container>
      <b-table striped hover :items="items" :fields="fields" head-variant="warning" :per-page="perPage" :current-page="currentPage"></b-table>
      <b-pagination align="right"	v-model="currentPage"	:total-rows="rows" :per-page="perPage"	first-number></b-pagination>
    </b-container>
  </div>
</template>


<script>
import agencyInfo from './AgencyInfo.vue'

export default {
  data(){
    return{
    rows: 100,
		perPage: 10,
		currentPage: 1,
		// 這邊有給KEY的話，items也要換成KEY，否則取值會是undefined，這邊是要顯示的欄位，不顯示的放在ITEMS裡面就好
		fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'agency',
				label:	'代訓機構',
			},
			{
				key:	'className',
				label:	'訓練主題班別名稱'
			},
			{
				key:	'classType',
				label:	'班別類別'
			},
			{
				key:	'approvedStatus',
				label:	'核定情形'
			},
			{
				key:	'isLive',
				label:	'是否運作'
			},
			{
				key:	'totalHours',
				label:	'總時數'
			},
			{
				key:	'courseAndHour',
				label:	'課程名稱(時數)',
				thStyle: { width: "30%" },
			},
		],
		items:	[
			//待分文要顯示紅字，結案日期也是
			{ id: 1, agency: '中原大學', className: '公共工程品質管理訓練班(土建)', classType: '品管',	approvedStatus: '同意備查',	isLive: '是', totalHours:	'90',	
				courseAndHour:'政府採購全生命週期概論(1); 最新政策與法規(1); 電氣設備工程品質管理實務(11); 道路工程施工安全管理(12); 施工圖的管理﹑繪製﹑判識重點與案例分析(11);', pk: 5566 },
			{ id: 2, agency: '中原大學', className: '電氣施工品質及道路施工安全暨施工圖繪製之管理【109年5月起適用】', classType: '回訓',	approvedStatus: '尚未送審',	isLive: '是', totalHours:	'60',
				courseAndHour:'政府採購全生命週期概論(1); 最新政策與法規(1); 水利與防災工程(9); 水土保持與防災工程(10); 建築工程進度規劃管理實務(9); 品質成本管理(6);',  pk: 5566 },
			{ id: 3, agency: '中原大學', className: '施工品質管理與施工缺失案例研討(一)(二)【109年5月起適用】', classType: '回訓',	approvedStatus: '',	isLive: '否', totalHours:	'50',
				courseAndHour:'政府採購全生命週期概論(1); 最新政策與法規(1); 隧道規劃設計施工與品管(12); 橋樑工程之規劃、設計、施工與品管(12); 品質管理與職業安全衛生最新修正條文(10);', pk: 5566 },
		],
      
  }
 },
 components: {
    agencyInfo
  },
 methods:  {
    reset(){

    },
    add(){

    },
    update(){

    }
  },

}
</script>
<style>
.col-md-4 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
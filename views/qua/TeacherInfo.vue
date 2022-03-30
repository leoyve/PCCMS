<template>
  <div>
	<br>
	<br>
    <b-container fluid>
		<b-form-row class="justify-content-end">
			<b-button size="l" variant="success"  @click="gotoParam('TeacherEdit', {updateFlag:true})" >補正教師個人資料</b-button>&nbsp;&nbsp;
			<b-button size="l" variant="outline-secondary"  @click="goBack()" >回上一頁</b-button>&nbsp;&nbsp;
		</b-form-row>
      <b-form-row class="justify-content-center "><h2><strong>教師人員基本資料表</strong></h2></b-form-row>
      <b-container class="border border-dark" fluid>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>姓名</b-col>
          <b-col class="col-md-4 text-left">王XX</b-col>
          <b-col class="col-md-2 "><font color="red">*</font>身分證字號</b-col>
          <b-col class="col-md-4 text-left">FXXXXXXXXX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>目前服務單位名稱</b-col>
          <b-col class="col-md-4 text-left">XX科技大學</b-col>
          <b-col class="col-md-2 "><font color="red">*</font>目前職稱</b-col>
          <b-col class="col-md-4 text-left">助理教授</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>在職情形</b-col>
          <b-col class="col-md-4 text-left">民間單位在職</b-col>
          <b-col class="col-md-2 "><font color="red">*</font>可公開之連絡電話</b-col>
          <b-col class="col-md-4 text-left">07-XXXXXXX</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>主要專長類別1</b-col>
          <b-col class="col-md-4 text-left">土木</b-col>
          <b-col class="col-md-2 "><font color="red">*</font>主要專長內容1</b-col>
          <b-col class="col-md-4 text-left">營建管理、品質分析與管理、統計分析</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">主要專長類別2</b-col>
          <b-col class="col-md-4 text-left">水利</b-col>
          <b-col class="col-md-2 ">主要專長內容2</b-col>
          <b-col class="col-md-4 text-left">水利工程、水文統計、風險可靠度分析</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">次要專長類別</b-col>
          <b-col class="col-md-4 text-left">水土保持</b-col>
          <b-col class="col-md-2 ">次要專長內容</b-col>
          <b-col class="col-md-4 text-left">水土保持工程設計</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 "><font color="red">*</font>代訓機構校核符合教師資格之類別</b-col>
          <b-col class="col-md-10 text-left">曾任或現任公私立大專院校專任助理教授以上，且具專長(主要或次要)相關教學經驗五年以上者</b-col>
        </b-row>
        <b-row class="border border-dark">
          <b-col class="col-md-2 ">工程會提供師資名單</b-col>
          <b-col class="col-md-10 text-left">否</b-col>
        </b-row>
      </b-container>
    </b-container>
    <br>
    <b-container fluid>
		<b-form-row class="justify-content-center "><h2><strong>教授課程名稱</strong></h2></b-form-row>
		<b-table striped hover :items="items" :fields="fields" head-variant="light">
			<template #cell(submitInfo)="row">
				<b-container>
					<b-row>
						<b-col>{{ row.item.submitDate	}} </b-col>
					</b-row>
					<b-row>
						<b-col>{{ row.item.submitDesc	}} </b-col>
					</b-row>
				</b-container>
			</template>
			<template #cell(reviewInfo)="row">
				<b-container>
					<b-row>
						<b-col>{{ row.item.reviewDate	}} </b-col>
					</b-row>
					<b-row>
						<b-col>{{ row.item.reviewDesc	}} </b-col>
					</b-row>
				</b-container>
			</template>
			<template #cell(reviewStatus)="row">
				<b-container>
				<!-- 工程會管理員才顯示按鈕-->
				<b-row class="justify-content-center" v-show="row.item.isAdmin">
					<b-button size="sm" variant="success" @click="gotoParam('TeacherReviewInfo', row.item)">{{row.item.status}}</b-button>&nbsp;
				</b-row>
				<b-row class="justify-content-center" v-show="!row.item.isAdmin">
					<b-col>({{row.item.status}})</b-col>
				</b-row>
				</b-container>
			</template>
		</b-table>
		<b-pagination align="right"
			v-model="currentPage"
			:total-rows="rows"
			:per-page="perPage"
			first-number
		></b-pagination>
    </b-container>
    <br>
    <b-container fluid>
		<b-form-row class="justify-content-center "><h2><strong>最近2年開班期別內之授課情形</strong></h2></b-form-row>
		<b-table striped hover :items="items2" :fields="fields2" head-variant="light">
		<template #cell(openingDate)="row">
			{{ row.item.startDate	}} ~ {{ row.item.endDate	}}
		</template>
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


export default {
  data(){
    return{
      addFlag: this.$route.params.addFlag == null ? false:this.$route.params.addFlag,
      updateFlag: this.$route.params.updateFlag == null ? false:this.$route.params.updateFlag,
      rows: 100,
      perPage: 1,
      currentPage: 1,
      fields: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'mechanism',
				label:	'聘用之代訓機構'
			},
			{
				key:	'className',
				label:	'訓練主題班別'
			} ,
			{
				key:	'classType',
				label: '主題班別種類'
			}, 
			{
				key:	'courseName',
				label:	'課程名稱'
			},
			{
				key:	'submitInfo',
				label:	'送審日期及文號'
			},
			{
				key:	'reviewInfo',
				label:	'審查日期及文號'
			},
			{
				key:	'reviewStatus',
				label:	'送審狀態'
			},
      {
				key:	'isValid',
				label:	'是否有效'
			},

		],
		items:	[
			{
				id: 1, mechanism: '中原大學', className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', classType: '品管', courseName:'單元二：第二章 統計分析方法與應用',	
				submitDate:'110/3/5',	submitDesc:'原工程會已備查',  reviewDate:'110/3/5',	reviewDesc:'原工程會已備查',  status:'已備查',  isAdmin:true,	isValid:'是', pk: 5566
			},
			{
				id: 2, mechanism: '中原大學', className: '公共工程品質管理訓練班(土建)', classType: '品管', courseName:'單元二：第二章 統計分析方法與應用',	
				submitDate:'110/5/5',	submitDesc:'原工程會已備查',  reviewDate:'110/3/5',	reviewDesc:'原工程會已備查',  status:'送審中',  isAdmin:false,	isValid:'是', pk: 5566
			},
			{
				id: 3, mechanism: '中原大學', className: '公共工程品質管理訓練班(機電) 【109年4月起適用】', classType: '回訓', courseName:'	單元二：第二章 統計分析方法與應用',	
				submitDate:'110/11/11',	submitDesc:'原工程會已備查',  reviewDate:'110/3/5',	reviewDesc:'原工程會已備查',  status:'已備查',  isAdmin:false,	isValid:'否', pk: 5566
			}
		],
    fields2: [
			{
				key:	'id',
				label:	'流水號'
			},
			{
				key:	'mechanism',
				label:	'聘用之代訓機構'
			},
			{
				key:	'className',
				label:	'訓練主題班別'
			} ,
			{
				key:	'classType',
				label: '主題班別種類'
			}, 
			{
				key:	'courseName',
				label:	'課程名稱'
			},
			{
				key:	'stage',
				label:	'開班期別'
			},
			{
				key:	'openingDate',
				label:	'開班起迄日期'
			},
		],
		items2:	[
			{
				id: 1,  mechanism: '中原大學', className: '公共工程品質管理訓練班(土建) 【109年4月起適用】', classType: '品管', courseName:'單元二：第二章 統計分析方法與應用',
				stage:'KE10902', startDate:'110/3/1',	endDate:'11/6/1',	pk: 5566
			},
			{
				id: 2,  mechanism: '中原大學', className: '	公共工程品質管理訓練班(土建)', classType: '品管', courseName:'單元二：第二章 統計分析方法與應用',	
        stage:'KE10902', startDate:'110/4/1',	endDate:'11/7/1',	pk: 5566
			},
			{
				id: 3, mechanism: '中原大學', className: '公共工程品質管理訓練班(機電) 【109年4月起適用】', classType: '回訓', courseName:'	單元二：第二章 統計分析方法與應用',	
				stage:'KE10902', startDate:'110/6/1',	endDate:'11/10/1',	pk: 5566
			}
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

}
</script>
<style>
.col-md-2 {
  background-color: rgb(50, 91, 224);
  color: white;
  text-align: left;
}

</style>
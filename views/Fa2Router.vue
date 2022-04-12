<template>
	<div>
	<h1>閒置設施補助</h1>
	<b-navbar type="dark" variant="info">
      <b-navbar-nav >
        <b-nav-item-dropdown text="活化計劃管理" left fill>
          <b-dropdown-item @click="gotoParam('ActivationsQuery',)">填報及申請活化計畫</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('ActivationsReviseQuery', )">修正已核定活化計畫</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('FillActivationsQuery')">填報計畫每月執行情形</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('BosReviewList')">主管機關活化計畫審核</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="活化計劃審核" left fill>
          <b-dropdown-item @click="gotoParam('PccmReviewQuery',)">工程會審核活化計畫</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('Fa2PhotoReviewQuery', )">工程會審查上傳照片</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('PccmReviewJudgeQuery')">工程會考核辦理成果</b-dropdown-item>
        </b-nav-item-dropdown>

         <b-nav-item-dropdown text="報表資訊" left fill>
          <b-dropdown-item @click="gotoParam('',)">計畫執行情形分析統計</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('', )">閒置公共設施相關規定</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('')">自選欄位案件資料</b-dropdown-item>
        </b-nav-item-dropdown>
        
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
	</div>
</template>


<script>


export default {
  data(){
    return{



  }
 },
 methods:  {
  }

}

</script>

<style>

</style>
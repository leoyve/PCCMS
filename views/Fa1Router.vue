<template>
	<div>
	<h1>閒置設施管理</h1>
	<b-navbar type="dark" variant="info">
      <b-navbar-nav >
        <b-nav-item-dropdown text="通報案件來源" left fill>
          <b-dropdown-item @click="gotoParam('PeopleUnCaseQuery',)">民眾尚未立案通報案件查詢</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('NewInformCase',)">機關主動通報閒置設施案件</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('InventoryQuery')">清查公共設施使用情形</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="通報案件管理" left fill>
          <b-dropdown-item @click="gotoParam('DivisionCaseQuery',)">閒置設施通報案件分案/查處</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('InformDocReviewQuery',)">審查通報案件上傳文件檔案</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('InformBulletinQuery')">通報案件完成查處結果公告</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="列管案件管理" left fill>
          <b-dropdown-item @click="gotoParam('',)">未開放檢視之閒置設施資料</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('MileStoneSetting',)">設施作業里程碑整體上鎖</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('',)">查詢填報列管設施活化情形</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('')">設施活化情形(依目的、依上級)</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('TubeDocReviewQuery')">審查列管上傳文件檔案</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('')">查詢填報解列設施使用情形</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="資料查詢" left fill>
          <b-dropdown-item @click="gotoParam('Fa1OptionalReport',)">自選欄位查詢列管案件資料</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('',)">閒置設施業務機關權責窗口(通用功能)</b-dropdown-item>
          <b-dropdown-item @click="gotoParam('PccmDoc',)">檢視工程會相關公函及附件</b-dropdown-item>
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
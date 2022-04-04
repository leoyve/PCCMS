<template>
	<div>
	<h1>公共設施維護管理資訊</h1>
	<b-navbar type="dark" variant="info">
      <b-navbar-nav >
        <b-nav-item-dropdown text="關鍵公共設施" left fill>
			<b-dropdown-item @click="gotoParam('RankReport',)">維管排名</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('PublicFacilityEdit', {addFlag:true})">建立機關關鍵公共設施</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('OurFacilityQuery')">維護機關關鍵公共設施</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FacilityTypeReport')">機關/類別報表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('AnalysisQuery')">統計分析</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('DeleteFacilityQuery')">查詢機關刪除資料</b-dropdown-item>
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
<template>
	<div>
	<h1>重點防汛工程</h1>
	<b-navbar type="dark" variant="info">
      <b-navbar-nav >
        <b-nav-item-dropdown text="重點防汛工程" left fill>
			<b-dropdown-item @click="gotoParam('FloPrjQuery',)">建置及調整所屬本年度重點防汛工程名單</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FloWarningQuery', )">重點防汛工程標案啟用災示警服務清單</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FloEventQuery', )">建立/查詢年度事件</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FloYearEventQuery')">年度事件查詢/填報</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="示警通知" left fill>
			<b-dropdown-item @click="gotoParam('FloInfoQuery',)">重點防汛工程之災害趨勢及示警地理資訊</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FloNcdrInfo', )">查詢NCDR目前生效中之整體災害示警總覽</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FloWarnActualQuery', )">查詢目前生效中之整體災害示警總覽</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="報表資訊" left fill>
			<b-dropdown-item @click="gotoParam('FloCheckQuery',)">重點防汛工程標案施工進度及查核情形統計</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FloWaterBehind',)">各機關1千萬元以上水利類工程落後達5%案件</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('FloCmdMapQuery', )">件式搜尋重點防汛工程標案及其GIS圖資</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-navbar>
	<router-view/>
	</div>
</template>


<script>


</script>

<style>

</style>
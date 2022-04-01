<template>
	<div>
	<h1>全民督工</h1>
	<b-navbar type="dark" variant="info">
      <b-navbar-nav >
        <b-nav-item-dropdown text="案件通報" left>
			<b-dropdown-item @click="gotoParam('DuconCaseEdit', {addFlag:true})">新增督工通報案件</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('UnCheckCase')">尚未成功立案管理</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('Place1999Group')">地方1999通報案件</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="案件分文" left fill>
			<b-dropdown-item @click="gotoParam('CaseAssignQuery')">督工案件分文</b-dropdown-item>
        </b-nav-item-dropdown>

		<b-nav-item-dropdown text="案件查處" left fill>
			<b-dropdown-item @click="gotoParam('CaseInfoQuery')">案件查詢/填報</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('PhotoReviewQuery')">上傳照片審查管理</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('NoPhotoReviewQuery')">免需上傳照片審查</b-dropdown-item>
        </b-nav-item-dropdown>

		<b-nav-item-dropdown text="案件結案" left fill>
			<b-dropdown-item @click="gotoParam('CaseCloseQuery')">案件結案審查</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('CaseAssessmentQuery')">通報案件結案考核</b-dropdown-item>
        </b-nav-item-dropdown>
		
		<b-nav-item-dropdown text="統計報表" left fill>
			<b-dropdown-item @click="gotoParam('WkutCloseReport')">各機關統報案件統計表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WkutHandleDayReport')">通報處理天數統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WkutSatisfactionReport')">通報案件滿意度統計表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('CaseAggregateReport')">通報案件查詢彙整總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('CaseAuditReport')">通報案件查核統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('LineNotifyReport')">啟用LINE通知統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WkutGenderReport')">通報民眾性別統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WkutCityReport')">通報縣市件數統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('CaseSourceReport')">通報來源件數統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WkutDeficiencyReport')">通報缺失件數統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WkutDivisionReport')">主管機關分案天數統計</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WkutCloseDayReport')">主管機關結案天數統計</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('CaseCategoryReport')">通報工程類別統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('PeopleInformReport')">民眾通報件數統計總表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WebNotifyReport')">啟用行動推播服務人數統計表(X)</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('WkutCompareReport')">機關案件考核自評填寫統計表</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('InsOptionalReport')">督工通報案件自選欄位報表</b-dropdown-item>
        </b-nav-item-dropdown>

		<b-nav-item-dropdown text="其他功能" left fill>
			<b-dropdown-item @click="gotoParam('LineEnable')">啟用LineAPP通知功能</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('LineDisable')">停用LineAPP通知功能</b-dropdown-item>
        </b-nav-item-dropdown>

		<b-nav-item-dropdown text="前台" left fill>
			<b-dropdown-item @click="gotoParam('NotifyPage')">民眾通報</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('CaseInfoCommonQuery')">一般查詢</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('PeopleIdentify')">查詢個案及填寫滿意度表</b-dropdown-item>
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
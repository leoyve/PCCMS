<template>
	<div>
		<h1>品管人員訓練</h1>
		<b-navbar type="dark" variant="info">
			<b-navbar-nav>
				<!-- Navbar dropdowns -->
				<b-nav-item-dropdown text="代訓機構與訓練班別" left>
					<b-dropdown-item  @click="gotoParam('AgencyQuery')">代訓機構資料管理</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('AddTeacherQuery')">建立代訓機構之教師名冊</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('AnnualAppraisalRecord')">代訓機構歷年評鑑紀錄表</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('OpeningNotice')">預告開班及檢視洽詢民眾</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('ReviseStudentRecordQuery')">修正學員參訓之歷次紀錄</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('QuicklyTeacherReview')">快速審核師資授課之更新</b-dropdown-item>
				</b-nav-item-dropdown>

				<b-nav-item-dropdown text="資料查詢" left>
					<b-dropdown-item  @click="gotoParam('QueryStudentRecord')">查詢學員歷次參訓紀錄</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('ClassAndCourseQuery')">查詢訓練主題班別及課程</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('ClassTeacherQuery')">依課程名稱搜尋教師名冊</b-dropdown-item>
				</b-nav-item-dropdown>

				<b-nav-item-dropdown text="報表資訊" left>
					<b-dropdown-item  @click="gotoParam('ClassPopulationYeadReport')">開班人數年度統計表</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('ClassPopulationSiteReport')">開班人數地區統計表</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('BackTrainingHisReport')">歷年學員回訓情形統計表</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('ClassSexReporty')">品管暨回訓班性別統計表</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('GraduationCheckReport')">品管班結業學員查核統計</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('FinalExamPassReport')">品管班參訓學員期末測驗通過人數統計表</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('FinalExamAndMakeUpReport')">品管班參訓學員期末測驗及補考通過人數統計表</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('ClassTeacherReport')">訓練主題班別師資統計</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('ClassTrainingDayReport')">品管班訓練期程天數統計</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('TeachingHoursReport')">訓練主題班別師資授課時數統計</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('EndTrainingReport')">訓練主題班別結訓人數</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('TraineesSatisfactionReport')">訓練主題班別學員滿意度調查</b-dropdown-item>
				</b-nav-item-dropdown>

				<b-nav-item-dropdown text="測驗題庫" left>
					<b-dropdown-item  @click="gotoParam('QuestionQuery')">測驗題庫增修作業</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('PropositionQuery')">測驗自動命題作業</b-dropdown-item>
				</b-nav-item-dropdown>

				<b-nav-item-dropdown text="前台" left>
					<b-dropdown-item  @click="gotoParam('OpeningNoticePublic')">查詢代訓機構新開班資訊</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('QueryStudentRecordPublic')">查詢學員歷次參訓紀錄</b-dropdown-item>
					<b-dropdown-item  @click="gotoParam('PropositionPublicQuery')">測驗題目公開作業</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-navbar>
		<router-view/>
		<br>
	</div>
</template>


<script>


</script>

<style>

</style>
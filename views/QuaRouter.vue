<template>
	<div>
	<h1>品管人員訓練</h1>
	<nav>
		<router-link :to="{name:'AgencyQuery'}">代訓機構資料管理</router-link>	||
		<router-link :to="{name:'AddTeacherQuery'}">建立代訓機構之教師名冊</router-link> ||
		<router-link :to="{name:'ClassTeacherQuery'}">依課程名稱搜尋教師名冊</router-link>  ||
		<router-link :to="{name:'QuicklyTeacherReview'}">快速審核師資授課之更新</router-link> ||
		<router-link :to="{name:'ReviseStudentRecordQuery'}">修正學員參訓之歷次紀錄</router-link> ||
		<router-link :to="{name:'AnnualAppraisalRecord'}">代訓機構歷年評鑑紀錄表</router-link> ||
		<router-link :to="{name:'ClassPopulationYeadReport'}">開班人數年度統計表</router-link> ||
		<router-link :to="{name:'ClassPopulationSiteReport'}">開班人數地區統計表</router-link> ||
		<router-link :to="{name:'BackTrainingHisReport'}">歷年學員回訓情形統計表</router-link> ||
		<router-link :to="{name:'ClassSexReporty'}">品管暨回訓班性別統計表</router-link> ||
		<router-link :to="{name:'OpeningNotice'}">預告開班及檢視洽詢民眾</router-link> ||
		<router-link :to="{name:'QueryStudentRecord'}">查詢學員歷次參訓紀錄</router-link> ||
		<router-link :to="{name:'ClassAndCourseQuery'}">查詢訓練主題班別及課程</router-link> ||
	</nav>
	<router-view/>
	</div>
</template>


<script>


</script>

<style>

</style>
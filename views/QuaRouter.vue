<template>
	<div>
	<h1>品管人員訓練</h1>
	<nav>
		<router-link :to="{name:'AgencyQuery'}">代訓機構資料管理</router-link>	||
		<router-link :to="{name:'AddTeacherQuery'}">建立代訓機構之教師名冊</router-link> ||
		<router-link :to="{name:'ClassTeacherQuery'}">依課程名稱搜尋教師名冊</router-link>  ||
		<router-link :to="{name:'QuicklyTeacherReview'}">快速審核師資授課之更新</router-link> ||
		<router-link :to="{name:'ReviseStudentRecordQuery'}">修正學員參訓之歷次紀錄</router-link> ||
	</nav>
	<router-view/>
	</div>
</template>


<script>


</script>

<style>

</style>
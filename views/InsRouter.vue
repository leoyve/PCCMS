<template>
	<div>
	<h1>全民督工</h1>
	<nav>
		<router-link :to="{name:'NewInsCase'}">新增督工通報案件</router-link>	||
		<router-link :to="{name:'UnCheckCase'}">尚未成功立案管理</router-link> ||
		<router-link :to="{name:'CaseAssignQuery'}">督工案件分文</router-link> ||
		<router-link :to="{name:'PhotoReviewQuery'}">上傳照片審查管理</router-link> ||
		<router-link :to="{name:'NoPhotoReviewQuery'}">免需上傳照片審查</router-link> ||
		<router-link :to="{name:'Place1999Group'}">地方1999通報案件</router-link> ||
		<router-link :to="{name:'CaseInfoQuery'}">案件查詢/填報</router-link> ||
		<router-link :to="{name:'CaseCloseQuery'}">審查結案</router-link> ||
		<router-link :to="{name:'CaseAssessmentQuery'}">通報案件結案考核</router-link> ||
		<router-link :to="{name:'LineEnable'}">啟用LineAPP通知功能</router-link> ||
		<router-link :to="{name:'LineDisable'}">停用LineAPP通知功能</router-link> ||
	</nav>
	<router-view/>
	</div>
</template>


<script>


</script>

<style>

</style>
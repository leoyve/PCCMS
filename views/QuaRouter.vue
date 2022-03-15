<template>
	<div>
	<h1>品管人員訓練</h1>
	<nav>
		<router-link :to="{name:'AgencyQuery'}">代訓機構資料管理</router-link>	||
		<router-link :to="{name:'AddTeacherQuery'}">建立代訓機構之教師名冊</router-link> ||
		<router-link :to="{name:'FloYearEventQuery'}">年度事件查詢/填報</router-link>  ||
		<router-link :to="{name:'BIAS'}">大宗資材</router-link> 
	</nav>
	<router-view/>
	</div>
</template>


<script>


</script>

<style>

</style>
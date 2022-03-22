<template>
	<div>
	<h1>創新產品交流平台</h1>
	<nav>
		<router-link :to="{name:'ProQuery'}">前台產品查詢</router-link>	||
		<router-link :to="{name:'BackQuery'}">後台產品查詢</router-link> ||
		<router-link :to="{name:'OpinionQuery'}">交流意見登錄查詢</router-link> ||
		<router-link :to="{name:'HistoryQuery'}">歷史紀錄查詢</router-link> ||
	</nav>
	<router-view/>
	</div>
</template>


<script>


</script>

<style>

</style>
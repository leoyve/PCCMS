<template>
	<div>
	<h1>創新產品交流平台</h1>
	<b-navbar type="dark" variant="info">
      <b-navbar-nav >
        <b-nav-item-dropdown text="前台" left>
          <b-dropdown-item @click="gotoParam('ProQuery')">產品查詢</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="後台" left fill>
			<b-dropdown-item @click="gotoParam('BackQuery')">產品查詢</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('OpinionQuery')">交流意見登錄查詢</b-dropdown-item>
			<b-dropdown-item @click="gotoParam('HistoryQuery')">歷史紀錄查詢</b-dropdown-item>
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
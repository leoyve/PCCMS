<template>
  <div id="app">
    <b-navbar  type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item  @click="gotoParam('home')"><h3>Home</h3></b-nav-item>

        <b-nav-item  @click="gotoParam('創新1')"><h3>創新</h3></b-nav-item>

        <b-nav-item  @click="gotoParam('全民督工2')"><h3>全民督工</h3></b-nav-item>

        <b-nav-item  @click="gotoParam('品管人員訓練3')"><h3>品管人員訓練</h3></b-nav-item>

        <b-nav-item  @click="gotoParam('重點防汛')"><h3>重點防汛</h3></b-nav-item>

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
 methods: {
   tt(str){
     this.$router.push({name:str});
   }
 }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0f141a;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

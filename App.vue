<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/pro">創新</router-link> |
      <router-link to="/ins">全民督工</router-link> |
      <router-link to="/flo">重點防汛</router-link> |
      <router-link to="/ins/report">全民督工-報表</router-link> ||
       <router-link to="/ins/report">品管訓練</router-link> ||
    </nav>
    <router-view/>
  </div>
</template>

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

import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.prototype.goto = function (str){
    this.$router.push({name:str});
}

Vue.prototype.gotoParam = function (str, param){
  console.log(param);
  this.$router.push({name:str,  params:param});
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

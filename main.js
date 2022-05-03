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

Vue.prototype.deleteCheck = function (param){
  console.log(param);
  confirm("是否刪除此筆資料?");
}

Vue.prototype.wkutHelp  = function (){
  let routeUrl = this.$router.resolve({name:'WkutHelp'})
  window.open(routeUrl.href, '_blank'); 
},

Vue.prototype.upload  = function (){
  alert("上傳批次匯入檔案");
},



Vue.prototype.goBack = function (){
  this.$router.back(-1);
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

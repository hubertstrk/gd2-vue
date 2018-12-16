import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import db from './db/db.txt'
const translations = db.split('\n').reduce((acc, curr) => {
  var parts = curr.split(';')
  acc.push({ german: parts[0], english: parts[1] })
  return acc
}, [])

console.info(translations)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

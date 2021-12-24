import Vue from 'vue'
import App from './App.vue'
import router from './router'
import msal from 'vue-msal'

Vue.config.productionTip = false

// TODO: add msal info
Vue.use(msal, {
  auth: {
    clientId: '<YOUR CLIENT ID HERE>',
    tenantId: '<YOUR TENANT ID HERE>',
    authority: '',
    redirectUri: ''
    // requireAuthOnInitialize: false
  },
  request: {
    scopes: ['user.read']
  },
  framework: {
    globalMixin: true
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

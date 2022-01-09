import Vue from 'vue'
import App from './App.vue'
import router from './router'
import msal from 'vue-msal'

Vue.config.productionTip = false

Vue.use(msal, {
  auth: {
    clientId: '<CLIENT ID HERE>',
    // authority: '<AUTHORITY LINK HERE>',
    redirectUri: 'http://localhost:8081'
    // requireAuthOnInitialize: false
  },
  graph: {
    callAfterInit: true,
    endpoints: {
      profile: '/me',
      photo: { url: '/me/photo/$value', responseType: 'blob', force: true }
    }
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

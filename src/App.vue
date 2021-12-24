<template>
  <div id="app">
    <!-- User logged -->
    <div v-if="user">
      <TheHeader :user="user" />
      <router-view :user="user" />
    </div>
    <!-- Login redirect -->
    <div v-else class="login">
      <h3>Please sign-in</h3>
      <button
        type="button"
        class="btn btn-primary"
        @click="$msal.signIn()"
      >
        LOGIN
      </button>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  computed: {
    user () {
      // TODO: user function
      var user = false
      // let user = null;
      // if (this.msal.isAuthenticated) {
      //   user = {
      //     ...this.msal.user,
      //     profile: {}
      //   }
      //   if (this.msal.graph && this.msal.graph.profile) {
      //       user.profile = this.msal.graph.profile
      //   }
      // }
      return user
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.login {
  margin: auto;
  margin-top:60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

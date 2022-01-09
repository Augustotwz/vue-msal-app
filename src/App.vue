<template>
  <div id="app">
    <!-------- User logged -------->
    <div v-if="user">
      <TheHeader :user="user" />
      <router-view :user="user" />
    </div>
    <!-------- Login redirect -------->
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
      let user = null
      if (this.$msal.isAuthenticated()) {
        user = {
          ...this.msal.user,
          profile: {},
          photo: ''
        }
        // setting user data
        if (this.msal.graph && this.msal.graph.profile) {
          user.profile = this.msal.graph.profile
        }
        // setting user photo
        if (this.msal.graph.photo) {
          user.photo = URL.createObjectURL(this.msal.graph.photo)
        }
      }
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 180px;
  margin: auto;
  margin-top:60px;
  border:1px solid grey;
  border-radius: 10px;
}
</style>

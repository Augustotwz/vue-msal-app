<template>
  <div class="header">
    <div class="d-flex justify-content-between align-items-center">
      <h5>Welcome {{user.name}}</h5>
      <button
        type="button"
        class="btn btn-light btn-sm"
        @click="$msal.signOut()"
      >
        LOGOUT
      </button>
    </div>
    <div class="nav d-flex justify-content-center align-items-center">
      <router-link to="/Home">Home</router-link> |
      <router-link to="/About">User info</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: { user: Boolean }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  padding: 10px;
  color: white;
  background-color: blue;
}
.nav a {
  padding: 0px 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
}
</style>

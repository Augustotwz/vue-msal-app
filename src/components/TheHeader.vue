<template>
  <div class="header">
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
  height: 40px;
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

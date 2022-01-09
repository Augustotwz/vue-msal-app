<template>
  <div class="home d-flex flex-column align-items-center">
    <h1>Welcome {{ user.name }} !</h1>
    <button
      type="button"
      class="btn btn-primary btn-sm"
      @click="$msal.signOut()"
    >
      LOGOUT
    </button>
  </div>
</template>

<script>
export default {
  props: { user: Boolean }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  padding:20px;
}
</style>

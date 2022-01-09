<template>
  <div class="about">
    <ul class="list-group list-group-flush text-justify">
      <li class="list-group-item" v-if="user.name"><span>Name: </span> {{ user.name }}</li>
      <li class="list-group-item" v-if="user.userName"><span>Email: </span> {{ user.userName }}</li>
      <div v-if="user.profile">
        <li class="list-group-item" v-if="user.profile.jobTitle">
          <span>Job Title: </span> {{ user.profile.jobTitle }}
        </li>
        <li class="list-group-item" v-if="user.profile.officeLocation">
          <span>Local: </span> {{ user.profile.officeLocation }}
        </li>
        <li class="list-group-item" v-if="user.profile.mobilePhone">
          <span>Phone: </span> {{ user.profile.mobilePhone }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: { user: Boolean }
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 400px;
  padding:20px;
}
span {
  font-weight: 600;
}
</style>

<template>
  <div class="container">
    <h1>User Profile</h1>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      user: {
        name: 'John Doe',
        email: 'dummy@gmail.com'
      }
    }
  },
  created () {
    console.log('User profile created')
  }
}
</script>

<template>
  <button @click = "goToHome()">Back</button>
  <div class="container">
    <h1 class="title">User Profile</h1>
    <div class="user-info">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Role:</strong> {{ user.role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      user: {
        name: '',
        email: '',
        role: ''
      }
    }
  },
  created () {
    // Retrieve user data from localStorage
    const name = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');

    if (name && email && role) {
      this.user.name = name;
      this.user.email = email;
      this.user.role = role;
    }
  },
  methods: {
    goToHome(){
      this.$router.push('/home')
    }
  },
}
</script>

<style scoped>
.container {
  background-color: #1f1f1f; /* Light black background */
  color: #fff; /* White text color */
  height: 100vh; /* Fill the whole viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
}

.title {
  font-size: 2.5em;
  color: orange; /* Orange title color */
  margin-bottom: 30px;
}

.user-info {
  border-top: 2px solid orange; /* Orange border on top of user info */
  padding-top: 20px;
}

.user-info p {
  margin-bottom: 15px;
}
button {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  margin-top:10px;
  position : absolute;
  left:10px;
}

button:hover {
  background-color: darkorange;
}

</style>


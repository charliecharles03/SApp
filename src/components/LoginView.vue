<template>
  <div class="login-container">
    <h1 class="login-title">TuneCast</h1>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
        <br>
        <br>
        <button @click="this.$router.push('/register')">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        // Call the login API
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });

        // Parse the JSON response
        const data = await response.json();
        console.log(data);

        // Check if the login was successful
        if (response.ok) {
          // Save the token to local storage
          localStorage.setItem('token', data.access_token);
          localStorage.setItem('username', this.username);
          localStorage.setItem('user_id', data.users.user_id);
          localStorage.setItem('role', data.users.role_type);
          localStorage.setItem('email', data.users.email);

          // Redirect to the home page
          this.$router.push('/home');
        } else {
          // Display an error message
          this.errorMessage = data.message;
        }
      } catch (error) {
        console.error('Error:', error);
        this.errorMessage = 'An error occurred. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f; /* Dark gray background */
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMCAwSDAgMFYxMDBoMTAwdjEwMEgweiIvPjxwYXRoIGQ9Ik0xMDAgMzBoMTAwdjEwMEgweiIvPjwvc3ZnPg==');
  background-size: 100%;
}

.login-title {
  font-size: 3em;
  color: #fff; /* White text color */
  margin-bottom: 30px;
}

.login-form {
  width: 400px; /* Adjust width as needed */
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background for the form */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333; /* Dark text color */
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc; /* Light gray border */
}

button {
  width: 100%;
  padding: 15px 30px;
  background-color: orange; /* Orange button color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff8c00; /* Darker orange on hover */
}
</style>


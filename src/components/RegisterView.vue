<template>
  <div class="register-container">
    <h1 class="register-title">Register</h1>
    <div class="register-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="role">Role</label>
          <div class="custom-select">
            <select id="role" v-model="role" required>
              <option value="user">User</option>
              <option value="creator">Creator</option>
            </select>
            <div class="select-arrow"></div>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      role: 'user'
    }
  },
  methods: {
    submitForm() {
      // Add your form submission logic here
      console.log('Username:', this.username);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Role:', this.role);
      const formData = new URLSearchParams();
      formData.append('username',this.username );
      formData.append('email',this.email );
      formData.append('password',this.password);
      formData.append('role',this.role)
      axios.post('http://localhost:5000/api/auth/register',formData,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => {
          console.log(response.data)
          this.$router.push('/')
        })
      .catch(error => {
          console.error('errror:', error);
      });
    }
  }
}
</script>

<style scoped>
.register-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1f1f1f;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMCAwSDAgMFYxMDBoMTAwdjEwMEgweiIvPjxwYXRoIGQ9Ik0xMDAgMzBoMTAwdjEwMEgweiIvPjwvc3ZnPg==');
  background-size: 100%;
}

.register-title {
  font-size: 3em;
  color: #fff;
  margin-bottom: 30px;
}

.register-form {
  width: 400px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="password"],
.custom-select {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.custom-select {
  position: relative;
}

.custom-select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
  width: 100%;
  padding-right: 30px;
  cursor: pointer;
}

.custom-select .select-arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #333;
}

button {
  width: 100%;
  padding: 15px 30px;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff8c00;
}
</style>

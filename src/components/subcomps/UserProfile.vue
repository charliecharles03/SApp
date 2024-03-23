<template>
  <transition name="fade">
    <div class="modal-overlay" v-if="showModal">
      <div class="modal">
        <button @click="closeModal">Close</button>
        <div class="user-profile">
          <h2>User Profile</h2>
          <div class="user-details">
            <div><strong>Name:</strong> {{ user.name }}</div>
            <div><strong>Email:</strong> {{ user.email }}</div>
            <div><strong>Age:</strong> {{ user.age }}</div>
            <!-- Add more user details as needed -->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UserProfileModal',
  props: {
    user: {
      type: Object,
      required: true
    },
    showModal: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  animation: modal-slide-up 0.3s ease-out;
}

.user-profile {
  margin-bottom: 20px;
}

.user-details div {
  margin-bottom: 5px;
}

@keyframes modal-slide-up {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


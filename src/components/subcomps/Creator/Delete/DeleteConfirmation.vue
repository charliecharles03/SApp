<template>
  <div class="modal-overlay">
    <div class="modal">
      <h2>Delete Confirmation</h2>
      <p>Are you sure you want to delete "{{ song.title }}"?</p>
      <div class="buttons">
        <button @click="confirmDelete">Delete</button>
        <button @click="cancelDelete">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteConfirmation',
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  methods: {
    confirmDelete() {
      this.$emit('confirm-delete');
    },
    cancelDelete() {
      this.$emit('cancel-delete');
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
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.buttons button {
  margin-left: 10px;
}
</style>

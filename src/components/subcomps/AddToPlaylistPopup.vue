<template>
  <div class="popup-container" v-if="showPopup">
    <div class="popup-content">
      <h3>Add to Playlist</h3>
      <select v-model="selectedPlaylist" class="playlist-dropdown">
        <option v-for="playlist in playlists" :key="playlist">
          {{ playlist }}
        </option>
      </select>
      <button @click="addToSelectedPlaylist" class="add-to-playlist-btn">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playlists: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showPopup: true,
      selectedPlaylist: '',
      showNewPlaylistInput: false,
      newPlaylistName: ''
    };
  },
  methods: {
    toggleNewPlaylistInput() {
      this.showNewPlaylistInput = !this.showNewPlaylistInput;
      if (this.showNewPlaylistInput) {
        this.selectedPlaylist = ''; // Reset the selected playlist
      }
    },
    addToSelectedPlaylist() {
      if (this.selectedPlaylist) {
        console.log('Added to existing playlist:', this.selectedPlaylist);
        this.$emit('add',this.selectedPlaylist);
      } else if (this.newPlaylistName) {
        console.log('Added to new playlist:', this.newPlaylistName);
      }
      this.closePopup();
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>

<style scoped>
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.playlist-dropdown,
.new-playlist-input,
.add-to-playlist-btn,
.toggle-new-playlist-btn {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
}

.toggle-new-playlist-btn {
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
}

.add-to-playlist-btn {
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.add-to-playlist-btn:hover,
.toggle-new-playlist-btn:hover {
  background-color: darkorange;
}

.new-playlist-input {
  display: none;
}
</style>

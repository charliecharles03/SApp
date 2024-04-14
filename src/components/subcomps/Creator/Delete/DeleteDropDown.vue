<template>
  <div>
    <h2>Albums</h2>
    <div class="album-dropdown">
      <div class="dropdown-trigger" @click="toggleDropdown">
        <span>{{ selectedAlbum ? selectedAlbum: 'Select an album' }}</span>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div class="dropdown-menu" v-if="showDropdown">
        <div class="dropdown-item" v-for="(songs, playlistName) in playlists" :key="playlistName" @click="selectAlbum(playlistName)">
          <span>{{playlistName}}</span>
        </div>
      </div>
      <button class="delete-button" @click="deleteAlbum(selectedAlbum)">Delete</button>
    </div>
  </div>
  <div v-if="deletedSuccessfully">Deleted successfully</div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'AlbumManager',
  data() {
    return {
       playlistName: 'Playlists',
      playlists: {},
      selectedPlaylist: null,
      selectedPlaylistName: null,
      dataFromChild: '',
      selectedAlbum: null,
      showDropdown: false,
      deletedSuccessfully: false
    };
  },
  created(){
    this.fetchPlaylists();
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectAlbum(playlistName) {
      this.selectedAlbum = playlistName;
      console.log(playlistName);
      this.showDropdown = false;
    },
    deleteAlbum(album) {
      axios.delete('http://localhost:5000/api/auth/deletealbumfull',{
        params:{
          album_name: album
        }
      })
        .then(response => {
          console.log("deleteed successfully");
          this.deletedSuccessfully = true;
        })
        .catch(error => {
          console.error('Error fetching: no sons ',);
        });
    },
    fetchPlaylists(){
      var userId = localStorage.getItem('user_id');
      axios.get('http://localhost:5000/api/auth/getalbum',{
        params:{
          user_id: userId
        }
      })
        .then(response => {
          this.playlists = response.data.albums;
          console.log(this.playlists);
        })
        .catch(error => {
          console.error('Error fetching playlists:');
        });

    }
  },
};
</script>

<style scoped>
.album-dropdown {
  position: relative;
  display: inline-block;
  width: 300px;
}

.dropdown-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.delete-button {
  background-color: transparent;
  border: none;
  color: #dc3545;
  cursor: pointer;
}

.selected-album {
  margin-top: 20px;
}
.delete-button{
  background-color:orange;
  color:white;
  width:100px;
  height:50px;
  border-radius:10px;
  margin-top:10px;
}
</style>

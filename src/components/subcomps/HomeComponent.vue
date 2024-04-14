<template>
  <div class="UserProfileClass">
    <div class="ButtonClass">
        <a  @click="goToCreator()" v-if="isCreator" class="btn">Creator</a>
        <a  @click="goToAdmin()" v-if="isAdmin" class="btn">Admin</a>
        <a  @click="goToPlayList()" class="btn">PlayLists</a>
      <button @click="profileClicked()" class="UserProfileButton">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
      </button>
    </div>
  </div>
  <router-view></router-view>
  <div>
    <header>
      <div class="container">
        <h1>TuneCast</h1>
      </div>
    </header>
    <section class="hero">
      <div class="container">
        <h2>Discover. Listen. Enjoy.</h2>
        <p>Explore a world of melodies right at your fingertips.</p>
 <div class="search-container">
    <input type="text" v-model="searchQuery" @input="searchSongs" placeholder="Search songs...">
    <ul class="song-list" v-if="showResults">
      <li v-for="(song, index) in filteredSongs" :key="index" @click="selectedSong(song.title)">{{ song.title }}</li>
    </ul>
  </div>
      </div>
    </section>

    <h2>Recently Added Songs</h2>
    <SongGallery :songs="songs" />

    <section class="features">
      <div class="container">
          <h2>Features</h2>
        <div class="featureModel">
          <div class="feature-item">
            <h3>Rate your favorite songs</h3>
            <p>up vote your favorite artist songs for more reach</p>
          </div>
          <div class="feature-item">
            <h3>Create Playlists</h3>
            <p>Craft your perfect playlists for any occasion.</p>
          </div>
          <div class="feature-item">
            <h3>Discover New Artists</h3>
            <p>Unearth hidden gems and explore diverse talents.</p>
          </div>
        </div>
      </div>
    </section>
    <PlayComponent :song="currentSong" />
    <footer>
      <div class="container">
        <p>&copy; 2024 TuneCast. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
<script>
import axios from 'axios';
import SongGallery from './SongGallery.vue'
import { songs } from './SongService.js'
import PlayComponent from './PlayComponent.vue'

export default {
  name: 'App',
  components: {
    SongGallery,
    PlayComponent
  },
  data () {
    return {
      searchQuery: '',
      songs:[],
      showResults: false,
      isCreator: false,
      isAdmin: false,
      currentSong:{
        album: "dafadsf",
        artist: "da",
        audio: "aaaaaaa",
        cover: "https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg",
        duration: "dafdsf",
        genre: "rock",
        song_id: 2,
        title: "idontknow",
        year: "dafsd"
      }
    }
  },
  computed: {
    filteredSongs() {
      return this.songs.filter(song =>
        song.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  created(){
    var user_type = localStorage.getItem('role');
    if(user_type == 'creator'){
        this.isCreator = true;
    }
    else if(user_type == 'admin'){
      this.isAdmin = true
    }
  },
  mounted () {
    const token = localStorage.getItem('token');
    if (token) {
      // Include JWT token in request headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      this.fetchSongs();
    } else {
      console.error('JWT token not found.');
    }
  },
  methods: {
    profileClicked () {
      console.log('profile clicked!')
      this.$router.push('/userProfile')
    },
    goToPlayList () {
      this.$router.push('/playlist')
    },
    fetchSongs () {
      // Fetch songs from the server
       axios.get('http://localhost:5000/api/auth/recents')
        .then(response => {
          this.songs = response.data;
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching songs:', error);
        });
    },
    searchSongs(){
      this.showResults = this.searchQuery !== '';
    },
    selectedSong(title){
       console.log('Selected song:', title);
    },
    goToCreator(){
      this.$router.push('/creator')
    },
    goToAdmin(){
      this.$router.push('/admin')
    }
  }
}
</script>

<style>
/* Resetting default margin and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  line-height: 1.6;
}

/* Container styles */
.container {
  width: 80%;
  margin: auto;
  overflow: hidden;
}

/* Header styles */
header {
  background: #333;
  color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
}

header h1 {
  float: left;
}

nav ul {
  float: right;
}

nav ul li {
  display: inline;
  margin-left: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

/* Hero section styles */
.hero {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.hero h2 {
  font-size: 3em;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background: #ff5500;
  color: #fff;
  padding: 12px 20px 10px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  margin-right:10px;
}

.btn:hover {
  background: #ff7700;
}

/* Features section styles */
.features {
  padding: 50px 0;
  text-align: center;
}

.feature-item {
  width: 100%;
  max-width: 300px;
  margin: auto;
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.feature-item h3 {
  margin-bottom: 10px;
  color: #333;
}

.feature-item p {
  color: #666;
}

/* Footer styles */
footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

footer p {
  font-size: 0.8em;
}

.UserProfileClass{
  text-align: right;
  padding: 20px;
  font-size: 20px;
  margin-bottom: 20px;
}

.UserProfileButton{
  display: inline-block;
  background: #ff5500;
  color: #fff;
  padding: 11px 10px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
  margin-left: 40px;
  border-radius: 15px;
}

.featureModel{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ButtonClass{
  gap: 20px;
}

<style scoped>
.search-container {
  position: relative;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1em;
}

.song-list {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
}

.song-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.song-list li:last-child {
  border-bottom: none;
}

.song-list img {
  margin-right: 10px;
}
</style>

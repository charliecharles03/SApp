<template>
  <div><h4>User Tag palce</h4></div>
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
        <a  @click="onClick()" class="btn">Search</a>
      </div>
    </section>

    <h2>Songs Gallery</h2>
    <SongGallery :songs="songs" />

    <section class="features">
      <div class="container">
        <h2>Features</h2>
        <div class="feature-item">
          <h3>Personalized Recommendations</h3>
          <p>Tailored suggestions based on your listening habits.</p>
        </div>
        <div class="feature-item">
          <h3>Create Playlists</h3>
          <p>Craft your perfect playlists for any occasion.</p>
        </div>
        <div class="feature-item">
          <h3>Discover New Artists</h3>
          <p>Unearth hidden gems and explore diverse talents.</p>
        </div>
        <div class="feature-item">
          <h3>Offline Listening</h3>
          <p>Download your favorite songs for offline enjoyment.</p>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>&copy; 2024 TuneCast. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
<script>

import SongGallery from './SongGallery.vue'
import { songs } from './SongService.js'

export default {
  name: 'App',
  components: {
    SongGallery
  },
  data () {
    return {
      songs: songs
    }
  },
  methods: {
    onclick () {
      console.log('button clicked!')
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
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
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

</style>

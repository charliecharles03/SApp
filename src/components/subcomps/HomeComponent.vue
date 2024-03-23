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

export default {
  name: 'App',
  components: {
    SongGallery
  },
  data () {
    return {
      songs: [
        {
          title: 'Song Title 1',
          artist: 'Artist Name 1',
          album: 'Album Name 1',
          duration: '3:45',
          genre: 'Pop',
          year: 2020,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio1.mp3'
        },
        {
          title: 'Song Title 2',
          artist: 'Artist Name 2',
          album: 'Album Name 2',
          duration: '4:20',
          genre: 'Rock',
          year: 2018,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio2.mp3'
        },
        {
          title: 'Song Title 3',
          artist: 'Artist Name 3',
          album: 'Album Name 3',
          duration: '3:30',
          genre: 'R&B',
          year: 2021,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio3.mp3'
        },
        // Add more songs here with actual cover URLs
        {
          title: 'Song Title 4',
          artist: 'Artist Name 4',
          album: 'Album Name 4',
          duration: '4:00',
          genre: 'Pop',
          year: 2019,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio4.mp3'
        },
        {
          title: 'Song Title 5',
          artist: 'Artist Name 5',
          album: 'Album Name 5',
          duration: '3:15',
          genre: 'Rock',
          year: 2020,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio5.mp3'
        },
        {
          title: 'Song Title 6',
          artist: 'Artist Name 6',
          album: 'Album Name 6',
          duration: '3:50',
          genre: 'R&B',
          year: 2022,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio6.mp3'
        },
        {
          title: 'Song Title 7',
          artist: 'Artist Name 7',
          album: 'Album Name 7',
          duration: '4:10',
          genre: 'Pop',
          year: 2017,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio7.mp3'
        },
        {
          title: 'Song Title 8',
          artist: 'Artist Name 8',
          album: 'Album Name 8',
          duration: '3:40',
          genre: 'Rock',
          year: 2016,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio8.mp3'
        },
        {
          title: 'Song Title 9',
          artist: 'Artist Name 9',
          album: 'Album Name 9',
          duration: '3:25',
          genre: 'R&B',
          year: 2023,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio9.mp3'
        },
        {
          title: 'Song Title 10',
          artist: 'Artist Name 10',
          album: 'Album Name 10',
          duration: '4:30',
          genre: 'Pop',
          year: 2015,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio10.mp3'
        },
        {
          title: 'Song Title 11',
          artist: 'Artist Name 11',
          album: 'Album Name 11',
          duration: '3:20',
          genre: 'Rock',
          year: 2024,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio11.mp3'
        },
        {
          title: 'Song Title 12',
          artist: 'Artist Name 12',
          album: 'Album Name 12',
          duration: '3:55',
          genre: 'R&B',
          year: 2014,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio12.mp3'
        },
        {
          title: 'Song Title 13',
          artist: 'Artist Name 13',
          album: 'Album Name 13',
          duration: '4:05',
          genre: 'Pop',
          year: 2023,
          cover: 'https://img.freepik.com/free-psd/club-dj-party-post-social-media-template_505751-3256.jpg',
          audio: 'song_audio13.mp3'
        }
      ]
    }
  },
  methods: {
    onClick () {
      console.log('Button clicked!')
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

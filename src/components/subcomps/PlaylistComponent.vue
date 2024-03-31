<template>
  <h1>Playlist</h1>
  <div class="play-card" v-for="play in playlists" :key="play.name" >
    <lable class="play-name-card">{{play.name}}</lable>
    <SongGallery :songs="play.songs" />
  </div>
  <button @click="playSong()">Play Song</button>
</template>
<script>
import SongGallery from './SongGallery.vue'
import { songs } from '../subcomps/SongService.js'

export default {
  name: 'playlists',
  components: {
    SongGallery
  },
  data () {
    return {
      playlists: [
        {
          name: 'Playlist 1',
          songs: songs
        },
        {
          name: 'Playlist 2',
          songs: songs
        },
        {
          name: 'Playlist 3',
          songs: songs
        },
        {
          name: 'Playlist 4',
          songs: songs
        },
        {
          name: 'Playlist 5',
          songs: songs
        }
      ]
    }
  },
  methods: {
    playSong () {
      console.log(songs);
    }
  }

}
</script>
<style>
  .play-name-card {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    left: 10px;
    gap:20px;
    background-color: aqua;
  }
  .play-card {
    margin: 20px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #f0f0f0;
    gap: 20px;
  }
</style>

<<template>
  <div>
    <AlbumComponent @parent-data="handleDataFromChild" />
  </div>
    <DeleteConfirmation
      v-if="showModal"
      :song="songToDelete"
      @confirm-delete="deleteSong"
      @cancel-delete="hideModal"
    />
</template>
<script>

import AlbumComponent from '../AlbumComponent.vue'
import DeleteConfirmation from './Delete/DeleteConfirmation.vue'
import axios from 'axios'
  export default {
    components: {
      AlbumComponent,
      DeleteConfirmation
    },
    data() {
      return {
        dataFromChild: '',
         songToDelete: null,
        showModal: false
      };
    },

    methods: {
      handleDataFromChild(data){
        console.log("this song will permanent deleted");
        this.showDeleteConfirmation(data);
        this.dataFromChild = data;
        console.log(data)
      },

      showDeleteConfirmation(song) {
      this.songToDelete = song;
      this.showModal = true;
    },
       deleteSong() {
      // Logic to delete the song
      console.log('Deleting song:', this.dataFromChild);
      axios.delete('http://localhost:5000/api/auth/deletesong',{
        params:{
          song_id: this.dataFromChild
        }
        })
        .then(response => {
          console.log("done");
        })
        .catch(error => {
          console.error('errror:', error);
        });

      this.hideModal();
    },
    hideModal() {
      this.songToDelete = null;
      this.showModal = false;
    }
    },
  }
</script>

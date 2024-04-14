<<template>
  <div class="admin-container">
    <h1 class="admin-title">Admin Dashboard</h1>
    <div class="stat-card main-card">
        <div class="stat-icon">
          <i class="fas fa-music"></i>
        </div>
        <div class="stat-content">
          <h2 class="stat-number" :class="{ 'animate-number': animateAlbums }">{{ total }}</h2>
          <p class="stat-label">Total</p>
        </div>
      </div>
    <div class="stats-container">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-content">
          <h2 class="stat-number" :class="{ 'animate-number': animateUsers }">{{ users }}</h2>
          <p class="stat-label">Listeners</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-pencil-alt"></i>
        </div>
        <div class="stat-content">
          <h2 class="stat-number" :class="{ 'animate-number': animateCreators }">{{ creators }}</h2>
          <p class="stat-label">Creators</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-music"></i>
        </div>
        <div class="stat-content">
          <h2 class="stat-number" :class="{ 'animate-number': animateAlbums }">{{ albums }}</h2>
          <p class="stat-label">Albums</p>
        </div>
      </div>
       <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-music"></i>
        </div>
        <div class="stat-content">
          <h2 class="stat-number" :class="{ 'animate-number': animateAlbums }">{{ songs}}</h2>
          <p class="stat-label">Songs</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'AdminDashboard',
  data() {
    return {
      users: 0,
      creators: 0,
      albums: 0,
      songs:0,
      total:0,
      animateUsers: false,
      animateCreators: false,
      animateAlbums: false
    }
  },
  mounted() {
    this.fetchStats();
  },
  methods: {
    fetchStats() {

      setTimeout(() => {
        this.users =this.fetchcountuser();
        this.creators = this.fetchcountcreator();
        this.albums = this.fetchcountalbum();
        this.songs = this.fetchcountsongs();
        this.total = this.fetchcounttotal();
        this.animateUsers =true;
        this.animateCreators = true;
        this.animateAlbums = true;
      }, 1000);
    },

    fetchcountuser(){
      axios.get('http://localhost:5000/api/auth/usercount',{
        params:{
          role: 'user'
        }
        })
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error('errror:', error);
        });
    },

    fetchcountcreator(){
      axios.get('http://localhost:5000/api/auth/usercount',{
        params:{
          role: 'creator'
        }
        })
        .then(response => {
          this.creators= response.data
        })
        .catch(error => {
          console.error('errror:', error);
        });
    },
    fetchcountalbum(){
      axios.get('http://localhost:5000/api/auth/albumcount')
        .then(response => {
          this.albums= response.data
        })
        .catch(error => {
          console.error('errror:', error);
        });
    },
    fetchcountsongs(){
      axios.get('http://localhost:5000/api/auth/songcount')
        .then(response => {
          this.songs= response.data
        })
        .catch(error => {
          console.error('errror:', error);
        });
    },
    fetchcounttotal(){
      axios.get('http://localhost:5000/api/auth/totalcount')
        .then(response => {
          this.total= response.data
        })
        .catch(error => {
          console.error('errror:', error);
        });

    }

  }
}
</script>

<style scoped>
.admin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f5f5f5;
}

.admin-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.stats-container {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  width: 200px;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #007bff;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.animate-number {
  animation: numberAnimation 1s ease-in-out;
}

@keyframes numberAnimation {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.stat-label {
  font-size: 1.2rem;
  color: #666;
}
.main-card{
  background-color: orange;
  margin-bottom: 60px;

 }
</style>

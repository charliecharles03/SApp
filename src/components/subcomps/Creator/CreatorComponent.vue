<template>
  <br>
  <div>
    <nav>
      <button @click = "goToHome()">Back</button>
      <button @click="showComponent('Component1')">Albums</button>
      <button @click="showComponent('Component2')">Add</button>
      <button @click="showComponent('Component3')">Edit</button>
      <button @click="showComponent('Component4')">Delete</button>
    </nav>

    <div v-if="currentComponent === 'Component1'">
      <CreatorListComponent/>
    </div>

    <div v-if="currentComponent === 'Component2'">
      <AddComponent/>
    </div>

    <div v-if="currentComponent === 'Component3'">
      <EditComponent/>
    </div>

    <div v-if="currentComponent === 'Component4'">
      <DeleteComponent/>
    </div>


  </div>
</template>

<script>
import AddComponent from './AddComponent.vue'; // Import your Component1 file
import EditComponent from './EditComponent.vue'; // Import your Component2 file
import CreatorListComponent from './CreatorListComponent.vue'; // Import your Component3 file
import DeleteComponent from './DeleteComponent.vue'; // Import your Component3 file

export default {
  components: {
    AddComponent,
    CreatorListComponent,
    EditComponent,
    DeleteComponent
  },
  data() {
    return {
      currentComponent: 'CreatorListComponent'
    };
  },
  methods: {
    showComponent(componentName) {
      this.currentComponent = componentName;
    },
    goToHome(){
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}

button {
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: darkorange;
}
</style>

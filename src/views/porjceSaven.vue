<template>
  <h2>Get Repo Name</h2>
  <p>
    A Program That Gives him A Person's Name ON Github and Gives you All The
    Repo Names For That Person
  </p>
  <div class="container">
    <input v-model="userName" type="text" placeholder="Enter Repo Name" />
    <button @click="fetchData">Get Repos</button>
    <div v-for="(repoed, i) in repo" :key="i">
      <h3>{{ repoed.name }}</h3>
    </div>
  </div>
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: null,
      repo: null,
    };
  },
  methods: {
    fetchData() {
      return axios
        .get(`https://api.github.com/users/${this.userName}/repos`)
        .then((response) => {
          this.repo = response.data;
          // Handle successful response
        })
        .catch((error) => {
          console.error(error);
          // Handle errors
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  input,
  button {
    padding: 8px;
  }
}
</style>

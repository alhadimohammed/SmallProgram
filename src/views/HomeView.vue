<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-link :to="{ name: 'projectOne' }">
      <div class="pojrct">
        <h3>Project 1</h3>
        Select Images
      </div>
    </router-link>
    <router-link :to="{ name: 'projecTow' }">
      <div class="pojrct">
        <h3>Project 2</h3>
        Show Password
      </div>
    </router-link>
    <router-link :to="{ name: 'ProjecTree' }">
      <div class="pojrct">
        <h3>Project 3</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porceFore' }">
      <div class="pojrct">
        <h3>Project 4</h3>
        Chang Main Color
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceFive' }">
      <div class="pojrct">
        <h3>Project 5</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceSecx' }">
      <div class="pojrct">
        <h3>Project 6</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceSaven' }">
      <div class="pojrct">
        <h3>Project 7</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceEat' }">
      <div class="pojrct">
        <h3>Project 8</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceNigen' }">
      <div class="pojrct">
        <h3>Project 9</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceTan' }">
      <div class="pojrct">
        <h3>Project 10</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceElaven' }">
      <div class="pojrct">
        <h3>Project 11</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceTowaf' }">
      <div class="pojrct">
        <h3>Project 12</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceTharten' }">
      <div class="pojrct">
        <h3>Project 13</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceForeten' }">
      <div class="pojrct">
        <h3>Project 14</h3>
        Show message
      </div>
    </router-link>
    <router-link :to="{ name: 'porjceFivten' }">
      <div class="pojrct">
        <h3>Project 15</h3>
        Show message
      </div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
};
</script>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.pojrct {
  width: 150px;
  height: 100px;
  background-color: #777;
  padding: 15px;
  margin: 10px 20px;
  color: white;
}
h1,
h2,
h3,
h4 {
  text-transform: capitalize;
}
p {
  text-transform: capitalize;
}
</style>

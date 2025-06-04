<template>
  <div class="container" :style="{ '--main-color': mainColor }">
    <h1>Change Color</h1>
    <p>Change the main color of the page</p>

    <ul>
      <li data-color="red" @click="changeColor"></li>
      <li data-color="black" @click="changeColor"></li>
      <li data-color="green" @click="changeColor"></li>
      <li data-color="blue" @click="changeColor"></li>
      <li data-color="#4a6285" @click="changeColor"></li>
      <li data-color="#839924" @click="changeColor"></li>
      <li data-color="#9f4747" @click="changeColor"></li>
      <li data-color="#515151" @click="changeColor"></li>
      <li data-color="#35475d" @click="changeColor"></li>
      <li data-color="#270808" @click="changeColor"></li>
    </ul>
    <div class="one"></div>
    <div class="tow"></div>
    <div class="three"></div>
    <div class="for"></div>
    <div class="five"></div>
    <div class="sex"></div>
    <div class="savin"></div>
    <div class="eat"></div>
    <div class="niyb"></div>
    <div class="tan"></div>
  </div>
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      mainColor: "green",
    };
  },
  methods: {
    changeColor() {
      this.mainColor = event.target.getAttribute("data-color");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  ul {
    li {
      list-style: none;
      width: 80px;
      height: 80px;
      display: inline-block;
      margin: 10px;
      cursor: pointer;
    }

    li:first-child {
      background-color: red;
    }
    li:nth-child(2) {
      background-color: black;
    }
    li:nth-child(3) {
      background-color: green;
    }
    li:nth-child(4) {
      background-color: blue;
    }
    li:nth-child(5) {
      background-color: #4a6285;
    }
    li:nth-child(6) {
      background-color: #839924;
    }
    li:nth-child(7) {
      background-color: #9f4747;
    }
    li:nth-child(8) {
      background-color: #515151;
    }
    li:nth-child(9) {
      background-color: #35475d;
    }
    li:last-child {
      background-color: #270808;
    }
  }
  div {
    width: 350px;
    height: 350px;
    display: inline-block;
    margin: 10px 20px;
    background-color: var(--main-color);
  }
}
</style>

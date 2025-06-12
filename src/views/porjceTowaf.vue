<template>
  <h2>Toggle For Glass</h2>
  <div class="container">
    <button :class="{ selcted: selcted }" @click="selcted = !selcted">
      First Tiype
    </button>
    <button @click="toggle">Secone Tiype</button>
    <button @click="advancedToggle($event, 'selcted')">Thert Tiye</button>
  </div>
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      selcted: false,
    };
  },
  methods: {
    toggle(event) {
      event.target.classList.toggle("selcted");
    },
    advancedToggle(event, className) {
      event.target.classList.toggle(className);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 20px auto;
  button {
    display: block;
    margin: 20px auto;
    padding: 10px 15px;
    border: none;
    color: white;
    background-color: #524f4f;
    border-radius: 5px;
    cursor: pointer;
  }
  .selcted {
    background-color: rgb(108, 223, 108);
  }
}
</style>

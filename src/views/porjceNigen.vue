<template>
  <div class="container">
    <h2>Priduct Title</h2>
    <p>Product Descrption</p>
    <h3>Price : {{ price }}$</h3>
    <h3>Amount :</h3>
    <input type="range" min="1" max="20" step="1" v-model="amount" />
    <div class="pric">
      <p>Amount : {{ amount }}</p>
      <p>Totle : {{ totle }}$</p>
    </div>
  </div>
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      price: 50,
      amount: 1,
    };
  },
  computed: {
    totle() {
      return this.amount * this.price;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
  margin: 20px auto;
  background-color: #ededed;
  padding: 20px;
  font-size: 25px;
  border-radius: 5px;
  input {
    width: 100%;
    height: 5px;
  }
  .pric {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
  }
}
</style>

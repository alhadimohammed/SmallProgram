<template>
  <h2>max characters</h2>
  <div class="container">
    <h3>Enter Your Massege ( {{ maxchara }} Characters Alowed)</h3>
    ,
    <textarea
      v-model="textarea"
      @input="conunter"
      :maxlength="maxchara"
    ></textarea>
    <p class="conunt" :class="{ zero: chackzero }">
      left | <span>{{ leftchara }}</span>
    </p>
  </div>
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      maxchara: 20,
      maxcharad: "",
      textarea: null,
      leftchara: null,
      chackzero: false,
    };
  },
  methods: {
    conunter() {
      this.leftchara = this.maxchara - this.textarea.length;
      if (this.leftchara == 0) {
        this.chackzero = true;
      } else {
        this.chackzero = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 40px auto;
  textarea {
    width: 450px;
    height: 300px;
    background-color: #ededed;
    border: none;
    resize: none;
  }
  .conunt {
    margin: 10px auto;
    font-weight: bold;
  }
  .zero span {
    color: red;
  }
}
</style>

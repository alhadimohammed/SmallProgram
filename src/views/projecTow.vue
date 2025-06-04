<template>
  <h1>Show Password</h1>
  <p>
    a program that changes the status of the password appears to be hidden is
    change it
  </p>
  <div class="main-input">
    <input :type="passwordType" name="password" />
    <img
      v-show="!heading"
      @click="switchField"
      src="../assets/eys.svg"
      alt=""
    />
    <img
      v-show="heading"
      @click="switchField"
      src="../assets/eys2.svg"
      alt=""
    />
  </div>
  <button>Chang password</button>

  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      foto: "",
      fotos: [],
      selector: "../assets/image1.jpg",
      passwordType: "password",
      heading: false,
    };
  },
  methods: {
    switchField() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
      this.heading = !this.heading;
    },
  },
};
</script>

<style scoped lang="scss">
.main-input {
  border: 1px solid black;
  padding: 10px 15px;
  width: 200px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px auto;

  input {
    border: none;
  }
  input:focus {
    outline: none;
  }
  img {
    color: blue;
    width: 25px;
    cursor: pointer;
    // background-color: blue;
  }
}
</style>

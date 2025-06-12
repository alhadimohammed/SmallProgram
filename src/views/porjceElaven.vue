<template>
  <h2>danomic Form</h2>
  <div class="container">
    <form action="#">
      <div class="name">
        <label for="name">Your Name</label>
        <input
          type="text"
          name="name"
          v-model="yourName"
          @input="testName, getLength"
        />
        <h1>{{ yourNameLength }}</h1>
        <div class="error" v-show="errorShowName">
          <p>
            <span>!</span>
            <small v-for="(err, i) in errorName" :key="i"> {{ err }} </small>
          </p>
        </div>
      </div>
      <div class="Email">
        <label for="Email">Your Email</label>
        <input type="email" name="email" v-model="yourEmail" />
      </div>
      <div class="age">
        <label for="Age">Your Age</label>
        <input type="number" name="Age" v-model="yourAge" />
        <div class="error" v-show="errorShowAge">
          <p>
            <span>!</span>
            <small v-for="(err, i) in maxCharAge" :key="i"> {{ err }} </small>
          </p>
        </div>
      </div>
      <h2>{{ showEmailError }}</h2>
      <div class="city">
        <label for="city">Your city</label>
        <input type="text" name="city" v-model="yourCity" />
      </div>
    </form>
  </div>
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      yourName: null,
      yourAge: null,
      maxCharName: 20,
      minCharName: 5,
      errorName: [],
      maxAge: 45,
      errorAge: [],
      error: false,
      errorShowName: false,
      errorShowAge: false,
    };
  },
  methods: {
    testName() {
      if (this.yourName.length < this.maxCharName) {
        this.errorName = true;
        this.error = true;
        // this.errorName = true;
        // this.error = false;
        // this.errorName = [];
        // let errorr = "Enter Your Name";
        // this.errorName.push(errorr);
      } else {
        this.errorName = false;
        this.error = false;
        // this.errorName = [];
        // let errorr = `username must be and contain ( ${this.minCharName}-${this.maxCharName} ) characters`;
        // this.errorName.push(errorr);
        // this.error = true;
        // this.errorName = true;
      }
    },
    // chageAge() {
    //   if (this.yourAge.length > 0) {
    //     for (let i = 0; i < this.yourAge.length; i++) {
    //       let vla = this.yourAge;
    //     }
    //     if (this.yourAge.vlaue > this.maxAge) {
    //       console.log(`Age Should Be Less Then ${this.maxAge} years`);
    //     } else if (this.yourAge.vlaue) {
    //     }
    //   }
    // },
    testAge() {},
  },
  computed: {
    yourNameLength() {
      return this.yourName.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  padding: 25px;
  background-color: #ededed;
  border-radius: 5px;
  margin: 10px auto;
  p {
    text-transform: capitalize;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    div {
      position: absolute;
      top: -20px;
      left: 140px;
      display: block;
      p {
        display: block;
        font-size: 15px;
      }
      span {
        background-color: red;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        justify-content: center;
        align-items: center;
        display: inline-flex;
        color: white;
        margin-right: 5px;
      }
    }
  }
  input {
    width: 70%;
    padding: 10px;
    margin: 20px 0;
  }
}
</style>

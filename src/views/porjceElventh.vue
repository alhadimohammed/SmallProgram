<template>
  <h2>danomic Form</h2>
  <div class="container">
    <form action="#">
      <div class="name">
        <label for="name">Your Name </label>
        <input
          type="text"
          name="name"
          v-model="YourName"
          placeholder="Enter Your Name"
          @input="cheagName"
        />
        <div class="error" v-show="errorShowName">
          <p>
            <span>!</span>
            <small v-for="(err, i) in errorName" :key="i"> {{ err }} </small>
          </p>
        </div>
      </div>
      <div class="age">
        <label for="age">Your Age </label>
        <input
          type="number"
          name="age"
          v-model="yourAge"
          placeholder="Enter Your Age"
          @input="cheagAge"
        />
        <div class="error" v-show="errorShowAge">
          <p>
            <span>!</span>
            <small v-for="(err, i) in errorAge" :key="i"> {{ err }} </small>
          </p>
        </div>
      </div>
      <div class="Phone">
        <label for="Phone">Your Phone </label>
        <input
          type="number"
          name="Phone"
          v-model="yourPhone"
          placeholder="Enter Your Phone"
          @input="cheagPhone"
        />
      </div>
      <div class="email">
        <label for="email">Your Email </label>
        <input
          type="email"
          name="email"
          v-model="yourEmail"
          placeholder="Enter Your Email"
          @input="cheagEmail"
        />
      </div>
      <button :class="{ errors: 'disaple' }" @click.prevent="">Submit</button>
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
      YourName: null,
      yourAge: null,
      yourPhone: null,
      yourEmail: null,
      errorName: [],
      errorAge: [],
      errorShowName: false,
      errorShowAge: false,
      errors: false,
    };
  },
  methods: {
    cheagName() {
      let name = this.YourName;
      let maxCharName = 15;
      let errorr = `username must be and contain ( 5 - ${maxCharName} ) characters`;

      if (name.length <= maxCharName) {
        this.errors = false;
        this.errorShowName = false;
      } else {
        this.errors = true;
        this.errorName = [];
        this.errorShowName = true;
        this.errorName.push(errorr);
      }
    },
    cheagAge() {
      let name = this.yourAge;
      let maxAge = 45;
      let errorr = `Your  Age must Be Less Then ${maxAge} Years Old`;

      if (name <= maxAge) {
        this.errorShowAge = false;
        this.errors = false;
      } else {
        this.errors = true;
        this.errorAge = [];
        this.errorShowAge = true;
        this.errorAge.push(errorr);
      }
    },
    cheagPhone() {
      let phone = this.yourPhone;
      console.log(phone);
    },
    cheagEmail() {
      let email = this.yourEmail;
      console.log(email);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  padding: 20px;
  border-radius: 5px;
  background-color: #ededed;
  margin: 20px auto;
  form div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 20px;

    div {
      position: absolute;
      top: -40px;
      left: 120px;
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
    input {
      width: 80%;
      padding: 8px;
    }
    input:focus {
      outline: 1px solid blue;
      border: none;
    }
  }
  form button {
    width: 100%;
    padding: 8px;
    background-color: #0000d5;
    color: white;
    border: none;
    cursor: pointer;
  }
}
.disaple {
  background-color: red;
}
</style>

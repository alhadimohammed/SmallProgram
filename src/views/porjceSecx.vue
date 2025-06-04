<template>
  <h2>Interacive Button</h2>
  <form action="#">
    <div class="name">
      <label for="name">Enter Your Name</label>
      <input type="text" v-model="fristName" placeholder="First Name" />
      <input type="text" v-model="lastName" placeholder="Last Name" />
    </div>
    <div class="email">
      <label for="email">Enter Your Email</label>
      <input type="text" v-model="email" placeholder="Your Email" />
    </div>
    <div class="textara">
      <textarea name="massege"></textarea>
    </div>
    <input
      :disabled="!fristName || !lastName || !email"
      class="submit"
      type="submit"
      value="Submit"
    />
  </form>
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      fristName: null,
      lastName: null,
      email: null,
    };
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 700px;
  margin: 10px auto;
  input {
    width: 540px;
    padding: 8px;
    border: none;
    background-color: #ededed;
    color: black;
  }
  input:focus {
    outline: 1px solid blue;
  }
  div {
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name {
    input {
      width: 250px;
    }
  }
  textarea {
    width: 100%;
    height: 180px;
  }
  .submit {
    width: 100%;
    background-color: blue;
    color: white;
    cursor: pointer;
  }
  .submit:disabled {
    opacity: 0.7;
    background-color: rgb(105, 105, 248);
  }
}
</style>

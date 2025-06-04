<template>
  <h2>Project Five</h2>
  <p>Convert Text to Slig</p>
  <div class="container">
    <form action="#">
      <input v-model="input" type="text" placeholder="Type Your Post Title" />
      <button @click.prevent="converm">Convrm To Slig</button>
      <div>
        http://hudhod/ <span>{{ output }}</span>
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
      input: "",
      output: "",
    };
  },
  methods: {
    converm() {
      let data = this.input;
      data = data.toLowerCase();
      data = data.replace(/\s+/g, "-");
      data = data.replace(/&/g, "-and-");
      this.output = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  input,
  button {
    padding: 10px 15px;
  }
  button {
    border: none;
  }
  div {
    padding: 20px;
    background-color: #efefef;
    width: fit-content;
    margin: 15px auto;
  }
}
</style>

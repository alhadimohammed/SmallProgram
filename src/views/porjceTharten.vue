<template>
  <h2>To Do List</h2>
  <div class="container">
    <div class="input">
      <input
        id="inputText"
        type="text"
        v-model="textTask"
        @input="errors = false"
      />
      <button class="add-Task" @click="addTask">Add Task</button>
      <button v-if="allTask.length > 1" @click="deleteAll">Delete All</button>
      <p v-show="errors"><span>i</span> You Can't Add Empty Task</p>
    </div>
    <div class="output" v-for="(task, index) in allTask" :key="index">
      <p>{{ task }}</p>
      <button @click="deletTask(index)">Delete</button>
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
      allTask: [],
      textTask: "",
      errors: false,
    };
  },
  methods: {
    addTask() {
      if (this.textTask != 0) {
        this.errors = false;
        this.allTask.push(this.textTask);
        this.textTask = "";
      } else {
        this.errors = true;
        document.getElementById("inputText").focus();
      }
    },
    deletTask(i) {
      this.allTask.splice(i, 1);
    },
    deleteAll() {
      this.allTask = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 500px;
  margin: 20px auto;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .output {
    background-color: #ededed;
  }
  .input {
    position: relative;
    margin-top: 40px;
    p {
      position: absolute;
      top: -40px;
      span {
        background-color: red;
        border-radius: 50%;
        text-transform: none;
        width: 20px;
        display: inline-flex;
        height: 20px;
        justify-content: center;
        align-items: center;
        color: white;
      }
    }
  }
  input {
    width: 290px;
    padding: 14px;
    border: 1ps solid rgb(82, 81, 81);
  }
  button {
    padding: 15px;
    color: white;
    background-color: rgb(255 83 83);
    border: none;
    cursor: pointer;
  }
  .add-Task {
    background-color: #7070ff;
  }
  p {
    padding: 0 10px;
  }
}
</style>

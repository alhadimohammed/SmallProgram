<template>
  <h2>Gradient Generator</h2>
  <div class="container">
    <div
      class="outpu"
      :style="{
        backgroundImage:
          'linear-gradient(' + directionLower + ', ' + allColor + ')',
      }"
    >
      <h1>Gradient Preview</h1>
    </div>
    <form action="#" @click.prevent="">
      <div>
        <label for="Direction">Direction</label>
        <select name="Direction" v-model="direction">
          <option value="to top">To Top</option>
          <option value="to bottom">To Bottom</option>
          <option value="to right">To Right</option>
          <option value="to left">To left</option>
        </select>
      </div>
      <div v-for="(color, i) in colors" :key="i">
        <label :for="`color ${i + 1}`">Color Stop {{ i + 1 }}</label>
        <input type="text" :name="`color ${i + 1}`" v-model="color.value" />
      </div>
      <div>
        <button @click="addColor">Add Color</button>
        <button @click="deleteColor">Delete Color</button>
        <button @click="deleteAllColor">Delet All Color</button>
      </div>
    </form>
    <h2>{{ direction }}</h2>
    <div class="Syntax">
      <p>
        <span>CSS Code : </span> background-image: linear-gradient({{
          directionLower
        }}, {{ allColor }});
      </p>
      <p>
        <span>Syntax : </span> background-image: linear-gradient(Direction,
        ColorStop-1, ColorStop-2);
      </p>
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
      direction: "to top",
      colors: [{ value: "#080" }],
    };
  },
  methods: {
    addColor() {
      this.colors.push({ value: "" });
    },
    deleteColor() {
      this.colors.splice(-1, 1);
    },
    deleteAllColor() {
      this.colors = [{ value: "#080" }];
    },
  },
  computed: {
    directionLower() {
      return this.direction.toLowerCase();
    },
    allColor() {
      let col = [];
      for (let i = 0; i < this.colors.length; i++) {
        col.push(this.colors[i].value);
      }
      return col.toString();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 700px;
  margin: 20px auto;
  .outpu {
    width: 100%;
    height: 250px;
    position: relative;
    h1 {
      z-index: 10;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bolder;
      font-size: 40px;
      margin: 0;
      color: white;
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px auto;
    input,
    select {
      padding: 5px;
      margin: 15px 10px;
      max-width: 100px;
    }
    button {
      padding: 8px;
      color: white;
      background-color: blue;
      border: none;
      cursor: pointer;
      margin: 0 15px;
    }
  }
  .Syntax {
    p {
      span {
        font-size: 20px;
        font-weight: bolder;
      }
    }
  }
}
</style>

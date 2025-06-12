<template>
  <h2>Taps</h2>
  <div class="containet">
    <div class="taps">
      <div v-for="(tap, i) in taps" :key="i">
        <p :class="{ activ: activ == i + 1 }" @click="activ = i + 1">
          {{ tap }}-{{ i + 1 }}
        </p>
      </div>
    </div>
    <div class="contanTap">
      <div class="coontantOne" v-for="(cont, i) in contant" :key="i">
        <p v-if="activ == i + 1">{{ cont }}-{{ i + 1 }}</p>
      </div>
    </div>
    <div class="botto">
      <button @click="addTaps">Add Taps</button>
      <button @click="deletTap">Delet Taps</button>
      <button @click="deletAllTap">Delet All</button>
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
      taps: ["Tap"],
      contant: ["contant"],
      activ: 1,
    };
  },
  methods: {
    addTaps() {
      this.taps.push("Tap");
      this.contant.push("Contant");
    },
    deletTap() {
      if (this.taps.length > 1) {
        this.taps.splice(-1, 1);
        this.contant.splice(-1, 1);
      }
    },
    deletAllTap() {
      this.taps = ["Tap"];
      this.contant = ["Contant"];
    },
  },
};
</script>

<style lang="scss" scoped>
.containet {
  margin: 50px auto;
  width: 700px;
  .taps {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    div p {
      width: 100px;
      height: 65px;
      margin: 0 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eeeeee;
      opacity: 0.4;
      cursor: pointer;
    }
    .activ {
      color: black;
      opacity: 1;
      font-weight: bold;
    }
    margin-bottom: 0;
  }
  .contanTap {
    background-color: #d9d9d9;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .botto {
    margin: 20px auto;
    button {
      padding: 10px 15px;
      border: none;
      margin: 0 10px;
      background-color: rgb(224, 55, 55);
      color: white;
      font-weight: bold;
    }
    button:first-child {
      background-color: rgb(122, 240, 122);
    }
  }
}
</style>

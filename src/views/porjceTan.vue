<template>
  <h2>Show Answers</h2>
  <div class="containet">
    <div class="the-qusation" @click="showAnswer = !showAnswer">
      <p>The Quation ?</p>
    </div>
    <div class="the-answers" v-show="showAnswer">
      <p>The Answers</p>
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
      showAnswer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.containet {
  .the-qusation,
  .the-answers {
    width: 650px;
    padding: 10px;
    background-color: #d6d5d5;
  }
  .the-qusation {
    margin: 20px auto 0;
    cursor: pointer;
  }
  .the-answers {
    margin: 0 auto 20px;
    background-color: #f1f1f1;
  }
}
</style>

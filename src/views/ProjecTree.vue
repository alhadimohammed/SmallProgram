<template>
  <div class="container">
    <h1>Show message</h1>
    <p>
      show a message when you click the button and hide it when you click it
      again
    </p>

    <button @click="massieg = !massieg">click</button>
    <TransitionGroup name="list" tag="ul">
      <div v-if="massieg" class="massig">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id similique
        magni quam quod quo obcaecati is quia, in esse ratione velit sunt id
      </div>
    </TransitionGroup>
  </div>
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      massieg: false,
    };
  },
};
</script>

<style scoped lang="scss">
.massig {
  max-width: 350px;
  margin: 0 auto;
  padding: 20px;
  background-color: #efefef;
}
button {
  border: none;
  padding: 15px;
  cursor: pointer;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

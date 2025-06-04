<template>
  <h1>Select Images</h1>
  <p>
    a program that selects a random image every time you open it or refrash it
  </p>
  <img v-if="selector" :src="selector" alt="" />
  <h2>
    <router-link :to="{ name: 'home' }">Go To Home</router-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        "/img/image1.7449c6c0.jpg",
        "/img/image2.057139d1.jpg",
        "/img/image3.1f46c0e5.jpg",
        "/img/image4.171dbd6f.jpg",
        "/img/image5.42a6a933.jpg",
        "/img/image6.e2e4270f.jpg",
      ],
      selector: null,
    };
  },
  methods: {
    randomPhoto(img) {
      return img[Math.floor(Math.random() * this.photos.length)];
    },
    crated() {
      this.selector = this.randomPhoto(this.photos);
    },
  },
  mounted() {
    this.crated();
  },
};
</script>

<style scoped lang="scss">
img {
  width: 200px;
  height: 200px;
}
</style>

<template>
  <div class="landing position-relative">
    <img class="bg-img position-absolute" src="/rectangle-bg.png" />
    <Navbar @click="errorCount += 1" />
    <Header :errorCount="errorCount" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navigation/navbar.vue";
import Header from "../components/landing/header.vue";
import Footer from "../components/navigation/footer.vue";
export default {
  data: () => ({
    errorCount: 0,
  }),
  components: {
    Navbar,
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.landing {
  background-repeat: no-repeat;
  background-size: cover;
  height: 1080px;
  @media (max-width: 1920px) {
    height: auto;
  }
  .bg-img {
    bottom: 0;
    right: 0;
  }
}
</style>

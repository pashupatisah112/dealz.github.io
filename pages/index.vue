<template>
  <div class="landing">
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
  background-image: url("~static/landing-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 1080px;
  @media (max-width: 1920px) {
    height: auto;
  }
}
</style>

<template>
  <div class="landing">
    <Navbar />
    <Header />
    <Footer />
  </div>
</template>

<script>
import { BCol, BContainer } from "bootstrap-vue";

import Navbar from "../components/navigation/navbar.vue";
import Header from "../components/landing/header.vue";
import Footer from "../components/navigation/footer.vue";

export default {
  components: {
    BCol,
    BContainer,
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

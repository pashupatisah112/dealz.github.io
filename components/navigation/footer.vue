<template>
  <div class="container py-4">
    <b-row>
      <b-col sm="12" md="7" class="footer-text">
        Dealz DAO is an open source protocol and cryptocurrency leveraging
        decentralized merit based governance to create trustless unbiased
        agreement templates, legal task bots, and deal negotiation dApps.
      </b-col>
      <b-col xs="12" md="5" lg="4" class="mt-4 mt-lg-0 footer-right">
        <!-- <div class="links">
          <nuxt-link to="#">About</nuxt-link>
          <nuxt-link to="#">Privacy</nuxt-link>
          <nuxt-link to="#">Terms</nuxt-link>
          <nuxt-link to="#">Contact</nuxt-link>
        </div> -->
        <div class="copyright-text mt-2">
          Copyright Dealz 2021. All Rights Reserved.
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
export default {
  components: {
    BRow,
    BCol,
  },
};
</script>


<style lang="scss" scoped>
.footer-text {
  font-size: 14px;
  line-height: 24px;
  color: #6b6b6b;
}
.links {
  display: flex;
  flex-wrap: wrap;
  a {
    text-align: right;
    width: 25%;
    color: #6b6b6b;
    font-size: 14px;
    text-decoration: none;
    @media (max-width: 650px) {
      text-align: center;
    }
  }
}
.copyright-text {
  color: rgba(17, 17, 17, 0.32);
  font-size: 12px;
  text-align: right;
  @media (max-width: 650px) {
    text-align: center;
  }
}
.footer-right {
  margin-left: auto;
}
</style>

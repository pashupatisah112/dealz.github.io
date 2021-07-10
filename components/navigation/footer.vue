<template>
  <div class="container">
    <b-row class="mx-sm-2">
      <div class="col-sm-12 col-md-7 col-md-6 footer-text px-0">
        Dealz DAO is an open source protocol and cryptocurrency leveraging
        decentralized merit based governance to create trustless unbiased
        agreement templates, legal task bots, and deal negotiation dApps.
      </div>
      <div class="ml-sm-0 ml-lg-auto mt-sm-4 mt-lg-0">
        
        <div class="copyright-text">
          Copyright Dealz 2021. All Rights Reserved.
        </div>
      </div>
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
  gap: 30px;
  a {
    color: #6b6b6b;
    font-size: 14px;
    text-decoration: none;
  }
}
.copyright-text {
  color: rgba(17, 17, 17, 0.32);
  font-size: 12px;
}
.container {
  @media (max-width: 650px) {
    papdding: 20px;
  }
}
</style>
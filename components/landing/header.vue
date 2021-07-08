<template>
  <b-container>
    <b-row>
      <b-col md="12" xl="7" class="leading">
        <div class="leading-line">
          A Decentralized Legal Platform for The People
        </div>
        <div class="leading-sub-line mt-4">
          Negotiate and generate unbiased legal agreements safely and securely
          without an attorney.
        </div>
        <b-row class="mt-5">
          <b-col md="12" xl="8">
            <custom-input header="Your Email Address" />
          </b-col>
          <b-col md="12" xl="4" class="mt-sm-3 mt-xl-0">
            <custom-button text="Request Invite" type="primary" />
          </b-col>
        </b-row>
        <div class="mt-2 class text-muted info-text">
          Your data is secure. We won’t send spam or sell it to third parties.
        </div>
      </b-col>
      <b-col xl="5" class="d-none d-lg-block">
        <b-img src="/landing-page-main.png" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BRow, BCol, BImg } from "bootstrap-vue";
import CustomButton from "../button/custom-button.vue";
import CustomInput from "../input/custom-input.vue";

export default {
  components: {
    BContainer,
    BRow,
    BCol,
    BImg,
    CustomButton,
    CustomInput,
  },
};
</script>

<style lang="scss" scoped>
.leading {
  padding: 100px 0 150px;
  @media (max-width: 650px) {
    padding: 75px 20px 120px;
  }
  .leading-line {
    @include gradient-text;
    font-size: 54px;
    font-weight: bold;
    line-height: 60px;
    @media (max-width: 650px) {
      font-size: 45px;
      line-height: 50px;
    }
  }
  .leading-sub-line {
    color: #182744;
    font-size: 22px;
  }
  .info-text{
    font-size: 12px;
  }
}
</style>
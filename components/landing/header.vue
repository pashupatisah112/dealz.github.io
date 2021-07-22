<template>
  <b-container>
    <b-row>
      <b-col md="12" xl="6" class="leading">
        <div class="leading-line">
          A Decentralized Legal Platform for The People
        </div>
        <div class="leading-sub-line mt-4">
          Negotiate unbiased, tokenized legal agreements safely and securely
        </div>
        <ValidationObserver ref="manualTestForm">
          <b-row class="mt-5">
            <b-col sm="12" md="8">
              <ValidationProvider
                v-slot="{ errors }"
                rules="required|email"
                class="w-100"
              >
                <custom-input
                  header="Your Email Address"
                  v-model="email"
                  ref="email"
                  :error="!!errors[0]"
                  placeholder="Your Email Address"
                />
                <span class="text-danger" v-if="navBtnClicked"
                  >Please input the email for Registration/Request Invite</span
                >
                <span class="text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </b-col>
            <b-col sm="12" md="4" class="mt-3 mt-md-0">
              <custom-button
                text="Request Invite"
                type="primary"
                :loading="isProcessing"
                @click.native="submitEmail"
              />
            </b-col>
          </b-row>
        </ValidationObserver>
        <div class="mt-2 class text-muted info-text">
          Your data is secure. We won’t send spam or sell it to third parties.
        </div>
      </b-col>
      <b-col xl="5" class="right-image d-none d-xl-block">
        <b-img src="/landing-page-main.png" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BRow, BCol, BImg } from "bootstrap-vue";
import CustomButton from "../button/custom-button.vue";
import CustomInput from "../input/custom-input.vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import ApiService from "@/services/index.js";
extend("required", {
  ...required,
  message: "This field is required",
});
extend("email", {
  ...email,
  message: "This field must be a valid email",
});
export default {
  components: {
    BContainer,
    BRow,
    BCol,
    BImg,
    CustomButton,
    CustomInput,
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    errorCount: {
      type: Number,
      default: () => 0,
    },
  },
  data: () => ({
    email: null,
    isProcessing: false,
    navBtnClicked: false,
  }),
  watch: {
    email(value) {
      if (value) this.navBtnClicked = false;
    },
    errorCount(value, previousValue) {
      if (value > previousValue) {
        this.$refs.manualTestForm.reset();
        this.navBtnClicked = true;
      }
      this.$refs.email.$el.focus();
    },
  },
  methods: {
    submitEmail() {
      this.navBtnClicked = false;
      this.$refs.manualTestForm.validate().then((response) => {
        if (!response) {
          return;
        } else {
          this.isProcessing = true;
          ApiService.submitEmail(this.email)
            .then((res) => {
              this.successToast(
                "Thank you. We recieved your invitation request"
              );
            })
            .catch(() => {
              this.failureToast("Sorry! We couldn't send an invitation");
            })
            .finally(() => {
              this.isProcessing = false;
            });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.leading {
  padding: 100px 0 130px;
  @media (max-width: 1336px) {
    padding: 15px 20px 50px;
  }
  .leading-line {
    @include gradient-text;
    font-size: 54px;
    font-weight: bold;
    line-height: 60px;
    @media (max-width: 650px) {
      font-size: 40px;
      line-height: 50px;
    }
  }
  .leading-sub-line {
    color: #182744;
    font-size: 22px;
    @media (max-width: 650px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .info-text {
    font-size: 12px;
  }
}
.right-image {
  padding: 50px 0 80px;
  margin-left: auto;
  @media (max-width: 1336px) {
    padding: 20px 20px 30px;
  }
  img {
    width: 100%;
  }
}
</style>
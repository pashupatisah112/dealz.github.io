<template>
  <div class="container">
    <ValidationObserver ref="loginForm">
      <b-card
        class="
          login-signup-card
          mx-auto
          px-2
          py-1
          px-md-4 px-md-3
          col-12 col-md-8 col-lg-6
        "
      >
        <h2>Login to your account</h2>
        <div class="small-text">
          Please fill up the following details to continue
        </div>

        <!-- Email -->
        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors }"
        >
          <b-form-input
            placeholder="Email Address"
            v-model="email"
            type="email"
            :state="errors.length > 0 ? false : null"
            class="mt-3 mt-md-4"
          />
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
        <!-- Email -->

        <!-- Password -->
        <ValidationProvider
          name="passowrd"
          rules="required"
          v-slot="{ errors }"
          class="w-100"
        >
          <b-input-group class="password mt-3 mt-md-4">
            <b-form-input
              placeholder="Password"
              v-model="password"
              :state="errors.length > 0 ? false : null"
              :type="`${isPassword ? 'password' : 'text'}`"
            ></b-form-input>
            <b-input-group-append
              :class="`eye-input ${errors.length > 0 ? 'error' : ''}`"
              @click="togglePassword"
            >
              <b-icon icon="eye" aria-hidden="true" v-if="!isPassword"></b-icon>
              <b-icon icon="eye-slash" aria-hidden="true" v-else></b-icon>
            </b-input-group-append>
          </b-input-group>
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
        <!-- Password -->

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          class="text-dark mt-3 mt-md-4"
        >
          Remember Me
        </b-form-checkbox>
        <b-button
          @click="login"
          variant="primary"
          v-ripple.400="'rgba(22, 125, 125, 0.2)'"
          class="w-100 mt-3 mt-md-4"
        >
          <b-spinner v-show="isProcessing" class="mr-1" small variant="light" />
          Log In
        </b-button>
      </b-card>
      <div class="text-center mt-2 mt-md-4">
        Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  BCard,
  BInputGroup,
  BFormInput,
  BButton,
  BFormCheckbox,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

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
    BCard,
    BInputGroup,
    BFormInput,
    BButton,
    BFormCheckbox,
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    isPassword: true,
    email: null,
    password: null,
    isProcessing: false,
  }),
  methods: {
    togglePassword() {
      this.isPassword = !this.isPassword;
    },
    login() {
      this.$refs.loginForm.validate().then((success) => {
        if (!success) {
          return;
        }
        this.isProcessing = true;
        this.$auth
          .loginWith("local", {
            data: { email: this.email, password: this.password },
          })
          .then((response) => {
            this.successToast(response.data.message);
          })
          .catch((err) => {
            this.failureToast(err.response.data.message);
          })
          .finally(() => {
            this.isProcessing = false;
          });
      });
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/pages/login-signup.scss";
.login-signup-card {
  margin-top: 20vh;
}
</style>
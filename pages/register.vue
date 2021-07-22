<template>
  <div class="container">
    <ValidationObserver ref="registerForm">
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
        <h2>Create a new account</h2>
        <div class="small-text">
          Please fill up the following details to register.
        </div>

        <!-- Full Name -->
        <ValidationProvider
          name="fullName"
          rules="required"
          ref="name"
          v-slot="{ errors }"
        >
          <b-form-input
            placeholder="Full Name"
            v-model="fullName"
            type="text"
            :state="errors.length > 0 ? false : null"
            class="mt-3 mt-md-4"
          />
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
        <!-- Email -->

        <!-- Email -->
        <ValidationProvider
          name="email"
          rules="required|email"
          v-slot="{ errors }"
          ref="email"
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
          ref="password"
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

        <!-- Profession -->
        <div class="mt-3 mt-md-4">Which profession describes you the best?</div>
        <ValidationProvider
          name="profession"
          rules="required"
          v-slot="{ errors }"
          ref="profession"
          class="w-100"
        >
          <b-form-select
            v-model="profession"
            :options="professions"
            :state="errors.length > 0 ? false : null"
            class="mt-3 mt-md-4"
          ></b-form-select>
          <span class="text-danger">{{ errors[0] }}</span>
        </ValidationProvider>
        <!-- Profession -->

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          class="text-dark mt-3 mt-md-4"
          v-model="agreeTerm"
        >
          I agree with Dealz terms and policies.
        </b-form-checkbox>
        <b-button
          @click="register"
          variant="primary"
          v-ripple.400="'rgba(22, 125, 125, 0.2)'"
          class="w-100 mt-3 mt-md-4"
          :disabled="!agreeTerm"
        >
          <b-spinner v-show="isProcessing" class="mr-1" small variant="light" />
          Register</b-button
        >
      </b-card>
      <div class="text-center mt-2 mt-md-4">
        Already have an account? <nuxt-link to="/login">Log in</nuxt-link>
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
  BFormSelect,
  BSpinner,
} from "bootstrap-vue";
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
    BCard,
    BInputGroup,
    BFormInput,
    BButton,
    BFormCheckbox,
    BFormSelect,
    BSpinner,
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    isPassword: true,
    fullName: null,
    email: null,
    password: null,
    profession: null,
    agreeTerm: false,
    professions: [
      { value: null, text: "Please select a profession", disabled: true },
      { value: "Music Artist", text: "Music Artist" },
      { value: "Designer", text: "Designer" },
      { value: "Founder", text: "Founder" },
    ],
    isProcessing: false,
  }),
  methods: {
    togglePassword() {
      this.isPassword = !this.isPassword;
    },
    register() {
      this.$refs.registerForm.validate().then((success) => {
        if (!success) {
          return;
        }
        let userData = {
          name: this.fullName,
          email: this.email,
          password: this.password,
          User_type: "User",
          profession: this.profession,
        };
        this.isProcessing = true;
        ApiService.register(userData)
          .then((response) => {
            this.successToast(response.data.message);
            this.$router.push('/login')
          })
          .catch((errors) => {
            errors.response.data.errors.forEach((err) => {
              this.$refs[err.param].setErrors([err.msg]);
            });
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
  @media (max-width: 768px) {
    margin-top: 10vh;
  }
}
</style>
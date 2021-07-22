<template>
  <div>
    <b-navbar toggleable="lg">
      <b-container>
        <b-navbar-brand href="#" class="logo"
          ><b-img src="/logo.png" width="180px"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <custom-button
              text="Attorney Registration"
              type="primary"
              class="mx-3"
              @click.native="$emit('click')"
            />
            <!-- <custom-button
              text="Request Invite"
              class="mx-3"
              @click.native="$emit('click')"
            /> -->
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import {
  BContainer,
  BNavbar,
  BCollapse,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem,
} from "bootstrap-vue";
import CustomButton from "../button/custom-button.vue";
export default {
  components: {
    BContainer,
    BNavbar,
    BCollapse,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    CustomButton,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  @include gradient-text;
}
.container {
  padding: 25px 0;
}
</style>

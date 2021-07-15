<template>
  <div class="main-btn">
    <div :class="`button ${type}`">
      <b-spinner v-if="loading" />
      <div v-else>{{ text }}</div>
    </div>
  </div>
</template>

<script>
import { BSpinner } from "bootstrap-vue";
export default {
  components: {
    BSpinner,
  },
  props: {
    text: {
      type: String,
      default: () => "",
    },
    type: {
      type: String,
      default: () => "",
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss">
.main-btn {
  .button {
    height: 46px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease;
    &:hover {
      cursor: pointer;
      box-shadow: -4px 4px 1px #182744;
      background: linear-gradient(90deg, #04a5f6, #28eea1);
    }
  }
  .primary {
    background: linear-gradient(0deg, #182744, #182744);
    color: #f5f7f9;
  }
  .back-button {
    border: 2px solid #182744;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    top: -8px;
    left: 4px;
    z-index: -1;
  }
}
</style>

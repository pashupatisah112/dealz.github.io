<template>
  <div class="position-relative main-btn">
    <div :class="`button ${type}`">
      <div>{{ text }}</div>
    </div>
    <div class="position-absolute back-button"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => "",
    },
    type: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss">
.main-btn {
  border: 2px solid #182744;
  height: 46px;
  .button {
    margin: 0 0 4px 4px;
    height: calc(100% - 4px);
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
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

<template>
  <input :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  width: inherit;
  height: 46px;
  padding: 0 15px;
  border: 2px solid #182744;
  font-size: 16px;
  &:focus {
    outline: none;
  }
}
</style>

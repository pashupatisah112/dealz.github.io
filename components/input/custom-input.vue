<template>
  <input
    :placeholder="placeholder"
    v-model="value"
    @input="$emit('input', value)"
    :class="`${error ? 'error': ''}`"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: () => "",
    },
    error: {
      type: Boolean,
      default: () => "",
    },
  },
  data: () => ({
    value: null,
  }),
};
</script>

<style lang="scss" scoped>
input {
  width: inherit;
  height: 46px;
  padding: 0 15px;
  border: 2px solid #182744;
  border-radius: 0px !important;
  font-size: 16px;
  &:focus {
    outline: none;
  }
}
.error {
  border: 2px solid $danger;
}
</style>

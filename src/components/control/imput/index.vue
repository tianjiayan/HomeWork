<template>
  <div>
    <el-input v-model="val"></el-input>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      val: "",
    };
  },
  watch: {
    value: {
      handler(newValue) {
        this.val = newValue;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>

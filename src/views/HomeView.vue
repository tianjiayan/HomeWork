<template>
  <div class="home">
    <yangButton>默认按钮</yangButton>
    <yangButton
      disabled
      :loading="flag"
      @click="handleSubmit"
      size="medium"
      type="primary"
      >成功按钮</yangButton
    >
    <yangButton type="danger">危险按钮</yangButton>
    <yangButton type="warning">警告按钮</yangButton>
  </div>
</template>
<script>
import yangButton from "@/components/button";
export default {
  name: "Home",
  data() {
    return {
      flag: false,
    };
  },
  components: {
    yangButton,
  },
  methods: {
    handleSubmit() {
      this.flag = true;
      setTimeout(() => {
        console.log("123");
        this.flag = false;
      }, 3000);
    },
  },
};
</script>

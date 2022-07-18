<template>
  <div class="home">
    <yangButton>默认按钮</yangButton>
    <yangButton size="medium" type="primary" round disabled>成功按钮</yangButton>
    <yangButton size="small" type="danger" round border disabled>危险按钮</yangButton>
    <yangButton size="mini" type="warning" border>警告按钮</yangButton>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    yangButton: () => import("../components/button/index.vue"),
  },
};
</script>

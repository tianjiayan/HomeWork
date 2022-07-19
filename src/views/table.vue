<template>
  <div class="home">
    <tian-table></tian-table>
  </div>
</template>

<script>
export default {
  name: "tableValue",
  data() {
    return {
      flag: false,
    };
  },
  components: {
    tianTable: () => import("../components/table/index.vue"),
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
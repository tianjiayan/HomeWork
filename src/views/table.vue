<template>
  <div class="home">
    <tian-table :column="column"></tian-table>
  </div>
</template>

<script>
export default {
  name: "tableValue",
  data() {
    return {
      column: [
        { label: "日期", prop: "date" },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "性别", prop: "sex" },
      ],
    };
  },
  components: {
    tianTable: () => import("../components/table/index.vue"),
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>

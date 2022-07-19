<template>
  <div class="home">
    <tian-table :column="column" checkbox index></tian-table>
  </div>
</template>

<script>
export default {
  name: "tableValue",
  data() {
    return {
      column: [
        {
          label: "URL地址",
          type: "function",
          prop: "data",
          callback: (data) => {
            return `<a href="https://www.baidu.com">${data.name}</a>`;
          },
        },
        { label: "日期", prop: "date", width: 500 },
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

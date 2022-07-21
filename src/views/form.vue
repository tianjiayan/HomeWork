<template>
  <div>
    <yang-form :item="formItem" :field="formField"></yang-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      formItem: [
        {
          type: "input",
          prop: "name",
          label: "姓名",
          required: true,
          rules: [
            { min: 3, max: 10, message: "请输入3~10个字符", trigger: "blur" },
          ],
        },
        {
          type: "select",
          prop: "gender",
          label: "性别",
          required: true,
        },
        {
          type: "input",
          prop: "sex",
          label: "年龄",
          required: true,
        },
      ],
      formField: {
        name: "",
        gender: "",
        age: "",
      },
    };
  },
  components: {
    yangForm: () => import("../components/form/index"),
  },
};
</script>

<style scoped></style>

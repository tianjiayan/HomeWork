<template>
  <div>
    <yang-form
      :item="formItem"
      :field="formField"
      :rules="formRules"
    ></yang-form>
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
        },
        {
          type: "select",
          prop: "gender",
          label: "性别",
        },
      ],
      formField: {
        name: "",
        gender: "",
      },
      formRules: {
        name: [
          {
            required: true,
            message: "必填",
          },
        ],
        gender: [
          {
            required: true,
            message: "必填",
          },
        ],
      },
    };
  },
  components: {
    yangForm: () => import("../components/form/index"),
  },
};
</script>

<style scoped></style>

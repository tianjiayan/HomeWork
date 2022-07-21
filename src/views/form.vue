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
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
        },
        {
          type: "select",
          prop: "gender",
          label: "性别",
          required: true,
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
        },
        {
          type: "input",
          prop: "sex",
          label: "年龄",
          required: true,
          // rules: [
          //   {
          //     required: true,
          //     message: '必填'
          //   }
          // ]
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

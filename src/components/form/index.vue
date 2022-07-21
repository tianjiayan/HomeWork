<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="80px">
      <template v-for="item in formItem">
        <el-form-item
          v-if="item.type === 'input'"
          :key="item.label"
          :label="item.label"
        >
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item
          v-if="item.type === 'select'"
          :key="item.label"
          :label="item.label"
        >
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    item: {
      type: Array,
      default: () => [],
    },
    field: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      formItem: [],
      form: {
        name: "",
      },
    };
  },
  methods: {},
  beforeMount() {
    this.formItem = this.item;
  },
};
</script>

<style scoped></style>

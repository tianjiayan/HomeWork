<template>
  <div class="form-container">
    <el-form :model="field" ref="form" label-width="80px">
      <template v-for="item in formItem">
        <el-form-item
          v-if="item.type === 'input'"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item
          v-if="item.type === 'select'"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
import createRules from "./createRules";
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
    rules: {
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
    this.formItem = createRules(this.item);
  },
};
</script>

<style scoped></style>

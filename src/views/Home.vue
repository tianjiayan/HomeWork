<template>
  <div class="home">
    <tianButton>默认按钮</tianButton>
    <tianButton type="primary">成功按钮</tianButton>
    <tianButton type="danger">危险按钮</tianButton>
    <tianButton type="warning">警告按钮</tianButton>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      flag: false
    }
  },
  components: {
    tianButton: () => import('../components/button/index.vue')
  },
  methods: {
    handleSubmit() {
      this.flag = true
      setTimeout(() => {
        console.log('123')
        this.flag = false
      }, 3000)
    }
  }
}
</script>

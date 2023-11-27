<template>
  <div class="card">
    <cardItem></cardItem>
  </div>
</template>

<script setup>
import cardItem from "./homeCardItem.vue"
</script>

<style lang="less" scoped>
.card {
  display: flex;
  justify-content: space-between;
}
</style>

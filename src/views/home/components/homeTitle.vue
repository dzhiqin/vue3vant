<template>
  <div class="title">
    <div class="icon"></div>
    <div class="icon1"></div>
    <div class="name">新市民·{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style lang="less" scoped>
.title {
  margin: 15px 0;
  display: flex;
  align-items: end;

  .icon {
    width: 6px;
    height: 20px;
    border-radius: 2px;
    background-color: #095199;
  }

  .icon1 {
    width: 6px;
    height: 13px;
    border-radius: 2px;
    background-color: #095199;
    margin-left: 2px;
  }

  .name {

    font-size: 20px;
    line-height: 18px;
    font-weight: 600;
    margin-left: 10px;
  }
}
</style>

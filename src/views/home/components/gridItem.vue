<template>
  <van-grid-item class="grid-item">
    <slot name="icon">
      <img :src="props.imgSrc" class="grid-img" />
    </slot>
    <slot name="text">
      <div class="grid-name">{{ props.title }}</div>
    </slot>
  </van-grid-item>
</template>

<script setup>
let props = defineProps({
  imgSrc: String,
  title: String
})
</script>

<style lang="less" scoped>
.grid-img{
  widows: 51px;
  height: 51px
}
.grid-name{
  font-size: 12px;
  margin-top: 4px;
}

</style>
<template>
  <div class="swipe">
    <van-swipe style="height: 100%" vertical :show-indicators="false" :loop="false">
      <van-swipe-item>
        <page-two></page-two>
      </van-swipe-item>
      <van-swipe-item>
        <page-six></page-six>
      </van-swipe-item>
      <van-swipe-item>
        <page-seven></page-seven>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
// import pageOne from './c-cpns/pageOne';
import pageTwo from './c-cpns/pageTwo'
import pageSix from './c-cpns/pageSix'
import pageSeven from './c-cpns/pageSeven'
</script>

<style lang="less" scoped>
.swipe {
  height: 100vh;
}
</style>

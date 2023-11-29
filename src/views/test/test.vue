<template>
  <div class="container" id="container">
    <div class="container-bg"></div>
    <div class="box">
      <div class="container-header" id="container-header">
        <img src="@/assets/img/ssrcb-logo2.png" />
      </div>
      <div class="content" id="content">
        <div>height: 1000px</div>
        <div>这是内容</div>
        <div>这是内容</div>
        <div>这是内容</div>
        <div>这是内容</div>
        <div>这是内容</div>
        <img src="http://img.htmleaf.com/1504/twitter-logo-bird.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  let head = document.getElementById('container-header')
  let container = document.getElementById('container')
  let content = document.getElementById('content')
  let headerOffsetTop = head.offsetTop
  container.addEventListener('scroll', function () {
    console.log('headerOffsetTop:', headerOffsetTop, ' containerScrollTop:', container.scrollTop)
    if (container.scrollTop > headerOffsetTop) {
      head.classList.add('fixed')
    }
    if (container.scrollTop < headerOffsetTop && Array.from(head.classList).indexOf('fixed') > -1) {
      head.classList.remove('fixed')
      content.style.marginTop = '0'
    }
  })
})
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  overflow: auto;
  width: 100%;
  position: relative;
  background-color: darksalmon;
}
.container-bg {
  height: 100px;
  background-image: url('../../assets/img/platform/background.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
.container-header {
  height: 50px;
  margin-top: -50px;
  img {
    height: 50px;
  }
}
.content {
  height: 1000px;
  background-color: darkseagreen;
}
.fixed {
  top: 0;
  width: 100%;
  position: fixed;
  margin-top: unset;
  background-color: rgb(215, 100, 74);
  transition: background-color 0.6s ease-in-out;
}
</style>

<template>
  <div>
    <button @click="toggle">click</button>
    <transition name="fade">
      <h1 v-if="showTitle">你好 Vue 3</h1>
    </transition>
    <Heading :level="2">title</Heading>
    <div>{{ token }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Heading from './heading.jsx'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

let showTitle = ref(true)
const userStore = useUserStore()
const { token } = storeToRefs(userStore)
function toggle() {
  userStore.login({ username: 'Guoqingquan', password: '123456' })
}
</script>
<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s linear;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>

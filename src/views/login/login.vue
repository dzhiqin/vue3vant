<template>
  <div>
    <button @click="toggle">click login</button>
    <div>{{ token }}</div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { token } = storeToRefs(userStore)
function toggle() {
  userStore.login({ username: 'admin', password: '123456' })
  // userStore.login({username: "Guoqingquan",password: "123456"})
}
</script>

<style lang="less" scoped></style>

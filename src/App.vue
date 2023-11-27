<template>
  <div class="app">
    <!-- <div>
			<img class="logo" src="@/assets/img/logo3.png">
	  </div>
    <van-swipe :autoplay="getAutoPlay" :show-indicators="false" class="van-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="image" @click="swipeClick(index)">
        <img :src="image" style="width: 100%; height: 100%;" />
      </van-swipe-item>
    </van-swipe> -->
    <router-view v-slot="props">
      <component :is="props.Component"></component>
    </router-view>
  </div>
</template>

<script setup>
// import { computed } from "vue";
// import { useRouter } from "vue-router"

// const images = ["https://picsum.photos/375/150?1", "https://picsum.photos/375/150?2", "https://picsum.photos/375/150?3"]
// const router = useRouter()

// const getAutoPlay = computed(() => {
//   return router.currentRoute.value.name === "loan" ? "false" : 2000;
// })

// const swipeClick = (index) => {
//   console.log(router.currentRoute.value);
//   if (index === 2) {
//     router.push({ name: 'loan' })
//   }
// }
</script>

<style scoped></style>

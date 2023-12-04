<template>
  <div>
    <TransitionGroup tag="ul" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <li v-for="(item, index) in list" :key="item.msg" :data-index="index">
        {{ item.msg }}
      </li>
    </TransitionGroup>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
const list = ref([])

onMounted(() => {
  setTimeout(() => {
    list.value = [
      { msg: 'Bruce Lee' },
      { msg: 'Jackie Chan' },
      { msg: 'Chuck Norris' },
      { msg: 'Jet Li' },
      { msg: 'Kung Fury' }
    ]
  }, 500)
})

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}
</script>

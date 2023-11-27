<template>
  <div :style="fontStyle">
    <div class="rate" @mouseout="mouseout">
      <slot></slot>
      <span @mouseover="mouseover(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontWidth">
        <span @click="updateRate(num)" @mouseover="mouseover(num)" v-for="num in 5" :key="num"
          >★</span
        >
      </span>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
let props = defineProps({
  modelValue: Number,
  theme: {
    type: String,
    default: 'orange'
  }
})
// let width = ref(props.value)
let width = ref(props.modelValue)
function mouseover(i) {
  width.value = i
}

function mouseout() {
  // width.value = props.value
  width.value = props.modelValue
}
let emits = defineEmits(['update:modelValue'])
function updateRate(num) {
  emits('update:modelValue', num)
}
const fontWidth = computed(() => `width:${width.value}em;`)
// let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5-props.value,10-props.value))
const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff'
}
const fontStyle = computed(() => `color:${themeObj[props.theme]}`)
</script>
<style lang="less">
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>

<!-- <template>
  <div :style="fontstyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import {  computed, ref } from 'vue';
let props = defineProps({
  modelValue: Number,
  theme: { type: String, default: 'orange' }
})
let emits = defineEmits(['update:modelValue'])
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.modelValue, 10 - props.modelValue))
function onRate(num) {
  emits('update:modelValue', num)
}
const themeObj = {
  'black': '#00',
  'white': '#fff',
  'red': '#f5222d',
  'orange': '#fa541c',
  'yellow': '#fadb14',
  'green': '#73d13d',
  'blue': '#40a9ff',
}
const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`
})
// 评分宽度
let width = ref(props.modelValue)
function mouseOver(i) {
  width.value = i
}
function mouseOut() {
  width.value = props.modelValue
}
const fontwidth = computed(() => `width:${width.value}em;`)

</script>

<style scoped>


.rate{
  position:relative; 
  display: inline-block;
}
.rate > span.hollow { 
  position:absolute; 
  display: inline-block; 
  top:0; left:0; 
  width:0; 
  overflow:hidden;
}
</style> -->

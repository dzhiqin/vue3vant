<template>
  <div class="page-five">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <div class="box">
      <div class="top-image">
        <img src="@/assets/img/beijing4.png" alt="">
      </div>
      <div class="title">
        您期望的创业资金是多少万元?
      </div>
      <div class="input">
        <van-cell-group inset>
          <van-field
            class="custom-input"
            v-model="fieldValue"
            is-link
            readonly
            @click="showPicker = true"
            />
        </van-cell-group>
      </div>
    </div> 
    <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const columns = [
  { text: '1个', value: 'one' },
  { text: '2个', value: 'two' },
  { text: '3个', value: 'three' },
  { text: '4个', value: 'four' },
  { text: '5个', value: 'five' },
];
const fieldValue = ref('');
const showPicker = ref(false);

const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].text;
};
</script>

<style lang="less" scoped>
.page-five {
  position: relative;
  height: 100%;
  background: linear-gradient(158.26deg, rgba(255, 255, 255, 1) 0%, rgba(153, 188, 254, 1) 99.73%, rgba(153, 188, 254, 1) 100.73%);
  padding: 20px;
  box-sizing: border-box;

  .logo {
    position: fixed;

    img {
      width: 150px;
      height: 30px;
    }
  }

  .box {
    position: absolute;
    height: 460px;
    width: 335px;
    padding: 0 30px;
    box-sizing: border-box;
    opacity: 1;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 2px 43px rgba(58, 62, 233, 0.49);
    top: calc(50% - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .top-image {

      img {
        width: 100%;
      }
    }

    .title {
      font-size: 24px;
      font-weight: 700;
      color: #3335E9;
      margin-top: 20px;
    }

    .input {
      margin-top: 20px;

      .custom-input {
        height: 40px;
        width: 280px;
      }
    }
  }
}
</style>

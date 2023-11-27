<template>
  <div class="page-six">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <div class="box">
      <div class="top-image">
        <img src="@/assets/img/beijing5.png" alt="">
      </div>
      <div class="title">
        目前创业担保贷贴息政策最高减免2%(以人社局最终审核为准)
      </div>
    </div> 
    <div class="arrow_up">
	    <span></span>
	    <span></span>
    </div>
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
.page-six {
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

  .arrow_up {
    //居中 可以根据实际情况调整。
    position: absolute;
    text-align: center;
    bottom: 100px;
    left: calc(50%);
    color: white;
  }

  .arrow_up span {
    //箭头形状设置
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    transform: rotate(45deg);
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    margin-left: -10px;
    opacity: 0;
    -webkit-animation: up 2s infinite;
    animation: up 2s infinite;
  }

  .arrow_up span:nth-of-type(2) {
    top: 20px;
  }

  .arrow_up span:nth-of-type(1) {
    -webkit-animation-delay: .15s;
    animation-delay: .15s;
  }

  @-webkit-keyframes up {

    //动画设置
    0% {
      opacity: 0;
      transform: translate(0, 0) rotate(45deg);
    }

    50% {
      opacity: 1;
      transform: translate(0, 20px) rotate(45deg);
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes up {
    0% {
      opacity: 0;
      transform: translate(0, 0) rotate(45deg);
    }

    50% {
      opacity: 1;
      transform: translate(0, 20px) rotate(45deg);
    }

    100% {
      opacity: 0;
    }
  }
}
</style>

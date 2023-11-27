<template>
  <div class="page-one">
    <div class="arrow_up">
	    <span></span>
	    <span></span>
    </div>
   </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.page-one {
  height: 100%;
  background-image: url("@/assets/img/画板1.png");
  background-size: 100% 100%;
  // background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;

  .arrow_up {
    //居中 可以根据实际情况调整。
    position: absolute;
    text-align: center;
    bottom: 100px;
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

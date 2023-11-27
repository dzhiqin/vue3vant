<template>
  <div class="page-two">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="" />
    </div>

    <div class="content">
      <div class="title">创业担保贷款</div>

      <div class="center-image"></div>

      <div class="dec-box">
        <div class="inner-box">政府贴息的创业资金</div>
      </div>
    </div>

    <div class="arrow_up">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.page-two {
  position: relative;
  height: 100%;
  background-image: url('@/assets/img/mengban.png');
  background-size: cover;
  background-position: center;
  padding: 20px;
  box-sizing: border-box;

  .logo {
    position: fixed;

    img {
      width: 150px;
      height: 30px;
    }
  }

  .content {
    position: relative;
    height: 100%;

    .title {
      position: absolute;
      width: 335px;
      height: 60px;
      top: calc(50% - 230px);
      left: calc(50% - 167.5px);
      font-size: 50px;
      font-weight: 700;
      color: #3335e9;
      text-align: center;
    }

    .center-image {
      position: absolute;
      height: 300px;
      width: 300px;
      top: calc(50% - 150px);
      left: calc(50% - 150px);
      background-image: url('@/assets/img/chahua.png');
      background-size: cover;
      background-position: center;
    }

    .dec-box {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      height: 150px;
      width: 335px;
      border-radius: 20px;
      background-color: #fff;
      bottom: calc(50% - 300px);
      left: calc(50% - 167.5px);
      background: rgba(255, 255, 255, 0.45);
      box-shadow: 0px 2px 43px rgba(58, 62, 233, 0.49);

      .inner-box {
        width: 280px;
        height: 100px;
        border-radius: 15px;
        background-color: #fff;
        font-size: 26px;
        color: #3335e9;
        font-weight: 700;
        text-align: center;
        line-height: 100px;
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
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
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

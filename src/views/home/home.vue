<template>
  <div class="home" v-wechat-title="$route.meta.title" @scroll="pageScroll">
    <div class="home-head" id="home-head">
      <div style="width: 30px; height: 30px"></div>
      <img src="@/assets/img/ssrcb-logo2.png" class="home-head-logo" id="home-head-logo" />
      <div style="width: 20px; height: 20px"></div>
    </div>
    <div class="home-content">
      <div class="home-swiper">
        <van-swipe :autoplay="3000" lazy-render>
          <van-swipe-item>
            <div class="home-swiper-item">
              <div class="home-swiper-item-title">新市民积分贷</div>
              <div class="home-swiper-item-text">最高额度300000</div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="home-swiper-item">
              <div class="home-swiper-item-title">ETC申领</div>
              <div class="home-swiper-item-text">ETC在线申领</div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <van-grid :column-num="3" :border="false" gutter="20" class="home-grid">
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/usercard.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">社保卡</div>
          </slot>
        </van-grid-item>
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/etccar.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">ETC</div>
          </slot>
        </van-grid-item>
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/shop.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">商户</div>
          </slot>
        </van-grid-item>
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/zhengxin.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">征信</div>
          </slot>
        </van-grid-item>
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/loan.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">贷款申请</div>
          </slot>
        </van-grid-item>
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/bankcard.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">贷记卡申领</div>
          </slot>
        </van-grid-item>
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/invoice.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">发票打印</div>
          </slot>
        </van-grid-item>
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/estimate.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">风险评估</div>
          </slot>
        </van-grid-item>
        <van-grid-item class="home-grid-item">
          <slot name="icon">
            <img src="@/assets/img/platform/huikuan.png" class="home-grid-img" />
          </slot>
          <slot name="text">
            <div class="home-grid-name">汇款</div>
          </slot>
        </van-grid-item>
      </van-grid>

      <div class="home-panel" style="background: rgba(243, 84, 33, 0.15)">
        <div class="home-panel-head flex-center">
          <img src="@/assets/img/platform/card.png" class="home-panel-image" />
          <div class="flex-column">
            <div class="text-lg">用卡服务</div>
            <div class="text-color-tips">All service of your card</div>
          </div>
        </div>
        <van-grid :border="false" style="margin-top: 10px">
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-user2.png"
            title="金融服务"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-list.png"
            title="交易明细"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-card-add.png"
            title="贷记卡申领"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-message2.png"
            title="短信金额设置"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-card-min.png"
            title="信用卡"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-card-add.png"
            title="信用卡申请"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-shop.png"
            title="信用卡生活"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-card-user.png"
            title="社保卡"
          ></home-grid-item>
        </van-grid>
      </div>

      <div class="home-panel" style="background: rgba(144, 200, 252, 0.15)">
        <div class="home-panel-head flex-center">
          <img src="@/assets/img/platform/chart.png" class="home-panel-image" />
          <div class="flex-column">
            <div class="text-lg">金融服务</div>
            <div class="text-color-tips">Money transition</div>
          </div>
        </div>
        <van-grid :border="false" style="margin-top: 10px">
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-exchange.png"
            title="行内转账"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-card-flash.png"
            title="快捷转账"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-bank.png"
            title="跨行转账"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-heart.png"
            title="爱心捐赠"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-loan2.png"
            title="个人贷款"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-loan.png"
            title="企业贷款"
          ></home-grid-item>
        </van-grid>
      </div>

      <div class="home-panel" style="background: rgba(149, 198, 117, 0.15)">
        <div class="home-panel-head flex-center">
          <img src="@/assets/img/platform/camera.png" class="home-panel-image" />
          <div class="flex-column">
            <div class="text-lg">生活服务</div>
            <div class="text-color-tips">Daily services</div>
          </div>
        </div>
        <van-grid :border="false" style="margin-top: 10px">
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-phone.png"
            title="手机充值"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-flash.png"
            title="电费账单"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-water-bill.png"
            title="电费账单"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-car.png"
            title="高速ETC"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-invoice.png"
            title="增值税开票"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-user.png"
            title="征信查询"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-message.png"
            title="投诉建议"
          ></home-grid-item>
          <home-grid-item
            imgSrc="../../src/assets/img/platform/Group-location.png"
            title="网点导航"
          ></home-grid-item>
        </van-grid>
      </div>

      <div class="home-footer">
        <img src="@/assets/img/ssrcb-logo.png" class="home-footer-logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeGridItem from './components/gridItem.vue'
function pageScroll(e) {
  const { scrollTop } = e.target
  const ele = document.getElementById('home-head-logo')
  if (scrollTop >= 20 && scrollTop <= 100) {
    ele.style.position = 'absolute'
    ele.style.left = '20px'
    ele.style.top = `${100 - scrollTop - 50}px`
  }
}
</script>

<style lang="less" scoped>
// @font-face {
//   font-family: 方正正粗黑简体;
//   src: url("@/assets/css/font/方正正粗黑简体.TTF");
// }
.home {
  background: #f9f9f9;
  background-image: url('../../assets/img/platform/background.png');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;
  &-panel {
    margin: 16px 16px 0 16px;
    padding: 16px;
    border-radius: 16px;

    &-head {
      background: white;
      border-radius: 16px;
    }
    &-image {
      widows: 66px;
      height: 66px;
    }
  }
  &-head {
    padding-left: 20px;
    display: flex;
    position: fixed;
    flex-direction: column;
    &-logo {
      height: 50px;
    }
  }
  &-content {
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #f9f9f9;
    position: relative;
    margin-top: 100px;
  }
  &-swiper {
    padding: 16px;
    padding-bottom: 0;
    &-item {
      background-image: url('../../assets/img/banner1.png');
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      &-title {
        position: absolute;
        left: 20px;
        top: 20px;
        // font-family: 方正正粗黑简体;
        font-size: 30px;
        font-weight: bolder;
        color: rgb(242, 179, 105);
      }
      &-text {
        position: absolute;
        left: 30px;
        top: 70px;
        color: rgb(242, 179, 105);
      }
    }
  }
  &-grid {
    margin-top: 20px;
    &-img {
      width: 42px;
      height: 42px;
    }
    &-name {
      font-size: 12px;
      margin-top: 4px;
    }
  }

  &-footer {
    text-align: center;
    padding: 40px 0 20px;
    &-logo {
      height: 40px;
    }
  }

  .van-swipe {
    height: 120px;
    border-radius: 16px;
  }
}
</style>

<template>
  <div class="loan">
    <div class="loan-title">
      <div class="loan-dot"></div>
      <div>存贷业务</div>
    </div>
    <van-grid>
      <van-grid-item class="my-grid-item">
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/diamond.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/gold.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/抵押.png" class="img" alt=""> -->
        </slot>
        <slot name="text">
          <div class="name">抵押品评估管理</div>
        </slot>
      </van-grid-item>
      <van-grid-item class="my-grid-item">
        <slot name="icon">
          <!-- <div class="img">

            <img src="@/assets/img/marketing/还款2.png" class="" alt="">
          </div> -->
          <!-- <img src="@/assets/img/marketing/hand-money.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/bankcard.png" class="img" alt="">

        </slot>
        <slot name="text"><div class="name">贷款提前还款预约</div></slot>
      </van-grid-item>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/graphs.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/all.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/营销4.png" class="img" alt=""> -->
        </slot>
        <slot name="text"><div class="name">营销辅助</div></slot>
      </van-grid-item>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/receipt.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/notemoney.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/申报备案.png" class="img" alt=""> -->
        </slot>
        <slot name="text"><div class="name">优惠利率贷款报备</div></slot>
      </van-grid-item>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/cloud.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/bag.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/资产.png" class="img" alt=""> -->
        </slot>
        <slot name="text"><div class="name">资产盘点</div></slot>
      </van-grid-item>
    </van-grid>
    <div class="loan-title">
      <div class="loan-dot"></div>
      <div>薪酬管理</div>
    </div>
    <van-grid>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/tablet-charts.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/finance.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/icon-部门绩效.png" class="img" alt=""> -->
        </slot>
        <slot name="text">
          <div class="name">智能部门绩效考核</div>
        </slot>
      </van-grid-item>
    </van-grid>
    <div class="loan-title">
      <div class="loan-dot"></div>
      <div>客户经理工作台</div>
    </div>
    <van-grid>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/hammer.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/check.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/投票表决.png" class="img" alt=""> -->
        </slot>
        <slot name="text">
          <div class="name">贷审会表决</div>
        </slot>
      </van-grid-item>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/paper-seal.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/people.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/信息维护.png" class="img" alt=""> -->
        </slot>
        <slot name="text">
          <div class="name">贷审会维护</div>
        </slot>
      </van-grid-item>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/image.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/image.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/海报.png" class="img" alt=""> -->
        </slot>
        <slot name="text">
          <div class="name">海报超市</div>
        </slot>
      </van-grid-item>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/fjnx-card.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/bankcard.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/bank-card.png" class="img" alt=""> -->
        </slot>
        <slot name="text">
          <div class="name">普惠金融卡在线申请</div>
        </slot>
      </van-grid-item>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/paper-seal.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/notemoney2.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/申请.png" class="img" alt=""> -->
        </slot>
        <slot name="text">
          <div class="name">变更利率申请</div>
        </slot>
      </van-grid-item>
      <van-grid-item>
        <slot name="icon">
          <!-- <img src="@/assets/img/marketing/barcode.png" class="img" alt=""> -->
          <img src="@/assets/img/marketing2/qrcode.png" class="img" alt="">
          <!-- <img src="@/assets/img/marketing/qrcode.png" class="img" alt=""> -->
        </slot>
        <slot name="text">
          <div class="name">新市民贷个人二维码</div>
        </slot>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
@font-face {
  font-family: alibaba;
  src: url("@/assets/css/font/alibaba.woff");
}

.loan {
  background: #f5f5f5;
  .van-grid{
    background: white;
  }
  &-title{
    display: flex;
    padding: 20px;
    background: white;
  }
  &-title:not(:first-child){
    margin-top: 20px;
  }
  &-dot{
    width: 12px;
    height: 12px;
    background: red;
    border-radius: 50%;
    margin-right: 10px;
  }
  .img{
    width: 36px;
    height: 36px;
  }
  .img >img{
    width: 100%;
    // height: 100%;
  }
  .name{
    font-size: 12px;
    margin-top: 6px;
    text-align: center;
  }
}
</style>

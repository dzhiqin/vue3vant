<template>
  <div class="home-card-item">
    <div class="left">
      <div class="name">创保贷</div>
      <div class="dec">产品选择创保贷</div>
    </div>
    <div class="right">
      <img style="width: 25px;height: 25px;" src="@/assets/img/chuangye.png" alt="">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.home-card-item {
  display: flex;
  width: 48%;
  height: 60px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 6px 13px 10px 0px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  .name {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }

  .dec {
    font-size: 12px;

  }
}
</style>

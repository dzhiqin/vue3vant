<template>
  <div class="page-commit">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="">
    </div>
    <div class="box">
      <div class="title">
        创业担保贷款
      </div>
      <div class="dec">
        请留下您的姓名与电话,我们会在三个工作日内与您联系。
      </div>
        <van-form @submit="onSubmit" ref="form">
          <div class="input">
            <div class="label">姓名:</div>
              <van-cell-group inset>
                <van-field name="name" v-model="value1" size="large" class="custom-input"  />
              </van-cell-group>
            </div>
          <div class="input">
            <div class="label">电话:</div>
            <van-cell-group inset>
              <van-field name="phone" v-model="value2" size="large" class="custom-input"  />
            </van-cell-group>
          </div>
          <div class="input">
            <div class="label">请选择办理网点:</div>
            <van-cell-group inset>
              <van-field
                class="custom-input"
                v-model="fieldValue"
                is-link
                readonly
                @click="showPicker = true"
                name="address"
                />
            </van-cell-group>
            <van-popup v-model:show="showPicker" round position="bottom" teleport="body">
              <van-picker
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="onConfirm"
              />
            </van-popup>
          </div>

          <div class="input">
            <div class="label">是否有营业执照:</div>
              <van-field name="radio1">
                <template #input>
                  <van-radio-group v-model="checked1">
                    <van-radio name="1">有</van-radio>
                    <van-radio name="2">无</van-radio>
                  </van-radio-group>
                </template>
              </van-field>
          </div>

          <div class="input ">
            <div class="label">是否在其他单位缴纳医社保:</div>
              <van-field name="radio2">
                <template #input>
                  <van-radio-group v-model="checked2" >
                    <van-radio name="1">有</van-radio>
                    <van-radio name="2">无</van-radio>
                  </van-radio-group>
                </template>
              </van-field>
          </div>

          <div class="input">
            <div class="label">您和您的配偶有无未结清的经营贷款或5万元以上的消费类贷款？</div>
              <van-field name="radio3">
                <template #input>
                  <van-radio-group v-model="checked3">
                    <van-radio name="1">有</van-radio>
                    <van-radio name="2">无</van-radio>
                  </van-radio-group>
                </template>
              </van-field>
          </div>
          <div class="button">
            <van-button type="primary" color="#3335E9" block native-type="submit">提交</van-button>
          </div>
        </van-form>
    </div>
    <div class="arrow_up">
	    <span></span>
	    <span></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { showSuccessToast, showFailToast } from 'vant';
import 'vant/es/toast/style';

const value1 = ref('');
const value2 = ref('');
const checked1 = ref('');
const checked2 = ref('');
const checked3 = ref('');
const form = ref(null);



const columns = [
  { text: '1个', value: 'one' },
  { text: '2个', value: 'two' },
  { text: '3个', value: 'three' },
  { text: '4个', value: 'four' },
  { text: '5个', value: 'five' },
];
const showPicker = ref(false);
const fieldValue = ref('');


const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].text;
};

const onSubmit = (values) => {
  console.log('submit', values);
  const { name, address, phone, radio1, radio2, radio3 } = values
  // 校验表单内容

  const chineseNameRegex = /^[\u4e00-\u9fa5]{2,4}$/; // 中文姓名的正则表达式
  const phoneNumberRegex = /^1\d{10}$/; //手机号码正则

  if (!chineseNameRegex.test(name)) {
    return showFailToast('请输入合法的姓名');
  }
  if (!address) {
    return showFailToast('请选择网点');
  }
  if (!phoneNumberRegex.test(phone)) {
    return showFailToast('请输入合法的手机号');
  }
  if (!radio1 || !radio2 || !radio3) {
    return showFailToast('请勾选单选框');
  }

  value1.value = ''
  value2.value = ''
  fieldValue.value = ''
  checked1.value = ''
  checked2.value = ''
  checked3.value = ''




  showSuccessToast("提交成功, 客户经理会在近日联系您")
};


</script>

<style lang="less" scoped>
.page-commit {
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
    height: 500px;
    width: 335px;
    padding: 20px 30px;
    box-sizing: border-box;
    opacity: 1;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 2px 43px rgba(58, 62, 233, 0.49);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    overflow: auto;
    top: calc(50% - 250px);

    .title {
      color: #3335E9;
      font-size: 24px;
      font-weight: 700;
    }

    .dec {
      padding: 0 20px;
      box-sizing: border-box;
      margin: 12px 0;
      color: #3335E9;
      font-size: 18px;
      font-weight: 700;
    }

    .input {
      margin-top: 10px;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;

      .label {
        color: #3335E9;
        font-size: 16px;
        font-weight: 700;
        margin-left: 16px;
        margin-bottom: 3px;

      }

      ::v-deep(.van-cell) {
        background: transparent;
      }

      .custom-input {
        height: 40px;
        width: 280px;

        ::v-deep(.van-field__control) {
          line-height: normal;
        }
      }
    }

    .button {
      width: 300px;
      height: 45px;
      border-radius: 30px;
      margin-top: 15px;
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

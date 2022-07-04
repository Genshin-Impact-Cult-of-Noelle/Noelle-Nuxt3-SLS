<!--
 * @Date: 2022-07-03 18:53:26
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-04 10:56:25
 * @FilePath: \Noelle-Nuxt3-SLS\components\HomePage\First.vue
-->
<template>
  <div class="main" :class="{ now: isShow }">
    <img class="bg" src="@/assets/image/test/t.jpg" alt="" srcset="" />
    <div class="content">
      <div class="box">
        <div class="title buling-text">BARBARA CHURCH</div>
        <div class="text">艾伯特拯救世界</div>
        <div class="button">Get Started</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NSpace } from "naive-ui";
const props = defineProps({
  isShow: Boolean,
});
</script>

<style lang="less" scoped>
@import "@/assets/css/public/index.less";
.main {
  min-width: 1280px;
  min-height: 720px;
  cursor: default;
  .bg {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .content {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.66);
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-grow: 0;
      color: #ffffff;
      * {
        flex-grow: 0;
        position: relative;
        transition: all 0.8s cubic-bezier(0.17, 0.84, 0.44, 1);
      }
      .title {
        padding: 0 20px 0 20px;
        top: -300px;
        font-size: 80px;
        text-transform: uppercase;
        text-shadow: 0 0 16px @c2;
        font-weight: 800;
        font-style: italic;
        letter-spacing: 0.05em;
      }
      .text {
        margin-top: 36px;

        top: -100px;
        font-size: 16px;
      }
      .button {
        margin-top: 66px;

        &:hover {
          background-color: @c1;
        }
        cursor: pointer;
        border-radius: 90px;
        display: flex;
        font-weight: 800;
        letter-spacing: 0.02em;
        justify-content: center;
        padding: 8px 36px 4px 36px;
        border: solid @c1 2px;
      }
    }
  }
  &.now {
    .content {
      .box {
        .title {
          top: 0;
        }
        .text {
          top: 0;
        }
      }
    }
  }
}
</style>

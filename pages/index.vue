<!--
 * @Date: 2022-07-01 13:15:06
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-06 15:02:24
 * @FilePath: \Noelle-Nuxt3-SLS\pages\index.vue
-->
<template>
  <NSpace class="app">
    <NCarousel
      direction="vertical"
      style="width: 100vw; height: 100vh"
      mousewheel
      :loop="false"
      draggable
      :show-dots="false"
      @update:currentIndex="onCurrentPageChange"
    >
      <HomePageFirst :isShow="curPageIndex == 0"> </HomePageFirst>
      <HomePageSecond :isShow="curPageIndex == 1"> </HomePageSecond>
      <HomePageThird :isShow="curPageIndex == 2"></HomePageThird>
    </NCarousel>
    <div class="arrow-box" v-if="curPageIndex!=2">
    <NIcon class="moust-tip" size="30" :color="curPageIndex==0?'#EEEEEE':'#333333'">
      <ArrowDown/>
    </NIcon>
    </div>
    <div class="gov">
        鄂ICP备2021000277号-1
      </div>
  </NSpace>
</template>

<script lang="ts" setup>
import { NSpace, NCarousel, NButton, NTabs, NTabPane ,NIcon} from "naive-ui";
import {ArrowDown} from "@vicons/ionicons5"
const curPageIndex = ref(0);
const nuxt = useNuxtApp();

const onCurrentPageChange = (curIndex: number, lastIndex: number) => {
  curPageIndex.value = curIndex;
};
useHead({
  title: "芭芭拉神教",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
});
</script>

<style lang="less" scoped>
@import "@/assets/css/public/index.less";


.app{
  min-width: 1280px;
  min-height: 720px;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background: #f8f9fb url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAFVJREFUSEtjfPn+238GJMDBxozMJZn949dfuB5GkOHiglyMJJtChIYhbPjHrz//83Oz0yZYRg3HlngYR4NlNFiIKFUgSkZTC9agGg0W7MEyWs1hCxcAF5pe5Ya82ZoAAAAASUVORK5CYII=) repeat center center/18px 18px;
  .arrow-box{
    position: absolute;
    // background-color: aqua;
    width: 30px;
    height: 180px;
    right: 60px;
    bottom: 40px;
    z-index: 99;
    overflow: hidden;
    .moust-tip{
      position: absolute;
      animation: loop-down 2s linear infinite;
      @keyframes loop-down {
        0%{
          bottom:210px
        }
        100%{
          bottom:-40px
        }
      }
    }
  }
}

</style>

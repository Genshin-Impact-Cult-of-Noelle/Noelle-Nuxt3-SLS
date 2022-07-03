<!--
 * @Date: 2022-07-01 13:15:06
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-03 21:36:45
 * @FilePath: \Noelle-Nuxt3-SLS\pages\index.vue
-->
<template>
  <NSpace>
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
  </NSpace>
</template>

<script lang="ts" setup>
import { NSpace, NCarousel, NButton, NTabs, NTabPane } from "naive-ui";
const curPageIndex = ref(0);
const curPageIndex2 = ref(0);
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

.carousel-img {
  width: 100vw;
  height: 100vh;
}

</style>

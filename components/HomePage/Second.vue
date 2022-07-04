<!--
 * @Date: 2022-07-03 18:53:28
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-04 13:47:44
 * @FilePath: \Noelle-Nuxt3-SLS\components\HomePage\Second.vue
-->
<template>
  <div class="main" :class="{ now: isShow }">
    <NCarousel
      class="left-show-box"
      direction="vertical"
      :show-dots="false"
      
      effect="fade"
      style="width: 100vw; height: 80vh"
      :currentIndex="tabIndex"
    >
      <div
        v-for="(value, index) in listData"
        :key="value.url"
        class="left-show"
        :class="{ now: tabIndex == index && isShow }"
      >
        <img class="big-img" :src="value.bigImg" alt="" srcset="" />
        <NuxtLink :to="value.url" target="_blank">
          <div class="video-buttom">
            <NIcon size="40">
              <Play />
            </NIcon>
          </div>
        </NuxtLink>

        <div class="face-box">
          <img class="face-img" :src="value.face" alt="" srcset="" />
        </div>
      </div>
    </NCarousel>

    <div class="select-buttoms">
      <div
        v-for="(value, index) in listData"
        :key="index"
        @click="changeTab(index)"
      >
        {{ value.content }}
      </div>
    </div>
    <!-- <div class="video-content">
      <div>让芭芭拉再次伟大</div>
    </div> -->
  </div>
</template>


<script lang="ts" setup>
import { NIcon } from "naive-ui";
import { Play } from "@vicons/ionicons5";
import { NCarousel } from "naive-ui";
const tabIndex = ref(0);
const props = defineProps({
  isShow: Boolean,
});
const changeTab = (v: number) => {
  tabIndex.value = v;
};
const nuxtApp = useNuxtApp();
const listData = [
  {
    content: "芭",
    face: nuxtApp.$viteImgUrl("homePage/i1.jpg"),
    bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    url: "https://www.bilibili.com/video/BV1Pf4y1g7La",
  },
  {
    content: "芭",

    face: nuxtApp.$viteImgUrl("homePage/i2.jpg"),
    bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    url: "https://www.bilibili.com/video/BV1Mh411W7LW",
  },
  {
    content: "拉",

    face: nuxtApp.$viteImgUrl("homePage/i3.jpg"),
    bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    url: "https://www.bilibili.com/video/BV1Nr4y1Q7Tv",
  },
  {
    content: "冲",

    face: nuxtApp.$viteImgUrl("homePage/i4.jpg"),
    bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    url: "https://www.bilibili.com/video/BV1454y1b7DC",
  },
  {
    content: "鸭",

    face: nuxtApp.$viteImgUrl("homePage/i5.jpg"),
    bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    url: "https://www.bilibili.com/video/BV1j3411Y7mF",
  },
];
</script>

<style lang="less" scoped>
@import "@/assets/css/public/index.less";
.main {
  min-width: 1280px;
  min-height: 720px;
}
.select-buttoms {
  background-color: aqua;
  display: flex;
  position: relative;
  left: 400px;
  width: 0;
  > div {
    cursor: pointer;
    &:hover {
      border: 2px solid @c2;
    }
    width: 70px;
    height: 70px;
    font-size: 40px;
    padding: 5px;
    font-weight: 800;
    font-style: italic;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.2em;

    .buling-text;
    border-radius: 8px;
    border: 2px solid transparent;
    margin-left: 8px;
  }
}
.left-show {
  &.now {
    z-index: 98;

    .big-img {
      right: -160px;
      opacity: 1;
    }
    .video-buttom {
      left: 60px;
      z-index: 99;
    }
  }
  z-index: -1;
  min-width: 768px;
  min-height: 576px;
  width: 60vw;
  height: 80vh;
  position: relative;
  .big-img {
    transition: all 0.8s ease-out 0.5s;
    position: absolute;
    z-index: 3;
    right: -400px;
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    visibility: visible;
  }
  .video-buttom {
    transition: all 0.8s ease-out 0.5s;
    z-index: -1;

    position: absolute;
    z-index: 4;
    width: 200px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(0, 0, 0, 0.7);
    bottom: 270px;
    left: -200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .face-box {
    z-index: 1;
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    border-radius: 0  24px 24px 0;
    .face-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(4px);
    }
  }
}
</style>
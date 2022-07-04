<!--
 * @Date: 2022-07-03 18:53:28
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-04 17:41:25
 * @FilePath: \Noelle-Nuxt3-SLS\components\HomePage\Second.vue
-->
<template>
  <div class="main" :class="{ now: isShow }">
    <NCarousel
      class="left-show-box"
      direction="vertical"
      :show-dots="false"
      style="width: 100vw; height: 80vh"
      :currentIndex="tabIndex"
      @update:currentIndex="onCurrentPageChange"
      loop
      autoplay
      :interval="5000"
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
        :class="{ now: tabIndex == index }"
      >
        {{ value.content }}
      </div>
    </div>
    <div class="right-content-show">
      <NCarousel
        direction="vertical"
        :show-dots="false"
        effect="fade"
        style="width: 100vw; height: 80vh"
        :currentIndex="tabIndex"
      >
        <div
          class="video-content"
          v-for="(value, index) in listData"
          :key="value.url"
          :class="{ now: tabIndex == index && isShow }"
        >
          <div class="title">{{ value.rightData.title }}</div>
          <div class="desc">{{ value.rightData.desc }}</div>
          <div
            class="content"
            v-for="(value, index) in value.rightData.content"
            :key="index"
          >
            {{ value }}
          </div>
          <!-- <div class="content">{{}}</div> -->
        </div>
      </NCarousel>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { NIcon } from "naive-ui";
import { Play, MusicalNotesOutline } from "@vicons/ionicons5";
import { NCarousel } from "naive-ui";
const tabIndex = ref(0);
const props = defineProps({
  isShow: Boolean,
});
const changeTab = (v: number) => {
  tabIndex.value = v;
};
const nuxtApp = useNuxtApp();
const onCurrentPageChange = (curIndex: number, lastIndex: number) => {
  tabIndex.value = curIndex;
};
const listData = [
  {
    content: "芭",
    face: "/image/homePage/i1.jpg",
    bigImg: "/image/homePage/bi1.png",
    url: "https://www.bilibili.com/video/BV1Pf4y1g7La",
    rightData: {
      title: "再次伟大",
      desc: "MAKE BRABARA GREAT FOREVER",
      content: [
        "每一句话。",
        "是福音和祈祷。",
        "每一首歌。",
        "是天使对世人的感召。",
      ],
    },
  },
  {
    content: "芭",
    face: "/image/homePage/i2.jpg",
    bigImg: "/image/homePage/bi1.png",
    url: "https://www.bilibili.com/video/BV1Mh411W7LW",
    rightData: {
      title: "战斗牧师",
      desc: "M1917 SMITH WESSON",
      content: ["这就是完全偶像。", "完全的芭芭拉。", "完全的，", "我！"],
    },
  },
  {
    content: "拉",

    face: "/image/homePage/i3.jpg",
    bigImg: "/image/homePage/bi1.png",
    url: "https://www.bilibili.com/video/BV1Nr4y1Q7Tv",
    rightData: {
      title: "少女杀意",
      desc: "MADE IN JESUS",
      content: ["装备的属性。", "是上帝的事。", "而我的任务。", "是送你归西。"],
    },
  },
  {
    content: "冲",

    face: "/image/homePage/i4.jpg",
    bigImg: "/image/homePage/bi1.png",
    url: "https://www.bilibili.com/video/BV1454y1b7DC",
    rightData: {
      title: "微型元素粒子爆破",
      desc: "███N█O█D█A█T█A███",
      content: [
        "███2█O█D█0█T█A███",
        "███N█1█7█2█T█A███",
        "███N█O█D█A█T█A███",
        "███N█O█D█A█T█0███",
      ],
    },
  },
  {
    content: "鸭",

    face: "/image/homePage/i5.jpg",
    bigImg: "/image/homePage/bi1.png",
    url: "https://www.bilibili.com/video/BV1j3411Y7mF",
    rightData: {
      title: "彩虹行动:提瓦特",
      desc: "RAINBOW TEYVAT",
      content: ["哒~哒哒哒~哒~", "哒~哒~~", "准备好了吗？", "演唱，开始！"],
    },
  },
];
</script>

<style lang="less" scoped>
@import "@/assets/css/public/index.less";
.main {
  margin-top: 60px;
  min-width: 1280px;
  min-height: 720px;
}
.select-buttoms {
  margin-top: 20px;
  background-color: aqua;
  display: flex;
  position: relative;
  left: 400px;
  width: 0;
  > div {
    cursor: pointer;
    &:hover,
    &.now {
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

    .big-img {
      right: -160px;
      opacity: 1;
    }
    .video-buttom {
      left: 60px;
    }
  }
  z-index: 6;
  min-width: 768px;
  min-height: 576px;
  width: 60vw;
  height: 80vh;
  position: relative;
  .big-img {
    transition: all 0.8s ease-out 0.5s;
    position: absolute;
    z-index: 9;
    right: -400px;
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    visibility: visible;
  }
  .video-buttom {
    transition: all 0.8s ease-out 0.5s;
    position: absolute;
    z-index: 10;
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
    z-index: 8;
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    border-radius: 0 24px 24px 0;
    .face-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(4px);
    }
  }
}
.right-content-show {
  position: absolute;
  right: 0;
  top: 0;
  color: #333333;
  z-index: -1;
}
.video-content {
  position: absolute;
  right: 24px;
  top: 84px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .title {
    font-size: 60px;
    font-weight: 800;
    margin-right: 24px;
  }
  .ico-line {
    color: @c2;
    margin-right: 24px;
  }
  .desc {
    .buling-text;
    font-weight: 800;
    margin-top: -14px;
    margin-bottom: 24px;
  }
  .content {
    line-height: 14px;
    font-size: 12px;
    text-align: right;
    font-family: Menlo, Monaco, Courier New;
  }
}
</style>
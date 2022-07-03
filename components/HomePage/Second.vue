<!--
 * @Date: 2022-07-03 18:53:28
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-03 21:35:00
 * @FilePath: \Noelle-Nuxt3-SLS\components\HomePage\Second.vue
-->
<template>
  <div class="main" >
    <div class="content">
      <div class="box">
          <div class="select-bar">
              <div v-for="(v,i) in [0,1,2]" :key="i" >关于组织</div>
          </div>
        <NCarousel
          direction="vertical"
          style="width: 50vw; height: 50vh"
          :loop="false"
          effect="fade"
          :show-dots="false"
          :currentIndex="tabIndex"
        >
          <div class="carousel-img">
            <div >
              我们的愿景：<br />

              关于组织：<br />
              芭芭拉神教是一个由几名热爱芭芭拉的原神玩家联合起来的一个小团队，创立于2020年。<br />
              我们一直在前进，一直在进步，不管如何，我们的初心不变。
              我们的理念：<br />
              简洁、高效、人性化。人无信，而不立；商无信，而不兴！<br />
            </div>
          </div>
        </NCarousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NCarousel } from "naive-ui";
const tabIndex = ref(0)
const props = defineProps({
  isShow: Boolean,
});
const tabData = {
    
}
</script>
<style lang="less" scoped>
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
    }
  }
</style>
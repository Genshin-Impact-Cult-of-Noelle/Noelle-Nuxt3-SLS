<!--
 * @Date: 2022-07-01 13:15:06
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-01 18:50:43
 * @FilePath: \Noelle-Nuxt3-SLS\pages\index.vue
-->
<template>
  <NSpace>
    <NCarousel  direction="vertical" style="width: 100vw; height: 100vh" mousewheel :loop="false" draggable>

      <div class="carousel-img head-1">
        <img class="bg" src="@/assets/image/test/t.jpg" alt="" srcset="">
      </div>
      <div class="carousel-img head-1">
        <img class="bg" src="@/assets/image/test/t.jpg" alt="" srcset="">
      </div>
      <div class="carousel-img head-1">
        <img class="bg" src="@/assets/image/test/t.jpg" alt="" srcset="">
      </div>
      <!-- <div v-for="(i, v) in [5, 4, 3, 2, 1]" class="carousel-img">      </div> -->

    </NCarousel>
  </NSpace>
</template>

<script lang="ts" setup>
import {
  NSpace,
  NCarousel,
} from "naive-ui";


</script>

<style lang="less" scoped>

.carousel-img{
  width: 100vw;
  height: 100vh;
  //1280*720
}
.head-1 {
  .bg {
    width: 100%;
    height: 100%;
  }
}
</style>

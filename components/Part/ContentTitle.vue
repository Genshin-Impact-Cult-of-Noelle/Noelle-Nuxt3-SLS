<!--
 * @Date: 2022-07-04 10:03:36
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-04 10:53:24
 * @FilePath: \Noelle-Nuxt3-SLS\components\Part\ContentTitle.vue
-->
<template>
  <div class="main">
    {{ title }}
    <div class="desc">{{ desc }}</div>
  </div>
</template>
<script lang="ts" setup>
import {} from "naive-ui";
const props = defineProps({
  title: String,
  desc: String,
});
</script>
<style lang="less" scoped>
.main {
  color: #222222;
  font-size: 24px;
  margin-bottom: 28px;
  font-weight: 800;
  .desc {
    color: #cccccc;
    font-size: 18px;
    font-weight: 300;
    position: absolute;
    left: 64px;
    transform-origin: 0% 0%;
    transform: scale(50%) translateY(-20%);
  }
}
</style>
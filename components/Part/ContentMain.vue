<!--
 * @Date: 2022-07-04 10:03:36
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-04 10:53:01
 * @FilePath: \Noelle-Nuxt3-SLS\components\Part\ContentMain.vue
-->
<template>
  <p class="main">
    {{ content }}
  </p>
</template>
<script lang="ts" setup>
import {} from "naive-ui";
const props = defineProps({
  content: String,
});
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  color: #222222;
  font-size: 16px;
  margin-bottom: 28px;
  font-weight: 400;
  line-height: 32px;
}
</style>
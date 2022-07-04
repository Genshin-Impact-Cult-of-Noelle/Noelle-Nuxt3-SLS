<!--
 * @Date: 2022-07-03 18:53:28
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-04 16:17:53
 * @FilePath: \Noelle-Nuxt3-SLS\components\HomePage\Third.vue
-->
<template>
  <div class="main">
    <div class="content">
      <div class="box">
        <div class="select-bar">
          <PartSelectButtom :content="'关于组织'"></PartSelectButtom>
          <PartSelectButtom :content="'发展历史'"></PartSelectButtom>
          <!-- <PartSelectButtom :content="'关于组织'"></PartSelectButtom> -->
        </div>
        <NCarousel direction="vertical" style="width: 50vw; height: 50vh" :loop="false" effect="fade" :show-dots="false"
          :currentIndex="tabIndex">
          <div>
            <PartContentTitle :title="'关于组织'" :desc="'ABOUT TEAM'"></PartContentTitle>
            <PartContentMain :content="' 芭芭拉神教是一个由几名热爱芭芭拉的原神玩家联合起来的一个小团队，创立于2020年。我们一直在前进，一直在进步，不管如何，我们的初心不变。'">
            </PartContentMain>
            <PartContentTitle :title="'关于理念'" :desc="'OUR IDEA'"></PartContentTitle>
            <PartContentMain :content="'简洁、高效、人性化。人无信，而不立；商无信，而不兴！'"></PartContentMain>
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
@import "@/assets/css/public/index.less";

.select-bar{
  display: flex;
  position: absolute;
  padding-right: 1px;
  // background-color: @c1;
  top: 0;
  right: 0;
  transform: translateY(-200%);
  >*{
    border-right: solid 1px @c1;
  }
  >:first-child{
    border-left: solid 1px @c1;
  }
}

.content {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 640px;
  width: 100%;
  height: 100%;

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
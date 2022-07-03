<template>
    <div class="tab-buttom">
        <div class="box">
            <div class="light">{{content}}</div>
            <div class="dark">{{content}}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { } from "naive-ui"
const props = defineProps({
    content: String,
})
</script>
<style lang="less" scoped>
@import "@/assets/css/public/index.less";

.tab-buttom {
    height: 18px;
    overflow: hidden;
    &:hover,
    &.selected {

        .box {

            transform: translateY(-100%);
        }
    }

    .box {
        transition: all 0.3s ease ;
        transform: translateY(0%);
        height: 18px;

        >div {
            cursor: pointer;
            padding: 2px 32px 2px 32px;
            font-size: 14px;
            line-height: 14px;
            height: 18px;

        }

        .light {
            background-color: #ffffff;

            color: @c1;
        }

        .dark {
            background-color: @c1;
            color: #ffffff;

        }
    }
}
</style>
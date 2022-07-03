<template>
        <p class="main">
            {{content}}
        </p>
</template>
<script lang="ts" setup>
import {} from "naive-ui"
const props = defineProps({
    content: String,
})
</script>
<style lang="less" scoped>
.main {
    color: #222222;
    font-size: 16px;
    margin-bottom: 28px;
    font-weight: 400;
    line-height:32px;
}
</style>
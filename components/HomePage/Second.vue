<template>

    <div>


        <div v-for="(value, index) in listData">
            <img :src="value.face" alt="" srcset="">
            <img :src="value.bigImg" alt="" srcset="">

        </div>

    </div>



</template>


<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const listData = [
    {
        face: nuxtApp.$viteImgUrl("homePage/i1.jpg"),
        bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    },
    {
        face: nuxtApp.$viteImgUrl("homePage/i2.jpg"),
        bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    },
    {
        face: nuxtApp.$viteImgUrl("homePage/i3.jpg"),
        bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    },
    {
        face: nuxtApp.$viteImgUrl("homePage/i4.jpg"),
        bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    },
    {
        face: nuxtApp.$viteImgUrl("homePage/i5.jpg"),
        bigImg: nuxtApp.$viteImgUrl("homePage/bi1.png"),
    },
]

</script>
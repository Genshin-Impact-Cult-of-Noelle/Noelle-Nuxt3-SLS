/*
 * @Date: 2022-07-06 11:35:24
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-06 15:16:46
 * @FilePath: \Noelle-Nuxt3-SLS\plugins\network.ts
 */
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((app)=>{

    app.provide("api",()=>{
        return $fetch("https://fast.api.noelle.cool/friendUrl",{
            method:"POST",
        })
    })


})
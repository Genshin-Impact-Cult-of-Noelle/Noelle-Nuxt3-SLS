import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((app)=>{
    app.provide("viteImgUrl",(path:string)=>{
        const res = `/love/assets/image/${path}`;
        return res;
    })
})
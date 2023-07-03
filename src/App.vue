<!-- App.vue 是父组件 -->
<template>
    <div class="w-screen h-scr  bg-black">
         <!-- 内置组件 component:渲染其他的组件的组件-->
         <!-- <component :is=""/> -->
         <!-- component组件的is属性指向谁就渲染谁 -->

         <router-link :to="{path:'/IndexView/123'}"></router-link>
        <!-- <router-link to="/IndexView"></router-link> -->
        <router-view></router-view>
        <!-- <IndexView/> -->

    </div>
</template>
<script>
    // 动态返回组件的这些逻辑 全部单独封装为一个js文件

    import IndexView from '@/views/IndexView.vue'; // 不加 .vue 后缀名 不会 报错 放入index.jsrouter中
    const viewMap ={
        IndexView,
        // HomeView,
        // MineView,
    }
    export default {
        components:{IndexView},//注册
        data(){
            return{
                // visibleView:'HomeView'
                visibleView:'index'
            }
        },
        // 计算属性 动态返回一个数据的data
        // computed  === methods + data
        computed:{
            currentComponent(){
                return viewMap[this.visibleView]
            }
        },
        beforeCreate(){
            window.onhashchange=()=>{
                this.visibleView = location.hash.replace('#','')
            }
        }
    };
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
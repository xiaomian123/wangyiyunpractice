<!-- App.vue 是父组件 -->
<template>
    <div class="w-screen h-screen bg-black">
         <!-- 内置组件 component:渲染其他的组件的组件-->
         <!-- <component :is=""/> -->
         <!-- component组件的is属性指向谁就渲染谁 -->
        <IndexView/>
        <!-- <IndexView/>
        <IndexView/> -->
    </div>
</template>
<script>
    // 动态返回组件的这些逻辑 全部单独封装为一个js文件
    // import IndexView from '@/views/IndexView.vue'; // 加 .vue 后缀名会报错
    import IndexView from '@/views/IndexView.vue'; // 不加 .vue 后缀名 不会 报错
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
            }
        },
        // 计算属性 动态返回一个数据的data
        // computed  === methods + data
        computed:{
            currentComponent(){
                return viewMap[this.visibleView]
            }
        },
    };
</script>
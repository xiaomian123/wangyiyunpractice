<template>
    <div class=" w-[320px] h-[320px] overflow-auto bg-slate-100">
       <!-- <h1>Foo view</h1> -->
       <button @click="fn">toggle dialog</button>
       <!-- <Dialog title="警告" message="提示内容" /> -->
    </div>
</template>
<script>
    import Dialog from '@/components/Dialog';
import { mapState ,mapMutations} from '@/vuex';
// import { getUserAccount ,getUserDetail} from '@/vuex';
    // import store from '@/store'

    export default {
        computed:{
            ...mapState(['count','msg']),
            // count(){
            //     return this.$store.state.count;
            // }
        },

        methods:{
            // increase(){ // 写法1
            //     store.mutations.increase();
            // },
            // increase:store.mutations.increase, // 写法2
            // ...mapMutations(['increase']), 
            fn(){
                Dialog({title:"警告" ,message:"提示内容"}).then(function(){
                    console.log('点击了确定')
                }).catch(function(){
                    console.log('点击了取消')
                })
            }
        }
        // created:{
        //     // Dialog title="警告" message="提示内容" 
        // }
    }
</script>
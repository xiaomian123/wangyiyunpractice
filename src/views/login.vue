<template>
  <div>
    <h1>扫码登录</h1>
    <img :src="qrcode" alt="" />
  </div>
</template>
<script>
import { checkQrStatus, getQrInfo, getQrKey } from '@/request'
// import store 
// import func from 'vue-editor-bridge';
    export default {
        name:'Login',
        data(){
            return{
                qrcode:'',

            }
        },
        methods:{
            pollingCheck(key,interval=1000){
                const timer = setInterval(()=>{
                    // const res = await checkQrStatus(key);
                    if(res.data.code === 800){
                        alert('此二维码已过期，强刷新后重试');
                        clearInterval(timer)
                    }
                    if(res.data.code === 803){
                        clearInterval(timer);
                        console.log(res.data.cookie);
                        store.set('__m__cookie',res.data.cookie)
                    }
                },interval);
                this.$on('hook:beforeDestroy',()=>
                    clearInterval(timer)
                );
            }
        },
        async created(){
            const res = await getQrKey().catch((err) =>{
                console.log(err)
            });
            const qrInfo = await getQrInfo(res.data.data.unikey).catch((err)=>
            console.log(err))
            console.log(qrInfo)
            this.qrcode = qrInfo.data.data.qrimg;
            this.pollingCheck(res.data.data.unikey)
        },
        beforeDestroy(){
            // 页面销毁前桌一些事
            console.log('beforeDestroy')
        }
    }
</script>
<template>
  <div class="bg-slate-100 w-screen h-screen">
    <h1>扫码登录</h1>
    <!-- <img :src="qrcode" alt="" /> -->

    <div>
      <!-- 顶部标题 -->
      <div class="w-[88vw] mx-auto flex justify-between pt-[7vw]">
          <Icon icon="formkit:left" width="4vw" heigt="4vw" @click.native="$router.push('/home')" />
          <p class="text-[5vw] text-[#737373]">游客登录</p>
      </div>
      <!-- logo -->
      <div class="flex justify-center pt-[15vw]">
          <!-- <img src="..atic/logo.fill.svg" alt="SVG Image" class="w-[39vw] h-[7vw]" /> -->
          <Icon icon="ri:netease-cloud-music-fill" color="red" class=" w-[7vw] h-[7vw]" />
          <p class="text-[5vw] font-[600] pl-3">网易云音乐</p>
      </div>
      <!-- 二维码 -->
      <div v-if="state == 0">
          <div class="flex justify-center pt-[10vw]">
              <img :src="qrcode" alt="" />
          </div>
          <div class="flex justify-center pt-[11vw]">
              <p>使用<span class="text-[#1d7ac3]">网易云音乐APP</span>扫码登录</p>
          </div>
      </div>
      <div v-if="state == 800" class="pt-[10vw] relative">
          <div class="flex justify-center">
              <img :src="qrcode" alt="" />
          </div>
          <div class="absolute top-[14vw] left-[30vw] bg-[#dfdfdf] w-[40vw] h-[40vw]"
              :style="{ backgroundColor: `rgba(255,255,255,.5)` }">
              <div class="text-center w-[20vw] h-[8vw] bg-[#fe020f] rounded-[16vw] leading-[8vw] text-[#fff] mx-auto mt-[16vw]"
                  @click="shua">
                  点击刷新
              </div>
          </div>
          <div class="flex justify-center pt-[11vw]">
              <p>使用<span class="text-[#1d7ac3]">网易云音乐APP</span>扫码登录</p>
          </div>
      </div>

      <div v-if="state == 803">
          <div class="flex justify-center mt-[10vw]">
              <!-- <img src="..atic/logo.fill.svg" alt="SVG Image" class="w-[39vw] h-[7vw]" /> -->
          </div>
          <div class="flex justify-center mt-[8vw]">
              <p class="text-[5vw]">扫描成功</p>
          </div>
          <div class="flex justify-center mt-[6vw]">
              <p>请在手机上确认登录</p>
          </div>
      </div>
  </div>


  </div>
 
</template>
<script>
import { getQrKey, getQrInfo, checkQrStatus } from '@/request'; //引入第一个接口
import store from 'storejs'; //安装 storejs   npm i storejs -s 放 request index.js里面
export default {
  name: 'Login',
  data() {
    return {
      qrcode: '',
      state: 0,
    };
  },
  methods: {
    // 放方法
    pollingCheck(key, interval = 1000) {
      // 轮询方法
      const timer = setInterval(async () => {
        const res = await checkQrStatus(key);
        console.log(res);
        if (res.data.code === 800) {
          this.state=800,
           alert('此二维码已经过期，请刷新后重试');
          clearInterval(timer);
        } else if (res.data.code === 803) {
          this.state= 803
          //803登录成功
          clearInterval(timer);
          console.log(res.data.cookie);
          store.set('__m__cookie', res.data.cookie); //保存cookie值到本地
        }
        // this.state = res.data.code
      }, interval);
      this.$on('hook:beforeDestroy', () => clearInterval(timer)); //在要销毁前时，清除定时器
    },
  },
  async created() {
    const res = await getQrKey().catch((err) => {
      // key值
      console.log(err);
    });
    const qrInfo = await getQrInfo(res.data.data.unikey).catch((err) => 
      // 二维码
      console.log(err)
    );

    this.qrcode = qrInfo.data.data.qrimg; // 二维码传入图片节点
    console.log(qrInfo.data.data.qrimg); //请求得到的key值
    this.pollingCheck(res.data.data.unikey); //调用方法
  },
//   beforeDestroy() {
//     // 页面销毁前做一些事
//     console.log('beforeDestroy');
//   },
};
</script>
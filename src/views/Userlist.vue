<template>
  <div class="w-screen h-screen bg-slate-100 flex flex-col">
    <!-- 背景图 -->
    <div class="w-[100vw] h-[82vw] bg-red-400 flex">
      <!-- 头部 -->
      <div
        class="w-[92vw] h-[5vw] ml-[4vw] mt-[12vw] flex justify-between items-center"
      >
        <Icon icon="ep:back" color="white" class="w-[5vw] h-[5vw]" />
        <div
          class="w-[14vw] h-[3.8vw] text-[2vw] bg-[#fff] rounded-[5vw] text-center"
        >
          照片墙
        </div>
        <Icon
          icon="mingcute:more-2-line"
          color="white"
          class="w-[5vw] h-[5vw]"
        />
      </div>
    </div>
    <!-- 资料部分 -->

    <!-- 个人资料 -->
    <div class="w-[92vw] h-[56vw] ml-[4vw] relative">
      <div
        class="w-[92vw] h-[17vw] flex justify-between absolute top-[-11vw] z-[100]"
      >
        <div class="w-[20vw] h-[7vw]"></div>
        <img src="" alt="" class="w-[17vw] h-[17vw] rounded-[50%]" />
        <div
          class="w-[20vw] h-[7vw] text-[3vw] text-[#fff] border rounded-[5vw] flex items-center justify-center"
        >
          TA的照片
        </div>
      </div>
      <div class="w-[92vw] h-[45vw] bg-[#fff] rounded-[3vw] mt-[10vw]">
        <div class="w-[92vw] flex flex-col items-center mt-[10vw]">
          <p
            class="text-[5vw]font-black flex justify-center items-center mt-[1vw]"
          >
            一条猫不吃的咸鱼
          </p>
          <p
            class="w-[45vw] text-[2.5vw] font-black flex justify-center items-center mt-[1vw]"
          >
            <span class="text-[#808080]">100关注</span>|<span
              class="text-[#808080]"
              >100粉丝</span
            >|<span class="text-[#808080]">Lv.8</span>
          </p>
        </div>
        <div class="w-[92vw] h-[5vw] flex justify-center items-center mt-[2vw]">
          <span class="m-[1vw] p-[1vw] text-[2.5vw] border rounded-[2vw]"
            >IP:湖北</span
          >
          <span class="m-[1vw] p-[1vw] text-[2.5vw] border rounded-[2vw]"
            >95后 白羊座</span
          >
          <span class="m-[1vw] p-[1vw] text-[2.5vw] border rounded-[2vw]"
            >湖北 武汉</span
          >
          <span class="m-[1vw] p-[1vw] text-[2.5vw] border rounded-[2vw]"
            >村龄6年</span
          >
        </div>
        <div class="w-[92vw] h-[5vw] flex justify-center items-center mt-[6vw]">
          <router-link :to="{ path:'/Userdatedata'}"></router-link>
          <span
            class="m-[1vw] p-[2vw] text-[3vw] font-black border flex justify-center items-center rounded-[5vw]"
            >编辑资料</span
          >
          <span
            class="m-[1vw] p-[2vw] border flex justify-center items-center rounded-[50%]"
          >
            <Icon icon="bytesize:chevron-bottom" class="w-[2vw] h-[2vw]" />
          </span>
        </div>
      </div>
    </div>
    <!-- 主页、动态、播客选项卡 -->
    <van-tabs v-model="activeName " class="w-[92vw] bg-red-400 ml-[4vw] mt-[2vw] mb-[2vw]">
      <van-tab title="内容" name="a" class=" bg-slate-100 ">
          <!-- 音乐品味 -->
          <div class="w-[92vw] h-[43vw bg-slate-100 ] border rounded-[3vw]">
            <h3 class="w-[84.5vw] ml-[4vw]">音乐品味</h3>
            <div class="w-[84.5vw] h-[28vw]  ml-[4vw] flex">
                <div class="w-[27vw] h-[28vw] border rounded-[3vw] flex flex-col justify-around">
                  <p class=" text-[2.8vw] text-[#7D8186] ml-[2vw]">最新喜欢</p>
                  <span class=" text-[4vw] text-[#50596D] ml-[2vw]">conuning start</span>
                  <span class=" text-[2.5vw] text-[#B1B0B0] ml-[2vw] flex items-center">
                    <Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" color="#B1B0B0" class="w-[2.5vw] h-[2.5vw]"/>
                    喜欢的音乐
                  </span>
                </div>
                <div class="w-[27vw] h-[28vw] border rounded-[3vw] flex flex-col justify-around">
                  <p class=" text-[2.8vw] text-[#7D8186] ml-[2vw]">累积听歌</p>
                  <span class=" text-[4vw] text-[#50596D] ml-[2vw]">7418首</span>
                  <span class=" text-[2.5vw] text-[#B1B0B0] ml-[2vw] flex items-center">
                    <Icon icon="icon-park-solid:ranking-list" color="#B1B0B0" class="w-[2.5vw] h-[2.5vw]"/>
                    听歌排行
                  </span>
                </div>
                <div class="w-[27vw] h-[28vw] border rounded-[3vw] flex flex-col justify-around">
                  <p class=" text-[2.8vw] text-[#7D8186] ml-[2vw]">最新喜欢</p>
                  <span class=" text-[4vw] text-[#50596D] ml-[2vw]">conuning start</span>
                  <span class=" text-[2.5vw] text-[#B1B0B0] ml-[2vw] flex items-center">
                    <Icon icon="gg:sand-clock" color="#B1B0B0" class="w-[2.5vw] h-[2.5vw]"/>
                    黑胶时光机
                  </span>
                </div>
            </div>
          </div>
          <!-- 歌单 -->
      <div class="w-[92vw] h-[170.5vw] ml-[4vw] border rounded-[3vw]">
         <div class="text-[4.2vw] w-[82vw] h-[5vw] mt-[4.5vw] mb-[2vw] font-black">
            创建的歌单<span class="text-[2.7vw] text-[#999999]">(121个)</span>
         </div>
         <ul class="w-[82vw] max-h-[149vw]">
            <li class="w-[82vw] h-[12.5vw]">
                <img src="" alt="" class="w-[12.5vw] h-[12.5vw] rounded-[3vw]">
                <div>
                  <p class="text-[4.2vw]"></p>
                  <p class="text-[2.7vw] text-[#999999]"></p>
                </div>
            </li>
         </ul> 
         <div class="w-[82vw] h-[10vw] text-[2.7vw] text-[#999999] flex items-center justify-center border-t-[1px]">
            查看全部 
            <Icon icon="mingcute:right-line" color="#999" />
         </div>
      </div>
      <!-- 基本信息 -->
      <div class="w-[92vw] h-[58vw] ml-[4vw] mt-[4.5vw] rounded-[3vw] bg-[#fff] flex flex-col">
        <div class=" w-[82vw] h-[5vw] ml-[4vw] mt-[4.5vw] mb-[2vw] font-black flex justify-between items-center">
            <span class="text-[4.2vw] font-black">基本信息</span>
            <span class="w-[20vw] h-[5.8vw] border rounded-[3vw] text-[2.6vw] flex items-center justify-center">领取村民证</span>
        </div>
        <div class="w-[82vw] h-[34vw] ml-[4vw]">
            <p class=" h-[8.7vw] text-[3.2vw]">村龄:6年度发生的发生阿斯顿发</p>
            <p class=" h-[8.7vw] text-[3.2vw]">年龄:95后 白羊座</p>
            <p class=" h-[8.7vw] text-[3.2vw]">地区:湖北 武汉</p>
            <p class=" h-[8.7vw] text-[3.2vw]">个人简介: 一条猫不吃的咸鱼</p>
          
        </div>
        <div class="w-[82vw] h-[10vw] ml-[4vw] text-[2.7vw] text-[#999999] flex items-center justify-center border-t-[1px]">
            查看全部 
            <Icon icon="mingcute:right-line" color="#999" />
         </div>
      </div>

      </van-tab>
      <van-tab title="动态" name="b">动态</van-tab>
      <van-tab title="播客" name="c">播客</van-tab>
    </van-tabs>
      
  </div>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      activeName: 'a',
    };
  },
};
</script>
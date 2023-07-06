<template>
  <div class="w-screen h-screen overflow-auto bg-slate-100">
    <!-- top搜索栏 -->
    <div
      class="w-[92vw] h-[8vw] flex justify-around items-center mt-[5vw] ml-[4vw]"
    >
      <span>
        <Icon icon="ph:arrow-left-bold" />
      </span>

      <div class="inp flex w-[74vw] h-[8vw] items-center border rounded-[10vw]">
        <Icon icon="mingcute:search-line" color="#999" class="ml-[3vw]" />
        <input
          type="text"
          name=""
          id=""
          class="w-[65vw]"
          @click="returnout = !returnout"
        />
        <Icon icon="lucide:scan-line" />
      </div>
      <span class="text-[4vw]">搜索</span>
    </div>

    <!-- 菜单 -->
    <div class="w-[92vw] h-[9vw] mt-[3vw] ml-[4vw]">
      <ul class="w-[92vw] h-[9vw] flex">
        <li class="w-[24vw] h-[9vw] flex justify-center items-center border-r">
          <div class="w-[14vw] h-[5vw] flex justify-center items-center">
            <Icon
              icon="icon-park-solid:people"
              color="red"
              class="w-[4vw] h-[4vw]"
            />
            <span class="text-[4vw]">歌手</span>
          </div>
        </li>
        <li class="w-[24vw] h-[9vw] flex justify-center items-center border-r">
          <div class="w-[14vw] h-[5vw] flex justify-center items-center">
            <Icon icon="entypo:music" color="red" class="w-[4vw] h-[4vw]" />
            <span class="text-[4vw]">曲风</span>
          </div>
        </li>
        <li class="w-[24vw] h-[9vw] flex justify-center items-center border-r">
          <div class="w-[14vw] h-[5vw] flex justify-center items-center">
            <Icon
              icon="ic:baseline-music-note"
              color="red"
              class="w-[4vw] h-[4vw]"
            />
            <span class="text-[4vw]">专区</span>
          </div>
        </li>
        <li class="w-[24vw] h-[9vw] flex justify-center items-center">
          <div class="w-[14vw] h-[5vw] flex justify-center items-center">
            <Icon icon="charm:microphone" color="red" class="w-[4vw] h-[4vw]" />
            <span class="text-[4vw]">识曲</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 搜索历史 -->
    <div class="w-[92vw] h-[14vw] mt-[3vw] ml-[4vw]">
      <div class="w-[92vw] h-[4vw] flex justify-between items-center">
        <span class="text-[4vw] font-bold">搜索历史</span>
        <Icon
          icon="fa6-regular:trash-can"
          color="#999"
          class="w-[4vw] h-[4vw]"
        />
      </div>
      <div class="w-[92vw] h-[10vw]"></div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="w-[92vw] h-[14vw] mt-[3vw] ml-[4vw]">
      <div class="w-[92vw] h-[4vw] flex justify-between items-center">
        <span class="text-[4vw] font-bold">猜你喜欢</span>
        <Icon
          icon="material-symbols:refresh"
          color="#999"
          class="w-[4vw] h-[4vw]"
        />
      </div>
      <div class="w-[92vw] h-[10vw]"></div>
    </div>
    <!-- 榜单 -->
    <div class="w-[92vw] h-[200vw] mt-[3vw] ml-[4vw]  bg-slate-800">
      <div
        class="menu flex  overflow-auto relative w-[92vw] h-[200vw] bg-slate-500"
      >
        <div class="w-[60vw] h-[190vw] bg-red-400 mr-[3vw]">
          <div class="w-[52vw] h-[10vw] flex bg-[#F1F4F4]">
            <div class="w-[60vw] h-[8vw] mt-[2vw] flex items-center">
              <span class="text-[5vw] font-bold">热搜榜</span>
              <div
                class="w-[12vw] h-[5vw] bg-[#F1F4F4] rounded-[5vw] border flex"
              >
                <Icon icon="ph:play-fill" color="#3f425a" />
                <span class="text-[3vw] text-[#3f425a]">播放</span>
              </div>
            </div>
         
          </div>
          <div
              class="w-[52vw] h-[9vw] flex"
              v-for="(item,index) in hotData"
              :key="item.id"
            >
              <div class="w-[52vw] h-[9vw] flex items-center">
                <div :class="index < 3 ? 'text-red-600 font-bold' : black" class="w-[5vw] h-[8vw]">
                  {{ index + 1 }}
                </div>
                <div class="w-[40vw] h-[9vw] flex items-center">
                  <span class="text-[3vw] "> {{ item.searchWord }}</span> 
                  <!-- <img :src="item.iconUrl" alt="" class="w-[3vw] h-[3vw]"> 
                  <img v-if="imageSrc" :src="imageSrc" alt="Image" /> -->
                </div>
              </div>
            </div>
        </div>
        <div class="w-[60vw] h-[190vw] bg-red-400 mr-[3vw]">
          <div class="w-[52vw] h-[10vw] flex bg-[#F1F4F4]">
            <div class="w-[60vw] h-[8vw] mt-[2vw] flex items-center">
              <span class="text-[5vw] font-bold">热搜榜</span>
              <div
                class="w-[12vw] h-[5vw] bg-[#F1F4F4] rounded-[5vw] border flex"
              >
                <Icon icon="ph:play-fill" color="#3f425a" />
                <span class="text-[3vw] text-[#3f425a]">播放</span>
              </div>
            </div>
         
          </div>
          <div
              class="w-[52vw] h-[9vw] flex"
              v-for="(item,index) in hotData"
              :key="item.id"
            >
              <div class="w-[52vw] h-[9vw] flex items-center">
                <div :class="index < 3 ? 'text-red-600 font-bold' : black" class="w-[5vw] h-[8vw]">
                  {{ index + 1 }}
                </div>
                <div class="w-[40vw] h-[9vw] flex items-center">
                  <span class="text-[3vw] "> {{ item.searchWord }}</span> 
                  <!-- <img :src="item.iconUrl" alt="" class="w-[3vw] h-[3vw]"> 
                  <img v-if="imageSrc" :src="imageSrc" alt="Image" /> -->
                </div>
              </div>
            </div>
        </div>
        <div class="w-[60vw] h-[190vw] bg-red-400 mr-[3vw]">
          <div class="w-[52vw] h-[10vw] flex bg-[#F1F4F4]">
            <div class="w-[60vw] h-[8vw] mt-[2vw] flex items-center">
              <span class="text-[5vw] font-bold">热搜榜</span>
              <div
                class="w-[12vw] h-[5vw] bg-[#F1F4F4] rounded-[5vw] border flex"
              >
                <Icon icon="ph:play-fill" color="#3f425a" />
                <span class="text-[3vw] text-[#3f425a]">播放</span>
              </div>
            </div>
         
          </div>
          <div
              class="w-[52vw] h-[9vw] flex"
              v-for="(item,index) in hotData"
              :key="item.id"
            >
              <div class="w-[52vw] h-[9vw] flex items-center">
                <div :class="index < 3 ? 'text-red-600 font-bold' : black" class="w-[5vw] h-[8vw]">
                  {{ index + 1 }}
                </div>
                <div class="w-[40vw] h-[9vw] flex items-center">
                  <span class="text-[3vw] "> {{ item.searchWord }}</span> 
                  <!-- <img :src="item.iconUrl" alt="" class="w-[3vw] h-[3vw]"> 
                  <img v-if="imageSrc" :src="imageSrc" alt="Image" /> -->
                </div>
              </div>
            </div>
        </div>
        <div class="w-[60vw] h-[190vw] bg-red-400 mr-[3vw]">
          <div class="w-[52vw] h-[10vw] flex bg-[#F1F4F4]">
            <div class="w-[60vw] h-[8vw] mt-[2vw] flex items-center">
              <span class="text-[5vw] font-bold">热搜榜</span>
              <div
                class="w-[12vw] h-[5vw] bg-[#F1F4F4] rounded-[5vw] border flex"
              >
                <Icon icon="ph:play-fill" color="#3f425a" />
                <span class="text-[3vw] text-[#3f425a]">播放</span>
              </div>
            </div>
         
          </div>
          <div
              class="w-[52vw] h-[9vw] flex"
              v-for="(item,index) in hotData"
              :key="item.id"
            >
              <div class="w-[52vw] h-[9vw] flex items-center">
                <div :class="index < 3 ? 'text-red-600 font-bold' : black" class="w-[5vw] h-[8vw]">
                  {{ index + 1 }}
                </div>
                <div class="w-[40vw] h-[9vw] flex items-center">
                  <span class="text-[3vw] "> {{ item.searchWord }}</span> 
                  <!-- <img :src="item.iconUrl" alt="" class="w-[3vw] h-[3vw]"> 
                  <img v-if="imageSrc" :src="imageSrc" alt="Image" /> -->
                </div>
              </div>
            </div>
        </div>
        <div class="w-[60vw] h-[190vw] bg-red-400 mr-[3vw]">
          <div class="w-[52vw] h-[10vw] flex bg-[#F1F4F4]">
            <div class="w-[60vw] h-[8vw] mt-[2vw] flex items-center">
              <span class="text-[5vw] font-bold">热搜榜</span>
              <div
                class="w-[12vw] h-[5vw] bg-[#F1F4F4] rounded-[5vw] border flex"
              >
                <Icon icon="ph:play-fill" color="#3f425a" />
                <span class="text-[3vw] text-[#3f425a]">播放</span>
              </div>
            </div>
         
          </div>
          <div
              class="w-[52vw] h-[9vw] flex"
              v-for="(item,index) in hotData"
              :key="item.id"
            >
              <div class="w-[52vw] h-[9vw] flex items-center">
                <div :class="index < 3 ? 'text-red-600 font-bold' : black" class="w-[5vw] h-[8vw]">
                  {{ index + 1 }}
                </div>
                <div class="w-[40vw] h-[9vw] flex items-center">
                  <span class="text-[3vw] "> {{ item.searchWord }}</span> 
                  <!-- <img :src="item.iconUrl" alt="" class="w-[3vw] h-[3vw]"> 
                  <img v-if="imageSrc" :src="imageSrc" alt="Image" /> -->
                </div>
              </div>
            </div>
        </div>
        <div class="w-[60vw] h-[190vw] bg-red-400 mr-[3vw]">
          <div class="w-[52vw] h-[10vw] flex bg-[#F1F4F4]">
            <div class="w-[60vw] h-[8vw] mt-[2vw] flex items-center">
              <span class="text-[5vw] font-bold">热搜榜</span>
              <div
                class="w-[12vw] h-[5vw] bg-[#F1F4F4] rounded-[5vw] border flex"
              >
                <Icon icon="ph:play-fill" color="#3f425a" />
                <span class="text-[3vw] text-[#3f425a]">播放</span>
              </div>
            </div>
         
          </div>
          <div
              class="w-[52vw] h-[9vw] flex"
              v-for="(item,index) in hotData"
              :key="item.id"
            >
              <div class="w-[52vw] h-[9vw] flex items-center">
                <div :class="index < 3 ? 'text-red-600 font-bold' : black" class="w-[5vw] h-[8vw]">
                  {{ index + 1 }}
                </div>
                <div class="w-[40vw] h-[9vw] flex items-center">
                  <span class="text-[3vw] "> {{ item.searchWord }}</span> 
                  <!-- <img :src="item.iconUrl" alt="" class="w-[3vw] h-[3vw]"> 
                  <img v-if="imageSrc" :src="imageSrc" alt="Image" /> -->
                </div>
              </div>
            </div>
        </div>

        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
     
     
      
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
// import BScroll from '@better-scroll/core';

export default {
  data() {
    return {
      returnout: false,
      hotData: [],
    };
  },
  name: 'Search',
  // props: ['search'],
  components: { scroll },
  created() {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/search/hot/detail'
      )
      .then((res) => {
        this.hotData = res.data.data;
         
        console.log(this.hotData);
      })

      .catch((err) => console.log(err));
  },
  methods:{
    removeImage() {
      this.imageSrc = ''; // 将图片路径置为空，从而移除img标签
    }
  }
};
</script>
<style>
.wrapper {
  white-space: nowrap;
}
.scroll-content {
  display: inline-block;
}
</style>
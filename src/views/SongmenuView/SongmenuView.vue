<template>
  <div class="w-screen h-screen overflow-auto bg-[#957E4F]">
    <!-- 歌单详情 -->
    <div class="w-[92vw] h-[59vw] mt-[11vw] ml-[4vw]">
      <!-- top搜索栏 -->
      <div class="w-[92vw] h-[8vw] flex justify-between items-center mt-[5vw]">
        <div class="flex w-[20vw] h-[5vw] items-center justify-between">
          <Icon icon="ph:arrow-left-bold" color="white" />
          <span class="text-[4vw] text-[#fff]"> 歌单</span>
        </div>

        <div class="flex w-[20vw] h-[5vw] items-center justify-between">
          <Icon icon="mingcute:search-line" color="white" class="ml-[3vw]" />
          <!-- color="white"  -->
          <Icon icon="mingcute:more-2-fill" color="white" />
        </div>
      </div>
      <!-- 歌单内容 -->

      <div class="w-[92vw] h-[25vw] mt-[5vw] flex justify-between items-center">
        <img src="" alt="" class="w-[25vw] h-[24vw]" />

        <div class="w-[65vw] h-[25vw] bg-red-400">
          <div class="w-[65vw] h-[10vw] flex justify-between items-center">
            <span class="text-[4vw] text-[#fff]">{{  }}</span>
            <div
              class="w-[5vw] h-[5vw] rounded-[5vw] bg-[#A09173] flex justify-center items-center"
            >
              <Icon icon="material-symbols:expand-more" color="white" />
            </div>
          </div>
          <div class="w-[65vw] h-[13vw] flex flex-wrap">
            <div class="w-[65vw] h-[8vw] flex items-center">
              <div class="w-[6vw] h-[6vw]">
                <img src="" alt="" class="w-[6vw] h-[6vw] relative" />
                <Icon
                  icon="ic:round-stars"
                  color="#f7d25a"
                  class="absolute bottom-0 right-0"
                />
              </div>
              <span class="text-[3vw] text-[#DDC9A7] ml-[2vw]">{{
               
              }}</span>
              <div
                class="w-[11vw] h-[5vw] rounded-[5vw] bg-[#A09173] flex justify-center items-center text-[3vw] text-[#DDC9A7] ml-[2vw]"
              >
                <Icon icon="material-symbols:add" color="#fff" />
                <span class="text-[3vw] text-[#DDC9A7]">关注</span>
              </div>
            </div>
            <div class="w-[65vw] h-[5vw] flex">
              <div
                class="w-[12vw] h-[4vw] rounded-[1 vw] bg-[#A09173] flex text-[2vw] justify-center items-center"
              >
                <span class="w-[8vw] h-[4vw] text-[3vw] text-[#fff] ml-[1vw]"
                  >6.0分</span
                >
                <Icon
                  icon="mingcute:right-line"
                  color="#fff"
                  class="w-[3vw] h-[3vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[92vw] h-[4vw] flex mt-[4vw] items-center justify-between">
        <p class="w-[85vw] h-[4vw] overflow-hidden text-[3vw] text-[#DDC9A7]">
          第一首推，史上最全原以为么有专业撒旦法萨芬继续按哦麻辣香锅记三分一直加班费听建议直接
        </p>
        <Icon icon="mingcute:right-line" color="#fff" class="w-[4vw] h-[4vw]" />
      </div>
      <div class="w-[92vw] h-[4vw] flex mt-[5vw] justify-between items-center">
        <div
          class="w-[29vw] h-[10vw] flex items-center justify-center rounded-[10vw] bg-[#B7A57A] text-[#fff] text-[3vw]"
        >
          <Icon
            icon="majesticons:share"
            color="white"
            class="w-[5vw] h-[5vw]"
          />
          9551
        </div>
        <div
          class="w-[29vw] h-[10vw] flex items-center justify-center rounded-[10vw] bg-[#B7A57A] text-[#fff] text-[3vw]"
        >
          <Icon icon="humbleicons:chat" color="white" class="w-[5vw] h-[5vw]" />
          9551
        </div>
        <div
          class="w-[29vw] h-[10vw] flex items-center justify-center rounded-[10vw] bg-[#FF2658] text-[#fff] text-[3vw]"
        >
          <Icon
            icon="fluent:collections-20-filled"
            color="white"
            class="w-[5vw] h-[5vw]"
          />
          9551
        </div>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <div class="w-[100vw] mt-[5vw ] rounded-[2vw] bg-[#ECEBE2]">
      <!-- 广告 -->
      <div
        class="w-[94.5vw] h-[11vw] ml-[4vw] flex justify-between items-center"
      >
        <div class="flex">
          <Icon icon="quill:vip" color="red" class="w-[5vw] h-[5vw]" />
          <div class="text-[3vw] ml-[2vw]">
            <span>含</span><span class="text-[blue]">243</span>首VIP专享歌曲
          </div>
        </div>
        <div class="flex">
          <div class="text-[#a8a49c] text-[3vw]">VIP仅￥0.22/天</div>
          <Icon
            icon="mingcute:right-line"
            color="#a8a49c"
            class="w-[4vw] h-[4vw]"
          />
        </div>
      </div>
      <!-- 列表详情 -->
      <div class="w-[100vw] flex bg-slate-100 flex-wrap">
        <!-- 播放按钮 -->
        <div
          class="w-[92vw] h-[15vw] ml-[4vw] flex justify-between items-center"
        >
          <div class="h-[5vw] flex items-center">
            <Icon
              icon="heroicons-solid:play"
              color="red"
              class="w-[5vw] h-[5vw]"
            />
            <div class="w-[28vw] ml-[3vw] text-[3.5vw]">
              播放全部
              <span class="text-[3vw] text-[#aaa]">(555)</span>
            </div>
          </div>
          <div class="w-[13vw] h-[5vw] flex justify-between">
            <Icon
              icon="material-symbols:download-sharp"
              class="w-[5vw] h-[5vw]"
            />
            <Icon icon="icon-park:list" class="w-[5vw] h-[5vw]" />
          </div>
        </div>
        <!-- 歌曲 -->
        <div class="w-[92vw] flex">
          <div class="w-[92vw] h-[14.5vw] flex">
            <div class="w-[5vw] h-[5vw] text-[#aaa] text-[4vw]"></div>
            <div class="w-[78.5vw] h-[7.5vw] flex flex-wrap">
              <div class="w-[78.5vw] h-[3.1vw] text-[3.1vw]"></div>
              <div
                class="w-[78.5vw] h-[2.5vw] text-[2.5vw] text-[#aaa] overflow-clip flex"
              >
                <span class="w-[8.2vw] h-[2.5vw]"></span>
              </div>
            </div>
            <Icon icon="ri:more-2-fill" color="#aaa" class="w-[4vw] h-[4vw]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import axios from 'axios';
// import { songDetails, songInfo } from '@/request/index.js'; //引入
import { fetchToplistDetail } from "@/request/index.js";


export default {
  name: 'Songmenu',
  data() {
    return {
      

      // songList: [],
      // songList1: [],
      res:[]
    };
  },
  methods: {},
  // async created() {
  //   console.log(this.$route);
  //   songDetails(this.$route.query.id).then((res) => {
  //     console.log(res);
  //     this.songList = res.data.playlist;
  //     console.log(this.songList);
  //   });
  //   console.log(songDetails())
  //   songInfo(this.$route.query.id).then((res) => {
  //     console.log(res);
  //     this.songList1 = res.data.songs;
  //     console.log(this.songList1);
  //   });
  //   // console.log(songDetail(this.$route.query.id));
  // },
  async created() {
      // this.local();
      // axios
      //     .get(
      //         `https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=${this.id}`
      //     )
      //     .then((res) => {
      //         this.musicData = res.data
      //     })
      //     .catch((err) => {
      //         console.log(err);
      //     });
      // axios
      //     .get(
      //         `https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/track/all?id=${this.id}`
      //     )
      //     .then((res) => {
      //         this.musicmMean = res.data;
      //     })
      //     .catch((err) => {
      //         console.log(err);
      //     });
      this.res = await fetchToplistDetail()
      console.log(this.res)
        console.log(this.res[0])
  },
};
</script>
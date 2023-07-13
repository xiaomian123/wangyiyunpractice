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
        <img :src="songList.coverImgUrl" alt="" class="w-[25vw] h-[24vw] rounded-[3vw]" />

        <div class="w-[65vw] h-[25vw] bg-red-400">
          <div class="w-[65vw] h-[10vw] flex justify-between items-center">
            <span class="w-[60vw] text-[4vw] text-[#fff]">{{songList.name}}</span>
            <div
              class="w-[5vw] h-[5vw] rounded-[10vw] bg-[#A09173] flex justify-center items-center"
            >
              <Icon icon="material-symbols:expand-more" color="white" />
            </div>
          </div>
          <div class="w-[65vw] h-[13vw] flex flex-wrap">
            <div class="w-[65vw] h-[8vw] flex items-center">
              <div class="w-[6vw] h-[6vw]">
                <img :src="songList.creator.avatarUrl" alt="" class="w-[6vw] h-[6vw] relative rounded-[10vw]" />
                <Icon
                  icon="ic:round-stars"
                  color="#f7d25a"
                  class="absolute bottom-0 right-0"
                />
              </div>
              <span class="text-[3vw] text-[#DDC9A7] ml-[2vw]">{{songList.creator.nickname}}</span>
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
                  >9.1分</span
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
        <p class="w-[88vw] h-[4vw] overflow-hidden text-[3vw] text-[#DDC9A7]">
          {{ songList.description }}
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
          {{ songList.shareCount }}
        </div>
        <div
          class="w-[29vw] h-[10vw] flex items-center justify-center rounded-[10vw] bg-[#B7A57A] text-[#fff] text-[3vw]"
        >
          <Icon icon="humbleicons:chat" color="white" class="w-[5vw] h-[5vw]" />
          {{ songList.commentCount }}
        </div>
        <div
          class="w-[29vw] h-[10vw] flex items-center justify-center rounded-[10vw] bg-[#FF2658] text-[#fff] text-[3vw]"
        >
          <Icon
            icon="fluent:collections-20-filled"
            color="white"
            class="w-[5vw] h-[5vw]"
          />
          {{ songList.subscribedCount }}
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
            <span>含</span><span class="text-[blue]">{{ songList.trackCount }}</span>首VIP专享歌曲
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
              <span class="text-[3vw] text-[#aaa]">({{ songList.trackCount }})</span>
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
        <div class="w-[92vw] flex ml-[4vw]" v-for="(item,index) in songList1" :key="item.id">
          <div class="w-[92vw] h-[12vw] flex items-center justify-between">
            <div class="w-[5vw] h-[5vw] text-[#aaa] text-[4vw]">{{ index+1 }}</div>
            <div class="w-[78.5vw] h-[12vw] flex flex-wrap">
              <div class="w-[78.5vw] h-[5vw] text-[3.5vw]">{{ item.name }}</div>
              <div
                class="w-[78.5vw] h-[4vw] text-[2vw] text-[#aaa] overflow-clip flex"
              >
                <span class="text-[2vw]  h-[4vw]">{{item.ar[0].name}} - {{ item.al.name }}</span>
              </div>
            </div>
            <Icon icon="ri:more-2-fill" color="#aaa" class="w-[4vw] h-[4vw]" />
          </div>
        </div>
        <div class="w-[100vw] h-[20vw] bg-black"></div>
      </div> 
    </div>
  </div>
</template>
<script >
import axios from 'axios';
import { songDetails, songInfo } from '@/request/index.js'; //引入
// import { getUserAccount,getUserDetail ,UserId} from '@/request/index.js';
export default {
  name: 'Songmenu',
  data() {
    return {
      // songDetails: '',
      songList: [],
      songdata: [],
      songList1:[],
    };
  },
  methods: {
    local() {
      let url = window.location.href;
      let index = url.lastIndexOf('/') + 1;
      this.id = url.slice(index);
      console.log('189行',this.id)
    },
    
  },

  async created() {
    this.local();//调用本地存储的方法
    console.log('196行',this.local())
    console.log(this.$route);
    console.log(this.$route.params.id);
    songDetails(this.$route.params.id).then((res) => { // 歌单详情
      console.log('200行',res);
      this.songList = res.data.playlist;
      this.songdata = res.data.playlist.tracks;
      console.log('202行',this.songList);
      console.log('203行',this.songdata);
    });
    // console.log('204行',songDetails());
    songInfo(this.$route.params.id).then((res) => {// 歌单歌曲列表
      console.log('206行',res);
      this.songList1 = res.data.songs;
      console.log('208行',this.songList1);
    });
    // console.log(songDetail(this.$route.query.id));

    
    /** 
     *  const res1=await getUserAccount();
      const res2=await getUserDetail(res1.data.account.id);
      const res3=await UserId(res2.data.userPoint.userId);//用户id

      console.log(res2)
      console.log(res3)
      // const userId =res2.data.userPoint.userId;
      // console.log(userId)
     */
     
  },
  
};
</script>
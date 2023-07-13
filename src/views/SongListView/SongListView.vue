<template>
  <div class="mt-3 overflow-auto w-[95vw] ml-[2vw]">
    <div class="flex justify-between items-center w-[95vw]">
      <div class="flex items-center w-[95vw]">
        <h3 class="font-[900]">推荐歌单</h3>
        <Icon icon="mingcute:right-fill" />
      </div>

      <span @click="tuige = !tuige">
        <Icon icon="mingcute:more-2-line" />
      </span>
    </div>
    <div class="text-[#000] dark:text-[#000]">
      <van-popup
        v-model="tuige"
        closeable
        close-icon="close"
        position="bottom"
        :style="{ height: '30%' }"
      >
        <li
          class="list-none w-[50vw] h-[10vw] text-[5vw] relative top-[2vw] left-[4vw]"
        >
          推荐歌单
        </li>
        <li class="list-none relative top-[2vw]"><hr /></li>
        <li class="list-none w-[50vw] h-[10vw] flex relative top-[4vw]">
          <Icon icon="ant-design:like-outlined" width="30" height="30" />
          <p class="text-[5vw] relative top-[1vw]">优先推荐</p>
        </li>
        <li class="list-none w-[50vw] h-[10vw] flex relative top-[4vw]">
          <svg
            t="1688102710427"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2309"
            width="32"
            height="32"
          >
            <path
              d="M903.06 169.31c-48.34-48.76-114.05-76.02-184.27-76.02-70.22 0-135.93 27.26-185.02 76.76l-21.41 21.26-21.51-21.51c-49.34-49.34-115.07-76.51-185.06-76.51-69.99 0-135.72 27.17-185.06 76.51-49.25 48.85-76.52 114.56-76.52 184.78s27.27 135.93 76.77 185.02l81.95 81.96L451.8 870.44l60.27 60.27 60.34-60.2 249.44-248.88 81.92-82.48c48.06-47.26 76.03-114.79 76.03-184.57-0.01-69.78-27.97-137.31-76.74-185.27z m-59.84 309.71l-81.64 82.21L512.14 810.1 263.27 561.22l-82.2-82.21c-68.7-68.13-68.7-180.74 0-248.88 34.35-34.35 79.53-51.52 124.72-51.52s90.37 17.17 124.72 51.52l54.08 54.09h55.31l54.46-54.09c34.07-34.35 79.25-51.52 124.44-51.52s90.37 17.17 124.43 51.52c34.35 33.79 51.24 79.39 51.24 124.44s-16.9 90.66-51.25 124.45z"
              fill="#999999"
              p-id="2310"
            ></path>
          </svg>
          <p class="text-[5vw] relative top-[1vw]">减少推荐</p>
        </li>
        <li class="list-none w-[50vw] h-[10vw] flex relative top-[4vw]">
          <Icon icon="uil:exclamation-circle" width="30" height="30" />
          <p class="text-[5vw] relative top-[1vw]">更多内容</p>
        </li>
      </van-popup>
    </div>
    <div class="flex w-[95vw] relative h-[45vw]">
      <ul class="menu overflow-auto flex w-[95vw] h-[45vw]">
        <div
          ref="wrapper"
          class="wrapper relative flex min-w-[30vw] flex-wrap h-[40vw] mr-[2.5vw] overflow-hidden"
        >
          <div>
            <div
              class="absolute top-[4%] right-[8%] font-[800] text-[#fff] flex items-center z-30"
            >
              <Icon
                icon="ion:infinite-outline"
                class="text-[#fff] w-[6vw] h-[6vw]"
              />
            </div>
            <transition
              name="abc"
              v-for="(item, index) in lunbo"
              :key="item.id"
            >
              <div v-if="visible === index" class="absolute top-0 left-0&quot;">
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[30vw] h-[30vw] rounded-[4vw]"
                />
              </div>
            </transition>
          </div>
          <p
            class="w-[30vw] h-[8vw] absolute top-[4%] right-[8%] text-[2.78vw] text-[#3E4759] scroll-item line-clamp-2"
          >
            {{ resourceData }}
          </p>
        </div>
        <!-- 推荐歌单轮播 -->
        <!-- <div class="w-[31vw] h-[31vw] mr-[2vw]">
            <div
              class="w-[31vw] h-[31vw] border-[1px] overflow-hidden relative rounded-[3vw]"
            >
              <div
                class="absolute top-[4%] right-[8%] font-[800] text-[#fff] flex items-center z-30"
              >
                <Icon
                  icon="ion:infinite-outline"
                  class="text-[#fff] w-[6vw] h-[6vw]"
                />
              </div>
              <transition
                name="abc"
                v-for="(item, index) in lunbo"
                :key="item.id"
              >
                <div
                  v-if="visible === index"
                  class="absolute top-0 left-0&quot;"
                >
                  <img
                    :src="item.uiElement.image.imageUrl"
                    alt=""
                    class="w-[31vw] h-[31vw] rounded-[3vw]"
                  />
                </div>
              </transition>
            </div>
            <p class="text-[2.78vw] text-[#3E4759] scroll-item line-clamp-2">
              {{ item.uiElement.mainTitle.title}}
            </p>
          </div> -->

        <li
          class="relative flex min-w-[30vw] flex-wrap h-[40vw] mr-[2.5vw]"
          v-for="(item, index) in tjgedan"
          :key="index"
          @click="saveIndexToArray(index)"
        >
          <router-link :to="{ path: '/SongmenuView/' }">
            <img
              :src="item.picUrl"
              alt=""
              class="w-[30vw] h-[30vw] rounded-[4vw]"
            />
          </router-link>
          <!-- @click="songDtails(resources[0].resourceId)" -->
          <div class="flex w-[15vw] h-[4vw] absolute right-[2vw] top-[2vw]">
            <Icon icon="gridicons:play" color="white" />
            <span class="w-[11vw] h-[4vw] text-white text-[2vw]">{{
              Math.floor(item.playCount / 10000) + '万'
            }}</span>
          </div>
          <span class="absolute right-[2vw] top-[20vw]">
            <Icon icon="fluent:play-12-filled" color="white" />
          </span>

          <p class="w-[30vw] h-[10vw] text-[3vw] overflow-hidden">
            {{ item.name }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import BScroll from '@better-scroll/core';
import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);
export default {
  props: ['tjgedan', 'lunbo', 'resourceData'],
  data() {
    return {
      tuige: false,
    };
  },
  mounted() {
    // let bs = new BScroll('.wrapper', {
    //   // ...
    //   pullUpLoad: true,
    //   wheel: true,
    //   scrollbar: true,
    //   // and so on
    // });
  },
};
</script>
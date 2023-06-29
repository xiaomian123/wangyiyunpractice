<template>
    <div class="w-screen h-screen overflow-hidden">
      <!-- 头部 -->
      <div class="flex justify-around items-center">
        <Icon icon="mingcute:menu-fill" color="#333" />
        <div class="inp flex w-[80vw] items-center border border-">
          <Icon icon="mingcute:search-line" color="#999" />
          <input
            type="text"
            name=""
            id=""
            placeholder="春暖花开（活死人班凛冬将至）"
            class="w-[70vw]"
          />
        </div>
        <Icon icon="clarity:microphone-solid" color="#333" />
      </div>
  
      <!-- banner -->
      <div class="swiper-container mt-3">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in menu" v-bind:key="item.id">
            <img :src="item.pic" alt="" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows-->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <!-- 歌单 -->
      <div class="flex justify-around items-center">
        <div
          class="flex justify-around items-center flex-wrap"
          v-for="item in menuList"
          v-bind:key="item.id"
        >
          <Icon icon="item[0]" color="red" />
          <span>{{ item[1] }}</span>
        </div>
      </div>
  
      <!-- 推荐歌单 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
        </div>
  
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  import { Icon } from '@iconify/vue2';
  // import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import Swiper from 'swiper';
  import '../node_modules/swiper/css/swiper.css';
  import BScroll from '@better-scroll/core';
  import ScrollBar from '@better-scroll/scroll-bar';
  BScroll.use(ScrollBar);
  export default {
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',
    components: {
      Icon,
      Swiper,
      // SwiperSlide,
    },
    data() {
      return {
        menu: [],
        activeMenuItem: '',
        playlists: [],
        swiper: null,
        menuList: [
          ['solar:calendar-date-bold', '每日推荐'],
          ['material-symbols:radio', '私人漫游'],
          ['prime:book', '歌单'],
          ['prime:book', '排行榜'],
          ['mdi:audiobook', '有声书'],
        ],
        num: 12,
      };
    },
    mounted() {
      this.swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      this.init();
    },
    beforeDestroy() {
      this.scroll.destroy();
    },
    methods: {
      toggleMenu(name) {
        this.activeMenuItem = name;
        this.fetchPlaylists(name);
      },
      fetchPlaylists(cat) {
        axios
          .get(
            'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
            { params: { cat } }
          )
          .then((res) => {
            // console.log(res.data.playlists);
            this.playlists = res.data.playlists;
            this.swiper.update();
          });
      },
      init() {
        this.scroll = new BScroll(this.$refs.scroll, {
          scrollX: true,
          scrollY: false,
          click: true,
          probeType: 1,
          scrollbar: {
            fade: false,
            interactive: true,
            scrollbarTrackClickable: true,
            scrollbarTrackOffsetType: 'clickedPoint', // can use 'step'
          },
        });
        this.scroll.on('scrollEnd', () => {
          console.log('scrollEnd');
        });
        this.scroll.on('scrollStart', () => {
          console.log('scrollStart');
        });
        this.scroll.on('scroll', () => {
          console.log('scroll');
        });
      },
    },
    created() {
      axios
        .get(
          // 'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot'
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
        )
        .then((res) => {
          // this.menu = res.data.tags;
          this.menu = res.data.data.blocks[0].extInfo.banners;
          console.log(res.data.data);
          console.log(res.data.data.blocks[0]);
          console.log(res.data.data.blocks[0].extInfo);
          console.log(res.data.data.blocks[0].extInfo.banners);
          console.log(res.data.data.blocks[0].extInfo.banners[0].pic);
          // return (this.activeMenuItem = this.menu[0].pic);
        })
        // .then((cat) => this.fetchPlaylists(cat))
        .catch((err) => console.log(err));
    },
  };
  </script>
  <style>
  .active {
    color: red;
  }
  .thumb-example {
    width: 100vw;
    height: 40vw;
    background-color: #fff;
  }
  
  .swiper {
    margin-bottom: 10px;
    width: 100vw;
    height: 40vw;
  }
  </style>
  
  
  
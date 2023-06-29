<template>
  <div class="w-screen h-screen overflow-auto bg-[#F8F9F9]">
    <!-- 头部 -->
    <div class="flex justify-around items-center mt-[5vw]">
      <Icon icon="mingcute:menu-fill" color="#333" />
      <div class="inp flex w-[80vw] items-center border rounded-[10vw]">
        <Icon icon="mingcute:search-line" color="#999" class="ml-[3vw]" />
        <input
          type="text"
          name=""
          id=""
          placeholder="春暖花开（活死人班凛冬将至）"
          class="w-[65vw]"
        />
        <Icon icon="lucide:scan-line" />
      </div>
      <Icon icon="clarity:microphone-solid" color="#333" />
    </div>

    <!-- banner -->
    <div class="swiper-container mt-3 mb-3 w-[90vw] rounded-[5vw]">
      <div class="swiper-wrapper rounded-[5vw]">
        <div
          class="swiper-slide rounded-[5vw]"
          v-for="item in menu"
          v-bind:key="item.id"
        >
          <img :src="item.pic" alt="" />
        </div>
      </div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-pagination"></div> -->
      <!-- Add Arrows-->
      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> -->
    </div>

    <!-- 菜单 -->

    <div class="flex w-[95vw] h-[24vw] relative left-[2vw]">
      <ul class="menu flex w-[100vw] overflow-auto ml-[3vw]">
        <li
          v-for="item in menudan"
          :key="item.id"
          class="w-[15vw] mr-[4vw] flex flex-col items-center"
        >
          <div class="w-[20vw] h-[18vw]" :key="item.id">
            <img :src="item.iconUrl" class="w-[20vw] h-[18vw] red-image" />
          </div>
          <p class="w-[20vw] h-[10vw] text-[3vw] text-[#aea4a4] text-center">
            {{ item.name }}
          </p>
        </li>
      </ul>
    </div>

    <!-- 推荐歌单 -->
    <div class=" mt-3 overflow-auto w-[95vw] ml-[2vw]">
      <div class="flex justify-between items-center w-[95vw]">
        <div class="flex items-center w-[95vw]">
          <h3 class="font-[900]">推荐歌单</h3>
          <Icon icon="mingcute:right-fill" />
        </div>
        <Icon icon="mingcute:more-2-line" />
      </div>
      <div class="flex w-[95vw] relative h-[40vw]">
        <ul class="menu overflow-auto flex h-[40vw]">
          <li
            class="flex min-w-[30vw] flex-wrap h-[40vw] mr-[2.5vw]"
            v-for="item in tjgedan"
            :key="item.id"
          >
            <img
              :src="item.picUrl"
              alt=""
              class="w-[30vw] h-[30vw] rounded-[4vw]"
            />
            <p class="w-[30vw] h-[10vw] text-[3vw] overflow-hidden">
              {{ item.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 新歌新碟 -->
    <div class="mt-3 w-[95vw] ml-[2vw]">
      <div class="flex justify-between items-center w-[95vw]">
        <div class="flex items-center">
          <h4 class="font-[900]">新歌新碟</h4>
          <Icon icon="mingcute:right-fill" />
        </div>
        <Icon icon="mingcute:more-2-line" />
      </div>
      <div class="menu overflow-auto flex w-[95vw] relative">
        <ul
          class="flexmin-w-[90vw] h-[70vw] mr-[5vw]"
          v-for="item in newsong"
          :key="item.id"
        >
          <li class="flex min-w-[90vw] flex-wrap h-[70vw]">
            <div class="flex w-[90vw] h-[22vw]">
              <img
                :src="item.resources[0].uiElement.image.imageUrl"
                alt=""
                class="w-[22vw] h-[22vw] rounded-lg"
              />
              <div class="flex w-[66vw] justify-around flex-col ml-[2vw]">
                <p class="h-[8vw] overflow-hidden">
                  {{ item.resources[0].uiElement.mainTitle.title }}
                </p>
                <div class="flex w-[66vw]">
                  <p class="text-[3vw] w-[50vw] overflow-hidden">
                    {{ item.resources[0].uiElement.subTitle.title }}
                  </p>
                  <span
                    class="text-[3vw] w-[15vw] overflow-hidden text-[#ccc]"
                    >{{
                      item.resources[0].resourceExtInfo.artists[0].name
                    }}</span
                  >
                </div>
              </div>
            </div>
            <div class="flex w-[90vw] h-[22vw]">
              <img
                :src="item.resources[1].uiElement.image.imageUrl"
                alt=""
                class="w-[22vw] h-[22vw] rounded-lg"
              />
              <div class="flex w-[66vw] justify-around flex-col ml-[2vw]">
                <p class="h-[8vw] overflow-hidden">
                  {{ item.resources[1].uiElement.mainTitle.title }}
                </p>
                <div class="flex w-[66vw]">
                  <p class="text-[3vw] w-[50vw] overflow-hidden">
                    {{ item.resources[1].uiElement.subTitle.title }}
                  </p>
                  <span
                    class="text-[3vw] w-[15vw] overflow-hidden text-[#ccc]"
                    >{{
                      item.resources[1].resourceExtInfo.artists[0].name
                    }}</span
                  >
                </div>
              </div>
            </div>
            <div class="flex w-[90vw] h-[22vw]">
              <img
                :src="item.resources[2].uiElement.image.imageUrl"
                alt=""
                class="w-[22vw] h-[22vw] rounded-lg"
              />
              <div class="flex w-[66vw] justify-around flex-col ml-[2vw]">
                <p class="h-[8vw] overflow-hidden">
                  {{ item.resources[2].uiElement.mainTitle.title }}
                </p>
                <div class="flex w-[66vw]">
                  <p class="text-[3vw] w-[50vw] overflow-hidden">
                    {{ item.resources[2].uiElement.subTitle.title }}
                  </p>
                  <span
                    class="text-[3vw] w-[15vw] overflow-hidden text-[#ccc]"
                    >{{
                      item.resources[2].resourceExtInfo.artists[0].name
                    }}</span
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 排行榜 -->
    <div class="mt-3 w-[95vw] ml-[2vw] bg-violet-50">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h4 class="font-[900]">排行榜</h4>
          <Icon icon="mingcute:right-fill" />
        </div>
        <Icon icon="mingcute:more-2-line" />
      </div>
      <div class="menu overflow-auto flex w-[95vw] relative">
        <ul
          class="flex min-w-[91vw] ml-1 mr-[4vw] h-[73vw]"
          v-for="item in toplists"
          :key="item.id"
        >
          <li
            class="flex min-w-[90vw] flex-wrap h-[70vw] bg-w mr-4 p-2 box-border rounded-[5vw] shadow mt-1 shadow-black"
          >
            <div class="flex justify-between items-center w-[90vw] h-[10vw]">
              <div class="flex items-center w-[40vw]">
                <h4>{{ item.uiElement.mainTitle.title }}</h4>
                <Icon icon="mingcute:right-fill" />
              </div>
              <span class="text-2 bg-#ccc text-xs">{{
                item.uiElement.mainTitle.titleDesc
              }}</span>
            </div>
            <div class="flex w-[90vw] h-[16vw] items-center">
              <img
                :src="item.resources[0].uiElement.image.imageUrl"
                alt=""
                class="w-[16vw] h-[16vw] rounded-lg"
              />
              <div class="flex w-[56vw] justify-around ml-[2vw] items-center">
                <span class="w-[6vw] h-[8vw] flex text-center text-red-500"
                  >1</span
                >
                <div class="flex w-[56vw] flex-wrap">
                  <p class="w-[56vw] h-[8vw] overflow-hidden text-[4vw]">
                    {{
                      item.resources[0].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>

                  <p class="text-[3vw] w-[58vw] h-[8vw] overflow-hidden">
                    {{ item.resources[0].resourceExtInfo?.songData.alias[0] }}
                  </p>
                </div>
              </div>
              <span class="w-[10vw] h-[8vw] flex text-[2vw] text-red-500">{{
                item.resources[0].uiElement.labelText.text
              }}</span>
            </div>
            <div class="flex w-[90vw] h-[16vw] items-center">
              <img
                :src="item.resources[1].uiElement.image.imageUrl"
                alt=""
                class="w-[16vw] h-[16vw] rounded-lg"
              />
              <div class="flex w-[56vw] justify-around ml-[2vw] items-center">
                <span class="w-[6vw] h-[8vw] flex text-center text-blue-500"
                  >2</span
                >
                <div class="flex w-[56vw] flex-wrap">
                  <p class="w-[56vw] h-[8vw] overflow-hidden text-[4vw]">
                    {{
                      item.resources[1].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>

                  <p class="text-[3vw] w-[58vw] h-[8vw] overflow-hidden">
                    {{ item.resources[1].resourceExtInfo?.songData.alias[0] }}
                  </p>
                </div>
              </div>
              <span class="w-[10vw] h-[8vw] flex text-[2vw] text-red-500">{{
                item.resources[1].uiElement.labelText.text
              }}</span>
            </div>
            <div class="flex w-[90vw] h-[16vw] items-center">
              <img
                :src="item.resources[2].uiElement.image.imageUrl"
                alt=""
                class="w-[16vw] h-[16vw] rounded-lg"
              />
              <div class="flex w-[56vw] justify-around ml-[2vw] items-center">
                <span class="w-[6vw] h-[8vw] flex text-center text-green-700"
                  >3</span
                >
                <div class="flex w-[56vw] flex-wrap">
                  <p class="w-[56vw] h-[8vw] overflow-hidden text-[4vw]">
                    {{
                      item.resources[2].resourceExtInfo?.songData.artists[0]
                        .name
                    }}
                  </p>

                  <p class="text-[3vw] w-[58vw] h-[8vw] overflow-hidden">
                    {{ item.resources[2].resourceExtInfo?.songData.alias[0] }}
                  </p>
                </div>
              </div>
              <span class="w-[10vw] h-[8vw] flex text-[2vw] text-red-500">{{
                item.resources[2].uiElement.labelText.text
              }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 热门话题 -->
    <div class="mt-3 w-[95vw] ml-[2vw]">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h4 class="font-[900]">热门话题</h4>
          <Icon icon="mingcute:right-fill" />
        </div>
        <Icon icon="mingcute:more-2-line" />
      </div>
      <div class="menu overflow-auto flex w-[95vw] relative">
        <ul class="flex bg-red-300 min-w-[85vw] h-[40vw] mr-[2vw] rounded-lg">
          <li
            class="flex min-w-[70vw] flex-wrap h-[30vw] ml-[5vw] mt-[5vw] rounded-lg"
          >
            <div class="flex min-w-[48vw] h-[10vw] flex-wrap">
              <div class="min-w-[48vw] h-[6vw] text-[4vw] flex items-center text-white">
                <Icon icon="icon-park-solid:topic" color="white" />
                {{ huati[0][0] }}
              </div>
              <div class="min-w-[48vw] h-[4vw] text-[3vw] text-neutral-400">
                {{ huati[0][1] }}
              </div>
            </div>
            <div class="flex min-w-[20vw] h-[20vw]">
              <p class="min-w-[48vw] text-[4vw] flex items-center  text-white">
                {{ huati[0][2] }}
              </p>
              <img
                :src="huati[0][3]"
                alt=""
                class="min-w-[20vw] h-[20vw] rounded-lg"
              />
            </div>
          </li>
        </ul>
        <ul class="flex bg-green-700 min-w-[85vw] h-[40vw] mr-[2vw] rounded-lg">
          <li
            class="flex min-w-[70vw] flex-wrap h-[30vw] ml-[5vw] mt-[5vw] rounded-lg"
          >
            <div class="flex min-w-[48vw] h-[10vw] flex-wrap">
              <div class="min-w-[48vw] h-[6vw] text-[4vw] flex items-center  text-white">
                <Icon icon="icon-park-solid:topic" color="white" />
                {{ huati[1][0] }}
              </div>
              <div class="min-w-[48vw] h-[4vw] text-[3vw] text-neutral-400">
                {{ huati[1][1] }}
              </div>
            </div>
            <div class="flex min-w-[20vw] h-[20vw]">
              <p class="min-w-[48vw] text-[4vw] flex items-center  text-white">
                {{ huati[1][2] }}
              </p>
              <img
                :src="huati[1][3]"
                alt=""
                class="min-w-[20vw] h-[20vw] rounded-lg"
              />
            </div>
          </li>
        </ul>
        <ul class="flex bg-blue-300 min-w-[85vw] h-[40vw] mr-[2vw] rounded-lg">
          <li
            class="flex min-w-[70vw] flex-wrap h-[30vw] ml-[5vw] mt-[5vw] rounded-lg"
          >
            <div class="flex min-w-[48vw] h-[10vw] flex-wrap">
              <div class="min-w-[48vw] h-[6vw] text-[4vw] flex items-center  text-white">
                <Icon icon="icon-park-solid:topic" color="white" />
                {{ huati[2][0] }}
              </div>
              <div class="min-w-[48vw] h-[4vw] text-[3vw] text-neutral-400">
                {{ huati[2][1] }}
              </div>
            </div>
            <div class="flex min-w-[20vw] h-[20vw]">
              <p class="min-w-[48vw] text-[4vw] flex items-center  text-white">
                {{ huati[2][2] }}
              </p>
              <img
                :src="huati[2][3]"
                alt=""
                class="min-w-[20vw] h-[20vw] rounded-lg"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 音乐日历 -->
    <div class=" mt-3 w-[95vw] h-[70vw] ml-[2vw]">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h4 class="font-[900]">音乐日历</h4>
          <div
            class="flex rounde-[50%] w-[12vw] h-[4vw] text-[2vw] ml-[2vw] items-center justify-center  bg-[#d3d9e2] border rounded-[5vw]"
          >
            更多
            <Icon icon="mingcute:right-fill" />
          </div>
        </div>
        <Icon icon="mingcute:more-2-line" />
      </div>
      <div
        class="flex w-[90vw] h-[60vw] mt-[5vw] flex-wrap" >
        <div class="flex w-[80vw] h-[25vw] ml-[5vw]" v-for="item in calendars" :key="item.id">
          <div class="flex w-[50vw] h-[25vw] ml-[5vw] flex-wrap">
            <p class="text-[4vw] w-[50vw] h-[10vw]">
              <span class="flex text-[3vw] w-[50vw] text-#ccc">今天{{ newday}}</span>
    
            </p>
            <p class="text-[4vw] w-[50vw] h-[15vw] font-[900]">{{ item.title }}</p>
          </div>
          <div class="flex w-[30vw] h-[25vw] ml-[5vw]">
            <img :src="item.imgUrl" alt="" class="w-[20vw] h-[20vw]" />
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Icon } from '@iconify/vue2';
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import Swiper from 'swiper';
import '../node_modules/swiper/css/swiper.css';
// import BScroll from '@better-scroll/core';
// import ScrollBar from '@better-scroll/scroll-bar';
// BScroll.use(ScrollBar);
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
      // menuList: [
      //   ['solar:calendar-date-bold', '每日推荐'],
      //   ['material-symbols:radio', '私人漫游'],
      //   ['prime:book', '歌单'],
      //   ['prime:book', '排行榜'],
      //   ['mdi:audiobook', '有声书'],
      // ],
      menudan: [],
      tjgedan: [],
      newsong: [],
      toplists: [],
      huati: [
        [
          '最令你感动的那首情歌',
          '456万热度',
          'Saint_Denis:今日份的感动❤“我希望我们两个之间的爱不要变，',
          'https://w.wallhaven.cc/full/l8/wallhaven-l822ql.png',
        ],
        [
          '音乐节',
          '182万热度',
          '芳菲草儿:“烟雨入江南，山水如墨染。”...',
          'https://w.wallhaven.cc/full/1p/wallhaven-1prx91.png',
        ],
        [
          '每个人一首最近单曲循环的歌',
          '63万热度',
          '云音乐VIP:今日推歌',
          'https://w.wallhaven.cc/full/l8/wallhaven-l8223l.jpg',
        ],
      ],
      calendars: [],
      // num: 12,
    };
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 1500,
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
    // this.init();
  },
  // beforeDestroy() {
  //   this.scroll.destroy();
  // },
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
  },
  created() {
    axios
      .get(
        // 'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot'
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        // this.menu = res.data.tags;
        this.menu = res.data.data.blocks[0].extInfo.banners; // banner图片
        this.newsong = res.data.data.blocks[5].creatives; // 新歌新碟
        this.toplists = res.data.data.blocks[3].creatives; // 排行榜数据
      })
      // .then((cat) => this.fetchPlaylists(cat))
      .catch((err) => console.log(err));
    // 菜单数据
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
      )
      .then((res) => {
        this.menudan = res.data.data;
      })
      .catch((err) => console.log(err));
    // 推荐歌单数据
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized'
      )
      .then((res) => {
        this.tjgedan = res.data.result;
        // console.log(res);
        // console.log(this.tjgedan);
      })
      .catch((err) => console.log(err));

    //音乐日历
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
      )
      .then((res) => {
        console.log(res);
        this.calendars = res.data.data.calendarEvents;
        console.log(this.calendars);
        this.newday = new Date().toLocaleDateString().slice(5);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
html {
  background-color: #dee1e6;
}
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
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
</style>



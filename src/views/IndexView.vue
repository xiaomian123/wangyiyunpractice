<template>
  <div :class="{ dark: switchCheckStatus }">
    <div
      class="w-screen h-screen overflow-auto bg-slate-100 dark:bg-gray-900 dark:text-[#fff]"
    >
      <!-- 头部 -->
      <!-- <TopView></TopView> -->
      <div class="flex justify-around items-center mt-[5vw]">
        <span @click="topleftclick = !topleftclick">
          <Icon icon="mingcute:menu-fill" color="#333" />
        </span>

        <div class="inp flex w-[80vw] items-center border rounded-[10vw]">
          <router-link :to="{ path: '/SearchView' }">
            <Icon icon="mingcute:search-line" color="#999" class="ml-[3vw]" />
          </router-link>
          <!-- <router-view /> -->
          <input
            type="text"
            name=""
            id=""
            placeholder="春暖花开(活死人班凛冬将至)"
            class="w-[65vw]"
          />
          <Icon icon="lucide:scan-line" />
        </div>
        <Icon icon="clarity:microphone-solid" color="#333" />
      </div>
      <van-popup
        v-model="topleftclick"
        position="left"
        :style="{ width: '80%', height: '100%', backgroundColor: '#F5F5F5' }"
      >
        <div :class="{ dark: switchCheckStatus }">
          <div
            class="bg-[#F5F5F5] text-[#000] dark:bg-gray-900 dark:text-[#000]"
          >
            <!-- 头部 -->
            <div
              class="flex justify-between items-center bg-[#F5F5F5] text-[#000] dark:bg-gray-900 dark:text-[#fff]"
            >
              <p class="flex items-center text-[black] m-[1vw] p-[1vw]">
                <img
                  class="w-[6vw] h-[6vw] rounded-[50%]"
                  src="https://p1.music.126.net/OyMBS2CywJBgyd4so5bl5Q==/109951164148707992.jpg?param=180y180"
                  alt=""
                />
                <span
                  class="ml-[4vw] text-[3vw] text-[#000] dark: dark:text-[#fff]"
                  >一条猫不吃的咸鱼</span
                >
                <Icon
                  icon="simple-line-icons:arrow-up"
                  class="text-[#000] dark: dark:text-[#fff]"
                  :rotate="1"
                />
              </p>
              <Icon icon="mdi:line-scan" class="shaoma" />
            </div>
            <!-- 黑胶会员 -->
            <div
              class="w-[72vw] h-[26vw] ml-[4vw] pt-[2vw] px-[3vw] pb-[3.5vw] mt-[2vw] mb-[3vw] flex flex-col justify-between text-[3vw] bg-gradient-to-r bg-[#4E4544] rounded-2xl"
            >
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-[3.89vw] text-[#fce3e1]">开通黑胶VIP</p>
                  <p class="text-[#a08d89]">立享超21项专属特权 ></p>
                </div>
                <div
                  class="w-[16.39vw] h-[6.39vw] text-[#a9948e] border-[2px] border-[#a9948e] rounded-[20px] text-center leading-[6.39vw]"
                >
                  会员中心
                </div>
              </div>
              <p class="text-[#a08d89]">专享优惠!黑胶VIP仅￥0.13/天!</p>
            </div>
            <!-- 消息 -->
            <div
              class="w-[72vw] h-[30vw] bg-[white] text-[#000] dark:bg-[#2C2C2C] dark:text-[#fff] rounded-[2vw] mt-[2vw] ml-[4vw] m-[1vw]"
            >
              <div
                class="border-b-[1px] h-[10vw] border-[#ccc] flex justify-between items-center"
              >
                <div class="flex items-center">
                  <Icon
                    class="ml-[4vw]"
                    icon="mdi-light:email"
                    width="20"
                    height="20"
                  />
                  <span class="ml-[4vw] text-sm">我的消息</span>
                </div>
                <div>
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div
                class="border-b-[1px] h-[10vw] border-[#ccc] flex justify-between items-center"
              >
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="system-uicons:inbox" />
                  <span class="ml-[4vw] text-sm">云贝中心</span>
                </div>
                <div class="flex">
                  <span class="mr-[2vw] text-[2vw]">签到</span>
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="system-uicons:lightbulb-on" />
                  <span class="ml-[4vw] text-sm">创作者中心</span>
                </div>
                <div>
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
            </div>
            <!-- 服务 -->
            <div
              class="w-[72vw] h-[76vw] bg-[white] text-[#000] dark:bg-[#2C2C2C] dark:text-[#fff] rounded-[2vw] ml-[4vw] mt-[2vw] m-[1vw]"
            >
              <p class="border-b-[1px] ml-[4vw] h-[6vw] text-xs border-[white]">
                音乐服务
              </p>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="mdi:star-david" />
                  <span class="ml-[4vw] text-sm">趣测</span>
                </div>
                <div class="flex">
                  <span class="mr-[2vw] text-xs">点击查看今日运势</span>
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="icomoon-free:ticket" />
                  <span class="ml-[4vw] text-sm">云村有票</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="system-uicons:archive" />
                  <span class="ml-[4vw] text-sm">多多西西口袋</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="mdi:local-mall-outline" />
                  <span class="ml-[4vw] text-sm">商场</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="tabler:heartbeat" />
                  <span class="ml-[4vw] text-sm">Beat专区</span>
                </div>
                <div class="flex">
                  <span class="mr-[2vw] text-xs">顶尖制作邀你创作</span>
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="system-uicons:bell-ringing" />
                  <span class="ml-[4vw] text-sm">口袋彩铃</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="icon-park-outline:game-three" />
                  <span class="ml-[4vw] text-sm">游戏专区</span>
                </div>
                <div class="flex">
                  <span class="mr-[4vw] text-xs">音乐浇灌治愈花园</span>
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
            </div>
            <!-- 其他 -->
            <div
              class="other w-[72vw] bg-[white] text-[#000] dark:bg-[#2C2C2C] dark:text-[#fff] rounded-[2vw] mt-[2vw] ml-[4vw] m-[1vw]"
            >
              <p class="border-b-[1px] ml-[4vw] h-[6vw] text-xs border-[white]">
                其他
              </p>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="icon-park-outline:setting-one" />
                  <span class="ml-[4vw] text-sm">设置</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="line-md:moon" />
                  <span class="ml-[4vw] text-sm">深色模式</span>
                  <!-- <t-switch :value.sync="switchCheckStatus"/> -->
                  <!-- <t-switch v-model="switchCheckStatus"/> -->
                  <t-switch
                    :value="switchCheckStatus"
                    @input="(e) => (switchCheckStatus = e)"
                  />
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="ic:baseline-more-time" />
                  <span class="ml-[4vw] text-sm">定时关闭</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="mdi:local-mall-outline" />
                  <span class="ml-[4vw] text-sm">个性装扮</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="ion:headset-outline" />
                  <span class="ml-[4vw] text-sm">边听边存</span>
                </div>
                <div class="flex">
                  <span class="mr-[2vw] text-xs">未开启</span>
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="bi:card-text" />
                  <span class="ml-[4vw] text-sm">在线听歌免流量</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="ph:prohibit" />
                  <span class="ml-[4vw] text-sm">音乐黑名单</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="icon-park-outline:protect" />
                  <span class="ml-[4vw] text-sm">青少年模式</span>
                </div>
                <div class="flex">
                  <span class="mr-[2vw] text-xs">未开启</span>
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="mdi:alarm-clock" />
                  <span class="ml-[4vw] text-sm">音乐闹钟</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
            </div>
            <!-- 我的 -->
            <div
              class="others w-[72vw] bg-[white] text-[#000] dark:bg-[#2C2C2C] dark:text-[#fff] rounded-[2vw] mt-[2vw] ml-[4vw] m-[1vw]"
            >
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="ph:sim-card-light" />
                  <span class="ml-[4vw] text-sm">我的订单</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="ri:coupon-line" />
                  <span class="ml-[4vw] text-sm">优惠卷</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="ion:headset-outline" />
                  <span class="ml-[4vw] text-sm">我的客服</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="ri:share-circle-fill" />
                  <span class="ml-[4vw] text-sm">分享网易云音乐</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="ion:headset-outline" />
                  <span class="ml-[4vw] text-sm">个人信息收集与使用清单</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="icons8:share" />
                  <span class="ml-[4vw] text-sm">个人信息第三方共享清单</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="carbon:ibm-cloud-key-protect" />
                  <span class="ml-[4vw] text-sm">个人信息与隐私保护</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
              <div class="h-[10vw] flex justify-between items-center">
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="mdi:about-circle-outline" />
                  <span class="ml-[4vw] text-sm">关于</span>
                </div>
                <div class="flex">
                  <Icon icon="ep:arrow-up" width="20" height="20" :rotate="1" />
                </div>
              </div>
            </div>

            <!-- 退出登录 -->
            <router-link :to="{ path: '/Dialog' }">
              <div
                class="w-[72vw] h-[15vw] bg-[white] text-[red] dark:bg-[#2C2C2C] dark:text-[#fff] rounded-[2vw] mt-[2vw] ml-[4vw] m-[1vw] text-center text-[6vw] leading-[15vw]"
              >
                退出登录/关闭
              </div>
            </router-link>
          </div>
        </div>
      </van-popup>

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
      <!-- <SongList/> -->
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
        <div class="flex w-[95vw] relative h-[40vw]">
          <ul class="menu overflow-auto flex h-[40vw]">
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
                  <div
                    v-if="visible === index"
                    class="absolute top-0 left-0&quot;"
                  >
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
          <span @click="shows = !shows" class="ml-[70vw]">
            <Icon icon="mingcute:more-2-line" />
          </span>

          <div class="text-[#000] dark:text-[#000]">
            <van-popup
              v-model="shows"
              closeable
              close-icon="close"
              position="bottom"
              :style="{ height: '30%' }"
            >
              <li
                class="list-none w-[50vw] h-[10vw] text-[5vw] relative top-[2vw] left-[4vw]"
              >
                排行榜
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
          <span @click="show = !show">
            <Icon icon="mingcute:more-2-line" />
          </span>
        </div>
        <div class="text-[#000] dark:text-[#000]">
          <van-popup
            v-model="show"
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '30%' }"
            class="bg-[white] text-[#000] dark:bg-gray-900 dark:text-[#fff]"
          >
            <li
              class="list-none w-[50vw] h-[10vw] text-[5vw] relative top-[2vw] left-[4vw]"
            >
              热门话题
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
          </van-popup>
        </div>
        <div class="menu overflow-auto flex w-[95vw] relative">
          <ul class="flex bg-red-300 min-w-[85vw] h-[40vw] mr-[2vw] rounded-lg">
            <li
              class="flex min-w-[70vw] flex-wrap h-[30vw] ml-[5vw] mt-[5vw] rounded-lg"
            >
              <div class="flex min-w-[48vw] h-[10vw] flex-wrap">
                <div
                  class="min-w-[48vw] h-[6vw] text-[4vw] flex items-center text-white"
                >
                  <Icon icon="icon-park-solid:topic" color="white" />
                  {{ huati[0][0] }}
                </div>
                <div class="min-w-[48vw] h-[4vw] text-[3vw] text-neutral-400">
                  {{ huati[0][1] }}
                </div>
              </div>
              <div class="flex min-w-[20vw] h-[20vw]">
                <p class="min-w-[48vw] text-[4vw] flex items-center text-white">
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
          <ul
            class="flex bg-green-700 min-w-[85vw] h-[40vw] mr-[2vw] rounded-lg"
          >
            <li
              class="flex min-w-[70vw] flex-wrap h-[30vw] ml-[5vw] mt-[5vw] rounded-lg"
            >
              <div class="flex min-w-[48vw] h-[10vw] flex-wrap">
                <div
                  class="min-w-[48vw] h-[6vw] text-[4vw] flex items-center text-white"
                >
                  <Icon icon="icon-park-solid:topic" color="white" />
                  {{ huati[1][0] }}
                </div>
                <div class="min-w-[48vw] h-[4vw] text-[3vw] text-neutral-400">
                  {{ huati[1][1] }}
                </div>
              </div>
              <div class="flex min-w-[20vw] h-[20vw]">
                <p class="min-w-[48vw] text-[4vw] flex items-center text-white">
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
          <ul
            class="flex bg-blue-300 min-w-[85vw] h-[40vw] mr-[2vw] rounded-lg"
          >
            <li
              class="flex min-w-[70vw] flex-wrap h-[30vw] ml-[5vw] mt-[5vw] rounded-lg"
            >
              <div class="flex min-w-[48vw] h-[10vw] flex-wrap">
                <div
                  class="min-w-[48vw] h-[6vw] text-[4vw] flex items-center text-white"
                >
                  <Icon icon="icon-park-solid:topic" color="white" />
                  {{ huati[2][0] }}
                </div>
                <div class="min-w-[48vw] h-[4vw] text-[3vw] text-neutral-400">
                  {{ huati[2][1] }}
                </div>
              </div>
              <div class="flex min-w-[20vw] h-[20vw]">
                <p class="min-w-[48vw] text-[4vw] flex items-center text-white">
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
      <div class="mt-3 w-[95vw] h-[70vw] ml-[2vw]">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <h4 class="font-[900]">音乐日历</h4>
            <div
              class="flex rounde-[50%] w-[12vw] h-[4vw] text-[2vw] ml-[2vw] items-center justify-center bg-[#d3d9e2] border rounded-[5vw]"
            >
              更多
              <Icon icon="mingcute:right-fill" />
            </div>
          </div>
          <Icon icon="mingcute:more-2-line" />
        </div>
        <div class="flex w-[90vw] h-[60vw] mt-[5vw] flex-wrap">
          <div
            class="flex w-[80vw] h-[25vw] ml-[5vw]"
            v-for="item in calendars"
            :key="item.id"
          >
            <div class="flex w-[50vw] h-[25vw] ml-[5vw] flex-wrap">
              <p class="text-[4vw] w-[50vw] h-[10vw]">
                <span class="flex text-[3vw] w-[50vw] text-#ccc"
                  >今天{{ newday }}</span
                >
              </p>
              <p class="text-[4vw] w-[50vw] h-[15vw] font-[900]">
                {{ item.title }}
              </p>
            </div>
            <div class="flex w-[30vw] h-[25vw] ml-[5vw]">
              <img :src="item.imgUrl" alt="" class="w-[20vw] h-[20vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Icon } from '@iconify/vue2';
import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';
import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';
BScroll.use(ScrollBar);
import TSwitch from '@/views/Switch.vue';
// import TopView from './TopView.vue';
// import SongList from './SongListView/SongListView.vue';
// import SongList from './'
import Search from '@/views/SearchView/SearchView.vue';
// import { getUserAccount } from '@/request';
// import store from '@/store/_index'
import { getUserAccount, getUserDetail } from '@/request';
import Vue from 'vue';
import { Popup } from 'vant';
Vue.use(Popup);
export default {
  // name: 'swiper-example-thumbs-gallery',
  // title: 'Thumbs gallery with Two-way control',
  components: {
    Icon,
    Swiper,
    // TopView,
    // SongList,
    Search,
    TSwitch,
  },
  data() {
    return {
      switchCheckStatus: false,
      menu: [],
      activeMenuItem: '',
      playlists: [],
      swiper: null,
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
      playCount: [],
      visible: 0,
      resourceData: '',
      lunbo: [],
      topleftclick: false,
      shows: false,
      show: false,
      tuige: false,
      toggle: false,
      returnout: false,
      tjgedanid: [],
    };
  },
  computed: {},
  mounted() {
    // ref + $refs 获取页面上的组件、dom组件
    new BScroll(this.$refs.wrapper),
      (this.swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      }));
    // this.init();
    this.animateItems();
    this.saveIndexToArray();
    // this. songDtails()
  },
  // beforeDestroy() {
  //   this.scroll.destroy();
  // },
  methods: {
    // increase:store.mutations.increase, // 写法2
    saveIndexToArray(index) {
      //存id
      (this.indexArray = []), this.indexArray.push(index);
      console.log(this.indexArray);
    },
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
    animateItems() {
      //推荐歌单里小轮播数据 方法
      setInterval(() => {
        this.visible++;
        if (this.visible === this.lunbo.length) {
          this.visible = 0;
        }
        this.resourceData = this.lunbo[this.visible].uiElement.mainTitle.title;
      }, 5000);
    },
    //                
  },
  async created() {
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
        //  this.lunbotitle = res.data.result;// 小轮播 title
        this.lunbo = res.data.data.blocks[1].creatives[0].resources; // 小轮播
        // this.lunboTitle = this.lunbo;// 小轮播

        // console.log(lunbo);
        // console.log(lunboTitle)
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
    axios//      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized'
      )
      .then((res) => {
        this.tjgedan = res.data.result;
        this.playCount = this.tjgedan.playCount;
        // console.log(res);
        // console.log(this.tjgedan);
        // console.log(this.playCount)
      })
      .catch((err) => {
        console.log(err);
      });

    //音乐日历
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000'
      )
      .then((res) => {
        // console.log(res);
        this.calendars = res.data.data.calendarEvents;
        // console.log(this.calendars);
        this.newday = new Date().toLocaleDateString().slice(5);
      })
      .catch((err) => {
        console.log(err);
      });
    const res = await getUserAccount(); //获取用户信息
    console.log(res);
  },
};
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-container',
  },
});
</script>
<style>
html {
  background-color: #dee1e6;
}
.active {
  color: red;
}
.liebiao {
  position: relative;
  top: 0.267vw;
  left: 0.333vw;
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
.abc-enter {
  opacity: 0;
  transform: translateY(100%) scale(0.7);
}
.abc-enter-active {
  transition: all ease-in-out 1s;
}
.abc-enter-to {
  opacity: 1;
  transform: translateY(0%) scale(1);
}

.abc-leave {
  transform: translateY(0) scale(1);
}
.abc-leave-active {
  transition: all ease-in-out 1s;
}
.abc-leave-to {
  transform: translateY(-100%) scale(0.7);
}

ul::-webkit-scrollbar {
  width: 0;
}

ul::-webkit-scrollbar-track {
  opacity: 0;
}
ul::-webkit-scrollbar-thumb {
  opacity: 0;
}
</style>



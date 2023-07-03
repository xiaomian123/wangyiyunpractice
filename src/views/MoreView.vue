<template>
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
                  src="https://picsum.photos/id/659/2731/1536"
                  alt=""
                />
                <span
                  class="ml-[4vw] text-[3vw] text-[#000] dark: dark:text-[#fff]"
                  >明月</span
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
              class="w-[72vw] h-[26vw] ml-[4vw] pt-[2vw] px-[3vw] pb-[3.5vw] mt-[2vw] mb-[3vw] flex flex-col justify-between text-[3vw] bg-gradient-to-r from-[#3e3c3a] to-[#ffded3] rounded-2xl"
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
                class="border-b-[1px] h-[10vw] border-[gray] flex justify-between items-center"
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
                class="border-b-[1px] h-[10vw] border-[gray] flex justify-between items-center"
              >
                <div class="flex">
                  <Icon class="ml-[4vw]" icon="system-uicons:inbox" />
                  <span class="ml-[4vw] text-sm">云贝中心</span>
                </div>
                <div class="flex">
                  <span class="mr-[2vw]">签到</span>
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
            <div
              class="w-[72vw] h-[15vw] bg-[white] text-[red] dark:bg-[#2C2C2C] dark:text-[#fff] rounded-[2vw] mt-[2vw] ml-[4vw] m-[1vw] text-center text-[6vw] leading-[15vw]"
            >
              退出登录/关闭
            </div>
          </div>
        </div>
      </van-popup>
</template>
<script>
</script>
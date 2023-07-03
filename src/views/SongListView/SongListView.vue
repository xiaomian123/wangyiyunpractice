<template>
    <div class="mt-3 overflow-auto w-[95vw] ml-[2vw]">
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
            class="relative flex min-w-[30vw] flex-wrap h-[40vw] mr-[2.5vw]"
            v-for="item in tjgedan"
            :key="item.id"
          >
            <img
              :src="item.picUrl"
              alt=""
              class="w-[30vw] h-[30vw] rounded-[4vw]"
            />
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
 export default {
    props: {
    tjgedan: {
      
    }
  }
 }
</script>
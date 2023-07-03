<template>
  <div class="w-screen h-screen overflow-auto">
    <div class="flex justify-around items-center mt-[5vw]">
      <span>
        <Icon icon="mingcute:menu-fill" color="#333" />
      </span>

      <div class="inp flex w-[80vw] items-center border rounded-[10vw] " >
        <Icon icon="mingcute:search-line" color="#999" class="ml-[3vw]" />
        <input type="text" name="" id="" class="w-[65vw]"  @click="returnout = !returnout"/>
        <Icon icon="lucide:scan-line" />
      </div>
      <Icon icon="clarity:microphone-solid" color="#333" />
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      returnout: false,
    };
  },
  name: 'Search',
  props: ['search'],
};
</script>
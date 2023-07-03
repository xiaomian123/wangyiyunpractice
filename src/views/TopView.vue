<template>
 <div class="flex justify-around items-center mt-[5vw]">
        <span @click="topleftclick = !topleftclick">
          <Icon icon="mingcute:menu-fill" color="#333" />
        </span>

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
</template>
<script>
export default{
  data(){
    return{
      switchCheckStatus:false,
    }
  }
}
</script>
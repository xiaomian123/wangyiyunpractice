<template>
    <div class="w-[37.6px] h-[22.5px] rounded-[15px] relative top-[-1vw] left-[25vw]" 
    :class=" `${value ? 'bg-[#CECECE]' : 'bg-[#CECECE]'}`"
    @click="toggle"
    >
       <div class="w-[17.6px] h-[22.5px] rounded-[15px] bg-[#FAFAFA]  transition-all" :class="
        `${value ? 'translate-x-[20px]' : 'translate-x-0'}`
       "></div>
    </div>
</template>

<script>
  export default{
    // model主要是去配置v-model指令所需要使用的 属性名 和事件名的
    // model:{
    //   prop:'value',
    //   event:'input1',
    // },
    props:{
         value:{
             type:Boolean,
             required:true,
         },
       
    }, 
    methods:{
       toggle(){
        this.$emit('input', !this.value);
        // 触发自身的input1方法 
        //  this.$emit('input1',!this.value)
       }
    }
  }
</script>
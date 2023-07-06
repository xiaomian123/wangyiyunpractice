<template>
  <div class="w-[50vw] h-[50vw]  bg-gray-500 flex flex-wrap justify-center items-center">
    <div class=" text-[8vw]">
        {{ title }}
    </div>
    <div>
      <div>{{ message }}</div>
    </div>
    <div class=" w-[30vw] h-[30vw] flex justify-between border-red-700 border-spacing">
      <button type="button">
        <div>
          <span>取消</span>
        </div>
        </button>
        <button type="button">
        <div>
          <span>确认</span>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  data(){
    return{
        visible:false,
    }
  },
  methods:{
    hide(){
        console.log(123);
        this.visible = false;
    },
    cancel(){
      this.hide();
      this.reject();
    },
    confirm(){
      this.hide();
      this.resolve()
    }
  }

//   props:{
//     title:{
//         type:String,
//     },
//     message:{
//         type:String,
//         required:true,
//     }
//   }
};
</script>
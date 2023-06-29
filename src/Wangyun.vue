<template>
    <div class="w-[100.000vw] h-[160.000vw] m-auto border-[0.267vw] border-cyan-950">
      <!-- 头部 -->
      <div class="w-[99.600vw] h-[9.333vw]  bg-slate-400 flex justify-between">
      <Icon icon="basil:menu-solid" width="35" height="35" class="liebiao"/>
      <input type="text" class="w-[77.333vw] h-[6.667vw] bg-[#E2DBFC] relative top-[1.467vw] rounded-[3.333vw]">
      <Icon icon="ei:search" width="35" height="35" class="yan"/>
      <Icon icon="system-uicons:microphone" width="35" height="35"  class="shengyin"/>
      </div>
      <!-- banner -->
      <section class="relative top-[-4.267vw]">
          <div class="swiper mySwiper mt-[4.537vw]">
              <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in menu" :key="item.id">
                  <img :src="item.pic" alt="" class="w-[92.22vw] h-[35.741vw]
                  m-auto rounded-2xl">
              </div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
      </section>
  
      <!-- 菜单 -->
     <div class="flex w-[97vw] h-[22vw] relative left-[2vw]">
            <ul class="menu flex w-[97vw] overflow-auto ml-[7vw]  mt-[-4vw]">
                <li v-for="item in menudan" :key="item.id" class="w-[12vw] mr-[6vw] flex flex-col  items-center">
                   <div class="w-[20vw] h-[18vw]" :key="item.id ">
                      <img :src="item.iconUrl" class="w-[20vw] h-[20vw] red-image" />
                   </div>
                   <p class="w-[20vw] h-[15vw] text-[3vw] text-[#aea4a4] text-center">{{item.name}}</p>
                </li>
            </ul>
      </div>
  
      <!-- 推荐歌单 -->
      <div class="tuijian">
         <div class="w-[50vw] text-[5.5vw] font-[800] relative left-[5vw]">推荐歌单</div>
      </div>
  
    <div class="flex w-[100vw] h-[40vw] bg-[#f39e9e] relative top-[20px]">
      
    </div>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import 'swiper/css/swiper.css';
  import Swiper from 'swiper';
      export default{
          data() {
              return{
                  menu:[],
                  activeMenuItem:'',
                  playlists:[],
                  iconUrl:[],
                  menudan:[],
                  gedan:[],
              };
          },
          methods:{
              toggleMenu(name){
                  this.activeMenuItem=name;
                  this.fetchPlaylists(name);
              },
              fetchPlaylists(cat){
              axios
              .get(
                  'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
                  {
                  patams:{cat}
                  }
              )
              .then((res)=>{
                  this.playlists=res.data.playlists;
              });
              },
          },
          created(){
              axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
              .then((res)=>{
                  this.menu=res.data.data.blocks[0].extInfo.banners; 
              })
              .catch((err) => console.log(err));
  
               axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball')
              .then((res)=>{
                  this.menudan=res.data.data; 
                  // console.log(res);
                  // console.log(this.menudan);
              })
              .catch((err) => console.log(err));
  
              axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized')
              .then((res)=>{
                  this.gedan=res.data.result; 
                  console.log(res);
                  console.log(this.gedan);
              })
              .catch((err) => console.log(err));
          },
      }
      var swiper = new Swiper('.mySwiper', {
      pagination: {
          el: '.swiper-container',
      },
  });
  </script>
  
  <style>
    .yan{
      position: relative;
      top: 0.267vw;
      left:-72.667vw;
    }
    .liebiao{
      position: relative;
      top: 0.267vw;
      left: 0.333vw;
    }
    .shengyin{
      position: relative;
      top: 0.533vw;
      left: -5.933vw;
    }
    body{
          background-color: #000000ad;
      }
       .swiper-container {
          width: 100%;
          height: 60.000vw;
          overflow: hidden;
        }
        
        .swiper-slide {
          text-align: center;
          font-size: 3.200vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-slide>img{
          width: 100.000vw;
          height: 60.000vw;
          border-radius: 2vw;
        }
         .menu::-webkit-scrollbar {
          height: 0.000vw;
          width: 2.667vw;
        }
        .red-image {
          filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
      }
      .tuijian{
          width: 100.000vw;
          height:6.000vw;
      }
  </style> 
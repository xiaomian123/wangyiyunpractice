// 所有的请求都放在这个位置
import axios from 'axios';
import { Icon } from '@iconify/vue2';
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})


// 添加请求连接器
// http.interceptors.request.use(function(config){
//     console.log(config);
//     // const cookie = store.get('__m__cookie') ?? '';
//     config.params = config.params ||{};
//     config.params.cookie= cookie;
//     console.log(config)
// })

// 7.5login
// export const getQrKey=()=>http.get('/login/qr/key')
// export const getQrInfo=(key,qrimg)=>http.get('/login/qr/create',{params:{key,qrimg}})
// export const  checkQrStatus=(key)=>http.get('/login/qr/check',{params:{key,timestamp:Date.now()}})
// // export const getUserAccount =() => http.get('/user/account',{params:{id:123}})
// export const getUserAccount =() => http.get('/user/account');
// export const getUserDetail =() => http.get('/user/detail',{params:{uid}})

// 榜单
// export async function fetchSeachList() {
//     const res = await http.get('/toplist/detail');
//     const playlist = await Promise.all(
//       res.data.list.map(({ id }) =>
//         http.get('playlist/detail', { params: { id } })
//       )
//     );
//     return playlist.map((item) => item.data.playlist);
//   }
// // export const songDetail = (params) => http.get(`/playlist/detail?id=${params}`);//推荐歌单里点击任意歌单获取id
// // 头 
// export const songDetails = (params) => http.get(`/playlist/detail?id=${params}`);
// //歌单列表
// export const songInfo = (params) => http.get(`/playlist/track/all?id=${params}`);//2748492595

export async function fetchToplistDetail() {
    const res = await http.get('/toplist/detail');
    const playlist = await Promise.all(
      res.data.list.map(({ id }) => http.get('playlist/detail',
        {
          params: { id }
        })));
    return playlist.map(item => item.data.playlist)
  }
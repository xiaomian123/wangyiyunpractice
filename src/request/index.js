// 所有的请求都放在这个位置
import axios from 'axios';
import store from 'storejs';
import { Icon } from '@iconify/vue2';
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})


// 添加请求连接器
http.interceptors.request.use(function(config){// 前一个函数代表成功 ，后一个代表失败，后一个省略
    const cookie = store.get('__m__cookie') ?? '';
    config.params = config.params ||{};
    config.params.cookie= cookie;
    return config;
})

// 7.5login
export const getQrKey=()=>http.get('/login/qr/key');//第一个接口
export const getQrInfo=(key,qrimg=1)=>http.get('/login/qr/create',{params:{key,qrimg}});//传值
export const  checkQrStatus=(key)=>http.get('/login/qr/check',{params:{key,timestamp:Date.now()}});//timestamp:时间戳
// // export const getUserAccount =() => http.get('/user/account',{params:{id:123}})
export const getUserAccount =() => http.get('/user/account');//获取用户参数
export const getUserDetail =(params) => http.get(`/user/detail?uid=${params}`);//用户数据

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
// 头 
export const songDetails = (params) => http.get(`/playlist/detail?id=${params}`);
//歌单列表
export const songInfo = (params) => http.get(`/playlist/track/all?id=${params}`);//2748492595
// 用户id
export const UserId = (params) => http.get(`/user/playlist?uid=${params}`);//


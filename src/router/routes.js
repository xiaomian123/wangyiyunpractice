import IndexView from '@/views/IndexView.vue';
// import HomeView from '@/views/HomeView/HomeView.vue';
// import MineView from '@/views/MineView.vue';
import SearchView from '../views/SearchView/SearchView.vue';
import SongmenuView from '../views/SongmenuView/SongmenuView.vue';
import Dialog from '@/components/Dialog';
import Userlist from '../views/UserlIst.vue'
import Userdatedata from '../views/Updatedata.vue'
import Player from '../views/Player.vue'
// import 
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/IndexView',
  },
  {
    path: '/Dialog', 
    component: Dialog,
  },
  {
    path: '/IndexView', //首页
    component: IndexView,
  },
  {
    path:'/SearchView',//搜索
    component:SearchView,
  },
  {
    path:"/Foo",
    // 懒加载组件文件
    component:()=>import('@/views/Foo.vue')
  },
  {
    path:"/SongmenuView",//歌单详情
    component:SongmenuView,
  },
  {
    path:"/login",
    // 懒加载组件文件
    component:()=>import('@/views/login.vue')
  },
  {
    path:"/Userlist",
    component:Userlist,
  },
  {
    path:"/Userdatedata",
    component:Userdatedata,
  },
  // {
  //   path: '/Userlist',
  //   component: () => import(/* webpackChunkName: 'jsx' */ '@/views/Userlist'),
  // },
  {
    path:'/Player',
    component: Player,
  }
];

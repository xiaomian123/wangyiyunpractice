import IndexView from '@/views/IndexView.vue';
// import HomeView from '@/views/HomeView/HomeView.vue';
// import MineView from '@/views/MineView.vue';
import SearchView from '../views/SearchView/SearchView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/IndexView',
  },
  {
    path: '/IndexView/:id', 
    component: IndexView,
  },
  {
    path:'/SearchView',
    component:SearchView,
  }
 
];

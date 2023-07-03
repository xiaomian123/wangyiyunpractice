
// import IndexView from '@/views/IndexView.vue'; // 不加 .vue 后缀名 不会 报错
// // 1. 引入路由插件
// import VueRouter  from 'vue-router';
// // 2. 注册路由所提供的全局组件  ① router-view（渲染） router-Link (跳转)
// Vue.use(VueRouter);
// // 3.实例化
// const router123 = new VueRouter( /**配置核心 */
// // 相当于刚刚自己定义的viewMap
//   routes [
//     // 路径重定向
//     {
//       path:'/IndexView',
//       component: IndexView,
//     }
//   ],
// );


import Vue  from 'vue';
import '@/index.css';
import { Icon} from '@iconify/vue2';
import indexView from './views/IndexView.vue'; // 子组件 放入父组件 App.vue上
import App from '@/App.vue';// 挂父组件上
import Vant from 'vant';
import 'vant/lib/index.css';
// 1、引入路由插件
import router from '@/router'
// 2、注册路由所提供的全局组件
// Vue.use(VueRouter);
// 3、实例化


import Switch from './views/Switch.vue';
Vue.use(Vant);
Vue.component('Icon',Icon);
Vue.component('t-switch',Switch);


// vm就是根实例 root  具备el
// 但是其他实例不具备
const vm = new Vue({
  el:'#app',
  // 4. 将router 注入到root中
  router,
  // router:router123,
  components: {App},
  template: '<App/>',
  created() {
    // console.log(this.$parent); // undefined
    // console.log(this.$children); // [App]
    window.vw = this;
  },
  data: {
    // swiper: null
  },
  render:(h) =>h(indexView),
  mounted() {
    // console.log(this.$children[0].$children);
    // this.initSwiper();
  },
  methods: {
    // initSwiper() {
    //   this.swiper = new Swiper(".mySwiper", {
    //     autoplay: true, // 自动播放
    //     disableOnInteraction: false, // 鼠标交互后不停止自动播放
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //       renderBullet: function (index, className) {
    //         return '<span class="' + className + '">'  + "</span>";
    //       },
    //     },
    //   });
    // }
  }
});
/*
class V {
  static component(name, comp) {
    console.log(`注册${name}组件`);
  }
  static use(plugin) {
    console.log(this); // this -> V
    if (!plugin) return;
    if (typeof plugin.install === 'function') {
      plugin.install(this);
    }
    if (typeof plugin === 'function') {
      plugin(this);
    }
  }
}
V.use(function (A) {
  A.component('abc', {});
});
V.use({
  install(A) {
    A.component('abc', {});
  },
});
*/



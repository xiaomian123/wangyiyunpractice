// import Vue from 'vue';
// import '@/index.css';
// import { Icon } from '@iconify/vue2';
// import indexView from './views/IndexView.vue';
// Vue.component('Icon', Icon);
// const vm = new Vue({
//   el: '#app',
//   render: (h) => h(indexView),
// });

import Vue  from 'vue';
import '@/index.css';
import { Icon} from '@iconify/vue2';
import indexView from './views/IndexView.vue'; // 子组件 放入父组件 App.vue上
import App from '@/App.vue';// 挂父组件上
import Vant from 'vant';
import 'vant/lib/index.css';
import Switch from './views/Switch.vue';
Vue.use(Vant);
Vue.component('Icon',Icon);
Vue.component('t-switch',Switch);

// vm就是根实例 root  具备el
// 但是其他实例不具备
const vm = new Vue({
  el:'#app',
  components: {App},
  template: '<App/>',
  // created() {
  //   console.log(this.$parent); // undefined
  //   console.log(this.$children); // [App]
  // },
  data: {
    swiper: null
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
})


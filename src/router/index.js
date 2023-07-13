import VueRouter from 'vue-router';
import Vue from 'vue';
import routes from './routes';
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
export default router;

// 7.13
// 1. router-link router-view
// 2. vm.$router vm.$route
// 3.确定 hash 与组件的对应关系并可以正确
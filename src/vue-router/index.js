let _Vue = null;
/*
  [
    {path: '/a', component: A}, 
    {path: '/b', component: B}, 
    { path: '/c', component: C, children: [
      {
        path: 'd',
        component: D
      }
    ]}
  ]
  /a ==> A
  /b ==> B
  /c ==> C
  /c/d => D
*/
export default class {
    constructor(options = {}) {
        this.name = 'vue-router'
        if (!options.routes) return;
        this.$options = options;
        this.currentView = _Vue.observable({ value: null });
        // 处理routes
        this.$routeMap = this.$options.routes.reduce(
            (prev, { path, component }) => {
                prev[path] = component;
                return prev;
            }, {})
        window.addEventListener('hashchange', () => {
            // console.log(window.location.hash.replace(/^#/, ''));
            this.currentView = this.$routeMap[window.location.hash.replace(/^#/,'')]??this.$routeMap['*'];
            this.$route
        });
        this.registerComponents();
    }
    registerComponents(){
        let self = this;
        _Vue.component('router-view',{
            render:(h)=>h('component',{is:this.currentView}),
        });
        _Vue.component('router-link',{
            render:(h)=>h('a',{href:this.currentView}),
            props:{
                to:{
                    type:[String,Object],
                    required:true,
                }
            }
        });
    }
    static install(Vue) {
        _Vue = Vue;
        Vue.mixin({
            beforeCreate() {
                console.log(this)
                if (this.$parent) {
                    // console.log(this.$options.abc)
                    // this.$router = this.$options.router;//
                    Vue.prototype.$router = this.$options.router;
                    // Vue.component('router-view', {
                    //     render: h('component', { is:})
                    // })
                }
            }
        })
    }
}
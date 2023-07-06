// // 数据仓库对象
// let Vue = null;
// let store = null;

// export const mapState =(stateKeys =[]) =>{
//     return stateKeys.reduce(stateKeys =[])=>{
//         prev[key] = function(){
//             return store.state[key];
//         }
//     }
// }
// export default{
//     Store:class{
//         constructor ({state}){
//             this.state = Vue.observable(state);
//         }
//     },

//     install(_Vue){
//         Vue = _Vue
//         Vue.mixin({
//             created(){
//                 console.log('我是混入得到的created')
//                 if(!this.$parent){
//                     Vue.prototype.$store = this.$options.store;
//                     store = this.$options.store
//                 }
//             }
//         })
//     }
// }
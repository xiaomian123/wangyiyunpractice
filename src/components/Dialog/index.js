import Dialog from "./Dialog.vue";
console.log(Dialog)
// 创建一个Dialog的vue子类

export default function (option) {
    return new Promise(function (reslove, reject) {
        const VueDialog = Vue.extend(Dialog);
        const instanceOfDialog = new VueDialog({
            data() {
                return {
                    title: option.title,
                    message: option.message,
                    visible: true,
                }
            },
            methods(){
                reslove(),reject 
            }

        });
    })
    instanceOfDialog.$mount();
    document.querySelector('body').appendChild(instanceOfDialog);
}


// const VueDialog= Vue.extend(Dialog);
// const instanceOfDialog = new VueDialog();
// instanceOfDialog.$mount();
// document.querySelector('body').appendChild(instanceOfDialog); 标签渲染方式
// console.log(instanceOfDialog)


// Dialog.install = function(V){
//     V.component(this.name,this)
// };
// export default Dialog;
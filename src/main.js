//创建vue根实例
import Vue from 'vue'

import App from './App.vue'

//挂载App组件
new Vue({
    el: '#app',
    components: {
        //组件名：组件对象
        App: App  //当组件名和对象相同 可简写成App
    },
    template: '<App/>'
})


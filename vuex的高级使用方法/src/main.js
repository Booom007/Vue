// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import store from './store'
// import Vuex from './min-vuex' 重写的vuex
Vue.config.productionTip = false
Vue.use(Vuex);
/* eslint-disable no-new */
// const store = new Vuex.Store({
//         state: {
//             count: 0,
//         },
//         getters: {
//             doubleCount(state) {
//                 return state.count * 2;
//             }
//         },
//         mutations: {
//             increment(state, n) {
//                 state.count += n;
//             },
//             asIncrement(state) {
//                 setTimeout(() => {
//                     state.count++;
//                 }, 1000);
//             }
//         },
//         actions: {
//             asIncrement(context) {
//                 context.commit('asIncrement')
//             }
//         }
//     })
// Vue.prototype.$store=store  将store挂载到Vue原型下
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

Vue.use(store)
// axios
import axios from 'axios'
Vue.prototype.axios = axios;
axios.defaults.baseURL = "http://musicapi.leanapp.cn";  //这里使用自己下载的网易云接口地址

// 引入Vant
import Vant from 'vant'
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Vant)
Vue.use(Lazyload);

// animation动画库
import animate from 'animate.css'
Vue.use(animate);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

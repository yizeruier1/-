import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import axios from 'axios'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import YDUI from 'vue-ydui'
import VueParticles from 'vue-particles'
import 'element-ui/lib/theme-default/index.css'
import 'vue-ydui/dist/ydui.px.css'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.axios = axios
fastclick.attach(document.body);
Vue.use(ElementUI)
Vue.use(YDUI)
Vue.use(VueParticles)
// if (process.browser) {
//   const VueAwesomeSwiper = require('vue-awesome-swiper/ssr')
//   Vue.use(VueAwesomeSwiper)
// }


Vue.use(VueLazyload, {
  loading: require('./assets/logo.png')
})


//   全局 过滤器  处理  数组信息
Vue.filter('qqqq', function(value) {
  if(value.length ==0){
    return '暂无'
  }else{
    return value.join(' / ')
  }
})
Vue.filter('daoyan', function(value) {
  var str = "";
  value.forEach(function(item){
    str = str + item.name + ' / '
  });
  if(str.length > 28){
    return str.slice(0,28) + '. . . ';
  }else{
    return str.slice(0,str.length-2);
  }
})


Vue.filter('yanyuana', function(value) {
  var str = "";
  value.forEach(function(item){
    str = str + item.name + ' / '
  });
  return str.slice(0, str.length-2);
})

Vue.filter('cutName', function(value) {
  if(value.length > 5){
    return value.slice(0,6) + ' . . .';
  }else{
    return value;
  }
})
Vue.filter('isScore', function(score) {
  if(score != 0){
    return score;
  }else{
    return '无';
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

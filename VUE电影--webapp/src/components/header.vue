<template>
<div>
  <div class="header">
    <i class="fa fa-bars" @click="show3 = true"></i>
    <p>{{ title }}</p>
    <i class="fa fa-search" @click="gotosearch"></i>
    <i class="fa fa-user-o" @click="gotologin"></i>
    
  </div>
  <yd-popup v-model="show3" position="left" width="60%">
      <ul>
        <li @click="gotoindex">首页</li>
        <li>影片</li>
        <li @click="gotosearch">搜索</li>
        <li @click="gotologin">我的</li>
        <li @click="gotopar">BOOM</li>
      </ul>
  </yd-popup>
</div>
</template>

<script>
import {Popup} from 'vue-ydui/dist/lib.px/popup'
import './../assets/font-awesome/css/font-awesome.min.css'
export default {
  name: 'topnav',
  components: {
    Popup
  },
  data () {
    return {
      show3: false
    }
  },
  props: ['title'],
  methods: {
    gotosearch: function(){
      this.$router.push({path:'/Search'});
    },
    gotologin: function(){
      this.$router.push({path:'/Login'});
    },
    gotoindex: function(){
      this.$router.push({path:'/Index'});
    },
    gotopar: function(){
      this.$router.push({path:'/Particles'});
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
  ul,li{margin:0;padding:0;}
  .header{width:100%;height:50px;display:flex;background-color:#d53c37;}
  .header i{display:block;flex:1;height:100%;text-align:center;color:#fff;line-height:50px;
  font-size:20px;}
  .header p{height:100%;flex:6;text-align:center;line-height:50px;font-size:18px;color:#fff;
  text-indent:10%;}

  ul{list-style:none;width:100%;padding-top:20px;}
  ul li{width:90%;height:40px;border-bottom:1px solid gray;margin:0 auto;text-align:center;
    line-height:40px;color:#000;font-size:12px;}
</style>

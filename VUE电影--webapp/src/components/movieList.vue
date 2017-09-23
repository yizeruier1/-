<template>
  <scroll ref="scroll" class="container" :data="data">
    <ul>
      <li v-for="(item, index) in data" :key="item.id">
        <div class="imgbox" @click="gotodetail(item.id)">
          <img @load="loadImg" v-lazy="item.images.medium">
        </div>
        <div class="movieinfo">
          <p class="moviename">{{item.title|cutName}}</p>
          <p class="moviescore">{{item.rating.average|isScore}}</p>
        </div>
      </li>
    </ul>
  </scroll>
</template>

<script>
import scroll from './../common/scroll.vue'
export default {
  components: {
    scroll
  },
  name: 'movieList',
  data() {
    return{
      checkLoad: false
    }
  },
  methods: {
    loadImg: function(){
      if(!this.checkLoad){
        this.$refs.scroll.refresh();
        this.checkLoad = true
      }
    },
    gotodetail: function(num){
      this.$router.push({name:'Detail',params:{id:num}})
    }
  },
  props: ['data']
}
</script>

<style scoped>
  body,ul,li,p{margin:0;padding:0;}
  .container{width:100%;overflow:hidden;}
  .container ul{width:100%;list-style:none;}
  .container ul li{width:30%;height:200px;margin-left:2.5%;float:left;margin-top:14px;
  box-shadow:0 0 2px 2px #ddd;margin-bottom:6px;}
  .imgbox{width:100%;height:160px;}
  .movieinfo{width:100%;height:40px;overflow:hidden;}
  .moviename{width:82%;height:40px;color:#000;float:left;font-size:12px;line-height:40px;text-indent:4px;}
  .moviescore{width:18%;height:40px;color:orange;float:left;font-size:14px;line-height:40px;text-align:center;}
  .imgbox img{border:none;width:100%;height:100%;}
</style>

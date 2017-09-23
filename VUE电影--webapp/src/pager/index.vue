<template>
  <div id="app" ref="appbox">
    <top-nav title="电影主页"></top-nav>
    <slider></slider>

    <el-table v-if="isLoading" v-loading="isLoading" element-loading-text="拼命加载中" style="width:100%;height:200px;">
    </el-table>


    <div class="scroll">
      <movie-list :data="movieData"></movie-list>
      <more-btn v-if="!isLoading" btnword="更多热映电影"></more-btn>
    </div>

    <div class="scroll">
      <movie-list :data="movieData2"></movie-list>
      <more-btn v-if="!isLoading" btnword="更多即将上映电影"></more-btn>
    </div>
  </div>

</template>

<script>
import topNav from './../components/header.vue'
import movieList from './../components/movieList.vue'
import moreBtn from './../components/moreBtn.vue'
import slider from './../common/slider.vue'

export default {
  name: 'index',
  components: {
    topNav,
    movieList,
    moreBtn,
    slider
  },
  data() {
    return {
      movieData: [],
      isLoading: true,
      movieData2: []
    }
  },
  mounted() {
    this.getMovieData();
    this.getMovie2Data();
  },
  methods: {
    getMovieData: function(){
      this.axios.get("/movie/in_theaters")
      .then(response => {
        this.movieData = response.data.subjects;
        //console.log(this.movieData[0]);
      });
    },
    getMovie2Data: function(){
      this.axios.get("/movie/coming_soon")
      .then(response => {
        this.movieData2 = response.data.subjects;
        //console.log(this.movieData[0]);
      });
    },
  },
  watch: {
    movieData: function(val, oldval){
      if(val.length != 0){
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
}
.sroll{width:100%;}
</style>
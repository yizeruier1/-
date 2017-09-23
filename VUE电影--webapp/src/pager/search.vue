<template>
	<div class="container">
		<top-nav title="搜索"></top-nav>
		<search-input @sendData="getData"></search-input>
		<el-table v-if="isLoading" v-loading="isLoading" element-loading-text="拼命加载中" style="width:100%;height:200px;">
    	</el-table>
		<div class="container" v-for="(item, index) in searchData" :key="index">
			<movie-item :itemData="item"></movie-item>
		</div>
	</div>
</template>

<script>
import topNav from './../components/header.vue'
import searchInput from './../components/searchInput.vue'
import movieItem from './../components/movieItem.vue'
export default {
	name: 'search',
	components :{
		topNav,
		searchInput,
		movieItem,
		hasMovie: false
	},
	data() {
		return {
			inputText: '',
			searchData:[],
			isLoading: false
		}
	},
	methods: {
		getData: function(data){
			if(data != null){
				this.searchData = [];
				this.inputText = data;
				this.isLoading = true;
				this.searchMovie();
			}else{
				return
			}
		},
		searchMovie: function(){
			this.axios.get("/movie/search?q={"+this.inputText+"}").then(response => {
				this.isLoading = false;
		        this.searchData = response.data.subjects;
	        });
		}
	}
}

</script>

<style scoped>
	.container{width:100%;}
	body{background-color:#fff;}
</style>
<template>
	<div class="box">
		<top-nav title="电影信息"></top-nav>
		<el-table v-if="!isloaded" v-loading="!isloaded" element-loading-text="拼命加载中" style="width:100%;height:200px;">
		</el-table>
		<div v-if="isloaded">
			<div class="relabox">
				<div class="movielogo" v-bind:style="{backgroundImage: 'url(' + imaUrl + ')'}">
					
				</div>
				<div class="movieimg">
					<img v-bind:src="imaUrl" />

					<div class="movieitem">
						<div class="name">{{infoma.title}}</div>
						<p class="pp">{{infoma.original_title}}  (英)</p>
						<div class="name score">{{infoma.rating.average}}分</div>
						<p class="pp">{{infoma.genres|qqqq}}</p>
						<p class="pp">{{infoma.year}}</p>
						<p class="pp">导演  :  {{infoma.directors|daoyan}}</p>
					</div>
				</div>
			</div>
			<div class="yanyuan">
				演员： {{infoma.casts|yanyuana}}
			</div>


			<div class="juqing">
				<p>剧情简介</p>
				<div class="intro" ref="btn">
					{{infoma.summary}}
				</div>
				<div class="juqingbtn" @click="toggleIntro">{{btninner.word}}</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
import topNav from './../components/header.vue'
export default {
	name: 'detail',
	components: {
		topNav
	},
	data() {
		return {
			id: this.$route.params.id,
			infoma: {},
			imaUrl: '',
			btninner: {
				flag: true,
				word: '展开'
			},
			isloaded: false
		}
	},
	methods: {
		getdetail: function(){
			this.axios.get("/movie/subject/" + this.id).then(response => {
		        this.infoma = response.data;
		        this.imaUrl = this.infoma.images.medium;
		        //console.log(this.infoma);
		    });
		},
		toggleIntro: function(){
			if(this.btninner.flag){
				this.btninner.flag = false;
				this.btninner.word = '收起';
				this.$refs.btn.style.maxHeight = '300px';
			}else{
				this.btninner.flag = true;
				this.btninner.word = '展开';
				this.$refs.btn.style.maxHeight = '70px';
			}
		}
	},
	mounted() {
		this.getdetail();
	},
	watch: {
		infoma: function(){
			if(this.infoma != null){
				this.isloaded = true;
			}
		}
	}
}
</script>

<style scoped>
	.box{width:100%;}

	.relabox{width:100%;height:200px;position:relative;}

	.movielogo{width:100%;height:200px;background-repeat:no-repeat;background-size:cover;
	box-shadow:inset 8px 8px 28px #ddd,inset -8px -8px 28px #ddd;overflow:hidden;z-index:1;filter:blur(16px);position:absolute;left:0;top:0;}

	.movieimg{width:100%;height:200px;position:absolute;left:0;top:0;z-index:99999;}
	.movieimg img{display:block;width:30%;height:80%;margin-top:5%;margin-left:5%;margin-right:5%;
		float:left;}

	.movieitem{width:60%;height:100%;float:left;}
	.name{width:100%;height:30px;margin-top:10%;line-height:30px;font-size:18px;
		color:#fff;}
	.movieitem .pp{width:100%;height:22px;line-height:22px;font-size:12px;
		color:#fff;}
	.score{margin-top:0;color:orange;font-weight:bold;}

	.yanyuan{width:90%;height:40px;margin:0 auto;margin-top:20px;font-size:14px;line-height:24px;}
	.juqing{width:90%;margin:0 auto;margin-top:24px;position:relative;}
	.juqing p{width:100%;height:20px;font-weight:bold;font-size:14px;color:#000;}
	.intro{width:100%;max-height:70px;line-height:24px;font-size:14px;text-indent:10px;color:#000;
	overflow:hidden;transition:max-height linear 0.3s;}

	.juqingbtn{width:14%;height:24px;position:absolute;left:43%;bottom:-28px;
		text-align:center;line-height:24px;font-style:14px;color:#000;border:1px solid red;border-radius:4px;}

</style>
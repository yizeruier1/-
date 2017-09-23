<template>
	<div class="itembox">
		<div class="imgbox">
			<img v-lazy="itemData.images.medium" @click="gotodetail(itemData.id)" />
		</div>
		<div class="infobox">
			<div class="name">{{itemData.title}}</div>
			<p>{{itemData.genres|qqqq}}</p>
			<p>导演：{{itemData.directors|daoyan}}</p>
			<p>{{itemData.casts|daoyan}}</p>
			<p>{{itemData.year}}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'movieItem',
	data() {
		return {
			
		}
	},
	props: ['itemData'],
	methods: {
		gotodetail: function(num){
	      this.$router.push({name:'Detail',params:{id:num}})
	    }
	}
}
</script>
<style scoped>
	.itembox{width:94%;height:140px;margin:0 auto;margin-left:3%;border-bottom:1px solid #ddd;}
	.imgbox{width:22%;height:116px;float:left;margin-top:12px;}
	.imgbox img{width:100%;height:100%;border:none;}
	.infobox{width:76%;height:140px;float:left;margin-left:2%;}
	.name{width:100%;height:30px;margin-top:12px;font-size:16px;color:#000;
		font-weight:bold;line-height:30px;}
	.infobox p{width:100%;height:22px;line-height:24px;font-size:12px;color:gray;}
</style>
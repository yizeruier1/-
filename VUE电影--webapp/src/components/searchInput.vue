<template>
	<div class="container">
		<div class="inputbox">
			<input v-model="inputText" type="text" class="word" />
			<p class="searchbtn" @click="sendData">搜索</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'searchInput',
	data() {
		return {
			inputText: ''
		}
	},
	methods: {
		sendData: function(){
			if(this.inputText == ''){
				this.$emit('sendData', null);
			}else{
				this.$emit('sendData', this.inputText);
			}
		}
	}
}

</script>

<style scoped>
	*{margin:0;padding:0;}
	.container{width:100%;}
	.inputbox{width:88%;height:50px;margin:0 auto;margin-top:20px;}
	.word{display:block;width:76%;float:left;height:36px;border:none;border-bottom:1px solid gray;
		font-size:16px;text-indent:4px;}
	.searchbtn{width:18%;height:36px;float:left;background-color:red;margin-left:6%;
		text-align:center;line-height:36px;color:#fff;font-size:14px;border-radius:6px;}
</style>
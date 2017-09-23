<template>
	<div class="container">
		<top-nav title="登录"></top-nav>
		<input v-model="username" type="text" class="username" placeholder="用户名" />
		<input v-model="password" type="password" class="username margin" placeholder="密码" />
		<input type="submit" class="btn" value="登录" />
	</div>
</template>

<script>
import topNav from './../components/header.vue'
export default {
	name: 'login',
	components: {
		topNav
	},
	data() {
		return {
			username: '',
			password: ''
		}
	},

}
</script>

<style scoped>
	*{margin:0;padding:0;}
	.container{width:100%;}
	.username{display:block;width:80%;height:50px;margin:0 auto;margin-top:20px;border:none;border-bottom:1px solid gray;font-size:16px;color:gray;text-indent:4px;}
	.margin{margin-top:2px;}
	.btn{display:block;width:80%;height:40px;margin:12px auto;background-color:orange;color:#fff;
		line-height:40px;font-size:16px;text-align:center;border-radius:6px;border:none;letter-spacing:2px;}
</style>
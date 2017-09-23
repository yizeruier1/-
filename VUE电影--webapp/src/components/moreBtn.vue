<template>
  <div class="container">
	<p>{{btnword}}</p>
  </div>
</template>

<script>
export default {
  name: 'moreBtn',
  data () {
    return {

    }
  },
  props: ['btnword']
}
</script>

<style scoped>
  .container{width:100%;height:80px;margin-bottom:50px;background-color:transparent;}
  .container p{margin:0;padding:0;width:30%;height:30px;margin:23px auto;border-radius:10px;border:2px solid #ddd;color:gray;font-size:12px;text-align:center;line-height:26px;letter-spacing:1px;}
</style>
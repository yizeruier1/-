<template>
	<div class="box">
    	<vue-particles
        color="#000"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="star"
        :particleSize="4"
        linesColor="#000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
       >
       </vue-particles>
    </div>
</template>

<script>
export default {
	name: 'particles',
	data() {
		return {

		}
	},
}
</script>

<style scoped>
	/*.box{width:100%;background-color:rgba(0,0,0,1);height:700px;}*/
</style>
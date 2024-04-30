
<template>
	<van-config-provider theme="light">
		<RouterView />
	</van-config-provider>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'
export default {
  	name: 'App',
};
</script>

<style lang="less" scoped>
:deep(.van-nav-bar) {
	background-color: #408CEA;
	.van-nav-bar__left, .van-nav-bar__title {
		color: #fff;
		i {
			color: #fff;
		}
	}
}
:deep(.van-sticky) {
	.van-button {
		background-color: #408CEA;
		border: none;
		border-radius: 0;
	}
}	
</style>

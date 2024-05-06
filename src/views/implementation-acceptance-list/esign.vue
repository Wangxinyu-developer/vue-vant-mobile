<template>
	<div>
		<SignCanvas ref="SignCanvasRef" signName="项目负责人" @sureHandler="sureSignHandler" />
	</div>
</template>

<script setup name="SignaturePad" lang="ts">
import router from '@/router';

const sureSignHandler = (data: any, name: any) => {
	// console.log('data', data, name);
	router.replace({
		path: '/acceptance/create',
		query: { esignPic: data },
	});
}
</script>

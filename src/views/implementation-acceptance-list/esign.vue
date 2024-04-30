<template>
	<div>
		<SignCanvas ref="SignCanvasRef" signName="项目负责人" @sureHandler="sureSignHandler" />
	</div>
</template>

<script setup name="SignaturePad" lang="ts">
import { getCurrentInstance, reactive } from 'vue';
const { proxy }: any = getCurrentInstance()

const sureSignHandler = (data: any, name: any) => {
	console.log('data', data, name)
}
</script>

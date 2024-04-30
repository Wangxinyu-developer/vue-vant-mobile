<template>
	<div>
		<button @click="showSignaturePad = true">开始签名</button>
		<vue-signature-pad
			v-if="showSignaturePad"
			@save="onSaveSignature"
			@clear="onClearSignature"
		/>
	</div>
</template>

<script setup name="SignaturePad">
import { ref } from 'vue';
import VueSignaturePad from 'vue-esign';

const showSignaturePad = ref(false);
const onSaveSignature = signatureData => {
	console.log('签名数据:', signatureData);
	// 这里可以处理签名数据，比如保存到服务器
	showSignaturePad.value = false;
};
const onClearSignature = () => {
	console.log('签名板已清空');
};
</script>

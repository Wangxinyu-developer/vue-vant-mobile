<!-- 签名组件 -->
<template>
	<div class="signContainer">
		<div class="btns">
			<van-button type="default" round @click="clearHandler" class="reset"
				>重签</van-button
			>
			<van-button type="info" round @click="sureHandler">确认</van-button>
		</div>
		<vue-esign
			ref="VueEsignRef"
			class="vue-esign"
			:width="width"
			:height="height"
			:lineWidth="lineWidth"
			:lineColor="lineColor"
			:bgColor="bgColor"
			:isCrop="isCrop"
			:isClearBgColor="isClearBgColor"
			:format="format"
			:quality="quality"
		/>
		<div :style="{ '--width': height + 'px' }" class="tipText">
			请<span v-if="signName">{{ ` ${signName} ` }}</span
			>在此区域内签名
		</div>
	</div>
</template>

<script>
import { rotateBase64Img } from '@/utils/esign.js';
import { showConfirmDialog } from 'vant';

export default {
	name: 'SignCanvas',
	components: {},

	props: {
		// 画布宽度，即导出图片的宽度
		width: {
			type: Number,
			default: () => {
				const dom = document.querySelector('#app');
				const width = dom && dom.offsetWidth;
				return width ? width - 60 : 300; // 减去按钮区域的宽度
			},
		},
		// 画布高度，即导出图片的高度
		height: {
			type: Number,
			default: () => {
				const dom = document.querySelector('#app');
				return (dom && dom.offsetHeight) || 800;
			},
		},
		// 画笔粗细
		lineWidth: {
			type: Number,
			default: 6,
		},
		// 画笔颜色
		lineColor: {
			type: String,
			default: '#000',
		},
		// 画布背景色，为空时画布背景透明，支持多种格式 '#ccc'，'#E5A1A1'，'rgb(229, 161, 161)'，'rgba(0,0,0,.6)'，'red'
		bgColor: {
			type: String,
			default: '',
		},
		// 是否裁剪，在画布设定尺寸基础上裁掉四周空白部分
		isCrop: {
			type: Boolean,
			default: true,
		},
		// 清空画布时(reset)是否同时清空设置的背景色(bgColor)
		isClearBgColor: {
			type: Boolean,
			default: false,
		},
		// 生成图片格式 image/jpeg(jpg格式下生成的图片透明背景会变黑色请慎用或指定背景色)、 image/webp
		format: {
			type: String,
			default: 'image/png',
		},
		// 生成图片质量；在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。
		quality: {
			type: Number,
			default: 1,
		},
		// 未签名时提示信息
		noSignTipText: {
			type: String,
			default: '请确保已签名！',
		},
		// 需要签名的姓名
		signName: {
			type: String,
			default: '',
		},
	},

	methods: {
		resetHandler() {
			this.$refs.VueEsignRef.reset(); // 清空画布
		},
		clearHandler() {
			this.$emit('clearHandler');
			this.resetHandler();
		},
		sureHandler() {
			// 可选配置参数 ，在未设置format或quality属性时可在生成图片时配置 例如： {format:'image/jpeg', quality: 0.5}
			// this.$refs.esign.generate({format:'image/jpeg', quality: 0.5})
			this.$refs.VueEsignRef.generate()
				.then(res => {
					/**
					 * res：base64图片
					 */
					rotateBase64Img(res, 270, `${this.signName ? this.signName + '-签名.jpg' : 'sign.jpg'}`, '', data => {
					  this.$emit('sureHandler', data)
					})
				})
				.catch(err => {
					console.log('err----', err);
					showConfirmDialog({
						title: '提示',
						message:
							'请完成电子签名。',
						})
						.then(() => {
							// on confirm
						})
						.catch(() => {
							// on cancel
					})
				});
		},
	},
};
</script>

<style lang="less" scoped>
.signContainer {
	width: 100%;
	height: 100vh;
	display: flex;
	background-color: #fff;

	.btns {
		width: 55px;
		background-color: #f8f8f8;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.reset {
			margin-bottom: 70px;
		}
	}
	.vue-esign {
		z-index: 2;
	}
	.tipText {
		position: absolute;
		top: 50%;
		width: var(--width);
		left: calc(50% + 55px);
		transform: translateX(-50%) translateY(-50%) rotateZ(90deg);
		text-align: center;
		color: #ddd;
		letter-spacing: 2px;
	}
}
:deep(.van-button) {
	width: 85px !important;
	height: 35px;
	transform: rotate(90deg) translateY(15px);
	text-align: center;
	.van-button__text {
		letter-spacing: 5px;
	}
}
</style>

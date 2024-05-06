import { d as o, r as s, o as t, c, a as i, i as l } from './index-DHlA2Bj0.js';
const u = o({
	__name: 'esign',
	setup(p) {
		const n = (e, a) => {
			l.replace({ path: '/acceptance/create', query: { esignPic: e } });
		};
		return (e, a) => {
			const r = s('SignCanvas');
			return (
				t(),
				c('div', null, [
					i(
						r,
						{ ref: 'SignCanvasRef', signName: '项目负责人', onSureHandler: n },
						null,
						512,
					),
				])
			);
		};
	},
});
export { u as default };

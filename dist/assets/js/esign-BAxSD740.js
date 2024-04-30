import { d as s, r, o as t, c, a as l } from './index-Dj6Npfnj.js';
const m = s({
	__name: 'esign',
	setup(i) {
		const a = (e, n) => {
			console.log('data', e, n);
		};
		return (e, n) => {
			const o = r('SignCanvas');
			return (
				t(),
				c('div', null, [
					l(
						o,
						{ ref: 'SignCanvasRef', signName: '项目负责人', onSureHandler: a },
						null,
						512,
					),
				])
			);
		};
	},
});
export { m as default };

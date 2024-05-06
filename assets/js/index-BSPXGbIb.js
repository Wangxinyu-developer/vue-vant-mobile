import {
	d as _,
	b as v,
	r as a,
	o as f,
	c as w,
	f as n,
	a as e,
	w as d,
	h as g,
	S as V,
	i as b,
	p as x,
	k as h,
	_ as q,
} from './index-DHlA2Bj0.js';
const S = o => (x('data-v-d3021d64'), (o = o()), h(), o),
	k = { class: 'login' },
	y = { class: 'infoForm' },
	I = S(() =>
		n(
			'div',
			{ class: 'title' },
			[
				n('div', { class: 'title-symbol' }),
				n('div', { class: 'title-text' }, '账号登录'),
			],
			-1,
		),
	),
	B = _({
		__name: 'index',
		setup(o) {
			const s = v({ username: '', password: '' }),
				i = r => {
					console.log(r),
						V.set('token', 'values  weqweqweqwedsafasgg'),
						b.push('/');
				};
			return (r, t) => {
				const c = a('van-field'),
					p = a('van-cell-group'),
					u = a('van-button'),
					m = a('van-form');
				return (
					f(),
					w('div', k, [
						n('div', y, [
							I,
							e(
								m,
								{ onSubmit: i },
								{
									default: d(() => [
										e(
											p,
											{ inset: '' },
											{
												default: d(() => [
													e(
														c,
														{
															modelValue: s.username,
															'onUpdate:modelValue':
																t[0] || (t[0] = l => (s.username = l)),
															name: '用户名',
															placeholder: '用户名',
															'left-icon': 'manager-o',
															rules: [
																{ required: !0, message: '请填写用户名' },
															],
														},
														null,
														8,
														['modelValue'],
													),
													e(
														c,
														{
															modelValue: s.password,
															'onUpdate:modelValue':
																t[1] || (t[1] = l => (s.password = l)),
															type: 'password',
															name: '密码',
															'left-icon': 'question-o',
															placeholder: '密码',
															rules: [{ required: !0, message: '请填写密码' }],
														},
														null,
														8,
														['modelValue'],
													),
												]),
												_: 1,
											},
										),
										e(
											u,
											{
												class: 'login-btn',
												round: '',
												block: '',
												type: 'primary',
												'native-type': 'submit',
											},
											{ default: d(() => [g(' 登录 ')]), _: 1 },
										),
									]),
									_: 1,
								},
							),
						]),
					])
				);
			};
		},
	}),
	N = q(B, [['__scopeId', 'data-v-d3021d64']]);
export { N as default };

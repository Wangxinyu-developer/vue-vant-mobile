import {
	d as b,
	b as u,
	e as h,
	r as t,
	o as d,
	c as l,
	a as s,
	f as a,
	F as k,
	g as x,
	w as v,
	h as y,
	i as V,
	t as g,
	j as C,
	p as X,
	k as S,
	_ as w,
} from './index-CtK80vqh.js';
const I = e => (X('data-v-64af545b'), (e = e()), S(), e),
	N = { class: 'list-container' },
	B = { class: 'acceptance-list-item' },
	K = { class: 'item-title' },
	F = { class: 'item-title-left' },
	j = I(() => a('div', { class: 'item-title-right' }, '验收合格', -1)),
	D = C(
		'<div class="item-info" data-v-64af545b><div class="info-date info-item" data-v-64af545b><div class="info-item-label" data-v-64af545b>验收时间：</div><div class="info-item-value" data-v-64af545b>2021-01-01</div></div><div class="info-saler info-item" data-v-64af545b><div class="info-item-label" data-v-64af545b>销售经理：</div><div class="info-item-value" data-v-64af545b>XXX</div></div><div class="implementation-person info-item" data-v-64af545b><div class="info-item-label" data-v-64af545b>实施人员：</div><div class="info-item-value" data-v-64af545b>XXX</div></div></div>',
		1,
	),
	E = b({
		__name: 'index',
		setup(e) {
			const n = u({ searchKey: '' }),
				o = h(),
				r = () => {
					V.push('/acceptance/create');
				};
			return (L, c) => {
				const _ = t('van-nav-bar'),
					f = t('van-search'),
					m = t('van-button'),
					p = t('van-sticky');
				return (
					d(),
					l(
						'div',
						{ class: 'acceptance-list-page', ref_key: 'container', ref: o },
						[
							s(_, { title: '列表' }),
							s(
								f,
								{
									modelValue: n.searchKey,
									'onUpdate:modelValue':
										c[0] || (c[0] = i => (n.searchKey = i)),
									placeholder: '请输入搜索关键词',
								},
								null,
								8,
								['modelValue'],
							),
							a('div', N, [
								(d(),
								l(
									k,
									null,
									x(15, (i, T) =>
										a('div', B, [
											a('div', K, [a('div', F, '凤凰岭项目' + g(i), 1), j]),
											D,
										]),
									),
									64,
								)),
							]),
							s(
								p,
								{ container: o.value, 'offset-bottom': 0 },
								{
									default: v(() => [
										s(
											m,
											{ block: '', type: 'warning', onClick: r },
											{ default: v(() => [y('创建验收记录')]), _: 1 },
										),
									]),
									_: 1,
								},
								8,
								['container'],
							),
						],
						512,
					)
				);
			};
		},
	}),
	q = w(E, [['__scopeId', 'data-v-64af545b']]);
export { q as default };

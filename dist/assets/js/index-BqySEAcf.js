import {
	d as b,
	b as u,
	e as h,
	r as a,
	o as d,
	c as l,
	a as s,
	f as e,
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
} from './index-DHlA2Bj0.js';
const I = t => (X('data-v-3019fbec'), (t = t()), S(), t),
	N = { class: 'list-container' },
	B = { class: 'acceptance-list-item' },
	K = { class: 'item-title' },
	F = { class: 'item-title-left' },
	j = I(() => e('div', { class: 'item-title-right' }, '验收合格', -1)),
	D = C(
		'<div class="item-info" data-v-3019fbec><div class="info-date info-item" data-v-3019fbec><div class="info-item-label" data-v-3019fbec>验收时间：</div><div class="info-item-value" data-v-3019fbec>2021-01-01</div></div><div class="info-saler info-item" data-v-3019fbec><div class="info-item-label" data-v-3019fbec>销售经理：</div><div class="info-item-value" data-v-3019fbec>XXX</div></div><div class="implementation-person info-item" data-v-3019fbec><div class="info-item-label" data-v-3019fbec>实施人员：</div><div class="info-item-value" data-v-3019fbec>XXX</div></div></div>',
		1,
	),
	E = b({
		__name: 'index',
		setup(t) {
			const c = u({ searchKey: '' }),
				n = h(),
				r = () => {
					V.push('/acceptance/create');
				};
			return (L, o) => {
				const _ = a('van-nav-bar'),
					f = a('van-search'),
					m = a('van-button'),
					p = a('van-sticky');
				return (
					d(),
					l(
						'div',
						{ class: 'acceptance-list-page', ref_key: 'container', ref: n },
						[
							s(_, { title: '列表' }),
							s(
								f,
								{
									modelValue: c.searchKey,
									'onUpdate:modelValue':
										o[0] || (o[0] = i => (c.searchKey = i)),
									placeholder: '请输入搜索关键词',
								},
								null,
								8,
								['modelValue'],
							),
							e('div', N, [
								(d(),
								l(
									k,
									null,
									x(15, (i, T) =>
										e('div', B, [
											e('div', K, [e('div', F, '凤凰岭项目' + g(i), 1), j]),
											D,
										]),
									),
									64,
								)),
							]),
							s(
								p,
								{ container: n.value, 'offset-bottom': 0 },
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
	q = w(E, [['__scopeId', 'data-v-3019fbec']]);
export { q as default };

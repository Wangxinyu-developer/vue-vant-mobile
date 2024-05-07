import {
	d as h,
	b as k,
	e as x,
	r as t,
	o as d,
	c as l,
	a as c,
	f as a,
	F as y,
	g as C,
	w as v,
	h as V,
	i as f,
	t as g,
	j as X,
	p as I,
	k as S,
	_ as w,
} from './index-D2SFDZzs.js';
const N = e => (I('data-v-cb1a8cff'), (e = e()), S(), e),
	B = { class: 'list-container' },
	K = ['onClick'],
	D = { class: 'item-title' },
	F = { class: 'item-title-left' },
	j = N(() => a('div', { class: 'item-title-right' }, '验收合格', -1)),
	E = X(
		'<div class="item-info" data-v-cb1a8cff><div class="info-date info-item" data-v-cb1a8cff><div class="info-item-label" data-v-cb1a8cff>验收时间：</div><div class="info-item-value" data-v-cb1a8cff>2021-01-01</div></div><div class="info-saler info-item" data-v-cb1a8cff><div class="info-item-label" data-v-cb1a8cff>销售经理：</div><div class="info-item-value" data-v-cb1a8cff>XXX</div></div><div class="implementation-person info-item" data-v-cb1a8cff><div class="info-item-label" data-v-cb1a8cff>实施人员：</div><div class="info-item-value" data-v-cb1a8cff>XXX</div></div></div>',
		1,
	),
	L = h({
		__name: 'index',
		setup(e) {
			const i = k({ searchKey: '' }),
				n = x(),
				r = () => {
					f.push('/acceptance/create');
				},
				_ = () => {
					f.push('/acceptance/detail');
				};
			return (T, o) => {
				const p = t('van-nav-bar'),
					m = t('van-search'),
					b = t('van-button'),
					u = t('van-sticky');
				return (
					d(),
					l(
						'div',
						{ class: 'acceptance-list-page', ref_key: 'container', ref: n },
						[
							c(p, { title: '列表' }),
							c(
								m,
								{
									modelValue: i.searchKey,
									'onUpdate:modelValue':
										o[0] || (o[0] = s => (i.searchKey = s)),
									placeholder: '请输入搜索关键词',
								},
								null,
								8,
								['modelValue'],
							),
							a('div', B, [
								(d(),
								l(
									y,
									null,
									C(15, (s, U) =>
										a(
											'div',
											{ class: 'acceptance-list-item', onClick: $ => _() },
											[
												a('div', D, [a('div', F, '凤凰岭项目' + g(s), 1), j]),
												E,
											],
											8,
											K,
										),
									),
									64,
								)),
							]),
							c(
								u,
								{ container: n.value, 'offset-bottom': 0 },
								{
									default: v(() => [
										c(
											b,
											{ block: '', type: 'warning', onClick: r },
											{ default: v(() => [V('创建验收记录')]), _: 1 },
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
	z = w(L, [['__scopeId', 'data-v-cb1a8cff']]);
export { z as default };

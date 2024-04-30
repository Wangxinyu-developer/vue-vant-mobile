import {
	d as S,
	b as x,
	r as s,
	o as M,
	c as N,
	a as o,
	f as g,
	w as n,
	h as d,
	i as k,
	_ as j,
} from './index-CtK80vqh.js';
const $ = { class: 'acceptance-create-page', ref: 'container' },
	A = { class: 'form-container' },
	B = { style: { margin: '16px' } },
	h = S({
		__name: 'create',
		setup(E) {
			const l = x({
					projectName: '',
					address: '',
					company: '',
					contact: '',
					contactPhone: '',
					hardwareName: '',
					number: '',
					units: '',
					position: '',
					photos: [],
					startDate: '',
					acceptanceDate: '',
					conclusion: '',
					suggestion: '',
					remark: '',
					salesManager: '',
					implementer: '',
					projectManager: '',
					showPicker: !1,
					dateSelectAttr: 'startDate',
					showSelectPicker: !1,
					selectOptions: [],
					selectedAttr: 'salesManager',
				}),
				b = () => {
					k.go(-1);
				},
				v = r => {
					console.log('submit', r);
				},
				f = ({ selectedValues: r }) => {
					switch (l.dateSelectAttr) {
						case 'startDate':
							l.startDate = r.join('/');
							break;
						case 'acceptanceDate':
							l.acceptanceDate = r.join('/');
							break;
					}
					l.showPicker = !1;
				},
				i = r => {
					(l.dateSelectAttr = r), (l.showPicker = !0);
				},
				w = ({ selectedOptions: r }) => {
					var e, u;
					switch (l.selectedAttr) {
						case 'salesManager':
							l.salesManager = (e = r[0]) == null ? void 0 : e.text;
							break;
						case 'implementer':
							l.implementer = (u = r[0]) == null ? void 0 : u.text;
							break;
					}
					l.showSelectPicker = !1;
				},
				m = r => {
					(l.showSelectPicker = !0), (l.selectedAttr = r);
				},
				U = () => {
					k.push('/acceptance/esign');
				};
			return (r, e) => {
				const u = s('van-nav-bar'),
					t = s('van-field'),
					q = s('van-uploader'),
					P = s('van-date-picker'),
					p = s('van-popup'),
					c = s('van-radio'),
					_ = s('van-radio-group'),
					y = s('van-picker'),
					V = s('van-button'),
					C = s('van-cell-group'),
					D = s('van-form');
				return (
					M(),
					N(
						'div',
						$,
						[
							o(u, {
								title: '新建',
								'left-text': '返回',
								'left-arrow': '',
								onClickLeft: b,
							}),
							g('div', A, [
								o(
									D,
									{ onSubmit: v },
									{
										default: n(() => [
											o(
												C,
												{ inset: '' },
												{
													default: n(() => [
														o(
															t,
															{
																modelValue: l.projectName,
																'onUpdate:modelValue':
																	e[0] || (e[0] = a => (l.projectName = a)),
																name: '项目名称',
																label: '项目名称',
																placeholder: '项目名称',
																rules: [
																	{ required: !0, message: '请填写项目名称' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																modelValue: l.address,
																'onUpdate:modelValue':
																	e[1] || (e[1] = a => (l.address = a)),
																name: '项目地址',
																label: '项目地址',
																placeholder: '请填写项目地址',
																rules: [
																	{ required: !0, message: '请填写项目地址' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																modelValue: l.company,
																'onUpdate:modelValue':
																	e[2] || (e[2] = a => (l.company = a)),
																name: '所属单位',
																label: '所属单位',
																placeholder: '请填写所属单位',
																rules: [
																	{ required: !0, message: '请填写所属单位' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																modelValue: l.contact,
																'onUpdate:modelValue':
																	e[3] || (e[3] = a => (l.contact = a)),
																name: '联系人',
																label: '联系人',
																placeholder: '请填写联系人',
																rules: [
																	{ required: !0, message: '请填写联系人' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																modelValue: l.contactPhone,
																'onUpdate:modelValue':
																	e[4] || (e[4] = a => (l.contactPhone = a)),
																name: '联系人电话',
																label: '联系人电话',
																placeholder: '请填写联系人电话',
																rules: [
																	{ required: !0, message: '请填写联系人电话' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																modelValue: l.hardwareName,
																'onUpdate:modelValue':
																	e[5] || (e[5] = a => (l.hardwareName = a)),
																name: '硬件名称',
																label: '硬件名称',
																placeholder: '请填写硬件名称',
																rules: [
																	{ required: !0, message: '请填写硬件名称' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{ name: '数量', label: '数量' },
															{
																input: n(() => [
																	o(
																		t,
																		{
																			modelValue: l.number,
																			'onUpdate:modelValue':
																				e[6] || (e[6] = a => (l.number = a)),
																			placeholder: '请填写硬件数量',
																			style: { width: '50%', padding: '0' },
																			rules: [
																				{
																					required: !0,
																					message: '请填写硬件数量',
																				},
																			],
																		},
																		null,
																		8,
																		['modelValue'],
																	),
																	o(
																		t,
																		{
																			modelValue: l.number,
																			'onUpdate:modelValue':
																				e[7] || (e[7] = a => (l.number = a)),
																			'is-link': '',
																			readonly: '',
																			name: 'picker',
																			placeholder: '单位',
																			rules: [
																				{ required: !0, message: '请选择单位' },
																			],
																			style: {
																				width: '40%',
																				padding: '0 0 0 20px',
																			},
																			onClick: e[8] || (e[8] = a => m('units')),
																		},
																		null,
																		8,
																		['modelValue'],
																	),
																]),
																_: 1,
															},
														),
														o(
															t,
															{
																modelValue: l.position,
																'onUpdate:modelValue':
																	e[9] || (e[9] = a => (l.position = a)),
																name: '安装位置',
																label: '安装位置',
																placeholder: '请填写安装位置',
																rules: [
																	{ required: !0, message: '请填写安装位置' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																label: '现场照片',
																name: 'uploader',
																rules: [
																	{ required: !0, message: '请填写现场照片' },
																],
															},
															{
																input: n(() => [
																	o(
																		q,
																		{
																			modelValue: l.photos,
																			'onUpdate:modelValue':
																				e[10] || (e[10] = a => (l.photos = a)),
																		},
																		null,
																		8,
																		['modelValue'],
																	),
																]),
																_: 1,
															},
														),
														o(
															t,
															{
																modelValue: l.startDate,
																'onUpdate:modelValue':
																	e[11] || (e[11] = a => (l.startDate = a)),
																'is-link': '',
																readonly: '',
																onClick: e[12] || (e[12] = a => i('startDate')),
																name: '开始安装日期',
																label: '开始安装日期',
																placeholder: '请填写开始安装日期',
																rules: [
																	{
																		required: !0,
																		message: '请填写开始安装日期',
																	},
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															p,
															{
																show: l.showPicker,
																'onUpdate:show':
																	e[14] || (e[14] = a => (l.showPicker = a)),
																position: 'bottom',
															},
															{
																default: n(() => [
																	o(P, {
																		onConfirm: f,
																		onCancel:
																			e[13] ||
																			(e[13] = a => (l.showPicker = !1)),
																	}),
																]),
																_: 1,
															},
															8,
															['show'],
														),
														o(
															t,
															{
																modelValue: l.acceptanceDate,
																'onUpdate:modelValue':
																	e[15] ||
																	(e[15] = a => (l.acceptanceDate = a)),
																'is-link': '',
																readonly: '',
																onClick:
																	e[16] || (e[16] = a => i('acceptanceDate')),
																name: '验收日期',
																label: '验收日期',
																placeholder: '请填写验收日期',
																rules: [
																	{ required: !0, message: '请填写验收日期' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																name: 'radio',
																label: '验收结论',
																rules: [
																	{ required: !0, message: '请填写验收结论' },
																],
															},
															{
																input: n(() => [
																	o(
																		_,
																		{
																			modelValue: l.conclusion,
																			'onUpdate:modelValue':
																				e[17] ||
																				(e[17] = a => (l.conclusion = a)),
																			direction: 'horizontal',
																		},
																		{
																			default: n(() => [
																				o(
																					c,
																					{ name: '1' },
																					{
																						default: n(() => [d('验收合格')]),
																						_: 1,
																					},
																				),
																				o(
																					c,
																					{ name: '2' },
																					{
																						default: n(() => [
																							d('整改后进行复查'),
																						]),
																						_: 1,
																					},
																				),
																			]),
																			_: 1,
																		},
																		8,
																		['modelValue'],
																	),
																]),
																_: 1,
															},
														),
														o(
															t,
															{
																modelValue: l.suggestion,
																'onUpdate:modelValue':
																	e[18] || (e[18] = a => (l.suggestion = a)),
																name: '验收意见',
																label: '验收意见',
																placeholder: '请填写验收意见',
																rules: [
																	{ required: !0, message: '请填写验收意见' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																modelValue: l.salesManager,
																'onUpdate:modelValue':
																	e[19] || (e[19] = a => (l.salesManager = a)),
																'is-link': '',
																readonly: '',
																name: 'picker',
																label: '销售经理',
																placeholder: '请填写销售经理',
																rules: [
																	{ required: !0, message: '请填写销售经理' },
																],
																onClick:
																	e[20] || (e[20] = a => m('salesManager')),
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{
																modelValue: l.implementer,
																'onUpdate:modelValue':
																	e[21] || (e[21] = a => (l.implementer = a)),
																'is-link': '',
																readonly: '',
																name: 'picker',
																label: '安装单位实施人员',
																placeholder: '请填写安装单位实施人员',
																rules: [
																	{
																		required: !0,
																		message: '请填写安装单位实施人员',
																	},
																],
																onClick:
																	e[22] || (e[22] = a => m('implementer')),
															},
															null,
															8,
															['modelValue'],
														),
														o(
															p,
															{
																show: l.showSelectPicker,
																'onUpdate:show':
																	e[24] ||
																	(e[24] = a => (l.showSelectPicker = a)),
																position: 'bottom',
															},
															{
																default: n(() => [
																	o(
																		y,
																		{
																			columns: l.selectOptions,
																			onConfirm: w,
																			onCancel:
																				e[23] ||
																				(e[23] = a =>
																					(l.showSelectPicker = !1)),
																		},
																		null,
																		8,
																		['columns'],
																	),
																]),
																_: 1,
															},
															8,
															['show'],
														),
														o(
															t,
															{
																modelValue: l.projectManager,
																'onUpdate:modelValue':
																	e[25] ||
																	(e[25] = a => (l.projectManager = a)),
																name: '项目负责人',
																label: '项目负责人',
																placeholder: '请填写项目负责人',
																rules: [
																	{ required: !0, message: '请填写项目负责人' },
																],
															},
															null,
															8,
															['modelValue'],
														),
														o(
															t,
															{ name: 'button', label: '项目负责人' },
															{
																input: n(() => [
																	o(
																		V,
																		{
																			round: '',
																			block: '',
																			type: 'primary',
																			onClick: U,
																		},
																		{
																			default: n(() => [d(' 电子签名 ')]),
																			_: 1,
																		},
																	),
																]),
																_: 1,
															},
														),
													]),
													_: 1,
												},
											),
											g('div', B, [
												o(
													V,
													{
														round: '',
														block: '',
														type: 'primary',
														'native-type': 'submit',
													},
													{ default: n(() => [d(' 提交 ')]), _: 1 },
												),
											]),
										]),
										_: 1,
									},
								),
							]),
						],
						512,
					)
				);
			};
		},
	}),
	I = j(h, [['__scopeId', 'data-v-1e8f2134']]);
export { I as default };

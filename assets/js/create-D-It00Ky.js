import {
	d as C,
	b as D,
	r,
	o as S,
	c as x,
	a as o,
	f as V,
	w as s,
	j as M,
	h as m,
	_ as j,
} from './index-Bf9mgnPZ.js';
const N = { class: 'acceptance-create-page', ref: 'container' },
	$ = { class: 'form-container' },
	A = { style: { margin: '16px' } },
	B = C({
		__name: 'create',
		setup(h) {
			const l = D({
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
				g = () => {
					M.go(-1);
				},
				k = n => {
					console.log('submit', n);
				},
				v = ({ selectedValues: n }) => {
					switch (l.dateSelectAttr) {
						case 'startDate':
							l.startDate = n.join('/');
							break;
						case 'acceptanceDate':
							l.acceptanceDate = n.join('/');
							break;
					}
					l.showPicker = !1;
				},
				i = n => {
					(l.dateSelectAttr = n), (l.showPicker = !0);
				},
				b = ({ selectedOptions: n }) => {
					var e, u;
					switch (l.selectedAttr) {
						case 'salesManager':
							l.salesManager = (e = n[0]) == null ? void 0 : e.text;
							break;
						case 'implementer':
							l.implementer = (u = n[0]) == null ? void 0 : u.text;
							break;
					}
					l.showSelectPicker = !1;
				},
				d = n => {
					(l.showSelectPicker = !0), (l.selectedAttr = n);
				};
			return (n, e) => {
				const u = r('van-nav-bar'),
					t = r('van-field'),
					f = r('van-uploader'),
					w = r('van-date-picker'),
					p = r('van-popup'),
					c = r('van-radio'),
					U = r('van-radio-group'),
					q = r('van-picker'),
					P = r('van-cell-group'),
					_ = r('van-button'),
					y = r('van-form');
				return (
					S(),
					x(
						'div',
						N,
						[
							o(u, {
								title: '新建',
								'left-text': '返回',
								'left-arrow': '',
								onClickLeft: g,
							}),
							V('div', $, [
								o(
									y,
									{ onSubmit: k },
									{
										default: s(() => [
											o(
												P,
												{ inset: '' },
												{
													default: s(() => [
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
																input: s(() => [
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
																			onClick: e[8] || (e[8] = a => d('units')),
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
																input: s(() => [
																	o(
																		f,
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
																default: s(() => [
																	o(w, {
																		onConfirm: v,
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
																input: s(() => [
																	o(
																		U,
																		{
																			modelValue: l.conclusion,
																			'onUpdate:modelValue':
																				e[17] ||
																				(e[17] = a => (l.conclusion = a)),
																			direction: 'horizontal',
																		},
																		{
																			default: s(() => [
																				o(
																					c,
																					{ name: '1' },
																					{
																						default: s(() => [m('验收合格')]),
																						_: 1,
																					},
																				),
																				o(
																					c,
																					{ name: '2' },
																					{
																						default: s(() => [
																							m('整改后进行复查'),
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
																	e[20] || (e[20] = a => d('salesManager')),
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
																	e[22] || (e[22] = a => d('implementer')),
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
																default: s(() => [
																	o(
																		q,
																		{
																			columns: l.selectOptions,
																			onConfirm: b,
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
													]),
													_: 1,
												},
											),
											V('div', A, [
												o(
													_,
													{
														round: '',
														block: '',
														type: 'primary',
														'native-type': 'submit',
													},
													{ default: s(() => [m(' 提交 ')]), _: 1 },
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
	E = j(B, [['__scopeId', 'data-v-fc97b047']]);
export { E as default };

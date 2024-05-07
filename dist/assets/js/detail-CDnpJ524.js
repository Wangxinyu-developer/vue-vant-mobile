import {
	d as ae,
	b as oe,
	l as ne,
	i as F,
	r as s,
	o as i,
	c as v,
	a as o,
	f as d,
	w as r,
	F as w,
	g as P,
	m as g,
	h as b,
	t as k,
	n as C,
	_ as le,
} from './index-D2SFDZzs.js';
import { _ as U } from './lodash-CzVTH62A.js';
const re = { class: 'acceptance-detail-page', ref: 'container' },
	se = { class: 'form-container' },
	ie = { key: 1 },
	ue = { class: 'lists' },
	me = ['onClick'],
	de = { class: 'name' },
	ce = { class: 'from-popup' },
	pe = { class: 'from-popup-field' },
	ve = ae({
		__name: 'detail',
		setup(ge) {
			const e = oe({
				vantForm: {
					projectName: '',
					address: '',
					company: '',
					contact: '',
					contactPhone: '',
					hardwareInfo: [],
					startDate: '',
					acceptanceDate: '',
					conclusion: '',
					suggestion: '',
					salesManager: '',
					implementer: '',
					projectManager: '',
					signBase64: '',
				},
				singleHardwareInfo: {
					hardwareName: '',
					number: '',
					units: '',
					position: '',
					photos: [],
				},
				showPicker: !1,
				dateSelectAttr: 'startDate',
				showSelectPicker: !1,
				selectOptions: [],
				selectedAttr: 'units',
				showMultiSelect: !1,
				selectedMultiAttr: 'salesManager',
				selectMultiOptions: [],
				tempMultiSelect: '',
				projectFilterString: '',
				showProjectFilter: !1,
				projectOptions: [],
				originProjectOptions: [],
				detailTitle: '详情',
				editStatus: !1,
			});
			ne(() => {
				e.vantForm.hardwareInfo.push(e.singleHardwareInfo),
					(e.selectOptions = [
						{ text: 1, value: 1 },
						{ text: 2, value: 2 },
					]),
					(e.projectOptions = [
						{ text: '项目a1', value: 1 },
						{ text: '项目b2', value: 2 },
					]),
					(e.originProjectOptions = U.cloneDeep(e.projectOptions)),
					F.currentRoute.value.query.esignPic &&
						(e.vantForm.signBase64 = F.currentRoute.value.query.esignPic);
			});
			const y = () => {
					console.log('state.projectFilterString is', e.projectFilterString),
						e.projectFilterString === ''
							? (e.projectOptions = U.cloneDeep(e.originProjectOptions))
							: (e.projectOptions = e.originProjectOptions.filter(n =>
									n.text.includes(e.projectFilterString),
								));
				},
				O = () => {
					e.showProjectFilter = !1;
				},
				D = () => {
					e.showProjectFilter = !1;
				},
				c = () => e.editStatus,
				I = () => {
					c() && (e.showProjectFilter = !0);
				},
				q = n => {
					let t = !1;
					switch (e.selectedMultiAttr) {
						case 'salesManager':
							t = e.vantForm.salesManager.split(',').some(u => u === n.value);
							break;
						case 'implementer':
							t = e.vantForm.implementer.split(',').some(u => u === n.text);
							break;
					}
					return t;
				},
				A = () => {
					e.showMultiSelect = !1;
				},
				N = () => {
					switch (e.selectedMultiAttr) {
						case 'salesManager':
							e.vantForm.salesManager = e.tempMultiSelect;
							break;
						case 'implementer':
							e.vantForm.implementer = e.tempMultiSelect;
							break;
					}
					e.showMultiSelect = !1;
				},
				$ = n => {
					switch (e.selectedMultiAttr) {
						case 'salesManager':
							let t = e.vantForm.salesManager.split(',');
							if (e.vantForm.salesManager.includes(n.text)) {
								let l = t.filter(u => u !== n.text);
								e.vantForm.salesManager = l.join(',');
							} else
								t.push(n.text),
									t[0]
										? (e.vantForm.salesManager = t.join(','))
										: (e.vantForm.salesManager = t[1]);
							break;
						case 'implementer':
							let p = e.vantForm.implementer.split(',');
							if (e.vantForm.implementer.includes(n.text)) {
								let l = p.filter(u => u !== n.text);
								e.vantForm.implementer = l.join(',');
							} else
								p.push(n.text),
									p[0]
										? (e.vantForm.implementer = p.join(','))
										: (e.vantForm.implementer = p[1]);
							break;
					}
				},
				B = () => [
					{ text: '个', value: '个' },
					{ text: '台', value: '台' },
					{ text: '套', value: '套' },
					{ text: '箱', value: '箱' },
					{ text: '卷', value: '卷' },
					{ text: '瓶', value: '瓶' },
					{ text: '箱', value: '箱' },
				],
				L = () => [
					{ text: '张三', value: '张三' },
					{ text: '李四', value: '李四' },
					{ text: '王五', value: '王五' },
					{ text: '赵六', value: '赵六' },
					{ text: '孙七', value: '孙七' },
					{ text: '周八', value: '周八' },
				],
				H = () => [
					{ text: '张三i', value: '张三' },
					{ text: '李四i', value: '李四' },
					{ text: '王五i', value: '王五' },
					{ text: '赵六i', value: '赵六' },
					{ text: '孙七i', value: '孙七' },
					{ text: '周八i', value: '周八' },
				],
				E = () => {
					F.go(-1);
				},
				T = n => {
					console.log('submit', n, e.vantForm);
				},
				R = ({ selectedValues: n }) => {
					switch (e.dateSelectAttr) {
						case 'startDate':
							e.vantForm.startDate = n.join('/');
							break;
						case 'acceptanceDate':
							e.vantForm.acceptanceDate = n.join('/');
							break;
					}
					e.showPicker = !1;
				},
				h = n => {
					c() && ((e.dateSelectAttr = n), (e.showPicker = !0));
				},
				z = ({ selectedOptions: n }) => {
					var t;
					switch (e.selectedAttr) {
						case 'salesManager':
							e.vantForm.salesManager = (t = n[0]) == null ? void 0 : t.text;
							break;
					}
					e.showSelectPicker = !1;
				},
				G = n => {
					if (c())
						switch (((e.showSelectPicker = !0), (e.selectedAttr = n), n)) {
							case 'units':
								e.selectOptions = B();
								break;
						}
				},
				_ = n => {
					if (c())
						switch (((e.showMultiSelect = !0), (e.selectedMultiAttr = n), n)) {
							case 'salesManager':
								(e.tempMultiSelect = e.vantForm.salesManager),
									(e.selectMultiOptions = L());
								break;
							case 'implementer':
								(e.tempMultiSelect = e.vantForm.implementer),
									(e.selectMultiOptions = H());
								break;
						}
				},
				M = () => {
					c() && F.push('/acceptance/esign');
				},
				J = () => {
					e.vantForm.hardwareInfo.push(e.singleHardwareInfo);
				};
			return (n, t) => {
				const p = s('van-nav-bar'),
					l = s('van-field'),
					u = s('van-icon'),
					K = s('van-uploader'),
					x = s('van-radio'),
					Q = s('van-radio-group'),
					W = s('van-image'),
					X = s('van-button'),
					Y = s('van-date-picker'),
					f = s('van-popup'),
					S = s('van-picker'),
					Z = s('van-cell-group'),
					V = s('van-action-bar-button'),
					ee = s('van-action-bar'),
					te = s('van-form');
				return (
					i(),
					v(
						'div',
						re,
						[
							o(
								p,
								{
									title: e.detailTitle,
									'left-text': '返回',
									'left-arrow': '',
									onClickLeft: E,
								},
								null,
								8,
								['title'],
							),
							d('div', se, [
								o(
									te,
									{ onSubmit: T, readonly: !e.editStatus },
									{
										default: r(() => [
											o(
												Z,
												{ inset: '' },
												{
													default: r(() => [
														o(
															l,
															{
																modelValue: e.vantForm.projectName,
																'onUpdate:modelValue':
																	t[0] ||
																	(t[0] = a => (e.vantForm.projectName = a)),
																readonly: '',
																name: 'projectName',
																label: '项目名称',
																placeholder: '项目名称',
																rules: [
																	{ required: !0, message: '请填写项目名称' },
																],
																onClick: I,
															},
															null,
															8,
															['modelValue'],
														),
														o(
															l,
															{
																modelValue: e.vantForm.address,
																'onUpdate:modelValue':
																	t[1] ||
																	(t[1] = a => (e.vantForm.address = a)),
																name: 'address',
																label: '项目地址',
																placeholder: '请填写项目地址',
															},
															null,
															8,
															['modelValue'],
														),
														o(
															l,
															{
																modelValue: e.vantForm.company,
																'onUpdate:modelValue':
																	t[2] ||
																	(t[2] = a => (e.vantForm.company = a)),
																name: 'company',
																label: '所属单位',
																placeholder: '请填写所属单位',
															},
															null,
															8,
															['modelValue'],
														),
														o(
															l,
															{
																modelValue: e.vantForm.contact,
																'onUpdate:modelValue':
																	t[3] ||
																	(t[3] = a => (e.vantForm.contact = a)),
																name: 'contact',
																label: '联系人',
																placeholder: '请填写联系人',
															},
															null,
															8,
															['modelValue'],
														),
														o(
															l,
															{
																modelValue: e.vantForm.contactPhone,
																'onUpdate:modelValue':
																	t[4] ||
																	(t[4] = a => (e.vantForm.contactPhone = a)),
																name: 'contactPhone',
																label: '联系人电话',
																placeholder: '请填写联系人电话',
															},
															null,
															8,
															['modelValue'],
														),
														(i(!0),
														v(
															w,
															null,
															P(
																e.vantForm.hardwareInfo,
																(a, j) => (
																	i(),
																	v(
																		w,
																		null,
																		[
																			o(
																				l,
																				{ name: '硬件名称', label: '硬件名称' },
																				{
																					input: r(() => [
																						o(
																							l,
																							{
																								modelValue: a.hardwareName,
																								'onUpdate:modelValue': m =>
																									(a.hardwareName = m),
																								placeholder: '请填写硬件名称',
																								rules: [
																									{
																										required: !0,
																										message: '请填写硬件名称',
																									},
																								],
																								style: {
																									width: '100%',
																									padding: '0',
																								},
																							},
																							null,
																							8,
																							[
																								'modelValue',
																								'onUpdate:modelValue',
																							],
																						),
																						j ===
																							e.vantForm.hardwareInfo.length -
																								1 && c()
																							? (i(),
																								g(u, {
																									key: 0,
																									name: 'add-o',
																									onClick: J,
																								}))
																							: C('', !0),
																					]),
																					_: 2,
																				},
																				1024,
																			),
																			o(
																				l,
																				{ name: '数量', label: '数量' },
																				{
																					input: r(() => [
																						o(
																							l,
																							{
																								modelValue: a.number,
																								'onUpdate:modelValue': m =>
																									(a.number = m),
																								placeholder: '请填写硬件数量',
																								style: {
																									width: '50%',
																									padding: '0',
																								},
																								rules: [
																									{
																										required: !0,
																										message: '请填写硬件数量',
																									},
																								],
																							},
																							null,
																							8,
																							[
																								'modelValue',
																								'onUpdate:modelValue',
																							],
																						),
																						o(
																							l,
																							{
																								modelValue: a.units,
																								'onUpdate:modelValue': m =>
																									(a.units = m),
																								'is-link': '',
																								readonly: '',
																								name: 'picker',
																								placeholder: '单位',
																								rules: [
																									{
																										required: !0,
																										message: '请选择单位',
																									},
																								],
																								style: {
																									width: '50%',
																									padding: '0 0 0 20px',
																								},
																								onClick:
																									t[5] ||
																									(t[5] = m => G('units')),
																							},
																							null,
																							8,
																							[
																								'modelValue',
																								'onUpdate:modelValue',
																							],
																						),
																					]),
																					_: 2,
																				},
																				1024,
																			),
																			o(
																				l,
																				{
																					modelValue: a.position,
																					'onUpdate:modelValue': m =>
																						(a.position = m),
																					name: '安装位置',
																					label: '安装位置',
																					placeholder: '请填写安装位置',
																					rules: [
																						{
																							required: !0,
																							message: '请填写安装位置',
																						},
																					],
																				},
																				null,
																				8,
																				['modelValue', 'onUpdate:modelValue'],
																			),
																			o(
																				l,
																				{ label: '现场照片', name: 'uploader' },
																				{
																					input: r(() => [
																						o(
																							K,
																							{
																								modelValue: a.photos,
																								'onUpdate:modelValue': m =>
																									(a.photos = m),
																								'show-upload': c(),
																							},
																							null,
																							8,
																							[
																								'modelValue',
																								'onUpdate:modelValue',
																								'show-upload',
																							],
																						),
																					]),
																					_: 2,
																				},
																				1024,
																			),
																		],
																		64,
																	)
																),
															),
															256,
														)),
														o(
															l,
															{
																modelValue: e.vantForm.startDate,
																'onUpdate:modelValue':
																	t[6] ||
																	(t[6] = a => (e.vantForm.startDate = a)),
																'is-link': '',
																readonly: '',
																onClick: t[7] || (t[7] = a => h('startDate')),
																name: '开始安装日期',
																label: '开始安装日期',
																placeholder: '请填写开始安装日期',
															},
															null,
															8,
															['modelValue'],
														),
														o(
															l,
															{
																modelValue: e.vantForm.acceptanceDate,
																'onUpdate:modelValue':
																	t[8] ||
																	(t[8] = a => (e.vantForm.acceptanceDate = a)),
																'is-link': '',
																readonly: '',
																onClick:
																	t[9] || (t[9] = a => h('acceptanceDate')),
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
															l,
															{
																name: 'radio',
																label: '验收结论',
																rules: [
																	{ required: !0, message: '请填写验收结论' },
																],
															},
															{
																input: r(() => [
																	c()
																		? (i(),
																			g(
																				Q,
																				{
																					key: 0,
																					modelValue: e.vantForm.conclusion,
																					'onUpdate:modelValue':
																						t[10] ||
																						(t[10] = a =>
																							(e.vantForm.conclusion = a)),
																					direction: 'horizontal',
																				},
																				{
																					default: r(() => [
																						o(
																							x,
																							{ name: '1' },
																							{
																								default: r(() => [
																									b('验收合格'),
																								]),
																								_: 1,
																							},
																						),
																						o(
																							x,
																							{ name: '2' },
																							{
																								default: r(() => [
																									b('整改后进行复查'),
																								]),
																								_: 1,
																							},
																						),
																					]),
																					_: 1,
																				},
																				8,
																				['modelValue'],
																			))
																		: (i(),
																			v(
																				'span',
																				ie,
																				k(e.vantForm.conclusion),
																				1,
																			)),
																]),
																_: 1,
															},
														),
														o(
															l,
															{
																modelValue: e.vantForm.suggestion,
																'onUpdate:modelValue':
																	t[11] ||
																	(t[11] = a => (e.vantForm.suggestion = a)),
																name: '验收意见',
																label: '验收意见',
																placeholder: '请填写验收意见',
															},
															null,
															8,
															['modelValue'],
														),
														o(
															l,
															{
																modelValue: e.vantForm.salesManager,
																'onUpdate:modelValue':
																	t[12] ||
																	(t[12] = a => (e.vantForm.salesManager = a)),
																name: 'picker',
																label: '销售经理',
																rules: [
																	{ required: !0, message: '请填写销售经理' },
																],
																onClick:
																	t[13] || (t[13] = a => _('salesManager')),
															},
															{
																input: r(() => [
																	d(
																		'span',
																		null,
																		k(
																			e.vantForm.salesManager.length
																				? e.vantForm.salesManager
																				: '请选择',
																		),
																		1,
																	),
																]),
																_: 1,
															},
															8,
															['modelValue'],
														),
														o(
															l,
															{
																modelValue: e.vantForm.implementer,
																'onUpdate:modelValue':
																	t[14] ||
																	(t[14] = a => (e.vantForm.implementer = a)),
																label: '安装单位实施人员',
																rules: [
																	{
																		required: !0,
																		message: '请填写安装单位实施人员',
																	},
																],
																onClick:
																	t[15] || (t[15] = a => _('implementer')),
															},
															{
																input: r(() => [
																	d(
																		'span',
																		null,
																		k(
																			e.vantForm.implementer.length
																				? e.vantForm.implementer
																				: '请选择',
																		),
																		1,
																	),
																]),
																_: 1,
															},
															8,
															['modelValue'],
														),
														o(
															l,
															{ name: 'button', label: '项目负责人' },
															{
																input: r(() => [
																	e.vantForm.signBase64
																		? (i(),
																			g(
																				W,
																				{
																					key: 0,
																					width: '200',
																					height: '100',
																					src: e.vantForm.signBase64,
																					onClick: M,
																				},
																				null,
																				8,
																				['src'],
																			))
																		: (i(),
																			g(
																				X,
																				{
																					key: 1,
																					round: '',
																					block: '',
																					type: 'primary',
																					onClick: M,
																				},
																				{
																					default: r(() => [b(' 电子签名 ')]),
																					_: 1,
																				},
																			)),
																]),
																_: 1,
															},
														),
														o(
															f,
															{
																show: e.showPicker,
																'onUpdate:show':
																	t[17] || (t[17] = a => (e.showPicker = a)),
																position: 'bottom',
															},
															{
																default: r(() => [
																	o(Y, {
																		onConfirm: R,
																		onCancel:
																			t[16] ||
																			(t[16] = a => (e.showPicker = !1)),
																	}),
																]),
																_: 1,
															},
															8,
															['show'],
														),
														o(
															f,
															{
																show: e.showSelectPicker,
																'onUpdate:show':
																	t[19] ||
																	(t[19] = a => (e.showSelectPicker = a)),
																position: 'bottom',
															},
															{
																default: r(() => [
																	o(
																		S,
																		{
																			columns: e.selectOptions,
																			onConfirm: z,
																			onCancel:
																				t[18] ||
																				(t[18] = a =>
																					(e.showSelectPicker = !1)),
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
															f,
															{
																show: e.showMultiSelect,
																'onUpdate:show':
																	t[20] ||
																	(t[20] = a => (e.showMultiSelect = a)),
																position: 'bottom',
																class: 'search-data-popup',
															},
															{
																default: r(() => [
																	d('div', { class: 'header-line' }, [
																		d(
																			'div',
																			{ class: 'cancel', onClick: N },
																			'取消',
																		),
																		d(
																			'div',
																			{ class: 'sure', onClick: A },
																			'确认',
																		),
																	]),
																	d('div', ue, [
																		(i(!0),
																		v(
																			w,
																			null,
																			P(
																				e.selectMultiOptions,
																				a => (
																					i(),
																					v(
																						'div',
																						{
																							class: 'line',
																							onClick: j => $(a),
																						},
																						[
																							d('div', de, k(a.text), 1),
																							q(a)
																								? (i(),
																									g(u, {
																										key: 0,
																										name: 'success',
																									}))
																								: C('', !0),
																						],
																						8,
																						me,
																					)
																				),
																			),
																			256,
																		)),
																	]),
																]),
																_: 1,
															},
															8,
															['show'],
														),
														o(
															f,
															{
																show: e.showProjectFilter,
																'onUpdate:show':
																	t[22] ||
																	(t[22] = a => (e.showProjectFilter = a)),
																position: 'bottom',
															},
															{
																default: r(() => [
																	d('div', ce, [
																		o(
																			S,
																			{
																				'show-toolbar': '',
																				columns: e.projectOptions,
																				onConfirm: O,
																				onCancel: D,
																			},
																			{
																				title: r(() => [
																					d('div', pe, [
																						o(
																							l,
																							{
																								modelValue:
																									e.projectFilterString,
																								'onUpdate:modelValue': [
																									t[21] ||
																										(t[21] = a =>
																											(e.projectFilterString =
																												a)),
																									y,
																								],
																								placeholder: '输入项目名称',
																								center: !0,
																								clearable: '',
																							},
																							null,
																							8,
																							['modelValue'],
																						),
																					]),
																				]),
																				_: 1,
																			},
																			8,
																			['columns'],
																		),
																	]),
																]),
																_: 1,
															},
															8,
															['show'],
														),
													]),
													_: 1,
												},
											),
											o(ee, null, {
												default: r(() => [
													e.editStatus
														? (i(),
															v(
																w,
																{ key: 1 },
																[
																	o(V, {
																		color: '#7232dd',
																		type: 'danger',
																		text: '确 定',
																		'native-type': 'submit',
																	}),
																	o(V, {
																		color: '#be99ff',
																		type: 'warning',
																		text: '取 消',
																		onClick:
																			t[24] ||
																			(t[24] = a => {
																				e.editStatus = !1;
																			}),
																	}),
																],
																64,
															))
														: (i(),
															g(V, {
																key: 0,
																color: '#7232dd',
																type: 'danger',
																text: '编 辑',
																onClick:
																	t[23] ||
																	(t[23] = a => {
																		e.editStatus = !0;
																	}),
															})),
												]),
												_: 1,
											}),
										]),
										_: 1,
									},
									8,
									['readonly'],
								),
							]),
						],
						512,
					)
				);
			};
		},
	}),
	we = le(ve, [['__scopeId', 'data-v-f43b5609']]);
export { we as default };

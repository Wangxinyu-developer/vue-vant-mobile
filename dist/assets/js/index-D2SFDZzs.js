const __vite__fileDeps = [
		'./index-8NCTIIVM.js',
		'../css/index-CiFIkKlu.css',
		'./index-t5h1qsIC.js',
		'../css/index-slWNt1Nc.css',
		'./create-CdxE8Dkq.js',
		'./lodash-CzVTH62A.js',
		'../css/create-DK2tpyWI.css',
		'./detail-CDnpJ524.js',
		'../css/detail-Dv2XFm16.css',
		'./index-BFePqYPr.js',
		'../css/index-VrrbvIsS.css',
	],
	__vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
	new MutationObserver(a => {
		for (const i of a)
			if (i.type === 'childList')
				for (const l of i.addedNodes)
					l.tagName === 'LINK' && l.rel === 'modulepreload' && o(l);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(a) {
		const i = {};
		return (
			a.integrity && (i.integrity = a.integrity),
			a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
			a.crossOrigin === 'use-credentials'
				? (i.credentials = 'include')
				: a.crossOrigin === 'anonymous'
					? (i.credentials = 'omit')
					: (i.credentials = 'same-origin'),
			i
		);
	}
	function o(a) {
		if (a.ep) return;
		a.ep = !0;
		const i = n(a);
		fetch(a.href, i);
	}
})();
/**
 * @vue/shared v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function pr(e, t) {
	const n = new Set(e.split(','));
	return o => n.has(o);
}
const Le = {},
	_o = [],
	Tt = () => {},
	wh = () => !1,
	$i = e =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
	wr = e => e.startsWith('onUpdate:'),
	qe = Object.assign,
	xr = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	},
	xh = Object.prototype.hasOwnProperty,
	Pe = (e, t) => xh.call(e, t),
	ye = Array.isArray,
	ko = e => Pi(e) === '[object Map]',
	wu = e => Pi(e) === '[object Set]',
	Se = e => typeof e == 'function',
	je = e => typeof e == 'string',
	ro = e => typeof e == 'symbol',
	Ve = e => e !== null && typeof e == 'object',
	xu = e => (Ve(e) || Se(e)) && Se(e.then) && Se(e.catch),
	Su = Object.prototype.toString,
	Pi = e => Su.call(e),
	Sh = e => Pi(e).slice(8, -1),
	Cu = e => Pi(e) === '[object Object]',
	Sr = e => je(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
	na = pr(
		',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
	),
	Ii = e => {
		const t = Object.create(null);
		return n => t[n] || (t[n] = e(n));
	},
	Ch = /-(\w)/g,
	Zt = Ii(e => e.replace(Ch, (t, n) => (n ? n.toUpperCase() : ''))),
	Th = /\B([A-Z])/g,
	Nn = Ii(e => e.replace(Th, '-$1').toLowerCase()),
	Ai = Ii(e => e.charAt(0).toUpperCase() + e.slice(1)),
	ol = Ii(e => (e ? `on${Ai(e)}` : '')),
	Ln = (e, t) => !Object.is(e, t),
	al = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t);
	},
	Tu = (e, t, n) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
	},
	_h = e => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	},
	kh = e => {
		const t = je(e) ? Number(e) : NaN;
		return isNaN(t) ? e : t;
	};
let ms;
const _u = () =>
	ms ||
	(ms =
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
				? self
				: typeof window < 'u'
					? window
					: typeof global < 'u'
						? global
						: {});
function _a(e) {
	if (ye(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const o = e[n],
				a = je(o) ? Ih(o) : _a(o);
			if (a) for (const i in a) t[i] = a[i];
		}
		return t;
	} else if (je(e) || Ve(e)) return e;
}
const Eh = /;(?![^(]*\))/g,
	$h = /:([^]+)/,
	Ph = /\/\*[^]*?\*\//g;
function Ih(e) {
	const t = {};
	return (
		e
			.replace(Ph, '')
			.split(Eh)
			.forEach(n => {
				if (n) {
					const o = n.split($h);
					o.length > 1 && (t[o[0].trim()] = o[1].trim());
				}
			}),
		t
	);
}
function Ah(e) {
	let t = '';
	if (!e || je(e)) return t;
	for (const n in e) {
		const o = e[n],
			a = n.startsWith('--') ? n : Nn(n);
		(je(o) || typeof o == 'number') && (t += `${a}:${o};`);
	}
	return t;
}
function Ri(e) {
	let t = '';
	if (je(e)) t = e;
	else if (ye(e))
		for (let n = 0; n < e.length; n++) {
			const o = Ri(e[n]);
			o && (t += o + ' ');
		}
	else if (Ve(e)) for (const n in e) e[n] && (t += n + ' ');
	return t.trim();
}
const Rh =
		'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
	Oh = pr(Rh);
function ku(e) {
	return !!e || e === '';
}
const Bh = e =>
		je(e)
			? e
			: e == null
				? ''
				: ye(e) || (Ve(e) && (e.toString === Su || !Se(e.toString)))
					? JSON.stringify(e, Eu, 2)
					: String(e),
	Eu = (e, t) =>
		t && t.__v_isRef
			? Eu(e, t.value)
			: ko(t)
				? {
						[`Map(${t.size})`]: [...t.entries()].reduce(
							(n, [o, a], i) => ((n[il(o, i) + ' =>'] = a), n),
							{},
						),
					}
				: wu(t)
					? { [`Set(${t.size})`]: [...t.values()].map(n => il(n)) }
					: ro(t)
						? il(t)
						: Ve(t) && !ye(t) && !Cu(t)
							? String(t)
							: t,
	il = (e, t = '') => {
		var n;
		return ro(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
	};
/**
 * @vue/reactivity v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Rt;
class Dh {
	constructor(t = !1) {
		(this.detached = t),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this.parent = Rt),
			!t && Rt && (this.index = (Rt.scopes || (Rt.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	run(t) {
		if (this._active) {
			const n = Rt;
			try {
				return (Rt = this), t();
			} finally {
				Rt = n;
			}
		}
	}
	on() {
		Rt = this;
	}
	off() {
		Rt = this.parent;
	}
	stop(t) {
		if (this._active) {
			let n, o;
			for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
			for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
			if (this.scopes)
				for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
			if (!this.detached && this.parent && !t) {
				const a = this.parent.scopes.pop();
				a &&
					a !== this &&
					((this.parent.scopes[this.index] = a), (a.index = this.index));
			}
			(this.parent = void 0), (this._active = !1);
		}
	}
}
function Mh(e, t = Rt) {
	t && t.active && t.effects.push(e);
}
function Lh() {
	return Rt;
}
let oo;
class Cr {
	constructor(t, n, o, a) {
		(this.fn = t),
			(this.trigger = n),
			(this.scheduler = o),
			(this.active = !0),
			(this.deps = []),
			(this._dirtyLevel = 4),
			(this._trackId = 0),
			(this._runnings = 0),
			(this._shouldSchedule = !1),
			(this._depsLength = 0),
			Mh(this, a);
	}
	get dirty() {
		if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
			(this._dirtyLevel = 1), Fn();
			for (let t = 0; t < this._depsLength; t++) {
				const n = this.deps[t];
				if (n.computed && (Vh(n.computed), this._dirtyLevel >= 4)) break;
			}
			this._dirtyLevel === 1 && (this._dirtyLevel = 0), zn();
		}
		return this._dirtyLevel >= 4;
	}
	set dirty(t) {
		this._dirtyLevel = t ? 4 : 0;
	}
	run() {
		if (((this._dirtyLevel = 0), !this.active)) return this.fn();
		let t = Dn,
			n = oo;
		try {
			return (Dn = !0), (oo = this), this._runnings++, gs(this), this.fn();
		} finally {
			vs(this), this._runnings--, (oo = n), (Dn = t);
		}
	}
	stop() {
		var t;
		this.active &&
			(gs(this),
			vs(this),
			(t = this.onStop) == null || t.call(this),
			(this.active = !1));
	}
}
function Vh(e) {
	return e.value;
}
function gs(e) {
	e._trackId++, (e._depsLength = 0);
}
function vs(e) {
	if (e.deps.length > e._depsLength) {
		for (let t = e._depsLength; t < e.deps.length; t++) $u(e.deps[t], e);
		e.deps.length = e._depsLength;
	}
}
function $u(e, t) {
	const n = e.get(t);
	n !== void 0 &&
		t._trackId !== n &&
		(e.delete(t), e.size === 0 && e.cleanup());
}
let Dn = !0,
	Ml = 0;
const Pu = [];
function Fn() {
	Pu.push(Dn), (Dn = !1);
}
function zn() {
	const e = Pu.pop();
	Dn = e === void 0 ? !0 : e;
}
function Tr() {
	Ml++;
}
function _r() {
	for (Ml--; !Ml && Ll.length; ) Ll.shift()();
}
function Iu(e, t, n) {
	if (t.get(e) !== e._trackId) {
		t.set(e, e._trackId);
		const o = e.deps[e._depsLength];
		o !== t ? (o && $u(o, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
	}
}
const Ll = [];
function Au(e, t, n) {
	Tr();
	for (const o of e.keys()) {
		let a;
		o._dirtyLevel < t &&
			(a ?? (a = e.get(o) === o._trackId)) &&
			(o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0),
			(o._dirtyLevel = t)),
			o._shouldSchedule &&
				(a ?? (a = e.get(o) === o._trackId)) &&
				(o.trigger(),
				(!o._runnings || o.allowRecurse) &&
					o._dirtyLevel !== 2 &&
					((o._shouldSchedule = !1), o.scheduler && Ll.push(o.scheduler)));
	}
	_r();
}
const Ru = (e, t) => {
		const n = new Map();
		return (n.cleanup = e), (n.computed = t), n;
	},
	Vl = new WeakMap(),
	ao = Symbol(''),
	Nl = Symbol('');
function gt(e, t, n) {
	if (Dn && oo) {
		let o = Vl.get(e);
		o || Vl.set(e, (o = new Map()));
		let a = o.get(n);
		a || o.set(n, (a = Ru(() => o.delete(n)))), Iu(oo, a);
	}
}
function sn(e, t, n, o, a, i) {
	const l = Vl.get(e);
	if (!l) return;
	let s = [];
	if (t === 'clear') s = [...l.values()];
	else if (n === 'length' && ye(e)) {
		const r = Number(o);
		l.forEach((c, u) => {
			(u === 'length' || (!ro(u) && u >= r)) && s.push(c);
		});
	} else
		switch ((n !== void 0 && s.push(l.get(n)), t)) {
			case 'add':
				ye(e)
					? Sr(n) && s.push(l.get('length'))
					: (s.push(l.get(ao)), ko(e) && s.push(l.get(Nl)));
				break;
			case 'delete':
				ye(e) || (s.push(l.get(ao)), ko(e) && s.push(l.get(Nl)));
				break;
			case 'set':
				ko(e) && s.push(l.get(ao));
				break;
		}
	Tr();
	for (const r of s) r && Au(r, 4);
	_r();
}
const Nh = pr('__proto__,__v_isRef,__isVue'),
	Ou = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter(e => e !== 'arguments' && e !== 'caller')
			.map(e => Symbol[e])
			.filter(ro),
	),
	bs = Fh();
function Fh() {
	const e = {};
	return (
		['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
			e[t] = function (...n) {
				const o = Re(this);
				for (let i = 0, l = this.length; i < l; i++) gt(o, 'get', i + '');
				const a = o[t](...n);
				return a === -1 || a === !1 ? o[t](...n.map(Re)) : a;
			};
		}),
		['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
			e[t] = function (...n) {
				Fn(), Tr();
				const o = Re(this)[t].apply(this, n);
				return _r(), zn(), o;
			};
		}),
		e
	);
}
function zh(e) {
	ro(e) || (e = String(e));
	const t = Re(this);
	return gt(t, 'has', e), t.hasOwnProperty(e);
}
class Bu {
	constructor(t = !1, n = !1) {
		(this._isReadonly = t), (this._isShallow = n);
	}
	get(t, n, o) {
		const a = this._isReadonly,
			i = this._isShallow;
		if (n === '__v_isReactive') return !a;
		if (n === '__v_isReadonly') return a;
		if (n === '__v_isShallow') return i;
		if (n === '__v_raw')
			return o === (a ? (i ? em : Vu) : i ? Lu : Mu).get(t) ||
				Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
				? t
				: void 0;
		const l = ye(t);
		if (!a) {
			if (l && Pe(bs, n)) return Reflect.get(bs, n, o);
			if (n === 'hasOwnProperty') return zh;
		}
		const s = Reflect.get(t, n, o);
		return (ro(n) ? Ou.has(n) : Nh(n)) || (a || gt(t, 'get', n), i)
			? s
			: ft(s)
				? l && Sr(n)
					? s
					: s.value
				: Ve(s)
					? a
						? Fu(s)
						: He(s)
					: s;
	}
}
class Du extends Bu {
	constructor(t = !1) {
		super(!1, t);
	}
	set(t, n, o, a) {
		let i = t[n];
		if (!this._isShallow) {
			const r = ha(i);
			if (
				(!di(o) && !ha(o) && ((i = Re(i)), (o = Re(o))),
				!ye(t) && ft(i) && !ft(o))
			)
				return r ? !1 : ((i.value = o), !0);
		}
		const l = ye(t) && Sr(n) ? Number(n) < t.length : Pe(t, n),
			s = Reflect.set(t, n, o, a);
		return (
			t === Re(a) && (l ? Ln(o, i) && sn(t, 'set', n, o) : sn(t, 'add', n, o)),
			s
		);
	}
	deleteProperty(t, n) {
		const o = Pe(t, n);
		t[n];
		const a = Reflect.deleteProperty(t, n);
		return a && o && sn(t, 'delete', n, void 0), a;
	}
	has(t, n) {
		const o = Reflect.has(t, n);
		return (!ro(n) || !Ou.has(n)) && gt(t, 'has', n), o;
	}
	ownKeys(t) {
		return gt(t, 'iterate', ye(t) ? 'length' : ao), Reflect.ownKeys(t);
	}
}
class Hh extends Bu {
	constructor(t = !1) {
		super(!0, t);
	}
	set(t, n) {
		return !0;
	}
	deleteProperty(t, n) {
		return !0;
	}
}
const jh = new Du(),
	Wh = new Hh(),
	Uh = new Du(!0);
const kr = e => e,
	Oi = e => Reflect.getPrototypeOf(e);
function Ia(e, t, n = !1, o = !1) {
	e = e.__v_raw;
	const a = Re(e),
		i = Re(t);
	n || (Ln(t, i) && gt(a, 'get', t), gt(a, 'get', i));
	const { has: l } = Oi(a),
		s = o ? kr : n ? Pr : ma;
	if (l.call(a, t)) return s(e.get(t));
	if (l.call(a, i)) return s(e.get(i));
	e !== a && e.get(t);
}
function Aa(e, t = !1) {
	const n = this.__v_raw,
		o = Re(n),
		a = Re(e);
	return (
		t || (Ln(e, a) && gt(o, 'has', e), gt(o, 'has', a)),
		e === a ? n.has(e) : n.has(e) || n.has(a)
	);
}
function Ra(e, t = !1) {
	return (
		(e = e.__v_raw), !t && gt(Re(e), 'iterate', ao), Reflect.get(e, 'size', e)
	);
}
function ys(e) {
	e = Re(e);
	const t = Re(this);
	return Oi(t).has.call(t, e) || (t.add(e), sn(t, 'add', e, e)), this;
}
function ps(e, t) {
	t = Re(t);
	const n = Re(this),
		{ has: o, get: a } = Oi(n);
	let i = o.call(n, e);
	i || ((e = Re(e)), (i = o.call(n, e)));
	const l = a.call(n, e);
	return (
		n.set(e, t), i ? Ln(t, l) && sn(n, 'set', e, t) : sn(n, 'add', e, t), this
	);
}
function ws(e) {
	const t = Re(this),
		{ has: n, get: o } = Oi(t);
	let a = n.call(t, e);
	a || ((e = Re(e)), (a = n.call(t, e))), o && o.call(t, e);
	const i = t.delete(e);
	return a && sn(t, 'delete', e, void 0), i;
}
function xs() {
	const e = Re(this),
		t = e.size !== 0,
		n = e.clear();
	return t && sn(e, 'clear', void 0, void 0), n;
}
function Oa(e, t) {
	return function (o, a) {
		const i = this,
			l = i.__v_raw,
			s = Re(l),
			r = t ? kr : e ? Pr : ma;
		return (
			!e && gt(s, 'iterate', ao), l.forEach((c, u) => o.call(a, r(c), r(u), i))
		);
	};
}
function Ba(e, t, n) {
	return function (...o) {
		const a = this.__v_raw,
			i = Re(a),
			l = ko(i),
			s = e === 'entries' || (e === Symbol.iterator && l),
			r = e === 'keys' && l,
			c = a[e](...o),
			u = n ? kr : t ? Pr : ma;
		return (
			!t && gt(i, 'iterate', r ? Nl : ao),
			{
				next() {
					const { value: f, done: h } = c.next();
					return h
						? { value: f, done: h }
						: { value: s ? [u(f[0]), u(f[1])] : u(f), done: h };
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function wn(e) {
	return function (...t) {
		return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
	};
}
function Yh() {
	const e = {
			get(i) {
				return Ia(this, i);
			},
			get size() {
				return Ra(this);
			},
			has: Aa,
			add: ys,
			set: ps,
			delete: ws,
			clear: xs,
			forEach: Oa(!1, !1),
		},
		t = {
			get(i) {
				return Ia(this, i, !1, !0);
			},
			get size() {
				return Ra(this);
			},
			has: Aa,
			add: ys,
			set: ps,
			delete: ws,
			clear: xs,
			forEach: Oa(!1, !0),
		},
		n = {
			get(i) {
				return Ia(this, i, !0);
			},
			get size() {
				return Ra(this, !0);
			},
			has(i) {
				return Aa.call(this, i, !0);
			},
			add: wn('add'),
			set: wn('set'),
			delete: wn('delete'),
			clear: wn('clear'),
			forEach: Oa(!0, !1),
		},
		o = {
			get(i) {
				return Ia(this, i, !0, !0);
			},
			get size() {
				return Ra(this, !0);
			},
			has(i) {
				return Aa.call(this, i, !0);
			},
			add: wn('add'),
			set: wn('set'),
			delete: wn('delete'),
			clear: wn('clear'),
			forEach: Oa(!0, !0),
		};
	return (
		['keys', 'values', 'entries', Symbol.iterator].forEach(i => {
			(e[i] = Ba(i, !1, !1)),
				(n[i] = Ba(i, !0, !1)),
				(t[i] = Ba(i, !1, !0)),
				(o[i] = Ba(i, !0, !0));
		}),
		[e, n, t, o]
	);
}
const [Kh, qh, Gh, Xh] = Yh();
function Er(e, t) {
	const n = t ? (e ? Xh : Gh) : e ? qh : Kh;
	return (o, a, i) =>
		a === '__v_isReactive'
			? !e
			: a === '__v_isReadonly'
				? e
				: a === '__v_raw'
					? o
					: Reflect.get(Pe(n, a) && a in o ? n : o, a, i);
}
const Zh = { get: Er(!1, !1) },
	Jh = { get: Er(!1, !0) },
	Qh = { get: Er(!0, !1) };
const Mu = new WeakMap(),
	Lu = new WeakMap(),
	Vu = new WeakMap(),
	em = new WeakMap();
function tm(e) {
	switch (e) {
		case 'Object':
		case 'Array':
			return 1;
		case 'Map':
		case 'Set':
		case 'WeakMap':
		case 'WeakSet':
			return 2;
		default:
			return 0;
	}
}
function nm(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : tm(Sh(e));
}
function He(e) {
	return ha(e) ? e : $r(e, !1, jh, Zh, Mu);
}
function Nu(e) {
	return $r(e, !1, Uh, Jh, Lu);
}
function Fu(e) {
	return $r(e, !0, Wh, Qh, Vu);
}
function $r(e, t, n, o, a) {
	if (!Ve(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
	const i = a.get(e);
	if (i) return i;
	const l = nm(e);
	if (l === 0) return e;
	const s = new Proxy(e, l === 2 ? o : n);
	return a.set(e, s), s;
}
function oa(e) {
	return ha(e) ? oa(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ha(e) {
	return !!(e && e.__v_isReadonly);
}
function di(e) {
	return !!(e && e.__v_isShallow);
}
function zu(e) {
	return e ? !!e.__v_raw : !1;
}
function Re(e) {
	const t = e && e.__v_raw;
	return t ? Re(t) : e;
}
function om(e) {
	return Object.isExtensible(e) && Tu(e, '__v_skip', !0), e;
}
const ma = e => (Ve(e) ? He(e) : e),
	Pr = e => (Ve(e) ? Fu(e) : e);
class Hu {
	constructor(t, n, o, a) {
		(this.getter = t),
			(this._setter = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !1),
			(this.effect = new Cr(
				() => t(this._value),
				() => oi(this, this.effect._dirtyLevel === 2 ? 2 : 3),
			)),
			(this.effect.computed = this),
			(this.effect.active = this._cacheable = !a),
			(this.__v_isReadonly = o);
	}
	get value() {
		const t = Re(this);
		return (
			(!t._cacheable || t.effect.dirty) &&
				Ln(t._value, (t._value = t.effect.run())) &&
				oi(t, 4),
			ju(t),
			t.effect._dirtyLevel >= 2 && oi(t, 2),
			t._value
		);
	}
	set value(t) {
		this._setter(t);
	}
	get _dirty() {
		return this.effect.dirty;
	}
	set _dirty(t) {
		this.effect.dirty = t;
	}
}
function am(e, t, n = !1) {
	let o, a;
	const i = Se(e);
	return (
		i ? ((o = e), (a = Tt)) : ((o = e.get), (a = e.set)),
		new Hu(o, a, i || !a, n)
	);
}
function ju(e) {
	var t;
	Dn &&
		oo &&
		((e = Re(e)),
		Iu(
			oo,
			(t = e.dep) != null
				? t
				: (e.dep = Ru(() => (e.dep = void 0), e instanceof Hu ? e : void 0)),
		));
}
function oi(e, t = 4, n) {
	e = Re(e);
	const o = e.dep;
	o && Au(o, t);
}
function ft(e) {
	return !!(e && e.__v_isRef === !0);
}
function D(e) {
	return Wu(e, !1);
}
function im(e) {
	return Wu(e, !0);
}
function Wu(e, t) {
	return ft(e) ? e : new lm(e, t);
}
class lm {
	constructor(t, n) {
		(this.__v_isShallow = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this._rawValue = n ? t : Re(t)),
			(this._value = n ? t : ma(t));
	}
	get value() {
		return ju(this), this._value;
	}
	set value(t) {
		const n = this.__v_isShallow || di(t) || ha(t);
		(t = n ? t : Re(t)),
			Ln(t, this._rawValue) &&
				((this._rawValue = t), (this._value = n ? t : ma(t)), oi(this, 4));
	}
}
function Dt(e) {
	return ft(e) ? e.value : e;
}
const rm = {
	get: (e, t, n) => Dt(Reflect.get(e, t, n)),
	set: (e, t, n, o) => {
		const a = e[t];
		return ft(a) && !ft(n) ? ((a.value = n), !0) : Reflect.set(e, t, n, o);
	},
};
function Uu(e) {
	return oa(e) ? e : new Proxy(e, rm);
}
/**
 * @vue/runtime-core v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Mn(e, t, n, o) {
	try {
		return o ? e(...o) : e();
	} catch (a) {
		Bi(a, t, n);
	}
}
function _t(e, t, n, o) {
	if (Se(e)) {
		const a = Mn(e, t, n, o);
		return (
			a &&
				xu(a) &&
				a.catch(i => {
					Bi(i, t, n);
				}),
			a
		);
	}
	if (ye(e)) {
		const a = [];
		for (let i = 0; i < e.length; i++) a.push(_t(e[i], t, n, o));
		return a;
	}
}
function Bi(e, t, n, o = !0) {
	const a = t ? t.vnode : null;
	if (t) {
		let i = t.parent;
		const l = t.proxy,
			s = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; i; ) {
			const c = i.ec;
			if (c) {
				for (let u = 0; u < c.length; u++) if (c[u](e, l, s) === !1) return;
			}
			i = i.parent;
		}
		const r = t.appContext.config.errorHandler;
		if (r) {
			Fn(), Mn(r, null, 10, [e, l, s]), zn();
			return;
		}
	}
	sm(e, n, a, o);
}
function sm(e, t, n, o = !0) {
	console.error(e);
}
let ga = !1,
	Fl = !1;
const at = [];
let Gt = 0;
const Eo = [];
let Pn = null,
	Jn = 0;
const Yu = Promise.resolve();
let Ir = null;
function Te(e) {
	const t = Ir || Yu;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function cm(e) {
	let t = Gt + 1,
		n = at.length;
	for (; t < n; ) {
		const o = (t + n) >>> 1,
			a = at[o],
			i = va(a);
		i < e || (i === e && a.pre) ? (t = o + 1) : (n = o);
	}
	return t;
}
function Ar(e) {
	(!at.length || !at.includes(e, ga && e.allowRecurse ? Gt + 1 : Gt)) &&
		(e.id == null ? at.push(e) : at.splice(cm(e.id), 0, e), Ku());
}
function Ku() {
	!ga && !Fl && ((Fl = !0), (Ir = Yu.then(Gu)));
}
function um(e) {
	const t = at.indexOf(e);
	t > Gt && at.splice(t, 1);
}
function dm(e) {
	ye(e)
		? Eo.push(...e)
		: (!Pn || !Pn.includes(e, e.allowRecurse ? Jn + 1 : Jn)) && Eo.push(e),
		Ku();
}
function Ss(e, t, n = ga ? Gt + 1 : 0) {
	for (; n < at.length; n++) {
		const o = at[n];
		if (o && o.pre) {
			if (e && o.id !== e.uid) continue;
			at.splice(n, 1), n--, o();
		}
	}
}
function qu(e) {
	if (Eo.length) {
		const t = [...new Set(Eo)].sort((n, o) => va(n) - va(o));
		if (((Eo.length = 0), Pn)) {
			Pn.push(...t);
			return;
		}
		for (Pn = t, Jn = 0; Jn < Pn.length; Jn++) Pn[Jn]();
		(Pn = null), (Jn = 0);
	}
}
const va = e => (e.id == null ? 1 / 0 : e.id),
	fm = (e, t) => {
		const n = va(e) - va(t);
		if (n === 0) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1;
		}
		return n;
	};
function Gu(e) {
	(Fl = !1), (ga = !0), at.sort(fm);
	try {
		for (Gt = 0; Gt < at.length; Gt++) {
			const t = at[Gt];
			t && t.active !== !1 && Mn(t, null, 14);
		}
	} finally {
		(Gt = 0),
			(at.length = 0),
			qu(),
			(ga = !1),
			(Ir = null),
			(at.length || Eo.length) && Gu();
	}
}
function hm(e, t, ...n) {
	if (e.isUnmounted) return;
	const o = e.vnode.props || Le;
	let a = n;
	const i = t.startsWith('update:'),
		l = i && t.slice(7);
	if (l && l in o) {
		const u = `${l === 'modelValue' ? 'model' : l}Modifiers`,
			{ number: f, trim: h } = o[u] || Le;
		h && (a = n.map(m => (je(m) ? m.trim() : m))), f && (a = n.map(_h));
	}
	let s,
		r = o[(s = ol(t))] || o[(s = ol(Zt(t)))];
	!r && i && (r = o[(s = ol(Nn(t)))]), r && _t(r, e, 6, a);
	const c = o[s + 'Once'];
	if (c) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		(e.emitted[s] = !0), _t(c, e, 6, a);
	}
}
function Xu(e, t, n = !1) {
	const o = t.emitsCache,
		a = o.get(e);
	if (a !== void 0) return a;
	const i = e.emits;
	let l = {},
		s = !1;
	if (!Se(e)) {
		const r = c => {
			const u = Xu(c, t, !0);
			u && ((s = !0), qe(l, u));
		};
		!n && t.mixins.length && t.mixins.forEach(r),
			e.extends && r(e.extends),
			e.mixins && e.mixins.forEach(r);
	}
	return !i && !s
		? (Ve(e) && o.set(e, null), null)
		: (ye(i) ? i.forEach(r => (l[r] = null)) : qe(l, i),
			Ve(e) && o.set(e, l),
			l);
}
function Di(e, t) {
	return !e || !$i(t)
		? !1
		: ((t = t.slice(2).replace(/Once$/, '')),
			Pe(e, t[0].toLowerCase() + t.slice(1)) || Pe(e, Nn(t)) || Pe(e, t));
}
let dt = null,
	Mi = null;
function fi(e) {
	const t = dt;
	return (dt = e), (Mi = (e && e.type.__scopeId) || null), t;
}
function F_(e) {
	Mi = e;
}
function z_() {
	Mi = null;
}
function hi(e, t = dt, n) {
	if (!t || e._n) return e;
	const o = (...a) => {
		o._d && Ms(-1);
		const i = fi(t);
		let l;
		try {
			l = e(...a);
		} finally {
			fi(i), o._d && Ms(1);
		}
		return l;
	};
	return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function ll(e) {
	const {
			type: t,
			vnode: n,
			proxy: o,
			withProxy: a,
			propsOptions: [i],
			slots: l,
			attrs: s,
			emit: r,
			render: c,
			renderCache: u,
			props: f,
			data: h,
			setupState: m,
			ctx: g,
			inheritAttrs: y,
		} = e,
		v = fi(e);
	let w, b;
	try {
		if (n.shapeFlag & 4) {
			const p = a || o,
				x = p;
			(w = qt(c.call(x, p, u, f, m, h, g))), (b = s);
		} else {
			const p = t;
			(w = qt(
				p.length > 1 ? p(f, { attrs: s, slots: l, emit: r }) : p(f, null),
			)),
				(b = t.props ? s : mm(s));
		}
	} catch (p) {
		(ra.length = 0), Bi(p, e, 1), (w = d(pt));
	}
	let C = w;
	if (b && y !== !1) {
		const p = Object.keys(b),
			{ shapeFlag: x } = C;
		p.length && x & 7 && (i && p.some(wr) && (b = gm(b, i)), (C = Vn(C, b)));
	}
	return (
		n.dirs && ((C = Vn(C)), (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs)),
		n.transition && (C.transition = n.transition),
		(w = C),
		fi(v),
		w
	);
}
const mm = e => {
		let t;
		for (const n in e)
			(n === 'class' || n === 'style' || $i(n)) && ((t || (t = {}))[n] = e[n]);
		return t;
	},
	gm = (e, t) => {
		const n = {};
		for (const o in e) (!wr(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
		return n;
	};
function vm(e, t, n) {
	const { props: o, children: a, component: i } = e,
		{ props: l, children: s, patchFlag: r } = t,
		c = i.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && r >= 0) {
		if (r & 1024) return !0;
		if (r & 16) return o ? Cs(o, l, c) : !!l;
		if (r & 8) {
			const u = t.dynamicProps;
			for (let f = 0; f < u.length; f++) {
				const h = u[f];
				if (l[h] !== o[h] && !Di(c, h)) return !0;
			}
		}
	} else
		return (a || s) && (!s || !s.$stable)
			? !0
			: o === l
				? !1
				: o
					? l
						? Cs(o, l, c)
						: !0
					: !!l;
	return !1;
}
function Cs(e, t, n) {
	const o = Object.keys(t);
	if (o.length !== Object.keys(e).length) return !0;
	for (let a = 0; a < o.length; a++) {
		const i = o[a];
		if (t[i] !== e[i] && !Di(n, i)) return !0;
	}
	return !1;
}
function bm({ vnode: e, parent: t }, n) {
	for (; t; ) {
		const o = t.subTree;
		if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
			((e = t.vnode).el = n), (t = t.parent);
		else break;
	}
}
const Zu = 'components',
	ym = 'directives';
function mi(e, t) {
	return Ju(Zu, e, !0, t) || e;
}
const pm = Symbol.for('v-ndc');
function wm(e) {
	return Ju(ym, e);
}
function Ju(e, t, n = !0, o = !1) {
	const a = dt || tt;
	if (a) {
		const i = a.type;
		if (e === Zu) {
			const s = fg(i, !1);
			if (s && (s === t || s === Zt(t) || s === Ai(Zt(t)))) return i;
		}
		const l = Ts(a[e] || i[e], t) || Ts(a.appContext[e], t);
		return !l && o ? i : l;
	}
}
function Ts(e, t) {
	return e && (e[t] || e[Zt(t)] || e[Ai(Zt(t))]);
}
const xm = e => e.__isSuspense;
function Sm(e, t) {
	t && t.pendingBranch
		? ye(e)
			? t.effects.push(...e)
			: t.effects.push(e)
		: dm(e);
}
const Cm = Symbol.for('v-scx'),
	Tm = () => mt(Cm);
function Do(e, t) {
	return Rr(e, null, t);
}
const Da = {};
function ee(e, t, n) {
	return Rr(e, t, n);
}
function Rr(
	e,
	t,
	{ immediate: n, deep: o, flush: a, once: i, onTrack: l, onTrigger: s } = Le,
) {
	if (t && i) {
		const T = t;
		t = (...R) => {
			T(...R), x();
		};
	}
	const r = tt,
		c = T => (o === !0 ? T : to(T, o === !1 ? 1 : void 0));
	let u,
		f = !1,
		h = !1;
	if (
		(ft(e)
			? ((u = () => e.value), (f = di(e)))
			: oa(e)
				? ((u = () => c(e)), (f = !0))
				: ye(e)
					? ((h = !0),
						(f = e.some(T => oa(T) || di(T))),
						(u = () =>
							e.map(T => {
								if (ft(T)) return T.value;
								if (oa(T)) return c(T);
								if (Se(T)) return Mn(T, r, 2);
							})))
					: Se(e)
						? t
							? (u = () => Mn(e, r, 2))
							: (u = () => (m && m(), _t(e, r, 3, [g])))
						: (u = Tt),
		t && o)
	) {
		const T = u;
		u = () => to(T());
	}
	let m,
		g = T => {
			m = C.onStop = () => {
				Mn(T, r, 4), (m = C.onStop = void 0);
			};
		},
		y;
	if (Ni)
		if (
			((g = Tt),
			t ? n && _t(t, r, 3, [u(), h ? [] : void 0, g]) : u(),
			a === 'sync')
		) {
			const T = Tm();
			y = T.__watcherHandles || (T.__watcherHandles = []);
		} else return Tt;
	let v = h ? new Array(e.length).fill(Da) : Da;
	const w = () => {
		if (!(!C.active || !C.dirty))
			if (t) {
				const T = C.run();
				(o || f || (h ? T.some((R, S) => Ln(R, v[S])) : Ln(T, v))) &&
					(m && m(),
					_t(t, r, 3, [T, v === Da ? void 0 : h && v[0] === Da ? [] : v, g]),
					(v = T));
			} else C.run();
	};
	w.allowRecurse = !!t;
	let b;
	a === 'sync'
		? (b = w)
		: a === 'post'
			? (b = () => ht(w, r && r.suspense))
			: ((w.pre = !0), r && (w.id = r.uid), (b = () => Ar(w)));
	const C = new Cr(u, Tt, b),
		p = Lh(),
		x = () => {
			C.stop(), p && xr(p.effects, C);
		};
	return (
		t
			? n
				? w()
				: (v = C.run())
			: a === 'post'
				? ht(C.run.bind(C), r && r.suspense)
				: C.run(),
		y && y.push(x),
		x
	);
}
function _m(e, t, n) {
	const o = this.proxy,
		a = je(e) ? (e.includes('.') ? Qu(o, e) : () => o[e]) : e.bind(o, o);
	let i;
	Se(t) ? (i = t) : ((i = t.handler), (n = t));
	const l = Ea(this),
		s = Rr(a, i.bind(o), n);
	return l(), s;
}
function Qu(e, t) {
	const n = t.split('.');
	return () => {
		let o = e;
		for (let a = 0; a < n.length && o; a++) o = o[n[a]];
		return o;
	};
}
function to(e, t, n = 0, o) {
	if (!Ve(e) || e.__v_skip) return e;
	if (t && t > 0) {
		if (n >= t) return e;
		n++;
	}
	if (((o = o || new Set()), o.has(e))) return e;
	if ((o.add(e), ft(e))) to(e.value, t, n, o);
	else if (ye(e)) for (let a = 0; a < e.length; a++) to(e[a], t, n, o);
	else if (wu(e) || ko(e))
		e.forEach(a => {
			to(a, t, n, o);
		});
	else if (Cu(e)) for (const a in e) to(e[a], t, n, o);
	return e;
}
function Qe(e, t) {
	if (dt === null) return e;
	const n = Fi(dt) || dt.proxy,
		o = e.dirs || (e.dirs = []);
	for (let a = 0; a < t.length; a++) {
		let [i, l, s, r = Le] = t[a];
		i &&
			(Se(i) && (i = { mounted: i, updated: i }),
			i.deep && to(l),
			o.push({
				dir: i,
				instance: n,
				value: l,
				oldValue: void 0,
				arg: s,
				modifiers: r,
			}));
	}
	return e;
}
function Yn(e, t, n, o) {
	const a = e.dirs,
		i = t && t.dirs;
	for (let l = 0; l < a.length; l++) {
		const s = a[l];
		i && (s.oldValue = i[l].value);
		let r = s.dir[o];
		r && (Fn(), _t(r, n, 8, [e.el, s, e, t]), zn());
	}
}
const In = Symbol('_leaveCb'),
	Ma = Symbol('_enterCb');
function km() {
	const e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: new Map(),
	};
	return (
		Ue(() => {
			e.isMounted = !0;
		}),
		en(() => {
			e.isUnmounting = !0;
		}),
		e
	);
}
const xt = [Function, Array],
	ed = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: xt,
		onEnter: xt,
		onAfterEnter: xt,
		onEnterCancelled: xt,
		onBeforeLeave: xt,
		onLeave: xt,
		onAfterLeave: xt,
		onLeaveCancelled: xt,
		onBeforeAppear: xt,
		onAppear: xt,
		onAfterAppear: xt,
		onAppearCancelled: xt,
	},
	Em = {
		name: 'BaseTransition',
		props: ed,
		setup(e, { slots: t }) {
			const n = Nt(),
				o = km();
			return () => {
				const a = t.default && nd(t.default(), !0);
				if (!a || !a.length) return;
				let i = a[0];
				if (a.length > 1) {
					for (const h of a)
						if (h.type !== pt) {
							i = h;
							break;
						}
				}
				const l = Re(e),
					{ mode: s } = l;
				if (o.isLeaving) return rl(i);
				const r = _s(i);
				if (!r) return rl(i);
				const c = zl(r, l, o, n);
				Hl(r, c);
				const u = n.subTree,
					f = u && _s(u);
				if (f && f.type !== pt && !Qn(r, f)) {
					const h = zl(f, l, o, n);
					if ((Hl(f, h), s === 'out-in'))
						return (
							(o.isLeaving = !0),
							(h.afterLeave = () => {
								(o.isLeaving = !1),
									n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
							}),
							rl(i)
						);
					s === 'in-out' &&
						r.type !== pt &&
						(h.delayLeave = (m, g, y) => {
							const v = td(o, f);
							(v[String(f.key)] = f),
								(m[In] = () => {
									g(), (m[In] = void 0), delete c.delayedLeave;
								}),
								(c.delayedLeave = y);
						});
				}
				return i;
			};
		},
	},
	$m = Em;
function td(e, t) {
	const { leavingVNodes: n } = e;
	let o = n.get(t.type);
	return o || ((o = Object.create(null)), n.set(t.type, o)), o;
}
function zl(e, t, n, o) {
	const {
			appear: a,
			mode: i,
			persisted: l = !1,
			onBeforeEnter: s,
			onEnter: r,
			onAfterEnter: c,
			onEnterCancelled: u,
			onBeforeLeave: f,
			onLeave: h,
			onAfterLeave: m,
			onLeaveCancelled: g,
			onBeforeAppear: y,
			onAppear: v,
			onAfterAppear: w,
			onAppearCancelled: b,
		} = t,
		C = String(e.key),
		p = td(n, e),
		x = (S, A) => {
			S && _t(S, o, 9, A);
		},
		T = (S, A) => {
			const I = A[1];
			x(S, A),
				ye(S) ? S.every(k => k.length <= 1) && I() : S.length <= 1 && I();
		},
		R = {
			mode: i,
			persisted: l,
			beforeEnter(S) {
				let A = s;
				if (!n.isMounted)
					if (a) A = y || s;
					else return;
				S[In] && S[In](!0);
				const I = p[C];
				I && Qn(e, I) && I.el[In] && I.el[In](), x(A, [S]);
			},
			enter(S) {
				let A = r,
					I = c,
					k = u;
				if (!n.isMounted)
					if (a) (A = v || r), (I = w || c), (k = b || u);
					else return;
				let $ = !1;
				const B = (S[Ma] = X => {
					$ ||
						(($ = !0),
						X ? x(k, [S]) : x(I, [S]),
						R.delayedLeave && R.delayedLeave(),
						(S[Ma] = void 0));
				});
				A ? T(A, [S, B]) : B();
			},
			leave(S, A) {
				const I = String(e.key);
				if ((S[Ma] && S[Ma](!0), n.isUnmounting)) return A();
				x(f, [S]);
				let k = !1;
				const $ = (S[In] = B => {
					k ||
						((k = !0),
						A(),
						B ? x(g, [S]) : x(m, [S]),
						(S[In] = void 0),
						p[I] === e && delete p[I]);
				});
				(p[I] = e), h ? T(h, [S, $]) : $();
			},
			clone(S) {
				return zl(S, t, n, o);
			},
		};
	return R;
}
function rl(e) {
	if (Li(e)) return (e = Vn(e)), (e.children = null), e;
}
function _s(e) {
	if (!Li(e)) return e;
	const { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && Se(n.default)) return n.default();
	}
}
function Hl(e, t) {
	e.shapeFlag & 6 && e.component
		? Hl(e.component.subTree, t)
		: e.shapeFlag & 128
			? ((e.ssContent.transition = t.clone(e.ssContent)),
				(e.ssFallback.transition = t.clone(e.ssFallback)))
			: (e.transition = t);
}
function nd(e, t = !1, n) {
	let o = [],
		a = 0;
	for (let i = 0; i < e.length; i++) {
		let l = e[i];
		const s = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
		l.type === Je
			? (l.patchFlag & 128 && a++, (o = o.concat(nd(l.children, t, s))))
			: (t || l.type !== pt) && o.push(s != null ? Vn(l, { key: s }) : l);
	}
	if (a > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
	return o;
}
/*! #__NO_SIDE_EFFECTS__ */ function j(e, t) {
	return Se(e) ? qe({ name: e.name }, t, { setup: e }) : e;
}
const ai = e => !!e.type.__asyncLoader,
	Li = e => e.type.__isKeepAlive;
function Jt(e, t) {
	od(e, 'a', t);
}
function Qt(e, t) {
	od(e, 'da', t);
}
function od(e, t, n = tt) {
	const o =
		e.__wdc ||
		(e.__wdc = () => {
			let a = n;
			for (; a; ) {
				if (a.isDeactivated) return;
				a = a.parent;
			}
			return e();
		});
	if ((Vi(t, o, n), n)) {
		let a = n.parent;
		for (; a && a.parent; )
			Li(a.parent.vnode) && Pm(o, t, n, a), (a = a.parent);
	}
}
function Pm(e, t, n, o) {
	const a = Vi(t, e, o, !0);
	Mo(() => {
		xr(o[t], a);
	}, n);
}
function Vi(e, t, n = tt, o = !1) {
	if (n) {
		const a = n[e] || (n[e] = []),
			i =
				t.__weh ||
				(t.__weh = (...l) => {
					if (n.isUnmounted) return;
					Fn();
					const s = Ea(n),
						r = _t(t, n, e, l);
					return s(), zn(), r;
				});
		return o ? a.unshift(i) : a.push(i), i;
	}
}
const vn =
		e =>
		(t, n = tt) =>
			(!Ni || e === 'sp') && Vi(e, (...o) => t(...o), n),
	Im = vn('bm'),
	Ue = vn('m'),
	ad = vn('bu'),
	id = vn('u'),
	en = vn('bum'),
	Mo = vn('um'),
	Am = vn('sp'),
	Rm = vn('rtg'),
	Om = vn('rtc');
function Bm(e, t = tt) {
	Vi('ec', e, t);
}
function H_(e, t, n, o) {
	let a;
	const i = n;
	if (ye(e) || je(e)) {
		a = new Array(e.length);
		for (let l = 0, s = e.length; l < s; l++) a[l] = t(e[l], l, void 0, i);
	} else if (typeof e == 'number') {
		a = new Array(e);
		for (let l = 0; l < e; l++) a[l] = t(l + 1, l, void 0, i);
	} else if (Ve(e))
		if (e[Symbol.iterator]) a = Array.from(e, (l, s) => t(l, s, void 0, i));
		else {
			const l = Object.keys(e);
			a = new Array(l.length);
			for (let s = 0, r = l.length; s < r; s++) {
				const c = l[s];
				a[s] = t(e[c], c, s, i);
			}
		}
	else a = [];
	return a;
}
const jl = e => (e ? (xd(e) ? Fi(e) || e.proxy : jl(e.parent)) : null),
	aa = qe(Object.create(null), {
		$: e => e,
		$el: e => e.vnode.el,
		$data: e => e.data,
		$props: e => e.props,
		$attrs: e => e.attrs,
		$slots: e => e.slots,
		$refs: e => e.refs,
		$parent: e => jl(e.parent),
		$root: e => jl(e.root),
		$emit: e => e.emit,
		$options: e => Or(e),
		$forceUpdate: e =>
			e.f ||
			(e.f = () => {
				(e.effect.dirty = !0), Ar(e.update);
			}),
		$nextTick: e => e.n || (e.n = Te.bind(e.proxy)),
		$watch: e => _m.bind(e),
	}),
	sl = (e, t) => e !== Le && !e.__isScriptSetup && Pe(e, t),
	Dm = {
		get({ _: e }, t) {
			if (t === '__v_skip') return !0;
			const {
				ctx: n,
				setupState: o,
				data: a,
				props: i,
				accessCache: l,
				type: s,
				appContext: r,
			} = e;
			let c;
			if (t[0] !== '$') {
				const m = l[t];
				if (m !== void 0)
					switch (m) {
						case 1:
							return o[t];
						case 2:
							return a[t];
						case 4:
							return n[t];
						case 3:
							return i[t];
					}
				else {
					if (sl(o, t)) return (l[t] = 1), o[t];
					if (a !== Le && Pe(a, t)) return (l[t] = 2), a[t];
					if ((c = e.propsOptions[0]) && Pe(c, t)) return (l[t] = 3), i[t];
					if (n !== Le && Pe(n, t)) return (l[t] = 4), n[t];
					Wl && (l[t] = 0);
				}
			}
			const u = aa[t];
			let f, h;
			if (u) return t === '$attrs' && gt(e.attrs, 'get', ''), u(e);
			if ((f = s.__cssModules) && (f = f[t])) return f;
			if (n !== Le && Pe(n, t)) return (l[t] = 4), n[t];
			if (((h = r.config.globalProperties), Pe(h, t))) return h[t];
		},
		set({ _: e }, t, n) {
			const { data: o, setupState: a, ctx: i } = e;
			return sl(a, t)
				? ((a[t] = n), !0)
				: o !== Le && Pe(o, t)
					? ((o[t] = n), !0)
					: Pe(e.props, t) || (t[0] === '$' && t.slice(1) in e)
						? !1
						: ((i[t] = n), !0);
		},
		has(
			{
				_: {
					data: e,
					setupState: t,
					accessCache: n,
					ctx: o,
					appContext: a,
					propsOptions: i,
				},
			},
			l,
		) {
			let s;
			return (
				!!n[l] ||
				(e !== Le && Pe(e, l)) ||
				sl(t, l) ||
				((s = i[0]) && Pe(s, l)) ||
				Pe(o, l) ||
				Pe(aa, l) ||
				Pe(a.config.globalProperties, l)
			);
		},
		defineProperty(e, t, n) {
			return (
				n.get != null
					? (e._.accessCache[t] = 0)
					: Pe(n, 'value') && this.set(e, t, n.value, null),
				Reflect.defineProperty(e, t, n)
			);
		},
	};
function ks(e) {
	return ye(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Wl = !0;
function Mm(e) {
	const t = Or(e),
		n = e.proxy,
		o = e.ctx;
	(Wl = !1), t.beforeCreate && Es(t.beforeCreate, e, 'bc');
	const {
		data: a,
		computed: i,
		methods: l,
		watch: s,
		provide: r,
		inject: c,
		created: u,
		beforeMount: f,
		mounted: h,
		beforeUpdate: m,
		updated: g,
		activated: y,
		deactivated: v,
		beforeDestroy: w,
		beforeUnmount: b,
		destroyed: C,
		unmounted: p,
		render: x,
		renderTracked: T,
		renderTriggered: R,
		errorCaptured: S,
		serverPrefetch: A,
		expose: I,
		inheritAttrs: k,
		components: $,
		directives: B,
		filters: X,
	} = t;
	if ((c && Lm(c, o, null), l))
		for (const F in l) {
			const Y = l[F];
			Se(Y) && (o[F] = Y.bind(n));
		}
	if (a) {
		const F = a.call(n, n);
		Ve(F) && (e.data = He(F));
	}
	if (((Wl = !0), i))
		for (const F in i) {
			const Y = i[F],
				me = Se(Y) ? Y.bind(n, n) : Se(Y.get) ? Y.get.bind(n, n) : Tt,
				ve = !Se(Y) && Se(Y.set) ? Y.set.bind(n) : Tt,
				ne = L({ get: me, set: ve });
			Object.defineProperty(o, F, {
				enumerable: !0,
				configurable: !0,
				get: () => ne.value,
				set: se => (ne.value = se),
			});
		}
	if (s) for (const F in s) ld(s[F], o, n, F);
	if (r) {
		const F = Se(r) ? r.call(n) : r;
		Reflect.ownKeys(F).forEach(Y => {
			cn(Y, F[Y]);
		});
	}
	u && Es(u, e, 'c');
	function O(F, Y) {
		ye(Y) ? Y.forEach(me => F(me.bind(n))) : Y && F(Y.bind(n));
	}
	if (
		(O(Im, f),
		O(Ue, h),
		O(ad, m),
		O(id, g),
		O(Jt, y),
		O(Qt, v),
		O(Bm, S),
		O(Om, T),
		O(Rm, R),
		O(en, b),
		O(Mo, p),
		O(Am, A),
		ye(I))
	)
		if (I.length) {
			const F = e.exposed || (e.exposed = {});
			I.forEach(Y => {
				Object.defineProperty(F, Y, {
					get: () => n[Y],
					set: me => (n[Y] = me),
				});
			});
		} else e.exposed || (e.exposed = {});
	x && e.render === Tt && (e.render = x),
		k != null && (e.inheritAttrs = k),
		$ && (e.components = $),
		B && (e.directives = B);
}
function Lm(e, t, n = Tt) {
	ye(e) && (e = Ul(e));
	for (const o in e) {
		const a = e[o];
		let i;
		Ve(a)
			? 'default' in a
				? (i = mt(a.from || o, a.default, !0))
				: (i = mt(a.from || o))
			: (i = mt(a)),
			ft(i)
				? Object.defineProperty(t, o, {
						enumerable: !0,
						configurable: !0,
						get: () => i.value,
						set: l => (i.value = l),
					})
				: (t[o] = i);
	}
}
function Es(e, t, n) {
	_t(ye(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ld(e, t, n, o) {
	const a = o.includes('.') ? Qu(n, o) : () => n[o];
	if (je(e)) {
		const i = t[e];
		Se(i) && ee(a, i);
	} else if (Se(e)) ee(a, e.bind(n));
	else if (Ve(e))
		if (ye(e)) e.forEach(i => ld(i, t, n, o));
		else {
			const i = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
			Se(i) && ee(a, i, e);
		}
}
function Or(e) {
	const t = e.type,
		{ mixins: n, extends: o } = t,
		{
			mixins: a,
			optionsCache: i,
			config: { optionMergeStrategies: l },
		} = e.appContext,
		s = i.get(t);
	let r;
	return (
		s
			? (r = s)
			: !a.length && !n && !o
				? (r = t)
				: ((r = {}), a.length && a.forEach(c => gi(r, c, l, !0)), gi(r, t, l)),
		Ve(t) && i.set(t, r),
		r
	);
}
function gi(e, t, n, o = !1) {
	const { mixins: a, extends: i } = t;
	i && gi(e, i, n, !0), a && a.forEach(l => gi(e, l, n, !0));
	for (const l in t)
		if (!(o && l === 'expose')) {
			const s = Vm[l] || (n && n[l]);
			e[l] = s ? s(e[l], t[l]) : t[l];
		}
	return e;
}
const Vm = {
	data: $s,
	props: Ps,
	emits: Ps,
	methods: ta,
	computed: ta,
	beforeCreate: ut,
	created: ut,
	beforeMount: ut,
	mounted: ut,
	beforeUpdate: ut,
	updated: ut,
	beforeDestroy: ut,
	beforeUnmount: ut,
	destroyed: ut,
	unmounted: ut,
	activated: ut,
	deactivated: ut,
	errorCaptured: ut,
	serverPrefetch: ut,
	components: ta,
	directives: ta,
	watch: Fm,
	provide: $s,
	inject: Nm,
};
function $s(e, t) {
	return t
		? e
			? function () {
					return qe(
						Se(e) ? e.call(this, this) : e,
						Se(t) ? t.call(this, this) : t,
					);
				}
			: t
		: e;
}
function Nm(e, t) {
	return ta(Ul(e), Ul(t));
}
function Ul(e) {
	if (ye(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function ut(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function ta(e, t) {
	return e ? qe(Object.create(null), e, t) : t;
}
function Ps(e, t) {
	return e
		? ye(e) && ye(t)
			? [...new Set([...e, ...t])]
			: qe(Object.create(null), ks(e), ks(t ?? {}))
		: t;
}
function Fm(e, t) {
	if (!e) return t;
	if (!t) return e;
	const n = qe(Object.create(null), e);
	for (const o in t) n[o] = ut(e[o], t[o]);
	return n;
}
function rd() {
	return {
		app: null,
		config: {
			isNativeTag: wh,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {},
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap(),
		propsCache: new WeakMap(),
		emitsCache: new WeakMap(),
	};
}
let zm = 0;
function Hm(e, t) {
	return function (o, a = null) {
		Se(o) || (o = qe({}, o)), a != null && !Ve(a) && (a = null);
		const i = rd(),
			l = new WeakSet();
		let s = !1;
		const r = (i.app = {
			_uid: zm++,
			_component: o,
			_props: a,
			_container: null,
			_context: i,
			_instance: null,
			version: mg,
			get config() {
				return i.config;
			},
			set config(c) {},
			use(c, ...u) {
				return (
					l.has(c) ||
						(c && Se(c.install)
							? (l.add(c), c.install(r, ...u))
							: Se(c) && (l.add(c), c(r, ...u))),
					r
				);
			},
			mixin(c) {
				return i.mixins.includes(c) || i.mixins.push(c), r;
			},
			component(c, u) {
				return u ? ((i.components[c] = u), r) : i.components[c];
			},
			directive(c, u) {
				return u ? ((i.directives[c] = u), r) : i.directives[c];
			},
			mount(c, u, f) {
				if (!s) {
					const h = d(o, a);
					return (
						(h.appContext = i),
						f === !0 ? (f = 'svg') : f === !1 && (f = void 0),
						u && t ? t(h, c) : e(h, c, f),
						(s = !0),
						(r._container = c),
						(c.__vue_app__ = r),
						Fi(h.component) || h.component.proxy
					);
				}
			},
			unmount() {
				s && (e(null, r._container), delete r._container.__vue_app__);
			},
			provide(c, u) {
				return (i.provides[c] = u), r;
			},
			runWithContext(c) {
				const u = ia;
				ia = r;
				try {
					return c();
				} finally {
					ia = u;
				}
			},
		});
		return r;
	};
}
let ia = null;
function cn(e, t) {
	if (tt) {
		let n = tt.provides;
		const o = tt.parent && tt.parent.provides;
		o === n && (n = tt.provides = Object.create(o)), (n[e] = t);
	}
}
function mt(e, t, n = !1) {
	const o = tt || dt;
	if (o || ia) {
		const a = o
			? o.parent == null
				? o.vnode.appContext && o.vnode.appContext.provides
				: o.parent.provides
			: ia._context.provides;
		if (a && e in a) return a[e];
		if (arguments.length > 1) return n && Se(t) ? t.call(o && o.proxy) : t;
	}
}
const sd = {},
	cd = () => Object.create(sd),
	ud = e => Object.getPrototypeOf(e) === sd;
function jm(e, t, n, o = !1) {
	const a = {},
		i = cd();
	(e.propsDefaults = Object.create(null)), dd(e, t, a, i);
	for (const l in e.propsOptions[0]) l in a || (a[l] = void 0);
	n ? (e.props = o ? a : Nu(a)) : e.type.props ? (e.props = a) : (e.props = i),
		(e.attrs = i);
}
function Wm(e, t, n, o) {
	const {
			props: a,
			attrs: i,
			vnode: { patchFlag: l },
		} = e,
		s = Re(a),
		[r] = e.propsOptions;
	let c = !1;
	if ((o || l > 0) && !(l & 16)) {
		if (l & 8) {
			const u = e.vnode.dynamicProps;
			for (let f = 0; f < u.length; f++) {
				let h = u[f];
				if (Di(e.emitsOptions, h)) continue;
				const m = t[h];
				if (r)
					if (Pe(i, h)) m !== i[h] && ((i[h] = m), (c = !0));
					else {
						const g = Zt(h);
						a[g] = Yl(r, s, g, m, e, !1);
					}
				else m !== i[h] && ((i[h] = m), (c = !0));
			}
		}
	} else {
		dd(e, t, a, i) && (c = !0);
		let u;
		for (const f in s)
			(!t || (!Pe(t, f) && ((u = Nn(f)) === f || !Pe(t, u)))) &&
				(r
					? n &&
						(n[f] !== void 0 || n[u] !== void 0) &&
						(a[f] = Yl(r, s, f, void 0, e, !0))
					: delete a[f]);
		if (i !== s)
			for (const f in i) (!t || !Pe(t, f)) && (delete i[f], (c = !0));
	}
	c && sn(e.attrs, 'set', '');
}
function dd(e, t, n, o) {
	const [a, i] = e.propsOptions;
	let l = !1,
		s;
	if (t)
		for (let r in t) {
			if (na(r)) continue;
			const c = t[r];
			let u;
			a && Pe(a, (u = Zt(r)))
				? !i || !i.includes(u)
					? (n[u] = c)
					: ((s || (s = {}))[u] = c)
				: Di(e.emitsOptions, r) ||
					((!(r in o) || c !== o[r]) && ((o[r] = c), (l = !0)));
		}
	if (i) {
		const r = Re(n),
			c = s || Le;
		for (let u = 0; u < i.length; u++) {
			const f = i[u];
			n[f] = Yl(a, r, f, c[f], e, !Pe(c, f));
		}
	}
	return l;
}
function Yl(e, t, n, o, a, i) {
	const l = e[n];
	if (l != null) {
		const s = Pe(l, 'default');
		if (s && o === void 0) {
			const r = l.default;
			if (l.type !== Function && !l.skipFactory && Se(r)) {
				const { propsDefaults: c } = a;
				if (n in c) o = c[n];
				else {
					const u = Ea(a);
					(o = c[n] = r.call(null, t)), u();
				}
			} else o = r;
		}
		l[0] &&
			(i && !s ? (o = !1) : l[1] && (o === '' || o === Nn(n)) && (o = !0));
	}
	return o;
}
function fd(e, t, n = !1) {
	const o = t.propsCache,
		a = o.get(e);
	if (a) return a;
	const i = e.props,
		l = {},
		s = [];
	let r = !1;
	if (!Se(e)) {
		const u = f => {
			r = !0;
			const [h, m] = fd(f, t, !0);
			qe(l, h), m && s.push(...m);
		};
		!n && t.mixins.length && t.mixins.forEach(u),
			e.extends && u(e.extends),
			e.mixins && e.mixins.forEach(u);
	}
	if (!i && !r) return Ve(e) && o.set(e, _o), _o;
	if (ye(i))
		for (let u = 0; u < i.length; u++) {
			const f = Zt(i[u]);
			Is(f) && (l[f] = Le);
		}
	else if (i)
		for (const u in i) {
			const f = Zt(u);
			if (Is(f)) {
				const h = i[u],
					m = (l[f] = ye(h) || Se(h) ? { type: h } : qe({}, h));
				if (m) {
					const g = Os(Boolean, m.type),
						y = Os(String, m.type);
					(m[0] = g > -1),
						(m[1] = y < 0 || g < y),
						(g > -1 || Pe(m, 'default')) && s.push(f);
				}
			}
		}
	const c = [l, s];
	return Ve(e) && o.set(e, c), c;
}
function Is(e) {
	return e[0] !== '$' && !na(e);
}
function As(e) {
	return e === null
		? 'null'
		: typeof e == 'function'
			? e.name || ''
			: (typeof e == 'object' && e.constructor && e.constructor.name) || '';
}
function Rs(e, t) {
	return As(e) === As(t);
}
function Os(e, t) {
	return ye(t) ? t.findIndex(n => Rs(n, e)) : Se(t) && Rs(t, e) ? 0 : -1;
}
const hd = e => e[0] === '_' || e === '$stable',
	Br = e => (ye(e) ? e.map(qt) : [qt(e)]),
	Um = (e, t, n) => {
		if (t._n) return t;
		const o = hi((...a) => Br(t(...a)), n);
		return (o._c = !1), o;
	},
	md = (e, t, n) => {
		const o = e._ctx;
		for (const a in e) {
			if (hd(a)) continue;
			const i = e[a];
			if (Se(i)) t[a] = Um(a, i, o);
			else if (i != null) {
				const l = Br(i);
				t[a] = () => l;
			}
		}
	},
	gd = (e, t) => {
		const n = Br(t);
		e.slots.default = () => n;
	},
	Ym = (e, t) => {
		const n = (e.slots = cd());
		if (e.vnode.shapeFlag & 32) {
			const o = t._;
			o ? (qe(n, t), Tu(n, '_', o)) : md(t, n);
		} else t && gd(e, t);
	},
	Km = (e, t, n) => {
		const { vnode: o, slots: a } = e;
		let i = !0,
			l = Le;
		if (o.shapeFlag & 32) {
			const s = t._;
			s
				? n && s === 1
					? (i = !1)
					: (qe(a, t), !n && s === 1 && delete a._)
				: ((i = !t.$stable), md(t, a)),
				(l = t);
		} else t && (gd(e, t), (l = { default: 1 }));
		if (i) for (const s in a) !hd(s) && l[s] == null && delete a[s];
	};
function Kl(e, t, n, o, a = !1) {
	if (ye(e)) {
		e.forEach((h, m) => Kl(h, t && (ye(t) ? t[m] : t), n, o, a));
		return;
	}
	if (ai(o) && !a) return;
	const i = o.shapeFlag & 4 ? Fi(o.component) || o.component.proxy : o.el,
		l = a ? null : i,
		{ i: s, r } = e,
		c = t && t.r,
		u = s.refs === Le ? (s.refs = {}) : s.refs,
		f = s.setupState;
	if (
		(c != null &&
			c !== r &&
			(je(c)
				? ((u[c] = null), Pe(f, c) && (f[c] = null))
				: ft(c) && (c.value = null)),
		Se(r))
	)
		Mn(r, s, 12, [l, u]);
	else {
		const h = je(r),
			m = ft(r);
		if (h || m) {
			const g = () => {
				if (e.f) {
					const y = h ? (Pe(f, r) ? f[r] : u[r]) : r.value;
					a
						? ye(y) && xr(y, i)
						: ye(y)
							? y.includes(i) || y.push(i)
							: h
								? ((u[r] = [i]), Pe(f, r) && (f[r] = u[r]))
								: ((r.value = [i]), e.k && (u[e.k] = r.value));
				} else
					h
						? ((u[r] = l), Pe(f, r) && (f[r] = l))
						: m && ((r.value = l), e.k && (u[e.k] = l));
			};
			l ? ((g.id = -1), ht(g, n)) : g();
		}
	}
}
const ht = Sm;
function qm(e) {
	return Gm(e);
}
function Gm(e, t) {
	const n = _u();
	n.__VUE__ = !0;
	const {
			insert: o,
			remove: a,
			patchProp: i,
			createElement: l,
			createText: s,
			createComment: r,
			setText: c,
			setElementText: u,
			parentNode: f,
			nextSibling: h,
			setScopeId: m = Tt,
			insertStaticContent: g,
		} = e,
		y = (
			_,
			P,
			M,
			K = null,
			W = null,
			oe = null,
			le = void 0,
			te = null,
			ae = !!P.dynamicChildren,
		) => {
			if (_ === P) return;
			_ && !Qn(_, P) && ((K = E(_)), se(_, W, oe, !0), (_ = null)),
				P.patchFlag === -2 && ((ae = !1), (P.dynamicChildren = null));
			const { type: J, ref: ce, shapeFlag: ge } = P;
			switch (J) {
				case ka:
					v(_, P, M, K);
					break;
				case pt:
					w(_, P, M, K);
					break;
				case ii:
					_ == null && b(P, M, K, le);
					break;
				case Je:
					$(_, P, M, K, W, oe, le, te, ae);
					break;
				default:
					ge & 1
						? x(_, P, M, K, W, oe, le, te, ae)
						: ge & 6
							? B(_, P, M, K, W, oe, le, te, ae)
							: (ge & 64 || ge & 128) &&
								J.process(_, P, M, K, W, oe, le, te, ae, Q);
			}
			ce != null && W && Kl(ce, _ && _.ref, oe, P || _, !P);
		},
		v = (_, P, M, K) => {
			if (_ == null) o((P.el = s(P.children)), M, K);
			else {
				const W = (P.el = _.el);
				P.children !== _.children && c(W, P.children);
			}
		},
		w = (_, P, M, K) => {
			_ == null ? o((P.el = r(P.children || '')), M, K) : (P.el = _.el);
		},
		b = (_, P, M, K) => {
			[_.el, _.anchor] = g(_.children, P, M, K, _.el, _.anchor);
		},
		C = ({ el: _, anchor: P }, M, K) => {
			let W;
			for (; _ && _ !== P; ) (W = h(_)), o(_, M, K), (_ = W);
			o(P, M, K);
		},
		p = ({ el: _, anchor: P }) => {
			let M;
			for (; _ && _ !== P; ) (M = h(_)), a(_), (_ = M);
			a(P);
		},
		x = (_, P, M, K, W, oe, le, te, ae) => {
			P.type === 'svg' ? (le = 'svg') : P.type === 'math' && (le = 'mathml'),
				_ == null ? T(P, M, K, W, oe, le, te, ae) : A(_, P, W, oe, le, te, ae);
		},
		T = (_, P, M, K, W, oe, le, te) => {
			let ae, J;
			const { props: ce, shapeFlag: ge, transition: he, dirs: pe } = _;
			if (
				((ae = _.el = l(_.type, oe, ce && ce.is, ce)),
				ge & 8
					? u(ae, _.children)
					: ge & 16 && S(_.children, ae, null, K, W, cl(_, oe), le, te),
				pe && Yn(_, null, K, 'created'),
				R(ae, _, _.scopeId, le, K),
				ce)
			) {
				for (const Be in ce)
					Be !== 'value' &&
						!na(Be) &&
						i(ae, Be, null, ce[Be], oe, _.children, K, W, ue);
				'value' in ce && i(ae, 'value', null, ce.value, oe),
					(J = ce.onVnodeBeforeMount) && Ut(J, K, _);
			}
			pe && Yn(_, null, K, 'beforeMount');
			const Ee = Xm(W, he);
			Ee && he.beforeEnter(ae),
				o(ae, P, M),
				((J = ce && ce.onVnodeMounted) || Ee || pe) &&
					ht(() => {
						J && Ut(J, K, _),
							Ee && he.enter(ae),
							pe && Yn(_, null, K, 'mounted');
					}, W);
		},
		R = (_, P, M, K, W) => {
			if ((M && m(_, M), K)) for (let oe = 0; oe < K.length; oe++) m(_, K[oe]);
			if (W) {
				let oe = W.subTree;
				if (P === oe) {
					const le = W.vnode;
					R(_, le, le.scopeId, le.slotScopeIds, W.parent);
				}
			}
		},
		S = (_, P, M, K, W, oe, le, te, ae = 0) => {
			for (let J = ae; J < _.length; J++) {
				const ce = (_[J] = te ? An(_[J]) : qt(_[J]));
				y(null, ce, P, M, K, W, oe, le, te);
			}
		},
		A = (_, P, M, K, W, oe, le) => {
			const te = (P.el = _.el);
			let { patchFlag: ae, dynamicChildren: J, dirs: ce } = P;
			ae |= _.patchFlag & 16;
			const ge = _.props || Le,
				he = P.props || Le;
			let pe;
			if (
				(M && Kn(M, !1),
				(pe = he.onVnodeBeforeUpdate) && Ut(pe, M, P, _),
				ce && Yn(P, _, M, 'beforeUpdate'),
				M && Kn(M, !0),
				J
					? I(_.dynamicChildren, J, te, M, K, cl(P, W), oe)
					: le || Y(_, P, te, null, M, K, cl(P, W), oe, !1),
				ae > 0)
			) {
				if (ae & 16) k(te, P, ge, he, M, K, W);
				else if (
					(ae & 2 && ge.class !== he.class && i(te, 'class', null, he.class, W),
					ae & 4 && i(te, 'style', ge.style, he.style, W),
					ae & 8)
				) {
					const Ee = P.dynamicProps;
					for (let Be = 0; Be < Ee.length; Be++) {
						const Fe = Ee[Be],
							Ze = ge[Fe],
							$t = he[Fe];
						($t !== Ze || Fe === 'value') &&
							i(te, Fe, Ze, $t, W, _.children, M, K, ue);
					}
				}
				ae & 1 && _.children !== P.children && u(te, P.children);
			} else !le && J == null && k(te, P, ge, he, M, K, W);
			((pe = he.onVnodeUpdated) || ce) &&
				ht(() => {
					pe && Ut(pe, M, P, _), ce && Yn(P, _, M, 'updated');
				}, K);
		},
		I = (_, P, M, K, W, oe, le) => {
			for (let te = 0; te < P.length; te++) {
				const ae = _[te],
					J = P[te],
					ce =
						ae.el && (ae.type === Je || !Qn(ae, J) || ae.shapeFlag & 70)
							? f(ae.el)
							: M;
				y(ae, J, ce, null, K, W, oe, le, !0);
			}
		},
		k = (_, P, M, K, W, oe, le) => {
			if (M !== K) {
				if (M !== Le)
					for (const te in M)
						!na(te) &&
							!(te in K) &&
							i(_, te, M[te], null, le, P.children, W, oe, ue);
				for (const te in K) {
					if (na(te)) continue;
					const ae = K[te],
						J = M[te];
					ae !== J &&
						te !== 'value' &&
						i(_, te, J, ae, le, P.children, W, oe, ue);
				}
				'value' in K && i(_, 'value', M.value, K.value, le);
			}
		},
		$ = (_, P, M, K, W, oe, le, te, ae) => {
			const J = (P.el = _ ? _.el : s('')),
				ce = (P.anchor = _ ? _.anchor : s(''));
			let { patchFlag: ge, dynamicChildren: he, slotScopeIds: pe } = P;
			pe && (te = te ? te.concat(pe) : pe),
				_ == null
					? (o(J, M, K),
						o(ce, M, K),
						S(P.children || [], M, ce, W, oe, le, te, ae))
					: ge > 0 && ge & 64 && he && _.dynamicChildren
						? (I(_.dynamicChildren, he, M, W, oe, le, te),
							(P.key != null || (W && P === W.subTree)) && Dr(_, P, !0))
						: Y(_, P, M, ce, W, oe, le, te, ae);
		},
		B = (_, P, M, K, W, oe, le, te, ae) => {
			(P.slotScopeIds = te),
				_ == null
					? P.shapeFlag & 512
						? W.ctx.activate(P, M, K, le, ae)
						: X(P, M, K, W, oe, le, ae)
					: V(_, P, ae);
		},
		X = (_, P, M, K, W, oe, le) => {
			const te = (_.component = rg(_, K, W));
			if ((Li(_) && (te.ctx.renderer = Q), sg(te), te.asyncDep)) {
				if ((W && W.registerDep(te, O), !_.el)) {
					const ae = (te.subTree = d(pt));
					w(null, ae, P, M);
				}
			} else O(te, _, P, M, W, oe, le);
		},
		V = (_, P, M) => {
			const K = (P.component = _.component);
			if (vm(_, P, M))
				if (K.asyncDep && !K.asyncResolved) {
					F(K, P, M);
					return;
				} else (K.next = P), um(K.update), (K.effect.dirty = !0), K.update();
			else (P.el = _.el), (K.vnode = P);
		},
		O = (_, P, M, K, W, oe, le) => {
			const te = () => {
					if (_.isMounted) {
						let { next: ce, bu: ge, u: he, parent: pe, vnode: Ee } = _;
						{
							const uo = vd(_);
							if (uo) {
								ce && ((ce.el = Ee.el), F(_, ce, le)),
									uo.asyncDep.then(() => {
										_.isUnmounted || te();
									});
								return;
							}
						}
						let Be = ce,
							Fe;
						Kn(_, !1),
							ce ? ((ce.el = Ee.el), F(_, ce, le)) : (ce = Ee),
							ge && al(ge),
							(Fe = ce.props && ce.props.onVnodeBeforeUpdate) &&
								Ut(Fe, pe, ce, Ee),
							Kn(_, !0);
						const Ze = ll(_),
							$t = _.subTree;
						(_.subTree = Ze),
							y($t, Ze, f($t.el), E($t), _, W, oe),
							(ce.el = Ze.el),
							Be === null && bm(_, Ze.el),
							he && ht(he, W),
							(Fe = ce.props && ce.props.onVnodeUpdated) &&
								ht(() => Ut(Fe, pe, ce, Ee), W);
					} else {
						let ce;
						const { el: ge, props: he } = P,
							{ bm: pe, m: Ee, parent: Be } = _,
							Fe = ai(P);
						if (
							(Kn(_, !1),
							pe && al(pe),
							!Fe && (ce = he && he.onVnodeBeforeMount) && Ut(ce, Be, P),
							Kn(_, !0),
							ge && xe)
						) {
							const Ze = () => {
								(_.subTree = ll(_)), xe(ge, _.subTree, _, W, null);
							};
							Fe
								? P.type.__asyncLoader().then(() => !_.isUnmounted && Ze())
								: Ze();
						} else {
							const Ze = (_.subTree = ll(_));
							y(null, Ze, M, K, _, W, oe), (P.el = Ze.el);
						}
						if ((Ee && ht(Ee, W), !Fe && (ce = he && he.onVnodeMounted))) {
							const Ze = P;
							ht(() => Ut(ce, Be, Ze), W);
						}
						(P.shapeFlag & 256 ||
							(Be && ai(Be.vnode) && Be.vnode.shapeFlag & 256)) &&
							_.a &&
							ht(_.a, W),
							(_.isMounted = !0),
							(P = M = K = null);
					}
				},
				ae = (_.effect = new Cr(te, Tt, () => Ar(J), _.scope)),
				J = (_.update = () => {
					ae.dirty && ae.run();
				});
			(J.id = _.uid), Kn(_, !0), J();
		},
		F = (_, P, M) => {
			P.component = _;
			const K = _.vnode.props;
			(_.vnode = P),
				(_.next = null),
				Wm(_, P.props, K, M),
				Km(_, P.children, M),
				Fn(),
				Ss(_),
				zn();
		},
		Y = (_, P, M, K, W, oe, le, te, ae = !1) => {
			const J = _ && _.children,
				ce = _ ? _.shapeFlag : 0,
				ge = P.children,
				{ patchFlag: he, shapeFlag: pe } = P;
			if (he > 0) {
				if (he & 128) {
					ve(J, ge, M, K, W, oe, le, te, ae);
					return;
				} else if (he & 256) {
					me(J, ge, M, K, W, oe, le, te, ae);
					return;
				}
			}
			pe & 8
				? (ce & 16 && ue(J, W, oe), ge !== J && u(M, ge))
				: ce & 16
					? pe & 16
						? ve(J, ge, M, K, W, oe, le, te, ae)
						: ue(J, W, oe, !0)
					: (ce & 8 && u(M, ''), pe & 16 && S(ge, M, K, W, oe, le, te, ae));
		},
		me = (_, P, M, K, W, oe, le, te, ae) => {
			(_ = _ || _o), (P = P || _o);
			const J = _.length,
				ce = P.length,
				ge = Math.min(J, ce);
			let he;
			for (he = 0; he < ge; he++) {
				const pe = (P[he] = ae ? An(P[he]) : qt(P[he]));
				y(_[he], pe, M, null, W, oe, le, te, ae);
			}
			J > ce ? ue(_, W, oe, !0, !1, ge) : S(P, M, K, W, oe, le, te, ae, ge);
		},
		ve = (_, P, M, K, W, oe, le, te, ae) => {
			let J = 0;
			const ce = P.length;
			let ge = _.length - 1,
				he = ce - 1;
			for (; J <= ge && J <= he; ) {
				const pe = _[J],
					Ee = (P[J] = ae ? An(P[J]) : qt(P[J]));
				if (Qn(pe, Ee)) y(pe, Ee, M, null, W, oe, le, te, ae);
				else break;
				J++;
			}
			for (; J <= ge && J <= he; ) {
				const pe = _[ge],
					Ee = (P[he] = ae ? An(P[he]) : qt(P[he]));
				if (Qn(pe, Ee)) y(pe, Ee, M, null, W, oe, le, te, ae);
				else break;
				ge--, he--;
			}
			if (J > ge) {
				if (J <= he) {
					const pe = he + 1,
						Ee = pe < ce ? P[pe].el : K;
					for (; J <= he; )
						y(
							null,
							(P[J] = ae ? An(P[J]) : qt(P[J])),
							M,
							Ee,
							W,
							oe,
							le,
							te,
							ae,
						),
							J++;
				}
			} else if (J > he) for (; J <= ge; ) se(_[J], W, oe, !0), J++;
			else {
				const pe = J,
					Ee = J,
					Be = new Map();
				for (J = Ee; J <= he; J++) {
					const bt = (P[J] = ae ? An(P[J]) : qt(P[J]));
					bt.key != null && Be.set(bt.key, J);
				}
				let Fe,
					Ze = 0;
				const $t = he - Ee + 1;
				let uo = !1,
					ds = 0;
				const jo = new Array($t);
				for (J = 0; J < $t; J++) jo[J] = 0;
				for (J = pe; J <= ge; J++) {
					const bt = _[J];
					if (Ze >= $t) {
						se(bt, W, oe, !0);
						continue;
					}
					let Wt;
					if (bt.key != null) Wt = Be.get(bt.key);
					else
						for (Fe = Ee; Fe <= he; Fe++)
							if (jo[Fe - Ee] === 0 && Qn(bt, P[Fe])) {
								Wt = Fe;
								break;
							}
					Wt === void 0
						? se(bt, W, oe, !0)
						: ((jo[Wt - Ee] = J + 1),
							Wt >= ds ? (ds = Wt) : (uo = !0),
							y(bt, P[Wt], M, null, W, oe, le, te, ae),
							Ze++);
				}
				const fs = uo ? Zm(jo) : _o;
				for (Fe = fs.length - 1, J = $t - 1; J >= 0; J--) {
					const bt = Ee + J,
						Wt = P[bt],
						hs = bt + 1 < ce ? P[bt + 1].el : K;
					jo[J] === 0
						? y(null, Wt, M, hs, W, oe, le, te, ae)
						: uo && (Fe < 0 || J !== fs[Fe] ? ne(Wt, M, hs, 2) : Fe--);
				}
			}
		},
		ne = (_, P, M, K, W = null) => {
			const {
				el: oe,
				type: le,
				transition: te,
				children: ae,
				shapeFlag: J,
			} = _;
			if (J & 6) {
				ne(_.component.subTree, P, M, K);
				return;
			}
			if (J & 128) {
				_.suspense.move(P, M, K);
				return;
			}
			if (J & 64) {
				le.move(_, P, M, Q);
				return;
			}
			if (le === Je) {
				o(oe, P, M);
				for (let ge = 0; ge < ae.length; ge++) ne(ae[ge], P, M, K);
				o(_.anchor, P, M);
				return;
			}
			if (le === ii) {
				C(_, P, M);
				return;
			}
			if (K !== 2 && J & 1 && te)
				if (K === 0) te.beforeEnter(oe), o(oe, P, M), ht(() => te.enter(oe), W);
				else {
					const { leave: ge, delayLeave: he, afterLeave: pe } = te,
						Ee = () => o(oe, P, M),
						Be = () => {
							ge(oe, () => {
								Ee(), pe && pe();
							});
						};
					he ? he(oe, Ee, Be) : Be();
				}
			else o(oe, P, M);
		},
		se = (_, P, M, K = !1, W = !1) => {
			const {
				type: oe,
				props: le,
				ref: te,
				children: ae,
				dynamicChildren: J,
				shapeFlag: ce,
				patchFlag: ge,
				dirs: he,
			} = _;
			if ((te != null && Kl(te, null, M, _, !0), ce & 256)) {
				P.ctx.deactivate(_);
				return;
			}
			const pe = ce & 1 && he,
				Ee = !ai(_);
			let Be;
			if ((Ee && (Be = le && le.onVnodeBeforeUnmount) && Ut(Be, P, _), ce & 6))
				re(_.component, M, K);
			else {
				if (ce & 128) {
					_.suspense.unmount(M, K);
					return;
				}
				pe && Yn(_, null, P, 'beforeUnmount'),
					ce & 64
						? _.type.remove(_, P, M, W, Q, K)
						: J && (oe !== Je || (ge > 0 && ge & 64))
							? ue(J, P, M, !1, !0)
							: ((oe === Je && ge & 384) || (!W && ce & 16)) && ue(ae, P, M),
					K && be(_);
			}
			((Ee && (Be = le && le.onVnodeUnmounted)) || pe) &&
				ht(() => {
					Be && Ut(Be, P, _), pe && Yn(_, null, P, 'unmounted');
				}, M);
		},
		be = _ => {
			const { type: P, el: M, anchor: K, transition: W } = _;
			if (P === Je) {
				De(M, K);
				return;
			}
			if (P === ii) {
				p(_);
				return;
			}
			const oe = () => {
				a(M), W && !W.persisted && W.afterLeave && W.afterLeave();
			};
			if (_.shapeFlag & 1 && W && !W.persisted) {
				const { leave: le, delayLeave: te } = W,
					ae = () => le(M, oe);
				te ? te(_.el, oe, ae) : ae();
			} else oe();
		},
		De = (_, P) => {
			let M;
			for (; _ !== P; ) (M = h(_)), a(_), (_ = M);
			a(P);
		},
		re = (_, P, M) => {
			const { bum: K, scope: W, update: oe, subTree: le, um: te } = _;
			K && al(K),
				W.stop(),
				oe && ((oe.active = !1), se(le, _, P, M)),
				te && ht(te, P),
				ht(() => {
					_.isUnmounted = !0;
				}, P),
				P &&
					P.pendingBranch &&
					!P.isUnmounted &&
					_.asyncDep &&
					!_.asyncResolved &&
					_.suspenseId === P.pendingId &&
					(P.deps--, P.deps === 0 && P.resolve());
		},
		ue = (_, P, M, K = !1, W = !1, oe = 0) => {
			for (let le = oe; le < _.length; le++) se(_[le], P, M, K, W);
		},
		E = _ =>
			_.shapeFlag & 6
				? E(_.component.subTree)
				: _.shapeFlag & 128
					? _.suspense.next()
					: h(_.anchor || _.el);
	let H = !1;
	const N = (_, P, M) => {
			_ == null
				? P._vnode && se(P._vnode, null, null, !0)
				: y(P._vnode || null, _, P, null, null, null, M),
				H || ((H = !0), Ss(), qu(), (H = !1)),
				(P._vnode = _);
		},
		Q = { p: y, um: se, m: ne, r: be, mt: X, mc: S, pc: Y, pbc: I, n: E, o: e };
	let fe, xe;
	return { render: N, hydrate: fe, createApp: Hm(N, fe) };
}
function cl({ type: e, props: t }, n) {
	return (n === 'svg' && e === 'foreignObject') ||
		(n === 'mathml' &&
			e === 'annotation-xml' &&
			t &&
			t.encoding &&
			t.encoding.includes('html'))
		? void 0
		: n;
}
function Kn({ effect: e, update: t }, n) {
	e.allowRecurse = t.allowRecurse = n;
}
function Xm(e, t) {
	return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Dr(e, t, n = !1) {
	const o = e.children,
		a = t.children;
	if (ye(o) && ye(a))
		for (let i = 0; i < o.length; i++) {
			const l = o[i];
			let s = a[i];
			s.shapeFlag & 1 &&
				!s.dynamicChildren &&
				((s.patchFlag <= 0 || s.patchFlag === 32) &&
					((s = a[i] = An(a[i])), (s.el = l.el)),
				n || Dr(l, s)),
				s.type === ka && (s.el = l.el);
		}
}
function Zm(e) {
	const t = e.slice(),
		n = [0];
	let o, a, i, l, s;
	const r = e.length;
	for (o = 0; o < r; o++) {
		const c = e[o];
		if (c !== 0) {
			if (((a = n[n.length - 1]), e[a] < c)) {
				(t[o] = a), n.push(o);
				continue;
			}
			for (i = 0, l = n.length - 1; i < l; )
				(s = (i + l) >> 1), e[n[s]] < c ? (i = s + 1) : (l = s);
			c < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o));
		}
	}
	for (i = n.length, l = n[i - 1]; i-- > 0; ) (n[i] = l), (l = t[l]);
	return n;
}
function vd(e) {
	const t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : vd(t);
}
const Jm = e => e.__isTeleport,
	la = e => e && (e.disabled || e.disabled === ''),
	Bs = e => typeof SVGElement < 'u' && e instanceof SVGElement,
	Ds = e => typeof MathMLElement == 'function' && e instanceof MathMLElement,
	ql = (e, t) => {
		const n = e && e.to;
		return je(n) ? (t ? t(n) : null) : n;
	},
	Qm = {
		name: 'Teleport',
		__isTeleport: !0,
		process(e, t, n, o, a, i, l, s, r, c) {
			const {
					mc: u,
					pc: f,
					pbc: h,
					o: { insert: m, querySelector: g, createText: y, createComment: v },
				} = c,
				w = la(t.props);
			let { shapeFlag: b, children: C, dynamicChildren: p } = t;
			if (e == null) {
				const x = (t.el = y('')),
					T = (t.anchor = y(''));
				m(x, n, o), m(T, n, o);
				const R = (t.target = ql(t.props, g)),
					S = (t.targetAnchor = y(''));
				R &&
					(m(S, R),
					l === 'svg' || Bs(R)
						? (l = 'svg')
						: (l === 'mathml' || Ds(R)) && (l = 'mathml'));
				const A = (I, k) => {
					b & 16 && u(C, I, k, a, i, l, s, r);
				};
				w ? A(n, T) : R && A(R, S);
			} else {
				t.el = e.el;
				const x = (t.anchor = e.anchor),
					T = (t.target = e.target),
					R = (t.targetAnchor = e.targetAnchor),
					S = la(e.props),
					A = S ? n : T,
					I = S ? x : R;
				if (
					(l === 'svg' || Bs(T)
						? (l = 'svg')
						: (l === 'mathml' || Ds(T)) && (l = 'mathml'),
					p
						? (h(e.dynamicChildren, p, A, a, i, l, s), Dr(e, t, !0))
						: r || f(e, t, A, I, a, i, l, s, !1),
					w)
				)
					S
						? t.props &&
							e.props &&
							t.props.to !== e.props.to &&
							(t.props.to = e.props.to)
						: La(t, n, x, c, 1);
				else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
					const k = (t.target = ql(t.props, g));
					k && La(t, k, null, c, 0);
				} else S && La(t, T, R, c, 1);
			}
			bd(t);
		},
		remove(e, t, n, o, { um: a, o: { remove: i } }, l) {
			const {
				shapeFlag: s,
				children: r,
				anchor: c,
				targetAnchor: u,
				target: f,
				props: h,
			} = e;
			if ((f && i(u), l && i(c), s & 16)) {
				const m = l || !la(h);
				for (let g = 0; g < r.length; g++) {
					const y = r[g];
					a(y, t, n, m, !!y.dynamicChildren);
				}
			}
		},
		move: La,
		hydrate: eg,
	};
function La(e, t, n, { o: { insert: o }, m: a }, i = 2) {
	i === 0 && o(e.targetAnchor, t, n);
	const { el: l, anchor: s, shapeFlag: r, children: c, props: u } = e,
		f = i === 2;
	if ((f && o(l, t, n), (!f || la(u)) && r & 16))
		for (let h = 0; h < c.length; h++) a(c[h], t, n, 2);
	f && o(s, t, n);
}
function eg(
	e,
	t,
	n,
	o,
	a,
	i,
	{ o: { nextSibling: l, parentNode: s, querySelector: r } },
	c,
) {
	const u = (t.target = ql(t.props, r));
	if (u) {
		const f = u._lpa || u.firstChild;
		if (t.shapeFlag & 16)
			if (la(t.props))
				(t.anchor = c(l(e), t, s(e), n, o, a, i)), (t.targetAnchor = f);
			else {
				t.anchor = l(e);
				let h = f;
				for (; h; )
					if (
						((h = l(h)), h && h.nodeType === 8 && h.data === 'teleport anchor')
					) {
						(t.targetAnchor = h),
							(u._lpa = t.targetAnchor && l(t.targetAnchor));
						break;
					}
				c(f, t, u, n, o, a, i);
			}
		bd(t);
	}
	return t.anchor && l(t.anchor);
}
const Lo = Qm;
function bd(e) {
	const t = e.ctx;
	if (t && t.ut) {
		let n = e.children[0].el;
		for (; n && n !== e.targetAnchor; )
			n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid),
				(n = n.nextSibling);
		t.ut();
	}
}
const Je = Symbol.for('v-fgt'),
	ka = Symbol.for('v-txt'),
	pt = Symbol.for('v-cmt'),
	ii = Symbol.for('v-stc'),
	ra = [];
let Bt = null;
function ba(e = !1) {
	ra.push((Bt = e ? null : []));
}
function tg() {
	ra.pop(), (Bt = ra[ra.length - 1] || null);
}
let ya = 1;
function Ms(e) {
	ya += e;
}
function yd(e) {
	return (
		(e.dynamicChildren = ya > 0 ? Bt || _o : null),
		tg(),
		ya > 0 && Bt && Bt.push(e),
		e
	);
}
function Gl(e, t, n, o, a, i) {
	return yd(bi(e, t, n, o, a, i, !0));
}
function pd(e, t, n, o, a) {
	return yd(d(e, t, n, o, a, !0));
}
function vi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Qn(e, t) {
	return e.type === t.type && e.key === t.key;
}
const wd = ({ key: e }) => e ?? null,
	li = ({ ref: e, ref_key: t, ref_for: n }) => (
		typeof e == 'number' && (e = '' + e),
		e != null
			? je(e) || ft(e) || Se(e)
				? { i: dt, r: e, k: t, f: !!n }
				: e
			: null
	);
function bi(
	e,
	t = null,
	n = null,
	o = 0,
	a = null,
	i = e === Je ? 0 : 1,
	l = !1,
	s = !1,
) {
	const r = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && wd(t),
		ref: t && li(t),
		scopeId: Mi,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: i,
		patchFlag: o,
		dynamicProps: a,
		dynamicChildren: null,
		appContext: null,
		ctx: dt,
	};
	return (
		s
			? (Mr(r, n), i & 128 && e.normalize(r))
			: n && (r.shapeFlag |= je(n) ? 8 : 16),
		ya > 0 &&
			!l &&
			Bt &&
			(r.patchFlag > 0 || i & 6) &&
			r.patchFlag !== 32 &&
			Bt.push(r),
		r
	);
}
const d = ng;
function ng(e, t = null, n = null, o = 0, a = null, i = !1) {
	if (((!e || e === pm) && (e = pt), vi(e))) {
		const s = Vn(e, t, !0);
		return (
			n && Mr(s, n),
			ya > 0 &&
				!i &&
				Bt &&
				(s.shapeFlag & 6 ? (Bt[Bt.indexOf(e)] = s) : Bt.push(s)),
			(s.patchFlag |= -2),
			s
		);
	}
	if ((hg(e) && (e = e.__vccOpts), t)) {
		t = og(t);
		let { class: s, style: r } = t;
		s && !je(s) && (t.class = Ri(s)),
			Ve(r) && (zu(r) && !ye(r) && (r = qe({}, r)), (t.style = _a(r)));
	}
	const l = je(e) ? 1 : xm(e) ? 128 : Jm(e) ? 64 : Ve(e) ? 4 : Se(e) ? 2 : 0;
	return bi(e, t, n, o, a, l, i, !0);
}
function og(e) {
	return e ? (zu(e) || ud(e) ? qe({}, e) : e) : null;
}
function Vn(e, t, n = !1) {
	const { props: o, ref: a, patchFlag: i, children: l } = e,
		s = t ? _e(o || {}, t) : o;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: s,
		key: s && wd(s),
		ref:
			t && t.ref
				? n && a
					? ye(a)
						? a.concat(li(t))
						: [a, li(t)]
					: li(t)
				: a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: l,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Je ? (i === -1 ? 16 : i | 16) : i,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: e.transition,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Vn(e.ssContent),
		ssFallback: e.ssFallback && Vn(e.ssFallback),
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
	};
}
function no(e = ' ', t = 0) {
	return d(ka, null, e, t);
}
function j_(e, t) {
	const n = d(ii, null, e);
	return (n.staticCount = t), n;
}
function ag(e = '', t = !1) {
	return t ? (ba(), pd(pt, null, e)) : d(pt, null, e);
}
function qt(e) {
	return e == null || typeof e == 'boolean'
		? d(pt)
		: ye(e)
			? d(Je, null, e.slice())
			: typeof e == 'object'
				? An(e)
				: d(ka, null, String(e));
}
function An(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Vn(e);
}
function Mr(e, t) {
	let n = 0;
	const { shapeFlag: o } = e;
	if (t == null) t = null;
	else if (ye(t)) n = 16;
	else if (typeof t == 'object')
		if (o & 65) {
			const a = t.default;
			a && (a._c && (a._d = !1), Mr(e, a()), a._c && (a._d = !0));
			return;
		} else {
			n = 32;
			const a = t._;
			!a && !ud(t)
				? (t._ctx = dt)
				: a === 3 &&
					dt &&
					(dt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
		}
	else
		Se(t)
			? ((t = { default: t, _ctx: dt }), (n = 32))
			: ((t = String(t)), o & 64 ? ((n = 16), (t = [no(t)])) : (n = 8));
	(e.children = t), (e.shapeFlag |= n);
}
function _e(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const o = e[n];
		for (const a in o)
			if (a === 'class')
				t.class !== o.class && (t.class = Ri([t.class, o.class]));
			else if (a === 'style') t.style = _a([t.style, o.style]);
			else if ($i(a)) {
				const i = t[a],
					l = o[a];
				l &&
					i !== l &&
					!(ye(i) && i.includes(l)) &&
					(t[a] = i ? [].concat(i, l) : l);
			} else a !== '' && (t[a] = o[a]);
	}
	return t;
}
function Ut(e, t, n, o = null) {
	_t(e, t, 7, [n, o]);
}
const ig = rd();
let lg = 0;
function rg(e, t, n) {
	const o = e.type,
		a = (t ? t.appContext : e.appContext) || ig,
		i = {
			uid: lg++,
			vnode: e,
			type: o,
			parent: t,
			appContext: a,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new Dh(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: t ? t.provides : Object.create(a.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: fd(o, a),
			emitsOptions: Xu(o, a),
			emit: null,
			emitted: null,
			propsDefaults: Le,
			inheritAttrs: o.inheritAttrs,
			ctx: Le,
			data: Le,
			props: Le,
			attrs: Le,
			slots: Le,
			refs: Le,
			setupState: Le,
			setupContext: null,
			attrsProxy: null,
			slotsProxy: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null,
		};
	return (
		(i.ctx = { _: i }),
		(i.root = t ? t.root : i),
		(i.emit = hm.bind(null, i)),
		e.ce && e.ce(i),
		i
	);
}
let tt = null;
const Nt = () => tt || dt;
let yi, Xl;
{
	const e = _u(),
		t = (n, o) => {
			let a;
			return (
				(a = e[n]) || (a = e[n] = []),
				a.push(o),
				i => {
					a.length > 1 ? a.forEach(l => l(i)) : a[0](i);
				}
			);
		};
	(yi = t('__VUE_INSTANCE_SETTERS__', n => (tt = n))),
		(Xl = t('__VUE_SSR_SETTERS__', n => (Ni = n)));
}
const Ea = e => {
		const t = tt;
		return (
			yi(e),
			e.scope.on(),
			() => {
				e.scope.off(), yi(t);
			}
		);
	},
	Ls = () => {
		tt && tt.scope.off(), yi(null);
	};
function xd(e) {
	return e.vnode.shapeFlag & 4;
}
let Ni = !1;
function sg(e, t = !1) {
	t && Xl(t);
	const { props: n, children: o } = e.vnode,
		a = xd(e);
	jm(e, n, a, t), Ym(e, o);
	const i = a ? cg(e, t) : void 0;
	return t && Xl(!1), i;
}
function cg(e, t) {
	const n = e.type;
	(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Dm));
	const { setup: o } = n;
	if (o) {
		const a = (e.setupContext = o.length > 1 ? dg(e) : null),
			i = Ea(e);
		Fn();
		const l = Mn(o, e, 0, [e.props, a]);
		if ((zn(), i(), xu(l))) {
			if ((l.then(Ls, Ls), t))
				return l
					.then(s => {
						Vs(e, s, t);
					})
					.catch(s => {
						Bi(s, e, 0);
					});
			e.asyncDep = l;
		} else Vs(e, l, t);
	} else Sd(e, t);
}
function Vs(e, t, n) {
	Se(t)
		? e.type.__ssrInlineRender
			? (e.ssrRender = t)
			: (e.render = t)
		: Ve(t) && (e.setupState = Uu(t)),
		Sd(e, n);
}
let Ns;
function Sd(e, t, n) {
	const o = e.type;
	if (!e.render) {
		if (!t && Ns && !o.render) {
			const a = o.template || Or(e).template;
			if (a) {
				const { isCustomElement: i, compilerOptions: l } = e.appContext.config,
					{ delimiters: s, compilerOptions: r } = o,
					c = qe(qe({ isCustomElement: i, delimiters: s }, l), r);
				o.render = Ns(a, c);
			}
		}
		e.render = o.render || Tt;
	}
	{
		const a = Ea(e);
		Fn();
		try {
			Mm(e);
		} finally {
			zn(), a();
		}
	}
}
const ug = {
	get(e, t) {
		return gt(e, 'get', ''), e[t];
	},
};
function dg(e) {
	const t = n => {
		e.exposed = n || {};
	};
	return {
		attrs: new Proxy(e.attrs, ug),
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function Fi(e) {
	if (e.exposed)
		return (
			e.exposeProxy ||
			(e.exposeProxy = new Proxy(Uu(om(e.exposed)), {
				get(t, n) {
					if (n in t) return t[n];
					if (n in aa) return aa[n](e);
				},
				has(t, n) {
					return n in t || n in aa;
				},
			}))
		);
}
function fg(e, t = !0) {
	return Se(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function hg(e) {
	return Se(e) && '__vccOpts' in e;
}
const L = (e, t) => am(e, t, Ni);
function Lr(e, t, n) {
	const o = arguments.length;
	return o === 2
		? Ve(t) && !ye(t)
			? vi(t)
				? d(e, null, [t])
				: d(e, t)
			: d(e, null, t)
		: (o > 3
				? (n = Array.prototype.slice.call(arguments, 2))
				: o === 3 && vi(n) && (n = [n]),
			d(e, t, n));
}
const mg = '3.4.25';
/**
 * @vue/runtime-dom v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const gg = 'http://www.w3.org/2000/svg',
	vg = 'http://www.w3.org/1998/Math/MathML',
	Rn = typeof document < 'u' ? document : null,
	Fs = Rn && Rn.createElement('template'),
	bg = {
		insert: (e, t, n) => {
			t.insertBefore(e, n || null);
		},
		remove: e => {
			const t = e.parentNode;
			t && t.removeChild(e);
		},
		createElement: (e, t, n, o) => {
			const a =
				t === 'svg'
					? Rn.createElementNS(gg, e)
					: t === 'mathml'
						? Rn.createElementNS(vg, e)
						: Rn.createElement(e, n ? { is: n } : void 0);
			return (
				e === 'select' &&
					o &&
					o.multiple != null &&
					a.setAttribute('multiple', o.multiple),
				a
			);
		},
		createText: e => Rn.createTextNode(e),
		createComment: e => Rn.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: e => e.parentNode,
		nextSibling: e => e.nextSibling,
		querySelector: e => Rn.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, '');
		},
		insertStaticContent(e, t, n, o, a, i) {
			const l = n ? n.previousSibling : t.lastChild;
			if (a && (a === i || a.nextSibling))
				for (
					;
					t.insertBefore(a.cloneNode(!0), n),
						!(a === i || !(a = a.nextSibling));

				);
			else {
				Fs.innerHTML =
					o === 'svg'
						? `<svg>${e}</svg>`
						: o === 'mathml'
							? `<math>${e}</math>`
							: e;
				const s = Fs.content;
				if (o === 'svg' || o === 'mathml') {
					const r = s.firstChild;
					for (; r.firstChild; ) s.appendChild(r.firstChild);
					s.removeChild(r);
				}
				t.insertBefore(s, n);
			}
			return [
				l ? l.nextSibling : t.firstChild,
				n ? n.previousSibling : t.lastChild,
			];
		},
	},
	xn = 'transition',
	Wo = 'animation',
	pa = Symbol('_vtc'),
	Vo = (e, { slots: t }) => Lr($m, yg(e), t);
Vo.displayName = 'Transition';
const Cd = {
	name: String,
	type: String,
	css: { type: Boolean, default: !0 },
	duration: [String, Number, Object],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String,
};
Vo.props = qe({}, ed, Cd);
const qn = (e, t = []) => {
		ye(e) ? e.forEach(n => n(...t)) : e && e(...t);
	},
	zs = e => (e ? (ye(e) ? e.some(t => t.length > 1) : e.length > 1) : !1);
function yg(e) {
	const t = {};
	for (const $ in e) $ in Cd || (t[$] = e[$]);
	if (e.css === !1) return t;
	const {
			name: n = 'v',
			type: o,
			duration: a,
			enterFromClass: i = `${n}-enter-from`,
			enterActiveClass: l = `${n}-enter-active`,
			enterToClass: s = `${n}-enter-to`,
			appearFromClass: r = i,
			appearActiveClass: c = l,
			appearToClass: u = s,
			leaveFromClass: f = `${n}-leave-from`,
			leaveActiveClass: h = `${n}-leave-active`,
			leaveToClass: m = `${n}-leave-to`,
		} = e,
		g = pg(a),
		y = g && g[0],
		v = g && g[1],
		{
			onBeforeEnter: w,
			onEnter: b,
			onEnterCancelled: C,
			onLeave: p,
			onLeaveCancelled: x,
			onBeforeAppear: T = w,
			onAppear: R = b,
			onAppearCancelled: S = C,
		} = t,
		A = ($, B, X) => {
			Gn($, B ? u : s), Gn($, B ? c : l), X && X();
		},
		I = ($, B) => {
			($._isLeaving = !1), Gn($, f), Gn($, m), Gn($, h), B && B();
		},
		k = $ => (B, X) => {
			const V = $ ? R : b,
				O = () => A(B, $, X);
			qn(V, [B, O]),
				Hs(() => {
					Gn(B, $ ? r : i), Sn(B, $ ? u : s), zs(V) || js(B, o, y, O);
				});
		};
	return qe(t, {
		onBeforeEnter($) {
			qn(w, [$]), Sn($, i), Sn($, l);
		},
		onBeforeAppear($) {
			qn(T, [$]), Sn($, r), Sn($, c);
		},
		onEnter: k(!1),
		onAppear: k(!0),
		onLeave($, B) {
			$._isLeaving = !0;
			const X = () => I($, B);
			Sn($, f),
				Sn($, h),
				Sg(),
				Hs(() => {
					$._isLeaving && (Gn($, f), Sn($, m), zs(p) || js($, o, v, X));
				}),
				qn(p, [$, X]);
		},
		onEnterCancelled($) {
			A($, !1), qn(C, [$]);
		},
		onAppearCancelled($) {
			A($, !0), qn(S, [$]);
		},
		onLeaveCancelled($) {
			I($), qn(x, [$]);
		},
	});
}
function pg(e) {
	if (e == null) return null;
	if (Ve(e)) return [ul(e.enter), ul(e.leave)];
	{
		const t = ul(e);
		return [t, t];
	}
}
function ul(e) {
	return kh(e);
}
function Sn(e, t) {
	t.split(/\s+/).forEach(n => n && e.classList.add(n)),
		(e[pa] || (e[pa] = new Set())).add(t);
}
function Gn(e, t) {
	t.split(/\s+/).forEach(o => o && e.classList.remove(o));
	const n = e[pa];
	n && (n.delete(t), n.size || (e[pa] = void 0));
}
function Hs(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
let wg = 0;
function js(e, t, n, o) {
	const a = (e._endId = ++wg),
		i = () => {
			a === e._endId && o();
		};
	if (n) return setTimeout(i, n);
	const { type: l, timeout: s, propCount: r } = xg(e, t);
	if (!l) return o();
	const c = l + 'end';
	let u = 0;
	const f = () => {
			e.removeEventListener(c, h), i();
		},
		h = m => {
			m.target === e && ++u >= r && f();
		};
	setTimeout(() => {
		u < r && f();
	}, s + 1),
		e.addEventListener(c, h);
}
function xg(e, t) {
	const n = window.getComputedStyle(e),
		o = g => (n[g] || '').split(', '),
		a = o(`${xn}Delay`),
		i = o(`${xn}Duration`),
		l = Ws(a, i),
		s = o(`${Wo}Delay`),
		r = o(`${Wo}Duration`),
		c = Ws(s, r);
	let u = null,
		f = 0,
		h = 0;
	t === xn
		? l > 0 && ((u = xn), (f = l), (h = i.length))
		: t === Wo
			? c > 0 && ((u = Wo), (f = c), (h = r.length))
			: ((f = Math.max(l, c)),
				(u = f > 0 ? (l > c ? xn : Wo) : null),
				(h = u ? (u === xn ? i.length : r.length) : 0));
	const m =
		u === xn && /\b(transform|all)(,|$)/.test(o(`${xn}Property`).toString());
	return { type: u, timeout: f, propCount: h, hasTransform: m };
}
function Ws(e, t) {
	for (; e.length < t.length; ) e = e.concat(e);
	return Math.max(...t.map((n, o) => Us(n) + Us(e[o])));
}
function Us(e) {
	return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function Sg() {
	return document.body.offsetHeight;
}
function Cg(e, t, n) {
	const o = e[pa];
	o && (t = (t ? [t, ...o] : [...o]).join(' ')),
		t == null
			? e.removeAttribute('class')
			: n
				? e.setAttribute('class', t)
				: (e.className = t);
}
const pi = Symbol('_vod'),
	Td = Symbol('_vsh'),
	nt = {
		beforeMount(e, { value: t }, { transition: n }) {
			(e[pi] = e.style.display === 'none' ? '' : e.style.display),
				n && t ? n.beforeEnter(e) : Uo(e, t);
		},
		mounted(e, { value: t }, { transition: n }) {
			n && t && n.enter(e);
		},
		updated(e, { value: t, oldValue: n }, { transition: o }) {
			!t != !n &&
				(o
					? t
						? (o.beforeEnter(e), Uo(e, !0), o.enter(e))
						: o.leave(e, () => {
								Uo(e, !1);
							})
					: Uo(e, t));
		},
		beforeUnmount(e, { value: t }) {
			Uo(e, t);
		},
	};
function Uo(e, t) {
	(e.style.display = t ? e[pi] : 'none'), (e[Td] = !t);
}
const Tg = Symbol(''),
	_g = /(^|;)\s*display\s*:/;
function kg(e, t, n) {
	const o = e.style,
		a = je(n);
	let i = !1;
	if (n && !a) {
		if (t)
			if (je(t))
				for (const l of t.split(';')) {
					const s = l.slice(0, l.indexOf(':')).trim();
					n[s] == null && ri(o, s, '');
				}
			else for (const l in t) n[l] == null && ri(o, l, '');
		for (const l in n) l === 'display' && (i = !0), ri(o, l, n[l]);
	} else if (a) {
		if (t !== n) {
			const l = o[Tg];
			l && (n += ';' + l), (o.cssText = n), (i = _g.test(n));
		}
	} else t && e.removeAttribute('style');
	pi in e && ((e[pi] = i ? o.display : ''), e[Td] && (o.display = 'none'));
}
const Ys = /\s*!important$/;
function ri(e, t, n) {
	if (ye(n)) n.forEach(o => ri(e, t, o));
	else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
	else {
		const o = Eg(e, t);
		Ys.test(n)
			? e.setProperty(Nn(o), n.replace(Ys, ''), 'important')
			: (e[o] = n);
	}
}
const Ks = ['Webkit', 'Moz', 'ms'],
	dl = {};
function Eg(e, t) {
	const n = dl[t];
	if (n) return n;
	let o = Zt(t);
	if (o !== 'filter' && o in e) return (dl[t] = o);
	o = Ai(o);
	for (let a = 0; a < Ks.length; a++) {
		const i = Ks[a] + o;
		if (i in e) return (dl[t] = i);
	}
	return t;
}
const qs = 'http://www.w3.org/1999/xlink';
function $g(e, t, n, o, a) {
	if (o && t.startsWith('xlink:'))
		n == null
			? e.removeAttributeNS(qs, t.slice(6, t.length))
			: e.setAttributeNS(qs, t, n);
	else {
		const i = Oh(t);
		n == null || (i && !ku(n))
			? e.removeAttribute(t)
			: e.setAttribute(t, i ? '' : n);
	}
}
function Pg(e, t, n, o, a, i, l) {
	if (t === 'innerHTML' || t === 'textContent') {
		o && l(o, a, i), (e[t] = n ?? '');
		return;
	}
	const s = e.tagName;
	if (t === 'value' && s !== 'PROGRESS' && !s.includes('-')) {
		const c = s === 'OPTION' ? e.getAttribute('value') || '' : e.value,
			u = n ?? '';
		(c !== u || !('_value' in e)) && (e.value = u),
			n == null && e.removeAttribute(t),
			(e._value = n);
		return;
	}
	let r = !1;
	if (n === '' || n == null) {
		const c = typeof e[t];
		c === 'boolean'
			? (n = ku(n))
			: n == null && c === 'string'
				? ((n = ''), (r = !0))
				: c === 'number' && ((n = 0), (r = !0));
	}
	try {
		e[t] = n;
	} catch {}
	r && e.removeAttribute(t);
}
function Ig(e, t, n, o) {
	e.addEventListener(t, n, o);
}
function Ag(e, t, n, o) {
	e.removeEventListener(t, n, o);
}
const Gs = Symbol('_vei');
function Rg(e, t, n, o, a = null) {
	const i = e[Gs] || (e[Gs] = {}),
		l = i[t];
	if (o && l) l.value = o;
	else {
		const [s, r] = Og(t);
		if (o) {
			const c = (i[t] = Mg(o, a));
			Ig(e, s, c, r);
		} else l && (Ag(e, s, l, r), (i[t] = void 0));
	}
}
const Xs = /(?:Once|Passive|Capture)$/;
function Og(e) {
	let t;
	if (Xs.test(e)) {
		t = {};
		let o;
		for (; (o = e.match(Xs)); )
			(e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
	}
	return [e[2] === ':' ? e.slice(3) : Nn(e.slice(2)), t];
}
let fl = 0;
const Bg = Promise.resolve(),
	Dg = () => fl || (Bg.then(() => (fl = 0)), (fl = Date.now()));
function Mg(e, t) {
	const n = o => {
		if (!o._vts) o._vts = Date.now();
		else if (o._vts <= n.attached) return;
		_t(Lg(o, n.value), t, 5, [o]);
	};
	return (n.value = e), (n.attached = Dg()), n;
}
function Lg(e, t) {
	if (ye(t)) {
		const n = e.stopImmediatePropagation;
		return (
			(e.stopImmediatePropagation = () => {
				n.call(e), (e._stopped = !0);
			}),
			t.map(o => a => !a._stopped && o && o(a))
		);
	} else return t;
}
const Zs = e =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		e.charCodeAt(2) > 96 &&
		e.charCodeAt(2) < 123,
	Vg = (e, t, n, o, a, i, l, s, r) => {
		const c = a === 'svg';
		t === 'class'
			? Cg(e, o, c)
			: t === 'style'
				? kg(e, n, o)
				: $i(t)
					? wr(t) || Rg(e, t, n, o, l)
					: (
								t[0] === '.'
									? ((t = t.slice(1)), !0)
									: t[0] === '^'
										? ((t = t.slice(1)), !1)
										: Ng(e, t, o, c)
						  )
						? Pg(e, t, o, i, l, s, r)
						: (t === 'true-value'
								? (e._trueValue = o)
								: t === 'false-value' && (e._falseValue = o),
							$g(e, t, o, c));
	};
function Ng(e, t, n, o) {
	if (o)
		return !!(
			t === 'innerHTML' ||
			t === 'textContent' ||
			(t in e && Zs(t) && Se(n))
		);
	if (
		t === 'spellcheck' ||
		t === 'draggable' ||
		t === 'translate' ||
		t === 'form' ||
		(t === 'list' && e.tagName === 'INPUT') ||
		(t === 'type' && e.tagName === 'TEXTAREA')
	)
		return !1;
	if (t === 'width' || t === 'height') {
		const a = e.tagName;
		if (a === 'IMG' || a === 'VIDEO' || a === 'CANVAS' || a === 'SOURCE')
			return !1;
	}
	return Zs(t) && je(n) ? !1 : t in e;
}
const Fg = {
		esc: 'escape',
		space: ' ',
		up: 'arrow-up',
		left: 'arrow-left',
		right: 'arrow-right',
		down: 'arrow-down',
		delete: 'backspace',
	},
	zg = (e, t) => {
		const n = e._withKeys || (e._withKeys = {}),
			o = t.join('.');
		return (
			n[o] ||
			(n[o] = a => {
				if (!('key' in a)) return;
				const i = Nn(a.key);
				if (t.some(l => l === i || Fg[l] === i)) return e(a);
			})
		);
	},
	Hg = qe({ patchProp: Vg }, bg);
let Js;
function jg() {
	return Js || (Js = qm(Hg));
}
const _d = (...e) => {
	const t = jg().createApp(...e),
		{ mount: n } = t;
	return (
		(t.mount = o => {
			const a = Ug(o);
			if (!a) return;
			const i = t._component;
			!Se(i) && !i.render && !i.template && (i.template = a.innerHTML),
				(a.innerHTML = '');
			const l = n(a, !1, Wg(a));
			return (
				a instanceof Element &&
					(a.removeAttribute('v-cloak'), a.setAttribute('data-v-app', '')),
				l
			);
		}),
		t
	);
};
function Wg(e) {
	if (e instanceof SVGElement) return 'svg';
	if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
		return 'mathml';
}
function Ug(e) {
	return je(e) ? document.querySelector(e) : e;
}
const Yg = { name: 'App' },
	Vr = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [o, a] of t) n[o] = a;
		return n;
	};
function Kg(e, t, n, o, a, i) {
	const l = mi('RouterView'),
		s = mi('van-config-provider');
	return ba(), pd(s, { theme: 'light' }, { default: hi(() => [d(l)]), _: 1 });
}
const qg = Vr(Yg, [
	['render', Kg],
	['__scopeId', 'data-v-669f4a6b'],
]);
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const To = typeof document < 'u';
function Gg(e) {
	return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const Oe = Object.assign;
function hl(e, t) {
	const n = {};
	for (const o in t) {
		const a = t[o];
		n[o] = Vt(a) ? a.map(e) : e(a);
	}
	return n;
}
const sa = () => {},
	Vt = Array.isArray,
	kd = /#/g,
	Xg = /&/g,
	Zg = /\//g,
	Jg = /=/g,
	Qg = /\?/g,
	Ed = /\+/g,
	ev = /%5B/g,
	tv = /%5D/g,
	$d = /%5E/g,
	nv = /%60/g,
	Pd = /%7B/g,
	ov = /%7C/g,
	Id = /%7D/g,
	av = /%20/g;
function Nr(e) {
	return encodeURI('' + e)
		.replace(ov, '|')
		.replace(ev, '[')
		.replace(tv, ']');
}
function iv(e) {
	return Nr(e).replace(Pd, '{').replace(Id, '}').replace($d, '^');
}
function Zl(e) {
	return Nr(e)
		.replace(Ed, '%2B')
		.replace(av, '+')
		.replace(kd, '%23')
		.replace(Xg, '%26')
		.replace(nv, '`')
		.replace(Pd, '{')
		.replace(Id, '}')
		.replace($d, '^');
}
function lv(e) {
	return Zl(e).replace(Jg, '%3D');
}
function rv(e) {
	return Nr(e).replace(kd, '%23').replace(Qg, '%3F');
}
function sv(e) {
	return e == null ? '' : rv(e).replace(Zg, '%2F');
}
function wa(e) {
	try {
		return decodeURIComponent('' + e);
	} catch {}
	return '' + e;
}
const cv = /\/$/,
	uv = e => e.replace(cv, '');
function ml(e, t, n = '/') {
	let o,
		a = {},
		i = '',
		l = '';
	const s = t.indexOf('#');
	let r = t.indexOf('?');
	return (
		s < r && s >= 0 && (r = -1),
		r > -1 &&
			((o = t.slice(0, r)),
			(i = t.slice(r + 1, s > -1 ? s : t.length)),
			(a = e(i))),
		s > -1 && ((o = o || t.slice(0, s)), (l = t.slice(s, t.length))),
		(o = mv(o ?? t, n)),
		{ fullPath: o + (i && '?') + i + l, path: o, query: a, hash: wa(l) }
	);
}
function dv(e, t) {
	const n = t.query ? e(t.query) : '';
	return t.path + (n && '?') + n + (t.hash || '');
}
function Qs(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase())
		? e
		: e.slice(t.length) || '/';
}
function fv(e, t, n) {
	const o = t.matched.length - 1,
		a = n.matched.length - 1;
	return (
		o > -1 &&
		o === a &&
		Ao(t.matched[o], n.matched[a]) &&
		Ad(t.params, n.params) &&
		e(t.query) === e(n.query) &&
		t.hash === n.hash
	);
}
function Ao(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ad(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (const n in e) if (!hv(e[n], t[n])) return !1;
	return !0;
}
function hv(e, t) {
	return Vt(e) ? ec(e, t) : Vt(t) ? ec(t, e) : e === t;
}
function ec(e, t) {
	return Vt(t)
		? e.length === t.length && e.every((n, o) => n === t[o])
		: e.length === 1 && e[0] === t;
}
function mv(e, t) {
	if (e.startsWith('/')) return e;
	if (!e) return t;
	const n = t.split('/'),
		o = e.split('/'),
		a = o[o.length - 1];
	(a === '..' || a === '.') && o.push('');
	let i = n.length - 1,
		l,
		s;
	for (l = 0; l < o.length; l++)
		if (((s = o[l]), s !== '.'))
			if (s === '..') i > 1 && i--;
			else break;
	return n.slice(0, i).join('/') + '/' + o.slice(l).join('/');
}
var xa;
(function (e) {
	(e.pop = 'pop'), (e.push = 'push');
})(xa || (xa = {}));
var ca;
(function (e) {
	(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(ca || (ca = {}));
function gv(e) {
	if (!e)
		if (To) {
			const t = document.querySelector('base');
			(e = (t && t.getAttribute('href')) || '/'),
				(e = e.replace(/^\w+:\/\/[^\/]+/, ''));
		} else e = '/';
	return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), uv(e);
}
const vv = /^[^#]+#/;
function bv(e, t) {
	return e.replace(vv, '#') + t;
}
function yv(e, t) {
	const n = document.documentElement.getBoundingClientRect(),
		o = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: o.left - n.left - (t.left || 0),
		top: o.top - n.top - (t.top || 0),
	};
}
const zi = () => ({ left: window.scrollX, top: window.scrollY });
function pv(e) {
	let t;
	if ('el' in e) {
		const n = e.el,
			o = typeof n == 'string' && n.startsWith('#'),
			a =
				typeof n == 'string'
					? o
						? document.getElementById(n.slice(1))
						: document.querySelector(n)
					: n;
		if (!a) return;
		t = yv(a, e);
	} else t = e;
	'scrollBehavior' in document.documentElement.style
		? window.scrollTo(t)
		: window.scrollTo(
				t.left != null ? t.left : window.scrollX,
				t.top != null ? t.top : window.scrollY,
			);
}
function tc(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
const Jl = new Map();
function wv(e, t) {
	Jl.set(e, t);
}
function xv(e) {
	const t = Jl.get(e);
	return Jl.delete(e), t;
}
let Sv = () => location.protocol + '//' + location.host;
function Rd(e, t) {
	const { pathname: n, search: o, hash: a } = t,
		i = e.indexOf('#');
	if (i > -1) {
		let s = a.includes(e.slice(i)) ? e.slice(i).length : 1,
			r = a.slice(s);
		return r[0] !== '/' && (r = '/' + r), Qs(r, '');
	}
	return Qs(n, e) + o + a;
}
function Cv(e, t, n, o) {
	let a = [],
		i = [],
		l = null;
	const s = ({ state: h }) => {
		const m = Rd(e, location),
			g = n.value,
			y = t.value;
		let v = 0;
		if (h) {
			if (((n.value = m), (t.value = h), l && l === g)) {
				l = null;
				return;
			}
			v = y ? h.position - y.position : 0;
		} else o(m);
		a.forEach(w => {
			w(n.value, g, {
				delta: v,
				type: xa.pop,
				direction: v ? (v > 0 ? ca.forward : ca.back) : ca.unknown,
			});
		});
	};
	function r() {
		l = n.value;
	}
	function c(h) {
		a.push(h);
		const m = () => {
			const g = a.indexOf(h);
			g > -1 && a.splice(g, 1);
		};
		return i.push(m), m;
	}
	function u() {
		const { history: h } = window;
		h.state && h.replaceState(Oe({}, h.state, { scroll: zi() }), '');
	}
	function f() {
		for (const h of i) h();
		(i = []),
			window.removeEventListener('popstate', s),
			window.removeEventListener('beforeunload', u);
	}
	return (
		window.addEventListener('popstate', s),
		window.addEventListener('beforeunload', u, { passive: !0 }),
		{ pauseListeners: r, listen: c, destroy: f }
	);
}
function nc(e, t, n, o = !1, a = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: o,
		position: window.history.length,
		scroll: a ? zi() : null,
	};
}
function Tv(e) {
	const { history: t, location: n } = window,
		o = { value: Rd(e, n) },
		a = { value: t.state };
	a.value ||
		i(
			o.value,
			{
				back: null,
				current: o.value,
				forward: null,
				position: t.length - 1,
				replaced: !0,
				scroll: null,
			},
			!0,
		);
	function i(r, c, u) {
		const f = e.indexOf('#'),
			h =
				f > -1
					? (n.host && document.querySelector('base') ? e : e.slice(f)) + r
					: Sv() + e + r;
		try {
			t[u ? 'replaceState' : 'pushState'](c, '', h), (a.value = c);
		} catch (m) {
			console.error(m), n[u ? 'replace' : 'assign'](h);
		}
	}
	function l(r, c) {
		const u = Oe({}, t.state, nc(a.value.back, r, a.value.forward, !0), c, {
			position: a.value.position,
		});
		i(r, u, !0), (o.value = r);
	}
	function s(r, c) {
		const u = Oe({}, a.value, t.state, { forward: r, scroll: zi() });
		i(u.current, u, !0);
		const f = Oe({}, nc(o.value, r, null), { position: u.position + 1 }, c);
		i(r, f, !1), (o.value = r);
	}
	return { location: o, state: a, push: s, replace: l };
}
function _v(e) {
	e = gv(e);
	const t = Tv(e),
		n = Cv(e, t.state, t.location, t.replace);
	function o(i, l = !0) {
		l || n.pauseListeners(), history.go(i);
	}
	const a = Oe(
		{ location: '', base: e, go: o, createHref: bv.bind(null, e) },
		t,
		n,
	);
	return (
		Object.defineProperty(a, 'location', {
			enumerable: !0,
			get: () => t.location.value,
		}),
		Object.defineProperty(a, 'state', {
			enumerable: !0,
			get: () => t.state.value,
		}),
		a
	);
}
function kv(e) {
	return typeof e == 'string' || (e && typeof e == 'object');
}
function Od(e) {
	return typeof e == 'string' || typeof e == 'symbol';
}
const Cn = {
		path: '/',
		name: void 0,
		params: {},
		query: {},
		hash: '',
		fullPath: '/',
		matched: [],
		meta: {},
		redirectedFrom: void 0,
	},
	Bd = Symbol('');
var oc;
(function (e) {
	(e[(e.aborted = 4)] = 'aborted'),
		(e[(e.cancelled = 8)] = 'cancelled'),
		(e[(e.duplicated = 16)] = 'duplicated');
})(oc || (oc = {}));
function Ro(e, t) {
	return Oe(new Error(), { type: e, [Bd]: !0 }, t);
}
function tn(e, t) {
	return e instanceof Error && Bd in e && (t == null || !!(e.type & t));
}
const ac = '[^/]+?',
	Ev = { sensitive: !1, strict: !1, start: !0, end: !0 },
	$v = /[.+*?^${}()[\]/\\]/g;
function Pv(e, t) {
	const n = Oe({}, Ev, t),
		o = [];
	let a = n.start ? '^' : '';
	const i = [];
	for (const c of e) {
		const u = c.length ? [] : [90];
		n.strict && !c.length && (a += '/');
		for (let f = 0; f < c.length; f++) {
			const h = c[f];
			let m = 40 + (n.sensitive ? 0.25 : 0);
			if (h.type === 0)
				f || (a += '/'), (a += h.value.replace($v, '\\$&')), (m += 40);
			else if (h.type === 1) {
				const { value: g, repeatable: y, optional: v, regexp: w } = h;
				i.push({ name: g, repeatable: y, optional: v });
				const b = w || ac;
				if (b !== ac) {
					m += 10;
					try {
						new RegExp(`(${b})`);
					} catch (p) {
						throw new Error(
							`Invalid custom RegExp for param "${g}" (${b}): ` + p.message,
						);
					}
				}
				let C = y ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
				f || (C = v && c.length < 2 ? `(?:/${C})` : '/' + C),
					v && (C += '?'),
					(a += C),
					(m += 20),
					v && (m += -8),
					y && (m += -20),
					b === '.*' && (m += -50);
			}
			u.push(m);
		}
		o.push(u);
	}
	if (n.strict && n.end) {
		const c = o.length - 1;
		o[c][o[c].length - 1] += 0.7000000000000001;
	}
	n.strict || (a += '/?'), n.end ? (a += '$') : n.strict && (a += '(?:/|$)');
	const l = new RegExp(a, n.sensitive ? '' : 'i');
	function s(c) {
		const u = c.match(l),
			f = {};
		if (!u) return null;
		for (let h = 1; h < u.length; h++) {
			const m = u[h] || '',
				g = i[h - 1];
			f[g.name] = m && g.repeatable ? m.split('/') : m;
		}
		return f;
	}
	function r(c) {
		let u = '',
			f = !1;
		for (const h of e) {
			(!f || !u.endsWith('/')) && (u += '/'), (f = !1);
			for (const m of h)
				if (m.type === 0) u += m.value;
				else if (m.type === 1) {
					const { value: g, repeatable: y, optional: v } = m,
						w = g in c ? c[g] : '';
					if (Vt(w) && !y)
						throw new Error(
							`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`,
						);
					const b = Vt(w) ? w.join('/') : w;
					if (!b)
						if (v)
							h.length < 2 &&
								(u.endsWith('/') ? (u = u.slice(0, -1)) : (f = !0));
						else throw new Error(`Missing required param "${g}"`);
					u += b;
				}
		}
		return u || '/';
	}
	return { re: l, score: o, keys: i, parse: s, stringify: r };
}
function Iv(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length; ) {
		const o = t[n] - e[n];
		if (o) return o;
		n++;
	}
	return e.length < t.length
		? e.length === 1 && e[0] === 80
			? -1
			: 1
		: e.length > t.length
			? t.length === 1 && t[0] === 80
				? 1
				: -1
			: 0;
}
function Av(e, t) {
	let n = 0;
	const o = e.score,
		a = t.score;
	for (; n < o.length && n < a.length; ) {
		const i = Iv(o[n], a[n]);
		if (i) return i;
		n++;
	}
	if (Math.abs(a.length - o.length) === 1) {
		if (ic(o)) return 1;
		if (ic(a)) return -1;
	}
	return a.length - o.length;
}
function ic(e) {
	const t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
const Rv = { type: 0, value: '' },
	Ov = /[a-zA-Z0-9_]/;
function Bv(e) {
	if (!e) return [[]];
	if (e === '/') return [[Rv]];
	if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
	function t(m) {
		throw new Error(`ERR (${n})/"${c}": ${m}`);
	}
	let n = 0,
		o = n;
	const a = [];
	let i;
	function l() {
		i && a.push(i), (i = []);
	}
	let s = 0,
		r,
		c = '',
		u = '';
	function f() {
		c &&
			(n === 0
				? i.push({ type: 0, value: c })
				: n === 1 || n === 2 || n === 3
					? (i.length > 1 &&
							(r === '*' || r === '+') &&
							t(
								`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
							),
						i.push({
							type: 1,
							value: c,
							regexp: u,
							repeatable: r === '*' || r === '+',
							optional: r === '*' || r === '?',
						}))
					: t('Invalid state to consume buffer'),
			(c = ''));
	}
	function h() {
		c += r;
	}
	for (; s < e.length; ) {
		if (((r = e[s++]), r === '\\' && n !== 2)) {
			(o = n), (n = 4);
			continue;
		}
		switch (n) {
			case 0:
				r === '/' ? (c && f(), l()) : r === ':' ? (f(), (n = 1)) : h();
				break;
			case 4:
				h(), (n = o);
				break;
			case 1:
				r === '('
					? (n = 2)
					: Ov.test(r)
						? h()
						: (f(), (n = 0), r !== '*' && r !== '?' && r !== '+' && s--);
				break;
			case 2:
				r === ')'
					? u[u.length - 1] == '\\'
						? (u = u.slice(0, -1) + r)
						: (n = 3)
					: (u += r);
				break;
			case 3:
				f(), (n = 0), r !== '*' && r !== '?' && r !== '+' && s--, (u = '');
				break;
			default:
				t('Unknown state');
				break;
		}
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), l(), a;
}
function Dv(e, t, n) {
	const o = Pv(Bv(e.path), n),
		a = Oe(o, { record: e, parent: t, children: [], alias: [] });
	return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function Mv(e, t) {
	const n = [],
		o = new Map();
	t = sc({ strict: !1, end: !0, sensitive: !1 }, t);
	function a(u) {
		return o.get(u);
	}
	function i(u, f, h) {
		const m = !h,
			g = Lv(u);
		g.aliasOf = h && h.record;
		const y = sc(t, u),
			v = [g];
		if ('alias' in u) {
			const C = typeof u.alias == 'string' ? [u.alias] : u.alias;
			for (const p of C)
				v.push(
					Oe({}, g, {
						components: h ? h.record.components : g.components,
						path: p,
						aliasOf: h ? h.record : g,
					}),
				);
		}
		let w, b;
		for (const C of v) {
			const { path: p } = C;
			if (f && p[0] !== '/') {
				const x = f.record.path,
					T = x[x.length - 1] === '/' ? '' : '/';
				C.path = f.record.path + (p && T + p);
			}
			if (
				((w = Dv(C, f, y)),
				h
					? h.alias.push(w)
					: ((b = b || w),
						b !== w && b.alias.push(w),
						m && u.name && !rc(w) && l(u.name)),
				g.children)
			) {
				const x = g.children;
				for (let T = 0; T < x.length; T++) i(x[T], w, h && h.children[T]);
			}
			(h = h || w),
				((w.record.components && Object.keys(w.record.components).length) ||
					w.record.name ||
					w.record.redirect) &&
					r(w);
		}
		return b
			? () => {
					l(b);
				}
			: sa;
	}
	function l(u) {
		if (Od(u)) {
			const f = o.get(u);
			f &&
				(o.delete(u),
				n.splice(n.indexOf(f), 1),
				f.children.forEach(l),
				f.alias.forEach(l));
		} else {
			const f = n.indexOf(u);
			f > -1 &&
				(n.splice(f, 1),
				u.record.name && o.delete(u.record.name),
				u.children.forEach(l),
				u.alias.forEach(l));
		}
	}
	function s() {
		return n;
	}
	function r(u) {
		let f = 0;
		for (
			;
			f < n.length &&
			Av(u, n[f]) >= 0 &&
			(u.record.path !== n[f].record.path || !Dd(u, n[f]));

		)
			f++;
		n.splice(f, 0, u), u.record.name && !rc(u) && o.set(u.record.name, u);
	}
	function c(u, f) {
		let h,
			m = {},
			g,
			y;
		if ('name' in u && u.name) {
			if (((h = o.get(u.name)), !h)) throw Ro(1, { location: u });
			(y = h.record.name),
				(m = Oe(
					lc(
						f.params,
						h.keys
							.filter(b => !b.optional)
							.concat(h.parent ? h.parent.keys.filter(b => b.optional) : [])
							.map(b => b.name),
					),
					u.params &&
						lc(
							u.params,
							h.keys.map(b => b.name),
						),
				)),
				(g = h.stringify(m));
		} else if (u.path != null)
			(g = u.path),
				(h = n.find(b => b.re.test(g))),
				h && ((m = h.parse(g)), (y = h.record.name));
		else {
			if (((h = f.name ? o.get(f.name) : n.find(b => b.re.test(f.path))), !h))
				throw Ro(1, { location: u, currentLocation: f });
			(y = h.record.name),
				(m = Oe({}, f.params, u.params)),
				(g = h.stringify(m));
		}
		const v = [];
		let w = h;
		for (; w; ) v.unshift(w.record), (w = w.parent);
		return { name: y, path: g, params: m, matched: v, meta: Nv(v) };
	}
	return (
		e.forEach(u => i(u)),
		{
			addRoute: i,
			resolve: c,
			removeRoute: l,
			getRoutes: s,
			getRecordMatcher: a,
		}
	);
}
function lc(e, t) {
	const n = {};
	for (const o of t) o in e && (n[o] = e[o]);
	return n;
}
function Lv(e) {
	return {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: void 0,
		beforeEnter: e.beforeEnter,
		props: Vv(e),
		children: e.children || [],
		instances: {},
		leaveGuards: new Set(),
		updateGuards: new Set(),
		enterCallbacks: {},
		components:
			'components' in e
				? e.components || null
				: e.component && { default: e.component },
	};
}
function Vv(e) {
	const t = {},
		n = e.props || !1;
	if ('component' in e) t.default = n;
	else for (const o in e.components) t[o] = typeof n == 'object' ? n[o] : n;
	return t;
}
function rc(e) {
	for (; e; ) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Nv(e) {
	return e.reduce((t, n) => Oe(t, n.meta), {});
}
function sc(e, t) {
	const n = {};
	for (const o in e) n[o] = o in t ? t[o] : e[o];
	return n;
}
function Dd(e, t) {
	return t.children.some(n => n === e || Dd(e, n));
}
function Fv(e) {
	const t = {};
	if (e === '' || e === '?') return t;
	const o = (e[0] === '?' ? e.slice(1) : e).split('&');
	for (let a = 0; a < o.length; ++a) {
		const i = o[a].replace(Ed, ' '),
			l = i.indexOf('='),
			s = wa(l < 0 ? i : i.slice(0, l)),
			r = l < 0 ? null : wa(i.slice(l + 1));
		if (s in t) {
			let c = t[s];
			Vt(c) || (c = t[s] = [c]), c.push(r);
		} else t[s] = r;
	}
	return t;
}
function cc(e) {
	let t = '';
	for (let n in e) {
		const o = e[n];
		if (((n = lv(n)), o == null)) {
			o !== void 0 && (t += (t.length ? '&' : '') + n);
			continue;
		}
		(Vt(o) ? o.map(i => i && Zl(i)) : [o && Zl(o)]).forEach(i => {
			i !== void 0 &&
				((t += (t.length ? '&' : '') + n), i != null && (t += '=' + i));
		});
	}
	return t;
}
function zv(e) {
	const t = {};
	for (const n in e) {
		const o = e[n];
		o !== void 0 &&
			(t[n] = Vt(o)
				? o.map(a => (a == null ? null : '' + a))
				: o == null
					? o
					: '' + o);
	}
	return t;
}
const Hv = Symbol(''),
	uc = Symbol(''),
	Fr = Symbol(''),
	Md = Symbol(''),
	Ql = Symbol('');
function Yo() {
	let e = [];
	function t(o) {
		return (
			e.push(o),
			() => {
				const a = e.indexOf(o);
				a > -1 && e.splice(a, 1);
			}
		);
	}
	function n() {
		e = [];
	}
	return { add: t, list: () => e.slice(), reset: n };
}
function On(e, t, n, o, a, i = l => l()) {
	const l = o && (o.enterCallbacks[a] = o.enterCallbacks[a] || []);
	return () =>
		new Promise((s, r) => {
			const c = h => {
					h === !1
						? r(Ro(4, { from: n, to: t }))
						: h instanceof Error
							? r(h)
							: kv(h)
								? r(Ro(2, { from: t, to: h }))
								: (l &&
										o.enterCallbacks[a] === l &&
										typeof h == 'function' &&
										l.push(h),
									s());
				},
				u = i(() => e.call(o && o.instances[a], t, n, c));
			let f = Promise.resolve(u);
			e.length < 3 && (f = f.then(c)), f.catch(h => r(h));
		});
}
function gl(e, t, n, o, a = i => i()) {
	const i = [];
	for (const l of e)
		for (const s in l.components) {
			let r = l.components[s];
			if (!(t !== 'beforeRouteEnter' && !l.instances[s]))
				if (jv(r)) {
					const u = (r.__vccOpts || r)[t];
					u && i.push(On(u, n, o, l, s, a));
				} else {
					let c = r();
					i.push(() =>
						c.then(u => {
							if (!u)
								return Promise.reject(
									new Error(`Couldn't resolve component "${s}" at "${l.path}"`),
								);
							const f = Gg(u) ? u.default : u;
							l.components[s] = f;
							const m = (f.__vccOpts || f)[t];
							return m && On(m, n, o, l, s, a)();
						}),
					);
				}
		}
	return i;
}
function jv(e) {
	return (
		typeof e == 'object' ||
		'displayName' in e ||
		'props' in e ||
		'__vccOpts' in e
	);
}
function dc(e) {
	const t = mt(Fr),
		n = mt(Md),
		o = L(() => {
			const r = Dt(e.to);
			return t.resolve(r);
		}),
		a = L(() => {
			const { matched: r } = o.value,
				{ length: c } = r,
				u = r[c - 1],
				f = n.matched;
			if (!u || !f.length) return -1;
			const h = f.findIndex(Ao.bind(null, u));
			if (h > -1) return h;
			const m = fc(r[c - 2]);
			return c > 1 && fc(u) === m && f[f.length - 1].path !== m
				? f.findIndex(Ao.bind(null, r[c - 2]))
				: h;
		}),
		i = L(() => a.value > -1 && Kv(n.params, o.value.params)),
		l = L(
			() =>
				a.value > -1 &&
				a.value === n.matched.length - 1 &&
				Ad(n.params, o.value.params),
		);
	function s(r = {}) {
		return Yv(r)
			? t[Dt(e.replace) ? 'replace' : 'push'](Dt(e.to)).catch(sa)
			: Promise.resolve();
	}
	return {
		route: o,
		href: L(() => o.value.href),
		isActive: i,
		isExactActive: l,
		navigate: s,
	};
}
const Wv = j({
		name: 'RouterLink',
		compatConfig: { MODE: 3 },
		props: {
			to: { type: [String, Object], required: !0 },
			replace: Boolean,
			activeClass: String,
			exactActiveClass: String,
			custom: Boolean,
			ariaCurrentValue: { type: String, default: 'page' },
		},
		useLink: dc,
		setup(e, { slots: t }) {
			const n = He(dc(e)),
				{ options: o } = mt(Fr),
				a = L(() => ({
					[hc(e.activeClass, o.linkActiveClass, 'router-link-active')]:
						n.isActive,
					[hc(
						e.exactActiveClass,
						o.linkExactActiveClass,
						'router-link-exact-active',
					)]: n.isExactActive,
				}));
			return () => {
				const i = t.default && t.default(n);
				return e.custom
					? i
					: Lr(
							'a',
							{
								'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
								href: n.href,
								onClick: n.navigate,
								class: a.value,
							},
							i,
						);
			};
		},
	}),
	Uv = Wv;
function Yv(e) {
	if (
		!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
		!e.defaultPrevented &&
		!(e.button !== void 0 && e.button !== 0)
	) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			const t = e.currentTarget.getAttribute('target');
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Kv(e, t) {
	for (const n in t) {
		const o = t[n],
			a = e[n];
		if (typeof o == 'string') {
			if (o !== a) return !1;
		} else if (!Vt(a) || a.length !== o.length || o.some((i, l) => i !== a[l]))
			return !1;
	}
	return !0;
}
function fc(e) {
	return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const hc = (e, t, n) => e ?? t ?? n,
	qv = j({
		name: 'RouterView',
		inheritAttrs: !1,
		props: { name: { type: String, default: 'default' }, route: Object },
		compatConfig: { MODE: 3 },
		setup(e, { attrs: t, slots: n }) {
			const o = mt(Ql),
				a = L(() => e.route || o.value),
				i = mt(uc, 0),
				l = L(() => {
					let c = Dt(i);
					const { matched: u } = a.value;
					let f;
					for (; (f = u[c]) && !f.components; ) c++;
					return c;
				}),
				s = L(() => a.value.matched[l.value]);
			cn(
				uc,
				L(() => l.value + 1),
			),
				cn(Hv, s),
				cn(Ql, a);
			const r = D();
			return (
				ee(
					() => [r.value, s.value, e.name],
					([c, u, f], [h, m, g]) => {
						u &&
							((u.instances[f] = c),
							m &&
								m !== u &&
								c &&
								c === h &&
								(u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
								u.updateGuards.size || (u.updateGuards = m.updateGuards))),
							c &&
								u &&
								(!m || !Ao(u, m) || !h) &&
								(u.enterCallbacks[f] || []).forEach(y => y(c));
					},
					{ flush: 'post' },
				),
				() => {
					const c = a.value,
						u = e.name,
						f = s.value,
						h = f && f.components[u];
					if (!h) return mc(n.default, { Component: h, route: c });
					const m = f.props[u],
						g = m
							? m === !0
								? c.params
								: typeof m == 'function'
									? m(c)
									: m
							: null,
						v = Lr(
							h,
							Oe({}, g, t, {
								onVnodeUnmounted: w => {
									w.component.isUnmounted && (f.instances[u] = null);
								},
								ref: r,
							}),
						);
					return mc(n.default, { Component: v, route: c }) || v;
				}
			);
		},
	});
function mc(e, t) {
	if (!e) return null;
	const n = e(t);
	return n.length === 1 ? n[0] : n;
}
const Gv = qv;
function Xv(e) {
	const t = Mv(e.routes, e),
		n = e.parseQuery || Fv,
		o = e.stringifyQuery || cc,
		a = e.history,
		i = Yo(),
		l = Yo(),
		s = Yo(),
		r = im(Cn);
	let c = Cn;
	To &&
		e.scrollBehavior &&
		'scrollRestoration' in history &&
		(history.scrollRestoration = 'manual');
	const u = hl.bind(null, E => '' + E),
		f = hl.bind(null, sv),
		h = hl.bind(null, wa);
	function m(E, H) {
		let N, Q;
		return (
			Od(E) ? ((N = t.getRecordMatcher(E)), (Q = H)) : (Q = E), t.addRoute(Q, N)
		);
	}
	function g(E) {
		const H = t.getRecordMatcher(E);
		H && t.removeRoute(H);
	}
	function y() {
		return t.getRoutes().map(E => E.record);
	}
	function v(E) {
		return !!t.getRecordMatcher(E);
	}
	function w(E, H) {
		if (((H = Oe({}, H || r.value)), typeof E == 'string')) {
			const P = ml(n, E, H.path),
				M = t.resolve({ path: P.path }, H),
				K = a.createHref(P.fullPath);
			return Oe(P, M, {
				params: h(M.params),
				hash: wa(P.hash),
				redirectedFrom: void 0,
				href: K,
			});
		}
		let N;
		if (E.path != null) N = Oe({}, E, { path: ml(n, E.path, H.path).path });
		else {
			const P = Oe({}, E.params);
			for (const M in P) P[M] == null && delete P[M];
			(N = Oe({}, E, { params: f(P) })), (H.params = f(H.params));
		}
		const Q = t.resolve(N, H),
			fe = E.hash || '';
		Q.params = u(h(Q.params));
		const xe = dv(o, Oe({}, E, { hash: iv(fe), path: Q.path })),
			_ = a.createHref(xe);
		return Oe(
			{ fullPath: xe, hash: fe, query: o === cc ? zv(E.query) : E.query || {} },
			Q,
			{ redirectedFrom: void 0, href: _ },
		);
	}
	function b(E) {
		return typeof E == 'string' ? ml(n, E, r.value.path) : Oe({}, E);
	}
	function C(E, H) {
		if (c !== E) return Ro(8, { from: H, to: E });
	}
	function p(E) {
		return R(E);
	}
	function x(E) {
		return p(Oe(b(E), { replace: !0 }));
	}
	function T(E) {
		const H = E.matched[E.matched.length - 1];
		if (H && H.redirect) {
			const { redirect: N } = H;
			let Q = typeof N == 'function' ? N(E) : N;
			return (
				typeof Q == 'string' &&
					((Q = Q.includes('?') || Q.includes('#') ? (Q = b(Q)) : { path: Q }),
					(Q.params = {})),
				Oe(
					{
						query: E.query,
						hash: E.hash,
						params: Q.path != null ? {} : E.params,
					},
					Q,
				)
			);
		}
	}
	function R(E, H) {
		const N = (c = w(E)),
			Q = r.value,
			fe = E.state,
			xe = E.force,
			_ = E.replace === !0,
			P = T(N);
		if (P)
			return R(
				Oe(b(P), {
					state: typeof P == 'object' ? Oe({}, fe, P.state) : fe,
					force: xe,
					replace: _,
				}),
				H || N,
			);
		const M = N;
		M.redirectedFrom = H;
		let K;
		return (
			!xe &&
				fv(o, Q, N) &&
				((K = Ro(16, { to: M, from: Q })), ne(Q, Q, !0, !1)),
			(K ? Promise.resolve(K) : I(M, Q))
				.catch(W => (tn(W) ? (tn(W, 2) ? W : ve(W)) : Y(W, M, Q)))
				.then(W => {
					if (W) {
						if (tn(W, 2))
							return R(
								Oe({ replace: _ }, b(W.to), {
									state: typeof W.to == 'object' ? Oe({}, fe, W.to.state) : fe,
									force: xe,
								}),
								H || M,
							);
					} else W = $(M, Q, !0, _, fe);
					return k(M, Q, W), W;
				})
		);
	}
	function S(E, H) {
		const N = C(E, H);
		return N ? Promise.reject(N) : Promise.resolve();
	}
	function A(E) {
		const H = De.values().next().value;
		return H && typeof H.runWithContext == 'function'
			? H.runWithContext(E)
			: E();
	}
	function I(E, H) {
		let N;
		const [Q, fe, xe] = Zv(E, H);
		N = gl(Q.reverse(), 'beforeRouteLeave', E, H);
		for (const P of Q)
			P.leaveGuards.forEach(M => {
				N.push(On(M, E, H));
			});
		const _ = S.bind(null, E, H);
		return (
			N.push(_),
			ue(N)
				.then(() => {
					N = [];
					for (const P of i.list()) N.push(On(P, E, H));
					return N.push(_), ue(N);
				})
				.then(() => {
					N = gl(fe, 'beforeRouteUpdate', E, H);
					for (const P of fe)
						P.updateGuards.forEach(M => {
							N.push(On(M, E, H));
						});
					return N.push(_), ue(N);
				})
				.then(() => {
					N = [];
					for (const P of xe)
						if (P.beforeEnter)
							if (Vt(P.beforeEnter))
								for (const M of P.beforeEnter) N.push(On(M, E, H));
							else N.push(On(P.beforeEnter, E, H));
					return N.push(_), ue(N);
				})
				.then(
					() => (
						E.matched.forEach(P => (P.enterCallbacks = {})),
						(N = gl(xe, 'beforeRouteEnter', E, H, A)),
						N.push(_),
						ue(N)
					),
				)
				.then(() => {
					N = [];
					for (const P of l.list()) N.push(On(P, E, H));
					return N.push(_), ue(N);
				})
				.catch(P => (tn(P, 8) ? P : Promise.reject(P)))
		);
	}
	function k(E, H, N) {
		s.list().forEach(Q => A(() => Q(E, H, N)));
	}
	function $(E, H, N, Q, fe) {
		const xe = C(E, H);
		if (xe) return xe;
		const _ = H === Cn,
			P = To ? history.state : {};
		N &&
			(Q || _
				? a.replace(E.fullPath, Oe({ scroll: _ && P && P.scroll }, fe))
				: a.push(E.fullPath, fe)),
			(r.value = E),
			ne(E, H, N, _),
			ve();
	}
	let B;
	function X() {
		B ||
			(B = a.listen((E, H, N) => {
				if (!re.listening) return;
				const Q = w(E),
					fe = T(Q);
				if (fe) {
					R(Oe(fe, { replace: !0 }), Q).catch(sa);
					return;
				}
				c = Q;
				const xe = r.value;
				To && wv(tc(xe.fullPath, N.delta), zi()),
					I(Q, xe)
						.catch(_ =>
							tn(_, 12)
								? _
								: tn(_, 2)
									? (R(_.to, Q)
											.then(P => {
												tn(P, 20) &&
													!N.delta &&
													N.type === xa.pop &&
													a.go(-1, !1);
											})
											.catch(sa),
										Promise.reject())
									: (N.delta && a.go(-N.delta, !1), Y(_, Q, xe)),
						)
						.then(_ => {
							(_ = _ || $(Q, xe, !1)),
								_ &&
									(N.delta && !tn(_, 8)
										? a.go(-N.delta, !1)
										: N.type === xa.pop && tn(_, 20) && a.go(-1, !1)),
								k(Q, xe, _);
						})
						.catch(sa);
			}));
	}
	let V = Yo(),
		O = Yo(),
		F;
	function Y(E, H, N) {
		ve(E);
		const Q = O.list();
		return (
			Q.length ? Q.forEach(fe => fe(E, H, N)) : console.error(E),
			Promise.reject(E)
		);
	}
	function me() {
		return F && r.value !== Cn
			? Promise.resolve()
			: new Promise((E, H) => {
					V.add([E, H]);
				});
	}
	function ve(E) {
		return (
			F ||
				((F = !E),
				X(),
				V.list().forEach(([H, N]) => (E ? N(E) : H())),
				V.reset()),
			E
		);
	}
	function ne(E, H, N, Q) {
		const { scrollBehavior: fe } = e;
		if (!To || !fe) return Promise.resolve();
		const xe =
			(!N && xv(tc(E.fullPath, 0))) ||
			((Q || !N) && history.state && history.state.scroll) ||
			null;
		return Te()
			.then(() => fe(E, H, xe))
			.then(_ => _ && pv(_))
			.catch(_ => Y(_, E, H));
	}
	const se = E => a.go(E);
	let be;
	const De = new Set(),
		re = {
			currentRoute: r,
			listening: !0,
			addRoute: m,
			removeRoute: g,
			hasRoute: v,
			getRoutes: y,
			resolve: w,
			options: e,
			push: p,
			replace: x,
			go: se,
			back: () => se(-1),
			forward: () => se(1),
			beforeEach: i.add,
			beforeResolve: l.add,
			afterEach: s.add,
			onError: O.add,
			isReady: me,
			install(E) {
				const H = this;
				E.component('RouterLink', Uv),
					E.component('RouterView', Gv),
					(E.config.globalProperties.$router = H),
					Object.defineProperty(E.config.globalProperties, '$route', {
						enumerable: !0,
						get: () => Dt(r),
					}),
					To &&
						!be &&
						r.value === Cn &&
						((be = !0), p(a.location).catch(fe => {}));
				const N = {};
				for (const fe in Cn)
					Object.defineProperty(N, fe, {
						get: () => r.value[fe],
						enumerable: !0,
					});
				E.provide(Fr, H), E.provide(Md, Nu(N)), E.provide(Ql, r);
				const Q = E.unmount;
				De.add(E),
					(E.unmount = function () {
						De.delete(E),
							De.size < 1 &&
								((c = Cn),
								B && B(),
								(B = null),
								(r.value = Cn),
								(be = !1),
								(F = !1)),
							Q();
					});
			},
		};
	function ue(E) {
		return E.reduce((H, N) => H.then(() => A(N)), Promise.resolve());
	}
	return re;
}
function Zv(e, t) {
	const n = [],
		o = [],
		a = [],
		i = Math.max(t.matched.length, e.matched.length);
	for (let l = 0; l < i; l++) {
		const s = t.matched[l];
		s && (e.matched.find(c => Ao(c, s)) ? o.push(s) : n.push(s));
		const r = e.matched[l];
		r && (t.matched.find(c => Ao(c, r)) || a.push(r));
	}
	return [n, o, a];
}
const Jv = 'modulepreload',
	Qv = function (e, t) {
		return new URL(e, t).href;
	},
	gc = {},
	eo = function (t, n, o) {
		let a = Promise.resolve();
		if (n && n.length > 0) {
			const i = document.getElementsByTagName('link'),
				l = document.querySelector('meta[property=csp-nonce]'),
				s =
					(l == null ? void 0 : l.nonce) ||
					(l == null ? void 0 : l.getAttribute('nonce'));
			a = Promise.all(
				n.map(r => {
					if (((r = Qv(r, o)), r in gc)) return;
					gc[r] = !0;
					const c = r.endsWith('.css'),
						u = c ? '[rel="stylesheet"]' : '';
					if (!!o)
						for (let m = i.length - 1; m >= 0; m--) {
							const g = i[m];
							if (g.href === r && (!c || g.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${r}"]${u}`)) return;
					const h = document.createElement('link');
					if (
						((h.rel = c ? 'stylesheet' : Jv),
						c || ((h.as = 'script'), (h.crossOrigin = '')),
						(h.href = r),
						s && h.setAttribute('nonce', s),
						document.head.appendChild(h),
						c)
					)
						return new Promise((m, g) => {
							h.addEventListener('load', m),
								h.addEventListener('error', () =>
									g(new Error(`Unable to preload CSS for ${r}`)),
								);
						});
				}),
			);
		}
		return a
			.then(() => t())
			.catch(i => {
				const l = new Event('vite:preloadError', { cancelable: !0 });
				if (((l.payload = i), window.dispatchEvent(l), !l.defaultPrevented))
					throw i;
			});
	},
	eb = [
		{
			path: '/',
			component: () =>
				eo(
					() => import('./index-8NCTIIVM.js'),
					__vite__mapDeps([0, 1]),
					import.meta.url,
				),
			redirect: '/acceptance/list',
			meta: { title: '登录' },
			children: [
				{
					path: '/acceptance/list',
					name: 'acceptanceList',
					component: () =>
						eo(
							() => import('./index-t5h1qsIC.js'),
							__vite__mapDeps([2, 3]),
							import.meta.url,
						),
				},
				{
					path: '/acceptance/create',
					name: 'acceptanceCreate',
					component: () =>
						eo(
							() => import('./create-CdxE8Dkq.js'),
							__vite__mapDeps([4, 5, 6]),
							import.meta.url,
						),
				},
				{
					path: '/acceptance/detail',
					name: 'acceptanceDetail',
					component: () =>
						eo(
							() => import('./detail-CDnpJ524.js'),
							__vite__mapDeps([7, 5, 8]),
							import.meta.url,
						),
				},
				{
					path: '/acceptance/esign',
					name: 'acceptanceEsign',
					component: () =>
						eo(() => import('./esign-B5V9y0Fs.js'), [], import.meta.url),
				},
			],
		},
	],
	tb = [
		{
			path: '/login',
			name: 'login',
			component: () =>
				eo(
					() => import('./index-BFePqYPr.js'),
					__vite__mapDeps([9, 10]),
					import.meta.url,
				),
			meta: { title: '登录' },
		},
	],
	nb = [
		{
			path: '/:path(.*)*',
			component: () =>
				eo(() => import('./404-CyCDOTK7.js'), [], import.meta.url),
		},
	],
	vc = {
		set(e, t) {
			window.sessionStorage.setItem(e, JSON.stringify(t));
		},
		get(e) {
			let t = window.sessionStorage.getItem(e);
			if (!t) return null;
			try {
				return JSON.parse(t);
			} catch {
				return null;
			}
		},
		remove(e) {
			window.sessionStorage.removeItem(e);
		},
		clear() {
			window.sessionStorage.clear();
		},
	};
var ob =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
			? window
			: typeof global < 'u'
				? global
				: typeof self < 'u'
					? self
					: {};
function ab(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Ld = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ (function (e, t) {
	(function (n, o) {
		e.exports = o();
	})(ob, function () {
		var n = {};
		n.version = '0.2.0';
		var o = (n.settings = {
			minimum: 0.08,
			easing: 'ease',
			positionUsing: '',
			speed: 200,
			trickle: !0,
			trickleRate: 0.02,
			trickleSpeed: 800,
			showSpinner: !0,
			barSelector: '[role="bar"]',
			spinnerSelector: '[role="spinner"]',
			parent: 'body',
			template:
				'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
		});
		(n.configure = function (g) {
			var y, v;
			for (y in g)
				(v = g[y]), v !== void 0 && g.hasOwnProperty(y) && (o[y] = v);
			return this;
		}),
			(n.status = null),
			(n.set = function (g) {
				var y = n.isStarted();
				(g = a(g, o.minimum, 1)), (n.status = g === 1 ? null : g);
				var v = n.render(!y),
					w = v.querySelector(o.barSelector),
					b = o.speed,
					C = o.easing;
				return (
					v.offsetWidth,
					s(function (p) {
						o.positionUsing === '' && (o.positionUsing = n.getPositioningCSS()),
							r(w, l(g, b, C)),
							g === 1
								? (r(v, { transition: 'none', opacity: 1 }),
									v.offsetWidth,
									setTimeout(function () {
										r(v, { transition: 'all ' + b + 'ms linear', opacity: 0 }),
											setTimeout(function () {
												n.remove(), p();
											}, b);
									}, b))
								: setTimeout(p, b);
					}),
					this
				);
			}),
			(n.isStarted = function () {
				return typeof n.status == 'number';
			}),
			(n.start = function () {
				n.status || n.set(0);
				var g = function () {
					setTimeout(function () {
						n.status && (n.trickle(), g());
					}, o.trickleSpeed);
				};
				return o.trickle && g(), this;
			}),
			(n.done = function (g) {
				return !g && !n.status ? this : n.inc(0.3 + 0.5 * Math.random()).set(1);
			}),
			(n.inc = function (g) {
				var y = n.status;
				return y
					? (typeof g != 'number' &&
							(g = (1 - y) * a(Math.random() * y, 0.1, 0.95)),
						(y = a(y + g, 0, 0.994)),
						n.set(y))
					: n.start();
			}),
			(n.trickle = function () {
				return n.inc(Math.random() * o.trickleRate);
			}),
			(function () {
				var g = 0,
					y = 0;
				n.promise = function (v) {
					return !v || v.state() === 'resolved'
						? this
						: (y === 0 && n.start(),
							g++,
							y++,
							v.always(function () {
								y--, y === 0 ? ((g = 0), n.done()) : n.set((g - y) / g);
							}),
							this);
				};
			})(),
			(n.render = function (g) {
				if (n.isRendered()) return document.getElementById('nprogress');
				u(document.documentElement, 'nprogress-busy');
				var y = document.createElement('div');
				(y.id = 'nprogress'), (y.innerHTML = o.template);
				var v = y.querySelector(o.barSelector),
					w = g ? '-100' : i(n.status || 0),
					b = document.querySelector(o.parent),
					C;
				return (
					r(v, {
						transition: 'all 0 linear',
						transform: 'translate3d(' + w + '%,0,0)',
					}),
					o.showSpinner ||
						((C = y.querySelector(o.spinnerSelector)), C && m(C)),
					b != document.body && u(b, 'nprogress-custom-parent'),
					b.appendChild(y),
					y
				);
			}),
			(n.remove = function () {
				f(document.documentElement, 'nprogress-busy'),
					f(document.querySelector(o.parent), 'nprogress-custom-parent');
				var g = document.getElementById('nprogress');
				g && m(g);
			}),
			(n.isRendered = function () {
				return !!document.getElementById('nprogress');
			}),
			(n.getPositioningCSS = function () {
				var g = document.body.style,
					y =
						'WebkitTransform' in g
							? 'Webkit'
							: 'MozTransform' in g
								? 'Moz'
								: 'msTransform' in g
									? 'ms'
									: 'OTransform' in g
										? 'O'
										: '';
				return y + 'Perspective' in g
					? 'translate3d'
					: y + 'Transform' in g
						? 'translate'
						: 'margin';
			});
		function a(g, y, v) {
			return g < y ? y : g > v ? v : g;
		}
		function i(g) {
			return (-1 + g) * 100;
		}
		function l(g, y, v) {
			var w;
			return (
				o.positionUsing === 'translate3d'
					? (w = { transform: 'translate3d(' + i(g) + '%,0,0)' })
					: o.positionUsing === 'translate'
						? (w = { transform: 'translate(' + i(g) + '%,0)' })
						: (w = { 'margin-left': i(g) + '%' }),
				(w.transition = 'all ' + y + 'ms ' + v),
				w
			);
		}
		var s = (function () {
				var g = [];
				function y() {
					var v = g.shift();
					v && v(y);
				}
				return function (v) {
					g.push(v), g.length == 1 && y();
				};
			})(),
			r = (function () {
				var g = ['Webkit', 'O', 'Moz', 'ms'],
					y = {};
				function v(p) {
					return p
						.replace(/^-ms-/, 'ms-')
						.replace(/-([\da-z])/gi, function (x, T) {
							return T.toUpperCase();
						});
				}
				function w(p) {
					var x = document.body.style;
					if (p in x) return p;
					for (
						var T = g.length, R = p.charAt(0).toUpperCase() + p.slice(1), S;
						T--;

					)
						if (((S = g[T] + R), S in x)) return S;
					return p;
				}
				function b(p) {
					return (p = v(p)), y[p] || (y[p] = w(p));
				}
				function C(p, x, T) {
					(x = b(x)), (p.style[x] = T);
				}
				return function (p, x) {
					var T = arguments,
						R,
						S;
					if (T.length == 2)
						for (R in x)
							(S = x[R]), S !== void 0 && x.hasOwnProperty(R) && C(p, R, S);
					else C(p, T[1], T[2]);
				};
			})();
		function c(g, y) {
			var v = typeof g == 'string' ? g : h(g);
			return v.indexOf(' ' + y + ' ') >= 0;
		}
		function u(g, y) {
			var v = h(g),
				w = v + y;
			c(v, y) || (g.className = w.substring(1));
		}
		function f(g, y) {
			var v = h(g),
				w;
			c(g, y) &&
				((w = v.replace(' ' + y + ' ', ' ')),
				(g.className = w.substring(1, w.length - 1)));
		}
		function h(g) {
			return (' ' + (g.className || '') + ' ').replace(/\s+/gi, ' ');
		}
		function m(g) {
			g && g.parentNode && g.parentNode.removeChild(g);
		}
		return n;
	});
})(Ld);
var ib = Ld.exports;
const Ko = ab(ib),
	Vd = Xv({ history: _v(), routes: [...tb, ...eb, ...nb] });
Vd.beforeEach(async (e, t, n) => {
	Ko.start();
	const o = vc.get('token');
	e.path === '/login' && !o
		? (n(), Ko.done())
		: o
			? o && e.path === '/login'
				? (n('/'), Ko.done())
				: (n(), Ko.done())
			: (n(`/login?redirect=${e.path}`), vc.clear(), Ko.done());
});
const lb = {
	props: {
		width: { type: Number, default: 800 },
		height: { type: Number, default: 300 },
		lineWidth: { type: Number, default: 4 },
		lineColor: { type: String, default: '#000000' },
		bgColor: { type: String, default: '' },
		isCrop: { type: Boolean, default: !1 },
		isClearBgColor: { type: Boolean, default: !0 },
		format: { type: String, default: 'image/png' },
		quality: { type: Number, default: 1 },
	},
	data() {
		return {
			hasDrew: !1,
			resultImg: '',
			points: [],
			canvasTxt: null,
			startX: 0,
			startY: 0,
			isDrawing: !1,
			sratio: 1,
		};
	},
	computed: {
		ratio() {
			return this.height / this.width;
		},
		stageInfo() {
			return this.$refs.canvas.getBoundingClientRect();
		},
		myBg() {
			return this.bgColor ? this.bgColor : 'rgba(255, 255, 255, 0)';
		},
	},
	watch: {
		myBg: function (e) {
			this.$refs.canvas.style.background = e;
		},
	},
	beforeMount() {
		window.addEventListener('resize', this.$_resizeHandler);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.$_resizeHandler);
	},
	mounted() {
		const e = this.$refs.canvas;
		(e.height = this.height),
			(e.width = this.width),
			(e.style.background = this.myBg),
			this.$_resizeHandler(),
			(document.onmouseup = () => {
				this.isDrawing = !1;
			});
	},
	methods: {
		$_resizeHandler() {
			const e = this.$refs.canvas;
			e.style.width = this.width + 'px';
			const t = parseFloat(window.getComputedStyle(e).width);
			(e.style.height = this.ratio * t + 'px'),
				(this.canvasTxt = e.getContext('2d')),
				this.canvasTxt.scale(1 * this.sratio, 1 * this.sratio),
				(this.sratio = t / this.width),
				this.canvasTxt.scale(1 / this.sratio, 1 / this.sratio);
		},
		mouseDown(e) {
			(e = e || event),
				e.preventDefault(),
				(this.isDrawing = !0),
				(this.hasDrew = !0);
			let t = { x: e.offsetX, y: e.offsetY };
			this.drawStart(t);
		},
		mouseMove(e) {
			if (((e = e || event), e.preventDefault(), this.isDrawing)) {
				let t = { x: e.offsetX, y: e.offsetY };
				this.drawMove(t);
			}
		},
		mouseUp(e) {
			(e = e || event), e.preventDefault();
			let t = { x: e.offsetX, y: e.offsetY };
			this.drawEnd(t), (this.isDrawing = !1);
		},
		touchStart(e) {
			if (
				((e = e || event),
				e.preventDefault(),
				(this.hasDrew = !0),
				e.touches.length === 1)
			) {
				let t = {
					x:
						e.targetTouches[0].clientX -
						this.$refs.canvas.getBoundingClientRect().left,
					y:
						e.targetTouches[0].clientY -
						this.$refs.canvas.getBoundingClientRect().top,
				};
				this.drawStart(t);
			}
		},
		touchMove(e) {
			if (((e = e || event), e.preventDefault(), e.touches.length === 1)) {
				let t = {
					x:
						e.targetTouches[0].clientX -
						this.$refs.canvas.getBoundingClientRect().left,
					y:
						e.targetTouches[0].clientY -
						this.$refs.canvas.getBoundingClientRect().top,
				};
				this.drawMove(t);
			}
		},
		touchEnd(e) {
			if (((e = e || event), e.preventDefault(), e.touches.length === 1)) {
				let t = {
					x:
						e.targetTouches[0].clientX -
						this.$refs.canvas.getBoundingClientRect().left,
					y:
						e.targetTouches[0].clientY -
						this.$refs.canvas.getBoundingClientRect().top,
				};
				this.drawEnd(t);
			}
		},
		drawStart(e) {
			(this.startX = e.x),
				(this.startY = e.y),
				this.canvasTxt.beginPath(),
				this.canvasTxt.moveTo(this.startX, this.startY),
				this.canvasTxt.lineTo(e.x, e.y),
				(this.canvasTxt.lineCap = 'round'),
				(this.canvasTxt.lineJoin = 'round'),
				(this.canvasTxt.lineWidth = this.lineWidth * this.sratio),
				this.canvasTxt.stroke(),
				this.canvasTxt.closePath(),
				this.points.push(e);
		},
		drawMove(e) {
			this.canvasTxt.beginPath(),
				this.canvasTxt.moveTo(this.startX, this.startY),
				this.canvasTxt.lineTo(e.x, e.y),
				(this.canvasTxt.strokeStyle = this.lineColor),
				(this.canvasTxt.lineWidth = this.lineWidth * this.sratio),
				(this.canvasTxt.lineCap = 'round'),
				(this.canvasTxt.lineJoin = 'round'),
				this.canvasTxt.stroke(),
				this.canvasTxt.closePath(),
				(this.startY = e.y),
				(this.startX = e.x),
				this.points.push(e);
		},
		drawEnd(e) {
			this.canvasTxt.beginPath(),
				this.canvasTxt.moveTo(this.startX, this.startY),
				this.canvasTxt.lineTo(e.x, e.y),
				(this.canvasTxt.lineCap = 'round'),
				(this.canvasTxt.lineJoin = 'round'),
				this.canvasTxt.stroke(),
				this.canvasTxt.closePath(),
				this.points.push(e),
				this.points.push({ x: -1, y: -1 });
		},
		generate(e) {
			let t = e && e.format ? e.format : this.format,
				n = e && e.quality ? e.quality : this.quality;
			return new Promise((a, i) => {
				if (!this.hasDrew) {
					i('Warning: Not Signned!');
					return;
				}
				var l = this.canvasTxt.getImageData(
					0,
					0,
					this.$refs.canvas.width,
					this.$refs.canvas.height,
				);
				(this.canvasTxt.globalCompositeOperation = 'destination-over'),
					(this.canvasTxt.fillStyle = this.myBg),
					this.canvasTxt.fillRect(
						0,
						0,
						this.$refs.canvas.width,
						this.$refs.canvas.height,
					),
					(this.resultImg = this.$refs.canvas.toDataURL(t, n));
				var s = this.resultImg;
				if (
					(this.canvasTxt.clearRect(
						0,
						0,
						this.$refs.canvas.width,
						this.$refs.canvas.height,
					),
					this.canvasTxt.putImageData(l, 0, 0),
					(this.canvasTxt.globalCompositeOperation = 'source-over'),
					this.isCrop)
				) {
					const c = this.getCropArea(l.data);
					var r = document.createElement('canvas');
					const u = r.getContext('2d');
					(r.width = c[2] - c[0]), (r.height = c[3] - c[1]);
					const f = this.canvasTxt.getImageData(...c);
					(u.globalCompositeOperation = 'destination-over'),
						u.putImageData(f, 0, 0),
						(u.fillStyle = this.myBg),
						u.fillRect(0, 0, r.width, r.height),
						(s = r.toDataURL(t, n)),
						(r = null);
				}
				a(s);
			});
		},
		reset() {
			this.canvasTxt.clearRect(
				0,
				0,
				this.$refs.canvas.width,
				this.$refs.canvas.height,
			),
				this.isClearBgColor &&
					(this.$emit('update:bgColor', ''),
					(this.$refs.canvas.style.background = 'rgba(255, 255, 255, 0)')),
				(this.points = []),
				(this.hasDrew = !1),
				(this.resultImg = '');
		},
		getCropArea(e) {
			for (
				var t = this.$refs.canvas.width,
					n = 0,
					o = this.$refs.canvas.height,
					a = 0,
					i = 0;
				i < this.$refs.canvas.width;
				i++
			)
				for (var l = 0; l < this.$refs.canvas.height; l++) {
					var s = (i + this.$refs.canvas.width * l) * 4;
					(e[s] > 0 || e[s + 1] > 0 || e[s + 2] || e[s + 3] > 0) &&
						((a = Math.max(l, a)),
						(n = Math.max(i, n)),
						(o = Math.min(l, o)),
						(t = Math.min(i, t)));
				}
			return t++, n++, o++, a++, [t, o, n, a];
		},
	},
};
function rb(e, t, n, o, a, i) {
	return (
		ba(),
		Gl(
			'canvas',
			{
				ref: 'canvas',
				onMousedown:
					t[0] || (t[0] = (...l) => i.mouseDown && i.mouseDown(...l)),
				onMousemove:
					t[1] || (t[1] = (...l) => i.mouseMove && i.mouseMove(...l)),
				onMouseup: t[2] || (t[2] = (...l) => i.mouseUp && i.mouseUp(...l)),
				onTouchstart:
					t[3] || (t[3] = (...l) => i.touchStart && i.touchStart(...l)),
				onTouchmove:
					t[4] || (t[4] = (...l) => i.touchMove && i.touchMove(...l)),
				onTouchend: t[5] || (t[5] = (...l) => i.touchEnd && i.touchEnd(...l)),
			},
			null,
			544,
		)
	);
}
const er = Vr(lb, [
	['render', rb],
	['__scopeId', 'data-v-1fcc7cb1'],
]);
er.install = function (e) {
	this.installed || ((this.installed = !0), e.component('vueEsign', er));
};
function tr() {}
const de = Object.assign,
	wt = typeof window < 'u',
	fn = e => e !== null && typeof e == 'object',
	$e = e => e != null,
	Oo = e => typeof e == 'function',
	zr = e => fn(e) && Oo(e.then) && Oo(e.catch),
	Sa = e =>
		Object.prototype.toString.call(e) === '[object Date]' &&
		!Number.isNaN(e.getTime());
function Nd(e) {
	return (
		(e = e.replace(/[^-|\d]/g, '')),
		/^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
	);
}
const Fd = e => typeof e == 'number' || /^\d+(\.\d+)?$/.test(e),
	sb = () =>
		wt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function bc(e, t) {
	const n = t.split('.');
	let o = e;
	return (
		n.forEach(a => {
			var i;
			o = fn(o) && (i = o[a]) != null ? i : '';
		}),
		o
	);
}
function Ie(e, t, n) {
	return t.reduce((o, a) => ((!n || e[a] !== void 0) && (o[a] = e[a]), o), {});
}
const Xt = (e, t) => JSON.stringify(e) === JSON.stringify(t),
	wi = e => (Array.isArray(e) ? e : [e]),
	cb = e => e.reduce((t, n) => t.concat(n), []),
	ze = null,
	q = [Number, String],
	z = { type: Boolean, default: !0 },
	Ye = e => ({ type: e, required: !0 }),
	Ne = () => ({ type: Array, default: () => [] }),
	Ke = e => ({ type: Number, default: e }),
	ie = e => ({ type: q, default: e }),
	Z = e => ({ type: String, default: e });
var Hn = typeof window < 'u';
function it(e) {
	return Hn ? requestAnimationFrame(e) : -1;
}
function Hi(e) {
	Hn && cancelAnimationFrame(e);
}
function Bn(e) {
	it(() => it(e));
}
var ub = e => e === window,
	yc = (e, t) => ({
		top: 0,
		left: 0,
		right: e,
		bottom: t,
		width: e,
		height: t,
	}),
	Ae = e => {
		const t = Dt(e);
		if (ub(t)) {
			const n = t.innerWidth,
				o = t.innerHeight;
			return yc(n, o);
		}
		return t != null && t.getBoundingClientRect
			? t.getBoundingClientRect()
			: yc(0, 0);
	};
function db(e = !1) {
	const t = D(e);
	return [
		t,
		(o = !t.value) => {
			t.value = o;
		},
	];
}
function ot(e) {
	const t = mt(e, null);
	if (t) {
		const n = Nt(),
			{ link: o, unlink: a, internalChildren: i } = t;
		o(n), Mo(() => a(n));
		const l = L(() => i.indexOf(n));
		return { parent: t, index: l };
	}
	return { parent: null, index: D(-1) };
}
function fb(e) {
	const t = [],
		n = o => {
			Array.isArray(o) &&
				o.forEach(a => {
					var i;
					vi(a) &&
						(t.push(a),
						(i = a.component) != null &&
							i.subTree &&
							(t.push(a.component.subTree), n(a.component.subTree.children)),
						a.children && n(a.children));
				});
		};
	return n(e), t;
}
var pc = (e, t) => {
	const n = e.indexOf(t);
	return n === -1
		? e.findIndex(
				o =>
					t.key !== void 0 &&
					t.key !== null &&
					o.type === t.type &&
					o.key === t.key,
			)
		: n;
};
function hb(e, t, n) {
	const o = fb(e.subTree.children);
	n.sort((i, l) => pc(o, i.vnode) - pc(o, l.vnode));
	const a = n.map(i => i.proxy);
	t.sort((i, l) => {
		const s = a.indexOf(i),
			r = a.indexOf(l);
		return s - r;
	});
}
function rt(e) {
	const t = He([]),
		n = He([]),
		o = Nt();
	return {
		children: t,
		linkChildren: i => {
			cn(
				e,
				Object.assign(
					{
						link: r => {
							r.proxy && (n.push(r), t.push(r.proxy), hb(o, t, n));
						},
						unlink: r => {
							const c = n.indexOf(r);
							t.splice(c, 1), n.splice(c, 1);
						},
						children: t,
						internalChildren: n,
					},
					i,
				),
			);
		},
	};
}
var nr = 1e3,
	or = 60 * nr,
	ar = 60 * or,
	wc = 24 * ar;
function mb(e) {
	const t = Math.floor(e / wc),
		n = Math.floor((e % wc) / ar),
		o = Math.floor((e % ar) / or),
		a = Math.floor((e % or) / nr),
		i = Math.floor(e % nr);
	return {
		total: e,
		days: t,
		hours: n,
		minutes: o,
		seconds: a,
		milliseconds: i,
	};
}
function gb(e, t) {
	return Math.floor(e / 1e3) === Math.floor(t / 1e3);
}
function vb(e) {
	let t, n, o, a;
	const i = D(e.time),
		l = L(() => mb(i.value)),
		s = () => {
			(o = !1), Hi(t);
		},
		r = () => Math.max(n - Date.now(), 0),
		c = y => {
			var v, w;
			(i.value = y),
				(v = e.onChange) == null || v.call(e, l.value),
				y === 0 && (s(), (w = e.onFinish) == null || w.call(e));
		},
		u = () => {
			t = it(() => {
				o && (c(r()), i.value > 0 && u());
			});
		},
		f = () => {
			t = it(() => {
				if (o) {
					const y = r();
					(!gb(y, i.value) || y === 0) && c(y), i.value > 0 && f();
				}
			});
		},
		h = () => {
			Hn && (e.millisecond ? u() : f());
		},
		m = () => {
			o || ((n = Date.now() + i.value), (o = !0), h());
		},
		g = (y = e.time) => {
			s(), (i.value = y);
		};
	return (
		en(s),
		Jt(() => {
			a && ((o = !0), (a = !1), h());
		}),
		Qt(() => {
			o && (s(), (a = !0));
		}),
		{ start: m, pause: s, reset: g, current: l }
	);
}
function No(e) {
	let t;
	Ue(() => {
		e(),
			Te(() => {
				t = !0;
			});
	}),
		Jt(() => {
			t && e();
		});
}
function We(e, t, n = {}) {
	if (!Hn) return;
	const { target: o = window, passive: a = !1, capture: i = !1 } = n;
	let l = !1,
		s;
	const r = f => {
			if (l) return;
			const h = Dt(f);
			h &&
				!s &&
				(h.addEventListener(e, t, { capture: i, passive: a }), (s = !0));
		},
		c = f => {
			if (l) return;
			const h = Dt(f);
			h && s && (h.removeEventListener(e, t, i), (s = !1));
		};
	Mo(() => c(o)), Qt(() => c(o)), No(() => r(o));
	let u;
	return (
		ft(o) &&
			(u = ee(o, (f, h) => {
				c(h), r(f);
			})),
		() => {
			u == null || u(), c(o), (l = !0);
		}
	);
}
function ji(e, t, n = {}) {
	if (!Hn) return;
	const { eventName: o = 'click' } = n;
	We(
		o,
		i => {
			(Array.isArray(e) ? e : [e]).every(r => {
				const c = Dt(r);
				return c && !c.contains(i.target);
			}) && t(i);
		},
		{ target: document },
	);
}
var Va, vl;
function bb() {
	if (!Va && ((Va = D(0)), (vl = D(0)), Hn)) {
		const e = () => {
			(Va.value = window.innerWidth), (vl.value = window.innerHeight);
		};
		e(),
			window.addEventListener('resize', e, { passive: !0 }),
			window.addEventListener('orientationchange', e, { passive: !0 });
	}
	return { width: Va, height: vl };
}
var yb = /scroll|auto|overlay/i,
	zd = Hn ? window : void 0;
function pb(e) {
	return e.tagName !== 'HTML' && e.tagName !== 'BODY' && e.nodeType === 1;
}
function Hr(e, t = zd) {
	let n = e;
	for (; n && n !== t && pb(n); ) {
		const { overflowY: o } = window.getComputedStyle(n);
		if (yb.test(o)) return n;
		n = n.parentNode;
	}
	return t;
}
function Fo(e, t = zd) {
	const n = D();
	return (
		Ue(() => {
			e.value && (n.value = Hr(e.value, t));
		}),
		n
	);
}
var Na;
function wb() {
	if (!Na && ((Na = D('visible')), Hn)) {
		const e = () => {
			Na.value = document.hidden ? 'hidden' : 'visible';
		};
		e(), window.addEventListener('visibilitychange', e);
	}
	return Na;
}
var Hd = Symbol('van-field');
function jn(e) {
	const t = mt(Hd, null);
	t &&
		!t.customValue.value &&
		((t.customValue.value = e),
		ee(e, () => {
			t.resetValidation(), t.validateWithTrigger('onChange');
		}));
}
function hn(e) {
	const t = 'scrollTop' in e ? e.scrollTop : e.pageYOffset;
	return Math.max(t, 0);
}
function xi(e, t) {
	'scrollTop' in e ? (e.scrollTop = t) : e.scrollTo(e.scrollX, t);
}
function $a() {
	return (
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop ||
		0
	);
}
function Wi(e) {
	xi(window, e), xi(document.body, e);
}
function xc(e, t) {
	if (e === window) return 0;
	const n = t ? hn(t) : $a();
	return Ae(e).top + n;
}
const xb = sb();
function jd() {
	xb && Wi($a());
}
const jr = e => e.stopPropagation();
function Me(e, t) {
	(typeof e.cancelable != 'boolean' || e.cancelable) && e.preventDefault(),
		t && jr(e);
}
function lo(e) {
	const t = Dt(e);
	if (!t) return !1;
	const n = window.getComputedStyle(t),
		o = n.display === 'none',
		a = t.offsetParent === null && n.position !== 'fixed';
	return o || a;
}
const { width: Mt, height: kt } = bb();
function Sb(e) {
	const t = window.getComputedStyle(e);
	return (
		t.transform !== 'none' ||
		t.perspective !== 'none' ||
		['transform', 'perspective', 'filter'].some(n =>
			(t.willChange || '').includes(n),
		)
	);
}
function Cb(e) {
	let t = e.parentElement;
	for (; t; ) {
		if (t && t.tagName !== 'HTML' && t.tagName !== 'BODY' && Sb(t)) return t;
		t = t.parentElement;
	}
	return null;
}
function we(e) {
	if ($e(e)) return Fd(e) ? `${e}px` : String(e);
}
function bn(e) {
	if ($e(e)) {
		if (Array.isArray(e)) return { width: we(e[0]), height: we(e[1]) };
		const t = we(e);
		return { width: t, height: t };
	}
}
function yn(e) {
	const t = {};
	return e !== void 0 && (t.zIndex = +e), t;
}
let bl;
function Tb() {
	if (!bl) {
		const e = document.documentElement,
			t = e.style.fontSize || window.getComputedStyle(e).fontSize;
		bl = parseFloat(t);
	}
	return bl;
}
function _b(e) {
	return (e = e.replace(/rem/g, '')), +e * Tb();
}
function kb(e) {
	return (e = e.replace(/vw/g, '')), (+e * Mt.value) / 100;
}
function Eb(e) {
	return (e = e.replace(/vh/g, '')), (+e * kt.value) / 100;
}
function Wr(e) {
	if (typeof e == 'number') return e;
	if (wt) {
		if (e.includes('rem')) return _b(e);
		if (e.includes('vw')) return kb(e);
		if (e.includes('vh')) return Eb(e);
	}
	return parseFloat(e);
}
const $b = /-(\w)/g,
	Wd = e => e.replace($b, (t, n) => n.toUpperCase()),
	Pb = e =>
		e
			.replace(/([A-Z])/g, '-$1')
			.toLowerCase()
			.replace(/^-/, '');
function Ot(e, t = 2) {
	let n = e + '';
	for (; n.length < t; ) n = '0' + n;
	return n;
}
const et = (e, t, n) => Math.min(Math.max(e, t), n);
function Sc(e, t, n) {
	const o = e.indexOf(t);
	return o === -1
		? e
		: t === '-' && o !== 0
			? e.slice(0, o)
			: e.slice(0, o + 1) + e.slice(o).replace(n, '');
}
function ir(e, t = !0, n = !0) {
	t ? (e = Sc(e, '.', /\./g)) : (e = e.split('.')[0]),
		n ? (e = Sc(e, '-', /-/g)) : (e = e.replace(/-/, ''));
	const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
	return e.replace(o, '');
}
function Ud(e, t) {
	return Math.round((e + t) * 1e10) / 1e10;
}
const { hasOwnProperty: Ib } = Object.prototype;
function Ab(e, t, n) {
	const o = t[n];
	$e(o) &&
		(!Ib.call(e, n) || !fn(o) ? (e[n] = o) : (e[n] = Yd(Object(e[n]), o)));
}
function Yd(e, t) {
	return (
		Object.keys(t).forEach(n => {
			Ab(e, t, n);
		}),
		e
	);
}
var Rb = {
	name: '姓名',
	tel: '电话',
	save: '保存',
	clear: '清空',
	cancel: '取消',
	confirm: '确认',
	delete: '删除',
	loading: '加载中...',
	noCoupon: '暂无优惠券',
	nameEmpty: '请填写姓名',
	addContact: '添加联系人',
	telInvalid: '请填写正确的电话',
	vanCalendar: {
		end: '结束',
		start: '开始',
		title: '日期选择',
		weekdays: ['日', '一', '二', '三', '四', '五', '六'],
		monthTitle: (e, t) => `${e}年${t}月`,
		rangePrompt: e => `最多选择 ${e} 天`,
	},
	vanCascader: { select: '请选择' },
	vanPagination: { prev: '上一页', next: '下一页' },
	vanPullRefresh: { pulling: '下拉即可刷新...', loosing: '释放即可刷新...' },
	vanSubmitBar: { label: '合计:' },
	vanCoupon: {
		unlimited: '无门槛',
		discount: e => `${e}折`,
		condition: e => `满${e}元可用`,
	},
	vanCouponCell: { title: '优惠券', count: e => `${e}张可用` },
	vanCouponList: {
		exchange: '兑换',
		close: '不使用',
		enable: '可用',
		disabled: '不可用',
		placeholder: '输入优惠码',
	},
	vanAddressEdit: {
		area: '地区',
		areaEmpty: '请选择地区',
		addressEmpty: '请填写详细地址',
		addressDetail: '详细地址',
		defaultAddress: '设为默认收货地址',
	},
	vanAddressList: { add: '新增地址' },
};
const Cc = D('zh-CN'),
	Tc = He({ 'zh-CN': Rb }),
	Kd = {
		messages() {
			return Tc[Cc.value];
		},
		use(e, t) {
			(Cc.value = e), this.add({ [e]: t });
		},
		add(e = {}) {
			Yd(Tc, e);
		},
	};
var Ob = Kd;
function Bb(e) {
	const t = Wd(e) + '.';
	return (n, ...o) => {
		const a = Ob.messages(),
			i = bc(a, t + n) || bc(a, n);
		return Oo(i) ? i(...o) : i;
	};
}
function lr(e, t) {
	return t
		? typeof t == 'string'
			? ` ${e}--${t}`
			: Array.isArray(t)
				? t.reduce((n, o) => n + lr(e, o), '')
				: Object.keys(t).reduce((n, o) => n + (t[o] ? lr(e, o) : ''), '')
		: '';
}
function Db(e) {
	return (t, n) => (
		t && typeof t != 'string' && ((n = t), (t = '')),
		(t = t ? `${e}__${t}` : e),
		`${t}${lr(t, n)}`
	);
}
function U(e) {
	const t = `van-${e}`;
	return [t, Db(t), Bb(t)];
}
const pn = 'van-hairline',
	qd = `${pn}--top`,
	Gd = `${pn}--left`,
	Mb = `${pn}--right`,
	Ur = `${pn}--bottom`,
	ua = `${pn}--surround`,
	Ui = `${pn}--top-bottom`,
	Lb = `${pn}-unset--top-bottom`,
	vt = 'van-haptics-feedback',
	Xd = Symbol('van-form'),
	Zd = 500,
	_c = 5;
function Wn(e, { args: t = [], done: n, canceled: o, error: a }) {
	if (e) {
		const i = e.apply(null, t);
		zr(i)
			? i
					.then(l => {
						l ? n() : o && o();
					})
					.catch(a || tr)
			: i
				? n()
				: o && o();
	} else n();
}
function G(e) {
	return (
		(e.install = t => {
			const { name: n } = e;
			n && (t.component(n, e), t.component(Wd(`-${n}`), e));
		}),
		e
	);
}
function Si(e, t) {
	return e.reduce((n, o) => (Math.abs(n - t) < Math.abs(o - t) ? n : o));
}
const Jd = Symbol();
function Yi(e) {
	const t = mt(Jd, null);
	t &&
		ee(t, n => {
			n && e();
		});
}
const Qd = (e, t) => {
	const n = D(),
		o = () => {
			n.value = Ae(e).height;
		};
	return (
		Ue(() => {
			if ((Te(o), t)) for (let a = 1; a <= 3; a++) setTimeout(o, 100 * a);
		}),
		Yi(() => Te(o)),
		ee([Mt, kt], o),
		n
	);
};
function Ki(e, t) {
	const n = Qd(e, !0);
	return o =>
		d(
			'div',
			{
				class: t('placeholder'),
				style: { height: n.value ? `${n.value}px` : void 0 },
			},
			[o()],
		);
}
const [ef, kc] = U('action-bar'),
	Yr = Symbol(ef),
	Vb = { placeholder: Boolean, safeAreaInsetBottom: z };
var Nb = j({
	name: ef,
	props: Vb,
	setup(e, { slots: t }) {
		const n = D(),
			o = Ki(n, kc),
			{ linkChildren: a } = rt(Yr);
		a();
		const i = () => {
			var l;
			return d(
				'div',
				{
					ref: n,
					class: [kc(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }],
				},
				[(l = t.default) == null ? void 0 : l.call(t)],
			);
		};
		return () => (e.placeholder ? o(i) : i());
	},
});
const tf = G(Nb);
function ke(e) {
	const t = Nt();
	t && de(t.proxy, e);
}
const Un = { to: [String, Object], url: String, replace: Boolean };
function nf({ to: e, url: t, replace: n, $router: o }) {
	e && o
		? o[n ? 'replace' : 'push'](e)
		: t && (n ? location.replace(t) : (location.href = t));
}
function so() {
	const e = Nt().proxy;
	return () => nf(e);
}
const [Fb, Ec] = U('badge'),
	zb = {
		dot: Boolean,
		max: q,
		tag: Z('div'),
		color: String,
		offset: Array,
		content: q,
		showZero: z,
		position: Z('top-right'),
	};
var Hb = j({
	name: Fb,
	props: zb,
	setup(e, { slots: t }) {
		const n = () => {
				if (t.content) return !0;
				const { content: s, showZero: r } = e;
				return $e(s) && s !== '' && (r || (s !== 0 && s !== '0'));
			},
			o = () => {
				const { dot: s, max: r, content: c } = e;
				if (!s && n())
					return t.content
						? t.content()
						: $e(r) && Fd(c) && +c > +r
							? `${r}+`
							: c;
			},
			a = s => (s.startsWith('-') ? s.replace('-', '') : `-${s}`),
			i = L(() => {
				const s = { background: e.color };
				if (e.offset) {
					const [r, c] = e.offset,
						{ position: u } = e,
						[f, h] = u.split('-');
					t.default
						? (typeof c == 'number'
								? (s[f] = we(f === 'top' ? c : -c))
								: (s[f] = f === 'top' ? we(c) : a(c)),
							typeof r == 'number'
								? (s[h] = we(h === 'left' ? r : -r))
								: (s[h] = h === 'left' ? we(r) : a(r)))
						: ((s.marginTop = we(c)), (s.marginLeft = we(r)));
				}
				return s;
			}),
			l = () => {
				if (n() || e.dot)
					return d(
						'div',
						{
							class: Ec([e.position, { dot: e.dot, fixed: !!t.default }]),
							style: i.value,
						},
						[o()],
					);
			};
		return () => {
			if (t.default) {
				const { tag: s } = e;
				return d(
					s,
					{ class: Ec('wrapper') },
					{ default: () => [t.default(), l()] },
				);
			}
			return l();
		};
	},
});
const co = G(Hb);
let of = 2e3;
const jb = () => ++of,
	Wb = e => {
		of = e;
	},
	[af, Ub] = U('config-provider'),
	lf = Symbol(af),
	Yb = {
		tag: Z('div'),
		theme: Z('light'),
		zIndex: Number,
		themeVars: Object,
		themeVarsDark: Object,
		themeVarsLight: Object,
		themeVarsScope: Z('local'),
		iconPrefix: String,
	};
function Kb(e) {
	return e.replace(/([a-zA-Z])(\d)/g, '$1-$2');
}
function qb(e) {
	const t = {};
	return (
		Object.keys(e).forEach(n => {
			const o = Kb(Pb(n));
			t[`--van-${o}`] = e[n];
		}),
		t
	);
}
function Fa(e = {}, t = {}) {
	Object.keys(e).forEach(n => {
		e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n]);
	}),
		Object.keys(t).forEach(n => {
			e[n] || document.documentElement.style.removeProperty(n);
		});
}
var Gb = j({
	name: af,
	props: Yb,
	setup(e, { slots: t }) {
		const n = L(() =>
			qb(
				de(
					{},
					e.themeVars,
					e.theme === 'dark' ? e.themeVarsDark : e.themeVarsLight,
				),
			),
		);
		if (wt) {
			const o = () => {
					document.documentElement.classList.add(`van-theme-${e.theme}`);
				},
				a = (i = e.theme) => {
					document.documentElement.classList.remove(`van-theme-${i}`);
				};
			ee(
				() => e.theme,
				(i, l) => {
					l && a(l), o();
				},
				{ immediate: !0 },
			),
				Jt(o),
				Qt(a),
				en(a),
				ee(n, (i, l) => {
					e.themeVarsScope === 'global' && Fa(i, l);
				}),
				ee(
					() => e.themeVarsScope,
					(i, l) => {
						l === 'global' && Fa({}, n.value),
							i === 'global' && Fa(n.value, {});
					},
				),
				e.themeVarsScope === 'global' && Fa(n.value, {});
		}
		return (
			cn(lf, e),
			Do(() => {
				e.zIndex !== void 0 && Wb(e.zIndex);
			}),
			() =>
				d(
					e.tag,
					{
						class: Ub(),
						style: e.themeVarsScope === 'local' ? n.value : void 0,
					},
					{
						default: () => {
							var o;
							return [(o = t.default) == null ? void 0 : o.call(t)];
						},
					},
				)
		);
	},
});
const [Xb, $c] = U('icon'),
	Zb = e => (e == null ? void 0 : e.includes('/')),
	Jb = {
		dot: Boolean,
		tag: Z('i'),
		name: String,
		size: q,
		badge: q,
		color: String,
		badgeProps: Object,
		classPrefix: String,
	};
var Qb = j({
	name: Xb,
	props: Jb,
	setup(e, { slots: t }) {
		const n = mt(lf, null),
			o = L(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || $c());
		return () => {
			const { tag: a, dot: i, name: l, size: s, badge: r, color: c } = e,
				u = Zb(l);
			return d(
				co,
				_e(
					{
						dot: i,
						tag: a,
						class: [o.value, u ? '' : `${o.value}-${l}`],
						style: { color: c, fontSize: we(s) },
						content: r,
					},
					e.badgeProps,
				),
				{
					default: () => {
						var f;
						return [
							(f = t.default) == null ? void 0 : f.call(t),
							u && d('img', { class: $c('image'), src: l }, null),
						];
					},
				},
			);
		};
	},
});
const Ce = G(Qb);
var ey = Ce;
const [ty, da] = U('loading'),
	ny = Array(12)
		.fill(null)
		.map((e, t) => d('i', { class: da('line', String(t + 1)) }, null)),
	oy = d('svg', { class: da('circular'), viewBox: '25 25 50 50' }, [
		d('circle', { cx: '50', cy: '50', r: '20', fill: 'none' }, null),
	]),
	ay = {
		size: q,
		type: Z('circular'),
		color: String,
		vertical: Boolean,
		textSize: q,
		textColor: String,
	};
var iy = j({
	name: ty,
	props: ay,
	setup(e, { slots: t }) {
		const n = L(() => de({ color: e.color }, bn(e.size))),
			o = () => {
				const i = e.type === 'spinner' ? ny : oy;
				return d('span', { class: da('spinner', e.type), style: n.value }, [
					t.icon ? t.icon() : i,
				]);
			},
			a = () => {
				var i;
				if (t.default)
					return d(
						'span',
						{
							class: da('text'),
							style: {
								fontSize: we(e.textSize),
								color: (i = e.textColor) != null ? i : e.color,
							},
						},
						[t.default()],
					);
			};
		return () => {
			const { type: i, vertical: l } = e;
			return d(
				'div',
				{
					class: da([i, { vertical: l }]),
					'aria-live': 'polite',
					'aria-busy': !0,
				},
				[o(), a()],
			);
		};
	},
});
const Ft = G(iy),
	[ly, fo] = U('button'),
	ry = de({}, Un, {
		tag: Z('button'),
		text: String,
		icon: String,
		type: Z('default'),
		size: Z('normal'),
		color: String,
		block: Boolean,
		plain: Boolean,
		round: Boolean,
		square: Boolean,
		loading: Boolean,
		hairline: Boolean,
		disabled: Boolean,
		iconPrefix: String,
		nativeType: Z('button'),
		loadingSize: q,
		loadingText: String,
		loadingType: String,
		iconPosition: Z('left'),
	});
var sy = j({
	name: ly,
	props: ry,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = so(),
			a = () =>
				n.loading
					? n.loading()
					: d(
							Ft,
							{
								size: e.loadingSize,
								type: e.loadingType,
								class: fo('loading'),
							},
							null,
						),
			i = () => {
				if (e.loading) return a();
				if (n.icon) return d('div', { class: fo('icon') }, [n.icon()]);
				if (e.icon)
					return d(
						Ce,
						{ name: e.icon, class: fo('icon'), classPrefix: e.iconPrefix },
						null,
					);
			},
			l = () => {
				let c;
				if (
					(e.loading
						? (c = e.loadingText)
						: (c = n.default ? n.default() : e.text),
					c)
				)
					return d('span', { class: fo('text') }, [c]);
			},
			s = () => {
				const { color: c, plain: u } = e;
				if (c) {
					const f = { color: u ? c : 'white' };
					return (
						u || (f.background = c),
						c.includes('gradient') ? (f.border = 0) : (f.borderColor = c),
						f
					);
				}
			},
			r = c => {
				e.loading ? Me(c) : e.disabled || (t('click', c), o());
			};
		return () => {
			const {
					tag: c,
					type: u,
					size: f,
					block: h,
					round: m,
					plain: g,
					square: y,
					loading: v,
					disabled: w,
					hairline: b,
					nativeType: C,
					iconPosition: p,
				} = e,
				x = [
					fo([
						u,
						f,
						{
							plain: g,
							block: h,
							round: m,
							square: y,
							loading: v,
							disabled: w,
							hairline: b,
						},
					]),
					{ [ua]: b },
				];
			return d(
				c,
				{ type: C, class: x, style: s(), disabled: w, onClick: r },
				{
					default: () => [
						d('div', { class: fo('content') }, [
							p === 'left' && i(),
							l(),
							p === 'right' && i(),
						]),
					],
				},
			);
		};
	},
});
const lt = G(sy),
	[cy, uy] = U('action-bar-button'),
	dy = de({}, Un, {
		type: String,
		text: String,
		icon: String,
		color: String,
		loading: Boolean,
		disabled: Boolean,
	});
var fy = j({
	name: cy,
	props: dy,
	setup(e, { slots: t }) {
		const n = so(),
			{ parent: o, index: a } = ot(Yr),
			i = L(() => {
				if (o) {
					const s = o.children[a.value - 1];
					return !(s && 'isButton' in s);
				}
			}),
			l = L(() => {
				if (o) {
					const s = o.children[a.value + 1];
					return !(s && 'isButton' in s);
				}
			});
		return (
			ke({ isButton: !0 }),
			() => {
				const {
					type: s,
					icon: r,
					text: c,
					color: u,
					loading: f,
					disabled: h,
				} = e;
				return d(
					lt,
					{
						class: uy([s, { last: l.value, first: i.value }]),
						size: 'large',
						type: s,
						icon: r,
						color: u,
						loading: f,
						disabled: h,
						onClick: n,
					},
					{ default: () => [t.default ? t.default() : c] },
				);
			}
		);
	},
});
const rr = G(fy),
	[hy, yl] = U('action-bar-icon'),
	my = de({}, Un, {
		dot: Boolean,
		text: String,
		icon: String,
		color: String,
		badge: q,
		iconClass: ze,
		badgeProps: Object,
		iconPrefix: String,
	});
var gy = j({
	name: hy,
	props: my,
	setup(e, { slots: t }) {
		const n = so();
		ot(Yr);
		const o = () => {
			const {
				dot: a,
				badge: i,
				icon: l,
				color: s,
				iconClass: r,
				badgeProps: c,
				iconPrefix: u,
			} = e;
			return t.icon
				? d(co, _e({ dot: a, class: yl('icon'), content: i }, c), {
						default: t.icon,
					})
				: d(
						Ce,
						{
							tag: 'div',
							dot: a,
							name: l,
							badge: i,
							color: s,
							class: [yl('icon'), r],
							badgeProps: c,
							classPrefix: u,
						},
						null,
					);
		};
		return () =>
			d('div', { role: 'button', class: yl(), tabindex: 0, onClick: n }, [
				o(),
				t.default ? t.default() : e.text,
			]);
	},
});
const vy = G(gy),
	zo = {
		show: Boolean,
		zIndex: q,
		overlay: z,
		duration: q,
		teleport: [String, Object],
		lockScroll: z,
		lazyRender: z,
		beforeClose: Function,
		overlayStyle: Object,
		overlayClass: ze,
		transitionAppear: Boolean,
		closeOnClickOverlay: z,
	},
	Kr = Object.keys(zo);
function by(e, t) {
	return e > t ? 'horizontal' : t > e ? 'vertical' : '';
}
function Et() {
	const e = D(0),
		t = D(0),
		n = D(0),
		o = D(0),
		a = D(0),
		i = D(0),
		l = D(''),
		s = D(!0),
		r = () => l.value === 'vertical',
		c = () => l.value === 'horizontal',
		u = () => {
			(n.value = 0),
				(o.value = 0),
				(a.value = 0),
				(i.value = 0),
				(l.value = ''),
				(s.value = !0);
		};
	return {
		move: m => {
			const g = m.touches[0];
			(n.value = (g.clientX < 0 ? 0 : g.clientX) - e.value),
				(o.value = g.clientY - t.value),
				(a.value = Math.abs(n.value)),
				(i.value = Math.abs(o.value));
			const y = 10;
			(!l.value || (a.value < y && i.value < y)) &&
				(l.value = by(a.value, i.value)),
				s.value && (a.value > _c || i.value > _c) && (s.value = !1);
		},
		start: m => {
			u(), (e.value = m.touches[0].clientX), (t.value = m.touches[0].clientY);
		},
		reset: u,
		startX: e,
		startY: t,
		deltaX: n,
		deltaY: o,
		offsetX: a,
		offsetY: i,
		direction: l,
		isVertical: r,
		isHorizontal: c,
		isTap: s,
	};
}
let qo = 0;
const Pc = 'van-overflow-hidden';
function rf(e, t) {
	const n = Et(),
		o = '01',
		a = '10',
		i = u => {
			n.move(u);
			const f = n.deltaY.value > 0 ? a : o,
				h = Hr(u.target, e.value),
				{ scrollHeight: m, offsetHeight: g, scrollTop: y } = h;
			let v = '11';
			y === 0 ? (v = g >= m ? '00' : '01') : y + g >= m && (v = '10'),
				v !== '11' &&
					n.isVertical() &&
					!(parseInt(v, 2) & parseInt(f, 2)) &&
					Me(u, !0);
		},
		l = () => {
			document.addEventListener('touchstart', n.start),
				document.addEventListener('touchmove', i, { passive: !1 }),
				qo || document.body.classList.add(Pc),
				qo++;
		},
		s = () => {
			qo &&
				(document.removeEventListener('touchstart', n.start),
				document.removeEventListener('touchmove', i),
				qo--,
				qo || document.body.classList.remove(Pc));
		},
		r = () => t() && l(),
		c = () => t() && s();
	No(r),
		Qt(c),
		en(c),
		ee(t, u => {
			u ? l() : s();
		});
}
function qr(e) {
	const t = D(!1);
	return (
		ee(
			e,
			n => {
				n && (t.value = n);
			},
			{ immediate: !0 },
		),
		n => () => (t.value ? n() : null)
	);
}
const Ci = () => {
		var e;
		const { scopeId: t } = ((e = Nt()) == null ? void 0 : e.vnode) || {};
		return t ? { [t]: '' } : null;
	},
	[yy, py] = U('overlay'),
	wy = {
		show: Boolean,
		zIndex: q,
		duration: q,
		className: ze,
		lockScroll: z,
		lazyRender: z,
		customStyle: Object,
	};
var xy = j({
	name: yy,
	props: wy,
	setup(e, { slots: t }) {
		const n = D(),
			o = qr(() => e.show || !e.lazyRender),
			a = l => {
				e.lockScroll && Me(l, !0);
			},
			i = o(() => {
				var l;
				const s = de(yn(e.zIndex), e.customStyle);
				return (
					$e(e.duration) && (s.animationDuration = `${e.duration}s`),
					Qe(
						d('div', { ref: n, style: s, class: [py(), e.className] }, [
							(l = t.default) == null ? void 0 : l.call(t),
						]),
						[[nt, e.show]],
					)
				);
			});
		return (
			We('touchmove', a, { target: n }),
			() => d(Vo, { name: 'van-fade', appear: !0 }, { default: i })
		);
	},
});
const sf = G(xy),
	Sy = de({}, zo, {
		round: Boolean,
		position: Z('center'),
		closeIcon: Z('cross'),
		closeable: Boolean,
		transition: String,
		iconPrefix: String,
		closeOnPopstate: Boolean,
		closeIconPosition: Z('top-right'),
		safeAreaInsetTop: Boolean,
		safeAreaInsetBottom: Boolean,
	}),
	[Cy, Ic] = U('popup');
var Ty = j({
	name: Cy,
	inheritAttrs: !1,
	props: Sy,
	emits: [
		'open',
		'close',
		'opened',
		'closed',
		'keydown',
		'update:show',
		'clickOverlay',
		'clickCloseIcon',
	],
	setup(e, { emit: t, attrs: n, slots: o }) {
		let a, i;
		const l = D(),
			s = D(),
			r = qr(() => e.show || !e.lazyRender),
			c = L(() => {
				const T = { zIndex: l.value };
				if ($e(e.duration)) {
					const R =
						e.position === 'center'
							? 'animationDuration'
							: 'transitionDuration';
					T[R] = `${e.duration}s`;
				}
				return T;
			}),
			u = () => {
				a ||
					((a = !0),
					(l.value = e.zIndex !== void 0 ? +e.zIndex : jb()),
					t('open'));
			},
			f = () => {
				a &&
					Wn(e.beforeClose, {
						done() {
							(a = !1), t('close'), t('update:show', !1);
						},
					});
			},
			h = T => {
				t('clickOverlay', T), e.closeOnClickOverlay && f();
			},
			m = () => {
				if (e.overlay)
					return d(
						sf,
						_e(
							{
								show: e.show,
								class: e.overlayClass,
								zIndex: l.value,
								duration: e.duration,
								customStyle: e.overlayStyle,
								role: e.closeOnClickOverlay ? 'button' : void 0,
								tabindex: e.closeOnClickOverlay ? 0 : void 0,
							},
							Ci(),
							{ onClick: h },
						),
						{ default: o['overlay-content'] },
					);
			},
			g = T => {
				t('clickCloseIcon', T), f();
			},
			y = () => {
				if (e.closeable)
					return d(
						Ce,
						{
							role: 'button',
							tabindex: 0,
							name: e.closeIcon,
							class: [Ic('close-icon', e.closeIconPosition), vt],
							classPrefix: e.iconPrefix,
							onClick: g,
						},
						null,
					);
			};
		let v;
		const w = () => {
				v && clearTimeout(v),
					(v = setTimeout(() => {
						t('opened');
					}));
			},
			b = () => t('closed'),
			C = T => t('keydown', T),
			p = r(() => {
				var T;
				const {
					round: R,
					position: S,
					safeAreaInsetTop: A,
					safeAreaInsetBottom: I,
				} = e;
				return Qe(
					d(
						'div',
						_e(
							{
								ref: s,
								style: c.value,
								role: 'dialog',
								tabindex: 0,
								class: [
									Ic({ round: R, [S]: S }),
									{ 'van-safe-area-top': A, 'van-safe-area-bottom': I },
								],
								onKeydown: C,
							},
							n,
							Ci(),
						),
						[(T = o.default) == null ? void 0 : T.call(o), y()],
					),
					[[nt, e.show]],
				);
			}),
			x = () => {
				const { position: T, transition: R, transitionAppear: S } = e,
					A = T === 'center' ? 'van-fade' : `van-popup-slide-${T}`;
				return d(
					Vo,
					{ name: R || A, appear: S, onAfterEnter: w, onAfterLeave: b },
					{ default: p },
				);
			};
		return (
			ee(
				() => e.show,
				T => {
					T &&
						!a &&
						(u(),
						n.tabindex === 0 &&
							Te(() => {
								var R;
								(R = s.value) == null || R.focus();
							})),
						!T && a && ((a = !1), t('close'));
				},
			),
			ke({ popupRef: s }),
			rf(s, () => e.show && e.lockScroll),
			We('popstate', () => {
				e.closeOnPopstate && (f(), (i = !1));
			}),
			Ue(() => {
				e.show && u();
			}),
			Jt(() => {
				i && (t('update:show', !0), (i = !1));
			}),
			Qt(() => {
				e.show && e.teleport && (f(), (i = !0));
			}),
			cn(Jd, () => e.show),
			() =>
				e.teleport
					? d(Lo, { to: e.teleport }, { default: () => [m(), x()] })
					: d(Je, null, [m(), x()])
		);
	},
});
const zt = G(Ty),
	[_y, St] = U('action-sheet'),
	ky = de({}, zo, {
		title: String,
		round: z,
		actions: Ne(),
		closeIcon: Z('cross'),
		closeable: z,
		cancelText: String,
		description: String,
		closeOnPopstate: z,
		closeOnClickAction: Boolean,
		safeAreaInsetBottom: z,
	}),
	Ey = [...Kr, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'];
var $y = j({
	name: _y,
	props: ky,
	emits: ['select', 'cancel', 'update:show'],
	setup(e, { slots: t, emit: n }) {
		const o = f => n('update:show', f),
			a = () => {
				o(!1), n('cancel');
			},
			i = () => {
				if (e.title)
					return d('div', { class: St('header') }, [
						e.title,
						e.closeable &&
							d(
								Ce,
								{ name: e.closeIcon, class: [St('close'), vt], onClick: a },
								null,
							),
					]);
			},
			l = () => {
				if (t.cancel || e.cancelText)
					return [
						d('div', { class: St('gap') }, null),
						d('button', { type: 'button', class: St('cancel'), onClick: a }, [
							t.cancel ? t.cancel() : e.cancelText,
						]),
					];
			},
			s = f => {
				if (f.icon)
					return d(Ce, { class: St('item-icon'), name: f.icon }, null);
			},
			r = (f, h) =>
				f.loading
					? d(Ft, { class: St('loading-icon') }, null)
					: t.action
						? t.action({ action: f, index: h })
						: [
								d('span', { class: St('name') }, [f.name]),
								f.subname && d('div', { class: St('subname') }, [f.subname]),
							],
			c = (f, h) => {
				const {
						color: m,
						loading: g,
						callback: y,
						disabled: v,
						className: w,
					} = f,
					b = () => {
						v ||
							g ||
							(y && y(f),
							e.closeOnClickAction && o(!1),
							Te(() => n('select', f, h)));
					};
				return d(
					'button',
					{
						type: 'button',
						style: { color: m },
						class: [St('item', { loading: g, disabled: v }), w],
						onClick: b,
					},
					[s(f), r(f, h)],
				);
			},
			u = () => {
				if (e.description || t.description) {
					const f = t.description ? t.description() : e.description;
					return d('div', { class: St('description') }, [f]);
				}
			};
		return () =>
			d(
				zt,
				_e({ class: St(), position: 'bottom', 'onUpdate:show': o }, Ie(e, Ey)),
				{
					default: () => {
						var f;
						return [
							i(),
							u(),
							d('div', { class: St('content') }, [
								e.actions.map(c),
								(f = t.default) == null ? void 0 : f.call(t),
							]),
							l(),
						];
					},
				},
			);
	},
});
const Py = G($y),
	[Iy, rn, Ac] = U('picker'),
	cf = e => e.find(t => !t.disabled) || e[0];
function Ay(e, t) {
	const n = e[0];
	if (n) {
		if (Array.isArray(n)) return 'multiple';
		if (t.children in n) return 'cascade';
	}
	return 'default';
}
function si(e, t) {
	t = et(t, 0, e.length);
	for (let n = t; n < e.length; n++) if (!e[n].disabled) return n;
	for (let n = t - 1; n >= 0; n--) if (!e[n].disabled) return n;
	return 0;
}
const Rc = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);
function sr(e, t, n) {
	const o = e.findIndex(i => i[n.value] === t),
		a = si(e, o);
	return e[a];
}
function Ry(e, t, n) {
	const o = [];
	let a = { [t.children]: e },
		i = 0;
	for (; a && a[t.children]; ) {
		const l = a[t.children],
			s = n.value[i];
		if (((a = $e(s) ? sr(l, s, t) : void 0), !a && l.length)) {
			const r = cf(l)[t.value];
			a = sr(l, r, t);
		}
		i++, o.push(l);
	}
	return o;
}
function Oy(e) {
	const { transform: t } = window.getComputedStyle(e),
		n = t.slice(7, t.length - 1).split(', ')[5];
	return Number(n);
}
function By(e) {
	return de({ text: 'text', value: 'value', children: 'children' }, e);
}
const Oc = 200,
	Bc = 300,
	Dy = 15,
	[uf, pl] = U('picker-column'),
	df = Symbol(uf);
var My = j({
	name: uf,
	props: {
		value: q,
		fields: Ye(Object),
		options: Ne(),
		readonly: Boolean,
		allowHtml: Boolean,
		optionHeight: Ye(Number),
		swipeDuration: Ye(q),
		visibleOptionNum: Ye(q),
	},
	emits: ['change', 'clickOption', 'scrollInto'],
	setup(e, { emit: t, slots: n }) {
		let o, a, i, l, s;
		const r = D(),
			c = D(),
			u = D(0),
			f = D(0),
			h = Et(),
			m = () => e.options.length,
			g = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
			y = I => {
				let k = si(e.options, I);
				const $ = -k * e.optionHeight,
					B = () => {
						k > m() - 1 && (k = si(e.options, I));
						const X = e.options[k][e.fields.value];
						X !== e.value && t('change', X);
					};
				o && $ !== u.value ? (s = B) : B(), (u.value = $);
			},
			v = () => e.readonly || !e.options.length,
			w = I => {
				o ||
					v() ||
					((s = null), (f.value = Oc), y(I), t('clickOption', e.options[I]));
			},
			b = I => et(Math.round(-I / e.optionHeight), 0, m() - 1),
			C = L(() => b(u.value)),
			p = (I, k) => {
				const $ = Math.abs(I / k);
				I = u.value + ($ / 0.003) * (I < 0 ? -1 : 1);
				const B = b(I);
				(f.value = +e.swipeDuration), y(B);
			},
			x = () => {
				(o = !1), (f.value = 0), s && (s(), (s = null));
			},
			T = I => {
				if (!v()) {
					if ((h.start(I), o)) {
						const k = Oy(c.value);
						u.value = Math.min(0, k - g());
					}
					(f.value = 0), (a = u.value), (i = Date.now()), (l = a), (s = null);
				}
			},
			R = I => {
				if (v()) return;
				h.move(I), h.isVertical() && ((o = !0), Me(I, !0));
				const k = et(
						a + h.deltaY.value,
						-(m() * e.optionHeight),
						e.optionHeight,
					),
					$ = b(k);
				$ !== C.value && t('scrollInto', e.options[$]), (u.value = k);
				const B = Date.now();
				B - i > Bc && ((i = B), (l = k));
			},
			S = () => {
				if (v()) return;
				const I = u.value - l,
					k = Date.now() - i;
				if (k < Bc && Math.abs(I) > Dy) {
					p(I, k);
					return;
				}
				const B = b(u.value);
				(f.value = Oc),
					y(B),
					setTimeout(() => {
						o = !1;
					}, 0);
			},
			A = () => {
				const I = { height: `${e.optionHeight}px` };
				return e.options.map((k, $) => {
					const B = k[e.fields.text],
						{ disabled: X } = k,
						V = k[e.fields.value],
						O = {
							role: 'button',
							style: I,
							tabindex: X ? -1 : 0,
							class: [
								pl('item', { disabled: X, selected: V === e.value }),
								k.className,
							],
							onClick: () => w($),
						},
						F = {
							class: 'van-ellipsis',
							[e.allowHtml ? 'innerHTML' : 'textContent']: B,
						};
					return d('li', O, [n.option ? n.option(k, $) : d('div', F, null)]);
				});
			};
		return (
			ot(df),
			ke({ stopMomentum: x }),
			Do(() => {
				const I = o
						? Math.floor(-u.value / e.optionHeight)
						: e.options.findIndex(B => B[e.fields.value] === e.value),
					k = si(e.options, I),
					$ = -k * e.optionHeight;
				o && k < I && x(), (u.value = $);
			}),
			We('touchmove', R, { target: r }),
			() =>
				d(
					'div',
					{
						ref: r,
						class: pl(),
						onTouchstartPassive: T,
						onTouchend: S,
						onTouchcancel: S,
					},
					[
						d(
							'ul',
							{
								ref: c,
								style: {
									transform: `translate3d(0, ${u.value + g()}px, 0)`,
									transitionDuration: `${f.value}ms`,
									transitionProperty: f.value ? 'all' : 'none',
								},
								class: pl('wrapper'),
								onTransitionend: x,
							},
							[A()],
						),
					],
				)
		);
	},
});
const [Ly] = U('picker-toolbar'),
	qi = { title: String, cancelButtonText: String, confirmButtonText: String },
	ff = ['cancel', 'confirm', 'title', 'toolbar'],
	Vy = Object.keys(qi);
var hf = j({
	name: Ly,
	props: qi,
	emits: ['confirm', 'cancel'],
	setup(e, { emit: t, slots: n }) {
		const o = () => {
				if (n.title) return n.title();
				if (e.title)
					return d('div', { class: [rn('title'), 'van-ellipsis'] }, [e.title]);
			},
			a = () => t('cancel'),
			i = () => t('confirm'),
			l = () => {
				var r;
				const c = (r = e.cancelButtonText) != null ? r : Ac('cancel');
				if (!(!n.cancel && !c))
					return d(
						'button',
						{ type: 'button', class: [rn('cancel'), vt], onClick: a },
						[n.cancel ? n.cancel() : c],
					);
			},
			s = () => {
				var r;
				const c = (r = e.confirmButtonText) != null ? r : Ac('confirm');
				if (!(!n.confirm && !c))
					return d(
						'button',
						{ type: 'button', class: [rn('confirm'), vt], onClick: i },
						[n.confirm ? n.confirm() : c],
					);
			};
		return () =>
			d('div', { class: rn('toolbar') }, [
				n.toolbar ? n.toolbar() : [l(), o(), s()],
			]);
	},
});
const Gr = (e, t) => {
	const n = D(e());
	return (
		ee(e, o => {
			o !== n.value && (n.value = o);
		}),
		ee(n, o => {
			o !== e() && t(o);
		}),
		n
	);
};
function Ny(e, t, n) {
	let o,
		a = 0;
	const i = e.scrollLeft,
		l = n === 0 ? 1 : Math.round((n * 1e3) / 16);
	function s() {
		Hi(o);
	}
	function r() {
		(e.scrollLeft += (t - i) / l), ++a < l && (o = it(r));
	}
	return r(), s;
}
function Fy(e, t, n, o) {
	let a,
		i = hn(e);
	const l = i < t,
		s = n === 0 ? 1 : Math.round((n * 1e3) / 16),
		r = (t - i) / s;
	function c() {
		Hi(a);
	}
	function u() {
		(i += r),
			((l && i > t) || (!l && i < t)) && (i = t),
			xi(e, i),
			(l && i < t) || (!l && i > t) ? (a = it(u)) : o && (a = it(o));
	}
	return u(), c;
}
let zy = 0;
function Ho() {
	const e = Nt(),
		{ name: t = 'unknown' } = (e == null ? void 0 : e.type) || {};
	return `${t}-${++zy}`;
}
function Pa() {
	const e = D([]),
		t = [];
	return (
		ad(() => {
			e.value = [];
		}),
		[
			e,
			o => (
				t[o] ||
					(t[o] = a => {
						e.value[o] = a;
					}),
				t[o]
			),
		]
	);
}
function mf(e, t) {
	if (!wt || !window.IntersectionObserver) return;
	const n = new IntersectionObserver(
			i => {
				t(i[0].intersectionRatio > 0);
			},
			{ root: document.body },
		),
		o = () => {
			e.value && n.observe(e.value);
		},
		a = () => {
			e.value && n.unobserve(e.value);
		};
	Qt(a), en(a), No(o);
}
const [Hy, jy] = U('sticky'),
	Wy = {
		zIndex: q,
		position: Z('top'),
		container: Object,
		offsetTop: ie(0),
		offsetBottom: ie(0),
	};
var Uy = j({
	name: Hy,
	props: Wy,
	emits: ['scroll', 'change'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Fo(o),
			i = He({ fixed: !1, width: 0, height: 0, transform: 0 }),
			l = D(!1),
			s = L(() => Wr(e.position === 'top' ? e.offsetTop : e.offsetBottom)),
			r = L(() => {
				if (l.value) return;
				const { fixed: h, height: m, width: g } = i;
				if (h) return { width: `${g}px`, height: `${m}px` };
			}),
			c = L(() => {
				if (!i.fixed || l.value) return;
				const h = de(yn(e.zIndex), {
					width: `${i.width}px`,
					height: `${i.height}px`,
					[e.position]: `${s.value}px`,
				});
				return (
					i.transform && (h.transform = `translate3d(0, ${i.transform}px, 0)`),
					h
				);
			}),
			u = h => t('scroll', { scrollTop: h, isFixed: i.fixed }),
			f = () => {
				if (!o.value || lo(o)) return;
				const { container: h, position: m } = e,
					g = Ae(o),
					y = hn(window);
				if (((i.width = g.width), (i.height = g.height), m === 'top'))
					if (h) {
						const v = Ae(h),
							w = v.bottom - s.value - i.height;
						(i.fixed = s.value > g.top && v.bottom > 0),
							(i.transform = w < 0 ? w : 0);
					} else i.fixed = s.value > g.top;
				else {
					const { clientHeight: v } = document.documentElement;
					if (h) {
						const w = Ae(h),
							b = v - w.top - s.value - i.height;
						(i.fixed = v - s.value < g.bottom && v > w.top),
							(i.transform = b < 0 ? -b : 0);
					} else i.fixed = v - s.value < g.bottom;
				}
				u(y);
			};
		return (
			ee(
				() => i.fixed,
				h => t('change', h),
			),
			We('scroll', f, { target: a, passive: !0 }),
			mf(o, f),
			ee([Mt, kt], () => {
				!o.value ||
					lo(o) ||
					!i.fixed ||
					((l.value = !0),
					Te(() => {
						const h = Ae(o);
						(i.width = h.width), (i.height = h.height), (l.value = !1);
					}));
			}),
			() => {
				var h;
				return d('div', { ref: o, style: r.value }, [
					d(
						'div',
						{ class: jy({ fixed: i.fixed && !l.value }), style: c.value },
						[(h = n.default) == null ? void 0 : h.call(n)],
					),
				]);
			}
		);
	},
});
const gf = G(Uy),
	[vf, za] = U('swipe'),
	Yy = {
		loop: z,
		width: q,
		height: q,
		vertical: Boolean,
		autoplay: ie(0),
		duration: ie(500),
		touchable: z,
		lazyRender: Boolean,
		initialSwipe: ie(0),
		indicatorColor: String,
		showIndicators: z,
		stopPropagation: z,
	},
	bf = Symbol(vf);
var Ky = j({
	name: vf,
	props: Yy,
	emits: ['change', 'dragStart', 'dragEnd'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(),
			i = He({
				rect: null,
				width: 0,
				height: 0,
				offset: 0,
				active: 0,
				swiping: !1,
			});
		let l = !1;
		const s = Et(),
			{ children: r, linkChildren: c } = rt(bf),
			u = L(() => r.length),
			f = L(() => i[e.vertical ? 'height' : 'width']),
			h = L(() => (e.vertical ? s.deltaY.value : s.deltaX.value)),
			m = L(() =>
				i.rect
					? (e.vertical ? i.rect.height : i.rect.width) - f.value * u.value
					: 0,
			),
			g = L(() => (f.value ? Math.ceil(Math.abs(m.value) / f.value) : u.value)),
			y = L(() => u.value * f.value),
			v = L(() => (i.active + u.value) % u.value),
			w = L(() => {
				const ne = e.vertical ? 'vertical' : 'horizontal';
				return s.direction.value === ne;
			}),
			b = L(() => {
				const ne = {
					transitionDuration: `${i.swiping ? 0 : e.duration}ms`,
					transform: `translate${e.vertical ? 'Y' : 'X'}(${+i.offset.toFixed(2)}px)`,
				};
				if (f.value) {
					const se = e.vertical ? 'height' : 'width',
						be = e.vertical ? 'width' : 'height';
					(ne[se] = `${y.value}px`), (ne[be] = e[be] ? `${e[be]}px` : '');
				}
				return ne;
			}),
			C = ne => {
				const { active: se } = i;
				return ne
					? e.loop
						? et(se + ne, -1, u.value)
						: et(se + ne, 0, g.value)
					: se;
			},
			p = (ne, se = 0) => {
				let be = ne * f.value;
				e.loop || (be = Math.min(be, -m.value));
				let De = se - be;
				return e.loop || (De = et(De, m.value, 0)), De;
			},
			x = ({ pace: ne = 0, offset: se = 0, emitChange: be }) => {
				if (u.value <= 1) return;
				const { active: De } = i,
					re = C(ne),
					ue = p(re, se);
				if (e.loop) {
					if (r[0] && ue !== m.value) {
						const E = ue < m.value;
						r[0].setOffset(E ? y.value : 0);
					}
					if (r[u.value - 1] && ue !== 0) {
						const E = ue > 0;
						r[u.value - 1].setOffset(E ? -y.value : 0);
					}
				}
				(i.active = re),
					(i.offset = ue),
					be && re !== De && t('change', v.value);
			},
			T = () => {
				(i.swiping = !0),
					i.active <= -1
						? x({ pace: u.value })
						: i.active >= u.value && x({ pace: -u.value });
			},
			R = () => {
				T(),
					s.reset(),
					Bn(() => {
						(i.swiping = !1), x({ pace: -1, emitChange: !0 });
					});
			},
			S = () => {
				T(),
					s.reset(),
					Bn(() => {
						(i.swiping = !1), x({ pace: 1, emitChange: !0 });
					});
			};
		let A;
		const I = () => clearTimeout(A),
			k = () => {
				I(),
					+e.autoplay > 0 &&
						u.value > 1 &&
						(A = setTimeout(() => {
							S(), k();
						}, +e.autoplay));
			},
			$ = (ne = +e.initialSwipe) => {
				if (!o.value) return;
				const se = () => {
					var be, De;
					if (!lo(o)) {
						const re = {
							width: o.value.offsetWidth,
							height: o.value.offsetHeight,
						};
						(i.rect = re),
							(i.width = +((be = e.width) != null ? be : re.width)),
							(i.height = +((De = e.height) != null ? De : re.height));
					}
					u.value &&
						((ne = Math.min(u.value - 1, ne)), ne === -1 && (ne = u.value - 1)),
						(i.active = ne),
						(i.swiping = !0),
						(i.offset = p(ne)),
						r.forEach(re => {
							re.setOffset(0);
						}),
						k();
				};
				lo(o) ? Te().then(se) : se();
			},
			B = () => $(i.active);
		let X;
		const V = ne => {
				!e.touchable ||
					ne.touches.length > 1 ||
					(s.start(ne), (l = !1), (X = Date.now()), I(), T());
			},
			O = ne => {
				e.touchable &&
					i.swiping &&
					(s.move(ne),
					w.value &&
						((!e.loop &&
							((i.active === 0 && h.value > 0) ||
								(i.active === u.value - 1 && h.value < 0))) ||
							(Me(ne, e.stopPropagation),
							x({ offset: h.value }),
							l || (t('dragStart', { index: v.value }), (l = !0)))));
			},
			F = () => {
				if (!e.touchable || !i.swiping) return;
				const ne = Date.now() - X,
					se = h.value / ne;
				if (
					(Math.abs(se) > 0.25 || Math.abs(h.value) > f.value / 2) &&
					w.value
				) {
					const De = e.vertical ? s.offsetY.value : s.offsetX.value;
					let re = 0;
					e.loop
						? (re = De > 0 ? (h.value > 0 ? -1 : 1) : 0)
						: (re = -Math[h.value > 0 ? 'ceil' : 'floor'](h.value / f.value)),
						x({ pace: re, emitChange: !0 });
				} else h.value && x({ pace: 0 });
				(l = !1), (i.swiping = !1), t('dragEnd', { index: v.value }), k();
			},
			Y = (ne, se = {}) => {
				T(),
					s.reset(),
					Bn(() => {
						let be;
						e.loop && ne === u.value
							? (be = i.active === 0 ? 0 : ne)
							: (be = ne % u.value),
							se.immediate
								? Bn(() => {
										i.swiping = !1;
									})
								: (i.swiping = !1),
							x({ pace: be - i.active, emitChange: !0 });
					});
			},
			me = (ne, se) => {
				const be = se === v.value,
					De = be ? { backgroundColor: e.indicatorColor } : void 0;
				return d(
					'i',
					{ style: De, class: za('indicator', { active: be }) },
					null,
				);
			},
			ve = () => {
				if (n.indicator)
					return n.indicator({ active: v.value, total: u.value });
				if (e.showIndicators && u.value > 1)
					return d(
						'div',
						{ class: za('indicators', { vertical: e.vertical }) },
						[Array(u.value).fill('').map(me)],
					);
			};
		return (
			ke({ prev: R, next: S, state: i, resize: B, swipeTo: Y }),
			c({ size: f, props: e, count: u, activeIndicator: v }),
			ee(
				() => e.initialSwipe,
				ne => $(+ne),
			),
			ee(u, () => $(i.active)),
			ee(() => e.autoplay, k),
			ee([Mt, kt, () => e.width, () => e.height], B),
			ee(wb(), ne => {
				ne === 'visible' ? k() : I();
			}),
			Ue($),
			Jt(() => $(i.active)),
			Yi(() => $(i.active)),
			Qt(I),
			en(I),
			We('touchmove', O, { target: a }),
			() => {
				var ne;
				return d('div', { ref: o, class: za() }, [
					d(
						'div',
						{
							ref: a,
							style: b.value,
							class: za('track', { vertical: e.vertical }),
							onTouchstartPassive: V,
							onTouchend: F,
							onTouchcancel: F,
						},
						[(ne = n.default) == null ? void 0 : ne.call(n)],
					),
					ve(),
				]);
			}
		);
	},
});
const Xr = G(Ky),
	[qy, Dc] = U('tabs');
var Gy = j({
	name: qy,
	props: {
		count: Ye(Number),
		inited: Boolean,
		animated: Boolean,
		duration: Ye(q),
		swipeable: Boolean,
		lazyRender: Boolean,
		currentIndex: Ye(Number),
	},
	emits: ['change'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = s => t('change', s),
			i = () => {
				var s;
				const r = (s = n.default) == null ? void 0 : s.call(n);
				return e.animated || e.swipeable
					? d(
							Xr,
							{
								ref: o,
								loop: !1,
								class: Dc('track'),
								duration: +e.duration * 1e3,
								touchable: e.swipeable,
								lazyRender: e.lazyRender,
								showIndicators: !1,
								onChange: a,
							},
							{ default: () => [r] },
						)
					: r;
			},
			l = s => {
				const r = o.value;
				r && r.state.active !== s && r.swipeTo(s, { immediate: !e.inited });
			};
		return (
			ee(() => e.currentIndex, l),
			Ue(() => {
				l(e.currentIndex);
			}),
			ke({ swipeRef: o }),
			() =>
				d(
					'div',
					{ class: Dc('content', { animated: e.animated || e.swipeable }) },
					[i()],
				)
		);
	},
});
const [yf, Ha] = U('tabs'),
	Xy = {
		type: Z('line'),
		color: String,
		border: Boolean,
		sticky: Boolean,
		shrink: Boolean,
		active: ie(0),
		duration: ie(0.3),
		animated: Boolean,
		ellipsis: z,
		swipeable: Boolean,
		scrollspy: Boolean,
		offsetTop: ie(0),
		background: String,
		lazyRender: z,
		showHeader: z,
		lineWidth: q,
		lineHeight: q,
		beforeChange: Function,
		swipeThreshold: ie(5),
		titleActiveColor: String,
		titleInactiveColor: String,
	},
	pf = Symbol(yf);
var Zy = j({
	name: yf,
	props: Xy,
	emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
	setup(e, { emit: t, slots: n }) {
		let o, a, i, l, s;
		const r = D(),
			c = D(),
			u = D(),
			f = D(),
			h = Ho(),
			m = Fo(r),
			[g, y] = Pa(),
			{ children: v, linkChildren: w } = rt(pf),
			b = He({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
			C = L(() => v.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
			p = L(() => ({ borderColor: e.color, background: e.background })),
			x = (re, ue) => {
				var E;
				return (E = re.name) != null ? E : ue;
			},
			T = L(() => {
				const re = v[b.currentIndex];
				if (re) return x(re, b.currentIndex);
			}),
			R = L(() => Wr(e.offsetTop)),
			S = L(() => (e.sticky ? R.value + o : 0)),
			A = re => {
				const ue = c.value,
					E = g.value;
				if (!C.value || !ue || !E || !E[b.currentIndex]) return;
				const H = E[b.currentIndex].$el,
					N = H.offsetLeft - (ue.offsetWidth - H.offsetWidth) / 2;
				l && l(), (l = Ny(ue, N, re ? 0 : +e.duration));
			},
			I = () => {
				const re = b.inited;
				Te(() => {
					const ue = g.value;
					if (!ue || !ue[b.currentIndex] || e.type !== 'line' || lo(r.value))
						return;
					const E = ue[b.currentIndex].$el,
						{ lineWidth: H, lineHeight: N } = e,
						Q = E.offsetLeft + E.offsetWidth / 2,
						fe = {
							width: we(H),
							backgroundColor: e.color,
							transform: `translateX(${Q}px) translateX(-50%)`,
						};
					if ((re && (fe.transitionDuration = `${e.duration}s`), $e(N))) {
						const xe = we(N);
						(fe.height = xe), (fe.borderRadius = xe);
					}
					b.lineStyle = fe;
				});
			},
			k = re => {
				const ue = re < b.currentIndex ? -1 : 1;
				for (; re >= 0 && re < v.length; ) {
					if (!v[re].disabled) return re;
					re += ue;
				}
			},
			$ = (re, ue) => {
				const E = k(re);
				if (!$e(E)) return;
				const H = v[E],
					N = x(H, E),
					Q = b.currentIndex !== null;
				b.currentIndex !== E && ((b.currentIndex = E), ue || A(), I()),
					N !== e.active &&
						(t('update:active', N), Q && t('change', N, H.title)),
					i && !e.scrollspy && Wi(Math.ceil(xc(r.value) - R.value));
			},
			B = (re, ue) => {
				const E = v.find((N, Q) => x(N, Q) === re),
					H = E ? v.indexOf(E) : 0;
				$(H, ue);
			},
			X = (re = !1) => {
				if (e.scrollspy) {
					const ue = v[b.currentIndex].$el;
					if (ue && m.value) {
						const E = xc(ue, m.value) - S.value;
						(a = !0),
							s && s(),
							(s = Fy(m.value, E, re ? 0 : +e.duration, () => {
								a = !1;
							}));
					}
				}
			},
			V = (re, ue, E) => {
				const { title: H, disabled: N } = v[ue],
					Q = x(v[ue], ue);
				N ||
					(Wn(e.beforeChange, {
						args: [Q],
						done: () => {
							$(ue), X();
						},
					}),
					nf(re)),
					t('clickTab', { name: Q, title: H, event: E, disabled: N });
			},
			O = re => {
				(i = re.isFixed), t('scroll', re);
			},
			F = re => {
				Te(() => {
					B(re), X(!0);
				});
			},
			Y = () => {
				for (let re = 0; re < v.length; re++) {
					const { top: ue } = Ae(v[re].$el);
					if (ue > S.value) return re === 0 ? 0 : re - 1;
				}
				return v.length - 1;
			},
			me = () => {
				if (e.scrollspy && !a) {
					const re = Y();
					$(re);
				}
			},
			ve = () => {
				if (e.type === 'line' && v.length)
					return d('div', { class: Ha('line'), style: b.lineStyle }, null);
			},
			ne = () => {
				var re, ue, E;
				const { type: H, border: N, sticky: Q } = e,
					fe = [
						d(
							'div',
							{
								ref: Q ? void 0 : u,
								class: [Ha('wrap'), { [Ui]: H === 'line' && N }],
							},
							[
								d(
									'div',
									{
										ref: c,
										role: 'tablist',
										class: Ha('nav', [
											H,
											{ shrink: e.shrink, complete: C.value },
										]),
										style: p.value,
										'aria-orientation': 'horizontal',
									},
									[
										(re = n['nav-left']) == null ? void 0 : re.call(n),
										v.map(xe => xe.renderTitle(V)),
										ve(),
										(ue = n['nav-right']) == null ? void 0 : ue.call(n),
									],
								),
							],
						),
						(E = n['nav-bottom']) == null ? void 0 : E.call(n),
					];
				return Q ? d('div', { ref: u }, [fe]) : fe;
			},
			se = () => {
				I(),
					Te(() => {
						var re, ue;
						A(!0),
							(ue = (re = f.value) == null ? void 0 : re.swipeRef.value) ==
								null || ue.resize();
					});
			};
		ee(() => [e.color, e.duration, e.lineWidth, e.lineHeight], I),
			ee(Mt, se),
			ee(
				() => e.active,
				re => {
					re !== T.value && B(re);
				},
			),
			ee(
				() => v.length,
				() => {
					b.inited &&
						(B(e.active),
						I(),
						Te(() => {
							A(!0);
						}));
				},
			);
		const be = () => {
				B(e.active, !0),
					Te(() => {
						(b.inited = !0), u.value && (o = Ae(u.value).height), A(!0);
					});
			},
			De = (re, ue) => t('rendered', re, ue);
		return (
			ke({ resize: se, scrollTo: F }),
			Jt(I),
			Yi(I),
			No(be),
			mf(r, I),
			We('scroll', me, { target: m, passive: !0 }),
			w({
				id: h,
				props: e,
				setLine: I,
				scrollable: C,
				onRendered: De,
				currentName: T,
				setTitleRefs: y,
				scrollIntoView: A,
			}),
			() =>
				d('div', { ref: r, class: Ha([e.type]) }, [
					e.showHeader
						? e.sticky
							? d(
									gf,
									{ container: r.value, offsetTop: R.value, onScroll: O },
									{ default: () => [ne()] },
								)
							: ne()
						: null,
					d(
						Gy,
						{
							ref: f,
							count: v.length,
							inited: b.inited,
							animated: e.animated,
							duration: e.duration,
							swipeable: e.swipeable,
							lazyRender: e.lazyRender,
							currentIndex: b.currentIndex,
							onChange: $,
						},
						{
							default: () => {
								var re;
								return [(re = n.default) == null ? void 0 : re.call(n)];
							},
						},
					),
				])
		);
	},
});
const wf = Symbol(),
	Jy = () => mt(wf, null),
	[Qy, Mc] = U('tab'),
	e0 = j({
		name: Qy,
		props: {
			id: String,
			dot: Boolean,
			type: String,
			color: String,
			title: String,
			badge: q,
			shrink: Boolean,
			isActive: Boolean,
			disabled: Boolean,
			controls: String,
			scrollable: Boolean,
			activeColor: String,
			inactiveColor: String,
			showZeroBadge: z,
		},
		setup(e, { slots: t }) {
			const n = L(() => {
					const a = {},
						{
							type: i,
							color: l,
							disabled: s,
							isActive: r,
							activeColor: c,
							inactiveColor: u,
						} = e;
					l &&
						i === 'card' &&
						((a.borderColor = l),
						s || (r ? (a.backgroundColor = l) : (a.color = l)));
					const h = r ? c : u;
					return h && (a.color = h), a;
				}),
				o = () => {
					const a = d(
						'span',
						{ class: Mc('text', { ellipsis: !e.scrollable }) },
						[t.title ? t.title() : e.title],
					);
					return e.dot || ($e(e.badge) && e.badge !== '')
						? d(
								co,
								{ dot: e.dot, content: e.badge, showZero: e.showZeroBadge },
								{ default: () => [a] },
							)
						: a;
				};
			return () =>
				d(
					'div',
					{
						id: e.id,
						role: 'tab',
						class: [
							Mc([
								e.type,
								{
									grow: e.scrollable && !e.shrink,
									shrink: e.shrink,
									active: e.isActive,
									disabled: e.disabled,
								},
							]),
						],
						style: n.value,
						tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
						'aria-selected': e.isActive,
						'aria-disabled': e.disabled || void 0,
						'aria-controls': e.controls,
					},
					[o()],
				);
		},
	}),
	[t0, n0] = U('swipe-item');
var o0 = j({
	name: t0,
	setup(e, { slots: t }) {
		let n;
		const o = He({ offset: 0, inited: !1, mounted: !1 }),
			{ parent: a, index: i } = ot(bf);
		if (!a) return;
		const l = L(() => {
				const c = {},
					{ vertical: u } = a.props;
				return (
					a.size.value && (c[u ? 'height' : 'width'] = `${a.size.value}px`),
					o.offset &&
						(c.transform = `translate${u ? 'Y' : 'X'}(${o.offset}px)`),
					c
				);
			}),
			s = L(() => {
				const { loop: c, lazyRender: u } = a.props;
				if (!u || n) return !0;
				if (!o.mounted) return !1;
				const f = a.activeIndicator.value,
					h = a.count.value - 1,
					m = f === 0 && c ? h : f - 1,
					g = f === h && c ? 0 : f + 1;
				return (n = i.value === f || i.value === m || i.value === g), n;
			}),
			r = c => {
				o.offset = c;
			};
		return (
			Ue(() => {
				Te(() => {
					o.mounted = !0;
				});
			}),
			ke({ setOffset: r }),
			() => {
				var c;
				return d('div', { class: n0(), style: l.value }, [
					s.value ? ((c = t.default) == null ? void 0 : c.call(t)) : null,
				]);
			}
		);
	},
});
const Zr = G(o0),
	[a0, wl] = U('tab'),
	i0 = de({}, Un, {
		dot: Boolean,
		name: q,
		badge: q,
		title: String,
		disabled: Boolean,
		titleClass: ze,
		titleStyle: [String, Object],
		showZeroBadge: z,
	});
var l0 = j({
	name: a0,
	props: i0,
	setup(e, { slots: t }) {
		const n = Ho(),
			o = D(!1),
			a = Nt(),
			{ parent: i, index: l } = ot(pf);
		if (!i) return;
		const s = () => {
				var g;
				return (g = e.name) != null ? g : l.value;
			},
			r = () => {
				(o.value = !0),
					i.props.lazyRender &&
						Te(() => {
							i.onRendered(s(), e.title);
						});
			},
			c = L(() => {
				const g = s() === i.currentName.value;
				return g && !o.value && r(), g;
			}),
			u = D(''),
			f = D('');
		Do(() => {
			const { titleClass: g, titleStyle: y } = e;
			(u.value = g ? Ri(g) : ''),
				(f.value = y && typeof y != 'string' ? Ah(_a(y)) : y);
		});
		const h = g =>
				d(
					e0,
					_e(
						{
							key: n,
							id: `${i.id}-${l.value}`,
							ref: i.setTitleRefs(l.value),
							style: f.value,
							class: u.value,
							isActive: c.value,
							controls: n,
							scrollable: i.scrollable.value,
							activeColor: i.props.titleActiveColor,
							inactiveColor: i.props.titleInactiveColor,
							onClick: y => g(a.proxy, l.value, y),
						},
						Ie(i.props, ['type', 'color', 'shrink']),
						Ie(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
					),
					{ title: t.title },
				),
			m = D(!c.value);
		return (
			ee(c, g => {
				g
					? (m.value = !1)
					: Bn(() => {
							m.value = !0;
						});
			}),
			ee(
				() => e.title,
				() => {
					i.setLine(), i.scrollIntoView();
				},
			),
			cn(wf, c),
			ke({ id: n, renderTitle: h }),
			() => {
				var g;
				const y = `${i.id}-${l.value}`,
					{ animated: v, swipeable: w, scrollspy: b, lazyRender: C } = i.props;
				if (!t.default && !v) return;
				const p = b || c.value;
				if (v || w)
					return d(
						Zr,
						{
							id: n,
							role: 'tabpanel',
							class: wl('panel-wrapper', { inactive: m.value }),
							tabindex: c.value ? 0 : -1,
							'aria-hidden': !c.value,
							'aria-labelledby': y,
						},
						{
							default: () => {
								var R;
								return [
									d('div', { class: wl('panel') }, [
										(R = t.default) == null ? void 0 : R.call(t),
									]),
								];
							},
						},
					);
				const T =
					o.value || b || !C
						? (g = t.default) == null
							? void 0
							: g.call(t)
						: null;
				return Qe(
					d(
						'div',
						{
							id: n,
							role: 'tabpanel',
							class: wl('panel'),
							tabindex: p ? 0 : -1,
							'aria-labelledby': y,
						},
						[T],
					),
					[[nt, p]],
				);
			}
		);
	},
});
const Ca = G(l0),
	Gi = G(Zy),
	[xf, xl] = U('picker-group'),
	Sf = Symbol(xf),
	r0 = de({ tabs: Ne(), activeTab: ie(0), nextStepText: String }, qi);
var s0 = j({
	name: xf,
	props: r0,
	emits: ['confirm', 'cancel', 'update:activeTab'],
	setup(e, { emit: t, slots: n }) {
		const o = Gr(
				() => e.activeTab,
				c => t('update:activeTab', c),
			),
			{ children: a, linkChildren: i } = rt(Sf);
		i();
		const l = () => +o.value < e.tabs.length - 1 && e.nextStepText,
			s = () => {
				l()
					? (o.value = +o.value + 1)
					: t(
							'confirm',
							a.map(c => c.confirm()),
						);
			},
			r = () => t('cancel');
		return () => {
			var c, u;
			let f =
				(u = (c = n.default) == null ? void 0 : c.call(n)) == null
					? void 0
					: u
							.filter(m => m.type !== pt)
							.map(m => (m.type === Je ? m.children : m));
			f && (f = cb(f));
			const h = l() ? e.nextStepText : e.confirmButtonText;
			return d('div', { class: xl() }, [
				d(
					hf,
					{
						title: e.title,
						cancelButtonText: e.cancelButtonText,
						confirmButtonText: h,
						onConfirm: s,
						onCancel: r,
					},
					Ie(n, ff),
				),
				d(
					Gi,
					{
						active: o.value,
						'onUpdate:active': m => (o.value = m),
						class: xl('tabs'),
						shrink: !0,
						animated: !0,
						lazyRender: !1,
					},
					{
						default: () => [
							e.tabs.map((m, g) =>
								d(
									Ca,
									{ title: m, titleClass: xl('tab-title') },
									{ default: () => [f == null ? void 0 : f[g]] },
								),
							),
						],
					},
				),
			]);
		};
	},
});
const Xi = de(
		{
			loading: Boolean,
			readonly: Boolean,
			allowHtml: Boolean,
			optionHeight: ie(44),
			showToolbar: z,
			swipeDuration: ie(1e3),
			visibleOptionNum: ie(6),
		},
		qi,
	),
	c0 = de({}, Xi, {
		columns: Ne(),
		modelValue: Ne(),
		toolbarPosition: Z('top'),
		columnsFieldNames: Object,
	});
var u0 = j({
	name: Iy,
	props: c0,
	emits: [
		'confirm',
		'cancel',
		'change',
		'scrollInto',
		'clickOption',
		'update:modelValue',
	],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(e.modelValue.slice(0)),
			{ parent: i } = ot(Sf),
			{ children: l, linkChildren: s } = rt(df);
		s();
		const r = L(() => By(e.columnsFieldNames)),
			c = L(() => Wr(e.optionHeight)),
			u = L(() => Ay(e.columns, r.value)),
			f = L(() => {
				const { columns: k } = e;
				switch (u.value) {
					case 'multiple':
						return k;
					case 'cascade':
						return Ry(k, r.value, a);
					default:
						return [k];
				}
			}),
			h = L(() => f.value.some(k => k.length)),
			m = L(() => f.value.map((k, $) => sr(k, a.value[$], r.value))),
			g = L(() =>
				f.value.map((k, $) =>
					k.findIndex(B => B[r.value.value] === a.value[$]),
				),
			),
			y = (k, $) => {
				if (a.value[k] !== $) {
					const B = a.value.slice(0);
					(B[k] = $), (a.value = B);
				}
			},
			v = () => ({
				selectedValues: a.value.slice(0),
				selectedOptions: m.value,
				selectedIndexes: g.value,
			}),
			w = (k, $) => {
				y($, k),
					u.value === 'cascade' &&
						a.value.forEach((B, X) => {
							const V = f.value[X];
							Rc(V, B, r.value) ||
								y(X, V.length ? V[0][r.value.value] : void 0);
						}),
					Te(() => {
						t('change', de({ columnIndex: $ }, v()));
					});
			},
			b = (k, $) => {
				const B = { columnIndex: $, currentOption: k };
				t('clickOption', de(v(), B)), t('scrollInto', B);
			},
			C = () => {
				l.forEach($ => $.stopMomentum());
				const k = v();
				return (
					Te(() => {
						t('confirm', k);
					}),
					k
				);
			},
			p = () => t('cancel', v()),
			x = () =>
				f.value.map((k, $) =>
					d(
						My,
						{
							value: a.value[$],
							fields: r.value,
							options: k,
							readonly: e.readonly,
							allowHtml: e.allowHtml,
							optionHeight: c.value,
							swipeDuration: e.swipeDuration,
							visibleOptionNum: e.visibleOptionNum,
							onChange: B => w(B, $),
							onClickOption: B => b(B, $),
							onScrollInto: B => {
								t('scrollInto', { currentOption: B, columnIndex: $ });
							},
						},
						{ option: n.option },
					),
				),
			T = k => {
				if (h.value) {
					const $ = { height: `${c.value}px` },
						B = { backgroundSize: `100% ${(k - c.value) / 2}px` };
					return [
						d('div', { class: rn('mask'), style: B }, null),
						d('div', { class: [Lb, rn('frame')], style: $ }, null),
					];
				}
			},
			R = () => {
				const k = c.value * +e.visibleOptionNum,
					$ = { height: `${k}px` };
				return d('div', { ref: o, class: rn('columns'), style: $ }, [
					x(),
					T(k),
				]);
			},
			S = () => {
				if (e.showToolbar && !i)
					return d(hf, _e(Ie(e, Vy), { onConfirm: C, onCancel: p }), Ie(n, ff));
			};
		ee(
			f,
			k => {
				k.forEach(($, B) => {
					$.length && !Rc($, a.value[B], r.value) && y(B, cf($)[r.value.value]);
				});
			},
			{ immediate: !0 },
		);
		let A;
		return (
			ee(
				() => e.modelValue,
				k => {
					!Xt(k, a.value) &&
						!Xt(k, A) &&
						((a.value = k.slice(0)), (A = k.slice(0)));
				},
				{ deep: !0 },
			),
			ee(
				a,
				k => {
					Xt(k, e.modelValue) || ((A = k.slice(0)), t('update:modelValue', A));
				},
				{ immediate: !0 },
			),
			We('touchmove', Me, { target: o }),
			ke({ confirm: C, getSelectedOptions: () => m.value }),
			() => {
				var k, $;
				return d('div', { class: rn() }, [
					e.toolbarPosition === 'top' ? S() : null,
					e.loading ? d(Ft, { class: rn('loading') }, null) : null,
					(k = n['columns-top']) == null ? void 0 : k.call(n),
					R(),
					($ = n['columns-bottom']) == null ? void 0 : $.call(n),
					e.toolbarPosition === 'bottom' ? S() : null,
				]);
			}
		);
	},
});
const $o = '000000',
	d0 = [
		'title',
		'cancel',
		'confirm',
		'toolbar',
		'columns-top',
		'columns-bottom',
	],
	Cf = [
		'title',
		'loading',
		'readonly',
		'optionHeight',
		'swipeDuration',
		'visibleOptionNum',
		'cancelButtonText',
		'confirmButtonText',
	],
	Tn = (e = '', t = $o, n = void 0) => ({ text: e, value: t, children: n });
function f0({ areaList: e, columnsNum: t, columnsPlaceholder: n }) {
	const { city_list: o = {}, county_list: a = {}, province_list: i = {} } = e,
		l = +t > 1,
		s = +t > 2,
		r = () => {
			if (l) return n.length ? [Tn(n[0], $o, s ? [] : void 0)] : [];
		},
		c = new Map();
	Object.keys(i).forEach(h => {
		c.set(h.slice(0, 2), Tn(i[h], h, r()));
	});
	const u = new Map();
	if (l) {
		const h = () => {
			if (s) return n.length ? [Tn(n[1])] : [];
		};
		Object.keys(o).forEach(m => {
			const g = Tn(o[m], m, h());
			u.set(m.slice(0, 4), g);
			const y = c.get(m.slice(0, 2));
			y && y.children.push(g);
		});
	}
	s &&
		Object.keys(a).forEach(h => {
			const m = u.get(h.slice(0, 4));
			m && m.children.push(Tn(a[h], h));
		});
	const f = Array.from(c.values());
	if (n.length) {
		const h = s ? [Tn(n[2])] : void 0,
			m = l ? [Tn(n[1], $o, h)] : void 0;
		f.unshift(Tn(n[0], $o, m));
	}
	return f;
}
const Zi = G(u0),
	[h0, m0] = U('area'),
	g0 = de({}, Ie(Xi, Cf), {
		modelValue: String,
		columnsNum: ie(3),
		columnsPlaceholder: Ne(),
		areaList: { type: Object, default: () => ({}) },
	});
var v0 = j({
	name: h0,
	props: g0,
	emits: ['change', 'confirm', 'cancel', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D([]),
			a = D(),
			i = L(() => f0(e)),
			l = (...c) => t('change', ...c),
			s = (...c) => t('cancel', ...c),
			r = (...c) => t('confirm', ...c);
		return (
			ee(
				o,
				c => {
					const u = c.length ? c[c.length - 1] : '';
					u && u !== e.modelValue && t('update:modelValue', u);
				},
				{ deep: !0 },
			),
			ee(
				() => e.modelValue,
				c => {
					if (c) {
						const u = o.value.length ? o.value[o.value.length - 1] : '';
						c !== u &&
							(o.value = [
								`${c.slice(0, 2)}0000`,
								`${c.slice(0, 4)}00`,
								c,
							].slice(0, +e.columnsNum));
					} else o.value = [];
				},
				{ immediate: !0 },
			),
			ke({
				confirm: () => {
					var c;
					return (c = a.value) == null ? void 0 : c.confirm();
				},
				getSelectedOptions: () => {
					var c;
					return (
						((c = a.value) == null ? void 0 : c.getSelectedOptions()) || []
					);
				},
			}),
			() =>
				d(
					Zi,
					_e(
						{
							ref: a,
							modelValue: o.value,
							'onUpdate:modelValue': c => (o.value = c),
							class: m0(),
							columns: i.value,
							onChange: l,
							onCancel: s,
							onConfirm: r,
						},
						Ie(e, Cf),
					),
					Ie(n, d0),
				)
		);
	},
});
const Tf = G(v0),
	[b0, ho] = U('cell'),
	Ji = {
		tag: Z('div'),
		icon: String,
		size: String,
		title: q,
		value: q,
		label: q,
		center: Boolean,
		isLink: Boolean,
		border: z,
		iconPrefix: String,
		valueClass: ze,
		labelClass: ze,
		titleClass: ze,
		titleStyle: null,
		arrowDirection: String,
		required: { type: [Boolean, String], default: null },
		clickable: { type: Boolean, default: null },
	},
	y0 = de({}, Ji, Un);
var p0 = j({
	name: b0,
	props: y0,
	setup(e, { slots: t }) {
		const n = so(),
			o = () => {
				if (t.label || $e(e.label))
					return d('div', { class: [ho('label'), e.labelClass] }, [
						t.label ? t.label() : e.label,
					]);
			},
			a = () => {
				var r;
				if (t.title || $e(e.title)) {
					const c = (r = t.title) == null ? void 0 : r.call(t);
					return Array.isArray(c) && c.length === 0
						? void 0
						: d(
								'div',
								{ class: [ho('title'), e.titleClass], style: e.titleStyle },
								[c || d('span', null, [e.title]), o()],
							);
				}
			},
			i = () => {
				const r = t.value || t.default;
				if (r || $e(e.value))
					return d('div', { class: [ho('value'), e.valueClass] }, [
						r ? r() : d('span', null, [e.value]),
					]);
			},
			l = () => {
				if (t.icon) return t.icon();
				if (e.icon)
					return d(
						Ce,
						{ name: e.icon, class: ho('left-icon'), classPrefix: e.iconPrefix },
						null,
					);
			},
			s = () => {
				if (t['right-icon']) return t['right-icon']();
				if (e.isLink) {
					const r =
						e.arrowDirection && e.arrowDirection !== 'right'
							? `arrow-${e.arrowDirection}`
							: 'arrow';
					return d(Ce, { name: r, class: ho('right-icon') }, null);
				}
			};
		return () => {
			var r;
			const {
					tag: c,
					size: u,
					center: f,
					border: h,
					isLink: m,
					required: g,
				} = e,
				y = (r = e.clickable) != null ? r : m,
				v = { center: f, required: !!g, clickable: y, borderless: !h };
			return (
				u && (v[u] = !!u),
				d(
					c,
					{
						class: ho(v),
						role: y ? 'button' : void 0,
						tabindex: y ? 0 : void 0,
						onClick: n,
					},
					{
						default: () => {
							var w;
							return [
								l(),
								a(),
								i(),
								s(),
								(w = t.extra) == null ? void 0 : w.call(t),
							];
						},
					},
				)
			);
		};
	},
});
const Ht = G(p0),
	[w0, x0] = U('form'),
	S0 = {
		colon: Boolean,
		disabled: Boolean,
		readonly: Boolean,
		required: [Boolean, String],
		showError: Boolean,
		labelWidth: q,
		labelAlign: String,
		inputAlign: String,
		scrollToError: Boolean,
		validateFirst: Boolean,
		submitOnEnter: z,
		showErrorMessage: z,
		errorMessageAlign: String,
		validateTrigger: { type: [String, Array], default: 'onBlur' },
	};
var C0 = j({
	name: w0,
	props: S0,
	emits: ['submit', 'failed'],
	setup(e, { emit: t, slots: n }) {
		const { children: o, linkChildren: a } = rt(Xd),
			i = v => (v ? o.filter(w => v.includes(w.name)) : o),
			l = v =>
				new Promise((w, b) => {
					const C = [];
					i(v)
						.reduce(
							(x, T) =>
								x.then(() => {
									if (!C.length)
										return T.validate().then(R => {
											R && C.push(R);
										});
								}),
							Promise.resolve(),
						)
						.then(() => {
							C.length ? b(C) : w();
						});
				}),
			s = v =>
				new Promise((w, b) => {
					const C = i(v);
					Promise.all(C.map(p => p.validate())).then(p => {
						(p = p.filter(Boolean)), p.length ? b(p) : w();
					});
				}),
			r = v => {
				const w = o.find(b => b.name === v);
				return w
					? new Promise((b, C) => {
							w.validate().then(p => {
								p ? C(p) : b();
							});
						})
					: Promise.reject();
			},
			c = v => (typeof v == 'string' ? r(v) : e.validateFirst ? l(v) : s(v)),
			u = v => {
				typeof v == 'string' && (v = [v]),
					i(v).forEach(b => {
						b.resetValidation();
					});
			},
			f = () =>
				o.reduce((v, w) => ((v[w.name] = w.getValidationStatus()), v), {}),
			h = (v, w) => {
				o.some(b => (b.name === v ? (b.$el.scrollIntoView(w), !0) : !1));
			},
			m = () =>
				o.reduce(
					(v, w) => (w.name !== void 0 && (v[w.name] = w.formValue.value), v),
					{},
				),
			g = () => {
				const v = m();
				c()
					.then(() => t('submit', v))
					.catch(w => {
						t('failed', { values: v, errors: w }),
							e.scrollToError && w[0].name && h(w[0].name);
					});
			},
			y = v => {
				Me(v), g();
			};
		return (
			a({ props: e }),
			ke({
				submit: g,
				validate: c,
				getValues: m,
				scrollToField: h,
				resetValidation: u,
				getValidationStatus: f,
			}),
			() => {
				var v;
				return d('form', { class: x0(), onSubmit: y }, [
					(v = n.default) == null ? void 0 : v.call(n),
				]);
			}
		);
	},
});
const Jr = G(C0);
function _f(e) {
	return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function T0(e, t) {
	if (_f(e)) {
		if (t.required) return !1;
		if (t.validateEmpty === !1) return !0;
	}
	return !(t.pattern && !t.pattern.test(String(e)));
}
function _0(e, t) {
	return new Promise(n => {
		const o = t.validator(e, t);
		if (zr(o)) {
			o.then(n);
			return;
		}
		n(o);
	});
}
function Lc(e, t) {
	const { message: n } = t;
	return Oo(n) ? n(e, t) : n || '';
}
function k0({ target: e }) {
	e.composing = !0;
}
function Vc({ target: e }) {
	e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function E0(e, t) {
	const n = $a();
	e.style.height = 'auto';
	let o = e.scrollHeight;
	if (fn(t)) {
		const { maxHeight: a, minHeight: i } = t;
		a !== void 0 && (o = Math.min(o, a)), i !== void 0 && (o = Math.max(o, i));
	}
	o && ((e.style.height = `${o}px`), Wi(n));
}
function $0(e) {
	return e === 'number'
		? { type: 'text', inputmode: 'decimal' }
		: e === 'digit'
			? { type: 'tel', inputmode: 'numeric' }
			: { type: e };
}
function nn(e) {
	return [...e].length;
}
function Sl(e, t) {
	return [...e].slice(0, t).join('');
}
const [P0, Ct] = U('field'),
	Qr = {
		id: String,
		name: String,
		leftIcon: String,
		rightIcon: String,
		autofocus: Boolean,
		clearable: Boolean,
		maxlength: q,
		formatter: Function,
		clearIcon: Z('clear'),
		modelValue: ie(''),
		inputAlign: String,
		placeholder: String,
		autocomplete: String,
		autocapitalize: String,
		autocorrect: String,
		errorMessage: String,
		enterkeyhint: String,
		clearTrigger: Z('focus'),
		formatTrigger: Z('onChange'),
		spellcheck: { type: Boolean, default: null },
		error: { type: Boolean, default: null },
		disabled: { type: Boolean, default: null },
		readonly: { type: Boolean, default: null },
	},
	I0 = de({}, Ji, Qr, {
		rows: q,
		type: Z('text'),
		rules: Array,
		autosize: [Boolean, Object],
		labelWidth: q,
		labelClass: ze,
		labelAlign: String,
		showWordLimit: Boolean,
		errorMessageAlign: String,
		colon: { type: Boolean, default: null },
	});
var A0 = j({
	name: P0,
	props: I0,
	emits: [
		'blur',
		'focus',
		'clear',
		'keypress',
		'clickInput',
		'endValidate',
		'startValidate',
		'clickLeftIcon',
		'clickRightIcon',
		'update:modelValue',
	],
	setup(e, { emit: t, slots: n }) {
		const o = Ho(),
			a = He({ status: 'unvalidated', focused: !1, validateMessage: '' }),
			i = D(),
			l = D(),
			s = D(),
			{ parent: r } = ot(Xd),
			c = () => {
				var E;
				return String((E = e.modelValue) != null ? E : '');
			},
			u = E => {
				if ($e(e[E])) return e[E];
				if (r && $e(r.props[E])) return r.props[E];
			},
			f = L(() => {
				const E = u('readonly');
				if (e.clearable && !E) {
					const H = c() !== '',
						N =
							e.clearTrigger === 'always' ||
							(e.clearTrigger === 'focus' && a.focused);
					return H && N;
				}
				return !1;
			}),
			h = L(() => (s.value && n.input ? s.value() : e.modelValue)),
			m = L(() => {
				var E;
				const H = u('required');
				return H === 'auto'
					? (E = e.rules) == null
						? void 0
						: E.some(N => N.required)
					: H;
			}),
			g = E =>
				E.reduce(
					(H, N) =>
						H.then(() => {
							if (a.status === 'failed') return;
							let { value: Q } = h;
							if ((N.formatter && (Q = N.formatter(Q, N)), !T0(Q, N))) {
								(a.status = 'failed'), (a.validateMessage = Lc(Q, N));
								return;
							}
							if (N.validator)
								return _f(Q) && N.validateEmpty === !1
									? void 0
									: _0(Q, N).then(fe => {
											fe && typeof fe == 'string'
												? ((a.status = 'failed'), (a.validateMessage = fe))
												: fe === !1 &&
													((a.status = 'failed'),
													(a.validateMessage = Lc(Q, N)));
										});
						}),
					Promise.resolve(),
				),
			y = () => {
				(a.status = 'unvalidated'), (a.validateMessage = '');
			},
			v = () =>
				t('endValidate', { status: a.status, message: a.validateMessage }),
			w = (E = e.rules) =>
				new Promise(H => {
					y(),
						E
							? (t('startValidate'),
								g(E).then(() => {
									a.status === 'failed'
										? (H({ name: e.name, message: a.validateMessage }), v())
										: ((a.status = 'passed'), H(), v());
								}))
							: H();
				}),
			b = E => {
				if (r && e.rules) {
					const { validateTrigger: H } = r.props,
						N = wi(H).includes(E),
						Q = e.rules.filter(fe =>
							fe.trigger ? wi(fe.trigger).includes(E) : N,
						);
					Q.length && w(Q);
				}
			},
			C = E => {
				var H;
				const { maxlength: N } = e;
				if ($e(N) && nn(E) > +N) {
					const Q = c();
					if (Q && nn(Q) === +N) return Q;
					const fe = (H = i.value) == null ? void 0 : H.selectionEnd;
					if (a.focused && fe) {
						const xe = [...E],
							_ = xe.length - +N;
						return xe.splice(fe - _, _), xe.join('');
					}
					return Sl(E, +N);
				}
				return E;
			},
			p = (E, H = 'onChange') => {
				const N = E;
				E = C(E);
				const Q = nn(N) - nn(E);
				if (e.type === 'number' || e.type === 'digit') {
					const xe = e.type === 'number';
					E = ir(E, xe, xe);
				}
				let fe = 0;
				if (e.formatter && H === e.formatTrigger) {
					const { formatter: xe, maxlength: _ } = e;
					if (
						((E = xe(E)),
						$e(_) && nn(E) > +_ && (E = Sl(E, +_)),
						i.value && a.focused)
					) {
						const { selectionEnd: P } = i.value,
							M = Sl(N, P);
						fe = nn(xe(M)) - nn(M);
					}
				}
				if (i.value && i.value.value !== E)
					if (a.focused) {
						let { selectionStart: xe, selectionEnd: _ } = i.value;
						if (((i.value.value = E), $e(xe) && $e(_))) {
							const P = nn(E);
							Q ? ((xe -= Q), (_ -= Q)) : fe && ((xe += fe), (_ += fe)),
								i.value.setSelectionRange(Math.min(xe, P), Math.min(_, P));
						}
					} else i.value.value = E;
				E !== e.modelValue && t('update:modelValue', E);
			},
			x = E => {
				E.target.composing || p(E.target.value);
			},
			T = () => {
				var E;
				return (E = i.value) == null ? void 0 : E.blur();
			},
			R = () => {
				var E;
				return (E = i.value) == null ? void 0 : E.focus();
			},
			S = () => {
				const E = i.value;
				e.type === 'textarea' && e.autosize && E && E0(E, e.autosize);
			},
			A = E => {
				(a.focused = !0), t('focus', E), Te(S), u('readonly') && T();
			},
			I = E => {
				(a.focused = !1),
					p(c(), 'onBlur'),
					t('blur', E),
					!u('readonly') && (b('onBlur'), Te(S), jd());
			},
			k = E => t('clickInput', E),
			$ = E => t('clickLeftIcon', E),
			B = E => t('clickRightIcon', E),
			X = E => {
				Me(E), t('update:modelValue', ''), t('clear', E);
			},
			V = L(() => {
				if (typeof e.error == 'boolean') return e.error;
				if (r && r.props.showError && a.status === 'failed') return !0;
			}),
			O = L(() => {
				const E = u('labelWidth'),
					H = u('labelAlign');
				if (E && H !== 'top') return { width: we(E) };
			}),
			F = E => {
				E.keyCode === 13 &&
					(!(r && r.props.submitOnEnter) && e.type !== 'textarea' && Me(E),
					e.type === 'search' && T()),
					t('keypress', E);
			},
			Y = () => e.id || `${o}-input`,
			me = () => a.status,
			ve = () => {
				const E = Ct('control', [
					u('inputAlign'),
					{
						error: V.value,
						custom: !!n.input,
						'min-height': e.type === 'textarea' && !e.autosize,
					},
				]);
				if (n.input) return d('div', { class: E, onClick: k }, [n.input()]);
				const H = {
					id: Y(),
					ref: i,
					name: e.name,
					rows: e.rows !== void 0 ? +e.rows : void 0,
					class: E,
					disabled: u('disabled'),
					readonly: u('readonly'),
					autofocus: e.autofocus,
					placeholder: e.placeholder,
					autocomplete: e.autocomplete,
					autocapitalize: e.autocapitalize,
					autocorrect: e.autocorrect,
					enterkeyhint: e.enterkeyhint,
					spellcheck: e.spellcheck,
					'aria-labelledby': e.label ? `${o}-label` : void 0,
					onBlur: I,
					onFocus: A,
					onInput: x,
					onClick: k,
					onChange: Vc,
					onKeypress: F,
					onCompositionend: Vc,
					onCompositionstart: k0,
				};
				return e.type === 'textarea'
					? d('textarea', H, null)
					: d('input', _e($0(e.type), H), null);
			},
			ne = () => {
				const E = n['left-icon'];
				if (e.leftIcon || E)
					return d('div', { class: Ct('left-icon'), onClick: $ }, [
						E
							? E()
							: d(Ce, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
					]);
			},
			se = () => {
				const E = n['right-icon'];
				if (e.rightIcon || E)
					return d('div', { class: Ct('right-icon'), onClick: B }, [
						E
							? E()
							: d(Ce, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
					]);
			},
			be = () => {
				if (e.showWordLimit && e.maxlength) {
					const E = nn(c());
					return d('div', { class: Ct('word-limit') }, [
						d('span', { class: Ct('word-num') }, [E]),
						no('/'),
						e.maxlength,
					]);
				}
			},
			De = () => {
				if (r && r.props.showErrorMessage === !1) return;
				const E = e.errorMessage || a.validateMessage;
				if (E) {
					const H = n['error-message'],
						N = u('errorMessageAlign');
					return d('div', { class: Ct('error-message', N) }, [
						H ? H({ message: E }) : E,
					]);
				}
			},
			re = () => {
				const E = u('labelWidth'),
					H = u('labelAlign'),
					N = u('colon') ? ':' : '';
				if (n.label) return [n.label(), N];
				if (e.label)
					return d(
						'label',
						{
							id: `${o}-label`,
							for: n.input ? void 0 : Y(),
							onClick: Q => {
								Me(Q), R();
							},
							style: H === 'top' && E ? { width: we(E) } : void 0,
						},
						[e.label + N],
					);
			},
			ue = () => [
				d('div', { class: Ct('body') }, [
					ve(),
					f.value &&
						d(Ce, { ref: l, name: e.clearIcon, class: Ct('clear') }, null),
					se(),
					n.button && d('div', { class: Ct('button') }, [n.button()]),
				]),
				be(),
				De(),
			];
		return (
			ke({
				blur: T,
				focus: R,
				validate: w,
				formValue: h,
				resetValidation: y,
				getValidationStatus: me,
			}),
			cn(Hd, { customValue: s, resetValidation: y, validateWithTrigger: b }),
			ee(
				() => e.modelValue,
				() => {
					p(c()), y(), b('onChange'), Te(S);
				},
			),
			Ue(() => {
				p(c(), e.formatTrigger), Te(S);
			}),
			We('touchstart', X, {
				target: L(() => {
					var E;
					return (E = l.value) == null ? void 0 : E.$el;
				}),
			}),
			() => {
				const E = u('disabled'),
					H = u('labelAlign'),
					N = ne(),
					Q = () => {
						const fe = re();
						return H === 'top' ? [N, fe].filter(Boolean) : fe || [];
					};
				return d(
					Ht,
					{
						size: e.size,
						class: Ct({ error: V.value, disabled: E, [`label-${H}`]: H }),
						center: e.center,
						border: e.border,
						isLink: e.isLink,
						clickable: e.clickable,
						titleStyle: O.value,
						valueClass: Ct('value'),
						titleClass: [Ct('label', [H, { required: m.value }]), e.labelClass],
						arrowDirection: e.arrowDirection,
					},
					{
						icon: N && H !== 'top' ? () => N : null,
						title: Q,
						value: ue,
						extra: n.extra,
					},
				);
			}
		);
	},
});
const un = G(A0);
let Go = 0;
function R0(e) {
	e
		? (Go || document.body.classList.add('van-toast--unclickable'), Go++)
		: Go &&
			(Go--, Go || document.body.classList.remove('van-toast--unclickable'));
}
const [O0, mo] = U('toast'),
	B0 = [
		'show',
		'overlay',
		'teleport',
		'transition',
		'overlayClass',
		'overlayStyle',
		'closeOnClickOverlay',
		'zIndex',
	],
	D0 = {
		icon: String,
		show: Boolean,
		type: Z('text'),
		overlay: Boolean,
		message: q,
		iconSize: q,
		duration: Ke(2e3),
		position: Z('middle'),
		teleport: [String, Object],
		wordBreak: String,
		className: ze,
		iconPrefix: String,
		transition: Z('van-fade'),
		loadingType: String,
		forbidClick: Boolean,
		overlayClass: ze,
		overlayStyle: Object,
		closeOnClick: Boolean,
		closeOnClickOverlay: Boolean,
		zIndex: q,
	};
var kf = j({
	name: O0,
	props: D0,
	emits: ['update:show'],
	setup(e, { emit: t, slots: n }) {
		let o,
			a = !1;
		const i = () => {
				const f = e.show && e.forbidClick;
				a !== f && ((a = f), R0(a));
			},
			l = f => t('update:show', f),
			s = () => {
				e.closeOnClick && l(!1);
			},
			r = () => clearTimeout(o),
			c = () => {
				const {
					icon: f,
					type: h,
					iconSize: m,
					iconPrefix: g,
					loadingType: y,
				} = e;
				if (f || h === 'success' || h === 'fail')
					return d(
						Ce,
						{ name: f || h, size: m, class: mo('icon'), classPrefix: g },
						null,
					);
				if (h === 'loading')
					return d(Ft, { class: mo('loading'), size: m, type: y }, null);
			},
			u = () => {
				const { type: f, message: h } = e;
				if (n.message) return d('div', { class: mo('text') }, [n.message()]);
				if ($e(h) && h !== '')
					return f === 'html'
						? d(
								'div',
								{ key: 0, class: mo('text'), innerHTML: String(h) },
								null,
							)
						: d('div', { class: mo('text') }, [h]);
			};
		return (
			ee(() => [e.show, e.forbidClick], i),
			ee(
				() => [e.show, e.type, e.message, e.duration],
				() => {
					r(),
						e.show &&
							e.duration > 0 &&
							(o = setTimeout(() => {
								l(!1);
							}, e.duration));
				},
			),
			Ue(i),
			Mo(i),
			() =>
				d(
					zt,
					_e(
						{
							class: [
								mo([
									e.position,
									e.wordBreak === 'normal' ? 'break-normal' : e.wordBreak,
									{ [e.type]: !e.icon },
								]),
								e.className,
							],
							lockScroll: !1,
							onClick: s,
							onClosed: r,
							'onUpdate:show': l,
						},
						Ie(e, B0),
					),
					{ default: () => [c(), u()] },
				)
		);
	},
});
function es() {
	const e = He({ show: !1 }),
		t = a => {
			e.show = a;
		},
		n = a => {
			de(e, a, { transitionAppear: !0 }), t(!0);
		},
		o = () => t(!1);
	return (
		ke({ open: n, close: o, toggle: t }),
		{ open: n, close: o, state: e, toggle: t }
	);
}
function ts(e) {
	const t = _d(e),
		n = document.createElement('div');
	return (
		document.body.appendChild(n),
		{
			instance: t.mount(n),
			unmount() {
				t.unmount(), document.body.removeChild(n);
			},
		}
	);
}
const M0 = {
	icon: '',
	type: 'text',
	message: '',
	className: '',
	overlay: !1,
	onClose: void 0,
	onOpened: void 0,
	duration: 2e3,
	teleport: 'body',
	iconSize: void 0,
	iconPrefix: void 0,
	position: 'middle',
	transition: 'van-fade',
	forbidClick: !1,
	loadingType: void 0,
	overlayClass: '',
	overlayStyle: void 0,
	closeOnClick: !1,
	closeOnClickOverlay: !1,
};
let ja = [],
	L0 = !1,
	Nc = de({}, M0);
const V0 = new Map();
function N0(e) {
	return fn(e) ? e : { message: e };
}
function F0() {
	const { instance: e, unmount: t } = ts({
		setup() {
			const n = D(''),
				{ open: o, state: a, close: i, toggle: l } = es(),
				s = () => {},
				r = () => d(kf, _e(a, { onClosed: s, 'onUpdate:show': l }), null);
			return (
				ee(n, c => {
					a.message = c;
				}),
				(Nt().render = r),
				{ open: o, close: i, message: n }
			);
		},
	});
	return e;
}
function z0() {
	if (!ja.length || L0) {
		const e = F0();
		ja.push(e);
	}
	return ja[ja.length - 1];
}
function cr(e = {}) {
	if (!wt) return {};
	const t = z0(),
		n = N0(e);
	return t.open(de({}, Nc, V0.get(n.type || Nc.type), n)), t;
}
const H0 = G(kf),
	[j0, Cl] = U('switch'),
	W0 = {
		size: q,
		loading: Boolean,
		disabled: Boolean,
		modelValue: ze,
		activeColor: String,
		inactiveColor: String,
		activeValue: { type: ze, default: !0 },
		inactiveValue: { type: ze, default: !1 },
	};
var U0 = j({
	name: j0,
	props: W0,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = () => e.modelValue === e.activeValue,
			a = () => {
				if (!e.disabled && !e.loading) {
					const l = o() ? e.inactiveValue : e.activeValue;
					t('update:modelValue', l), t('change', l);
				}
			},
			i = () => {
				if (e.loading) {
					const l = o() ? e.activeColor : e.inactiveColor;
					return d(Ft, { class: Cl('loading'), color: l }, null);
				}
				if (n.node) return n.node();
			};
		return (
			jn(() => e.modelValue),
			() => {
				var l;
				const {
						size: s,
						loading: r,
						disabled: c,
						activeColor: u,
						inactiveColor: f,
					} = e,
					h = o(),
					m = { fontSize: we(s), backgroundColor: h ? u : f };
				return d(
					'div',
					{
						role: 'switch',
						class: Cl({ on: h, loading: r, disabled: c }),
						style: m,
						tabindex: c ? void 0 : 0,
						'aria-checked': h,
						onClick: a,
					},
					[
						d('div', { class: Cl('node') }, [i()]),
						(l = n.background) == null ? void 0 : l.call(n),
					],
				);
			}
		);
	},
});
const ns = G(U0),
	[Y0, Fc] = U('address-edit-detail'),
	zc = U('address-edit')[2];
var K0 = j({
	name: Y0,
	props: {
		show: Boolean,
		rows: q,
		value: String,
		rules: Array,
		focused: Boolean,
		maxlength: q,
		searchResult: Array,
		showSearchResult: Boolean,
	},
	emits: ['blur', 'focus', 'input', 'selectSearch'],
	setup(e, { emit: t }) {
		const n = D(),
			o = () => e.focused && e.searchResult && e.showSearchResult,
			a = c => {
				t('selectSearch', c),
					t('input', `${c.address || ''} ${c.name || ''}`.trim());
			},
			i = () => {
				if (!o()) return;
				const { searchResult: c } = e;
				return c.map(u =>
					d(
						Ht,
						{
							clickable: !0,
							key: (u.name || '') + (u.address || ''),
							icon: 'location-o',
							title: u.name,
							label: u.address,
							class: Fc('search-item'),
							border: !1,
							onClick: () => a(u),
						},
						null,
					),
				);
			},
			l = c => t('blur', c),
			s = c => t('focus', c),
			r = c => t('input', c);
		return () => {
			if (e.show)
				return d(Je, null, [
					d(
						un,
						{
							autosize: !0,
							clearable: !0,
							ref: n,
							class: Fc(),
							rows: e.rows,
							type: 'textarea',
							rules: e.rules,
							label: zc('addressDetail'),
							border: !o(),
							maxlength: e.maxlength,
							modelValue: e.value,
							placeholder: zc('addressDetail'),
							onBlur: l,
							onFocus: s,
							'onUpdate:modelValue': r,
						},
						null,
					),
					i(),
				]);
		};
	},
});
const [q0, go, st] = U('address-edit'),
	Ef = {
		name: '',
		tel: '',
		city: '',
		county: '',
		country: '',
		province: '',
		areaCode: '',
		isDefault: !1,
		addressDetail: '',
	},
	G0 = {
		areaList: Object,
		isSaving: Boolean,
		isDeleting: Boolean,
		validator: Function,
		showArea: z,
		showDetail: z,
		showDelete: Boolean,
		disableArea: Boolean,
		searchResult: Array,
		telMaxlength: q,
		showSetDefault: Boolean,
		saveButtonText: String,
		areaPlaceholder: String,
		deleteButtonText: String,
		showSearchResult: Boolean,
		detailRows: ie(1),
		detailMaxlength: ie(200),
		areaColumnsPlaceholder: Ne(),
		addressInfo: { type: Object, default: () => de({}, Ef) },
		telValidator: { type: Function, default: Nd },
	};
var X0 = j({
	name: q0,
	props: G0,
	emits: [
		'save',
		'focus',
		'change',
		'delete',
		'clickArea',
		'changeArea',
		'changeDetail',
		'selectSearch',
		'changeDefault',
	],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = He({}),
			i = D(!1),
			l = D(!1),
			s = L(() => fn(e.areaList) && Object.keys(e.areaList).length),
			r = L(() => {
				const { province: T, city: R, county: S, areaCode: A } = a;
				if (A) {
					const I = [T, R, S];
					return T && T === R && I.splice(1, 1), I.filter(Boolean).join('/');
				}
				return '';
			}),
			c = L(() => {
				var T;
				return ((T = e.searchResult) == null ? void 0 : T.length) && l.value;
			}),
			u = T => {
				(l.value = T === 'addressDetail'), t('focus', T);
			},
			f = (T, R) => {
				t('change', { key: T, value: R });
			},
			h = L(() => {
				const { validator: T, telValidator: R } = e,
					S = (A, I) => ({
						validator: k => {
							if (T) {
								const $ = T(A, k);
								if ($) return $;
							}
							return k ? !0 : I;
						},
					});
				return {
					name: [S('name', st('nameEmpty'))],
					tel: [
						S('tel', st('telInvalid')),
						{ validator: R, message: st('telInvalid') },
					],
					areaCode: [S('areaCode', st('areaEmpty'))],
					addressDetail: [S('addressDetail', st('addressEmpty'))],
				};
			}),
			m = () => t('save', a),
			g = T => {
				(a.addressDetail = T), t('changeDetail', T);
			},
			y = T => {
				(a.province = T[0].text), (a.city = T[1].text), (a.county = T[2].text);
			},
			v = ({ selectedValues: T, selectedOptions: R }) => {
				T.some(S => S === $o)
					? cr(st('areaEmpty'))
					: ((i.value = !1), y(R), t('changeArea', R));
			},
			w = () => t('delete', a),
			b = T => {
				a.areaCode = T || '';
			},
			C = () => {
				setTimeout(() => {
					l.value = !1;
				});
			},
			p = T => {
				a.addressDetail = T;
			},
			x = () => {
				if (e.showSetDefault) {
					const T = {
						'right-icon': () =>
							d(
								ns,
								{
									modelValue: a.isDefault,
									'onUpdate:modelValue': R => (a.isDefault = R),
									onChange: R => t('changeDefault', R),
								},
								null,
							),
					};
					return Qe(
						d(
							Ht,
							{
								center: !0,
								border: !1,
								title: st('defaultAddress'),
								class: go('default'),
							},
							T,
						),
						[[nt, !c.value]],
					);
				}
			};
		return (
			ke({ setAreaCode: b, setAddressDetail: p }),
			ee(
				() => e.addressInfo,
				T => {
					de(a, Ef, T),
						Te(() => {
							var R;
							const S = (R = o.value) == null ? void 0 : R.getSelectedOptions();
							S && S.every(A => A && A.value !== $o) && y(S);
						});
				},
				{ deep: !0, immediate: !0 },
			),
			() => {
				const { disableArea: T } = e;
				return d(
					Jr,
					{ class: go(), onSubmit: m },
					{
						default: () => {
							var R;
							return [
								d('div', { class: go('fields') }, [
									d(
										un,
										{
											modelValue: a.name,
											'onUpdate:modelValue': [
												S => (a.name = S),
												S => f('name', S),
											],
											clearable: !0,
											label: st('name'),
											rules: h.value.name,
											placeholder: st('name'),
											onFocus: () => u('name'),
										},
										null,
									),
									d(
										un,
										{
											modelValue: a.tel,
											'onUpdate:modelValue': [
												S => (a.tel = S),
												S => f('tel', S),
											],
											clearable: !0,
											type: 'tel',
											label: st('tel'),
											rules: h.value.tel,
											maxlength: e.telMaxlength,
											placeholder: st('tel'),
											onFocus: () => u('tel'),
										},
										null,
									),
									Qe(
										d(
											un,
											{
												readonly: !0,
												label: st('area'),
												'is-link': !T,
												modelValue: r.value,
												rules: e.showArea ? h.value.areaCode : void 0,
												placeholder: e.areaPlaceholder || st('area'),
												onFocus: () => u('areaCode'),
												onClick: () => {
													t('clickArea'), (i.value = !T);
												},
											},
											null,
										),
										[[nt, e.showArea]],
									),
									d(
										K0,
										{
											show: e.showDetail,
											rows: e.detailRows,
											rules: h.value.addressDetail,
											value: a.addressDetail,
											focused: l.value,
											maxlength: e.detailMaxlength,
											searchResult: e.searchResult,
											showSearchResult: e.showSearchResult,
											onBlur: C,
											onFocus: () => u('addressDetail'),
											onInput: g,
											onSelectSearch: S => t('selectSearch', S),
										},
										null,
									),
									(R = n.default) == null ? void 0 : R.call(n),
								]),
								x(),
								Qe(
									d('div', { class: go('buttons') }, [
										d(
											lt,
											{
												block: !0,
												round: !0,
												type: 'primary',
												text: e.saveButtonText || st('save'),
												class: go('button'),
												loading: e.isSaving,
												nativeType: 'submit',
											},
											null,
										),
										e.showDelete &&
											d(
												lt,
												{
													block: !0,
													round: !0,
													class: go('button'),
													loading: e.isDeleting,
													text: e.deleteButtonText || st('delete'),
													onClick: w,
												},
												null,
											),
									]),
									[[nt, !c.value]],
								),
								d(
									zt,
									{
										show: i.value,
										'onUpdate:show': S => (i.value = S),
										round: !0,
										teleport: 'body',
										position: 'bottom',
										lazyRender: !1,
									},
									{
										default: () => [
											d(
												Tf,
												{
													modelValue: a.areaCode,
													'onUpdate:modelValue': S => (a.areaCode = S),
													ref: o,
													loading: !s.value,
													areaList: e.areaList,
													columnsPlaceholder: e.areaColumnsPlaceholder,
													onConfirm: v,
													onCancel: () => {
														i.value = !1;
													},
												},
												null,
											),
										],
									},
								),
							];
						},
					},
				);
			}
		);
	},
});
const Z0 = G(X0),
	[$f, J0] = U('radio-group'),
	Q0 = {
		shape: String,
		disabled: Boolean,
		iconSize: q,
		direction: String,
		modelValue: ze,
		checkedColor: String,
	},
	Pf = Symbol($f);
var ep = j({
	name: $f,
	props: Q0,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt(Pf),
			a = i => t('update:modelValue', i);
		return (
			ee(
				() => e.modelValue,
				i => t('change', i),
			),
			o({ props: e, updateValue: a }),
			jn(() => e.modelValue),
			() => {
				var i;
				return d('div', { class: J0([e.direction]), role: 'radiogroup' }, [
					(i = n.default) == null ? void 0 : i.call(n),
				]);
			}
		);
	},
});
const os = G(ep),
	[tp, Hc] = U('tag'),
	np = {
		size: String,
		mark: Boolean,
		show: z,
		type: Z('default'),
		color: String,
		plain: Boolean,
		round: Boolean,
		textColor: String,
		closeable: Boolean,
	};
var op = j({
	name: tp,
	props: np,
	emits: ['close'],
	setup(e, { slots: t, emit: n }) {
		const o = l => {
				l.stopPropagation(), n('close', l);
			},
			a = () =>
				e.plain
					? { color: e.textColor || e.color, borderColor: e.color }
					: { color: e.textColor, background: e.color },
			i = () => {
				var l;
				const {
						type: s,
						mark: r,
						plain: c,
						round: u,
						size: f,
						closeable: h,
					} = e,
					m = { mark: r, plain: c, round: u };
				f && (m[f] = f);
				const g =
					h &&
					d(Ce, { name: 'cross', class: [Hc('close'), vt], onClick: o }, null);
				return d('span', { style: a(), class: Hc([m, s]) }, [
					(l = t.default) == null ? void 0 : l.call(t),
					g,
				]);
			};
		return () =>
			d(
				Vo,
				{ name: e.closeable ? 'van-fade' : void 0 },
				{ default: () => [e.show ? i() : null] },
			);
	},
});
const Qi = G(op),
	as = {
		name: ze,
		disabled: Boolean,
		iconSize: q,
		modelValue: ze,
		checkedColor: String,
		labelPosition: String,
		labelDisabled: Boolean,
	};
var If = j({
	props: de({}, as, {
		bem: Ye(Function),
		role: String,
		shape: String,
		parent: Object,
		checked: Boolean,
		bindGroup: z,
		indeterminate: { type: Boolean, default: null },
	}),
	emits: ['click', 'toggle'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = h => {
				if (e.parent && e.bindGroup) return e.parent.props[h];
			},
			i = L(() => {
				if (e.parent && e.bindGroup) {
					const h = a('disabled') || e.disabled;
					if (e.role === 'checkbox') {
						const m = a('modelValue').length,
							g = a('max'),
							y = g && m >= +g;
						return h || (y && !e.checked);
					}
					return h;
				}
				return e.disabled;
			}),
			l = L(() => a('direction')),
			s = L(() => {
				const h = e.checkedColor || a('checkedColor');
				if (h && e.checked && !i.value)
					return { borderColor: h, backgroundColor: h };
			}),
			r = L(() => e.shape || a('shape') || 'round'),
			c = h => {
				const { target: m } = h,
					g = o.value,
					y = g === m || (g == null ? void 0 : g.contains(m));
				!i.value && (y || !e.labelDisabled) && t('toggle'), t('click', h);
			},
			u = () => {
				var h, m;
				const { bem: g, checked: y, indeterminate: v } = e,
					w = e.iconSize || a('iconSize');
				return d(
					'div',
					{
						ref: o,
						class: g('icon', [
							r.value,
							{ disabled: i.value, checked: y, indeterminate: v },
						]),
						style:
							r.value !== 'dot'
								? { fontSize: we(w) }
								: {
										width: we(w),
										height: we(w),
										borderColor: (h = s.value) == null ? void 0 : h.borderColor,
									},
					},
					[
						n.icon
							? n.icon({ checked: y, disabled: i.value })
							: r.value !== 'dot'
								? d(Ce, { name: v ? 'minus' : 'success', style: s.value }, null)
								: d(
										'div',
										{
											class: g('icon--dot__icon'),
											style: {
												backgroundColor:
													(m = s.value) == null ? void 0 : m.backgroundColor,
											},
										},
										null,
									),
					],
				);
			},
			f = () => {
				const { checked: h } = e;
				if (n.default)
					return d(
						'span',
						{ class: e.bem('label', [e.labelPosition, { disabled: i.value }]) },
						[n.default({ checked: h, disabled: i.value })],
					);
			};
		return () => {
			const h = e.labelPosition === 'left' ? [f(), u()] : [u(), f()];
			return d(
				'div',
				{
					role: e.role,
					class: e.bem([
						{ disabled: i.value, 'label-disabled': e.labelDisabled },
						l.value,
					]),
					tabindex: i.value ? void 0 : 0,
					'aria-checked': e.checked,
					onClick: c,
				},
				[h],
			);
		};
	},
});
const ap = de({}, as, { shape: String }),
	[ip, lp] = U('radio');
var rp = j({
	name: ip,
	props: ap,
	emits: ['update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { parent: o } = ot(Pf),
			a = () => (o ? o.props.modelValue : e.modelValue) === e.name,
			i = () => {
				o ? o.updateValue(e.name) : t('update:modelValue', e.name);
			};
		return () =>
			d(
				If,
				_e({ bem: lp, role: 'radio', parent: o, checked: a(), onToggle: i }, e),
				Ie(n, ['default', 'icon']),
			);
	},
});
const is = G(rp),
	[sp, vo] = U('address-item');
var cp = j({
	name: sp,
	props: {
		address: Ye(Object),
		disabled: Boolean,
		switchable: Boolean,
		defaultTagText: String,
		rightIcon: Z('edit'),
	},
	emits: ['edit', 'click', 'select'],
	setup(e, { slots: t, emit: n }) {
		const o = s => {
				e.switchable && n('select'), n('click', s);
			},
			a = () =>
				d(
					Ce,
					{
						name: e.rightIcon,
						class: vo('edit'),
						onClick: s => {
							s.stopPropagation(), n('edit'), n('click', s);
						},
					},
					null,
				),
			i = () => {
				if (t.tag) return t.tag(e.address);
				if (e.address.isDefault && e.defaultTagText)
					return d(
						Qi,
						{ type: 'primary', round: !0, class: vo('tag') },
						{ default: () => [e.defaultTagText] },
					);
			},
			l = () => {
				const { address: s, disabled: r, switchable: c } = e,
					u = [
						d('div', { class: vo('name') }, [`${s.name} ${s.tel}`, i()]),
						d('div', { class: vo('address') }, [s.address]),
					];
				return c && !r
					? d(is, { name: s.id, iconSize: 18 }, { default: () => [u] })
					: u;
			};
		return () => {
			var s;
			const { disabled: r } = e;
			return d('div', { class: vo({ disabled: r }), onClick: o }, [
				d(
					Ht,
					{ border: !1, titleClass: vo('title') },
					{ title: l, 'right-icon': a },
				),
				(s = t.bottom) == null
					? void 0
					: s.call(t, de({}, e.address, { disabled: r })),
			]);
		};
	},
});
const [up, Wa, dp] = U('address-list'),
	fp = {
		list: Ne(),
		modelValue: q,
		switchable: z,
		disabledText: String,
		disabledList: Ne(),
		showAddButton: z,
		addButtonText: String,
		defaultTagText: String,
		rightIcon: Z('edit'),
	};
var hp = j({
	name: up,
	props: fp,
	emits: [
		'add',
		'edit',
		'select',
		'clickItem',
		'editDisabled',
		'selectDisabled',
		'update:modelValue',
	],
	setup(e, { slots: t, emit: n }) {
		const o = (l, s, r) => {
				const c = () => n(r ? 'editDisabled' : 'edit', l, s),
					u = h => n('clickItem', l, s, { event: h }),
					f = () => {
						n(r ? 'selectDisabled' : 'select', l, s),
							r || n('update:modelValue', l.id);
					};
				return d(
					cp,
					{
						key: l.id,
						address: l,
						disabled: r,
						switchable: e.switchable,
						defaultTagText: e.defaultTagText,
						rightIcon: e.rightIcon,
						onEdit: c,
						onClick: u,
						onSelect: f,
					},
					{ bottom: t['item-bottom'], tag: t.tag },
				);
			},
			a = (l, s) => {
				if (l) return l.map((r, c) => o(r, c, s));
			},
			i = () =>
				e.showAddButton
					? d('div', { class: [Wa('bottom'), 'van-safe-area-bottom'] }, [
							d(
								lt,
								{
									round: !0,
									block: !0,
									type: 'primary',
									text: e.addButtonText || dp('add'),
									class: Wa('add'),
									onClick: () => n('add'),
								},
								null,
							),
						])
					: void 0;
		return () => {
			var l, s;
			const r = a(e.list),
				c = a(e.disabledList, !0),
				u =
					e.disabledText &&
					d('div', { class: Wa('disabled-text') }, [e.disabledText]);
			return d('div', { class: Wa() }, [
				(l = t.top) == null ? void 0 : l.call(t),
				d(os, { modelValue: e.modelValue }, { default: () => [r] }),
				u,
				c,
				(s = t.default) == null ? void 0 : s.call(t),
				i(),
			]);
		};
	},
});
const mp = G(hp);
function gp(e, t) {
	let n = null,
		o = 0;
	return function (...a) {
		if (n) return;
		const i = Date.now() - o,
			l = () => {
				(o = Date.now()), (n = !1), e.apply(this, a);
			};
		i >= t ? l() : (n = setTimeout(l, t));
	};
}
const [vp, Tl] = U('back-top'),
	bp = {
		right: q,
		bottom: q,
		zIndex: q,
		target: [String, Object],
		offset: ie(200),
		immediate: Boolean,
		teleport: { type: [String, Object], default: 'body' },
	};
var yp = j({
	name: vp,
	inheritAttrs: !1,
	props: bp,
	emits: ['click'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		let a = !1;
		const i = D(!1),
			l = D(),
			s = D(),
			r = L(() =>
				de(yn(e.zIndex), { right: we(e.right), bottom: we(e.bottom) }),
			),
			c = m => {
				var g;
				t('click', m),
					(g = s.value) == null ||
						g.scrollTo({ top: 0, behavior: e.immediate ? 'auto' : 'smooth' });
			},
			u = () => {
				i.value = s.value ? hn(s.value) >= +e.offset : !1;
			},
			f = () => {
				const { target: m } = e;
				if (typeof m == 'string') {
					const g = document.querySelector(m);
					if (g) return g;
				} else return m;
			},
			h = () => {
				wt &&
					Te(() => {
						(s.value = e.target ? f() : Hr(l.value)), u();
					});
			};
		return (
			We('scroll', gp(u, 100), { target: s }),
			Ue(h),
			Jt(() => {
				a && ((i.value = !0), (a = !1));
			}),
			Qt(() => {
				i.value && e.teleport && ((i.value = !1), (a = !0));
			}),
			ee(() => e.target, h),
			() => {
				const m = d(
					'div',
					_e(
						{
							ref: e.teleport ? void 0 : l,
							class: Tl({ active: i.value }),
							style: r.value,
							onClick: c,
						},
						o,
					),
					[
						n.default
							? n.default()
							: d(Ce, { name: 'back-top', class: Tl('icon') }, null),
					],
				);
				return e.teleport
					? [
							d('div', { ref: l, class: Tl('placeholder') }, null),
							d(Lo, { to: e.teleport }, { default: () => [m] }),
						]
					: m;
			}
		);
	},
});
const pp = G(yp);
var wp = (e, t, n) =>
	new Promise((o, a) => {
		var i = r => {
				try {
					s(n.next(r));
				} catch (c) {
					a(c);
				}
			},
			l = r => {
				try {
					s(n.throw(r));
				} catch (c) {
					a(c);
				}
			},
			s = r => (r.done ? o(r.value) : Promise.resolve(r.value).then(i, l));
		s((n = n.apply(e, t)).next());
	});
const xp = {
		top: ie(10),
		rows: ie(4),
		duration: ie(4e3),
		autoPlay: z,
		delay: Ke(300),
		modelValue: Ne(),
	},
	[Sp, jc] = U('barrage');
var Cp = j({
	name: Sp,
	props: xp,
	emits: ['update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = jc('item'),
			i = D(0),
			l = [],
			s = (y, v = e.delay) => {
				const w = document.createElement('span');
				return (
					(w.className = a),
					(w.innerText = String(y)),
					(w.style.animationDuration = `${e.duration}ms`),
					(w.style.animationDelay = `${v}ms`),
					(w.style.animationName = 'van-barrage'),
					(w.style.animationTimingFunction = 'linear'),
					w
				);
			},
			r = D(!0),
			c = D(e.autoPlay),
			u = ({ id: y, text: v }, w) => {
				var b;
				const C = s(v, r.value ? w * e.delay : void 0);
				!e.autoPlay &&
					c.value === !1 &&
					(C.style.animationPlayState = 'paused'),
					(b = o.value) == null || b.append(C),
					i.value++;
				const p = ((i.value - 1) % +e.rows) * C.offsetHeight + +e.top;
				(C.style.top = `${p}px`),
					(C.dataset.id = String(y)),
					l.push(C),
					C.addEventListener('animationend', () => {
						t(
							'update:modelValue',
							[...e.modelValue].filter(x => String(x.id) !== C.dataset.id),
						);
					});
			},
			f = (y, v) => {
				const w = new Map(v.map(b => [b.id, b]));
				y.forEach((b, C) => {
					w.has(b.id) ? w.delete(b.id) : u(b, C);
				}),
					w.forEach(b => {
						const C = l.findIndex(p => p.dataset.id === String(b.id));
						C > -1 && (l[C].remove(), l.splice(C, 1));
					}),
					(r.value = !1);
			};
		ee(
			() => e.modelValue.slice(),
			(y, v) => f(y ?? [], v ?? []),
			{ deep: !0 },
		);
		const h = D({});
		return (
			Ue(() =>
				wp(this, null, function* () {
					var y;
					(h.value['--move-distance'] =
						`-${(y = o.value) == null ? void 0 : y.offsetWidth}px`),
						yield Te(),
						f(e.modelValue, []);
				}),
			),
			ke({
				play: () => {
					(c.value = !0),
						l.forEach(y => {
							y.style.animationPlayState = 'running';
						});
				},
				pause: () => {
					(c.value = !1),
						l.forEach(y => {
							y.style.animationPlayState = 'paused';
						});
				},
			}),
			() => {
				var y;
				return d('div', { class: jc(), ref: o, style: h.value }, [
					(y = n.default) == null ? void 0 : y.call(n),
				]);
			}
		);
	},
});
const Tp = G(Cp),
	[_p, Xe, dn] = U('calendar'),
	kp = e => dn('monthTitle', e.getFullYear(), e.getMonth() + 1);
function ur(e, t) {
	const n = e.getFullYear(),
		o = t.getFullYear();
	if (n === o) {
		const a = e.getMonth(),
			i = t.getMonth();
		return a === i ? 0 : a > i ? 1 : -1;
	}
	return n > o ? 1 : -1;
}
function yt(e, t) {
	const n = ur(e, t);
	if (n === 0) {
		const o = e.getDate(),
			a = t.getDate();
		return o === a ? 0 : o > a ? 1 : -1;
	}
	return n;
}
const Ti = e => new Date(e),
	Wc = e => (Array.isArray(e) ? e.map(Ti) : Ti(e));
function ls(e, t) {
	const n = Ti(e);
	return n.setDate(n.getDate() + t), n;
}
const dr = e => ls(e, -1),
	Af = e => ls(e, 1),
	fr = () => {
		const e = new Date();
		return e.setHours(0, 0, 0, 0), e;
	};
function Ep(e) {
	const t = e[0].getTime();
	return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1;
}
const Rf = de({}, Xi, {
		modelValue: Ne(),
		filter: Function,
		formatter: { type: Function, default: (e, t) => t },
	}),
	Of = Object.keys(Xi);
function $p(e, t) {
	if (e < 0) return [];
	const n = Array(e);
	let o = -1;
	for (; ++o < e; ) n[o] = t(o);
	return n;
}
const Bf = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
	Po = (e, t, n, o, a, i) => {
		const l = $p(t - e + 1, s => {
			const r = Ot(e + s);
			return o(n, { text: r, value: r });
		});
		return a ? a(n, l, i) : l;
	},
	Df = (e, t) =>
		e.map((n, o) => {
			const a = t[o];
			if (a.length) {
				const i = +a[0].value,
					l = +a[a.length - 1].value;
				return Ot(et(+n, i, l));
			}
			return n;
		}),
	[Pp] = U('calendar-day');
var Ip = j({
	name: Pp,
	props: {
		item: Ye(Object),
		color: String,
		index: Number,
		offset: Ke(0),
		rowHeight: String,
	},
	emits: ['click', 'clickDisabledDate'],
	setup(e, { emit: t, slots: n }) {
		const o = L(() => {
				var r;
				const { item: c, index: u, color: f, offset: h, rowHeight: m } = e,
					g = { height: m };
				if (c.type === 'placeholder') return (g.width = '100%'), g;
				if ((u === 0 && (g.marginLeft = `${(100 * h) / 7}%`), f))
					switch (c.type) {
						case 'end':
						case 'start':
						case 'start-end':
						case 'multiple-middle':
						case 'multiple-selected':
							g.background = f;
							break;
						case 'middle':
							g.color = f;
							break;
					}
				return (
					h + (((r = c.date) == null ? void 0 : r.getDate()) || 1) > 28 &&
						(g.marginBottom = 0),
					g
				);
			}),
			a = () => {
				e.item.type !== 'disabled'
					? t('click', e.item)
					: t('clickDisabledDate', e.item);
			},
			i = () => {
				const { topInfo: r } = e.item;
				if (r || n['top-info'])
					return d('div', { class: Xe('top-info') }, [
						n['top-info'] ? n['top-info'](e.item) : r,
					]);
			},
			l = () => {
				const { bottomInfo: r } = e.item;
				if (r || n['bottom-info'])
					return d('div', { class: Xe('bottom-info') }, [
						n['bottom-info'] ? n['bottom-info'](e.item) : r,
					]);
			},
			s = () => {
				const { item: r, color: c, rowHeight: u } = e,
					{ type: f, text: h } = r,
					m = [i(), h, l()];
				return f === 'selected'
					? d(
							'div',
							{
								class: Xe('selected-day'),
								style: { width: u, height: u, background: c },
							},
							[m],
						)
					: m;
			};
		return () => {
			const { type: r, className: c } = e.item;
			return r === 'placeholder'
				? d('div', { class: Xe('day'), style: o.value }, null)
				: d(
						'div',
						{
							role: 'gridcell',
							style: o.value,
							class: [Xe('day', r), c],
							tabindex: r === 'disabled' ? void 0 : -1,
							onClick: a,
						},
						[s()],
					);
		};
	},
});
const [Ap] = U('calendar-month'),
	Rp = {
		date: Ye(Date),
		type: String,
		color: String,
		minDate: Ye(Date),
		maxDate: Ye(Date),
		showMark: Boolean,
		rowHeight: q,
		formatter: Function,
		lazyRender: Boolean,
		currentDate: [Date, Array],
		allowSameDay: Boolean,
		showSubtitle: Boolean,
		showMonthTitle: Boolean,
		firstDayOfWeek: Number,
	};
var Op = j({
	name: Ap,
	props: Rp,
	emits: ['click', 'clickDisabledDate'],
	setup(e, { emit: t, slots: n }) {
		const [o, a] = db(),
			i = D(),
			l = D(),
			s = Qd(l),
			r = L(() => kp(e.date)),
			c = L(() => we(e.rowHeight)),
			u = L(() => {
				const I = e.date.getDay();
				return e.firstDayOfWeek ? (I + 7 - e.firstDayOfWeek) % 7 : I;
			}),
			f = L(() => Bf(e.date.getFullYear(), e.date.getMonth() + 1)),
			h = L(() => o.value || !e.lazyRender),
			m = () => r.value,
			g = I => {
				const k = $ => e.currentDate.some(B => yt(B, $) === 0);
				if (k(I)) {
					const $ = dr(I),
						B = Af(I),
						X = k($),
						V = k(B);
					return X && V
						? 'multiple-middle'
						: X
							? 'end'
							: V
								? 'start'
								: 'multiple-selected';
				}
				return '';
			},
			y = I => {
				const [k, $] = e.currentDate;
				if (!k) return '';
				const B = yt(I, k);
				if (!$) return B === 0 ? 'start' : '';
				const X = yt(I, $);
				return e.allowSameDay && B === 0 && X === 0
					? 'start-end'
					: B === 0
						? 'start'
						: X === 0
							? 'end'
							: B > 0 && X < 0
								? 'middle'
								: '';
			},
			v = I => {
				const { type: k, minDate: $, maxDate: B, currentDate: X } = e;
				if (yt(I, $) < 0 || yt(I, B) > 0) return 'disabled';
				if (X === null) return '';
				if (Array.isArray(X)) {
					if (k === 'multiple') return g(I);
					if (k === 'range') return y(I);
				} else if (k === 'single') return yt(I, X) === 0 ? 'selected' : '';
				return '';
			},
			w = I => {
				if (e.type === 'range') {
					if (I === 'start' || I === 'end') return dn(I);
					if (I === 'start-end') return `${dn('start')}/${dn('end')}`;
				}
			},
			b = () => {
				if (e.showMonthTitle)
					return d('div', { class: Xe('month-title') }, [
						n['month-title']
							? n['month-title']({ date: e.date, text: r.value })
							: r.value,
					]);
			},
			C = () => {
				if (e.showMark && h.value)
					return d('div', { class: Xe('month-mark') }, [e.date.getMonth() + 1]);
			},
			p = L(() => {
				const I = Math.ceil((f.value + u.value) / 7);
				return Array(I).fill({ type: 'placeholder' });
			}),
			x = L(() => {
				const I = [],
					k = e.date.getFullYear(),
					$ = e.date.getMonth();
				for (let B = 1; B <= f.value; B++) {
					const X = new Date(k, $, B),
						V = v(X);
					let O = { date: X, type: V, text: B, bottomInfo: w(V) };
					e.formatter && (O = e.formatter(O)), I.push(O);
				}
				return I;
			}),
			T = L(() => x.value.filter(I => I.type === 'disabled')),
			R = (I, k) => {
				if (i.value) {
					const $ = Ae(i.value),
						B = p.value.length,
						V = ((Math.ceil((k.getDate() + u.value) / 7) - 1) * $.height) / B;
					xi(I, $.top + V + I.scrollTop - Ae(I).top);
				}
			},
			S = (I, k) =>
				d(
					Ip,
					{
						item: I,
						index: k,
						color: e.color,
						offset: u.value,
						rowHeight: c.value,
						onClick: $ => t('click', $),
						onClickDisabledDate: $ => t('clickDisabledDate', $),
					},
					Ie(n, ['top-info', 'bottom-info']),
				),
			A = () =>
				d('div', { ref: i, role: 'grid', class: Xe('days') }, [
					C(),
					(h.value ? x : p).value.map(S),
				]);
		return (
			ke({
				getTitle: m,
				getHeight: () => s.value,
				setVisible: a,
				scrollToDate: R,
				disabledDays: T,
			}),
			() => d('div', { class: Xe('month'), ref: l }, [b(), A()])
		);
	},
});
const [Bp] = U('calendar-header');
var Dp = j({
	name: Bp,
	props: {
		date: Date,
		title: String,
		subtitle: String,
		showTitle: Boolean,
		showSubtitle: Boolean,
		firstDayOfWeek: Number,
	},
	emits: ['clickSubtitle'],
	setup(e, { slots: t, emit: n }) {
		const o = () => {
				if (e.showTitle) {
					const s = e.title || dn('title'),
						r = t.title ? t.title() : s;
					return d('div', { class: Xe('header-title') }, [r]);
				}
			},
			a = s => n('clickSubtitle', s),
			i = () => {
				if (e.showSubtitle) {
					const s = t.subtitle
						? t.subtitle({ date: e.date, text: e.subtitle })
						: e.subtitle;
					return d('div', { class: Xe('header-subtitle'), onClick: a }, [s]);
				}
			},
			l = () => {
				const { firstDayOfWeek: s } = e,
					r = dn('weekdays'),
					c = [...r.slice(s, 7), ...r.slice(0, s)];
				return d('div', { class: Xe('weekdays') }, [
					c.map(u => d('span', { class: Xe('weekday') }, [u])),
				]);
			};
		return () => d('div', { class: Xe('header') }, [o(), i(), l()]);
	},
});
const Mp = {
	show: Boolean,
	type: Z('single'),
	title: String,
	color: String,
	round: z,
	readonly: Boolean,
	poppable: z,
	maxRange: ie(null),
	position: Z('bottom'),
	teleport: [String, Object],
	showMark: z,
	showTitle: z,
	formatter: Function,
	rowHeight: q,
	confirmText: String,
	rangePrompt: String,
	lazyRender: z,
	showConfirm: z,
	defaultDate: [Date, Array],
	allowSameDay: Boolean,
	showSubtitle: z,
	closeOnPopstate: z,
	showRangePrompt: z,
	confirmDisabledText: String,
	closeOnClickOverlay: z,
	safeAreaInsetTop: Boolean,
	safeAreaInsetBottom: z,
	minDate: { type: Date, validator: Sa, default: fr },
	maxDate: {
		type: Date,
		validator: Sa,
		default: () => {
			const e = fr();
			return new Date(e.getFullYear(), e.getMonth() + 6, e.getDate());
		},
	},
	firstDayOfWeek: { type: q, default: 0, validator: e => e >= 0 && e <= 6 },
};
var Lp = j({
	name: _p,
	props: Mp,
	emits: [
		'select',
		'confirm',
		'unselect',
		'monthShow',
		'overRange',
		'update:show',
		'clickSubtitle',
		'clickDisabledDate',
	],
	setup(e, { emit: t, slots: n }) {
		const o = (V, O = e.minDate, F = e.maxDate) =>
				yt(V, O) === -1 ? O : yt(V, F) === 1 ? F : V,
			a = (V = e.defaultDate) => {
				const { type: O, minDate: F, maxDate: Y, allowSameDay: me } = e;
				if (V === null) return V;
				const ve = fr();
				if (O === 'range') {
					Array.isArray(V) || (V = []);
					const ne = o(V[0] || ve, F, me ? Y : dr(Y)),
						se = o(V[1] || ve, me ? F : Af(F));
					return [ne, se];
				}
				return O === 'multiple'
					? Array.isArray(V)
						? V.map(ne => o(ne))
						: [o(ve)]
					: ((!V || Array.isArray(V)) && (V = ve), o(V));
			};
		let i;
		const l = D(),
			s = D({ textFn: () => '', date: void 0 }),
			r = D(a()),
			[c, u] = Pa(),
			f = L(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
			h = L(() => {
				const V = [],
					O = new Date(e.minDate);
				O.setDate(1);
				do V.push(new Date(O)), O.setMonth(O.getMonth() + 1);
				while (ur(O, e.maxDate) !== 1);
				return V;
			}),
			m = L(() => {
				if (r.value) {
					if (e.type === 'range') return !r.value[0] || !r.value[1];
					if (e.type === 'multiple') return !r.value.length;
				}
				return !r.value;
			}),
			g = () => r.value,
			y = () => {
				const V = hn(l.value),
					O = V + i,
					F = h.value.map((se, be) => c.value[be].getHeight()),
					Y = F.reduce((se, be) => se + be, 0);
				if (O > Y && V > 0) return;
				let me = 0,
					ve;
				const ne = [-1, -1];
				for (let se = 0; se < h.value.length; se++) {
					const be = c.value[se];
					me <= O &&
						me + F[se] >= V &&
						((ne[1] = se),
						ve || ((ve = be), (ne[0] = se)),
						c.value[se].showed ||
							((c.value[se].showed = !0),
							t('monthShow', { date: be.date, title: be.getTitle() }))),
						(me += F[se]);
				}
				h.value.forEach((se, be) => {
					const De = be >= ne[0] - 1 && be <= ne[1] + 1;
					c.value[be].setVisible(De);
				}),
					ve && (s.value = { textFn: ve.getTitle, date: ve.date });
			},
			v = V => {
				it(() => {
					h.value.some((O, F) =>
						ur(O, V) === 0
							? (l.value && c.value[F].scrollToDate(l.value, V), !0)
							: !1,
					),
						y();
				});
			},
			w = () => {
				if (!(e.poppable && !e.show))
					if (r.value) {
						const V = e.type === 'single' ? r.value : r.value[0];
						Sa(V) && v(V);
					} else it(y);
			},
			b = () => {
				(e.poppable && !e.show) ||
					(it(() => {
						i = Math.floor(Ae(l).height);
					}),
					w());
			},
			C = (V = a()) => {
				(r.value = V), w();
			},
			p = V => {
				const { maxRange: O, rangePrompt: F, showRangePrompt: Y } = e;
				return O && Ep(V) > +O
					? (Y && cr(F || dn('rangePrompt', O)), t('overRange'), !1)
					: !0;
			},
			x = () => {
				var V;
				return t('confirm', (V = r.value) != null ? V : Wc(r.value));
			},
			T = (V, O) => {
				const F = Y => {
					(r.value = Y), t('select', Wc(Y));
				};
				if (O && e.type === 'range' && !p(V)) {
					F([V[0], ls(V[0], +e.maxRange - 1)]);
					return;
				}
				F(V), O && !e.showConfirm && x();
			},
			R = (V, O, F) => {
				var Y;
				return (Y = V.find(
					me => yt(O, me.date) === -1 && yt(me.date, F) === -1,
				)) == null
					? void 0
					: Y.date;
			},
			S = L(() =>
				c.value.reduce((V, O) => {
					var F, Y;
					return (
						V.push(
							...((Y = (F = O.disabledDays) == null ? void 0 : F.value) != null
								? Y
								: []),
						),
						V
					);
				}, []),
			),
			A = V => {
				if (e.readonly || !V.date) return;
				const { date: O } = V,
					{ type: F } = e;
				if (F === 'range') {
					if (!r.value) {
						T([O]);
						return;
					}
					const [Y, me] = r.value;
					if (Y && !me) {
						const ve = yt(O, Y);
						if (ve === 1) {
							const ne = R(S.value, Y, O);
							if (ne) {
								const se = dr(ne);
								yt(Y, se) === -1 ? T([Y, se]) : T([O]);
							} else T([Y, O], !0);
						} else ve === -1 ? T([O]) : e.allowSameDay && T([O, O], !0);
					} else T([O]);
				} else if (F === 'multiple') {
					if (!r.value) {
						T([O]);
						return;
					}
					const Y = r.value,
						me = Y.findIndex(ve => yt(ve, O) === 0);
					if (me !== -1) {
						const [ve] = Y.splice(me, 1);
						t('unselect', Ti(ve));
					} else
						e.maxRange && Y.length >= +e.maxRange
							? cr(e.rangePrompt || dn('rangePrompt', e.maxRange))
							: T([...Y, O]);
				} else T(O, !0);
			},
			I = V => t('update:show', V),
			k = (V, O) => {
				const F = O !== 0 || !e.showSubtitle;
				return d(
					Op,
					_e(
						{
							ref: u(O),
							date: V,
							currentDate: r.value,
							showMonthTitle: F,
							firstDayOfWeek: f.value,
						},
						Ie(e, [
							'type',
							'color',
							'minDate',
							'maxDate',
							'showMark',
							'formatter',
							'rowHeight',
							'lazyRender',
							'showSubtitle',
							'allowSameDay',
						]),
						{ onClick: A, onClickDisabledDate: Y => t('clickDisabledDate', Y) },
					),
					Ie(n, ['top-info', 'bottom-info', 'month-title']),
				);
			},
			$ = () => {
				if (n.footer) return n.footer();
				if (e.showConfirm) {
					const V = n['confirm-text'],
						O = m.value,
						F = O ? e.confirmDisabledText : e.confirmText;
					return d(
						lt,
						{
							round: !0,
							block: !0,
							type: 'primary',
							color: e.color,
							class: Xe('confirm'),
							disabled: O,
							nativeType: 'button',
							onClick: x,
						},
						{ default: () => [V ? V({ disabled: O }) : F || dn('confirm')] },
					);
				}
			},
			B = () =>
				d(
					'div',
					{
						class: [
							Xe('footer'),
							{ 'van-safe-area-bottom': e.safeAreaInsetBottom },
						],
					},
					[$()],
				),
			X = () => {
				const V = s.value.textFn();
				return d('div', { class: Xe() }, [
					d(
						Dp,
						{
							date: s.value.date,
							title: e.title,
							subtitle: V,
							showTitle: e.showTitle,
							showSubtitle: e.showSubtitle,
							firstDayOfWeek: f.value,
							onClickSubtitle: O => t('clickSubtitle', O),
						},
						Ie(n, ['title', 'subtitle']),
					),
					d('div', { ref: l, class: Xe('body'), onScroll: y }, [
						h.value.map(k),
					]),
					B(),
				]);
			};
		return (
			ee(() => e.show, b),
			ee(
				() => [e.type, e.minDate, e.maxDate],
				() => C(a(r.value)),
			),
			ee(
				() => e.defaultDate,
				(V = null) => {
					(r.value = V), w();
				},
			),
			ke({ reset: C, scrollToDate: v, getSelectedDate: g }),
			No(b),
			() =>
				e.poppable
					? d(
							zt,
							{
								show: e.show,
								class: Xe('popup'),
								round: e.round,
								position: e.position,
								closeable: e.showTitle || e.showSubtitle,
								teleport: e.teleport,
								closeOnPopstate: e.closeOnPopstate,
								safeAreaInsetTop: e.safeAreaInsetTop,
								closeOnClickOverlay: e.closeOnClickOverlay,
								'onUpdate:show': I,
							},
							{ default: X },
						)
					: X()
		);
	},
});
const Vp = G(Lp),
	[Np, bo] = U('image'),
	Fp = {
		src: String,
		alt: String,
		fit: String,
		position: String,
		round: Boolean,
		block: Boolean,
		width: q,
		height: q,
		radius: q,
		lazyLoad: Boolean,
		iconSize: q,
		showError: z,
		errorIcon: Z('photo-fail'),
		iconPrefix: String,
		showLoading: z,
		loadingIcon: Z('photo'),
		crossorigin: String,
		referrerpolicy: String,
	};
var zp = j({
	name: Np,
	props: Fp,
	emits: ['load', 'error'],
	setup(e, { emit: t, slots: n }) {
		const o = D(!1),
			a = D(!0),
			i = D(),
			{ $Lazyload: l } = Nt().proxy,
			s = L(() => {
				const v = { width: we(e.width), height: we(e.height) };
				return (
					$e(e.radius) &&
						((v.overflow = 'hidden'), (v.borderRadius = we(e.radius))),
					v
				);
			});
		ee(
			() => e.src,
			() => {
				(o.value = !1), (a.value = !0);
			},
		);
		const r = v => {
				a.value && ((a.value = !1), t('load', v));
			},
			c = () => {
				const v = new Event('load');
				Object.defineProperty(v, 'target', { value: i.value, enumerable: !0 }),
					r(v);
			},
			u = v => {
				(o.value = !0), (a.value = !1), t('error', v);
			},
			f = (v, w, b) =>
				b
					? b()
					: d(
							Ce,
							{
								name: v,
								size: e.iconSize,
								class: w,
								classPrefix: e.iconPrefix,
							},
							null,
						),
			h = () => {
				if (a.value && e.showLoading)
					return d('div', { class: bo('loading') }, [
						f(e.loadingIcon, bo('loading-icon'), n.loading),
					]);
				if (o.value && e.showError)
					return d('div', { class: bo('error') }, [
						f(e.errorIcon, bo('error-icon'), n.error),
					]);
			},
			m = () => {
				if (o.value || !e.src) return;
				const v = {
					alt: e.alt,
					class: bo('img'),
					style: { objectFit: e.fit, objectPosition: e.position },
					crossorigin: e.crossorigin,
					referrerpolicy: e.referrerpolicy,
				};
				return e.lazyLoad
					? Qe(d('img', _e({ ref: i }, v), null), [[wm('lazy'), e.src]])
					: d(
							'img',
							_e({ ref: i, src: e.src, onLoad: r, onError: u }, v),
							null,
						);
			},
			g = ({ el: v }) => {
				const w = () => {
					v === i.value && a.value && c();
				};
				i.value ? w() : Te(w);
			},
			y = ({ el: v }) => {
				v === i.value && !o.value && u();
			};
		return (
			l &&
				wt &&
				(l.$on('loaded', g),
				l.$on('error', y),
				en(() => {
					l.$off('loaded', g), l.$off('error', y);
				})),
			Ue(() => {
				Te(() => {
					var v;
					(v = i.value) != null && v.complete && !e.lazyLoad && c();
				});
			}),
			() => {
				var v;
				return d(
					'div',
					{ class: bo({ round: e.round, block: e.block }), style: s.value },
					[m(), h(), (v = n.default) == null ? void 0 : v.call(n)],
				);
			}
		);
	},
});
const el = G(zp),
	[Hp, ct] = U('card'),
	jp = {
		tag: String,
		num: q,
		desc: String,
		thumb: String,
		title: String,
		price: q,
		centered: Boolean,
		lazyLoad: Boolean,
		currency: Z('¥'),
		thumbLink: String,
		originPrice: q,
	};
var Wp = j({
	name: Hp,
	props: jp,
	emits: ['clickThumb'],
	setup(e, { slots: t, emit: n }) {
		const o = () => {
				if (t.title) return t.title();
				if (e.title)
					return d('div', { class: [ct('title'), 'van-multi-ellipsis--l2'] }, [
						e.title,
					]);
			},
			a = () => {
				if (t.tag || e.tag)
					return d('div', { class: ct('tag') }, [
						t.tag
							? t.tag()
							: d(
									Qi,
									{ mark: !0, type: 'primary' },
									{ default: () => [e.tag] },
								),
					]);
			},
			i = () =>
				t.thumb
					? t.thumb()
					: d(
							el,
							{
								src: e.thumb,
								fit: 'cover',
								width: '100%',
								height: '100%',
								lazyLoad: e.lazyLoad,
							},
							null,
						),
			l = () => {
				if (t.thumb || e.thumb)
					return d(
						'a',
						{
							href: e.thumbLink,
							class: ct('thumb'),
							onClick: c => n('clickThumb', c),
						},
						[i(), a()],
					);
			},
			s = () => {
				if (t.desc) return t.desc();
				if (e.desc)
					return d('div', { class: [ct('desc'), 'van-ellipsis'] }, [e.desc]);
			},
			r = () => {
				const c = e.price.toString().split('.');
				return d('div', null, [
					d('span', { class: ct('price-currency') }, [e.currency]),
					d('span', { class: ct('price-integer') }, [c[0]]),
					no('.'),
					d('span', { class: ct('price-decimal') }, [c[1]]),
				]);
			};
		return () => {
			var c, u, f;
			const h = t.num || $e(e.num),
				m = t.price || $e(e.price),
				g = t['origin-price'] || $e(e.originPrice),
				y = h || m || g || t.bottom,
				v = m && d('div', { class: ct('price') }, [t.price ? t.price() : r()]),
				w =
					g &&
					d('div', { class: ct('origin-price') }, [
						t['origin-price']
							? t['origin-price']()
							: `${e.currency} ${e.originPrice}`,
					]),
				b =
					h && d('div', { class: ct('num') }, [t.num ? t.num() : `x${e.num}`]),
				C = t.footer && d('div', { class: ct('footer') }, [t.footer()]),
				p =
					y &&
					d('div', { class: ct('bottom') }, [
						(c = t['price-top']) == null ? void 0 : c.call(t),
						v,
						w,
						b,
						(u = t.bottom) == null ? void 0 : u.call(t),
					]);
			return d('div', { class: ct() }, [
				d('div', { class: ct('header') }, [
					l(),
					d('div', { class: ct('content', { centered: e.centered }) }, [
						d('div', null, [
							o(),
							s(),
							(f = t.tags) == null ? void 0 : f.call(t),
						]),
						p,
					]),
				]),
				C,
			]);
		};
	},
});
const Up = G(Wp),
	[Yp, on, Kp] = U('cascader'),
	qp = {
		title: String,
		options: Ne(),
		closeable: z,
		swipeable: z,
		closeIcon: Z('cross'),
		showHeader: z,
		modelValue: q,
		fieldNames: Object,
		placeholder: String,
		activeColor: String,
	};
var Gp = j({
	name: Yp,
	props: qp,
	emits: ['close', 'change', 'finish', 'clickTab', 'update:modelValue'],
	setup(e, { slots: t, emit: n }) {
		const o = D([]),
			a = D(0),
			[i, l] = Pa(),
			{
				text: s,
				value: r,
				children: c,
			} = de(
				{ text: 'text', value: 'value', children: 'children' },
				e.fieldNames,
			),
			u = (x, T) => {
				for (const R of x) {
					if (R[r] === T) return [R];
					if (R[c]) {
						const S = u(R[c], T);
						if (S) return [R, ...S];
					}
				}
			},
			f = () => {
				const { options: x, modelValue: T } = e;
				if (T !== void 0) {
					const R = u(x, T);
					if (R) {
						let S = x;
						(o.value = R.map(A => {
							const I = { options: S, selected: A },
								k = S.find($ => $[r] === A[r]);
							return k && (S = k[c]), I;
						})),
							S && o.value.push({ options: S, selected: null }),
							Te(() => {
								a.value = o.value.length - 1;
							});
						return;
					}
				}
				o.value = [{ options: x, selected: null }];
			},
			h = (x, T) => {
				if (x.disabled) return;
				if (
					((o.value[T].selected = x),
					o.value.length > T + 1 && (o.value = o.value.slice(0, T + 1)),
					x[c])
				) {
					const A = { options: x[c], selected: null };
					o.value[T + 1] ? (o.value[T + 1] = A) : o.value.push(A),
						Te(() => {
							a.value++;
						});
				}
				const R = o.value.map(A => A.selected).filter(Boolean);
				n('update:modelValue', x[r]);
				const S = { value: x[r], tabIndex: T, selectedOptions: R };
				n('change', S), x[c] || n('finish', S);
			},
			m = () => n('close'),
			g = ({ name: x, title: T }) => n('clickTab', x, T),
			y = () =>
				e.showHeader
					? d('div', { class: on('header') }, [
							d('h2', { class: on('title') }, [t.title ? t.title() : e.title]),
							e.closeable
								? d(
										Ce,
										{
											name: e.closeIcon,
											class: [on('close-icon'), vt],
											onClick: m,
										},
										null,
									)
								: null,
						])
					: null,
			v = (x, T, R) => {
				const { disabled: S } = x,
					A = !!(T && x[r] === T[r]),
					I = x.color || (A ? e.activeColor : void 0),
					k = t.option
						? t.option({ option: x, selected: A })
						: d('span', null, [x[s]]);
				return d(
					'li',
					{
						ref: A ? l(R) : void 0,
						role: 'menuitemradio',
						class: [on('option', { selected: A, disabled: S }), x.className],
						style: { color: I },
						tabindex: S ? void 0 : A ? 0 : -1,
						'aria-checked': A,
						'aria-disabled': S || void 0,
						onClick: () => h(x, R),
					},
					[
						k,
						A
							? d(Ce, { name: 'success', class: on('selected-icon') }, null)
							: null,
					],
				);
			},
			w = (x, T, R) =>
				d('ul', { role: 'menu', class: on('options') }, [
					x.map(S => v(S, T, R)),
				]),
			b = (x, T) => {
				const { options: R, selected: S } = x,
					A = e.placeholder || Kp('select'),
					I = S ? S[s] : A;
				return d(
					Ca,
					{ title: I, titleClass: on('tab', { unselected: !S }) },
					{
						default: () => {
							var k, $;
							return [
								(k = t['options-top']) == null
									? void 0
									: k.call(t, { tabIndex: T }),
								w(R, S, T),
								($ = t['options-bottom']) == null
									? void 0
									: $.call(t, { tabIndex: T }),
							];
						},
					},
				);
			},
			C = () =>
				d(
					Gi,
					{
						active: a.value,
						'onUpdate:active': x => (a.value = x),
						shrink: !0,
						animated: !0,
						class: on('tabs'),
						color: e.activeColor,
						swipeable: e.swipeable,
						onClickTab: g,
					},
					{ default: () => [o.value.map(b)] },
				),
			p = x => {
				const T = x.parentElement;
				T &&
					(T.scrollTop = x.offsetTop - (T.offsetHeight - x.offsetHeight) / 2);
			};
		return (
			f(),
			ee(a, x => {
				const T = i.value[x];
				T && p(T);
			}),
			ee(() => e.options, f, { deep: !0 }),
			ee(
				() => e.modelValue,
				x => {
					(x !== void 0 &&
						o.value
							.map(R => {
								var S;
								return (S = R.selected) == null ? void 0 : S[r];
							})
							.includes(x)) ||
						f();
				},
			),
			() => d('div', { class: on() }, [y(), C()])
		);
	},
});
const Xp = G(Gp),
	[Zp, Uc] = U('cell-group'),
	Jp = { title: String, inset: Boolean, border: z };
var Qp = j({
	name: Zp,
	inheritAttrs: !1,
	props: Jp,
	setup(e, { slots: t, attrs: n }) {
		const o = () => {
				var i;
				return d(
					'div',
					_e(
						{ class: [Uc({ inset: e.inset }), { [Ui]: e.border && !e.inset }] },
						n,
						Ci(),
					),
					[(i = t.default) == null ? void 0 : i.call(t)],
				);
			},
			a = () =>
				d('div', { class: Uc('title', { inset: e.inset }) }, [
					t.title ? t.title() : e.title,
				]);
		return () => (e.title || t.title ? d(Je, null, [a(), o()]) : o());
	},
});
const ew = G(Qp),
	[Mf, tw] = U('checkbox-group'),
	nw = {
		max: q,
		shape: Z('round'),
		disabled: Boolean,
		iconSize: q,
		direction: String,
		modelValue: Ne(),
		checkedColor: String,
	},
	Lf = Symbol(Mf);
var ow = j({
	name: Mf,
	props: nw,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { children: o, linkChildren: a } = rt(Lf),
			i = s => t('update:modelValue', s),
			l = (s = {}) => {
				typeof s == 'boolean' && (s = { checked: s });
				const { checked: r, skipDisabled: c } = s,
					f = o
						.filter(h =>
							h.props.bindGroup
								? h.props.disabled && c
									? h.checked.value
									: r ?? !h.checked.value
								: !1,
						)
						.map(h => h.name);
				i(f);
			};
		return (
			ee(
				() => e.modelValue,
				s => t('change', s),
			),
			ke({ toggleAll: l }),
			jn(() => e.modelValue),
			a({ props: e, updateValue: i }),
			() => {
				var s;
				return d('div', { class: tw([e.direction]) }, [
					(s = n.default) == null ? void 0 : s.call(n),
				]);
			}
		);
	},
});
const [aw, iw] = U('checkbox'),
	lw = de({}, as, {
		shape: String,
		bindGroup: z,
		indeterminate: { type: Boolean, default: null },
	});
var rw = j({
	name: aw,
	props: lw,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { parent: o } = ot(Lf),
			a = s => {
				const { name: r } = e,
					{ max: c, modelValue: u } = o.props,
					f = u.slice();
				if (s)
					!(c && f.length >= +c) &&
						!f.includes(r) &&
						(f.push(r), e.bindGroup && o.updateValue(f));
				else {
					const h = f.indexOf(r);
					h !== -1 && (f.splice(h, 1), e.bindGroup && o.updateValue(f));
				}
			},
			i = L(() =>
				o && e.bindGroup
					? o.props.modelValue.indexOf(e.name) !== -1
					: !!e.modelValue,
			),
			l = (s = !i.value) => {
				o && e.bindGroup ? a(s) : t('update:modelValue', s),
					e.indeterminate !== null && t('change', s);
			};
		return (
			ee(
				() => e.modelValue,
				s => {
					e.indeterminate === null && t('change', s);
				},
			),
			ke({ toggle: l, props: e, checked: i }),
			jn(() => e.modelValue),
			() =>
				d(
					If,
					_e(
						{
							bem: iw,
							role: 'checkbox',
							parent: o,
							checked: i.value,
							onToggle: l,
						},
						e,
					),
					Ie(n, ['default', 'icon']),
				)
		);
	},
});
const Vf = G(rw),
	sw = G(ow),
	[cw, Ua] = U('circle');
let uw = 0;
const Yc = e => Math.min(Math.max(+e, 0), 100);
function dw(e, t) {
	const n = e ? 1 : 0;
	return `M ${t / 2} ${t / 2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`;
}
const fw = {
	text: String,
	size: q,
	fill: Z('none'),
	rate: ie(100),
	speed: ie(0),
	color: [String, Object],
	clockwise: z,
	layerColor: String,
	currentRate: Ke(0),
	strokeWidth: ie(40),
	strokeLinecap: String,
	startPosition: Z('top'),
};
var hw = j({
	name: cw,
	props: fw,
	emits: ['update:currentRate'],
	setup(e, { emit: t, slots: n }) {
		const o = `van-circle-${uw++}`,
			a = L(() => +e.strokeWidth + 1e3),
			i = L(() => dw(e.clockwise, a.value)),
			l = L(() => {
				const h = { top: 0, right: 90, bottom: 180, left: 270 }[
					e.startPosition
				];
				if (h) return { transform: `rotate(${h}deg)` };
			});
		ee(
			() => e.rate,
			f => {
				let h;
				const m = Date.now(),
					g = e.currentRate,
					y = Yc(f),
					v = Math.abs(((g - y) * 1e3) / +e.speed),
					w = () => {
						const b = Date.now(),
							p = Math.min((b - m) / v, 1) * (y - g) + g;
						t('update:currentRate', Yc(parseFloat(p.toFixed(1)))),
							(y > g ? p < y : p > y) && (h = it(w));
					};
				e.speed ? (h && Hi(h), (h = it(w))) : t('update:currentRate', y);
			},
			{ immediate: !0 },
		);
		const s = () => {
				const { strokeWidth: h, currentRate: m, strokeLinecap: g } = e,
					y = (3140 * m) / 100,
					v = fn(e.color) ? `url(#${o})` : e.color,
					w = {
						stroke: v,
						strokeWidth: `${+h + 1}px`,
						strokeLinecap: g,
						strokeDasharray: `${y}px 3140px`,
					};
				return d(
					'path',
					{ d: i.value, style: w, class: Ua('hover'), stroke: v },
					null,
				);
			},
			r = () => {
				const f = {
					fill: e.fill,
					stroke: e.layerColor,
					strokeWidth: `${e.strokeWidth}px`,
				};
				return d('path', { class: Ua('layer'), style: f, d: i.value }, null);
			},
			c = () => {
				const { color: f } = e;
				if (!fn(f)) return;
				const h = Object.keys(f)
					.sort((m, g) => parseFloat(m) - parseFloat(g))
					.map((m, g) =>
						d('stop', { key: g, offset: m, 'stop-color': f[m] }, null),
					);
				return d('defs', null, [
					d(
						'linearGradient',
						{ id: o, x1: '100%', y1: '0%', x2: '0%', y2: '0%' },
						[h],
					),
				]);
			},
			u = () => {
				if (n.default) return n.default();
				if (e.text) return d('div', { class: Ua('text') }, [e.text]);
			};
		return () =>
			d('div', { class: Ua(), style: bn(e.size) }, [
				d('svg', { viewBox: `0 0 ${a.value} ${a.value}`, style: l.value }, [
					c(),
					r(),
					s(),
				]),
				u(),
			]);
	},
});
const mw = G(hw),
	[Nf, gw] = U('row'),
	Ff = Symbol(Nf),
	vw = {
		tag: Z('div'),
		wrap: z,
		align: String,
		gutter: { type: [String, Number, Array], default: 0 },
		justify: String,
	};
var bw = j({
	name: Nf,
	props: vw,
	setup(e, { slots: t }) {
		const { children: n, linkChildren: o } = rt(Ff),
			a = L(() => {
				const s = [[]];
				let r = 0;
				return (
					n.forEach((c, u) => {
						(r += Number(c.span)),
							r > 24 ? (s.push([u]), (r -= 24)) : s[s.length - 1].push(u);
					}),
					s
				);
			}),
			i = L(() => {
				let s = 0;
				Array.isArray(e.gutter)
					? (s = Number(e.gutter[0]) || 0)
					: (s = Number(e.gutter));
				const r = [];
				return (
					s &&
						a.value.forEach(c => {
							const u = (s * (c.length - 1)) / c.length;
							c.forEach((f, h) => {
								if (h === 0) r.push({ right: u });
								else {
									const m = s - r[f - 1].right,
										g = u - m;
									r.push({ left: m, right: g });
								}
							});
						}),
					r
				);
			}),
			l = L(() => {
				const { gutter: s } = e,
					r = [];
				if (Array.isArray(s) && s.length > 1) {
					const c = Number(s[1]) || 0;
					if (c <= 0) return r;
					a.value.forEach((u, f) => {
						f !== a.value.length - 1 &&
							u.forEach(() => {
								r.push({ bottom: c });
							});
					});
				}
				return r;
			});
		return (
			o({ spaces: i, verticalSpaces: l }),
			() => {
				const { tag: s, wrap: r, align: c, justify: u } = e;
				return d(
					s,
					{ class: gw({ [`align-${c}`]: c, [`justify-${u}`]: u, nowrap: !r }) },
					{
						default: () => {
							var f;
							return [(f = t.default) == null ? void 0 : f.call(t)];
						},
					},
				);
			}
		);
	},
});
const [yw, pw] = U('col'),
	ww = { tag: Z('div'), span: ie(0), offset: q };
var xw = j({
	name: yw,
	props: ww,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(Ff),
			a = L(() => {
				if (!n) return;
				const { spaces: i, verticalSpaces: l } = n;
				let s = {};
				if (i && i.value && i.value[o.value]) {
					const { left: c, right: u } = i.value[o.value];
					s = {
						paddingLeft: c ? `${c}px` : null,
						paddingRight: u ? `${u}px` : null,
					};
				}
				const { bottom: r } = l.value[o.value] || {};
				return de(s, { marginBottom: r ? `${r}px` : null });
			});
		return () => {
			const { tag: i, span: l, offset: s } = e;
			return d(
				i,
				{ style: a.value, class: pw({ [l]: l, [`offset-${s}`]: s }) },
				{
					default: () => {
						var r;
						return [(r = t.default) == null ? void 0 : r.call(t)];
					},
				},
			);
		};
	},
});
const Sw = G(xw),
	[zf, Cw] = U('collapse'),
	Hf = Symbol(zf),
	Tw = {
		border: z,
		accordion: Boolean,
		modelValue: { type: [String, Number, Array], default: '' },
	};
var _w = j({
	name: zf,
	props: Tw,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o, children: a } = rt(Hf),
			i = c => {
				t('change', c), t('update:modelValue', c);
			},
			l = (c, u) => {
				const { accordion: f, modelValue: h } = e;
				i(f ? (c === h ? '' : c) : u ? h.concat(c) : h.filter(m => m !== c));
			},
			s = (c = {}) => {
				if (e.accordion) return;
				typeof c == 'boolean' && (c = { expanded: c });
				const { expanded: u, skipDisabled: f } = c,
					m = a
						.filter(g =>
							g.disabled && f ? g.expanded.value : u ?? !g.expanded.value,
						)
						.map(g => g.itemName.value);
				i(m);
			},
			r = c => {
				const { accordion: u, modelValue: f } = e;
				return u ? f === c : f.includes(c);
			};
		return (
			ke({ toggleAll: s }),
			o({ toggle: l, isExpanded: r }),
			() => {
				var c;
				return d('div', { class: [Cw(), { [Ui]: e.border }] }, [
					(c = n.default) == null ? void 0 : c.call(n),
				]);
			}
		);
	},
});
const kw = G(_w),
	[Ew, Ya] = U('collapse-item'),
	$w = ['icon', 'title', 'value', 'label', 'right-icon'],
	Pw = de({}, Ji, {
		name: q,
		isLink: z,
		disabled: Boolean,
		readonly: Boolean,
		lazyRender: z,
	});
var Iw = j({
	name: Ew,
	props: Pw,
	setup(e, { slots: t }) {
		const n = D(),
			o = D(),
			{ parent: a, index: i } = ot(Hf);
		if (!a) return;
		const l = L(() => {
				var y;
				return (y = e.name) != null ? y : i.value;
			}),
			s = L(() => a.isExpanded(l.value)),
			r = D(s.value),
			c = qr(() => r.value || !e.lazyRender),
			u = () => {
				s.value ? n.value && (n.value.style.height = '') : (r.value = !1);
			};
		ee(s, (y, v) => {
			if (v === null) return;
			y && (r.value = !0),
				(y ? Te : it)(() => {
					if (!o.value || !n.value) return;
					const { offsetHeight: b } = o.value;
					if (b) {
						const C = `${b}px`;
						(n.value.style.height = y ? '0' : C),
							Bn(() => {
								n.value && (n.value.style.height = y ? C : '0');
							});
					} else u();
				});
		});
		const f = (y = !s.value) => {
				a.toggle(l.value, y);
			},
			h = () => {
				!e.disabled && !e.readonly && f();
			},
			m = () => {
				const { border: y, disabled: v, readonly: w } = e,
					b = Ie(e, Object.keys(Ji));
				return (
					w && (b.isLink = !1),
					(v || w) && (b.clickable = !1),
					d(
						Ht,
						_e(
							{
								role: 'button',
								class: Ya('title', {
									disabled: v,
									expanded: s.value,
									borderless: !y,
								}),
								'aria-expanded': String(s.value),
								onClick: h,
							},
							b,
						),
						Ie(t, $w),
					)
				);
			},
			g = c(() => {
				var y;
				return Qe(
					d('div', { ref: n, class: Ya('wrapper'), onTransitionend: u }, [
						d('div', { ref: o, class: Ya('content') }, [
							(y = t.default) == null ? void 0 : y.call(t),
						]),
					]),
					[[nt, r.value]],
				);
			});
		return (
			ke({ toggle: f, expanded: s, itemName: l }),
			() =>
				d('div', { class: [Ya({ border: i.value && e.border })] }, [m(), g()])
		);
	},
});
const Aw = G(Iw),
	Rw = G(Gb),
	[Ow, Kc, _l] = U('contact-card'),
	Bw = {
		tel: String,
		name: String,
		type: Z('add'),
		addText: String,
		editable: z,
	};
var Dw = j({
	name: Ow,
	props: Bw,
	emits: ['click'],
	setup(e, { emit: t }) {
		const n = a => {
				e.editable && t('click', a);
			},
			o = () =>
				e.type === 'add'
					? e.addText || _l('addContact')
					: [
							d('div', null, [`${_l('name')}：${e.name}`]),
							d('div', null, [`${_l('tel')}：${e.tel}`]),
						];
		return () =>
			d(
				Ht,
				{
					center: !0,
					icon: e.type === 'edit' ? 'contact' : 'add-square',
					class: Kc([e.type]),
					border: !1,
					isLink: e.editable,
					titleClass: Kc('title'),
					onClick: n,
				},
				{ title: o },
			);
	},
});
const Mw = G(Dw),
	[Lw, yo, _n] = U('contact-edit'),
	hr = { tel: '', name: '' },
	Vw = {
		isEdit: Boolean,
		isSaving: Boolean,
		isDeleting: Boolean,
		showSetDefault: Boolean,
		setDefaultLabel: String,
		contactInfo: { type: Object, default: () => de({}, hr) },
		telValidator: { type: Function, default: Nd },
	};
var Nw = j({
	name: Lw,
	props: Vw,
	emits: ['save', 'delete', 'changeDefault'],
	setup(e, { emit: t }) {
		const n = He(de({}, hr, e.contactInfo)),
			o = () => {
				e.isSaving || t('save', n);
			},
			a = () => t('delete', n),
			i = () =>
				d('div', { class: yo('buttons') }, [
					d(
						lt,
						{
							block: !0,
							round: !0,
							type: 'primary',
							text: _n('save'),
							class: yo('button'),
							loading: e.isSaving,
							nativeType: 'submit',
						},
						null,
					),
					e.isEdit &&
						d(
							lt,
							{
								block: !0,
								round: !0,
								text: _n('delete'),
								class: yo('button'),
								loading: e.isDeleting,
								onClick: a,
							},
							null,
						),
				]),
			l = () =>
				d(
					ns,
					{
						modelValue: n.isDefault,
						'onUpdate:modelValue': r => (n.isDefault = r),
						onChange: r => t('changeDefault', r),
					},
					null,
				),
			s = () => {
				if (e.showSetDefault)
					return d(
						Ht,
						{ title: e.setDefaultLabel, class: yo('switch-cell'), border: !1 },
						{ 'right-icon': l },
					);
			};
		return (
			ee(
				() => e.contactInfo,
				r => de(n, hr, r),
			),
			() =>
				d(
					Jr,
					{ class: yo(), onSubmit: o },
					{
						default: () => [
							d('div', { class: yo('fields') }, [
								d(
									un,
									{
										modelValue: n.name,
										'onUpdate:modelValue': r => (n.name = r),
										clearable: !0,
										label: _n('name'),
										rules: [{ required: !0, message: _n('nameEmpty') }],
										maxlength: '30',
										placeholder: _n('name'),
									},
									null,
								),
								d(
									un,
									{
										modelValue: n.tel,
										'onUpdate:modelValue': r => (n.tel = r),
										clearable: !0,
										type: 'tel',
										label: _n('tel'),
										rules: [
											{ validator: e.telValidator, message: _n('telInvalid') },
										],
										placeholder: _n('tel'),
									},
									null,
								),
							]),
							s(),
							i(),
						],
					},
				)
		);
	},
});
const Fw = G(Nw),
	[zw, an, Hw] = U('contact-list'),
	jw = { list: Array, addText: String, modelValue: ze, defaultTagText: String };
var Ww = j({
	name: zw,
	props: jw,
	emits: ['add', 'edit', 'select', 'update:modelValue'],
	setup(e, { emit: t }) {
		const n = (o, a) => {
			const i = () => {
					t('update:modelValue', o.id), t('select', o, a);
				},
				l = () => d(is, { class: an('radio'), name: o.id, iconSize: 18 }, null),
				s = () =>
					d(
						Ce,
						{
							name: 'edit',
							class: an('edit'),
							onClick: c => {
								c.stopPropagation(), t('edit', o, a);
							},
						},
						null,
					),
				r = () => {
					const c = [`${o.name}，${o.tel}`];
					return (
						o.isDefault &&
							e.defaultTagText &&
							c.push(
								d(
									Qi,
									{ type: 'primary', round: !0, class: an('item-tag') },
									{ default: () => [e.defaultTagText] },
								),
							),
						c
					);
				};
			return d(
				Ht,
				{
					key: o.id,
					isLink: !0,
					center: !0,
					class: an('item'),
					titleClass: an('item-title'),
					onClick: i,
				},
				{ icon: s, title: r, 'right-icon': l },
			);
		};
		return () =>
			d('div', { class: an() }, [
				d(
					os,
					{ modelValue: e.modelValue, class: an('group') },
					{ default: () => [e.list && e.list.map(n)] },
				),
				d('div', { class: [an('bottom'), 'van-safe-area-bottom'] }, [
					d(
						lt,
						{
							round: !0,
							block: !0,
							type: 'primary',
							class: an('add'),
							text: e.addText || Hw('addContact'),
							onClick: () => t('add'),
						},
						null,
					),
				]),
			]);
	},
});
const Uw = G(Ww);
function Yw(e, t) {
	const { days: n } = t;
	let { hours: o, minutes: a, seconds: i, milliseconds: l } = t;
	if (
		(e.includes('DD') ? (e = e.replace('DD', Ot(n))) : (o += n * 24),
		e.includes('HH') ? (e = e.replace('HH', Ot(o))) : (a += o * 60),
		e.includes('mm') ? (e = e.replace('mm', Ot(a))) : (i += a * 60),
		e.includes('ss') ? (e = e.replace('ss', Ot(i))) : (l += i * 1e3),
		e.includes('S'))
	) {
		const s = Ot(l, 3);
		e.includes('SSS')
			? (e = e.replace('SSS', s))
			: e.includes('SS')
				? (e = e.replace('SS', s.slice(0, 2)))
				: (e = e.replace('S', s.charAt(0)));
	}
	return e;
}
const [Kw, qw] = U('count-down'),
	Gw = {
		time: ie(0),
		format: Z('HH:mm:ss'),
		autoStart: z,
		millisecond: Boolean,
	};
var Xw = j({
	name: Kw,
	props: Gw,
	emits: ['change', 'finish'],
	setup(e, { emit: t, slots: n }) {
		const {
				start: o,
				pause: a,
				reset: i,
				current: l,
			} = vb({
				time: +e.time,
				millisecond: e.millisecond,
				onChange: c => t('change', c),
				onFinish: () => t('finish'),
			}),
			s = L(() => Yw(e.format, l.value)),
			r = () => {
				i(+e.time), e.autoStart && o();
			};
		return (
			ee(() => e.time, r, { immediate: !0 }),
			ke({ start: o, pause: a, reset: r }),
			() =>
				d('div', { role: 'timer', class: qw() }, [
					n.default ? n.default(l.value) : s.value,
				])
		);
	},
});
const Zw = G(Xw);
function qc(e) {
	const t = new Date(e * 1e3);
	return `${t.getFullYear()}.${Ot(t.getMonth() + 1)}.${Ot(t.getDate())}`;
}
const Jw = e => (e / 10).toFixed(e % 10 === 0 ? 0 : 1),
	Gc = e => (e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2),
	[Qw, Yt, kl] = U('coupon');
var ex = j({
	name: Qw,
	props: {
		chosen: Boolean,
		coupon: Ye(Object),
		disabled: Boolean,
		currency: Z('¥'),
	},
	setup(e) {
		const t = L(() => {
				const { startAt: a, endAt: i } = e.coupon;
				return `${qc(a)} - ${qc(i)}`;
			}),
			n = L(() => {
				const { coupon: a, currency: i } = e;
				if (a.valueDesc)
					return [a.valueDesc, d('span', null, [a.unitDesc || ''])];
				if (a.denominations) {
					const l = Gc(a.denominations);
					return [d('span', null, [i]), ` ${l}`];
				}
				return a.discount ? kl('discount', Jw(a.discount)) : '';
			}),
			o = L(() => {
				const a = Gc(e.coupon.originCondition || 0);
				return a === '0' ? kl('unlimited') : kl('condition', a);
			});
		return () => {
			const { chosen: a, coupon: i, disabled: l } = e,
				s = (l && i.reason) || i.description;
			return d('div', { class: Yt({ disabled: l }) }, [
				d('div', { class: Yt('content') }, [
					d('div', { class: Yt('head') }, [
						d('h2', { class: Yt('amount') }, [n.value]),
						d('p', { class: Yt('condition') }, [i.condition || o.value]),
					]),
					d('div', { class: Yt('body') }, [
						d('p', { class: Yt('name') }, [i.name]),
						d('p', { class: Yt('valid') }, [t.value]),
						!l && d(Vf, { class: Yt('corner'), modelValue: a }, null),
					]),
				]),
				s && d('p', { class: Yt('description') }, [s]),
			]);
		};
	},
});
const mr = G(ex),
	[tx, Xc, gr] = U('coupon-cell'),
	nx = {
		title: String,
		border: z,
		editable: z,
		coupons: Ne(),
		currency: Z('¥'),
		chosenCoupon: { type: [Number, Array], default: -1 },
	},
	ox = e => {
		const { value: t, denominations: n } = e;
		return $e(t) ? t : $e(n) ? n : 0;
	};
function ax({ coupons: e, chosenCoupon: t, currency: n }) {
	let o = 0,
		a = !1;
	return (
		(Array.isArray(t) ? t : [t]).forEach(i => {
			const l = e[+i];
			l && ((a = !0), (o += ox(l)));
		}),
		a
			? `-${n} ${(o / 100).toFixed(2)}`
			: e.length === 0
				? gr('noCoupon')
				: gr('count', e.length)
	);
}
var ix = j({
	name: tx,
	props: nx,
	setup(e) {
		return () => {
			const t = Array.isArray(e.chosenCoupon)
				? e.chosenCoupon.length
				: e.coupons[+e.chosenCoupon];
			return d(
				Ht,
				{
					class: Xc(),
					value: ax(e),
					title: e.title || gr('title'),
					border: e.border,
					isLink: e.editable,
					valueClass: Xc('value', { selected: t }),
				},
				null,
			);
		};
	},
});
const lx = G(ix),
	[rx, Ka] = U('empty'),
	sx = {
		image: Z('default'),
		imageSize: [Number, String, Array],
		description: String,
	};
var cx = j({
	name: rx,
	props: sx,
	setup(e, { slots: t }) {
		const n = () => {
				const w = t.description ? t.description() : e.description;
				if (w) return d('p', { class: Ka('description') }, [w]);
			},
			o = () => {
				if (t.default) return d('div', { class: Ka('bottom') }, [t.default()]);
			},
			a = Ho(),
			i = w => `${a}-${w}`,
			l = w => `url(#${i(w)})`,
			s = (w, b, C) =>
				d(
					'stop',
					{ 'stop-color': w, offset: `${b}%`, 'stop-opacity': C },
					null,
				),
			r = (w, b) => [s(w, 0), s(b, 100)],
			c = w => [
				d('defs', null, [
					d(
						'radialGradient',
						{
							id: i(w),
							cx: '50%',
							cy: '54%',
							fx: '50%',
							fy: '54%',
							r: '297%',
							gradientTransform: 'matrix(-.16 0 0 -.33 .58 .72)',
						},
						[s('#EBEDF0', 0), s('#F2F3F5', 100, 0.3)],
					),
				]),
				d(
					'ellipse',
					{ fill: l(w), opacity: '.8', cx: '80', cy: '140', rx: '46', ry: '8' },
					null,
				),
			],
			u = () => [
				d('defs', null, [
					d(
						'linearGradient',
						{ id: i('a'), x1: '64%', y1: '100%', x2: '64%' },
						[s('#FFF', 0, 0.5), s('#F2F3F5', 100)],
					),
				]),
				d('g', { opacity: '.8' }, [
					d('path', { d: 'M36 131V53H16v20H2v58h34z', fill: l('a') }, null),
					d('path', { d: 'M123 15h22v14h9v77h-31V15z', fill: l('a') }, null),
				]),
			],
			f = () => [
				d('defs', null, [
					d(
						'linearGradient',
						{ id: i('b'), x1: '64%', y1: '97%', x2: '64%', y2: '0%' },
						[s('#F2F3F5', 0, 0.3), s('#F2F3F5', 100)],
					),
				]),
				d('g', { opacity: '.8' }, [
					d(
						'path',
						{
							d: 'M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z',
							fill: l('b'),
						},
						null,
					),
					d(
						'path',
						{
							d: 'M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z',
							fill: l('b'),
						},
						null,
					),
				]),
			],
			h = () =>
				d('svg', { viewBox: '0 0 160 160' }, [
					d('defs', null, [
						d(
							'linearGradient',
							{ id: i(1), x1: '64%', y1: '100%', x2: '64%' },
							[s('#FFF', 0, 0.5), s('#F2F3F5', 100)],
						),
						d('linearGradient', { id: i(2), x1: '50%', x2: '50%', y2: '84%' }, [
							s('#EBEDF0', 0),
							s('#DCDEE0', 100, 0),
						]),
						d(
							'linearGradient',
							{ id: i(3), x1: '100%', x2: '100%', y2: '100%' },
							[r('#EAEDF0', '#DCDEE0')],
						),
						d(
							'radialGradient',
							{
								id: i(4),
								cx: '50%',
								cy: '0%',
								fx: '50%',
								fy: '0%',
								r: '100%',
								gradientTransform: 'matrix(0 1 -.54 0 .5 -.5)',
							},
							[s('#EBEDF0', 0), s('#FFF', 100, 0)],
						),
					]),
					d('g', { fill: 'none' }, [
						u(),
						d('path', { fill: l(4), d: 'M0 139h160v21H0z' }, null),
						d(
							'path',
							{
								d: 'M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z',
								fill: l(2),
							},
							null,
						),
						d(
							'g',
							{ opacity: '.6', 'stroke-linecap': 'round', 'stroke-width': '7' },
							[
								d(
									'path',
									{ d: 'M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13', stroke: l(3) },
									null,
								),
								d('path', { d: 'M53 36a34 34 0 0 0 0 48', stroke: l(3) }, null),
								d(
									'path',
									{ d: 'M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13', stroke: l(3) },
									null,
								),
								d(
									'path',
									{ d: 'M106 84a34 34 0 0 0 0-48', stroke: l(3) },
									null,
								),
							],
						),
						d('g', { transform: 'translate(31 105)' }, [
							d(
								'rect',
								{ fill: '#EBEDF0', width: '98', height: '34', rx: '2' },
								null,
							),
							d(
								'rect',
								{
									fill: '#FFF',
									x: '9',
									y: '8',
									width: '80',
									height: '18',
									rx: '1.1',
								},
								null,
							),
							d(
								'rect',
								{
									fill: '#EBEDF0',
									x: '15',
									y: '12',
									width: '18',
									height: '6',
									rx: '1.1',
								},
								null,
							),
						]),
					]),
				]),
			m = () =>
				d('svg', { viewBox: '0 0 160 160' }, [
					d('defs', null, [
						d(
							'linearGradient',
							{ x1: '50%', x2: '50%', y2: '100%', id: i(5) },
							[r('#F2F3F5', '#DCDEE0')],
						),
						d(
							'linearGradient',
							{ x1: '95%', y1: '48%', x2: '5.5%', y2: '51%', id: i(6) },
							[r('#EAEDF1', '#DCDEE0')],
						),
						d(
							'linearGradient',
							{ y1: '45%', x2: '100%', y2: '54%', id: i(7) },
							[r('#EAEDF1', '#DCDEE0')],
						),
					]),
					u(),
					f(),
					d('g', { transform: 'translate(36 50)', fill: 'none' }, [
						d('g', { transform: 'translate(8)' }, [
							d(
								'rect',
								{
									fill: '#EBEDF0',
									opacity: '.6',
									x: '38',
									y: '13',
									width: '36',
									height: '53',
									rx: '2',
								},
								null,
							),
							d(
								'rect',
								{ fill: l(5), width: '64', height: '66', rx: '2' },
								null,
							),
							d(
								'rect',
								{
									fill: '#FFF',
									x: '6',
									y: '6',
									width: '52',
									height: '55',
									rx: '1',
								},
								null,
							),
							d('g', { transform: 'translate(15 17)', fill: l(6) }, [
								d('rect', { width: '34', height: '6', rx: '1' }, null),
								d('path', { d: 'M0 14h34v6H0z' }, null),
								d('rect', { y: '28', width: '34', height: '6', rx: '1' }, null),
							]),
						]),
						d(
							'rect',
							{ fill: l(7), y: '61', width: '88', height: '28', rx: '1' },
							null,
						),
						d(
							'rect',
							{
								fill: '#F7F8FA',
								x: '29',
								y: '72',
								width: '30',
								height: '6',
								rx: '1',
							},
							null,
						),
					]),
				]),
			g = () =>
				d('svg', { viewBox: '0 0 160 160' }, [
					d('defs', null, [
						d(
							'linearGradient',
							{ x1: '50%', x2: '50%', y2: '100%', id: i(8) },
							[r('#EAEDF1', '#DCDEE0')],
						),
					]),
					u(),
					f(),
					c('c'),
					d(
						'path',
						{
							d: 'm59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z',
							fill: l(8),
						},
						null,
					),
				]),
			y = () =>
				d('svg', { viewBox: '0 0 160 160' }, [
					d('defs', null, [
						d(
							'linearGradient',
							{ x1: '50%', y1: '100%', x2: '50%', id: i(9) },
							[r('#EEE', '#D8D8D8')],
						),
						d(
							'linearGradient',
							{ x1: '100%', y1: '50%', y2: '50%', id: i(10) },
							[r('#F2F3F5', '#DCDEE0')],
						),
						d(
							'linearGradient',
							{ x1: '50%', x2: '50%', y2: '100%', id: i(11) },
							[r('#F2F3F5', '#DCDEE0')],
						),
						d(
							'linearGradient',
							{ x1: '50%', x2: '50%', y2: '100%', id: i(12) },
							[r('#FFF', '#F7F8FA')],
						),
					]),
					u(),
					f(),
					c('d'),
					d('g', { transform: 'rotate(-45 113 -4)', fill: 'none' }, [
						d(
							'rect',
							{
								fill: l(9),
								x: '24',
								y: '52.8',
								width: '5.8',
								height: '19',
								rx: '1',
							},
							null,
						),
						d(
							'rect',
							{
								fill: l(10),
								x: '22.1',
								y: '67.3',
								width: '9.9',
								height: '28',
								rx: '1',
							},
							null,
						),
						d(
							'circle',
							{
								stroke: l(11),
								'stroke-width': '8',
								cx: '27',
								cy: '27',
								r: '27',
							},
							null,
						),
						d('circle', { fill: l(12), cx: '27', cy: '27', r: '16' }, null),
						d(
							'path',
							{
								d: 'M37 7c-8 0-15 5-16 12',
								stroke: l(11),
								'stroke-width': '3',
								opacity: '.5',
								'stroke-linecap': 'round',
								transform: 'rotate(45 29 13)',
							},
							null,
						),
					]),
				]),
			v = () => {
				var w;
				if (t.image) return t.image();
				const b = { error: g, search: y, network: h, default: m };
				return (
					((w = b[e.image]) == null ? void 0 : w.call(b)) ||
					d('img', { src: e.image }, null)
				);
			};
		return () =>
			d('div', { class: Ka() }, [
				d('div', { class: Ka('image'), style: bn(e.imageSize) }, [v()]),
				n(),
				o(),
			]);
	},
});
const jf = G(cx),
	[ux, Kt, po] = U('coupon-list'),
	dx = {
		code: Z(''),
		coupons: Ne(),
		currency: Z('¥'),
		showCount: z,
		emptyImage: String,
		enabledTitle: String,
		disabledTitle: String,
		disabledCoupons: Ne(),
		showExchangeBar: z,
		showCloseButton: z,
		closeButtonText: String,
		inputPlaceholder: String,
		exchangeMinLength: Ke(1),
		exchangeButtonText: String,
		displayedCouponIndex: Ke(-1),
		exchangeButtonLoading: Boolean,
		exchangeButtonDisabled: Boolean,
		chosenCoupon: { type: [Number, Array], default: -1 },
	};
var fx = j({
	name: ux,
	props: dx,
	emits: ['change', 'exchange', 'update:code'],
	setup(e, { emit: t, slots: n }) {
		const [o, a] = Pa(),
			i = D(),
			l = D(),
			s = D(0),
			r = D(0),
			c = D(e.code),
			u = L(
				() =>
					!e.exchangeButtonLoading &&
					(e.exchangeButtonDisabled ||
						!c.value ||
						c.value.length < e.exchangeMinLength),
			),
			f = () => {
				const C = Ae(i).height,
					p = Ae(l).height + 44;
				r.value = (C > p ? C : kt.value) - p;
			},
			h = () => {
				t('exchange', c.value), e.code || (c.value = '');
			},
			m = b => {
				Te(() => {
					var C;
					return (C = o.value[b]) == null ? void 0 : C.scrollIntoView();
				});
			},
			g = () =>
				d(
					jf,
					{ image: e.emptyImage },
					{
						default: () => [
							d('p', { class: Kt('empty-tip') }, [po('noCoupon')]),
						],
					},
				),
			y = () => {
				if (e.showExchangeBar)
					return d('div', { ref: l, class: Kt('exchange-bar') }, [
						d(
							un,
							{
								modelValue: c.value,
								'onUpdate:modelValue': b => (c.value = b),
								clearable: !0,
								border: !1,
								class: Kt('field'),
								placeholder: e.inputPlaceholder || po('placeholder'),
								maxlength: '20',
							},
							null,
						),
						d(
							lt,
							{
								plain: !0,
								type: 'primary',
								class: Kt('exchange'),
								text: e.exchangeButtonText || po('exchange'),
								loading: e.exchangeButtonLoading,
								disabled: u.value,
								onClick: h,
							},
							null,
						),
					]);
			},
			v = () => {
				const { coupons: b, chosenCoupon: C } = e,
					p = e.showCount ? ` (${b.length})` : '',
					x = (e.enabledTitle || po('enable')) + p,
					T = (R = [], S = 0) =>
						R.includes(S) ? R.filter(A => A !== S) : [...R, S];
				return d(
					Ca,
					{ title: x },
					{
						default: () => {
							var R;
							return [
								d(
									'div',
									{
										class: Kt('list', { 'with-bottom': e.showCloseButton }),
										style: { height: `${r.value}px` },
									},
									[
										b.map((S, A) =>
											d(
												mr,
												{
													key: S.id,
													ref: a(A),
													coupon: S,
													chosen: Array.isArray(C) ? C.includes(A) : A === C,
													currency: e.currency,
													onClick: () =>
														t('change', Array.isArray(C) ? T(C, A) : A),
												},
												null,
											),
										),
										!b.length && g(),
										(R = n['list-footer']) == null ? void 0 : R.call(n),
									],
								),
							];
						},
					},
				);
			},
			w = () => {
				const { disabledCoupons: b } = e,
					C = e.showCount ? ` (${b.length})` : '',
					p = (e.disabledTitle || po('disabled')) + C;
				return d(
					Ca,
					{ title: p },
					{
						default: () => {
							var x;
							return [
								d(
									'div',
									{
										class: Kt('list', { 'with-bottom': e.showCloseButton }),
										style: { height: `${r.value}px` },
									},
									[
										b.map(T =>
											d(
												mr,
												{
													disabled: !0,
													key: T.id,
													coupon: T,
													currency: e.currency,
												},
												null,
											),
										),
										!b.length && g(),
										(x = n['disabled-list-footer']) == null
											? void 0
											: x.call(n),
									],
								),
							];
						},
					},
				);
			};
		return (
			ee(
				() => e.code,
				b => {
					c.value = b;
				},
			),
			ee(kt, f),
			ee(c, b => t('update:code', b)),
			ee(() => e.displayedCouponIndex, m),
			Ue(() => {
				f(), m(e.displayedCouponIndex);
			}),
			() =>
				d('div', { ref: i, class: Kt() }, [
					y(),
					d(
						Gi,
						{
							active: s.value,
							'onUpdate:active': b => (s.value = b),
							class: Kt('tab'),
						},
						{ default: () => [v(), w()] },
					),
					d('div', { class: Kt('bottom') }, [
						n['list-button']
							? n['list-button']()
							: Qe(
									d(
										lt,
										{
											round: !0,
											block: !0,
											type: 'primary',
											class: Kt('close'),
											text: e.closeButtonText || po('close'),
											onClick: () =>
												t('change', Array.isArray(e.chosenCoupon) ? [] : -1),
										},
										null,
									),
									[[nt, e.showCloseButton]],
								),
					]),
				])
		);
	},
});
const hx = G(fx),
	Zc = new Date().getFullYear(),
	[mx] = U('date-picker'),
	gx = de({}, Rf, {
		columnsType: { type: Array, default: () => ['year', 'month', 'day'] },
		minDate: {
			type: Date,
			default: () => new Date(Zc - 10, 0, 1),
			validator: Sa,
		},
		maxDate: {
			type: Date,
			default: () => new Date(Zc + 10, 11, 31),
			validator: Sa,
		},
	});
var vx = j({
	name: mx,
	props: gx,
	emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(e.modelValue),
			a = D(!1),
			i = D(),
			l = () => {
				const p = e.minDate.getFullYear(),
					x = e.maxDate.getFullYear();
				return Po(p, x, 'year', e.formatter, e.filter);
			},
			s = p => p === e.minDate.getFullYear(),
			r = p => p === e.maxDate.getFullYear(),
			c = p => p === e.minDate.getMonth() + 1,
			u = p => p === e.maxDate.getMonth() + 1,
			f = p => {
				const { minDate: x, columnsType: T } = e,
					R = T.indexOf(p),
					S = a.value ? e.modelValue[R] : o.value[R];
				if (S) return +S;
				switch (p) {
					case 'year':
						return x.getFullYear();
					case 'month':
						return x.getMonth() + 1;
					case 'day':
						return x.getDate();
				}
			},
			h = () => {
				const p = f('year'),
					x = s(p) ? e.minDate.getMonth() + 1 : 1,
					T = r(p) ? e.maxDate.getMonth() + 1 : 12;
				return Po(x, T, 'month', e.formatter, e.filter);
			},
			m = () => {
				const p = f('year'),
					x = f('month'),
					T = s(p) && c(x) ? e.minDate.getDate() : 1,
					R = r(p) && u(x) ? e.maxDate.getDate() : Bf(p, x);
				return Po(T, R, 'day', e.formatter, e.filter);
			},
			g = () => {
				var p;
				return (p = i.value) == null ? void 0 : p.confirm();
			},
			y = () => o.value,
			v = L(() =>
				e.columnsType.map(p => {
					switch (p) {
						case 'year':
							return l();
						case 'month':
							return h();
						case 'day':
							return m();
						default:
							return [];
					}
				}),
			);
		ee(o, p => {
			Xt(p, e.modelValue) || t('update:modelValue', p);
		}),
			ee(
				() => e.modelValue,
				(p, x) => {
					(a.value = Xt(x, o.value)),
						(p = Df(p, v.value)),
						Xt(p, o.value) || (o.value = p),
						(a.value = !1);
				},
				{ immediate: !0 },
			);
		const w = (...p) => t('change', ...p),
			b = (...p) => t('cancel', ...p),
			C = (...p) => t('confirm', ...p);
		return (
			ke({ confirm: g, getSelectedDate: y }),
			() =>
				d(
					Zi,
					_e(
						{
							ref: i,
							modelValue: o.value,
							'onUpdate:modelValue': p => (o.value = p),
							columns: v.value,
							onChange: w,
							onCancel: b,
							onConfirm: C,
						},
						Ie(e, Of),
					),
					n,
				)
		);
	},
});
const bx = G(vx),
	[yx, Pt, qa] = U('dialog'),
	px = de({}, zo, {
		title: String,
		theme: String,
		width: q,
		message: [String, Function],
		callback: Function,
		allowHtml: Boolean,
		className: ze,
		transition: Z('van-dialog-bounce'),
		messageAlign: String,
		closeOnPopstate: z,
		showCancelButton: Boolean,
		cancelButtonText: String,
		cancelButtonColor: String,
		cancelButtonDisabled: Boolean,
		confirmButtonText: String,
		confirmButtonColor: String,
		confirmButtonDisabled: Boolean,
		showConfirmButton: z,
		closeOnClickOverlay: Boolean,
	}),
	wx = [...Kr, 'transition', 'closeOnPopstate'];
var Wf = j({
	name: yx,
	props: px,
	emits: ['confirm', 'cancel', 'keydown', 'update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = He({ confirm: !1, cancel: !1 }),
			i = w => t('update:show', w),
			l = w => {
				var b;
				i(!1), (b = e.callback) == null || b.call(e, w);
			},
			s = w => () => {
				e.show &&
					(t(w),
					e.beforeClose
						? ((a[w] = !0),
							Wn(e.beforeClose, {
								args: [w],
								done() {
									l(w), (a[w] = !1);
								},
								canceled() {
									a[w] = !1;
								},
							}))
						: l(w));
			},
			r = s('cancel'),
			c = s('confirm'),
			u = zg(
				w => {
					var b, C;
					if (
						w.target !==
						((C = (b = o.value) == null ? void 0 : b.popupRef) == null
							? void 0
							: C.value)
					)
						return;
					({
						Enter: e.showConfirmButton ? c : tr,
						Escape: e.showCancelButton ? r : tr,
					})[w.key](),
						t('keydown', w);
				},
				['enter', 'esc'],
			),
			f = () => {
				const w = n.title ? n.title() : e.title;
				if (w)
					return d(
						'div',
						{ class: Pt('header', { isolated: !e.message && !n.default }) },
						[w],
					);
			},
			h = w => {
				const { message: b, allowHtml: C, messageAlign: p } = e,
					x = Pt('message', { 'has-title': w, [p]: p }),
					T = Oo(b) ? b() : b;
				return C && typeof T == 'string'
					? d('div', { class: x, innerHTML: T }, null)
					: d('div', { class: x }, [T]);
			},
			m = () => {
				if (n.default) return d('div', { class: Pt('content') }, [n.default()]);
				const { title: w, message: b, allowHtml: C } = e;
				if (b) {
					const p = !!(w || n.title);
					return d(
						'div',
						{ key: C ? 1 : 0, class: Pt('content', { isolated: !p }) },
						[h(p)],
					);
				}
			},
			g = () =>
				d('div', { class: [qd, Pt('footer')] }, [
					e.showCancelButton &&
						d(
							lt,
							{
								size: 'large',
								text: e.cancelButtonText || qa('cancel'),
								class: Pt('cancel'),
								style: { color: e.cancelButtonColor },
								loading: a.cancel,
								disabled: e.cancelButtonDisabled,
								onClick: r,
							},
							null,
						),
					e.showConfirmButton &&
						d(
							lt,
							{
								size: 'large',
								text: e.confirmButtonText || qa('confirm'),
								class: [Pt('confirm'), { [Gd]: e.showCancelButton }],
								style: { color: e.confirmButtonColor },
								loading: a.confirm,
								disabled: e.confirmButtonDisabled,
								onClick: c,
							},
							null,
						),
				]),
			y = () =>
				d(
					tf,
					{ class: Pt('footer') },
					{
						default: () => [
							e.showCancelButton &&
								d(
									rr,
									{
										type: 'warning',
										text: e.cancelButtonText || qa('cancel'),
										class: Pt('cancel'),
										color: e.cancelButtonColor,
										loading: a.cancel,
										disabled: e.cancelButtonDisabled,
										onClick: r,
									},
									null,
								),
							e.showConfirmButton &&
								d(
									rr,
									{
										type: 'danger',
										text: e.confirmButtonText || qa('confirm'),
										class: Pt('confirm'),
										color: e.confirmButtonColor,
										loading: a.confirm,
										disabled: e.confirmButtonDisabled,
										onClick: c,
									},
									null,
								),
						],
					},
				),
			v = () =>
				n.footer ? n.footer() : e.theme === 'round-button' ? y() : g();
		return () => {
			const { width: w, title: b, theme: C, message: p, className: x } = e;
			return d(
				zt,
				_e(
					{
						ref: o,
						role: 'dialog',
						class: [Pt([C]), x],
						style: { width: we(w) },
						tabindex: 0,
						'aria-labelledby': b || p,
						onKeydown: u,
						'onUpdate:show': i,
					},
					Ie(e, wx),
				),
				{ default: () => [f(), m(), v()] },
			);
		};
	},
});
let vr;
const xx = {
	title: '',
	width: '',
	theme: null,
	message: '',
	overlay: !0,
	callback: null,
	teleport: 'body',
	className: '',
	allowHtml: !1,
	lockScroll: !0,
	transition: void 0,
	beforeClose: null,
	overlayClass: '',
	overlayStyle: void 0,
	messageAlign: '',
	cancelButtonText: '',
	cancelButtonColor: null,
	cancelButtonDisabled: !1,
	confirmButtonText: '',
	confirmButtonColor: null,
	confirmButtonDisabled: !1,
	showConfirmButton: !0,
	showCancelButton: !1,
	closeOnPopstate: !0,
	closeOnClickOverlay: !1,
};
let Sx = de({}, xx);
function Cx() {
	({ instance: vr } = ts({
		setup() {
			const { state: t, toggle: n } = es();
			return () => d(Wf, _e(t, { 'onUpdate:show': n }), null);
		},
	}));
}
function Tx(e) {
	return wt
		? new Promise((t, n) => {
				vr || Cx(),
					vr.open(
						de({}, Sx, e, {
							callback: o => {
								(o === 'confirm' ? t : n)(o);
							},
						}),
					);
			})
		: Promise.resolve(void 0);
}
const _x = e => Tx(de({ showCancelButton: !0 }, e)),
	kx = G(Wf),
	[Ex, $x] = U('divider'),
	Px = {
		dashed: Boolean,
		hairline: z,
		vertical: Boolean,
		contentPosition: Z('center'),
	};
var Ix = j({
	name: Ex,
	props: Px,
	setup(e, { slots: t }) {
		return () => {
			var n;
			return d(
				'div',
				{
					role: 'separator',
					class: $x({
						dashed: e.dashed,
						hairline: e.hairline,
						vertical: e.vertical,
						[`content-${e.contentPosition}`]: !!t.default && !e.vertical,
					}),
				},
				[!e.vertical && ((n = t.default) == null ? void 0 : n.call(t))],
			);
		};
	},
});
const Ax = G(Ix),
	[Uf, Ga] = U('dropdown-menu'),
	Rx = {
		overlay: z,
		zIndex: q,
		duration: ie(0.2),
		direction: Z('down'),
		activeColor: String,
		autoLocate: Boolean,
		closeOnClickOutside: z,
		closeOnClickOverlay: z,
		swipeThreshold: q,
	},
	Yf = Symbol(Uf);
var Ox = j({
	name: Uf,
	props: Rx,
	setup(e, { slots: t }) {
		const n = Ho(),
			o = D(),
			a = D(),
			i = D(0),
			{ children: l, linkChildren: s } = rt(Yf),
			r = Fo(o),
			c = L(() => l.some(b => b.state.showWrapper)),
			u = L(() => e.swipeThreshold && l.length > +e.swipeThreshold),
			f = L(() => {
				if (c.value && $e(e.zIndex)) return { zIndex: +e.zIndex + 1 };
			}),
			h = () => {
				l.forEach(b => {
					b.toggle(!1);
				});
			},
			m = () => {
				e.closeOnClickOutside && h();
			},
			g = () => {
				if (a.value) {
					const b = Ae(a);
					e.direction === 'down'
						? (i.value = b.bottom)
						: (i.value = kt.value - b.top);
				}
			},
			y = () => {
				c.value && g();
			},
			v = b => {
				l.forEach((C, p) => {
					p === b
						? C.toggle()
						: C.state.showPopup && C.toggle(!1, { immediate: !0 });
				});
			},
			w = (b, C) => {
				const { showPopup: p } = b.state,
					{ disabled: x, titleClass: T } = b;
				return d(
					'div',
					{
						id: `${n}-${C}`,
						role: 'button',
						tabindex: x ? void 0 : 0,
						class: [Ga('item', { disabled: x, grow: u.value }), { [vt]: !x }],
						onClick: () => {
							x || v(C);
						},
					},
					[
						d(
							'span',
							{
								class: [
									Ga('title', {
										down: p === (e.direction === 'down'),
										active: p,
									}),
									T,
								],
								style: { color: p ? e.activeColor : '' },
							},
							[d('div', { class: 'van-ellipsis' }, [b.renderTitle()])],
						),
					],
				);
			};
		return (
			ke({ close: h }),
			s({ id: n, props: e, offset: i, updateOffset: g }),
			ji(o, m),
			We('scroll', y, { target: r, passive: !0 }),
			() => {
				var b;
				return d('div', { ref: o, class: Ga() }, [
					d(
						'div',
						{
							ref: a,
							style: f.value,
							class: Ga('bar', { opened: c.value, scrollable: u.value }),
						},
						[l.map(w)],
					),
					(b = t.default) == null ? void 0 : b.call(t),
				]);
			}
		);
	},
});
const [Bx, Xa] = U('dropdown-item'),
	Dx = {
		title: String,
		options: Ne(),
		disabled: Boolean,
		teleport: [String, Object],
		lazyRender: z,
		modelValue: ze,
		titleClass: ze,
	};
var Mx = j({
	name: Bx,
	inheritAttrs: !1,
	props: Dx,
	emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		const a = He({ showPopup: !1, transition: !0, showWrapper: !1 }),
			i = D(),
			{ parent: l, index: s } = ot(Yf);
		if (!l) return;
		const r = b => () => t(b),
			c = r('open'),
			u = r('close'),
			f = r('opened'),
			h = () => {
				(a.showWrapper = !1), t('closed');
			},
			m = b => {
				e.teleport && b.stopPropagation();
			},
			g = (b = !a.showPopup, C = {}) => {
				b !== a.showPopup &&
					((a.showPopup = b),
					(a.transition = !C.immediate),
					b && (l.updateOffset(), (a.showWrapper = !0)));
			},
			y = () => {
				if (n.title) return n.title();
				if (e.title) return e.title;
				const b = e.options.find(C => C.value === e.modelValue);
				return b ? b.text : '';
			},
			v = b => {
				const { activeColor: C } = l.props,
					{ disabled: p } = b,
					x = b.value === e.modelValue,
					T = () => {
						p ||
							((a.showPopup = !1),
							b.value !== e.modelValue &&
								(t('update:modelValue', b.value), t('change', b.value)));
					},
					R = () => {
						if (x)
							return d(
								Ce,
								{ class: Xa('icon'), color: p ? void 0 : C, name: 'success' },
								null,
							);
					};
				return d(
					Ht,
					{
						role: 'menuitem',
						key: String(b.value),
						icon: b.icon,
						title: b.text,
						class: Xa('option', { active: x, disabled: p }),
						style: { color: x ? C : '' },
						tabindex: x ? 0 : -1,
						clickable: !p,
						onClick: T,
					},
					{ value: R },
				);
			},
			w = () => {
				const { offset: b } = l,
					{
						autoLocate: C,
						zIndex: p,
						overlay: x,
						duration: T,
						direction: R,
						closeOnClickOverlay: S,
					} = l.props,
					A = yn(p);
				let I = b.value;
				if (C && i.value) {
					const k = Cb(i.value);
					k && (I -= Ae(k).top);
				}
				return (
					R === 'down' ? (A.top = `${I}px`) : (A.bottom = `${I}px`),
					Qe(
						d('div', _e({ ref: i, style: A, class: Xa([R]), onClick: m }, o), [
							d(
								zt,
								{
									show: a.showPopup,
									'onUpdate:show': k => (a.showPopup = k),
									role: 'menu',
									class: Xa('content'),
									overlay: x,
									position: R === 'down' ? 'top' : 'bottom',
									duration: a.transition ? T : 0,
									lazyRender: e.lazyRender,
									overlayStyle: { position: 'absolute' },
									'aria-labelledby': `${l.id}-${s.value}`,
									closeOnClickOverlay: S,
									onOpen: c,
									onClose: u,
									onOpened: f,
									onClosed: h,
								},
								{
									default: () => {
										var k;
										return [
											e.options.map(v),
											(k = n.default) == null ? void 0 : k.call(n),
										];
									},
								},
							),
						]),
						[[nt, a.showWrapper]],
					)
				);
			};
		return (
			ke({ state: a, toggle: g, renderTitle: y }),
			() =>
				e.teleport ? d(Lo, { to: e.teleport }, { default: () => [w()] }) : w()
		);
	},
});
const Lx = G(Mx),
	Vx = G(Ox),
	Nx = {
		gap: Ke(24),
		icon: String,
		axis: Z('y'),
		magnetic: String,
		offset: { type: Object, default: () => ({ x: -1, y: -1 }) },
		teleport: { type: [String, Object], default: 'body' },
	},
	[Fx, Jc] = U('floating-bubble');
var zx = j({
	name: Fx,
	inheritAttrs: !1,
	props: Nx,
	emits: ['click', 'update:offset', 'offsetChange'],
	setup(e, { slots: t, emit: n, attrs: o }) {
		const a = D(),
			i = D({ x: 0, y: 0, width: 0, height: 0 }),
			l = L(() => ({
				top: e.gap,
				right: Mt.value - i.value.width - e.gap,
				bottom: kt.value - i.value.height - e.gap,
				left: e.gap,
			})),
			s = D(!1);
		let r = !1;
		const c = L(() => {
				const C = {},
					p = we(i.value.x),
					x = we(i.value.y);
				return (
					(C.transform = `translate3d(${p}, ${x}, 0)`),
					(s.value || !r) && (C.transition = 'none'),
					C
				);
			}),
			u = () => {
				if (!b.value) return;
				const { width: C, height: p } = Ae(a.value),
					{ offset: x } = e;
				i.value = {
					x: x.x > -1 ? x.x : Mt.value - C - e.gap,
					y: x.y > -1 ? x.y : kt.value - p - e.gap,
					width: C,
					height: p,
				};
			},
			f = Et();
		let h = 0,
			m = 0;
		const g = C => {
			f.start(C), (s.value = !0), (h = i.value.x), (m = i.value.y);
		};
		We(
			'touchmove',
			C => {
				if (
					(C.preventDefault(), f.move(C), e.axis !== 'lock' && !f.isTap.value)
				) {
					if (e.axis === 'x' || e.axis === 'xy') {
						let x = h + f.deltaX.value;
						x < l.value.left && (x = l.value.left),
							x > l.value.right && (x = l.value.right),
							(i.value.x = x);
					}
					if (e.axis === 'y' || e.axis === 'xy') {
						let x = m + f.deltaY.value;
						x < l.value.top && (x = l.value.top),
							x > l.value.bottom && (x = l.value.bottom),
							(i.value.y = x);
					}
					const p = Ie(i.value, ['x', 'y']);
					n('update:offset', p);
				}
			},
			{ target: a },
		);
		const v = () => {
				(s.value = !1),
					Te(() => {
						if (e.magnetic === 'x') {
							const C = Si([l.value.left, l.value.right], i.value.x);
							i.value.x = C;
						}
						if (e.magnetic === 'y') {
							const C = Si([l.value.top, l.value.bottom], i.value.y);
							i.value.y = C;
						}
						if (!f.isTap.value) {
							const C = Ie(i.value, ['x', 'y']);
							n('update:offset', C),
								(h !== C.x || m !== C.y) && n('offsetChange', C);
						}
					});
			},
			w = C => {
				f.isTap.value ? n('click', C) : C.stopPropagation();
			};
		Ue(() => {
			u(),
				Te(() => {
					r = !0;
				});
		}),
			ee([Mt, kt, () => e.gap, () => e.offset], u, { deep: !0 });
		const b = D(!0);
		return (
			Jt(() => {
				b.value = !0;
			}),
			Qt(() => {
				e.teleport && (b.value = !1);
			}),
			() => {
				const C = Qe(
					d(
						'div',
						_e(
							{
								class: Jc(),
								ref: a,
								onTouchstartPassive: g,
								onTouchend: v,
								onTouchcancel: v,
								onClickCapture: w,
								style: c.value,
							},
							o,
						),
						[
							t.default
								? t.default()
								: d(ey, { name: e.icon, class: Jc('icon') }, null),
						],
					),
					[[nt, b.value]],
				);
				return e.teleport
					? d(Lo, { to: e.teleport }, { default: () => [C] })
					: C;
			}
		);
	},
});
const Hx = G(zx),
	jx = {
		height: ie(0),
		anchors: Ne(),
		duration: ie(0.3),
		contentDraggable: z,
		lockScroll: Boolean,
		safeAreaInsetBottom: z,
	},
	[Wx, Za] = U('floating-panel');
var Ux = j({
	name: Wx,
	props: jx,
	emits: ['heightChange', 'update:height'],
	setup(e, { emit: t, slots: n }) {
		const a = D(),
			i = D(),
			l = Gr(
				() => +e.height,
				b => t('update:height', b),
			),
			s = L(() => {
				var b, C;
				return {
					min: (b = e.anchors[0]) != null ? b : 100,
					max:
						(C = e.anchors[e.anchors.length - 1]) != null
							? C
							: Math.round(kt.value * 0.6),
				};
			}),
			r = L(() =>
				e.anchors.length >= 2 ? e.anchors : [s.value.min, s.value.max],
			),
			c = D(!1),
			u = L(() => ({
				height: we(s.value.max),
				transform: `translateY(calc(100% + ${we(-l.value)}))`,
				transition: c.value
					? 'none'
					: `transform ${e.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`,
			})),
			f = b => {
				const C = Math.abs(b),
					{ min: p, max: x } = s.value;
				return C > x ? -(x + (C - x) * 0.2) : C < p ? -(p - (p - C) * 0.2) : b;
			};
		let h,
			m = -1;
		const g = Et(),
			y = b => {
				g.start(b), (c.value = !0), (h = -l.value), (m = -1);
			},
			v = b => {
				var C;
				g.move(b);
				const p = b.target;
				if (i.value === p || ((C = i.value) != null && C.contains(p))) {
					const { scrollTop: T } = i.value;
					if (((m = Math.max(m, T)), !e.contentDraggable)) return;
					if (-h < s.value.max) Me(b, !0);
					else if (!(T <= 0 && g.deltaY.value > 0) || m > 0) return;
				}
				const x = g.deltaY.value + h;
				l.value = -f(x);
			},
			w = () => {
				(m = -1),
					(c.value = !1),
					(l.value = Si(r.value, l.value)),
					l.value !== -h && t('heightChange', { height: l.value });
			};
		return (
			ee(
				s,
				() => {
					l.value = Si(r.value, l.value);
				},
				{ immediate: !0 },
			),
			rf(a, () => e.lockScroll || c.value),
			We('touchmove', v, { target: a }),
			() => {
				var b;
				return d(
					'div',
					{
						class: [Za(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }],
						ref: a,
						style: u.value,
						onTouchstartPassive: y,
						onTouchend: w,
						onTouchcancel: w,
					},
					[
						d('div', { class: Za('header') }, [
							d('div', { class: Za('header-bar') }, null),
						]),
						d('div', { class: Za('content'), ref: i }, [
							(b = n.default) == null ? void 0 : b.call(n),
						]),
					],
				);
			}
		);
	},
});
const Yx = G(Ux),
	[Kf, Kx] = U('grid'),
	qx = {
		square: Boolean,
		center: z,
		border: z,
		gutter: q,
		reverse: Boolean,
		iconSize: q,
		direction: String,
		clickable: Boolean,
		columnNum: ie(4),
	},
	qf = Symbol(Kf);
var Gx = j({
	name: Kf,
	props: qx,
	setup(e, { slots: t }) {
		const { linkChildren: n } = rt(qf);
		return (
			n({ props: e }),
			() => {
				var o;
				return d(
					'div',
					{
						style: { paddingLeft: we(e.gutter) },
						class: [Kx(), { [qd]: e.border && !e.gutter }],
					},
					[(o = t.default) == null ? void 0 : o.call(t)],
				);
			}
		);
	},
});
const Xx = G(Gx),
	[Zx, Ja] = U('grid-item'),
	Jx = de({}, Un, {
		dot: Boolean,
		text: String,
		icon: String,
		badge: q,
		iconColor: String,
		iconPrefix: String,
		badgeProps: Object,
	});
var Qx = j({
	name: Zx,
	props: Jx,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(qf),
			a = so();
		if (!n) return;
		const i = L(() => {
				const { square: u, gutter: f, columnNum: h } = n.props,
					m = `${100 / +h}%`,
					g = { flexBasis: m };
				if (u) g.paddingTop = m;
				else if (f) {
					const y = we(f);
					(g.paddingRight = y), o.value >= +h && (g.marginTop = y);
				}
				return g;
			}),
			l = L(() => {
				const { square: u, gutter: f } = n.props;
				if (u && f) {
					const h = we(f);
					return { right: h, bottom: h, height: 'auto' };
				}
			}),
			s = () => {
				if (t.icon)
					return d(co, _e({ dot: e.dot, content: e.badge }, e.badgeProps), {
						default: t.icon,
					});
				if (e.icon)
					return d(
						Ce,
						{
							dot: e.dot,
							name: e.icon,
							size: n.props.iconSize,
							badge: e.badge,
							class: Ja('icon'),
							color: e.iconColor,
							badgeProps: e.badgeProps,
							classPrefix: e.iconPrefix,
						},
						null,
					);
			},
			r = () => {
				if (t.text) return t.text();
				if (e.text) return d('span', { class: Ja('text') }, [e.text]);
			},
			c = () => (t.default ? t.default() : [s(), r()]);
		return () => {
			const {
					center: u,
					border: f,
					square: h,
					gutter: m,
					reverse: g,
					direction: y,
					clickable: v,
				} = n.props,
				w = [
					Ja('content', [
						y,
						{
							center: u,
							square: h,
							reverse: g,
							clickable: v,
							surround: f && m,
						},
					]),
					{ [pn]: f },
				];
			return d('div', { class: [Ja({ square: h })], style: i.value }, [
				d(
					'div',
					{
						role: v ? 'button' : void 0,
						class: w,
						style: l.value,
						tabindex: v ? 0 : void 0,
						onClick: a,
					},
					[c()],
				),
			]);
		};
	},
});
const eS = G(Qx),
	[tS, Qc] = U('highlight'),
	nS = {
		autoEscape: z,
		caseSensitive: Boolean,
		highlightClass: String,
		highlightTag: Z('span'),
		keywords: Ye([String, Array]),
		sourceString: Z(''),
		tag: Z('div'),
		unhighlightClass: String,
		unhighlightTag: Z('span'),
	};
var oS = j({
	name: tS,
	props: nS,
	setup(e) {
		const t = L(() => {
				const {
						autoEscape: o,
						caseSensitive: a,
						keywords: i,
						sourceString: l,
					} = e,
					s = a ? 'g' : 'gi';
				let c = (Array.isArray(i) ? i : [i])
					.filter(f => f)
					.reduce((f, h) => {
						o && (h = h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
						const m = new RegExp(h, s);
						let g;
						for (; (g = m.exec(l)); ) {
							const y = g.index,
								v = m.lastIndex;
							if (y >= v) {
								m.lastIndex++;
								continue;
							}
							f.push({ start: y, end: v, highlight: !0 });
						}
						return f;
					}, []);
				c = c
					.sort((f, h) => f.start - h.start)
					.reduce((f, h) => {
						const m = f[f.length - 1];
						if (!m || h.start > m.end) {
							const g = m ? m.end : 0,
								y = h.start;
							g !== y && f.push({ start: g, end: y, highlight: !1 }), f.push(h);
						} else m.end = Math.max(m.end, h.end);
						return f;
					}, []);
				const u = c[c.length - 1];
				return (
					u &&
						u.end < l.length &&
						c.push({ start: u.end, end: l.length, highlight: !1 }),
					c
				);
			}),
			n = () => {
				const {
					sourceString: o,
					highlightClass: a,
					unhighlightClass: i,
					highlightTag: l,
					unhighlightTag: s,
				} = e;
				return t.value.map(r => {
					const { start: c, end: u, highlight: f } = r,
						h = o.slice(c, u);
					return f
						? d(l, { class: [Qc('tag'), a] }, { default: () => [h] })
						: d(s, { class: i }, { default: () => [h] });
				});
			};
		return () => {
			const { tag: o } = e;
			return d(o, { class: Qc() }, { default: () => [n()] });
		};
	},
});
const aS = G(oS),
	eu = e =>
		Math.sqrt(
			(e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2,
		),
	iS = e => ({
		x: (e[0].clientX + e[1].clientX) / 2,
		y: (e[0].clientY + e[1].clientY) / 2,
	}),
	El = U('image-preview')[1],
	tu = 2.6,
	lS = {
		src: String,
		show: Boolean,
		active: Number,
		minZoom: Ye(q),
		maxZoom: Ye(q),
		rootWidth: Ye(Number),
		rootHeight: Ye(Number),
		disableZoom: Boolean,
		doubleScale: Boolean,
		closeOnClickImage: Boolean,
		closeOnClickOverlay: Boolean,
		vertical: Boolean,
	};
var rS = j({
	props: lS,
	emits: ['scale', 'close', 'longPress'],
	setup(e, { emit: t, slots: n }) {
		const o = He({
				scale: 1,
				moveX: 0,
				moveY: 0,
				moving: !1,
				zooming: !1,
				initializing: !1,
				imageRatio: 0,
			}),
			a = Et(),
			i = D(),
			l = D(),
			s = D(!1),
			r = D(!1);
		let c = 0;
		const u = L(() => {
				const {
						scale: O,
						moveX: F,
						moveY: Y,
						moving: me,
						zooming: ve,
						initializing: ne,
					} = o,
					se = { transitionDuration: ve || me || ne ? '0s' : '.3s' };
				return (
					(O !== 1 || r.value) &&
						(se.transform = `matrix(${O}, 0, 0, ${O}, ${F}, ${Y})`),
					se
				);
			}),
			f = L(() => {
				if (o.imageRatio) {
					const { rootWidth: O, rootHeight: F } = e,
						Y = s.value ? F / o.imageRatio : O;
					return Math.max(0, (o.scale * Y - O) / 2);
				}
				return 0;
			}),
			h = L(() => {
				if (o.imageRatio) {
					const { rootWidth: O, rootHeight: F } = e,
						Y = s.value ? F : O * o.imageRatio;
					return Math.max(0, (o.scale * Y - F) / 2);
				}
				return 0;
			}),
			m = (O, F) => {
				var Y;
				if (((O = et(O, +e.minZoom, +e.maxZoom + 1)), O !== o.scale)) {
					const me = O / o.scale;
					if (((o.scale = O), F)) {
						const ve = Ae((Y = i.value) == null ? void 0 : Y.$el),
							ne = { x: ve.width * 0.5, y: ve.height * 0.5 },
							se = o.moveX - (F.x - ve.left - ne.x) * (me - 1),
							be = o.moveY - (F.y - ve.top - ne.y) * (me - 1);
						(o.moveX = et(se, -f.value, f.value)),
							(o.moveY = et(be, -h.value, h.value));
					} else (o.moveX = 0), (o.moveY = r.value ? c : 0);
					t('scale', { scale: O, index: e.active });
				}
			},
			g = () => {
				m(1);
			},
			y = () => {
				const O = o.scale > 1 ? 1 : 2;
				m(
					O,
					O === 2 || r.value
						? { x: a.startX.value, y: a.startY.value }
						: void 0,
				);
			};
		let v,
			w,
			b,
			C,
			p,
			x,
			T,
			R,
			S = !1;
		const A = O => {
				const { touches: F } = O;
				if (((v = F.length), v === 2 && e.disableZoom)) return;
				const { offsetX: Y } = a;
				a.start(O),
					(w = o.moveX),
					(b = o.moveY),
					(R = Date.now()),
					(S = !1),
					(o.moving = v === 1 && (o.scale !== 1 || r.value)),
					(o.zooming = v === 2 && !Y.value),
					o.zooming && ((C = o.scale), (p = eu(F)));
			},
			I = O => {
				const { touches: F } = O;
				if ((a.move(O), o.moving)) {
					const { deltaX: Y, deltaY: me } = a,
						ve = Y.value + w,
						ne = me.value + b;
					if (
						(e.vertical
							? a.isVertical() && Math.abs(ne) > h.value
							: a.isHorizontal() && Math.abs(ve) > f.value) &&
						!S
					) {
						o.moving = !1;
						return;
					}
					(S = !0),
						Me(O, !0),
						(o.moveX = et(ve, -f.value, f.value)),
						(o.moveY = et(ne, -h.value, h.value));
				}
				if (o.zooming && (Me(O, !0), F.length === 2)) {
					const Y = eu(F),
						me = (C * Y) / p;
					(x = iS(F)), m(me, x);
				}
			},
			k = O => {
				var F;
				const Y = (F = l.value) == null ? void 0 : F.$el,
					me = Y.firstElementChild,
					ve = O.target === Y,
					ne = me == null ? void 0 : me.contains(O.target);
				(!e.closeOnClickImage && ne) ||
					(!e.closeOnClickOverlay && ve) ||
					t('close');
			},
			$ = O => {
				if (v > 1) return;
				const F = Date.now() - R,
					Y = 250;
				a.isTap.value &&
					(F < Y
						? e.doubleScale
							? T
								? (clearTimeout(T), (T = null), y())
								: (T = setTimeout(() => {
										k(O), (T = null);
									}, Y))
							: k(O)
						: F > Zd && t('longPress'));
			},
			B = O => {
				let F = !1;
				if (
					(o.moving || o.zooming) &&
					((F = !0),
					o.moving && w === o.moveX && b === o.moveY && (F = !1),
					!O.touches.length)
				) {
					o.zooming &&
						((o.moveX = et(o.moveX, -f.value, f.value)),
						(o.moveY = et(o.moveY, -h.value, h.value)),
						(o.zooming = !1)),
						(o.moving = !1),
						(w = 0),
						(b = 0),
						(C = 1),
						o.scale < 1 && g();
					const Y = +e.maxZoom;
					o.scale > Y && m(Y, x);
				}
				Me(O, F), $(O), a.reset();
			},
			X = () => {
				const { rootWidth: O, rootHeight: F } = e,
					Y = F / O,
					{ imageRatio: me } = o;
				(s.value = o.imageRatio > Y && me < tu),
					(r.value = o.imageRatio > Y && me >= tu),
					r.value &&
						((c = (me * O - F) / 2),
						(o.moveY = c),
						(o.initializing = !0),
						it(() => {
							o.initializing = !1;
						})),
					g();
			},
			V = O => {
				const { naturalWidth: F, naturalHeight: Y } = O.target;
				(o.imageRatio = Y / F), X();
			};
		return (
			ee(() => e.active, g),
			ee(
				() => e.show,
				O => {
					O || g();
				},
			),
			ee(() => [e.rootWidth, e.rootHeight], X),
			We('touchmove', I, {
				target: L(() => {
					var O;
					return (O = l.value) == null ? void 0 : O.$el;
				}),
			}),
			ke({ resetScale: g }),
			() => {
				const O = { loading: () => d(Ft, { type: 'spinner' }, null) };
				return d(
					Zr,
					{
						ref: l,
						class: El('swipe-item'),
						onTouchstartPassive: A,
						onTouchend: B,
						onTouchcancel: B,
					},
					{
						default: () => [
							n.image
								? d('div', { class: El('image-wrap') }, [
										n.image({ src: e.src, onLoad: V, style: u.value }),
									])
								: d(
										el,
										{
											ref: i,
											src: e.src,
											fit: 'contain',
											class: El('image', { vertical: s.value }),
											style: u.value,
											onLoad: V,
										},
										O,
									),
						],
					},
				);
			}
		);
	},
});
const [sS, wo] = U('image-preview'),
	cS = ['show', 'teleport', 'transition', 'overlayStyle', 'closeOnPopstate'],
	uS = {
		show: Boolean,
		loop: z,
		images: Ne(),
		minZoom: ie(1 / 3),
		maxZoom: ie(3),
		overlay: z,
		vertical: Boolean,
		closeable: Boolean,
		showIndex: z,
		className: ze,
		closeIcon: Z('clear'),
		transition: String,
		beforeClose: Function,
		doubleScale: z,
		overlayClass: ze,
		overlayStyle: Object,
		swipeDuration: ie(300),
		startPosition: ie(0),
		showIndicators: Boolean,
		closeOnPopstate: z,
		closeOnClickImage: z,
		closeOnClickOverlay: z,
		closeIconPosition: Z('top-right'),
		teleport: [String, Object],
	};
var Gf = j({
	name: sS,
	props: uS,
	emits: ['scale', 'close', 'closed', 'change', 'longPress', 'update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(),
			i = He({ active: 0, rootWidth: 0, rootHeight: 0, disableZoom: !1 }),
			l = () => {
				if (o.value) {
					const C = Ae(o.value.$el);
					(i.rootWidth = C.width), (i.rootHeight = C.height), o.value.resize();
				}
			},
			s = C => t('scale', C),
			r = C => t('update:show', C),
			c = () => {
				Wn(e.beforeClose, { args: [i.active], done: () => r(!1) });
			},
			u = C => {
				C !== i.active && ((i.active = C), t('change', C));
			},
			f = () => {
				if (e.showIndex)
					return d('div', { class: wo('index') }, [
						n.index
							? n.index({ index: i.active })
							: `${i.active + 1} / ${e.images.length}`,
					]);
			},
			h = () => {
				if (n.cover) return d('div', { class: wo('cover') }, [n.cover()]);
			},
			m = () => {
				i.disableZoom = !0;
			},
			g = () => {
				i.disableZoom = !1;
			},
			y = () =>
				d(
					Xr,
					{
						ref: o,
						lazyRender: !0,
						loop: e.loop,
						class: wo('swipe'),
						vertical: e.vertical,
						duration: e.swipeDuration,
						initialSwipe: e.startPosition,
						showIndicators: e.showIndicators,
						indicatorColor: 'white',
						onChange: u,
						onDragEnd: g,
						onDragStart: m,
					},
					{
						default: () => [
							e.images.map((C, p) =>
								d(
									rS,
									{
										ref: x => {
											p === i.active && (a.value = x);
										},
										src: C,
										show: e.show,
										active: i.active,
										maxZoom: e.maxZoom,
										minZoom: e.minZoom,
										rootWidth: i.rootWidth,
										rootHeight: i.rootHeight,
										disableZoom: i.disableZoom,
										doubleScale: e.doubleScale,
										closeOnClickImage: e.closeOnClickImage,
										closeOnClickOverlay: e.closeOnClickOverlay,
										vertical: e.vertical,
										onScale: s,
										onClose: c,
										onLongPress: () => t('longPress', { index: p }),
									},
									{ image: n.image },
								),
							),
						],
					},
				),
			v = () => {
				if (e.closeable)
					return d(
						Ce,
						{
							role: 'button',
							name: e.closeIcon,
							class: [wo('close-icon', e.closeIconPosition), vt],
							onClick: c,
						},
						null,
					);
			},
			w = () => t('closed'),
			b = (C, p) => {
				var x;
				return (x = o.value) == null ? void 0 : x.swipeTo(C, p);
			};
		return (
			ke({
				resetScale: () => {
					var C;
					(C = a.value) == null || C.resetScale();
				},
				swipeTo: b,
			}),
			Ue(l),
			ee([Mt, kt], l),
			ee(
				() => e.startPosition,
				C => u(+C),
			),
			ee(
				() => e.show,
				C => {
					const { images: p, startPosition: x } = e;
					C
						? (u(+x),
							Te(() => {
								l(), b(+x, { immediate: !0 });
							}))
						: t('close', { index: i.active, url: p[i.active] });
				},
			),
			() =>
				d(
					zt,
					_e(
						{
							class: [wo(), e.className],
							overlayClass: [wo('overlay'), e.overlayClass],
							onClosed: w,
							'onUpdate:show': r,
						},
						Ie(e, cS),
					),
					{ default: () => [v(), y(), f(), h()] },
				)
		);
	},
});
let ci;
const dS = {
	loop: !0,
	images: [],
	maxZoom: 3,
	minZoom: 1 / 3,
	onScale: void 0,
	onClose: void 0,
	onChange: void 0,
	vertical: !1,
	teleport: 'body',
	className: '',
	showIndex: !0,
	closeable: !1,
	closeIcon: 'clear',
	transition: void 0,
	beforeClose: void 0,
	doubleScale: !0,
	overlayStyle: void 0,
	overlayClass: void 0,
	startPosition: 0,
	swipeDuration: 300,
	showIndicators: !1,
	closeOnPopstate: !0,
	closeOnClickOverlay: !0,
	closeIconPosition: 'top-right',
};
function fS() {
	({ instance: ci } = ts({
		setup() {
			const { state: e, toggle: t } = es(),
				n = () => {
					e.images = [];
				};
			return () => d(Gf, _e(e, { onClosed: n, 'onUpdate:show': t }), null);
		},
	}));
}
const hS = (e, t = 0) => {
		if (wt)
			return (
				ci || fS(),
				(e = Array.isArray(e) ? { images: e, startPosition: t } : e),
				ci.open(de({}, dS, e)),
				ci
			);
	},
	mS = G(Gf);
function gS() {
	return Array(26)
		.fill('')
		.map((n, o) => String.fromCharCode(65 + o));
}
const [Xf, $l] = U('index-bar'),
	vS = {
		sticky: z,
		zIndex: q,
		teleport: [String, Object],
		highlightColor: String,
		stickyOffsetTop: Ke(0),
		indexList: { type: Array, default: gS },
	},
	Zf = Symbol(Xf);
var bS = j({
	name: Xf,
	props: vS,
	emits: ['select', 'change'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(),
			i = D(''),
			l = Et(),
			s = Fo(o),
			{ children: r, linkChildren: c } = rt(Zf);
		let u;
		c({ props: e });
		const f = L(() => {
				if ($e(e.zIndex)) return { zIndex: +e.zIndex + 1 };
			}),
			h = L(() => {
				if (e.highlightColor) return { color: e.highlightColor };
			}),
			m = (S, A) => {
				for (let I = r.length - 1; I >= 0; I--) {
					const k = I > 0 ? A[I - 1].height : 0,
						$ = e.sticky ? k + e.stickyOffsetTop : 0;
					if (S + $ >= A[I].top) return I;
				}
				return -1;
			},
			g = S => r.find(A => String(A.index) === S),
			y = () => {
				if (lo(o)) return;
				const { sticky: S, indexList: A } = e,
					I = hn(s.value),
					k = Ae(s),
					$ = r.map(X => X.getRect(s.value, k));
				let B = -1;
				if (u) {
					const X = g(u);
					if (X) {
						const V = X.getRect(s.value, k);
						B = m(V.top, $);
					}
				} else B = m(I, $);
				(i.value = A[B]),
					S &&
						r.forEach((X, V) => {
							const { state: O, $el: F } = X;
							if (V === B || V === B - 1) {
								const Y = F.getBoundingClientRect();
								(O.left = Y.left), (O.width = Y.width);
							} else (O.left = null), (O.width = null);
							if (V === B)
								(O.active = !0),
									(O.top = Math.max(e.stickyOffsetTop, $[V].top - I) + k.top);
							else if (V === B - 1 && u === '') {
								const Y = $[B].top - I;
								(O.active = Y > 0), (O.top = Y + k.top - $[V].height);
							} else O.active = !1;
						}),
					(u = '');
			},
			v = () => {
				Te(y);
			};
		We('scroll', y, { target: s, passive: !0 }),
			Ue(v),
			ee(() => e.indexList, v),
			ee(i, S => {
				S && t('change', S);
			});
		const w = () =>
				e.indexList.map(S => {
					const A = S === i.value;
					return d(
						'span',
						{
							class: $l('index', { active: A }),
							style: A ? h.value : void 0,
							'data-index': S,
						},
						[S],
					);
				}),
			b = S => {
				u = String(S);
				const A = g(u);
				if (A) {
					const I = hn(s.value),
						k = Ae(s),
						{ offsetHeight: $ } = document.documentElement;
					if ((A.$el.scrollIntoView(), I === $ - k.height)) {
						y();
						return;
					}
					e.sticky && e.stickyOffsetTop && Wi($a() - e.stickyOffsetTop),
						t('select', A.index);
				}
			},
			C = S => {
				const { index: A } = S.dataset;
				A && b(A);
			},
			p = S => {
				C(S.target);
			};
		let x;
		const T = S => {
				if ((l.move(S), l.isVertical())) {
					Me(S);
					const { clientX: A, clientY: I } = S.touches[0],
						k = document.elementFromPoint(A, I);
					if (k) {
						const { index: $ } = k.dataset;
						$ && x !== $ && ((x = $), C(k));
					}
				}
			},
			R = () =>
				d(
					'div',
					{
						ref: a,
						class: $l('sidebar'),
						style: f.value,
						onClick: p,
						onTouchstartPassive: l.start,
					},
					[w()],
				);
		return (
			ke({ scrollTo: b }),
			We('touchmove', T, { target: a }),
			() => {
				var S;
				return d('div', { ref: o, class: $l() }, [
					e.teleport
						? d(Lo, { to: e.teleport }, { default: () => [R()] })
						: R(),
					(S = n.default) == null ? void 0 : S.call(n),
				]);
			}
		);
	},
});
const [yS, pS] = U('index-anchor'),
	wS = { index: q };
var xS = j({
	name: yS,
	props: wS,
	setup(e, { slots: t }) {
		const n = He({
				top: 0,
				left: null,
				rect: { top: 0, height: 0 },
				width: null,
				active: !1,
			}),
			o = D(),
			{ parent: a } = ot(Zf);
		if (!a) return;
		const i = () => n.active && a.props.sticky,
			l = L(() => {
				const { zIndex: r, highlightColor: c } = a.props;
				if (i())
					return de(yn(r), {
						left: n.left ? `${n.left}px` : void 0,
						width: n.width ? `${n.width}px` : void 0,
						transform: n.top ? `translate3d(0, ${n.top}px, 0)` : void 0,
						color: c,
					});
			});
		return (
			ke({
				state: n,
				getRect: (r, c) => {
					const u = Ae(o);
					return (
						(n.rect.height = u.height),
						r === window || r === document.body
							? (n.rect.top = u.top + $a())
							: (n.rect.top = u.top + hn(r) - c.top),
						n.rect
					);
				},
			}),
			() => {
				const r = i();
				return d(
					'div',
					{ ref: o, style: { height: r ? `${n.rect.height}px` : void 0 } },
					[
						d(
							'div',
							{ style: l.value, class: [pS({ sticky: r }), { [Ur]: r }] },
							[t.default ? t.default() : e.index],
						),
					],
				);
			}
		);
	},
});
const SS = G(xS),
	CS = G(bS),
	[TS, xo, _S] = U('list'),
	kS = {
		error: Boolean,
		offset: ie(300),
		loading: Boolean,
		disabled: Boolean,
		finished: Boolean,
		scroller: Object,
		errorText: String,
		direction: Z('down'),
		loadingText: String,
		finishedText: String,
		immediateCheck: z,
	};
var ES = j({
	name: TS,
	props: kS,
	emits: ['load', 'update:error', 'update:loading'],
	setup(e, { emit: t, slots: n }) {
		const o = D(e.loading),
			a = D(),
			i = D(),
			l = Jy(),
			s = Fo(a),
			r = L(() => e.scroller || s.value),
			c = () => {
				Te(() => {
					if (
						o.value ||
						e.finished ||
						e.disabled ||
						e.error ||
						(l == null ? void 0 : l.value) === !1
					)
						return;
					const { direction: g } = e,
						y = +e.offset,
						v = Ae(r);
					if (!v.height || lo(a)) return;
					let w = !1;
					const b = Ae(i);
					g === 'up'
						? (w = v.top - b.top <= y)
						: (w = b.bottom - v.bottom <= y),
						w && ((o.value = !0), t('update:loading', !0), t('load'));
				});
			},
			u = () => {
				if (e.finished) {
					const g = n.finished ? n.finished() : e.finishedText;
					if (g) return d('div', { class: xo('finished-text') }, [g]);
				}
			},
			f = () => {
				t('update:error', !1), c();
			},
			h = () => {
				if (e.error) {
					const g = n.error ? n.error() : e.errorText;
					if (g)
						return d(
							'div',
							{
								role: 'button',
								class: xo('error-text'),
								tabindex: 0,
								onClick: f,
							},
							[g],
						);
				}
			},
			m = () => {
				if (o.value && !e.finished && !e.disabled)
					return d('div', { class: xo('loading') }, [
						n.loading
							? n.loading()
							: d(
									Ft,
									{ class: xo('loading-icon') },
									{ default: () => [e.loadingText || _S('loading')] },
								),
					]);
			};
		return (
			ee(() => [e.loading, e.finished, e.error], c),
			l &&
				ee(l, g => {
					g && c();
				}),
			id(() => {
				o.value = e.loading;
			}),
			Ue(() => {
				e.immediateCheck && c();
			}),
			ke({ check: c }),
			We('scroll', c, { target: r, passive: !0 }),
			() => {
				var g;
				const y = (g = n.default) == null ? void 0 : g.call(n),
					v = d('div', { ref: i, class: xo('placeholder') }, null);
				return d(
					'div',
					{ ref: a, role: 'feed', class: xo(), 'aria-busy': o.value },
					[
						e.direction === 'down' ? y : v,
						m(),
						u(),
						h(),
						e.direction === 'up' ? y : v,
					],
				);
			}
		);
	},
});
const $S = G(ES),
	[PS, ln] = U('nav-bar'),
	IS = {
		title: String,
		fixed: Boolean,
		zIndex: q,
		border: z,
		leftText: String,
		rightText: String,
		leftDisabled: Boolean,
		rightDisabled: Boolean,
		leftArrow: Boolean,
		placeholder: Boolean,
		safeAreaInsetTop: Boolean,
		clickable: z,
	};
var AS = j({
	name: PS,
	props: IS,
	emits: ['clickLeft', 'clickRight'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Ki(o, ln),
			i = u => {
				e.leftDisabled || t('clickLeft', u);
			},
			l = u => {
				e.rightDisabled || t('clickRight', u);
			},
			s = () =>
				n.left
					? n.left()
					: [
							e.leftArrow &&
								d(Ce, { class: ln('arrow'), name: 'arrow-left' }, null),
							e.leftText && d('span', { class: ln('text') }, [e.leftText]),
						],
			r = () =>
				n.right ? n.right() : d('span', { class: ln('text') }, [e.rightText]),
			c = () => {
				const { title: u, fixed: f, border: h, zIndex: m } = e,
					g = yn(m),
					y = e.leftArrow || e.leftText || n.left,
					v = e.rightText || n.right;
				return d(
					'div',
					{
						ref: o,
						style: g,
						class: [
							ln({ fixed: f }),
							{ [Ur]: h, 'van-safe-area-top': e.safeAreaInsetTop },
						],
					},
					[
						d('div', { class: ln('content') }, [
							y &&
								d(
									'div',
									{
										class: [
											ln('left', { disabled: e.leftDisabled }),
											e.clickable && !e.leftDisabled ? vt : '',
										],
										onClick: i,
									},
									[s()],
								),
							d('div', { class: [ln('title'), 'van-ellipsis'] }, [
								n.title ? n.title() : u,
							]),
							v &&
								d(
									'div',
									{
										class: [
											ln('right', { disabled: e.rightDisabled }),
											e.clickable && !e.rightDisabled ? vt : '',
										],
										onClick: l,
									},
									[r()],
								),
						]),
					],
				);
			};
		return () => (e.fixed && e.placeholder ? a(c) : c());
	},
});
const RS = G(AS),
	[OS, Xo] = U('notice-bar'),
	BS = {
		text: String,
		mode: String,
		color: String,
		delay: ie(1),
		speed: ie(60),
		leftIcon: String,
		wrapable: Boolean,
		background: String,
		scrollable: { type: Boolean, default: null },
	};
var DS = j({
	name: OS,
	props: BS,
	emits: ['close', 'replay'],
	setup(e, { emit: t, slots: n }) {
		let o = 0,
			a = 0,
			i;
		const l = D(),
			s = D(),
			r = He({ show: !0, offset: 0, duration: 0 }),
			c = () => {
				if (n['left-icon']) return n['left-icon']();
				if (e.leftIcon)
					return d(Ce, { class: Xo('left-icon'), name: e.leftIcon }, null);
			},
			u = () => {
				if (e.mode === 'closeable') return 'cross';
				if (e.mode === 'link') return 'arrow';
			},
			f = v => {
				e.mode === 'closeable' && ((r.show = !1), t('close', v));
			},
			h = () => {
				if (n['right-icon']) return n['right-icon']();
				const v = u();
				if (v)
					return d(Ce, { name: v, class: Xo('right-icon'), onClick: f }, null);
			},
			m = () => {
				(r.offset = o),
					(r.duration = 0),
					it(() => {
						Bn(() => {
							(r.offset = -a), (r.duration = (a + o) / +e.speed), t('replay');
						});
					});
			},
			g = () => {
				const v = e.scrollable === !1 && !e.wrapable,
					w = {
						transform: r.offset ? `translateX(${r.offset}px)` : '',
						transitionDuration: `${r.duration}s`,
					};
				return d('div', { ref: l, role: 'marquee', class: Xo('wrap') }, [
					d(
						'div',
						{
							ref: s,
							style: w,
							class: [Xo('content'), { 'van-ellipsis': v }],
							onTransitionend: m,
						},
						[n.default ? n.default() : e.text],
					),
				]);
			},
			y = () => {
				const { delay: v, speed: w, scrollable: b } = e,
					C = $e(v) ? +v * 1e3 : 0;
				(o = 0),
					(a = 0),
					(r.offset = 0),
					(r.duration = 0),
					clearTimeout(i),
					(i = setTimeout(() => {
						if (!l.value || !s.value || b === !1) return;
						const p = Ae(l).width,
							x = Ae(s).width;
						(b || x > p) &&
							Bn(() => {
								(o = p), (a = x), (r.offset = -a), (r.duration = a / +w);
							});
					}, C));
			};
		return (
			Yi(y),
			No(y),
			We('pageshow', y),
			ke({ reset: y }),
			ee(() => [e.text, e.scrollable], y),
			() => {
				const { color: v, wrapable: w, background: b } = e;
				return Qe(
					d(
						'div',
						{
							role: 'alert',
							class: Xo({ wrapable: w }),
							style: { color: v, background: b },
						},
						[c(), g(), h()],
					),
					[[nt, r.show]],
				);
			}
		);
	},
});
const MS = G(DS),
	[LS, VS] = U('notify'),
	NS = ['lockScroll', 'position', 'show', 'teleport', 'zIndex'],
	FS = de({}, zo, {
		type: Z('danger'),
		color: String,
		message: q,
		position: Z('top'),
		className: ze,
		background: String,
		lockScroll: Boolean,
	});
var zS = j({
	name: LS,
	props: FS,
	emits: ['update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = a => t('update:show', a);
		return () =>
			d(
				zt,
				_e(
					{
						class: [VS([e.type]), e.className],
						style: { color: e.color, background: e.background },
						overlay: !1,
						duration: 0.2,
						'onUpdate:show': o,
					},
					Ie(e, NS),
				),
				{ default: () => [n.default ? n.default() : e.message] },
			);
	},
});
const HS = G(zS),
	[jS, fa] = U('key'),
	WS = d('svg', { class: fa('collapse-icon'), viewBox: '0 0 30 24' }, [
		d(
			'path',
			{
				d: 'M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z',
				fill: 'currentColor',
			},
			null,
		),
	]),
	US = d('svg', { class: fa('delete-icon'), viewBox: '0 0 32 22' }, [
		d(
			'path',
			{
				d: 'M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z',
				fill: 'currentColor',
			},
			null,
		),
	]);
var Pl = j({
	name: jS,
	props: {
		type: String,
		text: q,
		color: String,
		wider: Boolean,
		large: Boolean,
		loading: Boolean,
	},
	emits: ['press'],
	setup(e, { emit: t, slots: n }) {
		const o = D(!1),
			a = Et(),
			i = c => {
				a.start(c), (o.value = !0);
			},
			l = c => {
				a.move(c), a.direction.value && (o.value = !1);
			},
			s = c => {
				o.value &&
					(n.default || Me(c), (o.value = !1), t('press', e.text, e.type));
			},
			r = () => {
				if (e.loading) return d(Ft, { class: fa('loading-icon') }, null);
				const c = n.default ? n.default() : e.text;
				switch (e.type) {
					case 'delete':
						return c || US;
					case 'extra':
						return c || WS;
					default:
						return c;
				}
			};
		return () =>
			d(
				'div',
				{
					class: fa('wrapper', { wider: e.wider }),
					onTouchstartPassive: i,
					onTouchmovePassive: l,
					onTouchend: s,
					onTouchcancel: s,
				},
				[
					d(
						'div',
						{
							role: 'button',
							tabindex: 0,
							class: fa([
								e.color,
								{
									large: e.large,
									active: o.value,
									delete: e.type === 'delete',
								},
							]),
						},
						[r()],
					),
				],
			);
	},
});
const [YS, kn] = U('number-keyboard'),
	KS = {
		show: Boolean,
		title: String,
		theme: Z('default'),
		zIndex: q,
		teleport: [String, Object],
		maxlength: ie(1 / 0),
		modelValue: Z(''),
		transition: z,
		blurOnClose: z,
		showDeleteKey: z,
		randomKeyOrder: Boolean,
		closeButtonText: String,
		deleteButtonText: String,
		closeButtonLoading: Boolean,
		hideOnClickOutside: z,
		safeAreaInsetBottom: z,
		extraKey: { type: [String, Array], default: '' },
	};
function qS(e) {
	for (let t = e.length - 1; t > 0; t--) {
		const n = Math.floor(Math.random() * (t + 1)),
			o = e[t];
		(e[t] = e[n]), (e[n] = o);
	}
	return e;
}
var GS = j({
	name: YS,
	inheritAttrs: !1,
	props: KS,
	emits: [
		'show',
		'hide',
		'blur',
		'input',
		'close',
		'delete',
		'update:modelValue',
	],
	setup(e, { emit: t, slots: n, attrs: o }) {
		const a = D(),
			i = () => {
				const v = Array(9)
					.fill('')
					.map((w, b) => ({ text: b + 1 }));
				return e.randomKeyOrder && qS(v), v;
			},
			l = () => [
				...i(),
				{ text: e.extraKey, type: 'extra' },
				{ text: 0 },
				{
					text: e.showDeleteKey ? e.deleteButtonText : '',
					type: e.showDeleteKey ? 'delete' : '',
				},
			],
			s = () => {
				const v = i(),
					{ extraKey: w } = e,
					b = Array.isArray(w) ? w : [w];
				return (
					b.length === 1
						? v.push({ text: 0, wider: !0 }, { text: b[0], type: 'extra' })
						: b.length === 2 &&
							v.push(
								{ text: b[0], type: 'extra' },
								{ text: 0 },
								{ text: b[1], type: 'extra' },
							),
					v
				);
			},
			r = L(() => (e.theme === 'custom' ? s() : l())),
			c = () => {
				e.show && t('blur');
			},
			u = () => {
				t('close'), e.blurOnClose && c();
			},
			f = () => t(e.show ? 'show' : 'hide'),
			h = (v, w) => {
				if (v === '') {
					w === 'extra' && c();
					return;
				}
				const b = e.modelValue;
				w === 'delete'
					? (t('delete'), t('update:modelValue', b.slice(0, b.length - 1)))
					: w === 'close'
						? u()
						: b.length < +e.maxlength &&
							(t('input', v), t('update:modelValue', b + v));
			},
			m = () => {
				const { title: v, theme: w, closeButtonText: b } = e,
					C = n['title-left'],
					p = b && w === 'default';
				if (v || p || C)
					return d('div', { class: kn('header') }, [
						C && d('span', { class: kn('title-left') }, [C()]),
						v && d('h2', { class: kn('title') }, [v]),
						p &&
							d(
								'button',
								{ type: 'button', class: [kn('close'), vt], onClick: u },
								[b],
							),
					]);
			},
			g = () =>
				r.value.map(v => {
					const w = {};
					return (
						v.type === 'delete' && (w.default = n.delete),
						v.type === 'extra' && (w.default = n['extra-key']),
						d(
							Pl,
							{
								key: v.text,
								text: v.text,
								type: v.type,
								wider: v.wider,
								color: v.color,
								onPress: h,
							},
							w,
						)
					);
				}),
			y = () => {
				if (e.theme === 'custom')
					return d('div', { class: kn('sidebar') }, [
						e.showDeleteKey &&
							d(
								Pl,
								{
									large: !0,
									text: e.deleteButtonText,
									type: 'delete',
									onPress: h,
								},
								{ default: n.delete },
							),
						d(
							Pl,
							{
								large: !0,
								text: e.closeButtonText,
								type: 'close',
								color: 'blue',
								loading: e.closeButtonLoading,
								onPress: h,
							},
							null,
						),
					]);
			};
		return (
			ee(
				() => e.show,
				v => {
					e.transition || t(v ? 'show' : 'hide');
				},
			),
			e.hideOnClickOutside && ji(a, c, { eventName: 'touchstart' }),
			() => {
				const v = m(),
					w = d(
						Vo,
						{ name: e.transition ? 'van-slide-up' : '' },
						{
							default: () => [
								Qe(
									d(
										'div',
										_e(
											{
												ref: a,
												style: yn(e.zIndex),
												class: kn({
													unfit: !e.safeAreaInsetBottom,
													'with-title': !!v,
												}),
												onAnimationend: f,
												onTouchstartPassive: jr,
											},
											o,
										),
										[
											v,
											d('div', { class: kn('body') }, [
												d('div', { class: kn('keys') }, [g()]),
												y(),
											]),
										],
									),
									[[nt, e.show]],
								),
							],
						},
					);
				return e.teleport
					? d(Lo, { to: e.teleport }, { default: () => [w] })
					: w;
			}
		);
	},
});
const XS = G(GS),
	[ZS, So, nu] = U('pagination'),
	Il = (e, t, n) => ({ number: e, text: t, active: n }),
	JS = {
		mode: Z('multi'),
		prevText: String,
		nextText: String,
		pageCount: ie(0),
		modelValue: Ke(0),
		totalItems: ie(0),
		showPageSize: ie(5),
		itemsPerPage: ie(10),
		forceEllipses: Boolean,
		showPrevButton: z,
		showNextButton: z,
	};
var QS = j({
	name: ZS,
	props: JS,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = L(() => {
				const { pageCount: u, totalItems: f, itemsPerPage: h } = e,
					m = +u || Math.ceil(+f / +h);
				return Math.max(1, m);
			}),
			a = L(() => {
				const u = [],
					f = o.value,
					h = +e.showPageSize,
					{ modelValue: m, forceEllipses: g } = e;
				let y = 1,
					v = f;
				const w = h < f;
				w &&
					((y = Math.max(m - Math.floor(h / 2), 1)),
					(v = y + h - 1),
					v > f && ((v = f), (y = v - h + 1)));
				for (let b = y; b <= v; b++) {
					const C = Il(b, b, b === m);
					u.push(C);
				}
				if (w && h > 0 && g) {
					if (y > 1) {
						const b = Il(y - 1, '...');
						u.unshift(b);
					}
					if (v < f) {
						const b = Il(v + 1, '...');
						u.push(b);
					}
				}
				return u;
			}),
			i = (u, f) => {
				(u = et(u, 1, o.value)),
					e.modelValue !== u &&
						(t('update:modelValue', u), f && t('change', u));
			};
		Do(() => i(e.modelValue));
		const l = () =>
				d('li', { class: So('page-desc') }, [
					n.pageDesc ? n.pageDesc() : `${e.modelValue}/${o.value}`,
				]),
			s = () => {
				const { mode: u, modelValue: f, showPrevButton: h } = e;
				if (!h) return;
				const m = n['prev-text'],
					g = f === 1;
				return d(
					'li',
					{
						class: [
							So('item', { disabled: g, border: u === 'simple', prev: !0 }),
							ua,
						],
					},
					[
						d(
							'button',
							{ type: 'button', disabled: g, onClick: () => i(f - 1, !0) },
							[m ? m() : e.prevText || nu('prev')],
						),
					],
				);
			},
			r = () => {
				const { mode: u, modelValue: f, showNextButton: h } = e;
				if (!h) return;
				const m = n['next-text'],
					g = f === o.value;
				return d(
					'li',
					{
						class: [
							So('item', { disabled: g, border: u === 'simple', next: !0 }),
							ua,
						],
					},
					[
						d(
							'button',
							{ type: 'button', disabled: g, onClick: () => i(f + 1, !0) },
							[m ? m() : e.nextText || nu('next')],
						),
					],
				);
			},
			c = () =>
				a.value.map(u =>
					d('li', { class: [So('item', { active: u.active, page: !0 }), ua] }, [
						d(
							'button',
							{
								type: 'button',
								'aria-current': u.active || void 0,
								onClick: () => i(u.number, !0),
							},
							[n.page ? n.page(u) : u.text],
						),
					]),
				);
		return () =>
			d('nav', { role: 'navigation', class: So() }, [
				d('ul', { class: So('items') }, [
					s(),
					e.mode === 'simple' ? l() : c(),
					r(),
				]),
			]);
	},
});
const eC = G(QS),
	[tC, Zo] = U('password-input'),
	nC = {
		info: String,
		mask: z,
		value: Z(''),
		gutter: q,
		length: ie(6),
		focused: Boolean,
		errorInfo: String,
	};
var oC = j({
	name: tC,
	props: nC,
	emits: ['focus'],
	setup(e, { emit: t }) {
		const n = a => {
				a.stopPropagation(), t('focus', a);
			},
			o = () => {
				const a = [],
					{ mask: i, value: l, gutter: s, focused: r } = e,
					c = +e.length;
				for (let u = 0; u < c; u++) {
					const f = l[u],
						h = u !== 0 && !s,
						m = r && u === l.length;
					let g;
					u !== 0 && s && (g = { marginLeft: we(s) }),
						a.push(
							d(
								'li',
								{ class: [{ [Gd]: h }, Zo('item', { focus: m })], style: g },
								[
									i
										? d(
												'i',
												{ style: { visibility: f ? 'visible' : 'hidden' } },
												null,
											)
										: f,
									m && d('div', { class: Zo('cursor') }, null),
								],
							),
						);
				}
				return a;
			};
		return () => {
			const a = e.errorInfo || e.info;
			return d('div', { class: Zo() }, [
				d(
					'ul',
					{
						class: [Zo('security'), { [ua]: !e.gutter }],
						onTouchstartPassive: n,
					},
					[o()],
				),
				a && d('div', { class: Zo(e.errorInfo ? 'error-info' : 'info') }, [a]),
			]);
		};
	},
});
const aC = G(oC),
	iC = G(s0);
function jt(e) {
	if (e == null) return window;
	if (e.toString() !== '[object Window]') {
		var t = e.ownerDocument;
		return (t && t.defaultView) || window;
	}
	return e;
}
function rs(e) {
	var t = jt(e).Element;
	return e instanceof t || e instanceof Element;
}
function Lt(e) {
	var t = jt(e).HTMLElement;
	return e instanceof t || e instanceof HTMLElement;
}
function Jf(e) {
	if (typeof ShadowRoot > 'u') return !1;
	var t = jt(e).ShadowRoot;
	return e instanceof t || e instanceof ShadowRoot;
}
var Bo = Math.round;
function br() {
	var e = navigator.userAgentData;
	return e != null && e.brands
		? e.brands
				.map(function (t) {
					return t.brand + '/' + t.version;
				})
				.join(' ')
		: navigator.userAgent;
}
function lC() {
	return !/^((?!chrome|android).)*safari/i.test(br());
}
function _i(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var o = e.getBoundingClientRect(),
		a = 1,
		i = 1;
	t &&
		Lt(e) &&
		((a = (e.offsetWidth > 0 && Bo(o.width) / e.offsetWidth) || 1),
		(i = (e.offsetHeight > 0 && Bo(o.height) / e.offsetHeight) || 1));
	var l = rs(e) ? jt(e) : window,
		s = l.visualViewport,
		r = !lC() && n,
		c = (o.left + (r && s ? s.offsetLeft : 0)) / a,
		u = (o.top + (r && s ? s.offsetTop : 0)) / i,
		f = o.width / a,
		h = o.height / i;
	return {
		width: f,
		height: h,
		top: u,
		right: c + f,
		bottom: u + h,
		left: c,
		x: c,
		y: u,
	};
}
function Qf(e) {
	var t = jt(e),
		n = t.pageXOffset,
		o = t.pageYOffset;
	return { scrollLeft: n, scrollTop: o };
}
function rC(e) {
	return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function sC(e) {
	return e === jt(e) || !Lt(e) ? Qf(e) : rC(e);
}
function mn(e) {
	return e ? (e.nodeName || '').toLowerCase() : null;
}
function tl(e) {
	return ((rs(e) ? e.ownerDocument : e.document) || window.document)
		.documentElement;
}
function cC(e) {
	return _i(tl(e)).left + Qf(e).scrollLeft;
}
function gn(e) {
	return jt(e).getComputedStyle(e);
}
function ss(e) {
	var t = gn(e),
		n = t.overflow,
		o = t.overflowX,
		a = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function uC(e) {
	var t = e.getBoundingClientRect(),
		n = Bo(t.width) / e.offsetWidth || 1,
		o = Bo(t.height) / e.offsetHeight || 1;
	return n !== 1 || o !== 1;
}
function dC(e, t, n) {
	n === void 0 && (n = !1);
	var o = Lt(t),
		a = Lt(t) && uC(t),
		i = tl(t),
		l = _i(e, a, n),
		s = { scrollLeft: 0, scrollTop: 0 },
		r = { x: 0, y: 0 };
	return (
		(o || (!o && !n)) &&
			((mn(t) !== 'body' || ss(i)) && (s = sC(t)),
			Lt(t)
				? ((r = _i(t, !0)), (r.x += t.clientLeft), (r.y += t.clientTop))
				: i && (r.x = cC(i))),
		{
			x: l.left + s.scrollLeft - r.x,
			y: l.top + s.scrollTop - r.y,
			width: l.width,
			height: l.height,
		}
	);
}
function fC(e) {
	var t = _i(e),
		n = e.offsetWidth,
		o = e.offsetHeight;
	return (
		Math.abs(t.width - n) <= 1 && (n = t.width),
		Math.abs(t.height - o) <= 1 && (o = t.height),
		{ x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
	);
}
function cs(e) {
	return mn(e) === 'html'
		? e
		: e.assignedSlot || e.parentNode || (Jf(e) ? e.host : null) || tl(e);
}
function eh(e) {
	return ['html', 'body', '#document'].indexOf(mn(e)) >= 0
		? e.ownerDocument.body
		: Lt(e) && ss(e)
			? e
			: eh(cs(e));
}
function ui(e, t) {
	var n;
	t === void 0 && (t = []);
	var o = eh(e),
		a = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
		i = jt(o),
		l = a ? [i].concat(i.visualViewport || [], ss(o) ? o : []) : o,
		s = t.concat(l);
	return a ? s : s.concat(ui(cs(l)));
}
function hC(e) {
	return ['table', 'td', 'th'].indexOf(mn(e)) >= 0;
}
function ou(e) {
	return !Lt(e) || gn(e).position === 'fixed' ? null : e.offsetParent;
}
function mC(e) {
	var t = /firefox/i.test(br()),
		n = /Trident/i.test(br());
	if (n && Lt(e)) {
		var o = gn(e);
		if (o.position === 'fixed') return null;
	}
	var a = cs(e);
	for (Jf(a) && (a = a.host); Lt(a) && ['html', 'body'].indexOf(mn(a)) < 0; ) {
		var i = gn(a);
		if (
			i.transform !== 'none' ||
			i.perspective !== 'none' ||
			i.contain === 'paint' ||
			['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
			(t && i.willChange === 'filter') ||
			(t && i.filter && i.filter !== 'none')
		)
			return a;
		a = a.parentNode;
	}
	return null;
}
function th(e) {
	for (var t = jt(e), n = ou(e); n && hC(n) && gn(n).position === 'static'; )
		n = ou(n);
	return n &&
		(mn(n) === 'html' || (mn(n) === 'body' && gn(n).position === 'static'))
		? t
		: n || mC(e) || t;
}
var Io = 'top',
	ki = 'bottom',
	Ta = 'right',
	io = 'left',
	nh = 'auto',
	gC = [Io, ki, Ta, io],
	oh = 'start',
	Ei = 'end',
	vC = [].concat(gC, [nh]).reduce(function (e, t) {
		return e.concat([t, t + '-' + oh, t + '-' + Ei]);
	}, []),
	bC = 'beforeRead',
	yC = 'read',
	pC = 'afterRead',
	wC = 'beforeMain',
	xC = 'main',
	SC = 'afterMain',
	CC = 'beforeWrite',
	TC = 'write',
	_C = 'afterWrite',
	yr = [bC, yC, pC, wC, xC, SC, CC, TC, _C];
function kC(e) {
	var t = new Map(),
		n = new Set(),
		o = [];
	e.forEach(function (i) {
		t.set(i.name, i);
	});
	function a(i) {
		n.add(i.name);
		var l = [].concat(i.requires || [], i.requiresIfExists || []);
		l.forEach(function (s) {
			if (!n.has(s)) {
				var r = t.get(s);
				r && a(r);
			}
		}),
			o.push(i);
	}
	return (
		e.forEach(function (i) {
			n.has(i.name) || a(i);
		}),
		o
	);
}
function EC(e) {
	var t = kC(e);
	return yr.reduce(function (n, o) {
		return n.concat(
			t.filter(function (a) {
				return a.phase === o;
			}),
		);
	}, []);
}
function $C(e) {
	var t;
	return function () {
		return (
			t ||
				(t = new Promise(function (n) {
					Promise.resolve().then(function () {
						(t = void 0), n(e());
					});
				})),
			t
		);
	};
}
function En(e) {
	for (
		var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
		o < t;
		o++
	)
		n[o - 1] = arguments[o];
	return [].concat(n).reduce(function (a, i) {
		return a.replace(/%s/, i);
	}, e);
}
var Xn =
		'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
	PC =
		'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
	au = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function IC(e) {
	e.forEach(function (t) {
		[]
			.concat(Object.keys(t), au)
			.filter(function (n, o, a) {
				return a.indexOf(n) === o;
			})
			.forEach(function (n) {
				switch (n) {
					case 'name':
						typeof t.name != 'string' &&
							console.error(
								En(
									Xn,
									String(t.name),
									'"name"',
									'"string"',
									'"' + String(t.name) + '"',
								),
							);
						break;
					case 'enabled':
						typeof t.enabled != 'boolean' &&
							console.error(
								En(
									Xn,
									t.name,
									'"enabled"',
									'"boolean"',
									'"' + String(t.enabled) + '"',
								),
							);
						break;
					case 'phase':
						yr.indexOf(t.phase) < 0 &&
							console.error(
								En(
									Xn,
									t.name,
									'"phase"',
									'either ' + yr.join(', '),
									'"' + String(t.phase) + '"',
								),
							);
						break;
					case 'fn':
						typeof t.fn != 'function' &&
							console.error(
								En(Xn, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'),
							);
						break;
					case 'effect':
						t.effect != null &&
							typeof t.effect != 'function' &&
							console.error(
								En(
									Xn,
									t.name,
									'"effect"',
									'"function"',
									'"' + String(t.fn) + '"',
								),
							);
						break;
					case 'requires':
						t.requires != null &&
							!Array.isArray(t.requires) &&
							console.error(
								En(
									Xn,
									t.name,
									'"requires"',
									'"array"',
									'"' + String(t.requires) + '"',
								),
							);
						break;
					case 'requiresIfExists':
						Array.isArray(t.requiresIfExists) ||
							console.error(
								En(
									Xn,
									t.name,
									'"requiresIfExists"',
									'"array"',
									'"' + String(t.requiresIfExists) + '"',
								),
							);
						break;
					case 'options':
					case 'data':
						break;
					default:
						console.error(
							'PopperJS: an invalid property has been provided to the "' +
								t.name +
								'" modifier, valid properties are ' +
								au
									.map(function (o) {
										return '"' + o + '"';
									})
									.join(', ') +
								'; but "' +
								n +
								'" was provided.',
						);
				}
				t.requires &&
					t.requires.forEach(function (o) {
						e.find(function (a) {
							return a.name === o;
						}) == null && console.error(En(PC, String(t.name), o, o));
					});
			});
	});
}
function AC(e, t) {
	var n = new Set();
	return e.filter(function (o) {
		var a = t(o);
		if (!n.has(a)) return n.add(a), !0;
	});
}
function nl(e) {
	return e.split('-')[0];
}
function RC(e) {
	var t = e.reduce(function (n, o) {
		var a = n[o.name];
		return (
			(n[o.name] = a
				? Object.assign({}, a, o, {
						options: Object.assign({}, a.options, o.options),
						data: Object.assign({}, a.data, o.data),
					})
				: o),
			n
		);
	}, {});
	return Object.keys(t).map(function (n) {
		return t[n];
	});
}
function ah(e) {
	return e.split('-')[1];
}
function OC(e) {
	return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function BC(e) {
	var t = e.reference,
		n = e.element,
		o = e.placement,
		a = o ? nl(o) : null,
		i = o ? ah(o) : null,
		l = t.x + t.width / 2 - n.width / 2,
		s = t.y + t.height / 2 - n.height / 2,
		r;
	switch (a) {
		case Io:
			r = { x: l, y: t.y - n.height };
			break;
		case ki:
			r = { x: l, y: t.y + t.height };
			break;
		case Ta:
			r = { x: t.x + t.width, y: s };
			break;
		case io:
			r = { x: t.x - n.width, y: s };
			break;
		default:
			r = { x: t.x, y: t.y };
	}
	var c = a ? OC(a) : null;
	if (c != null) {
		var u = c === 'y' ? 'height' : 'width';
		switch (i) {
			case oh:
				r[c] = r[c] - (t[u] / 2 - n[u] / 2);
				break;
			case Ei:
				r[c] = r[c] + (t[u] / 2 - n[u] / 2);
				break;
		}
	}
	return r;
}
var iu =
		'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
	DC =
		'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
	lu = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function ru() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	return !t.some(function (o) {
		return !(o && typeof o.getBoundingClientRect == 'function');
	});
}
function MC(e) {
	e === void 0 && (e = {});
	var t = e,
		n = t.defaultModifiers,
		o = n === void 0 ? [] : n,
		a = t.defaultOptions,
		i = a === void 0 ? lu : a;
	return function (s, r, c) {
		c === void 0 && (c = i);
		var u = {
				placement: 'bottom',
				orderedModifiers: [],
				options: Object.assign({}, lu, i),
				modifiersData: {},
				elements: { reference: s, popper: r },
				attributes: {},
				styles: {},
			},
			f = [],
			h = !1,
			m = {
				state: u,
				setOptions: function (w) {
					var b = typeof w == 'function' ? w(u.options) : w;
					y(),
						(u.options = Object.assign({}, i, u.options, b)),
						(u.scrollParents = {
							reference: rs(s)
								? ui(s)
								: s.contextElement
									? ui(s.contextElement)
									: [],
							popper: ui(r),
						});
					var C = EC(RC([].concat(o, u.options.modifiers)));
					u.orderedModifiers = C.filter(function (k) {
						return k.enabled;
					});
					{
						var p = AC([].concat(C, u.options.modifiers), function (k) {
							var $ = k.name;
							return $;
						});
						if ((IC(p), nl(u.options.placement) === nh)) {
							var x = u.orderedModifiers.find(function (k) {
								var $ = k.name;
								return $ === 'flip';
							});
							x ||
								console.error(
									[
										'Popper: "auto" placements require the "flip" modifier be',
										'present and enabled to work.',
									].join(' '),
								);
						}
						var T = gn(r),
							R = T.marginTop,
							S = T.marginRight,
							A = T.marginBottom,
							I = T.marginLeft;
						[R, S, A, I].some(function (k) {
							return parseFloat(k);
						}) &&
							console.warn(
								[
									'Popper: CSS "margin" styles cannot be used to apply padding',
									'between the popper and its reference element or boundary.',
									'To replicate margin, use the `offset` modifier, as well as',
									'the `padding` option in the `preventOverflow` and `flip`',
									'modifiers.',
								].join(' '),
							);
					}
					return g(), m.update();
				},
				forceUpdate: function () {
					if (!h) {
						var w = u.elements,
							b = w.reference,
							C = w.popper;
						if (!ru(b, C)) {
							console.error(iu);
							return;
						}
						(u.rects = {
							reference: dC(b, th(C), u.options.strategy === 'fixed'),
							popper: fC(C),
						}),
							(u.reset = !1),
							(u.placement = u.options.placement),
							u.orderedModifiers.forEach(function (k) {
								return (u.modifiersData[k.name] = Object.assign({}, k.data));
							});
						for (var p = 0, x = 0; x < u.orderedModifiers.length; x++) {
							if (((p += 1), p > 100)) {
								console.error(DC);
								break;
							}
							if (u.reset === !0) {
								(u.reset = !1), (x = -1);
								continue;
							}
							var T = u.orderedModifiers[x],
								R = T.fn,
								S = T.options,
								A = S === void 0 ? {} : S,
								I = T.name;
							typeof R == 'function' &&
								(u = R({ state: u, options: A, name: I, instance: m }) || u);
						}
					}
				},
				update: $C(function () {
					return new Promise(function (v) {
						m.forceUpdate(), v(u);
					});
				}),
				destroy: function () {
					y(), (h = !0);
				},
			};
		if (!ru(s, r)) return console.error(iu), m;
		m.setOptions(c).then(function (v) {
			!h && c.onFirstUpdate && c.onFirstUpdate(v);
		});
		function g() {
			u.orderedModifiers.forEach(function (v) {
				var w = v.name,
					b = v.options,
					C = b === void 0 ? {} : b,
					p = v.effect;
				if (typeof p == 'function') {
					var x = p({ state: u, name: w, instance: m, options: C }),
						T = function () {};
					f.push(x || T);
				}
			});
		}
		function y() {
			f.forEach(function (v) {
				return v();
			}),
				(f = []);
		}
		return m;
	};
}
var Qa = { passive: !0 };
function LC(e) {
	var t = e.state,
		n = e.instance,
		o = e.options,
		a = o.scroll,
		i = a === void 0 ? !0 : a,
		l = o.resize,
		s = l === void 0 ? !0 : l,
		r = jt(t.elements.popper),
		c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return (
		i &&
			c.forEach(function (u) {
				u.addEventListener('scroll', n.update, Qa);
			}),
		s && r.addEventListener('resize', n.update, Qa),
		function () {
			i &&
				c.forEach(function (u) {
					u.removeEventListener('scroll', n.update, Qa);
				}),
				s && r.removeEventListener('resize', n.update, Qa);
		}
	);
}
var VC = {
	name: 'eventListeners',
	enabled: !0,
	phase: 'write',
	fn: function () {},
	effect: LC,
	data: {},
};
function NC(e) {
	var t = e.state,
		n = e.name;
	t.modifiersData[n] = BC({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: 'absolute',
		placement: t.placement,
	});
}
var FC = {
		name: 'popperOffsets',
		enabled: !0,
		phase: 'read',
		fn: NC,
		data: {},
	},
	zC = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function HC(e) {
	var t = e.x,
		n = e.y,
		o = window,
		a = o.devicePixelRatio || 1;
	return { x: Bo(t * a) / a || 0, y: Bo(n * a) / a || 0 };
}
function su(e) {
	var t,
		n = e.popper,
		o = e.popperRect,
		a = e.placement,
		i = e.variation,
		l = e.offsets,
		s = e.position,
		r = e.gpuAcceleration,
		c = e.adaptive,
		u = e.roundOffsets,
		f = e.isFixed,
		h = l.x,
		m = h === void 0 ? 0 : h,
		g = l.y,
		y = g === void 0 ? 0 : g,
		v = typeof u == 'function' ? u({ x: m, y }) : { x: m, y };
	(m = v.x), (y = v.y);
	var w = l.hasOwnProperty('x'),
		b = l.hasOwnProperty('y'),
		C = io,
		p = Io,
		x = window;
	if (c) {
		var T = th(n),
			R = 'clientHeight',
			S = 'clientWidth';
		if (
			(T === jt(n) &&
				((T = tl(n)),
				gn(T).position !== 'static' &&
					s === 'absolute' &&
					((R = 'scrollHeight'), (S = 'scrollWidth'))),
			(T = T),
			a === Io || ((a === io || a === Ta) && i === Ei))
		) {
			p = ki;
			var A = f && T === x && x.visualViewport ? x.visualViewport.height : T[R];
			(y -= A - o.height), (y *= r ? 1 : -1);
		}
		if (a === io || ((a === Io || a === ki) && i === Ei)) {
			C = Ta;
			var I = f && T === x && x.visualViewport ? x.visualViewport.width : T[S];
			(m -= I - o.width), (m *= r ? 1 : -1);
		}
	}
	var k = Object.assign({ position: s }, c && zC),
		$ = u === !0 ? HC({ x: m, y }) : { x: m, y };
	if (((m = $.x), (y = $.y), r)) {
		var B;
		return Object.assign(
			{},
			k,
			((B = {}),
			(B[p] = b ? '0' : ''),
			(B[C] = w ? '0' : ''),
			(B.transform =
				(x.devicePixelRatio || 1) <= 1
					? 'translate(' + m + 'px, ' + y + 'px)'
					: 'translate3d(' + m + 'px, ' + y + 'px, 0)'),
			B),
		);
	}
	return Object.assign(
		{},
		k,
		((t = {}),
		(t[p] = b ? y + 'px' : ''),
		(t[C] = w ? m + 'px' : ''),
		(t.transform = ''),
		t),
	);
}
function jC(e) {
	var t = e.state,
		n = e.options,
		o = n.gpuAcceleration,
		a = o === void 0 ? !0 : o,
		i = n.adaptive,
		l = i === void 0 ? !0 : i,
		s = n.roundOffsets,
		r = s === void 0 ? !0 : s;
	{
		var c = gn(t.elements.popper).transitionProperty || '';
		l &&
			['transform', 'top', 'right', 'bottom', 'left'].some(function (f) {
				return c.indexOf(f) >= 0;
			}) &&
			console.warn(
				[
					'Popper: Detected CSS transitions on at least one of the following',
					'CSS properties: "transform", "top", "right", "bottom", "left".',
					`

`,
					'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
					'for smooth transitions, or remove these properties from the CSS',
					'transition declaration on the popper element if only transitioning',
					'opacity or background-color for example.',
					`

`,
					'We recommend using the popper element as a wrapper around an inner',
					'element that can have any CSS property transitioned for animations.',
				].join(' '),
			);
	}
	var u = {
		placement: nl(t.placement),
		variation: ah(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: a,
		isFixed: t.options.strategy === 'fixed',
	};
	t.modifiersData.popperOffsets != null &&
		(t.styles.popper = Object.assign(
			{},
			t.styles.popper,
			su(
				Object.assign({}, u, {
					offsets: t.modifiersData.popperOffsets,
					position: t.options.strategy,
					adaptive: l,
					roundOffsets: r,
				}),
			),
		)),
		t.modifiersData.arrow != null &&
			(t.styles.arrow = Object.assign(
				{},
				t.styles.arrow,
				su(
					Object.assign({}, u, {
						offsets: t.modifiersData.arrow,
						position: 'absolute',
						adaptive: !1,
						roundOffsets: r,
					}),
				),
			)),
		(t.attributes.popper = Object.assign({}, t.attributes.popper, {
			'data-popper-placement': t.placement,
		}));
}
var WC = {
	name: 'computeStyles',
	enabled: !0,
	phase: 'beforeWrite',
	fn: jC,
	data: {},
};
function UC(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function (n) {
		var o = t.styles[n] || {},
			a = t.attributes[n] || {},
			i = t.elements[n];
		!Lt(i) ||
			!mn(i) ||
			(Object.assign(i.style, o),
			Object.keys(a).forEach(function (l) {
				var s = a[l];
				s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? '' : s);
			}));
	});
}
function YC(e) {
	var t = e.state,
		n = {
			popper: {
				position: t.options.strategy,
				left: '0',
				top: '0',
				margin: '0',
			},
			arrow: { position: 'absolute' },
			reference: {},
		};
	return (
		Object.assign(t.elements.popper.style, n.popper),
		(t.styles = n),
		t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
		function () {
			Object.keys(t.elements).forEach(function (o) {
				var a = t.elements[o],
					i = t.attributes[o] || {},
					l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
					s = l.reduce(function (r, c) {
						return (r[c] = ''), r;
					}, {});
				!Lt(a) ||
					!mn(a) ||
					(Object.assign(a.style, s),
					Object.keys(i).forEach(function (r) {
						a.removeAttribute(r);
					}));
			});
		}
	);
}
var KC = {
		name: 'applyStyles',
		enabled: !0,
		phase: 'write',
		fn: UC,
		effect: YC,
		requires: ['computeStyles'],
	},
	qC = [VC, FC, WC, KC],
	GC = MC({ defaultModifiers: qC });
function XC(e, t, n) {
	var o = nl(e),
		a = [io, Io].indexOf(o) >= 0 ? -1 : 1,
		i = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
		l = i[0],
		s = i[1];
	return (
		(l = l || 0),
		(s = (s || 0) * a),
		[io, Ta].indexOf(o) >= 0 ? { x: s, y: l } : { x: l, y: s }
	);
}
function ZC(e) {
	var t = e.state,
		n = e.options,
		o = e.name,
		a = n.offset,
		i = a === void 0 ? [0, 0] : a,
		l = vC.reduce(function (u, f) {
			return (u[f] = XC(f, t.rects, i)), u;
		}, {}),
		s = l[t.placement],
		r = s.x,
		c = s.y;
	t.modifiersData.popperOffsets != null &&
		((t.modifiersData.popperOffsets.x += r),
		(t.modifiersData.popperOffsets.y += c)),
		(t.modifiersData[o] = l);
}
var JC = {
	name: 'offset',
	enabled: !0,
	phase: 'main',
	requires: ['popperOffsets'],
	fn: ZC,
};
const [QC, Zn] = U('popover'),
	e1 = [
		'overlay',
		'duration',
		'teleport',
		'overlayStyle',
		'overlayClass',
		'closeOnClickOverlay',
	],
	t1 = {
		show: Boolean,
		theme: Z('light'),
		overlay: Boolean,
		actions: Ne(),
		actionsDirection: Z('vertical'),
		trigger: Z('click'),
		duration: q,
		showArrow: z,
		placement: Z('bottom'),
		iconPrefix: String,
		overlayClass: ze,
		overlayStyle: Object,
		closeOnClickAction: z,
		closeOnClickOverlay: z,
		closeOnClickOutside: z,
		offset: { type: Array, default: () => [0, 8] },
		teleport: { type: [String, Object], default: 'body' },
	};
var n1 = j({
	name: QC,
	props: t1,
	emits: ['select', 'touchstart', 'update:show'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		let a;
		const i = D(),
			l = D(),
			s = D(),
			r = Gr(
				() => e.show,
				b => t('update:show', b),
			),
			c = () => ({
				placement: e.placement,
				modifiers: [
					{
						name: 'computeStyles',
						options: { adaptive: !1, gpuAcceleration: !1 },
					},
					de({}, JC, { options: { offset: e.offset } }),
				],
			}),
			u = () =>
				l.value && s.value ? GC(l.value, s.value.popupRef.value, c()) : null,
			f = () => {
				Te(() => {
					r.value &&
						(a
							? a.setOptions(c())
							: ((a = u()),
								wt &&
									(window.addEventListener('animationend', f),
									window.addEventListener('transitionend', f))));
				});
			},
			h = b => {
				r.value = b;
			},
			m = () => {
				e.trigger === 'click' && (r.value = !r.value);
			},
			g = (b, C) => {
				b.disabled ||
					(t('select', b, C), e.closeOnClickAction && (r.value = !1));
			},
			y = () => {
				r.value &&
					e.closeOnClickOutside &&
					(!e.overlay || e.closeOnClickOverlay) &&
					(r.value = !1);
			},
			v = (b, C) =>
				n.action
					? n.action({ action: b, index: C })
					: [
							b.icon &&
								d(
									Ce,
									{
										name: b.icon,
										classPrefix: e.iconPrefix,
										class: Zn('action-icon'),
									},
									null,
								),
							d(
								'div',
								{
									class: [
										Zn('action-text'),
										{ [Ur]: e.actionsDirection === 'vertical' },
									],
								},
								[b.text],
							),
						],
			w = (b, C) => {
				const { icon: p, color: x, disabled: T, className: R } = b;
				return d(
					'div',
					{
						role: 'menuitem',
						class: [
							Zn('action', { disabled: T, 'with-icon': p }),
							{ [Mb]: e.actionsDirection === 'horizontal' },
							R,
						],
						style: { color: x },
						tabindex: T ? void 0 : 0,
						'aria-disabled': T || void 0,
						onClick: () => g(b, C),
					},
					[v(b, C)],
				);
			};
		return (
			Ue(() => {
				f(),
					Do(() => {
						var b;
						i.value = (b = s.value) == null ? void 0 : b.popupRef.value;
					});
			}),
			en(() => {
				a &&
					(wt &&
						(window.removeEventListener('animationend', f),
						window.removeEventListener('transitionend', f)),
					a.destroy(),
					(a = null));
			}),
			ee(() => [r.value, e.offset, e.placement], f),
			ji([l, i], y, { eventName: 'touchstart' }),
			() => {
				var b;
				return d(Je, null, [
					d('span', { ref: l, class: Zn('wrapper'), onClick: m }, [
						(b = n.reference) == null ? void 0 : b.call(n),
					]),
					d(
						zt,
						_e(
							{
								ref: s,
								show: r.value,
								class: Zn([e.theme]),
								position: '',
								transition: 'van-popover-zoom',
								lockScroll: !1,
								'onUpdate:show': h,
							},
							o,
							Ci(),
							Ie(e, e1),
						),
						{
							default: () => [
								e.showArrow && d('div', { class: Zn('arrow') }, null),
								d(
									'div',
									{ role: 'menu', class: Zn('content', e.actionsDirection) },
									[n.default ? n.default() : e.actions.map(w)],
								),
							],
						},
					),
				]);
			}
		);
	},
});
const o1 = G(n1),
	[a1, Al] = U('progress'),
	i1 = {
		color: String,
		inactive: Boolean,
		pivotText: String,
		textColor: String,
		showPivot: z,
		pivotColor: String,
		trackColor: String,
		strokeWidth: q,
		percentage: { type: q, default: 0, validator: e => +e >= 0 && +e <= 100 },
	};
var l1 = j({
	name: a1,
	props: i1,
	setup(e) {
		const t = L(() => (e.inactive ? void 0 : e.color)),
			n = () => {
				const { textColor: o, pivotText: a, pivotColor: i, percentage: l } = e,
					s = a ?? `${l}%`;
				if (e.showPivot && s) {
					const r = {
						color: o,
						left: `${+l}%`,
						transform: `translate(-${+l}%,-50%)`,
						background: i || t.value,
					};
					return d(
						'span',
						{ style: r, class: Al('pivot', { inactive: e.inactive }) },
						[s],
					);
				}
			};
		return () => {
			const { trackColor: o, percentage: a, strokeWidth: i } = e,
				l = { background: o, height: we(i) },
				s = { width: `${a}%`, background: t.value };
			return d('div', { class: Al(), style: l }, [
				d(
					'span',
					{ class: Al('portion', { inactive: e.inactive }), style: s },
					null,
				),
				n(),
			]);
		};
	},
});
const r1 = G(l1),
	[s1, Jo, c1] = U('pull-refresh'),
	ih = 50,
	u1 = ['pulling', 'loosing', 'success'],
	d1 = {
		disabled: Boolean,
		modelValue: Boolean,
		headHeight: ie(ih),
		successText: String,
		pullingText: String,
		loosingText: String,
		loadingText: String,
		pullDistance: q,
		successDuration: ie(500),
		animationDuration: ie(300),
	};
var f1 = j({
	name: s1,
	props: d1,
	emits: ['change', 'refresh', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		let o;
		const a = D(),
			i = D(),
			l = Fo(a),
			s = He({ status: 'normal', distance: 0, duration: 0 }),
			r = Et(),
			c = () => {
				if (e.headHeight !== ih) return { height: `${e.headHeight}px` };
			},
			u = () => s.status !== 'loading' && s.status !== 'success' && !e.disabled,
			f = p => {
				const x = +(e.pullDistance || e.headHeight);
				return (
					p > x &&
						(p < x * 2
							? (p = x + (p - x) / 2)
							: (p = x * 1.5 + (p - x * 2) / 4)),
					Math.round(p)
				);
			},
			h = (p, x) => {
				const T = +(e.pullDistance || e.headHeight);
				(s.distance = p),
					x
						? (s.status = 'loading')
						: p === 0
							? (s.status = 'normal')
							: p < T
								? (s.status = 'pulling')
								: (s.status = 'loosing'),
					t('change', { status: s.status, distance: p });
			},
			m = () => {
				const { status: p } = s;
				return p === 'normal' ? '' : e[`${p}Text`] || c1(p);
			},
			g = () => {
				const { status: p, distance: x } = s;
				if (n[p]) return n[p]({ distance: x });
				const T = [];
				return (
					u1.includes(p) && T.push(d('div', { class: Jo('text') }, [m()])),
					p === 'loading' &&
						T.push(d(Ft, { class: Jo('loading') }, { default: m })),
					T
				);
			},
			y = () => {
				(s.status = 'success'),
					setTimeout(() => {
						h(0);
					}, +e.successDuration);
			},
			v = p => {
				(o = hn(l.value) === 0), o && ((s.duration = 0), r.start(p));
			},
			w = p => {
				u() && v(p);
			},
			b = p => {
				if (u()) {
					o || v(p);
					const { deltaY: x } = r;
					r.move(p),
						o && x.value >= 0 && r.isVertical() && (Me(p), h(f(x.value)));
				}
			},
			C = () => {
				o &&
					r.deltaY.value &&
					u() &&
					((s.duration = +e.animationDuration),
					s.status === 'loosing'
						? (h(+e.headHeight, !0),
							t('update:modelValue', !0),
							Te(() => t('refresh')))
						: h(0));
			};
		return (
			ee(
				() => e.modelValue,
				p => {
					(s.duration = +e.animationDuration),
						p
							? h(+e.headHeight, !0)
							: n.success || e.successText
								? y()
								: h(0, !1);
				},
			),
			We('touchmove', b, { target: i }),
			() => {
				var p;
				const x = {
					transitionDuration: `${s.duration}ms`,
					transform: s.distance ? `translate3d(0,${s.distance}px, 0)` : '',
				};
				return d('div', { ref: a, class: Jo() }, [
					d(
						'div',
						{
							ref: i,
							class: Jo('track'),
							style: x,
							onTouchstartPassive: w,
							onTouchend: C,
							onTouchcancel: C,
						},
						[
							d('div', { class: Jo('head'), style: c() }, [g()]),
							(p = n.default) == null ? void 0 : p.call(n),
						],
					),
				]);
			}
		);
	},
});
const h1 = G(f1),
	[m1, ei] = U('rate');
function g1(e, t, n, o) {
	return e >= t
		? { status: 'full', value: 1 }
		: e + 0.5 >= t && n && !o
			? { status: 'half', value: 0.5 }
			: e + 1 >= t && n && o
				? { status: 'half', value: Math.round((e - t + 1) * 1e10) / 1e10 }
				: { status: 'void', value: 0 };
}
const v1 = {
	size: q,
	icon: Z('star'),
	color: String,
	count: ie(5),
	gutter: q,
	clearable: Boolean,
	readonly: Boolean,
	disabled: Boolean,
	voidIcon: Z('star-o'),
	allowHalf: Boolean,
	voidColor: String,
	touchable: z,
	iconPrefix: String,
	modelValue: Ke(0),
	disabledColor: String,
};
var b1 = j({
	name: m1,
	props: v1,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t }) {
		const n = Et(),
			[o, a] = Pa(),
			i = D(),
			l = L(() => e.readonly || e.disabled),
			s = L(() => l.value || !e.touchable),
			r = L(() =>
				Array(+e.count)
					.fill('')
					.map((C, p) => g1(e.modelValue, p + 1, e.allowHalf, e.readonly)),
			);
		let c,
			u,
			f = Number.MAX_SAFE_INTEGER,
			h = Number.MIN_SAFE_INTEGER;
		const m = () => {
				u = Ae(i);
				const C = o.value.map(Ae);
				(c = []),
					C.forEach((p, x) => {
						(f = Math.min(p.top, f)),
							(h = Math.max(p.top, h)),
							e.allowHalf
								? c.push(
										{
											score: x + 0.5,
											left: p.left,
											top: p.top,
											height: p.height,
										},
										{
											score: x + 1,
											left: p.left + p.width / 2,
											top: p.top,
											height: p.height,
										},
									)
								: c.push({
										score: x + 1,
										left: p.left,
										top: p.top,
										height: p.height,
									});
					});
			},
			g = (C, p) => {
				for (let x = c.length - 1; x > 0; x--)
					if (p >= u.top && p <= u.bottom) {
						if (C > c[x].left && p >= c[x].top && p <= c[x].top + c[x].height)
							return c[x].score;
					} else {
						const T = p < u.top ? f : h;
						if (C > c[x].left && c[x].top === T) return c[x].score;
					}
				return e.allowHalf ? 0.5 : 1;
			},
			y = C => {
				l.value ||
					C === e.modelValue ||
					(t('update:modelValue', C), t('change', C));
			},
			v = C => {
				s.value || (n.start(C), m());
			},
			w = C => {
				if (!s.value && (n.move(C), n.isHorizontal() && !n.isTap.value)) {
					const { clientX: p, clientY: x } = C.touches[0];
					Me(C), y(g(p, x));
				}
			},
			b = (C, p) => {
				const {
						icon: x,
						size: T,
						color: R,
						count: S,
						gutter: A,
						voidIcon: I,
						disabled: k,
						voidColor: $,
						allowHalf: B,
						iconPrefix: X,
						disabledColor: V,
					} = e,
					O = p + 1,
					F = C.status === 'full',
					Y = C.status === 'void',
					me = B && C.value > 0 && C.value < 1;
				let ve;
				A && O !== +S && (ve = { paddingRight: we(A) });
				const ne = se => {
					m();
					let be = B ? g(se.clientX, se.clientY) : O;
					e.clearable && n.isTap.value && be === e.modelValue && (be = 0),
						y(be);
				};
				return d(
					'div',
					{
						key: p,
						ref: a(p),
						role: 'radio',
						style: ve,
						class: ei('item'),
						tabindex: k ? void 0 : 0,
						'aria-setsize': S,
						'aria-posinset': O,
						'aria-checked': !Y,
						onClick: ne,
					},
					[
						d(
							Ce,
							{
								size: T,
								name: F ? x : I,
								class: ei('icon', { disabled: k, full: F }),
								color: k ? V : F ? R : $,
								classPrefix: X,
							},
							null,
						),
						me &&
							d(
								Ce,
								{
									size: T,
									style: { width: C.value + 'em' },
									name: Y ? I : x,
									class: ei('icon', ['half', { disabled: k, full: !Y }]),
									color: k ? V : Y ? $ : R,
									classPrefix: X,
								},
								null,
							),
					],
				);
			};
		return (
			jn(() => e.modelValue),
			We('touchmove', w, { target: i }),
			() =>
				d(
					'div',
					{
						ref: i,
						role: 'radiogroup',
						class: ei({ readonly: e.readonly, disabled: e.disabled }),
						tabindex: e.disabled ? void 0 : 0,
						'aria-disabled': e.disabled,
						'aria-readonly': e.readonly,
						onTouchstartPassive: v,
					},
					[r.value.map(b)],
				)
		);
	},
});
const y1 = G(b1),
	p1 = {
		figureArr: Ne(),
		delay: Number,
		duration: Ke(2),
		isStart: Boolean,
		direction: Z('down'),
		height: Ke(40),
	},
	[w1, Rl] = U('rolling-text-item');
var x1 = j({
	name: w1,
	props: p1,
	setup(e) {
		const t = L(() =>
				e.direction === 'down' ? e.figureArr.slice().reverse() : e.figureArr,
			),
			n = L(() => `-${e.height * (e.figureArr.length - 1)}px`),
			o = L(() => ({ lineHeight: we(e.height) })),
			a = L(() => ({
				height: we(e.height),
				'--van-translate': n.value,
				'--van-duration': e.duration + 's',
				'--van-delay': e.delay + 's',
			}));
		return () =>
			d('div', { class: Rl([e.direction]), style: a.value }, [
				d('div', { class: Rl('box', { animate: e.isStart }) }, [
					Array.isArray(t.value) &&
						t.value.map(i =>
							d('div', { class: Rl('item'), style: o.value }, [i]),
						),
				]),
			]);
	},
});
const [S1, C1] = U('rolling-text'),
	T1 = {
		startNum: Ke(0),
		targetNum: Number,
		textList: Ne(),
		duration: Ke(2),
		autoStart: z,
		direction: Z('down'),
		stopOrder: Z('ltr'),
		height: Ke(40),
	},
	_1 = 2;
var k1 = j({
	name: S1,
	props: T1,
	setup(e) {
		const t = L(() => Array.isArray(e.textList) && e.textList.length),
			n = L(() =>
				t.value
					? e.textList[0].length
					: `${Math.max(e.startNum, e.targetNum)}`.length,
			),
			o = f => {
				const h = [];
				for (let m = 0; m < e.textList.length; m++) h.push(e.textList[m][f]);
				return h;
			},
			a = L(() =>
				t.value
					? new Array(n.value).fill('')
					: Ot(e.targetNum, n.value).split(''),
			),
			i = L(() => Ot(e.startNum, n.value).split('')),
			l = f => {
				const h = +i.value[f],
					m = +a.value[f],
					g = [];
				for (let y = h; y <= 9; y++) g.push(y);
				for (let y = 0; y <= _1; y++) for (let v = 0; v <= 9; v++) g.push(v);
				for (let y = 0; y <= m; y++) g.push(y);
				return g;
			},
			s = (f, h) => (e.stopOrder === 'ltr' ? 0.2 * f : 0.2 * (h - 1 - f)),
			r = D(e.autoStart),
			c = () => {
				r.value = !0;
			},
			u = () => {
				(r.value = !1), e.autoStart && it(() => c());
			};
		return (
			ee(
				() => e.autoStart,
				f => {
					f && c();
				},
			),
			ke({ start: c, reset: u }),
			() =>
				d('div', { class: C1() }, [
					a.value.map((f, h) =>
						d(
							x1,
							{
								figureArr: t.value ? o(h) : l(h),
								duration: e.duration,
								direction: e.direction,
								isStart: r.value,
								height: e.height,
								delay: s(h, n.value),
							},
							null,
						),
					),
				])
		);
	},
});
const E1 = G(k1),
	$1 = G(bw),
	[P1, Qo, I1] = U('search'),
	A1 = de({}, Qr, {
		label: String,
		shape: Z('square'),
		leftIcon: Z('search'),
		clearable: z,
		actionText: String,
		background: String,
		showAction: Boolean,
	});
var R1 = j({
	name: P1,
	props: A1,
	emits: [
		'blur',
		'focus',
		'clear',
		'search',
		'cancel',
		'clickInput',
		'clickLeftIcon',
		'clickRightIcon',
		'update:modelValue',
	],
	setup(e, { emit: t, slots: n, attrs: o }) {
		const a = Ho(),
			i = D(),
			l = () => {
				n.action || (t('update:modelValue', ''), t('cancel'));
			},
			s = x => {
				x.keyCode === 13 && (Me(x), t('search', e.modelValue));
			},
			r = () => e.id || `${a}-input`,
			c = () => {
				if (n.label || e.label)
					return d('label', { class: Qo('label'), for: r() }, [
						n.label ? n.label() : e.label,
					]);
			},
			u = () => {
				if (e.showAction) {
					const x = e.actionText || I1('cancel');
					return d(
						'div',
						{ class: Qo('action'), role: 'button', tabindex: 0, onClick: l },
						[n.action ? n.action() : x],
					);
				}
			},
			f = () => {
				var x;
				return (x = i.value) == null ? void 0 : x.blur();
			},
			h = () => {
				var x;
				return (x = i.value) == null ? void 0 : x.focus();
			},
			m = x => t('blur', x),
			g = x => t('focus', x),
			y = x => t('clear', x),
			v = x => t('clickInput', x),
			w = x => t('clickLeftIcon', x),
			b = x => t('clickRightIcon', x),
			C = Object.keys(Qr),
			p = () => {
				const x = de({}, o, Ie(e, C), { id: r() }),
					T = R => t('update:modelValue', R);
				return d(
					un,
					_e(
						{
							ref: i,
							type: 'search',
							class: Qo('field', { 'with-message': x.errorMessage }),
							border: !1,
							onBlur: m,
							onFocus: g,
							onClear: y,
							onKeypress: s,
							onClickInput: v,
							onClickLeftIcon: w,
							onClickRightIcon: b,
							'onUpdate:modelValue': T,
						},
						x,
					),
					Ie(n, ['left-icon', 'right-icon']),
				);
			};
		return (
			ke({ focus: h, blur: f }),
			() => {
				var x;
				return d(
					'div',
					{
						class: Qo({ 'show-action': e.showAction }),
						style: { background: e.background },
					},
					[
						(x = n.left) == null ? void 0 : x.call(n),
						d('div', { class: Qo('content', e.shape) }, [c(), p()]),
						u(),
					],
				);
			}
		);
	},
});
const O1 = G(R1),
	B1 = e => (e == null ? void 0 : e.includes('/')),
	D1 = [...Kr, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'],
	M1 = {
		qq: 'qq',
		link: 'link-o',
		weibo: 'weibo',
		qrcode: 'qr',
		poster: 'photo-o',
		wechat: 'wechat',
		'weapp-qrcode': 'miniprogram-o',
		'wechat-moments': 'wechat-moments',
	},
	[L1, It, V1] = U('share-sheet'),
	N1 = de({}, zo, {
		title: String,
		round: z,
		options: Ne(),
		cancelText: String,
		description: String,
		closeOnPopstate: z,
		safeAreaInsetBottom: z,
	});
var F1 = j({
	name: L1,
	props: N1,
	emits: ['cancel', 'select', 'update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = h => t('update:show', h),
			a = () => {
				o(!1), t('cancel');
			},
			i = (h, m) => t('select', h, m),
			l = () => {
				const h = n.title ? n.title() : e.title,
					m = n.description ? n.description() : e.description;
				if (h || m)
					return d('div', { class: It('header') }, [
						h && d('h2', { class: It('title') }, [h]),
						m && d('span', { class: It('description') }, [m]),
					]);
			},
			s = h =>
				B1(h)
					? d('img', { src: h, class: It('image-icon') }, null)
					: d('div', { class: It('icon', [h]) }, [
							d(Ce, { name: M1[h] || h }, null),
						]),
			r = (h, m) => {
				const { name: g, icon: y, className: v, description: w } = h;
				return d(
					'div',
					{
						role: 'button',
						tabindex: 0,
						class: [It('option'), v, vt],
						onClick: () => i(h, m),
					},
					[
						s(y),
						g && d('span', { class: It('name') }, [g]),
						w && d('span', { class: It('option-description') }, [w]),
					],
				);
			},
			c = (h, m) =>
				d('div', { class: It('options', { border: m }) }, [h.map(r)]),
			u = () => {
				const { options: h } = e;
				return Array.isArray(h[0]) ? h.map((m, g) => c(m, g !== 0)) : c(h);
			},
			f = () => {
				var h;
				const m = (h = e.cancelText) != null ? h : V1('cancel');
				if (n.cancel || m)
					return d(
						'button',
						{ type: 'button', class: It('cancel'), onClick: a },
						[n.cancel ? n.cancel() : m],
					);
			};
		return () =>
			d(
				zt,
				_e({ class: It(), position: 'bottom', 'onUpdate:show': o }, Ie(e, D1)),
				{ default: () => [l(), u(), f()] },
			);
	},
});
const z1 = G(F1),
	[lh, H1] = U('sidebar'),
	rh = Symbol(lh),
	j1 = { modelValue: ie(0) };
var W1 = j({
	name: lh,
	props: j1,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt(rh),
			a = () => +e.modelValue;
		return (
			o({
				getActive: a,
				setActive: l => {
					l !== a() && (t('update:modelValue', l), t('change', l));
				},
			}),
			() => {
				var l;
				return d('div', { role: 'tablist', class: H1() }, [
					(l = n.default) == null ? void 0 : l.call(n),
				]);
			}
		);
	},
});
const sh = G(W1),
	[U1, cu] = U('sidebar-item'),
	Y1 = de({}, Un, {
		dot: Boolean,
		title: String,
		badge: q,
		disabled: Boolean,
		badgeProps: Object,
	});
var K1 = j({
	name: U1,
	props: Y1,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = so(),
			{ parent: a, index: i } = ot(rh);
		if (!a) return;
		const l = () => {
			e.disabled || (t('click', i.value), a.setActive(i.value), o());
		};
		return () => {
			const { dot: s, badge: r, title: c, disabled: u } = e,
				f = i.value === a.getActive();
			return d(
				'div',
				{
					role: 'tab',
					class: cu({ select: f, disabled: u }),
					tabindex: u ? void 0 : 0,
					'aria-selected': f,
					onClick: l,
				},
				[
					d(co, _e({ dot: s, class: cu('text'), content: r }, e.badgeProps), {
						default: () => [n.title ? n.title() : c],
					}),
				],
			);
		};
	},
});
const ch = G(K1),
	[q1, Ol, uu] = U('signature'),
	G1 = {
		tips: String,
		type: Z('png'),
		penColor: Z('#000'),
		lineWidth: Ke(3),
		clearButtonText: String,
		backgroundColor: Z(''),
		confirmButtonText: String,
	},
	X1 = () => {
		var e;
		const t = document.createElement('canvas');
		return !!((e = t.getContext) != null && e.call(t, '2d'));
	};
var Z1 = j({
	name: q1,
	props: G1,
	emits: ['submit', 'clear', 'start', 'end', 'signing'],
	setup(e, { emit: t }) {
		const n = D(),
			o = D(),
			a = L(() => (n.value ? n.value.getContext('2d') : null)),
			i = wt ? X1() : !0;
		let l = 0,
			s = 0,
			r;
		const c = () => {
				if (!a.value) return !1;
				a.value.beginPath(),
					(a.value.lineWidth = e.lineWidth),
					(a.value.strokeStyle = e.penColor),
					(r = Ae(n)),
					t('start');
			},
			u = b => {
				if (!a.value) return !1;
				Me(b);
				const C = b.touches[0],
					p = C.clientX - ((r == null ? void 0 : r.left) || 0),
					x = C.clientY - ((r == null ? void 0 : r.top) || 0);
				(a.value.lineCap = 'round'),
					(a.value.lineJoin = 'round'),
					a.value.lineTo(p, x),
					a.value.stroke(),
					t('signing', b);
			},
			f = b => {
				Me(b), t('end');
			},
			h = b => {
				const C = document.createElement('canvas');
				if (((C.width = b.width), (C.height = b.height), e.backgroundColor)) {
					const p = C.getContext('2d');
					m(p);
				}
				return b.toDataURL() === C.toDataURL();
			},
			m = b => {
				b &&
					e.backgroundColor &&
					((b.fillStyle = e.backgroundColor), b.fillRect(0, 0, l, s));
			},
			g = () => {
				var b, C;
				const p = n.value;
				if (!p) return;
				const T = h(p)
					? ''
					: ((C = (b = {
							jpg: () => p.toDataURL('image/jpeg', 0.8),
							jpeg: () => p.toDataURL('image/jpeg', 0.8),
						})[e.type]) == null
							? void 0
							: C.call(b)) || p.toDataURL(`image/${e.type}`);
				t('submit', { image: T, canvas: p });
			},
			y = () => {
				a.value &&
					(a.value.clearRect(0, 0, l, s), a.value.closePath(), m(a.value)),
					t('clear');
			},
			v = () => {
				var b, C, p;
				if (i && n.value) {
					const x = n.value,
						T = wt ? window.devicePixelRatio : 1;
					(l = x.width =
						(((b = o.value) == null ? void 0 : b.offsetWidth) || 0) * T),
						(s = x.height =
							(((C = o.value) == null ? void 0 : C.offsetHeight) || 0) * T),
						(p = a.value) == null || p.scale(T, T),
						m(a.value);
				}
			},
			w = () => {
				if (a.value) {
					const b = a.value.getImageData(0, 0, l, s);
					v(), a.value.putImageData(b, 0, 0);
				}
			};
		return (
			ee(Mt, w),
			Ue(v),
			ke({ resize: w, clear: y, submit: g }),
			() =>
				d('div', { class: Ol() }, [
					d('div', { class: Ol('content'), ref: o }, [
						i
							? d(
									'canvas',
									{
										ref: n,
										onTouchstartPassive: c,
										onTouchmove: u,
										onTouchend: f,
									},
									null,
								)
							: d('p', null, [e.tips]),
					]),
					d('div', { class: Ol('footer') }, [
						d(
							lt,
							{ size: 'small', onClick: y },
							{ default: () => [e.clearButtonText || uu('clear')] },
						),
						d(
							lt,
							{ type: 'primary', size: 'small', onClick: g },
							{ default: () => [e.confirmButtonText || uu('confirm')] },
						),
					]),
				])
		);
	},
});
const J1 = G(Z1),
	[Q1, eT] = U('skeleton-title'),
	tT = { round: Boolean, titleWidth: q };
var nT = j({
	name: Q1,
	props: tT,
	setup(e) {
		return () =>
			d(
				'h3',
				{ class: eT([{ round: e.round }]), style: { width: we(e.titleWidth) } },
				null,
			);
	},
});
const uh = G(nT);
var oT = uh;
const [aT, iT] = U('skeleton-avatar'),
	lT = { avatarSize: q, avatarShape: Z('round') };
var rT = j({
	name: aT,
	props: lT,
	setup(e) {
		return () =>
			d('div', { class: iT([e.avatarShape]), style: bn(e.avatarSize) }, null);
	},
});
const dh = G(rT);
var sT = dh;
const us = '100%',
	cT = { round: Boolean, rowWidth: { type: q, default: us } },
	[uT, dT] = U('skeleton-paragraph');
var fT = j({
	name: uT,
	props: cT,
	setup(e) {
		return () =>
			d(
				'div',
				{ class: dT([{ round: e.round }]), style: { width: e.rowWidth } },
				null,
			);
	},
});
const fh = G(fT);
var hT = fh;
const [mT, du] = U('skeleton'),
	gT = '60%',
	vT = {
		row: ie(0),
		round: Boolean,
		title: Boolean,
		titleWidth: q,
		avatar: Boolean,
		avatarSize: q,
		avatarShape: Z('round'),
		loading: z,
		animate: z,
		rowWidth: { type: [Number, String, Array], default: us },
	};
var bT = j({
	name: mT,
	inheritAttrs: !1,
	props: vT,
	setup(e, { slots: t, attrs: n }) {
		const o = () => {
				if (e.avatar)
					return d(
						sT,
						{ avatarShape: e.avatarShape, avatarSize: e.avatarSize },
						null,
					);
			},
			a = () => {
				if (e.title)
					return d(oT, { round: e.round, titleWidth: e.titleWidth }, null);
			},
			i = r => {
				const { rowWidth: c } = e;
				return c === us && r === +e.row - 1 ? gT : Array.isArray(c) ? c[r] : c;
			},
			l = () =>
				Array(+e.row)
					.fill('')
					.map((r, c) =>
						d(hT, { key: c, round: e.round, rowWidth: we(i(c)) }, null),
					),
			s = () =>
				t.template
					? t.template()
					: d(Je, null, [o(), d('div', { class: du('content') }, [a(), l()])]);
		return () => {
			var r;
			return e.loading
				? d(
						'div',
						_e({ class: du({ animate: e.animate, round: e.round }) }, n),
						[s()],
					)
				: (r = t.default) == null
					? void 0
					: r.call(t);
		};
	},
});
const yT = G(bT),
	[pT, fu] = U('skeleton-image'),
	wT = { imageSize: q, imageShape: Z('square') };
var xT = j({
	name: pT,
	props: wT,
	setup(e) {
		return () =>
			d('div', { class: fu([e.imageShape]), style: bn(e.imageSize) }, [
				d(Ce, { name: 'photo', class: fu('icon') }, null),
			]);
	},
});
const ST = G(xT),
	[CT, ea] = U('slider'),
	TT = {
		min: ie(0),
		max: ie(100),
		step: ie(1),
		range: Boolean,
		reverse: Boolean,
		disabled: Boolean,
		readonly: Boolean,
		vertical: Boolean,
		barHeight: q,
		buttonSize: q,
		activeColor: String,
		inactiveColor: String,
		modelValue: { type: [Number, Array], default: 0 },
	};
var _T = j({
	name: CT,
	props: TT,
	emits: ['change', 'dragEnd', 'dragStart', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		let o, a, i;
		const l = D(),
			s = [D(), D()],
			r = D(),
			c = Et(),
			u = L(() => Number(e.max) - Number(e.min)),
			f = L(() => {
				const k = e.vertical ? 'width' : 'height';
				return { background: e.inactiveColor, [k]: we(e.barHeight) };
			}),
			h = k => e.range && Array.isArray(k),
			m = () => {
				const { modelValue: k, min: $ } = e;
				return h(k)
					? `${((k[1] - k[0]) * 100) / u.value}%`
					: `${((k - Number($)) * 100) / u.value}%`;
			},
			g = () => {
				const { modelValue: k, min: $ } = e;
				return h(k) ? `${((k[0] - Number($)) * 100) / u.value}%` : '0%';
			},
			y = L(() => {
				const $ = {
					[e.vertical ? 'height' : 'width']: m(),
					background: e.activeColor,
				};
				r.value && ($.transition = 'none');
				const B = () =>
					e.vertical
						? e.reverse
							? 'bottom'
							: 'top'
						: e.reverse
							? 'right'
							: 'left';
				return ($[B()] = g()), $;
			}),
			v = k => {
				const $ = +e.min,
					B = +e.max,
					X = +e.step;
				k = et(k, $, B);
				const V = Math.round((k - $) / X) * X;
				return Ud($, V);
			},
			w = () => {
				const k = e.modelValue;
				h(k) ? (i = k.map(v)) : (i = v(k));
			},
			b = k => {
				var $, B;
				const X = ($ = k[0]) != null ? $ : Number(e.min),
					V = (B = k[1]) != null ? B : Number(e.max);
				return X > V ? [V, X] : [X, V];
			},
			C = (k, $) => {
				h(k) ? (k = b(k).map(v)) : (k = v(k)),
					Xt(k, e.modelValue) || t('update:modelValue', k),
					$ && !Xt(k, i) && t('change', k);
			},
			p = k => {
				if ((k.stopPropagation(), e.disabled || e.readonly)) return;
				w();
				const { min: $, reverse: B, vertical: X, modelValue: V } = e,
					O = Ae(l),
					F = () =>
						X
							? B
								? O.bottom - k.clientY
								: k.clientY - O.top
							: B
								? O.right - k.clientX
								: k.clientX - O.left,
					Y = X ? O.height : O.width,
					me = Number($) + (F() / Y) * u.value;
				if (h(V)) {
					const [ve, ne] = V,
						se = (ve + ne) / 2;
					me <= se ? C([me, ne], !0) : C([ve, me], !0);
				} else C(me, !0);
			},
			x = k => {
				e.disabled ||
					e.readonly ||
					(c.start(k), (a = e.modelValue), w(), (r.value = 'start'));
			},
			T = k => {
				if (e.disabled || e.readonly) return;
				r.value === 'start' && t('dragStart', k),
					Me(k, !0),
					c.move(k),
					(r.value = 'dragging');
				const $ = Ae(l),
					B = e.vertical ? c.deltaY.value : c.deltaX.value,
					X = e.vertical ? $.height : $.width;
				let V = (B / X) * u.value;
				if ((e.reverse && (V = -V), h(i))) {
					const O = e.reverse ? 1 - o : o;
					a[O] = i[O] + V;
				} else a = i + V;
				C(a);
			},
			R = k => {
				e.disabled ||
					e.readonly ||
					(r.value === 'dragging' && (C(a, !0), t('dragEnd', k)),
					(r.value = ''));
			},
			S = k =>
				typeof k == 'number'
					? ea('button-wrapper', ['left', 'right'][k])
					: ea('button-wrapper', e.reverse ? 'left' : 'right'),
			A = (k, $) => {
				const B = r.value === 'dragging';
				if (typeof $ == 'number') {
					const X = n[$ === 0 ? 'left-button' : 'right-button'];
					let V;
					if ((B && Array.isArray(a) && (V = a[0] > a[1] ? o ^ 1 : o), X))
						return X({ value: k, dragging: B, dragIndex: V });
				}
				return n.button
					? n.button({ value: k, dragging: B })
					: d('div', { class: ea('button'), style: bn(e.buttonSize) }, null);
			},
			I = k => {
				const $ = typeof k == 'number' ? e.modelValue[k] : e.modelValue;
				return d(
					'div',
					{
						ref: s[k ?? 0],
						role: 'slider',
						class: S(k),
						tabindex: e.disabled ? void 0 : 0,
						'aria-valuemin': e.min,
						'aria-valuenow': $,
						'aria-valuemax': e.max,
						'aria-disabled': e.disabled || void 0,
						'aria-readonly': e.readonly || void 0,
						'aria-orientation': e.vertical ? 'vertical' : 'horizontal',
						onTouchstartPassive: B => {
							typeof k == 'number' && (o = k), x(B);
						},
						onTouchend: R,
						onTouchcancel: R,
						onClick: jr,
					},
					[A($, k)],
				);
			};
		return (
			C(e.modelValue),
			jn(() => e.modelValue),
			s.forEach(k => {
				We('touchmove', T, { target: k });
			}),
			() =>
				d(
					'div',
					{
						ref: l,
						style: f.value,
						class: ea({ vertical: e.vertical, disabled: e.disabled }),
						onClick: p,
					},
					[
						d('div', { class: ea('bar'), style: y.value }, [
							e.range ? [I(0), I(1)] : I(),
						]),
					],
				)
		);
	},
});
const kT = G(_T),
	[hu, ET] = U('space'),
	$T = {
		align: String,
		direction: { type: String, default: 'horizontal' },
		size: { type: [Number, String, Array], default: 8 },
		wrap: Boolean,
		fill: Boolean,
	};
function hh(e = []) {
	const t = [];
	return (
		e.forEach(n => {
			Array.isArray(n)
				? t.push(...n)
				: n.type === Je
					? t.push(...hh(n.children))
					: t.push(n);
		}),
		t.filter(n => {
			var o;
			return !(
				n &&
				(n.type === pt ||
					(n.type === Je &&
						((o = n.children) == null ? void 0 : o.length) === 0) ||
					(n.type === ka && n.children.trim() === ''))
			);
		})
	);
}
var PT = j({
	name: hu,
	props: $T,
	setup(e, { slots: t }) {
		const n = L(() => {
				var i;
				return (i = e.align) != null
					? i
					: e.direction === 'horizontal'
						? 'center'
						: '';
			}),
			o = i => (typeof i == 'number' ? i + 'px' : i),
			a = i => {
				const l = {},
					s = `${o(Array.isArray(e.size) ? e.size[0] : e.size)}`,
					r = `${o(Array.isArray(e.size) ? e.size[1] : e.size)}`;
				return i
					? e.wrap
						? { marginBottom: r }
						: {}
					: (e.direction === 'horizontal' && (l.marginRight = s),
						(e.direction === 'vertical' || e.wrap) && (l.marginBottom = r),
						l);
			};
		return () => {
			var i;
			const l = hh((i = t.default) == null ? void 0 : i.call(t));
			return d(
				'div',
				{
					class: [
						ET({
							[e.direction]: e.direction,
							[`align-${n.value}`]: n.value,
							wrap: e.wrap,
							fill: e.fill,
						}),
					],
				},
				[
					l.map((s, r) =>
						d(
							'div',
							{
								key: `item-${r}`,
								class: `${hu}-item`,
								style: a(r === l.length - 1),
							},
							[s],
						),
					),
				],
			);
		};
	},
});
const IT = G(PT),
	[mh, mu] = U('steps'),
	AT = {
		active: ie(0),
		direction: Z('horizontal'),
		activeIcon: Z('checked'),
		iconPrefix: String,
		finishIcon: String,
		activeColor: String,
		inactiveIcon: String,
		inactiveColor: String,
	},
	gh = Symbol(mh);
var RT = j({
	name: mh,
	props: AT,
	emits: ['clickStep'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt(gh);
		return (
			o({ props: e, onClickStep: i => t('clickStep', i) }),
			() => {
				var i;
				return d('div', { class: mu([e.direction]) }, [
					d('div', { class: mu('items') }, [
						(i = n.default) == null ? void 0 : i.call(n),
					]),
				]);
			}
		);
	},
});
const [OT, $n] = U('step');
var BT = j({
	name: OT,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(gh);
		if (!n) return;
		const a = n.props,
			i = () => {
				const f = +a.active;
				return o.value < f ? 'finish' : o.value === f ? 'process' : 'waiting';
			},
			l = () => i() === 'process',
			s = L(() => ({
				background: i() === 'finish' ? a.activeColor : a.inactiveColor,
			})),
			r = L(() => {
				if (l()) return { color: a.activeColor };
				if (i() === 'waiting') return { color: a.inactiveColor };
			}),
			c = () => n.onClickStep(o.value),
			u = () => {
				const {
					iconPrefix: f,
					finishIcon: h,
					activeIcon: m,
					activeColor: g,
					inactiveIcon: y,
				} = a;
				return l()
					? t['active-icon']
						? t['active-icon']()
						: d(
								Ce,
								{
									class: $n('icon', 'active'),
									name: m,
									color: g,
									classPrefix: f,
								},
								null,
							)
					: i() === 'finish' && (h || t['finish-icon'])
						? t['finish-icon']
							? t['finish-icon']()
							: d(
									Ce,
									{
										class: $n('icon', 'finish'),
										name: h,
										color: g,
										classPrefix: f,
									},
									null,
								)
						: t['inactive-icon']
							? t['inactive-icon']()
							: y
								? d(Ce, { class: $n('icon'), name: y, classPrefix: f }, null)
								: d('i', { class: $n('circle'), style: s.value }, null);
			};
		return () => {
			var f;
			const h = i();
			return d('div', { class: [pn, $n([a.direction, { [h]: h }])] }, [
				d(
					'div',
					{ class: $n('title', { active: l() }), style: r.value, onClick: c },
					[(f = t.default) == null ? void 0 : f.call(t)],
				),
				d('div', { class: $n('circle-container'), onClick: c }, [u()]),
				d('div', { class: $n('line'), style: s.value }, null),
			]);
		};
	},
});
const DT = G(BT),
	[MT, ti] = U('stepper'),
	LT = 200,
	ni = (e, t) => String(e) === String(t),
	VT = {
		min: ie(1),
		max: ie(1 / 0),
		name: ie(''),
		step: ie(1),
		theme: String,
		integer: Boolean,
		disabled: Boolean,
		showPlus: z,
		showMinus: z,
		showInput: z,
		longPress: z,
		autoFixed: z,
		allowEmpty: Boolean,
		modelValue: q,
		inputWidth: q,
		buttonSize: q,
		placeholder: String,
		disablePlus: Boolean,
		disableMinus: Boolean,
		disableInput: Boolean,
		beforeChange: Function,
		defaultValue: ie(1),
		decimalLength: q,
	};
var NT = j({
	name: MT,
	props: VT,
	emits: [
		'plus',
		'blur',
		'minus',
		'focus',
		'change',
		'overlimit',
		'update:modelValue',
	],
	setup(e, { emit: t }) {
		const n = (S, A = !0) => {
				const { min: I, max: k, allowEmpty: $, decimalLength: B } = e;
				return (
					($ && S === '') ||
						((S = ir(String(S), !e.integer)),
						(S = S === '' ? 0 : +S),
						(S = Number.isNaN(S) ? +I : S),
						(S = A ? Math.max(Math.min(+k, S), +I) : S),
						$e(B) && (S = S.toFixed(+B))),
					S
				);
			},
			o = () => {
				var S;
				const A = (S = e.modelValue) != null ? S : e.defaultValue,
					I = n(A);
				return ni(I, e.modelValue) || t('update:modelValue', I), I;
			};
		let a;
		const i = D(),
			l = D(o()),
			s = L(() => e.disabled || e.disableMinus || +l.value <= +e.min),
			r = L(() => e.disabled || e.disablePlus || +l.value >= +e.max),
			c = L(() => ({ width: we(e.inputWidth), height: we(e.buttonSize) })),
			u = L(() => bn(e.buttonSize)),
			f = () => {
				const S = n(l.value);
				ni(S, l.value) || (l.value = S);
			},
			h = S => {
				e.beforeChange
					? Wn(e.beforeChange, {
							args: [S],
							done() {
								l.value = S;
							},
						})
					: (l.value = S);
			},
			m = () => {
				if ((a === 'plus' && r.value) || (a === 'minus' && s.value)) {
					t('overlimit', a);
					return;
				}
				const S = a === 'minus' ? -e.step : +e.step,
					A = n(Ud(+l.value, S));
				h(A), t(a);
			},
			g = S => {
				const A = S.target,
					{ value: I } = A,
					{ decimalLength: k } = e;
				let $ = ir(String(I), !e.integer);
				if ($e(k) && $.includes('.')) {
					const X = $.split('.');
					$ = `${X[0]}.${X[1].slice(0, +k)}`;
				}
				e.beforeChange
					? (A.value = String(l.value))
					: ni(I, $) || (A.value = $);
				const B = $ === String(+$);
				h(B ? +$ : $);
			},
			y = S => {
				var A;
				e.disableInput ? (A = i.value) == null || A.blur() : t('focus', S);
			},
			v = S => {
				const A = S.target,
					I = n(A.value, e.autoFixed);
				(A.value = String(I)),
					(l.value = I),
					Te(() => {
						t('blur', S), jd();
					});
			};
		let w, b;
		const C = () => {
				b = setTimeout(() => {
					m(), C();
				}, LT);
			},
			p = () => {
				e.longPress &&
					((w = !1),
					clearTimeout(b),
					(b = setTimeout(() => {
						(w = !0), m(), C();
					}, Zd)));
			},
			x = S => {
				e.longPress && (clearTimeout(b), w && Me(S));
			},
			T = S => {
				e.disableInput && Me(S);
			},
			R = S => ({
				onClick: A => {
					Me(A), (a = S), m();
				},
				onTouchstartPassive: () => {
					(a = S), p();
				},
				onTouchend: x,
				onTouchcancel: x,
			});
		return (
			ee(() => [e.max, e.min, e.integer, e.decimalLength], f),
			ee(
				() => e.modelValue,
				S => {
					ni(S, l.value) || (l.value = n(S));
				},
			),
			ee(l, S => {
				t('update:modelValue', S), t('change', S, { name: e.name });
			}),
			jn(() => e.modelValue),
			() =>
				d('div', { role: 'group', class: ti([e.theme]) }, [
					Qe(
						d(
							'button',
							_e(
								{
									type: 'button',
									style: u.value,
									class: [
										ti('minus', { disabled: s.value }),
										{ [vt]: !s.value },
									],
									'aria-disabled': s.value || void 0,
								},
								R('minus'),
							),
							null,
						),
						[[nt, e.showMinus]],
					),
					Qe(
						d(
							'input',
							{
								ref: i,
								type: e.integer ? 'tel' : 'text',
								role: 'spinbutton',
								class: ti('input'),
								value: l.value,
								style: c.value,
								disabled: e.disabled,
								readonly: e.disableInput,
								inputmode: e.integer ? 'numeric' : 'decimal',
								placeholder: e.placeholder,
								'aria-valuemax': e.max,
								'aria-valuemin': e.min,
								'aria-valuenow': l.value,
								onBlur: v,
								onInput: g,
								onFocus: y,
								onMousedown: T,
							},
							null,
						),
						[[nt, e.showInput]],
					),
					Qe(
						d(
							'button',
							_e(
								{
									type: 'button',
									style: u.value,
									class: [
										ti('plus', { disabled: r.value }),
										{ [vt]: !r.value },
									],
									'aria-disabled': r.value || void 0,
								},
								R('plus'),
							),
							null,
						),
						[[nt, e.showPlus]],
					),
				])
		);
	},
});
const FT = G(NT),
	zT = G(RT),
	[HT, At, jT] = U('submit-bar'),
	WT = {
		tip: String,
		label: String,
		price: Number,
		tipIcon: String,
		loading: Boolean,
		currency: Z('¥'),
		disabled: Boolean,
		textAlign: String,
		buttonText: String,
		buttonType: Z('danger'),
		buttonColor: String,
		suffixLabel: String,
		placeholder: Boolean,
		decimalLength: ie(2),
		safeAreaInsetBottom: z,
	};
var UT = j({
	name: HT,
	props: WT,
	emits: ['submit'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Ki(o, At),
			i = () => {
				const {
					price: u,
					label: f,
					currency: h,
					textAlign: m,
					suffixLabel: g,
					decimalLength: y,
				} = e;
				if (typeof u == 'number') {
					const v = (u / 100).toFixed(+y).split('.'),
						w = y ? `.${v[1]}` : '';
					return d('div', { class: At('text'), style: { textAlign: m } }, [
						d('span', null, [f || jT('label')]),
						d('span', { class: At('price') }, [
							h,
							d('span', { class: At('price-integer') }, [v[0]]),
							w,
						]),
						g && d('span', { class: At('suffix-label') }, [g]),
					]);
				}
			},
			l = () => {
				var u;
				const { tip: f, tipIcon: h } = e;
				if (n.tip || f)
					return d('div', { class: At('tip') }, [
						h && d(Ce, { class: At('tip-icon'), name: h }, null),
						f && d('span', { class: At('tip-text') }, [f]),
						(u = n.tip) == null ? void 0 : u.call(n),
					]);
			},
			s = () => t('submit'),
			r = () =>
				n.button
					? n.button()
					: d(
							lt,
							{
								round: !0,
								type: e.buttonType,
								text: e.buttonText,
								class: At('button', e.buttonType),
								color: e.buttonColor,
								loading: e.loading,
								disabled: e.disabled,
								onClick: s,
							},
							null,
						),
			c = () => {
				var u, f;
				return d(
					'div',
					{
						ref: o,
						class: [At(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }],
					},
					[
						(u = n.top) == null ? void 0 : u.call(n),
						l(),
						d('div', { class: At('bar') }, [
							(f = n.default) == null ? void 0 : f.call(n),
							i(),
							r(),
						]),
					],
				);
			};
		return () => (e.placeholder ? a(c) : c());
	},
});
const YT = G(UT),
	[KT, Bl] = U('swipe-cell'),
	qT = {
		name: ie(''),
		disabled: Boolean,
		leftWidth: q,
		rightWidth: q,
		beforeClose: Function,
		stopPropagation: Boolean,
	};
var GT = j({
	name: KT,
	props: qT,
	emits: ['open', 'close', 'click'],
	setup(e, { emit: t, slots: n }) {
		let o, a, i, l;
		const s = D(),
			r = D(),
			c = D(),
			u = He({ offset: 0, dragging: !1 }),
			f = Et(),
			h = S => (S.value ? Ae(S).width : 0),
			m = L(() => ($e(e.leftWidth) ? +e.leftWidth : h(r))),
			g = L(() => ($e(e.rightWidth) ? +e.rightWidth : h(c))),
			y = S => {
				(u.offset = S === 'left' ? m.value : -g.value),
					o || ((o = !0), t('open', { name: e.name, position: S }));
			},
			v = S => {
				(u.offset = 0),
					o && ((o = !1), t('close', { name: e.name, position: S }));
			},
			w = S => {
				const A = Math.abs(u.offset),
					I = 0.15,
					k = o ? 1 - I : I,
					$ = S === 'left' ? m.value : g.value;
				$ && A > $ * k ? y(S) : v(S);
			},
			b = S => {
				e.disabled || ((i = u.offset), f.start(S));
			},
			C = S => {
				if (e.disabled) return;
				const { deltaX: A } = f;
				f.move(S),
					f.isHorizontal() &&
						((a = !0),
						(u.dragging = !0),
						(!o || A.value * i < 0) && Me(S, e.stopPropagation),
						(u.offset = et(A.value + i, -g.value, m.value)));
			},
			p = () => {
				u.dragging &&
					((u.dragging = !1),
					w(u.offset > 0 ? 'left' : 'right'),
					setTimeout(() => {
						a = !1;
					}, 0));
			},
			x = (S = 'outside') => {
				l ||
					(t('click', S),
					o &&
						!a &&
						((l = !0),
						Wn(e.beforeClose, {
							args: [{ name: e.name, position: S }],
							done: () => {
								(l = !1), v(S);
							},
							canceled: () => (l = !1),
							error: () => (l = !1),
						})));
			},
			T = (S, A) => I => {
				A && I.stopPropagation(), x(S);
			},
			R = (S, A) => {
				const I = n[S];
				if (I)
					return d('div', { ref: A, class: Bl(S), onClick: T(S, !0) }, [I()]);
			};
		return (
			ke({ open: y, close: v }),
			ji(s, () => x('outside'), { eventName: 'touchstart' }),
			We('touchmove', C, { target: s }),
			() => {
				var S;
				const A = {
					transform: `translate3d(${u.offset}px, 0, 0)`,
					transitionDuration: u.dragging ? '0s' : '.6s',
				};
				return d(
					'div',
					{
						ref: s,
						class: Bl(),
						onClick: T('cell', a),
						onTouchstartPassive: b,
						onTouchend: p,
						onTouchcancel: p,
					},
					[
						d('div', { class: Bl('wrapper'), style: A }, [
							R('left', r),
							(S = n.default) == null ? void 0 : S.call(n),
							R('right', c),
						]),
					],
				);
			}
		);
	},
});
const XT = G(GT),
	[vh, gu] = U('tabbar'),
	ZT = {
		route: Boolean,
		fixed: z,
		border: z,
		zIndex: q,
		placeholder: Boolean,
		activeColor: String,
		beforeChange: Function,
		inactiveColor: String,
		modelValue: ie(0),
		safeAreaInsetBottom: { type: Boolean, default: null },
	},
	bh = Symbol(vh);
var JT = j({
	name: vh,
	props: ZT,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			{ linkChildren: a } = rt(bh),
			i = Ki(o, gu),
			l = () => {
				var c;
				return (c = e.safeAreaInsetBottom) != null ? c : e.fixed;
			},
			s = () => {
				var c;
				const { fixed: u, zIndex: f, border: h } = e;
				return d(
					'div',
					{
						ref: o,
						role: 'tablist',
						style: yn(f),
						class: [gu({ fixed: u }), { [Ui]: h, 'van-safe-area-bottom': l() }],
					},
					[(c = n.default) == null ? void 0 : c.call(n)],
				);
			};
		return (
			a({
				props: e,
				setActive: (c, u) => {
					Wn(e.beforeChange, {
						args: [c],
						done() {
							t('update:modelValue', c), t('change', c), u();
						},
					});
				},
			}),
			() => (e.fixed && e.placeholder ? i(s) : s())
		);
	},
});
const QT = G(JT),
	[e_, Dl] = U('tabbar-item'),
	t_ = de({}, Un, {
		dot: Boolean,
		icon: String,
		name: q,
		badge: q,
		badgeProps: Object,
		iconPrefix: String,
	});
var n_ = j({
	name: e_,
	props: t_,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = so(),
			a = Nt().proxy,
			{ parent: i, index: l } = ot(bh);
		if (!i) return;
		const s = L(() => {
				var u;
				const { route: f, modelValue: h } = i.props;
				if (f && '$route' in a) {
					const { $route: m } = a,
						{ to: g } = e,
						y = fn(g) ? g : { path: g };
					return !!m.matched.find(v => {
						const w = 'path' in y && y.path === v.path,
							b = 'name' in y && y.name === v.name;
						return w || b;
					});
				}
				return ((u = e.name) != null ? u : l.value) === h;
			}),
			r = u => {
				var f;
				s.value || i.setActive((f = e.name) != null ? f : l.value, o),
					t('click', u);
			},
			c = () => {
				if (n.icon) return n.icon({ active: s.value });
				if (e.icon)
					return d(Ce, { name: e.icon, classPrefix: e.iconPrefix }, null);
			};
		return () => {
			var u;
			const { dot: f, badge: h } = e,
				{ activeColor: m, inactiveColor: g } = i.props,
				y = s.value ? m : g;
			return d(
				'div',
				{
					role: 'tab',
					class: Dl({ active: s.value }),
					style: { color: y },
					tabindex: 0,
					'aria-selected': s.value,
					onClick: r,
				},
				[
					d(co, _e({ dot: f, class: Dl('icon'), content: h }, e.badgeProps), {
						default: c,
					}),
					d('div', { class: Dl('text') }, [
						(u = n.default) == null ? void 0 : u.call(n, { active: s.value }),
					]),
				],
			);
		};
	},
});
const o_ = G(n_),
	[a_, vu] = U('text-ellipsis'),
	i_ = {
		rows: ie(1),
		dots: Z('...'),
		content: Z(''),
		expandText: Z(''),
		collapseText: Z(''),
		position: Z('end'),
	};
var l_ = j({
	name: a_,
	props: i_,
	emits: ['clickAction'],
	setup(e, { emit: t, slots: n }) {
		const o = D(''),
			a = D(!1),
			i = D(!1),
			l = D();
		let s = !1;
		const r = L(() => (a.value ? e.collapseText : e.expandText)),
			c = y => {
				if (!y) return 0;
				const v = y.match(/^\d*(\.\d*)?/);
				return v ? Number(v[0]) : 0;
			},
			u = () => {
				if (!l.value || !l.value.isConnected) return;
				const y = window.getComputedStyle(l.value),
					v = document.createElement('div');
				return (
					Array.prototype.slice.apply(y).forEach(b => {
						v.style.setProperty(b, y.getPropertyValue(b));
					}),
					(v.style.position = 'fixed'),
					(v.style.zIndex = '-9999'),
					(v.style.top = '-9999px'),
					(v.style.height = 'auto'),
					(v.style.minHeight = 'auto'),
					(v.style.maxHeight = 'auto'),
					(v.innerText = e.content),
					document.body.appendChild(v),
					v
				);
			},
			f = () => {
				const y = (x, T) => {
						const { content: R, position: S, dots: A } = e,
							I = R.length,
							k = () => {
								const X = (V, O) => {
									if (O - V <= 1)
										return S === 'end' ? R.slice(0, V) + A : A + R.slice(O, I);
									const F = Math.round((V + O) / 2);
									return (
										S === 'end'
											? (x.innerText = R.slice(0, F) + A + r.value)
											: (x.innerText = A + R.slice(F, I) + r.value),
										x.offsetHeight > T
											? S === 'end'
												? X(V, F)
												: X(F, O)
											: S === 'end'
												? X(F, O)
												: X(V, F)
									);
								};
								x.innerText = X(0, I);
							},
							$ = (X, V) => {
								if (X[1] - X[0] <= 1 && V[1] - V[0] <= 1)
									return R.slice(0, X[0]) + A + R.slice(V[1], I);
								const O = Math.floor((X[0] + X[1]) / 2),
									F = Math.ceil((V[0] + V[1]) / 2);
								return (
									(x.innerText =
										e.content.slice(0, O) +
										e.dots +
										e.content.slice(F, I) +
										e.expandText),
									x.offsetHeight >= T
										? $([X[0], O], [F, V[1]])
										: $([O, X[1]], [V[0], F])
								);
							},
							B = (0 + I) >> 1;
						return (
							e.position === 'middle' ? (x.innerText = $([0, B], [B, I])) : k(),
							x.innerText
						);
					},
					v = u();
				if (!v) {
					s = !0;
					return;
				}
				const { paddingBottom: w, paddingTop: b, lineHeight: C } = v.style,
					p = Math.ceil((Number(e.rows) + 0.5) * c(C) + c(b) + c(w));
				p < v.offsetHeight
					? ((i.value = !0), (o.value = y(v, p)))
					: ((i.value = !1), (o.value = e.content)),
					document.body.removeChild(v);
			},
			h = (y = !a.value) => {
				a.value = y;
			},
			m = y => {
				h(), t('clickAction', y);
			},
			g = () => {
				const y = n.action ? n.action({ expanded: a.value }) : r.value;
				return d('span', { class: vu('action'), onClick: m }, [y]);
			};
		return (
			Ue(f),
			Jt(() => {
				s && ((s = !1), f());
			}),
			ee([Mt, () => [e.content, e.rows, e.position]], f),
			ke({ toggle: h }),
			() =>
				d('div', { ref: l, class: vu() }, [
					a.value ? e.content : o.value,
					i.value ? g() : null,
				])
		);
	},
});
const r_ = G(l_),
	[s_] = U('time-picker'),
	bu = e => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e),
	c_ = ['hour', 'minute', 'second'],
	u_ = de({}, Rf, {
		minHour: ie(0),
		maxHour: ie(23),
		minMinute: ie(0),
		maxMinute: ie(59),
		minSecond: ie(0),
		maxSecond: ie(59),
		minTime: { type: String, validator: bu },
		maxTime: { type: String, validator: bu },
		columnsType: { type: Array, default: () => ['hour', 'minute'] },
		filter: Function,
	});
var d_ = j({
	name: s_,
	props: u_,
	emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(e.modelValue),
			a = D(),
			i = h => {
				const m = h.split(':');
				return c_.map((g, y) => (e.columnsType.includes(g) ? m[y] : '00'));
			},
			l = () => {
				var h;
				return (h = a.value) == null ? void 0 : h.confirm();
			},
			s = () => o.value,
			r = L(() => {
				let {
					minHour: h,
					maxHour: m,
					minMinute: g,
					maxMinute: y,
					minSecond: v,
					maxSecond: w,
				} = e;
				if (e.minTime || e.maxTime) {
					const b = { hour: 0, minute: 0, second: 0 };
					e.columnsType.forEach((x, T) => {
						var R;
						b[x] = (R = o.value[T]) != null ? R : 0;
					});
					const { hour: C, minute: p } = b;
					if (e.minTime) {
						const [x, T, R] = i(e.minTime);
						(h = x),
							(g = +C <= +h ? T : '00'),
							(v = +C <= +h && +p <= +g ? R : '00');
					}
					if (e.maxTime) {
						const [x, T, R] = i(e.maxTime);
						(m = x),
							(y = +C >= +m ? T : '59'),
							(w = +C >= +m && +p >= +y ? R : '59');
					}
				}
				return e.columnsType.map(b => {
					const { filter: C, formatter: p } = e;
					switch (b) {
						case 'hour':
							return Po(+h, +m, b, p, C, o.value);
						case 'minute':
							return Po(+g, +y, b, p, C, o.value);
						case 'second':
							return Po(+v, +w, b, p, C, o.value);
						default:
							return [];
					}
				});
			});
		ee(o, h => {
			Xt(h, e.modelValue) || t('update:modelValue', h);
		}),
			ee(
				() => e.modelValue,
				h => {
					(h = Df(h, r.value)), Xt(h, o.value) || (o.value = h);
				},
				{ immediate: !0 },
			);
		const c = (...h) => t('change', ...h),
			u = (...h) => t('cancel', ...h),
			f = (...h) => t('confirm', ...h);
		return (
			ke({ confirm: l, getSelectedTime: s }),
			() =>
				d(
					Zi,
					_e(
						{
							ref: a,
							modelValue: o.value,
							'onUpdate:modelValue': h => (o.value = h),
							columns: r.value,
							onChange: c,
							onCancel: u,
							onConfirm: f,
						},
						Ie(e, Of),
					),
					n,
				)
		);
	},
});
const f_ = G(d_),
	[h_, Co] = U('tree-select'),
	m_ = {
		max: ie(1 / 0),
		items: Ne(),
		height: ie(300),
		selectedIcon: Z('success'),
		mainActiveIndex: ie(0),
		activeId: { type: [Number, String, Array], default: 0 },
	};
var g_ = j({
	name: h_,
	props: m_,
	emits: ['clickNav', 'clickItem', 'update:activeId', 'update:mainActiveIndex'],
	setup(e, { emit: t, slots: n }) {
		const o = c =>
				Array.isArray(e.activeId) ? e.activeId.includes(c) : e.activeId === c,
			a = c => {
				const u = () => {
					if (c.disabled) return;
					let f;
					if (Array.isArray(e.activeId)) {
						f = e.activeId.slice();
						const h = f.indexOf(c.id);
						h !== -1 ? f.splice(h, 1) : f.length < +e.max && f.push(c.id);
					} else f = c.id;
					t('update:activeId', f), t('clickItem', c);
				};
				return d(
					'div',
					{
						key: c.id,
						class: [
							'van-ellipsis',
							Co('item', { active: o(c.id), disabled: c.disabled }),
						],
						onClick: u,
					},
					[
						c.text,
						o(c.id) &&
							d(Ce, { name: e.selectedIcon, class: Co('selected') }, null),
					],
				);
			},
			i = c => {
				t('update:mainActiveIndex', c);
			},
			l = c => t('clickNav', c),
			s = () => {
				const c = e.items.map(u =>
					d(
						ch,
						{
							dot: u.dot,
							badge: u.badge,
							class: [Co('nav-item'), u.className],
							disabled: u.disabled,
							onClick: l,
						},
						{ title: () => (n['nav-text'] ? n['nav-text'](u) : u.text) },
					),
				);
				return d(
					sh,
					{ class: Co('nav'), modelValue: e.mainActiveIndex, onChange: i },
					{ default: () => [c] },
				);
			},
			r = () => {
				if (n.content) return n.content();
				const c = e.items[+e.mainActiveIndex] || {};
				if (c.children) return c.children.map(a);
			};
		return () =>
			d('div', { class: Co(), style: { height: we(e.height) } }, [
				s(),
				d('div', { class: Co('content') }, [r()]),
			]);
	},
});
const v_ = G(g_),
	[b_, Ge, y_] = U('uploader');
function yu(e, t) {
	return new Promise(n => {
		if (t === 'file') {
			n();
			return;
		}
		const o = new FileReader();
		(o.onload = a => {
			n(a.target.result);
		}),
			t === 'dataUrl' ? o.readAsDataURL(e) : t === 'text' && o.readAsText(e);
	});
}
function yh(e, t) {
	return wi(e).some(n =>
		n.file ? (Oo(t) ? t(n.file) : n.file.size > +t) : !1,
	);
}
function p_(e, t) {
	const n = [],
		o = [];
	return (
		e.forEach(a => {
			yh(a, t) ? o.push(a) : n.push(a);
		}),
		{ valid: n, invalid: o }
	);
}
const w_ = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
	x_ = e => w_.test(e);
function ph(e) {
	return e.isImage
		? !0
		: e.file && e.file.type
			? e.file.type.indexOf('image') === 0
			: e.url
				? x_(e.url)
				: typeof e.content == 'string'
					? e.content.indexOf('data:image') === 0
					: !1;
}
var S_ = j({
	props: {
		name: q,
		item: Ye(Object),
		index: Number,
		imageFit: String,
		lazyLoad: Boolean,
		deletable: Boolean,
		reupload: Boolean,
		previewSize: [Number, String, Array],
		beforeDelete: Function,
	},
	emits: ['delete', 'preview', 'reupload'],
	setup(e, { emit: t, slots: n }) {
		const o = () => {
				const { status: u, message: f } = e.item;
				if (u === 'uploading' || u === 'failed') {
					const h =
							u === 'failed'
								? d(Ce, { name: 'close', class: Ge('mask-icon') }, null)
								: d(Ft, { class: Ge('loading') }, null),
						m = $e(f) && f !== '';
					return d('div', { class: Ge('mask') }, [
						h,
						m && d('div', { class: Ge('mask-message') }, [f]),
					]);
				}
			},
			a = u => {
				const { name: f, item: h, index: m, beforeDelete: g } = e;
				u.stopPropagation(),
					Wn(g, { args: [h, { name: f, index: m }], done: () => t('delete') });
			},
			i = () => t('preview'),
			l = () => t('reupload'),
			s = () => {
				if (e.deletable && e.item.status !== 'uploading') {
					const u = n['preview-delete'];
					return d(
						'div',
						{
							role: 'button',
							class: Ge('preview-delete', { shadow: !u }),
							tabindex: 0,
							'aria-label': y_('delete'),
							onClick: a,
						},
						[
							u
								? u()
								: d(
										Ce,
										{ name: 'cross', class: Ge('preview-delete-icon') },
										null,
									),
						],
					);
				}
			},
			r = () => {
				if (n['preview-cover']) {
					const { index: u, item: f } = e;
					return d('div', { class: Ge('preview-cover') }, [
						n['preview-cover'](de({ index: u }, f)),
					]);
				}
			},
			c = () => {
				const {
					item: u,
					lazyLoad: f,
					imageFit: h,
					previewSize: m,
					reupload: g,
				} = e;
				return ph(u)
					? d(
							el,
							{
								fit: h,
								src: u.objectUrl || u.content || u.url,
								class: Ge('preview-image'),
								width: Array.isArray(m) ? m[0] : m,
								height: Array.isArray(m) ? m[1] : m,
								lazyLoad: f,
								onClick: g ? l : i,
							},
							{ default: r },
						)
					: d('div', { class: Ge('file'), style: bn(e.previewSize) }, [
							d(Ce, { class: Ge('file-icon'), name: 'description' }, null),
							d('div', { class: [Ge('file-name'), 'van-ellipsis'] }, [
								u.file ? u.file.name : u.url,
							]),
							r(),
						]);
			};
		return () => d('div', { class: Ge('preview') }, [c(), o(), s()]);
	},
});
const C_ = {
	name: ie(''),
	accept: Z('image/*'),
	capture: String,
	multiple: Boolean,
	disabled: Boolean,
	readonly: Boolean,
	lazyLoad: Boolean,
	maxCount: ie(1 / 0),
	imageFit: Z('cover'),
	resultType: Z('dataUrl'),
	uploadIcon: Z('photograph'),
	uploadText: String,
	deletable: z,
	reupload: Boolean,
	afterRead: Function,
	showUpload: z,
	modelValue: Ne(),
	beforeRead: Function,
	beforeDelete: Function,
	previewSize: [Number, String, Array],
	previewImage: z,
	previewOptions: Object,
	previewFullImage: z,
	maxSize: { type: [Number, String, Function], default: 1 / 0 },
};
var T_ = j({
	name: b_,
	props: C_,
	emits: [
		'delete',
		'oversize',
		'clickUpload',
		'closePreview',
		'clickPreview',
		'clickReupload',
		'update:modelValue',
	],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = [],
			i = D(-1),
			l = D(!1),
			s = (S = e.modelValue.length) => ({ name: e.name, index: S }),
			r = () => {
				o.value && (o.value.value = '');
			},
			c = S => {
				if ((r(), yh(S, e.maxSize)))
					if (Array.isArray(S)) {
						const A = p_(S, e.maxSize);
						if (((S = A.valid), t('oversize', A.invalid, s()), !S.length))
							return;
					} else {
						t('oversize', S, s());
						return;
					}
				if (((S = He(S)), i.value > -1)) {
					const A = [...e.modelValue];
					A.splice(i.value, 1, S), t('update:modelValue', A), (i.value = -1);
				} else t('update:modelValue', [...e.modelValue, ...wi(S)]);
				e.afterRead && e.afterRead(S, s());
			},
			u = S => {
				const { maxCount: A, modelValue: I, resultType: k } = e;
				if (Array.isArray(S)) {
					const $ = +A - I.length;
					S.length > $ && (S = S.slice(0, $)),
						Promise.all(S.map(B => yu(B, k))).then(B => {
							const X = S.map((V, O) => {
								const F = {
									file: V,
									status: '',
									message: '',
									objectUrl: URL.createObjectURL(V),
								};
								return B[O] && (F.content = B[O]), F;
							});
							c(X);
						});
				} else
					yu(S, k).then($ => {
						const B = {
							file: S,
							status: '',
							message: '',
							objectUrl: URL.createObjectURL(S),
						};
						$ && (B.content = $), c(B);
					});
			},
			f = S => {
				const { files: A } = S.target;
				if (e.disabled || !A || !A.length) return;
				const I = A.length === 1 ? A[0] : [].slice.call(A);
				if (e.beforeRead) {
					const k = e.beforeRead(I, s());
					if (!k) {
						r();
						return;
					}
					if (zr(k)) {
						k.then($ => {
							u($ || I);
						}).catch(r);
						return;
					}
				}
				u(I);
			};
		let h;
		const m = () => t('closePreview'),
			g = S => {
				if (e.previewFullImage) {
					const A = e.modelValue.filter(ph),
						I = A.map(
							k => (
								k.objectUrl &&
									!k.url &&
									k.status !== 'failed' &&
									((k.url = k.objectUrl), a.push(k.url)),
								k.url
							),
						).filter(Boolean);
					h = hS(
						de(
							{ images: I, startPosition: A.indexOf(S), onClose: m },
							e.previewOptions,
						),
					);
				}
			},
			y = () => {
				h && h.close();
			},
			v = (S, A) => {
				const I = e.modelValue.slice(0);
				I.splice(A, 1), t('update:modelValue', I), t('delete', S, s(A));
			},
			w = S => {
				(l.value = !0), (i.value = S), Te(() => R());
			},
			b = () => {
				l.value || (i.value = -1), (l.value = !1);
			},
			C = (S, A) => {
				const I = [
						'imageFit',
						'deletable',
						'reupload',
						'previewSize',
						'beforeDelete',
					],
					k = de(Ie(e, I), Ie(S, I, !0));
				return d(
					S_,
					_e(
						{
							item: S,
							index: A,
							onClick: () =>
								t(e.reupload ? 'clickReupload' : 'clickPreview', S, s(A)),
							onDelete: () => v(S, A),
							onPreview: () => g(S),
							onReupload: () => w(A),
						},
						Ie(e, ['name', 'lazyLoad']),
						k,
					),
					Ie(n, ['preview-cover', 'preview-delete']),
				);
			},
			p = () => {
				if (e.previewImage) return e.modelValue.map(C);
			},
			x = S => t('clickUpload', S),
			T = () => {
				if (e.modelValue.length >= +e.maxCount && !e.reupload) return;
				const S = e.modelValue.length >= +e.maxCount && e.reupload,
					A = e.readonly
						? null
						: d(
								'input',
								{
									ref: o,
									type: 'file',
									class: Ge('input'),
									accept: e.accept,
									capture: e.capture,
									multiple: e.multiple && i.value === -1,
									disabled: e.disabled,
									onChange: f,
									onClick: b,
								},
								null,
							);
				return n.default
					? Qe(
							d('div', { class: Ge('input-wrapper'), onClick: x }, [
								n.default(),
								A,
							]),
							[[nt, !S]],
						)
					: Qe(
							d(
								'div',
								{
									class: Ge('upload', { readonly: e.readonly }),
									style: bn(e.previewSize),
									onClick: x,
								},
								[
									d(Ce, { name: e.uploadIcon, class: Ge('upload-icon') }, null),
									e.uploadText &&
										d('span', { class: Ge('upload-text') }, [e.uploadText]),
									A,
								],
							),
							[[nt, e.showUpload && !S]],
						);
			},
			R = () => {
				o.value && !e.disabled && o.value.click();
			};
		return (
			en(() => {
				a.forEach(S => URL.revokeObjectURL(S));
			}),
			ke({ chooseFile: R, closeImagePreview: y }),
			jn(() => e.modelValue),
			() =>
				d('div', { class: Ge() }, [
					d('div', { class: Ge('wrapper', { disabled: e.disabled }) }, [
						p(),
						T(),
					]),
				])
		);
	},
});
const __ = G(T_),
	[k_, pu] = U('watermark'),
	E_ = {
		gapX: Ke(0),
		gapY: Ke(0),
		image: String,
		width: Ke(100),
		height: Ke(100),
		rotate: ie(-22),
		zIndex: q,
		content: String,
		opacity: q,
		fullPage: z,
		textColor: Z('#dcdee0'),
	};
var $_ = j({
	name: k_,
	props: E_,
	setup(e, { slots: t }) {
		const n = D(),
			o = D(''),
			a = D(''),
			i = () => {
				const r = {
						transformOrigin: 'center',
						transform: `rotate(${e.rotate}deg)`,
					},
					c = () =>
						e.image && !t.content
							? d(
									'image',
									{
										href: a.value,
										'xlink:href': a.value,
										x: '0',
										y: '0',
										width: e.width,
										height: e.height,
										style: r,
									},
									null,
								)
							: d(
									'foreignObject',
									{ x: '0', y: '0', width: e.width, height: e.height },
									[
										d(
											'div',
											{ xmlns: 'http://www.w3.org/1999/xhtml', style: r },
											[
												t.content
													? t.content()
													: d('span', { style: { color: e.textColor } }, [
															e.content,
														]),
											],
										),
									],
								),
					u = e.width + e.gapX,
					f = e.height + e.gapY;
				return d(
					'svg',
					{
						viewBox: `0 0 ${u} ${f}`,
						width: u,
						height: f,
						xmlns: 'http://www.w3.org/2000/svg',
						'xmlns:xlink': 'http://www.w3.org/1999/xlink',
						style: {
							padding: `0 ${e.gapX}px ${e.gapY}px 0`,
							opacity: e.opacity,
						},
					},
					[c()],
				);
			},
			l = r => {
				const c = document.createElement('canvas'),
					u = new Image();
				(u.crossOrigin = 'anonymous'),
					(u.referrerPolicy = 'no-referrer'),
					(u.onload = () => {
						(c.width = u.naturalWidth), (c.height = u.naturalHeight);
						const f = c.getContext('2d');
						f == null || f.drawImage(u, 0, 0), (a.value = c.toDataURL());
					}),
					(u.src = r);
			},
			s = r => {
				const c = new Blob([r], { type: 'image/svg+xml' });
				return URL.createObjectURL(c);
			};
		return (
			Do(() => {
				e.image && l(e.image);
			}),
			ee(
				() => [
					a.value,
					e.content,
					e.textColor,
					e.height,
					e.width,
					e.rotate,
					e.gapX,
					e.gapY,
				],
				() => {
					Te(() => {
						n.value &&
							(o.value && URL.revokeObjectURL(o.value),
							(o.value = s(n.value.innerHTML)));
					});
				},
				{ immediate: !0 },
			),
			Mo(() => {
				o.value && URL.revokeObjectURL(o.value);
			}),
			() => {
				const r = de({ backgroundImage: `url(${o.value})` }, yn(e.zIndex));
				return d('div', { class: pu({ full: e.fullPage }), style: r }, [
					d('div', { class: pu('wrapper'), ref: n }, [i()]),
				]);
			}
		);
	},
});
const P_ = G($_),
	I_ = '4.8.11';
function A_(e) {
	[
		tf,
		rr,
		vy,
		Py,
		Z0,
		mp,
		Tf,
		pp,
		co,
		Tp,
		lt,
		Vp,
		Up,
		Xp,
		Ht,
		ew,
		Vf,
		sw,
		mw,
		Sw,
		kw,
		Aw,
		Rw,
		Mw,
		Fw,
		Uw,
		Zw,
		mr,
		lx,
		hx,
		bx,
		kx,
		Ax,
		Lx,
		Vx,
		jf,
		un,
		Hx,
		Yx,
		Jr,
		Xx,
		eS,
		aS,
		Ce,
		el,
		mS,
		SS,
		CS,
		$S,
		Ft,
		Kd,
		RS,
		MS,
		HS,
		XS,
		sf,
		eC,
		aC,
		Zi,
		iC,
		o1,
		zt,
		r1,
		h1,
		is,
		os,
		y1,
		E1,
		$1,
		O1,
		z1,
		sh,
		ch,
		J1,
		yT,
		dh,
		ST,
		fh,
		uh,
		kT,
		IT,
		DT,
		FT,
		zT,
		gf,
		YT,
		Xr,
		XT,
		Zr,
		ns,
		Ca,
		QT,
		o_,
		Gi,
		Qi,
		r_,
		f_,
		H0,
		v_,
		__,
		P_,
	].forEach(n => {
		n.install ? e.use(n) : n.name && e.component(n.name, n);
	});
}
var R_ = { install: A_, version: I_ };
function O_(e, t, n, o, a) {
	var i = document.createElement('canvas'),
		l = i.getContext('2d'),
		s,
		r,
		c;
	const u = (t / 90) % 4,
		f = { sx: 0, sy: 0, ex: 0, ey: 0 };
	var h = new Image();
	(h.crossOrigin = 'Anonymous'),
		(h.src = e),
		(h.onload = () => {
			switch (
				((s = h.width),
				(r = h.height),
				(c = s > r ? s : r),
				(i.width = c * 2),
				(i.height = c * 2),
				u)
			) {
				case 0:
					(f.sx = c), (f.sy = c), (f.ex = c + s), (f.ey = c + r);
					break;
				case 1:
					(f.sx = c - r), (f.sy = c), (f.ex = c), (f.ey = c + s);
					break;
				case 2:
					(f.sx = c - s), (f.sy = c - r), (f.ex = c), (f.ey = c);
					break;
				case 3:
					(f.sx = c), (f.sy = c - s), (f.ex = c + r), (f.ey = c + s);
					break;
			}
			l.translate(c, c), l.rotate((t * Math.PI) / 180), l.drawImage(h, 0, 0);
			var m = l.getImageData(f.sx, f.sy, f.ex, f.ey);
			(i.width = r), (i.height = s), l.putImageData(m, 0, 0), a(i.toDataURL());
		});
}
const B_ = {
		name: 'SignCanvas',
		components: {},
		props: {
			width: {
				type: Number,
				default: () => {
					const e = document.querySelector('#app'),
						t = e && e.offsetWidth;
					return t ? t - 60 : 300;
				},
			},
			height: {
				type: Number,
				default: () => {
					const e = document.querySelector('#app');
					return (e && e.offsetHeight) || 800;
				},
			},
			lineWidth: { type: Number, default: 6 },
			lineColor: { type: String, default: '#000' },
			bgColor: { type: String, default: '' },
			isCrop: { type: Boolean, default: !0 },
			isClearBgColor: { type: Boolean, default: !1 },
			format: { type: String, default: 'image/png' },
			quality: { type: Number, default: 1 },
			noSignTipText: { type: String, default: '请确保已签名！' },
			signName: { type: String, default: '' },
		},
		methods: {
			resetHandler() {
				this.$refs.VueEsignRef.reset();
			},
			clearHandler() {
				this.$emit('clearHandler'), this.resetHandler();
			},
			sureHandler() {
				this.$refs.VueEsignRef.generate()
					.then(e => {
						O_(
							e,
							270,
							`${this.signName ? this.signName + '-签名.jpg' : 'sign.jpg'}`,
							'',
							t => {
								this.$emit('sureHandler', t);
							},
						);
					})
					.catch(e => {
						console.log('err----', e),
							_x({ title: '提示', message: '请完成电子签名。' })
								.then(() => {})
								.catch(() => {});
					});
			},
		},
	},
	D_ = { class: 'signContainer' },
	M_ = { class: 'btns' },
	L_ = { key: 0 };
function V_(e, t, n, o, a, i) {
	const l = mi('van-button'),
		s = mi('vue-esign');
	return (
		ba(),
		Gl('div', D_, [
			bi('div', M_, [
				d(
					l,
					{
						type: 'default',
						round: '',
						onClick: i.clearHandler,
						class: 'reset',
					},
					{ default: hi(() => [no('重签')]), _: 1 },
					8,
					['onClick'],
				),
				d(
					l,
					{ type: 'info', round: '', onClick: i.sureHandler },
					{ default: hi(() => [no('确认')]), _: 1 },
					8,
					['onClick'],
				),
			]),
			d(
				s,
				{
					ref: 'VueEsignRef',
					class: 'vue-esign',
					width: n.width,
					height: n.height,
					lineWidth: n.lineWidth,
					lineColor: n.lineColor,
					bgColor: n.bgColor,
					isCrop: n.isCrop,
					isClearBgColor: n.isClearBgColor,
					format: n.format,
					quality: n.quality,
				},
				null,
				8,
				[
					'width',
					'height',
					'lineWidth',
					'lineColor',
					'bgColor',
					'isCrop',
					'isClearBgColor',
					'format',
					'quality',
				],
			),
			bi(
				'div',
				{ style: _a({ '--width': n.height + 'px' }), class: 'tipText' },
				[
					no(' 请'),
					n.signName
						? (ba(), Gl('span', L_, Bh(` ${n.signName} `), 1))
						: ag('', !0),
					no('在此区域内签名 '),
				],
				4,
			),
		])
	);
}
const N_ = Vr(B_, [
	['render', V_],
	['__scopeId', 'data-v-c7ca6b55'],
]);
_d(qg).component('SignCanvas', N_).use(Vd).use(R_).use(er).mount('#app');
export {
	Je as F,
	vc as S,
	Vr as _,
	d as a,
	He as b,
	Gl as c,
	j as d,
	D as e,
	bi as f,
	H_ as g,
	no as h,
	Vd as i,
	j_ as j,
	z_ as k,
	Ue as l,
	pd as m,
	ag as n,
	ba as o,
	F_ as p,
	ob as q,
	mi as r,
	ab as s,
	Bh as t,
	hi as w,
};

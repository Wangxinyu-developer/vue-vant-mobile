const __vite__fileDeps = [
		'./index-BJxLAT_4.js',
		'../css/index-CiFIkKlu.css',
		'./index-Brq9-kFQ.js',
		'../css/index-DAf1UbaP.css',
		'./create-D-It00Ky.js',
		'../css/create-CHBydnZz.css',
		'./index-DOIFeQ5E.js',
		'../css/index-VrrbvIsS.css',
	],
	__vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
	new MutationObserver(a => {
		for (const l of a)
			if (l.type === 'childList')
				for (const i of l.addedNodes)
					i.tagName === 'LINK' && i.rel === 'modulepreload' && o(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(a) {
		const l = {};
		return (
			a.integrity && (l.integrity = a.integrity),
			a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
			a.crossOrigin === 'use-credentials'
				? (l.credentials = 'include')
				: a.crossOrigin === 'anonymous'
					? (l.credentials = 'omit')
					: (l.credentials = 'same-origin'),
			l
		);
	}
	function o(a) {
		if (a.ep) return;
		a.ep = !0;
		const l = n(a);
		fetch(a.href, l);
	}
})();
/**
 * @vue/shared v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function dr(e, t) {
	const n = new Set(e.split(','));
	return o => n.has(o);
}
const Le = {},
	Co = [],
	St = () => {},
	hh = () => !1,
	Sl = e =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
	fr = e => e.startsWith('onUpdate:'),
	qe = Object.assign,
	hr = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	},
	mh = Object.prototype.hasOwnProperty,
	$e = (e, t) => mh.call(e, t),
	ye = Array.isArray,
	To = e => Cl(e) === '[object Map]',
	du = e => Cl(e) === '[object Set]',
	Se = e => typeof e == 'function',
	je = e => typeof e == 'string',
	lo = e => typeof e == 'symbol',
	ze = e => e !== null && typeof e == 'object',
	fu = e => (ze(e) || Se(e)) && Se(e.then) && Se(e.catch),
	hu = Object.prototype.toString,
	Cl = e => hu.call(e),
	vh = e => Cl(e).slice(8, -1),
	mu = e => Cl(e) === '[object Object]',
	mr = e => je(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
	ea = dr(
		',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
	),
	Tl = e => {
		const t = Object.create(null);
		return n => t[n] || (t[n] = e(n));
	},
	gh = /-(\w)/g,
	Zt = Tl(e => e.replace(gh, (t, n) => (n ? n.toUpperCase() : ''))),
	bh = /\B([A-Z])/g,
	Fn = Tl(e => e.replace(bh, '-$1').toLowerCase()),
	_l = Tl(e => e.charAt(0).toUpperCase() + e.slice(1)),
	Jl = Tl(e => (e ? `on${_l(e)}` : '')),
	Ln = (e, t) => !Object.is(e, t),
	Ql = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t);
	},
	vu = (e, t, n) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
	},
	yh = e => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	},
	ph = e => {
		const t = je(e) ? Number(e) : NaN;
		return isNaN(t) ? e : t;
	};
let as;
const gu = () =>
	as ||
	(as =
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
				? self
				: typeof window < 'u'
					? window
					: typeof global < 'u'
						? global
						: {});
function kl(e) {
	if (ye(e)) {
		const t = {};
		for (let n = 0; n < e.length; n++) {
			const o = e[n],
				a = je(o) ? Ch(o) : kl(o);
			if (a) for (const l in a) t[l] = a[l];
		}
		return t;
	} else if (je(e) || ze(e)) return e;
}
const wh = /;(?![^(]*\))/g,
	xh = /:([^]+)/,
	Sh = /\/\*[^]*?\*\//g;
function Ch(e) {
	const t = {};
	return (
		e
			.replace(Sh, '')
			.split(wh)
			.forEach(n => {
				if (n) {
					const o = n.split(xh);
					o.length > 1 && (t[o[0].trim()] = o[1].trim());
				}
			}),
		t
	);
}
function Th(e) {
	let t = '';
	if (!e || je(e)) return t;
	for (const n in e) {
		const o = e[n],
			a = n.startsWith('--') ? n : Fn(n);
		(je(o) || typeof o == 'number') && (t += `${a}:${o};`);
	}
	return t;
}
function El(e) {
	let t = '';
	if (je(e)) t = e;
	else if (ye(e))
		for (let n = 0; n < e.length; n++) {
			const o = El(e[n]);
			o && (t += o + ' ');
		}
	else if (ze(e)) for (const n in e) e[n] && (t += n + ' ');
	return t.trim();
}
const _h =
		'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
	kh = dr(_h);
function bu(e) {
	return !!e || e === '';
}
const x_ = e =>
		je(e)
			? e
			: e == null
				? ''
				: ye(e) || (ze(e) && (e.toString === hu || !Se(e.toString)))
					? JSON.stringify(e, yu, 2)
					: String(e),
	yu = (e, t) =>
		t && t.__v_isRef
			? yu(e, t.value)
			: To(t)
				? {
						[`Map(${t.size})`]: [...t.entries()].reduce(
							(n, [o, a], l) => ((n[ei(o, l) + ' =>'] = a), n),
							{},
						),
					}
				: du(t)
					? { [`Set(${t.size})`]: [...t.values()].map(n => ei(n)) }
					: lo(t)
						? ei(t)
						: ze(t) && !ye(t) && !mu(t)
							? String(t)
							: t,
	ei = (e, t = '') => {
		var n;
		return lo(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
	};
/**
 * @vue/reactivity v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let At;
class Eh {
	constructor(t = !1) {
		(this.detached = t),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this.parent = At),
			!t && At && (this.index = (At.scopes || (At.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	run(t) {
		if (this._active) {
			const n = At;
			try {
				return (At = this), t();
			} finally {
				At = n;
			}
		}
	}
	on() {
		At = this;
	}
	off() {
		At = this.parent;
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
function Ph(e, t = At) {
	t && t.active && t.effects.push(e);
}
function $h() {
	return At;
}
let to;
class vr {
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
			Ph(this, a);
	}
	get dirty() {
		if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
			(this._dirtyLevel = 1), Nn();
			for (let t = 0; t < this._depsLength; t++) {
				const n = this.deps[t];
				if (n.computed && (Ih(n.computed), this._dirtyLevel >= 4)) break;
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
			n = to;
		try {
			return (Dn = !0), (to = this), this._runnings++, ls(this), this.fn();
		} finally {
			is(this), this._runnings--, (to = n), (Dn = t);
		}
	}
	stop() {
		var t;
		this.active &&
			(ls(this),
			is(this),
			(t = this.onStop) == null || t.call(this),
			(this.active = !1));
	}
}
function Ih(e) {
	return e.value;
}
function ls(e) {
	e._trackId++, (e._depsLength = 0);
}
function is(e) {
	if (e.deps.length > e._depsLength) {
		for (let t = e._depsLength; t < e.deps.length; t++) pu(e.deps[t], e);
		e.deps.length = e._depsLength;
	}
}
function pu(e, t) {
	const n = e.get(t);
	n !== void 0 &&
		t._trackId !== n &&
		(e.delete(t), e.size === 0 && e.cleanup());
}
let Dn = !0,
	Ai = 0;
const wu = [];
function Nn() {
	wu.push(Dn), (Dn = !1);
}
function zn() {
	const e = wu.pop();
	Dn = e === void 0 ? !0 : e;
}
function gr() {
	Ai++;
}
function br() {
	for (Ai--; !Ai && Oi.length; ) Oi.shift()();
}
function xu(e, t, n) {
	if (t.get(e) !== e._trackId) {
		t.set(e, e._trackId);
		const o = e.deps[e._depsLength];
		o !== t ? (o && pu(o, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
	}
}
const Oi = [];
function Su(e, t, n) {
	gr();
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
					((o._shouldSchedule = !1), o.scheduler && Oi.push(o.scheduler)));
	}
	br();
}
const Cu = (e, t) => {
		const n = new Map();
		return (n.cleanup = e), (n.computed = t), n;
	},
	Ri = new WeakMap(),
	no = Symbol(''),
	Bi = Symbol('');
function vt(e, t, n) {
	if (Dn && to) {
		let o = Ri.get(e);
		o || Ri.set(e, (o = new Map()));
		let a = o.get(n);
		a || o.set(n, (a = Cu(() => o.delete(n)))), xu(to, a);
	}
}
function sn(e, t, n, o, a, l) {
	const i = Ri.get(e);
	if (!i) return;
	let s = [];
	if (t === 'clear') s = [...i.values()];
	else if (n === 'length' && ye(e)) {
		const r = Number(o);
		i.forEach((c, u) => {
			(u === 'length' || (!lo(u) && u >= r)) && s.push(c);
		});
	} else
		switch ((n !== void 0 && s.push(i.get(n)), t)) {
			case 'add':
				ye(e)
					? mr(n) && s.push(i.get('length'))
					: (s.push(i.get(no)), To(e) && s.push(i.get(Bi)));
				break;
			case 'delete':
				ye(e) || (s.push(i.get(no)), To(e) && s.push(i.get(Bi)));
				break;
			case 'set':
				To(e) && s.push(i.get(no));
				break;
		}
	gr();
	for (const r of s) r && Su(r, 4);
	br();
}
const Ah = dr('__proto__,__v_isRef,__isVue'),
	Tu = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter(e => e !== 'arguments' && e !== 'caller')
			.map(e => Symbol[e])
			.filter(lo),
	),
	rs = Oh();
function Oh() {
	const e = {};
	return (
		['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
			e[t] = function (...n) {
				const o = Oe(this);
				for (let l = 0, i = this.length; l < i; l++) vt(o, 'get', l + '');
				const a = o[t](...n);
				return a === -1 || a === !1 ? o[t](...n.map(Oe)) : a;
			};
		}),
		['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
			e[t] = function (...n) {
				Nn(), gr();
				const o = Oe(this)[t].apply(this, n);
				return br(), zn(), o;
			};
		}),
		e
	);
}
function Rh(e) {
	lo(e) || (e = String(e));
	const t = Oe(this);
	return vt(t, 'has', e), t.hasOwnProperty(e);
}
class _u {
	constructor(t = !1, n = !1) {
		(this._isReadonly = t), (this._isShallow = n);
	}
	get(t, n, o) {
		const a = this._isReadonly,
			l = this._isShallow;
		if (n === '__v_isReactive') return !a;
		if (n === '__v_isReadonly') return a;
		if (n === '__v_isShallow') return l;
		if (n === '__v_raw')
			return o === (a ? (l ? Yh : $u) : l ? Pu : Eu).get(t) ||
				Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
				? t
				: void 0;
		const i = ye(t);
		if (!a) {
			if (i && $e(rs, n)) return Reflect.get(rs, n, o);
			if (n === 'hasOwnProperty') return Rh;
		}
		const s = Reflect.get(t, n, o);
		return (lo(n) ? Tu.has(n) : Ah(n)) || (a || vt(t, 'get', n), l)
			? s
			: ft(s)
				? i && mr(n)
					? s
					: s.value
				: ze(s)
					? a
						? Au(s)
						: He(s)
					: s;
	}
}
class ku extends _u {
	constructor(t = !1) {
		super(!1, t);
	}
	set(t, n, o, a) {
		let l = t[n];
		if (!this._isShallow) {
			const r = fa(l);
			if (
				(!sl(o) && !fa(o) && ((l = Oe(l)), (o = Oe(o))),
				!ye(t) && ft(l) && !ft(o))
			)
				return r ? !1 : ((l.value = o), !0);
		}
		const i = ye(t) && mr(n) ? Number(n) < t.length : $e(t, n),
			s = Reflect.set(t, n, o, a);
		return (
			t === Oe(a) && (i ? Ln(o, l) && sn(t, 'set', n, o) : sn(t, 'add', n, o)),
			s
		);
	}
	deleteProperty(t, n) {
		const o = $e(t, n);
		t[n];
		const a = Reflect.deleteProperty(t, n);
		return a && o && sn(t, 'delete', n, void 0), a;
	}
	has(t, n) {
		const o = Reflect.has(t, n);
		return (!lo(n) || !Tu.has(n)) && vt(t, 'has', n), o;
	}
	ownKeys(t) {
		return vt(t, 'iterate', ye(t) ? 'length' : no), Reflect.ownKeys(t);
	}
}
class Bh extends _u {
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
const Dh = new ku(),
	Mh = new Bh(),
	Lh = new ku(!0);
const yr = e => e,
	Pl = e => Reflect.getPrototypeOf(e);
function Ea(e, t, n = !1, o = !1) {
	e = e.__v_raw;
	const a = Oe(e),
		l = Oe(t);
	n || (Ln(t, l) && vt(a, 'get', t), vt(a, 'get', l));
	const { has: i } = Pl(a),
		s = o ? yr : n ? xr : ha;
	if (i.call(a, t)) return s(e.get(t));
	if (i.call(a, l)) return s(e.get(l));
	e !== a && e.get(t);
}
function Pa(e, t = !1) {
	const n = this.__v_raw,
		o = Oe(n),
		a = Oe(e);
	return (
		t || (Ln(e, a) && vt(o, 'has', e), vt(o, 'has', a)),
		e === a ? n.has(e) : n.has(e) || n.has(a)
	);
}
function $a(e, t = !1) {
	return (
		(e = e.__v_raw), !t && vt(Oe(e), 'iterate', no), Reflect.get(e, 'size', e)
	);
}
function ss(e) {
	e = Oe(e);
	const t = Oe(this);
	return Pl(t).has.call(t, e) || (t.add(e), sn(t, 'add', e, e)), this;
}
function cs(e, t) {
	t = Oe(t);
	const n = Oe(this),
		{ has: o, get: a } = Pl(n);
	let l = o.call(n, e);
	l || ((e = Oe(e)), (l = o.call(n, e)));
	const i = a.call(n, e);
	return (
		n.set(e, t), l ? Ln(t, i) && sn(n, 'set', e, t) : sn(n, 'add', e, t), this
	);
}
function us(e) {
	const t = Oe(this),
		{ has: n, get: o } = Pl(t);
	let a = n.call(t, e);
	a || ((e = Oe(e)), (a = n.call(t, e))), o && o.call(t, e);
	const l = t.delete(e);
	return a && sn(t, 'delete', e, void 0), l;
}
function ds() {
	const e = Oe(this),
		t = e.size !== 0,
		n = e.clear();
	return t && sn(e, 'clear', void 0, void 0), n;
}
function Ia(e, t) {
	return function (o, a) {
		const l = this,
			i = l.__v_raw,
			s = Oe(i),
			r = t ? yr : e ? xr : ha;
		return (
			!e && vt(s, 'iterate', no), i.forEach((c, u) => o.call(a, r(c), r(u), l))
		);
	};
}
function Aa(e, t, n) {
	return function (...o) {
		const a = this.__v_raw,
			l = Oe(a),
			i = To(l),
			s = e === 'entries' || (e === Symbol.iterator && i),
			r = e === 'keys' && i,
			c = a[e](...o),
			u = n ? yr : t ? xr : ha;
		return (
			!t && vt(l, 'iterate', r ? Bi : no),
			{
				next() {
					const { value: h, done: f } = c.next();
					return f
						? { value: h, done: f }
						: { value: s ? [u(h[0]), u(h[1])] : u(h), done: f };
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
function Vh() {
	const e = {
			get(l) {
				return Ea(this, l);
			},
			get size() {
				return $a(this);
			},
			has: Pa,
			add: ss,
			set: cs,
			delete: us,
			clear: ds,
			forEach: Ia(!1, !1),
		},
		t = {
			get(l) {
				return Ea(this, l, !1, !0);
			},
			get size() {
				return $a(this);
			},
			has: Pa,
			add: ss,
			set: cs,
			delete: us,
			clear: ds,
			forEach: Ia(!1, !0),
		},
		n = {
			get(l) {
				return Ea(this, l, !0);
			},
			get size() {
				return $a(this, !0);
			},
			has(l) {
				return Pa.call(this, l, !0);
			},
			add: wn('add'),
			set: wn('set'),
			delete: wn('delete'),
			clear: wn('clear'),
			forEach: Ia(!0, !1),
		},
		o = {
			get(l) {
				return Ea(this, l, !0, !0);
			},
			get size() {
				return $a(this, !0);
			},
			has(l) {
				return Pa.call(this, l, !0);
			},
			add: wn('add'),
			set: wn('set'),
			delete: wn('delete'),
			clear: wn('clear'),
			forEach: Ia(!0, !0),
		};
	return (
		['keys', 'values', 'entries', Symbol.iterator].forEach(l => {
			(e[l] = Aa(l, !1, !1)),
				(n[l] = Aa(l, !0, !1)),
				(t[l] = Aa(l, !1, !0)),
				(o[l] = Aa(l, !0, !0));
		}),
		[e, n, t, o]
	);
}
const [Fh, Nh, zh, Hh] = Vh();
function pr(e, t) {
	const n = t ? (e ? Hh : zh) : e ? Nh : Fh;
	return (o, a, l) =>
		a === '__v_isReactive'
			? !e
			: a === '__v_isReadonly'
				? e
				: a === '__v_raw'
					? o
					: Reflect.get($e(n, a) && a in o ? n : o, a, l);
}
const jh = { get: pr(!1, !1) },
	Uh = { get: pr(!1, !0) },
	Wh = { get: pr(!0, !1) };
const Eu = new WeakMap(),
	Pu = new WeakMap(),
	$u = new WeakMap(),
	Yh = new WeakMap();
function Kh(e) {
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
function qh(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Kh(vh(e));
}
function He(e) {
	return fa(e) ? e : wr(e, !1, Dh, jh, Eu);
}
function Iu(e) {
	return wr(e, !1, Lh, Uh, Pu);
}
function Au(e) {
	return wr(e, !0, Mh, Wh, $u);
}
function wr(e, t, n, o, a) {
	if (!ze(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
	const l = a.get(e);
	if (l) return l;
	const i = qh(e);
	if (i === 0) return e;
	const s = new Proxy(e, i === 2 ? o : n);
	return a.set(e, s), s;
}
function ta(e) {
	return fa(e) ? ta(e.__v_raw) : !!(e && e.__v_isReactive);
}
function fa(e) {
	return !!(e && e.__v_isReadonly);
}
function sl(e) {
	return !!(e && e.__v_isShallow);
}
function Ou(e) {
	return e ? !!e.__v_raw : !1;
}
function Oe(e) {
	const t = e && e.__v_raw;
	return t ? Oe(t) : e;
}
function Gh(e) {
	return Object.isExtensible(e) && vu(e, '__v_skip', !0), e;
}
const ha = e => (ze(e) ? He(e) : e),
	xr = e => (ze(e) ? Au(e) : e);
class Ru {
	constructor(t, n, o, a) {
		(this.getter = t),
			(this._setter = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !1),
			(this.effect = new vr(
				() => t(this._value),
				() => el(this, this.effect._dirtyLevel === 2 ? 2 : 3),
			)),
			(this.effect.computed = this),
			(this.effect.active = this._cacheable = !a),
			(this.__v_isReadonly = o);
	}
	get value() {
		const t = Oe(this);
		return (
			(!t._cacheable || t.effect.dirty) &&
				Ln(t._value, (t._value = t.effect.run())) &&
				el(t, 4),
			Bu(t),
			t.effect._dirtyLevel >= 2 && el(t, 2),
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
function Xh(e, t, n = !1) {
	let o, a;
	const l = Se(e);
	return (
		l ? ((o = e), (a = St)) : ((o = e.get), (a = e.set)),
		new Ru(o, a, l || !a, n)
	);
}
function Bu(e) {
	var t;
	Dn &&
		to &&
		((e = Oe(e)),
		xu(
			to,
			(t = e.dep) != null
				? t
				: (e.dep = Cu(() => (e.dep = void 0), e instanceof Ru ? e : void 0)),
		));
}
function el(e, t = 4, n) {
	e = Oe(e);
	const o = e.dep;
	o && Su(o, t);
}
function ft(e) {
	return !!(e && e.__v_isRef === !0);
}
function D(e) {
	return Du(e, !1);
}
function Zh(e) {
	return Du(e, !0);
}
function Du(e, t) {
	return ft(e) ? e : new Jh(e, t);
}
class Jh {
	constructor(t, n) {
		(this.__v_isShallow = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this._rawValue = n ? t : Oe(t)),
			(this._value = n ? t : ha(t));
	}
	get value() {
		return Bu(this), this._value;
	}
	set value(t) {
		const n = this.__v_isShallow || sl(t) || fa(t);
		(t = n ? t : Oe(t)),
			Ln(t, this._rawValue) &&
				((this._rawValue = t), (this._value = n ? t : ha(t)), el(this, 4));
	}
}
function Bt(e) {
	return ft(e) ? e.value : e;
}
const Qh = {
	get: (e, t, n) => Bt(Reflect.get(e, t, n)),
	set: (e, t, n, o) => {
		const a = e[t];
		return ft(a) && !ft(n) ? ((a.value = n), !0) : Reflect.set(e, t, n, o);
	},
};
function Mu(e) {
	return ta(e) ? e : new Proxy(e, Qh);
}
/**
 * @vue/runtime-core v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Mn(e, t, n, o) {
	try {
		return o ? e(...o) : e();
	} catch (a) {
		$l(a, t, n);
	}
}
function Ct(e, t, n, o) {
	if (Se(e)) {
		const a = Mn(e, t, n, o);
		return (
			a &&
				fu(a) &&
				a.catch(l => {
					$l(l, t, n);
				}),
			a
		);
	}
	if (ye(e)) {
		const a = [];
		for (let l = 0; l < e.length; l++) a.push(Ct(e[l], t, n, o));
		return a;
	}
}
function $l(e, t, n, o = !0) {
	const a = t ? t.vnode : null;
	if (t) {
		let l = t.parent;
		const i = t.proxy,
			s = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; l; ) {
			const c = l.ec;
			if (c) {
				for (let u = 0; u < c.length; u++) if (c[u](e, i, s) === !1) return;
			}
			l = l.parent;
		}
		const r = t.appContext.config.errorHandler;
		if (r) {
			Nn(), Mn(r, null, 10, [e, i, s]), zn();
			return;
		}
	}
	em(e, n, a, o);
}
function em(e, t, n, o = !0) {
	console.error(e);
}
let ma = !1,
	Di = !1;
const at = [];
let Gt = 0;
const _o = [];
let $n = null,
	Jn = 0;
const Lu = Promise.resolve();
let Sr = null;
function Te(e) {
	const t = Sr || Lu;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function tm(e) {
	let t = Gt + 1,
		n = at.length;
	for (; t < n; ) {
		const o = (t + n) >>> 1,
			a = at[o],
			l = va(a);
		l < e || (l === e && a.pre) ? (t = o + 1) : (n = o);
	}
	return t;
}
function Cr(e) {
	(!at.length || !at.includes(e, ma && e.allowRecurse ? Gt + 1 : Gt)) &&
		(e.id == null ? at.push(e) : at.splice(tm(e.id), 0, e), Vu());
}
function Vu() {
	!ma && !Di && ((Di = !0), (Sr = Lu.then(Nu)));
}
function nm(e) {
	const t = at.indexOf(e);
	t > Gt && at.splice(t, 1);
}
function om(e) {
	ye(e)
		? _o.push(...e)
		: (!$n || !$n.includes(e, e.allowRecurse ? Jn + 1 : Jn)) && _o.push(e),
		Vu();
}
function fs(e, t, n = ma ? Gt + 1 : 0) {
	for (; n < at.length; n++) {
		const o = at[n];
		if (o && o.pre) {
			if (e && o.id !== e.uid) continue;
			at.splice(n, 1), n--, o();
		}
	}
}
function Fu(e) {
	if (_o.length) {
		const t = [...new Set(_o)].sort((n, o) => va(n) - va(o));
		if (((_o.length = 0), $n)) {
			$n.push(...t);
			return;
		}
		for ($n = t, Jn = 0; Jn < $n.length; Jn++) $n[Jn]();
		($n = null), (Jn = 0);
	}
}
const va = e => (e.id == null ? 1 / 0 : e.id),
	am = (e, t) => {
		const n = va(e) - va(t);
		if (n === 0) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1;
		}
		return n;
	};
function Nu(e) {
	(Di = !1), (ma = !0), at.sort(am);
	try {
		for (Gt = 0; Gt < at.length; Gt++) {
			const t = at[Gt];
			t && t.active !== !1 && Mn(t, null, 14);
		}
	} finally {
		(Gt = 0),
			(at.length = 0),
			Fu(),
			(ma = !1),
			(Sr = null),
			(at.length || _o.length) && Nu();
	}
}
function lm(e, t, ...n) {
	if (e.isUnmounted) return;
	const o = e.vnode.props || Le;
	let a = n;
	const l = t.startsWith('update:'),
		i = l && t.slice(7);
	if (i && i in o) {
		const u = `${i === 'modelValue' ? 'model' : i}Modifiers`,
			{ number: h, trim: f } = o[u] || Le;
		f && (a = n.map(m => (je(m) ? m.trim() : m))), h && (a = n.map(yh));
	}
	let s,
		r = o[(s = Jl(t))] || o[(s = Jl(Zt(t)))];
	!r && l && (r = o[(s = Jl(Fn(t)))]), r && Ct(r, e, 6, a);
	const c = o[s + 'Once'];
	if (c) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		(e.emitted[s] = !0), Ct(c, e, 6, a);
	}
}
function zu(e, t, n = !1) {
	const o = t.emitsCache,
		a = o.get(e);
	if (a !== void 0) return a;
	const l = e.emits;
	let i = {},
		s = !1;
	if (!Se(e)) {
		const r = c => {
			const u = zu(c, t, !0);
			u && ((s = !0), qe(i, u));
		};
		!n && t.mixins.length && t.mixins.forEach(r),
			e.extends && r(e.extends),
			e.mixins && e.mixins.forEach(r);
	}
	return !l && !s
		? (ze(e) && o.set(e, null), null)
		: (ye(l) ? l.forEach(r => (i[r] = null)) : qe(i, l),
			ze(e) && o.set(e, i),
			i);
}
function Il(e, t) {
	return !e || !Sl(t)
		? !1
		: ((t = t.slice(2).replace(/Once$/, '')),
			$e(e, t[0].toLowerCase() + t.slice(1)) || $e(e, Fn(t)) || $e(e, t));
}
let dt = null,
	Al = null;
function cl(e) {
	const t = dt;
	return (dt = e), (Al = (e && e.type.__scopeId) || null), t;
}
function S_(e) {
	Al = e;
}
function C_() {
	Al = null;
}
function Hu(e, t = dt, n) {
	if (!t || e._n) return e;
	const o = (...a) => {
		o._d && Es(-1);
		const l = cl(t);
		let i;
		try {
			i = e(...a);
		} finally {
			cl(l), o._d && Es(1);
		}
		return i;
	};
	return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function ti(e) {
	const {
			type: t,
			vnode: n,
			proxy: o,
			withProxy: a,
			propsOptions: [l],
			slots: i,
			attrs: s,
			emit: r,
			render: c,
			renderCache: u,
			props: h,
			data: f,
			setupState: m,
			ctx: v,
			inheritAttrs: y,
		} = e,
		g = cl(e);
	let w, b;
	try {
		if (n.shapeFlag & 4) {
			const p = a || o,
				x = p;
			(w = qt(c.call(x, p, u, h, m, f, v))), (b = s);
		} else {
			const p = t;
			(w = qt(
				p.length > 1 ? p(h, { attrs: s, slots: i, emit: r }) : p(h, null),
			)),
				(b = t.props ? s : im(s));
		}
	} catch (p) {
		(la.length = 0), $l(p, e, 1), (w = d(Dt));
	}
	let C = w;
	if (b && y !== !1) {
		const p = Object.keys(b),
			{ shapeFlag: x } = C;
		p.length && x & 7 && (l && p.some(fr) && (b = rm(b, l)), (C = Vn(C, b)));
	}
	return (
		n.dirs && ((C = Vn(C)), (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs)),
		n.transition && (C.transition = n.transition),
		(w = C),
		cl(g),
		w
	);
}
const im = e => {
		let t;
		for (const n in e)
			(n === 'class' || n === 'style' || Sl(n)) && ((t || (t = {}))[n] = e[n]);
		return t;
	},
	rm = (e, t) => {
		const n = {};
		for (const o in e) (!fr(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
		return n;
	};
function sm(e, t, n) {
	const { props: o, children: a, component: l } = e,
		{ props: i, children: s, patchFlag: r } = t,
		c = l.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && r >= 0) {
		if (r & 1024) return !0;
		if (r & 16) return o ? hs(o, i, c) : !!i;
		if (r & 8) {
			const u = t.dynamicProps;
			for (let h = 0; h < u.length; h++) {
				const f = u[h];
				if (i[f] !== o[f] && !Il(c, f)) return !0;
			}
		}
	} else
		return (a || s) && (!s || !s.$stable)
			? !0
			: o === i
				? !1
				: o
					? i
						? hs(o, i, c)
						: !0
					: !!i;
	return !1;
}
function hs(e, t, n) {
	const o = Object.keys(t);
	if (o.length !== Object.keys(e).length) return !0;
	for (let a = 0; a < o.length; a++) {
		const l = o[a];
		if (t[l] !== e[l] && !Il(n, l)) return !0;
	}
	return !1;
}
function cm({ vnode: e, parent: t }, n) {
	for (; t; ) {
		const o = t.subTree;
		if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
			((e = t.vnode).el = n), (t = t.parent);
		else break;
	}
}
const ju = 'components',
	um = 'directives';
function ms(e, t) {
	return Uu(ju, e, !0, t) || e;
}
const dm = Symbol.for('v-ndc');
function fm(e) {
	return Uu(um, e);
}
function Uu(e, t, n = !0, o = !1) {
	const a = dt || tt;
	if (a) {
		const l = a.type;
		if (e === ju) {
			const s = lv(l, !1);
			if (s && (s === t || s === Zt(t) || s === _l(Zt(t)))) return l;
		}
		const i = vs(a[e] || l[e], t) || vs(a.appContext[e], t);
		return !i && o ? l : i;
	}
}
function vs(e, t) {
	return e && (e[t] || e[Zt(t)] || e[_l(Zt(t))]);
}
const hm = e => e.__isSuspense;
function mm(e, t) {
	t && t.pendingBranch
		? ye(e)
			? t.effects.push(...e)
			: t.effects.push(e)
		: om(e);
}
const vm = Symbol.for('v-scx'),
	gm = () => mt(vm);
function Ro(e, t) {
	return Tr(e, null, t);
}
const Oa = {};
function ee(e, t, n) {
	return Tr(e, t, n);
}
function Tr(
	e,
	t,
	{ immediate: n, deep: o, flush: a, once: l, onTrack: i, onTrigger: s } = Le,
) {
	if (t && l) {
		const T = t;
		t = (...O) => {
			T(...O), x();
		};
	}
	const r = tt,
		c = T => (o === !0 ? T : eo(T, o === !1 ? 1 : void 0));
	let u,
		h = !1,
		f = !1;
	if (
		(ft(e)
			? ((u = () => e.value), (h = sl(e)))
			: ta(e)
				? ((u = () => c(e)), (h = !0))
				: ye(e)
					? ((f = !0),
						(h = e.some(T => ta(T) || sl(T))),
						(u = () =>
							e.map(T => {
								if (ft(T)) return T.value;
								if (ta(T)) return c(T);
								if (Se(T)) return Mn(T, r, 2);
							})))
					: Se(e)
						? t
							? (u = () => Mn(e, r, 2))
							: (u = () => (m && m(), Ct(e, r, 3, [v])))
						: (u = St),
		t && o)
	) {
		const T = u;
		u = () => eo(T());
	}
	let m,
		v = T => {
			m = C.onStop = () => {
				Mn(T, r, 4), (m = C.onStop = void 0);
			};
		},
		y;
	if (Bl)
		if (
			((v = St),
			t ? n && Ct(t, r, 3, [u(), f ? [] : void 0, v]) : u(),
			a === 'sync')
		) {
			const T = gm();
			y = T.__watcherHandles || (T.__watcherHandles = []);
		} else return St;
	let g = f ? new Array(e.length).fill(Oa) : Oa;
	const w = () => {
		if (!(!C.active || !C.dirty))
			if (t) {
				const T = C.run();
				(o || h || (f ? T.some((O, S) => Ln(O, g[S])) : Ln(T, g))) &&
					(m && m(),
					Ct(t, r, 3, [T, g === Oa ? void 0 : f && g[0] === Oa ? [] : g, v]),
					(g = T));
			} else C.run();
	};
	w.allowRecurse = !!t;
	let b;
	a === 'sync'
		? (b = w)
		: a === 'post'
			? (b = () => ht(w, r && r.suspense))
			: ((w.pre = !0), r && (w.id = r.uid), (b = () => Cr(w)));
	const C = new vr(u, St, b),
		p = $h(),
		x = () => {
			C.stop(), p && hr(p.effects, C);
		};
	return (
		t
			? n
				? w()
				: (g = C.run())
			: a === 'post'
				? ht(C.run.bind(C), r && r.suspense)
				: C.run(),
		y && y.push(x),
		x
	);
}
function bm(e, t, n) {
	const o = this.proxy,
		a = je(e) ? (e.includes('.') ? Wu(o, e) : () => o[e]) : e.bind(o, o);
	let l;
	Se(t) ? (l = t) : ((l = t.handler), (n = t));
	const i = Ta(this),
		s = Tr(a, l.bind(o), n);
	return i(), s;
}
function Wu(e, t) {
	const n = t.split('.');
	return () => {
		let o = e;
		for (let a = 0; a < n.length && o; a++) o = o[n[a]];
		return o;
	};
}
function eo(e, t, n = 0, o) {
	if (!ze(e) || e.__v_skip) return e;
	if (t && t > 0) {
		if (n >= t) return e;
		n++;
	}
	if (((o = o || new Set()), o.has(e))) return e;
	if ((o.add(e), ft(e))) eo(e.value, t, n, o);
	else if (ye(e)) for (let a = 0; a < e.length; a++) eo(e[a], t, n, o);
	else if (du(e) || To(e))
		e.forEach(a => {
			eo(a, t, n, o);
		});
	else if (mu(e)) for (const a in e) eo(e[a], t, n, o);
	return e;
}
function Qe(e, t) {
	if (dt === null) return e;
	const n = Dl(dt) || dt.proxy,
		o = e.dirs || (e.dirs = []);
	for (let a = 0; a < t.length; a++) {
		let [l, i, s, r = Le] = t[a];
		l &&
			(Se(l) && (l = { mounted: l, updated: l }),
			l.deep && eo(i),
			o.push({
				dir: l,
				instance: n,
				value: i,
				oldValue: void 0,
				arg: s,
				modifiers: r,
			}));
	}
	return e;
}
function Yn(e, t, n, o) {
	const a = e.dirs,
		l = t && t.dirs;
	for (let i = 0; i < a.length; i++) {
		const s = a[i];
		l && (s.oldValue = l[i].value);
		let r = s.dir[o];
		r && (Nn(), Ct(r, n, 8, [e.el, s, e, t]), zn());
	}
}
const In = Symbol('_leaveCb'),
	Ra = Symbol('_enterCb');
function ym() {
	const e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: new Map(),
	};
	return (
		We(() => {
			e.isMounted = !0;
		}),
		en(() => {
			e.isUnmounting = !0;
		}),
		e
	);
}
const pt = [Function, Array],
	Yu = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: pt,
		onEnter: pt,
		onAfterEnter: pt,
		onEnterCancelled: pt,
		onBeforeLeave: pt,
		onLeave: pt,
		onAfterLeave: pt,
		onLeaveCancelled: pt,
		onBeforeAppear: pt,
		onAppear: pt,
		onAfterAppear: pt,
		onAppearCancelled: pt,
	},
	pm = {
		name: 'BaseTransition',
		props: Yu,
		setup(e, { slots: t }) {
			const n = Ft(),
				o = ym();
			return () => {
				const a = t.default && qu(t.default(), !0);
				if (!a || !a.length) return;
				let l = a[0];
				if (a.length > 1) {
					for (const f of a)
						if (f.type !== Dt) {
							l = f;
							break;
						}
				}
				const i = Oe(e),
					{ mode: s } = i;
				if (o.isLeaving) return ni(l);
				const r = gs(l);
				if (!r) return ni(l);
				const c = Mi(r, i, o, n);
				Li(r, c);
				const u = n.subTree,
					h = u && gs(u);
				if (h && h.type !== Dt && !Qn(r, h)) {
					const f = Mi(h, i, o, n);
					if ((Li(h, f), s === 'out-in'))
						return (
							(o.isLeaving = !0),
							(f.afterLeave = () => {
								(o.isLeaving = !1),
									n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
							}),
							ni(l)
						);
					s === 'in-out' &&
						r.type !== Dt &&
						(f.delayLeave = (m, v, y) => {
							const g = Ku(o, h);
							(g[String(h.key)] = h),
								(m[In] = () => {
									v(), (m[In] = void 0), delete c.delayedLeave;
								}),
								(c.delayedLeave = y);
						});
				}
				return l;
			};
		},
	},
	wm = pm;
function Ku(e, t) {
	const { leavingVNodes: n } = e;
	let o = n.get(t.type);
	return o || ((o = Object.create(null)), n.set(t.type, o)), o;
}
function Mi(e, t, n, o) {
	const {
			appear: a,
			mode: l,
			persisted: i = !1,
			onBeforeEnter: s,
			onEnter: r,
			onAfterEnter: c,
			onEnterCancelled: u,
			onBeforeLeave: h,
			onLeave: f,
			onAfterLeave: m,
			onLeaveCancelled: v,
			onBeforeAppear: y,
			onAppear: g,
			onAfterAppear: w,
			onAppearCancelled: b,
		} = t,
		C = String(e.key),
		p = Ku(n, e),
		x = (S, A) => {
			S && Ct(S, o, 9, A);
		},
		T = (S, A) => {
			const I = A[1];
			x(S, A),
				ye(S) ? S.every(k => k.length <= 1) && I() : S.length <= 1 && I();
		},
		O = {
			mode: l,
			persisted: i,
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
					if (a) (A = g || r), (I = w || c), (k = b || u);
					else return;
				let P = !1;
				const B = (S[Ra] = X => {
					P ||
						((P = !0),
						X ? x(k, [S]) : x(I, [S]),
						O.delayedLeave && O.delayedLeave(),
						(S[Ra] = void 0));
				});
				A ? T(A, [S, B]) : B();
			},
			leave(S, A) {
				const I = String(e.key);
				if ((S[Ra] && S[Ra](!0), n.isUnmounting)) return A();
				x(h, [S]);
				let k = !1;
				const P = (S[In] = B => {
					k ||
						((k = !0),
						A(),
						B ? x(v, [S]) : x(m, [S]),
						(S[In] = void 0),
						p[I] === e && delete p[I]);
				});
				(p[I] = e), f ? T(f, [S, P]) : P();
			},
			clone(S) {
				return Mi(S, t, n, o);
			},
		};
	return O;
}
function ni(e) {
	if (Ol(e)) return (e = Vn(e)), (e.children = null), e;
}
function gs(e) {
	if (!Ol(e)) return e;
	const { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && Se(n.default)) return n.default();
	}
}
function Li(e, t) {
	e.shapeFlag & 6 && e.component
		? Li(e.component.subTree, t)
		: e.shapeFlag & 128
			? ((e.ssContent.transition = t.clone(e.ssContent)),
				(e.ssFallback.transition = t.clone(e.ssFallback)))
			: (e.transition = t);
}
function qu(e, t = !1, n) {
	let o = [],
		a = 0;
	for (let l = 0; l < e.length; l++) {
		let i = e[l];
		const s = n == null ? i.key : String(n) + String(i.key != null ? i.key : l);
		i.type === Je
			? (i.patchFlag & 128 && a++, (o = o.concat(qu(i.children, t, s))))
			: (t || i.type !== Dt) && o.push(s != null ? Vn(i, { key: s }) : i);
	}
	if (a > 1) for (let l = 0; l < o.length; l++) o[l].patchFlag = -2;
	return o;
}
/*! #__NO_SIDE_EFFECTS__ */ function j(e, t) {
	return Se(e) ? qe({ name: e.name }, t, { setup: e }) : e;
}
const tl = e => !!e.type.__asyncLoader,
	Ol = e => e.type.__isKeepAlive;
function Jt(e, t) {
	Gu(e, 'a', t);
}
function Qt(e, t) {
	Gu(e, 'da', t);
}
function Gu(e, t, n = tt) {
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
	if ((Rl(t, o, n), n)) {
		let a = n.parent;
		for (; a && a.parent; )
			Ol(a.parent.vnode) && xm(o, t, n, a), (a = a.parent);
	}
}
function xm(e, t, n, o) {
	const a = Rl(t, e, o, !0);
	Bo(() => {
		hr(o[t], a);
	}, n);
}
function Rl(e, t, n = tt, o = !1) {
	if (n) {
		const a = n[e] || (n[e] = []),
			l =
				t.__weh ||
				(t.__weh = (...i) => {
					if (n.isUnmounted) return;
					Nn();
					const s = Ta(n),
						r = Ct(t, n, e, i);
					return s(), zn(), r;
				});
		return o ? a.unshift(l) : a.push(l), l;
	}
}
const gn =
		e =>
		(t, n = tt) =>
			(!Bl || e === 'sp') && Rl(e, (...o) => t(...o), n),
	Sm = gn('bm'),
	We = gn('m'),
	Xu = gn('bu'),
	Zu = gn('u'),
	en = gn('bum'),
	Bo = gn('um'),
	Cm = gn('sp'),
	Tm = gn('rtg'),
	_m = gn('rtc');
function km(e, t = tt) {
	Rl('ec', e, t);
}
function T_(e, t, n, o) {
	let a;
	const l = n;
	if (ye(e) || je(e)) {
		a = new Array(e.length);
		for (let i = 0, s = e.length; i < s; i++) a[i] = t(e[i], i, void 0, l);
	} else {
		a = new Array(e);
		for (let i = 0; i < e; i++) a[i] = t(i + 1, i, void 0, l);
	}
	return a;
}
const Vi = e => (e ? (hd(e) ? Dl(e) || e.proxy : Vi(e.parent)) : null),
	na = qe(Object.create(null), {
		$: e => e,
		$el: e => e.vnode.el,
		$data: e => e.data,
		$props: e => e.props,
		$attrs: e => e.attrs,
		$slots: e => e.slots,
		$refs: e => e.refs,
		$parent: e => Vi(e.parent),
		$root: e => Vi(e.root),
		$emit: e => e.emit,
		$options: e => _r(e),
		$forceUpdate: e =>
			e.f ||
			(e.f = () => {
				(e.effect.dirty = !0), Cr(e.update);
			}),
		$nextTick: e => e.n || (e.n = Te.bind(e.proxy)),
		$watch: e => bm.bind(e),
	}),
	oi = (e, t) => e !== Le && !e.__isScriptSetup && $e(e, t),
	Em = {
		get({ _: e }, t) {
			if (t === '__v_skip') return !0;
			const {
				ctx: n,
				setupState: o,
				data: a,
				props: l,
				accessCache: i,
				type: s,
				appContext: r,
			} = e;
			let c;
			if (t[0] !== '$') {
				const m = i[t];
				if (m !== void 0)
					switch (m) {
						case 1:
							return o[t];
						case 2:
							return a[t];
						case 4:
							return n[t];
						case 3:
							return l[t];
					}
				else {
					if (oi(o, t)) return (i[t] = 1), o[t];
					if (a !== Le && $e(a, t)) return (i[t] = 2), a[t];
					if ((c = e.propsOptions[0]) && $e(c, t)) return (i[t] = 3), l[t];
					if (n !== Le && $e(n, t)) return (i[t] = 4), n[t];
					Fi && (i[t] = 0);
				}
			}
			const u = na[t];
			let h, f;
			if (u) return t === '$attrs' && vt(e.attrs, 'get', ''), u(e);
			if ((h = s.__cssModules) && (h = h[t])) return h;
			if (n !== Le && $e(n, t)) return (i[t] = 4), n[t];
			if (((f = r.config.globalProperties), $e(f, t))) return f[t];
		},
		set({ _: e }, t, n) {
			const { data: o, setupState: a, ctx: l } = e;
			return oi(a, t)
				? ((a[t] = n), !0)
				: o !== Le && $e(o, t)
					? ((o[t] = n), !0)
					: $e(e.props, t) || (t[0] === '$' && t.slice(1) in e)
						? !1
						: ((l[t] = n), !0);
		},
		has(
			{
				_: {
					data: e,
					setupState: t,
					accessCache: n,
					ctx: o,
					appContext: a,
					propsOptions: l,
				},
			},
			i,
		) {
			let s;
			return (
				!!n[i] ||
				(e !== Le && $e(e, i)) ||
				oi(t, i) ||
				((s = l[0]) && $e(s, i)) ||
				$e(o, i) ||
				$e(na, i) ||
				$e(a.config.globalProperties, i)
			);
		},
		defineProperty(e, t, n) {
			return (
				n.get != null
					? (e._.accessCache[t] = 0)
					: $e(n, 'value') && this.set(e, t, n.value, null),
				Reflect.defineProperty(e, t, n)
			);
		},
	};
function bs(e) {
	return ye(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Fi = !0;
function Pm(e) {
	const t = _r(e),
		n = e.proxy,
		o = e.ctx;
	(Fi = !1), t.beforeCreate && ys(t.beforeCreate, e, 'bc');
	const {
		data: a,
		computed: l,
		methods: i,
		watch: s,
		provide: r,
		inject: c,
		created: u,
		beforeMount: h,
		mounted: f,
		beforeUpdate: m,
		updated: v,
		activated: y,
		deactivated: g,
		beforeDestroy: w,
		beforeUnmount: b,
		destroyed: C,
		unmounted: p,
		render: x,
		renderTracked: T,
		renderTriggered: O,
		errorCaptured: S,
		serverPrefetch: A,
		expose: I,
		inheritAttrs: k,
		components: P,
		directives: B,
		filters: X,
	} = t;
	if ((c && $m(c, o, null), i))
		for (const N in i) {
			const Y = i[N];
			Se(Y) && (o[N] = Y.bind(n));
		}
	if (a) {
		const N = a.call(n, n);
		ze(N) && (e.data = He(N));
	}
	if (((Fi = !0), l))
		for (const N in l) {
			const Y = l[N],
				me = Se(Y) ? Y.bind(n, n) : Se(Y.get) ? Y.get.bind(n, n) : St,
				ge = !Se(Y) && Se(Y.set) ? Y.set.bind(n) : St,
				ne = L({ get: me, set: ge });
			Object.defineProperty(o, N, {
				enumerable: !0,
				configurable: !0,
				get: () => ne.value,
				set: se => (ne.value = se),
			});
		}
	if (s) for (const N in s) Ju(s[N], o, n, N);
	if (r) {
		const N = Se(r) ? r.call(n) : r;
		Reflect.ownKeys(N).forEach(Y => {
			cn(Y, N[Y]);
		});
	}
	u && ys(u, e, 'c');
	function R(N, Y) {
		ye(Y) ? Y.forEach(me => N(me.bind(n))) : Y && N(Y.bind(n));
	}
	if (
		(R(Sm, h),
		R(We, f),
		R(Xu, m),
		R(Zu, v),
		R(Jt, y),
		R(Qt, g),
		R(km, S),
		R(_m, T),
		R(Tm, O),
		R(en, b),
		R(Bo, p),
		R(Cm, A),
		ye(I))
	)
		if (I.length) {
			const N = e.exposed || (e.exposed = {});
			I.forEach(Y => {
				Object.defineProperty(N, Y, {
					get: () => n[Y],
					set: me => (n[Y] = me),
				});
			});
		} else e.exposed || (e.exposed = {});
	x && e.render === St && (e.render = x),
		k != null && (e.inheritAttrs = k),
		P && (e.components = P),
		B && (e.directives = B);
}
function $m(e, t, n = St) {
	ye(e) && (e = Ni(e));
	for (const o in e) {
		const a = e[o];
		let l;
		ze(a)
			? 'default' in a
				? (l = mt(a.from || o, a.default, !0))
				: (l = mt(a.from || o))
			: (l = mt(a)),
			ft(l)
				? Object.defineProperty(t, o, {
						enumerable: !0,
						configurable: !0,
						get: () => l.value,
						set: i => (l.value = i),
					})
				: (t[o] = l);
	}
}
function ys(e, t, n) {
	Ct(ye(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ju(e, t, n, o) {
	const a = o.includes('.') ? Wu(n, o) : () => n[o];
	if (je(e)) {
		const l = t[e];
		Se(l) && ee(a, l);
	} else if (Se(e)) ee(a, e.bind(n));
	else if (ze(e))
		if (ye(e)) e.forEach(l => Ju(l, t, n, o));
		else {
			const l = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
			Se(l) && ee(a, l, e);
		}
}
function _r(e) {
	const t = e.type,
		{ mixins: n, extends: o } = t,
		{
			mixins: a,
			optionsCache: l,
			config: { optionMergeStrategies: i },
		} = e.appContext,
		s = l.get(t);
	let r;
	return (
		s
			? (r = s)
			: !a.length && !n && !o
				? (r = t)
				: ((r = {}), a.length && a.forEach(c => ul(r, c, i, !0)), ul(r, t, i)),
		ze(t) && l.set(t, r),
		r
	);
}
function ul(e, t, n, o = !1) {
	const { mixins: a, extends: l } = t;
	l && ul(e, l, n, !0), a && a.forEach(i => ul(e, i, n, !0));
	for (const i in t)
		if (!(o && i === 'expose')) {
			const s = Im[i] || (n && n[i]);
			e[i] = s ? s(e[i], t[i]) : t[i];
		}
	return e;
}
const Im = {
	data: ps,
	props: ws,
	emits: ws,
	methods: Qo,
	computed: Qo,
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
	components: Qo,
	directives: Qo,
	watch: Om,
	provide: ps,
	inject: Am,
};
function ps(e, t) {
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
function Am(e, t) {
	return Qo(Ni(e), Ni(t));
}
function Ni(e) {
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
function Qo(e, t) {
	return e ? qe(Object.create(null), e, t) : t;
}
function ws(e, t) {
	return e
		? ye(e) && ye(t)
			? [...new Set([...e, ...t])]
			: qe(Object.create(null), bs(e), bs(t ?? {}))
		: t;
}
function Om(e, t) {
	if (!e) return t;
	if (!t) return e;
	const n = qe(Object.create(null), e);
	for (const o in t) n[o] = ut(e[o], t[o]);
	return n;
}
function Qu() {
	return {
		app: null,
		config: {
			isNativeTag: hh,
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
let Rm = 0;
function Bm(e, t) {
	return function (o, a = null) {
		Se(o) || (o = qe({}, o)), a != null && !ze(a) && (a = null);
		const l = Qu(),
			i = new WeakSet();
		let s = !1;
		const r = (l.app = {
			_uid: Rm++,
			_component: o,
			_props: a,
			_container: null,
			_context: l,
			_instance: null,
			version: rv,
			get config() {
				return l.config;
			},
			set config(c) {},
			use(c, ...u) {
				return (
					i.has(c) ||
						(c && Se(c.install)
							? (i.add(c), c.install(r, ...u))
							: Se(c) && (i.add(c), c(r, ...u))),
					r
				);
			},
			mixin(c) {
				return l.mixins.includes(c) || l.mixins.push(c), r;
			},
			component(c, u) {
				return u ? ((l.components[c] = u), r) : l.components[c];
			},
			directive(c, u) {
				return u ? ((l.directives[c] = u), r) : l.directives[c];
			},
			mount(c, u, h) {
				if (!s) {
					const f = d(o, a);
					return (
						(f.appContext = l),
						h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
						u && t ? t(f, c) : e(f, c, h),
						(s = !0),
						(r._container = c),
						(c.__vue_app__ = r),
						Dl(f.component) || f.component.proxy
					);
				}
			},
			unmount() {
				s && (e(null, r._container), delete r._container.__vue_app__);
			},
			provide(c, u) {
				return (l.provides[c] = u), r;
			},
			runWithContext(c) {
				const u = oa;
				oa = r;
				try {
					return c();
				} finally {
					oa = u;
				}
			},
		});
		return r;
	};
}
let oa = null;
function cn(e, t) {
	if (tt) {
		let n = tt.provides;
		const o = tt.parent && tt.parent.provides;
		o === n && (n = tt.provides = Object.create(o)), (n[e] = t);
	}
}
function mt(e, t, n = !1) {
	const o = tt || dt;
	if (o || oa) {
		const a = o
			? o.parent == null
				? o.vnode.appContext && o.vnode.appContext.provides
				: o.parent.provides
			: oa._context.provides;
		if (a && e in a) return a[e];
		if (arguments.length > 1) return n && Se(t) ? t.call(o && o.proxy) : t;
	}
}
const ed = {},
	td = () => Object.create(ed),
	nd = e => Object.getPrototypeOf(e) === ed;
function Dm(e, t, n, o = !1) {
	const a = {},
		l = td();
	(e.propsDefaults = Object.create(null)), od(e, t, a, l);
	for (const i in e.propsOptions[0]) i in a || (a[i] = void 0);
	n ? (e.props = o ? a : Iu(a)) : e.type.props ? (e.props = a) : (e.props = l),
		(e.attrs = l);
}
function Mm(e, t, n, o) {
	const {
			props: a,
			attrs: l,
			vnode: { patchFlag: i },
		} = e,
		s = Oe(a),
		[r] = e.propsOptions;
	let c = !1;
	if ((o || i > 0) && !(i & 16)) {
		if (i & 8) {
			const u = e.vnode.dynamicProps;
			for (let h = 0; h < u.length; h++) {
				let f = u[h];
				if (Il(e.emitsOptions, f)) continue;
				const m = t[f];
				if (r)
					if ($e(l, f)) m !== l[f] && ((l[f] = m), (c = !0));
					else {
						const v = Zt(f);
						a[v] = zi(r, s, v, m, e, !1);
					}
				else m !== l[f] && ((l[f] = m), (c = !0));
			}
		}
	} else {
		od(e, t, a, l) && (c = !0);
		let u;
		for (const h in s)
			(!t || (!$e(t, h) && ((u = Fn(h)) === h || !$e(t, u)))) &&
				(r
					? n &&
						(n[h] !== void 0 || n[u] !== void 0) &&
						(a[h] = zi(r, s, h, void 0, e, !0))
					: delete a[h]);
		if (l !== s)
			for (const h in l) (!t || !$e(t, h)) && (delete l[h], (c = !0));
	}
	c && sn(e.attrs, 'set', '');
}
function od(e, t, n, o) {
	const [a, l] = e.propsOptions;
	let i = !1,
		s;
	if (t)
		for (let r in t) {
			if (ea(r)) continue;
			const c = t[r];
			let u;
			a && $e(a, (u = Zt(r)))
				? !l || !l.includes(u)
					? (n[u] = c)
					: ((s || (s = {}))[u] = c)
				: Il(e.emitsOptions, r) ||
					((!(r in o) || c !== o[r]) && ((o[r] = c), (i = !0)));
		}
	if (l) {
		const r = Oe(n),
			c = s || Le;
		for (let u = 0; u < l.length; u++) {
			const h = l[u];
			n[h] = zi(a, r, h, c[h], e, !$e(c, h));
		}
	}
	return i;
}
function zi(e, t, n, o, a, l) {
	const i = e[n];
	if (i != null) {
		const s = $e(i, 'default');
		if (s && o === void 0) {
			const r = i.default;
			if (i.type !== Function && !i.skipFactory && Se(r)) {
				const { propsDefaults: c } = a;
				if (n in c) o = c[n];
				else {
					const u = Ta(a);
					(o = c[n] = r.call(null, t)), u();
				}
			} else o = r;
		}
		i[0] &&
			(l && !s ? (o = !1) : i[1] && (o === '' || o === Fn(n)) && (o = !0));
	}
	return o;
}
function ad(e, t, n = !1) {
	const o = t.propsCache,
		a = o.get(e);
	if (a) return a;
	const l = e.props,
		i = {},
		s = [];
	let r = !1;
	if (!Se(e)) {
		const u = h => {
			r = !0;
			const [f, m] = ad(h, t, !0);
			qe(i, f), m && s.push(...m);
		};
		!n && t.mixins.length && t.mixins.forEach(u),
			e.extends && u(e.extends),
			e.mixins && e.mixins.forEach(u);
	}
	if (!l && !r) return ze(e) && o.set(e, Co), Co;
	if (ye(l))
		for (let u = 0; u < l.length; u++) {
			const h = Zt(l[u]);
			xs(h) && (i[h] = Le);
		}
	else if (l)
		for (const u in l) {
			const h = Zt(u);
			if (xs(h)) {
				const f = l[u],
					m = (i[h] = ye(f) || Se(f) ? { type: f } : qe({}, f));
				if (m) {
					const v = Ts(Boolean, m.type),
						y = Ts(String, m.type);
					(m[0] = v > -1),
						(m[1] = y < 0 || v < y),
						(v > -1 || $e(m, 'default')) && s.push(h);
				}
			}
		}
	const c = [i, s];
	return ze(e) && o.set(e, c), c;
}
function xs(e) {
	return e[0] !== '$' && !ea(e);
}
function Ss(e) {
	return e === null
		? 'null'
		: typeof e == 'function'
			? e.name || ''
			: (typeof e == 'object' && e.constructor && e.constructor.name) || '';
}
function Cs(e, t) {
	return Ss(e) === Ss(t);
}
function Ts(e, t) {
	return ye(t) ? t.findIndex(n => Cs(n, e)) : Se(t) && Cs(t, e) ? 0 : -1;
}
const ld = e => e[0] === '_' || e === '$stable',
	kr = e => (ye(e) ? e.map(qt) : [qt(e)]),
	Lm = (e, t, n) => {
		if (t._n) return t;
		const o = Hu((...a) => kr(t(...a)), n);
		return (o._c = !1), o;
	},
	id = (e, t, n) => {
		const o = e._ctx;
		for (const a in e) {
			if (ld(a)) continue;
			const l = e[a];
			if (Se(l)) t[a] = Lm(a, l, o);
			else if (l != null) {
				const i = kr(l);
				t[a] = () => i;
			}
		}
	},
	rd = (e, t) => {
		const n = kr(t);
		e.slots.default = () => n;
	},
	Vm = (e, t) => {
		const n = (e.slots = td());
		if (e.vnode.shapeFlag & 32) {
			const o = t._;
			o ? (qe(n, t), vu(n, '_', o)) : id(t, n);
		} else t && rd(e, t);
	},
	Fm = (e, t, n) => {
		const { vnode: o, slots: a } = e;
		let l = !0,
			i = Le;
		if (o.shapeFlag & 32) {
			const s = t._;
			s
				? n && s === 1
					? (l = !1)
					: (qe(a, t), !n && s === 1 && delete a._)
				: ((l = !t.$stable), id(t, a)),
				(i = t);
		} else t && (rd(e, t), (i = { default: 1 }));
		if (l) for (const s in a) !ld(s) && i[s] == null && delete a[s];
	};
function Hi(e, t, n, o, a = !1) {
	if (ye(e)) {
		e.forEach((f, m) => Hi(f, t && (ye(t) ? t[m] : t), n, o, a));
		return;
	}
	if (tl(o) && !a) return;
	const l = o.shapeFlag & 4 ? Dl(o.component) || o.component.proxy : o.el,
		i = a ? null : l,
		{ i: s, r } = e,
		c = t && t.r,
		u = s.refs === Le ? (s.refs = {}) : s.refs,
		h = s.setupState;
	if (
		(c != null &&
			c !== r &&
			(je(c)
				? ((u[c] = null), $e(h, c) && (h[c] = null))
				: ft(c) && (c.value = null)),
		Se(r))
	)
		Mn(r, s, 12, [i, u]);
	else {
		const f = je(r),
			m = ft(r);
		if (f || m) {
			const v = () => {
				if (e.f) {
					const y = f ? ($e(h, r) ? h[r] : u[r]) : r.value;
					a
						? ye(y) && hr(y, l)
						: ye(y)
							? y.includes(l) || y.push(l)
							: f
								? ((u[r] = [l]), $e(h, r) && (h[r] = u[r]))
								: ((r.value = [l]), e.k && (u[e.k] = r.value));
				} else
					f
						? ((u[r] = i), $e(h, r) && (h[r] = i))
						: m && ((r.value = i), e.k && (u[e.k] = i));
			};
			i ? ((v.id = -1), ht(v, n)) : v();
		}
	}
}
const ht = mm;
function Nm(e) {
	return zm(e);
}
function zm(e, t) {
	const n = gu();
	n.__VUE__ = !0;
	const {
			insert: o,
			remove: a,
			patchProp: l,
			createElement: i,
			createText: s,
			createComment: r,
			setText: c,
			setElementText: u,
			parentNode: h,
			nextSibling: f,
			setScopeId: m = St,
			insertStaticContent: v,
		} = e,
		y = (
			_,
			$,
			M,
			K = null,
			U = null,
			oe = null,
			ie = void 0,
			te = null,
			ae = !!$.dynamicChildren,
		) => {
			if (_ === $) return;
			_ && !Qn(_, $) && ((K = E(_)), se(_, U, oe, !0), (_ = null)),
				$.patchFlag === -2 && ((ae = !1), ($.dynamicChildren = null));
			const { type: J, ref: ce, shapeFlag: ve } = $;
			switch (J) {
				case Ca:
					g(_, $, M, K);
					break;
				case Dt:
					w(_, $, M, K);
					break;
				case nl:
					_ == null && b($, M, K, ie);
					break;
				case Je:
					P(_, $, M, K, U, oe, ie, te, ae);
					break;
				default:
					ve & 1
						? x(_, $, M, K, U, oe, ie, te, ae)
						: ve & 6
							? B(_, $, M, K, U, oe, ie, te, ae)
							: (ve & 64 || ve & 128) &&
								J.process(_, $, M, K, U, oe, ie, te, ae, Q);
			}
			ce != null && U && Hi(ce, _ && _.ref, oe, $ || _, !$);
		},
		g = (_, $, M, K) => {
			if (_ == null) o(($.el = s($.children)), M, K);
			else {
				const U = ($.el = _.el);
				$.children !== _.children && c(U, $.children);
			}
		},
		w = (_, $, M, K) => {
			_ == null ? o(($.el = r($.children || '')), M, K) : ($.el = _.el);
		},
		b = (_, $, M, K) => {
			[_.el, _.anchor] = v(_.children, $, M, K, _.el, _.anchor);
		},
		C = ({ el: _, anchor: $ }, M, K) => {
			let U;
			for (; _ && _ !== $; ) (U = f(_)), o(_, M, K), (_ = U);
			o($, M, K);
		},
		p = ({ el: _, anchor: $ }) => {
			let M;
			for (; _ && _ !== $; ) (M = f(_)), a(_), (_ = M);
			a($);
		},
		x = (_, $, M, K, U, oe, ie, te, ae) => {
			$.type === 'svg' ? (ie = 'svg') : $.type === 'math' && (ie = 'mathml'),
				_ == null ? T($, M, K, U, oe, ie, te, ae) : A(_, $, U, oe, ie, te, ae);
		},
		T = (_, $, M, K, U, oe, ie, te) => {
			let ae, J;
			const { props: ce, shapeFlag: ve, transition: fe, dirs: pe } = _;
			if (
				((ae = _.el = i(_.type, oe, ce && ce.is, ce)),
				ve & 8
					? u(ae, _.children)
					: ve & 16 && S(_.children, ae, null, K, U, ai(_, oe), ie, te),
				pe && Yn(_, null, K, 'created'),
				O(ae, _, _.scopeId, ie, K),
				ce)
			) {
				for (const Be in ce)
					Be !== 'value' &&
						!ea(Be) &&
						l(ae, Be, null, ce[Be], oe, _.children, K, U, ue);
				'value' in ce && l(ae, 'value', null, ce.value, oe),
					(J = ce.onVnodeBeforeMount) && Wt(J, K, _);
			}
			pe && Yn(_, null, K, 'beforeMount');
			const Ee = Hm(U, fe);
			Ee && fe.beforeEnter(ae),
				o(ae, $, M),
				((J = ce && ce.onVnodeMounted) || Ee || pe) &&
					ht(() => {
						J && Wt(J, K, _),
							Ee && fe.enter(ae),
							pe && Yn(_, null, K, 'mounted');
					}, U);
		},
		O = (_, $, M, K, U) => {
			if ((M && m(_, M), K)) for (let oe = 0; oe < K.length; oe++) m(_, K[oe]);
			if (U) {
				let oe = U.subTree;
				if ($ === oe) {
					const ie = U.vnode;
					O(_, ie, ie.scopeId, ie.slotScopeIds, U.parent);
				}
			}
		},
		S = (_, $, M, K, U, oe, ie, te, ae = 0) => {
			for (let J = ae; J < _.length; J++) {
				const ce = (_[J] = te ? An(_[J]) : qt(_[J]));
				y(null, ce, $, M, K, U, oe, ie, te);
			}
		},
		A = (_, $, M, K, U, oe, ie) => {
			const te = ($.el = _.el);
			let { patchFlag: ae, dynamicChildren: J, dirs: ce } = $;
			ae |= _.patchFlag & 16;
			const ve = _.props || Le,
				fe = $.props || Le;
			let pe;
			if (
				(M && Kn(M, !1),
				(pe = fe.onVnodeBeforeUpdate) && Wt(pe, M, $, _),
				ce && Yn($, _, M, 'beforeUpdate'),
				M && Kn(M, !0),
				J
					? I(_.dynamicChildren, J, te, M, K, ai($, U), oe)
					: ie || Y(_, $, te, null, M, K, ai($, U), oe, !1),
				ae > 0)
			) {
				if (ae & 16) k(te, $, ve, fe, M, K, U);
				else if (
					(ae & 2 && ve.class !== fe.class && l(te, 'class', null, fe.class, U),
					ae & 4 && l(te, 'style', ve.style, fe.style, U),
					ae & 8)
				) {
					const Ee = $.dynamicProps;
					for (let Be = 0; Be < Ee.length; Be++) {
						const Fe = Ee[Be],
							Ze = ve[Fe],
							Et = fe[Fe];
						(Et !== Ze || Fe === 'value') &&
							l(te, Fe, Ze, Et, U, _.children, M, K, ue);
					}
				}
				ae & 1 && _.children !== $.children && u(te, $.children);
			} else !ie && J == null && k(te, $, ve, fe, M, K, U);
			((pe = fe.onVnodeUpdated) || ce) &&
				ht(() => {
					pe && Wt(pe, M, $, _), ce && Yn($, _, M, 'updated');
				}, K);
		},
		I = (_, $, M, K, U, oe, ie) => {
			for (let te = 0; te < $.length; te++) {
				const ae = _[te],
					J = $[te],
					ce =
						ae.el && (ae.type === Je || !Qn(ae, J) || ae.shapeFlag & 70)
							? h(ae.el)
							: M;
				y(ae, J, ce, null, K, U, oe, ie, !0);
			}
		},
		k = (_, $, M, K, U, oe, ie) => {
			if (M !== K) {
				if (M !== Le)
					for (const te in M)
						!ea(te) &&
							!(te in K) &&
							l(_, te, M[te], null, ie, $.children, U, oe, ue);
				for (const te in K) {
					if (ea(te)) continue;
					const ae = K[te],
						J = M[te];
					ae !== J &&
						te !== 'value' &&
						l(_, te, J, ae, ie, $.children, U, oe, ue);
				}
				'value' in K && l(_, 'value', M.value, K.value, ie);
			}
		},
		P = (_, $, M, K, U, oe, ie, te, ae) => {
			const J = ($.el = _ ? _.el : s('')),
				ce = ($.anchor = _ ? _.anchor : s(''));
			let { patchFlag: ve, dynamicChildren: fe, slotScopeIds: pe } = $;
			pe && (te = te ? te.concat(pe) : pe),
				_ == null
					? (o(J, M, K),
						o(ce, M, K),
						S($.children || [], M, ce, U, oe, ie, te, ae))
					: ve > 0 && ve & 64 && fe && _.dynamicChildren
						? (I(_.dynamicChildren, fe, M, U, oe, ie, te),
							($.key != null || (U && $ === U.subTree)) && Er(_, $, !0))
						: Y(_, $, M, ce, U, oe, ie, te, ae);
		},
		B = (_, $, M, K, U, oe, ie, te, ae) => {
			($.slotScopeIds = te),
				_ == null
					? $.shapeFlag & 512
						? U.ctx.activate($, M, K, ie, ae)
						: X($, M, K, U, oe, ie, ae)
					: V(_, $, ae);
		},
		X = (_, $, M, K, U, oe, ie) => {
			const te = (_.component = ev(_, K, U));
			if ((Ol(_) && (te.ctx.renderer = Q), tv(te), te.asyncDep)) {
				if ((U && U.registerDep(te, R), !_.el)) {
					const ae = (te.subTree = d(Dt));
					w(null, ae, $, M);
				}
			} else R(te, _, $, M, U, oe, ie);
		},
		V = (_, $, M) => {
			const K = ($.component = _.component);
			if (sm(_, $, M))
				if (K.asyncDep && !K.asyncResolved) {
					N(K, $, M);
					return;
				} else (K.next = $), nm(K.update), (K.effect.dirty = !0), K.update();
			else ($.el = _.el), (K.vnode = $);
		},
		R = (_, $, M, K, U, oe, ie) => {
			const te = () => {
					if (_.isMounted) {
						let { next: ce, bu: ve, u: fe, parent: pe, vnode: Ee } = _;
						{
							const so = sd(_);
							if (so) {
								ce && ((ce.el = Ee.el), N(_, ce, ie)),
									so.asyncDep.then(() => {
										_.isUnmounted || te();
									});
								return;
							}
						}
						let Be = ce,
							Fe;
						Kn(_, !1),
							ce ? ((ce.el = Ee.el), N(_, ce, ie)) : (ce = Ee),
							ve && Ql(ve),
							(Fe = ce.props && ce.props.onVnodeBeforeUpdate) &&
								Wt(Fe, pe, ce, Ee),
							Kn(_, !0);
						const Ze = ti(_),
							Et = _.subTree;
						(_.subTree = Ze),
							y(Et, Ze, h(Et.el), E(Et), _, U, oe),
							(ce.el = Ze.el),
							Be === null && cm(_, Ze.el),
							fe && ht(fe, U),
							(Fe = ce.props && ce.props.onVnodeUpdated) &&
								ht(() => Wt(Fe, pe, ce, Ee), U);
					} else {
						let ce;
						const { el: ve, props: fe } = $,
							{ bm: pe, m: Ee, parent: Be } = _,
							Fe = tl($);
						if (
							(Kn(_, !1),
							pe && Ql(pe),
							!Fe && (ce = fe && fe.onVnodeBeforeMount) && Wt(ce, Be, $),
							Kn(_, !0),
							ve && xe)
						) {
							const Ze = () => {
								(_.subTree = ti(_)), xe(ve, _.subTree, _, U, null);
							};
							Fe
								? $.type.__asyncLoader().then(() => !_.isUnmounted && Ze())
								: Ze();
						} else {
							const Ze = (_.subTree = ti(_));
							y(null, Ze, M, K, _, U, oe), ($.el = Ze.el);
						}
						if ((Ee && ht(Ee, U), !Fe && (ce = fe && fe.onVnodeMounted))) {
							const Ze = $;
							ht(() => Wt(ce, Be, Ze), U);
						}
						($.shapeFlag & 256 ||
							(Be && tl(Be.vnode) && Be.vnode.shapeFlag & 256)) &&
							_.a &&
							ht(_.a, U),
							(_.isMounted = !0),
							($ = M = K = null);
					}
				},
				ae = (_.effect = new vr(te, St, () => Cr(J), _.scope)),
				J = (_.update = () => {
					ae.dirty && ae.run();
				});
			(J.id = _.uid), Kn(_, !0), J();
		},
		N = (_, $, M) => {
			$.component = _;
			const K = _.vnode.props;
			(_.vnode = $),
				(_.next = null),
				Mm(_, $.props, K, M),
				Fm(_, $.children, M),
				Nn(),
				fs(_),
				zn();
		},
		Y = (_, $, M, K, U, oe, ie, te, ae = !1) => {
			const J = _ && _.children,
				ce = _ ? _.shapeFlag : 0,
				ve = $.children,
				{ patchFlag: fe, shapeFlag: pe } = $;
			if (fe > 0) {
				if (fe & 128) {
					ge(J, ve, M, K, U, oe, ie, te, ae);
					return;
				} else if (fe & 256) {
					me(J, ve, M, K, U, oe, ie, te, ae);
					return;
				}
			}
			pe & 8
				? (ce & 16 && ue(J, U, oe), ve !== J && u(M, ve))
				: ce & 16
					? pe & 16
						? ge(J, ve, M, K, U, oe, ie, te, ae)
						: ue(J, U, oe, !0)
					: (ce & 8 && u(M, ''), pe & 16 && S(ve, M, K, U, oe, ie, te, ae));
		},
		me = (_, $, M, K, U, oe, ie, te, ae) => {
			(_ = _ || Co), ($ = $ || Co);
			const J = _.length,
				ce = $.length,
				ve = Math.min(J, ce);
			let fe;
			for (fe = 0; fe < ve; fe++) {
				const pe = ($[fe] = ae ? An($[fe]) : qt($[fe]));
				y(_[fe], pe, M, null, U, oe, ie, te, ae);
			}
			J > ce ? ue(_, U, oe, !0, !1, ve) : S($, M, K, U, oe, ie, te, ae, ve);
		},
		ge = (_, $, M, K, U, oe, ie, te, ae) => {
			let J = 0;
			const ce = $.length;
			let ve = _.length - 1,
				fe = ce - 1;
			for (; J <= ve && J <= fe; ) {
				const pe = _[J],
					Ee = ($[J] = ae ? An($[J]) : qt($[J]));
				if (Qn(pe, Ee)) y(pe, Ee, M, null, U, oe, ie, te, ae);
				else break;
				J++;
			}
			for (; J <= ve && J <= fe; ) {
				const pe = _[ve],
					Ee = ($[fe] = ae ? An($[fe]) : qt($[fe]));
				if (Qn(pe, Ee)) y(pe, Ee, M, null, U, oe, ie, te, ae);
				else break;
				ve--, fe--;
			}
			if (J > ve) {
				if (J <= fe) {
					const pe = fe + 1,
						Ee = pe < ce ? $[pe].el : K;
					for (; J <= fe; )
						y(
							null,
							($[J] = ae ? An($[J]) : qt($[J])),
							M,
							Ee,
							U,
							oe,
							ie,
							te,
							ae,
						),
							J++;
				}
			} else if (J > fe) for (; J <= ve; ) se(_[J], U, oe, !0), J++;
			else {
				const pe = J,
					Ee = J,
					Be = new Map();
				for (J = Ee; J <= fe; J++) {
					const bt = ($[J] = ae ? An($[J]) : qt($[J]));
					bt.key != null && Be.set(bt.key, J);
				}
				let Fe,
					Ze = 0;
				const Et = fe - Ee + 1;
				let so = !1,
					ts = 0;
				const zo = new Array(Et);
				for (J = 0; J < Et; J++) zo[J] = 0;
				for (J = pe; J <= ve; J++) {
					const bt = _[J];
					if (Ze >= Et) {
						se(bt, U, oe, !0);
						continue;
					}
					let Ut;
					if (bt.key != null) Ut = Be.get(bt.key);
					else
						for (Fe = Ee; Fe <= fe; Fe++)
							if (zo[Fe - Ee] === 0 && Qn(bt, $[Fe])) {
								Ut = Fe;
								break;
							}
					Ut === void 0
						? se(bt, U, oe, !0)
						: ((zo[Ut - Ee] = J + 1),
							Ut >= ts ? (ts = Ut) : (so = !0),
							y(bt, $[Ut], M, null, U, oe, ie, te, ae),
							Ze++);
				}
				const ns = so ? jm(zo) : Co;
				for (Fe = ns.length - 1, J = Et - 1; J >= 0; J--) {
					const bt = Ee + J,
						Ut = $[bt],
						os = bt + 1 < ce ? $[bt + 1].el : K;
					zo[J] === 0
						? y(null, Ut, M, os, U, oe, ie, te, ae)
						: so && (Fe < 0 || J !== ns[Fe] ? ne(Ut, M, os, 2) : Fe--);
				}
			}
		},
		ne = (_, $, M, K, U = null) => {
			const {
				el: oe,
				type: ie,
				transition: te,
				children: ae,
				shapeFlag: J,
			} = _;
			if (J & 6) {
				ne(_.component.subTree, $, M, K);
				return;
			}
			if (J & 128) {
				_.suspense.move($, M, K);
				return;
			}
			if (J & 64) {
				ie.move(_, $, M, Q);
				return;
			}
			if (ie === Je) {
				o(oe, $, M);
				for (let ve = 0; ve < ae.length; ve++) ne(ae[ve], $, M, K);
				o(_.anchor, $, M);
				return;
			}
			if (ie === nl) {
				C(_, $, M);
				return;
			}
			if (K !== 2 && J & 1 && te)
				if (K === 0) te.beforeEnter(oe), o(oe, $, M), ht(() => te.enter(oe), U);
				else {
					const { leave: ve, delayLeave: fe, afterLeave: pe } = te,
						Ee = () => o(oe, $, M),
						Be = () => {
							ve(oe, () => {
								Ee(), pe && pe();
							});
						};
					fe ? fe(oe, Ee, Be) : Be();
				}
			else o(oe, $, M);
		},
		se = (_, $, M, K = !1, U = !1) => {
			const {
				type: oe,
				props: ie,
				ref: te,
				children: ae,
				dynamicChildren: J,
				shapeFlag: ce,
				patchFlag: ve,
				dirs: fe,
			} = _;
			if ((te != null && Hi(te, null, M, _, !0), ce & 256)) {
				$.ctx.deactivate(_);
				return;
			}
			const pe = ce & 1 && fe,
				Ee = !tl(_);
			let Be;
			if ((Ee && (Be = ie && ie.onVnodeBeforeUnmount) && Wt(Be, $, _), ce & 6))
				re(_.component, M, K);
			else {
				if (ce & 128) {
					_.suspense.unmount(M, K);
					return;
				}
				pe && Yn(_, null, $, 'beforeUnmount'),
					ce & 64
						? _.type.remove(_, $, M, U, Q, K)
						: J && (oe !== Je || (ve > 0 && ve & 64))
							? ue(J, $, M, !1, !0)
							: ((oe === Je && ve & 384) || (!U && ce & 16)) && ue(ae, $, M),
					K && be(_);
			}
			((Ee && (Be = ie && ie.onVnodeUnmounted)) || pe) &&
				ht(() => {
					Be && Wt(Be, $, _), pe && Yn(_, null, $, 'unmounted');
				}, M);
		},
		be = _ => {
			const { type: $, el: M, anchor: K, transition: U } = _;
			if ($ === Je) {
				De(M, K);
				return;
			}
			if ($ === nl) {
				p(_);
				return;
			}
			const oe = () => {
				a(M), U && !U.persisted && U.afterLeave && U.afterLeave();
			};
			if (_.shapeFlag & 1 && U && !U.persisted) {
				const { leave: ie, delayLeave: te } = U,
					ae = () => ie(M, oe);
				te ? te(_.el, oe, ae) : ae();
			} else oe();
		},
		De = (_, $) => {
			let M;
			for (; _ !== $; ) (M = f(_)), a(_), (_ = M);
			a($);
		},
		re = (_, $, M) => {
			const { bum: K, scope: U, update: oe, subTree: ie, um: te } = _;
			K && Ql(K),
				U.stop(),
				oe && ((oe.active = !1), se(ie, _, $, M)),
				te && ht(te, $),
				ht(() => {
					_.isUnmounted = !0;
				}, $),
				$ &&
					$.pendingBranch &&
					!$.isUnmounted &&
					_.asyncDep &&
					!_.asyncResolved &&
					_.suspenseId === $.pendingId &&
					($.deps--, $.deps === 0 && $.resolve());
		},
		ue = (_, $, M, K = !1, U = !1, oe = 0) => {
			for (let ie = oe; ie < _.length; ie++) se(_[ie], $, M, K, U);
		},
		E = _ =>
			_.shapeFlag & 6
				? E(_.component.subTree)
				: _.shapeFlag & 128
					? _.suspense.next()
					: f(_.anchor || _.el);
	let H = !1;
	const F = (_, $, M) => {
			_ == null
				? $._vnode && se($._vnode, null, null, !0)
				: y($._vnode || null, _, $, null, null, null, M),
				H || ((H = !0), fs(), Fu(), (H = !1)),
				($._vnode = _);
		},
		Q = { p: y, um: se, m: ne, r: be, mt: X, mc: S, pc: Y, pbc: I, n: E, o: e };
	let de, xe;
	return { render: F, hydrate: de, createApp: Bm(F, de) };
}
function ai({ type: e, props: t }, n) {
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
function Hm(e, t) {
	return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Er(e, t, n = !1) {
	const o = e.children,
		a = t.children;
	if (ye(o) && ye(a))
		for (let l = 0; l < o.length; l++) {
			const i = o[l];
			let s = a[l];
			s.shapeFlag & 1 &&
				!s.dynamicChildren &&
				((s.patchFlag <= 0 || s.patchFlag === 32) &&
					((s = a[l] = An(a[l])), (s.el = i.el)),
				n || Er(i, s)),
				s.type === Ca && (s.el = i.el);
		}
}
function jm(e) {
	const t = e.slice(),
		n = [0];
	let o, a, l, i, s;
	const r = e.length;
	for (o = 0; o < r; o++) {
		const c = e[o];
		if (c !== 0) {
			if (((a = n[n.length - 1]), e[a] < c)) {
				(t[o] = a), n.push(o);
				continue;
			}
			for (l = 0, i = n.length - 1; l < i; )
				(s = (l + i) >> 1), e[n[s]] < c ? (l = s + 1) : (i = s);
			c < e[n[l]] && (l > 0 && (t[o] = n[l - 1]), (n[l] = o));
		}
	}
	for (l = n.length, i = n[l - 1]; l-- > 0; ) (n[l] = i), (i = t[i]);
	return n;
}
function sd(e) {
	const t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : sd(t);
}
const Um = e => e.__isTeleport,
	aa = e => e && (e.disabled || e.disabled === ''),
	_s = e => typeof SVGElement < 'u' && e instanceof SVGElement,
	ks = e => typeof MathMLElement == 'function' && e instanceof MathMLElement,
	ji = (e, t) => {
		const n = e && e.to;
		return je(n) ? (t ? t(n) : null) : n;
	},
	Wm = {
		name: 'Teleport',
		__isTeleport: !0,
		process(e, t, n, o, a, l, i, s, r, c) {
			const {
					mc: u,
					pc: h,
					pbc: f,
					o: { insert: m, querySelector: v, createText: y, createComment: g },
				} = c,
				w = aa(t.props);
			let { shapeFlag: b, children: C, dynamicChildren: p } = t;
			if (e == null) {
				const x = (t.el = y('')),
					T = (t.anchor = y(''));
				m(x, n, o), m(T, n, o);
				const O = (t.target = ji(t.props, v)),
					S = (t.targetAnchor = y(''));
				O &&
					(m(S, O),
					i === 'svg' || _s(O)
						? (i = 'svg')
						: (i === 'mathml' || ks(O)) && (i = 'mathml'));
				const A = (I, k) => {
					b & 16 && u(C, I, k, a, l, i, s, r);
				};
				w ? A(n, T) : O && A(O, S);
			} else {
				t.el = e.el;
				const x = (t.anchor = e.anchor),
					T = (t.target = e.target),
					O = (t.targetAnchor = e.targetAnchor),
					S = aa(e.props),
					A = S ? n : T,
					I = S ? x : O;
				if (
					(i === 'svg' || _s(T)
						? (i = 'svg')
						: (i === 'mathml' || ks(T)) && (i = 'mathml'),
					p
						? (f(e.dynamicChildren, p, A, a, l, i, s), Er(e, t, !0))
						: r || h(e, t, A, I, a, l, i, s, !1),
					w)
				)
					S
						? t.props &&
							e.props &&
							t.props.to !== e.props.to &&
							(t.props.to = e.props.to)
						: Ba(t, n, x, c, 1);
				else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
					const k = (t.target = ji(t.props, v));
					k && Ba(t, k, null, c, 0);
				} else S && Ba(t, T, O, c, 1);
			}
			cd(t);
		},
		remove(e, t, n, o, { um: a, o: { remove: l } }, i) {
			const {
				shapeFlag: s,
				children: r,
				anchor: c,
				targetAnchor: u,
				target: h,
				props: f,
			} = e;
			if ((h && l(u), i && l(c), s & 16)) {
				const m = i || !aa(f);
				for (let v = 0; v < r.length; v++) {
					const y = r[v];
					a(y, t, n, m, !!y.dynamicChildren);
				}
			}
		},
		move: Ba,
		hydrate: Ym,
	};
function Ba(e, t, n, { o: { insert: o }, m: a }, l = 2) {
	l === 0 && o(e.targetAnchor, t, n);
	const { el: i, anchor: s, shapeFlag: r, children: c, props: u } = e,
		h = l === 2;
	if ((h && o(i, t, n), (!h || aa(u)) && r & 16))
		for (let f = 0; f < c.length; f++) a(c[f], t, n, 2);
	h && o(s, t, n);
}
function Ym(
	e,
	t,
	n,
	o,
	a,
	l,
	{ o: { nextSibling: i, parentNode: s, querySelector: r } },
	c,
) {
	const u = (t.target = ji(t.props, r));
	if (u) {
		const h = u._lpa || u.firstChild;
		if (t.shapeFlag & 16)
			if (aa(t.props))
				(t.anchor = c(i(e), t, s(e), n, o, a, l)), (t.targetAnchor = h);
			else {
				t.anchor = i(e);
				let f = h;
				for (; f; )
					if (
						((f = i(f)), f && f.nodeType === 8 && f.data === 'teleport anchor')
					) {
						(t.targetAnchor = f),
							(u._lpa = t.targetAnchor && i(t.targetAnchor));
						break;
					}
				c(h, t, u, n, o, a, l);
			}
		cd(t);
	}
	return t.anchor && i(t.anchor);
}
const Do = Wm;
function cd(e) {
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
	Ca = Symbol.for('v-txt'),
	Dt = Symbol.for('v-cmt'),
	nl = Symbol.for('v-stc'),
	la = [];
let Rt = null;
function Km(e = !1) {
	la.push((Rt = e ? null : []));
}
function qm() {
	la.pop(), (Rt = la[la.length - 1] || null);
}
let ga = 1;
function Es(e) {
	ga += e;
}
function ud(e) {
	return (
		(e.dynamicChildren = ga > 0 ? Rt || Co : null),
		qm(),
		ga > 0 && Rt && Rt.push(e),
		e
	);
}
function __(e, t, n, o, a, l) {
	return ud(fd(e, t, n, o, a, l, !0));
}
function Gm(e, t, n, o, a) {
	return ud(d(e, t, n, o, a, !0));
}
function dl(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Qn(e, t) {
	return e.type === t.type && e.key === t.key;
}
const dd = ({ key: e }) => e ?? null,
	ol = ({ ref: e, ref_key: t, ref_for: n }) => (
		typeof e == 'number' && (e = '' + e),
		e != null
			? je(e) || ft(e) || Se(e)
				? { i: dt, r: e, k: t, f: !!n }
				: e
			: null
	);
function fd(
	e,
	t = null,
	n = null,
	o = 0,
	a = null,
	l = e === Je ? 0 : 1,
	i = !1,
	s = !1,
) {
	const r = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && dd(t),
		ref: t && ol(t),
		scopeId: Al,
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
		shapeFlag: l,
		patchFlag: o,
		dynamicProps: a,
		dynamicChildren: null,
		appContext: null,
		ctx: dt,
	};
	return (
		s
			? ($r(r, n), l & 128 && e.normalize(r))
			: n && (r.shapeFlag |= je(n) ? 8 : 16),
		ga > 0 &&
			!i &&
			Rt &&
			(r.patchFlag > 0 || l & 6) &&
			r.patchFlag !== 32 &&
			Rt.push(r),
		r
	);
}
const d = Xm;
function Xm(e, t = null, n = null, o = 0, a = null, l = !1) {
	if (((!e || e === dm) && (e = Dt), dl(e))) {
		const s = Vn(e, t, !0);
		return (
			n && $r(s, n),
			ga > 0 &&
				!l &&
				Rt &&
				(s.shapeFlag & 6 ? (Rt[Rt.indexOf(e)] = s) : Rt.push(s)),
			(s.patchFlag |= -2),
			s
		);
	}
	if ((iv(e) && (e = e.__vccOpts), t)) {
		t = Zm(t);
		let { class: s, style: r } = t;
		s && !je(s) && (t.class = El(s)),
			ze(r) && (Ou(r) && !ye(r) && (r = qe({}, r)), (t.style = kl(r)));
	}
	const i = je(e) ? 1 : hm(e) ? 128 : Um(e) ? 64 : ze(e) ? 4 : Se(e) ? 2 : 0;
	return fd(e, t, n, o, a, i, l, !0);
}
function Zm(e) {
	return e ? (Ou(e) || nd(e) ? qe({}, e) : e) : null;
}
function Vn(e, t, n = !1) {
	const { props: o, ref: a, patchFlag: l, children: i } = e,
		s = t ? _e(o || {}, t) : o;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: s,
		key: s && dd(s),
		ref:
			t && t.ref
				? n && a
					? ye(a)
						? a.concat(ol(t))
						: [a, ol(t)]
					: ol(t)
				: a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: i,
		target: e.target,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Je ? (l === -1 ? 16 : l | 16) : l,
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
function Pr(e = ' ', t = 0) {
	return d(Ca, null, e, t);
}
function k_(e, t) {
	const n = d(nl, null, e);
	return (n.staticCount = t), n;
}
function qt(e) {
	return e == null || typeof e == 'boolean'
		? d(Dt)
		: ye(e)
			? d(Je, null, e.slice())
			: typeof e == 'object'
				? An(e)
				: d(Ca, null, String(e));
}
function An(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Vn(e);
}
function $r(e, t) {
	let n = 0;
	const { shapeFlag: o } = e;
	if (t == null) t = null;
	else if (ye(t)) n = 16;
	else if (typeof t == 'object')
		if (o & 65) {
			const a = t.default;
			a && (a._c && (a._d = !1), $r(e, a()), a._c && (a._d = !0));
			return;
		} else {
			n = 32;
			const a = t._;
			!a && !nd(t)
				? (t._ctx = dt)
				: a === 3 &&
					dt &&
					(dt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
		}
	else
		Se(t)
			? ((t = { default: t, _ctx: dt }), (n = 32))
			: ((t = String(t)), o & 64 ? ((n = 16), (t = [Pr(t)])) : (n = 8));
	(e.children = t), (e.shapeFlag |= n);
}
function _e(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const o = e[n];
		for (const a in o)
			if (a === 'class')
				t.class !== o.class && (t.class = El([t.class, o.class]));
			else if (a === 'style') t.style = kl([t.style, o.style]);
			else if (Sl(a)) {
				const l = t[a],
					i = o[a];
				i &&
					l !== i &&
					!(ye(l) && l.includes(i)) &&
					(t[a] = l ? [].concat(l, i) : i);
			} else a !== '' && (t[a] = o[a]);
	}
	return t;
}
function Wt(e, t, n, o = null) {
	Ct(e, t, 7, [n, o]);
}
const Jm = Qu();
let Qm = 0;
function ev(e, t, n) {
	const o = e.type,
		a = (t ? t.appContext : e.appContext) || Jm,
		l = {
			uid: Qm++,
			vnode: e,
			type: o,
			parent: t,
			appContext: a,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new Eh(!0),
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
			propsOptions: ad(o, a),
			emitsOptions: zu(o, a),
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
		(l.ctx = { _: l }),
		(l.root = t ? t.root : l),
		(l.emit = lm.bind(null, l)),
		e.ce && e.ce(l),
		l
	);
}
let tt = null;
const Ft = () => tt || dt;
let fl, Ui;
{
	const e = gu(),
		t = (n, o) => {
			let a;
			return (
				(a = e[n]) || (a = e[n] = []),
				a.push(o),
				l => {
					a.length > 1 ? a.forEach(i => i(l)) : a[0](l);
				}
			);
		};
	(fl = t('__VUE_INSTANCE_SETTERS__', n => (tt = n))),
		(Ui = t('__VUE_SSR_SETTERS__', n => (Bl = n)));
}
const Ta = e => {
		const t = tt;
		return (
			fl(e),
			e.scope.on(),
			() => {
				e.scope.off(), fl(t);
			}
		);
	},
	Ps = () => {
		tt && tt.scope.off(), fl(null);
	};
function hd(e) {
	return e.vnode.shapeFlag & 4;
}
let Bl = !1;
function tv(e, t = !1) {
	t && Ui(t);
	const { props: n, children: o } = e.vnode,
		a = hd(e);
	Dm(e, n, a, t), Vm(e, o);
	const l = a ? nv(e, t) : void 0;
	return t && Ui(!1), l;
}
function nv(e, t) {
	const n = e.type;
	(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Em));
	const { setup: o } = n;
	if (o) {
		const a = (e.setupContext = o.length > 1 ? av(e) : null),
			l = Ta(e);
		Nn();
		const i = Mn(o, e, 0, [e.props, a]);
		if ((zn(), l(), fu(i))) {
			if ((i.then(Ps, Ps), t))
				return i
					.then(s => {
						$s(e, s, t);
					})
					.catch(s => {
						$l(s, e, 0);
					});
			e.asyncDep = i;
		} else $s(e, i, t);
	} else md(e, t);
}
function $s(e, t, n) {
	Se(t)
		? e.type.__ssrInlineRender
			? (e.ssrRender = t)
			: (e.render = t)
		: ze(t) && (e.setupState = Mu(t)),
		md(e, n);
}
let Is;
function md(e, t, n) {
	const o = e.type;
	if (!e.render) {
		if (!t && Is && !o.render) {
			const a = o.template || _r(e).template;
			if (a) {
				const { isCustomElement: l, compilerOptions: i } = e.appContext.config,
					{ delimiters: s, compilerOptions: r } = o,
					c = qe(qe({ isCustomElement: l, delimiters: s }, i), r);
				o.render = Is(a, c);
			}
		}
		e.render = o.render || St;
	}
	{
		const a = Ta(e);
		Nn();
		try {
			Pm(e);
		} finally {
			zn(), a();
		}
	}
}
const ov = {
	get(e, t) {
		return vt(e, 'get', ''), e[t];
	},
};
function av(e) {
	const t = n => {
		e.exposed = n || {};
	};
	return {
		attrs: new Proxy(e.attrs, ov),
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function Dl(e) {
	if (e.exposed)
		return (
			e.exposeProxy ||
			(e.exposeProxy = new Proxy(Mu(Gh(e.exposed)), {
				get(t, n) {
					if (n in t) return t[n];
					if (n in na) return na[n](e);
				},
				has(t, n) {
					return n in t || n in na;
				},
			}))
		);
}
function lv(e, t = !0) {
	return Se(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function iv(e) {
	return Se(e) && '__vccOpts' in e;
}
const L = (e, t) => Xh(e, t, Bl);
function Ir(e, t, n) {
	const o = arguments.length;
	return o === 2
		? ze(t) && !ye(t)
			? dl(t)
				? d(e, null, [t])
				: d(e, t)
			: d(e, null, t)
		: (o > 3
				? (n = Array.prototype.slice.call(arguments, 2))
				: o === 3 && dl(n) && (n = [n]),
			d(e, t, n));
}
const rv = '3.4.25';
/**
 * @vue/runtime-dom v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const sv = 'http://www.w3.org/2000/svg',
	cv = 'http://www.w3.org/1998/Math/MathML',
	On = typeof document < 'u' ? document : null,
	As = On && On.createElement('template'),
	uv = {
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
					? On.createElementNS(sv, e)
					: t === 'mathml'
						? On.createElementNS(cv, e)
						: On.createElement(e, n ? { is: n } : void 0);
			return (
				e === 'select' &&
					o &&
					o.multiple != null &&
					a.setAttribute('multiple', o.multiple),
				a
			);
		},
		createText: e => On.createTextNode(e),
		createComment: e => On.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: e => e.parentNode,
		nextSibling: e => e.nextSibling,
		querySelector: e => On.querySelector(e),
		setScopeId(e, t) {
			e.setAttribute(t, '');
		},
		insertStaticContent(e, t, n, o, a, l) {
			const i = n ? n.previousSibling : t.lastChild;
			if (a && (a === l || a.nextSibling))
				for (
					;
					t.insertBefore(a.cloneNode(!0), n),
						!(a === l || !(a = a.nextSibling));

				);
			else {
				As.innerHTML =
					o === 'svg'
						? `<svg>${e}</svg>`
						: o === 'mathml'
							? `<math>${e}</math>`
							: e;
				const s = As.content;
				if (o === 'svg' || o === 'mathml') {
					const r = s.firstChild;
					for (; r.firstChild; ) s.appendChild(r.firstChild);
					s.removeChild(r);
				}
				t.insertBefore(s, n);
			}
			return [
				i ? i.nextSibling : t.firstChild,
				n ? n.previousSibling : t.lastChild,
			];
		},
	},
	xn = 'transition',
	Ho = 'animation',
	ba = Symbol('_vtc'),
	Mo = (e, { slots: t }) => Ir(wm, dv(e), t);
Mo.displayName = 'Transition';
const vd = {
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
Mo.props = qe({}, Yu, vd);
const qn = (e, t = []) => {
		ye(e) ? e.forEach(n => n(...t)) : e && e(...t);
	},
	Os = e => (e ? (ye(e) ? e.some(t => t.length > 1) : e.length > 1) : !1);
function dv(e) {
	const t = {};
	for (const P in e) P in vd || (t[P] = e[P]);
	if (e.css === !1) return t;
	const {
			name: n = 'v',
			type: o,
			duration: a,
			enterFromClass: l = `${n}-enter-from`,
			enterActiveClass: i = `${n}-enter-active`,
			enterToClass: s = `${n}-enter-to`,
			appearFromClass: r = l,
			appearActiveClass: c = i,
			appearToClass: u = s,
			leaveFromClass: h = `${n}-leave-from`,
			leaveActiveClass: f = `${n}-leave-active`,
			leaveToClass: m = `${n}-leave-to`,
		} = e,
		v = fv(a),
		y = v && v[0],
		g = v && v[1],
		{
			onBeforeEnter: w,
			onEnter: b,
			onEnterCancelled: C,
			onLeave: p,
			onLeaveCancelled: x,
			onBeforeAppear: T = w,
			onAppear: O = b,
			onAppearCancelled: S = C,
		} = t,
		A = (P, B, X) => {
			Gn(P, B ? u : s), Gn(P, B ? c : i), X && X();
		},
		I = (P, B) => {
			(P._isLeaving = !1), Gn(P, h), Gn(P, m), Gn(P, f), B && B();
		},
		k = P => (B, X) => {
			const V = P ? O : b,
				R = () => A(B, P, X);
			qn(V, [B, R]),
				Rs(() => {
					Gn(B, P ? r : l), Sn(B, P ? u : s), Os(V) || Bs(B, o, y, R);
				});
		};
	return qe(t, {
		onBeforeEnter(P) {
			qn(w, [P]), Sn(P, l), Sn(P, i);
		},
		onBeforeAppear(P) {
			qn(T, [P]), Sn(P, r), Sn(P, c);
		},
		onEnter: k(!1),
		onAppear: k(!0),
		onLeave(P, B) {
			P._isLeaving = !0;
			const X = () => I(P, B);
			Sn(P, h),
				Sn(P, f),
				vv(),
				Rs(() => {
					P._isLeaving && (Gn(P, h), Sn(P, m), Os(p) || Bs(P, o, g, X));
				}),
				qn(p, [P, X]);
		},
		onEnterCancelled(P) {
			A(P, !1), qn(C, [P]);
		},
		onAppearCancelled(P) {
			A(P, !0), qn(S, [P]);
		},
		onLeaveCancelled(P) {
			I(P), qn(x, [P]);
		},
	});
}
function fv(e) {
	if (e == null) return null;
	if (ze(e)) return [li(e.enter), li(e.leave)];
	{
		const t = li(e);
		return [t, t];
	}
}
function li(e) {
	return ph(e);
}
function Sn(e, t) {
	t.split(/\s+/).forEach(n => n && e.classList.add(n)),
		(e[ba] || (e[ba] = new Set())).add(t);
}
function Gn(e, t) {
	t.split(/\s+/).forEach(o => o && e.classList.remove(o));
	const n = e[ba];
	n && (n.delete(t), n.size || (e[ba] = void 0));
}
function Rs(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
let hv = 0;
function Bs(e, t, n, o) {
	const a = (e._endId = ++hv),
		l = () => {
			a === e._endId && o();
		};
	if (n) return setTimeout(l, n);
	const { type: i, timeout: s, propCount: r } = mv(e, t);
	if (!i) return o();
	const c = i + 'end';
	let u = 0;
	const h = () => {
			e.removeEventListener(c, f), l();
		},
		f = m => {
			m.target === e && ++u >= r && h();
		};
	setTimeout(() => {
		u < r && h();
	}, s + 1),
		e.addEventListener(c, f);
}
function mv(e, t) {
	const n = window.getComputedStyle(e),
		o = v => (n[v] || '').split(', '),
		a = o(`${xn}Delay`),
		l = o(`${xn}Duration`),
		i = Ds(a, l),
		s = o(`${Ho}Delay`),
		r = o(`${Ho}Duration`),
		c = Ds(s, r);
	let u = null,
		h = 0,
		f = 0;
	t === xn
		? i > 0 && ((u = xn), (h = i), (f = l.length))
		: t === Ho
			? c > 0 && ((u = Ho), (h = c), (f = r.length))
			: ((h = Math.max(i, c)),
				(u = h > 0 ? (i > c ? xn : Ho) : null),
				(f = u ? (u === xn ? l.length : r.length) : 0));
	const m =
		u === xn && /\b(transform|all)(,|$)/.test(o(`${xn}Property`).toString());
	return { type: u, timeout: h, propCount: f, hasTransform: m };
}
function Ds(e, t) {
	for (; e.length < t.length; ) e = e.concat(e);
	return Math.max(...t.map((n, o) => Ms(n) + Ms(e[o])));
}
function Ms(e) {
	return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function vv() {
	return document.body.offsetHeight;
}
function gv(e, t, n) {
	const o = e[ba];
	o && (t = (t ? [t, ...o] : [...o]).join(' ')),
		t == null
			? e.removeAttribute('class')
			: n
				? e.setAttribute('class', t)
				: (e.className = t);
}
const hl = Symbol('_vod'),
	gd = Symbol('_vsh'),
	nt = {
		beforeMount(e, { value: t }, { transition: n }) {
			(e[hl] = e.style.display === 'none' ? '' : e.style.display),
				n && t ? n.beforeEnter(e) : jo(e, t);
		},
		mounted(e, { value: t }, { transition: n }) {
			n && t && n.enter(e);
		},
		updated(e, { value: t, oldValue: n }, { transition: o }) {
			!t != !n &&
				(o
					? t
						? (o.beforeEnter(e), jo(e, !0), o.enter(e))
						: o.leave(e, () => {
								jo(e, !1);
							})
					: jo(e, t));
		},
		beforeUnmount(e, { value: t }) {
			jo(e, t);
		},
	};
function jo(e, t) {
	(e.style.display = t ? e[hl] : 'none'), (e[gd] = !t);
}
const bv = Symbol(''),
	yv = /(^|;)\s*display\s*:/;
function pv(e, t, n) {
	const o = e.style,
		a = je(n);
	let l = !1;
	if (n && !a) {
		if (t)
			if (je(t))
				for (const i of t.split(';')) {
					const s = i.slice(0, i.indexOf(':')).trim();
					n[s] == null && al(o, s, '');
				}
			else for (const i in t) n[i] == null && al(o, i, '');
		for (const i in n) i === 'display' && (l = !0), al(o, i, n[i]);
	} else if (a) {
		if (t !== n) {
			const i = o[bv];
			i && (n += ';' + i), (o.cssText = n), (l = yv.test(n));
		}
	} else t && e.removeAttribute('style');
	hl in e && ((e[hl] = l ? o.display : ''), e[gd] && (o.display = 'none'));
}
const Ls = /\s*!important$/;
function al(e, t, n) {
	if (ye(n)) n.forEach(o => al(e, t, o));
	else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
	else {
		const o = wv(e, t);
		Ls.test(n)
			? e.setProperty(Fn(o), n.replace(Ls, ''), 'important')
			: (e[o] = n);
	}
}
const Vs = ['Webkit', 'Moz', 'ms'],
	ii = {};
function wv(e, t) {
	const n = ii[t];
	if (n) return n;
	let o = Zt(t);
	if (o !== 'filter' && o in e) return (ii[t] = o);
	o = _l(o);
	for (let a = 0; a < Vs.length; a++) {
		const l = Vs[a] + o;
		if (l in e) return (ii[t] = l);
	}
	return t;
}
const Fs = 'http://www.w3.org/1999/xlink';
function xv(e, t, n, o, a) {
	if (o && t.startsWith('xlink:'))
		n == null
			? e.removeAttributeNS(Fs, t.slice(6, t.length))
			: e.setAttributeNS(Fs, t, n);
	else {
		const l = kh(t);
		n == null || (l && !bu(n))
			? e.removeAttribute(t)
			: e.setAttribute(t, l ? '' : n);
	}
}
function Sv(e, t, n, o, a, l, i) {
	if (t === 'innerHTML' || t === 'textContent') {
		o && i(o, a, l), (e[t] = n ?? '');
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
			? (n = bu(n))
			: n == null && c === 'string'
				? ((n = ''), (r = !0))
				: c === 'number' && ((n = 0), (r = !0));
	}
	try {
		e[t] = n;
	} catch {}
	r && e.removeAttribute(t);
}
function Cv(e, t, n, o) {
	e.addEventListener(t, n, o);
}
function Tv(e, t, n, o) {
	e.removeEventListener(t, n, o);
}
const Ns = Symbol('_vei');
function _v(e, t, n, o, a = null) {
	const l = e[Ns] || (e[Ns] = {}),
		i = l[t];
	if (o && i) i.value = o;
	else {
		const [s, r] = kv(t);
		if (o) {
			const c = (l[t] = $v(o, a));
			Cv(e, s, c, r);
		} else i && (Tv(e, s, i, r), (l[t] = void 0));
	}
}
const zs = /(?:Once|Passive|Capture)$/;
function kv(e) {
	let t;
	if (zs.test(e)) {
		t = {};
		let o;
		for (; (o = e.match(zs)); )
			(e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
	}
	return [e[2] === ':' ? e.slice(3) : Fn(e.slice(2)), t];
}
let ri = 0;
const Ev = Promise.resolve(),
	Pv = () => ri || (Ev.then(() => (ri = 0)), (ri = Date.now()));
function $v(e, t) {
	const n = o => {
		if (!o._vts) o._vts = Date.now();
		else if (o._vts <= n.attached) return;
		Ct(Iv(o, n.value), t, 5, [o]);
	};
	return (n.value = e), (n.attached = Pv()), n;
}
function Iv(e, t) {
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
const Hs = e =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		e.charCodeAt(2) > 96 &&
		e.charCodeAt(2) < 123,
	Av = (e, t, n, o, a, l, i, s, r) => {
		const c = a === 'svg';
		t === 'class'
			? gv(e, o, c)
			: t === 'style'
				? pv(e, n, o)
				: Sl(t)
					? fr(t) || _v(e, t, n, o, i)
					: (
								t[0] === '.'
									? ((t = t.slice(1)), !0)
									: t[0] === '^'
										? ((t = t.slice(1)), !1)
										: Ov(e, t, o, c)
						  )
						? Sv(e, t, o, l, i, s, r)
						: (t === 'true-value'
								? (e._trueValue = o)
								: t === 'false-value' && (e._falseValue = o),
							xv(e, t, o, c));
	};
function Ov(e, t, n, o) {
	if (o)
		return !!(
			t === 'innerHTML' ||
			t === 'textContent' ||
			(t in e && Hs(t) && Se(n))
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
	return Hs(t) && je(n) ? !1 : t in e;
}
const Rv = {
		esc: 'escape',
		space: ' ',
		up: 'arrow-up',
		left: 'arrow-left',
		right: 'arrow-right',
		down: 'arrow-down',
		delete: 'backspace',
	},
	Bv = (e, t) => {
		const n = e._withKeys || (e._withKeys = {}),
			o = t.join('.');
		return (
			n[o] ||
			(n[o] = a => {
				if (!('key' in a)) return;
				const l = Fn(a.key);
				if (t.some(i => i === l || Rv[i] === l)) return e(a);
			})
		);
	},
	Dv = qe({ patchProp: Av }, uv);
let js;
function Mv() {
	return js || (js = Nm(Dv));
}
const bd = (...e) => {
	const t = Mv().createApp(...e),
		{ mount: n } = t;
	return (
		(t.mount = o => {
			const a = Vv(o);
			if (!a) return;
			const l = t._component;
			!Se(l) && !l.render && !l.template && (l.template = a.innerHTML),
				(a.innerHTML = '');
			const i = n(a, !1, Lv(a));
			return (
				a instanceof Element &&
					(a.removeAttribute('v-cloak'), a.setAttribute('data-v-app', '')),
				i
			);
		}),
		t
	);
};
function Lv(e) {
	if (e instanceof SVGElement) return 'svg';
	if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
		return 'mathml';
}
function Vv(e) {
	return je(e) ? document.querySelector(e) : e;
}
const Fv = { name: 'App' },
	Nv = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [o, a] of t) n[o] = a;
		return n;
	};
function zv(e, t, n, o, a, l) {
	const i = ms('RouterView'),
		s = ms('van-config-provider');
	return Km(), Gm(s, { theme: 'light' }, { default: Hu(() => [d(i)]), _: 1 });
}
const Hv = Nv(Fv, [
	['render', zv],
	['__scopeId', 'data-v-669f4a6b'],
]);
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const So = typeof document < 'u';
function jv(e) {
	return e.__esModule || e[Symbol.toStringTag] === 'Module';
}
const Re = Object.assign;
function si(e, t) {
	const n = {};
	for (const o in t) {
		const a = t[o];
		n[o] = Vt(a) ? a.map(e) : e(a);
	}
	return n;
}
const ia = () => {},
	Vt = Array.isArray,
	yd = /#/g,
	Uv = /&/g,
	Wv = /\//g,
	Yv = /=/g,
	Kv = /\?/g,
	pd = /\+/g,
	qv = /%5B/g,
	Gv = /%5D/g,
	wd = /%5E/g,
	Xv = /%60/g,
	xd = /%7B/g,
	Zv = /%7C/g,
	Sd = /%7D/g,
	Jv = /%20/g;
function Ar(e) {
	return encodeURI('' + e)
		.replace(Zv, '|')
		.replace(qv, '[')
		.replace(Gv, ']');
}
function Qv(e) {
	return Ar(e).replace(xd, '{').replace(Sd, '}').replace(wd, '^');
}
function Wi(e) {
	return Ar(e)
		.replace(pd, '%2B')
		.replace(Jv, '+')
		.replace(yd, '%23')
		.replace(Uv, '%26')
		.replace(Xv, '`')
		.replace(xd, '{')
		.replace(Sd, '}')
		.replace(wd, '^');
}
function eg(e) {
	return Wi(e).replace(Yv, '%3D');
}
function tg(e) {
	return Ar(e).replace(yd, '%23').replace(Kv, '%3F');
}
function ng(e) {
	return e == null ? '' : tg(e).replace(Wv, '%2F');
}
function ya(e) {
	try {
		return decodeURIComponent('' + e);
	} catch {}
	return '' + e;
}
const og = /\/$/,
	ag = e => e.replace(og, '');
function ci(e, t, n = '/') {
	let o,
		a = {},
		l = '',
		i = '';
	const s = t.indexOf('#');
	let r = t.indexOf('?');
	return (
		s < r && s >= 0 && (r = -1),
		r > -1 &&
			((o = t.slice(0, r)),
			(l = t.slice(r + 1, s > -1 ? s : t.length)),
			(a = e(l))),
		s > -1 && ((o = o || t.slice(0, s)), (i = t.slice(s, t.length))),
		(o = sg(o ?? t, n)),
		{ fullPath: o + (l && '?') + l + i, path: o, query: a, hash: ya(i) }
	);
}
function lg(e, t) {
	const n = t.query ? e(t.query) : '';
	return t.path + (n && '?') + n + (t.hash || '');
}
function Us(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase())
		? e
		: e.slice(t.length) || '/';
}
function ig(e, t, n) {
	const o = t.matched.length - 1,
		a = n.matched.length - 1;
	return (
		o > -1 &&
		o === a &&
		$o(t.matched[o], n.matched[a]) &&
		Cd(t.params, n.params) &&
		e(t.query) === e(n.query) &&
		t.hash === n.hash
	);
}
function $o(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Cd(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (const n in e) if (!rg(e[n], t[n])) return !1;
	return !0;
}
function rg(e, t) {
	return Vt(e) ? Ws(e, t) : Vt(t) ? Ws(t, e) : e === t;
}
function Ws(e, t) {
	return Vt(t)
		? e.length === t.length && e.every((n, o) => n === t[o])
		: e.length === 1 && e[0] === t;
}
function sg(e, t) {
	if (e.startsWith('/')) return e;
	if (!e) return t;
	const n = t.split('/'),
		o = e.split('/'),
		a = o[o.length - 1];
	(a === '..' || a === '.') && o.push('');
	let l = n.length - 1,
		i,
		s;
	for (i = 0; i < o.length; i++)
		if (((s = o[i]), s !== '.'))
			if (s === '..') l > 1 && l--;
			else break;
	return n.slice(0, l).join('/') + '/' + o.slice(i).join('/');
}
var pa;
(function (e) {
	(e.pop = 'pop'), (e.push = 'push');
})(pa || (pa = {}));
var ra;
(function (e) {
	(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(ra || (ra = {}));
function cg(e) {
	if (!e)
		if (So) {
			const t = document.querySelector('base');
			(e = (t && t.getAttribute('href')) || '/'),
				(e = e.replace(/^\w+:\/\/[^\/]+/, ''));
		} else e = '/';
	return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), ag(e);
}
const ug = /^[^#]+#/;
function dg(e, t) {
	return e.replace(ug, '#') + t;
}
function fg(e, t) {
	const n = document.documentElement.getBoundingClientRect(),
		o = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: o.left - n.left - (t.left || 0),
		top: o.top - n.top - (t.top || 0),
	};
}
const Ml = () => ({ left: window.scrollX, top: window.scrollY });
function hg(e) {
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
		t = fg(a, e);
	} else t = e;
	'scrollBehavior' in document.documentElement.style
		? window.scrollTo(t)
		: window.scrollTo(
				t.left != null ? t.left : window.scrollX,
				t.top != null ? t.top : window.scrollY,
			);
}
function Ys(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
const Yi = new Map();
function mg(e, t) {
	Yi.set(e, t);
}
function vg(e) {
	const t = Yi.get(e);
	return Yi.delete(e), t;
}
let gg = () => location.protocol + '//' + location.host;
function Td(e, t) {
	const { pathname: n, search: o, hash: a } = t,
		l = e.indexOf('#');
	if (l > -1) {
		let s = a.includes(e.slice(l)) ? e.slice(l).length : 1,
			r = a.slice(s);
		return r[0] !== '/' && (r = '/' + r), Us(r, '');
	}
	return Us(n, e) + o + a;
}
function bg(e, t, n, o) {
	let a = [],
		l = [],
		i = null;
	const s = ({ state: f }) => {
		const m = Td(e, location),
			v = n.value,
			y = t.value;
		let g = 0;
		if (f) {
			if (((n.value = m), (t.value = f), i && i === v)) {
				i = null;
				return;
			}
			g = y ? f.position - y.position : 0;
		} else o(m);
		a.forEach(w => {
			w(n.value, v, {
				delta: g,
				type: pa.pop,
				direction: g ? (g > 0 ? ra.forward : ra.back) : ra.unknown,
			});
		});
	};
	function r() {
		i = n.value;
	}
	function c(f) {
		a.push(f);
		const m = () => {
			const v = a.indexOf(f);
			v > -1 && a.splice(v, 1);
		};
		return l.push(m), m;
	}
	function u() {
		const { history: f } = window;
		f.state && f.replaceState(Re({}, f.state, { scroll: Ml() }), '');
	}
	function h() {
		for (const f of l) f();
		(l = []),
			window.removeEventListener('popstate', s),
			window.removeEventListener('beforeunload', u);
	}
	return (
		window.addEventListener('popstate', s),
		window.addEventListener('beforeunload', u, { passive: !0 }),
		{ pauseListeners: r, listen: c, destroy: h }
	);
}
function Ks(e, t, n, o = !1, a = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: o,
		position: window.history.length,
		scroll: a ? Ml() : null,
	};
}
function yg(e) {
	const { history: t, location: n } = window,
		o = { value: Td(e, n) },
		a = { value: t.state };
	a.value ||
		l(
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
	function l(r, c, u) {
		const h = e.indexOf('#'),
			f =
				h > -1
					? (n.host && document.querySelector('base') ? e : e.slice(h)) + r
					: gg() + e + r;
		try {
			t[u ? 'replaceState' : 'pushState'](c, '', f), (a.value = c);
		} catch (m) {
			console.error(m), n[u ? 'replace' : 'assign'](f);
		}
	}
	function i(r, c) {
		const u = Re({}, t.state, Ks(a.value.back, r, a.value.forward, !0), c, {
			position: a.value.position,
		});
		l(r, u, !0), (o.value = r);
	}
	function s(r, c) {
		const u = Re({}, a.value, t.state, { forward: r, scroll: Ml() });
		l(u.current, u, !0);
		const h = Re({}, Ks(o.value, r, null), { position: u.position + 1 }, c);
		l(r, h, !1), (o.value = r);
	}
	return { location: o, state: a, push: s, replace: i };
}
function pg(e) {
	e = cg(e);
	const t = yg(e),
		n = bg(e, t.state, t.location, t.replace);
	function o(l, i = !0) {
		i || n.pauseListeners(), history.go(l);
	}
	const a = Re(
		{ location: '', base: e, go: o, createHref: dg.bind(null, e) },
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
function wg(e) {
	return typeof e == 'string' || (e && typeof e == 'object');
}
function _d(e) {
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
	kd = Symbol('');
var qs;
(function (e) {
	(e[(e.aborted = 4)] = 'aborted'),
		(e[(e.cancelled = 8)] = 'cancelled'),
		(e[(e.duplicated = 16)] = 'duplicated');
})(qs || (qs = {}));
function Io(e, t) {
	return Re(new Error(), { type: e, [kd]: !0 }, t);
}
function tn(e, t) {
	return e instanceof Error && kd in e && (t == null || !!(e.type & t));
}
const Gs = '[^/]+?',
	xg = { sensitive: !1, strict: !1, start: !0, end: !0 },
	Sg = /[.+*?^${}()[\]/\\]/g;
function Cg(e, t) {
	const n = Re({}, xg, t),
		o = [];
	let a = n.start ? '^' : '';
	const l = [];
	for (const c of e) {
		const u = c.length ? [] : [90];
		n.strict && !c.length && (a += '/');
		for (let h = 0; h < c.length; h++) {
			const f = c[h];
			let m = 40 + (n.sensitive ? 0.25 : 0);
			if (f.type === 0)
				h || (a += '/'), (a += f.value.replace(Sg, '\\$&')), (m += 40);
			else if (f.type === 1) {
				const { value: v, repeatable: y, optional: g, regexp: w } = f;
				l.push({ name: v, repeatable: y, optional: g });
				const b = w || Gs;
				if (b !== Gs) {
					m += 10;
					try {
						new RegExp(`(${b})`);
					} catch (p) {
						throw new Error(
							`Invalid custom RegExp for param "${v}" (${b}): ` + p.message,
						);
					}
				}
				let C = y ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
				h || (C = g && c.length < 2 ? `(?:/${C})` : '/' + C),
					g && (C += '?'),
					(a += C),
					(m += 20),
					g && (m += -8),
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
	const i = new RegExp(a, n.sensitive ? '' : 'i');
	function s(c) {
		const u = c.match(i),
			h = {};
		if (!u) return null;
		for (let f = 1; f < u.length; f++) {
			const m = u[f] || '',
				v = l[f - 1];
			h[v.name] = m && v.repeatable ? m.split('/') : m;
		}
		return h;
	}
	function r(c) {
		let u = '',
			h = !1;
		for (const f of e) {
			(!h || !u.endsWith('/')) && (u += '/'), (h = !1);
			for (const m of f)
				if (m.type === 0) u += m.value;
				else if (m.type === 1) {
					const { value: v, repeatable: y, optional: g } = m,
						w = v in c ? c[v] : '';
					if (Vt(w) && !y)
						throw new Error(
							`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`,
						);
					const b = Vt(w) ? w.join('/') : w;
					if (!b)
						if (g)
							f.length < 2 &&
								(u.endsWith('/') ? (u = u.slice(0, -1)) : (h = !0));
						else throw new Error(`Missing required param "${v}"`);
					u += b;
				}
		}
		return u || '/';
	}
	return { re: i, score: o, keys: l, parse: s, stringify: r };
}
function Tg(e, t) {
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
function _g(e, t) {
	let n = 0;
	const o = e.score,
		a = t.score;
	for (; n < o.length && n < a.length; ) {
		const l = Tg(o[n], a[n]);
		if (l) return l;
		n++;
	}
	if (Math.abs(a.length - o.length) === 1) {
		if (Xs(o)) return 1;
		if (Xs(a)) return -1;
	}
	return a.length - o.length;
}
function Xs(e) {
	const t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
const kg = { type: 0, value: '' },
	Eg = /[a-zA-Z0-9_]/;
function Pg(e) {
	if (!e) return [[]];
	if (e === '/') return [[kg]];
	if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
	function t(m) {
		throw new Error(`ERR (${n})/"${c}": ${m}`);
	}
	let n = 0,
		o = n;
	const a = [];
	let l;
	function i() {
		l && a.push(l), (l = []);
	}
	let s = 0,
		r,
		c = '',
		u = '';
	function h() {
		c &&
			(n === 0
				? l.push({ type: 0, value: c })
				: n === 1 || n === 2 || n === 3
					? (l.length > 1 &&
							(r === '*' || r === '+') &&
							t(
								`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`,
							),
						l.push({
							type: 1,
							value: c,
							regexp: u,
							repeatable: r === '*' || r === '+',
							optional: r === '*' || r === '?',
						}))
					: t('Invalid state to consume buffer'),
			(c = ''));
	}
	function f() {
		c += r;
	}
	for (; s < e.length; ) {
		if (((r = e[s++]), r === '\\' && n !== 2)) {
			(o = n), (n = 4);
			continue;
		}
		switch (n) {
			case 0:
				r === '/' ? (c && h(), i()) : r === ':' ? (h(), (n = 1)) : f();
				break;
			case 4:
				f(), (n = o);
				break;
			case 1:
				r === '('
					? (n = 2)
					: Eg.test(r)
						? f()
						: (h(), (n = 0), r !== '*' && r !== '?' && r !== '+' && s--);
				break;
			case 2:
				r === ')'
					? u[u.length - 1] == '\\'
						? (u = u.slice(0, -1) + r)
						: (n = 3)
					: (u += r);
				break;
			case 3:
				h(), (n = 0), r !== '*' && r !== '?' && r !== '+' && s--, (u = '');
				break;
			default:
				t('Unknown state');
				break;
		}
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), h(), i(), a;
}
function $g(e, t, n) {
	const o = Cg(Pg(e.path), n),
		a = Re(o, { record: e, parent: t, children: [], alias: [] });
	return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function Ig(e, t) {
	const n = [],
		o = new Map();
	t = Qs({ strict: !1, end: !0, sensitive: !1 }, t);
	function a(u) {
		return o.get(u);
	}
	function l(u, h, f) {
		const m = !f,
			v = Ag(u);
		v.aliasOf = f && f.record;
		const y = Qs(t, u),
			g = [v];
		if ('alias' in u) {
			const C = typeof u.alias == 'string' ? [u.alias] : u.alias;
			for (const p of C)
				g.push(
					Re({}, v, {
						components: f ? f.record.components : v.components,
						path: p,
						aliasOf: f ? f.record : v,
					}),
				);
		}
		let w, b;
		for (const C of g) {
			const { path: p } = C;
			if (h && p[0] !== '/') {
				const x = h.record.path,
					T = x[x.length - 1] === '/' ? '' : '/';
				C.path = h.record.path + (p && T + p);
			}
			if (
				((w = $g(C, h, y)),
				f
					? f.alias.push(w)
					: ((b = b || w),
						b !== w && b.alias.push(w),
						m && u.name && !Js(w) && i(u.name)),
				v.children)
			) {
				const x = v.children;
				for (let T = 0; T < x.length; T++) l(x[T], w, f && f.children[T]);
			}
			(f = f || w),
				((w.record.components && Object.keys(w.record.components).length) ||
					w.record.name ||
					w.record.redirect) &&
					r(w);
		}
		return b
			? () => {
					i(b);
				}
			: ia;
	}
	function i(u) {
		if (_d(u)) {
			const h = o.get(u);
			h &&
				(o.delete(u),
				n.splice(n.indexOf(h), 1),
				h.children.forEach(i),
				h.alias.forEach(i));
		} else {
			const h = n.indexOf(u);
			h > -1 &&
				(n.splice(h, 1),
				u.record.name && o.delete(u.record.name),
				u.children.forEach(i),
				u.alias.forEach(i));
		}
	}
	function s() {
		return n;
	}
	function r(u) {
		let h = 0;
		for (
			;
			h < n.length &&
			_g(u, n[h]) >= 0 &&
			(u.record.path !== n[h].record.path || !Ed(u, n[h]));

		)
			h++;
		n.splice(h, 0, u), u.record.name && !Js(u) && o.set(u.record.name, u);
	}
	function c(u, h) {
		let f,
			m = {},
			v,
			y;
		if ('name' in u && u.name) {
			if (((f = o.get(u.name)), !f)) throw Io(1, { location: u });
			(y = f.record.name),
				(m = Re(
					Zs(
						h.params,
						f.keys
							.filter(b => !b.optional)
							.concat(f.parent ? f.parent.keys.filter(b => b.optional) : [])
							.map(b => b.name),
					),
					u.params &&
						Zs(
							u.params,
							f.keys.map(b => b.name),
						),
				)),
				(v = f.stringify(m));
		} else if (u.path != null)
			(v = u.path),
				(f = n.find(b => b.re.test(v))),
				f && ((m = f.parse(v)), (y = f.record.name));
		else {
			if (((f = h.name ? o.get(h.name) : n.find(b => b.re.test(h.path))), !f))
				throw Io(1, { location: u, currentLocation: h });
			(y = f.record.name),
				(m = Re({}, h.params, u.params)),
				(v = f.stringify(m));
		}
		const g = [];
		let w = f;
		for (; w; ) g.unshift(w.record), (w = w.parent);
		return { name: y, path: v, params: m, matched: g, meta: Rg(g) };
	}
	return (
		e.forEach(u => l(u)),
		{
			addRoute: l,
			resolve: c,
			removeRoute: i,
			getRoutes: s,
			getRecordMatcher: a,
		}
	);
}
function Zs(e, t) {
	const n = {};
	for (const o of t) o in e && (n[o] = e[o]);
	return n;
}
function Ag(e) {
	return {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: void 0,
		beforeEnter: e.beforeEnter,
		props: Og(e),
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
function Og(e) {
	const t = {},
		n = e.props || !1;
	if ('component' in e) t.default = n;
	else for (const o in e.components) t[o] = typeof n == 'object' ? n[o] : n;
	return t;
}
function Js(e) {
	for (; e; ) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Rg(e) {
	return e.reduce((t, n) => Re(t, n.meta), {});
}
function Qs(e, t) {
	const n = {};
	for (const o in e) n[o] = o in t ? t[o] : e[o];
	return n;
}
function Ed(e, t) {
	return t.children.some(n => n === e || Ed(e, n));
}
function Bg(e) {
	const t = {};
	if (e === '' || e === '?') return t;
	const o = (e[0] === '?' ? e.slice(1) : e).split('&');
	for (let a = 0; a < o.length; ++a) {
		const l = o[a].replace(pd, ' '),
			i = l.indexOf('='),
			s = ya(i < 0 ? l : l.slice(0, i)),
			r = i < 0 ? null : ya(l.slice(i + 1));
		if (s in t) {
			let c = t[s];
			Vt(c) || (c = t[s] = [c]), c.push(r);
		} else t[s] = r;
	}
	return t;
}
function ec(e) {
	let t = '';
	for (let n in e) {
		const o = e[n];
		if (((n = eg(n)), o == null)) {
			o !== void 0 && (t += (t.length ? '&' : '') + n);
			continue;
		}
		(Vt(o) ? o.map(l => l && Wi(l)) : [o && Wi(o)]).forEach(l => {
			l !== void 0 &&
				((t += (t.length ? '&' : '') + n), l != null && (t += '=' + l));
		});
	}
	return t;
}
function Dg(e) {
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
const Mg = Symbol(''),
	tc = Symbol(''),
	Or = Symbol(''),
	Pd = Symbol(''),
	Ki = Symbol('');
function Uo() {
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
function Rn(e, t, n, o, a, l = i => i()) {
	const i = o && (o.enterCallbacks[a] = o.enterCallbacks[a] || []);
	return () =>
		new Promise((s, r) => {
			const c = f => {
					f === !1
						? r(Io(4, { from: n, to: t }))
						: f instanceof Error
							? r(f)
							: wg(f)
								? r(Io(2, { from: t, to: f }))
								: (i &&
										o.enterCallbacks[a] === i &&
										typeof f == 'function' &&
										i.push(f),
									s());
				},
				u = l(() => e.call(o && o.instances[a], t, n, c));
			let h = Promise.resolve(u);
			e.length < 3 && (h = h.then(c)), h.catch(f => r(f));
		});
}
function ui(e, t, n, o, a = l => l()) {
	const l = [];
	for (const i of e)
		for (const s in i.components) {
			let r = i.components[s];
			if (!(t !== 'beforeRouteEnter' && !i.instances[s]))
				if (Lg(r)) {
					const u = (r.__vccOpts || r)[t];
					u && l.push(Rn(u, n, o, i, s, a));
				} else {
					let c = r();
					l.push(() =>
						c.then(u => {
							if (!u)
								return Promise.reject(
									new Error(`Couldn't resolve component "${s}" at "${i.path}"`),
								);
							const h = jv(u) ? u.default : u;
							i.components[s] = h;
							const m = (h.__vccOpts || h)[t];
							return m && Rn(m, n, o, i, s, a)();
						}),
					);
				}
		}
	return l;
}
function Lg(e) {
	return (
		typeof e == 'object' ||
		'displayName' in e ||
		'props' in e ||
		'__vccOpts' in e
	);
}
function nc(e) {
	const t = mt(Or),
		n = mt(Pd),
		o = L(() => {
			const r = Bt(e.to);
			return t.resolve(r);
		}),
		a = L(() => {
			const { matched: r } = o.value,
				{ length: c } = r,
				u = r[c - 1],
				h = n.matched;
			if (!u || !h.length) return -1;
			const f = h.findIndex($o.bind(null, u));
			if (f > -1) return f;
			const m = oc(r[c - 2]);
			return c > 1 && oc(u) === m && h[h.length - 1].path !== m
				? h.findIndex($o.bind(null, r[c - 2]))
				: f;
		}),
		l = L(() => a.value > -1 && zg(n.params, o.value.params)),
		i = L(
			() =>
				a.value > -1 &&
				a.value === n.matched.length - 1 &&
				Cd(n.params, o.value.params),
		);
	function s(r = {}) {
		return Ng(r)
			? t[Bt(e.replace) ? 'replace' : 'push'](Bt(e.to)).catch(ia)
			: Promise.resolve();
	}
	return {
		route: o,
		href: L(() => o.value.href),
		isActive: l,
		isExactActive: i,
		navigate: s,
	};
}
const Vg = j({
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
		useLink: nc,
		setup(e, { slots: t }) {
			const n = He(nc(e)),
				{ options: o } = mt(Or),
				a = L(() => ({
					[ac(e.activeClass, o.linkActiveClass, 'router-link-active')]:
						n.isActive,
					[ac(
						e.exactActiveClass,
						o.linkExactActiveClass,
						'router-link-exact-active',
					)]: n.isExactActive,
				}));
			return () => {
				const l = t.default && t.default(n);
				return e.custom
					? l
					: Ir(
							'a',
							{
								'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
								href: n.href,
								onClick: n.navigate,
								class: a.value,
							},
							l,
						);
			};
		},
	}),
	Fg = Vg;
function Ng(e) {
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
function zg(e, t) {
	for (const n in t) {
		const o = t[n],
			a = e[n];
		if (typeof o == 'string') {
			if (o !== a) return !1;
		} else if (!Vt(a) || a.length !== o.length || o.some((l, i) => l !== a[i]))
			return !1;
	}
	return !0;
}
function oc(e) {
	return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const ac = (e, t, n) => e ?? t ?? n,
	Hg = j({
		name: 'RouterView',
		inheritAttrs: !1,
		props: { name: { type: String, default: 'default' }, route: Object },
		compatConfig: { MODE: 3 },
		setup(e, { attrs: t, slots: n }) {
			const o = mt(Ki),
				a = L(() => e.route || o.value),
				l = mt(tc, 0),
				i = L(() => {
					let c = Bt(l);
					const { matched: u } = a.value;
					let h;
					for (; (h = u[c]) && !h.components; ) c++;
					return c;
				}),
				s = L(() => a.value.matched[i.value]);
			cn(
				tc,
				L(() => i.value + 1),
			),
				cn(Mg, s),
				cn(Ki, a);
			const r = D();
			return (
				ee(
					() => [r.value, s.value, e.name],
					([c, u, h], [f, m, v]) => {
						u &&
							((u.instances[h] = c),
							m &&
								m !== u &&
								c &&
								c === f &&
								(u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
								u.updateGuards.size || (u.updateGuards = m.updateGuards))),
							c &&
								u &&
								(!m || !$o(u, m) || !f) &&
								(u.enterCallbacks[h] || []).forEach(y => y(c));
					},
					{ flush: 'post' },
				),
				() => {
					const c = a.value,
						u = e.name,
						h = s.value,
						f = h && h.components[u];
					if (!f) return lc(n.default, { Component: f, route: c });
					const m = h.props[u],
						v = m
							? m === !0
								? c.params
								: typeof m == 'function'
									? m(c)
									: m
							: null,
						g = Ir(
							f,
							Re({}, v, t, {
								onVnodeUnmounted: w => {
									w.component.isUnmounted && (h.instances[u] = null);
								},
								ref: r,
							}),
						);
					return lc(n.default, { Component: g, route: c }) || g;
				}
			);
		},
	});
function lc(e, t) {
	if (!e) return null;
	const n = e(t);
	return n.length === 1 ? n[0] : n;
}
const jg = Hg;
function Ug(e) {
	const t = Ig(e.routes, e),
		n = e.parseQuery || Bg,
		o = e.stringifyQuery || ec,
		a = e.history,
		l = Uo(),
		i = Uo(),
		s = Uo(),
		r = Zh(Cn);
	let c = Cn;
	So &&
		e.scrollBehavior &&
		'scrollRestoration' in history &&
		(history.scrollRestoration = 'manual');
	const u = si.bind(null, E => '' + E),
		h = si.bind(null, ng),
		f = si.bind(null, ya);
	function m(E, H) {
		let F, Q;
		return (
			_d(E) ? ((F = t.getRecordMatcher(E)), (Q = H)) : (Q = E), t.addRoute(Q, F)
		);
	}
	function v(E) {
		const H = t.getRecordMatcher(E);
		H && t.removeRoute(H);
	}
	function y() {
		return t.getRoutes().map(E => E.record);
	}
	function g(E) {
		return !!t.getRecordMatcher(E);
	}
	function w(E, H) {
		if (((H = Re({}, H || r.value)), typeof E == 'string')) {
			const $ = ci(n, E, H.path),
				M = t.resolve({ path: $.path }, H),
				K = a.createHref($.fullPath);
			return Re($, M, {
				params: f(M.params),
				hash: ya($.hash),
				redirectedFrom: void 0,
				href: K,
			});
		}
		let F;
		if (E.path != null) F = Re({}, E, { path: ci(n, E.path, H.path).path });
		else {
			const $ = Re({}, E.params);
			for (const M in $) $[M] == null && delete $[M];
			(F = Re({}, E, { params: h($) })), (H.params = h(H.params));
		}
		const Q = t.resolve(F, H),
			de = E.hash || '';
		Q.params = u(f(Q.params));
		const xe = lg(o, Re({}, E, { hash: Qv(de), path: Q.path })),
			_ = a.createHref(xe);
		return Re(
			{ fullPath: xe, hash: de, query: o === ec ? Dg(E.query) : E.query || {} },
			Q,
			{ redirectedFrom: void 0, href: _ },
		);
	}
	function b(E) {
		return typeof E == 'string' ? ci(n, E, r.value.path) : Re({}, E);
	}
	function C(E, H) {
		if (c !== E) return Io(8, { from: H, to: E });
	}
	function p(E) {
		return O(E);
	}
	function x(E) {
		return p(Re(b(E), { replace: !0 }));
	}
	function T(E) {
		const H = E.matched[E.matched.length - 1];
		if (H && H.redirect) {
			const { redirect: F } = H;
			let Q = typeof F == 'function' ? F(E) : F;
			return (
				typeof Q == 'string' &&
					((Q = Q.includes('?') || Q.includes('#') ? (Q = b(Q)) : { path: Q }),
					(Q.params = {})),
				Re(
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
	function O(E, H) {
		const F = (c = w(E)),
			Q = r.value,
			de = E.state,
			xe = E.force,
			_ = E.replace === !0,
			$ = T(F);
		if ($)
			return O(
				Re(b($), {
					state: typeof $ == 'object' ? Re({}, de, $.state) : de,
					force: xe,
					replace: _,
				}),
				H || F,
			);
		const M = F;
		M.redirectedFrom = H;
		let K;
		return (
			!xe &&
				ig(o, Q, F) &&
				((K = Io(16, { to: M, from: Q })), ne(Q, Q, !0, !1)),
			(K ? Promise.resolve(K) : I(M, Q))
				.catch(U => (tn(U) ? (tn(U, 2) ? U : ge(U)) : Y(U, M, Q)))
				.then(U => {
					if (U) {
						if (tn(U, 2))
							return O(
								Re({ replace: _ }, b(U.to), {
									state: typeof U.to == 'object' ? Re({}, de, U.to.state) : de,
									force: xe,
								}),
								H || M,
							);
					} else U = P(M, Q, !0, _, de);
					return k(M, Q, U), U;
				})
		);
	}
	function S(E, H) {
		const F = C(E, H);
		return F ? Promise.reject(F) : Promise.resolve();
	}
	function A(E) {
		const H = De.values().next().value;
		return H && typeof H.runWithContext == 'function'
			? H.runWithContext(E)
			: E();
	}
	function I(E, H) {
		let F;
		const [Q, de, xe] = Wg(E, H);
		F = ui(Q.reverse(), 'beforeRouteLeave', E, H);
		for (const $ of Q)
			$.leaveGuards.forEach(M => {
				F.push(Rn(M, E, H));
			});
		const _ = S.bind(null, E, H);
		return (
			F.push(_),
			ue(F)
				.then(() => {
					F = [];
					for (const $ of l.list()) F.push(Rn($, E, H));
					return F.push(_), ue(F);
				})
				.then(() => {
					F = ui(de, 'beforeRouteUpdate', E, H);
					for (const $ of de)
						$.updateGuards.forEach(M => {
							F.push(Rn(M, E, H));
						});
					return F.push(_), ue(F);
				})
				.then(() => {
					F = [];
					for (const $ of xe)
						if ($.beforeEnter)
							if (Vt($.beforeEnter))
								for (const M of $.beforeEnter) F.push(Rn(M, E, H));
							else F.push(Rn($.beforeEnter, E, H));
					return F.push(_), ue(F);
				})
				.then(
					() => (
						E.matched.forEach($ => ($.enterCallbacks = {})),
						(F = ui(xe, 'beforeRouteEnter', E, H, A)),
						F.push(_),
						ue(F)
					),
				)
				.then(() => {
					F = [];
					for (const $ of i.list()) F.push(Rn($, E, H));
					return F.push(_), ue(F);
				})
				.catch($ => (tn($, 8) ? $ : Promise.reject($)))
		);
	}
	function k(E, H, F) {
		s.list().forEach(Q => A(() => Q(E, H, F)));
	}
	function P(E, H, F, Q, de) {
		const xe = C(E, H);
		if (xe) return xe;
		const _ = H === Cn,
			$ = So ? history.state : {};
		F &&
			(Q || _
				? a.replace(E.fullPath, Re({ scroll: _ && $ && $.scroll }, de))
				: a.push(E.fullPath, de)),
			(r.value = E),
			ne(E, H, F, _),
			ge();
	}
	let B;
	function X() {
		B ||
			(B = a.listen((E, H, F) => {
				if (!re.listening) return;
				const Q = w(E),
					de = T(Q);
				if (de) {
					O(Re(de, { replace: !0 }), Q).catch(ia);
					return;
				}
				c = Q;
				const xe = r.value;
				So && mg(Ys(xe.fullPath, F.delta), Ml()),
					I(Q, xe)
						.catch(_ =>
							tn(_, 12)
								? _
								: tn(_, 2)
									? (O(_.to, Q)
											.then($ => {
												tn($, 20) &&
													!F.delta &&
													F.type === pa.pop &&
													a.go(-1, !1);
											})
											.catch(ia),
										Promise.reject())
									: (F.delta && a.go(-F.delta, !1), Y(_, Q, xe)),
						)
						.then(_ => {
							(_ = _ || P(Q, xe, !1)),
								_ &&
									(F.delta && !tn(_, 8)
										? a.go(-F.delta, !1)
										: F.type === pa.pop && tn(_, 20) && a.go(-1, !1)),
								k(Q, xe, _);
						})
						.catch(ia);
			}));
	}
	let V = Uo(),
		R = Uo(),
		N;
	function Y(E, H, F) {
		ge(E);
		const Q = R.list();
		return (
			Q.length ? Q.forEach(de => de(E, H, F)) : console.error(E),
			Promise.reject(E)
		);
	}
	function me() {
		return N && r.value !== Cn
			? Promise.resolve()
			: new Promise((E, H) => {
					V.add([E, H]);
				});
	}
	function ge(E) {
		return (
			N ||
				((N = !E),
				X(),
				V.list().forEach(([H, F]) => (E ? F(E) : H())),
				V.reset()),
			E
		);
	}
	function ne(E, H, F, Q) {
		const { scrollBehavior: de } = e;
		if (!So || !de) return Promise.resolve();
		const xe =
			(!F && vg(Ys(E.fullPath, 0))) ||
			((Q || !F) && history.state && history.state.scroll) ||
			null;
		return Te()
			.then(() => de(E, H, xe))
			.then(_ => _ && hg(_))
			.catch(_ => Y(_, E, H));
	}
	const se = E => a.go(E);
	let be;
	const De = new Set(),
		re = {
			currentRoute: r,
			listening: !0,
			addRoute: m,
			removeRoute: v,
			hasRoute: g,
			getRoutes: y,
			resolve: w,
			options: e,
			push: p,
			replace: x,
			go: se,
			back: () => se(-1),
			forward: () => se(1),
			beforeEach: l.add,
			beforeResolve: i.add,
			afterEach: s.add,
			onError: R.add,
			isReady: me,
			install(E) {
				const H = this;
				E.component('RouterLink', Fg),
					E.component('RouterView', jg),
					(E.config.globalProperties.$router = H),
					Object.defineProperty(E.config.globalProperties, '$route', {
						enumerable: !0,
						get: () => Bt(r),
					}),
					So &&
						!be &&
						r.value === Cn &&
						((be = !0), p(a.location).catch(de => {}));
				const F = {};
				for (const de in Cn)
					Object.defineProperty(F, de, {
						get: () => r.value[de],
						enumerable: !0,
					});
				E.provide(Or, H), E.provide(Pd, Iu(F)), E.provide(Ki, r);
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
								(N = !1)),
							Q();
					});
			},
		};
	function ue(E) {
		return E.reduce((H, F) => H.then(() => A(F)), Promise.resolve());
	}
	return re;
}
function Wg(e, t) {
	const n = [],
		o = [],
		a = [],
		l = Math.max(t.matched.length, e.matched.length);
	for (let i = 0; i < l; i++) {
		const s = t.matched[i];
		s && (e.matched.find(c => $o(c, s)) ? o.push(s) : n.push(s));
		const r = e.matched[i];
		r && (t.matched.find(c => $o(c, r)) || a.push(r));
	}
	return [n, o, a];
}
const Yg = 'modulepreload',
	Kg = function (e, t) {
		return new URL(e, t).href;
	},
	ic = {},
	sa = function (t, n, o) {
		let a = Promise.resolve();
		if (n && n.length > 0) {
			const l = document.getElementsByTagName('link'),
				i = document.querySelector('meta[property=csp-nonce]'),
				s =
					(i == null ? void 0 : i.nonce) ||
					(i == null ? void 0 : i.getAttribute('nonce'));
			a = Promise.all(
				n.map(r => {
					if (((r = Kg(r, o)), r in ic)) return;
					ic[r] = !0;
					const c = r.endsWith('.css'),
						u = c ? '[rel="stylesheet"]' : '';
					if (!!o)
						for (let m = l.length - 1; m >= 0; m--) {
							const v = l[m];
							if (v.href === r && (!c || v.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${r}"]${u}`)) return;
					const f = document.createElement('link');
					if (
						((f.rel = c ? 'stylesheet' : Yg),
						c || ((f.as = 'script'), (f.crossOrigin = '')),
						(f.href = r),
						s && f.setAttribute('nonce', s),
						document.head.appendChild(f),
						c)
					)
						return new Promise((m, v) => {
							f.addEventListener('load', m),
								f.addEventListener('error', () =>
									v(new Error(`Unable to preload CSS for ${r}`)),
								);
						});
				}),
			);
		}
		return a
			.then(() => t())
			.catch(l => {
				const i = new Event('vite:preloadError', { cancelable: !0 });
				if (((i.payload = l), window.dispatchEvent(i), !i.defaultPrevented))
					throw l;
			});
	},
	qg = [
		{
			path: '/',
			component: () =>
				sa(
					() => import('./index-BJxLAT_4.js'),
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
						sa(
							() => import('./index-Brq9-kFQ.js'),
							__vite__mapDeps([2, 3]),
							import.meta.url,
						),
				},
				{
					path: '/acceptance/create',
					name: 'acceptanceCreate',
					component: () =>
						sa(
							() => import('./create-D-It00Ky.js'),
							__vite__mapDeps([4, 5]),
							import.meta.url,
						),
				},
			],
		},
	],
	Gg = [
		{
			path: '/login',
			name: 'login',
			component: () =>
				sa(
					() => import('./index-DOIFeQ5E.js'),
					__vite__mapDeps([6, 7]),
					import.meta.url,
				),
			meta: { title: '登录' },
		},
	],
	Xg = [
		{
			path: '/:path(.*)*',
			component: () =>
				sa(() => import('./404-_y1ntk7a.js'), [], import.meta.url),
		},
	],
	rc = {
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
var Zg =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
			? window
			: typeof global < 'u'
				? global
				: typeof self < 'u'
					? self
					: {};
function Jg(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var $d = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ (function (e, t) {
	(function (n, o) {
		e.exports = o();
	})(Zg, function () {
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
		(n.configure = function (v) {
			var y, g;
			for (y in v)
				(g = v[y]), g !== void 0 && v.hasOwnProperty(y) && (o[y] = g);
			return this;
		}),
			(n.status = null),
			(n.set = function (v) {
				var y = n.isStarted();
				(v = a(v, o.minimum, 1)), (n.status = v === 1 ? null : v);
				var g = n.render(!y),
					w = g.querySelector(o.barSelector),
					b = o.speed,
					C = o.easing;
				return (
					g.offsetWidth,
					s(function (p) {
						o.positionUsing === '' && (o.positionUsing = n.getPositioningCSS()),
							r(w, i(v, b, C)),
							v === 1
								? (r(g, { transition: 'none', opacity: 1 }),
									g.offsetWidth,
									setTimeout(function () {
										r(g, { transition: 'all ' + b + 'ms linear', opacity: 0 }),
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
				var v = function () {
					setTimeout(function () {
						n.status && (n.trickle(), v());
					}, o.trickleSpeed);
				};
				return o.trickle && v(), this;
			}),
			(n.done = function (v) {
				return !v && !n.status ? this : n.inc(0.3 + 0.5 * Math.random()).set(1);
			}),
			(n.inc = function (v) {
				var y = n.status;
				return y
					? (typeof v != 'number' &&
							(v = (1 - y) * a(Math.random() * y, 0.1, 0.95)),
						(y = a(y + v, 0, 0.994)),
						n.set(y))
					: n.start();
			}),
			(n.trickle = function () {
				return n.inc(Math.random() * o.trickleRate);
			}),
			(function () {
				var v = 0,
					y = 0;
				n.promise = function (g) {
					return !g || g.state() === 'resolved'
						? this
						: (y === 0 && n.start(),
							v++,
							y++,
							g.always(function () {
								y--, y === 0 ? ((v = 0), n.done()) : n.set((v - y) / v);
							}),
							this);
				};
			})(),
			(n.render = function (v) {
				if (n.isRendered()) return document.getElementById('nprogress');
				u(document.documentElement, 'nprogress-busy');
				var y = document.createElement('div');
				(y.id = 'nprogress'), (y.innerHTML = o.template);
				var g = y.querySelector(o.barSelector),
					w = v ? '-100' : l(n.status || 0),
					b = document.querySelector(o.parent),
					C;
				return (
					r(g, {
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
				h(document.documentElement, 'nprogress-busy'),
					h(document.querySelector(o.parent), 'nprogress-custom-parent');
				var v = document.getElementById('nprogress');
				v && m(v);
			}),
			(n.isRendered = function () {
				return !!document.getElementById('nprogress');
			}),
			(n.getPositioningCSS = function () {
				var v = document.body.style,
					y =
						'WebkitTransform' in v
							? 'Webkit'
							: 'MozTransform' in v
								? 'Moz'
								: 'msTransform' in v
									? 'ms'
									: 'OTransform' in v
										? 'O'
										: '';
				return y + 'Perspective' in v
					? 'translate3d'
					: y + 'Transform' in v
						? 'translate'
						: 'margin';
			});
		function a(v, y, g) {
			return v < y ? y : v > g ? g : v;
		}
		function l(v) {
			return (-1 + v) * 100;
		}
		function i(v, y, g) {
			var w;
			return (
				o.positionUsing === 'translate3d'
					? (w = { transform: 'translate3d(' + l(v) + '%,0,0)' })
					: o.positionUsing === 'translate'
						? (w = { transform: 'translate(' + l(v) + '%,0)' })
						: (w = { 'margin-left': l(v) + '%' }),
				(w.transition = 'all ' + y + 'ms ' + g),
				w
			);
		}
		var s = (function () {
				var v = [];
				function y() {
					var g = v.shift();
					g && g(y);
				}
				return function (g) {
					v.push(g), v.length == 1 && y();
				};
			})(),
			r = (function () {
				var v = ['Webkit', 'O', 'Moz', 'ms'],
					y = {};
				function g(p) {
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
						var T = v.length, O = p.charAt(0).toUpperCase() + p.slice(1), S;
						T--;

					)
						if (((S = v[T] + O), S in x)) return S;
					return p;
				}
				function b(p) {
					return (p = g(p)), y[p] || (y[p] = w(p));
				}
				function C(p, x, T) {
					(x = b(x)), (p.style[x] = T);
				}
				return function (p, x) {
					var T = arguments,
						O,
						S;
					if (T.length == 2)
						for (O in x)
							(S = x[O]), S !== void 0 && x.hasOwnProperty(O) && C(p, O, S);
					else C(p, T[1], T[2]);
				};
			})();
		function c(v, y) {
			var g = typeof v == 'string' ? v : f(v);
			return g.indexOf(' ' + y + ' ') >= 0;
		}
		function u(v, y) {
			var g = f(v),
				w = g + y;
			c(g, y) || (v.className = w.substring(1));
		}
		function h(v, y) {
			var g = f(v),
				w;
			c(v, y) &&
				((w = g.replace(' ' + y + ' ', ' ')),
				(v.className = w.substring(1, w.length - 1)));
		}
		function f(v) {
			return (' ' + (v.className || '') + ' ').replace(/\s+/gi, ' ');
		}
		function m(v) {
			v && v.parentNode && v.parentNode.removeChild(v);
		}
		return n;
	});
})($d);
var Qg = $d.exports;
const Wo = Jg(Qg),
	Id = Ug({ history: pg(), routes: [...Gg, ...qg, ...Xg] });
Id.beforeEach(async (e, t, n) => {
	Wo.start();
	const o = rc.get('token');
	e.path === '/login' && !o
		? (n(), Wo.done())
		: o
			? o && e.path === '/login'
				? (n('/'), Wo.done())
				: (n(), Wo.done())
			: (n(`/login?redirect=${e.path}`), rc.clear(), Wo.done());
});
function qi() {}
const he = Object.assign,
	_t = typeof window < 'u',
	fn = e => e !== null && typeof e == 'object',
	Pe = e => e != null,
	Ao = e => typeof e == 'function',
	Rr = e => fn(e) && Ao(e.then) && Ao(e.catch),
	wa = e =>
		Object.prototype.toString.call(e) === '[object Date]' &&
		!Number.isNaN(e.getTime());
function Ad(e) {
	return (
		(e = e.replace(/[^-|\d]/g, '')),
		/^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
	);
}
const Od = e => typeof e == 'number' || /^\d+(\.\d+)?$/.test(e),
	eb = () =>
		_t ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function sc(e, t) {
	const n = t.split('.');
	let o = e;
	return (
		n.forEach(a => {
			var l;
			o = fn(o) && (l = o[a]) != null ? l : '';
		}),
		o
	);
}
function Ie(e, t, n) {
	return t.reduce((o, a) => ((!n || e[a] !== void 0) && (o[a] = e[a]), o), {});
}
const Xt = (e, t) => JSON.stringify(e) === JSON.stringify(t),
	ml = e => (Array.isArray(e) ? e : [e]),
	tb = e => e.reduce((t, n) => t.concat(n), []),
	Ne = null,
	q = [Number, String],
	z = { type: Boolean, default: !0 },
	Ye = e => ({ type: e, required: !0 }),
	Ve = () => ({ type: Array, default: () => [] }),
	Ke = e => ({ type: Number, default: e }),
	le = e => ({ type: q, default: e }),
	Z = e => ({ type: String, default: e });
var Hn = typeof window < 'u';
function lt(e) {
	return Hn ? requestAnimationFrame(e) : -1;
}
function Ll(e) {
	Hn && cancelAnimationFrame(e);
}
function Bn(e) {
	lt(() => lt(e));
}
var nb = e => e === window,
	cc = (e, t) => ({
		top: 0,
		left: 0,
		right: e,
		bottom: t,
		width: e,
		height: t,
	}),
	Ae = e => {
		const t = Bt(e);
		if (nb(t)) {
			const n = t.innerWidth,
				o = t.innerHeight;
			return cc(n, o);
		}
		return t != null && t.getBoundingClientRect
			? t.getBoundingClientRect()
			: cc(0, 0);
	};
function ob(e = !1) {
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
		const n = Ft(),
			{ link: o, unlink: a, internalChildren: l } = t;
		o(n), Bo(() => a(n));
		const i = L(() => l.indexOf(n));
		return { parent: t, index: i };
	}
	return { parent: null, index: D(-1) };
}
function ab(e) {
	const t = [],
		n = o => {
			Array.isArray(o) &&
				o.forEach(a => {
					var l;
					dl(a) &&
						(t.push(a),
						(l = a.component) != null &&
							l.subTree &&
							(t.push(a.component.subTree), n(a.component.subTree.children)),
						a.children && n(a.children));
				});
		};
	return n(e), t;
}
var uc = (e, t) => {
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
function lb(e, t, n) {
	const o = ab(e.subTree.children);
	n.sort((l, i) => uc(o, l.vnode) - uc(o, i.vnode));
	const a = n.map(l => l.proxy);
	t.sort((l, i) => {
		const s = a.indexOf(l),
			r = a.indexOf(i);
		return s - r;
	});
}
function rt(e) {
	const t = He([]),
		n = He([]),
		o = Ft();
	return {
		children: t,
		linkChildren: l => {
			cn(
				e,
				Object.assign(
					{
						link: r => {
							r.proxy && (n.push(r), t.push(r.proxy), lb(o, t, n));
						},
						unlink: r => {
							const c = n.indexOf(r);
							t.splice(c, 1), n.splice(c, 1);
						},
						children: t,
						internalChildren: n,
					},
					l,
				),
			);
		},
	};
}
var Gi = 1e3,
	Xi = 60 * Gi,
	Zi = 60 * Xi,
	dc = 24 * Zi;
function ib(e) {
	const t = Math.floor(e / dc),
		n = Math.floor((e % dc) / Zi),
		o = Math.floor((e % Zi) / Xi),
		a = Math.floor((e % Xi) / Gi),
		l = Math.floor(e % Gi);
	return {
		total: e,
		days: t,
		hours: n,
		minutes: o,
		seconds: a,
		milliseconds: l,
	};
}
function rb(e, t) {
	return Math.floor(e / 1e3) === Math.floor(t / 1e3);
}
function sb(e) {
	let t, n, o, a;
	const l = D(e.time),
		i = L(() => ib(l.value)),
		s = () => {
			(o = !1), Ll(t);
		},
		r = () => Math.max(n - Date.now(), 0),
		c = y => {
			var g, w;
			(l.value = y),
				(g = e.onChange) == null || g.call(e, i.value),
				y === 0 && (s(), (w = e.onFinish) == null || w.call(e));
		},
		u = () => {
			t = lt(() => {
				o && (c(r()), l.value > 0 && u());
			});
		},
		h = () => {
			t = lt(() => {
				if (o) {
					const y = r();
					(!rb(y, l.value) || y === 0) && c(y), l.value > 0 && h();
				}
			});
		},
		f = () => {
			Hn && (e.millisecond ? u() : h());
		},
		m = () => {
			o || ((n = Date.now() + l.value), (o = !0), f());
		},
		v = (y = e.time) => {
			s(), (l.value = y);
		};
	return (
		en(s),
		Jt(() => {
			a && ((o = !0), (a = !1), f());
		}),
		Qt(() => {
			o && (s(), (a = !0));
		}),
		{ start: m, pause: s, reset: v, current: i }
	);
}
function Lo(e) {
	let t;
	We(() => {
		e(),
			Te(() => {
				t = !0;
			});
	}),
		Jt(() => {
			t && e();
		});
}
function Ue(e, t, n = {}) {
	if (!Hn) return;
	const { target: o = window, passive: a = !1, capture: l = !1 } = n;
	let i = !1,
		s;
	const r = h => {
			if (i) return;
			const f = Bt(h);
			f &&
				!s &&
				(f.addEventListener(e, t, { capture: l, passive: a }), (s = !0));
		},
		c = h => {
			if (i) return;
			const f = Bt(h);
			f && s && (f.removeEventListener(e, t, l), (s = !1));
		};
	Bo(() => c(o)), Qt(() => c(o)), Lo(() => r(o));
	let u;
	return (
		ft(o) &&
			(u = ee(o, (h, f) => {
				c(f), r(h);
			})),
		() => {
			u == null || u(), c(o), (i = !0);
		}
	);
}
function Vl(e, t, n = {}) {
	if (!Hn) return;
	const { eventName: o = 'click' } = n;
	Ue(
		o,
		l => {
			(Array.isArray(e) ? e : [e]).every(r => {
				const c = Bt(r);
				return c && !c.contains(l.target);
			}) && t(l);
		},
		{ target: document },
	);
}
var Da, di;
function cb() {
	if (!Da && ((Da = D(0)), (di = D(0)), Hn)) {
		const e = () => {
			(Da.value = window.innerWidth), (di.value = window.innerHeight);
		};
		e(),
			window.addEventListener('resize', e, { passive: !0 }),
			window.addEventListener('orientationchange', e, { passive: !0 });
	}
	return { width: Da, height: di };
}
var ub = /scroll|auto|overlay/i,
	Rd = Hn ? window : void 0;
function db(e) {
	return e.tagName !== 'HTML' && e.tagName !== 'BODY' && e.nodeType === 1;
}
function Br(e, t = Rd) {
	let n = e;
	for (; n && n !== t && db(n); ) {
		const { overflowY: o } = window.getComputedStyle(n);
		if (ub.test(o)) return n;
		n = n.parentNode;
	}
	return t;
}
function Vo(e, t = Rd) {
	const n = D();
	return (
		We(() => {
			e.value && (n.value = Br(e.value, t));
		}),
		n
	);
}
var Ma;
function fb() {
	if (!Ma && ((Ma = D('visible')), Hn)) {
		const e = () => {
			Ma.value = document.hidden ? 'hidden' : 'visible';
		};
		e(), window.addEventListener('visibilitychange', e);
	}
	return Ma;
}
var Bd = Symbol('van-field');
function jn(e) {
	const t = mt(Bd, null);
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
function vl(e, t) {
	'scrollTop' in e ? (e.scrollTop = t) : e.scrollTo(e.scrollX, t);
}
function _a() {
	return (
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop ||
		0
	);
}
function Fl(e) {
	vl(window, e), vl(document.body, e);
}
function fc(e, t) {
	if (e === window) return 0;
	const n = t ? hn(t) : _a();
	return Ae(e).top + n;
}
const hb = eb();
function Dd() {
	hb && Fl(_a());
}
const Dr = e => e.stopPropagation();
function Me(e, t) {
	(typeof e.cancelable != 'boolean' || e.cancelable) && e.preventDefault(),
		t && Dr(e);
}
function ao(e) {
	const t = Bt(e);
	if (!t) return !1;
	const n = window.getComputedStyle(t),
		o = n.display === 'none',
		a = t.offsetParent === null && n.position !== 'fixed';
	return o || a;
}
const { width: Mt, height: Tt } = cb();
function mb(e) {
	const t = window.getComputedStyle(e);
	return (
		t.transform !== 'none' ||
		t.perspective !== 'none' ||
		['transform', 'perspective', 'filter'].some(n =>
			(t.willChange || '').includes(n),
		)
	);
}
function vb(e) {
	let t = e.parentElement;
	for (; t; ) {
		if (t && t.tagName !== 'HTML' && t.tagName !== 'BODY' && mb(t)) return t;
		t = t.parentElement;
	}
	return null;
}
function we(e) {
	if (Pe(e)) return Od(e) ? `${e}px` : String(e);
}
function bn(e) {
	if (Pe(e)) {
		if (Array.isArray(e)) return { width: we(e[0]), height: we(e[1]) };
		const t = we(e);
		return { width: t, height: t };
	}
}
function yn(e) {
	const t = {};
	return e !== void 0 && (t.zIndex = +e), t;
}
let fi;
function gb() {
	if (!fi) {
		const e = document.documentElement,
			t = e.style.fontSize || window.getComputedStyle(e).fontSize;
		fi = parseFloat(t);
	}
	return fi;
}
function bb(e) {
	return (e = e.replace(/rem/g, '')), +e * gb();
}
function yb(e) {
	return (e = e.replace(/vw/g, '')), (+e * Mt.value) / 100;
}
function pb(e) {
	return (e = e.replace(/vh/g, '')), (+e * Tt.value) / 100;
}
function Mr(e) {
	if (typeof e == 'number') return e;
	if (_t) {
		if (e.includes('rem')) return bb(e);
		if (e.includes('vw')) return yb(e);
		if (e.includes('vh')) return pb(e);
	}
	return parseFloat(e);
}
const wb = /-(\w)/g,
	Md = e => e.replace(wb, (t, n) => n.toUpperCase()),
	xb = e =>
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
function hc(e, t, n) {
	const o = e.indexOf(t);
	return o === -1
		? e
		: t === '-' && o !== 0
			? e.slice(0, o)
			: e.slice(0, o + 1) + e.slice(o).replace(n, '');
}
function Ji(e, t = !0, n = !0) {
	t ? (e = hc(e, '.', /\./g)) : (e = e.split('.')[0]),
		n ? (e = hc(e, '-', /-/g)) : (e = e.replace(/-/, ''));
	const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
	return e.replace(o, '');
}
function Ld(e, t) {
	return Math.round((e + t) * 1e10) / 1e10;
}
const { hasOwnProperty: Sb } = Object.prototype;
function Cb(e, t, n) {
	const o = t[n];
	Pe(o) &&
		(!Sb.call(e, n) || !fn(o) ? (e[n] = o) : (e[n] = Vd(Object(e[n]), o)));
}
function Vd(e, t) {
	return (
		Object.keys(t).forEach(n => {
			Cb(e, t, n);
		}),
		e
	);
}
var Tb = {
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
const mc = D('zh-CN'),
	vc = He({ 'zh-CN': Tb }),
	Fd = {
		messages() {
			return vc[mc.value];
		},
		use(e, t) {
			(mc.value = e), this.add({ [e]: t });
		},
		add(e = {}) {
			Vd(vc, e);
		},
	};
var _b = Fd;
function kb(e) {
	const t = Md(e) + '.';
	return (n, ...o) => {
		const a = _b.messages(),
			l = sc(a, t + n) || sc(a, n);
		return Ao(l) ? l(...o) : l;
	};
}
function Qi(e, t) {
	return t
		? typeof t == 'string'
			? ` ${e}--${t}`
			: Array.isArray(t)
				? t.reduce((n, o) => n + Qi(e, o), '')
				: Object.keys(t).reduce((n, o) => n + (t[o] ? Qi(e, o) : ''), '')
		: '';
}
function Eb(e) {
	return (t, n) => (
		t && typeof t != 'string' && ((n = t), (t = '')),
		(t = t ? `${e}__${t}` : e),
		`${t}${Qi(t, n)}`
	);
}
function W(e) {
	const t = `van-${e}`;
	return [t, Eb(t), kb(t)];
}
const pn = 'van-hairline',
	Nd = `${pn}--top`,
	zd = `${pn}--left`,
	Pb = `${pn}--right`,
	Lr = `${pn}--bottom`,
	ca = `${pn}--surround`,
	Nl = `${pn}--top-bottom`,
	$b = `${pn}-unset--top-bottom`,
	gt = 'van-haptics-feedback',
	Hd = Symbol('van-form'),
	jd = 500,
	gc = 5;
function Un(e, { args: t = [], done: n, canceled: o, error: a }) {
	if (e) {
		const l = e.apply(null, t);
		Rr(l)
			? l
					.then(i => {
						i ? n() : o && o();
					})
					.catch(a || qi)
			: l
				? n()
				: o && o();
	} else n();
}
function G(e) {
	return (
		(e.install = t => {
			const { name: n } = e;
			n && (t.component(n, e), t.component(Md(`-${n}`), e));
		}),
		e
	);
}
function gl(e, t) {
	return e.reduce((n, o) => (Math.abs(n - t) < Math.abs(o - t) ? n : o));
}
const Ud = Symbol();
function zl(e) {
	const t = mt(Ud, null);
	t &&
		ee(t, n => {
			n && e();
		});
}
const Wd = (e, t) => {
	const n = D(),
		o = () => {
			n.value = Ae(e).height;
		};
	return (
		We(() => {
			if ((Te(o), t)) for (let a = 1; a <= 3; a++) setTimeout(o, 100 * a);
		}),
		zl(() => Te(o)),
		ee([Mt, Tt], o),
		n
	);
};
function Hl(e, t) {
	const n = Wd(e, !0);
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
const [Yd, bc] = W('action-bar'),
	Vr = Symbol(Yd),
	Ib = { placeholder: Boolean, safeAreaInsetBottom: z };
var Ab = j({
	name: Yd,
	props: Ib,
	setup(e, { slots: t }) {
		const n = D(),
			o = Hl(n, bc),
			{ linkChildren: a } = rt(Vr);
		a();
		const l = () => {
			var i;
			return d(
				'div',
				{
					ref: n,
					class: [bc(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }],
				},
				[(i = t.default) == null ? void 0 : i.call(t)],
			);
		};
		return () => (e.placeholder ? o(l) : l());
	},
});
const Kd = G(Ab);
function ke(e) {
	const t = Ft();
	t && he(t.proxy, e);
}
const Wn = { to: [String, Object], url: String, replace: Boolean };
function qd({ to: e, url: t, replace: n, $router: o }) {
	e && o
		? o[n ? 'replace' : 'push'](e)
		: t && (n ? location.replace(t) : (location.href = t));
}
function io() {
	const e = Ft().proxy;
	return () => qd(e);
}
const [Ob, yc] = W('badge'),
	Rb = {
		dot: Boolean,
		max: q,
		tag: Z('div'),
		color: String,
		offset: Array,
		content: q,
		showZero: z,
		position: Z('top-right'),
	};
var Bb = j({
	name: Ob,
	props: Rb,
	setup(e, { slots: t }) {
		const n = () => {
				if (t.content) return !0;
				const { content: s, showZero: r } = e;
				return Pe(s) && s !== '' && (r || (s !== 0 && s !== '0'));
			},
			o = () => {
				const { dot: s, max: r, content: c } = e;
				if (!s && n())
					return t.content
						? t.content()
						: Pe(r) && Od(c) && +c > +r
							? `${r}+`
							: c;
			},
			a = s => (s.startsWith('-') ? s.replace('-', '') : `-${s}`),
			l = L(() => {
				const s = { background: e.color };
				if (e.offset) {
					const [r, c] = e.offset,
						{ position: u } = e,
						[h, f] = u.split('-');
					t.default
						? (typeof c == 'number'
								? (s[h] = we(h === 'top' ? c : -c))
								: (s[h] = h === 'top' ? we(c) : a(c)),
							typeof r == 'number'
								? (s[f] = we(f === 'left' ? r : -r))
								: (s[f] = f === 'left' ? we(r) : a(r)))
						: ((s.marginTop = we(c)), (s.marginLeft = we(r)));
				}
				return s;
			}),
			i = () => {
				if (n() || e.dot)
					return d(
						'div',
						{
							class: yc([e.position, { dot: e.dot, fixed: !!t.default }]),
							style: l.value,
						},
						[o()],
					);
			};
		return () => {
			if (t.default) {
				const { tag: s } = e;
				return d(
					s,
					{ class: yc('wrapper') },
					{ default: () => [t.default(), i()] },
				);
			}
			return i();
		};
	},
});
const ro = G(Bb);
let Gd = 2e3;
const Db = () => ++Gd,
	Mb = e => {
		Gd = e;
	},
	[Xd, Lb] = W('config-provider'),
	Zd = Symbol(Xd),
	Vb = {
		tag: Z('div'),
		theme: Z('light'),
		zIndex: Number,
		themeVars: Object,
		themeVarsDark: Object,
		themeVarsLight: Object,
		themeVarsScope: Z('local'),
		iconPrefix: String,
	};
function Fb(e) {
	return e.replace(/([a-zA-Z])(\d)/g, '$1-$2');
}
function Nb(e) {
	const t = {};
	return (
		Object.keys(e).forEach(n => {
			const o = Fb(xb(n));
			t[`--van-${o}`] = e[n];
		}),
		t
	);
}
function La(e = {}, t = {}) {
	Object.keys(e).forEach(n => {
		e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n]);
	}),
		Object.keys(t).forEach(n => {
			e[n] || document.documentElement.style.removeProperty(n);
		});
}
var zb = j({
	name: Xd,
	props: Vb,
	setup(e, { slots: t }) {
		const n = L(() =>
			Nb(
				he(
					{},
					e.themeVars,
					e.theme === 'dark' ? e.themeVarsDark : e.themeVarsLight,
				),
			),
		);
		if (_t) {
			const o = () => {
					document.documentElement.classList.add(`van-theme-${e.theme}`);
				},
				a = (l = e.theme) => {
					document.documentElement.classList.remove(`van-theme-${l}`);
				};
			ee(
				() => e.theme,
				(l, i) => {
					i && a(i), o();
				},
				{ immediate: !0 },
			),
				Jt(o),
				Qt(a),
				en(a),
				ee(n, (l, i) => {
					e.themeVarsScope === 'global' && La(l, i);
				}),
				ee(
					() => e.themeVarsScope,
					(l, i) => {
						i === 'global' && La({}, n.value),
							l === 'global' && La(n.value, {});
					},
				),
				e.themeVarsScope === 'global' && La(n.value, {});
		}
		return (
			cn(Zd, e),
			Ro(() => {
				e.zIndex !== void 0 && Mb(e.zIndex);
			}),
			() =>
				d(
					e.tag,
					{
						class: Lb(),
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
const [Hb, pc] = W('icon'),
	jb = e => (e == null ? void 0 : e.includes('/')),
	Ub = {
		dot: Boolean,
		tag: Z('i'),
		name: String,
		size: q,
		badge: q,
		color: String,
		badgeProps: Object,
		classPrefix: String,
	};
var Wb = j({
	name: Hb,
	props: Ub,
	setup(e, { slots: t }) {
		const n = mt(Zd, null),
			o = L(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || pc());
		return () => {
			const { tag: a, dot: l, name: i, size: s, badge: r, color: c } = e,
				u = jb(i);
			return d(
				ro,
				_e(
					{
						dot: l,
						tag: a,
						class: [o.value, u ? '' : `${o.value}-${i}`],
						style: { color: c, fontSize: we(s) },
						content: r,
					},
					e.badgeProps,
				),
				{
					default: () => {
						var h;
						return [
							(h = t.default) == null ? void 0 : h.call(t),
							u && d('img', { class: pc('image'), src: i }, null),
						];
					},
				},
			);
		};
	},
});
const Ce = G(Wb);
var Yb = Ce;
const [Kb, ua] = W('loading'),
	qb = Array(12)
		.fill(null)
		.map((e, t) => d('i', { class: ua('line', String(t + 1)) }, null)),
	Gb = d('svg', { class: ua('circular'), viewBox: '25 25 50 50' }, [
		d('circle', { cx: '50', cy: '50', r: '20', fill: 'none' }, null),
	]),
	Xb = {
		size: q,
		type: Z('circular'),
		color: String,
		vertical: Boolean,
		textSize: q,
		textColor: String,
	};
var Zb = j({
	name: Kb,
	props: Xb,
	setup(e, { slots: t }) {
		const n = L(() => he({ color: e.color }, bn(e.size))),
			o = () => {
				const l = e.type === 'spinner' ? qb : Gb;
				return d('span', { class: ua('spinner', e.type), style: n.value }, [
					t.icon ? t.icon() : l,
				]);
			},
			a = () => {
				var l;
				if (t.default)
					return d(
						'span',
						{
							class: ua('text'),
							style: {
								fontSize: we(e.textSize),
								color: (l = e.textColor) != null ? l : e.color,
							},
						},
						[t.default()],
					);
			};
		return () => {
			const { type: l, vertical: i } = e;
			return d(
				'div',
				{
					class: ua([l, { vertical: i }]),
					'aria-live': 'polite',
					'aria-busy': !0,
				},
				[o(), a()],
			);
		};
	},
});
const Nt = G(Zb),
	[Jb, co] = W('button'),
	Qb = he({}, Wn, {
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
var ey = j({
	name: Jb,
	props: Qb,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = io(),
			a = () =>
				n.loading
					? n.loading()
					: d(
							Nt,
							{
								size: e.loadingSize,
								type: e.loadingType,
								class: co('loading'),
							},
							null,
						),
			l = () => {
				if (e.loading) return a();
				if (n.icon) return d('div', { class: co('icon') }, [n.icon()]);
				if (e.icon)
					return d(
						Ce,
						{ name: e.icon, class: co('icon'), classPrefix: e.iconPrefix },
						null,
					);
			},
			i = () => {
				let c;
				if (
					(e.loading
						? (c = e.loadingText)
						: (c = n.default ? n.default() : e.text),
					c)
				)
					return d('span', { class: co('text') }, [c]);
			},
			s = () => {
				const { color: c, plain: u } = e;
				if (c) {
					const h = { color: u ? c : 'white' };
					return (
						u || (h.background = c),
						c.includes('gradient') ? (h.border = 0) : (h.borderColor = c),
						h
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
					size: h,
					block: f,
					round: m,
					plain: v,
					square: y,
					loading: g,
					disabled: w,
					hairline: b,
					nativeType: C,
					iconPosition: p,
				} = e,
				x = [
					co([
						u,
						h,
						{
							plain: v,
							block: f,
							round: m,
							square: y,
							loading: g,
							disabled: w,
							hairline: b,
						},
					]),
					{ [ca]: b },
				];
			return d(
				c,
				{ type: C, class: x, style: s(), disabled: w, onClick: r },
				{
					default: () => [
						d('div', { class: co('content') }, [
							p === 'left' && l(),
							i(),
							p === 'right' && l(),
						]),
					],
				},
			);
		};
	},
});
const it = G(ey),
	[ty, ny] = W('action-bar-button'),
	oy = he({}, Wn, {
		type: String,
		text: String,
		icon: String,
		color: String,
		loading: Boolean,
		disabled: Boolean,
	});
var ay = j({
	name: ty,
	props: oy,
	setup(e, { slots: t }) {
		const n = io(),
			{ parent: o, index: a } = ot(Vr),
			l = L(() => {
				if (o) {
					const s = o.children[a.value - 1];
					return !(s && 'isButton' in s);
				}
			}),
			i = L(() => {
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
					loading: h,
					disabled: f,
				} = e;
				return d(
					it,
					{
						class: ny([s, { last: i.value, first: l.value }]),
						size: 'large',
						type: s,
						icon: r,
						color: u,
						loading: h,
						disabled: f,
						onClick: n,
					},
					{ default: () => [t.default ? t.default() : c] },
				);
			}
		);
	},
});
const er = G(ay),
	[ly, hi] = W('action-bar-icon'),
	iy = he({}, Wn, {
		dot: Boolean,
		text: String,
		icon: String,
		color: String,
		badge: q,
		iconClass: Ne,
		badgeProps: Object,
		iconPrefix: String,
	});
var ry = j({
	name: ly,
	props: iy,
	setup(e, { slots: t }) {
		const n = io();
		ot(Vr);
		const o = () => {
			const {
				dot: a,
				badge: l,
				icon: i,
				color: s,
				iconClass: r,
				badgeProps: c,
				iconPrefix: u,
			} = e;
			return t.icon
				? d(ro, _e({ dot: a, class: hi('icon'), content: l }, c), {
						default: t.icon,
					})
				: d(
						Ce,
						{
							tag: 'div',
							dot: a,
							name: i,
							badge: l,
							color: s,
							class: [hi('icon'), r],
							badgeProps: c,
							classPrefix: u,
						},
						null,
					);
		};
		return () =>
			d('div', { role: 'button', class: hi(), tabindex: 0, onClick: n }, [
				o(),
				t.default ? t.default() : e.text,
			]);
	},
});
const sy = G(ry),
	Fo = {
		show: Boolean,
		zIndex: q,
		overlay: z,
		duration: q,
		teleport: [String, Object],
		lockScroll: z,
		lazyRender: z,
		beforeClose: Function,
		overlayStyle: Object,
		overlayClass: Ne,
		transitionAppear: Boolean,
		closeOnClickOverlay: z,
	},
	Fr = Object.keys(Fo);
function cy(e, t) {
	return e > t ? 'horizontal' : t > e ? 'vertical' : '';
}
function kt() {
	const e = D(0),
		t = D(0),
		n = D(0),
		o = D(0),
		a = D(0),
		l = D(0),
		i = D(''),
		s = D(!0),
		r = () => i.value === 'vertical',
		c = () => i.value === 'horizontal',
		u = () => {
			(n.value = 0),
				(o.value = 0),
				(a.value = 0),
				(l.value = 0),
				(i.value = ''),
				(s.value = !0);
		};
	return {
		move: m => {
			const v = m.touches[0];
			(n.value = (v.clientX < 0 ? 0 : v.clientX) - e.value),
				(o.value = v.clientY - t.value),
				(a.value = Math.abs(n.value)),
				(l.value = Math.abs(o.value));
			const y = 10;
			(!i.value || (a.value < y && l.value < y)) &&
				(i.value = cy(a.value, l.value)),
				s.value && (a.value > gc || l.value > gc) && (s.value = !1);
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
		offsetY: l,
		direction: i,
		isVertical: r,
		isHorizontal: c,
		isTap: s,
	};
}
let Yo = 0;
const wc = 'van-overflow-hidden';
function Jd(e, t) {
	const n = kt(),
		o = '01',
		a = '10',
		l = u => {
			n.move(u);
			const h = n.deltaY.value > 0 ? a : o,
				f = Br(u.target, e.value),
				{ scrollHeight: m, offsetHeight: v, scrollTop: y } = f;
			let g = '11';
			y === 0 ? (g = v >= m ? '00' : '01') : y + v >= m && (g = '10'),
				g !== '11' &&
					n.isVertical() &&
					!(parseInt(g, 2) & parseInt(h, 2)) &&
					Me(u, !0);
		},
		i = () => {
			document.addEventListener('touchstart', n.start),
				document.addEventListener('touchmove', l, { passive: !1 }),
				Yo || document.body.classList.add(wc),
				Yo++;
		},
		s = () => {
			Yo &&
				(document.removeEventListener('touchstart', n.start),
				document.removeEventListener('touchmove', l),
				Yo--,
				Yo || document.body.classList.remove(wc));
		},
		r = () => t() && i(),
		c = () => t() && s();
	Lo(r),
		Qt(c),
		en(c),
		ee(t, u => {
			u ? i() : s();
		});
}
function Nr(e) {
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
const bl = () => {
		var e;
		const { scopeId: t } = ((e = Ft()) == null ? void 0 : e.vnode) || {};
		return t ? { [t]: '' } : null;
	},
	[uy, dy] = W('overlay'),
	fy = {
		show: Boolean,
		zIndex: q,
		duration: q,
		className: Ne,
		lockScroll: z,
		lazyRender: z,
		customStyle: Object,
	};
var hy = j({
	name: uy,
	props: fy,
	setup(e, { slots: t }) {
		const n = D(),
			o = Nr(() => e.show || !e.lazyRender),
			a = i => {
				e.lockScroll && Me(i, !0);
			},
			l = o(() => {
				var i;
				const s = he(yn(e.zIndex), e.customStyle);
				return (
					Pe(e.duration) && (s.animationDuration = `${e.duration}s`),
					Qe(
						d('div', { ref: n, style: s, class: [dy(), e.className] }, [
							(i = t.default) == null ? void 0 : i.call(t),
						]),
						[[nt, e.show]],
					)
				);
			});
		return (
			Ue('touchmove', a, { target: n }),
			() => d(Mo, { name: 'van-fade', appear: !0 }, { default: l })
		);
	},
});
const Qd = G(hy),
	my = he({}, Fo, {
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
	[vy, xc] = W('popup');
var gy = j({
	name: vy,
	inheritAttrs: !1,
	props: my,
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
		let a, l;
		const i = D(),
			s = D(),
			r = Nr(() => e.show || !e.lazyRender),
			c = L(() => {
				const T = { zIndex: i.value };
				if (Pe(e.duration)) {
					const O =
						e.position === 'center'
							? 'animationDuration'
							: 'transitionDuration';
					T[O] = `${e.duration}s`;
				}
				return T;
			}),
			u = () => {
				a ||
					((a = !0),
					(i.value = e.zIndex !== void 0 ? +e.zIndex : Db()),
					t('open'));
			},
			h = () => {
				a &&
					Un(e.beforeClose, {
						done() {
							(a = !1), t('close'), t('update:show', !1);
						},
					});
			},
			f = T => {
				t('clickOverlay', T), e.closeOnClickOverlay && h();
			},
			m = () => {
				if (e.overlay)
					return d(
						Qd,
						_e(
							{
								show: e.show,
								class: e.overlayClass,
								zIndex: i.value,
								duration: e.duration,
								customStyle: e.overlayStyle,
								role: e.closeOnClickOverlay ? 'button' : void 0,
								tabindex: e.closeOnClickOverlay ? 0 : void 0,
							},
							bl(),
							{ onClick: f },
						),
						{ default: o['overlay-content'] },
					);
			},
			v = T => {
				t('clickCloseIcon', T), h();
			},
			y = () => {
				if (e.closeable)
					return d(
						Ce,
						{
							role: 'button',
							tabindex: 0,
							name: e.closeIcon,
							class: [xc('close-icon', e.closeIconPosition), gt],
							classPrefix: e.iconPrefix,
							onClick: v,
						},
						null,
					);
			};
		let g;
		const w = () => {
				g && clearTimeout(g),
					(g = setTimeout(() => {
						t('opened');
					}));
			},
			b = () => t('closed'),
			C = T => t('keydown', T),
			p = r(() => {
				var T;
				const {
					round: O,
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
									xc({ round: O, [S]: S }),
									{ 'van-safe-area-top': A, 'van-safe-area-bottom': I },
								],
								onKeydown: C,
							},
							n,
							bl(),
						),
						[(T = o.default) == null ? void 0 : T.call(o), y()],
					),
					[[nt, e.show]],
				);
			}),
			x = () => {
				const { position: T, transition: O, transitionAppear: S } = e,
					A = T === 'center' ? 'van-fade' : `van-popup-slide-${T}`;
				return d(
					Mo,
					{ name: O || A, appear: S, onAfterEnter: w, onAfterLeave: b },
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
								var O;
								(O = s.value) == null || O.focus();
							})),
						!T && a && ((a = !1), t('close'));
				},
			),
			ke({ popupRef: s }),
			Jd(s, () => e.show && e.lockScroll),
			Ue('popstate', () => {
				e.closeOnPopstate && (h(), (l = !1));
			}),
			We(() => {
				e.show && u();
			}),
			Jt(() => {
				l && (t('update:show', !0), (l = !1));
			}),
			Qt(() => {
				e.show && e.teleport && (h(), (l = !0));
			}),
			cn(Ud, () => e.show),
			() =>
				e.teleport
					? d(Do, { to: e.teleport }, { default: () => [m(), x()] })
					: d(Je, null, [m(), x()])
		);
	},
});
const zt = G(gy),
	[by, wt] = W('action-sheet'),
	yy = he({}, Fo, {
		title: String,
		round: z,
		actions: Ve(),
		closeIcon: Z('cross'),
		closeable: z,
		cancelText: String,
		description: String,
		closeOnPopstate: z,
		closeOnClickAction: Boolean,
		safeAreaInsetBottom: z,
	}),
	py = [...Fr, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'];
var wy = j({
	name: by,
	props: yy,
	emits: ['select', 'cancel', 'update:show'],
	setup(e, { slots: t, emit: n }) {
		const o = h => n('update:show', h),
			a = () => {
				o(!1), n('cancel');
			},
			l = () => {
				if (e.title)
					return d('div', { class: wt('header') }, [
						e.title,
						e.closeable &&
							d(
								Ce,
								{ name: e.closeIcon, class: [wt('close'), gt], onClick: a },
								null,
							),
					]);
			},
			i = () => {
				if (t.cancel || e.cancelText)
					return [
						d('div', { class: wt('gap') }, null),
						d('button', { type: 'button', class: wt('cancel'), onClick: a }, [
							t.cancel ? t.cancel() : e.cancelText,
						]),
					];
			},
			s = h => {
				if (h.icon)
					return d(Ce, { class: wt('item-icon'), name: h.icon }, null);
			},
			r = (h, f) =>
				h.loading
					? d(Nt, { class: wt('loading-icon') }, null)
					: t.action
						? t.action({ action: h, index: f })
						: [
								d('span', { class: wt('name') }, [h.name]),
								h.subname && d('div', { class: wt('subname') }, [h.subname]),
							],
			c = (h, f) => {
				const {
						color: m,
						loading: v,
						callback: y,
						disabled: g,
						className: w,
					} = h,
					b = () => {
						g ||
							v ||
							(y && y(h),
							e.closeOnClickAction && o(!1),
							Te(() => n('select', h, f)));
					};
				return d(
					'button',
					{
						type: 'button',
						style: { color: m },
						class: [wt('item', { loading: v, disabled: g }), w],
						onClick: b,
					},
					[s(h), r(h, f)],
				);
			},
			u = () => {
				if (e.description || t.description) {
					const h = t.description ? t.description() : e.description;
					return d('div', { class: wt('description') }, [h]);
				}
			};
		return () =>
			d(
				zt,
				_e({ class: wt(), position: 'bottom', 'onUpdate:show': o }, Ie(e, py)),
				{
					default: () => {
						var h;
						return [
							l(),
							u(),
							d('div', { class: wt('content') }, [
								e.actions.map(c),
								(h = t.default) == null ? void 0 : h.call(t),
							]),
							i(),
						];
					},
				},
			);
	},
});
const xy = G(wy),
	[Sy, rn, Sc] = W('picker'),
	ef = e => e.find(t => !t.disabled) || e[0];
function Cy(e, t) {
	const n = e[0];
	if (n) {
		if (Array.isArray(n)) return 'multiple';
		if (t.children in n) return 'cascade';
	}
	return 'default';
}
function ll(e, t) {
	t = et(t, 0, e.length);
	for (let n = t; n < e.length; n++) if (!e[n].disabled) return n;
	for (let n = t - 1; n >= 0; n--) if (!e[n].disabled) return n;
	return 0;
}
const Cc = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);
function tr(e, t, n) {
	const o = e.findIndex(l => l[n.value] === t),
		a = ll(e, o);
	return e[a];
}
function Ty(e, t, n) {
	const o = [];
	let a = { [t.children]: e },
		l = 0;
	for (; a && a[t.children]; ) {
		const i = a[t.children],
			s = n.value[l];
		if (((a = Pe(s) ? tr(i, s, t) : void 0), !a && i.length)) {
			const r = ef(i)[t.value];
			a = tr(i, r, t);
		}
		l++, o.push(i);
	}
	return o;
}
function _y(e) {
	const { transform: t } = window.getComputedStyle(e),
		n = t.slice(7, t.length - 1).split(', ')[5];
	return Number(n);
}
function ky(e) {
	return he({ text: 'text', value: 'value', children: 'children' }, e);
}
const Tc = 200,
	_c = 300,
	Ey = 15,
	[tf, mi] = W('picker-column'),
	nf = Symbol(tf);
var Py = j({
	name: tf,
	props: {
		value: q,
		fields: Ye(Object),
		options: Ve(),
		readonly: Boolean,
		allowHtml: Boolean,
		optionHeight: Ye(Number),
		swipeDuration: Ye(q),
		visibleOptionNum: Ye(q),
	},
	emits: ['change', 'clickOption', 'scrollInto'],
	setup(e, { emit: t, slots: n }) {
		let o, a, l, i, s;
		const r = D(),
			c = D(),
			u = D(0),
			h = D(0),
			f = kt(),
			m = () => e.options.length,
			v = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
			y = I => {
				let k = ll(e.options, I);
				const P = -k * e.optionHeight,
					B = () => {
						k > m() - 1 && (k = ll(e.options, I));
						const X = e.options[k][e.fields.value];
						X !== e.value && t('change', X);
					};
				o && P !== u.value ? (s = B) : B(), (u.value = P);
			},
			g = () => e.readonly || !e.options.length,
			w = I => {
				o ||
					g() ||
					((s = null), (h.value = Tc), y(I), t('clickOption', e.options[I]));
			},
			b = I => et(Math.round(-I / e.optionHeight), 0, m() - 1),
			C = L(() => b(u.value)),
			p = (I, k) => {
				const P = Math.abs(I / k);
				I = u.value + (P / 0.003) * (I < 0 ? -1 : 1);
				const B = b(I);
				(h.value = +e.swipeDuration), y(B);
			},
			x = () => {
				(o = !1), (h.value = 0), s && (s(), (s = null));
			},
			T = I => {
				if (!g()) {
					if ((f.start(I), o)) {
						const k = _y(c.value);
						u.value = Math.min(0, k - v());
					}
					(h.value = 0), (a = u.value), (l = Date.now()), (i = a), (s = null);
				}
			},
			O = I => {
				if (g()) return;
				f.move(I), f.isVertical() && ((o = !0), Me(I, !0));
				const k = et(
						a + f.deltaY.value,
						-(m() * e.optionHeight),
						e.optionHeight,
					),
					P = b(k);
				P !== C.value && t('scrollInto', e.options[P]), (u.value = k);
				const B = Date.now();
				B - l > _c && ((l = B), (i = k));
			},
			S = () => {
				if (g()) return;
				const I = u.value - i,
					k = Date.now() - l;
				if (k < _c && Math.abs(I) > Ey) {
					p(I, k);
					return;
				}
				const B = b(u.value);
				(h.value = Tc),
					y(B),
					setTimeout(() => {
						o = !1;
					}, 0);
			},
			A = () => {
				const I = { height: `${e.optionHeight}px` };
				return e.options.map((k, P) => {
					const B = k[e.fields.text],
						{ disabled: X } = k,
						V = k[e.fields.value],
						R = {
							role: 'button',
							style: I,
							tabindex: X ? -1 : 0,
							class: [
								mi('item', { disabled: X, selected: V === e.value }),
								k.className,
							],
							onClick: () => w(P),
						},
						N = {
							class: 'van-ellipsis',
							[e.allowHtml ? 'innerHTML' : 'textContent']: B,
						};
					return d('li', R, [n.option ? n.option(k, P) : d('div', N, null)]);
				});
			};
		return (
			ot(nf),
			ke({ stopMomentum: x }),
			Ro(() => {
				const I = o
						? Math.floor(-u.value / e.optionHeight)
						: e.options.findIndex(B => B[e.fields.value] === e.value),
					k = ll(e.options, I),
					P = -k * e.optionHeight;
				o && k < I && x(), (u.value = P);
			}),
			Ue('touchmove', O, { target: r }),
			() =>
				d(
					'div',
					{
						ref: r,
						class: mi(),
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
									transform: `translate3d(0, ${u.value + v()}px, 0)`,
									transitionDuration: `${h.value}ms`,
									transitionProperty: h.value ? 'all' : 'none',
								},
								class: mi('wrapper'),
								onTransitionend: x,
							},
							[A()],
						),
					],
				)
		);
	},
});
const [$y] = W('picker-toolbar'),
	jl = { title: String, cancelButtonText: String, confirmButtonText: String },
	of = ['cancel', 'confirm', 'title', 'toolbar'],
	Iy = Object.keys(jl);
var af = j({
	name: $y,
	props: jl,
	emits: ['confirm', 'cancel'],
	setup(e, { emit: t, slots: n }) {
		const o = () => {
				if (n.title) return n.title();
				if (e.title)
					return d('div', { class: [rn('title'), 'van-ellipsis'] }, [e.title]);
			},
			a = () => t('cancel'),
			l = () => t('confirm'),
			i = () => {
				var r;
				const c = (r = e.cancelButtonText) != null ? r : Sc('cancel');
				if (!(!n.cancel && !c))
					return d(
						'button',
						{ type: 'button', class: [rn('cancel'), gt], onClick: a },
						[n.cancel ? n.cancel() : c],
					);
			},
			s = () => {
				var r;
				const c = (r = e.confirmButtonText) != null ? r : Sc('confirm');
				if (!(!n.confirm && !c))
					return d(
						'button',
						{ type: 'button', class: [rn('confirm'), gt], onClick: l },
						[n.confirm ? n.confirm() : c],
					);
			};
		return () =>
			d('div', { class: rn('toolbar') }, [
				n.toolbar ? n.toolbar() : [i(), o(), s()],
			]);
	},
});
const zr = (e, t) => {
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
function Ay(e, t, n) {
	let o,
		a = 0;
	const l = e.scrollLeft,
		i = n === 0 ? 1 : Math.round((n * 1e3) / 16);
	function s() {
		Ll(o);
	}
	function r() {
		(e.scrollLeft += (t - l) / i), ++a < i && (o = lt(r));
	}
	return r(), s;
}
function Oy(e, t, n, o) {
	let a,
		l = hn(e);
	const i = l < t,
		s = n === 0 ? 1 : Math.round((n * 1e3) / 16),
		r = (t - l) / s;
	function c() {
		Ll(a);
	}
	function u() {
		(l += r),
			((i && l > t) || (!i && l < t)) && (l = t),
			vl(e, l),
			(i && l < t) || (!i && l > t) ? (a = lt(u)) : o && (a = lt(o));
	}
	return u(), c;
}
let Ry = 0;
function No() {
	const e = Ft(),
		{ name: t = 'unknown' } = (e == null ? void 0 : e.type) || {};
	return `${t}-${++Ry}`;
}
function ka() {
	const e = D([]),
		t = [];
	return (
		Xu(() => {
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
function lf(e, t) {
	if (!_t || !window.IntersectionObserver) return;
	const n = new IntersectionObserver(
			l => {
				t(l[0].intersectionRatio > 0);
			},
			{ root: document.body },
		),
		o = () => {
			e.value && n.observe(e.value);
		},
		a = () => {
			e.value && n.unobserve(e.value);
		};
	Qt(a), en(a), Lo(o);
}
const [By, Dy] = W('sticky'),
	My = {
		zIndex: q,
		position: Z('top'),
		container: Object,
		offsetTop: le(0),
		offsetBottom: le(0),
	};
var Ly = j({
	name: By,
	props: My,
	emits: ['scroll', 'change'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Vo(o),
			l = He({ fixed: !1, width: 0, height: 0, transform: 0 }),
			i = D(!1),
			s = L(() => Mr(e.position === 'top' ? e.offsetTop : e.offsetBottom)),
			r = L(() => {
				if (i.value) return;
				const { fixed: f, height: m, width: v } = l;
				if (f) return { width: `${v}px`, height: `${m}px` };
			}),
			c = L(() => {
				if (!l.fixed || i.value) return;
				const f = he(yn(e.zIndex), {
					width: `${l.width}px`,
					height: `${l.height}px`,
					[e.position]: `${s.value}px`,
				});
				return (
					l.transform && (f.transform = `translate3d(0, ${l.transform}px, 0)`),
					f
				);
			}),
			u = f => t('scroll', { scrollTop: f, isFixed: l.fixed }),
			h = () => {
				if (!o.value || ao(o)) return;
				const { container: f, position: m } = e,
					v = Ae(o),
					y = hn(window);
				if (((l.width = v.width), (l.height = v.height), m === 'top'))
					if (f) {
						const g = Ae(f),
							w = g.bottom - s.value - l.height;
						(l.fixed = s.value > v.top && g.bottom > 0),
							(l.transform = w < 0 ? w : 0);
					} else l.fixed = s.value > v.top;
				else {
					const { clientHeight: g } = document.documentElement;
					if (f) {
						const w = Ae(f),
							b = g - w.top - s.value - l.height;
						(l.fixed = g - s.value < v.bottom && g > w.top),
							(l.transform = b < 0 ? -b : 0);
					} else l.fixed = g - s.value < v.bottom;
				}
				u(y);
			};
		return (
			ee(
				() => l.fixed,
				f => t('change', f),
			),
			Ue('scroll', h, { target: a, passive: !0 }),
			lf(o, h),
			ee([Mt, Tt], () => {
				!o.value ||
					ao(o) ||
					!l.fixed ||
					((i.value = !0),
					Te(() => {
						const f = Ae(o);
						(l.width = f.width), (l.height = f.height), (i.value = !1);
					}));
			}),
			() => {
				var f;
				return d('div', { ref: o, style: r.value }, [
					d(
						'div',
						{ class: Dy({ fixed: l.fixed && !i.value }), style: c.value },
						[(f = n.default) == null ? void 0 : f.call(n)],
					),
				]);
			}
		);
	},
});
const rf = G(Ly),
	[sf, Va] = W('swipe'),
	Vy = {
		loop: z,
		width: q,
		height: q,
		vertical: Boolean,
		autoplay: le(0),
		duration: le(500),
		touchable: z,
		lazyRender: Boolean,
		initialSwipe: le(0),
		indicatorColor: String,
		showIndicators: z,
		stopPropagation: z,
	},
	cf = Symbol(sf);
var Fy = j({
	name: sf,
	props: Vy,
	emits: ['change', 'dragStart', 'dragEnd'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(),
			l = He({
				rect: null,
				width: 0,
				height: 0,
				offset: 0,
				active: 0,
				swiping: !1,
			});
		let i = !1;
		const s = kt(),
			{ children: r, linkChildren: c } = rt(cf),
			u = L(() => r.length),
			h = L(() => l[e.vertical ? 'height' : 'width']),
			f = L(() => (e.vertical ? s.deltaY.value : s.deltaX.value)),
			m = L(() =>
				l.rect
					? (e.vertical ? l.rect.height : l.rect.width) - h.value * u.value
					: 0,
			),
			v = L(() => (h.value ? Math.ceil(Math.abs(m.value) / h.value) : u.value)),
			y = L(() => u.value * h.value),
			g = L(() => (l.active + u.value) % u.value),
			w = L(() => {
				const ne = e.vertical ? 'vertical' : 'horizontal';
				return s.direction.value === ne;
			}),
			b = L(() => {
				const ne = {
					transitionDuration: `${l.swiping ? 0 : e.duration}ms`,
					transform: `translate${e.vertical ? 'Y' : 'X'}(${+l.offset.toFixed(2)}px)`,
				};
				if (h.value) {
					const se = e.vertical ? 'height' : 'width',
						be = e.vertical ? 'width' : 'height';
					(ne[se] = `${y.value}px`), (ne[be] = e[be] ? `${e[be]}px` : '');
				}
				return ne;
			}),
			C = ne => {
				const { active: se } = l;
				return ne
					? e.loop
						? et(se + ne, -1, u.value)
						: et(se + ne, 0, v.value)
					: se;
			},
			p = (ne, se = 0) => {
				let be = ne * h.value;
				e.loop || (be = Math.min(be, -m.value));
				let De = se - be;
				return e.loop || (De = et(De, m.value, 0)), De;
			},
			x = ({ pace: ne = 0, offset: se = 0, emitChange: be }) => {
				if (u.value <= 1) return;
				const { active: De } = l,
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
				(l.active = re),
					(l.offset = ue),
					be && re !== De && t('change', g.value);
			},
			T = () => {
				(l.swiping = !0),
					l.active <= -1
						? x({ pace: u.value })
						: l.active >= u.value && x({ pace: -u.value });
			},
			O = () => {
				T(),
					s.reset(),
					Bn(() => {
						(l.swiping = !1), x({ pace: -1, emitChange: !0 });
					});
			},
			S = () => {
				T(),
					s.reset(),
					Bn(() => {
						(l.swiping = !1), x({ pace: 1, emitChange: !0 });
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
			P = (ne = +e.initialSwipe) => {
				if (!o.value) return;
				const se = () => {
					var be, De;
					if (!ao(o)) {
						const re = {
							width: o.value.offsetWidth,
							height: o.value.offsetHeight,
						};
						(l.rect = re),
							(l.width = +((be = e.width) != null ? be : re.width)),
							(l.height = +((De = e.height) != null ? De : re.height));
					}
					u.value &&
						((ne = Math.min(u.value - 1, ne)), ne === -1 && (ne = u.value - 1)),
						(l.active = ne),
						(l.swiping = !0),
						(l.offset = p(ne)),
						r.forEach(re => {
							re.setOffset(0);
						}),
						k();
				};
				ao(o) ? Te().then(se) : se();
			},
			B = () => P(l.active);
		let X;
		const V = ne => {
				!e.touchable ||
					ne.touches.length > 1 ||
					(s.start(ne), (i = !1), (X = Date.now()), I(), T());
			},
			R = ne => {
				e.touchable &&
					l.swiping &&
					(s.move(ne),
					w.value &&
						((!e.loop &&
							((l.active === 0 && f.value > 0) ||
								(l.active === u.value - 1 && f.value < 0))) ||
							(Me(ne, e.stopPropagation),
							x({ offset: f.value }),
							i || (t('dragStart', { index: g.value }), (i = !0)))));
			},
			N = () => {
				if (!e.touchable || !l.swiping) return;
				const ne = Date.now() - X,
					se = f.value / ne;
				if (
					(Math.abs(se) > 0.25 || Math.abs(f.value) > h.value / 2) &&
					w.value
				) {
					const De = e.vertical ? s.offsetY.value : s.offsetX.value;
					let re = 0;
					e.loop
						? (re = De > 0 ? (f.value > 0 ? -1 : 1) : 0)
						: (re = -Math[f.value > 0 ? 'ceil' : 'floor'](f.value / h.value)),
						x({ pace: re, emitChange: !0 });
				} else f.value && x({ pace: 0 });
				(i = !1), (l.swiping = !1), t('dragEnd', { index: g.value }), k();
			},
			Y = (ne, se = {}) => {
				T(),
					s.reset(),
					Bn(() => {
						let be;
						e.loop && ne === u.value
							? (be = l.active === 0 ? 0 : ne)
							: (be = ne % u.value),
							se.immediate
								? Bn(() => {
										l.swiping = !1;
									})
								: (l.swiping = !1),
							x({ pace: be - l.active, emitChange: !0 });
					});
			},
			me = (ne, se) => {
				const be = se === g.value,
					De = be ? { backgroundColor: e.indicatorColor } : void 0;
				return d(
					'i',
					{ style: De, class: Va('indicator', { active: be }) },
					null,
				);
			},
			ge = () => {
				if (n.indicator)
					return n.indicator({ active: g.value, total: u.value });
				if (e.showIndicators && u.value > 1)
					return d(
						'div',
						{ class: Va('indicators', { vertical: e.vertical }) },
						[Array(u.value).fill('').map(me)],
					);
			};
		return (
			ke({ prev: O, next: S, state: l, resize: B, swipeTo: Y }),
			c({ size: h, props: e, count: u, activeIndicator: g }),
			ee(
				() => e.initialSwipe,
				ne => P(+ne),
			),
			ee(u, () => P(l.active)),
			ee(() => e.autoplay, k),
			ee([Mt, Tt, () => e.width, () => e.height], B),
			ee(fb(), ne => {
				ne === 'visible' ? k() : I();
			}),
			We(P),
			Jt(() => P(l.active)),
			zl(() => P(l.active)),
			Qt(I),
			en(I),
			Ue('touchmove', R, { target: a }),
			() => {
				var ne;
				return d('div', { ref: o, class: Va() }, [
					d(
						'div',
						{
							ref: a,
							style: b.value,
							class: Va('track', { vertical: e.vertical }),
							onTouchstartPassive: V,
							onTouchend: N,
							onTouchcancel: N,
						},
						[(ne = n.default) == null ? void 0 : ne.call(n)],
					),
					ge(),
				]);
			}
		);
	},
});
const Hr = G(Fy),
	[Ny, kc] = W('tabs');
var zy = j({
	name: Ny,
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
			l = () => {
				var s;
				const r = (s = n.default) == null ? void 0 : s.call(n);
				return e.animated || e.swipeable
					? d(
							Hr,
							{
								ref: o,
								loop: !1,
								class: kc('track'),
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
			i = s => {
				const r = o.value;
				r && r.state.active !== s && r.swipeTo(s, { immediate: !e.inited });
			};
		return (
			ee(() => e.currentIndex, i),
			We(() => {
				i(e.currentIndex);
			}),
			ke({ swipeRef: o }),
			() =>
				d(
					'div',
					{ class: kc('content', { animated: e.animated || e.swipeable }) },
					[l()],
				)
		);
	},
});
const [uf, Fa] = W('tabs'),
	Hy = {
		type: Z('line'),
		color: String,
		border: Boolean,
		sticky: Boolean,
		shrink: Boolean,
		active: le(0),
		duration: le(0.3),
		animated: Boolean,
		ellipsis: z,
		swipeable: Boolean,
		scrollspy: Boolean,
		offsetTop: le(0),
		background: String,
		lazyRender: z,
		showHeader: z,
		lineWidth: q,
		lineHeight: q,
		beforeChange: Function,
		swipeThreshold: le(5),
		titleActiveColor: String,
		titleInactiveColor: String,
	},
	df = Symbol(uf);
var jy = j({
	name: uf,
	props: Hy,
	emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
	setup(e, { emit: t, slots: n }) {
		let o, a, l, i, s;
		const r = D(),
			c = D(),
			u = D(),
			h = D(),
			f = No(),
			m = Vo(r),
			[v, y] = ka(),
			{ children: g, linkChildren: w } = rt(df),
			b = He({ inited: !1, position: '', lineStyle: {}, currentIndex: -1 }),
			C = L(() => g.length > +e.swipeThreshold || !e.ellipsis || e.shrink),
			p = L(() => ({ borderColor: e.color, background: e.background })),
			x = (re, ue) => {
				var E;
				return (E = re.name) != null ? E : ue;
			},
			T = L(() => {
				const re = g[b.currentIndex];
				if (re) return x(re, b.currentIndex);
			}),
			O = L(() => Mr(e.offsetTop)),
			S = L(() => (e.sticky ? O.value + o : 0)),
			A = re => {
				const ue = c.value,
					E = v.value;
				if (!C.value || !ue || !E || !E[b.currentIndex]) return;
				const H = E[b.currentIndex].$el,
					F = H.offsetLeft - (ue.offsetWidth - H.offsetWidth) / 2;
				i && i(), (i = Ay(ue, F, re ? 0 : +e.duration));
			},
			I = () => {
				const re = b.inited;
				Te(() => {
					const ue = v.value;
					if (!ue || !ue[b.currentIndex] || e.type !== 'line' || ao(r.value))
						return;
					const E = ue[b.currentIndex].$el,
						{ lineWidth: H, lineHeight: F } = e,
						Q = E.offsetLeft + E.offsetWidth / 2,
						de = {
							width: we(H),
							backgroundColor: e.color,
							transform: `translateX(${Q}px) translateX(-50%)`,
						};
					if ((re && (de.transitionDuration = `${e.duration}s`), Pe(F))) {
						const xe = we(F);
						(de.height = xe), (de.borderRadius = xe);
					}
					b.lineStyle = de;
				});
			},
			k = re => {
				const ue = re < b.currentIndex ? -1 : 1;
				for (; re >= 0 && re < g.length; ) {
					if (!g[re].disabled) return re;
					re += ue;
				}
			},
			P = (re, ue) => {
				const E = k(re);
				if (!Pe(E)) return;
				const H = g[E],
					F = x(H, E),
					Q = b.currentIndex !== null;
				b.currentIndex !== E && ((b.currentIndex = E), ue || A(), I()),
					F !== e.active &&
						(t('update:active', F), Q && t('change', F, H.title)),
					l && !e.scrollspy && Fl(Math.ceil(fc(r.value) - O.value));
			},
			B = (re, ue) => {
				const E = g.find((F, Q) => x(F, Q) === re),
					H = E ? g.indexOf(E) : 0;
				P(H, ue);
			},
			X = (re = !1) => {
				if (e.scrollspy) {
					const ue = g[b.currentIndex].$el;
					if (ue && m.value) {
						const E = fc(ue, m.value) - S.value;
						(a = !0),
							s && s(),
							(s = Oy(m.value, E, re ? 0 : +e.duration, () => {
								a = !1;
							}));
					}
				}
			},
			V = (re, ue, E) => {
				const { title: H, disabled: F } = g[ue],
					Q = x(g[ue], ue);
				F ||
					(Un(e.beforeChange, {
						args: [Q],
						done: () => {
							P(ue), X();
						},
					}),
					qd(re)),
					t('clickTab', { name: Q, title: H, event: E, disabled: F });
			},
			R = re => {
				(l = re.isFixed), t('scroll', re);
			},
			N = re => {
				Te(() => {
					B(re), X(!0);
				});
			},
			Y = () => {
				for (let re = 0; re < g.length; re++) {
					const { top: ue } = Ae(g[re].$el);
					if (ue > S.value) return re === 0 ? 0 : re - 1;
				}
				return g.length - 1;
			},
			me = () => {
				if (e.scrollspy && !a) {
					const re = Y();
					P(re);
				}
			},
			ge = () => {
				if (e.type === 'line' && g.length)
					return d('div', { class: Fa('line'), style: b.lineStyle }, null);
			},
			ne = () => {
				var re, ue, E;
				const { type: H, border: F, sticky: Q } = e,
					de = [
						d(
							'div',
							{
								ref: Q ? void 0 : u,
								class: [Fa('wrap'), { [Nl]: H === 'line' && F }],
							},
							[
								d(
									'div',
									{
										ref: c,
										role: 'tablist',
										class: Fa('nav', [
											H,
											{ shrink: e.shrink, complete: C.value },
										]),
										style: p.value,
										'aria-orientation': 'horizontal',
									},
									[
										(re = n['nav-left']) == null ? void 0 : re.call(n),
										g.map(xe => xe.renderTitle(V)),
										ge(),
										(ue = n['nav-right']) == null ? void 0 : ue.call(n),
									],
								),
							],
						),
						(E = n['nav-bottom']) == null ? void 0 : E.call(n),
					];
				return Q ? d('div', { ref: u }, [de]) : de;
			},
			se = () => {
				I(),
					Te(() => {
						var re, ue;
						A(!0),
							(ue = (re = h.value) == null ? void 0 : re.swipeRef.value) ==
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
				() => g.length,
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
			ke({ resize: se, scrollTo: N }),
			Jt(I),
			zl(I),
			Lo(be),
			lf(r, I),
			Ue('scroll', me, { target: m, passive: !0 }),
			w({
				id: f,
				props: e,
				setLine: I,
				scrollable: C,
				onRendered: De,
				currentName: T,
				setTitleRefs: y,
				scrollIntoView: A,
			}),
			() =>
				d('div', { ref: r, class: Fa([e.type]) }, [
					e.showHeader
						? e.sticky
							? d(
									rf,
									{ container: r.value, offsetTop: O.value, onScroll: R },
									{ default: () => [ne()] },
								)
							: ne()
						: null,
					d(
						zy,
						{
							ref: h,
							count: g.length,
							inited: b.inited,
							animated: e.animated,
							duration: e.duration,
							swipeable: e.swipeable,
							lazyRender: e.lazyRender,
							currentIndex: b.currentIndex,
							onChange: P,
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
const ff = Symbol(),
	Uy = () => mt(ff, null),
	[Wy, Ec] = W('tab'),
	Yy = j({
		name: Wy,
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
							type: l,
							color: i,
							disabled: s,
							isActive: r,
							activeColor: c,
							inactiveColor: u,
						} = e;
					i &&
						l === 'card' &&
						((a.borderColor = i),
						s || (r ? (a.backgroundColor = i) : (a.color = i)));
					const f = r ? c : u;
					return f && (a.color = f), a;
				}),
				o = () => {
					const a = d(
						'span',
						{ class: Ec('text', { ellipsis: !e.scrollable }) },
						[t.title ? t.title() : e.title],
					);
					return e.dot || (Pe(e.badge) && e.badge !== '')
						? d(
								ro,
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
							Ec([
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
	[Ky, qy] = W('swipe-item');
var Gy = j({
	name: Ky,
	setup(e, { slots: t }) {
		let n;
		const o = He({ offset: 0, inited: !1, mounted: !1 }),
			{ parent: a, index: l } = ot(cf);
		if (!a) return;
		const i = L(() => {
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
				const h = a.activeIndicator.value,
					f = a.count.value - 1,
					m = h === 0 && c ? f : h - 1,
					v = h === f && c ? 0 : h + 1;
				return (n = l.value === h || l.value === m || l.value === v), n;
			}),
			r = c => {
				o.offset = c;
			};
		return (
			We(() => {
				Te(() => {
					o.mounted = !0;
				});
			}),
			ke({ setOffset: r }),
			() => {
				var c;
				return d('div', { class: qy(), style: i.value }, [
					s.value ? ((c = t.default) == null ? void 0 : c.call(t)) : null,
				]);
			}
		);
	},
});
const jr = G(Gy),
	[Xy, vi] = W('tab'),
	Zy = he({}, Wn, {
		dot: Boolean,
		name: q,
		badge: q,
		title: String,
		disabled: Boolean,
		titleClass: Ne,
		titleStyle: [String, Object],
		showZeroBadge: z,
	});
var Jy = j({
	name: Xy,
	props: Zy,
	setup(e, { slots: t }) {
		const n = No(),
			o = D(!1),
			a = Ft(),
			{ parent: l, index: i } = ot(df);
		if (!l) return;
		const s = () => {
				var v;
				return (v = e.name) != null ? v : i.value;
			},
			r = () => {
				(o.value = !0),
					l.props.lazyRender &&
						Te(() => {
							l.onRendered(s(), e.title);
						});
			},
			c = L(() => {
				const v = s() === l.currentName.value;
				return v && !o.value && r(), v;
			}),
			u = D(''),
			h = D('');
		Ro(() => {
			const { titleClass: v, titleStyle: y } = e;
			(u.value = v ? El(v) : ''),
				(h.value = y && typeof y != 'string' ? Th(kl(y)) : y);
		});
		const f = v =>
				d(
					Yy,
					_e(
						{
							key: n,
							id: `${l.id}-${i.value}`,
							ref: l.setTitleRefs(i.value),
							style: h.value,
							class: u.value,
							isActive: c.value,
							controls: n,
							scrollable: l.scrollable.value,
							activeColor: l.props.titleActiveColor,
							inactiveColor: l.props.titleInactiveColor,
							onClick: y => v(a.proxy, i.value, y),
						},
						Ie(l.props, ['type', 'color', 'shrink']),
						Ie(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
					),
					{ title: t.title },
				),
			m = D(!c.value);
		return (
			ee(c, v => {
				v
					? (m.value = !1)
					: Bn(() => {
							m.value = !0;
						});
			}),
			ee(
				() => e.title,
				() => {
					l.setLine(), l.scrollIntoView();
				},
			),
			cn(ff, c),
			ke({ id: n, renderTitle: f }),
			() => {
				var v;
				const y = `${l.id}-${i.value}`,
					{ animated: g, swipeable: w, scrollspy: b, lazyRender: C } = l.props;
				if (!t.default && !g) return;
				const p = b || c.value;
				if (g || w)
					return d(
						jr,
						{
							id: n,
							role: 'tabpanel',
							class: vi('panel-wrapper', { inactive: m.value }),
							tabindex: c.value ? 0 : -1,
							'aria-hidden': !c.value,
							'aria-labelledby': y,
						},
						{
							default: () => {
								var O;
								return [
									d('div', { class: vi('panel') }, [
										(O = t.default) == null ? void 0 : O.call(t),
									]),
								];
							},
						},
					);
				const T =
					o.value || b || !C
						? (v = t.default) == null
							? void 0
							: v.call(t)
						: null;
				return Qe(
					d(
						'div',
						{
							id: n,
							role: 'tabpanel',
							class: vi('panel'),
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
const xa = G(Jy),
	Ul = G(jy),
	[hf, gi] = W('picker-group'),
	mf = Symbol(hf),
	Qy = he({ tabs: Ve(), activeTab: le(0), nextStepText: String }, jl);
var e0 = j({
	name: hf,
	props: Qy,
	emits: ['confirm', 'cancel', 'update:activeTab'],
	setup(e, { emit: t, slots: n }) {
		const o = zr(
				() => e.activeTab,
				c => t('update:activeTab', c),
			),
			{ children: a, linkChildren: l } = rt(mf);
		l();
		const i = () => +o.value < e.tabs.length - 1 && e.nextStepText,
			s = () => {
				i()
					? (o.value = +o.value + 1)
					: t(
							'confirm',
							a.map(c => c.confirm()),
						);
			},
			r = () => t('cancel');
		return () => {
			var c, u;
			let h =
				(u = (c = n.default) == null ? void 0 : c.call(n)) == null
					? void 0
					: u
							.filter(m => m.type !== Dt)
							.map(m => (m.type === Je ? m.children : m));
			h && (h = tb(h));
			const f = i() ? e.nextStepText : e.confirmButtonText;
			return d('div', { class: gi() }, [
				d(
					af,
					{
						title: e.title,
						cancelButtonText: e.cancelButtonText,
						confirmButtonText: f,
						onConfirm: s,
						onCancel: r,
					},
					Ie(n, of),
				),
				d(
					Ul,
					{
						active: o.value,
						'onUpdate:active': m => (o.value = m),
						class: gi('tabs'),
						shrink: !0,
						animated: !0,
						lazyRender: !1,
					},
					{
						default: () => [
							e.tabs.map((m, v) =>
								d(
									xa,
									{ title: m, titleClass: gi('tab-title') },
									{ default: () => [h == null ? void 0 : h[v]] },
								),
							),
						],
					},
				),
			]);
		};
	},
});
const Wl = he(
		{
			loading: Boolean,
			readonly: Boolean,
			allowHtml: Boolean,
			optionHeight: le(44),
			showToolbar: z,
			swipeDuration: le(1e3),
			visibleOptionNum: le(6),
		},
		jl,
	),
	t0 = he({}, Wl, {
		columns: Ve(),
		modelValue: Ve(),
		toolbarPosition: Z('top'),
		columnsFieldNames: Object,
	});
var n0 = j({
	name: Sy,
	props: t0,
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
			{ parent: l } = ot(mf),
			{ children: i, linkChildren: s } = rt(nf);
		s();
		const r = L(() => ky(e.columnsFieldNames)),
			c = L(() => Mr(e.optionHeight)),
			u = L(() => Cy(e.columns, r.value)),
			h = L(() => {
				const { columns: k } = e;
				switch (u.value) {
					case 'multiple':
						return k;
					case 'cascade':
						return Ty(k, r.value, a);
					default:
						return [k];
				}
			}),
			f = L(() => h.value.some(k => k.length)),
			m = L(() => h.value.map((k, P) => tr(k, a.value[P], r.value))),
			v = L(() =>
				h.value.map((k, P) =>
					k.findIndex(B => B[r.value.value] === a.value[P]),
				),
			),
			y = (k, P) => {
				if (a.value[k] !== P) {
					const B = a.value.slice(0);
					(B[k] = P), (a.value = B);
				}
			},
			g = () => ({
				selectedValues: a.value.slice(0),
				selectedOptions: m.value,
				selectedIndexes: v.value,
			}),
			w = (k, P) => {
				y(P, k),
					u.value === 'cascade' &&
						a.value.forEach((B, X) => {
							const V = h.value[X];
							Cc(V, B, r.value) ||
								y(X, V.length ? V[0][r.value.value] : void 0);
						}),
					Te(() => {
						t('change', he({ columnIndex: P }, g()));
					});
			},
			b = (k, P) => {
				const B = { columnIndex: P, currentOption: k };
				t('clickOption', he(g(), B)), t('scrollInto', B);
			},
			C = () => {
				i.forEach(P => P.stopMomentum());
				const k = g();
				return (
					Te(() => {
						t('confirm', k);
					}),
					k
				);
			},
			p = () => t('cancel', g()),
			x = () =>
				h.value.map((k, P) =>
					d(
						Py,
						{
							value: a.value[P],
							fields: r.value,
							options: k,
							readonly: e.readonly,
							allowHtml: e.allowHtml,
							optionHeight: c.value,
							swipeDuration: e.swipeDuration,
							visibleOptionNum: e.visibleOptionNum,
							onChange: B => w(B, P),
							onClickOption: B => b(B, P),
							onScrollInto: B => {
								t('scrollInto', { currentOption: B, columnIndex: P });
							},
						},
						{ option: n.option },
					),
				),
			T = k => {
				if (f.value) {
					const P = { height: `${c.value}px` },
						B = { backgroundSize: `100% ${(k - c.value) / 2}px` };
					return [
						d('div', { class: rn('mask'), style: B }, null),
						d('div', { class: [$b, rn('frame')], style: P }, null),
					];
				}
			},
			O = () => {
				const k = c.value * +e.visibleOptionNum,
					P = { height: `${k}px` };
				return d('div', { ref: o, class: rn('columns'), style: P }, [
					x(),
					T(k),
				]);
			},
			S = () => {
				if (e.showToolbar && !l)
					return d(af, _e(Ie(e, Iy), { onConfirm: C, onCancel: p }), Ie(n, of));
			};
		ee(
			h,
			k => {
				k.forEach((P, B) => {
					P.length && !Cc(P, a.value[B], r.value) && y(B, ef(P)[r.value.value]);
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
			Ue('touchmove', Me, { target: o }),
			ke({ confirm: C, getSelectedOptions: () => m.value }),
			() => {
				var k, P;
				return d('div', { class: rn() }, [
					e.toolbarPosition === 'top' ? S() : null,
					e.loading ? d(Nt, { class: rn('loading') }, null) : null,
					(k = n['columns-top']) == null ? void 0 : k.call(n),
					O(),
					(P = n['columns-bottom']) == null ? void 0 : P.call(n),
					e.toolbarPosition === 'bottom' ? S() : null,
				]);
			}
		);
	},
});
const ko = '000000',
	o0 = [
		'title',
		'cancel',
		'confirm',
		'toolbar',
		'columns-top',
		'columns-bottom',
	],
	vf = [
		'title',
		'loading',
		'readonly',
		'optionHeight',
		'swipeDuration',
		'visibleOptionNum',
		'cancelButtonText',
		'confirmButtonText',
	],
	Tn = (e = '', t = ko, n = void 0) => ({ text: e, value: t, children: n });
function a0({ areaList: e, columnsNum: t, columnsPlaceholder: n }) {
	const { city_list: o = {}, county_list: a = {}, province_list: l = {} } = e,
		i = +t > 1,
		s = +t > 2,
		r = () => {
			if (i) return n.length ? [Tn(n[0], ko, s ? [] : void 0)] : [];
		},
		c = new Map();
	Object.keys(l).forEach(f => {
		c.set(f.slice(0, 2), Tn(l[f], f, r()));
	});
	const u = new Map();
	if (i) {
		const f = () => {
			if (s) return n.length ? [Tn(n[1])] : [];
		};
		Object.keys(o).forEach(m => {
			const v = Tn(o[m], m, f());
			u.set(m.slice(0, 4), v);
			const y = c.get(m.slice(0, 2));
			y && y.children.push(v);
		});
	}
	s &&
		Object.keys(a).forEach(f => {
			const m = u.get(f.slice(0, 4));
			m && m.children.push(Tn(a[f], f));
		});
	const h = Array.from(c.values());
	if (n.length) {
		const f = s ? [Tn(n[2])] : void 0,
			m = i ? [Tn(n[1], ko, f)] : void 0;
		h.unshift(Tn(n[0], ko, m));
	}
	return h;
}
const Yl = G(n0),
	[l0, i0] = W('area'),
	r0 = he({}, Ie(Wl, vf), {
		modelValue: String,
		columnsNum: le(3),
		columnsPlaceholder: Ve(),
		areaList: { type: Object, default: () => ({}) },
	});
var s0 = j({
	name: l0,
	props: r0,
	emits: ['change', 'confirm', 'cancel', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D([]),
			a = D(),
			l = L(() => a0(e)),
			i = (...c) => t('change', ...c),
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
					Yl,
					_e(
						{
							ref: a,
							modelValue: o.value,
							'onUpdate:modelValue': c => (o.value = c),
							class: i0(),
							columns: l.value,
							onChange: i,
							onCancel: s,
							onConfirm: r,
						},
						Ie(e, vf),
					),
					Ie(n, o0),
				)
		);
	},
});
const gf = G(s0),
	[c0, uo] = W('cell'),
	Kl = {
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
		valueClass: Ne,
		labelClass: Ne,
		titleClass: Ne,
		titleStyle: null,
		arrowDirection: String,
		required: { type: [Boolean, String], default: null },
		clickable: { type: Boolean, default: null },
	},
	u0 = he({}, Kl, Wn);
var d0 = j({
	name: c0,
	props: u0,
	setup(e, { slots: t }) {
		const n = io(),
			o = () => {
				if (t.label || Pe(e.label))
					return d('div', { class: [uo('label'), e.labelClass] }, [
						t.label ? t.label() : e.label,
					]);
			},
			a = () => {
				var r;
				if (t.title || Pe(e.title)) {
					const c = (r = t.title) == null ? void 0 : r.call(t);
					return Array.isArray(c) && c.length === 0
						? void 0
						: d(
								'div',
								{ class: [uo('title'), e.titleClass], style: e.titleStyle },
								[c || d('span', null, [e.title]), o()],
							);
				}
			},
			l = () => {
				const r = t.value || t.default;
				if (r || Pe(e.value))
					return d('div', { class: [uo('value'), e.valueClass] }, [
						r ? r() : d('span', null, [e.value]),
					]);
			},
			i = () => {
				if (t.icon) return t.icon();
				if (e.icon)
					return d(
						Ce,
						{ name: e.icon, class: uo('left-icon'), classPrefix: e.iconPrefix },
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
					return d(Ce, { name: r, class: uo('right-icon') }, null);
				}
			};
		return () => {
			var r;
			const {
					tag: c,
					size: u,
					center: h,
					border: f,
					isLink: m,
					required: v,
				} = e,
				y = (r = e.clickable) != null ? r : m,
				g = { center: h, required: !!v, clickable: y, borderless: !f };
			return (
				u && (g[u] = !!u),
				d(
					c,
					{
						class: uo(g),
						role: y ? 'button' : void 0,
						tabindex: y ? 0 : void 0,
						onClick: n,
					},
					{
						default: () => {
							var w;
							return [
								i(),
								a(),
								l(),
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
const Ht = G(d0),
	[f0, h0] = W('form'),
	m0 = {
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
var v0 = j({
	name: f0,
	props: m0,
	emits: ['submit', 'failed'],
	setup(e, { emit: t, slots: n }) {
		const { children: o, linkChildren: a } = rt(Hd),
			l = g => (g ? o.filter(w => g.includes(w.name)) : o),
			i = g =>
				new Promise((w, b) => {
					const C = [];
					l(g)
						.reduce(
							(x, T) =>
								x.then(() => {
									if (!C.length)
										return T.validate().then(O => {
											O && C.push(O);
										});
								}),
							Promise.resolve(),
						)
						.then(() => {
							C.length ? b(C) : w();
						});
				}),
			s = g =>
				new Promise((w, b) => {
					const C = l(g);
					Promise.all(C.map(p => p.validate())).then(p => {
						(p = p.filter(Boolean)), p.length ? b(p) : w();
					});
				}),
			r = g => {
				const w = o.find(b => b.name === g);
				return w
					? new Promise((b, C) => {
							w.validate().then(p => {
								p ? C(p) : b();
							});
						})
					: Promise.reject();
			},
			c = g => (typeof g == 'string' ? r(g) : e.validateFirst ? i(g) : s(g)),
			u = g => {
				typeof g == 'string' && (g = [g]),
					l(g).forEach(b => {
						b.resetValidation();
					});
			},
			h = () =>
				o.reduce((g, w) => ((g[w.name] = w.getValidationStatus()), g), {}),
			f = (g, w) => {
				o.some(b => (b.name === g ? (b.$el.scrollIntoView(w), !0) : !1));
			},
			m = () =>
				o.reduce(
					(g, w) => (w.name !== void 0 && (g[w.name] = w.formValue.value), g),
					{},
				),
			v = () => {
				const g = m();
				c()
					.then(() => t('submit', g))
					.catch(w => {
						t('failed', { values: g, errors: w }),
							e.scrollToError && w[0].name && f(w[0].name);
					});
			},
			y = g => {
				Me(g), v();
			};
		return (
			a({ props: e }),
			ke({
				submit: v,
				validate: c,
				getValues: m,
				scrollToField: f,
				resetValidation: u,
				getValidationStatus: h,
			}),
			() => {
				var g;
				return d('form', { class: h0(), onSubmit: y }, [
					(g = n.default) == null ? void 0 : g.call(n),
				]);
			}
		);
	},
});
const Ur = G(v0);
function bf(e) {
	return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function g0(e, t) {
	if (bf(e)) {
		if (t.required) return !1;
		if (t.validateEmpty === !1) return !0;
	}
	return !(t.pattern && !t.pattern.test(String(e)));
}
function b0(e, t) {
	return new Promise(n => {
		const o = t.validator(e, t);
		if (Rr(o)) {
			o.then(n);
			return;
		}
		n(o);
	});
}
function Pc(e, t) {
	const { message: n } = t;
	return Ao(n) ? n(e, t) : n || '';
}
function y0({ target: e }) {
	e.composing = !0;
}
function $c({ target: e }) {
	e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function p0(e, t) {
	const n = _a();
	e.style.height = 'auto';
	let o = e.scrollHeight;
	if (fn(t)) {
		const { maxHeight: a, minHeight: l } = t;
		a !== void 0 && (o = Math.min(o, a)), l !== void 0 && (o = Math.max(o, l));
	}
	o && ((e.style.height = `${o}px`), Fl(n));
}
function w0(e) {
	return e === 'number'
		? { type: 'text', inputmode: 'decimal' }
		: e === 'digit'
			? { type: 'tel', inputmode: 'numeric' }
			: { type: e };
}
function nn(e) {
	return [...e].length;
}
function bi(e, t) {
	return [...e].slice(0, t).join('');
}
const [x0, xt] = W('field'),
	Wr = {
		id: String,
		name: String,
		leftIcon: String,
		rightIcon: String,
		autofocus: Boolean,
		clearable: Boolean,
		maxlength: q,
		formatter: Function,
		clearIcon: Z('clear'),
		modelValue: le(''),
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
	S0 = he({}, Kl, Wr, {
		rows: q,
		type: Z('text'),
		rules: Array,
		autosize: [Boolean, Object],
		labelWidth: q,
		labelClass: Ne,
		labelAlign: String,
		showWordLimit: Boolean,
		errorMessageAlign: String,
		colon: { type: Boolean, default: null },
	});
var C0 = j({
	name: x0,
	props: S0,
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
		const o = No(),
			a = He({ status: 'unvalidated', focused: !1, validateMessage: '' }),
			l = D(),
			i = D(),
			s = D(),
			{ parent: r } = ot(Hd),
			c = () => {
				var E;
				return String((E = e.modelValue) != null ? E : '');
			},
			u = E => {
				if (Pe(e[E])) return e[E];
				if (r && Pe(r.props[E])) return r.props[E];
			},
			h = L(() => {
				const E = u('readonly');
				if (e.clearable && !E) {
					const H = c() !== '',
						F =
							e.clearTrigger === 'always' ||
							(e.clearTrigger === 'focus' && a.focused);
					return H && F;
				}
				return !1;
			}),
			f = L(() => (s.value && n.input ? s.value() : e.modelValue)),
			m = L(() => {
				var E;
				const H = u('required');
				return H === 'auto'
					? (E = e.rules) == null
						? void 0
						: E.some(F => F.required)
					: H;
			}),
			v = E =>
				E.reduce(
					(H, F) =>
						H.then(() => {
							if (a.status === 'failed') return;
							let { value: Q } = f;
							if ((F.formatter && (Q = F.formatter(Q, F)), !g0(Q, F))) {
								(a.status = 'failed'), (a.validateMessage = Pc(Q, F));
								return;
							}
							if (F.validator)
								return bf(Q) && F.validateEmpty === !1
									? void 0
									: b0(Q, F).then(de => {
											de && typeof de == 'string'
												? ((a.status = 'failed'), (a.validateMessage = de))
												: de === !1 &&
													((a.status = 'failed'),
													(a.validateMessage = Pc(Q, F)));
										});
						}),
					Promise.resolve(),
				),
			y = () => {
				(a.status = 'unvalidated'), (a.validateMessage = '');
			},
			g = () =>
				t('endValidate', { status: a.status, message: a.validateMessage }),
			w = (E = e.rules) =>
				new Promise(H => {
					y(),
						E
							? (t('startValidate'),
								v(E).then(() => {
									a.status === 'failed'
										? (H({ name: e.name, message: a.validateMessage }), g())
										: ((a.status = 'passed'), H(), g());
								}))
							: H();
				}),
			b = E => {
				if (r && e.rules) {
					const { validateTrigger: H } = r.props,
						F = ml(H).includes(E),
						Q = e.rules.filter(de =>
							de.trigger ? ml(de.trigger).includes(E) : F,
						);
					Q.length && w(Q);
				}
			},
			C = E => {
				var H;
				const { maxlength: F } = e;
				if (Pe(F) && nn(E) > +F) {
					const Q = c();
					if (Q && nn(Q) === +F) return Q;
					const de = (H = l.value) == null ? void 0 : H.selectionEnd;
					if (a.focused && de) {
						const xe = [...E],
							_ = xe.length - +F;
						return xe.splice(de - _, _), xe.join('');
					}
					return bi(E, +F);
				}
				return E;
			},
			p = (E, H = 'onChange') => {
				const F = E;
				E = C(E);
				const Q = nn(F) - nn(E);
				if (e.type === 'number' || e.type === 'digit') {
					const xe = e.type === 'number';
					E = Ji(E, xe, xe);
				}
				let de = 0;
				if (e.formatter && H === e.formatTrigger) {
					const { formatter: xe, maxlength: _ } = e;
					if (
						((E = xe(E)),
						Pe(_) && nn(E) > +_ && (E = bi(E, +_)),
						l.value && a.focused)
					) {
						const { selectionEnd: $ } = l.value,
							M = bi(F, $);
						de = nn(xe(M)) - nn(M);
					}
				}
				if (l.value && l.value.value !== E)
					if (a.focused) {
						let { selectionStart: xe, selectionEnd: _ } = l.value;
						if (((l.value.value = E), Pe(xe) && Pe(_))) {
							const $ = nn(E);
							Q ? ((xe -= Q), (_ -= Q)) : de && ((xe += de), (_ += de)),
								l.value.setSelectionRange(Math.min(xe, $), Math.min(_, $));
						}
					} else l.value.value = E;
				E !== e.modelValue && t('update:modelValue', E);
			},
			x = E => {
				E.target.composing || p(E.target.value);
			},
			T = () => {
				var E;
				return (E = l.value) == null ? void 0 : E.blur();
			},
			O = () => {
				var E;
				return (E = l.value) == null ? void 0 : E.focus();
			},
			S = () => {
				const E = l.value;
				e.type === 'textarea' && e.autosize && E && p0(E, e.autosize);
			},
			A = E => {
				(a.focused = !0), t('focus', E), Te(S), u('readonly') && T();
			},
			I = E => {
				(a.focused = !1),
					p(c(), 'onBlur'),
					t('blur', E),
					!u('readonly') && (b('onBlur'), Te(S), Dd());
			},
			k = E => t('clickInput', E),
			P = E => t('clickLeftIcon', E),
			B = E => t('clickRightIcon', E),
			X = E => {
				Me(E), t('update:modelValue', ''), t('clear', E);
			},
			V = L(() => {
				if (typeof e.error == 'boolean') return e.error;
				if (r && r.props.showError && a.status === 'failed') return !0;
			}),
			R = L(() => {
				const E = u('labelWidth'),
					H = u('labelAlign');
				if (E && H !== 'top') return { width: we(E) };
			}),
			N = E => {
				E.keyCode === 13 &&
					(!(r && r.props.submitOnEnter) && e.type !== 'textarea' && Me(E),
					e.type === 'search' && T()),
					t('keypress', E);
			},
			Y = () => e.id || `${o}-input`,
			me = () => a.status,
			ge = () => {
				const E = xt('control', [
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
					ref: l,
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
					onChange: $c,
					onKeypress: N,
					onCompositionend: $c,
					onCompositionstart: y0,
				};
				return e.type === 'textarea'
					? d('textarea', H, null)
					: d('input', _e(w0(e.type), H), null);
			},
			ne = () => {
				const E = n['left-icon'];
				if (e.leftIcon || E)
					return d('div', { class: xt('left-icon'), onClick: P }, [
						E
							? E()
							: d(Ce, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
					]);
			},
			se = () => {
				const E = n['right-icon'];
				if (e.rightIcon || E)
					return d('div', { class: xt('right-icon'), onClick: B }, [
						E
							? E()
							: d(Ce, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
					]);
			},
			be = () => {
				if (e.showWordLimit && e.maxlength) {
					const E = nn(c());
					return d('div', { class: xt('word-limit') }, [
						d('span', { class: xt('word-num') }, [E]),
						Pr('/'),
						e.maxlength,
					]);
				}
			},
			De = () => {
				if (r && r.props.showErrorMessage === !1) return;
				const E = e.errorMessage || a.validateMessage;
				if (E) {
					const H = n['error-message'],
						F = u('errorMessageAlign');
					return d('div', { class: xt('error-message', F) }, [
						H ? H({ message: E }) : E,
					]);
				}
			},
			re = () => {
				const E = u('labelWidth'),
					H = u('labelAlign'),
					F = u('colon') ? ':' : '';
				if (n.label) return [n.label(), F];
				if (e.label)
					return d(
						'label',
						{
							id: `${o}-label`,
							for: n.input ? void 0 : Y(),
							onClick: Q => {
								Me(Q), O();
							},
							style: H === 'top' && E ? { width: we(E) } : void 0,
						},
						[e.label + F],
					);
			},
			ue = () => [
				d('div', { class: xt('body') }, [
					ge(),
					h.value &&
						d(Ce, { ref: i, name: e.clearIcon, class: xt('clear') }, null),
					se(),
					n.button && d('div', { class: xt('button') }, [n.button()]),
				]),
				be(),
				De(),
			];
		return (
			ke({
				blur: T,
				focus: O,
				validate: w,
				formValue: f,
				resetValidation: y,
				getValidationStatus: me,
			}),
			cn(Bd, { customValue: s, resetValidation: y, validateWithTrigger: b }),
			ee(
				() => e.modelValue,
				() => {
					p(c()), y(), b('onChange'), Te(S);
				},
			),
			We(() => {
				p(c(), e.formatTrigger), Te(S);
			}),
			Ue('touchstart', X, {
				target: L(() => {
					var E;
					return (E = i.value) == null ? void 0 : E.$el;
				}),
			}),
			() => {
				const E = u('disabled'),
					H = u('labelAlign'),
					F = ne(),
					Q = () => {
						const de = re();
						return H === 'top' ? [F, de].filter(Boolean) : de || [];
					};
				return d(
					Ht,
					{
						size: e.size,
						class: xt({ error: V.value, disabled: E, [`label-${H}`]: H }),
						center: e.center,
						border: e.border,
						isLink: e.isLink,
						clickable: e.clickable,
						titleStyle: R.value,
						valueClass: xt('value'),
						titleClass: [xt('label', [H, { required: m.value }]), e.labelClass],
						arrowDirection: e.arrowDirection,
					},
					{
						icon: F && H !== 'top' ? () => F : null,
						title: Q,
						value: ue,
						extra: n.extra,
					},
				);
			}
		);
	},
});
const un = G(C0);
let Ko = 0;
function T0(e) {
	e
		? (Ko || document.body.classList.add('van-toast--unclickable'), Ko++)
		: Ko &&
			(Ko--, Ko || document.body.classList.remove('van-toast--unclickable'));
}
const [_0, fo] = W('toast'),
	k0 = [
		'show',
		'overlay',
		'teleport',
		'transition',
		'overlayClass',
		'overlayStyle',
		'closeOnClickOverlay',
		'zIndex',
	],
	E0 = {
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
		className: Ne,
		iconPrefix: String,
		transition: Z('van-fade'),
		loadingType: String,
		forbidClick: Boolean,
		overlayClass: Ne,
		overlayStyle: Object,
		closeOnClick: Boolean,
		closeOnClickOverlay: Boolean,
		zIndex: q,
	};
var yf = j({
	name: _0,
	props: E0,
	emits: ['update:show'],
	setup(e, { emit: t, slots: n }) {
		let o,
			a = !1;
		const l = () => {
				const h = e.show && e.forbidClick;
				a !== h && ((a = h), T0(a));
			},
			i = h => t('update:show', h),
			s = () => {
				e.closeOnClick && i(!1);
			},
			r = () => clearTimeout(o),
			c = () => {
				const {
					icon: h,
					type: f,
					iconSize: m,
					iconPrefix: v,
					loadingType: y,
				} = e;
				if (h || f === 'success' || f === 'fail')
					return d(
						Ce,
						{ name: h || f, size: m, class: fo('icon'), classPrefix: v },
						null,
					);
				if (f === 'loading')
					return d(Nt, { class: fo('loading'), size: m, type: y }, null);
			},
			u = () => {
				const { type: h, message: f } = e;
				if (n.message) return d('div', { class: fo('text') }, [n.message()]);
				if (Pe(f) && f !== '')
					return h === 'html'
						? d(
								'div',
								{ key: 0, class: fo('text'), innerHTML: String(f) },
								null,
							)
						: d('div', { class: fo('text') }, [f]);
			};
		return (
			ee(() => [e.show, e.forbidClick], l),
			ee(
				() => [e.show, e.type, e.message, e.duration],
				() => {
					r(),
						e.show &&
							e.duration > 0 &&
							(o = setTimeout(() => {
								i(!1);
							}, e.duration));
				},
			),
			We(l),
			Bo(l),
			() =>
				d(
					zt,
					_e(
						{
							class: [
								fo([
									e.position,
									e.wordBreak === 'normal' ? 'break-normal' : e.wordBreak,
									{ [e.type]: !e.icon },
								]),
								e.className,
							],
							lockScroll: !1,
							onClick: s,
							onClosed: r,
							'onUpdate:show': i,
						},
						Ie(e, k0),
					),
					{ default: () => [c(), u()] },
				)
		);
	},
});
function pf() {
	const e = He({ show: !1 }),
		t = a => {
			e.show = a;
		},
		n = a => {
			he(e, a, { transitionAppear: !0 }), t(!0);
		},
		o = () => t(!1);
	return (
		ke({ open: n, close: o, toggle: t }),
		{ open: n, close: o, state: e, toggle: t }
	);
}
function wf(e) {
	const t = bd(e),
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
const P0 = {
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
let Na = [],
	$0 = !1,
	Ic = he({}, P0);
const I0 = new Map();
function A0(e) {
	return fn(e) ? e : { message: e };
}
function O0() {
	const { instance: e, unmount: t } = wf({
		setup() {
			const n = D(''),
				{ open: o, state: a, close: l, toggle: i } = pf(),
				s = () => {},
				r = () => d(yf, _e(a, { onClosed: s, 'onUpdate:show': i }), null);
			return (
				ee(n, c => {
					a.message = c;
				}),
				(Ft().render = r),
				{ open: o, close: l, message: n }
			);
		},
	});
	return e;
}
function R0() {
	if (!Na.length || $0) {
		const e = O0();
		Na.push(e);
	}
	return Na[Na.length - 1];
}
function nr(e = {}) {
	if (!_t) return {};
	const t = R0(),
		n = A0(e);
	return t.open(he({}, Ic, I0.get(n.type || Ic.type), n)), t;
}
const B0 = G(yf),
	[D0, yi] = W('switch'),
	M0 = {
		size: q,
		loading: Boolean,
		disabled: Boolean,
		modelValue: Ne,
		activeColor: String,
		inactiveColor: String,
		activeValue: { type: Ne, default: !0 },
		inactiveValue: { type: Ne, default: !1 },
	};
var L0 = j({
	name: D0,
	props: M0,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = () => e.modelValue === e.activeValue,
			a = () => {
				if (!e.disabled && !e.loading) {
					const i = o() ? e.inactiveValue : e.activeValue;
					t('update:modelValue', i), t('change', i);
				}
			},
			l = () => {
				if (e.loading) {
					const i = o() ? e.activeColor : e.inactiveColor;
					return d(Nt, { class: yi('loading'), color: i }, null);
				}
				if (n.node) return n.node();
			};
		return (
			jn(() => e.modelValue),
			() => {
				var i;
				const {
						size: s,
						loading: r,
						disabled: c,
						activeColor: u,
						inactiveColor: h,
					} = e,
					f = o(),
					m = { fontSize: we(s), backgroundColor: f ? u : h };
				return d(
					'div',
					{
						role: 'switch',
						class: yi({ on: f, loading: r, disabled: c }),
						style: m,
						tabindex: c ? void 0 : 0,
						'aria-checked': f,
						onClick: a,
					},
					[
						d('div', { class: yi('node') }, [l()]),
						(i = n.background) == null ? void 0 : i.call(n),
					],
				);
			}
		);
	},
});
const Yr = G(L0),
	[V0, Ac] = W('address-edit-detail'),
	Oc = W('address-edit')[2];
var F0 = j({
	name: V0,
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
			l = () => {
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
							class: Ac('search-item'),
							border: !1,
							onClick: () => a(u),
						},
						null,
					),
				);
			},
			i = c => t('blur', c),
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
							class: Ac(),
							rows: e.rows,
							type: 'textarea',
							rules: e.rules,
							label: Oc('addressDetail'),
							border: !o(),
							maxlength: e.maxlength,
							modelValue: e.value,
							placeholder: Oc('addressDetail'),
							onBlur: i,
							onFocus: s,
							'onUpdate:modelValue': r,
						},
						null,
					),
					l(),
				]);
		};
	},
});
const [N0, ho, st] = W('address-edit'),
	xf = {
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
	z0 = {
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
		detailRows: le(1),
		detailMaxlength: le(200),
		areaColumnsPlaceholder: Ve(),
		addressInfo: { type: Object, default: () => he({}, xf) },
		telValidator: { type: Function, default: Ad },
	};
var H0 = j({
	name: N0,
	props: z0,
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
			l = D(!1),
			i = D(!1),
			s = L(() => fn(e.areaList) && Object.keys(e.areaList).length),
			r = L(() => {
				const { province: T, city: O, county: S, areaCode: A } = a;
				if (A) {
					const I = [T, O, S];
					return T && T === O && I.splice(1, 1), I.filter(Boolean).join('/');
				}
				return '';
			}),
			c = L(() => {
				var T;
				return ((T = e.searchResult) == null ? void 0 : T.length) && i.value;
			}),
			u = T => {
				(i.value = T === 'addressDetail'), t('focus', T);
			},
			h = (T, O) => {
				t('change', { key: T, value: O });
			},
			f = L(() => {
				const { validator: T, telValidator: O } = e,
					S = (A, I) => ({
						validator: k => {
							if (T) {
								const P = T(A, k);
								if (P) return P;
							}
							return k ? !0 : I;
						},
					});
				return {
					name: [S('name', st('nameEmpty'))],
					tel: [
						S('tel', st('telInvalid')),
						{ validator: O, message: st('telInvalid') },
					],
					areaCode: [S('areaCode', st('areaEmpty'))],
					addressDetail: [S('addressDetail', st('addressEmpty'))],
				};
			}),
			m = () => t('save', a),
			v = T => {
				(a.addressDetail = T), t('changeDetail', T);
			},
			y = T => {
				(a.province = T[0].text), (a.city = T[1].text), (a.county = T[2].text);
			},
			g = ({ selectedValues: T, selectedOptions: O }) => {
				T.some(S => S === ko)
					? nr(st('areaEmpty'))
					: ((l.value = !1), y(O), t('changeArea', O));
			},
			w = () => t('delete', a),
			b = T => {
				a.areaCode = T || '';
			},
			C = () => {
				setTimeout(() => {
					i.value = !1;
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
								Yr,
								{
									modelValue: a.isDefault,
									'onUpdate:modelValue': O => (a.isDefault = O),
									onChange: O => t('changeDefault', O),
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
								class: ho('default'),
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
					he(a, xf, T),
						Te(() => {
							var O;
							const S = (O = o.value) == null ? void 0 : O.getSelectedOptions();
							S && S.every(A => A && A.value !== ko) && y(S);
						});
				},
				{ deep: !0, immediate: !0 },
			),
			() => {
				const { disableArea: T } = e;
				return d(
					Ur,
					{ class: ho(), onSubmit: m },
					{
						default: () => {
							var O;
							return [
								d('div', { class: ho('fields') }, [
									d(
										un,
										{
											modelValue: a.name,
											'onUpdate:modelValue': [
												S => (a.name = S),
												S => h('name', S),
											],
											clearable: !0,
											label: st('name'),
											rules: f.value.name,
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
												S => h('tel', S),
											],
											clearable: !0,
											type: 'tel',
											label: st('tel'),
											rules: f.value.tel,
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
												rules: e.showArea ? f.value.areaCode : void 0,
												placeholder: e.areaPlaceholder || st('area'),
												onFocus: () => u('areaCode'),
												onClick: () => {
													t('clickArea'), (l.value = !T);
												},
											},
											null,
										),
										[[nt, e.showArea]],
									),
									d(
										F0,
										{
											show: e.showDetail,
											rows: e.detailRows,
											rules: f.value.addressDetail,
											value: a.addressDetail,
											focused: i.value,
											maxlength: e.detailMaxlength,
											searchResult: e.searchResult,
											showSearchResult: e.showSearchResult,
											onBlur: C,
											onFocus: () => u('addressDetail'),
											onInput: v,
											onSelectSearch: S => t('selectSearch', S),
										},
										null,
									),
									(O = n.default) == null ? void 0 : O.call(n),
								]),
								x(),
								Qe(
									d('div', { class: ho('buttons') }, [
										d(
											it,
											{
												block: !0,
												round: !0,
												type: 'primary',
												text: e.saveButtonText || st('save'),
												class: ho('button'),
												loading: e.isSaving,
												nativeType: 'submit',
											},
											null,
										),
										e.showDelete &&
											d(
												it,
												{
													block: !0,
													round: !0,
													class: ho('button'),
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
										show: l.value,
										'onUpdate:show': S => (l.value = S),
										round: !0,
										teleport: 'body',
										position: 'bottom',
										lazyRender: !1,
									},
									{
										default: () => [
											d(
												gf,
												{
													modelValue: a.areaCode,
													'onUpdate:modelValue': S => (a.areaCode = S),
													ref: o,
													loading: !s.value,
													areaList: e.areaList,
													columnsPlaceholder: e.areaColumnsPlaceholder,
													onConfirm: g,
													onCancel: () => {
														l.value = !1;
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
const j0 = G(H0),
	[Sf, U0] = W('radio-group'),
	W0 = {
		shape: String,
		disabled: Boolean,
		iconSize: q,
		direction: String,
		modelValue: Ne,
		checkedColor: String,
	},
	Cf = Symbol(Sf);
var Y0 = j({
	name: Sf,
	props: W0,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt(Cf),
			a = l => t('update:modelValue', l);
		return (
			ee(
				() => e.modelValue,
				l => t('change', l),
			),
			o({ props: e, updateValue: a }),
			jn(() => e.modelValue),
			() => {
				var l;
				return d('div', { class: U0([e.direction]), role: 'radiogroup' }, [
					(l = n.default) == null ? void 0 : l.call(n),
				]);
			}
		);
	},
});
const Kr = G(Y0),
	[K0, Rc] = W('tag'),
	q0 = {
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
var G0 = j({
	name: K0,
	props: q0,
	emits: ['close'],
	setup(e, { slots: t, emit: n }) {
		const o = i => {
				i.stopPropagation(), n('close', i);
			},
			a = () =>
				e.plain
					? { color: e.textColor || e.color, borderColor: e.color }
					: { color: e.textColor, background: e.color },
			l = () => {
				var i;
				const {
						type: s,
						mark: r,
						plain: c,
						round: u,
						size: h,
						closeable: f,
					} = e,
					m = { mark: r, plain: c, round: u };
				h && (m[h] = h);
				const v =
					f &&
					d(Ce, { name: 'cross', class: [Rc('close'), gt], onClick: o }, null);
				return d('span', { style: a(), class: Rc([m, s]) }, [
					(i = t.default) == null ? void 0 : i.call(t),
					v,
				]);
			};
		return () =>
			d(
				Mo,
				{ name: e.closeable ? 'van-fade' : void 0 },
				{ default: () => [e.show ? l() : null] },
			);
	},
});
const ql = G(G0),
	qr = {
		name: Ne,
		disabled: Boolean,
		iconSize: q,
		modelValue: Ne,
		checkedColor: String,
		labelPosition: String,
		labelDisabled: Boolean,
	};
var Tf = j({
	props: he({}, qr, {
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
			a = f => {
				if (e.parent && e.bindGroup) return e.parent.props[f];
			},
			l = L(() => {
				if (e.parent && e.bindGroup) {
					const f = a('disabled') || e.disabled;
					if (e.role === 'checkbox') {
						const m = a('modelValue').length,
							v = a('max'),
							y = v && m >= +v;
						return f || (y && !e.checked);
					}
					return f;
				}
				return e.disabled;
			}),
			i = L(() => a('direction')),
			s = L(() => {
				const f = e.checkedColor || a('checkedColor');
				if (f && e.checked && !l.value)
					return { borderColor: f, backgroundColor: f };
			}),
			r = L(() => e.shape || a('shape') || 'round'),
			c = f => {
				const { target: m } = f,
					v = o.value,
					y = v === m || (v == null ? void 0 : v.contains(m));
				!l.value && (y || !e.labelDisabled) && t('toggle'), t('click', f);
			},
			u = () => {
				var f, m;
				const { bem: v, checked: y, indeterminate: g } = e,
					w = e.iconSize || a('iconSize');
				return d(
					'div',
					{
						ref: o,
						class: v('icon', [
							r.value,
							{ disabled: l.value, checked: y, indeterminate: g },
						]),
						style:
							r.value !== 'dot'
								? { fontSize: we(w) }
								: {
										width: we(w),
										height: we(w),
										borderColor: (f = s.value) == null ? void 0 : f.borderColor,
									},
					},
					[
						n.icon
							? n.icon({ checked: y, disabled: l.value })
							: r.value !== 'dot'
								? d(Ce, { name: g ? 'minus' : 'success', style: s.value }, null)
								: d(
										'div',
										{
											class: v('icon--dot__icon'),
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
			h = () => {
				const { checked: f } = e;
				if (n.default)
					return d(
						'span',
						{ class: e.bem('label', [e.labelPosition, { disabled: l.value }]) },
						[n.default({ checked: f, disabled: l.value })],
					);
			};
		return () => {
			const f = e.labelPosition === 'left' ? [h(), u()] : [u(), h()];
			return d(
				'div',
				{
					role: e.role,
					class: e.bem([
						{ disabled: l.value, 'label-disabled': e.labelDisabled },
						i.value,
					]),
					tabindex: l.value ? void 0 : 0,
					'aria-checked': e.checked,
					onClick: c,
				},
				[f],
			);
		};
	},
});
const X0 = he({}, qr, { shape: String }),
	[Z0, J0] = W('radio');
var Q0 = j({
	name: Z0,
	props: X0,
	emits: ['update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { parent: o } = ot(Cf),
			a = () => (o ? o.props.modelValue : e.modelValue) === e.name,
			l = () => {
				o ? o.updateValue(e.name) : t('update:modelValue', e.name);
			};
		return () =>
			d(
				Tf,
				_e({ bem: J0, role: 'radio', parent: o, checked: a(), onToggle: l }, e),
				Ie(n, ['default', 'icon']),
			);
	},
});
const Gr = G(Q0),
	[ep, mo] = W('address-item');
var tp = j({
	name: ep,
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
						class: mo('edit'),
						onClick: s => {
							s.stopPropagation(), n('edit'), n('click', s);
						},
					},
					null,
				),
			l = () => {
				if (t.tag) return t.tag(e.address);
				if (e.address.isDefault && e.defaultTagText)
					return d(
						ql,
						{ type: 'primary', round: !0, class: mo('tag') },
						{ default: () => [e.defaultTagText] },
					);
			},
			i = () => {
				const { address: s, disabled: r, switchable: c } = e,
					u = [
						d('div', { class: mo('name') }, [`${s.name} ${s.tel}`, l()]),
						d('div', { class: mo('address') }, [s.address]),
					];
				return c && !r
					? d(Gr, { name: s.id, iconSize: 18 }, { default: () => [u] })
					: u;
			};
		return () => {
			var s;
			const { disabled: r } = e;
			return d('div', { class: mo({ disabled: r }), onClick: o }, [
				d(
					Ht,
					{ border: !1, titleClass: mo('title') },
					{ title: i, 'right-icon': a },
				),
				(s = t.bottom) == null
					? void 0
					: s.call(t, he({}, e.address, { disabled: r })),
			]);
		};
	},
});
const [np, za, op] = W('address-list'),
	ap = {
		list: Ve(),
		modelValue: q,
		switchable: z,
		disabledText: String,
		disabledList: Ve(),
		showAddButton: z,
		addButtonText: String,
		defaultTagText: String,
		rightIcon: Z('edit'),
	};
var lp = j({
	name: np,
	props: ap,
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
		const o = (i, s, r) => {
				const c = () => n(r ? 'editDisabled' : 'edit', i, s),
					u = f => n('clickItem', i, s, { event: f }),
					h = () => {
						n(r ? 'selectDisabled' : 'select', i, s),
							r || n('update:modelValue', i.id);
					};
				return d(
					tp,
					{
						key: i.id,
						address: i,
						disabled: r,
						switchable: e.switchable,
						defaultTagText: e.defaultTagText,
						rightIcon: e.rightIcon,
						onEdit: c,
						onClick: u,
						onSelect: h,
					},
					{ bottom: t['item-bottom'], tag: t.tag },
				);
			},
			a = (i, s) => {
				if (i) return i.map((r, c) => o(r, c, s));
			},
			l = () =>
				e.showAddButton
					? d('div', { class: [za('bottom'), 'van-safe-area-bottom'] }, [
							d(
								it,
								{
									round: !0,
									block: !0,
									type: 'primary',
									text: e.addButtonText || op('add'),
									class: za('add'),
									onClick: () => n('add'),
								},
								null,
							),
						])
					: void 0;
		return () => {
			var i, s;
			const r = a(e.list),
				c = a(e.disabledList, !0),
				u =
					e.disabledText &&
					d('div', { class: za('disabled-text') }, [e.disabledText]);
			return d('div', { class: za() }, [
				(i = t.top) == null ? void 0 : i.call(t),
				d(Kr, { modelValue: e.modelValue }, { default: () => [r] }),
				u,
				c,
				(s = t.default) == null ? void 0 : s.call(t),
				l(),
			]);
		};
	},
});
const ip = G(lp);
function rp(e, t) {
	let n = null,
		o = 0;
	return function (...a) {
		if (n) return;
		const l = Date.now() - o,
			i = () => {
				(o = Date.now()), (n = !1), e.apply(this, a);
			};
		l >= t ? i() : (n = setTimeout(i, t));
	};
}
const [sp, pi] = W('back-top'),
	cp = {
		right: q,
		bottom: q,
		zIndex: q,
		target: [String, Object],
		offset: le(200),
		immediate: Boolean,
		teleport: { type: [String, Object], default: 'body' },
	};
var up = j({
	name: sp,
	inheritAttrs: !1,
	props: cp,
	emits: ['click'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		let a = !1;
		const l = D(!1),
			i = D(),
			s = D(),
			r = L(() =>
				he(yn(e.zIndex), { right: we(e.right), bottom: we(e.bottom) }),
			),
			c = m => {
				var v;
				t('click', m),
					(v = s.value) == null ||
						v.scrollTo({ top: 0, behavior: e.immediate ? 'auto' : 'smooth' });
			},
			u = () => {
				l.value = s.value ? hn(s.value) >= +e.offset : !1;
			},
			h = () => {
				const { target: m } = e;
				if (typeof m == 'string') {
					const v = document.querySelector(m);
					if (v) return v;
				} else return m;
			},
			f = () => {
				_t &&
					Te(() => {
						(s.value = e.target ? h() : Br(i.value)), u();
					});
			};
		return (
			Ue('scroll', rp(u, 100), { target: s }),
			We(f),
			Jt(() => {
				a && ((l.value = !0), (a = !1));
			}),
			Qt(() => {
				l.value && e.teleport && ((l.value = !1), (a = !0));
			}),
			ee(() => e.target, f),
			() => {
				const m = d(
					'div',
					_e(
						{
							ref: e.teleport ? void 0 : i,
							class: pi({ active: l.value }),
							style: r.value,
							onClick: c,
						},
						o,
					),
					[
						n.default
							? n.default()
							: d(Ce, { name: 'back-top', class: pi('icon') }, null),
					],
				);
				return e.teleport
					? [
							d('div', { ref: i, class: pi('placeholder') }, null),
							d(Do, { to: e.teleport }, { default: () => [m] }),
						]
					: m;
			}
		);
	},
});
const dp = G(up);
var fp = (e, t, n) =>
	new Promise((o, a) => {
		var l = r => {
				try {
					s(n.next(r));
				} catch (c) {
					a(c);
				}
			},
			i = r => {
				try {
					s(n.throw(r));
				} catch (c) {
					a(c);
				}
			},
			s = r => (r.done ? o(r.value) : Promise.resolve(r.value).then(l, i));
		s((n = n.apply(e, t)).next());
	});
const hp = {
		top: le(10),
		rows: le(4),
		duration: le(4e3),
		autoPlay: z,
		delay: Ke(300),
		modelValue: Ve(),
	},
	[mp, Bc] = W('barrage');
var vp = j({
	name: mp,
	props: hp,
	emits: ['update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Bc('item'),
			l = D(0),
			i = [],
			s = (y, g = e.delay) => {
				const w = document.createElement('span');
				return (
					(w.className = a),
					(w.innerText = String(y)),
					(w.style.animationDuration = `${e.duration}ms`),
					(w.style.animationDelay = `${g}ms`),
					(w.style.animationName = 'van-barrage'),
					(w.style.animationTimingFunction = 'linear'),
					w
				);
			},
			r = D(!0),
			c = D(e.autoPlay),
			u = ({ id: y, text: g }, w) => {
				var b;
				const C = s(g, r.value ? w * e.delay : void 0);
				!e.autoPlay &&
					c.value === !1 &&
					(C.style.animationPlayState = 'paused'),
					(b = o.value) == null || b.append(C),
					l.value++;
				const p = ((l.value - 1) % +e.rows) * C.offsetHeight + +e.top;
				(C.style.top = `${p}px`),
					(C.dataset.id = String(y)),
					i.push(C),
					C.addEventListener('animationend', () => {
						t(
							'update:modelValue',
							[...e.modelValue].filter(x => String(x.id) !== C.dataset.id),
						);
					});
			},
			h = (y, g) => {
				const w = new Map(g.map(b => [b.id, b]));
				y.forEach((b, C) => {
					w.has(b.id) ? w.delete(b.id) : u(b, C);
				}),
					w.forEach(b => {
						const C = i.findIndex(p => p.dataset.id === String(b.id));
						C > -1 && (i[C].remove(), i.splice(C, 1));
					}),
					(r.value = !1);
			};
		ee(
			() => e.modelValue.slice(),
			(y, g) => h(y ?? [], g ?? []),
			{ deep: !0 },
		);
		const f = D({});
		return (
			We(() =>
				fp(this, null, function* () {
					var y;
					(f.value['--move-distance'] =
						`-${(y = o.value) == null ? void 0 : y.offsetWidth}px`),
						yield Te(),
						h(e.modelValue, []);
				}),
			),
			ke({
				play: () => {
					(c.value = !0),
						i.forEach(y => {
							y.style.animationPlayState = 'running';
						});
				},
				pause: () => {
					(c.value = !1),
						i.forEach(y => {
							y.style.animationPlayState = 'paused';
						});
				},
			}),
			() => {
				var y;
				return d('div', { class: Bc(), ref: o, style: f.value }, [
					(y = n.default) == null ? void 0 : y.call(n),
				]);
			}
		);
	},
});
const gp = G(vp),
	[bp, Xe, dn] = W('calendar'),
	yp = e => dn('monthTitle', e.getFullYear(), e.getMonth() + 1);
function or(e, t) {
	const n = e.getFullYear(),
		o = t.getFullYear();
	if (n === o) {
		const a = e.getMonth(),
			l = t.getMonth();
		return a === l ? 0 : a > l ? 1 : -1;
	}
	return n > o ? 1 : -1;
}
function yt(e, t) {
	const n = or(e, t);
	if (n === 0) {
		const o = e.getDate(),
			a = t.getDate();
		return o === a ? 0 : o > a ? 1 : -1;
	}
	return n;
}
const yl = e => new Date(e),
	Dc = e => (Array.isArray(e) ? e.map(yl) : yl(e));
function Xr(e, t) {
	const n = yl(e);
	return n.setDate(n.getDate() + t), n;
}
const ar = e => Xr(e, -1),
	_f = e => Xr(e, 1),
	lr = () => {
		const e = new Date();
		return e.setHours(0, 0, 0, 0), e;
	};
function pp(e) {
	const t = e[0].getTime();
	return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1;
}
const kf = he({}, Wl, {
		modelValue: Ve(),
		filter: Function,
		formatter: { type: Function, default: (e, t) => t },
	}),
	Ef = Object.keys(Wl);
function wp(e, t) {
	if (e < 0) return [];
	const n = Array(e);
	let o = -1;
	for (; ++o < e; ) n[o] = t(o);
	return n;
}
const Pf = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
	Eo = (e, t, n, o, a, l) => {
		const i = wp(t - e + 1, s => {
			const r = Ot(e + s);
			return o(n, { text: r, value: r });
		});
		return a ? a(n, i, l) : i;
	},
	$f = (e, t) =>
		e.map((n, o) => {
			const a = t[o];
			if (a.length) {
				const l = +a[0].value,
					i = +a[a.length - 1].value;
				return Ot(et(+n, l, i));
			}
			return n;
		}),
	[xp] = W('calendar-day');
var Sp = j({
	name: xp,
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
				const { item: c, index: u, color: h, offset: f, rowHeight: m } = e,
					v = { height: m };
				if (c.type === 'placeholder') return (v.width = '100%'), v;
				if ((u === 0 && (v.marginLeft = `${(100 * f) / 7}%`), h))
					switch (c.type) {
						case 'end':
						case 'start':
						case 'start-end':
						case 'multiple-middle':
						case 'multiple-selected':
							v.background = h;
							break;
						case 'middle':
							v.color = h;
							break;
					}
				return (
					f + (((r = c.date) == null ? void 0 : r.getDate()) || 1) > 28 &&
						(v.marginBottom = 0),
					v
				);
			}),
			a = () => {
				e.item.type !== 'disabled'
					? t('click', e.item)
					: t('clickDisabledDate', e.item);
			},
			l = () => {
				const { topInfo: r } = e.item;
				if (r || n['top-info'])
					return d('div', { class: Xe('top-info') }, [
						n['top-info'] ? n['top-info'](e.item) : r,
					]);
			},
			i = () => {
				const { bottomInfo: r } = e.item;
				if (r || n['bottom-info'])
					return d('div', { class: Xe('bottom-info') }, [
						n['bottom-info'] ? n['bottom-info'](e.item) : r,
					]);
			},
			s = () => {
				const { item: r, color: c, rowHeight: u } = e,
					{ type: h, text: f } = r,
					m = [l(), f, i()];
				return h === 'selected'
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
const [Cp] = W('calendar-month'),
	Tp = {
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
var _p = j({
	name: Cp,
	props: Tp,
	emits: ['click', 'clickDisabledDate'],
	setup(e, { emit: t, slots: n }) {
		const [o, a] = ob(),
			l = D(),
			i = D(),
			s = Wd(i),
			r = L(() => yp(e.date)),
			c = L(() => we(e.rowHeight)),
			u = L(() => {
				const I = e.date.getDay();
				return e.firstDayOfWeek ? (I + 7 - e.firstDayOfWeek) % 7 : I;
			}),
			h = L(() => Pf(e.date.getFullYear(), e.date.getMonth() + 1)),
			f = L(() => o.value || !e.lazyRender),
			m = () => r.value,
			v = I => {
				const k = P => e.currentDate.some(B => yt(B, P) === 0);
				if (k(I)) {
					const P = ar(I),
						B = _f(I),
						X = k(P),
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
				const [k, P] = e.currentDate;
				if (!k) return '';
				const B = yt(I, k);
				if (!P) return B === 0 ? 'start' : '';
				const X = yt(I, P);
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
			g = I => {
				const { type: k, minDate: P, maxDate: B, currentDate: X } = e;
				if (yt(I, P) < 0 || yt(I, B) > 0) return 'disabled';
				if (X === null) return '';
				if (Array.isArray(X)) {
					if (k === 'multiple') return v(I);
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
				if (e.showMark && f.value)
					return d('div', { class: Xe('month-mark') }, [e.date.getMonth() + 1]);
			},
			p = L(() => {
				const I = Math.ceil((h.value + u.value) / 7);
				return Array(I).fill({ type: 'placeholder' });
			}),
			x = L(() => {
				const I = [],
					k = e.date.getFullYear(),
					P = e.date.getMonth();
				for (let B = 1; B <= h.value; B++) {
					const X = new Date(k, P, B),
						V = g(X);
					let R = { date: X, type: V, text: B, bottomInfo: w(V) };
					e.formatter && (R = e.formatter(R)), I.push(R);
				}
				return I;
			}),
			T = L(() => x.value.filter(I => I.type === 'disabled')),
			O = (I, k) => {
				if (l.value) {
					const P = Ae(l.value),
						B = p.value.length,
						V = ((Math.ceil((k.getDate() + u.value) / 7) - 1) * P.height) / B;
					vl(I, P.top + V + I.scrollTop - Ae(I).top);
				}
			},
			S = (I, k) =>
				d(
					Sp,
					{
						item: I,
						index: k,
						color: e.color,
						offset: u.value,
						rowHeight: c.value,
						onClick: P => t('click', P),
						onClickDisabledDate: P => t('clickDisabledDate', P),
					},
					Ie(n, ['top-info', 'bottom-info']),
				),
			A = () =>
				d('div', { ref: l, role: 'grid', class: Xe('days') }, [
					C(),
					(f.value ? x : p).value.map(S),
				]);
		return (
			ke({
				getTitle: m,
				getHeight: () => s.value,
				setVisible: a,
				scrollToDate: O,
				disabledDays: T,
			}),
			() => d('div', { class: Xe('month'), ref: i }, [b(), A()])
		);
	},
});
const [kp] = W('calendar-header');
var Ep = j({
	name: kp,
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
			l = () => {
				if (e.showSubtitle) {
					const s = t.subtitle
						? t.subtitle({ date: e.date, text: e.subtitle })
						: e.subtitle;
					return d('div', { class: Xe('header-subtitle'), onClick: a }, [s]);
				}
			},
			i = () => {
				const { firstDayOfWeek: s } = e,
					r = dn('weekdays'),
					c = [...r.slice(s, 7), ...r.slice(0, s)];
				return d('div', { class: Xe('weekdays') }, [
					c.map(u => d('span', { class: Xe('weekday') }, [u])),
				]);
			};
		return () => d('div', { class: Xe('header') }, [o(), l(), i()]);
	},
});
const Pp = {
	show: Boolean,
	type: Z('single'),
	title: String,
	color: String,
	round: z,
	readonly: Boolean,
	poppable: z,
	maxRange: le(null),
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
	minDate: { type: Date, validator: wa, default: lr },
	maxDate: {
		type: Date,
		validator: wa,
		default: () => {
			const e = lr();
			return new Date(e.getFullYear(), e.getMonth() + 6, e.getDate());
		},
	},
	firstDayOfWeek: { type: q, default: 0, validator: e => e >= 0 && e <= 6 },
};
var $p = j({
	name: bp,
	props: Pp,
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
		const o = (V, R = e.minDate, N = e.maxDate) =>
				yt(V, R) === -1 ? R : yt(V, N) === 1 ? N : V,
			a = (V = e.defaultDate) => {
				const { type: R, minDate: N, maxDate: Y, allowSameDay: me } = e;
				if (V === null) return V;
				const ge = lr();
				if (R === 'range') {
					Array.isArray(V) || (V = []);
					const ne = o(V[0] || ge, N, me ? Y : ar(Y)),
						se = o(V[1] || ge, me ? N : _f(N));
					return [ne, se];
				}
				return R === 'multiple'
					? Array.isArray(V)
						? V.map(ne => o(ne))
						: [o(ge)]
					: ((!V || Array.isArray(V)) && (V = ge), o(V));
			};
		let l;
		const i = D(),
			s = D({ textFn: () => '', date: void 0 }),
			r = D(a()),
			[c, u] = ka(),
			h = L(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
			f = L(() => {
				const V = [],
					R = new Date(e.minDate);
				R.setDate(1);
				do V.push(new Date(R)), R.setMonth(R.getMonth() + 1);
				while (or(R, e.maxDate) !== 1);
				return V;
			}),
			m = L(() => {
				if (r.value) {
					if (e.type === 'range') return !r.value[0] || !r.value[1];
					if (e.type === 'multiple') return !r.value.length;
				}
				return !r.value;
			}),
			v = () => r.value,
			y = () => {
				const V = hn(i.value),
					R = V + l,
					N = f.value.map((se, be) => c.value[be].getHeight()),
					Y = N.reduce((se, be) => se + be, 0);
				if (R > Y && V > 0) return;
				let me = 0,
					ge;
				const ne = [-1, -1];
				for (let se = 0; se < f.value.length; se++) {
					const be = c.value[se];
					me <= R &&
						me + N[se] >= V &&
						((ne[1] = se),
						ge || ((ge = be), (ne[0] = se)),
						c.value[se].showed ||
							((c.value[se].showed = !0),
							t('monthShow', { date: be.date, title: be.getTitle() }))),
						(me += N[se]);
				}
				f.value.forEach((se, be) => {
					const De = be >= ne[0] - 1 && be <= ne[1] + 1;
					c.value[be].setVisible(De);
				}),
					ge && (s.value = { textFn: ge.getTitle, date: ge.date });
			},
			g = V => {
				lt(() => {
					f.value.some((R, N) =>
						or(R, V) === 0
							? (i.value && c.value[N].scrollToDate(i.value, V), !0)
							: !1,
					),
						y();
				});
			},
			w = () => {
				if (!(e.poppable && !e.show))
					if (r.value) {
						const V = e.type === 'single' ? r.value : r.value[0];
						wa(V) && g(V);
					} else lt(y);
			},
			b = () => {
				(e.poppable && !e.show) ||
					(lt(() => {
						l = Math.floor(Ae(i).height);
					}),
					w());
			},
			C = (V = a()) => {
				(r.value = V), w();
			},
			p = V => {
				const { maxRange: R, rangePrompt: N, showRangePrompt: Y } = e;
				return R && pp(V) > +R
					? (Y && nr(N || dn('rangePrompt', R)), t('overRange'), !1)
					: !0;
			},
			x = () => {
				var V;
				return t('confirm', (V = r.value) != null ? V : Dc(r.value));
			},
			T = (V, R) => {
				const N = Y => {
					(r.value = Y), t('select', Dc(Y));
				};
				if (R && e.type === 'range' && !p(V)) {
					N([V[0], Xr(V[0], +e.maxRange - 1)]);
					return;
				}
				N(V), R && !e.showConfirm && x();
			},
			O = (V, R, N) => {
				var Y;
				return (Y = V.find(
					me => yt(R, me.date) === -1 && yt(me.date, N) === -1,
				)) == null
					? void 0
					: Y.date;
			},
			S = L(() =>
				c.value.reduce((V, R) => {
					var N, Y;
					return (
						V.push(
							...((Y = (N = R.disabledDays) == null ? void 0 : N.value) != null
								? Y
								: []),
						),
						V
					);
				}, []),
			),
			A = V => {
				if (e.readonly || !V.date) return;
				const { date: R } = V,
					{ type: N } = e;
				if (N === 'range') {
					if (!r.value) {
						T([R]);
						return;
					}
					const [Y, me] = r.value;
					if (Y && !me) {
						const ge = yt(R, Y);
						if (ge === 1) {
							const ne = O(S.value, Y, R);
							if (ne) {
								const se = ar(ne);
								yt(Y, se) === -1 ? T([Y, se]) : T([R]);
							} else T([Y, R], !0);
						} else ge === -1 ? T([R]) : e.allowSameDay && T([R, R], !0);
					} else T([R]);
				} else if (N === 'multiple') {
					if (!r.value) {
						T([R]);
						return;
					}
					const Y = r.value,
						me = Y.findIndex(ge => yt(ge, R) === 0);
					if (me !== -1) {
						const [ge] = Y.splice(me, 1);
						t('unselect', yl(ge));
					} else
						e.maxRange && Y.length >= +e.maxRange
							? nr(e.rangePrompt || dn('rangePrompt', e.maxRange))
							: T([...Y, R]);
				} else T(R, !0);
			},
			I = V => t('update:show', V),
			k = (V, R) => {
				const N = R !== 0 || !e.showSubtitle;
				return d(
					_p,
					_e(
						{
							ref: u(R),
							date: V,
							currentDate: r.value,
							showMonthTitle: N,
							firstDayOfWeek: h.value,
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
			P = () => {
				if (n.footer) return n.footer();
				if (e.showConfirm) {
					const V = n['confirm-text'],
						R = m.value,
						N = R ? e.confirmDisabledText : e.confirmText;
					return d(
						it,
						{
							round: !0,
							block: !0,
							type: 'primary',
							color: e.color,
							class: Xe('confirm'),
							disabled: R,
							nativeType: 'button',
							onClick: x,
						},
						{ default: () => [V ? V({ disabled: R }) : N || dn('confirm')] },
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
					[P()],
				),
			X = () => {
				const V = s.value.textFn();
				return d('div', { class: Xe() }, [
					d(
						Ep,
						{
							date: s.value.date,
							title: e.title,
							subtitle: V,
							showTitle: e.showTitle,
							showSubtitle: e.showSubtitle,
							firstDayOfWeek: h.value,
							onClickSubtitle: R => t('clickSubtitle', R),
						},
						Ie(n, ['title', 'subtitle']),
					),
					d('div', { ref: i, class: Xe('body'), onScroll: y }, [
						f.value.map(k),
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
			ke({ reset: C, scrollToDate: g, getSelectedDate: v }),
			Lo(b),
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
const Ip = G($p),
	[Ap, vo] = W('image'),
	Op = {
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
var Rp = j({
	name: Ap,
	props: Op,
	emits: ['load', 'error'],
	setup(e, { emit: t, slots: n }) {
		const o = D(!1),
			a = D(!0),
			l = D(),
			{ $Lazyload: i } = Ft().proxy,
			s = L(() => {
				const g = { width: we(e.width), height: we(e.height) };
				return (
					Pe(e.radius) &&
						((g.overflow = 'hidden'), (g.borderRadius = we(e.radius))),
					g
				);
			});
		ee(
			() => e.src,
			() => {
				(o.value = !1), (a.value = !0);
			},
		);
		const r = g => {
				a.value && ((a.value = !1), t('load', g));
			},
			c = () => {
				const g = new Event('load');
				Object.defineProperty(g, 'target', { value: l.value, enumerable: !0 }),
					r(g);
			},
			u = g => {
				(o.value = !0), (a.value = !1), t('error', g);
			},
			h = (g, w, b) =>
				b
					? b()
					: d(
							Ce,
							{
								name: g,
								size: e.iconSize,
								class: w,
								classPrefix: e.iconPrefix,
							},
							null,
						),
			f = () => {
				if (a.value && e.showLoading)
					return d('div', { class: vo('loading') }, [
						h(e.loadingIcon, vo('loading-icon'), n.loading),
					]);
				if (o.value && e.showError)
					return d('div', { class: vo('error') }, [
						h(e.errorIcon, vo('error-icon'), n.error),
					]);
			},
			m = () => {
				if (o.value || !e.src) return;
				const g = {
					alt: e.alt,
					class: vo('img'),
					style: { objectFit: e.fit, objectPosition: e.position },
					crossorigin: e.crossorigin,
					referrerpolicy: e.referrerpolicy,
				};
				return e.lazyLoad
					? Qe(d('img', _e({ ref: l }, g), null), [[fm('lazy'), e.src]])
					: d(
							'img',
							_e({ ref: l, src: e.src, onLoad: r, onError: u }, g),
							null,
						);
			},
			v = ({ el: g }) => {
				const w = () => {
					g === l.value && a.value && c();
				};
				l.value ? w() : Te(w);
			},
			y = ({ el: g }) => {
				g === l.value && !o.value && u();
			};
		return (
			i &&
				_t &&
				(i.$on('loaded', v),
				i.$on('error', y),
				en(() => {
					i.$off('loaded', v), i.$off('error', y);
				})),
			We(() => {
				Te(() => {
					var g;
					(g = l.value) != null && g.complete && !e.lazyLoad && c();
				});
			}),
			() => {
				var g;
				return d(
					'div',
					{ class: vo({ round: e.round, block: e.block }), style: s.value },
					[m(), f(), (g = n.default) == null ? void 0 : g.call(n)],
				);
			}
		);
	},
});
const Gl = G(Rp),
	[Bp, ct] = W('card'),
	Dp = {
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
var Mp = j({
	name: Bp,
	props: Dp,
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
									ql,
									{ mark: !0, type: 'primary' },
									{ default: () => [e.tag] },
								),
					]);
			},
			l = () =>
				t.thumb
					? t.thumb()
					: d(
							Gl,
							{
								src: e.thumb,
								fit: 'cover',
								width: '100%',
								height: '100%',
								lazyLoad: e.lazyLoad,
							},
							null,
						),
			i = () => {
				if (t.thumb || e.thumb)
					return d(
						'a',
						{
							href: e.thumbLink,
							class: ct('thumb'),
							onClick: c => n('clickThumb', c),
						},
						[l(), a()],
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
					Pr('.'),
					d('span', { class: ct('price-decimal') }, [c[1]]),
				]);
			};
		return () => {
			var c, u, h;
			const f = t.num || Pe(e.num),
				m = t.price || Pe(e.price),
				v = t['origin-price'] || Pe(e.originPrice),
				y = f || m || v || t.bottom,
				g = m && d('div', { class: ct('price') }, [t.price ? t.price() : r()]),
				w =
					v &&
					d('div', { class: ct('origin-price') }, [
						t['origin-price']
							? t['origin-price']()
							: `${e.currency} ${e.originPrice}`,
					]),
				b =
					f && d('div', { class: ct('num') }, [t.num ? t.num() : `x${e.num}`]),
				C = t.footer && d('div', { class: ct('footer') }, [t.footer()]),
				p =
					y &&
					d('div', { class: ct('bottom') }, [
						(c = t['price-top']) == null ? void 0 : c.call(t),
						g,
						w,
						b,
						(u = t.bottom) == null ? void 0 : u.call(t),
					]);
			return d('div', { class: ct() }, [
				d('div', { class: ct('header') }, [
					i(),
					d('div', { class: ct('content', { centered: e.centered }) }, [
						d('div', null, [
							o(),
							s(),
							(h = t.tags) == null ? void 0 : h.call(t),
						]),
						p,
					]),
				]),
				C,
			]);
		};
	},
});
const Lp = G(Mp),
	[Vp, on, Fp] = W('cascader'),
	Np = {
		title: String,
		options: Ve(),
		closeable: z,
		swipeable: z,
		closeIcon: Z('cross'),
		showHeader: z,
		modelValue: q,
		fieldNames: Object,
		placeholder: String,
		activeColor: String,
	};
var zp = j({
	name: Vp,
	props: Np,
	emits: ['close', 'change', 'finish', 'clickTab', 'update:modelValue'],
	setup(e, { slots: t, emit: n }) {
		const o = D([]),
			a = D(0),
			[l, i] = ka(),
			{
				text: s,
				value: r,
				children: c,
			} = he(
				{ text: 'text', value: 'value', children: 'children' },
				e.fieldNames,
			),
			u = (x, T) => {
				for (const O of x) {
					if (O[r] === T) return [O];
					if (O[c]) {
						const S = u(O[c], T);
						if (S) return [O, ...S];
					}
				}
			},
			h = () => {
				const { options: x, modelValue: T } = e;
				if (T !== void 0) {
					const O = u(x, T);
					if (O) {
						let S = x;
						(o.value = O.map(A => {
							const I = { options: S, selected: A },
								k = S.find(P => P[r] === A[r]);
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
			f = (x, T) => {
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
				const O = o.value.map(A => A.selected).filter(Boolean);
				n('update:modelValue', x[r]);
				const S = { value: x[r], tabIndex: T, selectedOptions: O };
				n('change', S), x[c] || n('finish', S);
			},
			m = () => n('close'),
			v = ({ name: x, title: T }) => n('clickTab', x, T),
			y = () =>
				e.showHeader
					? d('div', { class: on('header') }, [
							d('h2', { class: on('title') }, [t.title ? t.title() : e.title]),
							e.closeable
								? d(
										Ce,
										{
											name: e.closeIcon,
											class: [on('close-icon'), gt],
											onClick: m,
										},
										null,
									)
								: null,
						])
					: null,
			g = (x, T, O) => {
				const { disabled: S } = x,
					A = !!(T && x[r] === T[r]),
					I = x.color || (A ? e.activeColor : void 0),
					k = t.option
						? t.option({ option: x, selected: A })
						: d('span', null, [x[s]]);
				return d(
					'li',
					{
						ref: A ? i(O) : void 0,
						role: 'menuitemradio',
						class: [on('option', { selected: A, disabled: S }), x.className],
						style: { color: I },
						tabindex: S ? void 0 : A ? 0 : -1,
						'aria-checked': A,
						'aria-disabled': S || void 0,
						onClick: () => f(x, O),
					},
					[
						k,
						A
							? d(Ce, { name: 'success', class: on('selected-icon') }, null)
							: null,
					],
				);
			},
			w = (x, T, O) =>
				d('ul', { role: 'menu', class: on('options') }, [
					x.map(S => g(S, T, O)),
				]),
			b = (x, T) => {
				const { options: O, selected: S } = x,
					A = e.placeholder || Fp('select'),
					I = S ? S[s] : A;
				return d(
					xa,
					{ title: I, titleClass: on('tab', { unselected: !S }) },
					{
						default: () => {
							var k, P;
							return [
								(k = t['options-top']) == null
									? void 0
									: k.call(t, { tabIndex: T }),
								w(O, S, T),
								(P = t['options-bottom']) == null
									? void 0
									: P.call(t, { tabIndex: T }),
							];
						},
					},
				);
			},
			C = () =>
				d(
					Ul,
					{
						active: a.value,
						'onUpdate:active': x => (a.value = x),
						shrink: !0,
						animated: !0,
						class: on('tabs'),
						color: e.activeColor,
						swipeable: e.swipeable,
						onClickTab: v,
					},
					{ default: () => [o.value.map(b)] },
				),
			p = x => {
				const T = x.parentElement;
				T &&
					(T.scrollTop = x.offsetTop - (T.offsetHeight - x.offsetHeight) / 2);
			};
		return (
			h(),
			ee(a, x => {
				const T = l.value[x];
				T && p(T);
			}),
			ee(() => e.options, h, { deep: !0 }),
			ee(
				() => e.modelValue,
				x => {
					(x !== void 0 &&
						o.value
							.map(O => {
								var S;
								return (S = O.selected) == null ? void 0 : S[r];
							})
							.includes(x)) ||
						h();
				},
			),
			() => d('div', { class: on() }, [y(), C()])
		);
	},
});
const Hp = G(zp),
	[jp, Mc] = W('cell-group'),
	Up = { title: String, inset: Boolean, border: z };
var Wp = j({
	name: jp,
	inheritAttrs: !1,
	props: Up,
	setup(e, { slots: t, attrs: n }) {
		const o = () => {
				var l;
				return d(
					'div',
					_e(
						{ class: [Mc({ inset: e.inset }), { [Nl]: e.border && !e.inset }] },
						n,
						bl(),
					),
					[(l = t.default) == null ? void 0 : l.call(t)],
				);
			},
			a = () =>
				d('div', { class: Mc('title', { inset: e.inset }) }, [
					t.title ? t.title() : e.title,
				]);
		return () => (e.title || t.title ? d(Je, null, [a(), o()]) : o());
	},
});
const Yp = G(Wp),
	[If, Kp] = W('checkbox-group'),
	qp = {
		max: q,
		shape: Z('round'),
		disabled: Boolean,
		iconSize: q,
		direction: String,
		modelValue: Ve(),
		checkedColor: String,
	},
	Af = Symbol(If);
var Gp = j({
	name: If,
	props: qp,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { children: o, linkChildren: a } = rt(Af),
			l = s => t('update:modelValue', s),
			i = (s = {}) => {
				typeof s == 'boolean' && (s = { checked: s });
				const { checked: r, skipDisabled: c } = s,
					h = o
						.filter(f =>
							f.props.bindGroup
								? f.props.disabled && c
									? f.checked.value
									: r ?? !f.checked.value
								: !1,
						)
						.map(f => f.name);
				l(h);
			};
		return (
			ee(
				() => e.modelValue,
				s => t('change', s),
			),
			ke({ toggleAll: i }),
			jn(() => e.modelValue),
			a({ props: e, updateValue: l }),
			() => {
				var s;
				return d('div', { class: Kp([e.direction]) }, [
					(s = n.default) == null ? void 0 : s.call(n),
				]);
			}
		);
	},
});
const [Xp, Zp] = W('checkbox'),
	Jp = he({}, qr, {
		shape: String,
		bindGroup: z,
		indeterminate: { type: Boolean, default: null },
	});
var Qp = j({
	name: Xp,
	props: Jp,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { parent: o } = ot(Af),
			a = s => {
				const { name: r } = e,
					{ max: c, modelValue: u } = o.props,
					h = u.slice();
				if (s)
					!(c && h.length >= +c) &&
						!h.includes(r) &&
						(h.push(r), e.bindGroup && o.updateValue(h));
				else {
					const f = h.indexOf(r);
					f !== -1 && (h.splice(f, 1), e.bindGroup && o.updateValue(h));
				}
			},
			l = L(() =>
				o && e.bindGroup
					? o.props.modelValue.indexOf(e.name) !== -1
					: !!e.modelValue,
			),
			i = (s = !l.value) => {
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
			ke({ toggle: i, props: e, checked: l }),
			jn(() => e.modelValue),
			() =>
				d(
					Tf,
					_e(
						{
							bem: Zp,
							role: 'checkbox',
							parent: o,
							checked: l.value,
							onToggle: i,
						},
						e,
					),
					Ie(n, ['default', 'icon']),
				)
		);
	},
});
const Of = G(Qp),
	ew = G(Gp),
	[tw, Ha] = W('circle');
let nw = 0;
const Lc = e => Math.min(Math.max(+e, 0), 100);
function ow(e, t) {
	const n = e ? 1 : 0;
	return `M ${t / 2} ${t / 2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`;
}
const aw = {
	text: String,
	size: q,
	fill: Z('none'),
	rate: le(100),
	speed: le(0),
	color: [String, Object],
	clockwise: z,
	layerColor: String,
	currentRate: Ke(0),
	strokeWidth: le(40),
	strokeLinecap: String,
	startPosition: Z('top'),
};
var lw = j({
	name: tw,
	props: aw,
	emits: ['update:currentRate'],
	setup(e, { emit: t, slots: n }) {
		const o = `van-circle-${nw++}`,
			a = L(() => +e.strokeWidth + 1e3),
			l = L(() => ow(e.clockwise, a.value)),
			i = L(() => {
				const f = { top: 0, right: 90, bottom: 180, left: 270 }[
					e.startPosition
				];
				if (f) return { transform: `rotate(${f}deg)` };
			});
		ee(
			() => e.rate,
			h => {
				let f;
				const m = Date.now(),
					v = e.currentRate,
					y = Lc(h),
					g = Math.abs(((v - y) * 1e3) / +e.speed),
					w = () => {
						const b = Date.now(),
							p = Math.min((b - m) / g, 1) * (y - v) + v;
						t('update:currentRate', Lc(parseFloat(p.toFixed(1)))),
							(y > v ? p < y : p > y) && (f = lt(w));
					};
				e.speed ? (f && Ll(f), (f = lt(w))) : t('update:currentRate', y);
			},
			{ immediate: !0 },
		);
		const s = () => {
				const { strokeWidth: f, currentRate: m, strokeLinecap: v } = e,
					y = (3140 * m) / 100,
					g = fn(e.color) ? `url(#${o})` : e.color,
					w = {
						stroke: g,
						strokeWidth: `${+f + 1}px`,
						strokeLinecap: v,
						strokeDasharray: `${y}px 3140px`,
					};
				return d(
					'path',
					{ d: l.value, style: w, class: Ha('hover'), stroke: g },
					null,
				);
			},
			r = () => {
				const h = {
					fill: e.fill,
					stroke: e.layerColor,
					strokeWidth: `${e.strokeWidth}px`,
				};
				return d('path', { class: Ha('layer'), style: h, d: l.value }, null);
			},
			c = () => {
				const { color: h } = e;
				if (!fn(h)) return;
				const f = Object.keys(h)
					.sort((m, v) => parseFloat(m) - parseFloat(v))
					.map((m, v) =>
						d('stop', { key: v, offset: m, 'stop-color': h[m] }, null),
					);
				return d('defs', null, [
					d(
						'linearGradient',
						{ id: o, x1: '100%', y1: '0%', x2: '0%', y2: '0%' },
						[f],
					),
				]);
			},
			u = () => {
				if (n.default) return n.default();
				if (e.text) return d('div', { class: Ha('text') }, [e.text]);
			};
		return () =>
			d('div', { class: Ha(), style: bn(e.size) }, [
				d('svg', { viewBox: `0 0 ${a.value} ${a.value}`, style: i.value }, [
					c(),
					r(),
					s(),
				]),
				u(),
			]);
	},
});
const iw = G(lw),
	[Rf, rw] = W('row'),
	Bf = Symbol(Rf),
	sw = {
		tag: Z('div'),
		wrap: z,
		align: String,
		gutter: { type: [String, Number, Array], default: 0 },
		justify: String,
	};
var cw = j({
	name: Rf,
	props: sw,
	setup(e, { slots: t }) {
		const { children: n, linkChildren: o } = rt(Bf),
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
			l = L(() => {
				let s = 0;
				Array.isArray(e.gutter)
					? (s = Number(e.gutter[0]) || 0)
					: (s = Number(e.gutter));
				const r = [];
				return (
					s &&
						a.value.forEach(c => {
							const u = (s * (c.length - 1)) / c.length;
							c.forEach((h, f) => {
								if (f === 0) r.push({ right: u });
								else {
									const m = s - r[h - 1].right,
										v = u - m;
									r.push({ left: m, right: v });
								}
							});
						}),
					r
				);
			}),
			i = L(() => {
				const { gutter: s } = e,
					r = [];
				if (Array.isArray(s) && s.length > 1) {
					const c = Number(s[1]) || 0;
					if (c <= 0) return r;
					a.value.forEach((u, h) => {
						h !== a.value.length - 1 &&
							u.forEach(() => {
								r.push({ bottom: c });
							});
					});
				}
				return r;
			});
		return (
			o({ spaces: l, verticalSpaces: i }),
			() => {
				const { tag: s, wrap: r, align: c, justify: u } = e;
				return d(
					s,
					{ class: rw({ [`align-${c}`]: c, [`justify-${u}`]: u, nowrap: !r }) },
					{
						default: () => {
							var h;
							return [(h = t.default) == null ? void 0 : h.call(t)];
						},
					},
				);
			}
		);
	},
});
const [uw, dw] = W('col'),
	fw = { tag: Z('div'), span: le(0), offset: q };
var hw = j({
	name: uw,
	props: fw,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(Bf),
			a = L(() => {
				if (!n) return;
				const { spaces: l, verticalSpaces: i } = n;
				let s = {};
				if (l && l.value && l.value[o.value]) {
					const { left: c, right: u } = l.value[o.value];
					s = {
						paddingLeft: c ? `${c}px` : null,
						paddingRight: u ? `${u}px` : null,
					};
				}
				const { bottom: r } = i.value[o.value] || {};
				return he(s, { marginBottom: r ? `${r}px` : null });
			});
		return () => {
			const { tag: l, span: i, offset: s } = e;
			return d(
				l,
				{ style: a.value, class: dw({ [i]: i, [`offset-${s}`]: s }) },
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
const mw = G(hw),
	[Df, vw] = W('collapse'),
	Mf = Symbol(Df),
	gw = {
		border: z,
		accordion: Boolean,
		modelValue: { type: [String, Number, Array], default: '' },
	};
var bw = j({
	name: Df,
	props: gw,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o, children: a } = rt(Mf),
			l = c => {
				t('change', c), t('update:modelValue', c);
			},
			i = (c, u) => {
				const { accordion: h, modelValue: f } = e;
				l(h ? (c === f ? '' : c) : u ? f.concat(c) : f.filter(m => m !== c));
			},
			s = (c = {}) => {
				if (e.accordion) return;
				typeof c == 'boolean' && (c = { expanded: c });
				const { expanded: u, skipDisabled: h } = c,
					m = a
						.filter(v =>
							v.disabled && h ? v.expanded.value : u ?? !v.expanded.value,
						)
						.map(v => v.itemName.value);
				l(m);
			},
			r = c => {
				const { accordion: u, modelValue: h } = e;
				return u ? h === c : h.includes(c);
			};
		return (
			ke({ toggleAll: s }),
			o({ toggle: i, isExpanded: r }),
			() => {
				var c;
				return d('div', { class: [vw(), { [Nl]: e.border }] }, [
					(c = n.default) == null ? void 0 : c.call(n),
				]);
			}
		);
	},
});
const yw = G(bw),
	[pw, ja] = W('collapse-item'),
	ww = ['icon', 'title', 'value', 'label', 'right-icon'],
	xw = he({}, Kl, {
		name: q,
		isLink: z,
		disabled: Boolean,
		readonly: Boolean,
		lazyRender: z,
	});
var Sw = j({
	name: pw,
	props: xw,
	setup(e, { slots: t }) {
		const n = D(),
			o = D(),
			{ parent: a, index: l } = ot(Mf);
		if (!a) return;
		const i = L(() => {
				var y;
				return (y = e.name) != null ? y : l.value;
			}),
			s = L(() => a.isExpanded(i.value)),
			r = D(s.value),
			c = Nr(() => r.value || !e.lazyRender),
			u = () => {
				s.value ? n.value && (n.value.style.height = '') : (r.value = !1);
			};
		ee(s, (y, g) => {
			if (g === null) return;
			y && (r.value = !0),
				(y ? Te : lt)(() => {
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
		const h = (y = !s.value) => {
				a.toggle(i.value, y);
			},
			f = () => {
				!e.disabled && !e.readonly && h();
			},
			m = () => {
				const { border: y, disabled: g, readonly: w } = e,
					b = Ie(e, Object.keys(Kl));
				return (
					w && (b.isLink = !1),
					(g || w) && (b.clickable = !1),
					d(
						Ht,
						_e(
							{
								role: 'button',
								class: ja('title', {
									disabled: g,
									expanded: s.value,
									borderless: !y,
								}),
								'aria-expanded': String(s.value),
								onClick: f,
							},
							b,
						),
						Ie(t, ww),
					)
				);
			},
			v = c(() => {
				var y;
				return Qe(
					d('div', { ref: n, class: ja('wrapper'), onTransitionend: u }, [
						d('div', { ref: o, class: ja('content') }, [
							(y = t.default) == null ? void 0 : y.call(t),
						]),
					]),
					[[nt, r.value]],
				);
			});
		return (
			ke({ toggle: h, expanded: s, itemName: i }),
			() =>
				d('div', { class: [ja({ border: l.value && e.border })] }, [m(), v()])
		);
	},
});
const Cw = G(Sw),
	Tw = G(zb),
	[_w, Vc, wi] = W('contact-card'),
	kw = {
		tel: String,
		name: String,
		type: Z('add'),
		addText: String,
		editable: z,
	};
var Ew = j({
	name: _w,
	props: kw,
	emits: ['click'],
	setup(e, { emit: t }) {
		const n = a => {
				e.editable && t('click', a);
			},
			o = () =>
				e.type === 'add'
					? e.addText || wi('addContact')
					: [
							d('div', null, [`${wi('name')}：${e.name}`]),
							d('div', null, [`${wi('tel')}：${e.tel}`]),
						];
		return () =>
			d(
				Ht,
				{
					center: !0,
					icon: e.type === 'edit' ? 'contact' : 'add-square',
					class: Vc([e.type]),
					border: !1,
					isLink: e.editable,
					titleClass: Vc('title'),
					onClick: n,
				},
				{ title: o },
			);
	},
});
const Pw = G(Ew),
	[$w, go, _n] = W('contact-edit'),
	ir = { tel: '', name: '' },
	Iw = {
		isEdit: Boolean,
		isSaving: Boolean,
		isDeleting: Boolean,
		showSetDefault: Boolean,
		setDefaultLabel: String,
		contactInfo: { type: Object, default: () => he({}, ir) },
		telValidator: { type: Function, default: Ad },
	};
var Aw = j({
	name: $w,
	props: Iw,
	emits: ['save', 'delete', 'changeDefault'],
	setup(e, { emit: t }) {
		const n = He(he({}, ir, e.contactInfo)),
			o = () => {
				e.isSaving || t('save', n);
			},
			a = () => t('delete', n),
			l = () =>
				d('div', { class: go('buttons') }, [
					d(
						it,
						{
							block: !0,
							round: !0,
							type: 'primary',
							text: _n('save'),
							class: go('button'),
							loading: e.isSaving,
							nativeType: 'submit',
						},
						null,
					),
					e.isEdit &&
						d(
							it,
							{
								block: !0,
								round: !0,
								text: _n('delete'),
								class: go('button'),
								loading: e.isDeleting,
								onClick: a,
							},
							null,
						),
				]),
			i = () =>
				d(
					Yr,
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
						{ title: e.setDefaultLabel, class: go('switch-cell'), border: !1 },
						{ 'right-icon': i },
					);
			};
		return (
			ee(
				() => e.contactInfo,
				r => he(n, ir, r),
			),
			() =>
				d(
					Ur,
					{ class: go(), onSubmit: o },
					{
						default: () => [
							d('div', { class: go('fields') }, [
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
							l(),
						],
					},
				)
		);
	},
});
const Ow = G(Aw),
	[Rw, an, Bw] = W('contact-list'),
	Dw = { list: Array, addText: String, modelValue: Ne, defaultTagText: String };
var Mw = j({
	name: Rw,
	props: Dw,
	emits: ['add', 'edit', 'select', 'update:modelValue'],
	setup(e, { emit: t }) {
		const n = (o, a) => {
			const l = () => {
					t('update:modelValue', o.id), t('select', o, a);
				},
				i = () => d(Gr, { class: an('radio'), name: o.id, iconSize: 18 }, null),
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
									ql,
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
					onClick: l,
				},
				{ icon: s, title: r, 'right-icon': i },
			);
		};
		return () =>
			d('div', { class: an() }, [
				d(
					Kr,
					{ modelValue: e.modelValue, class: an('group') },
					{ default: () => [e.list && e.list.map(n)] },
				),
				d('div', { class: [an('bottom'), 'van-safe-area-bottom'] }, [
					d(
						it,
						{
							round: !0,
							block: !0,
							type: 'primary',
							class: an('add'),
							text: e.addText || Bw('addContact'),
							onClick: () => t('add'),
						},
						null,
					),
				]),
			]);
	},
});
const Lw = G(Mw);
function Vw(e, t) {
	const { days: n } = t;
	let { hours: o, minutes: a, seconds: l, milliseconds: i } = t;
	if (
		(e.includes('DD') ? (e = e.replace('DD', Ot(n))) : (o += n * 24),
		e.includes('HH') ? (e = e.replace('HH', Ot(o))) : (a += o * 60),
		e.includes('mm') ? (e = e.replace('mm', Ot(a))) : (l += a * 60),
		e.includes('ss') ? (e = e.replace('ss', Ot(l))) : (i += l * 1e3),
		e.includes('S'))
	) {
		const s = Ot(i, 3);
		e.includes('SSS')
			? (e = e.replace('SSS', s))
			: e.includes('SS')
				? (e = e.replace('SS', s.slice(0, 2)))
				: (e = e.replace('S', s.charAt(0)));
	}
	return e;
}
const [Fw, Nw] = W('count-down'),
	zw = {
		time: le(0),
		format: Z('HH:mm:ss'),
		autoStart: z,
		millisecond: Boolean,
	};
var Hw = j({
	name: Fw,
	props: zw,
	emits: ['change', 'finish'],
	setup(e, { emit: t, slots: n }) {
		const {
				start: o,
				pause: a,
				reset: l,
				current: i,
			} = sb({
				time: +e.time,
				millisecond: e.millisecond,
				onChange: c => t('change', c),
				onFinish: () => t('finish'),
			}),
			s = L(() => Vw(e.format, i.value)),
			r = () => {
				l(+e.time), e.autoStart && o();
			};
		return (
			ee(() => e.time, r, { immediate: !0 }),
			ke({ start: o, pause: a, reset: r }),
			() =>
				d('div', { role: 'timer', class: Nw() }, [
					n.default ? n.default(i.value) : s.value,
				])
		);
	},
});
const jw = G(Hw);
function Fc(e) {
	const t = new Date(e * 1e3);
	return `${t.getFullYear()}.${Ot(t.getMonth() + 1)}.${Ot(t.getDate())}`;
}
const Uw = e => (e / 10).toFixed(e % 10 === 0 ? 0 : 1),
	Nc = e => (e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2),
	[Ww, Yt, xi] = W('coupon');
var Yw = j({
	name: Ww,
	props: {
		chosen: Boolean,
		coupon: Ye(Object),
		disabled: Boolean,
		currency: Z('¥'),
	},
	setup(e) {
		const t = L(() => {
				const { startAt: a, endAt: l } = e.coupon;
				return `${Fc(a)} - ${Fc(l)}`;
			}),
			n = L(() => {
				const { coupon: a, currency: l } = e;
				if (a.valueDesc)
					return [a.valueDesc, d('span', null, [a.unitDesc || ''])];
				if (a.denominations) {
					const i = Nc(a.denominations);
					return [d('span', null, [l]), ` ${i}`];
				}
				return a.discount ? xi('discount', Uw(a.discount)) : '';
			}),
			o = L(() => {
				const a = Nc(e.coupon.originCondition || 0);
				return a === '0' ? xi('unlimited') : xi('condition', a);
			});
		return () => {
			const { chosen: a, coupon: l, disabled: i } = e,
				s = (i && l.reason) || l.description;
			return d('div', { class: Yt({ disabled: i }) }, [
				d('div', { class: Yt('content') }, [
					d('div', { class: Yt('head') }, [
						d('h2', { class: Yt('amount') }, [n.value]),
						d('p', { class: Yt('condition') }, [l.condition || o.value]),
					]),
					d('div', { class: Yt('body') }, [
						d('p', { class: Yt('name') }, [l.name]),
						d('p', { class: Yt('valid') }, [t.value]),
						!i && d(Of, { class: Yt('corner'), modelValue: a }, null),
					]),
				]),
				s && d('p', { class: Yt('description') }, [s]),
			]);
		};
	},
});
const rr = G(Yw),
	[Kw, zc, sr] = W('coupon-cell'),
	qw = {
		title: String,
		border: z,
		editable: z,
		coupons: Ve(),
		currency: Z('¥'),
		chosenCoupon: { type: [Number, Array], default: -1 },
	},
	Gw = e => {
		const { value: t, denominations: n } = e;
		return Pe(t) ? t : Pe(n) ? n : 0;
	};
function Xw({ coupons: e, chosenCoupon: t, currency: n }) {
	let o = 0,
		a = !1;
	return (
		(Array.isArray(t) ? t : [t]).forEach(l => {
			const i = e[+l];
			i && ((a = !0), (o += Gw(i)));
		}),
		a
			? `-${n} ${(o / 100).toFixed(2)}`
			: e.length === 0
				? sr('noCoupon')
				: sr('count', e.length)
	);
}
var Zw = j({
	name: Kw,
	props: qw,
	setup(e) {
		return () => {
			const t = Array.isArray(e.chosenCoupon)
				? e.chosenCoupon.length
				: e.coupons[+e.chosenCoupon];
			return d(
				Ht,
				{
					class: zc(),
					value: Xw(e),
					title: e.title || sr('title'),
					border: e.border,
					isLink: e.editable,
					valueClass: zc('value', { selected: t }),
				},
				null,
			);
		};
	},
});
const Jw = G(Zw),
	[Qw, Ua] = W('empty'),
	ex = {
		image: Z('default'),
		imageSize: [Number, String, Array],
		description: String,
	};
var tx = j({
	name: Qw,
	props: ex,
	setup(e, { slots: t }) {
		const n = () => {
				const w = t.description ? t.description() : e.description;
				if (w) return d('p', { class: Ua('description') }, [w]);
			},
			o = () => {
				if (t.default) return d('div', { class: Ua('bottom') }, [t.default()]);
			},
			a = No(),
			l = w => `${a}-${w}`,
			i = w => `url(#${l(w)})`,
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
							id: l(w),
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
					{ fill: i(w), opacity: '.8', cx: '80', cy: '140', rx: '46', ry: '8' },
					null,
				),
			],
			u = () => [
				d('defs', null, [
					d(
						'linearGradient',
						{ id: l('a'), x1: '64%', y1: '100%', x2: '64%' },
						[s('#FFF', 0, 0.5), s('#F2F3F5', 100)],
					),
				]),
				d('g', { opacity: '.8' }, [
					d('path', { d: 'M36 131V53H16v20H2v58h34z', fill: i('a') }, null),
					d('path', { d: 'M123 15h22v14h9v77h-31V15z', fill: i('a') }, null),
				]),
			],
			h = () => [
				d('defs', null, [
					d(
						'linearGradient',
						{ id: l('b'), x1: '64%', y1: '97%', x2: '64%', y2: '0%' },
						[s('#F2F3F5', 0, 0.3), s('#F2F3F5', 100)],
					),
				]),
				d('g', { opacity: '.8' }, [
					d(
						'path',
						{
							d: 'M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z',
							fill: i('b'),
						},
						null,
					),
					d(
						'path',
						{
							d: 'M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z',
							fill: i('b'),
						},
						null,
					),
				]),
			],
			f = () =>
				d('svg', { viewBox: '0 0 160 160' }, [
					d('defs', null, [
						d(
							'linearGradient',
							{ id: l(1), x1: '64%', y1: '100%', x2: '64%' },
							[s('#FFF', 0, 0.5), s('#F2F3F5', 100)],
						),
						d('linearGradient', { id: l(2), x1: '50%', x2: '50%', y2: '84%' }, [
							s('#EBEDF0', 0),
							s('#DCDEE0', 100, 0),
						]),
						d(
							'linearGradient',
							{ id: l(3), x1: '100%', x2: '100%', y2: '100%' },
							[r('#EAEDF0', '#DCDEE0')],
						),
						d(
							'radialGradient',
							{
								id: l(4),
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
						d('path', { fill: i(4), d: 'M0 139h160v21H0z' }, null),
						d(
							'path',
							{
								d: 'M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z',
								fill: i(2),
							},
							null,
						),
						d(
							'g',
							{ opacity: '.6', 'stroke-linecap': 'round', 'stroke-width': '7' },
							[
								d(
									'path',
									{ d: 'M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13', stroke: i(3) },
									null,
								),
								d('path', { d: 'M53 36a34 34 0 0 0 0 48', stroke: i(3) }, null),
								d(
									'path',
									{ d: 'M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13', stroke: i(3) },
									null,
								),
								d(
									'path',
									{ d: 'M106 84a34 34 0 0 0 0-48', stroke: i(3) },
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
							{ x1: '50%', x2: '50%', y2: '100%', id: l(5) },
							[r('#F2F3F5', '#DCDEE0')],
						),
						d(
							'linearGradient',
							{ x1: '95%', y1: '48%', x2: '5.5%', y2: '51%', id: l(6) },
							[r('#EAEDF1', '#DCDEE0')],
						),
						d(
							'linearGradient',
							{ y1: '45%', x2: '100%', y2: '54%', id: l(7) },
							[r('#EAEDF1', '#DCDEE0')],
						),
					]),
					u(),
					h(),
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
								{ fill: i(5), width: '64', height: '66', rx: '2' },
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
							d('g', { transform: 'translate(15 17)', fill: i(6) }, [
								d('rect', { width: '34', height: '6', rx: '1' }, null),
								d('path', { d: 'M0 14h34v6H0z' }, null),
								d('rect', { y: '28', width: '34', height: '6', rx: '1' }, null),
							]),
						]),
						d(
							'rect',
							{ fill: i(7), y: '61', width: '88', height: '28', rx: '1' },
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
			v = () =>
				d('svg', { viewBox: '0 0 160 160' }, [
					d('defs', null, [
						d(
							'linearGradient',
							{ x1: '50%', x2: '50%', y2: '100%', id: l(8) },
							[r('#EAEDF1', '#DCDEE0')],
						),
					]),
					u(),
					h(),
					c('c'),
					d(
						'path',
						{
							d: 'm59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z',
							fill: i(8),
						},
						null,
					),
				]),
			y = () =>
				d('svg', { viewBox: '0 0 160 160' }, [
					d('defs', null, [
						d(
							'linearGradient',
							{ x1: '50%', y1: '100%', x2: '50%', id: l(9) },
							[r('#EEE', '#D8D8D8')],
						),
						d(
							'linearGradient',
							{ x1: '100%', y1: '50%', y2: '50%', id: l(10) },
							[r('#F2F3F5', '#DCDEE0')],
						),
						d(
							'linearGradient',
							{ x1: '50%', x2: '50%', y2: '100%', id: l(11) },
							[r('#F2F3F5', '#DCDEE0')],
						),
						d(
							'linearGradient',
							{ x1: '50%', x2: '50%', y2: '100%', id: l(12) },
							[r('#FFF', '#F7F8FA')],
						),
					]),
					u(),
					h(),
					c('d'),
					d('g', { transform: 'rotate(-45 113 -4)', fill: 'none' }, [
						d(
							'rect',
							{
								fill: i(9),
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
								fill: i(10),
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
								stroke: i(11),
								'stroke-width': '8',
								cx: '27',
								cy: '27',
								r: '27',
							},
							null,
						),
						d('circle', { fill: i(12), cx: '27', cy: '27', r: '16' }, null),
						d(
							'path',
							{
								d: 'M37 7c-8 0-15 5-16 12',
								stroke: i(11),
								'stroke-width': '3',
								opacity: '.5',
								'stroke-linecap': 'round',
								transform: 'rotate(45 29 13)',
							},
							null,
						),
					]),
				]),
			g = () => {
				var w;
				if (t.image) return t.image();
				const b = { error: v, search: y, network: f, default: m };
				return (
					((w = b[e.image]) == null ? void 0 : w.call(b)) ||
					d('img', { src: e.image }, null)
				);
			};
		return () =>
			d('div', { class: Ua() }, [
				d('div', { class: Ua('image'), style: bn(e.imageSize) }, [g()]),
				n(),
				o(),
			]);
	},
});
const Lf = G(tx),
	[nx, Kt, bo] = W('coupon-list'),
	ox = {
		code: Z(''),
		coupons: Ve(),
		currency: Z('¥'),
		showCount: z,
		emptyImage: String,
		enabledTitle: String,
		disabledTitle: String,
		disabledCoupons: Ve(),
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
var ax = j({
	name: nx,
	props: ox,
	emits: ['change', 'exchange', 'update:code'],
	setup(e, { emit: t, slots: n }) {
		const [o, a] = ka(),
			l = D(),
			i = D(),
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
			h = () => {
				const C = Ae(l).height,
					p = Ae(i).height + 44;
				r.value = (C > p ? C : Tt.value) - p;
			},
			f = () => {
				t('exchange', c.value), e.code || (c.value = '');
			},
			m = b => {
				Te(() => {
					var C;
					return (C = o.value[b]) == null ? void 0 : C.scrollIntoView();
				});
			},
			v = () =>
				d(
					Lf,
					{ image: e.emptyImage },
					{
						default: () => [
							d('p', { class: Kt('empty-tip') }, [bo('noCoupon')]),
						],
					},
				),
			y = () => {
				if (e.showExchangeBar)
					return d('div', { ref: i, class: Kt('exchange-bar') }, [
						d(
							un,
							{
								modelValue: c.value,
								'onUpdate:modelValue': b => (c.value = b),
								clearable: !0,
								border: !1,
								class: Kt('field'),
								placeholder: e.inputPlaceholder || bo('placeholder'),
								maxlength: '20',
							},
							null,
						),
						d(
							it,
							{
								plain: !0,
								type: 'primary',
								class: Kt('exchange'),
								text: e.exchangeButtonText || bo('exchange'),
								loading: e.exchangeButtonLoading,
								disabled: u.value,
								onClick: f,
							},
							null,
						),
					]);
			},
			g = () => {
				const { coupons: b, chosenCoupon: C } = e,
					p = e.showCount ? ` (${b.length})` : '',
					x = (e.enabledTitle || bo('enable')) + p,
					T = (O = [], S = 0) =>
						O.includes(S) ? O.filter(A => A !== S) : [...O, S];
				return d(
					xa,
					{ title: x },
					{
						default: () => {
							var O;
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
												rr,
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
										!b.length && v(),
										(O = n['list-footer']) == null ? void 0 : O.call(n),
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
					p = (e.disabledTitle || bo('disabled')) + C;
				return d(
					xa,
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
												rr,
												{
													disabled: !0,
													key: T.id,
													coupon: T,
													currency: e.currency,
												},
												null,
											),
										),
										!b.length && v(),
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
			ee(Tt, h),
			ee(c, b => t('update:code', b)),
			ee(() => e.displayedCouponIndex, m),
			We(() => {
				h(), m(e.displayedCouponIndex);
			}),
			() =>
				d('div', { ref: l, class: Kt() }, [
					y(),
					d(
						Ul,
						{
							active: s.value,
							'onUpdate:active': b => (s.value = b),
							class: Kt('tab'),
						},
						{ default: () => [g(), w()] },
					),
					d('div', { class: Kt('bottom') }, [
						n['list-button']
							? n['list-button']()
							: Qe(
									d(
										it,
										{
											round: !0,
											block: !0,
											type: 'primary',
											class: Kt('close'),
											text: e.closeButtonText || bo('close'),
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
const lx = G(ax),
	Hc = new Date().getFullYear(),
	[ix] = W('date-picker'),
	rx = he({}, kf, {
		columnsType: { type: Array, default: () => ['year', 'month', 'day'] },
		minDate: {
			type: Date,
			default: () => new Date(Hc - 10, 0, 1),
			validator: wa,
		},
		maxDate: {
			type: Date,
			default: () => new Date(Hc + 10, 11, 31),
			validator: wa,
		},
	});
var sx = j({
	name: ix,
	props: rx,
	emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(e.modelValue),
			a = D(!1),
			l = D(),
			i = () => {
				const p = e.minDate.getFullYear(),
					x = e.maxDate.getFullYear();
				return Eo(p, x, 'year', e.formatter, e.filter);
			},
			s = p => p === e.minDate.getFullYear(),
			r = p => p === e.maxDate.getFullYear(),
			c = p => p === e.minDate.getMonth() + 1,
			u = p => p === e.maxDate.getMonth() + 1,
			h = p => {
				const { minDate: x, columnsType: T } = e,
					O = T.indexOf(p),
					S = a.value ? e.modelValue[O] : o.value[O];
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
			f = () => {
				const p = h('year'),
					x = s(p) ? e.minDate.getMonth() + 1 : 1,
					T = r(p) ? e.maxDate.getMonth() + 1 : 12;
				return Eo(x, T, 'month', e.formatter, e.filter);
			},
			m = () => {
				const p = h('year'),
					x = h('month'),
					T = s(p) && c(x) ? e.minDate.getDate() : 1,
					O = r(p) && u(x) ? e.maxDate.getDate() : Pf(p, x);
				return Eo(T, O, 'day', e.formatter, e.filter);
			},
			v = () => {
				var p;
				return (p = l.value) == null ? void 0 : p.confirm();
			},
			y = () => o.value,
			g = L(() =>
				e.columnsType.map(p => {
					switch (p) {
						case 'year':
							return i();
						case 'month':
							return f();
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
						(p = $f(p, g.value)),
						Xt(p, o.value) || (o.value = p),
						(a.value = !1);
				},
				{ immediate: !0 },
			);
		const w = (...p) => t('change', ...p),
			b = (...p) => t('cancel', ...p),
			C = (...p) => t('confirm', ...p);
		return (
			ke({ confirm: v, getSelectedDate: y }),
			() =>
				d(
					Yl,
					_e(
						{
							ref: l,
							modelValue: o.value,
							'onUpdate:modelValue': p => (o.value = p),
							columns: g.value,
							onChange: w,
							onCancel: b,
							onConfirm: C,
						},
						Ie(e, Ef),
					),
					n,
				)
		);
	},
});
const cx = G(sx),
	[ux, Pt, Wa] = W('dialog'),
	dx = he({}, Fo, {
		title: String,
		theme: String,
		width: q,
		message: [String, Function],
		callback: Function,
		allowHtml: Boolean,
		className: Ne,
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
	fx = [...Fr, 'transition', 'closeOnPopstate'];
var hx = j({
	name: ux,
	props: dx,
	emits: ['confirm', 'cancel', 'keydown', 'update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = He({ confirm: !1, cancel: !1 }),
			l = w => t('update:show', w),
			i = w => {
				var b;
				l(!1), (b = e.callback) == null || b.call(e, w);
			},
			s = w => () => {
				e.show &&
					(t(w),
					e.beforeClose
						? ((a[w] = !0),
							Un(e.beforeClose, {
								args: [w],
								done() {
									i(w), (a[w] = !1);
								},
								canceled() {
									a[w] = !1;
								},
							}))
						: i(w));
			},
			r = s('cancel'),
			c = s('confirm'),
			u = Bv(
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
						Enter: e.showConfirmButton ? c : qi,
						Escape: e.showCancelButton ? r : qi,
					})[w.key](),
						t('keydown', w);
				},
				['enter', 'esc'],
			),
			h = () => {
				const w = n.title ? n.title() : e.title;
				if (w)
					return d(
						'div',
						{ class: Pt('header', { isolated: !e.message && !n.default }) },
						[w],
					);
			},
			f = w => {
				const { message: b, allowHtml: C, messageAlign: p } = e,
					x = Pt('message', { 'has-title': w, [p]: p }),
					T = Ao(b) ? b() : b;
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
						[f(p)],
					);
				}
			},
			v = () =>
				d('div', { class: [Nd, Pt('footer')] }, [
					e.showCancelButton &&
						d(
							it,
							{
								size: 'large',
								text: e.cancelButtonText || Wa('cancel'),
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
							it,
							{
								size: 'large',
								text: e.confirmButtonText || Wa('confirm'),
								class: [Pt('confirm'), { [zd]: e.showCancelButton }],
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
					Kd,
					{ class: Pt('footer') },
					{
						default: () => [
							e.showCancelButton &&
								d(
									er,
									{
										type: 'warning',
										text: e.cancelButtonText || Wa('cancel'),
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
									er,
									{
										type: 'danger',
										text: e.confirmButtonText || Wa('confirm'),
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
			g = () =>
				n.footer ? n.footer() : e.theme === 'round-button' ? y() : v();
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
						'onUpdate:show': l,
					},
					Ie(e, fx),
				),
				{ default: () => [h(), m(), g()] },
			);
		};
	},
});
const mx = G(hx),
	[vx, gx] = W('divider'),
	bx = {
		dashed: Boolean,
		hairline: z,
		vertical: Boolean,
		contentPosition: Z('center'),
	};
var yx = j({
	name: vx,
	props: bx,
	setup(e, { slots: t }) {
		return () => {
			var n;
			return d(
				'div',
				{
					role: 'separator',
					class: gx({
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
const px = G(yx),
	[Vf, Ya] = W('dropdown-menu'),
	wx = {
		overlay: z,
		zIndex: q,
		duration: le(0.2),
		direction: Z('down'),
		activeColor: String,
		autoLocate: Boolean,
		closeOnClickOutside: z,
		closeOnClickOverlay: z,
		swipeThreshold: q,
	},
	Ff = Symbol(Vf);
var xx = j({
	name: Vf,
	props: wx,
	setup(e, { slots: t }) {
		const n = No(),
			o = D(),
			a = D(),
			l = D(0),
			{ children: i, linkChildren: s } = rt(Ff),
			r = Vo(o),
			c = L(() => i.some(b => b.state.showWrapper)),
			u = L(() => e.swipeThreshold && i.length > +e.swipeThreshold),
			h = L(() => {
				if (c.value && Pe(e.zIndex)) return { zIndex: +e.zIndex + 1 };
			}),
			f = () => {
				i.forEach(b => {
					b.toggle(!1);
				});
			},
			m = () => {
				e.closeOnClickOutside && f();
			},
			v = () => {
				if (a.value) {
					const b = Ae(a);
					e.direction === 'down'
						? (l.value = b.bottom)
						: (l.value = Tt.value - b.top);
				}
			},
			y = () => {
				c.value && v();
			},
			g = b => {
				i.forEach((C, p) => {
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
						class: [Ya('item', { disabled: x, grow: u.value }), { [gt]: !x }],
						onClick: () => {
							x || g(C);
						},
					},
					[
						d(
							'span',
							{
								class: [
									Ya('title', {
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
			ke({ close: f }),
			s({ id: n, props: e, offset: l, updateOffset: v }),
			Vl(o, m),
			Ue('scroll', y, { target: r, passive: !0 }),
			() => {
				var b;
				return d('div', { ref: o, class: Ya() }, [
					d(
						'div',
						{
							ref: a,
							style: h.value,
							class: Ya('bar', { opened: c.value, scrollable: u.value }),
						},
						[i.map(w)],
					),
					(b = t.default) == null ? void 0 : b.call(t),
				]);
			}
		);
	},
});
const [Sx, Ka] = W('dropdown-item'),
	Cx = {
		title: String,
		options: Ve(),
		disabled: Boolean,
		teleport: [String, Object],
		lazyRender: z,
		modelValue: Ne,
		titleClass: Ne,
	};
var Tx = j({
	name: Sx,
	inheritAttrs: !1,
	props: Cx,
	emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		const a = He({ showPopup: !1, transition: !0, showWrapper: !1 }),
			l = D(),
			{ parent: i, index: s } = ot(Ff);
		if (!i) return;
		const r = b => () => t(b),
			c = r('open'),
			u = r('close'),
			h = r('opened'),
			f = () => {
				(a.showWrapper = !1), t('closed');
			},
			m = b => {
				e.teleport && b.stopPropagation();
			},
			v = (b = !a.showPopup, C = {}) => {
				b !== a.showPopup &&
					((a.showPopup = b),
					(a.transition = !C.immediate),
					b && (i.updateOffset(), (a.showWrapper = !0)));
			},
			y = () => {
				if (n.title) return n.title();
				if (e.title) return e.title;
				const b = e.options.find(C => C.value === e.modelValue);
				return b ? b.text : '';
			},
			g = b => {
				const { activeColor: C } = i.props,
					{ disabled: p } = b,
					x = b.value === e.modelValue,
					T = () => {
						p ||
							((a.showPopup = !1),
							b.value !== e.modelValue &&
								(t('update:modelValue', b.value), t('change', b.value)));
					},
					O = () => {
						if (x)
							return d(
								Ce,
								{ class: Ka('icon'), color: p ? void 0 : C, name: 'success' },
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
						class: Ka('option', { active: x, disabled: p }),
						style: { color: x ? C : '' },
						tabindex: x ? 0 : -1,
						clickable: !p,
						onClick: T,
					},
					{ value: O },
				);
			},
			w = () => {
				const { offset: b } = i,
					{
						autoLocate: C,
						zIndex: p,
						overlay: x,
						duration: T,
						direction: O,
						closeOnClickOverlay: S,
					} = i.props,
					A = yn(p);
				let I = b.value;
				if (C && l.value) {
					const k = vb(l.value);
					k && (I -= Ae(k).top);
				}
				return (
					O === 'down' ? (A.top = `${I}px`) : (A.bottom = `${I}px`),
					Qe(
						d('div', _e({ ref: l, style: A, class: Ka([O]), onClick: m }, o), [
							d(
								zt,
								{
									show: a.showPopup,
									'onUpdate:show': k => (a.showPopup = k),
									role: 'menu',
									class: Ka('content'),
									overlay: x,
									position: O === 'down' ? 'top' : 'bottom',
									duration: a.transition ? T : 0,
									lazyRender: e.lazyRender,
									overlayStyle: { position: 'absolute' },
									'aria-labelledby': `${i.id}-${s.value}`,
									closeOnClickOverlay: S,
									onOpen: c,
									onClose: u,
									onOpened: h,
									onClosed: f,
								},
								{
									default: () => {
										var k;
										return [
											e.options.map(g),
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
			ke({ state: a, toggle: v, renderTitle: y }),
			() =>
				e.teleport ? d(Do, { to: e.teleport }, { default: () => [w()] }) : w()
		);
	},
});
const _x = G(Tx),
	kx = G(xx),
	Ex = {
		gap: Ke(24),
		icon: String,
		axis: Z('y'),
		magnetic: String,
		offset: { type: Object, default: () => ({ x: -1, y: -1 }) },
		teleport: { type: [String, Object], default: 'body' },
	},
	[Px, jc] = W('floating-bubble');
var $x = j({
	name: Px,
	inheritAttrs: !1,
	props: Ex,
	emits: ['click', 'update:offset', 'offsetChange'],
	setup(e, { slots: t, emit: n, attrs: o }) {
		const a = D(),
			l = D({ x: 0, y: 0, width: 0, height: 0 }),
			i = L(() => ({
				top: e.gap,
				right: Mt.value - l.value.width - e.gap,
				bottom: Tt.value - l.value.height - e.gap,
				left: e.gap,
			})),
			s = D(!1);
		let r = !1;
		const c = L(() => {
				const C = {},
					p = we(l.value.x),
					x = we(l.value.y);
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
				l.value = {
					x: x.x > -1 ? x.x : Mt.value - C - e.gap,
					y: x.y > -1 ? x.y : Tt.value - p - e.gap,
					width: C,
					height: p,
				};
			},
			h = kt();
		let f = 0,
			m = 0;
		const v = C => {
			h.start(C), (s.value = !0), (f = l.value.x), (m = l.value.y);
		};
		Ue(
			'touchmove',
			C => {
				if (
					(C.preventDefault(), h.move(C), e.axis !== 'lock' && !h.isTap.value)
				) {
					if (e.axis === 'x' || e.axis === 'xy') {
						let x = f + h.deltaX.value;
						x < i.value.left && (x = i.value.left),
							x > i.value.right && (x = i.value.right),
							(l.value.x = x);
					}
					if (e.axis === 'y' || e.axis === 'xy') {
						let x = m + h.deltaY.value;
						x < i.value.top && (x = i.value.top),
							x > i.value.bottom && (x = i.value.bottom),
							(l.value.y = x);
					}
					const p = Ie(l.value, ['x', 'y']);
					n('update:offset', p);
				}
			},
			{ target: a },
		);
		const g = () => {
				(s.value = !1),
					Te(() => {
						if (e.magnetic === 'x') {
							const C = gl([i.value.left, i.value.right], l.value.x);
							l.value.x = C;
						}
						if (e.magnetic === 'y') {
							const C = gl([i.value.top, i.value.bottom], l.value.y);
							l.value.y = C;
						}
						if (!h.isTap.value) {
							const C = Ie(l.value, ['x', 'y']);
							n('update:offset', C),
								(f !== C.x || m !== C.y) && n('offsetChange', C);
						}
					});
			},
			w = C => {
				h.isTap.value ? n('click', C) : C.stopPropagation();
			};
		We(() => {
			u(),
				Te(() => {
					r = !0;
				});
		}),
			ee([Mt, Tt, () => e.gap, () => e.offset], u, { deep: !0 });
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
								class: jc(),
								ref: a,
								onTouchstartPassive: v,
								onTouchend: g,
								onTouchcancel: g,
								onClickCapture: w,
								style: c.value,
							},
							o,
						),
						[
							t.default
								? t.default()
								: d(Yb, { name: e.icon, class: jc('icon') }, null),
						],
					),
					[[nt, b.value]],
				);
				return e.teleport
					? d(Do, { to: e.teleport }, { default: () => [C] })
					: C;
			}
		);
	},
});
const Ix = G($x),
	Ax = {
		height: le(0),
		anchors: Ve(),
		duration: le(0.3),
		contentDraggable: z,
		lockScroll: Boolean,
		safeAreaInsetBottom: z,
	},
	[Ox, qa] = W('floating-panel');
var Rx = j({
	name: Ox,
	props: Ax,
	emits: ['heightChange', 'update:height'],
	setup(e, { emit: t, slots: n }) {
		const a = D(),
			l = D(),
			i = zr(
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
							: Math.round(Tt.value * 0.6),
				};
			}),
			r = L(() =>
				e.anchors.length >= 2 ? e.anchors : [s.value.min, s.value.max],
			),
			c = D(!1),
			u = L(() => ({
				height: we(s.value.max),
				transform: `translateY(calc(100% + ${we(-i.value)}))`,
				transition: c.value
					? 'none'
					: `transform ${e.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`,
			})),
			h = b => {
				const C = Math.abs(b),
					{ min: p, max: x } = s.value;
				return C > x ? -(x + (C - x) * 0.2) : C < p ? -(p - (p - C) * 0.2) : b;
			};
		let f,
			m = -1;
		const v = kt(),
			y = b => {
				v.start(b), (c.value = !0), (f = -i.value), (m = -1);
			},
			g = b => {
				var C;
				v.move(b);
				const p = b.target;
				if (l.value === p || ((C = l.value) != null && C.contains(p))) {
					const { scrollTop: T } = l.value;
					if (((m = Math.max(m, T)), !e.contentDraggable)) return;
					if (-f < s.value.max) Me(b, !0);
					else if (!(T <= 0 && v.deltaY.value > 0) || m > 0) return;
				}
				const x = v.deltaY.value + f;
				i.value = -h(x);
			},
			w = () => {
				(m = -1),
					(c.value = !1),
					(i.value = gl(r.value, i.value)),
					i.value !== -f && t('heightChange', { height: i.value });
			};
		return (
			ee(
				s,
				() => {
					i.value = gl(r.value, i.value);
				},
				{ immediate: !0 },
			),
			Jd(a, () => e.lockScroll || c.value),
			Ue('touchmove', g, { target: a }),
			() => {
				var b;
				return d(
					'div',
					{
						class: [qa(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }],
						ref: a,
						style: u.value,
						onTouchstartPassive: y,
						onTouchend: w,
						onTouchcancel: w,
					},
					[
						d('div', { class: qa('header') }, [
							d('div', { class: qa('header-bar') }, null),
						]),
						d('div', { class: qa('content'), ref: l }, [
							(b = n.default) == null ? void 0 : b.call(n),
						]),
					],
				);
			}
		);
	},
});
const Bx = G(Rx),
	[Nf, Dx] = W('grid'),
	Mx = {
		square: Boolean,
		center: z,
		border: z,
		gutter: q,
		reverse: Boolean,
		iconSize: q,
		direction: String,
		clickable: Boolean,
		columnNum: le(4),
	},
	zf = Symbol(Nf);
var Lx = j({
	name: Nf,
	props: Mx,
	setup(e, { slots: t }) {
		const { linkChildren: n } = rt(zf);
		return (
			n({ props: e }),
			() => {
				var o;
				return d(
					'div',
					{
						style: { paddingLeft: we(e.gutter) },
						class: [Dx(), { [Nd]: e.border && !e.gutter }],
					},
					[(o = t.default) == null ? void 0 : o.call(t)],
				);
			}
		);
	},
});
const Vx = G(Lx),
	[Fx, Ga] = W('grid-item'),
	Nx = he({}, Wn, {
		dot: Boolean,
		text: String,
		icon: String,
		badge: q,
		iconColor: String,
		iconPrefix: String,
		badgeProps: Object,
	});
var zx = j({
	name: Fx,
	props: Nx,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(zf),
			a = io();
		if (!n) return;
		const l = L(() => {
				const { square: u, gutter: h, columnNum: f } = n.props,
					m = `${100 / +f}%`,
					v = { flexBasis: m };
				if (u) v.paddingTop = m;
				else if (h) {
					const y = we(h);
					(v.paddingRight = y), o.value >= +f && (v.marginTop = y);
				}
				return v;
			}),
			i = L(() => {
				const { square: u, gutter: h } = n.props;
				if (u && h) {
					const f = we(h);
					return { right: f, bottom: f, height: 'auto' };
				}
			}),
			s = () => {
				if (t.icon)
					return d(ro, _e({ dot: e.dot, content: e.badge }, e.badgeProps), {
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
							class: Ga('icon'),
							color: e.iconColor,
							badgeProps: e.badgeProps,
							classPrefix: e.iconPrefix,
						},
						null,
					);
			},
			r = () => {
				if (t.text) return t.text();
				if (e.text) return d('span', { class: Ga('text') }, [e.text]);
			},
			c = () => (t.default ? t.default() : [s(), r()]);
		return () => {
			const {
					center: u,
					border: h,
					square: f,
					gutter: m,
					reverse: v,
					direction: y,
					clickable: g,
				} = n.props,
				w = [
					Ga('content', [
						y,
						{
							center: u,
							square: f,
							reverse: v,
							clickable: g,
							surround: h && m,
						},
					]),
					{ [pn]: h },
				];
			return d('div', { class: [Ga({ square: f })], style: l.value }, [
				d(
					'div',
					{
						role: g ? 'button' : void 0,
						class: w,
						style: i.value,
						tabindex: g ? 0 : void 0,
						onClick: a,
					},
					[c()],
				),
			]);
		};
	},
});
const Hx = G(zx),
	[jx, Uc] = W('highlight'),
	Ux = {
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
var Wx = j({
	name: jx,
	props: Ux,
	setup(e) {
		const t = L(() => {
				const {
						autoEscape: o,
						caseSensitive: a,
						keywords: l,
						sourceString: i,
					} = e,
					s = a ? 'g' : 'gi';
				let c = (Array.isArray(l) ? l : [l])
					.filter(h => h)
					.reduce((h, f) => {
						o && (f = f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
						const m = new RegExp(f, s);
						let v;
						for (; (v = m.exec(i)); ) {
							const y = v.index,
								g = m.lastIndex;
							if (y >= g) {
								m.lastIndex++;
								continue;
							}
							h.push({ start: y, end: g, highlight: !0 });
						}
						return h;
					}, []);
				c = c
					.sort((h, f) => h.start - f.start)
					.reduce((h, f) => {
						const m = h[h.length - 1];
						if (!m || f.start > m.end) {
							const v = m ? m.end : 0,
								y = f.start;
							v !== y && h.push({ start: v, end: y, highlight: !1 }), h.push(f);
						} else m.end = Math.max(m.end, f.end);
						return h;
					}, []);
				const u = c[c.length - 1];
				return (
					u &&
						u.end < i.length &&
						c.push({ start: u.end, end: i.length, highlight: !1 }),
					c
				);
			}),
			n = () => {
				const {
					sourceString: o,
					highlightClass: a,
					unhighlightClass: l,
					highlightTag: i,
					unhighlightTag: s,
				} = e;
				return t.value.map(r => {
					const { start: c, end: u, highlight: h } = r,
						f = o.slice(c, u);
					return h
						? d(i, { class: [Uc('tag'), a] }, { default: () => [f] })
						: d(s, { class: l }, { default: () => [f] });
				});
			};
		return () => {
			const { tag: o } = e;
			return d(o, { class: Uc() }, { default: () => [n()] });
		};
	},
});
const Yx = G(Wx),
	Wc = e =>
		Math.sqrt(
			(e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2,
		),
	Kx = e => ({
		x: (e[0].clientX + e[1].clientX) / 2,
		y: (e[0].clientY + e[1].clientY) / 2,
	}),
	Si = W('image-preview')[1],
	Yc = 2.6,
	qx = {
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
var Gx = j({
	props: qx,
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
			a = kt(),
			l = D(),
			i = D(),
			s = D(!1),
			r = D(!1);
		let c = 0;
		const u = L(() => {
				const {
						scale: R,
						moveX: N,
						moveY: Y,
						moving: me,
						zooming: ge,
						initializing: ne,
					} = o,
					se = { transitionDuration: ge || me || ne ? '0s' : '.3s' };
				return (
					(R !== 1 || r.value) &&
						(se.transform = `matrix(${R}, 0, 0, ${R}, ${N}, ${Y})`),
					se
				);
			}),
			h = L(() => {
				if (o.imageRatio) {
					const { rootWidth: R, rootHeight: N } = e,
						Y = s.value ? N / o.imageRatio : R;
					return Math.max(0, (o.scale * Y - R) / 2);
				}
				return 0;
			}),
			f = L(() => {
				if (o.imageRatio) {
					const { rootWidth: R, rootHeight: N } = e,
						Y = s.value ? N : R * o.imageRatio;
					return Math.max(0, (o.scale * Y - N) / 2);
				}
				return 0;
			}),
			m = (R, N) => {
				var Y;
				if (((R = et(R, +e.minZoom, +e.maxZoom + 1)), R !== o.scale)) {
					const me = R / o.scale;
					if (((o.scale = R), N)) {
						const ge = Ae((Y = l.value) == null ? void 0 : Y.$el),
							ne = { x: ge.width * 0.5, y: ge.height * 0.5 },
							se = o.moveX - (N.x - ge.left - ne.x) * (me - 1),
							be = o.moveY - (N.y - ge.top - ne.y) * (me - 1);
						(o.moveX = et(se, -h.value, h.value)),
							(o.moveY = et(be, -f.value, f.value));
					} else (o.moveX = 0), (o.moveY = r.value ? c : 0);
					t('scale', { scale: R, index: e.active });
				}
			},
			v = () => {
				m(1);
			},
			y = () => {
				const R = o.scale > 1 ? 1 : 2;
				m(
					R,
					R === 2 || r.value
						? { x: a.startX.value, y: a.startY.value }
						: void 0,
				);
			};
		let g,
			w,
			b,
			C,
			p,
			x,
			T,
			O,
			S = !1;
		const A = R => {
				const { touches: N } = R;
				if (((g = N.length), g === 2 && e.disableZoom)) return;
				const { offsetX: Y } = a;
				a.start(R),
					(w = o.moveX),
					(b = o.moveY),
					(O = Date.now()),
					(S = !1),
					(o.moving = g === 1 && (o.scale !== 1 || r.value)),
					(o.zooming = g === 2 && !Y.value),
					o.zooming && ((C = o.scale), (p = Wc(N)));
			},
			I = R => {
				const { touches: N } = R;
				if ((a.move(R), o.moving)) {
					const { deltaX: Y, deltaY: me } = a,
						ge = Y.value + w,
						ne = me.value + b;
					if (
						(e.vertical
							? a.isVertical() && Math.abs(ne) > f.value
							: a.isHorizontal() && Math.abs(ge) > h.value) &&
						!S
					) {
						o.moving = !1;
						return;
					}
					(S = !0),
						Me(R, !0),
						(o.moveX = et(ge, -h.value, h.value)),
						(o.moveY = et(ne, -f.value, f.value));
				}
				if (o.zooming && (Me(R, !0), N.length === 2)) {
					const Y = Wc(N),
						me = (C * Y) / p;
					(x = Kx(N)), m(me, x);
				}
			},
			k = R => {
				var N;
				const Y = (N = i.value) == null ? void 0 : N.$el,
					me = Y.firstElementChild,
					ge = R.target === Y,
					ne = me == null ? void 0 : me.contains(R.target);
				(!e.closeOnClickImage && ne) ||
					(!e.closeOnClickOverlay && ge) ||
					t('close');
			},
			P = R => {
				if (g > 1) return;
				const N = Date.now() - O,
					Y = 250;
				a.isTap.value &&
					(N < Y
						? e.doubleScale
							? T
								? (clearTimeout(T), (T = null), y())
								: (T = setTimeout(() => {
										k(R), (T = null);
									}, Y))
							: k(R)
						: N > jd && t('longPress'));
			},
			B = R => {
				let N = !1;
				if (
					(o.moving || o.zooming) &&
					((N = !0),
					o.moving && w === o.moveX && b === o.moveY && (N = !1),
					!R.touches.length)
				) {
					o.zooming &&
						((o.moveX = et(o.moveX, -h.value, h.value)),
						(o.moveY = et(o.moveY, -f.value, f.value)),
						(o.zooming = !1)),
						(o.moving = !1),
						(w = 0),
						(b = 0),
						(C = 1),
						o.scale < 1 && v();
					const Y = +e.maxZoom;
					o.scale > Y && m(Y, x);
				}
				Me(R, N), P(R), a.reset();
			},
			X = () => {
				const { rootWidth: R, rootHeight: N } = e,
					Y = N / R,
					{ imageRatio: me } = o;
				(s.value = o.imageRatio > Y && me < Yc),
					(r.value = o.imageRatio > Y && me >= Yc),
					r.value &&
						((c = (me * R - N) / 2),
						(o.moveY = c),
						(o.initializing = !0),
						lt(() => {
							o.initializing = !1;
						})),
					v();
			},
			V = R => {
				const { naturalWidth: N, naturalHeight: Y } = R.target;
				(o.imageRatio = Y / N), X();
			};
		return (
			ee(() => e.active, v),
			ee(
				() => e.show,
				R => {
					R || v();
				},
			),
			ee(() => [e.rootWidth, e.rootHeight], X),
			Ue('touchmove', I, {
				target: L(() => {
					var R;
					return (R = i.value) == null ? void 0 : R.$el;
				}),
			}),
			ke({ resetScale: v }),
			() => {
				const R = { loading: () => d(Nt, { type: 'spinner' }, null) };
				return d(
					jr,
					{
						ref: i,
						class: Si('swipe-item'),
						onTouchstartPassive: A,
						onTouchend: B,
						onTouchcancel: B,
					},
					{
						default: () => [
							n.image
								? d('div', { class: Si('image-wrap') }, [
										n.image({ src: e.src, onLoad: V, style: u.value }),
									])
								: d(
										Gl,
										{
											ref: l,
											src: e.src,
											fit: 'contain',
											class: Si('image', { vertical: s.value }),
											style: u.value,
											onLoad: V,
										},
										R,
									),
						],
					},
				);
			}
		);
	},
});
const [Xx, yo] = W('image-preview'),
	Zx = ['show', 'teleport', 'transition', 'overlayStyle', 'closeOnPopstate'],
	Jx = {
		show: Boolean,
		loop: z,
		images: Ve(),
		minZoom: le(1 / 3),
		maxZoom: le(3),
		overlay: z,
		vertical: Boolean,
		closeable: Boolean,
		showIndex: z,
		className: Ne,
		closeIcon: Z('clear'),
		transition: String,
		beforeClose: Function,
		doubleScale: z,
		overlayClass: Ne,
		overlayStyle: Object,
		swipeDuration: le(300),
		startPosition: le(0),
		showIndicators: Boolean,
		closeOnPopstate: z,
		closeOnClickImage: z,
		closeOnClickOverlay: z,
		closeIconPosition: Z('top-right'),
		teleport: [String, Object],
	};
var Hf = j({
	name: Xx,
	props: Jx,
	emits: ['scale', 'close', 'closed', 'change', 'longPress', 'update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(),
			l = He({ active: 0, rootWidth: 0, rootHeight: 0, disableZoom: !1 }),
			i = () => {
				if (o.value) {
					const C = Ae(o.value.$el);
					(l.rootWidth = C.width), (l.rootHeight = C.height), o.value.resize();
				}
			},
			s = C => t('scale', C),
			r = C => t('update:show', C),
			c = () => {
				Un(e.beforeClose, { args: [l.active], done: () => r(!1) });
			},
			u = C => {
				C !== l.active && ((l.active = C), t('change', C));
			},
			h = () => {
				if (e.showIndex)
					return d('div', { class: yo('index') }, [
						n.index
							? n.index({ index: l.active })
							: `${l.active + 1} / ${e.images.length}`,
					]);
			},
			f = () => {
				if (n.cover) return d('div', { class: yo('cover') }, [n.cover()]);
			},
			m = () => {
				l.disableZoom = !0;
			},
			v = () => {
				l.disableZoom = !1;
			},
			y = () =>
				d(
					Hr,
					{
						ref: o,
						lazyRender: !0,
						loop: e.loop,
						class: yo('swipe'),
						vertical: e.vertical,
						duration: e.swipeDuration,
						initialSwipe: e.startPosition,
						showIndicators: e.showIndicators,
						indicatorColor: 'white',
						onChange: u,
						onDragEnd: v,
						onDragStart: m,
					},
					{
						default: () => [
							e.images.map((C, p) =>
								d(
									Gx,
									{
										ref: x => {
											p === l.active && (a.value = x);
										},
										src: C,
										show: e.show,
										active: l.active,
										maxZoom: e.maxZoom,
										minZoom: e.minZoom,
										rootWidth: l.rootWidth,
										rootHeight: l.rootHeight,
										disableZoom: l.disableZoom,
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
			g = () => {
				if (e.closeable)
					return d(
						Ce,
						{
							role: 'button',
							name: e.closeIcon,
							class: [yo('close-icon', e.closeIconPosition), gt],
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
			We(i),
			ee([Mt, Tt], i),
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
								i(), b(+x, { immediate: !0 });
							}))
						: t('close', { index: l.active, url: p[l.active] });
				},
			),
			() =>
				d(
					zt,
					_e(
						{
							class: [yo(), e.className],
							overlayClass: [yo('overlay'), e.overlayClass],
							onClosed: w,
							'onUpdate:show': r,
						},
						Ie(e, Zx),
					),
					{ default: () => [g(), y(), h(), f()] },
				)
		);
	},
});
let il;
const Qx = {
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
function eS() {
	({ instance: il } = wf({
		setup() {
			const { state: e, toggle: t } = pf(),
				n = () => {
					e.images = [];
				};
			return () => d(Hf, _e(e, { onClosed: n, 'onUpdate:show': t }), null);
		},
	}));
}
const tS = (e, t = 0) => {
		if (_t)
			return (
				il || eS(),
				(e = Array.isArray(e) ? { images: e, startPosition: t } : e),
				il.open(he({}, Qx, e)),
				il
			);
	},
	nS = G(Hf);
function oS() {
	return Array(26)
		.fill('')
		.map((n, o) => String.fromCharCode(65 + o));
}
const [jf, Ci] = W('index-bar'),
	aS = {
		sticky: z,
		zIndex: q,
		teleport: [String, Object],
		highlightColor: String,
		stickyOffsetTop: Ke(0),
		indexList: { type: Array, default: oS },
	},
	Uf = Symbol(jf);
var lS = j({
	name: jf,
	props: aS,
	emits: ['select', 'change'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(),
			l = D(''),
			i = kt(),
			s = Vo(o),
			{ children: r, linkChildren: c } = rt(Uf);
		let u;
		c({ props: e });
		const h = L(() => {
				if (Pe(e.zIndex)) return { zIndex: +e.zIndex + 1 };
			}),
			f = L(() => {
				if (e.highlightColor) return { color: e.highlightColor };
			}),
			m = (S, A) => {
				for (let I = r.length - 1; I >= 0; I--) {
					const k = I > 0 ? A[I - 1].height : 0,
						P = e.sticky ? k + e.stickyOffsetTop : 0;
					if (S + P >= A[I].top) return I;
				}
				return -1;
			},
			v = S => r.find(A => String(A.index) === S),
			y = () => {
				if (ao(o)) return;
				const { sticky: S, indexList: A } = e,
					I = hn(s.value),
					k = Ae(s),
					P = r.map(X => X.getRect(s.value, k));
				let B = -1;
				if (u) {
					const X = v(u);
					if (X) {
						const V = X.getRect(s.value, k);
						B = m(V.top, P);
					}
				} else B = m(I, P);
				(l.value = A[B]),
					S &&
						r.forEach((X, V) => {
							const { state: R, $el: N } = X;
							if (V === B || V === B - 1) {
								const Y = N.getBoundingClientRect();
								(R.left = Y.left), (R.width = Y.width);
							} else (R.left = null), (R.width = null);
							if (V === B)
								(R.active = !0),
									(R.top = Math.max(e.stickyOffsetTop, P[V].top - I) + k.top);
							else if (V === B - 1 && u === '') {
								const Y = P[B].top - I;
								(R.active = Y > 0), (R.top = Y + k.top - P[V].height);
							} else R.active = !1;
						}),
					(u = '');
			},
			g = () => {
				Te(y);
			};
		Ue('scroll', y, { target: s, passive: !0 }),
			We(g),
			ee(() => e.indexList, g),
			ee(l, S => {
				S && t('change', S);
			});
		const w = () =>
				e.indexList.map(S => {
					const A = S === l.value;
					return d(
						'span',
						{
							class: Ci('index', { active: A }),
							style: A ? f.value : void 0,
							'data-index': S,
						},
						[S],
					);
				}),
			b = S => {
				u = String(S);
				const A = v(u);
				if (A) {
					const I = hn(s.value),
						k = Ae(s),
						{ offsetHeight: P } = document.documentElement;
					if ((A.$el.scrollIntoView(), I === P - k.height)) {
						y();
						return;
					}
					e.sticky && e.stickyOffsetTop && Fl(_a() - e.stickyOffsetTop),
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
				if ((i.move(S), i.isVertical())) {
					Me(S);
					const { clientX: A, clientY: I } = S.touches[0],
						k = document.elementFromPoint(A, I);
					if (k) {
						const { index: P } = k.dataset;
						P && x !== P && ((x = P), C(k));
					}
				}
			},
			O = () =>
				d(
					'div',
					{
						ref: a,
						class: Ci('sidebar'),
						style: h.value,
						onClick: p,
						onTouchstartPassive: i.start,
					},
					[w()],
				);
		return (
			ke({ scrollTo: b }),
			Ue('touchmove', T, { target: a }),
			() => {
				var S;
				return d('div', { ref: o, class: Ci() }, [
					e.teleport
						? d(Do, { to: e.teleport }, { default: () => [O()] })
						: O(),
					(S = n.default) == null ? void 0 : S.call(n),
				]);
			}
		);
	},
});
const [iS, rS] = W('index-anchor'),
	sS = { index: q };
var cS = j({
	name: iS,
	props: sS,
	setup(e, { slots: t }) {
		const n = He({
				top: 0,
				left: null,
				rect: { top: 0, height: 0 },
				width: null,
				active: !1,
			}),
			o = D(),
			{ parent: a } = ot(Uf);
		if (!a) return;
		const l = () => n.active && a.props.sticky,
			i = L(() => {
				const { zIndex: r, highlightColor: c } = a.props;
				if (l())
					return he(yn(r), {
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
							? (n.rect.top = u.top + _a())
							: (n.rect.top = u.top + hn(r) - c.top),
						n.rect
					);
				},
			}),
			() => {
				const r = l();
				return d(
					'div',
					{ ref: o, style: { height: r ? `${n.rect.height}px` : void 0 } },
					[
						d(
							'div',
							{ style: i.value, class: [rS({ sticky: r }), { [Lr]: r }] },
							[t.default ? t.default() : e.index],
						),
					],
				);
			}
		);
	},
});
const uS = G(cS),
	dS = G(lS),
	[fS, po, hS] = W('list'),
	mS = {
		error: Boolean,
		offset: le(300),
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
var vS = j({
	name: fS,
	props: mS,
	emits: ['load', 'update:error', 'update:loading'],
	setup(e, { emit: t, slots: n }) {
		const o = D(e.loading),
			a = D(),
			l = D(),
			i = Uy(),
			s = Vo(a),
			r = L(() => e.scroller || s.value),
			c = () => {
				Te(() => {
					if (
						o.value ||
						e.finished ||
						e.disabled ||
						e.error ||
						(i == null ? void 0 : i.value) === !1
					)
						return;
					const { direction: v } = e,
						y = +e.offset,
						g = Ae(r);
					if (!g.height || ao(a)) return;
					let w = !1;
					const b = Ae(l);
					v === 'up'
						? (w = g.top - b.top <= y)
						: (w = b.bottom - g.bottom <= y),
						w && ((o.value = !0), t('update:loading', !0), t('load'));
				});
			},
			u = () => {
				if (e.finished) {
					const v = n.finished ? n.finished() : e.finishedText;
					if (v) return d('div', { class: po('finished-text') }, [v]);
				}
			},
			h = () => {
				t('update:error', !1), c();
			},
			f = () => {
				if (e.error) {
					const v = n.error ? n.error() : e.errorText;
					if (v)
						return d(
							'div',
							{
								role: 'button',
								class: po('error-text'),
								tabindex: 0,
								onClick: h,
							},
							[v],
						);
				}
			},
			m = () => {
				if (o.value && !e.finished && !e.disabled)
					return d('div', { class: po('loading') }, [
						n.loading
							? n.loading()
							: d(
									Nt,
									{ class: po('loading-icon') },
									{ default: () => [e.loadingText || hS('loading')] },
								),
					]);
			};
		return (
			ee(() => [e.loading, e.finished, e.error], c),
			i &&
				ee(i, v => {
					v && c();
				}),
			Zu(() => {
				o.value = e.loading;
			}),
			We(() => {
				e.immediateCheck && c();
			}),
			ke({ check: c }),
			Ue('scroll', c, { target: r, passive: !0 }),
			() => {
				var v;
				const y = (v = n.default) == null ? void 0 : v.call(n),
					g = d('div', { ref: l, class: po('placeholder') }, null);
				return d(
					'div',
					{ ref: a, role: 'feed', class: po(), 'aria-busy': o.value },
					[
						e.direction === 'down' ? y : g,
						m(),
						u(),
						f(),
						e.direction === 'up' ? y : g,
					],
				);
			}
		);
	},
});
const gS = G(vS),
	[bS, ln] = W('nav-bar'),
	yS = {
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
var pS = j({
	name: bS,
	props: yS,
	emits: ['clickLeft', 'clickRight'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Hl(o, ln),
			l = u => {
				e.leftDisabled || t('clickLeft', u);
			},
			i = u => {
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
				const { title: u, fixed: h, border: f, zIndex: m } = e,
					v = yn(m),
					y = e.leftArrow || e.leftText || n.left,
					g = e.rightText || n.right;
				return d(
					'div',
					{
						ref: o,
						style: v,
						class: [
							ln({ fixed: h }),
							{ [Lr]: f, 'van-safe-area-top': e.safeAreaInsetTop },
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
											e.clickable && !e.leftDisabled ? gt : '',
										],
										onClick: l,
									},
									[s()],
								),
							d('div', { class: [ln('title'), 'van-ellipsis'] }, [
								n.title ? n.title() : u,
							]),
							g &&
								d(
									'div',
									{
										class: [
											ln('right', { disabled: e.rightDisabled }),
											e.clickable && !e.rightDisabled ? gt : '',
										],
										onClick: i,
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
const wS = G(pS),
	[xS, qo] = W('notice-bar'),
	SS = {
		text: String,
		mode: String,
		color: String,
		delay: le(1),
		speed: le(60),
		leftIcon: String,
		wrapable: Boolean,
		background: String,
		scrollable: { type: Boolean, default: null },
	};
var CS = j({
	name: xS,
	props: SS,
	emits: ['close', 'replay'],
	setup(e, { emit: t, slots: n }) {
		let o = 0,
			a = 0,
			l;
		const i = D(),
			s = D(),
			r = He({ show: !0, offset: 0, duration: 0 }),
			c = () => {
				if (n['left-icon']) return n['left-icon']();
				if (e.leftIcon)
					return d(Ce, { class: qo('left-icon'), name: e.leftIcon }, null);
			},
			u = () => {
				if (e.mode === 'closeable') return 'cross';
				if (e.mode === 'link') return 'arrow';
			},
			h = g => {
				e.mode === 'closeable' && ((r.show = !1), t('close', g));
			},
			f = () => {
				if (n['right-icon']) return n['right-icon']();
				const g = u();
				if (g)
					return d(Ce, { name: g, class: qo('right-icon'), onClick: h }, null);
			},
			m = () => {
				(r.offset = o),
					(r.duration = 0),
					lt(() => {
						Bn(() => {
							(r.offset = -a), (r.duration = (a + o) / +e.speed), t('replay');
						});
					});
			},
			v = () => {
				const g = e.scrollable === !1 && !e.wrapable,
					w = {
						transform: r.offset ? `translateX(${r.offset}px)` : '',
						transitionDuration: `${r.duration}s`,
					};
				return d('div', { ref: i, role: 'marquee', class: qo('wrap') }, [
					d(
						'div',
						{
							ref: s,
							style: w,
							class: [qo('content'), { 'van-ellipsis': g }],
							onTransitionend: m,
						},
						[n.default ? n.default() : e.text],
					),
				]);
			},
			y = () => {
				const { delay: g, speed: w, scrollable: b } = e,
					C = Pe(g) ? +g * 1e3 : 0;
				(o = 0),
					(a = 0),
					(r.offset = 0),
					(r.duration = 0),
					clearTimeout(l),
					(l = setTimeout(() => {
						if (!i.value || !s.value || b === !1) return;
						const p = Ae(i).width,
							x = Ae(s).width;
						(b || x > p) &&
							Bn(() => {
								(o = p), (a = x), (r.offset = -a), (r.duration = a / +w);
							});
					}, C));
			};
		return (
			zl(y),
			Lo(y),
			Ue('pageshow', y),
			ke({ reset: y }),
			ee(() => [e.text, e.scrollable], y),
			() => {
				const { color: g, wrapable: w, background: b } = e;
				return Qe(
					d(
						'div',
						{
							role: 'alert',
							class: qo({ wrapable: w }),
							style: { color: g, background: b },
						},
						[c(), v(), f()],
					),
					[[nt, r.show]],
				);
			}
		);
	},
});
const TS = G(CS),
	[_S, kS] = W('notify'),
	ES = ['lockScroll', 'position', 'show', 'teleport', 'zIndex'],
	PS = he({}, Fo, {
		type: Z('danger'),
		color: String,
		message: q,
		position: Z('top'),
		className: Ne,
		background: String,
		lockScroll: Boolean,
	});
var $S = j({
	name: _S,
	props: PS,
	emits: ['update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = a => t('update:show', a);
		return () =>
			d(
				zt,
				_e(
					{
						class: [kS([e.type]), e.className],
						style: { color: e.color, background: e.background },
						overlay: !1,
						duration: 0.2,
						'onUpdate:show': o,
					},
					Ie(e, ES),
				),
				{ default: () => [n.default ? n.default() : e.message] },
			);
	},
});
const IS = G($S),
	[AS, da] = W('key'),
	OS = d('svg', { class: da('collapse-icon'), viewBox: '0 0 30 24' }, [
		d(
			'path',
			{
				d: 'M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z',
				fill: 'currentColor',
			},
			null,
		),
	]),
	RS = d('svg', { class: da('delete-icon'), viewBox: '0 0 32 22' }, [
		d(
			'path',
			{
				d: 'M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z',
				fill: 'currentColor',
			},
			null,
		),
	]);
var Ti = j({
	name: AS,
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
			a = kt(),
			l = c => {
				a.start(c), (o.value = !0);
			},
			i = c => {
				a.move(c), a.direction.value && (o.value = !1);
			},
			s = c => {
				o.value &&
					(n.default || Me(c), (o.value = !1), t('press', e.text, e.type));
			},
			r = () => {
				if (e.loading) return d(Nt, { class: da('loading-icon') }, null);
				const c = n.default ? n.default() : e.text;
				switch (e.type) {
					case 'delete':
						return c || RS;
					case 'extra':
						return c || OS;
					default:
						return c;
				}
			};
		return () =>
			d(
				'div',
				{
					class: da('wrapper', { wider: e.wider }),
					onTouchstartPassive: l,
					onTouchmovePassive: i,
					onTouchend: s,
					onTouchcancel: s,
				},
				[
					d(
						'div',
						{
							role: 'button',
							tabindex: 0,
							class: da([
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
const [BS, kn] = W('number-keyboard'),
	DS = {
		show: Boolean,
		title: String,
		theme: Z('default'),
		zIndex: q,
		teleport: [String, Object],
		maxlength: le(1 / 0),
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
function MS(e) {
	for (let t = e.length - 1; t > 0; t--) {
		const n = Math.floor(Math.random() * (t + 1)),
			o = e[t];
		(e[t] = e[n]), (e[n] = o);
	}
	return e;
}
var LS = j({
	name: BS,
	inheritAttrs: !1,
	props: DS,
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
			l = () => {
				const g = Array(9)
					.fill('')
					.map((w, b) => ({ text: b + 1 }));
				return e.randomKeyOrder && MS(g), g;
			},
			i = () => [
				...l(),
				{ text: e.extraKey, type: 'extra' },
				{ text: 0 },
				{
					text: e.showDeleteKey ? e.deleteButtonText : '',
					type: e.showDeleteKey ? 'delete' : '',
				},
			],
			s = () => {
				const g = l(),
					{ extraKey: w } = e,
					b = Array.isArray(w) ? w : [w];
				return (
					b.length === 1
						? g.push({ text: 0, wider: !0 }, { text: b[0], type: 'extra' })
						: b.length === 2 &&
							g.push(
								{ text: b[0], type: 'extra' },
								{ text: 0 },
								{ text: b[1], type: 'extra' },
							),
					g
				);
			},
			r = L(() => (e.theme === 'custom' ? s() : i())),
			c = () => {
				e.show && t('blur');
			},
			u = () => {
				t('close'), e.blurOnClose && c();
			},
			h = () => t(e.show ? 'show' : 'hide'),
			f = (g, w) => {
				if (g === '') {
					w === 'extra' && c();
					return;
				}
				const b = e.modelValue;
				w === 'delete'
					? (t('delete'), t('update:modelValue', b.slice(0, b.length - 1)))
					: w === 'close'
						? u()
						: b.length < +e.maxlength &&
							(t('input', g), t('update:modelValue', b + g));
			},
			m = () => {
				const { title: g, theme: w, closeButtonText: b } = e,
					C = n['title-left'],
					p = b && w === 'default';
				if (g || p || C)
					return d('div', { class: kn('header') }, [
						C && d('span', { class: kn('title-left') }, [C()]),
						g && d('h2', { class: kn('title') }, [g]),
						p &&
							d(
								'button',
								{ type: 'button', class: [kn('close'), gt], onClick: u },
								[b],
							),
					]);
			},
			v = () =>
				r.value.map(g => {
					const w = {};
					return (
						g.type === 'delete' && (w.default = n.delete),
						g.type === 'extra' && (w.default = n['extra-key']),
						d(
							Ti,
							{
								key: g.text,
								text: g.text,
								type: g.type,
								wider: g.wider,
								color: g.color,
								onPress: f,
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
								Ti,
								{
									large: !0,
									text: e.deleteButtonText,
									type: 'delete',
									onPress: f,
								},
								{ default: n.delete },
							),
						d(
							Ti,
							{
								large: !0,
								text: e.closeButtonText,
								type: 'close',
								color: 'blue',
								loading: e.closeButtonLoading,
								onPress: f,
							},
							null,
						),
					]);
			};
		return (
			ee(
				() => e.show,
				g => {
					e.transition || t(g ? 'show' : 'hide');
				},
			),
			e.hideOnClickOutside && Vl(a, c, { eventName: 'touchstart' }),
			() => {
				const g = m(),
					w = d(
						Mo,
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
													'with-title': !!g,
												}),
												onAnimationend: h,
												onTouchstartPassive: Dr,
											},
											o,
										),
										[
											g,
											d('div', { class: kn('body') }, [
												d('div', { class: kn('keys') }, [v()]),
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
					? d(Do, { to: e.teleport }, { default: () => [w] })
					: w;
			}
		);
	},
});
const VS = G(LS),
	[FS, wo, Kc] = W('pagination'),
	_i = (e, t, n) => ({ number: e, text: t, active: n }),
	NS = {
		mode: Z('multi'),
		prevText: String,
		nextText: String,
		pageCount: le(0),
		modelValue: Ke(0),
		totalItems: le(0),
		showPageSize: le(5),
		itemsPerPage: le(10),
		forceEllipses: Boolean,
		showPrevButton: z,
		showNextButton: z,
	};
var zS = j({
	name: FS,
	props: NS,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = L(() => {
				const { pageCount: u, totalItems: h, itemsPerPage: f } = e,
					m = +u || Math.ceil(+h / +f);
				return Math.max(1, m);
			}),
			a = L(() => {
				const u = [],
					h = o.value,
					f = +e.showPageSize,
					{ modelValue: m, forceEllipses: v } = e;
				let y = 1,
					g = h;
				const w = f < h;
				w &&
					((y = Math.max(m - Math.floor(f / 2), 1)),
					(g = y + f - 1),
					g > h && ((g = h), (y = g - f + 1)));
				for (let b = y; b <= g; b++) {
					const C = _i(b, b, b === m);
					u.push(C);
				}
				if (w && f > 0 && v) {
					if (y > 1) {
						const b = _i(y - 1, '...');
						u.unshift(b);
					}
					if (g < h) {
						const b = _i(g + 1, '...');
						u.push(b);
					}
				}
				return u;
			}),
			l = (u, h) => {
				(u = et(u, 1, o.value)),
					e.modelValue !== u &&
						(t('update:modelValue', u), h && t('change', u));
			};
		Ro(() => l(e.modelValue));
		const i = () =>
				d('li', { class: wo('page-desc') }, [
					n.pageDesc ? n.pageDesc() : `${e.modelValue}/${o.value}`,
				]),
			s = () => {
				const { mode: u, modelValue: h, showPrevButton: f } = e;
				if (!f) return;
				const m = n['prev-text'],
					v = h === 1;
				return d(
					'li',
					{
						class: [
							wo('item', { disabled: v, border: u === 'simple', prev: !0 }),
							ca,
						],
					},
					[
						d(
							'button',
							{ type: 'button', disabled: v, onClick: () => l(h - 1, !0) },
							[m ? m() : e.prevText || Kc('prev')],
						),
					],
				);
			},
			r = () => {
				const { mode: u, modelValue: h, showNextButton: f } = e;
				if (!f) return;
				const m = n['next-text'],
					v = h === o.value;
				return d(
					'li',
					{
						class: [
							wo('item', { disabled: v, border: u === 'simple', next: !0 }),
							ca,
						],
					},
					[
						d(
							'button',
							{ type: 'button', disabled: v, onClick: () => l(h + 1, !0) },
							[m ? m() : e.nextText || Kc('next')],
						),
					],
				);
			},
			c = () =>
				a.value.map(u =>
					d('li', { class: [wo('item', { active: u.active, page: !0 }), ca] }, [
						d(
							'button',
							{
								type: 'button',
								'aria-current': u.active || void 0,
								onClick: () => l(u.number, !0),
							},
							[n.page ? n.page(u) : u.text],
						),
					]),
				);
		return () =>
			d('nav', { role: 'navigation', class: wo() }, [
				d('ul', { class: wo('items') }, [
					s(),
					e.mode === 'simple' ? i() : c(),
					r(),
				]),
			]);
	},
});
const HS = G(zS),
	[jS, Go] = W('password-input'),
	US = {
		info: String,
		mask: z,
		value: Z(''),
		gutter: q,
		length: le(6),
		focused: Boolean,
		errorInfo: String,
	};
var WS = j({
	name: jS,
	props: US,
	emits: ['focus'],
	setup(e, { emit: t }) {
		const n = a => {
				a.stopPropagation(), t('focus', a);
			},
			o = () => {
				const a = [],
					{ mask: l, value: i, gutter: s, focused: r } = e,
					c = +e.length;
				for (let u = 0; u < c; u++) {
					const h = i[u],
						f = u !== 0 && !s,
						m = r && u === i.length;
					let v;
					u !== 0 && s && (v = { marginLeft: we(s) }),
						a.push(
							d(
								'li',
								{ class: [{ [zd]: f }, Go('item', { focus: m })], style: v },
								[
									l
										? d(
												'i',
												{ style: { visibility: h ? 'visible' : 'hidden' } },
												null,
											)
										: h,
									m && d('div', { class: Go('cursor') }, null),
								],
							),
						);
				}
				return a;
			};
		return () => {
			const a = e.errorInfo || e.info;
			return d('div', { class: Go() }, [
				d(
					'ul',
					{
						class: [Go('security'), { [ca]: !e.gutter }],
						onTouchstartPassive: n,
					},
					[o()],
				),
				a && d('div', { class: Go(e.errorInfo ? 'error-info' : 'info') }, [a]),
			]);
		};
	},
});
const YS = G(WS),
	KS = G(e0);
function jt(e) {
	if (e == null) return window;
	if (e.toString() !== '[object Window]') {
		var t = e.ownerDocument;
		return (t && t.defaultView) || window;
	}
	return e;
}
function Zr(e) {
	var t = jt(e).Element;
	return e instanceof t || e instanceof Element;
}
function Lt(e) {
	var t = jt(e).HTMLElement;
	return e instanceof t || e instanceof HTMLElement;
}
function Wf(e) {
	if (typeof ShadowRoot > 'u') return !1;
	var t = jt(e).ShadowRoot;
	return e instanceof t || e instanceof ShadowRoot;
}
var Oo = Math.round;
function cr() {
	var e = navigator.userAgentData;
	return e != null && e.brands
		? e.brands
				.map(function (t) {
					return t.brand + '/' + t.version;
				})
				.join(' ')
		: navigator.userAgent;
}
function qS() {
	return !/^((?!chrome|android).)*safari/i.test(cr());
}
function pl(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var o = e.getBoundingClientRect(),
		a = 1,
		l = 1;
	t &&
		Lt(e) &&
		((a = (e.offsetWidth > 0 && Oo(o.width) / e.offsetWidth) || 1),
		(l = (e.offsetHeight > 0 && Oo(o.height) / e.offsetHeight) || 1));
	var i = Zr(e) ? jt(e) : window,
		s = i.visualViewport,
		r = !qS() && n,
		c = (o.left + (r && s ? s.offsetLeft : 0)) / a,
		u = (o.top + (r && s ? s.offsetTop : 0)) / l,
		h = o.width / a,
		f = o.height / l;
	return {
		width: h,
		height: f,
		top: u,
		right: c + h,
		bottom: u + f,
		left: c,
		x: c,
		y: u,
	};
}
function Yf(e) {
	var t = jt(e),
		n = t.pageXOffset,
		o = t.pageYOffset;
	return { scrollLeft: n, scrollTop: o };
}
function GS(e) {
	return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function XS(e) {
	return e === jt(e) || !Lt(e) ? Yf(e) : GS(e);
}
function mn(e) {
	return e ? (e.nodeName || '').toLowerCase() : null;
}
function Xl(e) {
	return ((Zr(e) ? e.ownerDocument : e.document) || window.document)
		.documentElement;
}
function ZS(e) {
	return pl(Xl(e)).left + Yf(e).scrollLeft;
}
function vn(e) {
	return jt(e).getComputedStyle(e);
}
function Jr(e) {
	var t = vn(e),
		n = t.overflow,
		o = t.overflowX,
		a = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function JS(e) {
	var t = e.getBoundingClientRect(),
		n = Oo(t.width) / e.offsetWidth || 1,
		o = Oo(t.height) / e.offsetHeight || 1;
	return n !== 1 || o !== 1;
}
function QS(e, t, n) {
	n === void 0 && (n = !1);
	var o = Lt(t),
		a = Lt(t) && JS(t),
		l = Xl(t),
		i = pl(e, a, n),
		s = { scrollLeft: 0, scrollTop: 0 },
		r = { x: 0, y: 0 };
	return (
		(o || (!o && !n)) &&
			((mn(t) !== 'body' || Jr(l)) && (s = XS(t)),
			Lt(t)
				? ((r = pl(t, !0)), (r.x += t.clientLeft), (r.y += t.clientTop))
				: l && (r.x = ZS(l))),
		{
			x: i.left + s.scrollLeft - r.x,
			y: i.top + s.scrollTop - r.y,
			width: i.width,
			height: i.height,
		}
	);
}
function eC(e) {
	var t = pl(e),
		n = e.offsetWidth,
		o = e.offsetHeight;
	return (
		Math.abs(t.width - n) <= 1 && (n = t.width),
		Math.abs(t.height - o) <= 1 && (o = t.height),
		{ x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
	);
}
function Qr(e) {
	return mn(e) === 'html'
		? e
		: e.assignedSlot || e.parentNode || (Wf(e) ? e.host : null) || Xl(e);
}
function Kf(e) {
	return ['html', 'body', '#document'].indexOf(mn(e)) >= 0
		? e.ownerDocument.body
		: Lt(e) && Jr(e)
			? e
			: Kf(Qr(e));
}
function rl(e, t) {
	var n;
	t === void 0 && (t = []);
	var o = Kf(e),
		a = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
		l = jt(o),
		i = a ? [l].concat(l.visualViewport || [], Jr(o) ? o : []) : o,
		s = t.concat(i);
	return a ? s : s.concat(rl(Qr(i)));
}
function tC(e) {
	return ['table', 'td', 'th'].indexOf(mn(e)) >= 0;
}
function qc(e) {
	return !Lt(e) || vn(e).position === 'fixed' ? null : e.offsetParent;
}
function nC(e) {
	var t = /firefox/i.test(cr()),
		n = /Trident/i.test(cr());
	if (n && Lt(e)) {
		var o = vn(e);
		if (o.position === 'fixed') return null;
	}
	var a = Qr(e);
	for (Wf(a) && (a = a.host); Lt(a) && ['html', 'body'].indexOf(mn(a)) < 0; ) {
		var l = vn(a);
		if (
			l.transform !== 'none' ||
			l.perspective !== 'none' ||
			l.contain === 'paint' ||
			['transform', 'perspective'].indexOf(l.willChange) !== -1 ||
			(t && l.willChange === 'filter') ||
			(t && l.filter && l.filter !== 'none')
		)
			return a;
		a = a.parentNode;
	}
	return null;
}
function qf(e) {
	for (var t = jt(e), n = qc(e); n && tC(n) && vn(n).position === 'static'; )
		n = qc(n);
	return n &&
		(mn(n) === 'html' || (mn(n) === 'body' && vn(n).position === 'static'))
		? t
		: n || nC(e) || t;
}
var Po = 'top',
	wl = 'bottom',
	Sa = 'right',
	oo = 'left',
	Gf = 'auto',
	oC = [Po, wl, Sa, oo],
	Xf = 'start',
	xl = 'end',
	aC = [].concat(oC, [Gf]).reduce(function (e, t) {
		return e.concat([t, t + '-' + Xf, t + '-' + xl]);
	}, []),
	lC = 'beforeRead',
	iC = 'read',
	rC = 'afterRead',
	sC = 'beforeMain',
	cC = 'main',
	uC = 'afterMain',
	dC = 'beforeWrite',
	fC = 'write',
	hC = 'afterWrite',
	ur = [lC, iC, rC, sC, cC, uC, dC, fC, hC];
function mC(e) {
	var t = new Map(),
		n = new Set(),
		o = [];
	e.forEach(function (l) {
		t.set(l.name, l);
	});
	function a(l) {
		n.add(l.name);
		var i = [].concat(l.requires || [], l.requiresIfExists || []);
		i.forEach(function (s) {
			if (!n.has(s)) {
				var r = t.get(s);
				r && a(r);
			}
		}),
			o.push(l);
	}
	return (
		e.forEach(function (l) {
			n.has(l.name) || a(l);
		}),
		o
	);
}
function vC(e) {
	var t = mC(e);
	return ur.reduce(function (n, o) {
		return n.concat(
			t.filter(function (a) {
				return a.phase === o;
			}),
		);
	}, []);
}
function gC(e) {
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
	return [].concat(n).reduce(function (a, l) {
		return a.replace(/%s/, l);
	}, e);
}
var Xn =
		'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
	bC =
		'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
	Gc = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function yC(e) {
	e.forEach(function (t) {
		[]
			.concat(Object.keys(t), Gc)
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
						ur.indexOf(t.phase) < 0 &&
							console.error(
								En(
									Xn,
									t.name,
									'"phase"',
									'either ' + ur.join(', '),
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
								Gc.map(function (o) {
									return '"' + o + '"';
								}).join(', ') +
								'; but "' +
								n +
								'" was provided.',
						);
				}
				t.requires &&
					t.requires.forEach(function (o) {
						e.find(function (a) {
							return a.name === o;
						}) == null && console.error(En(bC, String(t.name), o, o));
					});
			});
	});
}
function pC(e, t) {
	var n = new Set();
	return e.filter(function (o) {
		var a = t(o);
		if (!n.has(a)) return n.add(a), !0;
	});
}
function Zl(e) {
	return e.split('-')[0];
}
function wC(e) {
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
function Zf(e) {
	return e.split('-')[1];
}
function xC(e) {
	return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function SC(e) {
	var t = e.reference,
		n = e.element,
		o = e.placement,
		a = o ? Zl(o) : null,
		l = o ? Zf(o) : null,
		i = t.x + t.width / 2 - n.width / 2,
		s = t.y + t.height / 2 - n.height / 2,
		r;
	switch (a) {
		case Po:
			r = { x: i, y: t.y - n.height };
			break;
		case wl:
			r = { x: i, y: t.y + t.height };
			break;
		case Sa:
			r = { x: t.x + t.width, y: s };
			break;
		case oo:
			r = { x: t.x - n.width, y: s };
			break;
		default:
			r = { x: t.x, y: t.y };
	}
	var c = a ? xC(a) : null;
	if (c != null) {
		var u = c === 'y' ? 'height' : 'width';
		switch (l) {
			case Xf:
				r[c] = r[c] - (t[u] / 2 - n[u] / 2);
				break;
			case xl:
				r[c] = r[c] + (t[u] / 2 - n[u] / 2);
				break;
		}
	}
	return r;
}
var Xc =
		'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
	CC =
		'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
	Zc = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Jc() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	return !t.some(function (o) {
		return !(o && typeof o.getBoundingClientRect == 'function');
	});
}
function TC(e) {
	e === void 0 && (e = {});
	var t = e,
		n = t.defaultModifiers,
		o = n === void 0 ? [] : n,
		a = t.defaultOptions,
		l = a === void 0 ? Zc : a;
	return function (s, r, c) {
		c === void 0 && (c = l);
		var u = {
				placement: 'bottom',
				orderedModifiers: [],
				options: Object.assign({}, Zc, l),
				modifiersData: {},
				elements: { reference: s, popper: r },
				attributes: {},
				styles: {},
			},
			h = [],
			f = !1,
			m = {
				state: u,
				setOptions: function (w) {
					var b = typeof w == 'function' ? w(u.options) : w;
					y(),
						(u.options = Object.assign({}, l, u.options, b)),
						(u.scrollParents = {
							reference: Zr(s)
								? rl(s)
								: s.contextElement
									? rl(s.contextElement)
									: [],
							popper: rl(r),
						});
					var C = vC(wC([].concat(o, u.options.modifiers)));
					u.orderedModifiers = C.filter(function (k) {
						return k.enabled;
					});
					{
						var p = pC([].concat(C, u.options.modifiers), function (k) {
							var P = k.name;
							return P;
						});
						if ((yC(p), Zl(u.options.placement) === Gf)) {
							var x = u.orderedModifiers.find(function (k) {
								var P = k.name;
								return P === 'flip';
							});
							x ||
								console.error(
									[
										'Popper: "auto" placements require the "flip" modifier be',
										'present and enabled to work.',
									].join(' '),
								);
						}
						var T = vn(r),
							O = T.marginTop,
							S = T.marginRight,
							A = T.marginBottom,
							I = T.marginLeft;
						[O, S, A, I].some(function (k) {
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
					return v(), m.update();
				},
				forceUpdate: function () {
					if (!f) {
						var w = u.elements,
							b = w.reference,
							C = w.popper;
						if (!Jc(b, C)) {
							console.error(Xc);
							return;
						}
						(u.rects = {
							reference: QS(b, qf(C), u.options.strategy === 'fixed'),
							popper: eC(C),
						}),
							(u.reset = !1),
							(u.placement = u.options.placement),
							u.orderedModifiers.forEach(function (k) {
								return (u.modifiersData[k.name] = Object.assign({}, k.data));
							});
						for (var p = 0, x = 0; x < u.orderedModifiers.length; x++) {
							if (((p += 1), p > 100)) {
								console.error(CC);
								break;
							}
							if (u.reset === !0) {
								(u.reset = !1), (x = -1);
								continue;
							}
							var T = u.orderedModifiers[x],
								O = T.fn,
								S = T.options,
								A = S === void 0 ? {} : S,
								I = T.name;
							typeof O == 'function' &&
								(u = O({ state: u, options: A, name: I, instance: m }) || u);
						}
					}
				},
				update: gC(function () {
					return new Promise(function (g) {
						m.forceUpdate(), g(u);
					});
				}),
				destroy: function () {
					y(), (f = !0);
				},
			};
		if (!Jc(s, r)) return console.error(Xc), m;
		m.setOptions(c).then(function (g) {
			!f && c.onFirstUpdate && c.onFirstUpdate(g);
		});
		function v() {
			u.orderedModifiers.forEach(function (g) {
				var w = g.name,
					b = g.options,
					C = b === void 0 ? {} : b,
					p = g.effect;
				if (typeof p == 'function') {
					var x = p({ state: u, name: w, instance: m, options: C }),
						T = function () {};
					h.push(x || T);
				}
			});
		}
		function y() {
			h.forEach(function (g) {
				return g();
			}),
				(h = []);
		}
		return m;
	};
}
var Xa = { passive: !0 };
function _C(e) {
	var t = e.state,
		n = e.instance,
		o = e.options,
		a = o.scroll,
		l = a === void 0 ? !0 : a,
		i = o.resize,
		s = i === void 0 ? !0 : i,
		r = jt(t.elements.popper),
		c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return (
		l &&
			c.forEach(function (u) {
				u.addEventListener('scroll', n.update, Xa);
			}),
		s && r.addEventListener('resize', n.update, Xa),
		function () {
			l &&
				c.forEach(function (u) {
					u.removeEventListener('scroll', n.update, Xa);
				}),
				s && r.removeEventListener('resize', n.update, Xa);
		}
	);
}
var kC = {
	name: 'eventListeners',
	enabled: !0,
	phase: 'write',
	fn: function () {},
	effect: _C,
	data: {},
};
function EC(e) {
	var t = e.state,
		n = e.name;
	t.modifiersData[n] = SC({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: 'absolute',
		placement: t.placement,
	});
}
var PC = {
		name: 'popperOffsets',
		enabled: !0,
		phase: 'read',
		fn: EC,
		data: {},
	},
	$C = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function IC(e) {
	var t = e.x,
		n = e.y,
		o = window,
		a = o.devicePixelRatio || 1;
	return { x: Oo(t * a) / a || 0, y: Oo(n * a) / a || 0 };
}
function Qc(e) {
	var t,
		n = e.popper,
		o = e.popperRect,
		a = e.placement,
		l = e.variation,
		i = e.offsets,
		s = e.position,
		r = e.gpuAcceleration,
		c = e.adaptive,
		u = e.roundOffsets,
		h = e.isFixed,
		f = i.x,
		m = f === void 0 ? 0 : f,
		v = i.y,
		y = v === void 0 ? 0 : v,
		g = typeof u == 'function' ? u({ x: m, y }) : { x: m, y };
	(m = g.x), (y = g.y);
	var w = i.hasOwnProperty('x'),
		b = i.hasOwnProperty('y'),
		C = oo,
		p = Po,
		x = window;
	if (c) {
		var T = qf(n),
			O = 'clientHeight',
			S = 'clientWidth';
		if (
			(T === jt(n) &&
				((T = Xl(n)),
				vn(T).position !== 'static' &&
					s === 'absolute' &&
					((O = 'scrollHeight'), (S = 'scrollWidth'))),
			(T = T),
			a === Po || ((a === oo || a === Sa) && l === xl))
		) {
			p = wl;
			var A = h && T === x && x.visualViewport ? x.visualViewport.height : T[O];
			(y -= A - o.height), (y *= r ? 1 : -1);
		}
		if (a === oo || ((a === Po || a === wl) && l === xl)) {
			C = Sa;
			var I = h && T === x && x.visualViewport ? x.visualViewport.width : T[S];
			(m -= I - o.width), (m *= r ? 1 : -1);
		}
	}
	var k = Object.assign({ position: s }, c && $C),
		P = u === !0 ? IC({ x: m, y }) : { x: m, y };
	if (((m = P.x), (y = P.y), r)) {
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
function AC(e) {
	var t = e.state,
		n = e.options,
		o = n.gpuAcceleration,
		a = o === void 0 ? !0 : o,
		l = n.adaptive,
		i = l === void 0 ? !0 : l,
		s = n.roundOffsets,
		r = s === void 0 ? !0 : s;
	{
		var c = vn(t.elements.popper).transitionProperty || '';
		i &&
			['transform', 'top', 'right', 'bottom', 'left'].some(function (h) {
				return c.indexOf(h) >= 0;
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
		placement: Zl(t.placement),
		variation: Zf(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: a,
		isFixed: t.options.strategy === 'fixed',
	};
	t.modifiersData.popperOffsets != null &&
		(t.styles.popper = Object.assign(
			{},
			t.styles.popper,
			Qc(
				Object.assign({}, u, {
					offsets: t.modifiersData.popperOffsets,
					position: t.options.strategy,
					adaptive: i,
					roundOffsets: r,
				}),
			),
		)),
		t.modifiersData.arrow != null &&
			(t.styles.arrow = Object.assign(
				{},
				t.styles.arrow,
				Qc(
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
var OC = {
	name: 'computeStyles',
	enabled: !0,
	phase: 'beforeWrite',
	fn: AC,
	data: {},
};
function RC(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function (n) {
		var o = t.styles[n] || {},
			a = t.attributes[n] || {},
			l = t.elements[n];
		!Lt(l) ||
			!mn(l) ||
			(Object.assign(l.style, o),
			Object.keys(a).forEach(function (i) {
				var s = a[i];
				s === !1 ? l.removeAttribute(i) : l.setAttribute(i, s === !0 ? '' : s);
			}));
	});
}
function BC(e) {
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
					l = t.attributes[o] || {},
					i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]),
					s = i.reduce(function (r, c) {
						return (r[c] = ''), r;
					}, {});
				!Lt(a) ||
					!mn(a) ||
					(Object.assign(a.style, s),
					Object.keys(l).forEach(function (r) {
						a.removeAttribute(r);
					}));
			});
		}
	);
}
var DC = {
		name: 'applyStyles',
		enabled: !0,
		phase: 'write',
		fn: RC,
		effect: BC,
		requires: ['computeStyles'],
	},
	MC = [kC, PC, OC, DC],
	LC = TC({ defaultModifiers: MC });
function VC(e, t, n) {
	var o = Zl(e),
		a = [oo, Po].indexOf(o) >= 0 ? -1 : 1,
		l = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
		i = l[0],
		s = l[1];
	return (
		(i = i || 0),
		(s = (s || 0) * a),
		[oo, Sa].indexOf(o) >= 0 ? { x: s, y: i } : { x: i, y: s }
	);
}
function FC(e) {
	var t = e.state,
		n = e.options,
		o = e.name,
		a = n.offset,
		l = a === void 0 ? [0, 0] : a,
		i = aC.reduce(function (u, h) {
			return (u[h] = VC(h, t.rects, l)), u;
		}, {}),
		s = i[t.placement],
		r = s.x,
		c = s.y;
	t.modifiersData.popperOffsets != null &&
		((t.modifiersData.popperOffsets.x += r),
		(t.modifiersData.popperOffsets.y += c)),
		(t.modifiersData[o] = i);
}
var NC = {
	name: 'offset',
	enabled: !0,
	phase: 'main',
	requires: ['popperOffsets'],
	fn: FC,
};
const [zC, Zn] = W('popover'),
	HC = [
		'overlay',
		'duration',
		'teleport',
		'overlayStyle',
		'overlayClass',
		'closeOnClickOverlay',
	],
	jC = {
		show: Boolean,
		theme: Z('light'),
		overlay: Boolean,
		actions: Ve(),
		actionsDirection: Z('vertical'),
		trigger: Z('click'),
		duration: q,
		showArrow: z,
		placement: Z('bottom'),
		iconPrefix: String,
		overlayClass: Ne,
		overlayStyle: Object,
		closeOnClickAction: z,
		closeOnClickOverlay: z,
		closeOnClickOutside: z,
		offset: { type: Array, default: () => [0, 8] },
		teleport: { type: [String, Object], default: 'body' },
	};
var UC = j({
	name: zC,
	props: jC,
	emits: ['select', 'touchstart', 'update:show'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		let a;
		const l = D(),
			i = D(),
			s = D(),
			r = zr(
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
					he({}, NC, { options: { offset: e.offset } }),
				],
			}),
			u = () =>
				i.value && s.value ? LC(i.value, s.value.popupRef.value, c()) : null,
			h = () => {
				Te(() => {
					r.value &&
						(a
							? a.setOptions(c())
							: ((a = u()),
								_t &&
									(window.addEventListener('animationend', h),
									window.addEventListener('transitionend', h))));
				});
			},
			f = b => {
				r.value = b;
			},
			m = () => {
				e.trigger === 'click' && (r.value = !r.value);
			},
			v = (b, C) => {
				b.disabled ||
					(t('select', b, C), e.closeOnClickAction && (r.value = !1));
			},
			y = () => {
				r.value &&
					e.closeOnClickOutside &&
					(!e.overlay || e.closeOnClickOverlay) &&
					(r.value = !1);
			},
			g = (b, C) =>
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
										{ [Lr]: e.actionsDirection === 'vertical' },
									],
								},
								[b.text],
							),
						],
			w = (b, C) => {
				const { icon: p, color: x, disabled: T, className: O } = b;
				return d(
					'div',
					{
						role: 'menuitem',
						class: [
							Zn('action', { disabled: T, 'with-icon': p }),
							{ [Pb]: e.actionsDirection === 'horizontal' },
							O,
						],
						style: { color: x },
						tabindex: T ? void 0 : 0,
						'aria-disabled': T || void 0,
						onClick: () => v(b, C),
					},
					[g(b, C)],
				);
			};
		return (
			We(() => {
				h(),
					Ro(() => {
						var b;
						l.value = (b = s.value) == null ? void 0 : b.popupRef.value;
					});
			}),
			en(() => {
				a &&
					(_t &&
						(window.removeEventListener('animationend', h),
						window.removeEventListener('transitionend', h)),
					a.destroy(),
					(a = null));
			}),
			ee(() => [r.value, e.offset, e.placement], h),
			Vl([i, l], y, { eventName: 'touchstart' }),
			() => {
				var b;
				return d(Je, null, [
					d('span', { ref: i, class: Zn('wrapper'), onClick: m }, [
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
								'onUpdate:show': f,
							},
							o,
							bl(),
							Ie(e, HC),
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
const WC = G(UC),
	[YC, ki] = W('progress'),
	KC = {
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
var qC = j({
	name: YC,
	props: KC,
	setup(e) {
		const t = L(() => (e.inactive ? void 0 : e.color)),
			n = () => {
				const { textColor: o, pivotText: a, pivotColor: l, percentage: i } = e,
					s = a ?? `${i}%`;
				if (e.showPivot && s) {
					const r = {
						color: o,
						left: `${+i}%`,
						transform: `translate(-${+i}%,-50%)`,
						background: l || t.value,
					};
					return d(
						'span',
						{ style: r, class: ki('pivot', { inactive: e.inactive }) },
						[s],
					);
				}
			};
		return () => {
			const { trackColor: o, percentage: a, strokeWidth: l } = e,
				i = { background: o, height: we(l) },
				s = { width: `${a}%`, background: t.value };
			return d('div', { class: ki(), style: i }, [
				d(
					'span',
					{ class: ki('portion', { inactive: e.inactive }), style: s },
					null,
				),
				n(),
			]);
		};
	},
});
const GC = G(qC),
	[XC, Xo, ZC] = W('pull-refresh'),
	Jf = 50,
	JC = ['pulling', 'loosing', 'success'],
	QC = {
		disabled: Boolean,
		modelValue: Boolean,
		headHeight: le(Jf),
		successText: String,
		pullingText: String,
		loosingText: String,
		loadingText: String,
		pullDistance: q,
		successDuration: le(500),
		animationDuration: le(300),
	};
var e1 = j({
	name: XC,
	props: QC,
	emits: ['change', 'refresh', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		let o;
		const a = D(),
			l = D(),
			i = Vo(a),
			s = He({ status: 'normal', distance: 0, duration: 0 }),
			r = kt(),
			c = () => {
				if (e.headHeight !== Jf) return { height: `${e.headHeight}px` };
			},
			u = () => s.status !== 'loading' && s.status !== 'success' && !e.disabled,
			h = p => {
				const x = +(e.pullDistance || e.headHeight);
				return (
					p > x &&
						(p < x * 2
							? (p = x + (p - x) / 2)
							: (p = x * 1.5 + (p - x * 2) / 4)),
					Math.round(p)
				);
			},
			f = (p, x) => {
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
				return p === 'normal' ? '' : e[`${p}Text`] || ZC(p);
			},
			v = () => {
				const { status: p, distance: x } = s;
				if (n[p]) return n[p]({ distance: x });
				const T = [];
				return (
					JC.includes(p) && T.push(d('div', { class: Xo('text') }, [m()])),
					p === 'loading' &&
						T.push(d(Nt, { class: Xo('loading') }, { default: m })),
					T
				);
			},
			y = () => {
				(s.status = 'success'),
					setTimeout(() => {
						f(0);
					}, +e.successDuration);
			},
			g = p => {
				(o = hn(i.value) === 0), o && ((s.duration = 0), r.start(p));
			},
			w = p => {
				u() && g(p);
			},
			b = p => {
				if (u()) {
					o || g(p);
					const { deltaY: x } = r;
					r.move(p),
						o && x.value >= 0 && r.isVertical() && (Me(p), f(h(x.value)));
				}
			},
			C = () => {
				o &&
					r.deltaY.value &&
					u() &&
					((s.duration = +e.animationDuration),
					s.status === 'loosing'
						? (f(+e.headHeight, !0),
							t('update:modelValue', !0),
							Te(() => t('refresh')))
						: f(0));
			};
		return (
			ee(
				() => e.modelValue,
				p => {
					(s.duration = +e.animationDuration),
						p
							? f(+e.headHeight, !0)
							: n.success || e.successText
								? y()
								: f(0, !1);
				},
			),
			Ue('touchmove', b, { target: l }),
			() => {
				var p;
				const x = {
					transitionDuration: `${s.duration}ms`,
					transform: s.distance ? `translate3d(0,${s.distance}px, 0)` : '',
				};
				return d('div', { ref: a, class: Xo() }, [
					d(
						'div',
						{
							ref: l,
							class: Xo('track'),
							style: x,
							onTouchstartPassive: w,
							onTouchend: C,
							onTouchcancel: C,
						},
						[
							d('div', { class: Xo('head'), style: c() }, [v()]),
							(p = n.default) == null ? void 0 : p.call(n),
						],
					),
				]);
			}
		);
	},
});
const t1 = G(e1),
	[n1, Za] = W('rate');
function o1(e, t, n, o) {
	return e >= t
		? { status: 'full', value: 1 }
		: e + 0.5 >= t && n && !o
			? { status: 'half', value: 0.5 }
			: e + 1 >= t && n && o
				? { status: 'half', value: Math.round((e - t + 1) * 1e10) / 1e10 }
				: { status: 'void', value: 0 };
}
const a1 = {
	size: q,
	icon: Z('star'),
	color: String,
	count: le(5),
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
var l1 = j({
	name: n1,
	props: a1,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t }) {
		const n = kt(),
			[o, a] = ka(),
			l = D(),
			i = L(() => e.readonly || e.disabled),
			s = L(() => i.value || !e.touchable),
			r = L(() =>
				Array(+e.count)
					.fill('')
					.map((C, p) => o1(e.modelValue, p + 1, e.allowHalf, e.readonly)),
			);
		let c,
			u,
			h = Number.MAX_SAFE_INTEGER,
			f = Number.MIN_SAFE_INTEGER;
		const m = () => {
				u = Ae(l);
				const C = o.value.map(Ae);
				(c = []),
					C.forEach((p, x) => {
						(h = Math.min(p.top, h)),
							(f = Math.max(p.top, f)),
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
			v = (C, p) => {
				for (let x = c.length - 1; x > 0; x--)
					if (p >= u.top && p <= u.bottom) {
						if (C > c[x].left && p >= c[x].top && p <= c[x].top + c[x].height)
							return c[x].score;
					} else {
						const T = p < u.top ? h : f;
						if (C > c[x].left && c[x].top === T) return c[x].score;
					}
				return e.allowHalf ? 0.5 : 1;
			},
			y = C => {
				i.value ||
					C === e.modelValue ||
					(t('update:modelValue', C), t('change', C));
			},
			g = C => {
				s.value || (n.start(C), m());
			},
			w = C => {
				if (!s.value && (n.move(C), n.isHorizontal() && !n.isTap.value)) {
					const { clientX: p, clientY: x } = C.touches[0];
					Me(C), y(v(p, x));
				}
			},
			b = (C, p) => {
				const {
						icon: x,
						size: T,
						color: O,
						count: S,
						gutter: A,
						voidIcon: I,
						disabled: k,
						voidColor: P,
						allowHalf: B,
						iconPrefix: X,
						disabledColor: V,
					} = e,
					R = p + 1,
					N = C.status === 'full',
					Y = C.status === 'void',
					me = B && C.value > 0 && C.value < 1;
				let ge;
				A && R !== +S && (ge = { paddingRight: we(A) });
				const ne = se => {
					m();
					let be = B ? v(se.clientX, se.clientY) : R;
					e.clearable && n.isTap.value && be === e.modelValue && (be = 0),
						y(be);
				};
				return d(
					'div',
					{
						key: p,
						ref: a(p),
						role: 'radio',
						style: ge,
						class: Za('item'),
						tabindex: k ? void 0 : 0,
						'aria-setsize': S,
						'aria-posinset': R,
						'aria-checked': !Y,
						onClick: ne,
					},
					[
						d(
							Ce,
							{
								size: T,
								name: N ? x : I,
								class: Za('icon', { disabled: k, full: N }),
								color: k ? V : N ? O : P,
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
									class: Za('icon', ['half', { disabled: k, full: !Y }]),
									color: k ? V : Y ? P : O,
									classPrefix: X,
								},
								null,
							),
					],
				);
			};
		return (
			jn(() => e.modelValue),
			Ue('touchmove', w, { target: l }),
			() =>
				d(
					'div',
					{
						ref: l,
						role: 'radiogroup',
						class: Za({ readonly: e.readonly, disabled: e.disabled }),
						tabindex: e.disabled ? void 0 : 0,
						'aria-disabled': e.disabled,
						'aria-readonly': e.readonly,
						onTouchstartPassive: g,
					},
					[r.value.map(b)],
				)
		);
	},
});
const i1 = G(l1),
	r1 = {
		figureArr: Ve(),
		delay: Number,
		duration: Ke(2),
		isStart: Boolean,
		direction: Z('down'),
		height: Ke(40),
	},
	[s1, Ei] = W('rolling-text-item');
var c1 = j({
	name: s1,
	props: r1,
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
			d('div', { class: Ei([e.direction]), style: a.value }, [
				d('div', { class: Ei('box', { animate: e.isStart }) }, [
					Array.isArray(t.value) &&
						t.value.map(l =>
							d('div', { class: Ei('item'), style: o.value }, [l]),
						),
				]),
			]);
	},
});
const [u1, d1] = W('rolling-text'),
	f1 = {
		startNum: Ke(0),
		targetNum: Number,
		textList: Ve(),
		duration: Ke(2),
		autoStart: z,
		direction: Z('down'),
		stopOrder: Z('ltr'),
		height: Ke(40),
	},
	h1 = 2;
var m1 = j({
	name: u1,
	props: f1,
	setup(e) {
		const t = L(() => Array.isArray(e.textList) && e.textList.length),
			n = L(() =>
				t.value
					? e.textList[0].length
					: `${Math.max(e.startNum, e.targetNum)}`.length,
			),
			o = h => {
				const f = [];
				for (let m = 0; m < e.textList.length; m++) f.push(e.textList[m][h]);
				return f;
			},
			a = L(() =>
				t.value
					? new Array(n.value).fill('')
					: Ot(e.targetNum, n.value).split(''),
			),
			l = L(() => Ot(e.startNum, n.value).split('')),
			i = h => {
				const f = +l.value[h],
					m = +a.value[h],
					v = [];
				for (let y = f; y <= 9; y++) v.push(y);
				for (let y = 0; y <= h1; y++) for (let g = 0; g <= 9; g++) v.push(g);
				for (let y = 0; y <= m; y++) v.push(y);
				return v;
			},
			s = (h, f) => (e.stopOrder === 'ltr' ? 0.2 * h : 0.2 * (f - 1 - h)),
			r = D(e.autoStart),
			c = () => {
				r.value = !0;
			},
			u = () => {
				(r.value = !1), e.autoStart && lt(() => c());
			};
		return (
			ee(
				() => e.autoStart,
				h => {
					h && c();
				},
			),
			ke({ start: c, reset: u }),
			() =>
				d('div', { class: d1() }, [
					a.value.map((h, f) =>
						d(
							c1,
							{
								figureArr: t.value ? o(f) : i(f),
								duration: e.duration,
								direction: e.direction,
								isStart: r.value,
								height: e.height,
								delay: s(f, n.value),
							},
							null,
						),
					),
				])
		);
	},
});
const v1 = G(m1),
	g1 = G(cw),
	[b1, Zo, y1] = W('search'),
	p1 = he({}, Wr, {
		label: String,
		shape: Z('square'),
		leftIcon: Z('search'),
		clearable: z,
		actionText: String,
		background: String,
		showAction: Boolean,
	});
var w1 = j({
	name: b1,
	props: p1,
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
		const a = No(),
			l = D(),
			i = () => {
				n.action || (t('update:modelValue', ''), t('cancel'));
			},
			s = x => {
				x.keyCode === 13 && (Me(x), t('search', e.modelValue));
			},
			r = () => e.id || `${a}-input`,
			c = () => {
				if (n.label || e.label)
					return d('label', { class: Zo('label'), for: r() }, [
						n.label ? n.label() : e.label,
					]);
			},
			u = () => {
				if (e.showAction) {
					const x = e.actionText || y1('cancel');
					return d(
						'div',
						{ class: Zo('action'), role: 'button', tabindex: 0, onClick: i },
						[n.action ? n.action() : x],
					);
				}
			},
			h = () => {
				var x;
				return (x = l.value) == null ? void 0 : x.blur();
			},
			f = () => {
				var x;
				return (x = l.value) == null ? void 0 : x.focus();
			},
			m = x => t('blur', x),
			v = x => t('focus', x),
			y = x => t('clear', x),
			g = x => t('clickInput', x),
			w = x => t('clickLeftIcon', x),
			b = x => t('clickRightIcon', x),
			C = Object.keys(Wr),
			p = () => {
				const x = he({}, o, Ie(e, C), { id: r() }),
					T = O => t('update:modelValue', O);
				return d(
					un,
					_e(
						{
							ref: l,
							type: 'search',
							class: Zo('field', { 'with-message': x.errorMessage }),
							border: !1,
							onBlur: m,
							onFocus: v,
							onClear: y,
							onKeypress: s,
							onClickInput: g,
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
			ke({ focus: f, blur: h }),
			() => {
				var x;
				return d(
					'div',
					{
						class: Zo({ 'show-action': e.showAction }),
						style: { background: e.background },
					},
					[
						(x = n.left) == null ? void 0 : x.call(n),
						d('div', { class: Zo('content', e.shape) }, [c(), p()]),
						u(),
					],
				);
			}
		);
	},
});
const x1 = G(w1),
	S1 = e => (e == null ? void 0 : e.includes('/')),
	C1 = [...Fr, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'],
	T1 = {
		qq: 'qq',
		link: 'link-o',
		weibo: 'weibo',
		qrcode: 'qr',
		poster: 'photo-o',
		wechat: 'wechat',
		'weapp-qrcode': 'miniprogram-o',
		'wechat-moments': 'wechat-moments',
	},
	[_1, $t, k1] = W('share-sheet'),
	E1 = he({}, Fo, {
		title: String,
		round: z,
		options: Ve(),
		cancelText: String,
		description: String,
		closeOnPopstate: z,
		safeAreaInsetBottom: z,
	});
var P1 = j({
	name: _1,
	props: E1,
	emits: ['cancel', 'select', 'update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = f => t('update:show', f),
			a = () => {
				o(!1), t('cancel');
			},
			l = (f, m) => t('select', f, m),
			i = () => {
				const f = n.title ? n.title() : e.title,
					m = n.description ? n.description() : e.description;
				if (f || m)
					return d('div', { class: $t('header') }, [
						f && d('h2', { class: $t('title') }, [f]),
						m && d('span', { class: $t('description') }, [m]),
					]);
			},
			s = f =>
				S1(f)
					? d('img', { src: f, class: $t('image-icon') }, null)
					: d('div', { class: $t('icon', [f]) }, [
							d(Ce, { name: T1[f] || f }, null),
						]),
			r = (f, m) => {
				const { name: v, icon: y, className: g, description: w } = f;
				return d(
					'div',
					{
						role: 'button',
						tabindex: 0,
						class: [$t('option'), g, gt],
						onClick: () => l(f, m),
					},
					[
						s(y),
						v && d('span', { class: $t('name') }, [v]),
						w && d('span', { class: $t('option-description') }, [w]),
					],
				);
			},
			c = (f, m) =>
				d('div', { class: $t('options', { border: m }) }, [f.map(r)]),
			u = () => {
				const { options: f } = e;
				return Array.isArray(f[0]) ? f.map((m, v) => c(m, v !== 0)) : c(f);
			},
			h = () => {
				var f;
				const m = (f = e.cancelText) != null ? f : k1('cancel');
				if (n.cancel || m)
					return d(
						'button',
						{ type: 'button', class: $t('cancel'), onClick: a },
						[n.cancel ? n.cancel() : m],
					);
			};
		return () =>
			d(
				zt,
				_e({ class: $t(), position: 'bottom', 'onUpdate:show': o }, Ie(e, C1)),
				{ default: () => [i(), u(), h()] },
			);
	},
});
const $1 = G(P1),
	[Qf, I1] = W('sidebar'),
	eh = Symbol(Qf),
	A1 = { modelValue: le(0) };
var O1 = j({
	name: Qf,
	props: A1,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt(eh),
			a = () => +e.modelValue;
		return (
			o({
				getActive: a,
				setActive: i => {
					i !== a() && (t('update:modelValue', i), t('change', i));
				},
			}),
			() => {
				var i;
				return d('div', { role: 'tablist', class: I1() }, [
					(i = n.default) == null ? void 0 : i.call(n),
				]);
			}
		);
	},
});
const th = G(O1),
	[R1, eu] = W('sidebar-item'),
	B1 = he({}, Wn, {
		dot: Boolean,
		title: String,
		badge: q,
		disabled: Boolean,
		badgeProps: Object,
	});
var D1 = j({
	name: R1,
	props: B1,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = io(),
			{ parent: a, index: l } = ot(eh);
		if (!a) return;
		const i = () => {
			e.disabled || (t('click', l.value), a.setActive(l.value), o());
		};
		return () => {
			const { dot: s, badge: r, title: c, disabled: u } = e,
				h = l.value === a.getActive();
			return d(
				'div',
				{
					role: 'tab',
					class: eu({ select: h, disabled: u }),
					tabindex: u ? void 0 : 0,
					'aria-selected': h,
					onClick: i,
				},
				[
					d(ro, _e({ dot: s, class: eu('text'), content: r }, e.badgeProps), {
						default: () => [n.title ? n.title() : c],
					}),
				],
			);
		};
	},
});
const nh = G(D1),
	[M1, Pi, tu] = W('signature'),
	L1 = {
		tips: String,
		type: Z('png'),
		penColor: Z('#000'),
		lineWidth: Ke(3),
		clearButtonText: String,
		backgroundColor: Z(''),
		confirmButtonText: String,
	},
	V1 = () => {
		var e;
		const t = document.createElement('canvas');
		return !!((e = t.getContext) != null && e.call(t, '2d'));
	};
var F1 = j({
	name: M1,
	props: L1,
	emits: ['submit', 'clear', 'start', 'end', 'signing'],
	setup(e, { emit: t }) {
		const n = D(),
			o = D(),
			a = L(() => (n.value ? n.value.getContext('2d') : null)),
			l = _t ? V1() : !0;
		let i = 0,
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
			h = b => {
				Me(b), t('end');
			},
			f = b => {
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
					((b.fillStyle = e.backgroundColor), b.fillRect(0, 0, i, s));
			},
			v = () => {
				var b, C;
				const p = n.value;
				if (!p) return;
				const T = f(p)
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
					(a.value.clearRect(0, 0, i, s), a.value.closePath(), m(a.value)),
					t('clear');
			},
			g = () => {
				var b, C, p;
				if (l && n.value) {
					const x = n.value,
						T = _t ? window.devicePixelRatio : 1;
					(i = x.width =
						(((b = o.value) == null ? void 0 : b.offsetWidth) || 0) * T),
						(s = x.height =
							(((C = o.value) == null ? void 0 : C.offsetHeight) || 0) * T),
						(p = a.value) == null || p.scale(T, T),
						m(a.value);
				}
			},
			w = () => {
				if (a.value) {
					const b = a.value.getImageData(0, 0, i, s);
					g(), a.value.putImageData(b, 0, 0);
				}
			};
		return (
			ee(Mt, w),
			We(g),
			ke({ resize: w, clear: y, submit: v }),
			() =>
				d('div', { class: Pi() }, [
					d('div', { class: Pi('content'), ref: o }, [
						l
							? d(
									'canvas',
									{
										ref: n,
										onTouchstartPassive: c,
										onTouchmove: u,
										onTouchend: h,
									},
									null,
								)
							: d('p', null, [e.tips]),
					]),
					d('div', { class: Pi('footer') }, [
						d(
							it,
							{ size: 'small', onClick: y },
							{ default: () => [e.clearButtonText || tu('clear')] },
						),
						d(
							it,
							{ type: 'primary', size: 'small', onClick: v },
							{ default: () => [e.confirmButtonText || tu('confirm')] },
						),
					]),
				])
		);
	},
});
const N1 = G(F1),
	[z1, H1] = W('skeleton-title'),
	j1 = { round: Boolean, titleWidth: q };
var U1 = j({
	name: z1,
	props: j1,
	setup(e) {
		return () =>
			d(
				'h3',
				{ class: H1([{ round: e.round }]), style: { width: we(e.titleWidth) } },
				null,
			);
	},
});
const oh = G(U1);
var W1 = oh;
const [Y1, K1] = W('skeleton-avatar'),
	q1 = { avatarSize: q, avatarShape: Z('round') };
var G1 = j({
	name: Y1,
	props: q1,
	setup(e) {
		return () =>
			d('div', { class: K1([e.avatarShape]), style: bn(e.avatarSize) }, null);
	},
});
const ah = G(G1);
var X1 = ah;
const es = '100%',
	Z1 = { round: Boolean, rowWidth: { type: q, default: es } },
	[J1, Q1] = W('skeleton-paragraph');
var eT = j({
	name: J1,
	props: Z1,
	setup(e) {
		return () =>
			d(
				'div',
				{ class: Q1([{ round: e.round }]), style: { width: e.rowWidth } },
				null,
			);
	},
});
const lh = G(eT);
var tT = lh;
const [nT, nu] = W('skeleton'),
	oT = '60%',
	aT = {
		row: le(0),
		round: Boolean,
		title: Boolean,
		titleWidth: q,
		avatar: Boolean,
		avatarSize: q,
		avatarShape: Z('round'),
		loading: z,
		animate: z,
		rowWidth: { type: [Number, String, Array], default: es },
	};
var lT = j({
	name: nT,
	inheritAttrs: !1,
	props: aT,
	setup(e, { slots: t, attrs: n }) {
		const o = () => {
				if (e.avatar)
					return d(
						X1,
						{ avatarShape: e.avatarShape, avatarSize: e.avatarSize },
						null,
					);
			},
			a = () => {
				if (e.title)
					return d(W1, { round: e.round, titleWidth: e.titleWidth }, null);
			},
			l = r => {
				const { rowWidth: c } = e;
				return c === es && r === +e.row - 1 ? oT : Array.isArray(c) ? c[r] : c;
			},
			i = () =>
				Array(+e.row)
					.fill('')
					.map((r, c) =>
						d(tT, { key: c, round: e.round, rowWidth: we(l(c)) }, null),
					),
			s = () =>
				t.template
					? t.template()
					: d(Je, null, [o(), d('div', { class: nu('content') }, [a(), i()])]);
		return () => {
			var r;
			return e.loading
				? d(
						'div',
						_e({ class: nu({ animate: e.animate, round: e.round }) }, n),
						[s()],
					)
				: (r = t.default) == null
					? void 0
					: r.call(t);
		};
	},
});
const iT = G(lT),
	[rT, ou] = W('skeleton-image'),
	sT = { imageSize: q, imageShape: Z('square') };
var cT = j({
	name: rT,
	props: sT,
	setup(e) {
		return () =>
			d('div', { class: ou([e.imageShape]), style: bn(e.imageSize) }, [
				d(Ce, { name: 'photo', class: ou('icon') }, null),
			]);
	},
});
const uT = G(cT),
	[dT, Jo] = W('slider'),
	fT = {
		min: le(0),
		max: le(100),
		step: le(1),
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
var hT = j({
	name: dT,
	props: fT,
	emits: ['change', 'dragEnd', 'dragStart', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		let o, a, l;
		const i = D(),
			s = [D(), D()],
			r = D(),
			c = kt(),
			u = L(() => Number(e.max) - Number(e.min)),
			h = L(() => {
				const k = e.vertical ? 'width' : 'height';
				return { background: e.inactiveColor, [k]: we(e.barHeight) };
			}),
			f = k => e.range && Array.isArray(k),
			m = () => {
				const { modelValue: k, min: P } = e;
				return f(k)
					? `${((k[1] - k[0]) * 100) / u.value}%`
					: `${((k - Number(P)) * 100) / u.value}%`;
			},
			v = () => {
				const { modelValue: k, min: P } = e;
				return f(k) ? `${((k[0] - Number(P)) * 100) / u.value}%` : '0%';
			},
			y = L(() => {
				const P = {
					[e.vertical ? 'height' : 'width']: m(),
					background: e.activeColor,
				};
				r.value && (P.transition = 'none');
				const B = () =>
					e.vertical
						? e.reverse
							? 'bottom'
							: 'top'
						: e.reverse
							? 'right'
							: 'left';
				return (P[B()] = v()), P;
			}),
			g = k => {
				const P = +e.min,
					B = +e.max,
					X = +e.step;
				k = et(k, P, B);
				const V = Math.round((k - P) / X) * X;
				return Ld(P, V);
			},
			w = () => {
				const k = e.modelValue;
				f(k) ? (l = k.map(g)) : (l = g(k));
			},
			b = k => {
				var P, B;
				const X = (P = k[0]) != null ? P : Number(e.min),
					V = (B = k[1]) != null ? B : Number(e.max);
				return X > V ? [V, X] : [X, V];
			},
			C = (k, P) => {
				f(k) ? (k = b(k).map(g)) : (k = g(k)),
					Xt(k, e.modelValue) || t('update:modelValue', k),
					P && !Xt(k, l) && t('change', k);
			},
			p = k => {
				if ((k.stopPropagation(), e.disabled || e.readonly)) return;
				w();
				const { min: P, reverse: B, vertical: X, modelValue: V } = e,
					R = Ae(i),
					N = () =>
						X
							? B
								? R.bottom - k.clientY
								: k.clientY - R.top
							: B
								? R.right - k.clientX
								: k.clientX - R.left,
					Y = X ? R.height : R.width,
					me = Number(P) + (N() / Y) * u.value;
				if (f(V)) {
					const [ge, ne] = V,
						se = (ge + ne) / 2;
					me <= se ? C([me, ne], !0) : C([ge, me], !0);
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
				const P = Ae(i),
					B = e.vertical ? c.deltaY.value : c.deltaX.value,
					X = e.vertical ? P.height : P.width;
				let V = (B / X) * u.value;
				if ((e.reverse && (V = -V), f(l))) {
					const R = e.reverse ? 1 - o : o;
					a[R] = l[R] + V;
				} else a = l + V;
				C(a);
			},
			O = k => {
				e.disabled ||
					e.readonly ||
					(r.value === 'dragging' && (C(a, !0), t('dragEnd', k)),
					(r.value = ''));
			},
			S = k =>
				typeof k == 'number'
					? Jo('button-wrapper', ['left', 'right'][k])
					: Jo('button-wrapper', e.reverse ? 'left' : 'right'),
			A = (k, P) => {
				const B = r.value === 'dragging';
				if (typeof P == 'number') {
					const X = n[P === 0 ? 'left-button' : 'right-button'];
					let V;
					if ((B && Array.isArray(a) && (V = a[0] > a[1] ? o ^ 1 : o), X))
						return X({ value: k, dragging: B, dragIndex: V });
				}
				return n.button
					? n.button({ value: k, dragging: B })
					: d('div', { class: Jo('button'), style: bn(e.buttonSize) }, null);
			},
			I = k => {
				const P = typeof k == 'number' ? e.modelValue[k] : e.modelValue;
				return d(
					'div',
					{
						ref: s[k ?? 0],
						role: 'slider',
						class: S(k),
						tabindex: e.disabled ? void 0 : 0,
						'aria-valuemin': e.min,
						'aria-valuenow': P,
						'aria-valuemax': e.max,
						'aria-disabled': e.disabled || void 0,
						'aria-readonly': e.readonly || void 0,
						'aria-orientation': e.vertical ? 'vertical' : 'horizontal',
						onTouchstartPassive: B => {
							typeof k == 'number' && (o = k), x(B);
						},
						onTouchend: O,
						onTouchcancel: O,
						onClick: Dr,
					},
					[A(P, k)],
				);
			};
		return (
			C(e.modelValue),
			jn(() => e.modelValue),
			s.forEach(k => {
				Ue('touchmove', T, { target: k });
			}),
			() =>
				d(
					'div',
					{
						ref: i,
						style: h.value,
						class: Jo({ vertical: e.vertical, disabled: e.disabled }),
						onClick: p,
					},
					[
						d('div', { class: Jo('bar'), style: y.value }, [
							e.range ? [I(0), I(1)] : I(),
						]),
					],
				)
		);
	},
});
const mT = G(hT),
	[au, vT] = W('space'),
	gT = {
		align: String,
		direction: { type: String, default: 'horizontal' },
		size: { type: [Number, String, Array], default: 8 },
		wrap: Boolean,
		fill: Boolean,
	};
function ih(e = []) {
	const t = [];
	return (
		e.forEach(n => {
			Array.isArray(n)
				? t.push(...n)
				: n.type === Je
					? t.push(...ih(n.children))
					: t.push(n);
		}),
		t.filter(n => {
			var o;
			return !(
				n &&
				(n.type === Dt ||
					(n.type === Je &&
						((o = n.children) == null ? void 0 : o.length) === 0) ||
					(n.type === Ca && n.children.trim() === ''))
			);
		})
	);
}
var bT = j({
	name: au,
	props: gT,
	setup(e, { slots: t }) {
		const n = L(() => {
				var l;
				return (l = e.align) != null
					? l
					: e.direction === 'horizontal'
						? 'center'
						: '';
			}),
			o = l => (typeof l == 'number' ? l + 'px' : l),
			a = l => {
				const i = {},
					s = `${o(Array.isArray(e.size) ? e.size[0] : e.size)}`,
					r = `${o(Array.isArray(e.size) ? e.size[1] : e.size)}`;
				return l
					? e.wrap
						? { marginBottom: r }
						: {}
					: (e.direction === 'horizontal' && (i.marginRight = s),
						(e.direction === 'vertical' || e.wrap) && (i.marginBottom = r),
						i);
			};
		return () => {
			var l;
			const i = ih((l = t.default) == null ? void 0 : l.call(t));
			return d(
				'div',
				{
					class: [
						vT({
							[e.direction]: e.direction,
							[`align-${n.value}`]: n.value,
							wrap: e.wrap,
							fill: e.fill,
						}),
					],
				},
				[
					i.map((s, r) =>
						d(
							'div',
							{
								key: `item-${r}`,
								class: `${au}-item`,
								style: a(r === i.length - 1),
							},
							[s],
						),
					),
				],
			);
		};
	},
});
const yT = G(bT),
	[rh, lu] = W('steps'),
	pT = {
		active: le(0),
		direction: Z('horizontal'),
		activeIcon: Z('checked'),
		iconPrefix: String,
		finishIcon: String,
		activeColor: String,
		inactiveIcon: String,
		inactiveColor: String,
	},
	sh = Symbol(rh);
var wT = j({
	name: rh,
	props: pT,
	emits: ['clickStep'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt(sh);
		return (
			o({ props: e, onClickStep: l => t('clickStep', l) }),
			() => {
				var l;
				return d('div', { class: lu([e.direction]) }, [
					d('div', { class: lu('items') }, [
						(l = n.default) == null ? void 0 : l.call(n),
					]),
				]);
			}
		);
	},
});
const [xT, Pn] = W('step');
var ST = j({
	name: xT,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(sh);
		if (!n) return;
		const a = n.props,
			l = () => {
				const h = +a.active;
				return o.value < h ? 'finish' : o.value === h ? 'process' : 'waiting';
			},
			i = () => l() === 'process',
			s = L(() => ({
				background: l() === 'finish' ? a.activeColor : a.inactiveColor,
			})),
			r = L(() => {
				if (i()) return { color: a.activeColor };
				if (l() === 'waiting') return { color: a.inactiveColor };
			}),
			c = () => n.onClickStep(o.value),
			u = () => {
				const {
					iconPrefix: h,
					finishIcon: f,
					activeIcon: m,
					activeColor: v,
					inactiveIcon: y,
				} = a;
				return i()
					? t['active-icon']
						? t['active-icon']()
						: d(
								Ce,
								{
									class: Pn('icon', 'active'),
									name: m,
									color: v,
									classPrefix: h,
								},
								null,
							)
					: l() === 'finish' && (f || t['finish-icon'])
						? t['finish-icon']
							? t['finish-icon']()
							: d(
									Ce,
									{
										class: Pn('icon', 'finish'),
										name: f,
										color: v,
										classPrefix: h,
									},
									null,
								)
						: t['inactive-icon']
							? t['inactive-icon']()
							: y
								? d(Ce, { class: Pn('icon'), name: y, classPrefix: h }, null)
								: d('i', { class: Pn('circle'), style: s.value }, null);
			};
		return () => {
			var h;
			const f = l();
			return d('div', { class: [pn, Pn([a.direction, { [f]: f }])] }, [
				d(
					'div',
					{ class: Pn('title', { active: i() }), style: r.value, onClick: c },
					[(h = t.default) == null ? void 0 : h.call(t)],
				),
				d('div', { class: Pn('circle-container'), onClick: c }, [u()]),
				d('div', { class: Pn('line'), style: s.value }, null),
			]);
		};
	},
});
const CT = G(ST),
	[TT, Ja] = W('stepper'),
	_T = 200,
	Qa = (e, t) => String(e) === String(t),
	kT = {
		min: le(1),
		max: le(1 / 0),
		name: le(''),
		step: le(1),
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
		defaultValue: le(1),
		decimalLength: q,
	};
var ET = j({
	name: TT,
	props: kT,
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
				const { min: I, max: k, allowEmpty: P, decimalLength: B } = e;
				return (
					(P && S === '') ||
						((S = Ji(String(S), !e.integer)),
						(S = S === '' ? 0 : +S),
						(S = Number.isNaN(S) ? +I : S),
						(S = A ? Math.max(Math.min(+k, S), +I) : S),
						Pe(B) && (S = S.toFixed(+B))),
					S
				);
			},
			o = () => {
				var S;
				const A = (S = e.modelValue) != null ? S : e.defaultValue,
					I = n(A);
				return Qa(I, e.modelValue) || t('update:modelValue', I), I;
			};
		let a;
		const l = D(),
			i = D(o()),
			s = L(() => e.disabled || e.disableMinus || +i.value <= +e.min),
			r = L(() => e.disabled || e.disablePlus || +i.value >= +e.max),
			c = L(() => ({ width: we(e.inputWidth), height: we(e.buttonSize) })),
			u = L(() => bn(e.buttonSize)),
			h = () => {
				const S = n(i.value);
				Qa(S, i.value) || (i.value = S);
			},
			f = S => {
				e.beforeChange
					? Un(e.beforeChange, {
							args: [S],
							done() {
								i.value = S;
							},
						})
					: (i.value = S);
			},
			m = () => {
				if ((a === 'plus' && r.value) || (a === 'minus' && s.value)) {
					t('overlimit', a);
					return;
				}
				const S = a === 'minus' ? -e.step : +e.step,
					A = n(Ld(+i.value, S));
				f(A), t(a);
			},
			v = S => {
				const A = S.target,
					{ value: I } = A,
					{ decimalLength: k } = e;
				let P = Ji(String(I), !e.integer);
				if (Pe(k) && P.includes('.')) {
					const X = P.split('.');
					P = `${X[0]}.${X[1].slice(0, +k)}`;
				}
				e.beforeChange
					? (A.value = String(i.value))
					: Qa(I, P) || (A.value = P);
				const B = P === String(+P);
				f(B ? +P : P);
			},
			y = S => {
				var A;
				e.disableInput ? (A = l.value) == null || A.blur() : t('focus', S);
			},
			g = S => {
				const A = S.target,
					I = n(A.value, e.autoFixed);
				(A.value = String(I)),
					(i.value = I),
					Te(() => {
						t('blur', S), Dd();
					});
			};
		let w, b;
		const C = () => {
				b = setTimeout(() => {
					m(), C();
				}, _T);
			},
			p = () => {
				e.longPress &&
					((w = !1),
					clearTimeout(b),
					(b = setTimeout(() => {
						(w = !0), m(), C();
					}, jd)));
			},
			x = S => {
				e.longPress && (clearTimeout(b), w && Me(S));
			},
			T = S => {
				e.disableInput && Me(S);
			},
			O = S => ({
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
			ee(() => [e.max, e.min, e.integer, e.decimalLength], h),
			ee(
				() => e.modelValue,
				S => {
					Qa(S, i.value) || (i.value = n(S));
				},
			),
			ee(i, S => {
				t('update:modelValue', S), t('change', S, { name: e.name });
			}),
			jn(() => e.modelValue),
			() =>
				d('div', { role: 'group', class: Ja([e.theme]) }, [
					Qe(
						d(
							'button',
							_e(
								{
									type: 'button',
									style: u.value,
									class: [
										Ja('minus', { disabled: s.value }),
										{ [gt]: !s.value },
									],
									'aria-disabled': s.value || void 0,
								},
								O('minus'),
							),
							null,
						),
						[[nt, e.showMinus]],
					),
					Qe(
						d(
							'input',
							{
								ref: l,
								type: e.integer ? 'tel' : 'text',
								role: 'spinbutton',
								class: Ja('input'),
								value: i.value,
								style: c.value,
								disabled: e.disabled,
								readonly: e.disableInput,
								inputmode: e.integer ? 'numeric' : 'decimal',
								placeholder: e.placeholder,
								'aria-valuemax': e.max,
								'aria-valuemin': e.min,
								'aria-valuenow': i.value,
								onBlur: g,
								onInput: v,
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
										Ja('plus', { disabled: r.value }),
										{ [gt]: !r.value },
									],
									'aria-disabled': r.value || void 0,
								},
								O('plus'),
							),
							null,
						),
						[[nt, e.showPlus]],
					),
				])
		);
	},
});
const PT = G(ET),
	$T = G(wT),
	[IT, It, AT] = W('submit-bar'),
	OT = {
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
		decimalLength: le(2),
		safeAreaInsetBottom: z,
	};
var RT = j({
	name: IT,
	props: OT,
	emits: ['submit'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Hl(o, It),
			l = () => {
				const {
					price: u,
					label: h,
					currency: f,
					textAlign: m,
					suffixLabel: v,
					decimalLength: y,
				} = e;
				if (typeof u == 'number') {
					const g = (u / 100).toFixed(+y).split('.'),
						w = y ? `.${g[1]}` : '';
					return d('div', { class: It('text'), style: { textAlign: m } }, [
						d('span', null, [h || AT('label')]),
						d('span', { class: It('price') }, [
							f,
							d('span', { class: It('price-integer') }, [g[0]]),
							w,
						]),
						v && d('span', { class: It('suffix-label') }, [v]),
					]);
				}
			},
			i = () => {
				var u;
				const { tip: h, tipIcon: f } = e;
				if (n.tip || h)
					return d('div', { class: It('tip') }, [
						f && d(Ce, { class: It('tip-icon'), name: f }, null),
						h && d('span', { class: It('tip-text') }, [h]),
						(u = n.tip) == null ? void 0 : u.call(n),
					]);
			},
			s = () => t('submit'),
			r = () =>
				n.button
					? n.button()
					: d(
							it,
							{
								round: !0,
								type: e.buttonType,
								text: e.buttonText,
								class: It('button', e.buttonType),
								color: e.buttonColor,
								loading: e.loading,
								disabled: e.disabled,
								onClick: s,
							},
							null,
						),
			c = () => {
				var u, h;
				return d(
					'div',
					{
						ref: o,
						class: [It(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }],
					},
					[
						(u = n.top) == null ? void 0 : u.call(n),
						i(),
						d('div', { class: It('bar') }, [
							(h = n.default) == null ? void 0 : h.call(n),
							l(),
							r(),
						]),
					],
				);
			};
		return () => (e.placeholder ? a(c) : c());
	},
});
const BT = G(RT),
	[DT, $i] = W('swipe-cell'),
	MT = {
		name: le(''),
		disabled: Boolean,
		leftWidth: q,
		rightWidth: q,
		beforeClose: Function,
		stopPropagation: Boolean,
	};
var LT = j({
	name: DT,
	props: MT,
	emits: ['open', 'close', 'click'],
	setup(e, { emit: t, slots: n }) {
		let o, a, l, i;
		const s = D(),
			r = D(),
			c = D(),
			u = He({ offset: 0, dragging: !1 }),
			h = kt(),
			f = S => (S.value ? Ae(S).width : 0),
			m = L(() => (Pe(e.leftWidth) ? +e.leftWidth : f(r))),
			v = L(() => (Pe(e.rightWidth) ? +e.rightWidth : f(c))),
			y = S => {
				(u.offset = S === 'left' ? m.value : -v.value),
					o || ((o = !0), t('open', { name: e.name, position: S }));
			},
			g = S => {
				(u.offset = 0),
					o && ((o = !1), t('close', { name: e.name, position: S }));
			},
			w = S => {
				const A = Math.abs(u.offset),
					I = 0.15,
					k = o ? 1 - I : I,
					P = S === 'left' ? m.value : v.value;
				P && A > P * k ? y(S) : g(S);
			},
			b = S => {
				e.disabled || ((l = u.offset), h.start(S));
			},
			C = S => {
				if (e.disabled) return;
				const { deltaX: A } = h;
				h.move(S),
					h.isHorizontal() &&
						((a = !0),
						(u.dragging = !0),
						(!o || A.value * l < 0) && Me(S, e.stopPropagation),
						(u.offset = et(A.value + l, -v.value, m.value)));
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
				i ||
					(t('click', S),
					o &&
						!a &&
						((i = !0),
						Un(e.beforeClose, {
							args: [{ name: e.name, position: S }],
							done: () => {
								(i = !1), g(S);
							},
							canceled: () => (i = !1),
							error: () => (i = !1),
						})));
			},
			T = (S, A) => I => {
				A && I.stopPropagation(), x(S);
			},
			O = (S, A) => {
				const I = n[S];
				if (I)
					return d('div', { ref: A, class: $i(S), onClick: T(S, !0) }, [I()]);
			};
		return (
			ke({ open: y, close: g }),
			Vl(s, () => x('outside'), { eventName: 'touchstart' }),
			Ue('touchmove', C, { target: s }),
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
						class: $i(),
						onClick: T('cell', a),
						onTouchstartPassive: b,
						onTouchend: p,
						onTouchcancel: p,
					},
					[
						d('div', { class: $i('wrapper'), style: A }, [
							O('left', r),
							(S = n.default) == null ? void 0 : S.call(n),
							O('right', c),
						]),
					],
				);
			}
		);
	},
});
const VT = G(LT),
	[ch, iu] = W('tabbar'),
	FT = {
		route: Boolean,
		fixed: z,
		border: z,
		zIndex: q,
		placeholder: Boolean,
		activeColor: String,
		beforeChange: Function,
		inactiveColor: String,
		modelValue: le(0),
		safeAreaInsetBottom: { type: Boolean, default: null },
	},
	uh = Symbol(ch);
var NT = j({
	name: ch,
	props: FT,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			{ linkChildren: a } = rt(uh),
			l = Hl(o, iu),
			i = () => {
				var c;
				return (c = e.safeAreaInsetBottom) != null ? c : e.fixed;
			},
			s = () => {
				var c;
				const { fixed: u, zIndex: h, border: f } = e;
				return d(
					'div',
					{
						ref: o,
						role: 'tablist',
						style: yn(h),
						class: [iu({ fixed: u }), { [Nl]: f, 'van-safe-area-bottom': i() }],
					},
					[(c = n.default) == null ? void 0 : c.call(n)],
				);
			};
		return (
			a({
				props: e,
				setActive: (c, u) => {
					Un(e.beforeChange, {
						args: [c],
						done() {
							t('update:modelValue', c), t('change', c), u();
						},
					});
				},
			}),
			() => (e.fixed && e.placeholder ? l(s) : s())
		);
	},
});
const zT = G(NT),
	[HT, Ii] = W('tabbar-item'),
	jT = he({}, Wn, {
		dot: Boolean,
		icon: String,
		name: q,
		badge: q,
		badgeProps: Object,
		iconPrefix: String,
	});
var UT = j({
	name: HT,
	props: jT,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = io(),
			a = Ft().proxy,
			{ parent: l, index: i } = ot(uh);
		if (!l) return;
		const s = L(() => {
				var u;
				const { route: h, modelValue: f } = l.props;
				if (h && '$route' in a) {
					const { $route: m } = a,
						{ to: v } = e,
						y = fn(v) ? v : { path: v };
					return !!m.matched.find(g => {
						const w = 'path' in y && y.path === g.path,
							b = 'name' in y && y.name === g.name;
						return w || b;
					});
				}
				return ((u = e.name) != null ? u : i.value) === f;
			}),
			r = u => {
				var h;
				s.value || l.setActive((h = e.name) != null ? h : i.value, o),
					t('click', u);
			},
			c = () => {
				if (n.icon) return n.icon({ active: s.value });
				if (e.icon)
					return d(Ce, { name: e.icon, classPrefix: e.iconPrefix }, null);
			};
		return () => {
			var u;
			const { dot: h, badge: f } = e,
				{ activeColor: m, inactiveColor: v } = l.props,
				y = s.value ? m : v;
			return d(
				'div',
				{
					role: 'tab',
					class: Ii({ active: s.value }),
					style: { color: y },
					tabindex: 0,
					'aria-selected': s.value,
					onClick: r,
				},
				[
					d(ro, _e({ dot: h, class: Ii('icon'), content: f }, e.badgeProps), {
						default: c,
					}),
					d('div', { class: Ii('text') }, [
						(u = n.default) == null ? void 0 : u.call(n, { active: s.value }),
					]),
				],
			);
		};
	},
});
const WT = G(UT),
	[YT, ru] = W('text-ellipsis'),
	KT = {
		rows: le(1),
		dots: Z('...'),
		content: Z(''),
		expandText: Z(''),
		collapseText: Z(''),
		position: Z('end'),
	};
var qT = j({
	name: YT,
	props: KT,
	emits: ['clickAction'],
	setup(e, { emit: t, slots: n }) {
		const o = D(''),
			a = D(!1),
			l = D(!1),
			i = D();
		let s = !1;
		const r = L(() => (a.value ? e.collapseText : e.expandText)),
			c = y => {
				if (!y) return 0;
				const g = y.match(/^\d*(\.\d*)?/);
				return g ? Number(g[0]) : 0;
			},
			u = () => {
				if (!i.value || !i.value.isConnected) return;
				const y = window.getComputedStyle(i.value),
					g = document.createElement('div');
				return (
					Array.prototype.slice.apply(y).forEach(b => {
						g.style.setProperty(b, y.getPropertyValue(b));
					}),
					(g.style.position = 'fixed'),
					(g.style.zIndex = '-9999'),
					(g.style.top = '-9999px'),
					(g.style.height = 'auto'),
					(g.style.minHeight = 'auto'),
					(g.style.maxHeight = 'auto'),
					(g.innerText = e.content),
					document.body.appendChild(g),
					g
				);
			},
			h = () => {
				const y = (x, T) => {
						const { content: O, position: S, dots: A } = e,
							I = O.length,
							k = () => {
								const X = (V, R) => {
									if (R - V <= 1)
										return S === 'end' ? O.slice(0, V) + A : A + O.slice(R, I);
									const N = Math.round((V + R) / 2);
									return (
										S === 'end'
											? (x.innerText = O.slice(0, N) + A + r.value)
											: (x.innerText = A + O.slice(N, I) + r.value),
										x.offsetHeight > T
											? S === 'end'
												? X(V, N)
												: X(N, R)
											: S === 'end'
												? X(N, R)
												: X(V, N)
									);
								};
								x.innerText = X(0, I);
							},
							P = (X, V) => {
								if (X[1] - X[0] <= 1 && V[1] - V[0] <= 1)
									return O.slice(0, X[0]) + A + O.slice(V[1], I);
								const R = Math.floor((X[0] + X[1]) / 2),
									N = Math.ceil((V[0] + V[1]) / 2);
								return (
									(x.innerText =
										e.content.slice(0, R) +
										e.dots +
										e.content.slice(N, I) +
										e.expandText),
									x.offsetHeight >= T
										? P([X[0], R], [N, V[1]])
										: P([R, X[1]], [V[0], N])
								);
							},
							B = (0 + I) >> 1;
						return (
							e.position === 'middle' ? (x.innerText = P([0, B], [B, I])) : k(),
							x.innerText
						);
					},
					g = u();
				if (!g) {
					s = !0;
					return;
				}
				const { paddingBottom: w, paddingTop: b, lineHeight: C } = g.style,
					p = Math.ceil((Number(e.rows) + 0.5) * c(C) + c(b) + c(w));
				p < g.offsetHeight
					? ((l.value = !0), (o.value = y(g, p)))
					: ((l.value = !1), (o.value = e.content)),
					document.body.removeChild(g);
			},
			f = (y = !a.value) => {
				a.value = y;
			},
			m = y => {
				f(), t('clickAction', y);
			},
			v = () => {
				const y = n.action ? n.action({ expanded: a.value }) : r.value;
				return d('span', { class: ru('action'), onClick: m }, [y]);
			};
		return (
			We(h),
			Jt(() => {
				s && ((s = !1), h());
			}),
			ee([Mt, () => [e.content, e.rows, e.position]], h),
			ke({ toggle: f }),
			() =>
				d('div', { ref: i, class: ru() }, [
					a.value ? e.content : o.value,
					l.value ? v() : null,
				])
		);
	},
});
const GT = G(qT),
	[XT] = W('time-picker'),
	su = e => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e),
	ZT = ['hour', 'minute', 'second'],
	JT = he({}, kf, {
		minHour: le(0),
		maxHour: le(23),
		minMinute: le(0),
		maxMinute: le(59),
		minSecond: le(0),
		maxSecond: le(59),
		minTime: { type: String, validator: su },
		maxTime: { type: String, validator: su },
		columnsType: { type: Array, default: () => ['hour', 'minute'] },
		filter: Function,
	});
var QT = j({
	name: XT,
	props: JT,
	emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(e.modelValue),
			a = D(),
			l = f => {
				const m = f.split(':');
				return ZT.map((v, y) => (e.columnsType.includes(v) ? m[y] : '00'));
			},
			i = () => {
				var f;
				return (f = a.value) == null ? void 0 : f.confirm();
			},
			s = () => o.value,
			r = L(() => {
				let {
					minHour: f,
					maxHour: m,
					minMinute: v,
					maxMinute: y,
					minSecond: g,
					maxSecond: w,
				} = e;
				if (e.minTime || e.maxTime) {
					const b = { hour: 0, minute: 0, second: 0 };
					e.columnsType.forEach((x, T) => {
						var O;
						b[x] = (O = o.value[T]) != null ? O : 0;
					});
					const { hour: C, minute: p } = b;
					if (e.minTime) {
						const [x, T, O] = l(e.minTime);
						(f = x),
							(v = +C <= +f ? T : '00'),
							(g = +C <= +f && +p <= +v ? O : '00');
					}
					if (e.maxTime) {
						const [x, T, O] = l(e.maxTime);
						(m = x),
							(y = +C >= +m ? T : '59'),
							(w = +C >= +m && +p >= +y ? O : '59');
					}
				}
				return e.columnsType.map(b => {
					const { filter: C, formatter: p } = e;
					switch (b) {
						case 'hour':
							return Eo(+f, +m, b, p, C, o.value);
						case 'minute':
							return Eo(+v, +y, b, p, C, o.value);
						case 'second':
							return Eo(+g, +w, b, p, C, o.value);
						default:
							return [];
					}
				});
			});
		ee(o, f => {
			Xt(f, e.modelValue) || t('update:modelValue', f);
		}),
			ee(
				() => e.modelValue,
				f => {
					(f = $f(f, r.value)), Xt(f, o.value) || (o.value = f);
				},
				{ immediate: !0 },
			);
		const c = (...f) => t('change', ...f),
			u = (...f) => t('cancel', ...f),
			h = (...f) => t('confirm', ...f);
		return (
			ke({ confirm: i, getSelectedTime: s }),
			() =>
				d(
					Yl,
					_e(
						{
							ref: a,
							modelValue: o.value,
							'onUpdate:modelValue': f => (o.value = f),
							columns: r.value,
							onChange: c,
							onCancel: u,
							onConfirm: h,
						},
						Ie(e, Ef),
					),
					n,
				)
		);
	},
});
const e_ = G(QT),
	[t_, xo] = W('tree-select'),
	n_ = {
		max: le(1 / 0),
		items: Ve(),
		height: le(300),
		selectedIcon: Z('success'),
		mainActiveIndex: le(0),
		activeId: { type: [Number, String, Array], default: 0 },
	};
var o_ = j({
	name: t_,
	props: n_,
	emits: ['clickNav', 'clickItem', 'update:activeId', 'update:mainActiveIndex'],
	setup(e, { emit: t, slots: n }) {
		const o = c =>
				Array.isArray(e.activeId) ? e.activeId.includes(c) : e.activeId === c,
			a = c => {
				const u = () => {
					if (c.disabled) return;
					let h;
					if (Array.isArray(e.activeId)) {
						h = e.activeId.slice();
						const f = h.indexOf(c.id);
						f !== -1 ? h.splice(f, 1) : h.length < +e.max && h.push(c.id);
					} else h = c.id;
					t('update:activeId', h), t('clickItem', c);
				};
				return d(
					'div',
					{
						key: c.id,
						class: [
							'van-ellipsis',
							xo('item', { active: o(c.id), disabled: c.disabled }),
						],
						onClick: u,
					},
					[
						c.text,
						o(c.id) &&
							d(Ce, { name: e.selectedIcon, class: xo('selected') }, null),
					],
				);
			},
			l = c => {
				t('update:mainActiveIndex', c);
			},
			i = c => t('clickNav', c),
			s = () => {
				const c = e.items.map(u =>
					d(
						nh,
						{
							dot: u.dot,
							badge: u.badge,
							class: [xo('nav-item'), u.className],
							disabled: u.disabled,
							onClick: i,
						},
						{ title: () => (n['nav-text'] ? n['nav-text'](u) : u.text) },
					),
				);
				return d(
					th,
					{ class: xo('nav'), modelValue: e.mainActiveIndex, onChange: l },
					{ default: () => [c] },
				);
			},
			r = () => {
				if (n.content) return n.content();
				const c = e.items[+e.mainActiveIndex] || {};
				if (c.children) return c.children.map(a);
			};
		return () =>
			d('div', { class: xo(), style: { height: we(e.height) } }, [
				s(),
				d('div', { class: xo('content') }, [r()]),
			]);
	},
});
const a_ = G(o_),
	[l_, Ge, i_] = W('uploader');
function cu(e, t) {
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
function dh(e, t) {
	return ml(e).some(n =>
		n.file ? (Ao(t) ? t(n.file) : n.file.size > +t) : !1,
	);
}
function r_(e, t) {
	const n = [],
		o = [];
	return (
		e.forEach(a => {
			dh(a, t) ? o.push(a) : n.push(a);
		}),
		{ valid: n, invalid: o }
	);
}
const s_ = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
	c_ = e => s_.test(e);
function fh(e) {
	return e.isImage
		? !0
		: e.file && e.file.type
			? e.file.type.indexOf('image') === 0
			: e.url
				? c_(e.url)
				: typeof e.content == 'string'
					? e.content.indexOf('data:image') === 0
					: !1;
}
var u_ = j({
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
				const { status: u, message: h } = e.item;
				if (u === 'uploading' || u === 'failed') {
					const f =
							u === 'failed'
								? d(Ce, { name: 'close', class: Ge('mask-icon') }, null)
								: d(Nt, { class: Ge('loading') }, null),
						m = Pe(h) && h !== '';
					return d('div', { class: Ge('mask') }, [
						f,
						m && d('div', { class: Ge('mask-message') }, [h]),
					]);
				}
			},
			a = u => {
				const { name: h, item: f, index: m, beforeDelete: v } = e;
				u.stopPropagation(),
					Un(v, { args: [f, { name: h, index: m }], done: () => t('delete') });
			},
			l = () => t('preview'),
			i = () => t('reupload'),
			s = () => {
				if (e.deletable && e.item.status !== 'uploading') {
					const u = n['preview-delete'];
					return d(
						'div',
						{
							role: 'button',
							class: Ge('preview-delete', { shadow: !u }),
							tabindex: 0,
							'aria-label': i_('delete'),
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
					const { index: u, item: h } = e;
					return d('div', { class: Ge('preview-cover') }, [
						n['preview-cover'](he({ index: u }, h)),
					]);
				}
			},
			c = () => {
				const {
					item: u,
					lazyLoad: h,
					imageFit: f,
					previewSize: m,
					reupload: v,
				} = e;
				return fh(u)
					? d(
							Gl,
							{
								fit: f,
								src: u.objectUrl || u.content || u.url,
								class: Ge('preview-image'),
								width: Array.isArray(m) ? m[0] : m,
								height: Array.isArray(m) ? m[1] : m,
								lazyLoad: h,
								onClick: v ? i : l,
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
const d_ = {
	name: le(''),
	accept: Z('image/*'),
	capture: String,
	multiple: Boolean,
	disabled: Boolean,
	readonly: Boolean,
	lazyLoad: Boolean,
	maxCount: le(1 / 0),
	imageFit: Z('cover'),
	resultType: Z('dataUrl'),
	uploadIcon: Z('photograph'),
	uploadText: String,
	deletable: z,
	reupload: Boolean,
	afterRead: Function,
	showUpload: z,
	modelValue: Ve(),
	beforeRead: Function,
	beforeDelete: Function,
	previewSize: [Number, String, Array],
	previewImage: z,
	previewOptions: Object,
	previewFullImage: z,
	maxSize: { type: [Number, String, Function], default: 1 / 0 },
};
var f_ = j({
	name: l_,
	props: d_,
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
			l = D(-1),
			i = D(!1),
			s = (S = e.modelValue.length) => ({ name: e.name, index: S }),
			r = () => {
				o.value && (o.value.value = '');
			},
			c = S => {
				if ((r(), dh(S, e.maxSize)))
					if (Array.isArray(S)) {
						const A = r_(S, e.maxSize);
						if (((S = A.valid), t('oversize', A.invalid, s()), !S.length))
							return;
					} else {
						t('oversize', S, s());
						return;
					}
				if (((S = He(S)), l.value > -1)) {
					const A = [...e.modelValue];
					A.splice(l.value, 1, S), t('update:modelValue', A), (l.value = -1);
				} else t('update:modelValue', [...e.modelValue, ...ml(S)]);
				e.afterRead && e.afterRead(S, s());
			},
			u = S => {
				const { maxCount: A, modelValue: I, resultType: k } = e;
				if (Array.isArray(S)) {
					const P = +A - I.length;
					S.length > P && (S = S.slice(0, P)),
						Promise.all(S.map(B => cu(B, k))).then(B => {
							const X = S.map((V, R) => {
								const N = {
									file: V,
									status: '',
									message: '',
									objectUrl: URL.createObjectURL(V),
								};
								return B[R] && (N.content = B[R]), N;
							});
							c(X);
						});
				} else
					cu(S, k).then(P => {
						const B = {
							file: S,
							status: '',
							message: '',
							objectUrl: URL.createObjectURL(S),
						};
						P && (B.content = P), c(B);
					});
			},
			h = S => {
				const { files: A } = S.target;
				if (e.disabled || !A || !A.length) return;
				const I = A.length === 1 ? A[0] : [].slice.call(A);
				if (e.beforeRead) {
					const k = e.beforeRead(I, s());
					if (!k) {
						r();
						return;
					}
					if (Rr(k)) {
						k.then(P => {
							u(P || I);
						}).catch(r);
						return;
					}
				}
				u(I);
			};
		let f;
		const m = () => t('closePreview'),
			v = S => {
				if (e.previewFullImage) {
					const A = e.modelValue.filter(fh),
						I = A.map(
							k => (
								k.objectUrl &&
									!k.url &&
									k.status !== 'failed' &&
									((k.url = k.objectUrl), a.push(k.url)),
								k.url
							),
						).filter(Boolean);
					f = tS(
						he(
							{ images: I, startPosition: A.indexOf(S), onClose: m },
							e.previewOptions,
						),
					);
				}
			},
			y = () => {
				f && f.close();
			},
			g = (S, A) => {
				const I = e.modelValue.slice(0);
				I.splice(A, 1), t('update:modelValue', I), t('delete', S, s(A));
			},
			w = S => {
				(i.value = !0), (l.value = S), Te(() => O());
			},
			b = () => {
				i.value || (l.value = -1), (i.value = !1);
			},
			C = (S, A) => {
				const I = [
						'imageFit',
						'deletable',
						'reupload',
						'previewSize',
						'beforeDelete',
					],
					k = he(Ie(e, I), Ie(S, I, !0));
				return d(
					u_,
					_e(
						{
							item: S,
							index: A,
							onClick: () =>
								t(e.reupload ? 'clickReupload' : 'clickPreview', S, s(A)),
							onDelete: () => g(S, A),
							onPreview: () => v(S),
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
									multiple: e.multiple && l.value === -1,
									disabled: e.disabled,
									onChange: h,
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
			O = () => {
				o.value && !e.disabled && o.value.click();
			};
		return (
			en(() => {
				a.forEach(S => URL.revokeObjectURL(S));
			}),
			ke({ chooseFile: O, closeImagePreview: y }),
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
const h_ = G(f_),
	[m_, uu] = W('watermark'),
	v_ = {
		gapX: Ke(0),
		gapY: Ke(0),
		image: String,
		width: Ke(100),
		height: Ke(100),
		rotate: le(-22),
		zIndex: q,
		content: String,
		opacity: q,
		fullPage: z,
		textColor: Z('#dcdee0'),
	};
var g_ = j({
	name: m_,
	props: v_,
	setup(e, { slots: t }) {
		const n = D(),
			o = D(''),
			a = D(''),
			l = () => {
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
					h = e.height + e.gapY;
				return d(
					'svg',
					{
						viewBox: `0 0 ${u} ${h}`,
						width: u,
						height: h,
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
			i = r => {
				const c = document.createElement('canvas'),
					u = new Image();
				(u.crossOrigin = 'anonymous'),
					(u.referrerPolicy = 'no-referrer'),
					(u.onload = () => {
						(c.width = u.naturalWidth), (c.height = u.naturalHeight);
						const h = c.getContext('2d');
						h == null || h.drawImage(u, 0, 0), (a.value = c.toDataURL());
					}),
					(u.src = r);
			},
			s = r => {
				const c = new Blob([r], { type: 'image/svg+xml' });
				return URL.createObjectURL(c);
			};
		return (
			Ro(() => {
				e.image && i(e.image);
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
			Bo(() => {
				o.value && URL.revokeObjectURL(o.value);
			}),
			() => {
				const r = he({ backgroundImage: `url(${o.value})` }, yn(e.zIndex));
				return d('div', { class: uu({ full: e.fullPage }), style: r }, [
					d('div', { class: uu('wrapper'), ref: n }, [l()]),
				]);
			}
		);
	},
});
const b_ = G(g_),
	y_ = '4.8.11';
function p_(e) {
	[
		Kd,
		er,
		sy,
		xy,
		j0,
		ip,
		gf,
		dp,
		ro,
		gp,
		it,
		Ip,
		Lp,
		Hp,
		Ht,
		Yp,
		Of,
		ew,
		iw,
		mw,
		yw,
		Cw,
		Tw,
		Pw,
		Ow,
		Lw,
		jw,
		rr,
		Jw,
		lx,
		cx,
		mx,
		px,
		_x,
		kx,
		Lf,
		un,
		Ix,
		Bx,
		Ur,
		Vx,
		Hx,
		Yx,
		Ce,
		Gl,
		nS,
		uS,
		dS,
		gS,
		Nt,
		Fd,
		wS,
		TS,
		IS,
		VS,
		Qd,
		HS,
		YS,
		Yl,
		KS,
		WC,
		zt,
		GC,
		t1,
		Gr,
		Kr,
		i1,
		v1,
		g1,
		x1,
		$1,
		th,
		nh,
		N1,
		iT,
		ah,
		uT,
		lh,
		oh,
		mT,
		yT,
		CT,
		PT,
		$T,
		rf,
		BT,
		Hr,
		VT,
		jr,
		Yr,
		xa,
		zT,
		WT,
		Ul,
		ql,
		GT,
		e_,
		B0,
		a_,
		h_,
		b_,
	].forEach(n => {
		n.install ? e.use(n) : n.name && e.component(n.name, n);
	});
}
var w_ = { install: p_, version: y_ };
bd(Hv).use(Id).use(w_).mount('#app');
export {
	Je as F,
	rc as S,
	Nv as _,
	d as a,
	He as b,
	__ as c,
	j as d,
	D as e,
	fd as f,
	T_ as g,
	Pr as h,
	k_ as i,
	Id as j,
	C_ as k,
	Km as o,
	S_ as p,
	ms as r,
	x_ as t,
	Hu as w,
};

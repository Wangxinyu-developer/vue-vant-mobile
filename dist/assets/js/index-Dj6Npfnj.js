const __vite__fileDeps = [
		'./index-luNE1UcS.js',
		'../css/index-CiFIkKlu.css',
		'./index-3YSlX5V6.js',
		'../css/index-BNvPxelP.css',
		'./create-BcE-z9AC.js',
		'../css/create-DIrVmkYa.css',
		'./index-CM8aSulM.js',
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
 **/ /*! #__NO_SIDE_EFFECTS__ */ function yr(e, t) {
	const n = new Set(e.split(','));
	return o => n.has(o);
}
const Le = {},
	_o = [],
	Ct = () => {},
	yh = () => !1,
	$i = e =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
	pr = e => e.startsWith('onUpdate:'),
	qe = Object.assign,
	wr = (e, t) => {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	},
	ph = Object.prototype.hasOwnProperty,
	Pe = (e, t) => ph.call(e, t),
	ye = Array.isArray,
	ko = e => Pi(e) === '[object Map]',
	bu = e => Pi(e) === '[object Set]',
	Se = e => typeof e == 'function',
	je = e => typeof e == 'string',
	lo = e => typeof e == 'symbol',
	ze = e => e !== null && typeof e == 'object',
	yu = e => (ze(e) || Se(e)) && Se(e.then) && Se(e.catch),
	pu = Object.prototype.toString,
	Pi = e => pu.call(e),
	wh = e => Pi(e).slice(8, -1),
	wu = e => Pi(e) === '[object Object]',
	xr = e => je(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
	na = yr(
		',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
	),
	Ii = e => {
		const t = Object.create(null);
		return n => t[n] || (t[n] = e(n));
	},
	xh = /-(\w)/g,
	Zt = Ii(e => e.replace(xh, (t, n) => (n ? n.toUpperCase() : ''))),
	Sh = /\B([A-Z])/g,
	Nn = Ii(e => e.replace(Sh, '-$1').toLowerCase()),
	Ri = Ii(e => e.charAt(0).toUpperCase() + e.slice(1)),
	ol = Ii(e => (e ? `on${Ri(e)}` : '')),
	Ln = (e, t) => !Object.is(e, t),
	al = (e, t) => {
		for (let n = 0; n < e.length; n++) e[n](t);
	},
	xu = (e, t, n) => {
		Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
	},
	Ch = e => {
		const t = parseFloat(e);
		return isNaN(t) ? e : t;
	},
	Th = e => {
		const t = je(e) ? Number(e) : NaN;
		return isNaN(t) ? e : t;
	};
let ds;
const Su = () =>
	ds ||
	(ds =
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
				a = je(o) ? $h(o) : _a(o);
			if (a) for (const i in a) t[i] = a[i];
		}
		return t;
	} else if (je(e) || ze(e)) return e;
}
const _h = /;(?![^(]*\))/g,
	kh = /:([^]+)/,
	Eh = /\/\*[^]*?\*\//g;
function $h(e) {
	const t = {};
	return (
		e
			.replace(Eh, '')
			.split(_h)
			.forEach(n => {
				if (n) {
					const o = n.split(kh);
					o.length > 1 && (t[o[0].trim()] = o[1].trim());
				}
			}),
		t
	);
}
function Ph(e) {
	let t = '';
	if (!e || je(e)) return t;
	for (const n in e) {
		const o = e[n],
			a = n.startsWith('--') ? n : Nn(n);
		(je(o) || typeof o == 'number') && (t += `${a}:${o};`);
	}
	return t;
}
function Ai(e) {
	let t = '';
	if (je(e)) t = e;
	else if (ye(e))
		for (let n = 0; n < e.length; n++) {
			const o = Ai(e[n]);
			o && (t += o + ' ');
		}
	else if (ze(e)) for (const n in e) e[n] && (t += n + ' ');
	return t.trim();
}
const Ih =
		'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
	Rh = yr(Ih);
function Cu(e) {
	return !!e || e === '';
}
const Ah = e =>
		je(e)
			? e
			: e == null
				? ''
				: ye(e) || (ze(e) && (e.toString === pu || !Se(e.toString)))
					? JSON.stringify(e, Tu, 2)
					: String(e),
	Tu = (e, t) =>
		t && t.__v_isRef
			? Tu(e, t.value)
			: ko(t)
				? {
						[`Map(${t.size})`]: [...t.entries()].reduce(
							(n, [o, a], i) => ((n[il(o, i) + ' =>'] = a), n),
							{},
						),
					}
				: bu(t)
					? { [`Set(${t.size})`]: [...t.values()].map(n => il(n)) }
					: lo(t)
						? il(t)
						: ze(t) && !ye(t) && !wu(t)
							? String(t)
							: t,
	il = (e, t = '') => {
		var n;
		return lo(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
	};
/**
 * @vue/reactivity v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let At;
class Oh {
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
function Bh(e, t = At) {
	t && t.active && t.effects.push(e);
}
function Dh() {
	return At;
}
let no;
class Sr {
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
			Bh(this, a);
	}
	get dirty() {
		if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
			(this._dirtyLevel = 1), Fn();
			for (let t = 0; t < this._depsLength; t++) {
				const n = this.deps[t];
				if (n.computed && (Mh(n.computed), this._dirtyLevel >= 4)) break;
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
			n = no;
		try {
			return (Dn = !0), (no = this), this._runnings++, fs(this), this.fn();
		} finally {
			hs(this), this._runnings--, (no = n), (Dn = t);
		}
	}
	stop() {
		var t;
		this.active &&
			(fs(this),
			hs(this),
			(t = this.onStop) == null || t.call(this),
			(this.active = !1));
	}
}
function Mh(e) {
	return e.value;
}
function fs(e) {
	e._trackId++, (e._depsLength = 0);
}
function hs(e) {
	if (e.deps.length > e._depsLength) {
		for (let t = e._depsLength; t < e.deps.length; t++) _u(e.deps[t], e);
		e.deps.length = e._depsLength;
	}
}
function _u(e, t) {
	const n = e.get(t);
	n !== void 0 &&
		t._trackId !== n &&
		(e.delete(t), e.size === 0 && e.cleanup());
}
let Dn = !0,
	Ml = 0;
const ku = [];
function Fn() {
	ku.push(Dn), (Dn = !1);
}
function zn() {
	const e = ku.pop();
	Dn = e === void 0 ? !0 : e;
}
function Cr() {
	Ml++;
}
function Tr() {
	for (Ml--; !Ml && Ll.length; ) Ll.shift()();
}
function Eu(e, t, n) {
	if (t.get(e) !== e._trackId) {
		t.set(e, e._trackId);
		const o = e.deps[e._depsLength];
		o !== t ? (o && _u(o, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
	}
}
const Ll = [];
function $u(e, t, n) {
	Cr();
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
	Tr();
}
const Pu = (e, t) => {
		const n = new Map();
		return (n.cleanup = e), (n.computed = t), n;
	},
	Vl = new WeakMap(),
	oo = Symbol(''),
	Nl = Symbol('');
function mt(e, t, n) {
	if (Dn && no) {
		let o = Vl.get(e);
		o || Vl.set(e, (o = new Map()));
		let a = o.get(n);
		a || o.set(n, (a = Pu(() => o.delete(n)))), Eu(no, a);
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
			(u === 'length' || (!lo(u) && u >= r)) && s.push(c);
		});
	} else
		switch ((n !== void 0 && s.push(l.get(n)), t)) {
			case 'add':
				ye(e)
					? xr(n) && s.push(l.get('length'))
					: (s.push(l.get(oo)), ko(e) && s.push(l.get(Nl)));
				break;
			case 'delete':
				ye(e) || (s.push(l.get(oo)), ko(e) && s.push(l.get(Nl)));
				break;
			case 'set':
				ko(e) && s.push(l.get(oo));
				break;
		}
	Cr();
	for (const r of s) r && $u(r, 4);
	Tr();
}
const Lh = yr('__proto__,__v_isRef,__isVue'),
	Iu = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter(e => e !== 'arguments' && e !== 'caller')
			.map(e => Symbol[e])
			.filter(lo),
	),
	gs = Vh();
function Vh() {
	const e = {};
	return (
		['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
			e[t] = function (...n) {
				const o = Ae(this);
				for (let i = 0, l = this.length; i < l; i++) mt(o, 'get', i + '');
				const a = o[t](...n);
				return a === -1 || a === !1 ? o[t](...n.map(Ae)) : a;
			};
		}),
		['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
			e[t] = function (...n) {
				Fn(), Cr();
				const o = Ae(this)[t].apply(this, n);
				return Tr(), zn(), o;
			};
		}),
		e
	);
}
function Nh(e) {
	lo(e) || (e = String(e));
	const t = Ae(this);
	return mt(t, 'has', e), t.hasOwnProperty(e);
}
class Ru {
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
			return o === (a ? (i ? Jh : Du) : i ? Bu : Ou).get(t) ||
				Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
				? t
				: void 0;
		const l = ye(t);
		if (!a) {
			if (l && Pe(gs, n)) return Reflect.get(gs, n, o);
			if (n === 'hasOwnProperty') return Nh;
		}
		const s = Reflect.get(t, n, o);
		return (lo(n) ? Iu.has(n) : Lh(n)) || (a || mt(t, 'get', n), i)
			? s
			: ft(s)
				? l && xr(n)
					? s
					: s.value
				: ze(s)
					? a
						? Lu(s)
						: He(s)
					: s;
	}
}
class Au extends Ru {
	constructor(t = !1) {
		super(!1, t);
	}
	set(t, n, o, a) {
		let i = t[n];
		if (!this._isShallow) {
			const r = ha(i);
			if (
				(!di(o) && !ha(o) && ((i = Ae(i)), (o = Ae(o))),
				!ye(t) && ft(i) && !ft(o))
			)
				return r ? !1 : ((i.value = o), !0);
		}
		const l = ye(t) && xr(n) ? Number(n) < t.length : Pe(t, n),
			s = Reflect.set(t, n, o, a);
		return (
			t === Ae(a) && (l ? Ln(o, i) && sn(t, 'set', n, o) : sn(t, 'add', n, o)),
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
		return (!lo(n) || !Iu.has(n)) && mt(t, 'has', n), o;
	}
	ownKeys(t) {
		return mt(t, 'iterate', ye(t) ? 'length' : oo), Reflect.ownKeys(t);
	}
}
class Fh extends Ru {
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
const zh = new Au(),
	Hh = new Fh(),
	jh = new Au(!0);
const _r = e => e,
	Oi = e => Reflect.getPrototypeOf(e);
function Ia(e, t, n = !1, o = !1) {
	e = e.__v_raw;
	const a = Ae(e),
		i = Ae(t);
	n || (Ln(t, i) && mt(a, 'get', t), mt(a, 'get', i));
	const { has: l } = Oi(a),
		s = o ? _r : n ? $r : ga;
	if (l.call(a, t)) return s(e.get(t));
	if (l.call(a, i)) return s(e.get(i));
	e !== a && e.get(t);
}
function Ra(e, t = !1) {
	const n = this.__v_raw,
		o = Ae(n),
		a = Ae(e);
	return (
		t || (Ln(e, a) && mt(o, 'has', e), mt(o, 'has', a)),
		e === a ? n.has(e) : n.has(e) || n.has(a)
	);
}
function Aa(e, t = !1) {
	return (
		(e = e.__v_raw), !t && mt(Ae(e), 'iterate', oo), Reflect.get(e, 'size', e)
	);
}
function ms(e) {
	e = Ae(e);
	const t = Ae(this);
	return Oi(t).has.call(t, e) || (t.add(e), sn(t, 'add', e, e)), this;
}
function vs(e, t) {
	t = Ae(t);
	const n = Ae(this),
		{ has: o, get: a } = Oi(n);
	let i = o.call(n, e);
	i || ((e = Ae(e)), (i = o.call(n, e)));
	const l = a.call(n, e);
	return (
		n.set(e, t), i ? Ln(t, l) && sn(n, 'set', e, t) : sn(n, 'add', e, t), this
	);
}
function bs(e) {
	const t = Ae(this),
		{ has: n, get: o } = Oi(t);
	let a = n.call(t, e);
	a || ((e = Ae(e)), (a = n.call(t, e))), o && o.call(t, e);
	const i = t.delete(e);
	return a && sn(t, 'delete', e, void 0), i;
}
function ys() {
	const e = Ae(this),
		t = e.size !== 0,
		n = e.clear();
	return t && sn(e, 'clear', void 0, void 0), n;
}
function Oa(e, t) {
	return function (o, a) {
		const i = this,
			l = i.__v_raw,
			s = Ae(l),
			r = t ? _r : e ? $r : ga;
		return (
			!e && mt(s, 'iterate', oo), l.forEach((c, u) => o.call(a, r(c), r(u), i))
		);
	};
}
function Ba(e, t, n) {
	return function (...o) {
		const a = this.__v_raw,
			i = Ae(a),
			l = ko(i),
			s = e === 'entries' || (e === Symbol.iterator && l),
			r = e === 'keys' && l,
			c = a[e](...o),
			u = n ? _r : t ? $r : ga;
		return (
			!t && mt(i, 'iterate', r ? Nl : oo),
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
function Wh() {
	const e = {
			get(i) {
				return Ia(this, i);
			},
			get size() {
				return Aa(this);
			},
			has: Ra,
			add: ms,
			set: vs,
			delete: bs,
			clear: ys,
			forEach: Oa(!1, !1),
		},
		t = {
			get(i) {
				return Ia(this, i, !1, !0);
			},
			get size() {
				return Aa(this);
			},
			has: Ra,
			add: ms,
			set: vs,
			delete: bs,
			clear: ys,
			forEach: Oa(!1, !0),
		},
		n = {
			get(i) {
				return Ia(this, i, !0);
			},
			get size() {
				return Aa(this, !0);
			},
			has(i) {
				return Ra.call(this, i, !0);
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
				return Aa(this, !0);
			},
			has(i) {
				return Ra.call(this, i, !0);
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
const [Uh, Yh, Kh, qh] = Wh();
function kr(e, t) {
	const n = t ? (e ? qh : Kh) : e ? Yh : Uh;
	return (o, a, i) =>
		a === '__v_isReactive'
			? !e
			: a === '__v_isReadonly'
				? e
				: a === '__v_raw'
					? o
					: Reflect.get(Pe(n, a) && a in o ? n : o, a, i);
}
const Gh = { get: kr(!1, !1) },
	Xh = { get: kr(!1, !0) },
	Zh = { get: kr(!0, !1) };
const Ou = new WeakMap(),
	Bu = new WeakMap(),
	Du = new WeakMap(),
	Jh = new WeakMap();
function Qh(e) {
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
function eg(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Qh(wh(e));
}
function He(e) {
	return ha(e) ? e : Er(e, !1, zh, Gh, Ou);
}
function Mu(e) {
	return Er(e, !1, jh, Xh, Bu);
}
function Lu(e) {
	return Er(e, !0, Hh, Zh, Du);
}
function Er(e, t, n, o, a) {
	if (!ze(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
	const i = a.get(e);
	if (i) return i;
	const l = eg(e);
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
function Vu(e) {
	return e ? !!e.__v_raw : !1;
}
function Ae(e) {
	const t = e && e.__v_raw;
	return t ? Ae(t) : e;
}
function tg(e) {
	return Object.isExtensible(e) && xu(e, '__v_skip', !0), e;
}
const ga = e => (ze(e) ? He(e) : e),
	$r = e => (ze(e) ? Lu(e) : e);
class Nu {
	constructor(t, n, o, a) {
		(this.getter = t),
			(this._setter = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !1),
			(this.effect = new Sr(
				() => t(this._value),
				() => oi(this, this.effect._dirtyLevel === 2 ? 2 : 3),
			)),
			(this.effect.computed = this),
			(this.effect.active = this._cacheable = !a),
			(this.__v_isReadonly = o);
	}
	get value() {
		const t = Ae(this);
		return (
			(!t._cacheable || t.effect.dirty) &&
				Ln(t._value, (t._value = t.effect.run())) &&
				oi(t, 4),
			Fu(t),
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
function ng(e, t, n = !1) {
	let o, a;
	const i = Se(e);
	return (
		i ? ((o = e), (a = Ct)) : ((o = e.get), (a = e.set)),
		new Nu(o, a, i || !a, n)
	);
}
function Fu(e) {
	var t;
	Dn &&
		no &&
		((e = Ae(e)),
		Eu(
			no,
			(t = e.dep) != null
				? t
				: (e.dep = Pu(() => (e.dep = void 0), e instanceof Nu ? e : void 0)),
		));
}
function oi(e, t = 4, n) {
	e = Ae(e);
	const o = e.dep;
	o && $u(o, t);
}
function ft(e) {
	return !!(e && e.__v_isRef === !0);
}
function D(e) {
	return zu(e, !1);
}
function og(e) {
	return zu(e, !0);
}
function zu(e, t) {
	return ft(e) ? e : new ag(e, t);
}
class ag {
	constructor(t, n) {
		(this.__v_isShallow = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this._rawValue = n ? t : Ae(t)),
			(this._value = n ? t : ga(t));
	}
	get value() {
		return Fu(this), this._value;
	}
	set value(t) {
		const n = this.__v_isShallow || di(t) || ha(t);
		(t = n ? t : Ae(t)),
			Ln(t, this._rawValue) &&
				((this._rawValue = t), (this._value = n ? t : ga(t)), oi(this, 4));
	}
}
function Dt(e) {
	return ft(e) ? e.value : e;
}
const ig = {
	get: (e, t, n) => Dt(Reflect.get(e, t, n)),
	set: (e, t, n, o) => {
		const a = e[t];
		return ft(a) && !ft(n) ? ((a.value = n), !0) : Reflect.set(e, t, n, o);
	},
};
function Hu(e) {
	return oa(e) ? e : new Proxy(e, ig);
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
function Tt(e, t, n, o) {
	if (Se(e)) {
		const a = Mn(e, t, n, o);
		return (
			a &&
				yu(a) &&
				a.catch(i => {
					Bi(i, t, n);
				}),
			a
		);
	}
	if (ye(e)) {
		const a = [];
		for (let i = 0; i < e.length; i++) a.push(Tt(e[i], t, n, o));
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
	lg(e, n, a, o);
}
function lg(e, t, n, o = !0) {
	console.error(e);
}
let ma = !1,
	Fl = !1;
const at = [];
let Gt = 0;
const Eo = [];
let Pn = null,
	Jn = 0;
const ju = Promise.resolve();
let Pr = null;
function Te(e) {
	const t = Pr || ju;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function rg(e) {
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
function Ir(e) {
	(!at.length || !at.includes(e, ma && e.allowRecurse ? Gt + 1 : Gt)) &&
		(e.id == null ? at.push(e) : at.splice(rg(e.id), 0, e), Wu());
}
function Wu() {
	!ma && !Fl && ((Fl = !0), (Pr = ju.then(Yu)));
}
function sg(e) {
	const t = at.indexOf(e);
	t > Gt && at.splice(t, 1);
}
function cg(e) {
	ye(e)
		? Eo.push(...e)
		: (!Pn || !Pn.includes(e, e.allowRecurse ? Jn + 1 : Jn)) && Eo.push(e),
		Wu();
}
function ps(e, t, n = ma ? Gt + 1 : 0) {
	for (; n < at.length; n++) {
		const o = at[n];
		if (o && o.pre) {
			if (e && o.id !== e.uid) continue;
			at.splice(n, 1), n--, o();
		}
	}
}
function Uu(e) {
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
	ug = (e, t) => {
		const n = va(e) - va(t);
		if (n === 0) {
			if (e.pre && !t.pre) return -1;
			if (t.pre && !e.pre) return 1;
		}
		return n;
	};
function Yu(e) {
	(Fl = !1), (ma = !0), at.sort(ug);
	try {
		for (Gt = 0; Gt < at.length; Gt++) {
			const t = at[Gt];
			t && t.active !== !1 && Mn(t, null, 14);
		}
	} finally {
		(Gt = 0),
			(at.length = 0),
			Uu(),
			(ma = !1),
			(Pr = null),
			(at.length || Eo.length) && Yu();
	}
}
function dg(e, t, ...n) {
	if (e.isUnmounted) return;
	const o = e.vnode.props || Le;
	let a = n;
	const i = t.startsWith('update:'),
		l = i && t.slice(7);
	if (l && l in o) {
		const u = `${l === 'modelValue' ? 'model' : l}Modifiers`,
			{ number: h, trim: f } = o[u] || Le;
		f && (a = n.map(g => (je(g) ? g.trim() : g))), h && (a = n.map(Ch));
	}
	let s,
		r = o[(s = ol(t))] || o[(s = ol(Zt(t)))];
	!r && i && (r = o[(s = ol(Nn(t)))]), r && Tt(r, e, 6, a);
	const c = o[s + 'Once'];
	if (c) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		(e.emitted[s] = !0), Tt(c, e, 6, a);
	}
}
function Ku(e, t, n = !1) {
	const o = t.emitsCache,
		a = o.get(e);
	if (a !== void 0) return a;
	const i = e.emits;
	let l = {},
		s = !1;
	if (!Se(e)) {
		const r = c => {
			const u = Ku(c, t, !0);
			u && ((s = !0), qe(l, u));
		};
		!n && t.mixins.length && t.mixins.forEach(r),
			e.extends && r(e.extends),
			e.mixins && e.mixins.forEach(r);
	}
	return !i && !s
		? (ze(e) && o.set(e, null), null)
		: (ye(i) ? i.forEach(r => (l[r] = null)) : qe(l, i),
			ze(e) && o.set(e, l),
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
function O_(e) {
	Mi = e;
}
function B_() {
	Mi = null;
}
function hi(e, t = dt, n) {
	if (!t || e._n) return e;
	const o = (...a) => {
		o._d && Os(-1);
		const i = fi(t);
		let l;
		try {
			l = e(...a);
		} finally {
			fi(i), o._d && Os(1);
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
			props: h,
			data: f,
			setupState: g,
			ctx: m,
			inheritAttrs: y,
		} = e,
		v = fi(e);
	let w, b;
	try {
		if (n.shapeFlag & 4) {
			const p = a || o,
				x = p;
			(w = qt(c.call(x, p, u, h, g, f, m))), (b = s);
		} else {
			const p = t;
			(w = qt(
				p.length > 1 ? p(h, { attrs: s, slots: l, emit: r }) : p(h, null),
			)),
				(b = t.props ? s : fg(s));
		}
	} catch (p) {
		(ra.length = 0), Bi(p, e, 1), (w = d(pt));
	}
	let C = w;
	if (b && y !== !1) {
		const p = Object.keys(b),
			{ shapeFlag: x } = C;
		p.length && x & 7 && (i && p.some(pr) && (b = hg(b, i)), (C = Vn(C, b)));
	}
	return (
		n.dirs && ((C = Vn(C)), (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs)),
		n.transition && (C.transition = n.transition),
		(w = C),
		fi(v),
		w
	);
}
const fg = e => {
		let t;
		for (const n in e)
			(n === 'class' || n === 'style' || $i(n)) && ((t || (t = {}))[n] = e[n]);
		return t;
	},
	hg = (e, t) => {
		const n = {};
		for (const o in e) (!pr(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
		return n;
	};
function gg(e, t, n) {
	const { props: o, children: a, component: i } = e,
		{ props: l, children: s, patchFlag: r } = t,
		c = i.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && r >= 0) {
		if (r & 1024) return !0;
		if (r & 16) return o ? ws(o, l, c) : !!l;
		if (r & 8) {
			const u = t.dynamicProps;
			for (let h = 0; h < u.length; h++) {
				const f = u[h];
				if (l[f] !== o[f] && !Di(c, f)) return !0;
			}
		}
	} else
		return (a || s) && (!s || !s.$stable)
			? !0
			: o === l
				? !1
				: o
					? l
						? ws(o, l, c)
						: !0
					: !!l;
	return !1;
}
function ws(e, t, n) {
	const o = Object.keys(t);
	if (o.length !== Object.keys(e).length) return !0;
	for (let a = 0; a < o.length; a++) {
		const i = o[a];
		if (t[i] !== e[i] && !Di(n, i)) return !0;
	}
	return !1;
}
function mg({ vnode: e, parent: t }, n) {
	for (; t; ) {
		const o = t.subTree;
		if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
			((e = t.vnode).el = n), (t = t.parent);
		else break;
	}
}
const qu = 'components',
	vg = 'directives';
function gi(e, t) {
	return Gu(qu, e, !0, t) || e;
}
const bg = Symbol.for('v-ndc');
function yg(e) {
	return Gu(vg, e);
}
function Gu(e, t, n = !0, o = !1) {
	const a = dt || tt;
	if (a) {
		const i = a.type;
		if (e === qu) {
			const s = um(i, !1);
			if (s && (s === t || s === Zt(t) || s === Ri(Zt(t)))) return i;
		}
		const l = xs(a[e] || i[e], t) || xs(a.appContext[e], t);
		return !l && o ? i : l;
	}
}
function xs(e, t) {
	return e && (e[t] || e[Zt(t)] || e[Ri(Zt(t))]);
}
const pg = e => e.__isSuspense;
function wg(e, t) {
	t && t.pendingBranch
		? ye(e)
			? t.effects.push(...e)
			: t.effects.push(e)
		: cg(e);
}
const xg = Symbol.for('v-scx'),
	Sg = () => gt(xg);
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
		t = (...A) => {
			T(...A), x();
		};
	}
	const r = tt,
		c = T => (o === !0 ? T : eo(T, o === !1 ? 1 : void 0));
	let u,
		h = !1,
		f = !1;
	if (
		(ft(e)
			? ((u = () => e.value), (h = di(e)))
			: oa(e)
				? ((u = () => c(e)), (h = !0))
				: ye(e)
					? ((f = !0),
						(h = e.some(T => oa(T) || di(T))),
						(u = () =>
							e.map(T => {
								if (ft(T)) return T.value;
								if (oa(T)) return c(T);
								if (Se(T)) return Mn(T, r, 2);
							})))
					: Se(e)
						? t
							? (u = () => Mn(e, r, 2))
							: (u = () => (g && g(), Tt(e, r, 3, [m])))
						: (u = Ct),
		t && o)
	) {
		const T = u;
		u = () => eo(T());
	}
	let g,
		m = T => {
			g = C.onStop = () => {
				Mn(T, r, 4), (g = C.onStop = void 0);
			};
		},
		y;
	if (Ni)
		if (
			((m = Ct),
			t ? n && Tt(t, r, 3, [u(), f ? [] : void 0, m]) : u(),
			a === 'sync')
		) {
			const T = Sg();
			y = T.__watcherHandles || (T.__watcherHandles = []);
		} else return Ct;
	let v = f ? new Array(e.length).fill(Da) : Da;
	const w = () => {
		if (!(!C.active || !C.dirty))
			if (t) {
				const T = C.run();
				(o || h || (f ? T.some((A, S) => Ln(A, v[S])) : Ln(T, v))) &&
					(g && g(),
					Tt(t, r, 3, [T, v === Da ? void 0 : f && v[0] === Da ? [] : v, m]),
					(v = T));
			} else C.run();
	};
	w.allowRecurse = !!t;
	let b;
	a === 'sync'
		? (b = w)
		: a === 'post'
			? (b = () => ht(w, r && r.suspense))
			: ((w.pre = !0), r && (w.id = r.uid), (b = () => Ir(w)));
	const C = new Sr(u, Ct, b),
		p = Dh(),
		x = () => {
			C.stop(), p && wr(p.effects, C);
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
function Cg(e, t, n) {
	const o = this.proxy,
		a = je(e) ? (e.includes('.') ? Xu(o, e) : () => o[e]) : e.bind(o, o);
	let i;
	Se(t) ? (i = t) : ((i = t.handler), (n = t));
	const l = Ea(this),
		s = Rr(a, i.bind(o), n);
	return l(), s;
}
function Xu(e, t) {
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
	else if (bu(e) || ko(e))
		e.forEach(a => {
			eo(a, t, n, o);
		});
	else if (wu(e)) for (const a in e) eo(e[a], t, n, o);
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
			i.deep && eo(l),
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
		r && (Fn(), Tt(r, n, 8, [e.el, s, e, t]), zn());
	}
}
const In = Symbol('_leaveCb'),
	Ma = Symbol('_enterCb');
function Tg() {
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
const wt = [Function, Array],
	Zu = {
		mode: String,
		appear: Boolean,
		persisted: Boolean,
		onBeforeEnter: wt,
		onEnter: wt,
		onAfterEnter: wt,
		onEnterCancelled: wt,
		onBeforeLeave: wt,
		onLeave: wt,
		onAfterLeave: wt,
		onLeaveCancelled: wt,
		onBeforeAppear: wt,
		onAppear: wt,
		onAfterAppear: wt,
		onAppearCancelled: wt,
	},
	_g = {
		name: 'BaseTransition',
		props: Zu,
		setup(e, { slots: t }) {
			const n = Nt(),
				o = Tg();
			return () => {
				const a = t.default && Qu(t.default(), !0);
				if (!a || !a.length) return;
				let i = a[0];
				if (a.length > 1) {
					for (const f of a)
						if (f.type !== pt) {
							i = f;
							break;
						}
				}
				const l = Ae(e),
					{ mode: s } = l;
				if (o.isLeaving) return rl(i);
				const r = Ss(i);
				if (!r) return rl(i);
				const c = zl(r, l, o, n);
				Hl(r, c);
				const u = n.subTree,
					h = u && Ss(u);
				if (h && h.type !== pt && !Qn(r, h)) {
					const f = zl(h, l, o, n);
					if ((Hl(h, f), s === 'out-in'))
						return (
							(o.isLeaving = !0),
							(f.afterLeave = () => {
								(o.isLeaving = !1),
									n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
							}),
							rl(i)
						);
					s === 'in-out' &&
						r.type !== pt &&
						(f.delayLeave = (g, m, y) => {
							const v = Ju(o, h);
							(v[String(h.key)] = h),
								(g[In] = () => {
									m(), (g[In] = void 0), delete c.delayedLeave;
								}),
								(c.delayedLeave = y);
						});
				}
				return i;
			};
		},
	},
	kg = _g;
function Ju(e, t) {
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
			onBeforeLeave: h,
			onLeave: f,
			onAfterLeave: g,
			onLeaveCancelled: m,
			onBeforeAppear: y,
			onAppear: v,
			onAfterAppear: w,
			onAppearCancelled: b,
		} = t,
		C = String(e.key),
		p = Ju(n, e),
		x = (S, R) => {
			S && Tt(S, o, 9, R);
		},
		T = (S, R) => {
			const I = R[1];
			x(S, R),
				ye(S) ? S.every(k => k.length <= 1) && I() : S.length <= 1 && I();
		},
		A = {
			mode: i,
			persisted: l,
			beforeEnter(S) {
				let R = s;
				if (!n.isMounted)
					if (a) R = y || s;
					else return;
				S[In] && S[In](!0);
				const I = p[C];
				I && Qn(e, I) && I.el[In] && I.el[In](), x(R, [S]);
			},
			enter(S) {
				let R = r,
					I = c,
					k = u;
				if (!n.isMounted)
					if (a) (R = v || r), (I = w || c), (k = b || u);
					else return;
				let $ = !1;
				const B = (S[Ma] = X => {
					$ ||
						(($ = !0),
						X ? x(k, [S]) : x(I, [S]),
						A.delayedLeave && A.delayedLeave(),
						(S[Ma] = void 0));
				});
				R ? T(R, [S, B]) : B();
			},
			leave(S, R) {
				const I = String(e.key);
				if ((S[Ma] && S[Ma](!0), n.isUnmounting)) return R();
				x(h, [S]);
				let k = !1;
				const $ = (S[In] = B => {
					k ||
						((k = !0),
						R(),
						B ? x(m, [S]) : x(g, [S]),
						(S[In] = void 0),
						p[I] === e && delete p[I]);
				});
				(p[I] = e), f ? T(f, [S, $]) : $();
			},
			clone(S) {
				return zl(S, t, n, o);
			},
		};
	return A;
}
function rl(e) {
	if (Li(e)) return (e = Vn(e)), (e.children = null), e;
}
function Ss(e) {
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
function Qu(e, t = !1, n) {
	let o = [],
		a = 0;
	for (let i = 0; i < e.length; i++) {
		let l = e[i];
		const s = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
		l.type === Je
			? (l.patchFlag & 128 && a++, (o = o.concat(Qu(l.children, t, s))))
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
	ed(e, 'a', t);
}
function Qt(e, t) {
	ed(e, 'da', t);
}
function ed(e, t, n = tt) {
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
			Li(a.parent.vnode) && Eg(o, t, n, a), (a = a.parent);
	}
}
function Eg(e, t, n, o) {
	const a = Vi(t, e, o, !0);
	Mo(() => {
		wr(o[t], a);
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
						r = Tt(t, n, e, l);
					return s(), zn(), r;
				});
		return o ? a.unshift(i) : a.push(i), i;
	}
}
const vn =
		e =>
		(t, n = tt) =>
			(!Ni || e === 'sp') && Vi(e, (...o) => t(...o), n),
	$g = vn('bm'),
	Ue = vn('m'),
	td = vn('bu'),
	nd = vn('u'),
	en = vn('bum'),
	Mo = vn('um'),
	Pg = vn('sp'),
	Ig = vn('rtg'),
	Rg = vn('rtc');
function Ag(e, t = tt) {
	Vi('ec', e, t);
}
function D_(e, t, n, o) {
	let a;
	const i = n;
	if (ye(e) || je(e)) {
		a = new Array(e.length);
		for (let l = 0, s = e.length; l < s; l++) a[l] = t(e[l], l, void 0, i);
	} else {
		a = new Array(e);
		for (let l = 0; l < e; l++) a[l] = t(l + 1, l, void 0, i);
	}
	return a;
}
const jl = e => (e ? (yd(e) ? Fi(e) || e.proxy : jl(e.parent)) : null),
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
		$options: e => Ar(e),
		$forceUpdate: e =>
			e.f ||
			(e.f = () => {
				(e.effect.dirty = !0), Ir(e.update);
			}),
		$nextTick: e => e.n || (e.n = Te.bind(e.proxy)),
		$watch: e => Cg.bind(e),
	}),
	sl = (e, t) => e !== Le && !e.__isScriptSetup && Pe(e, t),
	Og = {
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
				const g = l[t];
				if (g !== void 0)
					switch (g) {
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
			let h, f;
			if (u) return t === '$attrs' && mt(e.attrs, 'get', ''), u(e);
			if ((h = s.__cssModules) && (h = h[t])) return h;
			if (n !== Le && Pe(n, t)) return (l[t] = 4), n[t];
			if (((f = r.config.globalProperties), Pe(f, t))) return f[t];
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
function Cs(e) {
	return ye(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Wl = !0;
function Bg(e) {
	const t = Ar(e),
		n = e.proxy,
		o = e.ctx;
	(Wl = !1), t.beforeCreate && Ts(t.beforeCreate, e, 'bc');
	const {
		data: a,
		computed: i,
		methods: l,
		watch: s,
		provide: r,
		inject: c,
		created: u,
		beforeMount: h,
		mounted: f,
		beforeUpdate: g,
		updated: m,
		activated: y,
		deactivated: v,
		beforeDestroy: w,
		beforeUnmount: b,
		destroyed: C,
		unmounted: p,
		render: x,
		renderTracked: T,
		renderTriggered: A,
		errorCaptured: S,
		serverPrefetch: R,
		expose: I,
		inheritAttrs: k,
		components: $,
		directives: B,
		filters: X,
	} = t;
	if ((c && Dg(c, o, null), l))
		for (const F in l) {
			const Y = l[F];
			Se(Y) && (o[F] = Y.bind(n));
		}
	if (a) {
		const F = a.call(n, n);
		ze(F) && (e.data = He(F));
	}
	if (((Wl = !0), i))
		for (const F in i) {
			const Y = i[F],
				ge = Se(Y) ? Y.bind(n, n) : Se(Y.get) ? Y.get.bind(n, n) : Ct,
				ve = !Se(Y) && Se(Y.set) ? Y.set.bind(n) : Ct,
				ne = L({ get: ge, set: ve });
			Object.defineProperty(o, F, {
				enumerable: !0,
				configurable: !0,
				get: () => ne.value,
				set: se => (ne.value = se),
			});
		}
	if (s) for (const F in s) od(s[F], o, n, F);
	if (r) {
		const F = Se(r) ? r.call(n) : r;
		Reflect.ownKeys(F).forEach(Y => {
			cn(Y, F[Y]);
		});
	}
	u && Ts(u, e, 'c');
	function O(F, Y) {
		ye(Y) ? Y.forEach(ge => F(ge.bind(n))) : Y && F(Y.bind(n));
	}
	if (
		(O($g, h),
		O(Ue, f),
		O(td, g),
		O(nd, m),
		O(Jt, y),
		O(Qt, v),
		O(Ag, S),
		O(Rg, T),
		O(Ig, A),
		O(en, b),
		O(Mo, p),
		O(Pg, R),
		ye(I))
	)
		if (I.length) {
			const F = e.exposed || (e.exposed = {});
			I.forEach(Y => {
				Object.defineProperty(F, Y, {
					get: () => n[Y],
					set: ge => (n[Y] = ge),
				});
			});
		} else e.exposed || (e.exposed = {});
	x && e.render === Ct && (e.render = x),
		k != null && (e.inheritAttrs = k),
		$ && (e.components = $),
		B && (e.directives = B);
}
function Dg(e, t, n = Ct) {
	ye(e) && (e = Ul(e));
	for (const o in e) {
		const a = e[o];
		let i;
		ze(a)
			? 'default' in a
				? (i = gt(a.from || o, a.default, !0))
				: (i = gt(a.from || o))
			: (i = gt(a)),
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
function Ts(e, t, n) {
	Tt(ye(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function od(e, t, n, o) {
	const a = o.includes('.') ? Xu(n, o) : () => n[o];
	if (je(e)) {
		const i = t[e];
		Se(i) && ee(a, i);
	} else if (Se(e)) ee(a, e.bind(n));
	else if (ze(e))
		if (ye(e)) e.forEach(i => od(i, t, n, o));
		else {
			const i = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
			Se(i) && ee(a, i, e);
		}
}
function Ar(e) {
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
				: ((r = {}), a.length && a.forEach(c => mi(r, c, l, !0)), mi(r, t, l)),
		ze(t) && i.set(t, r),
		r
	);
}
function mi(e, t, n, o = !1) {
	const { mixins: a, extends: i } = t;
	i && mi(e, i, n, !0), a && a.forEach(l => mi(e, l, n, !0));
	for (const l in t)
		if (!(o && l === 'expose')) {
			const s = Mg[l] || (n && n[l]);
			e[l] = s ? s(e[l], t[l]) : t[l];
		}
	return e;
}
const Mg = {
	data: _s,
	props: ks,
	emits: ks,
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
	watch: Vg,
	provide: _s,
	inject: Lg,
};
function _s(e, t) {
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
function Lg(e, t) {
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
function ks(e, t) {
	return e
		? ye(e) && ye(t)
			? [...new Set([...e, ...t])]
			: qe(Object.create(null), Cs(e), Cs(t ?? {}))
		: t;
}
function Vg(e, t) {
	if (!e) return t;
	if (!t) return e;
	const n = qe(Object.create(null), e);
	for (const o in t) n[o] = ut(e[o], t[o]);
	return n;
}
function ad() {
	return {
		app: null,
		config: {
			isNativeTag: yh,
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
let Ng = 0;
function Fg(e, t) {
	return function (o, a = null) {
		Se(o) || (o = qe({}, o)), a != null && !ze(a) && (a = null);
		const i = ad(),
			l = new WeakSet();
		let s = !1;
		const r = (i.app = {
			_uid: Ng++,
			_component: o,
			_props: a,
			_container: null,
			_context: i,
			_instance: null,
			version: fm,
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
			mount(c, u, h) {
				if (!s) {
					const f = d(o, a);
					return (
						(f.appContext = i),
						h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
						u && t ? t(f, c) : e(f, c, h),
						(s = !0),
						(r._container = c),
						(c.__vue_app__ = r),
						Fi(f.component) || f.component.proxy
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
function gt(e, t, n = !1) {
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
const id = {},
	ld = () => Object.create(id),
	rd = e => Object.getPrototypeOf(e) === id;
function zg(e, t, n, o = !1) {
	const a = {},
		i = ld();
	(e.propsDefaults = Object.create(null)), sd(e, t, a, i);
	for (const l in e.propsOptions[0]) l in a || (a[l] = void 0);
	n ? (e.props = o ? a : Mu(a)) : e.type.props ? (e.props = a) : (e.props = i),
		(e.attrs = i);
}
function Hg(e, t, n, o) {
	const {
			props: a,
			attrs: i,
			vnode: { patchFlag: l },
		} = e,
		s = Ae(a),
		[r] = e.propsOptions;
	let c = !1;
	if ((o || l > 0) && !(l & 16)) {
		if (l & 8) {
			const u = e.vnode.dynamicProps;
			for (let h = 0; h < u.length; h++) {
				let f = u[h];
				if (Di(e.emitsOptions, f)) continue;
				const g = t[f];
				if (r)
					if (Pe(i, f)) g !== i[f] && ((i[f] = g), (c = !0));
					else {
						const m = Zt(f);
						a[m] = Yl(r, s, m, g, e, !1);
					}
				else g !== i[f] && ((i[f] = g), (c = !0));
			}
		}
	} else {
		sd(e, t, a, i) && (c = !0);
		let u;
		for (const h in s)
			(!t || (!Pe(t, h) && ((u = Nn(h)) === h || !Pe(t, u)))) &&
				(r
					? n &&
						(n[h] !== void 0 || n[u] !== void 0) &&
						(a[h] = Yl(r, s, h, void 0, e, !0))
					: delete a[h]);
		if (i !== s)
			for (const h in i) (!t || !Pe(t, h)) && (delete i[h], (c = !0));
	}
	c && sn(e.attrs, 'set', '');
}
function sd(e, t, n, o) {
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
		const r = Ae(n),
			c = s || Le;
		for (let u = 0; u < i.length; u++) {
			const h = i[u];
			n[h] = Yl(a, r, h, c[h], e, !Pe(c, h));
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
function cd(e, t, n = !1) {
	const o = t.propsCache,
		a = o.get(e);
	if (a) return a;
	const i = e.props,
		l = {},
		s = [];
	let r = !1;
	if (!Se(e)) {
		const u = h => {
			r = !0;
			const [f, g] = cd(h, t, !0);
			qe(l, f), g && s.push(...g);
		};
		!n && t.mixins.length && t.mixins.forEach(u),
			e.extends && u(e.extends),
			e.mixins && e.mixins.forEach(u);
	}
	if (!i && !r) return ze(e) && o.set(e, _o), _o;
	if (ye(i))
		for (let u = 0; u < i.length; u++) {
			const h = Zt(i[u]);
			Es(h) && (l[h] = Le);
		}
	else if (i)
		for (const u in i) {
			const h = Zt(u);
			if (Es(h)) {
				const f = i[u],
					g = (l[h] = ye(f) || Se(f) ? { type: f } : qe({}, f));
				if (g) {
					const m = Is(Boolean, g.type),
						y = Is(String, g.type);
					(g[0] = m > -1),
						(g[1] = y < 0 || m < y),
						(m > -1 || Pe(g, 'default')) && s.push(h);
				}
			}
		}
	const c = [l, s];
	return ze(e) && o.set(e, c), c;
}
function Es(e) {
	return e[0] !== '$' && !na(e);
}
function $s(e) {
	return e === null
		? 'null'
		: typeof e == 'function'
			? e.name || ''
			: (typeof e == 'object' && e.constructor && e.constructor.name) || '';
}
function Ps(e, t) {
	return $s(e) === $s(t);
}
function Is(e, t) {
	return ye(t) ? t.findIndex(n => Ps(n, e)) : Se(t) && Ps(t, e) ? 0 : -1;
}
const ud = e => e[0] === '_' || e === '$stable',
	Or = e => (ye(e) ? e.map(qt) : [qt(e)]),
	jg = (e, t, n) => {
		if (t._n) return t;
		const o = hi((...a) => Or(t(...a)), n);
		return (o._c = !1), o;
	},
	dd = (e, t, n) => {
		const o = e._ctx;
		for (const a in e) {
			if (ud(a)) continue;
			const i = e[a];
			if (Se(i)) t[a] = jg(a, i, o);
			else if (i != null) {
				const l = Or(i);
				t[a] = () => l;
			}
		}
	},
	fd = (e, t) => {
		const n = Or(t);
		e.slots.default = () => n;
	},
	Wg = (e, t) => {
		const n = (e.slots = ld());
		if (e.vnode.shapeFlag & 32) {
			const o = t._;
			o ? (qe(n, t), xu(n, '_', o)) : dd(t, n);
		} else t && fd(e, t);
	},
	Ug = (e, t, n) => {
		const { vnode: o, slots: a } = e;
		let i = !0,
			l = Le;
		if (o.shapeFlag & 32) {
			const s = t._;
			s
				? n && s === 1
					? (i = !1)
					: (qe(a, t), !n && s === 1 && delete a._)
				: ((i = !t.$stable), dd(t, a)),
				(l = t);
		} else t && (fd(e, t), (l = { default: 1 }));
		if (i) for (const s in a) !ud(s) && l[s] == null && delete a[s];
	};
function Kl(e, t, n, o, a = !1) {
	if (ye(e)) {
		e.forEach((f, g) => Kl(f, t && (ye(t) ? t[g] : t), n, o, a));
		return;
	}
	if (ai(o) && !a) return;
	const i = o.shapeFlag & 4 ? Fi(o.component) || o.component.proxy : o.el,
		l = a ? null : i,
		{ i: s, r } = e,
		c = t && t.r,
		u = s.refs === Le ? (s.refs = {}) : s.refs,
		h = s.setupState;
	if (
		(c != null &&
			c !== r &&
			(je(c)
				? ((u[c] = null), Pe(h, c) && (h[c] = null))
				: ft(c) && (c.value = null)),
		Se(r))
	)
		Mn(r, s, 12, [l, u]);
	else {
		const f = je(r),
			g = ft(r);
		if (f || g) {
			const m = () => {
				if (e.f) {
					const y = f ? (Pe(h, r) ? h[r] : u[r]) : r.value;
					a
						? ye(y) && wr(y, i)
						: ye(y)
							? y.includes(i) || y.push(i)
							: f
								? ((u[r] = [i]), Pe(h, r) && (h[r] = u[r]))
								: ((r.value = [i]), e.k && (u[e.k] = r.value));
				} else
					f
						? ((u[r] = l), Pe(h, r) && (h[r] = l))
						: g && ((r.value = l), e.k && (u[e.k] = l));
			};
			l ? ((m.id = -1), ht(m, n)) : m();
		}
	}
}
const ht = wg;
function Yg(e) {
	return Kg(e);
}
function Kg(e, t) {
	const n = Su();
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
			parentNode: h,
			nextSibling: f,
			setScopeId: g = Ct,
			insertStaticContent: m,
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
			const { type: J, ref: ce, shapeFlag: me } = P;
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
					me & 1
						? x(_, P, M, K, W, oe, le, te, ae)
						: me & 6
							? B(_, P, M, K, W, oe, le, te, ae)
							: (me & 64 || me & 128) &&
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
			[_.el, _.anchor] = m(_.children, P, M, K, _.el, _.anchor);
		},
		C = ({ el: _, anchor: P }, M, K) => {
			let W;
			for (; _ && _ !== P; ) (W = f(_)), o(_, M, K), (_ = W);
			o(P, M, K);
		},
		p = ({ el: _, anchor: P }) => {
			let M;
			for (; _ && _ !== P; ) (M = f(_)), a(_), (_ = M);
			a(P);
		},
		x = (_, P, M, K, W, oe, le, te, ae) => {
			P.type === 'svg' ? (le = 'svg') : P.type === 'math' && (le = 'mathml'),
				_ == null ? T(P, M, K, W, oe, le, te, ae) : R(_, P, W, oe, le, te, ae);
		},
		T = (_, P, M, K, W, oe, le, te) => {
			let ae, J;
			const { props: ce, shapeFlag: me, transition: fe, dirs: pe } = _;
			if (
				((ae = _.el = l(_.type, oe, ce && ce.is, ce)),
				me & 8
					? u(ae, _.children)
					: me & 16 && S(_.children, ae, null, K, W, cl(_, oe), le, te),
				pe && Yn(_, null, K, 'created'),
				A(ae, _, _.scopeId, le, K),
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
			const Ee = qg(W, fe);
			Ee && fe.beforeEnter(ae),
				o(ae, P, M),
				((J = ce && ce.onVnodeMounted) || Ee || pe) &&
					ht(() => {
						J && Ut(J, K, _),
							Ee && fe.enter(ae),
							pe && Yn(_, null, K, 'mounted');
					}, W);
		},
		A = (_, P, M, K, W) => {
			if ((M && g(_, M), K)) for (let oe = 0; oe < K.length; oe++) g(_, K[oe]);
			if (W) {
				let oe = W.subTree;
				if (P === oe) {
					const le = W.vnode;
					A(_, le, le.scopeId, le.slotScopeIds, W.parent);
				}
			}
		},
		S = (_, P, M, K, W, oe, le, te, ae = 0) => {
			for (let J = ae; J < _.length; J++) {
				const ce = (_[J] = te ? Rn(_[J]) : qt(_[J]));
				y(null, ce, P, M, K, W, oe, le, te);
			}
		},
		R = (_, P, M, K, W, oe, le) => {
			const te = (P.el = _.el);
			let { patchFlag: ae, dynamicChildren: J, dirs: ce } = P;
			ae |= _.patchFlag & 16;
			const me = _.props || Le,
				fe = P.props || Le;
			let pe;
			if (
				(M && Kn(M, !1),
				(pe = fe.onVnodeBeforeUpdate) && Ut(pe, M, P, _),
				ce && Yn(P, _, M, 'beforeUpdate'),
				M && Kn(M, !0),
				J
					? I(_.dynamicChildren, J, te, M, K, cl(P, W), oe)
					: le || Y(_, P, te, null, M, K, cl(P, W), oe, !1),
				ae > 0)
			) {
				if (ae & 16) k(te, P, me, fe, M, K, W);
				else if (
					(ae & 2 && me.class !== fe.class && i(te, 'class', null, fe.class, W),
					ae & 4 && i(te, 'style', me.style, fe.style, W),
					ae & 8)
				) {
					const Ee = P.dynamicProps;
					for (let Be = 0; Be < Ee.length; Be++) {
						const Ne = Ee[Be],
							Ze = me[Ne],
							$t = fe[Ne];
						($t !== Ze || Ne === 'value') &&
							i(te, Ne, Ze, $t, W, _.children, M, K, ue);
					}
				}
				ae & 1 && _.children !== P.children && u(te, P.children);
			} else !le && J == null && k(te, P, me, fe, M, K, W);
			((pe = fe.onVnodeUpdated) || ce) &&
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
							? h(ae.el)
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
			let { patchFlag: me, dynamicChildren: fe, slotScopeIds: pe } = P;
			pe && (te = te ? te.concat(pe) : pe),
				_ == null
					? (o(J, M, K),
						o(ce, M, K),
						S(P.children || [], M, ce, W, oe, le, te, ae))
					: me > 0 && me & 64 && fe && _.dynamicChildren
						? (I(_.dynamicChildren, fe, M, W, oe, le, te),
							(P.key != null || (W && P === W.subTree)) && Br(_, P, !0))
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
			const te = (_.component = im(_, K, W));
			if ((Li(_) && (te.ctx.renderer = Q), lm(te), te.asyncDep)) {
				if ((W && W.registerDep(te, O), !_.el)) {
					const ae = (te.subTree = d(pt));
					w(null, ae, P, M);
				}
			} else O(te, _, P, M, W, oe, le);
		},
		V = (_, P, M) => {
			const K = (P.component = _.component);
			if (gg(_, P, M))
				if (K.asyncDep && !K.asyncResolved) {
					F(K, P, M);
					return;
				} else (K.next = P), sg(K.update), (K.effect.dirty = !0), K.update();
			else (P.el = _.el), (K.vnode = P);
		},
		O = (_, P, M, K, W, oe, le) => {
			const te = () => {
					if (_.isMounted) {
						let { next: ce, bu: me, u: fe, parent: pe, vnode: Ee } = _;
						{
							const co = hd(_);
							if (co) {
								ce && ((ce.el = Ee.el), F(_, ce, le)),
									co.asyncDep.then(() => {
										_.isUnmounted || te();
									});
								return;
							}
						}
						let Be = ce,
							Ne;
						Kn(_, !1),
							ce ? ((ce.el = Ee.el), F(_, ce, le)) : (ce = Ee),
							me && al(me),
							(Ne = ce.props && ce.props.onVnodeBeforeUpdate) &&
								Ut(Ne, pe, ce, Ee),
							Kn(_, !0);
						const Ze = ll(_),
							$t = _.subTree;
						(_.subTree = Ze),
							y($t, Ze, h($t.el), E($t), _, W, oe),
							(ce.el = Ze.el),
							Be === null && mg(_, Ze.el),
							fe && ht(fe, W),
							(Ne = ce.props && ce.props.onVnodeUpdated) &&
								ht(() => Ut(Ne, pe, ce, Ee), W);
					} else {
						let ce;
						const { el: me, props: fe } = P,
							{ bm: pe, m: Ee, parent: Be } = _,
							Ne = ai(P);
						if (
							(Kn(_, !1),
							pe && al(pe),
							!Ne && (ce = fe && fe.onVnodeBeforeMount) && Ut(ce, Be, P),
							Kn(_, !0),
							me && xe)
						) {
							const Ze = () => {
								(_.subTree = ll(_)), xe(me, _.subTree, _, W, null);
							};
							Ne
								? P.type.__asyncLoader().then(() => !_.isUnmounted && Ze())
								: Ze();
						} else {
							const Ze = (_.subTree = ll(_));
							y(null, Ze, M, K, _, W, oe), (P.el = Ze.el);
						}
						if ((Ee && ht(Ee, W), !Ne && (ce = fe && fe.onVnodeMounted))) {
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
				ae = (_.effect = new Sr(te, Ct, () => Ir(J), _.scope)),
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
				Hg(_, P.props, K, M),
				Ug(_, P.children, M),
				Fn(),
				ps(_),
				zn();
		},
		Y = (_, P, M, K, W, oe, le, te, ae = !1) => {
			const J = _ && _.children,
				ce = _ ? _.shapeFlag : 0,
				me = P.children,
				{ patchFlag: fe, shapeFlag: pe } = P;
			if (fe > 0) {
				if (fe & 128) {
					ve(J, me, M, K, W, oe, le, te, ae);
					return;
				} else if (fe & 256) {
					ge(J, me, M, K, W, oe, le, te, ae);
					return;
				}
			}
			pe & 8
				? (ce & 16 && ue(J, W, oe), me !== J && u(M, me))
				: ce & 16
					? pe & 16
						? ve(J, me, M, K, W, oe, le, te, ae)
						: ue(J, W, oe, !0)
					: (ce & 8 && u(M, ''), pe & 16 && S(me, M, K, W, oe, le, te, ae));
		},
		ge = (_, P, M, K, W, oe, le, te, ae) => {
			(_ = _ || _o), (P = P || _o);
			const J = _.length,
				ce = P.length,
				me = Math.min(J, ce);
			let fe;
			for (fe = 0; fe < me; fe++) {
				const pe = (P[fe] = ae ? Rn(P[fe]) : qt(P[fe]));
				y(_[fe], pe, M, null, W, oe, le, te, ae);
			}
			J > ce ? ue(_, W, oe, !0, !1, me) : S(P, M, K, W, oe, le, te, ae, me);
		},
		ve = (_, P, M, K, W, oe, le, te, ae) => {
			let J = 0;
			const ce = P.length;
			let me = _.length - 1,
				fe = ce - 1;
			for (; J <= me && J <= fe; ) {
				const pe = _[J],
					Ee = (P[J] = ae ? Rn(P[J]) : qt(P[J]));
				if (Qn(pe, Ee)) y(pe, Ee, M, null, W, oe, le, te, ae);
				else break;
				J++;
			}
			for (; J <= me && J <= fe; ) {
				const pe = _[me],
					Ee = (P[fe] = ae ? Rn(P[fe]) : qt(P[fe]));
				if (Qn(pe, Ee)) y(pe, Ee, M, null, W, oe, le, te, ae);
				else break;
				me--, fe--;
			}
			if (J > me) {
				if (J <= fe) {
					const pe = fe + 1,
						Ee = pe < ce ? P[pe].el : K;
					for (; J <= fe; )
						y(
							null,
							(P[J] = ae ? Rn(P[J]) : qt(P[J])),
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
			} else if (J > fe) for (; J <= me; ) se(_[J], W, oe, !0), J++;
			else {
				const pe = J,
					Ee = J,
					Be = new Map();
				for (J = Ee; J <= fe; J++) {
					const bt = (P[J] = ae ? Rn(P[J]) : qt(P[J]));
					bt.key != null && Be.set(bt.key, J);
				}
				let Ne,
					Ze = 0;
				const $t = fe - Ee + 1;
				let co = !1,
					ss = 0;
				const jo = new Array($t);
				for (J = 0; J < $t; J++) jo[J] = 0;
				for (J = pe; J <= me; J++) {
					const bt = _[J];
					if (Ze >= $t) {
						se(bt, W, oe, !0);
						continue;
					}
					let Wt;
					if (bt.key != null) Wt = Be.get(bt.key);
					else
						for (Ne = Ee; Ne <= fe; Ne++)
							if (jo[Ne - Ee] === 0 && Qn(bt, P[Ne])) {
								Wt = Ne;
								break;
							}
					Wt === void 0
						? se(bt, W, oe, !0)
						: ((jo[Wt - Ee] = J + 1),
							Wt >= ss ? (ss = Wt) : (co = !0),
							y(bt, P[Wt], M, null, W, oe, le, te, ae),
							Ze++);
				}
				const cs = co ? Gg(jo) : _o;
				for (Ne = cs.length - 1, J = $t - 1; J >= 0; J--) {
					const bt = Ee + J,
						Wt = P[bt],
						us = bt + 1 < ce ? P[bt + 1].el : K;
					jo[J] === 0
						? y(null, Wt, M, us, W, oe, le, te, ae)
						: co && (Ne < 0 || J !== cs[Ne] ? ne(Wt, M, us, 2) : Ne--);
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
				for (let me = 0; me < ae.length; me++) ne(ae[me], P, M, K);
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
					const { leave: me, delayLeave: fe, afterLeave: pe } = te,
						Ee = () => o(oe, P, M),
						Be = () => {
							me(oe, () => {
								Ee(), pe && pe();
							});
						};
					fe ? fe(oe, Ee, Be) : Be();
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
				patchFlag: me,
				dirs: fe,
			} = _;
			if ((te != null && Kl(te, null, M, _, !0), ce & 256)) {
				P.ctx.deactivate(_);
				return;
			}
			const pe = ce & 1 && fe,
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
						: J && (oe !== Je || (me > 0 && me & 64))
							? ue(J, P, M, !1, !0)
							: ((oe === Je && me & 384) || (!W && ce & 16)) && ue(ae, P, M),
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
			for (; _ !== P; ) (M = f(_)), a(_), (_ = M);
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
					: f(_.anchor || _.el);
	let H = !1;
	const N = (_, P, M) => {
			_ == null
				? P._vnode && se(P._vnode, null, null, !0)
				: y(P._vnode || null, _, P, null, null, null, M),
				H || ((H = !0), ps(), Uu(), (H = !1)),
				(P._vnode = _);
		},
		Q = { p: y, um: se, m: ne, r: be, mt: X, mc: S, pc: Y, pbc: I, n: E, o: e };
	let de, xe;
	return { render: N, hydrate: de, createApp: Fg(N, de) };
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
function qg(e, t) {
	return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Br(e, t, n = !1) {
	const o = e.children,
		a = t.children;
	if (ye(o) && ye(a))
		for (let i = 0; i < o.length; i++) {
			const l = o[i];
			let s = a[i];
			s.shapeFlag & 1 &&
				!s.dynamicChildren &&
				((s.patchFlag <= 0 || s.patchFlag === 32) &&
					((s = a[i] = Rn(a[i])), (s.el = l.el)),
				n || Br(l, s)),
				s.type === ka && (s.el = l.el);
		}
}
function Gg(e) {
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
function hd(e) {
	const t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : hd(t);
}
const Xg = e => e.__isTeleport,
	la = e => e && (e.disabled || e.disabled === ''),
	Rs = e => typeof SVGElement < 'u' && e instanceof SVGElement,
	As = e => typeof MathMLElement == 'function' && e instanceof MathMLElement,
	ql = (e, t) => {
		const n = e && e.to;
		return je(n) ? (t ? t(n) : null) : n;
	},
	Zg = {
		name: 'Teleport',
		__isTeleport: !0,
		process(e, t, n, o, a, i, l, s, r, c) {
			const {
					mc: u,
					pc: h,
					pbc: f,
					o: { insert: g, querySelector: m, createText: y, createComment: v },
				} = c,
				w = la(t.props);
			let { shapeFlag: b, children: C, dynamicChildren: p } = t;
			if (e == null) {
				const x = (t.el = y('')),
					T = (t.anchor = y(''));
				g(x, n, o), g(T, n, o);
				const A = (t.target = ql(t.props, m)),
					S = (t.targetAnchor = y(''));
				A &&
					(g(S, A),
					l === 'svg' || Rs(A)
						? (l = 'svg')
						: (l === 'mathml' || As(A)) && (l = 'mathml'));
				const R = (I, k) => {
					b & 16 && u(C, I, k, a, i, l, s, r);
				};
				w ? R(n, T) : A && R(A, S);
			} else {
				t.el = e.el;
				const x = (t.anchor = e.anchor),
					T = (t.target = e.target),
					A = (t.targetAnchor = e.targetAnchor),
					S = la(e.props),
					R = S ? n : T,
					I = S ? x : A;
				if (
					(l === 'svg' || Rs(T)
						? (l = 'svg')
						: (l === 'mathml' || As(T)) && (l = 'mathml'),
					p
						? (f(e.dynamicChildren, p, R, a, i, l, s), Br(e, t, !0))
						: r || h(e, t, R, I, a, i, l, s, !1),
					w)
				)
					S
						? t.props &&
							e.props &&
							t.props.to !== e.props.to &&
							(t.props.to = e.props.to)
						: La(t, n, x, c, 1);
				else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
					const k = (t.target = ql(t.props, m));
					k && La(t, k, null, c, 0);
				} else S && La(t, T, A, c, 1);
			}
			gd(t);
		},
		remove(e, t, n, o, { um: a, o: { remove: i } }, l) {
			const {
				shapeFlag: s,
				children: r,
				anchor: c,
				targetAnchor: u,
				target: h,
				props: f,
			} = e;
			if ((h && i(u), l && i(c), s & 16)) {
				const g = l || !la(f);
				for (let m = 0; m < r.length; m++) {
					const y = r[m];
					a(y, t, n, g, !!y.dynamicChildren);
				}
			}
		},
		move: La,
		hydrate: Jg,
	};
function La(e, t, n, { o: { insert: o }, m: a }, i = 2) {
	i === 0 && o(e.targetAnchor, t, n);
	const { el: l, anchor: s, shapeFlag: r, children: c, props: u } = e,
		h = i === 2;
	if ((h && o(l, t, n), (!h || la(u)) && r & 16))
		for (let f = 0; f < c.length; f++) a(c[f], t, n, 2);
	h && o(s, t, n);
}
function Jg(
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
		const h = u._lpa || u.firstChild;
		if (t.shapeFlag & 16)
			if (la(t.props))
				(t.anchor = c(l(e), t, s(e), n, o, a, i)), (t.targetAnchor = h);
			else {
				t.anchor = l(e);
				let f = h;
				for (; f; )
					if (
						((f = l(f)), f && f.nodeType === 8 && f.data === 'teleport anchor')
					) {
						(t.targetAnchor = f),
							(u._lpa = t.targetAnchor && l(t.targetAnchor));
						break;
					}
				c(h, t, u, n, o, a, i);
			}
		gd(t);
	}
	return t.anchor && l(t.anchor);
}
const Lo = Zg;
function gd(e) {
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
function Qg() {
	ra.pop(), (Bt = ra[ra.length - 1] || null);
}
let ya = 1;
function Os(e) {
	ya += e;
}
function md(e) {
	return (
		(e.dynamicChildren = ya > 0 ? Bt || _o : null),
		Qg(),
		ya > 0 && Bt && Bt.push(e),
		e
	);
}
function Gl(e, t, n, o, a, i) {
	return md(bi(e, t, n, o, a, i, !0));
}
function vd(e, t, n, o, a) {
	return md(d(e, t, n, o, a, !0));
}
function vi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Qn(e, t) {
	return e.type === t.type && e.key === t.key;
}
const bd = ({ key: e }) => e ?? null,
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
		key: t && bd(t),
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
			? (Dr(r, n), i & 128 && e.normalize(r))
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
const d = em;
function em(e, t = null, n = null, o = 0, a = null, i = !1) {
	if (((!e || e === bg) && (e = pt), vi(e))) {
		const s = Vn(e, t, !0);
		return (
			n && Dr(s, n),
			ya > 0 &&
				!i &&
				Bt &&
				(s.shapeFlag & 6 ? (Bt[Bt.indexOf(e)] = s) : Bt.push(s)),
			(s.patchFlag |= -2),
			s
		);
	}
	if ((dm(e) && (e = e.__vccOpts), t)) {
		t = tm(t);
		let { class: s, style: r } = t;
		s && !je(s) && (t.class = Ai(s)),
			ze(r) && (Vu(r) && !ye(r) && (r = qe({}, r)), (t.style = _a(r)));
	}
	const l = je(e) ? 1 : pg(e) ? 128 : Xg(e) ? 64 : ze(e) ? 4 : Se(e) ? 2 : 0;
	return bi(e, t, n, o, a, l, i, !0);
}
function tm(e) {
	return e ? (Vu(e) || rd(e) ? qe({}, e) : e) : null;
}
function Vn(e, t, n = !1) {
	const { props: o, ref: a, patchFlag: i, children: l } = e,
		s = t ? _e(o || {}, t) : o;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: s,
		key: s && bd(s),
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
function to(e = ' ', t = 0) {
	return d(ka, null, e, t);
}
function M_(e, t) {
	const n = d(ii, null, e);
	return (n.staticCount = t), n;
}
function nm(e = '', t = !1) {
	return t ? (ba(), vd(pt, null, e)) : d(pt, null, e);
}
function qt(e) {
	return e == null || typeof e == 'boolean'
		? d(pt)
		: ye(e)
			? d(Je, null, e.slice())
			: typeof e == 'object'
				? Rn(e)
				: d(ka, null, String(e));
}
function Rn(e) {
	return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Vn(e);
}
function Dr(e, t) {
	let n = 0;
	const { shapeFlag: o } = e;
	if (t == null) t = null;
	else if (ye(t)) n = 16;
	else if (typeof t == 'object')
		if (o & 65) {
			const a = t.default;
			a && (a._c && (a._d = !1), Dr(e, a()), a._c && (a._d = !0));
			return;
		} else {
			n = 32;
			const a = t._;
			!a && !rd(t)
				? (t._ctx = dt)
				: a === 3 &&
					dt &&
					(dt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
		}
	else
		Se(t)
			? ((t = { default: t, _ctx: dt }), (n = 32))
			: ((t = String(t)), o & 64 ? ((n = 16), (t = [to(t)])) : (n = 8));
	(e.children = t), (e.shapeFlag |= n);
}
function _e(...e) {
	const t = {};
	for (let n = 0; n < e.length; n++) {
		const o = e[n];
		for (const a in o)
			if (a === 'class')
				t.class !== o.class && (t.class = Ai([t.class, o.class]));
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
	Tt(e, t, 7, [n, o]);
}
const om = ad();
let am = 0;
function im(e, t, n) {
	const o = e.type,
		a = (t ? t.appContext : e.appContext) || om,
		i = {
			uid: am++,
			vnode: e,
			type: o,
			parent: t,
			appContext: a,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new Oh(!0),
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
			propsOptions: cd(o, a),
			emitsOptions: Ku(o, a),
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
		(i.emit = dg.bind(null, i)),
		e.ce && e.ce(i),
		i
	);
}
let tt = null;
const Nt = () => tt || dt;
let yi, Xl;
{
	const e = Su(),
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
	Bs = () => {
		tt && tt.scope.off(), yi(null);
	};
function yd(e) {
	return e.vnode.shapeFlag & 4;
}
let Ni = !1;
function lm(e, t = !1) {
	t && Xl(t);
	const { props: n, children: o } = e.vnode,
		a = yd(e);
	zg(e, n, a, t), Wg(e, o);
	const i = a ? rm(e, t) : void 0;
	return t && Xl(!1), i;
}
function rm(e, t) {
	const n = e.type;
	(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Og));
	const { setup: o } = n;
	if (o) {
		const a = (e.setupContext = o.length > 1 ? cm(e) : null),
			i = Ea(e);
		Fn();
		const l = Mn(o, e, 0, [e.props, a]);
		if ((zn(), i(), yu(l))) {
			if ((l.then(Bs, Bs), t))
				return l
					.then(s => {
						Ds(e, s, t);
					})
					.catch(s => {
						Bi(s, e, 0);
					});
			e.asyncDep = l;
		} else Ds(e, l, t);
	} else pd(e, t);
}
function Ds(e, t, n) {
	Se(t)
		? e.type.__ssrInlineRender
			? (e.ssrRender = t)
			: (e.render = t)
		: ze(t) && (e.setupState = Hu(t)),
		pd(e, n);
}
let Ms;
function pd(e, t, n) {
	const o = e.type;
	if (!e.render) {
		if (!t && Ms && !o.render) {
			const a = o.template || Ar(e).template;
			if (a) {
				const { isCustomElement: i, compilerOptions: l } = e.appContext.config,
					{ delimiters: s, compilerOptions: r } = o,
					c = qe(qe({ isCustomElement: i, delimiters: s }, l), r);
				o.render = Ms(a, c);
			}
		}
		e.render = o.render || Ct;
	}
	{
		const a = Ea(e);
		Fn();
		try {
			Bg(e);
		} finally {
			zn(), a();
		}
	}
}
const sm = {
	get(e, t) {
		return mt(e, 'get', ''), e[t];
	},
};
function cm(e) {
	const t = n => {
		e.exposed = n || {};
	};
	return {
		attrs: new Proxy(e.attrs, sm),
		slots: e.slots,
		emit: e.emit,
		expose: t,
	};
}
function Fi(e) {
	if (e.exposed)
		return (
			e.exposeProxy ||
			(e.exposeProxy = new Proxy(Hu(tg(e.exposed)), {
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
function um(e, t = !0) {
	return Se(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function dm(e) {
	return Se(e) && '__vccOpts' in e;
}
const L = (e, t) => ng(e, t, Ni);
function Mr(e, t, n) {
	const o = arguments.length;
	return o === 2
		? ze(t) && !ye(t)
			? vi(t)
				? d(e, null, [t])
				: d(e, t)
			: d(e, null, t)
		: (o > 3
				? (n = Array.prototype.slice.call(arguments, 2))
				: o === 3 && vi(n) && (n = [n]),
			d(e, t, n));
}
const fm = '3.4.25';
/**
 * @vue/runtime-dom v3.4.25
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const hm = 'http://www.w3.org/2000/svg',
	gm = 'http://www.w3.org/1998/Math/MathML',
	An = typeof document < 'u' ? document : null,
	Ls = An && An.createElement('template'),
	mm = {
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
					? An.createElementNS(hm, e)
					: t === 'mathml'
						? An.createElementNS(gm, e)
						: An.createElement(e, n ? { is: n } : void 0);
			return (
				e === 'select' &&
					o &&
					o.multiple != null &&
					a.setAttribute('multiple', o.multiple),
				a
			);
		},
		createText: e => An.createTextNode(e),
		createComment: e => An.createComment(e),
		setText: (e, t) => {
			e.nodeValue = t;
		},
		setElementText: (e, t) => {
			e.textContent = t;
		},
		parentNode: e => e.parentNode,
		nextSibling: e => e.nextSibling,
		querySelector: e => An.querySelector(e),
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
				Ls.innerHTML =
					o === 'svg'
						? `<svg>${e}</svg>`
						: o === 'mathml'
							? `<math>${e}</math>`
							: e;
				const s = Ls.content;
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
	Vo = (e, { slots: t }) => Mr(kg, vm(e), t);
Vo.displayName = 'Transition';
const wd = {
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
Vo.props = qe({}, Zu, wd);
const qn = (e, t = []) => {
		ye(e) ? e.forEach(n => n(...t)) : e && e(...t);
	},
	Vs = e => (e ? (ye(e) ? e.some(t => t.length > 1) : e.length > 1) : !1);
function vm(e) {
	const t = {};
	for (const $ in e) $ in wd || (t[$] = e[$]);
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
			leaveFromClass: h = `${n}-leave-from`,
			leaveActiveClass: f = `${n}-leave-active`,
			leaveToClass: g = `${n}-leave-to`,
		} = e,
		m = bm(a),
		y = m && m[0],
		v = m && m[1],
		{
			onBeforeEnter: w,
			onEnter: b,
			onEnterCancelled: C,
			onLeave: p,
			onLeaveCancelled: x,
			onBeforeAppear: T = w,
			onAppear: A = b,
			onAppearCancelled: S = C,
		} = t,
		R = ($, B, X) => {
			Gn($, B ? u : s), Gn($, B ? c : l), X && X();
		},
		I = ($, B) => {
			($._isLeaving = !1), Gn($, h), Gn($, g), Gn($, f), B && B();
		},
		k = $ => (B, X) => {
			const V = $ ? A : b,
				O = () => R(B, $, X);
			qn(V, [B, O]),
				Ns(() => {
					Gn(B, $ ? r : i), Sn(B, $ ? u : s), Vs(V) || Fs(B, o, y, O);
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
			Sn($, h),
				Sn($, f),
				wm(),
				Ns(() => {
					$._isLeaving && (Gn($, h), Sn($, g), Vs(p) || Fs($, o, v, X));
				}),
				qn(p, [$, X]);
		},
		onEnterCancelled($) {
			R($, !1), qn(C, [$]);
		},
		onAppearCancelled($) {
			R($, !0), qn(S, [$]);
		},
		onLeaveCancelled($) {
			I($), qn(x, [$]);
		},
	});
}
function bm(e) {
	if (e == null) return null;
	if (ze(e)) return [ul(e.enter), ul(e.leave)];
	{
		const t = ul(e);
		return [t, t];
	}
}
function ul(e) {
	return Th(e);
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
function Ns(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
let ym = 0;
function Fs(e, t, n, o) {
	const a = (e._endId = ++ym),
		i = () => {
			a === e._endId && o();
		};
	if (n) return setTimeout(i, n);
	const { type: l, timeout: s, propCount: r } = pm(e, t);
	if (!l) return o();
	const c = l + 'end';
	let u = 0;
	const h = () => {
			e.removeEventListener(c, f), i();
		},
		f = g => {
			g.target === e && ++u >= r && h();
		};
	setTimeout(() => {
		u < r && h();
	}, s + 1),
		e.addEventListener(c, f);
}
function pm(e, t) {
	const n = window.getComputedStyle(e),
		o = m => (n[m] || '').split(', '),
		a = o(`${xn}Delay`),
		i = o(`${xn}Duration`),
		l = zs(a, i),
		s = o(`${Wo}Delay`),
		r = o(`${Wo}Duration`),
		c = zs(s, r);
	let u = null,
		h = 0,
		f = 0;
	t === xn
		? l > 0 && ((u = xn), (h = l), (f = i.length))
		: t === Wo
			? c > 0 && ((u = Wo), (h = c), (f = r.length))
			: ((h = Math.max(l, c)),
				(u = h > 0 ? (l > c ? xn : Wo) : null),
				(f = u ? (u === xn ? i.length : r.length) : 0));
	const g =
		u === xn && /\b(transform|all)(,|$)/.test(o(`${xn}Property`).toString());
	return { type: u, timeout: h, propCount: f, hasTransform: g };
}
function zs(e, t) {
	for (; e.length < t.length; ) e = e.concat(e);
	return Math.max(...t.map((n, o) => Hs(n) + Hs(e[o])));
}
function Hs(e) {
	return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3;
}
function wm() {
	return document.body.offsetHeight;
}
function xm(e, t, n) {
	const o = e[pa];
	o && (t = (t ? [t, ...o] : [...o]).join(' ')),
		t == null
			? e.removeAttribute('class')
			: n
				? e.setAttribute('class', t)
				: (e.className = t);
}
const pi = Symbol('_vod'),
	xd = Symbol('_vsh'),
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
	(e.style.display = t ? e[pi] : 'none'), (e[xd] = !t);
}
const Sm = Symbol(''),
	Cm = /(^|;)\s*display\s*:/;
function Tm(e, t, n) {
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
			const l = o[Sm];
			l && (n += ';' + l), (o.cssText = n), (i = Cm.test(n));
		}
	} else t && e.removeAttribute('style');
	pi in e && ((e[pi] = i ? o.display : ''), e[xd] && (o.display = 'none'));
}
const js = /\s*!important$/;
function ri(e, t, n) {
	if (ye(n)) n.forEach(o => ri(e, t, o));
	else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n);
	else {
		const o = _m(e, t);
		js.test(n)
			? e.setProperty(Nn(o), n.replace(js, ''), 'important')
			: (e[o] = n);
	}
}
const Ws = ['Webkit', 'Moz', 'ms'],
	dl = {};
function _m(e, t) {
	const n = dl[t];
	if (n) return n;
	let o = Zt(t);
	if (o !== 'filter' && o in e) return (dl[t] = o);
	o = Ri(o);
	for (let a = 0; a < Ws.length; a++) {
		const i = Ws[a] + o;
		if (i in e) return (dl[t] = i);
	}
	return t;
}
const Us = 'http://www.w3.org/1999/xlink';
function km(e, t, n, o, a) {
	if (o && t.startsWith('xlink:'))
		n == null
			? e.removeAttributeNS(Us, t.slice(6, t.length))
			: e.setAttributeNS(Us, t, n);
	else {
		const i = Rh(t);
		n == null || (i && !Cu(n))
			? e.removeAttribute(t)
			: e.setAttribute(t, i ? '' : n);
	}
}
function Em(e, t, n, o, a, i, l) {
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
			? (n = Cu(n))
			: n == null && c === 'string'
				? ((n = ''), (r = !0))
				: c === 'number' && ((n = 0), (r = !0));
	}
	try {
		e[t] = n;
	} catch {}
	r && e.removeAttribute(t);
}
function $m(e, t, n, o) {
	e.addEventListener(t, n, o);
}
function Pm(e, t, n, o) {
	e.removeEventListener(t, n, o);
}
const Ys = Symbol('_vei');
function Im(e, t, n, o, a = null) {
	const i = e[Ys] || (e[Ys] = {}),
		l = i[t];
	if (o && l) l.value = o;
	else {
		const [s, r] = Rm(t);
		if (o) {
			const c = (i[t] = Bm(o, a));
			$m(e, s, c, r);
		} else l && (Pm(e, s, l, r), (i[t] = void 0));
	}
}
const Ks = /(?:Once|Passive|Capture)$/;
function Rm(e) {
	let t;
	if (Ks.test(e)) {
		t = {};
		let o;
		for (; (o = e.match(Ks)); )
			(e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
	}
	return [e[2] === ':' ? e.slice(3) : Nn(e.slice(2)), t];
}
let fl = 0;
const Am = Promise.resolve(),
	Om = () => fl || (Am.then(() => (fl = 0)), (fl = Date.now()));
function Bm(e, t) {
	const n = o => {
		if (!o._vts) o._vts = Date.now();
		else if (o._vts <= n.attached) return;
		Tt(Dm(o, n.value), t, 5, [o]);
	};
	return (n.value = e), (n.attached = Om()), n;
}
function Dm(e, t) {
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
const qs = e =>
		e.charCodeAt(0) === 111 &&
		e.charCodeAt(1) === 110 &&
		e.charCodeAt(2) > 96 &&
		e.charCodeAt(2) < 123,
	Mm = (e, t, n, o, a, i, l, s, r) => {
		const c = a === 'svg';
		t === 'class'
			? xm(e, o, c)
			: t === 'style'
				? Tm(e, n, o)
				: $i(t)
					? pr(t) || Im(e, t, n, o, l)
					: (
								t[0] === '.'
									? ((t = t.slice(1)), !0)
									: t[0] === '^'
										? ((t = t.slice(1)), !1)
										: Lm(e, t, o, c)
						  )
						? Em(e, t, o, i, l, s, r)
						: (t === 'true-value'
								? (e._trueValue = o)
								: t === 'false-value' && (e._falseValue = o),
							km(e, t, o, c));
	};
function Lm(e, t, n, o) {
	if (o)
		return !!(
			t === 'innerHTML' ||
			t === 'textContent' ||
			(t in e && qs(t) && Se(n))
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
	return qs(t) && je(n) ? !1 : t in e;
}
const Vm = {
		esc: 'escape',
		space: ' ',
		up: 'arrow-up',
		left: 'arrow-left',
		right: 'arrow-right',
		down: 'arrow-down',
		delete: 'backspace',
	},
	Nm = (e, t) => {
		const n = e._withKeys || (e._withKeys = {}),
			o = t.join('.');
		return (
			n[o] ||
			(n[o] = a => {
				if (!('key' in a)) return;
				const i = Nn(a.key);
				if (t.some(l => l === i || Vm[l] === i)) return e(a);
			})
		);
	},
	Fm = qe({ patchProp: Mm }, mm);
let Gs;
function zm() {
	return Gs || (Gs = Yg(Fm));
}
const Sd = (...e) => {
	const t = zm().createApp(...e),
		{ mount: n } = t;
	return (
		(t.mount = o => {
			const a = jm(o);
			if (!a) return;
			const i = t._component;
			!Se(i) && !i.render && !i.template && (i.template = a.innerHTML),
				(a.innerHTML = '');
			const l = n(a, !1, Hm(a));
			return (
				a instanceof Element &&
					(a.removeAttribute('v-cloak'), a.setAttribute('data-v-app', '')),
				l
			);
		}),
		t
	);
};
function Hm(e) {
	if (e instanceof SVGElement) return 'svg';
	if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
		return 'mathml';
}
function jm(e) {
	return je(e) ? document.querySelector(e) : e;
}
const Wm = { name: 'App' },
	Lr = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [o, a] of t) n[o] = a;
		return n;
	};
function Um(e, t, n, o, a, i) {
	const l = gi('RouterView'),
		s = gi('van-config-provider');
	return ba(), vd(s, { theme: 'light' }, { default: hi(() => [d(l)]), _: 1 });
}
const Ym = Lr(Wm, [
	['render', Um],
	['__scopeId', 'data-v-669f4a6b'],
]);
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Co = typeof document < 'u';
function Km(e) {
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
	Cd = /#/g,
	qm = /&/g,
	Gm = /\//g,
	Xm = /=/g,
	Zm = /\?/g,
	Td = /\+/g,
	Jm = /%5B/g,
	Qm = /%5D/g,
	_d = /%5E/g,
	ev = /%60/g,
	kd = /%7B/g,
	tv = /%7C/g,
	Ed = /%7D/g,
	nv = /%20/g;
function Vr(e) {
	return encodeURI('' + e)
		.replace(tv, '|')
		.replace(Jm, '[')
		.replace(Qm, ']');
}
function ov(e) {
	return Vr(e).replace(kd, '{').replace(Ed, '}').replace(_d, '^');
}
function Zl(e) {
	return Vr(e)
		.replace(Td, '%2B')
		.replace(nv, '+')
		.replace(Cd, '%23')
		.replace(qm, '%26')
		.replace(ev, '`')
		.replace(kd, '{')
		.replace(Ed, '}')
		.replace(_d, '^');
}
function av(e) {
	return Zl(e).replace(Xm, '%3D');
}
function iv(e) {
	return Vr(e).replace(Cd, '%23').replace(Zm, '%3F');
}
function lv(e) {
	return e == null ? '' : iv(e).replace(Gm, '%2F');
}
function wa(e) {
	try {
		return decodeURIComponent('' + e);
	} catch {}
	return '' + e;
}
const rv = /\/$/,
	sv = e => e.replace(rv, '');
function gl(e, t, n = '/') {
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
		(o = fv(o ?? t, n)),
		{ fullPath: o + (i && '?') + i + l, path: o, query: a, hash: wa(l) }
	);
}
function cv(e, t) {
	const n = t.query ? e(t.query) : '';
	return t.path + (n && '?') + n + (t.hash || '');
}
function Xs(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase())
		? e
		: e.slice(t.length) || '/';
}
function uv(e, t, n) {
	const o = t.matched.length - 1,
		a = n.matched.length - 1;
	return (
		o > -1 &&
		o === a &&
		Ro(t.matched[o], n.matched[a]) &&
		$d(t.params, n.params) &&
		e(t.query) === e(n.query) &&
		t.hash === n.hash
	);
}
function Ro(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function $d(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (const n in e) if (!dv(e[n], t[n])) return !1;
	return !0;
}
function dv(e, t) {
	return Vt(e) ? Zs(e, t) : Vt(t) ? Zs(t, e) : e === t;
}
function Zs(e, t) {
	return Vt(t)
		? e.length === t.length && e.every((n, o) => n === t[o])
		: e.length === 1 && e[0] === t;
}
function fv(e, t) {
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
function hv(e) {
	if (!e)
		if (Co) {
			const t = document.querySelector('base');
			(e = (t && t.getAttribute('href')) || '/'),
				(e = e.replace(/^\w+:\/\/[^\/]+/, ''));
		} else e = '/';
	return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), sv(e);
}
const gv = /^[^#]+#/;
function mv(e, t) {
	return e.replace(gv, '#') + t;
}
function vv(e, t) {
	const n = document.documentElement.getBoundingClientRect(),
		o = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: o.left - n.left - (t.left || 0),
		top: o.top - n.top - (t.top || 0),
	};
}
const zi = () => ({ left: window.scrollX, top: window.scrollY });
function bv(e) {
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
		t = vv(a, e);
	} else t = e;
	'scrollBehavior' in document.documentElement.style
		? window.scrollTo(t)
		: window.scrollTo(
				t.left != null ? t.left : window.scrollX,
				t.top != null ? t.top : window.scrollY,
			);
}
function Js(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
const Jl = new Map();
function yv(e, t) {
	Jl.set(e, t);
}
function pv(e) {
	const t = Jl.get(e);
	return Jl.delete(e), t;
}
let wv = () => location.protocol + '//' + location.host;
function Pd(e, t) {
	const { pathname: n, search: o, hash: a } = t,
		i = e.indexOf('#');
	if (i > -1) {
		let s = a.includes(e.slice(i)) ? e.slice(i).length : 1,
			r = a.slice(s);
		return r[0] !== '/' && (r = '/' + r), Xs(r, '');
	}
	return Xs(n, e) + o + a;
}
function xv(e, t, n, o) {
	let a = [],
		i = [],
		l = null;
	const s = ({ state: f }) => {
		const g = Pd(e, location),
			m = n.value,
			y = t.value;
		let v = 0;
		if (f) {
			if (((n.value = g), (t.value = f), l && l === m)) {
				l = null;
				return;
			}
			v = y ? f.position - y.position : 0;
		} else o(g);
		a.forEach(w => {
			w(n.value, m, {
				delta: v,
				type: xa.pop,
				direction: v ? (v > 0 ? ca.forward : ca.back) : ca.unknown,
			});
		});
	};
	function r() {
		l = n.value;
	}
	function c(f) {
		a.push(f);
		const g = () => {
			const m = a.indexOf(f);
			m > -1 && a.splice(m, 1);
		};
		return i.push(g), g;
	}
	function u() {
		const { history: f } = window;
		f.state && f.replaceState(Oe({}, f.state, { scroll: zi() }), '');
	}
	function h() {
		for (const f of i) f();
		(i = []),
			window.removeEventListener('popstate', s),
			window.removeEventListener('beforeunload', u);
	}
	return (
		window.addEventListener('popstate', s),
		window.addEventListener('beforeunload', u, { passive: !0 }),
		{ pauseListeners: r, listen: c, destroy: h }
	);
}
function Qs(e, t, n, o = !1, a = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: o,
		position: window.history.length,
		scroll: a ? zi() : null,
	};
}
function Sv(e) {
	const { history: t, location: n } = window,
		o = { value: Pd(e, n) },
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
		const h = e.indexOf('#'),
			f =
				h > -1
					? (n.host && document.querySelector('base') ? e : e.slice(h)) + r
					: wv() + e + r;
		try {
			t[u ? 'replaceState' : 'pushState'](c, '', f), (a.value = c);
		} catch (g) {
			console.error(g), n[u ? 'replace' : 'assign'](f);
		}
	}
	function l(r, c) {
		const u = Oe({}, t.state, Qs(a.value.back, r, a.value.forward, !0), c, {
			position: a.value.position,
		});
		i(r, u, !0), (o.value = r);
	}
	function s(r, c) {
		const u = Oe({}, a.value, t.state, { forward: r, scroll: zi() });
		i(u.current, u, !0);
		const h = Oe({}, Qs(o.value, r, null), { position: u.position + 1 }, c);
		i(r, h, !1), (o.value = r);
	}
	return { location: o, state: a, push: s, replace: l };
}
function Cv(e) {
	e = hv(e);
	const t = Sv(e),
		n = xv(e, t.state, t.location, t.replace);
	function o(i, l = !0) {
		l || n.pauseListeners(), history.go(i);
	}
	const a = Oe(
		{ location: '', base: e, go: o, createHref: mv.bind(null, e) },
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
function Tv(e) {
	return typeof e == 'string' || (e && typeof e == 'object');
}
function Id(e) {
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
	Rd = Symbol('');
var ec;
(function (e) {
	(e[(e.aborted = 4)] = 'aborted'),
		(e[(e.cancelled = 8)] = 'cancelled'),
		(e[(e.duplicated = 16)] = 'duplicated');
})(ec || (ec = {}));
function Ao(e, t) {
	return Oe(new Error(), { type: e, [Rd]: !0 }, t);
}
function tn(e, t) {
	return e instanceof Error && Rd in e && (t == null || !!(e.type & t));
}
const tc = '[^/]+?',
	_v = { sensitive: !1, strict: !1, start: !0, end: !0 },
	kv = /[.+*?^${}()[\]/\\]/g;
function Ev(e, t) {
	const n = Oe({}, _v, t),
		o = [];
	let a = n.start ? '^' : '';
	const i = [];
	for (const c of e) {
		const u = c.length ? [] : [90];
		n.strict && !c.length && (a += '/');
		for (let h = 0; h < c.length; h++) {
			const f = c[h];
			let g = 40 + (n.sensitive ? 0.25 : 0);
			if (f.type === 0)
				h || (a += '/'), (a += f.value.replace(kv, '\\$&')), (g += 40);
			else if (f.type === 1) {
				const { value: m, repeatable: y, optional: v, regexp: w } = f;
				i.push({ name: m, repeatable: y, optional: v });
				const b = w || tc;
				if (b !== tc) {
					g += 10;
					try {
						new RegExp(`(${b})`);
					} catch (p) {
						throw new Error(
							`Invalid custom RegExp for param "${m}" (${b}): ` + p.message,
						);
					}
				}
				let C = y ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
				h || (C = v && c.length < 2 ? `(?:/${C})` : '/' + C),
					v && (C += '?'),
					(a += C),
					(g += 20),
					v && (g += -8),
					y && (g += -20),
					b === '.*' && (g += -50);
			}
			u.push(g);
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
			h = {};
		if (!u) return null;
		for (let f = 1; f < u.length; f++) {
			const g = u[f] || '',
				m = i[f - 1];
			h[m.name] = g && m.repeatable ? g.split('/') : g;
		}
		return h;
	}
	function r(c) {
		let u = '',
			h = !1;
		for (const f of e) {
			(!h || !u.endsWith('/')) && (u += '/'), (h = !1);
			for (const g of f)
				if (g.type === 0) u += g.value;
				else if (g.type === 1) {
					const { value: m, repeatable: y, optional: v } = g,
						w = m in c ? c[m] : '';
					if (Vt(w) && !y)
						throw new Error(
							`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`,
						);
					const b = Vt(w) ? w.join('/') : w;
					if (!b)
						if (v)
							f.length < 2 &&
								(u.endsWith('/') ? (u = u.slice(0, -1)) : (h = !0));
						else throw new Error(`Missing required param "${m}"`);
					u += b;
				}
		}
		return u || '/';
	}
	return { re: l, score: o, keys: i, parse: s, stringify: r };
}
function $v(e, t) {
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
function Pv(e, t) {
	let n = 0;
	const o = e.score,
		a = t.score;
	for (; n < o.length && n < a.length; ) {
		const i = $v(o[n], a[n]);
		if (i) return i;
		n++;
	}
	if (Math.abs(a.length - o.length) === 1) {
		if (nc(o)) return 1;
		if (nc(a)) return -1;
	}
	return a.length - o.length;
}
function nc(e) {
	const t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
const Iv = { type: 0, value: '' },
	Rv = /[a-zA-Z0-9_]/;
function Av(e) {
	if (!e) return [[]];
	if (e === '/') return [[Iv]];
	if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
	function t(g) {
		throw new Error(`ERR (${n})/"${c}": ${g}`);
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
	function h() {
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
				r === '/' ? (c && h(), l()) : r === ':' ? (h(), (n = 1)) : f();
				break;
			case 4:
				f(), (n = o);
				break;
			case 1:
				r === '('
					? (n = 2)
					: Rv.test(r)
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
	return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), h(), l(), a;
}
function Ov(e, t, n) {
	const o = Ev(Av(e.path), n),
		a = Oe(o, { record: e, parent: t, children: [], alias: [] });
	return t && !a.record.aliasOf == !t.record.aliasOf && t.children.push(a), a;
}
function Bv(e, t) {
	const n = [],
		o = new Map();
	t = ic({ strict: !1, end: !0, sensitive: !1 }, t);
	function a(u) {
		return o.get(u);
	}
	function i(u, h, f) {
		const g = !f,
			m = Dv(u);
		m.aliasOf = f && f.record;
		const y = ic(t, u),
			v = [m];
		if ('alias' in u) {
			const C = typeof u.alias == 'string' ? [u.alias] : u.alias;
			for (const p of C)
				v.push(
					Oe({}, m, {
						components: f ? f.record.components : m.components,
						path: p,
						aliasOf: f ? f.record : m,
					}),
				);
		}
		let w, b;
		for (const C of v) {
			const { path: p } = C;
			if (h && p[0] !== '/') {
				const x = h.record.path,
					T = x[x.length - 1] === '/' ? '' : '/';
				C.path = h.record.path + (p && T + p);
			}
			if (
				((w = Ov(C, h, y)),
				f
					? f.alias.push(w)
					: ((b = b || w),
						b !== w && b.alias.push(w),
						g && u.name && !ac(w) && l(u.name)),
				m.children)
			) {
				const x = m.children;
				for (let T = 0; T < x.length; T++) i(x[T], w, f && f.children[T]);
			}
			(f = f || w),
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
		if (Id(u)) {
			const h = o.get(u);
			h &&
				(o.delete(u),
				n.splice(n.indexOf(h), 1),
				h.children.forEach(l),
				h.alias.forEach(l));
		} else {
			const h = n.indexOf(u);
			h > -1 &&
				(n.splice(h, 1),
				u.record.name && o.delete(u.record.name),
				u.children.forEach(l),
				u.alias.forEach(l));
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
			Pv(u, n[h]) >= 0 &&
			(u.record.path !== n[h].record.path || !Ad(u, n[h]));

		)
			h++;
		n.splice(h, 0, u), u.record.name && !ac(u) && o.set(u.record.name, u);
	}
	function c(u, h) {
		let f,
			g = {},
			m,
			y;
		if ('name' in u && u.name) {
			if (((f = o.get(u.name)), !f)) throw Ao(1, { location: u });
			(y = f.record.name),
				(g = Oe(
					oc(
						h.params,
						f.keys
							.filter(b => !b.optional)
							.concat(f.parent ? f.parent.keys.filter(b => b.optional) : [])
							.map(b => b.name),
					),
					u.params &&
						oc(
							u.params,
							f.keys.map(b => b.name),
						),
				)),
				(m = f.stringify(g));
		} else if (u.path != null)
			(m = u.path),
				(f = n.find(b => b.re.test(m))),
				f && ((g = f.parse(m)), (y = f.record.name));
		else {
			if (((f = h.name ? o.get(h.name) : n.find(b => b.re.test(h.path))), !f))
				throw Ao(1, { location: u, currentLocation: h });
			(y = f.record.name),
				(g = Oe({}, h.params, u.params)),
				(m = f.stringify(g));
		}
		const v = [];
		let w = f;
		for (; w; ) v.unshift(w.record), (w = w.parent);
		return { name: y, path: m, params: g, matched: v, meta: Lv(v) };
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
function oc(e, t) {
	const n = {};
	for (const o of t) o in e && (n[o] = e[o]);
	return n;
}
function Dv(e) {
	return {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: void 0,
		beforeEnter: e.beforeEnter,
		props: Mv(e),
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
function Mv(e) {
	const t = {},
		n = e.props || !1;
	if ('component' in e) t.default = n;
	else for (const o in e.components) t[o] = typeof n == 'object' ? n[o] : n;
	return t;
}
function ac(e) {
	for (; e; ) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Lv(e) {
	return e.reduce((t, n) => Oe(t, n.meta), {});
}
function ic(e, t) {
	const n = {};
	for (const o in e) n[o] = o in t ? t[o] : e[o];
	return n;
}
function Ad(e, t) {
	return t.children.some(n => n === e || Ad(e, n));
}
function Vv(e) {
	const t = {};
	if (e === '' || e === '?') return t;
	const o = (e[0] === '?' ? e.slice(1) : e).split('&');
	for (let a = 0; a < o.length; ++a) {
		const i = o[a].replace(Td, ' '),
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
function lc(e) {
	let t = '';
	for (let n in e) {
		const o = e[n];
		if (((n = av(n)), o == null)) {
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
function Nv(e) {
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
const Fv = Symbol(''),
	rc = Symbol(''),
	Nr = Symbol(''),
	Od = Symbol(''),
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
			const c = f => {
					f === !1
						? r(Ao(4, { from: n, to: t }))
						: f instanceof Error
							? r(f)
							: Tv(f)
								? r(Ao(2, { from: t, to: f }))
								: (l &&
										o.enterCallbacks[a] === l &&
										typeof f == 'function' &&
										l.push(f),
									s());
				},
				u = i(() => e.call(o && o.instances[a], t, n, c));
			let h = Promise.resolve(u);
			e.length < 3 && (h = h.then(c)), h.catch(f => r(f));
		});
}
function ml(e, t, n, o, a = i => i()) {
	const i = [];
	for (const l of e)
		for (const s in l.components) {
			let r = l.components[s];
			if (!(t !== 'beforeRouteEnter' && !l.instances[s]))
				if (zv(r)) {
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
							const h = Km(u) ? u.default : u;
							l.components[s] = h;
							const g = (h.__vccOpts || h)[t];
							return g && On(g, n, o, l, s, a)();
						}),
					);
				}
		}
	return i;
}
function zv(e) {
	return (
		typeof e == 'object' ||
		'displayName' in e ||
		'props' in e ||
		'__vccOpts' in e
	);
}
function sc(e) {
	const t = gt(Nr),
		n = gt(Od),
		o = L(() => {
			const r = Dt(e.to);
			return t.resolve(r);
		}),
		a = L(() => {
			const { matched: r } = o.value,
				{ length: c } = r,
				u = r[c - 1],
				h = n.matched;
			if (!u || !h.length) return -1;
			const f = h.findIndex(Ro.bind(null, u));
			if (f > -1) return f;
			const g = cc(r[c - 2]);
			return c > 1 && cc(u) === g && h[h.length - 1].path !== g
				? h.findIndex(Ro.bind(null, r[c - 2]))
				: f;
		}),
		i = L(() => a.value > -1 && Uv(n.params, o.value.params)),
		l = L(
			() =>
				a.value > -1 &&
				a.value === n.matched.length - 1 &&
				$d(n.params, o.value.params),
		);
	function s(r = {}) {
		return Wv(r)
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
const Hv = j({
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
		useLink: sc,
		setup(e, { slots: t }) {
			const n = He(sc(e)),
				{ options: o } = gt(Nr),
				a = L(() => ({
					[uc(e.activeClass, o.linkActiveClass, 'router-link-active')]:
						n.isActive,
					[uc(
						e.exactActiveClass,
						o.linkExactActiveClass,
						'router-link-exact-active',
					)]: n.isExactActive,
				}));
			return () => {
				const i = t.default && t.default(n);
				return e.custom
					? i
					: Mr(
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
	jv = Hv;
function Wv(e) {
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
function Uv(e, t) {
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
function cc(e) {
	return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const uc = (e, t, n) => e ?? t ?? n,
	Yv = j({
		name: 'RouterView',
		inheritAttrs: !1,
		props: { name: { type: String, default: 'default' }, route: Object },
		compatConfig: { MODE: 3 },
		setup(e, { attrs: t, slots: n }) {
			const o = gt(Ql),
				a = L(() => e.route || o.value),
				i = gt(rc, 0),
				l = L(() => {
					let c = Dt(i);
					const { matched: u } = a.value;
					let h;
					for (; (h = u[c]) && !h.components; ) c++;
					return c;
				}),
				s = L(() => a.value.matched[l.value]);
			cn(
				rc,
				L(() => l.value + 1),
			),
				cn(Fv, s),
				cn(Ql, a);
			const r = D();
			return (
				ee(
					() => [r.value, s.value, e.name],
					([c, u, h], [f, g, m]) => {
						u &&
							((u.instances[h] = c),
							g &&
								g !== u &&
								c &&
								c === f &&
								(u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
								u.updateGuards.size || (u.updateGuards = g.updateGuards))),
							c &&
								u &&
								(!g || !Ro(u, g) || !f) &&
								(u.enterCallbacks[h] || []).forEach(y => y(c));
					},
					{ flush: 'post' },
				),
				() => {
					const c = a.value,
						u = e.name,
						h = s.value,
						f = h && h.components[u];
					if (!f) return dc(n.default, { Component: f, route: c });
					const g = h.props[u],
						m = g
							? g === !0
								? c.params
								: typeof g == 'function'
									? g(c)
									: g
							: null,
						v = Mr(
							f,
							Oe({}, m, t, {
								onVnodeUnmounted: w => {
									w.component.isUnmounted && (h.instances[u] = null);
								},
								ref: r,
							}),
						);
					return dc(n.default, { Component: v, route: c }) || v;
				}
			);
		},
	});
function dc(e, t) {
	if (!e) return null;
	const n = e(t);
	return n.length === 1 ? n[0] : n;
}
const Kv = Yv;
function qv(e) {
	const t = Bv(e.routes, e),
		n = e.parseQuery || Vv,
		o = e.stringifyQuery || lc,
		a = e.history,
		i = Yo(),
		l = Yo(),
		s = Yo(),
		r = og(Cn);
	let c = Cn;
	Co &&
		e.scrollBehavior &&
		'scrollRestoration' in history &&
		(history.scrollRestoration = 'manual');
	const u = hl.bind(null, E => '' + E),
		h = hl.bind(null, lv),
		f = hl.bind(null, wa);
	function g(E, H) {
		let N, Q;
		return (
			Id(E) ? ((N = t.getRecordMatcher(E)), (Q = H)) : (Q = E), t.addRoute(Q, N)
		);
	}
	function m(E) {
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
			const P = gl(n, E, H.path),
				M = t.resolve({ path: P.path }, H),
				K = a.createHref(P.fullPath);
			return Oe(P, M, {
				params: f(M.params),
				hash: wa(P.hash),
				redirectedFrom: void 0,
				href: K,
			});
		}
		let N;
		if (E.path != null) N = Oe({}, E, { path: gl(n, E.path, H.path).path });
		else {
			const P = Oe({}, E.params);
			for (const M in P) P[M] == null && delete P[M];
			(N = Oe({}, E, { params: h(P) })), (H.params = h(H.params));
		}
		const Q = t.resolve(N, H),
			de = E.hash || '';
		Q.params = u(f(Q.params));
		const xe = cv(o, Oe({}, E, { hash: ov(de), path: Q.path })),
			_ = a.createHref(xe);
		return Oe(
			{ fullPath: xe, hash: de, query: o === lc ? Nv(E.query) : E.query || {} },
			Q,
			{ redirectedFrom: void 0, href: _ },
		);
	}
	function b(E) {
		return typeof E == 'string' ? gl(n, E, r.value.path) : Oe({}, E);
	}
	function C(E, H) {
		if (c !== E) return Ao(8, { from: H, to: E });
	}
	function p(E) {
		return A(E);
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
	function A(E, H) {
		const N = (c = w(E)),
			Q = r.value,
			de = E.state,
			xe = E.force,
			_ = E.replace === !0,
			P = T(N);
		if (P)
			return A(
				Oe(b(P), {
					state: typeof P == 'object' ? Oe({}, de, P.state) : de,
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
				uv(o, Q, N) &&
				((K = Ao(16, { to: M, from: Q })), ne(Q, Q, !0, !1)),
			(K ? Promise.resolve(K) : I(M, Q))
				.catch(W => (tn(W) ? (tn(W, 2) ? W : ve(W)) : Y(W, M, Q)))
				.then(W => {
					if (W) {
						if (tn(W, 2))
							return A(
								Oe({ replace: _ }, b(W.to), {
									state: typeof W.to == 'object' ? Oe({}, de, W.to.state) : de,
									force: xe,
								}),
								H || M,
							);
					} else W = $(M, Q, !0, _, de);
					return k(M, Q, W), W;
				})
		);
	}
	function S(E, H) {
		const N = C(E, H);
		return N ? Promise.reject(N) : Promise.resolve();
	}
	function R(E) {
		const H = De.values().next().value;
		return H && typeof H.runWithContext == 'function'
			? H.runWithContext(E)
			: E();
	}
	function I(E, H) {
		let N;
		const [Q, de, xe] = Gv(E, H);
		N = ml(Q.reverse(), 'beforeRouteLeave', E, H);
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
					N = ml(de, 'beforeRouteUpdate', E, H);
					for (const P of de)
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
						(N = ml(xe, 'beforeRouteEnter', E, H, R)),
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
		s.list().forEach(Q => R(() => Q(E, H, N)));
	}
	function $(E, H, N, Q, de) {
		const xe = C(E, H);
		if (xe) return xe;
		const _ = H === Cn,
			P = Co ? history.state : {};
		N &&
			(Q || _
				? a.replace(E.fullPath, Oe({ scroll: _ && P && P.scroll }, de))
				: a.push(E.fullPath, de)),
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
					de = T(Q);
				if (de) {
					A(Oe(de, { replace: !0 }), Q).catch(sa);
					return;
				}
				c = Q;
				const xe = r.value;
				Co && yv(Js(xe.fullPath, N.delta), zi()),
					I(Q, xe)
						.catch(_ =>
							tn(_, 12)
								? _
								: tn(_, 2)
									? (A(_.to, Q)
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
			Q.length ? Q.forEach(de => de(E, H, N)) : console.error(E),
			Promise.reject(E)
		);
	}
	function ge() {
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
		const { scrollBehavior: de } = e;
		if (!Co || !de) return Promise.resolve();
		const xe =
			(!N && pv(Js(E.fullPath, 0))) ||
			((Q || !N) && history.state && history.state.scroll) ||
			null;
		return Te()
			.then(() => de(E, H, xe))
			.then(_ => _ && bv(_))
			.catch(_ => Y(_, E, H));
	}
	const se = E => a.go(E);
	let be;
	const De = new Set(),
		re = {
			currentRoute: r,
			listening: !0,
			addRoute: g,
			removeRoute: m,
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
			isReady: ge,
			install(E) {
				const H = this;
				E.component('RouterLink', jv),
					E.component('RouterView', Kv),
					(E.config.globalProperties.$router = H),
					Object.defineProperty(E.config.globalProperties, '$route', {
						enumerable: !0,
						get: () => Dt(r),
					}),
					Co &&
						!be &&
						r.value === Cn &&
						((be = !0), p(a.location).catch(de => {}));
				const N = {};
				for (const de in Cn)
					Object.defineProperty(N, de, {
						get: () => r.value[de],
						enumerable: !0,
					});
				E.provide(Nr, H), E.provide(Od, Mu(N)), E.provide(Ql, r);
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
		return E.reduce((H, N) => H.then(() => R(N)), Promise.resolve());
	}
	return re;
}
function Gv(e, t) {
	const n = [],
		o = [],
		a = [],
		i = Math.max(t.matched.length, e.matched.length);
	for (let l = 0; l < i; l++) {
		const s = t.matched[l];
		s && (e.matched.find(c => Ro(c, s)) ? o.push(s) : n.push(s));
		const r = e.matched[l];
		r && (t.matched.find(c => Ro(c, r)) || a.push(r));
	}
	return [n, o, a];
}
const Xv = 'modulepreload',
	Zv = function (e, t) {
		return new URL(e, t).href;
	},
	fc = {},
	To = function (t, n, o) {
		let a = Promise.resolve();
		if (n && n.length > 0) {
			const i = document.getElementsByTagName('link'),
				l = document.querySelector('meta[property=csp-nonce]'),
				s =
					(l == null ? void 0 : l.nonce) ||
					(l == null ? void 0 : l.getAttribute('nonce'));
			a = Promise.all(
				n.map(r => {
					if (((r = Zv(r, o)), r in fc)) return;
					fc[r] = !0;
					const c = r.endsWith('.css'),
						u = c ? '[rel="stylesheet"]' : '';
					if (!!o)
						for (let g = i.length - 1; g >= 0; g--) {
							const m = i[g];
							if (m.href === r && (!c || m.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${r}"]${u}`)) return;
					const f = document.createElement('link');
					if (
						((f.rel = c ? 'stylesheet' : Xv),
						c || ((f.as = 'script'), (f.crossOrigin = '')),
						(f.href = r),
						s && f.setAttribute('nonce', s),
						document.head.appendChild(f),
						c)
					)
						return new Promise((g, m) => {
							f.addEventListener('load', g),
								f.addEventListener('error', () =>
									m(new Error(`Unable to preload CSS for ${r}`)),
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
	Jv = [
		{
			path: '/',
			component: () =>
				To(
					() => import('./index-luNE1UcS.js'),
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
						To(
							() => import('./index-3YSlX5V6.js'),
							__vite__mapDeps([2, 3]),
							import.meta.url,
						),
				},
				{
					path: '/acceptance/create',
					name: 'acceptanceCreate',
					component: () =>
						To(
							() => import('./create-BcE-z9AC.js'),
							__vite__mapDeps([4, 5]),
							import.meta.url,
						),
				},
				{
					path: '/acceptance/esign',
					name: 'acceptanceEsign',
					component: () =>
						To(() => import('./esign-BAxSD740.js'), [], import.meta.url),
				},
			],
		},
	],
	Qv = [
		{
			path: '/login',
			name: 'login',
			component: () =>
				To(
					() => import('./index-CM8aSulM.js'),
					__vite__mapDeps([6, 7]),
					import.meta.url,
				),
			meta: { title: '登录' },
		},
	],
	eb = [
		{
			path: '/:path(.*)*',
			component: () =>
				To(() => import('./404-B6Y4Rl46.js'), [], import.meta.url),
		},
	],
	hc = {
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
var tb =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
			? window
			: typeof global < 'u'
				? global
				: typeof self < 'u'
					? self
					: {};
function nb(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Bd = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ (function (e, t) {
	(function (n, o) {
		e.exports = o();
	})(tb, function () {
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
		(n.configure = function (m) {
			var y, v;
			for (y in m)
				(v = m[y]), v !== void 0 && m.hasOwnProperty(y) && (o[y] = v);
			return this;
		}),
			(n.status = null),
			(n.set = function (m) {
				var y = n.isStarted();
				(m = a(m, o.minimum, 1)), (n.status = m === 1 ? null : m);
				var v = n.render(!y),
					w = v.querySelector(o.barSelector),
					b = o.speed,
					C = o.easing;
				return (
					v.offsetWidth,
					s(function (p) {
						o.positionUsing === '' && (o.positionUsing = n.getPositioningCSS()),
							r(w, l(m, b, C)),
							m === 1
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
				var m = function () {
					setTimeout(function () {
						n.status && (n.trickle(), m());
					}, o.trickleSpeed);
				};
				return o.trickle && m(), this;
			}),
			(n.done = function (m) {
				return !m && !n.status ? this : n.inc(0.3 + 0.5 * Math.random()).set(1);
			}),
			(n.inc = function (m) {
				var y = n.status;
				return y
					? (typeof m != 'number' &&
							(m = (1 - y) * a(Math.random() * y, 0.1, 0.95)),
						(y = a(y + m, 0, 0.994)),
						n.set(y))
					: n.start();
			}),
			(n.trickle = function () {
				return n.inc(Math.random() * o.trickleRate);
			}),
			(function () {
				var m = 0,
					y = 0;
				n.promise = function (v) {
					return !v || v.state() === 'resolved'
						? this
						: (y === 0 && n.start(),
							m++,
							y++,
							v.always(function () {
								y--, y === 0 ? ((m = 0), n.done()) : n.set((m - y) / m);
							}),
							this);
				};
			})(),
			(n.render = function (m) {
				if (n.isRendered()) return document.getElementById('nprogress');
				u(document.documentElement, 'nprogress-busy');
				var y = document.createElement('div');
				(y.id = 'nprogress'), (y.innerHTML = o.template);
				var v = y.querySelector(o.barSelector),
					w = m ? '-100' : i(n.status || 0),
					b = document.querySelector(o.parent),
					C;
				return (
					r(v, {
						transition: 'all 0 linear',
						transform: 'translate3d(' + w + '%,0,0)',
					}),
					o.showSpinner ||
						((C = y.querySelector(o.spinnerSelector)), C && g(C)),
					b != document.body && u(b, 'nprogress-custom-parent'),
					b.appendChild(y),
					y
				);
			}),
			(n.remove = function () {
				h(document.documentElement, 'nprogress-busy'),
					h(document.querySelector(o.parent), 'nprogress-custom-parent');
				var m = document.getElementById('nprogress');
				m && g(m);
			}),
			(n.isRendered = function () {
				return !!document.getElementById('nprogress');
			}),
			(n.getPositioningCSS = function () {
				var m = document.body.style,
					y =
						'WebkitTransform' in m
							? 'Webkit'
							: 'MozTransform' in m
								? 'Moz'
								: 'msTransform' in m
									? 'ms'
									: 'OTransform' in m
										? 'O'
										: '';
				return y + 'Perspective' in m
					? 'translate3d'
					: y + 'Transform' in m
						? 'translate'
						: 'margin';
			});
		function a(m, y, v) {
			return m < y ? y : m > v ? v : m;
		}
		function i(m) {
			return (-1 + m) * 100;
		}
		function l(m, y, v) {
			var w;
			return (
				o.positionUsing === 'translate3d'
					? (w = { transform: 'translate3d(' + i(m) + '%,0,0)' })
					: o.positionUsing === 'translate'
						? (w = { transform: 'translate(' + i(m) + '%,0)' })
						: (w = { 'margin-left': i(m) + '%' }),
				(w.transition = 'all ' + y + 'ms ' + v),
				w
			);
		}
		var s = (function () {
				var m = [];
				function y() {
					var v = m.shift();
					v && v(y);
				}
				return function (v) {
					m.push(v), m.length == 1 && y();
				};
			})(),
			r = (function () {
				var m = ['Webkit', 'O', 'Moz', 'ms'],
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
						var T = m.length, A = p.charAt(0).toUpperCase() + p.slice(1), S;
						T--;

					)
						if (((S = m[T] + A), S in x)) return S;
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
						A,
						S;
					if (T.length == 2)
						for (A in x)
							(S = x[A]), S !== void 0 && x.hasOwnProperty(A) && C(p, A, S);
					else C(p, T[1], T[2]);
				};
			})();
		function c(m, y) {
			var v = typeof m == 'string' ? m : f(m);
			return v.indexOf(' ' + y + ' ') >= 0;
		}
		function u(m, y) {
			var v = f(m),
				w = v + y;
			c(v, y) || (m.className = w.substring(1));
		}
		function h(m, y) {
			var v = f(m),
				w;
			c(m, y) &&
				((w = v.replace(' ' + y + ' ', ' ')),
				(m.className = w.substring(1, w.length - 1)));
		}
		function f(m) {
			return (' ' + (m.className || '') + ' ').replace(/\s+/gi, ' ');
		}
		function g(m) {
			m && m.parentNode && m.parentNode.removeChild(m);
		}
		return n;
	});
})(Bd);
var ob = Bd.exports;
const Ko = nb(ob),
	Dd = qv({ history: Cv(), routes: [...Qv, ...Jv, ...eb] });
Dd.beforeEach(async (e, t, n) => {
	Ko.start();
	const o = hc.get('token');
	e.path === '/login' && !o
		? (n(), Ko.done())
		: o
			? o && e.path === '/login'
				? (n('/'), Ko.done())
				: (n(), Ko.done())
			: (n(`/login?redirect=${e.path}`), hc.clear(), Ko.done());
});
const ab = {
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
					const h = this.canvasTxt.getImageData(...c);
					(u.globalCompositeOperation = 'destination-over'),
						u.putImageData(h, 0, 0),
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
function ib(e, t, n, o, a, i) {
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
const er = Lr(ab, [
	['render', ib],
	['__scopeId', 'data-v-1fcc7cb1'],
]);
er.install = function (e) {
	this.installed || ((this.installed = !0), e.component('vueEsign', er));
};
function tr() {}
const he = Object.assign,
	kt = typeof window < 'u',
	fn = e => e !== null && typeof e == 'object',
	$e = e => e != null,
	Oo = e => typeof e == 'function',
	Fr = e => fn(e) && Oo(e.then) && Oo(e.catch),
	Sa = e =>
		Object.prototype.toString.call(e) === '[object Date]' &&
		!Number.isNaN(e.getTime());
function Md(e) {
	return (
		(e = e.replace(/[^-|\d]/g, '')),
		/^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
	);
}
const Ld = e => typeof e == 'number' || /^\d+(\.\d+)?$/.test(e),
	lb = () =>
		kt ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function gc(e, t) {
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
	rb = e => e.reduce((t, n) => t.concat(n), []),
	Fe = null,
	q = [Number, String],
	z = { type: Boolean, default: !0 },
	Ye = e => ({ type: e, required: !0 }),
	Ve = () => ({ type: Array, default: () => [] }),
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
var sb = e => e === window,
	mc = (e, t) => ({
		top: 0,
		left: 0,
		right: e,
		bottom: t,
		width: e,
		height: t,
	}),
	Re = e => {
		const t = Dt(e);
		if (sb(t)) {
			const n = t.innerWidth,
				o = t.innerHeight;
			return mc(n, o);
		}
		return t != null && t.getBoundingClientRect
			? t.getBoundingClientRect()
			: mc(0, 0);
	};
function cb(e = !1) {
	const t = D(e);
	return [
		t,
		(o = !t.value) => {
			t.value = o;
		},
	];
}
function ot(e) {
	const t = gt(e, null);
	if (t) {
		const n = Nt(),
			{ link: o, unlink: a, internalChildren: i } = t;
		o(n), Mo(() => a(n));
		const l = L(() => i.indexOf(n));
		return { parent: t, index: l };
	}
	return { parent: null, index: D(-1) };
}
function ub(e) {
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
var vc = (e, t) => {
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
function db(e, t, n) {
	const o = ub(e.subTree.children);
	n.sort((i, l) => vc(o, i.vnode) - vc(o, l.vnode));
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
							r.proxy && (n.push(r), t.push(r.proxy), db(o, t, n));
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
	bc = 24 * ar;
function fb(e) {
	const t = Math.floor(e / bc),
		n = Math.floor((e % bc) / ar),
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
function hb(e, t) {
	return Math.floor(e / 1e3) === Math.floor(t / 1e3);
}
function gb(e) {
	let t, n, o, a;
	const i = D(e.time),
		l = L(() => fb(i.value)),
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
		h = () => {
			t = it(() => {
				if (o) {
					const y = r();
					(!hb(y, i.value) || y === 0) && c(y), i.value > 0 && h();
				}
			});
		},
		f = () => {
			Hn && (e.millisecond ? u() : h());
		},
		g = () => {
			o || ((n = Date.now() + i.value), (o = !0), f());
		},
		m = (y = e.time) => {
			s(), (i.value = y);
		};
	return (
		en(s),
		Jt(() => {
			a && ((o = !0), (a = !1), f());
		}),
		Qt(() => {
			o && (s(), (a = !0));
		}),
		{ start: g, pause: s, reset: m, current: l }
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
	const r = h => {
			if (l) return;
			const f = Dt(h);
			f &&
				!s &&
				(f.addEventListener(e, t, { capture: i, passive: a }), (s = !0));
		},
		c = h => {
			if (l) return;
			const f = Dt(h);
			f && s && (f.removeEventListener(e, t, i), (s = !1));
		};
	Mo(() => c(o)), Qt(() => c(o)), No(() => r(o));
	let u;
	return (
		ft(o) &&
			(u = ee(o, (h, f) => {
				c(f), r(h);
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
function mb() {
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
var vb = /scroll|auto|overlay/i,
	Vd = Hn ? window : void 0;
function bb(e) {
	return e.tagName !== 'HTML' && e.tagName !== 'BODY' && e.nodeType === 1;
}
function zr(e, t = Vd) {
	let n = e;
	for (; n && n !== t && bb(n); ) {
		const { overflowY: o } = window.getComputedStyle(n);
		if (vb.test(o)) return n;
		n = n.parentNode;
	}
	return t;
}
function Fo(e, t = Vd) {
	const n = D();
	return (
		Ue(() => {
			e.value && (n.value = zr(e.value, t));
		}),
		n
	);
}
var Na;
function yb() {
	if (!Na && ((Na = D('visible')), Hn)) {
		const e = () => {
			Na.value = document.hidden ? 'hidden' : 'visible';
		};
		e(), window.addEventListener('visibilitychange', e);
	}
	return Na;
}
var Nd = Symbol('van-field');
function jn(e) {
	const t = gt(Nd, null);
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
function yc(e, t) {
	if (e === window) return 0;
	const n = t ? hn(t) : $a();
	return Re(e).top + n;
}
const pb = lb();
function Fd() {
	pb && Wi($a());
}
const Hr = e => e.stopPropagation();
function Me(e, t) {
	(typeof e.cancelable != 'boolean' || e.cancelable) && e.preventDefault(),
		t && Hr(e);
}
function io(e) {
	const t = Dt(e);
	if (!t) return !1;
	const n = window.getComputedStyle(t),
		o = n.display === 'none',
		a = t.offsetParent === null && n.position !== 'fixed';
	return o || a;
}
const { width: Mt, height: _t } = mb();
function wb(e) {
	const t = window.getComputedStyle(e);
	return (
		t.transform !== 'none' ||
		t.perspective !== 'none' ||
		['transform', 'perspective', 'filter'].some(n =>
			(t.willChange || '').includes(n),
		)
	);
}
function xb(e) {
	let t = e.parentElement;
	for (; t; ) {
		if (t && t.tagName !== 'HTML' && t.tagName !== 'BODY' && wb(t)) return t;
		t = t.parentElement;
	}
	return null;
}
function we(e) {
	if ($e(e)) return Ld(e) ? `${e}px` : String(e);
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
function Sb() {
	if (!bl) {
		const e = document.documentElement,
			t = e.style.fontSize || window.getComputedStyle(e).fontSize;
		bl = parseFloat(t);
	}
	return bl;
}
function Cb(e) {
	return (e = e.replace(/rem/g, '')), +e * Sb();
}
function Tb(e) {
	return (e = e.replace(/vw/g, '')), (+e * Mt.value) / 100;
}
function _b(e) {
	return (e = e.replace(/vh/g, '')), (+e * _t.value) / 100;
}
function jr(e) {
	if (typeof e == 'number') return e;
	if (kt) {
		if (e.includes('rem')) return Cb(e);
		if (e.includes('vw')) return Tb(e);
		if (e.includes('vh')) return _b(e);
	}
	return parseFloat(e);
}
const kb = /-(\w)/g,
	zd = e => e.replace(kb, (t, n) => n.toUpperCase()),
	Eb = e =>
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
function pc(e, t, n) {
	const o = e.indexOf(t);
	return o === -1
		? e
		: t === '-' && o !== 0
			? e.slice(0, o)
			: e.slice(0, o + 1) + e.slice(o).replace(n, '');
}
function ir(e, t = !0, n = !0) {
	t ? (e = pc(e, '.', /\./g)) : (e = e.split('.')[0]),
		n ? (e = pc(e, '-', /-/g)) : (e = e.replace(/-/, ''));
	const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
	return e.replace(o, '');
}
function Hd(e, t) {
	return Math.round((e + t) * 1e10) / 1e10;
}
const { hasOwnProperty: $b } = Object.prototype;
function Pb(e, t, n) {
	const o = t[n];
	$e(o) &&
		(!$b.call(e, n) || !fn(o) ? (e[n] = o) : (e[n] = jd(Object(e[n]), o)));
}
function jd(e, t) {
	return (
		Object.keys(t).forEach(n => {
			Pb(e, t, n);
		}),
		e
	);
}
var Ib = {
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
const wc = D('zh-CN'),
	xc = He({ 'zh-CN': Ib }),
	Wd = {
		messages() {
			return xc[wc.value];
		},
		use(e, t) {
			(wc.value = e), this.add({ [e]: t });
		},
		add(e = {}) {
			jd(xc, e);
		},
	};
var Rb = Wd;
function Ab(e) {
	const t = zd(e) + '.';
	return (n, ...o) => {
		const a = Rb.messages(),
			i = gc(a, t + n) || gc(a, n);
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
function Ob(e) {
	return (t, n) => (
		t && typeof t != 'string' && ((n = t), (t = '')),
		(t = t ? `${e}__${t}` : e),
		`${t}${lr(t, n)}`
	);
}
function U(e) {
	const t = `van-${e}`;
	return [t, Ob(t), Ab(t)];
}
const pn = 'van-hairline',
	Ud = `${pn}--top`,
	Yd = `${pn}--left`,
	Bb = `${pn}--right`,
	Wr = `${pn}--bottom`,
	ua = `${pn}--surround`,
	Ui = `${pn}--top-bottom`,
	Db = `${pn}-unset--top-bottom`,
	vt = 'van-haptics-feedback',
	Kd = Symbol('van-form'),
	qd = 500,
	Sc = 5;
function Wn(e, { args: t = [], done: n, canceled: o, error: a }) {
	if (e) {
		const i = e.apply(null, t);
		Fr(i)
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
			n && (t.component(n, e), t.component(zd(`-${n}`), e));
		}),
		e
	);
}
function Si(e, t) {
	return e.reduce((n, o) => (Math.abs(n - t) < Math.abs(o - t) ? n : o));
}
const Gd = Symbol();
function Yi(e) {
	const t = gt(Gd, null);
	t &&
		ee(t, n => {
			n && e();
		});
}
const Xd = (e, t) => {
	const n = D(),
		o = () => {
			n.value = Re(e).height;
		};
	return (
		Ue(() => {
			if ((Te(o), t)) for (let a = 1; a <= 3; a++) setTimeout(o, 100 * a);
		}),
		Yi(() => Te(o)),
		ee([Mt, _t], o),
		n
	);
};
function Ki(e, t) {
	const n = Xd(e, !0);
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
const [Zd, Cc] = U('action-bar'),
	Ur = Symbol(Zd),
	Mb = { placeholder: Boolean, safeAreaInsetBottom: z };
var Lb = j({
	name: Zd,
	props: Mb,
	setup(e, { slots: t }) {
		const n = D(),
			o = Ki(n, Cc),
			{ linkChildren: a } = rt(Ur);
		a();
		const i = () => {
			var l;
			return d(
				'div',
				{
					ref: n,
					class: [Cc(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }],
				},
				[(l = t.default) == null ? void 0 : l.call(t)],
			);
		};
		return () => (e.placeholder ? o(i) : i());
	},
});
const Jd = G(Lb);
function ke(e) {
	const t = Nt();
	t && he(t.proxy, e);
}
const Un = { to: [String, Object], url: String, replace: Boolean };
function Qd({ to: e, url: t, replace: n, $router: o }) {
	e && o
		? o[n ? 'replace' : 'push'](e)
		: t && (n ? location.replace(t) : (location.href = t));
}
function ro() {
	const e = Nt().proxy;
	return () => Qd(e);
}
const [Vb, Tc] = U('badge'),
	Nb = {
		dot: Boolean,
		max: q,
		tag: Z('div'),
		color: String,
		offset: Array,
		content: q,
		showZero: z,
		position: Z('top-right'),
	};
var Fb = j({
	name: Vb,
	props: Nb,
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
						: $e(r) && Ld(c) && +c > +r
							? `${r}+`
							: c;
			},
			a = s => (s.startsWith('-') ? s.replace('-', '') : `-${s}`),
			i = L(() => {
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
			l = () => {
				if (n() || e.dot)
					return d(
						'div',
						{
							class: Tc([e.position, { dot: e.dot, fixed: !!t.default }]),
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
					{ class: Tc('wrapper') },
					{ default: () => [t.default(), l()] },
				);
			}
			return l();
		};
	},
});
const so = G(Fb);
let ef = 2e3;
const zb = () => ++ef,
	Hb = e => {
		ef = e;
	},
	[tf, jb] = U('config-provider'),
	nf = Symbol(tf),
	Wb = {
		tag: Z('div'),
		theme: Z('light'),
		zIndex: Number,
		themeVars: Object,
		themeVarsDark: Object,
		themeVarsLight: Object,
		themeVarsScope: Z('local'),
		iconPrefix: String,
	};
function Ub(e) {
	return e.replace(/([a-zA-Z])(\d)/g, '$1-$2');
}
function Yb(e) {
	const t = {};
	return (
		Object.keys(e).forEach(n => {
			const o = Ub(Eb(n));
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
var Kb = j({
	name: tf,
	props: Wb,
	setup(e, { slots: t }) {
		const n = L(() =>
			Yb(
				he(
					{},
					e.themeVars,
					e.theme === 'dark' ? e.themeVarsDark : e.themeVarsLight,
				),
			),
		);
		if (kt) {
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
			cn(nf, e),
			Do(() => {
				e.zIndex !== void 0 && Hb(e.zIndex);
			}),
			() =>
				d(
					e.tag,
					{
						class: jb(),
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
const [qb, _c] = U('icon'),
	Gb = e => (e == null ? void 0 : e.includes('/')),
	Xb = {
		dot: Boolean,
		tag: Z('i'),
		name: String,
		size: q,
		badge: q,
		color: String,
		badgeProps: Object,
		classPrefix: String,
	};
var Zb = j({
	name: qb,
	props: Xb,
	setup(e, { slots: t }) {
		const n = gt(nf, null),
			o = L(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || _c());
		return () => {
			const { tag: a, dot: i, name: l, size: s, badge: r, color: c } = e,
				u = Gb(l);
			return d(
				so,
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
						var h;
						return [
							(h = t.default) == null ? void 0 : h.call(t),
							u && d('img', { class: _c('image'), src: l }, null),
						];
					},
				},
			);
		};
	},
});
const Ce = G(Zb);
var Jb = Ce;
const [Qb, da] = U('loading'),
	ey = Array(12)
		.fill(null)
		.map((e, t) => d('i', { class: da('line', String(t + 1)) }, null)),
	ty = d('svg', { class: da('circular'), viewBox: '25 25 50 50' }, [
		d('circle', { cx: '50', cy: '50', r: '20', fill: 'none' }, null),
	]),
	ny = {
		size: q,
		type: Z('circular'),
		color: String,
		vertical: Boolean,
		textSize: q,
		textColor: String,
	};
var oy = j({
	name: Qb,
	props: ny,
	setup(e, { slots: t }) {
		const n = L(() => he({ color: e.color }, bn(e.size))),
			o = () => {
				const i = e.type === 'spinner' ? ey : ty;
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
const Ft = G(oy),
	[ay, uo] = U('button'),
	iy = he({}, Un, {
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
var ly = j({
	name: ay,
	props: iy,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = ro(),
			a = () =>
				n.loading
					? n.loading()
					: d(
							Ft,
							{
								size: e.loadingSize,
								type: e.loadingType,
								class: uo('loading'),
							},
							null,
						),
			i = () => {
				if (e.loading) return a();
				if (n.icon) return d('div', { class: uo('icon') }, [n.icon()]);
				if (e.icon)
					return d(
						Ce,
						{ name: e.icon, class: uo('icon'), classPrefix: e.iconPrefix },
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
					return d('span', { class: uo('text') }, [c]);
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
					round: g,
					plain: m,
					square: y,
					loading: v,
					disabled: w,
					hairline: b,
					nativeType: C,
					iconPosition: p,
				} = e,
				x = [
					uo([
						u,
						h,
						{
							plain: m,
							block: f,
							round: g,
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
						d('div', { class: uo('content') }, [
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
const lt = G(ly),
	[ry, sy] = U('action-bar-button'),
	cy = he({}, Un, {
		type: String,
		text: String,
		icon: String,
		color: String,
		loading: Boolean,
		disabled: Boolean,
	});
var uy = j({
	name: ry,
	props: cy,
	setup(e, { slots: t }) {
		const n = ro(),
			{ parent: o, index: a } = ot(Ur),
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
					loading: h,
					disabled: f,
				} = e;
				return d(
					lt,
					{
						class: sy([s, { last: l.value, first: i.value }]),
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
const rr = G(uy),
	[dy, yl] = U('action-bar-icon'),
	fy = he({}, Un, {
		dot: Boolean,
		text: String,
		icon: String,
		color: String,
		badge: q,
		iconClass: Fe,
		badgeProps: Object,
		iconPrefix: String,
	});
var hy = j({
	name: dy,
	props: fy,
	setup(e, { slots: t }) {
		const n = ro();
		ot(Ur);
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
				? d(so, _e({ dot: a, class: yl('icon'), content: i }, c), {
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
const gy = G(hy),
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
		overlayClass: Fe,
		transitionAppear: Boolean,
		closeOnClickOverlay: z,
	},
	Yr = Object.keys(zo);
function my(e, t) {
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
		move: g => {
			const m = g.touches[0];
			(n.value = (m.clientX < 0 ? 0 : m.clientX) - e.value),
				(o.value = m.clientY - t.value),
				(a.value = Math.abs(n.value)),
				(i.value = Math.abs(o.value));
			const y = 10;
			(!l.value || (a.value < y && i.value < y)) &&
				(l.value = my(a.value, i.value)),
				s.value && (a.value > Sc || i.value > Sc) && (s.value = !1);
		},
		start: g => {
			u(), (e.value = g.touches[0].clientX), (t.value = g.touches[0].clientY);
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
const kc = 'van-overflow-hidden';
function of(e, t) {
	const n = Et(),
		o = '01',
		a = '10',
		i = u => {
			n.move(u);
			const h = n.deltaY.value > 0 ? a : o,
				f = zr(u.target, e.value),
				{ scrollHeight: g, offsetHeight: m, scrollTop: y } = f;
			let v = '11';
			y === 0 ? (v = m >= g ? '00' : '01') : y + m >= g && (v = '10'),
				v !== '11' &&
					n.isVertical() &&
					!(parseInt(v, 2) & parseInt(h, 2)) &&
					Me(u, !0);
		},
		l = () => {
			document.addEventListener('touchstart', n.start),
				document.addEventListener('touchmove', i, { passive: !1 }),
				qo || document.body.classList.add(kc),
				qo++;
		},
		s = () => {
			qo &&
				(document.removeEventListener('touchstart', n.start),
				document.removeEventListener('touchmove', i),
				qo--,
				qo || document.body.classList.remove(kc));
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
function Kr(e) {
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
	[vy, by] = U('overlay'),
	yy = {
		show: Boolean,
		zIndex: q,
		duration: q,
		className: Fe,
		lockScroll: z,
		lazyRender: z,
		customStyle: Object,
	};
var py = j({
	name: vy,
	props: yy,
	setup(e, { slots: t }) {
		const n = D(),
			o = Kr(() => e.show || !e.lazyRender),
			a = l => {
				e.lockScroll && Me(l, !0);
			},
			i = o(() => {
				var l;
				const s = he(yn(e.zIndex), e.customStyle);
				return (
					$e(e.duration) && (s.animationDuration = `${e.duration}s`),
					Qe(
						d('div', { ref: n, style: s, class: [by(), e.className] }, [
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
const af = G(py),
	wy = he({}, zo, {
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
	[xy, Ec] = U('popup');
var Sy = j({
	name: xy,
	inheritAttrs: !1,
	props: wy,
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
			r = Kr(() => e.show || !e.lazyRender),
			c = L(() => {
				const T = { zIndex: l.value };
				if ($e(e.duration)) {
					const A =
						e.position === 'center'
							? 'animationDuration'
							: 'transitionDuration';
					T[A] = `${e.duration}s`;
				}
				return T;
			}),
			u = () => {
				a ||
					((a = !0),
					(l.value = e.zIndex !== void 0 ? +e.zIndex : zb()),
					t('open'));
			},
			h = () => {
				a &&
					Wn(e.beforeClose, {
						done() {
							(a = !1), t('close'), t('update:show', !1);
						},
					});
			},
			f = T => {
				t('clickOverlay', T), e.closeOnClickOverlay && h();
			},
			g = () => {
				if (e.overlay)
					return d(
						af,
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
							{ onClick: f },
						),
						{ default: o['overlay-content'] },
					);
			},
			m = T => {
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
							class: [Ec('close-icon', e.closeIconPosition), vt],
							classPrefix: e.iconPrefix,
							onClick: m,
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
					round: A,
					position: S,
					safeAreaInsetTop: R,
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
									Ec({ round: A, [S]: S }),
									{ 'van-safe-area-top': R, 'van-safe-area-bottom': I },
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
				const { position: T, transition: A, transitionAppear: S } = e,
					R = T === 'center' ? 'van-fade' : `van-popup-slide-${T}`;
				return d(
					Vo,
					{ name: A || R, appear: S, onAfterEnter: w, onAfterLeave: b },
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
								var A;
								(A = s.value) == null || A.focus();
							})),
						!T && a && ((a = !1), t('close'));
				},
			),
			ke({ popupRef: s }),
			of(s, () => e.show && e.lockScroll),
			We('popstate', () => {
				e.closeOnPopstate && (h(), (i = !1));
			}),
			Ue(() => {
				e.show && u();
			}),
			Jt(() => {
				i && (t('update:show', !0), (i = !1));
			}),
			Qt(() => {
				e.show && e.teleport && (h(), (i = !0));
			}),
			cn(Gd, () => e.show),
			() =>
				e.teleport
					? d(Lo, { to: e.teleport }, { default: () => [g(), x()] })
					: d(Je, null, [g(), x()])
		);
	},
});
const zt = G(Sy),
	[Cy, xt] = U('action-sheet'),
	Ty = he({}, zo, {
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
	_y = [...Yr, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'];
var ky = j({
	name: Cy,
	props: Ty,
	emits: ['select', 'cancel', 'update:show'],
	setup(e, { slots: t, emit: n }) {
		const o = h => n('update:show', h),
			a = () => {
				o(!1), n('cancel');
			},
			i = () => {
				if (e.title)
					return d('div', { class: xt('header') }, [
						e.title,
						e.closeable &&
							d(
								Ce,
								{ name: e.closeIcon, class: [xt('close'), vt], onClick: a },
								null,
							),
					]);
			},
			l = () => {
				if (t.cancel || e.cancelText)
					return [
						d('div', { class: xt('gap') }, null),
						d('button', { type: 'button', class: xt('cancel'), onClick: a }, [
							t.cancel ? t.cancel() : e.cancelText,
						]),
					];
			},
			s = h => {
				if (h.icon)
					return d(Ce, { class: xt('item-icon'), name: h.icon }, null);
			},
			r = (h, f) =>
				h.loading
					? d(Ft, { class: xt('loading-icon') }, null)
					: t.action
						? t.action({ action: h, index: f })
						: [
								d('span', { class: xt('name') }, [h.name]),
								h.subname && d('div', { class: xt('subname') }, [h.subname]),
							],
			c = (h, f) => {
				const {
						color: g,
						loading: m,
						callback: y,
						disabled: v,
						className: w,
					} = h,
					b = () => {
						v ||
							m ||
							(y && y(h),
							e.closeOnClickAction && o(!1),
							Te(() => n('select', h, f)));
					};
				return d(
					'button',
					{
						type: 'button',
						style: { color: g },
						class: [xt('item', { loading: m, disabled: v }), w],
						onClick: b,
					},
					[s(h), r(h, f)],
				);
			},
			u = () => {
				if (e.description || t.description) {
					const h = t.description ? t.description() : e.description;
					return d('div', { class: xt('description') }, [h]);
				}
			};
		return () =>
			d(
				zt,
				_e({ class: xt(), position: 'bottom', 'onUpdate:show': o }, Ie(e, _y)),
				{
					default: () => {
						var h;
						return [
							i(),
							u(),
							d('div', { class: xt('content') }, [
								e.actions.map(c),
								(h = t.default) == null ? void 0 : h.call(t),
							]),
							l(),
						];
					},
				},
			);
	},
});
const Ey = G(ky),
	[$y, rn, $c] = U('picker'),
	lf = e => e.find(t => !t.disabled) || e[0];
function Py(e, t) {
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
const Pc = (e, t, n) => t !== void 0 && !!e.find(o => o[n.value] === t);
function sr(e, t, n) {
	const o = e.findIndex(i => i[n.value] === t),
		a = si(e, o);
	return e[a];
}
function Iy(e, t, n) {
	const o = [];
	let a = { [t.children]: e },
		i = 0;
	for (; a && a[t.children]; ) {
		const l = a[t.children],
			s = n.value[i];
		if (((a = $e(s) ? sr(l, s, t) : void 0), !a && l.length)) {
			const r = lf(l)[t.value];
			a = sr(l, r, t);
		}
		i++, o.push(l);
	}
	return o;
}
function Ry(e) {
	const { transform: t } = window.getComputedStyle(e),
		n = t.slice(7, t.length - 1).split(', ')[5];
	return Number(n);
}
function Ay(e) {
	return he({ text: 'text', value: 'value', children: 'children' }, e);
}
const Ic = 200,
	Rc = 300,
	Oy = 15,
	[rf, pl] = U('picker-column'),
	sf = Symbol(rf);
var By = j({
	name: rf,
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
		let o, a, i, l, s;
		const r = D(),
			c = D(),
			u = D(0),
			h = D(0),
			f = Et(),
			g = () => e.options.length,
			m = () => (e.optionHeight * (+e.visibleOptionNum - 1)) / 2,
			y = I => {
				let k = si(e.options, I);
				const $ = -k * e.optionHeight,
					B = () => {
						k > g() - 1 && (k = si(e.options, I));
						const X = e.options[k][e.fields.value];
						X !== e.value && t('change', X);
					};
				o && $ !== u.value ? (s = B) : B(), (u.value = $);
			},
			v = () => e.readonly || !e.options.length,
			w = I => {
				o ||
					v() ||
					((s = null), (h.value = Ic), y(I), t('clickOption', e.options[I]));
			},
			b = I => et(Math.round(-I / e.optionHeight), 0, g() - 1),
			C = L(() => b(u.value)),
			p = (I, k) => {
				const $ = Math.abs(I / k);
				I = u.value + ($ / 0.003) * (I < 0 ? -1 : 1);
				const B = b(I);
				(h.value = +e.swipeDuration), y(B);
			},
			x = () => {
				(o = !1), (h.value = 0), s && (s(), (s = null));
			},
			T = I => {
				if (!v()) {
					if ((f.start(I), o)) {
						const k = Ry(c.value);
						u.value = Math.min(0, k - m());
					}
					(h.value = 0), (a = u.value), (i = Date.now()), (l = a), (s = null);
				}
			},
			A = I => {
				if (v()) return;
				f.move(I), f.isVertical() && ((o = !0), Me(I, !0));
				const k = et(
						a + f.deltaY.value,
						-(g() * e.optionHeight),
						e.optionHeight,
					),
					$ = b(k);
				$ !== C.value && t('scrollInto', e.options[$]), (u.value = k);
				const B = Date.now();
				B - i > Rc && ((i = B), (l = k));
			},
			S = () => {
				if (v()) return;
				const I = u.value - l,
					k = Date.now() - i;
				if (k < Rc && Math.abs(I) > Oy) {
					p(I, k);
					return;
				}
				const B = b(u.value);
				(h.value = Ic),
					y(B),
					setTimeout(() => {
						o = !1;
					}, 0);
			},
			R = () => {
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
			ot(sf),
			ke({ stopMomentum: x }),
			Do(() => {
				const I = o
						? Math.floor(-u.value / e.optionHeight)
						: e.options.findIndex(B => B[e.fields.value] === e.value),
					k = si(e.options, I),
					$ = -k * e.optionHeight;
				o && k < I && x(), (u.value = $);
			}),
			We('touchmove', A, { target: r }),
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
									transform: `translate3d(0, ${u.value + m()}px, 0)`,
									transitionDuration: `${h.value}ms`,
									transitionProperty: h.value ? 'all' : 'none',
								},
								class: pl('wrapper'),
								onTransitionend: x,
							},
							[R()],
						),
					],
				)
		);
	},
});
const [Dy] = U('picker-toolbar'),
	qi = { title: String, cancelButtonText: String, confirmButtonText: String },
	cf = ['cancel', 'confirm', 'title', 'toolbar'],
	My = Object.keys(qi);
var uf = j({
	name: Dy,
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
				const c = (r = e.cancelButtonText) != null ? r : $c('cancel');
				if (!(!n.cancel && !c))
					return d(
						'button',
						{ type: 'button', class: [rn('cancel'), vt], onClick: a },
						[n.cancel ? n.cancel() : c],
					);
			},
			s = () => {
				var r;
				const c = (r = e.confirmButtonText) != null ? r : $c('confirm');
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
const qr = (e, t) => {
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
function Ly(e, t, n) {
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
function Vy(e, t, n, o) {
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
let Ny = 0;
function Ho() {
	const e = Nt(),
		{ name: t = 'unknown' } = (e == null ? void 0 : e.type) || {};
	return `${t}-${++Ny}`;
}
function Pa() {
	const e = D([]),
		t = [];
	return (
		td(() => {
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
function df(e, t) {
	if (!kt || !window.IntersectionObserver) return;
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
const [Fy, zy] = U('sticky'),
	Hy = {
		zIndex: q,
		position: Z('top'),
		container: Object,
		offsetTop: ie(0),
		offsetBottom: ie(0),
	};
var jy = j({
	name: Fy,
	props: Hy,
	emits: ['scroll', 'change'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Fo(o),
			i = He({ fixed: !1, width: 0, height: 0, transform: 0 }),
			l = D(!1),
			s = L(() => jr(e.position === 'top' ? e.offsetTop : e.offsetBottom)),
			r = L(() => {
				if (l.value) return;
				const { fixed: f, height: g, width: m } = i;
				if (f) return { width: `${m}px`, height: `${g}px` };
			}),
			c = L(() => {
				if (!i.fixed || l.value) return;
				const f = he(yn(e.zIndex), {
					width: `${i.width}px`,
					height: `${i.height}px`,
					[e.position]: `${s.value}px`,
				});
				return (
					i.transform && (f.transform = `translate3d(0, ${i.transform}px, 0)`),
					f
				);
			}),
			u = f => t('scroll', { scrollTop: f, isFixed: i.fixed }),
			h = () => {
				if (!o.value || io(o)) return;
				const { container: f, position: g } = e,
					m = Re(o),
					y = hn(window);
				if (((i.width = m.width), (i.height = m.height), g === 'top'))
					if (f) {
						const v = Re(f),
							w = v.bottom - s.value - i.height;
						(i.fixed = s.value > m.top && v.bottom > 0),
							(i.transform = w < 0 ? w : 0);
					} else i.fixed = s.value > m.top;
				else {
					const { clientHeight: v } = document.documentElement;
					if (f) {
						const w = Re(f),
							b = v - w.top - s.value - i.height;
						(i.fixed = v - s.value < m.bottom && v > w.top),
							(i.transform = b < 0 ? -b : 0);
					} else i.fixed = v - s.value < m.bottom;
				}
				u(y);
			};
		return (
			ee(
				() => i.fixed,
				f => t('change', f),
			),
			We('scroll', h, { target: a, passive: !0 }),
			df(o, h),
			ee([Mt, _t], () => {
				!o.value ||
					io(o) ||
					!i.fixed ||
					((l.value = !0),
					Te(() => {
						const f = Re(o);
						(i.width = f.width), (i.height = f.height), (l.value = !1);
					}));
			}),
			() => {
				var f;
				return d('div', { ref: o, style: r.value }, [
					d(
						'div',
						{ class: zy({ fixed: i.fixed && !l.value }), style: c.value },
						[(f = n.default) == null ? void 0 : f.call(n)],
					),
				]);
			}
		);
	},
});
const ff = G(jy),
	[hf, za] = U('swipe'),
	Wy = {
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
	gf = Symbol(hf);
var Uy = j({
	name: hf,
	props: Wy,
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
			{ children: r, linkChildren: c } = rt(gf),
			u = L(() => r.length),
			h = L(() => i[e.vertical ? 'height' : 'width']),
			f = L(() => (e.vertical ? s.deltaY.value : s.deltaX.value)),
			g = L(() =>
				i.rect
					? (e.vertical ? i.rect.height : i.rect.width) - h.value * u.value
					: 0,
			),
			m = L(() => (h.value ? Math.ceil(Math.abs(g.value) / h.value) : u.value)),
			y = L(() => u.value * h.value),
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
				if (h.value) {
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
						: et(se + ne, 0, m.value)
					: se;
			},
			p = (ne, se = 0) => {
				let be = ne * h.value;
				e.loop || (be = Math.min(be, -g.value));
				let De = se - be;
				return e.loop || (De = et(De, g.value, 0)), De;
			},
			x = ({ pace: ne = 0, offset: se = 0, emitChange: be }) => {
				if (u.value <= 1) return;
				const { active: De } = i,
					re = C(ne),
					ue = p(re, se);
				if (e.loop) {
					if (r[0] && ue !== g.value) {
						const E = ue < g.value;
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
			A = () => {
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
		let R;
		const I = () => clearTimeout(R),
			k = () => {
				I(),
					+e.autoplay > 0 &&
						u.value > 1 &&
						(R = setTimeout(() => {
							S(), k();
						}, +e.autoplay));
			},
			$ = (ne = +e.initialSwipe) => {
				if (!o.value) return;
				const se = () => {
					var be, De;
					if (!io(o)) {
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
				io(o) ? Te().then(se) : se();
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
							((i.active === 0 && f.value > 0) ||
								(i.active === u.value - 1 && f.value < 0))) ||
							(Me(ne, e.stopPropagation),
							x({ offset: f.value }),
							l || (t('dragStart', { index: v.value }), (l = !0)))));
			},
			F = () => {
				if (!e.touchable || !i.swiping) return;
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
			ge = (ne, se) => {
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
						[Array(u.value).fill('').map(ge)],
					);
			};
		return (
			ke({ prev: A, next: S, state: i, resize: B, swipeTo: Y }),
			c({ size: h, props: e, count: u, activeIndicator: v }),
			ee(
				() => e.initialSwipe,
				ne => $(+ne),
			),
			ee(u, () => $(i.active)),
			ee(() => e.autoplay, k),
			ee([Mt, _t, () => e.width, () => e.height], B),
			ee(yb(), ne => {
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
const Gr = G(Uy),
	[Yy, Ac] = U('tabs');
var Ky = j({
	name: Yy,
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
							Gr,
							{
								ref: o,
								loop: !1,
								class: Ac('track'),
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
					{ class: Ac('content', { animated: e.animated || e.swipeable }) },
					[i()],
				)
		);
	},
});
const [mf, Ha] = U('tabs'),
	qy = {
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
	vf = Symbol(mf);
var Gy = j({
	name: mf,
	props: qy,
	emits: ['change', 'scroll', 'rendered', 'clickTab', 'update:active'],
	setup(e, { emit: t, slots: n }) {
		let o, a, i, l, s;
		const r = D(),
			c = D(),
			u = D(),
			h = D(),
			f = Ho(),
			g = Fo(r),
			[m, y] = Pa(),
			{ children: v, linkChildren: w } = rt(vf),
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
			A = L(() => jr(e.offsetTop)),
			S = L(() => (e.sticky ? A.value + o : 0)),
			R = re => {
				const ue = c.value,
					E = m.value;
				if (!C.value || !ue || !E || !E[b.currentIndex]) return;
				const H = E[b.currentIndex].$el,
					N = H.offsetLeft - (ue.offsetWidth - H.offsetWidth) / 2;
				l && l(), (l = Ly(ue, N, re ? 0 : +e.duration));
			},
			I = () => {
				const re = b.inited;
				Te(() => {
					const ue = m.value;
					if (!ue || !ue[b.currentIndex] || e.type !== 'line' || io(r.value))
						return;
					const E = ue[b.currentIndex].$el,
						{ lineWidth: H, lineHeight: N } = e,
						Q = E.offsetLeft + E.offsetWidth / 2,
						de = {
							width: we(H),
							backgroundColor: e.color,
							transform: `translateX(${Q}px) translateX(-50%)`,
						};
					if ((re && (de.transitionDuration = `${e.duration}s`), $e(N))) {
						const xe = we(N);
						(de.height = xe), (de.borderRadius = xe);
					}
					b.lineStyle = de;
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
				b.currentIndex !== E && ((b.currentIndex = E), ue || R(), I()),
					N !== e.active &&
						(t('update:active', N), Q && t('change', N, H.title)),
					i && !e.scrollspy && Wi(Math.ceil(yc(r.value) - A.value));
			},
			B = (re, ue) => {
				const E = v.find((N, Q) => x(N, Q) === re),
					H = E ? v.indexOf(E) : 0;
				$(H, ue);
			},
			X = (re = !1) => {
				if (e.scrollspy) {
					const ue = v[b.currentIndex].$el;
					if (ue && g.value) {
						const E = yc(ue, g.value) - S.value;
						(a = !0),
							s && s(),
							(s = Vy(g.value, E, re ? 0 : +e.duration, () => {
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
					Qd(re)),
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
					const { top: ue } = Re(v[re].$el);
					if (ue > S.value) return re === 0 ? 0 : re - 1;
				}
				return v.length - 1;
			},
			ge = () => {
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
					de = [
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
				return Q ? d('div', { ref: u }, [de]) : de;
			},
			se = () => {
				I(),
					Te(() => {
						var re, ue;
						R(!0),
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
				() => v.length,
				() => {
					b.inited &&
						(B(e.active),
						I(),
						Te(() => {
							R(!0);
						}));
				},
			);
		const be = () => {
				B(e.active, !0),
					Te(() => {
						(b.inited = !0), u.value && (o = Re(u.value).height), R(!0);
					});
			},
			De = (re, ue) => t('rendered', re, ue);
		return (
			ke({ resize: se, scrollTo: F }),
			Jt(I),
			Yi(I),
			No(be),
			df(r, I),
			We('scroll', ge, { target: g, passive: !0 }),
			w({
				id: f,
				props: e,
				setLine: I,
				scrollable: C,
				onRendered: De,
				currentName: T,
				setTitleRefs: y,
				scrollIntoView: R,
			}),
			() =>
				d('div', { ref: r, class: Ha([e.type]) }, [
					e.showHeader
						? e.sticky
							? d(
									ff,
									{ container: r.value, offsetTop: A.value, onScroll: O },
									{ default: () => [ne()] },
								)
							: ne()
						: null,
					d(
						Ky,
						{
							ref: h,
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
const bf = Symbol(),
	Xy = () => gt(bf, null),
	[Zy, Oc] = U('tab'),
	Jy = j({
		name: Zy,
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
					const f = r ? c : u;
					return f && (a.color = f), a;
				}),
				o = () => {
					const a = d(
						'span',
						{ class: Oc('text', { ellipsis: !e.scrollable }) },
						[t.title ? t.title() : e.title],
					);
					return e.dot || ($e(e.badge) && e.badge !== '')
						? d(
								so,
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
							Oc([
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
	[Qy, e0] = U('swipe-item');
var t0 = j({
	name: Qy,
	setup(e, { slots: t }) {
		let n;
		const o = He({ offset: 0, inited: !1, mounted: !1 }),
			{ parent: a, index: i } = ot(gf);
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
				const h = a.activeIndicator.value,
					f = a.count.value - 1,
					g = h === 0 && c ? f : h - 1,
					m = h === f && c ? 0 : h + 1;
				return (n = i.value === h || i.value === g || i.value === m), n;
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
				return d('div', { class: e0(), style: l.value }, [
					s.value ? ((c = t.default) == null ? void 0 : c.call(t)) : null,
				]);
			}
		);
	},
});
const Xr = G(t0),
	[n0, wl] = U('tab'),
	o0 = he({}, Un, {
		dot: Boolean,
		name: q,
		badge: q,
		title: String,
		disabled: Boolean,
		titleClass: Fe,
		titleStyle: [String, Object],
		showZeroBadge: z,
	});
var a0 = j({
	name: n0,
	props: o0,
	setup(e, { slots: t }) {
		const n = Ho(),
			o = D(!1),
			a = Nt(),
			{ parent: i, index: l } = ot(vf);
		if (!i) return;
		const s = () => {
				var m;
				return (m = e.name) != null ? m : l.value;
			},
			r = () => {
				(o.value = !0),
					i.props.lazyRender &&
						Te(() => {
							i.onRendered(s(), e.title);
						});
			},
			c = L(() => {
				const m = s() === i.currentName.value;
				return m && !o.value && r(), m;
			}),
			u = D(''),
			h = D('');
		Do(() => {
			const { titleClass: m, titleStyle: y } = e;
			(u.value = m ? Ai(m) : ''),
				(h.value = y && typeof y != 'string' ? Ph(_a(y)) : y);
		});
		const f = m =>
				d(
					Jy,
					_e(
						{
							key: n,
							id: `${i.id}-${l.value}`,
							ref: i.setTitleRefs(l.value),
							style: h.value,
							class: u.value,
							isActive: c.value,
							controls: n,
							scrollable: i.scrollable.value,
							activeColor: i.props.titleActiveColor,
							inactiveColor: i.props.titleInactiveColor,
							onClick: y => m(a.proxy, l.value, y),
						},
						Ie(i.props, ['type', 'color', 'shrink']),
						Ie(e, ['dot', 'badge', 'title', 'disabled', 'showZeroBadge']),
					),
					{ title: t.title },
				),
			g = D(!c.value);
		return (
			ee(c, m => {
				m
					? (g.value = !1)
					: Bn(() => {
							g.value = !0;
						});
			}),
			ee(
				() => e.title,
				() => {
					i.setLine(), i.scrollIntoView();
				},
			),
			cn(bf, c),
			ke({ id: n, renderTitle: f }),
			() => {
				var m;
				const y = `${i.id}-${l.value}`,
					{ animated: v, swipeable: w, scrollspy: b, lazyRender: C } = i.props;
				if (!t.default && !v) return;
				const p = b || c.value;
				if (v || w)
					return d(
						Xr,
						{
							id: n,
							role: 'tabpanel',
							class: wl('panel-wrapper', { inactive: g.value }),
							tabindex: c.value ? 0 : -1,
							'aria-hidden': !c.value,
							'aria-labelledby': y,
						},
						{
							default: () => {
								var A;
								return [
									d('div', { class: wl('panel') }, [
										(A = t.default) == null ? void 0 : A.call(t),
									]),
								];
							},
						},
					);
				const T =
					o.value || b || !C
						? (m = t.default) == null
							? void 0
							: m.call(t)
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
const Ca = G(a0),
	Gi = G(Gy),
	[yf, xl] = U('picker-group'),
	pf = Symbol(yf),
	i0 = he({ tabs: Ve(), activeTab: ie(0), nextStepText: String }, qi);
var l0 = j({
	name: yf,
	props: i0,
	emits: ['confirm', 'cancel', 'update:activeTab'],
	setup(e, { emit: t, slots: n }) {
		const o = qr(
				() => e.activeTab,
				c => t('update:activeTab', c),
			),
			{ children: a, linkChildren: i } = rt(pf);
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
			let h =
				(u = (c = n.default) == null ? void 0 : c.call(n)) == null
					? void 0
					: u
							.filter(g => g.type !== pt)
							.map(g => (g.type === Je ? g.children : g));
			h && (h = rb(h));
			const f = l() ? e.nextStepText : e.confirmButtonText;
			return d('div', { class: xl() }, [
				d(
					uf,
					{
						title: e.title,
						cancelButtonText: e.cancelButtonText,
						confirmButtonText: f,
						onConfirm: s,
						onCancel: r,
					},
					Ie(n, cf),
				),
				d(
					Gi,
					{
						active: o.value,
						'onUpdate:active': g => (o.value = g),
						class: xl('tabs'),
						shrink: !0,
						animated: !0,
						lazyRender: !1,
					},
					{
						default: () => [
							e.tabs.map((g, m) =>
								d(
									Ca,
									{ title: g, titleClass: xl('tab-title') },
									{ default: () => [h == null ? void 0 : h[m]] },
								),
							),
						],
					},
				),
			]);
		};
	},
});
const Xi = he(
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
	r0 = he({}, Xi, {
		columns: Ve(),
		modelValue: Ve(),
		toolbarPosition: Z('top'),
		columnsFieldNames: Object,
	});
var s0 = j({
	name: $y,
	props: r0,
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
			{ parent: i } = ot(pf),
			{ children: l, linkChildren: s } = rt(sf);
		s();
		const r = L(() => Ay(e.columnsFieldNames)),
			c = L(() => jr(e.optionHeight)),
			u = L(() => Py(e.columns, r.value)),
			h = L(() => {
				const { columns: k } = e;
				switch (u.value) {
					case 'multiple':
						return k;
					case 'cascade':
						return Iy(k, r.value, a);
					default:
						return [k];
				}
			}),
			f = L(() => h.value.some(k => k.length)),
			g = L(() => h.value.map((k, $) => sr(k, a.value[$], r.value))),
			m = L(() =>
				h.value.map((k, $) =>
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
				selectedOptions: g.value,
				selectedIndexes: m.value,
			}),
			w = (k, $) => {
				y($, k),
					u.value === 'cascade' &&
						a.value.forEach((B, X) => {
							const V = h.value[X];
							Pc(V, B, r.value) ||
								y(X, V.length ? V[0][r.value.value] : void 0);
						}),
					Te(() => {
						t('change', he({ columnIndex: $ }, v()));
					});
			},
			b = (k, $) => {
				const B = { columnIndex: $, currentOption: k };
				t('clickOption', he(v(), B)), t('scrollInto', B);
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
				h.value.map((k, $) =>
					d(
						By,
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
				if (f.value) {
					const $ = { height: `${c.value}px` },
						B = { backgroundSize: `100% ${(k - c.value) / 2}px` };
					return [
						d('div', { class: rn('mask'), style: B }, null),
						d('div', { class: [Db, rn('frame')], style: $ }, null),
					];
				}
			},
			A = () => {
				const k = c.value * +e.visibleOptionNum,
					$ = { height: `${k}px` };
				return d('div', { ref: o, class: rn('columns'), style: $ }, [
					x(),
					T(k),
				]);
			},
			S = () => {
				if (e.showToolbar && !i)
					return d(uf, _e(Ie(e, My), { onConfirm: C, onCancel: p }), Ie(n, cf));
			};
		ee(
			h,
			k => {
				k.forEach(($, B) => {
					$.length && !Pc($, a.value[B], r.value) && y(B, lf($)[r.value.value]);
				});
			},
			{ immediate: !0 },
		);
		let R;
		return (
			ee(
				() => e.modelValue,
				k => {
					!Xt(k, a.value) &&
						!Xt(k, R) &&
						((a.value = k.slice(0)), (R = k.slice(0)));
				},
				{ deep: !0 },
			),
			ee(
				a,
				k => {
					Xt(k, e.modelValue) || ((R = k.slice(0)), t('update:modelValue', R));
				},
				{ immediate: !0 },
			),
			We('touchmove', Me, { target: o }),
			ke({ confirm: C, getSelectedOptions: () => g.value }),
			() => {
				var k, $;
				return d('div', { class: rn() }, [
					e.toolbarPosition === 'top' ? S() : null,
					e.loading ? d(Ft, { class: rn('loading') }, null) : null,
					(k = n['columns-top']) == null ? void 0 : k.call(n),
					A(),
					($ = n['columns-bottom']) == null ? void 0 : $.call(n),
					e.toolbarPosition === 'bottom' ? S() : null,
				]);
			}
		);
	},
});
const $o = '000000',
	c0 = [
		'title',
		'cancel',
		'confirm',
		'toolbar',
		'columns-top',
		'columns-bottom',
	],
	wf = [
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
function u0({ areaList: e, columnsNum: t, columnsPlaceholder: n }) {
	const { city_list: o = {}, county_list: a = {}, province_list: i = {} } = e,
		l = +t > 1,
		s = +t > 2,
		r = () => {
			if (l) return n.length ? [Tn(n[0], $o, s ? [] : void 0)] : [];
		},
		c = new Map();
	Object.keys(i).forEach(f => {
		c.set(f.slice(0, 2), Tn(i[f], f, r()));
	});
	const u = new Map();
	if (l) {
		const f = () => {
			if (s) return n.length ? [Tn(n[1])] : [];
		};
		Object.keys(o).forEach(g => {
			const m = Tn(o[g], g, f());
			u.set(g.slice(0, 4), m);
			const y = c.get(g.slice(0, 2));
			y && y.children.push(m);
		});
	}
	s &&
		Object.keys(a).forEach(f => {
			const g = u.get(f.slice(0, 4));
			g && g.children.push(Tn(a[f], f));
		});
	const h = Array.from(c.values());
	if (n.length) {
		const f = s ? [Tn(n[2])] : void 0,
			g = l ? [Tn(n[1], $o, f)] : void 0;
		h.unshift(Tn(n[0], $o, g));
	}
	return h;
}
const Zi = G(s0),
	[d0, f0] = U('area'),
	h0 = he({}, Ie(Xi, wf), {
		modelValue: String,
		columnsNum: ie(3),
		columnsPlaceholder: Ve(),
		areaList: { type: Object, default: () => ({}) },
	});
var g0 = j({
	name: d0,
	props: h0,
	emits: ['change', 'confirm', 'cancel', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D([]),
			a = D(),
			i = L(() => u0(e)),
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
							class: f0(),
							columns: i.value,
							onChange: l,
							onCancel: s,
							onConfirm: r,
						},
						Ie(e, wf),
					),
					Ie(n, c0),
				)
		);
	},
});
const xf = G(g0),
	[m0, fo] = U('cell'),
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
		valueClass: Fe,
		labelClass: Fe,
		titleClass: Fe,
		titleStyle: null,
		arrowDirection: String,
		required: { type: [Boolean, String], default: null },
		clickable: { type: Boolean, default: null },
	},
	v0 = he({}, Ji, Un);
var b0 = j({
	name: m0,
	props: v0,
	setup(e, { slots: t }) {
		const n = ro(),
			o = () => {
				if (t.label || $e(e.label))
					return d('div', { class: [fo('label'), e.labelClass] }, [
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
								{ class: [fo('title'), e.titleClass], style: e.titleStyle },
								[c || d('span', null, [e.title]), o()],
							);
				}
			},
			i = () => {
				const r = t.value || t.default;
				if (r || $e(e.value))
					return d('div', { class: [fo('value'), e.valueClass] }, [
						r ? r() : d('span', null, [e.value]),
					]);
			},
			l = () => {
				if (t.icon) return t.icon();
				if (e.icon)
					return d(
						Ce,
						{ name: e.icon, class: fo('left-icon'), classPrefix: e.iconPrefix },
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
					return d(Ce, { name: r, class: fo('right-icon') }, null);
				}
			};
		return () => {
			var r;
			const {
					tag: c,
					size: u,
					center: h,
					border: f,
					isLink: g,
					required: m,
				} = e,
				y = (r = e.clickable) != null ? r : g,
				v = { center: h, required: !!m, clickable: y, borderless: !f };
			return (
				u && (v[u] = !!u),
				d(
					c,
					{
						class: fo(v),
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
const Ht = G(b0),
	[y0, p0] = U('form'),
	w0 = {
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
var x0 = j({
	name: y0,
	props: w0,
	emits: ['submit', 'failed'],
	setup(e, { emit: t, slots: n }) {
		const { children: o, linkChildren: a } = rt(Kd),
			i = v => (v ? o.filter(w => v.includes(w.name)) : o),
			l = v =>
				new Promise((w, b) => {
					const C = [];
					i(v)
						.reduce(
							(x, T) =>
								x.then(() => {
									if (!C.length)
										return T.validate().then(A => {
											A && C.push(A);
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
			h = () =>
				o.reduce((v, w) => ((v[w.name] = w.getValidationStatus()), v), {}),
			f = (v, w) => {
				o.some(b => (b.name === v ? (b.$el.scrollIntoView(w), !0) : !1));
			},
			g = () =>
				o.reduce(
					(v, w) => (w.name !== void 0 && (v[w.name] = w.formValue.value), v),
					{},
				),
			m = () => {
				const v = g();
				c()
					.then(() => t('submit', v))
					.catch(w => {
						t('failed', { values: v, errors: w }),
							e.scrollToError && w[0].name && f(w[0].name);
					});
			},
			y = v => {
				Me(v), m();
			};
		return (
			a({ props: e }),
			ke({
				submit: m,
				validate: c,
				getValues: g,
				scrollToField: f,
				resetValidation: u,
				getValidationStatus: h,
			}),
			() => {
				var v;
				return d('form', { class: p0(), onSubmit: y }, [
					(v = n.default) == null ? void 0 : v.call(n),
				]);
			}
		);
	},
});
const Zr = G(x0);
function Sf(e) {
	return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function S0(e, t) {
	if (Sf(e)) {
		if (t.required) return !1;
		if (t.validateEmpty === !1) return !0;
	}
	return !(t.pattern && !t.pattern.test(String(e)));
}
function C0(e, t) {
	return new Promise(n => {
		const o = t.validator(e, t);
		if (Fr(o)) {
			o.then(n);
			return;
		}
		n(o);
	});
}
function Bc(e, t) {
	const { message: n } = t;
	return Oo(n) ? n(e, t) : n || '';
}
function T0({ target: e }) {
	e.composing = !0;
}
function Dc({ target: e }) {
	e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
function _0(e, t) {
	const n = $a();
	e.style.height = 'auto';
	let o = e.scrollHeight;
	if (fn(t)) {
		const { maxHeight: a, minHeight: i } = t;
		a !== void 0 && (o = Math.min(o, a)), i !== void 0 && (o = Math.max(o, i));
	}
	o && ((e.style.height = `${o}px`), Wi(n));
}
function k0(e) {
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
const [E0, St] = U('field'),
	Jr = {
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
	$0 = he({}, Ji, Jr, {
		rows: q,
		type: Z('text'),
		rules: Array,
		autosize: [Boolean, Object],
		labelWidth: q,
		labelClass: Fe,
		labelAlign: String,
		showWordLimit: Boolean,
		errorMessageAlign: String,
		colon: { type: Boolean, default: null },
	});
var P0 = j({
	name: E0,
	props: $0,
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
			{ parent: r } = ot(Kd),
			c = () => {
				var E;
				return String((E = e.modelValue) != null ? E : '');
			},
			u = E => {
				if ($e(e[E])) return e[E];
				if (r && $e(r.props[E])) return r.props[E];
			},
			h = L(() => {
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
			f = L(() => (s.value && n.input ? s.value() : e.modelValue)),
			g = L(() => {
				var E;
				const H = u('required');
				return H === 'auto'
					? (E = e.rules) == null
						? void 0
						: E.some(N => N.required)
					: H;
			}),
			m = E =>
				E.reduce(
					(H, N) =>
						H.then(() => {
							if (a.status === 'failed') return;
							let { value: Q } = f;
							if ((N.formatter && (Q = N.formatter(Q, N)), !S0(Q, N))) {
								(a.status = 'failed'), (a.validateMessage = Bc(Q, N));
								return;
							}
							if (N.validator)
								return Sf(Q) && N.validateEmpty === !1
									? void 0
									: C0(Q, N).then(de => {
											de && typeof de == 'string'
												? ((a.status = 'failed'), (a.validateMessage = de))
												: de === !1 &&
													((a.status = 'failed'),
													(a.validateMessage = Bc(Q, N)));
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
								m(E).then(() => {
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
						Q = e.rules.filter(de =>
							de.trigger ? wi(de.trigger).includes(E) : N,
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
					const de = (H = i.value) == null ? void 0 : H.selectionEnd;
					if (a.focused && de) {
						const xe = [...E],
							_ = xe.length - +N;
						return xe.splice(de - _, _), xe.join('');
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
				let de = 0;
				if (e.formatter && H === e.formatTrigger) {
					const { formatter: xe, maxlength: _ } = e;
					if (
						((E = xe(E)),
						$e(_) && nn(E) > +_ && (E = Sl(E, +_)),
						i.value && a.focused)
					) {
						const { selectionEnd: P } = i.value,
							M = Sl(N, P);
						de = nn(xe(M)) - nn(M);
					}
				}
				if (i.value && i.value.value !== E)
					if (a.focused) {
						let { selectionStart: xe, selectionEnd: _ } = i.value;
						if (((i.value.value = E), $e(xe) && $e(_))) {
							const P = nn(E);
							Q ? ((xe -= Q), (_ -= Q)) : de && ((xe += de), (_ += de)),
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
			A = () => {
				var E;
				return (E = i.value) == null ? void 0 : E.focus();
			},
			S = () => {
				const E = i.value;
				e.type === 'textarea' && e.autosize && E && _0(E, e.autosize);
			},
			R = E => {
				(a.focused = !0), t('focus', E), Te(S), u('readonly') && T();
			},
			I = E => {
				(a.focused = !1),
					p(c(), 'onBlur'),
					t('blur', E),
					!u('readonly') && (b('onBlur'), Te(S), Fd());
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
			ge = () => a.status,
			ve = () => {
				const E = St('control', [
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
					onFocus: R,
					onInput: x,
					onClick: k,
					onChange: Dc,
					onKeypress: F,
					onCompositionend: Dc,
					onCompositionstart: T0,
				};
				return e.type === 'textarea'
					? d('textarea', H, null)
					: d('input', _e(k0(e.type), H), null);
			},
			ne = () => {
				const E = n['left-icon'];
				if (e.leftIcon || E)
					return d('div', { class: St('left-icon'), onClick: $ }, [
						E
							? E()
							: d(Ce, { name: e.leftIcon, classPrefix: e.iconPrefix }, null),
					]);
			},
			se = () => {
				const E = n['right-icon'];
				if (e.rightIcon || E)
					return d('div', { class: St('right-icon'), onClick: B }, [
						E
							? E()
							: d(Ce, { name: e.rightIcon, classPrefix: e.iconPrefix }, null),
					]);
			},
			be = () => {
				if (e.showWordLimit && e.maxlength) {
					const E = nn(c());
					return d('div', { class: St('word-limit') }, [
						d('span', { class: St('word-num') }, [E]),
						to('/'),
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
					return d('div', { class: St('error-message', N) }, [
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
								Me(Q), A();
							},
							style: H === 'top' && E ? { width: we(E) } : void 0,
						},
						[e.label + N],
					);
			},
			ue = () => [
				d('div', { class: St('body') }, [
					ve(),
					h.value &&
						d(Ce, { ref: l, name: e.clearIcon, class: St('clear') }, null),
					se(),
					n.button && d('div', { class: St('button') }, [n.button()]),
				]),
				be(),
				De(),
			];
		return (
			ke({
				blur: T,
				focus: A,
				validate: w,
				formValue: f,
				resetValidation: y,
				getValidationStatus: ge,
			}),
			cn(Nd, { customValue: s, resetValidation: y, validateWithTrigger: b }),
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
						const de = re();
						return H === 'top' ? [N, de].filter(Boolean) : de || [];
					};
				return d(
					Ht,
					{
						size: e.size,
						class: St({ error: V.value, disabled: E, [`label-${H}`]: H }),
						center: e.center,
						border: e.border,
						isLink: e.isLink,
						clickable: e.clickable,
						titleStyle: O.value,
						valueClass: St('value'),
						titleClass: [St('label', [H, { required: g.value }]), e.labelClass],
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
const un = G(P0);
let Go = 0;
function I0(e) {
	e
		? (Go || document.body.classList.add('van-toast--unclickable'), Go++)
		: Go &&
			(Go--, Go || document.body.classList.remove('van-toast--unclickable'));
}
const [R0, ho] = U('toast'),
	A0 = [
		'show',
		'overlay',
		'teleport',
		'transition',
		'overlayClass',
		'overlayStyle',
		'closeOnClickOverlay',
		'zIndex',
	],
	O0 = {
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
		className: Fe,
		iconPrefix: String,
		transition: Z('van-fade'),
		loadingType: String,
		forbidClick: Boolean,
		overlayClass: Fe,
		overlayStyle: Object,
		closeOnClick: Boolean,
		closeOnClickOverlay: Boolean,
		zIndex: q,
	};
var Cf = j({
	name: R0,
	props: O0,
	emits: ['update:show'],
	setup(e, { emit: t, slots: n }) {
		let o,
			a = !1;
		const i = () => {
				const h = e.show && e.forbidClick;
				a !== h && ((a = h), I0(a));
			},
			l = h => t('update:show', h),
			s = () => {
				e.closeOnClick && l(!1);
			},
			r = () => clearTimeout(o),
			c = () => {
				const {
					icon: h,
					type: f,
					iconSize: g,
					iconPrefix: m,
					loadingType: y,
				} = e;
				if (h || f === 'success' || f === 'fail')
					return d(
						Ce,
						{ name: h || f, size: g, class: ho('icon'), classPrefix: m },
						null,
					);
				if (f === 'loading')
					return d(Ft, { class: ho('loading'), size: g, type: y }, null);
			},
			u = () => {
				const { type: h, message: f } = e;
				if (n.message) return d('div', { class: ho('text') }, [n.message()]);
				if ($e(f) && f !== '')
					return h === 'html'
						? d(
								'div',
								{ key: 0, class: ho('text'), innerHTML: String(f) },
								null,
							)
						: d('div', { class: ho('text') }, [f]);
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
								ho([
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
						Ie(e, A0),
					),
					{ default: () => [c(), u()] },
				)
		);
	},
});
function Tf() {
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
function _f(e) {
	const t = Sd(e),
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
const B0 = {
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
	D0 = !1,
	Mc = he({}, B0);
const M0 = new Map();
function L0(e) {
	return fn(e) ? e : { message: e };
}
function V0() {
	const { instance: e, unmount: t } = _f({
		setup() {
			const n = D(''),
				{ open: o, state: a, close: i, toggle: l } = Tf(),
				s = () => {},
				r = () => d(Cf, _e(a, { onClosed: s, 'onUpdate:show': l }), null);
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
function N0() {
	if (!ja.length || D0) {
		const e = V0();
		ja.push(e);
	}
	return ja[ja.length - 1];
}
function cr(e = {}) {
	if (!kt) return {};
	const t = N0(),
		n = L0(e);
	return t.open(he({}, Mc, M0.get(n.type || Mc.type), n)), t;
}
const F0 = G(Cf),
	[z0, Cl] = U('switch'),
	H0 = {
		size: q,
		loading: Boolean,
		disabled: Boolean,
		modelValue: Fe,
		activeColor: String,
		inactiveColor: String,
		activeValue: { type: Fe, default: !0 },
		inactiveValue: { type: Fe, default: !1 },
	};
var j0 = j({
	name: z0,
	props: H0,
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
						inactiveColor: h,
					} = e,
					f = o(),
					g = { fontSize: we(s), backgroundColor: f ? u : h };
				return d(
					'div',
					{
						role: 'switch',
						class: Cl({ on: f, loading: r, disabled: c }),
						style: g,
						tabindex: c ? void 0 : 0,
						'aria-checked': f,
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
const Qr = G(j0),
	[W0, Lc] = U('address-edit-detail'),
	Vc = U('address-edit')[2];
var U0 = j({
	name: W0,
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
							class: Lc('search-item'),
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
							class: Lc(),
							rows: e.rows,
							type: 'textarea',
							rules: e.rules,
							label: Vc('addressDetail'),
							border: !o(),
							maxlength: e.maxlength,
							modelValue: e.value,
							placeholder: Vc('addressDetail'),
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
const [Y0, go, st] = U('address-edit'),
	kf = {
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
	K0 = {
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
		areaColumnsPlaceholder: Ve(),
		addressInfo: { type: Object, default: () => he({}, kf) },
		telValidator: { type: Function, default: Md },
	};
var q0 = j({
	name: Y0,
	props: K0,
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
				const { province: T, city: A, county: S, areaCode: R } = a;
				if (R) {
					const I = [T, A, S];
					return T && T === A && I.splice(1, 1), I.filter(Boolean).join('/');
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
			h = (T, A) => {
				t('change', { key: T, value: A });
			},
			f = L(() => {
				const { validator: T, telValidator: A } = e,
					S = (R, I) => ({
						validator: k => {
							if (T) {
								const $ = T(R, k);
								if ($) return $;
							}
							return k ? !0 : I;
						},
					});
				return {
					name: [S('name', st('nameEmpty'))],
					tel: [
						S('tel', st('telInvalid')),
						{ validator: A, message: st('telInvalid') },
					],
					areaCode: [S('areaCode', st('areaEmpty'))],
					addressDetail: [S('addressDetail', st('addressEmpty'))],
				};
			}),
			g = () => t('save', a),
			m = T => {
				(a.addressDetail = T), t('changeDetail', T);
			},
			y = T => {
				(a.province = T[0].text), (a.city = T[1].text), (a.county = T[2].text);
			},
			v = ({ selectedValues: T, selectedOptions: A }) => {
				T.some(S => S === $o)
					? cr(st('areaEmpty'))
					: ((i.value = !1), y(A), t('changeArea', A));
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
								Qr,
								{
									modelValue: a.isDefault,
									'onUpdate:modelValue': A => (a.isDefault = A),
									onChange: A => t('changeDefault', A),
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
					he(a, kf, T),
						Te(() => {
							var A;
							const S = (A = o.value) == null ? void 0 : A.getSelectedOptions();
							S && S.every(R => R && R.value !== $o) && y(S);
						});
				},
				{ deep: !0, immediate: !0 },
			),
			() => {
				const { disableArea: T } = e;
				return d(
					Zr,
					{ class: go(), onSubmit: g },
					{
						default: () => {
							var A;
							return [
								d('div', { class: go('fields') }, [
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
													t('clickArea'), (i.value = !T);
												},
											},
											null,
										),
										[[nt, e.showArea]],
									),
									d(
										U0,
										{
											show: e.showDetail,
											rows: e.detailRows,
											rules: f.value.addressDetail,
											value: a.addressDetail,
											focused: l.value,
											maxlength: e.detailMaxlength,
											searchResult: e.searchResult,
											showSearchResult: e.showSearchResult,
											onBlur: C,
											onFocus: () => u('addressDetail'),
											onInput: m,
											onSelectSearch: S => t('selectSearch', S),
										},
										null,
									),
									(A = n.default) == null ? void 0 : A.call(n),
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
												xf,
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
const G0 = G(q0),
	[Ef, X0] = U('radio-group'),
	Z0 = {
		shape: String,
		disabled: Boolean,
		iconSize: q,
		direction: String,
		modelValue: Fe,
		checkedColor: String,
	},
	$f = Symbol(Ef);
var J0 = j({
	name: Ef,
	props: Z0,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt($f),
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
				return d('div', { class: X0([e.direction]), role: 'radiogroup' }, [
					(i = n.default) == null ? void 0 : i.call(n),
				]);
			}
		);
	},
});
const es = G(J0),
	[Q0, Nc] = U('tag'),
	ep = {
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
var tp = j({
	name: Q0,
	props: ep,
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
						size: h,
						closeable: f,
					} = e,
					g = { mark: r, plain: c, round: u };
				h && (g[h] = h);
				const m =
					f &&
					d(Ce, { name: 'cross', class: [Nc('close'), vt], onClick: o }, null);
				return d('span', { style: a(), class: Nc([g, s]) }, [
					(l = t.default) == null ? void 0 : l.call(t),
					m,
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
const Qi = G(tp),
	ts = {
		name: Fe,
		disabled: Boolean,
		iconSize: q,
		modelValue: Fe,
		checkedColor: String,
		labelPosition: String,
		labelDisabled: Boolean,
	};
var Pf = j({
	props: he({}, ts, {
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
			i = L(() => {
				if (e.parent && e.bindGroup) {
					const f = a('disabled') || e.disabled;
					if (e.role === 'checkbox') {
						const g = a('modelValue').length,
							m = a('max'),
							y = m && g >= +m;
						return f || (y && !e.checked);
					}
					return f;
				}
				return e.disabled;
			}),
			l = L(() => a('direction')),
			s = L(() => {
				const f = e.checkedColor || a('checkedColor');
				if (f && e.checked && !i.value)
					return { borderColor: f, backgroundColor: f };
			}),
			r = L(() => e.shape || a('shape') || 'round'),
			c = f => {
				const { target: g } = f,
					m = o.value,
					y = m === g || (m == null ? void 0 : m.contains(g));
				!i.value && (y || !e.labelDisabled) && t('toggle'), t('click', f);
			},
			u = () => {
				var f, g;
				const { bem: m, checked: y, indeterminate: v } = e,
					w = e.iconSize || a('iconSize');
				return d(
					'div',
					{
						ref: o,
						class: m('icon', [
							r.value,
							{ disabled: i.value, checked: y, indeterminate: v },
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
							? n.icon({ checked: y, disabled: i.value })
							: r.value !== 'dot'
								? d(Ce, { name: v ? 'minus' : 'success', style: s.value }, null)
								: d(
										'div',
										{
											class: m('icon--dot__icon'),
											style: {
												backgroundColor:
													(g = s.value) == null ? void 0 : g.backgroundColor,
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
						{ class: e.bem('label', [e.labelPosition, { disabled: i.value }]) },
						[n.default({ checked: f, disabled: i.value })],
					);
			};
		return () => {
			const f = e.labelPosition === 'left' ? [h(), u()] : [u(), h()];
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
				[f],
			);
		};
	},
});
const np = he({}, ts, { shape: String }),
	[op, ap] = U('radio');
var ip = j({
	name: op,
	props: np,
	emits: ['update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { parent: o } = ot($f),
			a = () => (o ? o.props.modelValue : e.modelValue) === e.name,
			i = () => {
				o ? o.updateValue(e.name) : t('update:modelValue', e.name);
			};
		return () =>
			d(
				Pf,
				_e({ bem: ap, role: 'radio', parent: o, checked: a(), onToggle: i }, e),
				Ie(n, ['default', 'icon']),
			);
	},
});
const ns = G(ip),
	[lp, mo] = U('address-item');
var rp = j({
	name: lp,
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
			i = () => {
				if (t.tag) return t.tag(e.address);
				if (e.address.isDefault && e.defaultTagText)
					return d(
						Qi,
						{ type: 'primary', round: !0, class: mo('tag') },
						{ default: () => [e.defaultTagText] },
					);
			},
			l = () => {
				const { address: s, disabled: r, switchable: c } = e,
					u = [
						d('div', { class: mo('name') }, [`${s.name} ${s.tel}`, i()]),
						d('div', { class: mo('address') }, [s.address]),
					];
				return c && !r
					? d(ns, { name: s.id, iconSize: 18 }, { default: () => [u] })
					: u;
			};
		return () => {
			var s;
			const { disabled: r } = e;
			return d('div', { class: mo({ disabled: r }), onClick: o }, [
				d(
					Ht,
					{ border: !1, titleClass: mo('title') },
					{ title: l, 'right-icon': a },
				),
				(s = t.bottom) == null
					? void 0
					: s.call(t, he({}, e.address, { disabled: r })),
			]);
		};
	},
});
const [sp, Wa, cp] = U('address-list'),
	up = {
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
var dp = j({
	name: sp,
	props: up,
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
					u = f => n('clickItem', l, s, { event: f }),
					h = () => {
						n(r ? 'selectDisabled' : 'select', l, s),
							r || n('update:modelValue', l.id);
					};
				return d(
					rp,
					{
						key: l.id,
						address: l,
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
									text: e.addButtonText || cp('add'),
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
				d(es, { modelValue: e.modelValue }, { default: () => [r] }),
				u,
				c,
				(s = t.default) == null ? void 0 : s.call(t),
				i(),
			]);
		};
	},
});
const fp = G(dp);
function hp(e, t) {
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
const [gp, Tl] = U('back-top'),
	mp = {
		right: q,
		bottom: q,
		zIndex: q,
		target: [String, Object],
		offset: ie(200),
		immediate: Boolean,
		teleport: { type: [String, Object], default: 'body' },
	};
var vp = j({
	name: gp,
	inheritAttrs: !1,
	props: mp,
	emits: ['click'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		let a = !1;
		const i = D(!1),
			l = D(),
			s = D(),
			r = L(() =>
				he(yn(e.zIndex), { right: we(e.right), bottom: we(e.bottom) }),
			),
			c = g => {
				var m;
				t('click', g),
					(m = s.value) == null ||
						m.scrollTo({ top: 0, behavior: e.immediate ? 'auto' : 'smooth' });
			},
			u = () => {
				i.value = s.value ? hn(s.value) >= +e.offset : !1;
			},
			h = () => {
				const { target: g } = e;
				if (typeof g == 'string') {
					const m = document.querySelector(g);
					if (m) return m;
				} else return g;
			},
			f = () => {
				kt &&
					Te(() => {
						(s.value = e.target ? h() : zr(l.value)), u();
					});
			};
		return (
			We('scroll', hp(u, 100), { target: s }),
			Ue(f),
			Jt(() => {
				a && ((i.value = !0), (a = !1));
			}),
			Qt(() => {
				i.value && e.teleport && ((i.value = !1), (a = !0));
			}),
			ee(() => e.target, f),
			() => {
				const g = d(
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
							d(Lo, { to: e.teleport }, { default: () => [g] }),
						]
					: g;
			}
		);
	},
});
const bp = G(vp);
var yp = (e, t, n) =>
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
const pp = {
		top: ie(10),
		rows: ie(4),
		duration: ie(4e3),
		autoPlay: z,
		delay: Ke(300),
		modelValue: Ve(),
	},
	[wp, Fc] = U('barrage');
var xp = j({
	name: wp,
	props: pp,
	emits: ['update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Fc('item'),
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
			h = (y, v) => {
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
			(y, v) => h(y ?? [], v ?? []),
			{ deep: !0 },
		);
		const f = D({});
		return (
			Ue(() =>
				yp(this, null, function* () {
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
				return d('div', { class: Fc(), ref: o, style: f.value }, [
					(y = n.default) == null ? void 0 : y.call(n),
				]);
			}
		);
	},
});
const Sp = G(xp),
	[Cp, Xe, dn] = U('calendar'),
	Tp = e => dn('monthTitle', e.getFullYear(), e.getMonth() + 1);
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
	zc = e => (Array.isArray(e) ? e.map(Ti) : Ti(e));
function os(e, t) {
	const n = Ti(e);
	return n.setDate(n.getDate() + t), n;
}
const dr = e => os(e, -1),
	If = e => os(e, 1),
	fr = () => {
		const e = new Date();
		return e.setHours(0, 0, 0, 0), e;
	};
function _p(e) {
	const t = e[0].getTime();
	return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1;
}
const Rf = he({}, Xi, {
		modelValue: Ve(),
		filter: Function,
		formatter: { type: Function, default: (e, t) => t },
	}),
	Af = Object.keys(Xi);
function kp(e, t) {
	if (e < 0) return [];
	const n = Array(e);
	let o = -1;
	for (; ++o < e; ) n[o] = t(o);
	return n;
}
const Of = (e, t) => 32 - new Date(e, t - 1, 32).getDate(),
	Po = (e, t, n, o, a, i) => {
		const l = kp(t - e + 1, s => {
			const r = Ot(e + s);
			return o(n, { text: r, value: r });
		});
		return a ? a(n, l, i) : l;
	},
	Bf = (e, t) =>
		e.map((n, o) => {
			const a = t[o];
			if (a.length) {
				const i = +a[0].value,
					l = +a[a.length - 1].value;
				return Ot(et(+n, i, l));
			}
			return n;
		}),
	[Ep] = U('calendar-day');
var $p = j({
	name: Ep,
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
				const { item: c, index: u, color: h, offset: f, rowHeight: g } = e,
					m = { height: g };
				if (c.type === 'placeholder') return (m.width = '100%'), m;
				if ((u === 0 && (m.marginLeft = `${(100 * f) / 7}%`), h))
					switch (c.type) {
						case 'end':
						case 'start':
						case 'start-end':
						case 'multiple-middle':
						case 'multiple-selected':
							m.background = h;
							break;
						case 'middle':
							m.color = h;
							break;
					}
				return (
					f + (((r = c.date) == null ? void 0 : r.getDate()) || 1) > 28 &&
						(m.marginBottom = 0),
					m
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
					{ type: h, text: f } = r,
					g = [i(), f, l()];
				return h === 'selected'
					? d(
							'div',
							{
								class: Xe('selected-day'),
								style: { width: u, height: u, background: c },
							},
							[g],
						)
					: g;
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
const [Pp] = U('calendar-month'),
	Ip = {
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
var Rp = j({
	name: Pp,
	props: Ip,
	emits: ['click', 'clickDisabledDate'],
	setup(e, { emit: t, slots: n }) {
		const [o, a] = cb(),
			i = D(),
			l = D(),
			s = Xd(l),
			r = L(() => Tp(e.date)),
			c = L(() => we(e.rowHeight)),
			u = L(() => {
				const I = e.date.getDay();
				return e.firstDayOfWeek ? (I + 7 - e.firstDayOfWeek) % 7 : I;
			}),
			h = L(() => Of(e.date.getFullYear(), e.date.getMonth() + 1)),
			f = L(() => o.value || !e.lazyRender),
			g = () => r.value,
			m = I => {
				const k = $ => e.currentDate.some(B => yt(B, $) === 0);
				if (k(I)) {
					const $ = dr(I),
						B = If(I),
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
					if (k === 'multiple') return m(I);
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
					$ = e.date.getMonth();
				for (let B = 1; B <= h.value; B++) {
					const X = new Date(k, $, B),
						V = v(X);
					let O = { date: X, type: V, text: B, bottomInfo: w(V) };
					e.formatter && (O = e.formatter(O)), I.push(O);
				}
				return I;
			}),
			T = L(() => x.value.filter(I => I.type === 'disabled')),
			A = (I, k) => {
				if (i.value) {
					const $ = Re(i.value),
						B = p.value.length,
						V = ((Math.ceil((k.getDate() + u.value) / 7) - 1) * $.height) / B;
					xi(I, $.top + V + I.scrollTop - Re(I).top);
				}
			},
			S = (I, k) =>
				d(
					$p,
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
			R = () =>
				d('div', { ref: i, role: 'grid', class: Xe('days') }, [
					C(),
					(f.value ? x : p).value.map(S),
				]);
		return (
			ke({
				getTitle: g,
				getHeight: () => s.value,
				setVisible: a,
				scrollToDate: A,
				disabledDays: T,
			}),
			() => d('div', { class: Xe('month'), ref: l }, [b(), R()])
		);
	},
});
const [Ap] = U('calendar-header');
var Op = j({
	name: Ap,
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
const Bp = {
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
var Dp = j({
	name: Cp,
	props: Bp,
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
				const { type: O, minDate: F, maxDate: Y, allowSameDay: ge } = e;
				if (V === null) return V;
				const ve = fr();
				if (O === 'range') {
					Array.isArray(V) || (V = []);
					const ne = o(V[0] || ve, F, ge ? Y : dr(Y)),
						se = o(V[1] || ve, ge ? F : If(F));
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
			h = L(() => (e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)),
			f = L(() => {
				const V = [],
					O = new Date(e.minDate);
				O.setDate(1);
				do V.push(new Date(O)), O.setMonth(O.getMonth() + 1);
				while (ur(O, e.maxDate) !== 1);
				return V;
			}),
			g = L(() => {
				if (r.value) {
					if (e.type === 'range') return !r.value[0] || !r.value[1];
					if (e.type === 'multiple') return !r.value.length;
				}
				return !r.value;
			}),
			m = () => r.value,
			y = () => {
				const V = hn(l.value),
					O = V + i,
					F = f.value.map((se, be) => c.value[be].getHeight()),
					Y = F.reduce((se, be) => se + be, 0);
				if (O > Y && V > 0) return;
				let ge = 0,
					ve;
				const ne = [-1, -1];
				for (let se = 0; se < f.value.length; se++) {
					const be = c.value[se];
					ge <= O &&
						ge + F[se] >= V &&
						((ne[1] = se),
						ve || ((ve = be), (ne[0] = se)),
						c.value[se].showed ||
							((c.value[se].showed = !0),
							t('monthShow', { date: be.date, title: be.getTitle() }))),
						(ge += F[se]);
				}
				f.value.forEach((se, be) => {
					const De = be >= ne[0] - 1 && be <= ne[1] + 1;
					c.value[be].setVisible(De);
				}),
					ve && (s.value = { textFn: ve.getTitle, date: ve.date });
			},
			v = V => {
				it(() => {
					f.value.some((O, F) =>
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
						i = Math.floor(Re(l).height);
					}),
					w());
			},
			C = (V = a()) => {
				(r.value = V), w();
			},
			p = V => {
				const { maxRange: O, rangePrompt: F, showRangePrompt: Y } = e;
				return O && _p(V) > +O
					? (Y && cr(F || dn('rangePrompt', O)), t('overRange'), !1)
					: !0;
			},
			x = () => {
				var V;
				return t('confirm', (V = r.value) != null ? V : zc(r.value));
			},
			T = (V, O) => {
				const F = Y => {
					(r.value = Y), t('select', zc(Y));
				};
				if (O && e.type === 'range' && !p(V)) {
					F([V[0], os(V[0], +e.maxRange - 1)]);
					return;
				}
				F(V), O && !e.showConfirm && x();
			},
			A = (V, O, F) => {
				var Y;
				return (Y = V.find(
					ge => yt(O, ge.date) === -1 && yt(ge.date, F) === -1,
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
			R = V => {
				if (e.readonly || !V.date) return;
				const { date: O } = V,
					{ type: F } = e;
				if (F === 'range') {
					if (!r.value) {
						T([O]);
						return;
					}
					const [Y, ge] = r.value;
					if (Y && !ge) {
						const ve = yt(O, Y);
						if (ve === 1) {
							const ne = A(S.value, Y, O);
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
						ge = Y.findIndex(ve => yt(ve, O) === 0);
					if (ge !== -1) {
						const [ve] = Y.splice(ge, 1);
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
					Rp,
					_e(
						{
							ref: u(O),
							date: V,
							currentDate: r.value,
							showMonthTitle: F,
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
						{ onClick: R, onClickDisabledDate: Y => t('clickDisabledDate', Y) },
					),
					Ie(n, ['top-info', 'bottom-info', 'month-title']),
				);
			},
			$ = () => {
				if (n.footer) return n.footer();
				if (e.showConfirm) {
					const V = n['confirm-text'],
						O = g.value,
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
						Op,
						{
							date: s.value.date,
							title: e.title,
							subtitle: V,
							showTitle: e.showTitle,
							showSubtitle: e.showSubtitle,
							firstDayOfWeek: h.value,
							onClickSubtitle: O => t('clickSubtitle', O),
						},
						Ie(n, ['title', 'subtitle']),
					),
					d('div', { ref: l, class: Xe('body'), onScroll: y }, [
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
			ke({ reset: C, scrollToDate: v, getSelectedDate: m }),
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
const Mp = G(Dp),
	[Lp, vo] = U('image'),
	Vp = {
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
var Np = j({
	name: Lp,
	props: Vp,
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
			h = (v, w, b) =>
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
			g = () => {
				if (o.value || !e.src) return;
				const v = {
					alt: e.alt,
					class: vo('img'),
					style: { objectFit: e.fit, objectPosition: e.position },
					crossorigin: e.crossorigin,
					referrerpolicy: e.referrerpolicy,
				};
				return e.lazyLoad
					? Qe(d('img', _e({ ref: i }, v), null), [[yg('lazy'), e.src]])
					: d(
							'img',
							_e({ ref: i, src: e.src, onLoad: r, onError: u }, v),
							null,
						);
			},
			m = ({ el: v }) => {
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
				kt &&
				(l.$on('loaded', m),
				l.$on('error', y),
				en(() => {
					l.$off('loaded', m), l.$off('error', y);
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
					{ class: vo({ round: e.round, block: e.block }), style: s.value },
					[g(), f(), (v = n.default) == null ? void 0 : v.call(n)],
				);
			}
		);
	},
});
const el = G(Np),
	[Fp, ct] = U('card'),
	zp = {
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
var Hp = j({
	name: Fp,
	props: zp,
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
					to('.'),
					d('span', { class: ct('price-decimal') }, [c[1]]),
				]);
			};
		return () => {
			var c, u, h;
			const f = t.num || $e(e.num),
				g = t.price || $e(e.price),
				m = t['origin-price'] || $e(e.originPrice),
				y = f || g || m || t.bottom,
				v = g && d('div', { class: ct('price') }, [t.price ? t.price() : r()]),
				w =
					m &&
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
const jp = G(Hp),
	[Wp, on, Up] = U('cascader'),
	Yp = {
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
var Kp = j({
	name: Wp,
	props: Yp,
	emits: ['close', 'change', 'finish', 'clickTab', 'update:modelValue'],
	setup(e, { slots: t, emit: n }) {
		const o = D([]),
			a = D(0),
			[i, l] = Pa(),
			{
				text: s,
				value: r,
				children: c,
			} = he(
				{ text: 'text', value: 'value', children: 'children' },
				e.fieldNames,
			),
			u = (x, T) => {
				for (const A of x) {
					if (A[r] === T) return [A];
					if (A[c]) {
						const S = u(A[c], T);
						if (S) return [A, ...S];
					}
				}
			},
			h = () => {
				const { options: x, modelValue: T } = e;
				if (T !== void 0) {
					const A = u(x, T);
					if (A) {
						let S = x;
						(o.value = A.map(R => {
							const I = { options: S, selected: R },
								k = S.find($ => $[r] === R[r]);
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
					const R = { options: x[c], selected: null };
					o.value[T + 1] ? (o.value[T + 1] = R) : o.value.push(R),
						Te(() => {
							a.value++;
						});
				}
				const A = o.value.map(R => R.selected).filter(Boolean);
				n('update:modelValue', x[r]);
				const S = { value: x[r], tabIndex: T, selectedOptions: A };
				n('change', S), x[c] || n('finish', S);
			},
			g = () => n('close'),
			m = ({ name: x, title: T }) => n('clickTab', x, T),
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
											onClick: g,
										},
										null,
									)
								: null,
						])
					: null,
			v = (x, T, A) => {
				const { disabled: S } = x,
					R = !!(T && x[r] === T[r]),
					I = x.color || (R ? e.activeColor : void 0),
					k = t.option
						? t.option({ option: x, selected: R })
						: d('span', null, [x[s]]);
				return d(
					'li',
					{
						ref: R ? l(A) : void 0,
						role: 'menuitemradio',
						class: [on('option', { selected: R, disabled: S }), x.className],
						style: { color: I },
						tabindex: S ? void 0 : R ? 0 : -1,
						'aria-checked': R,
						'aria-disabled': S || void 0,
						onClick: () => f(x, A),
					},
					[
						k,
						R
							? d(Ce, { name: 'success', class: on('selected-icon') }, null)
							: null,
					],
				);
			},
			w = (x, T, A) =>
				d('ul', { role: 'menu', class: on('options') }, [
					x.map(S => v(S, T, A)),
				]),
			b = (x, T) => {
				const { options: A, selected: S } = x,
					R = e.placeholder || Up('select'),
					I = S ? S[s] : R;
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
								w(A, S, T),
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
						onClickTab: m,
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
				const T = i.value[x];
				T && p(T);
			}),
			ee(() => e.options, h, { deep: !0 }),
			ee(
				() => e.modelValue,
				x => {
					(x !== void 0 &&
						o.value
							.map(A => {
								var S;
								return (S = A.selected) == null ? void 0 : S[r];
							})
							.includes(x)) ||
						h();
				},
			),
			() => d('div', { class: on() }, [y(), C()])
		);
	},
});
const qp = G(Kp),
	[Gp, Hc] = U('cell-group'),
	Xp = { title: String, inset: Boolean, border: z };
var Zp = j({
	name: Gp,
	inheritAttrs: !1,
	props: Xp,
	setup(e, { slots: t, attrs: n }) {
		const o = () => {
				var i;
				return d(
					'div',
					_e(
						{ class: [Hc({ inset: e.inset }), { [Ui]: e.border && !e.inset }] },
						n,
						Ci(),
					),
					[(i = t.default) == null ? void 0 : i.call(t)],
				);
			},
			a = () =>
				d('div', { class: Hc('title', { inset: e.inset }) }, [
					t.title ? t.title() : e.title,
				]);
		return () => (e.title || t.title ? d(Je, null, [a(), o()]) : o());
	},
});
const Jp = G(Zp),
	[Df, Qp] = U('checkbox-group'),
	ew = {
		max: q,
		shape: Z('round'),
		disabled: Boolean,
		iconSize: q,
		direction: String,
		modelValue: Ve(),
		checkedColor: String,
	},
	Mf = Symbol(Df);
var tw = j({
	name: Df,
	props: ew,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { children: o, linkChildren: a } = rt(Mf),
			i = s => t('update:modelValue', s),
			l = (s = {}) => {
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
				i(h);
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
				return d('div', { class: Qp([e.direction]) }, [
					(s = n.default) == null ? void 0 : s.call(n),
				]);
			}
		);
	},
});
const [nw, ow] = U('checkbox'),
	aw = he({}, ts, {
		shape: String,
		bindGroup: z,
		indeterminate: { type: Boolean, default: null },
	});
var iw = j({
	name: nw,
	props: aw,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { parent: o } = ot(Mf),
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
					Pf,
					_e(
						{
							bem: ow,
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
const Lf = G(iw),
	lw = G(tw),
	[rw, Ua] = U('circle');
let sw = 0;
const jc = e => Math.min(Math.max(+e, 0), 100);
function cw(e, t) {
	const n = e ? 1 : 0;
	return `M ${t / 2} ${t / 2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`;
}
const uw = {
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
var dw = j({
	name: rw,
	props: uw,
	emits: ['update:currentRate'],
	setup(e, { emit: t, slots: n }) {
		const o = `van-circle-${sw++}`,
			a = L(() => +e.strokeWidth + 1e3),
			i = L(() => cw(e.clockwise, a.value)),
			l = L(() => {
				const f = { top: 0, right: 90, bottom: 180, left: 270 }[
					e.startPosition
				];
				if (f) return { transform: `rotate(${f}deg)` };
			});
		ee(
			() => e.rate,
			h => {
				let f;
				const g = Date.now(),
					m = e.currentRate,
					y = jc(h),
					v = Math.abs(((m - y) * 1e3) / +e.speed),
					w = () => {
						const b = Date.now(),
							p = Math.min((b - g) / v, 1) * (y - m) + m;
						t('update:currentRate', jc(parseFloat(p.toFixed(1)))),
							(y > m ? p < y : p > y) && (f = it(w));
					};
				e.speed ? (f && Hi(f), (f = it(w))) : t('update:currentRate', y);
			},
			{ immediate: !0 },
		);
		const s = () => {
				const { strokeWidth: f, currentRate: g, strokeLinecap: m } = e,
					y = (3140 * g) / 100,
					v = fn(e.color) ? `url(#${o})` : e.color,
					w = {
						stroke: v,
						strokeWidth: `${+f + 1}px`,
						strokeLinecap: m,
						strokeDasharray: `${y}px 3140px`,
					};
				return d(
					'path',
					{ d: i.value, style: w, class: Ua('hover'), stroke: v },
					null,
				);
			},
			r = () => {
				const h = {
					fill: e.fill,
					stroke: e.layerColor,
					strokeWidth: `${e.strokeWidth}px`,
				};
				return d('path', { class: Ua('layer'), style: h, d: i.value }, null);
			},
			c = () => {
				const { color: h } = e;
				if (!fn(h)) return;
				const f = Object.keys(h)
					.sort((g, m) => parseFloat(g) - parseFloat(m))
					.map((g, m) =>
						d('stop', { key: m, offset: g, 'stop-color': h[g] }, null),
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
const fw = G(dw),
	[Vf, hw] = U('row'),
	Nf = Symbol(Vf),
	gw = {
		tag: Z('div'),
		wrap: z,
		align: String,
		gutter: { type: [String, Number, Array], default: 0 },
		justify: String,
	};
var mw = j({
	name: Vf,
	props: gw,
	setup(e, { slots: t }) {
		const { children: n, linkChildren: o } = rt(Nf),
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
							c.forEach((h, f) => {
								if (f === 0) r.push({ right: u });
								else {
									const g = s - r[h - 1].right,
										m = u - g;
									r.push({ left: g, right: m });
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
			o({ spaces: i, verticalSpaces: l }),
			() => {
				const { tag: s, wrap: r, align: c, justify: u } = e;
				return d(
					s,
					{ class: hw({ [`align-${c}`]: c, [`justify-${u}`]: u, nowrap: !r }) },
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
const [vw, bw] = U('col'),
	yw = { tag: Z('div'), span: ie(0), offset: q };
var pw = j({
	name: vw,
	props: yw,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(Nf),
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
				return he(s, { marginBottom: r ? `${r}px` : null });
			});
		return () => {
			const { tag: i, span: l, offset: s } = e;
			return d(
				i,
				{ style: a.value, class: bw({ [l]: l, [`offset-${s}`]: s }) },
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
const ww = G(pw),
	[Ff, xw] = U('collapse'),
	zf = Symbol(Ff),
	Sw = {
		border: z,
		accordion: Boolean,
		modelValue: { type: [String, Number, Array], default: '' },
	};
var Cw = j({
	name: Ff,
	props: Sw,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o, children: a } = rt(zf),
			i = c => {
				t('change', c), t('update:modelValue', c);
			},
			l = (c, u) => {
				const { accordion: h, modelValue: f } = e;
				i(h ? (c === f ? '' : c) : u ? f.concat(c) : f.filter(g => g !== c));
			},
			s = (c = {}) => {
				if (e.accordion) return;
				typeof c == 'boolean' && (c = { expanded: c });
				const { expanded: u, skipDisabled: h } = c,
					g = a
						.filter(m =>
							m.disabled && h ? m.expanded.value : u ?? !m.expanded.value,
						)
						.map(m => m.itemName.value);
				i(g);
			},
			r = c => {
				const { accordion: u, modelValue: h } = e;
				return u ? h === c : h.includes(c);
			};
		return (
			ke({ toggleAll: s }),
			o({ toggle: l, isExpanded: r }),
			() => {
				var c;
				return d('div', { class: [xw(), { [Ui]: e.border }] }, [
					(c = n.default) == null ? void 0 : c.call(n),
				]);
			}
		);
	},
});
const Tw = G(Cw),
	[_w, Ya] = U('collapse-item'),
	kw = ['icon', 'title', 'value', 'label', 'right-icon'],
	Ew = he({}, Ji, {
		name: q,
		isLink: z,
		disabled: Boolean,
		readonly: Boolean,
		lazyRender: z,
	});
var $w = j({
	name: _w,
	props: Ew,
	setup(e, { slots: t }) {
		const n = D(),
			o = D(),
			{ parent: a, index: i } = ot(zf);
		if (!a) return;
		const l = L(() => {
				var y;
				return (y = e.name) != null ? y : i.value;
			}),
			s = L(() => a.isExpanded(l.value)),
			r = D(s.value),
			c = Kr(() => r.value || !e.lazyRender),
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
		const h = (y = !s.value) => {
				a.toggle(l.value, y);
			},
			f = () => {
				!e.disabled && !e.readonly && h();
			},
			g = () => {
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
								onClick: f,
							},
							b,
						),
						Ie(t, kw),
					)
				);
			},
			m = c(() => {
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
			ke({ toggle: h, expanded: s, itemName: l }),
			() =>
				d('div', { class: [Ya({ border: i.value && e.border })] }, [g(), m()])
		);
	},
});
const Pw = G($w),
	Iw = G(Kb),
	[Rw, Wc, _l] = U('contact-card'),
	Aw = {
		tel: String,
		name: String,
		type: Z('add'),
		addText: String,
		editable: z,
	};
var Ow = j({
	name: Rw,
	props: Aw,
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
					class: Wc([e.type]),
					border: !1,
					isLink: e.editable,
					titleClass: Wc('title'),
					onClick: n,
				},
				{ title: o },
			);
	},
});
const Bw = G(Ow),
	[Dw, bo, _n] = U('contact-edit'),
	hr = { tel: '', name: '' },
	Mw = {
		isEdit: Boolean,
		isSaving: Boolean,
		isDeleting: Boolean,
		showSetDefault: Boolean,
		setDefaultLabel: String,
		contactInfo: { type: Object, default: () => he({}, hr) },
		telValidator: { type: Function, default: Md },
	};
var Lw = j({
	name: Dw,
	props: Mw,
	emits: ['save', 'delete', 'changeDefault'],
	setup(e, { emit: t }) {
		const n = He(he({}, hr, e.contactInfo)),
			o = () => {
				e.isSaving || t('save', n);
			},
			a = () => t('delete', n),
			i = () =>
				d('div', { class: bo('buttons') }, [
					d(
						lt,
						{
							block: !0,
							round: !0,
							type: 'primary',
							text: _n('save'),
							class: bo('button'),
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
								class: bo('button'),
								loading: e.isDeleting,
								onClick: a,
							},
							null,
						),
				]),
			l = () =>
				d(
					Qr,
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
						{ title: e.setDefaultLabel, class: bo('switch-cell'), border: !1 },
						{ 'right-icon': l },
					);
			};
		return (
			ee(
				() => e.contactInfo,
				r => he(n, hr, r),
			),
			() =>
				d(
					Zr,
					{ class: bo(), onSubmit: o },
					{
						default: () => [
							d('div', { class: bo('fields') }, [
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
const Vw = G(Lw),
	[Nw, an, Fw] = U('contact-list'),
	zw = { list: Array, addText: String, modelValue: Fe, defaultTagText: String };
var Hw = j({
	name: Nw,
	props: zw,
	emits: ['add', 'edit', 'select', 'update:modelValue'],
	setup(e, { emit: t }) {
		const n = (o, a) => {
			const i = () => {
					t('update:modelValue', o.id), t('select', o, a);
				},
				l = () => d(ns, { class: an('radio'), name: o.id, iconSize: 18 }, null),
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
					es,
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
							text: e.addText || Fw('addContact'),
							onClick: () => t('add'),
						},
						null,
					),
				]),
			]);
	},
});
const jw = G(Hw);
function Ww(e, t) {
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
const [Uw, Yw] = U('count-down'),
	Kw = {
		time: ie(0),
		format: Z('HH:mm:ss'),
		autoStart: z,
		millisecond: Boolean,
	};
var qw = j({
	name: Uw,
	props: Kw,
	emits: ['change', 'finish'],
	setup(e, { emit: t, slots: n }) {
		const {
				start: o,
				pause: a,
				reset: i,
				current: l,
			} = gb({
				time: +e.time,
				millisecond: e.millisecond,
				onChange: c => t('change', c),
				onFinish: () => t('finish'),
			}),
			s = L(() => Ww(e.format, l.value)),
			r = () => {
				i(+e.time), e.autoStart && o();
			};
		return (
			ee(() => e.time, r, { immediate: !0 }),
			ke({ start: o, pause: a, reset: r }),
			() =>
				d('div', { role: 'timer', class: Yw() }, [
					n.default ? n.default(l.value) : s.value,
				])
		);
	},
});
const Gw = G(qw);
function Uc(e) {
	const t = new Date(e * 1e3);
	return `${t.getFullYear()}.${Ot(t.getMonth() + 1)}.${Ot(t.getDate())}`;
}
const Xw = e => (e / 10).toFixed(e % 10 === 0 ? 0 : 1),
	Yc = e => (e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2),
	[Zw, Yt, kl] = U('coupon');
var Jw = j({
	name: Zw,
	props: {
		chosen: Boolean,
		coupon: Ye(Object),
		disabled: Boolean,
		currency: Z('¥'),
	},
	setup(e) {
		const t = L(() => {
				const { startAt: a, endAt: i } = e.coupon;
				return `${Uc(a)} - ${Uc(i)}`;
			}),
			n = L(() => {
				const { coupon: a, currency: i } = e;
				if (a.valueDesc)
					return [a.valueDesc, d('span', null, [a.unitDesc || ''])];
				if (a.denominations) {
					const l = Yc(a.denominations);
					return [d('span', null, [i]), ` ${l}`];
				}
				return a.discount ? kl('discount', Xw(a.discount)) : '';
			}),
			o = L(() => {
				const a = Yc(e.coupon.originCondition || 0);
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
						!l && d(Lf, { class: Yt('corner'), modelValue: a }, null),
					]),
				]),
				s && d('p', { class: Yt('description') }, [s]),
			]);
		};
	},
});
const gr = G(Jw),
	[Qw, Kc, mr] = U('coupon-cell'),
	ex = {
		title: String,
		border: z,
		editable: z,
		coupons: Ve(),
		currency: Z('¥'),
		chosenCoupon: { type: [Number, Array], default: -1 },
	},
	tx = e => {
		const { value: t, denominations: n } = e;
		return $e(t) ? t : $e(n) ? n : 0;
	};
function nx({ coupons: e, chosenCoupon: t, currency: n }) {
	let o = 0,
		a = !1;
	return (
		(Array.isArray(t) ? t : [t]).forEach(i => {
			const l = e[+i];
			l && ((a = !0), (o += tx(l)));
		}),
		a
			? `-${n} ${(o / 100).toFixed(2)}`
			: e.length === 0
				? mr('noCoupon')
				: mr('count', e.length)
	);
}
var ox = j({
	name: Qw,
	props: ex,
	setup(e) {
		return () => {
			const t = Array.isArray(e.chosenCoupon)
				? e.chosenCoupon.length
				: e.coupons[+e.chosenCoupon];
			return d(
				Ht,
				{
					class: Kc(),
					value: nx(e),
					title: e.title || mr('title'),
					border: e.border,
					isLink: e.editable,
					valueClass: Kc('value', { selected: t }),
				},
				null,
			);
		};
	},
});
const ax = G(ox),
	[ix, Ka] = U('empty'),
	lx = {
		image: Z('default'),
		imageSize: [Number, String, Array],
		description: String,
	};
var rx = j({
	name: ix,
	props: lx,
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
			h = () => [
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
			f = () =>
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
			g = () =>
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
			m = () =>
				d('svg', { viewBox: '0 0 160 160' }, [
					d('defs', null, [
						d(
							'linearGradient',
							{ x1: '50%', x2: '50%', y2: '100%', id: i(8) },
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
					h(),
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
				const b = { error: m, search: y, network: f, default: g };
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
const Hf = G(rx),
	[sx, Kt, yo] = U('coupon-list'),
	cx = {
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
var ux = j({
	name: sx,
	props: cx,
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
			h = () => {
				const C = Re(i).height,
					p = Re(l).height + 44;
				r.value = (C > p ? C : _t.value) - p;
			},
			f = () => {
				t('exchange', c.value), e.code || (c.value = '');
			},
			g = b => {
				Te(() => {
					var C;
					return (C = o.value[b]) == null ? void 0 : C.scrollIntoView();
				});
			},
			m = () =>
				d(
					Hf,
					{ image: e.emptyImage },
					{
						default: () => [
							d('p', { class: Kt('empty-tip') }, [yo('noCoupon')]),
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
								placeholder: e.inputPlaceholder || yo('placeholder'),
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
								text: e.exchangeButtonText || yo('exchange'),
								loading: e.exchangeButtonLoading,
								disabled: u.value,
								onClick: f,
							},
							null,
						),
					]);
			},
			v = () => {
				const { coupons: b, chosenCoupon: C } = e,
					p = e.showCount ? ` (${b.length})` : '',
					x = (e.enabledTitle || yo('enable')) + p,
					T = (A = [], S = 0) =>
						A.includes(S) ? A.filter(R => R !== S) : [...A, S];
				return d(
					Ca,
					{ title: x },
					{
						default: () => {
							var A;
							return [
								d(
									'div',
									{
										class: Kt('list', { 'with-bottom': e.showCloseButton }),
										style: { height: `${r.value}px` },
									},
									[
										b.map((S, R) =>
											d(
												gr,
												{
													key: S.id,
													ref: a(R),
													coupon: S,
													chosen: Array.isArray(C) ? C.includes(R) : R === C,
													currency: e.currency,
													onClick: () =>
														t('change', Array.isArray(C) ? T(C, R) : R),
												},
												null,
											),
										),
										!b.length && m(),
										(A = n['list-footer']) == null ? void 0 : A.call(n),
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
					p = (e.disabledTitle || yo('disabled')) + C;
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
												gr,
												{
													disabled: !0,
													key: T.id,
													coupon: T,
													currency: e.currency,
												},
												null,
											),
										),
										!b.length && m(),
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
			ee(_t, h),
			ee(c, b => t('update:code', b)),
			ee(() => e.displayedCouponIndex, g),
			Ue(() => {
				h(), g(e.displayedCouponIndex);
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
											text: e.closeButtonText || yo('close'),
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
const dx = G(ux),
	qc = new Date().getFullYear(),
	[fx] = U('date-picker'),
	hx = he({}, Rf, {
		columnsType: { type: Array, default: () => ['year', 'month', 'day'] },
		minDate: {
			type: Date,
			default: () => new Date(qc - 10, 0, 1),
			validator: Sa,
		},
		maxDate: {
			type: Date,
			default: () => new Date(qc + 10, 11, 31),
			validator: Sa,
		},
	});
var gx = j({
	name: fx,
	props: hx,
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
			h = p => {
				const { minDate: x, columnsType: T } = e,
					A = T.indexOf(p),
					S = a.value ? e.modelValue[A] : o.value[A];
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
				return Po(x, T, 'month', e.formatter, e.filter);
			},
			g = () => {
				const p = h('year'),
					x = h('month'),
					T = s(p) && c(x) ? e.minDate.getDate() : 1,
					A = r(p) && u(x) ? e.maxDate.getDate() : Of(p, x);
				return Po(T, A, 'day', e.formatter, e.filter);
			},
			m = () => {
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
							return f();
						case 'day':
							return g();
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
						(p = Bf(p, v.value)),
						Xt(p, o.value) || (o.value = p),
						(a.value = !1);
				},
				{ immediate: !0 },
			);
		const w = (...p) => t('change', ...p),
			b = (...p) => t('cancel', ...p),
			C = (...p) => t('confirm', ...p);
		return (
			ke({ confirm: m, getSelectedDate: y }),
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
						Ie(e, Af),
					),
					n,
				)
		);
	},
});
const mx = G(gx),
	[vx, Pt, qa] = U('dialog'),
	bx = he({}, zo, {
		title: String,
		theme: String,
		width: q,
		message: [String, Function],
		callback: Function,
		allowHtml: Boolean,
		className: Fe,
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
	yx = [...Yr, 'transition', 'closeOnPopstate'];
var px = j({
	name: vx,
	props: bx,
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
			u = Nm(
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
					T = Oo(b) ? b() : b;
				return C && typeof T == 'string'
					? d('div', { class: x, innerHTML: T }, null)
					: d('div', { class: x }, [T]);
			},
			g = () => {
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
			m = () =>
				d('div', { class: [Ud, Pt('footer')] }, [
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
								class: [Pt('confirm'), { [Yd]: e.showCancelButton }],
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
					Jd,
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
				n.footer ? n.footer() : e.theme === 'round-button' ? y() : m();
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
					Ie(e, yx),
				),
				{ default: () => [h(), g(), v()] },
			);
		};
	},
});
const wx = G(px),
	[xx, Sx] = U('divider'),
	Cx = {
		dashed: Boolean,
		hairline: z,
		vertical: Boolean,
		contentPosition: Z('center'),
	};
var Tx = j({
	name: xx,
	props: Cx,
	setup(e, { slots: t }) {
		return () => {
			var n;
			return d(
				'div',
				{
					role: 'separator',
					class: Sx({
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
const _x = G(Tx),
	[jf, Ga] = U('dropdown-menu'),
	kx = {
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
	Wf = Symbol(jf);
var Ex = j({
	name: jf,
	props: kx,
	setup(e, { slots: t }) {
		const n = Ho(),
			o = D(),
			a = D(),
			i = D(0),
			{ children: l, linkChildren: s } = rt(Wf),
			r = Fo(o),
			c = L(() => l.some(b => b.state.showWrapper)),
			u = L(() => e.swipeThreshold && l.length > +e.swipeThreshold),
			h = L(() => {
				if (c.value && $e(e.zIndex)) return { zIndex: +e.zIndex + 1 };
			}),
			f = () => {
				l.forEach(b => {
					b.toggle(!1);
				});
			},
			g = () => {
				e.closeOnClickOutside && f();
			},
			m = () => {
				if (a.value) {
					const b = Re(a);
					e.direction === 'down'
						? (i.value = b.bottom)
						: (i.value = _t.value - b.top);
				}
			},
			y = () => {
				c.value && m();
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
			ke({ close: f }),
			s({ id: n, props: e, offset: i, updateOffset: m }),
			ji(o, g),
			We('scroll', y, { target: r, passive: !0 }),
			() => {
				var b;
				return d('div', { ref: o, class: Ga() }, [
					d(
						'div',
						{
							ref: a,
							style: h.value,
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
const [$x, Xa] = U('dropdown-item'),
	Px = {
		title: String,
		options: Ve(),
		disabled: Boolean,
		teleport: [String, Object],
		lazyRender: z,
		modelValue: Fe,
		titleClass: Fe,
	};
var Ix = j({
	name: $x,
	inheritAttrs: !1,
	props: Px,
	emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		const a = He({ showPopup: !1, transition: !0, showWrapper: !1 }),
			i = D(),
			{ parent: l, index: s } = ot(Wf);
		if (!l) return;
		const r = b => () => t(b),
			c = r('open'),
			u = r('close'),
			h = r('opened'),
			f = () => {
				(a.showWrapper = !1), t('closed');
			},
			g = b => {
				e.teleport && b.stopPropagation();
			},
			m = (b = !a.showPopup, C = {}) => {
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
					A = () => {
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
					{ value: A },
				);
			},
			w = () => {
				const { offset: b } = l,
					{
						autoLocate: C,
						zIndex: p,
						overlay: x,
						duration: T,
						direction: A,
						closeOnClickOverlay: S,
					} = l.props,
					R = yn(p);
				let I = b.value;
				if (C && i.value) {
					const k = xb(i.value);
					k && (I -= Re(k).top);
				}
				return (
					A === 'down' ? (R.top = `${I}px`) : (R.bottom = `${I}px`),
					Qe(
						d('div', _e({ ref: i, style: R, class: Xa([A]), onClick: g }, o), [
							d(
								zt,
								{
									show: a.showPopup,
									'onUpdate:show': k => (a.showPopup = k),
									role: 'menu',
									class: Xa('content'),
									overlay: x,
									position: A === 'down' ? 'top' : 'bottom',
									duration: a.transition ? T : 0,
									lazyRender: e.lazyRender,
									overlayStyle: { position: 'absolute' },
									'aria-labelledby': `${l.id}-${s.value}`,
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
			ke({ state: a, toggle: m, renderTitle: y }),
			() =>
				e.teleport ? d(Lo, { to: e.teleport }, { default: () => [w()] }) : w()
		);
	},
});
const Rx = G(Ix),
	Ax = G(Ex),
	Ox = {
		gap: Ke(24),
		icon: String,
		axis: Z('y'),
		magnetic: String,
		offset: { type: Object, default: () => ({ x: -1, y: -1 }) },
		teleport: { type: [String, Object], default: 'body' },
	},
	[Bx, Gc] = U('floating-bubble');
var Dx = j({
	name: Bx,
	inheritAttrs: !1,
	props: Ox,
	emits: ['click', 'update:offset', 'offsetChange'],
	setup(e, { slots: t, emit: n, attrs: o }) {
		const a = D(),
			i = D({ x: 0, y: 0, width: 0, height: 0 }),
			l = L(() => ({
				top: e.gap,
				right: Mt.value - i.value.width - e.gap,
				bottom: _t.value - i.value.height - e.gap,
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
				const { width: C, height: p } = Re(a.value),
					{ offset: x } = e;
				i.value = {
					x: x.x > -1 ? x.x : Mt.value - C - e.gap,
					y: x.y > -1 ? x.y : _t.value - p - e.gap,
					width: C,
					height: p,
				};
			},
			h = Et();
		let f = 0,
			g = 0;
		const m = C => {
			h.start(C), (s.value = !0), (f = i.value.x), (g = i.value.y);
		};
		We(
			'touchmove',
			C => {
				if (
					(C.preventDefault(), h.move(C), e.axis !== 'lock' && !h.isTap.value)
				) {
					if (e.axis === 'x' || e.axis === 'xy') {
						let x = f + h.deltaX.value;
						x < l.value.left && (x = l.value.left),
							x > l.value.right && (x = l.value.right),
							(i.value.x = x);
					}
					if (e.axis === 'y' || e.axis === 'xy') {
						let x = g + h.deltaY.value;
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
						if (!h.isTap.value) {
							const C = Ie(i.value, ['x', 'y']);
							n('update:offset', C),
								(f !== C.x || g !== C.y) && n('offsetChange', C);
						}
					});
			},
			w = C => {
				h.isTap.value ? n('click', C) : C.stopPropagation();
			};
		Ue(() => {
			u(),
				Te(() => {
					r = !0;
				});
		}),
			ee([Mt, _t, () => e.gap, () => e.offset], u, { deep: !0 });
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
								class: Gc(),
								ref: a,
								onTouchstartPassive: m,
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
								: d(Jb, { name: e.icon, class: Gc('icon') }, null),
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
const Mx = G(Dx),
	Lx = {
		height: ie(0),
		anchors: Ve(),
		duration: ie(0.3),
		contentDraggable: z,
		lockScroll: Boolean,
		safeAreaInsetBottom: z,
	},
	[Vx, Za] = U('floating-panel');
var Nx = j({
	name: Vx,
	props: Lx,
	emits: ['heightChange', 'update:height'],
	setup(e, { emit: t, slots: n }) {
		const a = D(),
			i = D(),
			l = qr(
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
							: Math.round(_t.value * 0.6),
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
			h = b => {
				const C = Math.abs(b),
					{ min: p, max: x } = s.value;
				return C > x ? -(x + (C - x) * 0.2) : C < p ? -(p - (p - C) * 0.2) : b;
			};
		let f,
			g = -1;
		const m = Et(),
			y = b => {
				m.start(b), (c.value = !0), (f = -l.value), (g = -1);
			},
			v = b => {
				var C;
				m.move(b);
				const p = b.target;
				if (i.value === p || ((C = i.value) != null && C.contains(p))) {
					const { scrollTop: T } = i.value;
					if (((g = Math.max(g, T)), !e.contentDraggable)) return;
					if (-f < s.value.max) Me(b, !0);
					else if (!(T <= 0 && m.deltaY.value > 0) || g > 0) return;
				}
				const x = m.deltaY.value + f;
				l.value = -h(x);
			},
			w = () => {
				(g = -1),
					(c.value = !1),
					(l.value = Si(r.value, l.value)),
					l.value !== -f && t('heightChange', { height: l.value });
			};
		return (
			ee(
				s,
				() => {
					l.value = Si(r.value, l.value);
				},
				{ immediate: !0 },
			),
			of(a, () => e.lockScroll || c.value),
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
const Fx = G(Nx),
	[Uf, zx] = U('grid'),
	Hx = {
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
	Yf = Symbol(Uf);
var jx = j({
	name: Uf,
	props: Hx,
	setup(e, { slots: t }) {
		const { linkChildren: n } = rt(Yf);
		return (
			n({ props: e }),
			() => {
				var o;
				return d(
					'div',
					{
						style: { paddingLeft: we(e.gutter) },
						class: [zx(), { [Ud]: e.border && !e.gutter }],
					},
					[(o = t.default) == null ? void 0 : o.call(t)],
				);
			}
		);
	},
});
const Wx = G(jx),
	[Ux, Ja] = U('grid-item'),
	Yx = he({}, Un, {
		dot: Boolean,
		text: String,
		icon: String,
		badge: q,
		iconColor: String,
		iconPrefix: String,
		badgeProps: Object,
	});
var Kx = j({
	name: Ux,
	props: Yx,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(Yf),
			a = ro();
		if (!n) return;
		const i = L(() => {
				const { square: u, gutter: h, columnNum: f } = n.props,
					g = `${100 / +f}%`,
					m = { flexBasis: g };
				if (u) m.paddingTop = g;
				else if (h) {
					const y = we(h);
					(m.paddingRight = y), o.value >= +f && (m.marginTop = y);
				}
				return m;
			}),
			l = L(() => {
				const { square: u, gutter: h } = n.props;
				if (u && h) {
					const f = we(h);
					return { right: f, bottom: f, height: 'auto' };
				}
			}),
			s = () => {
				if (t.icon)
					return d(so, _e({ dot: e.dot, content: e.badge }, e.badgeProps), {
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
					border: h,
					square: f,
					gutter: g,
					reverse: m,
					direction: y,
					clickable: v,
				} = n.props,
				w = [
					Ja('content', [
						y,
						{
							center: u,
							square: f,
							reverse: m,
							clickable: v,
							surround: h && g,
						},
					]),
					{ [pn]: h },
				];
			return d('div', { class: [Ja({ square: f })], style: i.value }, [
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
const qx = G(Kx),
	[Gx, Xc] = U('highlight'),
	Xx = {
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
var Zx = j({
	name: Gx,
	props: Xx,
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
					.filter(h => h)
					.reduce((h, f) => {
						o && (f = f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
						const g = new RegExp(f, s);
						let m;
						for (; (m = g.exec(l)); ) {
							const y = m.index,
								v = g.lastIndex;
							if (y >= v) {
								g.lastIndex++;
								continue;
							}
							h.push({ start: y, end: v, highlight: !0 });
						}
						return h;
					}, []);
				c = c
					.sort((h, f) => h.start - f.start)
					.reduce((h, f) => {
						const g = h[h.length - 1];
						if (!g || f.start > g.end) {
							const m = g ? g.end : 0,
								y = f.start;
							m !== y && h.push({ start: m, end: y, highlight: !1 }), h.push(f);
						} else g.end = Math.max(g.end, f.end);
						return h;
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
					const { start: c, end: u, highlight: h } = r,
						f = o.slice(c, u);
					return h
						? d(l, { class: [Xc('tag'), a] }, { default: () => [f] })
						: d(s, { class: i }, { default: () => [f] });
				});
			};
		return () => {
			const { tag: o } = e;
			return d(o, { class: Xc() }, { default: () => [n()] });
		};
	},
});
const Jx = G(Zx),
	Zc = e =>
		Math.sqrt(
			(e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2,
		),
	Qx = e => ({
		x: (e[0].clientX + e[1].clientX) / 2,
		y: (e[0].clientY + e[1].clientY) / 2,
	}),
	El = U('image-preview')[1],
	Jc = 2.6,
	eS = {
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
var tS = j({
	props: eS,
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
						moving: ge,
						zooming: ve,
						initializing: ne,
					} = o,
					se = { transitionDuration: ve || ge || ne ? '0s' : '.3s' };
				return (
					(O !== 1 || r.value) &&
						(se.transform = `matrix(${O}, 0, 0, ${O}, ${F}, ${Y})`),
					se
				);
			}),
			h = L(() => {
				if (o.imageRatio) {
					const { rootWidth: O, rootHeight: F } = e,
						Y = s.value ? F / o.imageRatio : O;
					return Math.max(0, (o.scale * Y - O) / 2);
				}
				return 0;
			}),
			f = L(() => {
				if (o.imageRatio) {
					const { rootWidth: O, rootHeight: F } = e,
						Y = s.value ? F : O * o.imageRatio;
					return Math.max(0, (o.scale * Y - F) / 2);
				}
				return 0;
			}),
			g = (O, F) => {
				var Y;
				if (((O = et(O, +e.minZoom, +e.maxZoom + 1)), O !== o.scale)) {
					const ge = O / o.scale;
					if (((o.scale = O), F)) {
						const ve = Re((Y = i.value) == null ? void 0 : Y.$el),
							ne = { x: ve.width * 0.5, y: ve.height * 0.5 },
							se = o.moveX - (F.x - ve.left - ne.x) * (ge - 1),
							be = o.moveY - (F.y - ve.top - ne.y) * (ge - 1);
						(o.moveX = et(se, -h.value, h.value)),
							(o.moveY = et(be, -f.value, f.value));
					} else (o.moveX = 0), (o.moveY = r.value ? c : 0);
					t('scale', { scale: O, index: e.active });
				}
			},
			m = () => {
				g(1);
			},
			y = () => {
				const O = o.scale > 1 ? 1 : 2;
				g(
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
			A,
			S = !1;
		const R = O => {
				const { touches: F } = O;
				if (((v = F.length), v === 2 && e.disableZoom)) return;
				const { offsetX: Y } = a;
				a.start(O),
					(w = o.moveX),
					(b = o.moveY),
					(A = Date.now()),
					(S = !1),
					(o.moving = v === 1 && (o.scale !== 1 || r.value)),
					(o.zooming = v === 2 && !Y.value),
					o.zooming && ((C = o.scale), (p = Zc(F)));
			},
			I = O => {
				const { touches: F } = O;
				if ((a.move(O), o.moving)) {
					const { deltaX: Y, deltaY: ge } = a,
						ve = Y.value + w,
						ne = ge.value + b;
					if (
						(e.vertical
							? a.isVertical() && Math.abs(ne) > f.value
							: a.isHorizontal() && Math.abs(ve) > h.value) &&
						!S
					) {
						o.moving = !1;
						return;
					}
					(S = !0),
						Me(O, !0),
						(o.moveX = et(ve, -h.value, h.value)),
						(o.moveY = et(ne, -f.value, f.value));
				}
				if (o.zooming && (Me(O, !0), F.length === 2)) {
					const Y = Zc(F),
						ge = (C * Y) / p;
					(x = Qx(F)), g(ge, x);
				}
			},
			k = O => {
				var F;
				const Y = (F = l.value) == null ? void 0 : F.$el,
					ge = Y.firstElementChild,
					ve = O.target === Y,
					ne = ge == null ? void 0 : ge.contains(O.target);
				(!e.closeOnClickImage && ne) ||
					(!e.closeOnClickOverlay && ve) ||
					t('close');
			},
			$ = O => {
				if (v > 1) return;
				const F = Date.now() - A,
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
						: F > qd && t('longPress'));
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
						((o.moveX = et(o.moveX, -h.value, h.value)),
						(o.moveY = et(o.moveY, -f.value, f.value)),
						(o.zooming = !1)),
						(o.moving = !1),
						(w = 0),
						(b = 0),
						(C = 1),
						o.scale < 1 && m();
					const Y = +e.maxZoom;
					o.scale > Y && g(Y, x);
				}
				Me(O, F), $(O), a.reset();
			},
			X = () => {
				const { rootWidth: O, rootHeight: F } = e,
					Y = F / O,
					{ imageRatio: ge } = o;
				(s.value = o.imageRatio > Y && ge < Jc),
					(r.value = o.imageRatio > Y && ge >= Jc),
					r.value &&
						((c = (ge * O - F) / 2),
						(o.moveY = c),
						(o.initializing = !0),
						it(() => {
							o.initializing = !1;
						})),
					m();
			},
			V = O => {
				const { naturalWidth: F, naturalHeight: Y } = O.target;
				(o.imageRatio = Y / F), X();
			};
		return (
			ee(() => e.active, m),
			ee(
				() => e.show,
				O => {
					O || m();
				},
			),
			ee(() => [e.rootWidth, e.rootHeight], X),
			We('touchmove', I, {
				target: L(() => {
					var O;
					return (O = l.value) == null ? void 0 : O.$el;
				}),
			}),
			ke({ resetScale: m }),
			() => {
				const O = { loading: () => d(Ft, { type: 'spinner' }, null) };
				return d(
					Xr,
					{
						ref: l,
						class: El('swipe-item'),
						onTouchstartPassive: R,
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
const [nS, po] = U('image-preview'),
	oS = ['show', 'teleport', 'transition', 'overlayStyle', 'closeOnPopstate'],
	aS = {
		show: Boolean,
		loop: z,
		images: Ve(),
		minZoom: ie(1 / 3),
		maxZoom: ie(3),
		overlay: z,
		vertical: Boolean,
		closeable: Boolean,
		showIndex: z,
		className: Fe,
		closeIcon: Z('clear'),
		transition: String,
		beforeClose: Function,
		doubleScale: z,
		overlayClass: Fe,
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
var Kf = j({
	name: nS,
	props: aS,
	emits: ['scale', 'close', 'closed', 'change', 'longPress', 'update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(),
			i = He({ active: 0, rootWidth: 0, rootHeight: 0, disableZoom: !1 }),
			l = () => {
				if (o.value) {
					const C = Re(o.value.$el);
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
			h = () => {
				if (e.showIndex)
					return d('div', { class: po('index') }, [
						n.index
							? n.index({ index: i.active })
							: `${i.active + 1} / ${e.images.length}`,
					]);
			},
			f = () => {
				if (n.cover) return d('div', { class: po('cover') }, [n.cover()]);
			},
			g = () => {
				i.disableZoom = !0;
			},
			m = () => {
				i.disableZoom = !1;
			},
			y = () =>
				d(
					Gr,
					{
						ref: o,
						lazyRender: !0,
						loop: e.loop,
						class: po('swipe'),
						vertical: e.vertical,
						duration: e.swipeDuration,
						initialSwipe: e.startPosition,
						showIndicators: e.showIndicators,
						indicatorColor: 'white',
						onChange: u,
						onDragEnd: m,
						onDragStart: g,
					},
					{
						default: () => [
							e.images.map((C, p) =>
								d(
									tS,
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
							class: [po('close-icon', e.closeIconPosition), vt],
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
			ee([Mt, _t], l),
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
							class: [po(), e.className],
							overlayClass: [po('overlay'), e.overlayClass],
							onClosed: w,
							'onUpdate:show': r,
						},
						Ie(e, oS),
					),
					{ default: () => [v(), y(), h(), f()] },
				)
		);
	},
});
let ci;
const iS = {
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
function lS() {
	({ instance: ci } = _f({
		setup() {
			const { state: e, toggle: t } = Tf(),
				n = () => {
					e.images = [];
				};
			return () => d(Kf, _e(e, { onClosed: n, 'onUpdate:show': t }), null);
		},
	}));
}
const rS = (e, t = 0) => {
		if (kt)
			return (
				ci || lS(),
				(e = Array.isArray(e) ? { images: e, startPosition: t } : e),
				ci.open(he({}, iS, e)),
				ci
			);
	},
	sS = G(Kf);
function cS() {
	return Array(26)
		.fill('')
		.map((n, o) => String.fromCharCode(65 + o));
}
const [qf, $l] = U('index-bar'),
	uS = {
		sticky: z,
		zIndex: q,
		teleport: [String, Object],
		highlightColor: String,
		stickyOffsetTop: Ke(0),
		indexList: { type: Array, default: cS },
	},
	Gf = Symbol(qf);
var dS = j({
	name: qf,
	props: uS,
	emits: ['select', 'change'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = D(),
			i = D(''),
			l = Et(),
			s = Fo(o),
			{ children: r, linkChildren: c } = rt(Gf);
		let u;
		c({ props: e });
		const h = L(() => {
				if ($e(e.zIndex)) return { zIndex: +e.zIndex + 1 };
			}),
			f = L(() => {
				if (e.highlightColor) return { color: e.highlightColor };
			}),
			g = (S, R) => {
				for (let I = r.length - 1; I >= 0; I--) {
					const k = I > 0 ? R[I - 1].height : 0,
						$ = e.sticky ? k + e.stickyOffsetTop : 0;
					if (S + $ >= R[I].top) return I;
				}
				return -1;
			},
			m = S => r.find(R => String(R.index) === S),
			y = () => {
				if (io(o)) return;
				const { sticky: S, indexList: R } = e,
					I = hn(s.value),
					k = Re(s),
					$ = r.map(X => X.getRect(s.value, k));
				let B = -1;
				if (u) {
					const X = m(u);
					if (X) {
						const V = X.getRect(s.value, k);
						B = g(V.top, $);
					}
				} else B = g(I, $);
				(i.value = R[B]),
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
					const R = S === i.value;
					return d(
						'span',
						{
							class: $l('index', { active: R }),
							style: R ? f.value : void 0,
							'data-index': S,
						},
						[S],
					);
				}),
			b = S => {
				u = String(S);
				const R = m(u);
				if (R) {
					const I = hn(s.value),
						k = Re(s),
						{ offsetHeight: $ } = document.documentElement;
					if ((R.$el.scrollIntoView(), I === $ - k.height)) {
						y();
						return;
					}
					e.sticky && e.stickyOffsetTop && Wi($a() - e.stickyOffsetTop),
						t('select', R.index);
				}
			},
			C = S => {
				const { index: R } = S.dataset;
				R && b(R);
			},
			p = S => {
				C(S.target);
			};
		let x;
		const T = S => {
				if ((l.move(S), l.isVertical())) {
					Me(S);
					const { clientX: R, clientY: I } = S.touches[0],
						k = document.elementFromPoint(R, I);
					if (k) {
						const { index: $ } = k.dataset;
						$ && x !== $ && ((x = $), C(k));
					}
				}
			},
			A = () =>
				d(
					'div',
					{
						ref: a,
						class: $l('sidebar'),
						style: h.value,
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
						? d(Lo, { to: e.teleport }, { default: () => [A()] })
						: A(),
					(S = n.default) == null ? void 0 : S.call(n),
				]);
			}
		);
	},
});
const [fS, hS] = U('index-anchor'),
	gS = { index: q };
var mS = j({
	name: fS,
	props: gS,
	setup(e, { slots: t }) {
		const n = He({
				top: 0,
				left: null,
				rect: { top: 0, height: 0 },
				width: null,
				active: !1,
			}),
			o = D(),
			{ parent: a } = ot(Gf);
		if (!a) return;
		const i = () => n.active && a.props.sticky,
			l = L(() => {
				const { zIndex: r, highlightColor: c } = a.props;
				if (i())
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
					const u = Re(o);
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
							{ style: l.value, class: [hS({ sticky: r }), { [Wr]: r }] },
							[t.default ? t.default() : e.index],
						),
					],
				);
			}
		);
	},
});
const vS = G(mS),
	bS = G(dS),
	[yS, wo, pS] = U('list'),
	wS = {
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
var xS = j({
	name: yS,
	props: wS,
	emits: ['load', 'update:error', 'update:loading'],
	setup(e, { emit: t, slots: n }) {
		const o = D(e.loading),
			a = D(),
			i = D(),
			l = Xy(),
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
					const { direction: m } = e,
						y = +e.offset,
						v = Re(r);
					if (!v.height || io(a)) return;
					let w = !1;
					const b = Re(i);
					m === 'up'
						? (w = v.top - b.top <= y)
						: (w = b.bottom - v.bottom <= y),
						w && ((o.value = !0), t('update:loading', !0), t('load'));
				});
			},
			u = () => {
				if (e.finished) {
					const m = n.finished ? n.finished() : e.finishedText;
					if (m) return d('div', { class: wo('finished-text') }, [m]);
				}
			},
			h = () => {
				t('update:error', !1), c();
			},
			f = () => {
				if (e.error) {
					const m = n.error ? n.error() : e.errorText;
					if (m)
						return d(
							'div',
							{
								role: 'button',
								class: wo('error-text'),
								tabindex: 0,
								onClick: h,
							},
							[m],
						);
				}
			},
			g = () => {
				if (o.value && !e.finished && !e.disabled)
					return d('div', { class: wo('loading') }, [
						n.loading
							? n.loading()
							: d(
									Ft,
									{ class: wo('loading-icon') },
									{ default: () => [e.loadingText || pS('loading')] },
								),
					]);
			};
		return (
			ee(() => [e.loading, e.finished, e.error], c),
			l &&
				ee(l, m => {
					m && c();
				}),
			nd(() => {
				o.value = e.loading;
			}),
			Ue(() => {
				e.immediateCheck && c();
			}),
			ke({ check: c }),
			We('scroll', c, { target: r, passive: !0 }),
			() => {
				var m;
				const y = (m = n.default) == null ? void 0 : m.call(n),
					v = d('div', { ref: i, class: wo('placeholder') }, null);
				return d(
					'div',
					{ ref: a, role: 'feed', class: wo(), 'aria-busy': o.value },
					[
						e.direction === 'down' ? y : v,
						g(),
						u(),
						f(),
						e.direction === 'up' ? y : v,
					],
				);
			}
		);
	},
});
const SS = G(xS),
	[CS, ln] = U('nav-bar'),
	TS = {
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
var _S = j({
	name: CS,
	props: TS,
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
				const { title: u, fixed: h, border: f, zIndex: g } = e,
					m = yn(g),
					y = e.leftArrow || e.leftText || n.left,
					v = e.rightText || n.right;
				return d(
					'div',
					{
						ref: o,
						style: m,
						class: [
							ln({ fixed: h }),
							{ [Wr]: f, 'van-safe-area-top': e.safeAreaInsetTop },
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
const kS = G(_S),
	[ES, Xo] = U('notice-bar'),
	$S = {
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
var PS = j({
	name: ES,
	props: $S,
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
			h = v => {
				e.mode === 'closeable' && ((r.show = !1), t('close', v));
			},
			f = () => {
				if (n['right-icon']) return n['right-icon']();
				const v = u();
				if (v)
					return d(Ce, { name: v, class: Xo('right-icon'), onClick: h }, null);
			},
			g = () => {
				(r.offset = o),
					(r.duration = 0),
					it(() => {
						Bn(() => {
							(r.offset = -a), (r.duration = (a + o) / +e.speed), t('replay');
						});
					});
			},
			m = () => {
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
							onTransitionend: g,
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
						const p = Re(l).width,
							x = Re(s).width;
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
						[c(), m(), f()],
					),
					[[nt, r.show]],
				);
			}
		);
	},
});
const IS = G(PS),
	[RS, AS] = U('notify'),
	OS = ['lockScroll', 'position', 'show', 'teleport', 'zIndex'],
	BS = he({}, zo, {
		type: Z('danger'),
		color: String,
		message: q,
		position: Z('top'),
		className: Fe,
		background: String,
		lockScroll: Boolean,
	});
var DS = j({
	name: RS,
	props: BS,
	emits: ['update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = a => t('update:show', a);
		return () =>
			d(
				zt,
				_e(
					{
						class: [AS([e.type]), e.className],
						style: { color: e.color, background: e.background },
						overlay: !1,
						duration: 0.2,
						'onUpdate:show': o,
					},
					Ie(e, OS),
				),
				{ default: () => [n.default ? n.default() : e.message] },
			);
	},
});
const MS = G(DS),
	[LS, fa] = U('key'),
	VS = d('svg', { class: fa('collapse-icon'), viewBox: '0 0 30 24' }, [
		d(
			'path',
			{
				d: 'M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z',
				fill: 'currentColor',
			},
			null,
		),
	]),
	NS = d('svg', { class: fa('delete-icon'), viewBox: '0 0 32 22' }, [
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
	name: LS,
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
						return c || NS;
					case 'extra':
						return c || VS;
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
const [FS, kn] = U('number-keyboard'),
	zS = {
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
function HS(e) {
	for (let t = e.length - 1; t > 0; t--) {
		const n = Math.floor(Math.random() * (t + 1)),
			o = e[t];
		(e[t] = e[n]), (e[n] = o);
	}
	return e;
}
var jS = j({
	name: FS,
	inheritAttrs: !1,
	props: zS,
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
				return e.randomKeyOrder && HS(v), v;
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
			h = () => t(e.show ? 'show' : 'hide'),
			f = (v, w) => {
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
			g = () => {
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
			m = () =>
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
								Pl,
								{
									large: !0,
									text: e.deleteButtonText,
									type: 'delete',
									onPress: f,
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
								onPress: f,
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
				const v = g(),
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
												onAnimationend: h,
												onTouchstartPassive: Hr,
											},
											o,
										),
										[
											v,
											d('div', { class: kn('body') }, [
												d('div', { class: kn('keys') }, [m()]),
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
const WS = G(jS),
	[US, xo, Qc] = U('pagination'),
	Il = (e, t, n) => ({ number: e, text: t, active: n }),
	YS = {
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
var KS = j({
	name: US,
	props: YS,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = L(() => {
				const { pageCount: u, totalItems: h, itemsPerPage: f } = e,
					g = +u || Math.ceil(+h / +f);
				return Math.max(1, g);
			}),
			a = L(() => {
				const u = [],
					h = o.value,
					f = +e.showPageSize,
					{ modelValue: g, forceEllipses: m } = e;
				let y = 1,
					v = h;
				const w = f < h;
				w &&
					((y = Math.max(g - Math.floor(f / 2), 1)),
					(v = y + f - 1),
					v > h && ((v = h), (y = v - f + 1)));
				for (let b = y; b <= v; b++) {
					const C = Il(b, b, b === g);
					u.push(C);
				}
				if (w && f > 0 && m) {
					if (y > 1) {
						const b = Il(y - 1, '...');
						u.unshift(b);
					}
					if (v < h) {
						const b = Il(v + 1, '...');
						u.push(b);
					}
				}
				return u;
			}),
			i = (u, h) => {
				(u = et(u, 1, o.value)),
					e.modelValue !== u &&
						(t('update:modelValue', u), h && t('change', u));
			};
		Do(() => i(e.modelValue));
		const l = () =>
				d('li', { class: xo('page-desc') }, [
					n.pageDesc ? n.pageDesc() : `${e.modelValue}/${o.value}`,
				]),
			s = () => {
				const { mode: u, modelValue: h, showPrevButton: f } = e;
				if (!f) return;
				const g = n['prev-text'],
					m = h === 1;
				return d(
					'li',
					{
						class: [
							xo('item', { disabled: m, border: u === 'simple', prev: !0 }),
							ua,
						],
					},
					[
						d(
							'button',
							{ type: 'button', disabled: m, onClick: () => i(h - 1, !0) },
							[g ? g() : e.prevText || Qc('prev')],
						),
					],
				);
			},
			r = () => {
				const { mode: u, modelValue: h, showNextButton: f } = e;
				if (!f) return;
				const g = n['next-text'],
					m = h === o.value;
				return d(
					'li',
					{
						class: [
							xo('item', { disabled: m, border: u === 'simple', next: !0 }),
							ua,
						],
					},
					[
						d(
							'button',
							{ type: 'button', disabled: m, onClick: () => i(h + 1, !0) },
							[g ? g() : e.nextText || Qc('next')],
						),
					],
				);
			},
			c = () =>
				a.value.map(u =>
					d('li', { class: [xo('item', { active: u.active, page: !0 }), ua] }, [
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
			d('nav', { role: 'navigation', class: xo() }, [
				d('ul', { class: xo('items') }, [
					s(),
					e.mode === 'simple' ? l() : c(),
					r(),
				]),
			]);
	},
});
const qS = G(KS),
	[GS, Zo] = U('password-input'),
	XS = {
		info: String,
		mask: z,
		value: Z(''),
		gutter: q,
		length: ie(6),
		focused: Boolean,
		errorInfo: String,
	};
var ZS = j({
	name: GS,
	props: XS,
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
					const h = l[u],
						f = u !== 0 && !s,
						g = r && u === l.length;
					let m;
					u !== 0 && s && (m = { marginLeft: we(s) }),
						a.push(
							d(
								'li',
								{ class: [{ [Yd]: f }, Zo('item', { focus: g })], style: m },
								[
									i
										? d(
												'i',
												{ style: { visibility: h ? 'visible' : 'hidden' } },
												null,
											)
										: h,
									g && d('div', { class: Zo('cursor') }, null),
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
const JS = G(ZS),
	QS = G(l0);
function jt(e) {
	if (e == null) return window;
	if (e.toString() !== '[object Window]') {
		var t = e.ownerDocument;
		return (t && t.defaultView) || window;
	}
	return e;
}
function as(e) {
	var t = jt(e).Element;
	return e instanceof t || e instanceof Element;
}
function Lt(e) {
	var t = jt(e).HTMLElement;
	return e instanceof t || e instanceof HTMLElement;
}
function Xf(e) {
	if (typeof ShadowRoot > 'u') return !1;
	var t = jt(e).ShadowRoot;
	return e instanceof t || e instanceof ShadowRoot;
}
var Bo = Math.round;
function vr() {
	var e = navigator.userAgentData;
	return e != null && e.brands
		? e.brands
				.map(function (t) {
					return t.brand + '/' + t.version;
				})
				.join(' ')
		: navigator.userAgent;
}
function eC() {
	return !/^((?!chrome|android).)*safari/i.test(vr());
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
	var l = as(e) ? jt(e) : window,
		s = l.visualViewport,
		r = !eC() && n,
		c = (o.left + (r && s ? s.offsetLeft : 0)) / a,
		u = (o.top + (r && s ? s.offsetTop : 0)) / i,
		h = o.width / a,
		f = o.height / i;
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
function Zf(e) {
	var t = jt(e),
		n = t.pageXOffset,
		o = t.pageYOffset;
	return { scrollLeft: n, scrollTop: o };
}
function tC(e) {
	return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function nC(e) {
	return e === jt(e) || !Lt(e) ? Zf(e) : tC(e);
}
function gn(e) {
	return e ? (e.nodeName || '').toLowerCase() : null;
}
function tl(e) {
	return ((as(e) ? e.ownerDocument : e.document) || window.document)
		.documentElement;
}
function oC(e) {
	return _i(tl(e)).left + Zf(e).scrollLeft;
}
function mn(e) {
	return jt(e).getComputedStyle(e);
}
function is(e) {
	var t = mn(e),
		n = t.overflow,
		o = t.overflowX,
		a = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function aC(e) {
	var t = e.getBoundingClientRect(),
		n = Bo(t.width) / e.offsetWidth || 1,
		o = Bo(t.height) / e.offsetHeight || 1;
	return n !== 1 || o !== 1;
}
function iC(e, t, n) {
	n === void 0 && (n = !1);
	var o = Lt(t),
		a = Lt(t) && aC(t),
		i = tl(t),
		l = _i(e, a, n),
		s = { scrollLeft: 0, scrollTop: 0 },
		r = { x: 0, y: 0 };
	return (
		(o || (!o && !n)) &&
			((gn(t) !== 'body' || is(i)) && (s = nC(t)),
			Lt(t)
				? ((r = _i(t, !0)), (r.x += t.clientLeft), (r.y += t.clientTop))
				: i && (r.x = oC(i))),
		{
			x: l.left + s.scrollLeft - r.x,
			y: l.top + s.scrollTop - r.y,
			width: l.width,
			height: l.height,
		}
	);
}
function lC(e) {
	var t = _i(e),
		n = e.offsetWidth,
		o = e.offsetHeight;
	return (
		Math.abs(t.width - n) <= 1 && (n = t.width),
		Math.abs(t.height - o) <= 1 && (o = t.height),
		{ x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
	);
}
function ls(e) {
	return gn(e) === 'html'
		? e
		: e.assignedSlot || e.parentNode || (Xf(e) ? e.host : null) || tl(e);
}
function Jf(e) {
	return ['html', 'body', '#document'].indexOf(gn(e)) >= 0
		? e.ownerDocument.body
		: Lt(e) && is(e)
			? e
			: Jf(ls(e));
}
function ui(e, t) {
	var n;
	t === void 0 && (t = []);
	var o = Jf(e),
		a = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
		i = jt(o),
		l = a ? [i].concat(i.visualViewport || [], is(o) ? o : []) : o,
		s = t.concat(l);
	return a ? s : s.concat(ui(ls(l)));
}
function rC(e) {
	return ['table', 'td', 'th'].indexOf(gn(e)) >= 0;
}
function eu(e) {
	return !Lt(e) || mn(e).position === 'fixed' ? null : e.offsetParent;
}
function sC(e) {
	var t = /firefox/i.test(vr()),
		n = /Trident/i.test(vr());
	if (n && Lt(e)) {
		var o = mn(e);
		if (o.position === 'fixed') return null;
	}
	var a = ls(e);
	for (Xf(a) && (a = a.host); Lt(a) && ['html', 'body'].indexOf(gn(a)) < 0; ) {
		var i = mn(a);
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
function Qf(e) {
	for (var t = jt(e), n = eu(e); n && rC(n) && mn(n).position === 'static'; )
		n = eu(n);
	return n &&
		(gn(n) === 'html' || (gn(n) === 'body' && mn(n).position === 'static'))
		? t
		: n || sC(e) || t;
}
var Io = 'top',
	ki = 'bottom',
	Ta = 'right',
	ao = 'left',
	eh = 'auto',
	cC = [Io, ki, Ta, ao],
	th = 'start',
	Ei = 'end',
	uC = [].concat(cC, [eh]).reduce(function (e, t) {
		return e.concat([t, t + '-' + th, t + '-' + Ei]);
	}, []),
	dC = 'beforeRead',
	fC = 'read',
	hC = 'afterRead',
	gC = 'beforeMain',
	mC = 'main',
	vC = 'afterMain',
	bC = 'beforeWrite',
	yC = 'write',
	pC = 'afterWrite',
	br = [dC, fC, hC, gC, mC, vC, bC, yC, pC];
function wC(e) {
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
function xC(e) {
	var t = wC(e);
	return br.reduce(function (n, o) {
		return n.concat(
			t.filter(function (a) {
				return a.phase === o;
			}),
		);
	}, []);
}
function SC(e) {
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
	CC =
		'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
	tu = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function TC(e) {
	e.forEach(function (t) {
		[]
			.concat(Object.keys(t), tu)
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
						br.indexOf(t.phase) < 0 &&
							console.error(
								En(
									Xn,
									t.name,
									'"phase"',
									'either ' + br.join(', '),
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
								tu
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
						}) == null && console.error(En(CC, String(t.name), o, o));
					});
			});
	});
}
function _C(e, t) {
	var n = new Set();
	return e.filter(function (o) {
		var a = t(o);
		if (!n.has(a)) return n.add(a), !0;
	});
}
function nl(e) {
	return e.split('-')[0];
}
function kC(e) {
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
function nh(e) {
	return e.split('-')[1];
}
function EC(e) {
	return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function $C(e) {
	var t = e.reference,
		n = e.element,
		o = e.placement,
		a = o ? nl(o) : null,
		i = o ? nh(o) : null,
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
		case ao:
			r = { x: t.x - n.width, y: s };
			break;
		default:
			r = { x: t.x, y: t.y };
	}
	var c = a ? EC(a) : null;
	if (c != null) {
		var u = c === 'y' ? 'height' : 'width';
		switch (i) {
			case th:
				r[c] = r[c] - (t[u] / 2 - n[u] / 2);
				break;
			case Ei:
				r[c] = r[c] + (t[u] / 2 - n[u] / 2);
				break;
		}
	}
	return r;
}
var nu =
		'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.',
	PC =
		'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.',
	ou = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function au() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	return !t.some(function (o) {
		return !(o && typeof o.getBoundingClientRect == 'function');
	});
}
function IC(e) {
	e === void 0 && (e = {});
	var t = e,
		n = t.defaultModifiers,
		o = n === void 0 ? [] : n,
		a = t.defaultOptions,
		i = a === void 0 ? ou : a;
	return function (s, r, c) {
		c === void 0 && (c = i);
		var u = {
				placement: 'bottom',
				orderedModifiers: [],
				options: Object.assign({}, ou, i),
				modifiersData: {},
				elements: { reference: s, popper: r },
				attributes: {},
				styles: {},
			},
			h = [],
			f = !1,
			g = {
				state: u,
				setOptions: function (w) {
					var b = typeof w == 'function' ? w(u.options) : w;
					y(),
						(u.options = Object.assign({}, i, u.options, b)),
						(u.scrollParents = {
							reference: as(s)
								? ui(s)
								: s.contextElement
									? ui(s.contextElement)
									: [],
							popper: ui(r),
						});
					var C = xC(kC([].concat(o, u.options.modifiers)));
					u.orderedModifiers = C.filter(function (k) {
						return k.enabled;
					});
					{
						var p = _C([].concat(C, u.options.modifiers), function (k) {
							var $ = k.name;
							return $;
						});
						if ((TC(p), nl(u.options.placement) === eh)) {
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
						var T = mn(r),
							A = T.marginTop,
							S = T.marginRight,
							R = T.marginBottom,
							I = T.marginLeft;
						[A, S, R, I].some(function (k) {
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
					return m(), g.update();
				},
				forceUpdate: function () {
					if (!f) {
						var w = u.elements,
							b = w.reference,
							C = w.popper;
						if (!au(b, C)) {
							console.error(nu);
							return;
						}
						(u.rects = {
							reference: iC(b, Qf(C), u.options.strategy === 'fixed'),
							popper: lC(C),
						}),
							(u.reset = !1),
							(u.placement = u.options.placement),
							u.orderedModifiers.forEach(function (k) {
								return (u.modifiersData[k.name] = Object.assign({}, k.data));
							});
						for (var p = 0, x = 0; x < u.orderedModifiers.length; x++) {
							if (((p += 1), p > 100)) {
								console.error(PC);
								break;
							}
							if (u.reset === !0) {
								(u.reset = !1), (x = -1);
								continue;
							}
							var T = u.orderedModifiers[x],
								A = T.fn,
								S = T.options,
								R = S === void 0 ? {} : S,
								I = T.name;
							typeof A == 'function' &&
								(u = A({ state: u, options: R, name: I, instance: g }) || u);
						}
					}
				},
				update: SC(function () {
					return new Promise(function (v) {
						g.forceUpdate(), v(u);
					});
				}),
				destroy: function () {
					y(), (f = !0);
				},
			};
		if (!au(s, r)) return console.error(nu), g;
		g.setOptions(c).then(function (v) {
			!f && c.onFirstUpdate && c.onFirstUpdate(v);
		});
		function m() {
			u.orderedModifiers.forEach(function (v) {
				var w = v.name,
					b = v.options,
					C = b === void 0 ? {} : b,
					p = v.effect;
				if (typeof p == 'function') {
					var x = p({ state: u, name: w, instance: g, options: C }),
						T = function () {};
					h.push(x || T);
				}
			});
		}
		function y() {
			h.forEach(function (v) {
				return v();
			}),
				(h = []);
		}
		return g;
	};
}
var Qa = { passive: !0 };
function RC(e) {
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
var AC = {
	name: 'eventListeners',
	enabled: !0,
	phase: 'write',
	fn: function () {},
	effect: RC,
	data: {},
};
function OC(e) {
	var t = e.state,
		n = e.name;
	t.modifiersData[n] = $C({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: 'absolute',
		placement: t.placement,
	});
}
var BC = {
		name: 'popperOffsets',
		enabled: !0,
		phase: 'read',
		fn: OC,
		data: {},
	},
	DC = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function MC(e) {
	var t = e.x,
		n = e.y,
		o = window,
		a = o.devicePixelRatio || 1;
	return { x: Bo(t * a) / a || 0, y: Bo(n * a) / a || 0 };
}
function iu(e) {
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
		h = e.isFixed,
		f = l.x,
		g = f === void 0 ? 0 : f,
		m = l.y,
		y = m === void 0 ? 0 : m,
		v = typeof u == 'function' ? u({ x: g, y }) : { x: g, y };
	(g = v.x), (y = v.y);
	var w = l.hasOwnProperty('x'),
		b = l.hasOwnProperty('y'),
		C = ao,
		p = Io,
		x = window;
	if (c) {
		var T = Qf(n),
			A = 'clientHeight',
			S = 'clientWidth';
		if (
			(T === jt(n) &&
				((T = tl(n)),
				mn(T).position !== 'static' &&
					s === 'absolute' &&
					((A = 'scrollHeight'), (S = 'scrollWidth'))),
			(T = T),
			a === Io || ((a === ao || a === Ta) && i === Ei))
		) {
			p = ki;
			var R = h && T === x && x.visualViewport ? x.visualViewport.height : T[A];
			(y -= R - o.height), (y *= r ? 1 : -1);
		}
		if (a === ao || ((a === Io || a === ki) && i === Ei)) {
			C = Ta;
			var I = h && T === x && x.visualViewport ? x.visualViewport.width : T[S];
			(g -= I - o.width), (g *= r ? 1 : -1);
		}
	}
	var k = Object.assign({ position: s }, c && DC),
		$ = u === !0 ? MC({ x: g, y }) : { x: g, y };
	if (((g = $.x), (y = $.y), r)) {
		var B;
		return Object.assign(
			{},
			k,
			((B = {}),
			(B[p] = b ? '0' : ''),
			(B[C] = w ? '0' : ''),
			(B.transform =
				(x.devicePixelRatio || 1) <= 1
					? 'translate(' + g + 'px, ' + y + 'px)'
					: 'translate3d(' + g + 'px, ' + y + 'px, 0)'),
			B),
		);
	}
	return Object.assign(
		{},
		k,
		((t = {}),
		(t[p] = b ? y + 'px' : ''),
		(t[C] = w ? g + 'px' : ''),
		(t.transform = ''),
		t),
	);
}
function LC(e) {
	var t = e.state,
		n = e.options,
		o = n.gpuAcceleration,
		a = o === void 0 ? !0 : o,
		i = n.adaptive,
		l = i === void 0 ? !0 : i,
		s = n.roundOffsets,
		r = s === void 0 ? !0 : s;
	{
		var c = mn(t.elements.popper).transitionProperty || '';
		l &&
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
		placement: nl(t.placement),
		variation: nh(t.placement),
		popper: t.elements.popper,
		popperRect: t.rects.popper,
		gpuAcceleration: a,
		isFixed: t.options.strategy === 'fixed',
	};
	t.modifiersData.popperOffsets != null &&
		(t.styles.popper = Object.assign(
			{},
			t.styles.popper,
			iu(
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
				iu(
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
var VC = {
	name: 'computeStyles',
	enabled: !0,
	phase: 'beforeWrite',
	fn: LC,
	data: {},
};
function NC(e) {
	var t = e.state;
	Object.keys(t.elements).forEach(function (n) {
		var o = t.styles[n] || {},
			a = t.attributes[n] || {},
			i = t.elements[n];
		!Lt(i) ||
			!gn(i) ||
			(Object.assign(i.style, o),
			Object.keys(a).forEach(function (l) {
				var s = a[l];
				s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? '' : s);
			}));
	});
}
function FC(e) {
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
					!gn(a) ||
					(Object.assign(a.style, s),
					Object.keys(i).forEach(function (r) {
						a.removeAttribute(r);
					}));
			});
		}
	);
}
var zC = {
		name: 'applyStyles',
		enabled: !0,
		phase: 'write',
		fn: NC,
		effect: FC,
		requires: ['computeStyles'],
	},
	HC = [AC, BC, VC, zC],
	jC = IC({ defaultModifiers: HC });
function WC(e, t, n) {
	var o = nl(e),
		a = [ao, Io].indexOf(o) >= 0 ? -1 : 1,
		i = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
		l = i[0],
		s = i[1];
	return (
		(l = l || 0),
		(s = (s || 0) * a),
		[ao, Ta].indexOf(o) >= 0 ? { x: s, y: l } : { x: l, y: s }
	);
}
function UC(e) {
	var t = e.state,
		n = e.options,
		o = e.name,
		a = n.offset,
		i = a === void 0 ? [0, 0] : a,
		l = uC.reduce(function (u, h) {
			return (u[h] = WC(h, t.rects, i)), u;
		}, {}),
		s = l[t.placement],
		r = s.x,
		c = s.y;
	t.modifiersData.popperOffsets != null &&
		((t.modifiersData.popperOffsets.x += r),
		(t.modifiersData.popperOffsets.y += c)),
		(t.modifiersData[o] = l);
}
var YC = {
	name: 'offset',
	enabled: !0,
	phase: 'main',
	requires: ['popperOffsets'],
	fn: UC,
};
const [KC, Zn] = U('popover'),
	qC = [
		'overlay',
		'duration',
		'teleport',
		'overlayStyle',
		'overlayClass',
		'closeOnClickOverlay',
	],
	GC = {
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
		overlayClass: Fe,
		overlayStyle: Object,
		closeOnClickAction: z,
		closeOnClickOverlay: z,
		closeOnClickOutside: z,
		offset: { type: Array, default: () => [0, 8] },
		teleport: { type: [String, Object], default: 'body' },
	};
var XC = j({
	name: KC,
	props: GC,
	emits: ['select', 'touchstart', 'update:show'],
	setup(e, { emit: t, slots: n, attrs: o }) {
		let a;
		const i = D(),
			l = D(),
			s = D(),
			r = qr(
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
					he({}, YC, { options: { offset: e.offset } }),
				],
			}),
			u = () =>
				l.value && s.value ? jC(l.value, s.value.popupRef.value, c()) : null,
			h = () => {
				Te(() => {
					r.value &&
						(a
							? a.setOptions(c())
							: ((a = u()),
								kt &&
									(window.addEventListener('animationend', h),
									window.addEventListener('transitionend', h))));
				});
			},
			f = b => {
				r.value = b;
			},
			g = () => {
				e.trigger === 'click' && (r.value = !r.value);
			},
			m = (b, C) => {
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
										{ [Wr]: e.actionsDirection === 'vertical' },
									],
								},
								[b.text],
							),
						],
			w = (b, C) => {
				const { icon: p, color: x, disabled: T, className: A } = b;
				return d(
					'div',
					{
						role: 'menuitem',
						class: [
							Zn('action', { disabled: T, 'with-icon': p }),
							{ [Bb]: e.actionsDirection === 'horizontal' },
							A,
						],
						style: { color: x },
						tabindex: T ? void 0 : 0,
						'aria-disabled': T || void 0,
						onClick: () => m(b, C),
					},
					[v(b, C)],
				);
			};
		return (
			Ue(() => {
				h(),
					Do(() => {
						var b;
						i.value = (b = s.value) == null ? void 0 : b.popupRef.value;
					});
			}),
			en(() => {
				a &&
					(kt &&
						(window.removeEventListener('animationend', h),
						window.removeEventListener('transitionend', h)),
					a.destroy(),
					(a = null));
			}),
			ee(() => [r.value, e.offset, e.placement], h),
			ji([l, i], y, { eventName: 'touchstart' }),
			() => {
				var b;
				return d(Je, null, [
					d('span', { ref: l, class: Zn('wrapper'), onClick: g }, [
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
							Ci(),
							Ie(e, qC),
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
const ZC = G(XC),
	[JC, Rl] = U('progress'),
	QC = {
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
var e1 = j({
	name: JC,
	props: QC,
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
						{ style: r, class: Rl('pivot', { inactive: e.inactive }) },
						[s],
					);
				}
			};
		return () => {
			const { trackColor: o, percentage: a, strokeWidth: i } = e,
				l = { background: o, height: we(i) },
				s = { width: `${a}%`, background: t.value };
			return d('div', { class: Rl(), style: l }, [
				d(
					'span',
					{ class: Rl('portion', { inactive: e.inactive }), style: s },
					null,
				),
				n(),
			]);
		};
	},
});
const t1 = G(e1),
	[n1, Jo, o1] = U('pull-refresh'),
	oh = 50,
	a1 = ['pulling', 'loosing', 'success'],
	i1 = {
		disabled: Boolean,
		modelValue: Boolean,
		headHeight: ie(oh),
		successText: String,
		pullingText: String,
		loosingText: String,
		loadingText: String,
		pullDistance: q,
		successDuration: ie(500),
		animationDuration: ie(300),
	};
var l1 = j({
	name: n1,
	props: i1,
	emits: ['change', 'refresh', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		let o;
		const a = D(),
			i = D(),
			l = Fo(a),
			s = He({ status: 'normal', distance: 0, duration: 0 }),
			r = Et(),
			c = () => {
				if (e.headHeight !== oh) return { height: `${e.headHeight}px` };
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
			g = () => {
				const { status: p } = s;
				return p === 'normal' ? '' : e[`${p}Text`] || o1(p);
			},
			m = () => {
				const { status: p, distance: x } = s;
				if (n[p]) return n[p]({ distance: x });
				const T = [];
				return (
					a1.includes(p) && T.push(d('div', { class: Jo('text') }, [g()])),
					p === 'loading' &&
						T.push(d(Ft, { class: Jo('loading') }, { default: g })),
					T
				);
			},
			y = () => {
				(s.status = 'success'),
					setTimeout(() => {
						f(0);
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
							d('div', { class: Jo('head'), style: c() }, [m()]),
							(p = n.default) == null ? void 0 : p.call(n),
						],
					),
				]);
			}
		);
	},
});
const r1 = G(l1),
	[s1, ei] = U('rate');
function c1(e, t, n, o) {
	return e >= t
		? { status: 'full', value: 1 }
		: e + 0.5 >= t && n && !o
			? { status: 'half', value: 0.5 }
			: e + 1 >= t && n && o
				? { status: 'half', value: Math.round((e - t + 1) * 1e10) / 1e10 }
				: { status: 'void', value: 0 };
}
const u1 = {
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
var d1 = j({
	name: s1,
	props: u1,
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
					.map((C, p) => c1(e.modelValue, p + 1, e.allowHalf, e.readonly)),
			);
		let c,
			u,
			h = Number.MAX_SAFE_INTEGER,
			f = Number.MIN_SAFE_INTEGER;
		const g = () => {
				u = Re(i);
				const C = o.value.map(Re);
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
			m = (C, p) => {
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
				l.value ||
					C === e.modelValue ||
					(t('update:modelValue', C), t('change', C));
			},
			v = C => {
				s.value || (n.start(C), g());
			},
			w = C => {
				if (!s.value && (n.move(C), n.isHorizontal() && !n.isTap.value)) {
					const { clientX: p, clientY: x } = C.touches[0];
					Me(C), y(m(p, x));
				}
			},
			b = (C, p) => {
				const {
						icon: x,
						size: T,
						color: A,
						count: S,
						gutter: R,
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
					ge = B && C.value > 0 && C.value < 1;
				let ve;
				R && O !== +S && (ve = { paddingRight: we(R) });
				const ne = se => {
					g();
					let be = B ? m(se.clientX, se.clientY) : O;
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
								color: k ? V : F ? A : $,
								classPrefix: X,
							},
							null,
						),
						ge &&
							d(
								Ce,
								{
									size: T,
									style: { width: C.value + 'em' },
									name: Y ? I : x,
									class: ei('icon', ['half', { disabled: k, full: !Y }]),
									color: k ? V : Y ? $ : A,
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
const f1 = G(d1),
	h1 = {
		figureArr: Ve(),
		delay: Number,
		duration: Ke(2),
		isStart: Boolean,
		direction: Z('down'),
		height: Ke(40),
	},
	[g1, Al] = U('rolling-text-item');
var m1 = j({
	name: g1,
	props: h1,
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
			d('div', { class: Al([e.direction]), style: a.value }, [
				d('div', { class: Al('box', { animate: e.isStart }) }, [
					Array.isArray(t.value) &&
						t.value.map(i =>
							d('div', { class: Al('item'), style: o.value }, [i]),
						),
				]),
			]);
	},
});
const [v1, b1] = U('rolling-text'),
	y1 = {
		startNum: Ke(0),
		targetNum: Number,
		textList: Ve(),
		duration: Ke(2),
		autoStart: z,
		direction: Z('down'),
		stopOrder: Z('ltr'),
		height: Ke(40),
	},
	p1 = 2;
var w1 = j({
	name: v1,
	props: y1,
	setup(e) {
		const t = L(() => Array.isArray(e.textList) && e.textList.length),
			n = L(() =>
				t.value
					? e.textList[0].length
					: `${Math.max(e.startNum, e.targetNum)}`.length,
			),
			o = h => {
				const f = [];
				for (let g = 0; g < e.textList.length; g++) f.push(e.textList[g][h]);
				return f;
			},
			a = L(() =>
				t.value
					? new Array(n.value).fill('')
					: Ot(e.targetNum, n.value).split(''),
			),
			i = L(() => Ot(e.startNum, n.value).split('')),
			l = h => {
				const f = +i.value[h],
					g = +a.value[h],
					m = [];
				for (let y = f; y <= 9; y++) m.push(y);
				for (let y = 0; y <= p1; y++) for (let v = 0; v <= 9; v++) m.push(v);
				for (let y = 0; y <= g; y++) m.push(y);
				return m;
			},
			s = (h, f) => (e.stopOrder === 'ltr' ? 0.2 * h : 0.2 * (f - 1 - h)),
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
				h => {
					h && c();
				},
			),
			ke({ start: c, reset: u }),
			() =>
				d('div', { class: b1() }, [
					a.value.map((h, f) =>
						d(
							m1,
							{
								figureArr: t.value ? o(f) : l(f),
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
const x1 = G(w1),
	S1 = G(mw),
	[C1, Qo, T1] = U('search'),
	_1 = he({}, Jr, {
		label: String,
		shape: Z('square'),
		leftIcon: Z('search'),
		clearable: z,
		actionText: String,
		background: String,
		showAction: Boolean,
	});
var k1 = j({
	name: C1,
	props: _1,
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
					const x = e.actionText || T1('cancel');
					return d(
						'div',
						{ class: Qo('action'), role: 'button', tabindex: 0, onClick: l },
						[n.action ? n.action() : x],
					);
				}
			},
			h = () => {
				var x;
				return (x = i.value) == null ? void 0 : x.blur();
			},
			f = () => {
				var x;
				return (x = i.value) == null ? void 0 : x.focus();
			},
			g = x => t('blur', x),
			m = x => t('focus', x),
			y = x => t('clear', x),
			v = x => t('clickInput', x),
			w = x => t('clickLeftIcon', x),
			b = x => t('clickRightIcon', x),
			C = Object.keys(Jr),
			p = () => {
				const x = he({}, o, Ie(e, C), { id: r() }),
					T = A => t('update:modelValue', A);
				return d(
					un,
					_e(
						{
							ref: i,
							type: 'search',
							class: Qo('field', { 'with-message': x.errorMessage }),
							border: !1,
							onBlur: g,
							onFocus: m,
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
			ke({ focus: f, blur: h }),
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
const E1 = G(k1),
	$1 = e => (e == null ? void 0 : e.includes('/')),
	P1 = [...Yr, 'round', 'closeOnPopstate', 'safeAreaInsetBottom'],
	I1 = {
		qq: 'qq',
		link: 'link-o',
		weibo: 'weibo',
		qrcode: 'qr',
		poster: 'photo-o',
		wechat: 'wechat',
		'weapp-qrcode': 'miniprogram-o',
		'wechat-moments': 'wechat-moments',
	},
	[R1, It, A1] = U('share-sheet'),
	O1 = he({}, zo, {
		title: String,
		round: z,
		options: Ve(),
		cancelText: String,
		description: String,
		closeOnPopstate: z,
		safeAreaInsetBottom: z,
	});
var B1 = j({
	name: R1,
	props: O1,
	emits: ['cancel', 'select', 'update:show'],
	setup(e, { emit: t, slots: n }) {
		const o = f => t('update:show', f),
			a = () => {
				o(!1), t('cancel');
			},
			i = (f, g) => t('select', f, g),
			l = () => {
				const f = n.title ? n.title() : e.title,
					g = n.description ? n.description() : e.description;
				if (f || g)
					return d('div', { class: It('header') }, [
						f && d('h2', { class: It('title') }, [f]),
						g && d('span', { class: It('description') }, [g]),
					]);
			},
			s = f =>
				$1(f)
					? d('img', { src: f, class: It('image-icon') }, null)
					: d('div', { class: It('icon', [f]) }, [
							d(Ce, { name: I1[f] || f }, null),
						]),
			r = (f, g) => {
				const { name: m, icon: y, className: v, description: w } = f;
				return d(
					'div',
					{
						role: 'button',
						tabindex: 0,
						class: [It('option'), v, vt],
						onClick: () => i(f, g),
					},
					[
						s(y),
						m && d('span', { class: It('name') }, [m]),
						w && d('span', { class: It('option-description') }, [w]),
					],
				);
			},
			c = (f, g) =>
				d('div', { class: It('options', { border: g }) }, [f.map(r)]),
			u = () => {
				const { options: f } = e;
				return Array.isArray(f[0]) ? f.map((g, m) => c(g, m !== 0)) : c(f);
			},
			h = () => {
				var f;
				const g = (f = e.cancelText) != null ? f : A1('cancel');
				if (n.cancel || g)
					return d(
						'button',
						{ type: 'button', class: It('cancel'), onClick: a },
						[n.cancel ? n.cancel() : g],
					);
			};
		return () =>
			d(
				zt,
				_e({ class: It(), position: 'bottom', 'onUpdate:show': o }, Ie(e, P1)),
				{ default: () => [l(), u(), h()] },
			);
	},
});
const D1 = G(B1),
	[ah, M1] = U('sidebar'),
	ih = Symbol(ah),
	L1 = { modelValue: ie(0) };
var V1 = j({
	name: ah,
	props: L1,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt(ih),
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
				return d('div', { role: 'tablist', class: M1() }, [
					(l = n.default) == null ? void 0 : l.call(n),
				]);
			}
		);
	},
});
const lh = G(V1),
	[N1, lu] = U('sidebar-item'),
	F1 = he({}, Un, {
		dot: Boolean,
		title: String,
		badge: q,
		disabled: Boolean,
		badgeProps: Object,
	});
var z1 = j({
	name: N1,
	props: F1,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = ro(),
			{ parent: a, index: i } = ot(ih);
		if (!a) return;
		const l = () => {
			e.disabled || (t('click', i.value), a.setActive(i.value), o());
		};
		return () => {
			const { dot: s, badge: r, title: c, disabled: u } = e,
				h = i.value === a.getActive();
			return d(
				'div',
				{
					role: 'tab',
					class: lu({ select: h, disabled: u }),
					tabindex: u ? void 0 : 0,
					'aria-selected': h,
					onClick: l,
				},
				[
					d(so, _e({ dot: s, class: lu('text'), content: r }, e.badgeProps), {
						default: () => [n.title ? n.title() : c],
					}),
				],
			);
		};
	},
});
const rh = G(z1),
	[H1, Ol, ru] = U('signature'),
	j1 = {
		tips: String,
		type: Z('png'),
		penColor: Z('#000'),
		lineWidth: Ke(3),
		clearButtonText: String,
		backgroundColor: Z(''),
		confirmButtonText: String,
	},
	W1 = () => {
		var e;
		const t = document.createElement('canvas');
		return !!((e = t.getContext) != null && e.call(t, '2d'));
	};
var U1 = j({
	name: H1,
	props: j1,
	emits: ['submit', 'clear', 'start', 'end', 'signing'],
	setup(e, { emit: t }) {
		const n = D(),
			o = D(),
			a = L(() => (n.value ? n.value.getContext('2d') : null)),
			i = kt ? W1() : !0;
		let l = 0,
			s = 0,
			r;
		const c = () => {
				if (!a.value) return !1;
				a.value.beginPath(),
					(a.value.lineWidth = e.lineWidth),
					(a.value.strokeStyle = e.penColor),
					(r = Re(n)),
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
					g(p);
				}
				return b.toDataURL() === C.toDataURL();
			},
			g = b => {
				b &&
					e.backgroundColor &&
					((b.fillStyle = e.backgroundColor), b.fillRect(0, 0, l, s));
			},
			m = () => {
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
					(a.value.clearRect(0, 0, l, s), a.value.closePath(), g(a.value)),
					t('clear');
			},
			v = () => {
				var b, C, p;
				if (i && n.value) {
					const x = n.value,
						T = kt ? window.devicePixelRatio : 1;
					(l = x.width =
						(((b = o.value) == null ? void 0 : b.offsetWidth) || 0) * T),
						(s = x.height =
							(((C = o.value) == null ? void 0 : C.offsetHeight) || 0) * T),
						(p = a.value) == null || p.scale(T, T),
						g(a.value);
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
			ke({ resize: w, clear: y, submit: m }),
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
										onTouchend: h,
									},
									null,
								)
							: d('p', null, [e.tips]),
					]),
					d('div', { class: Ol('footer') }, [
						d(
							lt,
							{ size: 'small', onClick: y },
							{ default: () => [e.clearButtonText || ru('clear')] },
						),
						d(
							lt,
							{ type: 'primary', size: 'small', onClick: m },
							{ default: () => [e.confirmButtonText || ru('confirm')] },
						),
					]),
				])
		);
	},
});
const Y1 = G(U1),
	[K1, q1] = U('skeleton-title'),
	G1 = { round: Boolean, titleWidth: q };
var X1 = j({
	name: K1,
	props: G1,
	setup(e) {
		return () =>
			d(
				'h3',
				{ class: q1([{ round: e.round }]), style: { width: we(e.titleWidth) } },
				null,
			);
	},
});
const sh = G(X1);
var Z1 = sh;
const [J1, Q1] = U('skeleton-avatar'),
	eT = { avatarSize: q, avatarShape: Z('round') };
var tT = j({
	name: J1,
	props: eT,
	setup(e) {
		return () =>
			d('div', { class: Q1([e.avatarShape]), style: bn(e.avatarSize) }, null);
	},
});
const ch = G(tT);
var nT = ch;
const rs = '100%',
	oT = { round: Boolean, rowWidth: { type: q, default: rs } },
	[aT, iT] = U('skeleton-paragraph');
var lT = j({
	name: aT,
	props: oT,
	setup(e) {
		return () =>
			d(
				'div',
				{ class: iT([{ round: e.round }]), style: { width: e.rowWidth } },
				null,
			);
	},
});
const uh = G(lT);
var rT = uh;
const [sT, su] = U('skeleton'),
	cT = '60%',
	uT = {
		row: ie(0),
		round: Boolean,
		title: Boolean,
		titleWidth: q,
		avatar: Boolean,
		avatarSize: q,
		avatarShape: Z('round'),
		loading: z,
		animate: z,
		rowWidth: { type: [Number, String, Array], default: rs },
	};
var dT = j({
	name: sT,
	inheritAttrs: !1,
	props: uT,
	setup(e, { slots: t, attrs: n }) {
		const o = () => {
				if (e.avatar)
					return d(
						nT,
						{ avatarShape: e.avatarShape, avatarSize: e.avatarSize },
						null,
					);
			},
			a = () => {
				if (e.title)
					return d(Z1, { round: e.round, titleWidth: e.titleWidth }, null);
			},
			i = r => {
				const { rowWidth: c } = e;
				return c === rs && r === +e.row - 1 ? cT : Array.isArray(c) ? c[r] : c;
			},
			l = () =>
				Array(+e.row)
					.fill('')
					.map((r, c) =>
						d(rT, { key: c, round: e.round, rowWidth: we(i(c)) }, null),
					),
			s = () =>
				t.template
					? t.template()
					: d(Je, null, [o(), d('div', { class: su('content') }, [a(), l()])]);
		return () => {
			var r;
			return e.loading
				? d(
						'div',
						_e({ class: su({ animate: e.animate, round: e.round }) }, n),
						[s()],
					)
				: (r = t.default) == null
					? void 0
					: r.call(t);
		};
	},
});
const fT = G(dT),
	[hT, cu] = U('skeleton-image'),
	gT = { imageSize: q, imageShape: Z('square') };
var mT = j({
	name: hT,
	props: gT,
	setup(e) {
		return () =>
			d('div', { class: cu([e.imageShape]), style: bn(e.imageSize) }, [
				d(Ce, { name: 'photo', class: cu('icon') }, null),
			]);
	},
});
const vT = G(mT),
	[bT, ea] = U('slider'),
	yT = {
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
var pT = j({
	name: bT,
	props: yT,
	emits: ['change', 'dragEnd', 'dragStart', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		let o, a, i;
		const l = D(),
			s = [D(), D()],
			r = D(),
			c = Et(),
			u = L(() => Number(e.max) - Number(e.min)),
			h = L(() => {
				const k = e.vertical ? 'width' : 'height';
				return { background: e.inactiveColor, [k]: we(e.barHeight) };
			}),
			f = k => e.range && Array.isArray(k),
			g = () => {
				const { modelValue: k, min: $ } = e;
				return f(k)
					? `${((k[1] - k[0]) * 100) / u.value}%`
					: `${((k - Number($)) * 100) / u.value}%`;
			},
			m = () => {
				const { modelValue: k, min: $ } = e;
				return f(k) ? `${((k[0] - Number($)) * 100) / u.value}%` : '0%';
			},
			y = L(() => {
				const $ = {
					[e.vertical ? 'height' : 'width']: g(),
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
				return ($[B()] = m()), $;
			}),
			v = k => {
				const $ = +e.min,
					B = +e.max,
					X = +e.step;
				k = et(k, $, B);
				const V = Math.round((k - $) / X) * X;
				return Hd($, V);
			},
			w = () => {
				const k = e.modelValue;
				f(k) ? (i = k.map(v)) : (i = v(k));
			},
			b = k => {
				var $, B;
				const X = ($ = k[0]) != null ? $ : Number(e.min),
					V = (B = k[1]) != null ? B : Number(e.max);
				return X > V ? [V, X] : [X, V];
			},
			C = (k, $) => {
				f(k) ? (k = b(k).map(v)) : (k = v(k)),
					Xt(k, e.modelValue) || t('update:modelValue', k),
					$ && !Xt(k, i) && t('change', k);
			},
			p = k => {
				if ((k.stopPropagation(), e.disabled || e.readonly)) return;
				w();
				const { min: $, reverse: B, vertical: X, modelValue: V } = e,
					O = Re(l),
					F = () =>
						X
							? B
								? O.bottom - k.clientY
								: k.clientY - O.top
							: B
								? O.right - k.clientX
								: k.clientX - O.left,
					Y = X ? O.height : O.width,
					ge = Number($) + (F() / Y) * u.value;
				if (f(V)) {
					const [ve, ne] = V,
						se = (ve + ne) / 2;
					ge <= se ? C([ge, ne], !0) : C([ve, ge], !0);
				} else C(ge, !0);
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
				const $ = Re(l),
					B = e.vertical ? c.deltaY.value : c.deltaX.value,
					X = e.vertical ? $.height : $.width;
				let V = (B / X) * u.value;
				if ((e.reverse && (V = -V), f(i))) {
					const O = e.reverse ? 1 - o : o;
					a[O] = i[O] + V;
				} else a = i + V;
				C(a);
			},
			A = k => {
				e.disabled ||
					e.readonly ||
					(r.value === 'dragging' && (C(a, !0), t('dragEnd', k)),
					(r.value = ''));
			},
			S = k =>
				typeof k == 'number'
					? ea('button-wrapper', ['left', 'right'][k])
					: ea('button-wrapper', e.reverse ? 'left' : 'right'),
			R = (k, $) => {
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
						onTouchend: A,
						onTouchcancel: A,
						onClick: Hr,
					},
					[R($, k)],
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
						style: h.value,
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
const wT = G(pT),
	[uu, xT] = U('space'),
	ST = {
		align: String,
		direction: { type: String, default: 'horizontal' },
		size: { type: [Number, String, Array], default: 8 },
		wrap: Boolean,
		fill: Boolean,
	};
function dh(e = []) {
	const t = [];
	return (
		e.forEach(n => {
			Array.isArray(n)
				? t.push(...n)
				: n.type === Je
					? t.push(...dh(n.children))
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
var CT = j({
	name: uu,
	props: ST,
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
			const l = dh((i = t.default) == null ? void 0 : i.call(t));
			return d(
				'div',
				{
					class: [
						xT({
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
								class: `${uu}-item`,
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
const TT = G(CT),
	[fh, du] = U('steps'),
	_T = {
		active: ie(0),
		direction: Z('horizontal'),
		activeIcon: Z('checked'),
		iconPrefix: String,
		finishIcon: String,
		activeColor: String,
		inactiveIcon: String,
		inactiveColor: String,
	},
	hh = Symbol(fh);
var kT = j({
	name: fh,
	props: _T,
	emits: ['clickStep'],
	setup(e, { emit: t, slots: n }) {
		const { linkChildren: o } = rt(hh);
		return (
			o({ props: e, onClickStep: i => t('clickStep', i) }),
			() => {
				var i;
				return d('div', { class: du([e.direction]) }, [
					d('div', { class: du('items') }, [
						(i = n.default) == null ? void 0 : i.call(n),
					]),
				]);
			}
		);
	},
});
const [ET, $n] = U('step');
var $T = j({
	name: ET,
	setup(e, { slots: t }) {
		const { parent: n, index: o } = ot(hh);
		if (!n) return;
		const a = n.props,
			i = () => {
				const h = +a.active;
				return o.value < h ? 'finish' : o.value === h ? 'process' : 'waiting';
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
					iconPrefix: h,
					finishIcon: f,
					activeIcon: g,
					activeColor: m,
					inactiveIcon: y,
				} = a;
				return l()
					? t['active-icon']
						? t['active-icon']()
						: d(
								Ce,
								{
									class: $n('icon', 'active'),
									name: g,
									color: m,
									classPrefix: h,
								},
								null,
							)
					: i() === 'finish' && (f || t['finish-icon'])
						? t['finish-icon']
							? t['finish-icon']()
							: d(
									Ce,
									{
										class: $n('icon', 'finish'),
										name: f,
										color: m,
										classPrefix: h,
									},
									null,
								)
						: t['inactive-icon']
							? t['inactive-icon']()
							: y
								? d(Ce, { class: $n('icon'), name: y, classPrefix: h }, null)
								: d('i', { class: $n('circle'), style: s.value }, null);
			};
		return () => {
			var h;
			const f = i();
			return d('div', { class: [pn, $n([a.direction, { [f]: f }])] }, [
				d(
					'div',
					{ class: $n('title', { active: l() }), style: r.value, onClick: c },
					[(h = t.default) == null ? void 0 : h.call(t)],
				),
				d('div', { class: $n('circle-container'), onClick: c }, [u()]),
				d('div', { class: $n('line'), style: s.value }, null),
			]);
		};
	},
});
const PT = G($T),
	[IT, ti] = U('stepper'),
	RT = 200,
	ni = (e, t) => String(e) === String(t),
	AT = {
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
var OT = j({
	name: IT,
	props: AT,
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
		const n = (S, R = !0) => {
				const { min: I, max: k, allowEmpty: $, decimalLength: B } = e;
				return (
					($ && S === '') ||
						((S = ir(String(S), !e.integer)),
						(S = S === '' ? 0 : +S),
						(S = Number.isNaN(S) ? +I : S),
						(S = R ? Math.max(Math.min(+k, S), +I) : S),
						$e(B) && (S = S.toFixed(+B))),
					S
				);
			},
			o = () => {
				var S;
				const R = (S = e.modelValue) != null ? S : e.defaultValue,
					I = n(R);
				return ni(I, e.modelValue) || t('update:modelValue', I), I;
			};
		let a;
		const i = D(),
			l = D(o()),
			s = L(() => e.disabled || e.disableMinus || +l.value <= +e.min),
			r = L(() => e.disabled || e.disablePlus || +l.value >= +e.max),
			c = L(() => ({ width: we(e.inputWidth), height: we(e.buttonSize) })),
			u = L(() => bn(e.buttonSize)),
			h = () => {
				const S = n(l.value);
				ni(S, l.value) || (l.value = S);
			},
			f = S => {
				e.beforeChange
					? Wn(e.beforeChange, {
							args: [S],
							done() {
								l.value = S;
							},
						})
					: (l.value = S);
			},
			g = () => {
				if ((a === 'plus' && r.value) || (a === 'minus' && s.value)) {
					t('overlimit', a);
					return;
				}
				const S = a === 'minus' ? -e.step : +e.step,
					R = n(Hd(+l.value, S));
				f(R), t(a);
			},
			m = S => {
				const R = S.target,
					{ value: I } = R,
					{ decimalLength: k } = e;
				let $ = ir(String(I), !e.integer);
				if ($e(k) && $.includes('.')) {
					const X = $.split('.');
					$ = `${X[0]}.${X[1].slice(0, +k)}`;
				}
				e.beforeChange
					? (R.value = String(l.value))
					: ni(I, $) || (R.value = $);
				const B = $ === String(+$);
				f(B ? +$ : $);
			},
			y = S => {
				var R;
				e.disableInput ? (R = i.value) == null || R.blur() : t('focus', S);
			},
			v = S => {
				const R = S.target,
					I = n(R.value, e.autoFixed);
				(R.value = String(I)),
					(l.value = I),
					Te(() => {
						t('blur', S), Fd();
					});
			};
		let w, b;
		const C = () => {
				b = setTimeout(() => {
					g(), C();
				}, RT);
			},
			p = () => {
				e.longPress &&
					((w = !1),
					clearTimeout(b),
					(b = setTimeout(() => {
						(w = !0), g(), C();
					}, qd)));
			},
			x = S => {
				e.longPress && (clearTimeout(b), w && Me(S));
			},
			T = S => {
				e.disableInput && Me(S);
			},
			A = S => ({
				onClick: R => {
					Me(R), (a = S), g();
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
								A('minus'),
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
								onInput: m,
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
								A('plus'),
							),
							null,
						),
						[[nt, e.showPlus]],
					),
				])
		);
	},
});
const BT = G(OT),
	DT = G(kT),
	[MT, Rt, LT] = U('submit-bar'),
	VT = {
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
var NT = j({
	name: MT,
	props: VT,
	emits: ['submit'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			a = Ki(o, Rt),
			i = () => {
				const {
					price: u,
					label: h,
					currency: f,
					textAlign: g,
					suffixLabel: m,
					decimalLength: y,
				} = e;
				if (typeof u == 'number') {
					const v = (u / 100).toFixed(+y).split('.'),
						w = y ? `.${v[1]}` : '';
					return d('div', { class: Rt('text'), style: { textAlign: g } }, [
						d('span', null, [h || LT('label')]),
						d('span', { class: Rt('price') }, [
							f,
							d('span', { class: Rt('price-integer') }, [v[0]]),
							w,
						]),
						m && d('span', { class: Rt('suffix-label') }, [m]),
					]);
				}
			},
			l = () => {
				var u;
				const { tip: h, tipIcon: f } = e;
				if (n.tip || h)
					return d('div', { class: Rt('tip') }, [
						f && d(Ce, { class: Rt('tip-icon'), name: f }, null),
						h && d('span', { class: Rt('tip-text') }, [h]),
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
								class: Rt('button', e.buttonType),
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
						class: [Rt(), { 'van-safe-area-bottom': e.safeAreaInsetBottom }],
					},
					[
						(u = n.top) == null ? void 0 : u.call(n),
						l(),
						d('div', { class: Rt('bar') }, [
							(h = n.default) == null ? void 0 : h.call(n),
							i(),
							r(),
						]),
					],
				);
			};
		return () => (e.placeholder ? a(c) : c());
	},
});
const FT = G(NT),
	[zT, Bl] = U('swipe-cell'),
	HT = {
		name: ie(''),
		disabled: Boolean,
		leftWidth: q,
		rightWidth: q,
		beforeClose: Function,
		stopPropagation: Boolean,
	};
var jT = j({
	name: zT,
	props: HT,
	emits: ['open', 'close', 'click'],
	setup(e, { emit: t, slots: n }) {
		let o, a, i, l;
		const s = D(),
			r = D(),
			c = D(),
			u = He({ offset: 0, dragging: !1 }),
			h = Et(),
			f = S => (S.value ? Re(S).width : 0),
			g = L(() => ($e(e.leftWidth) ? +e.leftWidth : f(r))),
			m = L(() => ($e(e.rightWidth) ? +e.rightWidth : f(c))),
			y = S => {
				(u.offset = S === 'left' ? g.value : -m.value),
					o || ((o = !0), t('open', { name: e.name, position: S }));
			},
			v = S => {
				(u.offset = 0),
					o && ((o = !1), t('close', { name: e.name, position: S }));
			},
			w = S => {
				const R = Math.abs(u.offset),
					I = 0.15,
					k = o ? 1 - I : I,
					$ = S === 'left' ? g.value : m.value;
				$ && R > $ * k ? y(S) : v(S);
			},
			b = S => {
				e.disabled || ((i = u.offset), h.start(S));
			},
			C = S => {
				if (e.disabled) return;
				const { deltaX: R } = h;
				h.move(S),
					h.isHorizontal() &&
						((a = !0),
						(u.dragging = !0),
						(!o || R.value * i < 0) && Me(S, e.stopPropagation),
						(u.offset = et(R.value + i, -m.value, g.value)));
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
			T = (S, R) => I => {
				R && I.stopPropagation(), x(S);
			},
			A = (S, R) => {
				const I = n[S];
				if (I)
					return d('div', { ref: R, class: Bl(S), onClick: T(S, !0) }, [I()]);
			};
		return (
			ke({ open: y, close: v }),
			ji(s, () => x('outside'), { eventName: 'touchstart' }),
			We('touchmove', C, { target: s }),
			() => {
				var S;
				const R = {
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
						d('div', { class: Bl('wrapper'), style: R }, [
							A('left', r),
							(S = n.default) == null ? void 0 : S.call(n),
							A('right', c),
						]),
					],
				);
			}
		);
	},
});
const WT = G(jT),
	[gh, fu] = U('tabbar'),
	UT = {
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
	mh = Symbol(gh);
var YT = j({
	name: gh,
	props: UT,
	emits: ['change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(),
			{ linkChildren: a } = rt(mh),
			i = Ki(o, fu),
			l = () => {
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
						class: [fu({ fixed: u }), { [Ui]: f, 'van-safe-area-bottom': l() }],
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
const KT = G(YT),
	[qT, Dl] = U('tabbar-item'),
	GT = he({}, Un, {
		dot: Boolean,
		icon: String,
		name: q,
		badge: q,
		badgeProps: Object,
		iconPrefix: String,
	});
var XT = j({
	name: qT,
	props: GT,
	emits: ['click'],
	setup(e, { emit: t, slots: n }) {
		const o = ro(),
			a = Nt().proxy,
			{ parent: i, index: l } = ot(mh);
		if (!i) return;
		const s = L(() => {
				var u;
				const { route: h, modelValue: f } = i.props;
				if (h && '$route' in a) {
					const { $route: g } = a,
						{ to: m } = e,
						y = fn(m) ? m : { path: m };
					return !!g.matched.find(v => {
						const w = 'path' in y && y.path === v.path,
							b = 'name' in y && y.name === v.name;
						return w || b;
					});
				}
				return ((u = e.name) != null ? u : l.value) === f;
			}),
			r = u => {
				var h;
				s.value || i.setActive((h = e.name) != null ? h : l.value, o),
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
				{ activeColor: g, inactiveColor: m } = i.props,
				y = s.value ? g : m;
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
					d(so, _e({ dot: h, class: Dl('icon'), content: f }, e.badgeProps), {
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
const ZT = G(XT),
	[JT, hu] = U('text-ellipsis'),
	QT = {
		rows: ie(1),
		dots: Z('...'),
		content: Z(''),
		expandText: Z(''),
		collapseText: Z(''),
		position: Z('end'),
	};
var e_ = j({
	name: JT,
	props: QT,
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
			h = () => {
				const y = (x, T) => {
						const { content: A, position: S, dots: R } = e,
							I = A.length,
							k = () => {
								const X = (V, O) => {
									if (O - V <= 1)
										return S === 'end' ? A.slice(0, V) + R : R + A.slice(O, I);
									const F = Math.round((V + O) / 2);
									return (
										S === 'end'
											? (x.innerText = A.slice(0, F) + R + r.value)
											: (x.innerText = R + A.slice(F, I) + r.value),
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
									return A.slice(0, X[0]) + R + A.slice(V[1], I);
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
			f = (y = !a.value) => {
				a.value = y;
			},
			g = y => {
				f(), t('clickAction', y);
			},
			m = () => {
				const y = n.action ? n.action({ expanded: a.value }) : r.value;
				return d('span', { class: hu('action'), onClick: g }, [y]);
			};
		return (
			Ue(h),
			Jt(() => {
				s && ((s = !1), h());
			}),
			ee([Mt, () => [e.content, e.rows, e.position]], h),
			ke({ toggle: f }),
			() =>
				d('div', { ref: l, class: hu() }, [
					a.value ? e.content : o.value,
					i.value ? m() : null,
				])
		);
	},
});
const t_ = G(e_),
	[n_] = U('time-picker'),
	gu = e => /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e),
	o_ = ['hour', 'minute', 'second'],
	a_ = he({}, Rf, {
		minHour: ie(0),
		maxHour: ie(23),
		minMinute: ie(0),
		maxMinute: ie(59),
		minSecond: ie(0),
		maxSecond: ie(59),
		minTime: { type: String, validator: gu },
		maxTime: { type: String, validator: gu },
		columnsType: { type: Array, default: () => ['hour', 'minute'] },
		filter: Function,
	});
var i_ = j({
	name: n_,
	props: a_,
	emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
	setup(e, { emit: t, slots: n }) {
		const o = D(e.modelValue),
			a = D(),
			i = f => {
				const g = f.split(':');
				return o_.map((m, y) => (e.columnsType.includes(m) ? g[y] : '00'));
			},
			l = () => {
				var f;
				return (f = a.value) == null ? void 0 : f.confirm();
			},
			s = () => o.value,
			r = L(() => {
				let {
					minHour: f,
					maxHour: g,
					minMinute: m,
					maxMinute: y,
					minSecond: v,
					maxSecond: w,
				} = e;
				if (e.minTime || e.maxTime) {
					const b = { hour: 0, minute: 0, second: 0 };
					e.columnsType.forEach((x, T) => {
						var A;
						b[x] = (A = o.value[T]) != null ? A : 0;
					});
					const { hour: C, minute: p } = b;
					if (e.minTime) {
						const [x, T, A] = i(e.minTime);
						(f = x),
							(m = +C <= +f ? T : '00'),
							(v = +C <= +f && +p <= +m ? A : '00');
					}
					if (e.maxTime) {
						const [x, T, A] = i(e.maxTime);
						(g = x),
							(y = +C >= +g ? T : '59'),
							(w = +C >= +g && +p >= +y ? A : '59');
					}
				}
				return e.columnsType.map(b => {
					const { filter: C, formatter: p } = e;
					switch (b) {
						case 'hour':
							return Po(+f, +g, b, p, C, o.value);
						case 'minute':
							return Po(+m, +y, b, p, C, o.value);
						case 'second':
							return Po(+v, +w, b, p, C, o.value);
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
					(f = Bf(f, r.value)), Xt(f, o.value) || (o.value = f);
				},
				{ immediate: !0 },
			);
		const c = (...f) => t('change', ...f),
			u = (...f) => t('cancel', ...f),
			h = (...f) => t('confirm', ...f);
		return (
			ke({ confirm: l, getSelectedTime: s }),
			() =>
				d(
					Zi,
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
						Ie(e, Af),
					),
					n,
				)
		);
	},
});
const l_ = G(i_),
	[r_, So] = U('tree-select'),
	s_ = {
		max: ie(1 / 0),
		items: Ve(),
		height: ie(300),
		selectedIcon: Z('success'),
		mainActiveIndex: ie(0),
		activeId: { type: [Number, String, Array], default: 0 },
	};
var c_ = j({
	name: r_,
	props: s_,
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
							So('item', { active: o(c.id), disabled: c.disabled }),
						],
						onClick: u,
					},
					[
						c.text,
						o(c.id) &&
							d(Ce, { name: e.selectedIcon, class: So('selected') }, null),
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
						rh,
						{
							dot: u.dot,
							badge: u.badge,
							class: [So('nav-item'), u.className],
							disabled: u.disabled,
							onClick: l,
						},
						{ title: () => (n['nav-text'] ? n['nav-text'](u) : u.text) },
					),
				);
				return d(
					lh,
					{ class: So('nav'), modelValue: e.mainActiveIndex, onChange: i },
					{ default: () => [c] },
				);
			},
			r = () => {
				if (n.content) return n.content();
				const c = e.items[+e.mainActiveIndex] || {};
				if (c.children) return c.children.map(a);
			};
		return () =>
			d('div', { class: So(), style: { height: we(e.height) } }, [
				s(),
				d('div', { class: So('content') }, [r()]),
			]);
	},
});
const u_ = G(c_),
	[d_, Ge, f_] = U('uploader');
function mu(e, t) {
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
function vh(e, t) {
	return wi(e).some(n =>
		n.file ? (Oo(t) ? t(n.file) : n.file.size > +t) : !1,
	);
}
function h_(e, t) {
	const n = [],
		o = [];
	return (
		e.forEach(a => {
			vh(a, t) ? o.push(a) : n.push(a);
		}),
		{ valid: n, invalid: o }
	);
}
const g_ = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i,
	m_ = e => g_.test(e);
function bh(e) {
	return e.isImage
		? !0
		: e.file && e.file.type
			? e.file.type.indexOf('image') === 0
			: e.url
				? m_(e.url)
				: typeof e.content == 'string'
					? e.content.indexOf('data:image') === 0
					: !1;
}
var v_ = j({
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
								: d(Ft, { class: Ge('loading') }, null),
						g = $e(h) && h !== '';
					return d('div', { class: Ge('mask') }, [
						f,
						g && d('div', { class: Ge('mask-message') }, [h]),
					]);
				}
			},
			a = u => {
				const { name: h, item: f, index: g, beforeDelete: m } = e;
				u.stopPropagation(),
					Wn(m, { args: [f, { name: h, index: g }], done: () => t('delete') });
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
							'aria-label': f_('delete'),
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
					previewSize: g,
					reupload: m,
				} = e;
				return bh(u)
					? d(
							el,
							{
								fit: f,
								src: u.objectUrl || u.content || u.url,
								class: Ge('preview-image'),
								width: Array.isArray(g) ? g[0] : g,
								height: Array.isArray(g) ? g[1] : g,
								lazyLoad: h,
								onClick: m ? l : i,
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
const b_ = {
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
	modelValue: Ve(),
	beforeRead: Function,
	beforeDelete: Function,
	previewSize: [Number, String, Array],
	previewImage: z,
	previewOptions: Object,
	previewFullImage: z,
	maxSize: { type: [Number, String, Function], default: 1 / 0 },
};
var y_ = j({
	name: d_,
	props: b_,
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
				if ((r(), vh(S, e.maxSize)))
					if (Array.isArray(S)) {
						const R = h_(S, e.maxSize);
						if (((S = R.valid), t('oversize', R.invalid, s()), !S.length))
							return;
					} else {
						t('oversize', S, s());
						return;
					}
				if (((S = He(S)), i.value > -1)) {
					const R = [...e.modelValue];
					R.splice(i.value, 1, S), t('update:modelValue', R), (i.value = -1);
				} else t('update:modelValue', [...e.modelValue, ...wi(S)]);
				e.afterRead && e.afterRead(S, s());
			},
			u = S => {
				const { maxCount: R, modelValue: I, resultType: k } = e;
				if (Array.isArray(S)) {
					const $ = +R - I.length;
					S.length > $ && (S = S.slice(0, $)),
						Promise.all(S.map(B => mu(B, k))).then(B => {
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
					mu(S, k).then($ => {
						const B = {
							file: S,
							status: '',
							message: '',
							objectUrl: URL.createObjectURL(S),
						};
						$ && (B.content = $), c(B);
					});
			},
			h = S => {
				const { files: R } = S.target;
				if (e.disabled || !R || !R.length) return;
				const I = R.length === 1 ? R[0] : [].slice.call(R);
				if (e.beforeRead) {
					const k = e.beforeRead(I, s());
					if (!k) {
						r();
						return;
					}
					if (Fr(k)) {
						k.then($ => {
							u($ || I);
						}).catch(r);
						return;
					}
				}
				u(I);
			};
		let f;
		const g = () => t('closePreview'),
			m = S => {
				if (e.previewFullImage) {
					const R = e.modelValue.filter(bh),
						I = R.map(
							k => (
								k.objectUrl &&
									!k.url &&
									k.status !== 'failed' &&
									((k.url = k.objectUrl), a.push(k.url)),
								k.url
							),
						).filter(Boolean);
					f = rS(
						he(
							{ images: I, startPosition: R.indexOf(S), onClose: g },
							e.previewOptions,
						),
					);
				}
			},
			y = () => {
				f && f.close();
			},
			v = (S, R) => {
				const I = e.modelValue.slice(0);
				I.splice(R, 1), t('update:modelValue', I), t('delete', S, s(R));
			},
			w = S => {
				(l.value = !0), (i.value = S), Te(() => A());
			},
			b = () => {
				l.value || (i.value = -1), (l.value = !1);
			},
			C = (S, R) => {
				const I = [
						'imageFit',
						'deletable',
						'reupload',
						'previewSize',
						'beforeDelete',
					],
					k = he(Ie(e, I), Ie(S, I, !0));
				return d(
					v_,
					_e(
						{
							item: S,
							index: R,
							onClick: () =>
								t(e.reupload ? 'clickReupload' : 'clickPreview', S, s(R)),
							onDelete: () => v(S, R),
							onPreview: () => m(S),
							onReupload: () => w(R),
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
					R = e.readonly
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
									onChange: h,
									onClick: b,
								},
								null,
							);
				return n.default
					? Qe(
							d('div', { class: Ge('input-wrapper'), onClick: x }, [
								n.default(),
								R,
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
									R,
								],
							),
							[[nt, e.showUpload && !S]],
						);
			},
			A = () => {
				o.value && !e.disabled && o.value.click();
			};
		return (
			en(() => {
				a.forEach(S => URL.revokeObjectURL(S));
			}),
			ke({ chooseFile: A, closeImagePreview: y }),
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
const p_ = G(y_),
	[w_, vu] = U('watermark'),
	x_ = {
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
var S_ = j({
	name: w_,
	props: x_,
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
			l = r => {
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
				const r = he({ backgroundImage: `url(${o.value})` }, yn(e.zIndex));
				return d('div', { class: vu({ full: e.fullPage }), style: r }, [
					d('div', { class: vu('wrapper'), ref: n }, [i()]),
				]);
			}
		);
	},
});
const C_ = G(S_),
	T_ = '4.8.11';
function __(e) {
	[
		Jd,
		rr,
		gy,
		Ey,
		G0,
		fp,
		xf,
		bp,
		so,
		Sp,
		lt,
		Mp,
		jp,
		qp,
		Ht,
		Jp,
		Lf,
		lw,
		fw,
		ww,
		Tw,
		Pw,
		Iw,
		Bw,
		Vw,
		jw,
		Gw,
		gr,
		ax,
		dx,
		mx,
		wx,
		_x,
		Rx,
		Ax,
		Hf,
		un,
		Mx,
		Fx,
		Zr,
		Wx,
		qx,
		Jx,
		Ce,
		el,
		sS,
		vS,
		bS,
		SS,
		Ft,
		Wd,
		kS,
		IS,
		MS,
		WS,
		af,
		qS,
		JS,
		Zi,
		QS,
		ZC,
		zt,
		t1,
		r1,
		ns,
		es,
		f1,
		x1,
		S1,
		E1,
		D1,
		lh,
		rh,
		Y1,
		fT,
		ch,
		vT,
		uh,
		sh,
		wT,
		TT,
		PT,
		BT,
		DT,
		ff,
		FT,
		Gr,
		WT,
		Xr,
		Qr,
		Ca,
		KT,
		ZT,
		Gi,
		Qi,
		t_,
		l_,
		F0,
		u_,
		p_,
		C_,
	].forEach(n => {
		n.install ? e.use(n) : n.name && e.component(n.name, n);
	});
}
var k_ = { install: __, version: T_ };
const E_ = {
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
			isCrop: { type: Boolean, default: !1 },
			isClearBgColor: { type: Boolean, default: !0 },
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
						this.$emit(
							'sureHandler',
							e,
							`${this.signName ? this.signName + '-签名.jpg' : 'sign.jpg'}`,
						);
					})
					.catch(e => {
						console.log('err----', e),
							this.$dialog.alert({ message: this.noSignTipText });
					});
			},
		},
	},
	$_ = { class: 'signContainer' },
	P_ = { class: 'btns' },
	I_ = { key: 0 };
function R_(e, t, n, o, a, i) {
	const l = gi('van-button'),
		s = gi('vue-esign');
	return (
		ba(),
		Gl('div', $_, [
			bi('div', P_, [
				d(
					l,
					{
						type: 'default',
						round: '',
						onClick: i.clearHandler,
						class: 'reset',
					},
					{ default: hi(() => [to('重签')]), _: 1 },
					8,
					['onClick'],
				),
				d(
					l,
					{ type: 'info', round: '', onClick: i.sureHandler },
					{ default: hi(() => [to('确认')]), _: 1 },
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
					to(' 请'),
					n.signName
						? (ba(), Gl('span', I_, Ah(` ${n.signName} `), 1))
						: nm('', !0),
					to('在此区域内签名 '),
				],
				4,
			),
		])
	);
}
const A_ = Lr(E_, [
	['render', R_],
	['__scopeId', 'data-v-f37a326f'],
]);
Sd(Ym).component('SignCanvas', A_).use(Dd).use(k_).use(er).mount('#app');
export {
	Je as F,
	hc as S,
	Lr as _,
	d as a,
	He as b,
	Gl as c,
	j as d,
	D as e,
	bi as f,
	D_ as g,
	to as h,
	Dd as i,
	M_ as j,
	B_ as k,
	ba as o,
	O_ as p,
	gi as r,
	Ah as t,
	hi as w,
};

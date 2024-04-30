import {
	_ as g,
	o as c,
	c as d,
	e as m,
	f as x,
	l as T,
	u as p,
	m as w,
} from './index-C6_Iw7_a.js';
const y = {
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
		myBg: function (t) {
			this.$refs.canvas.style.background = t;
		},
	},
	beforeMount() {
		window.addEventListener('resize', this.$_resizeHandler);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.$_resizeHandler);
	},
	mounted() {
		const t = this.$refs.canvas;
		(t.height = this.height),
			(t.width = this.width),
			(t.style.background = this.myBg),
			this.$_resizeHandler(),
			(document.onmouseup = () => {
				this.isDrawing = !1;
			});
	},
	methods: {
		$_resizeHandler() {
			const t = this.$refs.canvas;
			t.style.width = this.width + 'px';
			const e = parseFloat(window.getComputedStyle(t).width);
			(t.style.height = this.ratio * e + 'px'),
				(this.canvasTxt = t.getContext('2d')),
				this.canvasTxt.scale(1 * this.sratio, 1 * this.sratio),
				(this.sratio = e / this.width),
				this.canvasTxt.scale(1 / this.sratio, 1 / this.sratio);
		},
		mouseDown(t) {
			(t = t || event),
				t.preventDefault(),
				(this.isDrawing = !0),
				(this.hasDrew = !0);
			let e = { x: t.offsetX, y: t.offsetY };
			this.drawStart(e);
		},
		mouseMove(t) {
			if (((t = t || event), t.preventDefault(), this.isDrawing)) {
				let e = { x: t.offsetX, y: t.offsetY };
				this.drawMove(e);
			}
		},
		mouseUp(t) {
			(t = t || event), t.preventDefault();
			let e = { x: t.offsetX, y: t.offsetY };
			this.drawEnd(e), (this.isDrawing = !1);
		},
		touchStart(t) {
			if (
				((t = t || event),
				t.preventDefault(),
				(this.hasDrew = !0),
				t.touches.length === 1)
			) {
				let e = {
					x:
						t.targetTouches[0].clientX -
						this.$refs.canvas.getBoundingClientRect().left,
					y:
						t.targetTouches[0].clientY -
						this.$refs.canvas.getBoundingClientRect().top,
				};
				this.drawStart(e);
			}
		},
		touchMove(t) {
			if (((t = t || event), t.preventDefault(), t.touches.length === 1)) {
				let e = {
					x:
						t.targetTouches[0].clientX -
						this.$refs.canvas.getBoundingClientRect().left,
					y:
						t.targetTouches[0].clientY -
						this.$refs.canvas.getBoundingClientRect().top,
				};
				this.drawMove(e);
			}
		},
		touchEnd(t) {
			if (((t = t || event), t.preventDefault(), t.touches.length === 1)) {
				let e = {
					x:
						t.targetTouches[0].clientX -
						this.$refs.canvas.getBoundingClientRect().left,
					y:
						t.targetTouches[0].clientY -
						this.$refs.canvas.getBoundingClientRect().top,
				};
				this.drawEnd(e);
			}
		},
		drawStart(t) {
			(this.startX = t.x),
				(this.startY = t.y),
				this.canvasTxt.beginPath(),
				this.canvasTxt.moveTo(this.startX, this.startY),
				this.canvasTxt.lineTo(t.x, t.y),
				(this.canvasTxt.lineCap = 'round'),
				(this.canvasTxt.lineJoin = 'round'),
				(this.canvasTxt.lineWidth = this.lineWidth * this.sratio),
				this.canvasTxt.stroke(),
				this.canvasTxt.closePath(),
				this.points.push(t);
		},
		drawMove(t) {
			this.canvasTxt.beginPath(),
				this.canvasTxt.moveTo(this.startX, this.startY),
				this.canvasTxt.lineTo(t.x, t.y),
				(this.canvasTxt.strokeStyle = this.lineColor),
				(this.canvasTxt.lineWidth = this.lineWidth * this.sratio),
				(this.canvasTxt.lineCap = 'round'),
				(this.canvasTxt.lineJoin = 'round'),
				this.canvasTxt.stroke(),
				this.canvasTxt.closePath(),
				(this.startY = t.y),
				(this.startX = t.x),
				this.points.push(t);
		},
		drawEnd(t) {
			this.canvasTxt.beginPath(),
				this.canvasTxt.moveTo(this.startX, this.startY),
				this.canvasTxt.lineTo(t.x, t.y),
				(this.canvasTxt.lineCap = 'round'),
				(this.canvasTxt.lineJoin = 'round'),
				this.canvasTxt.stroke(),
				this.canvasTxt.closePath(),
				this.points.push(t),
				this.points.push({ x: -1, y: -1 });
		},
		generate(t) {
			let e = t && t.format ? t.format : this.format,
				i = t && t.quality ? t.quality : this.quality;
			return new Promise((n, s) => {
				if (!this.hasDrew) {
					s('Warning: Not Signned!');
					return;
				}
				var a = this.canvasTxt.getImageData(
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
					(this.resultImg = this.$refs.canvas.toDataURL(e, i));
				var o = this.resultImg;
				if (
					(this.canvasTxt.clearRect(
						0,
						0,
						this.$refs.canvas.width,
						this.$refs.canvas.height,
					),
					this.canvasTxt.putImageData(a, 0, 0),
					(this.canvasTxt.globalCompositeOperation = 'source-over'),
					this.isCrop)
				) {
					const l = this.getCropArea(a.data);
					var h = document.createElement('canvas');
					const u = h.getContext('2d');
					(h.width = l[2] - l[0]), (h.height = l[3] - l[1]);
					const f = this.canvasTxt.getImageData(...l);
					(u.globalCompositeOperation = 'destination-over'),
						u.putImageData(f, 0, 0),
						(u.fillStyle = this.myBg),
						u.fillRect(0, 0, h.width, h.height),
						(o = h.toDataURL(e, i)),
						(h = null);
				}
				n(o);
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
		getCropArea(t) {
			for (
				var e = this.$refs.canvas.width,
					i = 0,
					r = this.$refs.canvas.height,
					n = 0,
					s = 0;
				s < this.$refs.canvas.width;
				s++
			)
				for (var a = 0; a < this.$refs.canvas.height; a++) {
					var o = (s + this.$refs.canvas.width * a) * 4;
					(t[o] > 0 || t[o + 1] > 0 || t[o + 2] || t[o + 3] > 0) &&
						((n = Math.max(a, n)),
						(i = Math.max(s, i)),
						(r = Math.min(a, r)),
						(e = Math.min(s, e)));
				}
			return e++, i++, r++, n++, [e, r, i, n];
		},
	},
};
function C(t, e, i, r, n, s) {
	return (
		c(),
		d(
			'canvas',
			{
				ref: 'canvas',
				onMousedown:
					e[0] || (e[0] = (...a) => s.mouseDown && s.mouseDown(...a)),
				onMousemove:
					e[1] || (e[1] = (...a) => s.mouseMove && s.mouseMove(...a)),
				onMouseup: e[2] || (e[2] = (...a) => s.mouseUp && s.mouseUp(...a)),
				onTouchstart:
					e[3] || (e[3] = (...a) => s.touchStart && s.touchStart(...a)),
				onTouchmove:
					e[4] || (e[4] = (...a) => s.touchMove && s.touchMove(...a)),
				onTouchend: e[5] || (e[5] = (...a) => s.touchEnd && s.touchEnd(...a)),
			},
			null,
			544,
		)
	);
}
const v = g(y, [
	['render', C],
	['__scopeId', 'data-v-1fcc7cb1'],
]);
v.install = function (t) {
	this.installed || ((this.installed = !0), t.component('vueEsign', v));
};
const $ = {
	__name: 'esign',
	setup(t) {
		const e = m(!1),
			i = n => {
				console.log('签名数据:', n), (e.value = !1);
			},
			r = () => {
				console.log('签名板已清空');
			};
		return (n, s) => (
			c(),
			d('div', null, [
				x(
					'button',
					{ onClick: s[0] || (s[0] = a => (e.value = !0)) },
					'开始签名',
				),
				e.value ? (c(), T(p(v), { key: 0, onSave: i, onClear: r })) : w('', !0),
			])
		);
	},
};
export { $ as default };

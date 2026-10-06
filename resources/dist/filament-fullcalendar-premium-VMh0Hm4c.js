import { $n as e, An as t, At as n, B as r, Bn as i, C as a, Cn as o, Ct as s, Dn as c, E as l, F as u, Fn as d, Ft as f, Gt as p, H as m, Hn as h, Ht as g, I as _, In as v, It as y, J as ee, Kn as b, Kt as te, L as x, Ln as S, Lt as ne, M as re, Mn as ie, N as ae, Nn as C, O as oe, Ot as se, P as ce, Pn as w, Pt as le, Qn as ue, Rn as de, Rt as fe, St as pe, T as me, Un as he, Ut as ge, X as T, Xn as _e, Y as ve, Z as ye, Zt as be, _ as xe, _n as Se, _t as E, a as Ce, an as we, ar as Te, at as Ee, bn as De, br as D, c as O, cn as Oe, cr as ke, dn as Ae, dt as je, en as Me, fn as k, fr as Ne, ft as Pe, gn as A, gr as Fe, gt as Ie, hn as Le, ht as Re, i as j, ir as ze, j as Be, jn as Ve, k as He, lr as Ue, lt as We, m as Ge, mr as Ke, n as M, nn as qe, nr as Je, nt as Ye, o as N, on as Xe, or as Ze, ot as Qe, pr as $e, pt as et, q as tt, rn as nt, rr as rt, rt as it, s as P, sn as at, sr as F, st as ot, tn as st, tr as ct, tt as lt, un as I, ur as L, ut, vr as R, w as z, wn as dt, x as ft, xr as B, y as pt, yr as V, yt as H, zn as mt, zt as ht } from "./filament-fullcalendar-core-DflVpway.js";
import { a as gt, c as _t, i as vt, l as yt, m as bt, n as xt, o as St, p as Ct, r as wt, s as Tt, t as Et, u as Dt } from "./filament-fullcalendar-timegrid-k-7b9q8a.js";
//#region node_modules/@fullcalendar/premium-common/index.js
var Ot = "https://fullcalendar.io/docs/schedulerLicenseKey#invalid", kt = "https://fullcalendar.io/docs/schedulerLicenseKey#outdated", At = ["GPL-My-Project-Is-Open-Source", "CC-Attribution-NonCommercial-NoDerivatives"], jt = {
	position: "absolute",
	zIndex: 99999,
	bottom: "1px",
	left: "1px",
	background: "#eee",
	borderColor: "#ddd",
	borderStyle: "solid",
	borderWidth: "1px 1px 0 0",
	padding: "2px 4px",
	fontSize: "12px",
	borderTopRightRadius: "3px"
};
function Mt(e) {
	let t = e.options.schedulerLicenseKey;
	if (!Pt(typeof window < "u" ? window.location.href : "")) {
		let n = Nt(t, e.pluginHooks.premiumReleaseDate);
		if (n !== "valid") return B("div", {
			className: "fc-license-message",
			style: jt
		}, n === "outdated" ? B(V, null, "Your license key is too old to work with this version. ", B("a", { href: kt }, "More Info")) : B(V, null, "Your license key is invalid. ", B("a", { href: Ot }, "More Info")));
	}
	return null;
}
function Nt(e, t) {
	if (At.indexOf(e) !== -1) return "valid";
	let n = (e || "").match(/^(\d+)-fcs-(\d+)$/);
	if (n && n[1].length === 10) {
		let e = /* @__PURE__ */ new Date(parseInt(n[2], 10) * 1e3), i = E.mockSchedulerReleaseDate || t;
		if (ie(i)) return r(i, -372) < e ? "valid" : "outdated";
	}
	return "invalid";
}
function Pt(e) {
	return /\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(e);
}
var U = M({
	name: "@fullcalendar/premium-common",
	premiumReleaseDate: "2026-06-18",
	optionRefiners: { schedulerLicenseKey: String },
	viewContainerAppends: [Mt]
});
//#endregion
//#region node_modules/@fullcalendar/scrollgrid/internal.js
function Ft(e) {
	let t = e.getBoundingClientRect(), n = je(e);
	return {
		left: t.left + n.borderLeft + n.scrollbarLeft - It(e),
		top: t.top + n.borderTop - e.scrollTop
	};
}
function It(e) {
	let t = e.scrollLeft;
	if (window.getComputedStyle(e).direction === "rtl") switch (zt()) {
		case "negative": t *= -1;
		case "reverse": t = e.scrollWidth - t - e.clientWidth;
	}
	return t;
}
function Lt(e, t) {
	if (window.getComputedStyle(e).direction === "rtl") switch (zt()) {
		case "reverse":
			t = e.scrollWidth - t;
			break;
		case "negative":
			t = -(e.scrollWidth - t);
			break;
	}
	e.scrollLeft = t;
}
var Rt;
function zt() {
	return Rt ||= Bt();
}
function Bt() {
	let e = document.createElement("div");
	e.style.position = "absolute", e.style.top = "-1000px", e.style.width = "100px", e.style.height = "100px", e.style.overflow = "scroll", e.style.direction = "rtl";
	let t = document.createElement("div");
	t.style.width = "200px", t.style.height = "200px", e.appendChild(t), document.body.appendChild(e);
	let n;
	return e.scrollLeft > 0 ? n = "positive" : (e.scrollLeft = 1, n = e.scrollLeft > 0 ? "reverse" : "negative"), Je(e), n;
}
var Vt = ".fc-sticky", Ht = class {
	constructor(e, t) {
		this.scrollEl = e, this.isRtl = t, this.updateSize = () => {
			let { scrollEl: e } = this, t = y(e, Vt), n = this.queryElGeoms(t), r = e.clientWidth;
			Ut(t, n, r);
		};
	}
	queryElGeoms(e) {
		let { scrollEl: t, isRtl: n } = this, r = Ft(t), i = [];
		for (let t of e) {
			let e = Ke(et(t.parentNode, !0, !0), -r.left, -r.top), a = t.getBoundingClientRect(), o = window.getComputedStyle(t), s = window.getComputedStyle(t.parentNode).textAlign, c = null;
			s === "start" ? s = n ? "right" : "left" : s === "end" && (s = n ? "left" : "right"), o.position !== "sticky" && (c = Ke(a, -r.left - (parseFloat(o.left) || 0), -r.top - (parseFloat(o.top) || 0))), i.push({
				parentBound: e,
				naturalBound: c,
				elWidth: a.width,
				elHeight: a.height,
				textAlign: s
			});
		}
		return i;
	}
};
function Ut(e, t, n) {
	e.forEach((e, r) => {
		let { textAlign: i, elWidth: a, parentBound: o } = t[r], s = o.right - o.left, c;
		c = i === "center" && s > n ? (n - a) / 2 : "", tt(e, {
			left: c,
			right: c,
			top: 0
		});
	});
}
var Wt = class extends j {
	constructor() {
		super(...arguments), this.elRef = D(), this.state = {
			xScrollbarWidth: 0,
			yScrollbarWidth: 0
		}, this.handleScroller = (e) => {
			this.scroller = e, L(this.props.scrollerRef, e);
		}, this.handleSizing = () => {
			let { props: e } = this;
			e.overflowY === "scroll-hidden" && this.setState({ yScrollbarWidth: this.scroller.getYScrollbarWidth() }), e.overflowX === "scroll-hidden" && this.setState({ xScrollbarWidth: this.scroller.getXScrollbarWidth() });
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, r = n.isRtl && be(), i = 0, a = 0, o = 0, { overflowX: s, overflowY: c } = e;
		return e.forPrint && (s = "visible", c = "visible"), s === "scroll-hidden" && (o = t.xScrollbarWidth), c === "scroll-hidden" && t.yScrollbarWidth != null && (r ? i = t.yScrollbarWidth : a = t.yScrollbarWidth), B("div", {
			ref: this.elRef,
			className: "fc-scroller-harness" + (e.liquid ? " fc-scroller-harness-liquid" : "")
		}, B(oe, {
			ref: this.handleScroller,
			elRef: this.props.scrollerElRef,
			overflowX: s === "scroll-hidden" ? "scroll" : s,
			overflowY: c === "scroll-hidden" ? "scroll" : c,
			overcomeLeft: i,
			overcomeRight: a,
			overcomeBottom: o,
			maxHeight: typeof e.maxHeight == "number" ? e.maxHeight + (s === "scroll-hidden" ? t.xScrollbarWidth : 0) : "",
			liquid: e.liquid,
			liquidIsAbsolute: !0
		}, e.children));
	}
	componentDidMount() {
		this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
	}
	getSnapshotBeforeUpdate(e) {
		return this.props.forPrint && !e.forPrint ? { simulateScrollLeft: this.scroller.el.scrollLeft } : {};
	}
	componentDidUpdate(e, n, r) {
		let { props: i, scroller: { el: a } } = this;
		if (t(e, i) || this.handleSizing(), r.simulateScrollLeft !== void 0) a.style.left = -r.simulateScrollLeft + "px";
		else if (!i.forPrint && e.forPrint) {
			let e = -parseInt(a.style.left);
			a.style.left = "", a.scrollLeft = e;
		}
	}
	componentWillUnmount() {
		this.context.removeResizeHandler(this.handleSizing);
	}
	needsXScrolling() {
		return this.scroller.needsXScrolling();
	}
	needsYScrolling() {
		return this.scroller.needsYScrolling();
	}
}, Gt = "wheel mousewheel DomMouseScroll MozMousePixelScroll".split(" "), Kt = class {
	constructor(e) {
		this.el = e, this.emitter = new xe(), this.isScrolling = !1, this.isTouching = !1, this.isRecentlyWheeled = !1, this.isRecentlyScrolled = !1, this.wheelWaiter = new Ge(this._handleWheelWaited.bind(this)), this.scrollWaiter = new Ge(this._handleScrollWaited.bind(this)), this.handleScroll = () => {
			this.startScroll(), this.emitter.trigger("scroll", this.isRecentlyWheeled, this.isTouching), this.isRecentlyScrolled = !0, this.scrollWaiter.request(500);
		}, this.handleWheel = () => {
			this.isRecentlyWheeled = !0, this.wheelWaiter.request(500);
		}, this.handleTouchStart = () => {
			this.isTouching = !0;
		}, this.handleTouchEnd = () => {
			this.isTouching = !1, this.isRecentlyScrolled || this.endScroll();
		}, e.addEventListener("scroll", this.handleScroll), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), e.addEventListener("touchend", this.handleTouchEnd);
		for (let t of Gt) e.addEventListener(t, this.handleWheel);
	}
	destroy() {
		let { el: e } = this;
		e.removeEventListener("scroll", this.handleScroll), e.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), e.removeEventListener("touchend", this.handleTouchEnd);
		for (let t of Gt) e.removeEventListener(t, this.handleWheel);
	}
	startScroll() {
		this.isScrolling || (this.isScrolling = !0, this.emitter.trigger("scrollStart", this.isRecentlyWheeled, this.isTouching));
	}
	endScroll() {
		this.isScrolling && (this.emitter.trigger("scrollEnd"), this.isScrolling = !1, this.isRecentlyScrolled = !0, this.isRecentlyWheeled = !1, this.scrollWaiter.clear(), this.wheelWaiter.clear());
	}
	_handleScrollWaited() {
		this.isRecentlyScrolled = !1, this.isTouching || this.endScroll();
	}
	_handleWheelWaited() {
		this.isRecentlyWheeled = !1;
	}
}, qt = class {
	constructor(e, t) {
		this.isVertical = e, this.scrollEls = t, this.isPaused = !1, this.scrollListeners = t.map((e) => this.bindScroller(e));
	}
	destroy() {
		for (let e of this.scrollListeners) e.destroy();
	}
	bindScroller(e) {
		let { scrollEls: t, isVertical: n } = this, r = new Kt(e);
		return r.emitter.on("scroll", (r, i) => {
			if (!this.isPaused && ((!this.masterEl || this.masterEl !== e && (r || i)) && this.assignMaster(e), this.masterEl === e)) for (let r of t) r !== e && (n ? r.scrollTop = e.scrollTop : r.scrollLeft = e.scrollLeft);
		}), r.emitter.on("scrollEnd", () => {
			this.masterEl === e && (this.masterEl = null);
		}), r;
	}
	assignMaster(e) {
		this.masterEl = e;
		for (let t of this.scrollListeners) t.el !== e && t.endScroll();
	}
	forceScrollLeft(e) {
		this.isPaused = !0;
		for (let t of this.scrollListeners) Lt(t.el, e);
		this.isPaused = !1;
	}
	forceScrollTop(e) {
		this.isPaused = !0;
		for (let t of this.scrollListeners) t.el.scrollTop = e;
		this.isPaused = !1;
	}
};
E.SCROLLGRID_RESIZE_INTERVAL = 500;
var W = class extends j {
	constructor() {
		super(...arguments), this.compileColGroupStats = d(Qt, tn), this.renderMicroColGroups = d(Ze), this.clippedScrollerRefs = new l(), this.scrollerElRefs = new l(this._handleScrollerEl.bind(this)), this.chunkElRefs = new l(this._handleChunkEl.bind(this)), this.scrollSyncersBySection = {}, this.scrollSyncersByColumn = {}, this.rowUnstableMap = /* @__PURE__ */ new Map(), this.rowInnerMaxHeightMap = /* @__PURE__ */ new Map(), this.anyRowHeightsChanged = !1, this.recentSizingCnt = 0, this.state = {
			shrinkWidths: [],
			forceYScrollbars: !1,
			forceXScrollbars: !1,
			scrollerClientWidths: {},
			scrollerClientHeights: {},
			sectionRowMaxHeights: []
		}, this.handleSizing = (e, t) => {
			if (!this.allowSizing()) return;
			t || (this.anyRowHeightsChanged = !0);
			let n = {};
			(e || !t && !this.rowUnstableMap.size) && (n.sectionRowMaxHeights = this.computeSectionRowMaxHeights()), this.setState(Object.assign(Object.assign({ shrinkWidths: this.computeShrinkWidths() }, this.computeScrollerDims()), n), () => {
				this.rowUnstableMap.size || this.updateStickyScrolling();
			});
		}, this.handleRowHeightChange = (e, t) => {
			let { rowUnstableMap: n, rowInnerMaxHeightMap: r } = this;
			if (!t) n.set(e, !0);
			else {
				n.delete(e);
				let t = Yt(e);
				(!r.has(e) || r.get(e) !== t) && (r.set(e, t), this.anyRowHeightsChanged = !0), !n.size && this.anyRowHeightsChanged && (this.anyRowHeightsChanged = !1, this.setState({ sectionRowMaxHeights: this.computeSectionRowMaxHeights() }));
			}
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { shrinkWidths: r } = t, i = this.compileColGroupStats(e.colGroups.map((e) => [e])), a = this.renderMicroColGroups(i.map((e, t) => [e.cols, r[t]])), o = Me(e.liquid, n);
		this.getDims();
		let s = e.sections, c = s.length, l = 0, u, d = [], f = [], p = [];
		for (; l < c && (u = s[l]).type === "header";) d.push(this.renderSection(u, l, i, a, t.sectionRowMaxHeights, !0)), l += 1;
		for (; l < c && (u = s[l]).type === "body";) f.push(this.renderSection(u, l, i, a, t.sectionRowMaxHeights, !1)), l += 1;
		for (; l < c && (u = s[l]).type === "footer";) p.push(this.renderSection(u, l, i, a, t.sectionRowMaxHeights, !0)), l += 1;
		let m = !ge(), h = { role: "rowgroup" };
		return B("table", {
			ref: e.elRef,
			role: "grid",
			className: o.join(" ")
		}, Zt(i, r), !!(!m && d.length) && B("thead", h, ...d), !!(!m && f.length) && B("tbody", h, ...f), !!(!m && p.length) && B("tfoot", h, ...p), m && B("tbody", h, ...d, ...f, ...p));
	}
	renderSection(e, t, n, r, i, a) {
		return "outerContent" in e ? B(V, { key: e.key }, e.outerContent) : B("tr", {
			key: e.key,
			role: "presentation",
			className: qe(e, this.props.liquid).join(" ")
		}, e.chunks.map((o, s) => this.renderChunk(e, t, n[s], r[s], o, s, (i[t] || [])[s] || [], a)));
	}
	renderChunk(e, t, n, r, i, a, o, s) {
		if ("outerContent" in i) return B(V, { key: i.key }, i.outerContent);
		let { state: c } = this, { scrollerClientWidths: l, scrollerClientHeights: u } = c, [d, f] = this.getDims(), p = t * f + a, m = a === (!this.context.isRtl || be() ? f - 1 : 0), h = t === d - 1, _ = h && c.forceXScrollbars, v = m && c.forceYScrollbars, y = n && n.allowXScrolling, ee = g(this.props, e), b = nt(this.props, e), te = e.expandRows && b, x = ze(e, i, {
			tableColGroupNode: r,
			tableMinWidth: n && n.totalColMinWidth || "",
			clientWidth: l[p] === void 0 ? null : l[p],
			clientHeight: u[p] === void 0 ? null : u[p],
			expandRows: te,
			syncRowHeights: !!e.syncRowHeights,
			rowSyncHeights: o,
			reportRowHeightChange: this.handleRowHeightChange
		}, s), S = _ ? h ? "scroll" : "scroll-hidden" : y ? h ? "auto" : "scroll-hidden" : "hidden", ne = v ? m ? "scroll" : "scroll-hidden" : ee ? m ? "auto" : "scroll-hidden" : "hidden";
		return x = B(Wt, {
			ref: this.clippedScrollerRefs.createRef(p),
			scrollerElRef: this.scrollerElRefs.createRef(p),
			overflowX: S,
			overflowY: ne,
			forPrint: this.props.forPrint,
			liquid: b,
			maxHeight: e.maxHeight
		}, x), B(s ? "th" : "td", {
			key: i.key,
			ref: this.chunkElRefs.createRef(p),
			role: "presentation"
		}, x);
	}
	componentDidMount() {
		this.getStickyScrolling = d(rn), this.getScrollSyncersBySection = v(nn.bind(this, !0), null, G), this.getScrollSyncersByColumn = v(nn.bind(this, !1), null, G), this.updateScrollSyncers(), this.handleSizing(!1), this.context.addResizeHandler(this.handleSizing);
	}
	componentDidUpdate(e, t) {
		this.updateScrollSyncers(), this.handleSizing(!1, t.sectionRowMaxHeights !== this.state.sectionRowMaxHeights);
	}
	componentWillUnmount() {
		this.context.removeResizeHandler(this.handleSizing), this.destroyScrollSyncers();
	}
	allowSizing() {
		let e = /* @__PURE__ */ new Date();
		return !this.lastSizingDate || e.valueOf() > this.lastSizingDate.valueOf() + E.SCROLLGRID_RESIZE_INTERVAL ? (this.lastSizingDate = e, this.recentSizingCnt = 0, !0) : (this.recentSizingCnt += 1) <= 10;
	}
	computeShrinkWidths() {
		let e = this.compileColGroupStats(this.props.colGroups.map((e) => [e])), [t, n] = this.getDims(), r = t * n, i = [];
		return e.forEach((e, t) => {
			if (e.hasShrinkCol) {
				let e = this.chunkElRefs.collect(t, r, n);
				i[t] = Re(e);
			}
		}), i;
	}
	computeSectionRowMaxHeights() {
		let e = /* @__PURE__ */ new Map(), [t, n] = this.getDims(), r = [];
		for (let i = 0; i < t; i += 1) {
			let t = this.props.sections[i], a = [];
			if (t && t.syncRowHeights) {
				let r = [];
				for (let t = 0; t < n; t += 1) {
					let a = i * n + t, o = [], s = this.chunkElRefs.currentMap[a];
					o = s ? y(s, ".fc-scrollgrid-sync-table tr").map((t) => {
						let n = Yt(t);
						return e.set(t, n), n;
					}) : [], r.push(o);
				}
				let o = r[0].length, s = !0;
				for (let e = 1; e < n; e += 1) if (!(t.chunks[e] && t.chunks[e].outerContent !== void 0) && r[e].length !== o) {
					s = !1;
					break;
				}
				if (s) {
					for (let e = 0; e < n; e += 1) a.push([]);
					for (let e = 0; e < o; e += 1) {
						let t = [];
						for (let i = 0; i < n; i += 1) {
							let n = r[i][e];
							n != null && t.push(n);
						}
						let i = Math.max(...t);
						for (let e = 0; e < n; e += 1) a[e].push(i);
					}
				} else {
					let e = [];
					for (let t = 0; t < n; t += 1) e.push(Jt(r[t]) + r[t].length);
					let t = Math.max(...e);
					for (let e = 0; e < n; e += 1) {
						let n = r[e].length, i = t - n, o = Math.floor(i / n), s = i - o * (n - 1), c = [], l = 0;
						for (l < n && (c.push(s), l += 1); l < n;) c.push(o), l += 1;
						a.push(c);
					}
				}
			}
			r.push(a);
		}
		return this.rowInnerMaxHeightMap = e, r;
	}
	computeScrollerDims() {
		let e = st(), [t, n] = this.getDims(), r = !this.context.isRtl || be() ? n - 1 : 0, i = t - 1, a = this.clippedScrollerRefs.currentMap, o = this.scrollerElRefs.currentMap, s = !1, c = !1, l = {}, u = {};
		for (let e = 0; e < t; e += 1) {
			let t = a[e * n + r];
			if (t && t.needsYScrolling()) {
				s = !0;
				break;
			}
		}
		for (let e = 0; e < n; e += 1) {
			let t = a[i * n + e];
			if (t && t.needsXScrolling()) {
				c = !0;
				break;
			}
		}
		for (let a = 0; a < t; a += 1) for (let t = 0; t < n; t += 1) {
			let d = a * n + t, f = o[d];
			if (f) {
				let n = f.parentNode;
				l[d] = Math.floor(n.getBoundingClientRect().width - (t === r && s ? e.y : 0)), u[d] = Math.floor(n.getBoundingClientRect().height - (a === i && c ? e.x : 0));
			}
		}
		return {
			forceYScrollbars: s,
			forceXScrollbars: c,
			scrollerClientWidths: l,
			scrollerClientHeights: u
		};
	}
	updateStickyScrolling() {
		let { isRtl: e } = this.context, t = this.scrollerElRefs.getAll().map((t) => [t, e]);
		this.getStickyScrolling(t).forEach((e) => e.updateSize());
	}
	updateScrollSyncers() {
		let [e, t] = this.getDims(), n = e * t, r = {}, i = {}, a = this.scrollerElRefs.currentMap;
		for (let n = 0; n < e; n += 1) {
			let e = n * t;
			r[n] = Ee(a, e, e + t, 1);
		}
		for (let e = 0; e < t; e += 1) i[e] = this.scrollerElRefs.collect(e, n, t);
		this.scrollSyncersBySection = this.getScrollSyncersBySection(r), this.scrollSyncersByColumn = this.getScrollSyncersByColumn(i);
	}
	destroyScrollSyncers() {
		C(this.scrollSyncersBySection, G), C(this.scrollSyncersByColumn, G);
	}
	getChunkConfigByIndex(e) {
		let t = this.getDims()[1], n = Math.floor(e / t), r = e % t, i = this.props.sections[n];
		return i && i.chunks[r];
	}
	forceScrollLeft(e, t) {
		let n = this.scrollSyncersByColumn[e];
		n && n.forceScrollLeft(t);
	}
	forceScrollTop(e, t) {
		let n = this.scrollSyncersBySection[e];
		n && n.forceScrollTop(t);
	}
	_handleChunkEl(e, t) {
		let n = this.getChunkConfigByIndex(parseInt(t, 10));
		n && L(n.elRef, e);
	}
	_handleScrollerEl(e, t) {
		let n = this.getChunkConfigByIndex(parseInt(t, 10));
		n && L(n.scrollerElRef, e);
	}
	getDims() {
		let e = this.props.sections.length;
		return [e, e ? this.props.sections[0].chunks.length : 0];
	}
};
W.addStateEquality({
	shrinkWidths: o,
	scrollerClientWidths: t,
	scrollerClientHeights: t
});
function Jt(e) {
	let t = 0;
	for (let n of e) t += n;
	return t;
}
function Yt(e) {
	let t = y(e, ".fc-scrollgrid-sync-inner").map(Xt);
	return t.length ? Math.max(...t) : 0;
}
function Xt(e) {
	return e.offsetHeight;
}
function Zt(e, t) {
	return B("colgroup", {}, ...e.map((e, n) => {
		let r = e.width;
		return r === "shrink" && (r = e.totalColWidth + Ue(t[n]) + 1), B("col", { style: { width: r } });
	}));
}
function Qt(e) {
	let t = $t(e.cols, "width"), n = $t(e.cols, "minWidth"), r = Le(e.cols);
	return {
		hasShrinkCol: r,
		totalColWidth: t,
		totalColMinWidth: n,
		allowXScrolling: e.width !== "shrink" && !!(t || n || r),
		cols: e.cols,
		width: e.width
	};
}
function $t(e, t) {
	let n = 0;
	for (let r of e) {
		let e = r[t];
		typeof e == "number" && (n += e * (r.span || 1));
	}
	return n;
}
var en = { cols: dt };
function tn(e, t) {
	return We(e, t, en);
}
function nn(e, ...t) {
	return new qt(e, t);
}
function G(e) {
	e.destroy();
}
function rn(e, t) {
	return new Ht(e, t);
}
//#endregion
//#region node_modules/@fullcalendar/scrollgrid/index.js
var an = M({
	name: "@fullcalendar/scrollgrid",
	premiumReleaseDate: "2026-06-18",
	deps: [U],
	scrollGridImpl: W
}), on = 18, K = 6, sn = 200;
E.MAX_TIMELINE_SLOTS = 1e3;
var cn = [
	{ years: 1 },
	{ months: 1 },
	{ days: 1 },
	{ hours: 1 },
	{ minutes: 30 },
	{ minutes: 15 },
	{ minutes: 10 },
	{ minutes: 5 },
	{ minutes: 1 },
	{ seconds: 30 },
	{ seconds: 15 },
	{ seconds: 10 },
	{ seconds: 5 },
	{ seconds: 1 },
	{ milliseconds: 500 },
	{ milliseconds: 100 },
	{ milliseconds: 10 },
	{ milliseconds: 1 }
];
function ln(e, t, n, i) {
	let a = {
		labelInterval: n.slotLabelInterval,
		slotDuration: n.slotDuration
	};
	fn(a, e, t), pn(a, e, t), mn(a, e, t);
	let o = n.slotLabelFormat;
	a.headerFormats = (Array.isArray(o) ? o : o == null ? hn(a, e, t, n) : [o]).map((e) => s(e)), a.isTimeScale = !!a.slotDuration.milliseconds;
	let c = null;
	if (!a.isTimeScale) {
		let e = I(a.slotDuration).unit;
		/year|month|week/.test(e) && (c = e);
	}
	a.largeUnit = c, a.emphasizeWeeks = ee(a.slotDuration) === 1 && J("weeks", e, t) >= 2 && !n.businessHours;
	let l = n.snapDuration, u, d;
	l && (u = H(l), d = R(a.slotDuration, u)), d ??= (u = a.slotDuration, 1), a.snapDuration = u, a.snapsPerSlot = d;
	let f = T(e.slotMaxTime) - T(e.slotMinTime), p = un(e.renderRange.start, a, t), m = un(e.renderRange.end, a, t);
	a.isTimeScale && (p = t.add(p, e.slotMinTime), m = t.add(r(m, -1), e.slotMaxTime)), a.timeWindowMs = f, a.normalizedRange = {
		start: p,
		end: m
	};
	let h = [], g = p;
	for (; g < m;) q(g, a, e, i) && h.push(g), g = t.add(g, a.slotDuration);
	a.slotDates = h;
	let _ = -1, v = 0, y = [], b = [];
	for (g = p; g < m;) q(g, a, e, i) ? (_ += 1, y.push(_), b.push(v)) : y.push(_ + .5), g = t.add(g, a.snapDuration), v += 1;
	return a.snapDiffToIndex = y, a.snapIndexToDiff = b, a.snapCnt = _ + 1, a.slotCnt = a.snapCnt / a.snapsPerSlot, a.isWeekStarts = gn(a, t), a.cellRows = _n(a, t), a.slotsPerLabel = R(a.labelInterval, a.slotDuration), a;
}
function un(e, t, n) {
	let r = e;
	return t.isTimeScale || (r = $e(r), t.largeUnit && (r = n.startOf(r, t.largeUnit))), r;
}
function dn(e, t, n) {
	if (!t.isTimeScale && (e = Ie(e), t.largeUnit)) {
		let r = e;
		e = {
			start: n.startOf(e.start, t.largeUnit),
			end: n.startOf(e.end, t.largeUnit)
		}, (e.end.valueOf() !== r.end.valueOf() || e.end <= e.start) && (e = {
			start: e.start,
			end: n.add(e.end, t.slotDuration)
		});
	}
	return e;
}
function q(e, t, n, r) {
	if (r.isHiddenDay(e)) return !1;
	if (t.isTimeScale) {
		let r = $e(e), i = e.valueOf() - r.valueOf() - T(n.slotMinTime);
		return i = (i % 864e5 + 864e5) % 864e5, i < t.timeWindowMs;
	}
	return !0;
}
function fn(e, t, n) {
	let { currentRange: r } = t;
	if (e.labelInterval && n.countDurationsBetween(r.start, r.end, e.labelInterval) > E.MAX_TIMELINE_SLOTS && (console.warn("slotLabelInterval results in too many cells"), e.labelInterval = null), e.slotDuration && n.countDurationsBetween(r.start, r.end, e.slotDuration) > E.MAX_TIMELINE_SLOTS && (console.warn("slotDuration results in too many cells"), e.slotDuration = null), e.labelInterval && e.slotDuration) {
		let t = R(e.labelInterval, e.slotDuration);
		(t === null || t < 1) && (console.warn("slotLabelInterval must be a multiple of slotDuration"), e.slotDuration = null);
	}
}
function pn(e, t, n) {
	let { currentRange: r } = t, { labelInterval: i } = e;
	if (!i) {
		let t;
		if (e.slotDuration) {
			for (t of cn) {
				let n = H(t), r = R(n, e.slotDuration);
				if (r !== null && r <= K) {
					i = n;
					break;
				}
			}
			i ||= e.slotDuration;
		} else for (t of cn) if (i = H(t), n.countDurationsBetween(r.start, r.end, i) >= on) break;
		e.labelInterval = i;
	}
	return i;
}
function mn(e, t, n) {
	let { currentRange: r } = t, { slotDuration: i } = e;
	if (!i) {
		let a = pn(e, t, n);
		for (let e of cn) {
			let t = H(e), n = R(a, t);
			if (n !== null && n > 1 && n <= K) {
				i = t;
				break;
			}
		}
		i && n.countDurationsBetween(r.start, r.end, i) > sn && (i = null), i ||= a, e.slotDuration = i;
	}
	return i;
}
function hn(e, t, n, r) {
	let a, o, { labelInterval: s } = e, c = I(s).unit, l = r.weekNumbers, u = a = o = null;
	switch (c === "week" && !l && (c = "day"), c) {
		case "year":
			u = { year: "numeric" };
			break;
		case "month":
			J("years", t, n) > 1 && (u = { year: "numeric" }), a = { month: "short" };
			break;
		case "week":
			J("years", t, n) > 1 && (u = { year: "numeric" }), a = { week: "narrow" };
			break;
		case "day":
			J("years", t, n) > 1 ? u = {
				year: "numeric",
				month: "long"
			} : J("months", t, n) > 1 && (u = { month: "long" }), l && (a = { week: "short" }), o = {
				weekday: "narrow",
				day: "numeric"
			};
			break;
		case "hour":
			l && (u = { week: "short" }), J("days", t, n) > 1 && (a = {
				weekday: "short",
				day: "numeric",
				month: "numeric",
				omitCommas: !0
			}), o = {
				hour: "numeric",
				minute: "2-digit",
				omitZeroMinute: !0,
				meridiem: "short"
			};
			break;
		case "minute":
			ve(s) / 60 >= K ? (u = {
				hour: "numeric",
				meridiem: "short"
			}, a = (e) => ":" + i(e.date.minute, 2)) : u = {
				hour: "numeric",
				minute: "numeric",
				meridiem: "short"
			};
			break;
		case "second":
			ye(s) / 60 >= K ? (u = {
				hour: "numeric",
				minute: "2-digit",
				meridiem: "lowercase"
			}, a = (e) => ":" + i(e.date.second, 2)) : u = {
				hour: "numeric",
				minute: "2-digit",
				second: "2-digit",
				meridiem: "lowercase"
			};
			break;
		case "millisecond":
			u = {
				hour: "numeric",
				minute: "2-digit",
				second: "2-digit",
				meridiem: "lowercase"
			}, a = (e) => "." + i(e.millisecond, 3);
			break;
	}
	return [].concat(u || [], a || [], o || []);
}
function J(e, t, n) {
	let r = t.currentRange, i = null;
	return e === "years" ? i = n.diffWholeYears(r.start, r.end) : e === "months" || e === "weeks" ? i = n.diffWholeMonths(r.start, r.end) : e === "days" && (i = se(r.start, r.end)), i || 0;
}
function gn(e, t) {
	let { slotDates: n, emphasizeWeeks: r } = e, i = null, a = [];
	for (let e of n) {
		let n = t.computeWeekNumber(e), o = r && i !== null && i !== n;
		i = n, a.push(o);
	}
	return a;
}
function _n(e, t) {
	let n = e.slotDates, r = e.headerFormats, i = r.map(() => []), a = ee(e.slotDuration), o = a === 7 ? "week" : a === 1 ? "day" : null, s = r.map((e) => e.getSmallestUnit ? e.getSmallestUnit() : null);
	for (let a = 0; a < n.length; a += 1) {
		let l = n[a], u = e.isWeekStarts[a];
		for (let n = 0; n < r.length; n += 1) {
			let a = r[n], d = i[n], f = d[d.length - 1], p = n === r.length - 1, m = r.length > 1 && !p, h = null, g = s[n] || (p ? o : null);
			if (m) {
				let e = t.format(l, a);
				!f || f.text !== e ? h = vn(l, e, g) : f.colspan += 1;
			} else !f || c(t.countDurationsBetween(e.normalizedRange.start, l, e.labelInterval)) ? h = vn(l, t.format(l, a), g) : f.colspan += 1;
			h && (h.weekStart = u, d.push(h));
		}
	}
	return i;
}
function vn(e, t, n) {
	return {
		date: e,
		text: t,
		rowUnit: n,
		colspan: 1,
		isWeekStart: !1
	};
}
var yn = class extends j {
	constructor() {
		super(...arguments), this.refineRenderProps = S(Sn), this.buildCellNavLinkAttrs = w(bn);
	}
	render() {
		let { props: e, context: t } = this, { dateEnv: n, options: r } = t, { cell: i, dateProfile: a, tDateProfile: o } = e, s = p(i.date, e.todayRange, e.nowDate, a), c = this.refineRenderProps({
			level: e.rowLevel,
			dateMarker: i.date,
			text: i.text,
			dateEnv: t.dateEnv,
			viewApi: t.viewApi
		});
		return B(P, {
			elTag: "th",
			elClasses: [
				"fc-timeline-slot",
				"fc-timeline-slot-label",
				i.isWeekStart && "fc-timeline-slot-em",
				...i.rowUnit === "time" ? Xe(s, t.theme) : te(s, t.theme)
			],
			elAttrs: {
				colSpan: i.colspan,
				"data-date": n.formatIso(i.date, {
					omitTime: !o.isTimeScale,
					omitTimeZoneOffset: !0
				})
			},
			renderProps: c,
			generatorName: "slotLabelContent",
			customGenerator: r.slotLabelContent,
			defaultGenerator: xn,
			classNameGenerator: r.slotLabelClassNames,
			didMount: r.slotLabelDidMount,
			willUnmount: r.slotLabelWillUnmount
		}, (n) => B("div", {
			className: "fc-timeline-slot-frame",
			style: { height: e.rowInnerHeight }
		}, B(n, {
			elTag: "a",
			elClasses: [
				"fc-timeline-slot-cushion",
				"fc-scrollgrid-sync-inner",
				e.isSticky && "fc-sticky"
			],
			elAttrs: this.buildCellNavLinkAttrs(t, i.date, i.rowUnit)
		})));
	}
};
function bn(e, t, n) {
	return n && n !== "time" ? it(e, t, n) : {};
}
function xn(e) {
	return e.text;
}
function Sn(e) {
	return {
		level: e.level,
		date: e.dateEnv.toDate(e.dateMarker),
		view: e.viewApi,
		text: e.text
	};
}
var Cn = class extends j {
	render() {
		let { dateProfile: e, tDateProfile: t, rowInnerHeights: n, todayRange: r, nowDate: i } = this.props, { cellRows: a } = t;
		return B(V, null, a.map((o, s) => {
			let c = s === a.length - 1;
			return B("tr", {
				key: s,
				className: ["fc-timeline-header-row", t.isTimeScale && c ? "fc-timeline-header-row-chrono" : ""].join(" ")
			}, o.map((a) => B(yn, {
				key: a.date.toISOString(),
				cell: a,
				rowLevel: s,
				dateProfile: e,
				tDateProfile: t,
				todayRange: r,
				nowDate: i,
				rowInnerHeight: n && n[s],
				isSticky: !c
			})));
		}));
	}
}, wn = class {
	constructor(e, t, n, r, i, a) {
		this.slatRootEl = e, this.dateProfile = n, this.tDateProfile = r, this.dateEnv = i, this.isRtl = a, this.outerCoordCache = new me(e, t, !0, !1), this.innerCoordCache = new me(e, f(t, "div"), !0, !1);
	}
	isDateInRange(e) {
		return _e(this.dateProfile.currentRange, e);
	}
	dateToCoord(e) {
		let { tDateProfile: t } = this, n = this.computeDateSnapCoverage(e) / t.snapsPerSlot, r = Math.floor(n);
		r = Math.min(r, t.slotCnt - 1);
		let i = n - r, { innerCoordCache: a, outerCoordCache: o } = this;
		return this.isRtl ? o.originClientRect.width - (o.rights[r] - a.getWidth(r) * i) : o.lefts[r] + a.getWidth(r) * i;
	}
	rangeToCoords(e) {
		return {
			start: this.dateToCoord(e.start),
			end: this.dateToCoord(e.end)
		};
	}
	durationToCoord(e) {
		let { dateProfile: t, tDateProfile: n, dateEnv: r, isRtl: i } = this, a = 0;
		if (t) {
			let o = r.add(t.activeRange.start, e);
			n.isTimeScale || (o = $e(o)), a = this.dateToCoord(o), !i && a && (a += 1);
		}
		return a;
	}
	coordFromLeft(e) {
		return this.isRtl ? this.outerCoordCache.originClientRect.width - e : e;
	}
	computeDateSnapCoverage(e) {
		return Tn(e, this.tDateProfile, this.dateEnv);
	}
};
function Tn(e, t, n) {
	let r = n.countDurationsBetween(t.normalizedRange.start, e, t.snapDuration);
	if (r < 0) return 0;
	if (r >= t.snapDiffToIndex.length) return t.snapCnt;
	let i = Math.floor(r), a = t.snapDiffToIndex[i];
	return c(a) ? a += r - i : a = Math.ceil(a), a;
}
function En(e, t) {
	return e === null ? {
		left: "",
		right: ""
	} : t ? {
		right: e,
		left: ""
	} : {
		left: e,
		right: ""
	};
}
function Dn(e, t) {
	return e ? t ? {
		right: e.start,
		left: -e.end
	} : {
		left: e.start,
		right: -e.end
	} : {
		left: "",
		right: ""
	};
}
var On = class extends j {
	constructor() {
		super(...arguments), this.rootElRef = D();
	}
	render() {
		let { props: e, context: t } = this, { unit: n, value: r } = I(e.tDateProfile.slotDuration), i = e.slatCoords && e.slatCoords.dateProfile === e.dateProfile ? e.slatCoords : null;
		return B(z, {
			unit: n,
			unitValue: r
		}, (n, r) => B("div", {
			className: "fc-timeline-header",
			ref: this.rootElRef
		}, B("table", {
			"aria-hidden": !0,
			className: "fc-scrollgrid-sync-table",
			style: {
				minWidth: e.tableMinWidth,
				width: e.clientWidth
			}
		}, e.tableColGroupNode, B("tbody", null, B(Cn, {
			dateProfile: e.dateProfile,
			tDateProfile: e.tDateProfile,
			nowDate: n,
			todayRange: r,
			rowInnerHeights: e.rowInnerHeights
		}))), t.options.nowIndicator && B("div", { className: "fc-timeline-now-indicator-container" }, i && i.isDateInRange(n) && B(a, {
			elClasses: ["fc-timeline-now-indicator-arrow"],
			elStyle: En(i.dateToCoord(n), t.isRtl),
			isAxis: !0,
			date: n
		}))));
	}
	componentDidMount() {
		this.updateSize();
	}
	componentDidUpdate() {
		this.updateSize();
	}
	updateSize() {
		this.props.onMaxCushionWidth && this.props.onMaxCushionWidth(this.computeMaxCushionWidth());
	}
	computeMaxCushionWidth() {
		return Math.max(...y(this.rootElRef.current, ".fc-timeline-header-row:last-child .fc-timeline-slot-cushion").map((e) => e.getBoundingClientRect().width));
	}
}, kn = class extends j {
	render() {
		let { props: e, context: t } = this, { dateEnv: n, options: r, theme: i } = t, { date: a, tDateProfile: o, isEm: s } = e, l = p(e.date, e.todayRange, e.nowDate, e.dateProfile), u = Object.assign(Object.assign({ date: n.toDate(e.date) }, l), { view: t.viewApi });
		return B(P, {
			elTag: "td",
			elRef: e.elRef,
			elClasses: [
				"fc-timeline-slot",
				"fc-timeline-slot-lane",
				s && "fc-timeline-slot-em",
				o.isTimeScale ? c(n.countDurationsBetween(o.normalizedRange.start, e.date, o.labelInterval)) ? "fc-timeline-slot-major" : "fc-timeline-slot-minor" : "",
				...e.isDay ? te(l, i) : Xe(l, i)
			],
			elAttrs: { "data-date": n.formatIso(a, {
				omitTimeZoneOffset: !0,
				omitTime: !o.isTimeScale
			}) },
			renderProps: u,
			generatorName: "slotLaneContent",
			customGenerator: r.slotLaneContent,
			classNameGenerator: r.slotLaneClassNames,
			didMount: r.slotLaneDidMount,
			willUnmount: r.slotLaneWillUnmount
		}, (e) => B(e, { elTag: "div" }));
	}
}, An = class extends j {
	render() {
		let { props: e } = this, { tDateProfile: t, cellElRefs: n } = e, { slotDates: r, isWeekStarts: i } = t, a = !t.isTimeScale && !t.largeUnit;
		return B("tbody", null, B("tr", null, r.map((r, o) => {
			let s = r.toISOString();
			return B(kn, {
				key: s,
				elRef: n.createRef(s),
				date: r,
				dateProfile: e.dateProfile,
				tDateProfile: t,
				nowDate: e.nowDate,
				todayRange: e.todayRange,
				isEm: i[o],
				isDay: a
			});
		})));
	}
}, jn = class extends j {
	constructor() {
		super(...arguments), this.rootElRef = D(), this.cellElRefs = new l(), this.handleScrollRequest = (e) => {
			let { onScrollLeftRequest: t } = this.props, { coords: n } = this;
			return t && n ? (e.time && t(n.coordFromLeft(n.durationToCoord(e.time))), !0) : null;
		};
	}
	render() {
		let { props: e, context: t } = this;
		return B("div", {
			className: "fc-timeline-slots",
			ref: this.rootElRef
		}, B("table", {
			"aria-hidden": !0,
			className: t.theme.getClass("table"),
			style: {
				minWidth: e.tableMinWidth,
				width: e.clientWidth
			}
		}, e.tableColGroupNode, B(An, {
			cellElRefs: this.cellElRefs,
			dateProfile: e.dateProfile,
			tDateProfile: e.tDateProfile,
			nowDate: e.nowDate,
			todayRange: e.todayRange
		})));
	}
	componentDidMount() {
		this.updateSizing(), this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
	}
	componentDidUpdate(e) {
		this.updateSizing(), this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
	}
	componentWillUnmount() {
		this.scrollResponder.detach(), this.props.onCoords && this.props.onCoords(null);
	}
	updateSizing() {
		let { props: e, context: t } = this;
		e.clientWidth !== null && this.scrollResponder && this.rootElRef.current.offsetWidth && (this.coords = new wn(this.rootElRef.current, Mn(this.cellElRefs.currentMap, e.tDateProfile.slotDates), e.dateProfile, e.tDateProfile, t.dateEnv, t.isRtl), e.onCoords && e.onCoords(this.coords), this.scrollResponder.update(!1));
	}
	positionToHit(e) {
		let { outerCoordCache: t } = this.coords, { dateEnv: n, isRtl: r } = this.context, { tDateProfile: i } = this.props, a = t.leftToIndex(e);
		if (a != null) {
			let o = t.getWidth(a), s = r ? (t.rights[a] - e) / o : (e - t.lefts[a]) / o, c = Math.floor(s * i.snapsPerSlot), l = n.add(i.slotDates[a], mt(i.snapDuration, c));
			return {
				dateSpan: {
					range: {
						start: l,
						end: n.add(l, i.snapDuration)
					},
					allDay: !this.props.tDateProfile.isTimeScale
				},
				dayEl: this.cellElRefs.currentMap[a],
				left: t.lefts[a],
				right: t.rights[a]
			};
		}
		return null;
	}
};
function Mn(e, t) {
	return t.map((t) => e[t.toISOString()]);
}
function Nn(e, t, n) {
	let r = [];
	if (n) for (let i of e) {
		let e = n.rangeToCoords(i), a = Math.round(e.start), o = Math.round(e.end);
		o - a < t && (o = a + t), r.push({
			start: a,
			end: o
		});
	}
	return r;
}
function Pn(e, t, n, r, i, a) {
	let o = [], s = [];
	for (let r = 0; r < e.length; r += 1) {
		let i = e[r], a = n[i.eventRange.instance.instanceId], c = t[r];
		a && c ? o.push({
			index: r,
			span: c,
			thickness: a
		}) : s.push({
			seg: i,
			hcoords: c,
			top: null
		});
	}
	let c = new He();
	i != null && (c.strictOrder = i), a != null && (c.maxStackCnt = a);
	let l = c.addSegs(o), u = l.map((t) => ({
		seg: e[t.index],
		hcoords: t.span,
		top: null
	})), d = Ae(l), f = [], p = [], m = (t) => e[t.index];
	for (let t = 0; t < d.length; t += 1) {
		let n = d[t], i = n.entries.map(m), a = r[Ye(ut(i))];
		a == null ? p.push({
			seg: i,
			hcoords: n.span,
			top: null
		}) : f.push({
			index: e.length + t,
			thickness: a,
			span: n.span
		});
	}
	c.maxStackCnt = -1, c.addSegs(f);
	let h = c.toRects(), g = [], _ = 0;
	for (let t of h) {
		let n = t.index;
		g.push({
			seg: n < e.length ? e[n] : d[n - e.length].entries.map(m),
			hcoords: t.span,
			top: t.levelCoord
		}), _ = Math.max(_, t.levelCoord + t.thickness);
	}
	return [g.concat(s, u, p), _];
}
var Fn = class extends j {
	render() {
		let { props: e } = this, t = [].concat(e.eventResizeSegs, e.dateSelectionSegs);
		return e.timelineCoords && B("div", { className: "fc-timeline-bg" }, this.renderSegs(e.businessHourSegs || [], e.timelineCoords, "non-business"), this.renderSegs(e.bgEventSegs || [], e.timelineCoords, "bg-event"), this.renderSegs(t, e.timelineCoords, "highlight"));
	}
	renderSegs(e, t, n) {
		let { todayRange: r, nowDate: i } = this.props, { isRtl: a } = this.context, o = Nn(e, 0, t);
		return B(V, null, e.map((e, t) => {
			let s = o[t], c = Dn(s, a);
			return B("div", {
				key: lt(e.eventRange),
				className: "fc-timeline-bg-harness",
				style: c
			}, n === "bg-event" ? B(Ce, Object.assign({ seg: e }, we(e, r, i))) : Te(n));
		}));
	}
}, In = class extends Be {
	sliceRange(e, t, n, r, i) {
		let a = dn(e, r, i), o = [];
		if (Tn(a.start, r, i) < Tn(a.end, r, i)) {
			let e = De(a, r.normalizedRange);
			e && o.push({
				start: e.start,
				end: e.end,
				isStart: e.start.valueOf() === a.start.valueOf() && q(e.start, r, t, n),
				isEnd: e.end.valueOf() === a.end.valueOf() && q(m(e.end, -1), r, t, n)
			});
		}
		return o;
	}
}, Ln = s({
	hour: "numeric",
	minute: "2-digit",
	omitZeroMinute: !0,
	meridiem: "narrow"
}), Rn = class extends j {
	render() {
		let { props: e } = this;
		return B(ae, Object.assign({}, e, {
			elClasses: ["fc-timeline-event", "fc-h-event"],
			defaultTimeFormat: Ln,
			defaultDisplayEventTime: !e.isTimeScale
		}));
	}
}, zn = class extends j {
	render() {
		let { props: e, context: t } = this, { hiddenSegs: n, placement: r, resourceId: i } = e, { top: a, hcoords: o } = r, s = o && a !== null, c = Dn(o, t.isRtl), l = i ? { resourceId: i } : {};
		return B(ft, {
			elRef: e.elRef,
			elClasses: ["fc-timeline-more-link"],
			elStyle: Object.assign({
				visibility: s ? "" : "hidden",
				top: a || 0
			}, c),
			allDayDate: null,
			moreCnt: n.length,
			allSegs: n,
			hiddenSegs: n,
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			extraDateSpan: l,
			popoverContent: () => B(V, null, n.map((t) => {
				let n = t.eventRange.instance.instanceId;
				return B("div", {
					key: n,
					style: { visibility: e.isForcedInvisible[n] ? "hidden" : "" }
				}, B(Rn, Object.assign({
					isTimeScale: e.isTimeScale,
					seg: t,
					isDragging: !1,
					isResizing: !1,
					isDateSelecting: !1,
					isSelected: n === e.eventSelection
				}, we(t, e.todayRange, e.nowDate))));
			}))
		}, (e) => B(e, {
			elTag: "div",
			elClasses: ["fc-timeline-more-link-inner", "fc-sticky"]
		}));
	}
}, Y = class extends j {
	constructor() {
		super(...arguments), this.slicer = new In(), this.sortEventSegs = w(Ne), this.harnessElRefs = new l(), this.moreElRefs = new l(), this.innerElRef = D(), this.state = {
			eventInstanceHeights: {},
			moreLinkHeights: {}
		}, this.handleResize = (e) => {
			e && this.updateSize();
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, { dateProfile: i, tDateProfile: a } = e, o = this.slicer.sliceProps(e, i, a.isTimeScale ? null : e.nextDayThreshold, n, i, n.dateProfileGenerator, a, n.dateEnv), s = (o.eventDrag ? o.eventDrag.segs : null) || (o.eventResize ? o.eventResize.segs : null) || [], c = this.sortEventSegs(o.fgEventSegs, r.eventOrder), [l, u] = Pn(c, Nn(c, r.eventMinWidth, e.timelineCoords), t.eventInstanceHeights, t.moreLinkHeights, r.eventOrderStrict, r.eventMaxStack), d = (o.eventDrag ? o.eventDrag.affectedInstances : null) || (o.eventResize ? o.eventResize.affectedInstances : null) || {};
		return B(V, null, B(Fn, {
			businessHourSegs: o.businessHourSegs,
			bgEventSegs: o.bgEventSegs,
			timelineCoords: e.timelineCoords,
			eventResizeSegs: o.eventResize ? o.eventResize.segs : [],
			dateSelectionSegs: o.dateSelectionSegs,
			nowDate: e.nowDate,
			todayRange: e.todayRange
		}), B("div", {
			className: "fc-timeline-events fc-scrollgrid-sync-inner",
			ref: this.innerElRef,
			style: { height: u }
		}, this.renderFgSegs(l, d, !1, !1, !1), this.renderFgSegs(Bn(s, e.timelineCoords, l), {}, !!o.eventDrag, !!o.eventResize, !1)));
	}
	componentDidMount() {
		this.updateSize(), this.context.addResizeHandler(this.handleResize);
	}
	componentDidUpdate(e, t) {
		(e.eventStore !== this.props.eventStore || e.timelineCoords !== this.props.timelineCoords || t.moreLinkHeights !== this.state.moreLinkHeights) && this.updateSize();
	}
	componentWillUnmount() {
		this.context.removeResizeHandler(this.handleResize);
	}
	updateSize() {
		let { props: e } = this, { timelineCoords: t } = e, n = this.innerElRef.current;
		e.onHeightChange && e.onHeightChange(n, !1), t && this.setState({
			eventInstanceHeights: C(this.harnessElRefs.currentMap, (e) => Math.round(e.getBoundingClientRect().height)),
			moreLinkHeights: C(this.moreElRefs.currentMap, (e) => Math.round(e.getBoundingClientRect().height))
		}, () => {
			e.onHeightChange && e.onHeightChange(n, !0);
		}), e.syncParentMinHeight && (n.parentElement.style.minHeight = n.style.height);
	}
	renderFgSegs(e, t, n, r, i) {
		let { harnessElRefs: a, moreElRefs: o, props: s, context: c } = this, l = n || r || i;
		return B(V, null, e.map((e) => {
			let { seg: u, hcoords: d, top: f } = e;
			if (Array.isArray(u)) {
				let n = Ye(ut(u));
				return B(zn, {
					key: "m:" + n,
					elRef: o.createRef(n),
					hiddenSegs: u,
					placement: e,
					dateProfile: s.dateProfile,
					nowDate: s.nowDate,
					todayRange: s.todayRange,
					isTimeScale: s.tDateProfile.isTimeScale,
					eventSelection: s.eventSelection,
					resourceId: s.resourceId,
					isForcedInvisible: t
				});
			}
			let p = u.eventRange.instance.instanceId, m = l || !!(!t[p] && d && f !== null), h = Dn(d, c.isRtl);
			return B("div", {
				key: "e:" + p,
				ref: l ? null : a.createRef(p),
				className: "fc-timeline-event-harness",
				style: Object.assign({
					visibility: m ? "" : "hidden",
					top: f || 0
				}, h)
			}, B(Rn, Object.assign({
				isTimeScale: s.tDateProfile.isTimeScale,
				seg: u,
				isDragging: n,
				isResizing: r,
				isDateSelecting: i,
				isSelected: p === s.eventSelection
			}, we(u, s.todayRange, s.nowDate))));
		}));
	}
};
Y.addStateEquality({
	eventInstanceHeights: t,
	moreLinkHeights: t
});
function Bn(e, t, n) {
	if (!e.length || !t) return [];
	let r = Vn(n);
	return e.map((e) => ({
		seg: e,
		hcoords: t.rangeToCoords(e),
		top: r[e.eventRange.instance.instanceId]
	}));
}
function Vn(e) {
	let t = {};
	for (let n of e) {
		let { seg: e } = n;
		Array.isArray(e) || (t[e.eventRange.instance.instanceId] = n.top);
	}
	return t;
}
var Hn = class extends O {
	constructor() {
		super(...arguments), this.slatsRef = D(), this.state = { coords: null }, this.handeEl = (e) => {
			e ? this.context.registerInteractiveComponent(this, { el: e }) : this.context.unregisterInteractiveComponent(this);
		}, this.handleCoords = (e) => {
			this.setState({ coords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, { dateProfile: i, tDateProfile: o } = e, { unit: s, value: c } = I(o.slotDuration);
		return B("div", {
			className: "fc-timeline-body",
			ref: this.handeEl,
			style: {
				minWidth: e.tableMinWidth,
				height: e.clientHeight,
				width: e.clientWidth
			}
		}, B(z, {
			unit: s,
			unitValue: c
		}, (s, c) => B(V, null, B(jn, {
			ref: this.slatsRef,
			dateProfile: i,
			tDateProfile: o,
			nowDate: s,
			todayRange: c,
			clientWidth: e.clientWidth,
			tableColGroupNode: e.tableColGroupNode,
			tableMinWidth: e.tableMinWidth,
			onCoords: this.handleCoords,
			onScrollLeftRequest: e.onScrollLeftRequest
		}), B(Y, {
			dateProfile: i,
			tDateProfile: e.tDateProfile,
			nowDate: s,
			todayRange: c,
			nextDayThreshold: r.nextDayThreshold,
			businessHours: e.businessHours,
			eventStore: e.eventStore,
			eventUiBases: e.eventUiBases,
			dateSelection: e.dateSelection,
			eventSelection: e.eventSelection,
			eventDrag: e.eventDrag,
			eventResize: e.eventResize,
			timelineCoords: t.coords,
			syncParentMinHeight: !0
		}), r.nowIndicator && t.coords && t.coords.isDateInRange(s) && B("div", { className: "fc-timeline-now-indicator-container" }, B(a, {
			elClasses: ["fc-timeline-now-indicator-line"],
			elStyle: En(t.coords.dateToCoord(s), n.isRtl),
			isAxis: !1,
			date: s
		})))));
	}
	queryHit(e, t, n, r) {
		let i = this.slatsRef.current.positionToHit(e);
		return i ? {
			dateProfile: this.props.dateProfile,
			dateSpan: i.dateSpan,
			rect: {
				left: i.left,
				right: i.right,
				top: 0,
				bottom: r
			},
			dayEl: i.dayEl,
			layer: 0
		} : null;
	}
}, Un = class extends O {
	constructor() {
		super(...arguments), this.buildTimelineDateProfile = w(ln), this.scrollGridRef = D(), this.state = {
			slatCoords: null,
			slotCushionMaxWidth: null
		}, this.handleSlatCoords = (e) => {
			this.setState({ slatCoords: e });
		}, this.handleScrollLeftRequest = (e) => {
			this.scrollGridRef.current.forceScrollLeft(0, e);
		}, this.handleMaxCushionWidth = (e) => {
			this.setState({ slotCushionMaxWidth: Math.ceil(e) });
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, i = !e.forPrint && Oe(r), a = !e.forPrint && at(r), o = this.buildTimelineDateProfile(e.dateProfile, n.dateEnv, r, n.dateProfileGenerator), { slotMinWidth: s } = r, c = Wn(o, s || this.computeFallbackSlotMinWidth(o)), l = [{
			type: "header",
			key: "header",
			isSticky: i,
			chunks: [{
				key: "timeline",
				content: (n) => B(On, {
					dateProfile: e.dateProfile,
					clientWidth: n.clientWidth,
					clientHeight: n.clientHeight,
					tableMinWidth: n.tableMinWidth,
					tableColGroupNode: n.tableColGroupNode,
					tDateProfile: o,
					slatCoords: t.slatCoords,
					onMaxCushionWidth: s ? null : this.handleMaxCushionWidth
				})
			}]
		}, {
			type: "body",
			key: "body",
			liquid: !0,
			chunks: [{
				key: "timeline",
				content: (t) => B(Hn, Object.assign({}, e, {
					clientWidth: t.clientWidth,
					clientHeight: t.clientHeight,
					tableMinWidth: t.tableMinWidth,
					tableColGroupNode: t.tableColGroupNode,
					tDateProfile: o,
					onSlatCoords: this.handleSlatCoords,
					onScrollLeftRequest: this.handleScrollLeftRequest
				}))
			}]
		}];
		return a && l.push({
			type: "footer",
			key: "footer",
			isSticky: !0,
			chunks: [{
				key: "timeline",
				content: F
			}]
		}), B(_, {
			elClasses: ["fc-timeline", r.eventOverlap === !1 ? "fc-timeline-overlap-disabled" : ""],
			viewSpec: n.viewSpec
		}, B(W, {
			ref: this.scrollGridRef,
			liquid: !e.isHeightAuto && !e.forPrint,
			forPrint: e.forPrint,
			collapsibleWidth: !1,
			colGroups: [{ cols: c }],
			sections: l
		}));
	}
	computeFallbackSlotMinWidth(e) {
		return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel);
	}
};
function Wn(e, t) {
	return [{
		span: e.slotCnt,
		minWidth: t || 1
	}];
}
Se(".fc .fc-timeline-body{min-height:100%;position:relative;z-index:1}.fc .fc-timeline-slots{bottom:0;position:absolute;top:0;z-index:1}.fc .fc-timeline-slots>table{height:100%}.fc .fc-timeline-slot-minor{border-style:dotted}.fc .fc-timeline-slot-frame{align-items:center;display:flex;justify-content:center}.fc .fc-timeline-header-row-chrono .fc-timeline-slot-frame{justify-content:flex-start}.fc .fc-timeline-header-row:last-child .fc-timeline-slot-frame{overflow:hidden}.fc .fc-timeline-slot-cushion{padding:4px 5px;white-space:nowrap}.fc-direction-ltr .fc-timeline-slot{border-right:0!important}.fc-direction-rtl .fc-timeline-slot{border-left:0!important}.fc .fc-timeline-now-indicator-container{bottom:0;left:0;position:absolute;right:0;top:0;width:0;z-index:4}.fc .fc-timeline-now-indicator-arrow,.fc .fc-timeline-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;pointer-events:none;position:absolute;top:0}.fc .fc-timeline-now-indicator-arrow{border-left-color:transparent;border-right-color:transparent;border-width:6px 5px 0;margin:0 -6px}.fc .fc-timeline-now-indicator-line{border-width:0 0 0 1px;bottom:0;margin:0 -1px}.fc .fc-timeline-events{position:relative;width:0;z-index:3}.fc .fc-timeline-event-harness,.fc .fc-timeline-more-link{position:absolute;top:0}.fc-timeline-event{z-index:1}.fc-timeline-event.fc-event-mirror{z-index:2}.fc-timeline-event{align-items:center;border-radius:0;display:flex;font-size:var(--fc-small-font-size);margin-bottom:1px;padding:2px 1px;position:relative}.fc-timeline-event .fc-event-main{flex-grow:1;flex-shrink:1;min-width:0}.fc-timeline-event .fc-event-time{font-weight:700}.fc-timeline-event .fc-event-time,.fc-timeline-event .fc-event-title{padding:0 2px;white-space:nowrap}.fc-direction-ltr .fc-timeline-event.fc-event-end,.fc-direction-ltr .fc-timeline-more-link{margin-right:1px}.fc-direction-rtl .fc-timeline-event.fc-event-end,.fc-direction-rtl .fc-timeline-more-link{margin-left:1px}.fc-timeline-overlap-disabled .fc-timeline-event{margin-bottom:0;padding-bottom:5px;padding-top:5px}.fc-timeline-event:not(.fc-event-end):after,.fc-timeline-event:not(.fc-event-start):before{border-color:transparent #000;border-style:solid;border-width:5px;content:\"\";flex-grow:0;flex-shrink:0;height:0;margin:0 1px;opacity:.5;width:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-start):before,.fc-direction-rtl .fc-timeline-event:not(.fc-event-end):after{border-left:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-end):after,.fc-direction-rtl .fc-timeline-event:not(.fc-event-start):before{border-right:0}.fc-timeline-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;font-size:var(--fc-small-font-size);padding:1px}.fc-timeline-more-link-inner{display:inline-block;left:0;padding:2px;right:0}.fc .fc-timeline-bg{bottom:0;left:0;position:absolute;right:0;top:0;width:0;z-index:2}.fc .fc-timeline-bg .fc-non-business{z-index:1}.fc .fc-timeline-bg .fc-bg-event{z-index:2}.fc .fc-timeline-bg .fc-highlight{z-index:3}.fc .fc-timeline-bg-harness{bottom:0;position:absolute;top:0}");
//#endregion
//#region node_modules/@fullcalendar/timeline/index.js
var Gn = M({
	name: "@fullcalendar/timeline",
	premiumReleaseDate: "2026-06-18",
	deps: [U],
	initialView: "timelineDay",
	views: {
		timeline: {
			component: Un,
			usesMinMaxTime: !0,
			eventResizableFromStart: !0
		},
		timelineDay: {
			type: "timeline",
			duration: { days: 1 }
		},
		timelineWeek: {
			type: "timeline",
			duration: { weeks: 1 }
		},
		timelineMonth: {
			type: "timeline",
			duration: { months: 1 }
		},
		timelineYear: {
			type: "timeline",
			duration: { years: 1 }
		}
	}
});
//#endregion
//#region node_modules/@fullcalendar/adaptive/index.js
E.COLLAPSIBLE_WIDTH_THRESHOLD = 1200;
var X = [], Kn = [];
function qn(e) {
	X.length || Jn(), X.push(e), e.calendarApi.on("_unmount", () => {
		rt(X, e), X.length || Yn();
	});
}
function Jn() {
	window.addEventListener("beforeprint", Xn), window.addEventListener("afterprint", Zn);
}
function Yn() {
	window.removeEventListener("beforeprint", Xn), window.removeEventListener("afterprint", Zn);
}
function Xn() {
	for (let e of X) e.emitter.trigger("_beforeprint");
	fe(() => {
		Kn.push(Qn());
	});
}
function Zn() {
	for (let e of X) e.emitter.trigger("_afterprint");
	fe(() => {
		for (; Kn.length;) Kn.shift()();
	});
}
function Qn() {
	let e = y(document.body, ".fc-scrollgrid");
	return e.forEach($n), () => e.forEach(er);
}
function $n(e) {
	let t = e.getBoundingClientRect().width;
	(!e.classList.contains("fc-scrollgrid-collapsible") || t < E.COLLAPSIBLE_WIDTH_THRESHOLD) && (e.style.width = t + "px");
}
function er(e) {
	e.style.width = "";
}
Se(".fc .fc-event,.fc .fc-scrollgrid table tr{-moz-column-break-inside:avoid;break-inside:avoid}.fc-media-print{display:block;max-width:100%}.fc-media-print .fc-bg-event,.fc-media-print .fc-non-business,.fc-media-print .fc-timegrid-axis-chunk,.fc-media-print .fc-timegrid-slots,.fc-media-print .fc-timeline-slots{display:none}.fc-media-print .fc-h-event,.fc-media-print .fc-toolbar button,.fc-media-print .fc-v-event{background:#fff!important;color:#000!important}.fc-media-print .fc-event,.fc-media-print .fc-event-main{color:#000!important}.fc-media-print .fc-timegrid-event{margin:.5em 0}");
var tr = M({
	name: "@fullcalendar/adaptive",
	premiumReleaseDate: "2026-06-18",
	deps: [U],
	contextInit: qn
}), nr = "_fc:", rr = {
	id: String,
	parentId: String,
	children: A,
	title: String,
	businessHours: A,
	extendedProps: A,
	eventEditable: Boolean,
	eventStartEditable: Boolean,
	eventDurationEditable: Boolean,
	eventConstraint: A,
	eventOverlap: Boolean,
	eventAllow: A,
	eventClassNames: he,
	eventBackgroundColor: String,
	eventBorderColor: String,
	eventTextColor: String,
	eventColor: String
};
function ir(e, t = "", n, r) {
	let { refined: i, extra: a } = ct(e, rr), o = {
		id: i.id || nr + k(),
		parentId: i.parentId || t,
		title: i.title || "",
		businessHours: i.businessHours ? h(i.businessHours, r) : null,
		ui: pe({
			editable: i.eventEditable,
			startEditable: i.eventStartEditable,
			durationEditable: i.eventDurationEditable,
			constraint: i.eventConstraint,
			overlap: i.eventOverlap,
			allow: i.eventAllow,
			classNames: i.eventClassNames,
			backgroundColor: i.eventBackgroundColor,
			borderColor: i.eventBorderColor,
			textColor: i.eventTextColor,
			color: i.eventColor
		}, r),
		extendedProps: Object.assign(Object.assign({}, a), i.extendedProps)
	};
	if (Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), !n[o.id] && (n[o.id] = o, i.children)) for (let e of i.children) ir(e, o.id, n, r);
	return o;
}
function ar(e) {
	return e.indexOf(nr) === 0 ? "" : e;
}
var Z = class e {
	constructor(e, t) {
		this._context = e, this._resource = t;
	}
	setProp(e, t) {
		let n = this._resource;
		this._context.dispatch({
			type: "SET_RESOURCE_PROP",
			resourceId: n.id,
			propName: e,
			propValue: t
		}), this.sync(n);
	}
	setExtendedProp(e, t) {
		let n = this._resource;
		this._context.dispatch({
			type: "SET_RESOURCE_EXTENDED_PROP",
			resourceId: n.id,
			propName: e,
			propValue: t
		}), this.sync(n);
	}
	sync(t) {
		let n = this._context, r = t.id;
		this._resource = n.getCurrentData().resourceStore[r], n.emitter.trigger("resourceChange", {
			oldResource: new e(n, t),
			resource: this,
			revert() {
				n.dispatch({
					type: "ADD_RESOURCE",
					resourceHash: { [r]: t }
				});
			}
		});
	}
	remove() {
		let e = this._context, t = this._resource, n = t.id;
		e.dispatch({
			type: "REMOVE_RESOURCE",
			resourceId: n
		}), e.emitter.trigger("resourceRemove", {
			resource: this,
			revert() {
				e.dispatch({
					type: "ADD_RESOURCE",
					resourceHash: { [n]: t }
				});
			}
		});
	}
	getParent() {
		let t = this._context, n = this._resource.parentId;
		return n ? new e(t, t.getCurrentData().resourceStore[n]) : null;
	}
	getChildren() {
		let t = this._resource.id, n = this._context, { resourceStore: r } = n.getCurrentData(), i = [];
		for (let a in r) r[a].parentId === t && i.push(new e(n, r[a]));
		return i;
	}
	getEvents() {
		let e = this._resource.id, t = this._context, { defs: n, instances: r } = t.getCurrentData().eventStore, i = [];
		for (let a in r) {
			let o = r[a], s = n[o.defId];
			s.resourceIds.indexOf(e) !== -1 && i.push(new pt(t, s, o));
		}
		return i;
	}
	get id() {
		return ar(this._resource.id);
	}
	get title() {
		return this._resource.title;
	}
	get eventConstraint() {
		return this._resource.ui.constraints[0] || null;
	}
	get eventOverlap() {
		return this._resource.ui.overlap;
	}
	get eventAllow() {
		return this._resource.ui.allows[0] || null;
	}
	get eventBackgroundColor() {
		return this._resource.ui.backgroundColor;
	}
	get eventBorderColor() {
		return this._resource.ui.borderColor;
	}
	get eventTextColor() {
		return this._resource.ui.textColor;
	}
	get eventClassNames() {
		return this._resource.ui.classNames;
	}
	get extendedProps() {
		return this._resource.extendedProps;
	}
	toPlainObject(e = {}) {
		let t = this._resource, { ui: n } = t, r = this.id, i = {};
		return r && (i.id = r), t.title && (i.title = t.title), e.collapseEventColor && n.backgroundColor && n.backgroundColor === n.borderColor ? i.eventColor = n.backgroundColor : (n.backgroundColor && (i.eventBackgroundColor = n.backgroundColor), n.borderColor && (i.eventBorderColor = n.borderColor)), n.textColor && (i.eventTextColor = n.textColor), n.classNames.length && (i.eventClassNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(i, t.extendedProps) : i.extendedProps = t.extendedProps), i;
	}
	toJSON() {
		return this.toPlainObject();
	}
};
function or(e, t) {
	let n = [];
	for (let r in e) n.push(new Z(t, e[r]));
	return n;
}
var sr = class extends re {
	getKeyInfo(e) {
		return Object.assign({ "": {} }, e.resourceStore);
	}
	getKeysForDateSpan(e) {
		return [e.resourceId || ""];
	}
	getKeysForEventDef(e) {
		let t = e.resourceIds;
		return t.length ? t : [""];
	}
}, cr = b("id,title");
function lr(e, t) {
	let { emitter: n } = t;
	n.hasHandlers("resourcesSet") && n.trigger("resourcesSet", or(e, t));
}
function ur(e) {
	return { resource: new Z(e.context, e.resource) };
}
var dr = class extends j {
	constructor() {
		super(...arguments), this.refineRenderProps = S(pr);
	}
	render() {
		let { props: e } = this;
		return B(x.Consumer, null, (t) => {
			let { options: n } = t, r = this.refineRenderProps({
				resource: e.resource,
				date: e.date,
				context: t
			});
			return B(P, {
				elRef: e.elRef,
				elTag: e.elTag,
				elAttrs: Object.assign(Object.assign({}, e.elAttrs), {
					"data-resource-id": e.resource.id,
					"data-date": e.date ? ht(e.date) : void 0
				}),
				elClasses: e.elClasses,
				elStyle: e.elStyle,
				renderProps: r,
				generatorName: "resourceLabelContent",
				customGenerator: n.resourceLabelContent,
				defaultGenerator: fr,
				classNameGenerator: n.resourceLabelClassNames,
				didMount: n.resourceLabelDidMount,
				willUnmount: n.resourceLabelWillUnmount
			}, e.children);
		});
	}
};
function fr(e) {
	return e.resource.title || e.resource.id;
}
function pr(e) {
	return {
		resource: new Z(e.context, e.resource),
		date: e.date ? e.context.dateEnv.toDate(e.date) : null,
		view: e.context.viewApi
	};
}
var mr = class extends j {
	render() {
		let { props: e } = this;
		return B(dr, {
			elTag: "th",
			elClasses: ["fc-col-header-cell", "fc-resource"],
			elAttrs: {
				role: "columnheader",
				colSpan: e.colSpan
			},
			resource: e.resource,
			date: e.date
		}, (t) => B("div", { className: "fc-scrollgrid-sync-inner" }, B(t, {
			elTag: "span",
			elClasses: ["fc-col-header-cell-cushion", e.isSticky && "fc-sticky"]
		})));
	}
}, hr = class extends j {
	constructor() {
		super(...arguments), this.buildDateFormat = w(gr);
	}
	render() {
		let { props: e, context: t } = this, n = this.buildDateFormat(t.options.dayHeaderFormat, e.datesRepDistinctDays, e.dates.length);
		return B(z, { unit: "day" }, (r, i) => e.dates.length === 1 ? this.renderResourceRow(e.resources, e.dates[0]) : t.options.datesAboveResources ? this.renderDayAndResourceRows(e.dates, n, i, e.resources) : this.renderResourceAndDayRows(e.resources, e.dates, n, i));
	}
	renderResourceRow(e, t) {
		let n = e.map((e) => B(mr, {
			key: e.id,
			resource: e,
			colSpan: 1,
			date: t
		}));
		return this.buildTr(n, "resources");
	}
	renderDayAndResourceRows(e, t, n, r) {
		let i = [], a = [];
		for (let o of e) {
			i.push(this.renderDateCell(o, t, n, r.length, null, !0));
			for (let e of r) a.push(B(mr, {
				key: e.id + ":" + o.toISOString(),
				resource: e,
				colSpan: 1,
				date: o
			}));
		}
		return B(V, null, this.buildTr(i, "day"), this.buildTr(a, "resources"));
	}
	renderResourceAndDayRows(e, t, n, r) {
		let i = [], a = [];
		for (let o of e) {
			i.push(B(mr, {
				key: o.id,
				resource: o,
				colSpan: t.length,
				isSticky: !0
			}));
			for (let e of t) a.push(this.renderDateCell(e, n, r, 1, o));
		}
		return B(V, null, this.buildTr(i, "resources"), this.buildTr(a, "day"));
	}
	renderDateCell(e, t, n, r, i, a) {
		let { props: o } = this, s = i ? `:${i.id}` : "", c = i ? { resource: new Z(this.context, i) } : {}, l = i ? { "data-resource-id": i.id } : {};
		return o.datesRepDistinctDays ? B(ce, {
			key: e.toISOString() + s,
			date: e,
			dateProfile: o.dateProfile,
			todayRange: n,
			colCnt: o.dates.length * o.resources.length,
			dayHeaderFormat: t,
			colSpan: r,
			isSticky: a,
			extraRenderProps: c,
			extraDataAttrs: l
		}) : B(u, {
			key: e.getUTCDay() + s,
			dow: e.getUTCDay(),
			dayHeaderFormat: t,
			colSpan: r,
			isSticky: a,
			extraRenderProps: c,
			extraDataAttrs: l
		});
	}
	buildTr(e, t) {
		let { renderIntro: n } = this.props;
		return e.length || (e = [B("td", { key: 0 }, "\xA0")]), B("tr", {
			key: t,
			role: "row"
		}, n && n(t), e);
	}
};
function gr(e, t, n) {
	return e || Pe(t, n);
}
var _r = class {
	constructor(e) {
		let t = {}, n = [];
		for (let r = 0; r < e.length; r += 1) {
			let i = e[r].id;
			n.push(i), t[i] = r;
		}
		this.ids = n, this.indicesById = t, this.length = e.length;
	}
}, vr = class {
	constructor(e, t, n) {
		this.dayTableModel = e, this.resources = t, this.context = n, this.resourceIndex = new _r(t), this.rowCnt = e.rowCnt, this.colCnt = e.colCnt * t.length, this.cells = this.buildCells();
	}
	buildCells() {
		let { rowCnt: e, dayTableModel: t, resources: n } = this, r = [];
		for (let i = 0; i < e; i += 1) {
			let e = [];
			for (let r = 0; r < t.colCnt; r += 1) for (let a = 0; a < n.length; a += 1) {
				let o = n[a], s = { resource: new Z(this.context, o) }, c = { "data-resource-id": o.id }, l = ["fc-resource"], u = { resourceId: o.id }, d = t.cells[i][r].date;
				e[this.computeCol(r, a)] = {
					key: o.id + ":" + d.toISOString(),
					date: d,
					extraRenderProps: s,
					extraDataAttrs: c,
					extraClassNames: l,
					extraDateSpan: u
				};
			}
			r.push(e);
		}
		return r;
	}
}, yr = class extends vr {
	computeCol(e, t) {
		return t * this.dayTableModel.colCnt + e;
	}
	computeColRanges(e, t, n) {
		return [{
			firstCol: this.computeCol(e, n),
			lastCol: this.computeCol(t, n),
			isStart: !0,
			isEnd: !0
		}];
	}
}, br = class extends vr {
	computeCol(e, t) {
		return e * this.resources.length + t;
	}
	computeColRanges(e, t, n) {
		let r = [];
		for (let i = e; i <= t; i += 1) {
			let a = this.computeCol(i, n);
			r.push({
				firstCol: a,
				lastCol: a,
				isStart: i === e,
				isEnd: i === t
			});
		}
		return r;
	}
}, xr = [], Sr = class {
	constructor() {
		this.joinDateSelection = w(this.joinSegs), this.joinBusinessHours = w(this.joinSegs), this.joinFgEvents = w(this.joinSegs), this.joinBgEvents = w(this.joinSegs), this.joinEventDrags = w(this.joinInteractions), this.joinEventResizes = w(this.joinInteractions);
	}
	joinProps(e, t) {
		let n = [], r = [], i = [], a = [], o = [], s = [], c = "", l = t.resourceIndex.ids.concat([""]);
		for (let t of l) {
			let l = e[t];
			n.push(l.dateSelectionSegs), r.push(t ? l.businessHourSegs : xr), i.push(t ? l.fgEventSegs : xr), a.push(l.bgEventSegs), o.push(l.eventDrag), s.push(l.eventResize), c ||= l.eventSelection;
		}
		return {
			dateSelectionSegs: this.joinDateSelection(t, ...n),
			businessHourSegs: this.joinBusinessHours(t, ...r),
			fgEventSegs: this.joinFgEvents(t, ...i),
			bgEventSegs: this.joinBgEvents(t, ...a),
			eventDrag: this.joinEventDrags(t, ...o),
			eventResize: this.joinEventResizes(t, ...s),
			eventSelection: c
		};
	}
	joinSegs(e, ...t) {
		let n = e.resources.length, r = [];
		for (let i = 0; i < n; i += 1) {
			for (let n of t[i]) r.push(...this.transformSeg(n, e, i));
			for (let a of t[n]) r.push(...this.transformSeg(a, e, i));
		}
		return r;
	}
	expandSegs(e, t) {
		let n = e.resources.length, r = [];
		for (let i = 0; i < n; i += 1) for (let n of t) r.push(...this.transformSeg(n, e, i));
		return r;
	}
	joinInteractions(e, ...t) {
		let n = e.resources.length, r = {}, i = [], a = !1, o = !1;
		for (let s = 0; s < n; s += 1) {
			let c = t[s];
			if (c) {
				a = !0;
				for (let t of c.segs) i.push(...this.transformSeg(t, e, s));
				Object.assign(r, c.affectedInstances), o ||= c.isEvent;
			}
			if (t[n]) for (let r of t[n].segs) i.push(...this.transformSeg(r, e, s));
		}
		return a ? {
			affectedInstances: r,
			segs: i,
			isEvent: o
		} : null;
	}
}, Cr = class extends re {
	getKeyInfo(e) {
		let { resourceDayTableModel: t } = e, n = C(t.resourceIndex.indicesById, (e) => t.resources[e]);
		return n[""] = {}, n;
	}
	getKeysForDateSpan(e) {
		return [e.resourceId || ""];
	}
	getKeysForEventDef(e) {
		let t = e.resourceIds;
		return t.length ? t : [""];
	}
};
function wr(e, t) {
	return Tr(e, [], t, !1, {}, !0).map((e) => e.resource);
}
function Tr(e, t, n, r, i, a) {
	let o = Er(e, r ? -1 : 1, t, n), s = [];
	return Q(o, s, r, [], 0, i, a), s;
}
function Q(e, t, n, r, i, a, o) {
	for (let s = 0; s < e.length; s += 1) {
		let c = e[s], l = c.group;
		if (l) if (n) {
			let e = t.length, s = r.length;
			if (Q(c.children, t, n, r.concat(0), i, a, o), e < t.length) {
				let n = t[e], r = n.rowSpans = n.rowSpans.slice();
				r[s] = t.length - e;
			}
		} else {
			let e = l.spec.field + ":" + l.value, s = a[e] == null ? o : a[e];
			t.push({
				id: e,
				group: l,
				isExpanded: s
			}), s && Q(c.children, t, n, r, i + 1, a, o);
		}
		else if (c.resource) {
			let e = c.resource.id, s = a[e] == null ? o : a[e];
			t.push({
				id: e,
				rowSpans: r,
				depth: i,
				isExpanded: s,
				hasChildren: !!c.children.length,
				resource: c.resource,
				resourceFields: c.resourceFields
			}), s && Q(c.children, t, n, r, i + 1, a, o);
		}
	}
}
function Er(e, t, n, r) {
	let i = Dr(e, r), a = [];
	for (let e in i) {
		let o = i[e];
		o.resource.parentId || Or(o, a, n, 0, t, r);
	}
	return a;
}
function Dr(e, t) {
	let n = {};
	for (let t in e) {
		let r = e[t];
		n[t] = {
			resource: r,
			resourceFields: jr(r),
			children: []
		};
	}
	for (let r in e) {
		let i = e[r];
		if (i.parentId) {
			let e = n[i.parentId];
			e && Ar(n[r], e.children, t);
		}
	}
	return n;
}
function Or(e, t, n, r, i, a) {
	n.length && (i === -1 || r <= i) ? Or(e, kr(e, t, n[0]).children, n.slice(1), r + 1, i, a) : Ar(e, t, a);
}
function kr(e, t, n) {
	let r = e.resourceFields[n.field], i, a;
	if (n.order) for (a = 0; a < t.length; a += 1) {
		let e = t[a];
		if (e.group) {
			let t = ne(r, e.group.value) * n.order;
			if (t === 0) {
				i = e;
				break;
			} else if (t < 0) break;
		}
	}
	else for (a = 0; a < t.length; a += 1) {
		let e = t[a];
		if (e.group && r === e.group.value) {
			i = e;
			break;
		}
	}
	return i || (i = {
		group: {
			value: r,
			spec: n
		},
		children: []
	}, t.splice(a, 0, i)), i;
}
function Ar(e, t, n) {
	let r;
	for (r = 0; r < t.length && !(ot(t[r].resourceFields, e.resourceFields, n) > 0); r += 1);
	t.splice(r, 0, e);
}
function jr(e) {
	let t = Object.assign(Object.assign(Object.assign({}, e.extendedProps), e.ui), e);
	return delete t.ui, delete t.extendedProps, t;
}
function Mr(e, t) {
	return e.spec === t.spec && e.value === t.value;
}
//#endregion
//#region node_modules/@fullcalendar/resource/index.js
function Nr(e, t, n) {
	let r = t.dateSpan.resourceId, i = n.dateSpan.resourceId;
	r && i && r !== i && (e.resourceMutation = {
		matchResourceId: r,
		setResourceId: i
	});
}
function Pr(e, t, n) {
	let r = t.resourceMutation;
	if (r && Fr(e, n)) {
		let t = e.resourceIds.indexOf(r.matchResourceId);
		if (t !== -1) {
			let n = e.resourceIds.slice();
			n.splice(t, 1), n.indexOf(r.setResourceId) === -1 && n.push(r.setResourceId), e.resourceIds = n;
		}
	}
}
function Fr(e, t) {
	let { resourceEditable: n } = e;
	if (n == null) {
		let r = e.sourceId && t.getCurrentData().eventSources[e.sourceId];
		r && (n = r.extendedProps.resourceEditable), n ?? (n = t.options.eventResourceEditable, n ??= t.options.editable);
	}
	return n;
}
function Ir(e, t) {
	let { resourceMutation: n } = e;
	if (n) {
		let { calendarApi: e } = t;
		return {
			oldResource: e.getResourceById(n.matchResourceId),
			newResource: e.getResourceById(n.setResourceId)
		};
	}
	return {
		oldResource: null,
		newResource: null
	};
}
var Lr = class {
	constructor() {
		this.filterResources = w(Rr);
	}
	transform(e, t) {
		return t.viewSpec.optionDefaults.needsResourceData ? {
			resourceStore: this.filterResources(t.resourceStore, t.options.filterResourcesWithEvents, t.eventStore, t.dateProfile.activeRange),
			resourceEntityExpansions: t.resourceEntityExpansions
		} : null;
	}
};
function Rr(e, t, n, r) {
	if (t) {
		let t = Br(zr(n.instances, r), n.defs);
		return Object.assign(t, Vr(t, e)), le(e, (e, n) => t[n]);
	}
	return e;
}
function zr(t, n) {
	return le(t, (t) => e(t.range, n));
}
function Br(e, t) {
	let n = {};
	for (let r in e) {
		let i = e[r];
		for (let e of t[i.defId].resourceIds) n[e] = !0;
	}
	return n;
}
function Vr(e, t) {
	let n = {};
	for (let r in e) {
		let e;
		for (; (e = t[r]) && (r = e.parentId, r);) n[r] = !0;
	}
	return n;
}
function Hr(e, t, n, r) {
	if (!e) {
		let e = r.getCurrentData();
		if (e.viewSpecs[e.currentViewType].optionDefaults.needsResourceData && Fr(t, r)) return !0;
	}
	return e;
}
var Ur = class {
	constructor() {
		this.buildResourceEventUis = w(Wr, t), this.injectResourceEventUis = w(Gr);
	}
	transform(e, t) {
		return t.viewSpec.optionDefaults.needsResourceData ? null : { eventUiBases: this.injectResourceEventUis(e.eventUiBases, e.eventStore.defs, this.buildResourceEventUis(t.resourceStore)) };
	}
};
function Wr(e) {
	return C(e, (e) => e.ui);
}
function Gr(e, t, n) {
	return C(e, (e, r) => r ? Kr(e, t[r], n) : e);
}
function Kr(e, t, n) {
	let r = [];
	for (let e of t.resourceIds) n[e] && r.unshift(n[e]);
	return r.unshift(e), Qe(r);
}
var qr = [];
function Jr(e) {
	qr.push(e);
}
function Yr(e) {
	return qr[e];
}
function Xr() {
	return qr;
}
var Zr = {
	id: String,
	resources: A,
	url: String,
	method: String,
	startParam: String,
	endParam: String,
	timeZoneParam: String,
	extraParams: A
};
function Qr(e) {
	let t;
	if (typeof e == "string" ? t = { url: e } : typeof e == "function" || Array.isArray(e) ? t = { resources: e } : typeof e == "object" && e && (t = e), t) {
		let { refined: n, extra: r } = ct(t, Zr);
		ei(r);
		let i = $r(n);
		if (i) return {
			_raw: e,
			sourceId: k(),
			sourceDefId: i.sourceDefId,
			meta: i.meta,
			publicId: n.id || "",
			isFetching: !1,
			latestFetchId: "",
			fetchRange: null
		};
	}
	return null;
}
function $r(e) {
	let t = Xr();
	for (let n = t.length - 1; n >= 0; --n) {
		let r = t[n].parseMeta(e);
		if (r) return {
			meta: r,
			sourceDefId: n
		};
	}
	return null;
}
function ei(e) {
	for (let t in e) console.warn(`Unknown resource prop '${t}'`);
}
function ti(e, t, n) {
	let { options: r, dateProfile: i } = n;
	if (!e || !t) return ni(r.initialResources || r.resources, i.activeRange, r.refetchResourcesOnNavigate, n);
	switch (t.type) {
		case "RESET_RESOURCE_SOURCE": return ni(t.resourceSourceInput, i.activeRange, r.refetchResourcesOnNavigate, n);
		case "PREV":
		case "NEXT":
		case "CHANGE_DATE":
		case "CHANGE_VIEW_TYPE": return ri(e, i.activeRange, r.refetchResourcesOnNavigate, n);
		case "RECEIVE_RESOURCES":
		case "RECEIVE_RESOURCE_ERROR": return oi(e, t.fetchId, t.fetchRange);
		case "REFETCH_RESOURCES": return ai(e, i.activeRange, n);
		default: return e;
	}
}
function ni(e, t, n, r) {
	if (e) {
		let i = Qr(e);
		return i = ai(i, n ? t : null, r), i;
	}
	return null;
}
function ri(e, t, n, r) {
	return n && !ii(e) && (!e.fetchRange || !ue(e.fetchRange, t)) ? ai(e, t, r) : e;
}
function ii(e) {
	return !!Yr(e.sourceDefId).ignoreRange;
}
function ai(e, t, n) {
	let r = Yr(e.sourceDefId), i = k();
	return r.fetch({
		resourceSource: e,
		range: t,
		context: n
	}, (e) => {
		n.dispatch({
			type: "RECEIVE_RESOURCES",
			fetchId: i,
			fetchRange: t,
			rawResources: e.rawResources
		});
	}, (e) => {
		n.dispatch({
			type: "RECEIVE_RESOURCE_ERROR",
			fetchId: i,
			fetchRange: t,
			error: e
		});
	}), Object.assign(Object.assign({}, e), {
		isFetching: !0,
		latestFetchId: i
	});
}
function oi(e, t, n) {
	return t === e.latestFetchId ? Object.assign(Object.assign({}, e), {
		isFetching: !1,
		fetchRange: n
	}) : e;
}
function si(e, t, n, r) {
	if (!e || !t) return {};
	switch (t.type) {
		case "RECEIVE_RESOURCES": return ci(e, t.rawResources, t.fetchId, n, r);
		case "ADD_RESOURCE": return li(e, t.resourceHash);
		case "REMOVE_RESOURCE": return ui(e, t.resourceId);
		case "SET_RESOURCE_PROP": return di(e, t.resourceId, t.propName, t.propValue);
		case "SET_RESOURCE_EXTENDED_PROP": return fi(e, t.resourceId, t.propName, t.propValue);
		default: return e;
	}
}
function ci(e, t, n, r, i) {
	if (r.latestFetchId === n) {
		let e = {};
		for (let n of t) ir(n, "", e, i);
		return e;
	}
	return e;
}
function li(e, t) {
	return Object.assign(Object.assign({}, e), t);
}
function ui(e, t) {
	let n = Object.assign({}, e);
	delete n[t];
	for (let e in n) n[e].parentId === t && (n[e] = Object.assign(Object.assign({}, n[e]), { parentId: "" }));
	return n;
}
function di(e, t, n, r) {
	let i = e[t];
	return i ? Object.assign(Object.assign({}, e), { [t]: Object.assign(Object.assign({}, i), { [n]: r }) }) : e;
}
function fi(e, t, n, r) {
	let i = e[t];
	return i ? Object.assign(Object.assign({}, e), { [t]: Object.assign(Object.assign({}, i), { extendedProps: Object.assign(Object.assign({}, i.extendedProps), { [n]: r }) }) }) : e;
}
function pi(e, t) {
	if (!e || !t) return {};
	switch (t.type) {
		case "SET_RESOURCE_ENTITY_EXPANDED": return Object.assign(Object.assign({}, e), { [t.id]: t.isExpanded });
		default: return e;
	}
}
function mi(e, t, n) {
	let r = ti(e && e.resourceSource, t, n);
	return {
		resourceSource: r,
		resourceStore: si(e && e.resourceStore, t, r, n),
		resourceEntityExpansions: pi(e && e.resourceEntityExpansions, t)
	};
}
var hi = {
	resourceId: String,
	resourceIds: A,
	resourceEditable: Boolean
};
function gi(e) {
	return {
		resourceIds: _i(e.resourceIds).concat(e.resourceId ? [e.resourceId] : []),
		resourceEditable: e.resourceEditable
	};
}
function _i(e) {
	return (e || []).map((e) => String(e));
}
function vi(e, t) {
	let n = e.dateSpan.resourceId, r = t.dateSpan.resourceId;
	return n && r ? { resourceId: n } : null;
}
N.prototype.addResource = function(e, t = !0) {
	let n = this.getCurrentData(), r, i;
	e instanceof Z ? (i = e._resource, r = { [i.id]: i }) : (r = {}, i = ir(e, "", r, n)), this.dispatch({
		type: "ADD_RESOURCE",
		resourceHash: r
	}), t && this.trigger("_scrollRequest", { resourceId: i.id });
	let a = new Z(n, i);
	return n.emitter.trigger("resourceAdd", {
		resource: a,
		revert: () => {
			this.dispatch({
				type: "REMOVE_RESOURCE",
				resourceId: i.id
			});
		}
	}), a;
}, N.prototype.getResourceById = function(e) {
	e = String(e);
	let t = this.getCurrentData();
	if (t.resourceStore) {
		let n = t.resourceStore[e];
		if (n) return new Z(t, n);
	}
	return null;
}, N.prototype.getResources = function() {
	let e = this.getCurrentData(), { resourceStore: t } = e, n = [];
	if (t) for (let r in t) n.push(new Z(e, t[r]));
	return n;
}, N.prototype.getTopLevelResources = function() {
	let e = this.getCurrentData(), { resourceStore: t } = e, n = [];
	if (t) for (let r in t) t[r].parentId || n.push(new Z(e, t[r]));
	return n;
}, N.prototype.refetchResources = function() {
	this.dispatch({ type: "REFETCH_RESOURCES" });
};
function yi(e, t) {
	return e.resourceId ? { resource: t.calendarApi.getResourceById(e.resourceId) } : {};
}
function bi(e, t) {
	return e.resourceId ? { resource: t.calendarApi.getResourceById(e.resourceId) } : {};
}
function xi(e, t) {
	let n = new sr().splitProps(Object.assign(Object.assign({}, e), { resourceStore: t.getCurrentData().resourceStore }));
	for (let e in n) {
		let r = n[e];
		if (e && n[""] && (r = Object.assign(Object.assign({}, r), {
			eventStore: de(n[""].eventStore, r.eventStore),
			eventUiBases: Object.assign(Object.assign({}, n[""].eventUiBases), r.eventUiBases)
		})), !Ve(r, t, { resourceId: e }, Si.bind(null, e))) return !1;
	}
	return !0;
}
function Si(e, t) {
	return Object.assign(Object.assign({}, t), { constraints: Ci(e, t.constraints) });
}
function Ci(e, t) {
	return t.map((t) => {
		let n = t.defs;
		if (n) for (let t in n) {
			let r = n[t].resourceIds;
			if (r.length && r.indexOf(e) === -1) return !1;
		}
		return t;
	});
}
function wi(e) {
	return e.resourceId ? { resourceId: e.resourceId } : {};
}
var Ti = { resources: Ei };
function Ei(e, t) {
	t.getCurrentData().resourceSource._raw !== e && t.dispatch({
		type: "RESET_RESOURCE_SOURCE",
		resourceSourceInput: e
	});
}
var Di = {
	initialResources: A,
	resources: A,
	eventResourceEditable: Boolean,
	refetchResourcesOnNavigate: Boolean,
	resourceOrder: b,
	filterResourcesWithEvents: Boolean,
	resourceGroupField: String,
	resourceAreaWidth: A,
	resourceAreaColumns: A,
	resourcesInitiallyExpanded: Boolean,
	datesAboveResources: Boolean,
	needsResourceData: Boolean,
	resourceAreaHeaderClassNames: A,
	resourceAreaHeaderContent: A,
	resourceAreaHeaderDidMount: A,
	resourceAreaHeaderWillUnmount: A,
	resourceGroupLabelClassNames: A,
	resourceGroupLabelContent: A,
	resourceGroupLabelDidMount: A,
	resourceGroupLabelWillUnmount: A,
	resourceLabelClassNames: A,
	resourceLabelContent: A,
	resourceLabelDidMount: A,
	resourceLabelWillUnmount: A,
	resourceLaneClassNames: A,
	resourceLaneContent: A,
	resourceLaneDidMount: A,
	resourceLaneWillUnmount: A,
	resourceGroupLaneClassNames: A,
	resourceGroupLaneContent: A,
	resourceGroupLaneDidMount: A,
	resourceGroupLaneWillUnmount: A
}, Oi = {
	resourcesSet: A,
	resourceAdd: A,
	resourceChange: A,
	resourceRemove: A
};
pt.prototype.getResources = function() {
	let { calendarApi: e } = this._context;
	return this._def.resourceIds.map((t) => e.getResourceById(t));
}, pt.prototype.setResources = function(e) {
	let t = [];
	for (let n of e) {
		let e = null;
		typeof n == "string" ? e = n : typeof n == "number" ? e = String(n) : n instanceof Z ? e = n.id : console.warn("unknown resource type: " + n), e && t.push(e);
	}
	this.mutate({ standardProps: { resourceIds: t } });
}, Jr({
	ignoreRange: !0,
	parseMeta(e) {
		return Array.isArray(e.resources) ? e.resources : null;
	},
	fetch(e, t) {
		t({ rawResources: e.resourceSource.meta });
	}
}), Jr({
	parseMeta(e) {
		return typeof e.resources == "function" ? e.resources : null;
	},
	fetch(e, t, n) {
		let r = e.context.dateEnv, i = e.resourceSource.meta, a = e.range ? {
			start: r.toDate(e.range.start),
			end: r.toDate(e.range.end),
			startStr: r.formatIso(e.range.start),
			endStr: r.formatIso(e.range.end),
			timeZone: r.timeZone
		} : {};
		Fe(i.bind(null, a), (e) => t({ rawResources: e }), n);
	}
}), Jr({
	parseMeta(e) {
		return e.url ? {
			url: e.url,
			method: (e.method || "GET").toUpperCase(),
			extraParams: e.extraParams
		} : null;
	},
	fetch(e, t, n) {
		let r = e.resourceSource.meta, i = ki(r, e.range, e.context);
		ke(r.method, r.url, i).then(([e, n]) => {
			t({
				rawResources: e,
				response: n
			});
		}, n);
	}
});
function ki(e, t, n) {
	let { dateEnv: r, options: i } = n, a, o, s, c, l = {};
	return t && (a = e.startParam, a ??= i.startParam, o = e.endParam, o ??= i.endParam, s = e.timeZoneParam, s ??= i.timeZoneParam, l[a] = r.formatIso(t.start), l[o] = r.formatIso(t.end), r.timeZone !== "local" && (l[s] = r.timeZone)), c = typeof e.extraParams == "function" ? e.extraParams() : e.extraParams || {}, Object.assign(l, c), l;
}
var $ = M({
	name: "@fullcalendar/resource",
	premiumReleaseDate: "2026-06-18",
	deps: [U],
	reducers: [mi],
	isLoadingFuncs: [(e) => e.resourceSource && e.resourceSource.isFetching],
	eventRefiners: hi,
	eventDefMemberAdders: [gi],
	isDraggableTransformers: [Hr],
	eventDragMutationMassagers: [Nr],
	eventDefMutationAppliers: [Pr],
	dateSelectionTransformers: [vi],
	datePointTransforms: [yi],
	dateSpanTransforms: [bi],
	viewPropsTransformers: [Lr, Ur],
	isPropsValid: xi,
	externalDefTransforms: [wi],
	eventDropTransformers: [Ir],
	optionChangeHandlers: Ti,
	optionRefiners: Di,
	listenerRefiners: Oi,
	propSetHandlers: { resourceStore: lr }
}), Ai = class extends Sr {
	transformSeg(e, t, n) {
		return t.computeColRanges(e.firstCol, e.lastCol, n).map((t) => Object.assign(Object.assign(Object.assign({}, e), t), {
			isStart: e.isStart && t.isStart,
			isEnd: e.isEnd && t.isEnd
		}));
	}
}, ji = class extends O {
	constructor() {
		super(...arguments), this.splitter = new Cr(), this.slicers = {}, this.joiner = new Ai(), this.tableRef = D(), this.isHitComboAllowed = (e, t) => this.props.resourceDayTableModel.dayTableModel.colCnt === 1 || e.dateSpan.resourceId === t.dateSpan.resourceId;
	}
	render() {
		let { props: e, context: t } = this, { resourceDayTableModel: n, nextDayThreshold: r, dateProfile: i } = e, a = this.splitter.splitProps(e);
		this.slicers = C(a, (e, t) => this.slicers[t] || new yt());
		let o = C(this.slicers, (e, o) => e.sliceProps(a[o], i, r, t, n.dayTableModel));
		return B(Dt, Object.assign({
			forPrint: e.forPrint,
			ref: this.tableRef
		}, this.joiner.joinProps(o, n), {
			cells: n.cells,
			dateProfile: i,
			colGroupNode: e.colGroupNode,
			tableMinWidth: e.tableMinWidth,
			renderRowIntro: e.renderRowIntro,
			dayMaxEvents: e.dayMaxEvents,
			dayMaxEventRows: e.dayMaxEventRows,
			showWeekNumbers: e.showWeekNumbers,
			expandRows: e.expandRows,
			headerAlignElRef: e.headerAlignElRef,
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight,
			isHitComboAllowed: this.isHitComboAllowed
		}));
	}
}, Mi = class extends Ct {
	constructor() {
		super(...arguments), this.flattenResources = w(wr), this.buildResourceDayTableModel = w(Ni), this.headerRef = D(), this.tableRef = D();
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = n.resourceOrder || cr, i = this.flattenResources(e.resourceStore, r), a = this.buildResourceDayTableModel(e.dateProfile, t.dateProfileGenerator, i, n.datesAboveResources, t), o = n.dayHeaders && B(hr, {
			ref: this.headerRef,
			resources: i,
			dateProfile: e.dateProfile,
			dates: a.dayTableModel.headerDates,
			datesRepDistinctDays: !0
		}), s = (t) => B(ji, {
			ref: this.tableRef,
			dateProfile: e.dateProfile,
			resourceDayTableModel: a,
			businessHours: e.businessHours,
			eventStore: e.eventStore,
			eventUiBases: e.eventUiBases,
			dateSelection: e.dateSelection,
			eventSelection: e.eventSelection,
			eventDrag: e.eventDrag,
			eventResize: e.eventResize,
			nextDayThreshold: n.nextDayThreshold,
			tableMinWidth: t.tableMinWidth,
			colGroupNode: t.tableColGroupNode,
			dayMaxEvents: n.dayMaxEvents,
			dayMaxEventRows: n.dayMaxEventRows,
			showWeekNumbers: n.weekNumbers,
			expandRows: !e.isHeightAuto,
			headerAlignElRef: this.headerElRef,
			clientWidth: t.clientWidth,
			clientHeight: t.clientHeight,
			forPrint: e.forPrint
		});
		return n.dayMinWidth ? this.renderHScrollLayout(o, s, a.colCnt, n.dayMinWidth) : this.renderSimpleLayout(o, s);
	}
};
function Ni(e, t, n, r, i) {
	let a = bt(e, t);
	return r ? new br(a, n, i) : new yr(a, n, i);
}
//#endregion
//#region node_modules/@fullcalendar/resource-daygrid/index.js
var Pi = M({
	name: "@fullcalendar/resource-daygrid",
	premiumReleaseDate: "2026-06-18",
	deps: [
		U,
		$,
		_t
	],
	initialView: "resourceDayGridDay",
	views: {
		resourceDayGrid: {
			type: "dayGrid",
			component: Mi,
			needsResourceData: !0
		},
		resourceDayGridDay: {
			type: "resourceDayGrid",
			duration: { days: 1 }
		},
		resourceDayGridWeek: {
			type: "resourceDayGrid",
			duration: { weeks: 1 }
		},
		resourceDayGridMonth: {
			type: "resourceDayGrid",
			duration: { months: 1 },
			fixedWeekCount: !0
		}
	}
});
//#endregion
//#region node_modules/@fullcalendar/resource-timeline/internal.js
function Fi({ depth: e, hasChildren: t, isExpanded: n, onExpanderClick: r }) {
	let i = [];
	for (let t = 0; t < e; t += 1) i.push(B("span", { className: "fc-icon" }));
	let a = ["fc-icon"];
	return t && (n ? a.push("fc-icon-minus-square") : a.push("fc-icon-plus-square")), i.push(B("span", {
		className: "fc-datagrid-expander" + (t ? "" : " fc-datagrid-expander-placeholder"),
		onClick: r
	}, B("span", { className: a.join(" ") }))), B(V, {}, ...i);
}
var Ii = class extends j {
	constructor() {
		super(...arguments), this.refineRenderProps = S(Ri), this.onExpanderClick = (e) => {
			let { props: t } = this;
			t.hasChildren && this.context.dispatch({
				type: "SET_RESOURCE_ENTITY_EXPANDED",
				id: t.resource.id,
				isExpanded: !t.isExpanded
			});
		};
	}
	render() {
		let { props: e, context: t } = this, { colSpec: n } = e, r = this.refineRenderProps({
			resource: e.resource,
			fieldValue: e.fieldValue,
			context: t
		});
		return B(P, {
			elTag: "td",
			elClasses: ["fc-datagrid-cell", "fc-resource"],
			elAttrs: {
				role: "gridcell",
				"data-resource-id": e.resource.id
			},
			renderProps: r,
			generatorName: n.isMain ? "resourceLabelContent" : void 0,
			customGenerator: n.cellContent,
			defaultGenerator: Li,
			classNameGenerator: n.cellClassNames,
			didMount: n.cellDidMount,
			willUnmount: n.cellWillUnmount
		}, (t) => B("div", {
			className: "fc-datagrid-cell-frame",
			style: { height: e.innerHeight }
		}, B("div", { className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner" }, n.isMain && B(Fi, {
			depth: e.depth,
			hasChildren: e.hasChildren,
			isExpanded: e.isExpanded,
			onExpanderClick: this.onExpanderClick
		}), B(t, {
			elTag: "span",
			elClasses: ["fc-datagrid-cell-main"]
		}))));
	}
};
function Li(e) {
	return e.fieldValue || B(V, null, "\xA0");
}
function Ri(e) {
	return {
		resource: new Z(e.context, e.resource),
		fieldValue: e.fieldValue,
		view: e.context.viewApi
	};
}
var zi = class extends j {
	render() {
		let { props: e, context: t } = this, { colSpec: n } = e, r = {
			groupValue: e.fieldValue,
			view: t.viewApi
		};
		return B(P, {
			elTag: "td",
			elClasses: ["fc-datagrid-cell", "fc-resource-group"],
			elAttrs: {
				role: "gridcell",
				rowSpan: e.rowSpan
			},
			renderProps: r,
			generatorName: "resourceGroupLabelContent",
			customGenerator: n.cellContent,
			defaultGenerator: Bi,
			classNameGenerator: n.cellClassNames,
			didMount: n.cellDidMount,
			willUnmount: n.cellWillUnmount
		}, (e) => B("div", { className: "fc-datagrid-cell-frame fc-datagrid-cell-frame-liquid" }, B(e, {
			elTag: "div",
			elClasses: ["fc-datagrid-cell-cushion", "fc-sticky"]
		})));
	}
};
function Bi(e) {
	return e.groupValue || B(V, null, "\xA0");
}
var Vi = class extends j {
	render() {
		let { props: e } = this, { resource: t, rowSpans: n, depth: r } = e, i = jr(t);
		return B("tr", { role: "row" }, e.colSpecs.map((a, o) => {
			let s = n[o];
			if (s === 0) return null;
			s ??= 1;
			let c = a.field ? i[a.field] : t.title || ar(t.id);
			return s > 1 ? B(zi, {
				key: o,
				colSpec: a,
				fieldValue: c,
				rowSpan: s
			}) : B(Ii, {
				key: o,
				colSpec: a,
				resource: t,
				fieldValue: c,
				depth: r,
				hasChildren: e.hasChildren,
				isExpanded: e.isExpanded,
				innerHeight: e.innerHeight
			});
		}));
	}
};
Vi.addPropsEquality({ rowSpans: o });
var Hi = class extends j {
	constructor() {
		super(...arguments), this.innerInnerRef = D(), this.onExpanderClick = () => {
			let { props: e } = this;
			this.context.dispatch({
				type: "SET_RESOURCE_ENTITY_EXPANDED",
				id: e.id,
				isExpanded: !e.isExpanded
			});
		};
	}
	render() {
		let { props: e, context: t } = this, n = {
			groupValue: e.group.value,
			view: t.viewApi
		}, r = e.group.spec;
		return B("tr", { role: "row" }, B(P, {
			elTag: "th",
			elClasses: [
				"fc-datagrid-cell",
				"fc-resource-group",
				t.theme.getClass("tableCellShaded")
			],
			elAttrs: {
				role: "columnheader",
				scope: "colgroup",
				colSpan: e.spreadsheetColCnt
			},
			renderProps: n,
			generatorName: "resourceGroupLabelContent",
			customGenerator: r.labelContent,
			defaultGenerator: Ui,
			classNameGenerator: r.labelClassNames,
			didMount: r.labelDidMount,
			willUnmount: r.labelWillUnmount
		}, (t) => B("div", {
			className: "fc-datagrid-cell-frame",
			style: { height: e.innerHeight }
		}, B("div", {
			className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",
			ref: this.innerInnerRef
		}, B(Fi, {
			depth: 0,
			hasChildren: !0,
			isExpanded: e.isExpanded,
			onExpanderClick: this.onExpanderClick
		}), B(t, {
			elTag: "span",
			elClasses: ["fc-datagrid-cell-main"]
		})))));
	}
};
Hi.addPropsEquality({ group: Mr });
function Ui(e) {
	return e.groupValue || B(V, null, "\xA0");
}
var Wi = 20, Gi = class extends j {
	constructor() {
		super(...arguments), this.resizerElRefs = new l(this._handleColResizerEl.bind(this)), this.colDraggings = {};
	}
	render() {
		let { colSpecs: e, superHeaderRendering: t, rowInnerHeights: n } = this.props, r = { view: this.context.viewApi }, i = [];
		if (n = n.slice(), t) {
			let a = n.shift();
			i.push(B("tr", {
				key: "row-super",
				role: "row"
			}, B(P, {
				elTag: "th",
				elClasses: ["fc-datagrid-cell", "fc-datagrid-cell-super"],
				elAttrs: {
					role: "columnheader",
					scope: "colgroup",
					colSpan: e.length
				},
				renderProps: r,
				generatorName: "resourceAreaHeaderContent",
				customGenerator: t.headerContent,
				defaultGenerator: t.headerDefault,
				classNameGenerator: t.headerClassNames,
				didMount: t.headerDidMount,
				willUnmount: t.headerWillUnmount
			}, (e) => B("div", {
				className: "fc-datagrid-cell-frame",
				style: { height: a }
			}, B(e, {
				elTag: "div",
				elClasses: ["fc-datagrid-cell-cushion", "fc-scrollgrid-sync-inner"]
			})))));
		}
		let a = n.shift();
		return i.push(B("tr", {
			key: "row",
			role: "row"
		}, e.map((t, n) => {
			let i = n === e.length - 1;
			return B(P, {
				key: n,
				elTag: "th",
				elClasses: ["fc-datagrid-cell"],
				elAttrs: { role: "columnheader" },
				renderProps: r,
				generatorName: "resourceAreaHeaderContent",
				customGenerator: t.headerContent,
				defaultGenerator: t.headerDefault,
				classNameGenerator: t.headerClassNames,
				didMount: t.headerDidMount,
				willUnmount: t.headerWillUnmount
			}, (e) => B("div", {
				className: "fc-datagrid-cell-frame",
				style: { height: a }
			}, B("div", { className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner" }, t.isMain && B("span", { className: "fc-datagrid-expander fc-datagrid-expander-placeholder" }, B("span", { className: "fc-icon" })), B(e, {
				elTag: "span",
				elClasses: ["fc-datagrid-cell-main"]
			})), !i && B("div", {
				className: "fc-datagrid-cell-resizer",
				ref: this.resizerElRefs.createRef(n)
			})));
		}))), B(V, null, i);
	}
	_handleColResizerEl(e, t) {
		let { colDraggings: n } = this;
		if (e) {
			let r = this.initColResizing(e, parseInt(t, 10));
			r && (n[t] = r);
		} else {
			let e = n[t];
			e && (e.destroy(), delete n[t]);
		}
	}
	initColResizing(e, t) {
		let { pluginHooks: r, isRtl: i } = this.context, { onColWidthChange: a } = this.props, o = r.elementDraggingImpl;
		if (o) {
			let r = new o(e), s, c;
			return r.emitter.on("dragstart", () => {
				c = y(n(e, "tr"), "th").map((e) => e.getBoundingClientRect().width), s = c[t];
			}), r.emitter.on("dragmove", (e) => {
				c[t] = Math.max(s + e.deltaX * (i ? -1 : 1), Wi), a && a(c.slice());
			}), r.setAutoScrollEnabled(!1), r;
		}
		return null;
	}
}, Ki = class extends j {
	constructor() {
		super(...arguments), this.refineRenderProps = S(ur), this.handleHeightChange = (e, t) => {
			this.props.onHeightChange && this.props.onHeightChange(n(e, "tr"), t);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = this.refineRenderProps({
			resource: e.resource,
			context: t
		});
		return B("tr", { ref: e.elRef }, B(P, {
			elTag: "td",
			elClasses: ["fc-timeline-lane", "fc-resource"],
			elAttrs: { "data-resource-id": e.resource.id },
			renderProps: r,
			generatorName: "resourceLaneContent",
			customGenerator: n.resourceLaneContent,
			classNameGenerator: n.resourceLaneClassNames,
			didMount: n.resourceLaneDidMount,
			willUnmount: n.resourceLaneWillUnmount
		}, (t) => B("div", {
			className: "fc-timeline-lane-frame",
			style: { height: e.innerHeight }
		}, B(t, {
			elTag: "div",
			elClasses: ["fc-timeline-lane-misc"]
		}), B(Y, {
			dateProfile: e.dateProfile,
			tDateProfile: e.tDateProfile,
			nowDate: e.nowDate,
			todayRange: e.todayRange,
			nextDayThreshold: e.nextDayThreshold,
			businessHours: e.businessHours,
			eventStore: e.eventStore,
			eventUiBases: e.eventUiBases,
			dateSelection: e.dateSelection,
			eventSelection: e.eventSelection,
			eventDrag: e.eventDrag,
			eventResize: e.eventResize,
			timelineCoords: e.timelineCoords,
			onHeightChange: this.handleHeightChange,
			resourceId: e.resource.id
		}))));
	}
}, qi = class extends j {
	render() {
		let { props: e, context: t } = this, { renderHooks: n } = e, r = {
			groupValue: e.groupValue,
			view: t.viewApi
		};
		return B("tr", { ref: e.elRef }, B(P, {
			elTag: "td",
			elRef: e.elRef,
			elClasses: [
				"fc-timeline-lane",
				"fc-resource-group",
				t.theme.getClass("tableCellShaded")
			],
			renderProps: r,
			generatorName: "resourceGroupLaneContent",
			customGenerator: n.laneContent,
			classNameGenerator: n.laneClassNames,
			didMount: n.laneDidMount,
			willUnmount: n.laneWillUnmount
		}, (t) => B(t, {
			elTag: "div",
			elStyle: { height: e.innerHeight }
		})));
	}
}, Ji = class extends j {
	render() {
		let { props: e, context: t } = this, { rowElRefs: n, innerHeights: r } = e;
		return B("tbody", null, e.rowNodes.map((i, a) => {
			if (i.group) return B(qi, {
				key: i.id,
				elRef: n.createRef(i.id),
				groupValue: i.group.value,
				renderHooks: i.group.spec,
				innerHeight: r[a] || ""
			});
			if (i.resource) {
				let o = i.resource;
				return B(Ki, Object.assign({
					key: i.id,
					elRef: n.createRef(i.id)
				}, e.splitProps[o.id], {
					resource: o,
					dateProfile: e.dateProfile,
					tDateProfile: e.tDateProfile,
					nowDate: e.nowDate,
					todayRange: e.todayRange,
					nextDayThreshold: t.options.nextDayThreshold,
					businessHours: o.businessHours || e.fallbackBusinessHours,
					innerHeight: r[a] || "",
					timelineCoords: e.slatCoords,
					onHeightChange: e.onRowHeightChange
				}));
			}
			return null;
		}));
	}
}, Yi = class extends j {
	constructor() {
		super(...arguments), this.rootElRef = D(), this.rowElRefs = new l();
	}
	render() {
		let { props: e, context: t } = this;
		return B("table", {
			ref: this.rootElRef,
			"aria-hidden": !0,
			className: "fc-scrollgrid-sync-table " + t.theme.getClass("table"),
			style: {
				minWidth: e.tableMinWidth,
				width: e.clientWidth,
				height: e.minHeight
			}
		}, B(Ji, {
			rowElRefs: this.rowElRefs,
			rowNodes: e.rowNodes,
			dateProfile: e.dateProfile,
			tDateProfile: e.tDateProfile,
			nowDate: e.nowDate,
			todayRange: e.todayRange,
			splitProps: e.splitProps,
			fallbackBusinessHours: e.fallbackBusinessHours,
			slatCoords: e.slatCoords,
			innerHeights: e.innerHeights,
			onRowHeightChange: e.onRowHeightChange
		}));
	}
	componentDidMount() {
		this.updateCoords();
	}
	componentDidUpdate() {
		this.updateCoords();
	}
	componentWillUnmount() {
		this.props.onRowCoords && this.props.onRowCoords(null);
	}
	updateCoords() {
		let { props: e } = this;
		e.onRowCoords && e.clientWidth !== null && this.props.onRowCoords(new me(this.rootElRef.current, Xi(this.rowElRefs.currentMap, e.rowNodes), !1, !0));
	}
};
function Xi(e, t) {
	return t.map((t) => e[t.id]);
}
var Zi = class extends O {
	constructor() {
		super(...arguments), this.computeHasResourceBusinessHours = w(Qi), this.resourceSplitter = new sr(), this.bgSlicer = new In(), this.slatsRef = D(), this.state = { slatCoords: null }, this.handleEl = (e) => {
			e ? this.context.registerInteractiveComponent(this, { el: e }) : this.context.unregisterInteractiveComponent(this);
		}, this.handleSlatCoords = (e) => {
			this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
		}, this.handleRowCoords = (e) => {
			this.rowCoords = e, this.props.onRowCoords && this.props.onRowCoords(e);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { dateProfile: r, tDateProfile: i } = e, { unit: o, value: s } = I(i.slotDuration), c = this.computeHasResourceBusinessHours(e.rowNodes), l = this.resourceSplitter.splitProps(e), u = l[""], d = this.bgSlicer.sliceProps(u, r, i.isTimeScale ? null : e.nextDayThreshold, n, r, n.dateProfileGenerator, i, n.dateEnv), f = t.slatCoords && t.slatCoords.dateProfile === e.dateProfile ? t.slatCoords : null;
		return B("div", {
			ref: this.handleEl,
			className: ["fc-timeline-body", e.expandRows ? "fc-timeline-body-expandrows" : ""].join(" "),
			style: { minWidth: e.tableMinWidth }
		}, B(z, {
			unit: o,
			unitValue: s
		}, (t, o) => B(V, null, B(jn, {
			ref: this.slatsRef,
			dateProfile: r,
			tDateProfile: i,
			nowDate: t,
			todayRange: o,
			clientWidth: e.clientWidth,
			tableColGroupNode: e.tableColGroupNode,
			tableMinWidth: e.tableMinWidth,
			onCoords: this.handleSlatCoords,
			onScrollLeftRequest: e.onScrollLeftRequest
		}), B(Fn, {
			businessHourSegs: c ? null : d.businessHourSegs,
			bgEventSegs: d.bgEventSegs,
			timelineCoords: f,
			eventResizeSegs: d.eventResize ? d.eventResize.segs : [],
			dateSelectionSegs: d.dateSelectionSegs,
			nowDate: t,
			todayRange: o
		}), B(Yi, {
			rowNodes: e.rowNodes,
			dateProfile: r,
			tDateProfile: e.tDateProfile,
			nowDate: t,
			todayRange: o,
			splitProps: l,
			fallbackBusinessHours: c ? e.businessHours : null,
			clientWidth: e.clientWidth,
			minHeight: e.expandRows ? e.clientHeight : "",
			tableMinWidth: e.tableMinWidth,
			innerHeights: e.rowInnerHeights,
			slatCoords: f,
			onRowCoords: this.handleRowCoords,
			onRowHeightChange: e.onRowHeightChange
		}), n.options.nowIndicator && f && f.isDateInRange(t) && B("div", { className: "fc-timeline-now-indicator-container" }, B(a, {
			elClasses: ["fc-timeline-now-indicator-line"],
			elStyle: En(f.dateToCoord(t), n.isRtl),
			isAxis: !1,
			date: t
		})))));
	}
	queryHit(e, t) {
		let n = this.rowCoords, r = n.topToIndex(t);
		if (r != null) {
			let t = this.props.rowNodes[r].resource;
			if (t) {
				let i = this.slatsRef.current.positionToHit(e);
				if (i) return {
					dateProfile: this.props.dateProfile,
					dateSpan: {
						range: i.dateSpan.range,
						allDay: i.dateSpan.allDay,
						resourceId: t.id
					},
					rect: {
						left: i.left,
						right: i.right,
						top: n.tops[r],
						bottom: n.bottoms[r]
					},
					dayEl: i.dayEl,
					layer: 0
				};
			}
		}
		return null;
	}
};
function Qi(e) {
	for (let t of e) {
		let e = t.resource;
		if (e && e.businessHours) return !0;
	}
	return !1;
}
var $i = 30, ea = class extends j {
	constructor() {
		super(...arguments), this.scrollGridRef = D(), this.timeBodyScrollerElRef = D(), this.spreadsheetHeaderChunkElRef = D(), this.rootElRef = D(), this.ensureScrollGridResizeId = 0, this.state = { resourceAreaWidthOverride: null }, this.ensureScrollGridResize = () => {
			this.ensureScrollGridResizeId && clearTimeout(this.ensureScrollGridResizeId), this.ensureScrollGridResizeId = setTimeout(() => {
				this.scrollGridRef.current.handleSizing(!1);
			}, E.SCROLLGRID_RESIZE_INTERVAL + 1);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, i = !e.forPrint && Oe(r), a = !e.forPrint && at(r), o = [{
			type: "header",
			key: "header",
			syncRowHeights: !0,
			isSticky: i,
			chunks: [
				{
					key: "datagrid",
					elRef: this.spreadsheetHeaderChunkElRef,
					tableClassName: "fc-datagrid-header",
					rowContent: e.spreadsheetHeaderRows
				},
				{
					key: "divider",
					outerContent: B("td", {
						role: "presentation",
						className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
					})
				},
				{
					key: "timeline",
					content: e.timeHeaderContent
				}
			]
		}, {
			type: "body",
			key: "body",
			syncRowHeights: !0,
			liquid: !0,
			expandRows: !!r.expandRows,
			chunks: [
				{
					key: "datagrid",
					tableClassName: "fc-datagrid-body",
					rowContent: e.spreadsheetBodyRows
				},
				{
					key: "divider",
					outerContent: B("td", {
						role: "presentation",
						className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
					})
				},
				{
					key: "timeline",
					scrollerElRef: this.timeBodyScrollerElRef,
					content: e.timeBodyContent
				}
			]
		}];
		a && o.push({
			type: "footer",
			key: "footer",
			isSticky: !0,
			chunks: [
				{
					key: "datagrid",
					content: F
				},
				{
					key: "divider",
					outerContent: B("td", {
						role: "presentation",
						className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
					})
				},
				{
					key: "timeline",
					content: F
				}
			]
		});
		let s = t.resourceAreaWidthOverride == null ? r.resourceAreaWidth : t.resourceAreaWidthOverride;
		return B(W, {
			ref: this.scrollGridRef,
			elRef: this.rootElRef,
			liquid: !e.isHeightAuto && !e.forPrint,
			forPrint: e.forPrint,
			collapsibleWidth: !1,
			colGroups: [
				{
					cols: e.spreadsheetCols,
					width: s
				},
				{ cols: [] },
				{ cols: e.timeCols }
			],
			sections: o
		});
	}
	forceTimeScroll(e) {
		this.scrollGridRef.current.forceScrollLeft(2, e);
	}
	forceResourceScroll(e) {
		this.scrollGridRef.current.forceScrollTop(1, e);
	}
	getResourceScroll() {
		return this.timeBodyScrollerElRef.current.scrollTop;
	}
	componentDidMount() {
		this.initSpreadsheetResizing();
	}
	componentWillUnmount() {
		this.destroySpreadsheetResizing();
	}
	initSpreadsheetResizing() {
		let { isRtl: e, pluginHooks: t } = this.context, n = t.elementDraggingImpl, r = this.spreadsheetHeaderChunkElRef.current;
		if (n) {
			let t = this.rootElRef.current, i = this.spreadsheetResizerDragging = new n(t, ".fc-resource-timeline-divider"), a, o;
			i.emitter.on("dragstart", () => {
				a = r.getBoundingClientRect().width, o = t.getBoundingClientRect().width;
			}), i.emitter.on("dragmove", (t) => {
				let n = a + t.deltaX * (e ? -1 : 1);
				n = Math.max(n, $i), n = Math.min(n, o - $i), this.setState({ resourceAreaWidthOverride: n }, this.ensureScrollGridResize);
			}), i.setAutoScrollEnabled(!1);
		}
	}
	destroySpreadsheetResizing() {
		this.spreadsheetResizerDragging && this.spreadsheetResizerDragging.destroy();
	}
}, ta = class extends j {
	constructor(e, t) {
		super(e, t), this.processColOptions = w(aa), this.buildTimelineDateProfile = w(ln), this.hasNesting = w(ia), this.buildRowNodes = w(Tr), this.layoutRef = D(), this.rowNodes = [], this.renderedRowNodes = [], this.buildRowIndex = w(na), this.handleSlatCoords = (e) => {
			this.setState({ slatCoords: e });
		}, this.handleRowCoords = (e) => {
			this.rowCoords = e, this.scrollResponder.update(!1);
		}, this.handleMaxCushionWidth = (e) => {
			this.setState({ slotCushionMaxWidth: Math.ceil(e) });
		}, this.handleScrollLeftRequest = (e) => {
			this.layoutRef.current.forceTimeScroll(e);
		}, this.handleScrollRequest = (e) => {
			let { rowCoords: t } = this, n = this.layoutRef.current, r = e.rowId || e.resourceId;
			if (t) {
				if (r) {
					let i = this.buildRowIndex(this.renderedRowNodes)[r];
					if (i != null) {
						let r = e.fromBottom == null ? t.tops[i] : t.bottoms[i] - e.fromBottom;
						n.forceResourceScroll(r);
					}
				}
				return !0;
			}
			return null;
		}, this.handleColWidthChange = (e) => {
			this.setState({ spreadsheetColWidths: e });
		}, this.state = {
			resourceAreaWidth: t.options.resourceAreaWidth,
			spreadsheetColWidths: []
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r, viewSpec: i } = n, { superHeaderRendering: a, groupSpecs: o, orderSpecs: s, isVGrouping: c, colSpecs: l } = this.processColOptions(n.options), u = this.buildTimelineDateProfile(e.dateProfile, n.dateEnv, r, n.dateProfileGenerator), d = this.rowNodes = this.buildRowNodes(e.resourceStore, o, s, c, e.resourceEntityExpansions, r.resourcesInitiallyExpanded), { slotMinWidth: f } = r, p = Wn(u, f || this.computeFallbackSlotMinWidth(u));
		return B(_, {
			elClasses: [
				"fc-resource-timeline",
				!this.hasNesting(d) && "fc-resource-timeline-flat",
				"fc-timeline",
				r.eventOverlap === !1 ? "fc-timeline-overlap-disabled" : "fc-timeline-overlap-enabled"
			],
			viewSpec: i
		}, B(ea, {
			ref: this.layoutRef,
			forPrint: e.forPrint,
			isHeightAuto: e.isHeightAuto,
			spreadsheetCols: ra(l, t.spreadsheetColWidths, ""),
			spreadsheetHeaderRows: (e) => B(Gi, {
				superHeaderRendering: a,
				colSpecs: l,
				onColWidthChange: this.handleColWidthChange,
				rowInnerHeights: e.rowSyncHeights
			}),
			spreadsheetBodyRows: (e) => B(V, null, this.renderSpreadsheetRows(d, l, e.rowSyncHeights)),
			timeCols: p,
			timeHeaderContent: (n) => B(On, {
				clientWidth: n.clientWidth,
				clientHeight: n.clientHeight,
				tableMinWidth: n.tableMinWidth,
				tableColGroupNode: n.tableColGroupNode,
				dateProfile: e.dateProfile,
				tDateProfile: u,
				slatCoords: t.slatCoords,
				rowInnerHeights: n.rowSyncHeights,
				onMaxCushionWidth: f ? null : this.handleMaxCushionWidth
			}),
			timeBodyContent: (t) => B(Zi, {
				dateProfile: e.dateProfile,
				clientWidth: t.clientWidth,
				clientHeight: t.clientHeight,
				tableMinWidth: t.tableMinWidth,
				tableColGroupNode: t.tableColGroupNode,
				expandRows: t.expandRows,
				tDateProfile: u,
				rowNodes: d,
				businessHours: e.businessHours,
				dateSelection: e.dateSelection,
				eventStore: e.eventStore,
				eventUiBases: e.eventUiBases,
				eventSelection: e.eventSelection,
				eventDrag: e.eventDrag,
				eventResize: e.eventResize,
				resourceStore: e.resourceStore,
				nextDayThreshold: n.options.nextDayThreshold,
				rowInnerHeights: t.rowSyncHeights,
				onSlatCoords: this.handleSlatCoords,
				onRowCoords: this.handleRowCoords,
				onScrollLeftRequest: this.handleScrollLeftRequest,
				onRowHeightChange: t.reportRowHeightChange
			})
		}));
	}
	renderSpreadsheetRows(e, t, n) {
		return e.map((e, r) => e.group ? B(Hi, {
			key: e.id,
			id: e.id,
			spreadsheetColCnt: t.length,
			isExpanded: e.isExpanded,
			group: e.group,
			innerHeight: n[r] || ""
		}) : e.resource ? B(Vi, {
			key: e.id,
			colSpecs: t,
			rowSpans: e.rowSpans,
			depth: e.depth,
			isExpanded: e.isExpanded,
			hasChildren: e.hasChildren,
			resource: e.resource,
			innerHeight: n[r] || ""
		}) : null);
	}
	componentDidMount() {
		this.renderedRowNodes = this.rowNodes, this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
	}
	getSnapshotBeforeUpdate() {
		return this.props.forPrint ? {} : { resourceScroll: this.queryResourceScroll() };
	}
	componentDidUpdate(e, t, n) {
		this.renderedRowNodes = this.rowNodes, this.scrollResponder.update(e.dateProfile !== this.props.dateProfile), n.resourceScroll && this.handleScrollRequest(n.resourceScroll);
	}
	componentWillUnmount() {
		this.scrollResponder.detach();
	}
	computeFallbackSlotMinWidth(e) {
		return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel);
	}
	queryResourceScroll() {
		let { rowCoords: e, renderedRowNodes: t } = this;
		if (e) {
			let n = this.layoutRef.current, r = e.bottoms, i = n.getResourceScroll(), a = {};
			for (let e = 0; e < r.length; e += 1) {
				let n = t[e], o = r[e] - i;
				if (o > 0) {
					a.rowId = n.id, a.fromBottom = o;
					break;
				}
			}
			return a;
		}
		return null;
	}
};
ta.addStateEquality({ spreadsheetColWidths: o });
function na(e) {
	let t = {};
	for (let n = 0; n < e.length; n += 1) t[e[n].id] = n;
	return t;
}
function ra(e, t, n = "") {
	return e.map((e, r) => ({
		className: e.isMain ? "fc-main-col" : "",
		width: t[r] || e.width || n
	}));
}
function ia(e) {
	for (let t of e) if (t.group || t.resource && t.hasChildren) return !0;
	return !1;
}
function aa(e) {
	let t = e.resourceAreaColumns || [], n = null;
	t.length ? e.resourceAreaHeaderContent && (n = {
		headerClassNames: e.resourceAreaHeaderClassNames,
		headerContent: e.resourceAreaHeaderContent,
		headerDidMount: e.resourceAreaHeaderDidMount,
		headerWillUnmount: e.resourceAreaHeaderWillUnmount
	}) : t.push({
		headerClassNames: e.resourceAreaHeaderClassNames,
		headerContent: e.resourceAreaHeaderContent,
		headerDefault: () => "Resources",
		headerDidMount: e.resourceAreaHeaderDidMount,
		headerWillUnmount: e.resourceAreaHeaderWillUnmount
	});
	let r = [], i = [], a = [], o = !1;
	for (let n of t) n.group ? i.push(Object.assign(Object.assign({}, n), {
		cellClassNames: n.cellClassNames || e.resourceGroupLabelClassNames,
		cellContent: n.cellContent || e.resourceGroupLabelContent,
		cellDidMount: n.cellDidMount || e.resourceGroupLabelDidMount,
		cellWillUnmount: n.cellWillUnmount || e.resourceGroupLaneWillUnmount
	})) : r.push(n);
	let s = r[0];
	if (s.isMain = !0, s.cellClassNames = s.cellClassNames || e.resourceLabelClassNames, s.cellContent = s.cellContent || e.resourceLabelContent, s.cellDidMount = s.cellDidMount || e.resourceLabelDidMount, s.cellWillUnmount = s.cellWillUnmount || e.resourceLabelWillUnmount, i.length) a = i, o = !0;
	else {
		let t = e.resourceGroupField;
		t && a.push({
			field: t,
			labelClassNames: e.resourceGroupLabelClassNames,
			labelContent: e.resourceGroupLabelContent,
			labelDidMount: e.resourceGroupLabelDidMount,
			labelWillUnmount: e.resourceGroupLabelWillUnmount,
			laneClassNames: e.resourceGroupLaneClassNames,
			laneContent: e.resourceGroupLaneContent,
			laneDidMount: e.resourceGroupLaneDidMount,
			laneWillUnmount: e.resourceGroupLaneWillUnmount
		});
	}
	let c = e.resourceOrder || cr, l = [];
	for (let e of c) {
		let t = !1;
		for (let n of a) if (n.field === e.field) {
			n.order = e.order, t = !0;
			break;
		}
		t || l.push(e);
	}
	return {
		superHeaderRendering: n,
		isVGrouping: o,
		groupSpecs: a,
		colSpecs: i.concat(r),
		orderSpecs: l
	};
}
Se(".fc .fc-resource-timeline-divider{cursor:col-resize;width:3px}.fc .fc-resource-group{font-weight:inherit;text-align:inherit}.fc .fc-resource-timeline .fc-resource-group:not([rowspan]){background:var(--fc-neutral-bg-color)}.fc .fc-timeline-lane-frame{position:relative}.fc .fc-timeline-overlap-enabled .fc-timeline-lane-frame .fc-timeline-events{box-sizing:content-box;padding-bottom:10px}.fc-timeline-body-expandrows td.fc-timeline-lane{position:relative}.fc-timeline-body-expandrows .fc-timeline-lane-frame{position:static}.fc-datagrid-cell-frame-liquid{height:100%}.fc-liquid-hack .fc-datagrid-cell-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-datagrid-header .fc-datagrid-cell-frame{align-items:center;display:flex;justify-content:flex-start;position:relative}.fc .fc-datagrid-cell-resizer{bottom:0;cursor:col-resize;position:absolute;top:0;width:5px;z-index:1}.fc .fc-datagrid-cell-cushion{overflow:hidden;padding:8px;white-space:nowrap}.fc .fc-datagrid-expander{cursor:pointer;opacity:.65}.fc .fc-datagrid-expander .fc-icon{display:inline-block;width:1em}.fc .fc-datagrid-expander-placeholder{cursor:auto}.fc .fc-resource-timeline-flat .fc-datagrid-expander-placeholder{display:none}.fc-direction-ltr .fc-datagrid-cell-resizer{right:-3px}.fc-direction-rtl .fc-datagrid-cell-resizer{left:-3px}.fc-direction-ltr .fc-datagrid-expander{margin-right:3px}.fc-direction-rtl .fc-datagrid-expander{margin-left:3px}");
//#endregion
//#region node_modules/@fullcalendar/resource-timeline/index.js
var oa = M({
	name: "@fullcalendar/resource-timeline",
	premiumReleaseDate: "2026-06-18",
	deps: [
		U,
		$,
		Gn
	],
	initialView: "resourceTimelineDay",
	views: {
		resourceTimeline: {
			type: "timeline",
			component: ta,
			needsResourceData: !0,
			resourceAreaWidth: "30%",
			resourcesInitiallyExpanded: !0,
			eventResizableFromStart: !0
		},
		resourceTimelineDay: {
			type: "resourceTimeline",
			duration: { days: 1 }
		},
		resourceTimelineWeek: {
			type: "resourceTimeline",
			duration: { weeks: 1 }
		},
		resourceTimelineMonth: {
			type: "resourceTimeline",
			duration: { months: 1 }
		},
		resourceTimelineYear: {
			type: "resourceTimeline",
			duration: { years: 1 }
		}
	}
}), sa = class extends Sr {
	transformSeg(e, t, n) {
		return [Object.assign(Object.assign({}, e), { col: t.computeCol(e.col, n) })];
	}
}, ca = class extends O {
	constructor() {
		super(...arguments), this.buildDayRanges = w(gt), this.splitter = new Cr(), this.slicers = {}, this.joiner = new sa(), this.timeColsRef = D(), this.isHitComboAllowed = (e, t) => this.dayRanges.length === 1 || e.dateSpan.resourceId === t.dateSpan.resourceId;
	}
	render() {
		let { props: e, context: t } = this, { dateEnv: n, options: r } = t, { dateProfile: i, resourceDayTableModel: a } = e, o = this.dayRanges = this.buildDayRanges(a.dayTableModel, i, n), s = this.splitter.splitProps(e);
		this.slicers = C(s, (e, t) => this.slicers[t] || new xt());
		let c = C(this.slicers, (e, n) => e.sliceProps(s[n], i, null, t, o));
		return B(z, { unit: r.nowIndicator ? "minute" : "day" }, (t, n) => B(wt, Object.assign({ ref: this.timeColsRef }, this.joiner.joinProps(c, a), {
			dateProfile: i,
			axis: e.axis,
			slotDuration: e.slotDuration,
			slatMetas: e.slatMetas,
			cells: a.cells[0],
			tableColGroupNode: e.tableColGroupNode,
			tableMinWidth: e.tableMinWidth,
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight,
			expandRows: e.expandRows,
			nowDate: t,
			nowIndicatorSegs: r.nowIndicator && this.buildNowIndicatorSegs(t),
			todayRange: n,
			onScrollTopRequest: e.onScrollTopRequest,
			forPrint: e.forPrint,
			onSlatCoords: e.onSlatCoords,
			isHitComboAllowed: this.isHitComboAllowed
		})));
	}
	buildNowIndicatorSegs(e) {
		let t = this.slicers[""].sliceNowDate(e, this.props.dateProfile, this.context.options.nextDayThreshold, this.context, this.dayRanges);
		return this.joiner.expandSegs(this.props.resourceDayTableModel, t);
	}
}, la = class extends vt {
	constructor() {
		super(...arguments), this.flattenResources = w(wr), this.buildResourceTimeColsModel = w(ua), this.buildSlatMetas = w(St);
	}
	render() {
		let { props: e, context: t } = this, { options: n, dateEnv: r } = t, { dateProfile: i } = e, a = this.allDaySplitter.splitProps(e), o = n.resourceOrder || cr, s = this.flattenResources(e.resourceStore, o), c = this.buildResourceTimeColsModel(i, t.dateProfileGenerator, s, n.datesAboveResources, t), l = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, n.slotLabelInterval, n.slotDuration, r), { dayMinWidth: u } = n, d = !u, f = u, p = n.dayHeaders && B(hr, {
			resources: s,
			dates: c.dayTableModel.headerDates,
			dateProfile: i,
			datesRepDistinctDays: !0,
			renderIntro: d ? this.renderHeadAxis : null
		}), m = n.allDaySlot !== !1 && ((t) => B(ji, Object.assign({}, a.allDay, {
			dateProfile: i,
			resourceDayTableModel: c,
			nextDayThreshold: n.nextDayThreshold,
			tableMinWidth: t.tableMinWidth,
			colGroupNode: t.tableColGroupNode,
			renderRowIntro: d ? this.renderTableRowAxis : null,
			showWeekNumbers: !1,
			expandRows: !1,
			headerAlignElRef: this.headerElRef,
			clientWidth: t.clientWidth,
			clientHeight: t.clientHeight,
			forPrint: e.forPrint
		}, this.getAllDayMaxEventProps()))), h = (t) => B(ca, Object.assign({}, a.timed, {
			dateProfile: i,
			axis: d,
			slotDuration: n.slotDuration,
			slatMetas: l,
			resourceDayTableModel: c,
			tableColGroupNode: t.tableColGroupNode,
			tableMinWidth: t.tableMinWidth,
			clientWidth: t.clientWidth,
			clientHeight: t.clientHeight,
			onSlatCoords: this.handleSlatCoords,
			expandRows: t.expandRows,
			forPrint: e.forPrint,
			onScrollTopRequest: this.handleScrollTopRequest
		}));
		return f ? this.renderHScrollLayout(p, m, h, c.colCnt, u, l, this.state.slatCoords) : this.renderSimpleLayout(p, m, h);
	}
};
function ua(e, t, n, r, i) {
	let a = Tt(e, t);
	return r ? new br(a, n, i) : new yr(a, n, i);
}
//#endregion
//#region resources/js/plugins/premium.js
var da = {
	scrollGrid: an,
	timeline: Gn,
	adaptive: tr,
	resource: $,
	resourceDayGrid: Pi,
	resourceTimeline: oa,
	resourceTimeGrid: M({
		name: "@fullcalendar/resource-timegrid",
		premiumReleaseDate: "2026-06-18",
		deps: [
			U,
			$,
			Et
		],
		initialView: "resourceTimeGridDay",
		views: {
			resourceTimeGrid: {
				type: "timeGrid",
				component: la,
				needsResourceData: !0
			},
			resourceTimeGridDay: {
				type: "resourceTimeGrid",
				duration: { days: 1 }
			},
			resourceTimeGridWeek: {
				type: "resourceTimeGrid",
				duration: { weeks: 1 }
			}
		}
	})
};
//#endregion
export { da as default };

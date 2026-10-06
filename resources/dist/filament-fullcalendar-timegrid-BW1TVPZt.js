import { $ as e, A as t, Bn as n, Bt as r, Cn as i, D as a, E as o, Et as s, Fn as c, H as l, Ht as u, L as d, M as f, N as p, Ot as m, P as h, R as g, S as _, Sr as v, T as y, U as ee, V as b, Vt as te, W as x, Xt as ne, Z as S, Zn as re, a as ie, an as ae, at as oe, br as C, bt as w, c as T, cn as se, cr as E, d as ce, dr as le, dt as ue, et as D, f as de, fn as fe, hn as pe, i as O, it as k, j as A, jn as j, l as me, ln as M, mn as he, mr as N, n as P, nt as F, on as I, or as L, p as R, pr as z, rt as ge, s as B, u as V, un as _e, v as ve, vn as H, w as U, wt as W, xn as ye, xr as G, yr as K, z as be } from "./filament-fullcalendar-core-MrkNOn94.js";
//#region node_modules/@fullcalendar/daygrid/internal.js
var xe = class extends T {
	constructor() {
		super(...arguments), this.headerElRef = G();
	}
	renderSimpleLayout(e, t) {
		let { props: n, context: r } = this, i = [], a = M(r.options);
		return e && i.push({
			type: "header",
			key: "header",
			isSticky: a,
			chunk: {
				elRef: this.headerElRef,
				tableClassName: "fc-col-header",
				rowContent: e
			}
		}), i.push({
			type: "body",
			key: "body",
			liquid: !0,
			chunk: { content: t }
		}), v(d, {
			elClasses: ["fc-daygrid"],
			viewSpec: r.viewSpec
		}, v(A, {
			liquid: !n.isHeightAuto && !n.forPrint,
			collapsibleWidth: n.forPrint,
			cols: [],
			sections: i
		}));
	}
	renderHScrollLayout(e, t, n, r) {
		let i = this.context.pluginHooks.scrollGridImpl;
		if (!i) throw Error("No ScrollGrid implementation");
		let { props: a, context: o } = this, s = !a.forPrint && M(o.options), c = !a.forPrint && se(o.options), l = [];
		return e && l.push({
			type: "header",
			key: "header",
			isSticky: s,
			chunks: [{
				key: "main",
				elRef: this.headerElRef,
				tableClassName: "fc-col-header",
				rowContent: e
			}]
		}), l.push({
			type: "body",
			key: "body",
			liquid: !0,
			chunks: [{
				key: "main",
				content: t
			}]
		}), c && l.push({
			type: "footer",
			key: "footer",
			isSticky: !0,
			chunks: [{
				key: "main",
				content: E
			}]
		}), v(d, {
			elClasses: ["fc-daygrid"],
			viewSpec: o.viewSpec
		}, v(i, {
			liquid: !a.isHeightAuto && !a.forPrint,
			forPrint: a.forPrint,
			collapsibleWidth: a.forPrint,
			colGroups: [{ cols: [{
				span: n,
				minWidth: r
			}] }],
			sections: l
		}));
	}
};
function q(e, t) {
	let n = [];
	for (let e = 0; e < t; e += 1) n[e] = [];
	for (let t of e) n[t.row].push(t);
	return n;
}
function J(e, t) {
	let n = [];
	for (let e = 0; e < t; e += 1) n[e] = [];
	for (let t of e) n[t.firstCol].push(t);
	return n;
}
function Se(e, t) {
	let n = [];
	if (e) {
		for (let r = 0; r < t; r += 1) n[r] = {
			affectedInstances: e.affectedInstances,
			isEvent: e.isEvent,
			segs: []
		};
		for (let t of e.segs) n[t.row].segs.push(t);
	} else for (let e = 0; e < t; e += 1) n[e] = null;
	return n;
}
var Ce = W({
	hour: "numeric",
	minute: "2-digit",
	omitZeroMinute: !0,
	meridiem: "narrow"
});
function we(e) {
	let { display: t } = e.eventRange.ui;
	return t === "list-item" || t === "auto" && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd;
}
var Te = class extends O {
	render() {
		let { props: e } = this;
		return v(h, Object.assign({}, e, {
			elClasses: [
				"fc-daygrid-event",
				"fc-daygrid-block-event",
				"fc-h-event"
			],
			defaultTimeFormat: Ce,
			defaultDisplayEventEnd: e.defaultDisplayEventEnd,
			disableResizing: !e.seg.eventRange.def.allDay
		}));
	}
}, Ee = class extends O {
	render() {
		let { props: e, context: t } = this, { options: n } = t, { seg: r } = e, i = oe(r, n.eventTimeFormat || Ce, t, !0, e.defaultDisplayEventEnd);
		return v(ve, Object.assign({}, e, {
			elTag: "a",
			elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
			elAttrs: ae(e.seg, t),
			defaultGenerator: De,
			timeText: i,
			isResizing: !1,
			isDateSelecting: !1
		}));
	}
};
function De(e) {
	return v(C, null, v("div", {
		className: "fc-daygrid-event-dot",
		style: { borderColor: e.borderColor || e.backgroundColor }
	}), e.timeText && v("div", { className: "fc-event-time" }, e.timeText), v("div", { className: "fc-event-title" }, e.event.title || v(C, null, "\xA0")));
}
var Oe = class extends O {
	constructor() {
		super(...arguments), this.compileSegs = c(ke);
	}
	render() {
		let { props: e } = this, { allSegs: t, invisibleSegs: n } = this.compileSegs(e.singlePlacements);
		return v(_, {
			elClasses: ["fc-daygrid-more-link"],
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			allDayDate: e.allDayDate,
			moreCnt: e.moreCnt,
			allSegs: t,
			hiddenSegs: n,
			alignmentElRef: e.alignmentElRef,
			alignGridTop: e.alignGridTop,
			extraDateSpan: e.extraDateSpan,
			popoverContent: () => {
				let n = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
				return v(C, null, t.map((t) => {
					let r = t.eventRange.instance.instanceId;
					return v("div", {
						className: "fc-daygrid-event-harness",
						key: r,
						style: { visibility: n[r] ? "hidden" : "" }
					}, we(t) ? v(Ee, Object.assign({
						seg: t,
						isDragging: !1,
						isSelected: r === e.eventSelection,
						defaultDisplayEventEnd: !1
					}, I(t, e.todayRange))) : v(Te, Object.assign({
						seg: t,
						isDragging: !1,
						isResizing: !1,
						isDateSelecting: !1,
						isSelected: r === e.eventSelection,
						defaultDisplayEventEnd: !1
					}, I(t, e.todayRange))));
				}));
			}
		});
	}
};
function ke(e) {
	let t = [], n = [];
	for (let r of e) t.push(r.seg), r.isVisible || n.push(r.seg);
	return {
		allSegs: t,
		invisibleSegs: n
	};
}
var Ae = W({ week: "narrow" }), je = class extends T {
	constructor() {
		super(...arguments), this.rootElRef = G(), this.state = { dayNumberId: _e() }, this.handleRootEl = (e) => {
			le(this.rootElRef, e), le(this.props.elRef, e);
		};
	}
	render() {
		let { context: e, props: t, state: n, rootElRef: r } = this, { options: i, dateEnv: a } = e, { date: o, dateProfile: s } = t, c = t.showDayNumber && Ne(o, s.currentRange, a);
		return v(V, {
			elTag: "td",
			elRef: this.handleRootEl,
			elClasses: ["fc-daygrid-day", ...t.extraClassNames || []],
			elAttrs: Object.assign(Object.assign(Object.assign({}, t.extraDataAttrs), t.showDayNumber ? { "aria-labelledby": n.dayNumberId } : {}), { role: "gridcell" }),
			defaultGenerator: Me,
			date: o,
			dateProfile: s,
			todayRange: t.todayRange,
			showDayNumber: t.showDayNumber,
			isMonthStart: c,
			extraRenderProps: t.extraRenderProps
		}, (a, s) => v("div", {
			ref: t.innerElRef,
			className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
			style: { minHeight: t.minHeight }
		}, t.showWeekNumber && v(be, {
			elTag: "a",
			elClasses: ["fc-daygrid-week-number"],
			elAttrs: k(e, o, "week"),
			date: o,
			defaultFormat: Ae
		}), !s.isDisabled && (t.showDayNumber || pe(i) || t.forceDayTop) ? v("div", { className: "fc-daygrid-day-top" }, v(a, {
			elTag: "a",
			elClasses: ["fc-daygrid-day-number", c && "fc-daygrid-month-start"],
			elAttrs: Object.assign(Object.assign({}, k(e, o)), { id: n.dayNumberId })
		})) : t.showDayNumber ? v("div", {
			className: "fc-daygrid-day-top",
			style: { visibility: "hidden" }
		}, v("a", { className: "fc-daygrid-day-number" }, "\xA0")) : void 0, v("div", {
			className: "fc-daygrid-day-events",
			ref: t.fgContentElRef
		}, t.fgContent, v("div", {
			className: "fc-daygrid-day-bottom",
			style: { marginTop: t.moreMarginTop }
		}, v(Oe, {
			allDayDate: o,
			singlePlacements: t.singlePlacements,
			moreCnt: t.moreCnt,
			alignmentElRef: r,
			alignGridTop: !t.showDayNumber,
			extraDateSpan: t.extraDateSpan,
			dateProfile: t.dateProfile,
			eventSelection: t.eventSelection,
			eventDrag: t.eventDrag,
			eventResize: t.eventResize,
			todayRange: t.todayRange
		}))), v("div", { className: "fc-daygrid-day-bg" }, t.bgContent)));
	}
};
function Me(e) {
	return e.dayNumberText || v(C, null, "\xA0");
}
function Ne(e, t, n) {
	let { start: r, end: i } = t, a = ee(i, -1), o = n.getYear(r), s = n.getMonth(r), c = n.getYear(a), l = n.getMonth(a);
	return !(o === c && s === l) && (e.valueOf() === r.valueOf() || n.getDay(e) === 1 && e.valueOf() < i.valueOf());
}
function Pe(e) {
	return e.eventRange.instance.instanceId + ":" + e.firstCol;
}
function Fe(e) {
	return Pe(e) + ":" + e.lastCol;
}
function Ie(e, t, n, r, i, a, o) {
	let s = new ze((t) => i[e[t.index].eventRange.instance.instanceId + ":" + t.span.start + ":" + (t.span.end - 1)] || 1);
	s.allowReslicing = !0, s.strictOrder = r, t === !0 || n === !0 ? (s.maxCoord = a, s.hiddenConsumes = !0) : typeof t == "number" ? s.maxStackCnt = t : typeof n == "number" && (s.maxStackCnt = n, s.hiddenConsumes = !0);
	let c = [], l = [];
	for (let t = 0; t < e.length; t += 1) {
		let n = e[t];
		i[Fe(n)] == null ? l.push(n) : c.push({
			index: t,
			span: {
				start: n.firstCol,
				end: n.lastCol + 1
			}
		});
	}
	let u = s.addSegs(c), { singleColPlacements: d, multiColPlacements: f, leftoverMargins: p } = Le(s.toRects(), e, o), m = [], h = [];
	for (let e of l) {
		f[e.firstCol].push({
			seg: e,
			isVisible: !1,
			isAbsolute: !0,
			absoluteTop: 0,
			marginTop: 0
		});
		for (let t = e.firstCol; t <= e.lastCol; t += 1) d[t].push({
			seg: Y(e, t, t + 1, o),
			isVisible: !1,
			isAbsolute: !1,
			absoluteTop: 0,
			marginTop: 0
		});
	}
	for (let e = 0; e < o.length; e += 1) m.push(0);
	for (let t of u) {
		let n = e[t.index], r = t.span;
		f[r.start].push({
			seg: Y(n, r.start, r.end, o),
			isVisible: !1,
			isAbsolute: !0,
			absoluteTop: 0,
			marginTop: 0
		});
		for (let e = r.start; e < r.end; e += 1) m[e] += 1, d[e].push({
			seg: Y(n, e, e + 1, o),
			isVisible: !1,
			isAbsolute: !1,
			absoluteTop: 0,
			marginTop: 0
		});
	}
	for (let e = 0; e < o.length; e += 1) h.push(p[e]);
	return {
		singleColPlacements: d,
		multiColPlacements: f,
		moreCnts: m,
		moreMarginTops: h
	};
}
function Le(e, t, n) {
	let r = Re(e, n.length), i = [], a = [], o = [];
	for (let e = 0; e < n.length; e += 1) {
		let s = r[e], c = [], l = 0, u = 0;
		for (let r of s) {
			let i = t[r.index];
			c.push({
				seg: Y(i, e, e + 1, n),
				isVisible: !0,
				isAbsolute: !1,
				absoluteTop: r.levelCoord,
				marginTop: r.levelCoord - l
			}), l = r.levelCoord + r.thickness;
		}
		let d = [];
		l = 0, u = 0;
		for (let r of s) {
			let i = t[r.index], a = r.span.end - r.span.start > 1, o = r.span.start === e;
			u += r.levelCoord - l, l = r.levelCoord + r.thickness, a ? (u += r.thickness, o && d.push({
				seg: Y(i, r.span.start, r.span.end, n),
				isVisible: !0,
				isAbsolute: !0,
				absoluteTop: r.levelCoord,
				marginTop: 0
			})) : o && (d.push({
				seg: Y(i, r.span.start, r.span.end, n),
				isVisible: !0,
				isAbsolute: !1,
				absoluteTop: r.levelCoord,
				marginTop: u
			}), u = 0);
		}
		i.push(c), a.push(d), o.push(u);
	}
	return {
		singleColPlacements: i,
		multiColPlacements: a,
		leftoverMargins: o
	};
}
function Re(e, t) {
	let n = [];
	for (let e = 0; e < t; e += 1) n.push([]);
	for (let t of e) for (let e = t.span.start; e < t.span.end; e += 1) n[e].push(t);
	return n;
}
function Y(e, t, n, r) {
	if (e.firstCol === t && e.lastCol === n - 1) return e;
	let i = e.eventRange, a = i.range, o = ye(a, {
		start: r[t].date,
		end: b(r[n - 1].date, 1)
	});
	return Object.assign(Object.assign({}, e), {
		firstCol: t,
		lastCol: n - 1,
		eventRange: {
			def: i.def,
			ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
			instance: i.instance,
			range: o
		},
		isStart: e.isStart && o.start.valueOf() === a.start.valueOf(),
		isEnd: e.isEnd && o.end.valueOf() === a.end.valueOf()
	});
}
var ze = class extends t {
	constructor() {
		super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
	}
	addSegs(e) {
		let t = super.addSegs(e), { entriesByLevel: n } = this, r = (e) => !this.forceHidden[D(e)];
		for (let e = 0; e < n.length; e += 1) n[e] = n[e].filter(r);
		return t;
	}
	handleInvalidInsertion(e, t, n) {
		let { entriesByLevel: r, forceHidden: a } = this, { touchingEntry: o, touchingLevel: s, touchingLateral: c } = e;
		if (this.hiddenConsumes && o) {
			let e = D(o);
			if (!a[e]) if (this.allowReslicing) {
				let e = Object.assign(Object.assign({}, o), { span: i(o.span, t.span) }), l = D(e);
				a[l] = !0, r[s][c] = e, n.push(e), this.splitEntry(o, t, n);
			} else a[e] = !0, n.push(o);
		}
		super.handleInvalidInsertion(e, t, n);
	}
}, Be = class extends T {
	constructor() {
		super(...arguments), this.cellElRefs = new a(), this.frameElRefs = new a(), this.fgElRefs = new a(), this.segHarnessRefs = new a(), this.rootElRef = G(), this.state = {
			framePositions: null,
			maxContentHeight: null,
			segHeights: {}
		}, this.handleResize = (e) => {
			e && this.updateSizing(!0);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, i = e.cells.length, a = J(e.businessHourSegs, i), o = J(e.bgEventSegs, i), s = J(this.getHighlightSegs(), i), c = J(this.getMirrorSegs(), i), { singleColPlacements: l, multiColPlacements: u, moreCnts: d, moreMarginTops: f } = Ie(z(e.fgEventSegs, r.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, r.eventOrderStrict, t.segHeights, t.maxContentHeight, e.cells), p = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
		return v("tr", {
			ref: this.rootElRef,
			role: "row"
		}, e.renderIntro && e.renderIntro(), e.cells.map((t, n) => {
			let r = this.renderFgSegs(n, e.forPrint ? l[n] : u[n], e.todayRange, p), i = this.renderFgSegs(n, Ve(c[n], u), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
			return v(je, {
				key: t.key,
				elRef: this.cellElRefs.createRef(t.key),
				innerElRef: this.frameElRefs.createRef(t.key),
				dateProfile: e.dateProfile,
				date: t.date,
				showDayNumber: e.showDayNumbers,
				showWeekNumber: e.showWeekNumbers && n === 0,
				forceDayTop: e.showWeekNumbers,
				todayRange: e.todayRange,
				eventSelection: e.eventSelection,
				eventDrag: e.eventDrag,
				eventResize: e.eventResize,
				extraRenderProps: t.extraRenderProps,
				extraDataAttrs: t.extraDataAttrs,
				extraClassNames: t.extraClassNames,
				extraDateSpan: t.extraDateSpan,
				moreCnt: d[n],
				moreMarginTop: f[n],
				singlePlacements: l[n],
				fgContentElRef: this.fgElRefs.createRef(t.key),
				fgContent: v(C, null, v(C, null, r), v(C, null, i)),
				bgContent: v(C, null, this.renderFillSegs(s[n], "highlight"), this.renderFillSegs(a[n], "non-business"), this.renderFillSegs(o[n], "bg-event")),
				minHeight: e.cellMinHeight
			});
		}));
	}
	componentDidMount() {
		this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
	}
	componentDidUpdate(e, t) {
		let n = this.props;
		this.updateSizing(!j(e, n));
	}
	componentWillUnmount() {
		this.context.removeResizeHandler(this.handleResize);
	}
	getHighlightSegs() {
		let { props: e } = this;
		return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
	}
	getMirrorSegs() {
		let { props: e } = this;
		return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
	}
	renderFgSegs(e, t, n, r, i, a, o) {
		let { context: s } = this, { eventSelection: c } = this.props, { framePositions: l } = this.state, u = this.props.cells.length === 1, d = i || a || o, f = [];
		if (l) for (let e of t) {
			let { seg: t } = e, { instanceId: p } = t.eventRange.instance, m = e.isVisible && !r[p], h = e.isAbsolute, g = "", _ = "";
			h && (s.isRtl ? (_ = 0, g = l.lefts[t.lastCol] - l.lefts[t.firstCol]) : (g = 0, _ = l.rights[t.firstCol] - l.rights[t.lastCol])), f.push(v("div", {
				className: "fc-daygrid-event-harness" + (h ? " fc-daygrid-event-harness-abs" : ""),
				key: Pe(t),
				ref: d ? null : this.segHarnessRefs.createRef(Fe(t)),
				style: {
					visibility: m ? "" : "hidden",
					marginTop: h ? "" : e.marginTop,
					top: h ? e.absoluteTop : "",
					left: g,
					right: _
				}
			}, we(t) ? v(Ee, Object.assign({
				seg: t,
				isDragging: i,
				isSelected: p === c,
				defaultDisplayEventEnd: u
			}, I(t, n))) : v(Te, Object.assign({
				seg: t,
				isDragging: i,
				isResizing: a,
				isDateSelecting: o,
				isSelected: p === c,
				defaultDisplayEventEnd: u
			}, I(t, n)))));
		}
		return f;
	}
	renderFillSegs(e, t) {
		let { isRtl: n } = this.context, { todayRange: r } = this.props, { framePositions: i } = this.state, a = [];
		if (i) for (let o of e) {
			let e = n ? {
				right: 0,
				left: i.lefts[o.lastCol] - i.lefts[o.firstCol]
			} : {
				left: 0,
				right: i.rights[o.firstCol] - i.rights[o.lastCol]
			};
			a.push(v("div", {
				key: F(o.eventRange),
				className: "fc-daygrid-bg-harness",
				style: e
			}, t === "bg-event" ? v(ie, Object.assign({ seg: o }, I(o, r))) : L(t)));
		}
		return v(C, {}, ...a);
	}
	updateSizing(e) {
		let { props: t, state: n, frameElRefs: r } = this;
		if (!t.forPrint && t.clientWidth !== null) {
			if (e) {
				let e = t.cells.map((e) => r.currentMap[e.key]);
				if (e.length) {
					let t = this.rootElRef.current, r = new o(t, e, !0, !1);
					(!n.framePositions || !n.framePositions.similarTo(r)) && this.setState({ framePositions: new o(t, e, !0, !1) });
				}
			}
			let i = this.state.segHeights, a = this.querySegHeights(), s = t.dayMaxEvents === !0 || t.dayMaxEventRows === !0;
			this.safeSetState({
				segHeights: Object.assign(Object.assign({}, i), a),
				maxContentHeight: s ? this.computeMaxContentHeight() : null
			});
		}
	}
	querySegHeights() {
		let e = this.segHarnessRefs.currentMap, t = {};
		for (let n in e) {
			let r = Math.round(e[n].getBoundingClientRect().height);
			t[n] = Math.max(t[n] || 0, r);
		}
		return t;
	}
	computeMaxContentHeight() {
		let e = this.props.cells[0].key, t = this.cellElRefs.currentMap[e], n = this.fgElRefs.currentMap[e];
		return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
	}
	getCellEls() {
		let e = this.cellElRefs.currentMap;
		return this.props.cells.map((t) => e[t.key]);
	}
};
Be.addStateEquality({ segHeights: j });
function Ve(e, t) {
	if (!e.length) return [];
	let n = He(t);
	return e.map((e) => ({
		seg: e,
		isVisible: !0,
		isAbsolute: !0,
		absoluteTop: n[e.eventRange.instance.instanceId],
		marginTop: 0
	}));
}
function He(e) {
	let t = {};
	for (let n of e) for (let e of n) t[e.seg.eventRange.instance.instanceId] = e.absoluteTop;
	return t;
}
var Ue = class extends T {
	constructor() {
		super(...arguments), this.splitBusinessHourSegs = c(q), this.splitBgEventSegs = c(We), this.splitFgEventSegs = c(q), this.splitDateSelectionSegs = c(q), this.splitEventDrag = c(Se), this.splitEventResize = c(Se), this.rowRefs = new a();
	}
	render() {
		let { props: e, context: t } = this, n = e.cells.length, r = this.splitBusinessHourSegs(e.businessHourSegs, n), i = this.splitBgEventSegs(e.bgEventSegs, n), a = this.splitFgEventSegs(e.fgEventSegs, n), o = this.splitDateSelectionSegs(e.dateSelectionSegs, n), s = this.splitEventDrag(e.eventDrag, n), c = this.splitEventResize(e.eventResize, n), l = n >= 7 && e.clientWidth ? e.clientWidth / t.options.aspectRatio / 6 : null;
		return v(y, { unit: "day" }, (t, u) => v(C, null, e.cells.map((t, d) => v(Be, {
			ref: this.rowRefs.createRef(d),
			key: t.length ? t[0].date.toISOString() : d,
			showDayNumbers: n > 1,
			showWeekNumbers: e.showWeekNumbers,
			todayRange: u,
			dateProfile: e.dateProfile,
			cells: t,
			renderIntro: e.renderRowIntro,
			businessHourSegs: r[d],
			eventSelection: e.eventSelection,
			bgEventSegs: i[d],
			fgEventSegs: a[d],
			dateSelectionSegs: o[d],
			eventDrag: s[d],
			eventResize: c[d],
			dayMaxEvents: e.dayMaxEvents,
			dayMaxEventRows: e.dayMaxEventRows,
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight,
			cellMinHeight: l,
			forPrint: e.forPrint
		}))));
	}
	componentDidMount() {
		this.registerInteractiveComponent();
	}
	componentDidUpdate() {
		this.registerInteractiveComponent();
	}
	registerInteractiveComponent() {
		if (!this.rootEl) {
			let e = this.rowRefs.currentMap[0].getCellEls()[0], t = e ? e.closest(".fc-daygrid-body") : null;
			t && (this.rootEl = t, this.context.registerInteractiveComponent(this, {
				el: t,
				isHitComboAllowed: this.props.isHitComboAllowed
			}));
		}
	}
	componentWillUnmount() {
		this.rootEl &&= (this.context.unregisterInteractiveComponent(this), null);
	}
	prepareHits() {
		this.rowPositions = new o(this.rootEl, this.rowRefs.collect().map((e) => e.getCellEls()[0]), !1, !0), this.colPositions = new o(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1);
	}
	queryHit(e, t) {
		let { colPositions: n, rowPositions: r } = this, i = n.leftToIndex(e), a = r.topToIndex(t);
		if (a != null && i != null) {
			let e = this.props.cells[a][i];
			return {
				dateProfile: this.props.dateProfile,
				dateSpan: Object.assign({
					range: this.getCellRange(a, i),
					allDay: !0
				}, e.extraDateSpan),
				dayEl: this.getCellEl(a, i),
				rect: {
					left: n.lefts[i],
					right: n.rights[i],
					top: r.tops[a],
					bottom: r.bottoms[a]
				},
				layer: 0
			};
		}
		return null;
	}
	getCellEl(e, t) {
		return this.rowRefs.currentMap[e].getCellEls()[t];
	}
	getCellRange(e, t) {
		let n = this.props.cells[e][t].date;
		return {
			start: n,
			end: b(n, 1)
		};
	}
};
function We(e, t) {
	return q(e.filter(Ge), t);
}
function Ge(e) {
	return e.eventRange.def.allDay;
}
var Ke = class extends T {
	constructor() {
		super(...arguments), this.elRef = G(), this.needsScrollReset = !1;
	}
	render() {
		let { props: e } = this, { dayMaxEventRows: t, dayMaxEvents: n, expandRows: r } = e, i = n === !0 || t === !0;
		i && !r && (i = !1, t = null, n = null);
		let a = [
			"fc-daygrid-body",
			i ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
			r ? "" : "fc-daygrid-body-natural"
		];
		return v("div", {
			ref: this.elRef,
			className: a.join(" "),
			style: {
				width: e.clientWidth,
				minWidth: e.tableMinWidth
			}
		}, v("table", {
			role: "presentation",
			className: "fc-scrollgrid-sync-table",
			style: {
				width: e.clientWidth,
				minWidth: e.tableMinWidth,
				height: r ? e.clientHeight : ""
			}
		}, e.colGroupNode, v("tbody", { role: "presentation" }, v(Ue, {
			dateProfile: e.dateProfile,
			cells: e.cells,
			renderRowIntro: e.renderRowIntro,
			showWeekNumbers: e.showWeekNumbers,
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight,
			businessHourSegs: e.businessHourSegs,
			bgEventSegs: e.bgEventSegs,
			fgEventSegs: e.fgEventSegs,
			dateSelectionSegs: e.dateSelectionSegs,
			eventSelection: e.eventSelection,
			eventDrag: e.eventDrag,
			eventResize: e.eventResize,
			dayMaxEvents: n,
			dayMaxEventRows: t,
			forPrint: e.forPrint,
			isHitComboAllowed: e.isHitComboAllowed
		}))));
	}
	componentDidMount() {
		this.requestScrollReset();
	}
	componentDidUpdate(e) {
		e.dateProfile === this.props.dateProfile ? this.flushScrollReset() : this.requestScrollReset();
	}
	requestScrollReset() {
		this.needsScrollReset = !0, this.flushScrollReset();
	}
	flushScrollReset() {
		if (this.needsScrollReset && this.props.clientWidth) {
			let e = qe(this.elRef.current, this.props.dateProfile);
			if (e) {
				let t = e.closest(".fc-daygrid-body"), n = t.closest(".fc-scroller"), r = e.getBoundingClientRect().top - t.getBoundingClientRect().top;
				n.scrollTop = r ? r + 1 : 0;
			}
			this.needsScrollReset = !1;
		}
	}
};
function qe(e, t) {
	let n;
	return t.currentRangeUnit.match(/year|month/) && (n = e.querySelector(`[data-date="${te(t.currentDate)}-01"]`)), n ||= e.querySelector(`[data-date="${r(t.currentDate)}"]`), n;
}
var Je = class extends f {
	constructor() {
		super(...arguments), this.forceDayIfListItem = !0;
	}
	sliceRange(e, t) {
		return t.sliceRange(e);
	}
}, Ye = class extends T {
	constructor() {
		super(...arguments), this.slicer = new Je(), this.tableRef = G();
	}
	render() {
		let { props: e, context: t } = this;
		return v(Ke, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
			dateProfile: e.dateProfile,
			cells: e.dayTableModel.cells,
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
			forPrint: e.forPrint
		}));
	}
}, Xe = class extends xe {
	constructor() {
		super(...arguments), this.buildDayTableModel = c(Ze), this.headerRef = G(), this.tableRef = G();
	}
	render() {
		let { options: e, dateProfileGenerator: t } = this.context, { props: n } = this, r = this.buildDayTableModel(n.dateProfile, t), i = e.dayHeaders && v(ce, {
			ref: this.headerRef,
			dateProfile: n.dateProfile,
			dates: r.headerDates,
			datesRepDistinctDays: r.rowCnt === 1
		}), a = (t) => v(Ye, {
			ref: this.tableRef,
			dateProfile: n.dateProfile,
			dayTableModel: r,
			businessHours: n.businessHours,
			dateSelection: n.dateSelection,
			eventStore: n.eventStore,
			eventUiBases: n.eventUiBases,
			eventSelection: n.eventSelection,
			eventDrag: n.eventDrag,
			eventResize: n.eventResize,
			nextDayThreshold: e.nextDayThreshold,
			colGroupNode: t.tableColGroupNode,
			tableMinWidth: t.tableMinWidth,
			dayMaxEvents: e.dayMaxEvents,
			dayMaxEventRows: e.dayMaxEventRows,
			showWeekNumbers: e.weekNumbers,
			expandRows: !n.isHeightAuto,
			headerAlignElRef: this.headerElRef,
			clientWidth: t.clientWidth,
			clientHeight: t.clientHeight,
			forPrint: n.forPrint
		});
		return e.dayMinWidth ? this.renderHScrollLayout(i, a, r.colCnt, e.dayMinWidth) : this.renderSimpleLayout(i, a);
	}
};
function Ze(e, t) {
	return new R(new de(e.renderRange, t), /year|month|week/.test(e.currentRangeUnit));
}
var Qe = class extends me {
	buildRenderRange(e, t, n) {
		let r = super.buildRenderRange(e, t, n), { props: i } = this;
		return $e({
			currentRange: r,
			snapToWeek: /^(year|month)$/.test(t),
			fixedWeekCount: i.fixedWeekCount,
			dateEnv: i.dateEnv
		});
	}
};
function $e(e) {
	let { dateEnv: t, currentRange: n } = e, { start: r, end: i } = n, a;
	if (e.snapToWeek && (r = t.startOfWeek(r), a = t.startOfWeek(i), a.valueOf() !== i.valueOf() && (i = x(a, 1))), e.fixedWeekCount) {
		let e = t.startOfWeek(t.startOfMonth(b(n.end, -1))), r = Math.ceil(m(e, i));
		i = x(i, 6 - r);
	}
	return {
		start: r,
		end: i
	};
}
H(":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}");
//#endregion
//#region node_modules/@fullcalendar/daygrid/index.js
var et = P({
	name: "@fullcalendar/daygrid",
	initialView: "dayGridMonth",
	views: {
		dayGrid: {
			component: Xe,
			dateProfileGeneratorClass: Qe
		},
		dayGridDay: {
			type: "dayGrid",
			duration: { days: 1 }
		},
		dayGridWeek: {
			type: "dayGrid",
			duration: { weeks: 1 }
		},
		dayGridMonth: {
			type: "dayGrid",
			duration: { months: 1 },
			fixedWeekCount: !0
		},
		dayGridYear: {
			type: "dayGrid",
			duration: { years: 1 }
		}
	}
}), tt = class extends p {
	getKeyInfo() {
		return {
			allDay: {},
			timed: {}
		};
	}
	getKeysForDateSpan(e) {
		return e.allDay ? ["allDay"] : ["timed"];
	}
	getKeysForEventDef(e) {
		return e.allDay ? he(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
	}
}, nt = W({
	hour: "numeric",
	minute: "2-digit",
	omitZeroMinute: !0,
	meridiem: "short"
});
function rt(e) {
	let t = [
		"fc-timegrid-slot",
		"fc-timegrid-slot-label",
		e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
	];
	return v(g.Consumer, null, (n) => {
		if (!e.isLabeled) return v("td", {
			className: t.join(" "),
			"data-time": e.isoTimeStr
		});
		let { dateEnv: r, options: i, viewApi: a } = n, o = i.slotLabelFormat == null ? nt : Array.isArray(i.slotLabelFormat) ? W(i.slotLabelFormat[0]) : W(i.slotLabelFormat), s = {
			level: 0,
			time: e.time,
			date: r.toDate(e.date),
			view: a,
			text: r.format(e.date, o)
		};
		return v(B, {
			elTag: "td",
			elClasses: t,
			elAttrs: { "data-time": e.isoTimeStr },
			renderProps: s,
			generatorName: "slotLabelContent",
			customGenerator: i.slotLabelContent,
			defaultGenerator: it,
			classNameGenerator: i.slotLabelClassNames,
			didMount: i.slotLabelDidMount,
			willUnmount: i.slotLabelWillUnmount
		}, (e) => v("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" }, v(e, {
			elTag: "div",
			elClasses: ["fc-timegrid-slot-label-cushion", "fc-scrollgrid-shrink-cushion"]
		})));
	});
}
function it(e) {
	return e.text;
}
var at = class extends O {
	render() {
		return this.props.slatMetas.map((e) => v("tr", { key: e.key }, v(rt, Object.assign({}, e))));
	}
}, ot = W({ week: "short" }), st = 5, ct = class extends T {
	constructor() {
		super(...arguments), this.allDaySplitter = new tt(), this.headerElRef = G(), this.rootElRef = G(), this.scrollerElRef = G(), this.state = { slatCoords: null }, this.handleScrollTopRequest = (e) => {
			let t = this.scrollerElRef.current;
			t && (t.scrollTop = e);
		}, this.renderHeadAxis = (e, t = "") => {
			let { options: n } = this.context, { dateProfile: r } = this.props, i = r.renderRange, a = s(i.start, i.end) === 1 ? k(this.context, i.start, "week") : {};
			return n.weekNumbers && e === "day" ? v(be, {
				elTag: "th",
				elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
				elAttrs: { "aria-hidden": !0 },
				date: i.start,
				defaultFormat: ot
			}, (e) => v("div", {
				className: [
					"fc-timegrid-axis-frame",
					"fc-scrollgrid-shrink-frame",
					"fc-timegrid-axis-frame-liquid"
				].join(" "),
				style: { height: t }
			}, v(e, {
				elTag: "a",
				elClasses: [
					"fc-timegrid-axis-cushion",
					"fc-scrollgrid-shrink-cushion",
					"fc-scrollgrid-sync-inner"
				],
				elAttrs: a
			}))) : v("th", {
				"aria-hidden": !0,
				className: "fc-timegrid-axis"
			}, v("div", {
				className: "fc-timegrid-axis-frame",
				style: { height: t }
			}));
		}, this.renderTableRowAxis = (e) => {
			let { options: t, viewApi: n } = this.context;
			return v(B, {
				elTag: "td",
				elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
				elAttrs: { "aria-hidden": !0 },
				renderProps: {
					text: t.allDayText,
					view: n
				},
				generatorName: "allDayContent",
				customGenerator: t.allDayContent,
				defaultGenerator: lt,
				classNameGenerator: t.allDayClassNames,
				didMount: t.allDayDidMount,
				willUnmount: t.allDayWillUnmount
			}, (t) => v("div", {
				className: [
					"fc-timegrid-axis-frame",
					"fc-scrollgrid-shrink-frame",
					e == null ? " fc-timegrid-axis-frame-liquid" : ""
				].join(" "),
				style: { height: e }
			}, v(t, {
				elTag: "span",
				elClasses: [
					"fc-timegrid-axis-cushion",
					"fc-scrollgrid-shrink-cushion",
					"fc-scrollgrid-sync-inner"
				]
			})));
		}, this.handleSlatCoords = (e) => {
			this.setState({ slatCoords: e });
		};
	}
	renderSimpleLayout(e, t, n) {
		let { context: r, props: i } = this, a = [], o = M(r.options);
		return e && a.push({
			type: "header",
			key: "header",
			isSticky: o,
			chunk: {
				elRef: this.headerElRef,
				tableClassName: "fc-col-header",
				rowContent: e
			}
		}), t && (a.push({
			type: "body",
			key: "all-day",
			chunk: { content: t }
		}), a.push({
			type: "body",
			key: "all-day-divider",
			outerContent: v("tr", {
				role: "presentation",
				className: "fc-scrollgrid-section"
			}, v("td", { className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded") }))
		})), a.push({
			type: "body",
			key: "body",
			liquid: !0,
			expandRows: !!r.options.expandRows,
			chunk: {
				scrollerElRef: this.scrollerElRef,
				content: n
			}
		}), v(d, {
			elRef: this.rootElRef,
			elClasses: ["fc-timegrid"],
			viewSpec: r.viewSpec
		}, v(A, {
			liquid: !i.isHeightAuto && !i.forPrint,
			collapsibleWidth: i.forPrint,
			cols: [{ width: "shrink" }],
			sections: a
		}));
	}
	renderHScrollLayout(e, t, n, r, i, a, o) {
		let s = this.context.pluginHooks.scrollGridImpl;
		if (!s) throw Error("No ScrollGrid implementation");
		let { context: c, props: l } = this, u = !l.forPrint && M(c.options), f = !l.forPrint && se(c.options), p = [];
		e && p.push({
			type: "header",
			key: "header",
			isSticky: u,
			syncRowHeights: !0,
			chunks: [{
				key: "axis",
				rowContent: (e) => v("tr", { role: "presentation" }, this.renderHeadAxis("day", e.rowSyncHeights[0]))
			}, {
				key: "cols",
				elRef: this.headerElRef,
				tableClassName: "fc-col-header",
				rowContent: e
			}]
		}), t && (p.push({
			type: "body",
			key: "all-day",
			syncRowHeights: !0,
			chunks: [{
				key: "axis",
				rowContent: (e) => v("tr", { role: "presentation" }, this.renderTableRowAxis(e.rowSyncHeights[0]))
			}, {
				key: "cols",
				content: t
			}]
		}), p.push({
			key: "all-day-divider",
			type: "body",
			outerContent: v("tr", {
				role: "presentation",
				className: "fc-scrollgrid-section"
			}, v("td", {
				colSpan: 2,
				className: "fc-timegrid-divider " + c.theme.getClass("tableCellShaded")
			}))
		}));
		let m = c.options.nowIndicator;
		return p.push({
			type: "body",
			key: "body",
			liquid: !0,
			expandRows: !!c.options.expandRows,
			chunks: [{
				key: "axis",
				content: (e) => v("div", { className: "fc-timegrid-axis-chunk" }, v("table", {
					"aria-hidden": !0,
					style: { height: e.expandRows ? e.clientHeight : "" }
				}, e.tableColGroupNode, v("tbody", null, v(at, { slatMetas: a }))), v("div", { className: "fc-timegrid-now-indicator-container" }, v(y, { unit: m ? "minute" : "day" }, (e) => {
					let t = m && o && o.safeComputeTop(e);
					return typeof t == "number" ? v(U, {
						elClasses: ["fc-timegrid-now-indicator-arrow"],
						elStyle: { top: t },
						isAxis: !0,
						date: e
					}) : null;
				})))
			}, {
				key: "cols",
				scrollerElRef: this.scrollerElRef,
				content: n
			}]
		}), f && p.push({
			key: "footer",
			type: "footer",
			isSticky: !0,
			chunks: [{
				key: "axis",
				content: E
			}, {
				key: "cols",
				content: E
			}]
		}), v(d, {
			elRef: this.rootElRef,
			elClasses: ["fc-timegrid"],
			viewSpec: c.viewSpec
		}, v(s, {
			liquid: !l.isHeightAuto && !l.forPrint,
			forPrint: l.forPrint,
			collapsibleWidth: !1,
			colGroups: [{
				width: "shrink",
				cols: [{ width: "shrink" }]
			}, { cols: [{
				span: r,
				minWidth: i
			}] }],
			sections: p
		}));
	}
	getAllDayMaxEventProps() {
		let { dayMaxEvents: e, dayMaxEventRows: t } = this.context.options;
		return (e === !0 || t === !0) && (e = void 0, t = st), {
			dayMaxEvents: e,
			dayMaxEventRows: t
		};
	}
};
function lt(e) {
	return e.text;
}
var ut = class {
	constructor(e, t, n) {
		this.positions = e, this.dateProfile = t, this.slotDuration = n;
	}
	safeComputeTop(e) {
		let { dateProfile: t } = this;
		if (re(t.currentRange, e)) {
			let n = N(e), r = e.valueOf() - n.valueOf();
			if (r >= S(t.slotMinTime) && r < S(t.slotMaxTime)) return this.computeTimeTop(w(r));
		}
		return null;
	}
	computeDateTop(e, t) {
		return t ||= N(e), this.computeTimeTop(w(e.valueOf() - t.valueOf()));
	}
	computeTimeTop(e) {
		let { positions: t, dateProfile: n } = this, r = t.els.length, i = (e.milliseconds - S(n.slotMinTime)) / S(this.slotDuration), a, o;
		return i = Math.max(0, i), i = Math.min(r, i), a = Math.floor(i), a = Math.min(a, r - 1), o = i - a, t.tops[a] + t.getHeight(a) * o;
	}
}, dt = class extends O {
	render() {
		let { props: e, context: t } = this, { options: n } = t, { slatElRefs: r } = e;
		return v("tbody", null, e.slatMetas.map((i, a) => {
			let o = {
				time: i.time,
				date: t.dateEnv.toDate(i.date),
				view: t.viewApi
			};
			return v("tr", {
				key: i.key,
				ref: r.createRef(i.key)
			}, e.axis && v(rt, Object.assign({}, i)), v(B, {
				elTag: "td",
				elClasses: [
					"fc-timegrid-slot",
					"fc-timegrid-slot-lane",
					!i.isLabeled && "fc-timegrid-slot-minor"
				],
				elAttrs: { "data-time": i.isoTimeStr },
				renderProps: o,
				generatorName: "slotLaneContent",
				customGenerator: n.slotLaneContent,
				classNameGenerator: n.slotLaneClassNames,
				didMount: n.slotLaneDidMount,
				willUnmount: n.slotLaneWillUnmount
			}));
		}));
	}
}, ft = class extends O {
	constructor() {
		super(...arguments), this.rootElRef = G(), this.slatElRefs = new a();
	}
	render() {
		let { props: e, context: t } = this;
		return v("div", {
			ref: this.rootElRef,
			className: "fc-timegrid-slots"
		}, v("table", {
			"aria-hidden": !0,
			className: t.theme.getClass("table"),
			style: {
				minWidth: e.tableMinWidth,
				width: e.clientWidth,
				height: e.minHeight
			}
		}, e.tableColGroupNode, v(dt, {
			slatElRefs: this.slatElRefs,
			axis: e.axis,
			slatMetas: e.slatMetas
		})));
	}
	componentDidMount() {
		this.updateSizing();
	}
	componentDidUpdate() {
		this.updateSizing();
	}
	componentWillUnmount() {
		this.props.onCoords && this.props.onCoords(null);
	}
	updateSizing() {
		let { context: e, props: t } = this;
		t.onCoords && t.clientWidth !== null && this.rootElRef.current.offsetHeight && t.onCoords(new ut(new o(this.rootElRef.current, pt(this.slatElRefs.currentMap, t.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
	}
};
function pt(e, t) {
	return t.map((t) => e[t.key]);
}
function X(e, t) {
	let n = [], r;
	for (r = 0; r < t; r += 1) n.push([]);
	if (e) for (r = 0; r < e.length; r += 1) n[e[r].col].push(e[r]);
	return n;
}
function mt(e, t) {
	let n = [];
	if (e) {
		for (let r = 0; r < t; r += 1) n[r] = {
			affectedInstances: e.affectedInstances,
			isEvent: e.isEvent,
			segs: []
		};
		for (let t of e.segs) n[t.col].segs.push(t);
	} else for (let e = 0; e < t; e += 1) n[e] = null;
	return n;
}
var ht = class extends O {
	render() {
		let { props: e } = this;
		return v(_, {
			elClasses: ["fc-timegrid-more-link"],
			elStyle: {
				top: e.top,
				bottom: e.bottom
			},
			allDayDate: null,
			moreCnt: e.hiddenSegs.length,
			allSegs: e.hiddenSegs,
			hiddenSegs: e.hiddenSegs,
			extraDateSpan: e.extraDateSpan,
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			popoverContent: () => At(e.hiddenSegs, e),
			defaultGenerator: gt,
			forceTimed: !0
		}, (e) => v(e, {
			elTag: "div",
			elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"]
		}));
	}
};
function gt(e) {
	return e.shortText;
}
function _t(e, n, r) {
	let i = new t();
	n != null && (i.strictOrder = n), r != null && (i.maxStackCnt = r);
	let a = fe(i.addSegs(e)), o = vt(i);
	return o = Ct(o, 1), {
		segRects: wt(o),
		hiddenGroups: a
	};
}
function vt(e) {
	let { entriesByLevel: t } = e, n = Z((e, t) => e + ":" + t, (r, i) => {
		let a = yt(St(e, r, i), n), o = t[r][i];
		return [Object.assign(Object.assign({}, o), { nextLevelNodes: a[0] }), o.thickness + a[1]];
	});
	return yt(t.length ? {
		level: 0,
		lateralStart: 0,
		lateralEnd: t[0].length
	} : null, n)[0];
}
function yt(e, t) {
	if (!e) return [[], 0];
	let { level: n, lateralStart: r, lateralEnd: i } = e, a = r, o = [];
	for (; a < i;) o.push(t(n, a)), a += 1;
	return o.sort(bt), [o.map(xt), o[0][1]];
}
function bt(e, t) {
	return t[1] - e[1];
}
function xt(e) {
	return e[0];
}
function St(t, n, r) {
	let { levelCoords: i, entriesByLevel: a } = t, o = a[n][r], s = i[n] + o.thickness, c = i.length, l = n;
	for (; l < c && i[l] < s; l += 1);
	for (; l < c; l += 1) {
		let t = a[l], n, r = e(t, o.span.start, ne), i = r[0] + r[1], s = i;
		for (; (n = t[s]) && n.span.start < o.span.end;) s += 1;
		if (i < s) return {
			level: l,
			lateralStart: i,
			lateralEnd: s
		};
	}
	return null;
}
function Ct(e, t) {
	let n = Z((e, t, n) => D(e), (e, r, i) => {
		let { nextLevelNodes: a, thickness: o } = e, s = o + i, c = o / s, l, u = [];
		if (!a.length) l = t;
		else for (let e of a) if (l === void 0) {
			let t = n(e, r, s);
			l = t[0], u.push(t[1]);
		} else {
			let t = n(e, l, 0);
			u.push(t[1]);
		}
		let d = (l - r) * c;
		return [l - d, Object.assign(Object.assign({}, e), {
			thickness: d,
			nextLevelNodes: u
		})];
	});
	return e.map((e) => n(e, 0, 0)[1]);
}
function wt(e) {
	let t = [], n = Z((e, t, n) => D(e), (e, n, i) => {
		let a = Object.assign(Object.assign({}, e), {
			levelCoord: n,
			stackDepth: i,
			stackForward: 0
		});
		return t.push(a), a.stackForward = r(e.nextLevelNodes, n + e.thickness, i + 1) + 1;
	});
	function r(e, t, r) {
		let i = 0;
		for (let a of e) i = Math.max(n(a, t, r), i);
		return i;
	}
	return r(e, 0, 0), t;
}
function Z(e, t) {
	let n = {};
	return (...r) => {
		let i = e(...r);
		return i in n ? n[i] : n[i] = t(...r);
	};
}
function Tt(e, t, n = null, r = 0) {
	let i = [];
	if (n) for (let a = 0; a < e.length; a += 1) {
		let o = e[a], s = n.computeDateTop(o.start, t), c = Math.max(s + (r || 0), n.computeDateTop(o.end, t));
		i.push({
			start: Math.round(s),
			end: Math.round(c)
		});
	}
	return i;
}
function Et(e, t, n, r) {
	let i = [], a = [];
	for (let n = 0; n < e.length; n += 1) {
		let r = t[n];
		r ? i.push({
			index: n,
			thickness: 1,
			span: r
		}) : a.push(e[n]);
	}
	let { segRects: o, hiddenGroups: s } = _t(i, n, r), c = [];
	for (let t of o) c.push({
		seg: e[t.index],
		rect: t
	});
	for (let e of a) c.push({
		seg: e,
		rect: null
	});
	return {
		segPlacements: c,
		hiddenGroups: s
	};
}
var Dt = W({
	hour: "numeric",
	minute: "2-digit",
	meridiem: !1
}), Ot = class extends O {
	render() {
		return v(h, Object.assign({}, this.props, {
			elClasses: [
				"fc-timegrid-event",
				"fc-v-event",
				this.props.isShort && "fc-timegrid-event-short"
			],
			defaultTimeFormat: Dt
		}));
	}
}, kt = class extends O {
	constructor() {
		super(...arguments), this.sortEventSegs = c(z);
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = n.selectMirror, i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || r && e.dateSelectionSegs || [], a = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}, o = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
		return v(V, {
			elTag: "td",
			elRef: e.elRef,
			elClasses: ["fc-timegrid-col", ...e.extraClassNames || []],
			elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs),
			date: e.date,
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			extraRenderProps: e.extraRenderProps
		}, (t) => v("div", { className: "fc-timegrid-col-frame" }, v("div", { className: "fc-timegrid-col-bg" }, this.renderFillSegs(e.businessHourSegs, "non-business"), this.renderFillSegs(e.bgEventSegs, "bg-event"), this.renderFillSegs(e.dateSelectionSegs, "highlight")), v("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(o, a, !1, !1, !1)), v("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(i, {}, !!e.eventDrag, !!e.eventResize, !!r, "mirror")), v("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)), pe(n) && v(t, {
			elTag: "div",
			elClasses: ["fc-timegrid-col-misc"]
		})));
	}
	renderFgSegs(e, t, n, r, i, a) {
		let { props: o } = this;
		return o.forPrint ? At(e, o) : this.renderPositionedFgSegs(e, t, n, r, i, a);
	}
	renderPositionedFgSegs(e, t, n, r, i, a) {
		let { eventMaxStack: o, eventShortHeight: s, eventOrderStrict: c, eventMinHeight: l } = this.context.options, { date: u, slatCoords: d, eventSelection: f, todayRange: p, nowDate: m } = this.props, h = n || r || i, { segPlacements: g, hiddenGroups: _ } = Et(e, Tt(e, u, d, l), c, o);
		return v(C, null, this.renderHiddenGroups(_, e), g.map((e) => {
			let { seg: o, rect: c } = e, l = o.eventRange.instance.instanceId, u = h || !!(!t[l] && c), d = Q(c && c.span), g = !h && c ? this.computeSegHStyle(c) : {
				left: 0,
				right: 0
			}, _ = !!c && c.stackForward > 0, y = !!c && c.span.end - c.span.start < s;
			return v("div", {
				className: "fc-timegrid-event-harness" + (_ ? " fc-timegrid-event-harness-inset" : ""),
				key: a || l,
				style: Object.assign(Object.assign({ visibility: u ? "" : "hidden" }, d), g)
			}, v(Ot, Object.assign({
				seg: o,
				isDragging: n,
				isResizing: r,
				isDateSelecting: i,
				isSelected: l === f,
				isShort: y
			}, I(o, p, m))));
		}));
	}
	renderHiddenGroups(e, t) {
		let { extraDateSpan: n, dateProfile: r, todayRange: i, nowDate: a, eventSelection: o, eventDrag: s, eventResize: c } = this.props;
		return v(C, null, e.map((e) => {
			let l = Q(e.span), u = jt(e.entries, t);
			return v(ht, {
				key: ge(ue(u)),
				hiddenSegs: u,
				top: l.top,
				bottom: l.bottom,
				extraDateSpan: n,
				dateProfile: r,
				todayRange: i,
				nowDate: a,
				eventSelection: o,
				eventDrag: s,
				eventResize: c
			});
		}));
	}
	renderFillSegs(e, t) {
		let { props: n, context: r } = this;
		return v(C, null, Tt(e, n.date, n.slatCoords, r.options.eventMinHeight).map((r, i) => {
			let a = e[i];
			return v("div", {
				key: F(a.eventRange),
				className: "fc-timegrid-bg-harness",
				style: Q(r)
			}, t === "bg-event" ? v(ie, Object.assign({ seg: a }, I(a, n.todayRange, n.nowDate))) : L(t));
		}));
	}
	renderNowIndicator(e) {
		let { slatCoords: t, date: n } = this.props;
		return t ? e.map((e, r) => v(U, {
			key: r,
			elClasses: ["fc-timegrid-now-indicator-line"],
			elStyle: { top: t.computeDateTop(e.start, n) },
			isAxis: !1,
			date: n
		})) : null;
	}
	computeSegHStyle(e) {
		let { isRtl: t, options: n } = this.context, r = n.slotEventOverlap, i = e.levelCoord, a = e.levelCoord + e.thickness, o, s;
		r && (a = Math.min(1, i + (a - i) * 2)), t ? (o = 1 - a, s = i) : (o = i, s = 1 - a);
		let c = {
			zIndex: e.stackDepth + 1,
			left: o * 100 + "%",
			right: s * 100 + "%"
		};
		return r && !e.stackForward && (c[t ? "marginLeft" : "marginRight"] = 20), c;
	}
};
function At(e, { todayRange: t, nowDate: n, eventSelection: r, eventDrag: i, eventResize: a }) {
	let o = (i ? i.affectedInstances : null) || (a ? a.affectedInstances : null) || {};
	return v(C, null, e.map((e) => {
		let i = e.eventRange.instance.instanceId;
		return v("div", {
			key: i,
			style: { visibility: o[i] ? "hidden" : "" }
		}, v(Ot, Object.assign({
			seg: e,
			isDragging: !1,
			isResizing: !1,
			isDateSelecting: !1,
			isSelected: i === r,
			isShort: !1
		}, I(e, t, n))));
	}));
}
function Q(e) {
	return e ? {
		top: e.start,
		bottom: -e.end
	} : {
		top: "",
		bottom: ""
	};
}
function jt(e, t) {
	return e.map((e) => t[e.index]);
}
var Mt = class extends O {
	constructor() {
		super(...arguments), this.splitFgEventSegs = c(X), this.splitBgEventSegs = c(X), this.splitBusinessHourSegs = c(X), this.splitNowIndicatorSegs = c(X), this.splitDateSelectionSegs = c(X), this.splitEventDrag = c(mt), this.splitEventResize = c(mt), this.rootElRef = G(), this.cellElRefs = new a();
	}
	render() {
		let { props: e, context: t } = this, n = t.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), r = e.cells.length, i = this.splitFgEventSegs(e.fgEventSegs, r), a = this.splitBgEventSegs(e.bgEventSegs, r), o = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitNowIndicatorSegs(e.nowIndicatorSegs, r), c = this.splitDateSelectionSegs(e.dateSelectionSegs, r), l = this.splitEventDrag(e.eventDrag, r), u = this.splitEventResize(e.eventResize, r);
		return v("div", {
			className: "fc-timegrid-cols",
			ref: this.rootElRef
		}, v("table", {
			role: "presentation",
			style: {
				minWidth: e.tableMinWidth,
				width: e.clientWidth
			}
		}, e.tableColGroupNode, v("tbody", { role: "presentation" }, v("tr", { role: "row" }, e.axis && v("td", {
			"aria-hidden": !0,
			className: "fc-timegrid-col fc-timegrid-axis"
		}, v("div", { className: "fc-timegrid-col-frame" }, v("div", { className: "fc-timegrid-now-indicator-container" }, typeof n == "number" && v(U, {
			elClasses: ["fc-timegrid-now-indicator-arrow"],
			elStyle: { top: n },
			isAxis: !0,
			date: e.nowDate
		})))), e.cells.map((t, n) => v(kt, {
			key: t.key,
			elRef: this.cellElRefs.createRef(t.key),
			dateProfile: e.dateProfile,
			date: t.date,
			nowDate: e.nowDate,
			todayRange: e.todayRange,
			extraRenderProps: t.extraRenderProps,
			extraDataAttrs: t.extraDataAttrs,
			extraClassNames: t.extraClassNames,
			extraDateSpan: t.extraDateSpan,
			fgEventSegs: i[n],
			bgEventSegs: a[n],
			businessHourSegs: o[n],
			nowIndicatorSegs: s[n],
			dateSelectionSegs: c[n],
			eventDrag: l[n],
			eventResize: u[n],
			slatCoords: e.slatCoords,
			eventSelection: e.eventSelection,
			forPrint: e.forPrint
		}))))));
	}
	componentDidMount() {
		this.updateCoords();
	}
	componentDidUpdate() {
		this.updateCoords();
	}
	updateCoords() {
		let { props: e } = this;
		e.onColCoords && e.clientWidth !== null && e.onColCoords(new o(this.rootElRef.current, Nt(this.cellElRefs.currentMap, e.cells), !0, !1));
	}
};
function Nt(e, t) {
	return t.map((t) => e[t.key]);
}
var $ = class extends T {
	constructor() {
		super(...arguments), this.processSlotOptions = c(Pt), this.state = { slatCoords: null }, this.handleRootEl = (e) => {
			e ? this.context.registerInteractiveComponent(this, {
				el: e,
				isHitComboAllowed: this.props.isHitComboAllowed
			}) : this.context.unregisterInteractiveComponent(this);
		}, this.handleScrollRequest = (e) => {
			let { onScrollTopRequest: t } = this.props, { slatCoords: n } = this.state;
			if (t && n) {
				if (e.time) {
					let r = n.computeTimeTop(e.time);
					r = Math.ceil(r), r && (r += 1), t(r);
				}
				return !0;
			}
			return !1;
		}, this.handleColCoords = (e) => {
			this.colCoords = e;
		}, this.handleSlatCoords = (e) => {
			this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
		};
	}
	render() {
		let { props: e, state: t } = this;
		return v("div", {
			className: "fc-timegrid-body",
			ref: this.handleRootEl,
			style: {
				width: e.clientWidth,
				minWidth: e.tableMinWidth
			}
		}, v(ft, {
			axis: e.axis,
			dateProfile: e.dateProfile,
			slatMetas: e.slatMetas,
			clientWidth: e.clientWidth,
			minHeight: e.expandRows ? e.clientHeight : "",
			tableMinWidth: e.tableMinWidth,
			tableColGroupNode: e.axis ? e.tableColGroupNode : null,
			onCoords: this.handleSlatCoords
		}), v(Mt, {
			cells: e.cells,
			axis: e.axis,
			dateProfile: e.dateProfile,
			businessHourSegs: e.businessHourSegs,
			bgEventSegs: e.bgEventSegs,
			fgEventSegs: e.fgEventSegs,
			dateSelectionSegs: e.dateSelectionSegs,
			eventSelection: e.eventSelection,
			eventDrag: e.eventDrag,
			eventResize: e.eventResize,
			todayRange: e.todayRange,
			nowDate: e.nowDate,
			nowIndicatorSegs: e.nowIndicatorSegs,
			clientWidth: e.clientWidth,
			tableMinWidth: e.tableMinWidth,
			tableColGroupNode: e.tableColGroupNode,
			slatCoords: t.slatCoords,
			onColCoords: this.handleColCoords,
			forPrint: e.forPrint
		}));
	}
	componentDidMount() {
		this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
	}
	componentDidUpdate(e) {
		this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
	}
	componentWillUnmount() {
		this.scrollResponder.detach();
	}
	queryHit(e, t) {
		let { dateEnv: r, options: i } = this.context, { colCoords: a } = this, { dateProfile: o } = this.props, { slatCoords: s } = this.state, { snapDuration: c, snapsPerSlot: u } = this.processSlotOptions(this.props.slotDuration, i.snapDuration), d = a.leftToIndex(e), f = s.positions.topToIndex(t);
		if (d != null && f != null) {
			let e = this.props.cells[d], i = s.positions.tops[f], p = s.positions.getHeight(f), m = (t - i) / p, h = Math.floor(m * u), g = f * u + h, _ = this.props.cells[d].date, v = l(o.slotMinTime, n(c, g)), y = r.add(_, v), ee = r.add(y, c);
			return {
				dateProfile: o,
				dateSpan: Object.assign({
					range: {
						start: y,
						end: ee
					},
					allDay: !1
				}, e.extraDateSpan),
				dayEl: a.els[d],
				rect: {
					left: a.lefts[d],
					right: a.rights[d],
					top: i,
					bottom: i + p
				},
				layer: 0
			};
		}
		return null;
	}
};
function Pt(e, t) {
	let n = t || e, r = K(e, n);
	return r === null && (n = e, r = 1), {
		snapDuration: n,
		snapsPerSlot: r
	};
}
var Ft = class extends f {
	sliceRange(e, t) {
		let n = [];
		for (let r = 0; r < t.length; r += 1) {
			let i = ye(e, t[r]);
			i && n.push({
				start: i.start,
				end: i.end,
				isStart: i.start.valueOf() === e.start.valueOf(),
				isEnd: i.end.valueOf() === e.end.valueOf(),
				col: r
			});
		}
		return n;
	}
}, It = class extends T {
	constructor() {
		super(...arguments), this.buildDayRanges = c(Lt), this.slicer = new Ft(), this.timeColsRef = G();
	}
	render() {
		let { props: e, context: t } = this, { dateProfile: n, dayTableModel: r } = e, { nowIndicator: i, nextDayThreshold: a } = t.options, o = this.buildDayRanges(r, n, t.dateEnv);
		return v(y, { unit: i ? "minute" : "day" }, (s, c) => v($, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, n, null, t, o), {
			forPrint: e.forPrint,
			axis: e.axis,
			dateProfile: n,
			slatMetas: e.slatMetas,
			slotDuration: e.slotDuration,
			cells: r.cells[0],
			tableColGroupNode: e.tableColGroupNode,
			tableMinWidth: e.tableMinWidth,
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight,
			expandRows: e.expandRows,
			nowDate: s,
			nowIndicatorSegs: i && this.slicer.sliceNowDate(s, n, a, t, o),
			todayRange: c,
			onScrollTopRequest: e.onScrollTopRequest,
			onSlatCoords: e.onSlatCoords
		})));
	}
};
function Lt(e, t, n) {
	let r = [];
	for (let i of e.headerDates) r.push({
		start: n.add(i, t.slotMinTime),
		end: n.add(i, t.slotMaxTime)
	});
	return r;
}
var Rt = [
	{ hours: 1 },
	{ minutes: 30 },
	{ minutes: 15 },
	{ seconds: 30 },
	{ seconds: 15 }
];
function zt(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Date(0), o = e, s = w(0), c = n || Bt(r), d = [];
	for (; S(o) < S(t);) {
		let e = i.add(a, o), t = K(s, c) !== null;
		d.push({
			date: e,
			time: o,
			key: e.toISOString(),
			isoTimeStr: u(e),
			isLabeled: t
		}), o = l(o, r), s = l(s, r);
	}
	return d;
}
function Bt(e) {
	let t, n, r;
	for (t = Rt.length - 1; t >= 0; --t) if (n = w(Rt[t]), r = K(n, e), r !== null && r > 1) return n;
	return e;
}
var Vt = class extends ct {
	constructor() {
		super(...arguments), this.buildTimeColsModel = c(Ht), this.buildSlatMetas = c(zt);
	}
	render() {
		let { options: e, dateEnv: t, dateProfileGenerator: n } = this.context, { props: r } = this, { dateProfile: i } = r, a = this.buildTimeColsModel(i, n), o = this.allDaySplitter.splitProps(r), s = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, t), { dayMinWidth: c } = e, l = !c, u = c, d = e.dayHeaders && v(ce, {
			dates: a.headerDates,
			dateProfile: i,
			datesRepDistinctDays: !0,
			renderIntro: l ? this.renderHeadAxis : null
		}), f = e.allDaySlot !== !1 && ((t) => v(Ye, Object.assign({}, o.allDay, {
			dateProfile: i,
			dayTableModel: a,
			nextDayThreshold: e.nextDayThreshold,
			tableMinWidth: t.tableMinWidth,
			colGroupNode: t.tableColGroupNode,
			renderRowIntro: l ? this.renderTableRowAxis : null,
			showWeekNumbers: !1,
			expandRows: !1,
			headerAlignElRef: this.headerElRef,
			clientWidth: t.clientWidth,
			clientHeight: t.clientHeight,
			forPrint: r.forPrint
		}, this.getAllDayMaxEventProps()))), p = (t) => v(It, Object.assign({}, o.timed, {
			dayTableModel: a,
			dateProfile: i,
			axis: l,
			slotDuration: e.slotDuration,
			slatMetas: s,
			forPrint: r.forPrint,
			tableColGroupNode: t.tableColGroupNode,
			tableMinWidth: t.tableMinWidth,
			clientWidth: t.clientWidth,
			clientHeight: t.clientHeight,
			onSlatCoords: this.handleSlatCoords,
			expandRows: t.expandRows,
			onScrollTopRequest: this.handleScrollTopRequest
		}));
		return u ? this.renderHScrollLayout(d, f, p, a.colCnt, c, s, this.state.slatCoords) : this.renderSimpleLayout(d, f, p);
	}
};
function Ht(e, t) {
	return new R(new de(e.renderRange, t), !1);
}
H(".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:\"\\00a0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}");
//#endregion
//#region node_modules/@fullcalendar/timegrid/index.js
var Ut = P({
	name: "@fullcalendar/timegrid",
	initialView: "timeGridWeek",
	optionRefiners: { allDaySlot: Boolean },
	views: {
		timeGrid: {
			component: Vt,
			usesMinMaxTime: !0,
			allDaySlot: !0,
			slotDuration: "00:30:00",
			slotEventOverlap: !0
		},
		timeGridDay: {
			type: "timeGrid",
			duration: { days: 1 }
		},
		timeGridWeek: {
			type: "timeGrid",
			duration: { weeks: 1 }
		}
	}
});
//#endregion
export { Lt as a, et as c, Qe as d, Ue as f, $e as h, ct as i, Je as l, Ze as m, Ft as n, zt as o, xe as p, $ as r, Ht as s, Ut as t, Ke as u };

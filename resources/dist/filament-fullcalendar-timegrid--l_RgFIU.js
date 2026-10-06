import { $n as e, $t as t, A as n, B as r, C as i, Ct as a, F as o, Ft as s, H as c, I as l, It as u, L as d, Lt as f, M as p, O as m, Pn as h, Q as g, S as _, T as v, Tn as y, Tt as b, Un as ee, V as te, Wt as ne, Y as x, Z as re, Zn as S, _ as ie, _n as ae, ar as C, b as w, c as oe, cn as se, d as ce, dr as T, en as E, et as le, f as ue, fn as de, fr as D, hn as fe, i as pe, in as me, ir as O, j as he, k, kn as A, l as ge, ln as j, lt as _e, n as M, nn as N, nr as P, nt as F, o as I, on as ve, pr as L, r as R, rn as z, rt as ye, s as B, tt as be, u as xe, ur as V, vt as H, w as U, xt as W, z as G } from "./filament-fullcalendar-core-IEdKpiTH.js";
//#region node_modules/@fullcalendar/daygrid/internal.js
var Se = class extends B {
	constructor() {
		super(...arguments), this.headerElRef = D();
	}
	renderSimpleLayout(e, t) {
		let { props: n, context: r } = this, i = [], a = z(r.options);
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
		}), L(o, {
			elClasses: ["fc-daygrid"],
			viewSpec: r.viewSpec
		}, L(k, {
			liquid: !n.isHeightAuto && !n.forPrint,
			collapsibleWidth: n.forPrint,
			cols: [],
			sections: i
		}));
	}
	renderHScrollLayout(t, n, r, i) {
		let a = this.context.pluginHooks.scrollGridImpl;
		if (!a) throw Error("No ScrollGrid implementation");
		let { props: s, context: c } = this, l = !s.forPrint && z(c.options), u = !s.forPrint && N(c.options), d = [];
		return t && d.push({
			type: "header",
			key: "header",
			isSticky: l,
			chunks: [{
				key: "main",
				elRef: this.headerElRef,
				tableClassName: "fc-col-header",
				rowContent: t
			}]
		}), d.push({
			type: "body",
			key: "body",
			liquid: !0,
			chunks: [{
				key: "main",
				content: n
			}]
		}), u && d.push({
			type: "footer",
			key: "footer",
			isSticky: !0,
			chunks: [{
				key: "main",
				content: e
			}]
		}), L(o, {
			elClasses: ["fc-daygrid"],
			viewSpec: c.viewSpec
		}, L(a, {
			liquid: !s.isHeightAuto && !s.forPrint,
			forPrint: s.forPrint,
			collapsibleWidth: s.forPrint,
			colGroups: [{ cols: [{
				span: r,
				minWidth: i
			}] }],
			sections: d
		}));
	}
};
function K(e, t) {
	let n = [];
	for (let e = 0; e < t; e += 1) n[e] = [];
	for (let t of e) n[t.row].push(t);
	return n;
}
function q(e, t) {
	let n = [];
	for (let e = 0; e < t; e += 1) n[e] = [];
	for (let t of e) n[t.firstCol].push(t);
	return n;
}
function Ce(e, t) {
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
var we = W({
	hour: "numeric",
	minute: "2-digit",
	omitZeroMinute: !0,
	meridiem: "narrow"
});
function Te(e) {
	let { display: t } = e.eventRange.ui;
	return t === "list-item" || t === "auto" && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd;
}
var Ee = class extends R {
	render() {
		let { props: e } = this;
		return L(p, Object.assign({}, e, {
			elClasses: [
				"fc-daygrid-event",
				"fc-daygrid-block-event",
				"fc-h-event"
			],
			defaultTimeFormat: we,
			defaultDisplayEventEnd: e.defaultDisplayEventEnd,
			disableResizing: !e.seg.eventRange.def.allDay
		}));
	}
}, De = class extends R {
	render() {
		let { props: e, context: n } = this, { options: r } = n, { seg: i } = e, a = ye(i, r.eventTimeFormat || we, n, !0, e.defaultDisplayEventEnd);
		return L(ie, Object.assign({}, e, {
			elTag: "a",
			elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
			elAttrs: t(e.seg, n),
			defaultGenerator: Oe,
			timeText: a,
			isResizing: !1,
			isDateSelecting: !1
		}));
	}
};
function Oe(e) {
	return L(T, null, L("div", {
		className: "fc-daygrid-event-dot",
		style: { borderColor: e.borderColor || e.backgroundColor }
	}), e.timeText && L("div", { className: "fc-event-time" }, e.timeText), L("div", { className: "fc-event-title" }, e.event.title || L(T, null, "\xA0")));
}
var ke = class extends R {
	constructor() {
		super(...arguments), this.compileSegs = A(Ae);
	}
	render() {
		let { props: e } = this, { allSegs: t, invisibleSegs: n } = this.compileSegs(e.singlePlacements);
		return L(w, {
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
				return L(T, null, t.map((t) => {
					let r = t.eventRange.instance.instanceId;
					return L("div", {
						className: "fc-daygrid-event-harness",
						key: r,
						style: { visibility: n[r] ? "hidden" : "" }
					}, Te(t) ? L(De, Object.assign({
						seg: t,
						isDragging: !1,
						isSelected: r === e.eventSelection,
						defaultDisplayEventEnd: !1
					}, E(t, e.todayRange))) : L(Ee, Object.assign({
						seg: t,
						isDragging: !1,
						isResizing: !1,
						isDateSelecting: !1,
						isSelected: r === e.eventSelection,
						defaultDisplayEventEnd: !1
					}, E(t, e.todayRange))));
				}));
			}
		});
	}
};
function Ae(e) {
	let t = [], n = [];
	for (let r of e) t.push(r.seg), r.isVisible || n.push(r.seg);
	return {
		allSegs: t,
		invisibleSegs: n
	};
}
var je = W({ week: "narrow" }), Me = class extends B {
	constructor() {
		super(...arguments), this.rootElRef = D(), this.state = { dayNumberId: me() }, this.handleRootEl = (e) => {
			P(this.rootElRef, e), P(this.props.elRef, e);
		};
	}
	render() {
		let { context: e, props: t, state: n, rootElRef: r } = this, { options: i, dateEnv: a } = e, { date: o, dateProfile: s } = t, c = t.showDayNumber && Pe(o, s.currentRange, a);
		return L(ge, {
			elTag: "td",
			elRef: this.handleRootEl,
			elClasses: ["fc-daygrid-day", ...t.extraClassNames || []],
			elAttrs: Object.assign(Object.assign(Object.assign({}, t.extraDataAttrs), t.showDayNumber ? { "aria-labelledby": n.dayNumberId } : {}), { role: "gridcell" }),
			defaultGenerator: Ne,
			date: o,
			dateProfile: s,
			todayRange: t.todayRange,
			showDayNumber: t.showDayNumber,
			isMonthStart: c,
			extraRenderProps: t.extraRenderProps
		}, (a, s) => L("div", {
			ref: t.innerElRef,
			className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
			style: { minHeight: t.minHeight }
		}, t.showWeekNumber && L(d, {
			elTag: "a",
			elClasses: ["fc-daygrid-week-number"],
			elAttrs: F(e, o, "week"),
			date: o,
			defaultFormat: je
		}), !s.isDisabled && (t.showDayNumber || j(i) || t.forceDayTop) ? L("div", { className: "fc-daygrid-day-top" }, L(a, {
			elTag: "a",
			elClasses: ["fc-daygrid-day-number", c && "fc-daygrid-month-start"],
			elAttrs: Object.assign(Object.assign({}, F(e, o)), { id: n.dayNumberId })
		})) : t.showDayNumber ? L("div", {
			className: "fc-daygrid-day-top",
			style: { visibility: "hidden" }
		}, L("a", { className: "fc-daygrid-day-number" }, "\xA0")) : void 0, L("div", {
			className: "fc-daygrid-day-events",
			ref: t.fgContentElRef
		}, t.fgContent, L("div", {
			className: "fc-daygrid-day-bottom",
			style: { marginTop: t.moreMarginTop }
		}, L(ke, {
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
		}))), L("div", { className: "fc-daygrid-day-bg" }, t.bgContent)));
	}
};
function Ne(e) {
	return e.dayNumberText || L(T, null, "\xA0");
}
function Pe(e, t, n) {
	let { start: r, end: i } = t, a = te(i, -1), o = n.getYear(r), s = n.getMonth(r), c = n.getYear(a), l = n.getMonth(a);
	return !(o === c && s === l) && (e.valueOf() === r.valueOf() || n.getDay(e) === 1 && e.valueOf() < i.valueOf());
}
function Fe(e) {
	return e.eventRange.instance.instanceId + ":" + e.firstCol;
}
function Ie(e) {
	return Fe(e) + ":" + e.lastCol;
}
function Le(e, t, n, r, i, a, o) {
	let s = new Be((t) => i[e[t.index].eventRange.instance.instanceId + ":" + t.span.start + ":" + (t.span.end - 1)] || 1);
	s.allowReslicing = !0, s.strictOrder = r, t === !0 || n === !0 ? (s.maxCoord = a, s.hiddenConsumes = !0) : typeof t == "number" ? s.maxStackCnt = t : typeof n == "number" && (s.maxStackCnt = n, s.hiddenConsumes = !0);
	let c = [], l = [];
	for (let t = 0; t < e.length; t += 1) {
		let n = e[t];
		i[Ie(n)] == null ? l.push(n) : c.push({
			index: t,
			span: {
				start: n.firstCol,
				end: n.lastCol + 1
			}
		});
	}
	let u = s.addSegs(c), { singleColPlacements: d, multiColPlacements: f, leftoverMargins: p } = Re(s.toRects(), e, o), m = [], h = [];
	for (let e of l) {
		f[e.firstCol].push({
			seg: e,
			isVisible: !1,
			isAbsolute: !0,
			absoluteTop: 0,
			marginTop: 0
		});
		for (let t = e.firstCol; t <= e.lastCol; t += 1) d[t].push({
			seg: J(e, t, t + 1, o),
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
			seg: J(n, r.start, r.end, o),
			isVisible: !1,
			isAbsolute: !0,
			absoluteTop: 0,
			marginTop: 0
		});
		for (let e = r.start; e < r.end; e += 1) m[e] += 1, d[e].push({
			seg: J(n, e, e + 1, o),
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
function Re(e, t, n) {
	let r = ze(e, n.length), i = [], a = [], o = [];
	for (let e = 0; e < n.length; e += 1) {
		let s = r[e], c = [], l = 0, u = 0;
		for (let r of s) {
			let i = t[r.index];
			c.push({
				seg: J(i, e, e + 1, n),
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
				seg: J(i, r.span.start, r.span.end, n),
				isVisible: !0,
				isAbsolute: !0,
				absoluteTop: r.levelCoord,
				marginTop: 0
			})) : o && (d.push({
				seg: J(i, r.span.start, r.span.end, n),
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
function ze(e, t) {
	let n = [];
	for (let e = 0; e < t; e += 1) n.push([]);
	for (let t of e) for (let e = t.span.start; e < t.span.end; e += 1) n[e].push(t);
	return n;
}
function J(e, t, n, r) {
	if (e.firstCol === t && e.lastCol === n - 1) return e;
	let i = e.eventRange, a = i.range, o = fe(a, {
		start: r[t].date,
		end: G(r[n - 1].date, 1)
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
var Be = class extends m {
	constructor() {
		super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {};
	}
	addSegs(e) {
		let t = super.addSegs(e), { entriesByLevel: n } = this, r = (e) => !this.forceHidden[g(e)];
		for (let e = 0; e < n.length; e += 1) n[e] = n[e].filter(r);
		return t;
	}
	handleInvalidInsertion(e, t, n) {
		let { entriesByLevel: r, forceHidden: i } = this, { touchingEntry: a, touchingLevel: o, touchingLateral: s } = e;
		if (this.hiddenConsumes && a) {
			let e = g(a);
			if (!i[e]) if (this.allowReslicing) {
				let e = Object.assign(Object.assign({}, a), { span: ae(a.span, t.span) }), c = g(e);
				i[c] = !0, r[o][s] = e, n.push(e), this.splitEntry(a, t, n);
			} else i[e] = !0, n.push(a);
		}
		super.handleInvalidInsertion(e, t, n);
	}
}, Ve = class extends B {
	constructor() {
		super(...arguments), this.cellElRefs = new v(), this.frameElRefs = new v(), this.fgElRefs = new v(), this.segHarnessRefs = new v(), this.rootElRef = D(), this.state = {
			framePositions: null,
			maxContentHeight: null,
			segHeights: {}
		}, this.handleResize = (e) => {
			e && this.updateSizing(!0);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, i = e.cells.length, a = q(e.businessHourSegs, i), o = q(e.bgEventSegs, i), s = q(this.getHighlightSegs(), i), c = q(this.getMirrorSegs(), i), { singleColPlacements: l, multiColPlacements: u, moreCnts: d, moreMarginTops: f } = Le(O(e.fgEventSegs, r.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, r.eventOrderStrict, t.segHeights, t.maxContentHeight, e.cells), p = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
		return L("tr", {
			ref: this.rootElRef,
			role: "row"
		}, e.renderIntro && e.renderIntro(), e.cells.map((t, n) => {
			let r = this.renderFgSegs(n, e.forPrint ? l[n] : u[n], e.todayRange, p), i = this.renderFgSegs(n, He(c[n], u), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, !1);
			return L(Me, {
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
				fgContent: L(T, null, L(T, null, r), L(T, null, i)),
				bgContent: L(T, null, this.renderFillSegs(s[n], "highlight"), this.renderFillSegs(a[n], "non-business"), this.renderFillSegs(o[n], "bg-event")),
				minHeight: e.cellMinHeight
			});
		}));
	}
	componentDidMount() {
		this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
	}
	componentDidUpdate(e, t) {
		let n = this.props;
		this.updateSizing(!y(e, n));
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
			h && (s.isRtl ? (_ = 0, g = l.lefts[t.lastCol] - l.lefts[t.firstCol]) : (g = 0, _ = l.rights[t.firstCol] - l.rights[t.lastCol])), f.push(L("div", {
				className: "fc-daygrid-event-harness" + (h ? " fc-daygrid-event-harness-abs" : ""),
				key: Fe(t),
				ref: d ? null : this.segHarnessRefs.createRef(Ie(t)),
				style: {
					visibility: m ? "" : "hidden",
					marginTop: h ? "" : e.marginTop,
					top: h ? e.absoluteTop : "",
					left: g,
					right: _
				}
			}, Te(t) ? L(De, Object.assign({
				seg: t,
				isDragging: i,
				isSelected: p === c,
				defaultDisplayEventEnd: u
			}, E(t, n))) : L(Ee, Object.assign({
				seg: t,
				isDragging: i,
				isResizing: a,
				isDateSelecting: o,
				isSelected: p === c,
				defaultDisplayEventEnd: u
			}, E(t, n)))));
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
			a.push(L("div", {
				key: le(o.eventRange),
				className: "fc-daygrid-bg-harness",
				style: e
			}, t === "bg-event" ? L(pe, Object.assign({ seg: o }, E(o, r))) : S(t)));
		}
		return L(T, {}, ...a);
	}
	updateSizing(e) {
		let { props: t, state: n, frameElRefs: r } = this;
		if (!t.forPrint && t.clientWidth !== null) {
			if (e) {
				let e = t.cells.map((e) => r.currentMap[e.key]);
				if (e.length) {
					let t = this.rootElRef.current, r = new U(t, e, !0, !1);
					(!n.framePositions || !n.framePositions.similarTo(r)) && this.setState({ framePositions: new U(t, e, !0, !1) });
				}
			}
			let i = this.state.segHeights, a = this.querySegHeights(), o = t.dayMaxEvents === !0 || t.dayMaxEventRows === !0;
			this.safeSetState({
				segHeights: Object.assign(Object.assign({}, i), a),
				maxContentHeight: o ? this.computeMaxContentHeight() : null
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
Ve.addStateEquality({ segHeights: y });
function He(e, t) {
	if (!e.length) return [];
	let n = Ue(t);
	return e.map((e) => ({
		seg: e,
		isVisible: !0,
		isAbsolute: !0,
		absoluteTop: n[e.eventRange.instance.instanceId],
		marginTop: 0
	}));
}
function Ue(e) {
	let t = {};
	for (let n of e) for (let e of n) t[e.seg.eventRange.instance.instanceId] = e.absoluteTop;
	return t;
}
var We = class extends B {
	constructor() {
		super(...arguments), this.splitBusinessHourSegs = A(K), this.splitBgEventSegs = A(Ge), this.splitFgEventSegs = A(K), this.splitDateSelectionSegs = A(K), this.splitEventDrag = A(Ce), this.splitEventResize = A(Ce), this.rowRefs = new v();
	}
	render() {
		let { props: e, context: t } = this, n = e.cells.length, r = this.splitBusinessHourSegs(e.businessHourSegs, n), a = this.splitBgEventSegs(e.bgEventSegs, n), o = this.splitFgEventSegs(e.fgEventSegs, n), s = this.splitDateSelectionSegs(e.dateSelectionSegs, n), c = this.splitEventDrag(e.eventDrag, n), l = this.splitEventResize(e.eventResize, n), u = n >= 7 && e.clientWidth ? e.clientWidth / t.options.aspectRatio / 6 : null;
		return L(i, { unit: "day" }, (t, i) => L(T, null, e.cells.map((t, d) => L(Ve, {
			ref: this.rowRefs.createRef(d),
			key: t.length ? t[0].date.toISOString() : d,
			showDayNumbers: n > 1,
			showWeekNumbers: e.showWeekNumbers,
			todayRange: i,
			dateProfile: e.dateProfile,
			cells: t,
			renderIntro: e.renderRowIntro,
			businessHourSegs: r[d],
			eventSelection: e.eventSelection,
			bgEventSegs: a[d],
			fgEventSegs: o[d],
			dateSelectionSegs: s[d],
			eventDrag: c[d],
			eventResize: l[d],
			dayMaxEvents: e.dayMaxEvents,
			dayMaxEventRows: e.dayMaxEventRows,
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight,
			cellMinHeight: u,
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
		this.rowPositions = new U(this.rootEl, this.rowRefs.collect().map((e) => e.getCellEls()[0]), !1, !0), this.colPositions = new U(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1);
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
			end: G(n, 1)
		};
	}
};
function Ge(e, t) {
	return K(e.filter(Ke), t);
}
function Ke(e) {
	return e.eventRange.def.allDay;
}
var qe = class extends B {
	constructor() {
		super(...arguments), this.elRef = D(), this.needsScrollReset = !1;
	}
	render() {
		let { props: e } = this, { dayMaxEventRows: t, dayMaxEvents: n, expandRows: r } = e, i = n === !0 || t === !0;
		i && !r && (i = !1, t = null, n = null);
		let a = [
			"fc-daygrid-body",
			i ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
			r ? "" : "fc-daygrid-body-natural"
		];
		return L("div", {
			ref: this.elRef,
			className: a.join(" "),
			style: {
				width: e.clientWidth,
				minWidth: e.tableMinWidth
			}
		}, L("table", {
			role: "presentation",
			className: "fc-scrollgrid-sync-table",
			style: {
				width: e.clientWidth,
				minWidth: e.tableMinWidth,
				height: r ? e.clientHeight : ""
			}
		}, e.colGroupNode, L("tbody", { role: "presentation" }, L(We, {
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
			let e = Je(this.elRef.current, this.props.dateProfile);
			if (e) {
				let t = e.closest(".fc-daygrid-body"), n = t.closest(".fc-scroller"), r = e.getBoundingClientRect().top - t.getBoundingClientRect().top;
				n.scrollTop = r ? r + 1 : 0;
			}
			this.needsScrollReset = !1;
		}
	}
};
function Je(e, t) {
	let n;
	return t.currentRangeUnit.match(/year|month/) && (n = e.querySelector(`[data-date="${u(t.currentDate)}-01"]`)), n ||= e.querySelector(`[data-date="${s(t.currentDate)}"]`), n;
}
var Ye = class extends n {
	constructor() {
		super(...arguments), this.forceDayIfListItem = !0;
	}
	sliceRange(e, t) {
		return t.sliceRange(e);
	}
}, Xe = class extends B {
	constructor() {
		super(...arguments), this.slicer = new Ye(), this.tableRef = D();
	}
	render() {
		let { props: e, context: t } = this;
		return L(qe, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
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
}, Ze = class extends Se {
	constructor() {
		super(...arguments), this.buildDayTableModel = A(Qe), this.headerRef = D(), this.tableRef = D();
	}
	render() {
		let { options: e, dateProfileGenerator: t } = this.context, { props: n } = this, r = this.buildDayTableModel(n.dateProfile, t), i = e.dayHeaders && L(xe, {
			ref: this.headerRef,
			dateProfile: n.dateProfile,
			dates: r.headerDates,
			datesRepDistinctDays: r.rowCnt === 1
		}), a = (t) => L(Xe, {
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
function Qe(e, t) {
	return new ue(new ce(e.renderRange, t), /year|month|week/.test(e.currentRangeUnit));
}
var $e = class extends oe {
	buildRenderRange(e, t, n) {
		let r = super.buildRenderRange(e, t, n), { props: i } = this;
		return et({
			currentRange: r,
			snapToWeek: /^(year|month)$/.test(t),
			fixedWeekCount: i.fixedWeekCount,
			dateEnv: i.dateEnv
		});
	}
};
function et(e) {
	let { dateEnv: t, currentRange: n } = e, { start: r, end: i } = n, a;
	if (e.snapToWeek && (r = t.startOfWeek(r), a = t.startOfWeek(i), a.valueOf() !== i.valueOf() && (i = c(a, 1))), e.fixedWeekCount) {
		let e = t.startOfWeek(t.startOfMonth(G(n.end, -1))), r = Math.ceil(b(e, i));
		i = c(i, 6 - r);
	}
	return {
		start: r,
		end: i
	};
}
de(":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}");
//#endregion
//#region node_modules/@fullcalendar/daygrid/index.js
var tt = M({
	name: "@fullcalendar/daygrid",
	initialView: "dayGridMonth",
	views: {
		dayGrid: {
			component: Ze,
			dateProfileGeneratorClass: $e
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
}), nt = class extends he {
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
		return e.allDay ? se(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
	}
}, rt = W({
	hour: "numeric",
	minute: "2-digit",
	omitZeroMinute: !0,
	meridiem: "short"
});
function it(e) {
	let t = [
		"fc-timegrid-slot",
		"fc-timegrid-slot-label",
		e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
	];
	return L(l.Consumer, null, (n) => {
		if (!e.isLabeled) return L("td", {
			className: t.join(" "),
			"data-time": e.isoTimeStr
		});
		let { dateEnv: r, options: i, viewApi: a } = n, o = i.slotLabelFormat == null ? rt : Array.isArray(i.slotLabelFormat) ? W(i.slotLabelFormat[0]) : W(i.slotLabelFormat), s = {
			level: 0,
			time: e.time,
			date: r.toDate(e.date),
			view: a,
			text: r.format(e.date, o)
		};
		return L(I, {
			elTag: "td",
			elClasses: t,
			elAttrs: { "data-time": e.isoTimeStr },
			renderProps: s,
			generatorName: "slotLabelContent",
			customGenerator: i.slotLabelContent,
			defaultGenerator: at,
			classNameGenerator: i.slotLabelClassNames,
			didMount: i.slotLabelDidMount,
			willUnmount: i.slotLabelWillUnmount
		}, (e) => L("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" }, L(e, {
			elTag: "div",
			elClasses: ["fc-timegrid-slot-label-cushion", "fc-scrollgrid-shrink-cushion"]
		})));
	});
}
function at(e) {
	return e.text;
}
var ot = class extends R {
	render() {
		return this.props.slatMetas.map((e) => L("tr", { key: e.key }, L(it, Object.assign({}, e))));
	}
}, st = W({ week: "short" }), ct = 5, lt = class extends B {
	constructor() {
		super(...arguments), this.allDaySplitter = new nt(), this.headerElRef = D(), this.rootElRef = D(), this.scrollerElRef = D(), this.state = { slatCoords: null }, this.handleScrollTopRequest = (e) => {
			let t = this.scrollerElRef.current;
			t && (t.scrollTop = e);
		}, this.renderHeadAxis = (e, t = "") => {
			let { options: n } = this.context, { dateProfile: r } = this.props, i = r.renderRange, o = a(i.start, i.end) === 1 ? F(this.context, i.start, "week") : {};
			return n.weekNumbers && e === "day" ? L(d, {
				elTag: "th",
				elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
				elAttrs: { "aria-hidden": !0 },
				date: i.start,
				defaultFormat: st
			}, (e) => L("div", {
				className: [
					"fc-timegrid-axis-frame",
					"fc-scrollgrid-shrink-frame",
					"fc-timegrid-axis-frame-liquid"
				].join(" "),
				style: { height: t }
			}, L(e, {
				elTag: "a",
				elClasses: [
					"fc-timegrid-axis-cushion",
					"fc-scrollgrid-shrink-cushion",
					"fc-scrollgrid-sync-inner"
				],
				elAttrs: o
			}))) : L("th", {
				"aria-hidden": !0,
				className: "fc-timegrid-axis"
			}, L("div", {
				className: "fc-timegrid-axis-frame",
				style: { height: t }
			}));
		}, this.renderTableRowAxis = (e) => {
			let { options: t, viewApi: n } = this.context;
			return L(I, {
				elTag: "td",
				elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
				elAttrs: { "aria-hidden": !0 },
				renderProps: {
					text: t.allDayText,
					view: n
				},
				generatorName: "allDayContent",
				customGenerator: t.allDayContent,
				defaultGenerator: ut,
				classNameGenerator: t.allDayClassNames,
				didMount: t.allDayDidMount,
				willUnmount: t.allDayWillUnmount
			}, (t) => L("div", {
				className: [
					"fc-timegrid-axis-frame",
					"fc-scrollgrid-shrink-frame",
					e == null ? " fc-timegrid-axis-frame-liquid" : ""
				].join(" "),
				style: { height: e }
			}, L(t, {
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
		let { context: r, props: i } = this, a = [], s = z(r.options);
		return e && a.push({
			type: "header",
			key: "header",
			isSticky: s,
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
			outerContent: L("tr", {
				role: "presentation",
				className: "fc-scrollgrid-section"
			}, L("td", { className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded") }))
		})), a.push({
			type: "body",
			key: "body",
			liquid: !0,
			expandRows: !!r.options.expandRows,
			chunk: {
				scrollerElRef: this.scrollerElRef,
				content: n
			}
		}), L(o, {
			elRef: this.rootElRef,
			elClasses: ["fc-timegrid"],
			viewSpec: r.viewSpec
		}, L(k, {
			liquid: !i.isHeightAuto && !i.forPrint,
			collapsibleWidth: i.forPrint,
			cols: [{ width: "shrink" }],
			sections: a
		}));
	}
	renderHScrollLayout(t, n, r, a, s, c, l) {
		let u = this.context.pluginHooks.scrollGridImpl;
		if (!u) throw Error("No ScrollGrid implementation");
		let { context: d, props: f } = this, p = !f.forPrint && z(d.options), m = !f.forPrint && N(d.options), h = [];
		t && h.push({
			type: "header",
			key: "header",
			isSticky: p,
			syncRowHeights: !0,
			chunks: [{
				key: "axis",
				rowContent: (e) => L("tr", { role: "presentation" }, this.renderHeadAxis("day", e.rowSyncHeights[0]))
			}, {
				key: "cols",
				elRef: this.headerElRef,
				tableClassName: "fc-col-header",
				rowContent: t
			}]
		}), n && (h.push({
			type: "body",
			key: "all-day",
			syncRowHeights: !0,
			chunks: [{
				key: "axis",
				rowContent: (e) => L("tr", { role: "presentation" }, this.renderTableRowAxis(e.rowSyncHeights[0]))
			}, {
				key: "cols",
				content: n
			}]
		}), h.push({
			key: "all-day-divider",
			type: "body",
			outerContent: L("tr", {
				role: "presentation",
				className: "fc-scrollgrid-section"
			}, L("td", {
				colSpan: 2,
				className: "fc-timegrid-divider " + d.theme.getClass("tableCellShaded")
			}))
		}));
		let g = d.options.nowIndicator;
		return h.push({
			type: "body",
			key: "body",
			liquid: !0,
			expandRows: !!d.options.expandRows,
			chunks: [{
				key: "axis",
				content: (e) => L("div", { className: "fc-timegrid-axis-chunk" }, L("table", {
					"aria-hidden": !0,
					style: { height: e.expandRows ? e.clientHeight : "" }
				}, e.tableColGroupNode, L("tbody", null, L(ot, { slatMetas: c }))), L("div", { className: "fc-timegrid-now-indicator-container" }, L(i, { unit: g ? "minute" : "day" }, (e) => {
					let t = g && l && l.safeComputeTop(e);
					return typeof t == "number" ? L(_, {
						elClasses: ["fc-timegrid-now-indicator-arrow"],
						elStyle: { top: t },
						isAxis: !0,
						date: e
					}) : null;
				})))
			}, {
				key: "cols",
				scrollerElRef: this.scrollerElRef,
				content: r
			}]
		}), m && h.push({
			key: "footer",
			type: "footer",
			isSticky: !0,
			chunks: [{
				key: "axis",
				content: e
			}, {
				key: "cols",
				content: e
			}]
		}), L(o, {
			elRef: this.rootElRef,
			elClasses: ["fc-timegrid"],
			viewSpec: d.viewSpec
		}, L(u, {
			liquid: !f.isHeightAuto && !f.forPrint,
			forPrint: f.forPrint,
			collapsibleWidth: !1,
			colGroups: [{
				width: "shrink",
				cols: [{ width: "shrink" }]
			}, { cols: [{
				span: a,
				minWidth: s
			}] }],
			sections: h
		}));
	}
	getAllDayMaxEventProps() {
		let { dayMaxEvents: e, dayMaxEventRows: t } = this.context.options;
		return (e === !0 || t === !0) && (e = void 0, t = ct), {
			dayMaxEvents: e,
			dayMaxEventRows: t
		};
	}
};
function ut(e) {
	return e.text;
}
var dt = class {
	constructor(e, t, n) {
		this.positions = e, this.dateProfile = t, this.slotDuration = n;
	}
	safeComputeTop(e) {
		let { dateProfile: t } = this;
		if (ee(t.currentRange, e)) {
			let n = C(e), r = e.valueOf() - n.valueOf();
			if (r >= x(t.slotMinTime) && r < x(t.slotMaxTime)) return this.computeTimeTop(H(r));
		}
		return null;
	}
	computeDateTop(e, t) {
		return t ||= C(e), this.computeTimeTop(H(e.valueOf() - t.valueOf()));
	}
	computeTimeTop(e) {
		let { positions: t, dateProfile: n } = this, r = t.els.length, i = (e.milliseconds - x(n.slotMinTime)) / x(this.slotDuration), a, o;
		return i = Math.max(0, i), i = Math.min(r, i), a = Math.floor(i), a = Math.min(a, r - 1), o = i - a, t.tops[a] + t.getHeight(a) * o;
	}
}, ft = class extends R {
	render() {
		let { props: e, context: t } = this, { options: n } = t, { slatElRefs: r } = e;
		return L("tbody", null, e.slatMetas.map((i, a) => {
			let o = {
				time: i.time,
				date: t.dateEnv.toDate(i.date),
				view: t.viewApi
			};
			return L("tr", {
				key: i.key,
				ref: r.createRef(i.key)
			}, e.axis && L(it, Object.assign({}, i)), L(I, {
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
}, pt = class extends R {
	constructor() {
		super(...arguments), this.rootElRef = D(), this.slatElRefs = new v();
	}
	render() {
		let { props: e, context: t } = this;
		return L("div", {
			ref: this.rootElRef,
			className: "fc-timegrid-slots"
		}, L("table", {
			"aria-hidden": !0,
			className: t.theme.getClass("table"),
			style: {
				minWidth: e.tableMinWidth,
				width: e.clientWidth,
				height: e.minHeight
			}
		}, e.tableColGroupNode, L(ft, {
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
		t.onCoords && t.clientWidth !== null && this.rootElRef.current.offsetHeight && t.onCoords(new dt(new U(this.rootElRef.current, mt(this.slatElRefs.currentMap, t.slatMetas), !1, !0), this.props.dateProfile, e.options.slotDuration));
	}
};
function mt(e, t) {
	return t.map((t) => e[t.key]);
}
function Y(e, t) {
	let n = [], r;
	for (r = 0; r < t; r += 1) n.push([]);
	if (e) for (r = 0; r < e.length; r += 1) n[e[r].col].push(e[r]);
	return n;
}
function ht(e, t) {
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
var gt = class extends R {
	render() {
		let { props: e } = this;
		return L(w, {
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
			popoverContent: () => jt(e.hiddenSegs, e),
			defaultGenerator: _t,
			forceTimed: !0
		}, (e) => L(e, {
			elTag: "div",
			elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"]
		}));
	}
};
function _t(e) {
	return e.shortText;
}
function vt(e, t, n) {
	let r = new m();
	t != null && (r.strictOrder = t), n != null && (r.maxStackCnt = n);
	let i = ve(r.addSegs(e)), a = yt(r);
	return a = wt(a, 1), {
		segRects: Tt(a),
		hiddenGroups: i
	};
}
function yt(e) {
	let { entriesByLevel: t } = e, n = X((e, t) => e + ":" + t, (r, i) => {
		let a = bt(Ct(e, r, i), n), o = t[r][i];
		return [Object.assign(Object.assign({}, o), { nextLevelNodes: a[0] }), o.thickness + a[1]];
	});
	return bt(t.length ? {
		level: 0,
		lateralStart: 0,
		lateralEnd: t[0].length
	} : null, n)[0];
}
function bt(e, t) {
	if (!e) return [[], 0];
	let { level: n, lateralStart: r, lateralEnd: i } = e, a = r, o = [];
	for (; a < i;) o.push(t(n, a)), a += 1;
	return o.sort(xt), [o.map(St), o[0][1]];
}
function xt(e, t) {
	return t[1] - e[1];
}
function St(e) {
	return e[0];
}
function Ct(e, t, n) {
	let { levelCoords: r, entriesByLevel: i } = e, a = i[t][n], o = r[t] + a.thickness, s = r.length, c = t;
	for (; c < s && r[c] < o; c += 1);
	for (; c < s; c += 1) {
		let e = i[c], t, n = re(e, a.span.start, ne), r = n[0] + n[1], o = r;
		for (; (t = e[o]) && t.span.start < a.span.end;) o += 1;
		if (r < o) return {
			level: c,
			lateralStart: r,
			lateralEnd: o
		};
	}
	return null;
}
function wt(e, t) {
	let n = X((e, t, n) => g(e), (e, r, i) => {
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
function Tt(e) {
	let t = [], n = X((e, t, n) => g(e), (e, n, i) => {
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
function X(e, t) {
	let n = {};
	return (...r) => {
		let i = e(...r);
		return i in n ? n[i] : n[i] = t(...r);
	};
}
function Et(e, t, n = null, r = 0) {
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
function Dt(e, t, n, r) {
	let i = [], a = [];
	for (let n = 0; n < e.length; n += 1) {
		let r = t[n];
		r ? i.push({
			index: n,
			thickness: 1,
			span: r
		}) : a.push(e[n]);
	}
	let { segRects: o, hiddenGroups: s } = vt(i, n, r), c = [];
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
var Ot = W({
	hour: "numeric",
	minute: "2-digit",
	meridiem: !1
}), kt = class extends R {
	render() {
		return L(p, Object.assign({}, this.props, {
			elClasses: [
				"fc-timegrid-event",
				"fc-v-event",
				this.props.isShort && "fc-timegrid-event-short"
			],
			defaultTimeFormat: Ot
		}));
	}
}, At = class extends R {
	constructor() {
		super(...arguments), this.sortEventSegs = A(O);
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = n.selectMirror, i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || r && e.dateSelectionSegs || [], a = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}, o = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
		return L(ge, {
			elTag: "td",
			elRef: e.elRef,
			elClasses: ["fc-timegrid-col", ...e.extraClassNames || []],
			elAttrs: Object.assign({ role: "gridcell" }, e.extraDataAttrs),
			date: e.date,
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			extraRenderProps: e.extraRenderProps
		}, (t) => L("div", { className: "fc-timegrid-col-frame" }, L("div", { className: "fc-timegrid-col-bg" }, this.renderFillSegs(e.businessHourSegs, "non-business"), this.renderFillSegs(e.bgEventSegs, "bg-event"), this.renderFillSegs(e.dateSelectionSegs, "highlight")), L("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(o, a, !1, !1, !1)), L("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(i, {}, !!e.eventDrag, !!e.eventResize, !!r, "mirror")), L("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(e.nowIndicatorSegs)), j(n) && L(t, {
			elTag: "div",
			elClasses: ["fc-timegrid-col-misc"]
		})));
	}
	renderFgSegs(e, t, n, r, i, a) {
		let { props: o } = this;
		return o.forPrint ? jt(e, o) : this.renderPositionedFgSegs(e, t, n, r, i, a);
	}
	renderPositionedFgSegs(e, t, n, r, i, a) {
		let { eventMaxStack: o, eventShortHeight: s, eventOrderStrict: c, eventMinHeight: l } = this.context.options, { date: u, slatCoords: d, eventSelection: f, todayRange: p, nowDate: m } = this.props, h = n || r || i, { segPlacements: g, hiddenGroups: _ } = Dt(e, Et(e, u, d, l), c, o);
		return L(T, null, this.renderHiddenGroups(_, e), g.map((e) => {
			let { seg: o, rect: c } = e, l = o.eventRange.instance.instanceId, u = h || !!(!t[l] && c), d = Z(c && c.span), g = !h && c ? this.computeSegHStyle(c) : {
				left: 0,
				right: 0
			}, _ = !!c && c.stackForward > 0, v = !!c && c.span.end - c.span.start < s;
			return L("div", {
				className: "fc-timegrid-event-harness" + (_ ? " fc-timegrid-event-harness-inset" : ""),
				key: a || l,
				style: Object.assign(Object.assign({ visibility: u ? "" : "hidden" }, d), g)
			}, L(kt, Object.assign({
				seg: o,
				isDragging: n,
				isResizing: r,
				isDateSelecting: i,
				isSelected: l === f,
				isShort: v
			}, E(o, p, m))));
		}));
	}
	renderHiddenGroups(e, t) {
		let { extraDateSpan: n, dateProfile: r, todayRange: i, nowDate: a, eventSelection: o, eventDrag: s, eventResize: c } = this.props;
		return L(T, null, e.map((e) => {
			let l = Z(e.span), u = Mt(e.entries, t);
			return L(gt, {
				key: be(_e(u)),
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
		return L(T, null, Et(e, n.date, n.slatCoords, r.options.eventMinHeight).map((r, i) => {
			let a = e[i];
			return L("div", {
				key: le(a.eventRange),
				className: "fc-timegrid-bg-harness",
				style: Z(r)
			}, t === "bg-event" ? L(pe, Object.assign({ seg: a }, E(a, n.todayRange, n.nowDate))) : S(t));
		}));
	}
	renderNowIndicator(e) {
		let { slatCoords: t, date: n } = this.props;
		return t ? e.map((e, r) => L(_, {
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
function jt(e, { todayRange: t, nowDate: n, eventSelection: r, eventDrag: i, eventResize: a }) {
	let o = (i ? i.affectedInstances : null) || (a ? a.affectedInstances : null) || {};
	return L(T, null, e.map((e) => {
		let i = e.eventRange.instance.instanceId;
		return L("div", {
			key: i,
			style: { visibility: o[i] ? "hidden" : "" }
		}, L(kt, Object.assign({
			seg: e,
			isDragging: !1,
			isResizing: !1,
			isDateSelecting: !1,
			isSelected: i === r,
			isShort: !1
		}, E(e, t, n))));
	}));
}
function Z(e) {
	return e ? {
		top: e.start,
		bottom: -e.end
	} : {
		top: "",
		bottom: ""
	};
}
function Mt(e, t) {
	return e.map((e) => t[e.index]);
}
var Nt = class extends R {
	constructor() {
		super(...arguments), this.splitFgEventSegs = A(Y), this.splitBgEventSegs = A(Y), this.splitBusinessHourSegs = A(Y), this.splitNowIndicatorSegs = A(Y), this.splitDateSelectionSegs = A(Y), this.splitEventDrag = A(ht), this.splitEventResize = A(ht), this.rootElRef = D(), this.cellElRefs = new v();
	}
	render() {
		let { props: e, context: t } = this, n = t.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), r = e.cells.length, i = this.splitFgEventSegs(e.fgEventSegs, r), a = this.splitBgEventSegs(e.bgEventSegs, r), o = this.splitBusinessHourSegs(e.businessHourSegs, r), s = this.splitNowIndicatorSegs(e.nowIndicatorSegs, r), c = this.splitDateSelectionSegs(e.dateSelectionSegs, r), l = this.splitEventDrag(e.eventDrag, r), u = this.splitEventResize(e.eventResize, r);
		return L("div", {
			className: "fc-timegrid-cols",
			ref: this.rootElRef
		}, L("table", {
			role: "presentation",
			style: {
				minWidth: e.tableMinWidth,
				width: e.clientWidth
			}
		}, e.tableColGroupNode, L("tbody", { role: "presentation" }, L("tr", { role: "row" }, e.axis && L("td", {
			"aria-hidden": !0,
			className: "fc-timegrid-col fc-timegrid-axis"
		}, L("div", { className: "fc-timegrid-col-frame" }, L("div", { className: "fc-timegrid-now-indicator-container" }, typeof n == "number" && L(_, {
			elClasses: ["fc-timegrid-now-indicator-arrow"],
			elStyle: { top: n },
			isAxis: !0,
			date: e.nowDate
		})))), e.cells.map((t, n) => L(At, {
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
		e.onColCoords && e.clientWidth !== null && e.onColCoords(new U(this.rootElRef.current, Pt(this.cellElRefs.currentMap, e.cells), !0, !1));
	}
};
function Pt(e, t) {
	return t.map((t) => e[t.key]);
}
var Q = class extends B {
	constructor() {
		super(...arguments), this.processSlotOptions = A(Ft), this.state = { slatCoords: null }, this.handleRootEl = (e) => {
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
		return L("div", {
			className: "fc-timegrid-body",
			ref: this.handleRootEl,
			style: {
				width: e.clientWidth,
				minWidth: e.tableMinWidth
			}
		}, L(pt, {
			axis: e.axis,
			dateProfile: e.dateProfile,
			slatMetas: e.slatMetas,
			clientWidth: e.clientWidth,
			minHeight: e.expandRows ? e.clientHeight : "",
			tableMinWidth: e.tableMinWidth,
			tableColGroupNode: e.axis ? e.tableColGroupNode : null,
			onCoords: this.handleSlatCoords
		}), L(Nt, {
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
		let { dateEnv: n, options: i } = this.context, { colCoords: a } = this, { dateProfile: o } = this.props, { slatCoords: s } = this.state, { snapDuration: c, snapsPerSlot: l } = this.processSlotOptions(this.props.slotDuration, i.snapDuration), u = a.leftToIndex(e), d = s.positions.topToIndex(t);
		if (u != null && d != null) {
			let e = this.props.cells[u], i = s.positions.tops[d], f = s.positions.getHeight(d), p = (t - i) / f, m = Math.floor(p * l), g = d * l + m, _ = this.props.cells[u].date, v = r(o.slotMinTime, h(c, g)), y = n.add(_, v), b = n.add(y, c);
			return {
				dateProfile: o,
				dateSpan: Object.assign({
					range: {
						start: y,
						end: b
					},
					allDay: !1
				}, e.extraDateSpan),
				dayEl: a.els[u],
				rect: {
					left: a.lefts[u],
					right: a.rights[u],
					top: i,
					bottom: i + f
				},
				layer: 0
			};
		}
		return null;
	}
};
function Ft(e, t) {
	let n = t || e, r = V(e, n);
	return r === null && (n = e, r = 1), {
		snapDuration: n,
		snapsPerSlot: r
	};
}
var It = class extends n {
	sliceRange(e, t) {
		let n = [];
		for (let r = 0; r < t.length; r += 1) {
			let i = fe(e, t[r]);
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
}, Lt = class extends B {
	constructor() {
		super(...arguments), this.buildDayRanges = A(Rt), this.slicer = new It(), this.timeColsRef = D();
	}
	render() {
		let { props: e, context: t } = this, { dateProfile: n, dayTableModel: r } = e, { nowIndicator: a, nextDayThreshold: o } = t.options, s = this.buildDayRanges(r, n, t.dateEnv);
		return L(i, { unit: a ? "minute" : "day" }, (i, c) => L(Q, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, n, null, t, s), {
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
			nowDate: i,
			nowIndicatorSegs: a && this.slicer.sliceNowDate(i, n, o, t, s),
			todayRange: c,
			onScrollTopRequest: e.onScrollTopRequest,
			onSlatCoords: e.onSlatCoords
		})));
	}
};
function Rt(e, t, n) {
	let r = [];
	for (let i of e.headerDates) r.push({
		start: n.add(i, t.slotMinTime),
		end: n.add(i, t.slotMaxTime)
	});
	return r;
}
var zt = [
	{ hours: 1 },
	{ minutes: 30 },
	{ minutes: 15 },
	{ seconds: 30 },
	{ seconds: 15 }
];
function Bt(e, t, n, i, a) {
	let o = /* @__PURE__ */ new Date(0), s = e, c = H(0), l = n || Vt(i), u = [];
	for (; x(s) < x(t);) {
		let e = a.add(o, s), t = V(c, l) !== null;
		u.push({
			date: e,
			time: s,
			key: e.toISOString(),
			isoTimeStr: f(e),
			isLabeled: t
		}), s = r(s, i), c = r(c, i);
	}
	return u;
}
function Vt(e) {
	let t, n, r;
	for (t = zt.length - 1; t >= 0; --t) if (n = H(zt[t]), r = V(n, e), r !== null && r > 1) return n;
	return e;
}
var Ht = class extends lt {
	constructor() {
		super(...arguments), this.buildTimeColsModel = A($), this.buildSlatMetas = A(Bt);
	}
	render() {
		let { options: e, dateEnv: t, dateProfileGenerator: n } = this.context, { props: r } = this, { dateProfile: i } = r, a = this.buildTimeColsModel(i, n), o = this.allDaySplitter.splitProps(r), s = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, t), { dayMinWidth: c } = e, l = !c, u = c, d = e.dayHeaders && L(xe, {
			dates: a.headerDates,
			dateProfile: i,
			datesRepDistinctDays: !0,
			renderIntro: l ? this.renderHeadAxis : null
		}), f = e.allDaySlot !== !1 && ((t) => L(Xe, Object.assign({}, o.allDay, {
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
		}, this.getAllDayMaxEventProps()))), p = (t) => L(Lt, Object.assign({}, o.timed, {
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
function $(e, t) {
	return new ue(new ce(e.renderRange, t), !1);
}
de(".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:\"\\00a0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}");
//#endregion
//#region node_modules/@fullcalendar/timegrid/index.js
var Ut = M({
	name: "@fullcalendar/timegrid",
	initialView: "timeGridWeek",
	optionRefiners: { allDaySlot: Boolean },
	views: {
		timeGrid: {
			component: Ht,
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
export { Rt as a, tt as c, $e as d, We as f, et as h, lt as i, Ye as l, Qe as m, It as n, Bt as o, Se as p, Q as r, $ as s, Ut as t, qe as u };

import { $ as e, $t as t, Bn as n, Bt as r, C as i, Cn as a, D as o, Dt as s, E as c, F as l, Ft as u, G as d, Gt as f, Hn as p, Ht as m, It as h, Jn as g, Jt as ee, K as _, On as te, Ot as v, R as ne, St as y, Tn as re, U as ie, Ut as b, Vn as ae, Vt as oe, W as se, Wn as ce, _ as le, _t as ue, ar as x, bn as de, dn as S, dr as C, en as fe, fn as w, fr as T, ft as pe, g as me, gn as he, gt as E, h as ge, hn as D, in as O, ir as _e, kn as k, kt as A, lr as ve, m as ye, mn as j, n as M, nt as N, o as P, pn as be, pr as F, pt as I, qt as xe, r as L, rr as Se, rt as R, s as z, sr as Ce, st as we, t as Te, u as Ee, v as B, vt as V, wn as De, wt as Oe, xn as ke, xt as H, y as U, yt as W, z as G } from "../filament-fullcalendar-core-IEdKpiTH.js";
import { c as Ae, d as je, f as Me, h as Ne, l as Pe, m as Fe, t as Ie } from "../filament-fullcalendar-timegrid--l_RgFIU.js";
//#region node_modules/@fullcalendar/interaction/index.js
E.touchMouseIgnoreWait = 500;
var K = 0, q = 0, J = !1, Y = class {
	constructor(e) {
		this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (e) => {
			if (!this.shouldIgnoreMouse() && Le(e) && this.tryStart(e)) {
				let t = this.createEventFromMouse(e, !0);
				this.emitter.trigger("pointerdown", t), this.initScrollWatch(t), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
			}
		}, this.handleMouseMove = (e) => {
			let t = this.createEventFromMouse(e);
			this.recordCoords(t), this.emitter.trigger("pointermove", t);
		}, this.handleMouseUp = (e) => {
			document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(e)), this.cleanup();
		}, this.handleTouchStart = (e) => {
			if (this.tryStart(e)) {
				this.isTouchDragging = !0;
				let t = this.createEventFromTouch(e, !0);
				this.emitter.trigger("pointerdown", t), this.initScrollWatch(t);
				let n = e.target;
				this.shouldIgnoreMove || n.addEventListener("touchmove", this.handleTouchMove), n.addEventListener("touchend", this.handleTouchEnd), n.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, !0);
			}
		}, this.handleTouchMove = (e) => {
			let t = this.createEventFromTouch(e);
			this.recordCoords(t), this.emitter.trigger("pointermove", t);
		}, this.handleTouchEnd = (e) => {
			if (this.isDragging) {
				let t = e.target;
				t.removeEventListener("touchmove", this.handleTouchMove), t.removeEventListener("touchend", this.handleTouchEnd), t.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(e)), this.cleanup(), this.isTouchDragging = !1, Re();
			}
		}, this.handleTouchScroll = () => {
			this.wasTouchScroll = !0;
		}, this.handleScroll = (e) => {
			if (!this.shouldIgnoreMove) {
				let t = window.scrollX - this.prevScrollX + this.prevPageX, n = window.scrollY - this.prevScrollY + this.prevPageY;
				this.emitter.trigger("pointermove", {
					origEvent: e,
					isTouch: this.isTouchDragging,
					subjectEl: this.subjectEl,
					pageX: t,
					pageY: n,
					deltaX: t - this.origPageX,
					deltaY: n - this.origPageY
				});
			}
		}, this.containerEl = e, this.emitter = new me(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), ze();
	}
	destroy() {
		this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Be();
	}
	tryStart(e) {
		let t = this.querySubjectEl(e), n = e.target;
		return t && (!this.handleSelector || v(n, this.handleSelector)) ? (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
	}
	cleanup() {
		J = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
	}
	querySubjectEl(e) {
		return this.selector ? v(e.target, this.selector) : this.containerEl;
	}
	shouldIgnoreMouse() {
		return K || this.isTouchDragging;
	}
	cancelTouchScroll() {
		this.isDragging && (J = !0);
	}
	initScrollWatch(e) {
		this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
	}
	recordCoords(e) {
		this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.scrollX, this.prevScrollY = window.scrollY);
	}
	destroyScrollWatch() {
		this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
	}
	createEventFromMouse(e, t) {
		let n = 0, r = 0;
		return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
			origEvent: e,
			isTouch: !1,
			subjectEl: this.subjectEl,
			pageX: e.pageX,
			pageY: e.pageY,
			deltaX: n,
			deltaY: r
		};
	}
	createEventFromTouch(e, t) {
		let n = e.touches, r, i, a = 0, o = 0;
		return n && n.length ? (r = n[0].pageX, i = n[0].pageY) : (r = e.pageX, i = e.pageY), t ? (this.origPageX = r, this.origPageY = i) : (a = r - this.origPageX, o = i - this.origPageY), {
			origEvent: e,
			isTouch: !0,
			subjectEl: this.subjectEl,
			pageX: r,
			pageY: i,
			deltaX: a,
			deltaY: o
		};
	}
};
function Le(e) {
	return e.button === 0 && !e.ctrlKey;
}
function Re() {
	K += 1, setTimeout(() => {
		--K;
	}, E.touchMouseIgnoreWait);
}
function ze() {
	q += 1, q === 1 && window.addEventListener("touchmove", Ve, { passive: !1 });
}
function Be() {
	--q, q || window.removeEventListener("touchmove", Ve, { passive: !1 });
}
function Ve(e) {
	J && e.preventDefault();
}
var He = class {
	constructor() {
		this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
	}
	start(e, t, n) {
		this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.scrollX, this.origScreenY = n - window.scrollY, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
	}
	handleMove(e, t) {
		this.deltaX = e - window.scrollX - this.origScreenX, this.deltaY = t - window.scrollY - this.origScreenY, this.updateElPosition();
	}
	setIsVisible(e) {
		e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible &&= (this.mirrorEl && (this.mirrorEl.style.display = "none"), e);
	}
	stop(e, t) {
		let n = () => {
			this.cleanup(), t();
		};
		e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0);
	}
	doRevertAnimation(e, t) {
		let n = this.mirrorEl, r = this.sourceEl.getBoundingClientRect();
		n.style.transition = "top " + t + "ms,left " + t + "ms", _(n, {
			left: r.left,
			top: r.top
		}), ve(n, () => {
			n.style.transition = "", e();
		});
	}
	cleanup() {
		this.mirrorEl &&= (g(this.mirrorEl), null), this.sourceEl = null;
	}
	updateElPosition() {
		this.sourceEl && this.isVisible && _(this.getMirrorEl(), {
			left: this.sourceElRect.left + this.deltaX,
			top: this.sourceElRect.top + this.deltaY
		});
	}
	getMirrorEl() {
		let e = this.sourceElRect, t = this.mirrorEl;
		return t || (t = this.mirrorEl = this.sourceEl.cloneNode(!0), t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.style.pointerEvents = "none", t.classList.add("fc-event-dragging"), _(t, {
			position: "fixed",
			zIndex: this.zIndex,
			visibility: "",
			boxSizing: "border-box",
			width: e.right - e.left,
			height: e.bottom - e.top,
			right: "auto",
			bottom: "auto",
			margin: 0
		}), this.parentNode.appendChild(t)), t;
	}
}, Ue = class extends c {
	constructor(e, t) {
		super(), this.handleScroll = () => {
			this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange();
		}, this.scrollController = e, this.doesListening = t, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll);
	}
	destroy() {
		this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
	}
	getScrollTop() {
		return this.scrollTop;
	}
	getScrollLeft() {
		return this.scrollLeft;
	}
	setScrollTop(e) {
		this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
	}
	setScrollLeft(e) {
		this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
	}
	getClientWidth() {
		return this.clientWidth;
	}
	getClientHeight() {
		return this.clientHeight;
	}
	getScrollWidth() {
		return this.scrollWidth;
	}
	getScrollHeight() {
		return this.scrollHeight;
	}
	handleScrollChange() {}
}, We = class extends Ue {
	constructor(e, t) {
		super(new ge(e), t);
	}
	getEventTarget() {
		return this.scrollController.el;
	}
	computeClientRect() {
		return pe(this.scrollController.el);
	}
}, Ge = class extends Ue {
	constructor(e) {
		super(new ne(), e);
	}
	getEventTarget() {
		return window;
	}
	computeClientRect() {
		return {
			left: this.scrollLeft,
			right: this.scrollLeft + this.clientWidth,
			top: this.scrollTop,
			bottom: this.scrollTop + this.clientHeight
		};
	}
	handleScrollChange() {
		this.clientRect = this.computeClientRect();
	}
}, Ke = typeof performance == "function" ? performance.now : Date.now, qe = class {
	constructor() {
		this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
			if (this.isAnimating) {
				let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
				if (e) {
					let t = Ke();
					this.handleSide(e, (t - this.msSinceRequest) / 1e3), this.requestAnimation(t);
				} else this.isAnimating = !1;
			}
		};
	}
	start(e, t, n) {
		this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t));
	}
	handleMove(e, t) {
		if (this.isEnabled) {
			let n = e - window.scrollX, r = t - window.scrollY, i = this.pointerScreenY === null ? 0 : r - this.pointerScreenY, a = this.pointerScreenX === null ? 0 : n - this.pointerScreenX;
			i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), a < 0 ? this.everMovedLeft = !0 : a > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Ke()));
		}
	}
	stop() {
		if (this.isEnabled) {
			this.isAnimating = !1;
			for (let e of this.scrollCaches) e.destroy();
			this.scrollCaches = null;
		}
	}
	requestAnimation(e) {
		this.msSinceRequest = e, requestAnimationFrame(this.animate);
	}
	handleSide(e, t) {
		let { scrollCache: n } = e, { edgeThreshold: r } = this, i = r - e.distance, a = i * i / (r * r) * this.maxVelocity * t, o = 1;
		switch (e.name) {
			case "left": o = -1;
			case "right":
				n.setScrollLeft(n.getScrollLeft() + a * o);
				break;
			case "top": o = -1;
			case "bottom":
				n.setScrollTop(n.getScrollTop() + a * o);
				break;
		}
	}
	computeBestEdge(e, t) {
		let { edgeThreshold: n } = this, r = null, i = this.scrollCaches || [];
		for (let a of i) {
			let i = a.clientRect, o = e - i.left, s = i.right - e, c = t - i.top, l = i.bottom - t;
			o >= 0 && s >= 0 && c >= 0 && l >= 0 && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
				scrollCache: a,
				name: "top",
				distance: c
			}), l <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > l) && (r = {
				scrollCache: a,
				name: "bottom",
				distance: l
			}), o <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > o) && (r = {
				scrollCache: a,
				name: "left",
				distance: o
			}), s <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > s) && (r = {
				scrollCache: a,
				name: "right",
				distance: s
			}));
		}
		return r;
	}
	buildCaches(e) {
		return this.queryScrollEls(e).map((e) => e === window ? new Ge(!1) : new We(e, !1));
	}
	queryScrollEls(e) {
		let t = [];
		for (let n of this.scrollQuery) typeof n == "object" ? t.push(n) : t.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(n)));
		return t;
	}
}, X = class extends ye {
	constructor(e, t) {
		super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (e) => {
			this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, p(document.body), ae(document.body), e.isTouch || e.origEvent.preventDefault(), this.emitter.trigger("pointerdown", e), this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(e.subjectEl, e.pageX, e.pageY), this.startDelay(e), this.minDistance || this.handleDistanceSurpassed(e)));
		}, this.onPointerMove = (e) => {
			if (this.isInteracting) {
				if (this.emitter.trigger("pointermove", e), !this.isDistanceSurpassed) {
					let t = this.minDistance, n, { deltaX: r, deltaY: i } = e;
					n = r * r + i * i, n >= t * t && this.handleDistanceSurpassed(e);
				}
				this.isDragging && (e.origEvent.type !== "scroll" && (this.mirror.handleMove(e.pageX, e.pageY), this.autoScroller.handleMove(e.pageX, e.pageY)), this.emitter.trigger("dragmove", e));
			}
		}, this.onPointerUp = (e) => {
			this.isInteracting && (this.isInteracting = !1, se(document.body), ie(document.body), this.emitter.trigger("pointerup", e), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(e)), this.delayTimeoutId &&= (clearTimeout(this.delayTimeoutId), null));
		};
		let n = this.pointer = new Y(e);
		n.emitter.on("pointerdown", this.onPointerDown), n.emitter.on("pointermove", this.onPointerMove), n.emitter.on("pointerup", this.onPointerUp), t && (n.selector = t), this.mirror = new He(), this.autoScroller = new qe();
	}
	destroy() {
		this.pointer.destroy(), this.onPointerUp({});
	}
	startDelay(e) {
		typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(() => {
			this.delayTimeoutId = null, this.handleDelayEnd(e);
		}, this.delay) : this.handleDelayEnd(e);
	}
	handleDelayEnd(e) {
		this.isDelayEnded = !0, this.tryStartDrag(e);
	}
	handleDistanceSurpassed(e) {
		this.isDistanceSurpassed = !0, this.tryStartDrag(e);
	}
	tryStartDrag(e) {
		this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), this.touchScrollAllowed === !1 && this.pointer.cancelTouchScroll());
	}
	tryStopDrag(e) {
		this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
	}
	stopDrag(e) {
		this.isDragging = !1, this.emitter.trigger("dragend", e);
	}
	setIgnoreMove(e) {
		this.pointer.shouldIgnoreMove = e;
	}
	setMirrorIsVisible(e) {
		this.mirror.setIsVisible(e);
	}
	setMirrorNeedsRevert(e) {
		this.mirrorNeedsRevert = e;
	}
	setAutoScrollEnabled(e) {
		this.autoScroller.isEnabled = e;
	}
}, Je = class {
	constructor(e) {
		this.el = e, this.origRect = I(e), this.scrollCaches = r(e).map((e) => new We(e, !0));
	}
	destroy() {
		for (let e of this.scrollCaches) e.destroy();
	}
	computeLeft() {
		let e = this.origRect.left;
		for (let t of this.scrollCaches) e += t.origScrollLeft - t.getScrollLeft();
		return e;
	}
	computeTop() {
		let e = this.origRect.top;
		for (let t of this.scrollCaches) e += t.origScrollTop - t.getScrollTop();
		return e;
	}
	isWithinClipping(e, t) {
		let r = {
			left: e,
			top: t
		};
		for (let e of this.scrollCaches) if (!Ye(e.getEventTarget()) && !n(r, e.clientRect)) return !1;
		return !0;
	}
};
function Ye(e) {
	let t = e.tagName;
	return t === "HTML" || t === "BODY";
}
var Z = class {
	constructor(e, t) {
		this.useSubjectCenter = !1, this.requireInitial = !0, this.disablePointCheck = !1, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (e) => {
			let { dragging: t } = this;
			this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(e), this.initialHit || !this.requireInitial ? (t.setIgnoreMove(!1), this.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0);
		}, this.handleDragStart = (e) => {
			this.emitter.trigger("dragstart", e), this.handleMove(e, !0);
		}, this.handleDragMove = (e) => {
			this.emitter.trigger("dragmove", e), this.handleMove(e);
		}, this.handlePointerUp = (e) => {
			this.releaseHits(), this.emitter.trigger("pointerup", e);
		}, this.handleDragEnd = (e) => {
			this.movingHit && this.emitter.trigger("hitupdate", null, !0, e), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", e);
		}, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new me();
	}
	processFirstCoord(e) {
		let t = {
			left: e.pageX,
			top: e.pageY
		}, n = t, r = e.subjectEl, i;
		r instanceof HTMLElement && (i = I(r), n = ue(n, i));
		let a = this.initialHit = this.queryHitForOffset(n.left, n.top);
		if (a) {
			if (this.useSubjectCenter && i) {
				let e = he(i, a.rect);
				e && (n = xe(e));
			}
			this.coordAdjust = Oe(n, t);
		} else this.coordAdjust = {
			left: 0,
			top: 0
		};
	}
	handleMove(e, t) {
		let n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
		(t || !Q(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
	}
	prepareHits() {
		this.offsetTrackers = te(this.droppableStore, (e) => (e.component.prepareHits(), new Je(e.el)));
	}
	releaseHits() {
		let { offsetTrackers: e } = this;
		for (let t in e) e[t].destroy();
		this.offsetTrackers = {};
	}
	queryHitForOffset(e, t) {
		let { droppableStore: n, offsetTrackers: r } = this, i = null;
		for (let a in n) {
			let o = n[a].component, s = r[a];
			if (s && s.isWithinClipping(e, t)) {
				let n = s.computeLeft(), r = s.computeTop(), c = e - n, l = t - r, { origRect: u } = s, d = u.right - u.left, f = u.bottom - u.top;
				if (c >= 0 && c < d && l >= 0 && l < f) {
					let e = o.queryHit(c, l, d, f);
					e && ce(e.dateProfile.activeRange, e.dateSpan.range) && (this.disablePointCheck || s.el.contains(s.el.getRootNode().elementFromPoint(c + n - window.scrollX, l + r - window.scrollY))) && (!i || e.layer > i.layer) && (e.componentId = a, e.context = o.context, e.rect.left += n, e.rect.right += n, e.rect.top += r, e.rect.bottom += r, i = e);
				}
			}
		}
		return i;
	}
};
function Q(e, t) {
	return !e && !t || !!e == !!t && ke(e.dateSpan, t.dateSpan);
}
function Xe(e, t) {
	let n = {};
	for (let r of t.pluginHooks.datePointTransforms) Object.assign(n, r(e, t));
	return Object.assign(n, Ze(e, t.dateEnv)), n;
}
function Ze(e, t) {
	return {
		date: t.toDate(e.range.start),
		dateStr: t.formatIso(e.range.start, { omitTime: e.allDay }),
		allDay: e.allDay
	};
}
var Qe = class extends U {
	constructor(e) {
		super(e), this.handlePointerDown = (e) => {
			let { dragging: t } = this, n = e.origEvent.target;
			t.setIgnoreMove(!this.component.isValidDateDownEl(n));
		}, this.handleDragEnd = (e) => {
			let { component: t } = this, { pointer: n } = this.dragging;
			if (!n.wasTouchScroll) {
				let { initialHit: n, finalHit: r } = this.hitDragging;
				if (n && r && Q(n, r)) {
					let { context: r } = t, i = Object.assign(Object.assign({}, Xe(n.dateSpan, r)), {
						dayEl: n.dayEl,
						jsEvent: e.origEvent,
						view: r.viewApi || r.calendarApi.view
					});
					r.emitter.trigger("dateClick", i);
				}
			}
		}, this.dragging = new X(e.el), this.dragging.autoScroller.isEnabled = !1;
		let t = this.hitDragging = new Z(this.dragging, j(e));
		t.emitter.on("pointerdown", this.handlePointerDown), t.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
}, $e = class extends U {
	constructor(e) {
		super(e), this.dragSelection = null, this.handlePointerDown = (e) => {
			let { component: t, dragging: n } = this, { options: r } = t.context, i = r.selectable && t.isValidDateDownEl(e.origEvent.target);
			n.setIgnoreMove(!i), n.delay = e.isTouch ? et(t) : null;
		}, this.handleDragStart = (e) => {
			this.component.context.calendarApi.unselect(e);
		}, this.handleHitUpdate = (e, t) => {
			let { context: n } = this.component, r = null, i = !1;
			if (e) {
				let t = this.hitDragging.initialHit;
				e.componentId === t.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(t, e) || (r = tt(t, e, n.pluginHooks.dateSelectionTransformers)), (!r || !de(r, e.dateProfile, n)) && (i = !0, r = null);
			}
			r ? n.dispatch({
				type: "SELECT_DATES",
				selection: r
			}) : t || n.dispatch({ type: "UNSELECT_DATES" }), i ? s() : A(), t || (this.dragSelection = r);
		}, this.handlePointerUp = (e) => {
			this.dragSelection &&= (Ce(this.dragSelection, e, this.component.context), null);
		};
		let { component: t } = e, { options: n } = t.context, r = this.dragging = new X(e.el);
		r.touchScrollAllowed = !1, r.minDistance = n.selectMinDistance || 0, r.autoScroller.isEnabled = n.dragScroll;
		let i = this.hitDragging = new Z(this.dragging, j(e));
		i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("pointerup", this.handlePointerUp);
	}
	destroy() {
		this.dragging.destroy();
	}
};
function et(e) {
	let { options: t } = e.context, n = t.selectLongPressDelay;
	return n ??= t.longPressDelay, n;
}
function tt(e, t, n) {
	let r = e.dateSpan, i = t.dateSpan, a = [
		r.range.start,
		r.range.end,
		i.range.start,
		i.range.end
	];
	a.sort(we);
	let o = {};
	for (let r of n) {
		let n = r(e, t);
		if (n === !1) return null;
		n && Object.assign(o, n);
	}
	return o.range = {
		start: a[0],
		end: a[3]
	}, o.allDay = r.allDay, o;
}
var $ = class t extends U {
	constructor(n) {
		super(n), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (e) => {
			let t = e.origEvent.target, { component: n, dragging: r } = this, { mirror: i } = r, { options: a } = n.context, o = n.context;
			this.subjectEl = e.subjectEl;
			let s = this.subjectSeg = b(e.subjectEl), c = (this.eventRange = s.eventRange).instance.instanceId;
			this.relevantEvents = ee(o.getCurrentData().eventStore, c), r.minDistance = e.isTouch ? 0 : a.eventDragMinDistance, r.delay = e.isTouch && c !== n.props.eventSelection ? rt(n) : null, a.fixedMirrorParent ? i.parentNode = a.fixedMirrorParent : i.parentNode = v(t, ".fc"), i.revertDuration = a.dragRevertDuration;
			let l = n.isValidSegDownEl(t) && !v(t, ".fc-event-resizer");
			r.setIgnoreMove(!l), this.isDragging = l && e.subjectEl.classList.contains("fc-event-draggable");
		}, this.handleDragStart = (e) => {
			let t = this.component.context, n = this.eventRange, r = n.instance.instanceId;
			e.isTouch ? r !== this.component.props.eventSelection && t.dispatch({
				type: "SELECT_EVENT",
				eventInstanceId: r
			}) : t.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
				el: this.subjectEl,
				event: new B(t, n.def, n.instance),
				jsEvent: e.origEvent,
				view: t.viewApi
			}));
		}, this.handleHitUpdate = (e, t) => {
			if (!this.isDragging) return;
			let n = this.relevantEvents, r = this.hitDragging.initialHit, i = this.component.context, o = null, c = null, l = null, u = !1, f = {
				affectedEvents: n,
				mutatedEvents: W(),
				isEvent: !0
			};
			if (e) {
				o = e.context;
				let t = o.options;
				i === o || t.editable && t.droppable ? (c = nt(r, e, this.eventRange.instance.range.start, o.getCurrentData().pluginHooks.eventDragMutationMassagers), c && (l = d(n, o.getCurrentData().eventUiBases, c, o), f.mutatedEvents = l, a(f, e.dateProfile, o) || (u = !0, c = null, l = null, f.mutatedEvents = W()))) : o = null;
			}
			this.displayDrag(o, f), u ? s() : A(), t || (i === o && Q(r, e) && (c = null), this.dragging.setMirrorNeedsRevert(!c), this.dragging.setMirrorIsVisible(!e || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = o, this.validMutation = c, this.mutatedRelevantEvents = l);
		}, this.handlePointerUp = () => {
			this.isDragging || this.cleanup();
		}, this.handleDragEnd = (t) => {
			if (this.isDragging) {
				let n = this.component.context, r = n.viewApi, { receivingContext: i, validMutation: a } = this, o = this.eventRange.def, s = this.eventRange.instance, c = new B(n, o, s), l = this.relevantEvents, u = this.mutatedRelevantEvents, { finalHit: d } = this.hitDragging;
				if (this.clearDrag(), n.emitter.trigger("eventDragStop", {
					el: this.subjectEl,
					event: c,
					jsEvent: t.origEvent,
					view: r
				}), a) {
					if (i === n) {
						let i = new B(n, u.defs[o.defId], s ? u.instances[s.instanceId] : null);
						n.dispatch({
							type: "MERGE_EVENTS",
							eventStore: u
						});
						let d = {
							oldEvent: c,
							event: i,
							relatedEvents: e(u, n, s),
							revert() {
								n.dispatch({
									type: "MERGE_EVENTS",
									eventStore: l
								});
							}
						}, f = {};
						for (let e of n.getCurrentData().pluginHooks.eventDropTransformers) Object.assign(f, e(a, n));
						n.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, d), f), {
							el: t.subjectEl,
							delta: a.datesDelta,
							jsEvent: t.origEvent,
							view: r
						})), n.emitter.trigger("eventChange", d);
					} else if (i) {
						let a = {
							event: c,
							relatedEvents: e(l, n, s),
							revert() {
								n.dispatch({
									type: "MERGE_EVENTS",
									eventStore: l
								});
							}
						};
						n.emitter.trigger("eventLeave", Object.assign(Object.assign({}, a), {
							draggedEl: t.subjectEl,
							view: r
						})), n.dispatch({
							type: "REMOVE_EVENTS",
							eventStore: l
						}), n.emitter.trigger("eventRemove", a);
						let f = u.defs[o.defId], p = u.instances[s.instanceId], m = new B(i, f, p);
						i.dispatch({
							type: "MERGE_EVENTS",
							eventStore: u
						});
						let h = {
							event: m,
							relatedEvents: e(u, i, p),
							revert() {
								i.dispatch({
									type: "REMOVE_EVENTS",
									eventStore: u
								});
							}
						};
						i.emitter.trigger("eventAdd", h), t.isTouch && i.dispatch({
							type: "SELECT_EVENT",
							eventInstanceId: s.instanceId
						}), i.emitter.trigger("drop", Object.assign(Object.assign({}, Xe(d.dateSpan, i)), {
							draggedEl: t.subjectEl,
							jsEvent: t.origEvent,
							view: d.context.viewApi
						})), i.emitter.trigger("eventReceive", Object.assign(Object.assign({}, h), {
							draggedEl: t.subjectEl,
							view: d.context.viewApi
						}));
					}
				} else n.emitter.trigger("_noEventDrop");
			}
			this.cleanup();
		};
		let { component: r } = this, { options: i } = r.context, o = this.dragging = new X(n.el);
		o.pointer.selector = t.SELECTOR, o.touchScrollAllowed = !1, o.autoScroller.isEnabled = i.dragScroll;
		let c = this.hitDragging = new Z(this.dragging, be);
		c.useSubjectCenter = n.useEventCenter, c.emitter.on("pointerdown", this.handlePointerDown), c.emitter.on("dragstart", this.handleDragStart), c.emitter.on("hitupdate", this.handleHitUpdate), c.emitter.on("pointerup", this.handlePointerUp), c.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
	displayDrag(e, t) {
		let n = this.component.context, r = this.receivingContext;
		r && r !== e && (r === n ? r.dispatch({
			type: "SET_EVENT_DRAG",
			state: {
				affectedEvents: t.affectedEvents,
				mutatedEvents: W(),
				isEvent: !0
			}
		}) : r.dispatch({ type: "UNSET_EVENT_DRAG" })), e && e.dispatch({
			type: "SET_EVENT_DRAG",
			state: t
		});
	}
	clearDrag() {
		let e = this.component.context, { receivingContext: t } = this;
		t && t.dispatch({ type: "UNSET_EVENT_DRAG" }), e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
	}
	cleanup() {
		this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
	}
};
$.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function nt(e, t, n, r) {
	let i = e.dateSpan, a = t.dateSpan, o = i.range.start, s = a.range.start, c = {};
	i.allDay !== a.allDay && (c.allDay = a.allDay, c.hasEnd = t.context.options.allDayMaintainDuration, o = a.allDay ? x(n) : n);
	let l = y(o, s, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
	l.milliseconds && (c.allDay = !1);
	let u = {
		datesDelta: l,
		standardProps: c
	};
	for (let n of r) n(u, e, t);
	return u;
}
function rt(e) {
	let { options: t } = e.context, n = t.eventLongPressDelay;
	return n ??= t.longPressDelay, n;
}
var it = class extends U {
	constructor(t) {
		super(t), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (e) => {
			let { component: t } = this, n = b(this.querySegEl(e)), r = this.eventRange = n.eventRange;
			this.dragging.minDistance = t.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && this.component.props.eventSelection !== r.instance.instanceId);
		}, this.handleDragStart = (e) => {
			let { context: t } = this.component, n = this.eventRange;
			this.relevantEvents = ee(t.getCurrentData().eventStore, this.eventRange.instance.instanceId);
			let r = this.querySegEl(e);
			this.draggingSegEl = r, this.draggingSeg = b(r), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
				el: r,
				event: new B(t, n.def, n.instance),
				jsEvent: e.origEvent,
				view: t.viewApi
			});
		}, this.handleHitUpdate = (e, t, n) => {
			let { context: r } = this.component, i = this.relevantEvents, o = this.hitDragging.initialHit, c = this.eventRange.instance, l = null, u = null, f = !1, p = {
				affectedEvents: i,
				mutatedEvents: W(),
				isEvent: !0
			};
			e && (e.componentId === o.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(o, e) || (l = at(o, e, n.subjectEl.classList.contains("fc-event-resizer-start"), c.range))), l && (u = d(i, r.getCurrentData().eventUiBases, l, r), p.mutatedEvents = u, a(p, e.dateProfile, r) || (f = !0, l = null, u = null, p.mutatedEvents = null)), u ? r.dispatch({
				type: "SET_EVENT_RESIZE",
				state: p
			}) : r.dispatch({ type: "UNSET_EVENT_RESIZE" }), f ? s() : A(), t || (l && Q(o, e) && (l = null), this.validMutation = l, this.mutatedRelevantEvents = u);
		}, this.handleDragEnd = (t) => {
			let { context: n } = this.component, r = this.eventRange.def, i = this.eventRange.instance, a = new B(n, r, i), o = this.relevantEvents, s = this.mutatedRelevantEvents;
			if (n.emitter.trigger("eventResizeStop", {
				el: this.draggingSegEl,
				event: a,
				jsEvent: t.origEvent,
				view: n.viewApi
			}), this.validMutation) {
				let c = new B(n, s.defs[r.defId], i ? s.instances[i.instanceId] : null);
				n.dispatch({
					type: "MERGE_EVENTS",
					eventStore: s
				});
				let l = {
					oldEvent: a,
					event: c,
					relatedEvents: e(s, n, i),
					revert() {
						n.dispatch({
							type: "MERGE_EVENTS",
							eventStore: o
						});
					}
				};
				n.emitter.trigger("eventResize", Object.assign(Object.assign({}, l), {
					el: this.draggingSegEl,
					startDelta: this.validMutation.startDelta || V(0),
					endDelta: this.validMutation.endDelta || V(0),
					jsEvent: t.origEvent,
					view: n.viewApi
				})), n.emitter.trigger("eventChange", l);
			} else n.emitter.trigger("_noEventResize");
			this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
		};
		let { component: n } = t, r = this.dragging = new X(t.el);
		r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.context.options.dragScroll;
		let i = this.hitDragging = new Z(this.dragging, j(t));
		i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
	querySegEl(e) {
		return v(e.subjectEl, ".fc-event");
	}
};
function at(e, t, n, r) {
	let i = e.context.dateEnv, a = e.dateSpan.range.start, o = t.dateSpan.range.start, s = y(a, o, i, e.largeUnit);
	if (n) {
		if (i.add(r.start, s) < r.end) return { startDelta: s };
	} else if (i.add(r.end, s) > r.start) return { endDelta: s };
	return null;
}
var ot = class {
	constructor(e) {
		this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (e) => {
			e.jsEvent && (this.isRecentPointerDateSelect = !0);
		}, this.onDocumentPointerDown = (e) => {
			let t = this.context.options.unselectCancel, n = f(e.origEvent);
			this.matchesCancel = !!v(n, t), this.matchesEvent = !!v(n, $.SELECTOR);
		}, this.onDocumentPointerUp = (e) => {
			let { context: t } = this, { documentPointer: n } = this, r = t.getCurrentData();
			if (!n.wasTouchScroll) {
				if (r.dateSelection && !this.isRecentPointerDateSelect) {
					let n = t.options.unselectAuto;
					n && (!n || !this.matchesCancel) && t.calendarApi.unselect(e);
				}
				r.eventSelection && !this.matchesEvent && t.dispatch({ type: "UNSELECT_EVENT" });
			}
			this.isRecentPointerDateSelect = !1;
		};
		let t = this.documentPointer = new Y(document);
		t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
	}
	destroy() {
		this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
	}
}, st = { fixedMirrorParent: S }, ct = {
	dateClick: S,
	eventDragStart: S,
	eventDragStop: S,
	eventDrop: S,
	eventResizeStart: S,
	eventResizeStop: S,
	eventResize: S,
	drop: S,
	eventReceive: S,
	eventLeave: S
};
E.dataAttrPrefix = "";
var lt = M({
	name: "@fullcalendar/interaction",
	componentInteractions: [
		Qe,
		$e,
		$,
		it
	],
	calendarInteractions: [ot],
	elementDraggingImpl: X,
	optionRefiners: st,
	listenerRefiners: ct
}), ut = class extends L {
	constructor() {
		super(...arguments), this.state = { textId: O() };
	}
	render() {
		let { theme: e, dateEnv: t, options: n, viewApi: r } = this.context, { cellId: i, dayDate: a, todayRange: o } = this.props, { textId: s } = this.state, c = oe(a, o), l = n.listDayFormat ? t.format(a, n.listDayFormat) : "", d = n.listDaySideFormat ? t.format(a, n.listDaySideFormat) : "", f = Object.assign({
			date: t.toDate(a),
			view: r,
			textId: s,
			text: l,
			sideText: d,
			navLinkAttrs: N(this.context, a),
			sideNavLinkAttrs: N(this.context, a, "day", !1)
		}, c);
		return F(P, {
			elTag: "tr",
			elClasses: ["fc-list-day", ...m(c, e)],
			elAttrs: { "data-date": u(a) },
			renderProps: f,
			generatorName: "dayHeaderContent",
			customGenerator: n.dayHeaderContent,
			defaultGenerator: dt,
			classNameGenerator: n.dayHeaderClassNames,
			didMount: n.dayHeaderDidMount,
			willUnmount: n.dayHeaderWillUnmount
		}, (t) => F("th", {
			scope: "colgroup",
			colSpan: 3,
			id: i,
			"aria-labelledby": s
		}, F(t, {
			elTag: "div",
			elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")]
		})));
	}
};
function dt(e) {
	return F(C, null, e.text && F("a", Object.assign({
		id: e.textId,
		className: "fc-list-day-text"
	}, e.navLinkAttrs), e.text), e.sideText && F("a", Object.assign({
		"aria-hidden": !0,
		className: "fc-list-day-side-text"
	}, e.sideNavLinkAttrs), e.sideText));
}
var ft = H({
	hour: "numeric",
	minute: "2-digit",
	meridiem: "short"
}), pt = class extends L {
	render() {
		let { props: e, context: t } = this, { options: n } = t, { seg: r, timeHeaderId: i, eventHeaderId: a, dateHeaderId: o } = e, s = n.eventTimeFormat || ft;
		return F(le, Object.assign({}, e, {
			elTag: "tr",
			elClasses: ["fc-list-event", r.eventRange.def.url && "fc-event-forced-url"],
			defaultGenerator: () => mt(r, t),
			seg: r,
			timeText: "",
			disableDragging: !0,
			disableResizing: !0
		}), (e, n) => F(C, null, ht(r, s, t, i, o), F("td", {
			"aria-hidden": !0,
			className: "fc-list-event-graphic"
		}, F("span", {
			className: "fc-list-event-dot",
			style: { borderColor: n.borderColor || n.backgroundColor }
		})), F(e, {
			elTag: "td",
			elClasses: ["fc-list-event-title"],
			elAttrs: { headers: `${a} ${o}` }
		})));
	}
};
function mt(e, n) {
	let r = t(e, n);
	return F("a", Object.assign({}, r), e.eventRange.def.title);
}
function ht(e, t, n, r, i) {
	let { options: a } = n;
	if (a.displayEventTime !== !1) {
		let o = e.eventRange.def, s = e.eventRange.instance, c = !1, l;
		if (o.allDay ? c = !0 : De(e.eventRange.range) ? e.isStart ? l = R(e, t, n, null, null, s.range.start, e.end) : e.isEnd ? l = R(e, t, n, null, null, e.start, s.range.end) : c = !0 : l = R(e, t, n), c) {
			let e = {
				text: n.options.allDayText,
				view: n.viewApi
			};
			return F(P, {
				elTag: "td",
				elClasses: ["fc-list-event-time"],
				elAttrs: { headers: `${r} ${i}` },
				renderProps: e,
				generatorName: "allDayContent",
				customGenerator: a.allDayContent,
				defaultGenerator: gt,
				classNameGenerator: a.allDayClassNames,
				didMount: a.allDayDidMount,
				willUnmount: a.allDayWillUnmount
			});
		}
		return F("td", { className: "fc-list-event-time" }, l);
	}
	return null;
}
function gt(e) {
	return e.text;
}
var _t = class extends z {
	constructor() {
		super(...arguments), this.computeDateVars = k(yt), this.eventStoreToSegs = k(this._eventStoreToSegs), this.state = {
			timeHeaderId: O(),
			eventHeaderId: O(),
			dateHeaderIdRoot: O()
		}, this.setRootEl = (e) => {
			e ? this.context.registerInteractiveComponent(this, { el: e }) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e, context: t } = this, { dayDates: n, dayRanges: r } = this.computeDateVars(e.dateProfile), i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);
		return F(l, {
			elRef: this.setRootEl,
			elClasses: [
				"fc-list",
				t.theme.getClass("table"),
				t.options.stickyHeaderDates === !1 ? "" : "fc-list-sticky"
			],
			viewSpec: t.viewSpec
		}, F(o, {
			liquid: !e.isHeightAuto,
			overflowX: e.isHeightAuto ? "visible" : "hidden",
			overflowY: e.isHeightAuto ? "visible" : "auto"
		}, i.length > 0 ? this.renderSegList(i, n) : this.renderEmptyMessage()));
	}
	renderEmptyMessage() {
		let { options: e, viewApi: t } = this.context;
		return F(P, {
			elTag: "div",
			elClasses: ["fc-list-empty"],
			renderProps: {
				text: e.noEventsText,
				view: t
			},
			generatorName: "noEventsContent",
			customGenerator: e.noEventsContent,
			defaultGenerator: vt,
			classNameGenerator: e.noEventsClassNames,
			didMount: e.noEventsDidMount,
			willUnmount: e.noEventsWillUnmount
		}, (e) => F(e, {
			elTag: "div",
			elClasses: ["fc-list-empty-cushion"]
		}));
	}
	renderSegList(e, t) {
		let { theme: n, options: r } = this.context, { timeHeaderId: a, eventHeaderId: o, dateHeaderIdRoot: s } = this.state, c = bt(e);
		return F(i, { unit: "day" }, (e, i) => {
			let l = [];
			for (let n = 0; n < c.length; n += 1) {
				let d = c[n];
				if (d) {
					let c = u(t[n]), f = s + "-" + c;
					l.push(F(ut, {
						key: c,
						cellId: f,
						dayDate: t[n],
						todayRange: i
					})), d = _e(d, r.eventOrder);
					for (let t of d) l.push(F(pt, Object.assign({
						key: c + ":" + t.eventRange.instance.instanceId,
						seg: t,
						isDragging: !1,
						isResizing: !1,
						isDateSelecting: !1,
						isSelected: !1,
						timeHeaderId: a,
						eventHeaderId: o,
						dateHeaderId: f
					}, fe(t, i, e))));
				}
			}
			return F("table", { className: "fc-list-table " + n.getClass("table") }, F("thead", null, F("tr", null, F("th", {
				scope: "col",
				id: a
			}, r.timeHint), F("th", {
				scope: "col",
				"aria-hidden": !0
			}), F("th", {
				scope: "col",
				id: o
			}, r.eventHint))), F("tbody", null, l));
		});
	}
	_eventStoreToSegs(e, t, n) {
		return this.eventRangesToSegs(Se(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n);
	}
	eventRangesToSegs(e, t) {
		let n = [];
		for (let r of e) n.push(...this.eventRangeToSegs(r, t));
		return n;
	}
	eventRangeToSegs(e, t) {
		let { dateEnv: n } = this.context, { nextDayThreshold: r } = this.context.options, i = e.range, a = e.def.allDay, o, s, c, l = [];
		for (o = 0; o < t.length; o += 1) if (s = D(i, t[o]), s && (c = {
			component: this,
			eventRange: e,
			start: s.start,
			end: s.end,
			isStart: e.isStart && s.start.valueOf() === i.start.valueOf(),
			isEnd: e.isEnd && s.end.valueOf() === i.end.valueOf(),
			dayIndex: o
		}, l.push(c), !c.isEnd && !a && o + 1 < t.length && i.end < n.add(t[o + 1].start, r))) {
			c.end = i.end, c.isEnd = !0;
			break;
		}
		return l;
	}
};
function vt(e) {
	return e.text;
}
function yt(e) {
	let t = x(e.renderRange.start), n = e.renderRange.end, r = [], i = [];
	for (; t < n;) r.push(t), i.push({
		start: t,
		end: G(t, 1)
	}), t = G(t, 1);
	return {
		dayDates: r,
		dayRanges: i
	};
}
function bt(e) {
	let t = [], n, r;
	for (n = 0; n < e.length; n += 1) r = e[n], (t[r.dayIndex] || (t[r.dayIndex] = [])).push(r);
	return t;
}
w(":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}");
//#endregion
//#region node_modules/@fullcalendar/list/index.js
var xt = {
	listDayFormat: St,
	listDaySideFormat: St,
	noEventsClassNames: S,
	noEventsContent: S,
	noEventsDidMount: S,
	noEventsWillUnmount: S
};
function St(e) {
	return e === !1 ? null : H(e);
}
var Ct = M({
	name: "@fullcalendar/list",
	optionRefiners: xt,
	views: {
		list: {
			component: _t,
			buttonTextKey: "list",
			listDayFormat: {
				month: "long",
				day: "numeric",
				year: "numeric"
			}
		},
		listDay: {
			type: "list",
			duration: { days: 1 },
			listDayFormat: { weekday: "long" }
		},
		listWeek: {
			type: "list",
			duration: { weeks: 1 },
			listDayFormat: { weekday: "long" },
			listDaySideFormat: {
				month: "long",
				day: "numeric",
				year: "numeric"
			}
		},
		listMonth: {
			type: "list",
			duration: { month: 1 },
			listDaySideFormat: { weekday: "long" }
		},
		listYear: {
			type: "list",
			duration: { year: 1 },
			listDaySideFormat: { weekday: "long" }
		}
	}
}), wt = class extends z {
	constructor() {
		super(...arguments), this.buildDayTableModel = k(Fe), this.slicer = new Pe(), this.state = { labelId: O() };
	}
	render() {
		let { props: e, state: t, context: n } = this, { dateProfile: r, forPrint: i } = e, { options: a } = n, o = this.buildDayTableModel(r, n.dateProfileGenerator), s = this.slicer.sliceProps(e, r, a.nextDayThreshold, n, o), c = e.tableWidth == null ? null : e.tableWidth / a.aspectRatio, l = o.cells.length, u = c == null ? null : c / l;
		return F("div", {
			ref: e.elRef,
			"data-date": e.isoDateStr,
			className: "fc-multimonth-month",
			style: { width: e.width },
			role: "grid",
			"aria-labelledby": t.labelId
		}, F("div", {
			className: "fc-multimonth-header",
			style: { marginBottom: u },
			role: "presentation"
		}, F("div", {
			className: "fc-multimonth-title",
			id: t.labelId
		}, n.dateEnv.format(e.dateProfile.currentRange.start, e.titleFormat)), F("table", {
			className: ["fc-multimonth-header-table", n.theme.getClass("table")].join(" "),
			role: "presentation"
		}, F("thead", { role: "rowgroup" }, F(Ee, {
			dateProfile: e.dateProfile,
			dates: o.headerDates,
			datesRepDistinctDays: !1
		})))), F("div", {
			className: [
				"fc-multimonth-daygrid",
				"fc-daygrid",
				"fc-daygrid-body",
				!i && "fc-daygrid-body-balanced",
				i && "fc-daygrid-body-unbalanced",
				i && "fc-daygrid-body-natural"
			].join(" "),
			style: { marginTop: -u }
		}, F("table", {
			className: ["fc-multimonth-daygrid-table", n.theme.getClass("table")].join(" "),
			style: { height: i ? "" : c },
			role: "presentation"
		}, F("tbody", { role: "rowgroup" }, F(Me, Object.assign({}, s, {
			dateProfile: r,
			cells: o.cells,
			eventSelection: e.eventSelection,
			dayMaxEvents: !i,
			dayMaxEventRows: !i,
			showWeekNumbers: a.weekNumbers,
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight,
			forPrint: i
		}))))));
	}
}, Tt = class extends z {
	constructor() {
		super(...arguments), this.splitDateProfileByMonth = k(Dt), this.buildMonthFormat = k(At), this.scrollElRef = T(), this.firstMonthElRef = T(), this.needsScrollReset = !1, this.handleSizing = (e) => {
			e && this.updateSize();
		};
	}
	render() {
		let { context: e, props: t, state: n } = this, { options: r } = e, { clientWidth: i, clientHeight: a } = n, o = n.monthHPadding || 0, s = Math.min(i == null ? 1 : Math.floor(i / (r.multiMonthMinWidth + o)), r.multiMonthMaxColumns) || 1, c = 100 / s + "%", u = i == null ? null : i / s - o, d = i != null && s === 1, f = this.splitDateProfileByMonth(e.dateProfileGenerator, t.dateProfile, e.dateEnv, !d && r.fixedWeekCount, r.showNonCurrentDates), p = this.buildMonthFormat(r.multiMonthTitleFormat, f), m = [
			"fc-multimonth",
			d ? "fc-multimonth-singlecol" : "fc-multimonth-multicol",
			u != null && u < 400 ? "fc-multimonth-compact" : "",
			t.isHeightAuto ? "" : "fc-scroller"
		];
		return F(l, {
			elRef: this.scrollElRef,
			elClasses: m,
			viewSpec: e.viewSpec
		}, f.map((e, n) => {
			let r = h(e.currentRange.start);
			return F(wt, Object.assign({}, t, {
				key: r,
				isoDateStr: r,
				elRef: n === 0 ? this.firstMonthElRef : void 0,
				titleFormat: p,
				dateProfile: e,
				width: c,
				tableWidth: u,
				clientWidth: i,
				clientHeight: a
			}));
		}));
	}
	componentDidMount() {
		this.updateSize(), this.context.addResizeHandler(this.handleSizing), this.requestScrollReset();
	}
	componentDidUpdate(e) {
		re(e, this.props) || this.handleSizing(!1), e.dateProfile === this.props.dateProfile ? this.flushScrollReset() : this.requestScrollReset();
	}
	componentWillUnmount() {
		this.context.removeResizeHandler(this.handleSizing);
	}
	updateSize() {
		let e = this.scrollElRef.current, t = this.firstMonthElRef.current;
		e && this.setState({
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight
		}), t && e && (this.state.monthHPadding ?? this.setState({ monthHPadding: e.clientWidth - t.firstChild.offsetWidth }));
	}
	requestScrollReset() {
		this.needsScrollReset = !0, this.flushScrollReset();
	}
	flushScrollReset() {
		if (this.needsScrollReset && this.state.monthHPadding != null) {
			let { currentDate: e } = this.props.dateProfile, t = this.scrollElRef.current;
			t.scrollTop = t.querySelector(`[data-date="${h(e)}"]`).getBoundingClientRect().top - this.firstMonthElRef.current.getBoundingClientRect().top, this.needsScrollReset = !1;
		}
	}
	shouldComponentUpdate() {
		return !0;
	}
}, Et = V(1, "month");
function Dt(e, t, n, r, i) {
	let { start: a, end: o } = t.currentRange, s = a, c = [];
	for (; s.valueOf() < o.valueOf();) {
		let a = n.add(s, Et), o = {
			start: e.skipHiddenDays(s),
			end: e.skipHiddenDays(a, -1, !0)
		}, l = Ne({
			currentRange: o,
			snapToWeek: !0,
			fixedWeekCount: r,
			dateEnv: n
		});
		l = {
			start: e.skipHiddenDays(l.start),
			end: e.skipHiddenDays(l.end, -1, !0)
		};
		let u = t.activeRange ? D(t.activeRange, i ? l : o) : null;
		c.push({
			currentDate: t.currentDate,
			isValid: t.isValid,
			validRange: t.validRange,
			renderRange: l,
			activeRange: u,
			currentRange: o,
			currentRangeUnit: "month",
			isRangeAllDay: !0,
			dateIncrement: t.dateIncrement,
			slotMinTime: t.slotMaxTime,
			slotMaxTime: t.slotMinTime
		}), s = a;
	}
	return c;
}
var Ot = H({
	year: "numeric",
	month: "long"
}), kt = H({ month: "long" });
function At(e, t) {
	return e || (t[0].currentRange.start.getUTCFullYear() === t[t.length - 1].currentRange.start.getUTCFullYear() ? kt : Ot);
}
var jt = {
	multiMonthTitleFormat: H,
	multiMonthMaxColumns: Number,
	multiMonthMinWidth: Number
};
w(".fc .fc-multimonth{border:1px solid var(--fc-border-color);display:flex;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto}.fc .fc-multimonth-title{font-size:1.2em;font-weight:700;padding:1em 0;text-align:center}.fc .fc-multimonth-daygrid{background:var(--fc-page-bg-color)}.fc .fc-multimonth-daygrid-table,.fc .fc-multimonth-header-table{table-layout:fixed;width:100%}.fc .fc-multimonth-daygrid-table{border-top-style:hidden!important}.fc .fc-multimonth-singlecol .fc-multimonth{position:relative}.fc .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:relative;top:0;z-index:2}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid{position:relative;z-index:1}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid-table,.fc .fc-multimonth-singlecol .fc-multimonth-header-table{border-left-style:hidden;border-right-style:hidden}.fc .fc-multimonth-singlecol .fc-multimonth-month:last-child .fc-multimonth-daygrid-table{border-bottom-style:hidden}.fc .fc-multimonth-multicol{line-height:1}.fc .fc-multimonth-multicol .fc-multimonth-month{padding:0 1.2em 1.2em}.fc .fc-multimonth-multicol .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);display:block;float:none;padding:1px}.fc .fc-multimonth-compact{line-height:1}.fc .fc-multimonth-compact .fc-multimonth-daygrid-table,.fc .fc-multimonth-compact .fc-multimonth-header-table{font-size:.9em}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{position:sticky}.fc-media-print .fc-multimonth{overflow:visible}");
//#endregion
//#region resources/js/components/filament-fullcalendar.js
var Mt = {
	interaction: lt,
	dayGrid: Ae,
	timeGrid: Ie,
	list: Ct,
	multiMonth: M({
		name: "@fullcalendar/multimonth",
		initialView: "multiMonthYear",
		optionRefiners: jt,
		views: {
			multiMonth: {
				component: Tt,
				dateProfileGeneratorClass: je,
				multiMonthMinWidth: 350,
				multiMonthMaxColumns: 3
			},
			multiMonthYear: {
				type: "multiMonth",
				duration: { years: 1 },
				fixedWeekCount: !0,
				showNonCurrentDates: !1
			}
		}
	})
}, Nt = [
	{
		names: [
			"scrollGrid",
			"timeline",
			"adaptive",
			"resource",
			"resourceDayGrid",
			"resourceTimeline",
			"resourceTimeGrid"
		],
		load: () => import("../filament-fullcalendar-premium-C2F7gwgV.js")
	},
	{
		names: ["moment", "momentTimezone"],
		load: () => import("../filament-fullcalendar-moment-BFOdhCdA.js")
	},
	{
		names: ["rrule"],
		load: () => import("../filament-fullcalendar-rrule-BmeKpHrF.js")
	}
];
async function Pt(e) {
	let t = await Promise.all(Nt.filter((t) => e.some((e) => t.names.includes(e))).map((e) => e.load())), n = Object.assign({ ...Mt }, ...t.map((e) => e.default));
	return e.map((e) => {
		if (!n[e]) throw Error(`[${e}] is not a FullCalendar plugin this package knows.`);
		return n[e];
	});
}
var Ft = (e) => !e || /^en([-_]us)?$/i.test(e);
async function It(e) {
	return Ft(e) ? [] : (await import("../filament-fullcalendar-locales-D70-mQ5L.js")).default;
}
function Lt({ id: e, locale: t, plugins: n, schedulerLicenseKey: r, timeZone: i, config: a, resources: o, editable: s, selectable: c, toolbarButtons: l, hasSpaMode: u, shouldReportDates: d, callbacks: f }) {
	let p = (e, ...t) => typeof f[e] == "function" && f[e](...t) === !1;
	return {
		calendar: null,
		listeners: {},
		pendingDateInteraction: null,
		isDestroyed: !1,
		resizeObserver: null,
		lastWidth: null,
		initialResources: Array.isArray(o) ? o : null,
		async init() {
			let [m, h] = await Promise.all([Pt(n), It(a.locale ?? t)]);
			if (this.isDestroyed) return;
			this.calendar = new Te(this.$el, {
				headerToolbar: {
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,dayGridWeek,dayGridDay"
				},
				plugins: m,
				locale: t,
				...r && { schedulerLicenseKey: r },
				timeZone: i,
				editable: s,
				selectable: c,
				...o !== !1 && { resources: (e, t, n) => {
					if (this.initialResources) {
						t(this.initialResources), this.initialResources = null;
						return;
					}
					this.$wire.handleFetchResources(e?.startStr ? {
						start: e.startStr,
						end: e.endStr,
						timezone: e.timeZone
					} : null).then(t).catch(n);
				} },
				...a,
				locales: h,
				...f,
				customButtons: {
					...a.customButtons,
					...f.customButtons,
					...Object.fromEntries(Object.entries(l).map(([e, { text: t, hint: n, alpineClickHandler: r, url: i, shouldOpenUrlInNewTab: a }]) => [e, {
						text: t,
						hint: n,
						click: () => {
							if (r) return window.Alpine.evaluate(this.$el, r);
							if (i) return window.open(i, a ? "_blank" : "_self");
							this.$wire.mountAction(e);
						}
					}]))
				},
				loading: (e) => {
					this.$el.setAttribute("aria-busy", e), p("loading", e);
				},
				datesSet: (e) => {
					p("datesSet", e) || d && this.$wire.handleDatesSet({
						view: e.view.type,
						title: e.view.title,
						start: e.startStr,
						end: e.endStr,
						currentStart: this.calendar.formatIso(e.view.currentStart),
						currentEnd: this.calendar.formatIso(e.view.currentEnd)
					});
				},
				events: (e, t, n) => {
					this.$wire.handleFetchEvents({
						start: e.startStr,
						end: e.endStr,
						timezone: e.timeZone
					}).then(t).catch(n);
				},
				eventClick: (e) => {
					let { event: t, jsEvent: n } = e;
					if (n.preventDefault(), !p("eventClick", e)) {
						if (t.url) {
							let e = t.extendedProps.shouldOpenUrlInNewTab || ((e) => e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)(n), r = new URL(t.url, window.location.href).origin === window.location.origin;
							return u && r && !e ? window.Livewire.navigate(t.url) : window.open(t.url, e ? "_blank" : "_self");
						}
						this.$wire.handleEventClick(t);
					}
				},
				eventDrop: async (e) => {
					let { event: t, oldEvent: n, relatedEvents: r, delta: i, oldResource: a, newResource: o, revert: s } = e;
					if (p("eventDrop", e)) return;
					let c = await this.$wire.handleEventDrop(t, n, r, i, a, o);
					typeof c == "boolean" && c && s();
				},
				eventResize: async (e) => {
					let { event: t, oldEvent: n, relatedEvents: r, startDelta: i, endDelta: a, revert: o } = e;
					if (p("eventResize", e)) return;
					let s = await this.$wire.handleEventResize(t, n, r, i, a);
					typeof s == "boolean" && s && o();
				},
				dateClick: (e) => {
					if (p("dateClick", e)) return;
					let { dateStr: t, allDay: n, view: r, resource: i } = e;
					this.queueDateInteraction({ click: {
						dateStr: t,
						allDay: n,
						view: r,
						resource: i
					} });
				},
				select: (e) => {
					if (p("select", e)) return;
					let { startStr: t, endStr: n, allDay: r, view: i, resource: a } = e;
					this.queueDateInteraction({ selection: {
						startStr: t,
						endStr: n,
						allDay: r,
						view: i,
						resource: a
					} });
				}
			}), this.calendar.render(), this.resizeObserver = new ResizeObserver(([e]) => {
				let t = e.contentRect.width;
				t !== this.lastWidth && (this.lastWidth = t, requestAnimationFrame(() => this.calendar?.updateSize()));
			}), this.resizeObserver.observe(this.$el);
			let g = {
				refresh: () => this.calendar.refetchEvents(),
				"refresh-resources": () => this.calendar.refetchResources(),
				prev: () => this.calendar.prev(),
				next: () => this.calendar.next(),
				today: () => this.calendar.today(),
				view: ({ view: e }) => this.calendar.changeView(e),
				goto: ({ date: e }) => this.calendar.gotoDate(e)
			};
			this.listeners = Object.fromEntries(Object.entries(g).map(([t, n]) => [`filament-fullcalendar--${t}`, ({ detail: t }) => {
				t?.calendar && t.calendar !== e || n(t ?? {});
			}])), Object.entries(this.listeners).forEach(([e, t]) => window.addEventListener(e, t));
		},
		destroy() {
			this.isDestroyed = !0, Object.entries(this.listeners).forEach(([e, t]) => window.removeEventListener(e, t)), this.resizeObserver?.disconnect(), this.calendar?.destroy(), this.calendar = null;
		},
		queueDateInteraction(e) {
			if (!c) return;
			let t = this.pendingDateInteraction === null;
			this.pendingDateInteraction = {
				...this.pendingDateInteraction,
				...e
			}, t && setTimeout(() => {
				let { click: e, selection: t } = this.pendingDateInteraction;
				if (this.pendingDateInteraction = null, e) {
					this.$wire.handleDateClick(e.dateStr, e.allDay, e.view, e.resource, t?.endStr ?? null);
					return;
				}
				this.$wire.handleDateSelect(t.startStr, t.endStr, t.allDay, t.view, t.resource);
			}, 50);
		}
	};
}
//#endregion
export { Lt as default };

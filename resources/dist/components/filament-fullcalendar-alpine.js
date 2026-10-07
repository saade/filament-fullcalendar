import { $t as e, An as t, At as n, B as r, Bt as i, Dn as a, Dt as o, En as s, Fn as c, G as l, Gn as u, Gt as d, J as f, Jn as p, Jt as m, K as ee, Kn as te, Kt as ne, L as h, Mt as g, Nt as _, O as v, Pn as re, Pt as y, Qn as ie, Sn as b, Sr as x, St as ae, T as oe, Tt as S, V as se, Vt as ce, Xn as le, Yn as ue, Yt as C, Zt as de, _ as fe, _n as w, an as pe, at as T, b as E, bn as D, br as me, bt as O, c as k, d as he, en as ge, fr as _e, g as ve, gr as ye, h as be, ht as xe, i as A, it as j, jn as Se, jt as M, k as Ce, kn as N, lt as we, mr as Te, mt as Ee, n as P, on as De, pr as Oe, q as ke, qt as Ae, r as je, rr as Me, s as F, t as Ne, tr as Pe, tt as I, un as L, v as Fe, vn as Ie, vr as Le, vt as R, wt as z, xn as Re, xr as ze, xt as B, y as V, yn as Be, yt as Ve } from "../filament-fullcalendar-core-MrkNOn94.js";
import { c as He, d as Ue, f as We, h as Ge, l as Ke, m as qe, t as Je } from "../filament-fullcalendar-timegrid-BW1TVPZt.js";
//#region node_modules/@fullcalendar/interaction/index.js
R.touchMouseIgnoreWait = 500;
var H = 0, U = 0, W = !1, G = class {
	constructor(e) {
		this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (e) => {
			if (!this.shouldIgnoreMouse() && Ye(e) && this.tryStart(e)) {
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
				t.removeEventListener("touchmove", this.handleTouchMove), t.removeEventListener("touchend", this.handleTouchEnd), t.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(e)), this.cleanup(), this.isTouchDragging = !1, Xe();
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
		}, this.containerEl = e, this.emitter = new fe(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Ze();
	}
	destroy() {
		this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Qe();
	}
	tryStart(e) {
		let t = this.querySubjectEl(e), n = e.target;
		return t && (!this.handleSelector || M(n, this.handleSelector)) ? (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
	}
	cleanup() {
		W = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
	}
	querySubjectEl(e) {
		return this.selector ? M(e.target, this.selector) : this.containerEl;
	}
	shouldIgnoreMouse() {
		return H || this.isTouchDragging;
	}
	cancelTouchScroll() {
		this.isDragging && (W = !0);
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
function Ye(e) {
	return e.button === 0 && !e.ctrlKey;
}
function Xe() {
	H += 1, setTimeout(() => {
		--H;
	}, R.touchMouseIgnoreWait);
}
function Ze() {
	U += 1, U === 1 && window.addEventListener("touchmove", $e, { passive: !1 });
}
function Qe() {
	--U, U || window.removeEventListener("touchmove", $e, { passive: !1 });
}
function $e(e) {
	W && e.preventDefault();
}
var et = class {
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
		n.style.transition = "top " + t + "ms,left " + t + "ms", f(n, {
			left: r.left,
			top: r.top
		}), Le(n, () => {
			n.style.transition = "", e();
		});
	}
	cleanup() {
		this.mirrorEl &&= (Me(this.mirrorEl), null), this.sourceEl = null;
	}
	updateElPosition() {
		this.sourceEl && this.isVisible && f(this.getMirrorEl(), {
			left: this.sourceElRect.left + this.deltaX,
			top: this.sourceElRect.top + this.deltaY
		});
	}
	getMirrorEl() {
		let e = this.sourceElRect, t = this.mirrorEl;
		return t || (t = this.mirrorEl = this.sourceEl.cloneNode(!0), t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.style.pointerEvents = "none", t.classList.add("fc-event-dragging"), f(t, {
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
}, tt = class extends v {
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
}, nt = class extends tt {
	constructor(e, t) {
		super(new ve(e), t);
	}
	getEventTarget() {
		return this.scrollController.el;
	}
	computeClientRect() {
		return Ee(this.scrollController.el);
	}
}, rt = class extends tt {
	constructor(e) {
		super(new r(), e);
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
}, it = typeof performance == "function" ? performance.now : Date.now, at = class {
	constructor() {
		this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
			if (this.isAnimating) {
				let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
				if (e) {
					let t = it();
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
			i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), a < 0 ? this.everMovedLeft = !0 : a > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(it()));
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
		return this.queryScrollEls(e).map((e) => e === window ? new rt(!1) : new nt(e, !1));
	}
	queryScrollEls(e) {
		let t = [];
		for (let n of this.scrollQuery) typeof n == "object" ? t.push(n) : t.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(n)));
		return t;
	}
}, K = class extends be {
	constructor(e, t) {
		super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (e) => {
			this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, le(document.body), ue(document.body), e.isTouch || e.origEvent.preventDefault(), this.emitter.trigger("pointerdown", e), this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(e.subjectEl, e.pageX, e.pageY), this.startDelay(e), this.minDistance || this.handleDistanceSurpassed(e)));
		}, this.onPointerMove = (e) => {
			if (this.isInteracting) {
				if (this.emitter.trigger("pointermove", e), !this.isDistanceSurpassed) {
					let t = this.minDistance, n, { deltaX: r, deltaY: i } = e;
					n = r * r + i * i, n >= t * t && this.handleDistanceSurpassed(e);
				}
				this.isDragging && (e.origEvent.type !== "scroll" && (this.mirror.handleMove(e.pageX, e.pageY), this.autoScroller.handleMove(e.pageX, e.pageY)), this.emitter.trigger("dragmove", e));
			}
		}, this.onPointerUp = (e) => {
			this.isInteracting && (this.isInteracting = !1, ee(document.body), l(document.body), this.emitter.trigger("pointerup", e), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(e)), this.delayTimeoutId &&= (clearTimeout(this.delayTimeoutId), null));
		};
		let n = this.pointer = new G(e);
		n.emitter.on("pointerdown", this.onPointerDown), n.emitter.on("pointermove", this.onPointerMove), n.emitter.on("pointerup", this.onPointerUp), t && (n.selector = t), this.mirror = new et(), this.autoScroller = new at();
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
}, ot = class {
	constructor(e) {
		this.el = e, this.origRect = xe(e), this.scrollCaches = d(e).map((e) => new nt(e, !0));
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
		let n = {
			left: e,
			top: t
		};
		for (let e of this.scrollCaches) if (!st(e.getEventTarget()) && !p(n, e.clientRect)) return !1;
		return !0;
	}
};
function st(e) {
	let t = e.tagName;
	return t === "HTML" || t === "BODY";
}
var q = class {
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
		}, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new fe();
	}
	processFirstCoord(t) {
		let n = {
			left: t.pageX,
			top: t.pageY
		}, r = n, i = t.subjectEl, a;
		i instanceof HTMLElement && (a = xe(i), r = Ve(r, a));
		let s = this.initialHit = this.queryHitForOffset(r.left, r.top);
		if (s) {
			if (this.useSubjectCenter && a) {
				let t = b(a, s.rect);
				t && (r = e(t));
			}
			this.coordAdjust = o(r, n);
		} else this.coordAdjust = {
			left: 0,
			top: 0
		};
	}
	handleMove(e, t) {
		let n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
		(t || !J(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
	}
	prepareHits() {
		this.offsetTrackers = re(this.droppableStore, (e) => (e.component.prepareHits(), new ot(e.el)));
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
					e && ie(e.dateProfile.activeRange, e.dateSpan.range) && (this.disablePointCheck || s.el.contains(s.el.getRootNode().elementFromPoint(c + n - window.scrollX, l + r - window.scrollY))) && (!i || e.layer > i.layer) && (e.componentId = a, e.context = o.context, e.rect.left += n, e.rect.right += n, e.rect.top += r, e.rect.bottom += r, i = e);
				}
			}
		}
		return i;
	}
};
function J(e, t) {
	return !e && !t || !!e == !!t && a(e.dateSpan, t.dateSpan);
}
function Y(e, t) {
	let n = {};
	for (let r of t.pluginHooks.datePointTransforms) Object.assign(n, r(e, t));
	return Object.assign(n, ct(e, t.dateEnv)), n;
}
function ct(e, t) {
	return {
		date: t.toDate(e.range.start),
		dateStr: t.formatIso(e.range.start, { omitTime: e.allDay }),
		allDay: e.allDay
	};
}
var lt = class extends E {
	constructor(e) {
		super(e), this.handlePointerDown = (e) => {
			let { dragging: t } = this, n = e.origEvent.target;
			t.setIgnoreMove(!this.component.isValidDateDownEl(n));
		}, this.handleDragEnd = (e) => {
			let { component: t } = this, { pointer: n } = this.dragging;
			if (!n.wasTouchScroll) {
				let { initialHit: n, finalHit: r } = this.hitDragging;
				if (n && r && J(n, r)) {
					let { context: r } = t, i = Object.assign(Object.assign({}, Y(n.dateSpan, r)), {
						dayEl: n.dayEl,
						jsEvent: e.origEvent,
						view: r.viewApi || r.calendarApi.view
					});
					r.emitter.trigger("dateClick", i);
				}
			}
		}, this.dragging = new K(e.el), this.dragging.autoScroller.isEnabled = !1;
		let t = this.hitDragging = new q(this.dragging, D(e));
		t.emitter.on("pointerdown", this.handlePointerDown), t.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
}, ut = class extends E {
	constructor(e) {
		super(e), this.dragSelection = null, this.handlePointerDown = (e) => {
			let { component: t, dragging: n } = this, { options: r } = t.context, i = r.selectable && t.isValidDateDownEl(e.origEvent.target);
			n.setIgnoreMove(!i), n.delay = e.isTouch ? dt(t) : null;
		}, this.handleDragStart = (e) => {
			this.component.context.calendarApi.unselect(e);
		}, this.handleHitUpdate = (e, t) => {
			let { context: r } = this.component, i = null, a = !1;
			if (e) {
				let t = this.hitDragging.initialHit;
				e.componentId === t.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(t, e) || (i = ft(t, e, r.pluginHooks.dateSelectionTransformers)), (!i || !s(i, e.dateProfile, r)) && (a = !0, i = null);
			}
			i ? r.dispatch({
				type: "SELECT_DATES",
				selection: i
			}) : t || r.dispatch({ type: "UNSELECT_DATES" }), a ? n() : _(), t || (this.dragSelection = i);
		}, this.handlePointerUp = (e) => {
			this.dragSelection &&= (ye(this.dragSelection, e, this.component.context), null);
		};
		let { component: t } = e, { options: r } = t.context, i = this.dragging = new K(e.el);
		i.touchScrollAllowed = !1, i.minDistance = r.selectMinDistance || 0, i.autoScroller.isEnabled = r.dragScroll;
		let a = this.hitDragging = new q(this.dragging, D(e));
		a.emitter.on("pointerdown", this.handlePointerDown), a.emitter.on("dragstart", this.handleDragStart), a.emitter.on("hitupdate", this.handleHitUpdate), a.emitter.on("pointerup", this.handlePointerUp);
	}
	destroy() {
		this.dragging.destroy();
	}
};
function dt(e) {
	let { options: t } = e.context, n = t.selectLongPressDelay;
	return n ??= t.longPressDelay, n;
}
function ft(e, t, n) {
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
var X = class e extends E {
	constructor(t) {
		super(t), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (e) => {
			let t = e.origEvent.target, { component: n, dragging: r } = this, { mirror: i } = r, { options: a } = n.context, o = n.context;
			this.subjectEl = e.subjectEl;
			let s = this.subjectSeg = C(e.subjectEl), c = (this.eventRange = s.eventRange).instance.instanceId;
			this.relevantEvents = ge(o.getCurrentData().eventStore, c), r.minDistance = e.isTouch ? 0 : a.eventDragMinDistance, r.delay = e.isTouch && c !== n.props.eventSelection ? mt(n) : null, a.fixedMirrorParent ? i.parentNode = a.fixedMirrorParent : i.parentNode = M(t, ".fc"), i.revertDuration = a.dragRevertDuration;
			let l = n.isValidSegDownEl(t) && !M(t, ".fc-event-resizer");
			r.setIgnoreMove(!l), this.isDragging = l && e.subjectEl.classList.contains("fc-event-draggable");
		}, this.handleDragStart = (e) => {
			let t = this.component.context, n = this.eventRange, r = n.instance.instanceId;
			e.isTouch ? r !== this.component.props.eventSelection && t.dispatch({
				type: "SELECT_EVENT",
				eventInstanceId: r
			}) : t.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
				el: this.subjectEl,
				event: new V(t, n.def, n.instance),
				jsEvent: e.origEvent,
				view: t.viewApi
			}));
		}, this.handleHitUpdate = (e, t) => {
			if (!this.isDragging) return;
			let r = this.relevantEvents, i = this.hitDragging.initialHit, a = this.component.context, o = null, s = null, c = null, l = !1, u = {
				affectedEvents: r,
				mutatedEvents: B(),
				isEvent: !0
			};
			if (e) {
				o = e.context;
				let t = o.options;
				a === o || t.editable && t.droppable ? (s = pt(i, e, this.eventRange.instance.range.start, o.getCurrentData().pluginHooks.eventDragMutationMassagers), s && (c = ke(r, o.getCurrentData().eventUiBases, s, o), u.mutatedEvents = c, N(u, e.dateProfile, o) || (l = !0, s = null, c = null, u.mutatedEvents = B()))) : o = null;
			}
			this.displayDrag(o, u), l ? n() : _(), t || (a === o && J(i, e) && (s = null), this.dragging.setMirrorNeedsRevert(!s), this.dragging.setMirrorIsVisible(!e || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = o, this.validMutation = s, this.mutatedRelevantEvents = c);
		}, this.handlePointerUp = () => {
			this.isDragging || this.cleanup();
		}, this.handleDragEnd = (e) => {
			if (this.isDragging) {
				let t = this.component.context, n = t.viewApi, { receivingContext: r, validMutation: i } = this, a = this.eventRange.def, o = this.eventRange.instance, s = new V(t, a, o), c = this.relevantEvents, l = this.mutatedRelevantEvents, { finalHit: u } = this.hitDragging;
				if (this.clearDrag(), t.emitter.trigger("eventDragStop", {
					el: this.subjectEl,
					event: s,
					jsEvent: e.origEvent,
					view: n
				}), i) {
					if (r === t) {
						let r = new V(t, l.defs[a.defId], o ? l.instances[o.instanceId] : null);
						t.dispatch({
							type: "MERGE_EVENTS",
							eventStore: l
						});
						let u = {
							oldEvent: s,
							event: r,
							relatedEvents: I(l, t, o),
							revert() {
								t.dispatch({
									type: "MERGE_EVENTS",
									eventStore: c
								});
							}
						}, d = {};
						for (let e of t.getCurrentData().pluginHooks.eventDropTransformers) Object.assign(d, e(i, t));
						t.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, u), d), {
							el: e.subjectEl,
							delta: i.datesDelta,
							jsEvent: e.origEvent,
							view: n
						})), t.emitter.trigger("eventChange", u);
					} else if (r) {
						let i = {
							event: s,
							relatedEvents: I(c, t, o),
							revert() {
								t.dispatch({
									type: "MERGE_EVENTS",
									eventStore: c
								});
							}
						};
						t.emitter.trigger("eventLeave", Object.assign(Object.assign({}, i), {
							draggedEl: e.subjectEl,
							view: n
						})), t.dispatch({
							type: "REMOVE_EVENTS",
							eventStore: c
						}), t.emitter.trigger("eventRemove", i);
						let d = l.defs[a.defId], f = l.instances[o.instanceId], p = new V(r, d, f);
						r.dispatch({
							type: "MERGE_EVENTS",
							eventStore: l
						});
						let m = {
							event: p,
							relatedEvents: I(l, r, f),
							revert() {
								r.dispatch({
									type: "REMOVE_EVENTS",
									eventStore: l
								});
							}
						};
						r.emitter.trigger("eventAdd", m), e.isTouch && r.dispatch({
							type: "SELECT_EVENT",
							eventInstanceId: o.instanceId
						}), r.emitter.trigger("drop", Object.assign(Object.assign({}, Y(u.dateSpan, r)), {
							draggedEl: e.subjectEl,
							jsEvent: e.origEvent,
							view: u.context.viewApi
						})), r.emitter.trigger("eventReceive", Object.assign(Object.assign({}, m), {
							draggedEl: e.subjectEl,
							view: u.context.viewApi
						}));
					}
				} else t.emitter.trigger("_noEventDrop");
			}
			this.cleanup();
		};
		let { component: r } = this, { options: i } = r.context, a = this.dragging = new K(t.el);
		a.pointer.selector = e.SELECTOR, a.touchScrollAllowed = !1, a.autoScroller.isEnabled = i.dragScroll;
		let o = this.hitDragging = new q(this.dragging, Be);
		o.useSubjectCenter = t.useEventCenter, o.emitter.on("pointerdown", this.handlePointerDown), o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("pointerup", this.handlePointerUp), o.emitter.on("dragend", this.handleDragEnd);
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
				mutatedEvents: B(),
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
X.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function pt(e, t, n, r) {
	let i = e.dateSpan, a = t.dateSpan, o = i.range.start, s = a.range.start, c = {};
	i.allDay !== a.allDay && (c.allDay = a.allDay, c.hasEnd = t.context.options.allDayMaintainDuration, o = a.allDay ? Te(n) : n);
	let l = S(o, s, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
	l.milliseconds && (c.allDay = !1);
	let u = {
		datesDelta: l,
		standardProps: c
	};
	for (let n of r) n(u, e, t);
	return u;
}
function mt(e) {
	let { options: t } = e.context, n = t.eventLongPressDelay;
	return n ??= t.longPressDelay, n;
}
var ht = class extends E {
	constructor(e) {
		super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (e) => {
			let { component: t } = this, n = C(this.querySegEl(e)), r = this.eventRange = n.eventRange;
			this.dragging.minDistance = t.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && this.component.props.eventSelection !== r.instance.instanceId);
		}, this.handleDragStart = (e) => {
			let { context: t } = this.component, n = this.eventRange;
			this.relevantEvents = ge(t.getCurrentData().eventStore, this.eventRange.instance.instanceId);
			let r = this.querySegEl(e);
			this.draggingSegEl = r, this.draggingSeg = C(r), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
				el: r,
				event: new V(t, n.def, n.instance),
				jsEvent: e.origEvent,
				view: t.viewApi
			});
		}, this.handleHitUpdate = (e, t, r) => {
			let { context: i } = this.component, a = this.relevantEvents, o = this.hitDragging.initialHit, s = this.eventRange.instance, c = null, l = null, u = !1, d = {
				affectedEvents: a,
				mutatedEvents: B(),
				isEvent: !0
			};
			e && (e.componentId === o.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(o, e) || (c = gt(o, e, r.subjectEl.classList.contains("fc-event-resizer-start"), s.range))), c && (l = ke(a, i.getCurrentData().eventUiBases, c, i), d.mutatedEvents = l, N(d, e.dateProfile, i) || (u = !0, c = null, l = null, d.mutatedEvents = null)), l ? i.dispatch({
				type: "SET_EVENT_RESIZE",
				state: d
			}) : i.dispatch({ type: "UNSET_EVENT_RESIZE" }), u ? n() : _(), t || (c && J(o, e) && (c = null), this.validMutation = c, this.mutatedRelevantEvents = l);
		}, this.handleDragEnd = (e) => {
			let { context: t } = this.component, n = this.eventRange.def, r = this.eventRange.instance, i = new V(t, n, r), a = this.relevantEvents, o = this.mutatedRelevantEvents;
			if (t.emitter.trigger("eventResizeStop", {
				el: this.draggingSegEl,
				event: i,
				jsEvent: e.origEvent,
				view: t.viewApi
			}), this.validMutation) {
				let s = new V(t, o.defs[n.defId], r ? o.instances[r.instanceId] : null);
				t.dispatch({
					type: "MERGE_EVENTS",
					eventStore: o
				});
				let c = {
					oldEvent: i,
					event: s,
					relatedEvents: I(o, t, r),
					revert() {
						t.dispatch({
							type: "MERGE_EVENTS",
							eventStore: a
						});
					}
				};
				t.emitter.trigger("eventResize", Object.assign(Object.assign({}, c), {
					el: this.draggingSegEl,
					startDelta: this.validMutation.startDelta || O(0),
					endDelta: this.validMutation.endDelta || O(0),
					jsEvent: e.origEvent,
					view: t.viewApi
				})), t.emitter.trigger("eventChange", c);
			} else t.emitter.trigger("_noEventResize");
			this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
		};
		let { component: t } = e, r = this.dragging = new K(e.el);
		r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = t.context.options.dragScroll;
		let i = this.hitDragging = new q(this.dragging, D(e));
		i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
	querySegEl(e) {
		return M(e.subjectEl, ".fc-event");
	}
};
function gt(e, t, n, r) {
	let i = e.context.dateEnv, a = e.dateSpan.range.start, o = t.dateSpan.range.start, s = S(a, o, i, e.largeUnit);
	if (n) {
		if (i.add(r.start, s) < r.end) return { startDelta: s };
	} else if (i.add(r.end, s) > r.start) return { endDelta: s };
	return null;
}
var _t = class {
	constructor(e) {
		this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (e) => {
			e.jsEvent && (this.isRecentPointerDateSelect = !0);
		}, this.onDocumentPointerDown = (e) => {
			let t = this.context.options.unselectCancel, n = de(e.origEvent);
			this.matchesCancel = !!M(n, t), this.matchesEvent = !!M(n, X.SELECTOR);
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
		let t = this.documentPointer = new G(document);
		t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
	}
	destroy() {
		this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
	}
}, vt = { fixedMirrorParent: w }, yt = {
	dateClick: w,
	eventDragStart: w,
	eventDragStop: w,
	eventDrop: w,
	eventResizeStart: w,
	eventResizeStop: w,
	eventResize: w,
	drop: w,
	eventReceive: w,
	eventLeave: w
}, bt = class {
	constructor(e, t) {
		this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = (e) => {
			this.dragMeta = this.buildDragMeta(e.subjectEl);
		}, this.handleHitUpdate = (e, t, r) => {
			let { dragging: i } = this.hitDragging, a = null, o = null, s = !1, c = {
				affectedEvents: B(),
				mutatedEvents: B(),
				isEvent: this.dragMeta.create
			};
			e && (a = e.context, this.canDropElOnCalendar(r.subjectEl, a) && (o = xt(e.dateSpan, this.dragMeta, a), c.mutatedEvents = y(o), s = !N(c, e.dateProfile, a), s && (c.mutatedEvents = B(), o = null))), this.displayDrag(a, c), i.setMirrorIsVisible(t || !o || !document.querySelector(".fc-event-mirror")), s ? n() : _(), t || (i.setMirrorNeedsRevert(!o), this.receivingContext = a, this.droppableEvent = o);
		}, this.handleDragEnd = (e) => {
			let { receivingContext: t, droppableEvent: n } = this;
			if (this.clearDrag(), t && n) {
				let r = this.hitDragging.finalHit, i = r.context.viewApi, a = this.dragMeta;
				if (t.emitter.trigger("drop", Object.assign(Object.assign({}, Y(r.dateSpan, t)), {
					draggedEl: e.subjectEl,
					jsEvent: e.origEvent,
					view: i
				})), a.create) {
					let r = y(n);
					t.dispatch({
						type: "MERGE_EVENTS",
						eventStore: r
					}), e.isTouch && t.dispatch({
						type: "SELECT_EVENT",
						eventInstanceId: n.instance.instanceId
					}), t.emitter.trigger("eventReceive", {
						event: new V(t, n.def, n.instance),
						relatedEvents: [],
						revert() {
							t.dispatch({
								type: "REMOVE_EVENTS",
								eventStore: r
							});
						},
						draggedEl: e.subjectEl,
						view: i
					});
				}
			}
			this.receivingContext = null, this.droppableEvent = null;
		};
		let r = this.hitDragging = new q(e, Be);
		r.requireInitial = !1, r.emitter.on("dragstart", this.handleDragStart), r.emitter.on("hitupdate", this.handleHitUpdate), r.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t;
	}
	buildDragMeta(e) {
		return typeof this.suppliedDragMeta == "object" ? u(this.suppliedDragMeta) : typeof this.suppliedDragMeta == "function" ? u(this.suppliedDragMeta(e)) : St(e);
	}
	displayDrag(e, t) {
		let n = this.receivingContext;
		n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }), e && e.dispatch({
			type: "SET_EVENT_DRAG",
			state: t
		});
	}
	clearDrag() {
		this.receivingContext && this.receivingContext.dispatch({ type: "UNSET_EVENT_DRAG" });
	}
	canDropElOnCalendar(e, t) {
		let n = t.options.dropAccept;
		return typeof n == "function" ? n.call(t.calendarApi, e) : typeof n == "string" && n ? !!g(e, n) : !0;
	}
};
function xt(e, t, n) {
	let r = Object.assign({}, t.leftoverProps);
	for (let i of n.pluginHooks.externalDefTransforms) Object.assign(r, i(e, t));
	let { refined: i, extra: a } = Pe(r, n), o = te(i, a, t.sourceId, e.allDay, n.options.forceEventDuration || !!t.duration, n), s = e.range.start;
	e.allDay && t.startTime && (s = n.dateEnv.add(s, t.startTime));
	let c = t.duration ? n.dateEnv.add(s, t.duration) : m(e.allDay, s, n);
	return {
		def: o,
		instance: ae(o.defId, {
			start: s,
			end: c
		})
	};
}
function St(e) {
	let t = Ct(e, "event");
	return u(t ? JSON.parse(t) : { create: !1 });
}
R.dataAttrPrefix = "";
function Ct(e, t) {
	let n = R.dataAttrPrefix, r = (n ? n + "-" : "") + t;
	return e.getAttribute("data-" + r) || "";
}
var wt = class {
	constructor(e, t = {}) {
		this.handlePointerDown = (e) => {
			let { dragging: t } = this, { minDistance: n, longPressDelay: r } = this.settings;
			t.minDistance = n ?? (e.isTouch ? 0 : je.eventDragMinDistance), t.delay = e.isTouch ? r ?? je.longPressDelay : 0;
		}, this.handleDragStart = (e) => {
			e.isTouch && this.dragging.delay && e.subjectEl.classList.contains("fc-event") && this.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
		}, this.settings = t;
		let n = this.dragging = new K(e);
		n.touchScrollAllowed = !1, t.itemSelector != null && (n.pointer.selector = t.itemSelector), t.appendTo != null && (n.mirror.parentNode = t.appendTo), n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragstart", this.handleDragStart), new bt(n, t.eventData);
	}
	destroy() {
		this.dragging.destroy();
	}
}, Tt = P({
	name: "@fullcalendar/interaction",
	componentInteractions: [
		lt,
		ut,
		X,
		ht
	],
	calendarInteractions: [_t],
	elementDraggingImpl: K,
	optionRefiners: vt,
	listenerRefiners: yt
}), Et = class extends A {
	constructor() {
		super(...arguments), this.state = { textId: L() };
	}
	render() {
		let { theme: e, dateEnv: t, options: n, viewApi: r } = this.context, { cellId: a, dayDate: o, todayRange: s } = this.props, { textId: c } = this.state, l = ne(o, s), u = n.listDayFormat ? t.format(o, n.listDayFormat) : "", d = n.listDaySideFormat ? t.format(o, n.listDaySideFormat) : "", f = Object.assign({
			date: t.toDate(o),
			view: r,
			textId: c,
			text: u,
			sideText: d,
			navLinkAttrs: j(this.context, o),
			sideNavLinkAttrs: j(this.context, o, "day", !1)
		}, l);
		return x(F, {
			elTag: "tr",
			elClasses: ["fc-list-day", ...Ae(l, e)],
			elAttrs: { "data-date": i(o) },
			renderProps: f,
			generatorName: "dayHeaderContent",
			customGenerator: n.dayHeaderContent,
			defaultGenerator: Dt,
			classNameGenerator: n.dayHeaderClassNames,
			didMount: n.dayHeaderDidMount,
			willUnmount: n.dayHeaderWillUnmount
		}, (t) => x("th", {
			scope: "colgroup",
			colSpan: 3,
			id: a,
			"aria-labelledby": c
		}, x(t, {
			elTag: "div",
			elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")]
		})));
	}
};
function Dt(e) {
	return x(me, null, e.text && x("a", Object.assign({
		id: e.textId,
		className: "fc-list-day-text"
	}, e.navLinkAttrs), e.text), e.sideText && x("a", Object.assign({
		"aria-hidden": !0,
		className: "fc-list-day-side-text"
	}, e.sideNavLinkAttrs), e.sideText));
}
var Ot = z({
	hour: "numeric",
	minute: "2-digit",
	meridiem: "short"
}), kt = class extends A {
	render() {
		let { props: e, context: t } = this, { options: n } = t, { seg: r, timeHeaderId: i, eventHeaderId: a, dateHeaderId: o } = e, s = n.eventTimeFormat || Ot;
		return x(Fe, Object.assign({}, e, {
			elTag: "tr",
			elClasses: ["fc-list-event", r.eventRange.def.url && "fc-event-forced-url"],
			defaultGenerator: () => At(r, t),
			seg: r,
			timeText: "",
			disableDragging: !0,
			disableResizing: !0
		}), (e, n) => x(me, null, jt(r, s, t, i, o), x("td", {
			"aria-hidden": !0,
			className: "fc-list-event-graphic"
		}, x("span", {
			className: "fc-list-event-dot",
			style: { borderColor: n.borderColor || n.backgroundColor }
		})), x(e, {
			elTag: "td",
			elClasses: ["fc-list-event-title"],
			elAttrs: { headers: `${a} ${o}` }
		})));
	}
};
function At(e, t) {
	let n = pe(e, t);
	return x("a", Object.assign({}, n), e.eventRange.def.title);
}
function jt(e, n, r, i, a) {
	let { options: o } = r;
	if (o.displayEventTime !== !1) {
		let s = e.eventRange.def, c = e.eventRange.instance, l = !1, u;
		if (s.allDay ? l = !0 : t(e.eventRange.range) ? e.isStart ? u = T(e, n, r, null, null, c.range.start, e.end) : e.isEnd ? u = T(e, n, r, null, null, e.start, c.range.end) : l = !0 : u = T(e, n, r), l) {
			let e = {
				text: r.options.allDayText,
				view: r.viewApi
			};
			return x(F, {
				elTag: "td",
				elClasses: ["fc-list-event-time"],
				elAttrs: { headers: `${i} ${a}` },
				renderProps: e,
				generatorName: "allDayContent",
				customGenerator: o.allDayContent,
				defaultGenerator: Mt,
				classNameGenerator: o.allDayClassNames,
				didMount: o.allDayDidMount,
				willUnmount: o.allDayWillUnmount
			});
		}
		return x("td", { className: "fc-list-event-time" }, u);
	}
	return null;
}
function Mt(e) {
	return e.text;
}
var Nt = class extends k {
	constructor() {
		super(...arguments), this.computeDateVars = c(Ft), this.eventStoreToSegs = c(this._eventStoreToSegs), this.state = {
			timeHeaderId: L(),
			eventHeaderId: L(),
			dateHeaderIdRoot: L()
		}, this.setRootEl = (e) => {
			e ? this.context.registerInteractiveComponent(this, { el: e }) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e, context: t } = this, { dayDates: n, dayRanges: r } = this.computeDateVars(e.dateProfile), i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);
		return x(h, {
			elRef: this.setRootEl,
			elClasses: [
				"fc-list",
				t.theme.getClass("table"),
				t.options.stickyHeaderDates === !1 ? "" : "fc-list-sticky"
			],
			viewSpec: t.viewSpec
		}, x(Ce, {
			liquid: !e.isHeightAuto,
			overflowX: e.isHeightAuto ? "visible" : "hidden",
			overflowY: e.isHeightAuto ? "visible" : "auto"
		}, i.length > 0 ? this.renderSegList(i, n) : this.renderEmptyMessage()));
	}
	renderEmptyMessage() {
		let { options: e, viewApi: t } = this.context;
		return x(F, {
			elTag: "div",
			elClasses: ["fc-list-empty"],
			renderProps: {
				text: e.noEventsText,
				view: t
			},
			generatorName: "noEventsContent",
			customGenerator: e.noEventsContent,
			defaultGenerator: Pt,
			classNameGenerator: e.noEventsClassNames,
			didMount: e.noEventsDidMount,
			willUnmount: e.noEventsWillUnmount
		}, (e) => x(e, {
			elTag: "div",
			elClasses: ["fc-list-empty-cushion"]
		}));
	}
	renderSegList(e, t) {
		let { theme: n, options: r } = this.context, { timeHeaderId: a, eventHeaderId: o, dateHeaderIdRoot: s } = this.state, c = It(e);
		return x(oe, { unit: "day" }, (e, l) => {
			let u = [];
			for (let n = 0; n < c.length; n += 1) {
				let d = c[n];
				if (d) {
					let c = i(t[n]), f = s + "-" + c;
					u.push(x(Et, {
						key: c,
						cellId: f,
						dayDate: t[n],
						todayRange: l
					})), d = Oe(d, r.eventOrder);
					for (let t of d) u.push(x(kt, Object.assign({
						key: c + ":" + t.eventRange.instance.instanceId,
						seg: t,
						isDragging: !1,
						isResizing: !1,
						isDateSelecting: !1,
						isSelected: !1,
						timeHeaderId: a,
						eventHeaderId: o,
						dateHeaderId: f
					}, De(t, l, e))));
				}
			}
			return x("table", { className: "fc-list-table " + n.getClass("table") }, x("thead", null, x("tr", null, x("th", {
				scope: "col",
				id: a
			}, r.timeHint), x("th", {
				scope: "col",
				"aria-hidden": !0
			}), x("th", {
				scope: "col",
				id: o
			}, r.eventHint))), x("tbody", null, u));
		});
	}
	_eventStoreToSegs(e, t, n) {
		return this.eventRangesToSegs(_e(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n);
	}
	eventRangesToSegs(e, t) {
		let n = [];
		for (let r of e) n.push(...this.eventRangeToSegs(r, t));
		return n;
	}
	eventRangeToSegs(e, t) {
		let { dateEnv: n } = this.context, { nextDayThreshold: r } = this.context.options, i = e.range, a = e.def.allDay, o, s, c, l = [];
		for (o = 0; o < t.length; o += 1) if (s = Re(i, t[o]), s && (c = {
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
function Pt(e) {
	return e.text;
}
function Ft(e) {
	let t = Te(e.renderRange.start), n = e.renderRange.end, r = [], i = [];
	for (; t < n;) r.push(t), i.push({
		start: t,
		end: se(t, 1)
	}), t = se(t, 1);
	return {
		dayDates: r,
		dayRanges: i
	};
}
function It(e) {
	let t = [], n, r;
	for (n = 0; n < e.length; n += 1) r = e[n], (t[r.dayIndex] || (t[r.dayIndex] = [])).push(r);
	return t;
}
Ie(":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}");
//#endregion
//#region node_modules/@fullcalendar/list/index.js
var Lt = {
	listDayFormat: Rt,
	listDaySideFormat: Rt,
	noEventsClassNames: w,
	noEventsContent: w,
	noEventsDidMount: w,
	noEventsWillUnmount: w
};
function Rt(e) {
	return e === !1 ? null : z(e);
}
var zt = P({
	name: "@fullcalendar/list",
	optionRefiners: Lt,
	views: {
		list: {
			component: Nt,
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
}), Bt = class extends k {
	constructor() {
		super(...arguments), this.buildDayTableModel = c(qe), this.slicer = new Ke(), this.state = { labelId: L() };
	}
	render() {
		let { props: e, state: t, context: n } = this, { dateProfile: r, forPrint: i } = e, { options: a } = n, o = this.buildDayTableModel(r, n.dateProfileGenerator), s = this.slicer.sliceProps(e, r, a.nextDayThreshold, n, o), c = e.tableWidth == null ? null : e.tableWidth / a.aspectRatio, l = o.cells.length, u = c == null ? null : c / l;
		return x("div", {
			ref: e.elRef,
			"data-date": e.isoDateStr,
			className: "fc-multimonth-month",
			style: { width: e.width },
			role: "grid",
			"aria-labelledby": t.labelId
		}, x("div", {
			className: "fc-multimonth-header",
			style: { marginBottom: u },
			role: "presentation"
		}, x("div", {
			className: "fc-multimonth-title",
			id: t.labelId
		}, n.dateEnv.format(e.dateProfile.currentRange.start, e.titleFormat)), x("table", {
			className: ["fc-multimonth-header-table", n.theme.getClass("table")].join(" "),
			role: "presentation"
		}, x("thead", { role: "rowgroup" }, x(he, {
			dateProfile: e.dateProfile,
			dates: o.headerDates,
			datesRepDistinctDays: !1
		})))), x("div", {
			className: [
				"fc-multimonth-daygrid",
				"fc-daygrid",
				"fc-daygrid-body",
				!i && "fc-daygrid-body-balanced",
				i && "fc-daygrid-body-unbalanced",
				i && "fc-daygrid-body-natural"
			].join(" "),
			style: { marginTop: -u }
		}, x("table", {
			className: ["fc-multimonth-daygrid-table", n.theme.getClass("table")].join(" "),
			style: { height: i ? "" : c },
			role: "presentation"
		}, x("tbody", { role: "rowgroup" }, x(We, Object.assign({}, s, {
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
}, Vt = class extends k {
	constructor() {
		super(...arguments), this.splitDateProfileByMonth = c(Ut), this.buildMonthFormat = c(Kt), this.scrollElRef = ze(), this.firstMonthElRef = ze(), this.needsScrollReset = !1, this.handleSizing = (e) => {
			e && this.updateSize();
		};
	}
	render() {
		let { context: e, props: t, state: n } = this, { options: r } = e, { clientWidth: i, clientHeight: a } = n, o = n.monthHPadding || 0, s = Math.min(i == null ? 1 : Math.floor(i / (r.multiMonthMinWidth + o)), r.multiMonthMaxColumns) || 1, c = 100 / s + "%", l = i == null ? null : i / s - o, u = i != null && s === 1, d = this.splitDateProfileByMonth(e.dateProfileGenerator, t.dateProfile, e.dateEnv, !u && r.fixedWeekCount, r.showNonCurrentDates), f = this.buildMonthFormat(r.multiMonthTitleFormat, d), p = [
			"fc-multimonth",
			u ? "fc-multimonth-singlecol" : "fc-multimonth-multicol",
			l != null && l < 400 ? "fc-multimonth-compact" : "",
			t.isHeightAuto ? "" : "fc-scroller"
		];
		return x(h, {
			elRef: this.scrollElRef,
			elClasses: p,
			viewSpec: e.viewSpec
		}, d.map((e, n) => {
			let r = ce(e.currentRange.start);
			return x(Bt, Object.assign({}, t, {
				key: r,
				isoDateStr: r,
				elRef: n === 0 ? this.firstMonthElRef : void 0,
				titleFormat: f,
				dateProfile: e,
				width: c,
				tableWidth: l,
				clientWidth: i,
				clientHeight: a
			}));
		}));
	}
	componentDidMount() {
		this.updateSize(), this.context.addResizeHandler(this.handleSizing), this.requestScrollReset();
	}
	componentDidUpdate(e) {
		Se(e, this.props) || this.handleSizing(!1), e.dateProfile === this.props.dateProfile ? this.flushScrollReset() : this.requestScrollReset();
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
			t.scrollTop = t.querySelector(`[data-date="${ce(e)}"]`).getBoundingClientRect().top - this.firstMonthElRef.current.getBoundingClientRect().top, this.needsScrollReset = !1;
		}
	}
	shouldComponentUpdate() {
		return !0;
	}
}, Ht = O(1, "month");
function Ut(e, t, n, r, i) {
	let { start: a, end: o } = t.currentRange, s = a, c = [];
	for (; s.valueOf() < o.valueOf();) {
		let a = n.add(s, Ht), o = {
			start: e.skipHiddenDays(s),
			end: e.skipHiddenDays(a, -1, !0)
		}, l = Ge({
			currentRange: o,
			snapToWeek: !0,
			fixedWeekCount: r,
			dateEnv: n
		});
		l = {
			start: e.skipHiddenDays(l.start),
			end: e.skipHiddenDays(l.end, -1, !0)
		};
		let u = t.activeRange ? Re(t.activeRange, i ? l : o) : null;
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
var Wt = z({
	year: "numeric",
	month: "long"
}), Gt = z({ month: "long" });
function Kt(e, t) {
	return e || (t[0].currentRange.start.getUTCFullYear() === t[t.length - 1].currentRange.start.getUTCFullYear() ? Gt : Wt);
}
var qt = {
	multiMonthTitleFormat: z,
	multiMonthMaxColumns: Number,
	multiMonthMinWidth: Number
};
Ie(".fc .fc-multimonth{border:1px solid var(--fc-border-color);display:flex;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto}.fc .fc-multimonth-title{font-size:1.2em;font-weight:700;padding:1em 0;text-align:center}.fc .fc-multimonth-daygrid{background:var(--fc-page-bg-color)}.fc .fc-multimonth-daygrid-table,.fc .fc-multimonth-header-table{table-layout:fixed;width:100%}.fc .fc-multimonth-daygrid-table{border-top-style:hidden!important}.fc .fc-multimonth-singlecol .fc-multimonth{position:relative}.fc .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:relative;top:0;z-index:2}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid{position:relative;z-index:1}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid-table,.fc .fc-multimonth-singlecol .fc-multimonth-header-table{border-left-style:hidden;border-right-style:hidden}.fc .fc-multimonth-singlecol .fc-multimonth-month:last-child .fc-multimonth-daygrid-table{border-bottom-style:hidden}.fc .fc-multimonth-multicol{line-height:1}.fc .fc-multimonth-multicol .fc-multimonth-month{padding:0 1.2em 1.2em}.fc .fc-multimonth-multicol .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);display:block;float:none;padding:1px}.fc .fc-multimonth-compact{line-height:1}.fc .fc-multimonth-compact .fc-multimonth-daygrid-table,.fc .fc-multimonth-compact .fc-multimonth-header-table{font-size:.9em}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{position:sticky}.fc-media-print .fc-multimonth{overflow:visible}");
//#endregion
//#region resources/js/components/filament-fullcalendar.js
var Jt = {
	interaction: Tt,
	dayGrid: He,
	timeGrid: Je,
	list: zt,
	multiMonth: P({
		name: "@fullcalendar/multimonth",
		initialView: "multiMonthYear",
		optionRefiners: qt,
		views: {
			multiMonth: {
				component: Vt,
				dateProfileGeneratorClass: Ue,
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
}, Yt = [
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
		load: () => import("../filament-fullcalendar-premium-swRlTcuk.js")
	},
	{
		names: ["moment", "momentTimezone"],
		load: () => import("../filament-fullcalendar-moment-sm9ilVo6.js")
	},
	{
		names: ["rrule"],
		load: () => import("../filament-fullcalendar-rrule-CLYzVLe-.js")
	},
	{
		names: ["googleCalendar"],
		load: () => import("../filament-fullcalendar-google-calendar-Ba5jBi1B.js")
	},
	{
		names: ["iCalendar"],
		load: () => import("../filament-fullcalendar-icalendar-BQXVlHJN.js")
	}
];
async function Xt(e) {
	let t = await Promise.all(Yt.filter((t) => e.some((e) => t.names.includes(e))).map((e) => e.load())), n = Object.assign({ ...Jt }, ...t.map((e) => e.default));
	return e.map((e) => {
		if (!n[e]) throw Error(`[${e}] is not a FullCalendar plugin this package knows.`);
		return n[e];
	});
}
var Z = "[data-filament-fullcalendar-draggable]", Q = (e) => JSON.parse(e.dataset.filamentFullcalendarDraggable);
function Zt() {
	window.filamentFullCalendarDraggable ??= new wt(document.body, {
		itemSelector: Z,
		eventData: (e) => {
			let { title: t, duration: n } = Q(e);
			return {
				title: t ?? e.innerText,
				...n && { duration: n },
				create: !1
			};
		}
	});
}
var Qt = "filament-fullcalendar", $ = (e) => ({
	...e.toPlainObject(),
	isRecurring: !!e._def.recurringDef,
	source: e.source?.id || null,
	resourceIds: e.getResources?.().map((e) => e.id) ?? []
}), $t = (e) => {
	let t = document.createElement("div");
	return t.textContent = e, t.innerHTML;
};
function en({ event: e, el: t }) {
	let { tooltip: n, isTooltipHtml: r } = e.extendedProps;
	if (!n || Array.isArray(n) && !n.length) return;
	let i = window.Alpine.store("theme") ?? "light";
	t.setAttribute(`x-tooltip.html.raw.theme.${i}`, [n].flat().map((e) => r ? e : $t(e)).join("<br>"));
}
function tn({ event: e, el: t }) {
	if (!e.extendedProps.isTitleHtml) return;
	let n = t.querySelector(".fc-event-title") ?? t.querySelector(".fc-list-event-title a") ?? t.querySelector(".fc-list-event-title");
	n && (n.innerHTML = e.title);
}
var nn = (e) => !e || /^en([-_]us)?$/i.test(e);
async function rn(e) {
	return nn(e) ? [] : (await import("../filament-fullcalendar-locales-D70-mQ5L.js")).default;
}
function an({ id: e, locale: t, plugins: n, schedulerLicenseKey: r, timeZone: i, config: a, resources: o, eventSources: s, googleCalendarApiKey: c, editable: l, selectable: u, toolbarButtons: d, filtersCount: f, pollingInterval: p, droppable: m, widget: ee, hasSpaMode: te, shouldReportDates: ne, callbacks: h }) {
	let g = (e, ...t) => typeof h[e] == "function" && h[e](...t) === !1;
	return {
		calendar: null,
		listeners: {},
		pendingDateInteraction: null,
		pollingTimer: null,
		isDragging: !1,
		isDestroyed: !1,
		id: e,
		filtersCount: f,
		title: "",
		viewType: null,
		isTodayInRange: !1,
		resizeObserver: null,
		lastWidth: null,
		initialResources: Array.isArray(o) ? o : null,
		async init() {
			let { mobileInitialView: f, mobileBreakpoint: _ = 768, plugins: v = [], locales: re = [], ...y } = a, ie = window.matchMedia(`(max-width: ${_ - 1}px)`).matches, b = [...a.eventSources ?? [], ...s], x = [b.some((e) => e.googleCalendarId) && "googleCalendar", b.some((e) => e.format === "ics") && "iCalendar"].filter(Boolean), [ae, oe] = await Promise.all([Xt([.../* @__PURE__ */ new Set([
				...n,
				...v,
				...x
			])]), rn(a.locale ?? t)]);
			if (this.isDestroyed) return;
			this.calendar = new Ne(this.$refs.calendar, {
				plugins: ae,
				locale: t,
				...r && { schedulerLicenseKey: r },
				editable: l,
				selectable: u,
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
				...y,
				headerToolbar: !1,
				timeZone: i,
				...ie && f && { initialView: f },
				locales: [...oe, ...re],
				...h,
				eventDidMount: (e) => {
					en(e), tn(e), h.eventDidMount?.(e);
				},
				...c && { googleCalendarApiKey: c },
				eventSources: [{
					id: Qt,
					events: (e, t, n) => {
						this.$wire.handleFetchEvents({
							start: e.startStr,
							end: e.endStr,
							timezone: e.timeZone
						}).then(t).catch(n);
					}
				}, ...b.map((e) => e.googleCalendarId ? {
					...e,
					eventDataTransform: (e) => ({
						...e,
						shouldOpenUrlInNewTab: !0
					})
				} : e)],
				customButtons: {
					...a.customButtons,
					...h.customButtons,
					...Object.fromEntries(Object.entries(d).map(([e, { text: t, hint: n, alpineClickHandler: r, url: i, shouldOpenUrlInNewTab: a }]) => [e, {
						text: t,
						hint: n,
						click: () => {
							if (r) return window.Alpine.evaluate(this.$el, r);
							if (i) return window.open(i, a ? "_blank" : "_self");
							this.$wire.mountAction(e);
						}
					}]))
				},
				...m && {
					droppable: !0,
					dropAccept: (e) => {
						if (!e.matches(Z)) return !1;
						let { calendar: t } = Q(e);
						if (t && t !== ee) return !1;
						let n = h.dropAccept ?? a.dropAccept;
						return typeof n == "function" ? n(e) : typeof n != "string" || e.matches(n);
					},
					drop: (e) => {
						if (g("drop", e) || !e.draggedEl.matches(Z)) return;
						let { calendar: t, ...n } = Q(e.draggedEl);
						this.$wire.handleExternalDrop(n, e.dateStr, e.allDay, e.resource ?? null);
					}
				},
				loading: (e) => {
					this.$refs.calendar.setAttribute("aria-busy", e), g("loading", e);
				},
				datesSet: (e) => {
					this.syncToolbar(), !g("datesSet", e) && ne && this.$wire.handleDatesSet({
						view: e.view.type,
						title: e.view.title,
						start: e.startStr,
						end: e.endStr,
						currentStart: this.calendar.formatIso(e.view.currentStart),
						currentEnd: this.calendar.formatIso(e.view.currentEnd)
					});
				},
				eventClick: (e) => {
					let { event: t, jsEvent: n } = e;
					if (n.preventDefault(), !g("eventClick", e)) {
						if (t.url) {
							let e = t.extendedProps.shouldOpenUrlInNewTab || ((e) => e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)(n), r = new URL(t.url, window.location.href).origin === window.location.origin;
							return te && r && !e ? window.Livewire.navigate(t.url) : window.open(t.url, e ? "_blank" : "_self");
						}
						this.$wire.handleEventClick($(t));
					}
				},
				eventDragStart: (e) => {
					this.isDragging = !0, h.eventDragStart?.(e);
				},
				eventDragStop: (e) => {
					this.isDragging = !1, h.eventDragStop?.(e);
				},
				eventResizeStart: (e) => {
					this.isDragging = !0, h.eventResizeStart?.(e);
				},
				eventResizeStop: (e) => {
					this.isDragging = !1, h.eventResizeStop?.(e);
				},
				eventDrop: async (e) => {
					let { event: t, oldEvent: n, relatedEvents: r, delta: i, oldResource: a, newResource: o, revert: s } = e;
					if (g("eventDrop", e)) return;
					let c = await this.$wire.handleEventDrop($(t), $(n), r.map($), i, a, o);
					typeof c == "boolean" && c && s();
				},
				eventResize: async (e) => {
					let { event: t, oldEvent: n, relatedEvents: r, startDelta: i, endDelta: a, revert: o } = e;
					if (g("eventResize", e)) return;
					let s = await this.$wire.handleEventResize($(t), $(n), r.map($), i, a);
					typeof s == "boolean" && s && o();
				},
				dateClick: (e) => {
					if (g("dateClick", e)) return;
					let { dateStr: t, allDay: n, view: r, resource: i } = e;
					this.queueDateInteraction({ click: {
						dateStr: t,
						allDay: n,
						view: this.serializeView(r),
						resource: i
					} });
				},
				select: (e) => {
					if (g("select", e)) return;
					let { startStr: t, endStr: n, allDay: r, view: i, resource: a } = e;
					this.queueDateInteraction({ selection: {
						startStr: t,
						endStr: n,
						allDay: r,
						view: this.serializeView(i),
						resource: a
					} });
				}
			}), this.calendar.render(), this.syncToolbar(), m && Zt(), p && (this.pollingTimer = setInterval(() => {
				document.hidden || this.isDragging || this.$wire.mountedActions?.length || this.calendar.refetchEvents();
			}, p)), this.resizeObserver = new ResizeObserver(([e]) => {
				let t = e.contentRect.width;
				t !== this.lastWidth && (this.lastWidth = t, requestAnimationFrame(() => this.calendar?.updateSize()));
			}), this.resizeObserver.observe(this.$refs.calendar);
			let S = {
				refresh: () => this.calendar.refetchEvents(),
				"refresh-resources": () => this.calendar.refetchResources(),
				prev: () => this.calendar.prev(),
				next: () => this.calendar.next(),
				today: () => this.calendar.today(),
				view: ({ view: e, date: t }) => this.calendar.changeView(e, t ?? void 0),
				goto: ({ date: e }) => this.calendar.gotoDate(e),
				scroll: ({ time: e }) => this.calendar.scrollToTime(e),
				option: ({ option: e, value: t }) => this.calendar.setOption(e, t),
				filters: ({ count: e }) => {
					this.filtersCount = e;
				}
			};
			this.listeners = Object.fromEntries(Object.entries(S).map(([t, n]) => [`filament-fullcalendar--${t}`, ({ detail: t }) => {
				t?.calendar && t.calendar !== e || n(t ?? {});
			}])), Object.entries(this.listeners).forEach(([e, t]) => window.addEventListener(e, t));
		},
		syncToolbar() {
			let { view: t } = this.calendar, { dateEnv: n, dateProfile: r } = this.calendar.getCurrentData(), i = n.createMarker(/* @__PURE__ */ new Date());
			this.title = t.title, window.dispatchEvent(new CustomEvent("filament-fullcalendar--title", { detail: {
				calendar: e,
				title: t.title
			} })), this.viewType = t.type, this.isTodayInRange = i >= r.currentRange.start && i < r.currentRange.end;
		},
		getToolLabel(e) {
			if (!this.viewType) return "";
			let { viewSpecs: t, options: n } = this.calendar.getCurrentData(), r = t[e];
			return r?.buttonTextOverride ?? r?.buttonTextDefault ?? n.buttonText?.[e] ?? e;
		},
		clickCustomButton(e, t, n) {
			this.calendar?.getOption("customButtons")?.[e]?.click?.(t, n);
		},
		serializeView(e) {
			return {
				type: e.type,
				title: e.title,
				currentStart: this.calendar.formatIso(e.currentStart),
				currentEnd: this.calendar.formatIso(e.currentEnd),
				activeStart: this.calendar.formatIso(e.activeStart),
				activeEnd: this.calendar.formatIso(e.activeEnd)
			};
		},
		destroy() {
			this.isDestroyed = !0, Object.entries(this.listeners).forEach(([e, t]) => window.removeEventListener(e, t)), clearInterval(this.pollingTimer), this.resizeObserver?.disconnect(), this.calendar?.destroy(), this.calendar = null;
		},
		queueDateInteraction(e) {
			if (!u) return;
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
export { an as default };

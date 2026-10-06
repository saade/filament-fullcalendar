import { $t as e, An as t, At as n, B as r, Bt as i, Ct as a, D as o, En as s, Et as c, G as l, Gn as u, Gt as d, I as f, Jn as p, Jt as m, K as h, Kt as ee, Mt as g, Nn as te, Nt as _, O as ne, On as v, Pn as y, Qt as re, Tn as ie, W as ae, Wn as b, Wt as oe, Xt as se, Yn as ce, Zn as le, _ as x, _n as ue, _r as de, _t as S, an as fe, b as C, bn as pe, br as me, bt as w, c as T, ct as he, d as ge, dr as _e, er as ve, et as E, fr as ye, g as be, gn as D, h as xe, hr as Se, i as O, in as Ce, it as k, jt as we, kn as Te, kt as A, ln as j, mt as M, n as N, nr as Ee, pr as P, pt as De, q as F, qn as Oe, qt as ke, r as I, rt as L, s as R, t as Ae, v as je, vn as Me, vt as Ne, w as Pe, wt as Fe, xn as Ie, xr as z, xt as Le, y as B, yn as V, yr as H, yt as U, z as Re, zt as ze } from "../filament-fullcalendar-core-DflVpway.js";
import { c as Be, d as Ve, f as He, h as Ue, l as We, m as Ge, t as Ke } from "../filament-fullcalendar-timegrid-k-7b9q8a.js";
//#region node_modules/@fullcalendar/interaction/index.js
S.touchMouseIgnoreWait = 500;
var W = 0, G = 0, K = !1, qe = class {
	constructor(e) {
		this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (e) => {
			if (!this.shouldIgnoreMouse() && Je(e) && this.tryStart(e)) {
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
				t.removeEventListener("touchmove", this.handleTouchMove), t.removeEventListener("touchend", this.handleTouchEnd), t.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(e)), this.cleanup(), this.isTouchDragging = !1, Ye();
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
		}, this.containerEl = e, this.emitter = new x(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Xe();
	}
	destroy() {
		this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), Ze();
	}
	tryStart(e) {
		let t = this.querySubjectEl(e), r = e.target;
		return t && (!this.handleSelector || n(r, this.handleSelector)) ? (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
	}
	cleanup() {
		K = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
	}
	querySubjectEl(e) {
		return this.selector ? n(e.target, this.selector) : this.containerEl;
	}
	shouldIgnoreMouse() {
		return W || this.isTouchDragging;
	}
	cancelTouchScroll() {
		this.isDragging && (K = !0);
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
function Je(e) {
	return e.button === 0 && !e.ctrlKey;
}
function Ye() {
	W += 1, setTimeout(() => {
		--W;
	}, S.touchMouseIgnoreWait);
}
function Xe() {
	G += 1, G === 1 && window.addEventListener("touchmove", Qe, { passive: !1 });
}
function Ze() {
	--G, G || window.removeEventListener("touchmove", Qe, { passive: !1 });
}
function Qe(e) {
	K && e.preventDefault();
}
var $e = class {
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
		n.style.transition = "top " + t + "ms,left " + t + "ms", F(n, {
			left: r.left,
			top: r.top
		}), de(n, () => {
			n.style.transition = "", e();
		});
	}
	cleanup() {
		this.mirrorEl &&= (Ee(this.mirrorEl), null), this.sourceEl = null;
	}
	updateElPosition() {
		this.sourceEl && this.isVisible && F(this.getMirrorEl(), {
			left: this.sourceElRect.left + this.deltaX,
			top: this.sourceElRect.top + this.deltaY
		});
	}
	getMirrorEl() {
		let e = this.sourceElRect, t = this.mirrorEl;
		return t || (t = this.mirrorEl = this.sourceEl.cloneNode(!0), t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.style.pointerEvents = "none", t.classList.add("fc-event-dragging"), F(t, {
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
}, et = class extends o {
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
}, tt = class extends et {
	constructor(e, t) {
		super(new be(e), t);
	}
	getEventTarget() {
		return this.scrollController.el;
	}
	computeClientRect() {
		return De(this.scrollController.el);
	}
}, nt = class extends et {
	constructor(e) {
		super(new Re(), e);
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
}, rt = typeof performance == "function" ? performance.now : Date.now, it = class {
	constructor() {
		this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
			if (this.isAnimating) {
				let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
				if (e) {
					let t = rt();
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
			i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), a < 0 ? this.everMovedLeft = !0 : a > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(rt()));
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
		return this.queryScrollEls(e).map((e) => e === window ? new nt(!1) : new tt(e, !1));
	}
	queryScrollEls(e) {
		let t = [];
		for (let n of this.scrollQuery) typeof n == "object" ? t.push(n) : t.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(n)));
		return t;
	}
}, q = class extends xe {
	constructor(e, t) {
		super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (e) => {
			this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, ce(document.body), p(document.body), e.isTouch || e.origEvent.preventDefault(), this.emitter.trigger("pointerdown", e), this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(e.subjectEl, e.pageX, e.pageY), this.startDelay(e), this.minDistance || this.handleDistanceSurpassed(e)));
		}, this.onPointerMove = (e) => {
			if (this.isInteracting) {
				if (this.emitter.trigger("pointermove", e), !this.isDistanceSurpassed) {
					let t = this.minDistance, n, { deltaX: r, deltaY: i } = e;
					n = r * r + i * i, n >= t * t && this.handleDistanceSurpassed(e);
				}
				this.isDragging && (e.origEvent.type !== "scroll" && (this.mirror.handleMove(e.pageX, e.pageY), this.autoScroller.handleMove(e.pageX, e.pageY)), this.emitter.trigger("dragmove", e));
			}
		}, this.onPointerUp = (e) => {
			this.isInteracting && (this.isInteracting = !1, l(document.body), ae(document.body), this.emitter.trigger("pointerup", e), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(e)), this.delayTimeoutId &&= (clearTimeout(this.delayTimeoutId), null));
		};
		let n = this.pointer = new qe(e);
		n.emitter.on("pointerdown", this.onPointerDown), n.emitter.on("pointermove", this.onPointerMove), n.emitter.on("pointerup", this.onPointerUp), t && (n.selector = t), this.mirror = new $e(), this.autoScroller = new it();
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
}, at = class {
	constructor(e) {
		this.el = e, this.origRect = M(e), this.scrollCaches = oe(e).map((e) => new tt(e, !0));
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
		for (let e of this.scrollCaches) if (!ot(e.getEventTarget()) && !Oe(n, e.clientRect)) return !1;
		return !0;
	}
};
function ot(e) {
	let t = e.tagName;
	return t === "HTML" || t === "BODY";
}
var J = class {
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
		}, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new x();
	}
	processFirstCoord(e) {
		let t = {
			left: e.pageX,
			top: e.pageY
		}, n = t, r = e.subjectEl, i;
		r instanceof HTMLElement && (i = M(r), n = Ne(n, i));
		let a = this.initialHit = this.queryHitForOffset(n.left, n.top);
		if (a) {
			if (this.useSubjectCenter && i) {
				let e = Ie(i, a.rect);
				e && (n = re(e));
			}
			this.coordAdjust = c(n, t);
		} else this.coordAdjust = {
			left: 0,
			top: 0
		};
	}
	handleMove(e, t) {
		let n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
		(t || !Y(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
	}
	prepareHits() {
		this.offsetTrackers = te(this.droppableStore, (e) => (e.component.prepareHits(), new at(e.el)));
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
					e && le(e.dateProfile.activeRange, e.dateSpan.range) && (this.disablePointCheck || s.el.contains(s.el.getRootNode().elementFromPoint(c + n - window.scrollX, l + r - window.scrollY))) && (!i || e.layer > i.layer) && (e.componentId = a, e.context = o.context, e.rect.left += n, e.rect.right += n, e.rect.top += r, e.rect.bottom += r, i = e);
				}
			}
		}
		return i;
	}
};
function Y(e, t) {
	return !e && !t || !!e == !!t && s(e.dateSpan, t.dateSpan);
}
function X(e, t) {
	let n = {};
	for (let r of t.pluginHooks.datePointTransforms) Object.assign(n, r(e, t));
	return Object.assign(n, st(e, t.dateEnv)), n;
}
function st(e, t) {
	return {
		date: t.toDate(e.range.start),
		dateStr: t.formatIso(e.range.start, { omitTime: e.allDay }),
		allDay: e.allDay
	};
}
var ct = class extends C {
	constructor(e) {
		super(e), this.handlePointerDown = (e) => {
			let { dragging: t } = this, n = e.origEvent.target;
			t.setIgnoreMove(!this.component.isValidDateDownEl(n));
		}, this.handleDragEnd = (e) => {
			let { component: t } = this, { pointer: n } = this.dragging;
			if (!n.wasTouchScroll) {
				let { initialHit: n, finalHit: r } = this.hitDragging;
				if (n && r && Y(n, r)) {
					let { context: r } = t, i = Object.assign(Object.assign({}, X(n.dateSpan, r)), {
						dayEl: n.dayEl,
						jsEvent: e.origEvent,
						view: r.viewApi || r.calendarApi.view
					});
					r.emitter.trigger("dateClick", i);
				}
			}
		}, this.dragging = new q(e.el), this.dragging.autoScroller.isEnabled = !1;
		let t = this.hitDragging = new J(this.dragging, V(e));
		t.emitter.on("pointerdown", this.handlePointerDown), t.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
}, lt = class extends C {
	constructor(e) {
		super(e), this.dragSelection = null, this.handlePointerDown = (e) => {
			let { component: t, dragging: n } = this, { options: r } = t.context, i = r.selectable && t.isValidDateDownEl(e.origEvent.target);
			n.setIgnoreMove(!i), n.delay = e.isTouch ? ut(t) : null;
		}, this.handleDragStart = (e) => {
			this.component.context.calendarApi.unselect(e);
		}, this.handleHitUpdate = (e, t) => {
			let { context: n } = this.component, r = null, i = !1;
			if (e) {
				let t = this.hitDragging.initialHit;
				e.componentId === t.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(t, e) || (r = dt(t, e, n.pluginHooks.dateSelectionTransformers)), (!r || !ie(r, e.dateProfile, n)) && (i = !0, r = null);
			}
			r ? n.dispatch({
				type: "SELECT_DATES",
				selection: r
			}) : t || n.dispatch({ type: "UNSELECT_DATES" }), i ? A() : g(), t || (this.dragSelection = r);
		}, this.handlePointerUp = (e) => {
			this.dragSelection &&= (Se(this.dragSelection, e, this.component.context), null);
		};
		let { component: t } = e, { options: n } = t.context, r = this.dragging = new q(e.el);
		r.touchScrollAllowed = !1, r.minDistance = n.selectMinDistance || 0, r.autoScroller.isEnabled = n.dragScroll;
		let i = this.hitDragging = new J(this.dragging, V(e));
		i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("pointerup", this.handlePointerUp);
	}
	destroy() {
		this.dragging.destroy();
	}
};
function ut(e) {
	let { options: t } = e.context, n = t.selectLongPressDelay;
	return n ??= t.longPressDelay, n;
}
function dt(e, t, n) {
	let r = e.dateSpan, i = t.dateSpan, a = [
		r.range.start,
		r.range.end,
		i.range.start,
		i.range.end
	];
	a.sort(he);
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
var Z = class t extends C {
	constructor(r) {
		super(r), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (t) => {
			let r = t.origEvent.target, { component: i, dragging: a } = this, { mirror: o } = a, { options: s } = i.context, c = i.context;
			this.subjectEl = t.subjectEl;
			let l = this.subjectSeg = m(t.subjectEl), u = (this.eventRange = l.eventRange).instance.instanceId;
			this.relevantEvents = e(c.getCurrentData().eventStore, u), a.minDistance = t.isTouch ? 0 : s.eventDragMinDistance, a.delay = t.isTouch && u !== i.props.eventSelection ? pt(i) : null, s.fixedMirrorParent ? o.parentNode = s.fixedMirrorParent : o.parentNode = n(r, ".fc"), o.revertDuration = s.dragRevertDuration;
			let d = i.isValidSegDownEl(r) && !n(r, ".fc-event-resizer");
			a.setIgnoreMove(!d), this.isDragging = d && t.subjectEl.classList.contains("fc-event-draggable");
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
			let n = this.relevantEvents, r = this.hitDragging.initialHit, i = this.component.context, a = null, o = null, s = null, c = !1, l = {
				affectedEvents: n,
				mutatedEvents: w(),
				isEvent: !0
			};
			if (e) {
				a = e.context;
				let t = a.options;
				i === a || t.editable && t.droppable ? (o = ft(r, e, this.eventRange.instance.range.start, a.getCurrentData().pluginHooks.eventDragMutationMassagers), o && (s = h(n, a.getCurrentData().eventUiBases, o, a), l.mutatedEvents = s, v(l, e.dateProfile, a) || (c = !0, o = null, s = null, l.mutatedEvents = w()))) : a = null;
			}
			this.displayDrag(a, l), c ? A() : g(), t || (i === a && Y(r, e) && (o = null), this.dragging.setMirrorNeedsRevert(!o), this.dragging.setMirrorIsVisible(!e || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = a, this.validMutation = o, this.mutatedRelevantEvents = s);
		}, this.handlePointerUp = () => {
			this.isDragging || this.cleanup();
		}, this.handleDragEnd = (e) => {
			if (this.isDragging) {
				let t = this.component.context, n = t.viewApi, { receivingContext: r, validMutation: i } = this, a = this.eventRange.def, o = this.eventRange.instance, s = new B(t, a, o), c = this.relevantEvents, l = this.mutatedRelevantEvents, { finalHit: u } = this.hitDragging;
				if (this.clearDrag(), t.emitter.trigger("eventDragStop", {
					el: this.subjectEl,
					event: s,
					jsEvent: e.origEvent,
					view: n
				}), i) {
					if (r === t) {
						let r = new B(t, l.defs[a.defId], o ? l.instances[o.instanceId] : null);
						t.dispatch({
							type: "MERGE_EVENTS",
							eventStore: l
						});
						let u = {
							oldEvent: s,
							event: r,
							relatedEvents: E(l, t, o),
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
							relatedEvents: E(c, t, o),
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
						let d = l.defs[a.defId], f = l.instances[o.instanceId], p = new B(r, d, f);
						r.dispatch({
							type: "MERGE_EVENTS",
							eventStore: l
						});
						let m = {
							event: p,
							relatedEvents: E(l, r, f),
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
						}), r.emitter.trigger("drop", Object.assign(Object.assign({}, X(u.dateSpan, r)), {
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
		let { component: i } = this, { options: a } = i.context, o = this.dragging = new q(r.el);
		o.pointer.selector = t.SELECTOR, o.touchScrollAllowed = !1, o.autoScroller.isEnabled = a.dragScroll;
		let s = this.hitDragging = new J(this.dragging, Me);
		s.useSubjectCenter = r.useEventCenter, s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("pointerup", this.handlePointerUp), s.emitter.on("dragend", this.handleDragEnd);
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
				mutatedEvents: w(),
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
Z.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
function ft(e, t, n, r) {
	let i = e.dateSpan, a = t.dateSpan, o = i.range.start, s = a.range.start, c = {};
	i.allDay !== a.allDay && (c.allDay = a.allDay, c.hasEnd = t.context.options.allDayMaintainDuration, o = a.allDay ? P(n) : n);
	let l = Fe(o, s, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
	l.milliseconds && (c.allDay = !1);
	let u = {
		datesDelta: l,
		standardProps: c
	};
	for (let n of r) n(u, e, t);
	return u;
}
function pt(e) {
	let { options: t } = e.context, n = t.eventLongPressDelay;
	return n ??= t.longPressDelay, n;
}
var mt = class extends C {
	constructor(t) {
		super(t), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (e) => {
			let { component: t } = this, n = m(this.querySegEl(e)), r = this.eventRange = n.eventRange;
			this.dragging.minDistance = t.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && this.component.props.eventSelection !== r.instance.instanceId);
		}, this.handleDragStart = (t) => {
			let { context: n } = this.component, r = this.eventRange;
			this.relevantEvents = e(n.getCurrentData().eventStore, this.eventRange.instance.instanceId);
			let i = this.querySegEl(t);
			this.draggingSegEl = i, this.draggingSeg = m(i), n.calendarApi.unselect(), n.emitter.trigger("eventResizeStart", {
				el: i,
				event: new B(n, r.def, r.instance),
				jsEvent: t.origEvent,
				view: n.viewApi
			});
		}, this.handleHitUpdate = (e, t, n) => {
			let { context: r } = this.component, i = this.relevantEvents, a = this.hitDragging.initialHit, o = this.eventRange.instance, s = null, c = null, l = !1, u = {
				affectedEvents: i,
				mutatedEvents: w(),
				isEvent: !0
			};
			e && (e.componentId === a.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(a, e) || (s = ht(a, e, n.subjectEl.classList.contains("fc-event-resizer-start"), o.range))), s && (c = h(i, r.getCurrentData().eventUiBases, s, r), u.mutatedEvents = c, v(u, e.dateProfile, r) || (l = !0, s = null, c = null, u.mutatedEvents = null)), c ? r.dispatch({
				type: "SET_EVENT_RESIZE",
				state: u
			}) : r.dispatch({ type: "UNSET_EVENT_RESIZE" }), l ? A() : g(), t || (s && Y(a, e) && (s = null), this.validMutation = s, this.mutatedRelevantEvents = c);
		}, this.handleDragEnd = (e) => {
			let { context: t } = this.component, n = this.eventRange.def, r = this.eventRange.instance, i = new B(t, n, r), a = this.relevantEvents, o = this.mutatedRelevantEvents;
			if (t.emitter.trigger("eventResizeStop", {
				el: this.draggingSegEl,
				event: i,
				jsEvent: e.origEvent,
				view: t.viewApi
			}), this.validMutation) {
				let s = new B(t, o.defs[n.defId], r ? o.instances[r.instanceId] : null);
				t.dispatch({
					type: "MERGE_EVENTS",
					eventStore: o
				});
				let c = {
					oldEvent: i,
					event: s,
					relatedEvents: E(o, t, r),
					revert() {
						t.dispatch({
							type: "MERGE_EVENTS",
							eventStore: a
						});
					}
				};
				t.emitter.trigger("eventResize", Object.assign(Object.assign({}, c), {
					el: this.draggingSegEl,
					startDelta: this.validMutation.startDelta || U(0),
					endDelta: this.validMutation.endDelta || U(0),
					jsEvent: e.origEvent,
					view: t.viewApi
				})), t.emitter.trigger("eventChange", c);
			} else t.emitter.trigger("_noEventResize");
			this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
		};
		let { component: n } = t, r = this.dragging = new q(t.el);
		r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.context.options.dragScroll;
		let i = this.hitDragging = new J(this.dragging, V(t));
		i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
	querySegEl(e) {
		return n(e.subjectEl, ".fc-event");
	}
};
function ht(e, t, n, r) {
	let i = e.context.dateEnv, a = e.dateSpan.range.start, o = t.dateSpan.range.start, s = Fe(a, o, i, e.largeUnit);
	if (n) {
		if (i.add(r.start, s) < r.end) return { startDelta: s };
	} else if (i.add(r.end, s) > r.start) return { endDelta: s };
	return null;
}
var gt = class {
	constructor(e) {
		this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (e) => {
			e.jsEvent && (this.isRecentPointerDateSelect = !0);
		}, this.onDocumentPointerDown = (e) => {
			let t = this.context.options.unselectCancel, r = se(e.origEvent);
			this.matchesCancel = !!n(r, t), this.matchesEvent = !!n(r, Z.SELECTOR);
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
		let t = this.documentPointer = new qe(document);
		t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
	}
	destroy() {
		this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
	}
}, _t = { fixedMirrorParent: D }, vt = {
	dateClick: D,
	eventDragStart: D,
	eventDragStop: D,
	eventDrop: D,
	eventResizeStart: D,
	eventResizeStop: D,
	eventResize: D,
	drop: D,
	eventReceive: D,
	eventLeave: D
}, yt = class {
	constructor(e, t) {
		this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = (e) => {
			this.dragMeta = this.buildDragMeta(e.subjectEl);
		}, this.handleHitUpdate = (e, t, n) => {
			let { dragging: r } = this.hitDragging, i = null, a = null, o = !1, s = {
				affectedEvents: w(),
				mutatedEvents: w(),
				isEvent: this.dragMeta.create
			};
			e && (i = e.context, this.canDropElOnCalendar(n.subjectEl, i) && (a = bt(e.dateSpan, this.dragMeta, i), s.mutatedEvents = _(a), o = !v(s, e.dateProfile, i), o && (s.mutatedEvents = w(), a = null))), this.displayDrag(i, s), r.setMirrorIsVisible(t || !a || !document.querySelector(".fc-event-mirror")), o ? A() : g(), t || (r.setMirrorNeedsRevert(!a), this.receivingContext = i, this.droppableEvent = a);
		}, this.handleDragEnd = (e) => {
			let { receivingContext: t, droppableEvent: n } = this;
			if (this.clearDrag(), t && n) {
				let r = this.hitDragging.finalHit, i = r.context.viewApi, a = this.dragMeta;
				if (t.emitter.trigger("drop", Object.assign(Object.assign({}, X(r.dateSpan, t)), {
					draggedEl: e.subjectEl,
					jsEvent: e.origEvent,
					view: i
				})), a.create) {
					let r = _(n);
					t.dispatch({
						type: "MERGE_EVENTS",
						eventStore: r
					}), e.isTouch && t.dispatch({
						type: "SELECT_EVENT",
						eventInstanceId: n.instance.instanceId
					}), t.emitter.trigger("eventReceive", {
						event: new B(t, n.def, n.instance),
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
		let n = this.hitDragging = new J(e, Me);
		n.requireInitial = !1, n.emitter.on("dragstart", this.handleDragStart), n.emitter.on("hitupdate", this.handleHitUpdate), n.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t;
	}
	buildDragMeta(e) {
		return typeof this.suppliedDragMeta == "object" ? b(this.suppliedDragMeta) : typeof this.suppliedDragMeta == "function" ? b(this.suppliedDragMeta(e)) : xt(e);
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
		return typeof n == "function" ? n.call(t.calendarApi, e) : typeof n == "string" && n ? !!we(e, n) : !0;
	}
};
function bt(e, t, n) {
	let r = Object.assign({}, t.leftoverProps);
	for (let i of n.pluginHooks.externalDefTransforms) Object.assign(r, i(e, t));
	let { refined: i, extra: a } = ve(r, n), o = u(i, a, t.sourceId, e.allDay, n.options.forceEventDuration || !!t.duration, n), s = e.range.start;
	e.allDay && t.startTime && (s = n.dateEnv.add(s, t.startTime));
	let c = t.duration ? n.dateEnv.add(s, t.duration) : ke(e.allDay, s, n);
	return {
		def: o,
		instance: Le(o.defId, {
			start: s,
			end: c
		})
	};
}
function xt(e) {
	let t = St(e, "event");
	return b(t ? JSON.parse(t) : { create: !1 });
}
S.dataAttrPrefix = "";
function St(e, t) {
	let n = S.dataAttrPrefix, r = (n ? n + "-" : "") + t;
	return e.getAttribute("data-" + r) || "";
}
var Ct = class {
	constructor(e, t = {}) {
		this.handlePointerDown = (e) => {
			let { dragging: t } = this, { minDistance: n, longPressDelay: r } = this.settings;
			t.minDistance = n ?? (e.isTouch ? 0 : I.eventDragMinDistance), t.delay = e.isTouch ? r ?? I.longPressDelay : 0;
		}, this.handleDragStart = (e) => {
			e.isTouch && this.dragging.delay && e.subjectEl.classList.contains("fc-event") && this.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
		}, this.settings = t;
		let n = this.dragging = new q(e);
		n.touchScrollAllowed = !1, t.itemSelector != null && (n.pointer.selector = t.itemSelector), t.appendTo != null && (n.mirror.parentNode = t.appendTo), n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragstart", this.handleDragStart), new yt(n, t.eventData);
	}
	destroy() {
		this.dragging.destroy();
	}
}, wt = N({
	name: "@fullcalendar/interaction",
	componentInteractions: [
		ct,
		lt,
		Z,
		mt
	],
	calendarInteractions: [gt],
	elementDraggingImpl: q,
	optionRefiners: _t,
	listenerRefiners: vt
}), Tt = class extends O {
	constructor() {
		super(...arguments), this.state = { textId: j() };
	}
	render() {
		let { theme: e, dateEnv: t, options: n, viewApi: r } = this.context, { cellId: i, dayDate: a, todayRange: o } = this.props, { textId: s } = this.state, c = d(a, o), l = n.listDayFormat ? t.format(a, n.listDayFormat) : "", u = n.listDaySideFormat ? t.format(a, n.listDaySideFormat) : "", f = Object.assign({
			date: t.toDate(a),
			view: r,
			textId: s,
			text: l,
			sideText: u,
			navLinkAttrs: L(this.context, a),
			sideNavLinkAttrs: L(this.context, a, "day", !1)
		}, c);
		return z(R, {
			elTag: "tr",
			elClasses: ["fc-list-day", ...ee(c, e)],
			elAttrs: { "data-date": ze(a) },
			renderProps: f,
			generatorName: "dayHeaderContent",
			customGenerator: n.dayHeaderContent,
			defaultGenerator: Et,
			classNameGenerator: n.dayHeaderClassNames,
			didMount: n.dayHeaderDidMount,
			willUnmount: n.dayHeaderWillUnmount
		}, (t) => z("th", {
			scope: "colgroup",
			colSpan: 3,
			id: i,
			"aria-labelledby": s
		}, z(t, {
			elTag: "div",
			elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")]
		})));
	}
};
function Et(e) {
	return z(H, null, e.text && z("a", Object.assign({
		id: e.textId,
		className: "fc-list-day-text"
	}, e.navLinkAttrs), e.text), e.sideText && z("a", Object.assign({
		"aria-hidden": !0,
		className: "fc-list-day-side-text"
	}, e.sideNavLinkAttrs), e.sideText));
}
var Dt = a({
	hour: "numeric",
	minute: "2-digit",
	meridiem: "short"
}), Ot = class extends O {
	render() {
		let { props: e, context: t } = this, { options: n } = t, { seg: r, timeHeaderId: i, eventHeaderId: a, dateHeaderId: o } = e, s = n.eventTimeFormat || Dt;
		return z(je, Object.assign({}, e, {
			elTag: "tr",
			elClasses: ["fc-list-event", r.eventRange.def.url && "fc-event-forced-url"],
			defaultGenerator: () => kt(r, t),
			seg: r,
			timeText: "",
			disableDragging: !0,
			disableResizing: !0
		}), (e, n) => z(H, null, At(r, s, t, i, o), z("td", {
			"aria-hidden": !0,
			className: "fc-list-event-graphic"
		}, z("span", {
			className: "fc-list-event-dot",
			style: { borderColor: n.borderColor || n.backgroundColor }
		})), z(e, {
			elTag: "td",
			elClasses: ["fc-list-event-title"],
			elAttrs: { headers: `${a} ${o}` }
		})));
	}
};
function kt(e, t) {
	let n = Ce(e, t);
	return z("a", Object.assign({}, n), e.eventRange.def.title);
}
function At(e, t, n, r, i) {
	let { options: a } = n;
	if (a.displayEventTime !== !1) {
		let o = e.eventRange.def, s = e.eventRange.instance, c = !1, l;
		if (o.allDay ? c = !0 : Te(e.eventRange.range) ? e.isStart ? l = k(e, t, n, null, null, s.range.start, e.end) : e.isEnd ? l = k(e, t, n, null, null, e.start, s.range.end) : c = !0 : l = k(e, t, n), c) {
			let e = {
				text: n.options.allDayText,
				view: n.viewApi
			};
			return z(R, {
				elTag: "td",
				elClasses: ["fc-list-event-time"],
				elAttrs: { headers: `${r} ${i}` },
				renderProps: e,
				generatorName: "allDayContent",
				customGenerator: a.allDayContent,
				defaultGenerator: jt,
				classNameGenerator: a.allDayClassNames,
				didMount: a.allDayDidMount,
				willUnmount: a.allDayWillUnmount
			});
		}
		return z("td", { className: "fc-list-event-time" }, l);
	}
	return null;
}
function jt(e) {
	return e.text;
}
var Mt = class extends T {
	constructor() {
		super(...arguments), this.computeDateVars = y(Pt), this.eventStoreToSegs = y(this._eventStoreToSegs), this.state = {
			timeHeaderId: j(),
			eventHeaderId: j(),
			dateHeaderIdRoot: j()
		}, this.setRootEl = (e) => {
			e ? this.context.registerInteractiveComponent(this, { el: e }) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e, context: t } = this, { dayDates: n, dayRanges: r } = this.computeDateVars(e.dateProfile), i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);
		return z(f, {
			elRef: this.setRootEl,
			elClasses: [
				"fc-list",
				t.theme.getClass("table"),
				t.options.stickyHeaderDates === !1 ? "" : "fc-list-sticky"
			],
			viewSpec: t.viewSpec
		}, z(ne, {
			liquid: !e.isHeightAuto,
			overflowX: e.isHeightAuto ? "visible" : "hidden",
			overflowY: e.isHeightAuto ? "visible" : "auto"
		}, i.length > 0 ? this.renderSegList(i, n) : this.renderEmptyMessage()));
	}
	renderEmptyMessage() {
		let { options: e, viewApi: t } = this.context;
		return z(R, {
			elTag: "div",
			elClasses: ["fc-list-empty"],
			renderProps: {
				text: e.noEventsText,
				view: t
			},
			generatorName: "noEventsContent",
			customGenerator: e.noEventsContent,
			defaultGenerator: Nt,
			classNameGenerator: e.noEventsClassNames,
			didMount: e.noEventsDidMount,
			willUnmount: e.noEventsWillUnmount
		}, (e) => z(e, {
			elTag: "div",
			elClasses: ["fc-list-empty-cushion"]
		}));
	}
	renderSegList(e, t) {
		let { theme: n, options: r } = this.context, { timeHeaderId: i, eventHeaderId: a, dateHeaderIdRoot: o } = this.state, s = Ft(e);
		return z(Pe, { unit: "day" }, (e, c) => {
			let l = [];
			for (let n = 0; n < s.length; n += 1) {
				let u = s[n];
				if (u) {
					let s = ze(t[n]), d = o + "-" + s;
					l.push(z(Tt, {
						key: s,
						cellId: d,
						dayDate: t[n],
						todayRange: c
					})), u = ye(u, r.eventOrder);
					for (let t of u) l.push(z(Ot, Object.assign({
						key: s + ":" + t.eventRange.instance.instanceId,
						seg: t,
						isDragging: !1,
						isResizing: !1,
						isDateSelecting: !1,
						isSelected: !1,
						timeHeaderId: i,
						eventHeaderId: a,
						dateHeaderId: d
					}, fe(t, c, e))));
				}
			}
			return z("table", { className: "fc-list-table " + n.getClass("table") }, z("thead", null, z("tr", null, z("th", {
				scope: "col",
				id: i
			}, r.timeHint), z("th", {
				scope: "col",
				"aria-hidden": !0
			}), z("th", {
				scope: "col",
				id: a
			}, r.eventHint))), z("tbody", null, l));
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
		for (o = 0; o < t.length; o += 1) if (s = pe(i, t[o]), s && (c = {
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
function Nt(e) {
	return e.text;
}
function Pt(e) {
	let t = P(e.renderRange.start), n = e.renderRange.end, i = [], a = [];
	for (; t < n;) i.push(t), a.push({
		start: t,
		end: r(t, 1)
	}), t = r(t, 1);
	return {
		dayDates: i,
		dayRanges: a
	};
}
function Ft(e) {
	let t = [], n, r;
	for (n = 0; n < e.length; n += 1) r = e[n], (t[r.dayIndex] || (t[r.dayIndex] = [])).push(r);
	return t;
}
ue(":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}");
//#endregion
//#region node_modules/@fullcalendar/list/index.js
var It = {
	listDayFormat: Lt,
	listDaySideFormat: Lt,
	noEventsClassNames: D,
	noEventsContent: D,
	noEventsDidMount: D,
	noEventsWillUnmount: D
};
function Lt(e) {
	return e === !1 ? null : a(e);
}
var Rt = N({
	name: "@fullcalendar/list",
	optionRefiners: It,
	views: {
		list: {
			component: Mt,
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
}), zt = class extends T {
	constructor() {
		super(...arguments), this.buildDayTableModel = y(Ge), this.slicer = new We(), this.state = { labelId: j() };
	}
	render() {
		let { props: e, state: t, context: n } = this, { dateProfile: r, forPrint: i } = e, { options: a } = n, o = this.buildDayTableModel(r, n.dateProfileGenerator), s = this.slicer.sliceProps(e, r, a.nextDayThreshold, n, o), c = e.tableWidth == null ? null : e.tableWidth / a.aspectRatio, l = o.cells.length, u = c == null ? null : c / l;
		return z("div", {
			ref: e.elRef,
			"data-date": e.isoDateStr,
			className: "fc-multimonth-month",
			style: { width: e.width },
			role: "grid",
			"aria-labelledby": t.labelId
		}, z("div", {
			className: "fc-multimonth-header",
			style: { marginBottom: u },
			role: "presentation"
		}, z("div", {
			className: "fc-multimonth-title",
			id: t.labelId
		}, n.dateEnv.format(e.dateProfile.currentRange.start, e.titleFormat)), z("table", {
			className: ["fc-multimonth-header-table", n.theme.getClass("table")].join(" "),
			role: "presentation"
		}, z("thead", { role: "rowgroup" }, z(ge, {
			dateProfile: e.dateProfile,
			dates: o.headerDates,
			datesRepDistinctDays: !1
		})))), z("div", {
			className: [
				"fc-multimonth-daygrid",
				"fc-daygrid",
				"fc-daygrid-body",
				!i && "fc-daygrid-body-balanced",
				i && "fc-daygrid-body-unbalanced",
				i && "fc-daygrid-body-natural"
			].join(" "),
			style: { marginTop: -u }
		}, z("table", {
			className: ["fc-multimonth-daygrid-table", n.theme.getClass("table")].join(" "),
			style: { height: i ? "" : c },
			role: "presentation"
		}, z("tbody", { role: "rowgroup" }, z(He, Object.assign({}, s, {
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
}, Bt = class extends T {
	constructor() {
		super(...arguments), this.splitDateProfileByMonth = y(Ht), this.buildMonthFormat = y(Gt), this.scrollElRef = me(), this.firstMonthElRef = me(), this.needsScrollReset = !1, this.handleSizing = (e) => {
			e && this.updateSize();
		};
	}
	render() {
		let { context: e, props: t, state: n } = this, { options: r } = e, { clientWidth: a, clientHeight: o } = n, s = n.monthHPadding || 0, c = Math.min(a == null ? 1 : Math.floor(a / (r.multiMonthMinWidth + s)), r.multiMonthMaxColumns) || 1, l = 100 / c + "%", u = a == null ? null : a / c - s, d = a != null && c === 1, p = this.splitDateProfileByMonth(e.dateProfileGenerator, t.dateProfile, e.dateEnv, !d && r.fixedWeekCount, r.showNonCurrentDates), m = this.buildMonthFormat(r.multiMonthTitleFormat, p), h = [
			"fc-multimonth",
			d ? "fc-multimonth-singlecol" : "fc-multimonth-multicol",
			u != null && u < 400 ? "fc-multimonth-compact" : "",
			t.isHeightAuto ? "" : "fc-scroller"
		];
		return z(f, {
			elRef: this.scrollElRef,
			elClasses: h,
			viewSpec: e.viewSpec
		}, p.map((e, n) => {
			let r = i(e.currentRange.start);
			return z(zt, Object.assign({}, t, {
				key: r,
				isoDateStr: r,
				elRef: n === 0 ? this.firstMonthElRef : void 0,
				titleFormat: m,
				dateProfile: e,
				width: l,
				tableWidth: u,
				clientWidth: a,
				clientHeight: o
			}));
		}));
	}
	componentDidMount() {
		this.updateSize(), this.context.addResizeHandler(this.handleSizing), this.requestScrollReset();
	}
	componentDidUpdate(e) {
		t(e, this.props) || this.handleSizing(!1), e.dateProfile === this.props.dateProfile ? this.flushScrollReset() : this.requestScrollReset();
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
			t.scrollTop = t.querySelector(`[data-date="${i(e)}"]`).getBoundingClientRect().top - this.firstMonthElRef.current.getBoundingClientRect().top, this.needsScrollReset = !1;
		}
	}
	shouldComponentUpdate() {
		return !0;
	}
}, Vt = U(1, "month");
function Ht(e, t, n, r, i) {
	let { start: a, end: o } = t.currentRange, s = a, c = [];
	for (; s.valueOf() < o.valueOf();) {
		let a = n.add(s, Vt), o = {
			start: e.skipHiddenDays(s),
			end: e.skipHiddenDays(a, -1, !0)
		}, l = Ue({
			currentRange: o,
			snapToWeek: !0,
			fixedWeekCount: r,
			dateEnv: n
		});
		l = {
			start: e.skipHiddenDays(l.start),
			end: e.skipHiddenDays(l.end, -1, !0)
		};
		let u = t.activeRange ? pe(t.activeRange, i ? l : o) : null;
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
var Ut = a({
	year: "numeric",
	month: "long"
}), Wt = a({ month: "long" });
function Gt(e, t) {
	return e || (t[0].currentRange.start.getUTCFullYear() === t[t.length - 1].currentRange.start.getUTCFullYear() ? Wt : Ut);
}
var Kt = {
	multiMonthTitleFormat: a,
	multiMonthMaxColumns: Number,
	multiMonthMinWidth: Number
};
ue(".fc .fc-multimonth{border:1px solid var(--fc-border-color);display:flex;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto}.fc .fc-multimonth-title{font-size:1.2em;font-weight:700;padding:1em 0;text-align:center}.fc .fc-multimonth-daygrid{background:var(--fc-page-bg-color)}.fc .fc-multimonth-daygrid-table,.fc .fc-multimonth-header-table{table-layout:fixed;width:100%}.fc .fc-multimonth-daygrid-table{border-top-style:hidden!important}.fc .fc-multimonth-singlecol .fc-multimonth{position:relative}.fc .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:relative;top:0;z-index:2}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid{position:relative;z-index:1}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid-table,.fc .fc-multimonth-singlecol .fc-multimonth-header-table{border-left-style:hidden;border-right-style:hidden}.fc .fc-multimonth-singlecol .fc-multimonth-month:last-child .fc-multimonth-daygrid-table{border-bottom-style:hidden}.fc .fc-multimonth-multicol{line-height:1}.fc .fc-multimonth-multicol .fc-multimonth-month{padding:0 1.2em 1.2em}.fc .fc-multimonth-multicol .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);display:block;float:none;padding:1px}.fc .fc-multimonth-compact{line-height:1}.fc .fc-multimonth-compact .fc-multimonth-daygrid-table,.fc .fc-multimonth-compact .fc-multimonth-header-table{font-size:.9em}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{position:sticky}.fc-media-print .fc-multimonth{overflow:visible}");
//#endregion
//#region resources/js/components/filament-fullcalendar.js
var qt = {
	interaction: wt,
	dayGrid: Be,
	timeGrid: Ke,
	list: Rt,
	multiMonth: N({
		name: "@fullcalendar/multimonth",
		initialView: "multiMonthYear",
		optionRefiners: Kt,
		views: {
			multiMonth: {
				component: Bt,
				dateProfileGeneratorClass: Ve,
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
}, Jt = [
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
		load: () => import("../filament-fullcalendar-premium-VMh0Hm4c.js")
	},
	{
		names: ["moment", "momentTimezone"],
		load: () => import("../filament-fullcalendar-moment--o_mLBhP.js")
	},
	{
		names: ["rrule"],
		load: () => import("../filament-fullcalendar-rrule-DdCy2FEa.js")
	}
];
async function Yt(e) {
	let t = await Promise.all(Jt.filter((t) => e.some((e) => t.names.includes(e))).map((e) => e.load())), n = Object.assign({ ...qt }, ...t.map((e) => e.default));
	return e.map((e) => {
		if (!n[e]) throw Error(`[${e}] is not a FullCalendar plugin this package knows.`);
		return n[e];
	});
}
var Q = "[data-filament-fullcalendar-draggable]", $ = (e) => JSON.parse(e.dataset.filamentFullcalendarDraggable);
function Xt() {
	window.filamentFullCalendarDraggable ??= new Ct(document.body, {
		itemSelector: Q,
		eventData: (e) => {
			let { title: t, duration: n } = $(e);
			return {
				title: t ?? e.innerText,
				...n && { duration: n },
				create: !1
			};
		}
	});
}
var Zt = (e) => !e || /^en([-_]us)?$/i.test(e);
async function Qt(e) {
	return Zt(e) ? [] : (await import("../filament-fullcalendar-locales-D70-mQ5L.js")).default;
}
function $t({ id: e, locale: t, plugins: n, schedulerLicenseKey: r, timeZone: i, config: a, resources: o, editable: s, selectable: c, toolbarButtons: l, droppable: u, widget: d, hasSpaMode: f, shouldReportDates: p, callbacks: m }) {
	let h = (e, ...t) => typeof m[e] == "function" && m[e](...t) === !1;
	return {
		calendar: null,
		listeners: {},
		pendingDateInteraction: null,
		isDestroyed: !1,
		resizeObserver: null,
		lastWidth: null,
		initialResources: Array.isArray(o) ? o : null,
		async init() {
			let [ee, g] = await Promise.all([Yt(n), Qt(a.locale ?? t)]);
			if (this.isDestroyed) return;
			this.calendar = new Ae(this.$el, {
				headerToolbar: {
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,dayGridWeek,dayGridDay"
				},
				plugins: ee,
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
				locales: g,
				...m,
				customButtons: {
					...a.customButtons,
					...m.customButtons,
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
				...u && {
					droppable: !0,
					dropAccept: (e) => {
						if (!e.matches(Q)) return !1;
						let { calendar: t } = $(e);
						if (t && t !== d) return !1;
						let n = m.dropAccept ?? a.dropAccept;
						return typeof n == "function" ? n(e) : typeof n != "string" || e.matches(n);
					},
					drop: (e) => {
						if (h("drop", e)) return;
						let { calendar: t, ...n } = $(e.draggedEl);
						this.$wire.handleExternalDrop(n, e.dateStr, e.allDay, e.resource ?? null);
					}
				},
				loading: (e) => {
					this.$el.setAttribute("aria-busy", e), h("loading", e);
				},
				datesSet: (e) => {
					h("datesSet", e) || p && this.$wire.handleDatesSet({
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
					if (n.preventDefault(), !h("eventClick", e)) {
						if (t.url) {
							let e = t.extendedProps.shouldOpenUrlInNewTab || ((e) => e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)(n), r = new URL(t.url, window.location.href).origin === window.location.origin;
							return f && r && !e ? window.Livewire.navigate(t.url) : window.open(t.url, e ? "_blank" : "_self");
						}
						this.$wire.handleEventClick(t);
					}
				},
				eventDrop: async (e) => {
					let { event: t, oldEvent: n, relatedEvents: r, delta: i, oldResource: a, newResource: o, revert: s } = e;
					if (h("eventDrop", e)) return;
					let c = await this.$wire.handleEventDrop(t, n, r, i, a, o);
					typeof c == "boolean" && c && s();
				},
				eventResize: async (e) => {
					let { event: t, oldEvent: n, relatedEvents: r, startDelta: i, endDelta: a, revert: o } = e;
					if (h("eventResize", e)) return;
					let s = await this.$wire.handleEventResize(t, n, r, i, a);
					typeof s == "boolean" && s && o();
				},
				dateClick: (e) => {
					if (h("dateClick", e)) return;
					let { dateStr: t, allDay: n, view: r, resource: i } = e;
					this.queueDateInteraction({ click: {
						dateStr: t,
						allDay: n,
						view: r,
						resource: i
					} });
				},
				select: (e) => {
					if (h("select", e)) return;
					let { startStr: t, endStr: n, allDay: r, view: i, resource: a } = e;
					this.queueDateInteraction({ selection: {
						startStr: t,
						endStr: n,
						allDay: r,
						view: i,
						resource: a
					} });
				}
			}), this.calendar.render(), u && Xt(), this.resizeObserver = new ResizeObserver(([e]) => {
				let t = e.contentRect.width;
				t !== this.lastWidth && (this.lastWidth = t, requestAnimationFrame(() => this.calendar?.updateSize()));
			}), this.resizeObserver.observe(this.$el);
			let te = {
				refresh: () => this.calendar.refetchEvents(),
				"refresh-resources": () => this.calendar.refetchResources(),
				prev: () => this.calendar.prev(),
				next: () => this.calendar.next(),
				today: () => this.calendar.today(),
				view: ({ view: e }) => this.calendar.changeView(e),
				goto: ({ date: e }) => this.calendar.gotoDate(e)
			};
			this.listeners = Object.fromEntries(Object.entries(te).map(([t, n]) => [`filament-fullcalendar--${t}`, ({ detail: t }) => {
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
export { $t as default };

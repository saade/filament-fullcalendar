//#region node_modules/preact/dist/preact.module.js
var e, t, n, r, i, a, o, s, c, l = {}, u = [], d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function f(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function p(e) {
	var t = e.parentNode;
	t && t.removeChild(e);
}
function m(t, n, r) {
	var i, a, o, s = {};
	for (o in n) o == "key" ? i = n[o] : o == "ref" ? a = n[o] : s[o] = n[o];
	if (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) s[o] === void 0 && (s[o] = t.defaultProps[o]);
	return h(t, s, i, a, null);
}
function h(e, r, i, a, o) {
	var s = {
		type: e,
		props: r,
		key: i,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: o ?? ++n
	};
	return o == null && t.vnode != null && t.vnode(s), s;
}
function g() {
	return { current: null };
}
function _(e) {
	return e.children;
}
function v(e, t, n, r, i) {
	for (var a in n) a === "children" || a === "key" || a in t || b(e, a, null, n[a], r);
	for (a in t) i && typeof t[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || n[a] === t[a] || b(e, a, t[a], n[a], r);
}
function y(e, t, n) {
	t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || d.test(t) ? n : n + "px";
}
function b(e, t, n, r, i) {
	var a;
	n: if (t === "style") if (typeof n == "string") e.style.cssText = n;
	else {
		if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || y(e.style, t, "");
		if (n) for (t in n) r && n[t] === r[t] || y(e.style, t, n[t]);
	}
	else if (t[0] === "o" && t[1] === "n") a = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r || e.addEventListener(t, a ? S : x, a) : e.removeEventListener(t, a ? S : x, a);
	else if (t !== "dangerouslySetInnerHTML") {
		if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
	}
}
function x(e) {
	i = !0;
	try {
		return this.l[e.type + !1](t.event ? t.event(e) : e);
	} finally {
		i = !1;
	}
}
function S(e) {
	i = !0;
	try {
		return this.l[e.type + !0](t.event ? t.event(e) : e);
	} finally {
		i = !1;
	}
}
function C(e, t) {
	this.props = e, this.context = t;
}
function w(e, t) {
	if (t == null) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? w(e) : null;
}
function ee(e) {
	var t, n;
	if ((e = e.__) != null && e.__c != null) {
		for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) {
			e.__e = e.__c.base = n.__e;
			break;
		}
		return ee(e);
	}
}
function te(e) {
	i ? setTimeout(e) : s(e);
}
function T(e) {
	(!e.__d && (e.__d = !0) && a.push(e) && !E.__r++ || o !== t.debounceRendering) && ((o = t.debounceRendering) || te)(E);
}
function E() {
	var e, t, n, r, i, o, s, c;
	for (a.sort(function(e, t) {
		return e.__v.__b - t.__v.__b;
	}); e = a.shift();) e.__d && (t = a.length, r = void 0, i = void 0, s = (o = (n = e).__v).__e, (c = n.__P) && (r = [], (i = f({}, o)).__v = o.__v + 1, se(c, o, i, n.__n, c.ownerSVGElement !== void 0, o.__h == null ? null : [s], r, s ?? w(o), o.__h), ce(r, o), o.__e != s && ee(o)), a.length > t && a.sort(function(e, t) {
		return e.__v.__b - t.__v.__b;
	}));
	E.__r = 0;
}
function ne(e, t, n, r, i, a, o, s, c, d) {
	var f, p, m, g, v, y, b, x = r && r.__k || u, S = x.length;
	for (n.__k = [], f = 0; f < t.length; f++) if ((g = n.__k[f] = (g = t[f]) == null || typeof g == "boolean" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? h(null, g, null, null, g) : Array.isArray(g) ? h(_, { children: g }, null, null, null) : g.__b > 0 ? h(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null) {
		if (g.__ = n, g.__b = n.__b + 1, (m = x[f]) === null || m && g.key == m.key && g.type === m.type) x[f] = void 0;
		else for (p = 0; p < S; p++) {
			if ((m = x[p]) && g.key == m.key && g.type === m.type) {
				x[p] = void 0;
				break;
			}
			m = null;
		}
		se(e, g, m ||= l, i, a, o, s, c, d), v = g.__e, (p = g.ref) && m.ref != p && (b ||= [], m.ref && b.push(m.ref, null, g), b.push(p, g.__c || v, g)), v == null ? c && m.__e == c && c.parentNode != e && (c = w(m)) : (y ??= v, typeof g.type == "function" && g.__k === m.__k ? g.__d = c = re(g, c, e) : c = ae(e, g, m, x, v, c), typeof n.type == "function" && (n.__d = c));
	}
	for (n.__e = y, f = S; f--;) x[f] != null && (typeof n.type == "function" && x[f].__e != null && x[f].__e == n.__d && (n.__d = oe(r).nextSibling), de(x[f], x[f]));
	if (b) for (f = 0; f < b.length; f++) ue(b[f], b[++f], b[++f]);
}
function re(e, t, n) {
	for (var r, i = e.__k, a = 0; i && a < i.length; a++) (r = i[a]) && (r.__ = e, t = typeof r.type == "function" ? re(r, t, n) : ae(n, r, r, i, r.__e, t));
	return t;
}
function ie(e, t) {
	return t ||= [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(e) {
		ie(e, t);
	}) : t.push(e)), t;
}
function ae(e, t, n, r, i, a) {
	var o, s, c;
	if (t.__d !== void 0) o = t.__d, t.__d = void 0;
	else if (n == null || i != a || i.parentNode == null) n: if (a == null || a.parentNode !== e) e.appendChild(i), o = null;
	else {
		for (s = a, c = 0; (s = s.nextSibling) && c < r.length; c += 1) if (s == i) break n;
		e.insertBefore(i, a), o = a;
	}
	return o === void 0 ? i.nextSibling : o;
}
function oe(e) {
	var t, n, r;
	if (e.type == null || typeof e.type == "string") return e.__e;
	if (e.__k) {
		for (t = e.__k.length - 1; t >= 0; t--) if ((n = e.__k[t]) && (r = oe(n))) return r;
	}
	return null;
}
function se(e, n, r, i, a, o, s, c, l) {
	var u, d, p, m, h, g, v, y, b, x, S, w, ee, te, T, E = n.type;
	if (n.constructor !== void 0) return null;
	r.__h != null && (l = r.__h, c = n.__e = r.__e, n.__h = null, o = [c]), (u = t.__b) && u(n);
	try {
		n: if (typeof E == "function") {
			if (y = n.props, b = (u = E.contextType) && i[u.__c], x = u ? b ? b.props.value : u.__ : i, r.__c ? v = (d = n.__c = r.__c).__ = d.__E : ("prototype" in E && E.prototype.render ? n.__c = d = new E(y, x) : (n.__c = d = new C(y, x), d.constructor = E, d.render = fe), b && b.sub(d), d.props = y, d.state ||= {}, d.context = x, d.__n = i, p = d.__d = !0, d.__h = [], d._sb = []), d.__s ??= d.state, E.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = f({}, d.__s)), f(d.__s, E.getDerivedStateFromProps(y, d.__s))), m = d.props, h = d.state, d.__v = n, p) E.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
			else {
				if (E.getDerivedStateFromProps == null && y !== m && d.componentWillReceiveProps != null && d.componentWillReceiveProps(y, x), !d.__e && d.shouldComponentUpdate != null && !1 === d.shouldComponentUpdate(y, d.__s, x) || n.__v === r.__v) {
					for (n.__v !== r.__v && (d.props = y, d.state = d.__s, d.__d = !1), n.__e = r.__e, n.__k = r.__k, n.__k.forEach(function(e) {
						e && (e.__ = n);
					}), S = 0; S < d._sb.length; S++) d.__h.push(d._sb[S]);
					d._sb = [], d.__h.length && s.push(d);
					break n;
				}
				d.componentWillUpdate != null && d.componentWillUpdate(y, d.__s, x), d.componentDidUpdate != null && d.__h.push(function() {
					d.componentDidUpdate(m, h, g);
				});
			}
			if (d.context = x, d.props = y, d.__P = e, w = t.__r, ee = 0, "prototype" in E && E.prototype.render) {
				for (d.state = d.__s, d.__d = !1, w && w(n), u = d.render(d.props, d.state, d.context), te = 0; te < d._sb.length; te++) d.__h.push(d._sb[te]);
				d._sb = [];
			} else do
				d.__d = !1, w && w(n), u = d.render(d.props, d.state, d.context), d.state = d.__s;
			while (d.__d && ++ee < 25);
			d.state = d.__s, d.getChildContext != null && (i = f(f({}, i), d.getChildContext())), p || d.getSnapshotBeforeUpdate == null || (g = d.getSnapshotBeforeUpdate(m, h)), T = u != null && u.type === _ && u.key == null ? u.props.children : u, ne(e, Array.isArray(T) ? T : [T], n, r, i, a, o, s, c, l), d.base = n.__e, n.__h = null, d.__h.length && s.push(d), v && (d.__E = d.__ = null), d.__e = !1;
		} else o == null && n.__v === r.__v ? (n.__k = r.__k, n.__e = r.__e) : n.__e = le(r.__e, n, r, i, a, o, s, l);
		(u = t.diffed) && u(n);
	} catch (e) {
		n.__v = null, (l || o != null) && (n.__e = c, n.__h = !!l, o[o.indexOf(c)] = null), t.__e(e, n, r);
	}
}
function ce(e, n) {
	t.__c && t.__c(n, e), e.some(function(n) {
		try {
			e = n.__h, n.__h = [], e.some(function(e) {
				e.call(n);
			});
		} catch (e) {
			t.__e(e, n.__v);
		}
	});
}
function le(t, n, r, i, a, o, s, c) {
	var u, d, f, m = r.props, h = n.props, g = n.type, _ = 0;
	if (g === "svg" && (a = !0), o != null) {
		for (; _ < o.length; _++) if ((u = o[_]) && "setAttribute" in u == !!g && (g ? u.localName === g : u.nodeType === 3)) {
			t = u, o[_] = null;
			break;
		}
	}
	if (t == null) {
		if (g === null) return document.createTextNode(h);
		t = a ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, h.is && h), o = null, c = !1;
	}
	if (g === null) m === h || c && t.data === h || (t.data = h);
	else {
		if (o &&= e.call(t.childNodes), d = (m = r.props || l).dangerouslySetInnerHTML, f = h.dangerouslySetInnerHTML, !c) {
			if (o != null) for (m = {}, _ = 0; _ < t.attributes.length; _++) m[t.attributes[_].name] = t.attributes[_].value;
			(f || d) && (f && (d && f.__html == d.__html || f.__html === t.innerHTML) || (t.innerHTML = f && f.__html || ""));
		}
		if (v(t, h, m, a, c), f) n.__k = [];
		else if (_ = n.props.children, ne(t, Array.isArray(_) ? _ : [_], n, r, i, a && g !== "foreignObject", o, s, o ? o[0] : r.__k && w(r, 0), c), o != null) for (_ = o.length; _--;) o[_] != null && p(o[_]);
		c || ("value" in h && (_ = h.value) !== void 0 && (_ !== t.value || g === "progress" && !_ || g === "option" && _ !== m.value) && b(t, "value", _, m.value, !1), "checked" in h && (_ = h.checked) !== void 0 && _ !== t.checked && b(t, "checked", _, m.checked, !1));
	}
	return t;
}
function ue(e, n, r) {
	try {
		typeof e == "function" ? e(n) : e.current = n;
	} catch (e) {
		t.__e(e, r);
	}
}
function de(e, n, r) {
	var i, a;
	if (t.unmount && t.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || ue(i, null, n)), (i = e.__c) != null) {
		if (i.componentWillUnmount) try {
			i.componentWillUnmount();
		} catch (e) {
			t.__e(e, n);
		}
		i.base = i.__P = null, e.__c = void 0;
	}
	if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && de(i[a], n, r || typeof e.type != "function");
	r || e.__e == null || p(e.__e), e.__ = e.__e = e.__d = void 0;
}
function fe(e, t, n) {
	return this.constructor(e, n);
}
function pe(n, r, i) {
	var a, o, s;
	t.__ && t.__(n, r), o = (a = typeof i == "function") ? null : i && i.__k || r.__k, s = [], se(r, n = (!a && i || r).__k = m(_, null, [n]), o || l, l, r.ownerSVGElement !== void 0, !a && i ? [i] : o ? null : r.firstChild ? e.call(r.childNodes) : null, s, !a && i ? i : o ? o.__e : r.firstChild, a), ce(s, n);
}
function me(e, t) {
	var n = {
		__c: t = "__cC" + c++,
		__: e,
		Consumer: function(e, t) {
			return e.children(t);
		},
		Provider: function(e) {
			var n, r;
			return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
				return r;
			}, this.shouldComponentUpdate = function(e) {
				this.props.value !== e.value && n.some(function(e) {
					e.__e = !0, T(e);
				});
			}, this.sub = function(e) {
				n.push(e);
				var t = e.componentWillUnmount;
				e.componentWillUnmount = function() {
					n.splice(n.indexOf(e), 1), t && t.call(e);
				};
			}), e.children;
		}
	};
	return n.Provider.__ = n.Consumer.contextType = n;
}
e = u.slice, t = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, n = 0, r = function(e) {
	return e != null && e.constructor === void 0;
}, i = !1, C.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = f({}, this.state);
	typeof e == "function" && (e = e(f({}, n), this.props)), e && f(n, e), e != null && this.__v && (t && this._sb.push(t), T(this));
}, C.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), T(this));
}, C.prototype.render = _, a = [], s = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, E.__r = 0, c = 0;
//#endregion
//#region node_modules/preact/hooks/dist/hooks.module.js
var D, he, ge, _e = [], ve = [], ye = t.__b, be = t.__r, xe = t.diffed, Se = t.__c, Ce = t.unmount;
function we() {
	for (var e; e = _e.shift();) if (e.__P && e.__H) try {
		e.__H.__h.forEach(De), e.__H.__h.forEach(Oe), e.__H.__h = [];
	} catch (n) {
		e.__H.__h = [], t.__e(n, e.__v);
	}
}
t.__b = function(e) {
	D = null, ye && ye(e);
}, t.__r = function(e) {
	be && be(e);
	var t = (D = e.__c).__H;
	t && (he === D ? (t.__h = [], D.__h = [], t.__.forEach(function(e) {
		e.__N && (e.__ = e.__N), e.__V = ve, e.__N = e.i = void 0;
	})) : (t.__h.forEach(De), t.__h.forEach(Oe), t.__h = [])), he = D;
}, t.diffed = function(e) {
	xe && xe(e);
	var n = e.__c;
	n && n.__H && (n.__H.__h.length && (_e.push(n) !== 1 && ge === t.requestAnimationFrame || ((ge = t.requestAnimationFrame) || Ee)(we)), n.__H.__.forEach(function(e) {
		e.i && (e.__H = e.i), e.__V !== ve && (e.__ = e.__V), e.i = void 0, e.__V = ve;
	})), he = D = null;
}, t.__c = function(e, n) {
	n.some(function(e) {
		try {
			e.__h.forEach(De), e.__h = e.__h.filter(function(e) {
				return !e.__ || Oe(e);
			});
		} catch (r) {
			n.some(function(e) {
				e.__h &&= [];
			}), n = [], t.__e(r, e.__v);
		}
	}), Se && Se(e, n);
}, t.unmount = function(e) {
	Ce && Ce(e);
	var n, r = e.__c;
	r && r.__H && (r.__H.__.forEach(function(e) {
		try {
			De(e);
		} catch (e) {
			n = e;
		}
	}), r.__H = void 0, n && t.__e(n, r.__v));
};
var Te = typeof requestAnimationFrame == "function";
function Ee(e) {
	var t, n = function() {
		clearTimeout(r), Te && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 100);
	Te && (t = requestAnimationFrame(n));
}
function De(e) {
	var t = D, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), D = t;
}
function Oe(e) {
	var t = D;
	e.__c = e.__(), D = t;
}
//#endregion
//#region node_modules/preact/compat/dist/compat.module.js
function ke(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function Ae(e, t) {
	for (var n in e) if (n !== "__source" && !(n in t)) return !0;
	for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1;
}
function je(e) {
	this.props = e;
}
(je.prototype = new C()).isPureReactComponent = !0, je.prototype.shouldComponentUpdate = function(e, t) {
	return Ae(this.props, e) || Ae(this.state, t);
};
var Me = t.__b;
t.__b = function(e) {
	e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Me && Me(e);
}, typeof Symbol < "u" && Symbol.for;
var Ne = t.__e;
t.__e = function(e, t, n, r) {
	if (e.then) {
		for (var i, a = t; a = a.__;) if ((i = a.__c) && i.__c) return t.__e ?? (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
	}
	Ne(e, t, n, r);
};
var Pe = t.unmount;
function Fe(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(e) {
		typeof e.__c == "function" && e.__c();
	}), e.__c.__H = null), (e = ke({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(e) {
		return Fe(e, t, n);
	})), e;
}
function Ie(e, t, n) {
	return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
		return Ie(e, t, n);
	}), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e;
}
function Le() {
	this.__u = 0, this.t = null, this.__b = null;
}
function Re(e) {
	var t = e.__.__c;
	return t && t.__a && t.__a(e);
}
function ze() {
	this.u = null, this.o = null;
}
t.unmount = function(e) {
	var t = e.__c;
	t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Pe && Pe(e);
}, (Le.prototype = new C()).__c = function(e, t) {
	var n = t.__c, r = this;
	r.t ??= [], r.t.push(n);
	var i = Re(r.__v), a = !1, o = function() {
		a || (a = !0, n.__R = null, i ? i(s) : s());
	};
	n.__R = o;
	var s = function() {
		if (!--r.__u) {
			if (r.state.__a) {
				var e = r.state.__a;
				r.__v.__k[0] = Ie(e, e.__c.__P, e.__c.__O);
			}
			var t;
			for (r.setState({ __a: r.__b = null }); t = r.t.pop();) t.forceUpdate();
		}
	}, c = !0 === t.__h;
	r.__u++ || c || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(o, o);
}, Le.prototype.componentWillUnmount = function() {
	this.t = [];
}, Le.prototype.render = function(e, t) {
	if (this.__b) {
		if (this.__v.__k) {
			var n = document.createElement("div"), r = this.__v.__k[0].__c;
			this.__v.__k[0] = Fe(this.__b, n, r.__O = r.__P);
		}
		this.__b = null;
	}
	var i = t.__a && m(_, null, e.fallback);
	return i && (i.__h = null), [m(_, null, t.__a ? null : e.children), i];
};
var Be = function(e, t, n) {
	if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size)) for (n = e.u; n;) {
		for (; n.length > 3;) n.pop()();
		if (n[1] < n[0]) break;
		e.u = n = n[2];
	}
};
function Ve(e) {
	return this.getChildContext = function() {
		return e.context;
	}, e.children;
}
function He(e) {
	var t = this, n = e.i;
	t.componentWillUnmount = function() {
		pe(null, t.l), t.l = null, t.i = null;
	}, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l ||= (t.i = n, {
		nodeType: 1,
		parentNode: n,
		childNodes: [],
		appendChild: function(e) {
			this.childNodes.push(e), t.i.appendChild(e);
		},
		insertBefore: function(e, n) {
			this.childNodes.push(e), t.i.appendChild(e);
		},
		removeChild: function(e) {
			this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
		}
	}), pe(m(Ve, { context: t.context }, e.__v), t.l)) : t.l && t.componentWillUnmount();
}
function Ue(e, t) {
	var n = m(He, {
		__v: e,
		i: t
	});
	return n.containerInfo = t, n;
}
(ze.prototype = new C()).__a = function(e) {
	var t = this, n = Re(t.__v), r = t.o.get(e);
	return r[0]++, function(i) {
		var a = function() {
			t.props.revealOrder ? (r.push(i), Be(t, e, r)) : i();
		};
		n ? n(a) : a();
	};
}, ze.prototype.render = function(e) {
	this.u = null, this.o = /* @__PURE__ */ new Map();
	var t = ie(e.children);
	e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
	for (var n = t.length; n--;) this.o.set(t[n], this.u = [
		1,
		0,
		this.u
	]);
	return e.children;
}, ze.prototype.componentDidUpdate = ze.prototype.componentDidMount = function() {
	var e = this;
	this.o.forEach(function(t, n) {
		Be(e, n, t);
	});
};
var We = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Ge = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ke = typeof document < "u", qe = function(e) {
	return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
C.prototype.isReactComponent = {}, [
	"componentWillMount",
	"componentWillReceiveProps",
	"componentWillUpdate"
].forEach(function(e) {
	Object.defineProperty(C.prototype, e, {
		configurable: !0,
		get: function() {
			return this["UNSAFE_" + e];
		},
		set: function(t) {
			Object.defineProperty(this, e, {
				configurable: !0,
				writable: !0,
				value: t
			});
		}
	});
});
var Je = t.event;
function Ye() {}
function Xe() {
	return this.cancelBubble;
}
function Ze() {
	return this.defaultPrevented;
}
t.event = function(e) {
	return Je && (e = Je(e)), e.persist = Ye, e.isPropagationStopped = Xe, e.isDefaultPrevented = Ze, e.nativeEvent = e;
};
var Qe = {
	configurable: !0,
	get: function() {
		return this.class;
	}
}, $e = t.vnode;
t.vnode = function(e) {
	var t = e.type, n = e.props, r = n;
	if (typeof t == "string") {
		var i = t.indexOf("-") === -1;
		for (var a in r = {}, n) {
			var o = n[a];
			Ke && a === "children" && t === "noscript" || a === "value" && "defaultValue" in n && o == null || (a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && !0 === o ? o = "" : /ondoubleclick/i.test(a) ? a = "ondblclick" : /^onchange(textarea|input)/i.test(a + t) && !qe(n.type) ? a = "oninput" : /^onfocus$/i.test(a) ? a = "onfocusin" : /^onblur$/i.test(a) ? a = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(a) ? a = a.toLowerCase() : i && Ge.test(a) ? a = a.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : o === null && (o = void 0), /^oninput$/i.test(a) && (a = a.toLowerCase(), r[a] && (a = "oninputCapture")), r[a] = o);
		}
		t == "select" && r.multiple && Array.isArray(r.value) && (r.value = ie(n.children).forEach(function(e) {
			e.props.selected = r.value.indexOf(e.props.value) != -1;
		})), t == "select" && r.defaultValue != null && (r.value = ie(n.children).forEach(function(e) {
			e.props.selected = r.multiple ? r.defaultValue.indexOf(e.props.value) != -1 : r.defaultValue == e.props.value;
		})), e.props = r, n.class != n.className && (Qe.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Qe));
	}
	e.$$typeof = We, $e && $e(e);
};
var et = t.__r;
t.__r = function(e) {
	et && et(e), e.__c;
};
//#endregion
//#region node_modules/@fullcalendar/core/internal-common.js
var tt = [], nt = /* @__PURE__ */ new Map();
function rt(e) {
	tt.push(e), nt.forEach((t) => {
		st(t, e);
	});
}
function it(e) {
	e.isConnected && e.getRootNode && at(e.getRootNode());
}
function at(e) {
	let t = nt.get(e);
	if (!t || !t.isConnected) {
		if (t = e.querySelector("style[data-fullcalendar]"), !t) {
			t = document.createElement("style"), t.setAttribute("data-fullcalendar", "");
			let n = lt();
			n && (t.nonce = n);
			let r = e === document ? document.head : e, i = e === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
			r.insertBefore(t, i);
		}
		nt.set(e, t), ot(t);
	}
}
function ot(e) {
	for (let t of tt) st(e, t);
}
function st(e, t) {
	let { sheet: n } = e, r = n.cssRules.length;
	t.split("}").forEach((e, t) => {
		e = e.trim(), e && n.insertRule(e + "}", r + t);
	});
}
var ct;
function lt() {
	return ct === void 0 && (ct = ut()), ct;
}
function ut() {
	let e = document.querySelector("meta[name=\"csp-nonce\"]");
	if (e && e.hasAttribute("content")) return e.getAttribute("content");
	let t = document.querySelector("script[nonce]");
	return t && t.nonce || "";
}
typeof document < "u" && at(document), rt(":root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:\"\\e900\"}.fc-icon-chevron-right:before{content:\"\\e901\"}.fc-icon-chevrons-left:before{content:\"\\e902\"}.fc-icon-chevrons-right:before{content:\"\\e903\"}.fc-icon-minus-square:before{content:\"\\e904\"}.fc-icon-plus-square:before{content:\"\\e905\"}.fc-icon-x:before{content:\"\\e906\"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:\"\";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:\"\";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}");
var dt = class {
	constructor(e) {
		this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
	}
	request(e) {
		this.isDirty = !0, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e));
	}
	pause(e = "") {
		let { pauseDepths: t } = this;
		t[e] = (t[e] || 0) + 1, this.clearTimeout();
	}
	resume(e = "", t) {
		let { pauseDepths: n } = this;
		e in n && (t ? delete n[e] : (--n[e], n[e] <= 0 && delete n[e]), this.tryDrain());
	}
	isPaused() {
		return Object.keys(this.pauseDepths).length;
	}
	tryDrain() {
		if (!this.isRunning && !this.isPaused()) {
			for (this.isRunning = !0; this.isDirty;) this.isDirty = !1, this.drained();
			this.isRunning = !1;
		}
	}
	clear() {
		this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
	}
	clearTimeout() {
		this.timeoutId &&= (clearTimeout(this.timeoutId), 0);
	}
	drained() {
		this.drainedOption && this.drainedOption();
	}
};
function ft(e) {
	e.parentNode && e.parentNode.removeChild(e);
}
function O(e, t) {
	if (e.closest) return e.closest(t);
	if (!document.documentElement.contains(e)) return null;
	do {
		if (pt(e, t)) return e;
		e = e.parentElement || e.parentNode;
	} while (e !== null && e.nodeType === 1);
	return null;
}
function pt(e, t) {
	return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
}
function mt(e, t) {
	let n = e instanceof HTMLElement ? [e] : e, r = [];
	for (let e = 0; e < n.length; e += 1) {
		let i = n[e].querySelectorAll(t);
		for (let e = 0; e < i.length; e += 1) r.push(i[e]);
	}
	return r;
}
function ht(e, t) {
	let n = e instanceof HTMLElement ? [e] : e, r = [];
	for (let e = 0; e < n.length; e += 1) {
		let i = n[e].children;
		for (let e = 0; e < i.length; e += 1) {
			let n = i[e];
			(!t || pt(n, t)) && r.push(n);
		}
	}
	return r;
}
var gt = /(top|left|right|bottom|width|height)$/i;
function _t(e, t) {
	for (let n in t) vt(e, n, t[n]);
}
function vt(e, t, n) {
	n == null ? e.style[t] = "" : typeof n == "number" && gt.test(t) ? e.style[t] = `${n}px` : e.style[t] = n;
}
function yt(e) {
	return e.composedPath?.call(e)[0] ?? e.target;
}
var bt = 0;
function xt() {
	return bt += 1, "fc-dom-" + bt;
}
function St(e) {
	e.preventDefault();
}
function Ct(e, t) {
	return (n) => {
		let r = O(n.target, e);
		r && t.call(r, n, r);
	};
}
function wt(e, t, n, r) {
	let i = Ct(n, r);
	return e.addEventListener(t, i), () => {
		e.removeEventListener(t, i);
	};
}
function Tt(e, t, n, r) {
	let i;
	return wt(e, "mouseover", t, (e, t) => {
		if (t !== i) {
			i = t, n(e, t);
			let a = (e) => {
				i = null, r(e, t), t.removeEventListener("mouseleave", a);
			};
			t.addEventListener("mouseleave", a);
		}
	});
}
var Et = [
	"webkitTransitionEnd",
	"otransitionend",
	"oTransitionEnd",
	"msTransitionEnd",
	"transitionend"
];
function Dt(e, t) {
	let n = (r) => {
		t(r), Et.forEach((t) => {
			e.removeEventListener(t, n);
		});
	};
	Et.forEach((t) => {
		e.addEventListener(t, n);
	});
}
function Ot(e) {
	return Object.assign({ onClick: e }, kt(e));
}
function kt(e) {
	return {
		tabIndex: 0,
		onKeyDown(t) {
			(t.key === "Enter" || t.key === " ") && (e(t), t.preventDefault());
		}
	};
}
var At = 0;
function k() {
	return At += 1, String(At);
}
function jt() {
	document.body.classList.add("fc-not-allowed");
}
function Mt() {
	document.body.classList.remove("fc-not-allowed");
}
function Nt(e) {
	e.style.userSelect = "none", e.style.webkitUserSelect = "none", e.addEventListener("selectstart", St);
}
function Pt(e) {
	e.style.userSelect = "", e.style.webkitUserSelect = "", e.removeEventListener("selectstart", St);
}
function Ft(e) {
	e.addEventListener("contextmenu", St);
}
function It(e) {
	e.removeEventListener("contextmenu", St);
}
function Lt(e) {
	let t = [], n = [], r, i;
	for (typeof e == "string" ? n = e.split(/\s*,\s*/) : typeof e == "function" ? n = [e] : Array.isArray(e) && (n = e), r = 0; r < n.length; r += 1) i = n[r], typeof i == "string" ? t.push(i.charAt(0) === "-" ? {
		field: i.substring(1),
		order: -1
	} : {
		field: i,
		order: 1
	}) : typeof i == "function" && t.push({ func: i });
	return t;
}
function Rt(e, t, n) {
	let r, i;
	for (r = 0; r < n.length; r += 1) if (i = zt(e, t, n[r]), i) return i;
	return 0;
}
function zt(e, t, n) {
	return n.func ? n.func(e, t) : Bt(e[n.field], t[n.field]) * (n.order || 1);
}
function Bt(e, t) {
	return !e && !t ? 0 : t == null ? -1 : e == null ? 1 : typeof e == "string" || typeof t == "string" ? String(e).localeCompare(String(t)) : e - t;
}
function Vt(e, t) {
	let n = String(e);
	return "000".substr(0, t - n.length) + n;
}
function Ht(e, t, n) {
	return typeof e == "function" ? e(...t) : typeof e == "string" ? t.reduce((e, t, n) => e.replace("$" + n, t || ""), e) : n;
}
function Ut(e, t) {
	return e - t;
}
function Wt(e) {
	return e % 1 == 0;
}
function Gt(e) {
	let t = e.querySelector(".fc-scrollgrid-shrink-frame"), n = e.querySelector(".fc-scrollgrid-shrink-cushion");
	if (!t) throw Error("needs fc-scrollgrid-shrink-frame className");
	if (!n) throw Error("needs fc-scrollgrid-shrink-cushion className");
	return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
}
var Kt = [
	"years",
	"months",
	"days",
	"milliseconds"
], qt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function A(e, t) {
	return typeof e == "string" ? Jt(e) : typeof e == "object" && e ? Yt(e) : typeof e == "number" ? Yt({ [t || "milliseconds"]: e }) : null;
}
function Jt(e) {
	let t = qt.exec(e);
	if (t) {
		let e = t[1] ? -1 : 1;
		return {
			years: 0,
			months: 0,
			days: e * (t[2] ? parseInt(t[2], 10) : 0),
			milliseconds: e * ((t[3] ? parseInt(t[3], 10) : 0) * 60 * 60 * 1e3 + (t[4] ? parseInt(t[4], 10) : 0) * 60 * 1e3 + (t[5] ? parseInt(t[5], 10) : 0) * 1e3 + (t[6] ? parseInt(t[6], 10) : 0))
		};
	}
	return null;
}
function Yt(e) {
	let t = {
		years: e.years || e.year || 0,
		months: e.months || e.month || 0,
		days: e.days || e.day || 0,
		milliseconds: (e.hours || e.hour || 0) * 60 * 60 * 1e3 + (e.minutes || e.minute || 0) * 60 * 1e3 + (e.seconds || e.second || 0) * 1e3 + (e.milliseconds || e.millisecond || e.ms || 0)
	}, n = e.weeks || e.week;
	return n && (t.days += n * 7, t.specifiedWeeks = !0), t;
}
function Xt(e, t) {
	return e.years === t.years && e.months === t.months && e.days === t.days && e.milliseconds === t.milliseconds;
}
function Zt(e) {
	return !e.years && !e.months && !e.milliseconds ? e.days : 0;
}
function Qt(e, t) {
	return {
		years: e.years + t.years,
		months: e.months + t.months,
		days: e.days + t.days,
		milliseconds: e.milliseconds + t.milliseconds
	};
}
function $t(e, t) {
	return {
		years: e.years - t.years,
		months: e.months - t.months,
		days: e.days - t.days,
		milliseconds: e.milliseconds - t.milliseconds
	};
}
function en(e, t) {
	return {
		years: e.years * t,
		months: e.months * t,
		days: e.days * t,
		milliseconds: e.milliseconds * t
	};
}
function tn(e) {
	return rn(e) / 365;
}
function nn(e) {
	return rn(e) / 30;
}
function rn(e) {
	return j(e) / 864e5;
}
function an(e) {
	return j(e) / (1e3 * 60);
}
function on(e) {
	return j(e) / 1e3;
}
function j(e) {
	return e.years * (365 * 864e5) + e.months * (30 * 864e5) + e.days * 864e5 + e.milliseconds;
}
function sn(e, t) {
	let n = null;
	for (let r = 0; r < Kt.length; r += 1) {
		let i = Kt[r];
		if (t[i]) {
			let r = e[i] / t[i];
			if (!Wt(r) || n !== null && n !== r) return null;
			n = r;
		} else if (e[i]) return null;
	}
	return n;
}
function cn(e) {
	let t = e.milliseconds;
	if (t) {
		if (t % 1e3 != 0) return {
			unit: "millisecond",
			value: t
		};
		if (t % (1e3 * 60) != 0) return {
			unit: "second",
			value: t / 1e3
		};
		if (t % (1e3 * 60 * 60) != 0) return {
			unit: "minute",
			value: t / (1e3 * 60)
		};
		if (t) return {
			unit: "hour",
			value: t / (1e3 * 60 * 60)
		};
	}
	return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
		unit: "week",
		value: e.days / 7
	} : {
		unit: "day",
		value: e.days
	} : e.months ? {
		unit: "month",
		value: e.months
	} : e.years ? {
		unit: "year",
		value: e.years
	} : {
		unit: "millisecond",
		value: 0
	};
}
function ln(e, t) {
	let n = 0, r = 0;
	for (; r < e.length;) e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
	return n;
}
function M(e, t, n) {
	if (e === t) return !0;
	let r = e.length, i;
	if (r !== t.length) return !1;
	for (i = 0; i < r; i += 1) if (!(n ? n(e[i], t[i]) : e[i] === t[i])) return !1;
	return !0;
}
var un = [
	"sun",
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat"
];
function dn(e, t) {
	let n = L(e);
	return n[2] += t * 7, R(n);
}
function N(e, t) {
	let n = L(e);
	return n[2] += t, R(n);
}
function P(e, t) {
	let n = L(e);
	return n[6] += t, R(n);
}
function fn(e, t) {
	return F(e, t) / 7;
}
function F(e, t) {
	return (t.valueOf() - e.valueOf()) / (1e3 * 60 * 60 * 24);
}
function pn(e, t) {
	return (t.valueOf() - e.valueOf()) / (1e3 * 60 * 60);
}
function mn(e, t) {
	return (t.valueOf() - e.valueOf()) / (1e3 * 60);
}
function hn(e, t) {
	return (t.valueOf() - e.valueOf()) / 1e3;
}
function gn(e, t) {
	let n = I(e), r = I(t);
	return {
		years: 0,
		months: 0,
		days: Math.round(F(n, r)),
		milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
	};
}
function _n(e, t) {
	let n = vn(e, t);
	return n !== null && n % 7 == 0 ? n / 7 : null;
}
function vn(e, t) {
	return z(e) === z(t) ? Math.round(F(e, t)) : null;
}
function I(e) {
	return R([
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate()
	]);
}
function yn(e) {
	return R([
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate(),
		e.getUTCHours()
	]);
}
function bn(e) {
	return R([
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate(),
		e.getUTCHours(),
		e.getUTCMinutes()
	]);
}
function xn(e) {
	return R([
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate(),
		e.getUTCHours(),
		e.getUTCMinutes(),
		e.getUTCSeconds()
	]);
}
function Sn(e, t, n) {
	let r = e.getUTCFullYear(), i = Cn(e, r, t, n);
	if (i < 1) return Cn(e, r - 1, t, n);
	let a = Cn(e, r + 1, t, n);
	return a >= 1 ? Math.min(i, a) : i;
}
function Cn(e, t, n, r) {
	let i = R([
		t,
		0,
		1 + wn(t, n, r)
	]), a = I(e), o = Math.round(F(i, a));
	return Math.floor(o / 7) + 1;
}
function wn(e, t, n) {
	let r = 7 + t - n;
	return -((7 + R([
		e,
		0,
		r
	]).getUTCDay() - t) % 7) + r - 1;
}
function Tn(e) {
	return [
		e.getFullYear(),
		e.getMonth(),
		e.getDate(),
		e.getHours(),
		e.getMinutes(),
		e.getSeconds(),
		e.getMilliseconds()
	];
}
function En(e) {
	return new Date(e[0], e[1] || 0, e[2] == null ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0);
}
function L(e) {
	return [
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate(),
		e.getUTCHours(),
		e.getUTCMinutes(),
		e.getUTCSeconds(),
		e.getUTCMilliseconds()
	];
}
function R(e) {
	return e.length === 1 && (e = e.concat([0])), new Date(Date.UTC(...e));
}
function Dn(e) {
	return !isNaN(e.valueOf());
}
function z(e) {
	return e.getUTCHours() * 1e3 * 60 * 60 + e.getUTCMinutes() * 1e3 * 60 + e.getUTCSeconds() * 1e3 + e.getUTCMilliseconds();
}
function On(e, t, n = !1) {
	let r = e.toISOString();
	return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (t == null ? r = r.replace("Z", "") : t !== 0 && (r = r.replace("Z", Mn(t, !0)))), r;
}
function kn(e) {
	return e.toISOString().replace(/T.*$/, "");
}
function An(e) {
	return e.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function jn(e) {
	return Vt(e.getUTCHours(), 2) + ":" + Vt(e.getUTCMinutes(), 2) + ":" + Vt(e.getUTCSeconds(), 2);
}
function Mn(e, t = !1) {
	let n = e < 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = Math.round(r % 60);
	return t ? `${n + Vt(i, 2)}:${Vt(a, 2)}` : `GMT${n}${i}${a ? `:${Vt(a, 2)}` : ""}`;
}
function B(e, t, n) {
	let r, i;
	return function(...a) {
		if (!r) i = e.apply(this, a);
		else if (!M(r, a)) {
			n && n(i);
			let r = e.apply(this, a);
			(!t || !t(r, i)) && (i = r);
		}
		return r = a, i;
	};
}
function Nn(e, t, n) {
	let r, i;
	return (a) => {
		if (!r) i = e.call(this, a);
		else if (!G(r, a)) {
			n && n(i);
			let r = e.call(this, a);
			(!t || !t(r, i)) && (i = r);
		}
		return r = a, i;
	};
}
function Pn(e, t, n) {
	let r = [], i = [];
	return (a) => {
		let o = r.length, s = a.length, c = 0;
		for (; c < o; c += 1) if (!a[c]) n && n(i[c]);
		else if (!M(r[c], a[c])) {
			n && n(i[c]);
			let r = e.apply(this, a[c]);
			(!t || !t(r, i[c])) && (i[c] = r);
		}
		for (; c < s; c += 1) i[c] = e.apply(this, a[c]);
		return r = a, i.splice(s), i;
	};
}
function Fn(e, t, n) {
	let r = {}, i = {};
	return (a) => {
		let o = {};
		for (let s in a) if (!i[s]) o[s] = e.apply(this, a[s]);
		else if (M(r[s], a[s])) o[s] = i[s];
		else {
			n && n(i[s]);
			let r = e.apply(this, a[s]);
			o[s] = t && t(r, i[s]) ? i[s] : r;
		}
		return r = a, i = o, o;
	};
}
var In = {
	week: 3,
	separator: 9,
	omitZeroMinute: 9,
	meridiem: 9,
	omitCommas: 9
}, Ln = {
	timeZoneName: 7,
	era: 6,
	year: 5,
	month: 4,
	day: 2,
	weekday: 2,
	hour: 1,
	minute: 1,
	second: 1
}, Rn = /\s*([ap])\.?m\.?/i, zn = /,/g, Bn = /\s+/g, Vn = /\u200e/g, Hn = /UTC|GMT/, Un = class {
	constructor(e) {
		let t = {}, n = {}, r = 9;
		for (let i in e) i in In ? (n[i] = e[i], In[i] < 9 && (r = Math.min(In[i], r))) : (t[i] = e[i], i in Ln && (r = Math.min(Ln[i], r)));
		this.standardDateProps = t, this.extendedSettings = n, this.smallestUnitNum = r, this.buildFormattingFunc = B(Wn);
	}
	format(e, t) {
		return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e);
	}
	formatRange(e, t, n, r) {
		let { standardDateProps: i, extendedSettings: a } = this, o = Xn(e.marker, t.marker, n.calendarSystem);
		if (!o) return this.format(e, n);
		let s = o;
		s > 1 && (i.year === "numeric" || i.year === "2-digit") && (i.month === "numeric" || i.month === "2-digit") && (i.day === "numeric" || i.day === "2-digit") && (s = 1);
		let c = this.format(e, n), l = this.format(t, n);
		if (c === l) return c;
		let u = Wn(Zn(i, s), a, n), d = u(e), f = u(t), p = Qn(c, d, l, f), m = a.separator || r || n.defaultSeparator || "";
		return p ? p.before + d + m + f + p.after : c + m + l;
	}
	getSmallestUnit() {
		switch (this.smallestUnitNum) {
			case 7:
			case 6:
			case 5: return "year";
			case 4: return "month";
			case 3: return "week";
			case 2: return "day";
			default: return "time";
		}
	}
};
function Wn(e, t, n) {
	let r = Object.keys(e).length;
	return r === 1 && e.timeZoneName === "short" ? (e) => Mn(e.timeZoneOffset) : r === 0 && t.week ? (e) => Yn(n.computeWeekNumber(e.marker), n.weekText, n.weekTextLong, n.locale, t.week) : Gn(e, t, n);
}
function Gn(e, t, n) {
	e = Object.assign({}, e), t = Object.assign({}, t), Kn(e, t), e.timeZone = "UTC";
	let r = new Intl.DateTimeFormat(n.locale.codes, e), i;
	if (t.omitZeroMinute) {
		let t = Object.assign({}, e);
		delete t.minute, i = new Intl.DateTimeFormat(n.locale.codes, t);
	}
	return (a) => {
		let { marker: o } = a, s;
		return s = i && !o.getUTCMinutes() ? i : r, qn(s.format(o), a, e, t, n);
	};
}
function Kn(e, t) {
	e.timeZoneName && (e.hour ||= "2-digit", e.minute ||= "2-digit"), e.timeZoneName === "long" && (e.timeZoneName = "short"), t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute;
}
function qn(e, t, n, r, i) {
	return e = e.replace(Vn, ""), n.timeZoneName === "short" && (e = Jn(e, i.timeZone === "UTC" || t.timeZoneOffset == null ? "UTC" : Mn(t.timeZoneOffset))), r.omitCommas && (e = e.replace(zn, "").trim()), r.omitZeroMinute && (e = e.replace(":00", "")), r.meridiem === !1 ? e = e.replace(Rn, "").trim() : r.meridiem === "narrow" ? e = e.replace(Rn, (e, t) => t.toLocaleLowerCase()) : r.meridiem === "short" ? e = e.replace(Rn, (e, t) => `${t.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (e = e.replace(Rn, (e) => e.toLocaleLowerCase())), e = e.replace(Bn, " "), e = e.trim(), e;
}
function Jn(e, t) {
	let n = !1;
	return e = e.replace(Hn, () => (n = !0, t)), n || (e += ` ${t}`), e;
}
function Yn(e, t, n, r, i) {
	let a = [];
	return i === "long" ? a.push(n) : (i === "short" || i === "narrow") && a.push(t), (i === "long" || i === "short") && a.push(" "), a.push(r.simpleNumberFormat.format(e)), r.options.direction === "rtl" && a.reverse(), a.join("");
}
function Xn(e, t, n) {
	return n.getMarkerYear(e) === n.getMarkerYear(t) ? n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerDay(e) === n.getMarkerDay(t) ? z(e) === z(t) ? 0 : 1 : 2 : 4 : 5;
}
function Zn(e, t) {
	let n = {};
	for (let r in e) (!(r in Ln) || Ln[r] <= t) && (n[r] = e[r]);
	return n;
}
function Qn(e, t, n, r) {
	let i = 0;
	for (; i < e.length;) {
		let a = e.indexOf(t, i);
		if (a === -1) break;
		let o = e.substr(0, a);
		i = a + t.length;
		let s = e.substr(i), c = 0;
		for (; c < n.length;) {
			let e = n.indexOf(r, c);
			if (e === -1) break;
			let t = n.substr(0, e);
			c = e + r.length;
			let i = n.substr(c);
			if (o === t && s === i) return {
				before: o,
				after: s
			};
		}
	}
	return null;
}
function $n(e, t) {
	let n = t.markerToArray(e.marker);
	return {
		marker: e.marker,
		timeZoneOffset: e.timeZoneOffset,
		array: n,
		year: n[0],
		month: n[1],
		day: n[2],
		hour: n[3],
		minute: n[4],
		second: n[5],
		millisecond: n[6]
	};
}
function er(e, t, n, r) {
	let i = $n(e, n.calendarSystem);
	return {
		date: i,
		start: i,
		end: t ? $n(t, n.calendarSystem) : null,
		timeZone: n.timeZone,
		localeCodes: n.locale.codes,
		defaultSeparator: r || n.defaultSeparator
	};
}
var tr = class {
	constructor(e) {
		this.cmdStr = e;
	}
	format(e, t, n) {
		return t.cmdFormatter(this.cmdStr, er(e, null, t, n));
	}
	formatRange(e, t, n, r) {
		return n.cmdFormatter(this.cmdStr, er(e, t, n, r));
	}
}, nr = class {
	constructor(e) {
		this.func = e;
	}
	format(e, t, n) {
		return this.func(er(e, null, t, n));
	}
	formatRange(e, t, n, r) {
		return this.func(er(e, t, n, r));
	}
};
function V(e) {
	return typeof e == "object" && e ? new Un(e) : typeof e == "string" ? new tr(e) : typeof e == "function" ? new nr(e) : null;
}
var rr = {
	navLinkDayClick: H,
	navLinkWeekClick: H,
	duration: A,
	bootstrapFontAwesome: H,
	buttonIcons: H,
	customButtons: H,
	defaultAllDayEventDuration: A,
	defaultTimedEventDuration: A,
	nextDayThreshold: A,
	scrollTime: A,
	scrollTimeReset: Boolean,
	slotMinTime: A,
	slotMaxTime: A,
	dayPopoverFormat: V,
	slotDuration: A,
	snapDuration: A,
	headerToolbar: H,
	footerToolbar: H,
	defaultRangeSeparator: String,
	titleRangeSeparator: String,
	forceEventDuration: Boolean,
	dayHeaders: Boolean,
	dayHeaderFormat: V,
	dayHeaderClassNames: H,
	dayHeaderContent: H,
	dayHeaderDidMount: H,
	dayHeaderWillUnmount: H,
	dayCellClassNames: H,
	dayCellContent: H,
	dayCellDidMount: H,
	dayCellWillUnmount: H,
	initialView: String,
	aspectRatio: Number,
	weekends: Boolean,
	weekNumberCalculation: H,
	weekNumbers: Boolean,
	weekNumberClassNames: H,
	weekNumberContent: H,
	weekNumberDidMount: H,
	weekNumberWillUnmount: H,
	editable: Boolean,
	viewClassNames: H,
	viewDidMount: H,
	viewWillUnmount: H,
	nowIndicator: Boolean,
	nowIndicatorSnap: H,
	nowIndicatorClassNames: H,
	nowIndicatorContent: H,
	nowIndicatorDidMount: H,
	nowIndicatorWillUnmount: H,
	showNonCurrentDates: Boolean,
	lazyFetching: Boolean,
	startParam: String,
	endParam: String,
	timeZoneParam: String,
	timeZone: String,
	locales: H,
	locale: H,
	themeSystem: String,
	dragRevertDuration: Number,
	dragScroll: Boolean,
	allDayMaintainDuration: Boolean,
	unselectAuto: Boolean,
	dropAccept: H,
	eventOrder: Lt,
	eventOrderStrict: Boolean,
	handleWindowResize: Boolean,
	windowResizeDelay: Number,
	longPressDelay: Number,
	eventDragMinDistance: Number,
	expandRows: Boolean,
	height: H,
	contentHeight: H,
	direction: String,
	weekNumberFormat: V,
	eventResizableFromStart: Boolean,
	displayEventTime: Boolean,
	displayEventEnd: Boolean,
	weekText: String,
	weekTextLong: String,
	progressiveEventRendering: Boolean,
	businessHours: H,
	initialDate: H,
	now: H,
	eventDataTransform: H,
	stickyHeaderDates: H,
	stickyFooterScrollbar: H,
	viewHeight: H,
	defaultAllDay: Boolean,
	eventSourceFailure: H,
	eventSourceSuccess: H,
	eventDisplay: String,
	eventStartEditable: Boolean,
	eventDurationEditable: Boolean,
	eventOverlap: H,
	eventConstraint: H,
	eventAllow: H,
	eventBackgroundColor: String,
	eventBorderColor: String,
	eventTextColor: String,
	eventColor: String,
	eventClassNames: H,
	eventContent: H,
	eventDidMount: H,
	eventWillUnmount: H,
	selectConstraint: H,
	selectOverlap: H,
	selectAllow: H,
	droppable: Boolean,
	unselectCancel: String,
	slotLabelFormat: H,
	slotLaneClassNames: H,
	slotLaneContent: H,
	slotLaneDidMount: H,
	slotLaneWillUnmount: H,
	slotLabelClassNames: H,
	slotLabelContent: H,
	slotLabelDidMount: H,
	slotLabelWillUnmount: H,
	dayMaxEvents: H,
	dayMaxEventRows: H,
	dayMinWidth: Number,
	slotLabelInterval: A,
	allDayText: String,
	allDayClassNames: H,
	allDayContent: H,
	allDayDidMount: H,
	allDayWillUnmount: H,
	slotMinWidth: Number,
	navLinks: Boolean,
	eventTimeFormat: V,
	rerenderDelay: Number,
	moreLinkText: H,
	moreLinkHint: H,
	selectMinDistance: Number,
	selectable: Boolean,
	selectLongPressDelay: Number,
	eventLongPressDelay: Number,
	selectMirror: Boolean,
	eventMaxStack: Number,
	eventMinHeight: Number,
	eventMinWidth: Number,
	eventShortHeight: Number,
	slotEventOverlap: Boolean,
	plugins: H,
	firstDay: Number,
	dayCount: Number,
	dateAlignment: String,
	dateIncrement: A,
	hiddenDays: H,
	fixedWeekCount: Boolean,
	validRange: H,
	visibleRange: H,
	titleFormat: H,
	eventInteractive: Boolean,
	noEventsText: String,
	viewHint: H,
	navLinkHint: H,
	closeHint: String,
	timeHint: String,
	eventHint: String,
	moreLinkClick: H,
	moreLinkClassNames: H,
	moreLinkContent: H,
	moreLinkDidMount: H,
	moreLinkWillUnmount: H,
	monthStartFormat: V,
	handleCustomRendering: H,
	customRenderingMetaMap: H,
	customRenderingReplaces: Boolean
}, ir = {
	eventDisplay: "auto",
	defaultRangeSeparator: " - ",
	titleRangeSeparator: " – ",
	defaultTimedEventDuration: "01:00:00",
	defaultAllDayEventDuration: { day: 1 },
	forceEventDuration: !1,
	nextDayThreshold: "00:00:00",
	dayHeaders: !0,
	initialView: "",
	aspectRatio: 1.35,
	headerToolbar: {
		start: "title",
		center: "",
		end: "today prev,next"
	},
	weekends: !0,
	weekNumbers: !1,
	weekNumberCalculation: "local",
	editable: !1,
	nowIndicator: !1,
	scrollTime: "06:00:00",
	scrollTimeReset: !0,
	slotMinTime: "00:00:00",
	slotMaxTime: "24:00:00",
	showNonCurrentDates: !0,
	lazyFetching: !0,
	startParam: "start",
	endParam: "end",
	timeZoneParam: "timeZone",
	timeZone: "local",
	locales: [],
	locale: "",
	themeSystem: "standard",
	dragRevertDuration: 500,
	dragScroll: !0,
	allDayMaintainDuration: !1,
	unselectAuto: !0,
	dropAccept: "*",
	eventOrder: "start,-duration,allDay,title",
	dayPopoverFormat: {
		month: "long",
		day: "numeric",
		year: "numeric"
	},
	handleWindowResize: !0,
	windowResizeDelay: 100,
	longPressDelay: 1e3,
	eventDragMinDistance: 5,
	expandRows: !1,
	navLinks: !1,
	selectable: !1,
	eventMinHeight: 15,
	eventMinWidth: 30,
	eventShortHeight: 30,
	monthStartFormat: {
		month: "long",
		day: "numeric"
	},
	nowIndicatorSnap: "auto"
}, ar = {
	datesSet: H,
	eventsSet: H,
	eventAdd: H,
	eventChange: H,
	eventRemove: H,
	windowResize: H,
	eventClick: H,
	eventMouseEnter: H,
	eventMouseLeave: H,
	select: H,
	unselect: H,
	loading: H,
	_unmount: H,
	_beforeprint: H,
	_afterprint: H,
	_noEventDrop: H,
	_noEventResize: H,
	_resize: H,
	_scrollRequest: H
}, or = {
	buttonText: H,
	buttonHints: H,
	views: H,
	plugins: H,
	initialEvents: H,
	events: H,
	eventSources: H
}, sr = {
	headerToolbar: cr,
	footerToolbar: cr,
	buttonText: cr,
	buttonHints: cr,
	buttonIcons: cr,
	dateIncrement: cr,
	plugins: lr,
	events: lr,
	eventSources: lr,
	resources: lr
};
function cr(e, t) {
	return typeof e == "object" && typeof t == "object" && e && t ? G(e, t) : e === t;
}
function lr(e, t) {
	return Array.isArray(e) && Array.isArray(t) ? M(e, t) : e === t;
}
var ur = {
	type: String,
	component: H,
	buttonText: String,
	buttonTextKey: String,
	dateProfileGeneratorClass: H,
	usesMinMaxTime: Boolean,
	classNames: H,
	content: H,
	didMount: H,
	willUnmount: H
};
function dr(e) {
	return mr(e, sr);
}
function fr(e, t) {
	let n = {}, r = {};
	for (let r in t) r in e && (n[r] = t[r](e[r]));
	for (let n in e) n in t || (r[n] = e[n]);
	return {
		refined: n,
		extra: r
	};
}
function H(e) {
	return e;
}
var { hasOwnProperty: pr } = Object.prototype;
function mr(e, t) {
	let n = {};
	if (t) {
		for (let r in t) if (t[r] === cr) {
			let t = [];
			for (let i = e.length - 1; i >= 0; --i) {
				let a = e[i][r];
				if (typeof a == "object" && a) t.unshift(a);
				else if (a !== void 0) {
					n[r] = a;
					break;
				}
			}
			t.length && (n[r] = mr(t));
		}
	}
	for (let t = e.length - 1; t >= 0; --t) {
		let r = e[t];
		for (let e in r) e in n || (n[e] = r[e]);
	}
	return n;
}
function U(e, t) {
	let n = {};
	for (let r in e) t(e[r], r) && (n[r] = e[r]);
	return n;
}
function W(e, t) {
	let n = {};
	for (let r in e) n[r] = t(e[r], r);
	return n;
}
function hr(e) {
	let t = {};
	for (let n of e) t[n] = !0;
	return t;
}
function gr(e) {
	let t = [];
	for (let n in e) t.push(e[n]);
	return t;
}
function G(e, t) {
	if (e === t) return !0;
	for (let n in e) if (pr.call(e, n) && !(n in t)) return !1;
	for (let n in t) if (pr.call(t, n) && e[n] !== t[n]) return !1;
	return !0;
}
var _r = /^on[A-Z]/;
function vr(e, t) {
	let n = yr(e, t);
	for (let e of n) if (!_r.test(e)) return !1;
	return !0;
}
function yr(e, t) {
	let n = [];
	for (let r in e) pr.call(e, r) && (r in t || n.push(r));
	for (let r in t) pr.call(t, r) && e[r] !== t[r] && n.push(r);
	return n;
}
function br(e, t, n = {}) {
	if (e === t) return !0;
	for (let r in t) if (!(r in e && xr(e[r], t[r], n[r]))) return !1;
	for (let n in e) if (!(n in t)) return !1;
	return !0;
}
function xr(e, t, n) {
	return e === t || n === !0 ? !0 : n ? n(e, t) : !1;
}
function Sr(e, t = 0, n, r = 1) {
	let i = [];
	n ??= Object.keys(e).length;
	for (let a = t; a < n; a += r) {
		let t = e[a];
		t !== void 0 && i.push(t);
	}
	return i;
}
var Cr = {};
function wr(e, t) {
	Cr[e] = t;
}
function Tr(e) {
	return new Cr[e]();
}
wr("gregory", class {
	getMarkerYear(e) {
		return e.getUTCFullYear();
	}
	getMarkerMonth(e) {
		return e.getUTCMonth();
	}
	getMarkerDay(e) {
		return e.getUTCDate();
	}
	arrayToMarker(e) {
		return R(e);
	}
	markerToArray(e) {
		return L(e);
	}
});
var Er = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Dr(e) {
	let t = Er.exec(e);
	if (t) {
		let e = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? Number(`0.${t[12]}`) * 1e3 : 0));
		if (Dn(e)) {
			let n = null;
			return t[13] && (n = (t[15] === "-" ? -1 : 1) * (Number(t[16] || 0) * 60 + Number(t[18] || 0))), {
				marker: e,
				isTimeUnspecified: !t[6],
				timeZoneOffset: n
			};
		}
	}
	return null;
}
var Or = class {
	constructor(e) {
		let t = this.timeZone = e.timeZone, n = t !== "local" && t !== "UTC";
		e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = !!(!n || this.namedTimeZoneImpl), this.calendarSystem = Tr(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText == null ? e.locale.options.weekText : e.weekText, this.weekTextLong = (e.weekTextLong == null ? e.locale.options.weekTextLong : e.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
	}
	createMarker(e) {
		let t = this.createMarkerMeta(e);
		return t === null ? null : t.marker;
	}
	createNowMarker() {
		return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : R(Tn(/* @__PURE__ */ new Date()));
	}
	createMarkerMeta(e) {
		if (typeof e == "string") return this.parse(e);
		let t = null;
		return typeof e == "number" ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = R(e)), t === null || !Dn(t) ? null : {
			marker: t,
			isTimeUnspecified: !1,
			forcedTzo: null
		};
	}
	parse(e) {
		let t = Dr(e);
		if (t === null) return null;
		let { marker: n } = t, r = null;
		return t.timeZoneOffset !== null && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - t.timeZoneOffset * 60 * 1e3) : r = t.timeZoneOffset), {
			marker: n,
			isTimeUnspecified: t.isTimeUnspecified,
			forcedTzo: r
		};
	}
	getYear(e) {
		return this.calendarSystem.getMarkerYear(e);
	}
	getMonth(e) {
		return this.calendarSystem.getMarkerMonth(e);
	}
	getDay(e) {
		return this.calendarSystem.getMarkerDay(e);
	}
	add(e, t) {
		let n = this.calendarSystem.markerToArray(e);
		return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n);
	}
	subtract(e, t) {
		let n = this.calendarSystem.markerToArray(e);
		return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n);
	}
	addYears(e, t) {
		let n = this.calendarSystem.markerToArray(e);
		return n[0] += t, this.calendarSystem.arrayToMarker(n);
	}
	addMonths(e, t) {
		let n = this.calendarSystem.markerToArray(e);
		return n[1] += t, this.calendarSystem.arrayToMarker(n);
	}
	diffWholeYears(e, t) {
		let { calendarSystem: n } = this;
		return z(e) === z(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null;
	}
	diffWholeMonths(e, t) {
		let { calendarSystem: n } = this;
		return z(e) === z(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + (n.getMarkerYear(t) - n.getMarkerYear(e)) * 12 : null;
	}
	greatestWholeUnit(e, t) {
		let n = this.diffWholeYears(e, t);
		return n === null ? (n = this.diffWholeMonths(e, t), n === null ? (n = _n(e, t), n === null ? (n = vn(e, t), n === null ? (n = pn(e, t), Wt(n) ? {
			unit: "hour",
			value: n
		} : (n = mn(e, t), Wt(n) ? {
			unit: "minute",
			value: n
		} : (n = hn(e, t), Wt(n) ? {
			unit: "second",
			value: n
		} : {
			unit: "millisecond",
			value: t.valueOf() - e.valueOf()
		}))) : {
			unit: "day",
			value: n
		}) : {
			unit: "week",
			value: n
		}) : {
			unit: "month",
			value: n
		}) : {
			unit: "year",
			value: n
		};
	}
	countDurationsBetween(e, t, n) {
		let r;
		return n.years && (r = this.diffWholeYears(e, t), r !== null) ? r / tn(n) : n.months && (r = this.diffWholeMonths(e, t), r !== null) ? r / nn(n) : n.days && (r = vn(e, t), r !== null) ? r / rn(n) : (t.valueOf() - e.valueOf()) / j(n);
	}
	startOf(e, t) {
		return t === "year" ? this.startOfYear(e) : t === "month" ? this.startOfMonth(e) : t === "week" ? this.startOfWeek(e) : t === "day" ? I(e) : t === "hour" ? yn(e) : t === "minute" ? bn(e) : t === "second" ? xn(e) : null;
	}
	startOfYear(e) {
		return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)]);
	}
	startOfMonth(e) {
		return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)]);
	}
	startOfWeek(e) {
		return this.calendarSystem.arrayToMarker([
			this.calendarSystem.getMarkerYear(e),
			this.calendarSystem.getMarkerMonth(e),
			e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
		]);
	}
	computeWeekNumber(e) {
		return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : Sn(e, this.weekDow, this.weekDoy);
	}
	format(e, t, n = {}) {
		return t.format({
			marker: e,
			timeZoneOffset: n.forcedTzo == null ? this.offsetForMarker(e) : n.forcedTzo
		}, this);
	}
	formatRange(e, t, n, r = {}) {
		return r.isEndExclusive && (t = P(t, -1)), n.formatRange({
			marker: e,
			timeZoneOffset: r.forcedStartTzo == null ? this.offsetForMarker(e) : r.forcedStartTzo
		}, {
			marker: t,
			timeZoneOffset: r.forcedEndTzo == null ? this.offsetForMarker(t) : r.forcedEndTzo
		}, this, r.defaultSeparator);
	}
	formatIso(e, t = {}) {
		let n = null;
		return t.omitTimeZoneOffset || (n = t.forcedTzo == null ? this.offsetForMarker(e) : t.forcedTzo), On(e, n, t.omitTime);
	}
	timestampToMarker(e) {
		return this.timeZone === "local" ? R(Tn(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : R(this.namedTimeZoneImpl.timestampToArray(e));
	}
	offsetForMarker(e) {
		return this.timeZone === "local" ? -En(L(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(L(e)) : null;
	}
	toDate(e, t) {
		return this.timeZone === "local" ? En(L(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? /* @__PURE__ */ new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(L(e)) * 1e3 * 60) : new Date(e.valueOf() - (t || 0));
	}
}, kr = class {
	constructor(e) {
		this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
	}
	setIconOverride(e) {
		let t, n;
		if (typeof e == "object" && e) {
			for (n in t = Object.assign({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
			this.iconClasses = t;
		} else e === !1 && (this.iconClasses = {});
	}
	applyIconOverridePrefix(e) {
		let t = this.iconOverridePrefix;
		return t && e.indexOf(t) !== 0 && (e = t + e), e;
	}
	getClass(e) {
		return this.classes[e] || "";
	}
	getIconClass(e, t) {
		let n;
		return n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e], n ? `${this.baseIconClass} ${n}` : "";
	}
	getCustomButtonIconClass(e) {
		let t;
		return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption], t) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(t)}` : "";
	}
};
kr.prototype.classes = {}, kr.prototype.iconClasses = {}, kr.prototype.baseIconClass = "", kr.prototype.iconOverridePrefix = "";
function Ar(e) {
	e();
	let n = t.debounceRendering, r = [];
	function i(e) {
		r.push(e);
	}
	for (t.debounceRendering = i, pe(m(jr, {}), document.createElement("div")); r.length;) r.shift()();
	t.debounceRendering = n;
}
var jr = class extends C {
	render() {
		return m("div", {});
	}
	componentDidMount() {
		this.setState({});
	}
};
function Mr(e) {
	let t = me(e), n = t.Provider;
	return t.Provider = function() {
		let e = !this.getChildContext, t = n.apply(this, arguments);
		if (e) {
			let e = [];
			this.shouldComponentUpdate = (t) => {
				this.props.value !== t.value && e.forEach((e) => {
					e.context = t.value, e.forceUpdate();
				});
			}, this.sub = (t) => {
				e.push(t);
				let n = t.componentWillUnmount;
				t.componentWillUnmount = () => {
					e.splice(e.indexOf(t), 1), n && n.call(t);
				};
			};
		}
		return t;
	}, t;
}
var Nr = class {
	constructor(e, t, n, r) {
		this.execFunc = e, this.emitter = t, this.scrollTime = n, this.scrollTimeReset = r, this.handleScrollRequest = (e) => {
			this.queuedRequest = Object.assign({}, this.queuedRequest || {}, e), this.drain();
		}, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
	}
	detach() {
		this.emitter.off("_scrollRequest", this.handleScrollRequest);
	}
	update(e) {
		e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
	}
	fireInitialScroll() {
		this.handleScrollRequest({ time: this.scrollTime });
	}
	drain() {
		this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
	}
}, K = Mr({});
function Pr(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	return {
		dateEnv: i,
		nowManager: a,
		options: n,
		pluginHooks: s,
		emitter: u,
		dispatch: c,
		getCurrentData: l,
		calendarApi: d,
		viewSpec: e,
		viewApi: t,
		dateProfileGenerator: r,
		theme: o,
		isRtl: n.direction === "rtl",
		addResizeHandler(e) {
			u.on("_resize", e);
		},
		removeResizeHandler(e) {
			u.off("_resize", e);
		},
		createScrollResponder(e) {
			return new Nr(e, u, A(n.scrollTime), n.scrollTimeReset);
		},
		registerInteractiveComponent: f,
		unregisterInteractiveComponent: p
	};
}
var Fr = class extends C {
	shouldComponentUpdate(e, t) {
		return !br(this.props, e, this.propEquality) || !br(this.state, t, this.stateEquality);
	}
	safeSetState(e) {
		br(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
	}
};
Fr.addPropsEquality = Ir, Fr.addStateEquality = Lr, Fr.contextType = K, Fr.prototype.propEquality = {}, Fr.prototype.stateEquality = {};
var q = class extends Fr {};
q.contextType = K;
function Ir(e) {
	let t = Object.create(this.prototype.propEquality);
	Object.assign(t, e), this.prototype.propEquality = t;
}
function Lr(e) {
	let t = Object.create(this.prototype.stateEquality);
	Object.assign(t, e), this.prototype.stateEquality = t;
}
function J(e, t) {
	typeof e == "function" ? e(t) : e && (e.current = t);
}
var Rr = class extends q {
	constructor() {
		super(...arguments), this.id = k(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
			let { options: t } = this.context, { generatorName: n } = this.props;
			(!t.customRenderingReplaces || !zr(n, t)) && this.updateElRef(e);
		}, this.updateElRef = (e) => {
			this.props.elRef && J(this.props.elRef, e);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, { customGenerator: i, defaultGenerator: a, renderProps: o } = e, s = Br(e, [], this.handleEl), c = !1, l, u = [], d;
		if (i != null) {
			let e = typeof i == "function" ? i(o, m) : i;
			if (e === !0) c = !0;
			else {
				let t = e && typeof e == "object";
				t && "html" in e ? s.dangerouslySetInnerHTML = { __html: e.html } : t && "domNodes" in e ? u = Array.prototype.slice.call(e.domNodes) : (t ? r(e) : typeof e != "function") ? l = e : d = e;
			}
		} else c = !zr(e.generatorName, n);
		return c && a && (l = a(o)), this.queuedDomNodes = u, this.currentGeneratorMeta = d, m(e.elTag, s, l);
	}
	componentDidMount() {
		this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
	}
	componentDidUpdate() {
		this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
	}
	componentWillUnmount() {
		this.triggerCustomRendering(!1);
	}
	triggerCustomRendering(e) {
		let { props: t, context: n } = this, { handleCustomRendering: r, customRenderingMetaMap: i } = n.options;
		if (r) {
			let n = this.currentGeneratorMeta ?? i?.[t.generatorName];
			n && r(Object.assign(Object.assign({
				id: this.id,
				isActive: e,
				containerEl: this.base,
				reportNewContainerEl: this.updateElRef,
				generatorMeta: n
			}, t), { elClasses: (t.elClasses || []).filter(Vr) }));
		}
	}
	applyQueueudDomNodes() {
		let { queuedDomNodes: e, currentDomNodes: t } = this, n = this.base;
		if (!M(e, t)) {
			t.forEach(ft);
			for (let t of e) n.appendChild(t);
			this.currentDomNodes = e;
		}
	}
};
Rr.addPropsEquality({
	elClasses: M,
	elStyle: G,
	elAttrs: vr,
	renderProps: G
});
function zr(e, t) {
	return !!(t.handleCustomRendering && e && t.customRenderingMetaMap?.[e]);
}
function Br(e, t, n) {
	let r = Object.assign(Object.assign({}, e.elAttrs), { ref: n });
	return (e.elClasses || t) && (r.className = (e.elClasses || []).concat(t || []).concat(r.className || []).filter(Boolean).join(" ")), e.elStyle && (r.style = e.elStyle), r;
}
function Vr(e) {
	return !!e;
}
var Hr = Mr(0), Y = class extends C {
	constructor() {
		super(...arguments), this.InnerContent = Ur.bind(void 0, this), this.handleEl = (e) => {
			this.el = e, this.props.elRef && (J(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
		};
	}
	render() {
		let { props: e } = this, t = Wr(e.classNameGenerator, e.renderProps);
		if (e.children) {
			let n = Br(e, t, this.handleEl), r = e.children(this.InnerContent, e.renderProps, n);
			return e.elTag ? m(e.elTag, n, r) : r;
		} else return m(Rr, Object.assign(Object.assign({}, e), {
			elRef: this.handleEl,
			elTag: e.elTag || "div",
			elClasses: (e.elClasses || []).concat(t),
			renderId: this.context
		}));
	}
	componentDidMount() {
		var e, t;
		this.el ? (t = (e = this.props).didMount) == null || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el })) : this.didMountMisfire = !0;
	}
	componentWillUnmount() {
		var e, t;
		(t = (e = this.props).willUnmount) == null || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
	}
};
Y.contextType = Hr;
function Ur(e, t) {
	let n = e.props;
	return m(Rr, Object.assign({
		renderProps: n.renderProps,
		generatorName: n.generatorName,
		customGenerator: n.customGenerator,
		defaultGenerator: n.defaultGenerator,
		renderId: e.context
	}, t));
}
function Wr(e, t) {
	let n = typeof e == "function" ? e(t) : e || [];
	return typeof n == "string" ? [n] : n;
}
var Gr = class extends q {
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = { view: t.viewApi };
		return m(Y, {
			elRef: e.elRef,
			elTag: e.elTag || "div",
			elAttrs: e.elAttrs,
			elClasses: [...Kr(e.viewSpec), ...e.elClasses || []],
			elStyle: e.elStyle,
			renderProps: r,
			classNameGenerator: n.viewClassNames,
			generatorName: void 0,
			didMount: n.viewDidMount,
			willUnmount: n.viewWillUnmount
		}, () => e.children);
	}
};
function Kr(e) {
	return [`fc-${e.type}-view`, "fc-view"];
}
function qr(e, t) {
	let n = null, r = null;
	return e.start && (n = t.createMarker(e.start)), e.end && (r = t.createMarker(e.end)), !n && !r || n && r && r < n ? null : {
		start: n,
		end: r
	};
}
function Jr(e, t) {
	let n = [], { start: r } = t, i, a;
	for (e.sort(Yr), i = 0; i < e.length; i += 1) a = e[i], a.start > r && n.push({
		start: r,
		end: a.start
	}), a.end > r && (r = a.end);
	return r < t.end && n.push({
		start: r,
		end: t.end
	}), n;
}
function Yr(e, t) {
	return e.start.valueOf() - t.start.valueOf();
}
function Xr(e, t) {
	let { start: n, end: r } = e, i = null;
	return t.start !== null && (n = n === null ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), t.end != null && (r = r === null ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (n === null || r === null || n < r) && (i = {
		start: n,
		end: r
	}), i;
}
function Zr(e, t) {
	return (e.start === null ? null : e.start.valueOf()) === (t.start === null ? null : t.start.valueOf()) && (e.end === null ? null : e.end.valueOf()) === (t.end === null ? null : t.end.valueOf());
}
function Qr(e, t) {
	return (e.end === null || t.start === null || e.end > t.start) && (e.start === null || t.end === null || e.start < t.end);
}
function $r(e, t) {
	return (e.start === null || t.start !== null && t.start >= e.start) && (e.end === null || t.end !== null && t.end <= e.end);
}
function X(e, t) {
	return (e.start === null || t >= e.start) && (e.end === null || t < e.end);
}
function ei(e, t) {
	return t.start != null && e < t.start ? t.start : t.end != null && e >= t.end ? /* @__PURE__ */ new Date(t.end.valueOf() - 1) : e;
}
function ti(e) {
	let t = Math.floor(F(e.start, e.end)) || 1, n = I(e.start);
	return {
		start: n,
		end: N(n, t)
	};
}
function ni(e, t = A(0)) {
	let n = null, r = null;
	if (e.end) {
		r = I(e.end);
		let n = e.end.valueOf() - r.valueOf();
		n && n >= j(t) && (r = N(r, 1));
	}
	return e.start && (n = I(e.start), r && r <= n && (r = N(n, 1))), {
		start: n,
		end: r
	};
}
function ri(e) {
	let t = ni(e);
	return F(t.start, t.end) > 1;
}
function ii(e, t, n, r) {
	return r === "year" ? A(n.diffWholeYears(e, t), "year") : r === "month" ? A(n.diffWholeMonths(e, t), "month") : gn(e, t);
}
var ai = class {
	constructor(e) {
		this.props = e, this.initHiddenDays();
	}
	buildPrev(e, t, n) {
		let { dateEnv: r } = this.props, i = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
		return this.build(i, -1, n);
	}
	buildNext(e, t, n) {
		let { dateEnv: r } = this.props, i = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
		return this.build(i, 1, n);
	}
	build(e, t, n = !0) {
		let { props: r } = this, i, a, o, s, c, l;
		return i = this.buildValidRange(), i = this.trimHiddenDays(i), n && (e = ei(e, i)), a = this.buildCurrentRangeInfo(e, t), o = /^(year|month|week|day)$/.test(a.unit), s = this.buildRenderRange(this.trimHiddenDays(a.range), a.unit, o), s = this.trimHiddenDays(s), c = s, r.showNonCurrentDates || (c = Xr(c, a.range)), c = this.adjustActiveRange(c), c = Xr(c, i), l = Qr(a.range, i), X(s, e) || (e = s.start), {
			currentDate: e,
			validRange: i,
			currentRange: a.range,
			currentRangeUnit: a.unit,
			isRangeAllDay: o,
			activeRange: c,
			renderRange: s,
			slotMinTime: r.slotMinTime,
			slotMaxTime: r.slotMaxTime,
			isValid: l,
			dateIncrement: this.buildDateIncrement(a.duration)
		};
	}
	buildValidRange() {
		let e = this.props.validRangeInput, t = typeof e == "function" ? e.call(this.props.calendarApi, this.props.dateEnv.toDate(this.props.nowManager.getDateMarker())) : e;
		return this.refineRange(t) || {
			start: null,
			end: null
		};
	}
	buildCurrentRangeInfo(e, t) {
		let { props: n } = this, r = null, i = null, a = null, o;
		return n.duration ? (r = n.duration, i = n.durationUnit, a = this.buildRangeFromDuration(e, t, r, i)) : (o = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, o)) : (a = this.buildCustomVisibleRange(e)) ? i = n.dateEnv.greatestWholeUnit(a.start, a.end).unit : (r = this.getFallbackDuration(), i = cn(r).unit, a = this.buildRangeFromDuration(e, t, r, i)), {
			duration: r,
			unit: i,
			range: a
		};
	}
	getFallbackDuration() {
		return A({ day: 1 });
	}
	adjustActiveRange(e) {
		let { dateEnv: t, usesMinMaxTime: n, slotMinTime: r, slotMaxTime: i } = this.props, { start: a, end: o } = e;
		return n && (rn(r) < 0 && (a = I(a), a = t.add(a, r)), rn(i) > 1 && (o = I(o), o = N(o, -1), o = t.add(o, i))), {
			start: a,
			end: o
		};
	}
	buildRangeFromDuration(e, t, n, r) {
		let { dateEnv: i, dateAlignment: a } = this.props, o, s, c;
		if (!a) {
			let { dateIncrement: e } = this.props;
			a = e && j(e) < j(n) ? cn(e).unit : r;
		}
		rn(n) <= 1 && this.isHiddenDay(o) && (o = this.skipHiddenDays(o, t), o = I(o));
		function l() {
			o = i.startOf(e, a), s = i.add(o, n), c = {
				start: o,
				end: s
			};
		}
		return l(), this.trimHiddenDays(c) || (e = this.skipHiddenDays(e, t), l()), c;
	}
	buildRangeFromDayCount(e, t, n) {
		let { dateEnv: r, dateAlignment: i } = this.props, a = 0, o = e, s;
		i && (o = r.startOf(o, i)), o = I(o), o = this.skipHiddenDays(o, t), s = o;
		do
			s = N(s, 1), this.isHiddenDay(s) || (a += 1);
		while (a < n);
		return {
			start: o,
			end: s
		};
	}
	buildCustomVisibleRange(e) {
		let { props: t } = this, n = t.visibleRangeInput, r = typeof n == "function" ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n, i = this.refineRange(r);
		return i && (i.start == null || i.end == null) ? null : i;
	}
	buildRenderRange(e, t, n) {
		return e;
	}
	buildDateIncrement(e) {
		let { dateIncrement: t } = this.props, n;
		return t || ((n = this.props.dateAlignment) ? A(1, n) : e || A({ days: 1 }));
	}
	refineRange(e) {
		if (e) {
			let t = qr(e, this.props.dateEnv);
			return t &&= ni(t), t;
		}
		return null;
	}
	initHiddenDays() {
		let e = this.props.hiddenDays || [], t = [], n = 0, r;
		for (this.props.weekends === !1 && e.push(0, 6), r = 0; r < 7; r += 1) (t[r] = e.indexOf(r) !== -1) || (n += 1);
		if (!n) throw Error("invalid hiddenDays");
		this.isHiddenDayHash = t;
	}
	trimHiddenDays(e) {
		let { start: t, end: n } = e;
		return t &&= this.skipHiddenDays(t), n &&= this.skipHiddenDays(n, -1, !0), t == null || n == null || t < n ? {
			start: t,
			end: n
		} : null;
	}
	isHiddenDay(e) {
		return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
	}
	skipHiddenDays(e, t = 1, n = !1) {
		for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = N(e, t);
		return e;
	}
};
function oi(e, t, n, r) {
	return {
		instanceId: k(),
		defId: e,
		range: t,
		forcedStartTzo: n ?? null,
		forcedEndTzo: r ?? null
	};
}
function si(e, t, n, r) {
	for (let i = 0; i < r.length; i += 1) {
		let a = r[i].parse(e, n);
		if (a) {
			let { allDay: n } = e;
			return n ?? (n = t, n ?? (n = a.allDayGuess, n ??= !1)), {
				allDay: n,
				duration: a.duration,
				typeData: a.typeData,
				typeId: i
			};
		}
	}
	return null;
}
function ci(e, t, n) {
	let { dateEnv: r, pluginHooks: i, options: a } = n, { defs: o, instances: s } = e;
	s = U(s, (e) => !o[e.defId].recurringDef);
	for (let e in o) {
		let n = o[e];
		if (n.recurringDef) {
			let { duration: o } = n.recurringDef;
			o ||= n.allDay ? a.defaultAllDayEventDuration : a.defaultTimedEventDuration;
			let c = li(n, o, t, r, i.recurringTypes);
			for (let t of c) {
				let n = oi(e, {
					start: t,
					end: r.add(t, o)
				});
				s[n.instanceId] = n;
			}
		}
	}
	return {
		defs: o,
		instances: s
	};
}
function li(e, t, n, r, i) {
	let a = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
		start: r.subtract(n.start, t),
		end: n.end
	}, r);
	return e.allDay && (a = a.map(I)), a;
}
var ui = {
	id: String,
	groupId: String,
	title: String,
	url: String,
	interactive: Boolean
}, di = {
	start: H,
	end: H,
	date: H,
	allDay: Boolean
}, fi = Object.assign(Object.assign(Object.assign({}, ui), di), { extendedProps: H });
function pi(e, t, n, r, i = hi(n), a, o) {
	let { refined: s, extra: c } = mi(e, n, i), l = vi(t, n), u = si(s, l, n.dateEnv, n.pluginHooks.recurringTypes);
	if (u) {
		let e = gi(s, c, t ? t.sourceId : "", u.allDay, !!u.duration, n, a);
		return e.recurringDef = {
			typeId: u.typeId,
			typeData: u.typeData,
			duration: u.duration
		}, {
			def: e,
			instance: null
		};
	}
	let d = _i(s, l, n, r);
	if (d) {
		let e = gi(s, c, t ? t.sourceId : "", d.allDay, d.hasEnd, n, a), r = oi(e.defId, d.range, d.forcedStartTzo, d.forcedEndTzo);
		return o && e.publicId && o[e.publicId] && (r.instanceId = o[e.publicId]), {
			def: e,
			instance: r
		};
	}
	return null;
}
function mi(e, t, n = hi(t)) {
	return fr(e, n);
}
function hi(e) {
	return Object.assign(Object.assign(Object.assign({}, Oi), fi), e.pluginHooks.eventRefiners);
}
function gi(e, t, n, r, i, a, o) {
	let s = {
		title: e.title || "",
		groupId: e.groupId || "",
		publicId: e.id || "",
		url: e.url || "",
		recurringDef: null,
		defId: (o && e.id ? o[e.id] : "") || k(),
		sourceId: n,
		allDay: r,
		hasEnd: i,
		interactive: e.interactive,
		ui: Ai(e, a),
		extendedProps: Object.assign(Object.assign({}, e.extendedProps || {}), t)
	};
	for (let t of a.pluginHooks.eventDefMemberAdders) Object.assign(s, t(e));
	return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s;
}
function _i(e, t, n, r) {
	let { allDay: i } = e, a, o = null, s = !1, c, l = null, u = e.start == null ? e.date : e.start;
	if (a = n.dateEnv.createMarkerMeta(u), a) o = a.marker;
	else if (!r) return null;
	return e.end != null && (c = n.dateEnv.createMarkerMeta(e.end)), i ??= t ?? ((!a || a.isTimeUnspecified) && (!c || c.isTimeUnspecified)), i && o && (o = I(o)), c && (l = c.marker, i && (l = I(l)), o && l <= o && (l = null)), l ? s = !0 : r || (s = n.options.forceEventDuration || !1, l = n.dateEnv.add(o, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
		allDay: i,
		hasEnd: s,
		range: {
			start: o,
			end: l
		},
		forcedStartTzo: a ? a.forcedTzo : null,
		forcedEndTzo: c ? c.forcedTzo : null
	};
}
function vi(e, t) {
	let n = null;
	return e && (n = e.defaultAllDay), n ??= t.options.defaultAllDay, n;
}
function yi(e, t, n, r, i, a) {
	let o = Z(), s = hi(n);
	for (let c of e) {
		let e = pi(c, t, n, r, s, i, a);
		e && bi(e, o);
	}
	return o;
}
function bi(e, t = Z()) {
	return t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
}
function xi(e, t) {
	let n = e.instances[t];
	if (n) {
		let t = e.defs[n.defId], r = wi(e, (e) => Si(t, e));
		return r.defs[t.defId] = t, r.instances[n.instanceId] = n, r;
	}
	return Z();
}
function Si(e, t) {
	return !!(e.groupId && e.groupId === t.groupId);
}
function Z() {
	return {
		defs: {},
		instances: {}
	};
}
function Ci(e, t) {
	return {
		defs: Object.assign(Object.assign({}, e.defs), t.defs),
		instances: Object.assign(Object.assign({}, e.instances), t.instances)
	};
}
function wi(e, t) {
	let n = U(e.defs, t);
	return {
		defs: n,
		instances: U(e.instances, (e) => n[e.defId])
	};
}
function Ti(e, t) {
	let { defs: n, instances: r } = e, i = {}, a = {};
	for (let e in n) t.defs[e] || (i[e] = n[e]);
	for (let e in r) !t.instances[e] && i[r[e].defId] && (a[e] = r[e]);
	return {
		defs: i,
		instances: a
	};
}
function Ei(e, t) {
	return Array.isArray(e) ? yi(e, null, t, !0) : typeof e == "object" && e ? yi([e], null, t, !0) : e == null ? null : String(e);
}
function Di(e) {
	return Array.isArray(e) ? e : typeof e == "string" ? e.split(/\s+/) : [];
}
var Oi = {
	display: String,
	editable: Boolean,
	startEditable: Boolean,
	durationEditable: Boolean,
	constraint: H,
	overlap: H,
	allow: H,
	className: Di,
	classNames: Di,
	color: String,
	backgroundColor: String,
	borderColor: String,
	textColor: String
}, ki = {
	display: null,
	startEditable: null,
	durationEditable: null,
	constraints: [],
	overlap: null,
	allows: [],
	backgroundColor: "",
	borderColor: "",
	textColor: "",
	classNames: []
};
function Ai(e, t) {
	let n = Ei(e.constraint, t);
	return {
		display: e.display || null,
		startEditable: e.startEditable == null ? e.editable : e.startEditable,
		durationEditable: e.durationEditable == null ? e.editable : e.durationEditable,
		constraints: n == null ? [] : [n],
		overlap: e.overlap == null ? null : e.overlap,
		allows: e.allow == null ? [] : [e.allow],
		backgroundColor: e.backgroundColor || e.color || "",
		borderColor: e.borderColor || e.color || "",
		textColor: e.textColor || "",
		classNames: (e.className || []).concat(e.classNames || [])
	};
}
function ji(e) {
	return e.reduce(Mi, ki);
}
function Mi(e, t) {
	return {
		display: t.display == null ? e.display : t.display,
		startEditable: t.startEditable == null ? e.startEditable : t.startEditable,
		durationEditable: t.durationEditable == null ? e.durationEditable : t.durationEditable,
		constraints: e.constraints.concat(t.constraints),
		overlap: typeof t.overlap == "boolean" ? t.overlap : e.overlap,
		allows: e.allows.concat(t.allows),
		backgroundColor: t.backgroundColor || e.backgroundColor,
		borderColor: t.borderColor || e.borderColor,
		textColor: t.textColor || e.textColor,
		classNames: e.classNames.concat(t.classNames)
	};
}
var Ni = {
	id: String,
	defaultAllDay: Boolean,
	url: String,
	format: String,
	events: H,
	eventDataTransform: H,
	success: H,
	failure: H
};
function Pi(e, t, n = Fi(t)) {
	let r;
	if (typeof e == "string" ? r = { url: e } : typeof e == "function" || Array.isArray(e) ? r = { events: e } : typeof e == "object" && e && (r = e), r) {
		let { refined: i, extra: a } = fr(r, n), o = Ii(i, t);
		if (o) return {
			_raw: e,
			isFetching: !1,
			latestFetchId: "",
			fetchRange: null,
			defaultAllDay: i.defaultAllDay,
			eventDataTransform: i.eventDataTransform,
			success: i.success,
			failure: i.failure,
			publicId: i.id || "",
			sourceId: k(),
			sourceDefId: o.sourceDefId,
			meta: o.meta,
			ui: Ai(i, t),
			extendedProps: a
		};
	}
	return null;
}
function Fi(e) {
	return Object.assign(Object.assign(Object.assign({}, Oi), Ni), e.pluginHooks.eventSourceRefiners);
}
function Ii(e, t) {
	let n = t.pluginHooks.eventSourceDefs;
	for (let t = n.length - 1; t >= 0; --t) {
		let r = n[t].parseMeta(e);
		if (r) return {
			sourceDefId: t,
			meta: r
		};
	}
	return null;
}
function Li(e, t, n, r, i) {
	switch (t.type) {
		case "RECEIVE_EVENTS": return Ri(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
		case "RESET_RAW_EVENTS": return zi(e, n[t.sourceId], t.rawEvents, r.activeRange, i);
		case "ADD_EVENTS": return Hi(e, t.eventStore, r ? r.activeRange : null, i);
		case "RESET_EVENTS": return t.eventStore;
		case "MERGE_EVENTS": return Ci(e, t.eventStore);
		case "PREV":
		case "NEXT":
		case "CHANGE_DATE":
		case "CHANGE_VIEW_TYPE": return r ? ci(e, r.activeRange, i) : e;
		case "REMOVE_EVENTS": return Ti(e, t.eventStore);
		case "REMOVE_EVENT_SOURCE": return Wi(e, t.sourceId);
		case "REMOVE_ALL_EVENT_SOURCES": return wi(e, (e) => !e.sourceId);
		case "REMOVE_ALL_EVENTS": return Z();
		default: return e;
	}
}
function Ri(e, t, n, r, i, a) {
	if (t && n === t.latestFetchId) {
		let n = yi(Bi(i, t, a), t, a);
		return r && (n = ci(n, r, a)), Ci(Wi(e, t.sourceId), n);
	}
	return e;
}
function zi(e, t, n, r, i) {
	let { defIdMap: a, instanceIdMap: o } = Ki(e);
	return ci(yi(Bi(n, t, i), t, i, !1, a, o), r, i);
}
function Bi(e, t, n) {
	let r = n.options.eventDataTransform, i = t ? t.eventDataTransform : null;
	return i && (e = Vi(e, i)), r && (e = Vi(e, r)), e;
}
function Vi(e, t) {
	let n;
	if (!t) n = e;
	else {
		n = [];
		for (let r of e) {
			let e = t(r);
			e ? n.push(e) : e ?? n.push(r);
		}
	}
	return n;
}
function Hi(e, t, n, r) {
	return n && (t = ci(t, n, r)), Ci(e, t);
}
function Ui(e, t, n) {
	let { defs: r } = e;
	return {
		defs: r,
		instances: W(e.instances, (e) => r[e.defId].allDay ? e : Object.assign(Object.assign({}, e), {
			range: {
				start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
				end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
			},
			forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
			forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
		}))
	};
}
function Wi(e, t) {
	return wi(e, (e) => e.sourceId !== t);
}
function Gi(e, t) {
	return {
		defs: e.defs,
		instances: U(e.instances, (e) => !t[e.instanceId])
	};
}
function Ki(e) {
	let { defs: t, instances: n } = e, r = {}, i = {};
	for (let e in t) {
		let { publicId: n } = t[e];
		n && (r[n] = e);
	}
	for (let e in n) {
		let { publicId: r } = t[n[e].defId];
		r && (i[r] = e);
	}
	return {
		defIdMap: r,
		instanceIdMap: i
	};
}
var qi = class {
	constructor() {
		this.handlers = {}, this.thisContext = null;
	}
	setThisContext(e) {
		this.thisContext = e;
	}
	setOptions(e) {
		this.options = e;
	}
	on(e, t) {
		Ji(this.handlers, e, t);
	}
	off(e, t) {
		Yi(this.handlers, e, t);
	}
	trigger(e, ...t) {
		let n = this.handlers[e] || [], r = this.options && this.options[e], i = [].concat(r || [], n);
		for (let e of i) e.apply(this.thisContext, t);
	}
	hasHandlers(e) {
		return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
	}
};
function Ji(e, t, n) {
	(e[t] || (e[t] = [])).push(n);
}
function Yi(e, t, n) {
	n ? e[t] && (e[t] = e[t].filter((e) => e !== n)) : delete e[t];
}
var Xi = {
	startTime: "09:00",
	endTime: "17:00",
	daysOfWeek: [
		1,
		2,
		3,
		4,
		5
	],
	display: "inverse-background",
	classNames: "fc-non-business",
	groupId: "_businessHours"
};
function Zi(e, t) {
	return yi(Qi(e), null, t);
}
function Qi(e) {
	let t;
	return t = e === !0 ? [{}] : Array.isArray(e) ? e.filter((e) => e.daysOfWeek) : typeof e == "object" && e ? [e] : [], t = t.map((e) => Object.assign(Object.assign({}, Xi), e)), t;
}
function $i(e, t, n) {
	n.emitter.trigger("select", Object.assign(Object.assign({}, ta(e, n)), {
		jsEvent: t ? t.origEvent : null,
		view: n.viewApi || n.calendarApi.view
	}));
}
function ea(e, t) {
	t.emitter.trigger("unselect", {
		jsEvent: e ? e.origEvent : null,
		view: t.viewApi || t.calendarApi.view
	});
}
function ta(e, t) {
	let n = {};
	for (let r of t.pluginHooks.dateSpanTransforms) Object.assign(n, r(e, t));
	return Object.assign(n, Aa(e, t.dateEnv)), n;
}
function na(e, t, n) {
	let { dateEnv: r, options: i } = n, a = t;
	return e ? (a = I(a), a = r.add(a, i.defaultAllDayEventDuration)) : a = r.add(a, i.defaultTimedEventDuration), a;
}
function ra(e, t, n, r) {
	let i = pa(e.defs, t), a = Z();
	for (let t in e.defs) {
		let o = e.defs[t];
		a.defs[t] = ia(o, i[t], n, r);
	}
	for (let t in e.instances) {
		let o = e.instances[t], s = a.defs[o.defId];
		a.instances[t] = aa(o, s, i[o.defId], n, r);
	}
	return a;
}
function ia(e, t, n, r) {
	let i = n.standardProps || {};
	i.hasEnd == null && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
	let a = Object.assign(Object.assign(Object.assign({}, e), i), { ui: Object.assign(Object.assign({}, e.ui), i.ui) });
	n.extendedProps && (a.extendedProps = Object.assign(Object.assign({}, a.extendedProps), n.extendedProps));
	for (let e of r.pluginHooks.eventDefMutationAppliers) e(a, n, r);
	return !a.hasEnd && r.options.forceEventDuration && (a.hasEnd = !0), a;
}
function aa(e, t, n, r, i) {
	let { dateEnv: a } = i, o = r.standardProps && r.standardProps.allDay === !0, s = r.standardProps && r.standardProps.hasEnd === !1, c = Object.assign({}, e);
	return o && (c.range = ti(c.range)), r.datesDelta && n.startEditable && (c.range = {
		start: a.add(c.range.start, r.datesDelta),
		end: a.add(c.range.end, r.datesDelta)
	}), r.startDelta && n.durationEditable && (c.range = {
		start: a.add(c.range.start, r.startDelta),
		end: c.range.end
	}), r.endDelta && n.durationEditable && (c.range = {
		start: c.range.start,
		end: a.add(c.range.end, r.endDelta)
	}), s && (c.range = {
		start: c.range.start,
		end: na(t.allDay, c.range.start, i)
	}), t.allDay && (c.range = {
		start: I(c.range.start),
		end: I(c.range.end)
	}), c.range.end < c.range.start && (c.range.end = na(t.allDay, c.range.start, i)), c;
}
var oa = class {
	constructor(e, t) {
		this.context = e, this.internalEventSource = t;
	}
	remove() {
		this.context.dispatch({
			type: "REMOVE_EVENT_SOURCE",
			sourceId: this.internalEventSource.sourceId
		});
	}
	refetch() {
		this.context.dispatch({
			type: "FETCH_EVENT_SOURCES",
			sourceIds: [this.internalEventSource.sourceId],
			isRefetch: !0
		});
	}
	get id() {
		return this.internalEventSource.publicId;
	}
	get url() {
		return this.internalEventSource.meta.url;
	}
	get format() {
		return this.internalEventSource.meta.format;
	}
}, Q = class e {
	constructor(e, t, n) {
		this._context = e, this._def = t, this._instance = n || null;
	}
	setProp(e, t) {
		if (e in di) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
		else if (e === "id") t = ui[e](t), this.mutate({ standardProps: { publicId: t } });
		else if (e in ui) t = ui[e](t), this.mutate({ standardProps: { [e]: t } });
		else if (e in Oi) {
			let n = Oi[e](t);
			n = e === "color" ? {
				backgroundColor: t,
				borderColor: t
			} : e === "editable" ? {
				startEditable: t,
				durationEditable: t
			} : { [e]: t }, this.mutate({ standardProps: { ui: n } });
		} else console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
	}
	setExtendedProp(e, t) {
		this.mutate({ extendedProps: { [e]: t } });
	}
	setStart(e, t = {}) {
		let { dateEnv: n } = this._context, r = n.createMarker(e);
		if (r && this._instance) {
			let e = this._instance.range, i = ii(e.start, r, n, t.granularity);
			t.maintainDuration ? this.mutate({ datesDelta: i }) : this.mutate({ startDelta: i });
		}
	}
	setEnd(e, t = {}) {
		let { dateEnv: n } = this._context, r;
		if (!(e != null && (r = n.createMarker(e), !r)) && this._instance) if (r) {
			let e = ii(this._instance.range.end, r, n, t.granularity);
			this.mutate({ endDelta: e });
		} else this.mutate({ standardProps: { hasEnd: !1 } });
	}
	setDates(e, t, n = {}) {
		let { dateEnv: r } = this._context, i = { allDay: n.allDay }, a = r.createMarker(e), o;
		if (a && !(t != null && (o = r.createMarker(t), !o)) && this._instance) {
			let e = this._instance.range;
			n.allDay === !0 && (e = ti(e));
			let t = ii(e.start, a, r, n.granularity);
			if (o) {
				let a = ii(e.end, o, r, n.granularity);
				Xt(t, a) ? this.mutate({
					datesDelta: t,
					standardProps: i
				}) : this.mutate({
					startDelta: t,
					endDelta: a,
					standardProps: i
				});
			} else i.hasEnd = !1, this.mutate({
				datesDelta: t,
				standardProps: i
			});
		}
	}
	moveStart(e) {
		let t = A(e);
		t && this.mutate({ startDelta: t });
	}
	moveEnd(e) {
		let t = A(e);
		t && this.mutate({ endDelta: t });
	}
	moveDates(e) {
		let t = A(e);
		t && this.mutate({ datesDelta: t });
	}
	setAllDay(e, t = {}) {
		let n = { allDay: e }, { maintainDuration: r } = t;
		r ??= this._context.options.allDayMaintainDuration, this._def.allDay !== e && (n.hasEnd = r), this.mutate({ standardProps: n });
	}
	formatRange(e) {
		let { dateEnv: t } = this._context, n = this._instance, r = V(e);
		return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
			forcedStartTzo: n.forcedStartTzo,
			forcedEndTzo: n.forcedEndTzo
		}) : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo });
	}
	mutate(t) {
		let n = this._instance;
		if (n) {
			let r = this._def, i = this._context, { eventStore: a } = i.getCurrentData(), o = xi(a, n.instanceId);
			o = ra(o, { "": {
				display: "",
				startEditable: !0,
				durationEditable: !0,
				constraints: [],
				overlap: null,
				allows: [],
				backgroundColor: "",
				borderColor: "",
				textColor: "",
				classNames: []
			} }, t, i);
			let s = new e(i, r, n);
			this._def = o.defs[r.defId], this._instance = o.instances[n.instanceId], i.dispatch({
				type: "MERGE_EVENTS",
				eventStore: o
			}), i.emitter.trigger("eventChange", {
				oldEvent: s,
				event: this,
				relatedEvents: ca(o, i, n),
				revert() {
					i.dispatch({
						type: "RESET_EVENTS",
						eventStore: a
					});
				}
			});
		}
	}
	remove() {
		let e = this._context, t = sa(this);
		e.dispatch({
			type: "REMOVE_EVENTS",
			eventStore: t
		}), e.emitter.trigger("eventRemove", {
			event: this,
			relatedEvents: [],
			revert() {
				e.dispatch({
					type: "MERGE_EVENTS",
					eventStore: t
				});
			}
		});
	}
	get source() {
		let { sourceId: e } = this._def;
		return e ? new oa(this._context, this._context.getCurrentData().eventSources[e]) : null;
	}
	get start() {
		return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
	}
	get end() {
		return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
	}
	get startStr() {
		let e = this._instance;
		return e ? this._context.dateEnv.formatIso(e.range.start, {
			omitTime: this._def.allDay,
			forcedTzo: e.forcedStartTzo
		}) : "";
	}
	get endStr() {
		let e = this._instance;
		return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
			omitTime: this._def.allDay,
			forcedTzo: e.forcedEndTzo
		}) : "";
	}
	get id() {
		return this._def.publicId;
	}
	get groupId() {
		return this._def.groupId;
	}
	get allDay() {
		return this._def.allDay;
	}
	get title() {
		return this._def.title;
	}
	get url() {
		return this._def.url;
	}
	get display() {
		return this._def.ui.display || "auto";
	}
	get startEditable() {
		return this._def.ui.startEditable;
	}
	get durationEditable() {
		return this._def.ui.durationEditable;
	}
	get constraint() {
		return this._def.ui.constraints[0] || null;
	}
	get overlap() {
		return this._def.ui.overlap;
	}
	get allow() {
		return this._def.ui.allows[0] || null;
	}
	get backgroundColor() {
		return this._def.ui.backgroundColor;
	}
	get borderColor() {
		return this._def.ui.borderColor;
	}
	get textColor() {
		return this._def.ui.textColor;
	}
	get classNames() {
		return this._def.ui.classNames;
	}
	get extendedProps() {
		return this._def.extendedProps;
	}
	toPlainObject(e = {}) {
		let t = this._def, { ui: n } = t, { startStr: r, endStr: i } = this, a = { allDay: t.allDay };
		return t.title && (a.title = t.title), r && (a.start = r), i && (a.end = i), t.publicId && (a.id = t.publicId), t.groupId && (a.groupId = t.groupId), t.url && (a.url = t.url), n.display && n.display !== "auto" && (a.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? a.color = n.backgroundColor : (n.backgroundColor && (a.backgroundColor = n.backgroundColor), n.borderColor && (a.borderColor = n.borderColor)), n.textColor && (a.textColor = n.textColor), n.classNames.length && (a.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(a, t.extendedProps) : a.extendedProps = t.extendedProps), a;
	}
	toJSON() {
		return this.toPlainObject();
	}
};
function sa(e) {
	let t = e._def, n = e._instance;
	return {
		defs: { [t.defId]: t },
		instances: n ? { [n.instanceId]: n } : {}
	};
}
function ca(e, t, n) {
	let { defs: r, instances: i } = e, a = [], o = n ? n.instanceId : "";
	for (let e in i) {
		let n = i[e], s = r[n.defId];
		n.instanceId !== o && a.push(new Q(t, s, n));
	}
	return a;
}
function la(e, t, n, r) {
	let i = {}, a = {}, o = {}, s = [], c = [], l = pa(e.defs, t);
	for (let t in e.defs) {
		let n = e.defs[t];
		l[n.defId].display === "inverse-background" && (n.groupId ? (i[n.groupId] = [], o[n.groupId] || (o[n.groupId] = n)) : a[t] = []);
	}
	for (let t in e.instances) {
		let o = e.instances[t], u = e.defs[o.defId], d = l[u.defId], f = o.range, p = !u.allDay && r ? ni(f, r) : f, m = Xr(p, n);
		m && (d.display === "inverse-background" ? u.groupId ? i[u.groupId].push(m) : a[o.defId].push(m) : d.display !== "none" && (d.display === "background" ? s : c).push({
			def: u,
			ui: d,
			instance: o,
			range: m,
			isStart: p.start && p.start.valueOf() === m.start.valueOf(),
			isEnd: p.end && p.end.valueOf() === m.end.valueOf()
		}));
	}
	for (let e in i) {
		let t = i[e], r = Jr(t, n);
		for (let t of r) {
			let n = o[e], r = l[n.defId];
			s.push({
				def: n,
				ui: r,
				instance: null,
				range: t,
				isStart: !1,
				isEnd: !1
			});
		}
	}
	for (let t in a) {
		let r = a[t], i = Jr(r, n);
		for (let n of i) s.push({
			def: e.defs[t],
			ui: l[t],
			instance: null,
			range: n,
			isStart: !1,
			isEnd: !1
		});
	}
	return {
		bg: s,
		fg: c
	};
}
function ua(e) {
	return e.ui.display === "background" || e.ui.display === "inverse-background";
}
function da(e, t) {
	e.fcSeg = t;
}
function fa(e) {
	return e.fcSeg || e.parentNode.fcSeg || null;
}
function pa(e, t) {
	return W(e, (e) => ma(e, t));
}
function ma(e, t) {
	let n = [];
	return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), ji(n);
}
function ha(e, t) {
	let n = e.map(ga);
	return n.sort((e, n) => Rt(e, n, t)), n.map((e) => e._seg);
}
function ga(e) {
	let { eventRange: t } = e, n = t.def, r = t.instance ? t.instance.range : t.range, i = r.start ? r.start.valueOf() : 0, a = r.end ? r.end.valueOf() : 0;
	return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
		id: n.publicId,
		start: i,
		end: a,
		duration: a - i,
		allDay: Number(n.allDay),
		_seg: e
	});
}
function _a(e, t) {
	let { pluginHooks: n } = t, r = n.isDraggableTransformers, { def: i, ui: a } = e.eventRange, o = a.startEditable;
	for (let e of r) o = e(o, i, a, t);
	return o;
}
function va(e, t) {
	return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart;
}
function ya(e, t) {
	return e.isEnd && e.eventRange.ui.durationEditable;
}
function ba(e, t, n, r, i, a, o) {
	let { dateEnv: s, options: c } = n, { displayEventTime: l, displayEventEnd: u } = c, d = e.eventRange.def, f = e.eventRange.instance;
	l ??= r !== !1, u ??= i !== !1;
	let p = f.range.start, m = f.range.end, h = a || e.start || e.eventRange.range.start, g = o || e.end || e.eventRange.range.end, _ = I(p).valueOf() === I(h).valueOf(), v = I(P(m, -1)).valueOf() === I(P(g, -1)).valueOf();
	return l && !d.allDay && (_ || v) ? (h = _ ? p : h, g = v ? m : g, u && d.hasEnd ? s.formatRange(h, g, t, {
		forcedStartTzo: a ? null : f.forcedStartTzo,
		forcedEndTzo: o ? null : f.forcedEndTzo
	}) : s.format(h, t, { forcedTzo: a ? null : f.forcedStartTzo })) : "";
}
function xa(e, t, n) {
	let r = e.eventRange.range;
	return {
		isPast: r.end <= (n || t.start),
		isFuture: r.start >= (n || t.end),
		isToday: t && X(t, r.start)
	};
}
function Sa(e) {
	let t = ["fc-event"];
	return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t;
}
function Ca(e) {
	return e.instance ? e.instance.instanceId : `${e.def.defId}:${e.range.start.toISOString()}`;
}
function wa(e, t) {
	let { def: n, instance: r } = e.eventRange, { url: i } = n;
	if (i) return { href: i };
	let { emitter: a, options: o } = t, { eventInteractive: s } = o;
	return s ?? (s = n.interactive, s ??= !!a.hasHandlers("eventClick")), s ? kt((e) => {
		a.trigger("eventClick", {
			el: e.target,
			event: new Q(t, n, r),
			jsEvent: e,
			view: t.viewApi
		});
	}) : {};
}
var Ta = {
	start: H,
	end: H,
	allDay: Boolean
};
function Ea(e, t, n) {
	let r = Da(e, t), { range: i } = r;
	if (!i.start) return null;
	if (!i.end) {
		if (n == null) return null;
		i.end = t.add(i.start, n);
	}
	return r;
}
function Da(e, t) {
	let { refined: n, extra: r } = fr(e, Ta), i = n.start ? t.createMarkerMeta(n.start) : null, a = n.end ? t.createMarkerMeta(n.end) : null, { allDay: o } = n;
	return o ??= i && i.isTimeUnspecified && (!a || a.isTimeUnspecified), Object.assign({
		range: {
			start: i ? i.marker : null,
			end: a ? a.marker : null
		},
		allDay: o
	}, r);
}
function Oa(e, t) {
	return Zr(e.range, t.range) && e.allDay === t.allDay && ka(e, t);
}
function ka(e, t) {
	for (let n in t) if (n !== "range" && n !== "allDay" && e[n] !== t[n]) return !1;
	for (let n in e) if (!(n in t)) return !1;
	return !0;
}
function Aa(e, t) {
	return Object.assign(Object.assign({}, Ma(e.range, t, e.allDay)), { allDay: e.allDay });
}
function ja(e, t, n) {
	return Object.assign(Object.assign({}, Ma(e, t, n)), { timeZone: t.timeZone });
}
function Ma(e, t, n) {
	return {
		start: t.toDate(e.start),
		end: t.toDate(e.end),
		startStr: t.formatIso(e.start, { omitTime: n }),
		endStr: t.formatIso(e.end, { omitTime: n })
	};
}
function Na(e, t, n) {
	let r = mi({ editable: !1 }, n), i = gi(r.refined, r.extra, "", e.allDay, !0, n);
	return {
		def: i,
		ui: ma(i, t),
		instance: oi(i.defId, e.range),
		range: e.range,
		isStart: !0,
		isEnd: !0
	};
}
function Pa(e, t, n) {
	let r = !1, i = function(e) {
		r || (r = !0, t(e));
	}, a = function(e) {
		r || (r = !0, n(e));
	}, o = e(i, a);
	o && typeof o.then == "function" && o.then(i, a);
}
var Fa = class extends Error {
	constructor(e, t) {
		super(e), this.response = t;
	}
};
function Ia(e, t, n) {
	e = e.toUpperCase();
	let r = { method: e };
	return e === "GET" ? t += (t.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = { "Content-Type": "application/x-www-form-urlencoded" }), fetch(t, r).then((e) => {
		if (e.ok) return e.json().then((t) => [t, e], () => {
			throw new Fa("Failure parsing JSON", e);
		});
		throw new Fa("Request failed", e);
	});
}
var La;
function Ra() {
	return La ??= za(), La;
}
function za() {
	if (typeof document > "u") return !0;
	let e = document.createElement("div");
	e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
	let t = e.querySelector("div").offsetHeight > 0;
	return document.body.removeChild(e), t;
}
var Ba = class extends q {
	constructor() {
		super(...arguments), this.state = { forPrint: !1 }, this.handleBeforePrint = () => {
			Ar(() => {
				this.setState({ forPrint: !0 });
			});
		}, this.handleAfterPrint = () => {
			Ar(() => {
				this.setState({ forPrint: !1 });
			});
		};
	}
	render() {
		let { props: e } = this, { options: t } = e, { forPrint: n } = this.state, r = n || t.height === "auto" || t.contentHeight === "auto", i = !r && t.height != null ? t.height : "", a = [
			"fc",
			n ? "fc-media-print" : "fc-media-screen",
			`fc-direction-${t.direction}`,
			e.theme.getClass("root")
		];
		return Ra() || a.push("fc-liquid-hack"), e.children(a, i, r, n);
	}
	componentDidMount() {
		let { emitter: e } = this.props;
		e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
	}
	componentWillUnmount() {
		let { emitter: e } = this.props;
		e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
	}
}, Va = class {
	constructor(e) {
		this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
	}
	destroy() {}
};
function Ha(e, t) {
	return {
		component: e,
		el: t.el,
		useEventCenter: t.useEventCenter == null || t.useEventCenter,
		isHitComboAllowed: t.isHitComboAllowed || null
	};
}
function Ua(e) {
	return { [e.component.uid]: e };
}
var Wa = {}, Ga = class extends C {
	constructor(e, t) {
		super(e, t), this.handleRefresh = () => {
			let e = this.computeTiming();
			e.state.nowDate.valueOf() !== this.state.nowDate.valueOf() && this.setState(e.state), this.clearTimeout(), this.setTimeout(e.waitMs);
		}, this.handleVisibilityChange = () => {
			document.hidden || this.handleRefresh();
		}, this.state = this.computeTiming().state;
	}
	render() {
		let { props: e, state: t } = this;
		return e.children(t.nowDate, t.todayRange);
	}
	componentDidMount() {
		this.setTimeout(), this.context.nowManager.addResetListener(this.handleRefresh), document.addEventListener("visibilitychange", this.handleVisibilityChange);
	}
	componentDidUpdate(e) {
		e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
	}
	componentWillUnmount() {
		this.clearTimeout(), this.context.nowManager.removeResetListener(this.handleRefresh), document.removeEventListener("visibilitychange", this.handleVisibilityChange);
	}
	computeTiming() {
		let { props: e, context: t } = this, n = t.nowManager.getDateMarker(), { nowIndicatorSnap: r } = t.options;
		r === "auto" && (r = /year|month|week|day/.test(e.unit) || (e.unitValue || 1) === 1);
		let i, a;
		return r ? (i = t.dateEnv.startOf(n, e.unit), a = t.dateEnv.add(i, A(1, e.unit)).valueOf() - n.valueOf()) : (i = n, a = 1e3 * 60), a = Math.min(1e3 * 60 * 60 * 24, a), {
			state: {
				nowDate: i,
				todayRange: Ka(i)
			},
			waitMs: a
		};
	}
	setTimeout(e = this.computeTiming().waitMs) {
		this.timeoutId = setTimeout(() => {
			let e = this.computeTiming();
			this.setState(e.state, () => {
				this.setTimeout(e.waitMs);
			});
		}, e);
	}
	clearTimeout() {
		this.timeoutId && clearTimeout(this.timeoutId);
	}
};
Ga.contextType = K;
function Ka(e) {
	let t = I(e);
	return {
		start: t,
		end: N(t, 1)
	};
}
var qa = class {
	getCurrentData() {
		return this.currentDataManager.getCurrentData();
	}
	dispatch(e) {
		this.currentDataManager.dispatch(e);
	}
	get view() {
		return this.getCurrentData().viewApi;
	}
	batchRendering(e) {
		e();
	}
	updateSize() {
		this.trigger("_resize", !0);
	}
	setOption(e, t) {
		this.dispatch({
			type: "SET_OPTION",
			optionName: e,
			rawOptionValue: t
		});
	}
	getOption(e) {
		return this.currentDataManager.currentCalendarOptionsInput[e];
	}
	getAvailableLocaleCodes() {
		return Object.keys(this.getCurrentData().availableRawLocales);
	}
	on(e, t) {
		let { currentDataManager: n } = this;
		n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn(`Unknown listener name '${e}'`);
	}
	off(e, t) {
		this.currentDataManager.emitter.off(e, t);
	}
	trigger(e, ...t) {
		this.currentDataManager.emitter.trigger(e, ...t);
	}
	changeView(e, t) {
		this.batchRendering(() => {
			if (this.unselect(), t) if (t.start && t.end) this.dispatch({
				type: "CHANGE_VIEW_TYPE",
				viewType: e
			}), this.dispatch({
				type: "SET_OPTION",
				optionName: "visibleRange",
				rawOptionValue: t
			});
			else {
				let { dateEnv: n } = this.getCurrentData();
				this.dispatch({
					type: "CHANGE_VIEW_TYPE",
					viewType: e,
					dateMarker: n.createMarker(t)
				});
			}
			else this.dispatch({
				type: "CHANGE_VIEW_TYPE",
				viewType: e
			});
		});
	}
	zoomTo(e, t) {
		let n = this.getCurrentData(), r;
		t ||= "day", r = n.viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), r ? this.dispatch({
			type: "CHANGE_VIEW_TYPE",
			viewType: r.type,
			dateMarker: e
		}) : this.dispatch({
			type: "CHANGE_DATE",
			dateMarker: e
		});
	}
	getUnitViewSpec(e) {
		let { viewSpecs: t, toolbarConfig: n } = this.getCurrentData(), r = [].concat(n.header ? n.header.viewsWithButtons : [], n.footer ? n.footer.viewsWithButtons : []), i, a;
		for (let e in t) r.push(e);
		for (i = 0; i < r.length; i += 1) if (a = t[r[i]], a && a.singleUnit === e) return a;
		return null;
	}
	prev() {
		this.unselect(), this.dispatch({ type: "PREV" });
	}
	next() {
		this.unselect(), this.dispatch({ type: "NEXT" });
	}
	prevYear() {
		let e = this.getCurrentData();
		this.unselect(), this.dispatch({
			type: "CHANGE_DATE",
			dateMarker: e.dateEnv.addYears(e.currentDate, -1)
		});
	}
	nextYear() {
		let e = this.getCurrentData();
		this.unselect(), this.dispatch({
			type: "CHANGE_DATE",
			dateMarker: e.dateEnv.addYears(e.currentDate, 1)
		});
	}
	today() {
		let e = this.getCurrentData();
		this.unselect(), this.dispatch({
			type: "CHANGE_DATE",
			dateMarker: e.nowManager.getDateMarker()
		});
	}
	gotoDate(e) {
		let t = this.getCurrentData();
		this.unselect(), this.dispatch({
			type: "CHANGE_DATE",
			dateMarker: t.dateEnv.createMarker(e)
		});
	}
	incrementDate(e) {
		let t = this.getCurrentData(), n = A(e);
		n && (this.unselect(), this.dispatch({
			type: "CHANGE_DATE",
			dateMarker: t.dateEnv.add(t.currentDate, n)
		}));
	}
	getDate() {
		let e = this.getCurrentData();
		return e.dateEnv.toDate(e.currentDate);
	}
	formatDate(e, t) {
		let { dateEnv: n } = this.getCurrentData();
		return n.format(n.createMarker(e), V(t));
	}
	formatRange(e, t, n) {
		let { dateEnv: r } = this.getCurrentData();
		return r.formatRange(r.createMarker(e), r.createMarker(t), V(n), n);
	}
	formatIso(e, t) {
		let { dateEnv: n } = this.getCurrentData();
		return n.formatIso(n.createMarker(e), { omitTime: t });
	}
	select(e, t) {
		let n;
		n = t == null ? e.start == null ? {
			start: e,
			end: null
		} : e : {
			start: e,
			end: t
		};
		let r = this.getCurrentData(), i = Ea(n, r.dateEnv, A({ days: 1 }));
		i && (this.dispatch({
			type: "SELECT_DATES",
			selection: i
		}), $i(i, null, r));
	}
	unselect(e) {
		let t = this.getCurrentData();
		t.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), ea(e, t));
	}
	addEvent(e, t) {
		if (e instanceof Q) {
			let t = e._def, n = e._instance;
			return this.getCurrentData().eventStore.defs[t.defId] || (this.dispatch({
				type: "ADD_EVENTS",
				eventStore: bi({
					def: t,
					instance: n
				})
			}), this.triggerEventAdd(e)), e;
		}
		let n = this.getCurrentData(), r;
		if (t instanceof oa) r = t.internalEventSource;
		else if (typeof t == "boolean") t && ([r] = gr(n.eventSources));
		else if (t != null) {
			let e = this.getEventSourceById(t);
			if (!e) return console.warn(`Could not find an event source with ID "${t}"`), null;
			r = e.internalEventSource;
		}
		let i = pi(e, r, n, !1);
		if (i) {
			let e = new Q(n, i.def, i.def.recurringDef ? null : i.instance);
			return this.dispatch({
				type: "ADD_EVENTS",
				eventStore: bi(i)
			}), this.triggerEventAdd(e), e;
		}
		return null;
	}
	triggerEventAdd(e) {
		let { emitter: t } = this.getCurrentData();
		t.trigger("eventAdd", {
			event: e,
			relatedEvents: [],
			revert: () => {
				this.dispatch({
					type: "REMOVE_EVENTS",
					eventStore: sa(e)
				});
			}
		});
	}
	getEventById(e) {
		let t = this.getCurrentData(), { defs: n, instances: r } = t.eventStore;
		e = String(e);
		for (let i in n) {
			let a = n[i];
			if (a.publicId === e) {
				if (a.recurringDef) return new Q(t, a, null);
				for (let e in r) {
					let n = r[e];
					if (n.defId === a.defId) return new Q(t, a, n);
				}
			}
		}
		return null;
	}
	getEvents() {
		let e = this.getCurrentData();
		return ca(e.eventStore, e);
	}
	removeAllEvents() {
		this.dispatch({ type: "REMOVE_ALL_EVENTS" });
	}
	getEventSources() {
		let e = this.getCurrentData(), t = e.eventSources, n = [];
		for (let r in t) n.push(new oa(e, t[r]));
		return n;
	}
	getEventSourceById(e) {
		let t = this.getCurrentData(), n = t.eventSources;
		e = String(e);
		for (let r in n) if (n[r].publicId === e) return new oa(t, n[r]);
		return null;
	}
	addEventSource(e) {
		let t = this.getCurrentData();
		if (e instanceof oa) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
			type: "ADD_EVENT_SOURCES",
			sources: [e.internalEventSource]
		}), e;
		let n = Pi(e, t);
		return n ? (this.dispatch({
			type: "ADD_EVENT_SOURCES",
			sources: [n]
		}), new oa(t, n)) : null;
	}
	removeAllEventSources() {
		this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
	}
	refetchEvents() {
		this.dispatch({
			type: "FETCH_EVENT_SOURCES",
			isRefetch: !0
		});
	}
	scrollToTime(e) {
		let t = A(e);
		t && this.trigger("_scrollRequest", { time: t });
	}
};
function Ja(e, t) {
	return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom;
}
function Ya(e, t) {
	let n = {
		left: Math.max(e.left, t.left),
		right: Math.min(e.right, t.right),
		top: Math.max(e.top, t.top),
		bottom: Math.min(e.bottom, t.bottom)
	};
	return n.left < n.right && n.top < n.bottom && n;
}
function Xa(e, t, n) {
	return {
		left: e.left + t,
		right: e.right + t,
		top: e.top + n,
		bottom: e.bottom + n
	};
}
function Za(e, t) {
	return {
		left: Math.min(Math.max(e.left, t.left), t.right),
		top: Math.min(Math.max(e.top, t.top), t.bottom)
	};
}
function Qa(e) {
	return {
		left: (e.left + e.right) / 2,
		top: (e.top + e.bottom) / 2
	};
}
function $a(e, t) {
	return {
		left: e.left - t.left,
		top: e.top - t.top
	};
}
var eo = Z(), to = class {
	constructor() {
		this.getKeysForEventDefs = B(this._getKeysForEventDefs), this.splitDateSelection = B(this._splitDateSpan), this.splitEventStore = B(this._splitEventStore), this.splitIndividualUi = B(this._splitIndividualUi), this.splitEventDrag = B(this._splitInteraction), this.splitEventResize = B(this._splitInteraction), this.eventUiBuilders = {};
	}
	splitProps(e) {
		let t = this.getKeyInfo(e), n = this.getKeysForEventDefs(e.eventStore), r = this.splitDateSelection(e.dateSelection), i = this.splitIndividualUi(e.eventUiBases, n), a = this.splitEventStore(e.eventStore, n), o = this.splitEventDrag(e.eventDrag), s = this.splitEventResize(e.eventResize), c = {};
		this.eventUiBuilders = W(t, (e, t) => this.eventUiBuilders[t] || B(no));
		for (let n in t) {
			let l = t[n], u = a[n] || eo, d = this.eventUiBuilders[n];
			c[n] = {
				businessHours: l.businessHours || e.businessHours,
				dateSelection: r[n] || null,
				eventStore: u,
				eventUiBases: d(e.eventUiBases[""], l.ui, i[n]),
				eventSelection: u.instances[e.eventSelection] ? e.eventSelection : "",
				eventDrag: o[n] || null,
				eventResize: s[n] || null
			};
		}
		return c;
	}
	_splitDateSpan(e) {
		let t = {};
		if (e) {
			let n = this.getKeysForDateSpan(e);
			for (let r of n) t[r] = e;
		}
		return t;
	}
	_getKeysForEventDefs(e) {
		return W(e.defs, (e) => this.getKeysForEventDef(e));
	}
	_splitEventStore(e, t) {
		let { defs: n, instances: r } = e, i = {};
		for (let e in n) for (let r of t[e]) i[r] || (i[r] = Z()), i[r].defs[e] = n[e];
		for (let e in r) {
			let n = r[e];
			for (let r of t[n.defId]) i[r] && (i[r].instances[e] = n);
		}
		return i;
	}
	_splitIndividualUi(e, t) {
		let n = {};
		for (let r in e) if (r) for (let i of t[r]) n[i] || (n[i] = {}), n[i][r] = e[r];
		return n;
	}
	_splitInteraction(e) {
		let t = {};
		if (e) {
			let n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)), r = this._getKeysForEventDefs(e.mutatedEvents), i = this._splitEventStore(e.mutatedEvents, r), a = (r) => {
				t[r] || (t[r] = {
					affectedEvents: n[r] || eo,
					mutatedEvents: i[r] || eo,
					isEvent: e.isEvent
				});
			};
			for (let e in n) a(e);
			for (let e in i) a(e);
		}
		return t;
	}
};
function no(e, t, n) {
	let r = [];
	e && r.push(e), t && r.push(t);
	let i = { "": ji(r) };
	return n && Object.assign(i, n), i;
}
function ro(e, t, n, r) {
	return {
		dow: e.getUTCDay(),
		isDisabled: !!(r && (!r.activeRange || !X(r.activeRange, e))),
		isOther: !!(r && !X(r.currentRange, e)),
		isToday: !!(t && X(t, e)),
		isPast: !!(n ? e < n : t && e < t.start),
		isFuture: !!(n ? e > n : t && e >= t.end)
	};
}
function io(e, t) {
	let n = ["fc-day", `fc-day-${un[e.dow]}`];
	return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n;
}
function ao(e, t) {
	let n = ["fc-slot", `fc-slot-${un[e.dow]}`];
	return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n;
}
var oo = V({
	year: "numeric",
	month: "long",
	day: "numeric"
}), so = V({ week: "long" });
function co(e, t, n = "day", r = !0) {
	let { dateEnv: i, options: a, calendarApi: o } = e, s = i.format(t, n === "week" ? so : oo);
	if (a.navLinks) {
		let e = i.toDate(t), c = (e) => {
			let r = n === "day" ? a.navLinkDayClick : n === "week" ? a.navLinkWeekClick : null;
			typeof r == "function" ? r.call(o, i.toDate(t), e) : (typeof r == "string" && (n = r), o.zoomTo(t, n));
		};
		return Object.assign({
			title: Ht(a.navLinkHint, [s, e], s),
			"data-navlink": ""
		}, r ? Ot(c) : { onClick: c });
	}
	return { "aria-label": s };
}
var lo = null;
function uo() {
	return lo === null && (lo = fo()), lo;
}
function fo() {
	let e = document.createElement("div");
	_t(e, {
		position: "absolute",
		top: -1e3,
		left: 0,
		border: 0,
		padding: 0,
		overflow: "scroll",
		direction: "rtl"
	}), e.innerHTML = "<div></div>", document.body.appendChild(e);
	let t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
	return ft(e), t;
}
var po;
function mo() {
	return po ||= ho(), po;
}
function ho() {
	let e = document.createElement("div");
	e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
	let t = go(e);
	return document.body.removeChild(e), t;
}
function go(e) {
	return {
		x: e.offsetHeight - e.clientHeight,
		y: e.offsetWidth - e.clientWidth
	};
}
function _o(e, t = !1) {
	let n = window.getComputedStyle(e), r = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, a = parseInt(n.borderTopWidth, 10) || 0, o = parseInt(n.borderBottomWidth, 10) || 0, s = go(e), c = s.y - r - i, l = {
		borderLeft: r,
		borderRight: i,
		borderTop: a,
		borderBottom: o,
		scrollbarBottom: s.x - a - o,
		scrollbarLeft: 0,
		scrollbarRight: 0
	};
	return uo() && n.direction === "rtl" ? l.scrollbarLeft = c : l.scrollbarRight = c, t && (l.paddingLeft = parseInt(n.paddingLeft, 10) || 0, l.paddingRight = parseInt(n.paddingRight, 10) || 0, l.paddingTop = parseInt(n.paddingTop, 10) || 0, l.paddingBottom = parseInt(n.paddingBottom, 10) || 0), l;
}
function vo(e, t = !1, n) {
	let r = n ? e.getBoundingClientRect() : yo(e), i = _o(e, t), a = {
		left: r.left + i.borderLeft + i.scrollbarLeft,
		right: r.right - i.borderRight - i.scrollbarRight,
		top: r.top + i.borderTop,
		bottom: r.bottom - i.borderBottom - i.scrollbarBottom
	};
	return t && (a.left += i.paddingLeft, a.right -= i.paddingRight, a.top += i.paddingTop, a.bottom -= i.paddingBottom), a;
}
function yo(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left + window.scrollX,
		top: t.top + window.scrollY,
		right: t.right + window.scrollX,
		bottom: t.bottom + window.scrollY
	};
}
function bo(e) {
	let t = xo(e), n = e.getBoundingClientRect();
	for (let e of t) {
		let t = Ya(n, e.getBoundingClientRect());
		if (t) n = t;
		else return null;
	}
	return n;
}
function xo(e) {
	let t = [];
	for (; e instanceof HTMLElement;) {
		let n = window.getComputedStyle(e);
		if (n.position === "fixed") break;
		/(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode;
	}
	return t;
}
var So = class {
	constructor(e, t, n, r) {
		this.els = t;
		let i = this.originClientRect = e.getBoundingClientRect();
		n && this.buildElHorizontals(i.left), r && this.buildElVerticals(i.top);
	}
	buildElHorizontals(e) {
		let t = [], n = [];
		for (let r of this.els) {
			let i = r.getBoundingClientRect();
			t.push(i.left - e), n.push(i.right - e);
		}
		this.lefts = t, this.rights = n;
	}
	buildElVerticals(e) {
		let t = [], n = [];
		for (let r of this.els) {
			let i = r.getBoundingClientRect();
			t.push(i.top - e), n.push(i.bottom - e);
		}
		this.tops = t, this.bottoms = n;
	}
	leftToIndex(e) {
		let { lefts: t, rights: n } = this, r = t.length, i;
		for (i = 0; i < r; i += 1) if (e >= t[i] && e < n[i]) return i;
	}
	topToIndex(e) {
		let { tops: t, bottoms: n } = this, r = t.length, i;
		for (i = 0; i < r; i += 1) if (e >= t[i] && e < n[i]) return i;
	}
	getWidth(e) {
		return this.rights[e] - this.lefts[e];
	}
	getHeight(e) {
		return this.bottoms[e] - this.tops[e];
	}
	similarTo(e) {
		return Co(this.tops || [], e.tops || []) && Co(this.bottoms || [], e.bottoms || []) && Co(this.lefts || [], e.lefts || []) && Co(this.rights || [], e.rights || []);
	}
};
function Co(e, t) {
	let n = e.length;
	if (n !== t.length) return !1;
	for (let r = 0; r < n; r++) if (Math.round(e[r]) !== Math.round(t[r])) return !1;
	return !0;
}
var wo = class {
	getMaxScrollTop() {
		return this.getScrollHeight() - this.getClientHeight();
	}
	getMaxScrollLeft() {
		return this.getScrollWidth() - this.getClientWidth();
	}
	canScrollVertically() {
		return this.getMaxScrollTop() > 0;
	}
	canScrollHorizontally() {
		return this.getMaxScrollLeft() > 0;
	}
	canScrollUp() {
		return this.getScrollTop() > 0;
	}
	canScrollDown() {
		return this.getScrollTop() < this.getMaxScrollTop();
	}
	canScrollLeft() {
		return this.getScrollLeft() > 0;
	}
	canScrollRight() {
		return this.getScrollLeft() < this.getMaxScrollLeft();
	}
}, To = class extends wo {
	constructor(e) {
		super(), this.el = e;
	}
	getScrollTop() {
		return this.el.scrollTop;
	}
	getScrollLeft() {
		return this.el.scrollLeft;
	}
	setScrollTop(e) {
		this.el.scrollTop = e;
	}
	setScrollLeft(e) {
		this.el.scrollLeft = e;
	}
	getScrollWidth() {
		return this.el.scrollWidth;
	}
	getScrollHeight() {
		return this.el.scrollHeight;
	}
	getClientHeight() {
		return this.el.clientHeight;
	}
	getClientWidth() {
		return this.el.clientWidth;
	}
}, Eo = class extends wo {
	getScrollTop() {
		return window.scrollY;
	}
	getScrollLeft() {
		return window.scrollX;
	}
	setScrollTop(e) {
		window.scroll(window.scrollX, e);
	}
	setScrollLeft(e) {
		window.scroll(e, window.scrollY);
	}
	getScrollWidth() {
		return document.documentElement.scrollWidth;
	}
	getScrollHeight() {
		return document.documentElement.scrollHeight;
	}
	getClientHeight() {
		return document.documentElement.clientHeight;
	}
	getClientWidth() {
		return document.documentElement.clientWidth;
	}
}, Do = class extends q {
	constructor() {
		super(...arguments), this.uid = k();
	}
	prepareHits() {}
	queryHit(e, t, n, r) {
		return null;
	}
	isValidSegDownEl(e) {
		return !this.props.eventDrag && !this.props.eventResize && !O(e, ".fc-event-mirror");
	}
	isValidDateDownEl(e) {
		return !O(e, ".fc-event:not(.fc-bg-event)") && !O(e, ".fc-more-link") && !O(e, "a[data-navlink]") && !O(e, ".fc-popover");
	}
}, Oo = class {
	constructor(e) {
		this.timeZoneName = e;
	}
}, ko = class {
	constructor(e = (e) => e.thickness || 1) {
		this.getEntryThickness = e, this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
	}
	addSegs(e) {
		let t = [];
		for (let n of e) this.insertEntry(n, t);
		return t;
	}
	insertEntry(e, t) {
		let n = this.findInsertion(e);
		this.isInsertionValid(n, e) ? this.insertEntryAt(e, n) : this.handleInvalidInsertion(n, e, t);
	}
	isInsertionValid(e, t) {
		return (this.maxCoord === -1 || e.levelCoord + this.getEntryThickness(t) <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
	}
	handleInvalidInsertion(e, t, n) {
		if (this.allowReslicing && e.touchingEntry) {
			let r = Object.assign(Object.assign({}, t), { span: Po(t.span, e.touchingEntry.span) });
			n.push(r), this.splitEntry(t, e.touchingEntry, n);
		} else n.push(t);
	}
	splitEntry(e, t, n) {
		let r = e.span, i = t.span;
		r.start < i.start && this.insertEntry({
			index: e.index,
			thickness: e.thickness,
			span: {
				start: r.start,
				end: i.start
			}
		}, n), r.end > i.end && this.insertEntry({
			index: e.index,
			thickness: e.thickness,
			span: {
				start: i.end,
				end: r.end
			}
		}, n);
	}
	insertEntryAt(e, t) {
		let { entriesByLevel: n, levelCoords: r } = this;
		t.lateral === -1 ? (Fo(r, t.level, t.levelCoord), Fo(n, t.level, [e])) : Fo(n[t.level], t.lateral, e), this.stackCnts[jo(e)] = t.stackCnt;
	}
	findInsertion(e) {
		let { levelCoords: t, entriesByLevel: n, strictOrder: r, stackCnts: i } = this, a = t.length, o = 0, s = -1, c = -1, l = null, u = 0;
		for (let d = 0; d < a; d += 1) {
			let a = t[d];
			if (!r && a >= o + this.getEntryThickness(e)) break;
			let f = n[d], p, m = Io(f, e.span.start, Ao), h = m[0] + m[1];
			for (; (p = f[h]) && p.span.start < e.span.end;) {
				let e = a + this.getEntryThickness(p);
				e > o && (o = e, l = p, s = d, c = h), e === o && (u = Math.max(u, i[jo(p)] + 1)), h += 1;
			}
		}
		let d = 0;
		if (l) for (d = s + 1; d < a && t[d] < o;) d += 1;
		let f = -1;
		return d < a && t[d] === o && (f = Io(n[d], e.span.end, Ao)[0]), {
			touchingLevel: s,
			touchingLateral: c,
			touchingEntry: l,
			stackCnt: u,
			levelCoord: o,
			level: d,
			lateral: f
		};
	}
	toRects() {
		let { entriesByLevel: e, levelCoords: t } = this, n = e.length, r = [];
		for (let i = 0; i < n; i += 1) {
			let n = e[i], a = t[i];
			for (let e of n) r.push(Object.assign(Object.assign({}, e), {
				thickness: this.getEntryThickness(e),
				levelCoord: a
			}));
		}
		return r;
	}
};
function Ao(e) {
	return e.span.end;
}
function jo(e) {
	return e.index + ":" + e.span.start;
}
function Mo(e) {
	let t = [];
	for (let n of e) {
		let e = [], r = {
			span: n.span,
			entries: [n]
		};
		for (let n of t) Po(n.span, r.span) ? r = {
			entries: n.entries.concat(r.entries),
			span: No(n.span, r.span)
		} : e.push(n);
		e.push(r), t = e;
	}
	return t;
}
function No(e, t) {
	return {
		start: Math.min(e.start, t.start),
		end: Math.max(e.end, t.end)
	};
}
function Po(e, t) {
	let n = Math.max(e.start, t.start), r = Math.min(e.end, t.end);
	return n < r ? {
		start: n,
		end: r
	} : null;
}
function Fo(e, t, n) {
	e.splice(t, 0, n);
}
function Io(e, t, n) {
	let r = 0, i = e.length;
	if (!i || t < n(e[r])) return [0, 0];
	if (t > n(e[i - 1])) return [i, 0];
	for (; r < i;) {
		let a = Math.floor(r + (i - r) / 2), o = n(e[a]);
		if (t < o) i = a;
		else if (t > o) r = a + 1;
		else return [a, 1];
	}
	return [r, 0];
}
var Lo = class {
	constructor(e, t) {
		this.emitter = new qi();
	}
	destroy() {}
	setMirrorIsVisible(e) {}
	setMirrorNeedsRevert(e) {}
	setAutoScrollEnabled(e) {}
}, Ro = {};
function zo(e, t) {
	return V(!e || t > 10 ? { weekday: "short" } : t > 1 ? {
		weekday: "short",
		month: "numeric",
		day: "numeric",
		omitCommas: !0
	} : { weekday: "long" });
}
var Bo = "fc-col-header-cell";
function Vo(e) {
	return e.text;
}
var Ho = class extends q {
	render() {
		let { dateEnv: e, options: t, theme: n, viewApi: r } = this.context, { props: i } = this, { date: a, dateProfile: o } = i, s = ro(a, i.todayRange, null, o), c = [Bo].concat(io(s, n)), l = e.format(a, i.dayHeaderFormat), u = !s.isDisabled && i.colCnt > 1 ? co(this.context, a) : {}, d = e.toDate(a);
		e.namedTimeZoneImpl && (d = P(d, 36e5));
		let f = Object.assign(Object.assign(Object.assign({
			date: d,
			view: r
		}, i.extraRenderProps), { text: l }), s);
		return m(Y, {
			elTag: "th",
			elClasses: c,
			elAttrs: Object.assign({
				role: "columnheader",
				colSpan: i.colSpan,
				"data-date": s.isDisabled ? void 0 : kn(a)
			}, i.extraDataAttrs),
			renderProps: f,
			generatorName: "dayHeaderContent",
			customGenerator: t.dayHeaderContent,
			defaultGenerator: Vo,
			classNameGenerator: t.dayHeaderClassNames,
			didMount: t.dayHeaderDidMount,
			willUnmount: t.dayHeaderWillUnmount
		}, (e) => m("div", { className: "fc-scrollgrid-sync-inner" }, !s.isDisabled && m(e, {
			elTag: "a",
			elAttrs: u,
			elClasses: ["fc-col-header-cell-cushion", i.isSticky && "fc-sticky"]
		})));
	}
}, Uo = V({ weekday: "long" }), Wo = class extends q {
	render() {
		let { props: e } = this, { dateEnv: t, theme: n, viewApi: r, options: i } = this.context, a = N(/* @__PURE__ */ new Date(2592e5), e.dow), o = {
			dow: e.dow,
			isDisabled: !1,
			isFuture: !1,
			isPast: !1,
			isToday: !1,
			isOther: !1
		}, s = t.format(a, e.dayHeaderFormat), c = Object.assign(Object.assign(Object.assign(Object.assign({ date: a }, o), { view: r }), e.extraRenderProps), { text: s });
		return m(Y, {
			elTag: "th",
			elClasses: [
				Bo,
				...io(o, n),
				...e.extraClassNames || []
			],
			elAttrs: Object.assign({
				role: "columnheader",
				colSpan: e.colSpan
			}, e.extraDataAttrs),
			renderProps: c,
			generatorName: "dayHeaderContent",
			customGenerator: i.dayHeaderContent,
			defaultGenerator: Vo,
			classNameGenerator: i.dayHeaderClassNames,
			didMount: i.dayHeaderDidMount,
			willUnmount: i.dayHeaderWillUnmount
		}, (n) => m("div", { className: "fc-scrollgrid-sync-inner" }, m(n, {
			elTag: "a",
			elClasses: ["fc-col-header-cell-cushion", e.isSticky && "fc-sticky"],
			elAttrs: { "aria-label": t.format(a, Uo) }
		})));
	}
}, Go = class extends q {
	constructor() {
		super(...arguments), this.createDayHeaderFormatter = B(Ko);
	}
	render() {
		let { context: e } = this, { dates: t, dateProfile: n, datesRepDistinctDays: r, renderIntro: i } = this.props, a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, r, t.length);
		return m(Ga, { unit: "day" }, (e, o) => m("tr", { role: "row" }, i && i("day"), t.map((e) => r ? m(Ho, {
			key: e.toISOString(),
			date: e,
			dateProfile: n,
			todayRange: o,
			colCnt: t.length,
			dayHeaderFormat: a
		}) : m(Wo, {
			key: e.getUTCDay(),
			dow: e.getUTCDay(),
			dayHeaderFormat: a
		}))));
	}
};
function Ko(e, t, n) {
	return e || zo(t, n);
}
var qo = class {
	constructor(e, t) {
		let n = e.start, { end: r } = e, i = [], a = [], o = -1;
		for (; n < r;) t.isHiddenDay(n) ? i.push(o + .5) : (o += 1, i.push(o), a.push(n)), n = N(n, 1);
		this.dates = a, this.indices = i, this.cnt = a.length;
	}
	sliceRange(e) {
		let t = this.getDateDayIndex(e.start), n = this.getDateDayIndex(N(e.end, -1)), r = Math.max(0, t), i = Math.min(this.cnt - 1, n);
		return r = Math.ceil(r), i = Math.floor(i), r <= i ? {
			firstIndex: r,
			lastIndex: i,
			isStart: t === r,
			isEnd: n === i
		} : null;
	}
	getDateDayIndex(e) {
		let { indices: t } = this, n = Math.floor(F(this.dates[0], e));
		return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n];
	}
}, Jo = class {
	constructor(e, t) {
		let { dates: n } = e, r, i, a;
		if (t) {
			for (i = n[0].getUTCDay(), r = 1; r < n.length && n[r].getUTCDay() !== i; r += 1);
			a = Math.ceil(n.length / r);
		} else a = 1, r = n.length;
		this.rowCnt = a, this.colCnt = r, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
	}
	buildCells() {
		let e = [];
		for (let t = 0; t < this.rowCnt; t += 1) {
			let n = [];
			for (let e = 0; e < this.colCnt; e += 1) n.push(this.buildCell(t, e));
			e.push(n);
		}
		return e;
	}
	buildCell(e, t) {
		let n = this.daySeries.dates[e * this.colCnt + t];
		return {
			key: n.toISOString(),
			date: n
		};
	}
	buildHeaderDates() {
		let e = [];
		for (let t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
		return e;
	}
	sliceRange(e) {
		let { colCnt: t } = this, n = this.daySeries.sliceRange(e), r = [];
		if (n) {
			let { firstIndex: e, lastIndex: i } = n, a = e;
			for (; a <= i;) {
				let o = Math.floor(a / t), s = Math.min((o + 1) * t, i + 1);
				r.push({
					row: o,
					firstCol: a % t,
					lastCol: (s - 1) % t,
					isStart: n.isStart && a === e,
					isEnd: n.isEnd && s - 1 === i
				}), a = s;
			}
		}
		return r;
	}
}, Yo = class {
	constructor() {
		this.sliceBusinessHours = B(this._sliceBusinessHours), this.sliceDateSelection = B(this._sliceDateSpan), this.sliceEventStore = B(this._sliceEventStore), this.sliceEventDrag = B(this._sliceInteraction), this.sliceEventResize = B(this._sliceInteraction), this.forceDayIfListItem = !1;
	}
	sliceProps(e, t, n, r, ...i) {
		let { eventUiBases: a } = e, o = this.sliceEventStore(e.eventStore, a, t, n, ...i);
		return {
			dateSelectionSegs: this.sliceDateSelection(e.dateSelection, t, n, a, r, ...i),
			businessHourSegs: this.sliceBusinessHours(e.businessHours, t, n, r, ...i),
			fgEventSegs: o.fg,
			bgEventSegs: o.bg,
			eventDrag: this.sliceEventDrag(e.eventDrag, a, t, n, ...i),
			eventResize: this.sliceEventResize(e.eventResize, a, t, n, ...i),
			eventSelection: e.eventSelection
		};
	}
	sliceNowDate(e, t, n, r, ...i) {
		return this._sliceDateSpan({
			range: {
				start: e,
				end: P(e, 1)
			},
			allDay: !1
		}, t, n, {}, r, ...i);
	}
	_sliceBusinessHours(e, t, n, r, ...i) {
		return e ? this._sliceEventStore(ci(e, Xo(t, !!n), r), {}, t, n, ...i).bg : [];
	}
	_sliceEventStore(e, t, n, r, ...i) {
		if (e) {
			let a = la(e, t, Xo(n, !!r), r);
			return {
				bg: this.sliceEventRanges(a.bg, i),
				fg: this.sliceEventRanges(a.fg, i)
			};
		}
		return {
			bg: [],
			fg: []
		};
	}
	_sliceInteraction(e, t, n, r, ...i) {
		if (!e) return null;
		let a = la(e.mutatedEvents, t, Xo(n, !!r), r);
		return {
			segs: this.sliceEventRanges(a.fg, i),
			affectedInstances: e.affectedEvents.instances,
			isEvent: e.isEvent
		};
	}
	_sliceDateSpan(e, t, n, r, i, ...a) {
		if (!e) return [];
		let o = Xo(t, !!n), s = Xr(e.range, o);
		if (s) {
			e = Object.assign(Object.assign({}, e), { range: s });
			let t = Na(e, r, i), n = this.sliceRange(e.range, ...a);
			for (let e of n) e.eventRange = t;
			return n;
		}
		return [];
	}
	sliceEventRanges(e, t) {
		let n = [];
		for (let r of e) n.push(...this.sliceEventRange(r, t));
		return n;
	}
	sliceEventRange(e, t) {
		let n = e.range;
		this.forceDayIfListItem && e.ui.display === "list-item" && (n = {
			start: n.start,
			end: N(n.start, 1)
		});
		let r = this.sliceRange(n, ...t);
		for (let t of r) t.eventRange = e, t.isStart = e.isStart && t.isStart, t.isEnd = e.isEnd && t.isEnd;
		return r;
	}
};
function Xo(e, t) {
	let n = e.activeRange;
	return t ? n : {
		start: P(n.start, e.slotMinTime.milliseconds),
		end: P(n.end, e.slotMaxTime.milliseconds - 864e5)
	};
}
function Zo(e, t, n) {
	let { instances: r } = e.mutatedEvents;
	for (let e in r) if (!$r(t.validRange, r[e].range)) return !1;
	return $o({ eventDrag: e }, n);
}
function Qo(e, t, n) {
	return $r(t.validRange, e.range) ? $o({ dateSelection: e }, n) : !1;
}
function $o(e, t) {
	let n = t.getCurrentData(), r = Object.assign({
		businessHours: n.businessHours,
		dateSelection: "",
		eventStore: n.eventStore,
		eventUiBases: n.eventUiBases,
		eventSelection: "",
		eventDrag: null,
		eventResize: null
	}, e);
	return (t.pluginHooks.isPropsValid || es)(r, t);
}
function es(e, t, n = {}, r) {
	return !(e.eventDrag && !ts(e, t, n, r) || e.dateSelection && !ns(e, t, n, r));
}
function ts(e, t, n, r) {
	let i = t.getCurrentData(), a = e.eventDrag, o = a.mutatedEvents, s = o.defs, c = o.instances, l = pa(s, a.isEvent ? e.eventUiBases : { "": i.selectionConfig });
	r && (l = W(l, r));
	let u = Gi(e.eventStore, a.affectedEvents.instances), d = u.defs, f = u.instances, p = pa(d, e.eventUiBases);
	for (let r in c) {
		let o = c[r], m = o.range, h = l[o.defId], g = s[o.defId];
		if (!rs(h.constraints, m, u, e.businessHours, t)) return !1;
		let { eventOverlap: _ } = t.options, v = typeof _ == "function" ? _ : null;
		for (let e in f) {
			let n = f[e];
			if (Qr(m, n.range) && (p[n.defId].overlap === !1 && a.isEvent || h.overlap === !1 || v && !v(new Q(t, d[n.defId], n), new Q(t, g, o)))) return !1;
		}
		let y = i.eventStore;
		for (let e of h.allows) {
			let i = Object.assign(Object.assign({}, n), {
				range: o.range,
				allDay: g.allDay
			}), a = y.defs[g.defId], s = y.instances[r], c;
			if (c = a ? new Q(t, a, s) : new Q(t, g), !e(ta(i, t), c)) return !1;
		}
	}
	return !0;
}
function ns(e, t, n, r) {
	let i = e.eventStore, a = i.defs, o = i.instances, s = e.dateSelection, c = s.range, { selectionConfig: l } = t.getCurrentData();
	if (r && (l = r(l)), !rs(l.constraints, c, i, e.businessHours, t)) return !1;
	let { selectOverlap: u } = t.options, d = typeof u == "function" ? u : null;
	for (let e in o) {
		let n = o[e];
		if (Qr(c, n.range) && (l.overlap === !1 || d && !d(new Q(t, a[n.defId], n), null))) return !1;
	}
	for (let e of l.allows) if (!e(ta(Object.assign(Object.assign({}, n), s), t), null)) return !1;
	return !0;
}
function rs(e, t, n, r, i) {
	for (let a of e) if (!os(is(a, t, n, r, i), t)) return !1;
	return !0;
}
function is(e, t, n, r, i) {
	return e === "businessHours" ? as(ci(r, t, i)) : typeof e == "string" ? as(wi(n, (t) => t.groupId === e)) : typeof e == "object" && e ? as(ci(e, t, i)) : [];
}
function as(e) {
	let { instances: t } = e, n = [];
	for (let e in t) n.push(t[e].range);
	return n;
}
function os(e, t) {
	for (let n of e) if ($r(n, t)) return !0;
	return !1;
}
var ss = /^(visible|hidden)$/, cs = class extends q {
	constructor() {
		super(...arguments), this.handleEl = (e) => {
			this.el = e, J(this.props.elRef, e);
		};
	}
	render() {
		let { props: e } = this, { liquid: t, liquidIsAbsolute: n } = e, r = t && n, i = ["fc-scroller"];
		return t && (n ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")), m("div", {
			ref: this.handleEl,
			className: i.join(" "),
			style: {
				overflowX: e.overflowX,
				overflowY: e.overflowY,
				left: r && -(e.overcomeLeft || 0) || "",
				right: r && -(e.overcomeRight || 0) || "",
				bottom: r && -(e.overcomeBottom || 0) || "",
				marginLeft: !r && -(e.overcomeLeft || 0) || "",
				marginRight: !r && -(e.overcomeRight || 0) || "",
				marginBottom: !r && -(e.overcomeBottom || 0) || "",
				maxHeight: e.maxHeight || ""
			}
		}, e.children);
	}
	needsXScrolling() {
		if (ss.test(this.props.overflowX)) return !1;
		let { el: e } = this, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: n } = e;
		for (let e = 0; e < n.length; e += 1) if (n[e].getBoundingClientRect().width > t) return !0;
		return !1;
	}
	needsYScrolling() {
		if (ss.test(this.props.overflowY)) return !1;
		let { el: e } = this, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: n } = e;
		for (let e = 0; e < n.length; e += 1) if (n[e].getBoundingClientRect().height > t) return !0;
		return !1;
	}
	getXScrollbarWidth() {
		return ss.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
	}
	getYScrollbarWidth() {
		return ss.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
	}
}, ls = class {
	constructor(e) {
		this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (e, t) => {
			let { depths: n, currentMap: r } = this, i = !1, a = !1;
			e === null ? (--n[t], n[t] || (delete r[t], delete this.callbackMap[t], i = !0)) : (i = t in r, r[t] = e, n[t] = (n[t] || 0) + 1, a = !0), this.masterCallback && (i && this.masterCallback(null, String(t)), a && this.masterCallback(e, String(t)));
		};
	}
	createRef(e) {
		let t = this.callbackMap[e];
		return t ||= this.callbackMap[e] = (t) => {
			this.handleValue(t, String(e));
		}, t;
	}
	collect(e, t, n) {
		return Sr(this.currentMap, e, t, n);
	}
	getAll() {
		return gr(this.currentMap);
	}
};
function us(e) {
	let t = mt(e, ".fc-scrollgrid-shrink"), n = 0;
	for (let e of t) n = Math.max(n, Gt(e));
	return Math.ceil(n);
}
function ds(e, t) {
	return e.liquid && t.liquid;
}
function fs(e, t) {
	return t.maxHeight != null || ds(e, t);
}
function ps(e, t, n, r) {
	let { expandRows: i } = n;
	return typeof t.content == "function" ? t.content(n) : m("table", {
		role: "presentation",
		className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
		style: {
			minWidth: n.tableMinWidth,
			width: n.clientWidth,
			height: i ? n.clientHeight : ""
		}
	}, n.tableColGroupNode, m(r ? "thead" : "tbody", { role: "presentation" }, typeof t.rowContent == "function" ? t.rowContent(n) : t.rowContent));
}
function ms(e, t) {
	return M(e, t, G);
}
function hs(e, t) {
	let n = [];
	for (let r of e) {
		let e = r.span || 1;
		for (let i = 0; i < e; i += 1) n.push(m("col", { style: {
			width: r.width === "shrink" ? gs(t) : r.width || "",
			minWidth: r.minWidth || ""
		} }));
	}
	return m("colgroup", {}, ...n);
}
function gs(e) {
	return e ?? 4;
}
function _s(e) {
	for (let t of e) if (t.width === "shrink") return !0;
	return !1;
}
function vs(e, t) {
	let n = ["fc-scrollgrid", t.theme.getClass("table")];
	return e && n.push("fc-scrollgrid-liquid"), n;
}
function ys(e, t) {
	let n = [
		"fc-scrollgrid-section",
		`fc-scrollgrid-section-${e.type}`,
		e.className
	];
	return t && e.liquid && e.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
}
function bs(e) {
	return m("div", {
		className: "fc-scrollgrid-sticky-shim",
		style: {
			width: e.clientWidth,
			minWidth: e.tableMinWidth
		}
	});
}
function xs(e) {
	let { stickyHeaderDates: t } = e;
	return (t == null || t === "auto") && (t = e.height === "auto" || e.viewHeight === "auto"), t;
}
function Ss(e) {
	let { stickyFooterScrollbar: t } = e;
	return (t == null || t === "auto") && (t = e.height === "auto" || e.viewHeight === "auto"), t;
}
var Cs = class extends q {
	constructor() {
		super(...arguments), this.processCols = B((e) => e, ms), this.renderMicroColGroup = B(hs), this.scrollerRefs = new ls(), this.scrollerElRefs = new ls(this._handleScrollerEl.bind(this)), this.state = {
			shrinkWidth: null,
			forceYScrollbars: !1,
			scrollerClientWidths: {},
			scrollerClientHeights: {}
		}, this.handleSizing = () => {
			this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, r = e.sections || [], i = this.processCols(e.cols), a = this.renderMicroColGroup(i, t.shrinkWidth), o = vs(e.liquid, n);
		e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
		let s = r.length, c = 0, l, u = [], d = [], f = [];
		for (; c < s && (l = r[c]).type === "header";) u.push(this.renderSection(l, a, !0)), c += 1;
		for (; c < s && (l = r[c]).type === "body";) d.push(this.renderSection(l, a, !1)), c += 1;
		for (; c < s && (l = r[c]).type === "footer";) f.push(this.renderSection(l, a, !0)), c += 1;
		let p = !Ra(), h = { role: "rowgroup" };
		return m("table", {
			role: "grid",
			className: o.join(" "),
			style: { height: e.height }
		}, !!(!p && u.length) && m("thead", h, ...u), !!(!p && d.length) && m("tbody", h, ...d), !!(!p && f.length) && m("tfoot", h, ...f), p && m("tbody", h, ...u, ...d, ...f));
	}
	renderSection(e, t, n) {
		return "outerContent" in e ? m(_, { key: e.key }, e.outerContent) : m("tr", {
			key: e.key,
			role: "presentation",
			className: ys(e, this.props.liquid).join(" ")
		}, this.renderChunkTd(e, t, e.chunk, n));
	}
	renderChunkTd(e, t, n, r) {
		if ("outerContent" in n) return n.outerContent;
		let { props: i } = this, { forceYScrollbars: a, scrollerClientWidths: o, scrollerClientHeights: s } = this.state, c = fs(i, e), l = ds(i, e), u = i.liquid ? a ? "scroll" : c ? "auto" : "hidden" : "visible", d = e.key, f = ps(e, n, {
			tableColGroupNode: t,
			tableMinWidth: "",
			clientWidth: !i.collapsibleWidth && o[d] !== void 0 ? o[d] : null,
			clientHeight: s[d] === void 0 ? null : s[d],
			expandRows: e.expandRows,
			syncRowHeights: !1,
			rowSyncHeights: [],
			reportRowHeightChange: () => {}
		}, r);
		return m(r ? "th" : "td", {
			ref: n.elRef,
			role: "presentation"
		}, m("div", { className: `fc-scroller-harness${l ? " fc-scroller-harness-liquid" : ""}` }, m(cs, {
			ref: this.scrollerRefs.createRef(d),
			elRef: this.scrollerElRefs.createRef(d),
			overflowY: u,
			overflowX: i.liquid ? "hidden" : "visible",
			maxHeight: e.maxHeight,
			liquid: l,
			liquidIsAbsolute: !0
		}, f)));
	}
	_handleScrollerEl(e, t) {
		let n = ws(this.props.sections, t);
		n && J(n.chunk.scrollerElRef, e);
	}
	componentDidMount() {
		this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
	}
	componentDidUpdate() {
		this.handleSizing();
	}
	componentWillUnmount() {
		this.context.removeResizeHandler(this.handleSizing);
	}
	computeShrinkWidth() {
		return _s(this.props.cols) ? us(this.scrollerElRefs.getAll()) : 0;
	}
	computeScrollerDims() {
		let e = mo(), { scrollerRefs: t, scrollerElRefs: n } = this, r = !1, i = {}, a = {};
		for (let e in t.currentMap) {
			let n = t.currentMap[e];
			if (n && n.needsYScrolling()) {
				r = !0;
				break;
			}
		}
		for (let t of this.props.sections) {
			let o = t.key, s = n.currentMap[o];
			if (s) {
				let t = s.parentNode;
				i[o] = Math.floor(t.getBoundingClientRect().width - (r ? e.y : 0)), a[o] = Math.floor(t.getBoundingClientRect().height);
			}
		}
		return {
			forceYScrollbars: r,
			scrollerClientWidths: i,
			scrollerClientHeights: a
		};
	}
};
Cs.addStateEquality({
	scrollerClientWidths: G,
	scrollerClientHeights: G
});
function ws(e, t) {
	for (let n of e) if (n.key === t) return n;
	return null;
}
var Ts = class extends q {
	constructor() {
		super(...arguments), this.buildPublicEvent = B((e, t, n) => new Q(e, t, n)), this.handleEl = (e) => {
			this.el = e, J(this.props.elRef, e), e && da(e, this.props.seg);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, { seg: r } = e, { eventRange: i } = r, { ui: a } = i, o = {
			event: this.buildPublicEvent(t, i.def, i.instance),
			view: t.viewApi,
			timeText: e.timeText,
			textColor: a.textColor,
			backgroundColor: a.backgroundColor,
			borderColor: a.borderColor,
			isDraggable: !e.disableDragging && _a(r, t),
			isStartResizable: !e.disableResizing && va(r, t),
			isEndResizable: !e.disableResizing && ya(r),
			isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
			isStart: !!r.isStart,
			isEnd: !!r.isEnd,
			isPast: !!e.isPast,
			isFuture: !!e.isFuture,
			isToday: !!e.isToday,
			isSelected: !!e.isSelected,
			isDragging: !!e.isDragging,
			isResizing: !!e.isResizing
		};
		return m(Y, {
			elRef: this.handleEl,
			elTag: e.elTag,
			elAttrs: e.elAttrs,
			elClasses: [
				...Sa(o),
				...r.eventRange.ui.classNames,
				...e.elClasses || []
			],
			elStyle: e.elStyle,
			renderProps: o,
			generatorName: "eventContent",
			customGenerator: n.eventContent,
			defaultGenerator: e.defaultGenerator,
			classNameGenerator: n.eventClassNames,
			didMount: n.eventDidMount,
			willUnmount: n.eventWillUnmount
		}, e.children);
	}
	componentDidUpdate(e) {
		this.el && this.props.seg !== e.seg && da(this.el, this.props.seg);
	}
}, Es = class extends q {
	render() {
		let { props: e, context: t } = this, { options: n } = t, { seg: r } = e, { ui: i } = r.eventRange, a = ba(r, n.eventTimeFormat || e.defaultTimeFormat, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
		return m(Ts, Object.assign({}, e, {
			elTag: "a",
			elStyle: {
				borderColor: i.borderColor,
				backgroundColor: i.backgroundColor
			},
			elAttrs: wa(r, t),
			defaultGenerator: Ds,
			timeText: a
		}), (e, t) => m(_, null, m(e, {
			elTag: "div",
			elClasses: ["fc-event-main"],
			elStyle: { color: t.textColor }
		}), !!t.isStartResizable && m("div", { className: "fc-event-resizer fc-event-resizer-start" }), !!t.isEndResizable && m("div", { className: "fc-event-resizer fc-event-resizer-end" })));
	}
};
Es.addPropsEquality({ seg: G });
function Ds(e) {
	return m("div", { className: "fc-event-main-frame" }, e.timeText && m("div", { className: "fc-event-time" }, e.timeText), m("div", { className: "fc-event-title-container" }, m("div", { className: "fc-event-title fc-sticky" }, e.event.title || m(_, null, "\xA0"))));
}
var Os = (e) => m(K.Consumer, null, (t) => {
	let { options: n } = t, r = {
		isAxis: e.isAxis,
		date: t.dateEnv.toDate(e.date),
		view: t.viewApi
	};
	return m(Y, {
		elRef: e.elRef,
		elTag: e.elTag || "div",
		elAttrs: e.elAttrs,
		elClasses: e.elClasses,
		elStyle: e.elStyle,
		renderProps: r,
		generatorName: "nowIndicatorContent",
		customGenerator: n.nowIndicatorContent,
		classNameGenerator: n.nowIndicatorClassNames,
		didMount: n.nowIndicatorDidMount,
		willUnmount: n.nowIndicatorWillUnmount
	}, e.children);
}), ks = V({ day: "numeric" }), As = class extends q {
	constructor() {
		super(...arguments), this.refineRenderProps = Nn(Ms);
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = this.refineRenderProps({
			date: e.date,
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			isMonthStart: e.isMonthStart || !1,
			showDayNumber: e.showDayNumber,
			extraRenderProps: e.extraRenderProps,
			viewApi: t.viewApi,
			dateEnv: t.dateEnv,
			monthStartFormat: n.monthStartFormat
		});
		return m(Y, {
			elRef: e.elRef,
			elTag: e.elTag,
			elAttrs: Object.assign(Object.assign({}, e.elAttrs), r.isDisabled ? {} : { "data-date": kn(e.date) }),
			elClasses: [...io(r, t.theme), ...e.elClasses || []],
			elStyle: e.elStyle,
			renderProps: r,
			generatorName: "dayCellContent",
			customGenerator: n.dayCellContent,
			defaultGenerator: e.defaultGenerator,
			classNameGenerator: r.isDisabled ? void 0 : n.dayCellClassNames,
			didMount: n.dayCellDidMount,
			willUnmount: n.dayCellWillUnmount
		}, e.children);
	}
};
function js(e) {
	return !!(e.dayCellContent || zr("dayCellContent", e));
}
function Ms(e) {
	let { date: t, dateEnv: n, dateProfile: r, isMonthStart: i } = e, a = ro(t, e.todayRange, null, r), o = e.showDayNumber ? n.format(t, i ? e.monthStartFormat : ks) : "";
	return Object.assign(Object.assign(Object.assign({
		date: n.toDate(t),
		view: e.viewApi
	}, a), {
		isMonthStart: i,
		dayNumberText: o
	}), e.extraRenderProps);
}
var Ns = class extends q {
	render() {
		let { props: e } = this, { seg: t } = e;
		return m(Ts, {
			elTag: "div",
			elClasses: ["fc-bg-event"],
			elStyle: { backgroundColor: t.eventRange.ui.backgroundColor },
			defaultGenerator: Ps,
			seg: t,
			timeText: "",
			isDragging: !1,
			isResizing: !1,
			isDateSelecting: !1,
			isSelected: !1,
			isPast: e.isPast,
			isFuture: e.isFuture,
			isToday: e.isToday,
			disableDragging: !0,
			disableResizing: !0
		});
	}
};
function Ps(e) {
	let { title: t } = e.event;
	return t && m("div", { className: "fc-event-title" }, e.event.title);
}
function Fs(e) {
	return m("div", { className: `fc-${e}` });
}
var Is = (e) => m(K.Consumer, null, (t) => {
	let { dateEnv: n, options: r } = t, { date: i } = e, a = r.weekNumberFormat || e.defaultFormat, o = {
		num: n.computeWeekNumber(i),
		text: n.format(i, a),
		date: i
	};
	return m(Y, {
		elRef: e.elRef,
		elTag: e.elTag,
		elAttrs: e.elAttrs,
		elClasses: e.elClasses,
		elStyle: e.elStyle,
		renderProps: o,
		generatorName: "weekNumberContent",
		customGenerator: r.weekNumberContent,
		defaultGenerator: Ls,
		classNameGenerator: r.weekNumberClassNames,
		didMount: r.weekNumberDidMount,
		willUnmount: r.weekNumberWillUnmount
	}, e.children);
});
function Ls(e) {
	return e.text;
}
var Rs = 10, zs = class extends q {
	constructor() {
		super(...arguments), this.state = { titleId: xt() }, this.handleRootEl = (e) => {
			this.rootEl = e, this.props.elRef && J(this.props.elRef, e);
		}, this.handleDocumentMouseDown = (e) => {
			let t = yt(e);
			this.rootEl.contains(t) || this.handleCloseClick();
		}, this.handleDocumentKeyDown = (e) => {
			e.key === "Escape" && this.handleCloseClick();
		}, this.handleCloseClick = () => {
			let { onClose: e } = this.props;
			e && e();
		};
	}
	render() {
		let { theme: e, options: t } = this.context, { props: n, state: r } = this, i = ["fc-popover", e.getClass("popover")].concat(n.extraClassNames || []);
		return Ue(m("div", Object.assign({}, n.extraAttrs, {
			id: n.id,
			className: i.join(" "),
			"aria-labelledby": r.titleId,
			ref: this.handleRootEl
		}), m("div", { className: "fc-popover-header " + e.getClass("popoverHeader") }, m("span", {
			className: "fc-popover-title",
			id: r.titleId
		}, n.title), m("span", {
			className: "fc-popover-close " + e.getIconClass("close"),
			title: t.closeHint,
			onClick: this.handleCloseClick
		})), m("div", { className: "fc-popover-body " + e.getClass("popoverContent") }, n.children)), n.parentEl);
	}
	componentDidMount() {
		document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
	}
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
	}
	updateSize() {
		let { isRtl: e } = this.context, { alignmentEl: t, alignGridTop: n } = this.props, { rootEl: r } = this, i = bo(t);
		if (i) {
			let a = r.getBoundingClientRect(), o = n ? O(t, ".fc-scrollgrid").getBoundingClientRect().top : i.top, s = e ? i.right - a.width : i.left;
			o = Math.max(o, Rs), s = Math.min(s, document.documentElement.clientWidth - Rs - a.width), s = Math.max(s, Rs);
			let c = r.offsetParent.getBoundingClientRect();
			_t(r, {
				top: o - c.top,
				left: s - c.left
			});
		}
	}
}, Bs = class extends Do {
	constructor() {
		super(...arguments), this.handleRootEl = (e) => {
			this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
				el: e,
				useEventCenter: !1
			}) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { options: e, dateEnv: t } = this.context, { props: n } = this, { startDate: r, todayRange: i, dateProfile: a } = n, o = t.format(r, e.dayPopoverFormat);
		return m(As, {
			elRef: this.handleRootEl,
			date: r,
			dateProfile: a,
			todayRange: i
		}, (t, r, i) => m(zs, {
			elRef: i.ref,
			id: n.id,
			title: o,
			extraClassNames: ["fc-more-popover"].concat(i.className || []),
			extraAttrs: i,
			parentEl: n.parentEl,
			alignmentEl: n.alignmentEl,
			alignGridTop: n.alignGridTop,
			onClose: n.onClose
		}, js(e) && m(t, {
			elTag: "div",
			elClasses: ["fc-more-popover-misc"]
		}), n.children));
	}
	queryHit(e, t, n, r) {
		let { rootEl: i, props: a } = this;
		return e >= 0 && e < n && t >= 0 && t < r ? {
			dateProfile: a.dateProfile,
			dateSpan: Object.assign({
				allDay: !a.forceTimed,
				range: {
					start: a.startDate,
					end: a.endDate
				}
			}, a.extraDateSpan),
			dayEl: i,
			rect: {
				left: 0,
				top: 0,
				right: n,
				bottom: r
			},
			layer: 1
		} : null;
	}
}, Vs = class extends q {
	constructor() {
		super(...arguments), this.state = {
			isPopoverOpen: !1,
			popoverId: xt()
		}, this.handleLinkEl = (e) => {
			this.linkEl = e, this.props.elRef && J(this.props.elRef, e);
		}, this.handleClick = (e) => {
			let { props: t, context: n } = this, { moreLinkClick: r } = n.options, i = Us(t).start;
			function a(e) {
				let { def: t, instance: r, range: i } = e.eventRange;
				return {
					event: new Q(n, t, r),
					start: n.dateEnv.toDate(i.start),
					end: n.dateEnv.toDate(i.end),
					isStart: e.isStart,
					isEnd: e.isEnd
				};
			}
			typeof r == "function" && (r = r({
				date: i,
				allDay: !!t.allDayDate,
				allSegs: t.allSegs.map(a),
				hiddenSegs: t.hiddenSegs.map(a),
				jsEvent: e,
				view: n.viewApi
			})), !r || r === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof r == "string" && n.calendarApi.zoomTo(i, r);
		}, this.handlePopoverClose = () => {
			this.setState({ isPopoverOpen: !1 });
		};
	}
	render() {
		let { props: e, state: t } = this;
		return m(K.Consumer, null, (n) => {
			let { viewApi: r, options: i, calendarApi: a } = n, { moreLinkText: o } = i, { moreCnt: s } = e, c = Us(e), l = typeof o == "function" ? o.call(a, s) : `+${s} ${o}`, u = Ht(i.moreLinkHint, [s], l), d = {
				num: s,
				shortText: `+${s}`,
				text: l,
				view: r
			};
			return m(_, null, !!e.moreCnt && m(Y, {
				elTag: e.elTag || "a",
				elRef: this.handleLinkEl,
				elClasses: [...e.elClasses || [], "fc-more-link"],
				elStyle: e.elStyle,
				elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Ot(this.handleClick)), {
					title: u,
					"aria-expanded": t.isPopoverOpen,
					"aria-controls": t.isPopoverOpen ? t.popoverId : ""
				}),
				renderProps: d,
				generatorName: "moreLinkContent",
				customGenerator: i.moreLinkContent,
				defaultGenerator: e.defaultGenerator || Hs,
				classNameGenerator: i.moreLinkClassNames,
				didMount: i.moreLinkDidMount,
				willUnmount: i.moreLinkWillUnmount
			}, e.children), t.isPopoverOpen && m(Bs, {
				id: t.popoverId,
				startDate: c.start,
				endDate: c.end,
				dateProfile: e.dateProfile,
				todayRange: e.todayRange,
				extraDateSpan: e.extraDateSpan,
				parentEl: this.parentEl,
				alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl,
				alignGridTop: e.alignGridTop,
				forceTimed: e.forceTimed,
				onClose: this.handlePopoverClose
			}, e.popoverContent()));
		});
	}
	componentDidMount() {
		this.updateParentEl();
	}
	componentDidUpdate() {
		this.updateParentEl();
	}
	updateParentEl() {
		this.linkEl && (this.parentEl = O(this.linkEl, ".fc-view-harness"));
	}
};
function Hs(e) {
	return e.text;
}
function Us(e) {
	if (e.allDayDate) return {
		start: e.allDayDate,
		end: N(e.allDayDate, 1)
	};
	let { hiddenSegs: t } = e;
	return {
		start: Ws(t),
		end: Ks(t)
	};
}
function Ws(e) {
	return e.reduce(Gs).eventRange.range.start;
}
function Gs(e, t) {
	return e.eventRange.range.start < t.eventRange.range.start ? e : t;
}
function Ks(e) {
	return e.reduce(qs).eventRange.range.end;
}
function qs(e, t) {
	return e.eventRange.range.end > t.eventRange.range.end ? e : t;
}
//#endregion
//#region node_modules/@fullcalendar/core/index.js
var Js = [], Ys = {
	code: "en",
	week: {
		dow: 0,
		doy: 4
	},
	direction: "ltr",
	buttonText: {
		prev: "prev",
		next: "next",
		prevYear: "prev year",
		nextYear: "next year",
		year: "year",
		today: "today",
		month: "month",
		week: "week",
		day: "day",
		list: "list"
	},
	weekText: "W",
	weekTextLong: "Week",
	closeHint: "Close",
	timeHint: "Time",
	eventHint: "Event",
	allDayText: "all-day",
	moreLinkText: "more",
	noEventsText: "No events to display"
}, Xs = Object.assign(Object.assign({}, Ys), {
	buttonHints: {
		prev: "Previous $0",
		next: "Next $0",
		today(e, t) {
			return t === "day" ? "Today" : `This ${e}`;
		}
	},
	viewHint: "$0 view",
	navLinkHint: "Go to $0",
	moreLinkHint(e) {
		return `Show ${e} more event${e === 1 ? "" : "s"}`;
	}
});
function Zs(e) {
	let t = e.length > 0 ? e[0].code : "en", n = Js.concat(e), r = { en: Xs };
	for (let e of n) r[e.code] = e;
	return {
		map: r,
		defaultCode: t
	};
}
function Qs(e, t) {
	return typeof e == "object" && !Array.isArray(e) ? tc(e.code, [e.code], e) : $s(e, t);
}
function $s(e, t) {
	let n = [].concat(e || []);
	return tc(e, n, ec(n, t) || Xs);
}
function ec(e, t) {
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n].toLocaleLowerCase().split("-");
		for (let e = r.length; e > 0; --e) {
			let n = r.slice(0, e).join("-");
			if (t[n]) return t[n];
		}
	}
	return null;
}
function tc(e, t, n) {
	let r = mr([Ys, n], ["buttonText"]);
	delete r.code;
	let { week: i } = r;
	return delete r.week, {
		codeArg: e,
		codes: t,
		week: i,
		simpleNumberFormat: new Intl.NumberFormat(e),
		options: r
	};
}
function nc(e) {
	return {
		id: k(),
		name: e.name,
		premiumReleaseDate: e.premiumReleaseDate ? new Date(e.premiumReleaseDate) : void 0,
		deps: e.deps || [],
		reducers: e.reducers || [],
		isLoadingFuncs: e.isLoadingFuncs || [],
		contextInit: [].concat(e.contextInit || []),
		eventRefiners: e.eventRefiners || {},
		eventDefMemberAdders: e.eventDefMemberAdders || [],
		eventSourceRefiners: e.eventSourceRefiners || {},
		isDraggableTransformers: e.isDraggableTransformers || [],
		eventDragMutationMassagers: e.eventDragMutationMassagers || [],
		eventDefMutationAppliers: e.eventDefMutationAppliers || [],
		dateSelectionTransformers: e.dateSelectionTransformers || [],
		datePointTransforms: e.datePointTransforms || [],
		dateSpanTransforms: e.dateSpanTransforms || [],
		views: e.views || {},
		viewPropsTransformers: e.viewPropsTransformers || [],
		isPropsValid: e.isPropsValid || null,
		externalDefTransforms: e.externalDefTransforms || [],
		viewContainerAppends: e.viewContainerAppends || [],
		eventDropTransformers: e.eventDropTransformers || [],
		componentInteractions: e.componentInteractions || [],
		calendarInteractions: e.calendarInteractions || [],
		themeClasses: e.themeClasses || {},
		eventSourceDefs: e.eventSourceDefs || [],
		cmdFormatter: e.cmdFormatter,
		recurringTypes: e.recurringTypes || [],
		namedTimeZonedImpl: e.namedTimeZonedImpl,
		initialView: e.initialView || "",
		elementDraggingImpl: e.elementDraggingImpl,
		optionChangeHandlers: e.optionChangeHandlers || {},
		scrollGridImpl: e.scrollGridImpl || null,
		listenerRefiners: e.listenerRefiners || {},
		optionRefiners: e.optionRefiners || {},
		propSetHandlers: e.propSetHandlers || {}
	};
}
function rc(e, t) {
	let n = {}, r = {
		premiumReleaseDate: void 0,
		reducers: [],
		isLoadingFuncs: [],
		contextInit: [],
		eventRefiners: {},
		eventDefMemberAdders: [],
		eventSourceRefiners: {},
		isDraggableTransformers: [],
		eventDragMutationMassagers: [],
		eventDefMutationAppliers: [],
		dateSelectionTransformers: [],
		datePointTransforms: [],
		dateSpanTransforms: [],
		views: {},
		viewPropsTransformers: [],
		isPropsValid: null,
		externalDefTransforms: [],
		viewContainerAppends: [],
		eventDropTransformers: [],
		componentInteractions: [],
		calendarInteractions: [],
		themeClasses: {},
		eventSourceDefs: [],
		cmdFormatter: null,
		recurringTypes: [],
		namedTimeZonedImpl: null,
		initialView: "",
		elementDraggingImpl: null,
		optionChangeHandlers: {},
		scrollGridImpl: null,
		listenerRefiners: {},
		optionRefiners: {},
		propSetHandlers: {}
	};
	function i(e) {
		for (let t of e) {
			let e = t.name, a = n[e];
			a === void 0 ? (n[e] = t.id, i(t.deps), r = ac(r, t)) : a !== t.id && console.warn(`Duplicate plugin '${e}'`);
		}
	}
	return e && i(e), i(t), r;
}
function ic() {
	let e = [], t = [], n;
	return (r, i) => ((!n || !M(r, e) || !M(i, t)) && (n = rc(r, i)), e = r, t = i, n);
}
function ac(e, t) {
	return {
		premiumReleaseDate: oc(e.premiumReleaseDate, t.premiumReleaseDate),
		reducers: e.reducers.concat(t.reducers),
		isLoadingFuncs: e.isLoadingFuncs.concat(t.isLoadingFuncs),
		contextInit: e.contextInit.concat(t.contextInit),
		eventRefiners: Object.assign(Object.assign({}, e.eventRefiners), t.eventRefiners),
		eventDefMemberAdders: e.eventDefMemberAdders.concat(t.eventDefMemberAdders),
		eventSourceRefiners: Object.assign(Object.assign({}, e.eventSourceRefiners), t.eventSourceRefiners),
		isDraggableTransformers: e.isDraggableTransformers.concat(t.isDraggableTransformers),
		eventDragMutationMassagers: e.eventDragMutationMassagers.concat(t.eventDragMutationMassagers),
		eventDefMutationAppliers: e.eventDefMutationAppliers.concat(t.eventDefMutationAppliers),
		dateSelectionTransformers: e.dateSelectionTransformers.concat(t.dateSelectionTransformers),
		datePointTransforms: e.datePointTransforms.concat(t.datePointTransforms),
		dateSpanTransforms: e.dateSpanTransforms.concat(t.dateSpanTransforms),
		views: Object.assign(Object.assign({}, e.views), t.views),
		viewPropsTransformers: e.viewPropsTransformers.concat(t.viewPropsTransformers),
		isPropsValid: t.isPropsValid || e.isPropsValid,
		externalDefTransforms: e.externalDefTransforms.concat(t.externalDefTransforms),
		viewContainerAppends: e.viewContainerAppends.concat(t.viewContainerAppends),
		eventDropTransformers: e.eventDropTransformers.concat(t.eventDropTransformers),
		calendarInteractions: e.calendarInteractions.concat(t.calendarInteractions),
		componentInteractions: e.componentInteractions.concat(t.componentInteractions),
		themeClasses: Object.assign(Object.assign({}, e.themeClasses), t.themeClasses),
		eventSourceDefs: e.eventSourceDefs.concat(t.eventSourceDefs),
		cmdFormatter: t.cmdFormatter || e.cmdFormatter,
		recurringTypes: e.recurringTypes.concat(t.recurringTypes),
		namedTimeZonedImpl: t.namedTimeZonedImpl || e.namedTimeZonedImpl,
		initialView: e.initialView || t.initialView,
		elementDraggingImpl: e.elementDraggingImpl || t.elementDraggingImpl,
		optionChangeHandlers: Object.assign(Object.assign({}, e.optionChangeHandlers), t.optionChangeHandlers),
		scrollGridImpl: t.scrollGridImpl || e.scrollGridImpl,
		listenerRefiners: Object.assign(Object.assign({}, e.listenerRefiners), t.listenerRefiners),
		optionRefiners: Object.assign(Object.assign({}, e.optionRefiners), t.optionRefiners),
		propSetHandlers: Object.assign(Object.assign({}, e.propSetHandlers), t.propSetHandlers)
	};
}
function oc(e, t) {
	return e === void 0 ? t : t === void 0 ? e : new Date(Math.max(e.valueOf(), t.valueOf()));
}
var $ = class extends kr {};
$.prototype.classes = {
	root: "fc-theme-standard",
	tableCellShaded: "fc-cell-shaded",
	buttonGroup: "fc-button-group",
	button: "fc-button fc-button-primary",
	buttonActive: "fc-button-active"
}, $.prototype.baseIconClass = "fc-icon", $.prototype.iconClasses = {
	close: "fc-icon-x",
	prev: "fc-icon-chevron-left",
	next: "fc-icon-chevron-right",
	prevYear: "fc-icon-chevrons-left",
	nextYear: "fc-icon-chevrons-right"
}, $.prototype.rtlIconClasses = {
	prev: "fc-icon-chevron-right",
	next: "fc-icon-chevron-left",
	prevYear: "fc-icon-chevrons-right",
	nextYear: "fc-icon-chevrons-left"
}, $.prototype.iconOverrideOption = "buttonIcons", $.prototype.iconOverrideCustomButtonOption = "icon", $.prototype.iconOverridePrefix = "fc-icon-";
function sc(e, t) {
	let n = {}, r;
	for (r in e) cc(r, n, e, t);
	for (r in t) cc(r, n, e, t);
	return n;
}
function cc(e, t, n, r) {
	if (t[e]) return t[e];
	let i = lc(e, t, n, r);
	return i && (t[e] = i), i;
}
function lc(e, t, n, r) {
	let i = n[e], a = r[e], o = (e) => i && i[e] !== null ? i[e] : a && a[e] !== null ? a[e] : null, s = o("component"), c = o("superType"), l = null;
	if (c) {
		if (c === e) throw Error("Can't have a custom view type that references itself");
		l = cc(c, t, n, r);
	}
	return !s && l && (s = l.component), s ? {
		type: e,
		component: s,
		defaults: Object.assign(Object.assign({}, l ? l.defaults : {}), i ? i.rawOptions : {}),
		overrides: Object.assign(Object.assign({}, l ? l.overrides : {}), a ? a.rawOptions : {})
	} : null;
}
function uc(e) {
	return W(e, dc);
}
function dc(e) {
	let t = typeof e == "function" ? { component: e } : e, { component: n } = t;
	return t.content ? n = fc(t) : n && !(n.prototype instanceof q) && (n = fc(Object.assign(Object.assign({}, t), { content: n }))), {
		superType: t.type,
		component: n,
		rawOptions: t
	};
}
function fc(e) {
	return (t) => m(K.Consumer, null, (n) => m(Y, {
		elTag: "div",
		elClasses: Kr(n.viewSpec),
		renderProps: Object.assign(Object.assign({}, t), { nextDayThreshold: n.options.nextDayThreshold }),
		generatorName: void 0,
		customGenerator: e.content,
		classNameGenerator: e.classNames,
		didMount: e.didMount,
		willUnmount: e.willUnmount
	}));
}
function pc(e, t, n, r) {
	let i = uc(e), a = uc(t.views);
	return W(sc(i, a), (e) => mc(e, a, t, n, r));
}
function mc(e, t, n, r, i) {
	let a = e.overrides.duration || e.defaults.duration || r.duration || n.duration, o = null, s = "", c = "", l = {};
	if (a && (o = gc(a), o)) {
		let e = cn(o);
		s = e.unit, e.value === 1 && (c = s, l = t[s] ? t[s].rawOptions : {});
	}
	let u = (t) => {
		let n = t.buttonText || {}, r = e.defaults.buttonTextKey;
		return r != null && n[r] != null ? n[r] : n[e.type] == null ? n[c] == null ? null : n[c] : n[e.type];
	}, d = (t) => {
		let n = t.buttonHints || {}, r = e.defaults.buttonTextKey;
		return r != null && n[r] != null ? n[r] : n[e.type] == null ? n[c] == null ? null : n[c] : n[e.type];
	};
	return {
		type: e.type,
		component: e.component,
		duration: o,
		durationUnit: s,
		singleUnit: c,
		optionDefaults: e.defaults,
		optionOverrides: Object.assign(Object.assign({}, l), e.overrides),
		buttonTextOverride: u(r) || u(n) || e.overrides.buttonText,
		buttonTextDefault: u(i) || e.defaults.buttonText || u(ir) || e.type,
		buttonTitleOverride: d(r) || d(n) || e.overrides.buttonHint,
		buttonTitleDefault: d(i) || e.defaults.buttonHint || d(ir)
	};
}
var hc = {};
function gc(e) {
	let t = JSON.stringify(e), n = hc[t];
	return n === void 0 && (n = A(e), hc[t] = n), n;
}
function _c(e, t) {
	switch (t.type) {
		case "CHANGE_VIEW_TYPE": e = t.viewType;
	}
	return e;
}
function vc(e, t) {
	switch (t.type) {
		case "CHANGE_DATE": return t.dateMarker;
		default: return e;
	}
}
function yc(e, t, n) {
	let r = e.initialDate;
	return r == null ? n.getDateMarker() : t.createMarker(r);
}
function bc(e, t) {
	switch (t.type) {
		case "SET_OPTION": return Object.assign(Object.assign({}, e), { [t.optionName]: t.rawOptionValue });
		default: return e;
	}
}
function xc(e, t, n, r) {
	let i;
	switch (t.type) {
		case "CHANGE_VIEW_TYPE": return r.build(t.dateMarker || n);
		case "CHANGE_DATE": return r.build(t.dateMarker);
		case "PREV":
			if (i = r.buildPrev(e, n), i.isValid) return i;
			break;
		case "NEXT":
			if (i = r.buildNext(e, n), i.isValid) return i;
			break;
	}
	return e;
}
function Sc(e, t, n) {
	let r = t ? t.activeRange : null;
	return Ec({}, Pc(e, n), r, n);
}
function Cc(e, t, n, r) {
	let i = n ? n.activeRange : null;
	switch (t.type) {
		case "ADD_EVENT_SOURCES": return Ec(e, t.sources, i, r);
		case "REMOVE_EVENT_SOURCE": return Dc(e, t.sourceId);
		case "PREV":
		case "NEXT":
		case "CHANGE_DATE":
		case "CHANGE_VIEW_TYPE": return n ? Oc(e, i, r) : e;
		case "FETCH_EVENT_SOURCES": return Ac(e, t.sourceIds ? hr(t.sourceIds) : Nc(e, r), i, t.isRefetch || !1, r);
		case "RECEIVE_EVENTS":
		case "RECEIVE_EVENT_ERROR": return Mc(e, t.sourceId, t.fetchId, t.fetchRange);
		case "REMOVE_ALL_EVENT_SOURCES": return {};
		default: return e;
	}
}
function wc(e, t, n) {
	let r = t ? t.activeRange : null;
	return Ac(e, Nc(e, n), r, !0, n);
}
function Tc(e) {
	for (let t in e) if (e[t].isFetching) return !0;
	return !1;
}
function Ec(e, t, n, r) {
	let i = {};
	for (let e of t) i[e.sourceId] = e;
	return n && (i = Oc(i, n, r)), Object.assign(Object.assign({}, e), i);
}
function Dc(e, t) {
	return U(e, (e) => e.sourceId !== t);
}
function Oc(e, t, n) {
	return Ac(e, U(e, (e) => kc(e, t, n)), t, !1, n);
}
function kc(e, t, n) {
	return Fc(e, n) ? !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId;
}
function Ac(e, t, n, r, i) {
	let a = {};
	for (let o in e) {
		let s = e[o];
		t[o] ? a[o] = jc(s, n, r, i) : a[o] = s;
	}
	return a;
}
function jc(e, t, n, r) {
	let { options: i, calendarApi: a } = r, o = r.pluginHooks.eventSourceDefs[e.sourceDefId], s = k();
	return o.fetch({
		eventSource: e,
		range: t,
		isRefetch: n,
		context: r
	}, (n) => {
		let { rawEvents: o } = n;
		i.eventSourceSuccess && (o = i.eventSourceSuccess.call(a, o, n.response) || o), e.success && (o = e.success.call(a, o, n.response) || o), r.dispatch({
			type: "RECEIVE_EVENTS",
			sourceId: e.sourceId,
			fetchId: s,
			fetchRange: t,
			rawEvents: o
		});
	}, (n) => {
		let o = !1;
		i.eventSourceFailure && (i.eventSourceFailure.call(a, n), o = !0), e.failure && (e.failure(n), o = !0), o || console.warn(n.message, n), r.dispatch({
			type: "RECEIVE_EVENT_ERROR",
			sourceId: e.sourceId,
			fetchId: s,
			fetchRange: t,
			error: n
		});
	}), Object.assign(Object.assign({}, e), {
		isFetching: !0,
		latestFetchId: s
	});
}
function Mc(e, t, n, r) {
	let i = e[t];
	return i && n === i.latestFetchId ? Object.assign(Object.assign({}, e), { [t]: Object.assign(Object.assign({}, i), {
		isFetching: !1,
		fetchRange: r
	}) }) : e;
}
function Nc(e, t) {
	return U(e, (e) => Fc(e, t));
}
function Pc(e, t) {
	let n = Fi(t), r = [].concat(e.eventSources || []), i = [];
	e.initialEvents && r.unshift(e.initialEvents), e.events && r.unshift(e.events);
	for (let e of r) {
		let r = Pi(e, t, n);
		r && i.push(r);
	}
	return i;
}
function Fc(e, t) {
	return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
}
function Ic(e, t) {
	switch (t.type) {
		case "UNSELECT_DATES": return null;
		case "SELECT_DATES": return t.selection;
		default: return e;
	}
}
function Lc(e, t) {
	switch (t.type) {
		case "UNSELECT_EVENT": return "";
		case "SELECT_EVENT": return t.eventInstanceId;
		default: return e;
	}
}
function Rc(e, t) {
	let n;
	switch (t.type) {
		case "UNSET_EVENT_DRAG": return null;
		case "SET_EVENT_DRAG": return n = t.state, {
			affectedEvents: n.affectedEvents,
			mutatedEvents: n.mutatedEvents,
			isEvent: n.isEvent
		};
		default: return e;
	}
}
function zc(e, t) {
	let n;
	switch (t.type) {
		case "UNSET_EVENT_RESIZE": return null;
		case "SET_EVENT_RESIZE": return n = t.state, {
			affectedEvents: n.affectedEvents,
			mutatedEvents: n.mutatedEvents,
			isEvent: n.isEvent
		};
		default: return e;
	}
}
function Bc(e, t, n, r, i) {
	return {
		header: e.headerToolbar ? Vc(e.headerToolbar, e, t, n, r, i) : null,
		footer: e.footerToolbar ? Vc(e.footerToolbar, e, t, n, r, i) : null
	};
}
function Vc(e, t, n, r, i, a) {
	let o = {}, s = [], c = !1;
	for (let l in e) {
		let u = e[l], d = Hc(u, t, n, r, i, a);
		o[l] = d.widgets, s.push(...d.viewsWithButtons), c ||= d.hasTitle;
	}
	return {
		sectionWidgets: o,
		viewsWithButtons: s,
		hasTitle: c
	};
}
function Hc(e, t, n, r, i, a) {
	let o = t.direction === "rtl", s = t.customButtons || {}, c = n.buttonText || {}, l = t.buttonText || {}, u = n.buttonHints || {}, d = t.buttonHints || {}, f = e ? e.split(" ") : [], p = [], m = !1;
	return {
		widgets: f.map((e) => e.split(",").map((e) => {
			if (e === "title") return m = !0, { buttonName: e };
			let n, f, h, g, _, v;
			if (n = s[e]) h = (e) => {
				n.click && n.click.call(e.target, e, e.target);
			}, (g = r.getCustomButtonIconClass(n)) || (g = r.getIconClass(e, o)) || (_ = n.text), v = n.hint || n.text;
			else if (f = i[e]) {
				p.push(e), h = () => {
					a.changeView(e);
				}, (_ = f.buttonTextOverride) || (g = r.getIconClass(e, o)) || (_ = f.buttonTextDefault);
				let n = f.buttonTextOverride || f.buttonTextDefault;
				v = Ht(f.buttonTitleOverride || f.buttonTitleDefault || t.viewHint, [n, e], n);
			} else if (a[e]) if (h = () => {
				a[e]();
			}, (_ = c[e]) || (g = r.getIconClass(e, o)) || (_ = l[e]), e === "prevYear" || e === "nextYear") {
				let t = e === "prevYear" ? "prev" : "next";
				v = Ht(u[t] || d[t], [l.year || "year", "year"], l[e]);
			} else v = (t) => Ht(u[e] || d[e], [l[t] || t, t], l[e]);
			return {
				buttonName: e,
				buttonClick: h,
				buttonIcon: g,
				buttonText: _,
				buttonHint: v
			};
		})),
		viewsWithButtons: p,
		hasTitle: m
	};
}
var Uc = class {
	constructor(e, t, n) {
		this.type = e, this.getCurrentData = t, this.dateEnv = n;
	}
	get calendar() {
		return this.getCurrentData().calendarApi;
	}
	get title() {
		return this.getCurrentData().viewTitle;
	}
	get activeStart() {
		return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
	}
	get activeEnd() {
		return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
	}
	get currentStart() {
		return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
	}
	get currentEnd() {
		return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
	}
	getOption(e) {
		return this.getCurrentData().options[e];
	}
}, Wc = nc({
	name: "array-event-source",
	eventSourceDefs: [{
		ignoreRange: !0,
		parseMeta(e) {
			return Array.isArray(e.events) ? e.events : null;
		},
		fetch(e, t) {
			t({ rawEvents: e.eventSource.meta });
		}
	}]
}), Gc = nc({
	name: "func-event-source",
	eventSourceDefs: [{
		parseMeta(e) {
			return typeof e.events == "function" ? e.events : null;
		},
		fetch(e, t, n) {
			let { dateEnv: r } = e.context, i = e.eventSource.meta;
			Pa(i.bind(null, ja(e.range, r)), (e) => t({ rawEvents: e }), n);
		}
	}]
}), Kc = nc({
	name: "json-event-source",
	eventSourceRefiners: {
		method: String,
		extraParams: H,
		startParam: String,
		endParam: String,
		timeZoneParam: String
	},
	eventSourceDefs: [{
		parseMeta(e) {
			return e.url && (e.format === "json" || !e.format) ? {
				url: e.url,
				format: "json",
				method: (e.method || "GET").toUpperCase(),
				extraParams: e.extraParams,
				startParam: e.startParam,
				endParam: e.endParam,
				timeZoneParam: e.timeZoneParam
			} : null;
		},
		fetch(e, t, n) {
			let { meta: r } = e.eventSource, i = qc(r, e.range, e.context);
			Ia(r.method, r.url, i).then(([e, n]) => {
				t({
					rawEvents: e,
					response: n
				});
			}, n);
		}
	}]
});
function qc(e, t, n) {
	let { dateEnv: r, options: i } = n, a, o, s, c, l = {};
	return a = e.startParam, a ??= i.startParam, o = e.endParam, o ??= i.endParam, s = e.timeZoneParam, s ??= i.timeZoneParam, c = typeof e.extraParams == "function" ? e.extraParams() : e.extraParams || {}, Object.assign(l, c), l[a] = r.formatIso(t.start), l[o] = r.formatIso(t.end), r.timeZone !== "local" && (l[s] = r.timeZone), l;
}
var Jc = nc({
	name: "simple-recurring-event",
	recurringTypes: [{
		parse(e, t) {
			if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
				let n = {
					daysOfWeek: e.daysOfWeek || null,
					startTime: e.startTime || null,
					endTime: e.endTime || null,
					startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
					endRecur: e.endRecur ? t.createMarker(e.endRecur) : null,
					dateEnv: t
				}, r;
				return e.duration && (r = e.duration), !r && e.startTime && e.endTime && (r = $t(e.endTime, e.startTime)), {
					allDayGuess: !e.startTime && !e.endTime,
					duration: r,
					typeData: n
				};
			}
			return null;
		},
		expand(e, t, n) {
			let r = Xr(t, {
				start: e.startRecur,
				end: e.endRecur
			});
			return r ? Yc(e.daysOfWeek, e.startTime, e.dateEnv, n, r) : [];
		}
	}],
	eventRefiners: {
		daysOfWeek: H,
		startTime: A,
		endTime: A,
		duration: A,
		startRecur: H,
		endRecur: H
	}
});
function Yc(e, t, n, r, i) {
	let a = e ? hr(e) : null, o = I(i.start), s = i.end, c = [];
	for (t && (t.milliseconds < 0 ? s = N(s, 1) : t.milliseconds >= 1e3 * 60 * 60 * 24 && (o = N(o, -1))); o < s;) {
		let e;
		(!a || a[o.getUTCDay()]) && (e = t ? r.add(o, t) : o, c.push(r.createMarker(n.toDate(e)))), o = N(o, 1);
	}
	return c;
}
var Xc = nc({
	name: "change-handler",
	optionChangeHandlers: {
		events(e, t) {
			Zc([e], t);
		},
		eventSources: Zc
	}
});
function Zc(e, t) {
	let n = gr(t.getCurrentData().eventSources);
	if (n.length === 1 && e.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(e[0])) {
		t.dispatch({
			type: "RESET_RAW_EVENTS",
			sourceId: n[0].sourceId,
			rawEvents: e[0]
		});
		return;
	}
	let r = [];
	for (let t of e) {
		let e = !1;
		for (let r = 0; r < n.length; r += 1) if (n[r]._raw === t) {
			n.splice(r, 1), e = !0;
			break;
		}
		e || r.push(t);
	}
	for (let e of n) t.dispatch({
		type: "REMOVE_EVENT_SOURCE",
		sourceId: e.sourceId
	});
	for (let e of r) t.calendarApi.addEventSource(e);
}
function Qc(e, t) {
	t.emitter.trigger("datesSet", Object.assign(Object.assign({}, ja(e.activeRange, t.dateEnv)), { view: t.viewApi }));
}
function $c(e, t) {
	let { emitter: n } = t;
	n.hasHandlers("eventsSet") && n.trigger("eventsSet", ca(e, t));
}
var el = [
	Wc,
	Gc,
	Kc,
	Jc,
	Xc,
	nc({
		name: "misc",
		isLoadingFuncs: [(e) => Tc(e.eventSources)],
		propSetHandlers: {
			dateProfile: Qc,
			eventStore: $c
		}
	})
], tl = class {
	constructor(e, t) {
		this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new dt(this.drain.bind(this));
	}
	request(e, t) {
		this.queue.push(e), this.delayedRunner.request(t);
	}
	pause(e) {
		this.delayedRunner.pause(e);
	}
	resume(e, t) {
		this.delayedRunner.resume(e, t);
	}
	drain() {
		let { queue: e } = this;
		for (; e.length;) {
			let t = [], n;
			for (; n = e.shift();) this.runTask(n), t.push(n);
			this.drained(t);
		}
	}
	runTask(e) {
		this.runTaskOption && this.runTaskOption(e);
	}
	drained(e) {
		this.drainedOption && this.drainedOption(e);
	}
};
function nl(e, t, n) {
	let r;
	return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, V(t.titleFormat || rl(e)), {
		isEndExclusive: e.isRangeAllDay,
		defaultSeparator: t.titleRangeSeparator
	});
}
function rl(e) {
	let { currentRangeUnit: t } = e;
	if (t === "year") return { year: "numeric" };
	if (t === "month") return {
		year: "numeric",
		month: "long"
	};
	let n = vn(e.currentRange.start, e.currentRange.end);
	return n !== null && n > 1 ? {
		year: "numeric",
		month: "short",
		day: "numeric"
	} : {
		year: "numeric",
		month: "long",
		day: "numeric"
	};
}
var il = class {
	constructor() {
		this.resetListeners = /* @__PURE__ */ new Set();
	}
	handleInput(e, t) {
		let n = this.dateEnv;
		if (e !== n && (typeof t == "function" ? this.nowFn = t : n || (this.nowAnchorDate = e.toDate(t ? e.createMarker(t) : e.createNowMarker()), this.nowAnchorQueried = Date.now()), this.dateEnv = e, n)) for (let e of this.resetListeners.values()) e();
	}
	getDateMarker() {
		return this.nowAnchorDate ? this.dateEnv.timestampToMarker(this.nowAnchorDate.valueOf() + (Date.now() - this.nowAnchorQueried)) : this.dateEnv.createMarker(this.nowFn());
	}
	addResetListener(e) {
		this.resetListeners.add(e);
	}
	removeResetListener(e) {
		this.resetListeners.delete(e);
	}
}, al = class {
	constructor(e) {
		this.computeCurrentViewData = B(this._computeCurrentViewData), this.organizeRawLocales = B(Zs), this.buildLocale = B(Qs), this.buildPluginHooks = ic(), this.buildDateEnv = B(ol), this.buildTheme = B(sl), this.parseToolbars = B(Bc), this.buildViewSpecs = B(pc), this.buildDateProfileGenerator = Nn(cl), this.buildViewApi = B(ll), this.buildViewUiProps = Nn(fl), this.buildEventUiBySource = B(ul, G), this.buildEventUiBases = B(dl), this.parseContextBusinessHours = Nn(ml), this.buildTitle = B(nl), this.nowManager = new il(), this.emitter = new qi(), this.actionRunner = new tl(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (e) => {
			this.actionRunner.request(e);
		}, this.props = e, this.actionRunner.pause(), this.nowManager = new il();
		let t = {}, n = this.computeOptionsData(e.optionOverrides, t, e.calendarApi), r = n.calendarOptions.initialView || n.pluginHooks.initialView, i = this.computeCurrentViewData(r, n, e.optionOverrides, t);
		e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(i.options);
		let a = {
			nowManager: this.nowManager,
			dateEnv: n.dateEnv,
			options: n.calendarOptions,
			pluginHooks: n.pluginHooks,
			calendarApi: e.calendarApi,
			dispatch: this.dispatch,
			emitter: this.emitter,
			getCurrentData: this.getCurrentData
		}, o = yc(n.calendarOptions, n.dateEnv, this.nowManager), s = i.dateProfileGenerator.build(o);
		X(s.activeRange, o) || (o = s.currentRange.start);
		for (let e of n.pluginHooks.contextInit) e(a);
		let c = Sc(n.calendarOptions, s, a), l = {
			dynamicOptionOverrides: t,
			currentViewType: r,
			currentDate: o,
			dateProfile: s,
			businessHours: this.parseContextBusinessHours(a),
			eventSources: c,
			eventUiBases: {},
			eventStore: Z(),
			renderableEventStore: Z(),
			dateSelection: null,
			eventSelection: "",
			eventDrag: null,
			eventResize: null,
			selectionConfig: this.buildViewUiProps(a).selectionConfig
		}, u = Object.assign(Object.assign({}, a), l);
		for (let e of n.pluginHooks.reducers) Object.assign(l, e(null, null, u));
		pl(l, a) && this.emitter.trigger("loading", !0), this.state = l, this.updateData(), this.actionRunner.resume();
	}
	resetOptions(e, t) {
		let { props: n } = this;
		t === void 0 ? n.optionOverrides = e : (n.optionOverrides = Object.assign(Object.assign({}, n.optionOverrides || {}), e), this.optionsForRefining.push(...t)), (t === void 0 || t.length) && this.actionRunner.request({ type: "NOTHING" });
	}
	_handleAction(e) {
		let { props: t, state: n, emitter: r } = this, i = bc(n.dynamicOptionOverrides, e), a = this.computeOptionsData(t.optionOverrides, i, t.calendarApi), o = _c(n.currentViewType, e), s = this.computeCurrentViewData(o, a, t.optionOverrides, i);
		t.calendarApi.currentDataManager = this, r.setThisContext(t.calendarApi), r.setOptions(s.options);
		let c = {
			nowManager: this.nowManager,
			dateEnv: a.dateEnv,
			options: a.calendarOptions,
			pluginHooks: a.pluginHooks,
			calendarApi: t.calendarApi,
			dispatch: this.dispatch,
			emitter: r,
			getCurrentData: this.getCurrentData
		}, { currentDate: l, dateProfile: u } = n;
		this.data && this.data.dateProfileGenerator !== s.dateProfileGenerator && (u = s.dateProfileGenerator.build(l)), l = vc(l, e), u = xc(u, e, l, s.dateProfileGenerator), (e.type === "PREV" || e.type === "NEXT" || !X(u.currentRange, l)) && (l = u.currentRange.start);
		let d = Cc(n.eventSources, e, u, c), f = Li(n.eventStore, e, d, u, c), p = Tc(d) && !s.options.progressiveEventRendering && n.renderableEventStore || f, { eventUiSingleBase: m, selectionConfig: h } = this.buildViewUiProps(c), g = this.buildEventUiBySource(d), _ = this.buildEventUiBases(p.defs, m, g), v = {
			dynamicOptionOverrides: i,
			currentViewType: o,
			currentDate: l,
			dateProfile: u,
			eventSources: d,
			eventStore: f,
			renderableEventStore: p,
			selectionConfig: h,
			eventUiBases: _,
			businessHours: this.parseContextBusinessHours(c),
			dateSelection: Ic(n.dateSelection, e),
			eventSelection: Lc(n.eventSelection, e),
			eventDrag: Rc(n.eventDrag, e),
			eventResize: zc(n.eventResize, e)
		}, y = Object.assign(Object.assign({}, c), v);
		for (let t of a.pluginHooks.reducers) Object.assign(v, t(n, e, y));
		let b = pl(n, c), x = pl(v, c);
		!b && x ? r.trigger("loading", !0) : b && !x && r.trigger("loading", !1), this.state = v, t.onAction && t.onAction(e);
	}
	updateData() {
		let { props: e, state: t } = this, n = this.data, r = this.computeOptionsData(e.optionOverrides, t.dynamicOptionOverrides, e.calendarApi), i = this.computeCurrentViewData(t.currentViewType, r, e.optionOverrides, t.dynamicOptionOverrides), a = this.data = Object.assign(Object.assign(Object.assign({
			nowManager: this.nowManager,
			viewTitle: this.buildTitle(t.dateProfile, i.options, r.dateEnv),
			calendarApi: e.calendarApi,
			dispatch: this.dispatch,
			emitter: this.emitter,
			getCurrentData: this.getCurrentData
		}, r), i), t), o = r.pluginHooks.optionChangeHandlers, s = n && n.calendarOptions, c = r.calendarOptions;
		if (s && s !== c) {
			s.timeZone !== c.timeZone && (t.eventSources = a.eventSources = wc(a.eventSources, t.dateProfile, a), t.eventStore = a.eventStore = Ui(a.eventStore, n.dateEnv, a.dateEnv), t.renderableEventStore = a.renderableEventStore = Ui(a.renderableEventStore, n.dateEnv, a.dateEnv));
			for (let e in o) (this.optionsForHandling.indexOf(e) !== -1 || s[e] !== c[e]) && o[e](c[e], a);
		}
		this.optionsForHandling = [], e.onData && e.onData(a);
	}
	computeOptionsData(e, t, n) {
		if (!this.optionsForRefining.length && e === this.stableOptionOverrides && t === this.stableDynamicOptionOverrides) return this.stableCalendarOptionsData;
		let { refinedOptions: r, pluginHooks: i, localeDefaults: a, availableLocaleData: o, extra: s } = this.processRawCalendarOptions(e, t);
		hl(s);
		let c = this.buildDateEnv(r.timeZone, r.locale, r.weekNumberCalculation, r.firstDay, r.weekText, i, o, r.defaultRangeSeparator), l = this.buildViewSpecs(i.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, a), u = this.buildTheme(r, i), d = this.parseToolbars(r, this.stableOptionOverrides, u, l, n);
		return this.stableCalendarOptionsData = {
			calendarOptions: r,
			pluginHooks: i,
			dateEnv: c,
			viewSpecs: l,
			theme: u,
			toolbarConfig: d,
			localeDefaults: a,
			availableRawLocales: o.map
		};
	}
	processRawCalendarOptions(e, t) {
		let { locales: n, locale: r } = dr([
			ir,
			e,
			t
		]), i = this.organizeRawLocales(n), a = i.map, o = this.buildLocale(r || i.defaultCode, a).options, s = this.buildPluginHooks(e.plugins || [], el), c = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rr), ar), or), s.listenerRefiners), s.optionRefiners), l = {}, u = dr([
			ir,
			o,
			e,
			t
		]), d = {}, f = this.currentCalendarOptionsInput, p = this.currentCalendarOptionsRefined, m = !1;
		for (let e in u) this.optionsForRefining.indexOf(e) === -1 && (u[e] === f[e] || sr[e] && e in f && sr[e](f[e], u[e])) ? d[e] = p[e] : c[e] ? (d[e] = c[e](u[e]), m = !0) : l[e] = f[e];
		return m && (this.currentCalendarOptionsInput = u, this.currentCalendarOptionsRefined = d, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = t), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
			rawOptions: this.currentCalendarOptionsInput,
			refinedOptions: this.currentCalendarOptionsRefined,
			pluginHooks: s,
			availableLocaleData: i,
			localeDefaults: o,
			extra: l
		};
	}
	_computeCurrentViewData(e, t, n, r) {
		let i = t.viewSpecs[e];
		if (!i) throw Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
		let { refinedOptions: a, extra: o } = this.processRawViewOptions(i, t.pluginHooks, t.localeDefaults, n, r);
		return hl(o), this.nowManager.handleInput(t.dateEnv, a.now), {
			viewSpec: i,
			options: a,
			dateProfileGenerator: this.buildDateProfileGenerator({
				dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
				nowManager: this.nowManager,
				duration: i.duration,
				durationUnit: i.durationUnit,
				usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
				dateEnv: t.dateEnv,
				calendarApi: this.props.calendarApi,
				slotMinTime: a.slotMinTime,
				slotMaxTime: a.slotMaxTime,
				showNonCurrentDates: a.showNonCurrentDates,
				dayCount: a.dayCount,
				dateAlignment: a.dateAlignment,
				dateIncrement: a.dateIncrement,
				hiddenDays: a.hiddenDays,
				weekends: a.weekends,
				validRangeInput: a.validRange,
				visibleRangeInput: a.visibleRange,
				fixedWeekCount: a.fixedWeekCount
			}),
			viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
		};
	}
	processRawViewOptions(e, t, n, r, i) {
		let a = dr([
			ir,
			e.optionDefaults,
			n,
			r,
			e.optionOverrides,
			i
		]), o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rr), ar), or), ur), t.listenerRefiners), t.optionRefiners), s = {}, c = this.currentViewOptionsInput, l = this.currentViewOptionsRefined, u = !1, d = {};
		for (let e in a) a[e] === c[e] || sr[e] && sr[e](a[e], c[e]) ? s[e] = l[e] : (a[e] === this.currentCalendarOptionsInput[e] || sr[e] && sr[e](a[e], this.currentCalendarOptionsInput[e]) ? e in this.currentCalendarOptionsRefined && (s[e] = this.currentCalendarOptionsRefined[e]) : o[e] ? s[e] = o[e](a[e]) : d[e] = a[e], u = !0);
		return u && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = s), {
			rawOptions: this.currentViewOptionsInput,
			refinedOptions: this.currentViewOptionsRefined,
			extra: d
		};
	}
};
function ol(e, t, n, r, i, a, o, s) {
	let c = Qs(t || o.defaultCode, o.map);
	return new Or({
		calendarSystem: "gregory",
		timeZone: e,
		namedTimeZoneImpl: a.namedTimeZonedImpl,
		locale: c,
		weekNumberCalculation: n,
		firstDay: r,
		weekText: i,
		cmdFormatter: a.cmdFormatter,
		defaultSeparator: s
	});
}
function sl(e, t) {
	return new (t.themeClasses[e.themeSystem] || $)(e);
}
function cl(e) {
	return new (e.dateProfileGeneratorClass || ai)(e);
}
function ll(e, t, n) {
	return new Uc(e, t, n);
}
function ul(e) {
	return W(e, (e) => e.ui);
}
function dl(e, t, n) {
	let r = { "": t };
	for (let t in e) {
		let i = e[t];
		i.sourceId && n[i.sourceId] && (r[t] = n[i.sourceId]);
	}
	return r;
}
function fl(e) {
	let { options: t } = e;
	return {
		eventUiSingleBase: Ai({
			display: t.eventDisplay,
			editable: t.editable,
			startEditable: t.eventStartEditable,
			durationEditable: t.eventDurationEditable,
			constraint: t.eventConstraint,
			overlap: typeof t.eventOverlap == "boolean" ? t.eventOverlap : void 0,
			allow: t.eventAllow,
			backgroundColor: t.eventBackgroundColor,
			borderColor: t.eventBorderColor,
			textColor: t.eventTextColor,
			color: t.eventColor
		}, e),
		selectionConfig: Ai({
			constraint: t.selectConstraint,
			overlap: typeof t.selectOverlap == "boolean" ? t.selectOverlap : void 0,
			allow: t.selectAllow
		}, e)
	};
}
function pl(e, t) {
	for (let n of t.pluginHooks.isLoadingFuncs) if (n(e)) return !0;
	return !1;
}
function ml(e) {
	return Zi(e.options.businessHours, e);
}
function hl(e, t) {
	for (let n in e) console.warn(`Unknown option '${n}'` + (t ? ` for view '${t}'` : ""));
}
var gl = class extends q {
	render() {
		return m("div", { className: "fc-toolbar-chunk" }, ...this.props.widgetGroups.map((e) => this.renderWidgetGroup(e)));
	}
	renderWidgetGroup(e) {
		let { props: t } = this, { theme: n } = this.context, r = [], i = !0;
		for (let a of e) {
			let { buttonName: e, buttonClick: o, buttonText: s, buttonIcon: c, buttonHint: l } = a;
			if (e === "title") i = !1, r.push(m("h2", {
				className: "fc-toolbar-title",
				id: t.titleId
			}, t.title));
			else {
				let i = e === t.activeButton, a = !t.isTodayEnabled && e === "today" || !t.isPrevEnabled && e === "prev" || !t.isNextEnabled && e === "next", u = [`fc-${e}-button`, n.getClass("button")];
				i && u.push(n.getClass("buttonActive")), r.push(m("button", {
					type: "button",
					title: typeof l == "function" ? l(t.navUnit) : l,
					disabled: a,
					"aria-pressed": i,
					className: u.join(" "),
					onClick: o
				}, s || (c ? m("span", {
					className: c,
					role: "img"
				}) : "")));
			}
		}
		return r.length > 1 ? m("div", { className: i && n.getClass("buttonGroup") || "" }, ...r) : r[0];
	}
}, _l = class extends q {
	render() {
		let { model: e, extraClassName: t } = this.props, n = !1, r, i, a = e.sectionWidgets, o = a.center;
		return a.left ? (n = !0, r = a.left) : r = a.start, a.right ? (n = !0, i = a.right) : i = a.end, m("div", { className: [
			t || "",
			"fc-toolbar",
			n ? "fc-toolbar-ltr" : ""
		].join(" ") }, this.renderSection("start", r || []), this.renderSection("center", o || []), this.renderSection("end", i || []));
	}
	renderSection(e, t) {
		let { props: n } = this;
		return m(gl, {
			key: e,
			widgetGroups: t,
			title: n.title,
			navUnit: n.navUnit,
			activeButton: n.activeButton,
			isTodayEnabled: n.isTodayEnabled,
			isPrevEnabled: n.isPrevEnabled,
			isNextEnabled: n.isNextEnabled,
			titleId: n.titleId
		});
	}
}, vl = class extends q {
	constructor() {
		super(...arguments), this.state = { availableWidth: null }, this.handleEl = (e) => {
			this.el = e, J(this.props.elRef, e), this.updateAvailableWidth();
		}, this.handleResize = () => {
			this.updateAvailableWidth();
		};
	}
	render() {
		let { props: e, state: t } = this, { aspectRatio: n } = e, r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"], i = "", a = "";
		return n ? t.availableWidth === null ? a = `${1 / n * 100}%` : i = t.availableWidth / n : i = e.height || "", m("div", {
			"aria-labelledby": e.labeledById,
			ref: this.handleEl,
			className: r.join(" "),
			style: {
				height: i,
				paddingBottom: a
			}
		}, e.children);
	}
	componentDidMount() {
		this.context.addResizeHandler(this.handleResize);
	}
	componentWillUnmount() {
		this.context.removeResizeHandler(this.handleResize);
	}
	updateAvailableWidth() {
		this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
	}
}, yl = class extends Va {
	constructor(e) {
		super(e), this.handleSegClick = (e, t) => {
			let { component: n } = this, { context: r } = n, i = fa(t);
			if (i && n.isValidSegDownEl(e.target)) {
				let a = O(e.target, ".fc-event-forced-url"), o = a ? a.querySelector("a[href]").href : "";
				r.emitter.trigger("eventClick", {
					el: t,
					event: new Q(n.context, i.eventRange.def, i.eventRange.instance),
					jsEvent: e,
					view: r.viewApi
				}), o && !e.defaultPrevented && (window.location.href = o);
			}
		}, this.destroy = wt(e.el, "click", ".fc-event", this.handleSegClick);
	}
}, bl = class extends Va {
	constructor(e) {
		super(e), this.handleEventElRemove = (e) => {
			e === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
		}, this.handleSegEnter = (e, t) => {
			fa(t) && (this.currentSegEl = t, this.triggerEvent("eventMouseEnter", e, t));
		}, this.handleSegLeave = (e, t) => {
			this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", e, t));
		}, this.removeHoverListeners = Tt(e.el, ".fc-event", this.handleSegEnter, this.handleSegLeave);
	}
	destroy() {
		this.removeHoverListeners();
	}
	triggerEvent(e, t, n) {
		let { component: r } = this, { context: i } = r, a = fa(n);
		(!t || r.isValidSegDownEl(t.target)) && i.emitter.trigger(e, {
			el: n,
			event: new Q(i, a.eventRange.def, a.eventRange.instance),
			jsEvent: t,
			view: i.viewApi
		});
	}
}, xl = class extends Fr {
	constructor() {
		super(...arguments), this.buildViewContext = B(Pr), this.buildViewPropTransformers = B(Cl), this.buildToolbarProps = B(Sl), this.headerRef = g(), this.footerRef = g(), this.interactionsStore = {}, this.state = { viewLabelId: xt() }, this.registerInteractiveComponent = (e, t) => {
			let n = Ha(e, t), r = [yl, bl].concat(this.props.pluginHooks.componentInteractions).map((e) => new e(n));
			this.interactionsStore[e.uid] = r, Wa[e.uid] = n;
		}, this.unregisterInteractiveComponent = (e) => {
			let t = this.interactionsStore[e.uid];
			if (t) {
				for (let e of t) e.destroy();
				delete this.interactionsStore[e.uid];
			}
			delete Wa[e.uid];
		}, this.resizeRunner = new dt(() => {
			this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", { view: this.props.viewApi });
		}), this.handleWindowResize = (e) => {
			let { options: t } = this.props;
			t.handleWindowResize && e.target === window && this.resizeRunner.request(t.windowResizeDelay);
		};
	}
	render() {
		let { props: e } = this, { toolbarConfig: t, options: n } = e, r = !1, i = "", a;
		e.isHeightAuto || e.forPrint ? i = "" : n.height == null ? n.contentHeight == null ? a = Math.max(n.aspectRatio, .5) : i = n.contentHeight : r = !0;
		let o = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.nowManager, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), s = t.header && t.header.hasTitle ? this.state.viewLabelId : void 0;
		return m(K.Provider, { value: o }, m(Ga, { unit: "day" }, (n) => {
			let o = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, n, e.viewTitle);
			return m(_, null, t.header && m(_l, Object.assign({
				ref: this.headerRef,
				extraClassName: "fc-header-toolbar",
				model: t.header,
				titleId: s
			}, o)), m(vl, {
				liquid: r,
				height: i,
				aspectRatio: a,
				labeledById: s
			}, this.renderView(e), this.buildAppendContent()), t.footer && m(_l, Object.assign({
				ref: this.footerRef,
				extraClassName: "fc-footer-toolbar",
				model: t.footer,
				titleId: ""
			}, o)));
		}));
	}
	componentDidMount() {
		let { props: e } = this;
		this.calendarInteractions = e.pluginHooks.calendarInteractions.map((t) => new t(e)), window.addEventListener("resize", this.handleWindowResize);
		let { propSetHandlers: t } = e.pluginHooks;
		for (let n in t) t[n](e[n], e);
	}
	componentDidUpdate(e) {
		let { props: t } = this, { propSetHandlers: n } = t.pluginHooks;
		for (let r in n) t[r] !== e[r] && n[r](t[r], t);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
		for (let e of this.calendarInteractions) e.destroy();
		this.props.emitter.trigger("_unmount");
	}
	buildAppendContent() {
		let { props: e } = this;
		return m(_, {}, ...e.pluginHooks.viewContainerAppends.map((t) => t(e)));
	}
	renderView(e) {
		let { pluginHooks: t } = e, { viewSpec: n } = e, r = {
			dateProfile: e.dateProfile,
			businessHours: e.businessHours,
			eventStore: e.renderableEventStore,
			eventUiBases: e.eventUiBases,
			dateSelection: e.dateSelection,
			eventSelection: e.eventSelection,
			eventDrag: e.eventDrag,
			eventResize: e.eventResize,
			isHeightAuto: e.isHeightAuto,
			forPrint: e.forPrint
		}, i = this.buildViewPropTransformers(t.viewPropsTransformers);
		for (let t of i) Object.assign(r, t.transform(r, e));
		let a = n.component;
		return m(a, Object.assign({}, r));
	}
};
function Sl(e, t, n, r, i, a) {
	let o = n.build(i, void 0, !1), s = n.buildPrev(t, r, !1), c = n.buildNext(t, r, !1);
	return {
		title: a,
		activeButton: e.type,
		navUnit: e.singleUnit,
		isTodayEnabled: o.isValid && !X(t.currentRange, i),
		isPrevEnabled: s.isValid,
		isNextEnabled: c.isValid
	};
}
function Cl(e) {
	return e.map((e) => new e());
}
var wl = class extends qa {
	constructor(e, t = {}) {
		super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (e) => {
			switch (e.type) {
				case "SET_EVENT_DRAG":
				case "SET_EVENT_RESIZE": this.renderRunner.tryDrain();
			}
		}, this.handleData = (e) => {
			this.currentData = e, this.renderRunner.request(e.calendarOptions.rerenderDelay);
		}, this.handleRenderRequest = () => {
			if (this.isRendering) {
				this.isRendered = !0;
				let { currentData: e } = this;
				Ar(() => {
					pe(m(Ba, {
						options: e.calendarOptions,
						theme: e.theme,
						emitter: e.emitter
					}, (t, n, r, i) => (this.setClassNames(t), this.setHeight(n), m(Hr.Provider, { value: this.customContentRenderId }, m(xl, Object.assign({
						isHeightAuto: r,
						forPrint: i
					}, e))))), this.el);
				});
			} else this.isRendered && (this.isRendered = !1, pe(null, this.el), this.setClassNames([]), this.setHeight(""));
		}, it(e), this.el = e, this.renderRunner = new dt(this.handleRenderRequest), new al({
			optionOverrides: t,
			calendarApi: this,
			onAction: this.handleAction,
			onData: this.handleData
		});
	}
	render() {
		let e = this.isRendering;
		e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
	}
	destroy() {
		this.isRendering && (this.isRendering = !1, this.renderRunner.request());
	}
	updateSize() {
		Ar(() => {
			super.updateSize();
		});
	}
	batchRendering(e) {
		this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
	}
	pauseRendering() {
		this.renderRunner.pause("pauseRendering");
	}
	resumeRendering() {
		this.renderRunner.resume("pauseRendering", !0);
	}
	resetOptions(e, t) {
		this.currentDataManager.resetOptions(e, t);
	}
	setClassNames(e) {
		if (!M(e, this.currentClassNames)) {
			let { classList: t } = this.el;
			for (let e of this.currentClassNames) t.remove(e);
			for (let n of e) t.add(n);
			this.currentClassNames = e;
		}
	}
	setHeight(e) {
		vt(this.el, "height", e);
	}
};
//#endregion
export { ca as $, bs as $n, wa as $t, Yo as A, Pn as An, U as At, Qt as B, Ja as Bn, xo as Bt, Ga as C, Zo as Cn, F as Ct, cs as D, Dn, jt as Dt, wo as E, es as En, vn as Et, Gr as F, Vt as Fn, kn as Ft, ra as G, Zr as Gn, yt as Gt, dn as H, Nt as Hn, io as Ht, K as I, Dr as In, An as It, an as J, ft as Jn, xi as Jt, _t as K, Qr as Kn, uo as Kt, Is as L, Zi as Ln, jn as Lt, Es as M, Nn as Mn, mt as Mt, Ho as N, Ci as Nn, Bt as Nt, ko as O, W as On, O as Ot, Wo as P, en as Pn, Ar as Pt, jo as Q, hs as Qn, ds as Qt, Eo as R, Di as Rn, fs as Rt, Os as S, Wt as Sn, ii as St, ls as T, G as Tn, fn as Tt, It as U, X as Un, fa as Ut, P as V, Ft as Vn, ro as Vt, Pt as W, $r as Wn, Ao as Wt, on as X, ps as Xn, mo as Xt, j as Y, ln as Yn, vs as Yt, Io as Z, Fs as Zn, ys as Zt, Ts as _, Po as _n, Za as _t, qa as a, cn as an, I as ar, ji as at, Vs as b, Qo as bn, Ai as bt, ai as c, ua as cn, Pa as cr, br as ct, qo as d, H as dn, _ as dr, zo as dt, xa as en, Ia as er, Ca as et, Jo as f, rt as fn, g as fr, vo as ft, qi as g, Ya as gn, Ro as gt, To as h, Xr as hn, ni as ht, Ns as i, xt as in, ha as ir, Sr as it, to as j, Fn as jn, ht as jt, Cs as k, B as kn, Mt as kt, As as l, js as ln, Dt as lr, Ws as lt, Lo as m, Ua as mn, us as mt, nc as n, Ss as nn, J as nr, co as nt, Y as o, Mo as on, Xa as or, Rt as ot, dt as p, Wa as pn, m as pr, yo as pt, Zt as q, fr as qn, Qa as qt, q as r, xs as rn, la as rr, ba as rt, Do as s, k as sn, $i as sr, Ut as st, wl as t, ao as tn, gs as tr, On as tt, Go as u, _s as un, sn as ur, _o as ut, Q as v, M as vn, A as vt, So as w, ri as wn, $a as wt, Oo as x, Oa as xn, V as xt, Va as y, ms as yn, Z as yt, N as z, Lt as zn, Ra as zt };

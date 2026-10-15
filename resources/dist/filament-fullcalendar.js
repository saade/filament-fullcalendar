//#region node_modules/fullcalendar/node_modules/preact/dist/preact.module.js
var e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h = {}, g = [], _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, v = Array.isArray;
function y(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function b(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function x(t, n, r) {
	var i, a, o, s = {};
	for (o in n) o == "key" ? i = n[o] : o == "ref" ? a = n[o] : s[o] = n[o];
	if (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (o in t.defaultProps) s[o] === void 0 && (s[o] = t.defaultProps[o]);
	return S(t, s, i, a, null);
}
function S(e, r, i, a, o) {
	var s = {
		type: e,
		props: r,
		key: i,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: o ?? ++n,
		__i: -1,
		__u: 0
	};
	return o == null && t.vnode != null && t.vnode(s), s;
}
function C() {
	return { current: null };
}
function w(e) {
	return e.children;
}
function T(e, t) {
	this.props = e, this.context = t;
}
function ee(e, t) {
	if (t == null) return e.__ ? ee(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? ee(e) : null;
}
function E(e) {
	if (e.__P && e.__d) {
		var n = e.__v, r = n.__e, i = [], a = [], o = y({}, n);
		o.__v = n.__v + 1, t.vnode && t.vnode(o), fe(e.__P, o, n, e.__n, e.__P.namespaceURI, 32 & n.__u ? [r] : null, i, r ?? ee(n), !!(32 & n.__u), a), o.__v = n.__v, o.__.__k[o.__i] = o, me(i, o, a), n.__e = n.__ = null, o.__e != r && te(o);
	}
}
function te(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), te(e);
}
function ne(e) {
	(!e.__d && (e.__d = !0) && r.push(e) && !re.__r++ || i != t.debounceRendering) && ((i = t.debounceRendering) || a)(re);
}
function re() {
	try {
		for (var e, t = 1; r.length;) r.length > t && r.sort(o), e = r.shift(), t = r.length, E(e);
	} finally {
		r.length = re.__r = 0;
	}
}
function ie(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, _, v, y = r && r.__k || g, b = t.length;
	for (c = ae(n, t, y, c, b), d = 0; d < b; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && y[p.__i] || h, p.__i = d, v = fe(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && _e(f.ref, null, p), u.push(p.ref, p.__c || m, p)), _ == null && m != null && (_ = m), 4 & p.__u ? (c = oe(p, c, e), f.__e && (f.__e = null)) : typeof p.type == "function" && v !== void 0 ? c = v : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = _, c;
}
function ae(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = S(null, o, null, null, null) : v(o) ? o = e.__k[a] = S(w, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = S(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = ce(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = ee(s)), ve(s, s));
	return r;
}
function oe(e, t, n) {
	var r, i;
	if (typeof e.type == "function") {
		for (r = e.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = e, t = oe(r[i], t, n));
		return t;
	}
	e.__e != t && (t && e.type && !t.parentNode && (t = ee(e)), t = n.insertBefore(e.__e, t || null));
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function se(e, t) {
	return t ||= [], e == null || typeof e == "boolean" || (v(e) ? e.some(function(e) {
		se(e, t);
	}) : t.push(e)), t;
}
function ce(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && !(2 & l.__u);
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function le(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || _.test(t) ? n : n + "px";
}
function ue(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") {
		if (typeof n == "string") e.style.cssText = n;
		else {
			if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || le(e.style, t, "");
			if (n) for (t in n) r && n[t] == r[t] || le(e.style, t, n[t]);
		}
	} else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(u, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n[l] = r[l] : (n[l] = d, e.addEventListener(t, a ? p : f, a)) : e.removeEventListener(t, a ? p : f, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function de(e) {
	return function(n) {
		if (this.l) {
			var r = this.l[n.type + e];
			if (n[c] == null) n[c] = d++;
			else if (n[c] < r[l]) return;
			return r(t.event ? t.event(n) : n);
		}
	};
}
function fe(e, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, _, x, S, C, E, te, ne, re, ae, oe, se, ce = n.type;
	if (n.constructor !== void 0) return null;
	128 & r.__u && (l = !!(32 & r.__u), o = [c = n.__e = r.__e]), (d = t.__b) && d(n);
	n: if (typeof ce == "function") {
		f = s.length;
		try {
			if (C = n.props, E = ce.prototype && ce.prototype.render, te = (d = ce.contextType) && i[d.__c], ne = d ? te ? te.props.value : d.__ : i, r.__c ? S = (p = n.__c = r.__c).__ = p.__E : (E ? n.__c = p = new ce(C, ne) : (n.__c = p = new T(C, ne), p.constructor = ce, p.render = ye), te && te.sub(p), p.state || (p.state = {}), p.__n = i, m = p.__d = !0, p.__h = [], p._sb = []), E && p.__s == null && (p.__s = p.state), E && ce.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = y({}, p.__s)), y(p.__s, ce.getDerivedStateFromProps(C, p.__s))), h = p.props, _ = p.state, p.__v = n, m) E && ce.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), E && p.componentDidMount != null && p.__h.push(p.componentDidMount);
			else {
				if (E && ce.getDerivedStateFromProps == null && C !== h && p.componentWillReceiveProps != null && p.componentWillReceiveProps(C, ne), n.__v == r.__v || !p.__e && p.shouldComponentUpdate != null && !1 === p.shouldComponentUpdate(C, p.__s, ne)) {
					n.__v != r.__v && (p.props = C, p.state = p.__s, p.__d = !1), n.__e = r.__e, n.__k = r.__k, n.__k.some(function(e) {
						e && (e.__ = n);
					}), g.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && s.push(p), c = ee(r);
					break n;
				}
				p.componentWillUpdate != null && p.componentWillUpdate(C, p.__s, ne), E && p.componentDidUpdate != null && p.__h.push(function() {
					p.componentDidUpdate(h, _, x);
				});
			}
			if (p.context = ne, p.props = C, p.__P = e, p.__e = !1, re = t.__r, ae = 0, E) p.state = p.__s, p.__d = !1, re && re(n), d = p.render(p.props, p.state, p.context), g.push.apply(p.__h, p._sb), p._sb = [];
			else do
				p.__d = !1, re && re(n), d = p.render(p.props, p.state, p.context), p.state = p.__s;
			while (p.__d && ++ae < 25);
			p.state = p.__s, p.getChildContext != null && (i = y(y({}, i), p.getChildContext())), E && !m && p.getSnapshotBeforeUpdate != null && (x = p.getSnapshotBeforeUpdate(h, _)), oe = d != null && d.type === w && d.key == null ? he(d.props.children) : d, c = ie(e, v(oe) ? oe : [oe], n, r, i, a, o, s, c, l, u), p.base = n.__e, n.__u &= -161, p.__h.length && s.push(p), S && (p.__E = p.__ = null);
		} catch (e) {
			if (s.length = f, n.__v = null, l || o != null) {
				if (e.then) {
					for (n.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling;) c = c.nextSibling;
					o != null && (o[o.indexOf(c)] = null), n.__e = c;
				} else if (o != null) for (se = o.length; se--;) b(o[se]);
			} else n.__e = r.__e;
			n.__k ??= r.__k || [], e.then || pe(n), t.__e(e, n, r);
		}
	} else o == null && n.__v == r.__v ? (n.__k = r.__k, n.__e = r.__e) : c = n.__e = ge(r.__e, n, r, i, a, o, s, l, u);
	return (d = t.diffed) && d(n), 128 & n.__u ? void 0 : c;
}
function pe(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(pe));
}
function me(e, n, r) {
	for (var i = 0; i < r.length; i++) _e(r[i], r[++i], r[++i]);
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
function he(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : v(e) ? e.map(he) : e.constructor === void 0 ? y({}, e) : null;
}
function ge(n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, g, _, y, x = i.props || h, S = r.props, C = r.type;
	if (C == "svg" ? o = "http://www.w3.org/2000/svg" : C == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o ||= "http://www.w3.org/1999/xhtml", s != null) {
		for (d = 0; d < s.length; d++) if ((g = s[d]) && "setAttribute" in g == !!C && (C ? g.localName == C : g.nodeType == 3)) {
			n = g, s[d] = null;
			break;
		}
	}
	if (n == null) {
		if (C == null) return document.createTextNode(S);
		n = document.createElementNS(o, C, S.is && S), l &&= (t.__m && t.__m(r, s), !1), s = null;
	}
	if (C == null) x === S || l && n.data == S || (n.data = S);
	else {
		if (s = C == "textarea" && S.defaultValue != null ? null : s && e.call(n.childNodes), !l && s != null) for (x = {}, d = 0; d < n.attributes.length; d++) x[(g = n.attributes[d]).name] = g.value;
		for (d in x) g = x[d], d == "dangerouslySetInnerHTML" ? p = g : d == "children" || d in S || d == "value" && "defaultValue" in S || d == "checked" && "defaultChecked" in S || ue(n, d, null, g, o);
		for (d in S) g = S[d], d == "children" ? m = g : d == "dangerouslySetInnerHTML" ? f = g : d == "value" ? _ = g : d == "checked" ? y = g : l && typeof g != "function" || x[d] === g || ue(n, d, g, x[d], o);
		if (f) l || p && (f.__html == p.__html || f.__html == n.innerHTML) || (n.innerHTML = f.__html), r.__k = [];
		else if (p && (n.innerHTML = ""), ie(r.type == "template" ? n.content : n, v(m) ? m : [m], r, i, a, C == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, s, c, s ? s[0] : i.__k && ee(i, 0), l, u), s != null) for (d = s.length; d--;) b(s[d]);
		l && C != "textarea" || (d = "value", C == "progress" && _ == null ? n.removeAttribute("value") : _ != null && (_ !== n[d] || C == "progress" && !_ || C == "option" && _ != x[d]) && ue(n, d, _, x[d], o), d = "checked", y != null && y != n[d] && ue(n, d, y, x[d], o));
	}
	return n;
}
function _e(e, n, r) {
	try {
		if (typeof e == "function") {
			var i = typeof e.__u == "function";
			i && e.__u(), i && n == null || (e.__u = e(n));
		} else e.current = n;
	} catch (e) {
		t.__e(e, r);
	}
}
function ve(e, n, r) {
	var i, a;
	if (t.unmount && t.unmount(e), (i = e.ref) && (i.current && i.current != e.__e || _e(i, null, n)), (i = e.__c) != null) {
		if (i.componentWillUnmount) try {
			i.componentWillUnmount();
		} catch (e) {
			t.__e(e, n);
		}
		i.base = i.__P = i.__n = null;
	}
	if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && ve(i[a], n, r || typeof e.type != "function");
	r || b(e.__e), e.__c = e.__ = e.__e = void 0;
}
function ye(e, t, n) {
	return this.constructor(e, n);
}
function be(n, r, i) {
	var a, o, s, c;
	r == document && (r = document.documentElement), t.__ && t.__(n, r), o = (a = typeof i == "function") ? null : i && i.__k || r.__k, s = [], c = [], fe(r, n = (!a && i || r).__k = x(w, null, [n]), o || h, h, r.namespaceURI, !a && i ? [i] : o ? null : r.firstChild ? e.call(r.childNodes) : null, s, !a && i ? i : o ? o.__e : r.firstChild, a, c), me(s, n, c), n.props.children = null;
}
function xe(e) {
	function t(e) {
		var n, r;
		return this.getChildContext || (n = /* @__PURE__ */ new Set(), (r = {})[t.__c] = this, this.getChildContext = function() {
			return r;
		}, this.componentWillUnmount = function() {
			n = null;
		}, this.shouldComponentUpdate = function(e) {
			this.props.value != e.value && n.forEach(function(e) {
				e.__e = !0, ne(e);
			});
		}, this.sub = function(e) {
			n.add(e);
			var t = e.componentWillUnmount;
			e.componentWillUnmount = function() {
				n && n.delete(e), t && t.call(e);
			};
		}), e.children;
	}
	return t.__c = "__cC" + m++, t.__ = e, t.Provider = t.__l = (t.Consumer = function(e, t) {
		return e.children(t);
	}).contextType = t, t;
}
e = g.slice, t = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, n = 0, T.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = y({}, this.state);
	typeof e == "function" && (e = e(y({}, n), this.props)), e && y(n, e), e != null && this.__v && (t && this._sb.push(t), ne(this));
}, T.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), ne(this));
}, T.prototype.render = w, r = [], a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, re.__r = 0, s = Math.random().toString(8), c = "__d" + s, l = "__a" + s, u = /(PointerCapture)$|Capture$/i, d = 0, f = de(!1), p = de(!0), m = 0;
//#endregion
//#region node_modules/fullcalendar/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var Se = 0;
Array.isArray;
function D(e, n, r, i, a, o) {
	n ||= {};
	var s, c, l = n;
	if ("ref" in l) for (c in l = {}, n) c == "ref" ? s = n[c] : l[c] = n[c];
	var u = {
		type: e,
		props: l,
		key: r,
		ref: s,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --Se,
		__i: -1,
		__u: 0,
		__source: a,
		__self: o
	};
	if (typeof e == "function" && (s = e.defaultProps)) for (c in s) l[c] === void 0 && (l[c] = s[c]);
	return t.vnode && t.vnode(u), u;
}
//#endregion
//#region node_modules/fullcalendar/node_modules/preact/hooks/dist/hooks.module.js
var Ce, we, Te, Ee = [], De = t, Oe = De.__b, ke = De.__r, Ae = De.diffed, je = De.__c, Me = De.unmount, Ne = De.__;
function Pe() {
	for (var e; e = Ee.shift();) {
		var t = e.__H;
		if (e.__P && t) try {
			t.__h.some(Le), t.__h.some(Re), t.__h = [];
		} catch (n) {
			t.__h = [], De.__e(n, e.__v);
		}
	}
}
De.__b = function(e) {
	Ce = null, Oe && Oe(e);
}, De.__ = function(e, t) {
	e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ne && Ne(e, t);
}, De.__r = function(e) {
	ke && ke(e);
	var t = (Ce = e.__c).__H;
	t && (we === Ce ? (t.__h = [], Ce.__h = [], t.__.some(function(e) {
		e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
	})) : (t.__h.some(Le), t.__h.some(Re), t.__h = [])), we = Ce;
}, De.diffed = function(e) {
	Ae && Ae(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && (Ee.push(t) !== 1 && Te === De.requestAnimationFrame || ((Te = De.requestAnimationFrame) || Ie)(Pe)), t.__H.__.some(function(e) {
		e.u &&= (e.__H = e.u, void 0);
	})), we = Ce = null;
}, De.__c = function(e, t) {
	t.some(function(e) {
		try {
			e.__h.some(Le), e.__h = e.__h.filter(function(e) {
				return !e.__ || Re(e);
			});
		} catch (n) {
			t.some(function(e) {
				e.__h &&= [];
			}), t = [], De.__e(n, e.__v);
		}
	}), je && je(e, t);
}, De.unmount = function(e) {
	Me && Me(e);
	var t, n = e.__c;
	n && n.__H && (n.__H.__.some(function(e) {
		try {
			Le(e);
		} catch (e) {
			t = e;
		}
	}), n.__H = void 0, t && De.__e(t, n.__v));
};
var Fe = typeof requestAnimationFrame == "function";
function Ie(e) {
	var t, n = function() {
		clearTimeout(r), Fe && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	Fe && (t = requestAnimationFrame(n));
}
function Le(e) {
	var t = Ce, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), Ce = t;
}
function Re(e) {
	var t = Ce;
	e.__c = e.__(), Ce = t;
}
//#endregion
//#region node_modules/fullcalendar/node_modules/preact/compat/dist/compat.module.js
function ze(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function Be(e, t) {
	for (var n in e) if (n !== "__source" && !(n in t)) return !0;
	for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1;
}
function Ve(e, t) {
	this.props = e, this.context = t;
}
(Ve.prototype = new T()).isPureReactComponent = !0, Ve.prototype.shouldComponentUpdate = function(e, t) {
	return Be(this.props, e) || Be(this.state, t);
};
var He = t.__b;
t.__b = function(e) {
	e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), He && He(e);
}, typeof Symbol < "u" && Symbol.for;
var Ue = t.__e;
t.__e = function(e, t, n, r) {
	if (e.then) {
		for (var i, a = t; a = a.__;) if ((i = a.__c) && i.__c) return t.__e ?? (t.__e = n.__e, t.__k = n.__k || []), i.__c(e, t);
	}
	Ue(e, t, n, r);
};
var We = t.unmount;
function Ge(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(e) {
		typeof e.__c == "function" && e.__c();
	}), e.__c.__H = null), (e = ze({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(e) {
		return Ge(e, t, n);
	})), e;
}
function Ke(e, t, n) {
	return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
		return Ke(e, t, n);
	}), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function qe() {
	this.__u = 0, this.o = null, this.__b = null;
}
function Je(e) {
	var t = e.__ && e.__.__c;
	return t && t.__a && t.__a(e);
}
function Ye() {
	this.i = null, this.l = null;
}
t.unmount = function(e) {
	var t = e.__c;
	t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), We && We(e);
}, (qe.prototype = new T()).__c = function(e, t) {
	var n = t.__c, r = this;
	r.o ??= [], r.o.push(n);
	var i = Je(r.__v), a = !1, o = function() {
		a || r.__z || (a = !0, n.__R = null, i ? i(c) : c());
	};
	n.__R = o;
	var s = n.__P;
	n.__P = null;
	var c = function() {
		if (!--r.__u) {
			if (r.state.__a) {
				var e = r.state.__a;
				r.__v.__k[0] = Ke(e, e.__c.__P, e.__c.__O);
			}
			var t;
			for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = s, t.forceUpdate();
		}
	};
	r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(o, o);
}, qe.prototype.componentWillUnmount = function() {
	this.o = [];
}, qe.prototype.render = function(e, t) {
	if (this.__b) {
		if (this.__v.__k) {
			var n = document.createElement("div"), r = this.__v.__k[0].__c;
			this.__v.__k[0] = Ge(this.__b, n, r.__O = r.__P);
		}
		this.__b = null;
	}
	var i = t.__a && x(w, null, e.fallback);
	return i && (i.__u &= -33), [x(w, null, t.__a ? null : e.children), i];
};
var Xe = function(e, t, n) {
	if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n;) {
		for (; n.length > 3;) n.pop()();
		if (n[1] < n[0]) break;
		e.i = n = n[2];
	}
};
function Ze(e) {
	return this.getChildContext = function() {
		return e.context;
	}, e.children;
}
function Qe(e) {
	var t = this, n = e.h;
	if (t.componentWillUnmount = function() {
		be(null, t.v), t.v = null, t.h = null;
	}, t.h && t.h !== n && t.componentWillUnmount(), !t.v) {
		for (var r = t.__v; r !== null && !r.__m && r.__ !== null;) r = r.__;
		t.h = n, t.v = {
			nodeType: 1,
			parentNode: n,
			childNodes: [],
			__k: { __m: r.__m },
			contains: function() {
				return !0;
			},
			namespaceURI: n.namespaceURI,
			insertBefore: function(e, n) {
				this.childNodes.push(e), t.h.insertBefore(e, n);
			},
			removeChild: function(e) {
				this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.h.removeChild(e);
			}
		};
	}
	be(x(Ze, { context: t.context }, e.__v), t.v);
}
function $e(e, t) {
	var n = x(Qe, {
		__v: e,
		h: t
	});
	return n.containerInfo = t, n;
}
(Ye.prototype = new T()).__a = function(e) {
	var t = this, n = Je(t.__v), r = t.l.get(e);
	return r[0]++, function(i) {
		var a = function() {
			t.props.revealOrder ? (r.push(i), Xe(t, e, r)) : i();
		};
		n ? n(a) : a();
	};
}, Ye.prototype.render = function(e) {
	this.i = null, this.l = /* @__PURE__ */ new Map();
	var t = se(e.children);
	e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
	for (var n = t.length; n--;) this.l.set(t[n], this.i = [
		1,
		0,
		this.i
	]);
	return e.children;
}, Ye.prototype.componentDidUpdate = Ye.prototype.componentDidMount = function() {
	var e = this;
	this.l.forEach(function(t, n) {
		Xe(e, n, t);
	});
};
var et = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, tt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, nt = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, rt = /[A-Z0-9]/g, it = typeof document < "u", at = function(e) {
	return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
function ot(e, t, n) {
	return t.__k ?? (t.textContent = ""), be(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
T.prototype.isReactComponent = !0, [
	"componentWillMount",
	"componentWillReceiveProps",
	"componentWillUpdate"
].forEach(function(e) {
	Object.defineProperty(T.prototype, e, {
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
var st = t.event;
t.event = function(e) {
	return st && (e = st(e)), e.persist = function() {}, e.isPropagationStopped = function() {
		return this.cancelBubble;
	}, e.isDefaultPrevented = function() {
		return this.defaultPrevented;
	}, e.nativeEvent = e;
};
var ct = {
	configurable: !0,
	get: function() {
		return this.class;
	}
}, lt = t.vnode;
t.vnode = function(e) {
	typeof e.type == "string" && function(e) {
		var t = e.props, n = e.type, r = {}, i = n.indexOf("-") == -1;
		for (var a in t) {
			var o = t[a];
			if (!(a === "value" && "defaultValue" in t && o == null || it && a === "children" && n === "noscript" || a === "class" || a === "className")) {
				var s = a.toLowerCase();
				a === "defaultValue" && "value" in t && t.value == null ? a = "value" : a === "download" && !0 === o ? o = "" : s === "translate" && o === "no" ? o = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || at(t.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : nt.test(a) && (a = s) : s = a = "oninput" : i && tt.test(a) ? a = a.replace(rt, "-$&").toLowerCase() : o === null && (o = void 0), s === "oninput" && r[a = s] && (a = "oninputCapture"), r[a] = o;
			}
		}
		n == "select" && (r.multiple && Array.isArray(r.value) && (r.value = se(t.children).forEach(function(e) {
			e.props.selected = r.value.indexOf(e.props.value) != -1;
		})), r.defaultValue != null && (r.value = se(t.children).forEach(function(e) {
			e.props.selected = r.multiple ? r.defaultValue.indexOf(e.props.value) != -1 : r.defaultValue == e.props.value;
		}))), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", ct)) : t.className && (r.class = r.className = t.className), e.props = r;
	}(e), e.$$typeof = et, lt && lt(e);
};
var ut = t.__r;
t.__r = function(e) {
	ut && ut(e), e.__c;
};
var dt = t.diffed;
t.diffed = function(e) {
	dt && dt(e);
	var t = e.props, n = e.__e;
	n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
function ft(e) {
	return !!e && e.$$typeof === et;
}
function pt(e) {
	return !!e.__k && (be(null, e), !0);
}
var mt = function(e, n) {
	var r, i = t.debounceRendering;
	t.debounceRendering = function(e) {
		r = e;
	};
	try {
		var a = e(n);
		return r && r(), a;
	} finally {
		t.debounceRendering = i;
	}
};
//#endregion
//#region node_modules/fullcalendar/node_modules/preact/compat/client.mjs
function ht(e) {
	return {
		render: function(t) {
			ot(t, e);
		},
		unmount: function() {
			pt(e);
		}
	};
}
//#endregion
//#region node_modules/temporal-polyfill/chunks/root.js
var gt = globalThis.Temporal, _t = (e, t) => `Non-positive ${e}: ${t}`, vt = (e, t) => `Non-finite ${e}: ${t}`, yt = (e) => `Cannot convert bigint to ${e}`, bt = "Invalid object", xt = (e, t, n, r) => St(e, t) + `; must be between ${n}-${r}`, St = (e, t) => `Invalid ${e}: ${t}`, Ct = 1e3, wt = 1e6, Tt = 1e9, Et = 6e10, Dt = 36e11;
function Ot(e) {
	return e === void 0 ? Object.create(null) : Ft(e);
}
function kt(e, t = "number") {
	if (typeof e == "bigint") throw TypeError(yt(t));
	if (e = Number(e), !Number.isFinite(e)) throw RangeError(vt(t, e));
	return e;
}
function At(e, t) {
	return Math.trunc(kt(e, t)) || 0;
}
function jt(e, t) {
	return Mt(At(e, t), t);
}
function Mt(e, t = "number") {
	if (e <= 0) throw RangeError(_t(t, e));
	return e;
}
function Nt(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function Pt(e) {
	return e !== null && (typeof e == "object" || typeof e == "function");
}
function Ft(e) {
	if (!Pt(e)) throw TypeError(bt);
	return e;
}
//#endregion
//#region node_modules/temporal-polyfill/chunks/internal.js
var It = St, Lt = (e) => `Missing ${e}`, Rt = (e, t, n) => St(e, t) + "; must be " + Object.keys(n).join(), zt = "Cannot use valueOf", Bt = "Invalid calling context", Vt = (e, t) => `Unknown calendar ${e}; might need ${t}`, Ht = (e) => St("TimeZone", e), Ut = (e) => `Invalid substring: ${e}`, Wt = Nt;
function Gt(e) {
	throw RangeError(e);
}
function Kt(e) {
	throw TypeError(e);
}
function qt(e, t, n, r, i) {
	return Jt(t, ((e, t) => {
		let n = e[t];
		return n === void 0 && Kt(Lt(t)), n;
	})(e, t), n, r, i);
}
function Jt(e, t, n, r, i, a) {
	let o = Wt(t, n, r);
	return i && t !== o && Gt(((e, t, n, r, i) => i ? xt(e, i[t], i[n], i[r]) : xt(e, t, n, r))(e, t, n, r, a)), o;
}
function Yt(e, t = Map) {
	let n = new t();
	return (t, ...r) => {
		if (n.has(t)) return n.get(t);
		let i = e(t, ...r);
		return n.set(t, i), i;
	};
}
var Xt = (e) => Zt({ name: e }, 1), Zt = (e, t) => $t((e) => ({
	value: e,
	configurable: 1,
	writable: !t
}), e), Qt = (e) => ({ [Symbol.toStringTag]: {
	value: e,
	configurable: 1
} });
function $t(e, t) {
	let n = {};
	for (let r in t) n[r] = e(t[r], r);
	return n;
}
function en(e, t) {
	let n = {};
	for (let r of e) n[r] = t;
	return n;
}
function tn(e) {
	let t = {};
	for (let n of e) t[n] = (e) => e[n];
	return t;
}
function nn(e, t, n = Object.create(null)) {
	for (let r of e) n[r] = t[r];
	return n;
}
function rn(e, ...t) {
	return (...n) => e(...t, ...n);
}
function an() {}
function on(e) {
	return e[0].toUpperCase() + e.substring(1);
}
function sn(e) {
	return RegExp(`^${e}$`, "i");
}
function cn(e) {
	return parseInt(e.padEnd(9, "0"));
}
function ln(e) {
	return e && e !== "+" ? -1 : 1;
}
function un(e) {
	return e === void 0 ? 0 : parseInt(e);
}
function dn(e, t) {
	return String(t).padStart(e, "0");
}
var fn = /*@__PURE__*/ rn(dn, 2);
function pn(e, t) {
	return Math.sign(e - t);
}
function mn(e, t) {
	let n = e / t;
	return e % t < 0n ? n - 1n : n;
}
function hn(e, t) {
	let n = mn(e, t);
	return [n, e - n * t];
}
function gn(e, t) {
	return [Math.floor(e / t), _n(e, t)];
}
function _n(e, t) {
	return (e % t + t) % t;
}
function vn(e, t) {
	return Math.trunc(e / t) || 0;
}
function yn(e) {
	return Math.abs(e % 1) === .5;
}
function bn(e) {
	let t = e.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
	return t === "bc" || t === "b" ? "bce" : t === "ad" || t === "a" ? "ce" : t;
}
function xn(e) {
	return e === void 0 ? "iso8601" : e === 0 ? "gregory" : e.id;
}
function Sn(e, t) {
	return "M" + fn(e) + (t ? "L" : "");
}
var Cn = /*@__PURE__*/ Object.keys({
	nanosecond: 0,
	microsecond: 1,
	millisecond: 2,
	second: 3,
	minute: 4,
	hour: 5,
	day: 6,
	week: 7,
	month: 8,
	year: 9
}), wn = Ct, Tn = wt, En = Tt, Dn = Et, On = Dt, kn = 864e11, An = /*@__PURE__*/ BigInt(Tn), jn = /*@__PURE__*/ BigInt(En), Mn = /*@__PURE__*/ BigInt(kn), Nn = /*@__PURE__*/ Cn.slice(0, 6), Pn = /*@__PURE__*/ tn(Nn), Fn = [
	"day",
	"month",
	"year"
];
function In(e) {
	return Rn(e, 1), e;
}
var Ln = {
	hour: 23,
	minute: 59,
	second: 59
};
function Rn(e, t) {
	let n = {};
	for (let r of Nn) n[r] = Jt(r, e[r], 0, Ln[r] || 999, t);
	return n;
}
function zn(e) {
	return Bn(e) * En + Vn(e);
}
function Bn(e) {
	return 3600 * e.hour + 60 * e.minute + e.second;
}
function Vn(e) {
	return e.millisecond * Tn + e.microsecond * wn + e.nanosecond;
}
function Hn(e) {
	let [t, n] = gn(e, Tn), [r, i] = gn(n, wn);
	return Un(t, r, i);
}
function Un(e, t = 0, n = 0) {
	let [r, i] = gn(e, 36e5), [a, o] = gn(i, 6e4), [s, c] = gn(o, 1e3);
	return {
		hour: r,
		minute: a,
		second: s,
		millisecond: c,
		microsecond: t,
		nanosecond: n
	};
}
function Wn(e) {
	let [t, n] = hn(e, jn);
	return [Number(t), Number(n)];
}
function Gn(e) {
	return Number(mn(e, An));
}
function Kn(e) {
	return qn(e) + BigInt(zn(e));
}
function qn(e) {
	return BigInt(Jn(e)) * Mn;
}
function Jn(e) {
	return Yn(e.year, e.month, e.day);
}
function Yn(e, t = 1, n = 1) {
	let r = t - 1;
	return e += Math.floor(r / 12), t = _n(r, 12), Date.UTC(e % 400 - 400, t, 0) / 864e5 + 146097 * (vn(e, 400) + 1) + n;
}
function Xn(e) {
	let [t, n] = hn(e, Mn);
	return {
		...Zn(Number(t)),
		...Hn(Number(n))
	};
}
function Zn(e) {
	let t = /* @__PURE__ */ new Date(864e5 * _n(e, 146097));
	return {
		year: t.getUTCFullYear() + 400 * Math.floor(e / 146097),
		month: t.getUTCMonth() + 1,
		day: t.getUTCDate()
	};
}
function Qn(e) {
	return [e, 0];
}
function $n(e, t) {
	switch (t) {
		case 2: return er(e) ? 29 : 28;
		case 4:
		case 6:
		case 9:
		case 11: return 30;
	}
	return 31;
}
function er(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function tr({ year: e }) {
	return e < 1 ? {
		era: "bce",
		eraYear: 1 - e
	} : {
		era: "ce",
		eraYear: e
	};
}
function nr(e) {
	return rr(e), In(e);
}
function rr(e) {
	return ir(e, 1), e;
}
function ir(e, t) {
	let { year: n } = e, r = qt(e, "month", 1, 12, t);
	return {
		year: n,
		month: r,
		day: qt(e, "day", 1, $n(n, r), t)
	};
}
function ar(e, t) {
	return e ? e.de(t) : t;
}
function or(e, t, n) {
	return e ? e.N(t, n) : Qn(n);
}
function sr(e, t) {
	return e === 0 ? tr(t) : e && e.h?.(t) || {};
}
function cr(e, t) {
	let { year: n, month: r } = ar(e, t), [i, a] = or(e, n, r);
	return Sn(i, a);
}
var lr = /*@__PURE__*/ rn(ur, "string");
function ur(e, t, n = e) {
	return typeof t !== e && Kt(It(n, t)), t;
}
function dr(e, t = "number") {
	return Number.isInteger(e) || Gt(((e, t) => `Non-integer ${e}: ${t}`)(t, e)), e || 0;
}
function fr(e) {
	return typeof e == "symbol" && Kt("Cannot convert Symbol to string"), String(e);
}
function pr(e) {
	if (!Pt(e)) return e;
	let t = e[Symbol.toPrimitive];
	if (t != null) {
		typeof t != "function" && Kt();
		let n = Reflect.apply(t, e, ["string"]);
		return Pt(n) && Kt(), n;
	}
	return Date.prototype[Symbol.toPrimitive].call(e, "string");
}
function mr(e, t) {
	return dr(kt(e, t), t);
}
var hr = {
	compatible: 0,
	reject: 1,
	earlier: 2,
	later: 3
}, gr = [
	Math.floor,
	(e) => yn(e) ? Math.floor(e) : Math.round(e),
	Math.ceil,
	(e) => yn(e) ? Math.ceil(e) : Math.round(e),
	Math.trunc,
	(e) => yn(e) ? Math.trunc(e) || 0 : Math.round(e),
	(e) => e < 0 ? Math.floor(e) : Math.ceil(e),
	(e) => Math.sign(e) * Math.round(Math.abs(e)) || 0,
	(e) => yn(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)
];
function _r(e, t, n, r = 0) {
	let i = n[e];
	if (i === void 0) return r;
	let a = fr(i), o = t[a];
	return o === void 0 && Gt(Rt(e, a, t)), o;
}
var vr = /*@__PURE__*/ rn(_r, "disambiguation", hr), yr = /*@__PURE__*/ BigInt(1e8) * Mn, br = /*@__PURE__*/ BigInt(-1e8) * Mn, xr = br - Mn;
function Sr(e) {
	return Cr(Kn(e)), e;
}
function Cr(e) {
	return (e <= xr || e >= yr + Mn) && Gt("Out-of-bounds date"), e;
}
function wr(e) {
	return (e < br || e > yr) && Gt("Out-of-bounds date"), e;
}
function Tr(e, t) {
	return wr(qn(e) + BigInt(zn(e) - t));
}
function Er(e, t, n) {
	return Dr(e / t, n) * t;
}
function Dr(e, t) {
	return gr[t](e);
}
function Or(e) {
	return { epochNanoseconds: e };
}
function kr(e, t, n) {
	return {
		calendar: n,
		timeZone: t,
		epochNanoseconds: e
	};
}
function Ar(e, t) {
	return nn(Nn, e, jr(e, t));
}
function jr(e, t) {
	return nn(Fn, e, { calendar: t });
}
function Mr(e) {
	return Er(e, Dn, 7);
}
var Nr = /*@__PURE__*/ Yt(Pr, WeakMap);
function Pr(e) {
	let { epochNanoseconds: t, timeZone: n } = e, r = n.B(t);
	return {
		...Xn(t + BigInt(r)),
		offsetNanoseconds: r
	};
}
function Fr(e, t, n = 0, r = e.R(t)) {
	if (r.length === 1) return r[0];
	if (n === 1 && Gt("Ambiguous offset"), r.length) return r[+(n === 3)];
	let i = Kn(t), a = ((e, t) => {
		let n = e.B(t - Mn);
		return ((e) => (e > kn && Gt("Out-of-bounds TimeZone gap"), e))(e.B(t + Mn) - n);
	})(e, i), o = Xn(i + BigInt(a * (n === 2 ? -1 : 1)));
	return (r = e.R(o))[n === 2 ? 0 : r.length - 1];
}
var Ir = /*@__PURE__*/ sn("([+-])(\\d{2})(?::?(\\d{2})(?::?(\\d{2})(?:[.,](\\d{1,9}))?)?)?");
function Lr(e, t) {
	let n = Ir.exec(e);
	if (n && ((e) => ((e) => {
		e[0] !== "T" && e[0] !== "t" || (e = e.slice(1));
		let t = e.search(/[.,]/), n = t < 0 ? e : e.slice(0, t), r = n.split(":");
		return r.length === 1 ? /^(?:\d{2}|\d{4}|\d{6})$/i.test(n) : (r.length === 2 || r.length === 3) && r.every((e) => e.length === 2 && /^\d{2}$/i.test(e));
	})(e.slice(1)))(n[0])) return ((e, t) => {
		let n = e[4] || e[5];
		return t && n && Gt(Ut(n)), r = (un(e[2]) * On + un(e[3]) * Dn + un(e[4]) * En + cn(e[5] || "")) * ln(e[1]), Math.abs(r) >= kn && Gt("Out-of-bounds offset"), r;
		var r;
	})(n, t);
}
({ .../* @__PURE__ */ Object.assign({}, {
	era: fr,
	month: jt,
	monthCode(e, t) {
		return lr(pr(e), t);
	},
	day: jt
}, /* @__PURE__ */ en(Nn, At)) });
function Rr(e) {
	return vr(Ot(e));
}
var zr = Intl.DateTimeFormat;
function Br(e, t) {
	t < -864e13 && Gt("Out-of-bounds date");
	let n = e.formatToParts(t), r = {};
	for (let e of n) r[e.type] = e.value;
	return r;
}
var Vr = {
	El_Aaiun: 17,
	Tucuman: 12,
	Tirane: 11,
	Riga: 10,
	Simferopol: 9,
	Vienna: 9,
	Tunis: 8,
	Boa_Vista: 6,
	Fortaleza: 6,
	Maceio: 6,
	Noronha: 6,
	Recife: 6,
	Gaza: 6,
	Hebron: 6,
	DeNoronha: 6
}, Hr = -388152e4;
function Ur(e) {
	return Kr(Xn(e.epochNanoseconds), void 0) + "Z";
}
function Wr(e) {
	let t = e.calendar, n = e.timeZone, r = n.B(e.epochNanoseconds);
	return Kr(Xn(e.epochNanoseconds + BigInt(r)), void 0) + Xr(Mr(r)) + Zr(n.id, 0) + (t === void 0 ? "" : Qr(xn(t), 0));
}
function Gr(e) {
	let t = e.calendar;
	return Kr(e, void 0) + (t === void 0 ? "" : Qr(xn(t), 0));
}
function Kr(e, t) {
	return qr(e) + "T" + Yr(e, t);
}
function qr(e) {
	return Jr(e) + "-" + fn(e.day);
}
function Jr(e) {
	let { year: t } = e;
	return (t < 0 || t > 9999 ? ti(t) + dn(6, Math.abs(t)) : dn(4, t)) + "-" + fn(e.month);
}
function Yr(e, t) {
	let n = [fn(e.hour), fn(e.minute)];
	return t !== -1 && n.push(fn(e.second) + ((e, t, n, r) => ei(e * Tn + t * wn + n, r))(e.millisecond, e.microsecond, e.nanosecond, t)), n.join(":");
}
function Xr(e, t = 0) {
	if (t === 1) return "";
	let [n, r] = gn(Math.abs(e), On), [i, a] = gn(r, Dn), [o, s] = gn(a, En);
	return ti(e) + fn(n) + ":" + fn(i) + (o || s ? ":" + fn(o) + ei(s) : "");
}
function Zr(e, t) {
	return t === 1 ? "" : "[" + (t === 2 ? "!" : "") + e + "]";
}
function Qr(e, t) {
	return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
var $r = /0+$/;
function ei(e, t) {
	let n = dn(9, e);
	return n = t === void 0 ? n.replace($r, "") : n.slice(0, t), n ? "." + n : "";
}
function ti(e) {
	return e < 0 ? "-" : "+";
}
var ni = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, ri = /[^\w\/:+-]+/;
function ii(e) {
	return ai(lr(e));
}
function ai(e) {
	return oi(e).id;
}
function oi(e) {
	let t = e.toUpperCase(), n = ((e) => {
		let t = Lr(e, 1);
		if (t !== void 0) return {
			id: Xr(t),
			Z: t,
			m: t
		};
	})(t);
	return n ? {
		kind: "fixed",
		...n
	} : si(t === "UTC" ? "UTC" : ((e) => (ri.test(e) && Gt(Ht(e)), ni.test(e) && Gt("Forbidden ICU TimeZone"), e.toLowerCase().split("/").map((e, t) => (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e) ? e.toUpperCase() : e.replace(/baja|dumont|[a-z]+/g, (e, n) => e.length <= 2 && !t || e === "in" || e === "chat" ? e.toUpperCase() : e.length > 2 || !n ? on(e).replace(/island|noronha|murdo|rivadavia|urville/, on) : e)).join("/")))(e));
}
var si = /*@__PURE__*/ Yt((e) => {
	if (e === "UTC") return {
		kind: "utc",
		id: e,
		m: e
	};
	let t = ci(e.toUpperCase());
	return {
		kind: "named",
		id: e,
		format: t,
		m: t.resolvedOptions().timeZone
	};
}), ci = /*@__PURE__*/ Yt((e) => new zr("en-u-hc-h23", {
	calendar: "iso8601",
	timeZone: e,
	era: "short",
	year: "numeric",
	month: "numeric",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
}));
function li(e) {
	let t = oi(e);
	return ui(t.id, t);
}
var ui = /*@__PURE__*/ Yt((e, t) => t.kind === "named" ? new fi(e, t.m, t.format) : new di(e, t.m, t.kind === "fixed" ? t.Z : 0)), di = class {
	constructor(e, t, n) {
		this.id = e, this.m = t, this.Z = n;
	}
	B() {
		return this.Z;
	}
	R(e) {
		return [Tr(e, this.Z)];
	}
	C() {}
}, fi = class {
	constructor(e, t, n) {
		this.id = e, this.m = t, this.oe = ((e, t) => {
			let n = Yt(e), r = Yt(mi), i = 86400 * t;
			function a(e) {
				let [t, a] = hi(e, i), s = gi(t), c = gi(a), l = n(s), u = n(c);
				return l === u ? l : o(r(s, c), l, u, e);
			}
			function o(t, n, r, i) {
				let a, o;
				for (; (i === void 0 || (a = i < t[0] ? n : i >= t[1] ? r : void 0) === void 0) && (o = t[1] - t[0]);) {
					let n = t[0] + Math.floor(o / 2);
					e(n) === r ? t[1] = n : t[0] = n + 1;
				}
				return a;
			}
			return {
				Ae(e) {
					let t = a(e - 86400), n = a(e + 86400), r = e - t, i = e - n;
					if (t === n) return [r];
					let o = a(r);
					return o === a(i) ? [e - o] : t > n ? [r, i] : [];
				},
				ze: a,
				C: function e(t, a) {
					if (a > 0 && t >= 864e10) return;
					if (a < 0) {
						if (t <= Hr) return;
						let n = pi() + 94867200;
						if (t > n) return e(n, -1);
					}
					let [s, c] = hi(a > 0 ? Math.max(t, Hr) : t, i), l = i * a, u = a > 0 ? Math.max(t, pi()) + 94867200 : Hr, d = () => a < 0 ? c > u : s < u;
					for (; d();) {
						let e = gi(s), i = gi(c), u = n(e), d = n(i);
						if (u !== d) {
							let n = r(e, i);
							o(n, u, d);
							let s = n[0];
							if ((pn(s, t) || 1) === a) return s;
						}
						s += l, c += l;
					}
				}
			};
		})(((e) => (t) => {
			let n = Br(e, 1e3 * t);
			return 86400 * Yn(((e) => {
				let t = e.relatedYear;
				if (t !== void 0) return parseInt(t);
				let n = parseInt(e.year);
				return e.era !== void 0 && bn(e.era) === "bce" ? 1 - n : n;
			})(n), parseInt(n.month), parseInt(n.day)) + 3600 * parseInt(n.hour) + 60 * parseInt(n.minute) + parseInt(n.second) - t;
		})(n), ((e) => Vr[e.split("/").pop()] || 60)(e));
	}
	B(e) {
		return this.oe.ze(((e) => Wn(e)[0])(e)) * En;
	}
	R(e) {
		let t = 86400 * Jn(e) + Bn(e), n = Vn(e);
		return this.oe.Ae(t).map((e) => wr(BigInt(e) * jn + BigInt(n)));
	}
	C(e, t) {
		let [n, r] = Wn(e), i = this.oe.C(n + (t > 0 || r ? 1 : 0), t);
		if (i !== void 0) return BigInt(i) * jn;
	}
};
function pi() {
	return Math.floor(Date.now() / 1e3);
}
function mi(e, t) {
	return [e, t];
}
function hi(e, t) {
	let n = Math.floor(e / t) * t;
	return [n, n + t];
}
function gi(e) {
	return Wt(e, -1e10, 864e10);
}
function _i(e) {
	return `(\\d{2})(?:(:?)(\\d{2})(?:\\${e}(\\d{2})(?:[.,](\\d{1,9}))?)?)?`;
}
"" + _i(8) + _i(15), "" + _i(2) + `(([+-])${_i(9)})?((?:\\[(!?)([^\\]]*)\\]){0,9})`;
function vi(e, t, n) {
	return kr(e.epochNanoseconds, t, n);
}
function yi(e, t, n) {
	return kr(wr(Fr(t, e, n)), t, e.calendar);
}
function bi(e) {
	return Or(wr(BigInt(mr(e)) * An));
}
({ .../* @__PURE__ */ Object.assign({}, {
	year: "numeric",
	month: "numeric",
	day: "numeric"
}, {
	hour: "numeric",
	minute: "numeric",
	second: "numeric"
}) });
//#endregion
//#region node_modules/temporal-polyfill/chunks/apiHelpers.js
var xi = "PlainYearMonth", Si = "PlainMonthDay", Ci = "PlainDate", wi = "PlainDateTime", Ti = "PlainTime", Ei = "ZonedDateTime", Di = "Instant", Oi = "Duration", ki = "Calendar";
function Ai(e, t, n, ...r) {
	return Object.defineProperties(t, Xt(e)), Object.defineProperties(t.prototype, Qt("Temporal." + e)), Object.defineProperties(t.prototype, $t((e) => ({
		get() {
			return e(n(this));
		},
		configurable: 1
	}), Object.assign({}, ...r))), t;
}
var ji = an.name === "noop" ? (e) => {
	Object.defineProperty(e, "_str_", { value: e.toJSON() });
} : an;
function Mi() {
	Kt(Bt);
}
function Ni() {
	Kt(zt);
}
var Pi = {
	era(e) {
		return sr(e.calendar, e).era;
	},
	eraYear(e) {
		return sr(e.calendar, e).eraYear;
	},
	year(e) {
		return ar(e.calendar, e).year;
	},
	month(e) {
		return ar(e.calendar, e).month;
	},
	monthCode(e) {
		return cr(e.calendar, e);
	},
	day(e) {
		return ar(e.calendar, e).day;
	}
};
function Fi(e) {
	return tn(Object.keys(e));
}
var Ii = /*@__PURE__*/ Fi(Pn), Li = /*@__PURE__*/ Fi(Pi);
`${xi}`, `${Si}`, `${Ci}`;
var Ri = `${wi}Record`;
`${Ti}`;
var zi = `${Ei}Record`, Bi = `${Di}Record`;
`${Oi}`, `${ki}`;
var Vi = /*@__PURE__*/ new WeakMap(), Hi = /*@__PURE__*/ new WeakMap(), Ui = /*@__PURE__*/ new WeakMap(), Wi = /*@__PURE__*/ new WeakMap();
function Gi(e) {
	return Ki(e) || Mi();
}
function Ki(e) {
	return Vi.get(e);
}
function qi(e) {
	return Ji(e) || Mi();
}
function Ji(e) {
	return Hi.get(e);
}
function Yi(e, t) {
	Hi.set(e, t);
}
function Xi(e) {
	return Zi(e) || Mi();
}
function Zi(e) {
	return Ui.get(e);
}
function Qi(e, t) {
	Ui.set(e, t);
}
function $i(e) {
	return ea(e) || Mi();
}
function ea(e) {
	return Wi.get(e);
}
function ta(e, t) {
	Wi.set(e, t);
}
function na(e) {
	return Gi(e).id;
}
function ra(e) {
	let t = Gi(e).xe;
	return t || Gt(Vt(na(e), "getExotic or getAny")), t;
}
//#endregion
//#region node_modules/temporal-polyfill/chunks/funcApi-native.js
function ia(e) {
	if (e !== void 0) return aa(e);
}
function aa(e) {
	return ra(e), na(e);
}
var oa = $i, sa = /*@__PURE__*/ Ai(Ri, class {
	get calendarId() {
		return oa(this).calendarId;
	}
	toJSON() {
		return oa(this).toJSON();
	}
	valueOf() {
		return oa(this).valueOf();
	}
}, oa, Li, Ii);
function ca(e) {
	let t = Object.create(sa.prototype);
	return ta(t, e), ji(t), t;
}
function la(e, t, n, r, i, a, o, s, c, l) {
	return ca(new gt.PlainDateTime(e, t, n, r, i, a, o, s, c, ia(l)));
}
function ua(e, t, n) {
	return pa(oa(e).toZonedDateTime(t, n));
}
var da = Xi, fa = /*@__PURE__*/ Ai(zi, class {
	get calendarId() {
		return da(this).calendarId;
	}
	get timeZoneId() {
		return da(this).timeZoneId;
	}
	get epochMilliseconds() {
		return da(this).epochMilliseconds;
	}
	get epochNanoseconds() {
		return da(this).epochNanoseconds;
	}
	toJSON() {
		return da(this).toJSON();
	}
	valueOf() {
		return da(this).valueOf();
	}
}, da, Li, Ii);
function pa(e) {
	let t = Object.create(fa.prototype);
	return Qi(t, e), ji(t), t;
}
function ma(e) {
	return da(e).offsetNanoseconds;
}
var ha = qi, ga = /*@__PURE__*/ Ai(Bi, class {
	get epochMilliseconds() {
		return ha(this).epochMilliseconds;
	}
	get epochNanoseconds() {
		return ha(this).epochNanoseconds;
	}
	toJSON() {
		return ha(this).toJSON();
	}
	valueOf() {
		return ha(this).valueOf();
	}
});
function _a(e) {
	let t = Object.create(ga.prototype);
	return Yi(t, e), ji(t), t;
}
function va(e) {
	return _a(gt.Instant.fromEpochMilliseconds(e));
}
function ya(e, t) {
	return pa(ha(e).toZonedDateTimeISO(t));
}
//#endregion
//#region node_modules/temporal-polyfill/chunks/funcApi-shim.js
function ba(e) {
	return e === void 0 ? void 0 : xa(e);
}
function xa(e) {
	return ra(e)();
}
var Sa = $i, Ca = /*@__PURE__*/ Ai(Ri, class {
	get calendarId() {
		return xn(Sa(this).calendar);
	}
	toJSON() {
		return Gr(Sa(this));
	}
	valueOf() {
		return Ni();
	}
}, Sa, Pi, Pn);
function wa(e) {
	let t = Object.create(Ca.prototype);
	return ta(t, e), ji(t), t;
}
function Ta(e, t, n, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l) {
	return wa(Ar(Sr(nr($t(At, {
		year: e,
		month: t,
		day: n,
		hour: r,
		minute: i,
		second: a,
		millisecond: o,
		microsecond: s,
		nanosecond: c
	}))), ba(l)));
}
function Ea(e, t, n) {
	return ka(yi(Sa(e), li(ii(t)), Rr(n)));
}
var Da = Xi, Oa = /*@__PURE__*/ Ai(zi, class {
	get calendarId() {
		return xn(Da(this).calendar);
	}
	get timeZoneId() {
		return Da(this).timeZone.id;
	}
	get epochMilliseconds() {
		return Gn(Da(this).epochNanoseconds);
	}
	get epochNanoseconds() {
		return Da(this).epochNanoseconds;
	}
	toJSON() {
		return Wr(Da(this));
	}
	valueOf() {
		return Ni();
	}
}, Aa, Pi, Pn);
function ka(e) {
	let t = Object.create(Oa.prototype);
	return Qi(t, e), ji(t), t;
}
function Aa(e) {
	let t = Da(e);
	return {
		...Nr(t),
		calendar: t.calendar
	};
}
function ja(e) {
	return Nr(Da(e)).offsetNanoseconds;
}
On - 1, Dn - 1, En - 1, Tn - 1, wn - 1;
var Ma = qi, Na = /*@__PURE__*/ Ai(Bi, class {
	get epochMilliseconds() {
		return Gn(Ma(this).epochNanoseconds);
	}
	get epochNanoseconds() {
		return Ma(this).epochNanoseconds;
	}
	toJSON() {
		return Ur(Ma(this));
	}
	valueOf() {
		return Ni();
	}
});
function Pa(e) {
	let t = Object.create(Na.prototype);
	return Yi(t, e), ji(t), t;
}
function Fa(e) {
	return Pa(bi(e));
}
function Ia(e, t) {
	return ka(vi(Ma(e), li(ii(t))));
}
//#endregion
//#region node_modules/temporal-polyfill/fns/ZonedDateTime.js
var La = gt ? ma : ja, Ra = gt ? la : Ta, za = gt ? ua : Ea, Ba = gt ? va : Fa, Va = gt ? ya : Ia;
//#endregion
//#region node_modules/@full-ui/headless-calendar/index.js
function Ha(e, t) {
	let n = oo(e);
	return n[2] += t * 7, so(n);
}
function O(e, t) {
	let n = oo(e);
	return n[2] += t, so(n);
}
function Ua(e, t) {
	let n = oo(e);
	return n[6] += t, so(n);
}
function Wa(e, t) {
	return Ga(e, t) / 7;
}
function Ga(e, t) {
	return (t.valueOf() - e.valueOf()) / 864e5;
}
function Ka(e, t) {
	return (t.valueOf() - e.valueOf()) / 36e5;
}
function qa(e, t) {
	return (t.valueOf() - e.valueOf()) / 6e4;
}
function Ja(e, t) {
	return (t.valueOf() - e.valueOf()) / 1e3;
}
function Ya(e, t) {
	let n = k(e), r = k(t);
	return {
		years: 0,
		months: 0,
		days: Math.round(Ga(n, r)),
		milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
	};
}
function Xa(e, t) {
	let n = Za(e, t);
	return n !== null && n % 7 == 0 ? n / 7 : null;
}
function Za(e, t) {
	return lo(e) === lo(t) ? Math.round(Ga(e, t)) : null;
}
function k(e) {
	return so([
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate()
	]);
}
function Qa(e) {
	return so([
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate(),
		e.getUTCHours()
	]);
}
function $a(e) {
	return so([
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate(),
		e.getUTCHours(),
		e.getUTCMinutes()
	]);
}
function eo(e) {
	return so([
		e.getUTCFullYear(),
		e.getUTCMonth(),
		e.getUTCDate(),
		e.getUTCHours(),
		e.getUTCMinutes(),
		e.getUTCSeconds()
	]);
}
function to(e, t, n) {
	let r = e.getUTCFullYear(), i = no(e, r, t, n);
	if (i < 1) return no(e, r - 1, t, n);
	let a = no(e, r + 1, t, n);
	return a >= 1 ? Math.min(i, a) : i;
}
function no(e, t, n, r) {
	let i = so([
		t,
		0,
		1 + ro(t, n, r)
	]), a = k(e), o = Math.round(Ga(i, a));
	return Math.floor(o / 7) + 1;
}
function ro(e, t, n) {
	let r = 7 + t - n;
	return -((7 + so([
		e,
		0,
		r
	]).getUTCDay() - t) % 7) + r - 1;
}
function io(e) {
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
function ao(e) {
	return new Date(e[0], e[1] || 0, e[2] == null ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0);
}
function oo(e) {
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
function so(e) {
	return e.length === 1 && (e = e.concat([0])), new Date(Date.UTC(...e));
}
function co(e) {
	return !isNaN(e.valueOf());
}
function lo(e) {
	return e.getUTCHours() * 1e3 * 60 * 60 + e.getUTCMinutes() * 1e3 * 60 + e.getUTCSeconds() * 1e3 + e.getUTCMilliseconds();
}
var uo = {};
function fo(e, t) {
	uo[e] = t;
}
function po(e) {
	return new uo[e]();
}
fo("gregory", class {
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
		return so(e);
	}
	markerToArray(e) {
		return oo(e);
	}
});
function mo(e, t) {
	let n = null, r = null;
	return e.start && (n = t.createMarker(e.start)), e.end && (r = t.createMarker(e.end)), !n && !r || n && r && r < n ? null : {
		start: n,
		end: r
	};
}
function ho(e, t) {
	let n = [], { start: r } = t, i, a;
	for (e.sort(go), i = 0; i < e.length; i += 1) a = e[i], a.start > r && n.push({
		start: r,
		end: a.start
	}), a.end > r && (r = a.end);
	return r < t.end && n.push({
		start: r,
		end: t.end
	}), n;
}
function go(e, t) {
	return e.start.valueOf() - t.start.valueOf();
}
function _o(e, t) {
	let { start: n, end: r } = e, i = null;
	return t.start !== null && (n = n === null ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), t.end != null && (r = r === null ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (n === null || r === null || n < r) && (i = {
		start: n,
		end: r
	}), i;
}
function vo(e, t) {
	return (e.start === null ? null : e.start.valueOf()) === (t.start === null ? null : t.start.valueOf()) && (e.end === null ? null : e.end.valueOf()) === (t.end === null ? null : t.end.valueOf());
}
function yo(e, t) {
	return (e.end === null || t.start === null || e.end > t.start) && (e.start === null || t.end === null || e.start < t.end);
}
function bo(e, t) {
	return (e.start === null || t.start !== null && t.start >= e.start) && (e.end === null || t.end !== null && t.end <= e.end);
}
function xo(e, t) {
	return (e.start === null || t >= e.start) && (e.end === null || t < e.end);
}
function So(e, t) {
	return t.start != null && e < t.start ? t.start : t.end != null && e >= t.end ? /* @__PURE__ */ new Date(t.end.valueOf() - 1) : e;
}
function Co(e, t) {
	let n = t.markerToArray(e.marker);
	return {
		marker: e.marker,
		instantMs: e.instantMs,
		timeZoneOffset: (e.marker.valueOf() - e.instantMs) / 6e4,
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
function wo(e, t, n) {
	let r = Co(e, n.calendarSystem);
	return {
		date: r,
		start: r,
		end: t ? Co(t, n.calendarSystem) : null,
		timeZone: n.timeZone,
		localeCodes: n.locale.codes
	};
}
function To(e) {
	return e % 1 == 0;
}
function Eo(e, t) {
	let n = String(e);
	return "000".substr(0, t - n.length) + n;
}
var Do = [
	"years",
	"months",
	"days",
	"milliseconds"
], Oo = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
function A(e, t) {
	return typeof e == "string" ? ko(e) : typeof e == "object" && e ? Ao(e) : typeof e == "number" ? Ao({ [t || "milliseconds"]: e }) : null;
}
function ko(e) {
	let t = Oo.exec(e);
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
function Ao(e) {
	let t = {
		years: e.years || e.year || 0,
		months: e.months || e.month || 0,
		days: e.days || e.day || 0,
		milliseconds: (e.hours || e.hour || 0) * 60 * 60 * 1e3 + (e.minutes || e.minute || 0) * 60 * 1e3 + (e.seconds || e.second || 0) * 1e3 + (e.milliseconds || e.millisecond || e.ms || 0)
	}, n = e.weeks || e.week;
	return n && (t.days += n * 7, t.specifiedWeeks = !0), t;
}
function jo(e, t) {
	return e.years === t.years && e.months === t.months && e.days === t.days && e.milliseconds === t.milliseconds;
}
function Mo(e) {
	return !e.years && !e.months && !e.milliseconds ? e.days : 0;
}
function No(e, t) {
	return {
		years: e.years + t.years,
		months: e.months + t.months,
		days: e.days + t.days,
		milliseconds: e.milliseconds + t.milliseconds
	};
}
function Po(e, t) {
	return {
		years: e.years - t.years,
		months: e.months - t.months,
		days: e.days - t.days,
		milliseconds: e.milliseconds - t.milliseconds
	};
}
function Fo(e, t) {
	return {
		years: e.years * t,
		months: e.months * t,
		days: e.days * t,
		milliseconds: e.milliseconds * t
	};
}
function Io(e) {
	return Ro(e) / 365;
}
function Lo(e) {
	return Ro(e) / 30;
}
function Ro(e) {
	return Vo(e) / 864e5;
}
function zo(e) {
	return Vo(e) / 6e4;
}
function Bo(e) {
	return Vo(e) / 1e3;
}
function Vo(e) {
	return e.years * 31536e6 + e.months * 2592e6 + e.days * 864e5 + e.milliseconds;
}
function Ho(e, t) {
	let n = null;
	for (let r = 0; r < Do.length; r += 1) {
		let i = Do[r];
		if (t[i]) {
			let r = e[i] / t[i];
			if (!To(r) || n !== null && n !== r) return null;
			n = r;
		} else if (e[i]) return null;
	}
	return n;
}
function Uo(e) {
	let t = e.milliseconds;
	if (t) {
		if (t % 1e3 != 0) return {
			unit: "millisecond",
			value: t
		};
		if (t % 6e4 != 0) return {
			unit: "second",
			value: t / 1e3
		};
		if (t % 36e5 != 0) return {
			unit: "minute",
			value: t / 6e4
		};
		if (t) return {
			unit: "hour",
			value: t / 36e5
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
function Wo(e, t, n = !1) {
	let r = e.toISOString();
	return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (t == null ? r = r.replace("Z", "") : t !== 0 && (r = r.replace("Z", Jo(t, !0)))), r;
}
function Go(e) {
	return e.toISOString().replace(/T.*$/, "");
}
function Ko(e) {
	return e.toISOString().match(/^\d{4}-\d{2}/)[0];
}
function qo(e) {
	return Eo(e.getUTCHours(), 2) + ":" + Eo(e.getUTCMinutes(), 2) + ":" + Eo(e.getUTCSeconds(), 2);
}
function Jo(e, t = !1) {
	let n = e < 0 ? "-" : "+", r = Math.abs(e), i = Math.floor(r / 60), a = Math.round(r % 60);
	return t ? `${n + Eo(i, 2)}:${Eo(a, 2)}` : `GMT${n}${i}${a ? `:${Eo(a, 2)}` : ""}`;
}
function Yo(e) {
	let t = "";
	for (let n of e) t += n.value;
	return t;
}
var Xo = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function Zo(e) {
	let t = Xo.exec(e);
	if (t) {
		let e = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? Number(`0.${t[12]}`) * 1e3 : 0));
		if (co(e)) {
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
var Qo = class {
	constructor(e) {
		this.timeZone = e.timeZone, this.calendarSystem = po(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekTextLong = e.weekTextLong, this.weekTextShort = e.weekTextShort ?? e.weekTextLong, this.cmdFormatter = e.cmdFormatter;
	}
	createMarker(e) {
		let t = this.createMarkerMeta(e);
		return t === null ? null : t.marker;
	}
	createNowMarker() {
		return this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf());
	}
	createMarkerMeta(e) {
		if (typeof e == "string") return this.parse(e);
		let t = null, n;
		return typeof e == "number" ? (t = this.timestampToMarker(e), n = e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e), n = e)) : Array.isArray(e) && (t = so(e)), t === null || !co(t) ? null : {
			marker: t,
			isTimeUnspecified: !1,
			instantMs: n
		};
	}
	parse(e) {
		let t = Zo(e);
		if (t === null) return null;
		let { marker: n } = t, r;
		return t.timeZoneOffset !== null && (r = n.valueOf() - t.timeZoneOffset * 60 * 1e3, n = this.timestampToMarker(r)), {
			marker: n,
			isTimeUnspecified: t.isTimeUnspecified,
			instantMs: r
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
		return lo(e) === lo(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null;
	}
	diffWholeMonths(e, t) {
		let { calendarSystem: n } = this;
		return lo(e) === lo(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + (n.getMarkerYear(t) - n.getMarkerYear(e)) * 12 : null;
	}
	greatestWholeUnit(e, t) {
		let n = this.diffWholeYears(e, t);
		return n === null ? (n = this.diffWholeMonths(e, t), n === null ? (n = Xa(e, t), n === null ? (n = Za(e, t), n === null ? (n = Ka(e, t), To(n) ? {
			unit: "hour",
			value: n
		} : (n = qa(e, t), To(n) ? {
			unit: "minute",
			value: n
		} : (n = Ja(e, t), To(n) ? {
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
		return n.years && (r = this.diffWholeYears(e, t), r !== null) ? r / Io(n) : n.months && (r = this.diffWholeMonths(e, t), r !== null) ? r / Lo(n) : n.days && (r = Za(e, t), r !== null) ? r / Ro(n) : (t.valueOf() - e.valueOf()) / Vo(n);
	}
	startOf(e, t) {
		return t === "year" ? this.startOfYear(e) : t === "month" ? this.startOfMonth(e) : t === "week" ? this.startOfWeek(e) : t === "day" ? k(e) : t === "hour" ? Qa(e) : t === "minute" ? $a(e) : t === "second" ? eo(e) : null;
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
		return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : to(e, this.weekDow, this.weekDoy);
	}
	formatToParts(e, t, n = {}) {
		return t.formatToParts(this.toZonedInstant(e, n.instantMs), this);
	}
	formatRangeToParts(e, t, n, r = {}) {
		let { endInstantMs: i } = r;
		return r.isEndExclusive && (t = Ua(t, -1), i != null && --i), n.formatRangeToParts(this.toZonedInstant(e, r.startInstantMs), this.toZonedInstant(t, i), this);
	}
	toZonedInstant(e, t) {
		return t ??= this.toDate(e).valueOf(), {
			marker: this.timestampToMarker(t),
			instantMs: t
		};
	}
	formatIso(e, t = {}) {
		let n = null;
		return t.omitTimeZoneOffset || (n = this.offsetForMarker(e)), Wo(e, n, t.omitTime);
	}
	timestampToMarker(e) {
		if (this.timeZone === "local") return so(io(new Date(e)));
		if (this.timeZone === "UTC") return new Date(e);
		let t = Va(Ba(e), this.timeZone);
		return new Date(Date.UTC(t.year, t.month - 1, t.day, t.hour, t.minute, t.second, t.millisecond));
	}
	offsetForMarker(e) {
		return this.timeZone === "local" ? -ao(oo(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : La(za(Ra(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), this.timeZone)) / 6e10;
	}
	toDate(e) {
		return this.timeZone === "local" ? ao(oo(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : new Date(za(Ra(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), this.timeZone).epochMilliseconds);
	}
}, $o = /* @__PURE__ */ new Set([
	"week",
	"meridiem",
	"omitZeroMinute",
	"omitCommas",
	"forceCommas",
	"omitTrailing",
	"weekdayJustify"
]), es = /([ap])\.?m\.?/i, ts = /,/g, ns = /\u200e/g, rs = /[\s.,]+$/, is = /^\s+$/, as = class {
	constructor(e) {
		let t = {}, n = {};
		for (let r in e) $o.has(r) ? n[r] = e[r] : t[r] = e[r];
		t.timeZoneName &&= "shortOffset", this.timeZoneOnly = Object.keys(t).length === 1 && !!t.timeZoneName, this.weekOnly = !(Object.keys(t).length || !n.week), this.timeZoneOnly || (t.timeZoneName && (t.hour ||= "2-digit", t.minute ||= "2-digit"), n.omitZeroMinute && (t.second || t.fractionalSecondDigits) && delete n.omitZeroMinute), this.standardOptions = t, this.extendedOptions = n;
	}
	formatToParts(e, t) {
		let { extendedOptions: n } = this;
		if (this.timeZoneOnly) return this.getFormats(t).normalFormat.formatToParts(e.instantMs).filter((e) => e.type === "timeZoneName");
		if (this.weekOnly) return us(t.computeWeekNumber(e.marker), t.weekTextLong, t.weekTextShort, t.locale, n.week);
		let { normalFormat: r, zeroFormat: i } = this.getFormats(t);
		return ss((i && !e.marker.getUTCMinutes() ? i : r).formatToParts(e.instantMs), n);
	}
	formatRangeToParts(e, t, n) {
		let { extendedOptions: r } = this;
		if (this.timeZoneOnly || this.weekOnly) return this.formatToParts(e, n).map((e) => ({
			source: e.type === "literal" ? "shared" : "startRange",
			...e
		}));
		let { normalFormat: i, zeroFormat: a } = this.getFormats(n);
		return cs((a && !e.marker.getUTCMinutes() && !t.marker.getUTCMinutes() ? a : i).formatRangeToParts(e.instantMs, t.instantMs), r);
	}
	getFormats(e) {
		if (this.cachedContext !== e) {
			let { extendedOptions: t } = this, { codes: n } = e.locale, r = {
				...this.standardOptions,
				timeZone: e.timeZone === "local" ? void 0 : e.timeZone
			}, i = new Intl.DateTimeFormat(n, r), a;
			if (t.omitZeroMinute) {
				let e = { ...r };
				delete e.minute, a = new Intl.DateTimeFormat(n, e);
			}
			this.cachedContext = e, this.cachedFormats = {
				normalFormat: i,
				zeroFormat: a
			};
		}
		return this.cachedFormats;
	}
};
function os(e, t) {
	let n;
	for (let r of e) {
		let e = r.type === "literal";
		if (e || r.type === "dayPeriod") {
			let i = r.value;
			if (i = i.replace(ns, ""), t.omitCommas && (i = i.replace(ts, "")), !e) {
				let { meridiem: e } = t;
				e === !1 ? i = i.replace(es, "") : e === "narrow" ? i = i.replace(es, (e, t) => t.toLocaleLowerCase()) : e === "short" ? i = i.replace(es, (e, t) => `${t.toLocaleLowerCase()}m`) : e === "lowercase" && (i = i.replace(es, (e) => e.toLocaleLowerCase())), n && (n.value = n.value.trimEnd());
			}
			r.value = i;
		}
		n = e ? r : void 0;
	}
}
function ss(e, t) {
	if (os(e, t), t.weekdayJustify && e.length === 3 && is.test(e[1].value) && e[t.weekdayJustify === "start" ? 2 : 0].type === "weekday" && e.reverse(), t.forceCommas) for (let t of e) t.type === "literal" && is.test(t.value) && (t.value = `,${t.value}`);
	return t.omitTrailing && ls(e), e.filter((e) => e.value);
}
function cs(e, t) {
	if (os(e, t), t.forceCommas) for (let t of e) t.type === "literal" && is.test(t.value) && (t.value = `,${t.value}`);
	return t.omitTrailing && ls(e), e.filter((e) => e.value);
}
function ls(e) {
	let t = e[e.length - 1];
	t?.type === "literal" && (t.value = t.value.replace(rs, ""), t.value || e.pop());
}
function us(e, t, n, r, i) {
	let a = [];
	return i === "long" ? a.push({
		type: "literal",
		value: t
	}) : (i === "short" || i === "narrow") && a.push({
		type: "literal",
		value: n
	}), (i === "long" || i === "short") && a.push({
		type: "literal",
		value: " "
	}), a.push({
		type: "week",
		value: r.simpleNumberFormat.format(e)
	}), r.options.direction === "rtl" && a.reverse(), a;
}
var ds = class {
	constructor(e) {
		this.cmdStr = e;
	}
	formatToParts(e, t) {
		let n = t.cmdFormatter(this.cmdStr, wo(e, null, t));
		return Array.isArray(n) ? n : [{
			type: "literal",
			value: n
		}];
	}
	formatRangeToParts(e, t, n) {
		let r = n.cmdFormatter(this.cmdStr, wo(e, t, n));
		return Array.isArray(r) ? r.map((e) => ({
			source: "shared",
			...e
		})) : [{
			source: "shared",
			type: "literal",
			value: r
		}];
	}
}, fs = class {
	constructor(e) {
		this.func = e;
	}
	formatToParts(e, t) {
		return [{
			type: "literal",
			value: this.func(wo(e, null, t))
		}];
	}
	formatRangeToParts(e, t, n) {
		return [{
			source: "shared",
			type: "literal",
			value: this.func(wo(e, t, n))
		}];
	}
}, j = {
	popoverZ: "fc-pC",
	isolate: "fc-6P",
	borderBoxRoot: "fc-Bx",
	notAllowed: "fc-mk",
	noScrollbars: "fc-a7",
	noShrink: "fc-HQ",
	calendarScreenRoot: "fc-1P",
	safeTiles: "fc-0W",
	calendarPrintRoot: "fc-r9",
	cursorPointer: "fc-7z",
	cursorResizeT: "fc-zZ",
	cursorResizeB: "fc-lP",
	cursorResizeS: "fc-i1",
	cursorResizeE: "fc-Vx",
	cursorColResizer: "fc-d1",
	hit: "fc-MT",
	hitX: "fc-DF",
	hitY: "fc-8g",
	hitXSkinny: "fc-h2",
	selectNone: "fc-qy",
	invisible: "fc-bD",
	borderless: "fc-2H",
	borderlessX: "fc-dp",
	borderlessY: "fc-jZ",
	borderlessTop: "fc-Ii",
	borderlessBottom: "fc-n6",
	borderlessStart: "fc-et",
	borderlessEnd: "fc-D4",
	flexRow: "fc-Pr",
	flexCol: "fc-HN",
	grow: "fc-fJ",
	liquid: "fc-Sd",
	minHeight0: "fc-th",
	liquidX: "fc-b9",
	printTable: "fc-rA",
	noPadding: "fc-Kg",
	noPaddingY: "fc-xd",
	noMargin: "fc-yn",
	noMarginY: "fc-Wv",
	noMarginX: "fc-MH",
	whiteSpaceNoWrap: "fc-md",
	whiteSpacePre: "fc-j4",
	overflowAnchorNone: "fc-1z",
	pointerEventsNone: "fc-gx",
	crop: "fc-BD",
	cropNowrap: "fc-C8",
	rel: "fc-Fk",
	abs: "fc-C3",
	start0: "fc-VV",
	end0: "fc-v1",
	fill: "fc-03",
	fillTop: "fc-FO",
	fillX: "fc-E2",
	fillY: "fc-4C",
	fillStart: "fc-LK",
	sticky: "fc-Pk",
	stickyT: "fc-Ja",
	stickyS: "fc-5k",
	tableHeaderSticky: "fc-VG",
	contentBox: "fc-Mp",
	offscreen: "fc-LD",
	srOnly: "fc-T1",
	alignCenter: "fc-Ky",
	alignStart: "fc-mb",
	alignEnd: "fc-T5",
	footerScrollbarSticky: "fc-ET",
	footerScrollbar: "fc-9W",
	breakInsideAvoid: "fc-WO",
	printCellContentMinHeight: "fc-2g",
	flowRoot: "fc-ae",
	z0: "fc-Vm",
	z1: "fc-fo",
	z2: "fc-cu",
	z3: "fc-mQ",
	z4: "fc-b3",
	z5: "fc-OM",
	z1000: "fc-4L",
	z9999: "fc-fM",
	focusZ2: "fc-f6",
	internalTimelineSlot: "fc-Hk",
	internalEvent: "fc-fj",
	internalEventMirror: "fc-z3",
	internalEventDraggable: "fc-Uu",
	internalEventSelected: "fc-s5",
	internalEventResizable: "fc-Zk",
	internalEventResizer: "fc-76",
	internalEventResizerStart: "fc-sc",
	internalEventResizerEnd: "fc-GQ",
	internalBgEvent: "fc-Xs",
	internalMoreLink: "fc-lE",
	internalNavLink: "fc-Io",
	internalPopover: "fc-qN",
	internalView: "fc-ve",
	internalScroller: "fc-P9"
};
//#endregion
//#region node_modules/fullcalendar/chunks/203d95b2.js
function M(...e) {
	return e.filter(Boolean).join(" ");
}
function ps(e) {
	return e * 100 + "%";
}
//#endregion
//#region node_modules/fullcalendar/chunks/d63dc4fb.js
function N(e) {
	return typeof e == "object" && e ? new as(e) : typeof e == "string" ? new ds(e) : typeof e == "function" ? new fs(e) : null;
}
function ms(...e) {
	console.warn("FullCalendar:", ...e);
}
var hs = {};
function gs(e, t) {
	return !e || typeof e == "string" ? e : (_s(t), "");
}
function P(e, t) {
	return typeof e == "function" ? (n) => gs(e(n), t) : gs(e, t);
}
function _s(e) {
	hs[e] || (ms(`Invalid option \`${e}\`: expected a className string or a falsy value.`), hs[e] = !0);
}
function vs(e) {
	e.preventDefault();
}
function ys(e, t) {
	return (n) => {
		let r = n.target.closest(e);
		r && t.call(r, n, r);
	};
}
function bs(e, t, n, r) {
	let i = ys(n, r);
	return e.addEventListener(t, i), () => {
		e.removeEventListener(t, i);
	};
}
function xs(e, t, n, r) {
	let i;
	return bs(e, "mouseover", t, (e, t) => {
		if (t !== i) {
			i = t, n(e, t);
			let a = (e) => {
				i = null, r(e, t), t.removeEventListener("mouseleave", a);
			};
			t.addEventListener("mouseleave", a);
		}
	});
}
var Ss = [
	"webkitTransitionEnd",
	"otransitionend",
	"oTransitionEnd",
	"msTransitionEnd",
	"transitionend"
];
function Cs(e, t) {
	let n = (r) => {
		t(r), Ss.forEach((t) => {
			e.removeEventListener(t, n);
		});
	};
	Ss.forEach((t) => {
		e.addEventListener(t, n);
	});
}
function ws(e) {
	return {
		onClick: e,
		...Ts(e)
	};
}
function Ts(e) {
	return {
		tabIndex: 0,
		onKeyDown(t) {
			(t.key === "Enter" || t.key === " ") && (e(t), t.preventDefault());
		}
	};
}
var Es = 0;
function Ds() {
	return Es += 1, String(Es);
}
function Os() {
	document.body.classList.add(j.notAllowed);
}
function ks() {
	document.body.classList.remove(j.notAllowed);
}
function As(e) {
	e.style.userSelect = "none", e.style.webkitUserSelect = "none", e.addEventListener("selectstart", vs);
}
function js(e) {
	e.style.userSelect = "", e.style.webkitUserSelect = "", e.removeEventListener("selectstart", vs);
}
function Ms(e) {
	e.addEventListener("contextmenu", vs);
}
function Ns(e) {
	e.removeEventListener("contextmenu", vs);
}
function Ps(e) {
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
function Fs(e, t, n) {
	let r, i;
	for (r = 0; r < n.length; r += 1) if (i = Is(e, t, n[r]), i) return i;
	return 0;
}
function Is(e, t, n) {
	return n.func ? n.func(e, t) : Ls(e[n.field], t[n.field]) * (n.order || 1);
}
function Ls(e, t) {
	return !e && !t ? 0 : t == null ? -1 : e == null ? 1 : typeof e == "string" || typeof t == "string" ? String(e).localeCompare(String(t)) : e - t;
}
function Rs(e, t, n) {
	return typeof e == "function" ? e(...t) : typeof e == "string" ? t.reduce((e, t, n) => e.replace("$" + n, t || ""), e) : n;
}
function zs(e, t) {
	return e - t;
}
function Bs(e, t) {
	return e === t;
}
function Vs(e) {
	let t = e.borderless;
	return {
		borderlessX: !!(e.borderlessX ?? t),
		borderlessTop: !!(e.borderlessTop ?? t),
		borderlessBottom: !!(e.borderlessBottom ?? t)
	};
}
var { hasOwnProperty: Hs } = Object.prototype;
function Us(e, t) {
	let n = {};
	for (let r in e) t(e[r], r) && (n[r] = e[r]);
	return n;
}
function Ws(e, t) {
	let n = {};
	for (let r in e) n[r] = t(e[r], r);
	return n;
}
function Gs(e) {
	let t = [];
	for (let n in e) t.push(e[n]);
	return t;
}
function Ks(e) {
	let t = {};
	for (let n of e) t[n] = !0;
	return t;
}
function qs(e, t) {
	return typeof e == "object" && e && typeof t == "object" && t ? Js(e, t, Xs) : e === t;
}
function Js(e, t, n) {
	if (e === t) return !0;
	for (let n in e) if (Hs.call(e, n) && !(n in t)) return !1;
	for (let r in t) if (Hs.call(t, r) && (!(r in e) || !n(e[r], t[r], r))) return !1;
	return !0;
}
function Ys(e, t) {
	return typeof e == "object" && typeof t == "object" && e && t ? Xs(e, t) : e === t;
}
function Xs(e, t) {
	return Js(e, t, Bs);
}
function Zs(e, t, n) {
	return Js(e, t, (e, t, r) => {
		let i = n[r];
		return i ? i(e, t) : e === t;
	});
}
function Qs(e, t) {
	let n = [];
	for (let r in e) Hs.call(e, r) && (r in t || n.push(r));
	for (let r in t) Hs.call(t, r) && e[r] !== t[r] && n.push(r);
	return n;
}
function $s(e, t) {
	return e ? ec(e, t, tc) : t;
}
function ec(e, t, n) {
	let r = {};
	for (let n in e) Hs.call(e, n) && (n in t || (r[n] = e[n]));
	for (let i in t) Hs.call(t, i) && (r[i] = i in e ? n(e[i], t[i]) : t[i]);
	return r;
}
function tc(e, t) {
	return Object.assign({}, e, t);
}
function nc(e) {
	let t = [];
	for (let n of e) if (Array.isArray(n)) for (let e of n) t.push(e);
	else t.push(n);
	return t;
}
function rc(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += 1) {
		let i = t(e[r], r);
		if (Array.isArray(i)) for (let e of i) n.push(e);
		else n.push(i);
	}
	return n;
}
function ic(e, t) {
	let n = 0, r = 0;
	for (; r < e.length;) e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
	return n;
}
function ac(e, t) {
	return Array.isArray(e) && Array.isArray(t) ? oc(e, t) : e === t;
}
function oc(e, t, n = Bs) {
	if (e === t) return !0;
	let r = e.length, i;
	if (r !== t.length) return !1;
	for (i = 0; i < r; i += 1) if (!n(e[i], t[i])) return !1;
	return !0;
}
var sc = {
	navLinkDayClick: F,
	navLinkWeekClick: F,
	duration: A,
	buttons: F,
	toolbarElements: F,
	prevText: String,
	nextText: String,
	prevYearText: String,
	nextYearText: String,
	todayText: String,
	yearText: String,
	monthText: String,
	weekTextLong: String,
	weekTextShort: String,
	dayText: String,
	listText: F,
	todayHint: F,
	prevHint: F,
	nextHint: F,
	buttonDisplay: F,
	buttonGroupClass: P,
	buttonClass: P,
	defaultAllDayEventDuration: A,
	defaultTimedEventDuration: A,
	nextDayThreshold: A,
	scrollTime: A,
	scrollTimeReset: Boolean,
	slotMinTime: A,
	slotMaxTime: A,
	popoverFormat: N,
	slotDuration: A,
	snapDuration: A,
	headerToolbar: F,
	footerToolbar: F,
	forceEventDuration: Boolean,
	dayLaneClass: P,
	dayLaneInnerClass: P,
	dayLaneDidMount: F,
	dayLaneWillUnmount: F,
	initialView: String,
	aspectRatio: Number,
	weekends: Boolean,
	weekNumberCalculation: F,
	weekNumbers: Boolean,
	weekNumberHeaderClass: P,
	weekNumberHeaderInnerClass: P,
	weekNumberHeaderContent: F,
	weekNumberHeaderDidMount: F,
	weekNumberHeaderWillUnmount: F,
	inlineWeekNumberClass: P,
	inlineWeekNumberContent: F,
	inlineWeekNumberDidMount: F,
	inlineWeekNumberWillUnmount: F,
	editable: Boolean,
	controller: F,
	nowIndicator: Boolean,
	nowIndicatorSnap: F,
	nowIndicatorHeaderClass: P,
	nowIndicatorHeaderContent: F,
	nowIndicatorHeaderDidMount: F,
	nowIndicatorHeaderWillUnmount: F,
	nowIndicatorDotClass: gs,
	nowIndicatorLineClass: P,
	nowIndicatorLineContent: F,
	nowIndicatorLineDidMount: F,
	nowIndicatorLineWillUnmount: F,
	showNonCurrentDates: Boolean,
	lazyFetching: Boolean,
	startParam: String,
	endParam: String,
	timeZoneParam: String,
	timeZone: String,
	locales: F,
	locale: F,
	dragRevertDuration: Number,
	dragScroll: Boolean,
	allDayMaintainDuration: Boolean,
	unselectAuto: Boolean,
	dropAccept: F,
	eventOrder: Ps,
	eventOrderStrict: Boolean,
	eventSlicing: Boolean,
	eventPrintLayout: String,
	longPressDelay: Number,
	eventDragMinDistance: Number,
	expandRows: Boolean,
	height: F,
	contentHeight: F,
	direction: String,
	colorScheme: String,
	weekNumberFormat: N,
	eventResizableFromStart: Boolean,
	displayEventTime: Boolean,
	displayEventEnd: Boolean,
	progressiveEventRendering: Boolean,
	businessHours: F,
	initialDate: F,
	now: F,
	eventDataTransform: F,
	tableHeaderSticky: F,
	footerScrollbarSticky: F,
	defaultAllDay: Boolean,
	eventSourceFailure: F,
	eventSourceSuccess: F,
	eventDisplay: String,
	eventStartEditable: Boolean,
	eventDurationEditable: Boolean,
	eventOverlap: F,
	eventConstraint: F,
	eventAllow: F,
	eventColor: String,
	eventContrastColor: String,
	eventDidMount: F,
	eventWillUnmount: F,
	eventContent: F,
	eventClass: P,
	eventInnerClass: P,
	eventTimeClass: P,
	eventTitleClass: P,
	eventBeforeClass: P,
	eventAfterClass: P,
	listItemEventClass: P,
	listItemEventInnerClass: P,
	listItemEventTimeClass: P,
	listItemEventTitleClass: P,
	listItemEventBeforeClass: P,
	listItemEventAfterClass: P,
	blockEventClass: P,
	blockEventInnerClass: P,
	blockEventTimeClass: P,
	blockEventTitleClass: P,
	blockEventBeforeClass: P,
	blockEventAfterClass: P,
	rowEventClass: P,
	rowEventInnerClass: P,
	rowEventTimeClass: P,
	rowEventTitleClass: P,
	rowEventTitleSticky: Boolean,
	rowEventBeforeClass: P,
	rowEventBeforeContent: F,
	rowEventAfterClass: P,
	rowEventAfterContent: F,
	columnEventClass: P,
	columnEventInnerClass: P,
	columnEventTimeClass: P,
	columnEventTitleClass: P,
	columnEventTitleSticky: Boolean,
	columnEventBeforeClass: P,
	columnEventAfterClass: P,
	backgroundEventClass: P,
	backgroundEventDidMount: F,
	backgroundEventWillUnmount: F,
	backgroundEventContent: F,
	backgroundEventInnerClass: P,
	backgroundEventTitleClass: P,
	backgroundEventColor: String,
	selectConstraint: F,
	selectOverlap: F,
	selectAllow: F,
	droppable: Boolean,
	unselectCancel: String,
	slotHeaderFormat: F,
	slotLaneClass: P,
	slotLaneDidMount: F,
	slotLaneWillUnmount: F,
	slotHeaderClass: P,
	slotHeaderInnerClass: P,
	slotHeaderContent: F,
	slotHeaderDidMount: F,
	slotHeaderWillUnmount: F,
	slotHeaderAlign: F,
	slotHeaderSticky: F,
	slotHeaderRowClass: gs,
	slotHeaderDividerClass: P,
	dayMaxEvents: F,
	dayMaxEventRows: F,
	dayMinWidth: Number,
	slotHeaderInterval: A,
	dayHeaderClass: P,
	dayHeaderInnerClass: P,
	dayHeaderContent: F,
	dayHeaderDidMount: F,
	dayHeaderWillUnmount: F,
	dayHeaderAlign: F,
	_dayHeaderSticky: F,
	dayHeaderRowClass: gs,
	dayHeaderDividerClass: P,
	dayRowClass: gs,
	dayCellDidMount: F,
	dayCellWillUnmount: F,
	dayCellClass: P,
	dayCellInnerClass: P,
	dayCellTopContent: F,
	dayCellTopClass: P,
	dayCellTopInnerClass: P,
	dayCellBottomClass: P,
	allDaySlot: Boolean,
	allDayText: String,
	allDayHeaderClass: P,
	allDayHeaderInnerClass: P,
	allDayHeaderContent: F,
	allDayHeaderDidMount: F,
	allDayHeaderWillUnmount: F,
	timedText: String,
	slotMinWidth: Number,
	slotMinHeight: Number,
	navLinks: Boolean,
	eventTimeFormat: N,
	rerenderDelay: Number,
	moreLinkText: F,
	moreLinkHint: F,
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
	firstDay: Number,
	dayCount: Number,
	dateAlignment: String,
	dateIncrement: A,
	hiddenDays: F,
	fixedWeekCount: Boolean,
	validRange: F,
	visibleRange: F,
	titleFormat: F,
	eventInteractive: Boolean,
	noEventsText: String,
	viewHint: F,
	viewChangeHint: String,
	navLinkHint: F,
	closeHint: String,
	eventsHint: String,
	headingLevel: Number,
	moreLinkClick: F,
	moreLinkContent: F,
	moreLinkDidMount: F,
	moreLinkWillUnmount: F,
	moreLinkClass: P,
	moreLinkInnerClass: P,
	rowMoreLinkClass: P,
	rowMoreLinkInnerClass: P,
	columnMoreLinkClass: P,
	columnMoreLinkInnerClass: P,
	navLinkClass: gs,
	monthStartFormat: N,
	dayCellFormat: N,
	handleCustomRendering: F,
	customRenderingMetaMap: F,
	popoverClass: gs,
	popoverCloseClass: gs,
	popoverCloseContent: F,
	dayNarrowWidth: Number,
	borderless: Boolean,
	borderlessX: Boolean,
	borderlessTop: Boolean,
	borderlessBottom: Boolean,
	fillerClass: P,
	headerToolbarClass: P,
	footerToolbarClass: P,
	toolbarClass: P,
	toolbarSectionClass: P,
	toolbarTitleClass: gs,
	tableClass: P,
	tableHeaderClass: P,
	tableBodyClass: P,
	nonBusinessHoursClass: gs,
	highlightClass: gs,
	dayHeaders: Boolean,
	dayHeaderFormat: N,
	allDayDividerClass: gs,
	listDaysClass: gs,
	listDayClass: P,
	listDayFormat: mc,
	listDayAltFormat: mc,
	listDayHeaderDidMount: F,
	listDayHeaderWillUnmount: F,
	listDayHeaderClass: P,
	listDayHeaderInnerClass: P,
	listDayHeaderContent: F,
	listDayBodyClass: P,
	noEventsClass: P,
	noEventsInnerClass: P,
	noEventsContent: F,
	noEventsDidMount: F,
	noEventsWillUnmount: F,
	multiMonthMaxColumns: Number,
	singleMonthMinWidth: Number,
	singleMonthTitleFormat: N,
	singleMonthDidMount: F,
	singleMonthWillUnmount: F,
	singleMonthClass: P,
	singleMonthHeaderClass: P,
	singleMonthHeaderInnerClass: P
}, cc = {
	buttonDisplay: "auto",
	eventDisplay: "auto",
	defaultTimedEventDuration: "01:00:00",
	defaultAllDayEventDuration: { day: 1 },
	forceEventDuration: !1,
	nextDayThreshold: "00:00:00",
	initialView: "",
	aspectRatio: 1.35,
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
	dragRevertDuration: 500,
	dragScroll: !0,
	allDayMaintainDuration: !1,
	unselectAuto: !0,
	dropAccept: "*",
	eventOrder: "start,-duration,allDay,title",
	eventSlicing: !0,
	eventPrintLayout: "auto",
	popoverFormat: {
		month: "long",
		day: "numeric",
		year: "numeric"
	},
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
	dayCellFormat: {
		day: "numeric",
		omitTrailing: !0
	},
	headingLevel: 2,
	outerBorder: !0,
	dayNarrowWidth: 80,
	eventOverlap: !0,
	slotHeaderAlign: "start",
	slotHeaderSticky: !0,
	dayHeaderAlign: "start",
	_dayHeaderSticky: !0,
	rowEventTitleSticky: !0,
	columnEventTitleSticky: !0,
	nowIndicatorSnap: "auto",
	dayHeaders: !0
}, lc = {
	datesSet: F,
	eventsSet: F,
	eventAdd: F,
	eventChange: F,
	eventRemove: F,
	eventClick: F,
	eventMouseEnter: F,
	eventMouseLeave: F,
	select: F,
	unselect: F,
	loading: F,
	_unmount: F,
	_beforeprint: F,
	_afterprint: F,
	_noDateSelect: F,
	_noEventDrop: F,
	_noEventResize: F,
	_timeScrollRequest: F,
	dateClick: F,
	eventDragStart: F,
	eventDragStop: F,
	eventDrop: F,
	eventResizeStart: F,
	eventResizeStop: F,
	eventResize: F,
	drop: F,
	eventReceive: F,
	eventLeave: F
}, uc = {
	class: P,
	className: P,
	viewClass: P,
	viewDidMount: F,
	viewWillUnmount: F,
	views: F,
	plugins: F,
	initialEvents: F,
	events: F,
	eventSources: F
}, dc = {
	type: String,
	component: F,
	class: P,
	className: P,
	content: F,
	didMount: F,
	willUnmount: F,
	buttonTextKey: String,
	dateProfileGeneratorClass: F,
	usesMinMaxTime: Boolean,
	disallowAmbigTitle: Boolean
}, fc = {
	dateIncrement: Ys,
	headerToolbar: Ys,
	footerToolbar: Ys,
	buttons: qs,
	plugins: ac,
	events: ac,
	eventSources: ac,
	resources: ac
};
function pc(e, t) {
	let n = {}, r = {};
	for (let r in t) r in e && (n[r] = t[r](e[r], r));
	for (let n in e) n in t || (r[n] = e[n]);
	return {
		refined: n,
		extra: r
	};
}
function F(e) {
	return e;
}
function mc(e) {
	return e === !1 ? null : N(e);
}
function hc(e, t, n, r) {
	let i = {
		start: e,
		end: t
	};
	return n != null && (i.instantStartMs = n), r != null && (i.instantEndMs = r), i;
}
function gc(e, t, n) {
	return t ?? n.toDate(e).valueOf();
}
function _c(e, t, n, r) {
	let i = t == null ? e : n.timestampToMarker(t), a = t == null ? n.offsetForMarker(e) : Math.round((i.valueOf() - t) / 6e4);
	return !r && t != null ? {
		marker: i,
		date: new Date(t),
		dateStr: Wo(i, a)
	} : {
		marker: i,
		date: n.toDate(e),
		dateStr: r ? n.formatIso(e, { omitTime: r }) : Wo(e, a)
	};
}
function vc(e, t) {
	return gc(e.start, e.instantStartMs, t);
}
function yc(e, t) {
	return gc(e.end, e.instantEndMs, t);
}
function bc(e, t) {
	return e.instantEndMs == null ? e.end : t.timestampToMarker(e.instantEndMs);
}
function xc(e) {
	return e.instantStartMs != null || e.instantEndMs != null;
}
function Sc(e, t, n) {
	return xc(e) || xc(t) ? vc(e, n) < yc(t, n) && yc(e, n) > vc(t, n) : yo(e, t);
}
function Cc(e, t, n) {
	if (xc(e) || xc(t)) {
		let r = e.start == null ? -Infinity : gc(e.start, e.instantStartMs, n), i = e.end == null ? Infinity : gc(e.end, e.instantEndMs, n);
		return r <= vc(t, n) && i >= yc(t, n);
	}
	return bo(e, t);
}
function wc(e, t, n) {
	if (e.instantMs != null && !t.years && !t.months && !t.days) {
		let r = Vo(t), i = e.instantMs + r, a = n.timestampToMarker(i);
		return a > e.marker ? {
			marker: a,
			instantMs: i
		} : {
			marker: Ua(e.marker, r),
			instantMs: i
		};
	}
	return { marker: n.add(e.marker, t) };
}
function Tc(e, t, n) {
	if (e.instantMs == null && t.instantMs == null) return t.marker > e.marker ? hc(e.marker, t.marker) : null;
	let r = gc(e.marker, e.instantMs, n), i = gc(t.marker, t.instantMs, n);
	return i <= r ? null : hc(e.marker, t.marker > e.marker ? t.marker : Ua(e.marker, i - r), e.instantMs, t.instantMs);
}
function Ec(e, t) {
	return {
		instanceId: Ds(),
		defId: e,
		range: t
	};
}
function Dc(e) {
	let t = Math.floor(Ga(e.start, e.end)) || 1, n = k(e.start);
	return {
		start: n,
		end: O(n, t)
	};
}
function Oc(e, t = A(0)) {
	let n = null, r = null;
	if (e.end) {
		r = k(e.end);
		let n = e.end.valueOf() - r.valueOf();
		n && n >= Vo(t) && (r = O(r, 1));
	}
	return e.start && (n = k(e.start), r && r <= n && (r = O(n, 1))), {
		start: n,
		end: r
	};
}
function kc(e, t, n, r) {
	return r === "year" ? A(n.diffWholeYears(e, t), "year") : r === "month" ? A(n.diffWholeMonths(e, t), "month") : Ya(e, t);
}
function Ac(e, t, n, r) {
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
function jc(e, t, n) {
	let { dateEnv: r, pluginHooks: i, options: a } = n, { defs: o, instances: s } = e;
	s = Us(s, (e) => !o[e.defId].recurringDef);
	for (let e in o) {
		let n = o[e];
		if (n.recurringDef) {
			let { duration: o } = n.recurringDef;
			o ||= n.allDay ? a.defaultAllDayEventDuration : a.defaultTimedEventDuration;
			let c = Mc(n, o, t, r, i.recurringTypes);
			for (let t of c) {
				let n = Ec(e, {
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
function Mc(e, t, n, r, i) {
	let a = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
		start: r.subtract(n.start, t),
		end: n.end
	}, r);
	return e.allDay && (a = a.map(k)), a;
}
function Nc(e, t, n, r, i, a) {
	let o = Lc(), s = Qc(n);
	for (let c of e) {
		let e = Xc(c, t, n, r, s, i, a);
		e && Pc(e, o);
	}
	return o;
}
function Pc(e, t = Lc()) {
	return t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
}
function Fc(e, t) {
	let n = e.instances[t];
	if (n) {
		let t = e.defs[n.defId], r = zc(e, (e) => Ic(t, e));
		return r.defs[t.defId] = t, r.instances[n.instanceId] = n, r;
	}
	return Lc();
}
function Ic(e, t) {
	return !!(e.groupId && e.groupId === t.groupId);
}
function Lc() {
	return {
		defs: {},
		instances: {}
	};
}
function Rc(e, t) {
	return {
		defs: {
			...e.defs,
			...t.defs
		},
		instances: {
			...e.instances,
			...t.instances
		}
	};
}
function zc(e, t) {
	let n = Us(e.defs, t);
	return {
		defs: n,
		instances: Us(e.instances, (e) => n[e.defId])
	};
}
function Bc(e, t) {
	let { defs: n, instances: r } = e, i = {}, a = {};
	for (let e in n) t.defs[e] || (i[e] = n[e]);
	for (let e in r) !t.instances[e] && i[r[e].defId] && (a[e] = r[e]);
	return {
		defs: i,
		instances: a
	};
}
function Vc(e, t) {
	return Array.isArray(e) ? Nc(e, null, t, !0) : typeof e == "object" && e ? Nc([e], null, t, !0) : e == null ? null : String(e);
}
var Hc = {
	display: String,
	editable: Boolean,
	startEditable: Boolean,
	durationEditable: Boolean,
	constraint: F,
	overlap: F,
	allow: F,
	class: gs,
	className: gs,
	color: String,
	contrastColor: String
}, Uc = {
	display: null,
	startEditable: null,
	durationEditable: null,
	constraints: [],
	overlap: null,
	allows: [],
	color: "",
	contrastColor: "",
	className: ""
};
function Wc(e, t) {
	let n = Vc(e.constraint, t);
	return {
		display: e.display || null,
		startEditable: e.startEditable == null ? e.editable : e.startEditable,
		durationEditable: e.durationEditable == null ? e.editable : e.durationEditable,
		constraints: n == null ? [] : [n],
		overlap: e.overlap == null ? null : e.overlap,
		allows: e.allow == null ? [] : [e.allow],
		color: e.color || "",
		contrastColor: e.contrastColor || "",
		className: (e.class ?? e.className) || ""
	};
}
function Gc(e) {
	return e.reduce(Kc, Uc);
}
function Kc(e, t) {
	return {
		display: t.display == null ? e.display : t.display,
		startEditable: t.startEditable == null ? e.startEditable : t.startEditable,
		durationEditable: t.durationEditable == null ? e.durationEditable : t.durationEditable,
		constraints: e.constraints.concat(t.constraints),
		overlap: typeof t.overlap == "boolean" ? t.overlap : e.overlap,
		allows: e.allows.concat(t.allows),
		color: t.color || e.color,
		contrastColor: t.contrastColor || e.contrastColor,
		className: M(e.className, t.className)
	};
}
var qc = {
	id: String,
	groupId: String,
	title: String,
	url: String,
	interactive: Boolean
}, Jc = {
	start: F,
	end: F,
	date: F,
	allDay: Boolean
}, Yc = {
	...qc,
	...Jc,
	extendedProps: F
};
function Xc(e, t, n, r, i = Qc(n), a, o) {
	let { refined: s, extra: c } = Zc(e, n, i), l = tl(t, n), u = Ac(s, l, n.dateEnv, n.pluginHooks.recurringTypes);
	if (u) {
		let e = $c(s, c, t ? t.sourceId : "", u.allDay, !!u.duration, n, a);
		return e.recurringDef = {
			typeId: u.typeId,
			typeData: u.typeData,
			duration: u.duration
		}, {
			def: e,
			instance: null
		};
	}
	let d = el(s, l, n, r);
	if (d) {
		let e = $c(s, c, t ? t.sourceId : "", d.allDay, d.hasEnd, n, a), r = Ec(e.defId, d.range);
		return o && e.publicId && o[e.publicId] && (r.instanceId = o[e.publicId]), {
			def: e,
			instance: r
		};
	}
	return null;
}
function Zc(e, t, n = Qc(t)) {
	return pc(e, n);
}
function Qc(e) {
	return {
		...Hc,
		...Yc,
		...e.pluginHooks.eventRefiners
	};
}
function $c(e, t, n, r, i, a, o) {
	let s = {
		title: e.title || "",
		groupId: e.groupId || "",
		publicId: e.id || "",
		url: e.url || "",
		recurringDef: null,
		defId: (o && e.id ? o[e.id] : "") || Ds(),
		sourceId: n,
		allDay: r,
		hasEnd: i,
		interactive: e.interactive,
		ui: Wc(e, a),
		extendedProps: {
			...e.extendedProps || {},
			...t
		}
	};
	for (let t of a.pluginHooks.eventDefMemberAdders) Object.assign(s, t(e));
	return Object.freeze(s.ui.className), Object.freeze(s.extendedProps), s;
}
function el(e, t, n, r) {
	let { allDay: i } = e, a, o = null, s = !1, c, l = null, u = e.start == null ? e.date : e.start;
	if (a = n.dateEnv.createMarkerMeta(u), a) o = a.marker;
	else if (!r) return null;
	e.end != null && (c = n.dateEnv.createMarkerMeta(e.end)), i ??= t ?? ((!a || a.isTimeUnspecified) && (!c || c.isTimeUnspecified)), i && o && (o = k(o));
	let d = !i && a ? a.instantMs : void 0, f = null;
	if (c && (l = i ? k(c.marker) : c.marker, o ? i ? l > o && (f = hc(o, l)) : f = Tc({
		marker: o,
		instantMs: d
	}, {
		marker: l,
		instantMs: c.instantMs
	}, n.dateEnv) : f = hc(o, l, void 0, i ? void 0 : c.instantMs)), f) s = !0;
	else if (r) f = hc(o, null, d);
	else {
		s = n.options.forceEventDuration || !1;
		let e = wc({
			marker: o,
			instantMs: d
		}, i ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration, n.dateEnv);
		f = hc(o, e.marker, d, e.instantMs);
	}
	return {
		allDay: i,
		hasEnd: s,
		range: f
	};
}
function tl(e, t) {
	let n = null;
	return e && (n = e.defaultAllDay), n ??= t.options.defaultAllDay, n;
}
var nl = {
	start: F,
	end: F,
	allDay: Boolean
};
function rl(e, t, n) {
	let r = il(e, t);
	if (!r) return null;
	let { range: i } = r;
	if (!i.start) return null;
	if (!i.end) {
		if (n == null) return null;
		let e = wc({
			marker: i.start,
			instantMs: r.instantStartMs
		}, n, t);
		i.end = e.marker, e.instantMs != null && (r.instantEndMs = e.instantMs);
	}
	return r;
}
function il(e, t) {
	let { refined: n, extra: r } = pc(e, nl), i = n.start ? t.createMarkerMeta(n.start) : null, a = n.end ? t.createMarkerMeta(n.end) : null, { allDay: o } = n;
	o ??= i && i.isTimeUnspecified && (!a || a.isTimeUnspecified);
	let s = {
		start: i ? i.marker : null,
		end: a ? a.marker : null
	};
	if (!o && i && a && (i.instantMs != null || a.instantMs != null)) {
		let e = Tc({
			marker: i.marker,
			instantMs: i.instantMs
		}, {
			marker: a.marker,
			instantMs: a.instantMs
		}, t);
		if (!e && i.instantMs != null && a.instantMs != null) return null;
		e && (s = {
			start: e.start,
			end: e.end
		});
	}
	let c = {
		range: s,
		allDay: o,
		...r
	};
	return o ? (delete c.instantStartMs, delete c.instantEndMs) : (i?.instantMs != null && (c.instantStartMs = i.instantMs), a?.instantMs != null && (c.instantEndMs = a.instantMs)), c;
}
function al(e, t) {
	return vo(e.range, t.range) && e.allDay === t.allDay && ol(e, t);
}
function ol(e, t) {
	for (let n in t) if (n !== "range" && n !== "allDay" && e[n] !== t[n]) return !1;
	for (let n in e) if (!(n in t)) return !1;
	return !0;
}
function sl(e, t) {
	return {
		...ll(e.range, t, e.allDay, e),
		allDay: e.allDay
	};
}
function cl(e, t, n) {
	return {
		...ll(e, t, n),
		timeZone: t.timeZone
	};
}
function ll(e, t, n, r) {
	let i = r?.instantStartMs ?? e.instantStartMs, a = r?.instantEndMs ?? e.instantEndMs, o = _c(e.start, i, t, n), s = _c(e.end, a, t, n);
	return {
		start: o.date,
		end: s.date,
		startStr: o.dateStr,
		endStr: s.dateStr
	};
}
function ul(e, t) {
	return gc(e.range.start, e.instantStartMs, t);
}
function dl(e, t) {
	return gc(e.range.end, e.instantEndMs, t);
}
function fl(e, t, n) {
	let r = Zc({ editable: !1 }, n), i = $c(r.refined, r.extra, "", e.allDay, !0, n);
	return {
		def: i,
		ui: Pl(i, t),
		instance: Ec(i.defId, e.range),
		range: e.range,
		isStart: !0,
		isEnd: !0
	};
}
function pl(e, t, n) {
	n.emitter.trigger("select", {
		...hl(e, n),
		jsEvent: t ? t.origEvent : null,
		view: n.viewApi || n.calendarApi.view
	});
}
function ml(e, t) {
	t.emitter.trigger("unselect", {
		jsEvent: e ? e.origEvent : null,
		view: t.viewApi || t.calendarApi.view
	});
}
function hl(e, t) {
	let n = {};
	for (let r of t.pluginHooks.dateSpanTransforms) Object.assign(n, r(e, t));
	return Object.assign(n, sl(e, t.dateEnv)), n;
}
function gl(e, t, n) {
	let { dateEnv: r, options: i } = n, a = t;
	return e ? (a = k(a), a = r.add(a, i.defaultAllDayEventDuration)) : a = r.add(a, i.defaultTimedEventDuration), a;
}
function _l(e, t, n) {
	return e ? { marker: gl(!0, t.marker, n) } : wc(t, n.options.defaultTimedEventDuration, n.dateEnv);
}
function vl(e, t, n, r) {
	let i = Nl(e.defs, t), a = Lc();
	for (let t in e.defs) {
		let o = e.defs[t];
		a.defs[t] = yl(o, i[t], n, r);
	}
	for (let t in e.instances) {
		let o = e.instances[t], s = a.defs[o.defId];
		a.instances[t] = bl(o, s, i[o.defId], n, r);
	}
	return a;
}
function yl(e, t, n, r) {
	let i = n.standardProps || {};
	i.hasEnd == null && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
	let a = {
		...e,
		...i,
		ui: {
			...e.ui,
			...i.ui
		}
	};
	n.extendedProps && (a.extendedProps = {
		...a.extendedProps,
		...n.extendedProps
	});
	for (let e of r.pluginHooks.eventDefMutationAppliers) e(a, n, r);
	return !a.hasEnd && r.options.forceEventDuration && (a.hasEnd = !0), a;
}
function bl(e, t, n, r, i) {
	let a = r.standardProps && r.standardProps.allDay === !0, o = r.standardProps && r.standardProps.hasEnd === !1, s = { ...e };
	if (a && (s.range = Dc(s.range)), r.datesDelta && n.startEditable && (s.range = Sl(xl(s.range.start, s.range.instantStartMs, r.datesDelta, r.instantDatesDeltaMs, i), xl(s.range.end, s.range.instantEndMs, r.datesDelta, r.instantDatesDeltaMs, i))), r.startDelta && n.durationEditable && (s.range = Sl(xl(s.range.start, s.range.instantStartMs, r.startDelta, r.instantStartDeltaMs, i), {
		marker: s.range.end,
		instantMs: s.range.instantEndMs
	})), r.endDelta && n.durationEditable && (s.range = Sl({
		marker: s.range.start,
		instantMs: s.range.instantStartMs
	}, xl(s.range.end, s.range.instantEndMs, r.endDelta, r.instantEndDeltaMs, i))), o) {
		let e = {
			marker: s.range.start,
			instantMs: s.range.instantStartMs
		};
		s.range = Sl(e, _l(t.allDay, e, i));
	}
	if (t.allDay && (s.range = {
		start: k(s.range.start),
		end: k(s.range.end)
	}), t.allDay) {
		if (s.range.end <= s.range.start) {
			let e = { marker: s.range.start };
			s.range = Sl(e, _l(!0, e, i));
		}
	} else {
		let e = {
			marker: s.range.start,
			instantMs: s.range.instantStartMs
		};
		s.range = Tc(e, {
			marker: s.range.end,
			instantMs: s.range.instantEndMs
		}, i.dateEnv) ?? Sl(e, _l(!1, e, i));
	}
	return s;
}
function xl(e, t, n, r, i) {
	if (r != null) {
		let n = gc(e, t, i.dateEnv) + r;
		return {
			marker: i.dateEnv.timestampToMarker(n),
			instantMs: n
		};
	}
	return { marker: i.dateEnv.add(t == null ? e : i.dateEnv.timestampToMarker(t), n) };
}
function Sl(e, t) {
	return hc(e.marker, t.marker, e.instantMs, t.instantMs);
}
var Cl = class {
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
}, wl = class e {
	constructor(e, t, n) {
		this._context = e, this._def = t, this._instance = n || null;
	}
	setProp(e, t) {
		if (e in Jc) ms(`Cannot set date-related event property \`${e}\`. Use a method instead.`);
		else if (e === "id") t = qc[e](t), this.mutate({ standardProps: { publicId: t } });
		else if (e in qc) t = qc[e](t), this.mutate({ standardProps: { [e]: t } });
		else if (e in Hc) {
			let n = Hc[e](t);
			n = e === "editable" ? {
				startEditable: t,
				durationEditable: t
			} : { [e]: t }, this.mutate({ standardProps: { ui: n } });
		} else ms(`Cannot set event property \`${e}\`. Use setExtendedProp instead.`);
	}
	setExtendedProp(e, t) {
		this.mutate({ extendedProps: { [e]: t } });
	}
	setStart(e, t = {}) {
		let { dateEnv: n } = this._context, r = n.createMarkerMeta(e);
		if (r && this._instance) {
			let e = this._instance.range, i = kc(e.start, r.marker, n, t.granularity), a = Tl(r, vc(e, n), t.granularity);
			t.maintainDuration ? this.mutate({
				datesDelta: i,
				instantDatesDeltaMs: a
			}) : this.mutate({
				startDelta: i,
				instantStartDeltaMs: a
			});
		}
	}
	setEnd(e, t = {}) {
		let { dateEnv: n } = this._context, r = null;
		if (!(e != null && (r = n.createMarkerMeta(e), !r)) && this._instance) {
			if (r) {
				let e = this._instance.range, i = kc(bc(e, n), r.marker, n, t.granularity), a = Tl(r, yc(e, n), t.granularity);
				this.mutate({
					endDelta: i,
					instantEndDeltaMs: a
				});
			} else this.mutate({ standardProps: { hasEnd: !1 } });
		}
	}
	setDates(e, t, n = {}) {
		let { dateEnv: r } = this._context, i = { allDay: n.allDay }, a = r.createMarkerMeta(e), o = null;
		if (a && !(t != null && (o = r.createMarkerMeta(t), !o)) && this._instance) {
			let e = this._instance.range, t = n.allDay === !0, s = t ? void 0 : Tl(a, vc(e, r), n.granularity), c = t || !o ? void 0 : Tl(o, yc(e, r), n.granularity);
			n.allDay === !0 && (e = Dc(e));
			let l = kc(e.start, a.marker, r, n.granularity);
			if (o) {
				let t = kc(bc(e, r), o.marker, r, n.granularity);
				jo(l, t) && s === c ? this.mutate({
					datesDelta: l,
					instantDatesDeltaMs: s,
					standardProps: i
				}) : this.mutate({
					startDelta: l,
					endDelta: t,
					instantStartDeltaMs: s,
					instantEndDeltaMs: c,
					standardProps: i
				});
			} else i.hasEnd = !1, this.mutate({
				datesDelta: l,
				instantDatesDeltaMs: s,
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
		let { dateEnv: t } = this._context, n = this._instance, r = N(e), i = _c(n.range.start, n.range.instantStartMs, t);
		if (this._def.hasEnd) {
			let e = _c(n.range.end, n.range.instantEndMs, t);
			return Yo(t.formatRangeToParts(i.marker, e.marker, r, {
				startInstantMs: i.date.valueOf(),
				endInstantMs: e.date.valueOf()
			}));
		}
		return Yo(t.formatToParts(i.marker, r, { instantMs: i.date.valueOf() }));
	}
	mutate(t) {
		let n = this._instance;
		if (n) {
			let r = this._def, i = this._context, { eventStore: a } = i.getCurrentData(), o = Fc(a, n.instanceId);
			o = vl(o, { "": {
				display: "",
				startEditable: !0,
				durationEditable: !0,
				constraints: [],
				overlap: null,
				allows: [],
				color: "",
				contrastColor: "",
				className: ""
			} }, t, i);
			let s = new e(i, r, n);
			this._def = o.defs[r.defId], this._instance = o.instances[n.instanceId], i.dispatch({
				type: "MERGE_EVENTS",
				eventStore: o
			}), i.emitter.trigger("eventChange", {
				oldEvent: s,
				event: this,
				relatedEvents: Dl(o, i, n),
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
		let e = this._context, t = El(this);
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
		return e ? new Cl(this._context, this._context.getCurrentData().eventSources[e]) : null;
	}
	get start() {
		let e = this._instance;
		return e ? _c(e.range.start, e.range.instantStartMs, this._context.dateEnv, this._def.allDay).date : null;
	}
	get end() {
		let e = this._instance;
		return e && this._def.hasEnd ? _c(e.range.end, e.range.instantEndMs, this._context.dateEnv, this._def.allDay).date : null;
	}
	get startStr() {
		let e = this._instance;
		return e ? _c(e.range.start, e.range.instantStartMs, this._context.dateEnv, this._def.allDay).dateStr : "";
	}
	get endStr() {
		let e = this._instance;
		return e && this._def.hasEnd ? _c(e.range.end, e.range.instantEndMs, this._context.dateEnv, this._def.allDay).dateStr : "";
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
	get color() {
		return this._def.ui.color;
	}
	get contrastColor() {
		return this._def.ui.contrastColor;
	}
	get className() {
		return this._def.ui.className;
	}
	get extendedProps() {
		return this._def.extendedProps;
	}
	toPlainObject(e = {}) {
		let t = this._def, { ui: n } = t, { startStr: r, endStr: i } = this, a = { allDay: t.allDay };
		return t.title && (a.title = t.title), r && (a.start = r), i && (a.end = i), t.publicId && (a.id = t.publicId), t.groupId && (a.groupId = t.groupId), t.url && (a.url = t.url), n.display && n.display !== "auto" && (a.display = n.display), n.color && (a.color = n.color), n.contrastColor && (a.contrastColor = n.contrastColor), n.className && (a.className = n.className), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(a, t.extendedProps) : a.extendedProps = t.extendedProps), a;
	}
	toJSON() {
		return this.toPlainObject();
	}
};
function Tl(e, t, n) {
	return e.instantMs != null && !n ? e.instantMs - t : void 0;
}
function El(e) {
	let t = e._def, n = e._instance;
	return {
		defs: { [t.defId]: t },
		instances: n ? { [n.instanceId]: n } : {}
	};
}
function Dl(e, t, n) {
	let { defs: r, instances: i } = e, a = [], o = n ? n.instanceId : "";
	for (let e in i) {
		let n = i[e], s = r[n.defId];
		n.instanceId !== o && a.push(new wl(t, s, n));
	}
	return a;
}
function Ol(e, t, n, r) {
	let i = {}, a = {}, o = {}, s = [], c = [], l = Nl(e.defs, t);
	for (let t in e.defs) {
		let n = e.defs[t];
		l[n.defId].display === "inverse-background" && (n.groupId ? (i[n.groupId] = [], o[n.groupId] || (o[n.groupId] = n)) : a[t] = []);
	}
	for (let t in e.instances) {
		let o = e.instances[t], u = e.defs[o.defId], d = l[u.defId], f = o.range, p = !u.allDay && r ? Oc(f, r) : f, m = _o(p, n);
		m && (d.display === "inverse-background" ? u.groupId ? i[u.groupId].push(m) : a[o.defId].push(m) : d.display !== "none" && (d.display === "background" ? s : c).push({
			def: u,
			ui: d,
			instance: o,
			range: kl(f, p, m),
			isStart: p.start && p.start.valueOf() === m.start.valueOf(),
			isEnd: p.end && p.end.valueOf() === m.end.valueOf()
		}));
	}
	for (let e in i) {
		let t = i[e], r = ho(t, n);
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
		let r = a[t], i = ho(r, n);
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
function kl(e, t, n) {
	return t === e ? hc(n.start, n.end, n.start.valueOf() === e.start.valueOf() ? e.instantStartMs : void 0, n.end.valueOf() === e.end.valueOf() ? e.instantEndMs : void 0) : n;
}
function Al(e) {
	return e.ui.display === "background" || e.ui.display === "inverse-background";
}
function jl(e, t) {
	e.fcEventRange = t;
}
function Ml(e) {
	return e.fcEventRange || e.parentNode.fcEventRange || null;
}
function Nl(e, t) {
	return Ws(e, (e) => Pl(e, t));
}
function Pl(e, t) {
	let n = [], r = t[""], i = t[e.defId];
	return r && n.push(r), i && n.push(i), n.push(e.ui), Gc(n);
}
function Fl(e, t) {
	let n = e.map(Il);
	return n.sort((e, n) => Fs(e, n, t)), n.map((e) => e._seg);
}
function Il(e) {
	let { eventRange: t } = e, n = t.def, r = t.instance ? t.instance.range : t.range, i = r.start ? r.start.valueOf() : 0, a = r.end ? r.end.valueOf() : 0;
	return {
		...n.extendedProps,
		...n,
		id: n.publicId,
		start: i,
		end: a,
		duration: a - i,
		allDay: Number(n.allDay),
		_seg: e
	};
}
function Ll(e, t) {
	let { pluginHooks: n } = t, r = n.isDraggableTransformers, { def: i, ui: a } = e, o = a.startEditable;
	for (let e of r) o = e(o, i, a, t);
	return o;
}
function Rl(e, t, n, r, i, a, o, s = !0, c = !0) {
	let { dateEnv: l, options: u } = o, { def: d } = t, { range: f } = t.instance, p = _c(f.start, f.instantStartMs, l), m = _c(f.end, f.instantEndMs, l), { displayEventTime: h, displayEventEnd: g } = u;
	h ??= s !== !1, g ??= c !== !1;
	let _ = !i && n && k(n).valueOf() !== k(p.marker).valueOf() ? n : p.marker, v = !a && r && k(Ua(r, -1)).valueOf() !== k(Ua(m.marker, -1)).valueOf() ? r : m.marker, y = _ === p.marker ? p.date.valueOf() : void 0, b = v === m.marker ? m.date.valueOf() : void 0;
	if (h && !d.allDay) {
		if (g && (i || a) && d.hasEnd) {
			let t = l.formatRangeToParts(_, v, e, {
				startInstantMs: y,
				endInstantMs: b
			}), n = Bl(t);
			return n == null ? Yo(t) : Yo(l.formatToParts(_, e, { instantMs: y })) + n + Yo(l.formatToParts(v, e, { instantMs: b }));
		}
		if (i) return Yo(l.formatToParts(_, e, { instantMs: y }));
	}
	return "";
}
var zl = /* @__PURE__ */ new Set([
	"year",
	"month",
	"day"
]);
function Bl(e) {
	let t, n = !1;
	for (let r of e) r.source === "shared" && (t = r), zl.has(r.type) && (n = !0);
	return n ? t.value : void 0;
}
function Vl(e, t, n, r) {
	let i = e.range;
	return {
		isPast: i.instantEndMs != null && r != null ? i.instantEndMs <= r : i.end <= (n || t.start),
		isFuture: i.instantStartMs != null && r != null ? i.instantStartMs >= r : i.start >= (n || t.end),
		isToday: t && xo(t, i.start)
	};
}
function Hl(e) {
	return e.instance ? e.instance.instanceId : `${e.def.defId}:${e.range.start.toISOString()}`;
}
function Ul(e, t) {
	let { def: n, instance: r } = e, { url: i } = n;
	if (i) return [
		"a",
		{ href: i },
		!0
	];
	let { emitter: a, options: o } = t, { eventInteractive: s } = o;
	s ?? (s = n.interactive, s ??= !!a.hasHandlers("eventClick"));
	let c;
	return s && (c = Ts((e) => {
		a.trigger("eventClick", {
			el: e.target,
			event: new wl(t, n, r),
			jsEvent: e,
			view: t.viewApi
		});
	}), c = {
		role: "button",
		...c
	}), [
		"div",
		c,
		s
	];
}
//#endregion
//#region node_modules/fullcalendar/chunks/d510f94a.js
var Wl = /(^c|C)lass(Name)?$/, Gl = /Content$/, Kl = /(DidMount|WillUnmount)$/, ql = /^on[A-Z]/, Jl = { buttons: $s };
function Yl(...e) {
	let t = {};
	for (let n of e) for (let e in n) {
		let r = n[e];
		t[e] = t[e] ? Xl(t[e], r) : r;
	}
	return t;
}
function Xl(...e) {
	let t = {};
	for (let n of e) for (let e in n) if (e in t) {
		let r = Jl[e] || (Wl.test(e) ? Zl : Gl.test(e) ? Ql : Kl.test(e) ? $l : void 0);
		t[e] = r ? r(t[e], n[e], e) : n[e];
	} else t[e] = n[e];
	return t;
}
function Zl(e, t, n) {
	let r = typeof e == "function", i = typeof t == "function";
	if (r || i) {
		let a = (a) => M(gs(r ? e(a) : e, n), gs(i ? t(a) : t, n));
		return a.parts = [e, t], a;
	}
	return M(gs(e, n), gs(t, n));
}
function Ql(e, t) {
	if (typeof t == "function") {
		let n = (n) => {
			let r = t(n);
			return r === !0 ? typeof e == "function" ? e(n) : e : r;
		};
		return n.parts = [e, t], n;
	}
	return t ?? e;
}
function $l(e, t) {
	if (e && t) {
		let n = (...n) => {
			e(...n), t(...n);
		};
		return n.parts = [e, t], n;
	}
	return e || t;
}
function eu(e, t) {
	let n = Qs(e, t);
	for (let e of n) if (!ql.test(e)) return !1;
	return !0;
}
function tu(e, t) {
	let n = e && e.parts, r = t && t.parts;
	if (n && r) {
		let e = n.length;
		if (e !== r.length) return !1;
		for (let t = 0; t < e; t++) if (!(n[t] === r[t] || tu(n[t], r[t]))) return !1;
		return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/fullcalendar/chunks/5f6afc82.js
var nu = [], ru = {
	code: "en",
	week: {
		dow: 0,
		doy: 4
	},
	direction: "ltr",
	todayText: "Today",
	prevText: "Prev",
	nextText: "Next",
	prevYearText: "Prev year",
	nextYearText: "Next year",
	yearText: "Year",
	monthText: "Month",
	weekTextLong: "Week",
	dayText: "Day",
	listText: "List",
	closeHint: "Close",
	eventsHint: "Events",
	allDayText: "All-day",
	timedText: "Timed",
	moreLinkText: "more",
	noEventsText: "No events to display"
}, iu = {
	...ru,
	weekTextShort: "W",
	todayHint: (e, t) => t === "day" ? "Today" : `This ${e}`,
	prevHint: "Previous $0",
	nextHint: "Next $0",
	viewHint: "$0 view",
	viewChangeHint: "Change view",
	navLinkHint: "Go to $0",
	moreLinkHint(e) {
		return `Show ${e} more event${e === 1 ? "" : "s"}`;
	}
};
function au(e) {
	let t = e.length > 0 ? e[0].code : "en", n = nu.concat(e), r = { en: iu };
	for (let e of n) r[e.code] = e;
	return {
		map: r,
		defaultCode: t
	};
}
function ou(e, t) {
	return typeof e == "object" && !Array.isArray(e) ? lu(e.code, [e.code], e) : su(e, t);
}
function su(e, t) {
	let n = [].concat(e || []);
	return lu(e, n, cu(n, t) || iu);
}
function cu(e, t) {
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n].toLocaleLowerCase().split("-");
		for (let e = r.length; e > 0; --e) {
			let n = r.slice(0, e).join("-");
			if (t[n]) return t[n];
		}
	}
	return null;
}
function lu(e, t, n) {
	let r = Xl(ru, n);
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
var uu = class extends Error {
	constructor(e, t) {
		super(e), this.response = t;
	}
};
function du(e, t, n) {
	e = e.toUpperCase();
	let r = { method: e };
	return e === "GET" ? t += (t.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = { "Content-Type": "application/x-www-form-urlencoded" }), fetch(t, r).then((e) => {
		if (e.ok) return e.json().then((t) => [t, e], () => {
			throw new uu("Failure parsing JSON", e);
		});
		throw new uu("Request failed", e);
	});
}
function fu(e, t) {
	t.emitter.trigger("datesSet", {
		...cl(e.activeRange, t.dateEnv),
		view: t.viewApi
	});
}
function pu(e, t) {
	let { emitter: n } = t;
	n.hasHandlers("eventsSet") && n.trigger("eventsSet", Dl(e, t));
}
var mu = {
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
};
function hu(e, t, n) {
	let r = !1, i = function(e) {
		r || (r = !0, t(e));
	}, a = function(e) {
		r || (r = !0, n(e));
	}, o = e(i, a);
	o && typeof o.then == "function" && o.then(i, a);
}
var gu = {
	name: "func-event-source",
	eventSourceDefs: [{
		parseMeta(e) {
			return typeof e.events == "function" ? e.events : null;
		},
		fetch(e, t, n) {
			let { dateEnv: r } = e.context, i = e.eventSource.meta;
			hu(i.bind(null, cl(e.range, r)), (e) => t({ rawEvents: e }), n);
		}
	}]
}, _u = {
	name: "json-event-source",
	eventSourceRefiners: {
		method: String,
		extraParams: F,
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
			let { meta: r } = e.eventSource, i = vu(r, e.range, e.context);
			du(r.method, r.url, i).then(([e, n]) => {
				t({
					rawEvents: e,
					response: n
				});
			}, n);
		}
	}]
};
function vu(e, t, n) {
	let { dateEnv: r, options: i } = n, a, o, s, c, l = {};
	return a = e.startParam, a ??= i.startParam, o = e.endParam, o ??= i.endParam, s = e.timeZoneParam, s ??= i.timeZoneParam, c = typeof e.extraParams == "function" ? e.extraParams() : e.extraParams || {}, Object.assign(l, c), l[a] = r.formatIso(t.start), l[o] = r.formatIso(t.end), r.timeZone !== "local" && (l[s] = r.timeZone), l;
}
var yu = {
	name: "change-handler",
	optionChangeHandlers: {
		controller(e, t) {
			e._setApi(t.calendarApi);
		},
		events(e, t) {
			bu([e], t);
		},
		eventSources: bu
	}
};
function bu(e, t) {
	let n = Gs(t.getCurrentData().eventSources);
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
var xu = {
	id: String,
	defaultAllDay: Boolean,
	url: String,
	format: String,
	events: F,
	eventDataTransform: F,
	success: F,
	failure: F
};
function Su(e, t, n = Cu(t)) {
	let r;
	if (typeof e == "string" ? r = { url: e } : typeof e == "function" || Array.isArray(e) ? r = { events: e } : typeof e == "object" && e && (r = e), r) {
		let { refined: i, extra: a } = pc(r, n), o = wu(i, t);
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
			sourceId: Ds(),
			sourceDefId: o.sourceDefId,
			meta: o.meta,
			ui: Wc(i, t),
			extendedProps: a
		};
	}
	return null;
}
function Cu(e) {
	return {
		...Hc,
		...xu,
		...e.pluginHooks.eventSourceRefiners
	};
}
function wu(e, t) {
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
function Tu(e, t, n) {
	let r = t ? t.activeRange : null;
	return ku({}, Lu(e, n), r, n);
}
function Eu(e, t, n, r) {
	let i = n ? n.activeRange : null;
	switch (t.type) {
		case "ADD_EVENT_SOURCES": return ku(e, t.sources, i, r);
		case "REMOVE_EVENT_SOURCE": return Au(e, t.sourceId);
		case "PREV":
		case "NEXT":
		case "CHANGE_DATE":
		case "CHANGE_VIEW_TYPE": return n ? ju(e, i, r) : e;
		case "FETCH_EVENT_SOURCES": return Nu(e, t.sourceIds ? Ks(t.sourceIds) : Iu(e, r), i, t.isRefetch || !1, r);
		case "RECEIVE_EVENTS":
		case "RECEIVE_EVENT_ERROR": return Fu(e, t.sourceId, t.fetchId, t.fetchRange);
		case "REMOVE_ALL_EVENT_SOURCES": return {};
		default: return e;
	}
}
function Du(e, t, n) {
	let r = t ? t.activeRange : null;
	return Nu(e, Iu(e, n), r, !0, n);
}
function Ou(e) {
	for (let t in e) if (e[t].isFetching) return !0;
	return !1;
}
function ku(e, t, n, r) {
	let i = {};
	for (let e of t) i[e.sourceId] = e;
	return n && (i = ju(i, n, r)), {
		...e,
		...i
	};
}
function Au(e, t) {
	return Us(e, (e) => e.sourceId !== t);
}
function ju(e, t, n) {
	return Nu(e, Us(e, (e) => Mu(e, t, n)), t, !1, n);
}
function Mu(e, t, n) {
	return Ru(e, n) ? !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId;
}
function Nu(e, t, n, r, i) {
	let a = {};
	for (let o in e) {
		let s = e[o];
		a[o] = t[o] ? Pu(s, n, r, i) : s;
	}
	return a;
}
function Pu(e, t, n, r) {
	let { options: i, calendarApi: a } = r, o = r.pluginHooks.eventSourceDefs[e.sourceDefId], s = Ds();
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
		i.eventSourceFailure && (i.eventSourceFailure.call(a, n), o = !0), e.failure && (e.failure(n), o = !0), o || ms(`Unhandled event source error: ${n.message}`, n), r.dispatch({
			type: "RECEIVE_EVENT_ERROR",
			sourceId: e.sourceId,
			fetchId: s,
			fetchRange: t,
			error: n
		});
	}), {
		...e,
		isFetching: !0,
		latestFetchId: s
	};
}
function Fu(e, t, n, r) {
	let i = e[t];
	return i && n === i.latestFetchId ? {
		...e,
		[t]: {
			...i,
			isFetching: !1,
			fetchRange: r
		}
	} : e;
}
function Iu(e, t) {
	return Us(e, (e) => Ru(e, t));
}
function Lu(e, t) {
	let n = Cu(t), r = [].concat(e.eventSources || []), i = [];
	e.initialEvents && r.unshift(e.initialEvents), e.events && r.unshift(e.events);
	for (let e of r) {
		let r = Su(e, t, n);
		r && i.push(r);
	}
	return i;
}
function Ru(e, t) {
	return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
}
var zu = {
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
				return e.duration && (r = e.duration), !r && e.startTime && e.endTime && (r = Po(e.endTime, e.startTime)), {
					allDayGuess: !e.startTime && !e.endTime,
					duration: r,
					typeData: n
				};
			}
			return null;
		},
		expand(e, t, n) {
			let r = _o(t, {
				start: e.startRecur,
				end: e.endRecur
			});
			return r ? Bu(e.daysOfWeek, e.startTime, e.dateEnv, n, r) : [];
		}
	}],
	eventRefiners: {
		daysOfWeek: F,
		startTime: A,
		endTime: A,
		duration: A,
		startRecur: F,
		endRecur: F
	}
};
function Bu(e, t, n, r, i) {
	let a = e ? Ks(e) : null, o = k(i.start), s = i.end, c = [];
	for (t && (t.milliseconds < 0 ? s = O(s, 1) : t.milliseconds >= 864e5 && (o = O(o, -1))); o < s;) {
		let e;
		(!a || a[o.getUTCDay()]) && (e = t ? r.add(o, t) : o, c.push(r.createMarker(n.toDate(e)))), o = O(o, 1);
	}
	return c;
}
var Vu = [
	mu,
	gu,
	_u,
	zu,
	yu,
	{
		name: "misc",
		isLoadingFuncs: [(e) => Ou(e.eventSources)],
		propSetHandlers: {
			dateProfile: fu,
			eventStore: pu
		}
	}
], Hu = class {
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
		Uu(this.handlers, e, t);
	}
	off(e, t) {
		Wu(this.handlers, e, t);
	}
	trigger(e, ...t) {
		let n = this.handlers[e] || [], r = this.options && this.options[e], i = [].concat(r || [], n);
		for (let e of i) e.apply(this.thisContext, t);
	}
	hasHandlers(e) {
		return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
	}
};
function Uu(e, t, n) {
	(e[t] || (e[t] = [])).push(n);
}
function Wu(e, t, n) {
	n ? e[t] && (e[t] = e[t].filter((e) => e !== n)) : delete e[t];
}
function Gu(e) {
	let t = e.getRootNode();
	return t instanceof Document ? t.body || t.documentElement : t;
}
function Ku(e) {
	return getComputedStyle(e).direction === "rtl";
}
var qu = /(top|left|right|bottom|width|height)$/i;
function Ju(e, t) {
	for (let n in t) Yu(e, n, t[n]);
}
function Yu(e, t, n) {
	n == null ? e.style[t] = "" : typeof n == "number" && qu.test(t) ? e.style[t] = `${n}px` : e.style[t] = n;
}
function Xu(e) {
	return e.composedPath?.()[0] ?? e.target;
}
//#endregion
//#region node_modules/fullcalendar/chunks/082a16c4.js
function I(e, t, n) {
	let r, i;
	return function(...a) {
		if (!r) i = e.apply(this, a);
		else if (!oc(r, a)) {
			n && n(i);
			let r = e.apply(this, a);
			(!t || !t(r, i)) && (i = r);
		}
		return r = a, i;
	};
}
function Zu(e, t, n) {
	let r, i;
	return (a) => {
		if (!r) i = e.call(this, a);
		else if (!Xs(r, a)) {
			n && n(i);
			let r = e.call(this, a);
			(!t || !t(r, i)) && (i = r);
		}
		return r = a, i;
	};
}
var Qu = xe({});
function $u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
	return {
		dateEnv: i,
		nowManager: a,
		options: n,
		pluginHooks: o,
		emitter: l,
		dispatch: s,
		getCurrentData: c,
		calendarApi: u,
		viewSpec: e,
		viewApi: t,
		dateProfileGenerator: r,
		baseId: d,
		registerInteractiveComponent: f,
		unregisterInteractiveComponent: p
	};
}
var ed = class extends T {
	shouldComponentUpdate(e, t) {
		return !Zs(this.props, e, this.propEquality) || !Zs(this.state, t, this.stateEquality);
	}
};
ed.addPropsEquality = td, ed.addStateEquality = nd, ed.contextType = Qu, ed.prototype.propEquality = {}, ed.prototype.stateEquality = {};
var L = class extends ed {};
L.contextType = Qu;
function td(e) {
	let t = Object.create(this.prototype.propEquality);
	Object.assign(t, e), this.prototype.propEquality = t;
}
function nd(e) {
	let t = Object.create(this.prototype.stateEquality);
	Object.assign(t, e), this.prototype.stateEquality = t;
}
function R(e, t) {
	typeof e == "function" ? e(t) : e && (e.current = t);
}
var rd = class extends L {
	constructor() {
		super(...arguments), this.id = Ds(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
			this.el = e, this.props.elRef && R(this.props.elRef, e);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, { customGenerator: r, defaultGenerator: i, renderProps: a } = e, o = ad(e, "", this.handleEl), s = !1, c, l = [], u;
		if (r != null) {
			let e = typeof r == "function" ? r(a) : r;
			if (e === !0) s = !0;
			else {
				let t = e && typeof e == "object";
				t && "html" in e ? o.dangerouslySetInnerHTML = { __html: e.html } : t && "domNodes" in e ? l = Array.prototype.slice.call(e.domNodes) : (t ? ft(e) : typeof e != "function") ? c = e : u = e;
			}
		} else s = !id(e.generatorName, n);
		return s && i && (c = i(a)), this.queuedDomNodes = l, this.currentGeneratorMeta = u, x(e.tag, o, c);
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
			n && r({
				id: this.id,
				isActive: e,
				containerEl: this.el,
				generatorMeta: n,
				renderProps: t.renderProps
			});
		}
	}
	applyQueueudDomNodes() {
		let { queuedDomNodes: e, currentDomNodes: t } = this, { el: n } = this;
		if (!oc(e, t)) {
			for (let e of t) e.remove();
			for (let t of e) n.appendChild(t);
			this.currentDomNodes = e;
		}
	}
};
rd.addPropsEquality({
	renderProps: Xs,
	attrs: eu,
	style: Xs
});
function id(e, t) {
	return !!(t.handleCustomRendering && e && t.customRenderingMetaMap?.[e]);
}
function ad(e, t, n) {
	let r = {
		...e.attrs,
		ref: n
	};
	return (e.className || t) && (r.className = M(t, e.className, r.className)), e.style && (r.style = e.style), r;
}
var od = xe(0), z = class extends T {
	constructor() {
		super(...arguments), this.InnerContent = sd.bind(void 0, this), this.handleEl = (e) => {
			this.el = e, this.props.elRef && (R(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
		};
	}
	render() {
		let { props: e } = this, t = B(e.classNameGenerator, e.renderProps);
		if (e.children) {
			let n = ad(e, t, this.handleEl), r = e.children(this.InnerContent, e.renderProps, n);
			return e.tag ? x(e.tag, n, r) : r;
		}
		return x(rd, {
			...e,
			elRef: this.handleEl,
			tag: e.tag || "div",
			className: M(e.className, t),
			renderId: this.context
		});
	}
	componentDidMount() {
		this.el ? this.props.didMount?.({
			...this.props.renderProps,
			el: this.el
		}) : this.didMountMisfire = !0;
	}
	componentWillUnmount() {
		this.props.willUnmount?.({
			...this.props.renderProps,
			el: this.el
		});
	}
};
z.contextType = od;
function sd(e, t) {
	let n = e.props;
	return x(rd, {
		renderProps: n.renderProps,
		generatorName: n.generatorName,
		customGenerator: n.customGenerator,
		defaultGenerator: n.defaultGenerator,
		renderId: e.context,
		...t
	});
}
function B(e, t) {
	return (typeof e == "function" ? e(t) : e) || "";
}
function cd(e) {
	return e.text;
}
function ld(e) {
	return e.height === "auto" || e.contentHeight === "auto";
}
function ud(e) {
	let { tableHeaderSticky: t } = e;
	return (t == null || t === "auto") && (t = ld(e)), t;
}
function dd(e) {
	let t = ld(e), { footerScrollbarSticky: n } = e;
	return (n == null || n === "auto") && (n = t), !!n && t;
}
function fd(e) {
	let t = e.scrollerSyncerClass;
	if (!t) throw RangeError("Must import @fullcalendar/scrollgrid");
	return t;
}
var pd = class {
	constructor(e) {
		this.handleChange = e, this.isMounted = !1, this.handleRefresh = () => {
			let e = this.computeTiming();
			(e.nowDate.valueOf() !== this.nowDate.valueOf() || e.nowMs !== this.nowMs) && (this.nowDate = e.nowDate, this.nowMs = e.nowMs, this.todayRange = e.todayRange, this.handleChange()), this.clearTimeout(), this.setTimeout(e.waitMs);
		}, this.handleVisibilityChange = () => {
			document.hidden || this.handleRefresh();
		};
	}
	update(e) {
		if (!this.isMounted) {
			this.isMounted = !0, this.unit = e.unit, this.unitValue = e.unitValue, this.nowIndicatorSnap = e.nowIndicatorSnap, this.nowManager = e.nowManager, this.dateEnv = e.dateEnv;
			let t = this.computeTiming();
			this.nowDate = t.nowDate, this.nowMs = t.nowMs, this.todayRange = t.todayRange, this.setTimeout(t.waitMs), this.nowManager.addResetListener(this.handleRefresh), typeof document < "u" && document.addEventListener("visibilitychange", this.handleVisibilityChange);
		} else if (e.unit !== this.unit || e.unitValue !== this.unitValue || e.nowIndicatorSnap !== this.nowIndicatorSnap || e.nowManager !== this.nowManager || e.dateEnv !== this.dateEnv) {
			this.unit = e.unit, this.unitValue = e.unitValue, this.nowIndicatorSnap = e.nowIndicatorSnap, this.nowManager = e.nowManager, this.dateEnv = e.dateEnv;
			let t = this.computeTiming();
			this.nowDate = t.nowDate, this.nowMs = t.nowMs, this.todayRange = t.todayRange, this.clearTimeout(), this.setTimeout(t.waitMs);
		}
		return {
			nowDate: this.nowDate,
			nowMs: this.nowMs,
			todayRange: this.todayRange
		};
	}
	destroy() {
		this.isMounted && (this.isMounted = !1, this.clearTimeout(), this.nowManager.removeResetListener(this.handleRefresh), typeof document < "u" && document.removeEventListener("visibilitychange", this.handleVisibilityChange));
	}
	computeTiming() {
		let { unit: e, unitValue: t, nowIndicatorSnap: n, dateEnv: r } = this, i = this.nowManager.getEpochMs(), a = r.timestampToMarker(i);
		n === "auto" && (n = /year|month|week|day/.test(e) || (t || 1) === 1);
		let o, s, c;
		return n ? (o = r.startOf(a, e), s = md(o, i, r), c = hd(r.add(o, A(1, e)), i, r) - i) : (o = a, s = i, c = 6e4), c = Math.min(864e5, c), {
			nowDate: o,
			nowMs: s,
			todayRange: vd(o),
			waitMs: c
		};
	}
	setTimeout(e = this.computeTiming().waitMs) {
		this.timeoutId = setTimeout(() => {
			let e = this.computeTiming();
			this.nowDate = e.nowDate, this.nowMs = e.nowMs, this.todayRange = e.todayRange, this.handleChange(), this.setTimeout(e.waitMs);
		}, e);
	}
	clearTimeout() {
		this.timeoutId && clearTimeout(this.timeoutId);
	}
};
function md(e, t, n) {
	let r = n.timestampToMarker(t).valueOf() - t, i = e.valueOf() - r;
	return n.timestampToMarker(i).valueOf() === e.valueOf() ? i : n.toDate(e).valueOf();
}
function hd(e, t, n) {
	let r = md(e, t, n), i = gd(t, n, Math.min(r - t, 1728e5));
	return i == null ? r : Math.min(r, i);
}
function gd(e, t, n) {
	if (n <= 0) return;
	let r = _d(e, t), i = e, a = e + n;
	if (_d(a, t) !== r) {
		for (; a - i > 1;) {
			let e = Math.floor((i + a) / 2);
			_d(e, t) === r ? i = e : a = e;
		}
		return a > e ? a : void 0;
	}
}
function _d(e, t) {
	return t.timestampToMarker(e).valueOf() - e;
}
function vd(e) {
	let t = k(e);
	return {
		start: t,
		end: O(t, 1)
	};
}
function yd(e, t) {
	return e != null && (e === t || Math.abs(e - t) < .01);
}
var bd = !0, xd = /* @__PURE__ */ new Map(), Sd = /* @__PURE__ */ new Set(), Cd = !1, wd = !1, Td = !1;
function V(e) {
	Sd.add(e), !Cd && !wd && (wd = !0, requestAnimationFrame(() => {
		wd = !1, Ed();
	}));
}
function Ed() {
	for (let e of Sd.values()) Sd.delete(e), e();
}
function Dd(e) {
	let t = Cd;
	Cd = !0, Td = !0;
	try {
		mt(e), t || mt(() => {
			Ed(), Cd = !1;
		});
	} finally {
		Cd = t, Td = !1;
	}
}
var Od = typeof ResizeObserver < "u" && new ResizeObserver((e) => {
	Cd = !0;
	for (let t of e) {
		let e = t.target, n = xd.get(e), r, i;
		if (t.borderBoxSize && bd) {
			let e = t.borderBoxSize[0] || t.borderBoxSize;
			r = e.inlineSize, i = e.blockSize;
		} else ({width: r, height: i} = e.getBoundingClientRect());
		let a = !1;
		yd(n.width, r) || (n.width = r, a = n.watchWidth), yd(n.height, i) || (n.height = i, a ||= n.watchHeight), a && n.callback(r, i);
	}
	mt(() => {
		Ed(), Cd = !1;
	});
});
function kd(e, t, n = !0, r = !0) {
	let i = {
		callback: t,
		watchWidth: n,
		watchHeight: r
	};
	if (xd.set(e, i), Td) {
		let { width: n, height: r } = e.getBoundingClientRect();
		i.width = n, i.height = r, t(n, r);
	}
	return Od && Od.observe(e, { box: "border-box" }), () => {
		xd.delete(e), Od && Od.unobserve(e);
	};
}
function Ad(e, t) {
	return kd(e, t, !0);
}
function jd(e, t) {
	return kd(e, (e, n) => t(n), !1, !0);
}
var Md = class extends T {
	constructor(e, t) {
		super(e, t), this.handleChange = () => {
			this.forceUpdate();
		}, this.runner = new pd(this.handleChange);
	}
	render() {
		let { props: e, context: t } = this, { nowDate: n, nowMs: r, todayRange: i } = this.runner.update({
			nowManager: t.nowManager,
			unit: e.unit,
			unitValue: e.unitValue,
			nowIndicatorSnap: t.options.nowIndicatorSnap,
			dateEnv: t.dateEnv
		});
		return e.children(n, i, r);
	}
	componentWillUnmount() {
		this.runner.destroy();
	}
};
Md.contextType = Qu;
var Nd = N({
	year: "numeric",
	month: "long",
	day: "numeric"
}), Pd = N({ week: "long" }), Fd = N({ weekday: "long" });
function Id(e) {
	for (let t of e) if (t.type === "weekday") return t.value;
	return "";
}
function Ld(e) {
	for (let t of e) if (t.type === "day") return t.value;
	return "";
}
function Rd(e) {
	for (let t of e) if (t.type === "month") return t.value;
	return "";
}
function zd(e, t, n = "day") {
	return Yo(e.dateEnv.formatToParts(t, n === "week" ? Pd : Nd));
}
function Bd(e, t, n = "day", r = zd(e, t, n), i = !0, a = !1) {
	let { dateEnv: o, options: s, calendarApi: c } = e, l = o.toDate(t), u = (e) => {
		let r = n === "day" ? s.navLinkDayClick : n === "week" ? s.navLinkWeekClick : null;
		typeof r == "function" ? r.call(c, o.toDate(t), e) : (typeof r == "string" && (n = r), c.zoomTo(t, n));
	};
	return {
		role: "link",
		"aria-label": a ? r : Rs(s.navLinkHint, [r, l], r),
		className: M(s.navLinkClass, j.cursorPointer, j.internalNavLink),
		...i ? ws(u) : { onClick: u }
	};
}
function Vd(e, t, n, r, i) {
	let a = !(!n || n.activeRange && xo(n.activeRange, e));
	return {
		date: t.toDate(e),
		dow: e.getUTCDay(),
		isDisabled: a,
		isOther: !a && !(!n || xo(n.currentRange, e)),
		isToday: !a && !!(r && xo(r, e)),
		isPast: !a && !!(i ? e < i : r && e < r.start),
		isFuture: !a && !!(i ? e > i : r && e >= r.end)
	};
}
var Hd = class extends L {
	constructor() {
		super(...arguments), this.refineRenderProps = Zu(Ud);
	}
	render() {
		let { props: e, context: t } = this, { options: n, viewSpec: r } = t, i = this.refineRenderProps({
			...Vs(n),
			options: {
				headerToolbar: n.headerToolbar,
				footerToolbar: n.footerToolbar
			},
			isHeightAuto: ld(n),
			viewApi: t.viewApi
		});
		return D(z, {
			elRef: e.elRef,
			tag: e.tag || "div",
			attrs: e.attrs,
			style: e.style,
			className: M(e.className, B(n.viewClass, i), B(r.optionDefaults.class, i), B(r.optionDefaults.className, i), B(r.optionOverrides.class, i), B(r.optionOverrides.className, i)),
			renderProps: i,
			generatorName: void 0,
			didMount: n.didMount || n.viewDidMount,
			willUnmount: n.willUnmount || n.viewWillUnmount,
			children: () => e.children
		});
	}
};
function Ud(e) {
	return {
		view: e.viewApi,
		borderlessX: e.borderlessX,
		borderlessTop: e.borderlessTop,
		borderlessBottom: e.borderlessBottom,
		options: e.options,
		isHeightAuto: e.isHeightAuto
	};
}
var Wd = class extends L {
	constructor() {
		super(...arguments), this.uid = Ds();
	}
	prepareHits() {}
	queryHit(e, t, n, r, i) {
		return null;
	}
	isValidSegDownEl(e) {
		return !this.props.eventDrag && !this.props.eventResize && !e.closest(`.${j.internalEventMirror}`);
	}
	isValidDateDownEl(e) {
		return !e.closest(`.${j.internalEvent}:not(.${j.internalBgEvent})`) && !e.closest(`.${j.internalMoreLink}`) && !e.closest(`.${j.internalNavLink}`) && !e.closest(`.${j.internalPopover}`);
	}
}, Gd = class {
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
}, Kd = class {
	constructor(e) {
		this.el = e, this.emitter = new Hu(), this.isScroll = !1, this.isScrollRecent = !1, this.isWheelRecent = !1, this.isMouseDown = !1, this.isTouchDown = !1, this.isMouse = !1, this.isTouch = !1, this.isWheel = !1, this.handleScroll = () => {
			this.isScrollRecent = !0, this.isMouseDown && (this.isMouse = !0), this.isTouchDown && (this.isTouch = !0), this.isWheelRecent && (this.isWheel = !0), this.startScroll(), this.emitter.trigger("scroll", this.getIsDevice()), this.scrollWaiter.request(500);
		}, this.handleScrollWait = () => {
			this.isScrollRecent = !1, this.isTouchDown || this.endScroll();
		}, this.handleWheel = () => {
			this.isWheelRecent = !0, this.wheelWaiter.request(500);
		}, this.handleWheelWait = () => {
			this.isWheelRecent = !1;
		}, this.handleMouseDown = () => {
			this.isMouseDown = !0;
		}, this.handleMouseUp = () => {
			this.isMouseDown = !1;
		}, this.handleTouchStart = () => {
			this.isTouchDown = !0;
		}, this.handleTouchEnd = () => {
			this.isTouchDown = !1, this.isScrollRecent || this.endScroll();
		}, this.wheelWaiter = new Gd(this.handleWheelWait), this.scrollWaiter = new Gd(this.handleScrollWait), e.addEventListener("scroll", this.handleScroll, { passive: !0 }), e.addEventListener("wheel", this.handleWheel, { passive: !0 }), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("mouseup", this.handleMouseUp), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), e.addEventListener("touchend", this.handleTouchEnd);
	}
	destroy() {
		let { el: e } = this;
		e.removeEventListener("scroll", this.handleScroll, { passive: !0 }), e.removeEventListener("wheel", this.handleWheel, { passive: !0 }), e.removeEventListener("mousedown", this.handleMouseDown), e.removeEventListener("mouseup", this.handleMouseUp), e.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), e.removeEventListener("touchend", this.handleTouchEnd);
	}
	startScroll() {
		this.isScroll || (this.isScroll = !0, this.emitter.trigger("scrollStart", this.getIsDevice()));
	}
	endScroll() {
		this.isScroll && (this.scrollWaiter.clear(), this.wheelWaiter.clear(), this.isScroll = !1, this.isWheelRecent = !1, this.emitter.trigger("scrollEnd", this.getIsDevice()), this.isMouse = !1, this.isTouch = !1, this.isWheel = !1);
	}
	getIsDevice() {
		return this.isWheel || this.isMouse || this.isTouch;
	}
}, qd = class extends Wd {
	constructor() {
		super(...arguments), this.handleEl = (e) => {
			this.el && (this.el = null, this._isUnmounting = !0, this.listener.destroy()), e && (this.el = e, this._isUnmounting = !1, this.listener = new Kd(e));
		}, this.handleHRuler = (e) => {
			this.disconnectHRuler && (this.disconnectHRuler(), this.disconnectHRuler = void 0, this.clientWidth !== void 0 && (this.clientWidth = void 0, R(this.props.clientWidthRef, null))), e && (this.disconnectHRuler = Ad(e, (e) => {
				this._isUnmounting || e !== this.clientWidth && (this.clientWidth = e, R(this.props.clientWidthRef, e));
			}));
		}, this.handleVRuler = (e) => {
			this.disconnectVRuler && (this.disconnectVRuler(), this.disconnectVRuler = void 0, this.clientHeight !== void 0 && (this.clientHeight = void 0, R(this.props.clientHeightRef, null))), e && (this.disconnectVRuler = jd(e, (e) => {
				if (this._isUnmounting) return;
				e !== this.clientHeight && (this.clientHeight = e, R(this.props.clientHeightRef, e));
				let t = Math.round(this.el.getBoundingClientRect().height - e);
				t !== this.bottomScrollbarWidth && (this.bottomScrollbarWidth = t, R(this.props.bottomScrollbarWidthRef, t));
			}));
		};
	}
	render() {
		let { props: e } = this, t = e.horizontal || e.vertical ? "hidden" : "";
		return D("div", {
			ref: this.handleEl,
			className: M(e.className, j.noPadding, j.rel, e.hideScrollbars && j.noScrollbars, j.internalScroller),
			style: {
				...e.style,
				overflowX: e.horizontal ? "auto" : t,
				overflowY: e.vertical ? "auto" : t
			},
			children: [
				e.children,
				!!e.clientWidthRef && D("div", {
					ref: this.handleHRuler,
					className: j.fillTop
				}),
				!!(e.clientHeightRef || e.bottomScrollbarWidthRef) && D("div", {
					ref: this.handleVRuler,
					className: j.fillStart
				})
			]
		});
	}
	endScroll() {
		this.listener.endScroll();
	}
	get x() {
		let { el: e } = this;
		return e ? Jd(e) : 0;
	}
	get y() {
		let { el: e } = this;
		return e ? e.scrollTop : 0;
	}
	scrollTo({ x: e, y: t }) {
		let { el: n } = this;
		n && (t != null && (n.scrollTop = t), e != null && Yd(n, e));
	}
	addScrollStartListener(e) {
		this.listener.emitter.on("scrollStart", e);
	}
	removeScrollStartListener(e) {
		this.listener.emitter.off("scrollStart", e);
	}
	addScrollEndListener(e) {
		this.listener.emitter.on("scrollEnd", e);
	}
	removeScrollEndListener(e) {
		this.listener.emitter.off("scrollEnd", e);
	}
};
function Jd(e) {
	let { scrollLeft: t } = e;
	return Ku(e) ? Xd(t, e) : t;
}
function Yd(e, t) {
	e.scrollLeft = Ku(e) ? Zd(t, e) : t;
}
function Xd(e, t) {
	switch ($d()) {
		case "positive": return t.scrollWidth - t.clientWidth - e;
		case "negative": return -e;
	}
	return e;
}
function Zd(e, t) {
	switch ($d()) {
		case "positive": return t.scrollWidth - t.clientWidth - e;
		case "negative": return -e;
	}
	return e;
}
var Qd;
function $d() {
	return Qd ||= ef();
}
function ef() {
	let e = document.createElement("div");
	e.style.position = "absolute", e.style.top = "-1000px", e.style.width = "100px", e.style.height = "100px", e.style.overflow = "scroll", e.style.direction = "rtl";
	let t = document.createElement("div");
	t.style.width = "200px", t.style.height = "200px", e.appendChild(t), document.body.appendChild(e);
	let n;
	return e.scrollLeft > 0 ? n = "positive" : (e.scrollLeft = 50, n = e.scrollLeft > 0 ? "reverse" : "negative"), e.remove(), n;
}
var tf = class extends L {
	constructor() {
		super(...arguments), this.buildPublicEvent = I((e, t, n) => new wl(e, t, n)), this.handleEl = (e) => {
			this.el = e, R(this.props.elRef, e), e && jl(e, this.props.eventRange);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, { eventRange: r } = e, i = r.ui, a = n.eventTimeFormat || e.defaultTimeFormat, o = e.forcedTimeText ?? Rl(a, r, e.slicedStart, e.slicedEnd, e.isStart, e.isEnd, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd), [s, c, l] = Ul(r, t), u = this.buildPublicEvent(t, r.def, r.instance), d = !e.disableDragging && Ll(r, t), f = /row|column/.test(e.display), p = {
			...e.renderProps,
			event: u,
			isNarrow: e.isNarrow || !1,
			isShort: e.isShort || !1,
			timeText: o
		}, m = {
			...e.renderProps,
			event: u,
			view: t.viewApi,
			timeText: o,
			color: i.color || n.eventColor,
			contrastColor: i.contrastColor || n.eventContrastColor,
			isDraggable: d,
			isStartResizable: !e.disableResizing && e.isStart && i.durationEditable && n.eventResizableFromStart,
			isEndResizable: !e.disableResizing && e.isEnd && i.durationEditable,
			isMirror: e.isMirror,
			isStart: !!e.isStart,
			isEnd: !!e.isEnd,
			isFirst: !!e.isFirst,
			isLast: !!e.isLast,
			isPast: !!e.isPast,
			isFuture: !!e.isFuture,
			isToday: !!e.isToday,
			isSelected: !!e.isSelected,
			isDragging: !!e.isDragging,
			isResizing: !!e.isResizing,
			isInteractive: l,
			isNarrow: e.isNarrow || !1,
			isShort: e.isShort || !1,
			level: e.level || 0,
			timeClass: M(B(n.eventTimeClass, p), f && B(n.blockEventTimeClass, p), e.display === "row" && B(n.rowEventTimeClass, p), e.display === "column" && B(n.columnEventTimeClass, p), e.display === "list-item" && B(n.listItemEventTimeClass, p)),
			titleClass: M(B(n.eventTitleClass, p), f && B(n.blockEventTitleClass, p), e.display === "row" && B(n.rowEventTitleClass, p), e.display === "column" && B(n.columnEventTitleClass, p), e.display === "list-item" && B(n.listItemEventTitleClass, p), e.display === "row" && n.rowEventTitleSticky && j.stickyS, e.display === "column" && n.columnEventTitleSticky && j.stickyT),
			options: { eventOverlap: !!n.eventOverlap }
		}, h = M(f && B(n.blockEventClass, m), e.display === "row" && B(n.rowEventClass, m), e.display === "column" && B(n.columnEventClass, m), e.display === "list-item" && B(n.listItemEventClass, m), i.className, e.className, e.display === "column" ? j.flexCol : j.flexRow, (r.def.url || d) && j.cursorPointer, j.internalEvent, e.isMirror && j.internalEventMirror, d && j.internalEventDraggable, m.isSelected && j.internalEventSelected, (m.isStartResizable || m.isEndResizable) && j.internalEventResizable), g = M(B(n.eventBeforeClass, m), f && B(n.blockEventBeforeClass, m), e.display === "row" && B(n.rowEventBeforeClass, m), e.display === "column" && B(n.columnEventBeforeClass, m), e.display === "list-item" && B(n.listItemEventBeforeClass, m)), _ = M(B(n.eventAfterClass, m), f && B(n.blockEventAfterClass, m), e.display === "row" && B(n.rowEventAfterClass, m), e.display === "column" && B(n.columnEventAfterClass, m), e.display === "list-item" && B(n.listItemEventAfterClass, m)), v = M(B(n.eventInnerClass, m), f && B(n.blockEventInnerClass, m), e.display === "row" && B(n.rowEventInnerClass, m), e.display === "column" && B(n.columnEventInnerClass, m), e.display === "list-item" && B(n.listItemEventInnerClass, m), !e.disableLiquid && j.liquid), y = e.display === "row" && n.rowEventBeforeContent, b = e.display === "row" && n.rowEventAfterContent;
		return D(z, {
			tag: s,
			attrs: {
				...e.attrs,
				...c,
				dir: e.isDragging && n.direction === "rtl" ? "rtl" : void 0
			},
			className: h,
			style: {
				"--fc-event-color": m.color,
				"--fc-event-contrast-color": m.contrastColor
			},
			elRef: this.handleEl,
			renderProps: m,
			generatorName: "eventContent",
			customGenerator: n.eventContent,
			defaultGenerator: nf,
			classNameGenerator: n.eventClass,
			didMount: n.eventDidMount,
			willUnmount: n.eventWillUnmount,
			children: (t) => D(w, { children: [
				!!(m.isSelected && f) && D("div", { className: e.display === "column" ? j.hitX : j.hitY }),
				(g || y) && D("div", {
					className: M(g, !e.disableZindexes && j.z1, m.isStartResizable && M(e.display === "column" ? j.cursorResizeT : j.cursorResizeS, j.internalEventResizer, j.internalEventResizerStart)),
					children: [y && D(z, {
						tag: "div",
						style: { display: "contents" },
						attrs: { "aria-hidden": !0 },
						renderProps: m,
						generatorName: void 0,
						customGenerator: y
					}), !!(m.isStartResizable && m.isSelected) && D("div", { className: j.hit })]
				}),
				D(t, {
					tag: "div",
					className: M(v, !e.disableZindexes && j.z0)
				}),
				(_ || b) && D("div", {
					className: M(_, !e.disableZindexes && j.z1, m.isEndResizable && M(e.display === "column" ? j.cursorResizeB : j.cursorResizeE, j.internalEventResizer, j.internalEventResizerEnd)),
					children: [b && D(z, {
						tag: "div",
						style: { display: "contents" },
						attrs: { "aria-hidden": !0 },
						renderProps: m,
						generatorName: void 0,
						customGenerator: b
					}), !!(m.isEndResizable && m.isSelected) && D("div", { className: j.hit })]
				})
			] })
		});
	}
	componentDidUpdate(e) {
		this.el && this.props.eventRange !== e.eventRange && jl(this.el, this.props.eventRange);
	}
};
tf.addPropsEquality({ seg: Xs });
function nf(e) {
	return D(w, { children: [e.timeText && D("div", {
		className: e.timeClass,
		children: e.timeText
	}), D("div", {
		className: e.titleClass,
		children: e.event.title || D(w, { children: "\xA0" })
	})] });
}
//#endregion
//#region node_modules/fullcalendar/chunks/5faae61c.js
var rf = class {
	constructor(e) {
		this.props = e, this.initHiddenDays();
	}
	buildPrev(e, t, n, r) {
		let { dateEnv: i } = this.props, a = i.subtract(i.startOf(t, e.currentRangeUnit), e.dateIncrement);
		return this.build(a, n, -1, r);
	}
	buildNext(e, t, n, r) {
		let { dateEnv: i } = this.props, a = i.add(i.startOf(t, e.currentRangeUnit), e.dateIncrement);
		return this.build(a, n, 1, r);
	}
	build(e, t, n, r = !0) {
		let { props: i } = this, a, o, s, c, l, u;
		return a = this.buildValidRange(t), a = this.trimHiddenDays(a), r && (e = So(e, a)), o = this.buildCurrentRangeInfo(e, n), s = /^(year|month|week|day)$/.test(o.unit), c = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, s), c = this.trimHiddenDays(c), l = c, i.showNonCurrentDates || (l = _o(l, o.range)), l = this.adjustActiveRange(l), l = _o(l, a), u = yo(o.range, a), xo(c, e) || (e = c.start), {
			currentDate: e,
			validRange: a,
			currentRange: o.range,
			currentRangeUnit: o.unit,
			isRangeAllDay: s,
			activeRange: l,
			renderRange: c,
			slotMinTime: i.slotMinTime,
			slotMaxTime: i.slotMaxTime,
			isValid: u,
			dateIncrement: this.buildDateIncrement(o.duration)
		};
	}
	buildValidRange(e) {
		let t = this.props.validRangeInput, n = typeof t == "function" ? t.call(this.props.calendarApi, this.props.dateEnv.toDate(e)) : t;
		return this.refineRange(n) || {
			start: null,
			end: null
		};
	}
	buildCurrentRangeInfo(e, t) {
		let { props: n } = this, r = null, i = null, a = null, o;
		return n.duration ? (r = n.duration, i = n.durationUnit, a = this.buildRangeFromDuration(e, t, r, i)) : (o = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, o)) : (a = this.buildCustomVisibleRange(e)) ? i = n.dateEnv.greatestWholeUnit(a.start, a.end).unit : (r = this.getFallbackDuration(), i = Uo(r).unit, a = this.buildRangeFromDuration(e, t, r, i)), {
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
		return n && (Ro(r) < 0 && (a = k(a), a = t.add(a, r)), Ro(i) > 1 && (o = k(o), o = O(o, -1), o = t.add(o, i))), {
			start: a,
			end: o
		};
	}
	buildRangeFromDuration(e, t, n, r) {
		let { dateEnv: i, dateAlignment: a } = this.props, o, s, c;
		if (!a) {
			let { dateIncrement: e } = this.props;
			a = e && Vo(e) < Vo(n) ? Uo(e).unit : r;
		}
		Ro(n) <= 1 && this.isHiddenDay(o) && (o = this.skipHiddenDays(o, t), o = k(o));
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
		i && (o = r.startOf(o, i)), o = k(o), o = this.skipHiddenDays(o, t), s = o;
		do
			s = O(s, 1), this.isHiddenDay(s) || (a += 1);
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
			let t = mo(e, this.props.dateEnv);
			return t &&= Oc(t), t;
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
		for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = O(e, t);
		return e;
	}
};
function af(e, t) {
	let { currentRange: n } = e;
	if (e.currentRangeUnit === "year") return t.diffWholeYears(n.start, n.end) > 1 ? "year" : "month";
	if (e.currentRangeUnit === "month") {
		if (t.diffWholeMonths(n.start, n.end) > 1) return "month";
	} else if (e.currentRangeUnit === "week") {
		if (Xa(n.start, n.end) > 1) return "week";
	} else if (e.currentRangeUnit === "day" && Za(n.start, n.end) > 1) return "day";
}
function of(e, t, n) {
	if (e.valueOf() === k(e).valueOf()) {
		if (t === "year") return !n.getMonth(e) && n.getDay(e) === 1;
		if (t === "month") return n.getDay(e) === 1;
		if (t === "week") return e.getUTCDay() === n.weekDow;
		if (t === "day") return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/fullcalendar/chunks/349b9df4.js
function sf(e, t, n, r, i) {
	switch (t.type) {
		case "RECEIVE_EVENTS": return cf(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
		case "RESET_RAW_EVENTS": return lf(e, n[t.sourceId], t.rawEvents, r.activeRange, i);
		case "ADD_EVENTS": return ff(e, t.eventStore, r ? r.activeRange : null, i);
		case "RESET_EVENTS": return t.eventStore;
		case "MERGE_EVENTS": return Rc(e, t.eventStore);
		case "PREV":
		case "NEXT":
		case "CHANGE_DATE":
		case "CHANGE_VIEW_TYPE": return r ? jc(e, r.activeRange, i) : e;
		case "REMOVE_EVENTS": return Bc(e, t.eventStore);
		case "REMOVE_EVENT_SOURCE": return mf(e, t.sourceId);
		case "REMOVE_ALL_EVENT_SOURCES": return zc(e, (e) => !e.sourceId);
		case "REMOVE_ALL_EVENTS": return Lc();
		default: return e;
	}
}
function cf(e, t, n, r, i, a) {
	if (t && n === t.latestFetchId) {
		let n = Nc(uf(i, t, a), t, a);
		return r && (n = jc(n, r, a)), Rc(mf(e, t.sourceId), n);
	}
	return e;
}
function lf(e, t, n, r, i) {
	let { defIdMap: a, instanceIdMap: o } = gf(e);
	return jc(Nc(uf(n, t, i), t, i, !1, a, o), r, i);
}
function uf(e, t, n) {
	let r = n.options.eventDataTransform, i = t ? t.eventDataTransform : null;
	return i && (e = df(e, i)), r && (e = df(e, r)), e;
}
function df(e, t) {
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
function ff(e, t, n, r) {
	return n && (t = jc(t, n, r)), Rc(e, t);
}
function pf(e, t, n) {
	let { defs: r } = e;
	return {
		defs: r,
		instances: Ws(e.instances, (e) => {
			if (r[e.defId].allDay) return e;
			let { instantStartMs: i, instantEndMs: a } = e.range, o = i == null ? n.createMarker(t.toDate(e.range.start)) : n.timestampToMarker(i), s = a == null ? n.createMarker(t.toDate(e.range.end)) : n.timestampToMarker(a);
			return {
				...e,
				range: Tc({
					marker: o,
					instantMs: i
				}, {
					marker: s,
					instantMs: a
				}, n) ?? hc(o, Ua(o, yc(e.range, t) - vc(e.range, t)), i)
			};
		})
	};
}
function mf(e, t) {
	return zc(e, (e) => e.sourceId !== t);
}
function hf(e, t) {
	return {
		defs: e.defs,
		instances: Us(e.instances, (e) => !t[e.instanceId])
	};
}
function gf(e) {
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
var _f = class {
	constructor(e) {
		this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
	}
	destroy() {}
};
function vf(e, t) {
	return {
		component: e,
		el: t.el,
		useEventCenter: t.useEventCenter == null || t.useEventCenter,
		isHitComboAllowed: t.isHitComboAllowed || null
	};
}
function yf(e) {
	return { [e.component.uid]: e };
}
var bf = {};
//#endregion
//#region node_modules/fullcalendar/chunks/9f074c5c.js
function xf(e) {
	return {
		name: e.name,
		premiumReleaseDate: e.premiumReleaseDate ? new Date(e.premiumReleaseDate) : void 0,
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
		eventSourceDefs: e.eventSourceDefs || [],
		cmdFormatter: e.cmdFormatter,
		recurringTypes: e.recurringTypes || [],
		initialView: e.initialView || "",
		elementDraggingImpl: e.elementDraggingImpl,
		optionChangeHandlers: e.optionChangeHandlers || {},
		scrollerSyncerClass: e.scrollerSyncerClass || null,
		listenerRefiners: e.listenerRefiners || {},
		optionRefiners: e.optionRefiners || {},
		optionDefaults: e.optionDefaults ? [e.optionDefaults] : [],
		propSetHandlers: e.propSetHandlers || {}
	};
}
function Sf(e, t) {
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
		eventSourceDefs: [],
		cmdFormatter: null,
		recurringTypes: [],
		initialView: "",
		elementDraggingImpl: null,
		optionChangeHandlers: {},
		scrollerSyncerClass: null,
		listenerRefiners: {},
		optionRefiners: {},
		optionDefaults: [],
		propSetHandlers: {}
	};
	function i(e) {
		for (let t of e) {
			let { name: e } = t;
			if (!e) throw Error("Plugin must specify a name");
			if (!n[e]) {
				let a = n[e] = xf(t);
				r = wf(r, a), i(t.deps || []);
			}
		}
	}
	return e && i(e), i(t), r;
}
function Cf() {
	let e = [], t = [], n;
	return (r, i) => ((!n || !oc(r, e) || !oc(i, t)) && (n = Sf(r, i)), e = r, t = i, n);
}
function wf(e, t) {
	return {
		premiumReleaseDate: Tf(e.premiumReleaseDate, t.premiumReleaseDate),
		reducers: e.reducers.concat(t.reducers),
		isLoadingFuncs: e.isLoadingFuncs.concat(t.isLoadingFuncs),
		contextInit: e.contextInit.concat(t.contextInit),
		eventRefiners: {
			...e.eventRefiners,
			...t.eventRefiners
		},
		eventDefMemberAdders: e.eventDefMemberAdders.concat(t.eventDefMemberAdders),
		eventSourceRefiners: {
			...e.eventSourceRefiners,
			...t.eventSourceRefiners
		},
		isDraggableTransformers: e.isDraggableTransformers.concat(t.isDraggableTransformers),
		eventDragMutationMassagers: e.eventDragMutationMassagers.concat(t.eventDragMutationMassagers),
		eventDefMutationAppliers: e.eventDefMutationAppliers.concat(t.eventDefMutationAppliers),
		dateSelectionTransformers: e.dateSelectionTransformers.concat(t.dateSelectionTransformers),
		datePointTransforms: e.datePointTransforms.concat(t.datePointTransforms),
		dateSpanTransforms: e.dateSpanTransforms.concat(t.dateSpanTransforms),
		views: Yl(e.views, t.views),
		viewPropsTransformers: e.viewPropsTransformers.concat(t.viewPropsTransformers),
		isPropsValid: t.isPropsValid || e.isPropsValid,
		externalDefTransforms: e.externalDefTransforms.concat(t.externalDefTransforms),
		viewContainerAppends: e.viewContainerAppends.concat(t.viewContainerAppends),
		eventDropTransformers: e.eventDropTransformers.concat(t.eventDropTransformers),
		calendarInteractions: e.calendarInteractions.concat(t.calendarInteractions),
		componentInteractions: e.componentInteractions.concat(t.componentInteractions),
		eventSourceDefs: e.eventSourceDefs.concat(t.eventSourceDefs),
		cmdFormatter: t.cmdFormatter || e.cmdFormatter,
		recurringTypes: e.recurringTypes.concat(t.recurringTypes),
		initialView: e.initialView || t.initialView,
		elementDraggingImpl: e.elementDraggingImpl || t.elementDraggingImpl,
		optionChangeHandlers: {
			...e.optionChangeHandlers,
			...t.optionChangeHandlers
		},
		scrollerSyncerClass: e.scrollerSyncerClass || t.scrollerSyncerClass,
		listenerRefiners: {
			...e.listenerRefiners,
			...t.listenerRefiners
		},
		optionRefiners: {
			...e.optionRefiners,
			...t.optionRefiners
		},
		optionDefaults: e.optionDefaults.concat(t.optionDefaults),
		propSetHandlers: {
			...e.propSetHandlers,
			...t.propSetHandlers
		}
	};
}
function Tf(e, t) {
	return e === void 0 ? t : t === void 0 ? e : new Date(Math.max(e.valueOf(), t.valueOf()));
}
function Ef(e, t) {
	let n = {}, r;
	for (r in e) Df(r, n, e, t);
	for (r in t) Df(r, n, e, t);
	return n;
}
function Df(e, t, n, r) {
	if (t[e]) return t[e];
	let i = Of(e, t, n, r);
	return i && (t[e] = i), i;
}
function Of(e, t, n, r) {
	let i = n[e], a = r[e], o = (e) => i && i[e] !== null ? i[e] : a && a[e] !== null ? a[e] : null, s = o("component"), c = o("superType"), l = null;
	if (c) {
		if (c === e) throw Error("Can't have a custom view type that references itself");
		l = Df(c, t, n, r);
	}
	return !s && l && (s = l.component), s ? {
		type: e,
		component: s,
		defaults: Xl(l ? l.defaults : {}, i ? i.rawOptions : {}),
		overrides: Xl(l ? l.overrides : {}, a ? a.rawOptions : {})
	} : null;
}
function kf(e) {
	return Ws(e, Af);
}
function Af(e) {
	let t = typeof e == "function" ? { component: e } : e, { component: n } = t;
	return t.content ? n = jf(t.content) : n && !(n.prototype instanceof L) && (n = jf(n)), {
		superType: t.type,
		component: n,
		rawOptions: t
	};
}
function jf(e) {
	return (t) => D(Qu.Consumer, { children: (n) => {
		let { options: r, viewSpec: i } = n, a = {
			...t,
			nextDayThreshold: r.nextDayThreshold,
			...Vs(r),
			options: {
				headerToolbar: r.headerToolbar,
				footerToolbar: r.footerToolbar
			},
			isHeightAuto: ld(r),
			view: n.viewApi
		};
		return D(z, {
			tag: "div",
			className: M(B(r.viewClass, a), B(i.optionDefaults.class, a), B(i.optionDefaults.className, a), B(i.optionOverrides.class, a), B(i.optionOverrides.className, a)),
			renderProps: a,
			generatorName: void 0,
			customGenerator: e,
			didMount: r.didMount || r.viewDidMount,
			willUnmount: r.willUnmount || r.viewWillUnmount
		});
	} });
}
function Mf(e, t, n) {
	let r = kf(e), i = kf(t.views);
	return Ws(Ef(r, i), (e) => Nf(e, i, t, n));
}
function Nf(e, t, n, r) {
	let i = e.overrides.duration || e.defaults.duration || r.duration || n.duration, a = null, o = "", s = "", c = {};
	if (i && (a = Ff(i), a)) {
		let e = Uo(a);
		o = e.unit, e.value === 1 && (s = o, c = t[o] ? t[o].rawOptions : {});
	}
	return {
		type: e.type,
		component: e.component,
		duration: a,
		durationUnit: o,
		singleUnit: s,
		optionDefaults: e.defaults,
		optionOverrides: {
			...c,
			...e.overrides
		}
	};
}
var Pf = {};
function Ff(e) {
	let t = JSON.stringify(e), n = Pf[t];
	return n === void 0 && (n = A(e), Pf[t] = n), n;
}
function If(e, t) {
	return t.type === "CHANGE_VIEW_TYPE" && (e = t.viewType), e;
}
function Lf(e, t) {
	switch (t.type) {
		case "CHANGE_DATE": return t.dateMarker;
		default: return e;
	}
}
function Rf(e, t, n) {
	let r = e.initialDate;
	return r == null ? n.getDateMarker() : t.createMarker(r);
}
function zf(e, t) {
	switch (t.type) {
		case "SET_OPTION": return {
			...e,
			[t.optionName]: t.rawOptionValue
		};
		default: return e;
	}
}
function Bf(e, t, n, r, i) {
	let a;
	switch (t.type) {
		case "CHANGE_VIEW_TYPE": return i.build(t.dateMarker || n, r);
		case "CHANGE_DATE": return i.build(t.dateMarker, r);
		case "PREV":
			if (a = i.buildPrev(e, n, r), a.isValid) return a;
			break;
		case "NEXT": if (a = i.buildNext(e, n, r), a.isValid) return a;
	}
	return e;
}
function Vf(e, t) {
	switch (t.type) {
		case "UNSELECT_DATES": return null;
		case "SELECT_DATES": return t.selection;
		default: return e;
	}
}
function Hf(e, t) {
	switch (t.type) {
		case "UNSELECT_EVENT": return "";
		case "SELECT_EVENT": return t.eventInstanceId;
		default: return e;
	}
}
function Uf(e, t) {
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
function Wf(e, t) {
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
function Gf(e, t, n) {
	return {
		header: e.headerToolbar ? Kf(e.headerToolbar, e, t, n) : null,
		footer: e.footerToolbar ? Kf(e.footerToolbar, e, t, n) : null
	};
}
function Kf(e, t, n, r) {
	let i = t.direction === "rtl", a = [], o = !1;
	function s(e) {
		let i = qf(e, t, n, r);
		return a.push(...i.viewsWithButtons), o ||= i.hasTitle, i.widgets;
	}
	return {
		sectionWidgets: {
			start: s(e[i ? "right" : "left"] || e.start || ""),
			center: s(e.center || ""),
			end: s(e[i ? "left" : "right"] || e.end || "")
		},
		viewsWithButtons: a,
		hasTitle: o
	};
}
function qf(e, t, n, r) {
	let i = t.buttons || {}, a = t.toolbarElements || {}, o = e ? e.split(" ") : [], s = [], c = !1;
	return {
		widgets: o.map((e) => e.split(",").map((e) => {
			if (e === "title") return c = !0, { name: e };
			if (a[e]) return {
				name: e,
				customElement: a[e]
			};
			let o, l = i[e] || {}, u, d, f;
			if (o = n[e]) {
				s.push(e);
				let n = o.optionDefaults.buttonTextKey;
				u = l.text || (n ? t[n] : "") || (o.singleUnit ? t[o.singleUnit + "TextLong"] || t[o.singleUnit + "Text"] : "") || e, d = Rs(l.hint || t.viewHint, [u, e], u), f = (t) => {
					l?.click?.(t), t.defaultPrevented || r.changeView(e);
				};
			} else u = l.text || t[e + "TextLong"] || t[e + "Text"] || e, d = e === "prevYear" ? Rs(l.hint || t.prevHint, [t.yearText, "year"], u) : e === "nextYear" ? Rs(l.hint || t.nextHint, [t.yearText, "year"], u) : (n) => Rs(l.hint || t[e + "Hint"], [t[n + "TextLong"] || t[n + "Text"], n], u), f = (t) => {
				l?.click?.(t), t.defaultPrevented || r[e]?.();
			};
			return {
				name: e,
				isView: !!o,
				buttonText: u,
				buttonHint: d,
				buttonDisplay: l.display,
				buttonIconClass: l.iconClass,
				buttonIconContent: l.iconContent,
				buttonClick: f,
				buttonIsPrimary: l.isPrimary || !1,
				buttonClass: l.class ?? l.className,
				buttonDidMount: l.didMount,
				buttonWillUnmount: l.willUnmount
			};
		})),
		viewsWithButtons: s,
		hasTitle: c
	};
}
var Jf = class {
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
}, Yf = {
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
	className: "",
	groupId: "_businessHours"
};
function Xf(e, t) {
	return Nc(Zf(e), null, t);
}
function Zf(e) {
	let t;
	return t = e === !0 ? [{}] : Array.isArray(e) ? e.filter((e) => e.daysOfWeek) : typeof e == "object" && e ? [e] : [], t = t.map((e) => ({
		...Yf,
		...e
	})), t;
}
function Qf(e, t, n) {
	let r;
	r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange;
	let i, a = { isEndExclusive: e.isRangeAllDay };
	return t.titleFormat ? i = n.formatRangeToParts(r.start, r.end, N(t.titleFormat), a) : (i = n.formatRangeToParts(r.start, r.end, N($f(e, t.disallowAmbigTitle, "long")), a), ep(i) && (i = n.formatRangeToParts(r.start, r.end, N($f(e, t.disallowAmbigTitle, "short")), a))), Yo(i);
}
function $f(e, t, n) {
	let { currentRangeUnit: r } = e;
	if (r === "year") return { year: "numeric" };
	if (r === "month") return {
		year: "numeric",
		month: n
	};
	if (!t) {
		let t = Za(e.currentRange.start, e.currentRange.end);
		if (t !== null && t > 1) return {
			year: "numeric",
			month: n
		};
	}
	return {
		year: "numeric",
		month: "long",
		day: "numeric"
	};
}
function ep(e) {
	let t = !1, n = !1;
	for (let r of e) r.type === "month" && (r.source === "startRange" && (t = !0), r.source === "endRange" && (n = !0));
	return t && n;
}
var tp = class {
	constructor() {
		this.resetListeners = /* @__PURE__ */ new Set();
	}
	handleInput(e, t) {
		let n = this.dateEnv;
		if (e !== n && (typeof t == "function" ? this.nowFn = t : n || (this.nowAnchorDate = t ? np(t, e) : /* @__PURE__ */ new Date(), this.nowAnchorQueried = Date.now()), this.dateEnv = e, n)) for (let e of this.resetListeners.values()) e();
	}
	getDateMarker() {
		return this.dateEnv.timestampToMarker(this.getEpochMs());
	}
	getEpochMs() {
		return this.nowAnchorDate ? this.nowAnchorDate.valueOf() + (Date.now() - this.nowAnchorQueried) : np(this.nowFn(), this.dateEnv).valueOf();
	}
	addResetListener(e) {
		this.resetListeners.add(e);
	}
	removeResetListener(e) {
		this.resetListeners.delete(e);
	}
};
function np(e, t) {
	let n = t.createMarkerMeta(e);
	return n.instantMs == null ? t.toDate(n.marker) : new Date(n.instantMs);
}
var rp = class {
	constructor(e) {
		this.computeCurrentViewData = I(this._computeCurrentViewData), this.organizeRawLocales = I(au), this.buildLocale = I(ou), this.buildPluginHooks = Cf(), this.buildDateEnv = I(ip), this.parseToolbars = I(Gf), this.buildViewSpecs = I(Mf), this.buildDateProfileGenerator = Zu(ap), this.buildViewApi = I(op), this.buildViewUiProps = Zu(lp), this.buildEventUiBySource = I(sp, Xs), this.buildEventUiBases = I(cp), this.parseContextBusinessHours = Zu(dp), this.buildToolbarProps = I(mp), this.buildTitle = I(Qf), this.nowManager = new tp(), this.isDrainingActionQueue = !1, this.actionQueue = [], this.optionOverrides = {}, this.emitter = new Hu(), this.currentCalendarOptionsRefiners = {}, this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.handleNowChange = () => {
			this.dispatch({ type: "UPDATE_NOW" });
		}, this.dispatch = (e) => {
			this.actionQueue.push(e), this.isDrainingActionQueue || this.drainActionQueue();
		}, this.config = e, this.nowManager = new tp(), this.nowTimer = new pd(this.handleNowChange);
	}
	destroy() {
		this.nowTimer.destroy();
	}
	update(e) {
		return this.optionOverrides = e, this.actionQueue.push({ type: "IDLE" }), this.drainActionQueue(), this.data;
	}
	resetOptions(e, t) {
		t === void 0 ? this.optionOverrides = e : (this.optionOverrides = {
			...this.optionOverrides,
			...e
		}, this.optionsForRefining.push(...t)), this.dispatch({ type: "RESET_OPTIONS" });
	}
	drainActionQueue() {
		let e, { state: t, data: n } = this, r = !t, { actionQueue: i } = this, a = [];
		for (this.isDrainingActionQueue = !0; i.length;) {
			let r = i.shift();
			({state: t, data: n, calendarContext: e} = this.reduce(t, n, r)), this.state = t, this.data = n, r.type !== "IDLE" && a.push(r);
		}
		if (this.isDrainingActionQueue = !1, r) {
			let t = e.options.controller;
			t && t._setApi(this.config.calendarApi);
		}
		if (!r && a.length) {
			let { onDataChange: e } = this.config;
			e && e(this.data, a);
		}
	}
	reduce(e, t, n) {
		let { config: r } = this, i = !e, a = i ? {} : zf(e.dynamicOptionOverrides, n), o = this.computeOptionsData(this.optionOverrides, a, r.calendarApi), s = i ? o.calendarOptions.initialView || o.pluginHooks.initialView : If(e.currentViewType, n), c = this.computeCurrentViewData(s, o, this.optionOverrides, a);
		r.calendarApi.currentDataManager = this, this.emitter.setThisContext(r.calendarApi), this.emitter.setOptions(c.options);
		let l = {
			nowManager: this.nowManager,
			dateEnv: o.dateEnv,
			options: o.calendarOptions,
			pluginHooks: o.pluginHooks,
			calendarApi: r.calendarApi,
			dispatch: this.dispatch,
			emitter: this.emitter,
			getCurrentData: this.getCurrentData
		}, { nowDate: u } = this.nowTimer.update({
			unit: "day",
			unitValue: 1,
			nowIndicatorSnap: "auto",
			nowManager: this.nowManager,
			dateEnv: o.dateEnv
		}), d = i ? Rf(o.calendarOptions, o.dateEnv, this.nowManager) : Lf(e.currentDate, n), f;
		i ? f = c.dateProfileGenerator.build(d, u) : (f = e.dateProfile, t && t.dateProfileGenerator !== c.dateProfileGenerator && (f = c.dateProfileGenerator.build(d, u)), f = Bf(f, n, d, u, c.dateProfileGenerator)), (n && (n.type === "PREV" || n.type === "NEXT") || !xo(f.activeRange, d)) && (d = f.currentRange.start);
		let p = i ? Tu(o.calendarOptions, f, l) : Eu(e.eventSources, n, f, l), m = i ? Lc() : sf(e.eventStore, n, p, f, l), h = Ou(p), g = i ? Lc() : h && !c.options.progressiveEventRendering && e.renderableEventStore || m, { eventUiSingleBase: _, selectionConfig: v } = this.buildViewUiProps(l), y = this.buildEventUiBySource(p), b = i ? {} : this.buildEventUiBases(g.defs, _, y), x = {
			dynamicOptionOverrides: a,
			currentViewType: s,
			currentDate: d,
			dateProfile: f,
			eventSources: p,
			eventStore: m,
			renderableEventStore: g,
			selectionConfig: v,
			eventUiBases: b,
			businessHours: this.parseContextBusinessHours(l),
			dateSelection: i ? null : Vf(e.dateSelection, n),
			eventSelection: i ? "" : Hf(e.eventSelection, n),
			eventDrag: i ? null : Uf(e.eventDrag, n),
			eventResize: i ? null : Wf(e.eventResize, n),
			nowDate: u
		}, S = {
			...l,
			...x
		};
		for (let t of o.pluginHooks.reducers) Object.assign(x, t(e, n, S));
		let C = e ? up(e, l) : !1, w = up(x, l);
		!C && w ? this.emitter.trigger("loading", !0) : C && !w && this.emitter.trigger("loading", !1);
		let T = this.buildTitle(f, c.options, o.dateEnv), ee = this.buildToolbarProps(c.viewSpec, f, c.dateProfileGenerator, d, u, T), E = {
			viewTitle: T,
			nowManager: this.nowManager,
			calendarApi: r.calendarApi,
			dispatch: this.dispatch,
			emitter: this.emitter,
			getCurrentData: this.getCurrentData,
			toolbarProps: ee,
			...o,
			...c,
			...x
		}, te = o.pluginHooks.optionChangeHandlers, ne = t && t.calendarOptions, re = o.calendarOptions;
		if (ne && ne !== re) {
			ne.timeZone !== re.timeZone && (x.eventSources = E.eventSources = Du(E.eventSources, f, E), x.eventStore = E.eventStore = pf(E.eventStore, t.dateEnv, E.dateEnv), x.renderableEventStore = E.renderableEventStore = pf(E.renderableEventStore, t.dateEnv, E.dateEnv));
			for (let e in te) (this.optionsForHandling.indexOf(e) !== -1 || ne[e] !== re[e]) && te[e](re[e], E);
		}
		return this.optionsForHandling = [], {
			state: x,
			data: E,
			calendarContext: l
		};
	}
	computeOptionsData(e, t, n) {
		if (!this.optionsForRefining.length && e === this.stableOptionOverrides && t === this.stableDynamicOptionOverrides) return this.stableCalendarOptionsData;
		let { refinedOptions: r, pluginHooks: i, localeDefaults: a, availableLocaleData: o } = this.processRawCalendarOptions(e, t), s = this.buildDateEnv(r.timeZone, r.locale, r.weekNumberCalculation, r.firstDay, r.weekTextLong, r.weekTextShort, i, o), c = this.buildViewSpecs(i.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides), l = this.parseToolbars(r, c, n);
		return this.stableCalendarOptionsData = {
			calendarOptions: r,
			pluginHooks: i,
			dateEnv: s,
			viewSpecs: c,
			toolbarConfig: l,
			localeDefaults: a,
			availableRawLocales: o.map
		};
	}
	processRawCalendarOptions(e, t) {
		let { locales: n, locale: r } = Xl(cc, e, t), i = this.organizeRawLocales(n), a = i.map, o = this.buildLocale(r || i.defaultCode, a).options, s = this.buildPluginHooks(e.plugins || [], Vu), c = this.currentCalendarOptionsRefiners = {
			...sc,
			...lc,
			...uc,
			...s.listenerRefiners,
			...s.optionRefiners
		}, l = Xl(cc, ...s.optionDefaults, o, pp(Xl(e, t), c)), u = {}, d = this.currentCalendarOptionsInput, f = this.currentCalendarOptionsRefined, p = !1;
		for (let e in l) this.optionsForRefining.indexOf(e) === -1 && (l[e] === d[e] || fc[e] && e in d && fc[e](d[e], l[e]) || tu(d[e], l[e])) ? u[e] = f[e] : c[e] && (u[e] = c[e](l[e], e), p = !0);
		return p && (this.currentCalendarOptionsInput = l, this.currentCalendarOptionsRefined = u, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = t), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
			rawOptions: this.currentCalendarOptionsInput,
			refinedOptions: this.currentCalendarOptionsRefined,
			pluginHooks: s,
			availableLocaleData: i,
			localeDefaults: o
		};
	}
	_computeCurrentViewData(e, t, n, r) {
		let i = t.viewSpecs[e];
		if (!i) throw Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
		let { refinedOptions: a } = this.processRawViewOptions(i, t.pluginHooks, t.localeDefaults, n, r);
		return this.nowManager.handleInput(t.dateEnv, a.now), {
			viewSpec: i,
			options: a,
			dateProfileGenerator: this.buildDateProfileGenerator({
				dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
				duration: i.duration,
				durationUnit: i.durationUnit,
				usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
				dateEnv: t.dateEnv,
				calendarApi: this.config.calendarApi,
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
		let a = {
			...sc,
			...lc,
			...uc,
			...dc,
			...t.listenerRefiners,
			...t.optionRefiners
		}, o = Xl(cc, ...t.optionDefaults, e.optionDefaults, n, pp(Xl(r, e.optionOverrides, i), a)), s = {}, c = this.currentViewOptionsInput, l = this.currentViewOptionsRefined, u = !1;
		for (let e in o) o[e] === c[e] || fc[e] && fc[e](o[e], c[e]) || tu(c[e], o[e]) ? s[e] = l[e] : (o[e] === this.currentCalendarOptionsInput[e] || fc[e] && fc[e](o[e], this.currentCalendarOptionsInput[e]) ? e in this.currentCalendarOptionsRefined && (s[e] = this.currentCalendarOptionsRefined[e]) : a[e] && (s[e] = a[e](o[e], e)), u = !0);
		return u && (this.currentViewOptionsInput = o, this.currentViewOptionsRefined = s), {
			rawOptions: this.currentViewOptionsInput,
			refinedOptions: this.currentViewOptionsRefined
		};
	}
};
function ip(e, t, n, r, i, a, o, s) {
	return new Qo({
		calendarSystem: "gregory",
		timeZone: e,
		locale: ou(t || s.defaultCode, s.map),
		weekNumberCalculation: n,
		firstDay: r,
		weekTextLong: i,
		weekTextShort: a,
		cmdFormatter: o.cmdFormatter
	});
}
function ap(e) {
	return new (e.dateProfileGeneratorClass || rf)(e);
}
function op(e, t, n) {
	return new Jf(e, t, n);
}
function sp(e) {
	return Ws(e, (e) => e.ui);
}
function cp(e, t, n) {
	let r = { "": t };
	for (let t in e) {
		let i = e[t];
		i.sourceId && n[i.sourceId] && (r[t] = n[i.sourceId]);
	}
	return r;
}
function lp(e) {
	let { options: t } = e;
	return {
		eventUiSingleBase: Wc({
			display: t.eventDisplay,
			editable: t.editable,
			startEditable: t.eventStartEditable,
			durationEditable: t.eventDurationEditable,
			constraint: t.eventConstraint,
			overlap: typeof t.eventOverlap == "boolean" ? t.eventOverlap : void 0,
			allow: t.eventAllow
		}, e),
		selectionConfig: Wc({
			constraint: t.selectConstraint,
			overlap: typeof t.selectOverlap == "boolean" ? t.selectOverlap : void 0,
			allow: t.selectAllow
		}, e)
	};
}
function up(e, t) {
	for (let n of t.pluginHooks.isLoadingFuncs) if (n(e)) return !0;
	return !1;
}
function dp(e) {
	return Xf(e.options.businessHours, e);
}
var fp = {};
function pp(e, t) {
	let n = {};
	for (let r in e) t[r] ? n[r] = e[r] : fp[r] || (ms(`Unknown option \`${r}\`.`), fp[r] = !0);
	return n;
}
function mp(e, t, n, r, i, a) {
	let o = n.build(i, i, void 0, !1), s = n.buildPrev(t, r, i, !1), c = n.buildNext(t, r, i, !1);
	return {
		title: a,
		selectedButton: e.type,
		navUnit: e.singleUnit,
		isTodayEnabled: o.isValid && !xo(t.currentRange, i),
		isPrevEnabled: s.isValid,
		isNextEnabled: c.isValid
	};
}
var hp = class {
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
		n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : ms(`Unknown listener \`${e}\`.`);
	}
	off(e, t) {
		this.currentDataManager.emitter.off(e, t);
	}
	trigger(e, ...t) {
		this.currentDataManager.emitter.trigger(e, ...t);
	}
	changeView(e, t) {
		this.batchRendering(() => {
			if (this.unselect(), t) {
				if (t.start && t.end) this.dispatch({
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
			} else this.dispatch({
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
		let { dateEnv: n } = this.getCurrentData(), r = n.createMarkerMeta(e);
		return Yo(n.formatToParts(r.marker, N(t), { instantMs: r.instantMs }));
	}
	formatRange(e, t, n) {
		let { dateEnv: r } = this.getCurrentData(), i = r.createMarkerMeta(e), a = r.createMarkerMeta(t);
		return Yo(r.formatRangeToParts(i.marker, a.marker, N(n), {
			isEndExclusive: n.isEndExclusive,
			startInstantMs: i.instantMs,
			endInstantMs: a.instantMs
		}));
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
		let r = this.getCurrentData(), i = rl(n, r.dateEnv, A({ days: 1 }));
		i && (this.dispatch({
			type: "SELECT_DATES",
			selection: i
		}), pl(i, null, r));
	}
	unselect(e) {
		let t = this.getCurrentData();
		t.dateSelection && (this.dispatch({ type: "UNSELECT_DATES" }), ml(e, t));
	}
	addEvent(e, t) {
		if (e instanceof wl) {
			let t = e._def, n = e._instance;
			return this.getCurrentData().eventStore.defs[t.defId] || (this.dispatch({
				type: "ADD_EVENTS",
				eventStore: Pc({
					def: t,
					instance: n
				})
			}), this.triggerEventAdd(e)), e;
		}
		let n = this.getCurrentData(), r;
		if (t instanceof Cl) r = t.internalEventSource;
		else if (typeof t == "boolean") t && ([r] = Gs(n.eventSources));
		else if (t != null) {
			let e = this.getEventSourceById(t);
			if (!e) return ms(`Unknown event source ID \`${t}\`.`), null;
			r = e.internalEventSource;
		}
		let i = Xc(e, r, n, !1);
		if (i) {
			let e = new wl(n, i.def, i.def.recurringDef ? null : i.instance);
			return this.dispatch({
				type: "ADD_EVENTS",
				eventStore: Pc(i)
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
					eventStore: El(e)
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
				if (a.recurringDef) return new wl(t, a, null);
				for (let e in r) {
					let n = r[e];
					if (n.defId === a.defId) return new wl(t, a, n);
				}
			}
		}
		return null;
	}
	getEvents() {
		let e = this.getCurrentData();
		return Dl(e.eventStore, e);
	}
	removeAllEvents() {
		this.dispatch({ type: "REMOVE_ALL_EVENTS" });
	}
	getEventSources() {
		let e = this.getCurrentData(), t = e.eventSources, n = [];
		for (let r in t) n.push(new Cl(e, t[r]));
		return n;
	}
	getEventSourceById(e) {
		let t = this.getCurrentData(), n = t.eventSources;
		e = String(e);
		for (let r in n) if (n[r].publicId === e) return new Cl(t, n[r]);
		return null;
	}
	addEventSource(e) {
		let t = this.getCurrentData();
		if (e instanceof Cl) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
			type: "ADD_EVENT_SOURCES",
			sources: [e.internalEventSource]
		}), e;
		let n = Su(e, t);
		return n ? (this.dispatch({
			type: "ADD_EVENT_SOURCES",
			sources: [n]
		}), new Cl(t, n)) : null;
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
		t && this.trigger("_timeScrollRequest", t);
	}
	getButtonState() {
		let e = this.getCurrentData(), { toolbarProps: t } = e, n = e.calendarOptions, r = n.buttons || {}, i = e.viewSpecs, a = e.viewSpec.singleUnit, o = [a ? gp(a, n) : "", a], s = {
			today: {
				text: n.todayText,
				hint: Rs(n.todayHint, o, n.todayText),
				isDisabled: !t.isTodayEnabled
			},
			prev: {
				text: n.prevText,
				hint: Rs(n.prevHint, o, n.prevText),
				isDisabled: !t.isPrevEnabled
			},
			next: {
				text: n.nextText,
				hint: Rs(n.nextHint, o, n.nextText),
				isDisabled: !t.isNextEnabled
			},
			prevYear: {
				text: n.prevYearText,
				hint: Rs(n.prevHint, [n.yearText, "year"], n.prevYearText),
				isDisabled: !1
			},
			nextYear: {
				text: n.prevYearText,
				hint: Rs(n.nextHint, [n.yearText, "year"], n.nextYearText),
				isDisabled: !1
			}
		};
		for (let e in i) {
			let t = i[e], { singleUnit: a } = t, o = t.optionDefaults.buttonTextKey, c = r[e]?.text || (o ? n[o] : "") || (a ? gp(a, n) : "") || e;
			s[e] = {
				text: c,
				hint: Rs(n.viewHint, [c, e], c)
			};
		}
		return s;
	}
};
function gp(e, t) {
	return t[e + "TextLong"] || t[e + "Text"];
}
var _p = class extends T {
	constructor() {
		super(...arguments), this.state = { forPrint: !1 }, this.handleBeforePrint = () => {
			Dd(() => {
				this.setState({ forPrint: !0 });
			});
		}, this.handleAfterPrint = () => {
			this.setState({ forPrint: !1 });
		};
	}
	render() {
		return this.props?.children(this.state.forPrint);
	}
	componentDidMount() {
		let { props: e } = this, { emitter: t } = e;
		t.on("_beforeprint", this.handleBeforePrint), t.on("_afterprint", this.handleAfterPrint);
	}
	componentWillUnmount() {
		let { props: e } = this, { emitter: t } = e;
		t.off("_beforeprint", this.handleBeforePrint), t.off("_afterprint", this.handleAfterPrint);
	}
};
function vp(e, t) {
	let n = e.borderlessX ?? e.borderless, r = e.borderlessTop ?? e.borderless, i = e.borderlessBottom ?? e.borderless, a = {
		borderlessX: !!n,
		borderlessTop: !!r,
		borderlessBottom: !!i
	};
	return M(B(e.class, a), B(e.className, a), j.borderBoxRoot, j.isolate, j.flexCol, t ? j.calendarPrintRoot : j.calendarScreenRoot);
}
var yp = class extends L {
	render() {
		let { contentGenerator: e, className: t } = this.props;
		if (e) return D(z, {
			tag: "span",
			style: { display: "contents" },
			attrs: { "aria-hidden": !0 },
			renderProps: {},
			generatorName: void 0,
			customGenerator: e
		});
		if (t !== void 0) return D("span", {
			"aria-hidden": !0,
			className: t
		});
	}
}, bp = class extends L {
	render() {
		let { props: e } = this, { options: t } = this.context, n = e.widgetGroups.map((e) => this.renderWidgetGroup(e));
		return x("div", { className: B(t.toolbarSectionClass, { name: e.name }) }, ...n);
	}
	renderWidgetGroup(e) {
		let { props: t, context: n } = this, { options: r } = n, i = [], a = !0, o = !0;
		for (let t of e) {
			let { name: e, isView: n } = t;
			e === "title" ? a = !1 : n || (o = !1);
		}
		for (let n of e) {
			let { name: s, customElement: c, buttonHint: l } = n;
			if (s === "title") i.push(D("div", {
				role: "heading",
				"aria-level": r.headingLevel,
				id: t.titleId,
				className: M(r.toolbarTitleClass),
				children: t.title
			}));
			else if (c) i.push(D(z, {
				tag: "span",
				style: { display: "contents" },
				renderProps: {},
				generatorName: void 0,
				customGenerator: c
			}));
			else {
				let c = s === t.selectedButton, u = !t.isTodayEnabled && s === "today" || !t.isPrevEnabled && s === "prev" || !t.isNextEnabled && s === "next", d = n.buttonDisplay ?? r.buttonDisplay;
				d === "auto" && (d = n.buttonIconContent || n.buttonIconClass ? "icon" : "text");
				let f;
				d !== "text" && (f = D(yp, {
					className: n.buttonIconClass,
					contentGenerator: n.buttonIconContent
				}));
				let p = e.length > 1 && a, m = p ? { hasSelection: o } : null, h = {
					name: s,
					text: n.buttonText,
					isPrimary: n.buttonIsPrimary,
					isSelected: c,
					isDisabled: u,
					isIconOnly: d === "icon",
					buttonGroup: m
				};
				i.push(D(z, {
					tag: "button",
					attrs: {
						type: "button",
						disabled: u,
						...a && o ? {
							role: "tab",
							"aria-selected": c
						} : { "aria-pressed": c },
						"aria-label": typeof l == "function" ? l(t.navUnit) : l,
						onClick: n.buttonClick
					},
					className: M(B(r.buttonClass, h), !u && j.cursorPointer, p && M(c ? j.z1 : j.z0, j.focusZ2)),
					renderProps: h,
					generatorName: void 0,
					classNameGenerator: n.buttonClass,
					didMount: n.buttonDidMount,
					willUnmount: n.buttonWillUnmount,
					children: () => d === "text" ? n.buttonText : d === "icon" ? f : d === "icon-text" ? D(w, { children: [f, n.buttonText] }) : D(w, { children: [n.buttonText, f] })
				}));
			}
		}
		return i.length > 1 ? x("div", {
			role: a && o ? "tablist" : void 0,
			"aria-label": a && o ? r.viewChangeHint : void 0,
			className: M(B(r.buttonGroupClass, { hasSelection: o }), j.isolate)
		}, ...i) : i[0];
	}
}, xp = class extends L {
	render() {
		let { props: e } = this, t = this.context.options, { sectionWidgets: n } = e.model, { borderlessX: r, borderlessTop: i, borderlessBottom: a } = Vs(t);
		return D("div", {
			className: M(B(e.isHeader ? t.headerToolbarClass : t.footerToolbarClass, {
				borderlessX: r,
				borderlessTop: i,
				borderlessBottom: a
			}), B(t.toolbarClass, {
				borderlessX: r,
				borderlessTop: i,
				borderlessBottom: a
			})),
			children: [
				this.renderSection("start", n.start),
				this.renderSection("center", n.center),
				this.renderSection("end", n.end)
			]
		});
	}
	renderSection(e, t) {
		let { props: n } = this;
		return D(bp, {
			name: e,
			widgetGroups: t,
			title: n.title,
			titleId: n.titleId,
			navUnit: n.navUnit,
			selectedButton: n.selectedButton,
			isTodayEnabled: n.isTodayEnabled,
			isPrevEnabled: n.isPrevEnabled,
			isNextEnabled: n.isNextEnabled
		}, e);
	}
}, Sp = class extends _f {
	constructor(e) {
		super(e), this.handleSegClick = (e, t) => {
			let { component: n } = this, { context: r } = n, i = Ml(t);
			i && n.isValidSegDownEl(e.target) && r.emitter.trigger("eventClick", {
				el: t,
				event: new wl(n.context, i.def, i.instance),
				jsEvent: e,
				view: r.viewApi
			});
		}, this.destroy = bs(e.el, "click", `.${j.internalEvent}`, this.handleSegClick);
	}
}, Cp = class extends _f {
	constructor(e) {
		super(e), this.handleEventElRemove = (e) => {
			e === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
		}, this.handleSegEnter = (e, t) => {
			Ml(t) && (this.currentSegEl = t, this.triggerEvent("eventMouseEnter", e, t));
		}, this.handleSegLeave = (e, t) => {
			this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", e, t));
		}, this.removeHoverListeners = xs(e.el, `.${j.internalEvent}`, this.handleSegEnter, this.handleSegLeave);
	}
	destroy() {
		this.removeHoverListeners();
	}
	triggerEvent(e, t, n) {
		let { component: r } = this, { context: i } = r, a = Ml(n);
		(!t || r.isValidSegDownEl(t.target)) && i.emitter.trigger(e, {
			el: n,
			event: new wl(i, a.def, a.instance),
			jsEvent: t,
			view: i.viewApi
		});
	}
}, wp = class extends ed {
	constructor() {
		super(...arguments), this.buildViewContext = I($u), this.buildViewPropTransformers = I(Tp), this.interactionsStore = {}, this.calendarInteractions = [], this.registerInteractiveComponent = (e, t) => {
			let n = vf(e, t), r = [Sp, Cp];
			t.disableHits || (r = r.concat(this.props.pluginHooks.componentInteractions));
			let i = r.map((e) => new e(n));
			this.interactionsStore[e.uid] = i, bf[e.uid] = n;
		}, this.unregisterInteractiveComponent = (e) => {
			let t = this.interactionsStore[e.uid];
			if (t) {
				for (let e of t) e.destroy();
				delete this.interactionsStore[e.uid];
			}
			delete bf[e.uid];
		};
	}
	get viewTitleId() {
		return this.props.baseId + "title";
	}
	render() {
		let { props: e } = this, { toolbarConfig: t, options: n } = e, r, i = !1, a;
		e.forPrint || ld(n) || (n.height == null ? n.contentHeight == null ? a = Math.max(n.aspectRatio, .5) : r = n.contentHeight : i = !0);
		let o = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.nowManager, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, e.baseId, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
		return D(Qu.Provider, {
			value: o,
			children: [
				t.header && D(xp, {
					model: t.header,
					isHeader: !0,
					titleId: this.viewTitleId,
					...e.toolbarProps
				}),
				D("div", {
					className: M(j.flexCol, j.rel, j.overflowAnchorNone, j.minHeight0, i && j.liquid),
					style: {
						height: r,
						aspectRatio: a == null ? void 0 : String(a)
					},
					children: [this.renderView(M((i || r) && j.liquid, a != null && j.fill, j.internalView)), this.buildAppendContent()]
				}),
				t.footer && D(xp, {
					model: t.footer,
					isHeader: !1,
					...e.toolbarProps
				})
			]
		});
	}
	renderView(e) {
		let { props: t } = this, { pluginHooks: n, viewSpec: r, toolbarConfig: i, toolbarProps: a } = t, o = {
			className: e,
			dateProfile: t.dateProfile,
			businessHours: t.businessHours,
			eventStore: t.renderableEventStore,
			eventUiBases: t.eventUiBases,
			dateSelection: t.dateSelection,
			eventSelection: t.eventSelection,
			eventDrag: t.eventDrag,
			eventResize: t.eventResize,
			forPrint: t.forPrint,
			labelId: i.header && i.header.hasTitle ? this.viewTitleId : void 0,
			labelStr: i.header && i.header.hasTitle ? void 0 : a.title
		}, s = this.buildViewPropTransformers(n.viewPropsTransformers), c = {
			...t,
			toolbarProps: a,
			forPrint: t.forPrint
		};
		for (let e of s) Object.assign(o, e.transform(o, c));
		let l = r.component;
		return D(l, { ...o });
	}
	buildAppendContent() {
		let { props: e } = this;
		return D(w, { children: e.pluginHooks.viewContainerAppends.map((t, n) => D(w, { children: t(e) }, n)) });
	}
	componentDidMount() {
		let { props: e } = this;
		this.calendarInteractions = e.pluginHooks.calendarInteractions.map((t) => new t(e));
		let { propSetHandlers: t } = e.pluginHooks;
		for (let n in t) t[n](e[n], e);
		for (let t of e.pluginHooks.contextInit) t(e);
	}
	componentDidUpdate(e) {
		let { props: t } = this, { propSetHandlers: n } = t.pluginHooks;
		for (let r in n) t[r] !== e[r] && n[r](t[r], t);
	}
	componentWillUnmount() {
		let { props: e } = this;
		for (let e of this.calendarInteractions) e.destroy();
		this.calendarInteractions = [], e.emitter.trigger("_unmount");
	}
};
function Tp(e) {
	return e.map((e) => new e());
}
//#endregion
//#region node_modules/fullcalendar/chunks/60e48131.js
var Ep = class extends hp {
	constructor(e, t = {}) {
		super(), this.baseId = `fc:${Ds()}:`, this.isRendering = !1, this.isRendered = !1, this.customContentRenderId = 0, this.currentClassName = "", this.currentColorScheme = "", this.handleDataChange = (e, t) => {
			this.currentData = e;
			let n = !1;
			for (let e of t) if (e.type === "SET_EVENT_DRAG" || e.type === "UNSET_EVENT_DRAG" || e.type === "SET_EVENT_RESIZE" || e.type === "UNSET_EVENT_RESIZE" || e.type === "MERGE_EVENTS") {
				n = !0;
				break;
			}
			this.renderRunner.request(n ? void 0 : e.calendarOptions.rerenderDelay);
		}, this.handleRenderRequest = () => {
			if (this.isRendering) {
				let { currentData: e } = this;
				this.isRendered = !0, mt(() => {
					this.vdomRoot.render(D(w, { children: D(od.Provider, {
						value: this.customContentRenderId,
						children: D(_p, {
							emitter: e.emitter,
							children: (t) => {
								let n = e.calendarOptions, r = n.direction === "rtl", i = vp(n, t);
								return this.setIsRtl(r), this.setClassName(i), this.setHeight(n.height), this.setColorScheme(n.colorScheme || ""), D(wp, {
									...e,
									forPrint: t,
									baseId: this.baseId
								});
							}
						})
					}) }));
				});
			} else this.isRendered && (this.isRendered = !1, this.vdomRoot.unmount(), this.setIsRtl(!1), this.setClassName(""), this.setHeight(""), this.setColorScheme(""));
		}, this.el = e, this.vdomRoot = ht(e), this.renderRunner = new Gd(this.handleRenderRequest), this.dataManager = new rp({
			calendarApi: this,
			onDataChange: this.handleDataChange
		}), this.currentData = this.dataManager.update(t);
	}
	render() {
		this.isRendering ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request();
	}
	destroy() {
		this.isRendering && (this.isRendering = !1, this.renderRunner.request()), this.dataManager.destroy();
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
	setClassName(e) {
		if (e !== this.currentClassName) {
			let { classList: t } = this.el;
			for (let e of this.currentClassName.split(" ")) e && t.remove(e);
			for (let n of e.split(" ")) n && t.add(n);
			this.currentClassName = e;
		}
	}
	setHeight(e) {
		Yu(this.el, "height", e);
	}
	setColorScheme(e) {
		e !== this.currentColorScheme && (e ? this.el.dataset.colorScheme = e : delete this.el.dataset.colorScheme, this.currentColorScheme = e);
	}
	setIsRtl(e) {
		e ? this.el.dir = "rtl" : this.el.removeAttribute("dir");
	}
}, Dp = class {
	constructor(e, t) {
		this.emitter = new Hu();
	}
	destroy() {}
	setMirrorIsVisible(e) {}
	setMirrorNeedsRevert(e) {}
	setAutoScrollEnabled(e) {}
}, Op = {};
function kp(e, t, n) {
	let { instances: r } = e.mutatedEvents;
	for (let e in r) if (!bo(t.validRange, r[e].range)) return !1;
	return jp({ eventDrag: e }, n);
}
function Ap(e, t, n) {
	return bo(t.validRange, e.range) ? jp({ dateSelection: e }, n) : !1;
}
function jp(e, t) {
	let n = t.getCurrentData(), r = {
		businessHours: n.businessHours,
		dateSelection: "",
		eventStore: n.eventStore,
		eventUiBases: n.eventUiBases,
		eventSelection: "",
		eventDrag: null,
		eventResize: null,
		...e
	};
	return (t.pluginHooks.isPropsValid || Mp)(r, t);
}
function Mp(e, t, n = {}, r) {
	return !(e.eventDrag && !Np(e, t, n, r) || e.dateSelection && !Pp(e, t, n, r));
}
function Np(e, t, n, r) {
	let i = t.getCurrentData(), a = e.eventDrag, o = a.mutatedEvents, s = o.defs, c = o.instances, l = Nl(s, a.isEvent ? e.eventUiBases : { "": i.selectionConfig });
	r && (l = Ws(l, r));
	let u = hf(e.eventStore, a.affectedEvents.instances), d = u.defs, f = u.instances, p = Nl(d, e.eventUiBases);
	for (let r in c) {
		let o = c[r], m = o.range, h = l[o.defId], g = s[o.defId];
		if (!Fp(h.constraints, m, u, e.businessHours, t)) return !1;
		let { eventOverlap: _ } = t.options, v = typeof _ == "function" ? _ : null;
		for (let e in f) {
			let n = f[e];
			if (Sc(m, n.range, t.dateEnv) && (p[n.defId].overlap === !1 && a.isEvent || h.overlap === !1 || v && !v(new wl(t, d[n.defId], n), new wl(t, g, o)))) return !1;
		}
		let y = i.eventStore;
		for (let e of h.allows) {
			let i = {
				...n,
				range: o.range,
				allDay: g.allDay
			}, a = y.defs[g.defId], s = y.instances[r], c;
			if (c = a ? new wl(t, a, s) : new wl(t, g), !e(hl(i, t), c)) return !1;
		}
	}
	return !0;
}
function Pp(e, t, n, r) {
	let i = e.eventStore, a = i.defs, o = i.instances, s = e.dateSelection, c = hc(s.range.start, s.range.end, s.instantStartMs, s.instantEndMs), { selectionConfig: l } = t.getCurrentData();
	if (r && (l = r(l)), !Fp(l.constraints, c, i, e.businessHours, t)) return !1;
	let { selectOverlap: u } = t.options, d = typeof u == "function" ? u : null;
	for (let e in o) {
		let n = o[e];
		if (Sc(c, n.range, t.dateEnv) && (l.overlap === !1 || d && !d(new wl(t, a[n.defId], n), null))) return !1;
	}
	for (let e of l.allows) if (!e(hl({
		...n,
		...s
	}, t), null)) return !1;
	return !0;
}
function Fp(e, t, n, r, i) {
	for (let a of e) if (!Rp(Ip(a, t, n, r, i), t, i)) return !1;
	return !0;
}
function Ip(e, t, n, r, i) {
	return e === "businessHours" ? Lp(jc(r, t, i)) : typeof e == "string" ? Lp(zc(n, (t) => t.groupId === e)) : typeof e == "object" && e ? Lp(jc(e, t, i)) : [];
}
function Lp(e) {
	let { instances: t } = e, n = [];
	for (let e in t) n.push(t[e].range);
	return n;
}
function Rp(e, t, n) {
	for (let r of e) if (Cc(r, t, n.dateEnv)) return !0;
	return !1;
}
//#endregion
//#region node_modules/fullcalendar/chunks/43779e97.js
function zp(e, t) {
	return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom;
}
function Bp(e, t) {
	let n = {
		left: Math.max(e.left, t.left),
		right: Math.min(e.right, t.right),
		top: Math.max(e.top, t.top),
		bottom: Math.min(e.bottom, t.bottom)
	};
	return n.left < n.right && n.top < n.bottom && n;
}
function Vp(e, t) {
	return {
		left: Math.min(Math.max(e.left, t.left), t.right),
		top: Math.min(Math.max(e.top, t.top), t.bottom)
	};
}
function Hp(e) {
	return {
		left: (e.left + e.right) / 2,
		top: (e.top + e.bottom) / 2
	};
}
function Up(e, t) {
	return {
		left: e.left - t.left,
		top: e.top - t.top
	};
}
function Wp(e, t = !1) {
	let n = window.getComputedStyle(e), r = parseInt(n.borderLeftWidth, 10) || 0, i = parseInt(n.borderRightWidth, 10) || 0, a = parseInt(n.borderTopWidth, 10) || 0, o = parseInt(n.borderBottomWidth, 10) || 0, s = Yp(e), c = s.y - r - i, l = {
		borderLeft: r,
		borderRight: i,
		borderTop: a,
		borderBottom: o,
		scrollbarBottom: s.x - a - o,
		scrollbarLeft: 0,
		scrollbarRight: 0
	};
	return n.direction === "rtl" ? l.scrollbarLeft = c : l.scrollbarRight = c, t && (l.paddingLeft = parseInt(n.paddingLeft, 10) || 0, l.paddingRight = parseInt(n.paddingRight, 10) || 0, l.paddingTop = parseInt(n.paddingTop, 10) || 0, l.paddingBottom = parseInt(n.paddingBottom, 10) || 0), l;
}
function Gp(e, t = !1, n) {
	let r = n ? e.getBoundingClientRect() : Kp(e), i = Wp(e, t), a = {
		left: r.left + i.borderLeft + i.scrollbarLeft,
		right: r.right - i.borderRight - i.scrollbarRight,
		top: r.top + i.borderTop,
		bottom: r.bottom - i.borderBottom - i.scrollbarBottom
	};
	return t && (a.left += i.paddingLeft, a.right -= i.paddingRight, a.top += i.paddingTop, a.bottom -= i.paddingBottom), a;
}
function Kp(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left + window.scrollX,
		top: t.top + window.scrollY,
		right: t.right + window.scrollX,
		bottom: t.bottom + window.scrollY
	};
}
function qp(e) {
	let t = Jp(e), n = e.getBoundingClientRect();
	for (let e of t) {
		let t = Bp(n, e.getBoundingClientRect());
		if (t) n = t;
		else return null;
	}
	return n;
}
function Jp(e) {
	let t = [];
	for (; e instanceof HTMLElement;) {
		let n = window.getComputedStyle(e);
		if (n.position === "fixed") break;
		/(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode;
	}
	return t;
}
function Yp(e) {
	return {
		x: e.offsetHeight - e.clientHeight,
		y: e.offsetWidth - e.clientWidth
	};
}
//#endregion
//#region node_modules/fullcalendar/chunks/41ea73bd.js
Op.touchMouseIgnoreWait = 500;
var Xp = 0, Zp = 0, Qp = !1, $p = class {
	constructor(e) {
		this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = (e) => {
			if (!this.shouldIgnoreMouse() && em(e) && this.tryStart(e)) {
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
			if (this.isDragging) {
				let t = this.createEventFromTouch(e);
				this.recordCoords(t), this.emitter.trigger("pointermove", t);
			}
		}, this.handleTouchEnd = (e) => {
			if (this.isDragging) {
				let t = e.target;
				t.removeEventListener("touchmove", this.handleTouchMove), t.removeEventListener("touchend", this.handleTouchEnd), t.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(e)), this.cleanup(), this.isTouchDragging = !1, tm();
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
		}, this.containerEl = e, this.emitter = new Hu(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), nm();
	}
	destroy() {
		this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, { passive: !0 }), rm();
	}
	cancel() {
		this.isDragging && this.cleanup();
	}
	tryStart(e) {
		let t = this.querySubjectEl(e), n = e.target;
		return t && (!this.handleSelector || n.closest(this.handleSelector)) ? (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0) : !1;
	}
	cleanup() {
		Qp = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
	}
	querySubjectEl(e) {
		return this.selector ? e.target.closest(this.selector) : this.containerEl;
	}
	shouldIgnoreMouse() {
		return Xp || this.isTouchDragging;
	}
	cancelTouchScroll() {
		this.isDragging && (Qp = !0);
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
function em(e) {
	return e.button === 0 && !e.ctrlKey;
}
function tm() {
	Xp += 1, setTimeout(() => {
		--Xp;
	}, Op.touchMouseIgnoreWait);
}
function nm() {
	Zp += 1, Zp === 1 && window.addEventListener("touchmove", im, { passive: !1 });
}
function rm() {
	--Zp, Zp || window.removeEventListener("touchmove", im, { passive: !1 });
}
function im(e) {
	Qp && e.preventDefault();
}
var am = class {
	constructor() {
		this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0, this.colorScheme = "";
	}
	start(e, t, n) {
		this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.scrollX, this.origScreenY = n - window.scrollY, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
	}
	handleMove(e, t) {
		this.deltaX = e - window.scrollX - this.origScreenX, this.deltaY = t - window.scrollY - this.origScreenY, this.updateElPosition();
	}
	setIsVisible(e) {
		e ? this.isVisible || (this.mirrorEl && this.mirrorEl.style.setProperty("display", "", "important"), this.isVisible = e, this.updateElPosition()) : this.isVisible &&= (this.mirrorEl && this.mirrorEl.style.setProperty("display", "none", "important"), e);
	}
	stop(e, t) {
		let n = () => {
			this.cleanup(), t();
		};
		e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0);
	}
	doRevertAnimation(e, t) {
		let n = this.mirrorEl, r = this.sourceEl.getBoundingClientRect();
		n.style.transition = "top " + t + "ms,left " + t + "ms", Ju(n, {
			left: r.left,
			top: r.top
		}), Cs(n, () => {
			n.style.transition = "", e();
		});
	}
	cleanup() {
		this.mirrorEl &&= (this.mirrorEl.remove(), null), this.sourceEl = null;
	}
	updateElPosition() {
		this.sourceEl && this.isVisible && Ju(this.getMirrorEl(), {
			left: this.sourceElRect.left + this.deltaX,
			top: this.sourceElRect.top + this.deltaY
		});
	}
	getMirrorEl() {
		let e = this.sourceElRect, t = this.mirrorEl;
		return t || (t = this.mirrorEl = this.sourceEl.cloneNode(!0), t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.style.pointerEvents = "none", this.colorScheme && t.setAttribute("data-color-scheme", this.colorScheme), t.classList.add(j.borderBoxRoot), Ju(t, {
			position: "fixed",
			zIndex: this.zIndex,
			visibility: "",
			width: e.right - e.left,
			height: e.bottom - e.top,
			right: "auto",
			bottom: "auto",
			margin: 0
		}), this.parentNode.appendChild(t)), t;
	}
}, om = class {
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
}, sm = class extends om {
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
}, cm = class extends om {
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
}, lm = class extends om {
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
}, um = class extends lm {
	constructor(e, t) {
		super(new sm(e), t);
	}
	getEventTarget() {
		return this.scrollController.el;
	}
	computeClientRect() {
		return Gp(this.scrollController.el);
	}
}, dm = class extends lm {
	constructor(e) {
		super(new cm(), e);
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
}, fm = typeof performance == "function" ? performance.now : Date.now, pm = class {
	constructor() {
		this.isEnabled = !0, this.scrollQuery = [window, `.${j.internalScroller}`], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
			if (this.isAnimating) {
				let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
				if (e) {
					let t = fm();
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
			i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), a < 0 ? this.everMovedLeft = !0 : a > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(fm()));
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
			case "bottom": n.setScrollTop(n.getScrollTop() + a * o);
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
		return this.queryScrollEls(e).map((e) => e === window ? new dm(!1) : new um(e, !1));
	}
	queryScrollEls(e) {
		let t = [];
		for (let n of this.scrollQuery) typeof n == "object" ? t.push(n) : t.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(n)));
		return t;
	}
}, mm = class extends Dp {
	constructor(e, t) {
		super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = (e) => {
			this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.emitter.trigger("pointerdown", e), this.isInteracting && (As(document.body), Ms(document.body), e.isTouch || e.origEvent.preventDefault(), this.mirror.setIsVisible(!1), this.mirror.start(e.subjectEl, e.pageX, e.pageY), this.startDelay(e), this.minDistance || this.handleDistanceSurpassed(e)));
		}, this.onPointerMove = (e) => {
			if (this.isInteracting) {
				if (this.emitter.trigger("pointermove", e), !this.isDistanceSurpassed) {
					let t = this.minDistance, n, { deltaX: r, deltaY: i } = e;
					n = r * r + i * i, n >= t * t && this.handleDistanceSurpassed(e);
				}
				this.isDragging && (e.origEvent.type !== "scroll" && (this.mirror.handleMove(e.pageX, e.pageY), this.autoScroller.handleMove(e.pageX, e.pageY)), this.emitter.trigger("dragmove", e));
			}
		}, this.onPointerUp = (e) => {
			this.isInteracting && (this.isInteracting = !1, js(document.body), Ns(document.body), this.emitter.trigger("pointerup", e), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(e)), this.delayTimeoutId &&= (clearTimeout(this.delayTimeoutId), null));
		};
		let n = this.pointer = new $p(e);
		n.emitter.on("pointerdown", this.onPointerDown), n.emitter.on("pointermove", this.onPointerMove), n.emitter.on("pointerup", this.onPointerUp), t && (n.selector = t), this.mirror = new am(), this.autoScroller = new pm();
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
	cancel() {
		this.isInteracting && (this.isInteracting = !1, this.pointer.cancel());
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
}, hm = class {
	constructor(e) {
		this.el = e, this.origRect = Kp(e), this.isRtl = Ku(e), this.scrollCaches = Jp(e).map((e) => new um(e, !0));
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
		for (let e of this.scrollCaches) if (!gm(e.getEventTarget()) && !zp(n, e.clientRect)) return !1;
		return !0;
	}
};
function gm(e) {
	let t = e.tagName;
	return t === "HTML" || t === "BODY";
}
var _m = class {
	constructor(e, t) {
		this.useSubjectCenter = !1, this.requireInitial = !0, this.disablePointCheck = !1, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (e) => {
			let { dragging: t } = this;
			this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(e), this.initialHit || !this.requireInitial ? this.emitter.trigger("pointerdown", e) : t.cancel();
		}, this.handleDragStart = (e) => {
			this.emitter.trigger("dragstart", e), this.handleMove(e, !0);
		}, this.handleDragMove = (e) => {
			this.emitter.trigger("dragmove", e), this.handleMove(e);
		}, this.handlePointerUp = (e) => {
			this.releaseHits(), this.emitter.trigger("pointerup", e);
		}, this.handleDragEnd = (e) => {
			this.movingHit && this.emitter.trigger("hitupdate", null, !0, e), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", e);
		}, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new Hu();
	}
	processFirstCoord(e) {
		let t = {
			left: e.pageX,
			top: e.pageY
		}, n = t, r = e.subjectEl, i;
		r instanceof HTMLElement && (i = Kp(r), n = Vp(n, i));
		let a = this.initialHit = this.queryHitForOffset(n.left, n.top);
		if (a) {
			if (this.useSubjectCenter && i) {
				let e = Bp(i, a.rect);
				e && (n = Hp(e));
			}
			this.coordAdjust = Up(n, t);
		} else this.coordAdjust = {
			left: 0,
			top: 0
		};
	}
	handleMove(e, t) {
		let n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
		(t || !vm(this.movingHit, n)) && (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
	}
	prepareHits() {
		this.offsetTrackers = Ws(this.droppableStore, (e) => (e.component.prepareHits(), new hm(e.el)));
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
					let e = o.queryHit(s.isRtl, c, l, d, f);
					e && bo(e.dateProfile.activeRange, e.dateSpan.range) && (this.disablePointCheck || s.el.contains(s.el.getRootNode().elementFromPoint(c + n - window.scrollX, l + r - window.scrollY))) && (!i || e.layer > i.layer) && (e.componentId = a, e.context = o.context, e.rect.left += n, e.rect.right += n, e.rect.top += r, e.rect.bottom += r, i = e);
				}
			}
		}
		return i;
	}
};
function vm(e, t) {
	return !e && !t || !!e == !!t && al(e.dateSpan, t.dateSpan);
}
function ym(e, t) {
	let n = {};
	for (let r of t.pluginHooks.datePointTransforms) Object.assign(n, r(e, t));
	return Object.assign(n, bm(e, t.dateEnv)), n;
}
function bm(e, t) {
	let n = _c(e.range.start, e.instantStartMs, t, e.allDay);
	return {
		date: n.date,
		dateStr: n.dateStr,
		allDay: e.allDay
	};
}
var xm = class extends _f {
	constructor(e) {
		super(e), this.handlePointerDown = (e) => {
			let { dragging: t } = this, n = e.origEvent.target;
			this.component.context.emitter.hasHandlers("dateClick") && this.component.isValidDateDownEl(n) || t.cancel();
		}, this.handleDragEnd = (e) => {
			let { component: t } = this, { pointer: n } = this.dragging;
			if (!n.wasTouchScroll) {
				let { initialHit: n, finalHit: r } = this.hitDragging;
				if (n && r && vm(n, r)) {
					let { context: r } = t, i = {
						...ym(n.dateSpan, r),
						dayEl: n.getDayEl(),
						jsEvent: e.origEvent,
						view: r.viewApi || r.calendarApi.view
					};
					r.emitter.trigger("dateClick", i);
				}
			}
		}, this.dragging = new mm(e.el), this.dragging.autoScroller.isEnabled = !1;
		let t = this.hitDragging = new _m(this.dragging, yf(e));
		t.emitter.on("pointerdown", this.handlePointerDown), t.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
}, Sm = class extends _f {
	constructor(e) {
		super(e), this.dragSelection = null, this.handlePointerDown = (e) => {
			let { component: t, dragging: n } = this, { options: r } = t.context;
			r.selectable && t.isValidDateDownEl(e.origEvent.target) ? n.delay = e.isTouch ? Cm(t) : null : n.cancel();
		}, this.handleDragStart = (e) => {
			this.component.context.calendarApi.unselect(e);
		}, this.handleHitUpdate = (e, t) => {
			let { context: n } = this.component, r = null, i = !1;
			if (e) {
				let t = this.hitDragging.initialHit;
				(e.componentId !== t.componentId || !this.isHitComboAllowed || this.isHitComboAllowed(t, e)) && (r = wm(t, e, n.pluginHooks.dateSelectionTransformers)), (!r || !Ap(r, e.dateProfile, n)) && (i = !0, r = null);
			}
			r ? n.dispatch({
				type: "SELECT_DATES",
				selection: r
			}) : t || n.dispatch({ type: "UNSELECT_DATES" }), i ? Os() : ks(), t || (this.dragSelection = r);
		}, this.handlePointerUp = (e) => {
			this.dragSelection ? (pl(this.dragSelection, e, this.component.context), this.dragSelection = null) : this.component.context.emitter.trigger("_noDateSelect");
		};
		let { component: t } = e, { options: n } = t.context, r = this.dragging = new mm(e.el);
		r.touchScrollAllowed = !1, r.minDistance = n.selectMinDistance || 0, r.autoScroller.isEnabled = n.dragScroll;
		let i = this.hitDragging = new _m(this.dragging, yf(e));
		i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("pointerup", this.handlePointerUp);
	}
	destroy() {
		this.dragging.destroy();
	}
};
function Cm(e) {
	let { options: t } = e.context, n = t.selectLongPressDelay;
	return n ??= t.longPressDelay, n;
}
function wm(e, t, n) {
	let r = e.dateSpan, i = t.dateSpan, a = r.instantStartMs != null || i.instantStartMs != null, o = [
		{
			date: r.range.start,
			ms: ul(r, e.context.dateEnv)
		},
		{
			date: r.range.end,
			ms: dl(r, e.context.dateEnv)
		},
		{
			date: i.range.start,
			ms: ul(i, t.context.dateEnv)
		},
		{
			date: i.range.end,
			ms: dl(i, t.context.dateEnv)
		}
	];
	o.sort(a ? (e, t) => zs(e.ms, t.ms) : (e, t) => zs(e.date.valueOf(), t.date.valueOf()));
	let s = {};
	for (let r of n) {
		let n = r(e, t);
		if (n === !1) return null;
		n && Object.assign(s, n);
	}
	if (a) {
		let t = Tc({
			marker: o[0].date,
			instantMs: o[0].ms
		}, {
			marker: o[3].date,
			instantMs: o[3].ms
		}, e.context.dateEnv);
		if (!t) return null;
		s.range = {
			start: t.start,
			end: t.end
		};
	} else s.range = {
		start: o[0].date,
		end: o[3].date
	};
	return s.allDay = r.allDay, a && (s.instantStartMs = o[0].ms, s.instantEndMs = o[3].ms), s;
}
function Tm(e, t) {
	let n = e.dateSpan.allDay ? null : e.dateSpan.instantStartMs, r = t.dateSpan.allDay ? null : t.dateSpan.instantStartMs;
	return n != null && r != null ? r - n : null;
}
function Em(e, t, n = {}) {
	let r = Tm(e, t), i = n.date0 || e.dateSpan.range.start, a = n.date1 || t.dateSpan.range.start;
	return {
		delta: r == null ? kc(i, a, e.context.dateEnv, n.largeUnit) : A(r),
		instantDeltaMs: r
	};
}
var Dm = class e extends _f {
	constructor(t) {
		super(t), this.subjectEl = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (e) => {
			let t = e.origEvent.target, { component: n, dragging: r } = this, { mirror: i } = r, { options: a } = n.context, o = n.context;
			this.subjectEl = e.subjectEl;
			let s = (this.eventRange = Ml(e.subjectEl)).instance.instanceId;
			this.relevantEvents = Fc(o.getCurrentData().eventStore, s), r.minDistance = e.isTouch ? 0 : a.eventDragMinDistance, r.delay = e.isTouch && s !== n.props.eventSelection ? km(n) : null, i.parentNode = Gu(t), i.revertDuration = a.dragRevertDuration, i.colorScheme = a.colorScheme || "", !n.isValidSegDownEl(t) || t.closest(`.${j.internalEventResizer}`) ? r.cancel() : this.isDragging = e.subjectEl.classList.contains(j.internalEventDraggable);
		}, this.handleDragStart = (e) => {
			let t = this.component.context, n = this.eventRange, r = n.instance.instanceId;
			e.isTouch ? r !== this.component.props.eventSelection && t.dispatch({
				type: "SELECT_EVENT",
				eventInstanceId: r
			}) : t.dispatch({ type: "UNSELECT_EVENT" }), this.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
				el: this.subjectEl,
				event: new wl(t, n.def, n.instance),
				jsEvent: e.origEvent,
				view: t.viewApi
			}));
		}, this.handleHitUpdate = (e, t) => {
			if (!this.isDragging) return;
			let n = this.relevantEvents, r = this.hitDragging.initialHit, i = this.component.context, a = null, o = null, s = null, c = !1, l = {
				affectedEvents: n,
				mutatedEvents: Lc(),
				isEvent: !0
			};
			if (e) {
				a = e.context;
				let t = a.options;
				i === a || t.editable && t.droppable ? (o = Om(r, e, this.eventRange.instance.range.start, a.getCurrentData().pluginHooks.eventDragMutationMassagers), o && (s = vl(n, a.getCurrentData().eventUiBases, o, a), l.mutatedEvents = s, kp(l, e.dateProfile, a) || (c = !0, o = null, s = null, l.mutatedEvents = Lc()))) : a = null;
			}
			this.displayDrag(a, l), c ? Os() : ks(), t || (i === a && vm(r, e) && (o = null), this.dragging.setMirrorNeedsRevert(!o), this.dragging.setMirrorIsVisible(!e || !this.subjectEl.getRootNode().querySelector(`.${j.internalEventMirror}`)), this.receivingContext = a, this.validMutation = o, this.mutatedRelevantEvents = s);
		}, this.handlePointerUp = () => {
			this.isDragging || this.cleanup();
		}, this.handleDragEnd = (e) => {
			if (this.isDragging) {
				let t = this.component.context, n = t.viewApi, { receivingContext: r, validMutation: i } = this, a = this.eventRange.def, o = this.eventRange.instance, s = new wl(t, a, o), c = this.relevantEvents, l = this.mutatedRelevantEvents, { finalHit: u } = this.hitDragging;
				if (this.clearDrag(), t.emitter.trigger("eventDragStop", {
					el: this.subjectEl,
					event: s,
					jsEvent: e.origEvent,
					view: n
				}), i) {
					if (r === t) {
						let r = new wl(t, l.defs[a.defId], o ? l.instances[o.instanceId] : null);
						t.dispatch({
							type: "MERGE_EVENTS",
							eventStore: l
						});
						let u = {
							oldEvent: s,
							event: r,
							relatedEvents: Dl(l, t, o),
							revert() {
								t.dispatch({
									type: "MERGE_EVENTS",
									eventStore: c
								});
							}
						}, d = {};
						for (let e of t.getCurrentData().pluginHooks.eventDropTransformers) Object.assign(d, e(i, t));
						t.emitter.trigger("eventDrop", {
							...u,
							...d,
							el: e.subjectEl,
							delta: i.datesDelta,
							jsEvent: e.origEvent,
							view: n
						}), t.emitter.trigger("eventChange", u);
					} else if (r) {
						let i = {
							event: s,
							relatedEvents: Dl(c, t, o),
							revert() {
								t.dispatch({
									type: "MERGE_EVENTS",
									eventStore: c
								});
							}
						};
						t.emitter.trigger("eventLeave", {
							...i,
							draggedEl: e.subjectEl,
							view: n
						}), t.dispatch({
							type: "REMOVE_EVENTS",
							eventStore: c
						}), t.emitter.trigger("eventRemove", i);
						let d = l.defs[a.defId], f = l.instances[o.instanceId], p = new wl(r, d, f);
						r.dispatch({
							type: "MERGE_EVENTS",
							eventStore: l
						});
						let m = {
							event: p,
							relatedEvents: Dl(l, r, f),
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
						}), r.emitter.trigger("drop", {
							...ym(u.dateSpan, r),
							draggedEl: e.subjectEl,
							jsEvent: e.origEvent,
							view: u.context.viewApi
						}), r.emitter.trigger("eventReceive", {
							...m,
							draggedEl: e.subjectEl,
							view: u.context.viewApi
						});
					}
				} else t.emitter.trigger("_noEventDrop");
			}
			this.cleanup();
		};
		let { component: n } = this, { options: r } = n.context, i = this.dragging = new mm(t.el);
		i.pointer.selector = e.SELECTOR, i.touchScrollAllowed = !1, i.autoScroller.isEnabled = r.dragScroll;
		let a = this.hitDragging = new _m(this.dragging, bf);
		a.useSubjectCenter = t.useEventCenter, a.emitter.on("pointerdown", this.handlePointerDown), a.emitter.on("dragstart", this.handleDragStart), a.emitter.on("hitupdate", this.handleHitUpdate), a.emitter.on("pointerup", this.handlePointerUp), a.emitter.on("dragend", this.handleDragEnd);
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
				mutatedEvents: Lc(),
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
		this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
	}
};
Dm.SELECTOR = `.${j.internalEventDraggable}, .${j.internalEventResizable}`;
function Om(e, t, n, r) {
	let i = e.dateSpan, a = t.dateSpan, o = i.range.start, s = a.range.start, c = {};
	i.allDay !== a.allDay && (c.allDay = a.allDay, c.hasEnd = t.context.options.allDayMaintainDuration, o = a.allDay ? k(n) : n);
	let { delta: l, instantDeltaMs: u } = Em(e, t, {
		date0: o,
		date1: s,
		largeUnit: e.componentId === t.componentId ? e.largeUnit : null
	});
	l.milliseconds && (c.allDay = !1);
	let d = {
		datesDelta: l,
		...u == null ? {} : { instantDatesDeltaMs: u },
		standardProps: c
	};
	for (let n of r) n(d, e, t);
	return d;
}
function km(e) {
	let { options: t } = e.context, n = t.eventLongPressDelay;
	return n ??= t.longPressDelay, n;
}
var Am = class extends _f {
	constructor(e) {
		super(e), this.draggingSegEl = null, this.draggingEventRange = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (e) => {
			let { component: t } = this, n = this.querySegEl(e), r = this.eventRange = Ml(n);
			this.dragging.minDistance = t.context.options.eventDragMinDistance, (!this.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && this.component.props.eventSelection !== r.instance.instanceId) && this.dragging.cancel();
		}, this.handleDragStart = (e) => {
			let { context: t } = this.component, n = this.eventRange;
			this.relevantEvents = Fc(t.getCurrentData().eventStore, this.eventRange.instance.instanceId);
			let r = this.querySegEl(e);
			this.draggingSegEl = r, this.draggingEventRange = Ml(r), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
				el: r,
				event: new wl(t, n.def, n.instance),
				jsEvent: e.origEvent,
				view: t.viewApi
			});
		}, this.handleHitUpdate = (e, t, n) => {
			let { context: r } = this.component, i = this.relevantEvents, a = this.hitDragging.initialHit, o = this.eventRange.instance, s = null, c = null, l = !1, u = {
				affectedEvents: i,
				mutatedEvents: Lc(),
				isEvent: !0
			};
			e && (e.componentId !== a.componentId || !this.isHitComboAllowed || this.isHitComboAllowed(a, e)) && (s = jm(a, e, n.subjectEl.classList.contains(j.internalEventResizerStart), o.range)), s && (c = vl(i, r.getCurrentData().eventUiBases, s, r), u.mutatedEvents = c, kp(u, e.dateProfile, r) || (l = !0, s = null, c = null, u.mutatedEvents = null)), c ? r.dispatch({
				type: "SET_EVENT_RESIZE",
				state: u
			}) : r.dispatch({ type: "UNSET_EVENT_RESIZE" }), l ? Os() : ks(), t || (s && vm(a, e) && (s = null), this.validMutation = s, this.mutatedRelevantEvents = c);
		}, this.handleDragEnd = (e) => {
			let { context: t } = this.component, n = this.eventRange.def, r = this.eventRange.instance, i = new wl(t, n, r), a = this.relevantEvents, o = this.mutatedRelevantEvents;
			if (t.emitter.trigger("eventResizeStop", {
				el: this.draggingSegEl,
				event: i,
				jsEvent: e.origEvent,
				view: t.viewApi
			}), this.validMutation) {
				let s = new wl(t, o.defs[n.defId], r ? o.instances[r.instanceId] : null);
				t.dispatch({
					type: "MERGE_EVENTS",
					eventStore: o
				});
				let c = {
					oldEvent: i,
					event: s,
					relatedEvents: Dl(o, t, r),
					revert() {
						t.dispatch({
							type: "MERGE_EVENTS",
							eventStore: a
						});
					}
				};
				t.emitter.trigger("eventResize", {
					...c,
					el: this.draggingSegEl,
					startDelta: this.validMutation.startDelta || A(0),
					endDelta: this.validMutation.endDelta || A(0),
					jsEvent: e.origEvent,
					view: t.viewApi
				}), t.emitter.trigger("eventChange", c);
			} else t.emitter.trigger("_noEventResize");
			this.draggingEventRange = null, this.relevantEvents = null, this.validMutation = null;
		};
		let { component: t } = e, n = this.dragging = new mm(e.el);
		n.pointer.selector = `.${j.internalEventResizer}`, n.touchScrollAllowed = !1, n.autoScroller.isEnabled = t.context.options.dragScroll;
		let r = this.hitDragging = new _m(this.dragging, yf(e));
		r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), r.emitter.on("hitupdate", this.handleHitUpdate), r.emitter.on("dragend", this.handleDragEnd);
	}
	destroy() {
		this.dragging.destroy();
	}
	querySegEl(e) {
		return e.subjectEl.closest(`.${j.internalEvent}`);
	}
};
function jm(e, t, n, r) {
	let { context: i } = e, a = e.dateSpan.range.start, o = t.dateSpan.range.start, { delta: s, instantDeltaMs: c } = Em(e, t, {
		date0: a,
		date1: o,
		largeUnit: e.largeUnit
	});
	if (n) {
		let e = xl(r.start, r.instantStartMs, s, c ?? void 0, i);
		if (e.instantMs == null ? e.marker < r.end : e.instantMs < yc(r, i.dateEnv)) return {
			startDelta: s,
			...c == null ? {} : { instantStartDeltaMs: c }
		};
	} else {
		let e = xl(r.end, r.instantEndMs, s, c ?? void 0, i);
		if (e.instantMs == null ? e.marker > r.start : e.instantMs > vc(r, i.dateEnv)) return {
			endDelta: s,
			...c == null ? {} : { instantEndDeltaMs: c }
		};
	}
	return null;
}
var Mm = {
	name: "interaction",
	componentInteractions: [
		xm,
		Sm,
		Dm,
		Am
	],
	calendarInteractions: [class {
		constructor(e) {
			this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = (e) => {
				e.jsEvent && (this.isRecentPointerDateSelect = !0);
			}, this.onDocumentPointerDown = (e) => {
				let t = this.context.options.unselectCancel, n = Xu(e.origEvent);
				this.matchesCancel = !!n.closest(t), this.matchesEvent = !!n.closest(Dm.SELECTOR);
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
			let t = this.documentPointer = new $p(document);
			t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
		}
		destroy() {
			this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
		}
	}],
	elementDraggingImpl: mm
}, Nm = {
	startTime: A,
	duration: A,
	create: Boolean,
	sourceId: String
};
function Pm(e) {
	let { refined: t, extra: n } = pc(e, Nm);
	return {
		startTime: t.startTime || null,
		duration: t.duration || null,
		create: t.create == null || t.create,
		sourceId: t.sourceId,
		leftoverProps: n
	};
}
var Fm = class {
	constructor(e, t) {
		this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = (e) => {
			this.dragMeta = this.buildDragMeta(e.subjectEl);
		}, this.handleHitUpdate = (e, t, n) => {
			let { dragging: r } = this.hitDragging, i = null, a = null, o = !1, s = {
				affectedEvents: Lc(),
				mutatedEvents: Lc(),
				isEvent: this.dragMeta.create
			};
			e && (i = e.context, this.canDropElOnCalendar(n.subjectEl, i) && (a = Im(e.dateSpan, this.dragMeta, i), s.mutatedEvents = Pc(a), o = !kp(s, e.dateProfile, i), o && (s.mutatedEvents = Lc(), a = null))), this.displayDrag(i, s), r.setMirrorIsVisible(t || !a || !document.querySelector(`.${j.internalEventMirror}`)), o ? Os() : ks(), t || (r.setMirrorNeedsRevert(!a), this.receivingContext = i, this.droppableEvent = a);
		}, this.handleDragEnd = (e) => {
			let { receivingContext: t, droppableEvent: n } = this;
			if (this.clearDrag(), t && n) {
				let r = this.hitDragging.finalHit, i = r.context.viewApi, a = this.dragMeta;
				if (t.emitter.trigger("drop", {
					...ym(r.dateSpan, t),
					draggedEl: e.subjectEl,
					jsEvent: e.origEvent,
					view: i
				}), a.create) {
					let r = Pc(n);
					t.dispatch({
						type: "MERGE_EVENTS",
						eventStore: r
					}), e.isTouch && t.dispatch({
						type: "SELECT_EVENT",
						eventInstanceId: n.instance.instanceId
					}), t.emitter.trigger("eventReceive", {
						event: new wl(t, n.def, n.instance),
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
		let n = this.hitDragging = new _m(e, bf);
		n.requireInitial = !1, n.emitter.on("dragstart", this.handleDragStart), n.emitter.on("hitupdate", this.handleHitUpdate), n.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t;
	}
	buildDragMeta(e) {
		return typeof this.suppliedDragMeta == "object" ? Pm(this.suppliedDragMeta) : typeof this.suppliedDragMeta == "function" ? Pm(this.suppliedDragMeta(e)) : Lm(e);
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
		return typeof n == "function" ? n.call(t.calendarApi, e) : typeof n == "string" && n ? e.matches(n) : !0;
	}
};
function Im(e, t, n) {
	let r = { ...t.leftoverProps };
	for (let i of n.pluginHooks.externalDefTransforms) Object.assign(r, i(e, t));
	let { refined: i, extra: a } = Zc(r, n), o = $c(i, a, t.sourceId, e.allDay, n.options.forceEventDuration || !!t.duration, n), s = e.range.start;
	e.allDay && t.startTime && (s = n.dateEnv.add(s, t.startTime));
	let c = {
		marker: s,
		instantMs: e.allDay ? void 0 : e.instantStartMs
	}, l = t.duration ? wc(c, t.duration, n.dateEnv) : _l(e.allDay, c, n);
	return {
		def: o,
		instance: Ec(o.defId, hc(c.marker, l.marker, c.instantMs, l.instantMs))
	};
}
function Lm(e) {
	let t = Rm(e, "event");
	return Pm(t ? JSON.parse(t) : { create: !1 });
}
Op.dataAttrPrefix = "";
function Rm(e, t) {
	let n = Op.dataAttrPrefix, r = (n ? n + "-" : "") + t;
	return e.getAttribute("data-" + r) || "";
}
var zm = class {
	constructor(e, t = {}) {
		this.handlePointerDown = (e) => {
			let { dragging: t } = this, { minDistance: n, longPressDelay: r } = this.settings;
			t.minDistance = n ?? (e.isTouch ? 0 : cc.eventDragMinDistance), t.delay = e.isTouch ? r ?? cc.longPressDelay : 0;
		}, this.handleDragStart = (e) => {
			e.isTouch && this.dragging.delay && e.subjectEl.classList.contains(j.internalEvent) && this.dragging.mirror.getMirrorEl().classList.add(j.internalEventSelected);
		}, this.settings = t;
		let n = this.dragging = new mm(e);
		n.touchScrollAllowed = !1, t.itemSelector != null && (n.pointer.selector = t.itemSelector), t.appendTo != null && (n.mirror.parentNode = t.appendTo), n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragstart", this.handleDragStart), new Fm(n, t.eventData);
	}
	destroy() {
		this.dragging.destroy();
	}
}, Bm = {
	code: "af",
	week: {
		dow: 1,
		doy: 4
	},
	prevText: "Vorige",
	nextText: "Volgende",
	todayText: "Vandag",
	yearText: "Jaar",
	monthText: "Maand",
	weekTextLong: "Week",
	dayText: "Dag",
	listText: "Agenda",
	allDayText: "Heeldag",
	moreLinkText: "Addisionele",
	noEventsText: "Daar is geen gebeurtenisse nie"
}, Vm = {
	code: "ar-dz",
	week: {
		dow: 0,
		doy: 4
	},
	direction: "rtl",
	prevText: "السابق",
	nextText: "التالي",
	todayText: "اليوم",
	yearText: "سنة",
	monthText: "شهر",
	weekTextLong: "أسبوع",
	dayText: "يوم",
	listText: "أجندة",
	allDayText: "اليوم كله",
	moreLinkText: "أخرى",
	noEventsText: "أي أحداث لعرض"
}, Hm = {
	code: "ar-kw",
	week: {
		dow: 0,
		doy: 12
	},
	direction: "rtl",
	prevText: "السابق",
	nextText: "التالي",
	todayText: "اليوم",
	yearText: "سنة",
	monthText: "شهر",
	weekTextLong: "أسبوع",
	dayText: "يوم",
	listText: "أجندة",
	allDayText: "اليوم كله",
	moreLinkText: "أخرى",
	noEventsText: "أي أحداث لعرض"
}, Um = {
	code: "ar-ly",
	week: {
		dow: 6,
		doy: 12
	},
	direction: "rtl",
	prevText: "السابق",
	nextText: "التالي",
	todayText: "اليوم",
	yearText: "سنة",
	monthText: "شهر",
	weekTextLong: "أسبوع",
	dayText: "يوم",
	listText: "أجندة",
	allDayText: "اليوم كله",
	moreLinkText: "أخرى",
	noEventsText: "أي أحداث لعرض"
}, Wm = {
	code: "ar-ma",
	week: {
		dow: 6,
		doy: 12
	},
	direction: "rtl",
	prevText: "السابق",
	nextText: "التالي",
	todayText: "اليوم",
	yearText: "سنة",
	monthText: "شهر",
	weekTextLong: "أسبوع",
	dayText: "يوم",
	listText: "أجندة",
	allDayText: "اليوم كله",
	moreLinkText: "أخرى",
	noEventsText: "أي أحداث لعرض"
}, Gm = {
	code: "ar-sa",
	week: {
		dow: 0,
		doy: 6
	},
	direction: "rtl",
	prevText: "السابق",
	nextText: "التالي",
	todayText: "اليوم",
	yearText: "سنة",
	monthText: "شهر",
	weekTextLong: "أسبوع",
	dayText: "يوم",
	listText: "أجندة",
	allDayText: "اليوم كله",
	moreLinkText: "أخرى",
	noEventsText: "أي أحداث لعرض"
}, Km = {
	code: "ar-tn",
	week: {
		dow: 1,
		doy: 4
	},
	direction: "rtl",
	prevText: "السابق",
	nextText: "التالي",
	todayText: "اليوم",
	yearText: "سنة",
	monthText: "شهر",
	weekTextLong: "أسبوع",
	dayText: "يوم",
	listText: "أجندة",
	allDayText: "اليوم كله",
	moreLinkText: "أخرى",
	noEventsText: "أي أحداث لعرض"
}, qm = {
	code: "ar",
	week: {
		dow: 6,
		doy: 12
	},
	direction: "rtl",
	prevText: "السابق",
	nextText: "التالي",
	todayText: "اليوم",
	yearText: "سنة",
	monthText: "شهر",
	weekTextLong: "أسبوع",
	dayText: "يوم",
	listText: "أجندة",
	allDayText: "اليوم كله",
	moreLinkText: "أخرى",
	noEventsText: "أي أحداث لعرض"
}, Jm = {
	code: "az",
	week: {
		dow: 1,
		doy: 4
	},
	prevText: "Əvvəl",
	nextText: "Sonra",
	todayText: "Bu Gün",
	yearText: "Il",
	monthText: "Ay",
	weekTextLong: "Həftə",
	dayText: "Gün",
	listText: "Gündəm",
	allDayText: "Bütün\nGün",
	moreLinkText(e) {
		return "+ daha çox " + e;
	},
	noEventsText: "Göstərmək üçün hadisə yoxdur"
}, Ym = {
	code: "bg",
	week: {
		dow: 1,
		doy: 4
	},
	prevText: "назад",
	nextText: "напред",
	todayText: "днес",
	yearText: "година",
	monthText: "Месец",
	weekTextLong: "Седмица",
	dayText: "Ден",
	listText: "График",
	allDayText: "Цял ден",
	moreLinkText(e) {
		return "+още " + e;
	},
	noEventsText: "Няма събития за показване"
}, Xm = {
	code: "bn",
	week: {
		dow: 0,
		doy: 6
	},
	prevText: "পেছনে",
	nextText: "সামনে",
	todayText: "আজ",
	yearText: "বছর",
	monthText: "মাস",
	weekTextLong: "সপ্তাহ",
	dayText: "দিন",
	listText: "তালিকা",
	allDayText: "সারাদিন",
	moreLinkText(e) {
		return "+অন্যান্য " + e;
	},
	noEventsText: "কোনো ইভেন্ট নেই"
}, Zm = {
	code: "bs",
	week: {
		dow: 1,
		doy: 7
	},
	prevText: "Prošli",
	nextText: "Sljedeći",
	todayText: "Danas",
	yearText: "Godina",
	monthText: "Mjesec",
	weekTextLong: "Sedmica",
	weekTextShort: "Sed",
	dayText: "Dan",
	listText: "Raspored",
	allDayText: "Cijeli\ndan",
	moreLinkText(e) {
		return "+ još " + e;
	},
	noEventsText: "Nema događaja za prikazivanje"
}, Qm = {
	code: "ca",
	week: {
		dow: 1,
		doy: 4
	},
	prevText: "Anterior",
	nextText: "Següent",
	todayText: "Avui",
	yearText: "Any",
	monthText: "Mes",
	weekTextLong: "Setmana",
	weekTextShort: "Set",
	dayText: "Dia",
	listText: "Agenda",
	allDayText: "Tot\nel dia",
	moreLinkText: "més",
	noEventsText: "No hi ha esdeveniments per mostrar"
}, $m = {
	code: "cs",
	week: {
		dow: 1,
		doy: 4
	},
	prevText: "Dříve",
	nextText: "Později",
	todayText: "Nyní",
	yearText: "Rok",
	monthText: "Měsíc",
	weekTextLong: "Týden",
	weekTextShort: "Týd",
	dayText: "Den",
	listText: "Agenda",
	allDayText: "Celý den",
	moreLinkText(e) {
		return "+další: " + e;
	},
	noEventsText: "Žádné akce k zobrazení"
}, eh = {
	code: "cy",
	week: {
		dow: 1,
		doy: 4
	},
	prevText: "Blaenorol",
	nextText: "Nesaf",
	todayText: "Heddiw",
	yearText: "Blwyddyn",
	monthText: "Mis",
	weekTextLong: "Wythnos",
	dayText: "Dydd",
	listText: "Rhestr",
	allDayText: "Trwy'r\ndydd",
	moreLinkText: "Mwy",
	noEventsText: "Dim digwyddiadau"
}, th = {
	code: "da",
	week: {
		dow: 1,
		doy: 4
	},
	prevText: "Forrige",
	nextText: "Næste",
	todayText: "I dag",
	yearText: "År",
	monthText: "Måned",
	weekTextLong: "Uge",
	dayText: "Dag",
	listText: "Agenda",
	allDayText: "Hele\ndagen",
	moreLinkText: "flere",
	noEventsText: "Ingen arrangementer at vise"
};
//#endregion
//#region node_modules/fullcalendar/chunks/de4008d4.js
function nh(e) {
	return e === "Tag" || e === "Monat" ? "r" : e === "Jahr" ? "s" : "";
}
var rh = {
	code: "de-at",
	week: {
		dow: 1,
		doy: 4
	},
	prevText: "Zurück",
	nextText: "Vor",
	todayText: "Heute",
	yearText: "Jahr",
	monthText: "Monat",
	weekTextLong: "Woche",
	weekTextShort: "KW",
	dayText: "Tag",
	listText: "Terminübersicht",
	allDayText: "Ganztägig",
	moreLinkText(e) {
		return "+ weitere " + e;
	},
	noEventsText: "Keine Ereignisse anzuzeigen",
	prevHint(e) {
		return `Vorherige${nh(e)} ${e}`;
	},
	nextHint(e) {
		return `Nächste${nh(e)} ${e}`;
	},
	todayHint(e) {
		return e === "Tag" ? "Heute" : `Diese${nh(e)} ${e}`;
	},
	viewHint(e) {
		return e + (e === "Woche" ? "n" : e === "Monat" ? "s" : "es") + "ansicht";
	},
	navLinkHint: "Gehe zu $0",
	moreLinkHint(e) {
		return "Zeige " + (e === 1 ? "ein weiteres Ereignis" : e + " weitere Ereignisse");
	},
	closeHint: "Schließen",
	eventsHint: "Ereignisse"
};
//#endregion
//#region node_modules/fullcalendar/chunks/9ccbb009.js
function ih(e) {
	return e === "Tag" || e === "Monat" ? "r" : e === "Jahr" ? "s" : "";
}
//#endregion
//#region node_modules/fullcalendar/locales-all/index.js
var ah = [
	Bm,
	Vm,
	Hm,
	Um,
	Wm,
	Gm,
	Km,
	qm,
	Jm,
	Ym,
	Xm,
	Zm,
	Qm,
	$m,
	eh,
	th,
	rh,
	{
		code: "de",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Zurück",
		nextText: "Vor",
		todayText: "Heute",
		yearText: "Jahr",
		monthText: "Monat",
		weekTextLong: "Woche",
		weekTextShort: "KW",
		dayText: "Tag",
		listText: "Terminübersicht",
		allDayText: "Ganztägig",
		moreLinkText(e) {
			return "+ weitere " + e;
		},
		noEventsText: "Keine Ereignisse anzuzeigen",
		prevHint(e) {
			return `Vorherige${ih(e)} ${e}`;
		},
		nextHint(e) {
			return `Nächste${ih(e)} ${e}`;
		},
		todayHint(e) {
			return e === "Tag" ? "Heute" : `Diese${ih(e)} ${e}`;
		},
		viewHint(e) {
			return e + (e === "Woche" ? "n" : e === "Monat" ? "s" : "es") + "ansicht";
		},
		navLinkHint: "Gehe zu $0",
		moreLinkHint(e) {
			return "Zeige " + (e === 1 ? "ein weiteres Ereignis" : e + " weitere Ereignisse");
		},
		closeHint: "Schließen",
		eventsHint: "Ereignisse"
	},
	{
		code: "el",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Προηγούμενος",
		nextText: "Επόμενος",
		todayText: "Σήμερα",
		yearText: "Ετος",
		monthText: "Μήνας",
		weekTextLong: "Εβδομάδα",
		weekTextShort: "Εβδ",
		dayText: "Ημέρα",
		listText: "Ατζέντα",
		allDayText: "Ολοήμερο",
		moreLinkText: "περισσότερα",
		noEventsText: "Δεν υπάρχουν γεγονότα προς εμφάνιση"
	},
	{
		code: "en-au",
		week: {
			dow: 1,
			doy: 4
		},
		weekTextShort: "W",
		todayHint: "This $0",
		prevHint: "Previous $0",
		nextHint: "Next $0",
		viewHint: "$0 view",
		navLinkHint: "Go to $0",
		moreLinkHint(e) {
			return `Show ${e} more event${e === 1 ? "" : "s"}`;
		}
	},
	{
		code: "en-gb",
		week: {
			dow: 1,
			doy: 4
		},
		weekTextShort: "W",
		todayHint: "This $0",
		prevHint: "Previous $0",
		nextHint: "Next $0",
		viewHint: "$0 view",
		navLinkHint: "Go to $0",
		moreLinkHint(e) {
			return `Show ${e} more event${e === 1 ? "" : "s"}`;
		}
	},
	{
		code: "en-nz",
		week: {
			dow: 1,
			doy: 4
		},
		weekTextShort: "W",
		todayHint: "This $0",
		prevHint: "Previous $0",
		nextHint: "Next $0",
		viewHint: "$0 view",
		navLinkHint: "Go to $0",
		moreLinkHint(e) {
			return `Show ${e} more event${e === 1 ? "" : "s"}`;
		}
	},
	{
		code: "eo",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Antaŭa",
		nextText: "Sekva",
		todayText: "Hodiaŭ",
		yearText: "Jaro",
		monthText: "Monato",
		weekTextLong: "Semajno",
		weekTextShort: "Sm",
		dayText: "Tago",
		listText: "Tagordo",
		allDayText: "Tuta\ntago",
		moreLinkText: "pli",
		noEventsText: "Neniuj eventoj por montri"
	},
	{
		code: "es",
		week: {
			dow: 0,
			doy: 6
		},
		prevText: "Ant",
		nextText: "Sig",
		todayText: "Hoy",
		yearText: "Año",
		monthText: "Mes",
		weekTextLong: "Semana",
		weekTextShort: "Sm",
		dayText: "Día",
		listText: "Agenda",
		prevHint: "$0 antes",
		nextHint: "$0 siguiente",
		todayHint(e, t) {
			return t === "day" ? "Hoy" : (t === "week" ? "Esta" : "Este") + " " + e.toLocaleLowerCase();
		},
		viewHint(e, t) {
			return "Vista " + (t === "week" ? "de la" : "del") + " " + e.toLocaleLowerCase();
		},
		allDayText: "Todo\nel día",
		moreLinkText: "más",
		noEventsText: "No hay eventos para mostrar"
	},
	{
		code: "es",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Ant",
		nextText: "Sig",
		todayText: "Hoy",
		yearText: "Año",
		monthText: "Mes",
		weekTextLong: "Semana",
		weekTextShort: "Sm",
		dayText: "Día",
		listText: "Agenda",
		prevHint: "$0 antes",
		nextHint: "$0 siguiente",
		todayHint(e, t) {
			return t === "day" ? "Hoy" : (t === "week" ? "Esta" : "Este") + " " + e.toLocaleLowerCase();
		},
		viewHint(e, t) {
			return "Vista " + (t === "week" ? "de la" : "del") + " " + e.toLocaleLowerCase();
		},
		allDayText: "Todo\nel día",
		moreLinkText: "más",
		moreLinkHint(e) {
			return `Mostrar ${e} eventos más`;
		},
		noEventsText: "No hay eventos para mostrar",
		navLinkHint: "Ir al $0",
		closeHint: "Cerrar",
		eventsHint: "Eventos"
	},
	{
		code: "et",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Eelnev",
		nextText: "Järgnev",
		todayText: "Täna",
		yearText: "Aasta",
		monthText: "Kuu",
		weekTextLong: "Nädal",
		weekTextShort: "Näd",
		dayText: "Päev",
		listText: "Päevakord",
		allDayText: "Kogu\npäev",
		moreLinkText(e) {
			return "+ veel " + e;
		},
		noEventsText: "Kuvamiseks puuduvad sündmused"
	},
	{
		code: "eu",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "Aur",
		nextText: "Hur",
		todayText: "Gaur",
		yearText: "Urtea",
		monthText: "Hilabetea",
		weekTextLong: "Astea",
		weekTextShort: "As",
		dayText: "Eguna",
		listText: "Agenda",
		allDayText: "Egun\nosoa",
		moreLinkText: "gehiago",
		noEventsText: "Ez dago ekitaldirik erakusteko"
	},
	{
		code: "fa",
		week: {
			dow: 6,
			doy: 12
		},
		direction: "rtl",
		prevText: "قبلی",
		nextText: "بعدی",
		todayText: "امروز",
		yearText: "سال",
		monthText: "ماه",
		weekTextLong: "هفته",
		weekTextShort: "هف",
		dayText: "روز",
		listText: "برنامه",
		allDayText: "تمام روز",
		moreLinkText(e) {
			return "بیش از " + e;
		},
		noEventsText: "هیچ رویدادی به نمایش"
	},
	{
		code: "fi",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Edellinen",
		nextText: "Seuraava",
		todayText: "Tänään",
		yearText: "Vuosi",
		monthText: "Kuukausi",
		weekTextLong: "Viikko",
		weekTextShort: "Vk",
		dayText: "Päivä",
		listText: "Tapahtumat",
		allDayText: "Koko\npäivä",
		moreLinkText: "lisää",
		noEventsText: "Ei näytettäviä tapahtumia"
	},
	{
		code: "fr",
		prevText: "Précédent",
		nextText: "Suivant",
		todayText: "Aujourd'hui",
		yearText: "Année",
		monthText: "Mois",
		weekTextLong: "Semaine",
		weekTextShort: "Sem.",
		dayText: "Jour",
		listText: "Mon planning",
		allDayText: "Toute la\njournée",
		moreLinkText: "en plus",
		noEventsText: "Aucun évènement à afficher"
	},
	{
		code: "fr-ch",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Précédent",
		nextText: "Suivant",
		todayText: "Courant",
		yearText: "Année",
		monthText: "Mois",
		weekTextLong: "Semaine",
		weekTextShort: "Sm",
		dayText: "Jour",
		listText: "Mon planning",
		allDayText: "Toute la\njournée",
		moreLinkText: "en plus",
		noEventsText: "Aucun évènement à afficher"
	},
	{
		code: "fr",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Précédent",
		nextText: "Suivant",
		todayText: "Aujourd'hui",
		yearText: "Année",
		monthText: "Mois",
		weekTextLong: "Semaine",
		weekTextShort: "Sem.",
		dayText: "Jour",
		listText: "Planning",
		allDayText: "Toute la\njournée",
		moreLinkText: "en plus",
		noEventsText: "Aucun évènement à afficher"
	},
	{
		code: "gl",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Ant",
		nextText: "Seg",
		todayText: "Hoxe",
		yearText: "Ano",
		monthText: "Mes",
		weekTextLong: "Semana",
		weekTextShort: "Sm",
		dayText: "Día",
		listText: "Axenda",
		prevHint: "$0 antes",
		nextHint: "$0 seguinte",
		todayHint(e, t) {
			return t === "day" ? "Hoxe" : (t === "week" ? "Esta" : "Este") + " " + e.toLocaleLowerCase();
		},
		viewHint(e, t) {
			return "Vista " + (t === "week" ? "da" : "do") + " " + e.toLocaleLowerCase();
		},
		allDayText: "Todo\no día",
		moreLinkText: "máis",
		moreLinkHint(e) {
			return `Amosar ${e} eventos máis`;
		},
		noEventsText: "Non hai eventos para amosar",
		navLinkHint: "Ir ao $0",
		closeHint: "Pechar",
		eventsHint: "Eventos"
	},
	{
		code: "he",
		direction: "rtl",
		prevText: "הקודם",
		nextText: "הבא",
		todayText: "היום",
		yearText: "שנה",
		monthText: "חודש",
		weekTextLong: "שבוע",
		dayText: "יום",
		listText: "סדר יום",
		allDayText: "כל היום",
		moreLinkText: "נוספים",
		noEventsText: "אין אירועים להצגה"
	},
	{
		code: "hi",
		week: {
			dow: 0,
			doy: 6
		},
		prevText: "पिछला",
		nextText: "अगला",
		todayText: "आज",
		yearText: "वर्ष",
		monthText: "महीना",
		weekTextLong: "सप्ताह",
		weekTextShort: "हफ्ता",
		dayText: "दिन",
		listText: "कार्यसूची",
		allDayText: "सभी दिन",
		moreLinkText(e) {
			return "+अधिक " + e;
		},
		noEventsText: "कोई घटनाओं को प्रदर्शित करने के लिए"
	},
	{
		code: "hr",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "Prijašnji",
		nextText: "Sljedeći",
		todayText: "Danas",
		yearText: "Godina",
		monthText: "Mjesec",
		weekTextLong: "Tjedan",
		weekTextShort: "Tje",
		dayText: "Dan",
		listText: "Raspored",
		allDayText: "Cijeli\ndan",
		moreLinkText(e) {
			return "+ još " + e;
		},
		noEventsText: "Nema događaja za prikaz"
	},
	{
		code: "hu",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Vissza",
		nextText: "Előre",
		todayText: "Ma",
		yearText: "Év",
		monthText: "Hónap",
		weekTextLong: "Hét",
		dayText: "Nap",
		listText: "Lista",
		allDayText: "Egész\nnap",
		moreLinkText: "további",
		noEventsText: "Nincs megjeleníthető esemény"
	},
	{
		code: "hy-am",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Նախորդ",
		nextText: "Հաջորդ",
		todayText: "Այսօր",
		yearText: "Տարի",
		monthText: "Ամիս",
		weekTextLong: "Շաբաթ",
		weekTextShort: "Շաբ",
		dayText: "Օր",
		listText: "Օրվա ցուցակ",
		allDayText: "Ամբողջ օր",
		moreLinkText(e) {
			return "+ ևս " + e;
		},
		noEventsText: "Բացակայում է իրադարձությունը ցուցադրելու"
	},
	{
		code: "id",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "mundur",
		nextText: "maju",
		todayText: "hari ini",
		yearText: "Tahun",
		monthText: "Bulan",
		weekTextLong: "Minggu",
		weekTextShort: "Mg",
		dayText: "Hari",
		listText: "Agenda",
		allDayText: "Sehari\npenuh",
		moreLinkText: "lebih",
		noEventsText: "Tidak ada acara untuk ditampilkan"
	},
	{
		code: "is",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Fyrri",
		nextText: "Næsti",
		todayText: "Í dag",
		yearText: "Ár",
		monthText: "Mánuður",
		weekTextLong: "Vika",
		dayText: "Dagur",
		listText: "Dagskrá",
		allDayText: "Allan\ndaginn",
		moreLinkText: "meira",
		noEventsText: "Engir viðburðir til að sýna"
	},
	{
		code: "it",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Prec",
		nextText: "Succ",
		todayText: "Oggi",
		yearText: "Anno",
		monthText: "Mese",
		weekTextLong: "Settimana",
		weekTextShort: "Sm",
		dayText: "Giorno",
		listText: "Agenda",
		allDayText: "Tutto\nil giorno",
		moreLinkText(e) {
			return "+altri " + e;
		},
		noEventsText: "Non ci sono eventi da visualizzare"
	},
	{
		code: "ja",
		prevText: "前",
		nextText: "次",
		todayText: "今日",
		yearText: "年",
		monthText: "月",
		weekTextLong: "週",
		dayText: "日",
		listText: "予定リスト",
		allDayText: "終日",
		moreLinkText(e) {
			return "他 " + e + " 件";
		},
		noEventsText: "表示する予定はありません"
	},
	{
		code: "ka",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "წინა",
		nextText: "შემდეგი",
		todayText: "დღეს",
		yearText: "წელიწადი",
		monthText: "თვე",
		weekTextLong: "კვირა",
		weekTextShort: "კვ",
		dayText: "დღე",
		listText: "დღის წესრიგი",
		allDayText: "მთელი\nდღე",
		moreLinkText(e) {
			return "+ კიდევ " + e;
		},
		noEventsText: "ღონისძიებები არ არის"
	},
	{
		code: "kk",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "Алдыңғы",
		nextText: "Келесі",
		todayText: "Бүгін",
		yearText: "Жыл",
		monthText: "Ай",
		weekTextLong: "Апта",
		dayText: "Күн",
		listText: "Күн тәртібі",
		allDayText: "Күні\nбойы",
		moreLinkText(e) {
			return "+ тағы " + e;
		},
		noEventsText: "Көрсету үшін оқиғалар жоқ"
	},
	{
		code: "km",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "មុន",
		nextText: "បន្ទាប់",
		todayText: "ថ្ងៃនេះ",
		yearText: "ឆ្នាំ",
		monthText: "ខែ",
		weekTextLong: "សប្តាហ៍",
		dayText: "ថ្ងៃ",
		listText: "បញ្ជី",
		allDayText: "ពេញមួយថ្ងៃ",
		moreLinkText: "ច្រើនទៀត",
		noEventsText: "គ្មានព្រឹត្តិការណ៍ត្រូវបង្ហាញ"
	},
	{
		code: "ko",
		prevText: "이전달",
		nextText: "다음달",
		todayText: "오늘",
		yearText: "년도",
		monthText: "월",
		weekTextLong: "주",
		dayText: "일",
		listText: "일정목록",
		allDayText: "종일",
		moreLinkText: "개",
		noEventsText: "일정이 없습니다"
	},
	{
		code: "ku",
		week: {
			dow: 6,
			doy: 12
		},
		direction: "rtl",
		prevText: "پێشتر",
		nextText: "دواتر",
		todayText: "ئەمڕو",
		yearText: "ساڵ",
		monthText: "مانگ",
		weekTextLong: "هەفتە",
		dayText: "ڕۆژ",
		listText: "بەرنامە",
		allDayText: "هەموو ڕۆژەکە",
		moreLinkText: "زیاتر",
		noEventsText: "هیچ ڕووداوێك نیە"
	},
	{
		code: "lb",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Zréck",
		nextText: "Weider",
		todayText: "Haut",
		yearText: "Joer",
		monthText: "Mount",
		weekTextLong: "Woch",
		weekTextShort: "W",
		dayText: "Dag",
		listText: "Terminiwwersiicht",
		allDayText: "Ganzen\nDag",
		moreLinkText: "méi",
		noEventsText: "Nee Evenementer ze affichéieren"
	},
	{
		code: "lt",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Atgal",
		nextText: "Pirmyn",
		todayText: "Šiandien",
		yearText: "Metai",
		monthText: "Mėnuo",
		weekTextLong: "Savaitė",
		weekTextShort: "SAV",
		dayText: "Diena",
		listText: "Darbotvarkė",
		allDayText: "Visą\ndieną",
		moreLinkText: "daugiau",
		noEventsText: "Nėra įvykių rodyti"
	},
	{
		code: "lv",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Iepr.",
		nextText: "Nāk.",
		todayText: "Šodien",
		yearText: "Gads",
		monthText: "Mēnesis",
		weekTextLong: "Nedēļa",
		weekTextShort: "Ned.",
		dayText: "Diena",
		listText: "Dienas kārtība",
		allDayText: "Visu\ndienu",
		moreLinkText(e) {
			return "+vēl " + e;
		},
		noEventsText: "Nav notikumu"
	},
	{
		code: "mk",
		prevText: "претходно",
		nextText: "следно",
		todayText: "Денес",
		yearText: "година",
		monthText: "Месец",
		weekTextLong: "Недела",
		weekTextShort: "Сед",
		dayText: "Ден",
		listText: "График",
		allDayText: "Цел ден",
		moreLinkText(e) {
			return "+повеќе " + e;
		},
		noEventsText: "Нема настани за прикажување"
	},
	{
		code: "ms",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "Sebelum",
		nextText: "Selepas",
		todayText: "hari ini",
		yearText: "Tahun",
		monthText: "Bulan",
		weekTextLong: "Minggu",
		weekTextShort: "Mg",
		dayText: "Hari",
		listText: "Agenda",
		allDayText: "Sepanjang\nhari",
		moreLinkText(e) {
			return "masih ada " + e + " acara";
		},
		noEventsText: "Tiada peristiwa untuk dipaparkan"
	},
	{
		code: "nb",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Forrige",
		nextText: "Neste",
		todayText: "I dag",
		yearText: "År",
		monthText: "Måned",
		weekTextLong: "Uke",
		dayText: "Dag",
		listText: "Agenda",
		allDayText: "Hele\ndagen",
		moreLinkText: "til",
		noEventsText: "Ingen hendelser å vise",
		prevHint: "Forrige $0",
		nextHint: "Neste $0",
		todayHint: "Nåværende $0",
		viewHint: "$0 visning",
		navLinkHint: "Gå til $0",
		moreLinkHint(e) {
			return `Vis ${e} flere hendelse${e === 1 ? "" : "r"}`;
		}
	},
	{
		code: "ne",
		week: {
			dow: 7,
			doy: 1
		},
		prevText: "अघिल्लो",
		nextText: "अर्को",
		todayText: "आज",
		yearText: "वर्ष",
		monthText: "महिना",
		weekTextLong: "हप्ता",
		dayText: "दिन",
		listText: "सूची",
		allDayText: "दिनभरि",
		moreLinkText: "थप लिंक",
		noEventsText: "देखाउनको लागि कुनै घटनाहरू छैनन्"
	},
	{
		code: "nl",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Vorige",
		nextText: "Volgende",
		todayText: "Vandaag",
		yearText: "Jaar",
		monthText: "Maand",
		weekTextLong: "Week",
		dayText: "Dag",
		listText: "Lijst",
		allDayText: "Hele dag",
		moreLinkText: "extra",
		noEventsText: "Geen evenementen om te laten zien"
	},
	{
		code: "nn",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Førre",
		nextText: "Neste",
		todayText: "I dag",
		yearText: "År",
		monthText: "Månad",
		weekTextLong: "Veke",
		dayText: "Dag",
		listText: "Agenda",
		allDayText: "Heile\ndagen",
		moreLinkText: "til",
		noEventsText: "Ingen hendelser å vise"
	},
	{
		code: "pl",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Poprzedni",
		nextText: "Następny",
		todayText: "Dziś",
		yearText: "Rok",
		monthText: "Miesiąc",
		weekTextLong: "Tydzień",
		weekTextShort: "Tydz",
		dayText: "Dzień",
		listText: "Plan dnia",
		allDayText: "Cały\ndzień",
		moreLinkText: "więcej",
		noEventsText: "Brak wydarzeń do wyświetlenia"
	},
	{
		code: "pt-br",
		prevText: "Anterior",
		nextText: "Próximo",
		prevYearText: "Ano anterior",
		nextYearText: "Próximo ano",
		yearText: "Ano",
		todayText: "Hoje",
		monthText: "Mês",
		weekTextLong: "Semana",
		weekTextShort: "Sm",
		dayText: "Dia",
		listText: "Lista",
		prevHint: "$0 Anterior",
		nextHint: "Próximo $0",
		todayHint(e, t) {
			return t === "day" ? "Hoje" : (t === "week" ? "Esta" : "Este") + " " + e.toLocaleLowerCase();
		},
		viewHint(e, t) {
			return "Visualizar " + (t === "week" ? "a" : "o") + " " + e.toLocaleLowerCase();
		},
		allDayText: "Dia\ninteiro",
		moreLinkText(e) {
			return "mais +" + e;
		},
		moreLinkHint(e) {
			return `Mostrar mais ${e} eventos`;
		},
		noEventsText: "Não há eventos para mostrar",
		navLinkHint: "Ir para $0",
		closeHint: "Fechar",
		eventsHint: "Eventos"
	},
	{
		code: "pt",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Anterior",
		nextText: "Seguinte",
		todayText: "Hoje",
		yearText: "Ano",
		monthText: "Mês",
		weekTextLong: "Semana",
		weekTextShort: "Sem",
		dayText: "Dia",
		listText: "Agenda",
		allDayText: "Todo\no dia",
		moreLinkText: "mais",
		noEventsText: "Não há eventos para mostrar"
	},
	{
		code: "ro",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "precedentă",
		nextText: "următoare",
		todayText: "Azi",
		yearText: "An",
		monthText: "Lună",
		weekTextLong: "Săptămână",
		weekTextShort: "Săpt",
		dayText: "Zi",
		listText: "Agendă",
		allDayText: "Toată\nziua",
		moreLinkText(e) {
			return "+alte " + e;
		},
		noEventsText: "Nu există evenimente de afișat"
	},
	{
		code: "ru",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Пред",
		nextText: "След",
		todayText: "Сегодня",
		yearText: "Год",
		monthText: "Месяц",
		weekTextLong: "Неделя",
		weekTextShort: "Нед",
		dayText: "День",
		listText: "Повестка дня",
		allDayText: "Весь\nдень",
		moreLinkText(e) {
			return "+ ещё " + e;
		},
		noEventsText: "Нет событий для отображения"
	},
	{
		code: "si-lk",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "පෙර",
		nextText: "පසු",
		todayText: "අද",
		yearText: "අවුරුදු",
		monthText: "මාසය",
		weekTextLong: "සතිය",
		weekTextShort: "සති",
		dayText: "දවස",
		listText: "ලැයිස්තුව",
		allDayText: "සියලු",
		moreLinkText: "තවත්",
		noEventsText: "මුකුත් නැත"
	},
	{
		code: "sk",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Predchádzajúci",
		nextText: "Nasledujúci",
		todayText: "Dnes",
		yearText: "Rok",
		monthText: "Mesiac",
		weekTextLong: "Týždeň",
		weekTextShort: "Ty",
		dayText: "Deň",
		listText: "Rozvrh",
		allDayText: "Celý deň",
		moreLinkText(e) {
			return "+ďalšie: " + e;
		},
		noEventsText: "Žiadne akcie na zobrazenie"
	},
	{
		code: "sl",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "Prejšnji",
		nextText: "Naslednji",
		todayText: "Trenutni",
		yearText: "Leto",
		monthText: "Mesec",
		weekTextLong: "Teden",
		dayText: "Dan",
		listText: "Dnevni red",
		allDayText: "Ves dan",
		moreLinkText: "več",
		noEventsText: "Ni dogodkov za prikaz"
	},
	{
		code: "sm",
		prevText: "Talu ai",
		nextText: "Mulimuli atu",
		todayText: "Aso nei",
		yearText: "Tausaga",
		monthText: "Masina",
		weekTextLong: "Vaiaso",
		dayText: "Aso",
		listText: "Faasologa",
		allDayText: "Aso atoa",
		moreLinkText: "sili atu",
		noEventsText: "Leai ni mea na tutupu"
	},
	{
		code: "sq",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "mbrapa",
		nextText: "Përpara",
		todayText: "Sot",
		yearText: "Viti",
		monthText: "Muaj",
		weekTextLong: "Javë",
		weekTextShort: "Ja",
		dayText: "Ditë",
		listText: "Listë",
		allDayText: "Gjithë\nditën",
		moreLinkText(e) {
			return "+më tepër " + e;
		},
		noEventsText: "Nuk ka evente për të shfaqur"
	},
	{
		code: "sr-cyrl",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "Претходна",
		nextText: "следећи",
		todayText: "Данас",
		yearText: "Година",
		monthText: "Месец",
		weekTextLong: "Недеља",
		weekTextShort: "Сед",
		dayText: "Дан",
		listText: "Планер",
		allDayText: "Цео дан",
		moreLinkText(e) {
			return "+ још " + e;
		},
		noEventsText: "Нема догађаја за приказ"
	},
	{
		code: "sr",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "Prethodna",
		nextText: "Sledeći",
		todayText: "Danas",
		yearText: "Godina",
		monthText: "Mеsеc",
		weekTextLong: "Nеdеlja",
		weekTextShort: "Sed",
		dayText: "Dan",
		listText: "Planеr",
		allDayText: "Cеo dan",
		moreLinkText(e) {
			return "+ još " + e;
		},
		noEventsText: "Nеma događaja za prikaz"
	},
	{
		code: "sv",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Förra",
		nextText: "Nästa",
		todayText: "Idag",
		yearText: "År",
		monthText: "Månad",
		weekTextLong: "Vecka",
		weekTextShort: "v.",
		dayText: "Dag",
		listText: "Program",
		prevHint(e) {
			return `Föregående ${e.toLocaleLowerCase()}`;
		},
		nextHint(e) {
			return `Nästa ${e.toLocaleLowerCase()}`;
		},
		todayHint(e, t) {
			return (t === "year" ? "I" : "Denna") + " " + e.toLocaleLowerCase();
		},
		viewHint: "$0 vy",
		navLinkHint: "Gå till $0",
		moreLinkHint(e) {
			return `Visa ytterligare ${e} händelse${e === 1 ? "" : "r"}`;
		},
		allDayText: "Heldag",
		moreLinkText: "till",
		noEventsText: "Inga händelser att visa",
		closeHint: "Stäng",
		eventsHint: "Händelser"
	},
	{
		code: "ta-in",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "முந்தைய",
		nextText: "அடுத்தது",
		todayText: "இன்று",
		yearText: "ஆண்டு",
		monthText: "மாதம்",
		weekTextLong: "வாரம்",
		dayText: "நாள்",
		listText: "தினசரி அட்டவணை",
		allDayText: "நாள்\nமுழுவதும்",
		moreLinkText(e) {
			return "+ மேலும் " + e;
		},
		noEventsText: "காண்பிக்க நிகழ்வுகள் இல்லை"
	},
	{
		code: "th",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "ก่อนหน้า",
		nextText: "ถัดไป",
		prevYearText: "ปีก่อนหน้า",
		nextYearText: "ปีถัดไป",
		yearText: "ปี",
		todayText: "วันนี้",
		monthText: "เดือน",
		weekTextLong: "สัปดาห์",
		dayText: "วัน",
		listText: "กำหนดการ",
		allDayText: "ตลอดวัน",
		moreLinkText: "เพิ่มเติม",
		noEventsText: "ไม่มีกิจกรรมที่จะแสดง"
	},
	{
		code: "tr",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "geri",
		nextText: "ileri",
		todayText: "bugün",
		yearText: "Yıl",
		monthText: "Ay",
		weekTextLong: "Hafta",
		weekTextShort: "Hf",
		dayText: "Gün",
		listText: "Ajanda",
		allDayText: "Tüm gün",
		moreLinkText: "daha fazla",
		noEventsText: "Gösterilecek etkinlik yok"
	},
	{
		code: "ug",
		prevText: "ئالدىنقى",
		nextText: "كېيىنكى",
		todayText: "بۈگۈن",
		yearText: "يىل",
		monthText: "ئاي",
		weekTextLong: "ھەپتە",
		dayText: "كۈن",
		listText: "كۈنتەرتىپ",
		allDayText: "پۈتۈن كۈن"
	},
	{
		code: "uk",
		week: {
			dow: 1,
			doy: 7
		},
		prevText: "Попередній",
		nextText: "далі",
		todayText: "Сьогодні",
		yearText: "рік",
		monthText: "Місяць",
		weekTextLong: "Тиждень",
		weekTextShort: "Тиж",
		dayText: "День",
		listText: "Порядок денний",
		allDayText: "Увесь\nдень",
		moreLinkText(e) {
			return "+ще " + e + "...";
		},
		noEventsText: "Немає подій для відображення"
	},
	{
		code: "uz-cy",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Олин",
		nextText: "Кейин",
		todayText: "Бугун",
		monthText: "Ой",
		weekTextLong: "Ҳафта",
		dayText: "Кун",
		listText: "Кун тартиби",
		allDayText: "Кун\nбўйича",
		moreLinkText(e) {
			return "+ яна " + e;
		},
		noEventsText: "Кўрсатиш учун воқеалар йўқ"
	},
	{
		code: "uz",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Oldingi",
		nextText: "Keyingi",
		todayText: "Bugun",
		yearText: "Yil",
		monthText: "Oy",
		weekTextLong: "Xafta",
		dayText: "Kun",
		listText: "Kun tartibi",
		allDayText: "Kun bo'yi",
		moreLinkText(e) {
			return "+ yana " + e;
		},
		noEventsText: "Ko'rsatish uchun voqealar yo'q"
	},
	{
		code: "vi",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "Trước",
		nextText: "Tiếp",
		todayText: "Hôm nay",
		yearText: "Năm",
		monthText: "Tháng",
		weekTextLong: "Tuần",
		weekTextShort: "Tu",
		dayText: "Ngày",
		listText: "Lịch biểu",
		allDayText: "Cả ngày",
		moreLinkText(e) {
			return "+ thêm " + e;
		},
		noEventsText: "Không có sự kiện để hiển thị"
	},
	{
		code: "zh-cn",
		week: {
			dow: 1,
			doy: 4
		},
		prevText: "上月",
		nextText: "下月",
		todayText: "今天",
		yearText: "年",
		monthText: "月",
		weekTextLong: "周",
		dayText: "日",
		listText: "日程",
		allDayText: "全天",
		moreLinkText(e) {
			return "另外 " + e + " 个";
		},
		noEventsText: "没有事件显示"
	},
	{
		code: "zh-tw",
		prevText: "上個",
		nextText: "下個",
		todayText: "今天",
		yearText: "年",
		monthText: "月",
		weekTextLong: "週",
		dayText: "天",
		listText: "活動列表",
		allDayText: "整天",
		moreLinkText: "顯示更多",
		noEventsText: "沒有任何活動"
	}
], oh = class {
	constructor() {
		this.sliceBusinessHours = I(this._sliceBusinessHours), this.sliceDateSelection = I(this._sliceDateSpan), this.sliceEventStore = I(this._sliceEventStore), this.sliceEventDrag = I(this._sliceInteraction), this.sliceEventResize = I(this._sliceInteraction), this.forceDayIfListItem = !1;
	}
	intersectDateSpan(e, t, ...n) {
		let r = _o(e.range, t);
		if (r) {
			let t = {
				...e,
				range: r
			};
			return r.start.valueOf() !== e.range.start.valueOf() && delete t.instantStartMs, r.end.valueOf() !== e.range.end.valueOf() && delete t.instantEndMs, t;
		}
		return null;
	}
	sliceDateSpan(e, ...t) {
		return this.sliceRange(e.range, ...t);
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
				end: Ua(e, 1)
			},
			allDay: !1
		}, t, n, {}, r, ...i);
	}
	_sliceBusinessHours(e, t, n, r, ...i) {
		return e ? this._sliceEventStore(jc(e, sh(t, !!n), r), {}, t, n, ...i).bg : [];
	}
	_sliceEventStore(e, t, n, r, ...i) {
		if (e) {
			let a = Ol(e, t, sh(n, !!r), r);
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
		let a = Ol(e.mutatedEvents, t, sh(n, !!r), r);
		return {
			segs: this.sliceEventRanges(a.fg, i),
			affectedInstances: e.affectedEvents.instances,
			isEvent: e.isEvent
		};
	}
	_sliceDateSpan(e, t, n, r, i, ...a) {
		if (!e) return [];
		let o = sh(t, !!n), s = this.intersectDateSpan(e, o, ...a);
		if (s) {
			e = s;
			let t = fl(e, r, i), n = this.sliceDateSpan(e, ...a);
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
			end: O(n.start, 1)
		});
		let r = this.sliceRange(n, ...t);
		for (let t of r) t.eventRange = e, t.isStart = e.isStart && t.isStart, t.isEnd = e.isEnd && t.isEnd;
		return r;
	}
};
function sh(e, t) {
	let n = e.activeRange;
	return t ? n : {
		start: Ua(n.start, e.slotMinTime.milliseconds),
		end: Ua(n.end, e.slotMaxTime.milliseconds - 864e5)
	};
}
var ch = class {
	constructor(e, t, n, r = "", i) {
		this.daySeries = e, this.dateEnv = n, this.majorUnit = r, this.activeRange = i;
		let { dates: a } = e, o, s, c;
		if (t) {
			for (s = a[0].getUTCDay(), o = 1; o < a.length && a[o].getUTCDay() !== s; o += 1);
			c = Math.ceil(a.length / o);
		} else c = 1, o = a.length;
		this.rowCount = c, this.colCount = o, this.cellRows = this.buildCells(), this.headerDates = this.buildHeaderDates();
	}
	buildCells() {
		let e = [];
		for (let t = 0; t < this.rowCount; t += 1) {
			let n = [];
			for (let e = 0; e < this.colCount; e += 1) n.push(this.buildCell(t, e));
			e.push(n);
		}
		return e;
	}
	buildCell(e, t) {
		let n = this.daySeries.dates[e * this.colCount + t];
		return {
			key: n.toISOString(),
			date: n,
			isMajor: this.cellIsMajor(n),
			isDisabled: this.activeRange === null || this.activeRange !== void 0 && !xo(this.activeRange, n)
		};
	}
	cellIsMajor(e) {
		return this.majorUnit ? of(e, this.majorUnit, this.dateEnv) : !1;
	}
	buildHeaderDates() {
		let e = [];
		for (let t = 0; t < this.colCount; t += 1) e.push(this.cellRows[0][t].date);
		return e;
	}
};
function lh(e, t) {
	let n = [];
	if (e) {
		let { start: r, end: i } = e, a = r;
		for (; a < i;) {
			let o = Math.floor(a / t), s = Math.min((o + 1) * t, i);
			n.push({
				row: o,
				start: a % t,
				end: (s - 1) % t + 1,
				isStart: e.isStart && a === r,
				isEnd: e.isEnd && s === i
			}), a = s;
		}
	}
	return n;
}
var uh = class extends oh {
	constructor() {
		super(...arguments), this.forceDayIfListItem = !0;
	}
	sliceRange(e, t) {
		return lh(t.daySeries.sliceRange(e), t.colCount);
	}
}, dh = class extends oh {
	constructor() {
		super(...arguments), this.forceDayIfListItem = !0;
	}
	sliceRange(e, t) {
		return lh(t.sliceRange(e), t.cnt);
	}
}, fh = /* @__PURE__ */ new Date(2592e5);
function ph(e, t, n, r, i, a) {
	let o = mh(e, t, n, r, i, a), s = af(n, a.dateEnv);
	if (t && s !== "day") for (let e of o.dataConfigs) of(e.dateMarker, s, a.dateEnv) && (e.renderProps.isMajor = !0);
	return [o];
}
function mh(e, t, n, r, i, a, o, s, c) {
	return {
		isDateRow: !0,
		renderConfig: hh(i, t, a),
		dataConfigs: _h(e, t, n, r, i, a, o, void 0, void 0, void 0, void 0, s, c)
	};
}
function hh(e, t, n) {
	let { options: r } = n;
	return {
		generatorName: "dayHeaderContent",
		customGenerator: r.dayHeaderContent,
		classNameGenerator: r.dayHeaderClass,
		innerClassNameGenerator: r.dayHeaderInnerClass,
		didMount: r.dayHeaderDidMount,
		willUnmount: r.dayHeaderWillUnmount,
		align: r.dayHeaderAlign,
		sticky: r._dayHeaderSticky,
		dayHeaderFormat: e,
		datesRepDistinctDays: t
	};
}
var gh = [];
for (let e = 0; e < 7; e++) gh.push(O(/* @__PURE__ */ new Date(2592e5), e));
function _h(e, t, n, r, i, a, o = 1, s = "", c = {}, l = {}, u = "", d, f = e.length) {
	let { dateEnv: p, viewApi: m, options: h } = a;
	return t ? e.map((e, t) => {
		let i = Vd(e, p, n, r), g = d != null && !(t % d), _ = h.navLinks && !i.isDisabled && f > 1, v = {
			...i,
			...c,
			isMajor: g,
			isSticky: !1,
			inPopover: !1,
			hasNavLink: _,
			view: m
		}, y = zd(a, e);
		return {
			key: s + e.toUTCString(),
			dateMarker: e,
			renderProps: v,
			attrs: {
				...i.isToday ? { "aria-current": "date" } : {},
				"data-date": Go(e),
				...l
			},
			innerAttrs: _ ? Bd(a, e, void 0, y, !0, !0) : void 0,
			a11yText: _ ? void 0 : y,
			colSpan: o,
			hasNavLink: _,
			className: u
		};
	}) : e.map((e, t) => {
		let n = e.getUTCDay(), r = O(fh, n), i = {
			date: p.toDate(e),
			dow: n,
			isDisabled: !1,
			isFuture: !1,
			isPast: !1,
			isToday: !1,
			isOther: !1
		}, a = d != null && !(t % d), f = {
			...i,
			date: gh[n],
			isMajor: a,
			isSticky: !1,
			inPopover: !1,
			hasNavLink: !1,
			view: m,
			...c
		}, h = Yo(p.formatToParts(r, Fd));
		return {
			key: s + String(n),
			dateMarker: e,
			renderProps: f,
			attrs: l,
			a11yText: h,
			colSpan: o,
			className: u
		};
	});
}
var H = class {
	constructor(e, t = !1) {
		this.masterCallback = e, this.ignoreDeletes = t, this.rev = "", this.current = /* @__PURE__ */ new Map(), this.callbacks = /* @__PURE__ */ new Map(), this.handleValue = (e, t) => {
			let { current: n, callbacks: r } = this, i = n.has(t), a = i ? n.get(t) : null, o = !1;
			e === null ? i && !this.ignoreDeletes && (n.delete(t), r.delete(t), o = !0) : (o = a !== e, n.set(t, e)), o && (this.rev = Ds(), this.masterCallback && this.masterCallback(e, t, a));
		};
	}
	createRef(e) {
		let t = this.callbacks.get(e);
		return t || (t = (t) => {
			this.handleValue(t, e);
		}, this.callbacks.set(e, t)), t;
	}
}, vh = class extends L {
	constructor() {
		super(...arguments), this.elRef = C();
	}
	render() {
		return D("div", { ref: this.elRef });
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let { props: e } = this, t = this.elRef.current;
		this.disconnectWidth = Ad(t, (t) => {
			this._isUnmounting || R(e.widthRef, t);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectWidth();
		let { props: e } = this;
		e.widthRef && R(e.widthRef, null);
	}
};
function yh(e) {
	return `${e.eventRange.instance.instanceId}:${e.start}`;
}
function bh(e, t) {
	let n = [];
	for (let e = 0; e < t; e++) n[e] = [];
	for (let t of e) n[t.row].push(t);
	return n;
}
function xh(e, t) {
	let n = [];
	if (e) {
		for (let r = 0; r < t; r++) n[r] = {
			affectedInstances: e.affectedInstances,
			isEvent: e.isEvent,
			segs: []
		};
		for (let t of e.segs) n[t.row].segs.push(t);
	} else for (let e = 0; e < t; e++) n[e] = null;
	return n;
}
var Sh = class extends L {
	constructor() {
		super(...arguments), this.buildPublicEvent = I((e, t, n) => new wl(e, t, n)), this.handleEl = (e) => {
			this.el = e, e && jl(e, this.props.eventRange);
		};
	}
	render() {
		let { props: e, context: t } = this, { eventRange: n } = e, { options: r } = t, i = n.ui, a = this.buildPublicEvent(t, n.def, n.instance), o = {
			...e.renderProps,
			event: a,
			timeText: "",
			isNarrow: e.isNarrow || !1,
			isShort: e.isShort || !1
		}, s = {
			...e.renderProps,
			event: a,
			view: t.viewApi,
			timeText: "",
			color: i.color || r.backgroundEventColor,
			contrastColor: i.contrastColor,
			isDraggable: !1,
			isStartResizable: !1,
			isEndResizable: !1,
			isMirror: !1,
			isStart: e.isStart,
			isEnd: e.isEnd,
			isFirst: !1,
			isLast: !1,
			isPast: e.isPast,
			isFuture: e.isFuture,
			isToday: e.isToday,
			isSelected: !1,
			isDragging: !1,
			isResizing: !1,
			isInteractive: !1,
			level: 0,
			isNarrow: e.isNarrow || !1,
			isShort: e.isShort || !1,
			timeClass: "",
			titleClass: B(r.backgroundEventTitleClass, o),
			options: { eventOverlap: !!r.eventOverlap }
		}, c = M(i.className, j.fill, j.internalEvent, j.internalBgEvent, e.isVertical ? j.flexCol : j.flexRow), l = M(B(r.backgroundEventInnerClass, s), j.liquid);
		return D(z, {
			tag: "div",
			className: c,
			style: {
				"--fc-event-color": s.color,
				"--fc-event-contrast-color": s.contrastColor
			},
			defaultGenerator: Ch,
			elRef: this.handleEl,
			renderProps: s,
			generatorName: "backgroundEventContent",
			customGenerator: r.backgroundEventContent,
			classNameGenerator: r.backgroundEventClass,
			didMount: r.backgroundEventDidMount,
			willUnmount: r.backgroundEventWillUnmount,
			children: (e) => D(e, {
				tag: "div",
				className: l
			})
		});
	}
	componentDidUpdate(e) {
		this.el && this.props.eventRange !== e.eventRange && jl(this.el, this.props.eventRange);
	}
};
function Ch(e) {
	let { title: t } = e.event;
	return t && D("div", {
		className: e.titleClass,
		children: e.event.title
	});
}
function wh(e, t) {
	return D("div", { className: M(e === "non-business" ? t.nonBusinessHoursClass : e === "highlight" ? t.highlightClass : void 0, j.fill) });
}
var Th = 1, Eh = 1, Dh = 10, Oh = class extends Wd {
	constructor() {
		super(...arguments), this.getDateMeta = I(Vd), this.closeRef = C(), this.focusStartRef = C(), this.focusEndRef = C(), this.handleRootEl = (e) => {
			this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
				el: e,
				useEventCenter: !1
			}) : this.context.unregisterInteractiveComponent(this);
		}, this.handleDocumentMouseDown = (e) => {
			let t = Xu(e);
			this.rootEl.contains(t) || this.handleClose();
		}, this.handleDocumentKeyDown = (e) => {
			e.key === "Escape" && this.handleClose();
		}, this.handleClose = () => {
			let { onClose: e } = this.props;
			e && e();
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n, dateEnv: r, viewApi: i } = t, { startDate: a, todayRange: o, dateProfile: s } = e, c = this.getDateMeta(a, r, s, o), l = r.formatToParts(a, n.popoverFormat), u = Yo(l), d = {
			...e.renderProps,
			...c,
			isMajor: !1,
			isNarrow: !1,
			isSticky: !1,
			inPopover: !0,
			level: 0,
			hasNavLink: !1,
			text: u,
			textParts: l,
			get weekdayText() {
				return Id(l);
			},
			get dayNumberText() {
				return Ld(l);
			},
			view: i
		}, f = {
			...e.renderProps,
			...c,
			isMajor: !1,
			isNarrow: !1,
			inPopover: !0,
			hasNavLink: !1,
			get weekdayText() {
				return Id(l);
			},
			get dayNumberText() {
				return Ld(l);
			},
			get monthText() {
				return Rd(l);
			},
			view: i,
			text: "",
			textParts: [],
			options: { businessHours: !!n.businessHours }
		}, p = Go(a), { dayHeaderAlign: m } = n, h = typeof m == "function" ? m({
			level: 0,
			inPopover: !0,
			isNarrow: !1
		}) : m, g = Ku(e.alignEl);
		return $e(D("div", {
			"data-date": p,
			id: e.id,
			role: "dialog",
			"aria-labelledby": e.titleId,
			className: M(n.popoverClass, j.flexCol, j.popoverZ, j.abs, j.borderBoxRoot, j.internalPopover),
			style: {
				top: 0,
				left: 0
			},
			dir: g ? "rtl" : void 0,
			"data-color-scheme": n.colorScheme || void 0,
			ref: this.handleRootEl,
			children: [
				D("div", {
					tabIndex: 0,
					style: { outline: "none" },
					ref: this.focusStartRef
				}),
				D("div", {
					className: M(B(n.dayHeaderClass, d), j.flexCol, j.borderlessX, j.borderlessTop, h === "center" ? j.alignCenter : h === "end" ? j.alignEnd : j.alignStart),
					children: [D("div", { children: D(z, {
						tag: "div",
						attrs: { id: e.titleId },
						generatorName: "dayHeaderContent",
						renderProps: d,
						customGenerator: n.dayHeaderContent,
						defaultGenerator: kh,
						classNameGenerator: n.dayHeaderInnerClass,
						didMount: n.dayHeaderDidMount,
						willUnmount: n.dayHeaderWillUnmount
					}) }), D(z, {
						tag: "button",
						attrs: {
							"aria-label": n.closeHint,
							...ws(this.handleClose)
						},
						elRef: this.closeRef,
						className: M(n.popoverCloseClass, j.flexRow, j.cursorPointer),
						renderProps: {},
						customGenerator: n.popoverCloseContent,
						generatorName: "popoverCloseContent"
					})]
				}),
				D("div", {
					className: M(B(n.dayCellClass, f), j.flexCol, j.borderless),
					children: D("div", {
						role: "list",
						className: B(n.dayCellInnerClass, f),
						children: e.children
					})
				}),
				D("div", {
					tabIndex: 0,
					style: { outline: "none" },
					ref: this.focusEndRef
				})
			]
		}), Gu(e.alignEl));
	}
	queryHit(e, t, n, r, i) {
		let { rootEl: a, props: o } = this;
		return t >= 0 && t < r && n >= 0 && n < i ? {
			dateProfile: o.dateProfile,
			dateSpan: {
				allDay: !o.forceTimed,
				range: {
					start: o.startDate,
					end: o.endDate
				},
				...o.dateSpanProps
			},
			getDayEl: () => a,
			rect: {
				left: 0,
				top: 0,
				right: r,
				bottom: i
			},
			layer: 1
		} : null;
	}
	componentDidMount() {
		document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.focusStartRef.current.addEventListener("focus", this.handleClose), this.focusEndRef.current.addEventListener("focus", this.handleClose), this.closeRef.current.focus({ preventScroll: !0 }), this.updateSize();
	}
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown), this.focusStartRef.current.removeEventListener("focus", this.handleClose), this.focusEndRef.current.removeEventListener("focus", this.handleClose);
	}
	updateSize() {
		let { alignEl: e, alignParentTop: t } = this.props, { rootEl: n } = this, r = Ku(e), i = qp(e);
		if (i) {
			let a = n.getBoundingClientRect(), o = t ? e.closest(t).getBoundingClientRect().top - Eh : i.top, s = r ? i.right - a.width : i.left;
			o = Math.max(o, Dh), s = Math.min(s, document.documentElement.clientWidth - Dh - a.width), s = Math.max(s, Dh);
			let { offsetParent: c } = n, l, u;
			if (!c || c === document.body) l = o + window.scrollY, u = s + window.scrollX;
			else {
				let e = c.getBoundingClientRect();
				l = o - e.top + c.scrollTop, u = s - e.left + c.scrollLeft;
			}
			Ju(n, {
				top: l,
				left: u
			});
		}
	}
};
function kh(e) {
	return e.text;
}
function Ah(e) {
	return e.reduce(Mh).eventRange.range.start;
}
function jh(e) {
	return e.reduce(Nh).eventRange.range.end;
}
function Mh(e, t) {
	return e.eventRange.range.start < t.eventRange.range.start ? e : t;
}
function Nh(e, t) {
	return e.eventRange.range.end > t.eventRange.range.end ? e : t;
}
var Ph = class extends L {
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = Lh(e.num, e.isNarrow, e.isMicro, e.display, e.renderProps, t);
		return D(z, {
			tag: "div",
			elRef: e.elRef,
			className: M(B(e.display === "row" ? n.rowMoreLinkClass : n.columnMoreLinkClass, r), e.className, e.display === "row" ? j.flexRow : j.flexCol, j.internalMoreLink, j.cursorPointer),
			style: e.style,
			attrs: e.attrs,
			renderProps: r,
			generatorName: "moreLinkContent",
			customGenerator: n.moreLinkContent,
			defaultGenerator: Ih,
			classNameGenerator: n.moreLinkClass,
			didMount: e.didMount,
			willUnmount: e.willUnmount,
			children: (t) => D(t, {
				tag: "div",
				className: M(B(n.moreLinkInnerClass, r), B(e.display === "row" ? n.rowMoreLinkInnerClass : n.columnMoreLinkInnerClass, r), e.display === "row" ? j.stickyS : j.stickyT)
			})
		});
	}
}, Fh = class extends L {
	constructor() {
		super(...arguments), this.state = { isPopoverOpen: !1 }, this.handleLinkEl = (e) => {
			this.linkEl = e, this.props.elRef && R(this.props.elRef, e);
		}, this.handleClick = (e) => {
			let { props: t, context: n } = this, { dateEnv: r, options: i } = n, { moreLinkClick: a } = i, o = Rh(t).start;
			function s(e) {
				let { def: t, instance: i, range: a } = e.eventRange, o = _c(a.start, a.instantStartMs, r), s = _c(a.end, a.instantEndMs, r);
				return {
					event: new wl(n, t, i),
					start: o.date,
					end: s.date,
					isStart: e.isStart,
					isEnd: e.isEnd
				};
			}
			typeof a == "function" && (a = a({
				date: r.toDate(o),
				allDay: !!t.allDayDate,
				allSegs: t.segs.map(s),
				hiddenSegs: t.hiddenSegs.map(s),
				jsEvent: e,
				view: n.viewApi
			})), !a || a === "popover" ? this.setState({ isPopoverOpen: !0 }) : typeof a == "string" && n.calendarApi.zoomTo(o, a);
		}, this.handlePopoverClose = () => {
			this.linkEl && this.linkEl.focus(), this.setState({ isPopoverOpen: !1 });
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r, baseId: i } = n, a = e.hiddenSegs.length, o = Rh(e), s = i + "popover-" + o.start.toISOString(), c = Lh(a, e.isNarrow, e.isMicro, e.display, e.renderProps, n), l = Rs(r.moreLinkHint, [a], c.longText);
		return D(w, { children: [!!a && D(Ph, {
			num: a,
			display: e.display,
			isNarrow: e.isNarrow,
			isMicro: e.isMicro,
			renderProps: e.renderProps,
			elRef: this.handleLinkEl,
			className: e.className,
			style: e.style,
			attrs: {
				...e.attrs,
				...ws(this.handleClick),
				title: l,
				role: "button",
				"aria-haspopup": "dialog",
				"aria-expanded": t.isPopoverOpen,
				"aria-controls": t.isPopoverOpen ? s : void 0
			},
			didMount: r.moreLinkDidMount,
			willUnmount: r.moreLinkWillUnmount
		}), t.isPopoverOpen && D(Oh, {
			id: s,
			titleId: s + "-title",
			startDate: o.start,
			endDate: o.end,
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			dateSpanProps: e.dateSpanProps,
			renderProps: e.renderProps,
			alignEl: e.alignElRef ? e.alignElRef.current : this.linkEl,
			alignParentTop: e.alignParentTop,
			forceTimed: e.forceTimed,
			onClose: this.handlePopoverClose,
			children: e.popoverContent()
		})] });
	}
};
function Ih(e) {
	return e.text;
}
function Lh(e, t, n, r, i, a) {
	let { viewApi: o, options: s, calendarApi: c } = a, l = `+${e}`, u = typeof s.moreLinkText == "function" ? s.moreLinkText.call(c, e) : `${l} ${s.moreLinkText}`;
	return {
		...i,
		num: e,
		numericText: l,
		longText: u,
		text: n || r === "column" ? l : u,
		isNarrow: t,
		view: o
	};
}
function Rh(e) {
	return e.allDayDate ? {
		start: e.allDayDate,
		end: O(e.allDayDate, 1)
	} : {
		start: Ah(e.hiddenSegs),
		end: jh(e.hiddenSegs)
	};
}
var zh = N({
	hour: "numeric",
	minute: "2-digit",
	omitZeroMinute: !0,
	meridiem: "narrow"
});
function Bh(e, t) {
	let { display: n } = t.ui;
	return n === "list-item" || n === "auto" && !t.def.allDay && e.end - e.start === 1 && e.isStart && e.isEnd;
}
var Vh = j.z1, Hh = j.z2, Uh = j.z3, Wh = j.z4, Gh = j.z5, Kh = j.z1000, qh = class extends L {
	render() {
		let { props: e } = this;
		return D(Fh, {
			display: "row",
			className: M(e.className, Wh),
			isNarrow: e.isNarrow,
			isMicro: e.isMicro,
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			allDayDate: e.allDayDate,
			segs: e.segs,
			hiddenSegs: e.hiddenSegs,
			alignElRef: e.alignElRef,
			alignParentTop: e.alignParentTop,
			dateSpanProps: e.dateSpanProps,
			renderProps: e.renderProps,
			popoverContent: () => D(w, { children: e.segs.map((t) => {
				let { eventRange: n } = t, { instanceId: r } = n.instance, i = !!(e.eventDrag && e.eventDrag.affectedInstances[r]), a = !!(e.eventResize && e.eventResize.affectedInstances[r]);
				return D("div", {
					role: "listitem",
					style: { visibility: i || a ? "hidden" : void 0 },
					children: D(tf, {
						display: Bh(t, n) ? "list-item" : "row",
						eventRange: n,
						isStart: t.isStart,
						isEnd: t.isEnd,
						isDragging: i,
						isResizing: a,
						isMirror: !1,
						isSelected: r === e.eventSelection,
						defaultTimeFormat: zh,
						defaultDisplayEventEnd: !1,
						renderProps: e.renderProps,
						...Vl(n, e.todayRange)
					})
				}, r);
			}) })
		});
	}
}, Jh = class extends Wd {
	constructor() {
		super(...arguments), this.getDateMeta = I(Yh), this.refineRenderProps = Zu(Qh), this.rootElRef = C(), this.handleBodyEl = (e) => {
			this.disconnectBodyHeight && (this.disconnectBodyHeight(), this.disconnectBodyHeight = void 0, this.headerHeight = void 0, R(this.props.headerHeightRef, null), R(this.props.mainHeightRef, null)), e && (this.props.headerHeightRef || this.props.mainHeightRef) && (this.disconnectBodyHeight = kd(e, (t, n) => {
				if (this._isUnmounting) return;
				let { props: r } = this, i = this.rootElRef.current;
				if (!i) return;
				let a = e.getBoundingClientRect(), o = i.getBoundingClientRect(), s = a.top - o.top;
				yd(this.headerHeight, s) || (this.headerHeight = s, R(r.headerHeightRef, s)), R(r.mainHeightRef, n);
			}));
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n, dateEnv: r } = t, { tableMode: i } = e, a = e.showDayNumber && Zh(e.date, e.dateProfile.currentRange, r), o = this.getDateMeta(e.date, r, e.dateProfile, e.todayRange, e.isDisabled), s = M(j.borderlessTop, j.borderlessEnd, !e.borderStart && j.borderlessStart, !(i && e.borderBottom) && j.borderlessBottom, !i && e.width == null && j.liquid, !i && j.flexCol, j.rel, j.noMargin, j.noPadding), c = i ? "td" : "div", l = i ? void 0 : { width: e.width }, u = n.navLinks, d = this.refineRenderProps({
			date: e.date,
			isMajor: e.isMajor,
			isNarrow: e.isNarrow,
			dateMeta: o,
			hasLabel: e.showDayNumber,
			hasMonthLabel: a,
			hasNavLink: u,
			renderProps: e.renderProps,
			viewApi: t.viewApi,
			dateEnv: t.dateEnv,
			monthStartFormat: n.monthStartFormat,
			dayCellFormat: n.dayCellFormat,
			businessHours: !!n.businessHours
		});
		if (o.isDisabled) return D(c, {
			role: "cell",
			"aria-disabled": !0,
			className: M(B(n.dayCellClass, d), e.className, s),
			style: l,
			children: e.fills
		});
		let f = zd(t, e.date), p = e.showDayNumber && !u;
		return D(z, {
			tag: c,
			elRef: this.rootElRef,
			className: M(e.className, s),
			attrs: {
				...e.attrs,
				role: "cell",
				...d.isToday ? { "aria-current": "date" } : {},
				"data-date": Go(e.date)
			},
			style: l,
			renderProps: d,
			generatorName: "dayCellTopContent",
			customGenerator: n.dayCellTopContent,
			defaultGenerator: Xh,
			classNameGenerator: n.dayCellClass,
			didMount: n.dayCellDidMount,
			willUnmount: n.dayCellWillUnmount,
			children: (r) => D(w, { children: [
				e.fills,
				D("div", {
					role: "presentation",
					className: M(j.rel, Wh, B(n.dayCellTopClass, d)),
					children: [p && D("div", {
						className: j.srOnly,
						children: f
					}), e.showDayNumber && D(r, {
						tag: "div",
						attrs: u ? Bd(t, e.date, void 0, f) : { "aria-hidden": !0 },
						className: B(n.dayCellTopInnerClass, d)
					})]
				}),
				D("div", {
					className: M(!i && j.flexCol, !i && (e.fgLiquidHeight ? j.liquid : j.grow), i && j.printCellContentMinHeight),
					ref: this.handleBodyEl,
					children: [D("div", {
						role: e.fgIsList ? "list" : "presentation",
						className: M(j.rel, B(n.dayCellInnerClass, d)),
						style: { minHeight: e.fgHeight },
						children: e.fg
					}), D(qh, {
						className: j.rel,
						allDayDate: e.date,
						segs: e.segs,
						hiddenSegs: e.hiddenSegs,
						alignElRef: this.rootElRef,
						alignParentTop: e.showDayNumber ? "[role=row]" : `.${j.internalView}`,
						dateSpanProps: e.dateSpanProps,
						renderProps: e.renderProps,
						dateProfile: e.dateProfile,
						eventSelection: e.eventSelection,
						eventDrag: e.eventDrag,
						eventResize: e.eventResize,
						todayRange: e.todayRange,
						isNarrow: e.isNarrow,
						isMicro: e.isMicro
					})]
				}),
				D("div", {
					role: "presentation",
					className: M(j.rel, Wh, B(n.dayCellBottomClass, d))
				})
			] })
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0;
	}
};
function Yh(e, t, n, r, i) {
	return {
		...Vd(e, t, n, r),
		isDisabled: i
	};
}
function Xh(e) {
	return e.text || D(w, { children: "\xA0" });
}
function Zh(e, t, n) {
	let { start: r, end: i } = t, a = Ua(i, -1), o = n.getYear(r), s = n.getMonth(r), c = n.getYear(a), l = n.getMonth(a);
	return (o !== c || s !== l) && (e.valueOf() === r.valueOf() || n.getDay(e) === 1 && e.valueOf() < i.valueOf());
}
function Qh(e) {
	let { date: t, dateEnv: n, hasLabel: r, hasMonthLabel: i, hasNavLink: a, businessHours: o } = e, s = [], c = "";
	return r && (s = n.formatToParts(t, i ? e.monthStartFormat : e.dayCellFormat), c = Yo(s)), {
		...e.dateMeta,
		...e.renderProps,
		text: c,
		textParts: s,
		isMajor: e.isMajor,
		isNarrow: e.isNarrow,
		inPopover: !1,
		hasNavLink: a,
		get weekdayText() {
			return Id(s);
		},
		get dayNumberText() {
			return Ld(s);
		},
		get monthText() {
			return Rd(s);
		},
		options: { businessHours: o },
		view: e.viewApi
	};
}
var $h = class extends T {
	constructor() {
		super(...arguments), this.rootElRef = C(), this._isUnmounting = !1;
	}
	render() {
		let { props: e } = this;
		return D("div", {
			...e.attrs,
			className: e.className,
			style: e.style,
			ref: this.rootElRef,
			children: e.children
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let e = this.rootElRef.current;
		this.disconnectHeight = jd(e, (e) => {
			this._isUnmounting || (this.height = e, R(this.props.heightRef, e));
		});
	}
	componentDidUpdate(e) {
		let { heightRef: t } = this.props;
		e.heightRef !== t && (R(e.heightRef, null), this.height != null && R(t, this.height));
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectHeight?.(), R(this.props.heightRef, null);
	}
};
function eg(e, t) {
	return e.start < t.end && t.start < e.end;
}
function tg(e, t) {
	let n = Math.max(e.start, t.start), r = Math.min(e.end, t.end);
	return n < r ? {
		start: n,
		end: r
	} : null;
}
function ng(e) {
	return e.end - e.start;
}
function rg(e, t) {
	let n = sg(e, t.start);
	n > 0 && n--;
	let r = [];
	for (; n < e.length; n++) {
		let i = e[n];
		if (i.start >= t.end) break;
		eg(i, t) && r.push(i);
	}
	return r;
}
function ig(e, t) {
	let n = [], r = e.start;
	for (let i of t) if (!(i.end <= r) && (i.start >= e.end || (i.start > r && n.push({
		start: r,
		end: Math.min(i.start, e.end)
	}), r = Math.max(r, i.end), r >= e.end))) break;
	return r < e.end && n.push({
		start: r,
		end: e.end
	}), n;
}
function ag(e, t) {
	let n = [], r = { ...t }, i = !1;
	for (let t of e) t.end <= r.start ? n.push(t) : r.end <= t.start ? (i ||= (n.push(r), !0), n.push(t)) : r = {
		start: Math.min(r.start, t.start),
		end: Math.max(r.end, t.end)
	};
	i || n.push(r), e.splice(0, e.length, ...n);
}
function og(e, t) {
	e.splice(sg(e, t.start), 0, t);
}
function sg(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = n + r >>> 1;
		e[i].start < t ? n = i + 1 : r = i;
	}
	return n;
}
var cg = 1e-6, lg = 20;
function ug(e, t, n, r, i, a) {
	let { segLevels: o, excludedSegs: s } = fg(e, t, r), c = Sg(mg(o), hg(s), t, n, i), l = gg(c.sliceLevels, a);
	return {
		renderSlices: nc(c.sliceLevels),
		hiddenSlices: c.hiddenSlices,
		sliceLevels: c.sliceLevels,
		sliceCoords: l.sliceCoords,
		isSettled: l.isSettled
	};
}
function dg(e, t, n, r, i, a, o) {
	let { segLevels: s, excludedSegs: c } = fg(e, t, a), l = mg(s), u = hg(c), d = gg(l, r, i);
	if (i == null || o == null) return {
		renderSlices: nc(l),
		hiddenSlices: u,
		sliceLevels: l,
		sliceCoords: d.sliceCoords,
		isSettled: d.isSettled
	};
	let f = d.excludedSlices.concat(u);
	f.sort(Fg);
	let p = Sg(d.placementSliceLevels, f, t, n, +!!n, !0, !0), m = gg(p.sliceLevels, r), h = Math.max(0, i - o), g = xg(p.sliceLevels, p.hiddenSlices, m.sliceCoords, r, i, h), _ = nc(l).concat(p.addedSlices), v = d.isSettled && m.isSettled;
	return {
		renderSlices: _,
		hiddenSlices: g.concat(p.hiddenSlices),
		sliceLevels: p.sliceLevels,
		sliceCoords: m.sliceCoords,
		isSettled: v
	};
}
function fg(e, t, n = Infinity) {
	let r = [], i = [];
	for (let a of e) {
		let e = pg(r, a, t);
		if (e >= n) i.push(a);
		else {
			for (; r.length <= e;) r.push([]);
			og(r[e], a);
		}
	}
	return {
		segLevels: r,
		excludedSegs: i
	};
}
function pg(e, t, n) {
	let r = 0;
	if (n) for (let n = 0; n < e.length; n++) rg(e[n], t).length && (r = n + 1);
	else for (; r < e.length && rg(e[r], t).length;) r++;
	return r;
}
function mg(e) {
	return e.map((e) => hg(e));
}
function hg(e) {
	return e.map(Hg);
}
function gg(e, t, n = Infinity) {
	let r = [], i = /* @__PURE__ */ new Map(), a = !0, o = [];
	for (let s = 0; s < e.length; s++) for (let c of e[s]) {
		let e = t.get(Ng(c));
		if (e === void 0) {
			a = !1;
			continue;
		}
		let { bottom: s, levelIndex: l } = _g(r, c, i, t);
		if (s + e <= n + cg) {
			for (; r.length <= l;) r.push([]);
			og(r[l], c), i.set(Ng(c), s);
		} else o.push(c);
	}
	return {
		placementSliceLevels: r,
		sliceCoords: i,
		isSettled: a,
		excludedSlices: o
	};
}
function _g(e, t, n, r) {
	let i = 0, a = 0;
	for (let o = 0; o < e.length; o++) {
		let s = e[o];
		for (let e of rg(s, t)) {
			let t = Ng(e), s = n.get(t), c = r.get(t);
			s !== void 0 && c !== void 0 && (i = Math.max(i, s + c), a = o + 1);
		}
	}
	return {
		bottom: i,
		levelIndex: a
	};
}
function vg(e, t, n, r) {
	return _g(e, t, n, r).bottom;
}
function yg(e, t, n) {
	let r = gg(e.map((e) => e.filter((e) => n.has(Ng(e)))), t).sliceCoords;
	for (let [e, t] of r) n.set(e, t);
}
function bg(e, t, n) {
	let r = Ng(e), i = t.get(r), a = n.get(r);
	return i === void 0 || a === void 0 ? void 0 : i + a;
}
function xg(e, t, n, r, i, a) {
	let o = [], s = [], c = [], l = 0;
	for (let e of t) jg(o, e);
	for (d(); l < c.length;) {
		let t = c[l++], i = bg(t, n, r);
		if (i === void 0 || !u(t, i)) continue;
		n.delete(Ng(t)), s.push(t);
		let a = jg(o, t);
		yg(e, r, n);
		for (let e of a) d(e);
	}
	return s;
	function u(e, t) {
		return t > i + cg || t > a + cg && rg(o, e).length > 0;
	}
	function d(t) {
		for (let i of e) {
			let e = t ? rg(i, t) : i;
			for (let t of e) {
				let e = bg(t, n, r);
				e !== void 0 && u(t, e) && c.push(t);
			}
		}
	}
}
function Sg(e, t, n, r, i, a = !1, o = !1) {
	let s = /* @__PURE__ */ new Set(), c = [], l = [], u = [], d = {
		levels: e,
		moreLinkReservations: u,
		eventOrderStrict: n
	}, f = [];
	for (g(t, a); f.length;) {
		let e = f.pop();
		e.type === "fire" ? p(e.slice, e.requiresSlicing) : h(e.span);
	}
	return {
		sliceLevels: e,
		hiddenSlices: c,
		addedSlices: [...s]
	};
	function p(t, n) {
		if (!n) {
			let n = Cg(t, d);
			if (n !== null) {
				og(e[n], t), s.add(t);
				return;
			}
		}
		if (!r) {
			m(t);
			return;
		}
		let i = Dg(t, d, n);
		if (!i) {
			m(t);
			return;
		}
		for (let t of i.slices) og(e[i.levelIndex], t), s.add(t);
		for (let e of Bg(t, i.slices)) m(e);
	}
	function m(e) {
		c.push(e);
		let t = jg(l, e);
		if (i) for (let e = t.length - 1; e >= 0; e--) f.push({
			type: "moreLink",
			span: t[e]
		});
	}
	function h(t) {
		if (!e.length) return;
		let n = e.length - 1, i = rg(e[n], t);
		if (o) for (; !i.length && n > 0;) n--, i = rg(e[n], t);
		og(u, {
			...t,
			levelIndex: n
		});
		let a = e[n];
		for (let e of i) a.splice(a.indexOf(e), 1), s.delete(e), r ? (m(Vg(e, t)), g(Bg(e, [t]), !1)) : m(e);
	}
	function g(e, t) {
		for (let n = e.length - 1; n >= 0; n--) f.push({
			type: "fire",
			slice: e[n],
			requiresSlicing: t
		});
	}
}
function Cg(e, t) {
	let n = wg(e, t);
	for (let r = n.min; r < n.maxExclusive; r++) if (!rg(t.levels[r], e).length) return r;
	return null;
}
function wg(e, t) {
	let { levels: n } = t, r = 0, i = n.length;
	for (let n of rg(t.moreLinkReservations, e)) i = Math.min(i, n.levelIndex);
	if (t.eventOrderStrict) for (let t = 0; t < n.length; t++) for (let a of rg(n[t], e)) a.sourceSeg.orderIndex < e.sourceSeg.orderIndex ? r = Math.max(r, t + 1) : a.sourceSeg.orderIndex > e.sourceSeg.orderIndex && (i = Math.min(i, t));
	return {
		min: r,
		maxExclusive: i
	};
}
var Tg = 3, Eg = .15;
function Dg(e, t, n) {
	let r = null, i = ng(e);
	for (let a = 0; a < t.levels.length; a++) {
		let o = rg(t.levels[a], e);
		for (let e of t.moreLinkReservations) a >= e.levelIndex && ag(o, e);
		let s = Bg(e, o).filter((e) => Og(e, a, t)).sort((e, t) => ng(t) - ng(e) || e.start - t.start), c = 0;
		for (let e = 1; e <= Math.min(Tg, s.length) && (c += ng(s[e - 1]), !(n && c >= i - cg)); e++) {
			let t = {
				levelIndex: a,
				slices: s.slice(0, e),
				score: c / i - Eg * (e - 1)
			};
			kg(t, r) && (r = t);
		}
	}
	return r && r.slices.sort(Fg), r;
}
function Og(e, t, n) {
	let r = wg(e, n);
	return t >= r.min && t < r.maxExclusive;
}
function kg(e, t) {
	return !t || e.score > t.score ? !0 : e.score < t.score ? !1 : e.slices.length === t.slices.length ? e.levelIndex < t.levelIndex : e.slices.length < t.slices.length;
}
function Ag(e) {
	let t = [];
	for (let n of e) jg(t, n);
	return Mg(t);
}
function jg(e, t) {
	let n = ig(t, e), r = [], i = [t], a = t.start, o = t.end;
	for (let n of e) tg(n, t) ? (i.push(...n.hiddenSlices), a = Math.min(a, n.start), o = Math.max(o, n.end)) : r.push(n);
	return i.sort(Fg), og(r, {
		start: a,
		end: o,
		hiddenSlices: i
	}), e.splice(0, e.length, ...r), n;
}
function Mg(e) {
	return e.map((e) => {
		let t = zg(e.hiddenSlices);
		return {
			key: Ng(t[0]),
			start: e.start,
			end: e.end,
			hiddenSlices: t
		};
	});
}
function Ng(e) {
	return Pg(e) ? `${e.sourceSeg.key}:${e.start}:slice` : e.sourceSeg.key;
}
function Pg(e) {
	return e.start !== e.sourceSeg.start || e.end !== e.sourceSeg.end;
}
function Fg(e, t) {
	return e.sourceSeg.orderIndex - t.sourceSeg.orderIndex || e.start - t.start || t.end - e.end;
}
function Ig(e) {
	return [...e].sort(Fg);
}
function Lg(e, t) {
	return e.start - t.start || e.sourceSeg.orderIndex - t.sourceSeg.orderIndex;
}
function Rg(e) {
	return [...e].sort(Lg);
}
function zg(e) {
	let t = [];
	for (let n of e) {
		let e = t[t.length - 1];
		e && e.sourceSeg === n.sourceSeg ? t[t.length - 1] = Ug(Hg(e.sourceSeg), e.start, Math.max(e.end, n.end)) : t.push(n);
	}
	return t;
}
function Bg(e, t) {
	return ig(e, t).map((t) => Ug(e, t.start, t.end));
}
function Vg(e, t) {
	let n = tg(e, t);
	return n ? Ug(e, n.start, n.end) : null;
}
function Hg(e) {
	return {
		sourceSeg: e,
		start: e.start,
		end: e.end,
		isStart: e.isStart,
		isEnd: e.isEnd
	};
}
function Ug(e, t, n) {
	return {
		sourceSeg: e.sourceSeg,
		start: t,
		end: n,
		isStart: e.isStart && t === e.start,
		isEnd: e.isEnd && n === e.end
	};
}
var Wg = t_(150, 20);
function Gg(e) {
	return e.map((e, t) => ({
		...e,
		key: yh(e),
		orderIndex: t
	}));
}
function Kg(e, t, n, r, i, a, o) {
	let s = Gg(e);
	return $g(s, ug(s, r, i, t, n, o), o, a);
}
function qg(e, t, n, r, i, a, o, s) {
	let c = Gg(e);
	return $g(c, dg(c, t, n, s, i, o, a), s, r);
}
function Jg(e, t, n) {
	return {
		segs: rc(e, (e) => Yg(e, n) ?? []),
		hiddenSegs: rc(t, (e) => Yg(e.sourceSeg, n, e) ?? [])
	};
}
function Yg(e, t, n = e) {
	if (n.start >= t + 1 || t >= n.end) return null;
	let { key: r, orderIndex: i, ...a } = e;
	return {
		...a,
		start: t,
		end: t + 1,
		isStart: a.isStart && e.start === t,
		isEnd: a.isEnd && e.end - 1 === t
	};
}
function Xg(e, t) {
	return e === !0 || t === !0 ? "auto" : typeof e == "number" ? "maxEvents" : typeof t == "number" ? "maxEventRows" : "unlimited";
}
function Zg(e, t, n, r) {
	switch (e) {
		case "auto": return r;
		case "maxEvents": return t;
		case "maxEventRows": return n;
		default: return Infinity;
	}
}
function Qg(e) {
	return +(e === "maxEventRows");
}
function $g(e, t, n, r) {
	let { hiddenSlices: i, renderSlices: a, sliceCoords: o } = t, s = Ig(i), c = e_(a, r), l = Array.from({ length: r }, (t, n) => ({
		renderSlices: c[n],
		contentHeight: 0,
		...Jg(e, s, n)
	}));
	for (let e of a) {
		let t = Ng(e), r = o.get(t);
		if (r === void 0) continue;
		let i = r + n.get(t);
		for (let t = e.start; t < e.end; t += 1) l[t].contentHeight = Math.max(l[t].contentHeight, i);
	}
	return {
		columns: l,
		sliceCoords: o
	};
}
function e_(e, t) {
	let n = Array.from({ length: t }, () => []);
	for (let t of e) n[t.start].push(t);
	for (let e of n) e.sort(Fg);
	return n;
}
function t_(e, t) {
	return Math.max(1, Math.ceil(e / t));
}
var n_ = 200;
function r_(e, t, n) {
	let { segLevels: r, excludedSegs: i } = fg(e, t, n_), a = Sg(mg(r), hg(i), t, n, 0);
	return {
		sliceLevels: a.sliceLevels,
		hiddenSlices: a.hiddenSlices
	};
}
function i_(e, t, n = (e) => e.sourceSeg.key, r = 20) {
	let i = [];
	for (let a = 0; a < e.length; a++) {
		let o = e[a];
		if (!o?.length) continue;
		let s = 0, c = o.map((e) => (s = Math.max(s, t.get(n(e)) ?? r), e));
		i.push({
			levelIndex: a,
			slices: c,
			thickness: s
		});
	}
	return i;
}
function a_(e, t) {
	return e.length ? {
		moreLinkGroups: e,
		thickness: Math.max(...e.map((e) => t.get(e.key) ?? lg))
	} : null;
}
function o_(e, t, n, r) {
	let i = Gg(e), a = r_(i, t, n);
	return {
		...a,
		hiddenSlices: Ig(a.hiddenSlices),
		sourceSegs: i,
		columnCount: r
	};
}
function s_(e, t) {
	let n = Array.from({ length: e.columnCount }, () => []);
	for (let r of i_(e.sliceLevels, t, c_)) {
		let t = Array(e.columnCount).fill(null);
		for (let e of r.slices) t[e.start] = e;
		for (let i = 0; i < e.columnCount; i++) n[i].push({
			levelIndex: r.levelIndex,
			thickness: r.thickness,
			slice: t[i]
		});
	}
	return n;
}
function c_(e) {
	return `${e.sourceSeg.key}:${e.start}:${e.end}`;
}
var l_ = N({ week: "narrow" }), u_ = class extends L {
	constructor() {
		super(...arguments), this.headerHeightRefMap = new H(() => {
			V(this.handleSegPositioning);
		}), this.mainHeightRefMap = new H(() => {
			(this.props.dayMaxEvents === !0 || this.props.dayMaxEventRows === !0) && V(this.handleSegPositioning);
		}), this.sliceHeightRefMap = new H(() => {
			V(this.handleSegPositioning);
		}), this.handlePrintSegHeightChange = () => {
			V(this.handlePrintSegHeights);
		}, this.printSegHeightRefMap = new H(this.handlePrintSegHeightChange), this.buildWeekNumberRenderProps = I(d_), this.buildPrintPlan = I(o_), this.sortEventSegs = I(Fl), this.levelCapacity = Wg, this.handleRootEl = (e) => {
			this.disconnectHeight?.(), this.disconnectHeight = void 0, R(this.props.rootElRef, e), e && (this.disconnectHeight = jd(e, (e) => {
				R(this.props.heightRef, e);
			}));
		}, this.handleSegPositioning = () => {
			this._isUnmounting || this.props.forPrint || (this.updateAutoPlacementRatchets(), this.forceUpdate());
		}, this.handlePrintSegHeights = () => {
			!this._isUnmounting && this.props.forPrint && this.forceUpdate();
		};
	}
	render() {
		let { props: e, context: t, headerHeightRefMap: n, mainHeightRefMap: r } = this, { cells: i, tableMode: a } = e, { options: o } = t, s = e.cells[0].date, c = this.sortEventSegs(e.fgEventSegs, o.eventOrder), l = e.dayMaxEvents === !0 || e.dayMaxEventRows === !0, u = null, d = null, f = null, p = /* @__PURE__ */ new Map(), m = [], h = [];
		if (e.forPrint) u = this.buildPrintPlan(c, o.eventOrderStrict, o.eventSlicing, i.length), d = s_(u, this.printSegHeightRefMap.current);
		else {
			let t = Xg(e.dayMaxEvents, e.dayMaxEventRows), [r, a] = this.computeFgDims(), s = t === "auto" ? qg(c, o.eventOrderStrict, o.eventSlicing, i.length, a, e.moreLinkHeight, this.levelCapacity, this.sliceHeightRefMap.current) : Kg(c, Zg(t, e.dayMaxEvents, e.dayMaxEventRows, Infinity), Qg(t), o.eventOrderStrict, o.eventSlicing, i.length, this.sliceHeightRefMap.current);
			if (f = s.columns, p = s.sliceCoords, r != null) for (let e = 0; e < i.length; e++) {
				let t = n.current.get(i[e].key), a = t == null ? void 0 : r - t;
				m.push(a), h.push(a == null ? void 0 : f[e].contentHeight + a);
			}
		}
		let g = this.getHighlightSegs(), _ = o.navLinks, v = zd(t, s, "week"), y = this.buildWeekNumberRenderProps(s, t, e.cellIsNarrow, _), b = i.map(() => []), x = e.showWeekNumbers && !e.cellIsMicro ? D(z, {
			tag: "div",
			attrs: {
				..._ ? Bd(t, s, "week", v, !1) : {},
				role: void 0,
				"aria-hidden": !0
			},
			className: Gh,
			renderProps: y,
			generatorName: "inlineWeekNumberContent",
			customGenerator: o.inlineWeekNumberContent,
			defaultGenerator: cd,
			classNameGenerator: o.inlineWeekNumberClass,
			didMount: o.inlineWeekNumberDidMount,
			willUnmount: o.inlineWeekNumberWillUnmount
		}) : null;
		return a && x && b[0].push(D("div", {
			className: M(j.fillY, j.start0, j.pointerEventsNone),
			style: { width: this.computeSpanWidth(0, i.length) },
			children: x
		}, "week-number")), this.appendFillSegs(b, e.businessHourSegs, "non-business", Vh), this.appendFillSegs(b, e.bgEventSegs, "bg-event", Hh), this.appendFillSegs(b, g, "highlight", Uh), D(a ? "tr" : "div", {
			role: e.role,
			"aria-label": e.role === "row" ? v : void 0,
			className: M(o.dayRowClass, e.className, a && j.borderless, !a && j.flexRow, !a && j.rel, !a && j.borderlessX, !a && j.borderlessTop, !a && !e.borderBottom && j.borderlessBottom, j.isolate),
			style: { flexBasis: a ? void 0 : e.basis },
			ref: this.handleRootEl,
			children: [!a && x, e.cells.map((t, i) => {
				let o = u ? Jg(u.sourceSegs, u.hiddenSlices, i) : null, s = u ? null : f[i].renderSlices, c;
				return c = u ? this.renderPrintBandSlots(d[i]) : [...this.renderLevelFgSegs(m[i], s, p), ...this.renderMirrorFgSegs(i, m[i], p)], D(Jh, {
					dateProfile: e.dateProfile,
					todayRange: e.todayRange,
					date: t.date,
					isMajor: t.isMajor,
					isDisabled: t.isDisabled,
					showDayNumber: e.showDayNumbers,
					isNarrow: e.cellIsNarrow,
					isMicro: e.cellIsMicro,
					borderStart: !!i,
					borderBottom: e.borderBottom,
					tableMode: a,
					fills: b[i],
					segs: o ? o.segs : f[i].segs,
					hiddenSegs: o ? o.hiddenSegs : f[i].hiddenSegs,
					fgLiquidHeight: !u && l,
					fg: c,
					fgIsList: !!s?.length,
					eventDrag: u ? null : e.eventDrag,
					eventResize: u ? null : e.eventResize,
					eventSelection: e.eventSelection,
					renderProps: t.renderProps,
					dateSpanProps: t.dateSpanProps,
					attrs: t.attrs,
					className: t.className,
					fgHeight: u ? void 0 : h[i],
					width: e.colWidth,
					headerHeightRef: u ? void 0 : n.createRef(t.key),
					mainHeightRef: u ? void 0 : r.createRef(t.key)
				}, t.key);
			})]
		});
	}
	renderMirrorFgSegs(e, t, n) {
		let { props: r } = this, { eventSelection: i } = r, a = [];
		for (let o of this.getMirrorSegs()) {
			if (o.start !== e) continue;
			let s = yh(o), { eventRange: c } = o, { instanceId: l } = c.instance, u = t == null ? void 0 : t + (n.get(s) ?? 0), d = !!(r.eventDrag && r.eventDrag.affectedInstances[l]), f = !!(r.eventResize && r.eventResize.affectedInstances[l]), p = l === i;
			a.push(D($h, {
				attrs: { "aria-hidden": !0 },
				className: M(j.abs, j.start0, Kh),
				style: {
					top: u,
					width: this.computeSpanWidth(o.start, o.end)
				},
				heightRef: null,
				children: this.renderEventContent(o, c, {
					isDragging: d,
					isResizing: f,
					isMirror: !0,
					isSelected: p
				})
			}, `mirror:${s}`));
		}
		return a;
	}
	renderLevelFgSegs(e, t, n) {
		let { props: r } = this, { eventSelection: i } = r, a = [];
		for (let o of t) {
			let t = Ng(o), s = n.get(t), { eventRange: c } = o.sourceSeg, { instanceId: l } = c.instance, u = e != null && s != null ? e + s : void 0, d = !!(r.eventDrag && r.eventDrag.affectedInstances[l]), f = !!(r.eventResize && r.eventResize.affectedInstances[l]), p = d || f || u == null, m = l === i;
			a.push(D($h, {
				attrs: { role: "listitem" },
				className: M(j.abs, j.start0, m ? Kh : Gh),
				style: {
					visibility: p ? "hidden" : void 0,
					top: u,
					width: this.computeSpanWidth(o.start, o.end)
				},
				heightRef: this.sliceHeightRefMap.createRef(t),
				children: this.renderEventContent(o, c, {
					isDragging: d,
					isResizing: f,
					isSelected: m
				})
			}, t));
		}
		return a;
	}
	renderEventContent(e, t, n) {
		let { props: r } = this, i = Bh(e, t), a = r.cells[e.start]?.renderProps;
		return D(tf, {
			display: i ? "list-item" : "row",
			eventRange: t,
			isStart: e.isStart,
			isEnd: e.isEnd,
			isDragging: !!n.isDragging,
			isResizing: !!n.isResizing,
			isMirror: !!n.isMirror,
			isSelected: !!n.isSelected,
			isNarrow: r.cellIsNarrow,
			defaultTimeFormat: zh,
			defaultDisplayEventEnd: r.cells.length === 1,
			disableResizing: i,
			forcedTimeText: r.cellIsMicro ? "" : void 0,
			renderProps: a,
			...Vl(t, r.todayRange)
		});
	}
	renderPrintBandSlots(e) {
		let { printSegHeightRefMap: t } = this;
		return e.map((e) => {
			let { slice: n } = e, r = null;
			if (n) {
				let e = c_(n);
				r = D($h, {
					className: M(j.rel, j.flowRoot, Gh),
					style: { width: this.computeSpanWidth(n.start, n.end) },
					heightRef: t.createRef(e),
					children: this.renderEventContent(n, n.sourceSeg.eventRange, {})
				}, e);
			}
			return D("div", {
				className: j.breakInsideAvoid,
				style: { height: e.thickness },
				children: r
			}, e.levelIndex);
		});
	}
	computeSpanWidth(e, t) {
		let n = t - e, r = `${n * 100}%`, i = this.props.tableMode && e === 0 ? 0 : Math.max(0, n - 1) * Th;
		return i ? `calc(${r} + ${i}px)` : r;
	}
	appendFillSegs(e, t, n, r) {
		let { props: i, context: a } = this, { todayRange: o } = i;
		for (let s of t) e[s.start].push(D("div", {
			"aria-hidden": !0,
			className: M(j.fillY, j.start0, r),
			style: { width: this.computeSpanWidth(s.start, s.end) },
			children: n === "bg-event" ? D(Sh, {
				eventRange: s.eventRange,
				isStart: s.isStart,
				isEnd: s.isEnd,
				isNarrow: i.cellIsNarrow,
				isVertical: !1,
				renderProps: i.cells[s.start]?.renderProps,
				...Vl(s.eventRange, o)
			}) : wh(n, a.options)
		}, `${n}:${Hl(s.eventRange)}:${s.start}:${s.end}`));
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentDidUpdate(e) {
		e.forPrint && !this.props.forPrint && (this.printSegHeightRefMap = new H(this.handlePrintSegHeightChange));
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectHeight?.(), R(this.props.heightRef, null);
	}
	computeFgDims() {
		let { cells: e } = this.props, t = this.headerHeightRefMap.current, n = this.mainHeightRefMap.current, r, i, a = !0;
		for (let o of e) {
			if (o.isDisabled) continue;
			let e = t.get(o.key), s = n.get(o.key);
			if ((e == null || s == null) && (a = !1), e != null && ((r === void 0 || e > r) && (r = e), s != null)) {
				let t = e + s;
				(i === void 0 || t < i) && (i = t);
			}
		}
		return [r, a && i != null && r != null ? i - r : void 0];
	}
	updateAutoPlacementRatchets() {
		if (Xg(this.props.dayMaxEvents, this.props.dayMaxEventRows) !== "auto") return;
		let [, e] = this.computeFgDims();
		if (e != null) {
			let t = Math.min(...this.sliceHeightRefMap.current.values());
			this.levelCapacity = Math.max(this.levelCapacity, t_(e, t));
		}
	}
	getMirrorSegs() {
		let { props: e } = this;
		return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
	}
	getHighlightSegs() {
		let { props: e } = this;
		return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
	}
};
function d_(e, t, n, r) {
	let { dateEnv: i, options: a } = t, o = i.computeWeekNumber(e), s = i.formatToParts(e, a.weekNumberFormat || l_);
	return {
		num: o,
		text: Yo(s),
		textParts: s,
		date: i.toDate(e),
		isNarrow: n,
		hasNavLink: r
	};
}
var f_ = class {
	constructor(e, t) {
		let n = e.start, { end: r } = e, i = [], a = [], o = -1;
		for (; n < r;) t.isHiddenDay(n) ? i.push({
			kind: "hidden",
			previousIndex: o,
			nextIndex: o + 1
		}) : (o += 1, i.push({
			kind: "visible",
			index: o
		}), a.push(n)), n = O(n, 1);
		this.rangeStart = e.start, this.dates = a, this.entries = i, this.cnt = a.length;
	}
	sliceRange(e) {
		let t = this.getDateIndex(e.start), n = this.getDateIndex(O(e.end, -1)), r = p_(t), i = m_(n), a = Math.max(0, r), o = Math.min(this.cnt - 1, i);
		return a <= o ? {
			start: a,
			end: o + 1,
			isStart: t.kind === "visible" && r === a,
			isEnd: n.kind === "visible" && i === o
		} : null;
	}
	getDateIndex(e) {
		let t = Math.floor(Ga(this.rangeStart, e));
		return t < 0 ? {
			kind: "before",
			index: -1
		} : t >= this.entries.length ? {
			kind: "after",
			index: this.cnt
		} : this.entries[t];
	}
};
function p_(e) {
	return e.kind === "hidden" ? e.nextIndex : e.index;
}
function m_(e) {
	return e.kind === "hidden" ? e.previousIndex : e.index;
}
function h_(e, t, n) {
	let r = new f_(e.renderRange, t), i = /year|month|week/.test(e.currentRangeUnit), a = !i && af(e, n);
	return new ch(r, i, n, a === "day" ? void 0 : a, e.activeRange);
}
function g_(e, t, n) {
	return n == null ? [void 0, void 0] : n / e < t ? [t * e, t] : [n, void 0];
}
function __(e, t, n) {
	let r = 0;
	for (let i of t) {
		let t = i[0].key, a = i[0].date, o = i[i.length - 1].date;
		if (e >= a && e <= o) return r;
		let s = n.get(t);
		if (s == null) return;
		r += s;
	}
	return r;
}
function v_(e, t, n, r, i) {
	let a = n ?? t / r, o = Math.floor(e / a), s = i ? r - o - 1 : o, c = o * a;
	return {
		col: s,
		left: c,
		right: c + a
	};
}
function y_(e, t, n) {
	let r = 0, i = 0, a = 0;
	for (let o of t) {
		let t = o[0].key;
		if (i = a, a = i + n.get(t), e < a) break;
		r++;
	}
	return {
		row: r,
		top: i,
		bottom: a
	};
}
function b_(e, t) {
	return e.querySelectorAll("[role=row]")[t];
}
function x_(e, t) {
	return e.querySelectorAll("[role=cell]")[t];
}
var S_ = N({ weekday: "narrow" });
function C_(e, t, n) {
	return e || w_(t, n);
}
function w_(e, t) {
	return N(e ? t > 1 ? {
		weekday: "short",
		weekdayJustify: "start",
		day: "numeric",
		omitCommas: !0,
		omitTrailing: !0
	} : {
		weekday: "long",
		weekdayJustify: "start",
		day: "numeric",
		omitCommas: !0,
		omitTrailing: !0
	} : { weekday: "short" });
}
var T_ = class extends Wd {
	constructor() {
		super(...arguments), this.state = {}, this.splitBusinessHourSegs = I(bh), this.splitBgEventSegs = I(D_), this.splitFgEventSegs = I(bh), this.splitDateSelectionSegs = I(bh), this.splitEventDrag = I(xh), this.splitEventResize = I(xh), this.rowHeightRefMap = new H((e, t) => {
			let { rowHeightRefMap: n } = this.props;
			n && n.handleValue(e, t);
		}), this.handleMoreLinkEl = (e) => {
			this.disconnectMoreLinkHeight?.(), this.disconnectMoreLinkHeight = void 0, e && (this.disconnectMoreLinkHeight = jd(e, (e) => {
				this._isUnmounting || this.setState({ moreLinkHeight: e });
			}));
		}, this.handleRootEl = (e) => {
			this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
				el: e,
				isHitComboAllowed: this.props.isHitComboAllowed
			}) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e, state: t, context: n, rowHeightRefMap: r } = this, { options: i } = n, { cellRows: a, tableMode: o } = e, s = a.length, c = a[0]?.[0]?.key || "", l = this.splitFgEventSegs(e.fgEventSegs, s), u = this.splitBgEventSegs(e.bgEventSegs, s), d = this.splitBusinessHourSegs(e.businessHourSegs, s), f = this.splitDateSelectionSegs(e.dateSelectionSegs, s), p = this.splitEventDrag(e.eventDrag, s), m = this.splitEventResize(e.eventResize, s), h = ld(i), g = !e.forPrint && !h, _ = O_(e.visibleWidth, s, h, i), v = !e.forPrint && Xg(e.dayMaxEvents, e.dayMaxEventRows) === "auto";
		return D(w, { children: [D(o ? "tbody" : "div", {
			role: "rowgroup",
			className: M(e.className, !o && !e.forPrint && j.flexCol),
			style: o ? void 0 : { width: e.width },
			ref: this.handleRootEl,
			children: a.map((n, a) => D(u_, {
				role: "row",
				dateProfile: e.dateProfile,
				todayRange: e.todayRange,
				cells: n,
				cellIsNarrow: e.cellIsNarrow,
				cellIsMicro: e.cellIsMicro,
				showDayNumbers: s > 1,
				showWeekNumbers: s > 1 && i.weekNumbers,
				forPrint: e.forPrint,
				tableMode: o,
				borderBottom: a < s - 1,
				className: g ? j.grow : void 0,
				fgEventSegs: l[a],
				bgEventSegs: u[a],
				businessHourSegs: d[a],
				dateSelectionSegs: f[a],
				eventSelection: e.eventSelection,
				eventDrag: p[a],
				eventResize: m[a],
				dayMaxEvents: e.dayMaxEvents,
				dayMaxEventRows: e.dayMaxEventRows,
				colWidth: e.colWidth,
				basis: _,
				moreLinkHeight: t.moreLinkHeight,
				heightRef: r.createRef(n[0].key)
			}, c + ":" + n[0].key))
		}), v && D(Ph, {
			num: 1,
			display: "row",
			isNarrow: e.cellIsNarrow,
			isMicro: e.cellIsMicro,
			elRef: this.handleMoreLinkEl,
			className: j.offscreen,
			attrs: { "aria-hidden": !0 }
		})] });
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectMoreLinkHeight?.();
	}
	queryHit(e, t, n, r) {
		let { props: i } = this, a = i.cellRows[0].length, { col: o, left: s, right: c } = v_(t, r, i.colWidth, a, e), { row: l, top: u, bottom: d } = y_(n, i.cellRows, this.rowHeightRefMap.current), f = i.cellRows[l][o];
		if (f.isInert) return null;
		let p = f.date, m = O(p, 1);
		return {
			dateProfile: i.dateProfile,
			dateSpan: {
				range: {
					start: p,
					end: m
				},
				allDay: !0,
				...f.dateSpanProps
			},
			getDayEl: () => x_(b_(this.rootEl, l), o),
			rect: {
				left: s,
				right: c,
				top: u,
				bottom: d
			},
			layer: 0
		};
	}
};
function E_(e) {
	return e.eventRange.def.allDay;
}
function D_(e, t) {
	return bh(e.filter(E_), t);
}
function O_(e, t, n, r) {
	if (e != null) {
		let i = e / r.aspectRatio / 6;
		return t > 6 || n ? i : 0;
	}
	return 0;
}
var k_ = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.buildDayHeaderText = I(A_), this.handleInnerEl = (e) => {
			this.disconnectSize &&= (this.disconnectSize(), void 0), e ? this.disconnectSize = kd(e, (e, t) => {
				this._isUnmounting || (R(this.props.innerHeightRef, t), this.setState({ innerWidth: e }));
			}) : R(this.props.innerHeightRef, null);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { renderConfig: r, dataConfig: i, tableMode: a } = e, o = i.colSpan || 1, s = e.colWidth == null ? void 0 : e.colWidth * o, c = !a && s == null, l = c && o > 1, u = a ? void 0 : l ? {
			flexGrow: o,
			flexBasis: (o - 1) * Th + (e.borderStart ? Th : 0),
			minWidth: 0
		} : { width: s }, d = a ? "th" : "div", f = M(i.className, j.noMargin, j.noPadding, !a && j.flexCol, j.borderlessTop, j.borderlessEnd, !e.borderStart && j.borderlessStart, !(a && e.borderBottom) && j.borderlessBottom, c && !l && j.liquid);
		if (i.blank) return D(d, {
			role: "cell",
			"aria-colspan": i.colSpan,
			colSpan: a ? o : void 0,
			...i.attrs,
			className: M(f, B(i.blank.classNameGenerator, {
				...i.renderProps,
				isNarrow: e.cellIsNarrow
			})),
			style: u
		});
		let p = i.renderProps.isDisabled, m = r.dayHeaderFormat ? this.buildDayHeaderRenderProps(i.renderProps, e.cellIsNarrow, e.rowLevel, e.cellIsMicro, i.dateMarker, r.dayHeaderFormat, !!r.datesRepDistinctDays, n.dateEnv) : {
			...i.renderProps,
			isNarrow: e.cellIsNarrow,
			level: e.rowLevel
		}, h = r.align, g = typeof h == "function" ? h({
			level: e.rowLevel,
			inPopover: i.renderProps.inPopover,
			isNarrow: e.cellIsNarrow
		}) : h, _ = r.sticky, v = !a && e.rowLevel > 0 && _ !== !1 && (g !== "center" || s != null && e.viewportWidth != null && s > e.viewportWidth * .75), y;
		v && (g === "center" ? t.innerWidth != null && (y = `calc(50% - ${t.innerWidth / 2}px)`) : y = typeof _ == "number" || typeof _ == "string" ? _ : 0);
		let b = g === "center" ? j.alignCenter : g === "end" ? j.alignEnd : j.alignStart;
		return D(z, {
			tag: d,
			attrs: {
				role: "columnheader",
				"aria-colspan": i.colSpan,
				colSpan: a ? o : void 0,
				...i.attrs
			},
			className: M(f, !a && b, !v && j.crop),
			style: u,
			renderProps: m,
			generatorName: r.generatorName,
			customGenerator: r.customGenerator,
			defaultGenerator: cd,
			classNameGenerator: p ? void 0 : r.classNameGenerator,
			didMount: r.didMount,
			willUnmount: r.willUnmount,
			children: (e) => D(w, { children: [i.a11yText && D("div", {
				className: j.srOnly,
				children: i.a11yText
			}), D("div", {
				"aria-hidden": i.a11yText ? !0 : void 0,
				ref: this.handleInnerEl,
				className: M(j.flexCol, j.noShrink, j.whiteSpaceNoWrap, a && b, v && j.sticky),
				style: {
					left: y,
					right: y
				},
				children: D(e, {
					tag: "div",
					attrs: i.innerAttrs,
					className: B(r.innerClassNameGenerator, m)
				})
			})] })
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0;
	}
	buildDayHeaderRenderProps(e, t, n, r, i, a, o, s) {
		let c = this.buildDayHeaderText(o ? i : e.date, a, o, s), l = r ? this.buildDayHeaderText(i, S_, !1, s) : c;
		return {
			...e,
			isNarrow: t,
			level: n,
			text: l.text,
			textParts: l.textParts,
			weekdayText: r ? l.text : c.weekdayText,
			dayNumberText: c.dayNumberText
		};
	}
};
function A_(e, t, n, r) {
	let i = r.formatToParts(e, t);
	return {
		text: Yo(i),
		textParts: i,
		weekdayText: Id(i),
		dayNumberText: n ? Ld(i) : ""
	};
}
var j_ = class extends L {
	constructor() {
		super(...arguments), this.innerHeightRefMap = new H(() => {
			V(this.handleInnerHeights);
		}), this.handleInnerHeights = () => {
			if (this._isUnmounting) return;
			let e = this.innerHeightRefMap.current, t = 0;
			for (let n of e.values()) t = Math.max(t, n);
			this.currentInnerHeight !== t && (this.currentInnerHeight = t, R(this.props.innerHeightRef, t));
		};
	}
	render() {
		let { props: e, context: t } = this, { tableMode: n } = e, { options: r } = t;
		return D(n ? "tr" : "div", {
			role: e.role,
			"aria-rowindex": e.rowIndex == null ? void 0 : 1 + e.rowIndex,
			className: M(r.dayHeaderRowClass, e.className, n && j.borderless, !n && j.flexRow, !n && j.contentBox, !n && j.borderlessX, !n && j.borderlessTop, !n && !e.borderBottom && j.borderlessBottom),
			style: { height: e.height },
			children: e.dataConfigs.map((t, r) => D(k_, {
				renderConfig: e.renderConfig,
				dataConfig: t,
				borderStart: !!r,
				colWidth: e.colWidth,
				viewportWidth: e.viewportWidth,
				innerHeightRef: this.innerHeightRefMap.createRef(t.key),
				cellIsNarrow: e.cellIsNarrow,
				cellIsMicro: e.cellIsMicro,
				rowLevel: e.rowLevel,
				tableMode: n,
				borderBottom: e.borderBottom
			}, t.key))
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.currentInnerHeight = void 0, R(this.props.innerHeightRef, null);
	}
}, M_ = class extends L {
	render() {
		let { props: e } = this, { headerTiers: t, tableMode: n } = e;
		return t.map((r, i) => x(j_, {
			...r,
			key: i,
			role: "row",
			borderBottom: i < t.length - 1,
			colWidth: e.colWidth,
			viewportWidth: e.viewportWidth,
			cellIsNarrow: e.cellIsNarrow,
			cellIsMicro: e.cellIsMicro,
			rowLevel: t.length - i - 1,
			tableMode: n
		}));
	}
}, N_ = class extends L {
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = {
			borderlessX: e.borderlessX,
			borderlessTop: e.borderlessTop,
			borderlessBottom: e.borderlessBottom,
			multiMonthColumns: e.multiMonthColumns
		};
		return D("table", {
			role: "presentation",
			className: M(B(n.tableClass, r), j.printTable),
			style: e.style,
			children: [
				D("colgroup", { children: e.cellRows[0].map((e) => D("col", {}, e.key)) }),
				e.showHeader && D("thead", {
					ref: e.headerElRef,
					role: "rowgroup",
					className: B(n.tableHeaderClass, {
						...r,
						isSticky: !1
					}),
					children: [D(M_, {
						tableMode: !0,
						headerTiers: e.headerTiers,
						cellIsNarrow: e.cellIsNarrow,
						cellIsMicro: e.cellIsMicro
					}), D("tr", {
						role: "presentation",
						children: D("th", {
							role: "presentation",
							colSpan: e.cellRows[0].length,
							className: M(j.noPadding, B(n.dayHeaderDividerClass, {
								isSticky: !1,
								multiMonthColumns: e.multiMonthColumns,
								options: { allDaySlot: !!n.allDaySlot }
							}))
						})
					})]
				}),
				D(T_, {
					dateProfile: e.dateProfile,
					todayRange: e.todayRange,
					cellRows: e.cellRows,
					forPrint: !0,
					tableMode: !0,
					className: B(n.tableBodyClass, r),
					dayMaxEvents: void 0,
					dayMaxEventRows: e.dayMaxEventRows,
					fgEventSegs: e.fgEventSegs,
					bgEventSegs: e.bgEventSegs,
					businessHourSegs: e.businessHourSegs,
					dateSelectionSegs: [],
					eventDrag: null,
					eventResize: null,
					eventSelection: e.eventSelection,
					visibleWidth: e.visibleWidth,
					cellIsNarrow: e.cellIsNarrow,
					cellIsMicro: e.cellIsMicro,
					rowHeightRefMap: e.rowHeightRefMap
				})
			]
		});
	}
}, P_ = class extends L {
	render() {
		let { props: e } = this;
		return D("div", {
			role: "rowgroup",
			className: M(e.className, j.flexCol, e.width == null && j.liquid),
			style: { width: e.width },
			children: D(M_, {
				headerTiers: e.headerTiers,
				colWidth: e.colWidth,
				viewportWidth: e.viewportWidth,
				cellIsNarrow: e.cellIsNarrow,
				cellIsMicro: e.cellIsMicro
			})
		});
	}
}, F_ = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.handleScroller = (e) => {
			R(this.props.scrollerRef, e);
		}, this.handleTotalWidth = (e) => {
			this._isUnmounting || this.setState({ totalWidth: e });
		}, this.handleClientWidth = (e) => {
			this._isUnmounting || this.setState({ clientWidth: e });
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, { borderlessX: i, borderlessTop: a, borderlessBottom: o } = Vs(r), { totalWidth: s, clientWidth: c } = t, l = s != null && c != null ? s - c : void 0;
		l < 3 && (l = 0);
		let u = !e.forPrint && !ld(r), d = !e.forPrint && ud(r), f = e.cellRows[0].length, p = c == null ? void 0 : c / f, m = p != null && p <= 60, h = m || p != null && p <= r.dayNarrowWidth;
		return e.forPrint ? D(N_, {
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			cellRows: e.cellRows,
			headerTiers: e.headerTiers,
			showHeader: !!r.dayHeaders,
			fgEventSegs: e.fgEventSegs,
			bgEventSegs: e.bgEventSegs,
			businessHourSegs: e.businessHourSegs,
			eventSelection: e.eventSelection,
			dayMaxEventRows: r.dayMaxEventRows,
			borderlessX: i,
			borderlessTop: a,
			borderlessBottom: o,
			multiMonthColumns: 0,
			visibleWidth: s,
			cellIsNarrow: h,
			cellIsMicro: m,
			rowHeightRefMap: e.rowHeightRefMap
		}) : D(w, { children: [
			r.dayHeaders && D("div", {
				className: M(B(r.tableHeaderClass, {
					isSticky: d,
					borderlessX: i,
					borderlessTop: a,
					borderlessBottom: o,
					multiMonthColumns: 0
				}), j.flexCol, d && j.tableHeaderSticky),
				children: [D("div", {
					className: j.flexRow,
					children: [D(P_, {
						headerTiers: e.headerTiers,
						cellIsNarrow: h,
						cellIsMicro: m
					}), !!l && D("div", {
						className: M(B(r.fillerClass, { inTableHeader: !0 }), j.borderlessY, j.borderlessEnd),
						style: { minWidth: l }
					})]
				}), D("div", { className: B(r.dayHeaderDividerClass, {
					isSticky: d,
					multiMonthColumns: 0,
					options: { allDaySlot: !!r.allDaySlot }
				}) })]
			}),
			D(qd, {
				vertical: u,
				className: M(B(r.tableBodyClass, {
					borderlessX: i,
					borderlessTop: a,
					borderlessBottom: o,
					multiMonthColumns: 0
				}), !e.forPrint && j.flexCol, u && j.liquid),
				ref: this.handleScroller,
				clientWidthRef: this.handleClientWidth,
				children: D(T_, {
					dateProfile: e.dateProfile,
					todayRange: e.todayRange,
					cellRows: e.cellRows,
					forPrint: e.forPrint,
					isHitComboAllowed: e.isHitComboAllowed,
					className: j.grow,
					dayMaxEvents: e.forPrint ? void 0 : r.dayMaxEvents,
					dayMaxEventRows: r.dayMaxEventRows,
					fgEventSegs: e.fgEventSegs,
					bgEventSegs: e.bgEventSegs,
					businessHourSegs: e.businessHourSegs,
					dateSelectionSegs: e.dateSelectionSegs,
					eventDrag: e.eventDrag,
					eventResize: e.eventResize,
					eventSelection: e.eventSelection,
					visibleWidth: s,
					cellIsNarrow: h,
					cellIsMicro: m,
					rowHeightRefMap: e.rowHeightRefMap
				})
			}),
			D(vh, { widthRef: this.handleTotalWidth })
		] });
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0;
	}
}, I_ = class extends L {
	constructor() {
		super(...arguments), this.rootElRef = C();
	}
	render() {
		let { props: e } = this;
		return D("div", {
			ref: this.rootElRef,
			className: M(j.footerScrollbar, e.isSticky && j.footerScrollbarSticky),
			children: D(qd, {
				horizontal: !0,
				ref: e.scrollerRef,
				children: D("div", { style: { minWidth: e.canvasWidth } })
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.disconnectHeight = jd(this.rootElRef.current, (e) => {
			this._isUnmounting || R(this.props.scrollbarWidthRef, e);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectHeight(), R(this.props.scrollbarWidthRef, null);
	}
}, L_ = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.headerScrollerRef = C(), this.bodyScrollerRef = C(), this.footerScrollerRef = C(), this.handleTotalWidth = (e) => {
			this._isUnmounting || this.setState({ totalWidth: e });
		}, this.handleClientWidth = (e) => {
			this._isUnmounting || this.setState({ clientWidth: e });
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, { borderlessX: i, borderlessTop: a, borderlessBottom: o } = Vs(r), { totalWidth: s, clientWidth: c } = t, l = s != null && c != null ? s - c : void 0, u = !e.forPrint && !ld(r), d = !e.forPrint && ud(r), f = !e.forPrint && dd(r), p = e.cellRows[0].length, [m, h] = g_(p, e.dayMinWidth, c), g = h ?? (c == null ? void 0 : c / p), _ = g != null && g <= 60, v = _ || g != null && g <= r.dayNarrowWidth;
		return e.forPrint ? D(N_, {
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			cellRows: e.cellRows,
			headerTiers: e.headerTiers,
			showHeader: !!r.dayHeaders,
			fgEventSegs: e.fgEventSegs,
			bgEventSegs: e.bgEventSegs,
			businessHourSegs: e.businessHourSegs,
			eventSelection: e.eventSelection,
			dayMaxEventRows: r.dayMaxEventRows,
			borderlessX: i,
			borderlessTop: a,
			borderlessBottom: o,
			multiMonthColumns: 0,
			visibleWidth: s,
			cellIsNarrow: v,
			cellIsMicro: _,
			rowHeightRefMap: e.rowHeightRefMap
		}) : D(w, { children: [
			r.dayHeaders && D("div", {
				className: M(B(r.tableHeaderClass, {
					isSticky: d,
					borderlessX: i,
					borderlessTop: a,
					borderlessBottom: o,
					multiMonthColumns: 0
				}), j.flexCol, d && j.tableHeaderSticky),
				children: [D(qd, {
					horizontal: !0,
					hideScrollbars: !0,
					className: j.flexRow,
					ref: this.headerScrollerRef,
					children: [D(P_, {
						headerTiers: e.headerTiers,
						colWidth: h,
						viewportWidth: c,
						width: m,
						cellIsNarrow: v,
						cellIsMicro: _
					}), !!l && D("div", {
						className: M(B(r.fillerClass, { inTableHeader: !0 }), j.borderlessY, j.borderlessEnd),
						style: { minWidth: l }
					})]
				}), D("div", { className: B(r.dayHeaderDividerClass, {
					isSticky: d,
					multiMonthColumns: 0,
					options: { allDaySlot: !!r.allDaySlot }
				}) })]
			}),
			D(qd, {
				vertical: u,
				horizontal: !0,
				hideScrollbars: f || e.forPrint,
				className: M(B(r.tableBodyClass, {
					borderlessX: i,
					borderlessTop: a,
					borderlessBottom: o,
					multiMonthColumns: 0
				}), !e.forPrint && j.flexCol, u && j.liquid),
				ref: this.bodyScrollerRef,
				clientWidthRef: this.handleClientWidth,
				children: D(T_, {
					dateProfile: e.dateProfile,
					todayRange: e.todayRange,
					cellRows: e.cellRows,
					forPrint: e.forPrint,
					isHitComboAllowed: e.isHitComboAllowed,
					className: j.grow,
					dayMaxEvents: e.forPrint ? void 0 : r.dayMaxEvents,
					dayMaxEventRows: r.dayMaxEventRows,
					fgEventSegs: e.fgEventSegs,
					bgEventSegs: e.bgEventSegs,
					businessHourSegs: e.businessHourSegs,
					dateSelectionSegs: e.dateSelectionSegs,
					eventDrag: e.eventDrag,
					eventResize: e.eventResize,
					eventSelection: e.eventSelection,
					colWidth: h,
					width: m,
					visibleWidth: s,
					cellIsNarrow: v,
					cellIsMicro: _,
					rowHeightRefMap: e.rowHeightRefMap
				})
			}),
			!!f && D(I_, {
				isSticky: !0,
				canvasWidth: m,
				scrollerRef: this.footerScrollerRef
			}),
			D(vh, { widthRef: this.handleTotalWidth })
		] });
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let e = fd(this.context.pluginHooks);
		this.syncedScroller = new e(!0), R(this.props.scrollerRef, this.syncedScroller), this.updateSyncedScroller();
	}
	componentDidUpdate() {
		this.updateSyncedScroller();
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.syncedScroller.destroy();
	}
	updateSyncedScroller() {
		this.syncedScroller.handleChildren([
			this.headerScrollerRef.current,
			this.bodyScrollerRef.current,
			this.footerScrollerRef.current
		]);
	}
}, R_ = class extends L {
	constructor() {
		super(...arguments), this.scrollerRef = C(), this.rowHeightRefMap = new H(() => {
			V(this.updateScrollY);
		}), this.scrollDate = null, this.updateScrollY = () => {
			if (this._isUnmounting) return;
			let e = this.rowHeightRefMap.current, t = this.scrollerRef.current;
			if (t && this.scrollDate) {
				let n = __(this.scrollDate, this.props.cellRows, e);
				n != null && (n && n++, t.scrollTo({ y: n }));
			}
		}, this.handleScrollEnd = (e) => {
			e && (this.scrollDate = null);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, { borderlessX: r, borderlessTop: i, borderlessBottom: a } = Vs(n), o = e.forPrint ? [] : e.dateSelectionSegs, s = e.forPrint ? null : e.eventDrag, c = e.forPrint ? null : e.eventResize, l = {
			...e,
			dateSelectionSegs: o,
			eventDrag: s,
			eventResize: c,
			scrollerRef: this.scrollerRef,
			rowHeightRefMap: this.rowHeightRefMap
		};
		return D(Hd, {
			viewSpec: t.viewSpec,
			attrs: {
				role: "table",
				"aria-rowcount": e.headerTiers.length + e.cellRows.length,
				"aria-colcount": e.cellRows[0].length,
				"aria-labelledby": e.labelId,
				"aria-label": e.labelStr
			},
			className: M(e.className, !e.forPrint && j.flexCol, !e.forPrint && B(n.tableClass, {
				borderlessX: r,
				borderlessTop: i,
				borderlessBottom: a,
				multiMonthColumns: 0
			})),
			children: n.dayMinWidth ? D(L_, {
				...l,
				dayMinWidth: n.dayMinWidth
			}) : D(F_, { ...l })
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.props.forPrint || (this.resetScroll(), this.scrollerRef.current?.addScrollEndListener(this.handleScrollEnd));
	}
	componentDidUpdate(e) {
		e.forPrint && !this.props.forPrint && (this.scrollerRef.current?.addScrollEndListener(this.handleScrollEnd), this.resetScroll()), e.dateProfile !== this.props.dateProfile && this.context.options.scrollTimeReset && this.resetScroll();
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.scrollerRef.current?.removeScrollEndListener(this.handleScrollEnd);
	}
	resetScroll() {
		this.scrollDate = this.props.dateProfile.currentDate, this.updateScrollY(), this.scrollerRef.current?.scrollTo({ x: 0 });
	}
}, z_ = class extends rf {
	buildRenderRange(e, t, n) {
		let r = super.buildRenderRange(e, t, n), { props: i } = this;
		return B_({
			currentRange: r,
			snapToWeek: /^(year|month)$/.test(t),
			fixedWeekCount: i.fixedWeekCount,
			dateEnv: i.dateEnv
		});
	}
};
function B_(e) {
	let { dateEnv: t, currentRange: n } = e, { start: r, end: i } = n, a;
	if (e.snapToWeek && (r = t.startOfWeek(r), a = t.startOfWeek(i), a.valueOf() !== i.valueOf() && (i = Ha(a, 1))), e.fixedWeekCount) {
		let e = t.startOfWeek(t.startOfMonth(O(n.end, -1))), r = Math.ceil(Wa(e, i));
		i = Ha(i, 6 - r);
	}
	return {
		start: r,
		end: i
	};
}
var V_ = {
	name: "daygrid",
	initialView: "dayGridMonth",
	views: {
		dayGrid: {
			component: class extends L {
				constructor() {
					super(...arguments), this.buildDayTableModel = I(h_), this.buildDateRowConfigs = I(ph), this.createDayHeaderFormatter = I(C_), this.slicer = new uh();
				}
				render() {
					let { props: e, context: t } = this, { dateProfile: n } = e, { options: r, dateEnv: i } = t, a = this.buildDayTableModel(n, t.dateProfileGenerator, i), o = a.rowCount === 1, s = this.createDayHeaderFormatter(t.options.dayHeaderFormat, o, a.colCount), c = this.slicer.sliceProps(e, n, r.nextDayThreshold, t, a);
					return D(Md, {
						unit: "day",
						children: (r, i) => {
							let l = this.buildDateRowConfigs(a.headerDates, o, n, i, s, t);
							return D(R_, {
								labelId: e.labelId,
								labelStr: e.labelStr,
								dateProfile: n,
								todayRange: i,
								cellRows: a.cellRows,
								forPrint: e.forPrint,
								className: e.className,
								headerTiers: l,
								fgEventSegs: c.fgEventSegs,
								bgEventSegs: c.bgEventSegs,
								businessHourSegs: c.businessHourSegs,
								dateSelectionSegs: c.dateSelectionSegs,
								eventDrag: c.eventDrag,
								eventResize: c.eventResize,
								eventSelection: c.eventSelection
							});
						}
					});
				}
			},
			dateProfileGeneratorClass: z_
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
};
//#endregion
//#region node_modules/fullcalendar/chunks/13cee8fa.js
function H_(e, t, n = {}) {
	let { slotRange: r, majorUnit: i = "", activeRange: a } = n;
	return e.dates.map((e) => ({
		key: e.toISOString(),
		date: e,
		range: r ? {
			start: t.add(e, r.slotMinTime),
			end: t.add(e, r.slotMaxTime)
		} : {
			start: e,
			end: O(e, 1)
		},
		isMajor: i ? of(e, i, t) : !1,
		isDisabled: a === null || a !== void 0 && !xo(a, e)
	}));
}
var U_ = Lc(), W_ = class {
	constructor() {
		this.getKeysForEventDefs = I(this._getKeysForEventDefs), this.splitDateSelection = I(this._splitDateSpan), this.splitEventStore = I(this._splitEventStore), this.splitIndividualUi = I(this._splitIndividualUi), this.splitEventDrag = I(this._splitInteraction), this.splitEventResize = I(this._splitInteraction), this.eventUiBuilders = {};
	}
	splitProps(e) {
		let t = this.getKeyInfo(e), n = this.getKeysForEventDefs(e.eventStore), r = this.splitDateSelection(e.dateSelection), i = this.splitIndividualUi(e.eventUiBases, n), a = this.splitEventStore(e.eventStore, n), o = this.splitEventDrag(e.eventDrag), s = this.splitEventResize(e.eventResize), c = {};
		this.eventUiBuilders = Ws(t, (e, t) => this.eventUiBuilders[t] || I(G_));
		for (let n in t) {
			let l = t[n], u = a[n] || U_, d = this.eventUiBuilders[n];
			c[n] = {
				businessHours: l.businessHours || e.businessHours,
				dateSelection: r[n] || null,
				eventStore: u,
				eventUiBases: d(e.eventUiBases[""], l.ui, i[n]),
				eventDrag: o[n] || null,
				eventResize: s[n] || null,
				eventSelection: u.instances[e.eventSelection] ? e.eventSelection : ""
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
		return Ws(e.defs, (e) => this.getKeysForEventDef(e));
	}
	_splitEventStore(e, t) {
		let { defs: n, instances: r } = e, i = {};
		for (let e in n) for (let r of t[e]) i[r] || (i[r] = Lc()), i[r].defs[e] = n[e];
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
					affectedEvents: n[r] || U_,
					mutatedEvents: i[r] || U_,
					isEvent: e.isEvent
				});
			};
			for (let e in n) a(e);
			for (let e in i) a(e);
		}
		return t;
	}
};
function G_(e, t, n) {
	let r = [];
	e && r.push(e), t && r.push(t);
	let i = { "": Gc(r) };
	return n && Object.assign(i, n), i;
}
var K_ = class extends W_ {
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
		return e.allDay ? Al(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
	}
}, q_ = class extends oh {
	sliceRange(e, t) {
		let n = [];
		for (let r = 0; r < t.length; r += 1) {
			let i = _o(e, t[r]);
			i && n.push({
				startDate: i.start,
				endDate: i.end,
				isStart: i.start.valueOf() === e.start.valueOf(),
				isEnd: i.end.valueOf() === e.end.valueOf(),
				col: r
			});
		}
		return n;
	}
};
function J_(e, t) {
	let n = [], r = 0;
	for (; r < t; r += 1) n.push([]);
	if (e) for (r = 0; r < e.length; r += 1) n[e[r].col].push(e[r]);
	return n;
}
function Y_(e, t) {
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
var X_ = [
	{ hours: 1 },
	{ minutes: 30 },
	{ minutes: 15 },
	{ seconds: 30 },
	{ seconds: 15 }
];
function Z_(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Date(0), o = e, s = A(0), c = n || Q_(r), l = [], u = 0;
	for (; Vo(o) < Vo(t);) {
		let e = i.add(a, o), t = Ho(s, c) !== null;
		l.push({
			date: e,
			time: o,
			key: e.toISOString(),
			isoTimeStr: qo(e),
			isLabeled: t,
			isFirst: u === 0
		}), o = No(o, r), s = No(s, r), u += 1;
	}
	return l;
}
function Q_(e) {
	let t, n, r;
	for (t = X_.length - 1; t >= 0; --t) if (n = A(X_[t]), r = Ho(n, e), r !== null && r > 1) return n;
	return e;
}
var $_ = class extends L {
	constructor() {
		super(...arguments), this.innerElRef = C();
	}
	render() {
		let { props: e } = this, { options: t, viewApi: n } = this.context, r = {
			text: t.allDayText,
			view: n,
			isNarrow: e.isNarrow
		};
		return D(z, {
			tag: "div",
			attrs: { role: "rowheader" },
			className: M(j.flexRow, j.noMargin, j.noPadding, j.contentBox),
			style: { width: e.width },
			renderProps: r,
			generatorName: "allDayHeaderContent",
			customGenerator: t.allDayHeaderContent,
			defaultGenerator: ev,
			classNameGenerator: t.allDayHeaderClass,
			didMount: t.allDayHeaderDidMount,
			willUnmount: t.allDayHeaderWillUnmount,
			children: (e) => D("div", {
				className: M(j.flexRow, j.noShrink, j.whiteSpacePre),
				ref: this.innerElRef,
				children: D(e, {
					tag: "div",
					className: B(t.allDayHeaderInnerClass, r)
				})
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let { props: e } = this, t = this.innerElRef.current;
		this.disconnectInnerWidth = Ad(t, (t) => {
			this._isUnmounting || R(e.innerWidthRef, t);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectInnerWidth(), R(this.props.innerWidthRef, null);
	}
};
function ev(e) {
	return e.text;
}
var tv = class extends Wd {
	constructor() {
		super(...arguments), this.state = {}, this.heightRef = C(), this.handleMoreLinkEl = (e) => {
			this.disconnectMoreLinkHeight?.(), this.disconnectMoreLinkHeight = void 0, e && (this.disconnectMoreLinkHeight = jd(e, (e) => {
				this._isUnmounting || this.setState({ moreLinkHeight: e });
			}));
		}, this.handleRootEl = (e) => {
			this.rootEl = e, e ? this.context.registerInteractiveComponent(this, { el: e }) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e, state: t } = this, n = !e.forPrint && Xg(e.dayMaxEvents, e.dayMaxEventRows) === "auto";
		return D(w, { children: [D(u_, {
			...e,
			moreLinkHeight: t.moreLinkHeight,
			rootElRef: this.handleRootEl,
			heightRef: this.heightRef
		}), n && D(Ph, {
			num: 1,
			display: "row",
			isNarrow: e.cellIsNarrow,
			isMicro: e.cellIsMicro,
			elRef: this.handleMoreLinkEl,
			className: j.offscreen,
			attrs: { "aria-hidden": !0 }
		})] });
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectMoreLinkHeight?.();
	}
	queryHit(e, t, n, r) {
		let { props: i, heightRef: a } = this, o = i.cells.length, { col: s, left: c, right: l } = v_(t, r, i.colWidth, o, e), u = i.cells[s];
		if (u.isInert) return null;
		let d = u.date, f = O(d, 1);
		return {
			dateProfile: i.dateProfile,
			dateSpan: {
				range: {
					start: d,
					end: f
				},
				allDay: !0,
				...u.dateSpanProps
			},
			getDayEl: () => x_(this.rootEl, s),
			rect: {
				left: c,
				right: l,
				top: 0,
				bottom: a.current
			},
			layer: 0
		};
	}
};
function nv(e, t, n = 0, r, i) {
	if (!r || !i) return [void 0, !1];
	let a = Math.max(r + 1, n), o = i / t, s, c;
	return e && o >= a ? (s = !0, c = o) : (s = !1, c = a), [c, s];
}
function rv(e, t, n) {
	return n ||= k(e), iv(A(e.valueOf() - n.valueOf()), t);
}
function iv(e, t) {
	let n = Vo(t.slotMinTime), r = Vo(t.slotMaxTime), i = (e.milliseconds - n) / (r - n);
	return i = Math.max(0, i), i = Math.min(1, i), i;
}
function av(e, t, n, r, i, a, o) {
	let s = [];
	if (i != null) {
		let c = i * r;
		for (let r of e) {
			let e = rv(r.startDate, t, n), i = rv(r.endDate, t, n), l = e * c, u = i * c, d = u - l;
			a != null && d < a && (d = a, u = l + d), s.push({
				start: l,
				end: u,
				size: d,
				isShort: d <= o
			});
		}
	}
	return s;
}
function ov(e, t, n, r) {
	let i = [], a = /* @__PURE__ */ new Map();
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n], o = t[n];
		if (o) {
			let e = {
				...r,
				key: r.eventRange.instance.instanceId,
				start: o.start,
				end: o.end,
				orderIndex: n
			};
			i.push(e), a.set(e, o);
		}
	}
	let o = sv(i, r ?? Infinity, { orderStrict: n ?? !1 });
	return {
		placements: o.domOrderedPlacements.map((e) => {
			let t = e.sourceSeg;
			return {
				seg: t,
				segVertical: a.get(t),
				levelCoord: e.levelCoord,
				thickness: e.thickness,
				stackDepth: e.backwardDepth,
				stackForward: e.forwardDepth
			};
		}),
		hiddenGroups: o.moreLinkGroups.map((e) => {
			let t = e.hiddenSlices.map((e) => e.sourceSeg);
			return {
				key: e.key,
				start: e.start,
				end: e.end,
				segs: t
			};
		})
	};
}
function sv(e, t, n) {
	let { segLevels: r, excludedSegs: i } = fg(e, n.orderStrict, t), a = cv(r), o = Ag(hg(i));
	return {
		domOrderedPlacements: Rg(a),
		moreLinkGroups: o
	};
}
function cv(e) {
	let t = e.map((e, t) => e.map((e) => ({
		sourceSeg: e,
		start: e.start,
		end: e.end,
		isStart: e.isStart,
		isEnd: e.isEnd,
		levelIndex: t
	}))), n = nc(t), r = /* @__PURE__ */ new Map(), i = new Map(n.map((e) => [e.sourceSeg.key, e.sourceSeg.key]));
	for (let a of n) {
		let n = [];
		for (let r = a.levelIndex + 1; r < e.length; r += 1) n.push(...rg(t[r], a));
		r.set(a.sourceSeg.key, n);
		for (let e of n) uv(i, a.sourceSeg.key, e.sourceSeg.key);
	}
	let a = /* @__PURE__ */ new Map();
	for (let e of n) {
		let t = lv(i, e.sourceSeg.key);
		a.set(t, Math.max(a.get(t) ?? 0, e.levelIndex));
	}
	let o = new Map(n.map((e) => [e.sourceSeg.key, 0])), s = new Map(n.map((e) => [e.sourceSeg.key, 0]));
	for (let e of n) {
		let t = o.get(e.sourceSeg.key) + 1;
		for (let n of r.get(e.sourceSeg.key)) o.set(n.sourceSeg.key, Math.max(o.get(n.sourceSeg.key), t));
	}
	for (let e = n.length - 1; e >= 0; --e) {
		let t = n[e], i = 0;
		for (let e of r.get(t.sourceSeg.key)) i = Math.max(i, s.get(e.sourceSeg.key) + 1);
		s.set(t.sourceSeg.key, i);
	}
	return n.map((e) => {
		let t = e.sourceSeg.key, n = a.get(lv(i, t)) + 1, c = n;
		for (let e of r.get(t)) c = Math.min(c, e.levelIndex);
		let l = e.levelIndex / n, u = (c - e.levelIndex) / n;
		return {
			...e,
			levelCoord: l,
			thickness: u,
			levelEndCoord: l + u,
			backwardDepth: o.get(t),
			forwardDepth: s.get(t)
		};
	});
}
function lv(e, t) {
	let n = e.get(t);
	if (n === t) return t;
	let r = lv(e, n);
	return e.set(t, r), r;
}
function uv(e, t, n) {
	let r = lv(e, t), i = lv(e, n);
	r !== i && e.set(i, r);
}
var dv = 50, fv = typeof navigator < "u" && navigator.userAgent.toLowerCase().includes("firefox");
function pv(e, t) {
	return e && (t === "stack" || t !== "grid" && fv) ? "stack" : "positioned";
}
var mv = N({
	hour: "numeric",
	minute: "2-digit",
	meridiem: !1
}), hv = class extends L {
	render() {
		let { props: e } = this;
		return D(tf, {
			...e,
			display: "column",
			level: e.level,
			isNarrow: e.isNarrow,
			isShort: e.isShort,
			className: e.isLiquid ? j.liquid : "",
			disableLiquid: !e.isLiquid,
			defaultTimeFormat: mv
		});
	}
}, gv = class extends L {
	render() {
		let { props: e } = this;
		return D("div", {
			role: "listitem",
			className: M(j.abs, j.flexCol, j.end0, j.z9999),
			style: {
				top: e.top,
				height: e.height
			},
			children: D(Fh, {
				className: j.liquid,
				display: "column",
				allDayDate: null,
				segs: e.hiddenSegs,
				hiddenSegs: e.hiddenSegs,
				dateSpanProps: e.dateSpanProps,
				renderProps: e.renderProps,
				dateProfile: e.dateProfile,
				todayRange: e.todayRange,
				popoverContent: () => xv(e.hiddenSegs, e, !1),
				forceTimed: !0,
				isNarrow: e.isNarrow,
				isMicro: e.isMicro
			})
		});
	}
}, _v = (e) => D(Qu.Consumer, { children: (t) => {
	let { options: n } = t;
	return D("div", {
		className: M(e.className, n.nowIndicatorDotClass),
		style: e.style
	});
} }), vv = (e) => D(Qu.Consumer, { children: (t) => {
	let { options: n } = t, r = {
		date: t.dateEnv.toDate(e.date),
		view: t.viewApi
	};
	return D(z, {
		elRef: e.elRef,
		tag: e.tag || "div",
		attrs: e.attrs,
		className: e.className,
		style: e.style,
		renderProps: r,
		generatorName: "nowIndicatorLineContent",
		customGenerator: n.nowIndicatorLineContent,
		classNameGenerator: n.nowIndicatorLineClass,
		didMount: n.nowIndicatorLineDidMount,
		willUnmount: n.nowIndicatorLineWillUnmount,
		children: e.children
	});
} });
function yv(e) {
	let t = e.totalHeight == null ? void 0 : e.totalHeight * rv(e.nowDate, e.dateProfile, e.dayDate);
	return D("div", {
		className: M(j.fill, j.pointerEventsNone, j.z2),
		children: [D(vv, {
			className: M(j.fillX, j.noMarginX, j.borderlessX),
			style: { top: t },
			date: e.nowDate
		}), (e.showDot ?? !0) && D(_v, {
			className: M(j.abs, j.start0),
			style: { top: t }
		})]
	});
}
var bv = class extends L {
	constructor() {
		super(...arguments), this.sortEventSegs = I(Fl), this.getDateMeta = I(Vd);
	}
	render() {
		let { props: e, context: t } = this, { options: n, dateEnv: r } = t, i = n.selectMirror, a = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || i && e.dateSelectionSegs || [], o = this.getDateMeta(e.date, r, e.dateProfile, e.todayRange), s = M(j.borderlessY, j.borderlessEnd, !e.borderStart && j.borderlessStart, e.width == null && j.liquid, j.rel, j.z1), c = { width: e.width }, l = this.getIsStack(), u = {
			...o,
			...e.renderProps,
			isStack: l,
			isNarrow: e.isNarrow,
			isMajor: e.isMajor,
			view: t.viewApi
		};
		if (o.isDisabled) return D("div", {
			role: "cell",
			"aria-disabled": !0,
			className: M(B(n.dayLaneClass, u), s),
			style: c
		});
		let d = M(B(n.dayLaneInnerClass, u), !l && j.fill, j.z1), f = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
		return D(z, {
			tag: "div",
			attrs: {
				...e.attrs,
				role: "cell",
				...o.isToday ? { "aria-current": "date" } : {},
				"data-date": Go(e.date)
			},
			className: s,
			style: c,
			renderProps: u,
			generatorName: void 0,
			classNameGenerator: n.dayLaneClass,
			didMount: n.dayLaneDidMount,
			willUnmount: n.dayLaneWillUnmount,
			children: () => D(w, { children: [
				this.renderFillSegs(e.businessHourSegs, "non-business"),
				this.renderFillSegs(e.bgEventSegs, "bg-event"),
				this.renderFillSegs(e.dateSelectionSegs, "highlight"),
				D("div", {
					role: f.length ? "list" : void 0,
					className: d,
					children: this.renderFgSegs(f, !1)
				}),
				!!a.length && D("div", {
					className: d,
					children: this.renderFgSegs(a, !0)
				}),
				this.renderNowIndicator(e.nowIndicatorSegs)
			] })
		});
	}
	renderFgSegs(e, t) {
		let { props: n } = this;
		return this.getIsStack() ? xv(e, n, t) : t ? this.renderPositionedMirrorSegs(e) : this.renderPositionedFgSegs(e);
	}
	renderPositionedFgSegs(e) {
		let { eventMaxStack: t, eventOrderStrict: n } = this.context.options, { placements: r, hiddenGroups: i } = ov(e, this.computeSegVerticals(e), n, t);
		return D(w, { children: [r.map((e) => this.renderPositionedSeg(e.seg, e.segVertical, this.computeSegHStyle(e), e.stackDepth, !1)), this.renderHiddenGroups(i)] });
	}
	renderPositionedMirrorSegs(e) {
		let t = this.computeSegVerticals(e);
		return e.map((e, n) => this.renderPositionedSeg(e, t[n] || {}, {
			left: 0,
			right: 0,
			zIndex: 0
		}, 0, !0));
	}
	renderPositionedSeg(e, t, n, r, i) {
		let { props: a } = this, { eventRange: o } = e, { instanceId: s } = o.instance, c = s === a.eventSelection;
		c && (n.zIndex += 1e3);
		let l = !!(a.eventDrag && a.eventDrag.affectedInstances[s]), u = !!(a.eventResize && a.eventResize.affectedInstances[s]), d = !i && (l || u);
		return D("div", {
			role: i ? void 0 : "listitem",
			className: M(j.abs, j.flexCol),
			style: {
				visibility: d ? "hidden" : void 0,
				top: t.start,
				height: t.size,
				...n
			},
			children: D(hv, {
				eventRange: o,
				slicedStart: e.startDate,
				slicedEnd: e.endDate,
				isStart: e.isStart,
				isEnd: e.isEnd,
				isDragging: l,
				isResizing: u,
				isMirror: i,
				isSelected: c,
				level: r,
				isNarrow: a.isNarrow,
				isShort: t.isShort || !1,
				isLiquid: !0,
				renderProps: a.renderProps,
				...Vl(o, a.todayRange, a.nowDate, a.nowMs)
			})
		}, s);
	}
	computeSegVerticals(e) {
		let { props: t, context: n } = this, r = t.slatHeight != null;
		return av(e, t.dateProfile, t.date, t.slatCnt, t.slatHeight ?? dv, r ? n.options.eventMinHeight : void 0, n.options.eventShortHeight);
	}
	renderHiddenGroups(e) {
		let { dateSpanProps: t, renderProps: n, dateProfile: r, todayRange: i, nowDate: a, nowMs: o, eventSelection: s, eventDrag: c, eventResize: l, isNarrow: u, isMicro: d } = this.props;
		return D(w, { children: e.map((e) => D(gv, {
			hiddenSegs: e.segs,
			top: e.start,
			height: e.end - e.start,
			isNarrow: u,
			isMicro: d,
			dateSpanProps: t,
			renderProps: n,
			dateProfile: r,
			todayRange: i,
			nowDate: a,
			nowMs: o,
			eventSelection: s,
			eventDrag: c,
			eventResize: l
		}, e.key)) });
	}
	renderFillSegs(e, t) {
		let { props: n, context: r } = this, i = this.computeSegVerticals(e);
		return D(w, { children: e.map((e, a) => {
			let { eventRange: o } = e, s = i[a] || {};
			return D("div", {
				"aria-hidden": !0,
				className: j.fillX,
				style: {
					top: s.start,
					height: s.size,
					marginInlineStart: -1
				},
				children: t === "bg-event" ? D(Sh, {
					eventRange: o,
					isStart: e.isStart,
					isEnd: e.isEnd,
					isNarrow: n.isNarrow,
					isShort: s.isShort || !1,
					isVertical: !0,
					renderProps: n.renderProps,
					...Vl(o, n.todayRange, n.nowDate, n.nowMs)
				}) : wh(t, r.options)
			}, Hl(o));
		}) });
	}
	renderNowIndicator(e) {
		let { props: t } = this;
		if (!(t.forPrint || this.getIsStack())) return e.map((e, n) => D(yv, {
			nowDate: e.startDate,
			dayDate: t.date,
			dateProfile: t.dateProfile,
			totalHeight: t.slatHeight == null ? void 0 : t.slatHeight * t.slatCnt,
			showDot: e.showDot ?? !0
		}, n));
	}
	computeSegHStyle(e) {
		let { options: t } = this.context, n = t.slotEventOverlap, r = e.levelCoord, i = e.levelCoord + e.thickness;
		n && (i = Math.min(1, r + (i - r) * 2));
		let a = {
			zIndex: e.stackDepth + 1,
			insetInlineStart: ps(r),
			insetInlineEnd: ps(1 - i),
			marginInlineEnd: void 0
		};
		return n && e.stackForward && (a.marginInlineEnd = 20), a;
	}
	getIsStack() {
		let { eventPrintLayout: e } = this.context.options;
		return pv(this.props.forPrint, e) === "stack";
	}
};
function xv(e, { todayRange: t, nowDate: n, nowMs: r, eventSelection: i, eventDrag: a, eventResize: o, renderProps: s }, c) {
	return D(w, { children: e.map((e) => {
		let { eventRange: l } = e, { instanceId: u } = l.instance, d = !!(a && a.affectedInstances[u]), f = !!(o && o.affectedInstances[u]), p = d || f;
		return D("div", {
			role: c ? void 0 : "listitem",
			className: j.breakInsideAvoid,
			style: { visibility: p ? "hidden" : void 0 },
			children: D(hv, {
				eventRange: l,
				slicedStart: e.startDate,
				slicedEnd: e.endDate,
				isStart: e.isStart,
				isEnd: e.isEnd,
				isDragging: d,
				isResizing: f,
				isMirror: c,
				isSelected: u === i,
				level: 0,
				isShort: !1,
				isNarrow: !1,
				disableResizing: !0,
				renderProps: s,
				...Vl(l, t, n, r)
			})
		}, u);
	}) });
}
var Sv = class extends Wd {
	constructor() {
		super(...arguments), this.processSlotOptions = I(Cv), this.handleRootEl = (e) => {
			this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
				el: e,
				isHitComboAllowed: this.props.isHitComboAllowed
			}) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e } = this;
		return D("div", {
			role: e.role,
			className: M(e.className, j.flexRow),
			ref: this.handleRootEl,
			children: e.cells.map((t, n) => D(bv, {
				dateProfile: e.dateProfile,
				nowDate: e.nowDate,
				nowMs: e.nowMs,
				todayRange: e.todayRange,
				date: t.date,
				isMajor: t.isMajor,
				slatCnt: e.slatCnt,
				renderProps: t.renderProps,
				attrs: t.attrs,
				dateSpanProps: t.dateSpanProps,
				forPrint: e.forPrint,
				borderStart: !!n,
				isNarrow: e.cellIsNarrow,
				isMicro: e.cellIsMicro,
				fgEventSegs: e.fgEventSegsByCol[n],
				bgEventSegs: e.bgEventSegsByCol[n],
				businessHourSegs: e.businessHourSegsByCol[n],
				nowIndicatorSegs: e.nowIndicatorSegsByCol[n],
				dateSelectionSegs: e.dateSelectionSegsByCol[n],
				eventDrag: e.eventDragByCol[n],
				eventResize: e.eventResizeByCol[n],
				eventSelection: e.eventSelection,
				width: e.colWidth,
				slatHeight: e.slatHeight
			}, t.key))
		});
	}
	queryHit(e, t, n, r) {
		let { dateProfile: i, cells: a, colWidth: o, slatHeight: s } = this.props, { dateEnv: c, options: l } = this.context, { snapDuration: u, snapsPerSlot: d } = this.processSlotOptions(l.slotDuration, l.snapDuration), f = a.length, { col: p, left: m, right: h } = v_(t, r, o, f, e), g = a[p];
		if (g.isInert) return null;
		let _ = Math.floor(n / s), v = _ * s, y = (n - v) / s, b = Math.floor(y * d), x = _ * d + b, S = No(i.slotMinTime, Fo(u, x)), C = c.add(g.date, S);
		return {
			dateProfile: i,
			dateSpan: {
				range: {
					start: C,
					end: c.add(C, u)
				},
				allDay: !1,
				...g.dateSpanProps
			},
			getDayEl: () => x_(this.rootEl, p),
			rect: {
				left: m,
				right: h,
				top: v,
				bottom: v + s
			},
			layer: 0
		};
	}
};
Sv.addPropsEquality({ style: Xs });
function Cv(e, t) {
	let n = t || e, r = Ho(e, n);
	return r === null && (n = e, r = 1), {
		snapDuration: n,
		snapsPerSlot: r
	};
}
var wv = (e) => D(Qu.Consumer, { children: (t) => {
	let { options: n } = t, r = {
		date: t.dateEnv.toDate(e.date),
		view: t.viewApi
	};
	return D(z, {
		elRef: e.elRef,
		tag: e.tag || "div",
		attrs: e.attrs,
		className: e.className,
		style: e.style,
		renderProps: r,
		generatorName: "nowIndicatorHeaderContent",
		customGenerator: n.nowIndicatorHeaderContent,
		classNameGenerator: n.nowIndicatorHeaderClass,
		didMount: n.nowIndicatorHeaderDidMount,
		willUnmount: n.nowIndicatorHeaderWillUnmount,
		children: e.children
	});
} });
function Tv(e) {
	return D("div", {
		className: M(j.fill, j.crop, j.pointerEventsNone, j.z2),
		children: D(wv, {
			className: j.abs,
			style: { top: e.totalHeight == null ? void 0 : e.totalHeight * rv(e.nowDate, e.dateProfile) },
			date: e.nowDate
		})
	});
}
var Ev = N({
	hour: "numeric",
	minute: "2-digit",
	omitZeroMinute: !0,
	meridiem: "short"
}), Dv = class extends L {
	constructor() {
		super(...arguments), this.createRenderProps = I(Ov), this.innerElRef = C();
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = n.slotHeaderFormat == null ? Ev : Array.isArray(n.slotHeaderFormat) ? N(n.slotHeaderFormat[0]) : N(n.slotHeaderFormat), i = this.createRenderProps(e.date, e.time, !e.isLabeled, e.isNarrow, e.isFirst, r, t), a = M(e.liquidHeight && j.liquid, j.flexRow, j.alignStart, j.noMargin, j.noPadding, j.borderlessX, j.borderlessBottom, !e.borderTop && j.borderlessTop);
		return e.isLabeled ? D(z, {
			tag: "div",
			attrs: { "data-time": e.isoTimeStr },
			style: { height: e.height },
			className: a,
			renderProps: i,
			generatorName: "slotHeaderContent",
			customGenerator: n.slotHeaderContent,
			defaultGenerator: kv,
			classNameGenerator: n.slotHeaderClass,
			didMount: n.slotHeaderDidMount,
			willUnmount: n.slotHeaderWillUnmount,
			children: (e) => D("div", {
				ref: this.innerElRef,
				className: M(j.noShrink, j.whiteSpaceNoWrap, j.flexRow),
				children: D(e, {
					tag: "div",
					className: B(n.slotHeaderInnerClass, i)
				})
			})
		}) : D("div", {
			className: M(B(n.slotHeaderClass, i), a),
			style: { height: e.height }
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let { props: e } = this, t = this.innerElRef.current;
		t && (this.disconnectInnerSize = kd(t, (t, n) => {
			this._isUnmounting || (R(e.innerWidthRef, t), R(e.innerHeightRef, n));
		}));
	}
	componentWillUnmount() {
		let { props: e } = this;
		this._isUnmounting = !0, this.disconnectInnerSize && (this.disconnectInnerSize(), R(e.innerWidthRef, null), R(e.innerHeightRef, null));
	}
};
function Ov(e, t, n, r, i, a, o) {
	return {
		...Vd(e, o.dateEnv),
		level: 0,
		text: Yo(o.dateEnv.formatToParts(e, a)),
		time: t,
		isMajor: !1,
		isMinor: n,
		isTime: !0,
		isNarrow: r,
		hasNavLink: !1,
		isFirst: i,
		view: o.viewApi
	};
}
function kv(e) {
	return e.text;
}
var Av = class extends L {
	constructor() {
		super(...arguments), this.getDateMeta = I(Vd);
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = {
			...this.getDateMeta(e.date, t.dateEnv),
			time: e.time,
			isMajor: !1,
			isMinor: !e.isLabeled,
			view: t.viewApi
		};
		return D(z, {
			tag: "div",
			attrs: { "data-time": e.isoTimeStr },
			className: M(j.noMargin, j.noPadding, j.liquid, j.borderlessX, j.borderlessBottom, !e.borderTop && j.borderlessTop),
			renderProps: r,
			generatorName: void 0,
			classNameGenerator: n.slotLaneClass,
			didMount: n.slotLaneDidMount,
			willUnmount: n.slotLaneWillUnmount
		});
	}
}, jv = N({ week: "short" }), Mv = class extends L {
	constructor() {
		super(...arguments), this.innerElRef = C();
	}
	render() {
		let { props: e, context: t } = this, { options: n, dateEnv: r } = t, i = e.dateProfile.renderRange, a = Ga(i.start, i.end) === 1 && n.navLinks, o = i.start, s = zd(t, o, "week"), c = r.computeWeekNumber(o), l = r.formatToParts(o, n.weekNumberFormat || jv), u = {
			num: c,
			text: Yo(l),
			textParts: l,
			date: r.toDate(o),
			isNarrow: e.isNarrow,
			hasNavLink: a,
			options: { dayMinWidth: n.dayMinWidth }
		};
		return D(z, {
			tag: "div",
			attrs: { role: "columnheader" },
			className: M(j.flexRow, j.noMargin, j.noPadding, e.isLiquid ? j.liquid : j.contentBox),
			style: { width: e.width },
			renderProps: u,
			generatorName: "weekNumberHeaderContent",
			customGenerator: n.weekNumberHeaderContent,
			defaultGenerator: cd,
			classNameGenerator: n.weekNumberHeaderClass,
			didMount: n.weekNumberHeaderDidMount,
			willUnmount: n.weekNumberHeaderWillUnmount,
			children: (e) => D(w, { children: [!a && D("div", {
				className: j.srOnly,
				children: s
			}), D("div", {
				"aria-hidden": !a || void 0,
				ref: this.innerElRef,
				className: M(j.flexRow, j.noShrink, j.whiteSpaceNoWrap),
				children: D(e, {
					tag: "div",
					attrs: a ? Bd(t, i.start, "week", s, !0, !0) : void 0,
					className: B(n.weekNumberHeaderInnerClass, u)
				})
			})] })
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let { props: e } = this, t = this.innerElRef.current;
		this.disconnectInnerSize = kd(t, (t, n) => {
			this._isUnmounting || (R(e.innerWidthRef, t), R(e.innerHeightRef, n));
		});
	}
	componentWillUnmount() {
		let { props: e } = this;
		this._isUnmounting = !0, this.disconnectInnerSize(), R(e.innerWidthRef, null), R(e.innerHeightRef, null);
	}
};
function Nv(e) {
	return D("div", {
		role: "cell",
		className: e.isLiquid ? j.liquid : j.contentBox,
		style: { width: e.width }
	});
}
var Pv = class extends L {
	constructor() {
		super(...arguments), this.state = { headerTierHeights: [] }, this.headerLabelInnerWidthRefMap = new H(() => {
			V(this.handleAxisWidths);
		}), this.headerLabelInnerHeightRefMap = new H(() => {
			V(this.handleHeaderHeights);
		}), this.headerMainInnerHeightRefMap = new H(() => {
			V(this.handleHeaderHeights);
		}), this.handleAllDayLabelInnerWidth = (e) => {
			this.allDayLabelInnerWidth = e, V(this.handleAxisWidths);
		}, this.slatLabelInnerWidthRefMap = new H(() => {
			V(this.handleAxisWidths);
		}), this.slatLabelInnerHeightRefMap = new H(() => {
			V(this.handleSlatInnerHeights);
		}), this.headerScrollerRef = C(), this.allDayScrollerRef = C(), this.mainScrollerRef = C(), this.footScrollerRef = C(), this.axisScrollerRef = C(), this.handleTotalWidth = (e) => {
			this._isUnmounting || this.setState({ totalWidth: e });
		}, this.handleBodyHeight = (e) => {
			this._isUnmounting || this.setState({ bodyHeight: e });
		}, this.handleClientWidth = (e) => {
			this._isUnmounting || this.setState({ clientWidth: e });
		}, this.handleClientHeight = (e) => {
			this._isUnmounting || this.setState({ clientHeight: e });
		}, this.handleStickyBottomScrollbarWidth = (e) => {
			this._isUnmounting || this.setState({ sticykBottomScrollbarWidth: e });
		}, this.handleHeaderHeights = () => {
			if (this._isUnmounting) return;
			let e = this.headerLabelInnerHeightRefMap.current, t = this.headerMainInnerHeightRefMap.current, n = [];
			for (let [r, i] of t.entries()) n[r] = Math.max(e.get(r) || 0, i);
			this.setState({ headerTierHeights: n });
		}, this.handleSlatInnerHeights = () => {
			if (this._isUnmounting) return;
			let e = this.slatLabelInnerHeightRefMap.current, t = 0;
			for (let n of e.values()) t = Math.max(t, n);
			this.state.slatInnerHeight !== t && this.setState({ slatInnerHeight: t });
		}, this.handleAxisWidths = () => {
			if (this._isUnmounting) return;
			let e = this.headerLabelInnerWidthRefMap.current, t = this.slatLabelInnerWidthRefMap.current, n = this.allDayLabelInnerWidth || 0;
			for (let t of e.values()) n = Math.max(n, t);
			for (let e of t.values()) n = Math.max(n, e);
			this.state.axisWidth !== n && this.setState({ axisWidth: n });
		};
	}
	render() {
		let { props: e, state: t, context: n, headerLabelInnerWidthRefMap: r, headerLabelInnerHeightRefMap: i, headerMainInnerHeightRefMap: a, slatLabelInnerWidthRefMap: o, slatLabelInnerHeightRefMap: s } = this, { nowDate: c, headerTiers: l, forPrint: u } = e, d = c.valueOf() - k(c).valueOf(), { axisWidth: f, totalWidth: p, clientWidth: m, clientHeight: h, bodyHeight: g, sticykBottomScrollbarWidth: _ } = t, { options: v } = n, { borderlessX: y, borderlessTop: b, borderlessBottom: S } = Vs(v), C = p != null && m != null && f != null ? p - m - (f + 1) : void 0, T = !u && !ld(v), ee = !u && ud(v), E = !u && dd(v), te = pv(u, v.eventPrintLayout) === "stack", ne = u && !te, re = u && te, ie = e.cells.length, [ae, oe] = g_(ie, e.dayMinWidth, m), se = oe ?? (m == null ? void 0 : m / ie), ce = se != null && se <= 60, le = ce || se != null && se <= v.dayNarrowWidth, ue = e.slatMetas.length, [de, fe] = nv(T && v.expandRows, ue, v.slotMinHeight, t.slatInnerHeight, h);
		this.slatHeight = de;
		let pe = (de || 0) * ue, me = ne ? pe : void 0, he = T && !v.expandRows && h != null && h > pe, ge = v.dayHeaders ? l.length + 1 : 1, _e = E ? _ : g != null && h != null ? g - h : void 0;
		return D(w, { children: [
			v.dayHeaders && D("div", {
				className: M(B(v.tableHeaderClass, {
					isSticky: ee,
					borderlessX: y,
					borderlessTop: b,
					borderlessBottom: S,
					multiMonthColumns: 0
				}), j.flexCol, ee && j.tableHeaderSticky, j.z1),
				children: [D("div", {
					className: j.flexRow,
					children: [
						D("div", {
							role: "rowgroup",
							className: j.contentBox,
							style: { width: f },
							children: l.map((n, a) => D("div", {
								role: "row",
								"aria-rowindex": a + 1,
								className: M(v.dayHeaderRowClass, j.flexRow, j.contentBox, j.borderlessX, j.borderlessTop, a === e.headerTiers.length - 1 && j.borderlessBottom),
								style: { height: t.headerTierHeights[a] },
								children: v.weekNumbers && n.isDateRow ? D(Mv, {
									dateProfile: e.dateProfile,
									innerWidthRef: r.createRef(a),
									innerHeightRef: i.createRef(a),
									width: void 0,
									isLiquid: !0,
									isNarrow: le
								}) : D(Nv, {
									width: void 0,
									isLiquid: !0
								})
							}, a))
						}),
						D("div", { className: B(v.slotHeaderDividerClass, {
							inTableHeader: !0,
							options: { dayMinWidth: v.dayMinWidth }
						}) }),
						D(qd, {
							horizontal: !0,
							hideScrollbars: !0,
							className: M(j.flexRow, j.liquid),
							ref: this.headerScrollerRef,
							children: [D("div", {
								role: "rowgroup",
								className: ae == null ? j.liquid : "",
								style: { width: ae },
								children: e.headerTiers.map((n, r) => x(j_, {
									...n,
									key: r,
									role: "row",
									rowIndex: r,
									borderBottom: r < e.headerTiers.length - 1,
									height: t.headerTierHeights[r],
									colWidth: oe,
									viewportWidth: m,
									innerHeightRef: a.createRef(r),
									cellIsNarrow: le,
									cellIsMicro: ce,
									rowLevel: e.headerTiers.length - r - 1
								}))
							}), !!C && D("div", {
								className: M(B(v.fillerClass, { inTableHeader: !0 }), j.borderlessY, j.borderlessEnd),
								style: { minWidth: C }
							})]
						})
					]
				}), D("div", { className: B(v.dayHeaderDividerClass, {
					isSticky: ee,
					multiMonthColumns: 0,
					options: { allDaySlot: !!v.allDaySlot }
				}) })]
			}),
			D("div", {
				role: "rowgroup",
				className: M(B(v.tableBodyClass, {
					borderlessX: y,
					borderlessTop: b,
					borderlessBottom: S,
					multiMonthColumns: 0
				}), j.flexCol, T && j.liquid, j.isolate, j.z0),
				children: [v.allDaySlot && D(w, { children: [D("div", {
					role: "row",
					"aria-rowindex": ge,
					className: M(j.flexRow, j.z1),
					children: [
						D($_, {
							width: f,
							innerWidthRef: this.handleAllDayLabelInnerWidth,
							isNarrow: le
						}),
						D("div", { className: B(v.slotHeaderDividerClass, {
							inTableHeader: !1,
							options: { dayMinWidth: v.dayMinWidth }
						}) }),
						D(qd, {
							horizontal: !0,
							hideScrollbars: !0,
							className: M(j.flexRow, j.liquidX),
							ref: this.allDayScrollerRef,
							children: [D("div", {
								className: j.flexRow,
								style: { width: ae },
								children: D(tv, {
									dateProfile: e.dateProfile,
									todayRange: e.todayRange,
									cells: e.cells,
									showDayNumbers: !1,
									forPrint: u,
									isHitComboAllowed: e.isHitComboAllowed,
									className: M(j.borderless, j.liquidX),
									cellIsNarrow: le,
									cellIsMicro: ce,
									fgEventSegs: e.fgEventSegs,
									bgEventSegs: e.bgEventSegs,
									businessHourSegs: e.businessHourSegs,
									dateSelectionSegs: e.dateSelectionSegs,
									eventSelection: e.eventSelection,
									eventDrag: e.eventDrag,
									eventResize: e.eventResize,
									dayMaxEvents: e.dayMaxEvents,
									dayMaxEventRows: e.dayMaxEventRows,
									colWidth: oe
								})
							}), !!C && D("div", {
								className: M(B(v.fillerClass, { inTableHeader: !1 }), j.borderlessY, j.borderlessEnd),
								style: { minWidth: C }
							})]
						})
					]
				}), D("div", { className: M(v.allDayDividerClass, j.z2) })] }), D("div", {
					role: "row",
					"aria-rowindex": ge + +!!v.allDaySlot,
					className: M(j.flexRow, j.rel, T && j.liquid, j.z0),
					children: [
						D(qd, {
							vertical: T,
							hideScrollbars: !0,
							className: M(j.flexCol, j.contentBox),
							style: { width: f },
							ref: this.axisScrollerRef,
							clientHeightRef: this.handleBodyHeight,
							children: !re && D(w, { children: D("div", {
								role: "rowheader",
								className: M(j.flexCol, j.grow, j.rel),
								style: { height: me },
								children: [
									D("div", {
										className: j.srOnly,
										children: v.timedText
									}),
									D("div", {
										"aria-hidden": !0,
										className: M(j.flexCol, T && v.expandRows && j.grow, ne && j.fillX),
										children: e.slatMetas.map((e, t) => x(Dv, {
											...e,
											key: e.key,
											innerWidthRef: o.createRef(e.key),
											innerHeightRef: s.createRef(e.key),
											borderTop: !!t,
											isNarrow: le,
											height: fe ? void 0 : de,
											liquidHeight: fe
										}))
									}),
									!u && v.nowIndicator && xo(e.dateProfile.currentRange, c) && d >= e.dateProfile.slotMinTime.milliseconds && d < e.dateProfile.slotMaxTime.milliseconds && D(Tv, {
										nowDate: c,
										dateProfile: e.dateProfile,
										totalHeight: de == null ? void 0 : de * ue
									}),
									!!(he || _e) && D("div", {
										className: M(B(v.fillerClass, { inTableHeader: !1 }), j.borderlessX, j.borderlessBottom, he && j.liquid),
										style: { minHeight: _e }
									})
								]
							}) })
						}),
						D("div", { className: B(v.slotHeaderDividerClass, {
							inTableHeader: !1,
							options: { dayMinWidth: v.dayMinWidth }
						}) }),
						D("div", {
							className: M(j.flexCol, j.liquid),
							children: [D(qd, {
								vertical: T,
								horizontal: !0,
								hideScrollbars: E || u,
								className: M(j.flexCol, j.rel, T && j.liquid),
								ref: this.mainScrollerRef,
								clientWidthRef: this.handleClientWidth,
								clientHeightRef: this.handleClientHeight,
								children: D("div", {
									className: M(j.flexCol, j.grow, j.rel),
									style: {
										width: ae,
										height: me
									},
									children: [D(Sv, {
										dateProfile: e.dateProfile,
										nowDate: e.nowDate,
										nowMs: e.nowMs,
										todayRange: e.todayRange,
										cells: e.cells,
										slatCnt: ue,
										forPrint: u,
										isHitComboAllowed: e.isHitComboAllowed,
										className: re ? "" : j.fill,
										fgEventSegsByCol: e.fgEventSegsByCol,
										bgEventSegsByCol: e.bgEventSegsByCol,
										businessHourSegsByCol: e.businessHourSegsByCol,
										nowIndicatorSegsByCol: e.nowIndicatorSegsByCol,
										dateSelectionSegsByCol: e.dateSelectionSegsByCol,
										eventDragByCol: e.eventDragByCol,
										eventResizeByCol: e.eventResizeByCol,
										eventSelection: e.eventSelection,
										colWidth: oe,
										slatHeight: de,
										cellIsNarrow: le,
										cellIsMicro: ce
									}), !re && D(w, { children: [D("div", {
										"aria-hidden": !0,
										className: M(j.flexCol, T && v.expandRows && j.grow, ne ? j.fillX : j.rel),
										children: e.slatMetas.map((e, t) => D("div", {
											className: M(j.flexRow, fe && j.liquid),
											style: { height: fe ? "" : de },
											children: x(Av, {
												...e,
												key: e.key,
												borderTop: !!t
											})
										}, e.key))
									}), he && D("div", { className: M(B(v.fillerClass, { inTableHeader: !1 }), j.borderlessX, j.borderlessBottom, j.liquid) })] })]
								})
							}), !!E && D(I_, {
								isSticky: !0,
								canvasWidth: ae,
								scrollerRef: this.footScrollerRef,
								scrollbarWidthRef: this.handleStickyBottomScrollbarWidth
							})]
						})
					]
				})]
			}),
			D(vh, { widthRef: this.handleTotalWidth })
		] });
	}
	componentDidMount() {
		this._isUnmounting = !1, this.initScrollers(), this.updateSlatHeight();
	}
	componentDidUpdate() {
		this.updateScrollers(), this.updateSlatHeight();
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.destroyScrollers(), this.prevSlatHeight = void 0, R(this.props.slatHeightRef, null);
	}
	updateSlatHeight() {
		this.prevSlatHeight !== this.slatHeight && R(this.props.slatHeightRef, this.prevSlatHeight = this.slatHeight);
	}
	initScrollers() {
		let e = fd(this.context.pluginHooks);
		this.dayScroller = new e(!0), this.timeScroller = new e(), R(this.props.dayScrollerRef, this.dayScroller), R(this.props.timeScrollerRef, this.timeScroller), this.updateScrollers();
	}
	updateScrollers() {
		this.dayScroller.handleChildren([
			this.headerScrollerRef.current,
			this.allDayScrollerRef.current,
			this.mainScrollerRef.current,
			this.footScrollerRef.current
		]), this.timeScroller.handleChildren([this.axisScrollerRef.current, this.mainScrollerRef.current]);
	}
	destroyScrollers() {
		R(this.props.dayScrollerRef, null), R(this.props.timeScrollerRef, null);
	}
};
Pv.addPropsEquality({ headerTierHeights: oc });
var Fv = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.headerLabelInnerWidthRefMap = new H(() => {
			V(this.handleAxisInnerWidths);
		}), this.handleAllDayLabelInnerWidth = (e) => {
			this.allDayLabelInnerWidth = e, V(this.handleAxisInnerWidths);
		}, this.handleWeekNumberInnerWidth = (e) => {
			this.weekNumberInnerWidth = e, V(this.handleAxisInnerWidths);
		}, this.slatLabelInnerWidthRefMap = new H(() => {
			V(this.handleAxisInnerWidths);
		}), this.slatLabelInnerHeightRefMap = new H(() => {
			V(this.handleSlatInnerHeights);
		}), this.handleTotalWidth = (e) => {
			this._isUnmounting || requestAnimationFrame(() => {
				this._isUnmounting || this.setState({ totalWidth: e });
			});
		}, this.handleClientWidth = (e) => {
			this._isUnmounting || this.setState({ clientWidth: e });
		}, this.handleClientHeight = (e) => {
			this._isUnmounting || this.setState({ clientHeight: e });
		}, this.handleAxisInnerWidths = () => {
			if (this._isUnmounting) return;
			let e = this.headerLabelInnerWidthRefMap.current, t = this.slatLabelInnerWidthRefMap.current, n = Math.max(this.weekNumberInnerWidth || 0, this.allDayLabelInnerWidth || 0);
			for (let t of e.values()) n = Math.max(n, t);
			for (let e of t.values()) n = Math.max(n, e);
			this.state.axisWidth !== n && this.setState({ axisWidth: n });
		}, this.handleSlatInnerHeights = () => {
			if (this._isUnmounting) return;
			let e = this.slatLabelInnerHeightRefMap.current, t = 0;
			for (let n of e.values()) t = Math.max(t, n);
			this.state.slatInnerHeight !== t && this.setState({ slatInnerHeight: t });
		};
	}
	render() {
		let { props: e, state: t, context: n, slatLabelInnerWidthRefMap: r, slatLabelInnerHeightRefMap: i, headerLabelInnerWidthRefMap: a } = this, { nowDate: o, forPrint: s } = e, c = o.valueOf() - k(o).valueOf(), { axisWidth: l, clientWidth: u, totalWidth: d } = t, { options: f } = n, { borderlessX: p, borderlessTop: m, borderlessBottom: h } = Vs(f), g = d != null && u != null && !s ? d - u : void 0, _ = !s && !ld(f), v = !s && ud(f), y = e.slatMetas.length, [b, S] = nv(_ && f.expandRows, y, f.slotMinHeight, t.slatInnerHeight, t.clientHeight);
		this.slatHeight = b;
		let C = (b || 0) * y, T = _ && !f.expandRows && t.clientHeight != null && t.clientHeight > C, ee = pv(s, f.eventPrintLayout) === "stack", E = s && !ee, te = s && ee, ne = E ? C : void 0, re = e.cells.length, ie = u == null ? void 0 : u / re, ae = ie != null && ie <= 60, oe = ae || ie != null && ie <= f.dayNarrowWidth;
		return D(w, { children: [
			f.dayHeaders && D("div", {
				role: "rowgroup",
				className: M(B(f.tableHeaderClass, {
					isSticky: v,
					borderlessX: p,
					borderlessTop: m,
					borderlessBottom: h,
					multiMonthColumns: 0
				}), j.flexCol, v && j.tableHeaderSticky, j.z1),
				children: [e.headerTiers.map((t, n) => D("div", {
					role: "row",
					className: j.flexRow,
					children: [
						D("div", {
							className: M(f.dayHeaderRowClass, j.flexRow, j.borderlessX, j.borderlessTop, n === e.headerTiers.length - 1 && j.borderlessBottom),
							children: f.weekNumbers && t.isDateRow ? D(Mv, {
								dateProfile: e.dateProfile,
								innerWidthRef: this.handleWeekNumberInnerWidth,
								innerHeightRef: a.createRef(n),
								width: l,
								isLiquid: !1,
								isNarrow: oe
							}) : D(Nv, {
								width: l,
								isLiquid: !1
							})
						}),
						D("div", { className: B(f.slotHeaderDividerClass, {
							inTableHeader: !0,
							options: { dayMinWidth: f.dayMinWidth }
						}) }),
						D(j_, {
							...t,
							className: j.liquid,
							borderBottom: n < e.headerTiers.length - 1,
							viewportWidth: u,
							cellIsNarrow: oe,
							cellIsMicro: ae,
							rowLevel: e.headerTiers.length - n - 1
						}),
						!!g && D("div", {
							className: M(B(f.fillerClass, { inTableHeader: !0 }), j.borderlessY, j.borderlessEnd),
							style: { minWidth: g }
						})
					]
				}, n)), D("div", { className: B(f.dayHeaderDividerClass, {
					isSticky: v,
					multiMonthColumns: 0,
					options: { allDaySlot: !!f.allDaySlot }
				}) })]
			}),
			D("div", {
				role: "rowgroup",
				className: M(B(f.tableBodyClass, {
					borderlessX: p,
					borderlessTop: m,
					borderlessBottom: h,
					multiMonthColumns: 0
				}), j.flexCol, _ && j.liquid, j.isolate, j.z0),
				children: [f.allDaySlot && D(w, { children: [D("div", {
					role: "row",
					className: M(j.flexRow, j.z1),
					children: [
						D($_, {
							width: l,
							innerWidthRef: this.handleAllDayLabelInnerWidth,
							isNarrow: oe
						}),
						D("div", { className: B(f.slotHeaderDividerClass, {
							inTableHeader: !1,
							options: { dayMinWidth: f.dayMinWidth }
						}) }),
						D(tv, {
							dateProfile: e.dateProfile,
							todayRange: e.todayRange,
							cells: e.cells,
							showDayNumbers: !1,
							forPrint: s,
							isHitComboAllowed: e.isHitComboAllowed,
							className: M(j.liquidX, j.borderless),
							cellIsNarrow: oe,
							cellIsMicro: ae,
							fgEventSegs: e.fgEventSegs,
							bgEventSegs: e.bgEventSegs,
							businessHourSegs: e.businessHourSegs,
							dateSelectionSegs: e.dateSelectionSegs,
							eventDrag: e.eventDrag,
							eventResize: e.eventResize,
							eventSelection: e.eventSelection,
							dayMaxEvents: e.dayMaxEvents,
							dayMaxEventRows: e.dayMaxEventRows
						}),
						!!g && D("div", {
							className: M(B(f.fillerClass, { inTableHeader: !1 }), j.borderlessY, j.borderlessEnd),
							style: { minWidth: g }
						})
					]
				}), D("div", { className: M(f.allDayDividerClass, j.z2) })] }), D(qd, {
					vertical: _,
					className: M(j.flexCol, j.rel, _ && j.liquid, j.z0),
					ref: e.timeScrollerRef,
					clientWidthRef: this.handleClientWidth,
					clientHeightRef: this.handleClientHeight,
					children: D("div", {
						className: M(j.flexCol, j.grow, j.rel),
						style: { height: ne },
						children: [D("div", {
							role: "row",
							className: M(j.flexRow, !te && j.fill),
							children: [
								D("div", {
									role: "rowheader",
									className: j.contentBox,
									style: { width: l },
									children: D("div", {
										className: j.srOnly,
										children: f.timedText
									})
								}),
								D("div", { className: B(f.slotHeaderDividerClass, {
									inTableHeader: !1,
									options: { dayMinWidth: f.dayMinWidth }
								}) }),
								D(Sv, {
									dateProfile: e.dateProfile,
									nowDate: e.nowDate,
									nowMs: e.nowMs,
									todayRange: e.todayRange,
									cells: e.cells,
									slatCnt: y,
									forPrint: s,
									isHitComboAllowed: e.isHitComboAllowed,
									className: j.liquid,
									fgEventSegsByCol: e.fgEventSegsByCol,
									bgEventSegsByCol: e.bgEventSegsByCol,
									businessHourSegsByCol: e.businessHourSegsByCol,
									nowIndicatorSegsByCol: e.nowIndicatorSegsByCol,
									dateSelectionSegsByCol: e.dateSelectionSegsByCol,
									eventDragByCol: e.eventDragByCol,
									eventResizeByCol: e.eventResizeByCol,
									eventSelection: e.eventSelection,
									slatHeight: b,
									cellIsNarrow: oe,
									cellIsMicro: ae
								})
							]
						}), !te && D(w, { children: [
							D("div", {
								"aria-hidden": !0,
								className: M(j.flexCol, _ && f.expandRows && j.grow, E ? j.fillX : j.rel),
								children: e.slatMetas.map((e, t) => D("div", {
									className: M(S && j.liquid, j.flexRow),
									style: { height: S ? void 0 : b },
									children: [
										D("div", {
											className: j.flexCol,
											style: { width: l },
											children: x(Dv, {
												...e,
												key: e.key,
												innerWidthRef: r.createRef(e.key),
												innerHeightRef: i.createRef(e.key),
												borderTop: !!t,
												isNarrow: oe
											})
										}),
										D("div", {
											className: B(f.slotHeaderDividerClass, {
												inTableHeader: !1,
												options: { dayMinWidth: f.dayMinWidth }
											}),
											style: { visibility: "hidden" }
										}),
										x(Av, {
											...e,
											key: e.key,
											borderTop: !!t
										})
									]
								}, e.key))
							}),
							T && D("div", { className: M(B(f.fillerClass, { inTableHeader: !1 }), j.borderlessX, j.borderlessBottom, j.liquid) }),
							!s && f.nowIndicator && xo(e.dateProfile.currentRange, o) && c >= e.dateProfile.slotMinTime.milliseconds && c < e.dateProfile.slotMaxTime.milliseconds && D(Tv, {
								nowDate: o,
								dateProfile: e.dateProfile,
								totalHeight: b == null ? void 0 : b * y
							})
						] })]
					})
				})]
			}),
			D(vh, { widthRef: this.handleTotalWidth })
		] });
	}
	componentDidMount() {
		this._isUnmounting = !1, this.updateSlatHeight();
	}
	componentDidUpdate() {
		this.updateSlatHeight();
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.prevSlatHeight = void 0, R(this.props.slatHeightRef, null);
	}
	updateSlatHeight() {
		this.prevSlatHeight !== this.slatHeight && R(this.props.slatHeightRef, this.prevSlatHeight = this.slatHeight);
	}
};
function Iv(e) {
	return e.map(() => []);
}
function Lv(e) {
	return e.map(() => null);
}
var Rv = class extends L {
	constructor() {
		super(...arguments), this.buildSlatMetas = I(Z_), this.dayScrollerRef = C(), this.timeScrollerRef = C(), this.scrollState = {}, this.handleSlatHeight = (e) => {
			this._isUnmounting || (this.slatHeight = e, e != null && V(this.applyTimeScroll));
		}, this.handleTimeScrollRequest = (e) => {
			this.scrollState.time = e, this.scrollState.y = void 0, this.applyTimeScroll();
		}, this.handleTimeScrollEnd = (e) => {
			if (e) {
				let e = this.timeScrollerRef.current.y;
				this.props.forPrint || (this.scrollState.y = e, this.scrollState.time = void 0);
			}
		}, this.applyTimeScroll = () => {
			let e = this.timeScrollerRef.current, { slatHeight: t, scrollState: n } = this, { y: r, time: i } = n;
			r == null && i && t != null && e && (r = iv(i, this.props.dateProfile) * (t * this.currentSlatCnt), r && r++, n.y = r), r != null && e.scrollTo({ y: r });
		};
	}
	render() {
		let { props: e, context: t } = this, { dateProfile: n } = e, { options: r, dateEnv: i } = t, { dayMinWidth: a } = r, { borderlessX: o, borderlessTop: s, borderlessBottom: c } = Vs(r), l = this.buildSlatMetas(n.slotMinTime, n.slotMaxTime, r.slotHeaderInterval, r.slotDuration, i);
		this.currentSlatCnt = l.length;
		let u = e.forPrint ? [] : e.dateSelectionSegs, d = e.forPrint ? null : e.eventDrag, f = e.forPrint ? null : e.eventResize, p = e.forPrint ? Iv(e.dateSelectionSegsByCol) : e.dateSelectionSegsByCol, m = e.forPrint ? Lv(e.eventDragByCol) : e.eventDragByCol, h = e.forPrint ? Lv(e.eventResizeByCol) : e.eventResizeByCol, g = {
			dateProfile: n,
			nowDate: e.nowDate,
			nowMs: e.nowMs,
			todayRange: e.todayRange,
			cells: e.cells,
			slatMetas: l,
			forPrint: e.forPrint,
			isHitComboAllowed: e.isHitComboAllowed,
			headerTiers: e.headerTiers,
			fgEventSegs: e.fgEventSegs,
			bgEventSegs: e.bgEventSegs,
			businessHourSegs: e.businessHourSegs,
			dateSelectionSegs: u,
			eventDrag: d,
			eventResize: f,
			...Bv(r),
			fgEventSegsByCol: e.fgEventSegsByCol,
			bgEventSegsByCol: e.bgEventSegsByCol,
			businessHourSegsByCol: e.businessHourSegsByCol,
			nowIndicatorSegsByCol: e.nowIndicatorSegsByCol,
			dateSelectionSegsByCol: p,
			eventDragByCol: m,
			eventResizeByCol: h,
			eventSelection: e.eventSelection,
			timeScrollerRef: this.timeScrollerRef,
			timeScrollState: this.scrollState,
			slatHeightRef: this.handleSlatHeight,
			borderlessX: o,
			borderlessBottom: c
		};
		return D(Hd, {
			attrs: {
				role: "table",
				"aria-colcount": e.cells.length,
				"aria-labelledby": e.labelId,
				"aria-label": e.labelStr
			},
			className: M(e.className, B(r.tableClass, {
				borderlessX: o,
				borderlessTop: s,
				borderlessBottom: c,
				multiMonthColumns: 0
			}), !e.forPrint && j.flexCol, j.isolate),
			viewSpec: t.viewSpec,
			children: a ? D(Pv, {
				...g,
				dayMinWidth: a,
				dayScrollerRef: this.dayScrollerRef
			}) : D(Fv, { ...g })
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.resetScroll(), this.context.emitter.on("_timeScrollRequest", this.handleTimeScrollRequest);
		let e = this.timeScrollerRef.current;
		e && e.addScrollEndListener(this.handleTimeScrollEnd);
	}
	componentDidUpdate(e) {
		e.dateProfile !== this.props.dateProfile && this.context.options.scrollTimeReset ? this.resetScroll() : e.forPrint && !this.props.forPrint && this.applyTimeScroll();
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.context.emitter.off("_timeScrollRequest", this.handleTimeScrollRequest);
		let e = this.timeScrollerRef.current;
		e && e.removeScrollEndListener(this.handleTimeScrollEnd);
	}
	resetScroll() {
		this.handleTimeScrollRequest(this.context.options.scrollTime);
		let e = this.dayScrollerRef.current;
		e && e.scrollTo({ x: 0 });
	}
}, zv = 5;
function Bv(e) {
	let { dayMaxEvents: t, dayMaxEventRows: n } = e;
	return (t === !0 || n === !0) && (t = void 0, n = zv), {
		dayMaxEvents: t,
		dayMaxEventRows: n
	};
}
var Vv = {
	name: "timegrid",
	initialView: "timeGridWeek",
	deps: [V_],
	views: {
		timeGrid: {
			component: class extends Wd {
				constructor() {
					super(...arguments), this.createDayHeaderFormatter = I(C_), this.buildDaySeries = I((e, t) => new f_(e.renderRange, t)), this.buildDayCols = I(H_), this.extractColDates = I((e) => e.map((e) => e.date)), this.extractColRanges = I((e) => e.map((e) => e.range)), this.buildDateRowConfigs = I(ph), this.splitFgEventSegs = I(J_), this.splitBgEventSegs = I(J_), this.splitBusinessHourSegs = I(J_), this.splitNowIndicatorSegs = I(J_), this.splitDateSelectionSegs = I(J_), this.splitEventDrag = I(Y_), this.splitEventResize = I(Y_), this.allDaySplitter = new K_(), this.daySeriesSlicer = new dh(), this.dayTimeColsSlicer = new q_();
				}
				render() {
					let { props: e, context: t } = this, { dateProfile: n } = e, { options: r, dateProfileGenerator: i } = t, a = this.buildDaySeries(n, i), o = this.buildDayCols(a, t.dateEnv, {
						slotRange: n,
						activeRange: n.activeRange
					}), s = this.extractColDates(o), c = this.extractColRanges(o), l = this.allDaySplitter.splitProps(e), u = this.daySeriesSlicer.sliceProps(l.allDay, n, r.nextDayThreshold, t, a), d = this.dayTimeColsSlicer.sliceProps(l.timed, n, null, t, c), f = this.createDayHeaderFormatter(t.options.dayHeaderFormat, !0, o.length);
					return D(Md, {
						unit: r.nowIndicator ? "minute" : "day",
						children: (i, a, l) => {
							let p = o.length, m = !e.forPrint && r.nowIndicator && this.dayTimeColsSlicer.sliceNowDate(i, n, r.nextDayThreshold, t, c), h = this.splitFgEventSegs(d.fgEventSegs, p), g = this.splitBgEventSegs(d.bgEventSegs, p), _ = this.splitBusinessHourSegs(d.businessHourSegs, p), v = this.splitNowIndicatorSegs(m, p), y = this.splitDateSelectionSegs(d.dateSelectionSegs, p), b = this.splitEventDrag(d.eventDrag, p), x = this.splitEventResize(d.eventResize, p), S = this.buildDateRowConfigs(s, !0, e.dateProfile, a, f, t);
							return D(Rv, {
								labelId: e.labelId,
								labelStr: e.labelStr,
								dateProfile: n,
								nowDate: i,
								nowMs: l,
								todayRange: a,
								cells: o,
								forPrint: e.forPrint,
								className: e.className,
								headerTiers: S,
								fgEventSegs: u.fgEventSegs,
								bgEventSegs: u.bgEventSegs,
								businessHourSegs: u.businessHourSegs,
								dateSelectionSegs: u.dateSelectionSegs,
								eventDrag: u.eventDrag,
								eventResize: u.eventResize,
								fgEventSegsByCol: h,
								bgEventSegsByCol: g,
								businessHourSegsByCol: _,
								nowIndicatorSegsByCol: v,
								dateSelectionSegsByCol: y,
								eventDragByCol: b,
								eventResizeByCol: x,
								eventSelection: e.eventSelection
							});
						}
					});
				}
			},
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
}, Hv = class extends L {
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = t.dateEnv.formatToParts(e.dayDate, e.dayFormat), i = Yo(r), a = n.navLinks, o = {
			...e.dateMeta,
			view: t.viewApi,
			text: i,
			textParts: r,
			get weekdayText() {
				return Id(r);
			},
			get dayNumberText() {
				return Ld(r);
			},
			hasNavLink: a,
			level: e.level
		};
		return D(z, {
			tag: "div",
			attrs: a ? Bd(this.context, e.dayDate, void 0, i, this.props.isTabbable) : {},
			renderProps: o,
			generatorName: "listDayHeaderContent",
			customGenerator: n.listDayHeaderContent,
			defaultGenerator: cd,
			classNameGenerator: n.listDayHeaderInnerClass
		});
	}
}, Uv = class extends L {
	render() {
		let { options: e, viewApi: t, viewSpec: n } = this.context, { dayDate: r, dateMeta: i } = this.props, a = !this.props.forPrint, o = e.listDayFormat ?? Wv(n), s = e.listDayAltFormat ?? Gv(n), c = {
			...i,
			view: t
		};
		return D(z, {
			tag: "div",
			attrs: {
				"data-date": Go(r),
				...i.isToday ? { "aria-current": "date" } : {}
			},
			className: a ? j.stickyT : "",
			renderProps: c,
			generatorName: void 0,
			classNameGenerator: e.listDayHeaderClass,
			didMount: e.listDayHeaderDidMount,
			willUnmount: e.listDayHeaderWillUnmount,
			children: () => D(w, { children: [!!o && D(Hv, {
				dayDate: r,
				dayFormat: o,
				isTabbable: !0,
				dateMeta: i,
				level: 0
			}), !!s && D(Hv, {
				dayDate: r,
				dayFormat: s,
				isTabbable: !1,
				dateMeta: i,
				level: 1
			})] })
		});
	}
};
function Wv({ durationUnit: e, singleUnit: t }) {
	return t === "day" || e === "day" || t === "week" ? Fd : Nd;
}
function Gv({ durationUnit: e, singleUnit: t }) {
	if (t !== "day") return e === "day" || t === "week" ? Nd : Fd;
}
var Kv = N({
	hour: "numeric",
	minute: "2-digit",
	meridiem: "short"
}), qv = class extends L {
	render() {
		let { props: e, context: t } = this, { eventRange: n } = e, { displayEventTime: r } = t.options, i = r !== !1 && (n.def.allDay || !e.isStart && !e.isEnd) ? t.options.allDayText : void 0;
		return D(tf, {
			...e,
			forcedTimeText: i,
			defaultTimeFormat: Kv,
			disableDragging: !0,
			disableResizing: !0,
			disableZindexes: !0,
			display: "list-item"
		});
	}
}, Jv = class extends L {
	constructor() {
		super(...arguments), this.getDateMeta = I(Vd), this.sortEventSegs = I(Fl);
	}
	render() {
		let { props: e, context: t } = this, { nowDate: n, todayRange: r } = e, { options: i } = t, a = this.getDateMeta(e.dayDate, t.dateEnv, void 0, r), o = this.sortEventSegs(e.segs, i.eventOrder), s = zd(this.context, e.dayDate), c = {
			...a,
			isFirst: e.isFirst,
			isLast: e.isLast,
			view: t.viewApi
		}, l = {
			...a,
			view: t.viewApi
		};
		return D("div", {
			role: "listitem",
			"aria-label": s,
			className: B(i.listDayClass, c),
			children: [D(Uv, {
				dayDate: e.dayDate,
				dateMeta: a,
				forPrint: e.forPrint
			}), D("div", {
				role: "list",
				"aria-label": i.eventsHint,
				className: M(B(i.listDayBodyClass, l), j.flexCol),
				children: o.map((t, i) => {
					let a = t.eventRange.instance.instanceId, s = i === 0, c = i === o.length - 1;
					return D("div", {
						role: "listitem",
						className: j.flexCol,
						children: D(qv, {
							eventRange: t.eventRange,
							slicedStart: t.slicedStart,
							slicedEnd: t.slicedEnd,
							isStart: t.isStart,
							isEnd: t.isEnd,
							isFirst: s,
							isLast: c,
							isDragging: !1,
							isResizing: !1,
							isMirror: !1,
							isSelected: !1,
							...Vl(t.eventRange, r, n, e.nowMs)
						})
					}, a);
				})
			})]
		});
	}
}, Yv = class extends Wd {
	constructor() {
		super(...arguments), this.computeDateVars = I(Zv), this.eventStoreToSegs = I(this._eventStoreToSegs), this.setRootEl = (e) => {
			e ? this.context.registerInteractiveComponent(this, {
				el: e,
				disableHits: !0
			}) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, { dayDates: r, dayRanges: i } = this.computeDateVars(e.dateProfile), a = this.eventStoreToSegs(e.eventStore, e.eventUiBases, i), o = !e.forPrint && !ld(n);
		return D(Hd, {
			viewSpec: t.viewSpec,
			className: M(e.className, j.flexCol),
			elRef: this.setRootEl,
			children: a.length ? D(qd, {
				vertical: o,
				className: M(j.flexCol, o ? j.liquid : ""),
				children: this.renderSegList(a, r)
			}) : this.renderEmptyMessage()
		});
	}
	renderEmptyMessage() {
		let { options: e, viewApi: t } = this.context, n = {
			text: e.noEventsText,
			view: t
		};
		return D(z, {
			tag: "div",
			attrs: { role: "status" },
			renderProps: n,
			generatorName: "noEventsContent",
			customGenerator: e.noEventsContent,
			defaultGenerator: Xv,
			classNameGenerator: e.noEventsClass,
			className: j.grow,
			didMount: e.noEventsDidMount,
			willUnmount: e.noEventsWillUnmount,
			children: (t) => D(t, {
				tag: "div",
				className: B(e.noEventsInnerClass, n)
			})
		});
	}
	renderSegList(e, t) {
		let { options: n } = this.context, r = Qv(e);
		return D("div", {
			role: "list",
			"aria-labelledby": this.props.labelId,
			"aria-label": this.props.labelStr,
			className: M(j.flexCol, M(n.listDaysClass)),
			children: D(Md, {
				unit: "day",
				children: (e, n, i) => {
					let a = [], o = r.reduce((e, t) => e + +!!t, 0), s = 0;
					for (let c = 0; c < r.length; c += 1) {
						let l = r[c];
						if (l) {
							let r = t[c], u = Go(r), d = s === 0, f = s === o - 1;
							a.push(D(Jv, {
								dayDate: r,
								nowDate: e,
								nowMs: i,
								todayRange: n,
								segs: l,
								isFirst: d,
								isLast: f,
								forPrint: this.props.forPrint
							}, u)), s += 1;
						}
					}
					return D(w, { children: a });
				}
			})
		});
	}
	_eventStoreToSegs(e, t, n) {
		return this.eventRangesToSegs(Ol(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n);
	}
	eventRangesToSegs(e, t) {
		let n = [];
		for (let r of e) n.push(...this.eventRangeToSegs(r, t));
		return n;
	}
	eventRangeToSegs(e, t) {
		let n = e.range, r, i = [];
		for (r = 0; r < t.length; r += 1) {
			let a = _o(n, t[r]);
			a && i.push({
				eventRange: e,
				slicedStart: a.start,
				slicedEnd: a.end,
				isStart: e.isStart && n.start.valueOf() === a.start.valueOf(),
				isEnd: e.isEnd && n.end.valueOf() === a.end.valueOf(),
				dayIndex: r
			});
		}
		return i;
	}
};
function Xv(e) {
	return e.text;
}
function Zv(e) {
	let t = k(e.renderRange.start), n = e.renderRange.end, r = [], i = [];
	for (; t < n;) r.push(t), i.push({
		start: t,
		end: O(t, 1)
	}), t = O(t, 1);
	return {
		dayDates: r,
		dayRanges: i
	};
}
function Qv(e) {
	let t = [], n, r;
	for (n = 0; n < e.length; n += 1) r = e[n], (t[r.dayIndex] || (t[r.dayIndex] = [])).push(r);
	return t;
}
var $v = {
	name: "list",
	views: {
		list: {
			component: Yv,
			buttonTextKey: "listText",
			disallowAmbigTitle: !0
		},
		listDay: {
			type: "list",
			duration: { days: 1 }
		},
		listWeek: {
			type: "list",
			duration: { weeks: 1 }
		},
		listMonth: {
			type: "list",
			duration: { month: 1 }
		},
		listYear: {
			type: "list",
			duration: { year: 1 }
		}
	}
}, ey = class extends Wd {
	constructor() {
		super(...arguments), this.state = {}, this.buildDayTableModel = I(h_), this.createDayHeaderFormatter = I(C_), this.buildDateRowConfig = I(mh), this.titleElRef = C(), this.rowHeightRefMap = new H(() => {
			V(this.handleHeights);
		}), this.slicer = new uh(), this.handleEl = (e) => {
			let { options: t } = this.context;
			e && (this.rootEl = e, t.singleMonthDidMount?.({
				el: this.rootEl,
				...this.renderProps
			}));
		}, this.handleTableHeaderEl = (e) => {
			this.disconnectTableHeaderHeight?.(), this.disconnectTableHeaderHeight = void 0, e && (this.disconnectTableHeaderHeight = jd(e, (e) => {
				this.setState({ tableHeaderHeight: this.tableHeaderHeight = e }), V(this.handleHeights);
			}));
		}, this.handleGridWidth = (e) => {
			this._isUnmounting || this.setState({ gridWidth: e });
		}, this.handleHeights = () => {
			this._isUnmounting || R(this.props.heightsRef, {
				titleHeight: this.titleHeight,
				tableHeaderHeight: this.tableHeaderHeight,
				rowHeightMap: this.rowHeightRefMap.current,
				cellRows: this.cellRows
			});
		};
	}
	get titleId() {
		return this.context.baseId + "month-" + this.props.isoDateStr;
	}
	render() {
		let { props: e, state: t, context: n } = this, { dateProfile: r, forPrint: i } = e, { options: a, dateEnv: o } = n, { borderlessX: s, borderlessTop: c, borderlessBottom: l } = Vs(a), u = this.buildDayTableModel(r, n.dateProfileGenerator, o), d = this.slicer.sliceProps(e, r, a.nextDayThreshold, n, u), f = this.createDayHeaderFormatter(a.dayHeaderFormat, !1, u.colCount), p = this.buildDateRowConfig(u.headerDates, !1, r, e.todayRange, f, n);
		this.cellRows = u.cellRows;
		let m = !i && e.colCount === 1, h = !i || e.hasLateralSiblings, g = u.cellRows[0].length, _ = t.gridWidth == null ? void 0 : t.gridWidth / g, v = _ != null && _ <= 60, y = v || _ != null && _ <= a.dayNarrowWidth, b = t.gridWidth == null ? void 0 : 1 / a.aspectRatio * t.gridWidth / 6, x = m ? b : void 0, S = m && b != null && t.tableHeaderHeight != null ? b + t.tableHeaderHeight + 1 : void 0, C = d.businessHourSegs, w = i ? [] : d.dateSelectionSegs, T = i ? null : d.eventDrag, ee = i ? null : d.eventResize, E = i && !e.hasLateralSiblings, te = a.navLinks && e.colCount > 1, ne = {
			multiMonthColumns: e.colCount || 0,
			isSticky: m,
			isNarrow: y,
			hasNavLink: te
		}, re = e.dateProfile.currentRange.start, ie = te ? Bd(n, re, "month", e.isoDateStr) : {};
		return D("div", {
			role: "listitem",
			style: { width: e.width },
			children: D("div", {
				role: "table",
				"aria-labelledby": this.titleId,
				"data-date": e.isoDateStr,
				className: M(B(a.singleMonthClass, {
					isFirst: e.isFirst,
					isLast: e.isLast,
					multiMonthColumns: e.colCount || 0
				}), j.flexCol, e.hasLateralSiblings && j.breakInsideAvoid),
				children: [
					D(vh, { widthRef: this.handleGridWidth }),
					D("div", {
						id: this.titleId,
						ref: this.titleElRef,
						className: M(B(a.singleMonthHeaderClass, ne), m && j.stickyT, m && j.z3, j.flexCol),
						style: { marginBottom: S },
						children: D("div", {
							...ie,
							className: M(B(a.singleMonthHeaderInnerClass, ne), ie.className),
							children: Yo(o.formatToParts(re, e.titleFormat))
						})
					}),
					E ? D(N_, {
						dateProfile: e.dateProfile,
						todayRange: e.todayRange,
						cellRows: u.cellRows,
						headerTiers: [p],
						showHeader: !0,
						headerElRef: this.handleTableHeaderEl,
						fgEventSegs: d.fgEventSegs,
						bgEventSegs: d.bgEventSegs,
						businessHourSegs: C,
						eventSelection: d.eventSelection,
						dayMaxEventRows: !0,
						borderlessX: s,
						borderlessTop: c,
						borderlessBottom: l,
						multiMonthColumns: e.colCount || 0,
						visibleWidth: t.gridWidth,
						cellIsNarrow: y,
						cellIsMicro: v,
						rowHeightRefMap: this.rowHeightRefMap,
						style: { marginTop: S == null ? void 0 : -S }
					}) : D("div", {
						className: M(B(a.tableClass, {
							borderlessX: s,
							borderlessTop: c,
							borderlessBottom: l,
							multiMonthColumns: e.colCount || 0
						}), j.flexCol),
						style: { marginTop: S == null ? void 0 : -S },
						children: [D("div", {
							ref: this.handleTableHeaderEl,
							className: M(B(a.tableHeaderClass, {
								isSticky: m,
								borderlessX: s,
								borderlessTop: c,
								borderlessBottom: l,
								multiMonthColumns: e.colCount || 0
							}), j.flexCol, m && j.sticky, m && j.z2),
							style: {
								top: m ? t.titleHeight : 0,
								marginBottom: x
							},
							children: [D(j_, {
								...p,
								role: "row",
								borderBottom: !1,
								cellIsNarrow: y,
								cellIsMicro: v,
								rowLevel: 0
							}), D("div", { className: B(a.dayHeaderDividerClass, {
								isSticky: m,
								multiMonthColumns: e.colCount || 0,
								options: { allDaySlot: !!a.allDaySlot }
							}) })]
						}), D("div", {
							className: M(B(a.tableBodyClass, {
								borderlessX: s,
								borderlessTop: c,
								borderlessBottom: l,
								multiMonthColumns: e.colCount || 0
							}), j.flexCol, h && j.rel, m && j.z1),
							style: {
								marginTop: x == null ? void 0 : -x,
								aspectRatio: h ? String(a.aspectRatio) : void 0
							},
							children: D(T_, {
								dateProfile: e.dateProfile,
								todayRange: e.todayRange,
								cellRows: u.cellRows,
								className: h ? j.fill : "",
								forPrint: i && !e.hasLateralSiblings,
								dayMaxEventRows: i && e.hasLateralSiblings ? 1 : !0,
								fgEventSegs: d.fgEventSegs,
								bgEventSegs: d.bgEventSegs,
								businessHourSegs: C,
								dateSelectionSegs: w,
								eventDrag: T,
								eventResize: ee,
								eventSelection: d.eventSelection,
								visibleWidth: t.gridWidth,
								cellIsNarrow: y,
								cellIsMicro: v,
								rowHeightRefMap: this.rowHeightRefMap
							})
						})]
					})
				]
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.disconnectTitleHeight = jd(this.titleElRef.current, (e) => {
			this.setState({ titleHeight: this.titleHeight = e }), V(this.handleHeights);
		});
	}
	componentWillUnmount() {
		let { options: e } = this.context;
		this._isUnmounting = !0, this.disconnectTitleHeight(), this.disconnectTableHeaderHeight?.(), e.singleMonthWillUnmount?.({
			el: this.rootEl,
			...this.renderProps
		});
	}
}, ty = class extends Wd {
	constructor() {
		super(...arguments), this.state = {}, this.splitDateProfileByMonth = I(ry), this.buildMonthFormat = I(oy), this.scrollerRef = C(), this.tilesElRef = C(), this.scrollState = {}, this.handleInnerWidth = (e) => {
			this._isUnmounting || this.setState({ innerWidth: e });
		}, this.handleScrollStart = () => {
			this.scrollState.date = void 0, this.scrollState.top = void 0;
		}, this.handleScrollEnd = (e) => {
			let t = this.scrollerRef.current;
			e && t && (this.scrollState.top = t.y, this.scrollState.date = void 0);
		};
	}
	render() {
		let { context: e, props: t, state: n } = this, { options: r } = e, i = !t.forPrint && !ld(r), a = this.splitDateProfileByMonth(e.dateProfileGenerator, t.dateProfile, e.dateEnv, r.fixedWeekCount, r.showNonCurrentDates), o = this.buildMonthFormat(r.singleMonthTitleFormat, a), { multiMonthMaxColumns: s, singleMonthMinWidth: c } = r, { innerWidth: l } = n, u, d, f = !1;
		return l != null && (u = Math.max(1, Math.min(s, Math.floor(l / c))), t.forPrint && (u = Math.min(u, 2)), d = ps(1 / u), f = u > 1), D(Md, {
			unit: "day",
			children: (n, r) => D(Hd, {
				viewSpec: e.viewSpec,
				className: M(!t.forPrint && j.flexCol, t.className),
				children: [D(qd, {
					vertical: i,
					className: i ? j.liquid : "",
					ref: this.scrollerRef,
					children: D("div", {
						role: "list",
						ref: this.tilesElRef,
						"aria-labelledby": t.labelId,
						"aria-label": t.labelStr,
						className: j.safeTiles,
						children: a.map((e, n) => {
							let i = Ko(e.currentRange.start);
							return x(ey, {
								...t,
								key: i,
								todayRange: r,
								isoDateStr: i,
								titleFormat: o,
								dateProfile: e,
								width: d,
								colCount: u,
								isFirst: !n,
								isLast: n === a.length - 1,
								hasLateralSiblings: f
							});
						})
					})
				}), D(vh, { widthRef: this.handleInnerWidth })]
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.scrollState.date = this.props.dateProfile.currentDate, this.scrollerRef.current.addScrollStartListener(this.handleScrollStart), this.scrollerRef.current.addScrollEndListener(this.handleScrollEnd), setTimeout(() => {
			this.applyScroll();
		}, 0);
	}
	componentDidUpdate(e, t) {
		e.dateProfile === this.props.dateProfile ? t.innerWidth !== this.state.innerWidth && this.applyScroll() : this.context.options.scrollTimeReset ? this.resetScroll() : this.applyScroll();
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.scrollerRef.current.removeScrollStartListener(this.handleScrollStart), this.scrollerRef.current.removeScrollEndListener(this.handleScrollEnd);
	}
	resetScroll() {
		this.scrollState.date = this.props.dateProfile.currentDate, this.scrollState.top = void 0, this.applyScroll();
	}
	applyScroll() {
		let e = this.scrollerRef.current, t = this.computeScrollTop();
		e && t != null && e.scrollTo({ y: t });
	}
	computeScrollTop() {
		let { scrollState: e } = this;
		if (e.top != null) return e.top;
		if (e.date != null) {
			let t = this.tilesElRef.current, n = t?.querySelector(`[data-date="${Ko(e.date)}"]`)?.parentElement;
			if (t && n) return Math.round(n.getBoundingClientRect().top) - Math.round(t.getBoundingClientRect().top);
		}
	}
}, ny = A(1, "month");
function ry(e, t, n, r, i) {
	let { start: a, end: o } = t.currentRange, s = a, c = [];
	for (; s.valueOf() < o.valueOf();) {
		let a = n.add(s, ny), o = {
			start: e.skipHiddenDays(s),
			end: e.skipHiddenDays(a, -1, !0)
		}, l = B_({
			currentRange: o,
			snapToWeek: !0,
			fixedWeekCount: r,
			dateEnv: n
		});
		l = {
			start: e.skipHiddenDays(l.start),
			end: e.skipHiddenDays(l.end, -1, !0)
		};
		let u = t.activeRange ? _o(t.activeRange, i ? l : o) : null;
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
var iy = N({
	year: "numeric",
	month: "long"
}), ay = N({ month: "long" });
function oy(e, t) {
	return e || (t[0].currentRange.start.getUTCFullYear() === t[t.length - 1].currentRange.start.getUTCFullYear() ? ay : iy);
}
var sy = {
	name: "multimonth",
	initialView: "multiMonthYear",
	views: {
		multiMonth: {
			component: ty,
			dateProfileGeneratorClass: z_,
			multiMonthMaxColumns: 3,
			singleMonthMinWidth: 350
		},
		multiMonthYear: {
			type: "multiMonth",
			duration: { years: 1 },
			fixedWeekCount: !0,
			showNonCurrentDates: !1
		}
	}
}, cy = [
	"MO",
	"TU",
	"WE",
	"TH",
	"FR",
	"SA",
	"SU"
], ly = function() {
	function e(e, t) {
		if (t === 0) throw Error("Can't create weekday with n == 0");
		this.weekday = e, this.n = t;
	}
	return e.fromStr = function(t) {
		return new e(cy.indexOf(t));
	}, e.prototype.nth = function(t) {
		return this.n === t ? this : new e(this.weekday, t);
	}, e.prototype.equals = function(e) {
		return this.weekday === e.weekday && this.n === e.n;
	}, e.prototype.toString = function() {
		var e = cy[this.weekday];
		return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + e), e;
	}, e.prototype.getJsWeekday = function() {
		return this.weekday === 6 ? 0 : this.weekday + 1;
	}, e;
}(), uy = function(e) {
	return e != null;
}, dy = function(e) {
	return typeof e == "number";
}, fy = function(e) {
	return typeof e == "string" && cy.includes(e);
}, py = Array.isArray, my = function(e, t) {
	t === void 0 && (t = e), arguments.length === 1 && (t = e, e = 0);
	for (var n = [], r = e; r < t; r++) n.push(r);
	return n;
}, U = function(e, t) {
	var n = 0, r = [];
	if (py(e)) for (; n < t; n++) r[n] = [].concat(e);
	else for (; n < t; n++) r[n] = e;
	return r;
}, hy = function(e) {
	return py(e) ? e : [e];
};
function gy(e, t, n) {
	n === void 0 && (n = " ");
	var r = String(e);
	return t >>= 0, r.length > t ? String(r) : (t -= r.length, t > n.length && (n += U(n, t / n.length)), n.slice(0, t) + String(r));
}
var _y = function(e, t, n) {
	var r = e.split(t);
	return n ? r.slice(0, n).concat([r.slice(n).join(t)]) : r;
}, vy = function(e, t) {
	var n = e % t;
	return n * t < 0 ? n + t : n;
}, yy = function(e, t) {
	return {
		div: Math.floor(e / t),
		mod: vy(e, t)
	};
}, by = function(e) {
	return !uy(e) || e.length === 0;
}, xy = function(e) {
	return !by(e);
}, Sy = function(e, t) {
	return xy(e) && e.indexOf(t) !== -1;
}, Cy = function(e, t, n, r, i, a) {
	return r === void 0 && (r = 0), i === void 0 && (i = 0), a === void 0 && (a = 0), new Date(Date.UTC(e, t - 1, n, r, i, a));
}, wy = [
	31,
	28,
	31,
	30,
	31,
	30,
	31,
	31,
	30,
	31,
	30,
	31
], Ty = 864e5, Ey = Cy(1970, 1, 1), Dy = [
	6,
	0,
	1,
	2,
	3,
	4,
	5
], Oy = function(e) {
	return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
}, ky = function(e) {
	return e instanceof Date;
}, Ay = function(e) {
	return ky(e) && !isNaN(e.getTime());
}, jy = function(e, t) {
	var n = e.getTime() - t.getTime();
	return Math.round(n / Ty);
}, My = function(e) {
	return jy(e, Ey);
}, Ny = function(e) {
	return new Date(Ey.getTime() + e * Ty);
}, Py = function(e) {
	var t = e.getUTCMonth();
	return t === 1 && Oy(e.getUTCFullYear()) ? 29 : wy[t];
}, Fy = function(e) {
	return Dy[e.getUTCDay()];
}, Iy = function(e, t) {
	var n = Cy(e, t + 1, 1);
	return [Fy(n), Py(n)];
}, Ly = function(e, t) {
	return t ||= e, new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
}, Ry = function(e) {
	return new Date(e.getTime());
}, zy = function(e) {
	for (var t = [], n = 0; n < e.length; n++) t.push(Ry(e[n]));
	return t;
}, By = function(e) {
	e.sort(function(e, t) {
		return e.getTime() - t.getTime();
	});
}, Vy = function(e, t) {
	t === void 0 && (t = !0);
	var n = new Date(e);
	return [
		gy(n.getUTCFullYear().toString(), 4, "0"),
		gy(n.getUTCMonth() + 1, 2, "0"),
		gy(n.getUTCDate(), 2, "0"),
		"T",
		gy(n.getUTCHours(), 2, "0"),
		gy(n.getUTCMinutes(), 2, "0"),
		gy(n.getUTCSeconds(), 2, "0"),
		t ? "Z" : ""
	].join("");
}, Hy = function(e) {
	var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
	if (!t) throw Error(`Invalid UNTIL value: ${e}`);
	return new Date(Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[5], 10) || 0, parseInt(t[6], 10) || 0, parseInt(t[7], 10) || 0));
}, Uy = function(e, t) {
	return e.toLocaleString("sv-SE", { timeZone: t }).replace(" ", "T") + "Z";
}, Wy = function(e, t) {
	var n = Intl.DateTimeFormat().resolvedOptions().timeZone, r = new Date(Uy(e, n)), i = new Date(Uy(e, t ?? "UTC")).getTime() - r.getTime();
	return new Date(e.getTime() - i);
}, Gy = function() {
	function e(e, t) {
		this.minDate = null, this.maxDate = null, this._result = [], this.total = 0, this.method = e, this.args = t, e === "between" ? (this.maxDate = t.inc ? t.before : /* @__PURE__ */ new Date(t.before.getTime() - 1), this.minDate = t.inc ? t.after : new Date(t.after.getTime() + 1)) : e === "before" ? this.maxDate = t.inc ? t.dt : /* @__PURE__ */ new Date(t.dt.getTime() - 1) : e === "after" && (this.minDate = t.inc ? t.dt : new Date(t.dt.getTime() + 1));
	}
	return e.prototype.accept = function(e) {
		++this.total;
		var t = this.minDate && e < this.minDate, n = this.maxDate && e > this.maxDate;
		if (this.method === "between") {
			if (t) return !0;
			if (n) return !1;
		} else if (this.method === "before") {
			if (n) return !1;
		} else if (this.method === "after") return t ? !0 : (this.add(e), !1);
		return this.add(e);
	}, e.prototype.add = function(e) {
		return this._result.push(e), !0;
	}, e.prototype.getValue = function() {
		var e = this._result;
		switch (this.method) {
			case "all":
			case "between": return e;
			default: return e.length ? e[e.length - 1] : null;
		}
	}, e.prototype.clone = function() {
		return new e(this.method, this.args);
	}, e;
}(), Ky = function(e, t) {
	return Ky = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, Ky(e, t);
};
function qy(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	Ky(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Jy = function() {
	return Jy = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Jy.apply(this, arguments);
};
function W(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/rrule/dist/esm/callbackiterresult.js
var Yy = function(e) {
	qy(t, e);
	function t(t, n, r) {
		var i = e.call(this, t, n) || this;
		return i.iterator = r, i;
	}
	return t.prototype.add = function(e) {
		return this.iterator(e, this._result.length) ? (this._result.push(e), !0) : !1;
	}, t;
}(Gy), Xy = {
	dayNames: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	monthNames: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	tokens: {
		SKIP: /^[ \r\n\t]+|^\.$/,
		number: /^[1-9][0-9]*/,
		numberAsText: /^(one|two|three)/i,
		every: /^every/i,
		"day(s)": /^days?/i,
		"weekday(s)": /^weekdays?/i,
		"week(s)": /^weeks?/i,
		"hour(s)": /^hours?/i,
		"minute(s)": /^minutes?/i,
		"month(s)": /^months?/i,
		"year(s)": /^years?/i,
		on: /^(on|in)/i,
		at: /^(at)/i,
		the: /^the/i,
		first: /^first/i,
		second: /^second/i,
		third: /^third/i,
		nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
		last: /^last/i,
		for: /^for/i,
		"time(s)": /^times?/i,
		until: /^(un)?til/i,
		monday: /^mo(n(day)?)?/i,
		tuesday: /^tu(e(s(day)?)?)?/i,
		wednesday: /^we(d(n(esday)?)?)?/i,
		thursday: /^th(u(r(sday)?)?)?/i,
		friday: /^fr(i(day)?)?/i,
		saturday: /^sa(t(urday)?)?/i,
		sunday: /^su(n(day)?)?/i,
		january: /^jan(uary)?/i,
		february: /^feb(ruary)?/i,
		march: /^mar(ch)?/i,
		april: /^apr(il)?/i,
		may: /^may/i,
		june: /^june?/i,
		july: /^july?/i,
		august: /^aug(ust)?/i,
		september: /^sep(t(ember)?)?/i,
		october: /^oct(ober)?/i,
		november: /^nov(ember)?/i,
		december: /^dec(ember)?/i,
		comma: /^(,\s*|(and|or)\s*)+/i
	}
}, Zy = function(e, t) {
	return e.indexOf(t) !== -1;
}, Qy = function(e) {
	return e.toString();
}, $y = function(e, t, n) {
	return `${t} ${n}, ${e}`;
}, eb = function() {
	function e(e, t, n, r) {
		if (t === void 0 && (t = Qy), n === void 0 && (n = Xy), r === void 0 && (r = $y), this.text = [], this.language = n || Xy, this.gettext = t, this.dateFormatter = r, this.rrule = e, this.options = e.options, this.origOptions = e.origOptions, this.origOptions.bymonthday) {
			var i = [].concat(this.options.bymonthday), a = [].concat(this.options.bynmonthday);
			i.sort(function(e, t) {
				return e - t;
			}), a.sort(function(e, t) {
				return t - e;
			}), this.bymonthday = i.concat(a), this.bymonthday.length || (this.bymonthday = null);
		}
		if (uy(this.origOptions.byweekday)) {
			var o = py(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday], s = String(o);
			this.byweekday = {
				allWeeks: o.filter(function(e) {
					return !e.n;
				}),
				someWeeks: o.filter(function(e) {
					return !!e.n;
				}),
				isWeekdays: s.indexOf("MO") !== -1 && s.indexOf("TU") !== -1 && s.indexOf("WE") !== -1 && s.indexOf("TH") !== -1 && s.indexOf("FR") !== -1 && s.indexOf("SA") === -1 && s.indexOf("SU") === -1,
				isEveryDay: s.indexOf("MO") !== -1 && s.indexOf("TU") !== -1 && s.indexOf("WE") !== -1 && s.indexOf("TH") !== -1 && s.indexOf("FR") !== -1 && s.indexOf("SA") !== -1 && s.indexOf("SU") !== -1
			};
			var c = function(e, t) {
				return e.weekday - t.weekday;
			};
			this.byweekday.allWeeks.sort(c), this.byweekday.someWeeks.sort(c), this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null), this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
		} else this.byweekday = null;
	}
	return e.isFullyConvertible = function(t) {
		var n = !0;
		if (!(t.options.freq in e.IMPLEMENTED) || t.origOptions.until && t.origOptions.count) return !1;
		for (var r in t.origOptions) {
			if (Zy([
				"dtstart",
				"tzid",
				"wkst",
				"freq"
			], r)) return !0;
			if (!Zy(e.IMPLEMENTED[t.options.freq], r)) return !1;
		}
		return n;
	}, e.prototype.isFullyConvertible = function() {
		return e.isFullyConvertible(this.rrule);
	}, e.prototype.toString = function() {
		var t = this.gettext;
		if (!(this.options.freq in e.IMPLEMENTED)) return t("RRule error: Unable to fully convert this rrule to text");
		if (this.text = [t("every")], this[K.FREQUENCIES[this.options.freq]](), this.options.until) {
			this.add(t("until"));
			var n = this.options.until;
			this.add(this.dateFormatter(n.getUTCFullYear(), this.language.monthNames[n.getUTCMonth()], n.getUTCDate()));
		} else this.options.count && this.add(t("for")).add(this.options.count.toString()).add(this.plural(this.options.count) ? t("times") : t("time"));
		return this.isFullyConvertible() || this.add(t("(~ approximate)")), this.text.join("");
	}, e.prototype.HOURLY = function() {
		var e = this.gettext;
		this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? e("hours") : e("hour"));
	}, e.prototype.MINUTELY = function() {
		var e = this.gettext;
		this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? e("minutes") : e("minute"));
	}, e.prototype.DAILY = function() {
		var e = this.gettext;
		this.options.interval !== 1 && this.add(this.options.interval.toString()), this.byweekday && this.byweekday.isWeekdays ? this.add(this.plural(this.options.interval) ? e("weekdays") : e("weekday")) : this.add(this.plural(this.options.interval) ? e("days") : e("day")), this.origOptions.bymonth && (this.add(e("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday ? this._byweekday() : this.origOptions.byhour && this._byhour();
	}, e.prototype.WEEKLY = function() {
		var e = this.gettext;
		this.options.interval !== 1 && this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? e("weeks") : e("week")), this.byweekday && this.byweekday.isWeekdays ? this.options.interval === 1 ? this.add(this.plural(this.options.interval) ? e("weekdays") : e("weekday")) : this.add(e("on")).add(e("weekdays")) : this.byweekday && this.byweekday.isEveryDay ? this.add(this.plural(this.options.interval) ? e("days") : e("day")) : (this.options.interval === 1 && this.add(e("week")), this.origOptions.bymonth && (this.add(e("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.origOptions.byhour && this._byhour());
	}, e.prototype.MONTHLY = function() {
		var e = this.gettext;
		this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()).add(e("months")), this.plural(this.options.interval) && this.add(e("in"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? e("months") : e("month"))), this.bymonthday ? this._bymonthday() : this.byweekday && this.byweekday.isWeekdays ? this.add(e("on")).add(e("weekdays")) : this.byweekday && this._byweekday();
	}, e.prototype.YEARLY = function() {
		var e = this.gettext;
		this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()), this.add(e("years"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? e("years") : e("year"))), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.options.byyearday && this.add(e("on the")).add(this.list(this.options.byyearday, this.nth, e("and"))).add(e("day")), this.options.byweekno && this.add(e("in")).add(this.plural(this.options.byweekno.length) ? e("weeks") : e("week")).add(this.list(this.options.byweekno, void 0, e("and")));
	}, e.prototype._bymonthday = function() {
		var e = this.gettext;
		this.byweekday && this.byweekday.allWeeks ? this.add(e("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, e("or"))).add(e("the")).add(this.list(this.bymonthday, this.nth, e("or"))) : this.add(e("on the")).add(this.list(this.bymonthday, this.nth, e("and")));
	}, e.prototype._byweekday = function() {
		var e = this.gettext;
		this.byweekday.allWeeks && !this.byweekday.isWeekdays && this.add(e("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)), this.byweekday.someWeeks && (this.byweekday.allWeeks && this.add(e("and")), this.add(e("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, e("and"))));
	}, e.prototype._byhour = function() {
		var e = this.gettext;
		this.add(e("at")).add(this.list(this.origOptions.byhour, void 0, e("and")));
	}, e.prototype._bymonth = function() {
		this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
	}, e.prototype.nth = function(e) {
		e = parseInt(e.toString(), 10);
		var t, n = this.gettext;
		if (e === -1) return n("last");
		var r = Math.abs(e);
		switch (r) {
			case 1:
			case 21:
			case 31:
				t = r + n("st");
				break;
			case 2:
			case 22:
				t = r + n("nd");
				break;
			case 3:
			case 23:
				t = r + n("rd");
				break;
			default: t = r + n("th");
		}
		return e < 0 ? t + " " + n("last") : t;
	}, e.prototype.monthtext = function(e) {
		return this.language.monthNames[e - 1];
	}, e.prototype.weekdaytext = function(e) {
		var t = dy(e) ? (e + 1) % 7 : e.getJsWeekday();
		return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t];
	}, e.prototype.plural = function(e) {
		return e % 100 != 1;
	}, e.prototype.add = function(e) {
		return this.text.push(" "), this.text.push(e), this;
	}, e.prototype.list = function(e, t, n, r) {
		var i = this;
		r === void 0 && (r = ","), py(e) || (e = [e]);
		var a = function(e, t, n) {
			for (var r = "", i = 0; i < e.length; i++) i !== 0 && (i === e.length - 1 ? r += " " + n + " " : r += t + " "), r += e[i];
			return r;
		};
		t ||= function(e) {
			return e.toString();
		};
		var o = function(e) {
			return t && t.call(i, e);
		};
		return n ? a(e.map(o), r, n) : e.map(o).join(r + " ");
	}, e;
}(), tb = function() {
	function e(e) {
		this.done = !0, this.rules = e;
	}
	return e.prototype.start = function(e) {
		return this.text = e, this.done = !1, this.nextSymbol();
	}, e.prototype.isDone = function() {
		return this.done && this.symbol === null;
	}, e.prototype.nextSymbol = function() {
		var e, t;
		this.symbol = null, this.value = null;
		do {
			if (this.done) return !1;
			var n = void 0;
			for (var r in e = null, this.rules) {
				n = this.rules[r];
				var i = n.exec(this.text);
				i && (e === null || i[0].length > e[0].length) && (e = i, t = r);
			}
			if (e != null && (this.text = this.text.substr(e[0].length), this.text === "" && (this.done = !0)), e == null) {
				this.done = !0, this.symbol = null, this.value = null;
				return;
			}
		} while (t === "SKIP");
		return this.symbol = t, this.value = e, !0;
	}, e.prototype.accept = function(e) {
		if (this.symbol === e) {
			if (this.value) {
				var t = this.value;
				return this.nextSymbol(), t;
			}
			return this.nextSymbol(), !0;
		}
		return !1;
	}, e.prototype.acceptNumber = function() {
		return this.accept("number");
	}, e.prototype.expect = function(e) {
		if (this.accept(e)) return !0;
		throw Error("expected " + e + " but found " + this.symbol);
	}, e;
}();
function nb(e, t) {
	t === void 0 && (t = Xy);
	var n = {}, r = new tb(t.tokens);
	return r.start(e) ? (i(), n) : null;
	function i() {
		r.expect("every");
		var e = r.acceptNumber();
		if (e && (n.interval = parseInt(e[0], 10)), r.isDone()) throw Error("Unexpected end");
		switch (r.symbol) {
			case "day(s)":
				n.freq = K.DAILY, r.nextSymbol() && (o(), d());
				break;
			case "weekday(s)":
				n.freq = K.WEEKLY, n.byweekday = [
					K.MO,
					K.TU,
					K.WE,
					K.TH,
					K.FR
				], r.nextSymbol(), o(), d();
				break;
			case "week(s)":
				n.freq = K.WEEKLY, r.nextSymbol() && (a(), o(), d());
				break;
			case "hour(s)":
				n.freq = K.HOURLY, r.nextSymbol() && (a(), d());
				break;
			case "minute(s)":
				n.freq = K.MINUTELY, r.nextSymbol() && (a(), d());
				break;
			case "month(s)":
				n.freq = K.MONTHLY, r.nextSymbol() && (a(), d());
				break;
			case "year(s)":
				n.freq = K.YEARLY, r.nextSymbol() && (a(), d());
				break;
			case "monday":
			case "tuesday":
			case "wednesday":
			case "thursday":
			case "friday":
			case "saturday":
			case "sunday":
				if (n.freq = K.WEEKLY, n.byweekday = [K[r.symbol.substr(0, 2).toUpperCase()]], !r.nextSymbol()) return;
				for (; r.accept("comma");) {
					if (r.isDone()) throw Error("Unexpected end");
					var t = c();
					if (!t) throw Error("Unexpected symbol " + r.symbol + ", expected weekday");
					n.byweekday.push(K[t]), r.nextSymbol();
				}
				o(), u(), d();
				break;
			case "january":
			case "february":
			case "march":
			case "april":
			case "may":
			case "june":
			case "july":
			case "august":
			case "september":
			case "october":
			case "november":
			case "december":
				if (n.freq = K.YEARLY, n.bymonth = [s()], !r.nextSymbol()) return;
				for (; r.accept("comma");) {
					if (r.isDone()) throw Error("Unexpected end");
					var i = s();
					if (!i) throw Error("Unexpected symbol " + r.symbol + ", expected month");
					n.bymonth.push(i), r.nextSymbol();
				}
				a(), d();
				break;
			default: throw Error("Unknown symbol");
		}
	}
	function a() {
		var e = r.accept("on"), t = r.accept("the");
		if (e || t) do {
			var i = l(), a = c(), o = s();
			if (i) a ? (r.nextSymbol(), n.byweekday ||= [], n.byweekday.push(K[a].nth(i))) : (n.bymonthday ||= [], n.bymonthday.push(i), r.accept("day(s)"));
			else if (a) r.nextSymbol(), n.byweekday ||= [], n.byweekday.push(K[a]);
			else if (r.symbol === "weekday(s)") r.nextSymbol(), n.byweekday ||= [
				K.MO,
				K.TU,
				K.WE,
				K.TH,
				K.FR
			];
			else if (r.symbol === "week(s)") {
				r.nextSymbol();
				var u = r.acceptNumber();
				if (!u) throw Error("Unexpected symbol " + r.symbol + ", expected week number");
				for (n.byweekno = [parseInt(u[0], 10)]; r.accept("comma");) {
					if (u = r.acceptNumber(), !u) throw Error("Unexpected symbol " + r.symbol + "; expected monthday");
					n.byweekno.push(parseInt(u[0], 10));
				}
			} else if (o) r.nextSymbol(), n.bymonth ||= [], n.bymonth.push(o);
			else return;
		} while (r.accept("comma") || r.accept("the") || r.accept("on"));
	}
	function o() {
		if (r.accept("at")) do {
			var e = r.acceptNumber();
			if (!e) throw Error("Unexpected symbol " + r.symbol + ", expected hour");
			for (n.byhour = [parseInt(e[0], 10)]; r.accept("comma");) {
				if (e = r.acceptNumber(), !e) throw Error("Unexpected symbol " + r.symbol + "; expected hour");
				n.byhour.push(parseInt(e[0], 10));
			}
		} while (r.accept("comma") || r.accept("at"));
	}
	function s() {
		switch (r.symbol) {
			case "january": return 1;
			case "february": return 2;
			case "march": return 3;
			case "april": return 4;
			case "may": return 5;
			case "june": return 6;
			case "july": return 7;
			case "august": return 8;
			case "september": return 9;
			case "october": return 10;
			case "november": return 11;
			case "december": return 12;
			default: return !1;
		}
	}
	function c() {
		switch (r.symbol) {
			case "monday":
			case "tuesday":
			case "wednesday":
			case "thursday":
			case "friday":
			case "saturday":
			case "sunday": return r.symbol.substr(0, 2).toUpperCase();
			default: return !1;
		}
	}
	function l() {
		switch (r.symbol) {
			case "last": return r.nextSymbol(), -1;
			case "first": return r.nextSymbol(), 1;
			case "second": return r.nextSymbol(), r.accept("last") ? -2 : 2;
			case "third": return r.nextSymbol(), r.accept("last") ? -3 : 3;
			case "nth":
				var e = parseInt(r.value[1], 10);
				if (e < -366 || e > 366) throw Error("Nth out of range: " + e);
				return r.nextSymbol(), r.accept("last") ? -e : e;
			default: return !1;
		}
	}
	function u() {
		r.accept("on"), r.accept("the");
		var e = l();
		if (e) for (n.bymonthday = [e], r.nextSymbol(); r.accept("comma");) {
			if (e = l(), !e) throw Error("Unexpected symbol " + r.symbol + "; expected monthday");
			n.bymonthday.push(e), r.nextSymbol();
		}
	}
	function d() {
		if (r.symbol === "until") {
			var e = Date.parse(r.text);
			if (!e) throw Error("Cannot parse until date:" + r.text);
			n.until = new Date(e);
		} else r.accept("for") && (n.count = parseInt(r.value[0], 10), r.expect("number"));
	}
}
//#endregion
//#region node_modules/rrule/dist/esm/types.js
var G;
(function(e) {
	e[e.YEARLY = 0] = "YEARLY", e[e.MONTHLY = 1] = "MONTHLY", e[e.WEEKLY = 2] = "WEEKLY", e[e.DAILY = 3] = "DAILY", e[e.HOURLY = 4] = "HOURLY", e[e.MINUTELY = 5] = "MINUTELY", e[e.SECONDLY = 6] = "SECONDLY";
})(G ||= {});
function rb(e) {
	return e < G.HOURLY;
}
//#endregion
//#region node_modules/rrule/dist/esm/nlp/index.js
var ib = function(e, t) {
	return t === void 0 && (t = Xy), new K(nb(e, t) || void 0);
}, ab = [
	"count",
	"until",
	"interval",
	"byweekday",
	"bymonthday",
	"bymonth"
];
eb.IMPLEMENTED = [], eb.IMPLEMENTED[G.HOURLY] = ab, eb.IMPLEMENTED[G.MINUTELY] = ab, eb.IMPLEMENTED[G.DAILY] = ["byhour"].concat(ab), eb.IMPLEMENTED[G.WEEKLY] = ab, eb.IMPLEMENTED[G.MONTHLY] = ab, eb.IMPLEMENTED[G.YEARLY] = ["byweekno", "byyearday"].concat(ab);
var ob = function(e, t, n, r) {
	return new eb(e, t, n, r).toString();
}, sb = eb.isFullyConvertible, cb = function() {
	function e(e, t, n, r) {
		this.hour = e, this.minute = t, this.second = n, this.millisecond = r || 0;
	}
	return e.prototype.getHours = function() {
		return this.hour;
	}, e.prototype.getMinutes = function() {
		return this.minute;
	}, e.prototype.getSeconds = function() {
		return this.second;
	}, e.prototype.getMilliseconds = function() {
		return this.millisecond;
	}, e.prototype.getTime = function() {
		return (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1e3 + this.millisecond;
	}, e;
}(), lb = function(e) {
	qy(t, e);
	function t(t, n, r, i, a, o, s) {
		var c = e.call(this, i, a, o, s) || this;
		return c.year = t, c.month = n, c.day = r, c;
	}
	return t.fromDate = function(e) {
		return new this(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.valueOf() % 1e3);
	}, t.prototype.getWeekday = function() {
		return Fy(new Date(this.getTime()));
	}, t.prototype.getTime = function() {
		return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
	}, t.prototype.getDay = function() {
		return this.day;
	}, t.prototype.getMonth = function() {
		return this.month;
	}, t.prototype.getYear = function() {
		return this.year;
	}, t.prototype.addYears = function(e) {
		this.year += e;
	}, t.prototype.addMonths = function(e) {
		if (this.month += e, this.month > 12) {
			var t = Math.floor(this.month / 12), n = vy(this.month, 12);
			this.month = n, this.year += t, this.month === 0 && (this.month = 12, --this.year);
		}
	}, t.prototype.addWeekly = function(e, t) {
		t > this.getWeekday() ? this.day += -(this.getWeekday() + 1 + (6 - t)) + e * 7 : this.day += -(this.getWeekday() - t) + e * 7, this.fixDay();
	}, t.prototype.addDaily = function(e) {
		this.day += e, this.fixDay();
	}, t.prototype.addHours = function(e, t, n) {
		for (t && (this.hour += Math.floor((23 - this.hour) / e) * e);;) {
			this.hour += e;
			var r = yy(this.hour, 24), i = r.div, a = r.mod;
			if (i && (this.hour = a, this.addDaily(i)), by(n) || Sy(n, this.hour)) break;
		}
	}, t.prototype.addMinutes = function(e, t, n, r) {
		for (t && (this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / e) * e);;) {
			this.minute += e;
			var i = yy(this.minute, 60), a = i.div, o = i.mod;
			if (a && (this.minute = o, this.addHours(a, !1, n)), (by(n) || Sy(n, this.hour)) && (by(r) || Sy(r, this.minute))) break;
		}
	}, t.prototype.addSeconds = function(e, t, n, r, i) {
		for (t && (this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / e) * e);;) {
			this.second += e;
			var a = yy(this.second, 60), o = a.div, s = a.mod;
			if (o && (this.second = s, this.addMinutes(o, !1, n, r)), (by(n) || Sy(n, this.hour)) && (by(r) || Sy(r, this.minute)) && (by(i) || Sy(i, this.second))) break;
		}
	}, t.prototype.fixDay = function() {
		if (!(this.day <= 28)) {
			var e = Iy(this.year, this.month - 1)[1];
			if (!(this.day <= e)) for (; this.day > e;) {
				if (this.day -= e, ++this.month, this.month === 13 && (this.month = 1, ++this.year, this.year > 9999)) return;
				e = Iy(this.year, this.month - 1)[1];
			}
		}
	}, t.prototype.add = function(e, t) {
		var n = e.freq, r = e.interval, i = e.wkst, a = e.byhour, o = e.byminute, s = e.bysecond;
		switch (n) {
			case G.YEARLY: return this.addYears(r);
			case G.MONTHLY: return this.addMonths(r);
			case G.WEEKLY: return this.addWeekly(r, i);
			case G.DAILY: return this.addDaily(r);
			case G.HOURLY: return this.addHours(r, t, a);
			case G.MINUTELY: return this.addMinutes(r, t, a, o);
			case G.SECONDLY: return this.addSeconds(r, t, a, o, s);
		}
	}, t;
}(cb);
//#endregion
//#region node_modules/rrule/dist/esm/parseoptions.js
function ub(e) {
	for (var t = [], n = Object.keys(e), r = 0, i = n; r < i.length; r++) {
		var a = i[r];
		Sy(nx, a) || t.push(a), ky(e[a]) && !Ay(e[a]) && t.push(a);
	}
	if (t.length) throw Error("Invalid options: " + t.join(", "));
	return Jy({}, e);
}
function db(e) {
	var t = Jy(Jy({}, tx), ub(e));
	if (uy(t.byeaster) && (t.freq = K.YEARLY), !(uy(t.freq) && K.FREQUENCIES[t.freq])) throw Error(`Invalid frequency: ${t.freq} ${e.freq}`);
	if (t.dtstart ||= new Date((/* @__PURE__ */ new Date()).setMilliseconds(0)), uy(t.wkst) ? dy(t.wkst) || (t.wkst = t.wkst.weekday) : t.wkst = K.MO.weekday, uy(t.bysetpos)) {
		dy(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
		for (var n = 0; n < t.bysetpos.length; n++) {
			var r = t.bysetpos[n];
			if (r === 0 || !(r >= -366 && r <= 366)) throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
		}
	}
	if (!(t.byweekno || xy(t.byweekno) || xy(t.byyearday) || t.bymonthday || xy(t.bymonthday) || uy(t.byweekday) || uy(t.byeaster))) switch (t.freq) {
		case K.YEARLY:
			t.bymonth ||= t.dtstart.getUTCMonth() + 1, t.bymonthday = t.dtstart.getUTCDate();
			break;
		case K.MONTHLY:
			t.bymonthday = t.dtstart.getUTCDate();
			break;
		case K.WEEKLY: t.byweekday = [Fy(t.dtstart)];
	}
	if (uy(t.bymonth) && !py(t.bymonth) && (t.bymonth = [t.bymonth]), uy(t.byyearday) && !py(t.byyearday) && dy(t.byyearday) && (t.byyearday = [t.byyearday]), !uy(t.bymonthday)) t.bymonthday = [], t.bynmonthday = [];
	else if (py(t.bymonthday)) {
		for (var i = [], a = [], n = 0; n < t.bymonthday.length; n++) {
			var r = t.bymonthday[n];
			r > 0 ? i.push(r) : r < 0 && a.push(r);
		}
		t.bymonthday = i, t.bynmonthday = a;
	} else t.bymonthday < 0 ? (t.bynmonthday = [t.bymonthday], t.bymonthday = []) : (t.bynmonthday = [], t.bymonthday = [t.bymonthday]);
	if (uy(t.byweekno) && !py(t.byweekno) && (t.byweekno = [t.byweekno]), !uy(t.byweekday)) t.bynweekday = null;
	else if (dy(t.byweekday)) t.byweekday = [t.byweekday], t.bynweekday = null;
	else if (fy(t.byweekday)) t.byweekday = [ly.fromStr(t.byweekday).weekday], t.bynweekday = null;
	else if (t.byweekday instanceof ly) !t.byweekday.n || t.freq > K.MONTHLY ? (t.byweekday = [t.byweekday.weekday], t.bynweekday = null) : (t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]], t.byweekday = null);
	else {
		for (var o = [], s = [], n = 0; n < t.byweekday.length; n++) {
			var c = t.byweekday[n];
			if (dy(c)) {
				o.push(c);
				continue;
			}
			if (fy(c)) {
				o.push(ly.fromStr(c).weekday);
				continue;
			}
			!c.n || t.freq > K.MONTHLY ? o.push(c.weekday) : s.push([c.weekday, c.n]);
		}
		t.byweekday = xy(o) ? o : null, t.bynweekday = xy(s) ? s : null;
	}
	return uy(t.byhour) ? dy(t.byhour) && (t.byhour = [t.byhour]) : t.byhour = t.freq < K.HOURLY ? [t.dtstart.getUTCHours()] : null, uy(t.byminute) ? dy(t.byminute) && (t.byminute = [t.byminute]) : t.byminute = t.freq < K.MINUTELY ? [t.dtstart.getUTCMinutes()] : null, uy(t.bysecond) ? dy(t.bysecond) && (t.bysecond = [t.bysecond]) : t.bysecond = t.freq < K.SECONDLY ? [t.dtstart.getUTCSeconds()] : null, { parsedOptions: t };
}
function fb(e) {
	var t = e.dtstart.getTime() % 1e3;
	if (!rb(e.freq)) return [];
	var n = [];
	return e.byhour.forEach(function(r) {
		e.byminute.forEach(function(i) {
			e.bysecond.forEach(function(e) {
				n.push(new cb(r, i, e, t));
			});
		});
	}), n;
}
//#endregion
//#region node_modules/rrule/dist/esm/parsestring.js
function pb(e) {
	var t = e.split("\n").map(hb).filter(function(e) {
		return e !== null;
	});
	return Jy(Jy({}, t[0]), t[1]);
}
function mb(e) {
	var t = {}, n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
	if (!n) return t;
	var r = n[1], i = n[2];
	return r && (t.tzid = r), t.dtstart = Hy(i), t;
}
function hb(e) {
	if (e = e.replace(/^\s+|\s+$/, ""), !e.length) return null;
	var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
	if (!t) return gb(e);
	var n = t[1];
	switch (n.toUpperCase()) {
		case "RRULE":
		case "EXRULE": return gb(e);
		case "DTSTART": return mb(e);
		default: throw Error(`Unsupported RFC prop ${n} in ${e}`);
	}
}
function gb(e) {
	var t = mb(e.replace(/^RRULE:/i, ""));
	return e.replace(/^(?:RRULE|EXRULE):/i, "").split(";").forEach(function(n) {
		var r = n.split("="), i = r[0], a = r[1];
		switch (i.toUpperCase()) {
			case "FREQ":
				t.freq = G[a.toUpperCase()];
				break;
			case "WKST":
				t.wkst = ex[a.toUpperCase()];
				break;
			case "COUNT":
			case "INTERVAL":
			case "BYSETPOS":
			case "BYMONTH":
			case "BYMONTHDAY":
			case "BYYEARDAY":
			case "BYWEEKNO":
			case "BYHOUR":
			case "BYMINUTE":
			case "BYSECOND":
				var o = _b(a), s = i.toLowerCase();
				t[s] = o;
				break;
			case "BYWEEKDAY":
			case "BYDAY":
				t.byweekday = yb(a);
				break;
			case "DTSTART":
			case "TZID":
				var c = mb(e);
				t.tzid = c.tzid, t.dtstart = c.dtstart;
				break;
			case "UNTIL":
				t.until = Hy(a);
				break;
			case "BYEASTER":
				t.byeaster = Number(a);
				break;
			default: throw Error("Unknown RRULE property '" + i + "'");
		}
	}), t;
}
function _b(e) {
	return e.indexOf(",") === -1 ? vb(e) : e.split(",").map(vb);
}
function vb(e) {
	return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
function yb(e) {
	return e.split(",").map(function(e) {
		if (e.length === 2) return ex[e];
		var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
		if (!t || t.length < 3) throw SyntaxError(`Invalid weekday string: ${e}`);
		var n = Number(t[1]), r = ex[t[2]].weekday;
		return new ly(r, n);
	});
}
//#endregion
//#region node_modules/rrule/dist/esm/datewithzone.js
var bb = function() {
	function e(e, t) {
		if (isNaN(e.getTime())) throw RangeError("Invalid date passed to DateWithZone");
		this.date = e, this.tzid = t;
	}
	return Object.defineProperty(e.prototype, "isUTC", {
		get: function() {
			return !this.tzid || this.tzid.toUpperCase() === "UTC";
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.toString = function() {
		var e = Vy(this.date.getTime(), this.isUTC);
		return this.isUTC ? `:${e}` : `;TZID=${this.tzid}:${e}`;
	}, e.prototype.getTime = function() {
		return this.date.getTime();
	}, e.prototype.rezonedDate = function() {
		return this.isUTC ? this.date : Wy(this.date, this.tzid);
	}, e;
}();
//#endregion
//#region node_modules/rrule/dist/esm/optionstostring.js
function xb(e) {
	for (var t = [], n = "", r = Object.keys(e), i = Object.keys(tx), a = 0; a < r.length; a++) if (r[a] !== "tzid" && Sy(i, r[a])) {
		var o = r[a].toUpperCase(), s = e[r[a]], c = "";
		if (!(!uy(s) || py(s) && !s.length)) {
			switch (o) {
				case "FREQ":
					c = K.FREQUENCIES[e.freq];
					break;
				case "WKST":
					c = dy(s) ? new ly(s).toString() : s.toString();
					break;
				case "BYWEEKDAY":
					o = "BYDAY", c = hy(s).map(function(e) {
						return e instanceof ly ? e : py(e) ? new ly(e[0], e[1]) : new ly(e);
					}).toString();
					break;
				case "DTSTART":
					n = Sb(s, e.tzid);
					break;
				case "UNTIL":
					c = Vy(s, !e.tzid);
					break;
				default: if (py(s)) {
					for (var l = [], u = 0; u < s.length; u++) l[u] = String(s[u]);
					c = l.toString();
				} else c = String(s);
			}
			c && t.push([o, c]);
		}
	}
	var d = t.map(function(e) {
		return `${e[0]}=${e[1].toString()}`;
	}).join(";"), f = "";
	return d !== "" && (f = `RRULE:${d}`), [n, f].filter(function(e) {
		return !!e;
	}).join("\n");
}
function Sb(e, t) {
	return e ? "DTSTART" + new bb(new Date(e), t).toString() : "";
}
//#endregion
//#region node_modules/rrule/dist/esm/cache.js
function Cb(e, t) {
	return Array.isArray(e) ? !Array.isArray(t) || e.length !== t.length ? !1 : e.every(function(e, n) {
		return e.getTime() === t[n].getTime();
	}) : e instanceof Date ? t instanceof Date && e.getTime() === t.getTime() : e === t;
}
var wb = function() {
	function e() {
		this.all = !1, this.before = [], this.after = [], this.between = [];
	}
	return e.prototype._cacheAdd = function(e, t, n) {
		t &&= t instanceof Date ? Ry(t) : zy(t), e === "all" ? this.all = t : (n._value = t, this[e].push(n));
	}, e.prototype._cacheGet = function(e, t) {
		var n = !1, r = t ? Object.keys(t) : [], i = function(e) {
			for (var n = 0; n < r.length; n++) {
				var i = r[n];
				if (!Cb(t[i], e[i])) return !0;
			}
			return !1;
		}, a = this[e];
		if (e === "all") n = this.all;
		else if (py(a)) for (var o = 0; o < a.length; o++) {
			var s = a[o];
			if (!(r.length && i(s))) {
				n = s._value;
				break;
			}
		}
		if (!n && this.all) {
			for (var c = new Gy(e, t), o = 0; o < this.all.length && c.accept(this.all[o]); o++);
			n = c.getValue(), this._cacheAdd(e, n, t);
		}
		return py(n) ? zy(n) : n instanceof Date ? Ry(n) : n;
	}, e;
}(), Tb = W(W(W(W(W(W(W(W(W(W(W(W(W([], U(1, 31), !0), U(2, 28), !0), U(3, 31), !0), U(4, 30), !0), U(5, 31), !0), U(6, 30), !0), U(7, 31), !0), U(8, 31), !0), U(9, 30), !0), U(10, 31), !0), U(11, 30), !0), U(12, 31), !0), U(1, 7), !0), Eb = W(W(W(W(W(W(W(W(W(W(W(W(W([], U(1, 31), !0), U(2, 29), !0), U(3, 31), !0), U(4, 30), !0), U(5, 31), !0), U(6, 30), !0), U(7, 31), !0), U(8, 31), !0), U(9, 30), !0), U(10, 31), !0), U(11, 30), !0), U(12, 31), !0), U(1, 7), !0), Db = my(1, 29), Ob = my(1, 30), kb = my(1, 31), Ab = my(1, 32), jb = W(W(W(W(W(W(W(W(W(W(W(W(W([], Ab, !0), Ob, !0), Ab, !0), kb, !0), Ab, !0), kb, !0), Ab, !0), Ab, !0), kb, !0), Ab, !0), kb, !0), Ab, !0), Ab.slice(0, 7), !0), Mb = W(W(W(W(W(W(W(W(W(W(W(W(W([], Ab, !0), Db, !0), Ab, !0), kb, !0), Ab, !0), kb, !0), Ab, !0), Ab, !0), kb, !0), Ab, !0), kb, !0), Ab, !0), Ab.slice(0, 7), !0), Nb = my(-28, 0), Pb = my(-29, 0), Fb = my(-30, 0), Ib = my(-31, 0), Lb = W(W(W(W(W(W(W(W(W(W(W(W(W([], Ib, !0), Pb, !0), Ib, !0), Fb, !0), Ib, !0), Fb, !0), Ib, !0), Ib, !0), Fb, !0), Ib, !0), Fb, !0), Ib, !0), Ib.slice(0, 7), !0), Rb = W(W(W(W(W(W(W(W(W(W(W(W(W([], Ib, !0), Nb, !0), Ib, !0), Fb, !0), Ib, !0), Fb, !0), Ib, !0), Ib, !0), Fb, !0), Ib, !0), Fb, !0), Ib, !0), Ib.slice(0, 7), !0), zb = [
	0,
	31,
	60,
	91,
	121,
	152,
	182,
	213,
	244,
	274,
	305,
	335,
	366
], Bb = [
	0,
	31,
	59,
	90,
	120,
	151,
	181,
	212,
	243,
	273,
	304,
	334,
	365
], Vb = (function() {
	for (var e = [], t = 0; t < 55; t++) e = e.concat(my(7));
	return e;
})();
//#endregion
//#region node_modules/rrule/dist/esm/iterinfo/yearinfo.js
function Hb(e, t) {
	var n = Cy(e, 1, 1), r = Oy(e) ? 366 : 365, i = Oy(e + 1) ? 366 : 365, a = My(n), o = Fy(n), s = Jy(Jy({
		yearlen: r,
		nextyearlen: i,
		yearordinal: a,
		yearweekday: o
	}, Ub(e)), { wnomask: null });
	if (by(t.byweekno)) return s;
	s.wnomask = U(0, r + 7);
	var c, l, u = c = vy(7 - o + t.wkst, 7);
	u >= 4 ? (u = 0, l = s.yearlen + vy(o - t.wkst, 7)) : l = r - u;
	for (var d = Math.floor(l / 7), f = vy(l, 7), p = Math.floor(d + f / 4), m = 0; m < t.byweekno.length; m++) {
		var h = t.byweekno[m];
		if (h < 0 && (h += p + 1), h > 0 && h <= p) {
			var g = void 0;
			h > 1 ? (g = u + (h - 1) * 7, u !== c && (g -= 7 - c)) : g = u;
			for (var _ = 0; _ < 7 && (s.wnomask[g] = 1, g++, s.wdaymask[g] !== t.wkst); _++);
		}
	}
	if (Sy(t.byweekno, 1)) {
		var g = u + p * 7;
		if (u !== c && (g -= 7 - c), g < r) for (var m = 0; m < 7 && (s.wnomask[g] = 1, g += 1, s.wdaymask[g] !== t.wkst); m++);
	}
	if (u) {
		var v = void 0;
		if (Sy(t.byweekno, -1)) v = -1;
		else {
			var y = Fy(Cy(e - 1, 1, 1)), b = vy(7 - y.valueOf() + t.wkst, 7), x = Oy(e - 1) ? 366 : 365, S = void 0;
			b >= 4 ? (b = 0, S = x + vy(y - t.wkst, 7)) : S = r - u, v = Math.floor(52 + vy(S, 7) / 4);
		}
		if (Sy(t.byweekno, v)) for (var g = 0; g < u; g++) s.wnomask[g] = 1;
	}
	return s;
}
function Ub(e) {
	var t = Oy(e) ? 366 : 365, n = Fy(Cy(e, 1, 1));
	return t === 365 ? {
		mmask: Tb,
		mdaymask: Mb,
		nmdaymask: Rb,
		wdaymask: Vb.slice(n),
		mrange: Bb
	} : {
		mmask: Eb,
		mdaymask: jb,
		nmdaymask: Lb,
		wdaymask: Vb.slice(n),
		mrange: zb
	};
}
//#endregion
//#region node_modules/rrule/dist/esm/iterinfo/monthinfo.js
function Wb(e, t, n, r, i, a) {
	var o = {
		lastyear: e,
		lastmonth: t,
		nwdaymask: []
	}, s = [];
	if (a.freq === K.YEARLY) {
		if (by(a.bymonth)) s = [[0, n]];
		else for (var c = 0; c < a.bymonth.length; c++) t = a.bymonth[c], s.push(r.slice(t - 1, t + 1));
	} else a.freq === K.MONTHLY && (s = [r.slice(t - 1, t + 1)]);
	if (by(s)) return o;
	o.nwdaymask = U(0, n);
	for (var c = 0; c < s.length; c++) for (var l = s[c], u = l[0], d = l[1] - 1, f = 0; f < a.bynweekday.length; f++) {
		var p = void 0, m = a.bynweekday[f], h = m[0], g = m[1];
		g < 0 ? (p = d + (g + 1) * 7, p -= vy(i[p] - h, 7)) : (p = u + (g - 1) * 7, p += vy(7 - i[p] + h, 7)), u <= p && p <= d && (o.nwdaymask[p] = 1);
	}
	return o;
}
//#endregion
//#region node_modules/rrule/dist/esm/iterinfo/easter.js
function Gb(e, t) {
	t === void 0 && (t = 0);
	var n = e % 19, r = Math.floor(e / 100), i = e % 100, a = Math.floor(r / 4), o = r % 4, s = Math.floor((r + 8) / 25), c = Math.floor((r - s + 1) / 3), l = Math.floor(19 * n + r - a - c + 15) % 30, u = Math.floor(i / 4), d = i % 4, f = Math.floor(32 + 2 * o + 2 * u - l - d) % 7, p = Math.floor((n + 11 * l + 22 * f) / 451), m = Math.floor((l + f - 7 * p + 114) / 31), h = (l + f - 7 * p + 114) % 31 + 1, g = Date.UTC(e, m - 1, h + t);
	return [Math.ceil((g - Date.UTC(e, 0, 1)) / 864e5)];
}
//#endregion
//#region node_modules/rrule/dist/esm/iterinfo/index.js
var Kb = function() {
	function e(e) {
		this.options = e;
	}
	return e.prototype.rebuild = function(e, t) {
		var n = this.options;
		if (e !== this.lastyear && (this.yearinfo = Hb(e, n)), xy(n.bynweekday) && (t !== this.lastmonth || e !== this.lastyear)) {
			var r = this.yearinfo, i = r.yearlen, a = r.mrange, o = r.wdaymask;
			this.monthinfo = Wb(e, t, i, a, o, n);
		}
		uy(n.byeaster) && (this.eastermask = Gb(e, n.byeaster));
	}, Object.defineProperty(e.prototype, "lastyear", {
		get: function() {
			return this.monthinfo ? this.monthinfo.lastyear : null;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "lastmonth", {
		get: function() {
			return this.monthinfo ? this.monthinfo.lastmonth : null;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "yearlen", {
		get: function() {
			return this.yearinfo.yearlen;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "yearordinal", {
		get: function() {
			return this.yearinfo.yearordinal;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "mrange", {
		get: function() {
			return this.yearinfo.mrange;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "wdaymask", {
		get: function() {
			return this.yearinfo.wdaymask;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "mmask", {
		get: function() {
			return this.yearinfo.mmask;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "wnomask", {
		get: function() {
			return this.yearinfo.wnomask;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "nwdaymask", {
		get: function() {
			return this.monthinfo ? this.monthinfo.nwdaymask : [];
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "nextyearlen", {
		get: function() {
			return this.yearinfo.nextyearlen;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "mdaymask", {
		get: function() {
			return this.yearinfo.mdaymask;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e.prototype, "nmdaymask", {
		get: function() {
			return this.yearinfo.nmdaymask;
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.ydayset = function() {
		return [
			my(this.yearlen),
			0,
			this.yearlen
		];
	}, e.prototype.mdayset = function(e, t) {
		for (var n = this.mrange[t - 1], r = this.mrange[t], i = U(null, this.yearlen), a = n; a < r; a++) i[a] = a;
		return [
			i,
			n,
			r
		];
	}, e.prototype.wdayset = function(e, t, n) {
		for (var r = U(null, this.yearlen + 7), i = My(Cy(e, t, n)) - this.yearordinal, a = i, o = 0; o < 7 && (r[i] = i, ++i, this.wdaymask[i] !== this.options.wkst); o++);
		return [
			r,
			a,
			i
		];
	}, e.prototype.ddayset = function(e, t, n) {
		var r = U(null, this.yearlen), i = My(Cy(e, t, n)) - this.yearordinal;
		return r[i] = i, [
			r,
			i,
			i + 1
		];
	}, e.prototype.htimeset = function(e, t, n, r) {
		var i = this, a = [];
		return this.options.byminute.forEach(function(t) {
			a = a.concat(i.mtimeset(e, t, n, r));
		}), By(a), a;
	}, e.prototype.mtimeset = function(e, t, n, r) {
		var i = this.options.bysecond.map(function(n) {
			return new cb(e, t, n, r);
		});
		return By(i), i;
	}, e.prototype.stimeset = function(e, t, n, r) {
		return [new cb(e, t, n, r)];
	}, e.prototype.getdayset = function(e) {
		switch (e) {
			case G.YEARLY: return this.ydayset.bind(this);
			case G.MONTHLY: return this.mdayset.bind(this);
			case G.WEEKLY: return this.wdayset.bind(this);
			case G.DAILY: return this.ddayset.bind(this);
			default: return this.ddayset.bind(this);
		}
	}, e.prototype.gettimeset = function(e) {
		switch (e) {
			case G.HOURLY: return this.htimeset.bind(this);
			case G.MINUTELY: return this.mtimeset.bind(this);
			case G.SECONDLY: return this.stimeset.bind(this);
		}
	}, e;
}();
//#endregion
//#region node_modules/rrule/dist/esm/iter/poslist.js
function qb(e, t, n, r, i, a) {
	for (var o = [], s = 0; s < e.length; s++) {
		var c = void 0, l = void 0, u = e[s];
		u < 0 ? (c = Math.floor(u / t.length), l = vy(u, t.length)) : (c = Math.floor((u - 1) / t.length), l = vy(u - 1, t.length));
		for (var d = [], f = n; f < r; f++) {
			var p = a[f];
			uy(p) && d.push(p);
		}
		var m = void 0;
		m = c < 0 ? d.slice(c)[0] : d[c];
		var h = t[l], g = Ly(Ny(i.yearordinal + m), h);
		Sy(o, g) || o.push(g);
	}
	return By(o), o;
}
//#endregion
//#region node_modules/rrule/dist/esm/iter/index.js
function Jb(e, t) {
	var n = t.dtstart, r = t.freq, i = t.interval, a = t.until, o = t.bysetpos, s = t.count;
	if (s === 0 || i === 0) return Zb(e);
	var c = lb.fromDate(n), l = new Kb(t);
	l.rebuild(c.year, c.month);
	for (var u = $b(l, c, t);;) {
		var d = l.getdayset(r)(c.year, c.month, c.day), f = d[0], p = d[1], m = d[2], h = Qb(f, p, m, l, t);
		if (xy(o)) for (var g = qb(o, u, p, m, l, f), _ = 0; _ < g.length; _++) {
			var v = g[_];
			if (a && v > a) return Zb(e);
			if (v >= n) {
				var y = Xb(v, t);
				if (!e.accept(y) || s && (--s, !s)) return Zb(e);
			}
		}
		else for (var _ = p; _ < m; _++) {
			var b = f[_];
			if (uy(b)) for (var x = Ny(l.yearordinal + b), S = 0; S < u.length; S++) {
				var C = u[S], v = Ly(x, C);
				if (a && v > a) return Zb(e);
				if (v >= n) {
					var y = Xb(v, t);
					if (!e.accept(y) || s && (--s, !s)) return Zb(e);
				}
			}
		}
		if (t.interval === 0 || (c.add(t, h), c.year > 9999)) return Zb(e);
		rb(r) || (u = l.gettimeset(r)(c.hour, c.minute, c.second, 0)), l.rebuild(c.year, c.month);
	}
}
function Yb(e, t, n) {
	var r = n.bymonth, i = n.byweekno, a = n.byweekday, o = n.byeaster, s = n.bymonthday, c = n.bynmonthday, l = n.byyearday;
	return xy(r) && !Sy(r, e.mmask[t]) || xy(i) && !e.wnomask[t] || xy(a) && !Sy(a, e.wdaymask[t]) || xy(e.nwdaymask) && !e.nwdaymask[t] || o !== null && !Sy(e.eastermask, t) || (xy(s) || xy(c)) && !Sy(s, e.mdaymask[t]) && !Sy(c, e.nmdaymask[t]) || xy(l) && (t < e.yearlen && !Sy(l, t + 1) && !Sy(l, -e.yearlen + t) || t >= e.yearlen && !Sy(l, t + 1 - e.yearlen) && !Sy(l, -e.nextyearlen + t - e.yearlen));
}
function Xb(e, t) {
	return new bb(e, t.tzid).rezonedDate();
}
function Zb(e) {
	return e.getValue();
}
function Qb(e, t, n, r, i) {
	for (var a = !1, o = t; o < n; o++) {
		var s = e[o];
		a = Yb(r, s, i), a && (e[s] = null);
	}
	return a;
}
function $b(e, t, n) {
	var r = n.freq, i = n.byhour, a = n.byminute, o = n.bysecond;
	return rb(r) ? fb(n) : r >= K.HOURLY && xy(i) && !Sy(i, t.hour) || r >= K.MINUTELY && xy(a) && !Sy(a, t.minute) || r >= K.SECONDLY && xy(o) && !Sy(o, t.second) ? [] : e.gettimeset(r)(t.hour, t.minute, t.second, t.millisecond);
}
//#endregion
//#region node_modules/rrule/dist/esm/rrule.js
var ex = {
	MO: new ly(0),
	TU: new ly(1),
	WE: new ly(2),
	TH: new ly(3),
	FR: new ly(4),
	SA: new ly(5),
	SU: new ly(6)
}, tx = {
	freq: G.YEARLY,
	dtstart: null,
	interval: 1,
	wkst: ex.MO,
	count: null,
	until: null,
	tzid: null,
	bysetpos: null,
	bymonth: null,
	bymonthday: null,
	bynmonthday: null,
	byyearday: null,
	byweekno: null,
	byweekday: null,
	bynweekday: null,
	byhour: null,
	byminute: null,
	bysecond: null,
	byeaster: null
}, nx = Object.keys(tx), K = function() {
	function e(e, t) {
		e === void 0 && (e = {}), t === void 0 && (t = !1), this._cache = t ? null : new wb(), this.origOptions = ub(e);
		var n = db(e).parsedOptions;
		this.options = n;
	}
	return e.parseText = function(e, t) {
		return nb(e, t);
	}, e.fromText = function(e, t) {
		return ib(e, t);
	}, e.fromString = function(t) {
		return new e(e.parseString(t) || void 0);
	}, e.prototype._iter = function(e) {
		return Jb(e, this.options);
	}, e.prototype._cacheGet = function(e, t) {
		return this._cache ? this._cache._cacheGet(e, t) : !1;
	}, e.prototype._cacheAdd = function(e, t, n) {
		if (this._cache) return this._cache._cacheAdd(e, t, n);
	}, e.prototype.all = function(e) {
		if (e) return this._iter(new Yy("all", {}, e));
		var t = this._cacheGet("all");
		return t === !1 && (t = this._iter(new Gy("all", {})), this._cacheAdd("all", t)), t;
	}, e.prototype.between = function(e, t, n, r) {
		if (n === void 0 && (n = !1), !Ay(e) || !Ay(t)) throw Error("Invalid date passed in to RRule.between");
		var i = {
			before: t,
			after: e,
			inc: n
		};
		if (r) return this._iter(new Yy("between", i, r));
		var a = this._cacheGet("between", i);
		return a === !1 && (a = this._iter(new Gy("between", i)), this._cacheAdd("between", a, i)), a;
	}, e.prototype.before = function(e, t) {
		if (t === void 0 && (t = !1), !Ay(e)) throw Error("Invalid date passed in to RRule.before");
		var n = {
			dt: e,
			inc: t
		}, r = this._cacheGet("before", n);
		return r === !1 && (r = this._iter(new Gy("before", n)), this._cacheAdd("before", r, n)), r;
	}, e.prototype.after = function(e, t) {
		if (t === void 0 && (t = !1), !Ay(e)) throw Error("Invalid date passed in to RRule.after");
		var n = {
			dt: e,
			inc: t
		}, r = this._cacheGet("after", n);
		return r === !1 && (r = this._iter(new Gy("after", n)), this._cacheAdd("after", r, n)), r;
	}, e.prototype.count = function() {
		return this.all().length;
	}, e.prototype.toString = function() {
		return xb(this.origOptions);
	}, e.prototype.toText = function(e, t, n) {
		return ob(this, e, t, n);
	}, e.prototype.isFullyConvertibleToText = function() {
		return sb(this);
	}, e.prototype.clone = function() {
		return new e(this.origOptions);
	}, e.FREQUENCIES = [
		"YEARLY",
		"MONTHLY",
		"WEEKLY",
		"DAILY",
		"HOURLY",
		"MINUTELY",
		"SECONDLY"
	], e.YEARLY = G.YEARLY, e.MONTHLY = G.MONTHLY, e.WEEKLY = G.WEEKLY, e.DAILY = G.DAILY, e.HOURLY = G.HOURLY, e.MINUTELY = G.MINUTELY, e.SECONDLY = G.SECONDLY, e.MO = ex.MO, e.TU = ex.TU, e.WE = ex.WE, e.TH = ex.TH, e.FR = ex.FR, e.SA = ex.SA, e.SU = ex.SU, e.parseString = pb, e.optionsToString = xb, e;
}();
//#endregion
//#region node_modules/rrule/dist/esm/iterset.js
function rx(e, t, n, r, i, a) {
	var o = {}, s = e.accept;
	function c(e, t) {
		n.forEach(function(n) {
			n.between(e, t, !0).forEach(function(e) {
				o[Number(e)] = !0;
			});
		});
	}
	i.forEach(function(e) {
		var t = new bb(e, a).rezonedDate();
		o[Number(t)] = !0;
	}), e.accept = function(e) {
		var t = Number(e);
		return isNaN(t) ? s.call(this, e) : !o[t] && (c(/* @__PURE__ */ new Date(t - 1), new Date(t + 1)), !o[t]) ? (o[t] = !0, s.call(this, e)) : !0;
	}, e.method === "between" && (c(e.args.after, e.args.before), e.accept = function(e) {
		var t = Number(e);
		return o[t] ? !0 : (o[t] = !0, s.call(this, e));
	});
	for (var l = 0; l < r.length; l++) {
		var u = new bb(r[l], a).rezonedDate();
		if (!e.accept(new Date(u.getTime()))) break;
	}
	t.forEach(function(t) {
		Jb(e, t.options);
	});
	var d = e._result;
	switch (By(d), e.method) {
		case "all":
		case "between": return d;
		case "before": return d.length && d[d.length - 1] || null;
		default: return d.length && d[0] || null;
	}
}
//#endregion
//#region node_modules/rrule/dist/esm/rrulestr.js
var ix = {
	dtstart: null,
	cache: !1,
	unfold: !1,
	forceset: !1,
	compatible: !1,
	tzid: null
};
function ax(e, t) {
	var n = [], r = [], i = [], a = [], o = mb(e), s = o.dtstart, c = o.tzid;
	return fx(e, t.unfold).forEach(function(e) {
		if (e) {
			var t = dx(e), o = t.name, s = t.parms, l = t.value;
			switch (o.toUpperCase()) {
				case "RRULE":
					if (s.length) throw Error(`unsupported RRULE parm: ${s.join(",")}`);
					n.push(pb(e));
					break;
				case "RDATE":
					var u = (/RDATE(?:;TZID=([^:=]+))?/i.exec(e) ?? [])[1];
					u && !c && (c = u), r = r.concat(mx(l, s));
					break;
				case "EXRULE":
					if (s.length) throw Error(`unsupported EXRULE parm: ${s.join(",")}`);
					i.push(pb(l));
					break;
				case "EXDATE":
					a = a.concat(mx(l, s));
					break;
				case "DTSTART": break;
				default: throw Error("unsupported property: " + o);
			}
		}
	}), {
		dtstart: s,
		tzid: c,
		rrulevals: n,
		rdatevals: r,
		exrulevals: i,
		exdatevals: a
	};
}
function ox(e, t) {
	var n = ax(e, t), r = n.rrulevals, i = n.rdatevals, a = n.exrulevals, o = n.exdatevals, s = n.dtstart, c = n.tzid, l = t.cache === !1;
	if (t.compatible && (t.forceset = !0, t.unfold = !0), t.forceset || r.length > 1 || i.length || a.length || o.length) {
		var u = new gx(l);
		return u.dtstart(s), u.tzid(c || void 0), r.forEach(function(e) {
			u.rrule(new K(cx(e, s, c), l));
		}), i.forEach(function(e) {
			u.rdate(e);
		}), a.forEach(function(e) {
			u.exrule(new K(cx(e, s, c), l));
		}), o.forEach(function(e) {
			u.exdate(e);
		}), t.compatible && t.dtstart && u.rdate(s), u;
	}
	var d = r[0] || {};
	return new K(cx(d, d.dtstart || t.dtstart || s, d.tzid || t.tzid || c), l);
}
function sx(e, t) {
	return t === void 0 && (t = {}), ox(e, lx(t));
}
function cx(e, t, n) {
	return Jy(Jy({}, e), {
		dtstart: t,
		tzid: n
	});
}
function lx(e) {
	var t = [], n = Object.keys(e), r = Object.keys(ix);
	if (n.forEach(function(e) {
		Sy(r, e) || t.push(e);
	}), t.length) throw Error("Invalid options: " + t.join(", "));
	return Jy(Jy({}, ix), e);
}
function ux(e) {
	if (e.indexOf(":") === -1) return {
		name: "RRULE",
		value: e
	};
	var t = _y(e, ":", 1);
	return {
		name: t[0],
		value: t[1]
	};
}
function dx(e) {
	var t = ux(e), n = t.name, r = t.value, i = n.split(";");
	if (!i) throw Error("empty property name");
	return {
		name: i[0].toUpperCase(),
		parms: i.slice(1),
		value: r
	};
}
function fx(e, t) {
	if (t === void 0 && (t = !1), e &&= e.trim(), !e) throw Error("Invalid empty string");
	if (!t) return e.split(/\s/);
	for (var n = e.split("\n"), r = 0; r < n.length;) {
		var i = n[r] = n[r].replace(/\s+$/g, "");
		i ? r > 0 && i[0] === " " ? (n[r - 1] += i.slice(1), n.splice(r, 1)) : r += 1 : n.splice(r, 1);
	}
	return n;
}
function px(e) {
	e.forEach(function(e) {
		if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e);
	});
}
function mx(e, t) {
	return px(t), e.split(",").map(function(e) {
		return Hy(e);
	});
}
//#endregion
//#region node_modules/rrule/dist/esm/rruleset.js
function hx(e) {
	var t = this;
	return function(n) {
		if (n !== void 0 && (t[`_${e}`] = n), t[`_${e}`] !== void 0) return t[`_${e}`];
		for (var r = 0; r < t._rrule.length; r++) {
			var i = t._rrule[r].origOptions[e];
			if (i) return i;
		}
	};
}
var gx = function(e) {
	qy(t, e);
	function t(t) {
		t === void 0 && (t = !1);
		var n = e.call(this, {}, t) || this;
		return n.dtstart = hx.apply(n, ["dtstart"]), n.tzid = hx.apply(n, ["tzid"]), n._rrule = [], n._rdate = [], n._exrule = [], n._exdate = [], n;
	}
	return t.prototype._iter = function(e) {
		return rx(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
	}, t.prototype.rrule = function(e) {
		_x(e, this._rrule);
	}, t.prototype.exrule = function(e) {
		_x(e, this._exrule);
	}, t.prototype.rdate = function(e) {
		vx(e, this._rdate);
	}, t.prototype.exdate = function(e) {
		vx(e, this._exdate);
	}, t.prototype.rrules = function() {
		return this._rrule.map(function(e) {
			return sx(e.toString());
		});
	}, t.prototype.exrules = function() {
		return this._exrule.map(function(e) {
			return sx(e.toString());
		});
	}, t.prototype.rdates = function() {
		return this._rdate.map(function(e) {
			return new Date(e.getTime());
		});
	}, t.prototype.exdates = function() {
		return this._exdate.map(function(e) {
			return new Date(e.getTime());
		});
	}, t.prototype.valueOf = function() {
		var e = [];
		return !this._rrule.length && this._dtstart && (e = e.concat(xb({ dtstart: this._dtstart }))), this._rrule.forEach(function(t) {
			e = e.concat(t.toString().split("\n"));
		}), this._exrule.forEach(function(t) {
			e = e.concat(t.toString().split("\n").map(function(e) {
				return e.replace(/^RRULE:/, "EXRULE:");
			}).filter(function(e) {
				return !/^DTSTART/.test(e);
			}));
		}), this._rdate.length && e.push(yx("RDATE", this._rdate, this.tzid())), this._exdate.length && e.push(yx("EXDATE", this._exdate, this.tzid())), e;
	}, t.prototype.toString = function() {
		return this.valueOf().join("\n");
	}, t.prototype.clone = function() {
		var e = new t(!!this._cache);
		return this._rrule.forEach(function(t) {
			return e.rrule(t.clone());
		}), this._exrule.forEach(function(t) {
			return e.exrule(t.clone());
		}), this._rdate.forEach(function(t) {
			return e.rdate(new Date(t.getTime()));
		}), this._exdate.forEach(function(t) {
			return e.exdate(new Date(t.getTime()));
		}), e;
	}, t;
}(K);
function _x(e, t) {
	if (!(e instanceof K)) throw TypeError(String(e) + " is not RRule instance");
	Sy(t.map(String), String(e)) || t.push(e);
}
function vx(e, t) {
	if (!(e instanceof Date)) throw TypeError(String(e) + " is not Date instance");
	Sy(t.map(Number), Number(e)) || (t.push(e), By(t));
}
function yx(e, t, n) {
	var r = !n || n.toUpperCase() === "UTC";
	return `${r ? `${e}:` : `${e};TZID=${n}:`}${t.map(function(e) {
		return Vy(e.valueOf(), r);
	}).join(",")}`;
}
//#endregion
//#region node_modules/@fullcalendar/rrule/node_modules/@fullcalendar/core/protected-api.js
function bx(e) {
	return e;
}
//#endregion
//#region node_modules/@fullcalendar/rrule/index.js
var xx = {
	parse(e, t) {
		if (e.rrule != null) {
			let n = Sx(e, t);
			if (n) return {
				typeData: {
					rruleSet: n.rruleSet,
					dateEnv: n.isTimeZoneSpecified ? void 0 : t
				},
				allDayGuess: !n.isTimeSpecified,
				duration: e.duration
			};
		}
		return null;
	},
	expand(e, t, n) {
		return e.rruleSet.between(O(t.start, -1), O(t.end, 1)).map((t) => n.createMarker(e.dateEnv ? e.dateEnv.toDate(t) : t));
	}
};
function Sx(e, t) {
	let n, r = !1, i = !1;
	if (typeof e.rrule == "string") {
		let t = wx(e.rrule);
		n = t.rruleSet, r = t.isTimeSpecified, i = t.isTimeZoneSpecified;
	}
	if (typeof e.rrule == "object" && e.rrule) {
		let a = Cx(e.rrule, t);
		n = new gx(), n.rrule(a.rrule), r = a.isTimeSpecified, i = a.isTimeZoneSpecified;
	}
	let a = [].concat(e.exdate || []), o = [].concat(e.exrule || []);
	for (let e of a) {
		let t = Zo(e);
		r ||= !t.isTimeUnspecified, i ||= t.timeZoneOffset !== null, n.exdate(/* @__PURE__ */ new Date(t.marker.valueOf() - (t.timeZoneOffset || 0) * 60 * 1e3));
	}
	for (let e of o) {
		let a = Cx(e, t);
		r ||= a.isTimeSpecified, i ||= a.isTimeZoneSpecified, n.exrule(a.rrule);
	}
	return {
		rruleSet: n,
		isTimeSpecified: r,
		isTimeZoneSpecified: i
	};
}
function Cx(e, t) {
	let n = !1, r = !1;
	function i(e) {
		if (typeof e == "string") {
			let t = Zo(e);
			return t ? (n ||= !t.isTimeUnspecified, r ||= t.timeZoneOffset !== null, /* @__PURE__ */ new Date(t.marker.valueOf() - (t.timeZoneOffset || 0) * 60 * 1e3)) : null;
		}
		return e;
	}
	return {
		rrule: new K({
			...e,
			dtstart: i(e.dtstart),
			until: i(e.until),
			freq: Dx(e.freq),
			wkst: e.wkst == null ? (t.weekDow - 1 + 7) % 7 : Dx(e.wkst),
			byweekday: Ex(e.byweekday)
		}),
		isTimeSpecified: n,
		isTimeZoneSpecified: r
	};
}
function wx(e) {
	return {
		rruleSet: sx(e, { forceset: !0 }),
		...Tx(e)
	};
}
function Tx(e) {
	let t = !1, n = !1;
	function r(e, r, i) {
		let a = Zo(i);
		t ||= !a.isTimeUnspecified, n ||= a.timeZoneOffset !== null;
	}
	return e.replace(/\b(DTSTART:)([^\n]*)/, r), e.replace(/\b(EXDATE:)([^\n]*)/, r), e.replace(/\b(UNTIL=)([^;\n]*)/, r), {
		isTimeSpecified: t,
		isTimeZoneSpecified: n
	};
}
function Ex(e) {
	return Array.isArray(e) ? e.map(Dx) : Dx(e);
}
function Dx(e) {
	return typeof e == "string" ? K[e.toUpperCase()] : e;
}
var Ox = {
	name: "rrule",
	recurringTypes: [xx],
	eventRefiners: {
		rrule: bx,
		exrule: bx,
		exdate: bx,
		duration: A
	}
}, kx = class extends Error {
	constructor(e, t) {
		super(e), this.response = t;
	}
};
function Ax(e, t, n) {
	e = e.toUpperCase();
	let r = { method: e };
	return e === "GET" ? t += (t.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = { "Content-Type": "application/x-www-form-urlencoded" }), fetch(t, r).then((e) => {
		if (e.ok) return e.json().then((t) => [t, e], () => {
			throw new kx("Failure parsing JSON", e);
		});
		throw new kx("Request failed", e);
	});
}
function jx(e) {
	return e;
}
//#endregion
//#region node_modules/@fullcalendar/google-calendar/index.js
var Mx = "https://www.googleapis.com/calendar/v3/calendars", Nx = {
	parseMeta(e) {
		let { googleCalendarId: t } = e;
		return !t && e.url && (t = Px(e.url)), t ? {
			googleCalendarId: t,
			googleCalendarApiKey: e.googleCalendarApiKey,
			googleCalendarApiBase: e.googleCalendarApiBase,
			extraParams: e.extraParams
		} : null;
	},
	fetch(e, t, n) {
		let { dateEnv: r, options: i } = e.context, a = e.eventSource.meta, o = a.googleCalendarApiKey || i.googleCalendarApiKey;
		if (!o) n(/* @__PURE__ */ Error("Specify a googleCalendarApiKey. See https://fullcalendar.io/docs/google-calendar"));
		else {
			let i = Fx(a), { extraParams: s } = a, c = typeof s == "function" ? s() : s, l = Ix(e.range, o, c, r);
			return Ax("GET", i, l).then(([e, r]) => {
				e.error ? n(new kx("Google Calendar API: " + e.error.message, r)) : t({
					rawEvents: Lx(e.items, l.timeZone),
					response: r
				});
			}, n);
		}
	}
};
function Px(e) {
	let t;
	return /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e) ? e : (t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e)) ? decodeURIComponent(t[1]) : null;
}
function Fx(e) {
	let t = e.googleCalendarApiBase;
	return t ||= Mx, t + "/" + encodeURIComponent(e.googleCalendarId) + "/events";
}
function Ix(e, t, n, r) {
	let i, a = r.formatIso(e.start), o = r.formatIso(e.end);
	return i = {
		...n || {},
		key: t,
		timeMin: a,
		timeMax: o,
		singleEvents: !0,
		maxResults: 9999
	}, r.timeZone !== "local" && (i.timeZone = r.timeZone), i;
}
function Lx(e, t) {
	return e.map((e) => Rx(e, t));
}
function Rx(e, t) {
	let n = e.htmlLink || null;
	return n && t && (n = zx(n, "ctz=" + t)), {
		id: e.id,
		title: e.summary,
		start: e.start.dateTime || e.start.date,
		end: e.end.dateTime || e.end.date,
		url: n,
		location: e.location,
		description: e.description,
		attachments: e.attachments || [],
		extendedProps: (e.extendedProperties || {}).shared || {}
	};
}
function zx(e, t) {
	return e.replace(/(\?.*?)?(#|$)/, (e, n, r) => (n ? n + "&" : "?") + t + r);
}
var Bx = {
	name: "google-calendar",
	eventSourceDefs: [Nx],
	optionRefiners: { googleCalendarApiKey: String },
	eventSourceRefiners: {
		googleCalendarApiKey: String,
		googleCalendarId: String,
		googleCalendarApiBase: String,
		extraParams: jx
	}
}, Vx = class e {
	static fromString(t) {
		return new e(t);
	}
	constructor(e) {
		this.value = e;
	}
	icaltype = "binary";
	decodeValue() {
		return this._b64_decode(this.value);
	}
	setEncodedValue(e) {
		this.value = this._b64_encode(e);
	}
	_b64_encode(e) {
		let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n, r, i, a, o, s, c, l, u = 0, d = 0, f = "", p = [];
		if (!e) return e;
		do
			n = e.charCodeAt(u++), r = e.charCodeAt(u++), i = e.charCodeAt(u++), l = n << 16 | r << 8 | i, a = l >> 18 & 63, o = l >> 12 & 63, s = l >> 6 & 63, c = l & 63, p[d++] = t.charAt(a) + t.charAt(o) + t.charAt(s) + t.charAt(c);
		while (u < e.length);
		f = p.join("");
		let m = e.length % 3;
		return (m ? f.slice(0, m - 3) : f) + "===".slice(m || 3);
	}
	_b64_decode(e) {
		let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n, r, i, a, o, s, c, l, u = 0, d = 0, f = "", p = [];
		if (!e) return e;
		e += "";
		do
			a = t.indexOf(e.charAt(u++)), o = t.indexOf(e.charAt(u++)), s = t.indexOf(e.charAt(u++)), c = t.indexOf(e.charAt(u++)), l = a << 18 | o << 12 | s << 6 | c, n = l >> 16 & 255, r = l >> 8 & 255, i = l & 255, s == 64 ? p[d++] = String.fromCharCode(n) : c == 64 ? p[d++] = String.fromCharCode(n, r) : p[d++] = String.fromCharCode(n, r, i);
		while (u < e.length);
		return f = p.join(""), f;
	}
	toString() {
		return this.value;
	}
}, Hx = /([PDWHMTS]{1,1})/, Ux = [
	"weeks",
	"days",
	"hours",
	"minutes",
	"seconds",
	"isNegative"
], Wx = class e {
	static fromSeconds(t) {
		return new e().fromSeconds(t);
	}
	static isValueString(e) {
		return e[0] === "P" || e[1] === "P";
	}
	static fromString(t) {
		let n = 0, r = Object.create(null), i = 0;
		for (; (n = t.search(Hx)) !== -1;) {
			let e = t[n], a = t.slice(0, Math.max(0, n));
			t = t.slice(n + 1), i += Gx(e, a, r);
		}
		if (i < 2) throw Error("invalid duration value: Not enough duration components in \"" + t + "\"");
		return new e(r);
	}
	static fromData(t) {
		return new e(t);
	}
	constructor(e) {
		this.wrappedJSObject = this, this.fromData(e);
	}
	weeks = 0;
	days = 0;
	hours = 0;
	minutes = 0;
	seconds = 0;
	isNegative = !1;
	icalclass = "icalduration";
	icaltype = "duration";
	clone() {
		return e.fromData(this);
	}
	toSeconds() {
		let e = this.seconds + 60 * this.minutes + 3600 * this.hours + 86400 * this.days + 604800 * this.weeks;
		return this.isNegative ? -e : e;
	}
	fromSeconds(e) {
		let t = Math.abs(e);
		return this.isNegative = e < 0, this.days = mS(t / 86400), this.days % 7 == 0 ? (this.weeks = this.days / 7, this.days = 0) : this.weeks = 0, t -= (this.days + 7 * this.weeks) * 86400, this.hours = mS(t / 3600), t -= this.hours * 3600, this.minutes = mS(t / 60), t -= this.minutes * 60, this.seconds = t, this;
	}
	fromData(e) {
		for (let t of Ux) this[t] = e && t in e ? e[t] : 0;
	}
	reset() {
		this.isNegative = !1, this.weeks = 0, this.days = 0, this.hours = 0, this.minutes = 0, this.seconds = 0;
	}
	compare(e) {
		let t = this.toSeconds(), n = e.toSeconds();
		return (t > n) - (t < n);
	}
	normalize() {
		this.fromSeconds(this.toSeconds());
	}
	toString() {
		if (this.toSeconds() == 0) return "PT0S";
		{
			let e = "";
			this.isNegative && (e += "-"), e += "P";
			let t = !1;
			return this.weeks ? this.days || this.hours || this.minutes || this.seconds ? e += this.weeks * 7 + this.days + "D" : (e += this.weeks + "W", t = !0) : this.days && (e += this.days + "D"), t || (this.hours || this.minutes || this.seconds) && (e += "T", this.hours && (e += this.hours + "H"), this.minutes && (e += this.minutes + "M"), this.seconds && (e += this.seconds + "S")), e;
		}
	}
	toICALString() {
		return this.toString();
	}
};
function Gx(e, t, n) {
	let r;
	switch (e) {
		case "P":
			n.isNegative = !!(t && t === "-");
			break;
		case "D":
			r = "days";
			break;
		case "W":
			r = "weeks";
			break;
		case "H":
			r = "hours";
			break;
		case "M":
			r = "minutes";
			break;
		case "S":
			r = "seconds";
			break;
		default: return 0;
	}
	if (r) {
		if (!t && t !== 0) throw Error("invalid duration value: Missing number before \"" + e + "\"");
		let i = parseInt(t, 10);
		if (oS(i)) throw Error("invalid duration value: Invalid number \"" + t + "\" before \"" + e + "\"");
		n[r] = i;
	}
	return 1;
}
var Kx = class e {
	static fromString(t, n) {
		let r = t.split("/");
		if (r.length !== 2) throw Error("Invalid string value: \"" + t + "\" must contain a \"/\" char.");
		let i = { start: q.fromDateTimeString(r[0], n) }, a = r[1];
		return Wx.isValueString(a) ? i.duration = Wx.fromString(a) : i.end = q.fromDateTimeString(a, n), new e(i);
	}
	static fromData(t) {
		return new e(t);
	}
	static fromJSON(t, n, r) {
		function i(e, t) {
			return r ? q.fromString(e, t) : q.fromDateTimeString(e, t);
		}
		return Wx.isValueString(t[1]) ? e.fromData({
			start: i(t[0], n),
			duration: Wx.fromString(t[1])
		}) : e.fromData({
			start: i(t[0], n),
			end: i(t[1], n)
		});
	}
	constructor(e) {
		if (this.wrappedJSObject = this, e && "start" in e) {
			if (e.start && !(e.start instanceof q)) throw TypeError(".start must be an instance of ICAL.Time");
			this.start = e.start;
		}
		if (e && e.end && e.duration) throw Error("cannot accept both end and duration");
		if (e && "end" in e) {
			if (e.end && !(e.end instanceof q)) throw TypeError(".end must be an instance of ICAL.Time");
			this.end = e.end;
		}
		if (e && "duration" in e) {
			if (e.duration && !(e.duration instanceof Wx)) throw TypeError(".duration must be an instance of ICAL.Duration");
			this.duration = e.duration;
		}
	}
	start = null;
	end = null;
	duration = null;
	icalclass = "icalperiod";
	icaltype = "period";
	clone() {
		return e.fromData({
			start: this.start ? this.start.clone() : null,
			end: this.end ? this.end.clone() : null,
			duration: this.duration ? this.duration.clone() : null
		});
	}
	getDuration() {
		return this.duration ? this.duration : this.end.subtractDate(this.start);
	}
	getEnd() {
		if (this.end) return this.end;
		{
			let e = this.start.clone();
			return e.addDuration(this.duration), e;
		}
	}
	compare(e) {
		return e.compare(this.start) < 0 ? 1 : e.compare(this.getEnd()) > 0 ? -1 : 0;
	}
	toString() {
		return this.start + "/" + (this.end || this.duration);
	}
	toJSON() {
		return [this.start.toString(), (this.end || this.duration).toString()];
	}
	toICALString() {
		return this.start.toICALString() + "/" + (this.end || this.duration).toICALString();
	}
}, q = class e {
	static _dowCache = {};
	static _wnCache = {};
	static daysInMonth(t, n) {
		let r = [
			0,
			31,
			28,
			31,
			30,
			31,
			30,
			31,
			31,
			30,
			31,
			30,
			31
		], i = 30;
		return t < 1 || t > 12 ? i : (i = r[t], t == 2 && (i += e.isLeapYear(n)), i);
	}
	static isLeapYear(e) {
		return e <= 1752 ? e % 4 == 0 : e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
	}
	static fromDayOfYear(t, n) {
		let r = n, i = t, a = new e();
		a.auto_normalize = !1;
		let o = +!!e.isLeapYear(r);
		if (i < 1) return r--, o = +!!e.isLeapYear(r), i += e.daysInYearPassedMonth[o][12], e.fromDayOfYear(i, r);
		if (i > e.daysInYearPassedMonth[o][12]) return o = +!!e.isLeapYear(r), i -= e.daysInYearPassedMonth[o][12], r++, e.fromDayOfYear(i, r);
		a.year = r, a.isDate = !0;
		for (let t = 11; t >= 0; t--) if (i > e.daysInYearPassedMonth[o][t]) {
			a.month = t + 1, a.day = i - e.daysInYearPassedMonth[o][t];
			break;
		}
		return a.auto_normalize = !0, a;
	}
	static fromStringv2(t) {
		return new e({
			year: parseInt(t.slice(0, 4), 10),
			month: parseInt(t.slice(5, 7), 10),
			day: parseInt(t.slice(8, 10), 10),
			isDate: !0
		});
	}
	static fromDateString(t) {
		return new e({
			year: sS(t.slice(0, 4)),
			month: sS(t.slice(5, 7)),
			day: sS(t.slice(8, 10)),
			isDate: !0
		});
	}
	static fromDateTimeString(t, n) {
		if (t.length < 19) throw Error("invalid date-time value: \"" + t + "\"");
		let r, i;
		t.slice(-1) === "Z" ? r = nS.utcTimezone : n && (i = n.getParameter("tzid"), n.parent && (n.parent.name === "standard" || n.parent.name === "daylight" ? r = nS.localTimezone : i && (r = n.parent.getTimeZoneByID(i))));
		let a = {
			year: sS(t.slice(0, 4)),
			month: sS(t.slice(5, 7)),
			day: sS(t.slice(8, 10)),
			hour: sS(t.slice(11, 13)),
			minute: sS(t.slice(14, 16)),
			second: sS(t.slice(17, 19))
		};
		return i && !r && (a.timezone = i), new e(a, r);
	}
	static fromString(t, n) {
		return t.length > 10 ? e.fromDateTimeString(t, n) : e.fromDateString(t);
	}
	static fromJSDate(t, n) {
		return new e().fromJSDate(t, n);
	}
	static fromData = function(t, n) {
		return new e().fromData(t, n);
	};
	static now() {
		return e.fromJSDate(/* @__PURE__ */ new Date(), !1);
	}
	static weekOneStarts(t, n) {
		let r = e.fromData({
			year: t,
			month: 1,
			day: 1,
			isDate: !0
		}), i = r.dayOfWeek(), a = n || e.DEFAULT_WEEK_START;
		return i > e.THURSDAY && (r.day += 7), a > e.THURSDAY && (r.day -= 7), r.day -= i - a, r;
	}
	static getDominicalLetter(t) {
		let n = "GFEDCBA", r = (t + (t / 4 | 0) + (t / 400 | 0) - (t / 100 | 0) - 1) % 7;
		return e.isLeapYear(t) ? n[(r + 6) % 7] + n[r] : n[r];
	}
	static #e = null;
	static get epochTime() {
		return this.#e ||= e.fromData({
			year: 1970,
			month: 1,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			isDate: !1,
			timezone: "Z"
		}), this.#e;
	}
	static _cmp_attr(e, t, n) {
		return e[n] > t[n] ? 1 : e[n] < t[n] ? -1 : 0;
	}
	static daysInYearPassedMonth = [[
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334,
		365
	], [
		0,
		31,
		60,
		91,
		121,
		152,
		182,
		213,
		244,
		274,
		305,
		335,
		366
	]];
	static SUNDAY = 1;
	static MONDAY = 2;
	static TUESDAY = 3;
	static WEDNESDAY = 4;
	static THURSDAY = 5;
	static FRIDAY = 6;
	static SATURDAY = 7;
	static DEFAULT_WEEK_START = 2;
	constructor(e, t) {
		this.wrappedJSObject = this, this._time = Object.create(null), this._time.year = 0, this._time.month = 1, this._time.day = 1, this._time.hour = 0, this._time.minute = 0, this._time.second = 0, this._time.isDate = !1, this.fromData(e, t);
	}
	icalclass = "icaltime";
	_cachedUnixTime = null;
	get icaltype() {
		return this.isDate ? "date" : "date-time";
	}
	zone = null;
	_pendingNormalization = !1;
	get year() {
		return this._getTimeAttr("year");
	}
	set year(e) {
		this._setTimeAttr("year", e);
	}
	get month() {
		return this._getTimeAttr("month");
	}
	set month(e) {
		this._setTimeAttr("month", e);
	}
	get day() {
		return this._getTimeAttr("day");
	}
	set day(e) {
		this._setTimeAttr("day", e);
	}
	get hour() {
		return this._getTimeAttr("hour");
	}
	set hour(e) {
		this._setTimeAttr("hour", e);
	}
	get minute() {
		return this._getTimeAttr("minute");
	}
	set minute(e) {
		this._setTimeAttr("minute", e);
	}
	get second() {
		return this._getTimeAttr("second");
	}
	set second(e) {
		this._setTimeAttr("second", e);
	}
	get isDate() {
		return this._getTimeAttr("isDate");
	}
	set isDate(e) {
		this._setTimeAttr("isDate", e);
	}
	_getTimeAttr(e) {
		return this._pendingNormalization &&= (this._normalize(), !1), this._time[e];
	}
	_setTimeAttr(e, t) {
		e === "isDate" && t && !this._time.isDate && this.adjust(0, 0, 0, 0), this._cachedUnixTime = null, this._pendingNormalization = !0, this._time[e] = t;
	}
	clone() {
		return new e(this._time, this.zone);
	}
	reset() {
		this.fromData(e.epochTime), this.zone = nS.utcTimezone;
	}
	resetTo(e, t, n, r, i, a, o) {
		this.fromData({
			year: e,
			month: t,
			day: n,
			hour: r,
			minute: i,
			second: a,
			zone: o
		});
	}
	fromJSDate(e, t) {
		return e ? t ? (this.zone = nS.utcTimezone, this.year = e.getUTCFullYear(), this.month = e.getUTCMonth() + 1, this.day = e.getUTCDate(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds()) : (this.zone = nS.localTimezone, this.year = e.getFullYear(), this.month = e.getMonth() + 1, this.day = e.getDate(), this.hour = e.getHours(), this.minute = e.getMinutes(), this.second = e.getSeconds()) : this.reset(), this._cachedUnixTime = null, this;
	}
	fromData(e, t) {
		if (e) for (let [t, n] of Object.entries(e)) t !== "icaltype" && (this[t] = n);
		if (t && (this.zone = t), e && !("isDate" in e) ? this.isDate = !("hour" in e) : e && "isDate" in e && (this.isDate = e.isDate), e && "timezone" in e) {
			let t = iS.get(e.timezone);
			this.zone = t || nS.localTimezone;
		}
		return e && "zone" in e && (this.zone = e.zone), this.zone ||= nS.localTimezone, this._cachedUnixTime = null, this;
	}
	dayOfWeek(t) {
		let n = t || e.SUNDAY, r = (this.year << 12) + (this.month << 8) + (this.day << 3) + n;
		if (r in e._dowCache) return e._dowCache[r];
		let i = this.day, a = this.month + (this.month < 3 ? 12 : 0), o = this.year - +(this.month < 3), s = i + o + mS((a + 1) * 26 / 10) + mS(o / 4);
		return s += mS(o / 100) * 6 + mS(o / 400), s = (s + 7 - n) % 7 + 1, e._dowCache[r] = s, s;
	}
	dayOfYear() {
		let t = +!!e.isLeapYear(this.year);
		return e.daysInYearPassedMonth[t][this.month - 1] + this.day;
	}
	startOfWeek(t) {
		let n = t || e.SUNDAY, r = this.clone();
		return r.day -= (this.dayOfWeek() + 7 - n) % 7, r.isDate = !0, r.hour = 0, r.minute = 0, r.second = 0, r;
	}
	endOfWeek(t) {
		let n = t || e.SUNDAY, r = this.clone();
		return r.day += (7 - this.dayOfWeek() + n - e.SUNDAY) % 7, r.isDate = !0, r.hour = 0, r.minute = 0, r.second = 0, r;
	}
	startOfMonth() {
		let e = this.clone();
		return e.day = 1, e.isDate = !0, e.hour = 0, e.minute = 0, e.second = 0, e;
	}
	endOfMonth() {
		let t = this.clone();
		return t.day = e.daysInMonth(t.month, t.year), t.isDate = !0, t.hour = 0, t.minute = 0, t.second = 0, t;
	}
	startOfYear() {
		let e = this.clone();
		return e.day = 1, e.month = 1, e.isDate = !0, e.hour = 0, e.minute = 0, e.second = 0, e;
	}
	endOfYear() {
		let e = this.clone();
		return e.day = 31, e.month = 12, e.isDate = !0, e.hour = 0, e.minute = 0, e.second = 0, e;
	}
	startDoyWeek(t) {
		let n = t || e.SUNDAY, r = this.dayOfWeek() - n;
		return r < 0 && (r += 7), this.dayOfYear() - r;
	}
	getDominicalLetter() {
		return e.getDominicalLetter(this.year);
	}
	nthWeekDay(t, n) {
		let r = e.daysInMonth(this.month, this.year), i, a = n, o = 0, s = this.clone();
		if (a >= 0) {
			s.day = 1, a != 0 && a--, o = s.day;
			let e = t - s.dayOfWeek();
			e < 0 && (e += 7), o += e, o -= t, i = t;
		} else {
			s.day = r;
			let e = s.dayOfWeek();
			a++, i = e - t, i < 0 && (i += 7), i = r - i;
		}
		return i += a * 7, o + i;
	}
	isNthWeekDay(e, t) {
		let n = this.dayOfWeek();
		return t === 0 && n === e || this.nthWeekDay(e, t) === this.day;
	}
	weekNumber(t) {
		let n = (this.year << 12) + (this.month << 8) + (this.day << 3) + t;
		if (n in e._wnCache) return e._wnCache[n];
		let r, i = this.clone();
		i.isDate = !0;
		let a = this.year;
		i.month == 12 && i.day > 25 ? (r = e.weekOneStarts(a + 1, t), i.compare(r) < 0 ? r = e.weekOneStarts(a, t) : a++) : (r = e.weekOneStarts(a, t), i.compare(r) < 0 && (r = e.weekOneStarts(--a, t)));
		let o = mS(i.subtractDate(r).toSeconds() / 86400 / 7) + 1;
		return e._wnCache[n] = o, o;
	}
	addDuration(e) {
		let t = e.isNegative ? -1 : 1, n = this.second, r = this.minute, i = this.hour, a = this.day;
		n += t * e.seconds, r += t * e.minutes, i += t * e.hours, a += t * e.days, a += t * 7 * e.weeks, this.second = n, this.minute = r, this.hour = i, this.day = a, this._cachedUnixTime = null;
	}
	subtractDate(e) {
		let t = this.toUnixTime() + this.utcOffset(), n = e.toUnixTime() + e.utcOffset();
		return Wx.fromSeconds(t - n);
	}
	subtractDateTz(e) {
		let t = this.toUnixTime(), n = e.toUnixTime();
		return Wx.fromSeconds(t - n);
	}
	compare(e) {
		if (e instanceof Kx) return -1 * e.compare(this);
		{
			let t = this.toUnixTime(), n = e.toUnixTime();
			return t > n ? 1 : n > t ? -1 : 0;
		}
	}
	compareDateOnlyTz(t, n) {
		let r = this.convertToZone(n), i = t.convertToZone(n), a = 0;
		return (a = e._cmp_attr(r, i, "year")) != 0 || (a = e._cmp_attr(r, i, "month")) != 0 || (a = e._cmp_attr(r, i, "day")), a;
	}
	convertToZone(e) {
		let t = this.clone(), n = this.zone.tzid == e.tzid;
		return !this.isDate && !n && nS.convert_time(t, this.zone, e), t.zone = e, t;
	}
	utcOffset() {
		return this.zone == nS.localTimezone || this.zone == nS.utcTimezone ? 0 : this.zone.utcOffset(this);
	}
	toICALString() {
		let e = this.toString();
		return e.length > 10 ? X.icalendar.value["date-time"].toICAL(e) : X.icalendar.value.date.toICAL(e);
	}
	toString() {
		let e = this.year + "-" + pS(this.month) + "-" + pS(this.day);
		return this.isDate || (e += "T" + pS(this.hour) + ":" + pS(this.minute) + ":" + pS(this.second), this.zone === nS.utcTimezone && (e += "Z")), e;
	}
	toJSDate() {
		return this.zone == nS.localTimezone ? this.isDate ? new Date(this.year, this.month - 1, this.day) : new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, 0) : /* @__PURE__ */ new Date(this.toUnixTime() * 1e3);
	}
	_normalize() {
		return this._time.isDate && (this._time.hour = 0, this._time.minute = 0, this._time.second = 0), this.adjust(0, 0, 0, 0), this;
	}
	adjust(t, n, r, i, a) {
		let o, s, c = 0, l = 0, u, d, f, p, m, h = a || this._time;
		if (h.isDate || (u = h.second + i, h.second = u % 60, o = mS(u / 60), h.second < 0 && (h.second += 60, o--), d = h.minute + r + o, h.minute = d % 60, s = mS(d / 60), h.minute < 0 && (h.minute += 60, s--), f = h.hour + n + s, h.hour = f % 24, c = mS(f / 24), h.hour < 0 && (h.hour += 24, c--)), h.month > 12 ? l = mS((h.month - 1) / 12) : h.month < 1 && (l = mS(h.month / 12) - 1), h.year += l, h.month -= 12 * l, p = h.day + t + c, p > 0) for (; m = e.daysInMonth(h.month, h.year), !(p <= m);) h.month++, h.month > 12 && (h.year++, h.month = 1), p -= m;
		else for (; p <= 0;) h.month == 1 ? (h.year--, h.month = 12) : h.month--, p += e.daysInMonth(h.month, h.year);
		return h.day = p, this._cachedUnixTime = null, this;
	}
	fromUnixTime(e) {
		this.zone = nS.utcTimezone;
		let t = /* @__PURE__ */ new Date(e * 1e3);
		this.year = t.getUTCFullYear(), this.month = t.getUTCMonth() + 1, this.day = t.getUTCDate(), this._time.isDate ? (this.hour = 0, this.minute = 0, this.second = 0) : (this.hour = t.getUTCHours(), this.minute = t.getUTCMinutes(), this.second = t.getUTCSeconds()), this._cachedUnixTime = null;
	}
	toUnixTime() {
		if (this._cachedUnixTime !== null) return this._cachedUnixTime;
		let e = this.utcOffset(), t = Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second - e);
		return this._cachedUnixTime = t / 1e3, this._cachedUnixTime;
	}
	toJSON() {
		let e = [
			"year",
			"month",
			"day",
			"hour",
			"minute",
			"second",
			"isDate"
		], t = Object.create(null), n = 0, r = e.length, i;
		for (; n < r; n++) i = e[n], t[i] = this[i];
		return this.zone && (t.timezone = this.zone.tzid), t;
	}
}, qx = /[^ \t]/, Jx = ":", Yx = ";", Xx = "=", Zx = "unknown", Qx = "text", $x = {
	"^'": "\"",
	"^n": "\n",
	"^^": "^"
};
function J(e) {
	let t = {}, n = t.component = [];
	if (t.stack = [n], J._eachLine(e, function(e, n) {
		J._handleContentLine(n, t);
	}), t.stack.length > 1) throw new eS("invalid ical body. component began but did not end");
	return t = null, n.length == 1 ? n[0] : n;
}
J.property = function(e, t) {
	let n = {
		component: [[], []],
		designSet: t || X.defaultSet
	};
	return J._handleContentLine(e, n), n.component[1][0];
}, J.component = function(e) {
	return J(e);
};
var eS = class extends Error {
	name = this.constructor.name;
};
J.ParserError = eS, J._handleContentLine = function(e, t) {
	let n = e.indexOf(Jx), r = e.indexOf(Yx), i, a, o, s, c = {};
	r !== -1 && n !== -1 && r > n && (r = -1);
	let l;
	if (r !== -1) {
		if (o = e.slice(0, Math.max(0, r)).toLowerCase(), l = J._parseParameters(e.slice(Math.max(0, r)), 0, t.designSet), l[2] == -1) throw new eS("Invalid parameters in '" + e + "'");
		c = l[0];
		let n;
		if (n = typeof l[1] == "string" ? l[1].length : l[1].reduce((e, t) => e + t.length, 0), i = n + l[2] + r, (a = e.slice(Math.max(0, i)).indexOf(Jx)) !== -1) s = e.slice(Math.max(0, i + a + 1));
		else throw new eS("Missing parameter value in '" + e + "'");
	} else if (n !== -1) {
		if (o = e.slice(0, Math.max(0, n)).toLowerCase(), s = e.slice(Math.max(0, n + 1)), o === "begin") {
			let e = [
				s.toLowerCase(),
				[],
				[]
			];
			t.stack.length === 1 ? t.component.push(e) : t.component[2].push(e), t.stack.push(t.component), t.component = e, t.designSet ||= X.getDesignSet(t.component[0]);
			return;
		}
		if (o === "end") {
			t.component = t.stack.pop();
			return;
		}
	} else throw new eS("invalid line (no token \";\" or \":\") \"" + e + "\"");
	let u, d = !1, f = !1, p, m, h;
	t.designSet.propertyGroups && o.indexOf(".") !== -1 ? (m = o.split("."), c.group = m[0], h = m[1]) : h = o, h in t.designSet.property && (p = t.designSet.property[h], "multiValue" in p && (d = p.multiValue), "structuredValue" in p && (f = p.structuredValue), s && "detectType" in p && (u = p.detectType(s))), u ||= "value" in c ? c.value.toLowerCase() : p ? p.defaultType : Zx, delete c.value;
	let g;
	d && f ? (s = J._parseMultiValue(s, f, u, [], d, t.designSet, f), g = [
		h,
		c,
		u,
		s
	]) : d ? (g = [
		h,
		c,
		u
	], J._parseMultiValue(s, d, u, g, null, t.designSet, !1)) : f ? (s = J._parseMultiValue(s, f, u, [], null, t.designSet, f), g = [
		h,
		c,
		u,
		s
	]) : (s = J._parseValue(s, u, t.designSet, !1), g = [
		h,
		c,
		u,
		s
	]), t.component[0] === "vcard" && t.component[1].length === 0 && (o !== "version" || s !== "4.0") && (t.designSet = X.getDesignSet("vcard3")), t.component[1].push(g);
}, J._parseValue = function(e, t, n, r) {
	return t in n.value && "fromICAL" in n.value[t] ? n.value[t].fromICAL(e, r) : e;
}, J._parseParameters = function(e, t, n) {
	let r = t, i = 0, a = Xx, o = {}, s, c, l, u = -1, d, f, p;
	for (; i !== !1 && (i = e.indexOf(a, i + 1)) !== -1;) {
		if (s = e.slice(r + 1, i), s.length == 0) throw new eS("Empty parameter name in '" + e + "'");
		if (c = s.toLowerCase(), p = !1, f = !1, d = c in n.param && n.param[c].valueType ? n.param[c].valueType : Qx, c in n.param && (f = n.param[c].multiValue, n.param[c].multiValueSeparateDQuote && (p = J._rfc6868Escape("\"" + f + "\""))), e[i + 1] === "\"") {
			if (u = i + 2, i = e.indexOf("\"", u), f && i != -1) {
				let t = !0;
				for (; t;) e[i + 1] == f && e[i + 2] == "\"" ? i = e.indexOf("\"", i + 3) : t = !1;
			}
			if (i === -1) throw new eS("invalid line (no matching double quote) \"" + e + "\"");
			l = e.slice(u, i), r = e.indexOf(Yx, i);
			let t = e.indexOf(Jx, i);
			(r === -1 || t !== -1 && r > t) && (i = !1);
		} else {
			u = i + 1;
			let t = e.indexOf(Yx, u), n = e.indexOf(Jx, u);
			n !== -1 && t > n ? (t = n, i = !1) : t === -1 ? (t = n === -1 ? e.length : n, i = !1) : (r = t, i = t), l = e.slice(u, t);
		}
		let t = l.length;
		if (l = J._rfc6868Escape(l), u += t - l.length, f) {
			let e = p || f;
			l = J._parseMultiValue(l, e, d, [], null, n);
		} else l = J._parseValue(l, d, n);
		f && c in o ? Array.isArray(o[c]) ? o[c].push(l) : o[c] = [o[c], l] : o[c] = l;
	}
	return [
		o,
		l,
		u
	];
}, J._rfc6868Escape = function(e) {
	return e.replace(/\^['n^]/g, function(e) {
		return $x[e];
	});
}, J._parseMultiValue = function(e, t, n, r, i, a, o) {
	let s = 0, c = 0, l;
	if (t.length === 0) return e;
	for (; (s = lS(e, t, c)) !== -1;) l = e.slice(c, s), l = i ? J._parseMultiValue(l, i, n, [], null, a, o) : J._parseValue(l, n, a, o), r.push(l), c = s + t.length;
	return l = e.slice(c), l = i ? J._parseMultiValue(l, i, n, [], null, a, o) : J._parseValue(l, n, a, o), r.push(l), r.length == 1 ? r[0] : r;
}, J._eachLine = function(e, t) {
	let n = e.length, r = e.search(qx), i = r, a, o, s;
	do
		i = e.indexOf("\n", r) + 1, s = i > 1 && e[i - 2] === "\r" ? 2 : 1, i === 0 && (i = n, s = 0), o = e[r], o === " " || o === "	" ? a += e.slice(r + 1, i - s) : (a && t(null, a), a = e.slice(r, i - s)), r = i;
	while (i !== n);
	a = a.trim(), a.length && t(null, a);
};
var tS = [
	"tzid",
	"location",
	"tznames",
	"latitude",
	"longitude"
], nS = class e {
	static _compare_change_fn(e, t) {
		return e.year < t.year ? -1 : e.year > t.year ? 1 : e.month < t.month ? -1 : e.month > t.month ? 1 : e.day < t.day ? -1 : e.day > t.day ? 1 : e.hour < t.hour ? -1 : e.hour > t.hour ? 1 : e.minute < t.minute ? -1 : e.minute > t.minute ? 1 : e.second < t.second ? -1 : +(e.second > t.second);
	}
	static convert_time(t, n, r) {
		if (t.isDate || n.tzid == r.tzid || n == e.localTimezone || r == e.localTimezone) return t.zone = r, t;
		let i = n.utcOffset(t);
		return t.adjust(0, 0, 0, -i), i = r.utcOffset(t), t.adjust(0, 0, 0, i), null;
	}
	static fromData(t) {
		return new e().fromData(t);
	}
	static #e = null;
	static get utcTimezone() {
		return this.#e ||= e.fromData({ tzid: "UTC" }), this.#e;
	}
	static #t = null;
	static get localTimezone() {
		return this.#t ||= e.fromData({ tzid: "floating" }), this.#t;
	}
	static adjust_change(e, t, n, r, i) {
		return q.prototype.adjust.call(e, t, n, r, i, e);
	}
	static _minimumExpansionYear = -1;
	static EXTRA_COVERAGE = 5;
	constructor(e) {
		this.wrappedJSObject = this, this.fromData(e);
	}
	tzid = "";
	location = "";
	tznames = "";
	latitude = 0;
	longitude = 0;
	component = null;
	expandedUntilYear = 0;
	icalclass = "icaltimezone";
	fromData(e) {
		if (this.expandedUntilYear = 0, this.changes = [], e instanceof bC) this.component = e;
		else {
			if (e && "component" in e) {
				if (typeof e.component == "string") {
					let t = J(e.component);
					this.component = new bC(t);
				} else this.component = e.component instanceof bC ? e.component : null;
			}
			for (let t of tS) e && t in e && (this[t] = e[t]);
		}
		return this.component instanceof bC && !this.tzid && (this.tzid = this.component.getFirstPropertyValue("tzid")), this;
	}
	utcOffset(t) {
		if (this == e.utcTimezone || this == e.localTimezone || (this._ensureCoverage(t.year), !this.changes.length)) return 0;
		let n = {
			year: t.year,
			month: t.month,
			day: t.day,
			hour: t.hour,
			minute: t.minute,
			second: t.second
		}, r = this._findNearbyChange(n), i = -1, a = 1;
		for (;;) {
			let t = dS(this.changes[r], !0);
			if (t.utcOffset < t.prevUtcOffset ? e.adjust_change(t, 0, 0, 0, t.utcOffset) : e.adjust_change(t, 0, 0, 0, t.prevUtcOffset), e._compare_change_fn(n, t) >= 0 ? i = r : a = -1, a == -1 && i != -1) break;
			if (r += a, r < 0) return 0;
			if (r >= this.changes.length) break;
		}
		let o = this.changes[i];
		if (o.utcOffset - o.prevUtcOffset < 0 && i > 0) {
			let t = dS(o, !0);
			if (e.adjust_change(t, 0, 0, 0, t.prevUtcOffset), e._compare_change_fn(n, t) < 0) {
				let e = this.changes[i - 1];
				o.is_daylight != 0 && e.is_daylight == 0 && (o = e);
			}
		}
		return o.utcOffset;
	}
	_findNearbyChange(t) {
		let n = uS(this.changes, t, e._compare_change_fn);
		return n >= this.changes.length ? this.changes.length - 1 : n;
	}
	_ensureCoverage(t) {
		if (e._minimumExpansionYear == -1) {
			let t = q.now();
			e._minimumExpansionYear = t.year;
		}
		let n = t;
		if (n < e._minimumExpansionYear && (n = e._minimumExpansionYear), n += e.EXTRA_COVERAGE, !this.changes.length || this.expandedUntilYear < t) {
			let t = this.component.getAllSubcomponents(), r = t.length, i = 0;
			for (; i < r; i++) this._expandComponent(t[i], n, this.changes);
			this.changes.sort(e._compare_change_fn), this.expandedUntilYear = n;
		}
	}
	_expandComponent(t, n, r) {
		if (!t.hasProperty("dtstart") || !t.hasProperty("tzoffsetto") || !t.hasProperty("tzoffsetfrom")) return null;
		let i = t.getFirstProperty("dtstart").getFirstValue(), a;
		function o(e) {
			return e.factor * (e.hours * 3600 + e.minutes * 60);
		}
		function s() {
			let e = {};
			return e.is_daylight = t.name == "daylight", e.utcOffset = o(t.getFirstProperty("tzoffsetto").getFirstValue()), e.prevUtcOffset = o(t.getFirstProperty("tzoffsetfrom").getFirstValue()), e;
		}
		if (!t.hasProperty("rrule") && !t.hasProperty("rdate")) a = s(), a.year = i.year, a.month = i.month, a.day = i.day, a.hour = i.hour, a.minute = i.minute, a.second = i.second, e.adjust_change(a, 0, 0, 0, -a.prevUtcOffset), r.push(a);
		else {
			let o = t.getAllProperties("rdate");
			for (let t of o) {
				let n = t.getFirstValue();
				a = s(), a.year = n.year, a.month = n.month, a.day = n.day, n.isDate ? (a.hour = i.hour, a.minute = i.minute, a.second = i.second, i.zone != e.utcTimezone && e.adjust_change(a, 0, 0, 0, -a.prevUtcOffset)) : (a.hour = n.hour, a.minute = n.minute, a.second = n.second, n.zone != e.utcTimezone && e.adjust_change(a, 0, 0, 0, -a.prevUtcOffset)), r.push(a);
			}
			let c = t.getFirstProperty("rrule");
			if (c) {
				c = c.getFirstValue(), a = s(), c.until && c.until.zone == e.utcTimezone && (c.until.adjust(0, 0, 0, a.prevUtcOffset), c.until.zone = e.localTimezone);
				let t = c.iterator(i), o;
				for (; (o = t.next()) && (a = s(), !(o.year > n || !o));) a.year = o.year, a.month = o.month, a.day = o.day, a.hour = o.hour, a.minute = o.minute, a.second = o.second, a.isDate = o.isDate, e.adjust_change(a, 0, 0, 0, -a.prevUtcOffset), r.push(a);
			}
		}
		return r;
	}
	toString() {
		return this.tznames ? this.tznames : this.tzid;
	}
}, rS = null, iS = {
	get count() {
		return rS === null ? 0 : Object.keys(rS).length;
	},
	reset: function() {
		rS = Object.create(null);
		let e = nS.utcTimezone;
		rS.Z = e, rS.UTC = e, rS.GMT = e;
	},
	_hard_reset: function() {
		rS = null;
	},
	has: function(e) {
		return rS !== null && !!rS[e];
	},
	get: function(e) {
		return rS === null && this.reset(), rS[e];
	},
	register: function(e, t) {
		if (rS === null && this.reset(), typeof e == "string" && t instanceof nS && ([e, t] = [t, e]), t || (e instanceof nS ? t = e.tzid : e.name === "vtimezone" && (e = new nS(e), t = e.tzid)), !t) throw TypeError("Neither a timezone nor a name was passed");
		if (e instanceof nS) rS[t] = e;
		else throw TypeError("timezone must be ICAL.Timezone or ICAL.Component");
	},
	remove: function(e) {
		return rS === null ? null : delete rS[e];
	}
};
function aS(e) {
	let t, n, r, i, a;
	if (!e || e.name !== "vcalendar") return e;
	for (t = e.getAllSubcomponents(), n = [], r = {}, a = 0; a < t.length; a++) if (t[a].name === "vtimezone") {
		let e = t[a].getFirstProperty("tzid").getFirstValue();
		r[e] = t[a];
	} else n = n.concat(t[a].getAllProperties());
	for (i = {}, a = 0; a < n.length; a++) {
		let e = n[a].getParameter("tzid");
		e && (i[e] = !0);
	}
	for (let [t, n] of Object.entries(r)) i[t] || e.removeSubcomponent(n);
	for (let t of Object.keys(i)) !r[t] && iS.has(t) && e.addSubcomponent(iS.get(t).component);
	return e;
}
function oS(e) {
	return typeof e == "number" && isNaN(e);
}
function sS(e) {
	let t = parseInt(e, 10);
	if (oS(t)) throw Error("Could not extract integer from \"" + e + "\"");
	return t;
}
function cS(e, t) {
	if (e !== void 0) return e instanceof t ? e : new t(e);
}
function lS(e, t, n) {
	for (; (n = e.indexOf(t, n)) !== -1;) if (n > 0 && e[n - 1] === "\\") n += 1;
	else return n;
	return -1;
}
function uS(e, t, n) {
	if (!e.length) return 0;
	let r = 0, i = e.length - 1, a, o;
	for (; r <= i;) if (a = r + Math.floor((i - r) / 2), o = n(t, e[a]), o < 0) i = a - 1;
	else if (o > 0) r = a + 1;
	else break;
	return o < 0 ? a : o > 0 ? a + 1 : a;
}
function dS(e, t) {
	if (!e || typeof e != "object") return e;
	if (e instanceof Date) return new Date(e.getTime());
	if ("clone" in e) return e.clone();
	if (Array.isArray(e)) {
		let n = [];
		for (let r = 0; r < e.length; r++) n.push(t ? dS(e[r], !0) : e[r]);
		return n;
	}
	{
		let n = {};
		for (let [r, i] of Object.entries(e)) n[r] = t ? dS(i, !0) : i;
		return n;
	}
}
function fS(e) {
	let t = "", n = e || "", r = 0, i = 0;
	for (; n.length;) {
		let e = n.codePointAt(r);
		e < 128 ? ++i : i += e < 2048 ? 2 : e < 65536 ? 3 : 4, i < wC.foldLength + 1 ? r += e > 65535 ? 2 : 1 : (t += wC.newLineChar + " " + n.slice(0, Math.max(0, r)), n = n.slice(Math.max(0, r)), r = i = 0);
	}
	return t.slice(wC.newLineChar.length + 1);
}
function pS(e) {
	switch (typeof e != "string" && (typeof e == "number" && (e = parseInt(e)), e = String(e)), e.length) {
		case 0: return "00";
		case 1: return "0" + e;
		default: return e;
	}
}
function mS(e) {
	return e < 0 ? Math.ceil(e) : Math.floor(e);
}
function hS(e, t) {
	for (let n in e) {
		let r = Object.getOwnPropertyDescriptor(e, n);
		r && !Object.getOwnPropertyDescriptor(t, n) && Object.defineProperty(t, n, r);
	}
	return t;
}
var gS = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	binsearchInsert: uS,
	clone: dS,
	extend: hS,
	foldline: fS,
	formatClassType: cS,
	isStrictlyNaN: oS,
	pad2: pS,
	strictParseInt: sS,
	trunc: mS,
	unescapedIndexOf: lS,
	updateTimezones: aS
}), _S = class e {
	static fromString(t) {
		let n = {};
		return n.factor = t[0] === "+" ? 1 : -1, n.hours = sS(t.slice(1, 3)), n.minutes = sS(t.slice(4, 6)), new e(n);
	}
	static fromSeconds(t) {
		let n = new e();
		return n.fromSeconds(t), n;
	}
	constructor(e) {
		this.fromData(e);
	}
	hours = 0;
	minutes = 0;
	factor = 1;
	icaltype = "utc-offset";
	clone() {
		return e.fromSeconds(this.toSeconds());
	}
	fromData(e) {
		if (e) for (let [t, n] of Object.entries(e)) this[t] = n;
		this._normalize();
	}
	fromSeconds(e) {
		let t = Math.abs(e);
		return this.factor = e < 0 ? -1 : 1, this.hours = mS(t / 3600), t -= this.hours * 3600, this.minutes = mS(t / 60), this;
	}
	toSeconds() {
		return this.factor * (60 * this.minutes + 3600 * this.hours);
	}
	compare(e) {
		let t = this.toSeconds(), n = e.toSeconds();
		return (t > n) - (n > t);
	}
	_normalize() {
		let e = this.toSeconds(), t = this.factor;
		for (; e < -43200;) e += 97200;
		for (; e > 50400;) e -= 97200;
		this.fromSeconds(e), e == 0 && (this.factor = t);
	}
	toICALString() {
		return X.icalendar.value["utc-offset"].toICAL(this.toString());
	}
	toString() {
		return (this.factor == 1 ? "+" : "-") + pS(this.hours) + ":" + pS(this.minutes);
	}
}, vS = class e extends q {
	static fromDateAndOrTimeString(t, n) {
		function r(e, t, n) {
			return e ? sS(e.slice(t, t + n)) : null;
		}
		let i = t.split("T"), a = i[0], o = i[1], s = o ? X.vcard.value.time._splitZone(o) : [], c = s[0], l = s[1], u = a ? a.length : 0, d = l ? l.length : 0, f = a && a[0] == "-" && a[1] == "-", p = l && l[0] == "-", m = {
			year: f ? null : r(a, 0, 4),
			month: f && (u == 4 || u == 7) ? r(a, 2, 2) : u == 7 || u == 10 ? r(a, 5, 2) : null,
			day: u == 5 ? r(a, 3, 2) : u == 7 && f ? r(a, 5, 2) : u == 10 ? r(a, 8, 2) : null,
			hour: p ? null : r(l, 0, 2),
			minute: p && d == 3 ? r(l, 1, 2) : d > 4 ? p ? r(l, 1, 2) : r(l, 3, 2) : null,
			second: d == 4 ? r(l, 2, 2) : d == 6 ? r(l, 4, 2) : d == 8 ? r(l, 6, 2) : null
		};
		return c = c == "Z" ? nS.utcTimezone : c && c[3] == ":" ? _S.fromString(c) : null, new e(m, c, n);
	}
	constructor(e, t, n) {
		super(e, t), this.icaltype = n || "date-and-or-time";
	}
	icalclass = "vcardtime";
	icaltype = "date-and-or-time";
	clone() {
		return new e(this._time, this.zone, this.icaltype);
	}
	_normalize() {
		return this;
	}
	utcOffset() {
		return this.zone instanceof _S ? this.zone.toSeconds() : q.prototype.utcOffset.apply(this, arguments);
	}
	toICALString() {
		return X.vcard.value[this.icaltype].toICAL(this.toString());
	}
	toString() {
		let e = this.year, t = this.month, n = this.day, r = this.hour, i = this.minute, a = this.second, o = e !== null, s = t !== null, c = n !== null, l = r !== null, u = i !== null, d = a !== null, f = (o ? pS(e) + (s || c ? "-" : "") : s || c ? "--" : "") + (s ? pS(t) : "") + (c ? "-" + pS(n) : ""), p = (l ? pS(r) : "-") + (l && u ? ":" : "") + (u ? pS(i) : "") + (!l && !u ? "-" : "") + (u && d ? ":" : "") + (d ? pS(a) : ""), m;
		switch (m = this.zone === nS.utcTimezone ? "Z" : this.zone instanceof _S ? this.zone.toString() : this.zone === nS.localTimezone ? "" : this.zone instanceof nS ? _S.fromSeconds(this.zone.utcOffset(this)).toString() : "", this.icaltype) {
			case "time": return p + m;
			case "date-and-or-time":
			case "date-time": return f + (p == "--" ? "" : "T" + p + m);
			case "date": return f;
		}
		return null;
	}
}, yS = class e {
	static _indexMap = {
		BYSECOND: 0,
		BYMINUTE: 1,
		BYHOUR: 2,
		BYDAY: 3,
		BYMONTHDAY: 4,
		BYYEARDAY: 5,
		BYWEEKNO: 6,
		BYMONTH: 7,
		BYSETPOS: 8
	};
	static _expandMap = {
		SECONDLY: [
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		MINUTELY: [
			2,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		],
		HOURLY: [
			2,
			2,
			1,
			1,
			1,
			1,
			1,
			1
		],
		DAILY: [
			2,
			2,
			2,
			1,
			1,
			1,
			1,
			1
		],
		WEEKLY: [
			2,
			2,
			2,
			2,
			3,
			3,
			1,
			1
		],
		MONTHLY: [
			2,
			2,
			2,
			2,
			2,
			3,
			3,
			1
		],
		YEARLY: [
			2,
			2,
			2,
			2,
			2,
			2,
			2,
			2
		]
	};
	static UNKNOWN = 0;
	static CONTRACT = 1;
	static EXPAND = 2;
	static ILLEGAL = 3;
	constructor(e) {
		this.fromData(e);
	}
	completed = !1;
	rule = null;
	dtstart = null;
	last = null;
	occurrence_number = 0;
	by_indices = null;
	initialized = !1;
	by_data = null;
	days = null;
	days_index = 0;
	fromData(e) {
		if (this.rule = cS(e.rule, ES), !this.rule) throw Error("iterator requires a (ICAL.Recur) rule");
		if (this.dtstart = cS(e.dtstart, q), !this.dtstart) throw Error("iterator requires a (ICAL.Time) dtstart");
		if (this.by_data = e.by_data ? e.by_data : dS(this.rule.parts, !0), e.occurrence_number && (this.occurrence_number = e.occurrence_number), this.days = e.days || [], e.last && (this.last = cS(e.last, q)), this.by_indices = e.by_indices, this.by_indices ||= {
			BYSECOND: 0,
			BYMINUTE: 0,
			BYHOUR: 0,
			BYDAY: 0,
			BYMONTH: 0,
			BYWEEKNO: 0,
			BYMONTHDAY: 0
		}, this.initialized = e.initialized || !1, !this.initialized) try {
			this.init();
		} catch (e) {
			if (e instanceof bS) this.completed = !0;
			else throw e;
		}
	}
	init() {
		this.initialized = !0, this.last = this.dtstart.clone();
		let e = this.by_data;
		if ("BYDAY" in e && this.sort_byday_rules(e.BYDAY), "BYYEARDAY" in e && ("BYMONTH" in e || "BYWEEKNO" in e || "BYMONTHDAY" in e)) throw Error("Invalid BYYEARDAY rule");
		if ("BYWEEKNO" in e && "BYMONTHDAY" in e) throw Error("BYWEEKNO does not fit to BYMONTHDAY");
		if (this.rule.freq == "MONTHLY" && ("BYYEARDAY" in e || "BYWEEKNO" in e)) throw Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");
		if (this.rule.freq == "WEEKLY" && ("BYYEARDAY" in e || "BYMONTHDAY" in e)) throw Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");
		if (this.rule.freq != "YEARLY" && "BYYEARDAY" in e) throw Error("BYYEARDAY may only appear in YEARLY rules");
		if (this.last.second = this.setup_defaults("BYSECOND", "SECONDLY", this.dtstart.second), this.last.minute = this.setup_defaults("BYMINUTE", "MINUTELY", this.dtstart.minute), this.last.hour = this.setup_defaults("BYHOUR", "HOURLY", this.dtstart.hour), this.last.day = this.setup_defaults("BYMONTHDAY", "DAILY", this.dtstart.day), this.last.month = this.setup_defaults("BYMONTH", "MONTHLY", this.dtstart.month), this.rule.freq == "WEEKLY") {
			if ("BYDAY" in e) {
				let [, t] = this.ruleDayOfWeek(e.BYDAY[0], this.rule.wkst), n = t - this.last.dayOfWeek(this.rule.wkst);
				(this.last.dayOfWeek(this.rule.wkst) < t && n >= 0 || n < 0) && (this.last.day += n);
			} else e.BYDAY = [ES.numericDayToIcalDay(this.dtstart.dayOfWeek())];
		}
		if (this.rule.freq == "YEARLY") {
			let e = this.rule.until ? this.rule.until.year : 2e4;
			for (; this.last.year <= e && (this.expand_year_days(this.last.year), !(this.days.length > 0));) this.increment_year(this.rule.interval);
			if (this.days.length == 0 || !this._nextByYearDay() && !this.next_year() && !this.next_year() && !this.next_year()) throw new bS();
		}
		if (this.rule.freq == "MONTHLY") {
			if (this.has_by_data("BYDAY")) {
				let e = null, t = this.last.clone(), n = q.daysInMonth(this.last.month, this.last.year);
				for (let r of this.by_data.BYDAY) {
					this.last = t.clone();
					let [i, a] = this.ruleDayOfWeek(r), o = this.last.nthWeekDay(a, i);
					if (i >= 6 || i <= -6) throw Error("Malformed values in BYDAY part");
					if (o > n || o <= 0) {
						if (e && e.month == t.month) continue;
						for (; o > n || o <= 0;) this.increment_month(), n = q.daysInMonth(this.last.month, this.last.year), o = this.last.nthWeekDay(a, i);
					}
					this.last.day = o, (!e || this.last.compare(e) < 0) && (e = this.last.clone());
				}
				if (this.last = e.clone(), this.has_by_data("BYMONTHDAY") && this._byDayAndMonthDay(!0), this.last.day > n || this.last.day == 0) throw Error("Malformed values in BYDAY part");
			} else if (this.has_by_data("BYMONTHDAY")) {
				this.last.day = 1;
				let e = this.normalizeByMonthDayRules(this.last.year, this.last.month, this.rule.parts.BYMONTHDAY).filter((e) => e >= this.last.day);
				if (e.length) this.last.day = e[0], this.by_data.BYMONTHDAY = e;
				else if (!this.next_month() && !this.next_month() && !this.next_month()) throw new bS();
			}
		}
	}
	next(e = !1) {
		let t = this.last ? this.last.clone() : null;
		if ((this.rule.count && this.occurrence_number >= this.rule.count || this.rule.until && this.last.compare(this.rule.until) > 0) && (this.completed = !0), this.completed) return null;
		if (this.occurrence_number == 0 && this.last.compare(this.dtstart) >= 0) return this.occurrence_number++, this.last;
		let n, r = 0;
		do
			switch (n = 1, this.rule.freq) {
				case "SECONDLY":
					this.next_second();
					break;
				case "MINUTELY":
					this.next_minute();
					break;
				case "HOURLY":
					this.next_hour();
					break;
				case "DAILY":
					this.next_day();
					break;
				case "WEEKLY":
					this.next_week();
					break;
				case "MONTHLY":
					if (n = this.next_month(), n) r = 0;
					else if (++r == 336) return this.completed = !0, null;
					break;
				case "YEARLY":
					if (n = this.next_year(), n) r = 0;
					else if (++r == 28) return this.completed = !0, null;
					break;
				default: return null;
			}
		while (!this.check_contracting_rules() || this.last.compare(this.dtstart) < 0 || !n);
		if (this.last.compare(t) == 0) {
			if (e) throw Error("Same occurrence found twice, protecting you from death by recursion");
			this.next(!0);
		}
		return this.rule.until && this.last.compare(this.rule.until) > 0 ? (this.completed = !0, null) : (this.occurrence_number++, this.last);
	}
	next_second() {
		return this.next_generic("BYSECOND", "SECONDLY", "second", "minute");
	}
	increment_second(e) {
		return this.increment_generic(e, "second", 60, "minute");
	}
	next_minute() {
		return this.next_generic("BYMINUTE", "MINUTELY", "minute", "hour", "next_second");
	}
	increment_minute(e) {
		return this.increment_generic(e, "minute", 60, "hour");
	}
	next_hour() {
		return this.next_generic("BYHOUR", "HOURLY", "hour", "monthday", "next_minute");
	}
	increment_hour(e) {
		this.increment_generic(e, "hour", 24, "monthday");
	}
	next_day() {
		let e = this.rule.freq == "DAILY";
		return this.next_hour() == 0 || (e ? this.increment_monthday(this.rule.interval) : this.increment_monthday(1)), 0;
	}
	next_week() {
		let e = 0;
		if (this.next_weekday_by_week() == 0) return e;
		if (this.has_by_data("BYWEEKNO")) {
			this.by_indices.BYWEEKNO++, this.by_indices.BYWEEKNO == this.by_data.BYWEEKNO.length && (this.by_indices.BYWEEKNO = 0, e = 1), this.last.month = 1, this.last.day = 1;
			let t = this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];
			this.last.day += 7 * t, e && this.increment_year(1);
		} else this.increment_monthday(7 * this.rule.interval);
		return e;
	}
	normalizeByMonthDayRules(e, t, n) {
		let r = q.daysInMonth(t, e), i = [], a = 0, o = n.length, s;
		for (; a < o; a++) {
			if (s = parseInt(n[a], 10), isNaN(s)) throw Error("Invalid BYMONTHDAY value");
			if (!(Math.abs(s) > r)) {
				if (s < 0) s = r + (s + 1);
				else if (s === 0) continue;
				i.indexOf(s) === -1 && i.push(s);
			}
		}
		return i.sort(function(e, t) {
			return e - t;
		});
	}
	_byDayAndMonthDay(e) {
		let t, n = this.by_data.BYDAY, r, i = 0, a, o = n.length, s = 0, c, l = this, u = this.last.day;
		function d() {
			for (c = q.daysInMonth(l.last.month, l.last.year), t = l.normalizeByMonthDayRules(l.last.year, l.last.month, l.by_data.BYMONTHDAY), a = t.length; t[i] <= u && !(e && t[i] == u) && i < a - 1;) i++;
		}
		function f() {
			u = 0, l.increment_month(), i = 0, d();
		}
		d(), e && --u;
		let p = 48;
		for (; !s && p;) {
			if (p--, r = u + 1, r > c) {
				f();
				continue;
			}
			let e = t[i++];
			if (e >= r) u = e;
			else {
				f();
				continue;
			}
			for (let e = 0; e < o; e++) {
				let t = this.ruleDayOfWeek(n[e]), r = t[0], i = t[1];
				if (this.last.day = u, this.last.isNthWeekDay(i, r)) {
					s = 1;
					break;
				}
			}
			if (!s && i === a) {
				f();
				continue;
			}
		}
		if (p <= 0) throw Error("Malformed values in BYDAY combined with BYMONTHDAY parts");
		return s;
	}
	next_month() {
		let e = 1;
		if (this.next_hour() == 0) return e;
		if (this.has_by_data("BYDAY") && this.has_by_data("BYMONTHDAY")) e = this._byDayAndMonthDay();
		else if (this.has_by_data("BYDAY")) {
			let t = q.daysInMonth(this.last.month, this.last.year), n = 0, r = 0;
			if (this.has_by_data("BYSETPOS")) {
				let e = this.last.day;
				for (let i = 1; i <= t; i++) this.last.day = i, this.is_day_in_byday(this.last) && (r++, i <= e && n++);
				this.last.day = e;
			}
			e = 0;
			let i;
			for (i = this.last.day + 1; i <= t; i++) if (this.last.day = i, this.is_day_in_byday(this.last) && (!this.has_by_data("BYSETPOS") || this.check_set_position(++n) || this.check_set_position(n - r - 1))) {
				e = 1;
				break;
			}
			i > t && (this.last.day = 1, this.increment_month(), this.is_day_in_byday(this.last) ? (!this.has_by_data("BYSETPOS") || this.check_set_position(1)) && (e = 1) : e = 0);
		} else if (this.has_by_data("BYMONTHDAY")) {
			if (this.by_indices.BYMONTHDAY++, this.by_indices.BYMONTHDAY >= this.by_data.BYMONTHDAY.length && (this.by_indices.BYMONTHDAY = 0, this.increment_month(), this.by_indices.BYMONTHDAY >= this.by_data.BYMONTHDAY.length)) return 0;
			let t = q.daysInMonth(this.last.month, this.last.year), n = this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];
			n < 0 && (n = t + n + 1), n > t ? (this.last.day = 1, e = this.is_day_in_byday(this.last)) : this.last.day = n;
		} else {
			this.increment_month();
			let t = q.daysInMonth(this.last.month, this.last.year);
			this.by_data.BYMONTHDAY[0] > t ? e = 0 : this.last.day = this.by_data.BYMONTHDAY[0];
		}
		return e;
	}
	next_weekday_by_week() {
		let e = 0;
		if (this.next_hour() == 0) return e;
		if (!this.has_by_data("BYDAY")) return 1;
		for (;;) {
			let t = new q();
			this.by_indices.BYDAY++, this.by_indices.BYDAY == Object.keys(this.by_data.BYDAY).length && (this.by_indices.BYDAY = 0, e = 1);
			let n = this.by_data.BYDAY[this.by_indices.BYDAY], r = this.ruleDayOfWeek(n)[1];
			r -= this.rule.wkst, r < 0 && (r += 7), t.year = this.last.year, t.month = this.last.month, t.day = this.last.day;
			let i = t.startDoyWeek(this.rule.wkst);
			if (r + i < 1 && !e) continue;
			let a = q.fromDayOfYear(i + r, this.last.year);
			return this.last.year = a.year, this.last.month = a.month, this.last.day = a.day, e;
		}
	}
	next_year() {
		return this.next_hour() == 0 || (this.days.length == 0 || ++this.days_index == this.days.length) && (this.days_index = 0, this.increment_year(this.rule.interval), this.has_by_data("BYMONTHDAY") && (this.by_data.BYMONTHDAY = this.normalizeByMonthDayRules(this.last.year, this.last.month, this.rule.parts.BYMONTHDAY)), this.expand_year_days(this.last.year), this.days.length == 0) ? 0 : this._nextByYearDay();
	}
	_nextByYearDay() {
		let e = this.days[this.days_index], t = this.last.year;
		if (Math.abs(e) == 366 && !q.isLeapYear(this.last.year)) return 0;
		e < 1 && (e += 1, t += 1);
		let n = q.fromDayOfYear(e, t);
		return this.last.day = n.day, this.last.month = n.month, 1;
	}
	ruleDayOfWeek(e, t) {
		let n = e.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);
		if (n) {
			let r = parseInt(n[1] || 0, 10);
			return e = ES.icalDayToNumericDay(n[2], t), [r, e];
		}
		return [0, 0];
	}
	next_generic(e, t, n, r, i) {
		let a = e in this.by_data, o = this.rule.freq == t, s = 0;
		if (i && this[i]() == 0) return s;
		if (a) {
			this.by_indices[e]++;
			let t = this.by_data[e];
			this.by_indices[e] == t.length && (this.by_indices[e] = 0, s = 1), this.last[n] = t[this.by_indices[e]];
		} else o && this["increment_" + n](this.rule.interval);
		return a && s && o && this["increment_" + r](1), s;
	}
	increment_monthday(e) {
		for (let t = 0; t < e; t++) {
			let e = q.daysInMonth(this.last.month, this.last.year);
			this.last.day++, this.last.day > e && (this.last.day -= e, this.increment_month());
		}
	}
	increment_month() {
		if (this.last.day = 1, this.has_by_data("BYMONTH")) this.by_indices.BYMONTH++, this.by_indices.BYMONTH == this.by_data.BYMONTH.length && (this.by_indices.BYMONTH = 0, this.increment_year(1)), this.last.month = this.by_data.BYMONTH[this.by_indices.BYMONTH];
		else {
			this.rule.freq == "MONTHLY" ? this.last.month += this.rule.interval : this.last.month++, this.last.month--;
			let e = mS(this.last.month / 12);
			this.last.month %= 12, this.last.month++, e != 0 && this.increment_year(e);
		}
		this.has_by_data("BYMONTHDAY") && (this.by_data.BYMONTHDAY = this.normalizeByMonthDayRules(this.last.year, this.last.month, this.rule.parts.BYMONTHDAY));
	}
	increment_year(e) {
		this.last.day = 1, this.last.year += e;
	}
	increment_generic(e, t, n, r) {
		this.last[t] += e;
		let i = mS(this.last[t] / n);
		this.last[t] %= n, i != 0 && this["increment_" + r](i);
	}
	has_by_data(e) {
		return e in this.rule.parts;
	}
	expand_year_days(e) {
		let t = new q();
		this.days = [];
		let n = {};
		for (let e of [
			"BYDAY",
			"BYWEEKNO",
			"BYMONTHDAY",
			"BYMONTH",
			"BYYEARDAY"
		]) e in this.rule.parts && (n[e] = this.rule.parts[e]);
		if ("BYMONTH" in n && "BYWEEKNO" in n) {
			let r = 1, i = {};
			t.year = e, t.isDate = !0;
			for (let n = 0; n < this.by_data.BYMONTH.length; n++) {
				let r = this.by_data.BYMONTH[n];
				t.month = r, t.day = 1;
				let a = t.weekNumber(this.rule.wkst);
				t.day = q.daysInMonth(r, e);
				let o = t.weekNumber(this.rule.wkst);
				for (n = a; n < o; n++) i[n] = 1;
			}
			for (let e = 0; e < this.by_data.BYWEEKNO.length && r; e++) this.by_data.BYWEEKNO[e] < 52 ? r &= i[e] : r = 0;
			r ? delete n.BYMONTH : delete n.BYWEEKNO;
		}
		let r = Object.keys(n).length;
		if (r == 0) {
			let e = this.dtstart.clone();
			e.year = this.last.year, this.days.push(e.dayOfYear());
		} else if (r == 1 && "BYMONTH" in n) for (let t of this.by_data.BYMONTH) {
			let n = this.dtstart.clone();
			n.year = e, n.month = t, n.isDate = !0, this.days.push(n.dayOfYear());
		}
		else if (r == 1 && "BYMONTHDAY" in n) for (let t of this.by_data.BYMONTHDAY) {
			let n = this.dtstart.clone();
			if (t < 0) {
				let r = q.daysInMonth(n.month, e);
				t = t + r + 1;
			}
			n.day = t, n.year = e, n.isDate = !0, this.days.push(n.dayOfYear());
		}
		else if (r == 2 && "BYMONTHDAY" in n && "BYMONTH" in n) for (let n of this.by_data.BYMONTH) {
			let r = q.daysInMonth(n, e);
			for (let i of this.by_data.BYMONTHDAY) i < 0 && (i = i + r + 1), t.day = i, t.month = n, t.year = e, t.isDate = !0, this.days.push(t.dayOfYear());
		}
		else if (!(r == 1 && "BYWEEKNO" in n) && !(r == 2 && "BYWEEKNO" in n && "BYMONTHDAY" in n)) {
			if (r == 1 && "BYDAY" in n) this.days = this.days.concat(this.expand_by_day(e));
			else if (r == 2 && "BYDAY" in n && "BYMONTH" in n) {
				for (let n of this.by_data.BYMONTH) {
					let r = q.daysInMonth(n, e);
					t.year = e, t.month = n, t.day = 1, t.isDate = !0;
					let i = t.dayOfWeek(), a = t.dayOfYear() - 1;
					t.day = r;
					let o = t.dayOfWeek();
					if (this.has_by_data("BYSETPOS")) {
						let e = [];
						for (let n = 1; n <= r; n++) t.day = n, this.is_day_in_byday(t) && e.push(n);
						for (let t = 0; t < e.length; t++) (this.check_set_position(t + 1) || this.check_set_position(t - e.length)) && this.days.push(a + e[t]);
					} else for (let e of this.by_data.BYDAY) {
						let t = this.ruleDayOfWeek(e), n = t[0], s = t[1], c, l = (s + 7 - i) % 7 + 1, u = r - (o + 7 - s) % 7;
						if (n == 0) for (let e = l; e <= r; e += 7) this.days.push(a + e);
						else n > 0 ? (c = l + (n - 1) * 7, c <= r && this.days.push(a + c)) : (c = u + (n + 1) * 7, c > 0 && this.days.push(a + c));
					}
				}
				this.days.sort(function(e, t) {
					return e - t;
				});
			} else if (r == 2 && "BYDAY" in n && "BYMONTHDAY" in n) {
				let t = this.expand_by_day(e);
				for (let n of t) {
					let t = q.fromDayOfYear(n, e);
					this.by_data.BYMONTHDAY.indexOf(t.day) >= 0 && this.days.push(n);
				}
			} else if (r == 3 && "BYDAY" in n && "BYMONTHDAY" in n && "BYMONTH" in n) {
				let t = this.expand_by_day(e);
				for (let n of t) {
					let t = q.fromDayOfYear(n, e);
					this.by_data.BYMONTH.indexOf(t.month) >= 0 && this.by_data.BYMONTHDAY.indexOf(t.day) >= 0 && this.days.push(n);
				}
			} else if (r == 2 && "BYDAY" in n && "BYWEEKNO" in n) {
				let t = this.expand_by_day(e);
				for (let n of t) {
					let t = q.fromDayOfYear(n, e).weekNumber(this.rule.wkst);
					this.by_data.BYWEEKNO.indexOf(t) && this.days.push(n);
				}
			} else if (!(r == 3 && "BYDAY" in n && "BYWEEKNO" in n && "BYMONTHDAY" in n)) {
				if (r == 1 && "BYYEARDAY" in n) this.days = this.days.concat(this.by_data.BYYEARDAY);
				else if (r == 2 && "BYYEARDAY" in n && "BYDAY" in n) {
					let t = q.isLeapYear(e) ? 366 : 365, n = new Set(this.expand_by_day(e));
					for (let e of this.by_data.BYYEARDAY) e < 0 && (e += t + 1), n.has(e) && this.days.push(e);
				} else this.days = [];
			}
		}
		let i = q.isLeapYear(e) ? 366 : 365;
		return this.days.sort((e, t) => (e < 0 && (e += i + 1), t < 0 && (t += i + 1), e - t)), 0;
	}
	expand_by_day(e) {
		let t = [], n = this.last.clone();
		n.year = e, n.month = 1, n.day = 1, n.isDate = !0;
		let r = n.dayOfWeek();
		n.month = 12, n.day = 31, n.isDate = !0;
		let i = n.dayOfWeek(), a = n.dayOfYear();
		for (let e of this.by_data.BYDAY) {
			let n = this.ruleDayOfWeek(e), o = n[0], s = n[1];
			if (o == 0) {
				let e = (s + 7 - r) % 7 + 1;
				for (let n = e; n <= a; n += 7) t.push(n);
			} else if (o > 0) {
				let e;
				e = s >= r ? s - r + 1 : s - r + 8, t.push(e + (o - 1) * 7);
			} else {
				let e;
				o = -o, e = s <= i ? a - i + s : a - i + s - 7, t.push(e - (o - 1) * 7);
			}
		}
		return t;
	}
	is_day_in_byday(e) {
		if (this.by_data.BYDAY) for (let t of this.by_data.BYDAY) {
			let n = this.ruleDayOfWeek(t), r = n[0], i = n[1], a = e.dayOfWeek();
			if (r == 0 && i == a || e.nthWeekDay(i, r) == e.day) return 1;
		}
		return 0;
	}
	check_set_position(e) {
		return this.has_by_data("BYSETPOS") ? this.by_data.BYSETPOS.indexOf(e) !== -1 : !1;
	}
	sort_byday_rules(e) {
		for (let t = 0; t < e.length; t++) for (let n = 0; n < t; n++) if (this.ruleDayOfWeek(e[n], this.rule.wkst)[1] > this.ruleDayOfWeek(e[t], this.rule.wkst)[1]) {
			let r = e[t];
			e[t] = e[n], e[n] = r;
		}
	}
	check_contract_restriction(t, n) {
		let r = e._indexMap[t], i = e._expandMap[this.rule.freq][r], a = !1;
		if (t in this.by_data && i == e.CONTRACT) {
			let e = this.by_data[t];
			for (let t of e) if (t == n) {
				a = !0;
				break;
			}
		} else a = !0;
		return a;
	}
	check_contracting_rules() {
		let e = this.last.dayOfWeek(), t = this.last.weekNumber(this.rule.wkst), n = this.last.dayOfYear();
		return this.check_contract_restriction("BYSECOND", this.last.second) && this.check_contract_restriction("BYMINUTE", this.last.minute) && this.check_contract_restriction("BYHOUR", this.last.hour) && this.check_contract_restriction("BYDAY", ES.numericDayToIcalDay(e)) && this.check_contract_restriction("BYWEEKNO", t) && this.check_contract_restriction("BYMONTHDAY", this.last.day) && this.check_contract_restriction("BYMONTH", this.last.month) && this.check_contract_restriction("BYYEARDAY", n);
	}
	setup_defaults(t, n, r) {
		let i = e._indexMap[t];
		return e._expandMap[this.rule.freq][i] != e.CONTRACT && (t in this.by_data || (this.by_data[t] = [r]), this.rule.freq != n) ? this.by_data[t][0] : r;
	}
	toJSON() {
		let e = Object.create(null);
		return e.initialized = this.initialized, e.rule = this.rule.toJSON(), e.dtstart = this.dtstart.toJSON(), e.by_data = this.by_data, e.days = this.days, e.last = this.last.toJSON(), e.by_indices = this.by_indices, e.occurrence_number = this.occurrence_number, e;
	}
}, bS = class extends Error {
	constructor() {
		super("Recurrence rule has no valid occurrences");
	}
}, xS = /^(SU|MO|TU|WE|TH|FR|SA)$/, SS = /^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/, CS = {
	SU: q.SUNDAY,
	MO: q.MONDAY,
	TU: q.TUESDAY,
	WE: q.WEDNESDAY,
	TH: q.THURSDAY,
	FR: q.FRIDAY,
	SA: q.SATURDAY
}, wS = Object.fromEntries(Object.entries(CS).map((e) => e.reverse())), TS = [
	"SECONDLY",
	"MINUTELY",
	"HOURLY",
	"DAILY",
	"WEEKLY",
	"MONTHLY",
	"YEARLY"
], ES = class e {
	static fromString(t) {
		let n = this._stringToData(t, !1);
		return new e(n);
	}
	static fromData(t) {
		return new e(t);
	}
	static _stringToData(e, t) {
		let n = Object.create(null), r = e.split(";"), i = r.length;
		for (let e = 0; e < i; e++) {
			let i = r[e].split("="), a = i[0].toUpperCase(), o = i[0].toLowerCase(), s = t ? o : a, c = i[1];
			if (a in kS) {
				let e = c.split(","), t = /* @__PURE__ */ new Set();
				for (let n of e) t.add(kS[a](n));
				e = [...t], n[s] = e.length == 1 ? e[0] : e;
			} else a in OS ? OS[a](c, n, t) : n[o] = c;
		}
		return n;
	}
	static icalDayToNumericDay(e, t) {
		let n = t || q.SUNDAY;
		return (CS[e] - n + 7) % 7 + 1;
	}
	static numericDayToIcalDay(e, t) {
		let n = e + (t || q.SUNDAY) - q.SUNDAY;
		return n > 7 && (n -= 7), wS[n];
	}
	constructor(e) {
		this.wrappedJSObject = this, this.parts = {}, e && typeof e == "object" && this.fromData(e);
	}
	parts = null;
	interval = 1;
	wkst = q.MONDAY;
	until = null;
	count = null;
	freq = null;
	icalclass = "icalrecur";
	icaltype = "recur";
	iterator(e) {
		return new yS({
			rule: this,
			dtstart: e
		});
	}
	clone() {
		return new e(this.toJSON());
	}
	isFinite() {
		return !!(this.count || this.until);
	}
	isByCount() {
		return !(!this.count || this.until);
	}
	addComponent(e, t) {
		let n = e.toUpperCase();
		n in this.parts ? this.parts[n].push(t) : this.parts[n] = [t];
	}
	setComponent(e, t) {
		this.parts[e.toUpperCase()] = t.slice();
	}
	getComponent(e) {
		let t = e.toUpperCase();
		return t in this.parts ? this.parts[t].slice() : [];
	}
	getNextOccurrence(e, t) {
		let n = this.iterator(e), r;
		do
			r = n.next();
		while (r && r.compare(t) <= 0);
		return r && t.zone && (r.zone = t.zone), r;
	}
	fromData(t) {
		for (let e in t) {
			let n = e.toUpperCase();
			n in kS ? Array.isArray(t[e]) ? this.parts[n] = t[e] : this.parts[n] = [t[e]] : this[e] = t[e];
		}
		this.interval && typeof this.interval != "number" && OS.INTERVAL(this.interval, this), this.wkst && typeof this.wkst != "number" && (this.wkst = e.icalDayToNumericDay(this.wkst)), this.until && !(this.until instanceof q) && (this.until = q.fromString(this.until));
	}
	toJSON() {
		let t = Object.create(null);
		t.freq = this.freq, this.count && (t.count = this.count), this.interval > 1 && (t.interval = this.interval);
		for (let [e, n] of Object.entries(this.parts)) Array.isArray(n) && n.length == 1 ? t[e.toLowerCase()] = n[0] : t[e.toLowerCase()] = dS(n);
		return this.until && (t.until = this.until.toString()), "wkst" in this && this.wkst !== q.DEFAULT_WEEK_START && (t.wkst = e.numericDayToIcalDay(this.wkst)), t;
	}
	toString() {
		let t = "FREQ=" + this.freq;
		this.count && (t += ";COUNT=" + this.count), this.interval > 1 && (t += ";INTERVAL=" + this.interval);
		for (let [e, n] of Object.entries(this.parts)) t += ";" + e + "=" + n;
		return this.until && (t += ";UNTIL=" + this.until.toICALString()), "wkst" in this && this.wkst !== q.DEFAULT_WEEK_START && (t += ";WKST=" + e.numericDayToIcalDay(this.wkst)), t;
	}
};
function DS(e, t, n, r) {
	let i = r;
	if (r[0] === "+" && (i = r.slice(1)), i = sS(i), t !== void 0 && r < t) throw Error(e + ": invalid value \"" + r + "\" must be > " + t);
	if (n !== void 0 && r > n) throw Error(e + ": invalid value \"" + r + "\" must be < " + t);
	return i;
}
var OS = {
	FREQ: function(e, t, n) {
		if (TS.indexOf(e) !== -1) t.freq = e;
		else throw Error("invalid frequency \"" + e + "\" expected: \"" + TS.join(", ") + "\"");
	},
	COUNT: function(e, t, n) {
		t.count = sS(e);
	},
	INTERVAL: function(e, t, n) {
		t.interval = sS(e), t.interval < 1 && (t.interval = 1);
	},
	UNTIL: function(e, t, n) {
		t.until = e.length > 10 ? X.icalendar.value["date-time"].fromICAL(e) : X.icalendar.value.date.fromICAL(e), n || (t.until = q.fromString(t.until));
	},
	WKST: function(e, t, n) {
		if (xS.test(e)) t.wkst = ES.icalDayToNumericDay(e);
		else throw Error("invalid WKST value \"" + e + "\"");
	}
}, kS = {
	BYSECOND: DS.bind(void 0, "BYSECOND", 0, 60),
	BYMINUTE: DS.bind(void 0, "BYMINUTE", 0, 59),
	BYHOUR: DS.bind(void 0, "BYHOUR", 0, 23),
	BYDAY: function(e) {
		if (SS.test(e)) return e;
		throw Error("invalid BYDAY value \"" + e + "\"");
	},
	BYMONTHDAY: DS.bind(void 0, "BYMONTHDAY", -31, 31),
	BYYEARDAY: DS.bind(void 0, "BYYEARDAY", -366, 366),
	BYWEEKNO: DS.bind(void 0, "BYWEEKNO", -53, 53),
	BYMONTH: DS.bind(void 0, "BYMONTH", 1, 12),
	BYSETPOS: DS.bind(void 0, "BYSETPOS", -366, 366)
}, AS = /\\\\|\\;|\\,|\\[Nn]/g, jS = /\\|;|,|\n/g, MS = /\\\\|\\,|\\[Nn]/g, NS = /\\|,|\n/g;
function PS(e, t) {
	return {
		matches: /.*/,
		fromICAL: function(t, n) {
			return GS(t, e, n);
		},
		toICAL: function(e, n) {
			let r = t;
			return n && (r = RegExp(r.source + "|" + n, r.flags)), e.replace(r, function(e) {
				switch (e) {
					case "\\": return "\\\\";
					case ";": return "\\;";
					case ",": return "\\,";
					case "\n": return "\\n";
					/* c8 ignore next 2 */
					default: return e;
				}
			});
		}
	};
}
var Y = { defaultType: "text" }, FS = {
	defaultType: "text",
	multiValue: ","
}, IS = {
	defaultType: "text",
	structuredValue: ";"
}, LS = { defaultType: "integer" }, RS = {
	defaultType: "date-time",
	allowedTypes: ["date-time", "date"]
}, zS = { defaultType: "date-time" }, BS = { defaultType: "uri" }, VS = { defaultType: "utc-offset" }, HS = { defaultType: "recur" }, US = {
	defaultType: "date-and-or-time",
	allowedTypes: [
		"date-time",
		"date",
		"text"
	]
};
function WS(e) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\;": return ";";
		case "\\,": return ",";
		case "\\n":
		case "\\N": return "\n";
		/* c8 ignore next 2 */
		default: return e;
	}
}
function GS(e, t, n) {
	return e.indexOf("\\") === -1 ? e : (n && (t = RegExp(t.source + "|\\\\" + n, t.flags)), e.replace(t, WS));
}
var KS = {
	categories: FS,
	url: BS,
	version: Y,
	uid: Y
}, qS = {
	boolean: {
		values: ["TRUE", "FALSE"],
		fromICAL: function(e) {
			switch (e) {
				case "TRUE": return !0;
				case "FALSE": return !1;
				default: return !1;
			}
		},
		toICAL: function(e) {
			return e ? "TRUE" : "FALSE";
		}
	},
	float: {
		matches: /^[+-]?\d+\.\d+$/,
		fromICAL: function(e) {
			let t = parseFloat(e);
			return oS(t) ? 0 : t;
		},
		toICAL: function(e) {
			return String(e);
		}
	},
	integer: {
		fromICAL: function(e) {
			let t = parseInt(e);
			return oS(t) ? 0 : t;
		},
		toICAL: function(e) {
			return String(e);
		}
	},
	"utc-offset": {
		toICAL: function(e) {
			return e.length < 7 ? e.slice(0, 3) + e.slice(4, 6) : e.slice(0, 3) + e.slice(4, 6) + e.slice(7, 9);
		},
		fromICAL: function(e) {
			return e.length < 6 ? e.slice(0, 3) + ":" + e.slice(3, 5) : e.slice(0, 3) + ":" + e.slice(3, 5) + ":" + e.slice(5, 7);
		},
		decorate: function(e) {
			return _S.fromString(e);
		},
		undecorate: function(e) {
			return e.toString();
		}
	}
}, JS = {
	cutype: {
		values: [
			"INDIVIDUAL",
			"GROUP",
			"RESOURCE",
			"ROOM",
			"UNKNOWN"
		],
		allowXName: !0,
		allowIanaToken: !0
	},
	"delegated-from": {
		valueType: "cal-address",
		multiValue: ",",
		multiValueSeparateDQuote: !0
	},
	"delegated-to": {
		valueType: "cal-address",
		multiValue: ",",
		multiValueSeparateDQuote: !0
	},
	encoding: { values: ["8BIT", "BASE64"] },
	fbtype: {
		values: [
			"FREE",
			"BUSY",
			"BUSY-UNAVAILABLE",
			"BUSY-TENTATIVE"
		],
		allowXName: !0,
		allowIanaToken: !0
	},
	member: {
		valueType: "cal-address",
		multiValue: ",",
		multiValueSeparateDQuote: !0
	},
	partstat: {
		values: [
			"NEEDS-ACTION",
			"ACCEPTED",
			"DECLINED",
			"TENTATIVE",
			"DELEGATED",
			"COMPLETED",
			"IN-PROCESS"
		],
		allowXName: !0,
		allowIanaToken: !0
	},
	range: { values: ["THISANDFUTURE"] },
	related: { values: ["START", "END"] },
	reltype: {
		values: [
			"PARENT",
			"CHILD",
			"SIBLING"
		],
		allowXName: !0,
		allowIanaToken: !0
	},
	role: {
		values: [
			"REQ-PARTICIPANT",
			"CHAIR",
			"OPT-PARTICIPANT",
			"NON-PARTICIPANT"
		],
		allowXName: !0,
		allowIanaToken: !0
	},
	rsvp: { values: ["TRUE", "FALSE"] },
	"sent-by": { valueType: "cal-address" },
	tzid: { matches: /^\// },
	value: {
		values: [
			"binary",
			"boolean",
			"cal-address",
			"date",
			"date-time",
			"duration",
			"float",
			"integer",
			"period",
			"recur",
			"text",
			"time",
			"uri",
			"utc-offset"
		],
		allowXName: !0,
		allowIanaToken: !0
	}
}, YS = hS(qS, {
	text: PS(AS, jS),
	uri: {},
	binary: {
		decorate: function(e) {
			return Vx.fromString(e);
		},
		undecorate: function(e) {
			return e.toString();
		}
	},
	"cal-address": {},
	date: {
		decorate: function(e, t) {
			return X.strict ? q.fromDateString(e, t) : q.fromString(e, t);
		},
		undecorate: function(e) {
			return e.toString();
		},
		fromICAL: function(e) {
			return !X.strict && e.length >= 15 ? YS["date-time"].fromICAL(e) : e.slice(0, 4) + "-" + e.slice(4, 6) + "-" + e.slice(6, 8);
		},
		toICAL: function(e) {
			let t = e.length;
			return t == 10 ? e.slice(0, 4) + e.slice(5, 7) + e.slice(8, 10) : t >= 19 ? YS["date-time"].toICAL(e) : e;
		}
	},
	"date-time": {
		fromICAL: function(e) {
			if (!X.strict && e.length == 8) return YS.date.fromICAL(e);
			{
				let t = e.slice(0, 4) + "-" + e.slice(4, 6) + "-" + e.slice(6, 8) + "T" + e.slice(9, 11) + ":" + e.slice(11, 13) + ":" + e.slice(13, 15);
				return e[15] && e[15] === "Z" && (t += "Z"), t;
			}
		},
		toICAL: function(e) {
			let t = e.length;
			if (t == 10 && !X.strict) return YS.date.toICAL(e);
			if (t >= 19) {
				let t = e.slice(0, 4) + e.slice(5, 7) + e.slice(8, 13) + e.slice(14, 16) + e.slice(17, 19);
				return e[19] && e[19] === "Z" && (t += "Z"), t;
			}
			return e;
		},
		decorate: function(e, t) {
			return X.strict ? q.fromDateTimeString(e, t) : q.fromString(e, t);
		},
		undecorate: function(e) {
			return e.toString();
		}
	},
	duration: {
		decorate: function(e) {
			return Wx.fromString(e);
		},
		undecorate: function(e) {
			return e.toString();
		}
	},
	period: {
		fromICAL: function(e) {
			let t = e.split("/");
			return t[0] = YS["date-time"].fromICAL(t[0]), Wx.isValueString(t[1]) || (t[1] = YS["date-time"].fromICAL(t[1])), t;
		},
		toICAL: function(e) {
			return e = e.slice(), !X.strict && e[0].length == 10 ? e[0] = YS.date.toICAL(e[0]) : e[0] = YS["date-time"].toICAL(e[0]), Wx.isValueString(e[1]) || (!X.strict && e[1].length == 10 ? e[1] = YS.date.toICAL(e[1]) : e[1] = YS["date-time"].toICAL(e[1])), e.join("/");
		},
		decorate: function(e, t) {
			return Kx.fromJSON(e, t, !X.strict);
		},
		undecorate: function(e) {
			return e.toJSON();
		}
	},
	recur: {
		fromICAL: function(e) {
			return ES._stringToData(e, !0);
		},
		toICAL: function(e) {
			let t = "";
			for (let [n, r] of Object.entries(e)) n == "until" ? r = r.length > 10 ? YS["date-time"].toICAL(r) : YS.date.toICAL(r) : n == "wkst" ? typeof r == "number" && (r = ES.numericDayToIcalDay(r)) : Array.isArray(r) && (r = r.join(",")), t += n.toUpperCase() + "=" + r + ";";
			return t.slice(0, Math.max(0, t.length - 1));
		},
		decorate: function(e) {
			return ES.fromData(e);
		},
		undecorate: function(e) {
			return e.toJSON();
		}
	},
	time: {
		fromICAL: function(e) {
			if (e.length < 6) return e;
			let t = e.slice(0, 2) + ":" + e.slice(2, 4) + ":" + e.slice(4, 6);
			return e[6] === "Z" && (t += "Z"), t;
		},
		toICAL: function(e) {
			if (e.length < 8) return e;
			let t = e.slice(0, 2) + e.slice(3, 5) + e.slice(6, 8);
			return e[8] === "Z" && (t += "Z"), t;
		}
	}
}), XS = hS(KS, {
	action: Y,
	attach: { defaultType: "uri" },
	attendee: { defaultType: "cal-address" },
	calscale: Y,
	class: Y,
	comment: Y,
	completed: zS,
	contact: Y,
	created: zS,
	description: Y,
	dtend: RS,
	dtstamp: zS,
	dtstart: RS,
	due: RS,
	duration: { defaultType: "duration" },
	exdate: {
		defaultType: "date-time",
		allowedTypes: ["date-time", "date"],
		multiValue: ","
	},
	exrule: HS,
	freebusy: {
		defaultType: "period",
		multiValue: ","
	},
	geo: {
		defaultType: "float",
		structuredValue: ";"
	},
	"last-modified": zS,
	location: Y,
	method: Y,
	organizer: { defaultType: "cal-address" },
	"percent-complete": LS,
	priority: LS,
	prodid: Y,
	"related-to": Y,
	repeat: LS,
	rdate: {
		defaultType: "date-time",
		allowedTypes: [
			"date-time",
			"date",
			"period"
		],
		multiValue: ",",
		detectType: function(e) {
			return e.indexOf("/") === -1 ? e.indexOf("T") === -1 ? "date" : "date-time" : "period";
		}
	},
	"recurrence-id": RS,
	resources: FS,
	"request-status": IS,
	rrule: HS,
	sequence: LS,
	status: Y,
	summary: Y,
	transp: Y,
	trigger: {
		defaultType: "duration",
		allowedTypes: ["duration", "date-time"]
	},
	tzoffsetfrom: VS,
	tzoffsetto: VS,
	tzurl: BS,
	tzid: Y,
	tzname: Y
}), ZS = hS(qS, {
	text: PS(MS, NS),
	uri: PS(MS, NS),
	date: {
		decorate: function(e) {
			return vS.fromDateAndOrTimeString(e, "date");
		},
		undecorate: function(e) {
			return e.toString();
		},
		fromICAL: function(e) {
			return e.length == 8 ? YS.date.fromICAL(e) : e[0] == "-" && e.length == 6 ? e.slice(0, 4) + "-" + e.slice(4) : e;
		},
		toICAL: function(e) {
			return e.length == 10 ? YS.date.toICAL(e) : e[0] == "-" && e.length == 7 ? e.slice(0, 4) + e.slice(5) : e;
		}
	},
	time: {
		decorate: function(e) {
			return vS.fromDateAndOrTimeString("T" + e, "time");
		},
		undecorate: function(e) {
			return e.toString();
		},
		fromICAL: function(e) {
			let t = ZS.time._splitZone(e, !0), n = t[0], r = t[1];
			return r.length == 6 ? r = r.slice(0, 2) + ":" + r.slice(2, 4) + ":" + r.slice(4, 6) : r.length == 4 && r[0] != "-" ? r = r.slice(0, 2) + ":" + r.slice(2, 4) : r.length == 5 && (r = r.slice(0, 3) + ":" + r.slice(3, 5)), n.length == 5 && (n[0] == "-" || n[0] == "+") && (n = n.slice(0, 3) + ":" + n.slice(3)), r + n;
		},
		toICAL: function(e) {
			let t = ZS.time._splitZone(e), n = t[0], r = t[1];
			return r.length == 8 ? r = r.slice(0, 2) + r.slice(3, 5) + r.slice(6, 8) : r.length == 5 && r[0] != "-" ? r = r.slice(0, 2) + r.slice(3, 5) : r.length == 6 && (r = r.slice(0, 3) + r.slice(4, 6)), n.length == 6 && (n[0] == "-" || n[0] == "+") && (n = n.slice(0, 3) + n.slice(4)), r + n;
		},
		_splitZone: function(e, t) {
			let n = e.length - 1, r = e.length - (t ? 5 : 6), i = e[r], a, o;
			return e[n] == "Z" ? (a = e[n], o = e.slice(0, Math.max(0, n))) : e.length > 6 && (i == "-" || i == "+") ? (a = e.slice(r), o = e.slice(0, Math.max(0, r))) : (a = "", o = e), [a, o];
		}
	},
	"date-time": {
		decorate: function(e) {
			return vS.fromDateAndOrTimeString(e, "date-time");
		},
		undecorate: function(e) {
			return e.toString();
		},
		fromICAL: function(e) {
			return ZS["date-and-or-time"].fromICAL(e);
		},
		toICAL: function(e) {
			return ZS["date-and-or-time"].toICAL(e);
		}
	},
	"date-and-or-time": {
		decorate: function(e) {
			return vS.fromDateAndOrTimeString(e, "date-and-or-time");
		},
		undecorate: function(e) {
			return e.toString();
		},
		fromICAL: function(e) {
			let t = e.split("T");
			return (t[0] ? ZS.date.fromICAL(t[0]) : "") + (t[1] ? "T" + ZS.time.fromICAL(t[1]) : "");
		},
		toICAL: function(e) {
			let t = e.split("T");
			return ZS.date.toICAL(t[0]) + (t[1] ? "T" + ZS.time.toICAL(t[1]) : "");
		}
	},
	timestamp: YS["date-time"],
	"language-tag": { matches: /^[a-zA-Z0-9-]+$/ },
	"phone-number": {
		fromICAL: function(e) {
			return Array.from(e).filter(function(e) {
				return e === "\\" ? void 0 : e;
			}).join("");
		},
		toICAL: function(e) {
			return Array.from(e).map(function(e) {
				return e === "," || e === ";" ? "\\" + e : e;
			}).join("");
		}
	}
}), QS = {
	type: {
		valueType: "text",
		multiValue: ","
	},
	value: {
		values: [
			"text",
			"uri",
			"date",
			"time",
			"date-time",
			"date-and-or-time",
			"timestamp",
			"boolean",
			"integer",
			"float",
			"utc-offset",
			"language-tag"
		],
		allowXName: !0,
		allowIanaToken: !0
	}
}, $S = hS(KS, {
	adr: {
		defaultType: "text",
		structuredValue: ";",
		multiValue: ","
	},
	anniversary: US,
	bday: US,
	caladruri: BS,
	caluri: BS,
	clientpidmap: IS,
	email: Y,
	fburl: BS,
	fn: Y,
	gender: IS,
	geo: BS,
	impp: BS,
	key: BS,
	kind: Y,
	lang: { defaultType: "language-tag" },
	logo: BS,
	member: BS,
	n: {
		defaultType: "text",
		structuredValue: ";",
		multiValue: ","
	},
	nickname: FS,
	note: Y,
	org: {
		defaultType: "text",
		structuredValue: ";"
	},
	photo: BS,
	related: BS,
	rev: { defaultType: "timestamp" },
	role: Y,
	sound: BS,
	source: BS,
	tel: {
		defaultType: "uri",
		allowedTypes: ["uri", "text"]
	},
	title: Y,
	tz: {
		defaultType: "text",
		allowedTypes: [
			"text",
			"utc-offset",
			"uri"
		]
	},
	xml: Y
}), eC = hS(qS, {
	binary: YS.binary,
	date: ZS.date,
	"date-time": ZS["date-time"],
	"phone-number": ZS["phone-number"],
	uri: YS.uri,
	text: ZS.text,
	time: YS.time,
	vcard: YS.text,
	"utc-offset": {
		toICAL: function(e) {
			return e.slice(0, 7);
		},
		fromICAL: function(e) {
			return e.slice(0, 7);
		},
		decorate: function(e) {
			return _S.fromString(e);
		},
		undecorate: function(e) {
			return e.toString();
		}
	}
}), tC = {
	type: {
		valueType: "text",
		multiValue: ","
	},
	value: {
		values: [
			"text",
			"uri",
			"date",
			"date-time",
			"phone-number",
			"time",
			"boolean",
			"integer",
			"float",
			"utc-offset",
			"vcard",
			"binary"
		],
		allowXName: !0,
		allowIanaToken: !0
	}
}, nC = hS(KS, {
	fn: Y,
	n: {
		defaultType: "text",
		structuredValue: ";",
		multiValue: ","
	},
	nickname: FS,
	photo: {
		defaultType: "binary",
		allowedTypes: ["binary", "uri"]
	},
	bday: {
		defaultType: "date-time",
		allowedTypes: ["date-time", "date"],
		detectType: function(e) {
			return e.indexOf("T") === -1 ? "date" : "date-time";
		}
	},
	adr: {
		defaultType: "text",
		structuredValue: ";",
		multiValue: ","
	},
	label: Y,
	tel: { defaultType: "phone-number" },
	email: Y,
	mailer: Y,
	tz: {
		defaultType: "utc-offset",
		allowedTypes: ["utc-offset", "text"]
	},
	geo: {
		defaultType: "float",
		structuredValue: ";"
	},
	title: Y,
	role: Y,
	logo: {
		defaultType: "binary",
		allowedTypes: ["binary", "uri"]
	},
	agent: {
		defaultType: "vcard",
		allowedTypes: [
			"vcard",
			"text",
			"uri"
		]
	},
	org: IS,
	note: FS,
	prodid: Y,
	rev: {
		defaultType: "date-time",
		allowedTypes: ["date-time", "date"],
		detectType: function(e) {
			return e.indexOf("T") === -1 ? "date" : "date-time";
		}
	},
	"sort-string": Y,
	sound: {
		defaultType: "binary",
		allowedTypes: ["binary", "uri"]
	},
	class: Y,
	key: {
		defaultType: "binary",
		allowedTypes: ["binary", "text"]
	}
}), rC = {
	name: "ical",
	value: YS,
	param: JS,
	property: XS,
	propertyGroups: !1
}, iC = {
	name: "vcard4",
	value: ZS,
	param: QS,
	property: $S,
	propertyGroups: !0
}, aC = {
	name: "vcard3",
	value: eC,
	param: tC,
	property: nC,
	propertyGroups: !0
}, X = {
	strict: !0,
	defaultSet: rC,
	defaultType: "unknown",
	components: {
		vcard: iC,
		vcard3: aC,
		vevent: rC,
		vtodo: rC,
		vjournal: rC,
		valarm: rC,
		vtimezone: rC,
		daylight: rC,
		standard: rC
	},
	icalendar: rC,
	vcard: iC,
	vcard3: aC,
	getDesignSet: function(e) {
		return e && e in X.components ? X.components[e] : X.defaultSet;
	}
}, oC = "\r\n", sC = "unknown", cC = {
	"\"": "^'",
	"\n": "^n",
	"^": "^^"
};
function lC(e) {
	typeof e[0] == "string" && (e = [e]);
	let t = 0, n = e.length, r = "";
	for (; t < n; t++) r += lC.component(e[t]) + oC;
	return r;
}
lC.component = function(e, t) {
	let n = e[0].toUpperCase(), r = "BEGIN:" + n + oC, i = e[1], a = 0, o = i.length, s = e[0];
	for (s === "vcard" && e[1].length > 0 && (e[1][0][0] !== "version" || e[1][0][3] !== "4.0") && (s = "vcard3"), t ||= X.getDesignSet(s); a < o; a++) r += lC.property(i[a], t) + oC;
	let c = e[2] || [], l = 0, u = c.length;
	for (; l < u; l++) r += lC.component(c[l], t) + oC;
	return r += "END:" + n, r;
}, lC.property = function(e, t, n) {
	let r = e[0].toUpperCase(), i = e[0], a = e[1];
	t ||= X.defaultSet;
	let o = a.group, s;
	s = t.propertyGroups && o ? o.toUpperCase() + "." + r : r;
	for (let [e, n] of Object.entries(a)) {
		if (t.propertyGroups && e == "group") continue;
		let r = t.param[e], i = r && r.multiValue;
		i && Array.isArray(n) ? (n = n.map(function(e) {
			return e = lC._rfc6868Unescape(e), e = lC.paramPropertyValue(e, r.multiValueSeparateDQuote), e;
		}), n = lC.multiValue(n, i, "unknown", null, t)) : (n = lC._rfc6868Unescape(n), n = lC.paramPropertyValue(n)), s += ";" + e.toUpperCase() + "=" + n;
	}
	if (e.length === 3) return s + ":";
	let c = e[2], l, u = !1, d = !1, f = !1;
	return i in t.property ? (l = t.property[i], "multiValue" in l && (u = l.multiValue), "structuredValue" in l && Array.isArray(e[3]) && (d = l.structuredValue), "defaultType" in l ? c === l.defaultType && (f = !0) : c === sC && (f = !0)) : c === sC && (f = !0), f || (s += ";VALUE=" + c.toUpperCase()), s += ":", s += u && d ? lC.multiValue(e[3], d, c, u, t, d) : u ? lC.multiValue(e.slice(3), u, c, null, t, !1) : d ? lC.multiValue(e[3], d, c, null, t, d) : lC.value(e[3], c, t, !1), n ? s : fS(s);
}, lC.paramPropertyValue = function(e, t) {
	return !t && e.indexOf(",") === -1 && e.indexOf(":") === -1 && e.indexOf(";") === -1 ? e : "\"" + e + "\"";
}, lC.multiValue = function(e, t, n, r, i, a) {
	let o = "", s = e.length, c = 0;
	for (; c < s; c++) r && Array.isArray(e[c]) ? o += lC.multiValue(e[c], r, n, null, i, a) : o += lC.value(e[c], n, i, a), c !== s - 1 && (o += t);
	return o;
}, lC.value = function(e, t, n, r) {
	return t in n.value && "toICAL" in n.value[t] ? n.value[t].toICAL(e, r) : e;
}, lC._rfc6868Unescape = function(e) {
	return e.replace(/[\n^"]/g, function(e) {
		return cC[e];
	});
};
var uC = 0, dC = 1, fC = 2, pC = 3, mC = class e {
	static fromString(t, n) {
		return new e(J.property(t, n));
	}
	constructor(e, t) {
		this._parent = t || null, typeof e == "string" ? (this.jCal = [
			e,
			{},
			X.defaultType
		], this.jCal[fC] = this.getDefaultType()) : this.jCal = e, this._updateType();
	}
	get type() {
		return this.jCal[fC];
	}
	get name() {
		return this.jCal[uC];
	}
	get parent() {
		return this._parent;
	}
	set parent(e) {
		let t = !this._parent || e && e._designSet != this._parent._designSet;
		this._parent = e, this.type == X.defaultType && t && (this.jCal[fC] = this.getDefaultType(), this._updateType());
	}
	get _designSet() {
		return this.parent ? this.parent._designSet : X.defaultSet;
	}
	_updateType() {
		let e = this._designSet;
		this.type in e.value && (this.isDecorated = "decorate" in e.value[this.type], this.name in e.property && (this.isMultiValue = "multiValue" in e.property[this.name], this.isStructuredValue = "structuredValue" in e.property[this.name]));
	}
	_hydrateValue(e) {
		return this._values && this._values[e] ? this._values[e] : this.jCal.length <= pC + e ? null : this.isDecorated ? (this._values ||= [], this._values[e] = this._decorate(this.jCal[pC + e])) : this.jCal[pC + e];
	}
	_decorate(e) {
		return this._designSet.value[this.type].decorate(e, this);
	}
	_undecorate(e) {
		return this._designSet.value[this.type].undecorate(e, this);
	}
	_setDecoratedValue(e, t) {
		this._values ||= [], typeof e == "object" && "icaltype" in e ? (this.jCal[pC + t] = this._undecorate(e), this._values[t] = e) : (this.jCal[pC + t] = e, this._values[t] = this._decorate(e));
	}
	getParameter(e) {
		if (e in this.jCal[dC]) return this.jCal[dC][e];
	}
	getFirstParameter(e) {
		let t = this.getParameter(e);
		return Array.isArray(t) ? t[0] : t;
	}
	setParameter(e, t) {
		let n = e.toLowerCase();
		typeof t == "string" && n in this._designSet.param && "multiValue" in this._designSet.param[n] && (t = [t]), this.jCal[dC][e] = t;
	}
	removeParameter(e) {
		delete this.jCal[dC][e];
	}
	getDefaultType() {
		let e = this.jCal[uC], t = this._designSet;
		if (e in t.property) {
			let n = t.property[e];
			if ("defaultType" in n) return n.defaultType;
		}
		return X.defaultType;
	}
	resetType(e) {
		this.removeAllValues(), this.jCal[fC] = e, this._updateType();
	}
	getFirstValue() {
		return this._hydrateValue(0);
	}
	getValues() {
		let e = this.jCal.length - pC;
		if (e < 1) return [];
		let t = 0, n = [];
		for (; t < e; t++) n[t] = this._hydrateValue(t);
		return n;
	}
	removeAllValues() {
		this._values && (this._values.length = 0), this.jCal.length = 3;
	}
	setValues(e) {
		if (!this.isMultiValue) throw Error(this.name + ": does not not support mulitValue.\noverride isMultiValue");
		let t = e.length, n = 0;
		if (this.removeAllValues(), t > 0 && typeof e[0] == "object" && "icaltype" in e[0] && this.resetType(e[0].icaltype), this.isDecorated) for (; n < t; n++) this._setDecoratedValue(e[n], n);
		else for (; n < t; n++) this.jCal[pC + n] = e[n];
	}
	setValue(e) {
		this.removeAllValues(), typeof e == "object" && "icaltype" in e && this.resetType(e.icaltype), this.isDecorated ? this._setDecoratedValue(e, 0) : this.jCal[pC] = e;
	}
	toJSON() {
		return this.jCal;
	}
	toICALString() {
		return lC.property(this.jCal, this._designSet, !0);
	}
}, hC = 0, gC = 1, _C = 2, vC = 0, yC = 3, bC = class e {
	static fromString(t) {
		return new e(J.component(t));
	}
	constructor(e, t) {
		typeof e == "string" && (e = [
			e,
			[],
			[]
		]), this.jCal = e, this.parent = t || null, !this.parent && this.name === "vcalendar" && (this._timezoneCache = /* @__PURE__ */ new Map());
	}
	_hydratedPropertyCount = 0;
	_hydratedComponentCount = 0;
	_timezoneCache = null;
	_components = null;
	_properties = null;
	get name() {
		return this.jCal[hC];
	}
	get _designSet() {
		let e = this.parent && this.parent._designSet;
		if (!e && this.name == "vcard") {
			let e = this.jCal[gC]?.[0];
			if (e && e[vC] == "version" && e[yC] == "3.0") return X.getDesignSet("vcard3");
		}
		return e || X.getDesignSet(this.name);
	}
	_hydrateComponent(t) {
		if (this._components || (this._components = [], this._hydratedComponentCount = 0), this._components[t]) return this._components[t];
		let n = new e(this.jCal[_C][t], this);
		return this._hydratedComponentCount++, this._components[t] = n;
	}
	_hydrateProperty(e) {
		if (this._properties || (this._properties = [], this._hydratedPropertyCount = 0), this._properties[e]) return this._properties[e];
		let t = new mC(this.jCal[gC][e], this);
		return this._hydratedPropertyCount++, this._properties[e] = t;
	}
	getFirstSubcomponent(e) {
		if (e) {
			let t = 0, n = this.jCal[_C], r = n.length;
			for (; t < r; t++) if (n[t][hC] === e) return this._hydrateComponent(t);
		} else if (this.jCal[_C].length) return this._hydrateComponent(0);
		return null;
	}
	getAllSubcomponents(e) {
		let t = this.jCal[_C].length, n = 0;
		if (e) {
			let r = this.jCal[_C], i = [];
			for (; n < t; n++) e === r[n][hC] && i.push(this._hydrateComponent(n));
			return i;
		}
		if (!this._components || this._hydratedComponentCount !== t) for (; n < t; n++) this._hydrateComponent(n);
		return this._components || [];
	}
	hasProperty(e) {
		let t = this.jCal[gC], n = t.length, r = 0;
		for (; r < n; r++) if (t[r][hC] === e) return !0;
		return !1;
	}
	getFirstProperty(e) {
		if (e) {
			let t = 0, n = this.jCal[gC], r = n.length;
			for (; t < r; t++) if (n[t][hC] === e) return this._hydrateProperty(t);
		} else if (this.jCal[gC].length) return this._hydrateProperty(0);
		return null;
	}
	getFirstPropertyValue(e) {
		let t = this.getFirstProperty(e);
		return t ? t.getFirstValue() : null;
	}
	getAllProperties(e) {
		let t = this.jCal[gC].length, n = 0;
		if (e) {
			let r = this.jCal[gC], i = [];
			for (; n < t; n++) e === r[n][hC] && i.push(this._hydrateProperty(n));
			return i;
		}
		if (!this._properties || this._hydratedPropertyCount !== t) for (; n < t; n++) this._hydrateProperty(n);
		return this._properties || [];
	}
	_removeObjectByIndex(e, t, n) {
		if (t ||= [], t[n]) {
			let e = t[n];
			"parent" in e && (e.parent = null);
		}
		t.splice(n, 1), this.jCal[e].splice(n, 1);
	}
	_removeObject(e, t, n) {
		let r = 0, i = this.jCal[e], a = i.length, o = this[t];
		if (typeof n == "string") {
			for (; r < a; r++) if (i[r][hC] === n) return this._removeObjectByIndex(e, o, r), !0;
		} else if (o) {
			for (; r < a; r++) if (o[r] && o[r] === n) return this._removeObjectByIndex(e, o, r), !0;
		}
		return !1;
	}
	_removeAllObjects(e, t, n) {
		let r = this[t], i = this.jCal[e], a = i.length - 1;
		for (; a >= 0; a--) (!n || i[a][hC] === n) && this._removeObjectByIndex(e, r, a);
	}
	addSubcomponent(e) {
		this._components || (this._components = [], this._hydratedComponentCount = 0), e.parent && e.parent.removeSubcomponent(e);
		let t = this.jCal[_C].push(e.jCal);
		return this._components[t - 1] = e, this._hydratedComponentCount++, e.parent = this, e;
	}
	removeSubcomponent(e) {
		let t = this._removeObject(_C, "_components", e);
		return t && this._hydratedComponentCount--, t;
	}
	removeAllSubcomponents(e) {
		let t = this._removeAllObjects(_C, "_components", e);
		return this._hydratedComponentCount = 0, t;
	}
	addProperty(e) {
		if (!(e instanceof mC)) throw TypeError("must be instance of ICAL.Property");
		this._properties || (this._properties = [], this._hydratedPropertyCount = 0), e.parent && e.parent.removeProperty(e);
		let t = this.jCal[gC].push(e.jCal);
		return this._properties[t - 1] = e, this._hydratedPropertyCount++, e.parent = this, e;
	}
	addPropertyWithValue(e, t) {
		let n = new mC(e);
		return n.setValue(t), this.addProperty(n), n;
	}
	updatePropertyWithValue(e, t) {
		let n = this.getFirstProperty(e);
		return n ? n.setValue(t) : n = this.addPropertyWithValue(e, t), n;
	}
	removeProperty(e) {
		let t = this._removeObject(gC, "_properties", e);
		return t && this._hydratedPropertyCount--, t;
	}
	removeAllProperties(e) {
		let t = this._removeAllObjects(gC, "_properties", e);
		return this._hydratedPropertyCount = 0, t;
	}
	toJSON() {
		return this.jCal;
	}
	toString() {
		return lC.component(this.jCal, this._designSet);
	}
	getTimeZoneByID(e) {
		if (this.parent) return this.parent.getTimeZoneByID(e);
		if (!this._timezoneCache) return null;
		if (this._timezoneCache.has(e)) return this._timezoneCache.get(e);
		let t = this.getAllSubcomponents("vtimezone");
		for (let n of t) if (n.getFirstProperty("tzid").getFirstValue() === e) {
			let t = new nS({
				component: n,
				tzid: e
			});
			return this._timezoneCache.set(e, t), t;
		}
		return null;
	}
}, xC = class {
	constructor(e) {
		this.ruleDates = [], this.exDates = [], this.fromData(e);
	}
	complete = !1;
	ruleIterators = null;
	ruleDates = null;
	exDates = null;
	ruleDateInc = 0;
	exDateInc = 0;
	exDate = null;
	ruleDate = null;
	dtstart = null;
	last = null;
	fromData(e) {
		let t = cS(e.dtstart, q);
		if (t) this.dtstart = t;
		else throw Error(".dtstart (ICAL.Time) must be given");
		if (e.component) this._init(e.component);
		else {
			if (this.last = cS(e.last, q) || t.clone(), !e.ruleIterators) throw Error(".ruleIterators or .component must be given");
			this.ruleIterators = e.ruleIterators.map(function(e) {
				return cS(e, yS);
			}), this.ruleDateInc = e.ruleDateInc, this.exDateInc = e.exDateInc, e.ruleDates && (this.ruleDates = e.ruleDates.map((e) => cS(e, q)), this.ruleDate = this.ruleDates[this.ruleDateInc]), e.exDates && (this.exDates = e.exDates.map((e) => cS(e, q)), this.exDate = this.exDates[this.exDateInc]), e.complete !== void 0 && (this.complete = e.complete);
		}
	}
	_compare_special(e, t) {
		return !e.isDate && t.isDate ? new q({
			year: e.year,
			month: e.month,
			day: e.day
		}).compare(t) : e.compare(t);
	}
	next() {
		let e, t, n, r = 0;
		for (;;) {
			if (r++ > 500) throw Error("max tries have occurred, rule may be impossible to fulfill.");
			if (t = this.ruleDate, e = this._nextRecurrenceIter(this.last), !t && !e) {
				this.complete = !0;
				break;
			}
			if ((!t || e && t.compare(e.last) > 0) && (t = e.last.clone(), e.next()), this.ruleDate === t && this._nextRuleDay(), this.last = t, this.exDate && (n = this._compare_special(this.last, this.exDate), n > 0 && this._nextExDay(), n === 0)) {
				this._nextExDay();
				continue;
			}
			return this.last;
		}
	}
	toJSON() {
		function e(e) {
			return e.toJSON();
		}
		let t = Object.create(null);
		return t.ruleIterators = this.ruleIterators.map(e), this.ruleDates && (t.ruleDates = this.ruleDates.map(e)), this.exDates && (t.exDates = this.exDates.map(e)), t.ruleDateInc = this.ruleDateInc, t.exDateInc = this.exDateInc, t.last = this.last.toJSON(), t.dtstart = this.dtstart.toJSON(), t.complete = this.complete, t;
	}
	_extractDates(e, t) {
		let n = [], r = e.getAllProperties(t);
		for (let e = 0, t = r.length; e < t; e++) for (let t of r[e].getValues()) {
			let e = uS(n, t, (e, t) => e.compare(t));
			n.splice(e, 0, t);
		}
		return n;
	}
	_init(e) {
		if (this.ruleIterators = [], this.last = this.dtstart.clone(), !e.hasProperty("rdate") && !e.hasProperty("rrule") && !e.hasProperty("recurrence-id")) {
			this.ruleDate = this.last.clone(), this.complete = !0;
			return;
		}
		if (e.hasProperty("rdate") && (this.ruleDates = this._extractDates(e, "rdate"), this.ruleDates[0] && this.ruleDates[0].compare(this.dtstart) < 0 ? (this.ruleDateInc = 0, this.last = this.ruleDates[0].clone()) : this.ruleDateInc = uS(this.ruleDates, this.last, (e, t) => e.compare(t)), this.ruleDate = this.ruleDates[this.ruleDateInc]), e.hasProperty("rrule")) {
			let t = e.getAllProperties("rrule"), n = 0, r = t.length, i, a;
			for (; n < r; n++) i = t[n].getFirstValue(), a = i.iterator(this.dtstart), this.ruleIterators.push(a), a.next();
		}
		e.hasProperty("exdate") && (this.exDates = this._extractDates(e, "exdate"), this.exDateInc = uS(this.exDates, this.last, this._compare_special), this.exDate = this.exDates[this.exDateInc]);
	}
	_nextExDay() {
		this.exDate = this.exDates[++this.exDateInc];
	}
	_nextRuleDay() {
		this.ruleDate = this.ruleDates[++this.ruleDateInc];
	}
	_nextRecurrenceIter() {
		let e = this.ruleIterators;
		if (e.length === 0) return null;
		let t = e.length, n, r, i = 0, a;
		for (; i < t; i++) {
			if (n = e[i], r = n.last, n.completed) {
				t--, i !== 0 && i--, e.splice(i, 1);
				continue;
			}
			(!a || a.last.compare(r) > 0) && (a = n);
		}
		return a;
	}
}, SC = class e {
	constructor(e, t) {
		e instanceof bC || (t = e, e = null), this.component = e || new bC("vevent"), this._rangeExceptionCache = Object.create(null), this.exceptions = Object.create(null), this.rangeExceptions = [], t && t.strictExceptions && (this.strictExceptions = t.strictExceptions), t && t.exceptions ? t.exceptions.forEach(this.relateException, this) : this.component.parent && !this.isRecurrenceException() && this.component.parent.getAllSubcomponents("vevent").forEach(function(e) {
			e.hasProperty("recurrence-id") && this.relateException(e);
		}, this);
	}
	static THISANDFUTURE = "THISANDFUTURE";
	exceptions = null;
	strictExceptions = !1;
	relateException(t) {
		if (this.isRecurrenceException()) throw Error("cannot relate exception to exceptions");
		if (t instanceof bC && (t = new e(t)), this.strictExceptions && t.uid !== this.uid) throw Error("attempted to relate unrelated exception");
		let n = t.recurrenceId.toString();
		if (this.exceptions[n] = t, t.modifiesFuture()) {
			let e = [t.recurrenceId.toUnixTime(), n], r = uS(this.rangeExceptions, e, CC);
			this.rangeExceptions.splice(r, 0, e);
		}
	}
	modifiesFuture() {
		return this.component.hasProperty("recurrence-id") ? this.component.getFirstProperty("recurrence-id").getParameter("range") === e.THISANDFUTURE : !1;
	}
	findRangeException(e) {
		if (!this.rangeExceptions.length) return null;
		let t = e.toUnixTime(), n = uS(this.rangeExceptions, [t], CC);
		if (--n, n < 0) return null;
		let r = this.rangeExceptions[n];
		return t < r[0] ? null : r[1];
	}
	getOccurrenceDetails(e) {
		let t = e.toString(), n = e.convertToZone(nS.utcTimezone).toString(), r, i = { recurrenceId: e };
		if (t in this.exceptions) r = i.item = this.exceptions[t], i.startDate = r.startDate, i.endDate = r.endDate, i.item = r;
		else if (n in this.exceptions) r = this.exceptions[n], i.startDate = r.startDate, i.endDate = r.endDate, i.item = r;
		else {
			let t = this.findRangeException(e), n;
			if (t) {
				let r = this.exceptions[t];
				i.item = r;
				let a = this._rangeExceptionCache[t];
				if (!a) {
					let e = r.recurrenceId.clone(), n = r.startDate.clone();
					e.zone = n.zone, a = n.subtractDate(e), this._rangeExceptionCache[t] = a;
				}
				let o = e.clone();
				o.zone = r.startDate.zone, o.addDuration(a), n = o.clone(), n.addDuration(r.duration), i.startDate = o, i.endDate = n;
			} else n = e.clone(), n.addDuration(this.duration), i.endDate = n, i.startDate = e, i.item = this;
		}
		return i;
	}
	iterator(e) {
		return new xC({
			component: this.component,
			dtstart: e || this.startDate
		});
	}
	isRecurring() {
		let e = this.component;
		return e.hasProperty("rrule") || e.hasProperty("rdate");
	}
	isRecurrenceException() {
		return this.component.hasProperty("recurrence-id");
	}
	getRecurrenceTypes() {
		let e = this.component.getAllProperties("rrule"), t = 0, n = e.length, r = Object.create(null);
		for (; t < n; t++) {
			let n = e[t].getFirstValue();
			r[n.freq] = !0;
		}
		return r;
	}
	get uid() {
		return this._firstProp("uid");
	}
	set uid(e) {
		this._setProp("uid", e);
	}
	get startDate() {
		return this._firstProp("dtstart");
	}
	set startDate(e) {
		this._setTime("dtstart", e);
	}
	get endDate() {
		let e = this._firstProp("dtend");
		if (!e) {
			let t = this._firstProp("duration");
			e = this.startDate.clone(), t ? e.addDuration(t) : e.isDate && (e.day += 1);
		}
		return e;
	}
	set endDate(e) {
		this.component.hasProperty("duration") && this.component.removeProperty("duration"), this._setTime("dtend", e);
	}
	get duration() {
		return this._firstProp("duration") || this.endDate.subtractDateTz(this.startDate);
	}
	set duration(e) {
		this.component.hasProperty("dtend") && this.component.removeProperty("dtend"), this._setProp("duration", e);
	}
	get location() {
		return this._firstProp("location");
	}
	set location(e) {
		this._setProp("location", e);
	}
	get attendees() {
		return this.component.getAllProperties("attendee");
	}
	get summary() {
		return this._firstProp("summary");
	}
	set summary(e) {
		this._setProp("summary", e);
	}
	get description() {
		return this._firstProp("description");
	}
	set description(e) {
		this._setProp("description", e);
	}
	get color() {
		return this._firstProp("color");
	}
	set color(e) {
		this._setProp("color", e);
	}
	get organizer() {
		return this._firstProp("organizer");
	}
	set organizer(e) {
		this._setProp("organizer", e);
	}
	get sequence() {
		return this._firstProp("sequence");
	}
	set sequence(e) {
		this._setProp("sequence", e);
	}
	get recurrenceId() {
		return this._firstProp("recurrence-id");
	}
	set recurrenceId(e) {
		this._setTime("recurrence-id", e);
	}
	_setTime(e, t) {
		let n = this.component.getFirstProperty(e);
		n || (n = new mC(e), this.component.addProperty(n)), t.zone === nS.localTimezone || t.zone === nS.utcTimezone ? n.removeParameter("tzid") : n.setParameter("tzid", t.zone.tzid), n.setValue(t);
	}
	_setProp(e, t) {
		this.component.updatePropertyWithValue(e, t);
	}
	_firstProp(e) {
		return this.component.getFirstPropertyValue(e);
	}
	toString() {
		return this.component.toString();
	}
};
function CC(e, t) {
	return e[0] > t[0] ? 1 : t[0] > e[0] ? -1 : 0;
}
var wC = {
	foldLength: 75,
	debug: !1,
	newLineChar: "\r\n",
	Binary: Vx,
	Component: bC,
	ComponentParser: class {
		constructor(e) {
			e === void 0 && (e = {});
			for (let [t, n] of Object.entries(e)) this[t] = n;
		}
		parseEvent = !0;
		parseTimezone = !0;
		oncomplete = function() {};
		onerror = function(e) {};
		ontimezone = function(e) {};
		onevent = function(e) {};
		process(e) {
			typeof e == "string" && (e = J(e)), e instanceof bC || (e = new bC(e));
			let t = e.getAllSubcomponents(), n = 0, r = t.length, i;
			for (; n < r; n++) switch (i = t[n], i.name) {
				case "vtimezone":
					if (this.parseTimezone) {
						let e = i.getFirstPropertyValue("tzid");
						e && this.ontimezone(new nS({
							tzid: e,
							component: i
						}));
					}
					break;
				case "vevent":
					this.parseEvent && this.onevent(new SC(i));
					break;
				default: continue;
			}
			this.oncomplete();
		}
	},
	Duration: Wx,
	Event: SC,
	Period: Kx,
	Property: mC,
	Recur: ES,
	RecurExpansion: xC,
	RecurIterator: yS,
	Time: q,
	Timezone: nS,
	TimezoneService: iS,
	UtcOffset: _S,
	VCardTime: vS,
	parse: J,
	stringify: lC,
	design: X,
	helpers: gS
}, TC = class {
	constructor(e) {
		this.maxIterations = e.maxIterations == null ? 1e3 : e.maxIterations, this.skipInvalidDates = e.skipInvalidDates != null && e.skipInvalidDates, this.jCalData = wC.parse(e.ics), this.component = new wC.Component(this.jCalData), this.events = this.component.getAllSubcomponents("vevent").map((e) => new wC.Event(e)), this.skipInvalidDates && (this.events = this.events.filter((e) => {
			try {
				return e.startDate.toJSDate(), e.endDate.toJSDate(), !0;
			} catch {
				return !1;
			}
		}));
	}
	between(e, t) {
		function n(n, r) {
			return (!e || r >= e.getTime()) && (!t || n <= t.getTime());
		}
		function r(e) {
			let t = e.startDate.toJSDate().getTime(), n = e.endDate.toJSDate().getTime();
			return e.endDate.isDate && n > t && --n, {
				startTime: t,
				endTime: n
			};
		}
		let i = [];
		this.events.forEach((e) => {
			e.isRecurrenceException() && i.push(e);
		});
		let a = {
			events: [],
			occurrences: []
		};
		return this.events.filter((e) => !e.isRecurrenceException()).forEach((e) => {
			let o = [];
			if (e.component.getAllProperties("exdate").forEach((e) => {
				let t = e.getFirstValue();
				o.push(t.toJSDate().getTime());
			}), e.isRecurring()) {
				let s = e.iterator(), c, l = 0;
				do
					if (l += 1, c = s.next(), c) {
						let s = e.getOccurrenceDetails(c), { startTime: l, endTime: u } = r(s), d = o.indexOf(l) !== -1, f = i.find((t) => t.uid === e.uid && t.recurrenceId.toJSDate().getTime() === s.startDate.toJSDate().getTime());
						if (t && l > t.getTime()) break;
						n(l, u) && (f ? a.events.push(f) : d || a.occurrences.push(s));
					}
				while (c && (!this.maxIterations || l < this.maxIterations));
				return;
			}
			let { startTime: s, endTime: c } = r(e);
			n(s, c) && a.events.push(e);
		}), a;
	}
	before(e) {
		return this.between(void 0, e);
	}
	after(e) {
		return this.between(e);
	}
	all() {
		return this.between();
	}
}, EC = {
	parseMeta(e) {
		return e.url && e.format === "ics" ? {
			url: e.url,
			format: "ics"
		} : null;
	},
	fetch(e, t, n) {
		let r = e.eventSource.meta, { internalState: i } = r;
		(!i || e.isRefetch) && (i = r.internalState = {
			response: null,
			iCalExpanderPromise: fetch(r.url, { method: "GET" }).then((e) => e.text().then((t) => (i.response = e, new TC({
				ics: t,
				skipInvalidDates: !0
			}))))
		}), i.iCalExpanderPromise.then((n) => {
			t({
				rawEvents: DC(n, e.range),
				response: i.response
			});
		}, n);
	}
};
function DC(e, t) {
	let n = O(t.start, -1), r = O(t.end, 1), i = e.between(n, r), a = [];
	for (let e of i.events) a.push({
		...OC(e),
		start: e.startDate.toString(),
		end: AC(e) && e.endDate ? e.endDate.toString() : null
	});
	for (let e of i.occurrences) {
		let t = e.item;
		a.push({
			...OC(t),
			start: e.startDate.toString(),
			end: AC(t) && e.endDate ? e.endDate.toString() : null
		});
	}
	return a;
}
function OC(e) {
	return {
		title: e.summary,
		url: kC(e),
		extendedProps: {
			location: e.location,
			organizer: e.organizer,
			description: e.description
		}
	};
}
function kC(e) {
	let t = e.component.getFirstProperty("url");
	return t ? t.getFirstValue() : "";
}
function AC(e) {
	return !!e.component.getFirstProperty("dtend") || !!e.component.getFirstProperty("duration");
}
var jC = {
	name: "icalendar",
	eventSourceDefs: [EC]
}, MC, Z, NC, PC, FC, IC, LC, RC, zC, BC, VC, HC, UC, WC, GC = {}, KC = [], qC = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, JC = Array.isArray;
function YC(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function XC(e) {
	e && e.parentNode && e.parentNode.removeChild(e);
}
function ZC(e, t, n) {
	var r, i, a, o = {};
	for (a in t) a == "key" ? r = t[a] : a == "ref" ? i = t[a] : o[a] = t[a];
	if (arguments.length > 2 && (o.children = arguments.length > 3 ? MC.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null) for (a in e.defaultProps) o[a] === void 0 && (o[a] = e.defaultProps[a]);
	return QC(e, o, r, i, null);
}
function QC(e, t, n, r, i) {
	var a = {
		type: e,
		props: t,
		key: n,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: i ?? ++NC,
		__i: -1,
		__u: 0
	};
	return i == null && Z.vnode != null && Z.vnode(a), a;
}
function $C() {
	return { current: null };
}
function ew(e) {
	return e.children;
}
function tw(e, t) {
	this.props = e, this.context = t;
}
function nw(e, t) {
	if (t == null) return e.__ ? nw(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? nw(e) : null;
}
function rw(e) {
	if (e.__P && e.__d) {
		var t = e.__v, n = t.__e, r = [], i = [], a = YC({}, t);
		a.__v = t.__v + 1, Z.vnode && Z.vnode(a), hw(e.__P, a, t, e.__n, e.__P.namespaceURI, 32 & t.__u ? [n] : null, r, n ?? nw(t), !!(32 & t.__u), i), a.__v = t.__v, a.__.__k[a.__i] = a, _w(r, a, i), t.__e = t.__ = null, a.__e != n && iw(a);
	}
}
function iw(e) {
	if ((e = e.__) != null && e.__c != null) return e.__e = e.__c.base = null, e.__k.some(function(t) {
		if (t != null && t.__e != null) return e.__e = e.__c.base = t.__e;
	}), iw(e);
}
function aw(e) {
	(!e.__d && (e.__d = !0) && PC.push(e) && !ow.__r++ || FC != Z.debounceRendering) && ((FC = Z.debounceRendering) || IC)(ow);
}
function ow() {
	try {
		for (var e, t = 1; PC.length;) PC.length > t && PC.sort(LC), e = PC.shift(), t = PC.length, rw(e);
	} finally {
		PC.length = ow.__r = 0;
	}
}
function sw(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, _ = r && r.__k || KC, v = t.length;
	for (c = cw(n, t, _, c, v), d = 0; d < v; d++) (p = n.__k[d]) != null && (f = p.__i != -1 && _[p.__i] || GC, p.__i = d, g = hw(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && bw(f.ref, null, p), u.push(p.ref, p.__c || m, p)), h == null && m != null && (h = m), 4 & p.__u ? (c = lw(p, c, e), f.__e && (f.__e = null)) : typeof p.type == "function" && g !== void 0 ? c = g : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = h, c;
}
function cw(e, t, n, r, i) {
	var a, o, s, c, l, u = n.length, d = u, f = 0;
	for (e.__k = Array(i), a = 0; a < i; a++) (o = t[a]) != null && typeof o != "boolean" && typeof o != "function" ? (typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? o = e.__k[a] = QC(null, o, null, null, null) : JC(o) ? o = e.__k[a] = QC(ew, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? o = e.__k[a] = QC(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : e.__k[a] = o, c = a + f, o.__ = e, o.__b = e.__b + 1, s = null, (l = o.__i = dw(o, n, c, d)) != -1 && (d--, (s = n[l]) && (s.__u |= 2)), s == null || s.__v == null ? (l == -1 && (i > u ? f-- : i < u && f++), typeof o.type != "function" && (o.__u |= 4)) : l != c && (l == c - 1 ? f-- : l == c + 1 ? f++ : (l > c ? f-- : f++, o.__u |= 4))) : e.__k[a] = null;
	if (d) for (a = 0; a < u; a++) (s = n[a]) != null && !(2 & s.__u) && (s.__e == r && (r = nw(s)), xw(s, s));
	return r;
}
function lw(e, t, n) {
	var r, i;
	if (typeof e.type == "function") {
		for (r = e.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = e, t = lw(r[i], t, n));
		return t;
	}
	e.__e != t && (t && e.type && !t.parentNode && (t = nw(e)), t = n.insertBefore(e.__e, t || null));
	do
		t &&= t.nextSibling;
	while (t != null && t.nodeType == 8);
	return t;
}
function uw(e, t) {
	return t ||= [], e == null || typeof e == "boolean" || (JC(e) ? e.some(function(e) {
		uw(e, t);
	}) : t.push(e)), t;
}
function dw(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l != null && !(2 & l.__u);
	if (l === null && s == null || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) != null && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function fw(e, t, n) {
	t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || qC.test(t) ? n : n + "px";
}
function pw(e, t, n, r, i) {
	var a, o;
	n: if (t == "style") {
		if (typeof n == "string") e.style.cssText = n;
		else {
			if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || fw(e.style, t, "");
			if (n) for (t in n) r && n[t] == r[t] || fw(e.style, t, n[t]);
		}
	} else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(VC, "$1")), o = t.toLowerCase(), t = o in e || t == "onFocusOut" || t == "onFocusIn" ? o.slice(2) : t.slice(2), e.l ||= {}, e.l[t + a] = n, n ? r ? n[BC] = r[BC] : (n[BC] = HC, e.addEventListener(t, a ? WC : UC, a)) : e.removeEventListener(t, a ? WC : UC, a);
	else {
		if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n ?? "";
			break n;
		} catch {}
		typeof n == "function" || (n == null || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function mw(e) {
	return function(t) {
		if (this.l) {
			var n = this.l[t.type + e];
			if (t[zC] == null) t[zC] = HC++;
			else if (t[zC] < n[BC]) return;
			return n(Z.event ? Z.event(t) : t);
		}
	};
}
function hw(e, t, n, r, i, a, o, s, c, l) {
	var u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, ee = t.type;
	if (t.constructor !== void 0) return null;
	128 & n.__u && (c = !!(32 & n.__u), a = [s = t.__e = n.__e]), (u = Z.__b) && u(t);
	n: if (typeof ee == "function") {
		d = o.length;
		try {
			if (v = t.props, y = ee.prototype && ee.prototype.render, b = (u = ee.contextType) && r[u.__c], x = u ? b ? b.props.value : u.__ : r, n.__c ? _ = (f = t.__c = n.__c).__ = f.__E : (y ? t.__c = f = new ee(v, x) : (t.__c = f = new tw(v, x), f.constructor = ee, f.render = Sw), b && b.sub(f), f.state || (f.state = {}), f.__n = r, p = f.__d = !0, f.__h = [], f._sb = []), y && f.__s == null && (f.__s = f.state), y && ee.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = YC({}, f.__s)), YC(f.__s, ee.getDerivedStateFromProps(v, f.__s))), m = f.props, h = f.state, f.__v = t, p) y && ee.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), y && f.componentDidMount != null && f.__h.push(f.componentDidMount);
			else {
				if (y && ee.getDerivedStateFromProps == null && v !== m && f.componentWillReceiveProps != null && f.componentWillReceiveProps(v, x), t.__v == n.__v || !f.__e && f.shouldComponentUpdate != null && !1 === f.shouldComponentUpdate(v, f.__s, x)) {
					t.__v != n.__v && (f.props = v, f.state = f.__s, f.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.some(function(e) {
						e && (e.__ = t);
					}), KC.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && o.push(f), s = nw(n);
					break n;
				}
				f.componentWillUpdate != null && f.componentWillUpdate(v, f.__s, x), y && f.componentDidUpdate != null && f.__h.push(function() {
					f.componentDidUpdate(m, h, g);
				});
			}
			if (f.context = x, f.props = v, f.__P = e, f.__e = !1, S = Z.__r, C = 0, y) f.state = f.__s, f.__d = !1, S && S(t), u = f.render(f.props, f.state, f.context), KC.push.apply(f.__h, f._sb), f._sb = [];
			else do
				f.__d = !1, S && S(t), u = f.render(f.props, f.state, f.context), f.state = f.__s;
			while (f.__d && ++C < 25);
			f.state = f.__s, f.getChildContext != null && (r = YC(YC({}, r), f.getChildContext())), y && !p && f.getSnapshotBeforeUpdate != null && (g = f.getSnapshotBeforeUpdate(m, h)), w = u != null && u.type === ew && u.key == null ? vw(u.props.children) : u, s = sw(e, JC(w) ? w : [w], t, n, r, i, a, o, s, c, l), f.base = t.__e, t.__u &= -161, f.__h.length && o.push(f), _ && (f.__E = f.__ = null);
		} catch (e) {
			if (o.length = d, t.__v = null, c || a != null) {
				if (e.then) {
					for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling;) s = s.nextSibling;
					a != null && (a[a.indexOf(s)] = null), t.__e = s;
				} else if (a != null) for (T = a.length; T--;) XC(a[T]);
			} else t.__e = n.__e;
			t.__k ??= n.__k || [], e.then || gw(t), Z.__e(e, t, n);
		}
	} else a == null && t.__v == n.__v ? (t.__k = n.__k, t.__e = n.__e) : s = t.__e = yw(n.__e, t, n, r, i, a, o, c, l);
	return (u = Z.diffed) && u(t), 128 & t.__u ? void 0 : s;
}
function gw(e) {
	e && (e.__c && (e.__c.__e = !0), e.__k && e.__k.some(gw));
}
function _w(e, t, n) {
	for (var r = 0; r < n.length; r++) bw(n[r], n[++r], n[++r]);
	Z.__c && Z.__c(t, e), e.some(function(t) {
		try {
			e = t.__h, t.__h = [], e.some(function(e) {
				e.call(t);
			});
		} catch (e) {
			Z.__e(e, t.__v);
		}
	});
}
function vw(e) {
	return typeof e != "object" || !e || e.__b > 0 ? e : JC(e) ? e.map(vw) : e.constructor === void 0 ? YC({}, e) : null;
}
function yw(e, t, n, r, i, a, o, s, c) {
	var l, u, d, f, p, m, h, g = n.props || GC, _ = t.props, v = t.type;
	if (v == "svg" ? i = "http://www.w3.org/2000/svg" : v == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i ||= "http://www.w3.org/1999/xhtml", a != null) {
		for (l = 0; l < a.length; l++) if ((p = a[l]) && "setAttribute" in p == !!v && (v ? p.localName == v : p.nodeType == 3)) {
			e = p, a[l] = null;
			break;
		}
	}
	if (e == null) {
		if (v == null) return document.createTextNode(_);
		e = document.createElementNS(i, v, _.is && _), s &&= (Z.__m && Z.__m(t, a), !1), a = null;
	}
	if (v == null) g === _ || s && e.data == _ || (e.data = _);
	else {
		if (a = v == "textarea" && _.defaultValue != null ? null : a && MC.call(e.childNodes), !s && a != null) for (g = {}, l = 0; l < e.attributes.length; l++) g[(p = e.attributes[l]).name] = p.value;
		for (l in g) p = g[l], l == "dangerouslySetInnerHTML" ? d = p : l == "children" || l in _ || l == "value" && "defaultValue" in _ || l == "checked" && "defaultChecked" in _ || pw(e, l, null, p, i);
		for (l in _) p = _[l], l == "children" ? f = p : l == "dangerouslySetInnerHTML" ? u = p : l == "value" ? m = p : l == "checked" ? h = p : s && typeof p != "function" || g[l] === p || pw(e, l, p, g[l], i);
		if (u) s || d && (u.__html == d.__html || u.__html == e.innerHTML) || (e.innerHTML = u.__html), t.__k = [];
		else if (d && (e.innerHTML = ""), sw(t.type == "template" ? e.content : e, JC(f) ? f : [f], t, n, r, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, o, a ? a[0] : n.__k && nw(n, 0), s, c), a != null) for (l = a.length; l--;) XC(a[l]);
		s && v != "textarea" || (l = "value", v == "progress" && m == null ? e.removeAttribute("value") : m != null && (m !== e[l] || v == "progress" && !m || v == "option" && m != g[l]) && pw(e, l, m, g[l], i), l = "checked", h != null && h != e[l] && pw(e, l, h, g[l], i));
	}
	return e;
}
function bw(e, t, n) {
	try {
		if (typeof e == "function") {
			var r = typeof e.__u == "function";
			r && e.__u(), r && t == null || (e.__u = e(t));
		} else e.current = t;
	} catch (e) {
		Z.__e(e, n);
	}
}
function xw(e, t, n) {
	var r, i;
	if (Z.unmount && Z.unmount(e), (r = e.ref) && (r.current && r.current != e.__e || bw(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount();
		} catch (e) {
			Z.__e(e, t);
		}
		r.base = r.__P = r.__n = null;
	}
	if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && xw(r[i], t, n || typeof e.type != "function");
	n || XC(e.__e), e.__c = e.__ = e.__e = void 0;
}
function Sw(e, t, n) {
	return this.constructor(e, n);
}
MC = KC.slice, Z = { __e: function(e, t, n, r) {
	for (var i, a, o; t = t.__;) if ((i = t.__c) && !i.__) try {
		if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
	} catch (t) {
		e = t;
	}
	throw e;
} }, NC = 0, tw.prototype.setState = function(e, t) {
	var n = this.__s != null && this.__s != this.state ? this.__s : this.__s = YC({}, this.state);
	typeof e == "function" && (e = e(YC({}, n), this.props)), e && YC(n, e), e != null && this.__v && (t && this._sb.push(t), aw(this));
}, tw.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), aw(this));
}, tw.prototype.render = ew, PC = [], IC = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, LC = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, ow.__r = 0, RC = Math.random().toString(8), zC = "__d" + RC, BC = "__a" + RC, VC = /(PointerCapture)$|Capture$/i, HC = 0, UC = mw(!1), WC = mw(!0);
//#endregion
//#region node_modules/fullcalendar-scheduler/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var Cw = 0;
Array.isArray;
function Q(e, t, n, r, i, a) {
	t ||= {};
	var o, s, c = t;
	if ("ref" in c) for (s in c = {}, t) s == "ref" ? o = t[s] : c[s] = t[s];
	var l = {
		type: e,
		props: c,
		key: n,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --Cw,
		__i: -1,
		__u: 0,
		__source: i,
		__self: a
	};
	if (typeof e == "function" && (o = e.defaultProps)) for (s in o) c[s] === void 0 && (c[s] = o[s]);
	return Z.vnode && Z.vnode(l), l;
}
//#endregion
//#region node_modules/fullcalendar/protected-api.js
function ww(e, t) {
	let n, r, i;
	function a(t) {
		n = Date.now(), r = 0, i = setTimeout(() => {
			r ? a(r) : (i = void 0, e());
		}, t);
	}
	function o() {
		i ? r = Date.now() - n : a(t);
	}
	function s() {
		i &&= (clearTimeout(i), void 0);
	}
	return [o, s];
}
//#endregion
//#region node_modules/fullcalendar-scheduler/chunks/e6ff76f4.js
var Tw = "https://fullcalendar.io/docs/schedulerLicenseKey#invalid", Ew = "https://fullcalendar.io/docs/schedulerLicenseKey#outdated", Dw = ["AGPL-My-Frontend-And-Backend-Are-Open-Source", "CC-Attribution-NonCommercial-NoDerivatives"];
function Ow(e) {
	let { options: t, pluginHooks: n } = e, r = t.schedulerLicenseKey;
	if (!Aw(typeof window < "u" ? window.location.href : "")) {
		let e = kw(r, n.premiumReleaseDate), i, a;
		if (e === "outdated" ? (i = "Your license key is too old to work with this version.", a = Ew) : (i = "Your license key is invalid.", a = Tw), e !== "valid") return Q("div", {
			className: M(t.popoverClass, j.popoverZ, j.abs, j.noPadding),
			style: {
				bottom: 0,
				left: 0,
				minWidth: "auto"
			},
			children: Q("div", {
				style: {
					padding: "5px",
					fontSize: "12px",
					lineHeight: "1em"
				},
				children: [
					i,
					" ",
					Q("a", {
						href: a,
						target: "_blank",
						style: { textDecoration: "underline" },
						children: "More info"
					})
				]
			})
		});
	}
	return null;
}
function kw(e, t) {
	if (Dw.indexOf(e) !== -1) return "valid";
	let n = (e || "").match(/^(\d+)-fcs-(\d+)$/);
	if (n && n[1].length === 10) {
		let e = /* @__PURE__ */ new Date(parseInt(n[2], 10) * 1e3), r = Op.mockSchedulerReleaseDate || t;
		if (co(r)) return O(r, -372) < e ? "valid" : "outdated";
	}
	return "invalid";
}
function Aw(e) {
	return /\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(e);
}
var jw = {
	name: "common",
	premiumReleaseDate: "2026-10-12",
	optionRefiners: {
		schedulerLicenseKey: String,
		virtualization: Boolean,
		initialResources: F,
		resources: F,
		eventResourceEditable: Boolean,
		refetchResourcesOnNavigate: Boolean,
		resourceOrder: Ps,
		filterResourcesWithEvents: Boolean,
		resourceGroupField: String,
		resourcesInitiallyExpanded: Boolean,
		datesAboveResources: Boolean,
		needsResourceData: Boolean,
		resourceDayHeaderClass: P,
		resourceDayHeaderInnerClass: P,
		resourceDayHeaderContent: F,
		resourceDayHeaderDidMount: F,
		resourceDayHeaderWillUnmount: F,
		resourceDayHeaderAlign: F,
		_resourceDayHeaderSticky: F,
		printMaxRows: Number,
		resourceColumnsWidth: F,
		resourceColumns: F,
		resourceColumnDividerClass: gs,
		resourceColumnHeaderClass: P,
		resourceColumnHeaderInnerClass: P,
		resourceColumnResizerClass: P,
		resourceColumnHeaderContent: F,
		resourceColumnHeaderDidMount: F,
		resourceColumnHeaderWillUnmount: F,
		resourceHeaderRowClass: gs,
		resourceRowClass: gs,
		resourceCellClass: P,
		resourceCellInnerClass: P,
		resourceCellContent: F,
		resourceCellDidMount: F,
		resourceCellWillUnmount: F,
		resourceGroupHeaderClass: P,
		resourceGroupHeaderInnerClass: P,
		resourceGroupHeaderContent: F,
		resourceGroupHeaderDidMount: F,
		resourceGroupHeaderWillUnmount: F,
		resourceGroupLaneClass: P,
		resourceGroupLaneInnerClass: P,
		resourceGroupLaneContent: F,
		resourceGroupLaneDidMount: F,
		resourceGroupLaneWillUnmount: F,
		resourceLaneClass: P,
		resourceLaneDidMount: F,
		resourceLaneWillUnmount: F,
		resourceLaneTopClass: P,
		resourceLaneTopContent: F,
		resourceLaneBottomClass: P,
		resourceLaneBottomContent: F,
		resourceIndentClass: gs,
		resourceExpanderClass: P,
		resourceExpanderContent: F,
		timelineTopClass: gs,
		timelineBottomClass: gs
	},
	optionDefaults: {
		printMaxRows: 1e3,
		_resourceDayHeaderSticky: !0
	},
	listenerRefiners: {
		resourcesSet: F,
		resourceAdd: F,
		resourceChange: F,
		resourceRemove: F,
		_resourceScrollRequest: F
	},
	viewContainerAppends: [Ow]
}, Mw = class {
	constructor(e = !1) {
		this.isHorizontal = e, this.emitter = new Hu(), this.scrollers = [], this.destroyFuncs = [], this.isPaused = !1;
	}
	handleChildren(e) {
		if (!oc(this.scrollers, e)) {
			this.destroy();
			for (let t of e) t && (this.destroyFuncs.push(this.bindScroller(t)), this.scrollers.push(t));
		}
	}
	destroy() {
		for (let e of this.destroyFuncs) e();
		this.destroyFuncs = [], this.scrollers = [];
	}
	get x() {
		let { scrollers: e, masterScroller: t } = this;
		return (t || e[0]).x;
	}
	get y() {
		let { scrollers: e, masterScroller: t } = this;
		return (t || e[0]).y;
	}
	scrollTo(e) {
		this.isPaused = !0;
		let { scrollers: t } = this;
		for (let n of t) n.scrollTo(e);
		this.isPaused = !1;
	}
	addScrollListener(e) {
		this.emitter.on("scroll", e);
	}
	removeScrollListener(e) {
		this.emitter.off("scroll", e);
	}
	addScrollStartListener(e) {
		this.emitter.on("scrollStart", e);
	}
	removeScrollStartListener(e) {
		this.emitter.off("scrollStart", e);
	}
	addScrollEndListener(e) {
		this.emitter.on("scrollEnd", e);
	}
	removeScrollEndListener(e) {
		this.emitter.off("scrollEnd", e);
	}
	bindScroller(e) {
		let { isHorizontal: t } = this, n = (n) => {
			if (!this.isPaused && (this.masterScroller || this.emitter.trigger("scrollStart", n), (!this.masterScroller || this.masterScroller !== e && n) && this.assignMaster(e), this.masterScroller === e)) {
				for (let n of this.scrollers) n !== e && (t ? n.scrollTo({ x: e.x }) : n.scrollTo({ y: e.y }));
				this.emitter.trigger("scroll", n, t ? e.x : e.y);
			}
		}, r = (t) => {
			this.masterScroller === e && (this.masterScroller = null, this.emitter.trigger("scrollEnd", t));
		};
		return e.listener.emitter.on("scroll", n), e.listener.emitter.on("scrollEnd", r), () => {
			e.listener.emitter.off("scroll", n), e.listener.emitter.off("scrollEnd", r);
		};
	}
	assignMaster(e) {
		this.masterScroller = e;
		for (let t of this.scrollers) t !== e && t.endScroll();
	}
}, Nw = {
	name: "scrollgrid",
	premiumReleaseDate: "2026-10-12",
	deps: [jw],
	scrollerSyncerClass: Mw
}, Pw, Fw, Iw, Lw = [], Rw = Z, zw = Rw.__b, Bw = Rw.__r, Vw = Rw.diffed, Hw = Rw.__c, Uw = Rw.unmount, Ww = Rw.__;
function Gw() {
	for (var e; e = Lw.shift();) {
		var t = e.__H;
		if (e.__P && t) try {
			t.__h.some(Jw), t.__h.some(Yw), t.__h = [];
		} catch (n) {
			t.__h = [], Rw.__e(n, e.__v);
		}
	}
}
Rw.__b = function(e) {
	Pw = null, zw && zw(e);
}, Rw.__ = function(e, t) {
	e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ww && Ww(e, t);
}, Rw.__r = function(e) {
	Bw && Bw(e);
	var t = (Pw = e.__c).__H;
	t && (Fw === Pw ? (t.__h = [], Pw.__h = [], t.__.some(function(e) {
		e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
	})) : (t.__h.some(Jw), t.__h.some(Yw), t.__h = [])), Fw = Pw;
}, Rw.diffed = function(e) {
	Vw && Vw(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && (Lw.push(t) !== 1 && Iw === Rw.requestAnimationFrame || ((Iw = Rw.requestAnimationFrame) || qw)(Gw)), t.__H.__.some(function(e) {
		e.u &&= (e.__H = e.u, void 0);
	})), Fw = Pw = null;
}, Rw.__c = function(e, t) {
	t.some(function(e) {
		try {
			e.__h.some(Jw), e.__h = e.__h.filter(function(e) {
				return !e.__ || Yw(e);
			});
		} catch (n) {
			t.some(function(e) {
				e.__h &&= [];
			}), t = [], Rw.__e(n, e.__v);
		}
	}), Hw && Hw(e, t);
}, Rw.unmount = function(e) {
	Uw && Uw(e);
	var t, n = e.__c;
	n && n.__H && (n.__H.__.some(function(e) {
		try {
			Jw(e);
		} catch (e) {
			t = e;
		}
	}), n.__H = void 0, t && Rw.__e(t, n.__v));
};
var Kw = typeof requestAnimationFrame == "function";
function qw(e) {
	var t, n = function() {
		clearTimeout(r), Kw && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	Kw && (t = requestAnimationFrame(n));
}
function Jw(e) {
	var t = Pw, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), Pw = t;
}
function Yw(e) {
	var t = Pw;
	e.__c = e.__(), Pw = t;
}
//#endregion
//#region node_modules/fullcalendar-scheduler/node_modules/preact/compat/dist/compat.module.js
function Xw(e, t) {
	for (var n in t) e[n] = t[n];
	return e;
}
function Zw(e, t) {
	for (var n in e) if (n !== "__source" && !(n in t)) return !0;
	for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1;
}
function Qw(e, t) {
	this.props = e, this.context = t;
}
(Qw.prototype = new tw()).isPureReactComponent = !0, Qw.prototype.shouldComponentUpdate = function(e, t) {
	return Zw(this.props, e) || Zw(this.state, t);
};
var $w = Z.__b;
Z.__b = function(e) {
	e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), $w && $w(e);
}, typeof Symbol < "u" && Symbol.for;
var eT = Z.__e;
Z.__e = function(e, t, n, r) {
	if (e.then) {
		for (var i, a = t; a = a.__;) if ((i = a.__c) && i.__c) return t.__e ?? (t.__e = n.__e, t.__k = n.__k || []), i.__c(e, t);
	}
	eT(e, t, n, r);
};
var tT = Z.unmount;
function nT(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(e) {
		typeof e.__c == "function" && e.__c();
	}), e.__c.__H = null), (e = Xw({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(e) {
		return nT(e, t, n);
	})), e;
}
function rT(e, t, n) {
	return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
		return rT(e, t, n);
	}), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e;
}
function iT() {
	this.__u = 0, this.o = null, this.__b = null;
}
function aT(e) {
	var t = e.__ && e.__.__c;
	return t && t.__a && t.__a(e);
}
function oT() {
	this.i = null, this.l = null;
}
Z.unmount = function(e) {
	var t = e.__c;
	t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), tT && tT(e);
}, (iT.prototype = new tw()).__c = function(e, t) {
	var n = t.__c, r = this;
	r.o ??= [], r.o.push(n);
	var i = aT(r.__v), a = !1, o = function() {
		a || r.__z || (a = !0, n.__R = null, i ? i(c) : c());
	};
	n.__R = o;
	var s = n.__P;
	n.__P = null;
	var c = function() {
		if (!--r.__u) {
			if (r.state.__a) {
				var e = r.state.__a;
				r.__v.__k[0] = rT(e, e.__c.__P, e.__c.__O);
			}
			var t;
			for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = s, t.forceUpdate();
		}
	};
	r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), e.then(o, o);
}, iT.prototype.componentWillUnmount = function() {
	this.o = [];
}, iT.prototype.render = function(e, t) {
	if (this.__b) {
		if (this.__v.__k) {
			var n = document.createElement("div"), r = this.__v.__k[0].__c;
			this.__v.__k[0] = nT(this.__b, n, r.__O = r.__P);
		}
		this.__b = null;
	}
	var i = t.__a && ZC(ew, null, e.fallback);
	return i && (i.__u &= -33), [ZC(ew, null, t.__a ? null : e.children), i];
};
var sT = function(e, t, n) {
	if (++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) for (n = e.i; n;) {
		for (; n.length > 3;) n.pop()();
		if (n[1] < n[0]) break;
		e.i = n = n[2];
	}
};
(oT.prototype = new tw()).__a = function(e) {
	var t = this, n = aT(t.__v), r = t.l.get(e);
	return r[0]++, function(i) {
		var a = function() {
			t.props.revealOrder ? (r.push(i), sT(t, e, r)) : i();
		};
		n ? n(a) : a();
	};
}, oT.prototype.render = function(e) {
	this.i = null, this.l = /* @__PURE__ */ new Map();
	var t = uw(e.children);
	e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
	for (var n = t.length; n--;) this.l.set(t[n], this.i = [
		1,
		0,
		this.i
	]);
	return e.children;
}, oT.prototype.componentDidUpdate = oT.prototype.componentDidMount = function() {
	var e = this;
	this.l.forEach(function(t, n) {
		sT(e, n, t);
	});
};
var cT = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, lT = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, uT = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, dT = /[A-Z0-9]/g, fT = typeof document < "u", pT = function(e) {
	return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
};
tw.prototype.isReactComponent = !0, [
	"componentWillMount",
	"componentWillReceiveProps",
	"componentWillUpdate"
].forEach(function(e) {
	Object.defineProperty(tw.prototype, e, {
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
var mT = Z.event;
Z.event = function(e) {
	return mT && (e = mT(e)), e.persist = function() {}, e.isPropagationStopped = function() {
		return this.cancelBubble;
	}, e.isDefaultPrevented = function() {
		return this.defaultPrevented;
	}, e.nativeEvent = e;
};
var hT = {
	configurable: !0,
	get: function() {
		return this.class;
	}
}, gT = Z.vnode;
Z.vnode = function(e) {
	typeof e.type == "string" && function(e) {
		var t = e.props, n = e.type, r = {}, i = n.indexOf("-") == -1;
		for (var a in t) {
			var o = t[a];
			if (!(a === "value" && "defaultValue" in t && o == null || fT && a === "children" && n === "noscript" || a === "class" || a === "className")) {
				var s = a.toLowerCase();
				a === "defaultValue" && "value" in t && t.value == null ? a = "value" : a === "download" && !0 === o ? o = "" : s === "translate" && o === "no" ? o = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? a = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || pT(t.type) ? s === "onfocus" ? a = "onfocusin" : s === "onblur" ? a = "onfocusout" : uT.test(a) && (a = s) : s = a = "oninput" : i && lT.test(a) ? a = a.replace(dT, "-$&").toLowerCase() : o === null && (o = void 0), s === "oninput" && r[a = s] && (a = "oninputCapture"), r[a] = o;
			}
		}
		n == "select" && (r.multiple && Array.isArray(r.value) && (r.value = uw(t.children).forEach(function(e) {
			e.props.selected = r.value.indexOf(e.props.value) != -1;
		})), r.defaultValue != null && (r.value = uw(t.children).forEach(function(e) {
			e.props.selected = r.multiple ? r.defaultValue.indexOf(e.props.value) != -1 : r.defaultValue == e.props.value;
		}))), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", hT)) : t.className && (r.class = r.className = t.className), e.props = r;
	}(e), e.$$typeof = cT, gT && gT(e);
};
var _T = Z.__r;
Z.__r = function(e) {
	_T && _T(e), e.__c;
};
var vT = Z.diffed;
Z.diffed = function(e) {
	vT && vT(e);
	var t = e.props, n = e.__e;
	n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value);
};
//#endregion
//#region node_modules/fullcalendar-scheduler/chunks/2832227c.js
function yT(e) {
	let { dateEnv: t, isDateVisible: n } = e, r = [], i = Vo(e.snapDuration), { normalizedRange: a } = e, o = Math.min(e.timeWindowMs, 864e5);
	for (let i = a.start; i < a.end; i = O(i, 1)) {
		let s = new Date(Math.min(i.valueOf() + o, a.end.valueOf())), c = t.toDate(i).valueOf(), l = t.toDate(s).valueOf();
		if (c >= l) continue;
		let u = [], d = t.timestampToMarker(c).valueOf() - c, f = d === t.timestampToMarker(l).valueOf() - l ? (e) => [e.valueOf() - d] : (e) => bT(e, t);
		for (let n = i; n < s; n = t.add(n, e.slotDuration)) for (let e of f(n)) e >= c && e < l && u.push({
			date: n,
			startMs: e
		});
		u.sort((e, t) => e.startMs - t.startMs), (!u.length || u[0].startMs > c) && u.unshift({
			date: t.timestampToMarker(c),
			startMs: c
		}), u.push({
			date: s,
			startMs: l
		});
		for (let e = 0; e < u.length - 1; e += 1) {
			let t = u[e], i = u[e + 1].startMs;
			t.startMs < i && n(t.date) && r.push({
				date: t.date,
				key: xT(t.date, t.startMs),
				startMs: t.startMs,
				endMs: i
			});
		}
	}
	return {
		slots: r,
		snapStepMs: i
	};
}
function bT(e, t) {
	let n = t.toDate(e).valueOf(), r = /* @__PURE__ */ new Set();
	for (let i of [
		-2,
		-1,
		0,
		1,
		2
	]) {
		let a = n + i * 864e5, o = t.timestampToMarker(a).valueOf() - a, s = e.valueOf() - o;
		t.timestampToMarker(s).valueOf() === e.valueOf() && r.add(s);
	}
	return Array.from(r).sort((e, t) => e - t);
}
function xT(e, t) {
	let n = Math.round((e.valueOf() - t) / 6e4);
	return `${e.toISOString()}:${n}`;
}
function ST(e, t, n) {
	return t == null ? e : {
		...e,
		date: new Date(t),
		isPast: !e.isDisabled && t < n,
		isFuture: !e.isDisabled && t > n
	};
}
function CT(e) {
	return e.slots.length ? e.slots[0].startMs : null;
}
function wT(e) {
	return e.slots.length ? e.slots[e.slots.length - 1].endMs : null;
}
var TT = 18, ET = 6, DT = 200;
Op.MAX_TIMELINE_SLOTS = 1e3;
var OT = [
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
function kT(e, t, n, r) {
	let i = {
		labelInterval: n.slotHeaderInterval,
		slotDuration: n.slotDuration
	};
	NT(i, e, t), PT(i, e, t), FT(i, e, t);
	let a = n.slotHeaderFormat, o, s;
	if (Array.isArray(a)) o = a, s = a.map(LT);
	else if (a != null) o = [a], s = [LT(a)];
	else {
		let r = IT(i, e, t, n);
		o = r.formats, s = r.units;
	}
	i.headerFormats = o.map((e) => N(e)), i.headerFormatUnits = s, i.isTimeScale = !!i.slotDuration.milliseconds;
	let c = null;
	if (!i.isTimeScale) {
		let e = Uo(i.slotDuration).unit;
		/year|month|week/.test(e) && (c = e);
	}
	i.largeUnit = c;
	let l = n.snapDuration, u, d;
	l && (u = A(l), d = Ho(i.slotDuration, u)), d ??= (u = i.slotDuration, 1), i.snapDuration = u, i.snapsPerSlot = d;
	let f = Vo(e.slotMaxTime) - Vo(e.slotMinTime), p = AT(e.renderRange.start, i, t), m = AT(e.renderRange.end, i, t);
	i.isTimeScale && (p = t.add(p, e.slotMinTime), m = t.add(O(m, -1), e.slotMaxTime)), i.timeWindowMs = f, i.normalizedRange = {
		start: p,
		end: m
	}, i.timeAxis = i.isTimeScale ? yT({
		normalizedRange: i.normalizedRange,
		slotDuration: i.slotDuration,
		snapDuration: i.snapDuration,
		timeWindowMs: f,
		dateEnv: t,
		isDateVisible: (t) => MT(t, i, e, r)
	}) : null;
	let h = [], g, _ = af(e, t);
	if (i.timeAxis) h = i.timeAxis.slots.map((e) => e.date), g = i.timeAxis.slots.map((e) => e.key);
	else {
		let n = p;
		for (; n < m;) MT(n, i, e, r) && h.push(n), n = t.add(n, i.slotDuration);
		g = h.map((e) => e.toISOString());
	}
	if (i.slotDates = h, i.slotKeys = g, i.slotDatesMajor = h.map((e) => of(e, _, t)), i.timeAxis) i.snapDiffToIndex = [], i.snapCnt = i.timeAxis.slots.length * i.snapsPerSlot, i.slotCnt = i.timeAxis.slots.length;
	else {
		let n = -1, a = [], o = p;
		for (; o < m;) MT(o, i, e, r) ? (n += 1, a.push(n)) : a.push(n + .5), o = t.add(o, i.snapDuration);
		i.snapDiffToIndex = a, i.snapCnt = n + 1, i.slotCnt = i.snapCnt / i.snapsPerSlot;
	}
	return i.cellRows = RT(i, t, _), i.slotsPerLabel = Ho(i.labelInterval, i.slotDuration), i;
}
function AT(e, t, n) {
	let r = e;
	return t.isTimeScale || (r = k(r), t.largeUnit && (r = n.startOf(r, t.largeUnit))), r;
}
function jT(e, t, n) {
	if (!t.isTimeScale && (e = Oc(e), t.largeUnit)) {
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
function MT(e, t, n, r) {
	if (r.isHiddenDay(e)) return !1;
	if (t.isTimeScale) {
		let r = k(e), i = e.valueOf() - r.valueOf() - Vo(n.slotMinTime);
		return i = (i % 864e5 + 864e5) % 864e5, i < t.timeWindowMs;
	}
	return !0;
}
function NT(e, t, n) {
	let { currentRange: r } = t;
	if (e.labelInterval && n.countDurationsBetween(r.start, r.end, e.labelInterval) > Op.MAX_TIMELINE_SLOTS && (ms("Invalid option `slotHeaderInterval`: too many timeline cells."), e.labelInterval = null), e.slotDuration && n.countDurationsBetween(r.start, r.end, e.slotDuration) > Op.MAX_TIMELINE_SLOTS && (ms("Invalid option `slotDuration`: too many timeline cells."), e.slotDuration = null), e.labelInterval && e.slotDuration) {
		let t = Ho(e.labelInterval, e.slotDuration);
		(t === null || t < 1) && (ms("Invalid option `slotHeaderInterval`: must be a multiple of `slotDuration`."), e.slotDuration = null);
	}
}
function PT(e, t, n) {
	let { currentRange: r } = t, { labelInterval: i } = e;
	if (!i) {
		let t;
		if (e.slotDuration) {
			for (t of OT) {
				let n = A(t), r = Ho(n, e.slotDuration);
				if (r !== null && r <= ET) {
					i = n;
					break;
				}
			}
			i ||= e.slotDuration;
		} else for (t of OT) if (i = A(t), n.countDurationsBetween(r.start, r.end, i) >= TT) break;
		e.labelInterval = i;
	}
	return i;
}
function FT(e, t, n) {
	let { currentRange: r } = t, { slotDuration: i } = e;
	if (!i) {
		let a = PT(e, t, n);
		for (let e of OT) {
			let t = A(e), n = Ho(a, t);
			if (n !== null && n > 1 && n <= ET) {
				i = t;
				break;
			}
		}
		i && n.countDurationsBetween(r.start, r.end, i) > DT && (i = null), i ||= a, e.slotDuration = i;
	}
	return i;
}
function IT(e, t, n, r) {
	let i, a, o = null, s = null, { labelInterval: c } = e, { currentRange: l } = t, u = Uo(c).unit, d = r.weekNumbers, f = i = a = null, p = null;
	switch (u === "week" && !d && (u = "day"), u) {
		case "year":
			f = { year: "numeric" }, p = "year";
			break;
		case "month":
			n.diffWholeYears(l.start, l.end) > 1 && (f = { year: "numeric" }, p = "year"), i = { month: "short" }, o = "month";
			break;
		case "week":
			n.diffWholeYears(l.start, l.end) > 1 && (f = { year: "numeric" }, p = "year"), i = { week: "narrow" }, o = "week";
			break;
		case "day":
			n.diffWholeYears(l.start, l.end) > 1 ? (f = {
				year: "numeric",
				month: "long"
			}, p = "month") : n.diffWholeMonths(l.start, l.end) > 1 && (f = { month: "long" }, p = "month"), d && (i = { week: "short" }, o = "week"), a = {
				weekday: "narrow",
				day: "numeric"
			}, s = "day";
			break;
		case "hour":
			d && (f = { week: "short" }, p = "week"), Za(l.start, l.end) > 1 && (i = {
				weekday: "short",
				day: "numeric",
				month: "numeric",
				omitCommas: !0
			}, o = "day"), a = {
				hour: "numeric",
				minute: "2-digit",
				omitZeroMinute: !0,
				meridiem: "short"
			}, s = null;
			break;
		case "minute":
			zo(c) / 60 >= ET ? (f = {
				hour: "numeric",
				meridiem: "short"
			}, i = (e) => ":" + Eo(e.date.minute, 2)) : f = {
				hour: "numeric",
				minute: "numeric",
				meridiem: "short"
			};
			break;
		case "second":
			Bo(c) / 60 >= ET ? (f = {
				hour: "numeric",
				minute: "2-digit",
				meridiem: "lowercase"
			}, i = (e) => ":" + Eo(e.date.second, 2)) : f = {
				hour: "numeric",
				minute: "2-digit",
				second: "2-digit",
				meridiem: "lowercase"
			};
			break;
		case "millisecond": f = {
			hour: "numeric",
			minute: "2-digit",
			second: "2-digit",
			meridiem: "lowercase"
		}, i = (e) => "." + Eo(e.millisecond, 3);
	}
	return {
		formats: [].concat(f || [], i || [], a || []),
		units: [].concat(f ? [p] : [], i ? [o] : [], a ? [s] : [])
	};
}
function LT(e) {
	if (typeof e == "object" && e) {
		if (e.fractionalSecondDigits || e.second || e.minute || e.hour || e.timeZoneName) return "time";
		if (e.day || e.weekday) return "day";
		if (e.week) return "week";
		if (e.month) return "month";
		if (e.year) return "year";
	}
	return null;
}
function RT(e, t, n) {
	let r = e.slotDates, i = e.timeAxis?.slots, a = e.headerFormats, o = a.map(() => []), s = Mo(e.slotDuration), c = s === 7 ? "week" : s === 1 ? "day" : null, l = e.headerFormatUnits;
	for (let s = 0; s < (i?.length ?? r.length); s += 1) {
		let u = i?.[s], d = u?.date ?? r[s], f = u?.startMs ?? null;
		for (let r = 0; r < a.length; r += 1) {
			let i = a[r], p = o[r], m = p[p.length - 1], h = r === a.length - 1, g = a.length > 1 && !h, _ = of(d, n, t), v = null, y = l[r] || (h ? c : null), b = y + ":" + (u?.key ?? e.slotKeys[s]);
			if (g) {
				let e = zT(d, f, i, t);
				!m || m.text !== e ? v = BT(b, d, f, _, e, y) : m.colspan += 1;
			} else !m || To(t.countDurationsBetween(e.normalizedRange.start, d, e.labelInterval)) ? v = BT(b, d, f, _, zT(d, f, i, t), y) : m.colspan += 1;
			v && p.push(v);
		}
	}
	return o;
}
function zT(e, t, n, r) {
	return Yo(r.formatToParts(e, n, { instantMs: t ?? void 0 }));
}
function BT(e, t, n, r, i, a) {
	return {
		key: e,
		date: t,
		startMs: n,
		isMajor: r,
		text: i,
		rowUnit: a,
		colspan: 1
	};
}
function VT(e, t, n) {
	let r = n.countDurationsBetween(t.normalizedRange.start, e, t.snapDuration);
	if (r < 0) return 0;
	if (r >= t.snapDiffToIndex.length) return t.snapCnt;
	let i = Math.floor(r), a = t.snapDiffToIndex[i];
	return To(a) ? a += r - i : a = Math.ceil(a), a;
}
function HT(e, t) {
	let { slots: n } = t.timeAxis;
	if (!n.length || e <= n[0].startMs) return 0;
	if (e >= n[n.length - 1].endMs) return n.length;
	let r = UT(n, e), i = n[r];
	return r + (Math.min(e, i.endMs) - i.startMs) / (i.endMs - i.startMs);
}
function UT(e, t) {
	let n = 0, r = e.length - 1;
	for (; n < r;) {
		let i = n + r + 1 >> 1;
		e[i].startMs <= t ? n = i : r = i - 1;
	}
	return n;
}
function WT(e, t, n, r, i) {
	if (r == null || i == null) return [
		void 0,
		void 0,
		!1
	];
	n ??= Math.ceil((r + 1) / t);
	let a = i / e, o, s;
	return a >= n ? (o = !0, s = a) : (o = !1, s = Math.max(n, a)), [
		s * e,
		s,
		o
	];
}
function GT(e, t, n, r, i) {
	let a = t.add(n.activeRange.start, e);
	return r.isTimeScale || (a = k(a)), KT(a, t, r, i);
}
function KT(e, t, n, r) {
	return n.timeAxis ? qT(t.toDate(e).valueOf(), n, r) : VT(e, n, t) / n.snapsPerSlot * r;
}
function qT(e, t, n) {
	return HT(e, t) * n;
}
function JT(e, t, n, r, i, a = 0, o = Infinity) {
	let s = e.startMs == null ? KT(e.startDate, n, r, i) : qT(e.startMs, r, i), c = e.endMs == null ? KT(e.endDate, n, r, i) : qT(e.endMs, r, i);
	if (s = Math.max(s, a), c = Math.min(c, o), s < c) {
		let e = s - a, n = c - a;
		return t && n - e < t && (n = e + t), {
			start: e,
			end: n
		};
	}
}
function YT(e, t, n, r, i, a) {
	let o = r ? t - e : e, s = Math.floor(o / n), c = (o - s * n) / n, l = Math.floor(c * i.snapsPerSlot), u = XT(s, l, i, a);
	if (!u) return null;
	let d = n / i.snapsPerSlot, f = s * n + d * l, p = f + d, m = r ? t - p : f, h = r ? t - f : p;
	return {
		slatIndex: s,
		dateSpan: {
			range: {
				start: u.start,
				end: u.end
			},
			allDay: !i.isTimeScale,
			...u.startMs == null ? {} : {
				instantStartMs: u.startMs,
				instantEndMs: u.endMs
			}
		},
		rect: {
			left: m,
			right: h
		}
	};
}
function XT(e, t, n, r) {
	let { timeAxis: i } = n;
	if (i) {
		if (e >= i.slots.length) return null;
		let n = i.slots[e], a = n.startMs + t * i.snapStepMs, o = Math.min(a + i.snapStepMs, n.endMs);
		return a >= o ? null : {
			start: r.timestampToMarker(a),
			end: r.timestampToMarker(o),
			startMs: a,
			endMs: o
		};
	}
	if (e >= n.slotDates.length) return null;
	let a = r.add(n.slotDates[e], Fo(n.snapDuration, t));
	return {
		start: a,
		end: r.add(a, n.snapDuration),
		startMs: null,
		endMs: null
	};
}
var ZT = class extends oh {
	intersectDateSpan(e, t, n, r, i, a) {
		if (!i.timeAxis) return super.intersectDateSpan(e, t, n, r, i, a);
		let o = Math.max(ul(e, a), a.toDate(t.start).valueOf()), s = Math.min(dl(e, a), a.toDate(t.end).valueOf());
		if (o < s) {
			let t = Tc({
				marker: a.timestampToMarker(o),
				instantMs: o
			}, {
				marker: a.timestampToMarker(s),
				instantMs: s
			}, a);
			return t ? {
				...e,
				range: {
					start: t.start,
					end: t.end
				},
				instantStartMs: o,
				instantEndMs: s
			} : null;
		}
		return null;
	}
	sliceDateSpan(e, t, n, r, i) {
		return r.timeAxis ? QT(ul(e, i), dl(e, i), t, n, r, i) : super.sliceDateSpan(e, t, n, r, i);
	}
	sliceRange(e, t, n, r, i) {
		if (r.timeAxis) return QT(vc(e, i), yc(e, i), t, n, r, i);
		let a = jT(e, r, i), o = [];
		if (VT(a.start, r, i) < VT(a.end, r, i)) {
			let e = _o(a, r.normalizedRange);
			e && o.push({
				startDate: e.start,
				endDate: e.end,
				isStart: e.start.valueOf() === a.start.valueOf() && MT(e.start, r, t, n),
				isEnd: e.end.valueOf() === a.end.valueOf() && MT(Ua(e.end, -1), r, t, n)
			});
		}
		return o;
	}
};
function QT(e, t, n, r, i, a) {
	let o = CT(i.timeAxis), s = wT(i.timeAxis);
	if (o == null) return [];
	let c = Math.max(e, o), l = Math.min(t, s);
	if (c < l && HT(c, i) < HT(l, i)) {
		let o = a.timestampToMarker(c);
		return [{
			startDate: o,
			endDate: a.timestampToMarker(l),
			startMs: c,
			endMs: l,
			isStart: c === e && MT(o, i, n, r),
			isEnd: l === t && MT(a.timestampToMarker(l - 1), i, n, r)
		}];
	}
	return [];
}
function $T(e, t) {
	return {
		slotWidth: e ?? 50,
		eventMinWidth: e == null ? void 0 : t
	};
}
var eE = class extends L {
	render() {
		let { props: e } = this, t = [].concat(e.eventResizeSegs || [], e.dateSelectionSegs || []);
		return Q(ew, { children: [
			this.renderSegs(e.businessHourSegs || [], "non-business"),
			this.renderSegs(e.bgEventSegs || [], "bg-event"),
			this.renderSegs(t, "highlight")
		] });
	}
	renderSegs(e, t) {
		let { props: n, context: r } = this, { dateEnv: i, options: a } = r, { tDateProfile: o, todayRange: s, nowDate: c } = n, l = n.clipStart ?? 0, u = n.clipEnd ?? Infinity, d = n.slotWidth ?? 50;
		return Q(ew, { children: e.map((e) => {
			let r = JT(e, void 0, i, o, d);
			if (r) {
				let { start: i, end: o } = r;
				if (i = Math.max(i, l), o = Math.min(o, u), i < o) return Q("div", {
					"aria-hidden": !0,
					className: j.fillY,
					style: {
						insetInlineStart: i - l,
						width: o - i
					},
					children: t === "bg-event" ? Q(Sh, {
						eventRange: e.eventRange,
						isStart: e.isStart,
						isEnd: e.isEnd,
						isVertical: !1,
						renderProps: n.renderProps,
						...Vl(e.eventRange, s, c, n.nowMs)
					}) : wh(t, a)
				}, Hl(e.eventRange));
			}
		}) });
	}
}, tE = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.getDateMeta = I(Vd), this.applyExactSlotMeta = I(ST), this.innerWrapperElRef = $C();
	}
	render() {
		let { props: e, state: t, context: n } = this, { dateEnv: r, options: i } = n, { cell: a, dateProfile: o, tDateProfile: s } = e, c = this.applyExactSlotMeta(this.getDateMeta(a.date, r, o, e.todayRange, e.nowDate), a.startMs, e.nowMs), l = i.navLinks && !c.isDisabled && a.rowUnit && a.rowUnit !== "time", u = s.isTimeScale && !e.rowLevel, d = {
			...c,
			level: e.rowLevel,
			isMajor: a.isMajor,
			isMinor: !1,
			isNarrow: !1,
			isTime: u,
			hasNavLink: l,
			text: a.text,
			isFirst: e.isFirst,
			view: n.viewApi
		}, { slotHeaderAlign: f } = i, p = this.align = typeof f == "function" ? f({
			level: e.rowLevel,
			isTime: u
		}) : f, m = this.isSticky = e.rowLevel && i.slotHeaderSticky !== !1, h;
		return m && (p === "center" ? t.innerWidth != null && (h = `calc(50% - ${t.innerWidth / 2}px)`) : h = typeof i.slotHeaderSticky == "number" || typeof i.slotHeaderSticky == "string" ? i.slotHeaderSticky : 0), Q(z, {
			tag: "div",
			className: M(j.noMargin, j.noPadding, j.flexCol, j.borderlessY, j.borderlessEnd, e.isFirst && j.borderlessStart, p === "center" ? j.alignCenter : p === "end" ? j.alignEnd : j.alignStart, j.internalTimelineSlot),
			attrs: {
				"data-date": r.formatIso(a.date, {
					omitTime: !s.isTimeScale,
					omitTimeZoneOffset: !0
				}),
				...c.isToday ? { "aria-current": "date" } : {}
			},
			style: { width: e.slotWidth == null ? void 0 : e.slotWidth * a.colspan },
			renderProps: d,
			generatorName: "slotHeaderContent",
			customGenerator: i.slotHeaderContent,
			defaultGenerator: nE,
			classNameGenerator: i.slotHeaderClass,
			didMount: i.slotHeaderDidMount,
			willUnmount: i.slotHeaderWillUnmount,
			children: (e) => Q("div", {
				ref: this.innerWrapperElRef,
				className: M(j.flexCol, j.noShrink, j.whiteSpaceNoWrap, m && j.sticky),
				style: {
					left: h,
					right: h
				},
				children: Q(e, {
					tag: "div",
					attrs: l ? Bd(n, a.date, a.rowUnit, void 0, !1) : {},
					className: B(i.slotHeaderInnerClass, d)
				})
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let { props: e } = this, t = this.innerWrapperElRef.current;
		this.disconnectSize = kd(t, (t, n) => {
			this._isUnmounting || (R(e.innerWidthRef, t), R(e.innerHeightRef, n), this.align === "center" && this.isSticky && this.setState({ innerWidth: t }));
		});
	}
	componentWillUnmount() {
		let { props: e } = this;
		this._isUnmounting = !0, this.disconnectSize(), R(e.innerWidthRef, null), R(e.innerHeightRef, null);
	}
};
function nE(e) {
	return e.text;
}
var rE = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.innerWidthRefMap = new H(() => {
			V(this.handleInnerWidths);
		}), this.innerHeightRefMap = new H(() => {
			V(this.handleInnerHeights);
		}), this.handleInnerWidths = () => {
			if (this._isUnmounting) return;
			let e = this.innerWidthRefMap.current, t = null;
			for (let n of e.values()) t = Math.max(t || 0, n);
			R(this.props.innerWidthRef, t);
		}, this.handleInnerHeights = () => {
			if (this._isUnmounting) return;
			let e = this.innerHeightRefMap.current, t = null;
			for (let n of e.values()) t = Math.max(t || 0, n);
			R(this.props.innerHeighRef, t), this.setState({ innerHeight: t });
		};
	}
	render() {
		let { props: e, innerWidthRefMap: t, innerHeightRefMap: n, state: r, context: i } = this, { options: a } = i, { cells: o, cellStartIndex: s, cellCount: c } = e;
		return s ||= 0, (s || c !== void 0) && (o = o.slice(s, s + c)), Q("div", {
			className: M(e.className, a.slotHeaderRowClass, j.flexRow, j.borderlessX, j.borderlessTop, !e.rowLevel && j.borderlessBottom),
			style: {
				insetInlineStart: e.insetInlineStart,
				width: e.width,
				height: r.innerHeight
			},
			children: o.map((r, i) => {
				let a = r.key;
				return Q(tE, {
					cell: r,
					rowLevel: e.rowLevel,
					dateProfile: e.dateProfile,
					tDateProfile: e.tDateProfile,
					todayRange: e.todayRange,
					nowDate: e.nowDate,
					nowMs: e.nowMs,
					isFirst: s + i === 0,
					innerWidthRef: t.createRef(a),
					innerHeightRef: n.createRef(a),
					slotWidth: e.slotWidth
				}, a);
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0, R(this.props.innerWidthRef, null), R(this.props.innerHeighRef, null);
	}
};
function iE(e, t, n, r, i, a = 0, o = Infinity) {
	let s = [];
	for (let c = 0; c < e.length; c += 1) {
		let l = e[c], u = JT(l, t, n, r, i, a, o);
		u && s.push({
			...l,
			key: l.eventRange.instance.instanceId,
			start: u.start,
			end: u.end,
			orderIndex: c
		});
	}
	return s;
}
function aE(e, t, n, r, i) {
	let a = ug(e, t, !1, n, 0, r), o = Rg(a.renderSlices), s = Ag(a.hiddenSlices).map((e) => ({
		key: e.key,
		start: e.start,
		end: e.end,
		top: vg(a.sliceLevels, e, a.sliceCoords, r),
		segs: e.hiddenSlices.map((e) => e.sourceSeg)
	}));
	return {
		renderSlices: o,
		sliceCoords: a.sliceCoords,
		moreLinks: s,
		contentHeight: oE(o, a.sliceCoords, r, s, i),
		isSettled: a.isSettled
	};
}
function oE(e, t, n, r, i) {
	let a = 0;
	for (let r of e) {
		let e = Ng(r), i = t.get(e), o = n.get(e);
		i != null && o != null && (a = Math.max(a, i + o));
	}
	for (let e of r) a = Math.max(a, e.top + (i.get(e.key) ?? 0));
	return a;
}
function sE(e, t, n, r, i, a = !1) {
	return r_(iE(e, i, t, n, r), a, !1);
}
function cE(e, t, n) {
	return {
		eventBands: i_(e.sliceLevels, t),
		moreLinkBand: a_(Ag(e.hiddenSlices), n)
	};
}
var lE = class {
	constructor(e) {
		let t = () => {
			V(e);
		};
		this.segHeightRefMap = new H(t, !0), this.moreLinkHeightRefMap = new H(t);
	}
	buildLayout(e) {
		return cE(e, this.segHeightRefMap.current, this.moreLinkHeightRefMap.current);
	}
}, uE = class extends L {
	constructor() {
		super(...arguments), this.sortSegs = I(Fl), this.buildPlan = I(sE), this.printHeights = new lE(() => {
			this._isUnmounting || this.forceUpdate();
		});
	}
	buildPrintBands(e, t, n) {
		let { options: r, dateEnv: i } = this.context, a = this.sortSegs(e, r.eventOrder), o = $T(n, r.eventMinWidth), s = this.buildPlan(a, i, t, o.slotWidth, o.eventMinWidth, r.eventOrderStrict);
		return this.printHeights.buildLayout(s);
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0;
	}
}, dE = N({
	hour: "numeric",
	minute: "2-digit",
	omitZeroMinute: !0,
	meridiem: "narrow"
}), fE = class extends L {
	render() {
		let { props: e } = this;
		return Q(tf, {
			...e,
			display: "row",
			defaultTimeFormat: dE,
			defaultDisplayEventTime: !e.isTimeScale
		});
	}
}, pE = class extends L {
	render() {
		let { props: e } = this, { hiddenSegs: t } = e;
		return Q(Fh, {
			display: "row",
			allDayDate: null,
			segs: t,
			hiddenSegs: t,
			dateProfile: e.dateProfile,
			todayRange: e.todayRange,
			dateSpanProps: e.dateSpanProps,
			renderProps: e.renderProps,
			isNarrow: !1,
			isMicro: !1,
			popoverContent: () => Q(ew, { children: t.map((t) => {
				let { eventRange: n } = t, { instanceId: r } = n.instance, i = !!(e.eventDrag && e.eventDrag.affectedInstances[r]), a = !!(e.eventResize && e.eventResize.affectedInstances[r]);
				return Q("div", {
					role: "listitem",
					style: { visibility: i || a ? "hidden" : void 0 },
					children: Q(fE, {
						isTimeScale: e.isTimeScale,
						eventRange: n,
						isStart: t.isStart,
						isEnd: t.isEnd,
						isDragging: i,
						isResizing: a,
						isMirror: !1,
						isSelected: r === e.eventSelection,
						renderProps: e.renderProps,
						...Vl(n, e.todayRange, e.nowDate, e.nowMs)
					})
				}, r);
			}) })
		});
	}
}, mE = class extends uE {
	render() {
		let { props: e } = this, { eventBands: t, moreLinkBand: n } = this.buildPrintBands(e.fgEventSegs, e.tDateProfile, e.slotWidth);
		return Q("div", {
			className: j.noShrink,
			children: [t.map((t) => Q(hE, {
				band: t,
				heightRefMap: this.printHeights.segHeightRefMap,
				dateProfile: e.dateProfile,
				tDateProfile: e.tDateProfile,
				nowDate: e.nowDate,
				nowMs: e.nowMs,
				todayRange: e.todayRange,
				eventSelection: e.eventSelection,
				dateSpanProps: e.dateSpanProps,
				renderProps: e.renderProps,
				timeCanvasClipStart: e.timeCanvasClipStart
			}, t.levelIndex)), n && Q(gE, {
				band: n,
				heightRefMap: this.printHeights.moreLinkHeightRefMap,
				dateProfile: e.dateProfile,
				tDateProfile: e.tDateProfile,
				nowDate: e.nowDate,
				nowMs: e.nowMs,
				todayRange: e.todayRange,
				eventSelection: e.eventSelection,
				dateSpanProps: e.dateSpanProps,
				renderProps: e.renderProps,
				timeCanvasClipStart: e.timeCanvasClipStart
			})]
		});
	}
};
function hE(e) {
	let { band: t } = e;
	return Q("div", {
		className: M(j.rel, j.crop, j.breakInsideAvoid),
		style: { height: t.thickness },
		children: t.slices.map((t) => {
			let { sourceSeg: n } = t, { eventRange: r } = n, { instanceId: i } = r.instance, a = i === e.eventSelection;
			return Q($h, {
				className: M(j.abs, a ? j.z1000 : j.z1),
				style: {
					top: 0,
					insetInlineStart: t.start - (e.timeCanvasClipStart ?? 0),
					width: t.end - t.start
				},
				heightRef: e.heightRefMap.createRef(n.key),
				children: Q(fE, {
					isTimeScale: e.tDateProfile.isTimeScale,
					eventRange: r,
					isStart: t.isStart,
					isEnd: t.isEnd,
					isDragging: !1,
					isResizing: !1,
					isMirror: !1,
					isSelected: a,
					renderProps: e.renderProps,
					...Vl(r, e.todayRange, e.nowDate, e.nowMs)
				})
			}, n.key);
		})
	});
}
function gE(e) {
	let { band: t } = e;
	return Q("div", {
		className: M(j.rel, j.crop, j.breakInsideAvoid),
		style: { height: t.thickness },
		children: t.moreLinkGroups.map((t) => Q($h, {
			className: j.abs,
			style: {
				top: 0,
				insetInlineStart: t.start - (e.timeCanvasClipStart ?? 0),
				width: t.end - t.start
			},
			heightRef: e.heightRefMap.createRef(t.key),
			children: Q(pE, {
				hiddenSegs: t.hiddenSlices.map((e) => e.sourceSeg),
				dateProfile: e.dateProfile,
				nowDate: e.nowDate,
				nowMs: e.nowMs,
				todayRange: e.todayRange,
				isTimeScale: e.tDateProfile.isTimeScale,
				eventDrag: null,
				eventResize: null,
				eventSelection: e.eventSelection,
				dateSpanProps: e.dateSpanProps,
				renderProps: e.renderProps
			})
		}, t.key))
	});
}
var _E = class extends L {
	constructor() {
		super(...arguments), this.getDateMeta = I(Vd), this.applyExactSlotMeta = I(ST);
	}
	render() {
		let { props: e, context: t } = this, { dateEnv: n, options: r } = t, { date: i, tDateProfile: a, isMajor: o } = e, s = this.applyExactSlotMeta(this.getDateMeta(e.date, n, e.dateProfile, e.todayRange, e.nowDate), e.startMs, e.nowMs), c = a.isTimeScale && !To(n.countDurationsBetween(a.normalizedRange.start, e.date, a.labelInterval)), l = {
			...s,
			isMajor: o,
			isMinor: c,
			view: t.viewApi
		};
		return Q(z, {
			tag: "div",
			className: M(j.noMargin, j.noPadding, j.alignStart, j.borderlessY, j.borderlessEnd, !e.borderStart && j.borderlessStart, j.internalTimelineSlot),
			attrs: {
				"data-date": n.formatIso(i, {
					omitTimeZoneOffset: !0,
					omitTime: !a.isTimeScale
				}),
				...s.isToday ? { "aria-current": "date" } : {}
			},
			style: { width: e.width },
			renderProps: l,
			generatorName: void 0,
			classNameGenerator: r.slotLaneClass,
			didMount: r.slotLaneDidMount,
			willUnmount: r.slotLaneWillUnmount
		});
	}
}, vE = class extends L {
	render() {
		let { props: e } = this, { tDateProfile: t, slotWidth: n, slatStartIndex: r, slatCount: i } = e, { timeAxis: a, slotDatesMajor: o } = t, s = a?.slots ?? t.slotDates.map((e, n) => ({
			date: e,
			key: t.slotKeys[n],
			startMs: null
		}));
		return r = e.slatStartIndex || 0, (r || i !== void 0) && (s = s.slice(r, r + i)), Q("div", {
			"aria-hidden": !0,
			className: M(j.flexRow, j.fillY),
			style: {
				height: e.height,
				width: (e.slotWidth ?? 0) * s.length,
				insetInlineStart: -(e.clipStart ?? 0)
			},
			children: s.map((i, a) => {
				let s = r + a;
				return Q(_E, {
					date: i.date,
					startMs: i.startMs,
					dateProfile: e.dateProfile,
					tDateProfile: t,
					nowDate: e.nowDate,
					nowMs: e.nowMs,
					todayRange: e.todayRange,
					isMajor: o[s],
					borderStart: !!s,
					width: n
				}, i.key);
			})
		});
	}
}, yE = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.headerElRef = $C();
	}
	render() {
		let { props: e, context: t } = this, { options: n, viewSpec: r } = t, { borderlessX: i, borderlessTop: a, borderlessBottom: o } = Vs(n), { tDateProfile: s, nowDate: c, todayRange: l, slicedProps: u } = e, { cellRows: d } = s, f = {
			borderlessX: i,
			borderlessTop: a,
			borderlessBottom: o,
			multiMonthColumns: 0
		}, p = B(n.slotHeaderDividerClass, {
			inTableHeader: !0,
			options: { dayMinWidth: n.dayMinWidth }
		});
		return Q(Hd, {
			viewSpec: r,
			className: M(e.className, j.rel, j.crop, j.isolate),
			children: [Q("div", {
				className: M(j.abs, j.start0, j.end0, j.pointerEventsNone, j.z0),
				style: {
					top: this.state.headerHeight ?? 0,
					bottom: "-5%"
				},
				children: [Q(vE, {
					dateProfile: e.dateProfile,
					tDateProfile: s,
					nowDate: c,
					nowMs: e.nowMs,
					todayRange: l,
					slotWidth: e.slotWidth,
					clipStart: e.timeCanvasClipStart
				}), Q(eE, {
					tDateProfile: s,
					nowDate: c,
					nowMs: e.nowMs,
					todayRange: l,
					bgEventSegs: u.bgEventSegs,
					businessHourSegs: u.businessHourSegs,
					dateSelectionSegs: null,
					eventResizeSegs: null,
					slotWidth: e.slotWidth,
					clipStart: e.timeCanvasClipStart
				})]
			}), Q("table", {
				className: M(B(n.tableClass, f), j.printTable, j.rel, j.z1),
				children: [Q("thead", {
					ref: this.headerElRef,
					className: B(n.tableHeaderClass, {
						...f,
						isSticky: !1
					}),
					children: [Q("tr", { children: Q("th", {
						className: M(j.noPadding, j.borderless, j.crop),
						children: Q("div", {
							className: j.rel,
							style: {
								width: e.canvasWidth,
								insetInlineStart: -e.timeCanvasClipStart
							},
							children: d.map((t, n) => {
								let r = d.length - n - 1;
								return Q(rE, {
									dateProfile: e.dateProfile,
									tDateProfile: s,
									nowDate: c,
									nowMs: e.nowMs,
									todayRange: l,
									rowLevel: r,
									cells: t,
									slotWidth: e.slotWidth
								}, r);
							})
						})
					}) }), Q("tr", { children: Q("th", { className: M(j.noPadding, p) }) })]
				}), Q("tbody", {
					className: B(n.tableBodyClass, f),
					children: Q("tr", { children: Q("td", {
						className: M(j.noPadding, j.borderless),
						children: [
							Q("div", { className: M(n.timelineTopClass) }),
							Q(mE, {
								dateProfile: e.dateProfile,
								tDateProfile: s,
								nowDate: c,
								nowMs: e.nowMs,
								todayRange: l,
								fgEventSegs: u.fgEventSegs,
								eventSelection: u.eventSelection,
								slotWidth: e.slotWidth,
								timeCanvasClipStart: e.timeCanvasClipStart
							}),
							Q("div", { className: M(n.timelineBottomClass) })
						]
					}) })
				})]
			})]
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.disconnectHeaderHeight = jd(this.headerElRef.current, (e) => {
			!this._isUnmounting && e !== this.state.headerHeight && this.setState({ headerHeight: e });
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectHeaderHeight?.();
	}
}, bE = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.sortEventSegs = I(Fl), this.buildSegSources = I(iE), this.sliceHeightRefMap = new H(() => {
			V(this.handleSegHeights);
		}), this.moreLinkHeightRefMap = new H(() => {
			V(this.handleMoreLinkHeights);
		}), this.handleMoreLinkHeights = () => {
			this._isUnmounting || this.setState({ moreLinkHeightRev: this.moreLinkHeightRefMap.rev });
		}, this.handleSegHeights = () => {
			this._isUnmounting || this.setState({ segHeightRev: this.sliceHeightRefMap.rev });
		};
	}
	render() {
		let { props: e, context: t, sliceHeightRefMap: n, moreLinkHeightRefMap: r } = this, { options: i } = t, { tDateProfile: a } = e, o = (e.eventDrag ? e.eventDrag.segs : null) || (e.eventResize ? e.eventResize.segs : null) || [], s = this.sortEventSegs(e.fgEventSegs, i.eventOrder), c = $T(e.slotWidth, i.eventMinWidth), l = this.buildSegSources(s, c.eventMinWidth, t.dateEnv, a, c.slotWidth, e.clipStart, e.clipEnd), u = l.length === s.length, d = aE(l, i.eventOrderStrict, i.eventMaxStack, n.current, r.current);
		return this.totalHeight = d.contentHeight, this.totalHeightSettled = e.slotWidth != null && u && d.isSettled, Q("div", {
			...d.renderSlices.length || d.moreLinks.length ? {
				role: "list",
				"aria-label": e.label
			} : {},
			className: M(j.rel, j.noShrink),
			style: { height: d.contentHeight },
			children: [
				this.renderEventSlices(d.renderSlices, d.sliceCoords),
				this.renderMirrorSegs(o, d.sliceCoords),
				this.renderMoreLinks(d.moreLinks)
			]
		});
	}
	renderEventSlices(e, t) {
		let { props: n } = this;
		return Q(ew, { children: e.map((e) => {
			let r = Ng(e), i = e.sourceSeg, a = t.get(r), { eventRange: o } = i, { instanceId: s } = o.instance, c = !!(n.eventDrag && n.eventDrag.affectedInstances[s]), l = !!(n.eventResize && n.eventResize.affectedInstances[s]), u = c || l || a == null, d = s === n.eventSelection;
			return Q($h, {
				attrs: { role: "listitem" },
				className: M(j.abs, d ? j.z1000 : j.z1),
				style: {
					visibility: u ? "hidden" : void 0,
					top: a,
					insetInlineStart: e.start,
					width: e.end - e.start
				},
				heightRef: this.sliceHeightRefMap.createRef(r),
				children: Q(fE, {
					isTimeScale: n.tDateProfile.isTimeScale,
					eventRange: o,
					isStart: i.isStart,
					isEnd: i.isEnd,
					isDragging: c,
					isResizing: l,
					isMirror: !1,
					isSelected: d,
					renderProps: n.renderProps,
					...Vl(o, n.todayRange, n.nowDate, n.nowMs)
				})
			}, r);
		}) });
	}
	renderMirrorSegs(e, t) {
		let { props: n, context: r } = this, i = $T(n.slotWidth, r.options.eventMinWidth);
		return e.map((e) => {
			let { eventRange: a } = e, { instanceId: o } = a.instance, s = JT(e, i.eventMinWidth, r.dateEnv, n.tDateProfile, i.slotWidth, n.clipStart, n.clipEnd), c = !!(n.eventDrag && n.eventDrag.affectedInstances[o]), l = !!(n.eventResize && n.eventResize.affectedInstances[o]), u = o === n.eventSelection;
			return Q($h, {
				attrs: { "aria-hidden": !0 },
				className: M(j.abs, u ? j.z1000 : j.z1),
				style: {
					top: t.get(o) ?? 0,
					insetInlineStart: s?.start,
					width: s && s.end - s.start
				},
				children: Q(fE, {
					isTimeScale: n.tDateProfile.isTimeScale,
					eventRange: a,
					isStart: e.isStart,
					isEnd: e.isEnd,
					isDragging: c,
					isResizing: l,
					isMirror: !0,
					isSelected: u,
					renderProps: n.renderProps,
					...Vl(a, n.todayRange, n.nowDate, n.nowMs)
				})
			}, o);
		});
	}
	renderMoreLinks(e) {
		let { props: t, moreLinkHeightRefMap: n } = this;
		return Q(ew, { children: e.map((e) => Q($h, {
			attrs: { role: "listitem" },
			className: j.abs,
			style: {
				top: e.top,
				insetInlineStart: e.start,
				width: e.end - e.start
			},
			heightRef: n.createRef(e.key),
			children: Q(pE, {
				hiddenSegs: e.segs,
				dateProfile: t.dateProfile,
				nowDate: t.nowDate,
				nowMs: t.nowMs,
				todayRange: t.todayRange,
				isTimeScale: t.tDateProfile.isTimeScale,
				eventDrag: t.eventDrag,
				eventResize: t.eventResize,
				eventSelection: t.eventSelection,
				dateSpanProps: t.dateSpanProps,
				renderProps: t.renderProps
			})
		}, e.key)) });
	}
	componentDidMount() {
		this._isUnmounting = !1, this.fireHeight();
	}
	componentDidUpdate() {
		this.fireHeight();
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.firedTotalHeight = void 0, R(this.props.heightRef, null);
	}
	fireHeight() {
		this.totalHeightSettled && this.totalHeight !== this.firedTotalHeight && (this.firedTotalHeight = this.totalHeight, R(this.props.heightRef, this.totalHeight));
	}
}, xE = class extends L {
	render() {
		let { props: e, context: t } = this, n = t.dateEnv.timestampToMarker(e.nowMs), r = e.slotWidth == null ? {} : { insetInlineStart: e.tDateProfile.timeAxis ? qT(e.nowMs, e.tDateProfile, e.slotWidth) : KT(n, t.dateEnv, e.tDateProfile, e.slotWidth) };
		return Q("div", {
			className: M(j.fill, j.crop, j.pointerEventsNone, j.z2),
			children: Q(wv, {
				className: j.abs,
				style: r,
				date: n
			})
		});
	}
}, SE = class extends L {
	render() {
		let { props: e, context: t } = this, n = e.clipStart ?? 0, r = t.dateEnv.timestampToMarker(e.nowMs), i = e.slotWidth == null ? {} : { insetInlineStart: (e.tDateProfile.timeAxis ? qT(e.nowMs, e.tDateProfile, e.slotWidth) : KT(r, t.dateEnv, e.tDateProfile, e.slotWidth)) - n };
		return Q("div", {
			className: M(j.fill, j.pointerEventsNone, j.z2),
			children: [Q(vv, {
				className: M(j.fillY, j.noMarginY, j.borderlessY),
				style: i,
				date: r
			}), Q("div", {
				className: M(j.flexCol, j.fillY),
				style: i,
				children: Q("div", {
					className: j.stickyT,
					children: Q(_v, {})
				})
			})]
		});
	}
};
function CE(e, t) {
	return e.querySelectorAll(`.${j.internalTimelineSlot}`)[t];
}
var wE = class extends Wd {
	constructor() {
		super(...arguments), this.state = {}, this.headerScrollerRef = $C(), this.bodyScrollerRef = $C(), this.footerScrollerRef = $C(), this.headerRowInnerWidthMap = new H(() => {
			V(this.handleSlotInnerWidths);
		}), this.scroll = {}, this.handleSlotInnerWidths = () => {
			if (this._isUnmounting) return;
			let e = this.headerRowInnerWidthMap.current.get(this.props.tDateProfile.cellRows.length - 1);
			e != null && R(this.props.slotInnerWidthRef, e);
		}, this.handleTotalWidth = (e) => {
			this._isUnmounting || this.setState({ totalWidth: e });
		}, this.handleTimeScrollRequest = (e) => {
			this.scroll.time = e, this.scroll.x = void 0, this.applyTimeScroll();
		}, this.handleTimeScrollStart = (e) => {
			e && (this.scroll.x = void 0, this.scroll.time = void 0);
		}, this.handleTimeScrollEnd = (e) => {
			e && (this.scroll.x = this.syncedScroller.x, this.scroll.time = void 0), R(this.props.scrollRef, this.scroll);
		}, this.handleBodyEl = (e) => {
			this.bodyEl = e, e ? this.context.registerInteractiveComponent(this, { el: e }) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, { borderlessX: i, borderlessTop: a, borderlessBottom: o } = Vs(r), { tDateProfile: s, nowDate: c, todayRange: l, slicedProps: u, slotWidth: d, canvasWidth: f } = e, { cellRows: p } = s, m = !ld(r), h = ud(r), g = dd(r), _ = t.totalWidth != null && e.clientWidth != null ? t.totalWidth - e.clientWidth : void 0;
		this.maxHScroll = f != null && e.clientWidth != null ? Math.max(0, f - e.clientWidth) : void 0;
		let v = r.nowIndicator && d != null && xo(e.dateProfile.currentRange, c);
		return Q(Hd, {
			viewSpec: n.viewSpec,
			className: M(j.flexCol, e.className, B(r.tableClass, {
				borderlessX: i,
				borderlessTop: a,
				borderlessBottom: o,
				multiMonthColumns: 0
			}), j.isolate),
			children: [
				Q("div", {
					className: M(B(r.tableHeaderClass, {
						isSticky: h,
						borderlessX: i,
						borderlessTop: a,
						borderlessBottom: o,
						multiMonthColumns: 0
					}), j.flexCol, h && j.tableHeaderSticky, j.z1),
					children: [Q(qd, {
						horizontal: !0,
						hideScrollbars: !0,
						className: j.flexRow,
						ref: this.headerScrollerRef,
						children: [Q("div", {
							className: M(j.rel, f == null && j.liquid),
							style: { width: f },
							children: [p.map((t, n) => {
								let r = p.length - n - 1;
								return Q(rE, {
									dateProfile: e.dateProfile,
									tDateProfile: s,
									nowDate: c,
									nowMs: e.nowMs,
									todayRange: l,
									rowLevel: r,
									cells: t,
									slotWidth: d,
									innerWidthRef: this.headerRowInnerWidthMap.createRef(n)
								}, n);
							}), v && Q(xE, {
								tDateProfile: s,
								nowMs: e.nowMs,
								slotWidth: d
							})]
						}), !!_ && Q("div", {
							className: M(B(r.fillerClass, { inTableHeader: !0 }), j.borderlessY, j.borderlessEnd),
							style: { minWidth: _ }
						})]
					}), Q("div", { className: B(r.slotHeaderDividerClass, {
						inTableHeader: !0,
						options: { dayMinWidth: r.dayMinWidth }
					}) })]
				}),
				Q(qd, {
					vertical: m,
					horizontal: !0,
					hideScrollbars: g,
					className: M(B(r.tableBodyClass, {
						borderlessX: i,
						borderlessTop: a,
						borderlessBottom: o,
						multiMonthColumns: 0
					}), j.flexCol, m && j.liquid, j.z0),
					ref: this.bodyScrollerRef,
					clientWidthRef: e.clientWidthRef,
					children: Q("div", {
						className: M(j.rel, j.grow),
						style: { width: f },
						ref: this.handleBodyEl,
						children: [
							Q(vE, {
								dateProfile: e.dateProfile,
								tDateProfile: s,
								nowDate: c,
								nowMs: e.nowMs,
								todayRange: l,
								slotWidth: d
							}),
							Q(eE, {
								tDateProfile: s,
								nowDate: c,
								nowMs: e.nowMs,
								todayRange: l,
								bgEventSegs: u.bgEventSegs,
								businessHourSegs: u.businessHourSegs,
								dateSelectionSegs: u.dateSelectionSegs,
								eventResizeSegs: u.eventResize ? u.eventResize.segs : null,
								slotWidth: d
							}),
							Q("div", { className: M(r.timelineTopClass) }),
							Q(bE, {
								dateProfile: e.dateProfile,
								tDateProfile: s,
								nowDate: c,
								nowMs: e.nowMs,
								todayRange: l,
								fgEventSegs: u.fgEventSegs,
								eventDrag: u.eventDrag,
								eventResize: u.eventResize,
								eventSelection: u.eventSelection,
								label: r.eventsHint,
								slotWidth: d
							}),
							Q("div", { className: M(r.timelineBottomClass) }),
							v && Q(SE, {
								tDateProfile: s,
								nowMs: e.nowMs,
								slotWidth: d
							})
						]
					})
				}),
				!!g && Q(I_, {
					isSticky: !0,
					canvasWidth: f,
					scrollerRef: this.footerScrollerRef
				}),
				Q(vh, { widthRef: this.handleTotalWidth })
			]
		});
	}
	componentDidMount() {
		let { props: e, context: t } = this;
		this._isUnmounting = !1, this.syncedScroller = new Mw(!0), this.updateSyncedScroller(), e.initialScroll ? (this.scroll = { ...e.initialScroll }, this.applyTimeScroll()) : this.resetScroll(), t.emitter.on("_timeScrollRequest", this.handleTimeScrollRequest), this.syncedScroller.addScrollStartListener(this.handleTimeScrollStart), this.syncedScroller.addScrollEndListener(this.handleTimeScrollEnd);
	}
	componentDidUpdate(e) {
		let { props: t } = this, { options: n } = this.context;
		this.updateSyncedScroller();
		let r = e.dateProfile !== t.dateProfile, i = e.slotWidth !== t.slotWidth, a = e.clientWidth !== t.clientWidth;
		(r || i || a) && (r && n.scrollTimeReset ? this.resetScroll() : this.applyTimeScroll());
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.syncedScroller.destroy(), this.context.emitter.off("_timeScrollRequest", this.handleTimeScrollRequest), this.syncedScroller.removeScrollStartListener(this.handleTimeScrollStart), this.syncedScroller.removeScrollEndListener(this.handleTimeScrollEnd);
	}
	updateSyncedScroller() {
		this.syncedScroller.handleChildren([
			this.headerScrollerRef.current,
			this.bodyScrollerRef.current,
			this.footerScrollerRef.current
		]);
	}
	resetScroll() {
		this.handleTimeScrollRequest(this.context.options.scrollTime);
	}
	applyTimeScroll() {
		let e = this.computeTimeScroll();
		e != null && (this.syncedScroller.scrollTo({ x: e }), this.scroll.x !== e && (this.scroll.x = e, R(this.props.scrollRef, this.scroll)));
	}
	computeTimeScroll() {
		let { props: e, context: t, scroll: n } = this, { x: r } = n;
		return r == null && n.time != null && e.slotWidth != null && (r = GT(n.time, t.dateEnv, e.dateProfile, e.tDateProfile, e.slotWidth), r && (r += 1)), r !== void 0 && this.maxHScroll !== void 0 && (r = Math.min(this.maxHScroll, r)), r;
	}
	queryHit(e, t, n, r, i) {
		let { props: a, context: o } = this;
		if (a.slotWidth) {
			let n = YT(t, r, a.slotWidth, e, a.tDateProfile, o.dateEnv);
			return n ? {
				dateProfile: a.dateProfile,
				dateSpan: n.dateSpan,
				rect: {
					...n.rect,
					top: 0,
					bottom: i
				},
				getDayEl: () => CE(this.bodyEl, n.slatIndex),
				layer: 0
			} : null;
		}
		return null;
	}
}, TE = {
	name: "timeline",
	premiumReleaseDate: "2026-10-12",
	deps: [jw],
	initialView: "timelineDay",
	views: {
		timeline: {
			component: class extends Wd {
				constructor() {
					super(...arguments), this.state = {}, this.buildTimelineDateProfile = I(kT), this.computeSlotWidth = I(WT), this.scrollRef = $C(), this.slicer = new ZT(), this.handleSlotInnerWidth = (e) => {
						this._isUnmounting || e != null && e !== this.state.slotInnerWidth && this.setState({ slotInnerWidth: e });
					}, this.handleClientWidth = (e) => {
						this._isUnmounting || e != null && e !== this.state.clientWidth && this.setState({ clientWidth: e });
					};
				}
				render() {
					let { props: e, state: t, context: n } = this, { options: r } = n, { clientWidth: i } = t, a = this.buildTimelineDateProfile(e.dateProfile, n.dateEnv, r, n.dateProfileGenerator), { unit: o, value: s } = Uo(a.slotDuration), [c, l] = this.computeSlotWidth(a.slotCnt, a.slotsPerLabel, r.slotMinWidth, t.slotInnerWidth, i), u = this.slicer.sliceProps(e, e.dateProfile, a.isTimeScale ? null : r.nextDayThreshold, n, e.dateProfile, n.dateProfileGenerator, a, n.dateEnv);
					return Q(Md, {
						unit: o,
						unitValue: s,
						children: (t, n, r) => {
							let o = {
								className: e.className,
								dateProfile: e.dateProfile,
								tDateProfile: a,
								nowDate: t,
								nowMs: r,
								todayRange: n,
								slicedProps: u,
								canvasWidth: c,
								slotWidth: l
							};
							return e.forPrint ? Q(yE, {
								...o,
								timeCanvasClipStart: this.scrollRef.current?.x ?? 0
							}) : Q(wE, {
								...o,
								clientWidth: i,
								clientWidthRef: this.handleClientWidth,
								slotInnerWidthRef: this.handleSlotInnerWidth,
								initialScroll: this.scrollRef.current ?? void 0,
								scrollRef: this.scrollRef
							});
						}
					});
				}
				componentDidMount() {
					this._isUnmounting = !1;
				}
				componentWillUnmount() {
					this._isUnmounting = !0;
				}
			},
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
}, EE = [];
function DE(e) {
	EE.length || OE(), EE.push(e), e.calendarApi.on("_unmount", () => {
		ic(EE, e), EE.length || kE();
	});
}
function OE() {
	window.addEventListener("beforeprint", AE), window.addEventListener("afterprint", jE);
}
function kE() {
	window.removeEventListener("beforeprint", AE), window.removeEventListener("afterprint", jE);
}
function AE() {
	for (let e of EE) e.emitter.trigger("_beforeprint");
}
function jE() {
	for (let e of EE) e.emitter.trigger("_afterprint");
}
var ME = {
	name: "adaptive",
	premiumReleaseDate: "2026-10-12",
	deps: [jw],
	contextInit: DE
};
//#endregion
//#region node_modules/fullcalendar-scheduler/node_modules/@fullcalendar/core/protected-api.js
function NE(e) {
	return e;
}
//#endregion
//#region node_modules/fullcalendar-scheduler/chunks/eac84322.js
var PE = "_fc:", FE = {
	id: String,
	parentId: String,
	children: NE,
	title: String,
	businessHours: NE,
	extendedProps: NE,
	eventEditable: Boolean,
	eventStartEditable: Boolean,
	eventDurationEditable: Boolean,
	eventConstraint: NE,
	eventOverlap: Boolean,
	eventAllow: NE,
	eventClass: gs,
	eventColor: String,
	eventContrastColor: String
};
function IE(e, t = "", n, r) {
	let { refined: i, extra: a } = pc(e, FE), o = {
		id: i.id || PE + Ds(),
		parentId: i.parentId || t,
		title: i.title || "",
		businessHours: i.businessHours ? Xf(i.businessHours, r) : null,
		ui: Wc({
			editable: i.eventEditable,
			startEditable: i.eventStartEditable,
			durationEditable: i.eventDurationEditable,
			constraint: i.eventConstraint,
			overlap: i.eventOverlap,
			allow: i.eventAllow,
			className: i.eventClass,
			color: i.eventColor,
			contrastColor: i.eventContrastColor
		}, r),
		extendedProps: {
			...a,
			...i.extendedProps
		}
	};
	if (Object.freeze(o.ui.className), Object.freeze(o.extendedProps), !n[o.id] && (n[o.id] = o, i.children)) for (let e of i.children) IE(e, o.id, n, r);
	return o;
}
function LE(e) {
	return e.indexOf(PE) === 0 ? "" : e;
}
var RE = class e {
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
			s.resourceIds.indexOf(e) !== -1 && i.push(new wl(t, s, o));
		}
		return i;
	}
	get id() {
		return LE(this._resource.id);
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
	get eventColor() {
		return this._resource.ui.color;
	}
	get eventContrastColor() {
		return this._resource.ui.contrastColor;
	}
	get eventClass() {
		return this._resource.ui.className;
	}
	get extendedProps() {
		return this._resource.extendedProps;
	}
	toPlainObject(e = {}) {
		let t = this._resource, { ui: n } = t, r = this.id, i = {};
		return r && (i.id = r), t.title && (i.title = t.title), n.contrastColor && (i.eventContrastColor = n.contrastColor), n.contrastColor && (i.eventContrastColor = n.contrastColor), n.className && (i.eventClass = n.className), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(i, t.extendedProps) : i.extendedProps = t.extendedProps), i;
	}
	toJSON() {
		return this.toPlainObject();
	}
};
function zE(e, t) {
	let n = [];
	for (let r in e) n.push(new RE(t, e[r]));
	return n;
}
wl.prototype.getResources = function() {
	let { calendarApi: e } = this._context;
	return this._def.resourceIds.map((t) => e.getResourceById(t));
}, wl.prototype.setResources = function(e) {
	let t = [];
	for (let n of e) {
		let e = null;
		typeof n == "string" ? e = n : typeof n == "number" ? e = String(n) : n instanceof RE ? e = n.id : ms(`Invalid resource value \`${n}\`. Expected a resource ID or ResourceApi object.`), e && t.push(e);
	}
	this.mutate({ standardProps: { resourceIds: t } });
}, hp.prototype.addResource = function(e, t = !0) {
	let n = this.getCurrentData(), r, i;
	e instanceof RE ? (i = e._resource, r = { [i.id]: i }) : (r = {}, i = IE(e, "", r, n)), this.dispatch({
		type: "ADD_RESOURCE",
		resourceHash: r
	}), t && this.trigger("_resourceScrollRequest", i.id);
	let a = new RE(n, i);
	return n.emitter.trigger("resourceAdd", {
		resource: a,
		revert: () => {
			this.dispatch({
				type: "REMOVE_RESOURCE",
				resourceId: i.id
			});
		}
	}), a;
}, hp.prototype.getResourceById = function(e) {
	e = String(e);
	let t = this.getCurrentData();
	if (t.resourceStore) {
		let n = t.resourceStore[e];
		if (n) return new RE(t, n);
	}
	return null;
}, hp.prototype.getResources = function() {
	let e = this.getCurrentData(), { resourceStore: t } = e, n = [];
	if (t) for (let r in t) n.push(new RE(e, t[r]));
	return n;
}, hp.prototype.getTopLevelResources = function() {
	let e = this.getCurrentData(), { resourceStore: t } = e, n = [];
	if (t) for (let r in t) t[r].parentId || n.push(new RE(e, t[r]));
	return n;
}, hp.prototype.refetchResources = function() {
	this.dispatch({ type: "REFETCH_RESOURCES" });
};
function BE(e, t) {
	return e.resourceId ? { resource: t.calendarApi.getResourceById(e.resourceId) } : {};
}
function VE(e, t) {
	return e.resourceId ? { resource: t.calendarApi.getResourceById(e.resourceId) } : {};
}
//#endregion
//#region node_modules/fullcalendar-scheduler/chunks/acab5348.js
function HE(e, t, n) {
	let r = t.dateSpan.resourceId, i = n.dateSpan.resourceId;
	r && i && r !== i && (e.resourceMutation = {
		matchResourceId: r,
		setResourceId: i
	});
}
function UE(e, t, n) {
	let r = t.resourceMutation;
	if (r && WE(e, n)) {
		let t = e.resourceIds.indexOf(r.matchResourceId);
		if (t !== -1) {
			let n = e.resourceIds.slice();
			n.splice(t, 1), n.indexOf(r.setResourceId) === -1 && n.push(r.setResourceId), e.resourceIds = n;
		}
	}
}
function WE(e, t) {
	let { resourceEditable: n } = e;
	if (n == null) {
		let r = e.sourceId && t.getCurrentData().eventSources[e.sourceId];
		r && (n = r.extendedProps.resourceEditable), n ?? (n = t.options.eventResourceEditable, n ??= t.options.editable);
	}
	return n;
}
function GE(e, t) {
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
var KE = class {
	transform(e, t) {
		return t.viewSpec.optionDefaults.needsResourceData ? {
			resourceStore: t.resourceStore,
			rawEventStore: t.eventStore,
			resourceEntityExpansions: t.resourceEntityExpansions
		} : null;
	}
};
function qE(e, t, n, r) {
	if (!e) {
		let e = r.getCurrentData();
		if (e.viewSpecs[e.currentViewType].optionDefaults.needsResourceData && WE(t, r)) return !0;
	}
	return e;
}
var JE = class {
	constructor() {
		this.buildResourceEventUis = I(YE, Xs), this.injectResourceEventUis = I(XE);
	}
	transform(e, t) {
		return t.viewSpec.optionDefaults.needsResourceData ? null : { eventUiBases: this.injectResourceEventUis(e.eventUiBases, e.eventStore.defs, this.buildResourceEventUis(t.resourceStore)) };
	}
};
function YE(e) {
	return Ws(e, (e) => e.ui);
}
function XE(e, t, n) {
	return Ws(e, (e, r) => r ? ZE(e, t[r], n) : e);
}
function ZE(e, t, n) {
	let r = [];
	for (let e of t.resourceIds) n[e] && r.unshift(n[e]);
	return r.unshift(e), Gc(r);
}
var QE = {
	ignoreRange: !0,
	parseMeta(e) {
		return Array.isArray(e.resources) ? e.resources : null;
	},
	fetch(e, t) {
		t({ rawResources: e.resourceSource.meta });
	}
}, $E = {
	parseMeta(e) {
		return e.url ? {
			url: e.url,
			method: (e.method || "GET").toUpperCase(),
			extraParams: e.extraParams
		} : null;
	},
	fetch(e, t, n) {
		let r = e.resourceSource.meta, i = eD(r, e.range, e.context);
		du(r.method, r.url, i).then(([e, n]) => {
			t({
				rawResources: e,
				response: n
			});
		}, n);
	}
};
function eD(e, t, n) {
	let { dateEnv: r, options: i } = n, a, o, s, c, l = {};
	return t && (a = e.startParam, a ??= i.startParam, o = e.endParam, o ??= i.endParam, s = e.timeZoneParam, s ??= i.timeZoneParam, l[a] = r.formatIso(t.start), l[o] = r.formatIso(t.end), r.timeZone !== "local" && (l[s] = r.timeZone)), c = typeof e.extraParams == "function" ? e.extraParams() : e.extraParams || {}, Object.assign(l, c), l;
}
var tD = [
	QE,
	$E,
	{
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
			hu(i.bind(null, a), (e) => t({ rawResources: e }), n);
		}
	}
];
function nD(e) {
	return tD[e];
}
function rD() {
	return tD;
}
var iD = {
	id: String,
	resources: F,
	url: String,
	method: String,
	startParam: String,
	endParam: String,
	timeZoneParam: String,
	extraParams: F
};
function aD(e) {
	let t;
	if (typeof e == "string" ? t = { url: e } : typeof e == "function" || Array.isArray(e) ? t = { resources: e } : typeof e == "object" && e && (t = e), t) {
		let { refined: n, extra: r } = pc(t, iD);
		sD(r);
		let i = oD(n);
		if (i) return {
			_raw: e,
			sourceId: Ds(),
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
function oD(e) {
	let t = rD();
	for (let n = t.length - 1; n >= 0; --n) {
		let r = t[n].parseMeta(e);
		if (r) return {
			meta: r,
			sourceDefId: n
		};
	}
	return null;
}
function sD(e) {
	for (let t in e) ms(`Unknown resource-source property \`${t}\`.`);
}
function cD(e, t, n) {
	let { options: r, dateProfile: i } = n;
	if (!e || !t) return lD(r.initialResources || r.resources, i.activeRange, r.refetchResourcesOnNavigate, n);
	switch (t.type) {
		case "RESET_RESOURCE_SOURCE": return lD(t.resourceSourceInput, i.activeRange, r.refetchResourcesOnNavigate, n);
		case "PREV":
		case "NEXT":
		case "CHANGE_DATE":
		case "CHANGE_VIEW_TYPE": return uD(e, i.activeRange, r.refetchResourcesOnNavigate, n);
		case "RECEIVE_RESOURCES":
		case "RECEIVE_RESOURCE_ERROR": return pD(e, t.fetchId, t.fetchRange);
		case "REFETCH_RESOURCES": return fD(e, i.activeRange, n);
		default: return e;
	}
}
function lD(e, t, n, r) {
	if (e) {
		let i = aD(e);
		return i = fD(i, n ? t : null, r), i;
	}
	return null;
}
function uD(e, t, n, r) {
	return n && !dD(e) && (!e.fetchRange || !vo(e.fetchRange, t)) ? fD(e, t, r) : e;
}
function dD(e) {
	return !!nD(e.sourceDefId).ignoreRange;
}
function fD(e, t, n) {
	let r = nD(e.sourceDefId), i = Ds();
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
	}), {
		...e,
		isFetching: !0,
		latestFetchId: i
	};
}
function pD(e, t, n) {
	return t === e.latestFetchId ? {
		...e,
		isFetching: !1,
		fetchRange: n
	} : e;
}
function mD(e, t, n, r) {
	if (!e || !t) return {};
	switch (t.type) {
		case "RECEIVE_RESOURCES": return hD(e, t.rawResources, t.fetchId, n, r);
		case "ADD_RESOURCE": return gD(e, t.resourceHash);
		case "REMOVE_RESOURCE": return _D(e, t.resourceId);
		case "SET_RESOURCE_PROP": return vD(e, t.resourceId, t.propName, t.propValue);
		case "SET_RESOURCE_EXTENDED_PROP": return yD(e, t.resourceId, t.propName, t.propValue);
		default: return e;
	}
}
function hD(e, t, n, r, i) {
	if (r.latestFetchId === n) {
		let e = {};
		for (let n of t) IE(n, "", e, i);
		return e;
	}
	return e;
}
function gD(e, t) {
	return {
		...e,
		...t
	};
}
function _D(e, t) {
	let n = { ...e };
	delete n[t];
	for (let e in n) n[e].parentId === t && (n[e] = {
		...n[e],
		parentId: ""
	});
	return n;
}
function vD(e, t, n, r) {
	let i = e[t];
	return i ? {
		...e,
		[t]: {
			...i,
			[n]: r
		}
	} : e;
}
function yD(e, t, n, r) {
	let i = e[t];
	return i ? {
		...e,
		[t]: {
			...i,
			extendedProps: {
				...i.extendedProps,
				[n]: r
			}
		}
	} : e;
}
function bD(e, t) {
	if (!e || !t) return {};
	switch (t.type) {
		case "SET_RESOURCE_ENTITY_EXPANDED": return {
			...e,
			[t.id]: t.isExpanded
		};
		default: return e;
	}
}
function xD(e, t, n) {
	let r = cD(e && e.resourceSource, t, n);
	return {
		resourceSource: r,
		resourceStore: mD(e && e.resourceStore, t, r, n),
		resourceEntityExpansions: bD(e && e.resourceEntityExpansions, t)
	};
}
var SD = {
	resourceId: String,
	resourceIds: F,
	resourceEditable: Boolean
};
function CD(e) {
	return {
		resourceIds: wD(e.resourceIds).concat(e.resourceId ? [e.resourceId] : []),
		resourceEditable: e.resourceEditable
	};
}
function wD(e) {
	return (e || []).map((e) => String(e));
}
function TD(e, t) {
	let n = e.dateSpan.resourceId, r = t.dateSpan.resourceId;
	return n && r ? { resourceId: n } : null;
}
var ED = class extends W_ {
	getKeyInfo(e) {
		return {
			"": {},
			...e.resourceStore
		};
	}
	getKeysForDateSpan(e) {
		return [e.resourceId || ""];
	}
	getKeysForEventDef(e) {
		let t = e.resourceIds;
		return t.length ? t : [""];
	}
};
function DD(e, t) {
	let n = new ED().splitProps({
		...e,
		resourceStore: t.getCurrentData().resourceStore
	});
	for (let e in n) {
		let r = n[e];
		if (e && n[""] && (r = {
			...r,
			eventStore: Rc(n[""].eventStore, r.eventStore),
			eventUiBases: {
				...n[""].eventUiBases,
				...r.eventUiBases
			}
		}), !Mp(r, t, { resourceId: e }, OD.bind(null, e))) return !1;
	}
	return !0;
}
function OD(e, t) {
	return {
		...t,
		constraints: kD(e, t.constraints)
	};
}
function kD(e, t) {
	return t.map((t) => {
		let n = t.defs;
		if (n) for (let t in n) {
			let r = n[t].resourceIds;
			if (r.length && r.indexOf(e) === -1) return !1;
		}
		return t;
	});
}
function AD(e) {
	return e.resourceId ? { resourceId: e.resourceId } : {};
}
var jD = { resources: MD };
function MD(e, t) {
	t.getCurrentData().resourceSource._raw !== e && t.dispatch({
		type: "RESET_RESOURCE_SOURCE",
		resourceSourceInput: e
	});
}
var ND = Ps("id,title");
function PD(e, t) {
	let { emitter: n } = t;
	n.hasHandlers("resourcesSet") && n.trigger("resourcesSet", zE(e, t));
}
var FD = {
	name: "resource",
	premiumReleaseDate: "2026-10-12",
	deps: [jw],
	reducers: [xD],
	isLoadingFuncs: [(e) => e.resourceSource && e.resourceSource.isFetching],
	eventRefiners: SD,
	eventDefMemberAdders: [CD],
	isDraggableTransformers: [qE],
	eventDragMutationMassagers: [HE],
	eventDefMutationAppliers: [UE],
	dateSelectionTransformers: [TD],
	datePointTransforms: [BE],
	dateSpanTransforms: [VE],
	viewPropsTransformers: [KE, JE],
	isPropsValid: DD,
	externalDefTransforms: [AD],
	eventDropTransformers: [GE],
	optionChangeHandlers: jD,
	propSetHandlers: { resourceStore: PD }
};
function ID(e, t, n, r) {
	if (!t) return e;
	let i = RD(LD(n.instances, r), n.defs);
	return Object.assign(i, zD(i, e)), Us(e, (e, t) => i[t]);
}
function LD(e, t) {
	return Us(e, (e) => yo(e.range, t));
}
function RD(e, t) {
	let n = {};
	for (let r in e) {
		let i = e[r];
		for (let e of t[i.defId].resourceIds) n[e] = !0;
	}
	return n;
}
function zD(e, t) {
	let n = {};
	for (let r in e) {
		let e;
		for (; (e = t[r]) && (r = e.parentId, r);) n[r] = !0;
	}
	return n;
}
function BD(e, t, n, r = null) {
	let i = n.map(() => ({})), a = n.map((e) => ({
		start: e.date,
		end: O(e.date, 1)
	}));
	for (let t in e.instances) {
		let o = e.instances[t], { allDay: s, resourceIds: c } = e.defs[o.defId], l = !s && r ? Oc(o.range, r) : o.range;
		for (let e = 0; e < n.length; e += 1) if (yo(l, s ? a[e] : n[e].range)) {
			let t = i[e];
			for (let e of c) t[e] = !0;
		}
	}
	for (let e of i) Object.assign(e, zD(e, t));
	return i;
}
function VD(e, t, n = [], r = 0) {
	let i = HD(e, t), a = [];
	for (let e in i) {
		let o = i[e];
		o.entity.parentId || UD(o, t, n, r, a);
	}
	return a;
}
function HD(e, t) {
	let n = {};
	for (let t in e) {
		let r = e[t];
		n[t] = {
			entity: r,
			resourceFields: KD(r),
			children: []
		};
	}
	for (let r in e) {
		let i = e[r];
		if (i.parentId) {
			let e = n[i.parentId];
			e && GD(n[r], t, e.children);
		}
	}
	return n;
}
function UD(e, t, n, r, i, a = []) {
	if (n.length) {
		let o = n[0], s = $D(a, o.field, e.resourceFields[o.field]), c = WD(e, o, r <= 0, i, s);
		UD(e, t, n.slice(1), r - 1, c.children, s);
	} else GD(e, t, i);
}
function WD(e, t, n, r, i) {
	let a = e.resourceFields[t.field], o, s;
	if (t.order) for (s = 0; s < r.length; s += 1) {
		let e = r[s], n = e.entity, i = Ls(a, n.value) * t.order;
		if (i === 0) {
			o = e;
			break;
		}
		if (i < 0) break;
	}
	else for (s = 0; s < r.length; s += 1) {
		let e = r[s], t = e.entity;
		if (t && a === t.value) {
			o = e;
			break;
		}
	}
	return o || (o = {
		entity: {
			id: eO(i),
			value: a,
			spec: t
		},
		pooledHeight: n,
		children: []
	}, r.splice(s, 0, o)), o;
}
function GD(e, t, n) {
	let r = 0;
	for (; r < n.length && !(Fs(n[r].resourceFields, e.resourceFields, t) > 0); r += 1);
	n.splice(r, 0, e);
}
function KD(e) {
	let t = {
		...e.extendedProps,
		...e.ui,
		...e
	};
	return delete t.ui, delete t.extendedProps, t;
}
function qD(e, t) {
	let n = VD(e, t), r = [];
	return JD(n, r), r;
}
function JD(e, t) {
	for (let n of e) t.push(n.entity), JD(n.children, t);
}
function YD(e) {
	return ZD(e) ? XD(e) : e.id;
}
function XD(e) {
	return e.id || eO($D([], e.spec.field, e.value));
}
function ZD(e) {
	return !!e.spec;
}
function QD(e, t) {
	return XD(e) === XD(t);
}
function $D(e, t, n) {
	return e.concat([[t, n]]);
}
function eO(e) {
	return JSON.stringify(e);
}
//#endregion
//#region node_modules/fullcalendar-scheduler/chunks/6ac4841a.js
var tO = class {
	constructor(e) {
		let t = {}, n = [];
		for (let r = 0; r < e.length; r += 1) {
			let i = e[r].id;
			n.push(i), t[i] = r;
		}
		this.ids = n, this.indicesById = t, this.length = e.length;
	}
}, nO = class {
	constructor(e, t, n, r, i, a) {
		this.dayCols = e, this.dayTableModel = t, this.resources = n, this.groups = r, this.datesAboveResources = i;
		let o = [], s = {}, c = [], l = [], u = 0;
		for (let e = 0; e < r.length; e += 1) for (let t of r[e].cols) {
			let n = o.length;
			o.push(t), s[oO(t.dateI, t.resourceI)] = n, l.push(e), t.resource && (u += 1), c[t.dateI] ?? (c[t.dateI] = n);
		}
		this.resourceIndex = new tO(n), this.colCount = o.length, this.resourceColCount = u, this.cols = o, this.colLookup = s, this.dateFirstCols = c, this.colGroupIndices = l, this.cells = !t || t.rowCount === 1 ? [o] : rO(t, o, a);
	}
	computeCol(e, t) {
		let n = oO(e, this.resources.length ? t : -1);
		return this.colLookup[n] ?? -1;
	}
	computeColRanges(e, t, n) {
		let r = [], i = null, a = -1;
		for (let o = e; o < t; o += 1) {
			let s = this.computeCol(o, n);
			if (s !== -1) {
				let n = this.colGroupIndices[s];
				i && i.end === s && a === n ? (i.end = s + 1, i.isEnd = o === t - 1) : (i = {
					start: s,
					end: s + 1,
					isStart: o === e,
					isEnd: o === t - 1
				}, a = n, r.push(i));
			} else i = null, a = -1;
		}
		return r;
	}
	isHitComboAllowed(e, t, n) {
		return n || e.dateSpan.resourceId === t.dateSpan.resourceId;
	}
};
function rO(e, t, n) {
	let r = [];
	for (let i = 0; i < e.rowCount; i += 1) r.push(t.map((t) => {
		let { date: r, isDisabled: a } = e.cellRows[i][t.dateI], { resource: o } = t;
		return o ? {
			...aO(o, r, n),
			date: r,
			isMajor: t.isMajor,
			isDisabled: a
		} : {
			key: r.toISOString(),
			date: r,
			isMajor: t.isMajor,
			isDisabled: a,
			isInert: !0,
			attrs: { "aria-disabled": !0 }
		};
	}));
	return r;
}
function iO(e, t, n, r, i, a) {
	return n ? {
		...e,
		...aO(n, e.date, a),
		dateI: t,
		resource: n,
		resourceI: r,
		isMajor: i
	} : {
		...e,
		dateI: t,
		isInert: !0,
		attrs: { "aria-disabled": !0 },
		resource: null,
		resourceI: r,
		isMajor: i
	};
}
function aO(e, t, n) {
	return {
		key: e.id + ":" + t.toISOString(),
		renderProps: { resource: new RE(n, e) },
		attrs: { "data-resource-id": e.id },
		className: "",
		dateSpanProps: { resourceId: e.id }
	};
}
function oO(e, t) {
	return e + ":" + t;
}
function sO(e, t, n, r, i = null) {
	let a = t.length > 1, o = [];
	for (let e = 0; e < t.length; e += 1) {
		let s = t[e], c = [];
		for (let t = 0; t < n.length; t += 1) {
			let o = n[t];
			(!i || i[e][o.id]) && c.push(iO(s, e, o, t, a && c.length === 0, r));
		}
		c.length || c.push(iO(s, e, null, -1, a, r)), o.push({
			date: s.date,
			cols: c
		});
	}
	return new nO(t, e, n, o, !0, r);
}
function cO(e, t, n, r, i = null) {
	let a = n.length > 1 && t.length > 1, o = [];
	for (let e = 0; e < n.length; e += 1) {
		let s = n[e], c = [];
		for (let n = 0; n < t.length; n += 1) (!i || i[n][s.id]) && c.push(iO(t[n], n, s, e, a && c.length === 0, r));
		c.length && o.push({
			resource: s,
			cols: c
		});
	}
	return new nO(t, e, n, o, !1, r);
}
function lO(e, t, n) {
	return new nO(t, e, [], [{ cols: t.map((e, t) => iO(e, t, null, -1, e.isMajor, n)) }], !1, n);
}
function uO(e, t, n, r, i, a) {
	if (!n.length) return lO(e, t, a);
	let o = r ? sO(e, t, n, a, i) : cO(e, t, n, a, i);
	return i && !o.resourceColCount ? lO(e, t, a) : o;
}
var dO = class extends W_ {
	getKeyInfo(e) {
		let { resourceDayTableModel: t } = e, n = Ws(t.resourceIndex.indicesById, (e) => t.resources[e]);
		return n[""] = {}, n;
	}
	getKeysForDateSpan(e) {
		return [e.resourceId || ""];
	}
	getKeysForEventDef(e) {
		let t = e.resourceIds;
		return t.length ? t : [""];
	}
}, fO = [], pO = class {
	constructor() {
		this.joinDateSelection = I(this.joinSegs), this.joinBusinessHours = I(this.joinBusinessHourSegs), this.joinFgEvents = I(this.joinSegs), this.joinBgEvents = I(this.joinSegs), this.joinEventDrags = I(this.joinInteractions), this.joinEventResizes = I(this.joinInteractions);
	}
	joinProps(e, t) {
		let n = [], r = [], i = [], a = [], o = [], s = [], c = "", l = t.resourceIndex.ids.concat([""]);
		for (let t of l) {
			let l = e[t];
			n.push(l.dateSelectionSegs), r.push(l.businessHourSegs), i.push(t ? l.fgEventSegs : fO), a.push(l.bgEventSegs), o.push(l.eventDrag), s.push(l.eventResize), c ||= l.eventSelection;
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
		for (let i of t[n]) r.push(...this.transformSeg(i, e, -1));
		return r;
	}
	joinBusinessHourSegs(e, ...t) {
		let n = e.resources.length, r = [];
		for (let i = 0; i < n; i += 1) for (let n of t[i]) r.push(...this.transformSeg(n, e, i));
		for (let i of t[n]) r.push(...this.transformSeg(i, e, -1));
		return r;
	}
	expandSegs(e, t) {
		return this.joinSegs(e, ...e.resources.map(() => fO), t);
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
}, mO = class extends pO {
	transformSeg(e, t, n) {
		let r = e.start, i = e.end;
		return t.computeColRanges(r, i, n).map((t) => ({
			...e,
			...t,
			isStart: e.isStart && t.isStart,
			isEnd: e.isEnd && t.isEnd
		}));
	}
};
function hO(e, t, n, r, i, a, o, s) {
	let { cols: c, groups: l, resources: u } = e;
	if (!u.length) return [mh(c.map((e) => e.date), t, n, r, i, a)];
	if (e.dayCols.length === 1) return [gO(c.map((e) => e.resource), c[0]?.date, n, r, a)];
	if (e.datesAboveResources) {
		let c = l.map((e) => {
			let t = e.cols[0];
			return t.resource ? vO(e.cols.map((e) => e.resource), e.date, n, r, a, 1, e.cols.length) : [{
				key: t.key + ":blank",
				dateMarker: t.date,
				blank: { classNameGenerator: o },
				renderProps: {
					...Vd(t.date, a.dateEnv, n, r),
					isMajor: t.isMajor,
					isNarrow: !1,
					view: a.viewApi,
					...s
				},
				attrs: { "data-date": Go(t.date) },
				colSpan: 1
			}];
		}), u = mh(l.map((e) => e.date), t, n, r, i, a, 1, 1, e.dayCols.length);
		for (let e = 0; e < l.length; e += 1) u.dataConfigs[e].colSpan = l[e].cols.length;
		return [u, {
			isDateRow: !1,
			renderConfig: _O(a),
			dataConfigs: [].concat(...c)
		}];
	}
	{
		let o = l.map((o) => {
			let s = o.resource, c = new RE(a, s), l = c.id;
			return _h(o.cols.map((e) => e.date), t, n, r, i, a, 1, l + ":", { resource: c }, { "data-resource-id": l }, void 0, o.cols.length, e.dayCols.length);
		}), s = l.map((e) => vO([e.resource], e.date, n, r, a, e.cols.length, 1)[0]);
		return [{
			isDateRow: !1,
			renderConfig: _O(a),
			dataConfigs: s
		}, {
			isDateRow: !0,
			renderConfig: hh(i, t, a),
			dataConfigs: [].concat(...o)
		}];
	}
}
function gO(e, t, n, r, i, a, o) {
	return {
		isDateRow: !1,
		renderConfig: _O(i),
		dataConfigs: vO(e, t, n, r, i, a, o)
	};
}
function _O(e) {
	let { options: t } = e;
	return {
		generatorName: "resourceDayHeaderContent",
		customGenerator: t.resourceDayHeaderContent,
		innerClassNameGenerator: t.resourceDayHeaderInnerClass,
		classNameGenerator: t.resourceDayHeaderClass,
		didMount: t.resourceDayHeaderDidMount,
		willUnmount: t.resourceDayHeaderWillUnmount,
		align: t.resourceDayHeaderAlign,
		sticky: t._resourceDayHeaderSticky
	};
}
function vO(e, t, n, r, i, a = 1, o) {
	let s = t ? Vd(t, i.dateEnv, n, r) : {};
	return e.map((e, n) => {
		let r = new RE(i, e), c = r.id;
		return {
			key: (t ? t.toUTCString() + ":" : "") + e.id,
			dateMarker: t,
			renderProps: {
				isDisabled: !1,
				...s,
				resource: r,
				isMajor: o != null && !(n % o),
				isNarrow: !1,
				level: 0,
				text: e.title || c || "",
				view: i.viewApi
			},
			attrs: {
				"data-resource-id": c,
				"data-date": t ? Go(t) : void 0
			},
			colSpan: a,
			className: ""
		};
	});
}
var yO = class extends Wd {
	constructor() {
		super(...arguments), this.filterResourceStore = I(ID), this.flattenResources = I(qD), this.buildDayTableModel = I(h_), this.buildDayCols = I(xO), this.computeHasEventsByDate = I(BD), this.buildResourceTableModel = I(uO), this.createDayHeaderFormatter = I(C_), this.buildResourceRowConfigs = I(hO), this.buildBlankRenderProps = I(bO), this.splitter = new dO(), this.slicers = {}, this.joiner = new mO(), this.isHitComboAllowed = (e, t) => {
			let n = this.dayTableModel.colCount === 1;
			return this.resourceDayTableModel.isHitComboAllowed(e, t, n);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, r = this.filterResourceStore(e.resourceStore, n.filterResourcesWithEvents, e.rawEventStore, e.dateProfile.activeRange), i = n.resourceOrder || ND, a = this.flattenResources(r, i), o = this.dayTableModel = this.buildDayTableModel(e.dateProfile, t.dateProfileGenerator, t.dateEnv), s = this.buildDayCols(o), c = n.filterResourcesWithEvents && o.colCount > 1 && o.rowCount === 1 ? this.computeHasEventsByDate(e.rawEventStore, r, s, n.nextDayThreshold) : null, l = this.resourceDayTableModel = this.buildResourceTableModel(o, s, a, n.datesAboveResources, c, t), u = this.splitter.splitProps({
			resourceDayTableModel: l,
			businessHours: e.businessHours,
			dateSelection: e.dateSelection,
			eventStore: e.eventStore,
			eventUiBases: e.eventUiBases,
			eventSelection: e.eventSelection,
			eventDrag: e.eventDrag,
			eventResize: e.eventResize
		});
		this.slicers = Ws(u, (e, t) => this.slicers[t] || new uh());
		let d = Ws(this.slicers, (r, i) => r.sliceProps(u[i], e.dateProfile, n.nextDayThreshold, t, o)), f = this.joiner.joinProps(d, l), p = o.rowCount === 1, m = this.createDayHeaderFormatter(t.options.dayHeaderFormat, p, l.colCount);
		return Q(Md, {
			unit: "day",
			children: (r, i) => {
				let a = this.buildResourceRowConfigs(l, p, e.dateProfile, i, m, t, n.dayCellClass, this.buildBlankRenderProps(!!n.businessHours));
				return Q(R_, {
					labelId: e.labelId,
					labelStr: e.labelStr,
					dateProfile: e.dateProfile,
					todayRange: i,
					cellRows: l.cells,
					forPrint: e.forPrint,
					isHitComboAllowed: this.isHitComboAllowed,
					className: e.className,
					headerTiers: a,
					fgEventSegs: f.fgEventSegs,
					bgEventSegs: f.bgEventSegs,
					businessHourSegs: f.businessHourSegs,
					dateSelectionSegs: f.dateSelectionSegs,
					eventDrag: f.eventDrag,
					eventResize: f.eventResize,
					eventSelection: f.eventSelection
				});
			}
		});
	}
};
function bO(e) {
	return {
		inPopover: !1,
		hasNavLink: !1,
		text: "",
		textParts: [],
		weekdayText: "",
		dayNumberText: "",
		monthText: "",
		options: { businessHours: e }
	};
}
function xO(e) {
	return e.cellRows[0].map((e) => ({
		...e,
		range: {
			start: e.date,
			end: O(e.date, 1)
		}
	}));
}
var SO = {
	name: "resource-daygrid",
	premiumReleaseDate: "2026-10-12",
	deps: [
		jw,
		FD,
		V_
	],
	initialView: "resourceDayGridDay",
	views: {
		resourceDayGrid: {
			type: "dayGrid",
			component: yO,
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
};
//#endregion
//#region node_modules/@full-ui/headless-grid/index.js
function CO(e) {
	return e * 100 + "%";
}
function wO(e, t = 0) {
	if (e != null) {
		if (typeof e == "string") {
			let n = e.match(/^(.*)(%|px)$/);
			if (n) {
				let e = parseFloat(n[1]);
				if (!isNaN(e)) return n[2] === "%" ? {
					pixels: 0,
					frac: e / 100,
					min: t
				} : {
					pixels: e,
					frac: 0,
					min: t
				};
			}
		} else if (typeof e == "number" && !isNaN(e)) return {
			pixels: e,
			frac: 0,
			min: t
		};
	}
}
function TO(e, t, n) {
	let r = wO(e, n);
	return r ? {
		...r,
		grow: t || 0
	} : {
		pixels: 0,
		frac: 0,
		grow: t || 1,
		min: n
	};
}
function EO(e) {
	for (let t of e) if (t.grow) return;
	for (let t of e) t.grow = 1;
}
function DO(e, t) {
	let n = [], r = 0, i = 0;
	for (let a of e) {
		let e = Math.max(a.pixels + a.frac * t, a.min);
		n.push(e), r += e, i += a.grow;
	}
	if (r < t) {
		let a = t - r;
		for (let t = 0; t < e.length; t++) n[t] += a * (e[t].grow / i);
	}
	return [n, r];
}
function OO({ pixels: e, frac: t }) {
	return t ? e ? `calc(${CO(t)} + ${e}px)` : CO(t) : e;
}
function kO(e, t, n, r, i) {
	let a = [];
	for (let i = 0; i < r; i++) a.push(AO(e[i], t[i], n));
	a.push(AO(e[r], i, n));
	let o = e.length, s = !1;
	for (let t = r + 1; t < o; t++) {
		let n = e[t];
		a.push(n), n.grow && (s = !0);
	}
	if (!s) for (let e = r + 1; e < o; e++) a[e] = Object.assign({}, a[e], { grow: 1 });
	return a;
}
function AO(e, t, n) {
	let { min: r } = e;
	return t = Math.max(r, t), e.pixels ? {
		pixels: t,
		frac: 0,
		grow: 0,
		min: r
	} : {
		pixels: 0,
		frac: t / n,
		grow: 0,
		min: r
	};
}
function jO(e, t, n, r) {
	let i = /* @__PURE__ */ new Map(), [a, o] = MO(e, t, n, i);
	return r != null && r > a && (NO(e, t, i, (r - a) / o), a = r), [i, a];
}
function MO(e, t, n, r) {
	let i = 0, a = 0;
	for (let o of e) {
		let e = t(o.entity), s = n(e) || 0, [c, l] = MO(o.children, t, n, r);
		o.pooledHeight ? (s > c ? NO(o.children, t, r, (s - c) / l) : s = c, i += s) : (i += s, o.children.length && (i += 1 + c)), r.set(e, s), o.pooledHeight === void 0 && a++, a += l;
	}
	return e.length && (i += 1 * (e.length - 1)), [i, a];
}
function NO(e, t, n, r) {
	for (let i of e) {
		if (i.pooledHeight === void 0) {
			let e = t(i.entity);
			n.set(e, n.get(e) + r);
		}
		NO(i.children, t, n, r);
	}
}
function PO(e, t, n, r = 0) {
	let i = /* @__PURE__ */ new Map();
	return FO(e, t, n, i, r), i;
}
function FO(e, t, n, r, i) {
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = t(o.entity);
		r.set(s, i), o.pooledHeight || (i += n.get(s) + 1), i = FO(o.children, t, n, r, i);
	}
	return i;
}
function IO(e, t, n, r, i) {
	for (let a of e) {
		let e = i(a.entity), o = t.get(e), s = n.get(e);
		if (o + s > r) return a.pooledHeight ? IO(a.children, t, n, r, i) : [
			a.entity,
			o,
			s
		];
		if (!a.pooledHeight) {
			let e = IO(a.children, t, n, r, i);
			if (e) return e;
		}
	}
}
//#endregion
//#region node_modules/fullcalendar-scheduler/chunks/33d9ad47.js
function LO(e, t, n, r) {
	let i = [], a = [], o = [], s = [];
	function c(e, t, l, u, d, f, p) {
		let m = [], h = 0, g = 0;
		for (let _ of e) if (_.resourceFields) {
			let e = n[_.entity.id] ?? r, a = {
				rowIndex: t + h++,
				visibleIndex: l + g++,
				entity: _.entity,
				resourceFields: _.resourceFields,
				isExpanded: e,
				hasChildren: !!_.children.length,
				depth: u,
				rowDepth: d,
				indent: f,
				children: []
			};
			p && (s.push(a), i.push(a), m.push(a));
			let [o, v, y] = c(_.children, t + h, l + g, u + 1, d + 1, f + 1, p && e);
			p && e && (a.children = o, g += y), h += v;
		} else if (_.pooledHeight) {
			let e = {
				rowIndex: t + h,
				visibleIndex: l + g,
				rowSpan: 0,
				entity: _.entity,
				pooledHeight: !0,
				children: []
			};
			p && ((o[u] || (o[u] = [])).push(e), m.push(e));
			let [n, r, i] = c(_.children, t + h, l + g, u + 1, d, f, p);
			p && (e.children = n, e.rowSpan = r, g += i), h += r;
		} else {
			let e = n[XD(_.entity)] ?? r, i = {
				rowIndex: t + h++,
				visibleIndex: l + g++,
				entity: _.entity,
				pooledHeight: !1,
				isExpanded: e,
				hasChildren: !!_.children.length,
				depth: u,
				rowDepth: d,
				indent: f,
				children: []
			};
			p && (s.push(i), a.push(i), m.push(i));
			let [o, v, y] = c(_.children, t + h, l + g, u + 1, d + 1, f + 1, p && e);
			p && e && (i.children = o, g += y), h += v;
		}
		return [
			m,
			h,
			g
		];
	}
	let [l, u] = c(e, 0, 0, 0, 0, +!!t, !0);
	return {
		layouts: l,
		flatRowLayouts: s,
		flatResourceRowLayouts: i,
		flatGroupRowLayouts: a,
		flatGroupColLayouts: o,
		totalCnt: u
	};
}
function RO(e, t, n) {
	return `${e}-${t}-${n}`;
}
function zO(e) {
	return e ? "treegrid" : "table";
}
function BO(e) {
	return e.inTreeGrid ? "gridcell" : "cell";
}
function VO(e) {
	return {
		id: e.cellIdPrefix && e.cellRowIndex != null && e.cellColIndex != null ? RO(e.cellIdPrefix, e.cellRowIndex, e.cellColIndex) : void 0,
		"aria-colindex": e.cellColIndex == null ? void 0 : 1 + e.cellColIndex
	};
}
function HO(e) {
	let { cellIdPrefix: t, bodyRows: n, resourceColCnt: r, superHeaderRowSpan: i, hasNesting: a } = e, o = 1 + i, s = Array.from({ length: r }, (e, n) => RO(t, 1 + i, n)), c = RO(t, 1, r);
	return Q("div", {
		role: "presentation",
		style: {
			position: "absolute",
			width: 0,
			height: 0,
			overflow: "hidden"
		},
		children: [
			Q("div", {
				role: "row",
				"aria-rowindex": 1,
				"aria-owns": i ? `${RO(t, 1, 0)} ${c}` : [...s, c].join(" ")
			}),
			!!i && Q("div", {
				role: "row",
				"aria-rowindex": 2,
				"aria-owns": s.join(" ")
			}),
			n.map((e) => {
				let n = e.layout, r = 1 + o + n.rowIndex;
				return Q("div", {
					role: "row",
					"aria-rowindex": r,
					"aria-level": a ? 1 + n.rowDepth : void 0,
					"aria-expanded": ZD(n.entity) || n.hasChildren ? n.isExpanded : void 0,
					"aria-owns": Array.from(e.colIndices).sort((e, t) => e - t).map((e) => RO(t, r, e)).join(" ")
				}, r);
			})
		]
	});
}
function UO(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n = a.get(e.visibleIndex);
		n || (n = {
			layout: e,
			colIndices: /* @__PURE__ */ new Set()
		}, a.set(e.visibleIndex, n)), n.colIndices.add(t);
	};
	for (let n = 0; n < t.length; n += 1) for (let r of t[n]) o(e[r.item.visibleIndex], n);
	for (let e of n) {
		let t = e.item;
		if (ZD(t.entity)) o(t, 0);
		else for (let e = r; e < i; e += 1) o(t, e);
		o(t, i);
	}
	return Array.from(a.values()).sort((e, t) => e.layout.visibleIndex - t.layout.visibleIndex);
}
var WO = class extends L {
	constructor() {
		super(...arguments), this.innerElRef = $C();
	}
	render() {
		let { props: e, context: t } = this, { group: n, forPrint: r } = e, i = n.spec, a = {
			fieldValue: n.value,
			view: t.viewApi
		};
		return Q(z, {
			tag: r ? "td" : "div",
			attrs: {
				...VO(e),
				role: BO(e)
			},
			className: M(!r && j.liquid, j.noMargin, j.noPadding, !r && j.flexCol, j.contentBox, j.borderlessX, j.borderlessTop, !e.borderBottom && j.borderlessBottom),
			style: r ? void 0 : { height: e.height },
			renderProps: a,
			generatorName: "resourceGroupLaneContent",
			customGenerator: i.laneContent,
			classNameGenerator: i.laneClass,
			didMount: i.laneDidMount,
			willUnmount: i.laneWillUnmount,
			children: (e) => Q(e, {
				tag: "div",
				elRef: this.innerElRef,
				className: M(B(i.laneInnerClass, a), j.noShrink, j.noMargin)
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let e = this.innerElRef.current;
		this.disconnectInnerHeight = jd(e, (e) => {
			this._isUnmounting || R(this.props.innerHeightRef, e);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectInnerHeight(), R(this.props.innerHeightRef, null);
	}
}, GO = class extends L {
	constructor() {
		super(...arguments), this.refineRenderProps = Zu(JO), this.buildDateSpanProps = I(KO), this.buildEventRenderProps = I(qO), this.slicer = new ZT(), this.handleEventsHeight = (e) => {
			this._isUnmounting || (this.eventsHeight = e, V(this.handleHeight));
		}, this.handleTopEl = (e) => {
			this.disconnectTopHeight &&= (this.disconnectTopHeight(), void 0), e && (this.disconnectTopHeight = jd(e, (e) => {
				this._isUnmounting || (this.topHeight = e, V(this.handleHeight));
			}));
		}, this.handleBottomEl = (e) => {
			this.disconnectBottomHeight &&= (this.disconnectBottomHeight(), void 0), e && (this.disconnectBottomHeight = jd(e, (e) => {
				this._isUnmounting || (this.bottomHeight = e, V(this.handleHeight));
			}));
		}, this.handleHeight = () => {
			if (this._isUnmounting) return;
			let { topHeight: e, bottomHeight: t, eventsHeight: n } = this;
			e != null && t != null && n != null && R(this.props.heightRef, e + t + n);
		};
	}
	render() {
		let { props: e, context: t } = this, { resource: n } = e, { options: r } = t, i = this.refineRenderProps({
			resource: n,
			context: t,
			eventOverlap: !!r.eventOverlap
		}), a = this.buildEventRenderProps(i.resource), o = this.slicer.sliceProps(e, e.dateProfile, e.tDateProfile.isTimeScale ? null : r.nextDayThreshold, t, e.dateProfile, t.dateProfileGenerator, e.tDateProfile, t.dateEnv);
		return Q("div", {
			role: e.role,
			className: M(e.className, j.flexRow),
			style: {
				top: e.top,
				width: e.width,
				insetInlineStart: e.insetInlineStart ?? e.clipStart
			},
			children: Q(z, {
				tag: "div",
				attrs: {
					...VO(e),
					role: BO(e),
					"data-resource-id": n.id
				},
				className: M(j.liquid, j.noMargin, j.noPadding, j.flexCol, j.contentBox, j.borderlessX, j.borderlessTop, !e.borderBottom && j.borderlessBottom, j.rel),
				style: { height: e.height },
				renderProps: i,
				generatorName: void 0,
				classNameGenerator: r.resourceLaneClass,
				didMount: r.resourceLaneDidMount,
				willUnmount: r.resourceLaneWillUnmount,
				children: () => Q(ew, { children: [
					Q(eE, {
						tDateProfile: e.tDateProfile,
						nowDate: e.nowDate,
						nowMs: e.nowMs,
						todayRange: e.todayRange,
						bgEventSegs: o.bgEventSegs,
						businessHourSegs: o.businessHourSegs,
						dateSelectionSegs: o.dateSelectionSegs,
						eventResizeSegs: o.eventResize ? o.eventResize.segs : null,
						renderProps: a,
						slotWidth: e.slotWidth,
						clipStart: e.clipStart,
						clipEnd: e.clipEnd
					}),
					Q(z, {
						tag: "div",
						elRef: this.handleTopEl,
						className: M(j.noMargin, j.noShrink),
						renderProps: i,
						generatorName: "resourceLaneTopContent",
						customGenerator: r.resourceLaneTopContent,
						classNameGenerator: r.resourceLaneTopClass
					}),
					Q(bE, {
						dateProfile: e.dateProfile,
						tDateProfile: e.tDateProfile,
						nowDate: e.nowDate,
						nowMs: e.nowMs,
						todayRange: e.todayRange,
						fgEventSegs: o.fgEventSegs,
						eventDrag: o.eventDrag,
						eventResize: o.eventResize,
						eventSelection: o.eventSelection,
						dateSpanProps: this.buildDateSpanProps(n.id),
						renderProps: a,
						slotWidth: e.slotWidth,
						clipStart: e.clipStart,
						clipEnd: e.clipEnd,
						heightRef: this.handleEventsHeight
					}),
					Q(z, {
						tag: "div",
						elRef: this.handleBottomEl,
						className: M(j.noMargin, j.noShrink),
						renderProps: i,
						generatorName: "resourceLaneBottomContent",
						customGenerator: r.resourceLaneBottomContent,
						classNameGenerator: r.resourceLaneBottomClass
					})
				] })
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0;
	}
};
function KO(e) {
	return { resourceId: e };
}
function qO(e) {
	return { resource: e };
}
function JO(e) {
	return {
		resource: new RE(e.context, e.resource),
		options: { eventOverlap: e.eventOverlap }
	};
}
var YO = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.rootEl = null, this.startElRef = $C(), this.resizerElRef = $C(), this.handleRootEl = (e) => {
			this.rootEl = e, this.props.elRef && R(this.props.elRef, e);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { options: r } = n, i = this.widthConfig = t.widthOverride || e.initialStartWidthConfig;
		return Q("div", {
			ref: this.handleRootEl,
			className: M(e.className, j.flexRow),
			children: [
				Q("div", {
					className: e.startClassName,
					style: { width: OO(i) },
					ref: this.startElRef,
					children: e.startContent
				}),
				Q("div", {
					className: M(r.resourceColumnDividerClass, j.rel),
					style: { cursor: "col-resize" },
					ref: this.resizerElRef,
					children: Q("div", { className: M(j.hitXSkinny, j.z1) })
				}),
				Q("div", {
					className: M(e.endClassName, j.liquid),
					children: e.endContent
				})
			]
		});
	}
	componentDidMount() {
		let e = this.context.pluginHooks.elementDraggingImpl;
		if (e) {
			let t = this.resizerElRef.current, n = this.resizerDragging = new e(t);
			n.emitter.on("dragstart", () => {
				let e = Ku(t), r = this.rootEl.getBoundingClientRect().width, i = this.startElRef.current.getBoundingClientRect().width, a = this.widthConfig, o;
				n.emitter.on("dragmove", (t) => {
					let n = Math.min(i + t.deltaX * (e ? -1 : 1), r);
					o = AO(a, n, r), this.setState({ widthOverride: o });
				}), n.emitter.on("dragend", () => {
					o && R(this.props.resizedWidthConfigRef, o);
				}), n.setAutoScrollEnabled(!1);
			});
		}
	}
	componentWillUnmount() {
		this.resizerDragging && this.resizerDragging.destroy();
	}
}, XO = class extends L {
	constructor() {
		super(...arguments), this.innerElRef = $C();
	}
	render() {
		let { props: e, context: t } = this, { colSpec: n, forPrint: r } = e, i = {
			fieldValue: e.fieldValue,
			view: t.viewApi
		};
		return Q(z, {
			tag: r ? "td" : "div",
			attrs: r ? { rowSpan: e.rowSpan } : {
				...VO(e),
				role: "rowheader",
				"aria-rowspan": e.rowSpan
			},
			className: M(j.noMargin, j.noPadding, !r && j.flexCol, j.alignStart, !r && j.liquid, r && j.crop, r && t.options.resourceRowClass, j.borderlessTop, j.borderlessEnd, !e.borderStart && j.borderlessStart, !e.borderBottom && j.borderlessBottom),
			renderProps: i,
			generatorName: "resourceCellContent",
			customGenerator: n.cellContent,
			defaultGenerator: ZO,
			classNameGenerator: n.cellClass,
			didMount: n.cellDidMount,
			willUnmount: n.cellWillUnmount,
			children: (e) => Q("div", {
				ref: this.innerElRef,
				className: M(j.noShrink, j.whiteSpaceNoWrap, j.flexRow, !r && j.stickyT),
				children: Q(e, {
					tag: "div",
					className: B(n.cellInnerClass, i)
				})
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.disconnectInnerHeight = jd(this.innerElRef.current, (e) => {
			this._isUnmounting || R(this.props.innerHeightRef, e);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectInnerHeight?.(), R(this.props.innerHeightRef, null);
	}
};
function ZO(e) {
	return e.fieldValue || Q(ew, { children: "\xA0" });
}
var QO = class extends L {
	render() {
		let { props: e, context: t } = this, { options: n } = t;
		return Q("div", {
			role: e.role,
			className: M(n.resourceRowClass, e.className, j.flexRow, j.borderlessX, j.borderlessTop, !e.borderBottom && j.borderlessBottom),
			style: {
				top: e.top,
				height: e.height,
				minWidth: 0,
				width: e.width,
				flexGrow: e.grow
			},
			children: Q(XO, {
				cellIdPrefix: e.cellIdPrefix,
				cellRowIndex: e.cellRowIndex,
				cellColIndex: e.cellColIndex,
				colSpec: e.colSpec,
				fieldValue: e.fieldValue,
				rowSpan: e.rowSpan,
				borderStart: e.borderStart,
				innerHeightRef: e.innerHeightRef
			})
		});
	}
}, $O = class extends L {
	render() {
		let { props: e, context: t } = this;
		return Q("div", {
			className: M(t.options.resourceIndentClass, j.noShrink, j.flexCol, j.alignEnd, e.className),
			style: {
				...e.style,
				width: e.indentWidth == null ? 0 : e.indentWidth * e.level
			},
			children: e.children
		});
	}
}, ek = class extends L {
	render() {
		let { props: e } = this, { options: t } = this.context, n = t.resourceExpanderClass, r = t.resourceExpanderContent, i = { isExpanded: e.isExpanded };
		return Q("span", {
			"aria-hidden": !0,
			className: M(B(n, i), j.flexRow, j.cursorPointer, j.selectNone, j.noMargin, e.className),
			onClick: e.onExpanderClick,
			ref: e.elRef,
			children: r && Q(z, {
				tag: "span",
				style: { display: "contents" },
				attrs: { "aria-hidden": !0 },
				renderProps: i,
				generatorName: void 0,
				customGenerator: r
			})
		});
	}
}, tk = class extends L {
	constructor() {
		super(...arguments), this.innerElRef = $C(), this.onExpanderClick = () => {
			let { props: e } = this;
			this.context.dispatch({
				type: "SET_RESOURCE_ENTITY_EXPANDED",
				id: XD(e.group),
				isExpanded: !e.isExpanded
			});
		};
	}
	render() {
		let { props: e, context: t } = this, { forPrint: n } = e, r = {
			fieldValue: e.group.value,
			view: t.viewApi
		}, i = e.group.spec;
		return Q(z, {
			tag: n ? "td" : "div",
			attrs: n ? { colSpan: e.colSpan } : {
				...VO(e),
				role: "rowheader",
				"aria-colspan": e.colSpan
			},
			className: M(!n && j.liquid, j.noMargin, j.noPadding, !n && j.flexCol, j.alignStart, j.crop, j.contentBox, j.borderlessX, j.borderlessTop, !e.borderBottom && j.borderlessBottom),
			style: n ? void 0 : { height: e.height },
			renderProps: r,
			generatorName: "resourceGroupHeaderContent",
			customGenerator: i.labelContent,
			defaultGenerator: nk,
			classNameGenerator: i.labelClass,
			didMount: i.labelDidMount,
			willUnmount: i.labelWillUnmount,
			children: (t) => Q("div", {
				ref: this.innerElRef,
				className: M(j.noShrink, j.whiteSpaceNoWrap, j.flexRow),
				style: { isolation: "isolate" },
				children: [Q($O, {
					level: 1,
					indentWidth: e.indentWidth,
					className: j.z2,
					children: Q(ek, {
						isExpanded: e.isExpanded,
						onExpanderClick: this.onExpanderClick
					})
				}), Q(t, {
					tag: "div",
					className: M(B(i.labelInnerClass, r), j.z1)
				})]
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let e = this.innerElRef.current;
		this.disconnectInnerHeight = jd(e, (e) => {
			this._isUnmounting || R(this.props.innerHeightRef, e);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectInnerHeight(), R(this.props.innerHeightRef, null);
	}
};
tk.addPropsEquality({ group: QD });
function nk(e) {
	return e.fieldValue || Q(ew, { children: "\xA0" });
}
var rk = class extends L {
	constructor() {
		super(...arguments), this.innerElRef = $C(), this.refineRenderProps = Zu(ak), this.onExpanderClick = (e) => {
			let { props: t } = this;
			t.hasChildren && this.context.dispatch({
				type: "SET_RESOURCE_ENTITY_EXPANDED",
				id: t.resource.id,
				isExpanded: !t.isExpanded
			});
		};
	}
	render() {
		let { props: e, context: t } = this, { colSpec: n, forPrint: r } = e, i = this.refineRenderProps({
			resource: e.resource,
			field: e.field,
			fieldValue: e.fieldValue,
			context: t
		});
		return Q(z, {
			tag: r ? "td" : "div",
			attrs: {
				...VO(e),
				role: n.isMain ? "rowheader" : BO(e),
				"data-resource-id": e.resource.id
			},
			className: M(j.noMargin, j.noPadding, !r && j.flexCol, j.alignStart, r && t.options.resourceRowClass, j.borderlessTop, j.borderlessEnd, !e.borderStart && j.borderlessStart, !e.borderBottom && j.borderlessBottom, j.crop),
			style: r ? void 0 : {
				minWidth: 0,
				width: e.width
			},
			renderProps: i,
			generatorName: "resourceCellContent",
			customGenerator: n.cellContent,
			defaultGenerator: ik,
			classNameGenerator: n.cellClass,
			didMount: n.cellDidMount,
			willUnmount: n.cellWillUnmount,
			children: (t) => Q("div", {
				ref: this.innerElRef,
				className: M(j.noShrink, j.whiteSpaceNoWrap, j.flexRow),
				style: { isolation: "isolate" },
				children: [n.isMain && !!e.indent && Q($O, {
					level: e.indent,
					indentWidth: e.indentWidth,
					className: j.z2,
					children: e.hasChildren && Q(ek, {
						isExpanded: e.isExpanded,
						onExpanderClick: this.onExpanderClick
					})
				}), Q(t, {
					tag: "div",
					className: M(B(n.cellInnerClass, i), j.z1)
				})]
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.disconnectHeight = jd(this.innerElRef.current, (e) => {
			this._isUnmounting || R(this.props.innerHeightRef, e);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectHeight(), R(this.props.innerHeightRef, null);
	}
};
function ik(e) {
	return e.fieldValue || Q(ew, { children: "\xA0" });
}
function ak(e) {
	return {
		resource: new RE(e.context, e.resource),
		field: e.field,
		fieldValue: e.fieldValue,
		view: e.context.viewApi
	};
}
var ok = class extends L {
	constructor() {
		super(...arguments), this.innerHeightRefMap = new H(() => {
			V(this.handleInnerHeights);
		}), this.currentInnerHeight = null, this.handleInnerHeights = () => {
			if (this._isUnmounting) return;
			let e = this.innerHeightRefMap.current, t = null;
			for (let n of e.values()) (t == null || n > t) && (t = n);
			this.currentInnerHeight !== t && (this.currentInnerHeight = t, R(this.props.innerHeightRef, t));
		};
	}
	render() {
		let { props: e, innerHeightRefMap: t } = this, { resource: n, resourceFields: r, colSpecs: i } = e, { options: a } = this.context, o = e.colWidths || [];
		return Q("div", {
			role: e.role,
			className: M(a.resourceRowClass, e.className, j.flexRow, j.borderlessX, j.borderlessTop, !e.borderBottom && j.borderlessBottom),
			style: {
				top: e.top,
				height: e.height
			},
			children: sk(e.colStartIndex, i.length, (a) => {
				let s = i[a], c = s.field ? r[s.field] : n.title || LE(n.id);
				return Q(rk, {
					cellIdPrefix: e.cellIdPrefix,
					cellRowIndex: e.cellRowIndex,
					inTreeGrid: e.inTreeGrid,
					cellColIndex: e.cellIdPrefix ? a : void 0,
					colSpec: s,
					resource: n,
					field: s.field || "title",
					fieldValue: c,
					indent: e.indent,
					hasChildren: e.hasChildren,
					isExpanded: e.isExpanded,
					innerHeightRef: t.createRef(a),
					width: o[a],
					indentWidth: e.indentWidth,
					borderStart: e.borderStart || !!a
				}, a);
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.currentInnerHeight = null;
	}
};
ok.addPropsEquality({ colWidths: oc });
function sk(e, t, n) {
	let r = [];
	for (let i = e; i < t; i++) r.push(n(i));
	return r;
}
var ck = class extends L {
	render() {
		let { props: e } = this, { rowInnerHeightRefMap: t, headerRowSpan: n } = e, r = e.groupCellCnts.length, i = e.colWidths || [];
		return Q("div", {
			className: j.flexRow,
			style: {
				minWidth: e.canvasWidth,
				minHeight: e.canvasHeight
			},
			children: [e.groupColPositions.map((r, a) => Q("div", {
				role: "presentation",
				className: j.rel,
				style: {
					height: 0,
					minWidth: 0,
					width: i[a]
				},
				children: r.map((i, o) => {
					let s = i.item, c = s.entity, l = i.key, u = o < r.length - 1, d = i.size;
					return Q(QO, {
						colSpec: c.spec,
						rowSpan: s.rowSpan,
						fieldValue: c.value,
						className: j.fillX,
						borderStart: !!a,
						borderBottom: u,
						role: "presentation",
						cellIdPrefix: e.cellIdPrefix,
						cellRowIndex: 1 + n + s.rowIndex,
						cellColIndex: a,
						innerHeightRef: t.createRef(l),
						top: i.start,
						height: d != null && u ? d + 1 : d
					}, l);
				})
			}, a)), Q("div", {
				role: "presentation",
				className: j.rel,
				style: {
					height: 0,
					minWidth: 0,
					width: lk(i.slice(r))
				},
				children: [e.groupRowPositions.map((r) => {
					let i = r.item, a = i.entity, o = r.key, s = i.visibleIndex < e.displayedRowCnt - 1;
					return Q("div", {
						role: "presentation",
						className: M(j.fillX, j.flexRow),
						style: { top: r.start },
						children: Q(tk, {
							cellIdPrefix: e.cellIdPrefix,
							cellRowIndex: 1 + n + i.rowIndex,
							cellColIndex: 0,
							group: a,
							isExpanded: i.isExpanded,
							innerHeightRef: t.createRef(o),
							colSpan: e.colSpecs.length,
							borderBottom: s,
							height: r.size,
							indentWidth: e.indentWidth
						})
					}, o);
				}), e.resourceRowPositions.map((a) => {
					let o = a.item, s = o.entity, c = a.size, l = o.visibleIndex < e.displayedRowCnt - 1;
					return Q(ok, {
						resource: s,
						resourceFields: o.resourceFields,
						indent: o.indent,
						hasChildren: o.hasChildren,
						isExpanded: o.isExpanded,
						colStartIndex: r,
						colSpecs: e.colSpecs,
						colWidths: i,
						innerHeightRef: t.createRef(s.id),
						className: j.fillX,
						borderStart: !!r,
						borderBottom: l,
						role: "presentation",
						cellIdPrefix: e.cellIdPrefix,
						inTreeGrid: e.inTreeGrid,
						cellRowIndex: 1 + n + o.rowIndex,
						top: a.start,
						height: c != null && l ? c + 1 : c,
						indentWidth: e.indentWidth
					}, s.id);
				})]
			})]
		});
	}
};
function lk(e) {
	let t = 0;
	for (let n of e) t += n;
	return t;
}
var uk = class extends L {
	constructor() {
		super(...arguments), this.innerElRef = $C();
	}
	render() {
		let { props: e, context: t } = this, { colSpec: n, forPrint: r } = e, i = { view: t.viewApi };
		return Q(z, {
			tag: r ? "th" : "div",
			attrs: {
				...VO(e),
				role: "columnheader"
			},
			className: M(r && t.options.resourceHeaderRowClass, j.noMargin, j.noPadding, !r && j.flexCol, j.borderlessY, j.borderlessEnd, !e.borderStart && j.borderlessStart, j.rel),
			style: r ? void 0 : {
				minWidth: 0,
				width: e.width
			},
			renderProps: i,
			generatorName: "resourceColumnHeaderContent",
			customGenerator: n.headerContent,
			defaultGenerator: n.headerDefault,
			classNameGenerator: n.headerClass,
			didMount: n.headerDidMount,
			willUnmount: n.headerWillUnmount,
			children: (t) => Q(ew, { children: [Q("div", {
				className: M(j.crop, j.flexCol, j.alignStart),
				children: Q("div", {
					ref: this.innerElRef,
					className: M(j.noShrink, j.whiteSpaceNoWrap, j.flexRow),
					children: [this.props.indent && Q($O, {
						level: 1,
						indentWidth: e.indentWidth
					}), Q(t, {
						tag: "div",
						className: B(n.headerInnerClass, i)
					})]
				})
			}), e.resizer && !r && Q("div", {
				ref: e.resizerElRef,
				className: M(B(n.headerResizerClass, i), j.z1, j.cursorColResizer)
			})] })
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let e = this.innerElRef.current;
		this.disconnectInnerHeight = jd(e, (e) => {
			this._isUnmounting || R(this.props.innerHeightRef, e);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectInnerHeight(), R(this.props.innerHeightRef, null);
	}
}, dk = class extends L {
	constructor() {
		super(...arguments), this.resizerElRefMap = new H((e, t) => {
			let { colDraggings: n } = this;
			if (e) {
				let r = this.initColResizing(e, t);
				r && (n[t] = r);
			} else {
				let e = n[t];
				e && (e.destroy(), delete n[t]);
			}
		}), this.innerHeightRefMap = new H(() => {
			V(this.handleInnerHeights);
		}), this.colDraggings = {}, this.handleInnerHeights = () => {
			if (this._isUnmounting) return;
			let { innerHeightRefMap: e } = this, t = 0;
			for (let n of e.current.values()) t = Math.max(t, n);
			this.currentInnerHeight !== t && (this.currentInnerHeight = t, R(this.props.innerHeightRef, t));
		};
	}
	render() {
		let { props: e, innerHeightRefMap: t, resizerElRefMap: n } = this, { colSpecs: r } = e, i = e.colWidths || [];
		return Q(ew, { children: r.map((a, o) => Q(uk, {
			cellIdPrefix: e.cellIdPrefix,
			cellRowIndex: e.rowIndex == null ? void 0 : 1 + e.rowIndex,
			cellColIndex: e.cellIdPrefix ? o : void 0,
			width: i[o],
			colSpec: a,
			resizer: o < r.length - 1,
			indent: a.isMain && e.indent,
			resizerElRef: n.createRef(o),
			innerHeightRef: t.createRef(o),
			borderStart: !!o,
			indentWidth: e.indentWidth,
			forPrint: e.forPrint
		}, o)) });
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.currentInnerHeight = void 0, R(this.props.innerHeightRef, null);
	}
	initColResizing(e, t) {
		let { pluginHooks: n } = this.context, r = n.elementDraggingImpl;
		if (r) {
			let n = new r(e);
			return n.emitter.on("dragstart", () => {
				let r = Ku(e), i = this.props.colWidths[t];
				n.emitter.on("dragmove", (e) => {
					this.props.onColResize && this.props.onColResize(t, i + e.deltaX * (r ? -1 : 1));
				}), n.setAutoScrollEnabled(!1);
			}), n;
		}
		return null;
	}
}, fk = class extends L {
	constructor() {
		super(...arguments), this.innerElRef = $C();
	}
	render() {
		let { props: e, context: t } = this, { renderHooks: n, forPrint: r } = e, i = { view: t.viewApi }, { options: a } = t;
		return Q(z, {
			tag: r ? "th" : "div",
			attrs: {
				...VO(this.props),
				role: "columnheader",
				"aria-colspan": this.props.colSpan,
				colSpan: r ? e.colSpan : void 0
			},
			className: M(r && a.resourceHeaderRowClass, !r && j.liquid, j.noMargin, j.noPadding, !r && j.flexCol, j.alignStart, j.borderlessX, j.borderlessTop, !r && j.borderlessBottom, !r && j.crop),
			renderProps: i,
			generatorName: "resourceColumnHeaderContent",
			customGenerator: n.headerContent,
			defaultGenerator: n.headerDefault,
			classNameGenerator: n.headerClass,
			didMount: n.headerDidMount,
			willUnmount: n.headerWillUnmount,
			children: (e) => Q("div", {
				ref: this.innerElRef,
				className: M(j.noShrink, j.whiteSpaceNoWrap, j.flexRow),
				children: [this.props.indent && Q($O, {
					level: 1,
					indentWidth: this.props.indentWidth
				}), Q(e, {
					tag: "div",
					className: B(n.headerInnerClass, i)
				})]
			})
		});
	}
	componentDidMount() {
		this._isUnmounting = !1;
		let e = this.innerElRef.current;
		this.disconnectInnerHeight = jd(e, (e) => {
			this._isUnmounting || R(this.props.innerHeightRef, e);
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectInnerHeight(), R(this.props.innerHeightRef, null);
	}
}, pk = class {
	constructor(e, t, n, r, i = 1) {
		this.getItemKey = e, this.getItemStart = t, this.getItemSize = n, this.requestRerender = r, this.overscan = i, this.viewportSize = 0, this.scroll = 0, this.items = [];
	}
	computePositions(e, t, n) {
		return t ? (this.items = [], this.itemPositions = void 0, this.computeAllPositions(e)) : (this.items = e, n !== void 0 && (this.scroll = n), this.viewportSize ? this.itemPositions = this.computePositionsInRange(e) : []);
	}
	handleViewportSize(e) {
		e !== this.viewportSize && (this.viewportSize = e, this._handleViewportChange());
	}
	handleScroll(e) {
		e !== this.scroll && (this.scroll = e, this._handleViewportChange());
	}
	_handleViewportChange() {
		if (this.itemPositions) {
			let e = this.computePositionsInRange(this.items);
			(e.length !== this.itemPositions.length || e.length && e[0].index !== this.itemPositions[0].index) && this.requestRerender();
		}
	}
	computePositionsInRange(e) {
		let { scroll: t, viewportSize: n, getItemKey: r, getItemStart: i, getItemSize: a, overscan: o } = this, s = e.length, c = [], l = 0, u = 0;
		for (; l < s;) {
			let n = e[l], o = r(n), s = i ? i(o, l, n) : u, c = a(o, l, n);
			if (s + c > t) break;
			l++, u += c;
		}
		let d = Math.max(l - o, 0);
		for (; l > d;) {
			let t = e[l - 1], n = a(r(t), l - 1, t);
			l--, u -= n;
		}
		for (; l < s;) {
			let o = e[l], s = r(o), d = i ? i(s, l, o) : u, f = a(s, l, o);
			if (d >= t + n) break;
			c.push({
				item: o,
				key: s,
				index: l,
				start: d,
				size: f
			}), l++, u += f;
		}
		let f = Math.min(l + o, s);
		for (; l < f;) {
			let t = e[l], n = r(t), o = i ? i(n, l, t) : u, s = a(n, l, t);
			c.push({
				item: t,
				key: n,
				index: l,
				start: o,
				size: s
			}), l++, u += s;
		}
		return c;
	}
	computeAllPositions(e) {
		let { getItemKey: t, getItemStart: n, getItemSize: r } = this, i = 0;
		return e.map((e, a) => {
			let o = t(e), s = n ? n(o, a, e) : i, c = r(o, a, e);
			return i += c, {
				item: e,
				key: o,
				index: a,
				start: s,
				size: c
			};
		});
	}
};
function mk(e) {
	let t = e.length;
	if (t) return [
		e[0].start,
		e[t - 1].start + e[t - 1].size,
		e[0].index
	];
}
function hk(e, t, n, r) {
	let i = (n ? [!0] : []).concat(!1), a = 0;
	for (let t of i) {
		let n = e.get(t);
		if (n == null) return;
		a += n;
	}
	let o = 0;
	for (let e = 0; e < r; e += 1) {
		let n = t.get(e);
		if (n == null) return;
		o += n;
	}
	return Math.max(a + +!!n, o + 1 * (r - 1));
}
var gk = 40, _k = class extends Wd {
	constructor() {
		super(...arguments), this.state = {}, this.buildResourceLayouts = I(LO), this.scrollSlack = 0, this.queuedEntityScroll = !1, this.handleBodyRowHeightChange = (e, t, n) => {
			if (!this._isUnmounting) {
				if (this.isScrolling) {
					if (e != null) {
						let r = (n ?? gk) - e;
						if (r) {
							let e = this.bodyTops.get(t);
							e != null && e < this.bodyScroller.y && (ld(this.context.options) || (this.scrollSlack += r));
						}
					}
				} else this.queuedEntityScroll = !0;
				V(this.boundForceUpdate);
			}
		}, this.handleHeaderRowHeightChange = () => {
			this._isUnmounting || V(this.boundForceUpdate);
		}, this.boundForceUpdate = () => {
			this._isUnmounting || this.forceUpdate();
		}, this.spreadsheetHeaderScrollerRef = $C(), this.spreadsheetBodyScrollerRef = $C(), this.spreadsheetFooterScrollerRef = $C(), this.timeHeaderScrollerRef = $C(), this.timeBodyScrollerRef = $C(), this.timeFooterScrollerRef = $C(), this.headerRowInnerWidthMap = new H(() => {
			V(this.handleSlotInnerWidths);
		}), this.timelineHeaderRowInnerHeightMap = new H(this.handleHeaderRowHeightChange), this.dataGridHeaderRowInnerHeightMap = new H(this.handleHeaderRowHeightChange), this.dataGridEntityInnerHeightMap = new H(this.handleBodyRowHeightChange, !0), this.timeEntityInnerHeightMap = new H(this.handleBodyRowHeightChange, !0), this.scroll = {}, this.getEntityTop = (e) => this.bodyTops.get(e), this.getEntityHeight = (e) => this.bodyHeights.get(e), this.rowVirtualizer = new pk((e) => YD(e.entity), this.getEntityTop, this.getEntityHeight, this.boundForceUpdate), this.groupColVirtualizers = [], this.slotVirtualizer = new pk((e) => e, (e, t) => t * (this.props.slotWidth ?? 50), () => this.props.slotWidth ?? 50, this.boundForceUpdate, 3), this.timeHeaderVirtualizers = [], this.handleSpreadsheetClientWidth = (e) => {
			this._isUnmounting || R(this.props.spreadsheetClientWidthRef, e);
		}, this.handleSpreadsheetBottomScrollbarWidth = (e) => {
			this.setState({ spreadsheetBottomScrollbarWidth: e });
		}, this.handleTimeTotalWidth = (e) => {
			this._isUnmounting || this.setState({ timeTotalWidth: e });
		}, this.handleTimeClientWidth = (e) => {
			if (!this._isUnmounting) {
				R(this.props.timeClientWidthRef, e), this.setState({ timeClientWidth: e }), this.slotVirtualizer.handleViewportSize(e);
				for (let t of this.timeHeaderVirtualizers) t.handleViewportSize(e);
			}
		}, this.handleTimeClientHeight = (e) => {
			this._isUnmounting || (this.setState({ timeClientHeight: e }), ld(this.context.options) || this.setVirtualizerViewportSize(e));
		}, this.handleTimeBottomScrollbarWidth = (e) => {
			this._isUnmounting || this.setState({ timeBottomScrollbarWidth: e });
		}, this.handleSlotInnerWidths = () => {
			if (this._isUnmounting) return;
			let e = this.headerRowInnerWidthMap.current.get(this.props.tDateProfile.cellRows.length - 1);
			e != null && e !== this.slotInnerWidth && (this.slotInnerWidth = e, R(this.props.slotInnerWidthRef, e));
		}, this.updateVirtualizerScroll = ww(() => {
			let e = this.currentEntityScroll;
			this.rowVirtualizer.handleScroll(e);
			for (let t of this.groupColVirtualizers) t.handleScroll(e);
		}, 10)[0], this.isTrackingWindowScroll = !1, this.bodyOffset = 0, this.lastOffsetQuery = 0, this.handleWindowScroll = () => {
			let e = window.scrollY, t = Date.now();
			t - this.lastOffsetQuery > 200 && (this.lastOffsetQuery = t, this.bodyOffset = this.bodyEl.getBoundingClientRect().top + e), this.handleAnyEntityScroll(e - this.bodyOffset);
		}, this.handleTimeScrollRequest = (e) => {
			this.scroll.time = e, this.applyTimeScroll();
		}, this.handleTimeScroll = (e, t) => {
			this.scroll.x = t, this._handleTimeScroll();
		}, this._handleTimeScroll = ww(() => {
			this.scroll.time = void 0;
			let e = this.scroll.x;
			this.slotVirtualizer.handleScroll(e);
			for (let t of this.timeHeaderVirtualizers) t.handleScroll(e);
		}, 10)[0], this.handleTimeScrollEnd = () => {
			R(this.props.scrollRef, this.scroll);
		}, this.isScrolling = !1, this.handleResourceScrollRequest = (e) => {
			this.scroll.entityId = e, this.scroll.fromBottom = void 0, this.applyEntityScroll() || (this.queuedEntityScroll = !0);
		}, this.handleEntityScrollStart = () => {
			this.isScrolling = !0, this.scroll.entityId = void 0, this.scroll.fromBottom = void 0;
		}, this.handleEntityScroll = (e, t) => {
			ld(this.context.options) || (this.handleAnyEntityScroll(t), t < this.scrollSlack && (this.scrollSlack = 0, this.forceUpdate(() => {
				this.bodyScroller.scrollTo({ y: 0 });
			})));
		}, this.handleEntityScrollEnd = () => {
			if (this.isScrolling = !1, !this.isTrackingWindowScroll) {
				let { bodyLayouts: e, bodyTops: t, bodyHeights: n, scroll: r } = this, i = this.bodyScroller.y;
				if (!i) r.entityId = void 0, r.fromBottom = void 0;
				else {
					let a = IO(e, t, n, i, YD);
					if (a) {
						let [e, t, n] = a;
						r.entityId = YD(e), r.fromBottom = t + n - i;
					}
				}
				let { scrollSlack: a } = this;
				a && (this.scrollSlack = 0, this.forceUpdate(() => {
					this.bodyScroller.scrollTo({ y: i - a });
				}));
			}
		}, this.handleBodyEl = (e) => {
			this.bodyEl = e, e ? this.context.registerInteractiveComponent(this, { el: e }) : this.context.unregisterInteractiveComponent(this);
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { dateProfile: r, hasNesting: i } = e, { options: a, viewSpec: o } = n, { borderlessX: s, borderlessTop: c, borderlessBottom: l } = Vs(a), { spreadsheetBottomScrollbarWidth: u, timeTotalWidth: d, timeClientWidth: f, timeClientHeight: p, timeBottomScrollbarWidth: m } = t, { tDateProfile: h } = e, { cellRows: g } = h, _ = !ld(a), v = ud(a), y = dd(a), { colSpecs: b, groupColCnt: x, superHeaderRendering: S } = e, { resourceHierarchy: C } = e, w = +!!S, T = w + 1, { layouts: ee, flatRowLayouts: E, flatGroupColLayouts: te, totalCnt: ne } = this.buildResourceLayouts(C, i, e.resourceEntityExpansions, a.resourcesInitiallyExpanded);
		this.bodyLayouts = ee;
		let re = this.groupColVirtualizers, ie = re.length, ae = te.length;
		if (ae > ie) for (let e = ie; e < ae; e++) re[e] = new pk((e) => XD(e.entity), this.getEntityTop, this.getEntityHeight, this.boundForceUpdate);
		else ae < ie && (re = re.slice(0, ae));
		this.groupColVirtualizers = re;
		let oe = this.timeHeaderVirtualizers;
		if (ie = oe.length, ae = g.length, ae > ie) for (let e = ie; e < ae; e++) oe[e] = new pk((e) => e.key, void 0, (e, t, n) => n.colspan * (this.props.slotWidth ?? 50), this.boundForceUpdate), oe[e].viewportSize = oe[0].viewportSize, oe[e].scroll = oe[0].scroll;
		this.timeHeaderVirtualizers = oe;
		let se = E.length, ce = hk(this.dataGridHeaderRowInnerHeightMap.current, this.timelineHeaderRowInnerHeightMap.current, !!S, h.cellRows.length), le = d != null && f != null ? d - f : void 0, [ue, de] = jO(ee, YD, (e) => {
			let t = this.dataGridEntityInnerHeightMap.current.get(e) ?? gk, n = this.timeEntityInnerHeightMap.current.get(e) || 0;
			return Math.max(t, n);
		}, _ && a.expandRows ? p : void 0);
		this.bodyHeights = ue;
		let fe = PO(ee, YD, ue, this.scrollSlack);
		this.bodyTops = fe;
		let pe = !a.virtualization, me = this.computeEntityScroll(), he = this.rowVirtualizer.computePositions(E, pe, me), ge = [], _e = [];
		for (let e of he) "resourceFields" in e.item ? _e.push(e) : ge.push(e);
		let ve = this.groupColVirtualizers.map((e, t) => e.computePositions(te[t], pe, me)), ye = `${n.baseId}rt`, be = UO(E, ve, he, x, b.length), xe = mk(he), Se = xe?.[0] ?? 0, D = xe?.[1] ?? 0, Ce;
		Ce = _ ? p == null ? void 0 : Math.max(D, p) - Se : D - Se, this.maxHScroll = f == null ? void 0 : Math.max(0, h.slotCnt * (e.slotWidth ?? 50) - f);
		let we = this.computeTimeScroll(), Te = this.slotVirtualizer.computePositions(h.slotKeys, pe, we), Ee = mk(Te), { timeCanvasWidth: De } = e, Oe = e.slotWidth ?? 50, { spreadsheetColWidths: ke, spreadsheetCanvasWidth: Ae } = e, { splitProps: je, bgSlicedProps: Me } = e, { hasResourceBusinessHours: Ne, fallbackBusinessHours: Pe } = e, Fe = a.nowIndicator && xo(e.dateProfile.currentRange, e.nowDate), Ie = Math.max(0, (m || 0) - (u || 0)), Le = Math.max(0, (u || 0) - (m || 0)), Re = this.maxVScroll = _ && p != null ? Math.max(0, de - p) : 0, ze = !a.expandRows && !Re, Be = ze || !!Ie, Ve = ze || !!Le;
		return Q(Hd, {
			viewSpec: o,
			attrs: {
				role: zO(i),
				"aria-rowcount": T + ne,
				"aria-colcount": b.length + 1,
				"aria-label": e.labelStr,
				"aria-labelledby": e.labelId
			},
			className: M(e.className, B(a.tableClass, {
				borderlessX: s,
				borderlessTop: c,
				borderlessBottom: l,
				multiMonthColumns: 0
			}), j.flexCol),
			children: [Q(HO, {
				cellIdPrefix: ye,
				bodyRows: be,
				resourceColCnt: b.length,
				superHeaderRowSpan: w,
				hasNesting: i
			}), Q(YO, {
				initialStartWidthConfig: e.initialSpreadsheetWidthConfig,
				resizedWidthConfigRef: e.spreadsheetResizedWidthConfigRef,
				className: _ ? j.liquid : "",
				startClassName: M(j.flexCol, j.isolate),
				startContent: Q(ew, { children: [
					Q("div", {
						role: "presentation",
						className: M(B(a.tableHeaderClass, {
							isSticky: v,
							borderlessX: s,
							borderlessTop: c,
							borderlessBottom: l,
							multiMonthColumns: 0
						}), j.flexCol, v && j.tableHeaderSticky, j.z1),
						children: [Q("div", {
							className: M(j.flexCol, j.contentBox),
							style: { height: ce },
							children: [!!S && Q("div", {
								role: "presentation",
								className: M(a.resourceHeaderRowClass, j.flexRow, j.grow, j.borderlessX, j.borderlessTop),
								children: Q(fk, {
									cellIdPrefix: ye,
									cellRowIndex: 1,
									cellColIndex: 0,
									renderHooks: S,
									indent: i && !x,
									innerHeightRef: this.dataGridHeaderRowInnerHeightMap.createRef(!0),
									colSpan: b.length,
									indentWidth: e.indentWidth
								})
							}), Q(qd, {
								horizontal: !0,
								hideScrollbars: !0,
								className: M(j.flexCol, j.grow),
								ref: this.spreadsheetHeaderScrollerRef,
								children: Q("div", {
									className: M(j.flexCol, j.grow),
									style: { minWidth: Ae },
									children: Q("div", {
										role: "presentation",
										className: M(a.resourceHeaderRowClass, j.flexRow, j.grow, j.borderless),
										children: Q(dk, {
											colSpecs: b,
											colWidths: ke,
											indent: i,
											indentWidth: e.indentWidth,
											rowIndex: w,
											cellIdPrefix: ye,
											innerHeightRef: this.dataGridHeaderRowInnerHeightMap.createRef(!1),
											onColResize: e.onColResize
										})
									})
								})
							})]
						}), Q("div", { className: B(a.slotHeaderDividerClass, {
							inTableHeader: !0,
							options: { dayMinWidth: a.dayMinWidth }
						}) })]
					}),
					Q(qd, {
						vertical: _,
						horizontal: !0,
						hideScrollbars: !0,
						className: M(B(a.tableBodyClass, {
							borderlessX: s,
							borderlessTop: c,
							borderlessBottom: l,
							multiMonthColumns: 0
						}), j.flexCol, j.rel, _ && j.liquid, j.z0),
						ref: this.spreadsheetBodyScrollerRef,
						clientWidthRef: this.handleSpreadsheetClientWidth,
						children: [Q(ck, {
							cellIdPrefix: ye,
							inTreeGrid: i,
							groupRowPositions: ge,
							resourceRowPositions: _e,
							groupColPositions: ve,
							displayedRowCnt: se,
							groupCellCnts: te.map((e) => e.length),
							colWidths: ke,
							colSpecs: b,
							rowInnerHeightRefMap: this.dataGridEntityInnerHeightMap,
							headerRowSpan: T,
							indentWidth: e.indentWidth,
							canvasWidth: Ae,
							canvasHeight: de
						}), Be && Q("div", {
							className: M(B(a.fillerClass, { inTableHeader: !1 }), j.borderlessX, j.borderlessBottom),
							style: { minHeight: Ie }
						})]
					}),
					Q(I_, {
						isSticky: y,
						canvasWidth: Ae,
						scrollerRef: this.spreadsheetFooterScrollerRef,
						scrollbarWidthRef: this.handleSpreadsheetBottomScrollbarWidth
					})
				] }),
				endClassName: M(j.flexCol, j.isolate),
				endContent: Q(ew, { children: [
					Q("div", {
						className: M(B(a.tableHeaderClass, {
							isSticky: v,
							borderlessX: s,
							borderlessTop: c,
							borderlessBottom: l,
							multiMonthColumns: 0
						}), j.flexCol, v && j.tableHeaderSticky, j.z1),
						children: [Q(qd, {
							ref: this.timeHeaderScrollerRef,
							horizontal: !0,
							hideScrollbars: !0,
							className: M(j.flexRow, j.contentBox),
							style: { height: ce },
							children: [
								Q("div", {
									role: "presentation",
									children: Q("div", {
										...VO({
											cellIdPrefix: ye,
											cellRowIndex: 1,
											cellColIndex: b.length
										}),
										role: "columnheader",
										"aria-rowspan": T,
										className: j.srOnly,
										children: a.eventsHint
									})
								}),
								Q("div", {
									"aria-hidden": !0,
									className: M(j.rel, j.flexCol, De == null && j.liquid, e.slotLiquid && j.crop),
									style: { minWidth: De },
									children: [g.map((t, n) => {
										let r = g.length - n - 1, i = oe[n].computePositions(t, pe, we), a = mk(i);
										return a && oe[n].computePositions(t, pe, we), Q(rE, {
											className: M(j.rel, j.grow),
											dateProfile: e.dateProfile,
											tDateProfile: h,
											nowDate: e.nowDate,
											nowMs: e.nowMs,
											todayRange: e.todayRange,
											rowLevel: r,
											cells: t,
											slotWidth: Oe,
											innerWidthRef: this.headerRowInnerWidthMap.createRef(n),
											innerHeighRef: this.timelineHeaderRowInnerHeightMap.createRef(n),
											insetInlineStart: a && a[0],
											width: a ? a[1] - a[0] : void 0,
											cellStartIndex: a && a[2],
											cellCount: i.length
										}, n);
									}), Fe && Q(xE, {
										tDateProfile: h,
										nowMs: e.nowMs,
										slotWidth: Oe
									})]
								}),
								!!le && Q("div", {
									className: M(B(a.fillerClass, { inTableHeader: !0 }), j.borderlessY, j.borderlessEnd),
									style: { minWidth: le }
								})
							]
						}), Q("div", { className: B(a.slotHeaderDividerClass, {
							inTableHeader: !1,
							options: { dayMinWidth: a.dayMinWidth }
						}) })]
					}),
					Q(qd, {
						vertical: _ && de != null && p != null && de > p,
						horizontal: !0,
						hideScrollbars: y,
						className: M(B(a.tableBodyClass, {
							borderlessX: s,
							borderlessTop: c,
							borderlessBottom: l,
							multiMonthColumns: 0
						}), j.flexCol, j.rel, _ && j.liquid, j.z0),
						ref: this.timeBodyScrollerRef,
						clientWidthRef: this.handleTimeClientWidth,
						clientHeightRef: _ ? this.handleTimeClientHeight : void 0,
						bottomScrollbarWidthRef: _ ? this.handleTimeBottomScrollbarWidth : void 0,
						children: Q("div", {
							className: M(j.rel, j.grow, j.flexCol, e.slotLiquid && j.crop),
							style: {
								minWidth: De,
								minHeight: de
							},
							ref: this.handleBodyEl,
							children: [
								Q("div", {
									className: j.abs,
									style: {
										top: Se,
										height: Ce,
										bottom: Ce == null ? 0 : void 0,
										insetInlineStart: Ee?.[0]
									},
									children: [
										Q(vE, {
											dateProfile: r,
											tDateProfile: h,
											nowDate: e.nowDate,
											nowMs: e.nowMs,
											todayRange: e.todayRange,
											slatStartIndex: Ee?.[2],
											slatCount: Te.length,
											slotWidth: Oe
										}),
										Q(eE, {
											tDateProfile: h,
											nowDate: e.nowDate,
											nowMs: e.nowMs,
											todayRange: e.todayRange,
											bgEventSegs: Me.bgEventSegs,
											businessHourSegs: Ne ? null : Me.businessHourSegs,
											dateSelectionSegs: Me.dateSelectionSegs,
											eventResizeSegs: Me.eventResize ? Me.eventResize.segs : null,
											slotWidth: e.slotWidth,
											clipStart: Ee?.[0],
											clipEnd: Ee?.[1]
										}),
										Fe && Q(SE, {
											tDateProfile: h,
											nowMs: e.nowMs,
											slotWidth: Oe,
											clipStart: Ee?.[0]
										})
									]
								}),
								Q("div", {
									role: "presentation",
									className: j.abs,
									style: {
										top: 0,
										insetInlineStart: Ee?.[0],
										width: Ee ? Ee[1] - Ee[0] : void 0
									},
									children: [ge.map((e) => {
										let t = e.item, n = t.entity, r = e.key;
										return Q("div", {
											role: "presentation",
											className: M(j.fillX, j.flexRow),
											style: { top: e.start },
											children: Q(WO, {
												cellIdPrefix: ye,
												inTreeGrid: i,
												cellRowIndex: 1 + T + t.rowIndex,
												cellColIndex: b.length,
												group: n,
												borderBottom: t.visibleIndex < se - 1,
												innerHeightRef: this.timeEntityInnerHeightMap.createRef(r),
												height: e.size
											})
										}, r);
									}), _e.map((t) => {
										let n = t.item, a = n.entity;
										return ZC(GO, {
											...je[a.id],
											key: a.id,
											role: "presentation",
											cellIdPrefix: ye,
											inTreeGrid: i,
											cellRowIndex: 1 + T + n.rowIndex,
											cellColIndex: b.length,
											className: j.fillX,
											resource: a,
											dateProfile: r,
											tDateProfile: h,
											nowDate: e.nowDate,
											nowMs: e.nowMs,
											todayRange: e.todayRange,
											businessHours: a.businessHours || Pe,
											borderBottom: n.visibleIndex < se - 1,
											heightRef: this.timeEntityInnerHeightMap.createRef(a.id),
											slotWidth: e.slotWidth,
											top: t.start,
											height: t.size,
											clipStart: Ee?.[0],
											clipEnd: Ee?.[1]
										});
									})]
								}),
								Ve && Q("div", {
									className: M(B(a.fillerClass, { inTableHeader: !1 }), j.borderlessX, j.borderlessBottom, j.fillX),
									style: {
										top: D,
										minHeight: Le
									}
								})
							]
						})
					}),
					!!y && Q(I_, {
						isSticky: !0,
						canvasWidth: De,
						scrollbarWidthRef: this.handleTimeBottomScrollbarWidth,
						scrollerRef: this.timeFooterScrollerRef
					}),
					Q(vh, { widthRef: this.handleTimeTotalWidth })
				] })
			})]
		});
	}
	componentDidMount() {
		let { props: e, context: t } = this;
		this._isUnmounting = !1, this.timeScroller = new Mw(!0), this.bodyScroller = new Mw(), this.spreadsheetScroller = new Mw(!0), this.updateScrollersSyncers(), this.updateWindowScrolling(), e.initialScroll ? (this.scroll = { ...e.initialScroll }, this.applyEntityScroll(), this.applyTimeScroll()) : this.resetTimeScroll(), this.timeScroller.addScrollListener(this.handleTimeScroll), this.timeScroller.addScrollEndListener(this.handleTimeScrollEnd), this.bodyScroller.addScrollStartListener(this.handleEntityScrollStart), this.bodyScroller.addScrollListener(this.handleEntityScroll), this.bodyScroller.addScrollEndListener(this.handleEntityScrollEnd), t.emitter.on("_timeScrollRequest", this.handleTimeScrollRequest), t.emitter.on("_resourceScrollRequest", this.handleResourceScrollRequest);
	}
	componentDidUpdate(e, t) {
		let { props: n, state: r } = this, { options: i } = this.context;
		this.updateScrollersSyncers(), this.updateWindowScrolling();
		let a = e.dateProfile !== n.dateProfile, o = e.slotWidth !== n.slotWidth, s = e.timeCanvasWidth !== n.timeCanvasWidth, c = t.timeClientWidth !== r.timeClientWidth;
		(a || o || s || c) && (a && i.scrollTimeReset ? this.resetTimeScroll() : this.applyTimeScroll()), this.queuedEntityScroll && (this.queuedEntityScroll = !1, this.applyEntityScroll());
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.slotInnerWidth = void 0, this.timeScroller.destroy(), this.bodyScroller.destroy(), this.spreadsheetScroller.destroy(), this.destroyWindowScrolling(), this.bodyScroller.removeScrollEndListener(this.handleEntityScrollEnd), this.bodyScroller.removeScrollListener(this.handleEntityScroll), this.context.emitter.off("_timeScrollRequest", this.handleTimeScrollRequest), this.context.emitter.off("_resourceScrollRequest", this.handleResourceScrollRequest);
	}
	setVirtualizerViewportSize(e) {
		this.rowVirtualizer.handleViewportSize(e);
		for (let t of this.groupColVirtualizers) t.handleViewportSize(e);
	}
	handleAnyEntityScroll(e) {
		this.currentEntityScroll = e, this.updateVirtualizerScroll();
	}
	updateWindowScrolling() {
		ld(this.context.options) ? this.isTrackingWindowScroll || (this.isTrackingWindowScroll = !0, this.setVirtualizerViewportSize(window.innerHeight), [this.handleWindowResize, this.cancelWindowResize] = ww(() => {
			this.setVirtualizerViewportSize(window.innerHeight);
		}, 200), window.addEventListener("resize", this.handleWindowResize), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 })) : this.destroyWindowScrolling();
	}
	destroyWindowScrolling() {
		this.isTrackingWindowScroll && (this.isTrackingWindowScroll = !1, this.cancelWindowResize(), window.removeEventListener("resize", this.handleWindowResize), window.removeEventListener("scroll", this.handleWindowScroll, { passive: !0 }));
	}
	updateScrollersSyncers() {
		this.timeScroller.handleChildren([
			this.timeHeaderScrollerRef.current,
			this.timeBodyScrollerRef.current,
			this.timeFooterScrollerRef.current
		]), this.bodyScroller.handleChildren([this.spreadsheetBodyScrollerRef.current, this.timeBodyScrollerRef.current]), this.spreadsheetScroller.handleChildren([
			this.spreadsheetHeaderScrollerRef.current,
			this.spreadsheetBodyScrollerRef.current,
			this.spreadsheetFooterScrollerRef.current
		]);
	}
	resetTimeScroll() {
		this.handleTimeScrollRequest(this.context.options.scrollTime);
	}
	applyTimeScroll() {
		let e = this.computeTimeScroll();
		e !== void 0 && (this.timeScroller.scrollTo({ x: e }), this.scroll.x !== e && (this.scroll.x = e, R(this.props.scrollRef, this.scroll)));
	}
	computeTimeScroll() {
		let { props: e, context: t, scroll: n } = this, { tDateProfile: r } = e, i = e.slotWidth ?? 50, { x: a, time: o } = n;
		return o && (a = GT(o, t.dateEnv, e.dateProfile, r, i), a && (a += 1)), a !== void 0 && this.maxHScroll !== void 0 && (a = Math.min(this.maxHScroll, a)), a;
	}
	applyEntityScroll() {
		let e = this.computeEntityScroll();
		return e !== void 0 && (this.bodyScroller.scrollTo({ y: e }), !0);
	}
	computeEntityScroll() {
		let { bodyTops: e, bodyHeights: t, scroll: n } = this, { entityId: r, fromBottom: i } = n;
		if (r) {
			let n = e.get(r), a = t.get(r);
			if (n != null) {
				let e = n + a, t = i == null ? n + +!!n : e - i;
				return Math.min(this.maxVScroll, t);
			}
		}
	}
	prepareHits() {
		this.scroll.entityId = void 0, this.scroll.fromBottom = void 0;
	}
	queryHit(e, t, n) {
		let { props: r, context: i, bodyLayouts: a, bodyTops: o, bodyHeights: s } = this, { dateProfile: c, tDateProfile: l, timeCanvasWidth: u } = r, d = r.slotWidth ?? 50, { dateEnv: f } = i, p = IO(a, o, s, n, YD);
		if (p) {
			let [n, r, i] = p;
			if (!ZD(n)) {
				let a = n, o = r + i, s = YT(t, u, d, e, l, f);
				return s ? {
					dateProfile: c,
					dateSpan: {
						...s.dateSpan,
						resourceId: a.id
					},
					rect: {
						...s.rect,
						top: r,
						bottom: o
					},
					getDayEl: () => CE(this.bodyEl, s.slatIndex),
					layer: 0
				} : null;
			}
		}
		return null;
	}
};
function vk(e, t, n, r) {
	let i = [];
	function a(e, t, o) {
		for (let s of e) if (s.resourceFields) {
			let e = n[s.entity.id] ?? r, c = !!s.children.length;
			i.push({
				type: "resource",
				entity: s.entity,
				resourceFields: s.resourceFields,
				colGroups: o,
				isExpanded: e,
				hasChildren: c,
				indent: t
			}), a(s.children, t + 1, o);
		} else if (s.pooledHeight) a(s.children, t, o.concat(s.entity));
		else {
			let e = n[XD(s.entity)] ?? r, c = !!s.children.length;
			i.push({
				type: "group",
				entity: s.entity,
				isExpanded: e,
				hasChildren: c,
				indent: t
			}), a(s.children, t + 1, o);
		}
	}
	return a(e, +!!t, []), i;
}
function yk(e, t) {
	let n = e.map((e) => e.type === "resource" ? {
		...e,
		colGroupCells: Array.from({ length: t }, () => null)
	} : e);
	for (let e = 0; e < n.length; e += 1) {
		let r = n[e];
		if (r.type === "resource") for (let i = 0; i < t; i += 1) {
			let t = r.colGroups[i], a = n[e - 1];
			if (!t || a?.type === "resource" && a.colGroups[i] === t) continue;
			let o = 1;
			for (; e + o < n.length;) {
				let r = n[e + o];
				if (r.type !== "resource" || r.colGroups[i] !== t) break;
				o += 1;
			}
			r.colGroupCells[i] = {
				group: t,
				rowSpan: o
			};
		}
	}
	return n;
}
var bk = class extends uE {
	constructor() {
		super(...arguments), this.refineRenderProps = Zu(JO), this.buildDateSpanProps = I(KO), this.buildEventRenderProps = I(qO), this.slicer = new ZT();
	}
	render() {
		let { props: e, context: t } = this, { options: n } = t, { layout: r } = e, { entity: i } = r, a = this.refineRenderProps({
			resource: i,
			context: t,
			eventOverlap: !!n.eventOverlap
		}), o = this.buildEventRenderProps(a.resource), s = B(n.resourceLaneClass, a), c = this.slicer.sliceProps(e, e.dateProfile, e.tDateProfile.isTimeScale ? null : n.nextDayThreshold, t, e.dateProfile, t.dateProfileGenerator, e.tDateProfile, t.dateEnv), { eventBands: l, moreLinkBand: u } = this.buildPrintBands(c.fgEventSegs, e.tDateProfile, e.slotWidth), d = {
			dateProfile: e.dateProfile,
			tDateProfile: e.tDateProfile,
			nowDate: e.nowDate,
			nowMs: e.nowMs,
			todayRange: e.todayRange,
			eventSelection: c.eventSelection,
			dateSpanProps: this.buildDateSpanProps(i.id),
			renderProps: o,
			timeCanvasClipStart: e.timeCanvasClipStart
		};
		return Q("tr", { children: [
			r.colGroupCells.map((t, n) => t && Q(XO, {
				colSpec: t.group.spec,
				fieldValue: t.group.value,
				rowSpan: t.rowSpan,
				borderStart: !!n,
				borderBottom: e.rowIndex + t.rowSpan < e.rowCount,
				forPrint: !0
			}, n)),
			e.colSpecs.slice(e.groupColCnt).map((t, n) => {
				let a = e.groupColCnt + n, o = t.field ? r.resourceFields[t.field] : i.title || LE(i.id);
				return Q(rk, {
					colSpec: t,
					resource: i,
					field: t.field || "title",
					fieldValue: o,
					indent: r.indent,
					hasChildren: r.hasChildren,
					isExpanded: r.isExpanded,
					width: void 0,
					indentWidth: e.indentWidth,
					borderStart: !!a,
					borderBottom: e.isNotLast,
					forPrint: !0
				}, a);
			}),
			Q("td", { className: M(n.resourceColumnDividerClass) }),
			Q(z, {
				tag: "td",
				attrs: { "data-resource-id": i.id },
				className: M(s, n.resourceRowClass, j.noMargin, j.noPadding, j.contentBox, j.borderlessX, j.borderlessTop, !e.isNotLast && j.borderlessBottom),
				renderProps: a,
				generatorName: void 0,
				didMount: n.resourceLaneDidMount,
				willUnmount: n.resourceLaneWillUnmount,
				children: () => Q("div", {
					className: j.rel,
					children: [
						Q("div", {
							className: M(j.fill, j.crop),
							children: Q(eE, {
								tDateProfile: e.tDateProfile,
								nowDate: e.nowDate,
								nowMs: e.nowMs,
								todayRange: e.todayRange,
								bgEventSegs: c.bgEventSegs,
								businessHourSegs: c.businessHourSegs,
								dateSelectionSegs: null,
								eventResizeSegs: null,
								renderProps: o,
								slotWidth: e.slotWidth,
								clipStart: e.timeCanvasClipStart
							})
						}),
						Q(z, {
							tag: "div",
							className: M(j.noMargin, j.noShrink),
							renderProps: a,
							generatorName: "resourceLaneTopContent",
							customGenerator: n.resourceLaneTopContent,
							classNameGenerator: n.resourceLaneTopClass
						}),
						l.map((e) => ZC(hE, {
							...d,
							key: e.levelIndex,
							band: e,
							heightRefMap: this.printHeights.segHeightRefMap
						})),
						u && Q(gE, {
							...d,
							band: u,
							heightRefMap: this.printHeights.moreLinkHeightRefMap
						}),
						Q(z, {
							tag: "div",
							className: M(j.noMargin, j.noShrink),
							renderProps: a,
							generatorName: "resourceLaneBottomContent",
							customGenerator: n.resourceLaneBottomContent,
							classNameGenerator: n.resourceLaneBottomClass
						})
					]
				})
			})
		] });
	}
}, xk = class extends L {
	constructor() {
		super(...arguments), this.state = {}, this.buildPrintLayouts = I(vk), this.buildPrintTableRows = I(yk), this.handleHeaderRowHeightChange = () => {
			this._isUnmounting || V(this.boundForceUpdate);
		}, this.boundForceUpdate = () => {
			this._isUnmounting || this.forceUpdate();
		}, this.headerElRef = $C(), this.dividerProbeElRef = $C(), this.timelineHeaderRowInnerHeightMap = new H(this.handleHeaderRowHeightChange), this.dataGridHeaderRowInnerHeightMap = new H(this.handleHeaderRowHeightChange);
	}
	render() {
		let { props: e, context: t, dataGridHeaderRowInnerHeightMap: n, timelineHeaderRowInnerHeightMap: r } = this, { dateProfile: i } = e, { options: a, viewSpec: o } = t, { borderlessX: s, borderlessTop: c, borderlessBottom: l } = Vs(a), { tDateProfile: u, todayRange: d, nowDate: f, hasNesting: p } = e, { slotWidth: m, timeCanvasWidth: h } = e, { splitProps: g, bgSlicedProps: _, timeCanvasClipStart: v } = e, { superHeaderRendering: y, groupColCnt: b, colSpecs: x } = e, { cellRows: S } = u, C = hk(n.current, r.current, !!y, S.length), w = {
			borderlessX: s,
			borderlessTop: c,
			borderlessBottom: l,
			multiMonthColumns: 0
		}, T = B(a.slotHeaderDividerClass, {
			inTableHeader: !0,
			options: { dayMinWidth: a.dayMinWidth }
		}), { resourceHierarchy: ee } = e, E = this.buildPrintLayouts(ee, p, e.resourceEntityExpansions, a.resourcesInitiallyExpanded);
		E.length > a.printMaxRows && (E = E.slice(0, a.printMaxRows), ms(`Rows truncated for print. Only included the first ${a.printMaxRows} rows.`));
		let te = this.buildPrintTableRows(E, b), ne = Sk(e.spreadsheetWidthConfig, e.spreadsheetColWidths, x.length), re = this.state.dividerWidth ?? 0, ie = OO({
			pixels: e.spreadsheetWidthConfig.pixels + re,
			frac: e.spreadsheetWidthConfig.frac
		}), ae = Q("th", {
			rowSpan: y ? 2 : void 0,
			className: M(j.noPadding, j.borderless, j.crop),
			children: Q("div", {
				className: M(j.rel, j.flexCol),
				style: {
					width: h,
					height: C,
					insetInlineStart: -v
				},
				children: S.map((t, n) => {
					let r = S.length - n - 1;
					return Q(rE, {
						className: j.grow,
						dateProfile: e.dateProfile,
						tDateProfile: u,
						nowDate: f,
						nowMs: e.nowMs,
						todayRange: d,
						rowLevel: r,
						cells: t,
						slotWidth: m,
						innerHeighRef: this.timelineHeaderRowInnerHeightMap.createRef(n)
					}, r);
				})
			})
		}), oe = Q("th", {
			rowSpan: y ? 2 : void 0,
			className: M(a.resourceColumnDividerClass)
		});
		return Q(Hd, {
			viewSpec: o,
			className: M(e.className, j.rel, j.crop, j.isolate),
			children: [
				Q("div", {
					ref: this.dividerProbeElRef,
					className: M(a.resourceColumnDividerClass, j.offscreen)
				}),
				Q("div", {
					className: M(j.abs, j.crop, j.end0, j.pointerEventsNone, j.z0),
					style: {
						top: this.state.headerHeight ?? 0,
						bottom: "-5%",
						insetInlineStart: ie
					},
					children: [Q(vE, {
						dateProfile: i,
						tDateProfile: u,
						nowDate: f,
						nowMs: e.nowMs,
						todayRange: d,
						slotWidth: m,
						clipStart: v
					}), Q(eE, {
						tDateProfile: u,
						nowDate: f,
						nowMs: e.nowMs,
						todayRange: d,
						bgEventSegs: _.bgEventSegs,
						businessHourSegs: e.hasResourceBusinessHours ? null : _.businessHourSegs,
						dateSelectionSegs: null,
						eventResizeSegs: null,
						slotWidth: m,
						clipStart: v
					})]
				}),
				Q("table", {
					className: M(B(a.tableClass, w), j.printTable, j.rel, j.z1),
					children: [
						Q("colgroup", { children: [
							x.map((e, t) => Q("col", { style: { width: ne?.[t] } }, t)),
							Q("col", { style: { width: this.state.dividerWidth } }),
							Q("col", {})
						] }),
						Q("thead", {
							ref: this.headerElRef,
							className: B(a.tableHeaderClass, {
								...w,
								isSticky: !1
							}),
							children: [y ? Q(ew, { children: [Q("tr", { children: [
								Q(fk, {
									renderHooks: y,
									indent: p && !b,
									colSpan: x.length,
									indentWidth: e.indentWidth,
									innerHeightRef: this.dataGridHeaderRowInnerHeightMap.createRef(!0),
									forPrint: !0
								}),
								oe,
								ae
							] }), Q("tr", { children: Q(dk, {
								colSpecs: x,
								colWidths: void 0,
								indent: p,
								indentWidth: e.indentWidth,
								innerHeightRef: this.dataGridHeaderRowInnerHeightMap.createRef(!1),
								forPrint: !0
							}) })] }) : Q("tr", { children: [
								Q(dk, {
									colSpecs: x,
									colWidths: void 0,
									indent: p,
									indentWidth: e.indentWidth,
									innerHeightRef: this.dataGridHeaderRowInnerHeightMap.createRef(!1),
									forPrint: !0
								}),
								oe,
								ae
							] }), Q("tr", { children: [
								Q("th", {
									colSpan: x.length,
									className: M(j.noPadding, T)
								}),
								Q("th", { className: M(a.resourceColumnDividerClass, j.noPaddingY) }),
								Q("th", { className: M(j.noPadding, T) })
							] })]
						}),
						Q("tbody", {
							className: B(a.tableBodyClass, w),
							children: te.map((t, n) => {
								let r = n < te.length - 1;
								if (t.type === "resource") {
									let a = t.entity;
									return ZC(bk, {
										...g[a.id],
										key: a.id,
										layout: t,
										rowIndex: n,
										rowCount: te.length,
										isNotLast: r,
										dateProfile: i,
										tDateProfile: u,
										nowDate: f,
										nowMs: e.nowMs,
										todayRange: d,
										colSpecs: x,
										groupColCnt: b,
										timeCanvasClipStart: v,
										slotWidth: m,
										indentWidth: e.indentWidth,
										businessHours: e.hasResourceBusinessHours ? g[a.id].businessHours : null,
										dateSelection: null,
										eventDrag: null,
										eventResize: null
									});
								}
								{
									let n = t.entity, i = XD(n);
									return Q("tr", {
										className: j.breakInsideAvoid,
										children: [
											Q(tk, {
												group: n,
												isExpanded: t.isExpanded,
												colSpan: e.colSpecs.length,
												borderBottom: r,
												indentWidth: e.indentWidth,
												forPrint: !0
											}),
											Q("td", { className: M(a.resourceColumnDividerClass) }),
											Q(WO, {
												group: n,
												borderBottom: r,
												forPrint: !0
											})
										]
									}, i);
								}
							})
						})
					]
				})
			]
		});
	}
	componentDidMount() {
		this._isUnmounting = !1, this.disconnectHeaderHeight = jd(this.headerElRef.current, (e) => {
			!this._isUnmounting && e !== this.state.headerHeight && this.setState({ headerHeight: e });
		}), this.disconnectDividerWidth = Ad(this.dividerProbeElRef.current, (e) => {
			!this._isUnmounting && e !== this.state.dividerWidth && this.setState({ dividerWidth: e });
		});
	}
	componentWillUnmount() {
		this._isUnmounting = !0, this.disconnectHeaderHeight?.(), this.disconnectDividerWidth?.();
	}
};
function Sk(e, t, n) {
	let r;
	if (t) {
		let e = t.reduce((e, t) => e + t, 0);
		e && (r = t.map((t) => t / e));
	}
	return r ??= Array.from({ length: n }, () => 1 / n), r.map((t) => OO({
		pixels: e.pixels * t,
		frac: e.frac * t
	}));
}
var Ck = 50;
function wk(e) {
	let t = e.resourceColumns || [], n = null;
	t.length ? e.resourceColumnHeaderContent && (n = {
		headerClass: e.resourceColumnHeaderClass,
		headerInnerClass: e.resourceColumnHeaderInnerClass,
		headerContent: e.resourceColumnHeaderContent,
		headerDidMount: e.resourceColumnHeaderDidMount,
		headerWillUnmount: e.resourceColumnHeaderWillUnmount
	}) : t.push({ headerDefault: () => "Resources" });
	let r = [], i = [], a = [], o = 0, s = !1;
	for (let n of t) (n.group ? i : r).push({
		...n,
		isMain: !n.group && !s ? s = !0 : !1,
		headerClass: Zl(e.resourceColumnHeaderClass, n.headerClass, "resourceColumnHeaderClass"),
		headerInnerClass: Zl(e.resourceColumnHeaderInnerClass, n.headerInnerClass, "resourceColumnHeaderInnerClass"),
		headerResizerClass: Zl(e.resourceColumnResizerClass, n.headerResizerClass, "resourceColumnResizerClass"),
		headerContent: Ql(e.resourceColumnHeaderContent, n.headerContent),
		headerDidMount: $l(e.resourceColumnHeaderDidMount, n.headerDidMount),
		headerWillUnmount: $l(e.resourceColumnHeaderWillUnmount, n.headerWillUnmount),
		cellClass: Zl(e.resourceCellClass, n.cellClass, "resourceCellClass"),
		cellInnerClass: Zl(e.resourceCellInnerClass, n.cellInnerClass, "resourceCellInnerClass"),
		cellContent: Ql(e.resourceCellContent, n.cellContent),
		cellDidMount: $l(e.resourceCellDidMount, n.cellDidMount),
		cellWillUnmount: $l(e.resourceCellWillUnmount, n.cellWillUnmount)
	});
	if (i.length) a = i;
	else {
		o = 1;
		let t = e.resourceGroupField;
		t && a.push({
			field: t,
			labelClass: e.resourceGroupHeaderClass,
			labelInnerClass: e.resourceGroupHeaderInnerClass,
			labelContent: e.resourceGroupHeaderContent,
			labelDidMount: e.resourceGroupHeaderDidMount,
			labelWillUnmount: e.resourceGroupHeaderWillUnmount,
			laneClass: e.resourceGroupLaneClass,
			laneInnerClass: e.resourceGroupLaneInnerClass,
			laneContent: e.resourceGroupLaneContent,
			laneDidMount: e.resourceGroupLaneDidMount,
			laneWillUnmount: e.resourceGroupLaneWillUnmount
		});
	}
	let c = e.resourceOrder || ND, l = [];
	for (let e of c) {
		let t = !1;
		for (let n of a) if (n.field === e.field) {
			n.order = e.order, t = !0;
			break;
		}
		t || l.push(e);
	}
	let u = i.concat(r), d = u.map((e) => TO(e.width, void 0, Ck));
	return EO(d), {
		groupSpecs: a,
		groupRowDepth: o,
		orderSpecs: l,
		colSpecs: u,
		groupColCnt: i.length,
		colWidthConfigs: d,
		superHeaderRendering: n
	};
}
var Tk = 30, Ek = class extends Wd {
	constructor() {
		super(...arguments), this.state = {}, this.buildTimelineDateProfile = I(kT), this.filterResourceStore = I(ID), this.processColOptions = I(wk), this.buildResourceHierarchy = I(VD), this.computeSlotWidth = I(WT), this.computeHasNesting = I(Ok), this.computeHasResourceBusinessHours = I(Dk), this.scrollRef = $C(), this.spreadsheetResizedWidthConfigRef = $C(), this.resourceSplitter = new ED(), this.bgSlicer = new ZT(), this.handleColResize = (e, t) => {
			if (this._isUnmounting) return;
			let n = kO(this.spreadsheetColWidthConfigs, this.spreadsheetColWidths, this.state.spreadsheetClientWidth, e, t);
			this.setState({ colWidthOverrides: n });
		}, this.handleSpreadsheetClientWidth = (e) => {
			this._isUnmounting || e != null && this.setState({ spreadsheetClientWidth: e });
		}, this.handleTimeClientWidth = (e) => {
			this._isUnmounting || e != null && this.setState({ timeClientWidth: e });
		}, this.handleSlotInnerWidth = (e) => {
			this._isUnmounting || e != null && this.setState({ slotInnerWidth: e });
		}, this.handleExpanderEl = (e) => {
			this.disconnectExpanderWidth &&= (this.disconnectExpanderWidth(), void 0), e && (this.disconnectExpanderWidth = Ad(e, (e) => {
				this._isUnmounting || this.setState({ expanderWidth: e });
			}));
		};
	}
	render() {
		let { props: e, state: t, context: n } = this, { dateProfile: r } = e, { options: i } = n, a = this.buildTimelineDateProfile(r, n.dateEnv, i, n.dateProfileGenerator), { unit: o, value: s } = Uo(a.slotDuration), { groupSpecs: c, groupRowDepth: l, orderSpecs: u, colSpecs: d, groupColCnt: f, colWidthConfigs: p, superHeaderRendering: m } = this.processColOptions(n.options), h = this.spreadsheetResizedWidthConfigRef.current ?? wO(i.resourceColumnsWidth, Tk), g = t.colWidthOverrides || p, [_, v] = t.spreadsheetClientWidth == null ? [void 0, void 0] : DO(g, t.spreadsheetClientWidth);
		this.spreadsheetColWidthConfigs = g, this.spreadsheetColWidths = _;
		let y = this.filterResourceStore(e.resourceStore, i.filterResourcesWithEvents, e.rawEventStore, r.activeRange), b = this.buildResourceHierarchy(y, u, c, l), x = this.computeHasNesting(b), [S, C, w] = this.computeSlotWidth(a.slotCnt, a.slotsPerLabel, i.slotMinWidth, t.slotInnerWidth, t.timeClientWidth), T = this.resourceSplitter.splitProps({
			...e,
			resourceStore: y
		}), ee = T[""], E = this.bgSlicer.sliceProps(ee, r, a.isTimeScale ? null : i.nextDayThreshold, n, r, n.dateProfileGenerator, a, n.dateEnv), te = this.computeHasResourceBusinessHours(b), ne = te ? e.businessHours : null;
		return Q(ew, { children: [Q(Md, {
			unit: o,
			unitValue: s,
			children: (n, i, o) => {
				let s = {
					className: e.className,
					tDateProfile: a,
					dateProfile: r,
					resourceHierarchy: b,
					resourceEntityExpansions: e.resourceEntityExpansions,
					hasNesting: x,
					nowDate: n,
					nowMs: o,
					todayRange: i,
					colSpecs: d,
					groupColCnt: f,
					superHeaderRendering: m,
					splitProps: T,
					bgSlicedProps: E,
					slotWidth: C,
					timeCanvasWidth: S,
					spreadsheetColWidths: _
				};
				return e.forPrint ? Q(xk, {
					...s,
					hasResourceBusinessHours: te,
					spreadsheetWidthConfig: h,
					timeCanvasClipStart: this.scrollRef.current.x,
					indentWidth: t.expanderWidth
				}) : Q(_k, {
					...s,
					labelId: e.labelId,
					labelStr: e.labelStr,
					eventSelection: e.eventSelection,
					hasResourceBusinessHours: te,
					fallbackBusinessHours: ne,
					slotLiquid: w,
					timeClientWidthRef: this.handleTimeClientWidth,
					slotInnerWidthRef: this.handleSlotInnerWidth,
					initialSpreadsheetWidthConfig: h,
					spreadsheetCanvasWidth: v,
					initialScroll: this.scrollRef.current,
					spreadsheetResizedWidthConfigRef: this.spreadsheetResizedWidthConfigRef,
					spreadsheetClientWidthRef: this.handleSpreadsheetClientWidth,
					scrollRef: this.scrollRef,
					onColResize: this.handleColResize,
					indentWidth: t.expanderWidth
				});
			}
		}), Q(ek, {
			isExpanded: !0,
			elRef: this.handleExpanderEl,
			className: j.offscreen
		})] });
	}
	componentDidMount() {
		this._isUnmounting = !1;
	}
	componentWillUnmount() {
		this._isUnmounting = !0;
	}
};
Ek.addStateEquality({ colWidthOverrides: oc });
function Dk(e) {
	for (let t of e) if (t.resourceFields && t.entity.businessHours || Dk(t.children)) return !0;
	return !1;
}
function Ok(e) {
	for (let t of e) if (t.children.length && !t.pooledHeight || Ok(t.children)) return !0;
	return !1;
}
var kk = {
	name: "resource-timeline",
	premiumReleaseDate: "2026-10-12",
	deps: [
		jw,
		FD,
		TE
	],
	initialView: "resourceTimelineDay",
	views: {
		resourceTimeline: {
			type: "timeline",
			component: Ek,
			needsResourceData: !0,
			resourceColumnsWidth: "30%",
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
}, Ak = class extends pO {
	transformSeg(e, t, n) {
		let r = e.col, i = t.computeCol(r, n);
		return i === -1 ? [] : [{
			...e,
			col: i
		}];
	}
}, jk = class extends Wd {
	constructor() {
		super(...arguments), this.state = {}, this.filterResourceStore = I(ID), this.flattenResources = I(qD), this.buildDaySeries = I((e, t) => new f_(e.renderRange, t)), this.buildDayCols = I(H_), this.extractDayRanges = I((e) => e.map((e) => e.range)), this.computeHasEventsByDate = I(BD), this.buildResourceTableModel = I(uO), this.buildResourceRowConfigs = I(hO), this.buildBlankRenderProps = I(Mk), this.createDayHeaderFormatter = I(C_), this.allDaySplitter = new K_(), this.allDayResourceSplitter = new dO(), this.allDayResourceSlicers = {}, this.allDayResourceJoiner = new mO(), this.timedResourceSplitter = new dO(), this.timedResourceSlicers = {}, this.timedResourceJoiner = new Ak(), this.splitFgEventSegs = I(J_), this.splitBgEventSegs = I(J_), this.splitBusinessHourSegs = I(J_), this.splitNowIndicatorSegs = I(J_), this.splitDateSelectionSegs = I(J_), this.splitEventDrag = I(Y_), this.splitEventResize = I(Y_), this.isHitComboAllowed = (e, t) => {
			let n = this.dayRanges.length === 1;
			return this.resourceDayTableModel.isHitComboAllowed(e, t, n);
		};
	}
	render() {
		let { props: e, context: t } = this, { options: n, dateEnv: r } = t, { dateProfile: i } = e, a = this.filterResourceStore(e.resourceStore, n.filterResourcesWithEvents, e.rawEventStore, i.activeRange), o = n.resourceOrder || ND, s = this.flattenResources(a, o), c = this.buildDaySeries(i, t.dateProfileGenerator), l = this.buildDayCols(c, r, {
			slotRange: i,
			activeRange: i.activeRange
		}), u = this.dayRanges = this.extractDayRanges(l), d = n.filterResourcesWithEvents && l.length > 1 ? this.computeHasEventsByDate(e.rawEventStore, a, l) : null, f = this.resourceDayTableModel = this.buildResourceTableModel(null, l, s, n.datesAboveResources, d, t), p = this.allDaySplitter.splitProps(e), m = this.allDayResourceSplitter.splitProps({
			businessHours: p.allDay.businessHours,
			dateSelection: p.allDay.dateSelection,
			eventStore: p.allDay.eventStore,
			eventUiBases: p.allDay.eventUiBases,
			eventSelection: p.allDay.eventSelection,
			eventDrag: p.allDay.eventDrag,
			eventResize: p.allDay.eventResize,
			resourceDayTableModel: f
		});
		this.allDayResourceSlicers = Ws(m, (e, t) => this.allDayResourceSlicers[t] || new dh());
		let h = Ws(this.allDayResourceSlicers, (e, r) => e.sliceProps(m[r], i, n.nextDayThreshold, t, c)), g = this.allDayResourceJoiner.joinProps(h, f), _ = this.timedResourceSplitter.splitProps({
			businessHours: p.timed.businessHours,
			dateSelection: p.timed.dateSelection,
			eventStore: p.timed.eventStore,
			eventUiBases: p.timed.eventUiBases,
			eventSelection: p.timed.eventSelection,
			eventDrag: p.timed.eventDrag,
			eventResize: p.timed.eventResize,
			resourceDayTableModel: f
		});
		this.timedResourceSlicers = Ws(_, (e, t) => this.timedResourceSlicers[t] || new q_());
		let v = Ws(this.timedResourceSlicers, (e, n) => e.sliceProps(_[n], i, null, t, u)), y = this.timedResourceJoiner.joinProps(v, f), b = this.createDayHeaderFormatter(t.options.dayHeaderFormat, !0, f.colCount);
		return Q(Md, {
			unit: n.nowIndicator ? "minute" : "day",
			children: (r, a, o) => {
				let s = f.colCount, c = this.splitFgEventSegs(y.fgEventSegs, s), u = this.splitBgEventSegs(y.bgEventSegs, s), d = this.splitBusinessHourSegs(y.businessHourSegs, s), m = this.splitNowIndicatorSegs((() => {
					let t = !e.forPrint && n.nowIndicator ? this.timedResourceSlicers[""].sliceNowDate(r, this.props.dateProfile, this.context.options.nextDayThreshold, this.context, this.dayRanges) : [], i = this.timedResourceJoiner.expandSegs(f, t), a = l.length;
					return i.map((e) => ({
						...e,
						showDot: !n.datesAboveResources && a > 1 || f.dateFirstCols[f.cols[e.col].dateI] === e.col
					}));
				})(), s), h = this.splitDateSelectionSegs(y.dateSelectionSegs, s), _ = this.splitEventDrag(y.eventDrag, s), v = this.splitEventResize(y.eventResize, s), x = this.buildResourceRowConfigs(f, !0, e.dateProfile, a, b, t, n.dayLaneClass, this.buildBlankRenderProps(pv(e.forPrint, n.eventPrintLayout) === "stack"));
				return Q(Rv, {
					labelId: e.labelId,
					labelStr: e.labelStr,
					dateProfile: i,
					nowDate: r,
					nowMs: o,
					todayRange: a,
					cells: f.cols,
					forPrint: e.forPrint,
					isHitComboAllowed: this.isHitComboAllowed,
					className: e.className,
					headerTiers: x,
					fgEventSegs: g.fgEventSegs,
					bgEventSegs: g.bgEventSegs,
					businessHourSegs: g.businessHourSegs,
					dateSelectionSegs: g.dateSelectionSegs,
					eventDrag: g.eventDrag,
					eventResize: g.eventResize,
					fgEventSegsByCol: c,
					bgEventSegsByCol: u,
					businessHourSegsByCol: d,
					nowIndicatorSegsByCol: m,
					dateSelectionSegsByCol: h,
					eventDragByCol: _,
					eventResizeByCol: v,
					eventSelection: g.eventSelection || p.timed.eventSelection
				});
			}
		});
	}
};
function Mk(e) {
	return { isStack: e };
}
//#endregion
//#region resources/js/plugins/index.js
var Nk = {
	interaction: Mm,
	dayGrid: V_,
	timeGrid: Vv,
	list: $v,
	multiMonth: sy,
	rrule: Ox,
	googleCalendar: Bx,
	iCalendar: jC,
	scrollGrid: Nw,
	timeline: TE,
	adaptive: ME,
	resourceDayGrid: SO,
	resourceTimeline: kk,
	resourceTimeGrid: {
		name: "resource-timegrid",
		premiumReleaseDate: "2026-10-12",
		deps: [
			jw,
			Vv,
			FD,
			SO
		],
		initialView: "resourceTimeGridDay",
		views: {
			resourceTimeGrid: {
				type: "timeGrid",
				component: jk,
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
	}
}, Pk = "fc-breezy-vQz", Fk = "fc-breezy-0Bj", Ik = "fc-breezy-uqo", Lk = "fc-breezy-nPR", Rk = "fc-breezy-3Xj", zk = "fc-breezy-yg7", Bk = `${Ik} ${zk}`, Vk = M("fc-breezy-hJa", "fc-breezy-AT7", "fc-breezy-b3B"), Hk = "fc-breezy-qiG", Uk = `${Hk} fc-breezy-WfX`, Wk = "fc-breezy-1EL", Gk = `${Wk} fc-breezy-qWF fc-breezy-UTk`, Kk = `fc-breezy-GfU fc-breezy-Oiq ${Bk}`, qk = `fc-breezy-t4l fc-breezy-hnE ${Bk}`, Jk = "fc-breezy-Anp fc-breezy-ECg", Yk = `${Jk} fc-breezy-8mf`, Xk = `${Jk} fc-breezy-t8l`, Zk = `${Yk} fc-breezy-d0j ${Bk} ${Rk}`, Qk = `fc-breezy-nyY fc-breezy-NK3 fc-breezy-StK fc-breezy-nuP ${Bk} fc-breezy-07j`, $k = "fc-breezy-XUJ fc-breezy-J7Y fc-breezy-b7A fc-breezy-tRE", eA = "fc-breezy-WLU", tA = "fc-breezy-GjO", nA = M(tA, "fc-breezy-yE8", "fc-breezy-x2T"), rA = "fc-breezy-t4l fc-breezy-Wxh fc-breezy-x7E", iA = "fc-breezy-1EY fc-breezy-pps fc-breezy-vs6", aA = `${iA} fc-breezy-AWB fc-breezy-hza`, oA = `${iA} fc-breezy-MaV fc-breezy-uuA`, sA = "fc-breezy-1EY fc-breezy-3wQ fc-breezy-wsy fc-breezy-lNM fc-breezy-gmc fc-breezy-AAA", cA = `${sA} fc-breezy-ERR fc-breezy-Dq8`, lA = `${sA} fc-breezy-1V6 fc-breezy-F99`, uA = (e) => M(!e.inPopover && (e.isMajor ? "fc-breezy-wsy fc-breezy-OFc" : !e.isNarrow && "fc-breezy-wsy fc-breezy-EAo")), dA = (e) => M(!e.inPopover && (e.isMajor ? "fc-breezy-wsy fc-breezy-OFc" : !e.isNarrow && "fc-breezy-wsy fc-breezy-tTN")), fA = (e) => e.isMajor ? "fc-breezy-OFc" : "fc-breezy-EAo", pA = (e) => e.isMajor ? "fc-breezy-OFc" : "fc-breezy-tTN", mA = "fc-breezy-mhE", hA = (e) => M(!e.isNarrow && "fc-breezy-toR"), gA = M(Uk, Ik, zk), _A = {
	listItemEventClass: (e) => M("fc-breezy-Ika fc-breezy-7A6", e.isNarrow ? "fc-breezy-148 fc-breezy-Fvv" : "fc-breezy-rVY fc-breezy-KzJ", e.isSelected ? "fc-breezy-pZQ" : e.isInteractive ? Uk : Hk),
	listItemEventInnerClass: (e) => M("fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK fc-breezy-N2M", e.isNarrow ? `fc-breezy-z5u ${Pk}` : "fc-breezy-2rx fc-breezy-a3B"),
	listItemEventTimeClass: (e) => M(e.isNarrow ? "fc-breezy-F1o" : "fc-breezy-oQ2", "fc-breezy-t4l fc-breezy-NPw fc-breezy-TZ4 fc-breezy-pKG fc-breezy-1Zl"),
	listItemEventTitleClass: (e) => M(e.isNarrow ? "fc-breezy-F1o" : "fc-breezy-oQ2", "fc-breezy-Oiq fc-breezy-1OT fc-breezy-TZ4 fc-breezy-pKG fc-breezy-OLq", e.timeText && "fc-breezy-IPx"),
	rowEventClass: (e) => M(e.isStart && (e.isNarrow ? "fc-breezy-Jzj" : "fc-breezy-Wga"), e.isEnd && (e.isNarrow ? "fc-breezy-3e1" : "fc-breezy-KYn")),
	rowEventInnerClass: (e) => e.isNarrow ? "fc-breezy-z5u" : "fc-breezy-2rx",
	rowMoreLinkClass: (e) => M("fc-breezy-Ika fc-breezy-wsy", e.isNarrow ? "fc-breezy-148 fc-breezy-UIT fc-breezy-Fvv" : "fc-breezy-sI7 fc-breezy-rVY fc-breezy-d0j fc-breezy-KzJ", Uk),
	rowMoreLinkInnerClass: (e) => M(e.isNarrow ? `fc-breezy-7A6 ${Pk}` : "fc-breezy-KUX fc-breezy-a3B", "fc-breezy-Oiq")
}, vA = {
	name: "theme-breezy",
	optionDefaults: {
		className: (e) => M("fc-breezy-gmc fc-breezy-n5m", !(e.borderlessTop || e.borderlessBottom || e.borderlessX) && "fc-breezy-hny"),
		viewClass: (e) => {
			let t = !e.options.headerToolbar && !e.borderlessTop, n = !e.options.footerToolbar && !e.borderlessBottom, r = !e.borderlessX;
			return M("fc-breezy-EAo", t && "fc-breezy-ku3", n && "fc-breezy-zi1", r && "fc-breezy-1Wx", t && r && "fc-breezy-wko", n && r && "fc-breezy-L2o", !e.isHeightAuto && "fc-breezy-pKG");
		},
		toolbarClass: (e) => M("fc-breezy-KRz fc-breezy-OEz fc-breezy-nYK fc-breezy-dl1 fc-breezy-1sP fc-breezy-dNl fc-breezy-XpK fc-breezy-N2M fc-breezy-Pms fc-breezy-pKG fc-breezy-EAo", !e.borderlessX && "fc-breezy-1Wx"),
		headerToolbarClass: (e) => M("fc-breezy-zi1", !e.borderlessTop && "fc-breezy-ku3", !(e.borderlessTop || e.borderlessX) && "fc-breezy-wko"),
		footerToolbarClass: (e) => M("fc-breezy-ku3", !e.borderlessBottom && "fc-breezy-zi1", !(e.borderlessBottom || e.borderlessX) && "fc-breezy-L2o"),
		toolbarSectionClass: "fc-breezy-yi0 fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK fc-breezy-Pms",
		toolbarTitleClass: "fc-breezy-9ZS fc-breezy-C8a fc-breezy-Oiq",
		buttonGroupClass: (e) => M("fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK", !e.hasSelection && "fc-breezy-KzJ fc-breezy-eSM"),
		buttonClass: (e) => M("fc-breezy-bCs fc-breezy-dl6 fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK fc-breezy-9yp fc-breezy-Z9U", e.isIconOnly ? "fc-breezy-Nca" : "fc-breezy-Apf", e.buttonGroup?.hasSelection ? M("fc-breezy-KzJ fc-breezy-1OT", e.isSelected ? Kk : qk) : M("fc-breezy-C8a", e.isPrimary ? Zk : Qk, e.buttonGroup ? "fc-breezy-Ps8 fc-breezy-H1W fc-breezy-g3A fc-breezy-7ss fc-breezy-JIC" : "fc-breezy-KzJ fc-breezy-eSM fc-breezy-wsy")),
		buttons: {
			prev: { iconContent: () => yA(M($k, "fc-breezy-z44 fc-breezy-keW")) },
			next: { iconContent: () => yA(M($k, "fc-breezy-KxI fc-breezy-ZW3")) },
			prevYear: { iconContent: () => bA(M($k, "fc-breezy-asP")) },
			nextYear: { iconContent: () => bA(M($k, "fc-breezy-jmT fc-breezy-jY6")) }
		},
		eventShortHeight: 50,
		eventColor: "var(--fc-breezy-event)",
		eventContrastColor: "var(--fc-breezy-event-contrast)",
		eventClass: (e) => M(e.isDragging && "fc-breezy-n5m", e.event.url && "fc-breezy-JiE", e.isSelected ? M(Fk, e.isDragging && "fc-breezy-tkw") : Ik, zk),
		backgroundEventColor: "var(--fc-breezy-background-event)",
		backgroundEventClass: "fc-breezy-aPk fc-breezy-jsy fc-breezy-DO7",
		backgroundEventTitleClass: (e) => M("fc-breezy-lMo fc-breezy-L1Y", e.isNarrow ? `fc-breezy-iS4 ${Pk}` : "fc-breezy-3N5 fc-breezy-a3B", "fc-breezy-sI1"),
		blockEventClass: (e) => M("fc-breezy-bCs fc-breezy-eYX fc-breezy-vwH fc-breezy-d0j fc-breezy-DO7", e.isInteractive ? nA : tA, e.isDragging && !e.isSelected && "fc-breezy-iTG"),
		blockEventInnerClass: eA,
		blockEventTimeClass: "fc-breezy-TZ4 fc-breezy-pKG fc-breezy-1Zl",
		blockEventTitleClass: "fc-breezy-TZ4 fc-breezy-pKG fc-breezy-OLq",
		rowEventClass: (e) => M("fc-breezy-Ika fc-breezy-JIC", e.isStart && M("fc-breezy-3J4", e.isNarrow ? "fc-breezy-kmj" : "fc-breezy-QUg"), e.isEnd && M("fc-breezy-USt", e.isNarrow ? "fc-breezy-Skl" : "fc-breezy-RNO")),
		rowEventBeforeClass: (e) => M(e.isStartResizable && M(e.isSelected ? cA : aA, "fc-breezy-11a")),
		rowEventAfterClass: (e) => M(e.isEndResizable && M(e.isSelected ? cA : aA, "fc-breezy-Tuc")),
		rowEventInnerClass: (e) => M("fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK", e.isNarrow ? Pk : "fc-breezy-a3B"),
		rowEventTimeClass: (e) => M(e.isNarrow ? "fc-breezy-a7i" : "fc-breezy-C2j", "fc-breezy-1OT"),
		rowEventTitleClass: (e) => e.isNarrow ? "fc-breezy-oQ2" : "fc-breezy-aCI",
		columnEventClass: (e) => M("fc-breezy-1Wx fc-breezy-A3h fc-breezy-9Iz", e.isStart && M("fc-breezy-ku3 fc-breezy-wko", e.isNarrow ? "fc-breezy-sEX" : "fc-breezy-zZM"), e.isEnd && M("fc-breezy-zi1 fc-breezy-L2o", e.isNarrow ? "fc-breezy-Ika" : "fc-breezy-vUo")),
		columnEventBeforeClass: (e) => M(e.isStartResizable && M(e.isSelected ? lA : oA, "fc-breezy-YDC")),
		columnEventAfterClass: (e) => M(e.isEndResizable && M(e.isSelected ? lA : oA, "fc-breezy-fJL")),
		columnEventInnerClass: (e) => M("fc-breezy-dl1", e.isShort ? "fc-breezy-1sP fc-breezy-XpK fc-breezy-NWN fc-breezy-iS4" : M("fc-breezy-sgX", e.isNarrow ? "fc-breezy-aCI fc-breezy-2rx" : "fc-breezy-Nca fc-breezy-Jhn"), e.isShort || e.isNarrow ? Pk : "fc-breezy-a3B"),
		columnEventTimeClass: (e) => !e.isShort && (e.isNarrow ? "fc-breezy-166" : "fc-breezy-4dx"),
		columnEventTitleClass: (e) => M(!e.isShort && (e.isNarrow ? "fc-breezy-2rx" : "fc-breezy-Jhn"), "fc-breezy-C8a"),
		moreLinkClass: `${Ik} ${zk}`,
		moreLinkInnerClass: "fc-breezy-TZ4 fc-breezy-pKG",
		columnMoreLinkClass: (e) => M(e.isNarrow ? "fc-breezy-SEP" : "fc-breezy-V9v", `fc-breezy-wsy fc-breezy-d0j fc-breezy-4MR fc-breezy-KzJ ${Vk} fc-breezy-vwH fc-breezy-A3h fc-breezy-9Iz`),
		columnMoreLinkInnerClass: (e) => M(e.isNarrow ? `fc-breezy-KUX ${Pk}` : "fc-breezy-iS4 fc-breezy-a3B", "fc-breezy-sI1"),
		dayHeaderAlign: (e) => e.inPopover ? "start" : "center",
		dayHeaderClass: (e) => M("fc-breezy-E9P", e.inPopover && "fc-breezy-zi1 fc-breezy-EAo fc-breezy-nYK"),
		dayHeaderInnerClass: (e) => M("fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK", !e.dayNumberText && !e.inPopover ? M("fc-breezy-Jhn fc-breezy-Fvv fc-breezy-a3B", e.isNarrow ? "fc-breezy-aCI fc-breezy-gMS fc-breezy-t4l" : "fc-breezy-ZrE fc-breezy-bvX fc-breezy-C8a fc-breezy-sI1", e.hasNavLink && gA) : e.isToday && e.dayNumberText && !e.inPopover ? M("fc-breezy-bCs fc-breezy-bvX fc-breezy-hS8", e.isNarrow ? "fc-breezy-TFV" : "fc-breezy-I1A") : M("fc-breezy-Fvv", e.inPopover ? "fc-breezy-bvX fc-breezy-aCI fc-breezy-2rx" : M("fc-breezy-fn8 fc-breezy-TFV fc-breezy-ZrE", e.isNarrow ? "fc-breezy-2tF" : "fc-breezy-X6C"), e.hasNavLink && gA)),
		dayHeaderContent: (e) => !e.dayNumberText && !e.inPopover ? D(w, { children: e.text }) : D(w, { children: e.textParts.map((t, n) => D("span", {
			className: M("fc-breezy-jm6", e.isNarrow ? "fc-breezy-a3B" : "fc-breezy-9yp", t.type === "day" ? M("fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK", !e.isNarrow && "fc-breezy-C8a", e.isToday && !e.inPopover ? M("fc-breezy-cKZ fc-breezy-AAA fc-breezy-E9P", e.isNarrow ? "fc-breezy-MSG" : "fc-breezy-n6w", e.hasNavLink ? `${Xk} ${Lk} ${Rk} ${zk}` : Jk) : "fc-breezy-Oiq") : "fc-breezy-t4l"),
			children: t.value
		}, n)) }),
		dayCellClass: (e) => M("fc-breezy-wsy", (e.isOther || e.isDisabled) && !e.options.businessHours && "fc-breezy-nYK"),
		dayCellTopClass: (e) => M(e.isNarrow ? "fc-breezy-84e" : "fc-breezy-p7s", "fc-breezy-dl1 fc-breezy-1sP"),
		dayCellTopInnerClass: (e) => M("fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK fc-breezy-E9P fc-breezy-TZ4", e.isNarrow ? `fc-breezy-SEP fc-breezy-oM6 ${Pk}` : "fc-breezy-V9v fc-breezy-TFV fc-breezy-a3B", e.isToday ? M("fc-breezy-AAA fc-breezy-C8a", e.isNarrow ? "fc-breezy-qvL" : "fc-breezy-Wga", e.text === e.dayNumberText ? e.isNarrow ? "fc-breezy-79F" : "fc-breezy-ilz" : e.isNarrow ? "fc-breezy-aCI" : "fc-breezy-Nca", e.hasNavLink ? `${Yk} ${Rk}` : Jk) : M("fc-breezy-Skl", e.isNarrow ? "fc-breezy-aCI" : "fc-breezy-Nca", e.hasNavLink && Uk, e.isOther ? "fc-breezy-mNS" : e.monthText ? "fc-breezy-sI1" : "fc-breezy-t4l", e.monthText && "fc-breezy-DIS")),
		dayCellInnerClass: (e) => M(e.inPopover && "fc-breezy-3N5"),
		popoverClass: "fc-breezy-uhF fc-breezy-wsy fc-breezy-LDJ fc-breezy-hny fc-breezy-pKG fc-breezy-1kP fc-breezy-gMS fc-breezy-aNc fc-breezy-n5m",
		popoverCloseClass: `fc-breezy-bCs fc-breezy-1EY fc-breezy-SKv fc-breezy-aYN fc-breezy-KUX fc-breezy-Fvv ${gA} fc-breezy-Z9U`,
		popoverCloseContent: () => xA(`fc-breezy-XUJ ${rA}`),
		dayLaneClass: (e) => M("fc-breezy-wsy", e.isMajor ? "fc-breezy-OFc" : "fc-breezy-tTN", e.isDisabled && "fc-breezy-nYK"),
		dayLaneInnerClass: (e) => e.isStack ? "fc-breezy-gMS" : e.isNarrow ? "fc-breezy-148" : "fc-breezy-rVY",
		slotLaneClass: (e) => M("fc-breezy-wsy fc-breezy-tTN", e.isMinor && "fc-breezy-TN2"),
		listDaysClass: "fc-breezy-8T7 fc-breezy-g0K fc-breezy-6u7 fc-breezy-E7b fc-breezy-KRz",
		listDayClass: (e) => M(!e.isLast && "fc-breezy-zi1 fc-breezy-tTN", "fc-breezy-dl1 fc-breezy-1sP fc-breezy-EF4 fc-breezy-tgZ"),
		listDayHeaderClass: "fc-breezy-SEP fc-breezy-yi0 fc-breezy-vVE fc-breezy-kMV fc-breezy-MKw fc-breezy-dl1 fc-breezy-sgX fc-breezy-EF4",
		listDayHeaderInnerClass: (e) => M("fc-breezy-cJ3 fc-breezy-2rx fc-breezy-Nca fc-breezy-PtF fc-breezy-AAA fc-breezy-9yp", e.level ? M("fc-breezy-mNS", e.hasNavLink && `${Uk} fc-breezy-i3P`) : M(e.isToday ? M("fc-breezy-C8a", e.hasNavLink ? Yk : Jk) : M("fc-breezy-1OT fc-breezy-Oiq", e.hasNavLink && Uk))),
		listDayBodyClass: "fc-breezy-9Qs fc-breezy-1El fc-breezy-2KU fc-breezy-wsy fc-breezy-EAo fc-breezy-KzJ",
		singleMonthClass: (e) => M(e.multiMonthColumns > 1 && "fc-breezy-jD5", e.multiMonthColumns === 1 && !e.isLast && "fc-breezy-zi1 fc-breezy-EAo"),
		singleMonthHeaderClass: (e) => M(e.multiMonthColumns > 1 ? "fc-breezy-x96" : "fc-breezy-End fc-breezy-gmc fc-breezy-zi1 fc-breezy-EAo", "fc-breezy-XpK"),
		singleMonthHeaderInnerClass: (e) => M("fc-breezy-Jhn fc-breezy-Nca fc-breezy-KzJ fc-breezy-9yp fc-breezy-Oiq fc-breezy-C8a", e.hasNavLink && Uk),
		tableHeaderClass: "fc-breezy-gmc",
		fillerClass: "fc-breezy-wsy fc-breezy-tTN",
		dayNarrowWidth: 100,
		dayHeaderRowClass: "fc-breezy-wsy fc-breezy-tTN",
		dayRowClass: "fc-breezy-wsy fc-breezy-EAo",
		slotHeaderRowClass: "fc-breezy-wsy fc-breezy-EAo",
		slotHeaderInnerClass: "fc-breezy-mNS fc-breezy-XHd",
		navLinkClass: `${Ik} ${zk}`,
		inlineWeekNumberClass: (e) => M("fc-breezy-1EY fc-breezy-n9G fc-breezy-iD1 fc-breezy-gmc fc-breezy-t4l fc-breezy-TZ4 fc-breezy-4In fc-breezy-zi1 fc-breezy-k8g fc-breezy-3J4 fc-breezy-Hhp", e.isNarrow ? `fc-breezy-KUX ${Pk}` : "fc-breezy-XJa fc-breezy-a3B", e.hasNavLink ? `${Uk} fc-breezy-07j` : Hk),
		highlightClass: "fc-breezy-xAy",
		nonBusinessHoursClass: "fc-breezy-nYK",
		nowIndicatorLineClass: "fc-breezy-CH7 fc-breezy-qQW fc-breezy-D9l",
		nowIndicatorDotClass: "fc-breezy-aAW fc-breezy-Vpk fc-breezy-D9l fc-breezy-63n fc-breezy-AAA fc-breezy-GBJ fc-breezy-9Iz",
		resourceDayHeaderAlign: "center",
		resourceDayHeaderClass: "fc-breezy-wsy",
		resourceDayHeaderInnerClass: (e) => M("fc-breezy-bvX fc-breezy-sI1 fc-breezy-C8a", e.isNarrow ? "fc-breezy-a3B" : "fc-breezy-9yp"),
		resourceColumnHeaderClass: "fc-breezy-wsy fc-breezy-tTN fc-breezy-E9P",
		resourceColumnHeaderInnerClass: "fc-breezy-bvX fc-breezy-sI1 fc-breezy-9yp",
		resourceColumnResizerClass: "fc-breezy-1EY fc-breezy-AWB fc-breezy-4Tv fc-breezy-dnf",
		resourceGroupHeaderClass: "fc-breezy-wsy fc-breezy-EAo fc-breezy-pZQ",
		resourceGroupHeaderInnerClass: "fc-breezy-bvX fc-breezy-sI1 fc-breezy-9yp",
		resourceCellClass: "fc-breezy-wsy fc-breezy-tTN",
		resourceCellInnerClass: "fc-breezy-bvX fc-breezy-sI1 fc-breezy-9yp",
		resourceIndentClass: "fc-breezy-Wga fc-breezy-p9t fc-breezy-E9P",
		resourceExpanderClass: `fc-breezy-bCs fc-breezy-KUX fc-breezy-AAA ${Uk} ${Ik} ${zk}`,
		resourceExpanderContent: (e) => yA(M(`fc-breezy-XUJ ${rA}`, !e.isExpanded && "fc-breezy-KxI fc-breezy-ZW3")),
		resourceHeaderRowClass: "fc-breezy-wsy fc-breezy-EAo",
		resourceRowClass: "fc-breezy-wsy fc-breezy-EAo",
		resourceColumnDividerClass: "fc-breezy-USt fc-breezy-OFc",
		resourceGroupLaneClass: "fc-breezy-wsy fc-breezy-EAo fc-breezy-pZQ",
		resourceLaneClass: "fc-breezy-wsy fc-breezy-EAo",
		resourceLaneBottomClass: (e) => M(e.options.eventOverlap && "fc-breezy-uuA"),
		timelineBottomClass: "fc-breezy-uuA"
	},
	views: {
		dayGrid: {
			..._A,
			dayHeaderClass: uA,
			dayHeaderDividerClass: "fc-breezy-zi1 fc-breezy-OFc",
			dayCellClass: fA,
			dayCellBottomClass: hA,
			backgroundEventInnerClass: "fc-breezy-dl1 fc-breezy-1sP fc-breezy-LMv"
		},
		multiMonth: {
			..._A,
			dayHeaderClass: uA,
			dayHeaderDividerClass: (e) => M(e.multiMonthColumns === 1 && "fc-breezy-zi1 fc-breezy-OFc fc-breezy-qNs"),
			dayCellClass: fA,
			dayCellBottomClass: hA,
			tableBodyClass: (e) => M(e.multiMonthColumns > 1 && "fc-breezy-wsy fc-breezy-EAo fc-breezy-KzJ fc-breezy-eSM fc-breezy-pKG")
		},
		timeGrid: {
			..._A,
			dayHeaderClass: dA,
			dayHeaderDividerClass: (e) => M("fc-breezy-zi1", e.options.allDaySlot ? "fc-breezy-EAo" : "fc-breezy-OFc fc-breezy-rf6"),
			dayCellClass: pA,
			dayCellBottomClass: mA,
			weekNumberHeaderClass: "fc-breezy-XpK fc-breezy-LMv",
			weekNumberHeaderInnerClass: (e) => M("fc-breezy-cGD fc-breezy-TFV fc-breezy-ZrE fc-breezy-t4l fc-breezy-Fvv fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK", e.hasNavLink && Uk, e.isNarrow ? "fc-breezy-a3B" : "fc-breezy-9yp"),
			allDayHeaderClass: "fc-breezy-XpK",
			allDayHeaderInnerClass: (e) => M("fc-breezy-rUb fc-breezy-mNS", e.isNarrow ? Pk : "fc-breezy-a3B"),
			allDayDividerClass: "fc-breezy-zi1 fc-breezy-OFc fc-breezy-rf6",
			slotHeaderClass: "fc-breezy-LMv",
			slotHeaderInnerClass: (e) => M("fc-breezy-eYX fc-breezy-GFf fc-breezy-2tF", e.isNarrow ? `fc-breezy-Cy2 ${Pk}` : "fc-breezy-uqG fc-breezy-a3B", e.isFirst && "fc-breezy-pps"),
			slotHeaderDividerClass: "fc-breezy-USt fc-breezy-tTN"
		},
		list: {
			listItemEventClass: (e) => M("fc-breezy-bCs fc-breezy-lqx fc-breezy-XpK fc-breezy-wwb", !e.isLast && "fc-breezy-zi1 fc-breezy-tTN", e.isInteractive ? Gk : Wk),
			listItemEventBeforeClass: "fc-breezy-5JF fc-breezy-lNM fc-breezy-AAA",
			listItemEventInnerClass: "fc-breezy-dl1 fc-breezy-1sP fc-breezy-XpK fc-breezy-wwb fc-breezy-9yp",
			listItemEventTimeClass: "fc-breezy-yi0 fc-breezy-roZ fc-breezy-kMV fc-breezy-TZ4 fc-breezy-pKG fc-breezy-IPx fc-breezy-t4l",
			listItemEventTitleClass: (e) => M("fc-breezy-1El fc-breezy-2KU fc-breezy-1OT fc-breezy-TZ4 fc-breezy-pKG fc-breezy-sI1", e.event.url && "fc-breezy-Ogp"),
			noEventsClass: "fc-breezy-1El fc-breezy-dl1 fc-breezy-sgX fc-breezy-XpK fc-breezy-E9P",
			noEventsInnerClass: "fc-breezy-P9h fc-breezy-t4l"
		},
		resourceDayGrid: { resourceDayHeaderClass: (e) => e.isMajor ? "fc-breezy-OFc" : "fc-breezy-EAo" },
		resourceTimeGrid: { resourceDayHeaderClass: (e) => e.isMajor ? "fc-breezy-OFc" : "fc-breezy-tTN" },
		timeline: {
			rowEventClass: (e) => e.isEnd && "fc-breezy-9hC",
			rowEventInnerClass: (e) => e.options.eventOverlap ? "fc-breezy-Jhn" : "fc-breezy-dl6",
			rowMoreLinkClass: `fc-breezy-9hC fc-breezy-Ika fc-breezy-wsy fc-breezy-d0j fc-breezy-4MR fc-breezy-KzJ ${Vk} fc-breezy-vwH`,
			rowMoreLinkInnerClass: "fc-breezy-iS4 fc-breezy-sI1 fc-breezy-a3B",
			slotHeaderAlign: (e) => e.isTime ? "start" : "center",
			slotHeaderClass: (e) => M(e.level > 0 && "fc-breezy-wsy fc-breezy-tTN", "fc-breezy-LMv"),
			slotHeaderInnerClass: (e) => M("fc-breezy-GFf fc-breezy-2tF fc-breezy-a3B", e.isTime && M("fc-breezy-eYX fc-breezy-OAt", e.isFirst && "fc-breezy-pps"), e.hasNavLink && "fc-breezy-Eu0"),
			slotHeaderDividerClass: "fc-breezy-zi1 fc-breezy-OFc fc-breezy-qNs"
		}
	}
};
function yA(e) {
	return D("svg", {
		className: e,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		children: D("path", {
			fillRule: "evenodd",
			d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
			clipRule: "evenodd"
		})
	});
}
function bA(e) {
	return D("svg", {
		className: e,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		children: D("path", {
			fillRule: "evenodd",
			d: "M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z",
			clipRule: "evenodd"
		})
	});
}
function xA(e) {
	return D("svg", {
		className: e,
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		children: D("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
	});
}
//#endregion
//#region node_modules/fullcalendar/themes/classic/index.js
var SA = "fc-classic-vQz", CA = "fc-classic-0Bj", wA = "fc-classic-uqo", TA = "fc-classic-3Xj", EA = "fc-classic-fFh", DA = "fc-classic-zIi", OA = "fc-classic-BaR", kA = "fc-classic-4yP", AA = `${kA} fc-classic-tCP fc-classic-8gz`, jA = "fc-classic-Ubk", MA = `${jA} fc-classic-OIx fc-classic-28F`, NA = "fc-classic-XUJ", PA = "fc-classic-1EY fc-classic-pps fc-classic-vs6", FA = `${PA} fc-classic-AWB fc-classic-hza`, IA = `${PA} fc-classic-MaV fc-classic-uuA`, LA = "fc-classic-1EY fc-classic-3wQ fc-classic-wsy fc-classic-lNM fc-classic-Jk3 fc-classic-AAA", RA = `${LA} fc-classic-ERR fc-classic-Dq8`, zA = `${LA} fc-classic-1V6 fc-classic-F99`, BA = (e) => M("fc-classic-wsy", e.isMajor ? "fc-classic-C0k" : "fc-classic-C1x", e.isDisabled ? "fc-classic-iYS" : e.isToday && "fc-classic-hbn"), VA = (e) => M("fc-classic-wsy fc-classic-C1x", e.isMinor && "fc-classic-TN2"), HA = {
	listItemEventClass: (e) => M("fc-classic-Ika fc-classic-7A6 fc-classic-Fvv", e.isNarrow ? "fc-classic-148" : "fc-classic-cKZ", e.isSelected ? M("fc-classic-k3f", e.isDragging && "fc-classic-qNs") : e.isInteractive ? AA : kA),
	listItemEventBeforeClass: (e) => M("fc-classic-Mjo", e.isNarrow ? "fc-classic-148" : "fc-classic-rVY"),
	listItemEventInnerClass: (e) => M("fc-classic-dl1 fc-classic-1sP fc-classic-XpK fc-classic-z5u fc-classic-aTF", e.isNarrow ? SA : "fc-classic-a3B"),
	listItemEventTimeClass: "fc-classic-F1o fc-classic-TZ4 fc-classic-pKG fc-classic-1Zl",
	listItemEventTitleClass: "fc-classic-F1o fc-classic-DIS fc-classic-TZ4 fc-classic-pKG fc-classic-OLq",
	rowEventClass: (e) => M(e.isStart && M("fc-classic-kmj", e.isNarrow ? "fc-classic-qvL" : "fc-classic-Jzj"), e.isEnd && M("fc-classic-Skl", e.isNarrow ? "fc-classic-9hC" : "fc-classic-3e1")),
	rowEventInnerClass: "fc-classic-z5u fc-classic-aTF",
	rowEventTimeClass: "fc-classic-F1o",
	rowEventTitleClass: "fc-classic-F1o",
	rowMoreLinkClass: (e) => M("fc-classic-Ika fc-classic-wsy fc-classic-Fvv", e.isNarrow ? "fc-classic-148 fc-classic-0Pr" : "fc-classic-sI7 fc-classic-cKZ fc-classic-d0j", AA),
	rowMoreLinkInnerClass: (e) => M("fc-classic-7A6", e.isNarrow ? SA : "fc-classic-a3B")
}, UA = "fc-classic-vnf fc-classic-mAY", WA = "fc-classic-rVY fc-classic-XM3 fc-classic-rif fc-classic-lMo", GA = {
	name: "theme-classic",
	optionDefaults: {
		className: "fc-classic-yth fc-classic-n5m",
		viewClass: (e) => {
			let t = e.options.headerToolbar || !e.borderlessTop, n = e.options.footerToolbar || !e.borderlessBottom, r = !e.borderlessX;
			return M("fc-classic-Jk3 fc-classic-GAX fc-classic-C1x", t && "fc-classic-ku3", n && "fc-classic-zi1", r && "fc-classic-1Wx");
		},
		toolbarClass: (e) => M("fc-classic-dl1 fc-classic-1sP fc-classic-dNl fc-classic-XpK fc-classic-N2M fc-classic-wwb", e.borderlessX && "fc-classic-Apf"),
		toolbarSectionClass: "fc-classic-yi0 fc-classic-dl1 fc-classic-1sP fc-classic-XpK fc-classic-wwb",
		toolbarTitleClass: "fc-classic-AVD fc-classic-DIS",
		buttonGroupClass: "fc-classic-dl1 fc-classic-1sP fc-classic-XpK",
		buttonClass: (e) => M("fc-classic-dl6 fc-classic-1Wx fc-classic-dl1 fc-classic-1sP fc-classic-XpK fc-classic-sOR fc-classic-lYz fc-classic-vwH fc-classic-9yp fc-classic-RnT fc-classic-cfp fc-classic-Z9U", e.isIconOnly ? "fc-classic-Eaq" : "fc-classic-Apf", e.buttonGroup ? "fc-classic-uk6 fc-classic-Tuc" : "fc-classic-Ig4", e.isSelected ? "fc-classic-rQI fc-classic-Adi" : "fc-classic-vXO fc-classic-bqK fc-classic-aIH fc-classic-nQ5 fc-classic-JWq fc-classic-9Rj fc-classic-5ky", e.isDisabled && "fc-classic-Q3Z fc-classic-3Lc"),
		buttons: {
			prev: { iconContent: () => KA(`${NA} fc-classic-asP`) },
			next: { iconContent: () => KA(`${NA} fc-classic-jmT fc-classic-jY6`) },
			prevYear: { iconContent: () => qA(`${NA} fc-classic-asP`) },
			nextYear: { iconContent: () => qA(`${NA} fc-classic-jmT fc-classic-jY6`) }
		},
		eventColor: "var(--fc-classic-event)",
		eventContrastColor: "var(--fc-classic-event-contrast)",
		eventClass: (e) => M(e.isDragging && "fc-classic-n5m", e.event.url && "fc-classic-JiE", e.isSelected ? M(CA, e.isDragging ? "fc-classic-1kP" : "fc-classic-tkw") : wA, DA),
		backgroundEventColor: "var(--fc-classic-background-event)",
		backgroundEventClass: "fc-classic-hsC fc-classic-jsy fc-classic-DO7",
		backgroundEventTitleClass: (e) => M("fc-classic-MGT fc-classic-L1Y", e.isNarrow ? `fc-classic-KUX ${SA}` : "fc-classic-XJa fc-classic-a3B"),
		listItemEventClass: "fc-classic-XpK",
		listItemEventBeforeClass: "fc-classic-lNM fc-classic-AAA",
		listItemEventInnerClass: "fc-classic-GAX",
		blockEventClass: (e) => M("fc-classic-bCs fc-classic-eYX fc-classic-d0j fc-classic-DO7 fc-classic-YjJ fc-classic-vwH", e.isDragging && !e.isSelected && "fc-classic-iTG", TA),
		blockEventInnerClass: "fc-classic-i9F fc-classic-cfp",
		blockEventTimeClass: "fc-classic-TZ4 fc-classic-pKG fc-classic-1Zl",
		blockEventTitleClass: "fc-classic-TZ4 fc-classic-pKG fc-classic-OLq",
		rowEventClass: (e) => M("fc-classic-Ika fc-classic-JIC", e.isStart && "fc-classic-3J4", e.isEnd && "fc-classic-USt"),
		rowEventBeforeClass: (e) => M(e.isStartResizable && M(e.isSelected ? RA : FA, "fc-classic-11a")),
		rowEventAfterClass: (e) => M(e.isEndResizable && M(e.isSelected ? RA : FA, "fc-classic-bEw")),
		rowEventInnerClass: (e) => M("fc-classic-dl1 fc-classic-1sP fc-classic-XpK", e.isNarrow ? SA : "fc-classic-a3B"),
		rowEventTimeClass: "fc-classic-DIS",
		columnEventClass: (e) => M("fc-classic-1Wx fc-classic-A3h fc-classic-yKG", e.isStart && "fc-classic-ku3 fc-classic-Z7Q", e.isEnd && "fc-classic-Ika fc-classic-zi1 fc-classic-2qh"),
		columnEventBeforeClass: (e) => M(e.isStartResizable && M(e.isSelected ? zA : IA, "fc-classic-YDC")),
		columnEventAfterClass: (e) => M(e.isEndResizable && M(e.isSelected ? zA : IA, "fc-classic-fJL")),
		columnEventInnerClass: (e) => M("fc-classic-dl1", e.isShort ? "fc-classic-KUX fc-classic-1sP fc-classic-XpK fc-classic-NWN" : "fc-classic-oQ2 fc-classic-sgX"),
		columnEventTimeClass: (e) => M(!e.isShort && "fc-classic-166", SA),
		columnEventTitleClass: (e) => M(!e.isShort && "fc-classic-2rx", e.isShort || e.isNarrow ? SA : "fc-classic-a3B"),
		moreLinkClass: `${wA} ${DA}`,
		moreLinkInnerClass: "fc-classic-TZ4 fc-classic-pKG",
		columnMoreLinkClass: `fc-classic-Ika fc-classic-Fvv fc-classic-wsy fc-classic-d0j fc-classic-4MR ${OA} fc-classic-vwH fc-classic-A3h fc-classic-yKG ${TA}`,
		columnMoreLinkInnerClass: (e) => M("fc-classic-KUX", e.isNarrow ? SA : "fc-classic-a3B"),
		dayHeaderAlign: (e) => e.inPopover ? "start" : "center",
		dayHeaderClass: (e) => M("fc-classic-E9P", e.isDisabled && "fc-classic-iYS", e.inPopover ? "fc-classic-zi1 fc-classic-C1x fc-classic-k3f" : M("fc-classic-wsy", e.isMajor ? "fc-classic-C0k" : "fc-classic-C1x")),
		dayHeaderInnerClass: (e) => M("fc-classic-rVY fc-classic-cJ3 fc-classic-dl1 fc-classic-sgX", e.isNarrow ? SA : "fc-classic-9yp"),
		dayHeaderDividerClass: "fc-classic-zi1 fc-classic-C1x",
		dayCellClass: BA,
		dayCellTopClass: (e) => M(e.isNarrow ? "fc-classic-toR" : "fc-classic-84e", "fc-classic-dl1 fc-classic-1sP fc-classic-LMv"),
		dayCellTopInnerClass: (e) => M("fc-classic-rVY fc-classic-TZ4", e.isNarrow ? `fc-classic-cJ3 ${SA}` : "fc-classic-V9v fc-classic-9yp", e.isOther && "fc-classic-taq", e.monthText && "fc-classic-DIS"),
		dayCellInnerClass: (e) => M(e.inPopover && "fc-classic-3N5"),
		popoverClass: "fc-classic-Jk3 fc-classic-GAX fc-classic-wsy fc-classic-C1x fc-classic-tkw fc-classic-aNc fc-classic-n5m",
		popoverCloseClass: `fc-classic-bCs fc-classic-1EY fc-classic-2ik fc-classic-2w8 ${wA} ${DA} fc-classic-Z9U`,
		popoverCloseContent: () => JA("fc-classic-XUJ fc-classic-9yp fc-classic-mAY"),
		dayLaneClass: BA,
		dayLaneInnerClass: (e) => e.isStack ? "fc-classic-gMS" : e.isNarrow ? "fc-classic-148" : "fc-classic-Jzj fc-classic-B3G",
		slotLaneClass: VA,
		listDayHeaderClass: "fc-classic-zi1 fc-classic-C1x fc-classic-SDU fc-classic-nHS fc-classic-dl1 fc-classic-1sP fc-classic-XpK fc-classic-N2M",
		listDayHeaderInnerClass: "fc-classic-Apf fc-classic-dl6 fc-classic-9yp fc-classic-DIS",
		singleMonthClass: (e) => M(e.multiMonthColumns > 1 && "fc-classic-jD5", e.multiMonthColumns === 1 && !e.isLast && "fc-classic-zi1 fc-classic-C1x"),
		singleMonthHeaderClass: (e) => M(e.multiMonthColumns > 1 ? "fc-classic-cM0" : "fc-classic-dl6 fc-classic-zi1 fc-classic-C1x fc-classic-Jk3", "fc-classic-XpK"),
		singleMonthHeaderInnerClass: "fc-classic-1Po fc-classic-DIS",
		tableHeaderClass: "fc-classic-Jk3",
		fillerClass: "fc-classic-wsy fc-classic-C1x fc-classic-lMo",
		dayHeaderRowClass: "fc-classic-wsy fc-classic-C1x",
		dayRowClass: "fc-classic-wsy fc-classic-C1x",
		slotHeaderRowClass: "fc-classic-wsy fc-classic-C1x",
		slotHeaderClass: VA,
		navLinkClass: `fc-classic-Eu0 ${wA} ${EA} ${DA}`,
		inlineWeekNumberClass: (e) => M("fc-classic-1EY fc-classic-n9G fc-classic-rbS fc-classic-C2g fc-classic-KUX fc-classic-HXA fc-classic-m9h fc-classic-k3f", e.isNarrow ? SA : "fc-classic-9yp"),
		nonBusinessHoursClass: "fc-classic-iYS",
		highlightClass: "fc-classic-hLU",
		resourceDayHeaderAlign: "center",
		resourceDayHeaderClass: (e) => M("fc-classic-wsy", e.isMajor ? "fc-classic-C0k" : "fc-classic-C1x"),
		resourceDayHeaderInnerClass: (e) => M("fc-classic-rVY fc-classic-cJ3 fc-classic-dl1 fc-classic-sgX", e.isNarrow ? SA : "fc-classic-9yp"),
		resourceColumnHeaderClass: "fc-classic-wsy fc-classic-C1x fc-classic-E9P",
		resourceColumnHeaderInnerClass: "fc-classic-bvX fc-classic-9yp",
		resourceColumnResizerClass: "fc-classic-1EY fc-classic-AWB fc-classic-4Tv fc-classic-dnf",
		resourceGroupHeaderClass: "fc-classic-wsy fc-classic-C1x fc-classic-k3f",
		resourceGroupHeaderInnerClass: "fc-classic-bvX fc-classic-9yp",
		resourceCellClass: "fc-classic-wsy fc-classic-C1x",
		resourceCellInnerClass: "fc-classic-bvX fc-classic-9yp",
		resourceIndentClass: "fc-classic-Mde fc-classic-kp0 fc-classic-E9P",
		resourceExpanderClass: `fc-classic-bCs ${wA} ${DA}`,
		resourceExpanderContent: (e) => e.isExpanded ? XA(UA) : YA(UA),
		resourceHeaderRowClass: "fc-classic-wsy fc-classic-C1x",
		resourceRowClass: "fc-classic-wsy fc-classic-C1x",
		resourceColumnDividerClass: "fc-classic-1Wx fc-classic-C1x fc-classic-a7i fc-classic-k3f",
		resourceGroupLaneClass: "fc-classic-wsy fc-classic-C1x fc-classic-k3f",
		resourceLaneClass: "fc-classic-wsy fc-classic-C1x",
		resourceLaneBottomClass: (e) => e.options.eventOverlap && "fc-classic-zrJ",
		timelineBottomClass: "fc-classic-zrJ"
	},
	views: {
		dayGrid: {
			...HA,
			dayCellBottomClass: "fc-classic-toR"
		},
		multiMonth: {
			...HA,
			dayCellBottomClass: "fc-classic-toR",
			tableClass: (e) => M(e.multiMonthColumns > 1 && "fc-classic-C1x fc-classic-wsy")
		},
		timeGrid: {
			...HA,
			dayCellBottomClass: "fc-classic-mhE",
			weekNumberHeaderClass: "fc-classic-XpK fc-classic-LMv",
			weekNumberHeaderInnerClass: (e) => M("fc-classic-rVY fc-classic-cJ3", e.isNarrow ? SA : "fc-classic-9yp"),
			allDayHeaderClass: "fc-classic-XpK fc-classic-LMv",
			allDayHeaderInnerClass: (e) => M("fc-classic-rVY fc-classic-2tF fc-classic-2HE", e.isNarrow ? SA : "fc-classic-9yp"),
			allDayDividerClass: "fc-classic-JIC fc-classic-C1x fc-classic-8ub fc-classic-k3f",
			slotHeaderClass: "fc-classic-LMv",
			slotHeaderInnerClass: (e) => M("fc-classic-rVY fc-classic-cJ3", e.isNarrow ? SA : "fc-classic-9yp"),
			slotHeaderDividerClass: "fc-classic-USt fc-classic-C1x",
			nowIndicatorHeaderClass: "fc-classic-rbS fc-classic-a10 fc-classic-XM3 fc-classic-rif fc-classic-jIH fc-classic-0qY",
			nowIndicatorLineClass: "fc-classic-ku3 fc-classic-sYT"
		},
		list: {
			listDayClass: (e) => M(!e.isLast && "fc-classic-zi1 fc-classic-C1x"),
			listItemEventClass: (e) => M("fc-classic-bCs fc-classic-Apf fc-classic-dl6 fc-classic-wwb fc-classic-ku3 fc-classic-C1x", e.isInteractive ? M(MA, EA) : jA),
			listItemEventBeforeClass: "fc-classic-GOm",
			listItemEventInnerClass: "fc-classic-eF2",
			listItemEventTimeClass: "fc-classic-88I fc-classic-yi0 fc-classic-roZ fc-classic-kMV fc-classic-TZ4 fc-classic-pKG fc-classic-IPx fc-classic-9yp",
			listItemEventTitleClass: (e) => M("fc-classic-1El fc-classic-2KU fc-classic-TZ4 fc-classic-pKG fc-classic-9yp", e.event.url && "fc-classic-Ogp"),
			noEventsClass: "fc-classic-k3f fc-classic-dl1 fc-classic-sgX fc-classic-XpK fc-classic-E9P",
			noEventsInnerClass: "fc-classic-OUe fc-classic-jGI fc-classic-P9h"
		},
		timeline: {
			rowEventClass: (e) => M(e.isEnd && "fc-classic-9hC", "fc-classic-XpK"),
			rowEventBeforeClass: (e) => !e.isStart && `${WA} fc-classic-Bda fc-classic-5JV`,
			rowEventAfterClass: (e) => !e.isEnd && `${WA} fc-classic-hhi fc-classic-LaM`,
			rowEventInnerClass: (e) => e.options.eventOverlap ? "fc-classic-2rx" : "fc-classic-End",
			rowEventTimeClass: "fc-classic-oQ2",
			rowEventTitleClass: "fc-classic-oQ2",
			rowMoreLinkClass: `fc-classic-9hC fc-classic-Ika fc-classic-wsy fc-classic-d0j fc-classic-4MR ${OA} fc-classic-vwH`,
			rowMoreLinkInnerClass: "fc-classic-KUX fc-classic-a3B",
			slotHeaderAlign: (e) => e.isTime ? "start" : "center",
			slotHeaderClass: (e) => M("fc-classic-E9P", !e.level && "fc-classic-pKG"),
			slotHeaderInnerClass: (e) => M("fc-classic-fn8 fc-classic-V9v fc-classic-9yp", e.hasNavLink && "fc-classic-Eu0"),
			slotHeaderDividerClass: "fc-classic-zi1 fc-classic-C1x",
			nowIndicatorHeaderClass: "fc-classic-n9G fc-classic-J04 fc-classic-ybF fc-classic-Pqk fc-classic-bLA fc-classic-sYT",
			nowIndicatorLineClass: "fc-classic-3J4 fc-classic-sYT"
		}
	}
};
function KA(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: D("polyline", { points: "15 18 9 12 15 6" })
	});
}
function qA(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [D("polyline", { points: "11 17 6 12 11 7" }), D("polyline", { points: "18 17 13 12 18 7" })]
	});
}
function JA(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [D("line", {
			x1: "18",
			y1: "6",
			x2: "6",
			y2: "18"
		}), D("line", {
			x1: "6",
			y1: "6",
			x2: "18",
			y2: "18"
		})]
	});
}
function YA(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			D("rect", {
				x: "3",
				y: "3",
				width: "18",
				height: "18",
				rx: "2",
				ry: "2"
			}),
			D("line", {
				x1: "12",
				y1: "8",
				x2: "12",
				y2: "16"
			}),
			D("line", {
				x1: "8",
				y1: "12",
				x2: "16",
				y2: "12"
			})
		]
	});
}
function XA(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [D("rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "2",
			ry: "2"
		}), D("line", {
			x1: "8",
			y1: "12",
			x2: "16",
			y2: "12"
		})]
	});
}
//#endregion
//#region node_modules/fullcalendar/themes/forma/index.js
var ZA = "fc-forma-vQz", QA = "fc-forma-0Bj", $A = "fc-forma-uqo", ej = "fc-forma-3Xj", tj = "fc-forma-fFh", nj = "fc-forma-Fmy", rj = `${$A} ${nj}`, ij = M("fc-forma-mr2", "fc-forma-Vyz", "fc-forma-pgt"), aj = `fc-forma-Wv4 fc-forma-mcn fc-forma-0sn ${rj}`, oj = "fc-forma-ShG", sj = `${oj} fc-forma-nge fc-forma-rKU`, cj = `${sj} fc-forma-wsy fc-forma-d0j ${rj}`, lj = `${sj} fc-forma-wsy fc-forma-d0j ${rj}`, uj = `fc-forma-Wv4 fc-forma-wsy fc-forma-BST ${rj} fc-forma-07j`, dj = "fc-forma-7I6 fc-forma-TSf", fj = `${dj} fc-forma-2Qu fc-forma-lgp fc-forma-PQx`, pj = `${fj} fc-forma-wsy fc-forma-d0j ${rj} ${ej}`, mj = `${sj} fc-forma-wsy fc-forma-tfB fc-forma-cBw ${rj}`, hj = "fc-forma-XUJ", gj = "fc-forma-i6P", _j = M(gj, "fc-forma-SWh", "fc-forma-RHy"), vj = "fc-forma-lrD", yj = M(vj, "fc-forma-rom", "fc-forma-DUE"), bj = "fc-forma-V1v fc-forma-sS4 fc-forma-Di9", xj = "fc-forma-1EY fc-forma-pps fc-forma-vs6", Sj = `${xj} fc-forma-AWB fc-forma-hza`, Cj = `${xj} fc-forma-MaV fc-forma-uuA`, wj = "fc-forma-1EY fc-forma-3wQ fc-forma-wsy fc-forma-lNM fc-forma-AAA fc-forma-RJG", Tj = `${wj} fc-forma-ERR fc-forma-Dq8`, Ej = `${wj} fc-forma-1V6 fc-forma-F99`, Dj = "fc-forma-jgW", Oj = (e) => M(!e.isNarrow && "fc-forma-toR"), kj = (e) => M("fc-forma-wsy fc-forma-tfB", e.isMinor && "fc-forma-TN2"), Aj = {
	listItemEventClass: (e) => M("fc-forma-Ika fc-forma-7A6 fc-forma-Fvv", e.isNarrow ? "fc-forma-148" : "fc-forma-cKZ", e.isSelected ? "fc-forma-Wv4" : e.isInteractive ? sj : oj),
	listItemEventBeforeClass: (e) => M("fc-forma-5JF fc-forma-lNM fc-forma-AAA", e.isNarrow ? "fc-forma-Jzj" : "fc-forma-Wga"),
	listItemEventInnerClass: (e) => e.isNarrow ? `fc-forma-z5u ${ZA}` : "fc-forma-2rx fc-forma-a3B",
	listItemEventTimeClass: (e) => M(e.isNarrow ? "fc-forma-a7i" : "fc-forma-C2j", "fc-forma-TZ4 fc-forma-pKG fc-forma-1Zl"),
	listItemEventTitleClass: (e) => M(e.isNarrow ? "fc-forma-oQ2" : "fc-forma-aCI", "fc-forma-DIS fc-forma-TZ4 fc-forma-pKG fc-forma-OLq"),
	rowEventClass: (e) => M(e.isEnd && (e.isNarrow ? "fc-forma-9hC" : "fc-forma-3e1")),
	rowEventInnerClass: (e) => e.isNarrow ? "fc-forma-z5u" : "fc-forma-2rx",
	rowMoreLinkClass: (e) => M("fc-forma-Ika fc-forma-wsy fc-forma-Fvv", e.isNarrow ? "fc-forma-148 fc-forma-Baf" : "fc-forma-cKZ fc-forma-d0j fc-forma-sI7", sj),
	rowMoreLinkInnerClass: (e) => e.isNarrow ? `fc-forma-oQ2 fc-forma-z5u ${ZA}` : "fc-forma-aCI fc-forma-2rx fc-forma-a3B"
}, jj = {
	name: "theme-forma",
	optionDefaults: {
		className: (e) => M("fc-forma-b7K fc-forma-n5m", !(e.borderlessTop || e.borderlessBottom || e.borderlessX) && "fc-forma-Fvv fc-forma-eSM"),
		viewClass: (e) => {
			let t = !e.options.headerToolbar && !e.borderlessTop, n = !e.options.footerToolbar && !e.borderlessBottom, r = !e.borderlessX;
			return M("fc-forma-RJG fc-forma-tfB", t && "fc-forma-ku3", n && "fc-forma-zi1", r && "fc-forma-1Wx", t && r && "fc-forma-Z7Q", n && r && "fc-forma-2qh", !e.isHeightAuto && "fc-forma-pKG");
		},
		toolbarClass: (e) => M("fc-forma-IJJ fc-forma-dl1 fc-forma-1sP fc-forma-dNl fc-forma-XpK fc-forma-N2M fc-forma-wwb", "fc-forma-RJG fc-forma-tfB", !e.borderlessX && "fc-forma-1Wx"),
		headerToolbarClass: (e) => M("fc-forma-zi1", !e.borderlessTop && "fc-forma-ku3", !(e.borderlessTop || e.borderlessX) && "fc-forma-Z7Q"),
		footerToolbarClass: (e) => M("fc-forma-ku3", !e.borderlessBottom && "fc-forma-zi1", !(e.borderlessBottom || e.borderlessX) && "fc-forma-2qh"),
		toolbarSectionClass: "fc-forma-yi0 fc-forma-dl1 fc-forma-1sP fc-forma-XpK fc-forma-wwb",
		toolbarTitleClass: "fc-forma-2rA",
		buttonGroupClass: "fc-forma-dl1 fc-forma-1sP fc-forma-XpK",
		buttonClass: (e) => M("fc-forma-bCs fc-forma-End fc-forma-Fvv fc-forma-dl1 fc-forma-1sP fc-forma-XpK fc-forma-9yp fc-forma-Z9U", e.isIconOnly ? "fc-forma-Nca" : "fc-forma-Apf", e.isIconOnly ? cj : e.buttonGroup?.hasSelection ? e.isSelected ? uj : lj : e.isPrimary ? pj : mj),
		buttons: {
			prev: { iconContent: () => Mj(M(hj, "fc-forma-z44 fc-forma-keW")) },
			next: { iconContent: () => Mj(M(hj, "fc-forma-KxI fc-forma-ZW3")) },
			prevYear: { iconContent: () => Nj(M(hj, "fc-forma-asP")) },
			nextYear: { iconContent: () => Nj(M(hj, "fc-forma-jmT fc-forma-jY6")) }
		},
		eventShortHeight: 50,
		eventColor: "var(--fc-forma-event)",
		eventContrastColor: "var(--fc-forma-event-contrast)",
		eventClass: (e) => M(e.isDragging && "fc-forma-n5m", e.event.url && "fc-forma-JiE", e.isSelected ? M(QA, e.isDragging && "fc-forma-1kP") : $A, nj),
		backgroundEventColor: "var(--fc-forma-background-event)",
		backgroundEventClass: "fc-forma-gTC fc-forma-jsy fc-forma-DO7",
		backgroundEventTitleClass: (e) => M("fc-forma-lMo fc-forma-L1Y", e.isNarrow ? `fc-forma-iS4 ${ZA}` : "fc-forma-3N5 fc-forma-a3B"),
		listItemEventClass: "fc-forma-XpK",
		listItemEventInnerClass: "fc-forma-b7K fc-forma-dl1 fc-forma-1sP fc-forma-XpK",
		blockEventClass: (e) => M("fc-forma-bCs fc-forma-eYX fc-forma-lNM fc-forma-vwH", e.isInteractive ? _j : gj, e.isDragging && !e.isSelected && "fc-forma-iTG", ej),
		blockEventTimeClass: "fc-forma-TZ4 fc-forma-pKG fc-forma-1Zl",
		blockEventTitleClass: "fc-forma-TZ4 fc-forma-pKG fc-forma-OLq",
		rowEventClass: (e) => M("fc-forma-Ika fc-forma-530 fc-forma-2dx fc-forma-XpK", e.isStart && "fc-forma-riO fc-forma-kmj", e.isEnd && "fc-forma-ZNR fc-forma-9wT fc-forma-Skl"),
		rowEventBeforeClass: (e) => M(e.isStartResizable ? M(e.isSelected ? Tj : Sj, "fc-forma-0fm") : !e.isStart && !e.isNarrow && M("fc-forma-Wga fc-forma-3wQ fc-forma-u78 fc-forma-8UH fc-forma-MlZ", "fc-forma-QX7 fc-forma-vk6")),
		rowEventAfterClass: (e) => M(e.isEndResizable ? M(e.isSelected ? Tj : Sj, "fc-forma-Tuc") : !e.isEnd && !e.isNarrow && M("fc-forma-KYn fc-forma-3wQ fc-forma-u78 fc-forma-lzW fc-forma-MlZ", "fc-forma-ABq fc-forma-qIw")),
		rowEventInnerClass: (e) => M("fc-forma-dl1 fc-forma-1sP fc-forma-XpK", e.isNarrow ? ZA : "fc-forma-a3B"),
		rowEventTimeClass: (e) => M("fc-forma-1OT", e.isNarrow ? "fc-forma-a7i" : "fc-forma-C2j"),
		rowEventTitleClass: (e) => e.isNarrow ? "fc-forma-oQ2" : "fc-forma-aCI",
		columnEventClass: (e) => M("fc-forma-riO fc-forma-ZNR fc-forma-9wT fc-forma-A3h fc-forma-c3P", e.isStart && "fc-forma-jVY fc-forma-Qex fc-forma-Z7Q", e.isEnd && "fc-forma-Ika fc-forma-K3J fc-forma-wZV fc-forma-2qh"),
		columnEventBeforeClass: (e) => M(e.isStartResizable && M(e.isSelected ? Ej : Cj, "fc-forma-YDC")),
		columnEventAfterClass: (e) => M(e.isEndResizable && M(e.isSelected ? Ej : Cj, "fc-forma-fJL")),
		columnEventInnerClass: (e) => M("fc-forma-dl1", e.isShort ? "fc-forma-1sP fc-forma-XpK fc-forma-iS4 fc-forma-NWN" : M("fc-forma-sgX", e.isNarrow ? "fc-forma-oQ2" : "fc-forma-aCI")),
		columnEventTimeClass: (e) => M(!e.isShort && (e.isNarrow ? "fc-forma-166" : "fc-forma-4dx"), ZA),
		columnEventTitleClass: (e) => M(!e.isShort && (e.isNarrow ? "fc-forma-2rx" : "fc-forma-Jhn"), e.isShort || e.isNarrow ? ZA : "fc-forma-a3B"),
		moreLinkClass: `${$A} ${nj}`,
		moreLinkInnerClass: "fc-forma-TZ4 fc-forma-pKG",
		columnMoreLinkClass: `fc-forma-Ika fc-forma-wsy fc-forma-d0j fc-forma-4MR fc-forma-Fvv ${ij} fc-forma-vwH fc-forma-A3h fc-forma-c3P ${ej}`,
		columnMoreLinkInnerClass: (e) => e.isNarrow ? `fc-forma-KUX ${ZA}` : "fc-forma-iS4 fc-forma-a3B",
		dayHeaderAlign: (e) => e.isNarrow ? "center" : "start",
		dayHeaderClass: (e) => M("fc-forma-E9P", e.isToday && !e.level && "fc-forma-eYX", e.isDisabled && "fc-forma-zNL", e.inPopover ? "fc-forma-zi1 fc-forma-tfB fc-forma-zNL" : M(e.isMajor ? "fc-forma-wsy fc-forma-BST" : !e.isNarrow && "fc-forma-wsy fc-forma-tfB")),
		dayHeaderInnerClass: (e) => M("fc-forma-3N5 fc-forma-dl1 fc-forma-sgX", e.isToday && e.level && "fc-forma-eYX", e.hasNavLink && `${sj} ${tj}`),
		dayHeaderContent: (e) => D(w, { children: [
			e.isToday && D("div", { className: "fc-forma-1EY fc-forma-n9G fc-forma-MaV fc-forma-tb8 fc-forma-Baf fc-forma-3Lc" }),
			e.dayNumberText && D("div", {
				className: M(e.isToday && "fc-forma-DIS", e.isNarrow ? "fc-forma-1Po" : "fc-forma-9ZS"),
				children: e.dayNumberText
			}),
			e.weekdayText && D("div", {
				className: "fc-forma-a3B",
				children: e.weekdayText
			})
		] }),
		dayCellClass: (e) => M("fc-forma-wsy", e.isMajor ? "fc-forma-BST" : "fc-forma-tfB", (e.isOther || e.isDisabled) && !e.options.businessHours && "fc-forma-zNL"),
		dayCellTopClass: (e) => M(e.isNarrow ? "fc-forma-toR" : "fc-forma-84e", "fc-forma-dl1 fc-forma-1sP", (e.isOther || e.isDisabled) && e.options.businessHours && "fc-forma-cOV"),
		dayCellTopInnerClass: (e) => M("fc-forma-dl1 fc-forma-1sP fc-forma-XpK fc-forma-E9P fc-forma-TZ4", e.isNarrow ? `fc-forma-SEP fc-forma-oM6 ${ZA}` : "fc-forma-V9v fc-forma-TFV fc-forma-9yp", e.isToday ? M("fc-forma-AAA", e.isNarrow ? "fc-forma-qvL" : "fc-forma-Wga", e.text === e.dayNumberText ? e.isNarrow ? "fc-forma-79F" : "fc-forma-ilz" : e.isNarrow ? "fc-forma-aCI" : "fc-forma-Nca", e.hasNavLink ? M(fj, ej) : dj) : M("fc-forma-Skl", e.isNarrow ? "fc-forma-aCI" : "fc-forma-Nca", e.hasNavLink && sj), e.monthText && "fc-forma-DIS"),
		dayCellInnerClass: (e) => M(e.inPopover && "fc-forma-3N5"),
		popoverFormat: {
			day: "numeric",
			weekday: "long"
		},
		popoverClass: "fc-forma-wsy fc-forma-tfB fc-forma-RJG fc-forma-b7K fc-forma-tkw fc-forma-aNc fc-forma-n5m",
		popoverCloseClass: `fc-forma-bCs fc-forma-1EY fc-forma-ZnE fc-forma-SyR fc-forma-iS4 fc-forma-Fvv ${sj} ${$A} ${nj} fc-forma-Z9U`,
		popoverCloseContent: () => Pj(`fc-forma-XUJ ${bj}`),
		dayLaneClass: (e) => M("fc-forma-wsy", e.isMajor ? "fc-forma-BST" : "fc-forma-tfB", e.isDisabled && "fc-forma-zNL"),
		dayLaneInnerClass: (e) => e.isStack ? "fc-forma-gMS" : e.isNarrow ? "fc-forma-148" : "fc-forma-Jzj fc-forma-B3G",
		slotLaneClass: kj,
		listDayClass: (e) => M(!e.isLast && "fc-forma-zi1 fc-forma-tfB", "fc-forma-dl1 fc-forma-1sP fc-forma-EF4"),
		listDayHeaderClass: (e) => M("fc-forma-yi0 fc-forma-vVE fc-forma-aHX fc-forma-IJJ fc-forma-dl1 fc-forma-sgX fc-forma-EF4", e.isToday && "fc-forma-iSi fc-forma-Baf"),
		listDayHeaderInnerClass: (e) => M("fc-forma-cJ3", e.level ? "fc-forma-a3B" : M("fc-forma-9ZS", e.isToday && "fc-forma-DIS"), e.hasNavLink && "fc-forma-Eu0"),
		listDayBodyClass: "fc-forma-1El fc-forma-2KU fc-forma-lqx fc-forma-Pms",
		singleMonthClass: (e) => M(e.multiMonthColumns > 1 && "fc-forma-jD5", e.multiMonthColumns === 1 && !e.isLast && "fc-forma-tfB fc-forma-zi1"),
		singleMonthHeaderClass: (e) => M(e.multiMonthColumns > 1 ? "fc-forma-cM0" : "fc-forma-dl6 fc-forma-zi1 fc-forma-tfB fc-forma-RJG", "fc-forma-XpK"),
		singleMonthHeaderInnerClass: (e) => M("fc-forma-aCI fc-forma-Fvv fc-forma-DIS", e.hasNavLink && sj, e.isNarrow ? "fc-forma-1Po" : "fc-forma-9ZS"),
		tableHeaderClass: "fc-forma-RJG",
		fillerClass: "fc-forma-wsy fc-forma-tfB fc-forma-lMo",
		dayNarrowWidth: 100,
		dayHeaderRowClass: "fc-forma-wsy fc-forma-tfB",
		dayRowClass: "fc-forma-wsy fc-forma-tfB",
		slotHeaderRowClass: "fc-forma-wsy fc-forma-tfB",
		slotHeaderClass: kj,
		navLinkClass: `${$A} ${nj}`,
		inlineWeekNumberClass: (e) => M("fc-forma-1EY fc-forma-iD1 fc-forma-TZ4 fc-forma-kmj", e.isNarrow ? `fc-forma-2ik fc-forma-SEP fc-forma-KUX ${ZA}` : "fc-forma-ZnE fc-forma-iS4 fc-forma-a3B", e.hasNavLink ? aj : "fc-forma-Wv4"),
		nonBusinessHoursClass: "fc-forma-zNL",
		highlightClass: "fc-forma-rRL",
		nowIndicatorLineClass: "fc-forma-CH7 fc-forma-qQW fc-forma-Baf",
		nowIndicatorDotClass: "fc-forma-aAW fc-forma-Vpk fc-forma-Baf fc-forma-63n fc-forma-AAA fc-forma-GBJ fc-forma-c3P",
		resourceDayHeaderClass: (e) => M("fc-forma-wsy", e.isMajor ? "fc-forma-BST" : "fc-forma-tfB"),
		resourceDayHeaderInnerClass: (e) => M("fc-forma-bvX fc-forma-dl1 fc-forma-sgX", e.isNarrow ? "fc-forma-a3B" : "fc-forma-9yp"),
		resourceColumnHeaderClass: "fc-forma-wsy fc-forma-tfB fc-forma-E9P",
		resourceColumnHeaderInnerClass: "fc-forma-bvX fc-forma-9yp",
		resourceColumnResizerClass: "fc-forma-1EY fc-forma-AWB fc-forma-4Tv fc-forma-dnf",
		resourceGroupHeaderClass: "fc-forma-wsy fc-forma-tfB fc-forma-Wv4",
		resourceGroupHeaderInnerClass: "fc-forma-bvX fc-forma-9yp",
		resourceCellClass: "fc-forma-wsy fc-forma-tfB",
		resourceCellInnerClass: "fc-forma-bvX fc-forma-9yp",
		resourceIndentClass: "fc-forma-Wga fc-forma-p9t fc-forma-E9P",
		resourceExpanderClass: `fc-forma-bCs fc-forma-KUX fc-forma-Fvv ${sj} ${$A} ${nj}`,
		resourceExpanderContent: (e) => Mj(M(`fc-forma-vnf ${bj}`, !e.isExpanded && "fc-forma-KxI fc-forma-ZW3")),
		resourceHeaderRowClass: "fc-forma-wsy fc-forma-tfB",
		resourceRowClass: "fc-forma-wsy fc-forma-tfB",
		resourceColumnDividerClass: "fc-forma-1Wx fc-forma-tfB fc-forma-a7i fc-forma-Wv4",
		resourceGroupLaneClass: "fc-forma-wsy fc-forma-tfB fc-forma-Wv4",
		resourceLaneClass: "fc-forma-wsy fc-forma-tfB",
		resourceLaneBottomClass: (e) => e.options.eventOverlap && "fc-forma-vYi",
		timelineBottomClass: "fc-forma-vYi"
	},
	views: {
		dayGrid: {
			...Aj,
			dayHeaderDividerClass: "fc-forma-zi1 fc-forma-tfB",
			dayCellBottomClass: Oj,
			backgroundEventInnerClass: "fc-forma-dl1 fc-forma-1sP fc-forma-LMv"
		},
		dayGridMonth: { dayHeaderFormat: { weekday: "long" } },
		multiMonth: {
			...Aj,
			dayHeaderDividerClass: (e) => M(e.multiMonthColumns === 1 && "fc-forma-zi1 fc-forma-tfB"),
			dayCellBottomClass: Oj,
			dayHeaderInnerClass: (e) => e.isNarrow && "fc-forma-V1v",
			tableBodyClass: (e) => M(e.multiMonthColumns > 1 && "fc-forma-wsy fc-forma-tfB fc-forma-Fvv fc-forma-pKG")
		},
		timeGrid: {
			...Aj,
			dayHeaderDividerClass: "fc-forma-zi1 fc-forma-tfB",
			dayCellBottomClass: Dj,
			dayHeaderAlign: "start",
			weekNumberHeaderClass: "fc-forma-RNn fc-forma-LMv",
			weekNumberHeaderInnerClass: (e) => M("fc-forma-gMS fc-forma-iS4 fc-forma-Fvv fc-forma-a3B", e.hasNavLink && sj),
			allDayHeaderClass: "fc-forma-XpK fc-forma-LMv",
			allDayHeaderInnerClass: (e) => M("fc-forma-bvX fc-forma-2HE", e.isNarrow ? ZA : "fc-forma-a3B"),
			allDayDividerClass: "fc-forma-zi1 fc-forma-tfB",
			slotHeaderClass: "fc-forma-LMv",
			slotHeaderInnerClass: (e) => M("fc-forma-bvX", e.isNarrow ? ZA : "fc-forma-a3B"),
			slotHeaderDividerClass: "fc-forma-USt fc-forma-tfB"
		},
		list: {
			listItemEventClass: (e) => M("fc-forma-bCs fc-forma-riO fc-forma-lNM fc-forma-IJJ fc-forma-Fvv", e.isInteractive ? yj : vj),
			listItemEventInnerClass: "fc-forma-tgZ fc-forma-9yp",
			listItemEventTimeClass: "fc-forma-yi0 fc-forma-roZ fc-forma-aHX fc-forma-TZ4 fc-forma-pKG fc-forma-IPx",
			listItemEventTitleClass: (e) => M("fc-forma-1El fc-forma-2KU fc-forma-TZ4 fc-forma-pKG fc-forma-C8a", e.event.url && "fc-forma-Ogp"),
			noEventsClass: "fc-forma-1El fc-forma-dl1 fc-forma-sgX fc-forma-XpK fc-forma-E9P",
			noEventsInnerClass: "fc-forma-P9h"
		},
		timeline: {
			rowEventClass: (e) => e.isEnd && "fc-forma-9hC",
			rowEventInnerClass: (e) => e.options.eventOverlap ? "fc-forma-s0x" : "fc-forma-dl6",
			rowMoreLinkClass: `fc-forma-9hC fc-forma-Ika fc-forma-Fvv fc-forma-wsy fc-forma-d0j fc-forma-4MR ${ij} fc-forma-vwH`,
			rowMoreLinkInnerClass: "fc-forma-aCI fc-forma-s0x fc-forma-a3B",
			slotHeaderAlign: (e) => e.isTime ? "start" : "center",
			slotHeaderClass: (e) => M("fc-forma-E9P", !e.level && "fc-forma-pKG"),
			slotHeaderInnerClass: (e) => M("fc-forma-bvX fc-forma-9yp", e.hasNavLink && "fc-forma-Eu0"),
			slotHeaderDividerClass: "fc-forma-zi1 fc-forma-tfB"
		}
	}
};
function Mj(e) {
	return D("svg", {
		className: e,
		xmlns: "http://www.w3.org/2000/svg",
		width: "20",
		height: "20",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		children: D("path", { d: "M15.8527 7.64582C16.0484 7.84073 16.0489 8.15731 15.854 8.35292L10.389 13.8374C10.1741 14.0531 9.82477 14.0531 9.60982 13.8374L4.14484 8.35292C3.94993 8.15731 3.95049 7.84073 4.1461 7.64582C4.34171 7.4509 4.65829 7.45147 4.85321 7.64708L9.99942 12.8117L15.1456 7.64708C15.3406 7.45147 15.6571 7.4509 15.8527 7.64582Z" })
	});
}
function Nj(e) {
	return D("svg", {
		className: e,
		xmlns: "http://www.w3.org/2000/svg",
		width: "20",
		height: "20",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		children: D("path", { d: "M11.3544 15.8527C11.1594 16.0484 10.8429 16.0489 10.6472 15.854L5.16276 10.389C4.94705 10.1741 4.94705 9.82477 5.16276 9.60982L10.6472 4.14484C10.8429 3.94993 11.1594 3.95049 11.3544 4.1461C11.5493 4.34171 11.5487 4.65829 11.3531 4.85321L6.18851 9.99942L11.3531 15.1456C11.5487 15.3406 11.5493 15.6571 11.3544 15.8527ZM15.3534 15.8527C15.1585 16.0484 14.8419 16.0489 14.6463 15.854L9.16178 10.389C8.94607 10.1741 8.94607 9.82477 9.16178 9.60982L14.6463 4.14484C14.8419 3.94993 15.1585 3.95049 15.3534 4.1461C15.5483 4.34171 15.5477 4.65829 15.3521 4.85321L10.1875 9.99942L15.3521 15.1456C15.5477 15.3406 15.5483 15.6571 15.3534 15.8527Z" })
	});
}
function Pj(e) {
	return D("svg", {
		className: e,
		xmlns: "http://www.w3.org/2000/svg",
		width: "20",
		height: "20",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		children: D("path", { d: "M4.08859 4.21569L4.14645 4.14645C4.32001 3.97288 4.58944 3.9536 4.78431 4.08859L4.85355 4.14645L10 9.293L15.1464 4.14645C15.32 3.97288 15.5894 3.9536 15.7843 4.08859L15.8536 4.14645C16.0271 4.32001 16.0464 4.58944 15.9114 4.78431L15.8536 4.85355L10.707 10L15.8536 15.1464C16.0271 15.32 16.0464 15.5894 15.9114 15.7843L15.8536 15.8536C15.68 16.0271 15.4106 16.0464 15.2157 15.9114L15.1464 15.8536L10 10.707L4.85355 15.8536C4.67999 16.0271 4.41056 16.0464 4.21569 15.9114L4.14645 15.8536C3.97288 15.68 3.9536 15.4106 4.08859 15.2157L4.14645 15.1464L9.293 10L4.14645 4.85355C3.97288 4.67999 3.9536 4.41056 4.08859 4.21569L4.14645 4.14645L4.08859 4.21569Z" })
	});
}
//#endregion
//#region node_modules/fullcalendar/themes/monarch/index.js
var Fj = "fc-monarch-vQz", Ij = "fc-monarch-x7S", Lj = "fc-monarch-sOR", Rj = "fc-monarch-a9l", zj = "fc-monarch-MJY", Bj = `${zj} ${Lj}`, Vj = M("fc-monarch-9LE", "fc-monarch-r63", "fc-monarch-ljX"), Hj = "fc-monarch-v08", Uj = "fc-monarch-JQh", Wj = `${Hj} fc-monarch-Yib fc-monarch-6MP`, Gj = `${Uj} fc-monarch-4Pp fc-monarch-Hsn`, Kj = `fc-monarch-y37 fc-monarch-bIt fc-monarch-SJz fc-monarch-MQC fc-monarch-wsy fc-monarch-d0j ${Bj} fc-monarch-07j`, qj = `${Wj} fc-monarch-wsy fc-monarch-d0j ${Bj} fc-monarch-07j`, Jj = `fc-monarch-zue fc-monarch-8ys fc-monarch-4bi fc-monarch-yEk fc-monarch-wsy fc-monarch-d0j ${Bj}`, Yj = "fc-monarch-XMK fc-monarch-c3e", Xj = `${Yj} fc-monarch-ISM fc-monarch-KwH ${Bj}`, Zj = `${Wj} fc-monarch-wsy fc-monarch-zOd ${Bj} fc-monarch-07j`, Qj = "fc-monarch-XUJ fc-monarch-PVh fc-monarch-zn9 fc-monarch-Bpp", $j = "fc-monarch-4os fc-monarch-CCH", eM = `${$j} fc-monarch-hbI fc-monarch-yo2`, tM = `${$j} fc-monarch-Yws fc-monarch-jc4 ${Bj}`, nM = "fc-monarch-JMv fc-monarch-rih fc-monarch-8El", rM = "fc-monarch-1EY fc-monarch-pps fc-monarch-vs6", iM = `${rM} fc-monarch-AWB fc-monarch-hza`, aM = `${rM} fc-monarch-MaV fc-monarch-uuA`, oM = "fc-monarch-1EY fc-monarch-3wQ fc-monarch-wsy fc-monarch-lNM fc-monarch-MAH fc-monarch-AAA", sM = `${oM} fc-monarch-ERR fc-monarch-Dq8`, cM = `${oM} fc-monarch-1V6 fc-monarch-F99`, lM = "fc-monarch-jgW", uM = (e) => M(!e.isNarrow && "fc-monarch-toR"), dM = {
	listItemEventClass: (e) => M("fc-monarch-Ika fc-monarch-7A6 fc-monarch-Fvv", e.isNarrow ? "fc-monarch-148" : "fc-monarch-cKZ"),
	listItemEventBeforeClass: (e) => M("fc-monarch-5JF", e.isNarrow ? "fc-monarch-Jzj" : "fc-monarch-Wga"),
	listItemEventInnerClass: (e) => e.isNarrow ? `fc-monarch-z5u ${Fj}` : "fc-monarch-2rx fc-monarch-a3B",
	listItemEventTimeClass: (e) => M(e.isNarrow ? "fc-monarch-a7i" : "fc-monarch-C2j", "fc-monarch-TZ4 fc-monarch-pKG fc-monarch-1Zl"),
	listItemEventTitleClass: (e) => M(e.isNarrow ? "fc-monarch-oQ2" : "fc-monarch-aCI", "fc-monarch-DIS fc-monarch-TZ4 fc-monarch-pKG fc-monarch-OLq"),
	rowEventClass: (e) => M(e.isStart && "fc-monarch-qvL", e.isEnd && "fc-monarch-9hC"),
	rowEventInnerClass: (e) => e.isNarrow ? "fc-monarch-z5u" : "fc-monarch-2rx",
	rowMoreLinkClass: (e) => M("fc-monarch-Ika fc-monarch-wsy fc-monarch-Fvv", e.isNarrow ? "fc-monarch-148 fc-monarch-yF0" : "fc-monarch-cKZ fc-monarch-d0j", Wj),
	rowMoreLinkInnerClass: (e) => e.isNarrow ? `fc-monarch-oQ2 fc-monarch-z5u ${Fj}` : "fc-monarch-aCI fc-monarch-2rx fc-monarch-a3B"
}, fM = {
	dayHeaderInnerClass: "fc-monarch-vUo",
	dayHeaderDividerClass: "fc-monarch-zi1 fc-monarch-jdl"
}, pM = {
	name: "theme-monarch",
	optionDefaults: {
		className: "fc-monarch-PVh fc-monarch-n5m",
		viewClass: (e) => {
			let t = !e.options.headerToolbar && !e.borderlessTop, n = !e.options.footerToolbar && !e.borderlessBottom, r = !e.borderlessX;
			return M("fc-monarch-MAH fc-monarch-jdl", t && "fc-monarch-ku3", n && "fc-monarch-zi1", r && "fc-monarch-1Wx", t && r && "fc-monarch-9hN", n && r && "fc-monarch-KxZ", !e.isHeightAuto && "fc-monarch-pKG");
		},
		toolbarClass: (e) => M("fc-monarch-lqx fc-monarch-dl1 fc-monarch-1sP fc-monarch-dNl fc-monarch-XpK fc-monarch-N2M fc-monarch-wwb", "fc-monarch-MAH fc-monarch-jdl", !e.borderlessX && "fc-monarch-1Wx"),
		headerToolbarClass: (e) => M(!e.borderlessTop && "fc-monarch-ku3", !(e.borderlessTop || e.borderlessX) && "fc-monarch-9hN"),
		footerToolbarClass: (e) => M(!e.borderlessBottom && "fc-monarch-zi1", !(e.borderlessBottom || e.borderlessX) && "fc-monarch-KxZ"),
		toolbarSectionClass: "fc-monarch-yi0 fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK fc-monarch-wwb",
		toolbarTitleClass: "fc-monarch-AVD fc-monarch-DIS",
		buttonGroupClass: (e) => M("fc-monarch-AAA fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK", e.hasSelection && "fc-monarch-wsy fc-monarch-jdl"),
		buttonClass: (e) => M("fc-monarch-8cT fc-monarch-AAA fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK fc-monarch-9yp fc-monarch-Z9U", e.isIconOnly ? "fc-monarch-Eaq" : "fc-monarch-5su", e.buttonGroup?.hasSelection && "fc-monarch-CH7", e.isIconOnly || e.buttonGroup?.hasSelection && !e.isSelected ? qj : e.isSelected ? Kj : e.isPrimary ? Jj : Zj),
		buttons: {
			prev: { iconContent: () => mM(M(Qj, "fc-monarch-z44 fc-monarch-keW")) },
			next: { iconContent: () => mM(M(Qj, "fc-monarch-KxI fc-monarch-ZW3")) },
			prevYear: { iconContent: () => hM(M(Qj, "fc-monarch-asP")) },
			nextYear: { iconContent: () => hM(M(Qj, "fc-monarch-jmT fc-monarch-jY6")) }
		},
		eventShortHeight: 50,
		eventColor: "var(--fc-monarch-event)",
		eventContrastColor: "var(--fc-monarch-event-contrast)",
		eventClass: (e) => M(e.isDragging && "fc-monarch-n5m", e.event.url && "fc-monarch-JiE", e.isSelected ? M(Ij, e.isDragging ? "fc-monarch-1kP" : "fc-monarch-tkw") : Lj, zj),
		backgroundEventColor: "var(--fc-monarch-tertiary)",
		backgroundEventClass: "fc-monarch-gTC fc-monarch-jsy fc-monarch-DO7",
		backgroundEventTitleClass: (e) => M("fc-monarch-lMo fc-monarch-L1Y", e.isNarrow ? `fc-monarch-aCI fc-monarch-End ${Fj}` : "fc-monarch-Nca fc-monarch-8cT fc-monarch-a3B"),
		listItemEventClass: (e) => M("fc-monarch-XpK", e.isSelected ? "fc-monarch-4Xm" : e.isInteractive ? Wj : Hj),
		listItemEventBeforeClass: "fc-monarch-AAA fc-monarch-lNM",
		listItemEventInnerClass: "fc-monarch-PVh fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK",
		blockEventClass: (e) => M("fc-monarch-bCs fc-monarch-eYX fc-monarch-d0j fc-monarch-DO7 fc-monarch-YjJ fc-monarch-Frw fc-monarch-vwH", e.isInteractive && "fc-monarch-st8", !e.isSelected && e.isDragging && "fc-monarch-iTG"),
		blockEventInnerClass: "fc-monarch-i9F fc-monarch-cfp",
		blockEventTimeClass: "fc-monarch-TZ4 fc-monarch-pKG",
		blockEventTitleClass: "fc-monarch-TZ4 fc-monarch-pKG",
		rowEventClass: (e) => M("fc-monarch-Ika fc-monarch-JIC", e.isStart ? "fc-monarch-3J4 fc-monarch-kmj" : !e.isNarrow && "fc-monarch-Mde", e.isEnd ? "fc-monarch-USt fc-monarch-Skl" : !e.isNarrow && "fc-monarch-FvP"),
		rowEventBeforeClass: (e) => M(e.isStartResizable ? M(e.isSelected ? sM : iM, "fc-monarch-11a") : !e.isStart && !e.isNarrow && "fc-monarch-1EY fc-monarch-0fm fc-monarch-hza fc-monarch-DGM fc-monarch-Uvq"),
		rowEventBeforeContent: (e) => !e.isStart && !e.isNarrow ? _M("fc-monarch-Pwv fc-monarch-jmT fc-monarch-jY6 fc-monarch-Mra") : D(w, {}),
		rowEventAfterClass: (e) => M(e.isEndResizable ? M(e.isSelected ? sM : iM, "fc-monarch-Tuc") : !e.isEnd && !e.isNarrow && "fc-monarch-1EY fc-monarch-eDA fc-monarch-hza fc-monarch-DGM fc-monarch-Uvq"),
		rowEventAfterContent: (e) => !e.isEnd && !e.isNarrow ? _M("fc-monarch-Pwv fc-monarch-asP fc-monarch-Mra") : D(w, {}),
		rowEventInnerClass: (e) => M("fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK", e.isNarrow ? Fj : "fc-monarch-a3B"),
		rowEventTimeClass: (e) => M("fc-monarch-DIS fc-monarch-1Zl", e.isNarrow ? "fc-monarch-a7i" : "fc-monarch-C2j"),
		rowEventTitleClass: (e) => M("fc-monarch-OLq", e.isNarrow ? "fc-monarch-oQ2" : "fc-monarch-aCI"),
		columnEventTitleSticky: !1,
		columnEventClass: (e) => M("fc-monarch-1Wx fc-monarch-A3h fc-monarch-SC5", e.isStart && "fc-monarch-ku3 fc-monarch-Z7Q", e.isEnd && "fc-monarch-Ika fc-monarch-zi1 fc-monarch-2qh"),
		columnEventBeforeClass: (e) => M(e.isStartResizable && M(e.isSelected ? cM : aM, "fc-monarch-YDC")),
		columnEventAfterClass: (e) => M(e.isEndResizable && M(e.isSelected ? cM : aM, "fc-monarch-fJL")),
		columnEventInnerClass: (e) => M("fc-monarch-dl1", e.isShort ? "fc-monarch-1sP fc-monarch-XpK fc-monarch-iS4 fc-monarch-NWN" : M("fc-monarch-sgX", e.isNarrow ? "fc-monarch-aCI fc-monarch-2rx" : "fc-monarch-Nca fc-monarch-Jhn"), e.isShort || e.isNarrow ? Fj : "fc-monarch-a3B"),
		columnEventTimeClass: (e) => M("fc-monarch-NPw fc-monarch-OLq", !e.isShort && (e.isNarrow ? "fc-monarch-8ub" : "fc-monarch-x96")),
		columnEventTitleClass: (e) => M("fc-monarch-1Zl", !e.isShort && (e.isNarrow ? "fc-monarch-2rx" : "fc-monarch-Jhn")),
		moreLinkClass: `${Lj} ${zj}`,
		moreLinkInnerClass: "fc-monarch-TZ4 fc-monarch-pKG",
		columnMoreLinkClass: `fc-monarch-Ika fc-monarch-wsy fc-monarch-d0j fc-monarch-4MR fc-monarch-Fvv ${Vj} fc-monarch-vwH fc-monarch-A3h fc-monarch-SC5`,
		columnMoreLinkInnerClass: (e) => e.isNarrow ? `fc-monarch-KUX ${Fj}` : "fc-monarch-iS4 fc-monarch-a3B",
		dayHeaderAlign: "center",
		dayHeaderClass: (e) => M("fc-monarch-E9P", e.isMajor && "fc-monarch-wsy fc-monarch-zOd", e.isDisabled && !e.inPopover && "fc-monarch-VTw"),
		dayHeaderInnerClass: "fc-monarch-bCs fc-monarch-9Rk fc-monarch-fn8 fc-monarch-dl1 fc-monarch-sgX fc-monarch-XpK fc-monarch-hS8",
		dayHeaderContent: (e) => D(w, { children: [e.weekdayText && D("div", {
			className: "fc-monarch-a3B fc-monarch-XHd fc-monarch-JMv",
			children: e.weekdayText
		}), e.dayNumberText && D("div", {
			className: M("fc-monarch-XE0 fc-monarch-AAA fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK fc-monarch-E9P", e.isNarrow ? "fc-monarch-IY5 fc-monarch-1Po" : "fc-monarch-n6w fc-monarch-9ZS", e.isToday ? e.hasNavLink ? tM : $j : e.hasNavLink && Gj, e.hasNavLink && `${Rj} ${zj}`),
			children: e.dayNumberText
		})] }),
		dayCellClass: (e) => M("fc-monarch-wsy", e.isMajor ? "fc-monarch-zOd" : "fc-monarch-jdl", e.isDisabled && "fc-monarch-VTw"),
		dayCellTopClass: (e) => M("fc-monarch-dl1 fc-monarch-1sP", e.isNarrow ? "fc-monarch-LMv fc-monarch-toR" : "fc-monarch-E9P fc-monarch-84e"),
		dayCellTopInnerClass: (e) => M("fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK fc-monarch-E9P fc-monarch-TZ4 fc-monarch-AAA", e.isNarrow ? `fc-monarch-TT0 fc-monarch-oM6 ${Fj}` : "fc-monarch-cGD fc-monarch-TFV fc-monarch-9yp", e.text === e.dayNumberText ? e.isNarrow ? "fc-monarch-79F" : "fc-monarch-ilz" : e.isNarrow ? "fc-monarch-aCI" : "fc-monarch-Nca", e.isToday ? e.hasNavLink ? eM : $j : e.hasNavLink && Wj, e.isOther && "fc-monarch-bZ0", e.monthText && "fc-monarch-DIS"),
		dayCellInnerClass: (e) => M(e.inPopover && "fc-monarch-3N5"),
		popoverFormat: {
			day: "numeric",
			weekday: "short"
		},
		popoverClass: "fc-monarch-wsy fc-monarch-jdl fc-monarch-hny fc-monarch-pKG fc-monarch-bvX fc-monarch-9Mx fc-monarch-sT2 fc-monarch-1kP fc-monarch-xcS fc-monarch-n5m",
		popoverCloseClass: `fc-monarch-bCs fc-monarch-1EY fc-monarch-SKv fc-monarch-aYN fc-monarch-n6w fc-monarch-AAA fc-monarch-XpK fc-monarch-E9P ${Wj} ${Lj} ${zj} fc-monarch-Z9U`,
		popoverCloseContent: () => gM(`fc-monarch-XUJ ${nM}`),
		dayLaneClass: (e) => M("fc-monarch-wsy", e.isMajor ? "fc-monarch-zOd" : "fc-monarch-jdl", e.isDisabled && "fc-monarch-VTw"),
		dayLaneInnerClass: (e) => e.isStack ? "fc-monarch-gMS" : e.isNarrow ? "fc-monarch-148" : "fc-monarch-Jzj fc-monarch-B3G",
		slotLaneClass: (e) => M("fc-monarch-wsy fc-monarch-jdl", e.isMinor && "fc-monarch-TN2"),
		listDayFormat: { day: "numeric" },
		listDayAltFormat: {
			month: "short",
			weekday: "short",
			forceCommas: !0
		},
		listDayClass: (e) => M(!e.isLast && "fc-monarch-zi1 fc-monarch-jdl", "fc-monarch-dl1 fc-monarch-1sP fc-monarch-EF4"),
		listDayHeaderClass: "fc-monarch-3N5 fc-monarch-yi0 fc-monarch-CjM fc-monarch-0i7 fc-monarch-l5b fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK fc-monarch-tgZ",
		listDayHeaderInnerClass: (e) => e.level ? M("fc-monarch-a3B fc-monarch-XHd", e.hasNavLink && "fc-monarch-Eu0") : M("fc-monarch-46Q fc-monarch-AAA fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK fc-monarch-9ZS", e.text === e.dayNumberText ? "fc-monarch-Dhe fc-monarch-E9P" : "fc-monarch-Apf", e.isToday ? e.hasNavLink ? eM : $j : e.hasNavLink && Wj),
		listDayBodyClass: "fc-monarch-1El fc-monarch-2KU fc-monarch-dl6 fc-monarch-NWN",
		singleMonthClass: (e) => M(e.multiMonthColumns > 1 && "fc-monarch-jD5", e.multiMonthColumns === 1 && !e.isLast && "fc-monarch-jdl fc-monarch-zi1"),
		singleMonthHeaderClass: (e) => M(e.multiMonthColumns > 1 ? "fc-monarch-lTO" : "fc-monarch-Jhn fc-monarch-zi1 fc-monarch-jdl fc-monarch-MAH", "fc-monarch-XpK"),
		singleMonthHeaderInnerClass: (e) => M("fc-monarch-Apf fc-monarch-Jhn fc-monarch-AAA fc-monarch-1Po fc-monarch-DIS", e.hasNavLink && Wj),
		tableHeaderClass: "fc-monarch-MAH",
		fillerClass: (e) => M("fc-monarch-lMo fc-monarch-wsy", e.inTableHeader ? "fc-monarch-d0j" : "fc-monarch-jdl"),
		dayNarrowWidth: 100,
		dayHeaderRowClass: "fc-monarch-wsy fc-monarch-jdl",
		dayRowClass: "fc-monarch-wsy fc-monarch-jdl",
		navLinkClass: `${Lj} ${zj}`,
		inlineWeekNumberClass: (e) => M("fc-monarch-1EY fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK fc-monarch-TZ4", e.isNarrow ? `fc-monarch-2ik fc-monarch-rbS fc-monarch-SEP fc-monarch-9ml fc-monarch-Utm fc-monarch-dOc ${Fj}` : "fc-monarch-1b8 fc-monarch-tHH fc-monarch-TFV fc-monarch-Nca fc-monarch-AAA fc-monarch-9yp", e.hasNavLink ? Xj : Yj),
		nonBusinessHoursClass: "fc-monarch-VTw",
		highlightClass: "fc-monarch-PHz",
		nowIndicatorLineClass: "fc-monarch-CH7 fc-monarch-qQW fc-monarch-nKh",
		nowIndicatorDotClass: "fc-monarch-aAW fc-monarch-Vpk fc-monarch-nKh fc-monarch-63n fc-monarch-AAA fc-monarch-GBJ fc-monarch-SC5",
		resourceDayHeaderAlign: "center",
		resourceDayHeaderClass: (e) => M("fc-monarch-wsy", e.isMajor ? "fc-monarch-zOd" : "fc-monarch-jdl"),
		resourceDayHeaderInnerClass: (e) => M("fc-monarch-bvX fc-monarch-dl1 fc-monarch-sgX", e.isNarrow ? "fc-monarch-a3B" : "fc-monarch-9yp"),
		resourceColumnHeaderClass: "fc-monarch-wsy fc-monarch-jdl fc-monarch-E9P",
		resourceColumnHeaderInnerClass: "fc-monarch-bvX fc-monarch-9yp",
		resourceColumnResizerClass: "fc-monarch-1EY fc-monarch-AWB fc-monarch-4Tv fc-monarch-dnf",
		resourceGroupHeaderClass: "fc-monarch-wsy fc-monarch-jdl fc-monarch-VTw",
		resourceGroupHeaderInnerClass: "fc-monarch-bvX fc-monarch-9yp",
		resourceCellClass: "fc-monarch-wsy fc-monarch-jdl",
		resourceCellInnerClass: "fc-monarch-bvX fc-monarch-9yp",
		resourceIndentClass: "fc-monarch-Wga fc-monarch-p9t fc-monarch-E9P",
		resourceExpanderClass: `fc-monarch-bCs fc-monarch-iS4 fc-monarch-AAA ${Wj} ${Lj} ${zj}`,
		resourceExpanderContent: (e) => mM(M(`fc-monarch-vnf ${nM}`, !e.isExpanded && "fc-monarch-KxI fc-monarch-ZW3")),
		resourceHeaderRowClass: "fc-monarch-wsy fc-monarch-jdl",
		resourceRowClass: "fc-monarch-wsy fc-monarch-jdl",
		resourceColumnDividerClass: "fc-monarch-USt fc-monarch-zOd",
		resourceGroupLaneClass: "fc-monarch-wsy fc-monarch-jdl fc-monarch-VTw",
		resourceLaneClass: "fc-monarch-wsy fc-monarch-jdl",
		resourceLaneBottomClass: (e) => e.options.eventOverlap && "fc-monarch-uuA",
		timelineBottomClass: "fc-monarch-uuA"
	},
	views: {
		dayGrid: {
			...dM,
			dayCellBottomClass: uM
		},
		multiMonth: {
			...dM,
			dayCellBottomClass: uM,
			dayHeaderInnerClass: (e) => !e.inPopover && "fc-monarch-ohi",
			dayHeaderDividerClass: (e) => M(e.multiMonthColumns === 1 && "fc-monarch-zi1 fc-monarch-jdl"),
			tableBodyClass: (e) => M(e.multiMonthColumns > 1 && "fc-monarch-wsy fc-monarch-jdl fc-monarch-Fvv fc-monarch-pKG")
		},
		timeGrid: {
			...dM,
			dayCellBottomClass: lM,
			weekNumberHeaderClass: "fc-monarch-XpK fc-monarch-LMv",
			weekNumberHeaderInnerClass: (e) => M("fc-monarch-Wga fc-monarch-2tF fc-monarch-dl1 fc-monarch-1sP fc-monarch-XpK fc-monarch-AAA", e.options.dayMinWidth !== void 0 && "fc-monarch-KYn", e.isNarrow ? "fc-monarch-oM6 fc-monarch-ZrE fc-monarch-a3B" : "fc-monarch-TFV fc-monarch-Nca fc-monarch-9yp", e.hasNavLink ? Xj : Yj),
			allDayHeaderClass: "fc-monarch-XpK fc-monarch-LMv",
			allDayHeaderInnerClass: (e) => M("fc-monarch-bvX fc-monarch-2HE", e.isNarrow ? Fj : "fc-monarch-9yp"),
			allDayDividerClass: "fc-monarch-zi1 fc-monarch-jdl",
			slotHeaderClass: (e) => M("fc-monarch-hza fc-monarch-OBr fc-monarch-LMv fc-monarch-wsy fc-monarch-jdl", e.isMinor && "fc-monarch-TN2"),
			slotHeaderInnerClass: (e) => M("fc-monarch-eYX fc-monarch-Mde fc-monarch-OQ9 fc-monarch-2tF", e.isNarrow ? `fc-monarch-uqG ${Fj}` : "fc-monarch-Fn5 fc-monarch-9yp", e.isFirst && "fc-monarch-pps"),
			slotHeaderDividerClass: (e) => M("fc-monarch-USt", e.inTableHeader && e.options.dayMinWidth === void 0 ? "fc-monarch-d0j" : "fc-monarch-jdl")
		},
		list: {
			listItemEventClass: "fc-monarch-bCs fc-monarch-3N5 fc-monarch-NYF fc-monarch-tgZ",
			listItemEventBeforeClass: "fc-monarch-fn8 fc-monarch-yDA",
			listItemEventInnerClass: "fc-monarch-tgZ fc-monarch-9yp",
			listItemEventTimeClass: "fc-monarch-yi0 fc-monarch-roZ fc-monarch-aHX fc-monarch-TZ4 fc-monarch-pKG fc-monarch-IPx",
			listItemEventTitleClass: (e) => M("fc-monarch-1El fc-monarch-2KU fc-monarch-TZ4 fc-monarch-pKG", e.event.url && "fc-monarch-Ogp"),
			noEventsClass: "fc-monarch-1El fc-monarch-dl1 fc-monarch-sgX fc-monarch-XpK fc-monarch-E9P",
			noEventsInnerClass: "fc-monarch-P9h"
		},
		resourceTimeGrid: fM,
		resourceDayGrid: fM,
		timeline: {
			rowEventClass: (e) => M(e.isEnd && "fc-monarch-9hC"),
			rowEventInnerClass: (e) => e.options.eventOverlap ? "fc-monarch-Jhn" : "fc-monarch-dl6",
			rowMoreLinkClass: `fc-monarch-9hC fc-monarch-Ika fc-monarch-Fvv fc-monarch-wsy fc-monarch-d0j fc-monarch-4MR ${Vj} fc-monarch-vwH`,
			rowMoreLinkInnerClass: "fc-monarch-iS4 fc-monarch-a3B",
			slotHeaderSticky: "0.5rem",
			slotHeaderAlign: (e) => e.level || e.isTime ? "start" : "center",
			slotHeaderClass: (e) => M("fc-monarch-wsy", e.level ? "fc-monarch-d0j fc-monarch-Bsl" : M("fc-monarch-jdl", e.isTime ? "fc-monarch-uuA fc-monarch-OBr fc-monarch-LMv" : "fc-monarch-E9P")),
			slotHeaderInnerClass: (e) => M("fc-monarch-9yp", e.level ? M("fc-monarch-cJ3 fc-monarch-Nca fc-monarch-Jhn fc-monarch-AAA", e.hasNavLink ? Xj : Yj) : M("fc-monarch-Nca", e.isTime ? M("fc-monarch-b0n fc-monarch-eYX fc-monarch-4oC", e.isFirst && "fc-monarch-pps") : "fc-monarch-dl6", e.hasNavLink && "fc-monarch-Eu0")),
			slotHeaderDividerClass: "fc-monarch-zi1 fc-monarch-jdl"
		}
	}
};
function mM(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "80 -880 800 800",
		fill: "currentColor",
		children: D("path", { d: "M480-304 240-544l56-56 184 184 184-184 56 56-240 240Z" })
	});
}
function hM(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "80 -880 800 800",
		fill: "currentColor",
		children: D("path", { d: "M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" })
	});
}
function gM(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "80 -880 800 800",
		fill: "currentColor",
		children: D("path", { d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" })
	});
}
function _M(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 800 2200",
		preserveAspectRatio: "none",
		className: e,
		children: D("polygon", {
			points: "0,0 66,0 800,1100 66,2200 0,2200",
			fill: "currentColor"
		})
	});
}
//#endregion
//#region node_modules/fullcalendar/themes/pulse/index.js
var vM = "fc-pulse-vQz", yM = "fc-pulse-0Bj", bM = "fc-pulse-uqo", xM = "fc-pulse-nPR", SM = "fc-pulse-3Xj", CM = "fc-pulse-fFh", wM = "fc-pulse-8qP", TM = `${bM} ${wM}`, EM = "fc-pulse-XCS", DM = "fc-pulse-KdO", OM = M("fc-pulse-X4o", "fc-pulse-V7v", "fc-pulse-08e"), kM = "fc-pulse-OT5", AM = `${kM} fc-pulse-wm1 fc-pulse-rQT`, jM = "fc-pulse-Hc8", MM = `${jM} fc-pulse-oJW fc-pulse-G9W`, NM = `fc-pulse-V8J fc-pulse-fhL ${DM} ${TM}`, PM = `fc-pulse-qNi ${AM} ${TM}`, FM = `fc-pulse-WBN fc-pulse-jv3 fc-pulse-S3M fc-pulse-jnQ fc-pulse-d0j ${TM} ${SM}`, IM = `fc-pulse-EVd fc-pulse-JnV fc-pulse-bAi fc-pulse-s1M ${TM} fc-pulse-07j`, LM = "fc-pulse-XUJ fc-pulse-8tO fc-pulse-TLh fc-pulse-zfc", RM = "fc-pulse-Lu4 fc-pulse-c79", zM = `${RM} fc-pulse-Q9K fc-pulse-dpx fc-pulse-Lto`, BM = `${RM} fc-pulse-F4j fc-pulse-wy6 fc-pulse-Gjm`, VM = "fc-pulse-UnP fc-pulse-FdK fc-pulse-wBD", HM = "fc-pulse-1EY fc-pulse-pps fc-pulse-vs6", UM = `${HM} fc-pulse-AWB fc-pulse-hza`, WM = `${HM} fc-pulse-MaV fc-pulse-uuA`, GM = "fc-pulse-1EY fc-pulse-3wQ fc-pulse-wsy fc-pulse-lNM fc-pulse-aRD fc-pulse-AAA", KM = `${GM} fc-pulse-ERR fc-pulse-Dq8`, qM = `${GM} fc-pulse-1V6 fc-pulse-F99`, JM = "fc-pulse-mhE", YM = (e) => M(!e.isNarrow && "fc-pulse-84e"), XM = {
	listItemEventClass: (e) => M("fc-pulse-Ika fc-pulse-7A6 fc-pulse-Fvv", e.isNarrow ? "fc-pulse-cKZ" : "fc-pulse-rVY", e.isSelected ? "fc-pulse-LKt" : e.isInteractive ? AM : kM),
	listItemEventInnerClass: (e) => M("fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK fc-pulse-N2M", e.isNarrow ? `fc-pulse-z5u ${vM}` : "fc-pulse-2rx fc-pulse-a3B"),
	listItemEventTimeClass: (e) => M(e.isNarrow ? "fc-pulse-F1o" : "fc-pulse-oQ2", "fc-pulse-NPw fc-pulse-TZ4 fc-pulse-pKG fc-pulse-1Zl"),
	listItemEventTitleClass: (e) => M(e.isNarrow ? "fc-pulse-F1o" : "fc-pulse-oQ2", "fc-pulse-1OT fc-pulse-TZ4 fc-pulse-pKG fc-pulse-OLq", e.timeText && "fc-pulse-IPx"),
	rowEventClass: (e) => M(e.isStart && (e.isNarrow ? "fc-pulse-Jzj" : "fc-pulse-Wga"), e.isEnd && (e.isNarrow ? "fc-pulse-3e1" : "fc-pulse-KYn")),
	rowEventInnerClass: (e) => e.isNarrow ? "fc-pulse-z5u" : "fc-pulse-2rx",
	rowMoreLinkClass: (e) => M("fc-pulse-Ika fc-pulse-wsy fc-pulse-Fvv", e.isNarrow ? `fc-pulse-cKZ fc-pulse-xkd ${AM}` : "fc-pulse-sI7 fc-pulse-rVY fc-pulse-d0j fc-pulse-LKt fc-pulse-8bo fc-pulse-QpP"),
	rowMoreLinkInnerClass: (e) => M(e.isNarrow ? `fc-pulse-7A6 ${vM}` : "fc-pulse-KUX fc-pulse-a3B", "fc-pulse-EB5")
}, ZM = {
	name: "theme-pulse",
	optionDefaults: {
		className: "fc-pulse-V08 fc-pulse-n5m",
		viewClass: (e) => {
			let t = e.options.headerToolbar || !e.borderlessTop, n = e.options.footerToolbar || !e.borderlessBottom, r = !e.borderlessX;
			return M("fc-pulse-FMd", t && "fc-pulse-ku3", n && "fc-pulse-zi1", r && "fc-pulse-1Wx", t && r && "fc-pulse-Z7Q", n && r && "fc-pulse-2qh", t && n && r && EM, !e.isHeightAuto && "fc-pulse-pKG");
		},
		toolbarClass: (e) => M("fc-pulse-dl1 fc-pulse-1sP fc-pulse-dNl fc-pulse-XpK fc-pulse-N2M fc-pulse-yth", e.borderlessX && "fc-pulse-Apf"),
		toolbarSectionClass: "fc-pulse-yi0 fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK fc-pulse-yth",
		toolbarTitleClass: "fc-pulse-AVD fc-pulse-DIS fc-pulse-EB5",
		buttonGroupClass: (e) => M("fc-pulse-z5u fc-pulse-Fvv fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK", e.hasSelection ? "fc-pulse-ntj" : `fc-pulse-7tK ${EM}`),
		buttonClass: (e) => M("fc-pulse-bCs fc-pulse-dl6 fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK fc-pulse-9yp fc-pulse-Z9U", e.isIconOnly ? "fc-pulse-Eaq" : "fc-pulse-KRz", e.buttonGroup?.hasSelection ? M("fc-pulse-Fvv", e.isSelected ? NM : M(PM, "fc-pulse-kWT fc-pulse-JIC fc-pulse-d0j")) : M("fc-pulse-wsy", e.buttonGroup ? "fc-pulse-kWT fc-pulse-F5S fc-pulse-Bn0 fc-pulse-lFh" : "fc-pulse-Fvv", e.isPrimary ? M(FM, !e.buttonGroup && DM) : M(IM, "fc-pulse-dck", e.buttonGroup ? "fc-pulse-WWn fc-pulse-7NL" : `fc-pulse-7tK ${EM}`))),
		buttons: {
			prev: { iconContent: () => QM(M(LM, "fc-pulse-z44 fc-pulse-keW")) },
			next: { iconContent: () => QM(M(LM, "fc-pulse-KxI fc-pulse-ZW3")) },
			prevYear: { iconContent: () => $M(M(LM, "fc-pulse-asP")) },
			nextYear: { iconContent: () => $M(M(LM, "fc-pulse-jmT fc-pulse-jY6")) }
		},
		eventShortHeight: 50,
		eventColor: "var(--fc-pulse-event)",
		eventContrastColor: "var(--fc-pulse-event-contrast)",
		eventClass: (e) => M(e.isDragging && "fc-pulse-n5m", e.event.url && "fc-pulse-JiE", e.isSelected ? M(yM, e.isDragging && "fc-pulse-1kP") : bM, wM),
		backgroundEventColor: "var(--fc-pulse-background-event)",
		backgroundEventClass: "fc-pulse-gTC fc-pulse-jsy fc-pulse-DO7",
		backgroundEventTitleClass: (e) => M("fc-pulse-lMo fc-pulse-L1Y", e.isNarrow || e.isShort ? `fc-pulse-iS4 ${vM}` : "fc-pulse-3N5 fc-pulse-a3B", "fc-pulse-EB5"),
		listItemEventTitleClass: "fc-pulse-EB5",
		listItemEventTimeClass: "fc-pulse-UnP",
		blockEventClass: (e) => M("fc-pulse-bCs fc-pulse-eYX fc-pulse-d0j fc-pulse-DO7 fc-pulse-YjJ fc-pulse-vwH fc-pulse-Frw", e.isInteractive && "fc-pulse-st8", e.isDragging && !e.isSelected && "fc-pulse-iTG"),
		blockEventInnerClass: "fc-pulse-i9F fc-pulse-cfp",
		blockEventTimeClass: "fc-pulse-TZ4 fc-pulse-pKG fc-pulse-1Zl",
		blockEventTitleClass: "fc-pulse-TZ4 fc-pulse-pKG fc-pulse-OLq",
		rowEventClass: (e) => M("fc-pulse-Ika fc-pulse-JIC", e.isStart && "fc-pulse-kmj fc-pulse-3J4", e.isEnd && "fc-pulse-Skl fc-pulse-USt"),
		rowEventBeforeClass: (e) => M(e.isStartResizable && M(e.isSelected ? KM : UM, "fc-pulse-11a")),
		rowEventAfterClass: (e) => M(e.isEndResizable && M(e.isSelected ? KM : UM, "fc-pulse-Tuc")),
		rowEventInnerClass: (e) => M("fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK", e.isNarrow ? vM : "fc-pulse-a3B"),
		rowEventTimeClass: (e) => e.isNarrow ? "fc-pulse-a7i" : "fc-pulse-C2j",
		rowEventTitleClass: (e) => M(e.isNarrow ? "fc-pulse-oQ2" : "fc-pulse-aCI", "fc-pulse-1OT"),
		columnEventClass: (e) => M("fc-pulse-1Wx fc-pulse-A3h fc-pulse-Y7n", e.isStart && M("fc-pulse-ku3 fc-pulse-wko", e.isNarrow ? "fc-pulse-sEX" : "fc-pulse-6iV"), e.isEnd && M("fc-pulse-zi1 fc-pulse-L2o", e.isNarrow ? "fc-pulse-Ika" : "fc-pulse-WdH")),
		columnEventBeforeClass: (e) => M(e.isStartResizable && M(e.isSelected ? qM : WM, "fc-pulse-YDC")),
		columnEventAfterClass: (e) => M(e.isEndResizable && M(e.isSelected ? qM : WM, "fc-pulse-fJL")),
		columnEventInnerClass: (e) => M("fc-pulse-dl1", e.isShort ? "fc-pulse-1sP fc-pulse-XpK fc-pulse-NWN fc-pulse-iS4" : M("fc-pulse-sgX", e.isNarrow ? "fc-pulse-aCI fc-pulse-2rx" : "fc-pulse-Nca fc-pulse-Jhn"), e.isNarrow || e.isShort ? vM : "fc-pulse-a3B"),
		columnEventTimeClass: (e) => M(!e.isShort && (e.isNarrow ? "fc-pulse-166" : "fc-pulse-4dx")),
		columnEventTitleClass: (e) => M(!e.isShort && (e.isNarrow ? "fc-pulse-2rx" : "fc-pulse-Jhn"), "fc-pulse-1OT"),
		moreLinkClass: `${bM} ${wM}`,
		moreLinkInnerClass: "fc-pulse-TZ4 fc-pulse-pKG",
		columnMoreLinkClass: `fc-pulse-cJ3 fc-pulse-wsy fc-pulse-d0j fc-pulse-4MR fc-pulse-KzJ ${OM} fc-pulse-vwH fc-pulse-A3h fc-pulse-Y7n`,
		columnMoreLinkInnerClass: (e) => M(e.isNarrow ? `fc-pulse-KUX ${vM}` : "fc-pulse-iS4 fc-pulse-a3B", "fc-pulse-EB5"),
		dayHeaderClass: (e) => M("fc-pulse-E9P", e.inPopover ? "fc-pulse-zi1 fc-pulse-FMd fc-pulse-Kwh" : e.isMajor && "fc-pulse-wsy fc-pulse-dck"),
		dayHeaderInnerClass: (e) => M("fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK", e.isNarrow ? "fc-pulse-a3B" : "fc-pulse-9yp", e.inPopover ? M("fc-pulse-cGD fc-pulse-aCI fc-pulse-2rx fc-pulse-Fvv fc-pulse-C8a", "fc-pulse-EB5", e.hasNavLink && AM) : e.dayNumberText ? e.isToday ? "fc-pulse-bCs fc-pulse-fn8 fc-pulse-2tF fc-pulse-lIh fc-pulse-hS8" : M("fc-pulse-fn8 fc-pulse-60W fc-pulse-TFV fc-pulse-ZrE fc-pulse-Fvv", "fc-pulse-UnP", e.hasNavLink && AM) : M("fc-pulse-cKZ fc-pulse-ckd fc-pulse-2rx fc-pulse-ZrE fc-pulse-Fvv", "fc-pulse-UnP", e.hasNavLink && AM)),
		dayHeaderContent: (e) => e.inPopover || !e.dayNumberText || !e.isToday ? D(w, { children: e.text }) : D(w, { children: e.textParts.map((t, n) => D("span", {
			className: M("fc-pulse-jm6", t.type === "day" && e.isToday ? M("fc-pulse-YPX fc-pulse-mTY fc-pulse-IY5 fc-pulse-AAA fc-pulse-C8a", "fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK fc-pulse-E9P", e.hasNavLink ? `${BM} ${xM} ${SM} ${wM}` : RM) : "fc-pulse-UnP"),
			children: t.value
		}, n)) }),
		dayCellClass: (e) => M("fc-pulse-wsy", e.isMajor ? "fc-pulse-dck" : "fc-pulse-FMd"),
		dayCellTopClass: (e) => M(e.isNarrow ? "fc-pulse-84e" : "fc-pulse-p7s", "fc-pulse-dl1 fc-pulse-1sP fc-pulse-LMv"),
		dayCellTopInnerClass: (e) => M("fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK", e.isNarrow ? `fc-pulse-SEP fc-pulse-oM6 ${vM}` : "fc-pulse-V9v fc-pulse-TFV fc-pulse-9yp", e.isToday ? M("fc-pulse-bCs fc-pulse-hS8", e.isNarrow ? "fc-pulse-148" : "fc-pulse-fn8") : M("fc-pulse-kmj fc-pulse-TZ4", !e.isOther && "fc-pulse-C8a", e.isNarrow ? "fc-pulse-aCI" : "fc-pulse-Nca", e.monthText ? "fc-pulse-EB5" : "fc-pulse-UnP", e.hasNavLink && AM)),
		dayCellTopContent: (e) => e.isToday ? D(w, { children: e.textParts.map((t, n) => D("span", {
			className: M("fc-pulse-jm6", t.type === "day" && e.isToday ? M("fc-pulse-AAA fc-pulse-C8a", "fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK fc-pulse-E9P", e.isNarrow ? "fc-pulse-XUJ" : "fc-pulse-MSG fc-pulse-YPX fc-pulse-mTY", e.hasNavLink ? `${BM} ${xM} ${SM} ${wM}` : RM) : e.monthText ? "fc-pulse-EB5" : "fc-pulse-UnP"),
			children: t.value
		}, n)) }) : D(w, { children: e.text }),
		dayCellInnerClass: (e) => M(e.inPopover && "fc-pulse-3N5"),
		popoverClass: "fc-pulse-aRD fc-pulse-wsy fc-pulse-dck fc-pulse-Fvv fc-pulse-pKG fc-pulse-tkw fc-pulse-gMS fc-pulse-aNc fc-pulse-n5m",
		popoverCloseClass: `fc-pulse-bCs fc-pulse-1EY fc-pulse-1b8 fc-pulse-Z42 fc-pulse-KUX fc-pulse-Fvv ${AM} ${bM} ${wM} fc-pulse-Z9U`,
		popoverCloseContent: () => eN(`fc-pulse-XUJ ${VM}`),
		dayLaneClass: (e) => M("fc-pulse-wsy", e.isMajor ? "fc-pulse-dck" : "fc-pulse-FMd", e.isDisabled && "fc-pulse-Kwh"),
		dayLaneInnerClass: (e) => e.isStack ? "fc-pulse-gMS" : e.isNarrow ? "fc-pulse-148" : "fc-pulse-cKZ",
		slotLaneClass: (e) => M("fc-pulse-wsy fc-pulse-FMd", e.isMinor && "fc-pulse-TN2"),
		listDayClass: (e) => M("fc-pulse-dl1 fc-pulse-sgX", !e.isLast && "fc-pulse-zi1 fc-pulse-FMd"),
		listDayHeaderClass: "fc-pulse-nHS fc-pulse-zi1 fc-pulse-FMd fc-pulse-fpi fc-pulse-EB5 fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK fc-pulse-N2M",
		listDayHeaderInnerClass: (e) => M("fc-pulse-cGD fc-pulse-ZrE fc-pulse-2rx fc-pulse-Fvv fc-pulse-9yp", !e.level && "fc-pulse-C8a", !e.level && e.isToday ? e.hasNavLink ? M(zM, SM) : RM : e.hasNavLink && AM),
		listDayBodyClass: "fc-pulse-sEX fc-pulse-ZrE fc-pulse-dl6 fc-pulse-tgZ",
		singleMonthClass: (e) => M(e.multiMonthColumns > 1 && "fc-pulse-rUb", e.multiMonthColumns === 1 && !e.isLast && "fc-pulse-zi1 fc-pulse-FMd"),
		singleMonthHeaderClass: (e) => M(e.multiMonthColumns > 1 ? "fc-pulse-lTO" : "fc-pulse-Jhn fc-pulse-zi1 fc-pulse-FMd fc-pulse-aRD", "fc-pulse-XpK"),
		singleMonthHeaderInnerClass: (e) => M("fc-pulse-ZrE fc-pulse-2rx fc-pulse-Fvv fc-pulse-1Po fc-pulse-EB5 fc-pulse-C8a", e.hasNavLink && AM),
		tableBodyClass: "fc-pulse-aRD",
		fillerClass: "fc-pulse-wsy fc-pulse-FMd fc-pulse-lMo",
		dayNarrowWidth: 100,
		dayHeaderRowClass: "fc-pulse-wsy fc-pulse-FMd",
		dayRowClass: "fc-pulse-wsy fc-pulse-FMd",
		slotHeaderRowClass: "fc-pulse-wsy fc-pulse-FMd",
		slotHeaderInnerClass: "fc-pulse-UnP",
		navLinkClass: `${bM} ${wM}`,
		inlineWeekNumberClass: (e) => M("fc-pulse-1EY fc-pulse-rbS fc-pulse-TZ4 fc-pulse-Skl fc-pulse-UnP", e.isNarrow ? `fc-pulse-2ik fc-pulse-SEP fc-pulse-KUX ${vM}` : "fc-pulse-ZnE fc-pulse-iS4 fc-pulse-a3B", e.hasNavLink && AM),
		highlightClass: "fc-pulse-afe",
		nonBusinessHoursClass: "fc-pulse-Kwh",
		nowIndicatorLineClass: "fc-pulse-CH7 fc-pulse-qQW fc-pulse-upi",
		nowIndicatorDotClass: "fc-pulse-aAW fc-pulse-Vpk fc-pulse-upi fc-pulse-63n fc-pulse-AAA fc-pulse-GBJ fc-pulse-Y7n",
		resourceDayHeaderAlign: "center",
		resourceDayHeaderClass: (e) => M(e.isMajor && "fc-pulse-wsy fc-pulse-dck"),
		resourceDayHeaderInnerClass: (e) => M("fc-pulse-bvX fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK fc-pulse-UnP", e.isNarrow ? "fc-pulse-a3B" : "fc-pulse-9yp"),
		resourceColumnHeaderClass: "fc-pulse-wsy fc-pulse-FMd fc-pulse-E9P",
		resourceColumnHeaderInnerClass: "fc-pulse-bvX fc-pulse-EB5 fc-pulse-9yp",
		resourceColumnResizerClass: "fc-pulse-1EY fc-pulse-AWB fc-pulse-4Tv fc-pulse-dnf",
		resourceGroupHeaderClass: "fc-pulse-wsy fc-pulse-FMd fc-pulse-LKt",
		resourceGroupHeaderInnerClass: "fc-pulse-bvX fc-pulse-EB5 fc-pulse-9yp",
		resourceCellClass: "fc-pulse-wsy fc-pulse-FMd",
		resourceCellInnerClass: "fc-pulse-bvX fc-pulse-EB5 fc-pulse-9yp",
		resourceIndentClass: "fc-pulse-Wga fc-pulse-p9t fc-pulse-E9P",
		resourceExpanderClass: `fc-pulse-bCs fc-pulse-KUX fc-pulse-Fvv ${AM} ${bM} ${wM}`,
		resourceExpanderContent: (e) => QM(M(`fc-pulse-XUJ ${VM}`, !e.isExpanded && "fc-pulse-KxI fc-pulse-ZW3")),
		resourceHeaderRowClass: "fc-pulse-wsy fc-pulse-FMd",
		resourceRowClass: "fc-pulse-wsy fc-pulse-FMd",
		resourceColumnDividerClass: "fc-pulse-USt fc-pulse-dck",
		resourceGroupLaneClass: "fc-pulse-wsy fc-pulse-FMd fc-pulse-LKt",
		resourceLaneClass: "fc-pulse-wsy fc-pulse-FMd",
		resourceLaneBottomClass: (e) => M(e.options.eventOverlap && "fc-pulse-uuA"),
		timelineBottomClass: "fc-pulse-uuA"
	},
	views: {
		dayGrid: {
			...XM,
			tableHeaderClass: "fc-pulse-aRD",
			dayHeaderAlign: (e) => e.inPopover ? "start" : e.isNarrow ? "center" : "end",
			dayHeaderDividerClass: "fc-pulse-zi1 fc-pulse-FMd",
			dayCellBottomClass: YM
		},
		multiMonth: {
			...XM,
			viewClass: "fc-pulse-Kwh",
			tableHeaderClass: (e) => M(e.multiMonthColumns === 1 && "fc-pulse-aRD"),
			tableBodyClass: (e) => M(e.multiMonthColumns > 1 && "fc-pulse-wsy fc-pulse-FMd fc-pulse-Fvv fc-pulse-pKG"),
			dayHeaderAlign: (e) => e.inPopover ? "start" : e.isNarrow ? "center" : "end",
			dayHeaderDividerClass: (e) => M(e.multiMonthColumns === 1 && "fc-pulse-zi1 fc-pulse-FMd"),
			dayCellBottomClass: YM
		},
		timeGrid: {
			...XM,
			tableHeaderClass: "fc-pulse-aRD",
			dayHeaderAlign: (e) => e.inPopover ? "start" : "center",
			dayHeaderDividerClass: (e) => M("fc-pulse-zi1", e.options.allDaySlot ? "fc-pulse-FMd" : "fc-pulse-dck fc-pulse-rf6"),
			dayCellBottomClass: JM,
			weekNumberHeaderClass: "fc-pulse-XpK fc-pulse-LMv",
			weekNumberHeaderInnerClass: (e) => M("fc-pulse-cKZ fc-pulse-TFV fc-pulse-ZrE fc-pulse-UnP fc-pulse-dl1 fc-pulse-1sP fc-pulse-XpK fc-pulse-Fvv", e.isNarrow ? "fc-pulse-a3B" : "fc-pulse-9yp", e.hasNavLink && AM),
			allDayHeaderClass: "fc-pulse-XpK",
			allDayHeaderInnerClass: (e) => M("fc-pulse-bvX fc-pulse-UnP", e.isNarrow ? vM : "fc-pulse-a3B"),
			allDayDividerClass: "fc-pulse-zi1 fc-pulse-dck fc-pulse-rf6",
			slotHeaderClass: "fc-pulse-LMv",
			slotHeaderInnerClass: (e) => M("fc-pulse-eYX fc-pulse-bvX", e.isNarrow ? `fc-pulse-Cy2 ${vM}` : "fc-pulse-uqG fc-pulse-a3B", e.isFirst && "fc-pulse-pps"),
			slotHeaderDividerClass: "fc-pulse-USt fc-pulse-FMd"
		},
		list: {
			viewClass: "fc-pulse-aRD",
			listItemEventClass: (e) => M("fc-pulse-bCs fc-pulse-Jhn fc-pulse-Fvv", e.isInteractive ? M(MM, CM) : jM),
			listItemEventBeforeClass: "fc-pulse-5kF fc-pulse-YjJ fc-pulse-AAA",
			listItemEventInnerClass: "fc-pulse-eF2",
			listItemEventTimeClass: "fc-pulse-88I fc-pulse-yi0 fc-pulse-roZ fc-pulse-Cdk fc-pulse-KRz fc-pulse-dl6 fc-pulse-TZ4 fc-pulse-pKG fc-pulse-IPx fc-pulse-9yp",
			listItemEventTitleClass: (e) => M("fc-pulse-1El fc-pulse-2KU fc-pulse-KRz fc-pulse-dl6 fc-pulse-TZ4 fc-pulse-pKG fc-pulse-9yp", e.event.url && "fc-pulse-Ogp"),
			noEventsClass: "fc-pulse-1El fc-pulse-dl1 fc-pulse-sgX fc-pulse-XpK fc-pulse-E9P",
			noEventsInnerClass: "fc-pulse-P9h fc-pulse-UnP"
		},
		timeline: {
			tableHeaderClass: "fc-pulse-aRD",
			rowEventClass: (e) => M(e.isEnd && "fc-pulse-9hC"),
			rowEventInnerClass: (e) => e.options.eventOverlap ? "fc-pulse-Jhn" : "fc-pulse-dl6",
			rowMoreLinkClass: `fc-pulse-9hC fc-pulse-Ika fc-pulse-wsy fc-pulse-d0j fc-pulse-4MR fc-pulse-Fvv ${OM} fc-pulse-vwH`,
			rowMoreLinkInnerClass: "fc-pulse-iS4 fc-pulse-EB5 fc-pulse-a3B",
			slotHeaderAlign: (e) => e.isTime ? "start" : "center",
			slotHeaderClass: (e) => M(e.level > 0 && "fc-pulse-wsy fc-pulse-FMd", "fc-pulse-E9P"),
			slotHeaderInnerClass: (e) => M("fc-pulse-bvX fc-pulse-9yp", e.isTime && M("fc-pulse-eYX fc-pulse-4oC", e.isFirst && "fc-pulse-pps"), e.hasNavLink && "fc-pulse-Eu0"),
			slotHeaderDividerClass: "fc-pulse-zi1 fc-pulse-dck fc-pulse-qNs"
		}
	}
};
function QM(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: D("polyline", { points: "6 9 12 15 18 9" })
	});
}
function $M(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [D("polyline", { points: "11 17 6 12 11 7" }), D("polyline", { points: "18 17 13 12 18 7" })]
	});
}
function eN(e) {
	return D("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		className: e,
		width: "20",
		height: "20",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [D("line", {
			x1: "18",
			y1: "6",
			x2: "6",
			y2: "18"
		}), D("line", {
			x1: "6",
			y1: "6",
			x2: "18",
			y2: "18"
		})]
	});
}
//#endregion
//#region resources/js/themes/filament.js
var $ = (...e) => e.filter(Boolean).join(" "), tN = (e) => String(e).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"), nN = "text-[0.6875rem]/[1.090909]", rN = "bg-white dark:bg-gray-900", iN = "bg-gray-50 dark:bg-white/[0.03]", aN = "bg-gray-100 dark:bg-white/5", oN = "text-gray-950 dark:text-white", sN = "text-gray-700 dark:text-gray-200", cN = "text-gray-500 dark:text-gray-400", lN = "text-gray-400 dark:text-gray-500", uN = "border-gray-200 dark:border-white/10", dN = "border-gray-100 dark:border-white/5", fN = "border-gray-300 dark:border-white/20", pN = "outline-2", mN = "focus-visible:outline-2", hN = "group-focus-visible:outline-2", gN = "outline-offset-2", _N = "outline-primary-600 dark:outline-primary-500", vN = `${mN} ${_N}`, yN = "hover:bg-gray-100 dark:hover:bg-white/5", bN = `${yN} focus-visible:bg-gray-100 dark:focus-visible:bg-white/5`, xN = "hover:bg-gray-50 dark:hover:bg-white/[0.03]", SN = `${xN} active:bg-gray-100 dark:active:bg-white/5 focus-visible:bg-gray-50 dark:focus-visible:bg-white/[0.03]`, CN = "bg-gray-100 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/20", wN = `bg-gray-100 dark:bg-white/10 ${oN} ${vN}`, TN = `${cN} hover:text-gray-950 dark:hover:text-white ${vN}`, EN = "bg-primary-600 text-white dark:bg-primary-500", DN = `${EN} hover:bg-primary-500 dark:hover:bg-primary-400`, ON = `${EN} group-hover:bg-primary-500 dark:group-hover:bg-primary-400`, kN = `${DN} border-transparent ${vN} ${gN}`, AN = `${rN} ${oN} hover:bg-gray-50 dark:bg-white/5 dark:hover:bg-white/10 border-gray-950/10 dark:border-white/20 ${vN} -outline-offset-1`, jN = "size-5 text-gray-400 group-hover:text-gray-500 group-focus-visible:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 dark:group-focus-visible:text-gray-400", MN = "text-[color-mix(in_oklab,var(--fc-event-color)_70%,var(--gray-950))] dark:text-[color-mix(in_oklab,var(--fc-event-color)_55%,white)]", NN = "bg-[color-mix(in_oklab,var(--fc-event-color)_15%,white)] dark:bg-[color-mix(in_oklab,var(--fc-event-color)_20%,var(--gray-900))]", PN = $(NN, "hover:bg-[color-mix(in_oklab,var(--fc-event-color)_20%,white)] dark:hover:bg-[color-mix(in_oklab,var(--fc-event-color)_25%,var(--gray-900))]", "active:bg-[color-mix(in_oklab,var(--fc-event-color)_25%,white)] dark:active:bg-[color-mix(in_oklab,var(--fc-event-color)_30%,var(--gray-900))]"), FN = "text-gray-400 group-hover:text-gray-500 group-focus-visible:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400 dark:group-focus-visible:text-gray-400", IN = "absolute hidden group-hover:block", LN = `${IN} inset-y-0 w-2`, RN = `${IN} inset-x-0 h-2`, zN = `absolute size-2 border border-(--fc-event-color) ${rN} rounded-full`, BN = `${zN} top-1/2 -mt-1`, VN = `${zN} left-1/2 -ml-1`, HN = $(bN, mN, _N), UN = (e) => $(!e.inPopover && (e.isMajor ? `border ${fN}` : !e.isNarrow && `border ${uN}`)), WN = (e) => $(!e.inPopover && (e.isMajor ? `border ${fN}` : !e.isNarrow && `border ${dN}`)), GN = (e) => e.isMajor ? fN : uN, KN = (e) => e.isMajor ? fN : dN, qN = "min-h-3", JN = (e) => $(!e.isNarrow && "min-h-px"), YN = (e, t) => ({ html: `<svg class="${t}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">${e}</svg>` }), XN = (e) => YN("<path fill-rule=\"evenodd\" d=\"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z\" clip-rule=\"evenodd\" />", e), ZN = (e) => YN("<path fill-rule=\"evenodd\" d=\"M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z\" clip-rule=\"evenodd\" />", e), QN = (e) => YN("<path d=\"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z\" />", e), $N = {
	listItemEventClass: (e) => $("mb-px p-px", e.isNarrow ? "mx-px rounded-sm" : "mx-1 rounded-md", e.isSelected ? aN : e.isInteractive ? bN : yN),
	listItemEventInnerClass: (e) => $("flex flex-row items-center justify-between", e.isNarrow ? `py-px ${nN}` : "py-0.5 text-xs"),
	listItemEventTimeClass: (e) => $(e.isNarrow ? "px-px" : "px-0.5", cN, "order-1 whitespace-nowrap overflow-hidden shrink-1"),
	listItemEventTitleClass: (e) => $(e.isNarrow ? "px-px" : "px-0.5", oN, "font-medium whitespace-nowrap overflow-hidden shrink-100", e.timeText && "text-ellipsis"),
	rowEventClass: (e) => $(e.isStart && (e.isNarrow ? "ms-0.5" : "ms-1"), e.isEnd && (e.isNarrow ? "me-0.5" : "me-1")),
	rowEventInnerClass: (e) => e.isNarrow ? "py-px" : "py-0.5",
	rowMoreLinkClass: (e) => $("mb-px border", e.isNarrow ? "mx-px border-primary-600 dark:border-primary-500 rounded-sm" : "self-start mx-1 border-transparent rounded-md", bN),
	rowMoreLinkInnerClass: (e) => $(e.isNarrow ? `p-px ${nN}` : "p-0.5 text-xs", oN)
}, eP = {
	filament: {
		name: "theme-filament",
		optionDefaults: {
			className: (e) => $(rN, "text-sm/normal", !(e.borderlessTop || e.borderlessBottom || e.borderlessX) && "rounded-xl"),
			viewClass: (e) => {
				let t = !e.options.headerToolbar && !e.borderlessTop, n = !e.options.footerToolbar && !e.borderlessBottom, r = !e.borderlessX;
				return $(uN, t && "border-t", n && "border-b", r && "border-x", t && r && "rounded-t-xl", n && r && "rounded-b-xl", !e.isHeightAuto && "overflow-hidden");
			},
			toolbarClass: (e) => $("px-4 py-3 flex flex-row flex-wrap items-center justify-between gap-3 overflow-hidden", iN, uN, !e.borderlessX && "border-x"),
			headerToolbarClass: (e) => $("border-b", !e.borderlessTop && "border-t", !(e.borderlessTop || e.borderlessX) && "rounded-t-xl"),
			footerToolbarClass: (e) => $("border-t", !e.borderlessBottom && "border-b", !(e.borderlessBottom || e.borderlessX) && "rounded-b-xl"),
			toolbarSectionClass: "shrink-0 flex flex-row items-center gap-3",
			toolbarTitleClass: `text-base font-semibold ${oN}`,
			buttonGroupClass: (e) => $("flex flex-row items-center", !e.hasSelection && "rounded-lg shadow-xs"),
			buttonClass: (e) => $("group py-2 flex flex-row items-center gap-1.5 text-sm appearance-none cursor-pointer", e.isIconOnly ? "px-2" : "px-3", e.buttonGroup?.hasSelection ? $("rounded-lg font-medium", e.isSelected ? wN : TN) : $("font-semibold", e.isPrimary ? kN : AN, e.buttonGroup ? "first:rounded-s-lg first:border-s last:rounded-e-lg last:border-e border-y" : "rounded-lg shadow-xs border")),
			buttons: {
				prev: { iconContent: () => XN($(jN, "rotate-90 [[dir=rtl]_&]:-rotate-90")) },
				next: { iconContent: () => XN($(jN, "-rotate-90 [[dir=rtl]_&]:rotate-90")) },
				prevYear: { iconContent: () => ZN($(jN, "[[dir=rtl]_&]:rotate-180")) },
				nextYear: { iconContent: () => ZN($(jN, "rotate-180 [[dir=rtl]_&]:rotate-0")) }
			},
			eventShortHeight: 50,
			eventColor: "var(--primary-500)",
			eventContrastColor: "white",
			eventClass: (e) => $(e.isDragging && "text-sm/normal", e.event.url && "text-inherit no-underline", e.isSelected ? $(pN, e.isDragging && "shadow-md") : mN, _N),
			backgroundEventColor: "var(--primary-500)",
			backgroundEventClass: "not-print:bg-[color-mix(in_oklab,var(--fc-event-color)_8%,transparent)] print:border print:border-(--fc-event-color)",
			backgroundEventTitleClass: (e) => $("opacity-50 italic", e.isNarrow ? `p-1 ${nN}` : "p-2 text-xs", sN),
			blockEventClass: (e) => $("group relative print:bg-white border-transparent print:border-(--fc-event-color)", e.isInteractive ? PN : NN, e.isDragging && !e.isSelected && "opacity-75"),
			blockEventInnerClass: MN,
			blockEventTimeClass: "whitespace-nowrap overflow-hidden shrink-1",
			blockEventTitleClass: "whitespace-nowrap overflow-hidden shrink-100",
			rowEventClass: (e) => $("mb-px border-y", e.isStart && $("border-s", e.isNarrow ? "rounded-s-sm" : "rounded-s-md"), e.isEnd && $("border-e", e.isNarrow ? "rounded-e-sm" : "rounded-e-md")),
			rowEventBeforeClass: (e) => $(e.isStartResizable && $(e.isSelected ? BN : LN, "-start-1")),
			rowEventAfterClass: (e) => $(e.isEndResizable && $(e.isSelected ? BN : LN, "-end-1")),
			rowEventInnerClass: (e) => $("flex flex-row items-center", e.isNarrow ? nN : "text-xs"),
			rowEventTimeClass: (e) => $(e.isNarrow ? "ps-0.5" : "ps-1", "font-medium"),
			rowEventTitleClass: (e) => e.isNarrow ? "px-0.5" : "px-1",
			columnEventClass: (e) => $("border-x ring ring-white dark:ring-gray-900", e.isStart && $("border-t rounded-t-lg", e.isNarrow ? "mt-px" : "mt-1"), e.isEnd && $("border-b rounded-b-lg", e.isNarrow ? "mb-px" : "mb-1")),
			columnEventBeforeClass: (e) => $(e.isStartResizable && $(e.isSelected ? VN : RN, "-top-1")),
			columnEventAfterClass: (e) => $(e.isEndResizable && $(e.isSelected ? VN : RN, "-bottom-1")),
			columnEventInnerClass: (e) => $("flex", e.isShort ? "flex-row items-center gap-1 p-1" : $("flex-col", e.isNarrow ? "px-1 py-0.5" : "px-2 py-1"), e.isShort || e.isNarrow ? nN : "text-xs"),
			columnEventTimeClass: (e) => !e.isShort && (e.isNarrow ? "pt-0.5" : "pt-1"),
			columnEventTitleClass: (e) => $(!e.isShort && (e.isNarrow ? "py-0.5" : "py-1"), "font-semibold"),
			moreLinkClass: `${mN} ${_N}`,
			moreLinkInnerClass: "whitespace-nowrap overflow-hidden",
			columnMoreLinkClass: (e) => $(e.isNarrow ? "my-px" : "my-1", `border border-transparent print:border-black rounded-md ${CN} print:bg-white ring ring-white dark:ring-gray-900`),
			columnMoreLinkInnerClass: (e) => $(e.isNarrow ? `p-0.5 ${nN}` : "p-1 text-xs", sN),
			dayHeaderAlign: (e) => e.inPopover ? "start" : "center",
			dayHeaderClass: (e) => $("justify-center", e.inPopover && `border-b ${uN} ${iN}`),
			dayHeaderInnerClass: (e) => $("flex flex-row items-center", !e.dayNumberText && !e.inPopover ? $("py-1 rounded-sm text-xs", e.isNarrow ? `px-1 m-1 ${cN}` : `px-1.5 m-2 font-semibold ${oN}`, e.hasNavLink && HN) : e.isToday && e.dayNumberText && !e.inPopover ? $("group m-2 outline-none", e.isNarrow ? "h-6" : "h-8") : $("rounded-sm", e.inPopover ? "m-2 px-1 py-0.5" : $("mx-2 h-6 px-1.5", e.isNarrow ? "my-2" : "my-3"), e.hasNavLink && HN)),
			dayHeaderContent: (e) => !e.dayNumberText && !e.inPopover ? { html: tN(e.text) } : { html: e.textParts.map((t) => `<span class="${$("whitespace-pre", e.isNarrow ? "text-xs" : "text-sm", t.type === "day" ? $("flex flex-row items-center", !e.isNarrow && "font-semibold", e.isToday && !e.inPopover ? $("mx-0.5 rounded-full justify-center", e.isNarrow ? "size-6" : "size-8", e.hasNavLink ? `${ON} ${hN} ${gN} ${_N}` : EN) : oN) : cN)}">${tN(t.value)}</span>`).join("") },
			dayCellClass: (e) => $("border", (e.isOther || e.isDisabled) && !e.options.businessHours && iN),
			dayCellTopClass: (e) => $(e.isNarrow ? "min-h-0.5" : "min-h-1", "flex flex-row"),
			dayCellTopInnerClass: (e) => $("flex flex-row items-center justify-center whitespace-nowrap", e.isNarrow ? `my-px h-5 ${nN}` : "my-1 h-6 text-xs", e.isToday ? $("rounded-full font-semibold", e.isNarrow ? "ms-px" : "ms-1", e.text === e.dayNumberText ? e.isNarrow ? "w-5" : "w-6" : e.isNarrow ? "px-1" : "px-2", e.hasNavLink ? `${DN} ${gN}` : EN) : $("rounded-e-sm", e.isNarrow ? "px-1" : "px-2", e.hasNavLink && bN, e.isOther ? lN : e.monthText ? sN : cN, e.monthText && "font-bold")),
			dayCellInnerClass: (e) => $(e.inPopover && "p-2"),
			popoverClass: `${rN} rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-950/5 dark:ring-white/10 m-1 min-w-55 text-sm/normal`,
			popoverCloseClass: `group absolute top-2 end-2 p-0.5 rounded-sm ${HN} appearance-none cursor-pointer`,
			popoverCloseContent: () => QN(`size-5 ${FN}`),
			dayLaneClass: (e) => $("border", e.isMajor ? fN : dN, e.isDisabled && iN),
			dayLaneInnerClass: (e) => e.isStack ? "m-1" : e.isNarrow ? "mx-px" : "mx-1",
			slotLaneClass: (e) => $(`border ${dN}`, e.isMinor && "border-dotted"),
			listDaysClass: "my-10 mx-auto w-full max-w-218 px-4",
			listDayClass: (e) => $(!e.isLast && `border-b ${dN}`, "flex flex-row items-start gap-2"),
			listDayHeaderClass: "my-px shrink-0 w-1/4 max-w-50 py-3.5 flex flex-col items-start",
			listDayHeaderInnerClass: (e) => $("my-0.5 py-0.5 px-2 -mx-2 rounded-full text-sm", e.level ? $(lN, e.hasNavLink && `${bN} hover:text-gray-500 dark:hover:text-gray-400`) : e.isToday ? $("font-semibold", e.hasNavLink ? DN : EN) : $(`font-medium ${oN}`, e.hasNavLink && bN)),
			listDayBodyClass: `my-4 grow min-w-0 border ${uN} rounded-lg`,
			singleMonthClass: (e) => $(e.multiMonthColumns > 1 && "m-4", e.multiMonthColumns === 1 && !e.isLast && `border-b ${uN}`),
			singleMonthHeaderClass: (e) => $(e.multiMonthColumns > 1 ? "pb-1" : `py-1.5 ${rN} border-b ${uN}`, "items-center"),
			singleMonthHeaderInnerClass: (e) => $(`py-1 px-2 rounded-md text-sm font-semibold ${oN}`, e.hasNavLink && bN),
			tableHeaderClass: rN,
			fillerClass: `border ${dN}`,
			dayNarrowWidth: 100,
			dayHeaderRowClass: `border ${dN}`,
			dayRowClass: `border ${uN}`,
			slotHeaderRowClass: `border ${uN}`,
			slotHeaderInnerClass: `${lN} uppercase`,
			navLinkClass: `${mN} ${_N}`,
			inlineWeekNumberClass: (e) => $(`absolute top-0 end-0 ${rN} ${cN} whitespace-nowrap rounded-es-md border-b border-b-gray-300 dark:border-b-white/20 border-s border-s-gray-200 dark:border-s-white/10`, e.isNarrow ? `p-0.5 ${nN}` : "p-1.5 text-xs", e.hasNavLink ? `${bN} -outline-offset-1` : yN),
			highlightClass: "bg-primary-500/10",
			nonBusinessHoursClass: iN,
			nowIndicatorLineClass: "-m-px border border-danger-600 dark:border-danger-500",
			nowIndicatorDotClass: "-m-[6px] border-6 border-danger-600 dark:border-danger-500 size-0 rounded-full ring-2 ring-white dark:ring-gray-900",
			resourceDayHeaderAlign: "center",
			resourceDayHeaderClass: "border",
			resourceDayHeaderInnerClass: (e) => $(`m-2 font-semibold ${sN}`, e.isNarrow ? "text-xs" : "text-sm"),
			resourceColumnHeaderClass: `border ${dN} justify-center`,
			resourceColumnHeaderInnerClass: `m-2 text-sm font-semibold ${oN}`,
			resourceColumnResizerClass: "absolute inset-y-0 w-[5px] end-[-3px]",
			resourceGroupHeaderClass: `border ${uN} ${aN}`,
			resourceGroupHeaderInnerClass: `m-2 text-sm ${sN}`,
			resourceCellClass: `border ${dN}`,
			resourceCellInnerClass: `m-2 text-sm ${sN}`,
			resourceIndentClass: "ms-1 -me-1.5 justify-center",
			resourceExpanderClass: `group p-0.5 rounded-full ${bN} ${mN} ${_N}`,
			resourceExpanderContent: (e) => XN($(`size-5 ${FN}`, !e.isExpanded && "-rotate-90 [[dir=rtl]_&]:rotate-90")),
			resourceHeaderRowClass: `border ${uN}`,
			resourceRowClass: `border ${uN}`,
			resourceColumnDividerClass: `border-e ${fN}`,
			resourceGroupLaneClass: `border ${uN} ${aN}`,
			resourceLaneClass: `border ${uN}`,
			resourceLaneBottomClass: (e) => $(e.options.eventOverlap && "h-2"),
			timelineBottomClass: "h-2"
		},
		views: {
			dayGrid: {
				...$N,
				dayHeaderClass: UN,
				dayHeaderDividerClass: `border-b ${fN}`,
				dayCellClass: GN,
				dayCellBottomClass: JN,
				backgroundEventInnerClass: "flex flex-row justify-end"
			},
			multiMonth: {
				...$N,
				dayHeaderClass: UN,
				dayHeaderDividerClass: (e) => $(e.multiMonthColumns === 1 && `border-b ${fN} shadow-sm`),
				dayCellClass: GN,
				dayCellBottomClass: JN,
				tableBodyClass: (e) => $(e.multiMonthColumns > 1 && `border ${uN} rounded-lg shadow-xs overflow-hidden`)
			},
			timeGrid: {
				...$N,
				dayHeaderClass: WN,
				dayHeaderDividerClass: (e) => $("border-b", e.options.allDaySlot ? uN : `${fN} not-print:shadow-sm`),
				dayCellClass: KN,
				dayCellBottomClass: qN,
				weekNumberHeaderClass: "items-center justify-end",
				weekNumberHeaderInnerClass: (e) => $(`m-1.5 h-6 px-1.5 ${cN} rounded-sm flex flex-row items-center`, e.hasNavLink && bN, e.isNarrow ? "text-xs" : "text-sm"),
				allDayHeaderClass: "items-center",
				allDayHeaderInnerClass: (e) => $(`m-3 ${lN}`, e.isNarrow ? nN : "text-xs"),
				allDayDividerClass: `border-b ${fN} not-print:shadow-sm`,
				slotHeaderClass: "justify-end",
				slotHeaderInnerClass: (e) => $("relative mx-3 my-2", e.isNarrow ? `-top-3.5 ${nN}` : "-top-4 text-xs", e.isFirst && "hidden"),
				slotHeaderDividerClass: `border-e ${dN}`
			},
			list: {
				listItemEventClass: (e) => $("group p-4 items-center gap-3", !e.isLast && `border-b ${dN}`, e.isInteractive ? SN : xN),
				listItemEventBeforeClass: "border-4 border-(--fc-event-color) rounded-full",
				listItemEventInnerClass: "flex flex-row items-center gap-3 text-sm",
				listItemEventTimeClass: `shrink-0 w-1/2 max-w-50 whitespace-nowrap overflow-hidden text-ellipsis ${cN}`,
				listItemEventTitleClass: (e) => $(`grow min-w-0 font-medium whitespace-nowrap overflow-hidden ${oN}`, e.event.url && "group-hover:underline"),
				noEventsClass: "grow flex flex-col items-center justify-center",
				noEventsInnerClass: `py-15 ${cN}`
			},
			resourceDayGrid: { resourceDayHeaderClass: (e) => e.isMajor ? fN : uN },
			resourceTimeGrid: { resourceDayHeaderClass: (e) => e.isMajor ? fN : dN },
			timeline: {
				rowEventClass: (e) => e.isEnd && "me-px",
				rowEventInnerClass: (e) => e.options.eventOverlap ? "py-1" : "py-2",
				rowMoreLinkClass: `me-px mb-px border border-transparent print:border-black rounded-md ${CN} print:bg-white`,
				rowMoreLinkInnerClass: `p-1 text-xs ${sN}`,
				slotHeaderAlign: (e) => e.isTime ? "start" : "center",
				slotHeaderClass: (e) => $(e.level > 0 && `border ${dN}`, "justify-end"),
				slotHeaderInnerClass: (e) => $("mx-3 my-2 text-xs", e.isTime && $("relative -start-4", e.isFirst && "hidden"), e.hasNavLink && "hover:underline"),
				slotHeaderDividerClass: `border-b ${fN} shadow-sm`
			}
		}
	},
	breezy: vA,
	classic: GA,
	forma: jj,
	monarch: pM,
	pulse: ZM
}, tP = (e, { extends: t, ...n }, r) => ({
	...e,
	...n,
	name: `theme-${r}`,
	optionDefaults: {
		...e.optionDefaults,
		...n.optionDefaults
	},
	views: Object.fromEntries([.../* @__PURE__ */ new Set([...Object.keys(e.views ?? {}), ...Object.keys(n.views ?? {})])].map((t) => [t, {
		...e.views?.[t],
		...n.views?.[t]
	}]))
}), nP = {};
async function rP(e, t) {
	if (eP[e] || nP[e]) return;
	if (!t[e]) throw Error(`[${e}] is not a calendar theme. Register it with [registerTheme()] on the panel plugin, or use one of [${Object.keys(eP).join("], [")}].`);
	let n = (await import(t[e])).default;
	if (!n) throw Error(`The calendar theme [${e}] at [${t[e]}] has no default export.`);
	nP[e] = n, n.extends && await rP(n.extends, t);
}
function iP(e, t = []) {
	if (eP[e]) return {
		theme: eP[e],
		base: e
	};
	let n = nP[e];
	if (!n.extends) return {
		theme: tP({}, n, e),
		base: null
	};
	if (t.includes(n.extends)) throw Error(`The calendar themes extend each other in a loop: [${[
		...t,
		e,
		n.extends
	].join("] extends [")}].`);
	let r = iP(n.extends, [...t, e]);
	return {
		theme: tP(r.theme, n, e),
		base: r.base
	};
}
function aP(e, t, n, r) {
	let i = r[t] ?? [];
	if (!i.length) {
		if (n) throw Error(`The [${e}] theme has no palettes, so [${n}] cannot be used with it.`);
		return null;
	}
	if (n && !i.includes(n)) throw Error(`[${n}] is not a palette of the [${e}] theme. Use one of [${i.join("], [")}].`);
	return `fi-fc-palette-${t}-${n ?? i[0]}`;
}
//#endregion
//#region resources/js/support/classes.js
var oP = (e, t) => typeof e == "function" ? e(t) : e, sP = (...e) => e.some((e) => typeof e == "function") ? (t) => sP(...e.map((e) => oP(e, t))) : e.flat().filter(Boolean).join(" "), cP = [
	"moment",
	"momentTimezone",
	"resource"
], lP = {
	viewClass: (e) => `fc-view fc-${e.view?.type}-view`,
	eventClass: "fc-event",
	eventTitleClass: "fc-event-title",
	eventTimeClass: "fc-event-time",
	backgroundEventClass: "fc-bg-event",
	dayCellClass: "fc-daygrid-day",
	dayHeaderClass: "fc-col-header-cell",
	moreLinkClass: "fc-more-link",
	highlightClass: "fc-highlight",
	nonBusinessHoursClass: "fc-non-business"
}, uP = (e, t) => Object.fromEntries(Object.keys({
	...e,
	...lP
}).filter((e) => e.endsWith("Class")).map((n) => [n, sP(lP[n], e[n] ?? t[n])])), dP = (e) => Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t.click ? {
	...t,
	click: (e) => t.click(e, e.currentTarget)
} : t])), fP = ({ plugins: e, callbacks: t, config: n }) => ({
	plugins: e.filter((e) => !cP.includes(e)),
	callbacks: {
		...t,
		...uP(t, n),
		...t.buttons && { buttons: dP(t.buttons) }
	}
}), pP = (e) => e.map((e) => {
	if (!Nk[e]) throw Error(`[${e}] is not a FullCalendar plugin this package knows.`);
	return Nk[e];
}), mP = "[data-filament-fullcalendar-draggable]", hP = (e) => JSON.parse(e.dataset.filamentFullcalendarDraggable);
function gP() {
	window.filamentFullCalendarDraggable ??= new zm(document.body, {
		itemSelector: mP,
		eventData: (e) => {
			let { title: t, duration: n } = hP(e);
			return {
				title: t ?? e.innerText,
				...n && { duration: n },
				create: !1
			};
		}
	});
}
var _P = "filament-fullcalendar", vP = (e) => ({
	id: e.id,
	groupId: e.groupId,
	title: e.title,
	start: e.startStr,
	end: e.endStr || null,
	allDay: e.allDay,
	url: e.url,
	display: e.display,
	extendedProps: e.extendedProps,
	isRecurring: !!e._def?.recurringDef,
	source: e.source?.id || null,
	resourceIds: [...e._def?.resourceIds ?? []]
}), yP = (e) => {
	let t = document.createElement("div");
	return t.textContent = e, t.innerHTML;
};
function bP({ event: e, el: t }) {
	let { tooltip: n, isTooltipHtml: r } = e.extendedProps;
	if (!n || Array.isArray(n) && !n.length) return;
	let i = window.Alpine.store("theme") ?? "light";
	t.setAttribute(`x-tooltip.html.raw.theme.${i}`, [n].flat().map((e) => r ? e : yP(e)).join("<br>"));
}
function xP({ event: e, el: t }) {
	if (!e.extendedProps.isTitleHtml) return;
	let n = t.querySelector(".fi-fc-event-title");
	n && (n.innerHTML = e.title);
}
var SP = () => document.documentElement.classList.contains("dark") ? "dark" : "light", CP = (e) => !e || /^en([-_]us)?$/i.test(e);
function wP({ id: e, locale: t, plugins: n, theme: r, palette: i, palettes: a, registeredThemes: o, nativeToolbar: s, schedulerLicenseKey: c, timeZone: l, config: u, resources: d, eventSources: f, googleCalendarApiKey: p, editable: m, selectable: h, filtersCount: g, pollingInterval: _, droppable: v, widget: y, hasSpaMode: b, shouldReportDates: x, callbacks: S }) {
	({plugins: n, callbacks: S} = fP({
		plugins: n,
		callbacks: S,
		config: u
	}));
	let C = (e, ...t) => typeof S[e] == "function" && S[e](...t) === !1, w = {};
	return {
		calendar: null,
		listeners: {},
		pendingDateInteraction: null,
		pollingTimer: null,
		colorSchemeObserver: null,
		isDragging: !1,
		isDestroyed: !1,
		id: e,
		filtersCount: g,
		title: "",
		viewType: null,
		isTodayDisabled: !1,
		optionChanges: 0,
		initialResources: Array.isArray(d) ? d : null,
		async init() {
			if (await rP(r, o), this.isDestroyed) return;
			let { theme: g, base: w } = iP(r), T = aP(r, w, i, a), ee = {
				viewClass: "fi-fc-view",
				eventClass: T,
				eventTitleClass: "fi-fc-event-title",
				popoverClass: T
			}, { mobileInitialView: E, mobileBreakpoint: te = 768, plugins: ne = [], locales: re = [], ...ie } = u, ae = window.matchMedia(`(max-width: ${te - 1}px)`).matches, oe = [f.some((e) => e.googleCalendarId) && "googleCalendar", f.some((e) => e.format === "ics") && "iCalendar"].filter(Boolean);
			T && this.$refs.calendar.classList.add(T), this.calendar = new Ep(this.$refs.calendar, {
				plugins: [...pP([.../* @__PURE__ */ new Set([
					...n,
					...ne,
					...oe
				])]), g],
				locale: t,
				...c && { schedulerLicenseKey: c },
				editable: m,
				selectable: h,
				...d !== !1 && { resources: (e, t, n) => {
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
				...ie,
				headerToolbar: s?.headerToolbar ?? !1,
				footerToolbar: s?.footerToolbar ?? !1,
				colorScheme: SP(),
				timeZone: l,
				...ae && E && { initialView: E },
				locales: [...CP(u.locale ?? t) ? [] : ah, ...re],
				...S,
				...Object.fromEntries(Object.entries(ee).map(([e, t]) => [e, sP(t, S[e] ?? ie[e])])),
				eventDidMount: (e) => {
					bP(e), xP(e), S.eventDidMount?.(e);
				},
				...p && { googleCalendarApiKey: p },
				eventSources: [{
					id: _P,
					events: (e, t, n) => {
						this.$wire.handleFetchEvents({
							start: e.startStr,
							end: e.endStr,
							timezone: e.timeZone
						}).then(t).catch(n);
					}
				}, ...f.map((e) => e.googleCalendarId ? {
					...e,
					eventDataTransform: (e) => ({
						...e,
						shouldOpenUrlInNewTab: !0
					})
				} : e)],
				buttons: this.getButtons(),
				...v && {
					droppable: !0,
					dropAccept: (e) => {
						if (!e.matches(mP)) return !1;
						let { calendar: t } = hP(e);
						if (t && t !== y) return !1;
						let n = S.dropAccept ?? u.dropAccept;
						return typeof n == "function" ? n(e) : typeof n != "string" || e.matches(n);
					},
					drop: (e) => {
						if (C("drop", e) || !e.draggedEl.matches(mP)) return;
						let { calendar: t, ...n } = hP(e.draggedEl);
						this.$wire.handleExternalDrop(n, e.dateStr, e.allDay, e.resource ?? null);
					}
				},
				loading: (e) => {
					this.$refs.calendar.setAttribute("aria-busy", e), C("loading", e);
				},
				datesSet: (e) => {
					this.syncToolbar(), !C("datesSet", e) && x && this.$wire.handleDatesSet({
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
					if (n.preventDefault(), !C("eventClick", e)) {
						if (t.url) {
							let e = t.extendedProps.shouldOpenUrlInNewTab || ((e) => e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)(n), r = new URL(t.url, window.location.href).origin === window.location.origin;
							return b && r && !e ? window.Livewire.navigate(t.url) : window.open(t.url, e ? "_blank" : "_self");
						}
						this.$wire.handleEventClick(vP(t));
					}
				},
				eventDragStart: (e) => {
					this.isDragging = !0, S.eventDragStart?.(e);
				},
				eventDragStop: (e) => {
					this.isDragging = !1, S.eventDragStop?.(e);
				},
				eventResizeStart: (e) => {
					this.isDragging = !0, S.eventResizeStart?.(e);
				},
				eventResizeStop: (e) => {
					this.isDragging = !1, S.eventResizeStop?.(e);
				},
				eventDrop: async (e) => {
					let { event: t, oldEvent: n, relatedEvents: r, delta: i, oldResource: a, newResource: o, revert: s } = e;
					if (C("eventDrop", e)) return;
					let c = await this.$wire.handleEventDrop(vP(t), vP(n), r.map(vP), i, a, o);
					typeof c == "boolean" && c && s();
				},
				eventResize: async (e) => {
					let { event: t, oldEvent: n, relatedEvents: r, startDelta: i, endDelta: a, revert: o } = e;
					if (C("eventResize", e)) return;
					let s = await this.$wire.handleEventResize(vP(t), vP(n), r.map(vP), i, a);
					typeof s == "boolean" && s && o();
				},
				dateClick: (e) => {
					if (C("dateClick", e)) return;
					let { dateStr: t, allDay: n, view: r, resource: i } = e;
					this.queueDateInteraction({ click: {
						dateStr: t,
						allDay: n,
						view: this.serializeView(r),
						resource: i
					} });
				},
				select: (e) => {
					if (C("select", e)) return;
					let { startStr: t, endStr: n, allDay: r, view: i, resource: a } = e;
					this.queueDateInteraction({ selection: {
						startStr: t,
						endStr: n,
						allDay: r,
						view: this.serializeView(i),
						resource: a
					} });
				}
			}), this.trackOptions(), this.watchActiveNativeButtons(), this.calendar.render(), this.syncToolbar(), this.colorSchemeObserver = new MutationObserver(() => {
				this.calendar?.getOption("colorScheme") !== SP() && this.calendar?.setOption("colorScheme", SP());
			}), this.colorSchemeObserver.observe(document.documentElement, { attributeFilter: ["class"] }), v && gP(), _ && (this.pollingTimer = setInterval(() => {
				document.hidden || this.isDragging || this.$wire.mountedActions?.length || this.calendar.refetchEvents();
			}, _));
			let se = {
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
			this.listeners = Object.fromEntries(Object.entries(se).map(([t, n]) => [`filament-fullcalendar--${t}`, ({ detail: t }) => {
				t?.calendar && t.calendar !== e || n(t ?? {});
			}])), Object.entries(this.listeners).forEach(([e, t]) => window.addEventListener(e, t));
		},
		syncToolbar() {
			let { view: t } = this.calendar;
			this.title = t.title, window.dispatchEvent(new CustomEvent("filament-fullcalendar--title", { detail: {
				calendar: e,
				title: t.title
			} })), this.viewType = t.type, this.isTodayDisabled = this.calendar.getButtonState().today.isDisabled;
		},
		getToolLabel(e) {
			return this.viewType ? this.calendar.getOption("buttons")?.[e]?.text ?? this.calendar.getButtonState()[e]?.text ?? e : "";
		},
		getToolHint(e) {
			return this.viewType ? this.calendar.getOption("buttons")?.[e]?.hint ?? this.calendar.getButtonState()[e]?.hint ?? "" : "";
		},
		getButtons() {
			return {
				...u.buttons,
				...S.buttons,
				...Object.fromEntries(Object.entries(s?.buttons ?? {}).map(([e, t]) => [e, this.makeNativeButton(e, t)]))
			};
		},
		makeNativeButton(e, { text: t, handler: n, icon: r, isIconOnly: i, isPrimary: a, isToggle: o, tooltip: s, active: c, disabled: l, badge: u }) {
			return {
				text: t,
				hint: t,
				display: r ? i ? "icon" : "icon-text" : "text",
				...r && { iconContent: { html: r } },
				isPrimary: !!(a || w[e]),
				class: "fi-fc-tool",
				click: (e) => {
					e.preventDefault(), window.Alpine.evaluate(this.$el, n, { scope: {
						$el: e.currentTarget,
						$event: e
					} });
				},
				didMount: ({ el: e }) => {
					if (s && e.setAttribute("x-tooltip", `{ content: ${s}, theme: $store.theme }`), l && e.setAttribute("x-bind:disabled", l), o && c && e.setAttribute("x-bind:aria-pressed", `(${c}) ? 'true' : 'false'`), u) {
						let t = document.createElement("span");
						t.className = "fi-fc-tool-badge", t.setAttribute("x-show", u), t.setAttribute("x-text", u), t.setAttribute("x-cloak", ""), e.append(t);
					}
				}
			};
		},
		trackOptions() {
			let e = window.Alpine.raw(this.calendar), { getOption: t, setOption: n } = e;
			e.getOption = (n) => (this.optionChanges, t.call(e, n)), e.setOption = (t, r) => {
				n.call(e, t, r), this.optionChanges++;
			};
		},
		watchActiveNativeButtons() {
			Object.entries(s?.buttons ?? {}).forEach(([e, { active: t }]) => {
				t && (w[e] = !!window.Alpine.evaluate(this.$el, t), this.$watch(t, (t) => {
					w[e] = !!t, window.Alpine.raw(this.calendar)?.setOption("buttons", this.getButtons());
				}));
			}), Object.values(w).some(Boolean) && window.Alpine.raw(this.calendar).setOption("buttons", this.getButtons());
		},
		clickCustomButton(e, t) {
			this.calendar?.getOption("buttons")?.[e]?.click?.(t);
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
			this.isDestroyed = !0, Object.entries(this.listeners).forEach(([e, t]) => window.removeEventListener(e, t)), clearInterval(this.pollingTimer), this.colorSchemeObserver?.disconnect(), this.calendar?.destroy(), this.calendar = null;
		},
		queueDateInteraction(e) {
			if (!h) return;
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
export { wP as default };

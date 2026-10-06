import { Hn as e, V as t, _n as n, bt as r, n as i } from "./filament-fullcalendar-core-MrkNOn94.js";
//#region node_modules/rrule/dist/esm/weekday.js
var a = [
	"MO",
	"TU",
	"WE",
	"TH",
	"FR",
	"SA",
	"SU"
], o = function() {
	function e(e, t) {
		if (t === 0) throw Error("Can't create weekday with n == 0");
		this.weekday = e, this.n = t;
	}
	return e.fromStr = function(t) {
		return new e(a.indexOf(t));
	}, e.prototype.nth = function(t) {
		return this.n === t ? this : new e(this.weekday, t);
	}, e.prototype.equals = function(e) {
		return this.weekday === e.weekday && this.n === e.n;
	}, e.prototype.toString = function() {
		var e = a[this.weekday];
		return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + e), e;
	}, e.prototype.getJsWeekday = function() {
		return this.weekday === 6 ? 0 : this.weekday + 1;
	}, e;
}(), s = function(e) {
	return e != null;
}, c = function(e) {
	return typeof e == "number";
}, l = function(e) {
	return typeof e == "string" && a.includes(e);
}, u = Array.isArray, d = function(e, t) {
	t === void 0 && (t = e), arguments.length === 1 && (t = e, e = 0);
	for (var n = [], r = e; r < t; r++) n.push(r);
	return n;
}, f = function(e, t) {
	var n = 0, r = [];
	if (u(e)) for (; n < t; n++) r[n] = [].concat(e);
	else for (; n < t; n++) r[n] = e;
	return r;
}, p = function(e) {
	return u(e) ? e : [e];
};
function m(e, t, n) {
	n === void 0 && (n = " ");
	var r = String(e);
	return t >>= 0, r.length > t ? String(r) : (t -= r.length, t > n.length && (n += f(n, t / n.length)), n.slice(0, t) + String(r));
}
var h = function(e, t, n) {
	var r = e.split(t);
	return n ? r.slice(0, n).concat([r.slice(n).join(t)]) : r;
}, g = function(e, t) {
	var n = e % t;
	return n * t < 0 ? n + t : n;
}, _ = function(e, t) {
	return {
		div: Math.floor(e / t),
		mod: g(e, t)
	};
}, v = function(e) {
	return !s(e) || e.length === 0;
}, y = function(e) {
	return !v(e);
}, b = function(e, t) {
	return y(e) && e.indexOf(t) !== -1;
}, x = function(e, t, n, r, i, a) {
	return r === void 0 && (r = 0), i === void 0 && (i = 0), a === void 0 && (a = 0), new Date(Date.UTC(e, t - 1, n, r, i, a));
}, S = [
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
], C = 1e3 * 60 * 60 * 24, w = x(1970, 1, 1), T = [
	6,
	0,
	1,
	2,
	3,
	4,
	5
], E = function(e) {
	return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
}, ee = function(e) {
	return e instanceof Date;
}, D = function(e) {
	return ee(e) && !isNaN(e.getTime());
}, te = function(e, t) {
	var n = e.getTime() - t.getTime();
	return Math.round(n / C);
}, ne = function(e) {
	return te(e, w);
}, re = function(e) {
	return new Date(w.getTime() + e * C);
}, ie = function(e) {
	var t = e.getUTCMonth();
	return t === 1 && E(e.getUTCFullYear()) ? 29 : S[t];
}, O = function(e) {
	return T[e.getUTCDay()];
}, ae = function(e, t) {
	var n = x(e, t + 1, 1);
	return [O(n), ie(n)];
}, oe = function(e, t) {
	return t ||= e, new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
}, se = function(e) {
	return new Date(e.getTime());
}, ce = function(e) {
	for (var t = [], n = 0; n < e.length; n++) t.push(se(e[n]));
	return t;
}, k = function(e) {
	e.sort(function(e, t) {
		return e.getTime() - t.getTime();
	});
}, A = function(e, t) {
	t === void 0 && (t = !0);
	var n = new Date(e);
	return [
		m(n.getUTCFullYear().toString(), 4, "0"),
		m(n.getUTCMonth() + 1, 2, "0"),
		m(n.getUTCDate(), 2, "0"),
		"T",
		m(n.getUTCHours(), 2, "0"),
		m(n.getUTCMinutes(), 2, "0"),
		m(n.getUTCSeconds(), 2, "0"),
		t ? "Z" : ""
	].join("");
}, j = function(e) {
	var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(e);
	if (!t) throw Error(`Invalid UNTIL value: ${e}`);
	return new Date(Date.UTC(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10), parseInt(t[5], 10) || 0, parseInt(t[6], 10) || 0, parseInt(t[7], 10) || 0));
}, le = function(e, t) {
	return e.toLocaleString("sv-SE", { timeZone: t }).replace(" ", "T") + "Z";
}, ue = function(e, t) {
	var n = Intl.DateTimeFormat().resolvedOptions().timeZone, r = new Date(le(e, n)), i = new Date(le(e, t ?? "UTC")).getTime() - r.getTime();
	return new Date(e.getTime() - i);
}, M = function() {
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
}(), N = function(e, t) {
	return N = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, N(e, t);
};
function de(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	N(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var P = function() {
	return P = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, P.apply(this, arguments);
};
function F(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/rrule/dist/esm/callbackiterresult.js
var fe = function(e) {
	de(t, e);
	function t(t, n, r) {
		var i = e.call(this, t, n) || this;
		return i.iterator = r, i;
	}
	return t.prototype.add = function(e) {
		return this.iterator(e, this._result.length) ? (this._result.push(e), !0) : !1;
	}, t;
}(M), I = {
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
}, pe = function(e, t) {
	return e.indexOf(t) !== -1;
}, me = function(e) {
	return e.toString();
}, he = function(e, t, n) {
	return `${t} ${n}, ${e}`;
}, L = function() {
	function e(e, t, n, r) {
		if (t === void 0 && (t = me), n === void 0 && (n = I), r === void 0 && (r = he), this.text = [], this.language = n || I, this.gettext = t, this.dateFormatter = r, this.rrule = e, this.options = e.options, this.origOptions = e.origOptions, this.origOptions.bymonthday) {
			var i = [].concat(this.options.bymonthday), a = [].concat(this.options.bynmonthday);
			i.sort(function(e, t) {
				return e - t;
			}), a.sort(function(e, t) {
				return t - e;
			}), this.bymonthday = i.concat(a), this.bymonthday.length || (this.bymonthday = null);
		}
		if (s(this.origOptions.byweekday)) {
			var o = u(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday], c = String(o);
			this.byweekday = {
				allWeeks: o.filter(function(e) {
					return !e.n;
				}),
				someWeeks: o.filter(function(e) {
					return !!e.n;
				}),
				isWeekdays: c.indexOf("MO") !== -1 && c.indexOf("TU") !== -1 && c.indexOf("WE") !== -1 && c.indexOf("TH") !== -1 && c.indexOf("FR") !== -1 && c.indexOf("SA") === -1 && c.indexOf("SU") === -1,
				isEveryDay: c.indexOf("MO") !== -1 && c.indexOf("TU") !== -1 && c.indexOf("WE") !== -1 && c.indexOf("TH") !== -1 && c.indexOf("FR") !== -1 && c.indexOf("SA") !== -1 && c.indexOf("SU") !== -1
			};
			var l = function(e, t) {
				return e.weekday - t.weekday;
			};
			this.byweekday.allWeeks.sort(l), this.byweekday.someWeeks.sort(l), this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null), this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
		} else this.byweekday = null;
	}
	return e.isFullyConvertible = function(t) {
		var n = !0;
		if (!(t.options.freq in e.IMPLEMENTED) || t.origOptions.until && t.origOptions.count) return !1;
		for (var r in t.origOptions) {
			if (pe([
				"dtstart",
				"tzid",
				"wkst",
				"freq"
			], r)) return !0;
			if (!pe(e.IMPLEMENTED[t.options.freq], r)) return !1;
		}
		return n;
	}, e.prototype.isFullyConvertible = function() {
		return e.isFullyConvertible(this.rrule);
	}, e.prototype.toString = function() {
		var t = this.gettext;
		if (!(this.options.freq in e.IMPLEMENTED)) return t("RRule error: Unable to fully convert this rrule to text");
		if (this.text = [t("every")], this[Q.FREQUENCIES[this.options.freq]](), this.options.until) {
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
		var t = c(e) ? (e + 1) % 7 : e.getJsWeekday();
		return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[t];
	}, e.prototype.plural = function(e) {
		return e % 100 != 1;
	}, e.prototype.add = function(e) {
		return this.text.push(" "), this.text.push(e), this;
	}, e.prototype.list = function(e, t, n, r) {
		var i = this;
		r === void 0 && (r = ","), u(e) || (e = [e]);
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
}(), ge = function() {
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
function _e(e, t) {
	t === void 0 && (t = I);
	var n = {}, r = new ge(t.tokens);
	if (!r.start(e)) return null;
	return i(), n;
	function i() {
		r.expect("every");
		var e = r.acceptNumber();
		if (e && (n.interval = parseInt(e[0], 10)), r.isDone()) throw Error("Unexpected end");
		switch (r.symbol) {
			case "day(s)":
				n.freq = Q.DAILY, r.nextSymbol() && (o(), d());
				break;
			case "weekday(s)":
				n.freq = Q.WEEKLY, n.byweekday = [
					Q.MO,
					Q.TU,
					Q.WE,
					Q.TH,
					Q.FR
				], r.nextSymbol(), o(), d();
				break;
			case "week(s)":
				n.freq = Q.WEEKLY, r.nextSymbol() && (a(), o(), d());
				break;
			case "hour(s)":
				n.freq = Q.HOURLY, r.nextSymbol() && (a(), d());
				break;
			case "minute(s)":
				n.freq = Q.MINUTELY, r.nextSymbol() && (a(), d());
				break;
			case "month(s)":
				n.freq = Q.MONTHLY, r.nextSymbol() && (a(), d());
				break;
			case "year(s)":
				n.freq = Q.YEARLY, r.nextSymbol() && (a(), d());
				break;
			case "monday":
			case "tuesday":
			case "wednesday":
			case "thursday":
			case "friday":
			case "saturday":
			case "sunday":
				if (n.freq = Q.WEEKLY, n.byweekday = [Q[r.symbol.substr(0, 2).toUpperCase()]], !r.nextSymbol()) return;
				for (; r.accept("comma");) {
					if (r.isDone()) throw Error("Unexpected end");
					var t = c();
					if (!t) throw Error("Unexpected symbol " + r.symbol + ", expected weekday");
					n.byweekday.push(Q[t]), r.nextSymbol();
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
				if (n.freq = Q.YEARLY, n.bymonth = [s()], !r.nextSymbol()) return;
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
			if (i) a ? (r.nextSymbol(), n.byweekday ||= [], n.byweekday.push(Q[a].nth(i))) : (n.bymonthday ||= [], n.bymonthday.push(i), r.accept("day(s)"));
			else if (a) r.nextSymbol(), n.byweekday ||= [], n.byweekday.push(Q[a]);
			else if (r.symbol === "weekday(s)") r.nextSymbol(), n.byweekday ||= [
				Q.MO,
				Q.TU,
				Q.WE,
				Q.TH,
				Q.FR
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
var R;
(function(e) {
	e[e.YEARLY = 0] = "YEARLY", e[e.MONTHLY = 1] = "MONTHLY", e[e.WEEKLY = 2] = "WEEKLY", e[e.DAILY = 3] = "DAILY", e[e.HOURLY = 4] = "HOURLY", e[e.MINUTELY = 5] = "MINUTELY", e[e.SECONDLY = 6] = "SECONDLY";
})(R ||= {});
function z(e) {
	return e < R.HOURLY;
}
//#endregion
//#region node_modules/rrule/dist/esm/nlp/index.js
var ve = function(e, t) {
	return t === void 0 && (t = I), new Q(_e(e, t) || void 0);
}, B = [
	"count",
	"until",
	"interval",
	"byweekday",
	"bymonthday",
	"bymonth"
];
L.IMPLEMENTED = [], L.IMPLEMENTED[R.HOURLY] = B, L.IMPLEMENTED[R.MINUTELY] = B, L.IMPLEMENTED[R.DAILY] = ["byhour"].concat(B), L.IMPLEMENTED[R.WEEKLY] = B, L.IMPLEMENTED[R.MONTHLY] = B, L.IMPLEMENTED[R.YEARLY] = ["byweekno", "byyearday"].concat(B);
var ye = function(e, t, n, r) {
	return new L(e, t, n, r).toString();
}, be = L.isFullyConvertible, V = function() {
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
}(), xe = function(e) {
	de(t, e);
	function t(t, n, r, i, a, o, s) {
		var c = e.call(this, i, a, o, s) || this;
		return c.year = t, c.month = n, c.day = r, c;
	}
	return t.fromDate = function(e) {
		return new this(e.getUTCFullYear(), e.getUTCMonth() + 1, e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.valueOf() % 1e3);
	}, t.prototype.getWeekday = function() {
		return O(new Date(this.getTime()));
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
			var t = Math.floor(this.month / 12), n = g(this.month, 12);
			this.month = n, this.year += t, this.month === 0 && (this.month = 12, --this.year);
		}
	}, t.prototype.addWeekly = function(e, t) {
		t > this.getWeekday() ? this.day += -(this.getWeekday() + 1 + (6 - t)) + e * 7 : this.day += -(this.getWeekday() - t) + e * 7, this.fixDay();
	}, t.prototype.addDaily = function(e) {
		this.day += e, this.fixDay();
	}, t.prototype.addHours = function(e, t, n) {
		for (t && (this.hour += Math.floor((23 - this.hour) / e) * e);;) {
			this.hour += e;
			var r = _(this.hour, 24), i = r.div, a = r.mod;
			if (i && (this.hour = a, this.addDaily(i)), v(n) || b(n, this.hour)) break;
		}
	}, t.prototype.addMinutes = function(e, t, n, r) {
		for (t && (this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / e) * e);;) {
			this.minute += e;
			var i = _(this.minute, 60), a = i.div, o = i.mod;
			if (a && (this.minute = o, this.addHours(a, !1, n)), (v(n) || b(n, this.hour)) && (v(r) || b(r, this.minute))) break;
		}
	}, t.prototype.addSeconds = function(e, t, n, r, i) {
		for (t && (this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / e) * e);;) {
			this.second += e;
			var a = _(this.second, 60), o = a.div, s = a.mod;
			if (o && (this.second = s, this.addMinutes(o, !1, n, r)), (v(n) || b(n, this.hour)) && (v(r) || b(r, this.minute)) && (v(i) || b(i, this.second))) break;
		}
	}, t.prototype.fixDay = function() {
		if (!(this.day <= 28)) {
			var e = ae(this.year, this.month - 1)[1];
			if (!(this.day <= e)) for (; this.day > e;) {
				if (this.day -= e, ++this.month, this.month === 13 && (this.month = 1, ++this.year, this.year > 9999)) return;
				e = ae(this.year, this.month - 1)[1];
			}
		}
	}, t.prototype.add = function(e, t) {
		var n = e.freq, r = e.interval, i = e.wkst, a = e.byhour, o = e.byminute, s = e.bysecond;
		switch (n) {
			case R.YEARLY: return this.addYears(r);
			case R.MONTHLY: return this.addMonths(r);
			case R.WEEKLY: return this.addWeekly(r, i);
			case R.DAILY: return this.addDaily(r);
			case R.HOURLY: return this.addHours(r, t, a);
			case R.MINUTELY: return this.addMinutes(r, t, a, o);
			case R.SECONDLY: return this.addSeconds(r, t, a, o, s);
		}
	}, t;
}(V);
//#endregion
//#region node_modules/rrule/dist/esm/parseoptions.js
function Se(e) {
	for (var t = [], n = Object.keys(e), r = 0, i = n; r < i.length; r++) {
		var a = i[r];
		b(it, a) || t.push(a), ee(e[a]) && !D(e[a]) && t.push(a);
	}
	if (t.length) throw Error("Invalid options: " + t.join(", "));
	return P({}, e);
}
function Ce(e) {
	var t = P(P({}, rt), Se(e));
	if (s(t.byeaster) && (t.freq = Q.YEARLY), !(s(t.freq) && Q.FREQUENCIES[t.freq])) throw Error(`Invalid frequency: ${t.freq} ${e.freq}`);
	if (t.dtstart ||= new Date((/* @__PURE__ */ new Date()).setMilliseconds(0)), s(t.wkst) ? c(t.wkst) || (t.wkst = t.wkst.weekday) : t.wkst = Q.MO.weekday, s(t.bysetpos)) {
		c(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
		for (var n = 0; n < t.bysetpos.length; n++) {
			var r = t.bysetpos[n];
			if (r === 0 || !(r >= -366 && r <= 366)) throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
		}
	}
	if (!(t.byweekno || y(t.byweekno) || y(t.byyearday) || t.bymonthday || y(t.bymonthday) || s(t.byweekday) || s(t.byeaster))) switch (t.freq) {
		case Q.YEARLY:
			t.bymonth ||= t.dtstart.getUTCMonth() + 1, t.bymonthday = t.dtstart.getUTCDate();
			break;
		case Q.MONTHLY:
			t.bymonthday = t.dtstart.getUTCDate();
			break;
		case Q.WEEKLY:
			t.byweekday = [O(t.dtstart)];
			break;
	}
	if (s(t.bymonth) && !u(t.bymonth) && (t.bymonth = [t.bymonth]), s(t.byyearday) && !u(t.byyearday) && c(t.byyearday) && (t.byyearday = [t.byyearday]), !s(t.bymonthday)) t.bymonthday = [], t.bynmonthday = [];
	else if (u(t.bymonthday)) {
		for (var i = [], a = [], n = 0; n < t.bymonthday.length; n++) {
			var r = t.bymonthday[n];
			r > 0 ? i.push(r) : r < 0 && a.push(r);
		}
		t.bymonthday = i, t.bynmonthday = a;
	} else t.bymonthday < 0 ? (t.bynmonthday = [t.bymonthday], t.bymonthday = []) : (t.bynmonthday = [], t.bymonthday = [t.bymonthday]);
	if (s(t.byweekno) && !u(t.byweekno) && (t.byweekno = [t.byweekno]), !s(t.byweekday)) t.bynweekday = null;
	else if (c(t.byweekday)) t.byweekday = [t.byweekday], t.bynweekday = null;
	else if (l(t.byweekday)) t.byweekday = [o.fromStr(t.byweekday).weekday], t.bynweekday = null;
	else if (t.byweekday instanceof o) !t.byweekday.n || t.freq > Q.MONTHLY ? (t.byweekday = [t.byweekday.weekday], t.bynweekday = null) : (t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]], t.byweekday = null);
	else {
		for (var d = [], f = [], n = 0; n < t.byweekday.length; n++) {
			var p = t.byweekday[n];
			if (c(p)) {
				d.push(p);
				continue;
			} else if (l(p)) {
				d.push(o.fromStr(p).weekday);
				continue;
			}
			!p.n || t.freq > Q.MONTHLY ? d.push(p.weekday) : f.push([p.weekday, p.n]);
		}
		t.byweekday = y(d) ? d : null, t.bynweekday = y(f) ? f : null;
	}
	return s(t.byhour) ? c(t.byhour) && (t.byhour = [t.byhour]) : t.byhour = t.freq < Q.HOURLY ? [t.dtstart.getUTCHours()] : null, s(t.byminute) ? c(t.byminute) && (t.byminute = [t.byminute]) : t.byminute = t.freq < Q.MINUTELY ? [t.dtstart.getUTCMinutes()] : null, s(t.bysecond) ? c(t.bysecond) && (t.bysecond = [t.bysecond]) : t.bysecond = t.freq < Q.SECONDLY ? [t.dtstart.getUTCSeconds()] : null, { parsedOptions: t };
}
function we(e) {
	var t = e.dtstart.getTime() % 1e3;
	if (!z(e.freq)) return [];
	var n = [];
	return e.byhour.forEach(function(r) {
		e.byminute.forEach(function(i) {
			e.bysecond.forEach(function(e) {
				n.push(new V(r, i, e, t));
			});
		});
	}), n;
}
//#endregion
//#region node_modules/rrule/dist/esm/parsestring.js
function H(e) {
	var t = e.split("\n").map(Te).filter(function(e) {
		return e !== null;
	});
	return P(P({}, t[0]), t[1]);
}
function U(e) {
	var t = {}, n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
	if (!n) return t;
	var r = n[1], i = n[2];
	return r && (t.tzid = r), t.dtstart = j(i), t;
}
function Te(e) {
	if (e = e.replace(/^\s+|\s+$/, ""), !e.length) return null;
	var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
	if (!t) return Ee(e);
	var n = t[1];
	switch (n.toUpperCase()) {
		case "RRULE":
		case "EXRULE": return Ee(e);
		case "DTSTART": return U(e);
		default: throw Error(`Unsupported RFC prop ${n} in ${e}`);
	}
}
function Ee(e) {
	var t = U(e.replace(/^RRULE:/i, ""));
	return e.replace(/^(?:RRULE|EXRULE):/i, "").split(";").forEach(function(n) {
		var r = n.split("="), i = r[0], a = r[1];
		switch (i.toUpperCase()) {
			case "FREQ":
				t.freq = R[a.toUpperCase()];
				break;
			case "WKST":
				t.wkst = Z[a.toUpperCase()];
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
				var o = De(a), s = i.toLowerCase();
				t[s] = o;
				break;
			case "BYWEEKDAY":
			case "BYDAY":
				t.byweekday = ke(a);
				break;
			case "DTSTART":
			case "TZID":
				var c = U(e);
				t.tzid = c.tzid, t.dtstart = c.dtstart;
				break;
			case "UNTIL":
				t.until = j(a);
				break;
			case "BYEASTER":
				t.byeaster = Number(a);
				break;
			default: throw Error("Unknown RRULE property '" + i + "'");
		}
	}), t;
}
function De(e) {
	return e.indexOf(",") === -1 ? Oe(e) : e.split(",").map(Oe);
}
function Oe(e) {
	return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
function ke(e) {
	return e.split(",").map(function(e) {
		if (e.length === 2) return Z[e];
		var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
		if (!t || t.length < 3) throw SyntaxError(`Invalid weekday string: ${e}`);
		var n = Number(t[1]), r = Z[t[2]].weekday;
		return new o(r, n);
	});
}
//#endregion
//#region node_modules/rrule/dist/esm/datewithzone.js
var W = function() {
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
		var e = A(this.date.getTime(), this.isUTC);
		return this.isUTC ? `:${e}` : `;TZID=${this.tzid}:${e}`;
	}, e.prototype.getTime = function() {
		return this.date.getTime();
	}, e.prototype.rezonedDate = function() {
		return this.isUTC ? this.date : ue(this.date, this.tzid);
	}, e;
}();
//#endregion
//#region node_modules/rrule/dist/esm/optionstostring.js
function G(e) {
	for (var t = [], n = "", r = Object.keys(e), i = Object.keys(rt), a = 0; a < r.length; a++) if (r[a] !== "tzid" && b(i, r[a])) {
		var l = r[a].toUpperCase(), d = e[r[a]], f = "";
		if (!(!s(d) || u(d) && !d.length)) {
			switch (l) {
				case "FREQ":
					f = Q.FREQUENCIES[e.freq];
					break;
				case "WKST":
					f = c(d) ? new o(d).toString() : d.toString();
					break;
				case "BYWEEKDAY":
					l = "BYDAY", f = p(d).map(function(e) {
						return e instanceof o ? e : u(e) ? new o(e[0], e[1]) : new o(e);
					}).toString();
					break;
				case "DTSTART":
					n = Ae(d, e.tzid);
					break;
				case "UNTIL":
					f = A(d, !e.tzid);
					break;
				default: if (u(d)) {
					for (var m = [], h = 0; h < d.length; h++) m[h] = String(d[h]);
					f = m.toString();
				} else f = String(d);
			}
			f && t.push([l, f]);
		}
	}
	var g = t.map(function(e) {
		return `${e[0]}=${e[1].toString()}`;
	}).join(";"), _ = "";
	return g !== "" && (_ = `RRULE:${g}`), [n, _].filter(function(e) {
		return !!e;
	}).join("\n");
}
function Ae(e, t) {
	return e ? "DTSTART" + new W(new Date(e), t).toString() : "";
}
//#endregion
//#region node_modules/rrule/dist/esm/cache.js
function je(e, t) {
	return Array.isArray(e) ? !Array.isArray(t) || e.length !== t.length ? !1 : e.every(function(e, n) {
		return e.getTime() === t[n].getTime();
	}) : e instanceof Date ? t instanceof Date && e.getTime() === t.getTime() : e === t;
}
var Me = function() {
	function e() {
		this.all = !1, this.before = [], this.after = [], this.between = [];
	}
	return e.prototype._cacheAdd = function(e, t, n) {
		t &&= t instanceof Date ? se(t) : ce(t), e === "all" ? this.all = t : (n._value = t, this[e].push(n));
	}, e.prototype._cacheGet = function(e, t) {
		var n = !1, r = t ? Object.keys(t) : [], i = function(e) {
			for (var n = 0; n < r.length; n++) {
				var i = r[n];
				if (!je(t[i], e[i])) return !0;
			}
			return !1;
		}, a = this[e];
		if (e === "all") n = this.all;
		else if (u(a)) for (var o = 0; o < a.length; o++) {
			var s = a[o];
			if (!(r.length && i(s))) {
				n = s._value;
				break;
			}
		}
		if (!n && this.all) {
			for (var c = new M(e, t), o = 0; o < this.all.length && c.accept(this.all[o]); o++);
			n = c.getValue(), this._cacheAdd(e, n, t);
		}
		return u(n) ? ce(n) : n instanceof Date ? se(n) : n;
	}, e;
}(), Ne = F(F(F(F(F(F(F(F(F(F(F(F(F([], f(1, 31), !0), f(2, 28), !0), f(3, 31), !0), f(4, 30), !0), f(5, 31), !0), f(6, 30), !0), f(7, 31), !0), f(8, 31), !0), f(9, 30), !0), f(10, 31), !0), f(11, 30), !0), f(12, 31), !0), f(1, 7), !0), Pe = F(F(F(F(F(F(F(F(F(F(F(F(F([], f(1, 31), !0), f(2, 29), !0), f(3, 31), !0), f(4, 30), !0), f(5, 31), !0), f(6, 30), !0), f(7, 31), !0), f(8, 31), !0), f(9, 30), !0), f(10, 31), !0), f(11, 30), !0), f(12, 31), !0), f(1, 7), !0), Fe = d(1, 29), Ie = d(1, 30), K = d(1, 31), q = d(1, 32), Le = F(F(F(F(F(F(F(F(F(F(F(F(F([], q, !0), Ie, !0), q, !0), K, !0), q, !0), K, !0), q, !0), q, !0), K, !0), q, !0), K, !0), q, !0), q.slice(0, 7), !0), Re = F(F(F(F(F(F(F(F(F(F(F(F(F([], q, !0), Fe, !0), q, !0), K, !0), q, !0), K, !0), q, !0), q, !0), K, !0), q, !0), K, !0), q, !0), q.slice(0, 7), !0), ze = d(-28, 0), Be = d(-29, 0), J = d(-30, 0), Y = d(-31, 0), Ve = F(F(F(F(F(F(F(F(F(F(F(F(F([], Y, !0), Be, !0), Y, !0), J, !0), Y, !0), J, !0), Y, !0), Y, !0), J, !0), Y, !0), J, !0), Y, !0), Y.slice(0, 7), !0), He = F(F(F(F(F(F(F(F(F(F(F(F(F([], Y, !0), ze, !0), Y, !0), J, !0), Y, !0), J, !0), Y, !0), Y, !0), J, !0), Y, !0), J, !0), Y, !0), Y.slice(0, 7), !0), Ue = [
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
], We = [
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
], Ge = (function() {
	for (var e = [], t = 0; t < 55; t++) e = e.concat(d(7));
	return e;
})();
//#endregion
//#region node_modules/rrule/dist/esm/iterinfo/yearinfo.js
function Ke(e, t) {
	var n = x(e, 1, 1), r = E(e) ? 366 : 365, i = E(e + 1) ? 366 : 365, a = ne(n), o = O(n), s = P(P({
		yearlen: r,
		nextyearlen: i,
		yearordinal: a,
		yearweekday: o
	}, qe(e)), { wnomask: null });
	if (v(t.byweekno)) return s;
	s.wnomask = f(0, r + 7);
	var c, l, u = c = g(7 - o + t.wkst, 7);
	u >= 4 ? (u = 0, l = s.yearlen + g(o - t.wkst, 7)) : l = r - u;
	for (var d = Math.floor(l / 7), p = g(l, 7), m = Math.floor(d + p / 4), h = 0; h < t.byweekno.length; h++) {
		var _ = t.byweekno[h];
		if (_ < 0 && (_ += m + 1), _ > 0 && _ <= m) {
			var y = void 0;
			_ > 1 ? (y = u + (_ - 1) * 7, u !== c && (y -= 7 - c)) : y = u;
			for (var S = 0; S < 7 && (s.wnomask[y] = 1, y++, s.wdaymask[y] !== t.wkst); S++);
		}
	}
	if (b(t.byweekno, 1)) {
		var y = u + m * 7;
		if (u !== c && (y -= 7 - c), y < r) for (var h = 0; h < 7 && (s.wnomask[y] = 1, y += 1, s.wdaymask[y] !== t.wkst); h++);
	}
	if (u) {
		var C = void 0;
		if (b(t.byweekno, -1)) C = -1;
		else {
			var w = O(x(e - 1, 1, 1)), T = g(7 - w.valueOf() + t.wkst, 7), ee = E(e - 1) ? 366 : 365, D = void 0;
			T >= 4 ? (T = 0, D = ee + g(w - t.wkst, 7)) : D = r - u, C = Math.floor(52 + g(D, 7) / 4);
		}
		if (b(t.byweekno, C)) for (var y = 0; y < u; y++) s.wnomask[y] = 1;
	}
	return s;
}
function qe(e) {
	var t = E(e) ? 366 : 365, n = O(x(e, 1, 1));
	return t === 365 ? {
		mmask: Ne,
		mdaymask: Re,
		nmdaymask: He,
		wdaymask: Ge.slice(n),
		mrange: We
	} : {
		mmask: Pe,
		mdaymask: Le,
		nmdaymask: Ve,
		wdaymask: Ge.slice(n),
		mrange: Ue
	};
}
//#endregion
//#region node_modules/rrule/dist/esm/iterinfo/monthinfo.js
function Je(e, t, n, r, i, a) {
	var o = {
		lastyear: e,
		lastmonth: t,
		nwdaymask: []
	}, s = [];
	if (a.freq === Q.YEARLY) if (v(a.bymonth)) s = [[0, n]];
	else for (var c = 0; c < a.bymonth.length; c++) t = a.bymonth[c], s.push(r.slice(t - 1, t + 1));
	else a.freq === Q.MONTHLY && (s = [r.slice(t - 1, t + 1)]);
	if (v(s)) return o;
	o.nwdaymask = f(0, n);
	for (var c = 0; c < s.length; c++) for (var l = s[c], u = l[0], d = l[1] - 1, p = 0; p < a.bynweekday.length; p++) {
		var m = void 0, h = a.bynweekday[p], _ = h[0], y = h[1];
		y < 0 ? (m = d + (y + 1) * 7, m -= g(i[m] - _, 7)) : (m = u + (y - 1) * 7, m += g(7 - i[m] + _, 7)), u <= m && m <= d && (o.nwdaymask[m] = 1);
	}
	return o;
}
//#endregion
//#region node_modules/rrule/dist/esm/iterinfo/easter.js
function Ye(e, t) {
	t === void 0 && (t = 0);
	var n = e % 19, r = Math.floor(e / 100), i = e % 100, a = Math.floor(r / 4), o = r % 4, s = Math.floor((r + 8) / 25), c = Math.floor((r - s + 1) / 3), l = Math.floor(19 * n + r - a - c + 15) % 30, u = Math.floor(i / 4), d = i % 4, f = Math.floor(32 + 2 * o + 2 * u - l - d) % 7, p = Math.floor((n + 11 * l + 22 * f) / 451), m = Math.floor((l + f - 7 * p + 114) / 31), h = (l + f - 7 * p + 114) % 31 + 1, g = Date.UTC(e, m - 1, h + t);
	return [Math.ceil((g - Date.UTC(e, 0, 1)) / (1e3 * 60 * 60 * 24))];
}
//#endregion
//#region node_modules/rrule/dist/esm/iterinfo/index.js
var Xe = function() {
	function e(e) {
		this.options = e;
	}
	return e.prototype.rebuild = function(e, t) {
		var n = this.options;
		if (e !== this.lastyear && (this.yearinfo = Ke(e, n)), y(n.bynweekday) && (t !== this.lastmonth || e !== this.lastyear)) {
			var r = this.yearinfo, i = r.yearlen, a = r.mrange, o = r.wdaymask;
			this.monthinfo = Je(e, t, i, a, o, n);
		}
		s(n.byeaster) && (this.eastermask = Ye(e, n.byeaster));
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
			d(this.yearlen),
			0,
			this.yearlen
		];
	}, e.prototype.mdayset = function(e, t) {
		for (var n = this.mrange[t - 1], r = this.mrange[t], i = f(null, this.yearlen), a = n; a < r; a++) i[a] = a;
		return [
			i,
			n,
			r
		];
	}, e.prototype.wdayset = function(e, t, n) {
		for (var r = f(null, this.yearlen + 7), i = ne(x(e, t, n)) - this.yearordinal, a = i, o = 0; o < 7 && (r[i] = i, ++i, this.wdaymask[i] !== this.options.wkst); o++);
		return [
			r,
			a,
			i
		];
	}, e.prototype.ddayset = function(e, t, n) {
		var r = f(null, this.yearlen), i = ne(x(e, t, n)) - this.yearordinal;
		return r[i] = i, [
			r,
			i,
			i + 1
		];
	}, e.prototype.htimeset = function(e, t, n, r) {
		var i = this, a = [];
		return this.options.byminute.forEach(function(t) {
			a = a.concat(i.mtimeset(e, t, n, r));
		}), k(a), a;
	}, e.prototype.mtimeset = function(e, t, n, r) {
		var i = this.options.bysecond.map(function(n) {
			return new V(e, t, n, r);
		});
		return k(i), i;
	}, e.prototype.stimeset = function(e, t, n, r) {
		return [new V(e, t, n, r)];
	}, e.prototype.getdayset = function(e) {
		switch (e) {
			case R.YEARLY: return this.ydayset.bind(this);
			case R.MONTHLY: return this.mdayset.bind(this);
			case R.WEEKLY: return this.wdayset.bind(this);
			case R.DAILY: return this.ddayset.bind(this);
			default: return this.ddayset.bind(this);
		}
	}, e.prototype.gettimeset = function(e) {
		switch (e) {
			case R.HOURLY: return this.htimeset.bind(this);
			case R.MINUTELY: return this.mtimeset.bind(this);
			case R.SECONDLY: return this.stimeset.bind(this);
		}
	}, e;
}();
//#endregion
//#region node_modules/rrule/dist/esm/iter/poslist.js
function Ze(e, t, n, r, i, a) {
	for (var o = [], c = 0; c < e.length; c++) {
		var l = void 0, u = void 0, d = e[c];
		d < 0 ? (l = Math.floor(d / t.length), u = g(d, t.length)) : (l = Math.floor((d - 1) / t.length), u = g(d - 1, t.length));
		for (var f = [], p = n; p < r; p++) {
			var m = a[p];
			s(m) && f.push(m);
		}
		var h = void 0;
		h = l < 0 ? f.slice(l)[0] : f[l];
		var _ = t[u], v = oe(re(i.yearordinal + h), _);
		b(o, v) || o.push(v);
	}
	return k(o), o;
}
//#endregion
//#region node_modules/rrule/dist/esm/iter/index.js
function Qe(e, t) {
	var n = t.dtstart, r = t.freq, i = t.interval, a = t.until, o = t.bysetpos, c = t.count;
	if (c === 0 || i === 0) return X(e);
	var l = xe.fromDate(n), u = new Xe(t);
	u.rebuild(l.year, l.month);
	for (var d = nt(u, l, t);;) {
		var f = u.getdayset(r)(l.year, l.month, l.day), p = f[0], m = f[1], h = f[2], g = tt(p, m, h, u, t);
		if (y(o)) for (var _ = Ze(o, d, m, h, u, p), v = 0; v < _.length; v++) {
			var b = _[v];
			if (a && b > a) return X(e);
			if (b >= n) {
				var x = et(b, t);
				if (!e.accept(x) || c && (--c, !c)) return X(e);
			}
		}
		else for (var v = m; v < h; v++) {
			var S = p[v];
			if (s(S)) for (var C = re(u.yearordinal + S), w = 0; w < d.length; w++) {
				var T = d[w], b = oe(C, T);
				if (a && b > a) return X(e);
				if (b >= n) {
					var x = et(b, t);
					if (!e.accept(x) || c && (--c, !c)) return X(e);
				}
			}
		}
		if (t.interval === 0 || (l.add(t, g), l.year > 9999)) return X(e);
		z(r) || (d = u.gettimeset(r)(l.hour, l.minute, l.second, 0)), u.rebuild(l.year, l.month);
	}
}
function $e(e, t, n) {
	var r = n.bymonth, i = n.byweekno, a = n.byweekday, o = n.byeaster, s = n.bymonthday, c = n.bynmonthday, l = n.byyearday;
	return y(r) && !b(r, e.mmask[t]) || y(i) && !e.wnomask[t] || y(a) && !b(a, e.wdaymask[t]) || y(e.nwdaymask) && !e.nwdaymask[t] || o !== null && !b(e.eastermask, t) || (y(s) || y(c)) && !b(s, e.mdaymask[t]) && !b(c, e.nmdaymask[t]) || y(l) && (t < e.yearlen && !b(l, t + 1) && !b(l, -e.yearlen + t) || t >= e.yearlen && !b(l, t + 1 - e.yearlen) && !b(l, -e.nextyearlen + t - e.yearlen));
}
function et(e, t) {
	return new W(e, t.tzid).rezonedDate();
}
function X(e) {
	return e.getValue();
}
function tt(e, t, n, r, i) {
	for (var a = !1, o = t; o < n; o++) {
		var s = e[o];
		a = $e(r, s, i), a && (e[s] = null);
	}
	return a;
}
function nt(e, t, n) {
	var r = n.freq, i = n.byhour, a = n.byminute, o = n.bysecond;
	return z(r) ? we(n) : r >= Q.HOURLY && y(i) && !b(i, t.hour) || r >= Q.MINUTELY && y(a) && !b(a, t.minute) || r >= Q.SECONDLY && y(o) && !b(o, t.second) ? [] : e.gettimeset(r)(t.hour, t.minute, t.second, t.millisecond);
}
//#endregion
//#region node_modules/rrule/dist/esm/rrule.js
var Z = {
	MO: new o(0),
	TU: new o(1),
	WE: new o(2),
	TH: new o(3),
	FR: new o(4),
	SA: new o(5),
	SU: new o(6)
}, rt = {
	freq: R.YEARLY,
	dtstart: null,
	interval: 1,
	wkst: Z.MO,
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
}, it = Object.keys(rt), Q = function() {
	function e(e, t) {
		e === void 0 && (e = {}), t === void 0 && (t = !1), this._cache = t ? null : new Me(), this.origOptions = Se(e);
		var n = Ce(e).parsedOptions;
		this.options = n;
	}
	return e.parseText = function(e, t) {
		return _e(e, t);
	}, e.fromText = function(e, t) {
		return ve(e, t);
	}, e.fromString = function(t) {
		return new e(e.parseString(t) || void 0);
	}, e.prototype._iter = function(e) {
		return Qe(e, this.options);
	}, e.prototype._cacheGet = function(e, t) {
		return this._cache ? this._cache._cacheGet(e, t) : !1;
	}, e.prototype._cacheAdd = function(e, t, n) {
		if (this._cache) return this._cache._cacheAdd(e, t, n);
	}, e.prototype.all = function(e) {
		if (e) return this._iter(new fe("all", {}, e));
		var t = this._cacheGet("all");
		return t === !1 && (t = this._iter(new M("all", {})), this._cacheAdd("all", t)), t;
	}, e.prototype.between = function(e, t, n, r) {
		if (n === void 0 && (n = !1), !D(e) || !D(t)) throw Error("Invalid date passed in to RRule.between");
		var i = {
			before: t,
			after: e,
			inc: n
		};
		if (r) return this._iter(new fe("between", i, r));
		var a = this._cacheGet("between", i);
		return a === !1 && (a = this._iter(new M("between", i)), this._cacheAdd("between", a, i)), a;
	}, e.prototype.before = function(e, t) {
		if (t === void 0 && (t = !1), !D(e)) throw Error("Invalid date passed in to RRule.before");
		var n = {
			dt: e,
			inc: t
		}, r = this._cacheGet("before", n);
		return r === !1 && (r = this._iter(new M("before", n)), this._cacheAdd("before", r, n)), r;
	}, e.prototype.after = function(e, t) {
		if (t === void 0 && (t = !1), !D(e)) throw Error("Invalid date passed in to RRule.after");
		var n = {
			dt: e,
			inc: t
		}, r = this._cacheGet("after", n);
		return r === !1 && (r = this._iter(new M("after", n)), this._cacheAdd("after", r, n)), r;
	}, e.prototype.count = function() {
		return this.all().length;
	}, e.prototype.toString = function() {
		return G(this.origOptions);
	}, e.prototype.toText = function(e, t, n) {
		return ye(this, e, t, n);
	}, e.prototype.isFullyConvertibleToText = function() {
		return be(this);
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
	], e.YEARLY = R.YEARLY, e.MONTHLY = R.MONTHLY, e.WEEKLY = R.WEEKLY, e.DAILY = R.DAILY, e.HOURLY = R.HOURLY, e.MINUTELY = R.MINUTELY, e.SECONDLY = R.SECONDLY, e.MO = Z.MO, e.TU = Z.TU, e.WE = Z.WE, e.TH = Z.TH, e.FR = Z.FR, e.SA = Z.SA, e.SU = Z.SU, e.parseString = H, e.optionsToString = G, e;
}();
//#endregion
//#region node_modules/rrule/dist/esm/iterset.js
function at(e, t, n, r, i, a) {
	var o = {}, s = e.accept;
	function c(e, t) {
		n.forEach(function(n) {
			n.between(e, t, !0).forEach(function(e) {
				o[Number(e)] = !0;
			});
		});
	}
	i.forEach(function(e) {
		var t = new W(e, a).rezonedDate();
		o[Number(t)] = !0;
	}), e.accept = function(e) {
		var t = Number(e);
		return isNaN(t) ? s.call(this, e) : !o[t] && (c(/* @__PURE__ */ new Date(t - 1), new Date(t + 1)), !o[t]) ? (o[t] = !0, s.call(this, e)) : !0;
	}, e.method === "between" && (c(e.args.after, e.args.before), e.accept = function(e) {
		var t = Number(e);
		return o[t] ? !0 : (o[t] = !0, s.call(this, e));
	});
	for (var l = 0; l < r.length; l++) {
		var u = new W(r[l], a).rezonedDate();
		if (!e.accept(new Date(u.getTime()))) break;
	}
	t.forEach(function(t) {
		Qe(e, t.options);
	});
	var d = e._result;
	switch (k(d), e.method) {
		case "all":
		case "between": return d;
		case "before": return d.length && d[d.length - 1] || null;
		default: return d.length && d[0] || null;
	}
}
//#endregion
//#region node_modules/rrule/dist/esm/rrulestr.js
var ot = {
	dtstart: null,
	cache: !1,
	unfold: !1,
	forceset: !1,
	compatible: !1,
	tzid: null
};
function st(e, t) {
	var n = [], r = [], i = [], a = [], o = U(e), s = o.dtstart, c = o.tzid;
	return mt(e, t.unfold).forEach(function(e) {
		if (e) {
			var t = pt(e), o = t.name, s = t.parms, l = t.value;
			switch (o.toUpperCase()) {
				case "RRULE":
					if (s.length) throw Error(`unsupported RRULE parm: ${s.join(",")}`);
					n.push(H(e));
					break;
				case "RDATE":
					var u = (/RDATE(?:;TZID=([^:=]+))?/i.exec(e) ?? [])[1];
					u && !c && (c = u), r = r.concat(gt(l, s));
					break;
				case "EXRULE":
					if (s.length) throw Error(`unsupported EXRULE parm: ${s.join(",")}`);
					i.push(H(l));
					break;
				case "EXDATE":
					a = a.concat(gt(l, s));
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
function ct(e, t) {
	var n = st(e, t), r = n.rrulevals, i = n.rdatevals, a = n.exrulevals, o = n.exdatevals, s = n.dtstart, c = n.tzid, l = t.cache === !1;
	if (t.compatible && (t.forceset = !0, t.unfold = !0), t.forceset || r.length > 1 || i.length || a.length || o.length) {
		var u = new vt(l);
		return u.dtstart(s), u.tzid(c || void 0), r.forEach(function(e) {
			u.rrule(new Q(ut(e, s, c), l));
		}), i.forEach(function(e) {
			u.rdate(e);
		}), a.forEach(function(e) {
			u.exrule(new Q(ut(e, s, c), l));
		}), o.forEach(function(e) {
			u.exdate(e);
		}), t.compatible && t.dtstart && u.rdate(s), u;
	}
	var d = r[0] || {};
	return new Q(ut(d, d.dtstart || t.dtstart || s, d.tzid || t.tzid || c), l);
}
function lt(e, t) {
	return t === void 0 && (t = {}), ct(e, dt(t));
}
function ut(e, t, n) {
	return P(P({}, e), {
		dtstart: t,
		tzid: n
	});
}
function dt(e) {
	var t = [], n = Object.keys(e), r = Object.keys(ot);
	if (n.forEach(function(e) {
		b(r, e) || t.push(e);
	}), t.length) throw Error("Invalid options: " + t.join(", "));
	return P(P({}, ot), e);
}
function ft(e) {
	if (e.indexOf(":") === -1) return {
		name: "RRULE",
		value: e
	};
	var t = h(e, ":", 1);
	return {
		name: t[0],
		value: t[1]
	};
}
function pt(e) {
	var t = ft(e), n = t.name, r = t.value, i = n.split(";");
	if (!i) throw Error("empty property name");
	return {
		name: i[0].toUpperCase(),
		parms: i.slice(1),
		value: r
	};
}
function mt(e, t) {
	if (t === void 0 && (t = !1), e &&= e.trim(), !e) throw Error("Invalid empty string");
	if (!t) return e.split(/\s/);
	for (var n = e.split("\n"), r = 0; r < n.length;) {
		var i = n[r] = n[r].replace(/\s+$/g, "");
		i ? r > 0 && i[0] === " " ? (n[r - 1] += i.slice(1), n.splice(r, 1)) : r += 1 : n.splice(r, 1);
	}
	return n;
}
function ht(e) {
	e.forEach(function(e) {
		if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw Error("unsupported RDATE/EXDATE parm: " + e);
	});
}
function gt(e, t) {
	return ht(t), e.split(",").map(function(e) {
		return j(e);
	});
}
//#endregion
//#region node_modules/rrule/dist/esm/rruleset.js
function _t(e) {
	var t = this;
	return function(n) {
		if (n !== void 0 && (t[`_${e}`] = n), t[`_${e}`] !== void 0) return t[`_${e}`];
		for (var r = 0; r < t._rrule.length; r++) {
			var i = t._rrule[r].origOptions[e];
			if (i) return i;
		}
	};
}
var vt = function(e) {
	de(t, e);
	function t(t) {
		t === void 0 && (t = !1);
		var n = e.call(this, {}, t) || this;
		return n.dtstart = _t.apply(n, ["dtstart"]), n.tzid = _t.apply(n, ["tzid"]), n._rrule = [], n._rdate = [], n._exrule = [], n._exdate = [], n;
	}
	return t.prototype._iter = function(e) {
		return at(e, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
	}, t.prototype.rrule = function(e) {
		yt(e, this._rrule);
	}, t.prototype.exrule = function(e) {
		yt(e, this._exrule);
	}, t.prototype.rdate = function(e) {
		bt(e, this._rdate);
	}, t.prototype.exdate = function(e) {
		bt(e, this._exdate);
	}, t.prototype.rrules = function() {
		return this._rrule.map(function(e) {
			return lt(e.toString());
		});
	}, t.prototype.exrules = function() {
		return this._exrule.map(function(e) {
			return lt(e.toString());
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
		return !this._rrule.length && this._dtstart && (e = e.concat(G({ dtstart: this._dtstart }))), this._rrule.forEach(function(t) {
			e = e.concat(t.toString().split("\n"));
		}), this._exrule.forEach(function(t) {
			e = e.concat(t.toString().split("\n").map(function(e) {
				return e.replace(/^RRULE:/, "EXRULE:");
			}).filter(function(e) {
				return !/^DTSTART/.test(e);
			}));
		}), this._rdate.length && e.push(xt("RDATE", this._rdate, this.tzid())), this._exdate.length && e.push(xt("EXDATE", this._exdate, this.tzid())), e;
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
}(Q);
function yt(e, t) {
	if (!(e instanceof Q)) throw TypeError(String(e) + " is not RRule instance");
	b(t.map(String), String(e)) || t.push(e);
}
function bt(e, t) {
	if (!(e instanceof Date)) throw TypeError(String(e) + " is not Date instance");
	b(t.map(Number), Number(e)) || (t.push(e), k(t));
}
function xt(e, t, n) {
	var r = !n || n.toUpperCase() === "UTC";
	return `${r ? `${e}:` : `${e};TZID=${n}:`}${t.map(function(e) {
		return A(e.valueOf(), r);
	}).join(",")}`;
}
//#endregion
//#region node_modules/@fullcalendar/rrule/index.js
var St = {
	parse(e, t) {
		if (e.rrule != null) {
			let n = Ct(e, t);
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
	expand(e, n, r) {
		return e.rruleSet.between(t(n.start, -1), t(n.end, 1)).map((t) => r.createMarker(e.dateEnv ? e.dateEnv.toDate(t) : t));
	}
};
function Ct(t, n) {
	let r, i = !1, a = !1;
	if (typeof t.rrule == "string") {
		let e = Tt(t.rrule);
		r = e.rruleSet, i = e.isTimeSpecified, a = e.isTimeZoneSpecified;
	}
	if (typeof t.rrule == "object" && t.rrule) {
		let e = wt(t.rrule, n);
		r = new vt(), r.rrule(e.rrule), i = e.isTimeSpecified, a = e.isTimeZoneSpecified;
	}
	let o = [].concat(t.exdate || []), s = [].concat(t.exrule || []);
	for (let t of o) {
		let n = e(t);
		i ||= !n.isTimeUnspecified, a ||= n.timeZoneOffset !== null, r.exdate(/* @__PURE__ */ new Date(n.marker.valueOf() - (n.timeZoneOffset || 0) * 60 * 1e3));
	}
	for (let e of s) {
		let t = wt(e, n);
		i ||= t.isTimeSpecified, a ||= t.isTimeZoneSpecified, r.exrule(t.rrule);
	}
	return {
		rruleSet: r,
		isTimeSpecified: i,
		isTimeZoneSpecified: a
	};
}
function wt(t, n) {
	let r = !1, i = !1;
	function a(t) {
		if (typeof t == "string") {
			let n = e(t);
			return n ? (r ||= !n.isTimeUnspecified, i ||= n.timeZoneOffset !== null, /* @__PURE__ */ new Date(n.marker.valueOf() - (n.timeZoneOffset || 0) * 60 * 1e3)) : null;
		}
		return t;
	}
	return {
		rrule: new Q(Object.assign(Object.assign({}, t), {
			dtstart: a(t.dtstart),
			until: a(t.until),
			freq: $(t.freq),
			wkst: t.wkst == null ? (n.weekDow - 1 + 7) % 7 : $(t.wkst),
			byweekday: Dt(t.byweekday)
		})),
		isTimeSpecified: r,
		isTimeZoneSpecified: i
	};
}
function Tt(e) {
	let t = lt(e, { forceset: !0 }), n = Et(e);
	return Object.assign({ rruleSet: t }, n);
}
function Et(t) {
	let n = !1, r = !1;
	function i(t, i, a) {
		let o = e(a);
		n ||= !o.isTimeUnspecified, r ||= o.timeZoneOffset !== null;
	}
	return t.replace(/\b(DTSTART:)([^\n]*)/, i), t.replace(/\b(EXDATE:)([^\n]*)/, i), t.replace(/\b(UNTIL=)([^;\n]*)/, i), {
		isTimeSpecified: n,
		isTimeZoneSpecified: r
	};
}
function Dt(e) {
	return Array.isArray(e) ? e.map($) : $(e);
}
function $(e) {
	return typeof e == "string" ? Q[e.toUpperCase()] : e;
}
//#endregion
//#region resources/js/plugins/rrule.js
var Ot = { rrule: i({
	name: "@fullcalendar/rrule",
	recurringTypes: [St],
	eventRefiners: {
		rrule: n,
		exrule: n,
		exdate: n,
		duration: r
	}
}) };
//#endregion
export { Ot as default };

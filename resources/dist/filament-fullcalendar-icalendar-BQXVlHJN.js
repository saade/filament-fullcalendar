import { o as e, t } from "./filament-fullcalendar-rolldown-runtime-DY7j01NX.js";
import { V as n, n as r } from "./filament-fullcalendar-core-MrkNOn94.js";
//#endregion
//#region node_modules/@fullcalendar/icalendar/index.js
var i = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	var n;
	(function() {
		/* istanbul ignore next */
		typeof t == "object" ? n = t.exports : typeof HTMLScriptElement < "u" && "noModule" in HTMLScriptElement.prototype ? window.ICAL = n = {} : typeof n != "object" && (n = {});
	})(), n.foldLength = 75, n.newLineChar = "\r\n", n.helpers = {
		updateTimezones: function(e) {
			var t, r, i, a, o, s;
			if (!e || e.name !== "vcalendar") return e;
			for (t = e.getAllSubcomponents(), r = [], i = {}, o = 0; o < t.length; o++) t[o].name === "vtimezone" ? (s = t[o].getFirstProperty("tzid").getFirstValue(), i[s] = t[o]) : r = r.concat(t[o].getAllProperties());
			for (a = {}, o = 0; o < r.length; o++) (s = r[o].getParameter("tzid")) && (a[s] = !0);
			for (o in i) i.hasOwnProperty(o) && !a[o] && e.removeSubcomponent(i[o]);
			for (o in a) a.hasOwnProperty(o) && !i[o] && n.TimezoneService.has(o) && e.addSubcomponent(n.TimezoneService.get(o).component);
			return e;
		},
		isStrictlyNaN: function(e) {
			return typeof e == "number" && isNaN(e);
		},
		strictParseInt: function(e) {
			var t = parseInt(e, 10);
			if (n.helpers.isStrictlyNaN(t)) throw Error("Could not extract integer from \"" + e + "\"");
			return t;
		},
		formatClassType: function(e, t) {
			if (e !== void 0) return e instanceof t ? e : new t(e);
		},
		unescapedIndexOf: function(e, t, n) {
			for (; (n = e.indexOf(t, n)) !== -1;) if (n > 0 && e[n - 1] === "\\") n += 1;
			else return n;
			return -1;
		},
		binsearchInsert: function(e, t, n) {
			if (!e.length) return 0;
			for (var r = 0, i = e.length - 1, a, o; r <= i;) if (a = r + Math.floor((i - r) / 2), o = n(t, e[a]), o < 0) i = a - 1;
			else if (o > 0) r = a + 1;
			else break;
			return o < 0 ? a : o > 0 ? a + 1 : a;
		},
		dumpn: function() {
			n.debug && (typeof console < "u" && "log" in console ? n.helpers.dumpn = function(e) {
				console.log(e);
			} : n.helpers.dumpn = function(e) {
				dump(e + "\n");
			}, n.helpers.dumpn(arguments[0]));
		},
		clone: function(e, t) {
			if (!e || typeof e != "object") return e;
			if (e instanceof Date) return new Date(e.getTime());
			if ("clone" in e) return e.clone();
			if (Array.isArray(e)) {
				for (var r = [], i = 0; i < e.length; i++) r.push(t ? n.helpers.clone(e[i], !0) : e[i]);
				return r;
			} else {
				var a = {};
				for (var o in e)
 /* istanbul ignore else */
				Object.prototype.hasOwnProperty.call(e, o) && (t ? a[o] = n.helpers.clone(e[o], !0) : a[o] = e[o]);
				return a;
			}
		},
		foldline: function(e) {
			for (var t = "", r = e || "", i = 0, a = 0; r.length;) {
				var o = r.codePointAt(i);
				o < 128 ? ++a : o < 2048 ? a += 2 : o < 65536 ? a += 3 : a += 4, a < n.foldLength + 1 ? i += o > 65535 ? 2 : 1 : (t += n.newLineChar + " " + r.substring(0, i), r = r.substring(i), i = a = 0);
			}
			return t.substr(n.newLineChar.length + 1);
		},
		pad2: function(e) {
			switch (typeof e != "string" && (typeof e == "number" && (e = parseInt(e)), e = String(e)), e.length) {
				case 0: return "00";
				case 1: return "0" + e;
				default: return e;
			}
		},
		trunc: function(e) {
			return e < 0 ? Math.ceil(e) : Math.floor(e);
		},
		inherits: function(e, t, r) {
			function i() {}
			i.prototype = e.prototype, t.prototype = new i(), r && n.helpers.extend(r, t.prototype);
		},
		extend: function(e, t) {
			for (var n in e) {
				var r = Object.getOwnPropertyDescriptor(e, n);
				r && !Object.getOwnPropertyDescriptor(t, n) && Object.defineProperty(t, n, r);
			}
			return t;
		}
	}, n.design = function() {
		var e = /\\\\|\\;|\\,|\\[Nn]/g, t = /\\|;|,|\n/g, r = /\\\\|\\,|\\[Nn]/g, i = /\\|,|\n/g;
		function a(e, t) {
			return {
				matches: /.*/,
				fromICAL: function(t, n) {
					return _(t, e, n);
				},
				toICAL: function(e, n) {
					var r = t;
					return n && (r = RegExp(r.source + "|" + n)), e.replace(r, function(e) {
						switch (e) {
							case "\\": return "\\\\";
							case ";": return "\\;";
							case ",": return "\\,";
							case "\n": return "\\n";
							/* istanbul ignore next */
							default: return e;
						}
					});
				}
			};
		}
		var o = { defaultType: "text" }, s = {
			defaultType: "text",
			multiValue: ","
		}, c = {
			defaultType: "text",
			structuredValue: ";"
		}, l = { defaultType: "integer" }, u = {
			defaultType: "date-time",
			allowedTypes: ["date-time", "date"]
		}, d = { defaultType: "date-time" }, f = { defaultType: "uri" }, p = { defaultType: "utc-offset" }, m = { defaultType: "recur" }, h = {
			defaultType: "date-and-or-time",
			allowedTypes: [
				"date-time",
				"date",
				"text"
			]
		};
		function g(e) {
			switch (e) {
				case "\\\\": return "\\";
				case "\\;": return ";";
				case "\\,": return ",";
				case "\\n":
				case "\\N": return "\n";
				/* istanbul ignore next */
				default: return e;
			}
		}
		function _(e, t, n) {
			return e.indexOf("\\") === -1 ? e : (n && (t = RegExp(t.source + "|\\\\" + n)), e.replace(t, g));
		}
		var v = {
			categories: s,
			url: f,
			version: o,
			uid: o
		}, y = {
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
					var t = parseFloat(e);
					return n.helpers.isStrictlyNaN(t) ? 0 : t;
				},
				toICAL: function(e) {
					return String(e);
				}
			},
			integer: {
				fromICAL: function(e) {
					var t = parseInt(e);
					return n.helpers.isStrictlyNaN(t) ? 0 : t;
				},
				toICAL: function(e) {
					return String(e);
				}
			},
			"utc-offset": {
				toICAL: function(e) {
					return e.length < 7 ? e.substr(0, 3) + e.substr(4, 2) : e.substr(0, 3) + e.substr(4, 2) + e.substr(7, 2);
				},
				fromICAL: function(e) {
					return e.length < 6 ? e.substr(0, 3) + ":" + e.substr(3, 2) : e.substr(0, 3) + ":" + e.substr(3, 2) + ":" + e.substr(5, 2);
				},
				decorate: function(e) {
					return n.UtcOffset.fromString(e);
				},
				undecorate: function(e) {
					return e.toString();
				}
			}
		}, b = {
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
		}, x = n.helpers.extend(y, {
			text: a(e, t),
			uri: {},
			binary: {
				decorate: function(e) {
					return n.Binary.fromString(e);
				},
				undecorate: function(e) {
					return e.toString();
				}
			},
			"cal-address": {},
			date: {
				decorate: function(e, t) {
					return M.strict ? n.Time.fromDateString(e, t) : n.Time.fromString(e, t);
				},
				undecorate: function(e) {
					return e.toString();
				},
				fromICAL: function(e) {
					return !M.strict && e.length >= 15 ? x["date-time"].fromICAL(e) : e.substr(0, 4) + "-" + e.substr(4, 2) + "-" + e.substr(6, 2);
				},
				toICAL: function(e) {
					var t = e.length;
					return t == 10 ? e.substr(0, 4) + e.substr(5, 2) + e.substr(8, 2) : t >= 19 ? x["date-time"].toICAL(e) : e;
				}
			},
			"date-time": {
				fromICAL: function(e) {
					if (!M.strict && e.length == 8) return x.date.fromICAL(e);
					var t = e.substr(0, 4) + "-" + e.substr(4, 2) + "-" + e.substr(6, 2) + "T" + e.substr(9, 2) + ":" + e.substr(11, 2) + ":" + e.substr(13, 2);
					return e[15] && e[15] === "Z" && (t += "Z"), t;
				},
				toICAL: function(e) {
					var t = e.length;
					if (t == 10 && !M.strict) return x.date.toICAL(e);
					if (t >= 19) {
						var n = e.substr(0, 4) + e.substr(5, 2) + e.substr(8, 5) + e.substr(14, 2) + e.substr(17, 2);
						return e[19] && e[19] === "Z" && (n += "Z"), n;
					} else return e;
				},
				decorate: function(e, t) {
					return M.strict ? n.Time.fromDateTimeString(e, t) : n.Time.fromString(e, t);
				},
				undecorate: function(e) {
					return e.toString();
				}
			},
			duration: {
				decorate: function(e) {
					return n.Duration.fromString(e);
				},
				undecorate: function(e) {
					return e.toString();
				}
			},
			period: {
				fromICAL: function(e) {
					var t = e.split("/");
					return t[0] = x["date-time"].fromICAL(t[0]), n.Duration.isValueString(t[1]) || (t[1] = x["date-time"].fromICAL(t[1])), t;
				},
				toICAL: function(e) {
					return !M.strict && e[0].length == 10 ? e[0] = x.date.toICAL(e[0]) : e[0] = x["date-time"].toICAL(e[0]), n.Duration.isValueString(e[1]) || (!M.strict && e[1].length == 10 ? e[1] = x.date.toICAL(e[1]) : e[1] = x["date-time"].toICAL(e[1])), e.join("/");
				},
				decorate: function(e, t) {
					return n.Period.fromJSON(e, t, !M.strict);
				},
				undecorate: function(e) {
					return e.toJSON();
				}
			},
			recur: {
				fromICAL: function(e) {
					return n.Recur._stringToData(e, !0);
				},
				toICAL: function(e) {
					var t = "";
					for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
						var i = e[r];
						r == "until" ? i = i.length > 10 ? x["date-time"].toICAL(i) : x.date.toICAL(i) : r == "wkst" ? typeof i == "number" && (i = n.Recur.numericDayToIcalDay(i)) : Array.isArray(i) && (i = i.join(",")), t += r.toUpperCase() + "=" + i + ";";
					}
					return t.substr(0, t.length - 1);
				},
				decorate: function(e) {
					return n.Recur.fromData(e);
				},
				undecorate: function(e) {
					return e.toJSON();
				}
			},
			time: {
				fromICAL: function(e) {
					if (e.length < 6) return e;
					var t = e.substr(0, 2) + ":" + e.substr(2, 2) + ":" + e.substr(4, 2);
					return e[6] === "Z" && (t += "Z"), t;
				},
				toICAL: function(e) {
					if (e.length < 8) return e;
					var t = e.substr(0, 2) + e.substr(3, 2) + e.substr(6, 2);
					return e[8] === "Z" && (t += "Z"), t;
				}
			}
		}), S = n.helpers.extend(v, {
			action: o,
			attach: { defaultType: "uri" },
			attendee: { defaultType: "cal-address" },
			calscale: o,
			class: o,
			comment: o,
			completed: d,
			contact: o,
			created: d,
			description: o,
			dtend: u,
			dtstamp: d,
			dtstart: u,
			due: u,
			duration: { defaultType: "duration" },
			exdate: {
				defaultType: "date-time",
				allowedTypes: ["date-time", "date"],
				multiValue: ","
			},
			exrule: m,
			freebusy: {
				defaultType: "period",
				multiValue: ","
			},
			geo: {
				defaultType: "float",
				structuredValue: ";"
			},
			"last-modified": d,
			location: o,
			method: o,
			organizer: { defaultType: "cal-address" },
			"percent-complete": l,
			priority: l,
			prodid: o,
			"related-to": o,
			repeat: l,
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
			"recurrence-id": u,
			resources: s,
			"request-status": c,
			rrule: m,
			sequence: l,
			status: o,
			summary: o,
			transp: o,
			trigger: {
				defaultType: "duration",
				allowedTypes: ["duration", "date-time"]
			},
			tzoffsetfrom: p,
			tzoffsetto: p,
			tzurl: f,
			tzid: o,
			tzname: o
		}), C = n.helpers.extend(y, {
			text: a(r, i),
			uri: a(r, i),
			date: {
				decorate: function(e) {
					return n.VCardTime.fromDateAndOrTimeString(e, "date");
				},
				undecorate: function(e) {
					return e.toString();
				},
				fromICAL: function(e) {
					return e.length == 8 ? x.date.fromICAL(e) : e[0] == "-" && e.length == 6 ? e.substr(0, 4) + "-" + e.substr(4) : e;
				},
				toICAL: function(e) {
					return e.length == 10 ? x.date.toICAL(e) : e[0] == "-" && e.length == 7 ? e.substr(0, 4) + e.substr(5) : e;
				}
			},
			time: {
				decorate: function(e) {
					return n.VCardTime.fromDateAndOrTimeString("T" + e, "time");
				},
				undecorate: function(e) {
					return e.toString();
				},
				fromICAL: function(e) {
					var t = C.time._splitZone(e, !0), n = t[0], r = t[1];
					return r.length == 6 ? r = r.substr(0, 2) + ":" + r.substr(2, 2) + ":" + r.substr(4, 2) : r.length == 4 && r[0] != "-" ? r = r.substr(0, 2) + ":" + r.substr(2, 2) : r.length == 5 && (r = r.substr(0, 3) + ":" + r.substr(3, 2)), n.length == 5 && (n[0] == "-" || n[0] == "+") && (n = n.substr(0, 3) + ":" + n.substr(3)), r + n;
				},
				toICAL: function(e) {
					var t = C.time._splitZone(e), n = t[0], r = t[1];
					return r.length == 8 ? r = r.substr(0, 2) + r.substr(3, 2) + r.substr(6, 2) : r.length == 5 && r[0] != "-" ? r = r.substr(0, 2) + r.substr(3, 2) : r.length == 6 && (r = r.substr(0, 3) + r.substr(4, 2)), n.length == 6 && (n[0] == "-" || n[0] == "+") && (n = n.substr(0, 3) + n.substr(4)), r + n;
				},
				_splitZone: function(e, t) {
					var n = e.length - 1, r = e.length - (t ? 5 : 6), i = e[r], a, o;
					return e[n] == "Z" ? (a = e[n], o = e.substr(0, n)) : e.length > 6 && (i == "-" || i == "+") ? (a = e.substr(r), o = e.substr(0, r)) : (a = "", o = e), [a, o];
				}
			},
			"date-time": {
				decorate: function(e) {
					return n.VCardTime.fromDateAndOrTimeString(e, "date-time");
				},
				undecorate: function(e) {
					return e.toString();
				},
				fromICAL: function(e) {
					return C["date-and-or-time"].fromICAL(e);
				},
				toICAL: function(e) {
					return C["date-and-or-time"].toICAL(e);
				}
			},
			"date-and-or-time": {
				decorate: function(e) {
					return n.VCardTime.fromDateAndOrTimeString(e, "date-and-or-time");
				},
				undecorate: function(e) {
					return e.toString();
				},
				fromICAL: function(e) {
					var t = e.split("T");
					return (t[0] ? C.date.fromICAL(t[0]) : "") + (t[1] ? "T" + C.time.fromICAL(t[1]) : "");
				},
				toICAL: function(e) {
					var t = e.split("T");
					return C.date.toICAL(t[0]) + (t[1] ? "T" + C.time.toICAL(t[1]) : "");
				}
			},
			timestamp: x["date-time"],
			"language-tag": { matches: /^[a-zA-Z0-9-]+$/ }
		}), w = {
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
		}, T = n.helpers.extend(v, {
			adr: {
				defaultType: "text",
				structuredValue: ";",
				multiValue: ","
			},
			anniversary: h,
			bday: h,
			caladruri: f,
			caluri: f,
			clientpidmap: c,
			email: o,
			fburl: f,
			fn: o,
			gender: c,
			geo: f,
			impp: f,
			key: f,
			kind: o,
			lang: { defaultType: "language-tag" },
			logo: f,
			member: f,
			n: {
				defaultType: "text",
				structuredValue: ";",
				multiValue: ","
			},
			nickname: s,
			note: o,
			org: {
				defaultType: "text",
				structuredValue: ";"
			},
			photo: f,
			related: f,
			rev: { defaultType: "timestamp" },
			role: o,
			sound: f,
			source: f,
			tel: {
				defaultType: "uri",
				allowedTypes: ["uri", "text"]
			},
			title: o,
			tz: {
				defaultType: "text",
				allowedTypes: [
					"text",
					"utc-offset",
					"uri"
				]
			},
			xml: o
		}), E = n.helpers.extend(y, {
			binary: x.binary,
			date: C.date,
			"date-time": C["date-time"],
			"phone-number": {},
			uri: x.uri,
			text: x.text,
			time: x.time,
			vcard: x.text,
			"utc-offset": {
				toICAL: function(e) {
					return e.substr(0, 7);
				},
				fromICAL: function(e) {
					return e.substr(0, 7);
				},
				decorate: function(e) {
					return n.UtcOffset.fromString(e);
				},
				undecorate: function(e) {
					return e.toString();
				}
			}
		}), D = {
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
		}, O = n.helpers.extend(v, {
			fn: o,
			n: {
				defaultType: "text",
				structuredValue: ";",
				multiValue: ","
			},
			nickname: s,
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
			label: o,
			tel: { defaultType: "phone-number" },
			email: o,
			mailer: o,
			tz: {
				defaultType: "utc-offset",
				allowedTypes: ["utc-offset", "text"]
			},
			geo: {
				defaultType: "float",
				structuredValue: ";"
			},
			title: o,
			role: o,
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
			org: c,
			note: s,
			prodid: o,
			rev: {
				defaultType: "date-time",
				allowedTypes: ["date-time", "date"],
				detectType: function(e) {
					return e.indexOf("T") === -1 ? "date" : "date-time";
				}
			},
			"sort-string": o,
			sound: {
				defaultType: "binary",
				allowedTypes: ["binary", "uri"]
			},
			class: o,
			key: {
				defaultType: "binary",
				allowedTypes: ["binary", "text"]
			}
		}), k = {
			value: x,
			param: b,
			property: S
		}, A = {
			value: C,
			param: w,
			property: T
		}, j = {
			value: E,
			param: D,
			property: O
		}, M = {
			strict: !0,
			defaultSet: k,
			defaultType: "unknown",
			components: {
				vcard: A,
				vcard3: j,
				vevent: k,
				vtodo: k,
				vjournal: k,
				valarm: k,
				vtimezone: k,
				daylight: k,
				standard: k
			},
			icalendar: k,
			vcard: A,
			vcard3: j,
			getDesignSet: function(e) {
				return e && e in M.components ? M.components[e] : M.defaultSet;
			}
		};
		return M;
	}(), n.stringify = function() {
		var e = "unknown", t = n.design, r = n.helpers;
		function i(e) {
			typeof e[0] == "string" && (e = [e]);
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += i.component(e[t]) + "\r\n";
			return r;
		}
		i.component = function(e, n) {
			var r = e[0].toUpperCase(), a = "BEGIN:" + r + "\r\n", o = e[1], s = 0, c = o.length, l = e[0];
			for (l === "vcard" && e[1].length > 0 && !(e[1][0][0] === "version" && e[1][0][3] === "4.0") && (l = "vcard3"), n ||= t.getDesignSet(l); s < c; s++) a += i.property(o[s], n) + "\r\n";
			for (var u = e[2] || [], d = 0, f = u.length; d < f; d++) a += i.component(u[d], n) + "\r\n";
			return a += "END:" + r, a;
		}, i.property = function(r, a, o) {
			var s = r[0].toUpperCase(), c = r[0], l = r[1], u = s, d;
			for (d in l) {
				var f = l[d];
				/* istanbul ignore else */
				if (l.hasOwnProperty(d)) {
					var p = d in a.param && a.param[d].multiValue;
					p && Array.isArray(f) ? (a.param[d].multiValueSeparateDQuote && (p = "\"" + p + "\""), f = f.map(i._rfc6868Unescape), f = i.multiValue(f, p, "unknown", null, a)) : f = i._rfc6868Unescape(f), u += ";" + d.toUpperCase(), u += "=" + i.propertyValue(f);
				}
			}
			if (r.length === 3) return u + ":";
			var m = r[2];
			a ||= t.defaultSet;
			var h, p = !1, g = !1, _ = !1;
			return c in a.property ? (h = a.property[c], "multiValue" in h && (p = h.multiValue), "structuredValue" in h && Array.isArray(r[3]) && (g = h.structuredValue), "defaultType" in h ? m === h.defaultType && (_ = !0) : m === e && (_ = !0)) : m === e && (_ = !0), _ || (u += ";VALUE=" + m.toUpperCase()), u += ":", p && g ? u += i.multiValue(r[3], g, m, p, a, g) : p ? u += i.multiValue(r.slice(3), p, m, null, a, !1) : g ? u += i.multiValue(r[3], g, m, null, a, g) : u += i.value(r[3], m, a, !1), o ? u : n.helpers.foldline(u);
		}, i.propertyValue = function(e) {
			return r.unescapedIndexOf(e, ",") === -1 && r.unescapedIndexOf(e, ":") === -1 && r.unescapedIndexOf(e, ";") === -1 ? e : "\"" + e + "\"";
		}, i.multiValue = function(e, t, n, r, a, o) {
			for (var s = "", c = e.length, l = 0; l < c; l++) r && Array.isArray(e[l]) ? s += i.multiValue(e[l], r, n, null, a, o) : s += i.value(e[l], n, a, o), l !== c - 1 && (s += t);
			return s;
		}, i.value = function(e, t, n, r) {
			return t in n.value && "toICAL" in n.value[t] ? n.value[t].toICAL(e, r) : e;
		}, i._rfc6868Unescape = function(e) {
			return e.replace(/[\n^"]/g, function(e) {
				return a[e];
			});
		};
		var a = {
			"\"": "^'",
			"\n": "^n",
			"^": "^^"
		};
		return i;
	}(), n.parse = function() {
		var e = /[^ \t]/, t = n.design, r = n.helpers;
		function i(e) {
			this.message = e, this.name = "ParserError";
			try {
				throw Error();
			} catch (e) {
				if (e.stack) {
					var t = e.stack.split("\n");
					t.shift(), this.stack = t.join("\n");
				}
			}
		}
		i.prototype = Error.prototype;
		function a(e) {
			var t = {}, n = t.component = [];
			if (t.stack = [n], a._eachLine(e, function(e, n) {
				a._handleContentLine(n, t);
			}), t.stack.length > 1) throw new i("invalid ical body. component began but did not end");
			return t = null, n.length == 1 ? n[0] : n;
		}
		a.property = function(e, n) {
			var r = {
				component: [[], []],
				designSet: n || t.defaultSet
			};
			return a._handleContentLine(e, r), r.component[1][0];
		}, a.component = function(e) {
			return a(e);
		}, a.ParserError = i, a._handleContentLine = function(e, n) {
			var r = e.indexOf(":"), o = e.indexOf(";"), s, c, l, u, d = {};
			o !== -1 && r !== -1 && o > r && (o = -1);
			var f;
			if (o !== -1) {
				if (l = e.substring(0, o).toLowerCase(), f = a._parseParameters(e.substring(o), 0, n.designSet), f[2] == -1) throw new i("Invalid parameters in '" + e + "'");
				if (d = f[0], s = f[1].length + f[2] + o, (c = e.substring(s).indexOf(":")) !== -1) u = e.substring(s + c + 1);
				else throw new i("Missing parameter value in '" + e + "'");
			} else if (r !== -1) {
				if (l = e.substring(0, r).toLowerCase(), u = e.substring(r + 1), l === "begin") {
					var p = [
						u.toLowerCase(),
						[],
						[]
					];
					n.stack.length === 1 ? n.component.push(p) : n.component[2].push(p), n.stack.push(n.component), n.component = p, n.designSet ||= t.getDesignSet(n.component[0]);
					return;
				} else if (l === "end") {
					n.component = n.stack.pop();
					return;
				}
			} else throw new i("invalid line (no token \";\" or \":\") \"" + e + "\"");
			var m, h = !1, g = !1, _;
			l in n.designSet.property && (_ = n.designSet.property[l], "multiValue" in _ && (h = _.multiValue), "structuredValue" in _ && (g = _.structuredValue), u && "detectType" in _ && (m = _.detectType(u))), m ||= "value" in d ? d.value.toLowerCase() : _ ? _.defaultType : "unknown", delete d.value;
			var v;
			h && g ? (u = a._parseMultiValue(u, g, m, [], h, n.designSet, g), v = [
				l,
				d,
				m,
				u
			]) : h ? (v = [
				l,
				d,
				m
			], a._parseMultiValue(u, h, m, v, null, n.designSet, !1)) : g ? (u = a._parseMultiValue(u, g, m, [], null, n.designSet, g), v = [
				l,
				d,
				m,
				u
			]) : (u = a._parseValue(u, m, n.designSet, !1), v = [
				l,
				d,
				m,
				u
			]), n.component[0] === "vcard" && n.component[1].length === 0 && !(l === "version" && u === "4.0") && (n.designSet = t.getDesignSet("vcard3")), n.component[1].push(v);
		}, a._parseValue = function(e, t, n, r) {
			return t in n.value && "fromICAL" in n.value[t] ? n.value[t].fromICAL(e, r) : e;
		}, a._parseParameters = function(e, t, n) {
			for (var o = t, s = 0, c = "=", l = {}, u, d, f, p = -1, m, h, g; s !== !1 && (s = r.unescapedIndexOf(e, c, s + 1)) !== -1;) {
				if (u = e.substr(o + 1, s - o - 1), u.length == 0) throw new i("Empty parameter name in '" + e + "'");
				if (d = u.toLowerCase(), g = !1, h = !1, m = d in n.param && n.param[d].valueType ? n.param[d].valueType : "text", d in n.param && (h = n.param[d].multiValue, n.param[d].multiValueSeparateDQuote && (g = a._rfc6868Escape("\"" + h + "\""))), e[s + 1] === "\"") {
					if (p = s + 2, s = r.unescapedIndexOf(e, "\"", p), h && s != -1) for (var _ = !0; _;) e[s + 1] == h && e[s + 2] == "\"" ? s = r.unescapedIndexOf(e, "\"", s + 3) : _ = !1;
					if (s === -1) throw new i("invalid line (no matching double quote) \"" + e + "\"");
					f = e.substr(p, s - p), o = r.unescapedIndexOf(e, ";", s), o === -1 && (s = !1);
				} else {
					p = s + 1;
					var v = r.unescapedIndexOf(e, ";", p), y = r.unescapedIndexOf(e, ":", p);
					y !== -1 && v > y ? (v = y, s = !1) : v === -1 ? (v = y === -1 ? e.length : y, s = !1) : (o = v, s = v), f = e.substr(p, v - p);
				}
				if (f = a._rfc6868Escape(f), h) {
					var b = g || h;
					f = a._parseMultiValue(f, b, m, [], null, n);
				} else f = a._parseValue(f, m, n);
				h && d in l ? Array.isArray(l[d]) ? l[d].push(f) : l[d] = [l[d], f] : l[d] = f;
			}
			return [
				l,
				f,
				p
			];
		}, a._rfc6868Escape = function(e) {
			return e.replace(/\^['n^]/g, function(e) {
				return o[e];
			});
		};
		var o = {
			"^'": "\"",
			"^n": "\n",
			"^^": "^"
		};
		return a._parseMultiValue = function(e, t, n, i, o, s, c) {
			var l = 0, u = 0, d;
			if (t.length === 0) return e;
			for (; (l = r.unescapedIndexOf(e, t, u)) !== -1;) d = e.substr(u, l - u), d = o ? a._parseMultiValue(d, o, n, [], null, s, c) : a._parseValue(d, n, s, c), i.push(d), u = l + t.length;
			return d = e.substr(u), d = o ? a._parseMultiValue(d, o, n, [], null, s, c) : a._parseValue(d, n, s, c), i.push(d), i.length == 1 ? i[0] : i;
		}, a._eachLine = function(t, n) {
			var r = t.length, i = t.search(e), a = i, o, s, c;
			do
				a = t.indexOf("\n", i) + 1, c = a > 1 && t[a - 2] === "\r" ? 2 : 1, a === 0 && (a = r, c = 0), s = t[i], s === " " || s === "	" ? o += t.substr(i + 1, a - i - (c + 1)) : (o && n(null, o), o = t.substr(i, a - i - c)), i = a;
			while (a !== r);
			o = o.trim(), o.length && n(null, o);
		}, a;
	}(), n.Component = function() {
		function e(e, t) {
			typeof e == "string" && (e = [
				e,
				[],
				[]
			]), this.jCal = e, this.parent = t || null;
		}
		return e.prototype = {
			_hydratedPropertyCount: 0,
			_hydratedComponentCount: 0,
			get name() {
				return this.jCal[0];
			},
			get _designSet() {
				return this.parent && this.parent._designSet || n.design.getDesignSet(this.name);
			},
			_hydrateComponent: function(t) {
				if (this._components || (this._components = [], this._hydratedComponentCount = 0), this._components[t]) return this._components[t];
				var n = new e(this.jCal[2][t], this);
				return this._hydratedComponentCount++, this._components[t] = n;
			},
			_hydrateProperty: function(e) {
				if (this._properties || (this._properties = [], this._hydratedPropertyCount = 0), this._properties[e]) return this._properties[e];
				var t = new n.Property(this.jCal[1][e], this);
				return this._hydratedPropertyCount++, this._properties[e] = t;
			},
			getFirstSubcomponent: function(e) {
				if (e) {
					for (var t = 0, n = this.jCal[2], r = n.length; t < r; t++) if (n[t][0] === e) return this._hydrateComponent(t);
				} else if (this.jCal[2].length) return this._hydrateComponent(0);
				return null;
			},
			getAllSubcomponents: function(e) {
				var t = this.jCal[2].length, n = 0;
				if (e) {
					for (var r = this.jCal[2], i = []; n < t; n++) e === r[n][0] && i.push(this._hydrateComponent(n));
					return i;
				} else {
					if (!this._components || this._hydratedComponentCount !== t) for (; n < t; n++) this._hydrateComponent(n);
					return this._components || [];
				}
			},
			hasProperty: function(e) {
				for (var t = this.jCal[1], n = t.length, r = 0; r < n; r++) if (t[r][0] === e) return !0;
				return !1;
			},
			getFirstProperty: function(e) {
				if (e) {
					for (var t = 0, n = this.jCal[1], r = n.length; t < r; t++) if (n[t][0] === e) return this._hydrateProperty(t);
				} else if (this.jCal[1].length) return this._hydrateProperty(0);
				return null;
			},
			getFirstPropertyValue: function(e) {
				var t = this.getFirstProperty(e);
				return t ? t.getFirstValue() : null;
			},
			getAllProperties: function(e) {
				var t = this.jCal[1].length, n = 0;
				if (e) {
					for (var r = this.jCal[1], i = []; n < t; n++) e === r[n][0] && i.push(this._hydrateProperty(n));
					return i;
				} else {
					if (!this._properties || this._hydratedPropertyCount !== t) for (; n < t; n++) this._hydrateProperty(n);
					return this._properties || [];
				}
			},
			_removeObjectByIndex: function(e, t, n) {
				if (t ||= [], t[n]) {
					var r = t[n];
					"parent" in r && (r.parent = null);
				}
				t.splice(n, 1), this.jCal[e].splice(n, 1);
			},
			_removeObject: function(e, t, n) {
				var r = 0, i = this.jCal[e], a = i.length, o = this[t];
				if (typeof n == "string") {
					for (; r < a; r++) if (i[r][0] === n) return this._removeObjectByIndex(e, o, r), !0;
				} else if (o) {
					for (; r < a; r++) if (o[r] && o[r] === n) return this._removeObjectByIndex(e, o, r), !0;
				}
				return !1;
			},
			_removeAllObjects: function(e, t, n) {
				for (var r = this[t], i = this.jCal[e], a = i.length - 1; a >= 0; a--) (!n || i[a][0] === n) && this._removeObjectByIndex(e, r, a);
			},
			addSubcomponent: function(e) {
				this._components || (this._components = [], this._hydratedComponentCount = 0), e.parent && e.parent.removeSubcomponent(e);
				var t = this.jCal[2].push(e.jCal);
				return this._components[t - 1] = e, this._hydratedComponentCount++, e.parent = this, e;
			},
			removeSubcomponent: function(e) {
				var t = this._removeObject(2, "_components", e);
				return t && this._hydratedComponentCount--, t;
			},
			removeAllSubcomponents: function(e) {
				var t = this._removeAllObjects(2, "_components", e);
				return this._hydratedComponentCount = 0, t;
			},
			addProperty: function(e) {
				if (!(e instanceof n.Property)) throw TypeError("must instance of ICAL.Property");
				this._properties || (this._properties = [], this._hydratedPropertyCount = 0), e.parent && e.parent.removeProperty(e);
				var t = this.jCal[1].push(e.jCal);
				return this._properties[t - 1] = e, this._hydratedPropertyCount++, e.parent = this, e;
			},
			addPropertyWithValue: function(e, t) {
				var r = new n.Property(e);
				return r.setValue(t), this.addProperty(r), r;
			},
			updatePropertyWithValue: function(e, t) {
				var n = this.getFirstProperty(e);
				return n ? n.setValue(t) : n = this.addPropertyWithValue(e, t), n;
			},
			removeProperty: function(e) {
				var t = this._removeObject(1, "_properties", e);
				return t && this._hydratedPropertyCount--, t;
			},
			removeAllProperties: function(e) {
				var t = this._removeAllObjects(1, "_properties", e);
				return this._hydratedPropertyCount = 0, t;
			},
			toJSON: function() {
				return this.jCal;
			},
			toString: function() {
				return n.stringify.component(this.jCal, this._designSet);
			}
		}, e.fromString = function(t) {
			return new e(n.parse.component(t));
		}, e;
	}(), n.Property = function() {
		var e = n.design;
		function t(t, n) {
			this._parent = n || null, typeof t == "string" ? (this.jCal = [
				t,
				{},
				e.defaultType
			], this.jCal[2] = this.getDefaultType()) : this.jCal = t, this._updateType();
		}
		return t.prototype = {
			get type() {
				return this.jCal[2];
			},
			get name() {
				return this.jCal[0];
			},
			get parent() {
				return this._parent;
			},
			set parent(t) {
				var n = !this._parent || t && t._designSet != this._parent._designSet;
				return this._parent = t, this.type == e.defaultType && n && (this.jCal[2] = this.getDefaultType(), this._updateType()), t;
			},
			get _designSet() {
				return this.parent ? this.parent._designSet : e.defaultSet;
			},
			_updateType: function() {
				var e = this._designSet;
				this.type in e.value && (e.value[this.type], "decorate" in e.value[this.type] ? this.isDecorated = !0 : this.isDecorated = !1, this.name in e.property && (this.isMultiValue = "multiValue" in e.property[this.name], this.isStructuredValue = "structuredValue" in e.property[this.name]));
			},
			_hydrateValue: function(e) {
				return this._values && this._values[e] ? this._values[e] : this.jCal.length <= 3 + e ? null : this.isDecorated ? (this._values ||= [], this._values[e] = this._decorate(this.jCal[3 + e])) : this.jCal[3 + e];
			},
			_decorate: function(e) {
				return this._designSet.value[this.type].decorate(e, this);
			},
			_undecorate: function(e) {
				return this._designSet.value[this.type].undecorate(e, this);
			},
			_setDecoratedValue: function(e, t) {
				this._values ||= [], typeof e == "object" && "icaltype" in e ? (this.jCal[3 + t] = this._undecorate(e), this._values[t] = e) : (this.jCal[3 + t] = e, this._values[t] = this._decorate(e));
			},
			getParameter: function(e) {
				if (e in this.jCal[1]) return this.jCal[1][e];
			},
			getFirstParameter: function(e) {
				var t = this.getParameter(e);
				return Array.isArray(t) ? t[0] : t;
			},
			setParameter: function(e, t) {
				var n = e.toLowerCase();
				typeof t == "string" && n in this._designSet.param && "multiValue" in this._designSet.param[n] && (t = [t]), this.jCal[1][e] = t;
			},
			removeParameter: function(e) {
				delete this.jCal[1][e];
			},
			getDefaultType: function() {
				var t = this.jCal[0], n = this._designSet;
				if (t in n.property) {
					var r = n.property[t];
					if ("defaultType" in r) return r.defaultType;
				}
				return e.defaultType;
			},
			resetType: function(e) {
				this.removeAllValues(), this.jCal[2] = e, this._updateType();
			},
			getFirstValue: function() {
				return this._hydrateValue(0);
			},
			getValues: function() {
				var e = this.jCal.length - 3;
				if (e < 1) return [];
				for (var t = 0, n = []; t < e; t++) n[t] = this._hydrateValue(t);
				return n;
			},
			removeAllValues: function() {
				this._values && (this._values.length = 0), this.jCal.length = 3;
			},
			setValues: function(e) {
				if (!this.isMultiValue) throw Error(this.name + ": does not not support mulitValue.\noverride isMultiValue");
				var t = e.length, n = 0;
				if (this.removeAllValues(), t > 0 && typeof e[0] == "object" && "icaltype" in e[0] && this.resetType(e[0].icaltype), this.isDecorated) for (; n < t; n++) this._setDecoratedValue(e[n], n);
				else for (; n < t; n++) this.jCal[3 + n] = e[n];
			},
			setValue: function(e) {
				this.removeAllValues(), typeof e == "object" && "icaltype" in e && this.resetType(e.icaltype), this.isDecorated ? this._setDecoratedValue(e, 0) : this.jCal[3] = e;
			},
			toJSON: function() {
				return this.jCal;
			},
			toICALString: function() {
				return n.stringify.property(this.jCal, this._designSet, !0);
			}
		}, t.fromString = function(e, r) {
			return new t(n.parse.property(e, r));
		}, t;
	}(), n.UtcOffset = function() {
		function e(e) {
			this.fromData(e);
		}
		return e.prototype = {
			hours: 0,
			minutes: 0,
			factor: 1,
			icaltype: "utc-offset",
			clone: function() {
				return n.UtcOffset.fromSeconds(this.toSeconds());
			},
			fromData: function(e) {
				if (e) for (var t in e)
 /* istanbul ignore else */
				e.hasOwnProperty(t) && (this[t] = e[t]);
				this._normalize();
			},
			fromSeconds: function(e) {
				var t = Math.abs(e);
				return this.factor = e < 0 ? -1 : 1, this.hours = n.helpers.trunc(t / 3600), t -= this.hours * 3600, this.minutes = n.helpers.trunc(t / 60), this;
			},
			toSeconds: function() {
				return this.factor * (60 * this.minutes + 3600 * this.hours);
			},
			compare: function(e) {
				var t = this.toSeconds(), n = e.toSeconds();
				return (t > n) - (n > t);
			},
			_normalize: function() {
				for (var e = this.toSeconds(), t = this.factor; e < -43200;) e += 97200;
				for (; e > 50400;) e -= 97200;
				this.fromSeconds(e), e == 0 && (this.factor = t);
			},
			toICALString: function() {
				return n.design.icalendar.value["utc-offset"].toICAL(this.toString());
			},
			toString: function() {
				return (this.factor == 1 ? "+" : "-") + n.helpers.pad2(this.hours) + ":" + n.helpers.pad2(this.minutes);
			}
		}, e.fromString = function(e) {
			var t = {};
			return t.factor = e[0] === "+" ? 1 : -1, t.hours = n.helpers.strictParseInt(e.substr(1, 2)), t.minutes = n.helpers.strictParseInt(e.substr(4, 2)), new n.UtcOffset(t);
		}, e.fromSeconds = function(t) {
			var n = new e();
			return n.fromSeconds(t), n;
		}, e;
	}(), n.Binary = function() {
		function e(e) {
			this.value = e;
		}
		return e.prototype = {
			icaltype: "binary",
			decodeValue: function() {
				return this._b64_decode(this.value);
			},
			setEncodedValue: function(e) {
				this.value = this._b64_encode(e);
			},
			_b64_encode: function(e) {
				var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n, r, i, a, o, s, c, l, u = 0, d = 0, f = "", p = [];
				if (!e) return e;
				do
					n = e.charCodeAt(u++), r = e.charCodeAt(u++), i = e.charCodeAt(u++), l = n << 16 | r << 8 | i, a = l >> 18 & 63, o = l >> 12 & 63, s = l >> 6 & 63, c = l & 63, p[d++] = t.charAt(a) + t.charAt(o) + t.charAt(s) + t.charAt(c);
				while (u < e.length);
				f = p.join("");
				var m = e.length % 3;
				return (m ? f.slice(0, m - 3) : f) + "===".slice(m || 3);
			},
			_b64_decode: function(e) {
				var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n, r, i, a, o, s, c, l, u = 0, d = 0, f = "", p = [];
				if (!e) return e;
				e += "";
				do
					a = t.indexOf(e.charAt(u++)), o = t.indexOf(e.charAt(u++)), s = t.indexOf(e.charAt(u++)), c = t.indexOf(e.charAt(u++)), l = a << 18 | o << 12 | s << 6 | c, n = l >> 16 & 255, r = l >> 8 & 255, i = l & 255, s == 64 ? p[d++] = String.fromCharCode(n) : c == 64 ? p[d++] = String.fromCharCode(n, r) : p[d++] = String.fromCharCode(n, r, i);
				while (u < e.length);
				return f = p.join(""), f;
			},
			toString: function() {
				return this.value;
			}
		}, e.fromString = function(t) {
			return new e(t);
		}, e;
	}(), (function() {
		n.Period = function(e) {
			if (this.wrappedJSObject = this, e && "start" in e) {
				if (e.start && !(e.start instanceof n.Time)) throw TypeError(".start must be an instance of ICAL.Time");
				this.start = e.start;
			}
			if (e && e.end && e.duration) throw Error("cannot accept both end and duration");
			if (e && "end" in e) {
				if (e.end && !(e.end instanceof n.Time)) throw TypeError(".end must be an instance of ICAL.Time");
				this.end = e.end;
			}
			if (e && "duration" in e) {
				if (e.duration && !(e.duration instanceof n.Duration)) throw TypeError(".duration must be an instance of ICAL.Duration");
				this.duration = e.duration;
			}
		}, n.Period.prototype = {
			start: null,
			end: null,
			duration: null,
			icalclass: "icalperiod",
			icaltype: "period",
			clone: function() {
				return n.Period.fromData({
					start: this.start ? this.start.clone() : null,
					end: this.end ? this.end.clone() : null,
					duration: this.duration ? this.duration.clone() : null
				});
			},
			getDuration: function() {
				return this.duration ? this.duration : this.end.subtractDate(this.start);
			},
			getEnd: function() {
				if (this.end) return this.end;
				var e = this.start.clone();
				return e.addDuration(this.duration), e;
			},
			toString: function() {
				return this.start + "/" + (this.end || this.duration);
			},
			toJSON: function() {
				return [this.start.toString(), (this.end || this.duration).toString()];
			},
			toICALString: function() {
				return this.start.toICALString() + "/" + (this.end || this.duration).toICALString();
			}
		}, n.Period.fromString = function(e, t) {
			var r = e.split("/");
			if (r.length !== 2) throw Error("Invalid string value: \"" + e + "\" must contain a \"/\" char.");
			var i = { start: n.Time.fromDateTimeString(r[0], t) }, a = r[1];
			return n.Duration.isValueString(a) ? i.duration = n.Duration.fromString(a) : i.end = n.Time.fromDateTimeString(a, t), new n.Period(i);
		}, n.Period.fromData = function(e) {
			return new n.Period(e);
		}, n.Period.fromJSON = function(e, t, r) {
			function i(e, t) {
				return r ? n.Time.fromString(e, t) : n.Time.fromDateTimeString(e, t);
			}
			return n.Duration.isValueString(e[1]) ? n.Period.fromData({
				start: i(e[0], t),
				duration: n.Duration.fromString(e[1])
			}) : n.Period.fromData({
				start: i(e[0], t),
				end: i(e[1], t)
			});
		};
	})(), (function() {
		var e = /([PDWHMTS]{1,1})/;
		n.Duration = function(e) {
			this.wrappedJSObject = this, this.fromData(e);
		}, n.Duration.prototype = {
			weeks: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			isNegative: !1,
			icalclass: "icalduration",
			icaltype: "duration",
			clone: function() {
				return n.Duration.fromData(this);
			},
			toSeconds: function() {
				var e = this.seconds + 60 * this.minutes + 3600 * this.hours + 86400 * this.days + 7 * 86400 * this.weeks;
				return this.isNegative ? -e : e;
			},
			fromSeconds: function(e) {
				var t = Math.abs(e);
				return this.isNegative = e < 0, this.days = n.helpers.trunc(t / 86400), this.days % 7 == 0 ? (this.weeks = this.days / 7, this.days = 0) : this.weeks = 0, t -= (this.days + 7 * this.weeks) * 86400, this.hours = n.helpers.trunc(t / 3600), t -= this.hours * 3600, this.minutes = n.helpers.trunc(t / 60), t -= this.minutes * 60, this.seconds = t, this;
			},
			fromData: function(e) {
				var t = [
					"weeks",
					"days",
					"hours",
					"minutes",
					"seconds",
					"isNegative"
				];
				for (var n in t) if (t.hasOwnProperty(n)) {
					var r = t[n];
					e && r in e ? this[r] = e[r] : this[r] = 0;
				}
			},
			reset: function() {
				this.isNegative = !1, this.weeks = 0, this.days = 0, this.hours = 0, this.minutes = 0, this.seconds = 0;
			},
			compare: function(e) {
				var t = this.toSeconds(), n = e.toSeconds();
				return (t > n) - (t < n);
			},
			normalize: function() {
				this.fromSeconds(this.toSeconds());
			},
			toString: function() {
				if (this.toSeconds() == 0) return "PT0S";
				var e = "";
				return this.isNegative && (e += "-"), e += "P", this.weeks && (e += this.weeks + "W"), this.days && (e += this.days + "D"), (this.hours || this.minutes || this.seconds) && (e += "T", this.hours && (e += this.hours + "H"), this.minutes && (e += this.minutes + "M"), this.seconds && (e += this.seconds + "S")), e;
			},
			toICALString: function() {
				return this.toString();
			}
		}, n.Duration.fromSeconds = function(e) {
			return new n.Duration().fromSeconds(e);
		};
		function t(e, t, r) {
			var i;
			switch (e) {
				case "P":
					t && t === "-" ? r.isNegative = !0 : r.isNegative = !1;
					break;
				case "D":
					i = "days";
					break;
				case "W":
					i = "weeks";
					break;
				case "H":
					i = "hours";
					break;
				case "M":
					i = "minutes";
					break;
				case "S":
					i = "seconds";
					break;
				default: return 0;
			}
			if (i) {
				if (!t && t !== 0) throw Error("invalid duration value: Missing number before \"" + e + "\"");
				var a = parseInt(t, 10);
				if (n.helpers.isStrictlyNaN(a)) throw Error("invalid duration value: Invalid number \"" + t + "\" before \"" + e + "\"");
				r[i] = a;
			}
			return 1;
		}
		n.Duration.isValueString = function(e) {
			return e[0] === "P" || e[1] === "P";
		}, n.Duration.fromString = function(r) {
			for (var i = 0, a = Object.create(null), o = 0; (i = r.search(e)) !== -1;) {
				var s = r[i], c = r.substr(0, i);
				r = r.substr(i + 1), o += t(s, c, a);
			}
			if (o < 2) throw Error("invalid duration value: Not enough duration components in \"" + r + "\"");
			return new n.Duration(a);
		}, n.Duration.fromData = function(e) {
			return new n.Duration(e);
		};
	})(), (function() {
		var e = [
			"tzid",
			"location",
			"tznames",
			"latitude",
			"longitude"
		];
		n.Timezone = function(e) {
			this.wrappedJSObject = this, this.fromData(e);
		}, n.Timezone.prototype = {
			tzid: "",
			location: "",
			tznames: "",
			latitude: 0,
			longitude: 0,
			component: null,
			expandedUntilYear: 0,
			icalclass: "icaltimezone",
			fromData: function(t) {
				if (this.expandedUntilYear = 0, this.changes = [], t instanceof n.Component) this.component = t;
				else {
					if (t && "component" in t) if (typeof t.component == "string") {
						var r = n.parse(t.component);
						this.component = new n.Component(r);
					} else t.component instanceof n.Component ? this.component = t.component : this.component = null;
					for (var i in e)
 /* istanbul ignore else */
					if (e.hasOwnProperty(i)) {
						var a = e[i];
						t && a in t && (this[a] = t[a]);
					}
				}
				return this.component instanceof n.Component && !this.tzid && (this.tzid = this.component.getFirstPropertyValue("tzid")), this;
			},
			utcOffset: function(e) {
				if (this == n.Timezone.utcTimezone || this == n.Timezone.localTimezone || (this._ensureCoverage(e.year), !this.changes.length)) return 0;
				for (var t = {
					year: e.year,
					month: e.month,
					day: e.day,
					hour: e.hour,
					minute: e.minute,
					second: e.second
				}, r = this._findNearbyChange(t), i = -1, a = 1;;) {
					var o = n.helpers.clone(this.changes[r], !0);
					if (o.utcOffset < o.prevUtcOffset ? n.Timezone.adjust_change(o, 0, 0, 0, o.utcOffset) : n.Timezone.adjust_change(o, 0, 0, 0, o.prevUtcOffset), n.Timezone._compare_change_fn(t, o) >= 0 ? i = r : a = -1, a == -1 && i != -1) break;
					if (r += a, r < 0) return 0;
					if (r >= this.changes.length) break;
				}
				var s = this.changes[i];
				if (s.utcOffset - s.prevUtcOffset < 0 && i > 0) {
					var c = n.helpers.clone(s, !0);
					if (n.Timezone.adjust_change(c, 0, 0, 0, c.prevUtcOffset), n.Timezone._compare_change_fn(t, c) < 0) {
						var l = this.changes[i - 1], u = !1;
						s.is_daylight != u && l.is_daylight == u && (s = l);
					}
				}
				return s.utcOffset;
			},
			_findNearbyChange: function(e) {
				var t = n.helpers.binsearchInsert(this.changes, e, n.Timezone._compare_change_fn);
				return t >= this.changes.length ? this.changes.length - 1 : t;
			},
			_ensureCoverage: function(e) {
				if (n.Timezone._minimumExpansionYear == -1) {
					var t = n.Time.now();
					n.Timezone._minimumExpansionYear = t.year;
				}
				var r = e;
				if (r < n.Timezone._minimumExpansionYear && (r = n.Timezone._minimumExpansionYear), r += n.Timezone.EXTRA_COVERAGE, r > n.Timezone.MAX_YEAR && (r = n.Timezone.MAX_YEAR), !this.changes.length || this.expandedUntilYear < e) {
					for (var i = this.component.getAllSubcomponents(), a = i.length, o = 0; o < a; o++) this._expandComponent(i[o], r, this.changes);
					this.changes.sort(n.Timezone._compare_change_fn), this.expandedUntilYear = r;
				}
			},
			_expandComponent: function(e, t, r) {
				if (!e.hasProperty("dtstart") || !e.hasProperty("tzoffsetto") || !e.hasProperty("tzoffsetfrom")) return null;
				var i = e.getFirstProperty("dtstart").getFirstValue(), a;
				function o(e) {
					return e.factor * (e.hours * 3600 + e.minutes * 60);
				}
				function s() {
					var t = {};
					return t.is_daylight = e.name == "daylight", t.utcOffset = o(e.getFirstProperty("tzoffsetto").getFirstValue()), t.prevUtcOffset = o(e.getFirstProperty("tzoffsetfrom").getFirstValue()), t;
				}
				if (!e.hasProperty("rrule") && !e.hasProperty("rdate")) a = s(), a.year = i.year, a.month = i.month, a.day = i.day, a.hour = i.hour, a.minute = i.minute, a.second = i.second, n.Timezone.adjust_change(a, 0, 0, 0, -a.prevUtcOffset), r.push(a);
				else {
					var c = e.getAllProperties("rdate");
					for (var l in c) if (c.hasOwnProperty(l)) {
						var u = c[l].getFirstValue();
						a = s(), a.year = u.year, a.month = u.month, a.day = u.day, u.isDate ? (a.hour = i.hour, a.minute = i.minute, a.second = i.second, i.zone != n.Timezone.utcTimezone && n.Timezone.adjust_change(a, 0, 0, 0, -a.prevUtcOffset)) : (a.hour = u.hour, a.minute = u.minute, a.second = u.second, u.zone != n.Timezone.utcTimezone && n.Timezone.adjust_change(a, 0, 0, 0, -a.prevUtcOffset)), r.push(a);
					}
					var d = e.getFirstProperty("rrule");
					if (d) {
						d = d.getFirstValue(), a = s(), d.until && d.until.zone == n.Timezone.utcTimezone && (d.until.adjust(0, 0, 0, a.prevUtcOffset), d.until.zone = n.Timezone.localTimezone);
						for (var f = d.iterator(i), p; (p = f.next()) && (a = s(), !(p.year > t || !p));) a.year = p.year, a.month = p.month, a.day = p.day, a.hour = p.hour, a.minute = p.minute, a.second = p.second, a.isDate = p.isDate, n.Timezone.adjust_change(a, 0, 0, 0, -a.prevUtcOffset), r.push(a);
					}
				}
				return r;
			},
			toString: function() {
				return this.tznames ? this.tznames : this.tzid;
			}
		}, n.Timezone._compare_change_fn = function(e, t) {
			return e.year < t.year ? -1 : e.year > t.year ? 1 : e.month < t.month ? -1 : e.month > t.month ? 1 : e.day < t.day ? -1 : e.day > t.day ? 1 : e.hour < t.hour ? -1 : e.hour > t.hour ? 1 : e.minute < t.minute ? -1 : e.minute > t.minute ? 1 : e.second < t.second ? -1 : +(e.second > t.second);
		}, n.Timezone.convert_time = function(e, t, r) {
			if (e.isDate || t.tzid == r.tzid || t == n.Timezone.localTimezone || r == n.Timezone.localTimezone) return e.zone = r, e;
			var i = t.utcOffset(e);
			return e.adjust(0, 0, 0, -i), i = r.utcOffset(e), e.adjust(0, 0, 0, i), null;
		}, n.Timezone.fromData = function(e) {
			return new n.Timezone().fromData(e);
		}, n.Timezone.utcTimezone = n.Timezone.fromData({ tzid: "UTC" }), n.Timezone.localTimezone = n.Timezone.fromData({ tzid: "floating" }), n.Timezone.adjust_change = function(e, t, r, i, a) {
			return n.Time.prototype.adjust.call(e, t, r, i, a, e);
		}, n.Timezone._minimumExpansionYear = -1, n.Timezone.MAX_YEAR = 2035, n.Timezone.EXTRA_COVERAGE = 5;
	})(), n.TimezoneService = function() {
		var e, t = {
			get count() {
				return Object.keys(e).length;
			},
			reset: function() {
				e = Object.create(null);
				var t = n.Timezone.utcTimezone;
				e.Z = t, e.UTC = t, e.GMT = t;
			},
			has: function(t) {
				return !!e[t];
			},
			get: function(t) {
				return e[t];
			},
			register: function(t, r) {
				if (t instanceof n.Component && t.name === "vtimezone" && (r = new n.Timezone(t), t = r.tzid), r instanceof n.Timezone) e[t] = r;
				else throw TypeError("timezone must be ICAL.Timezone or ICAL.Component");
			},
			remove: function(t) {
				return delete e[t];
			}
		};
		return t.reset(), t;
	}(), (function() {
		n.Time = function(e, t) {
			this.wrappedJSObject = this;
			var n = this._time = Object.create(null);
			n.year = 0, n.month = 1, n.day = 1, n.hour = 0, n.minute = 0, n.second = 0, n.isDate = !1, this.fromData(e, t);
		}, n.Time._dowCache = {}, n.Time._wnCache = {}, n.Time.prototype = {
			icalclass: "icaltime",
			_cachedUnixTime: null,
			get icaltype() {
				return this.isDate ? "date" : "date-time";
			},
			zone: null,
			_pendingNormalization: !1,
			clone: function() {
				return new n.Time(this._time, this.zone);
			},
			reset: function() {
				this.fromData(n.Time.epochTime), this.zone = n.Timezone.utcTimezone;
			},
			resetTo: function(e, t, n, r, i, a, o) {
				this.fromData({
					year: e,
					month: t,
					day: n,
					hour: r,
					minute: i,
					second: a,
					zone: o
				});
			},
			fromJSDate: function(e, t) {
				return e ? t ? (this.zone = n.Timezone.utcTimezone, this.year = e.getUTCFullYear(), this.month = e.getUTCMonth() + 1, this.day = e.getUTCDate(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds()) : (this.zone = n.Timezone.localTimezone, this.year = e.getFullYear(), this.month = e.getMonth() + 1, this.day = e.getDate(), this.hour = e.getHours(), this.minute = e.getMinutes(), this.second = e.getSeconds()) : this.reset(), this._cachedUnixTime = null, this;
			},
			fromData: function(e, t) {
				if (e) {
					for (var r in e)
 /* istanbul ignore else */
					if (Object.prototype.hasOwnProperty.call(e, r)) {
						if (r === "icaltype") continue;
						this[r] = e[r];
					}
				}
				if (t && (this.zone = t), e && !("isDate" in e) ? this.isDate = !("hour" in e) : e && "isDate" in e && (this.isDate = e.isDate), e && "timezone" in e) {
					var i = n.TimezoneService.get(e.timezone);
					this.zone = i || n.Timezone.localTimezone;
				}
				return e && "zone" in e && (this.zone = e.zone), this.zone ||= n.Timezone.localTimezone, this._cachedUnixTime = null, this;
			},
			dayOfWeek: function(e) {
				var t = e || n.Time.SUNDAY, r = (this.year << 12) + (this.month << 8) + (this.day << 3) + t;
				if (r in n.Time._dowCache) return n.Time._dowCache[r];
				var i = this.day, a = this.month + (this.month < 3 ? 12 : 0), o = this.year - +(this.month < 3), s = i + o + n.helpers.trunc((a + 1) * 26 / 10) + n.helpers.trunc(o / 4);
				return s += n.helpers.trunc(o / 100) * 6 + n.helpers.trunc(o / 400), s = (s + 7 - t) % 7 + 1, n.Time._dowCache[r] = s, s;
			},
			dayOfYear: function() {
				var e = +!!n.Time.isLeapYear(this.year);
				return n.Time.daysInYearPassedMonth[e][this.month - 1] + this.day;
			},
			startOfWeek: function(e) {
				var t = e || n.Time.SUNDAY, r = this.clone();
				return r.day -= (this.dayOfWeek() + 7 - t) % 7, r.isDate = !0, r.hour = 0, r.minute = 0, r.second = 0, r;
			},
			endOfWeek: function(e) {
				var t = e || n.Time.SUNDAY, r = this.clone();
				return r.day += (7 - this.dayOfWeek() + t - n.Time.SUNDAY) % 7, r.isDate = !0, r.hour = 0, r.minute = 0, r.second = 0, r;
			},
			startOfMonth: function() {
				var e = this.clone();
				return e.day = 1, e.isDate = !0, e.hour = 0, e.minute = 0, e.second = 0, e;
			},
			endOfMonth: function() {
				var e = this.clone();
				return e.day = n.Time.daysInMonth(e.month, e.year), e.isDate = !0, e.hour = 0, e.minute = 0, e.second = 0, e;
			},
			startOfYear: function() {
				var e = this.clone();
				return e.day = 1, e.month = 1, e.isDate = !0, e.hour = 0, e.minute = 0, e.second = 0, e;
			},
			endOfYear: function() {
				var e = this.clone();
				return e.day = 31, e.month = 12, e.isDate = !0, e.hour = 0, e.minute = 0, e.second = 0, e;
			},
			startDoyWeek: function(e) {
				var t = e || n.Time.SUNDAY, r = this.dayOfWeek() - t;
				return r < 0 && (r += 7), this.dayOfYear() - r;
			},
			getDominicalLetter: function() {
				return n.Time.getDominicalLetter(this.year);
			},
			nthWeekDay: function(e, t) {
				var r = n.Time.daysInMonth(this.month, this.year), i, a = t, o = 0, s = this.clone();
				if (a >= 0) {
					s.day = 1, a != 0 && a--, o = s.day;
					var c = e - s.dayOfWeek();
					c < 0 && (c += 7), o += c, o -= e, i = e;
				} else {
					s.day = r;
					var l = s.dayOfWeek();
					a++, i = l - e, i < 0 && (i += 7), i = r - i;
				}
				return i += a * 7, o + i;
			},
			isNthWeekDay: function(e, t) {
				var n = this.dayOfWeek();
				return t === 0 && n === e || this.nthWeekDay(e, t) === this.day;
			},
			weekNumber: function(e) {
				var t = (this.year << 12) + (this.month << 8) + (this.day << 3) + e;
				if (t in n.Time._wnCache) return n.Time._wnCache[t];
				var r, i = this.clone();
				i.isDate = !0;
				var a = this.year;
				i.month == 12 && i.day > 25 ? (r = n.Time.weekOneStarts(a + 1, e), i.compare(r) < 0 ? r = n.Time.weekOneStarts(a, e) : a++) : (r = n.Time.weekOneStarts(a, e), i.compare(r) < 0 && (r = n.Time.weekOneStarts(--a, e)));
				var o = i.subtractDate(r).toSeconds() / 86400, s = n.helpers.trunc(o / 7) + 1;
				return n.Time._wnCache[t] = s, s;
			},
			addDuration: function(e) {
				var t = e.isNegative ? -1 : 1, n = this.second, r = this.minute, i = this.hour, a = this.day;
				n += t * e.seconds, r += t * e.minutes, i += t * e.hours, a += t * e.days, a += t * 7 * e.weeks, this.second = n, this.minute = r, this.hour = i, this.day = a, this._cachedUnixTime = null;
			},
			subtractDate: function(e) {
				var t = this.toUnixTime() + this.utcOffset(), r = e.toUnixTime() + e.utcOffset();
				return n.Duration.fromSeconds(t - r);
			},
			subtractDateTz: function(e) {
				var t = this.toUnixTime(), r = e.toUnixTime();
				return n.Duration.fromSeconds(t - r);
			},
			compare: function(e) {
				var t = this.toUnixTime(), n = e.toUnixTime();
				return t > n ? 1 : n > t ? -1 : 0;
			},
			compareDateOnlyTz: function(e, t) {
				function r(e) {
					return n.Time._cmp_attr(i, a, e);
				}
				var i = this.convertToZone(t), a = e.convertToZone(t), o = 0;
				return (o = r("year")) != 0 || (o = r("month")) != 0 || (o = r("day")), o;
			},
			convertToZone: function(e) {
				var t = this.clone(), r = this.zone.tzid == e.tzid;
				return !this.isDate && !r && n.Timezone.convert_time(t, this.zone, e), t.zone = e, t;
			},
			utcOffset: function() {
				return this.zone == n.Timezone.localTimezone || this.zone == n.Timezone.utcTimezone ? 0 : this.zone.utcOffset(this);
			},
			toICALString: function() {
				var e = this.toString();
				return e.length > 10 ? n.design.icalendar.value["date-time"].toICAL(e) : n.design.icalendar.value.date.toICAL(e);
			},
			toString: function() {
				var e = this.year + "-" + n.helpers.pad2(this.month) + "-" + n.helpers.pad2(this.day);
				return this.isDate || (e += "T" + n.helpers.pad2(this.hour) + ":" + n.helpers.pad2(this.minute) + ":" + n.helpers.pad2(this.second), this.zone === n.Timezone.utcTimezone && (e += "Z")), e;
			},
			toJSDate: function() {
				return this.zone == n.Timezone.localTimezone ? this.isDate ? new Date(this.year, this.month - 1, this.day) : new Date(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, 0) : /* @__PURE__ */ new Date(this.toUnixTime() * 1e3);
			},
			_normalize: function() {
				return this._time.isDate, this._time.isDate && (this._time.hour = 0, this._time.minute = 0, this._time.second = 0), this.adjust(0, 0, 0, 0), this;
			},
			adjust: function(e, t, r, i, a) {
				var o, s, c = 0, l = 0, u, d, f, p, m, h = a || this._time;
				if (h.isDate || (u = h.second + i, h.second = u % 60, o = n.helpers.trunc(u / 60), h.second < 0 && (h.second += 60, o--), d = h.minute + r + o, h.minute = d % 60, s = n.helpers.trunc(d / 60), h.minute < 0 && (h.minute += 60, s--), f = h.hour + t + s, h.hour = f % 24, c = n.helpers.trunc(f / 24), h.hour < 0 && (h.hour += 24, c--)), h.month > 12 ? l = n.helpers.trunc((h.month - 1) / 12) : h.month < 1 && (l = n.helpers.trunc(h.month / 12) - 1), h.year += l, h.month -= 12 * l, p = h.day + e + c, p > 0) for (; m = n.Time.daysInMonth(h.month, h.year), !(p <= m);) h.month++, h.month > 12 && (h.year++, h.month = 1), p -= m;
				else for (; p <= 0;) h.month == 1 ? (h.year--, h.month = 12) : h.month--, p += n.Time.daysInMonth(h.month, h.year);
				return h.day = p, this._cachedUnixTime = null, this;
			},
			fromUnixTime: function(e) {
				this.zone = n.Timezone.utcTimezone;
				var t = n.Time.epochTime.clone();
				t.adjust(0, 0, 0, e), this.year = t.year, this.month = t.month, this.day = t.day, this.hour = t.hour, this.minute = t.minute, this.second = Math.floor(t.second), this._cachedUnixTime = null;
			},
			toUnixTime: function() {
				if (this._cachedUnixTime !== null) return this._cachedUnixTime;
				var e = this.utcOffset(), t = Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second - e);
				return this._cachedUnixTime = t / 1e3, this._cachedUnixTime;
			},
			toJSON: function() {
				for (var e = [
					"year",
					"month",
					"day",
					"hour",
					"minute",
					"second",
					"isDate"
				], t = Object.create(null), n = 0, r = e.length, i; n < r; n++) i = e[n], t[i] = this[i];
				return this.zone && (t.timezone = this.zone.tzid), t;
			}
		}, (function() {
			function e(e) {
				Object.defineProperty(n.Time.prototype, e, {
					get: function() {
						return this._pendingNormalization &&= (this._normalize(), !1), this._time[e];
					},
					set: function(t) {
						return e === "isDate" && t && !this._time.isDate && this.adjust(0, 0, 0, 0), this._cachedUnixTime = null, this._pendingNormalization = !0, this._time[e] = t, t;
					}
				});
			}
			/* istanbul ignore else */
			"defineProperty" in Object && (e("year"), e("month"), e("day"), e("hour"), e("minute"), e("second"), e("isDate"));
		})(), n.Time.daysInMonth = function(e, t) {
			var r = [
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
			return e < 1 || e > 12 ? i : (i = r[e], e == 2 && (i += n.Time.isLeapYear(t)), i);
		}, n.Time.isLeapYear = function(e) {
			return e <= 1752 ? e % 4 == 0 : e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
		}, n.Time.fromDayOfYear = function(e, t) {
			var r = t, i = e, a = new n.Time();
			a.auto_normalize = !1;
			var o = +!!n.Time.isLeapYear(r);
			if (i < 1) return r--, o = +!!n.Time.isLeapYear(r), i += n.Time.daysInYearPassedMonth[o][12], n.Time.fromDayOfYear(i, r);
			if (i > n.Time.daysInYearPassedMonth[o][12]) return o = +!!n.Time.isLeapYear(r), i -= n.Time.daysInYearPassedMonth[o][12], r++, n.Time.fromDayOfYear(i, r);
			a.year = r, a.isDate = !0;
			for (var s = 11; s >= 0; s--) if (i > n.Time.daysInYearPassedMonth[o][s]) {
				a.month = s + 1, a.day = i - n.Time.daysInYearPassedMonth[o][s];
				break;
			}
			return a.auto_normalize = !0, a;
		}, n.Time.fromStringv2 = function(e) {
			return new n.Time({
				year: parseInt(e.substr(0, 4), 10),
				month: parseInt(e.substr(5, 2), 10),
				day: parseInt(e.substr(8, 2), 10),
				isDate: !0
			});
		}, n.Time.fromDateString = function(e) {
			return new n.Time({
				year: n.helpers.strictParseInt(e.substr(0, 4)),
				month: n.helpers.strictParseInt(e.substr(5, 2)),
				day: n.helpers.strictParseInt(e.substr(8, 2)),
				isDate: !0
			});
		}, n.Time.fromDateTimeString = function(e, t) {
			if (e.length < 19) throw Error("invalid date-time value: \"" + e + "\"");
			var r;
			return e[19] && e[19] === "Z" ? r = "Z" : t && (r = t.getParameter("tzid")), new n.Time({
				year: n.helpers.strictParseInt(e.substr(0, 4)),
				month: n.helpers.strictParseInt(e.substr(5, 2)),
				day: n.helpers.strictParseInt(e.substr(8, 2)),
				hour: n.helpers.strictParseInt(e.substr(11, 2)),
				minute: n.helpers.strictParseInt(e.substr(14, 2)),
				second: n.helpers.strictParseInt(e.substr(17, 2)),
				timezone: r
			});
		}, n.Time.fromString = function(e, t) {
			return e.length > 10 ? n.Time.fromDateTimeString(e, t) : n.Time.fromDateString(e);
		}, n.Time.fromJSDate = function(e, t) {
			return new n.Time().fromJSDate(e, t);
		}, n.Time.fromData = function(e, t) {
			return new n.Time().fromData(e, t);
		}, n.Time.now = function() {
			return n.Time.fromJSDate(/* @__PURE__ */ new Date(), !1);
		}, n.Time.weekOneStarts = function(e, t) {
			var r = n.Time.fromData({
				year: e,
				month: 1,
				day: 1,
				isDate: !0
			}), i = r.dayOfWeek(), a = t || n.Time.DEFAULT_WEEK_START;
			return i > n.Time.THURSDAY && (r.day += 7), a > n.Time.THURSDAY && (r.day -= 7), r.day -= i - a, r;
		}, n.Time.getDominicalLetter = function(e) {
			var t = "GFEDCBA", r = (e + (e / 4 | 0) + (e / 400 | 0) - (e / 100 | 0) - 1) % 7;
			return n.Time.isLeapYear(e) ? t[(r + 6) % 7] + t[r] : t[r];
		}, n.Time.epochTime = n.Time.fromData({
			year: 1970,
			month: 1,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0,
			isDate: !1,
			timezone: "Z"
		}), n.Time._cmp_attr = function(e, t, n) {
			return e[n] > t[n] ? 1 : e[n] < t[n] ? -1 : 0;
		}, n.Time.daysInYearPassedMonth = [[
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
		]], n.Time.SUNDAY = 1, n.Time.MONDAY = 2, n.Time.TUESDAY = 3, n.Time.WEDNESDAY = 4, n.Time.THURSDAY = 5, n.Time.FRIDAY = 6, n.Time.SATURDAY = 7, n.Time.DEFAULT_WEEK_START = n.Time.MONDAY;
	})(), (function() {
		n.VCardTime = function(e, t, n) {
			this.wrappedJSObject = this;
			var r = this._time = Object.create(null);
			r.year = null, r.month = null, r.day = null, r.hour = null, r.minute = null, r.second = null, this.icaltype = n || "date-and-or-time", this.fromData(e, t);
		}, n.helpers.inherits(n.Time, n.VCardTime, {
			icalclass: "vcardtime",
			icaltype: "date-and-or-time",
			zone: null,
			clone: function() {
				return new n.VCardTime(this._time, this.zone, this.icaltype);
			},
			_normalize: function() {
				return this;
			},
			utcOffset: function() {
				return this.zone instanceof n.UtcOffset ? this.zone.toSeconds() : n.Time.prototype.utcOffset.apply(this, arguments);
			},
			toICALString: function() {
				return n.design.vcard.value[this.icaltype].toICAL(this.toString());
			},
			toString: function() {
				var e = n.helpers.pad2, t = this.year, r = this.month, i = this.day, a = this.hour, o = this.minute, s = this.second, c = t !== null, l = r !== null, u = i !== null, d = a !== null, f = o !== null, p = s !== null, m = (c ? e(t) + (l || u ? "-" : "") : l || u ? "--" : "") + (l ? e(r) : "") + (u ? "-" + e(i) : ""), h = (d ? e(a) : "-") + (d && f ? ":" : "") + (f ? e(o) : "") + (!d && !f ? "-" : "") + (f && p ? ":" : "") + (p ? e(s) : ""), g = this.zone === n.Timezone.utcTimezone ? "Z" : this.zone instanceof n.UtcOffset ? this.zone.toString() : this.zone === n.Timezone.localTimezone ? "" : this.zone instanceof n.Timezone ? n.UtcOffset.fromSeconds(this.zone.utcOffset(this)).toString() : "";
				switch (this.icaltype) {
					case "time": return h + g;
					case "date-and-or-time":
					case "date-time": return m + (h == "--" ? "" : "T" + h + g);
					case "date": return m;
				}
				return null;
			}
		}), n.VCardTime.fromDateAndOrTimeString = function(e, t) {
			function r(e, t, r) {
				return e ? n.helpers.strictParseInt(e.substr(t, r)) : null;
			}
			var i = e.split("T"), a = i[0], o = i[1], s = o ? n.design.vcard.value.time._splitZone(o) : [], c = s[0], l = s[1];
			n.helpers.strictParseInt;
			var u = a ? a.length : 0, d = l ? l.length : 0, f = a && a[0] == "-" && a[1] == "-", p = l && l[0] == "-", m = {
				year: f ? null : r(a, 0, 4),
				month: f && (u == 4 || u == 7) ? r(a, 2, 2) : u == 7 || u == 10 ? r(a, 5, 2) : null,
				day: u == 5 ? r(a, 3, 2) : u == 7 && f ? r(a, 5, 2) : u == 10 ? r(a, 8, 2) : null,
				hour: p ? null : r(l, 0, 2),
				minute: p && d == 3 ? r(l, 1, 2) : d > 4 ? p ? r(l, 1, 2) : r(l, 3, 2) : null,
				second: d == 4 ? r(l, 2, 2) : d == 6 ? r(l, 4, 2) : d == 8 ? r(l, 6, 2) : null
			};
			return c = c == "Z" ? n.Timezone.utcTimezone : c && c[3] == ":" ? n.UtcOffset.fromString(c) : null, new n.VCardTime(m, c, t);
		};
	})(), (function() {
		var e = {
			SU: n.Time.SUNDAY,
			MO: n.Time.MONDAY,
			TU: n.Time.TUESDAY,
			WE: n.Time.WEDNESDAY,
			TH: n.Time.THURSDAY,
			FR: n.Time.FRIDAY,
			SA: n.Time.SATURDAY
		}, t = {};
		for (var r in e)
 /* istanbul ignore else */
		e.hasOwnProperty(r) && (t[e[r]] = r);
		n.Recur = function(e) {
			this.wrappedJSObject = this, this.parts = {}, e && typeof e == "object" && this.fromData(e);
		}, n.Recur.prototype = {
			parts: null,
			interval: 1,
			wkst: n.Time.MONDAY,
			until: null,
			count: null,
			freq: null,
			icalclass: "icalrecur",
			icaltype: "recur",
			iterator: function(e) {
				return new n.RecurIterator({
					rule: this,
					dtstart: e
				});
			},
			clone: function() {
				return new n.Recur(this.toJSON());
			},
			isFinite: function() {
				return !!(this.count || this.until);
			},
			isByCount: function() {
				return !!(this.count && !this.until);
			},
			addComponent: function(e, t) {
				var n = e.toUpperCase();
				n in this.parts ? this.parts[n].push(t) : this.parts[n] = [t];
			},
			setComponent: function(e, t) {
				this.parts[e.toUpperCase()] = t.slice();
			},
			getComponent: function(e) {
				var t = e.toUpperCase();
				return t in this.parts ? this.parts[t].slice() : [];
			},
			getNextOccurrence: function(e, t) {
				var n = this.iterator(e), r;
				do
					r = n.next();
				while (r && r.compare(t) <= 0);
				return r && t.zone && (r.zone = t.zone), r;
			},
			fromData: function(e) {
				for (var t in e) {
					var r = t.toUpperCase();
					r in l ? Array.isArray(e[t]) ? this.parts[r] = e[t] : this.parts[r] = [e[t]] : this[t] = e[t];
				}
				this.interval && typeof this.interval != "number" && c.INTERVAL(this.interval, this), this.wkst && typeof this.wkst != "number" && (this.wkst = n.Recur.icalDayToNumericDay(this.wkst)), this.until && !(this.until instanceof n.Time) && (this.until = n.Time.fromString(this.until));
			},
			toJSON: function() {
				var e = Object.create(null);
				for (var t in e.freq = this.freq, this.count && (e.count = this.count), this.interval > 1 && (e.interval = this.interval), this.parts) if (this.parts.hasOwnProperty(t)) {
					var r = this.parts[t];
					Array.isArray(r) && r.length == 1 ? e[t.toLowerCase()] = r[0] : e[t.toLowerCase()] = n.helpers.clone(this.parts[t]);
				}
				return this.until && (e.until = this.until.toString()), "wkst" in this && this.wkst !== n.Time.DEFAULT_WEEK_START && (e.wkst = n.Recur.numericDayToIcalDay(this.wkst)), e;
			},
			toString: function() {
				var e = "FREQ=" + this.freq;
				for (var t in this.count && (e += ";COUNT=" + this.count), this.interval > 1 && (e += ";INTERVAL=" + this.interval), this.parts)
 /* istanbul ignore else */
				this.parts.hasOwnProperty(t) && (e += ";" + t + "=" + this.parts[t]);
				return this.until && (e += ";UNTIL=" + this.until.toICALString()), "wkst" in this && this.wkst !== n.Time.DEFAULT_WEEK_START && (e += ";WKST=" + n.Recur.numericDayToIcalDay(this.wkst)), e;
			}
		};
		function i(e, t, r, i) {
			var a = i;
			if (i[0] === "+" && (a = i.substr(1)), a = n.helpers.strictParseInt(a), t !== void 0 && i < t) throw Error(e + ": invalid value \"" + i + "\" must be > " + t);
			if (r !== void 0 && i > r) throw Error(e + ": invalid value \"" + i + "\" must be < " + t);
			return a;
		}
		n.Recur.icalDayToNumericDay = function(t, r) {
			var i = r || n.Time.SUNDAY;
			return (e[t] - i + 7) % 7 + 1;
		}, n.Recur.numericDayToIcalDay = function(e, r) {
			var i = e + (r || n.Time.SUNDAY) - n.Time.SUNDAY;
			return i > 7 && (i -= 7), t[i];
		};
		var a = /^(SU|MO|TU|WE|TH|FR|SA)$/, o = /^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/, s = [
			"SECONDLY",
			"MINUTELY",
			"HOURLY",
			"DAILY",
			"WEEKLY",
			"MONTHLY",
			"YEARLY"
		], c = {
			FREQ: function(e, t, n) {
				if (s.indexOf(e) !== -1) t.freq = e;
				else throw Error("invalid frequency \"" + e + "\" expected: \"" + s.join(", ") + "\"");
			},
			COUNT: function(e, t, r) {
				t.count = n.helpers.strictParseInt(e);
			},
			INTERVAL: function(e, t, r) {
				t.interval = n.helpers.strictParseInt(e), t.interval < 1 && (t.interval = 1);
			},
			UNTIL: function(e, t, r) {
				e.length > 10 ? t.until = n.design.icalendar.value["date-time"].fromICAL(e) : t.until = n.design.icalendar.value.date.fromICAL(e), r || (t.until = n.Time.fromString(t.until));
			},
			WKST: function(e, t, r) {
				if (a.test(e)) t.wkst = n.Recur.icalDayToNumericDay(e);
				else throw Error("invalid WKST value \"" + e + "\"");
			}
		}, l = {
			BYSECOND: i.bind(this, "BYSECOND", 0, 60),
			BYMINUTE: i.bind(this, "BYMINUTE", 0, 59),
			BYHOUR: i.bind(this, "BYHOUR", 0, 23),
			BYDAY: function(e) {
				if (o.test(e)) return e;
				throw Error("invalid BYDAY value \"" + e + "\"");
			},
			BYMONTHDAY: i.bind(this, "BYMONTHDAY", -31, 31),
			BYYEARDAY: i.bind(this, "BYYEARDAY", -366, 366),
			BYWEEKNO: i.bind(this, "BYWEEKNO", -53, 53),
			BYMONTH: i.bind(this, "BYMONTH", 1, 12),
			BYSETPOS: i.bind(this, "BYSETPOS", -366, 366)
		};
		n.Recur.fromString = function(e) {
			var t = n.Recur._stringToData(e, !1);
			return new n.Recur(t);
		}, n.Recur.fromData = function(e) {
			return new n.Recur(e);
		}, n.Recur._stringToData = function(e, t) {
			for (var n = Object.create(null), r = e.split(";"), i = r.length, a = 0; a < i; a++) {
				var o = r[a].split("="), s = o[0].toUpperCase(), u = o[0].toLowerCase(), d = t ? u : s, f = o[1];
				if (s in l) {
					for (var p = f.split(","), m = 0, h = p.length; m < h; m++) p[m] = l[s](p[m]);
					n[d] = p.length == 1 ? p[0] : p;
				} else s in c ? c[s](f, n, t) : n[u] = f;
			}
			return n;
		};
	})(), n.RecurIterator = function() {
		function e(e) {
			this.fromData(e);
		}
		return e.prototype = {
			completed: !1,
			rule: null,
			dtstart: null,
			last: null,
			occurrence_number: 0,
			by_indices: null,
			initialized: !1,
			by_data: null,
			days: null,
			days_index: 0,
			fromData: function(e) {
				if (this.rule = n.helpers.formatClassType(e.rule, n.Recur), !this.rule) throw Error("iterator requires a (ICAL.Recur) rule");
				if (this.dtstart = n.helpers.formatClassType(e.dtstart, n.Time), !this.dtstart) throw Error("iterator requires a (ICAL.Time) dtstart");
				e.by_data ? this.by_data = e.by_data : this.by_data = n.helpers.clone(this.rule.parts, !0), e.occurrence_number && (this.occurrence_number = e.occurrence_number), this.days = e.days || [], e.last && (this.last = n.helpers.formatClassType(e.last, n.Time)), this.by_indices = e.by_indices, this.by_indices ||= {
					BYSECOND: 0,
					BYMINUTE: 0,
					BYHOUR: 0,
					BYDAY: 0,
					BYMONTH: 0,
					BYWEEKNO: 0,
					BYMONTHDAY: 0
				}, this.initialized = e.initialized || !1, this.initialized || this.init();
			},
			init: function() {
				this.initialized = !0, this.last = this.dtstart.clone();
				var e = this.by_data;
				if ("BYDAY" in e && this.sort_byday_rules(e.BYDAY), "BYYEARDAY" in e && ("BYMONTH" in e || "BYWEEKNO" in e || "BYMONTHDAY" in e || "BYDAY" in e)) throw Error("Invalid BYYEARDAY rule");
				if ("BYWEEKNO" in e && "BYMONTHDAY" in e) throw Error("BYWEEKNO does not fit to BYMONTHDAY");
				if (this.rule.freq == "MONTHLY" && ("BYYEARDAY" in e || "BYWEEKNO" in e)) throw Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");
				if (this.rule.freq == "WEEKLY" && ("BYYEARDAY" in e || "BYMONTHDAY" in e)) throw Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");
				if (this.rule.freq != "YEARLY" && "BYYEARDAY" in e) throw Error("BYYEARDAY may only appear in YEARLY rules");
				if (this.last.second = this.setup_defaults("BYSECOND", "SECONDLY", this.dtstart.second), this.last.minute = this.setup_defaults("BYMINUTE", "MINUTELY", this.dtstart.minute), this.last.hour = this.setup_defaults("BYHOUR", "HOURLY", this.dtstart.hour), this.last.day = this.setup_defaults("BYMONTHDAY", "DAILY", this.dtstart.day), this.last.month = this.setup_defaults("BYMONTH", "MONTHLY", this.dtstart.month), this.rule.freq == "WEEKLY") if ("BYDAY" in e) {
					var t = this.ruleDayOfWeek(e.BYDAY[0], this.rule.wkst), r = t[0], i = t[1], a = i - this.last.dayOfWeek(this.rule.wkst);
					(this.last.dayOfWeek(this.rule.wkst) < i && a >= 0 || a < 0) && (this.last.day += a);
				} else e.BYDAY = [n.Recur.numericDayToIcalDay(this.dtstart.dayOfWeek())];
				if (this.rule.freq == "YEARLY") {
					for (; this.expand_year_days(this.last.year), !(this.days.length > 0);) this.increment_year(this.rule.interval);
					this._nextByYearDay();
				}
				if (this.rule.freq == "MONTHLY" && this.has_by_data("BYDAY")) {
					var o = null, s = this.last.clone(), c = n.Time.daysInMonth(this.last.month, this.last.year);
					for (var l in this.by_data.BYDAY) if (this.by_data.BYDAY.hasOwnProperty(l)) {
						this.last = s.clone();
						var t = this.ruleDayOfWeek(this.by_data.BYDAY[l]), r = t[0], i = t[1], u = this.last.nthWeekDay(i, r);
						if (r >= 6 || r <= -6) throw Error("Malformed values in BYDAY part");
						if (u > c || u <= 0) {
							if (o && o.month == s.month) continue;
							for (; u > c || u <= 0;) this.increment_month(), c = n.Time.daysInMonth(this.last.month, this.last.year), u = this.last.nthWeekDay(i, r);
						}
						this.last.day = u, (!o || this.last.compare(o) < 0) && (o = this.last.clone());
					}
					if (this.last = o.clone(), this.has_by_data("BYMONTHDAY") && this._byDayAndMonthDay(!0), this.last.day > c || this.last.day == 0) throw Error("Malformed values in BYDAY part");
				} else if (this.has_by_data("BYMONTHDAY") && this.last.day < 0) {
					var c = n.Time.daysInMonth(this.last.month, this.last.year);
					this.last.day = c + this.last.day + 1;
				}
			},
			next: function() {
				var e = this.last ? this.last.clone() : null;
				if (this.rule.count && this.occurrence_number >= this.rule.count || this.rule.until && this.last.compare(this.rule.until) > 0) return this.completed = !0, null;
				if (this.occurrence_number == 0 && this.last.compare(this.dtstart) >= 0) return this.occurrence_number++, this.last;
				var t;
				do
					switch (t = 1, this.rule.freq) {
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
							t = this.next_month();
							break;
						case "YEARLY":
							this.next_year();
							break;
						default: return null;
					}
				while (!this.check_contracting_rules() || this.last.compare(this.dtstart) < 0 || !t);
				if (this.last.compare(e) == 0) throw Error("Same occurrence found twice, protecting you from death by recursion");
				return this.rule.until && this.last.compare(this.rule.until) > 0 ? (this.completed = !0, null) : (this.occurrence_number++, this.last);
			},
			next_second: function() {
				return this.next_generic("BYSECOND", "SECONDLY", "second", "minute");
			},
			increment_second: function(e) {
				return this.increment_generic(e, "second", 60, "minute");
			},
			next_minute: function() {
				return this.next_generic("BYMINUTE", "MINUTELY", "minute", "hour", "next_second");
			},
			increment_minute: function(e) {
				return this.increment_generic(e, "minute", 60, "hour");
			},
			next_hour: function() {
				return this.next_generic("BYHOUR", "HOURLY", "hour", "monthday", "next_minute");
			},
			increment_hour: function(e) {
				this.increment_generic(e, "hour", 24, "monthday");
			},
			next_day: function() {
				"BYDAY" in this.by_data;
				var e = this.rule.freq == "DAILY";
				return this.next_hour() == 0 || (e ? this.increment_monthday(this.rule.interval) : this.increment_monthday(1)), 0;
			},
			next_week: function() {
				var e = 0;
				if (this.next_weekday_by_week() == 0) return e;
				if (this.has_by_data("BYWEEKNO")) {
					++this.by_indices.BYWEEKNO, this.by_indices.BYWEEKNO == this.by_data.BYWEEKNO.length && (this.by_indices.BYWEEKNO = 0, e = 1), this.last.month = 1, this.last.day = 1;
					var t = this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];
					this.last.day += 7 * t, e && this.increment_year(1);
				} else this.increment_monthday(7 * this.rule.interval);
				return e;
			},
			normalizeByMonthDayRules: function(e, t, r) {
				for (var i = n.Time.daysInMonth(t, e), a = [], o = 0, s = r.length, c; o < s; o++) if (c = r[o], !(Math.abs(c) > i)) {
					if (c < 0) c = i + (c + 1);
					else if (c === 0) continue;
					a.indexOf(c) === -1 && a.push(c);
				}
				return a.sort(function(e, t) {
					return e - t;
				});
			},
			_byDayAndMonthDay: function(e) {
				var t, r = this.by_data.BYDAY, i, a = 0, o, s = r.length, c = 0, l, u = this, d = this.last.day;
				function f() {
					for (l = n.Time.daysInMonth(u.last.month, u.last.year), t = u.normalizeByMonthDayRules(u.last.year, u.last.month, u.by_data.BYMONTHDAY), o = t.length; t[a] <= d && !(e && t[a] == d) && a < o - 1;) a++;
				}
				function p() {
					d = 0, u.increment_month(), a = 0, f();
				}
				f(), e && --d;
				for (var m = 48; !c && m;) {
					if (m--, i = d + 1, i > l) {
						p();
						continue;
					}
					var h = t[a++];
					if (h >= i) d = h;
					else {
						p();
						continue;
					}
					for (var g = 0; g < s; g++) {
						var _ = this.ruleDayOfWeek(r[g]), v = _[0], y = _[1];
						if (this.last.day = d, this.last.isNthWeekDay(y, v)) {
							c = 1;
							break;
						}
					}
					if (!c && a === o) {
						p();
						continue;
					}
				}
				if (m <= 0) throw Error("Malformed values in BYDAY combined with BYMONTHDAY parts");
				return c;
			},
			next_month: function() {
				this.rule.freq;
				var e = 1;
				if (this.next_hour() == 0) return e;
				if (this.has_by_data("BYDAY") && this.has_by_data("BYMONTHDAY")) e = this._byDayAndMonthDay();
				else if (this.has_by_data("BYDAY")) {
					var t = n.Time.daysInMonth(this.last.month, this.last.year), r = 0, i = 0;
					if (this.has_by_data("BYSETPOS")) {
						for (var a = this.last.day, o = 1; o <= t; o++) this.last.day = o, this.is_day_in_byday(this.last) && (i++, o <= a && r++);
						this.last.day = a;
					}
					e = 0;
					for (var o = this.last.day + 1; o <= t; o++) if (this.last.day = o, this.is_day_in_byday(this.last) && (!this.has_by_data("BYSETPOS") || this.check_set_position(++r) || this.check_set_position(r - i - 1))) {
						e = 1;
						break;
					}
					o > t && (this.last.day = 1, this.increment_month(), this.is_day_in_byday(this.last) ? (!this.has_by_data("BYSETPOS") || this.check_set_position(1)) && (e = 1) : e = 0);
				} else if (this.has_by_data("BYMONTHDAY")) {
					this.by_indices.BYMONTHDAY++, this.by_indices.BYMONTHDAY >= this.by_data.BYMONTHDAY.length && (this.by_indices.BYMONTHDAY = 0, this.increment_month());
					var t = n.Time.daysInMonth(this.last.month, this.last.year), o = this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];
					o < 0 && (o = t + o + 1), o > t ? (this.last.day = 1, e = this.is_day_in_byday(this.last)) : this.last.day = o;
				} else {
					this.increment_month();
					var t = n.Time.daysInMonth(this.last.month, this.last.year);
					this.by_data.BYMONTHDAY[0] > t ? e = 0 : this.last.day = this.by_data.BYMONTHDAY[0];
				}
				return e;
			},
			next_weekday_by_week: function() {
				var e = 0;
				if (this.next_hour() == 0) return e;
				if (!this.has_by_data("BYDAY")) return 1;
				for (;;) {
					var t = new n.Time();
					this.by_indices.BYDAY++, this.by_indices.BYDAY == Object.keys(this.by_data.BYDAY).length && (this.by_indices.BYDAY = 0, e = 1);
					var r = this.by_data.BYDAY[this.by_indices.BYDAY], i = this.ruleDayOfWeek(r)[1];
					i -= this.rule.wkst, i < 0 && (i += 7), t.year = this.last.year, t.month = this.last.month, t.day = this.last.day;
					var a = t.startDoyWeek(this.rule.wkst);
					if (!(i + a < 1 && !e)) {
						var o = n.Time.fromDayOfYear(a + i, this.last.year);
						return this.last.year = o.year, this.last.month = o.month, this.last.day = o.day, e;
					}
				}
			},
			next_year: function() {
				if (this.next_hour() == 0) return 0;
				if (++this.days_index == this.days.length) {
					this.days_index = 0;
					do
						this.increment_year(this.rule.interval), this.expand_year_days(this.last.year);
					while (this.days.length == 0);
				}
				return this._nextByYearDay(), 1;
			},
			_nextByYearDay: function() {
				var e = this.days[this.days_index], t = this.last.year;
				e < 1 && (e += 1, t += 1);
				var r = n.Time.fromDayOfYear(e, t);
				this.last.day = r.day, this.last.month = r.month;
			},
			ruleDayOfWeek: function(e, t) {
				var r = e.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);
				if (r) {
					var i = parseInt(r[1] || 0, 10);
					return e = n.Recur.icalDayToNumericDay(r[2], t), [i, e];
				} else return [0, 0];
			},
			next_generic: function(e, t, n, r, i) {
				var a = e in this.by_data, o = this.rule.freq == t, s = 0;
				if (i && this[i]() == 0) return s;
				if (a) {
					this.by_indices[e]++, this.by_indices[e];
					var c = this.by_data[e];
					this.by_indices[e] == c.length && (this.by_indices[e] = 0, s = 1), this.last[n] = c[this.by_indices[e]];
				} else o && this["increment_" + n](this.rule.interval);
				return a && s && o && this["increment_" + r](1), s;
			},
			increment_monthday: function(e) {
				for (var t = 0; t < e; t++) {
					var r = n.Time.daysInMonth(this.last.month, this.last.year);
					this.last.day++, this.last.day > r && (this.last.day -= r, this.increment_month());
				}
			},
			increment_month: function() {
				if (this.last.day = 1, this.has_by_data("BYMONTH")) this.by_indices.BYMONTH++, this.by_indices.BYMONTH == this.by_data.BYMONTH.length && (this.by_indices.BYMONTH = 0, this.increment_year(1)), this.last.month = this.by_data.BYMONTH[this.by_indices.BYMONTH];
				else {
					this.rule.freq == "MONTHLY" ? this.last.month += this.rule.interval : this.last.month++, this.last.month--;
					var e = n.helpers.trunc(this.last.month / 12);
					this.last.month %= 12, this.last.month++, e != 0 && this.increment_year(e);
				}
			},
			increment_year: function(e) {
				this.last.year += e;
			},
			increment_generic: function(e, t, r, i) {
				this.last[t] += e;
				var a = n.helpers.trunc(this.last[t] / r);
				this.last[t] %= r, a != 0 && this["increment_" + i](a);
			},
			has_by_data: function(e) {
				return e in this.rule.parts;
			},
			expand_year_days: function(e) {
				var t = new n.Time();
				this.days = [];
				var r = {}, i = [
					"BYDAY",
					"BYWEEKNO",
					"BYMONTHDAY",
					"BYMONTH",
					"BYYEARDAY"
				];
				for (var a in i)
 /* istanbul ignore else */
				if (i.hasOwnProperty(a)) {
					var o = i[a];
					o in this.rule.parts && (r[o] = this.rule.parts[o]);
				}
				if ("BYMONTH" in r && "BYWEEKNO" in r) {
					var s = 1, c = {};
					t.year = e, t.isDate = !0;
					for (var l = 0; l < this.by_data.BYMONTH.length; l++) {
						var u = this.by_data.BYMONTH[l];
						t.month = u, t.day = 1;
						var d = t.weekNumber(this.rule.wkst);
						t.day = n.Time.daysInMonth(u, e);
						var f = t.weekNumber(this.rule.wkst);
						for (l = d; l < f; l++) c[l] = 1;
					}
					for (var p = 0; p < this.by_data.BYWEEKNO.length && s; p++) {
						var m = this.by_data.BYWEEKNO[p];
						m < 52 ? s &= c[p] : s = 0;
					}
					s ? delete r.BYMONTH : delete r.BYWEEKNO;
				}
				var h = Object.keys(r).length;
				if (h == 0) {
					var g = this.dtstart.clone();
					g.year = this.last.year, this.days.push(g.dayOfYear());
				} else if (h == 1 && "BYMONTH" in r) {
					for (var _ in this.by_data.BYMONTH) if (this.by_data.BYMONTH.hasOwnProperty(_)) {
						var v = this.dtstart.clone();
						v.year = e, v.month = this.by_data.BYMONTH[_], v.isDate = !0, this.days.push(v.dayOfYear());
					}
				} else if (h == 1 && "BYMONTHDAY" in r) {
					for (var y in this.by_data.BYMONTHDAY) if (this.by_data.BYMONTHDAY.hasOwnProperty(y)) {
						var b = this.dtstart.clone(), x = this.by_data.BYMONTHDAY[y];
						if (x < 0) {
							var S = n.Time.daysInMonth(b.month, e);
							x = x + S + 1;
						}
						b.day = x, b.year = e, b.isDate = !0, this.days.push(b.dayOfYear());
					}
				} else if (h == 2 && "BYMONTHDAY" in r && "BYMONTH" in r) {
					for (var _ in this.by_data.BYMONTH) if (this.by_data.BYMONTH.hasOwnProperty(_)) {
						var C = this.by_data.BYMONTH[_], S = n.Time.daysInMonth(C, e);
						for (var y in this.by_data.BYMONTHDAY) if (this.by_data.BYMONTHDAY.hasOwnProperty(y)) {
							var x = this.by_data.BYMONTHDAY[y];
							x < 0 && (x = x + S + 1), t.day = x, t.month = C, t.year = e, t.isDate = !0, this.days.push(t.dayOfYear());
						}
					}
				} else if (!(h == 1 && "BYWEEKNO" in r) && !(h == 2 && "BYWEEKNO" in r && "BYMONTHDAY" in r)) if (h == 1 && "BYDAY" in r) this.days = this.days.concat(this.expand_by_day(e));
				else if (h == 2 && "BYDAY" in r && "BYMONTH" in r) {
					for (var _ in this.by_data.BYMONTH) if (this.by_data.BYMONTH.hasOwnProperty(_)) {
						var u = this.by_data.BYMONTH[_], S = n.Time.daysInMonth(u, e);
						t.year = e, t.month = this.by_data.BYMONTH[_], t.day = 1, t.isDate = !0;
						var w = t.dayOfWeek(), T = t.dayOfYear() - 1;
						t.day = S;
						var E = t.dayOfWeek();
						if (this.has_by_data("BYSETPOS")) {
							for (var D = [], O = 1; O <= S; O++) t.day = O, this.is_day_in_byday(t) && D.push(O);
							for (var k = 0; k < D.length; k++) (this.check_set_position(k + 1) || this.check_set_position(k - D.length)) && this.days.push(T + D[k]);
						} else for (var A in this.by_data.BYDAY) if (this.by_data.BYDAY.hasOwnProperty(A)) {
							var j = this.by_data.BYDAY[A], M = this.ruleDayOfWeek(j), N = M[0], P = M[1], F, I = (P + 7 - w) % 7 + 1, L = S - (E + 7 - P) % 7;
							if (N == 0) for (var O = I; O <= S; O += 7) this.days.push(T + O);
							else N > 0 ? (F = I + (N - 1) * 7, F <= S && this.days.push(T + F)) : (F = L + (N + 1) * 7, F > 0 && this.days.push(T + F));
						}
					}
					this.days.sort(function(e, t) {
						return e - t;
					});
				} else if (h == 2 && "BYDAY" in r && "BYMONTHDAY" in r) {
					var R = this.expand_by_day(e);
					for (var z in R) if (R.hasOwnProperty(z)) {
						var O = R[z], B = n.Time.fromDayOfYear(O, e);
						this.by_data.BYMONTHDAY.indexOf(B.day) >= 0 && this.days.push(O);
					}
				} else if (h == 3 && "BYDAY" in r && "BYMONTHDAY" in r && "BYMONTH" in r) {
					var R = this.expand_by_day(e);
					for (var z in R) if (R.hasOwnProperty(z)) {
						var O = R[z], B = n.Time.fromDayOfYear(O, e);
						this.by_data.BYMONTH.indexOf(B.month) >= 0 && this.by_data.BYMONTHDAY.indexOf(B.day) >= 0 && this.days.push(O);
					}
				} else if (h == 2 && "BYDAY" in r && "BYWEEKNO" in r) {
					var R = this.expand_by_day(e);
					for (var z in R) if (R.hasOwnProperty(z)) {
						var O = R[z], B = n.Time.fromDayOfYear(O, e), m = B.weekNumber(this.rule.wkst);
						this.by_data.BYWEEKNO.indexOf(m) && this.days.push(O);
					}
				} else h == 3 && "BYDAY" in r && "BYWEEKNO" in r && "BYMONTHDAY" in r || (h == 1 && "BYYEARDAY" in r ? this.days = this.days.concat(this.by_data.BYYEARDAY) : this.days = []);
				return 0;
			},
			expand_by_day: function(e) {
				var t = [], n = this.last.clone();
				n.year = e, n.month = 1, n.day = 1, n.isDate = !0;
				var r = n.dayOfWeek();
				n.month = 12, n.day = 31, n.isDate = !0;
				var i = n.dayOfWeek(), a = n.dayOfYear();
				for (var o in this.by_data.BYDAY) if (this.by_data.BYDAY.hasOwnProperty(o)) {
					var s = this.by_data.BYDAY[o], c = this.ruleDayOfWeek(s), l = c[0], u = c[1];
					if (l == 0) for (var d = (u + 7 - r) % 7 + 1; d <= a; d += 7) t.push(d);
					else if (l > 0) {
						var f = u >= r ? u - r + 1 : u - r + 8;
						t.push(f + (l - 1) * 7);
					} else {
						var p;
						l = -l, p = u <= i ? a - i + u : a - i + u - 7, t.push(p - (l - 1) * 7);
					}
				}
				return t;
			},
			is_day_in_byday: function(e) {
				for (var t in this.by_data.BYDAY) if (this.by_data.BYDAY.hasOwnProperty(t)) {
					var n = this.by_data.BYDAY[t], r = this.ruleDayOfWeek(n), i = r[0], a = r[1], o = e.dayOfWeek();
					if (i == 0 && a == o || e.nthWeekDay(a, i) == e.day) return 1;
				}
				return 0;
			},
			check_set_position: function(e) {
				return this.has_by_data("BYSETPOS") ? this.by_data.BYSETPOS.indexOf(e) !== -1 : !1;
			},
			sort_byday_rules: function(e) {
				for (var t = 0; t < e.length; t++) for (var n = 0; n < t; n++) if (this.ruleDayOfWeek(e[n], this.rule.wkst)[1] > this.ruleDayOfWeek(e[t], this.rule.wkst)[1]) {
					var r = e[t];
					e[t] = e[n], e[n] = r;
				}
			},
			check_contract_restriction: function(t, n) {
				var r = e._indexMap[t], i = e._expandMap[this.rule.freq][r], a = !1;
				if (t in this.by_data && i == e.CONTRACT) {
					var o = this.by_data[t];
					for (var s in o)
 /* istanbul ignore else */
					if (o.hasOwnProperty(s) && o[s] == n) {
						a = !0;
						break;
					}
				} else a = !0;
				return a;
			},
			check_contracting_rules: function() {
				var e = this.last.dayOfWeek(), t = this.last.weekNumber(this.rule.wkst), r = this.last.dayOfYear();
				return this.check_contract_restriction("BYSECOND", this.last.second) && this.check_contract_restriction("BYMINUTE", this.last.minute) && this.check_contract_restriction("BYHOUR", this.last.hour) && this.check_contract_restriction("BYDAY", n.Recur.numericDayToIcalDay(e)) && this.check_contract_restriction("BYWEEKNO", t) && this.check_contract_restriction("BYMONTHDAY", this.last.day) && this.check_contract_restriction("BYMONTH", this.last.month) && this.check_contract_restriction("BYYEARDAY", r);
			},
			setup_defaults: function(t, n, r) {
				var i = e._indexMap[t];
				return e._expandMap[this.rule.freq][i] != e.CONTRACT && (t in this.by_data || (this.by_data[t] = [r]), this.rule.freq != n) ? this.by_data[t][0] : r;
			},
			toJSON: function() {
				var e = Object.create(null);
				return e.initialized = this.initialized, e.rule = this.rule.toJSON(), e.dtstart = this.dtstart.toJSON(), e.by_data = this.by_data, e.days = this.days, e.last = this.last.toJSON(), e.by_indices = this.by_indices, e.occurrence_number = this.occurrence_number, e;
			}
		}, e._indexMap = {
			BYSECOND: 0,
			BYMINUTE: 1,
			BYHOUR: 2,
			BYDAY: 3,
			BYMONTHDAY: 4,
			BYYEARDAY: 5,
			BYWEEKNO: 6,
			BYMONTH: 7,
			BYSETPOS: 8
		}, e._expandMap = {
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
		}, e.UNKNOWN = 0, e.CONTRACT = 1, e.EXPAND = 2, e.ILLEGAL = 3, e;
	}(), n.RecurExpansion = function() {
		function e(e) {
			return n.helpers.formatClassType(e, n.Time);
		}
		function t(e, t) {
			return e.compare(t);
		}
		function r(e) {
			return e.hasProperty("rdate") || e.hasProperty("rrule") || e.hasProperty("recurrence-id");
		}
		function i(e) {
			this.ruleDates = [], this.exDates = [], this.fromData(e);
		}
		return i.prototype = {
			complete: !1,
			ruleIterators: null,
			ruleDates: null,
			exDates: null,
			ruleDateInc: 0,
			exDateInc: 0,
			exDate: null,
			ruleDate: null,
			dtstart: null,
			last: null,
			fromData: function(t) {
				var r = n.helpers.formatClassType(t.dtstart, n.Time);
				if (r) this.dtstart = r;
				else throw Error(".dtstart (ICAL.Time) must be given");
				if (t.component) this._init(t.component);
				else {
					if (this.last = e(t.last) || r.clone(), !t.ruleIterators) throw Error(".ruleIterators or .component must be given");
					this.ruleIterators = t.ruleIterators.map(function(e) {
						return n.helpers.formatClassType(e, n.RecurIterator);
					}), this.ruleDateInc = t.ruleDateInc, this.exDateInc = t.exDateInc, t.ruleDates && (this.ruleDates = t.ruleDates.map(e), this.ruleDate = this.ruleDates[this.ruleDateInc]), t.exDates && (this.exDates = t.exDates.map(e), this.exDate = this.exDates[this.exDateInc]), t.complete !== void 0 && (this.complete = t.complete);
				}
			},
			next: function() {
				for (var e, t, n, r = 500, i = 0;;) {
					if (i++ > r) throw Error("max tries have occured, rule may be impossible to forfill.");
					if (t = this.ruleDate, e = this._nextRecurrenceIter(this.last), !t && !e) {
						this.complete = !0;
						break;
					}
					if ((!t || e && t.compare(e.last) > 0) && (t = e.last.clone(), e.next()), this.ruleDate === t && this._nextRuleDay(), this.last = t, this.exDate && (n = this.exDate.compare(this.last), n < 0 && this._nextExDay(), n === 0)) {
						this._nextExDay();
						continue;
					}
					return this.last;
				}
			},
			toJSON: function() {
				function e(e) {
					return e.toJSON();
				}
				var t = Object.create(null);
				return t.ruleIterators = this.ruleIterators.map(e), this.ruleDates && (t.ruleDates = this.ruleDates.map(e)), this.exDates && (t.exDates = this.exDates.map(e)), t.ruleDateInc = this.ruleDateInc, t.exDateInc = this.exDateInc, t.last = this.last.toJSON(), t.dtstart = this.dtstart.toJSON(), t.complete = this.complete, t;
			},
			_extractDates: function(e, r) {
				function i(e) {
					l = n.helpers.binsearchInsert(a, e, t), a.splice(l, 0, e);
				}
				for (var a = [], o = e.getAllProperties(r), s = o.length, c = 0, l; c < s; c++) o[c].getValues().forEach(i);
				return a;
			},
			_init: function(e) {
				if (this.ruleIterators = [], this.last = this.dtstart.clone(), !r(e)) {
					this.ruleDate = this.last.clone(), this.complete = !0;
					return;
				}
				if (e.hasProperty("rdate") && (this.ruleDates = this._extractDates(e, "rdate"), this.ruleDates[0] && this.ruleDates[0].compare(this.dtstart) < 0 ? (this.ruleDateInc = 0, this.last = this.ruleDates[0].clone()) : this.ruleDateInc = n.helpers.binsearchInsert(this.ruleDates, this.last, t), this.ruleDate = this.ruleDates[this.ruleDateInc]), e.hasProperty("rrule")) for (var i = e.getAllProperties("rrule"), a = 0, o = i.length, s, c; a < o; a++) s = i[a].getFirstValue(), c = s.iterator(this.dtstart), this.ruleIterators.push(c), c.next();
				e.hasProperty("exdate") && (this.exDates = this._extractDates(e, "exdate"), this.exDateInc = n.helpers.binsearchInsert(this.exDates, this.last, t), this.exDate = this.exDates[this.exDateInc]);
			},
			_nextExDay: function() {
				this.exDate = this.exDates[++this.exDateInc];
			},
			_nextRuleDay: function() {
				this.ruleDate = this.ruleDates[++this.ruleDateInc];
			},
			_nextRecurrenceIter: function() {
				var e = this.ruleIterators;
				if (e.length === 0) return null;
				for (var t = e.length, n, r, i = 0, a; i < t; i++) {
					if (n = e[i], r = n.last, n.completed) {
						t--, i !== 0 && i--, e.splice(i, 1);
						continue;
					}
					(!a || a.last.compare(r) > 0) && (a = n);
				}
				return a;
			}
		}, i;
	}(), n.Event = function() {
		function e(e, t) {
			e instanceof n.Component || (t = e, e = null), e ? this.component = e : this.component = new n.Component("vevent"), this._rangeExceptionCache = Object.create(null), this.exceptions = Object.create(null), this.rangeExceptions = [], t && t.strictExceptions && (this.strictExceptions = t.strictExceptions), t && t.exceptions ? t.exceptions.forEach(this.relateException, this) : this.component.parent && !this.isRecurrenceException() && this.component.parent.getAllSubcomponents("vevent").forEach(function(e) {
				e.hasProperty("recurrence-id") && this.relateException(e);
			}, this);
		}
		e.prototype = {
			THISANDFUTURE: "THISANDFUTURE",
			exceptions: null,
			strictExceptions: !1,
			relateException: function(e) {
				if (this.isRecurrenceException()) throw Error("cannot relate exception to exceptions");
				if (e instanceof n.Component && (e = new n.Event(e)), this.strictExceptions && e.uid !== this.uid) throw Error("attempted to relate unrelated exception");
				var r = e.recurrenceId.toString();
				if (this.exceptions[r] = e, e.modifiesFuture()) {
					var i = [e.recurrenceId.toUnixTime(), r], a = n.helpers.binsearchInsert(this.rangeExceptions, i, t);
					this.rangeExceptions.splice(a, 0, i);
				}
			},
			modifiesFuture: function() {
				return this.component.hasProperty("recurrence-id") ? this.component.getFirstProperty("recurrence-id").getParameter("range") === this.THISANDFUTURE : !1;
			},
			findRangeException: function(e) {
				if (!this.rangeExceptions.length) return null;
				var r = e.toUnixTime(), i = n.helpers.binsearchInsert(this.rangeExceptions, [r], t);
				if (--i, i < 0) return null;
				var a = this.rangeExceptions[i];
				return r < a[0] ? null : a[1];
			},
			getOccurrenceDetails: function(e) {
				var t = e.toString(), r = e.convertToZone(n.Timezone.utcTimezone).toString(), i, a = { recurrenceId: e };
				if (t in this.exceptions) i = a.item = this.exceptions[t], a.startDate = i.startDate, a.endDate = i.endDate, a.item = i;
				else if (r in this.exceptions) i = this.exceptions[r], a.startDate = i.startDate, a.endDate = i.endDate, a.item = i;
				else {
					var o = this.findRangeException(e), s;
					if (o) {
						var c = this.exceptions[o];
						a.item = c;
						var l = this._rangeExceptionCache[o];
						if (!l) {
							var u = c.recurrenceId.clone(), d = c.startDate.clone();
							u.zone = d.zone, l = d.subtractDate(u), this._rangeExceptionCache[o] = l;
						}
						var f = e.clone();
						f.zone = c.startDate.zone, f.addDuration(l), s = f.clone(), s.addDuration(c.duration), a.startDate = f, a.endDate = s;
					} else s = e.clone(), s.addDuration(this.duration), a.endDate = s, a.startDate = e, a.item = this;
				}
				return a;
			},
			iterator: function(e) {
				return new n.RecurExpansion({
					component: this.component,
					dtstart: e || this.startDate
				});
			},
			isRecurring: function() {
				var e = this.component;
				return e.hasProperty("rrule") || e.hasProperty("rdate");
			},
			isRecurrenceException: function() {
				return this.component.hasProperty("recurrence-id");
			},
			getRecurrenceTypes: function() {
				for (var e = this.component.getAllProperties("rrule"), t = 0, n = e.length, r = Object.create(null); t < n; t++) {
					var i = e[t].getFirstValue();
					r[i.freq] = !0;
				}
				return r;
			},
			get uid() {
				return this._firstProp("uid");
			},
			set uid(e) {
				this._setProp("uid", e);
			},
			get startDate() {
				return this._firstProp("dtstart");
			},
			set startDate(e) {
				this._setTime("dtstart", e);
			},
			get endDate() {
				var e = this._firstProp("dtend");
				if (!e) {
					var t = this._firstProp("duration");
					e = this.startDate.clone(), t ? e.addDuration(t) : e.isDate && (e.day += 1);
				}
				return e;
			},
			set endDate(e) {
				this.component.hasProperty("duration") && this.component.removeProperty("duration"), this._setTime("dtend", e);
			},
			get duration() {
				return this._firstProp("duration") || this.endDate.subtractDateTz(this.startDate);
			},
			set duration(e) {
				this.component.hasProperty("dtend") && this.component.removeProperty("dtend"), this._setProp("duration", e);
			},
			get location() {
				return this._firstProp("location");
			},
			set location(e) {
				return this._setProp("location", e);
			},
			get attendees() {
				return this.component.getAllProperties("attendee");
			},
			get summary() {
				return this._firstProp("summary");
			},
			set summary(e) {
				this._setProp("summary", e);
			},
			get description() {
				return this._firstProp("description");
			},
			set description(e) {
				this._setProp("description", e);
			},
			get color() {
				return this._firstProp("color");
			},
			set color(e) {
				this._setProp("color", e);
			},
			get organizer() {
				return this._firstProp("organizer");
			},
			set organizer(e) {
				this._setProp("organizer", e);
			},
			get sequence() {
				return this._firstProp("sequence");
			},
			set sequence(e) {
				this._setProp("sequence", e);
			},
			get recurrenceId() {
				return this._firstProp("recurrence-id");
			},
			set recurrenceId(e) {
				this._setTime("recurrence-id", e);
			},
			_setTime: function(e, t) {
				var r = this.component.getFirstProperty(e);
				r || (r = new n.Property(e), this.component.addProperty(r)), t.zone === n.Timezone.localTimezone || t.zone === n.Timezone.utcTimezone ? r.removeParameter("tzid") : r.setParameter("tzid", t.zone.tzid), r.setValue(t);
			},
			_setProp: function(e, t) {
				this.component.updatePropertyWithValue(e, t);
			},
			_firstProp: function(e) {
				return this.component.getFirstPropertyValue(e);
			},
			toString: function() {
				return this.component.toString();
			}
		};
		function t(e, t) {
			return e[0] > t[0] ? 1 : t[0] > e[0] ? -1 : 0;
		}
		return e;
	}(), n.ComponentParser = function() {
		function e(e) {
			for (var t in e === void 0 && (e = {}), e)
 /* istanbul ignore else */
			e.hasOwnProperty(t) && (this[t] = e[t]);
		}
		return e.prototype = {
			parseEvent: !0,
			parseTimezone: !0,
			oncomplete: function() {},
			onerror: function(e) {},
			ontimezone: function(e) {},
			onevent: function(e) {},
			process: function(e) {
				typeof e == "string" && (e = n.parse(e)), e instanceof n.Component || (e = new n.Component(e));
				for (var t = e.getAllSubcomponents(), r = 0, i = t.length, a; r < i; r++) switch (a = t[r], a.name) {
					case "vtimezone":
						if (this.parseTimezone) {
							var o = a.getFirstPropertyValue("tzid");
							o && this.ontimezone(new n.Timezone({
								tzid: o,
								component: a
							}));
						}
						break;
					case "vevent":
						this.parseEvent && this.onevent(new n.Event(a));
						break;
					default: continue;
				}
				this.oncomplete();
			}
		}, e;
	}();
})))(), 1), a = class {
	constructor(e) {
		this.maxIterations = e.maxIterations == null ? 1e3 : e.maxIterations, this.skipInvalidDates = e.skipInvalidDates != null && e.skipInvalidDates, this.jCalData = i.parse(e.ics), this.component = new i.Component(this.jCalData), this.events = this.component.getAllSubcomponents("vevent").map((e) => new i.Event(e)), this.skipInvalidDates && (this.events = this.events.filter((e) => {
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
}, o = {
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
			iCalExpanderPromise: fetch(r.url, { method: "GET" }).then((e) => e.text().then((t) => (i.response = e, new a({
				ics: t,
				skipInvalidDates: !0
			}))))
		}), i.iCalExpanderPromise.then((n) => {
			t({
				rawEvents: s(n, e.range),
				response: i.response
			});
		}, n);
	}
};
function s(e, t) {
	let r = n(t.start, -1), i = n(t.end, 1), a = e.between(r, i), o = [];
	for (let e of a.events) o.push(Object.assign(Object.assign({}, c(e)), {
		start: e.startDate.toString(),
		end: u(e) && e.endDate ? e.endDate.toString() : null
	}));
	for (let e of a.occurrences) {
		let t = e.item;
		o.push(Object.assign(Object.assign({}, c(t)), {
			start: e.startDate.toString(),
			end: u(t) && e.endDate ? e.endDate.toString() : null
		}));
	}
	return o;
}
function c(e) {
	return {
		title: e.summary,
		url: l(e),
		extendedProps: {
			location: e.location,
			organizer: e.organizer,
			description: e.description
		}
	};
}
function l(e) {
	let t = e.component.getFirstProperty("url");
	return t ? t.getFirstValue() : "";
}
function u(e) {
	return !!e.component.getFirstProperty("dtend") || !!e.component.getFirstProperty("duration");
}
//#endregion
//#region resources/js/plugins/icalendar.js
var d = { iCalendar: r({
	name: "@fullcalendar/icalendar",
	eventSourceDefs: [o]
}) };
//#endregion
export { d as default };

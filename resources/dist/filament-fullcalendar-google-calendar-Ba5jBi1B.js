import { V as e, _n as t, lr as n, n as r, x as i } from "./filament-fullcalendar-core-MrkNOn94.js";
//#region node_modules/@fullcalendar/google-calendar/index.js
var a = "https://www.googleapis.com/calendar/v3/calendars", o = {
	parseMeta(e) {
		let { googleCalendarId: t } = e;
		return !t && e.url && (t = s(e.url)), t ? {
			googleCalendarId: t,
			googleCalendarApiKey: e.googleCalendarApiKey,
			googleCalendarApiBase: e.googleCalendarApiBase,
			extraParams: e.extraParams
		} : null;
	},
	fetch(e, t, r) {
		let { dateEnv: a, options: o } = e.context, s = e.eventSource.meta, d = s.googleCalendarApiKey || o.googleCalendarApiKey;
		if (!d) r(/* @__PURE__ */ Error("Specify a googleCalendarApiKey. See https://fullcalendar.io/docs/google-calendar"));
		else {
			let o = c(s), { extraParams: f } = s, p = typeof f == "function" ? f() : f, m = l(e.range, d, p, a);
			return n("GET", o, m).then(([e, n]) => {
				e.error ? r(new i("Google Calendar API: " + e.error.message, n)) : t({
					rawEvents: u(e.items, m.timeZone),
					response: n
				});
			}, r);
		}
	}
};
function s(e) {
	let t;
	return /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e) ? e : (t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e)) ? decodeURIComponent(t[1]) : null;
}
function c(e) {
	let t = e.googleCalendarApiBase;
	return t ||= a, t + "/" + encodeURIComponent(e.googleCalendarId) + "/events";
}
function l(t, n, r, i) {
	let a, o, s;
	return i.canComputeOffset ? (o = i.formatIso(t.start), s = i.formatIso(t.end)) : (o = e(t.start, -1).toISOString(), s = e(t.end, 1).toISOString()), a = Object.assign(Object.assign({}, r || {}), {
		key: n,
		timeMin: o,
		timeMax: s,
		singleEvents: !0,
		maxResults: 9999
	}), i.timeZone !== "local" && (a.timeZone = i.timeZone), a;
}
function u(e, t) {
	return e.map((e) => d(e, t));
}
function d(e, t) {
	let n = e.htmlLink || null;
	return n && t && (n = f(n, "ctz=" + t)), {
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
function f(e, t) {
	return e.replace(/(\?.*?)?(#|$)/, (e, n, r) => (n ? n + "&" : "?") + t + r);
}
//#endregion
//#region resources/js/plugins/google-calendar.js
var p = { googleCalendar: r({
	name: "@fullcalendar/google-calendar",
	eventSourceDefs: [o],
	optionRefiners: { googleCalendarApiKey: String },
	eventSourceRefiners: {
		googleCalendarApiKey: String,
		googleCalendarId: String,
		googleCalendarApiBase: String,
		extraParams: t
	}
}) };
//#endregion
export { p as default };

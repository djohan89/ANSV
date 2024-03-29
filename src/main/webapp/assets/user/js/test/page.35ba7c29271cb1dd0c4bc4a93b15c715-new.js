! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = ie.type(e);
        return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function(e, r) { return !!t.call(e, r, e) !== n });
        if (t.nodeType) return ie.grep(e, function(e) { return e === t !== n });
        if ("string" == typeof t) {
            if (fe.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function(e) { return ie.inArray(e, t) >= 0 !== n })
    }

    function i(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

    function o(e) { var t = xe[e] = {}; return ie.each(e.match(be) || [], function(e, n) { t[n] = !0 }), t }

    function a() { he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s)) }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), ie.ready())
    }

    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try { n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? ie.parseJSON(n) : n } catch (i) {}
                ie.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (ie.acceptData(e)) {
            var i, o, a = ie.expando,
                s = e.nodeType,
                u = s ? ie.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = J.pop() || ie.guid++ : a), u[l] || (u[l] = s ? {} : { toJSON: ie.noop }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ie.extend(u[l], t) : u[l].data = ie.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, n) {
        if (ie.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ie.cache : e,
                s = o ? e[ie.expando] : ie.expando;
            if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; for (; i--;) delete r[t[i]]; if (n ? !l(r) : !ie.isEmptyObject(r)) return }(n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null) }
        }
    }

    function f() { return !0 }

    function p() { return !1 }

    function h() { try { return he.activeElement } catch (e) {} }

    function m(e) {
        var t = Fe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
    }

    function v(e) { je.test(e.type) && (e.defaultChecked = e.checked) }

    function y(e, t) { return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function b(e) { return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e }

    function x(e) { var t = Ve.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function w(e, t) { for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval")) }

    function T(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n, r, i, o = ie._data(e),
                a = ie._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ie.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                i = ie._data(t);
                for (r in i.events) ie.removeEvent(t, r, i.handle);
                t.removeAttribute(ie.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function N(t, n) {
        var r, i = ie(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
        return i.detach(), o
    }

    function E(e) {
        var t = he,
            n = Ze[e];
        return n || (n = N(e, t), "none" !== n && n || (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = N(e, t), Ke.detach()), Ze[e] = n), n
    }

    function k(e, t) { return { get: function() { var n = e(); return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0 } } }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ft.length; i--;)
            if (t = ft[i] + n, t in e) return t;
        return r
    }

    function A(e, t) { for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) : (i = Ae(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e }

    function D(e, t, n) { var r = ut.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function j(e, t, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Se[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Se[o] + "Width", !0, i))); return a }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tt(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i)) return i;
            r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function H(e, t, n, r, i) { return new H.prototype.init(e, t, n, r, i) }

    function q() { return setTimeout(function() { pt = void 0 }), pt = ie.now() }

    function _(e, t) {
        var n, r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Se[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (bt[t] || []).concat(bt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o, a, s, u, l, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Ae(e),
            m = ie._data(e, "fxshow");
        n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() { s.unqueued || u() }), s.unqueued++, d.always(function() { d.always(function() { s.unqueued--, ie.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ie.css(e, "display"), c = "none" === l ? ie._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
        for (r in t)
            if (i = t[r], mt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                f[r] = m && m[r] || ie.style(e, r)
            } else l = void 0;
        if (ie.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ie._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ie(e).show() : d.done(function() { ie(e).hide() }), d.done(function() {
                var t;
                ie._removeData(e, "fxshow");
                for (t in f) ie.style(e, t, f[t])
            });
            for (r in f) a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i
    }

    function B(e, t, n) {
        var r, i, o = 0,
            a = yt.length,
            s = ie.Deferred().always(function() { delete u.elem }),
            u = function() { if (i) return !1; for (var t = pt || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o); return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1) },
            l = s.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || q(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (O(c, l.opts.specialEasing); a > o; o++)
            if (r = yt[o].call(l, e, c, l.opts)) return r;
        return ie.map(c, M, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(be) || [];
            if (ie.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function R(e, t, n, r) {
        function i(s) { var u; return o[s] = !0, ie.each(e[s] || [], function(e, s) { var l = s(t, n, r); return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1) }), u }
        var o = {},
            a = e === zt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function W(e, t) { var n, r, i = ie.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]); return n && ie.extend(!0, e, n), e }

    function $(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) { u.unshift(a); break }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) { o = a; break }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1])); break }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try { t = a(t) } catch (d) { return { state: "parsererror", error: a ? d : "No conversion from " + u + " to " + o } }
        }
        return { state: "success", data: t }
    }

    function I(e, t, n, r) {
        var i;
        if (ie.isArray(t)) ie.each(t, function(t, i) { n || Vt.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (i in t) I(e + "[" + i + "]", t[i], n, r)
    }

    function X() { try { return new e.XMLHttpRequest } catch (t) {} }

    function U() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function V(e) { return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
    var J = [],
        Y = J.slice,
        G = J.concat,
        Q = J.push,
        K = J.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        re = "1.11.3",
        ie = function(e, t) { return new ie.fn.init(e, t) },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        ue = function(e, t) { return t.toUpperCase() };
    ie.fn = ie.prototype = {
        jquery: re,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function() { return Y.call(this) },
        get: function(e) { return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this) },
        pushStack: function(e) { var t = ie.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e, t) { return ie.each(this, e, t) },
        map: function(e) { return this.pushStack(ie.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(Y.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: Q,
        sort: J.sort,
        splice: J.splice
    }, ie.extend = ie.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, ie.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isFunction: function(e) { return "function" === ie.type(e) },
        isArray: Array.isArray || function(e) { return "array" === ie.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0 },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            try { if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e },
        globalEval: function(t) { t && ie.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(ae, "ms-").replace(se, ue) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(oe, "") },
        makeArray: function(e, t) { var r = t || []; return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) { for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]); return i },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                u = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && u.push(i);
            return G.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) { var n, r, i; return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Y.call(arguments, 2), r = function() { return e.apply(t || this, n.concat(Y.call(arguments))) }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0 },
        now: function() { return +new Date },
        support: ne
    }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { Z["[object " + t + "]"] = t.toLowerCase() });
    var le = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, d, p, h, m;
            if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && _) {
                if (11 !== s && (i = ye.exec(e)))
                    if (a = i[1]) { if (9 === s) { if (o = t.getElementById(a), !o || !o.parentNode) return n; if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n } else { if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n; if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n }
                if (w.qsa && (!M || !M.test(e))) {
                    if (p = d = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = E(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + f(l[u]);
                        h = be.test(e) && c(t.parentNode) || t, m = l.join(",")
                    }
                    if (m) try { return K.apply(n, h.querySelectorAll(m)), n } catch (g) {} finally { d || t.removeAttribute("id") }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) { return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r }
            var t = [];
            return e
        }

        function r(e) { return e[P] = !0, e }

        function i(e) { var t = H.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) { for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

        function u(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function l(e) { return r(function(t) { return t = +t, r(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

        function c(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

        function d() {}

        function f(e) { for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value; return r }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, u, l = [W, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) { if (u = t[P] || (t[P] = {}), (s = u[r]) && s[0] === W && s[1] === o) return l[2] = s[2]; if (u[r] = l, l[2] = e(t, n, a)) return !0 }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) { for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r); return r }

        function g(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s)); return a }

        function v(e, t, n, i, o, a) {
            return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, u) {
                var l, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, u),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, u), i)
                    for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) { return e === t }, a, !0), l = p(function(e) { return ee(t, e) > -1 }, a, !0), c = [function(e, n, r) { var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r)); return t = null, i }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) { for (r = ++s; i > r && !T.relative[e[r].type]; r++); return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e)) }
                    c.push(n)
                }
            return h(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = A,
                        b = r || o && T.find.TAG("*", l),
                        x = W += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) { u.push(c); break }
                            l && (W = x)
                        }
                        i && ((c = !f && c) && p--, r && m.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = G.call(u));
                            v = g(v)
                        }
                        K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = x, A = y), m
                };
            return i ? r(a) : a
        }
        var x, w, T, C, N, E, k, S, A, D, j, L, H, q, _, M, F, O, B, P = "sizzle" + 1 * new Date,
            R = e.document,
            W = 0,
            $ = 0,
            z = n(),
            I = n(),
            X = n(),
            U = function(e, t) { return e === t && (j = !0), 0 },
            V = 1 << 31,
            J = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            Q = Y.push,
            K = Y.push,
            Z = Y.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + ie + "$"),
            he = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function(e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            Ce = function() { L() };
        try { K.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType } catch (Ne) {
            K = {
                apply: Y.length ? function(e, t) { Q.apply(e, Z.call(t)) } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _ = !N(r), w.attributes = i(function(e) { return e.className = "i", !e.getAttribute("className") }), w.getElementsByTagName = i(function(e) { return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) { return q.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length }), w.getById ? (T.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && _) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, T.filter.ID = function(e) { var t = e.replace(we, Te); return function(e) { return e.getAttribute("id") === t } }) : (delete T.find.ID, T.filter.ID = function(e) { var t = e.replace(we, Te); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }), T.find.TAG = w.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) { for (; n = o[i++];) 1 === n.nodeType && r.push(n); return r }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) { return _ ? t.getElementsByClassName(e) : void 0 }, F = [], M = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) { q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]") }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = ve.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) { w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), F.push("!=", ae) }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(q.compareDocumentPosition), B = t || ve.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) { if (e === t) return j = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && B(R, e) ? -1 : t === r || t.ownerDocument === R && B(R, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    l = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, r) : H
        }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !_ || F && F.test(n) || M && M.test(n))) try { var r = O.call(e, n); if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) { return (e.ownerDocument || e) !== H && L(e), B(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) { for (; t = e[i++];) t === e[i] && (r = n.push(i)); for (; r--;) e.splice(n[r], 1) }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += C(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(e) { return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
            filter: {
                TAG: function(e) { var t = e.replace(we, Te).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                CLASS: function(e) { var t = z[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                ATTR: function(e, n, r) { return function(i) { var o = t.attr(i, e); return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0 } },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) { return !!e.parentNode } : function(t, n, u) {
                        var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[P] || (g[P] = {}), l = c[e] || [], p = l[0] === W && l[1], f = l[0] === W && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) { c[e] = [W, p, f]; break }
                            } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === W) f = l[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [W, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) { var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) { for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a]) }) : function(e) { return o(e, 0, i) }) : o }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(ue, "$1"));
                    return i[P] ? r(function(e, t, n, r) { for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, r, o) { return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() }
                }),
                has: r(function(e) { return function(n) { return t(e, n).length > 0 } }),
                contains: r(function(e) {
                    return e = e.replace(we, Te),
                        function(t) { return (t.textContent || t.innerText || C(t)).indexOf(e) > -1 }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                root: function(e) { return e === q },
                focus: function(e) { return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                enabled: function(e) { return e.disabled === !1 },
                disabled: function(e) { return e.disabled === !0 },
                checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) { return !T.pseudos.empty(e) },
                header: function(e) { return ge.test(e.nodeName) },
                input: function(e) { return me.test(e.nodeName) },
                button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                first: l(function() { return [0] }),
                last: l(function(e, t) { return [t - 1] }),
                eq: l(function(e, t, n) { return [0 > n ? n + t : n] }),
                even: l(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                odd: l(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                lt: l(function(e, t, n) { for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r); return e }),
                gt: l(function(e, t, n) { for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r); return e })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[x] = s(x);
        for (x in { submit: !0, reset: !0 }) T.pseudos[x] = u(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) {
                (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(ue, " ") }), s = s.slice(r.length));
                for (a in T.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                    o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
        }, k = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                d = !r && E(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), be.test(o[0].type) && c(t.parentNode) || t))) { if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, r), n; break }
            }
            return (l || k(e, d))(r, t, !_, n, be.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) { return 1 & e.compareDocumentPosition(H.createElement("div")) }), i(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), w.attributes && i(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), i(function(e) { return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) { var r; return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), t
    }(e);
    ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
    var ce = ie.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    ie.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) { return 1 === e.nodeType })) }, ie.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ie.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ie.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) { return this.pushStack(r(this, e || [], !1)) },
        not: function(e) { return this.pushStack(r(this, e || [], !0)) },
        is: function(e) { return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length }
    });
    var pe, he = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = ie.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t))
                        for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = he.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
        };
    ge.prototype = ie.fn, pe = ie(he);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = { children: !0, contents: !0, next: !0, prev: !0 };
    ie.extend({ dir: function(e, t, n) { for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t]; return r }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }), ie.fn.extend({
        has: function(e) {
            var t, n = ie(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ie.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? ie.unique(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), ie.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return ie.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return ie.dir(e, "parentNode", n) }, next: function(e) { return i(e, "nextSibling") }, prev: function(e) { return i(e, "previousSibling") }, nextAll: function(e) { return ie.dir(e, "nextSibling") }, prevAll: function(e) { return ie.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return ie.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return ie.dir(e, "previousSibling", n) }, siblings: function(e) { return ie.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return ie.sibling(e.firstChild) }, contents: function(e) { return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes) } }, function(e, t) { ie.fn[e] = function(n, r) { var i = ie.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || (i = ie.unique(i)), ve.test(e) && (i = i.reverse())), this.pushStack(i) } });
    var be = /\S+/g,
        xe = {};
    ie.Callbacks = function(e) {
        e = "string" == typeof e ? xe[e] || o(e) : ie.extend({}, e);
        var t, n, r, i, a, s, u = [],
            l = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
                    if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) { n = !1; break }
                t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
            },
            d = {
                add: function() { if (u) { var r = u.length;! function o(t) { ie.each(t, function(t, n) { var r = ie.type(n); "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n) }) }(arguments), t ? i = u.length : n && (s = r, c(n)) } return this },
                remove: function() {
                    return u && ie.each(arguments, function(e, n) {
                        for (var r;
                            (r = ie.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function(e) { return e ? ie.inArray(e, u) > -1 : !(!u || !u.length) },
                empty: function() { return u = [], i = 0, this },
                disable: function() { return u = l = n = void 0, this },
                disabled: function() { return !u },
                lock: function() { return l = void 0, n || d.disable(), this },
                locked: function() { return !l },
                fireWith: function(e, n) { return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this },
                fire: function() { return d.fireWith(this, arguments), this },
                fired: function() { return !!r }
            };
        return d
    }, ie.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ie.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() { return n },
                    always: function() { return i.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return ie.Deferred(function(n) {
                            ie.each(t, function(t, o) {
                                var a = ie.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? ie.extend(e, r) : r }
                },
                i = {};
            return r.pipe = r.then, ie.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Y.call(arguments),
                a = o.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : ie.Deferred(),
                l = function(e, n, r) { return function(i) { n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r) } };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var we;
    ie.fn.ready = function(e) { return ie.ready.promise().done(e), this }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? ie.readyWait++ : ie.ready(!0) },
        ready: function(e) {
            if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                if (!he.body) return setTimeout(ie.ready);
                ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (we.resolveWith(he, [ie]), ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready")))
            }
        }
    }), ie.ready.promise = function(t) {
        if (!we)
            if (we = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try { n = null == e.frameElement && he.documentElement } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!ie.isReady) {
                    try { n.doScroll("left") } catch (e) { return setTimeout(i, 50) }
                    a(), ie.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var Te, Ce = "undefined";
    for (Te in ie(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, ie(function() {
            var e, t, n, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) { ne.deleteExpando = !0; try { delete e.test } catch (t) { ne.deleteExpando = !1 } }
            e = null
        }(), ie.acceptData = function(e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    ie.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !l(e) }, data: function(e, t, n) { return c(e, t, n) }, removeData: function(e, t) { return d(e, t) }, _data: function(e, t, n) { return c(e, t, n, !0) }, _removeData: function(e, t) { return d(e, t, !0) } }), ie.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
                    ie._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() { ie.data(this, e) }) : arguments.length > 1 ? this.each(function() { ie.data(this, e, t) }) : o ? u(o, e, ie.data(o, e)) : void 0
        },
        removeData: function(e) { return this.each(function() { ie.removeData(this, e) }) }
    }), ie.extend({
        queue: function(e, t, n) { var r; return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0 },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ie._queueHooks(e, t),
                a = function() { ie.dequeue(e, t) };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return ie._data(e, n) || ie._data(e, n, { empty: ie.Callbacks("once memory").add(function() { ie._removeData(e, t + "queue"), ie._removeData(e, n) }) }) }
    }), ie.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { ie.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = ie.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ae = function(e, t) { return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e) },
        De = ie.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === ie.type(n)) { i = !0; for (s in n) ie.access(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(ie(e), n) })), t))
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        je = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() { ne.noCloneEvent = !1 }), t.cloneNode(!0).click()), null == ne.deleteExpando) { ne.deleteExpando = !0; try { delete t.test } catch (r) { ne.deleteExpando = !1 } }
    }(),
    function() {
        var t, n, r = he.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Le = /^(?:input|select|textarea)$/i,
        He = /^key/,
        qe = /^(?:mouse|pointer|contextmenu)|click/,
        _e = /^(?:focusinfocus|focusoutblur)$/,
        Me = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = ie._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ie.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) { return typeof ie === Ce || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments) }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = ie.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = ie.event.special[p] || {}, d = ie.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ie.expr.match.needsContext.test(i), namespace: h.join(".") }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, p, h, m, g = ie.hasData(e) && ie._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""], l = t.length; l--;)
                    if (s = Me.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ie.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) ie.event.remove(e, p + t[l], n, r, !0);
                ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || he],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), l = ie.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !ie.isWindow(r)) {
                    for (u = l.delegateType || p, _e.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || p, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) {
                    c = r[a], c && (r[a] = null), ie.event.triggered = p;
                    try { r[p]() } catch (m) {}
                    ie.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ie.event.fix(e);
            var t, n, r, i, o, a = [],
                s = Y.call(arguments),
                u = (ie._data(this, "events") || {})[e.type] || [],
                l = ie.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = ie.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 : ie.find(n, this, null, [u]).length), i[n] && i.push(r);
                        i.length && a.push({ elem: u, handlers: i })
                    }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
        },
        fix: function(e) {
            if (e[ie.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : He.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== h() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === h() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) { return ie.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } },
        simulate: function(e, t, n, r) {
            var i = ie.extend(new ie.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
            r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ie.removeEvent = he.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n))
    }, ie.Event = function(e, t) { return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t) }, ie.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ie.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (ie.event.special.submit = {
        setup: function() {
            return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), ie._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0)) },
        teardown: function() { return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit") }
    }), ne.changeBubbles || (ie.event.special.change = {
        setup: function() {
            return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), ie.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0) })), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Le.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0) }), ie._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 },
        teardown: function() { return ie.event.remove(this, "._change"), !Le.test(this.nodeName) }
    }), ne.focusinBubbles || ie.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { ie.event.simulate(t, e.target, ie.event.fix(e), !0) };
        ie.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t);
                i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t) - 1;
                i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
            }
        }
    }), ie.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) { "string" != typeof t && (n = n || t, t = void 0); for (o in e) this.on(o, t, n, e[o], i); return this }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) { return ie().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() { ie.event.add(this, e, r, n, t) })
        },
        one: function(e, t, n, r) { return this.on(e, t, n, r, 1) },
        off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() { ie.event.remove(this, e, n, t) }) },
        trigger: function(e, t) { return this.each(function() { ie.event.trigger(e, t, this) }) },
        triggerHandler: function(e, t) { var n = this[0]; return n ? ie.event.trigger(e, t, n, !0) : void 0 }
    });
    var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oe = / jQuery\d+="(?:null|\d+)"/g,
        Be = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
        Pe = /^\s+/,
        Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        $e = /<tbody/i,
        ze = /<|&#?\w+;/,
        Ie = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = /^true\/(.*)/,
        Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ye = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        Ge = m(he),
        Qe = Ge.appendChild(he.createElement("div"));
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, ie.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ie.contains(e.ownerDocument, e);
            if (ne.html5Clone || ie.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
                    else if (ze.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), u = (We.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[u] || Ye._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Pe.test(o) && p.push(t.createTextNode(Pe.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== u || $e.test(o) ? "<table>" !== c[1] || $e.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ie.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || ie.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ue.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, l = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, J.push(i))
                }
        }
    }), ie.fn.extend({
        text: function(e) { return De(this, function(e) { return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e)) }, null, e, arguments.length) },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        remove: function(e, t) { for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(g(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n)); return this },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() { return ie.clone(this, e, t) }) },
        html: function(e) {
            return De(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof e || Ie.test(e) || !ne.htmlSerialize && Be.test(e) || !ne.leadingWhitespace && Pe.test(e) || Ye[(We.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Re, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() { var e = arguments[0]; return this.domManip(arguments, function(t) { e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this) }), e && (e.length || e.nodeType) ? this : this.remove() },
        detach: function(e) { return this.remove(e, !0) },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                d = l - 1,
                f = e[0],
                p = ie.isFunction(f);
            if (p || l > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = ie.map(g(s, "script"), b), i = o.length; l > u; u++) r = s, u !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, g(r, "script"))), t.call(this[u], r, u);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, ie.map(o, x), u = 0; i > u; u++) r = o[u], Ue.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
                s = n = null
            }
            return this
        }
    }), ie.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { ie.fn[e] = function(e) { for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), Q.apply(i, n.get()); return this.pushStack(i) } });
    var Ke, Ze = {};
    ! function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        rt = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
        it = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) { return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null) }, tt = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, i = s.minWidth,
            o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : he.documentElement.currentStyle && (et = function(e) { return e.currentStyle }, tt = function(e, t, n) { var r, i, o, a, s = e.style; return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto" }), ! function() {
        function t() {
            var t, n, r, i;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || { width: "4px" }).width, i = t.appendChild(he.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
        }
        var n, r, i, o, a, s, u;
        n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], (r = i && i.style) && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, { reliableHiddenOffsets: function() { return null == s && t(), s }, boxSizingReliable: function() { return null == a && t(), a }, pixelPosition: function() { return null == o && t(), o }, reliableMarginRight: function() { return null == u && t(), u } }))
    }(), ie.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        ut = new RegExp("^(" + ke + ")(.*)$", "i"),
        lt = new RegExp("^([+-])=(" + ke + ")", "i"),
        ct = { position: "absolute", visibility: "hidden", display: "block" },
        dt = { letterSpacing: "0", fontWeight: "400" },
        ft = ["Webkit", "O", "Moz", "ms"];
    ie.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = tt(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": ne.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ie.camelCase(t),
                    u = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = S(u, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = lt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try { u[t] = n } catch (l) {}
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = ie.camelCase(t); return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o }
    }), ie.each(["height", "width"], function(e, t) { ie.cssHooks[t] = { get: function(e, n, r) { return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() { return L(e, t, r) }) : L(e, t, r) : void 0 }, set: function(e, n, r) { var i = r && et(e); return D(e, n, r ? j(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0) } } }), ne.opacity || (ie.cssHooks.opacity = {
        get: function(e, t) { return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
        }
    }), ie.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) { return t ? ie.swap(e, { display: "inline-block" }, tt, [e, "marginRight"]) : void 0 }), ie.each({ margin: "", padding: "", border: "Width" }, function(e, t) { ie.cssHooks[e + t] = { expand: function(n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, nt.test(e) || (ie.cssHooks[e + t].set = D) }), ie.fn.extend({
        css: function(e, t) {
            return De(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (ie.isArray(t)) { for (r = et(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r); return o }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() { return A(this, !0) },
        hide: function() { return A(this) },
        toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Ae(this) ? ie(this).show() : ie(this).hide() }) }
    }), ie.Tween = H, H.prototype = { constructor: H, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px") }, cur: function() { var e = H.propHooks[this.prop]; return e && e.get ? e.get(this) : H.propHooks._default.get(this) }, run: function(e) { var t, n = H.propHooks[this.prop]; return this.pos = t = this.options.duration ? ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ie.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, ie.fx = H.prototype.init, ie.fx.step = {};
    var pt, ht, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [F],
        bt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = gt.exec(t),
                    o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== o && +r) && gt.exec(ie.css(n.elem, e)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ie.Animation = ie.extend(B, { tweener: function(e, t) { ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t) }, prefilter: function(e, t) { t ? yt.unshift(e) : yt.push(e) } }), ie.speed = function(e, t, n) { var r = e && "object" == typeof e ? ie.extend({}, e) : { complete: n || !n && t || ie.isFunction(e) && e, duration: e, easing: n && t || t && !ie.isFunction(t) && t }; return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue) }, r }, ie.fn.extend({
            fadeTo: function(e, t, n, r) { return this.filter(Ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
            animate: function(e, t, n, r) {
                var i = ie.isEmptyObject(e),
                    o = ie.speed(t, n, r),
                    a = function() {
                        var t = B(this, ie.extend({}, e), o);
                        (i || ie._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ie.timers,
                        a = ie._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && ie.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ie._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function(e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function(e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i) }
        }), ie.each({ slideDown: _("show"), slideUp: _("hide"), slideToggle: _("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { ie.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), ie.timers = [], ie.fx.tick = function() {
            var e, t = ie.timers,
                n = 0;
            for (pt = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), pt = void 0
        }, ie.fx.timer = function(e) { ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop() }, ie.fx.interval = 13, ie.fx.start = function() { ht || (ht = setInterval(ie.fx.tick, ie.fx.interval)) }, ie.fx.stop = function() { clearInterval(ht), ht = null }, ie.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ie.fn.delay = function(e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) }
            })
        },
        function() {
            var e, t, n, r, i;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), i = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var xt = /\r/g;
    ie.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ie.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function(e) { return null == e ? "" : e + "" })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)) : void 0
        }
    }), ie.extend({
        valHooks: {
            option: { get: function(e) { var t = ie.find.attr(e, "value"); return null != t ? t : ie.trim(ie.text(e)) } },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
                        if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try { r.selected = n = !0 } catch (s) { r.scrollHeight } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function() { ie.valHooks[this] = { set: function(e, t) { return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0 } }, ne.checkOn || (ie.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var wt, Tt, Ct = ie.expr.attrHandle,
        Nt = /^(?:checked|selected)$/i,
        Et = ne.getSetAttribute,
        kt = ne.input;
    ie.fn.extend({ attr: function(e, t) { return De(this, ie.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { ie.removeAttr(this, e) }) } }), ie.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ce ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t)) : void 0 },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(be);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? kt && Et || !Nt.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Et ? n : r)
        },
        attrHooks: { type: { set: function(e, t) { if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }
    }), Tt = { set: function(e, t, n) { return t === !1 ? ie.removeAttr(e, n) : kt && Et || !Nt.test(n) ? e.setAttribute(!Et && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n } }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ct[t] || ie.find.attr;
        Ct[t] = kt && Et || !Nt.test(t) ? function(e, t, r) { var i, o; return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = o), i } : function(e, t, n) { return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null }
    }), kt && Et || (ie.attrHooks.value = { set: function(e, t, n) { return ie.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n) } }), Et || (wt = { set: function(e, t, n) { var r = e.getAttributeNode(n); return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, Ct.id = Ct.name = Ct.coords = function(e, t, n) { var r; return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null }, ie.valHooks.button = { get: function(e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : void 0 }, set: wt.set }, ie.attrHooks.contenteditable = { set: function(e, t, n) { wt.set(e, "" === t ? !1 : t, n) } }, ie.each(["width", "height"], function(e, t) { ie.attrHooks[t] = { set: function(e, n) { return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), ne.style || (ie.attrHooks.style = { get: function(e) { return e.style.cssText || void 0 }, set: function(e, t) { return e.style.cssText = t + "" } });
    var St = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    ie.fn.extend({ prop: function(e, t) { return De(this, ie.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return e = ie.propFix[e] || e, this.each(function() { try { this[e] = void 0, delete this[e] } catch (t) {} }) } }), ie.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(e, t, n) { var r, i, o, a = e.nodeType; return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0 }, propHooks: { tabIndex: { get: function(e) { var t = ie.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : St.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1 } } } }), ne.hrefNormalized || ie.each(["href", "src"], function(e, t) { ie.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), ne.optSelected || (ie.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { ie.propFix[this.toLowerCase()] = this }), ne.enctype || (ie.propFix.enctype = "encoding");
    var Dt = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) { ie(this).addClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(be) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                u = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function(t) { ie(this).removeClass(e.call(this, t, this.className)) });
            if (l)
                for (t = (e || "").match(be) || []; u > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? ie.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ie.isFunction(e) ? function(n) { ie(this).toggleClass(e.call(this, n, this.className, t), t) } : function() {
                if ("string" === n)
                    for (var t, r = 0, i = ie(this), o = e.match(be) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ce || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { ie.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), ie.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
    var jt = ie.now(),
        Lt = /\?/,
        Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = ie.trim(t + "");
        return i && !ie.trim(i.replace(Ht, function(e, t, i, o) { return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "") })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t)
    }, ie.parseXML = function(t) { var n, r; if (!t || "string" != typeof t) return null; try { e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)) } catch (i) { n = void 0 } return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n };
    var qt, _t, Mt = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        $t = {},
        zt = {},
        It = "*/".concat("*");
    try { _t = location.href } catch (Xt) { _t = he.createElement("a"), _t.href = "", _t = _t.href }
    qt = Wt.exec(_t.toLowerCase()) || [], ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: _t, type: "GET", isLocal: Bt.test(qt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? W(W(e, ie.ajaxSettings), t) : W(ie.ajaxSettings, e) },
        ajaxPrefilter: P($t),
        ajaxTransport: P(zt),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = z(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ie.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (ie.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), u && (p.trigger("ajaxComplete", [w, d]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, u, l, c, d = ie.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
                h = ie.Deferred(),
                m = ie.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Ot.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === b ? a : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return b || (e = y[n] = y[n] || e, v[e] = t), this },
                    overrideMimeType: function(e) { return b || (d.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) { var t = e || x; return l && l.abort(t), n(0, t), this }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || _t) + "").replace(Mt, "").replace(Rt, qt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (r = Wt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === qt[1] && r[2] === qt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (qt[3] || ("http:" === qt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), R($t, d, t, w), 2 === b) return w;
            u = ie.event && d.global, u && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Lt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ft.test(o) ? o.replace(Ft, "$1_=" + jt++) : o + (Lt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in { success: 1, error: 1, complete: 1 }) w[i](d[i]);
            if (l = R(zt, d, t, w)) {
                w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() { w.abort("timeout") }, d.timeout));
                try { b = 1, l.send(v, n) } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) { return ie.get(e, t, n, "json") },
        getScript: function(e, t) { return ie.get(e, void 0, t, "script") }
    }), ie.each(["get", "post"], function(e, t) { ie[t] = function(e, n, r, i) { return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({ url: e, type: t, dataType: i, data: n, success: r }) } }), ie._evalUrl = function(e) { return ie.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, ie.fn.extend({
        wrapAll: function(e) {
            if (ie.isFunction(e)) return this.each(function(t) { ie(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ie.isFunction(e) ? function(t) { ie(this).wrapInner(e.call(this, t)) } : function() {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = ie.isFunction(e); return this.each(function(n) { ie(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes) }).end() }
    }), ie.expr.filters.hidden = function(e) { return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display")) }, ie.expr.filters.visible = function(e) { return !ie.expr.filters.hidden(e) };
    var Ut = /%20/g,
        Vt = /\[\]$/,
        Jt = /\r?\n/g,
        Yt = /^(?:submit|button|image|reset|file)$/i,
        Gt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function(e, t) {
        var n, r = [],
            i = function(e, t) { t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(Ut, "+")
    }, ie.fn.extend({ serialize: function() { return ie.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = ie.prop(this, "elements"); return e ? ie.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !ie(this).is(":disabled") && Gt.test(this.nodeName) && !Yt.test(e) && (this.checked || !je.test(e)) }).map(function(e, t) { var n = ie(this).val(); return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) { return { name: t.name, value: e.replace(Jt, "\r\n") } }) : { name: t.name, value: n.replace(Jt, "\r\n") } }).get() } }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U() } : X;
    var Qt = 0,
        Kt = {},
        Zt = ie.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() { for (var e in Kt) Kt[e](void 0, !0) }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && ie.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Qt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    /*o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, u, l;
                        if (t && (i || 4 === o.readyState))
                            if (delete Kt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                try { u = o.statusText } catch (c) { u = "" }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
                            }
                        l && r(s, u, l, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t()*/
                },
                abort: function() { t && t(void 0, !0) }
            }
        }
    }), ie.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return ie.globalEval(e), e } } }), ie.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), ie.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = he.head || ie("head")[0] || he.documentElement;
            return {
                send: function(r, i) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() { t && t.onload(void 0, !0) }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = en.pop() || ie.expando + "_" + jt++; return this[e] = !0, e } }), ie.ajaxPrefilter("json jsonp", function(t, n, r) { var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data"); return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() { return a || ie.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0 }), "script") : void 0 }), ie.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var r = de.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
    };
    var nn = ie.fn.load;
    ie.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({ url: e, type: o, dataType: "html", data: t }).done(function(e) { i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e) }).complete(n && function(e, t) { a.each(n, i || [e.responseText, t, e]) }), this
    }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { ie.fn[t] = function(e) { return this.on(t, e) } }), ie.expr.filters.animated = function(e) { return ie.grep(ie.timers, function(t) { return e === t.elem }).length };
    var rn = e.document.documentElement;
    ie.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = ie.css(e, "position"),
                d = ie(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ie.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) { ie.offset.setOffset(this, e, t) });
            var t, n, r = { top: 0, left: 0 },
                i = this[0],
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = V(o), { top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    r = this[0];
                return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - ie.css(r, "marginTop", !0), left: t.left - n.left - ie.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent; return e || rn }) }
    }), ie.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function(r) { return De(this, function(e, r, i) { var o = V(e); return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i) }, e, r, arguments.length, null) }
    }), ie.each(["top", "left"], function(e, t) { ie.cssHooks[t] = k(ne.pixelPosition, function(e, n) { return n ? (n = tt(e, t), rt.test(n) ? ie(e).position()[t] + "px" : n) : void 0 }) }), ie.each({ Height: "height", Width: "width" }, function(e, t) {
        ie.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
            ie.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return De(this, function(t, n, r) {
                    var i;
                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ie.fn.size = function() { return this.length }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return ie });
    var on = e.jQuery,
        an = e.$;
    return ie.noConflict = function(t) { return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie }, typeof t === Ce && (e.jQuery = e.$ = ie), ie
});
window.Granite = window.Granite || {},
    function(e, t) {
        e.Util = function() {
            var e = {
                patchText: function(e, n) {
                    if (n)
                        if (t.isArray(n))
                            for (var r = 0; r < n.length; r++) e = e.replace("{" + r + "}", n[r]);
                        else e = e.replace("{0}", n);
                    return e
                }
            };
            return e
        }()
    }(Granite, jQuery),
    function(Granite, util, $) {
        Granite.HTTP = function() {
            var contextPath = null,
                SCRIPT_URL_REGEXP = /^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs).*\.js(\?.*)?$/,
                ENCODE_PATH_REGEXP = /[^1\w-\.!~\*'\(\)\/%;:@&=\$,]/,
                loginRedirected = !1,
                self = {};
            return self.getSchemeAndAuthority = function(e) { var t; try { return -1 == e.indexOf("://") ? "" : (t = e.indexOf("/", e.indexOf("://") + 3), -1 == t ? e : e.substring(0, t)) } catch (n) { return "" } }, self.getContextPath = function() { return contextPath }, self.detectContextPath = function() {
                try {
                    if (window.CQURLInfo) contextPath = CQURLInfo.contextPath || "";
                    else {
                        for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) { var n = SCRIPT_URL_REGEXP.exec(e[t].src); if (n) return void(contextPath = n[1]) }
                        contextPath = ""
                    }
                } catch (r) {}
            }, self.externalize = function(e) { try { 0 == e.indexOf("/") && contextPath && 0 != e.indexOf(contextPath + "/") && (e = contextPath + e) } catch (t) {} return e }, self.internalize = function(e, t) {
                if ("/" == e.charAt(0)) return contextPath === e ? "" : contextPath && 0 == e.indexOf(contextPath + "/") ? e.substring(contextPath.length) : e;
                t || (t = document);
                var n = self.getSchemeAndAuthority(t.location.href),
                    r = self.getSchemeAndAuthority(e);
                return n == r ? e.substring(r.length + (contextPath ? contextPath.length : 0)) : e
            }, self.getPath = function(e) {
                if (e) e = self.removeParameters(e), e = self.removeAnchor(e);
                else {
                    if (window.CQURLInfo && CQURLInfo.requestPath) return CQURLInfo.requestPath;
                    e = window.location.pathname
                }
                e = self.internalize(e);
                var t = e.indexOf(".", e.lastIndexOf("/"));
                return -1 != t && (e = e.substring(0, t)), e
            }, self.removeAnchor = function(e) { return -1 != e.indexOf("#") ? e.substring(0, e.indexOf("#")) : e }, self.removeParameters = function(e) { return -1 != e.indexOf("?") ? e.substring(0, e.indexOf("?")) : e }, self.encodePathOfURI = function(e) { var t, n; return -1 != e.indexOf("?") ? (t = e.split("?"), n = "?") : -1 != e.indexOf("#") ? (t = e.split("#"), n = "#") : t = [e], ENCODE_PATH_REGEXP.test(t[0]) && (t[0] = self.encodePath(t[0])), t.join(n) }, self.encodePath = function(e) { return e = encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]"), e = e.replace(/\+/g, "%2B"), e = e.replace(/\?/g, "%3F"), e = e.replace(/;/g, "%3B"), e = e.replace(/#/g, "%23"), e = e.replace(/=/g, "%3D"), e = e.replace(/\$/g, "%24"), e = e.replace(/,/g, "%2C"), e = e.replace(/'/g, "%27"), e = e.replace(/"/g, "%22") }, self.handleLoginRedirect = function() {
                if (!loginRedirected) {
                    loginRedirected = !0;
                    var e = util.getTopWindow().document.location;
                    e.href = self.externalize(sling.LOGIN_URL) + "?resource=" + encodeURIComponent(e.pathname + e.search + e.hash)
                }
            }, self.getXhrHook = function(e, t, n) { if (t = t || "GET", window.G_XHR_HOOK && $.isFunction(G_XHR_HOOK)) { var r = { url: e, method: t }; return n && (r.params = n), G_XHR_HOOK(r) } return null }, self.eval = function(response) { "object" != typeof response && (response = $.ajax({ url: response, type: "get", async: !1 })); try { return eval("(" + (response.body ? response.body : response.responseText) + ")") } catch (e) {} return null }, self
        }()
    }(Granite, Granite.Util, jQuery),
    function(e, t, n, r, i) {
        t.I18n = function() {
            var t = {},
                a = "/aemapi/common/i18n/dict.",
                o = ".b2c.b2b",
                c = ".json",
                l = void 0,
                u = !1,
                s = null,
                f = {},
                h = !1,
                d = function(e) { if (h) return a + e + o + c; var t = i("html").attr("data-i18n-dictionary-src"); return t ? t.replace("{locale}", encodeURIComponent(e)).replace("{+locale}", e) : a + e + o + c };
            return f.LOCALE_DEFAULT = "en", f.PSEUDO_LANGUAGE = "zz", f.PSEUDO_PATTERN_KEY = "_pseudoPattern_", f.init = function(e) { e = e || {}, this.setLocale(e.locale), this.setUrlPrefix(e.urlPrefix), this.setUrlSuffix(e.urlSuffix) }, f.setLocale = function(e) { e && (l = e) }, f.getLocale = function() { return i.isFunction(l) && (l = l()), l || e.documentElement.lang || f.LOCALE_DEFAULT }, f.setUrlPrefix = function(e) { e && (a = e, h = !0) }, f.setUrlSuffix = function(e) { e && (c = e, h = !0) }, f.getDictionary = function(e) {
                if (e = e || f.getLocale(), !t[e]) {
                    u = 0 == e.indexOf(f.PSEUDO_LANGUAGE);
                    try {
                        var n = i.ajax(d(e), { async: !1, dataType: "json" });
                        t[e] = i.parseJSON(n.responseText)
                    } catch (r) {}
                    t[e] || (t[e] = {})
                }
                return t[e]
            }, f.get = function(e, t, r) { var i, a, o; return i = f.getDictionary(), o = u ? f.PSEUDO_PATTERN_KEY : r ? e + " ((" + r + "))" : e, i && (a = i[o]), a || (a = e), u && (a = a.replace("{string}", e).replace("{comment}", r ? r : "")), n.patchText(a, t) }, f.getVar = function(e, t) { return e ? f.get(e, null, t) : null }, f.getLanguages = function() {
                if (!s) try {
                    var e = r.eval("/libs/wcm/core/resources/languages.overlay.infinity.json");
                    i.each(e, function(e, t) { t.title = f.getVar(t.language), t.title && t.country && "*" != t.country && (t.title += " (" + f.getVar(t.country) + ")") }), s = e
                } catch (t) { s = {} }
                return s
            }, f.parseLocale = function(e) {
                if (!e) return null;
                var t = e.indexOf("_");
                0 > t && (t = e.indexOf("-"));
                var n, r;
                return 0 > t ? (n = e, r = null) : (n = e.substring(0, t), r = e.substring(t + 1)), { code: e, language: n, country: r }
            }, f
        }()
    }(document, Granite, Granite.Util, Granite.HTTP, jQuery), Granite.HTTP.detectContextPath();
! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) {
    "use strict";
    var i = e("#siteCode").val(),
        t = "bu_" + i;
    Granite.I18n.setLocale(i);
    var o = window.Slick || {};
    window.smg = window.smg || {}, window.smg.aem = window.smg.aem || {}, window.smg.aem.globaltext = { _prev: Granite.I18n.get("Previous", null, t), _next: Granite.I18n.get("Next", null, t) };
    var s = window.smg.aem.globaltext;
    o = function() {
        function i(i, o) {
            var n, r = this;
            r.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: e(i), appendDots: e(i), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="' + s._prev + '" tabindex="0" role="button">' + s._prev + "</button>", nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="' + s._next + '" tabindex="0" role="button">' + s._next + "</button>", autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(i, t) { return e('<button type="button" data-role="none" role="button" tabindex="0" />').text("slide" + (t + 1)) }, dots: !1, dotsClass: "slick-dots", elements: "div", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, n = e(i).data("slick") || {}, r.options = e.extend({}, r.defaults, o, n), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
        }
        var t = 0;
        return i
    }(), o.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" })
    }, o.prototype.addSlide = o.prototype.slickAdd = function(i, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (0 > t || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? e(i).appendTo(s.$slideTrack) : o ? e(i).insertBefore(s.$slides.eq(t)) : e(i).insertAfter(s.$slides.eq(t)) : o === !0 ? e(i).prependTo(s.$slideTrack) : e(i).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(i, t) { e(t).attr("data-slick-index", i) }), s.$slidesCache = s.$slides, s.reinit()
    }, o.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({ height: i }, e.options.speed)
        }
    }, o.prototype.animateSlide = function(i, t) {
        var o = {},
            s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (i = -i), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({ left: i }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: i }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), e({ animStart: s.currentLeft }).animate({ animStart: i }, { duration: s.options.speed, easing: s.options.easing, step: function(e) { e = Math.ceil(e), s.options.vertical === !1 ? (o[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(o)) }, complete: function() { t && t.call() } })) : (s.applyTransition(), i = Math.ceil(i), o[s.animType] = s.options.vertical === !1 ? "translate3d(" + i + "px, 0px, 0px)" : "translate3d(0px," + i + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() { s.disableTransition(), t.call() }, s.options.speed))
    }, o.prototype.getNavTarget = function() {
        var i = this,
            t = i.options.asNavFor;
        return t && null !== t && (t = e(t).not(i.$slider)), t
    }, o.prototype.asNavFor = function(i) {
        var t = this,
            o = t.getNavTarget();
        null !== o && "object" == typeof o && o.each(function() {
            var t = e(this).slick("getSlick");
            t.unslicked || t.slideHandler(i, !0)
        })
    }, o.prototype.applyTransition = function(e) {
        var i = this,
            t = {};
        t[i.transitionType] = i.options.fade === !1 ? i.transformType + " " + i.options.speed + "ms " + i.options.cssEase : "opacity " + i.options.speed + "ms " + i.options.cssEase, i.options.fade === !1 ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
    }, o.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, o.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, o.prototype.autoPlayIterator = function() {
        var e = this,
            i = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (i = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(i))
    }, o.prototype.buildArrows = function() {
        var i = this;
        i.options.arrows === !0 && (i.$prevArrow = e(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = e(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), i.options.infinite !== !0 && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }))
    }, o.prototype.buildDots = function() {
        var i, t, o = this;
        if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
            for (o.$slider.addClass("slick-dotted"), t = e("<ul />").addClass(o.options.dotsClass), i = 0; i <= o.getDotCount(); i += 1) t.append(e("<li />").append(o.options.customPaging.call(this, o, i)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, o.prototype.buildOut = function() {
        var i = this;
        i.$slides = "ul" === i.options.elements ? i.$slider.find(">" + i.options.elements).children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide") : i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function(i, t) { e(t).attr("data-slick-index", i).data("originalStyling", e(t).attr("style") || "") }), i.$slider.addClass("slick-slider"), i.$slideTrack = "ul" === i.options.elements ? i.$slider.find(">" + i.options.elements).addClass("slick-track") : 0 === i.slideCount ? e('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), (i.options.centerMode === !0 || i.options.swipeToSlide === !0) && (i.options.slidesToScroll = 1), e("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.options.draggable === !0 && i.$list.addClass("draggable")
    }, o.prototype.buildRows = function() {
        var e, i, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = "ul" === l.options.elements ? l.$slider.find(">" + l.options.elements).children() : l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), e = 0; s > e; e++) {
                var a = document.createElement("div");
                for (i = 0; i < l.options.rows; i++) {
                    var d = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = e * r + (i * l.options.slidesPerRow + t);
                        n.get(c) && d.appendChild(n.get(c))
                    }
                    a.appendChild(d)
                }
                o.appendChild(a)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" })
        }
    }, o.prototype.checkResponsive = function(i, t) {
        var o, s, n, r = this,
            l = !1,
            a = r.$slider.width(),
            d = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = a : "min" === r.respondTo && (n = Math.min(d, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), i === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(i)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), i === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(i)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, i === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(i), l = s), i || l === !1 || (r.touchObject.curX = void 0, r.$slider.trigger("breakpoint", [r, l]))
        }
    }, o.prototype.changeSlide = function(i, t) {
        var o, s, n, r = this,
            l = e(i.currentTarget);
        switch (l.is("a") && i.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, i.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var a = 0 === i.data.index ? 0 : i.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(a), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, o.prototype.checkNavigable = function(e) {
        var i, t, o = this;
        if (i = o.getNavigableIndexes(), t = 0, e > i[i.length - 1]) e = i[i.length - 1];
        else
            for (var s in i) {
                if (e < i[s]) { e = t; break }
                t = i[s]
            }
        return e
    }, o.prototype.cleanUpEvents = function() {
        var i = this;
        i.options.dots && null !== i.$dots && e("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", e.proxy(i.interrupt, i, !0)).off("mouseleave.slick", e.proxy(i.interrupt, i, !1)), i.$slider.off("focus.slick blur.slick"), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide)), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), e(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), i.options.accessibility === !0 && i.$list.off("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && e(i.$slideTrack).children().off("click.slick", i.selectHandler), e(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), e(window).off("resize.slick.slick-" + i.instanceUid, i.resize), e("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), e(window).off("load.slick.slick-" + i.instanceUid, i.setPosition), e(document).off("ready.slick.slick-" + i.instanceUid, i.setPosition)
    }, o.prototype.cleanUpSlideEvents = function() {
        var i = this;
        i.$list.off("mouseenter.slick", e.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", e.proxy(i.interrupt, i, !1))
    }, o.prototype.cleanUpRows = function() {
        var e, i = this;
        i.options.rows > 1 && (e = i.$slides.children().children(), e.removeAttr("style"), i.$slider.empty().append(e))
    }, o.prototype.clickHandler = function(e) {
        var i = this;
        i.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, o.prototype.destroy = function(i) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), e(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { e(this).attr("style", e(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, i || t.$slider.trigger("destroy", [t])
    }, o.prototype.disableTransition = function(e) {
        var i = this,
            t = {};
        t[i.transitionType] = "", i.options.fade === !1 ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t)
    }, o.prototype.fadeSlide = function(e, i) {
        var t = this;
        t.cssTransitions === !1 ? (t.$slides.eq(e).css({ zIndex: t.options.zIndex }), t.$slides.eq(e).animate({ opacity: 1 }, t.options.speed, t.options.easing, i)) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 1, zIndex: t.options.zIndex }), i && setTimeout(function() { t.disableTransition(e), i.call() }, t.options.speed))
    }, o.prototype.fadeSlideOut = function(e) {
        var i = this;
        i.cssTransitions === !1 ? i.$slides.eq(e).animate({ opacity: 0, zIndex: i.options.zIndex - 2 }, i.options.speed, i.options.easing) : (i.applyTransition(e), i.$slides.eq(e).css({ opacity: 0, zIndex: i.options.zIndex - 2 }))
    }, o.prototype.filterSlides = o.prototype.slickFilter = function(e) {
        var i = this;
        null !== e && (i.$slidesCache = i.$slides, i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.filter(e).appendTo(i.$slideTrack), i.reinit())
    }, o.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(t) {
            t.stopImmediatePropagation();
            var o = e(this);
            setTimeout(function() { i.options.pauseOnFocus && (i.focussed = o.is(":focus"), i.autoPlay()) }, 0)
        })
    }, o.prototype.getCurrent = o.prototype.slickCurrentSlide = function() { var e = this; return e.currentSlide }, o.prototype.getDotCount = function() {
        var e = this,
            i = 0,
            t = 0,
            o = 0;
        if (e.options.infinite === !0)
            for (; i < e.slideCount;) ++o, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0) o = e.slideCount;
        else
            for (; i < e.slideCount;) ++o, i = t + e.options.slidesToScroll, t += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o - 1
    }, o.prototype.getLeft = function(e) {
        var i, t, o, s = this,
            n = 0;
        return s.slideOffset = 0, t = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = t * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (e - s.slideCount)) * t * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * t * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (e + s.options.slidesToShow - s.slideCount) * t), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), i = s.options.vertical === !1 ? e * s.slideWidth * -1 + s.slideOffset : e * t * -1 + n, s.options.variableWidth === !0 && (o = s.$slideTrack.children(".slick-slide").eq(s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? e : e + s.options.slidesToShow), i = s.options.rtl === !0 ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, s.options.centerMode === !0 && (o = s.$slideTrack.children(".slick-slide").eq(s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? e : e + s.options.slidesToShow + 1), i = s.options.rtl === !0 ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, i += (s.$list.width() - o.outerWidth()) / 2)), i
    }, o.prototype.getOption = o.prototype.slickGetOption = function(e) { var i = this; return i.options[e] }, o.prototype.getNavigableIndexes = function() {
        var e, i = this,
            t = 0,
            o = 0,
            s = [];
        for (i.options.infinite === !1 ? e = i.slideCount : (t = -1 * i.options.slidesToScroll, o = -1 * i.options.slidesToScroll, e = 2 * i.slideCount); e > t;) s.push(t), t = o + i.options.slidesToScroll, o += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        return s
    }, o.prototype.getSlick = function() { return this }, o.prototype.getSlideCount = function() { var i, t, o, s = this; return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(i, n) { return n.offsetLeft - o + e(n).outerWidth() / 2 > -1 * s.swipeLeft ? (t = n, !1) : void 0 }), i = Math.abs(e(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll }, o.prototype.goTo = o.prototype.slickGoTo = function(e, i) {
        var t = this;
        t.changeSlide({ data: { message: "index", index: parseInt(e) } }, i)
    }, o.prototype.init = function(i) {
        var t = this;
        e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), i && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay(), t.$slider.find(".slick-list").attr("aria-live", "off"))
    }, o.prototype.initADA = function() {
        var i = this;
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), i.$slideTrack.attr("role", "listbox"), i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(t) { e(this).attr({ role: "option", "aria-describedby": "slick-slide" + i.instanceUid + t }) }), null !== i.$dots && i.$dots.attr("role", "tablist").find("li").each(function(t) { e(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + i.instanceUid + t, id: "slick-slide" + i.instanceUid + t }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button"), i.activateADA()
    }, o.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide))
    }, o.prototype.initDotEvents = function() {
        var i = this;
        i.options.dots === !0 && i.slideCount > i.options.slidesToShow && e("li", i.$dots).on("click.slick", { message: "index" }, i.changeSlide), i.options.dots === !0 && i.options.pauseOnDotsHover === !0 && e("li", i.$dots).on("mouseenter.slick", e.proxy(i.interrupt, i, !0)).on("mouseleave.slick", e.proxy(i.interrupt, i, !1))
    }, o.prototype.initSlideEvents = function() {
        var i = this;
        i.options.pauseOnHover && (i.$list.on("mouseenter.slick", e.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", e.proxy(i.interrupt, i, !1)))
    }, o.prototype.initializeEvents = function() {
        var i = this;
        i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", { action: "start" }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", { action: "move" }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", { action: "end" }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), e(document).on(i.visibilityChange, e.proxy(i.visibility, i)), i.options.accessibility === !0 && i.$list.on("keydown.slick", i.keyHandler), i.options.focusOnSelect === !0 && e(i.$slideTrack).children().on("click.slick", i.selectHandler), e(window).on("orientationchange.slick.slick-" + i.instanceUid, e.proxy(i.orientationChange, i)), e(window).on("resize.slick.slick-" + i.instanceUid, e.proxy(i.resize, i)), e("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), e(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), e(document).on("ready.slick.slick-" + i.instanceUid, i.setPosition)
    }, o.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, o.prototype.keyHandler = function(e) {
        var i = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && i.options.accessibility === !0 ? i.changeSlide({ data: { message: i.options.rtl === !0 ? "next" : "previous" } }) : 39 === e.keyCode && i.options.accessibility === !0 && i.changeSlide({ data: { message: i.options.rtl === !0 ? "previous" : "next" } }))
    }, o.prototype.lazyLoad = function() {
        function i(i) {
            e("img[data-lazy]", i).each(function() {
                var i = e(this),
                    t = e(this).attr("data-lazy"),
                    o = document.createElement("img");
                o.onload = function() { i.animate({ opacity: 0 }, 100, function() { i.attr("src", t).animate({ opacity: 1 }, 200, function() { i.removeAttr("data-lazy").removeClass("slick-loading") }), r.$slider.trigger("lazyLoaded", [r, i, t]) }) }, o.onerror = function() { i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, t]) }, o.src = t
            })
        }
        var t, o, s, n, r = this;
        r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), i(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), i(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), i(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), i(o))
    }, o.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, o.prototype.next = o.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({ data: { message: "next" } })
    }, o.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, o.prototype.pause = o.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, o.prototype.play = o.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, o.prototype.postSlide = function(e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && i.initADA())
    }, o.prototype.prev = o.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({ data: { message: "previous" } })
    }, o.prototype.preventDefault = function(e) { e.preventDefault() }, o.prototype.progressiveLazyLoad = function(i) {
        i = i || 1;
        var t, o, s, n = this,
            r = e("img[data-lazy]", n.$slider);
        r.length ? (t = r.first(), o = t.attr("data-lazy"), s = document.createElement("img"), s.onload = function() { t.attr("src", o).removeAttr("data-lazy").removeClass("slick-loading"), n.options.adaptiveHeight === !0 && n.setPosition(), n.$slider.trigger("lazyLoaded", [n, t, o]), n.progressiveLazyLoad() }, s.onerror = function() { 3 > i ? setTimeout(function() { n.progressiveLazyLoad(i + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, o]), n.progressiveLazyLoad()) }, s.src = o) : n.$slider.trigger("allImagesLoaded", [n])
    }, o.checkFullScreen = function() { var e; return e = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? !0 : !1 }, o.prototype.refresh = function(i) {
        if (!o.checkFullScreen()) {
            var t, s, n = this;
            s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, { currentSlide: t }), n.init(), i || n.changeSlide({ data: { message: "index", index: t } }, !1)
        }
    }, o.prototype.registerBreakpoints = function() {
        var i, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === e.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (i in n)
                if (o = s.breakpoints.length - 1, t = n[i].breakpoint, n.hasOwnProperty(i)) {
                    for (; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[i].settings
                }
            s.breakpoints.sort(function(e, i) { return s.options.mobileFirst ? e - i : i - e })
        }
    }, o.prototype.reinit = function() {
        var i = this;
        i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), i.options.focusOnSelect === !0 && e(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i])
    }, o.prototype.resize = function() {
        var i = this;
        e(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function() { i.windowWidth = e(window).width(), i.checkResponsive(), i.unslicked || i.setPosition() }, 50))
    }, o.prototype.removeSlide = o.prototype.slickRemove = function(e, i, t) { var o = this; return "boolean" == typeof e ? (i = e, e = i === !0 ? 0 : o.slideCount - 1) : e = i === !0 ? --e : e, o.slideCount < 1 || 0 > e || e > o.slideCount - 1 ? !1 : (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit()) }, o.prototype.setCSS = function(e) {
        var i, t, o = this,
            s = {};
        o.options.rtl === !0 && (e = -e), i = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", s[o.positionProp] = e, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + i + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + i + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, o.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({ padding: "0px " + e.options.centerPadding }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({ padding: e.options.centerPadding + " 0px" })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i)
    }, o.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(o, s) { i = t.slideWidth * o * -1, e(s).css(t.options.rtl === !0 ? { position: "relative", right: i, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 } : { position: "relative", left: i, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 })
    }, o.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", i)
        }
    }, o.prototype.setOption = o.prototype.slickSetOption = function() {
        var i, t, o, s, n, r = this,
            l = !1;
        if ("object" === e.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) e.each(o, function(e, i) { r.options[e] = i });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== e.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (i = r.options.responsive.length - 1; i >= 0;) r.options.responsive[i].breakpoint === s[t].breakpoint && r.options.responsive.splice(i, 1), i--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, o.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, o.prototype.setProps = function() {
        var e = this,
            i = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== i.WebkitTransition || void 0 !== i.MozTransition || void 0 !== i.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== i.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === i.perspectiveProperty && void 0 === i.MozPerspective && (e.animType = !1)), void 0 !== i.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === i.perspectiveProperty && void 0 === i.webkitPerspective && (e.animType = !1)), void 0 !== i.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition",
            void 0 === i.msTransform && (e.animType = !1)), void 0 !== i.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }, o.prototype.setSlideClasses = function(e) {
        var i, t, o, s, n = this;
        t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), n.options.centerMode === !0 ? (i = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (e >= i && e <= n.slideCount - 1 - i ? n.$slides.slice(e - i, e + i + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + e, t.slice(o - i + 1, o + i + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
    }, o.prototype.setupInfinite = function() {
        var i, t, o, s = this;
        if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, i = s.slideCount; i > s.slideCount - o; i -= 1) t = i - 1, e(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (i = 0; o > i; i += 1) t = i, e(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { e(this).attr("id", "") })
        }
    }, o.prototype.interrupt = function(e) {
        var i = this;
        e || i.autoPlay(), i.interrupted = e
    }, o.prototype.selectHandler = function(i) {
        var t = this,
            o = e(i.target).is(".slick-slide") ? e(i.target) : e(i.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        return s || (s = 0), t.slideCount <= t.options.slidesToShow ? (t.setSlideClasses(s), void t.asNavFor(s)) : void t.slideHandler(s)
    }, o.prototype.slideHandler = function(e, i, t) {
        var o, s, n, r, l, a = null,
            d = this;
        return i = i || !1, d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === e || d.slideCount <= d.options.slidesToShow ? void 0 : (i === !1 && d.asNavFor(e), o = e, a = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (0 > e || e > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (o = d.currentSlide, t !== !0 ? d.animateSlide(r, function() { d.postSlide(o) }) : d.postSlide(o))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > e || e > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (o = d.currentSlide, t !== !0 ? d.animateSlide(r, function() { d.postSlide(o) }) : d.postSlide(o))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), s = 0 > o ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), n = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = d.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (t !== !0 ? (d.fadeSlideOut(n), d.fadeSlide(s, function() { d.postSlide(s) })) : d.postSlide(s), void d.animateHeight()) : void(t !== !0 ? d.animateSlide(a, function() { d.postSlide(s) }) : d.postSlide(s))))
    }, o.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, o.prototype.swipeDirection = function() { var e, i, t, o, s = this; return e = s.touchObject.startX - s.touchObject.curX, i = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(i, e), o = Math.round(180 * t / Math.PI), 0 > o && (o = 360 - Math.abs(o)), 45 >= o && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= o && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && 225 >= o ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && 135 >= o ? "down" : "up" : "vertical" }, o.prototype.swipeEnd = function(e) {
        var i, t, o = this;
        if (o.dragging = !1, o.interrupted = !1, o.shouldClick = o.touchObject.swipeLength > 10 ? !1 : !0, void 0 === o.touchObject.curX) return !1;
        if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    i = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    i = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(i), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, o.prototype.swipeHandler = function(e) {
        var i = this;
        if (!(i.options.swipe === !1 || "ontouchend" in document && i.options.swipe === !1 || i.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (i.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold, i.options.verticalSwiping === !0 && (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold), e.data.action) {
            case "start":
                i.swipeStart(e);
                break;
            case "move":
                i.swipeMove(e);
                break;
            case "end":
                i.swipeEnd(e)
        }
    }, o.prototype.swipeMove = function(e) { var i, t, o, s, n, r = this; return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !r.dragging || n && 1 !== n.length ? !1 : (i = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), t = r.swipeDirection(), "vertical" !== t ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), s = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === t || r.currentSlide >= r.getDotCount() && "left" === t) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical === !1 ? i + o * s : i + o * (r.$list.height() / r.listWidth) * s, r.options.verticalSwiping === !0 && (r.swipeLeft = i + o * s), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0) }, o.prototype.swipeStart = function(e) { var i, t = this; return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (i = e.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : e.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : e.clientY, void(t.dragging = !0)) }, o.prototype.unfilterSlides = o.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, o.prototype.unload = function() {
        var i = this;
        e(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, o.prototype.unslick = function(e) {
        var i = this;
        i.$slider.trigger("unslick", [i, e]), i.destroy()
    }, o.prototype.updateArrows = function() {
        var e, i = this;
        e = Math.floor(i.options.slidesToShow / 2), i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && i.options.centerMode === !1 ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && i.options.centerMode === !0 && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, o.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, o.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (e.interrupted = document[e.hidden] ? !0 : !1)
    }, e.fn.slick = function() {
        var e, i, t = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = t.length;
        for (e = 0; r > e; e++)
            if ("object" == typeof s || "undefined" == typeof s ? t[e].slick = new o(t[e], s) : i = t[e].slick[s].apply(t[e].slick, n), "undefined" != typeof i) return i;
        return t
    }
});
! function(e, t, n) {
    function a(e) { return e.match(/\D+$/) }

    function r(e, t, n, a) {
        if ("d" != n && c(e)) {
            var r = h.exec(t),
                i = "auto" === e.css(n) ? 0 : e.css(n),
                o = "string" == typeof i ? p(i) : i,
                s = ("string" == typeof t ? p(t) : t, a === !0 ? 0 : o),
                u = e.is(":hidden"),
                l = e.translation();
            if ("left" == n && (s = parseInt(o, 10) + l.x), "right" == n && (s = parseInt(o, 10) + l.x), "top" == n && (s = parseInt(o, 10) + l.y), "bottom" == n && (s = parseInt(o, 10) + l.y), r || "show" != t ? r || "hide" != t || (s = 0) : (s = 1, u && e.css({ display: f(e.context.tagName), opacity: 0 })), r) { var d = parseFloat(r[2]); return r[1] && (d = ("-=" === r[1] ? -1 : 1) * d + parseInt(s, 10)), "%" == r[3] && (d += "%"), d }
            return s
        }
    }

    function i(e, t, n) { return n === !0 || A === !0 && n !== !1 && _ ? "translate3d(" + e + "px, " + t + "px, 0)" : "translate(" + e + "px," + t + "px)" }

    function o(t, n, a, r, i, o, u, f) {
        var c = t.data(I),
            d = c && !l(c) ? c : e.extend(!0, {}, x),
            m = i,
            y = e.inArray(n, g) > -1;
        if (y) {
            var v = d.meta,
                h = p(t.css(n)) || 0,
                b = n + "_o";
            m = i - h, v[n] = m, v[b] = "auto" == t.css(n) ? 0 + m : h + m || 0, d.meta = v, u && 0 === m && (m = 0 - v[b], v[n] = m, v[b] = 0)
        }
        return t.data(I, s(t, d, n, a, r, m, o, u, f))
    }

    function s(e, t, n, a, r, o, s, u, l) {
        var f = !1,
            p = s === !0 && u === !0;
        t = t || {}, t.original || (t.original = {}, f = !0), t.properties = t.properties || {}, t.secondary = t.secondary || {};
        for (var c = t.meta, d = t.original, m = t.properties, g = t.secondary, v = y.length - 1; v >= 0; v--) {
            var h = y[v] + "transition-property",
                b = y[v] + "transition-duration",
                x = y[v] + "transition-timing-function";
            n = p ? y[v] + "transform" : n, f && (d[h] = e.css(h) || "", d[b] = e.css(b) || "", d[x] = e.css(x) || ""), g[n] = p ? i(c.left, c.top, l) : o, m[h] = (m[h] ? m[h] + "," : "") + n, m[b] = (m[b] ? m[b] + "," : "") + a + "ms", m[x] = (m[x] ? m[x] + "," : "") + r
        }
        return t
    }

    function u(e) {
        for (var t in e)
            if (!("width" != t && "height" != t || "show" != e[t] && "hide" != e[t] && "toggle" != e[t])) return !0;
        return !1
    }

    function l(e) { for (var t in e) return !1; return !0 }

    function f(e) { e = e.toUpperCase(); var t = { LI: "list-item", TR: "table-row", TD: "table-cell", TH: "table-cell", CAPTION: "table-caption", COL: "table-column", COLGROUP: "table-column-group", TFOOT: "table-footer-group", THEAD: "table-header-group", TBODY: "table-row-group" }; return "string" == typeof t[e] ? t[e] : "block" }

    function p(e) { return parseFloat(e.replace(a(e), "")) }

    function c(e) { var t = !0; return e.each(function(e, n) { return t = t && n.ownerDocument }), t }

    function d(t, n, a) { if (!c(a)) return !1; var r = e.inArray(t, m) > -1; return "width" != t && "height" != t && "opacity" != t || parseFloat(n) !== parseFloat(a.css(t)) || (r = !1), r }
    var m = ["top", "right", "bottom", "left", "opacity", "height", "width"],
        g = ["top", "right", "bottom", "left"],
        y = ["-webkit-", "-moz-", "-o-", ""],
        v = ["avoidTransforms", "useTranslate3d", "leaveTransforms"],
        h = /^([+-]=)?([\d+-.]+)(.*)$/,
        b = /([A-Z])/g,
        x = { secondary: {}, meta: { top: 0, right: 0, bottom: 0, left: 0 } },
        w = "px",
        I = "jQe",
        O = "cubic-bezier(",
        T = ")",
        C = null,
        Q = !1,
        S = document.body || document.documentElement,
        D = S.style,
        F = "webkitTransitionEnd oTransitionEnd transitionend",
        k = void 0 !== D.WebkitTransition || void 0 !== D.MozTransition || void 0 !== D.OTransition || void 0 !== D.transition,
        _ = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
        A = _;
    e.expr && e.expr.filters && (C = e.expr.filters.animated, e.expr.filters.animated = function(t) { return e(t).data("events") && e(t).data("events")[F] ? !0 : C.call(this, t) }), e.extend({ toggle3DByDefault: function() { return A = !A }, toggleDisabledByDefault: function() { return Q = !Q }, setDisabledByDefault: function(e) { return Q = e } }), e.fn.translation = function() {
        if (!this[0]) return null;
        var e = this[0],
            t = window.getComputedStyle(e, null),
            n = { x: 0, y: 0 };
        if (t)
            for (var a = y.length - 1; a >= 0; a--) {
                var r = t.getPropertyValue(y[a] + "transform");
                if (r && /matrix/i.test(r)) {
                    var i = r.replace(/^matrix\(/i, "").split(/, |\)$/g);
                    n = { x: parseInt(i[4], 10), y: parseInt(i[5], 10) };
                    break
                }
            }
        return n
    }, e.fn.animate = function(n, a, i, s) {
        n = n || {};
        var f = !("undefined" != typeof n.bottom || "undefined" != typeof n.right),
            p = e.speed(a, i, s),
            c = 0,
            m = function() { c--, 0 === c && "function" == typeof p.complete && p.complete.apply(this, arguments) },
            h = "undefined" != typeof n.avoidCSSTransitions ? n.avoidCSSTransitions : Q;
        return h === !0 || !k || l(n) || u(n) || p.duration <= 0 || p.step ? t.apply(this, arguments) : this[p.queue === !0 ? "queue" : "each"](function() {
            var a = e(this),
                i = e.extend({}, p),
                s = function(t) {
                    var r = a.data(I) || { original: {} },
                        i = {};
                    if (2 == t.eventPhase) {
                        if (n.leaveTransforms !== !0) {
                            for (var o = y.length - 1; o >= 0; o--) i[y[o] + "transform"] = "";
                            if (f && "undefined" != typeof r.meta)
                                for (var s, u = 0; s = g[u]; ++u) i[s] = r.meta[s + "_o"] + w, e(this).css(s, i[s])
                        }
                        a.unbind(F).css(r.original).css(i).data(I, null), "hide" === n.opacity && a.css({ display: "none", opacity: "" }), m.call(this)
                    }
                },
                u = { bounce: O + "0.0, 0.35, .5, 1.3" + T, linear: "linear", swing: "ease-in-out", easeInQuad: O + "0.550, 0.085, 0.680, 0.530" + T, easeInCubic: O + "0.550, 0.055, 0.675, 0.190" + T, easeInQuart: O + "0.895, 0.030, 0.685, 0.220" + T, easeInQuint: O + "0.755, 0.050, 0.855, 0.060" + T, easeInSine: O + "0.470, 0.000, 0.745, 0.715" + T, easeInExpo: O + "0.950, 0.050, 0.795, 0.035" + T, easeInCirc: O + "0.600, 0.040, 0.980, 0.335" + T, easeInBack: O + "0.600, -0.280, 0.735, 0.045" + T, easeOutQuad: O + "0.250, 0.460, 0.450, 0.940" + T, easeOutCubic: O + "0.215, 0.610, 0.355, 1.000" + T, easeOutQuart: O + "0.165, 0.840, 0.440, 1.000" + T, easeOutQuint: O + "0.230, 1.000, 0.320, 1.000" + T, easeOutSine: O + "0.390, 0.575, 0.565, 1.000" + T, easeOutExpo: O + "0.190, 1.000, 0.220, 1.000" + T, easeOutCirc: O + "0.075, 0.820, 0.165, 1.000" + T, easeOutBack: O + "0.175, 0.885, 0.320, 1.275" + T, easeInOutQuad: O + "0.455, 0.030, 0.515, 0.955" + T, easeInOutCubic: O + "0.645, 0.045, 0.355, 1.000" + T, easeInOutQuart: O + "0.770, 0.000, 0.175, 1.000" + T, easeInOutQuint: O + "0.860, 0.000, 0.070, 1.000" + T, easeInOutSine: O + "0.445, 0.050, 0.550, 0.950" + T, easeInOutExpo: O + "1.000, 0.000, 0.000, 1.000" + T, easeInOutCirc: O + "0.785, 0.135, 0.150, 0.860" + T, easeInOutBack: O + "0.680, -0.550, 0.265, 1.550" + T },
                h = {},
                b = u[i.easing || "swing"] ? u[i.easing || "swing"] : i.easing || "swing";
            for (var x in n)
                if (-1 === e.inArray(x, v)) {
                    var C = e.inArray(x, g) > -1,
                        Q = r(a, n[x], x, C && n.avoidTransforms !== !0);
                    d(x, Q, a) ? o(a, x, i.duration, b, Q, C && n.avoidTransforms !== !0, f, n.useTranslate3d) : h[x] = n[x]
                }
            a.unbind(F);
            var S = a.data(I);
            if (!S || l(S) || l(S.secondary)) i.queue = !1;
            else {
                c++, a.css(S.properties);
                var D = S.secondary;
                setTimeout(function() { a.bind(F, s).css(D) })
            }
            return l(h) || (c++, t.apply(a, [h, { duration: i.duration, easing: e.easing[i.easing] ? i.easing : e.easing.swing ? "swing" : "linear", complete: m, queue: i.queue }])), !0
        })
    }, e.fn.animate.defaults = {}, e.fn.stop = function(t, a, r) {
        return k ? (t && this.queue([]), this.each(function() {
            var i = e(this),
                o = i.data(I);
            if (o && !l(o)) {
                var s, u = {};
                if (a) {
                    if (u = o.secondary, !r && void 0 !== typeof o.meta.left_o || void 0 !== typeof o.meta.top_o)
                        for (u.left = void 0 !== typeof o.meta.left_o ? o.meta.left_o : "auto", u.top = void 0 !== typeof o.meta.top_o ? o.meta.top_o : "auto", s = y.length - 1; s >= 0; s--) u[y[s] + "transform"] = ""
                } else if (!l(o.secondary)) {
                    var f = window.getComputedStyle(i[0], null);
                    if (f)
                        for (var p in o.secondary)
                            if (o.secondary.hasOwnProperty(p) && (p = p.replace(b, "-$1").toLowerCase(), u[p] = f.getPropertyValue(p), !r && /matrix/i.test(u[p]))) { var c = u[p].replace(/^matrix\(/i, "").split(/, |\)$/g); for (u.left = parseFloat(c[4]) + parseFloat(i.css("left")) + w || "auto", u.top = parseFloat(c[5]) + parseFloat(i.css("top")) + w || "auto", s = y.length - 1; s >= 0; s--) u[y[s] + "transform"] = "" }
                }
                i.unbind(F), i.css(o.original).css(u).data(I, null)
            } else n.apply(i, [t, a])
        }), this) : n.apply(this, [t, a])
    }
}(jQuery, jQuery.fn.animate, jQuery.fn.stop);
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function() { return this.enabled = !1, this }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function() { return this.group.next(this) }, t.prototype.previous = function() { return this.group.previous(this) }, t.invokeAll = function(t) { var e = []; for (var o in i) e.push(i[o]); for (var n = 0, r = e.length; r > n; n++) e[n][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { t.invokeAll("enable") }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) { window.setTimeout(t, 1e3 / 60) }

    function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() { e.handleResize(), e.didResize = !1 }
        var e = this;
        this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)) })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() { e.handleScroll(), e.didScroll = !1 }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() { n.Context.refreshAll() }, e.prototype.handleScroll = function() {
        var t = {},
            e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
    }, e.prototype.innerHeight = function() { return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() { return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() { for (var t in o) o[t].flushTriggers() }), this
    }, e.findOrCreateByElement = function(t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function() { for (var t in o) o[t].refresh() }, e.findByElement = function(t) { return o[t.waypointContextKey] }, window.onload = function() { r && r(), e.refreshAll() }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) { return t.triggerPoint - e.triggerPoint }

    function e(t, e) { return e.triggerPoint - t.triggerPoint }

    function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this }
    var o = { vertical: {}, horizontal: {} },
        n = window.Waypoint;
    i.prototype.add = function(t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() { return this.waypoints[0] }, i.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function(t) { return o[t.axis][t.name] || new i(t) }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) { this.$element = e(t) }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) { t.prototype[i] = function() { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) { t[o] = e[o] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() { var n = t.extend({}, o, { element: this }); "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)) }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
! function() {
    "use strict";

    function t() {}

    function e(t) { this.options = i.Adapter.extend({}, e.defaults, t), this.axis = this.options.horizontal ? "horizontal" : "vertical", this.waypoints = [], this.element = this.options.element, this.createWaypoints() }
    var i = window.Waypoint;
    e.prototype.createWaypoints = function() {
        for (var t = { vertical: [{ down: "enter", up: "exited", offset: "100%" }, { down: "entered", up: "exit", offset: "bottom-in-view" }, { down: "exit", up: "entered", offset: 0 }, { down: "exited", up: "enter", offset: function() { return -this.adapter.outerHeight() } }], horizontal: [{ right: "enter", left: "exited", offset: "100%" }, { right: "entered", left: "exit", offset: "right-in-view" }, { right: "exit", left: "entered", offset: 0 }, { right: "exited", left: "enter", offset: function() { return -this.adapter.outerWidth() } }] }, e = 0, i = t[this.axis].length; i > e; e++) {
            var n = t[this.axis][e];
            this.createWaypoint(n)
        }
    }, e.prototype.createWaypoint = function(t) {
        var e = this;
        this.waypoints.push(new i({ context: this.options.context, element: this.options.element, enabled: this.options.enabled, handler: function(t) { return function(i) { e.options[t[i]].call(e, i) } }(t), offset: t.offset, horizontal: this.options.horizontal }))
    }, e.prototype.destroy = function() {
        for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].destroy();
        this.waypoints = []
    }, e.prototype.disable = function() { for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].disable() }, e.prototype.enable = function() { for (var t = 0, e = this.waypoints.length; e > t; t++) this.waypoints[t].enable() }, e.defaults = { context: window, enabled: !0, enter: t, entered: t, exit: t, exited: t }, i.Inview = e
}();
! function(t, e, n) {
    "$:nomunge";

    function u(u, o) {
        function i(e) {
            t(s).each(function() {
                var n = t(this);
                this === e.target || n.has(e.target).length || n.triggerHandler(o, [e.target])
            })
        }
        o = o || u + n;
        var s = t(),
            c = u + "." + o + "-special-event";
        t.event.special[o] = {
            setup: function() { s = s.add(this), 1 === s.length && t(e).bind(c, i) },
            teardown: function() { s = s.not(this), 0 === s.length && t(e).unbind(c) },
            add: function(t) {
                var e = t.handler;
                t.handler = function(t, n) { t.target = n, e.apply(this, arguments) }
            }
        }
    }
    t.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup touchstart touchend".split(" "), function(t) { u(t) }), u("focusin", "focus" + n), u("focusout", "blur" + n), t.addOutsideEvent = u
}(jQuery, document, "outside");
! function(m) { "use strict"; "undefined" == typeof m.smg && (m.smg = {}), m.smg.aem = m.smg.aem || {}, m.smg.aem.varStatic = m.smg.aem.varStatic || {}, m.smg.aem.customEvent = m.smg.aem.customEvent || {}, m.smg.aem.util = m.smg.aem.util || {}, m.smg.aem.common = m.smg.aem.common || {}, m.smg.aem.components = m.smg.aem.components || {}, m.smg.aem.components.home = m.smg.aem.components.home || {}, m.smg.aem.components.aboutsamsung = m.smg.aem.components.aboutsamsung || {}, m.smg.aem.templates = m.smg.aem.templates || {}, m.smg.aem.templates.home = m.smg.aem.templates.home || {} }(window);
! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.util && (t.smg.aem.util = {});
    var n = Object.prototype.hasOwnProperty,
        i = t.document;
    t.smg.aem.util = function() {
        return {
            isArray: function(t) { return "array" === e.type(t) },
            def: function(t, i) { for (var a in i) n.call(i, a) && (t[a] = "object" === e.type(t[a]) ? this.isArray(t[a]) ? i[a].slice(0) : this.def(t[a], i[a]) : i[a]); return t },
            winSize: function() { var e = { w: t.innerWidth || i.documentElement.clientWidth || i.body.clientWidth, h: t.innerHeight || i.documentElement.clientHeight || i.body.clientHeight }; return e },
            getQueryStr: function(e) { e = e || t.location.href; var n = {}; return e.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, e, i) { n[e] = i }), n },
            winOpener: function(e) {
                var n, i, a, o = { url: "//www.samsung.com", name: "smg_opener_" + (new Date).getTime(), width: 400, height: 400, left: null, top: null, scrollbars: "no", toolbar: "no", location: "no", directories: "no", status: "no", menubar: "no", resizable: "no" };
                a = t.smg.util.def(o, e || {}), a.left = a.left || screen.width / 2 - a.width / 2, a.top = a.top || screen.height / 2 - a.height / 2, i = "";
                for (var s in a) "url" != s && "name" != s && (i += "," + s + "=" + a[s]);
                return i = i.substr(1, i.length), n = window.open(a.url, a.name, i)
            },
            imgLoader: function(t, n) {
                t.each(function() {
                    var i = n || function() {};
                    this.complete || e(this).height() > 0 ? i.apply(t) : e(this).load(function() { i.apply(t) })
                })
            },
            vwOrientationUpdate: function(n) {
                e(t).on("orientationchange", function() {
                    var t = e(n || ".js-vw");
                    t.size() && (t.css("display", "none").height(), t.css("display", ""))
                })
            },
            iPadVWRender: function() { navigator.userAgent.match(/iPad/i) && this.vwOrientationUpdate(".js-vw") },
            Cookie: function() {
                var e = { expires: "", path: "/", domain: "", secure: "" };
                return {
                    setCookie: function(n, i, a) {
                        var o = new Date;
                        o.setTime(o.getTime() + 24 * (a || 0) * 60 * 60 * 1e3);
                        var s = t.smg.aem.util.def(e, { expires: o });
                        document.cookie = [n, "=", i, s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
                    },
                    getCookie: function(t) {
                        for (var e, n = t + "=", i = document.cookie.split(";"), a = 0, o = i.length; o > a; a++) {
                            for (e = i[a];
                                " " == e.charAt(0);) e = e.substring(1);
                            if (-1 != e.indexOf(n)) return e.substring(n.length, e.length)
                        }
                        return ""
                    }
                }
            },
            loadCSS: function(t, n, i) {
                t && "string" !== e.type(t) || (t = [t]);
                var a = e("head"),
                    o = [];
                e.map(t, function(t) {
                    var n = e.Deferred();
                    o.push(n), e("<link>").attr({ rel: "stylesheet", type: "text/css", href: t + (i ? "?_ts=" + (new Date).getTime() : "") }).appendTo(a).load(function() { n.resolve() })
                }), e.when.apply(e, o).done(function() { e.isFunction(n) && n() })
            },
            getServerTime: function(t, n) { n = n || window.location.href.toString(), t = t || function() {}, e.ajax({ url: n, async: !1, cashe: !1 }).done(function(e, n, i) { t(new Date(i.getResponseHeader("Date"))) }) },
            getRestrictBytes: function(t, e) {
                var n = t.length,
                    i = 0,
                    a = 0,
                    o = "";
                e = e || 100;
                for (var s = 0; n > s; s++) o = t.charAt(s), escape(o).length > 4 ? i += 2 : i++, e >= i && (a = s + 1);
                return { bytes: i, rectLeng: a }
            },
            isAemEditMode: function() { var n = !1; return t.parent && t.frameElement && e(t.parent.document).find(".foundation-authoring-ui-mode").size() && (n = !0), n },
            slickOptionControlFuncs: {
                changeOpt: function(t, n, i) {
                    var a = t.data("slick-opt");
                    if (void 0 !== a) {
                        var o = e.extend(!0, {}, n),
                            s = a.autoSlideOpts.autoSlide,
                            l = a.autoSlideOpts.autoSlideTime,
                            d = a.infinite;
                        return o.autoplay = s, o.autoplaySpeed = l, o.infinite = d, n.responsive && (o.responsive[0].settings.infinite = d), t.data("isAutoSlide", s), void 0 !== i && i.data("isAutoSlide", s), o
                    }
                    return n
                },
                setToggleButton: function(t) {
                    var n = t.data("isAutoSlide");
                    if (t = t.hasClass("s-slick") ? t : t.find(".s-slick"), void 0 !== n && n !== !1 && (t.find(".slick-dots").length || t.siblings(".s-slick-dots").find(".slick-dots").length)) {
                        var i, a, o, s, l = e("body").hasClass("touch-device"),
                            d = "",
                            r = '<button tabindex="-1" type="button" class="blind js-hidden-control ',
                            u = { PLAY: e.getI18nDiction("play", "Play"), PAUSE: e.getI18nDiction("Pause", "Pause") },
                            c = { play: "Start automatic slide", pause: "Stop automatic slide" };
                        n ? (d += '<li class="slick-dots-autoplay" aria-hidden="false" aria-live ="polite">', d += '<button class="s-autoplay-pause" role="button">' + u.PAUSE + "</button>", d += "</li>", l && (r += 'js-hidden-pause">' + c.pause + "</button>")) : (d += '<li class="slick-dots-autoplay" aria-hidden="false" aria-live ="polite">', d += '<button class="s-autoplay-play" role="button">' + u.PLAY + "</button>", d += "</li>", l && (r += 'js-hidden-play">' + c.play + "</button>")), t.find(".slick-dots").length ? (o = t.find(".slick-dots"), s = "smg") : t.siblings(".s-slick-dots").length && (o = t.siblings(".s-slick-dots").find(".slick-dots"), s = "cl"), o.length && (o.append(e(d)), i = o.find(".slick-dots-autoplay"), l && (t.before(r), a = t.prev(".js-hidden-control")));
                        var p = function(t, n, i) { e(n.$dots).find(".slick-dots-autoplay").attr("aria-hidden", !1) },
                            f = function(e) { t.slick(e.hasClass("s-autoplay-pause") ? "slickPlay" : "slickPause") },
                            h = function(t) {
                                var n = e(t.currentTarget).find("> button");
                                n.hasClass("s-autoplay-pause") ? m(n, a) : y(n, a)
                            },
                            g = function(t) {
                                var n = e(t.target),
                                    a = i.find("> button");
                                n.hasClass("js-hidden-pause") ? m(a, n) : y(a, n)
                            },
                            m = function(e, n) { v(e, "s-autoplay-pause", "s-autoplay-play", u.PLAY), l && v(n, "js-hidden-pause", "js-hidden-play", c.play), t.slick("slickPause") },
                            y = function(e, n) { v(e, "s-autoplay-play", "s-autoplay-pause", u.PAUSE), l && v(n, "js-hidden-play", "js-hidden-pause", c.pause), t.slick("slickPlay") },
                            v = function(t, e, n, i) { t.removeClass(e), t.addClass(n), void 0 !== i && t.text(i) },
                            k = function() { i.off("click.smgaemutil").on("click.smgaemutil", h), l && a.off("click.smgaemutil").on("click.smgaemutil", g) },
                            b = function(e) {
                                var n = t.data("detachedButton"),
                                    i = t.data("appendType"),
                                    o = t.data("hiddenButton");
                                if ("smg" === i ? t.find(".slick-dots").append(n) : "cl" === i && t.siblings(".s-slick-dots").find(".slick-dots").append(n), l)
                                    if (t.find(".slick-dots").length) t.prev(".js-hidden-control").length || (t.before(o), a = t.prev(".js-hidden-control"));
                                    else {
                                        var s = t.prev(".js-hidden-control");
                                        s.length && s.remove()
                                    }
                                k(), f(n.find("> button"))
                            },
                            w = function(e) { t.prev(".js-hidden-control").remove() };
                        t.data("detachedButton", i), t.data("appendType", s), t.data("hiddenButton", r), t.off("breakpoint.smgaemutil").on("breakpoint.smgaemutil", b), t.on("afterChange", p), t.off("destroy.smgaemutil").on("destroy.smgaemutil", w), k()
                    }
                }
            }
        }
    }(), t.smg.aem.util.cookie = new t.smg.aem.util.Cookie, e(function() { t.smg.aem.util.iPadVWRender() })
}(window, window.jQuery);
! function(e) { "use strict"; "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.varStatic && (e.smg.aem.varStatic = {}), e.smg.aem.varStatic = { CSS: { VIDEO_OPEN: "video-open", SEARCH_POS: "search-pos", NAV_OPEN: "nav-open", NAV_CLOSE: "nav-close", HAS_ANIMATED: "has-animated", IS_SHOW: "is-show", IS_HIDE: "is-hide", IS_OPEN: "is-open", IS_SELECT: "is-select", JS_IMG_SRC: "js-img-src", JS_IMG_LAZY: "js-img-lazy", JS_IMG_LAZY_LOADED: "js-img-lazy-loaded", LAZY_LOADED: "lazy-loaded", SWITCH_MOBILE: "switch-mobile", SWITCH_TABLET: "switch-tablet" }, DATA_ATTR: { SRC_PC: "data-src-pc", SRC_MOBILE: "data-src-mobile", DATA_SRC: "data-src" }, SUPPORT: { NO_SVG: "no-svg", NO_CSS3: "no-css3", IE_LT_8: "lt-ie8", COOKIE_WARNING: "cookie-warning", TOUCH_DEVICE: "touch-device" }, RESPONSIVE: { DESKTOP: { NAME: "desktop" }, TABLET: { NAME: "tablet", WIDTH: 1280 }, MOBILE: { NAME: "mobile", WIDTH: 768 }, MIN_MOBILE: { NAME: "min_mobile", WIDTH: 320 }, GNB: { NAME: "gnb_reponsive", WIDTH: 1024 } }, BACKTOTOP: { TOP_POSITION: "top_position" } } }(window);
! function(E) { "use strict"; "undefined" == typeof E.smg && (E.smg = {}), "undefined" == typeof E.smg.aem && (E.smg.aem = {}), "undefined" == typeof E.smg.aem.customEvent && (E.smg.aem.customEvent = {}), E.smg.aem.customEvent = { CONNECT: {}, VIDEO: { PLAY: "AEM_VIDEO_PLAY", CLOSE: "AEM_VIDEO_CLOSE" }, RESPONSIVE: { GET_STATUS: "AEM_RESPONSIVE_GET_STATUS", CHANGE: "AEM_RESPONSIVE_CHANGE" }, BACKTOTOP: { POSITION_CHANGE: "AEM_POSITION_CHANGE" } } }(window);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.common && (e.smg.aem.common = {});
    var n = e.smg.aem.varStatic,
        i = e.smg.aem.util,
        s = e.smg.aem.customEvent;
    e.smg.aem.common = function() {
        return {
            init: function() { return this.detection(), this.responsiveName = "", this.responsiveNameEx = "", this.responsiveGNB = "", this.responsiveGNBEx = "", t("body").on(s.RESPONSIVE.GET_STATUS, t.proxy(this.resizeListener, this)), t(e).on("resize", t.proxy(this.resizeListener, this)), this.resizeListener(), this.skipNavgation = t(".s-skip-content").children(), this.skipNavgation.on("click", t.proxy(this.skipNavgationFunc, this)), this },
            detection: function() {
                document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || t("body").addClass(n.SUPPORT.NO_SVG), document.all && !document.addEventListener && t("body").addClass(n.SUPPORT.IE_LT_8);
                var e = document.body || document.documentElement,
                    i = e.style,
                    s = void 0 !== i.transition || void 0 !== i.WebkitTransition || void 0 !== i.MozTransition || void 0 !== i.MsTransition || void 0 !== i.OTransition;
                s || t("body").addClass(n.SUPPORT.NO_CSS3);
                var o = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                o && t("body").addClass(n.SUPPORT.TOUCH_DEVICE)
            },
            resizeListener: function(e) {
                var o = i.winSize().w;
                this.responsiveName = o <= n.RESPONSIVE.MOBILE.WIDTH ? n.RESPONSIVE.MOBILE.NAME : o <= n.RESPONSIVE.TABLET.WIDTH ? n.RESPONSIVE.TABLET.NAME : n.RESPONSIVE.DESKTOP.NAME, this.responsiveGNB = o <= n.RESPONSIVE.GNB.WIDTH ? n.RESPONSIVE.GNB.NAME : "", (this.responsiveName !== this.responsiveNameEx || this.responsiveGNB !== this.responsiveGNBEx) && (this.responsiveNameEx = this.responsiveName, this.responsiveGNBEx = this.responsiveGNB, t("body").trigger(s.RESPONSIVE.CHANGE, { RESPONSIVE_NAME: this.responsiveName, RESPONSIVE_GNB_NAME: this.responsiveGNB, isMobile: o <= n.RESPONSIVE.MOBILE.WIDTH })), e && e.type === s.RESPONSIVE.GET_STATUS && t("body").trigger(s.RESPONSIVE.CHANGE, { RESPONSIVE_NAME: this.responsiveName, RESPONSIVE_GNB_NAME: this.responsiveGNB, isMobile: o <= n.RESPONSIVE.MOBILE.WIDTH })
            },
            skipNavgationFunc: function(e) { e.preventDefault(); var n = t(e.currentTarget).attr("href"); "#accHelp" == n ? t(n).focus() : t(n).attr("tabindex", -1).focus().removeAttr("tabindex", "") }
        }
    }();
    var o;
    t(function() { o = e.smg.aem.common.init() }), t(e).on("resize", function(e) { o && o.resizeListener && o.resizeListener.call(o, e) })
}(window, window.jQuery),
function(e, t) {
    "use strict";
    var n = e.smg.aem.varStatic,
        i = e.smg.aem.util,
        s = e.smg.aem.customEvent;
    "function" == typeof t.fn.heightMatch && (t.fn.heightMatch = function() {}), e._heightMatch = function(e, t) {
        var n = { compType: "list", listWrap: "", isListMatch: !0, targetElements: [], matchAlignIgnore: "", matchAlign: 0, matchAttr: "height", forceMobile: !1 };
        this.container = e, this.opts = i.def(n, t || {}), this.init()
    }, e._heightMatch.prototype = {
        init: function() { this.setElements(), this.bindEvents(), this.maxHeightBuildChk() },
        setElements: function() { this.$body = t("body"), this.IS_MOBILE_MODE = !1, this.obj = this.getTargetElement(), this.isColumns = this.obj.hasClass("bu-columns__item"), this.columnLineClass = "is-active-line", this.opts.matchAlign = this.opts.matchAlign > 0 ? this.opts.matchAlign : this.obj.length, this.maxLine = Math.ceil(this.obj.length / this.opts.matchAlign), this.setTime = 500 },
        getTargetElement: function() { return this.container.hasClass(this.opts.targetElements.substring(1)) ? this.container : this.container.find(this.opts.targetElements) },
        bindEvents: function() { this.$body.on(s.RESPONSIVE.CHANGE, t.proxy(this.onResponsiveChange, this)), this.$body.trigger(s.RESPONSIVE.GET_STATUS), t(e).on("resize orientationchange", t.proxy(this.resizeFunc, this)) },
        resizeFunc: function() { this.maxHeightBuildChk() },
        maxHeightBuildChk: function() { this.maxHeightBuild(this.IS_MOBILE_MODE ? !1 : !0) },
        maxHeightBuild: function(e) {
            var n = this.setTime;
            if ("carousel" != this.opts.compType || this.IS_MOBILE_MODE || (n = 800), this.isColumns && (n += 1e3), this.opts.forceMobile && (e = !0), e) setTimeout(t.proxy(function() {
                for (var e = [], t = 0; t < this.maxLine; t++) e[t] = [];
                for (var t = 0, n = this.obj.length; n > t; t++) {
                    this.obj.eq(t).outerHeight("");
                    var i = parseInt(t / this.opts.matchAlign, 10),
                        s = this.obj.eq(t).outerHeight();
                    e[i].push(s)
                }
                for (var t = 0; t < this.maxLine; t++) e[t] = Math.max.apply(null, e[t]);
                for (var t = 0, n = this.obj.length; n > t; t++) {
                    var i = parseInt(t / this.opts.matchAlign, 10),
                        o = this.obj.eq(t);
                    e[i] > 0 && o.css(this.opts.matchAttr, e[i])
                }
                this.obj.closest(".bu-columns--separation-line").addClass(this.columnLineClass), "carousel" == this.opts.compType && this.container.closest(".s-slick").hasClass("slick-initialized") && this.container.closest(".s-slick").slick("setPosition")
            }, this), n);
            else {
                for (var i = 0, s = this.obj.length; s > i; i++) this.obj.eq(i).outerHeight("");
                setTimeout(t.proxy(function() { this.IS_MOBILE_MODE && this.container.closest(".s-slick").hasClass("slick-initialized") && this.container.closest(".s-slick").slick("setPosition") }, this), n)
            }
        },
        onResponsiveChange: function(e, t) { this.IS_MOBILE_MODE = t.RESPONSIVE_NAME === n.RESPONSIVE.MOBILE.NAME ? !0 : !1 }
    }, t.fn.heightMatch = function(n) {
        if (n.matchElements && t(this).length) {
            var i = t(this),
                s = i.find(n.listWrap);
            if (n.listWrap || (s = i), !("list" == n.compType && s.length <= 1)) { "carousel" == n.compType && (n.isListMatch = !1), n.forceMobile && (this.IS_MOBILE_MODE = !0), n.isListMatch && n.matchElements.push(n.listWrap), n.matchAlignIgnore && i.children(n.matchAlignIgnore).length && (n.matchAlign = 0); for (var o in n.matchElements) n.targetElements = n.matchElements[o], new e._heightMatch(s, n) }
        }
    }
}(window, window.jQuery),
function(e, t) {
    "use strict";
    var n = e.smg.aem.varStatic,
        i = e.smg.aem.util,
        s = e.smg.aem.customEvent;
    "function" == typeof t.fn.listSeeMore && (t.fn.listSeeMore = function() {}), t.fn.listSeeMore = function(o) {
        var a = { useSeeMore: "s-use-seemore", component: "", listItems: "", moreBtn: ".s-btn-encased", appendType: !1, itemVisible: "", itemActive: "is-item-active", itemInterval: 100, perPageDefault: { pc: "data-default-pc-conut", mo: "data-default-mo-conut" }, perPageNum: { pc: "data-pc-per-page", mo: "data-mo-per-page" }, heightMatch: { hasComponent: [], matchElements: [], matchAlign: 3 }, masonry: { hasComponent: [], itemWrap: "", items: "", options: { ltr: { itemSelector: null, percentPosition: !0, horizontalOrder: !0 }, rtl: { itemSelector: null, horizontalOrder: !0, originLeft: !1 } } }, scrollView: !0, scrollViewIgnore: [], moreIntervalView: !0, moreIntervalViewIgnore: [], beforeFunc: null, afterFunc: null, seemoreAfterFunc: null, apiCall: "" },
            r = i.def(a, o || {}),
            l = t(r.component),
            c = t("body"),
            m = null,
            h = function() { c.on(s.RESPONSIVE.CHANGE, p), c.trigger(s.RESPONSIVE.GET_STATUS), l.on("click", r.moreBtn, g) },
            u = function() {
                var e = t("html"),
                    n = {
                        masonry: function(t) {
                            var s = { itemSelector: n.items },
                                o = {};
                            e.hasClass("rtl") ? (o = i.def(r.masonry.options.rtl, s || {}), t.addClass("js-masonry-load").masonry({ itemSelector: n.items, horizontalOrder: !0, originLeft: !1 })) : (o = i.def(r.masonry.options.ltr, s || {}), t.addClass("js-masonry-load").masonry({ itemSelector: n.items, percentPosition: !0, horizontalOrder: !0 })), t.addClass("js-masonry-load").masonry(o)
                        },
                        loadCheck: function(e, t, n) {
                            for (var i = 0, s = e.length, o = 0; s > o; o++) {
                                var a = new Image;
                                a.src = e.eq(o).attr("src"), a.onload = function() { i += 1, i == s && n(t) }
                            }
                        },
                        actMasonry: function(e, t) {
                            var i = t.find("img");
                            e.length && n.loadCheck(i, e, n.masonry)
                        }
                    },
                    s = function(e, s, o) {
                        var a = e,
                            r = a.find(s),
                            l = a.find(o);
                        i.isAemEditMode() || a.length && l.length && "function" == typeof t.fn.masonry && (n.items = o, n.actMasonry(r, l))
                    };
                return { init: s }
            }(),
            p = function(e, t) { m = t.RESPONSIVE_NAME === n.RESPONSIVE.MOBILE.NAME ? !0 : !1 },
            g = function(e) {
                e.preventDefault();
                var n = t(e.currentTarget),
                    i = n.closest(r.component),
                    s = !0,
                    o = !0;
                i.length && (r.apiCall ? r.apiCall.promise().done(function() { setTimeout(function() { f.init({ component: i, isViewMore: o, isPromoFeed: s }) }, 500) }) : f.init({ component: i, isViewMore: o, isPromoFeed: s }))
            },
            f = {
                getIsInterval: function(e) {
                    var t = r.moreIntervalView;
                    if (r.moreIntervalViewIgnore.length > 1)
                        for (var n = 0; n < r.moreIntervalViewIgnore.length; n++) r.moreIntervalViewIgnore[n] && e.hasClass(r.moreIntervalViewIgnore[n]) && (t = !1);
                    else r.moreIntervalViewIgnore[0] && e.hasClass(r.moreIntervalViewIgnore[0]) && (t = !1);
                    return t
                },
                getViewCnt: function(e, t) { var n = 0; return n = t ? m ? e.attr(r.perPageNum.mo) ? "all" == e.attr(r.perPageNum.mo) ? e.find(r.listItems + ":not(:visible)").length : parseInt(e.attr(r.perPageNum.mo)) : 0 : e.attr(r.perPageNum.pc) ? "all" == e.attr(r.perPageNum.pc) ? e.find(r.listItems + ":not(:visible)").length : parseInt(e.attr(r.perPageNum.pc)) : 0 : m ? e.attr(r.perPageDefault.mo) ? parseInt(e.attr(r.perPageDefault.mo)) : e.attr(r.perPageNum.mo) ? parseInt(e.attr(r.perPageNum.mo)) : 0 : e.attr(r.perPageDefault.pc) ? parseInt(e.attr(r.perPageDefault.pc)) : e.attr(r.perPageNum.pc) ? parseInt(e.attr(r.perPageNum.pc)) : 0 },
                setItemActive: function(e, t) { e.find(r.listItems + ":lt(" + t + ")").addClass(r.itemActive) },
                hideMoreCTA: function(e, t) { r.appendType || !e.find(r.listItems + ":not(:visible)").length && t.length && t.is(":visible") && t.css("display", "none") },
                getIsMathchHeight: function(e) {
                    var t = "";
                    if (r.heightMatch.hasComponent && r.heightMatch.matchElements)
                        for (var n = 0; n < r.heightMatch.hasComponent.length; n++) r.heightMatch.hasComponent[n] && e.hasClass(r.heightMatch.hasComponent[n]) && (t = !0);
                    return t
                },
                getIsMasonry: function(e) {
                    var t = "";
                    if (r.masonry.hasComponent && r.masonry.itemWrap && r.masonry.items)
                        for (var n = 0; n < r.masonry.hasComponent.length; n++) r.masonry.hasComponent[n] && e.hasClass(r.masonry.hasComponent[n]) && (t = !0);
                    return t
                },
                init: function(n) {
                    var s = n.component.find(r.moreBtn),
                        o = n.component.find(r.listItems),
                        a = this.getViewCnt(n.component, n.isViewMore),
                        l = this.getIsInterval(n.component),
                        c = this.getIsMasonry(n.component),
                        h = this.getIsMathchHeight(n.component);
                    if (!i.isAemEditMode()) {
                        var p = a,
                            g = n.component.find(r.listItems + ":visible").length;
                        if (n.component.hasClass(r.useSeeMore) && n.isViewMore && (p = g + a), this.setItemActive(n.component, p), this.hideMoreCTA(n.component, s), null != r.beforeFunc && r.beforeFunc(n.component, m), l) setTimeout(function() {
                            h && d(n, p - a - 1), setTimeout(function() {
                                var i = g,
                                    s = setInterval(function() { i == p ? (clearInterval(s), c ? setTimeout(function() { null != r.afterFunc && r.afterFunc(n.component, m), u.init(n.component, r.masonry.itemWrap, r.masonry.items) }, 100) : null != r.afterFunc && r.afterFunc(n.component, m), t(e).trigger("resize")) : (o.eq(i).addClass(r.itemVisible), i++) }, r.itemInterval)
                            }, 400)
                        }, 100);
                        else if (c || h)
                            for (var f = g; p >= f; f++) f == p ? setTimeout(function() { c && u.init(n.component, r.masonry.itemWrap, r.masonry.items), h && d(n, p - a - 1), null != r.afterFunc && r.afterFunc(n.component, m), t(e).trigger("resize") }, 100) : o.eq(f).addClass(r.itemVisible);
                        else o.addClass(r.itemVisible), null != r.afterFunc && r.afterFunc(n.component, m), t(e).trigger("resize");
                        n.isViewMore && null != r.seemoreAfterFunc && r.seemoreAfterFunc(n.component, m)
                    }
                }
            },
            d = function(e, t) {
                var t = parseInt(t) || 0,
                    n = r.listItems;
                e.component.hasClass("bu-columns--separation-line") && (e.component.hasClass("bu-columns--2columns") ? r.heightMatch.matchAlign = 2 : e.component.hasClass("bu-columns--3columns") ? r.heightMatch.matchAlign = 3 : e.component.hasClass("bu-columns--4columns") ? r.heightMatch.matchAlign = 4 : e.component.hasClass("bu-columns--5columns") && (r.heightMatch.matchAlign = 5)), e.isViewMore && (n = r.listItems + ":gt(" + t + ")"), e.component.heightMatch({ listWrap: n, matchAlignIgnore: ".slick-initialized", matchElements: r.heightMatch.matchElements, matchAlign: r.heightMatch.matchAlign })
            },
            E = function(e, n) {
                if (n && "function" == typeof t.fn.feature && e.hasClass(r.useSeeMore)) e.feature({
                    onVisible: function(e) {
                        if (!e.hasClass("js-feature-loaded")) {
                            var t = !0,
                                n = !1;
                            e.addClass("js-feature-loaded"), f.init({ component: e, isViewMore: n, isPromoFeed: t })
                        }
                    }
                });
                else if (!e.hasClass("js-feature-loaded")) {
                    var i = !0,
                        s = !1;
                    e.addClass("js-feature-loaded"), f.init({ component: e, isViewMore: s, isPromoFeed: i })
                }
            },
            v = function(e) {
                var t = r.scrollView;
                if (r.scrollViewIgnore.length > 1)
                    for (var n = 0; n < r.scrollViewIgnore.length; n++) r.scrollViewIgnore[n] && e.hasClass(r.scrollViewIgnore[n]) && (t = !1);
                else r.scrollViewIgnore[0] && e.hasClass(r.scrollViewIgnore[0]) && (t = !1);
                return t
            },
            I = function() {
                var e, t = r.scrollView;
                if (h(), r.scrollView)
                    for (var n = 0; n < l.length; n++) e = l.eq(n), t = v(e), E(e, t);
                else
                    for (var n = 0; n < l.length; n++) e = l.eq(n), E(e, !1)
            };
        I()
    }, "function" == typeof t.getI18nDiction && (t.getI18nDiction = function() {}), t.getI18nDiction = function(e, n) { return "undefined" == typeof Granite ? n : "undefined" == typeof Granite.I18n ? n : (Granite.I18n.setLocale(t("#siteCode").val()), Granite.I18n.get(e, [], t("#siteCode").val()) || n) }
}(window, window.jQuery);
! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.accessibility && (t.smg.aem.accessibility = {});
    var s = t.smg.aem.util,
        i = t.smg.aem.accessibility;
    i.checkbox = function() {
        var t = { targets: "[data-accessibility='checkbox']", targetsValue: "data-acc-checkbox-value", holder: "data-acc-checkbox", holderTarget: "data-acc-checkbox-target", onClass: "data-acc-onclass" };
        return {
            init: function(e, i) {
                (this.container = e).size() && (this.opts = s.def(t, i || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() { this.targets = this.container.find(this.opts.targets), this.holders = e("[" + this.opts.holder + "]"), e.each(this.targets, e.proxy(function(t, s) { e(s).attr(this.opts.targetsValue, e(s).attr("checked")) }, this)) },
            setBindEvents: function() { this.holders.on("click", e.proxy(this.onHolderClick, this)), this.targets.on("change", e.proxy(this.onTargetChange, this)) },
            unElements: function() {
                var t, s;
                e.each(this.targets, e.proxy(function(i, o) { t = e(o), s = this.getTargetInfo(t), t.removeAttr("checked", "checked"), t.prop("checked", !1), s.onClass && s.holder.removeClass(s.onClass) }, this)), this.targets = [], this.holders = []
            },
            unBindEvents: function() { this.holders.off("click", e.proxy(this.onHolderClick, this)), this.targets.off("change", e.proxy(this.onTargetChange, this)) },
            onHolderClick: function(t) {
                var s = e(t.currentTarget);
                s = e("[" + this.opts.holderTarget + "='" + s.attr(this.opts.holder) + "']"), s.size() && s.trigger("click").focus()
            },
            onTargetChange: function(t) {
                var s = e(t.currentTarget),
                    i = this.getTargetInfo(s),
                    o = i.holder,
                    n = i.onClass,
                    c = s.attr("checked");
                c ? (s.removeAttr("checked", "checked"), s.prop("checked", !1), n && o.removeClass(n)) : (s.attr("checked", "checked"), s.prop("checked", !0), n && o.addClass(n))
            },
            getTargetInfo: function(t) { return t = e("[" + this.opts.holder + "='" + t.attr(this.opts.holderTarget) + "']"), t.size() ? { holder: t, onClass: t.attr(this.opts.onClass) } : { holder: "", onClass: "" } },
            destroy: function() { this.unBindEvents(), this.unElements() },
            refresh: function(t, e) { t = t || this.container, this.destroy(), this.init(t, e) }
        }
    }(), e(function() { i.checkbox.init(e("body")) })
}(window, window.jQuery);
! function(t, s) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.accessibility && (t.smg.aem.accessibility = {});
    var e = t.smg.aem.util,
        i = t.smg.aem.accessibility;
    i.placeholder = function() {
        var t = { targets: "[data-accessibility='placeholder']", targetsValue: "data-acc-placeholder-value", holder: "data-acc-placeholder", holderTarget: "data-acc-placeholder-target", onClass: "data-acc-onclass" };
        return {
            init: function(s, i) {
                (this.container = s).size() && (this.opts = e.def(t, i || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() { this.targets = this.container.find(this.opts.targets), s.each(this.targets, s.proxy(function(t, e) { s(e).attr(this.opts.targetsValue, s(e).val()) }, this)) },
            setBindEvents: function() { this.targets.on("focus", s.proxy(this.onTargetsFocus, this)).on("blur", s.proxy(this.onTargetsBlur, this)).on("keydown keyup", s.proxy(this.onTargetsChange, this)) },
            unElements: function() {
                s.each(this.targets, s.proxy(function(t, e) { s(e).val(s(e).attr(this.opts.targetsValue)) }, this));
                var t, e;
                s.each(s("[" + this.opts.holder + "]"), s.proxy(function(i, a) { t = s(a), e = this.getTargetInfo(t), e.onClass ? t.removeClass(e.onClass) : t.show() }, this)), this.targets = []
            },
            unBindEvents: function() { this.targets.off("focus", s.proxy(this.onTargetsFocus, this)).off("blur", s.proxy(this.onTargetsBlur, this)) },
            onTargetsFocus: function(t) {
                var e = s(t.currentTarget),
                    i = this.getTargetInfo(e),
                    a = i.holder,
                    n = i.onClass;
                a && e.val() && (n ? a.addClass(n) : a.css({ visibility: "hidden" }))
            },
            onTargetsBlur: function(t) {
                var e = s(t.currentTarget),
                    i = this.getTargetInfo(e),
                    a = i.holder,
                    n = i.onClass;
                a && (e.val() || (n ? a.removeClass(n) : a.css({ visibility: "visible" })))
            },
            onTargetsChange: function(t) {
                var e = s(t.currentTarget),
                    i = this.getTargetInfo(e),
                    a = i.holder,
                    n = i.onClass;
                a && (e.val() ? n ? a.addClass(n) : a.css({ visibility: "hidden" }) : n ? a.removeClass(n) : a.css({ visibility: "visible" }))
            },
            getTargetInfo: function(t) { return t = s("[" + this.opts.holder + "='" + t.attr(this.opts.holderTarget) + "']"), t.size() ? { holder: t, onClass: t.attr(this.opts.onClass) } : { holder: "", onClass: "" } },
            destroy: function() { this.unBindEvents(), this.unElements() },
            refresh: function(t, s) { t = t || this.container, this.destroy(), this.init(t, s) }
        }
    }(), s(function() { i.placeholder.init(s("body")) })
}(window, window.jQuery);
! function(t, i) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.util && (t.smg.aem.util = {}), "undefined" == typeof t.smg.aem.util.cookie && (t.smg.aem.util.cookie = {}), "undefined" == typeof t.smg.aem.util.history && (t.smg.aem.util.history = {}), t.smg.aem.util.history = function(t) {
        return {
            setCookie: function(i, e, o) { t.setCookie(i, encodeURIComponent(e), o) },
            getCookie: function(i) { return decodeURIComponent(t.getCookie(i)) },
            getHistory: function(t) { var i, e, o, r, s = []; for (r = 1; 10 >= r; r++) i = this.getCookie(t + "History" + String(r)), e = this.getCookie(t + "Url" + String(r)), o = this.getCookie(t + "Fix" + String(r)), s.push({ str: i, url: e, fix: o }); return s },
            sort: function(t, i, e, o) {
                var r, s = 0,
                    n = 365;
                for (r = 0; 10 > r; r++) "true" == i[r].fix && (s++, this.setCookie(t + "History" + String(s), i[r].str, n), this.setCookie(t + "Url" + String(s), i[r].url, n), this.setCookie(t + "Fix" + String(s), i[r].fix, n));
                for ("" != o && (s++, this.setCookie(t + "History" + String(s), e, n), this.setCookie(t + "Url" + String(s), o, n), this.setCookie(t + "Fix" + String(s), "false", n)), r = 0; 10 > r; r++) "true" != i[r].fix && "" != i[r].url && (s++, this.setCookie(t + "History" + String(s), i[r].str, n), this.setCookie(t + "Url" + String(s), i[r].url, n), this.setCookie(t + "Fix" + String(s), i[r].fix, n));
                for (r = s + 1; 10 >= r; r++) this.setCookie(t + "History" + String(r), "", n), this.setCookie(t + "Url" + String(r), "", n), this.setCookie(t + "Fix" + String(r), "", n)
            },
            getIndex: function(t, i) {
                var e, o = 9; - 1 == i.indexOf("/content/samsung") && (i = "/content/samsung" + i);
                for (e in t)
                    if (t[e].url == i) { o = e; break }
                return o
            },
            addHistory: function(t, i, e) {
                var o = [];
                o = this.getHistory(t);
                var r = this.getIndex(o, e);
                return o[r].str = "", o[r].url = "", o[r].fix = "", "true" != o[r].fix && 0 != r && this.sort(t, o, i, e), "OK"
            },
            setUrlFix: function(t, i, e) {
                var o = [];
                o = this.getHistory(t);
                var r = this.getIndex(o, i);
                return o[r].fix = e, this.sort(t, o, "", ""), "OK"
            },
            deleteUrl: function(t, i) {
                var e = [];
                e = this.getHistory(t);
                var o = this.getIndex(e, i);
                return e[o].str = "", e[o].url = "", e[o].fix = "", this.sort(t, e, "", ""), "OK"
            }
        }
    }(t.smg.aem.util.cookie)
}(window, window.jQuery);
! function(e, t) {
    function n(e, t) {
        var n = e.createElement("p"),
            r = e.getElementsByTagName("head")[0] || e.documentElement;
        return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
    }

    function r() { var e = E.elements; return "string" == typeof e ? e.split(" ") : e }

    function a(e, t) { var n = E.elements; "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), E.elements = n + " " + e, m(t) }

    function o(e) { var t = y[e[g]]; return t || (t = {}, v++, e[g] = v, y[v] = t), t }

    function c(e, n, r) {
        if (n || (n = t), s) return n.createElement(e);
        r || (r = o(n));
        var a;
        return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || h.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
    }

    function i(e, n) {
        if (e || (e = t), s) return e.createDocumentFragment();
        n = n || o(e);
        for (var a = n.frag.cloneNode(), c = 0, i = r(), l = i.length; l > c; c++) a.createElement(i[c]);
        return a
    }

    function l(e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) { return E.shivMethods ? c(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) { return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' }) + ");return n}")(E, t.frag) }

    function m(e) { e || (e = t); var r = o(e); return !E.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), s || l(e, r), e }
    var u, s, d = "3.7.3",
        f = e.html5 || {},
        h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = "_html5shiv",
        v = 0,
        y = {};
    ! function() {
        try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>", u = "hidden" in e, s = 1 == e.childNodes.length || function() { t.createElement("a"); var e = t.createDocumentFragment(); return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement }()
        } catch (n) { u = !0, s = !0 }
    }();
    var E = { elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: d, shivCSS: f.shivCSS !== !1, supportsUnknownElements: s, shivMethods: f.shivMethods !== !1, type: "default", shivDocument: m, createElement: c, createDocumentFragment: i, addElements: a };
    e.html5 = E, m(t), "object" == typeof module && module.exports && (module.exports = E)
}("undefined" != typeof window ? window : this, document);
! function(t, o) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.templates && (t.smg.aem.templates = {}), "undefined" == typeof t.smg.aem.templates.product && (t.smg.aem.templates.product = {});
    var s = (t.smg.aem.varStatic, t.smg.aem.util),
        n = (t.smg.aem.customEvent, t.smg.aem.templates.product);
    n.backtotop = function() {
        var n = { topBtn: { wrap: ".s-gotop-wrap", btn: ".s-btn-gotop", onClass: "s-show", speed: 1e3 }, footer: { target: "#footer" } };
        return {
            init: function(t, o) {
                (this.container = t).size() && (this.opts = s.def(n, o || {}), this.setElements(), this.onBindEvent(), this.defSetup())
            },
            setElements: function() { this.htmlBody = o("html, body"), this.footer = o(this.opts.footer.target), this.topBtnWrap = this.container.find(this.opts.topBtn.wrap), this.topBtn = this.topBtnWrap.find(this.opts.topBtn.btn) },
            onBindEvent: function() { this.topBtn.on("click", o.proxy(this.onTopBtnClick, this)), o(t).on("scroll touchmove", o.proxy(this.onScrollListener, this)), this.onScrollListener() },
            defSetup: function() { o(t).on("load", function(s) { o(t).trigger("scroll") }) },
            onTopBtnClick: function() { this.htmlBody.animate({ scrollTop: 0 }, this.opts.topBtn.speed) },
            setPosition: function(t, o) { this.topPosition !== o.TOP_POSITION && (this.topPosition = o.TOP_POSITION) },
            onScrollListener: function() {
                {
                    var n = o(t).scrollTop();
                    s.winSize().h, this.footer.size() ? this.footer.offset().top : 0
                }
                "undefined" == typeof this.topPosition && (this.topPosition = n), n > this.topPosition ? this.topBtnWrap.hasClass(this.opts.topBtn.onClass) || this.topBtnWrap.addClass(this.opts.topBtn.onClass) : this.topBtnWrap.hasClass(this.opts.topBtn.onClass) && this.topBtnWrap.removeClass(this.opts.topBtn.onClass)
            }
        }
    }(), o(function() { n.backtotop.init(o("body")) })
}(window, window.jQuery);
! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.responsive && (t.smg.aem.components.responsive = {});
    var s = t.smg.aem.varStatic,
        n = t.smg.aem.util,
        i = t.smg.aem.customEvent,
        a = t.smg.aem.components;
    a.responsive = function() {
        var t = {};
        return {
            init: function(e, s) {
                (this.container = e).size() && (this.opts = n.def(t, s || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() { this.resImgs = e("." + s.CSS.JS_IMG_SRC), this.resDataAttr = s.DATA_ATTR.SRC_MOBILE },
            setBindEvents: function() { this.container.on(i.RESPONSIVE.CHANGE, e.proxy(this.onResponsiveChange, this)), this.container.trigger(i.RESPONSIVE.GET_STATUS) },
            onResponsiveChange: function(t, n) {
                var i = this;
                switch (n.RESPONSIVE_NAME) {
                    case s.RESPONSIVE.DESKTOP.NAME:
                        this.resDataAttr = s.DATA_ATTR.SRC_PC;
                        break;
                    case s.RESPONSIVE.MOBILE.NAME:
                        this.resDataAttr = s.DATA_ATTR.SRC_MOBILE;
                        break;
                    default:
                        this.resDataAttr = s.DATA_ATTR.SRC_PC
                }
                e.each(this.resImgs, function() {
                    var t = e(this),
                        s = t.attr("src"),
                        n = t.attr(i.resDataAttr);
                    s !== n && t.attr("src", n)
                })
            }
        }
    }(), e(function() { a.responsive.init(e("body")) })
}(window, window.jQuery);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.common && (e.smg.aem.components.common = {});
    var i = (e.smg.aem.varStatic, e.smg.aem.util, e.smg.aem.customEvent, e.smg.aem.components.common);
    i.mailForm = function() {
        var i = { responsiveSize: 768, isSupportTransform: function() { return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style }(), windowWidth: function() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } },
            n = { init: function(e) { this.obj = t(e), this.setLayout(), this.layerSize.init(this), i.isSupportTransform ? (this.resizeFunc(), this.bindResizeEventHandlers()) : this.layerView(!0) }, setLayout: function() { this.obj.css({ left: "50%", top: "50%" }) }, bindResizeEventHandlers: function() {}, layerView: function() { Math.ceil(t("body").outerHeight()) - t(e).scrollTop() >= parseInt(this.layerSize.h()) ? this.obj.css("top", t(e).scrollTop() + "px") : (this.obj.css("top", Math.ceil(t("body").outerHeight()) - parseInt(this.layerSize.h()) + "px"), t(e).scrollTop(Math.ceil(t("body").outerHeight()) - parseInt(this.layerSize.h()))) }, resizeFunc: function() { this.layerView(!0) }, layerSize: { init: function(e) { this.obj = e.obj }, w: function() { return this.obj.outerWidth() }, h: function() { return this.obj.outerHeight() } } },
            o = {
                init: function() { this.opts(), this.setElements(), this.bindEventHandlers() },
                opts: function() { this.delay = 100 },
                setElements: function() { this.menuWrap = t(".js-mail-form-layer"), this.menuLayer = t(".mail-form__layer"), this.closeBtn = this.menuLayer.find(".layer__close") },
                setElementsReload: function() { this.menuWrap = t(".js-mail-form-layerReload"), this.menuLayer = t(".mail-form__layer"), this.closeBtn = this.menuLayer.find(".layer__close") },
                bindEventHandlers: function() { this.menuWrapClickListener(), t(window).on("resize", t.proxy(this.resizeFunc, this)) },
                menuWrapClickListener: function() {
                    var e = this;
                    this.menuWrap.on("click", function(i) {
                        i.preventDefault(), e.clickBtn = t(this), e.menuLayer.is(":visible") ? e.offDisplay(e.clickBtn) : (e.onDisplay(), t("#pdfUrl").val(e.clickBtn.attr("data-href")), n.init(".mail-form__layer"));
                        var o = new Date;
                        t("img#ins-dn-captcha").last().attr("src", "https://" + window.location.host + "/aemapi/business/common/simplecapcha.INS-DN.Y?" + o.getTime())
                    }), this.menuLayer.on("click", ".layer__close", function(t) { t.preventDefault(), e.offDisplay(e.clickBtn) })
                },
                onLayer: function() {
                    var i = t(e).scrollTop();
                    this.menuLayer.stop().fadeIn(this.delay), t(".s-layer-dimmed").show(), t(e).scrollTop(i), setTimeout(t.proxy(function() { this.menuLayer.on("keydown keyup", t.proxy(function(e) { "keydown" === e.type ? (16 === e.keyCode || 16 === e.which) && (this.keyShift = !0) : "keyup" === e.type && (16 === e.keyCode || 16 === e.which) && (this.keyShift = !1) }, this)), this.menuLayer.on("clickoutside", t.proxy(function() { this.closeBtn.trigger("click") }, this)), this.menuLayer.on("focusoutside", t.proxy(function() { this.keyShift }, this)) }, this), 100)
                },
                offLayer: function(e) { this.menuLayer.stop().fadeOut(this.delay), this.menuLayer.removeClass("position-top").find(".mail-form__contents").css("height", ""), t(".s-layer-dimmed").hide(), t("body").removeClass("body-noscroll") },
                onDisplay: function() { this.onLayer() },
                offDisplay: function(e) { this.menuLayer.off("keydown keyup clickoutside focusoutside"), this.offLayer(e) },
                resizeFunc: function() { n.init(".mail-form__layer") }
            };
        return o.init(), { reinit: function() { o.opts(), o.setElementsReload(), o.bindEventHandlers() } }
    }()
}(window, window.jQuery);
! function(e, t) {
    function a(e) {
        var t = "checkTrue",
            a = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/,
            i = /^[a-zA-Z0-9\-\.\_]+\@[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,5})$/;
        return !a.test(e) && i.test(e) ? (t = "emailCheckTrue", e.indexOf("samsung.com") > -1 && (t = "samsungMailFalse")) : t = "emailCheckFalse", t
    }

    function i(e) {
        var t = e.replace(/\+/g, "").replace(/-/g, ""),
            a = /^[-0-9]*$/;
        return a.test(t) ? !0 : !1
    }

    function n() {
        var e, a = !0,
            i = new Array;
        return h.find("input, select, textarea").not("input[type='hidden']").not("[disabled='disabled']").each(function(n) { e = t(this).attr("data-id"), "undefined" != typeof e && (("TS02" != e || v(t(this))) && ("TT03" != e || m(t(this))) ? f(t(this)) || (a = !1, i.push(t(this).attr("id"))) : (a = !1, t(this).focus())) }), t("#" + i[0]).focus(), a
    }

    function s(e) { t("#insaudiocatpch").html(' <bgsound src="' + e + '">') }

    function c() {
        var e = new Date,
            t = "http://" + window.location.host + "/aemapi/business/common/simpleaudiocapcha.INS-DN.Y?" + e.getTime(),
            a = navigator.userAgent.toLowerCase();
        if ("Netscape" == navigator.appName && a.indexOf("trident") >= 0) {
            var i = '<object type="audio/x-wav" data="' + t + '" width="0" height="0"><param name="src" value="' + t + '"/><param name="autostart" value="true" /><param name="controller" value="false" /></object>';
            document.getElementById("insaudiocatpch").innerHTML = i
        } else if (a.indexOf("msie") >= 0) s(t + "&agent=msie");
        else try {
            var n = new Audio(t);
            n.load(), n.play()
        } catch (c) { s(t) }
    }

    function d() {
        var e = new Date;
        t("img#ins-dn-captcha").last().attr("src", "https://" + window.location.host + "/aemapi/business/common/simplecapcha.INS-DN.Y?" + e.getTime())
    }

    function r() { t("form").each(function() { "input__field__wrap" == this.name && this.reset() }), t(".invalid-notice").hide(), t(".sign-in__input-box.add__notice").removeClass("add__notice"), h.find("input:checkbox").attr("checked", !1), h.find(".check__act.active").removeClass("active"), h.find("select").trigger("change"), t(".invalid-captcha").hide() }

    function o() {
        if (n()) {
            var e = grecaptcha.getResponse(insRecaptcha),
                a = "/aemapi/business/common/recaptchacheck",
                i = { "downloadUrl=": Granite.HTTP.getPath() + ".html" };
            l.find("select, textarea, input[name]").not("[disabled]").each(function() { i[t(this).attr("name")] = t(this).val(), "checkbox" != this.type || t(this).is(":checked") || (i[t(this).attr("name")] = "off") }), i["g-recaptcha-response"] = e, i.grecaptcha = "grecaptcha", t.ajax({ type: "post", url: a, data: i, success: function(e) { "200" == e.response.statusCode ? (window.open(t("#pdfUrl").val()), l.find(".layer__close").trigger("click"), r(), grecaptcha.reset(insRecaptcha)) : (grecaptcha.reset(insRecaptcha), l.find(".invalid-recaptcha").show()) }, erorr: function(e) {} })
        }
    }
    var l = t(".mail-form__layer"),
        h = l.find(".mail-form__contents .input__field__wrap"),
        u = l.find("input[name='siteCode']").val(),
        p = "bu_" + u;
    Granite.I18n.setLocale(u), h.find("textarea").on("input", function() {
        var e = t(this).val().length,
            a = 2e3;
        t(".message_length").text("( " + e + " / " + a + " )")
    }), h.find("select").on("change", function() {
        var e = t(this).attr("name"),
            a = t(this).find("option:selected"),
            i = t(this).parent().find("[name=" + e + "_T]"),
            n = t(this).closest(".sign-in__input-box").next().find("input[type=text]");
        "Y" == a.attr("data-textboxyn") ? (i.attr("disabled", "disabled"), n.attr("name") == e + "_T" && (n.attr("placeholder", a.text()), n.removeAttr("disabled"), n.attr("data-required", "Y"), n.removeAttr("hidden"))) : (i.removeAttr("disabled"), n.attr("name") == e + "_T" && (n.attr("disabled", "disabled"), n.attr("hidden", !0), n.removeAttr("data-required"), t(this).closest(".sign-in__input-box").next().removeClass("add__notice"), t(this).closest(".sign-in__input-box").next().find(".invalid-notice").hide()), i.val(t(this).val()))
    }), t(".invalid-notice").hide();
    var f = function(e) {
            var t = !0,
                n = e.val(),
                s = e.attr("data-required"),
                c = e.closest(".sign-in__input-box"),
                d = c.find(".invalid-notice"),
                r = c.find(".invalid-captcha");
            return "undefined" == typeof s || "Y" != s || "undefined" != typeof n && 0 != n.length ? "TT05" != e.attr("data-id") || "emailCheckFalse" != a(e.val()) && "samsungMailFalse" != a(e.val()) ? "TT06" != e.attr("data-id") || i(e.val()) ? (d.hide(), c.removeClass("add__notice")) : (d.text(Granite.I18n.get("Please enter a valid telephone number", "", p)).show(), c.addClass("add__notice"), t = !1) : ("emailCheckFalse" == a(e.val()) ? d.text(Granite.I18n.get("Please enter a valid E-mail address", "", p)).show() : "samsungMailFalse" == a(e.val()) && d.text(Granite.I18n.get("Samsung.com email address is not allowed. Please input other email address.", "", p)).show(), c.addClass("add__notice"), t = !1) : (d.text(Granite.I18n.get("* This field is required", "", p)).show(), r.text(Granite.I18n.get("* Please enter your Captcha Code", "", p)).show(), c.addClass("add__notice"), t = !1), t
        },
        m = function(e) {
            var t = e.parent().find(".invalid-notice"),
                a = e.attr("data-required");
            return "undefined" != typeof a && "Y" == a && 0 == e.val().length ? (t.show(), !1) : (t.hide(), !0)
        },
        v = function(e) {
            var t = e.closest(".check__wrap__in").siblings(".invalid-notice"),
                a = e.attr("data-required");
            return "undefined" == typeof a || "Y" != a || e.is(":checked") ? (t.hide(), !0) : (t.show(), !1)
        };
    t("button.ins-dn-audio").unbind("click").click(function() { c() }), t("button.ins-dn-refresh").unbind("click").click(function() { d() }), l.find(".layer__close").on("click", function() { grecaptcha.reset(insRecaptcha), r() }), l.find(".s-btn-encased.s-mo-full").on("click", function() { o() })
}(window, window.jQuery);
! function(t, n) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var i = (t.smg.aem.varStatic, t.smg.aem.util),
        o = (t.smg.aem.customEvent, t.smg.aem.components.common);
    o.columnNotificationBar = function() {
        var t = { notiBarSection: ".bu-notification-bar", notiBarCloseBtn: ".bu-notification-bar__close" };
        return {
            init: function(n, o) {
                (this.container = n).size() && (this.opts = i.def(t, o || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() { this.notiBarSection = this.container.find(this.opts.notiBarSection), this.notiBarCloseBtn = this.container.find(this.opts.notiBarCloseBtn) },
            setBindEvents: function() { this.notiBarCloseBtn.off("click.columnNotificationBar").on("click.columnNotificationBar", n.proxy(this.closeBtnClickHandler, this)) },
            closeBtnClickHandler: function() { this.notiBarSection.css("display", "none") }
        }
    }, o.toggleNotificationBar = function() {
        var o = { structure: { notiBarSection: ".bu-notification-bar", notiBarInner: ".bu-notification-bar__inner", collapsedBar: ".bu-notification-bar__column--collapsed", expandedBar: ".bu-notification-bar__column--expanded", notiBarToggleBtn: ".bu-notification-bar__toggle-btn", blindSpan: "span.blind" }, cssClass: { expandClass: "is-expanded" }, i18n: { expand: void 0 !== n("#gnbRunmodeInfo").val() ? Granite.I18n.get("Click to Expand", [], n("#siteCode").val()) : "Click to Expand", collapse: void 0 !== n("#gnbRunmodeInfo").val() ? Granite.I18n.get("Click to Collapse", [], n("#siteCode").val()) : "Click to Collapse" } };
        return {
            init: function(t, n) {
                (this.container = t).size() && (this.opts = i.def(o, n || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() { this.body = n("html,body"), this.notiBarSection = this.container.find(this.opts.structure.notiBarSection), this.notiBarInner = this.notiBarSection.find(this.opts.structure.notiBarInner), this.collapsedBar = this.notiBarInner.find(this.opts.structure.collapsedBar), this.expandedBar = this.notiBarInner.find(this.opts.structure.expandedBar), this.notiBarToggleBtn = this.container.find(this.opts.structure.notiBarToggleBtn), this.blindSpan = this.notiBarToggleBtn.find(this.opts.structure.blindSpan), this.prevScrollTop = this.body.scrollTop(), this.animateDuration = 250 },
            setBindEvents: function() { n(t).on("scroll", n.proxy(this.scrollHandler, this)), this.notiBarToggleBtn.off("click.toggleNotificationBar").on("click.toggleNotificationBar", n.proxy(this.toggleBtnClickHandler, this)) },
            scrollHandler: function() {
                var t = this.body.scrollTop();
                Math.abs(this.prevScrollTop - t) > 5 && (this.notiBarSection.hasClass(this.opts.cssClass.expandClass) && this.collapseBar(), this.prevScrollTop = t)
            },
            toggleBtnClickHandler: function() { this.notiBarSection.hasClass(this.opts.cssClass.expandClass) ? this.collapseBar() : this.expandBar() },
            expandBar: function() { this.notiBarSection.addClass(this.opts.cssClass.expandClass), this.collapsedBar.stop().slideUp(this.animateDuration), this.expandedBar.stop().slideDown(this.animateDuration), this.blindSpan.text(this.opts.i18n.collapse) },
            collapseBar: function() { this.notiBarSection.removeClass(this.opts.cssClass.expandClass), this.collapsedBar.stop().slideDown(this.animateDuration), this.expandedBar.stop().slideUp(this.animateDuration), this.blindSpan.text(this.opts.i18n.expand) }
        }
    }, n(function() {
        n(".bu-g-notification-bar").each(function() {
            var t = n(this),
                i = null;
            i = t.find(".bu-notification-bar--toggle").length ? new o.toggleNotificationBar : new o.columnNotificationBar, i.init(t)
        })
    })
}(window, window.jQuery);
! function(e, n) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.common && (e.smg.aem.components.common = {});
    var i = e.smg.aem.components.common;
    i.weixin = function() {
        var e = {
            init: function() {
                if (this.setElmts(), this.bindEvts(), "cn" === n("meta[name=sitecode]").attr("content") && "undefined" != typeof n("#qrcodeTableCm").val()) {
                    var e = navigator.userAgent.toLowerCase();
                    if (-1 != e.indexOf("msie")) {
                        var i = navigator.userAgent.match(/Trident\/(\d.\d)/i);
                        null != i && "6.0" == i[1] ? n("#qrcodeTableCm").qrcode(location.href) : -1 == navigator.userAgent.indexOf("9.0") ? (n("#qrcodeTableCm").qrcode({ render: "table", text: location.href }), n("#qrcodeTableCm").css("margin-left", "10px")) : n("#qrcodeTableCm").qrcode(location.href)
                    } else n("#qrcodeTableCm").qrcode(location.href)
                }
            },
            setElmts: function() { this.openBtn = n(".share-this__layer .share-this__ico-weixin"), this.lyr = n("#weixin_share"), this.closeBtn = this.lyr.find(".weixin_tit a") },
            bindEvts: function() { this.openBtnClickListener(), this.closeBtnClickListener() },
            openBtnClickListener: function() {
                var e = this;
                this.openBtn.on("click", function(n) { e.lyr.is(":visible") || e.lyr.css({ display: "block" }) })
            },
            closeBtnClickListener: function() {
                var e = this;
                this.closeBtn.on("click", function(n) { e.lyr.css({ display: "none" }) })
            }
        };
        return {
            init: function(n, i) {
                (this.container = n).size() && e.init()
            }
        }
    }(), n(function() { i.weixin.init(n("body")) }), n(document).off().on("click", ".share-this__btn", function() { n(".share-this__layer-url > input").val(location.href) })
}(window, window.jQuery);
! function(t) {
    t.fn.qrcode = function(e) {
        function r(t) { this.mode = u, this.data = t }

        function o(t, e) { this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [] }

        function n(t, e) {
            if (void 0 == t.length) throw Error(t.length + "/" + e);
            for (var r = 0; r < t.length && 0 == t[r];) r++;
            this.num = Array(t.length - r + e);
            for (var o = 0; o < t.length - r; o++) this.num[o] = t[o + r]
        }

        function i(t, e) { this.totalCount = t, this.dataCount = e }

        function s() { this.buffer = [], this.length = 0 }
        var u;
        r.prototype = { getLength: function() { return this.data.length }, write: function(t) { for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8) } }, o.prototype = {
            addData: function(t) { this.dataList.push(new r(t)), this.dataCache = null },
            isDark: function(t, e) { if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw Error(t + "," + e); return this.modules[t][e] },
            getModuleCount: function() { return this.moduleCount },
            make: function() {
                if (1 > this.typeNumber) {
                    for (var t = 1, t = 1; 40 > t; t++) { for (var e = i.getRSBlocks(t, this.errorCorrectLevel), r = new s, o = 0, n = 0; n < e.length; n++) o += e[n].dataCount; for (n = 0; n < this.dataList.length; n++) e = this.dataList[n], r.put(e.mode, 4), r.put(e.getLength(), a.getLengthInBits(e.mode, t)), e.write(r); if (r.getLengthInBits() <= 8 * o) break }
                    this.typeNumber = t
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(t, e) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
                for (var r = 0; r < this.moduleCount; r++) { this.modules[r] = Array(this.moduleCount); for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null }
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), 7 <= this.typeNumber && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
            },
            setupPositionProbePattern: function(t, e) {
                for (var r = -1; 7 >= r; r++)
                    if (!(-1 >= t + r || this.moduleCount <= t + r))
                        for (var o = -1; 7 >= o; o++) - 1 >= e + o || this.moduleCount <= e + o || (this.modules[t + r][e + o] = r >= 0 && 6 >= r && (0 == o || 6 == o) || o >= 0 && 6 >= o && (0 == r || 6 == r) || r >= 2 && 4 >= r && o >= 2 && 4 >= o ? !0 : !1)
            },
            getBestMaskPattern: function() {
                for (var t = 0, e = 0, r = 0; 8 > r; r++) {
                    this.makeImpl(!0, r);
                    var o = a.getLostPoint(this);
                    (0 == r || t > o) && (t = o, e = r)
                }
                return e
            },
            createMovieClip: function(t, e, r) {
                for (t = t.createEmptyMovieClip(e, r), this.make(), e = 0; e < this.modules.length; e++)
                    for (var r = 1 * e, o = 0; o < this.modules[e].length; o++) {
                        var n = 1 * o;
                        this.modules[e][o] && (t.beginFill(0, 100), t.moveTo(n, r), t.lineTo(n + 1, r), t.lineTo(n + 1, r + 1), t.lineTo(n, r + 1), t.endFill())
                    }
                return t
            },
            setupTimingPattern: function() { for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2); for (t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2) },
            setupPositionAdjustPattern: function() {
                for (var t = a.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                    for (var r = 0; r < t.length; r++) {
                        var o = t[e],
                            n = t[r];
                        if (null == this.modules[o][n])
                            for (var i = -2; 2 >= i; i++)
                                for (var s = -2; 2 >= s; s++) this.modules[o + i][n + s] = -2 == i || 2 == i || -2 == s || 2 == s || 0 == i && 0 == s ? !0 : !1
                    }
            },
            setupTypeNumber: function(t) {
                for (var e = a.getBCHTypeNumber(this.typeNumber), r = 0; 18 > r; r++) {
                    var o = !t && 1 == (e >> r & 1);
                    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = o
                }
                for (r = 0; 18 > r; r++) o = !t && 1 == (e >> r & 1), this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = o
            },
            setupTypeInfo: function(t, e) {
                for (var r = a.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), o = 0; 15 > o; o++) {
                    var n = !t && 1 == (r >> o & 1);
                    6 > o ? this.modules[o][8] = n : 8 > o ? this.modules[o + 1][8] = n : this.modules[this.moduleCount - 15 + o][8] = n
                }
                for (o = 0; 15 > o; o++) n = !t && 1 == (r >> o & 1), 8 > o ? this.modules[8][this.moduleCount - o - 1] = n : 9 > o ? this.modules[8][15 - o - 1 + 1] = n : this.modules[8][15 - o - 1] = n;
                this.modules[this.moduleCount - 8][8] = !t
            },
            mapData: function(t, e) {
                for (var r = -1, o = this.moduleCount - 1, n = 7, i = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                    for (6 == s && s--;;) {
                        for (var u = 0; 2 > u; u++)
                            if (null == this.modules[o][s - u]) {
                                var h = !1;
                                i < t.length && (h = 1 == (t[i] >>> n & 1)), a.getMask(e, o, s - u) && (h = !h), this.modules[o][s - u] = h, n--, -1 == n && (i++, n = 7)
                            }
                        if (o += r, 0 > o || this.moduleCount <= o) { o -= r, r = -r; break }
                    }
            }
        }, o.PAD0 = 236, o.PAD1 = 17, o.createData = function(t, e, r) {
            for (var e = i.getRSBlocks(t, e), n = new s, u = 0; u < r.length; u++) {
                var h = r[u];
                n.put(h.mode, 4), n.put(h.getLength(), a.getLengthInBits(h.mode, t)), h.write(n)
            }
            for (u = t = 0; u < e.length; u++) t += e[u].dataCount;
            if (n.getLengthInBits() > 8 * t) throw Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * t + ")");
            for (n.getLengthInBits() + 4 <= 8 * t && n.put(0, 4); 0 != n.getLengthInBits() % 8;) n.putBit(!1);
            for (; !(n.getLengthInBits() >= 8 * t) && (n.put(o.PAD0, 8), !(n.getLengthInBits() >= 8 * t));) n.put(o.PAD1, 8);
            return o.createBytes(n, e)
        }, o.createBytes = function(t, e) {
            for (var r = 0, o = 0, i = 0, s = Array(e.length), u = Array(e.length), h = 0; h < e.length; h++) {
                var l = e[h].dataCount,
                    g = e[h].totalCount - l,
                    o = Math.max(o, l),
                    i = Math.max(i, g);
                s[h] = Array(l);
                for (var f = 0; f < s[h].length; f++) s[h][f] = 255 & t.buffer[f + r];
                for (r += l, f = a.getErrorCorrectPolynomial(g), l = new n(s[h], f.getLength() - 1).mod(f), u[h] = Array(f.getLength() - 1), f = 0; f < u[h].length; f++) g = f + l.getLength() - u[h].length, u[h][f] = g >= 0 ? l.get(g) : 0
            }
            for (f = h = 0; f < e.length; f++) h += e[f].totalCount;
            for (r = Array(h), f = l = 0; o > f; f++)
                for (h = 0; h < e.length; h++) f < s[h].length && (r[l++] = s[h][f]);
            for (f = 0; i > f; f++)
                for (h = 0; h < e.length; h++) f < u[h].length && (r[l++] = u[h][f]);
            return r
        }, u = 4;
        for (var a = {
                PATTERN_POSITION_TABLE: [
                    [],
                    [6, 18],
                    [6, 22],
                    [6, 26],
                    [6, 30],
                    [6, 34],
                    [6, 22, 38],
                    [6, 24, 42],
                    [6, 26, 46],
                    [6, 28, 50],
                    [6, 30, 54],
                    [6, 32, 58],
                    [6, 34, 62],
                    [6, 26, 46, 66],
                    [6, 26, 48, 70],
                    [6, 26, 50, 74],
                    [6, 30, 54, 78],
                    [6, 30, 56, 82],
                    [6, 30, 58, 86],
                    [6, 34, 62, 90],
                    [6, 28, 50, 72, 94],
                    [6, 26, 50, 74, 98],
                    [6, 30, 54, 78, 102],
                    [6, 28, 54, 80, 106],
                    [6, 32, 58, 84, 110],
                    [6, 30, 58, 86, 114],
                    [6, 34, 62, 90, 118],
                    [6, 26, 50, 74, 98, 122],
                    [6, 30, 54, 78, 102, 126],
                    [6, 26, 52, 78, 104, 130],
                    [6, 30, 56, 82, 108, 134],
                    [6, 34, 60, 86, 112, 138],
                    [6, 30, 58, 86, 114, 142],
                    [6, 34, 62, 90, 118, 146],
                    [6, 30, 54, 78, 102, 126, 150],
                    [6, 24, 50, 76, 102, 128, 154],
                    [6, 28, 54, 80, 106, 132, 158],
                    [6, 32, 58, 84, 110, 136, 162],
                    [6, 26, 54, 82, 110, 138, 166],
                    [6, 30, 58, 86, 114, 142, 170]
                ],
                G15: 1335,
                G18: 7973,
                G15_MASK: 21522,
                getBCHTypeInfo: function(t) { for (var e = t << 10; 0 <= a.getBCHDigit(e) - a.getBCHDigit(a.G15);) e ^= a.G15 << a.getBCHDigit(e) - a.getBCHDigit(a.G15); return (t << 10 | e) ^ a.G15_MASK },
                getBCHTypeNumber: function(t) { for (var e = t << 12; 0 <= a.getBCHDigit(e) - a.getBCHDigit(a.G18);) e ^= a.G18 << a.getBCHDigit(e) - a.getBCHDigit(a.G18); return t << 12 | e },
                getBCHDigit: function(t) { for (var e = 0; 0 != t;) e++, t >>>= 1; return e },
                getPatternPosition: function(t) { return a.PATTERN_POSITION_TABLE[t - 1] },
                getMask: function(t, e, r) {
                    switch (t) {
                        case 0:
                            return 0 == (e + r) % 2;
                        case 1:
                            return 0 == e % 2;
                        case 2:
                            return 0 == r % 3;
                        case 3:
                            return 0 == (e + r) % 3;
                        case 4:
                            return 0 == (Math.floor(e / 2) + Math.floor(r / 3)) % 2;
                        case 5:
                            return 0 == e * r % 2 + e * r % 3;
                        case 6:
                            return 0 == (e * r % 2 + e * r % 3) % 2;
                        case 7:
                            return 0 == (e * r % 3 + (e + r) % 2) % 2;
                        default:
                            throw Error("bad maskPattern:" + t)
                    }
                },
                getErrorCorrectPolynomial: function(t) { for (var e = new n([1], 0), r = 0; t > r; r++) e = e.multiply(new n([1, h.gexp(r)], 0)); return e },
                getLengthInBits: function(t, e) {
                    if (e >= 1 && 10 > e) switch (t) {
                        case 1:
                            return 10;
                        case 2:
                            return 9;
                        case u:
                            return 8;
                        case 8:
                            return 8;
                        default:
                            throw Error("mode:" + t)
                    } else if (27 > e) switch (t) {
                        case 1:
                            return 12;
                        case 2:
                            return 11;
                        case u:
                            return 16;
                        case 8:
                            return 10;
                        default:
                            throw Error("mode:" + t)
                    } else {
                        if (!(41 > e)) throw Error("type:" + e);
                        switch (t) {
                            case 1:
                                return 14;
                            case 2:
                                return 13;
                            case u:
                                return 16;
                            case 8:
                                return 12;
                            default:
                                throw Error("mode:" + t)
                        }
                    }
                },
                getLostPoint: function(t) {
                    for (var e = t.getModuleCount(), r = 0, o = 0; e > o; o++)
                        for (var n = 0; e > n; n++) {
                            for (var i = 0, s = t.isDark(o, n), u = -1; 1 >= u; u++)
                                if (!(0 > o + u || o + u >= e))
                                    for (var a = -1; 1 >= a; a++) 0 > n + a || n + a >= e || 0 == u && 0 == a || s == t.isDark(o + u, n + a) && i++;
                            i > 5 && (r += 3 + i - 5)
                        }
                    for (o = 0; e - 1 > o; o++)
                        for (n = 0; e - 1 > n; n++) i = 0, t.isDark(o, n) && i++, t.isDark(o + 1, n) && i++, t.isDark(o, n + 1) && i++, t.isDark(o + 1, n + 1) && i++, (0 == i || 4 == i) && (r += 3);
                    for (o = 0; e > o; o++)
                        for (n = 0; e - 6 > n; n++) t.isDark(o, n) && !t.isDark(o, n + 1) && t.isDark(o, n + 2) && t.isDark(o, n + 3) && t.isDark(o, n + 4) && !t.isDark(o, n + 5) && t.isDark(o, n + 6) && (r += 40);
                    for (n = 0; e > n; n++)
                        for (o = 0; e - 6 > o; o++) t.isDark(o, n) && !t.isDark(o + 1, n) && t.isDark(o + 2, n) && t.isDark(o + 3, n) && t.isDark(o + 4, n) && !t.isDark(o + 5, n) && t.isDark(o + 6, n) && (r += 40);
                    for (n = i = 0; e > n; n++)
                        for (o = 0; e > o; o++) t.isDark(o, n) && i++;
                    return t = Math.abs(100 * i / e / e - 50) / 5, r + 10 * t
                }
            }, h = { glog: function(t) { if (1 > t) throw Error("glog(" + t + ")"); return h.LOG_TABLE[t] }, gexp: function(t) { for (; 0 > t;) t += 255; for (; t >= 318;) t -= 255; return h.EXP_TABLE[t] }, EXP_TABLE: Array(318), LOG_TABLE: Array(318) }, l = 0; 8 > l; l++) h.EXP_TABLE[l] = 1 << l;
        for (l = 8; 318 > l; l++) h.EXP_TABLE[l] = h.EXP_TABLE[l - 4] ^ h.EXP_TABLE[l - 5] ^ h.EXP_TABLE[l - 6] ^ h.EXP_TABLE[l - 8];
        for (l = 0; 255 > l; l++) h.LOG_TABLE[h.EXP_TABLE[l]] = l;
        return n.prototype = {
            get: function(t) { return this.num[t] },
            getLength: function() { return this.num.length },
            multiply: function(t) {
                for (var e = Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
                    for (var o = 0; o < t.getLength(); o++) e[r + o] ^= h.gexp(h.glog(this.get(r)) + h.glog(t.get(o)));
                return new n(e, 0)
            },
            mod: function(t) { if (0 > this.getLength() - t.getLength()) return this; for (var e = h.glog(this.get(0)) - h.glog(t.get(0)), r = Array(this.getLength()), o = 0; o < this.getLength(); o++) r[o] = this.get(o); for (o = 0; o < t.getLength(); o++) r[o] ^= h.gexp(h.glog(t.get(o)) + e); return new n(r, 0).mod(t) }
        }, i.RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
        ], i.getRSBlocks = function(t, e) {
            var r = i.getRsBlockTable(t, e);
            if (void 0 == r) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
            for (var o = r.length / 3, n = [], s = 0; o > s; s++)
                for (var u = r[3 * s + 0], a = r[3 * s + 1], h = r[3 * s + 2], l = 0; u > l; l++) n.push(new i(a, h));
            return n
        }, i.getRsBlockTable = function(t, e) {
            switch (e) {
                case 1:
                    return i.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                case 0:
                    return i.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                case 3:
                    return i.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                case 2:
                    return i.RS_BLOCK_TABLE[4 * (t - 1) + 3]
            }
        }, s.prototype = {
            get: function(t) { return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1) },
            put: function(t, e) { for (var r = 0; e > r; r++) this.putBit(1 == (t >>> e - r - 1 & 1)) },
            getLengthInBits: function() { return this.length },
            putBit: function(t) {
                var e = Math.floor(this.length / 8);
                this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
            }
        }, "string" == typeof e && (e = { text: e }), e = t.extend({}, { render: "canvas", width: 318, height: 318, typeNumber: -1, correctLevel: 2, background: "#ffffff", foreground: "#000000" }, e), this.each(function() {
            var r;
            if ("canvas" == e.render) {
                r = new o(e.typeNumber, e.correctLevel), r.addData(e.text), r.make();
                var n = document.createElement("canvas");
                n.width = e.width, n.height = e.height;
                for (var i = n.getContext("2d"), s = e.width / r.getModuleCount(), u = e.height / r.getModuleCount(), a = 0; a < r.getModuleCount(); a++)
                    for (var h = 0; h < r.getModuleCount(); h++) {
                        i.fillStyle = r.isDark(a, h) ? e.foreground : e.background;
                        var l = Math.ceil((h + 1) * s) - Math.floor(h * s),
                            g = Math.ceil((a + 1) * s) - Math.floor(a * s);
                        i.fillRect(Math.round(h * s), Math.round(a * u), l, g)
                    }
            } else
                for (r = new o(e.typeNumber, e.correctLevel), r.addData(e.text), r.make(), n = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), i = e.width / r.getModuleCount(), s = e.height / r.getModuleCount(), u = 0; u < r.getModuleCount(); u++)
                    for (a = t("<tr></tr>").css("height", s + "px").appendTo(n), h = 0; h < r.getModuleCount(); h++) t("<td></td>").css("width", i + "px").css("background-color", r.isDark(u, h) ? e.foreground : e.background).appendTo(a);
            r = n, jQuery(r).appendTo(this)
        })
    }
}(jQuery);
! function(e, s) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.common && (e.smg.aem.components.common = {});
    var t = (e.smg.aem.varStatic, e.smg.aem.util, e.smg.aem.components.common);
    t.shareThis = function() {
        var e = { wrap: ".share-this__area", layerSelector: ".share-this__btn", layerCont: ".share-this__layer", layerClose: ".share-this__layer-close" },
            t = { init: function() { this.setElmts(), this.bindEvts() }, setElmts: function() { this.wrap = s(e.wrap), this.shareBtn = s(e.layerSelector), this.shareLayerCont = this.wrap.find(e.layerCont), this.shareClose = this.shareLayerCont.find(e.layerClose) }, bindEvts: function() { this.shareBtn.on("click", s.proxy(this.onToggleLayer, this)), this.shareClose.on("click", s.proxy(this.onLayerOutside, this)) }, onToggleLayer: function() { this.shareLayerCont.is(":visible") ? this.onLayerOutside() : (this.shareLayerCont.show(), this.wrap.on("mousedownoutside focusoutside", s.proxy(this.onLayerOutside, this))) }, onLayerOutside: function() { this.shareLayerCont.hide(), this.wrap.off("mousedownoutside focusoutside", s.proxy(this.onLayerOutside, this)) } };
        return {
            init: function(e, s) {
                (this.container = e).size() && t.init()
            }
        }
    }(), s(function() { t.shareThis.init(s("body")) })
}(window, window.jQuery);
! function(i, e) {
    "use strict";
    "undefined" == typeof i.smg && (i.smg = {}), "undefined" == typeof i.smg.aem && (i.smg.aem = {}), "undefined" == typeof i.smg.aem.components && (i.smg.aem.components = {}), "undefined" == typeof i.smg.aem.components.common && (i.smg.aem.components.common = {});
    var t = (i.smg.aem.varStatic, i.smg.aem.util, i.smg.aem.customEvent, i.smg.aem.components.common);
    t.mailCompletion = function() {
        var i = { responsiveSize: 768, isSupportTransform: function() { return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style }(), windowWidth: function() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } },
            t = { init: function(t) { this.obj = e(t), this.setLayout(), this.layerSize.init(this), i.isSupportTransform ? (this.resizeFunc(), this.bindResizeEventHandlers()) : this.layerView(!0) }, setLayout: function() { this.obj.css({ left: "50%", top: "50%" }) }, bindResizeEventHandlers: function() { e(window).on("resize", e.proxy(this.resizeFunc, this)) }, layerView: function() { this.obj.css({ left: "50%", "margin-left": -(this.layerSize.w() / 2), "margin-top": -(this.layerSize.h() / 2) }) }, resizeFunc: function() { this.layerView(!0) }, layerSize: { init: function(i) { this.obj = i.obj }, w: function() { return this.obj.outerWidth() }, h: function() { return this.obj.outerHeight() } } },
            n = {
                init: function() { this.opts(), this.setElements(), this.bindEventHandlers() },
                opts: function() { this.delay = 100 },
                setElements: function() { this.menuLayer = e(".mail-completion"), this.closeBtn = this.menuLayer.find(".js-mail-completion-close") },
                bindEventHandlers: function() { this.clickListener(), e(window).on("resize", e.proxy(this.resizeFunc, this)) },
                clickListener: function() {
                    var i = this;
                    i.clickBtn = e(this), i.menuLayer.is(":visible") ? i.offDisplay(i.clickBtn) : (i.onDisplay(), t.init(".mail-completion")), this.closeBtn.on("click", function(e) { e.preventDefault(), i.offDisplay(i.clickBtn) })
                },
                onLayer: function() { this.menuLayer.stop().fadeIn(this.delay).attr("tabIndex", 0).focus(), e(".s-layer-dimmed").show(), e("body").addClass("body-noscroll"), setTimeout(e.proxy(function() { this.menuLayer.on("keydown keyup", e.proxy(function(i) { "keydown" === i.type ? (16 === i.keyCode || 16 === i.which) && (this.keyShift = !0) : "keyup" === i.type && (16 === i.keyCode || 16 === i.which) && (this.keyShift = !1) }, this)), this.menuLayer.on("clickoutside", e.proxy(function() { this.closeBtn.trigger("click") }, this)), this.menuLayer.on("focusoutside", e.proxy(function() { this.keyShift ? this.closeBtn.focus() : this.menuLayer.focus() }, this)) }, this), 100) },
                offLayer: function(i) { this.menuLayer.stop().fadeOut(this.delay), i && i.focus(), e(".s-layer-dimmed").hide(), e("body").removeClass("body-noscroll") },
                onDisplay: function() { this.onLayer() },
                offDisplay: function(i) { this.menuLayer.off("keydown keyup clickoutside focusoutside"), this.offLayer(i) },
                resizeFunc: function() {}
            };
        return { init: function() { n.init() } }
    }()
}(window, window.jQuery);
! function(n, o) {
    var i = n.smg.aem.components.common;
    o(".js-mail-completion-layer").on("click", function() { return i.mailCompletion.init(), !1 })
}(window, window.jQuery);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.common && (e.smg.aem.components.common = {});
    var n = (e.smg.aem.varStatic, e.smg.aem.util, e.smg.aem.customEvent, e.smg.aem.components.common),
        i = t("#siteCode").val(),
        o = "bu_" + i;
    Granite.I18n.setLocale(i), n.exitModal = function() {
        var e = { responsiveSize: 768, isSupportTransform: function() { return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style }(), windowWidth: function() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } },
            n = { init: function(n) { this.obj = t(n), this.setLayout(), this.layerSize.init(this), e.isSupportTransform ? (this.resizeFunc(), this.bindResizeEventHandlers()) : this.layerView(!0) }, setLayout: function() { this.obj.css({ left: "50%", top: "50%" }) }, bindResizeEventHandlers: function() { t(window).on("resize", t.proxy(this.resizeFunc, this)) }, layerView: function() { this.obj.css({ left: "50%", "margin-left": -(this.layerSize.w() / 2), "margin-top": -(this.layerSize.h() / 2) }) }, resizeFunc: function() { this.layerView(!0) }, layerSize: { init: function(e) { this.obj = e.obj }, w: function() { return this.obj.outerWidth() }, h: function() { return this.obj.outerHeight() } } },
            i = {
                init: function() { this.opts(), this.setElements(), this.bindEventHandlers() },
                opts: function() { this.delay = 100 },
                setElements: function() { this.menuWrap = t(".js-exit-modal-alert"), this.menuLayer = t(".exit-modal"), this.closeBtn = this.menuLayer.find(".js-exit-modal-close") },
                setElementsReload: function() { this.menuWrap = t(".js-exit-modal-alert-Reload"), this.menuLayer = t(".exit-modal"), this.closeBtn = this.menuLayer.find(".js-exit-modal-close") },
                bindEventHandlers: function() { this.menuWrapClickListener(), t(window).on("resize", t.proxy(this.resizeFunc, this)) },
                menuWrapClickListener: function() {
                    var e = this;
                    this.menuWrap.on("click", function(i) {
                        i.preventDefault(), e.clickBtn = t(this);
                        var s = e.clickBtn.data("href"),
                            a = e.clickBtn.data("desc"),
                            r = e.clickBtn.data("modalflag"),
                            c = e.clickBtn.data("sericeo");
                        if ("undefined" != typeof s && "undefined" == typeof r && (-1 == s.indexOf("//") || s.indexOf("samsung.com") > -1)) window.open(s);
                        else {
                            e.menuLayer.is(":visible") ? e.offDisplay(e.clickBtn) : (e.menuLayer.find(".exit-modal__dec").html(e.clickBtn.data("description")), e.menuLayer.find(".js-exit-modal-continue").attr("href", e.clickBtn.data("linkurl")), e.onDisplay(), n.init(".exit-modal"));
                            var d = s.split("/"),
                                u = "samsungha.com";
                            d.length > 0 && (s.indexOf("//") > -1 ? u = d[2] : (u = window.location.href, u = u.substring(u.indexOf("//") + 2, u.indexOf("/content/samsung")))), u = u.replace("www.", ""), d = u.split("?"), u = d[0];
                            var m = Granite.I18n.get("You are entering {0}", "<em>" + u + "</em>", o),
                                l = Granite.I18n.get("By selecting CONTINUE, you will be entering a website of {0}", "<em>" + u + "</em>", o) + "<br/>" + Granite.I18n.get("{0} website is governed by its own privacy policy, level of security and terms of use", "<em>" + u + "</em>", o);
                            "undefined" != typeof a && "" != a && (l = a), "undefined" != typeof c && (m = "본 콘텐츠는 비즈니스 회원 또는 비즈니스 정보서비스 신청고객에게 제공하고 있습니다. 회원 또는 서비스 신청고객 인증 화면으로 이동하시겠습니까?", l = "[계속] 버튼을 클릭하시면, 비즈니스 정보 서비스 인증화면으로 이동합니다."), t(".exit-modal__title").html(m), t(".exit-modal__dec").html(l), t("#exit-modal_01_01").attr("href", s)
                        }
                    }), this.menuLayer.on("click", ".js-exit-modal-close", function(t) { t.preventDefault(), e.offDisplay(e.clickBtn) }), this.menuLayer.on("click", ".s-ico-new-window", function() { e.offDisplay(e.clickBtn) })
                },
                onLayer: function() { this.menuLayer.stop().fadeIn(this.delay).attr("tabIndex", 0).focus(), t(".s-layer-dimmed").show(), t("body").addClass("body-noscroll"), setTimeout(t.proxy(function() { this.menuLayer.on("keydown keyup", t.proxy(function(e) { "keydown" === e.type ? (16 === e.keyCode || 16 === e.which) && (this.keyShift = !0) : "keyup" === e.type && (16 === e.keyCode || 16 === e.which) && (this.keyShift = !1) }, this)), this.menuLayer.on("clickoutside", t.proxy(function() { this.closeBtn.trigger("click") }, this)), this.menuLayer.on("focusoutside", t.proxy(function() { this.keyShift ? this.closeBtn.focus() : this.menuLayer.focus() }, this)) }, this), 100) },
                offLayer: function(e) { this.menuLayer.stop().fadeOut(this.delay), e && e.focus(), t(".s-layer-dimmed").hide(), this.menuLayer.find(".exit-modal__dec").html(""), this.menuLayer.find(".js-exit-modal-continue").attr("href", "#"), t("body").removeClass("body-noscroll") },
                onDisplay: function() { this.onLayer() },
                offDisplay: function(e) { this.menuLayer.off("keydown keyup clickoutside focusoutside"), this.offLayer(e) },
                resizeFunc: function() {}
            };
        return i.init(), { reinit: function() { i.opts(), i.setElementsReload(), i.bindEventHandlers() } }
    }()
}(window, window.jQuery);
! function(t, n) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var e = (t.smg.aem.varStatic, t.smg.aem.util, t.smg.aem.customEvent, t.smg.aem.components.common);
    e.containerLayer = function() {
        var e = { responsiveSize: 768, isSupportTransform: function() { return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style }(), windowWidth: function() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } },
            i = { init: function(t, i) { this.obj = n(t), this.btnOffTop = n(i).offset().top, this.setLayout(), this.layerSize.init(this), e.isSupportTransform ? (this.resizeFunc(), this.bindResizeEventHandlers()) : this.layerView(!0) }, setLayout: function() { this.obj.css({ left: "50%", top: "50%" }) }, bindResizeEventHandlers: function() { n(window).on("resize", n.proxy(this.resizeFunc, this)) }, layerView: function() { this.obj.css({ left: "50%", top: this.btnOffTop + "px" }) }, resizeFunc: function() { this.layerView(!0) }, layerSize: { init: function(t) { this.obj = t.obj }, w: function() { return this.obj.outerWidth() }, h: function() { return this.obj.outerHeight() } } },
            o = {
                init: function() { this.opts(), this.setElements(), this.bindEventHandlers() },
                opts: function() { this.delay = 100 },
                setElements: function() { this.menuLayer = n(".container-layer"), this.btn = n(".js-container-layer"), this.closeBtn = this.menuLayer.find(".js-container-layer-close") },
                bindEventHandlers: function() {
                    var t = this;
                    t.clickBtn = n(this), this.btn.click(function(e) { e.preventDefault(), t.clickListener(n(this)) }), n(window).on("resize", n.proxy(this.resizeFunc, this))
                },
                clickListener: function(t) {
                    var n = this,
                        e = t;
                    n.onDisplay(e), i.init(".container-layer", e), this.closeBtn.click(function(t) { t.preventDefault(), n.offDisplay(n.clickBtn) })
                },
                onLayer: function(e) {
                    var i = this,
                        o = n(t).scrollTop(),
                        s = e.data(),
                        r = s.popOption.width,
                        c = s.href;
                    n.ajax({
                        url: c,
                        success: function(t) {
                            var n = i.menuLayer.find(".container-layer__content").html(t).find("#wrap").html();
                            i.menuLayer.find(".container-layer__content").html(n)
                        }
                    }), this.menuLayer.stop().css("max-width", r + "px").fadeIn(this.delay).attr("tabIndex", 0).focus(), n(".s-layer-dimmed").show(), n(t).scrollTop(o), setTimeout(n.proxy(function() { this.menuLayer.on("keydown keyup", n.proxy(function(t) { "keydown" === t.type ? (16 === t.keyCode || 16 === t.which) && (this.keyShift = !0) : "keyup" === t.type && (16 === t.keyCode || 16 === t.which) && (this.keyShift = !1) }, this)), this.menuLayer.on("clickoutside", n.proxy(function() { this.closeBtn.trigger("click") }, this)), this.menuLayer.on("focusoutside", n.proxy(function() { this.keyShift ? this.closeBtn.focus() : this.menuLayer.focus() }, this)) }, this), 100)
                },
                offLayer: function(t) { this.menuLayer.stop().fadeOut(this.delay).css("max-width", ""), t && t.focus(), n(".s-layer-dimmed").hide() },
                onDisplay: function(t) { this.onLayer(t) },
                offDisplay: function() {
                    var t = this;
                    this.menuLayer.off("keydown keyup clickoutside focusoutside"), this.offLayer(t.btn)
                },
                resizeFunc: function() {}
            };
        return { init: function() { o.init() } }
    }(), n(function() { e.containerLayer.init(n("body")) })
}(window, window.jQuery);
! function(i, t) {
    "use strict";

    function e(i) {
        i += "=";
        var t = document.cookie,
            e = t.indexOf(i),
            n = "";
        if (-1 != e) { e += i.length; var s = t.indexOf(";", e); - 1 == s && (s = t.length), n = t.substring(e, s) }
        return unescape(n)
    }

    function n(i) { for (var t = window.location.search.substring(1), e = t.split("&"), n = 0; n < e.length; n++) { var s = e[n].split("="); if (s[0] == i) return s[1] } }("edit" != e("wcmmode") || "disabled" == n("wcmmode")) && (t.each(t(".gb-footer__col4-wrap"), function() {
        if ("gb-footer__col4-wrap gb-footer__about-us" == t(this).attr("class")) t(this).find("ul").find("li").size() < 1 && t(this).hide();
        else {
            var i = t(this).find("strong").text();
            i = t.trim(i), t(this).find("ul").find("li").size() < 1 && ("" == i || "Please register data" == i && "Title" == i) && t(this).hide()
        }
    }), t.each(t(".gb-footer__col4-wrap-list-sns"), function() {
        var i = t(this).find("strong").text();
        i = t.trim(i), t(this).find("ul").find("li").size() < 1 && ("" == i || "Please register data" == i && "Title" == i) && t(this).hide()
    }))
}(window, window.jQuery);
! function(e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" == typeof e.smg.aem.components && (e.smg.aem.components = {}), "undefined" == typeof e.smg.aem.components.common && (e.smg.aem.components.common = {});
    var i = (e.smg.aem.varStatic, e.smg.aem.util),
        n = e.smg.aem.components.common;
    n.footer = function() {
        var n = { wrap: ".gb-footer", popSelector: ".popWin", backToTopSelecotr: ".gb-footer__btn-top", backToTopSpeed: 1e3, evt: { connect: {}, responsiveMgr: { responsiveChange: "responsiveChange" } } },
            s = {
                init: function() { this.constants(), this.bindEvts(), this.defSetup() },
                constants: function() { this.device = { mobile: { support: !0, name: "mobile", width: 768 }, tablet: { support: !1, name: "tablet", width: 1280 }, gnb: { support: !0, name: "gnb", width: 1024 }, desktop: { support: !0, name: "desktop" } }, this.evt = n.evt.responsiveMgr },
                bindEvts: function() { this.resizeListener() },
                defSetup: function() { this.responsiveChange() },
                resizeListener: function() {
                    var i = this;
                    t(e).on("resize", function() { i.responsiveChange() })
                },
                responsiveChange: function() {
                    var i, s = e.document,
                        o = e.innerWidth || s.documentElement.clientWidth || s.body.clientWidthp;
                    if (this.device.mobile.support && o <= this.device.mobile.width) i = this.device.mobile.name;
                    else if (this.device.tablet.support && o <= this.device.tablet.width) i = this.device.tablet.name;
                    else if (this.device.gnb.support && o <= this.device.gnb.width) i = this.device.gnb.name;
                    else {
                        if (!this.device.desktop.support) return;
                        i = this.device.desktop.name
                    }
                    var r = { responsiveName: "" };
                    this.responsiveName ? this.responsiveName !== i && (this.responsiveName = i, r.responsiveName = this.responsiveName, t(n.evt.connect).trigger(this.evt.responsiveChange, r)) : (this.responsiveName = i, r.responsiveName = this.responsiveName, t(n.evt.connect).trigger(this.evt.responsiveChange, r))
                }
            },
            o = {
                init: function() { this.constants(), this.setElmts(), this.bindEvts() },
                constants: function() { this.delay = 300, this.activeClassName = "active" },
                setElmts: function() { this.wrap = t(n.wrap).find(".gb-footer__nav-link"), this.list = this.wrap.find(".gb-footer__col4-wrap"), this.btn = this.list.find("> strong > a") },
                bindEvts: function() { this.onTitleClickListener(), this.resetSlideListener(), t(n.evt.connect).on(n.evt.responsiveMgr.responsiveChange, t.proxy(this.resetSlideListener, this)) },
                onTitleClickListener: function() {
                    function e(e) { e.attr("title", e.text()) }
                    var i, n = this;
                    this.btn.each(function() { e(t(this)) }), this.btn.on("click", function(o) { o.preventDefault(), t(o.currentTarget).parent(".no-accordion").length <= 0 && s.responsiveName != s.device.mobile.name || (i = t(o.currentTarget).parents(".gb-footer__col4-wrap"), i.hasClass(n.activeClassName) ? (n.offSlide(i), e(t(this))) : (n.onSlide(i), e(t(this)))) })
                },
                resetSlideListener: function() {
                    var e = this;
                    e.offSlideAll()
                },
                onActive: function(e) { e.addClass(this.activeClassName) },
                offActive: function(e) { e.removeClass(this.activeClassName) },
                onSlide: function(e, t) {
                    var i = this;
                    t = t || this.delay, e.find(".gb-footer__col4").slideDown({ duration: t, complete: function() { i.onActive(e) } })
                },
                offSlide: function(e, t) {
                    var i = this;
                    t = t || this.delay, e.find(".gb-footer__col4").slideUp({ duration: t, complete: function() { i.offActive(e) } })
                },
                offSlideAll: function(e, t) {
                    e = e || this.delay;
                    this.list.removeClass(this.activeClassName), this.list.find(".gb-footer__col4").css("display", ""), t && "function" == typeof t && t()
                }
            };
        return {
            init: function(e, t) {
                (this.container = e).size() && (this.opts = i.def(n, t || {}), this.setElements(), this.setBindEvents(), s.init(), o.init())
            },
            setElements: function() { this.agent = navigator.userAgent.toLowerCase(), this.screenW = screen.availWidth, this.screenH = 0, this.defaultPopupWidth = 600, this.defaultPopupHeight = 800, this.screenH = -1 != this.agent.indexOf("chrome") ? screen.availHeight - 56 : -1 != this.agent.indexOf("firefox") ? screen.availHeight - 63 : screen.availHeight - 71, this.htmlBody = t("html, body"), this.wrap = t(this.opts.wrap), this.popSelector = this.wrap.find(this.opts.popSelector), this.backToTopSelecotr = this.wrap.find(this.opts.backToTopSelecotr).find("a") },
            setBindEvents: function() {
                var e = this;
                this.popSelector.each(function() { t(this).on("click", t.proxy(e.windowPopup, e)) }), this.backToTopSelecotr.on("click", t.proxy(e.backToTopAnimate, e))
            },
            windowPopup: function(i) {
                i.preventDefault();
                var n = t(i.currentTarget),
                    s = n.attr("href"),
                    o = n.data("pop-options"),
                    r = [],
                    a = this.getPopupWidth(o.width),
                    c = this.getPopupHeight(o.height);
                r = this.getPopupPosition(a, c), r[0] = o.width > a ? 0 : r[0], r[1] = o.height > c ? 0 : r[1];
                var h = "left=" + r[0];
                h += ", top=" + r[1], h += ", width=" + a, h += ", height=" + c, h += ",scrollbars=yes", h += ",location=no", h += ",menubar=no", h += ",titlebar=no", h += ",toolbar=no", h += ",status=no";
                var p = window.open(s, "", h);
                t(e).focus() && p.focus()
            },
            getPopupHeight: function(e) { var t = parseInt(e); return t >= this.screenH ? t = this.screenH : (!e || 0 > t) && (t = this.defaultPopupHeight), t },
            getPopupWidth: function(e) { var t = parseInt(e); return t >= this.screenW ? t = this.screenW : (!e || 0 > t) && (t = this.defaultPopupWidth), t },
            getPopupPosition: function(e, t) { var i = []; return i[0] = Math.round((screen.availWidth - e) / 2), i[1] = Math.round((screen.availHeight - t) / 2), i },
            backToTopAnimate: function() { var e = this; return this.htmlBody.animate({ scrollTop: 0 }, e.opts.backToTopSpeed), !1 },
            GetIEVersion: function() {
                var e = window.navigator.userAgent,
                    t = e.indexOf("MSIE");
                return t > 0 ? parseInt(e.substring(t + 5, e.indexOf(".", t))) : navigator.userAgent.match(/Trident\/7\./) ? 11 : 0
            }
        }
    }(), t(function() { n.footer.init(t("body")) })
}(window, window.jQuery);

function getSearchDomain(t, e) { var o; return o = t.indexOf("org-ap") > -1 || t.indexOf("www.samsung.com") > -1 ? "//www.samsung.com/" : e }! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var o = (t.smg.aem.varStatic, t.smg.aem.util, t.smg.aem.customEvent, t.smg.aem.components.common, e("#siteCode").val());
    Granite.I18n.setLocale(o);
    var l = e("#searchDomain").val();
    e(".countrySelect").change(function() {
        e("#indoorUnit .lbl-txt-area").attr("style", "display:block"), e("#indoorUnit .sub-radio-box li").attr("style", "display:none"), e(".outdoorSelect option:eq(0)").removeAttr("selected"), e(".outdoorSelect option:eq(0)").attr("selected", "selected"), e(".modelList option:eq(0)").removeAttr("selected"), e(".modelList option:eq(0)").attr("selected", "selected");
        var t = e(this).val();
        "Country(Language)" == t ? (e("#outdoorUnit .hp-slt-box").attr("style", "display:none"), e("#outdoorUnit .lbl-txt-area").attr("style", "display:block"), e("#modelSelect .hp-slt-box").attr("style", "display:none"), e("#modelSelect .lbl-txt-area").attr("style", "display:block")) : (e("#outdoorUnit .lbl-txt-area").attr("style", "display:none"), e("#outdoorUnit .hp-slt-box").removeAttr("style"), e("#modelSelect .hp-slt-box").removeAttr("style"), e("#modelSelect .lbl-txt-area").attr("style", "display:none"), e(".outdoorSelect").find("option").each(function() {
            var o = e(this).attr("name");
            t == o || "" == o || void 0 == o ? e(this).attr("style", "height: 100px; overflow: scroll; display: block;") : e(this).attr("style", "height: 100px; overflow: scroll; display: none;")
        }))
    }), e(".outdoorSelect").change(function() {
        var t = e(this).val(),
            o = e(".outdoorSelect option:selected").attr("name");
        "Outdoor Unit" == t ? e("#indoorUnit .lbl-txt-area").attr("style", "display:block") : e("#indoorUnit .lbl-txt-area").attr("style", "display:none"), e("#indoorUnit .lbl-sub-slt").find("input[type='radio']").each(function() {
            var l = e(this).val().split("_")[0],
                a = e(this).val().split("_")[2];
            o == l && t == a ? e(this).parent().removeAttr("style") : e(this).parent().attr("style", "display:none")
        })
    }), e(".energyLabelBtn").click(function() {
        l = getSearchDomain(window.location.href, l);
        var t = e("#indoorUnit input:radio[name='sub-radio-item']:checked").val(),
            o = e(".countrySelect option:selected").attr("name");
        if ("Country(Language)" == e(".countrySelect option:selected").val()) e(".countryAlert").attr("style", "display:block"), e(".outdoorAlert").attr("style", "display:none"), e(".indoorAlert").attr("style", "display:none");
        else if ("Outdoor Unit" == e(".outdoorSelect option:selected").val()) e(".outdoorAlert").attr("style", "display:block"), e(".countryAlert").attr("style", "display:none"), e(".indoorAlert").attr("style", "display:none");
        else if (void 0 == t) e(".indoorAlert").attr("style", "display:block"), e(".outdoorAlert").attr("style", "display:none"), e(".countryAlert").attr("style", "display:none");
        else if (void 0 != t) {
            e(".indoorAlert").attr("style", "display:none"), e(".outdoorAlert").attr("style", "display:none"), e(".countryAlert").attr("style", "display:none");
            var a = t.split("_")[0],
                n = t.split("_")[1],
                r = t.split("_")[2],
                s = l + "global/energylabel/fichePopup?saClassCd=FIC&mdlGrpId=" + n + "&saAreaCd=" + a + "&outDoorMdlId=" + r + "&siteCd=" + o;
            window.open(s, "", "width=850, height=600, menubar=false")
        }
    }), e(".modelBtn").click(function() {
        l = getSearchDomain(window.location.href, l);
        var t = e(".countrySelect option:selected").attr("name");
        if ("Country(Language)" == e(".countrySelect option:selected").val()) e(".modelCountryAlert").attr("style", "display:block"), e(".modelAlert").attr("style", "display:none");
        else if ("Model" == e(".modelList option:selected").val()) e(".modelAlert").attr("style", "display:block"), e(".modelCountryAlert").attr("style", "display:none");
        else {
            var o = e(".modelList option:selected").attr("name"),
                a = e(".modelList option:selected").attr("value"),
                n = e(".modelList option:selected").text(),
                r = l + "global/energylabel/fanPopup?saClassCd=FAN&mdlGrpId=" + a + "&saAreaCd=" + o + "&fanMdlId=" + n + "&siteCd=" + t;
            window.open(r, "", "width=850, height=600, menubar=false")
        }
    }), e(document).ready(function() {
        var t = e(".countrySelect option:selected").val();
        e(".outdoorSelect").find("option").each(function() {
            var o = e(this).attr("name");
            t == o || "" == o || void 0 == o ? e(this).attr("style", "height: 100px; overflow: scroll; display: block;") : e(this).attr("style", "height: 100px; overflow: scroll; display: none;")
        }), "Country(Language)" == t && (e("#modelSelect .hp-slt-box").attr("style", "display:none"), e("#modelSelect .lbl-txt-area").attr("style", "display:block"))
    })
}(window, window.jQuery);
! function(e, n) {
    "use strict";

    function t(e) { var n = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; return "" !== e && "undefined" !== e && n.test(e) }

    function i() { u.find(".input-wrap input[type=text]").val(""), u.find("input[type='checkbox']").each(function() { n(this).is(":checked") && n(this).next().click() }), f.hide() }

    function a(e) {
        var n = e.closest(".check__wrap__in").siblings(".invalid-notice"),
            t = e.attr("data-required");
        return "undefined" == typeof t || "Y" !== t || e.is(":checked") ? (n.hide(), !0) : (n.show(), !1)
    }

    function c() { var e = !0; return u.find("input[type='checkbox']").each(function() { a(n(this)) || (e = !1) }), "it" === r && (e = !0), e }

    function o(e, n, t, i, a) {
        var c = parseInt((window.screen.availWidth - t) / 2),
            o = parseInt((window.screen.availHeight - i) / 2),
            s = ", status=no, location=no, scrollbars=" + (1 == a ? "yes" : "no") + ", resizable=no",
            r = "width=" + t + ",height=" + i + ",left=" + c + ",top=" + o + s,
            u = window.open(e, n, r);
        return u.focus(), u
    }

    function s(e, t, a, o) {
        if (c()) {
            var s = grecaptcha.getResponse(newsRecaptcha),
                r = "/aemapi/business/common/recaptchacheck",
                f = {};
            f.userSender = e, f.siteCode = n("meta[name=sitecode]").attr("content"), f.formCode = "SUBS", f.contactName = t, f.ContactFirstName = a, f.CustomerName = o, u.find("input[type='checkbox']").each(function() { f[n(this).attr("name")] = "checked" === n(this).attr("checked") ? "on" : "off" }), f["g-recaptcha-response"] = s, f.grecaptcha = "grecaptcha", n.ajax({
                type: "post",
                url: r,
                data: f,
                success: function(e) {
                    if ("200" == e.response.statusCode) {
                        i(), n(".mail-completion__title").html(h), n(".mail-completion__dec").html(v);
                        var t = window.smg.aem.components.common;
                        t.mailCompletion.init(), grecaptcha.reset(newsRecaptcha)
                    } else grecaptcha.reset(newsRecaptcha), u.find(".invalid-recaptcha").show()
                },
                erorr: function(e) {}
            })
        }
    }
    var r = n("meta[name=sitecode]").attr("content"),
        u = n(".ready-to-buy"),
        f = u.find(".invalid-notice"),
        d = f.eq(1),
        m = f.eq(2),
        p = f.eq(0),
        l = f.eq(3);
    "fr" === r && (l = f.eq(2));
    var h = u.find("input[name=successMessageTitle]").val(),
        v = u.find("input[name=successMessageTitleDesc]").val();
    n(function() {
        u.find(".btn-submit-box button").on("click", function() {
            var e = !0,
                i = u.find(".sign-in__form-text").eq(0).val(),
                a = u.find("input[name=lastName]").val(),
                o = u.find("input[name=firstName]").val(),
                h = u.find("input[name=company]").val();
            if (f.hide(), ("" === n.trim(a) || "" === n.trim(o)) && (e = !1, p.show()), "" === n.trim(h) && (e = !1, l.show()), t(i) ? "fr" !== r && i.indexOf("@samsung.com") > -1 && (e = !1, m.show()) : (e = !1, d.show()), c() || (e = !1), e)
                if ("fr" !== r && "it" !== r && "au" !== r && "sg" !== r && "be" !== r && "be_fr" !== r && "nl" !== r) s(i, a, o, h);
                else if ("sg" === r || "be" === r || "be_fr" === r || "nl" === r) {
                var v = u.find("input[name=SUBS_105]").val();
                u.find("input[name=EmailOpt-in]").val(v), u.find("input[name=Optin]").val(v), u.find("input[name=PrivacyPolicy]").val(v), n("#form242").submit()
            } else {
                var v = u.find("input[name=subscribe]").val();
                u.find("input[name=EmailOpt-in]").val(v), u.find("input[name=Optin]").val(v), u.find("input[name=PrivacyPolicy]").val(v), n("#form242").submit()
            }
        }), n(document).on("click", "*[data-role=ui-btn-mailContactUs]", function() {
            var e = n(this).data("popurl");
            o(e, "contactus", 674, 768, !0)
        })
    })
}(window, window.jQuery);
! function(t, i) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var e = (t.smg.aem.varStatic, t.smg.aem.util),
        s = t.smg.aem.components.common;
    s.readyToBy = function() {
        var s = { wrap: ".ready-to-buy__wrap", columWrap: ".in__content", columTitle: ".c-title", columDec: ".c-dec" };
        return {
            init: function(t, i) {
                (this.container = t).size() && (this.opts = e.def(s, i || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() { this.wrap = this.container.find(this.opts.wrap), this.columWrap = this.wrap.find(this.opts.columWrap), this.columTitle = this.columWrap.find(this.opts.columTitle), this.columDec = this.columWrap.find(this.opts.columDec) },
            setBindEvents: function() { this.txtWrapHeight(), i(t).on("resize", i.proxy(this.onResizeListener, this)) },
            onResizeListener: function() { this.txtWrapHeight() },
            txtWrapHeight: function() {
                var e = this,
                    s = 0,
                    o = 0;
                i(t).width() <= 768 ? (e.columTitle.css("height", ""), e.columDec.css("height", "")) : (e.columWrap.each(function() { s <= i(this).find(e.opts.columTitle).height() && (s = i(this).find(e.opts.columTitle).height()), o <= i(this).find(e.opts.columDec).height() && (o = i(this).find(e.opts.columDec).height()) }), e.columTitle.css("height", s), e.columDec.css("height", o))
            }
        }
    }(), i(function() { s.readyToBy.init(i("body")) })
}(window, window.jQuery);
! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var a = (t.smg.aem.varStatic, t.smg.aem.util, t.smg.aem.customEvent, t.smg.aem.components.common),
        n = t.smg.aem.accessibility;
    a.contactUsAuthInit = function() {
        return {
            init: function(t, a) {
                function n(t) {
                    var e = "checkTrue",
                        a = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/,
                        n = /^[a-zA-Z0-9\-\.\_]+\@[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,5})$/;
                    return !a.test(t) && n.test(t) ? (e = "emailCheckTrue", t.indexOf("samsung.com") > -1 && (e = "samsungMailFalse")) : e = "emailCheckFalse", e
                }

                function i(t) {
                    var e = t.replace(/\+/g, "").replace(/-/g, ""),
                        a = /^[-0-9]*$/;
                    return a.test(e) ? !0 : !1
                }

                function c() {
                    var t, a = !0,
                        n = new Array;
                    return f.find("input, select, textarea").not("input[type='hidden']").each(function(i) { t = e(this).attr("data-id"), "undefined" != typeof t && (("TS02" != t || b(e(this))) && ("TT03" != t || x(e(this))) ? v(e(this)) || (a = !1, n.push(e(this).attr("id"))) : (a = !1, e(this).focus())) }), e("#" + n[0]).focus(), a
                }

                function s() { e("form").each(function() { "input__field__wrap" == this.name && this.reset() }), e(".notice").hide(), e(".sign-in__input-box.add__notice").removeClass("add__notice"), e(".input__field__wrap input[type='checkbox']").each(function() { e(this).is(":checked") && e(this).next().click() }), h() }

                function o() {
                    if (c()) {
                        var t = "https://" + window.location.host + "/aemapi/business/common/captchacheck",
                            a = {};
                        m.find("select,textarea,input[name]").not("[disabled]").each(function() { a[e(this).attr("name")] = e(this).val(), "checkbox" == this.type && (a[e(this).attr("name")] = "checked" == e(this).attr("checked") ? "on" : "off") }), a.captchaCookieCode = p, e.ajax({ type: "post", url: t, data: a, dataType: "json", xhrFields: { withCredentials: !0 }, success: function(t) { d(t, a) }, erorr: function(t) {} })
                    } else h()
                }

                function d(t, a) { var n = window.smg.aem.components.common; "304" == t.response.statusCode ? (h(), m.find(".invalid-captcha").show(), e("input[name='captchaAns']").focus()) : (e(".mail-completion__title").text(e("#successTitle").val()), e(".mail-completion__dec").text(e("#successMessageDesc").val()), m.find(".layer__close").trigger("click"), e(".js-contact-mail-close").trigger("click"), n.mailCompletion.init(), s()) }

                function r() {
                    if (c()) {
                        var t = grecaptcha.getResponse(conRecaptcha),
                            a = "/aemapi/business/common/recaptchacheck",
                            n = {};
                        e(".contact-mail-form__layer .contact-mail-form__contents").find("select,textarea,input[name]").not("[disabled]").each(function() { n[e(this).attr("name")] = e(this).val(), "checkbox" == this.type && (n[e(this).attr("name")] = "checked" == e(this).attr("checked") ? "on" : "off") }), n["g-recaptcha-response"] = t, n.grecaptcha = "grecaptcha", e.ajax({
                            type: "post",
                            url: a,
                            data: n,
                            success: function(t) {
                                if ("200" == t.response.statusCode) {
                                    var a = window.smg.aem.components.common;
                                    e(".mail-completion__title").text(e("#successTitle").val()), e(".mail-completion__dec").text(e("#successMessageDesc").val()), m.find(".layer__close").trigger("click"), e(".js-contact-mail-close").trigger("click"), a.mailCompletion.init(), s(), grecaptcha.reset(conRecaptcha)
                                } else grecaptcha.reset(conRecaptcha), m.find(".invalid-recaptcha").show()
                            },
                            erorr: function(t) {}
                        })
                    }
                }

                function l(t) { m.find("#authaudiocatpch").html(' <bgsound src="' + t + '">') }

                function u() {
                    var t = new Date,
                        e = "http://" + window.location.host + "/aemapi/business/common/simpleaudiocapcha." + p + ".Y?" + t.getTime(),
                        a = navigator.userAgent.toLowerCase();
                    if ("Netscape" == navigator.appName && a.indexOf("trident") >= 0) {
                        var n = '<object type="audio/x-wav" data="' + e + '" width="0" height="0"><param name="src" value="' + e + '"/><param name="autostart" value="true" /><param name="controller" value="false" /></object>';
                        m.find("#authaudiocatpch").html(n)
                    } else if (a.indexOf("msie") >= 0) l(e + "&agent=msie");
                    else try {
                        var i = new Audio(e);
                        i.load(), i.play()
                    } catch (c) { l(e) }
                }

                function h() {
                    var t = new Date;
                    m.find("img#con-us-auth-captcha").last().attr("src", "https://" + window.location.host + "/aemapi/business/common/simplecapcha." + p + ".Y?" + t.getTime())
                }
                var m, p = "contact_us_" + t;
                "-1" != t ? (m = e("div[name='contactus-landing-top']").eq(t), m.find(".check__act").each(function(a) { e(this).attr("data-acc-checkbox", e(this).data("acc-checkbox") + "_" + t), e(this).parent().find("input[type='checkbox']").attr("data-acc-checkbox-target", e(this).parent().find("input[type='checkbox']").data("acc-checkbox-target") + "_" + t) })) : m = e("div[name='contactus-landing-top']");
                var f = m.find(".contectus-landing__in .input__field__wrap"),
                    g = m.find("input[name='siteCode']").val(),
                    _ = "bu_" + g;
                Granite.I18n.setLocale(g), f.find("textarea").on("input", function() {
                    var t = e(this).val().length,
                        a = 2e3;
                    e(".length").text("( " + t + " / " + a + " )")
                }), f.find("select").on("change", function() {
                    var t = e(this).attr("name"),
                        a = e(this).find("option:selected"),
                        n = e(this).parent().find("[name=" + t + "_T]"),
                        i = e(this).closest(".sign-in__input-box").next().find("input[type=text]");
                    "Y" == a.attr("data-textboxyn") ? (n.attr("disabled", "disabled"), i.attr("name") == t + "_T" && (i.attr("placeholder", a.text()), i.removeAttr("disabled"), i.attr("data-required", "Y"), i.removeAttr("hidden"))) : (n.removeAttr("disabled"), i.attr("name") == t + "_T" && (i.attr("disabled", "disabled"), i.attr("hidden", !0), i.removeAttr("data-required"), e(this).closest(".sign-in__input-box").removeClass("add__notice"), e(this).closest(".sign-in__input-box").next().find(".invalid-notice").hide()), n.val(e(this).val()))
                }), e(".invalid-notice").hide();
                var v = function(t) {
                        var e = !0,
                            a = t.val(),
                            c = t.attr("data-required"),
                            s = t.closest(".sign-in__input-box"),
                            o = s.find(".invalid-notice"),
                            d = s.find(".invalid-captcha");
                        return "undefined" == typeof c || "Y" != c || "undefined" != typeof a && 0 != a.length ? "TT05" != t.attr("data-id") || "emailCheckFalse" != n(t.val()) && "samsungMailFalse" != n(t.val()) ? "TT06" != t.attr("data-id") || i(t.val()) ? (o.hide(), s.removeClass("add__notice")) : (o.text(Granite.I18n.get("Please enter a valid telephone number", "", _)).show(), s.addClass("add__notice"), e = !1) : ("emailCheckFalse" == n(t.val()) ? o.text(Granite.I18n.get("Please enter a valid E-mail address", "", _)).show() : "samsungMailFalse" == n(t.val()) && o.text(Granite.I18n.get("Samsung.com email address is not allowed. Please input other email address.", "", _)).show(), s.addClass("add__notice"), e = !1) : (o.text(Granite.I18n.get("* This field is required", "", _)).show(), d.text(Granite.I18n.get("* Please enter your Captcha Code", "", _)).show(), s.addClass("add__notice"), e = !1), e
                    },
                    x = function(t) {
                        var e = t.parent().find(".invalid-notice"),
                            a = t.attr("data-required");
                        return "undefined" != typeof a && "Y" == a && 0 == t.val().length ? (e.show(), !1) : (e.hide(), !0)
                    },
                    b = function(t) {
                        var e = t.closest(".check__wrap__in").siblings(".invalid-notice"),
                            a = t.attr("data-required");
                        return "undefined" == typeof a || "Y" != a || t.is(":checked") ? (e.hide(), !0) : (e.show(), !1)
                    };
                m.find(".s-mo-full").off().on("click", function() { "cn" === g && c() ? o() : r() }), m.find("button.con-us-auth-audio").unbind("click").click(function() { u() }), m.find("button.con-us-auth-refresh").unbind("click").click(function() { h() }), h()
            }
        }
    }(), e(function() {
        var t = document.getElementsByName("contactus-landing-top");
        if (t.length > 1)
            for (var i = 0; i < t.length; i++) a.contactUsAuthInit.init(i);
        else a.contactUsAuthInit.init("-1");
        n.checkbox.refresh(e("body"))
    })
}(window, window.jQuery);
! function(t, i) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var e = (t.smg.aem.varStatic, t.smg.aem.util, t.smg.aem.customEvent, t.smg.aem.components.common);
    e.contactMail = function() {
        var e = { responsiveSize: 768, isSupportTransform: function() { return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style }(), windowWidth: function() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } },
            n = { init: function(t) { this.obj = i(t), this.setLayout(), this.layerSize.init(this), e.isSupportTransform ? (this.resizeFunc(), this.bindResizeEventHandlers()) : this.layerView(!0) }, setLayout: function() { this.obj.css({ left: "50%", top: "50%" }) }, bindResizeEventHandlers: function() { i(window).on("resize", i.proxy(this.resizeFunc, this)) }, layerView: function(e) { this.obj.css("top", i(t).scrollTop() + (Math.ceil(i(t).outerHeight()) - parseInt(this.layerSize.h())) / 2 + "px") }, resizeFunc: function() { this.layerView(!0) }, layerSize: { init: function(t) { this.obj = t.obj }, w: function() { return this.obj.outerWidth() }, h: function() { return this.obj.outerHeight() } } },
            o = { init: function(t) { this.obj = i(t), this.setLayout(), this.layerSize.init(this), e.isSupportTransform ? (this.resizeFunc(), this.bindResizeEventHandlers()) : this.layerView(!0) }, setLayout: function() { this.obj.css({ left: "50%", top: "50%" }) }, bindResizeEventHandlers: function() {}, layerView: function() { Math.ceil(i("body").outerHeight()) - i(t).scrollTop() >= parseInt(this.layerSize.h()) ? this.obj.css("top", i(t).scrollTop() + "px") : (this.obj.css("top", Math.ceil(i("body").outerHeight()) - parseInt(this.layerSize.h()) + "px"), i(t).scrollTop(Math.ceil(i("body").outerHeight()) - parseInt(this.layerSize.h()))) }, resizeFunc: function() { this.layerView(!0) }, layerSize: { init: function(t) { this.obj = t.obj }, w: function() { return this.obj.outerWidth() }, h: function() { return this.obj.outerHeight() } } },
            s = {
                init: function(t) { this.opts(), this.setElements(), this.bindEventHandlers(t) },
                opts: function() { this.delay = 100 },
                setElements: function() { this.menuLayer = i(".contact-icon"), this.closeBtn = this.menuLayer.find(".js-contact-mail-close"), this.conactMailBtn = this.menuLayer.find(".js-contact-mail-open"), this.conactMail = i(".contact-mail-form__layer"), this.conactClose = this.conactMail.find(".layer__close") },
                bindEventHandlers: function(t) { this.clickListener(t), i(window).on("resize", i.proxy(this.resizeFunc, this)) },
                clickListener: function(t) {
                    var e = this;
                    e.clickBtn = i(t), e.onDisplay(), n.init(".contact-icon"), this.closeBtn.on("click", function(t) { t.preventDefault(), e.offDisplay(e.clickBtn) }), this.conactMailBtn.on("click", function(i) { i.preventDefault(), e.conactClickBtn = e.clickBtn, e.onDisplayMail(t), o.init(".contact-mail-form__layer"), e.menuLayer.stop().fadeOut(this.delay) }), this.conactClose.on("click", function(t) { t.preventDefault(), e.offDisplayMail(e.conactClickBtn) })
                },
                onLayer: function() {
                    var e = i(t).scrollTop();
                    this.menuLayer.stop().fadeIn(this.delay).attr("tabIndex", 0).focus(), i(".s-layer-dimmed").show(), i(t).scrollTop(e), setTimeout(i.proxy(function() { this.menuLayer.on("keydown keyup", i.proxy(function(t) { "keydown" === t.type ? (16 === t.keyCode || 16 === t.which) && (this.keyShift = !0) : "keyup" === t.type && (16 === t.keyCode || 16 === t.which) && (this.keyShift = !1) }, this)), this.menuLayer.on("focusoutside", i.proxy(function() { this.keyShift ? this.closeBtn.focus() : this.menuLayer.focus() }, this)) }, this), 100)
                },
                offLayer: function(t) { this.menuLayer.stop().fadeOut(this.delay), t && t.focus(), i(".s-layer-dimmed").hide(), i("body").removeClass("body-noscroll") },
                onDisplay: function() { this.onLayer() },
                offDisplay: function(t) { this.menuLayer.off("keydown keyup clickoutside focusoutside"), this.offLayer(t) },
                onLayerMail: function(e) {
                    var n = i(t).scrollTop();
                    this.conactMail.stop().fadeIn(this.delay).attr("tabIndex", 0).focus(), i(".s-layer-dimmed").show(), i(t).scrollTop(n), setTimeout(i.proxy(function() { this.conactMail.on("keydown keyup", i.proxy(function(t) { "keydown" === t.type ? (16 === t.keyCode || 16 === t.which) && (this.keyShift = !0) : "keyup" === t.type && (16 === t.keyCode || 16 === t.which) && (this.keyShift = !1) }, this)), this.conactMail.on("focusoutside", i.proxy(function() { this.keyShift ? this.conactClose.focus() : this.conactMail.focus() }, this)) }, this), 100)
                },
                offLayerMail: function(t) { this.conactMail.stop().fadeOut(this.delay), t && t.focus(), this.menuLayer.find(".contact-mail-form__contents").css("height", ""), i(".s-layer-dimmed").hide(), i("body").removeClass("body-noscroll") },
                onDisplayMail: function(t) { this.menuLayer.off("keydown keyup clickoutside focusoutside"), this.onLayerMail(t) },
                offDisplayMail: function(t) { this.conactMail.off("keydown keyup clickoutside focusoutside"), this.offLayerMail(t), this.menuLayer.on("keydown keyup clickoutside focusoutside") },
                resizeFunc: function() { n.layerView() }
            },
            c = {
                init: function(t) { this.opts(), this.setElements(), this.bindEventHandlers(t) },
                opts: function() { this.delay = 100 },
                setElements: function() { this.menuLayer = i(".contact-mail-form__layer"), this.closeBtn = this.menuLayer.find(".layer__close") },
                bindEventHandlers: function(t) { this.clickListenerMail(t), i(window).on("resize", i.proxy(this.resizeFunc, this)) },
                clickListenerMail: function(t) {
                    var e = this;
                    e.clickBtn = i(t), e.onDisplayMail(), o.init(".contact-mail-form__layer"), this.closeBtn.on("click", function(t) { t.preventDefault(), e.offDisplayMail(e.clickBtn) })
                },
                onLayerMail: function() {
                    var e = i(t).scrollTop();
                    this.menuLayer.stop().fadeIn(this.delay).attr("tabIndex", 0).focus(), i(".s-layer-dimmed").show(), i(t).scrollTop(e), setTimeout(i.proxy(function() { this.menuLayer.on("keydown keyup", i.proxy(function(t) { "keydown" === t.type ? (16 === t.keyCode || 16 === t.which) && (this.keyShift = !0) : "keyup" === t.type && (16 === t.keyCode || 16 === t.which) && (this.keyShift = !1) }, this)), this.menuLayer.on("focusoutside", i.proxy(function() { this.keyShift ? this.closeBtn.focus() : this.menuLayer.focus() }, this)) }, this), 100)
                },
                offLayerMail: function(t) { this.menuLayer.stop().fadeOut(this.delay), t && t.focus(), i(".s-layer-dimmed").hide(), i("body").removeClass("body-noscroll") },
                onDisplayMail: function() { this.onLayerMail() },
                offDisplayMail: function(t) { this.menuLayer.off("keydown keyup clickoutside focusoutside"), this.offLayerMail(t) },
                resizeFunc: function() { o.layerView() }
            };
        return { init: function(t) { s.init(t) }, reinit: function() { s.init(thisBtn) }, mailOnly: function(t) { c.init(t) } }
    }()
}(window, window.jQuery);
! function(t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.common && (t.smg.aem.components.common = {});
    var a = (t.smg.aem.varStatic, t.smg.aem.util, t.smg.aem.customEvent, t.smg.aem.components.common);
    a.contactUsInit = function() {
        return {
            init: function(t, a) {
                function n(t) {
                    var e = "checkTrue",
                        a = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/,
                        n = /^[a-zA-Z0-9\-\.\_]+\@[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,5})$/;
                    return !a.test(t) && n.test(t) ? (e = "emailCheckTrue", t.indexOf("samsung.com") > -1 && (e = "samsungMailFalse")) : e = "emailCheckFalse", e
                }

                function i(t) {
                    var e = t.replace(/\+/g, "").replace(/-/g, ""),
                        a = /^[-0-9]*$/;
                    return a.test(e) ? !0 : !1
                }

                function c() {
                    var t, a = !0,
                        n = new Array;
                    return p.find("input, select, textarea").not("input[type='hidden']").each(function(i) { t = e(this).attr("data-id"), "undefined" != typeof t && (("TS02" != t || w(e(this))) && ("TT03" != t || v(e(this))) ? g(e(this)) || (a = !1, n.push(e(this).attr("id"))) : (a = !1, e(this).focus())) }), e("#" + n[0]).focus(), a
                }

                function o() { e("form").each(function() { "input__field__wrap" == this.name && this.reset() }), e(".notice").hide(), e(".sign-in__input-box.add__notice").removeClass("add__notice"), e(".input__field__wrap input[type='checkbox']").each(function() { e(this).is(":checked") && e(this).next().click() }) }

                function s() {
                    if (c()) {
                        var t = "https://" + window.location.host + "/aemapi/business/common/captchacheck",
                            a = {};
                        e(".contact-mail-form__layer .contact-mail-form__contents").find("select,textarea,input[name]").not("[disabled]").each(function() { a[e(this).attr("name")] = e(this).val(), "checkbox" == this.type && (a[e(this).attr("name")] = "checked" == e(this).attr("checked") ? "on" : "off") }), e.ajax({ type: "post", url: t, data: a, dataType: "json", xhrFields: { withCredentials: !0 }, success: function(t) { r(t, a) }, erorr: function(t) {} })
                    } else u()
                }

                function r(t, a) { var n = window.smg.aem.components.common; "304" == t.response.statusCode ? (u(), h.find(".invalid-captcha").show(), e("input[name='captchaAns']").focus()) : (e(".mail-completion__title").text(e("#successTitle").val()), e(".mail-completion__dec").text(e("#successMessageDesc").val()), h.find(".layer__close").trigger("click"), e(".js-contact-mail-close").trigger("click"), n.mailCompletion.init(), o()) }

                function l() {
                    if (c()) {
                        var t = grecaptcha.getResponse(conRecaptcha),
                            a = "/aemapi/business/common/recaptchacheck",
                            n = {};
                        e(".contact-mail-form__layer .contact-mail-form__contents").find("select,textarea,input[name]").not("[disabled]").each(function() { n[e(this).attr("name")] = e(this).val(), "checkbox" == this.type && (n[e(this).attr("name")] = "checked" == e(this).attr("checked") ? "on" : "off") }), n["g-recaptcha-response"] = t, n.grecaptcha = "grecaptcha", e.ajax({
                            type: "post",
                            url: a,
                            data: n,
                            success: function(t) {
                                if ("200" == t.response.statusCode) {
                                    var a = window.smg.aem.components.common;
                                    e(".mail-completion__title").text(e("#successTitle").val()), e(".mail-completion__dec").text(e("#successMessageDesc").val()), h.find(".layer__close").trigger("click"), e(".js-contact-mail-close").trigger("click"), a.mailCompletion.init(), o(), grecaptcha.reset(conRecaptcha)
                                } else grecaptcha.reset(conRecaptcha), h.find(".invalid-recaptcha").show()
                            },
                            erorr: function(t) {}
                        })
                    }
                }

                function d(t) { e("#audiocatpch").html(' <bgsound src="' + t + '">') }

                function m() {
                    var t = new Date,
                        e = "http://" + window.location.host + "/aemapi/business/common/simpleaudiocapcha?" + t.getTime(),
                        a = navigator.userAgent.toLowerCase();
                    if ("Netscape" == navigator.appName && a.indexOf("trident") >= 0) {
                        var n = '<object type="audio/x-wav" data="' + e + '" width="0" height="0"><param name="src" value="' + e + '"/><param name="autostart" value="true" /><param name="controller" value="false" /></object>';
                        document.getElementById("audiocatpch").innerHTML = n
                    } else if (a.indexOf("msie") >= 0) d(e + "&agent=msie");
                    else try {
                        var i = new Audio(e);
                        i.load(), i.play()
                    } catch (c) { d(e) }
                }

                function u() {
                    var t = new Date;
                    e("img#con-us-captcha").last().attr("src", "https://" + window.location.host + "/aemapi/business/common/simplecapcha?" + t.getTime())
                }
                var h = e(".contact-mail-form__layer"),
                    p = h.find(".contact-mail-form__contents .input__field__wrap"),
                    f = h.find("input[name='siteCode']").val(),
                    _ = "bu_" + f;
                Granite.I18n.setLocale(f), p.find("textarea").on("input", function() {
                    var t = e(this).val().length,
                        a = 2e3;
                    e(".length").text("( " + t + " / " + a + " )")
                }), p.find("select").on("change", function() {
                    var t = e(this).attr("name"),
                        a = e(this).find("option:selected"),
                        n = e(this).parent().find("[name=" + t + "_T]"),
                        i = e(this).closest(".sign-in__input-box").next().find("input[type=text]");
                    "Y" == a.attr("data-textboxyn") ? (n.attr("disabled", "disabled"), i.attr("name") == t + "_T" && (i.attr("placeholder", a.text()), i.removeAttr("disabled"), i.attr("data-required", "Y"), i.removeAttr("hidden"))) : (n.removeAttr("disabled"), i.attr("name") == t + "_T" && (i.attr("disabled", "disabled"), i.attr("hidden", !0), i.removeAttr("data-required"), e(this).closest(".sign-in__input-box").removeClass("add__notice"), e(this).closest(".sign-in__input-box").next().find(".invalid-notice").hide()), n.val(e(this).val()))
                }), e(".invalid-notice").hide();
                var g = function(t) {
                        var e = !0,
                            a = t.val(),
                            c = t.attr("data-required"),
                            o = t.closest(".sign-in__input-box"),
                            s = o.find(".invalid-notice"),
                            r = o.find(".invalid-captcha");
                        return "undefined" == typeof c || "Y" != c || "undefined" != typeof a && 0 != a.length ? "TT05" != t.attr("data-id") || "emailCheckFalse" != n(t.val()) && "samsungMailFalse" != n(t.val()) ? "TT06" != t.attr("data-id") || i(t.val()) ? (s.hide(), o.removeClass("add__notice")) : (s.text(Granite.I18n.get("Please enter a valid telephone number", "", _)).show(), o.addClass("add__notice"), e = !1) : ("emailCheckFalse" == n(t.val()) ? s.text(Granite.I18n.get("Please enter a valid E-mail address", "", _)).show() : "samsungMailFalse" == n(t.val()) && s.text(Granite.I18n.get("Samsung.com email address is not allowed. Please input other email address.", "", _)).show(), o.addClass("add__notice"), e = !1) : (s.text(Granite.I18n.get("* This field is required", "", _)).show(), r.text(Granite.I18n.get("* Please enter your Captcha Code", "", _)).show(), o.addClass("add__notice"), e = !1), e
                    },
                    v = function(t) {
                        var e = t.parent().find(".invalid-notice"),
                            a = t.attr("data-required");
                        return "undefined" != typeof a && "Y" == a && 0 == t.val().length ? (e.show(), !1) : (e.hide(), !0)
                    },
                    w = function(t) {
                        var e = t.closest(".check__wrap__in").siblings(".invalid-notice"),
                            a = t.attr("data-required");
                        return "undefined" == typeof a || "Y" != a || t.is(":checked") ? (e.hide(), !0) : (e.show(), !1)
                    };
                h.find(".s-mo-full").off().on("click", function() {
                    var t = e("#elqYn").val(),
                        a = "";
                    void 0 == t || null == t ? t = "N" : a = e("#elqPostUrl").val(), "Y" === t && c() ? (_satellite.setVar("emailType", "request"), _satellite.track("emailSend"), e(".bu-g-contact-us").find("form[name=input__field__wrap]").attr("action", a).attr("method", "POST").submit()) : "cn" === f && c() ? s() : l()
                }), e("button.con-us-audio").unbind("click").click(function() { m() }), e("button.con-us-refresh").unbind("click").click(function() { u() }), e(".js-contact-mail-open").on("click", function() { u() }), e(".js-contact-mail").on("click", function() { "cn" === f ? u() : grecaptcha.reset(conRecaptcha) })
            }
        }
    }(), e(function() { a.contactUsInit.init(e("body")) }), e("#bu-g-contact-us_info").on("click", function() { window.location.href = e("#bu-g-contact-us_info").attr("data-href") }), e("#bu-g-contact-us_tech").on("click", function() { e(".js-contact-mail-close").trigger("click"), window.open(e(this).attr("data-href") + "/", "open", "width=990, height=800, scrollbars=1, resizable=no") }), e(".js-contact-icon").on("click", function() {
        if ("sec" == e(".contact-mail-form__layer").find("input[name='siteCode']").val()) {
            e(".contact-layer").show();
            var t = e(this).attr("data-group"),
                n = e(this).attr("data-type"),
                i = e(this).attr("data-subtype"),
                c = e(this).attr("data-model");
            contactOpen(0, t, n, i, c)
        } else a.contactMail.init(this)
    }), e(".js-contact-mail").on("click", function() { return a.contactMail.mailOnly(this), !1 })
}(window, window.jQuery);
! function(t) {
    "use strict";

    function e() {}

    function r() { try { return document.activeElement } catch (t) {} }

    function a(t, e) {
        for (var r = 0, a = t.length; a > r; r++)
            if (t[r] === e) return !0;
        return !1
    }

    function n(t, e, r) { return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0 }

    function u(t, e) {
        var r;
        t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
    }

    function i(t, e) { try { return t.type = e, !0 } catch (r) { return !1 } }

    function l(t, e) {
        if (t && t.getAttribute(S)) e(t);
        else
            for (var r, a = t ? t.getElementsByTagName("input") : z, n = t ? t.getElementsByTagName("textarea") : F, u = a ? a.length : 0, i = n ? n.length : 0, l = u + i, o = 0; l > o; o++) r = u > o ? a[o] : n[o - u], e(r)
    }

    function o(t) { l(t, s) }

    function c(t) { l(t, d) }

    function s(t, e) {
        var r = !!e && t.value !== e,
            a = t.value === t.getAttribute(S);
        if ((r || a) && "true" === t.getAttribute(L)) {
            t.removeAttribute(L), t.value = t.value.replace(t.getAttribute(S), ""), t.className = t.className.replace(B, "");
            var n = t.getAttribute(P);
            parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(P));
            var u = t.getAttribute(k);
            return u && (t.type = u), !0
        }
        return !1
    }

    function d(t) {
        var e = t.getAttribute(S);
        if ("" === t.value && e) {
            t.setAttribute(L, "true"), t.value = e, t.className += " " + w;
            var r = t.getAttribute(P);
            r || (t.setAttribute(P, t.maxLength), t.removeAttribute("maxLength"));
            var a = t.getAttribute(k);
            return a ? t.type = "text" : "password" === t.type && i(t, "text") && t.setAttribute(k, "password"), !0
        }
        return !1
    }

    function v(t) { return function() { G && t.value === t.getAttribute(S) && "true" === t.getAttribute(L) ? u(t, 0) : s(t) } }

    function g(t) { return function() { d(t) } }

    function p(t) { return function() { o(t) } }

    function f(t) { return function(e) { return x = t.value, "true" === t.getAttribute(L) && x === t.getAttribute(S) && a(N, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0 } }

    function h(t) { return function() { s(t, x), "" === t.value && (t.blur(), u(t, 0)) } }

    function b(t) { return function() { t === r() && t.value === t.getAttribute(S) && "true" === t.getAttribute(L) && u(t, 0) } }

    function m(t) {
        var e = t.form;
        e && "string" == typeof e && (e = document.getElementById(e), e.getAttribute(I) || (n(e, "submit", p(e)), e.setAttribute(I, "true"))), n(t, "focus", v(t)), n(t, "blur", g(t)), G && (n(t, "keydown", f(t)), n(t, "keyup", h(t)), n(t, "click", b(t))), t.setAttribute(R, "true"), t.setAttribute(S, M), (G || t !== r()) && d(t)
    }
    var A = document.createElement("input"),
        y = void 0 !== A.placeholder;
    if (t.Placeholders = { nativeSupport: y, disable: y ? e : o, enable: y ? e : c }, !y) {
        var x, E = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
            N = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
            T = "#ccc",
            w = "placeholdersjs",
            B = new RegExp("(?:^|\\s)" + w + "(?!\\S)"),
            S = "data-placeholder-value",
            L = "data-placeholder-active",
            k = "data-placeholder-type",
            I = "data-placeholder-submit",
            R = "data-placeholder-bound",
            q = "data-placeholder-focus",
            C = "data-placeholder-live",
            P = "data-placeholder-maxlength",
            V = 100,
            j = document.getElementsByTagName("head")[0],
            D = document.documentElement,
            Q = t.Placeholders,
            z = document.getElementsByTagName("input"),
            F = document.getElementsByTagName("textarea"),
            G = "false" === D.getAttribute(q),
            H = "false" !== D.getAttribute(C),
            J = document.createElement("style");
        J.type = "text/css";
        var K = document.createTextNode("." + w + " {color:" + T + ";}");
        J.styleSheet ? J.styleSheet.cssText = K.nodeValue : J.appendChild(K), j.insertBefore(J, j.firstChild);
        for (var M, O, U = 0, W = z.length + F.length; W > U; U++) O = U < z.length ? z[U] : F[U - z.length], M = O.attributes.placeholder, M && (M = M.nodeValue, M && a(E, O.type) && m(O));
        var X = setInterval(function() {
            for (var t = 0, e = z.length + F.length; e > t; t++) O = t < z.length ? z[t] : F[t - z.length], M = O.attributes.placeholder, M ? (M = M.nodeValue, M && a(E, O.type) && (O.getAttribute(R) || m(O), (M !== O.getAttribute(S) || "password" === O.type && !O.getAttribute(k)) && ("password" === O.type && !O.getAttribute(k) && i(O, "text") && O.setAttribute(k, "password"), O.value === O.getAttribute(S) && (O.value = M), O.setAttribute(S, M)))) : O.getAttribute(L) && (s(O), O.removeAttribute(S));
            H || clearInterval(X)
        }, V);
        n(t, "beforeunload", function() { Q.disable() })
    }
}(this),
function(t, e) {
    "use strict";
    var r = t.fn.val,
        a = t.fn.prop;
    e.Placeholders.nativeSupport || (t.fn.val = function(t) {
        var e = r.apply(this, arguments),
            a = this.eq(0).data("placeholder-value");
        return void 0 === t && this.eq(0).data("placeholder-active") && e === a ? "" : e
    }, t.fn.prop = function(t, e) { return void 0 === e && this.eq(0).data("placeholder-active") && "value" === t ? "" : a.apply(this, arguments) })
}(jQuery, this);
! function(s) { "function" == typeof define && define.amd ? define(["jquery"], s) : "object" == typeof exports ? module.exports = s(require("jquery")) : s(jQuery) }(function(s, t) {
    "use strict";
    var i = "drilldown",
        e = "data-next-parent",
        n = { rtl: s("html").hasClass("rtl"), event: "click", selector: "a", speed: 100, cssClass: { container: i + "-container", root: i + "-root", sub: i + "-sub", back: i + "-back" } },
        o = function() {
            function o(t, e) {
                var o = this;
                this._name = i, this._defaults = n, this.element = t, this.$element = s(t), this.options = s.extend({}, n, e), this._history = [], this._css = this.options.rtl ? { "float": "right", width: null } : { "float": "left", width: null }, this.$container = this.$element.find("." + this.options.cssClass.container), this.$element.on(this.options.event + "." + i, this.options.selector, function(t) { h.call(o, t, s(this)) })
            }

            function h(s, t) {
                var i = t.nextAll("." + this.options.cssClass.sub),
                    e = !0;
                i.length ? a.call(this, i) : t.closest("." + this.options.cssClass.back).length ? r.call(this) : e = !1, e && "A" === t.prop("tagName") && s.preventDefault()
            }

            function a(i, n) {
                var o = n && n.speed !== t ? n.speed : this.options.speed;
                i.length && (this._css.width = this.$element.outerWidth(), this.$container.width(2 * this._css.width), i.parent().attr(e, !0), i = i.removeClass(this.options.cssClass.sub).addClass(this.options.cssClass.root), this.$container.append(i), this.options.rtl ? c.call(this, { marginRight: -1 * this._css.width, speed: o }, function() {
                    var t = i.prev();
                    this._history.push(t.detach()), l.call(this, i), s("body").trigger("DRILLDOWN_ANIMATE_CHANGE"), i.children().first().hasClass(this.options.cssClass.back) ? i.find("." + this.options.cssClass.back + " a").focus() : i.children().children().children().eq(0).focus()
                }.bind(this)) : c.call(this, { marginLeft: -1 * this._css.width, speed: o }, function() {
                    var t = i.prev();
                    this._history.push(t.detach()), l.call(this, i), s("body").trigger("DRILLDOWN_ANIMATE_CHANGE"), i.children().first().hasClass(this.options.cssClass.back) ? i.find("." + this.options.cssClass.back + " a").focus() : i.children().children().children().eq(0).focus(), "sec" == SITE_CD && s(".drilldown-root .s-depth2-link").first().trigger("click")
                }.bind(this)))
            }

            function r(i) {
                var n = i && i.speed !== t ? i.speed : this.options.speed,
                    o = this._history.pop();
                this._css.width = this.$element.outerWidth(), this.$container.width(2 * this._css.width), this.$container.prepend(o), this.options.rtl ? c.call(this, { marginRight: 0, speed: n }, function() {
                    var t = o.next();
                    t.addClass(this.options.cssClass.sub).removeClass(this.options.cssClass.root), this.$container.find("[" + e + "]").last().removeAttr(e).append(t), l.call(this, o), s("body").trigger("DRILLDOWN_ANIMATE_CHANGE"), o.children().first().hasClass(this.options.cssClass.back) ? o.find("." + this.options.cssClass.back + " :first-child a").focus() : o.children().children().children().eq(0).focus()
                }.bind(this)) : c.call(this, { marginLeft: 0, speed: n }, function() {
                    var t = o.next();
                    t.addClass(this.options.cssClass.sub).removeClass(this.options.cssClass.root), this.$container.find("[" + e + "]").last().removeAttr(e).append(t), l.call(this, o), s("body").trigger("DRILLDOWN_ANIMATE_CHANGE"), o.children().first().hasClass(this.options.cssClass.back) ? o.find("." + this.options.cssClass.back + " a").focus() : o.children().children().children().eq(0).focus()
                }.bind(this))
            }

            function c(s, t) {
                var i = this.$container.children("." + this.options.cssClass.root);
                i.css(this._css), this.options.rtl ? i.first().animate({ marginRight: s.marginRight }, s.speed, t) : i.first().animate({ marginLeft: s.marginLeft }, s.speed, t)
            }

            function l(s) { s.css(this.options.rtl ? { "float": "", width: "", marginRight: "" } : { "float": "", width: "", marginLeft: "" }), this.$container.css("width", "") }
            return o.prototype = {
                destroy: function() { this.reset(), this.$element.off(this.options.event + "." + i, this.options.selector) },
                reset: function() {
                    var s;
                    for (s = this._history.length; s > 0; s--) r.call(this, { speed: 0 });
                    this._history = [], this._css = this.options.rtl ? { "float": "right", width: null } : { "float": "left", width: null }
                }
            }, o
        }();
    s.fn[i] = function(t) {
        return this.each(function() {
            var e = s.data(this, i),
                n = t;
            e ? "string" == typeof n && ("destroy" === n && s.removeData(this, i), "function" == typeof e[n] && e[n]()) : s.data(this, i, new o(this, t))
        })
    }
});
! function(i, e) {
    "use strict";
    "undefined" == typeof i.smg && (i.smg = {}), "undefined" == typeof i.smg.aem && (i.smg.aem = {}), "undefined" == typeof i.smg.aem.common && (i.smg.aem.common = {});
    var t = i.smg.aem.common,
        s = i.smg.aem.varStatic,
        n = i.smg.aem.customEvent;
    t.gnb = function() {
        var t = { body: "body", header: "#header", evt: { connect: {}, responsiveMgr: { responsiveChange: "responsiveChange" } } },
            o = { init: function() { this.orientationchangeListener() }, orientationchangeListener: function() { e(i).on("orientationchange", function(t) { e(i).trigger("resize") }) } },
            r = {
                getObjectInfo: function() { return { responsiveName: this.responsiveName, device: this.device } },
                init: function() { this.constants(), this.bindEvts(), this.defSetup() },
                constants: function() { this.device = { mobile: { support: !0, name: "mobile", width: 768 }, tablet: { support: !1, name: "tablet", width: 1280 }, gnb: { support: !0, name: "gnb", width: 1024 }, desktop: { support: !0, name: "desktop" } }, this.evt = t.evt.responsiveMgr },
                bindEvts: function() { this.resizeListener() },
                defSetup: function() { this.responsiveChange() },
                resizeListener: function() {
                    var t = this;
                    e(i).on("resize", function() { t.responsiveChange() })
                },
                responsiveChange: function() {
                    var s, n = i.document,
                        o = i.innerWidth || n.documentElement.clientWidth || n.body.clientWidthp;
                    if (this.device.mobile.support && o <= this.device.mobile.width) s = this.device.mobile.name;
                    else if (this.device.tablet.support && o <= this.device.tablet.width) s = this.device.tablet.name;
                    else if (this.device.gnb.support && o <= this.device.gnb.width) s = this.device.gnb.name;
                    else {
                        if (!this.device.desktop.support) return;
                        s = this.device.desktop.name
                    }
                    var r = { responsiveName: "" };
                    this.responsiveName ? this.responsiveName !== s && (this.responsiveName = s, r.responsiveName = this.responsiveName, e(t.evt.connect).trigger(this.evt.responsiveChange, r)) : (this.responsiveName = s, r.responsiveName = this.responsiveName, e(t.evt.connect).trigger(this.evt.responsiveChange, r))
                }
            },
            c = e(t.header),
            a = {
                init: function() { this.constants(), this.setElmts(), this.bindEvts() },
                constants: function() { this.delay = 100, this.touchDevice = e("body").hasClass("touch-device") },
                setElmts: function() { this.menus = c.find(".gb-gnb__drop-desktop").closest("li"), this.closeBtn = this.menus.find(".s-ico-close"), this.dropInners = e(".gb-gnb .s-col-featured").closest(".gb-gnb__drop-inner"), this.topFixName = "js-cta-fix", this.scrollProp = !1 },
                bindEvts: function() { this.resizeListener(), this.responsiveListener(), this.menusActiveListener(), this.outsideAreaMouseleaveListener(), this.closeBtnClickListener(), this.setTopPosition(), this.scrollListener() },
                resizeListener: function() { e(i).on("resize", e.proxy(this.setFeaturedHeightAll, this)) },
                responsiveListener: function() { e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.destroy, this)) },
                scrollListener: function() { e(i).on("scroll", function(t) { return e(i).width() <= r.device.gnb.width ? !1 : void 0 }) },
                setTopPosition: function() {
                    var s = i.document;
                    this.winTopPosition = s.documentElement.scrollTop || i.pageYOffset || s.body.scrollTop, this.filterWrapTopPosition = e(t.header).outerHeight()
                },
                menusActiveListener: function() {
                    var i, t = this;
                    this.menus.on("click", ">.js-toggler", function(i) { i.preventDefault() }), this.menus.on("mouseenter keydown", function(s) {
                        if ("keydown" === s.type) { var n = s.keyCode || s.which; if (13 !== n) return }
                        if (i = e(s.currentTarget), i.find(".gb-gnb__drop-desktop").is(":visible")) "keydown" === s.type && (t.offLayer(void 0, this.delay), t.offAria(i));
                        else {
                            var o = t.menus.find(".gb-gnb__drop-desktop").is(":visible") ? 1 : t.delay;
                            t.offLayer(i, o), t.onLayer(i, o), t.onAria(i), e("html").css("overflow", "")
                        }
                    })
                },
                outsideAreaMouseleaveListener: function() {
                    var i = this;
                    this.menus.on("mouseleave", function(e) { i.offLayer(), i.onAria() })
                },
                closeBtnClickListener: function() {
                    var i = this;
                    this.closeBtn.on("click", function(t) { i.offLayer(void 0, this.delay), i.offAria(), e(t.currentTarget).closest("li").find(".s-btn-toggler").focus() })
                },
                onLayer: function(i, t) {
                    var s = this;
                    t = t || 1, i.find(".gb-gnb__drop-desktop, .gb-gnb__calltoaction").fadeIn({ duration: t, complete: function() { e(this).removeAttr("style").css("display", "block"), s.setFeaturedHeight(e(this)) } }), setTimeout(function() { s.bindClickoutsideListener(i.closest("li")) }, 50)
                },
                offLayer: function(i, t) {
                    var s = this;
                    t = t || 1;
                    var n = i ? i.closest("li").siblings() : this.menus;
                    n.find(".gb-gnb__drop-desktop").fadeOut({ duration: t, complete: function() { e(this).removeAttr("style").css("display", "none"), s.removeFeaturedHeight(e(this)) } }), this.unbindClickoutsideListener(), e("html").css("overflow", "")
                },
                onAria: function(i) { this.menus.find(".js-toggler").attr("aria-selected", !1), i && i.closest("li").find(".js-toggler").attr("aria-selected", !0) },
                offAria: function() { this.menus.find(".js-toggler").attr("aria-selected", !1) },
                bindClickoutsideListener: function(i) { i.on("clickoutside", e.proxy(this.clickoutside, this)) },
                unbindClickoutsideListener: function() { this.menus.off("clickoutside", e.proxy(this.clickoutside, this)) },
                clickoutside: function(i) {},
                setFeaturedHeight: function(i) {
                    var e = i.find(".s-col-featured");
                    e.size() && (e.removeAttr("style"), e.css("height", e.closest(".gb-gnb__drop-inner").height()))
                },
                setFeaturedHeightAll: function() {
                    var i = this;
                    this.dropInners.filter(":visible").each(function() { i.setFeaturedHeight(e(this)) }), e("html").css("overflow", "")
                },
                removeFeaturedHeight: function(i) {
                    var e = i.find(".s-col-featured");
                    e.size() && e.removeAttr("style")
                },
                destroy: function() { this.offLayer(), this.offAria() }
            },
            h = {
                init: function() { this.setElmts(), this.bindEvts() },
                setElmts: function() { this.menus = c.find(".gb-gnb__drop-desktop").closest("li").add(c.find(".gb-gnb__my-layer").closest("li")), this.search = c.find(".gb-gnb__search .gb-gnb__search-bar"), this.cart = c.find(".gb-gnb__cart .gb-gnb__cart-layer") },
                bindEvts: function() { this.menusMouseenterListener() },
                menusMouseenterListener: function() {
                    var i = this;
                    this.menus.on("mouseenter", function(e) { i.outersideTrigger() })
                },
                outersideTrigger: function() {
                    (this.getSearchVisible() || this.getCartVisible()) && c.find(".gb-gnb__main").trigger("click")
                },
                getSearchVisible: function() { return this.search.is(":visible") },
                getCartVisible: function() { return this.cart.is(":visible") }
            },
            d = {
                init: function() { this.setElmt(), this.bindEvent() },
                setElmt: function() { this.wrap = c.find(".gb-gnb__utility-navi"), this.toggler = c.find(".s-login_new button"), this.layer = c.find(".gb-gnb__my-layer") },
                bindEvent: function() { this.toggle(), this.link(), e(i).on("resize", e.proxy(this.resize, this)) },
                resize: function() { e(i).width() <= r.device.gnb.width && this.wrap.find(this.layer).hide() },
                toggle: function() {
                    var i = this.wrap.find(this.layer);
                    this.toggler.click(function() { i.is(":visible") ? i.hide() : i.show() }), i.on("mouseleave focusoutside", function(e) { i.hide() })
                },
                link: function() {
                    var i = this.toggler;
                    this.layer.find("li").click(function() { i.trigger("click") })
                }
            },
            l = {
                init: function() { this.opts(), this.setElmt(), this.bindEvent() },
                opts: function() { this.delay = 100 },
                setElmt: function() { this.toggler = c.find(".s-gnb-toggler"), this.layer = c.find(".gb-gnb__drop-mobile"), this.contactUsBtn = c.find(".menu__contact__us"), this.dimmed = c.find(".gb-gnb__dimmed") },
                bindEvent: function() { this.responsiveListener(), this.togglerClickListener() },
                responsiveListener: function() { e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.destroy, this)) },
                togglerClickListener: function() {
                    var i = this;
                    this.toggler.on("click", function(e) { i.layer.is(":visible") ? i.offDrilldown() : i.onDrilldown() })
                },
                contactUsOpen: function() {
                    var i = this;
                    this.contactUsBtn.on("click", function(e) { e.preventDefault(), i.offDrilldown() })
                },
                onDrilldown: function() { k.reset(), this.onStatusAttr(), this.onDimmed(), this.onLayer() },
                offDrilldown: function(i) { this.offLayer(i), this.offStatusAttr(), this.offDimmed() },
                onStatusAttr: function() { e(t.body).addClass("gb-gnb-open") },
                offStatusAttr: function() { e(t.body).removeClass("gb-gnb-open") },
                onLayer: function() {
                    var i = this;
                    this.layer.fadeIn({ duration: i.delay, complete: function() { i.fadeInComplete() } })
                },
                offLayer: function(i) {
                    var t = this,
                        i = i || this.delay;
                    1 === i ? this.layer.removeAttr("style").css("display", "none") : this.layer.fadeOut({
                        duration: i,
                        complete: function() {
                            var i = e(".gb-gnb__search .gb-gnb__search-bar").is(":visible"),
                                s = e(".gb-gnb__cart .gb-gnb__cart-layer").is(":visible");
                            i || s || t.toggler.focus()
                        }
                    })
                },
                onDimmed: function() { this.dimmed.css("display", "block") },
                offDimmed: function() { this.dimmed.css("display", "none") },
                fadeInComplete: function(i) { this.layer.find(".s-depth1-link").eq(0).focus(), this.bindClickoutsideListener() },
                bindClickoutsideListener: function() { this.layer.on("clickoutside", e.proxy(this.onClickOutside, this)) },
                unbindClickoutsideListener: function() { this.layer.off("clickoutside", e.proxy(this.onClickOutside, this)) },
                onClickOutside: function(i) { this.offDrilldown(this.delay), this.unbindClickoutsideListener() },
                onCloseCallback: function() { this.onClickOutside() },
                destroy: function() { this.unbindClickoutsideListener(), this.offDrilldown(1) }
            },
            u = { responsiveSize: 768, isSupportTransform: function() { return "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "transform" in document.body.style }(), windowWidth: function() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth } },
            f = { init: function(i) { this.obj = e(i), this.setLayout(), this.layerSize.init(this), u.isSupportTransform ? (this.resizeFunc(), this.bindResizeEventHandlers()) : this.layerView(!0) }, setLayout: function() { this.obj.css({ left: "50%", top: "50%" }) }, bindResizeEventHandlers: function() { e(window).on("resize", e.proxy(this.resizeFunc, this)) }, layerView: function() { this.obj.css({ left: "50%", "margin-left": -(this.layerSize.w() / 2), "margin-top": -(this.layerSize.h() / 2) }) }, resizeFunc: function() { this.layerView(!0) }, layerSize: { init: function(i) { this.obj = i.obj }, w: function() { return this.obj.outerWidth() }, h: function() { return this.obj.outerHeight() } } },
            p = {
                init: function() { this.opts(), this.setElements(), this.bindEventHandlers() },
                opts: function() { this.delay = 100 },
                setElements: function() { this.menuWrap = c.find(".gb-gnb__bar .s-ico-cart-empty").closest("a"), this.menuLayer = e(".gb-gnb__cart-empty") },
                bindEventHandlers: function() { this.menuWrapClickListener() },
                menuWrapClickListener: function() {
                    var i = this;
                    this.menuWrap.on("click", function(e) { e.preventDefault(), i.menuLayer.is(":visible") ? i.offDisplay() : (i.onDisplay(), f.init(".gb-gnb__cart-empty")) }), this.menuLayer.on("click", ".js-cart-close", function(e) { e.preventDefault(), i.offDisplay() })
                },
                onLayer: function() { this.menuLayer.stop().fadeIn(this.delay).attr("tabIndex", 0).focus(), e("#dimContainer .lightbox-skrim").show() },
                offLayer: function(i) { i = i || this.delay, this.menuLayer.stop().fadeOut(i), this.menuWrap.focus(), e("#dimContainer .lightbox-skrim").hide() },
                onDisplay: function() {
                    this.onLayer();
                    var i = this;
                    setTimeout(function() { i.bindClickOutsideListener(), i.bindFoucsOutsideListener() }, 50)
                },
                offDisplay: function(i) { i = i || this.delay, this.menuLayer.off("focusoutside"), this.offLayer(i), this.unbindClickOutsideListener() },
                onCloseCallback: function() { this.offDisplay() },
                onClickOutside: function() { this.offDisplay() },
                onFocusOutside: function() { this.menuLayer.stop().focus() },
                bindClickOutsideListener: function() { this.menuLayer.on("clickoutside", e.proxy(this.onClickOutside, this)) },
                unbindClickOutsideListener: function() { this.menuLayer.off("clickoutside"), this.menuLayer.off("focusoutside") },
                bindFoucsOutsideListener: function() { this.menuLayer.on("focusoutside", e.proxy(this.onFocusOutside, this)) }
            },
            v = {
                init: function() { this.opts(), this.setElements(), this.bindEventHandlers() },
                opts: function() { this.delay = 0 },
                setElements: function() { this.wrap = c.find(".gb-gnb__search"), this.bar = this.wrap.find(".gb-gnb__search-bar"), this.suggest = this.wrap.find(".gb-gnb__search-suggest"), this.searchBtn = c.find(".js-ico-search"), this.searchArrow = this.searchBtn.find(".s-search-arrow"), this.closeBtn = this.wrap.find(".s-ico-close"), this.inputArea = this.wrap.find("#inp_srch") },
                bindEventHandlers: function() { this.responsiveListener(), this.searchBtnClickListener(), this.closeBtnClickListener() },
                responsiveListener: function() { e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.destroy, this)) },
                searchBtnClickListener: function() {
                    var i = this;
                    this.searchBtn.on("click", function(e) { i.bar.is(":visible") ? (i.offLayer(), i.offAria()) : (i.onLayer(), i.onAria()) })
                },
                closeBtnClickListener: function() {
                    var i = this;
                    this.closeBtn.on("click", function() { i.offLayer(function() { i.searchBtn.focus() }) })
                },
                onLayer: function() {
                    var i = this,
                        e = this.wrap.add(this.searchArrow);
                    e.stop().show({ duration: i.delay, complete: function() { setTimeout(function() { i.bindClickoutsideListener() }, 50), i.onVideoOverflow() } })
                },
                offLayer: function(i) {
                    var e = this,
                        t = this.wrap.add(this.searchArrow);
                    t.stop().hide({ duration: e.delay, complete: function() { e.inputArea.val(""), e.suggest.hide(), e.offVideoOverflow(), e.unbindClickoutsideListener(), i && "function" == typeof i && i() } })
                },
                onAria: function() { this.searchBtn.attr("aria-expanded", !0) },
                offAria: function() { this.searchBtn.attr("aria-expanded", !1) },
                bindClickoutsideListener: function() { this.wrap.on("clickoutside", e.proxy(this.onClickOutside, this)) },
                unbindClickoutsideListener: function() { this.wrap.off("clickoutside", e.proxy(this.onClickOutside, this)) },
                onClickOutside: function() { this.offLayer(), this.offAria() },
                destroy: function() { this.wrap.trigger("clickoutside") },
                onVideoOverflow: function() {
                    var i = this;
                    this.videoBtn = this.wrap.find(".js-video"), this.videoBtn.on("click", function() { e("body").addClass("gnb-video-view") }), this.wrap.find(".s-media-close").on("click", function() { i.offVideoOverflow() })
                },
                offVideoOverflow: function() { e("body").removeClass("gnb-video-view") }
            },
            g = {
                init: function() { this.opts(), this.setElements(), this.bindResizeHandlers() },
                opts: function() { this.utils = i.smg.aem.util, this.responsiveType = this.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH ? !0 : !1, this.wrapClsNm = "js-cookie", this.closeClsNm = "js-cookie-close" },
                setElements: function() {
                    this.header = e("#header");
                    var i = this.header.find(".cookie-notice"),
                        t = this.header.find(".cookie-geo").addClass(this.wrapClsNm);
                    i.size() && i.addClass(this.wrapClsNm).find(".cookie-notice__btn-close").addClass(this.closeClsNm), t.size() && t.addClass(this.wrapClsNm).find(".btn-close").addClass(this.closeClsNm), this.ckBarWrap = this.header.find("." + this.wrapClsNm), this.ckBarClose = this.ckBarWrap.find("." + this.closeClsNm), this.gnbWrap = this.header.find(".gb-gnb")
                },
                bindResizeHandlers: function() { e(i).on("resize", e.proxy(this.onResizeBrowser, this)), this.ckBarClose.on("click", e.proxy(this.onCkbarClose, this)), this.onResizeBrowser() },
                unBindResizeHandlers: function() { e(i).off("resize", e.proxy(this.onResizeBrowser, this)) },
                onResizeBrowser: function() { this.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH ? this.responsiveType && (this.responsiveType = !1) : (this.gnbWrap.css("top", ""), this.responsiveType || (this.responsiveType = !0)) },
                onCkbarClose: function(i) {
                    var t = new Date;
                    t.setTime(t.getTime() + 7776e6), this.header = e("#header");
                    var n = this.header.find(".cookie-notice"),
                        o = this.header.find(".cookie-geo");
                    n.size() && e.cookies.set("cookiesaccepted", "true", { expiresAt: t }), o.size() && e.cookies.set("cookiesaccepted-geo", "true", { expiresAt: t }), i.preventDefault();
                    var r = this,
                        c = e(i.currentTarget).closest("." + this.wrapClsNm);
                    this.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH && "absolute" == this.gnbWrap.css("position") && c.is(":visible") && this.gnbWrap.css({ position: "relative", top: "", height: "100%" }), e.when(c.animate({ marginTop: -c.outerHeight(!0) })).done(function() { c.hide(), r.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH && (r.gnbWrap.css({ position: "", top: "", height: "" }), r.unBindResizeHandlers()), Waypoint.refreshAll() })
                }
            },
            b = {
                init: function() { this.setElmts(), this.closeBtnClickListener() },
                setElmts: function() {
                    var i = e("#header");
                    this.wrap = i.find(".gb-gnb__notice-bar"), this.closeBtn = this.wrap.find(".s-ico-close")
                },
                closeBtnClickListener: function() {
                    var i = this;
                    this.closeBtn.on("click", function(e) { i.wrap.css("display", "none") })
                }
            },
            m = {
                init: function() { this.constants(), this.setElmts(), this.bindEvts() },
                constants: function() { this.touchDevice = e("body").hasClass("touch-device") },
                setElmts: function() { this.header = c, this.layer = c.find(".gb-gnb__drop-mobile") },
                bindEvts: function() { this.responsiveListener(), this.headerClickListener(), r.responsiveName === r.device.gnb.name && this.resizeListener() },
                responsiveListener: function() { e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.responsiveBindEventHandlers, this)) },
                headerClickListener: function() { this.header.on("click", e.proxy(this.resizeHeight, this)) },
                responsiveBindEventHandlers: function(i, e) { e.responsiveName === r.device.gnb.name ? this.resizeListener() : this.unbindResizeListener() },
                resizeListener: function() { this.touchDevice ? e(i).on("orientationchange", e.proxy(this.resizeListenerImpl, this)) : e(i).on("resize", e.proxy(this.resizeListenerImpl, this)) },
                resizeListenerImpl: function(i) {
                    var e = this;
                    this.layer.is(":visible") && ("orientationchange" === i.type ? setTimeout(function() { e.resizeHeight() }, 300) : this.resizeHeight())
                },
                unbindResizeListener: function() { this.touchDevice ? e(i).off("orientationchange", e.proxy(this.resizeListenerImpl, this)) : e(i).off("resize", e.proxy(this.resizeListenerImpl, this)) },
                resizeHeight: function(t) { this.resultHeight = e(i).height() - this.layer.offset().top, this.layer.css("min-height", this.resultHeight) }
            },
            y = {
                init: function() { this.constants(), this.setElmts(), this.bindEvts() },
                constants: function() { this.hoverClass = "s-hover" },
                setElmts: function() {
                    var i = c.find(".gb-gnb__drop-mobile");
                    this.links = i.find(".s-depth2-link").add(i.find(".s-depth3-link"))
                },
                bindEvts: function() { this.linksMouseenterListener(), this.linksMouseleaveListener() },
                linksMouseenterListener: function() {
                    var i = this;
                    this.links.on("mouseenter", function(t) { e(t.currentTarget).addClass(i.hoverClass) })
                },
                linksMouseleaveListener: function() {
                    var i = this;
                    this.links.on("mouseleave", function(t) { e(t.currentTarget).removeClass(i.hoverClass) })
                }
            },
            k = function() {
                var i = { wrap: ".drilldown" },
                    t = {};
                e(i.wrap).drilldown(t);
                var s = function() { e(i.wrap).drilldown(t) },
                    n = function() { e(i.wrap).drilldown("reset") },
                    o = function() { e(i.wrap).drilldown("destroy") };
                return { init: s, reset: n, destroy: o }
            }(),
            w = {
                init: function() { this.constants(), this.setElmts(), this.bindEvts() },
                constants: function() { this.delay = 300, this.activeClassName = "active" },
                setElmts: function() { this.wrap = c.find(".gb-gnb__bar"), this.list = this.wrap.find(".gb-gnb__drop-mobile-wrap") },
                bindEvts: function() { this.onTitleClickListener(), this.resetSlideListener() },
                onTitleClickListener: function() {
                    var i, t = this;
                    this.list.on("click.drilldown-root", ".s-depth2-link", function(s) { s.preventDefault(), r.responsiveName != r.device.desktop.name && (i = e(s.currentTarget).parent(".s-depth2-wrap"), i.hasClass(t.activeClassName) ? t.offSlide(i) : t.onSlide(i)) })
                },
                resetSlideListener: function() {
                    var i = this;
                    this.wrap.on("click.gb-gnb__bar-inner", ".s-gnb-toggler, .s-btn-back", function(e) { return r.responsiveName != r.device.mobile.name ? void e.preventDefault() : void i.offSlideAll() })
                },
                onActive: function(i) { i.addClass(this.activeClassName) },
                offActive: function(i) { i.removeClass(this.activeClassName) },
                onSlide: function(i, e) {
                    var t = this;
                    e = e || this.delay, i.find("> ul").slideDown({ duration: e, complete: function() { t.onActive(i) } })
                },
                offSlide: function(i, e) {
                    var t = this;
                    e = e || this.delay, i.find("> ul").slideUp({ duration: e, complete: function() { t.offActive(i) } })
                },
                offSlideAll: function(i, t) {
                    i = i || this.delay;
                    var s, n = this;
                    this.list.find(".s-depth2-wrap").each(function(i, t) { s = e(t), n.offSlide(s, 1) }), t && "function" == typeof t && t()
                }
            },
            L = function(i, t) {
                (this.container = i).size() && (o.init(), r.init(), a.init(), d.init(), l.init(), m.init(), y.init(), e.cookies.get("cookiesaccepted") + "" != "true" && (e("body").find(".cookie-notice").show(), g.init()), e.cookies.get("cookiesaccepted-geo") + "" != "true" && (e("body").find(".cookie-geo").show(), g.init()), h.init(), p.init(), v.init(), b.init(), w.init(), e("body").trigger(n.RESPONSIVE.GET_STATUS))
            };
        return { init: L }
    }(), e(function() { t.gnb.init(e("body")) })
}(window, window.jQuery);
! function(n, e) {
    "use strict";
    "undefined" == typeof n.smg && (n.smg = {}), "undefined" == typeof n.smg.aem && (n.smg.aem = {}), "undefined" == typeof n.smg.aem.common && (n.smg.aem.common = {}); {
        var o = n.smg.aem.common,
            a = n.smg.aem.varStatic,
            t = n.smg.aem.util;
        n.smg.aem.customEvent
    }
    o.cookieGeoNew = function() {
        var n = e("meta[name=sitecode]").attr("content"),
            o = { closeBtn: ".js-geo-close", countryNameWrap: ".js-country-name", geoSelectWrap: ".cm-cookie-geo__select", visitBtnsWrap: ".js-visit-btns", selectListWrap: ".js-list-wrap", selectListHead: ".js-list-head", selectListOpenClass: "s-select-open", selectListToggleBtn: ".js-list-toogle", geoMsgCookie: ".cm-cookie-geo__msg", geoMsgCookieSebn: ".cm-cookie-geo__sebn", cookies: { commonaccepted: "cookiesaccepted", accepted: "cookiesaccepted-geo", acceptedCountries: "cookiesaccepted-countries", countryCodes: "country_codes", siteCode: "site_cd" } };
        return {
            init: function(e, a) {
                (this.$container = e).length && !this.$container.data("initialized") && n && (this.options = t.def(o, a || {}), this.assignedHTMLElements(), this.initProperties(), this.bindEvents(), (this.isAcceptedGeo() || this.isLocalLanguageSite()) && this.$geoSelectWrap.remove(), this.isAcceptedCountries() && (this.$geoMsgCookie.remove(), this.$geoMsgCookieSebn.remove()), this.setCountryInfo(), this.append(), this.onSlide(), this.$container.attr("data-initialized", !0))
            },
            assignedHTMLElements: function() {
                var n = this.$container,
                    o = this.options;
                this.$body = e("body"), this.$contryNameWrap = n.find(o.countryNameWrap), this.$visitBtnsWrap = n.find(o.visitBtnsWrap), this.$cookieGeoClose = n.find(o.closeBtn), this.$selectBtnWrap = n.find(o.selectListWrap), this.$selectListHead = n.find(o.selectListHead), this.$geoSelectWrap = n.find(o.geoSelectWrap), this.$selectListToggleBtn = n.find(o.selectListToggleBtn), this.$geoMsgCookie = n.find(o.geoMsgCookie), this.$geoMsgCookieSebn = n.find(o.geoMsgCookieSebn)
            },
            initProperties: function() {
                var e = this.options.cookies;
                this.testSiteCd = this.getParam(e.siteCode), this.currentSiteCode = n.toLowerCase(), this.visitCountryCode = this.testSiteCd ? this.testSiteCd : t.cookie.getCookie(e.countryCodes).toLowerCase(), this.currentCountrySiteInfo = [], this.visitCountrySiteInfo = [], this.selectedSiteCode = "", this.acceptedCountries = [], t.cookie.getCookie(e.acceptedCountries) && (this.acceptedCountries = t.cookie.getCookie(e.acceptedCountries).split(","))
            },
            isLocalLanguageSite: function() { return this.currentSiteCode === this.visitCountryCode },
            isSameSiteGroup: function() {
                var n = this.visitCountrySiteInfo,
                    o = this.currentCountrySiteInfo[0],
                    a = !1;
                return o && e.each(o.country_codes, function(o, t) {
                    var c = t;
                    e.each(n, function(n, o) { e.inArray(c, o.country_codes) >= 0 && (a = !0) })
                }), a
            },
            setCountryInfo: function() {
                e.each(c, e.proxy(function(n, o) {
                    var a = o.country_codes,
                        t = o.site_code.toLowerCase(),
                        c = o;
                    e.each(a, e.proxy(function(n, e) { t === this.currentSiteCode && this.currentCountrySiteInfo.push(c), e === this.visitCountryCode && this.visitCountrySiteInfo.push(c) }, this))
                }, this))
            },
            append: function() {
                var n = this.visitCountrySiteInfo,
                    o = this.currentCountrySiteInfo[0];
                return n.length && o ? (this.$contryNameWrap.text(n[0].global.country_name), this.isSameSiteGroup() ? o = n[0] : this.$visitBtnsWrap.html('<button type="button" site_cd="' + o.site_code.toLowerCase() + '" data-omni="click" data-omni-type="content_click" data-omni-data="choose location:' + o.site_code.toLowerCase() + '" title="Visit ' + o.local.country_name + "/" + o.local.lang + ' site" class="cm-cookie-geo__list-cta"><span>' + o.local.country_name + ' <span class="lang">/ ' + o.local.lang + "</span></span></button>"), this.$selectListHead.html(o.local.country_name + ' <span class="lang">/ ' + o.local.lang + "</span>"), e.each(n, e.proxy(function(n, e) { this.$visitBtnsWrap.append('<button type="button" site_cd="' + e.site_code.toLowerCase() + '" data-omni="click" data-omni-type="content_click" data-omni-data="choose location:' + e.site_code.toLowerCase() + '" title="Visit ' + e.local.country_name + "/" + e.local.lang + ' site" class="cm-cookie-geo__list-cta"><span>' + e.local.country_name + ' <span class="lang">/ ' + e.local.lang + "</span></span></button>") }, this)), void(this.$visitBtnsWrap.find("button").length > 2 && this.$container.addClass("cm-cookie-geo--selectbox"))) : void this.$geoSelectWrap.remove()
            },
            bindEvents: function() { this.$cookieGeoClose.on("click", e.proxy(this.onCloseBtnClick, this)), this.$visitBtnsWrap.on("click", "button", e.proxy(this.onSelectBtnsClick, this)), this.$selectListToggleBtn.on("click", e.proxy(this.selectListOpen, this)) },
            onCloseBtnClick: function() {
                var n = this.options.cookies;
                e.inArray(this.currentSiteCode, this.acceptedCountries) < 0 && this.acceptedCountries.push(this.currentSiteCode), t.cookie.setCookie(n.accepted, "true", 90), t.cookie.setCookie(n.commonaccepted, "true", 90), t.cookie.setCookie(n.acceptedCountries, this.acceptedCountries, 90), this.offSlide()
            },
            onSelectBtnsClick: function(n) {
                var o = this.options.cookies;
                this.selectedSiteCode = e(n.currentTarget).attr(o.siteCode), e.inArray(this.currentSiteCode, this.acceptedCountries) < 0 && this.acceptedCountries.push(this.currentSiteCode), t.cookie.setCookie(o.accepted, "true", 90), t.cookie.setCookie(o.commonaccepted, "true", 90), t.cookie.setCookie(o.acceptedCountries, this.acceptedCountries, 90), this.setParamsCookie(o.siteCode, this.selectedSiteCode, 999)
            },
            isAcceptedGeo: function() { return !!t.cookie.getCookie(this.options.cookies.accepted) },
            isAcceptedCommon: function() { return !!t.cookie.getCookie(this.options.cookies.commonaccepted) },
            isAcceptedCountries: function() { return e.inArray(this.currentSiteCode, this.acceptedCountries) < 0 ? !1 : !0 },
            setParamsCookie: function(n, e, o) {
                var a = new Date,
                    t = window.location.protocol + "//" + window.location.host + "/" + this.selectedSiteCode;
                a.setDate(a.getDate() + parseInt(o)), document.cookie = n + "=" + escape(e) + "; path=/; expires=" + a.toGMTString() + ";", window.location.href = t
            },
            getParam: function(n) {
                var e = {};
                return document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
                    function n(n) { return decodeURIComponent(n.split("+").join(" ")) }
                    e[n(arguments[1])] = n(arguments[2])
                }), e[n]
            },
            onSlide: function() { this.$body.addClass(a.SUPPORT.COOKIE_WARNING) },
            offSlide: function() { this.$body.removeClass(a.SUPPORT.COOKIE_WARNING) },
            selectListToggle: function() { this.$selectBtnWrap.toggleClass("s-select-open") },
            selectListOpen: function() {
                var n = this.options.selectListOpenClass,
                    o = this.$selectBtnWrap;
                if (o.is(e("." + n))) return void this.selectListClose();
                this.$selectBtnWrap.addClass(n);
                var a = t.winSize().h - o.offset().top + e(window).scrollTop(),
                    c = this.$visitBtnsWrap.find("button").outerHeight() * this.$visitBtnsWrap.find("button").length;
                c > a && o.addClass("s-fixed"), this.$visitBtnsWrap.find("button").eq(0).focus()
            },
            selectListClose: function() { this.$selectBtnWrap.removeClass(this.options.selectListOpenClass), this.$selectBtnWrap.removeClass("s-fixed") }
        }
    }(), e(function() { o.cookieGeoNew.init(e(".cm-cookie-geo")) });
    var c = [{ site_code: "CA_FR", global: { country_name: "Canada", lang: "French" }, local: { country_name: "Canada", lang: "Français" }, country_codes: ["ca"] }, { site_code: "CA", global: { country_name: "Canada", lang: "English" }, local: { country_name: "Canada", lang: "English" }, country_codes: ["ca"] }, { site_code: "MX", global: { country_name: "Mexico", lang: "Spanish" }, local: { country_name: "México", lang: "Españo" }, country_codes: ["mx"] }, { site_code: "BR", global: { country_name: "Brazil", lang: "Portuguese" }, local: { country_name: "Brasil", lang: "Português" }, country_codes: ["br"] }, { site_code: "LATIN", global: { country_name: "Latin America", lang: "Spanish" }, local: { country_name: "Latin", lang: "Español" }, country_codes: ["gt", "ni", "do", "bo", "ec", "sv", "cr", "pa", "hn"] }, { site_code: "LATIN_EN", global: { country_name: "Latin America", lang: "English" }, local: { country_name: "Latin", lang: "English" }, country_codes: ["gy", "gp", "mq", "bb", "bm", "bz", "lc", "sr", "aw", "ht", "ag", "jm", "ky", "tt"] }, { site_code: "CO", global: { country_name: "Colombia", lang: "Spanish" }, local: { country_name: "Colombia", lang: "Español" }, country_codes: ["co"] }, { site_code: "AR", global: { country_name: "Argentina", lang: "Spanish" }, local: { country_name: "Argentina", lang: "Español" }, country_codes: ["ar"] }, { site_code: "UY", global: { country_name: "Uruguay", lang: "Spanish" }, local: { country_name: "Uruguay", lang: "Español" }, country_codes: ["uy"] }, { site_code: "PY", global: { country_name: "Paraguay", lang: "Spanish" }, local: { country_name: "Paraguay", lang: "Español" }, country_codes: ["py"] }, { site_code: "CL", global: { country_name: "Chile", lang: "Spanish" }, local: { country_name: "Chile", lang: "Español" }, country_codes: ["cl"] }, { site_code: "PE", global: { country_name: "Peru", lang: "Spanish" }, local: { country_name: "Perú ", lang: "Español" }, country_codes: ["pe"] }, { site_code: "SG", global: { country_name: "Singapore", lang: "English" }, local: { country_name: "Singapore", lang: "English" }, country_codes: ["sg"] }, { site_code: "AU", global: { country_name: "Australia", lang: "English" }, local: { country_name: "Australia", lang: "English" }, country_codes: ["au"] }, { site_code: "NZ", global: { country_name: "New Zealand", lang: "English" }, local: { country_name: "New Zealand", lang: "English" }, country_codes: ["nz"] }, { site_code: "ID", global: { country_name: "Indonesia", lang: "Indonesian" }, local: { country_name: "Indonesia", lang: "Bahasa Indonesia" }, country_codes: ["id"] }, { site_code: "TH", global: { country_name: "Thailand", lang: "Thai" }, local: { country_name: "ประเทศไทย", lang: "ไทย" }, country_codes: ["th"] }, { site_code: "VN", global: { country_name: "Vietnam", lang: "Vietnamese" }, local: { country_name: "Việt Nam", lang: "Tiếng Việt" }, country_codes: ["vn"] }, { site_code: "MY", global: { country_name: "Malaysia", lang: "English" }, local: { country_name: "Malaysia", lang: "English" }, country_codes: ["my"] }, { site_code: "MM", global: { country_name: "Myanmar", lang: "Burmese" }, local: { country_name: "Myanmar", lang: "Burmese" }, country_codes: ["mm"] }, { site_code: "JP", global: { country_name: "Japan", lang: "Japanese" }, local: { country_name: "日本", lang: "日本語" }, country_codes: ["jp"] }, { site_code: "IN", global: { country_name: "India", lang: "English" }, local: { country_name: "India", lang: "English" }, country_codes: ["in", "np", "bd", "lk"] }, { site_code: "UK", global: { country_name: "United Kingdom", lang: "English" }, local: { country_name: "United Kingdom", lang: "English" }, country_codes: ["gb", "uk"] }, { site_code: "IE", global: { country_name: "Ireland", lang: "English" }, local: { country_name: "Ireland", lang: "English" }, country_codes: ["ie"] }, { site_code: "IT", global: { country_name: "Italy", lang: "Italian" }, local: { country_name: "Italia", lang: "Italiano" }, country_codes: ["it", "mt"] }, { site_code: "ES", global: { country_name: "Spain", lang: "Spanish" }, local: { country_name: "Espana", lang: "Espanol" }, country_codes: ["es"] }, { site_code: "HU", global: { country_name: "Hungary", lang: "Hungarian" }, local: { country_name: "Magyarország", lang: "Magyar" }, country_codes: ["hu"] }, { site_code: "DE", global: { country_name: "Germany", lang: "German" }, local: { country_name: "Deutschland", lang: "Deutsch" }, country_codes: ["de"] }, { site_code: "SE", global: { country_name: "Sweden", lang: "Swedish" }, local: { country_name: "Sverige", lang: "Svenska" }, country_codes: ["se"] }, { site_code: "DK", global: { country_name: "Denmark", lang: "Danish" }, local: { country_name: "Danmark", lang: "Dansk" }, country_codes: ["dk"] }, { site_code: "FI", global: { country_name: "Finland", lang: "Finnish" }, local: { country_name: "Suomi", lang: "Suomi" }, country_codes: ["fi"] }, { site_code: "NO", global: { country_name: "Norway", lang: "Norwegian" }, local: { country_name: "Norge", lang: "Norsk" }, country_codes: ["no"] }, { site_code: "FR", global: { country_name: "France", lang: "French" }, local: { country_name: "France", lang: "Français" }, country_codes: ["fr"] }, { site_code: "PT", global: { country_name: "Portugal", lang: "Portuguese" }, local: { country_name: "Portugal", lang: "Português" }, country_codes: ["pt"] }, { site_code: "PL", global: { country_name: "Poland", lang: "Polish" }, local: { country_name: "Polska", lang: "Polski" }, country_codes: ["pl"] }, { site_code: "GR", global: { country_name: "Greece", lang: "Greek" }, local: { country_name: "Ελλάδα", lang: "Ελληνικά" }, country_codes: ["gr"] }, { site_code: "CZ", global: { country_name: "Czech", lang: "Czech" }, local: { country_name: "Česká republika", lang: "Čeština" }, country_codes: ["cz"] }, { site_code: "SK", global: { country_name: "Slovakia", lang: "Slovakian" }, local: { country_name: "Slovensko", lang: "Slovenčina" }, country_codes: ["sk"] }, { site_code: "RO", global: { country_name: "Romania", lang: "Romanian" }, local: { country_name: "Romania", lang: "Romanian" }, country_codes: ["ro"] }, { site_code: "BG", global: { country_name: "Bulgaria", lang: "Bulgarian" }, local: { country_name: "България", lang: "Български" }, country_codes: ["bg"] }, { site_code: "AT", global: { country_name: "Austria", lang: "German" }, local: { country_name: "Österreich", lang: "Deutsch" }, country_codes: ["at"] }, { site_code: "CH", global: { country_name: "Switzerland", lang: "German" }, local: { country_name: "Schweiz", lang: "Deutsch" }, country_codes: ["ch"] }, { site_code: "CH_FR", global: { country_name: "Switzerland", lang: "French" }, local: { country_name: "Suisse", lang: "Francaise" }, country_codes: ["ch"] }, { site_code: "BE", global: { country_name: "Belgium", lang: "Dutch" }, local: { country_name: "België", lang: "Nederlands" }, country_codes: ["be"] }, { site_code: "BE_FR", global: { country_name: "Belgium", lang: "French" }, local: { country_name: "Belgium", lang: "French" }, country_codes: ["lu"] }, { site_code: "NL", global: { country_name: "Netherlands", lang: "Dutch" }, local: { country_name: "Nederland", lang: "Nederlands" }, country_codes: ["nl"] }, { site_code: "LV", global: { country_name: "Latvia", lang: "Latvian" }, local: { country_name: "Latvija", lang: "Latviešu" }, country_codes: ["lv"] }, { site_code: "LT", global: { country_name: "Lithuania", lang: "Lithuanian" }, local: { country_name: "Lietuva", lang: "Lietuvių" }, country_codes: ["lt"] }, { site_code: "EE", global: { country_name: "Estonia", lang: "Estonian" }, local: { country_name: "Eesti", lang: "Eesti" }, country_codes: ["ee"] }, { site_code: "RS", global: { country_name: "Serbia", lang: "Serbian" }, local: { country_name: "Cрбија", lang: "Cрпски" }, country_codes: ["rs"] }, { site_code: "HR", global: { country_name: "Croatia", lang: "Croatian" }, local: { country_name: "Hrvatska", lang: "Hrvatski" }, country_codes: ["hr"] }, { site_code: "SI", global: { country_name: "Slovenia", lang: "Slovenijan" }, local: { country_name: "Slovenija", lang: "Slovenščina" }, country_codes: ["sl"] }, { site_code: "AL", global: { country_name: "Albania", lang: "Albania" }, local: { country_name: "Shqipëri", lang: "Shqi" }, country_codes: ["al"] }, { site_code: "RU", global: { country_name: "Russia", lang: "Russian" }, local: { country_name: "Россия", lang: "Русский" }, country_codes: ["ru"] }, { site_code: "UA", global: { country_name: "Ukraine", lang: "Ukrainian" }, local: { country_name: "Україна", lang: "Українська" }, country_codes: ["ua"] }, { site_code: "UA_RU", global: { country_name: "Ukraine", lang: "Russian" }, local: { country_name: "Украина", lang: "Pусский" }, country_codes: ["ua"] }, { site_code: "KZ_RU", global: { country_name: "Kazakhstan", lang: "Russian" }, local: { country_name: "Kazakhstan", lang: "Pусский" }, country_codes: ["kz"] }, { site_code: "KZ_KZ", global: { country_name: "Kazakhstan", lang: "Kazakh" }, local: { country_name: "Kazakhstan", lang: "Қазақ" }, country_codes: ["kz"] }, { site_code: "AE", global: { country_name: "UAE", lang: "English" }, local: { country_name: "UAE", lang: "English" }, country_codes: ["bh", "ae", "ye", "om", "qa", "kw"] }, { site_code: "AE_AR", global: { country_name: "UAE", lang: "Arabic" }, local: { country_name: "الإمارات ", lang: "العربية" }, country_codes: ["ae"] }, { site_code: "IL", global: { country_name: "Israel", lang: "Hebrew" }, local: { country_name: "ישראל", lang: "עברית" }, country_codes: ["il"] }, { site_code: "SA", global: { country_name: "Saudi Arabia", lang: "Arabic" }, local: { country_name: "المملكة العربية السعودية", lang: "عربي" }, country_codes: ["sa", "ly"] }, { site_code: "SA_EN", global: { country_name: "Saudi Arabia", lang: "English" }, local: { country_name: "Saudi Arabia", lang: "English" }, country_codes: ["sa"] }, { site_code: "TR", global: { country_name: "Turkey", lang: "Turkish" }, local: { country_name: "Türkiye", lang: "Türkçe" }, country_codes: ["tr"] }, { site_code: "IRAN", global: { country_name: "Iran", lang: "Persian" }, local: { country_name: "ایران", lang: "فارسي" }, country_codes: ["lr"] }, { site_code: "LEVANT", global: { country_name: "Levant", lang: "English" }, local: { country_name: "Levant", lang: "English" }, country_codes: ["lb", "jo", "iq"] }, { site_code: "PK", global: { country_name: "Pakistan", lang: "English" }, local: { country_name: "Pakistan", lang: "English" }, country_codes: ["pk", "af"] }, { site_code: "EG", global: { country_name: "Egypt", lang: "Arabic" }, local: { country_name: "البلد مصر", lang: "العربية" }, country_codes: ["eg", "so", "er"] }, { site_code: "LB", global: { country_name: "Lebanon", lang: "Lebanon" }, local: { country_name: "Lebanon", lang: "English" }, country_codes: ["lb"] }, { site_code: "N_AFRICA", global: { country_name: "Africa", lang: "French" }, local: { country_name: "Maroc", lang: "Français" }, country_codes: ["ma", "dz", "tn"] }, { site_code: "AFRICA_EN", global: { country_name: "Africa Pan", lang: "English" }, local: { country_name: "Africa", lang: "English" }, country_codes: ["gh", "gm", "na", "ng", "lr", "mw", "bw", "sz", "sl", "et", "ug", "zm", "zw", "ke", "tz"] }, { site_code: "AFRICA_FR", global: { country_name: "Africa Pan", lang: "French" }, local: { country_name: "Afrique", lang: "Français" }, country_codes: ["ga", "gn", "ne", "rw", "re", "mg", "yt", "ml", "mu", "mr", "bj", "bi", "bf", "sn", "sc", "cf", "dj", "td", "cm", "km", "ci", "cg", "cd", "tg"] }, { site_code: "AFRICA_PT", global: { country_name: "Africa Pan", lang: "Portuguese" }, local: { country_name: "África", lang: "Português" }, country_codes: ["gw", "mz", "ao", "cv"] }, { site_code: "ZA", global: { country_name: "South Africa", lang: "English" }, local: { country_name: "South Africa", lang: "English" }, country_codes: ["za"] }, { site_code: "US", global: { country_name: "USA", lang: "English" }, local: { country_name: "USA", lang: "English" }, country_codes: ["us"] }, { site_code: "CN", global: { country_name: "China", lang: "Chinese" }, local: { country_name: "中国", lang: "中文" }, country_codes: ["cn"] }, { site_code: "HK", global: { country_name: "Hong Kong", lang: "Chinese" }, local: { country_name: "香港", lang: "繁體中文" }, country_codes: ["hk"] }, { site_code: "HK_EN", global: { country_name: "Hong Kong", lang: "English" }, local: { country_name: "Hong Kong", lang: "English" }, country_codes: ["hk"] }, { site_code: "TW", global: { country_name: "Taiwan", lang: "Chinese" }, local: { country_name: "台灣", lang: "繁體中文" }, country_codes: ["tw"] }, { site_code: "SEC", global: { country_name: "Korea", lang: "Korean" }, local: { country_name: "대한민국", lang: "한국어" }, country_codes: ["kr"] }, { site_code: "PH", global: { country_name: "Philippines", lang: "English" }, local: { country_name: "Philippines", lang: "English" }, country_codes: ["ph"] }, { site_code: "VE", global: { country_name: "Venezuela", lang: "English" }, local: { country_name: "Venezuela", lang: "English" }, country_codes: ["sg", "ve"] }]
}(window, jQuery);

function popup_open(e, o, n) {
    var w = window.screenX || window.screenLeft || 0,
        i = window.screenY || window.screenTop || 0,
        p = w + (window.outerWidth - o) / 2,
        t = i + (window.outerHeight - n) / 2;
    window.open(e, "open_popup", "width=" + o + ",height=" + n + ",left=" + p + ",top=" + t)
}
var SITE_CD = "";
SITE_CD = "" != $("#siteCode").val() && void 0 != $("#siteCode").val() ? $("#siteCode").val() : "sec";
var USE_ESTORE = !0,
    DOMAIN = "";
DOMAIN = "" != $("#domain").val() && void 0 != $("#domain").val() ? $("#domain").val() : "www.samsung.com";
var STORE_DOMAIN = "";
"N" == $("#useStore").val() && (USE_ESTORE = !1), STORE_DOMAIN = "" != $("#storeDomain").val() ? $("#storeDomain").val() : location.protocol + "shop.samsung.com";
var LOGIN = { msg: { signBtnText1: $("#signBtnText1").val(), signBtnText2: $("#signBtnText2").val(), errorTitleText: $("#errorTitleText").val(), errorText1: $("#errorText1").val(), errorText2: $("#errorText2").val(), errorText3: $("#errorText3").val(), errorText4: $("#errorText4").val() } },
    SEC_LOCAL_URL_CHECKMEMBERSTATE = "http://local.sec.samsung.com/comLocal/checkMemberStateAjax.do",
    SEC_LOCAL_URL_SIGNIN = "http://local.sec.samsung.com/comLocal/loginCheck.do";
$("#loginForm input[name=domain]").val(DOMAIN), $("#joinForm input[name=domain]").val(DOMAIN), $("#findAccountForm input[name=domain]").val(DOMAIN),
    function(o, e) {
        "use strict";
        o(function() { o(".layer_popup .close, .layer_popup .icon-close-x, .layer_popup .alert-ok-button").click(function() { return "close" == o(this).data("popup") && o(".accesseFocusTarget").trigger("focus"), o(".layer_popup").hide(), o(".lightbox-skrim").hide(), !1 }) })
    }(jQuery, window);
var ss = $;
! function(e) {
    e(document).ajaxError(function(e, t, o, n) {
        if (t.responseText) try {
            var i = JSON.parse(t.responseText);
            i && i.jsonData && i.jsonData.description && (location.href = i.jsonData.description)
        } catch (r) {}
    }), ss.Main = function() {
        function t() { ss.clickEvent = navigator && "Win" === navigator.platform.substring(0, 3) ? "click" : "fastclick", ss.mouseenterEvent = navigator && "Win" === navigator.platform.substring(0, 3) ? "mouseenter" : "fastclick", ss.mouseleaveEvent = navigator && "Win" === navigator.platform.substring(0, 3) ? "mouseleave" : "fastclick", (new ss.PopAlign).init(), o() }

        function o() {
            function t(e) { i || (window.webkitRequestAnimationFrame(function() { r && (eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), ss.metrics), r = !1), s && (eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics), s = !1), i = !1 }), i = !0) }
            var o = { width: 0, height: 0 },
                n = function() {
                    return function(e, t) {
                        t || (t = 100);
                        var o = function() { return +new Date }(),
                            n = null;
                        return function() {
                            var i = arguments;
                            n && (clearTimeout(n), n = null);
                            var r = function() { return +new Date }();
                            r - o > t ? (e.apply(this, i), o = r) : n = setTimeout(function() { e.apply(this, i) }, t)
                        }
                    }
                }(),
                i = !1,
                r = !1,
                s = !1;
            e(window).on("resize", n(function(e) {
                var n = ss.Detect();
                if (o.width !== n.width || o.height !== n.height)
                    if (o.width = n.width, o.height = n.height, s = !0, "undefined" != typeof window.webkitRequestAnimationFrame) t();
                    else {
                        var i = jQuery.Event(eventDictionary.global.RESIZE);
                        e.originalEvent = {}, i.originalEvent = e, eventBridge.trigger(i, n)
                    }
            }, 250));
            var a = 0;
            e(window).on("scroll", n(function(e) {
                var o = ss.Detect();
                r = !0, "undefined" != typeof window.webkitRequestAnimationFrame ? t() : eventBridge.trigger(jQuery.Event(eventDictionary.global.SCROLL), o), clearTimeout(a)
            }, 250))
        }
        t()
    }
}(jQuery);
var eventBridge, eventDictionary = { global: { RESIZE: "resize", ROTATE: "rotate", SCROLL: "scroll" }, autocomplete: { REQUEST_AUTOCOMPLETE: "request_autocomplete", AUTOCOMPLETE_RESULT: "autocomplete_result", AUTOCOMPLETE_ERROR: "autocomplete_error", AUTOCOMPLETE_HIDE: "autocomplete_hide" } };
$(function() {
    eventBridge = $("<div/>");
    new ss.Main
});
var ss = $;
! function(e) {
    var t = e(window),
        o = null;
    ss.Detect = function() {
        function n() { return S = null !== f() ? e(window).width() : window.innerWidth ? window.innerWidth : document.documentElement.clientWidth }

        function i() { var e = /iPhone|iPod|iPad/.test(window.navigator.userAgent); return e }

        function r() { var e = /(iPad|iPhone);.*CPU.*OS 7_\d/i.test(window.navigator.userAgent); return e }

        function s() { if (!u()) return !1; var e = (/MSIE\s([\d.]+)/.test(window.navigator.userAgent), Number(RegExp.$1)); return 9 > e ? !0 : !1 }

        function a() { var e = (/MSIE\s([\d.]+)/.test(window.navigator.userAgent), Number(RegExp.$1)); return 8 === e ? e : void 0 }

        function c() { var e = (/MSIE\s([\d.]+)/.test(window.navigator.userAgent), Number(RegExp.$1)); return 9 === e ? e : !1 }

        function u() {
            var e = navigator.appName,
                t = new RegExp("Trident/.*rv:([0-9]{1,}[/.0-9]{0,})"),
                o = !1;
            return ("Microsoft Internet Explorer" === e || "Netscape" === e && null !== t.exec(navigator.userAgent)) && (o = !0), o
        }

        function p() { return navigator.userAgent.match(/Android/i) }

        function v() { return navigator.userAgent.match(/BlackBerry/i) }

        function d() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) }

        function l() { return navigator.userAgent.match(/Opera Mini/i) }

        function h() { return navigator.userAgent.match(/IEMobile/i) }

        function f() { return void 0 === T && (T = p() || v() || d() || l() || h()), T }

        function g() { var e = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor); return e ? e : void 0 }

        function w() { return t.scrollTop() }

        function m() { return window.location.pathname.split("/")[1] }

        function O(t) {
            var o = t.offset(),
                n = 0,
                i = e(".jump-module.docked");
            return i.length > 0 && (n += i.outerHeight()), o.top - n
        }
        var E, y, b, P, T, S, A = t.width(),
            I = t.height(),
            D = A > I ? "landscape" : "portrait",
            H = "undefined" != typeof ss.metrics ? ss.metrics.device : "desktop";
        n(), o = o ? o : e(".body_wrapper"), 480 > S ? (b = "mobile", P = 1) : 768 > S ? (b = "mobile-landscape", P = 1) : 1024 > S ? (b = "tablet-portrait", P = 2) : 1280 >= S ? (b = "tablet-landscape", P = 3) : (b = "desktop", P = 4), y = ss.metrics ? ss.metrics.device : b;
        var R = w();
        E = o.width();
        var B = { deviceChanged: H !== b, device: b, prevDevice: y, deviceLayoutId: P, wrapperWidth: E, width: S, realWidth: n, height: I, aspectRatio: D, isIOS: i, isIOS7: r, isIE8Less: s, isIE: u, isIE8: a, isIE9: c, Android: p, BlackBerry: v, iOS: d, Opera: l, Windows: h, isMobile: f, isSafari: g, scrollTop: R, scrollBottom: I + R, elemTop: O, region: m, LAYOUT_ID_MOBILE: 1, LAYOUT_ID_TBLT_PORT: 2, LAYOUT_ID_TBLT_LAND: 3, LAYOUT_ID_DESKTOP: 4 };
        return ss.metrics = B, B
    }, ss.scrollTo = function(t, o, n, i, r) {
        var s = o || e(t).offset().top,
            a = n || 800,
            c = (i ? i() : null, r || 0);
        ss.htmlBody.animate({ scrollTop: ss.htmlBody.scrollTop() + s - c }, a, function() {})
    }, ss.scrollTop = function(t, o, n, i) {
        if (e("#content").find(".filter-sortby")) var r = e("#resultBar").innerHeight();
        else var r = 0; {
            var s = o || e(t).offset().top,
                a = n || 800;
            i ? i() : null
        }
        ss.htmlBody.animate({ scrollTop: s - r }, a, function() {})
    }, ss.PopAlign = function() {
        return {
            init: function() {
                var e = this;
                e.bindEvents()
            },
            bindEvents: function() {
                function t(t) { t || (t = e(this)) }
                e(".popAlign").each(function() { this.popAlign = t }), eventBridge.on(eventDictionary.global.RESIZE, function(o, n) { e("html").hasClass("layer-open") || e(".popAlign").each(function() { t(e(this)) }) }), eventBridge.trigger(jQuery.Event(eventDictionary.global.RESIZE), ss.metrics)
            }
        }
    };
    var n = { click: "click" };
    ss.E = n
}(jQuery), ss.Popover = function(e, t) {
    function o() { var e = setTimeout(function() { clearTimeout(e), r.focus() }, 50) }

    function n() {
        a && clearTimeout(a), a = setTimeout(function() {
            var e = $(".popover.in .popover-content").find("button, a, input, select, [tabindex]").first();
            e.focus()
        }, 100)
    }

    function i() {
        t.hoverActivated = !0, t.handleFocusOnHide = "function" == typeof t.handleFocusOnHide ? t.handleFocusOnHide : o, t.handleFocusOnShow = "function" == typeof t.handleFocusOnShow ? t.handleFocusOnShow : n;
        try { r = $(e) } catch (i) { r = $(document.getElementById(e.substr(1))) }
        r.popover(t), r.on("show.bs.popover", function(e) { c.interOp2Show && "function" == typeof c.interOp2Show ? c.interOp2Show(c) : (ss.Popover.hideActive(e), eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_SHOW), this), s = ss.accessibilityManager.fromKeyboard(e)) }), r.on("hidden.bs.popover", function(e) { return c.tapProtect ? (c.interOp2Hide && "function" == typeof c.interOp2Hide && c.interOp2Hide(c), void(u = !1)) : (ss.Popover.activePopover = void 0, eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_HIDE), this), u = !1, void 0) }), r.on("shown.bs.popover", function() { ss.Popover.activePopover = c, s && t.handleFocusOnShow(), u = !0 }), t.lightbox && r.on("shown.bs.popover", function() {
            var e = containerP = $(".popover.in");
            t.container && (e = $(t.container).find(".popover.in"), containerP = $(t.container)), e.addClass("lightbox"), e.find(".arrow").hide();
            var o = $(window).outerWidth();
            o > 1280 && -1 != navigator.userAgent.indexOf("MSIE 8") && (o = 1280);
            var n = $(window).scrollTop(),
                i = n + Math.round(($(window).outerHeight() - e.outerHeight()) / 2);
            0 > i ? i = 0 : n > i && (i = n), e.css({ left: -1 * e.parent().offset().left + Math.round((o - e.outerWidth()) / 2), top: i })
        }), eventBridge.on(eventDictionary.global.RESIZE, function(e) {
            if (u) var t = setTimeout(function() {
                clearTimeout(t);
                var e = !1;
                document.activeElement && ("textarea" == document.activeElement.tagName.toLowerCase() ? e = !0 : "input" == document.activeElement.tagName.toLowerCase() && "text" == document.activeElement.type.toLowerCase() && (e = !0)), e || -1 != navigator.userAgent.indexOf("MSIE 8") || r.popover("reposition")
            }, 400)
        })
    }
    var r, s, a = null,
        c = this,
        u = !1;
    return this.targetElementSelector = e, this.hideOnScroll = t.hideOnScroll === !0, this.interOp2Show = t.interOp2Show, this.interOp2Hide = t.interOp2Hide, this.tapProtect = t.tapProtect, this.toggle = function() { r.popover("toggle") }, this.showOnly = function() { r.popover("showOnly"), u = !0 }, this.show = function() { r.popover("show") }, this.hide = function(e, o) { c.tapProtect ? o === !0 && (r.popover("hide"), e && t.handleFocusOnHide()) : (r.popover("hide"), e && t.handleFocusOnHide()) }, i(), this
};
var ss = $;
! function(e) {
    ss.Notification = function(t) {
        function o() { r = e("#" + t) }

        function n() { a = e('<div class="notification-background"></div>').hide(), s = e('<div id="open-notification" class="notification"><a class="close icon-close-x"></a></div>').hide(), s.append(r.html()), s.find(".close").on("click", i), e("body").append(a).append(s).css("overflow", "hidden"), a.slideDown(function() { s.fadeIn("fast") }) }

        function i() { s.fadeOut("fast", function() { a.slideUp("fast", function() { s.remove(), a.remove(), e("body").css("overflow", "") }) }) }
        var r, s, a;
        return o(), { show: n, hide: i }
    }, ss.Popover = function(t, o) {
        function n() { var e = setTimeout(function() { clearTimeout(e), s.focus() }, 50) }

        function i() {
            c && clearTimeout(c), c = setTimeout(function() {
                var t = e(".popover.in .popover-content").find("button, a, input, select, [tabindex]").first();
                t.focus()
            }, 100)
        }

        function r() {
            o.hoverActivated = !0, o.handleFocusOnHide = "function" == typeof o.handleFocusOnHide ? o.handleFocusOnHide : n, o.handleFocusOnShow = "function" == typeof o.handleFocusOnShow ? o.handleFocusOnShow : i;
            try { s = e(t) } catch (r) { s = e(document.getElementById(t.substr(1))) }
            s.popover(o), s.on("show.bs.popover", function(e) { u.interOp2Show && "function" == typeof u.interOp2Show ? u.interOp2Show(u) : (ss.Popover.hideActive(e), eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_SHOW), this), a = ss.accessibilityManager.fromKeyboard(e)) }), s.on("hidden.bs.popover", function(e) { return u.tapProtect ? (u.interOp2Hide && "function" == typeof u.interOp2Hide && u.interOp2Hide(u), void(p = !1)) : (ss.Popover.activePopover = void 0, eventBridge.trigger(jQuery.Event(eventDictionary.popover.EVENT_POPOVER_HIDE), this), p = !1, void 0) }), s.on("shown.bs.popover", function() { ss.Popover.activePopover = u, a && o.handleFocusOnShow(), p = !0 }), o.lightbox && s.on("shown.bs.popover", function() {
                var t = containerP = e(".popover.in");
                o.container && (t = e(o.container).find(".popover.in"), containerP = e(o.container)), t.addClass("lightbox"), t.find(".arrow").hide();
                var n = e(window).outerWidth();
                n > 1280 && -1 != navigator.userAgent.indexOf("MSIE 8") && (n = 1280);
                var i = e(window).scrollTop(),
                    r = i + Math.round((e(window).outerHeight() - t.outerHeight()) / 2);
                0 > r ? r = 0 : i > r && (r = i), t.css({ left: -1 * t.parent().offset().left + Math.round((n - t.outerWidth()) / 2), top: r })
            }), eventBridge.on(eventDictionary.global.RESIZE, function(e) {
                if (p) var t = setTimeout(function() {
                    clearTimeout(t);
                    var e = !1;
                    document.activeElement && ("textarea" == document.activeElement.tagName.toLowerCase() ? e = !0 : "input" == document.activeElement.tagName.toLowerCase() && "text" == document.activeElement.type.toLowerCase() && (e = !0)), e || -1 != navigator.userAgent.indexOf("MSIE 8") || s.popover("reposition")
                }, 400)
            })
        }
        var s, a, c = null,
            u = this,
            p = !1;
        return this.targetElementSelector = t, this.hideOnScroll = o.hideOnScroll === !0, this.interOp2Show = o.interOp2Show, this.interOp2Hide = o.interOp2Hide, this.tapProtect = o.tapProtect, this.toggle = function() { s.popover("toggle") }, this.showOnly = function() { s.popover("showOnly"), p = !0 }, this.show = function() { s.popover("show") }, this.hide = function(e, t) { u.tapProtect ? t === !0 && (s.popover("hide"), e && o.handleFocusOnHide()) : (s.popover("hide"), e && o.handleFocusOnHide()) }, r(), this
    }, ss.Popover.handleKbActions = function(t) {
        if (27 === t.which) ss.Popover.hideActive(!0);
        else if (9 === t.which) var o = setTimeout(function() { clearTimeout(o), e(":focus").parents(".popover.in").length || ss.Popover.hideActive(!0) }, 100)
    }, ss.Popover.hideActive = function() {
        var t = arguments[0],
            o = arguments[1];
        if ("boolean" == typeof t) { if ("object" == typeof o) return void(o.parents ? o.parents(".popover.in")[0] && o.parents(".popover.in")[0].chainObj && o.parents(".popover.in")[0].chainObj.hideOnly(!0) : e(".show.popover.in")[0] && e(".show.popover.in")[0].chainObj ? e(".show.popover.in")[0].chainObj.hideOnly(!0) : ss.Popover.activePopover && ss.Popover.activePopover.hide(t === !0, o)) } else { if (!ss.Popover.activePopover) return; if (("scroll" === t.type || "resize" === t.type) && e("html").hasClass("touch")) return; if (("scroll" === t.type || "resize" === t.type) && (e(".popover.in").hasClass("lightbox") || e(".popover.in").attr("data-tap-scroll-override"))) return; if (e(".popover.in").hasClass("lightbox") && !e(t.target).is(".lightbox-skrim") && e(t.target).is(".close-button")) return }(t === !0 || "resize" === t.type || "scroll" === t.type && ss.Popover.activePopover.hideOnScroll || "scroll" !== t.type && "resize" !== t.type && 0 === e(t.target).closest(".popover, " + ss.Popover.activePopover.targetElementSelector).length) && ss.Popover.activePopover.hide(t === !0, t)
    }, e(function() { e("body").on("tap", function(e) { ss.Popover.hideActive(e) }), e(".scrollwrapper").on("scroll", function(e) { ss.Popover.hideActive(e) }), e("body").on("keydown", ".popover.in", function(e) { ss.Popover.handleKbActions(e) }) })
}(jQuery);
var ss = $;
! function(e) {
    ss.Navigation = function() {
        {
            var t = (ss.metrics, e("body"));
            t.find(".gb-gnb"), t.find(".cookie-notice")
        }
        this.scrollToTop = function(t) { e("html, body").animate({ scrollTop: 0 }, t || 1e3) }
    }
}(jQuery);
var navigation;
$(function() { navigation = new ss.Navigation });
var jaaulde = window.jaaulde || {};
jaaulde.utils = jaaulde.utils || {}, jaaulde.utils.cookies = function() {
        var e, t, o, n, i = { expiresAt: null, path: "/", domain: null, secure: !1 };
        return e = function(e) { var t, o; return "object" != typeof e || null === e ? t = i : (t = { expiresAt: i.expiresAt, path: i.path, domain: i.domain, secure: i.secure }, "object" == typeof e.expiresAt && e.expiresAt instanceof Date ? t.expiresAt = e.expiresAt : "number" == typeof e.hoursToLive && 0 !== e.hoursToLive && (o = new Date, o.setTime(o.getTime() + 60 * e.hoursToLive * 60 * 1e3), t.expiresAt = o), "string" == typeof e.path && "" !== e.path && (t.path = e.path), "string" == typeof e.domain && "" !== e.domain && (t.domain = e.domain), e.secure === !0 && (t.secure = e.secure)), t }, t = function(t) { return t = e(t), ("object" == typeof t.expiresAt && t.expiresAt instanceof Date ? "; expires=" + t.expiresAt.toGMTString() : "") + "; path=" + t.path + ("string" == typeof t.domain ? "; domain=" + t.domain : "") + (t.secure === !0 ? "; secure" : "") }, o = function() {
            var e, t, o, n, i, r = {},
                c = document.cookie.split(";");
            for (e = 0; e < c.length; e += 1) {
                t = c[e].split("="), o = t[0].replace(/^\s*/, "").replace(/\s*$/, "");
                try { n = decodeURIComponent(t[1]) } catch (s) { n = t[1] }
                if ("object" == typeof JSON && null !== JSON && "function" == typeof JSON.parse) try { i = n, n = JSON.parse(n) } catch (u) { n = i }
                r[o] = n
            }
            return r
        }, n = function() {}, n.prototype.get = function(e) {
            var t, n, i = o();
            if ("string" == typeof e) t = "undefined" != typeof i[e] ? i[e] : null;
            else if ("object" == typeof e && null !== e) { t = {}; for (n in e) t[e[n]] = "undefined" != typeof i[e[n]] ? i[e[n]] : null } else t = i;
            return t
        }, n.prototype.filter = function(e) {
            var t, n = {},
                i = o();
            "string" == typeof e && (e = new RegExp(e));
            for (t in i) t.match(e) && (n[t] = i[t]);
            return n
        }, n.prototype.set = function(e, o, n) {
            if (("object" != typeof n || null === n) && (n = {}), "undefined" == typeof o || null === o) o = "", n.hoursToLive = -8760;
            else if ("string" != typeof o) {
                if ("object" != typeof JSON || null === JSON || "function" != typeof JSON.stringify) throw new Error("cookies.set() received non-string value and could not serialize.");
                o = JSON.stringify(o)
            }
            var i = t(n);
            document.cookie = e + "=" + encodeURIComponent(o) + i
        }, n.prototype.del = function(e, t) {
            var o, n = {};
            ("object" != typeof t || null === t) && (t = {}), "boolean" == typeof e && e === !0 ? n = this.get() : "string" == typeof e && (n[e] = !0);
            for (o in n) "string" == typeof o && "" !== o && this.set(o, null, t)
        }, n.prototype.test = function() {
            var e = !1,
                t = "cT",
                o = "data";
            return this.set(t, o), this.get(t) === o && (this.del(t), e = !0), e
        }, n.prototype.setOptions = function(t) { "object" != typeof t && (t = null), i = e(t) }, new n
    }(),
    function() {
        window.jQuery && ! function(e) {
            e.cookies = jaaulde.utils.cookies;
            var t = {
                cookify: function(t) {
                    return this.each(function() {
                        var o, n, i, r = ["name", "id"],
                            c = e(this);
                        for (o in r)
                            if (!isNaN(o) && (n = c.attr(r[o]), "string" == typeof n && "" !== n)) { c.is(":checkbox, :radio") ? c.attr("checked") && (i = c.val()) : i = c.is(":input") ? c.val() : c.html(), ("string" != typeof i || "" === i) && (i = null), e.cookies.set(n, i, t); break }
                    })
                },
                cookieFill: function() {
                    return this.each(function() {
                        var t, o, n, i, r = ["name", "id"],
                            c = e(this);
                        for (o = function() { return t = r.pop(), !!t }; o();)
                            if (n = c.attr(t), "string" == typeof n && "" !== n) { i = e.cookies.get(n), null !== i && (c.is(":checkbox, :radio") ? c.val() === i ? c.attr("checked", "checked") : c.removeAttr("checked") : c.is(":input") ? c.val(i) : c.html(i)); break }
                    })
                },
                cookieBind: function(t) {
                    return this.each(function() {
                        var o = e(this);
                        o.cookieFill().change(function() { o.cookify(t) })
                    })
                }
            };
            e.each(t, function(t) { e.fn[t] = this })
        }(window.jQuery)
    }();
$.cookies.data = { SEARCH_NAME: "bu_sk", NAVIGATION_NAME: "nh", PRIVATECODE_NAME: "pv", COMPARELIST_NAME: "cl", WISHLIST_NAME: "wl", INSTORE_PRIVATECODE_NAME: "ipv", HISTORY_NAME: "hi", STORE_REGION_NUM: "cnregionnum", STORE_REGION_CODE: "cnregion", STORE_REGION_NAME: "cnregionname", STORE_CITY_NUM: "cncitynamenum", STORE_CITY_CODE: "cncity", STORE_CITY_NAME: "cncityname", SEARCH_MAX_SIZE: 4, PRIVATECODE_MAX_SIZE: 5, WISHLIST_MAX_SIZE: 6, STORE_REGION_MAX_SIZE: 1, STORE_CITY_MAX_SIZE: 1, HISTORY_MAX_SIZE: 100 }, $.cookies.getDefaultOption = function(e, t) { return e && e instanceof Date || (e = new Date, e.setTime(e.getTime() + 864e5)), t && "" !== t || (t = "/"), defaultOptions = { expiresAt: e, path: t, domain: ".samsung.com", secure: !1 } }, $.cookies.setWishList = function(e, t) {
    var i = this.data.WISHLIST_NAME,
        o = this.get(i);
    if (o && "" != o && "undefined" != o) {
        if ($.inArray(e, o) >= 0) return;
        o.length >= this.data.WISHLIST_MAX_SIZE && o.splice(0, 1), o.push(e)
    } else o = [e];
    this.set(i, o, this.getDefaultOption(t))
}, $.cookies.getWishListCnt = function() { var e = this.get(this.data.WISHLIST_NAME); return e && $.isArray(e) ? e.length : 0 }, $.cookies.getWishList = function() { var e = this.get(this.data.WISHLIST_NAME); return e && $.isArray(e) ? e : [] }, $.cookies.isAddedWishList = function(e) {
    var t = this.data.WISHLIST_NAME,
        i = this.get(t);
    if (i && $.isArray(i))
        for (var o = 0, n = i.length; n > o; o++)
            if (i[o] == e) return !0;
    return !1
}, $.cookies.deleteWishProduct = function(e, t) {
    var i = this.data.WISHLIST_NAME,
        o = this.get(i);
    if (o && $.isArray(o)) { var n = $.inArray(e, o); if (n >= 0) return o.splice(n, 1), o.length <= 0 ? this.del(i, this.getDefaultOption(t)) : this.set(i, o, this.getDefaultOption(t)), !0 }
    return !1
}, $.cookies.deleteWishList = function(e) { this.del(this.data.WISHLIST_NAME, this.getDefaultOption(e)) }, $.cookies.setSearchKeyword = function(e, t) {
    var i = this.data.SEARCH_NAME,
        o = this.get(i);
    if (o && "" != o && "undefined" != o) {
        if ($.inArray(e, o) >= 0) return;
        o.length >= this.data.SEARCH_MAX_SIZE && o.splice(0, 1), o.push(e)
    } else o = [e];
    this.set(i, o, this.getDefaultOption(t, "/" + SITE_CD + "/business"))
}, $.cookies.getSearchKeyword = function() { var e = this.get(this.data.SEARCH_NAME); return e && $.isArray(e) ? e : [] }, $.cookies.clearSearchKeyword = function(e) { this.del(this.data.SEARCH_NAME, this.getDefaultOption(e, "/" + SITE_CD + "/business")) }, $.cookies.setHistoryCookie = function(e, t, i) {
    var o = this.data.HISTORY_NAME + "_" + t,
        n = this.get(o);
    n && "" != n && "undefined" != n ? $.each(n, function(t, i) { void 0 != i && void 0 != i.map && decodeURIComponent(i.map.location) == e && n.splice(t, 1) }) : n = new Array;
    var s = new Map;
    s.put("title", "main"), s.put("location", encodeURIComponent(e)), s.put("pin", ""), n[n.length] = s;
    var a = JSON.stringify(n);
    this.set(o, n, this.getDefaultOption(i, "/" + SITE_CD + "/")), document.cookie = o + "=" + encodeURIComponent(a)
}, $.cookies.getHistoryCookieList = function(e) { var t = $.cookies.get(this.data.HISTORY_NAME + "_" + e); return t && $.isArray(t) ? t : [] }, $.cookies.setHistoryCookiePin = function(e, t) {
    var i = this.data.HISTORY_NAME + "_" + t,
        o = this.get(i);
    $.each(o, function(t, i) { void 0 != i && void 0 != i.map && decodeURIComponent(i.map.location) == e && (i.map.pin = "pin" == i.map.pin ? "" : "pin") });
    var n = JSON.stringify(o);
    document.cookie = i + "=" + encodeURIComponent(n)
}, $.cookies.delHistoryCookieList = function(e, t) {
    var i = this.data.HISTORY_NAME + "_" + t,
        o = this.get(i);
    $.each(o, function(t, i) { void 0 != i && void 0 != i.map && decodeURIComponent(i.map.location) == e && o.splice(t, 1) });
    var n = JSON.stringify(o);
    document.cookie = i + "=" + encodeURIComponent(n)
};
try {
    if ($.cookies.get("cookie_country") && "" !== $.cookies.get("cookie_country")) {
        if (SITE_CD !== $.cookies.get("cookie_country")) {
            var deleteOption = $.cookies.getDefaultOption();
            $.cookies.del($.cookies.data.NAVIGATION_NAME, deleteOption), $.cookies.del($.cookies.data.PRIVATECODE_NAME, deleteOption), $.cookies.del($.cookies.data.COMPARELIST_NAME, deleteOption), $.cookies.del($.cookies.data.WISHLIST_NAME, deleteOption), $.cookies.del($.cookies.data.INSTORE_PRIVATECODE_NAME, deleteOption), $.cookies.set("cookie_country", SITE_CD, $.cookies.getDefaultOption())
        }
    } else $.cookies.set("cookie_country", SITE_CD, $.cookies.getDefaultOption())
} catch (e) {}! function(e, t, a) {
    "use strict";
    Granite.I18n.setLocale(SITE_CD);
    var s = "bu_" + SITE_CD,
        n = { getByteLength: function(e) { if (null == e || 0 === e.length) return 0; for (var t = 0, a = 0; a < e.length; a++) t += this.charByteSize(e.charAt(a)); return t }, cutByteLength: function(e, t) { if (null == e || 0 === e.length) return 0; for (var a = 0, s = e.length, n = 0; n < e.length; n++) { if (a += this.charByteSize(e.charAt(n)), a === t) { s = n + 1; break } if (a > t) { s = n; break } } return e.substring(0, s) }, charByteSize: function(e) { if (null === e || 0 === e.length) return 0; var t = e.charCodeAt(0); return 127 >= t ? 1 : 2047 >= t ? 2 : 65535 >= t ? 3 : 4 } },
        r = a("#typeAheadDomain").val() + "suggest",
        i = a("#typeAheadDomain").val() + "suggestdetail",
        c = a("#scene7domain").val(),
        o = e.smg.aem.components.common,
        l = a("#frontApiStageInfo").val(),
        g = "type-Ahead",
        d = function(e) {
            var t = !1,
                s = "";
            return s = a.trim(e).replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, ""), /[0-9a-zA-Z]/g.test(s) && (t = !0), t
        },
        _ = function(e) { var t = e; return null != t && void 0 != t && (t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\"/g, "&quot;").replace(/>/g, "&gt;").replace(/\'/g, "&#039;").replace(/vbscript/g, "").replace(/javascript/g, "")), t },
        u = function(e, t) {
            if (d(e) && d(t)) {
                if (e.toLowerCase().indexOf(t.toLowerCase()) > -1) {
                    var a = "<strong>",
                        s = "</strong>",
                        n = e.toLowerCase().indexOf(t.toLowerCase());
                    e = e.slice(0, n) + a + e.slice(n + Math.abs(0));
                    var r = e.toLowerCase().indexOf(t.toLowerCase()) + t.length;
                    e = e.slice(0, r) + s + e.slice(r + Math.abs(0))
                }
            } else e = e.replace(t, "<strong>".concat(t).concat("</strong>"));
            return e
        },
        h = function(e, t) {
            var a = "",
                s = c;
            if (e.indexOf("http:") > -1 || "" == e || e.indexOf("//stg-images.samsung.com/") > -1 || e.indexOf("//images.samsung.com/") > -1 || e.indexOf("//image.samsung.com/") > -1) a = e;
            else {
                if (e.indexOf("//") > -1) return e;
                t && (s = s.replace("/image/", "/content/")), a = s + e
            }
            return a
        },
        p = function() { a(".gb-gnb__search-suggest").hide(), a(".gb-gnb__search-suggest-list").html(""), a(".gb-gnb__search-typeahead ul").html(""), a(".gb-gnb__search-typeahead-title").html(""), a(".gb-gnb__search-typeahead").hide() },
        b = function(s, n) {
            s = a.trim(s.replace(/</g, " ").replace(/>/g, " "));
            var r = new Date;
            r.setTime(r.getTime() + 72576e5), a.cookies.setSearchKeyword(s, r);
            var i = a("#searchPath").val(),
                c = e.location.host;
            if (c.indexOf(":") > -1) { var o = i.charAt(i.length - 1); "/" === o && (i = i.slice(0, -1), i = i.concat(".html")) }
            s = encodeURIComponent(s), s = S(s, "%20", "+");
            var l = i.concat("?searchvalue=").concat(s);
            n && (l += "&searchTab=".concat(n)), t.location.href = l
        },
        v = function(s, n, r) {
            if (a.ajax({ type: "GET", url: n, success: function(e) {} }), "blank" === r) {
                var i = e.open("about:blank");
                i.location.href = s
            } else t.location.href = s
        },
        m = function() { var e = a.cookies.getSearchKeyword(); return e.reverse() },
        f = function() {
            var e = a(".gb-gnb__search-history.cookie ul");
            e.empty(), a(".gb-gnb__search-history-close").attr("disabled", "disabled"), a.each(m(), function(t, a) {
                var s = _(a);
                s = s.replace("sup", "<sup>").replace("/sup", "</sup>").replace("SUP", "<SUP>").replace("/SUP", "</SUP>");
                var n = '<li><a href="javascript:;" keyword="' + encodeURIComponent(a) + '">' + s + "</a></li>";
                e.append(n)
            }), e.find("li a").on("click", function() { b(decodeURIComponent(a(this).attr("keyword"))) }), p(), "" != e.html() && (a(".gb-gnb__search-history-close").removeAttr("disabled"), a(".gb-gnb__search-history.cookie").show())
        },
        y = function(e) { var t = String(e); return null == t || void 0 == t || "null" == t || "undefined" == t || "" == t ? !0 : !1 },
        C = function(e) { return !y(e) },
        w = function(e, a) { var s = e + "=" + escape(a); "undefined" != typeof cDay && (s += ";expires=" + expire.toGMTString() + ";"), t.cookie = s },
        k = function(e) {
            var a = new Date;
            a.setDate(a.getDate() - 1), t.cookie = e + "= ; expires=" + a.toGMTString() + ";"
        },
        I = function() {
            var e = new Date;
            e.setDate(e.getDate() - 1), a.cookies.clearSearchKeyword(e), f()
        },
        D = function(e, t) {
            var a = "",
                n = e.suggestion,
                r = e.searchIn;
            if (null != r && r.length > 0) {
                a += '<ul class="gb-gnb__search-suggest-list-category">';
                for (var i = 0; i < r.length; i++) {
                    var c = u(n[0], t),
                        o = '<span class="s-blue">'.concat(Granite.I18n.get(r[i], null, s)).concat("</span>");
                    a += '<li><a href="javascript:;" search_data="' + encodeURIComponent(n[0] + "@@" + r[i]) + '">' + Granite.I18n.get("{0} in {1}", [c, o], s) + "</a></li>"
                }
                a += "</ul>"
            }
            if (null != n && n.length > 0) {
                a += '<ul class="gb-gnb__search-suggest-list-select">';
                for (var l = 0; l < n.length; l++) a += '<li><a id="' + g + '_01_1604" href="javascript:;">' + u(n[l], t) + "</a></li>";
                a += "</ul>"
            }
            return a
        },
        j = function(t) {
            var a = "";
            if (null !== t) {
                var n = t.asrLink,
                    r = t.title,
                    i = t.subTitle,
                    c = t.description,
                    o = t.thumbUrl,
                    l = t.thumbUrlAlt,
                    d = t.contentsURL,
                    _ = t.ctaType,
                    u = t.videoID,
                    p = (t.videoType, t.modelName),
                    b = t.modelCode;
                if ("1" == _ || "" == _) {
                    if (a += "<li>", a += ' <div class="gb-gnb__search-product">', C(n)) {
                        var v = e.location.host;
                        if (v.indexOf(":") > -1) { var m = d.charAt(d.length - 1); "/" === m && (d = d.slice(0, -1)), d = d.concat(".html") }
                        a += '      <a id="' + g + '_01_1401" href="javascript:;" link_info="' + d + "@@" + n + '" class="gb-gnb__search-product-title" data-omni="search recommended:image/text|' + p.toLowerCase() + "|" + b.toLowerCase() + '" >', C(r) && (a += '           <strong id="' + g + '_01_14011" class="gb-gnb__search-product-title-btype">' + r + "</strong>"), (C(o) || C(l)) && (a += '          <span id="' + g + '_01_14012" class="gb-gnb__search-product-img"><img id="' + g + '_01_14013" src="' + h(o) + '" alt="' + l + '"></span>'), a += "      </a>"
                    } else C(r) && (a += '          <strong id="' + g + '_01_14011" class="gb-gnb__search-product-title-btype">' + r + "</strong>"), (gfn_isNotNul(o) || C(l)) && (a += '           <span id="' + g + '_01_14012" class="gb-gnb__search-product-img"><img id="' + g + '_01_14013" src="' + h(o) + '" alt="' + l + '"></span>');
                    C(i) && (a += ' <strong class="gb-gnb__search-product-sub-title">' + i + "</strong>"), C(c) && (a += '  <p class="gb-gnb__search-product-result-dsc">' + c + "</p>"), a += "    </div>", a += "</li>"
                }
                "2" == _ && (a += "<li>", a += '    <div class="gb-gnb__search-product">', a += '       <div id="' + g + '_01_1701" class="gb-gnb__search-product-title">', a += '      <strong id="' + g + '_01_17011" class="gb-gnb__search-product-title-btype">' + r + "</strong>", a += '      <span id="' + g + '_01_17012" class="gb-gnb__search-product-img">', a += '      <img id="' + g + '_01_17013" src="' + h(o) + '" alt="' + l + '">', a += '           <button type="button" class="s-btn-video js-video js-pop-btn" id="' + g + '_01_17014"', a += '              data-omni="search recommended:image/text|' + p.toLowerCase() + "|" + b.toLowerCase() + '"', a += '              data-vid-type="youtube"', a += '                data-vid-view="layer"', a += "              data-vid-data='{", a += '               "videoID" : "' + u + '",', a += '               "autoPlay" : "true",', a += '               "divID" : "gnb_search_video_uniq_id_1"}\'>', a += '             <span class="s-play-video" id="' + g + '_01_1715">' + Granite.I18n.get("WATCH VIDEO", null, s) + "</span>", a += "          </button>", a += "      </span>", a += "    </div>", a += ' <strong class="gb-gnb__search-product-sub-title">' + i + "</strong>", a += '        <p class="gb-gnb__search-product-result-dsc">' + c + "</p>", a += '     <div class="s-video-area video-area_5">', a += '            <div class="s-video-wrap video-wrap">', a += '              <div id="gnb_search_video_uniq_id_1" class="s-video-container brightCoveArea">', a += "             </div>", a += '             <button id="' + g + '_01_1716" type="button" class="s-media-close brightcove-bcc-btn-close js-pop-close" data-div-id="gnb_search_video_uniq_id_1">' + Granite.I18n.get("Close", null, s) + "</button>", a += "          </div>", a += "     </div>", a += " </div>", a += "</li>"), "4" == _ && (a += "<li>", a += '    <div class="gb-gnb__search-product">', a += '       <div id="' + g + '_01_1701" class="gb-gnb__search-product-title">', a += '      <strong id="' + g + '_01_17011" class="gb-gnb__search-product-title-btype">' + r + "</strong>", a += '      <span id="' + g + '_01_17012" class="gb-gnb__search-product-img">', a += '      <img id="' + g + '_01_17013" src="' + h(o) + '" alt="' + l + '">', a += '           <button type="button" class="s-btn-video js-video js-pop-btn" id="' + g + '_01_17014"', a += '              data-omni="search recommended:image/text|' + p.toLowerCase() + "|" + b.toLowerCase() + '"', a += '              data-vid-type="brightcove"', a += '             data-vid-view="layer"', a += "              data-vid-data='{", a += '               "playerType" : "brightcoveBc5PlayerLayer",', a += '             "countryCode" : "' + SITE_CD.toUpperCase() + '",', a += '               "videoTagID" : "brightcove_uniq_tag_1",', a += '                "videoID" : "' + u + '",', a += '               "autoPlay" : "true",', a += '               "divID" : "gnb_search_video_uniq_id_1"}\'>', a += '             <span class="s-play-video" id="' + g + '_01_1715">' + Granite.I18n.get("WATCH VIDEO", null, s) + "</span>", a += "          </button>", a += "      </span>", a += "    </div>", a += ' <strong class="gb-gnb__search-product-sub-title">' + i + "</strong>", a += '        <p class="gb-gnb__search-product-result-dsc">' + c + "</p>", a += '     <div class="s-video-area video-area_5">', a += '            <div class="s-video-wrap video-wrap">', a += '              <div id="gnb_search_video_uniq_id_1" class="s-video-container brightCoveArea">', a += "             </div>", a += '             <button id="' + g + '_01_1716" type="button" class="s-media-close brightcove-bcc-btn-close js-pop-close" data-div-id="gnb_search_video_uniq_id_1">' + Granite.I18n.get("Close", null, s) + "</button>", a += "          </div>", a += "     </div>", a += " </div>", a += "</li>"), "8" == _ && (a += "<li>", a += '    <div class="gb-gnb__search-product">', C(d) ? (a += '       <a id="' + g + '_01_1401" href="javascript:;" class="gb-gnb__search-product-title pdfDownload" data-href="' + d + '" data-omni="search recommended:image/text|' + p.toLowerCase() + "|" + b.toLowerCase() + '">', C(r) && (a += '           <strong id="' + g + '_01_14011" class="gb-gnb__search-product-title-btype">' + r + "</strong>"), (C(o) || C(l)) && (a += '          <span id="' + g + '_01_14012" class="gb-gnb__search-product-img"><img id="' + g + '_01_14013" src="' + h(o) + '" alt="' + l + '"></span>'), a += "      </a>") : (C(r) && (a += '           <strong id="' + g + '_01_14011" class="gb-gnb__search-product-title-btype">' + r + "</strong>"), (gfn_isNotNul(o) || C(l)) && (a += '           <span id="' + g + '_01_14012" class="gb-gnb__search-product-img"><img id="' + g + '_01_14013" src="' + h(o) + '" alt="' + l + '"></span>')), C(i) && (a += '    <strong class="gb-gnb__search-product-sub-title">' + i + "</strong>"), C(c) && (a += '  <p class="gb-gnb__search-product-result-dsc">' + c + "</p>"), a += "    </div>", a += "</li>"), "16" == _ && (a += "<li>", a += '   <div class="gb-gnb__search-product">', C(d) ? (a += '       <a id="' + g + '_01_1401" href="javascript:;" class="gb-gnb__search-product-title js-mail-form-layerReload" data-href="' + d + '" data-omni="search recommended:image/text|' + p.toLowerCase() + "|" + b.toLowerCase() + '">', C(r) && (a += '          <strong id="' + g + '_01_14011" class="gb-gnb__search-product-title-btype">' + r + "</strong>"), (C(o) || C(l)) && (a += '          <span id="' + g + '_01_14012" class="gb-gnb__search-product-img"><img id="' + g + '_01_14013" src="' + h(o) + '" alt="' + l + '"></span>'), a += "      </a>") : (C(r) && (a += '           <strong id="' + g + '_01_14011" class="gb-gnb__search-product-title-btype">' + r + "</strong>"), (gfn_isNotNul(o) || C(l)) && (a += '           <span id="' + g + '_01_14012" class="gb-gnb__search-product-img"><img id="' + g + '_01_14013" src="' + h(o) + '" alt="' + l + '"></span>')), C(i) && (a += '    <strong class="gb-gnb__search-product-sub-title">' + i + "</strong>"), C(c) && (a += '  <p class="gb-gnb__search-product-result-dsc">' + c + "</p>"), a += "    </div>", a += "</li>"), "32" == _ && (a += "<li>", a += '   <div class="gb-gnb__search-product">', C(d) ? (a += '       <a id="' + g + '_01_1401" href="javascript:;" class="gb-gnb__search-product-title js-exit-modal-alert-Reload" data-description="' + d + '" data-href="' + d + ' " data-omni="search recommended:image/text|' + p.toLowerCase() + "|" + b.toLowerCase() + '" >', C(r) && (a += '         <strong id="' + g + '_01_14011" class="gb-gnb__search-product-title-btype">' + r + "</strong>"), (C(o) || C(l)) && (a += '          <span id="' + g + '_01_14012" class="gb-gnb__search-product-img"><img id="' + g + '_01_14013" src="' + h(o) + '" alt="' + l + '"></span>'), a += "      </a>") : (C(r) && (a += '           <strong id="' + g + '_01_14011" class="gb-gnb__search-product-title-btype">' + r + "</strong>"), (gfn_isNotNul(o) || C(l)) && (a += '           <span id="' + g + '_01_14012" class="gb-gnb__search-product-img"><img id="' + g + '_01_14013" src="' + h(o) + '" alt="' + l + '"></span>')), C(i) && (a += '    <strong class="gb-gnb__search-product-sub-title">' + i + "</strong>"), C(c) && (a += '  <p class="gb-gnb__search-product-result-dsc">' + c + "</p>"), a += "    </div>", a += "</li>")
            }
            return a
        },
        x = function(e, t) {
            var n = "",
                r = e.contents.contsItemList;
            if (void 0 !== r && null !== r && r.length > 0) {
                var i = Granite.I18n.get("Recommended Results for {0}", ['<strong>"' + t + '"</strong>'], s);
                a(".gb-gnb__search-typeahead-title").html(i);
                for (var c = 0; c < r.length; c++) n += j(r[c])
            }
            return "" === a.trim(n) ? (a(".gb-gnb__search-typeahead").hide(), a(".gb-gnb__search-typeahead-title").html("")) : a(".gb-gnb__search-typeahead").show(), n
        },
        L = function(e, t) {
            var n = "",
                r = '<p class="gb-gnb__search-suggest-list-category-tit">' + Granite.I18n.get("Search Suggestion", null, s) + "</p>";
            return void 0 !== e.suggestion && null !== e.suggestion ? (n += D(e, t), a(".gb-gnb__search-suggest-nodata").hide()) : a(".gb-gnb__search-suggest-nodata").show(), "" !== a.trim(n) ? (n = r + n, a(".gb-gnb__search-suggest").show()) : a(".gb-gnb__search-suggest").hide(), n
        },
        S = function(e, t, a) { return e.split(t).join(a) };
    a.fn.typeAhead = function() {
        var s = null,
            c = a(".gb-gnb__search-input"),
            g = a(".gb-gnb__search-history.cookie"),
            d = c.parent().find(".s-ico-search"),
            _ = c.parent().find(".s-ico-close"),
            u = a(".gb-gnb__search-suggest"),
            h = a(".gb-gnb__search-typeahead ul"),
            m = "",
            y = function() {
                a(t).off("click", ".pdfDownload"), a(t).on("click", ".pdfDownload", function() {
                    var t = a(this).attr("data-href");
                    C(t) && e.open(t)
                }), a(t).off("click", ".gb-gnb__search-product .gb-gnb__search-product-title"), a(t).on("click", ".gb-gnb__search-product .gb-gnb__search-product-title", function() {
                    var e = a(this).attr("link_info");
                    if ("undefined" != e && null != e && void 0 != e) {
                        var t = e.split("@@").length > 0 ? e.split("@@")[0] : null,
                            s = e.split("@@").length > 1 ? e.split("@@")[1] : null;
                        w("index", !0), k("solutionFil"), k("insightFil"), v(t, s), y()
                    }
                }), a(t).off("click", ".gb-gnb__search-product-links a"), a(t).on("click", ".gb-gnb__search-product-links a", function() {
                    var e = a(this).attr("link_info"),
                        t = e.split("@@").length > 0 ? e.split("@@")[0] : null,
                        s = e.split("@@").length > 1 ? e.split("@@")[1] : null,
                        n = e.split("@@").length > 2 ? e.split("@@")[2] : null;
                    v(t, s, n), y()
                })
            },
            D = function(t) {
                g.hide(), u.show(), a(".gb-gnb__search-suggest-list-select li a").on("mouseover", function() {
                    a(".gb-gnb__search-typeahead").hide();
                    var e = a(this).text();
                    c.val(e), y()
                }).on("mouseout", function(e) { e.preventDefault(), a(this).parents().find(".gb-gnb__search-input").val(t), y() }).on("click", function() { c.val(a(this).text()), b(a(this).html().replace("<strong>", "").replace("</strong>", "").replace("<STRONG>", "").replace("</STRONG>", "")) }), a(".gb-gnb__search-suggest-list-category li a").on("click", function() {
                    var e = decodeURIComponent(a(this).attr("search_data")),
                        t = e.split("@@")[0],
                        s = e.split("@@")[1];
                    b(t, s)
                }).on("mouseover", function() {
                    var t = decodeURIComponent(a(this).attr("search_data")),
                        n = t.split("@@")[0],
                        r = t.split("@@")[1];
                    n = n.replace("<sup>", "").replace("</sup>", "").replace("<SUP>", "").replace("</SUP>", ""), m = a.trim(S(S(m, "<", " "), ">", " ")), c.val(n), a(e).width() >= 1024 && C(m) && C(r) && (a(".gb-gnb__search-typeahead").hide(), s && s.abort(), s = a.ajax({ url: i, type: "GET", data: { searchvalue: encodeURIComponent(m), siteCd: SITE_CD, stage: l, categorytab: r }, dataType: "jsonp", jsonp: "callback", jsonpCallback: "jQuery1910499421933433041_1385598221584", cache: !0, timeout: 3e4, success: function(e) { 200 === e.response.statusCode && h.html(x(e.response.resultData, m)) } }), o.exitModal.reinit(), o.mailForm.reinit(), "" !== h.html() && a(".gb-gnb__search-typeahead").show()), y()
                }), d.on("click", function() {
                    var e = a.trim(c.val());
                    0 === e.length && (e = c.attr("placeholder")), b(e)
                }), _.on("click", function() { a(".gb-gnb__search-typeahead").hide(), a(".gb-gnb__search-input").val("") })
            },
            j = function() {
                var e = null,
                    t = "";
                c.on("keyup", function() {
                    var s = a.trim(a(this).val()),
                        i = !1;
                    s.length > 1 ? (n.getByteLength(s) > 110 && (s = n.cutByteLength(s, 110), a(this).val(s), t === s && (i = !0), t = s), i || ("" === a(".gb-gnb__search-suggest-list").html() && p(), "" === a(".gb-gnb__search-suggest-list-select").html() && p(), s = a.trim(s.replace(/</g, " ").replace(/>/g, " ")), e && e.abort(), t = s, e = a.ajax({ url: r, type: "GET", data: { searchvalue: encodeURIComponent(s), siteCd: SITE_CD, stage: l }, dataType: "jsonp", jsonp: "callback", jsonpCallback: "jQuery1910499421933433041_1385598221584", cache: !0, timeout: 3e4, success: function(e) { 200 == e.response.statusCode && (a(".gb-gnb__search-suggest-list").html(L(e.response.resultData.common, s)), "" != a(".gb-gnb__search-suggest-list-select").html() && null != e.response.resultData.common.suggestion && e.response.resultData.common.suggestion.length > 0 && (m = e.response.resultData.common.suggestion[0], y(), D(s))) } }))) : (e && e.abort(), f(), 0 === s.length && (s = c.attr("placeholder")))
                }).on("keydown", function(t) {
                    if (13 === t.keyCode) {
                        var s = a.trim(a(this).val());
                        s = a.trim(s.replace(/</g, " ").replace(/>/g, " ")), 0 === s.length && (s = c.attr("placeholder")), e && e.abort(), b(s)
                    }
                }), d.on("click", function() { var e = a.trim(c.val()); "" !== e ? b(e) : (e = c.attr("placeholder"), b(e)) }), a(".gb-gnb__search-history-close").on("click", function() { I() }), a(".js-ico-search").on("click", function() { a(".gb-gnb__search-input").val(""), a(".gb-gnb__search-history.cookie").hide(), a(".gb-gnb__search-input").focus(), f() })
            };
        return { init: j() }
    }, a(function() {
        var e = a("#gb-gnb__search");
        e.typeAhead()
    })
}(window, document, $);

function nextGenLoginResult(e) {}
var ss = $;
! function(e) {
    ss.Sign = function() {
        function n(e) { e = e.split("+").join(" "); for (var n, t = {}, o = /[?&]?([^=]+)=([^&]*)/g; n = o.exec(e);) t[decodeURIComponent(n[1])] = decodeURIComponent(n[2]); return t }

        function t() {
            z.hide(), Q.hide(), K.hide(), $.removeClass("s-error s-valid"), Y.removeClass("s-error s-valid");
            var n = !0;
            if ("" == e.trim($.val()) ? (z.show(), K.show(), $.addClass("s-error"), n = !1) : $.addClass("s-valid"), "" == e.trim(Y.val()) ? (Q.show(), K.show(), Y.addClass("s-error"), n = !1) : Y.addClass("s-valid"), n) {
                var t = F.is(":checked");
                t ? m(e.trim($.val()), 7) : m(null, -1), L || (L = window.location.href), L = L.replace("/login", ""), e("#returnURL", U).val(encodeURIComponent(L)), e("#goBackURL", U).val(encodeURIComponent(L));
                var o = e("#registURL", U).val();
                if ("sec" != SITE_CD) {
                    var s = "",
                        a = window.location.port;
                    if (s = null == a || "" == a || "80" == a || "8080" == a ? "https://" + window.location.host : "http://" + window.location.host, o.indexOf(window.location.hostname) < 0) {
                        var i = s + o;
                        e("#registURL", U).val(i)
                    }
                }
                var c = e("#emailActivationURL", U).val();
                if (c.indexOf(window.location.hostname) < 0) {
                    var r = window.location.protocol + "//" + window.location.host + c;
                    e("#emailActivationURL", U).val(r)
                }
                return e("#userId", U).val(e.trim($.val())), e("#userPass", U).val(Y.val()), e(window).bind("beforeunload", function() { e("#userId", U).val(""), e("#userPass", U).val("") }), U.submit(), L = void 0, !1
            }
        }

        function o() { e.cookies.del("estoreLoginRequesting"), e.cookies.del("estoreLoginRequesting", { domain: ".samsung.com" }) }

        function s() { a(), e.cookies.del("snsSessionId"), e.cookies.del("snsSessionId", { path: "/", domain: ".samsung.com" }), e.cookies.del("isStoreLogedIn"), e.cookies.del("guid"), e.cookies.del("guid", { path: "/", domain: ".samsung.com" }), e.cookies.del("ticket_id"), e.cookies.del("ticket_id", { path: "/", domain: ".samsung.com" }), e.cookies.del("s_tagging"), e.cookies.del("s_tagging", { path: "/", domain: ".samsung.com" }), e.cookies.del("sa_em"), e.cookies.del("sa_em", { path: "/", domain: ".samsung.com" }), e.cookies.del("lastName", { domain: ".samsung.com" }), e.cookies.del("firstName", { domain: ".samsung.com" }), e.cookies.del("emailId", { domain: ".samsung.com" }), e.cookies.del("emailAddr", { domain: ".samsung.com" }), e.cookies.del("phone", { domain: ".samsung.com" }), e.cookies.del("userAccount", { domain: ".samsung.com" }), e.cookies.del("ReD", { domain: ".samsung.com" }), e.cookies.del("directCallFl", { expires: null, domain: ".samsung.com" }), e.cookies.del("directCallFlv2", { expires: null, domain: ".samsung.com" }), e.cookies.del("dotcomReturnURL", { domain: ".samsung.com" }), o() }

        function a() { e.cookies.del("xsdcbxyn"), e.cookies.del("xsdcbxyn", { path: "/", domain: ".samsung.com" }), e.cookies.del("xsdcxyn"), e.cookies.del("xsdcxyn", { path: "/", domain: ".samsung.com" }), e.cookies.del("iPlanetDirectoryPro"), e.cookies.del("iPlanetDirectoryPro", { path: "/", domain: ".samsung.com" }), e.cookies.del("iPlanetDirectoryProOptVal"), e.cookies.del("iPlanetDirectoryProOptVal", { path: "/", domain: ".samsung.com" }) }

        function i() { return s(), a(), w = null, c(!1), !1 }

        function c(n) {
            if (null == e.cookies.get("lastName") || null == e.cookies.get("firstName"))
                if (n)
                    if ("ca" != SITE_CD && "ca_fr" != SITE_CD) {
                        var t = "",
                            o = window.location.port;
                        t = null == o || "" == o || "80" == o || "8080" == o ? "https://" + window.location.host : "", e.ajax({
                            url: t + "/aemapi/data-login/getUserProfile",
                            type: "GET",
                            data: { siteCode: SITE_CD },
                            dataType: "jsonp",
                            jsonp: "callback",
                            success: function(n) {
                                if (n.UserVO) {
                                    e.cookies.del("firstName", { domain: ".samsung.com" }), e.cookies.del("lastName", { domain: ".samsung.com" });
                                    var t = n.UserVO.userBaseVO.userBaseIndividualVO.familyName,
                                        o = n.UserVO.userBaseVO.userBaseIndividualVO.givenName,
                                        s = n.userIdentificationVO.loginID;
                                    e.cookies.set("firstName", t, { domain: ".samsung.com" }), e.cookies.set("lastName", o, { domain: ".samsung.com" }), "au" == SITE_CD && e.cookies.set("sa_em", r(s), { domain: ".samsung.com" }), "sec" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + " " + o + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + " " + o + "</strong>", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + " " + t + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + " " + t + "</strong>", SITE_CD)))
                                } else e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD))
                            },
                            error: function() {}
                        })
                    } else e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD));
            else "ca" != SITE_CD && "ca_fr" != SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)));
            else {
                var s = e.cookies.get("firstName"),
                    a = e.cookies.get("lastName");
                "sec" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + s + " " + a + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + s + " " + a + "</strong>", SITE_CD))) : "ca" == SITE_CD || "ca_fr" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + a + " " + s + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + a + " " + s + "</strong>", SITE_CD)))
            }
        }

        function r(e) { for (var n = "", t = 0; t < e.length; t++) n += e.charCodeAt(t).toString(16); return n }

        function u() { return L = window.location.href, e("#findReturnURL", B).val(L), e("#findGoBackURL", B).val(L), _satellite.setVar("account", "account:find sign in info"), _satellite.track("account"), B.submit(), !1 }

        function l() {
            L = "http://" + window.location.host + "/" + SITE_CD + "/", _satellite.setVar("account", "account:sign up"), _satellite.track("account"), e("#joinReturnURL", P).val(L), e("#joinGoBackURL", P).val(L);
            var n = e("#joinRegistURL", P).val();
            if ("sec" != SITE_CD) {
                var t = "",
                    o = window.location.port;
                if (t = null == o || "" == o || "80" == o || "8080" == o ? "https://" + window.location.host : "http://" + window.location.host, n.indexOf(window.location.hostname) < 0) {
                    var s = t + n;
                    e("#joinRegistURL", P).val(s)
                }
            }
            var a = e("#joinEmailActivationURL", P).val();
            if (a.indexOf(window.location.hostname) < 0) {
                var i = window.location.protocol + "//" + window.location.host + a;
                e("#joinEmailActivationURL", P).val(i)
            }
            return P.submit(), !1
        }

        function m(e, n) {
            var t = new Date;
            t.setDate(t.getDate() + n), document.cookie = "_common_saveEmail=" + encodeURIComponent(e) + "; path=/; domain=.samsung.com; expires=" + t.toGMTString() + ";"
        }

        function g() {
            var e = document.cookie + ";",
                n = e.indexOf("_common_saveEmail", 0),
                t = ""; - 1 != n && (e = e.substring(n, e.length), begin = e.indexOf("=", 0) + 1, end = e.indexOf(";", begin), t = decodeURIComponent(e.substring(begin, end))), "" != t && ($.next().css({ visibility: "hidden" }), $.val(t), F.attr("checked", "checked"), F.prop("checked", !0), F.next().addClass(F.next().attr("data-acc-onclass")))
        }

        function d() { "N" == e.cookies.get("directCallFlv2") && ("undefined" != typeof dataLayer && "object" == typeof dataLayer && dataLayer.push({ event: "login", eventNonInteraction: !0 }), e.cookies.set("directCallFlv2", "Y", { expires: null, domain: ".samsung.com" })) }

        function _(n) { if (n) { e("#bu-g-gnb_01_0104").remove(), e("#bu-g-gnb_01_01047").attr("id", "bu-g-gnb_01_01037"), e("#bu-g-gnb_01_01041").attr("id", "bu-g-gnb_01_01031"), e("#bu-g-gnb_01_01037").attr("class", "s-svg no-outlink"); var t = ""; "global_nw" == SITE_CD ? (t = "/global/business/networks/mypage/", e("#bu-g-gnb_01_01037").attr("href", t)) : "global_cps" == SITE_CD ? (t = "/global/business/compressor/mypage/", e("#bu-g-gnb_01_01037").attr("href", t)) : "global_nw" != SITE_CD && "global_cps" != SITE_CD && (t = "/" + SITE_CD + "/business/mypage/", e("#bu-g-gnb_01_01037").attr("href", t)), e("#bu-g-gnb_01_0120201").hide(), e("#bu-g-gnb_01_0120202").show(), e("#bu-g-gnb_01_01202015").hide(), e("#bu-g-gnb_01_01202025").show(), e(".s-ico-login").addClass("s-ico-logout"), e(".s-ico-login").removeClass("s-ico-login"), e("#bu-g-gnb_logonA").show(), e("#bu-g-gnb_logon").hide() } else e("#bu-g-gnb_01_0103").remove(), e("#bu-g-gnb_01_0120201").show(), e("#bu-g-gnb_01_0120202").hide(), e("#bu-g-gnb_01_01202015").show(), e("#bu-g-gnb_01_01202025").hide(), e("#bu-g-gnb_logonA").hide(), e("#bu-g-gnb_logon").show() }

        function f() {
            function n(s) { o < t.length ? (estore.addWishListItemForce({ productCode: t[o] }, n), o++) : (e.cookies.deleteWishList(), e.EstoreIfQueue && e.EstoreIfQueue.setIsSignReady(!0)) }
            var t = e.cookies.getWishList(),
                o = 0;
            t.length > 0 ? n() : e.EstoreIfQueue && e.EstoreIfQueue.setIsSignReady(!0)
        }

        function p() { e(".layer_popup").hide(), X.empty() }

        function I(n) {
            if (n) {
                var t = LOGIN.msg.errorTitleText,
                    o = "";
                switch (n) {
                    case "DW":
                    case "AW":
                    case "WP":
                        o = LOGIN.msg.errorText1;
                        break;
                    case "BA":
                        o = LOGIN.msg.errorText2;
                        break;
                    case "UK":
                        o = LOGIN.msg.errorText3;
                        break;
                    case "ES":
                        o = LOGIN.msg.errorText4
                }
                H = ne, -1 == "pop-tit".indexOf(e("#confirmPopup >div> div.popup_wrap").find("h2").attr("class")) && (ne.append('<h2 class="pop-tit">'), ne.append('<p class="msg-text tc">')), e(".pop-tit", ne).text(t), e(".msg-text", ne).text(o)
            }
            ss.Popover.hideActive(ss.Popover.activePopover), e(".layer_popup").hide(), H && (X.empty(), X.append('<div class="lightbox-skrim"></div>'), H.show(), e(".lightbox-skrim").show(), document.getElementById(H.children("div").attr("id")).popAlign())
        }

        function h() {
            var n = "";
            n = "au" == SITE_CD || "de" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD ? STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/agreeStorePolicy?receiveEmail=" + k : ("es" == SITE_CD || "it" == SITE_CD) && STORE_DOMAIN.indexOf("https://") > -1 ? STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/agreeStorePolicy?receiveEmail=" + k : STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/setAgreeStorePolicy?receiveEmail=" + k, e.ajax({ url: n, type: "GET", dataType: "jsonp", jsonp: "callback", beforeSend: function() {}, success: function(e) { p(), "0000" == e.resultCode && ("sec" == SITE_CD && (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "36"), _satellite.track("account")), H = ee, I()) }, error: function(e, n, t) { "sec" == SITE_CD && (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "37"), _satellite.track("account")) } })
        }

        function C() {
            e("#signInForm").attr("action", R), L = window.location.href;
            var n = e("#redirect_uri", V).val();
            if ("sec" != SITE_CD) {
                var t = "",
                    o = window.location.port;
                if (t = null == o || "" == o || "80" == o || "8080" == o ? "https://" + window.location.host : "http://" + window.location.host, n.indexOf(window.location.hostname) < 0) {
                    var s = t + n;
                    e("#redirect_uri", V).val(s)
                }
            }
            var a = "GLB" + Math.random().toString(36).substr(2, 11);
            e.cookies.set("glbState", a, { domain: ".samsung.com" }), e("#response_type", V).val("code"), e("#countryCode", V).val(e("#countryCode", V).val()), e("#redirect_uri", V).val(e("#redirect_uri", V).val()), e("#state", V).val(a), e("#goBackURL", V).val(L), e("#scope", V).val("");
            var i = e("#loginAccountServiceId").val();
            if (i) {
                var c = i;
                e("#client_id", V).val(c)
            }
            var r = e("#languageCode").val(),
                u = e("#countryCode").val();
            if (r && u) {
                var l = r + "_" + u;
                e("#locale", V).val(l)
            }
            e.cookies.set("returnURL", L, { domain: ".samsung.com" }), e.cookies.set("dotcomReturnURL", L, { domain: ".samsung.com" }), V.submit();
            var g = F.is(":checked");
            g ? m(e.trim($.val()), 7) : m(null, -1), L = void 0
        }

        function E() { e.ajax({ url: e("#secDomainURL").val() + "/sec/business/support/member/account/signin/check/", type: "GET", dataType: "jsonp", jsonp: "callback", beforeSend: function() {}, success: function(n) { "A" === n.B2BLoginYN || "R" === n.B2BLoginYN ? (_(!0), "A" === n.B2BLoginYN ? (e("#bu-g-gnb_01_010302").show(), e("#bu-g-gnb_01_012020202").show(), e("#bu-g-gnb_logon").hide(), e("#bu-g-gnb_logonA").show(), e("#bu-g-gnb_logonR").hide()) : (e("#bu-g-gnb_01_010302").hide(), e("#bu-g-gnb_01_012020202").hide(), e("#bu-g-gnb_logon").hide(), e("#bu-g-gnb_logonA").hide(), e("#bu-g-gnb_logonR").show())) : _(!1) }, error: function(e, n, t) {} }) }

        function S() {
            e("#signOutForm").attr("action", x), L = window.location.href;
            var n = e("#signOutURL", W).val(),
                t = "",
                o = window.location.port;
            if (t = null == o || "" == o || "80" == o || "8080" == o ? "https://" + window.location.host : "http://" + window.location.host, n.indexOf(window.location.hostname) < 0) {
                var s = t + n;
                e("#signOutURL", W).val(s)
            }
            var a = "GLB" + Math.random().toString(36).substr(2, 11);
            e.cookies.set("glbState", a, { domain: ".samsung.com" }), e("#state", W).val(a);
            var i = e("#loginAccountServiceId").val();
            if (i) {
                var c = i;
                e("#client_id", W).val(c)
            }
            e.cookies.set("dotcomReturnURL", L, { domain: ".samsung.com" }), W.submit(), L = void 0
        }

        function y() { U = e("#loginForm"), P = e("#joinForm"), B = e("#findAccountForm"), V = e("#signInForm"), W = e("#signOutForm"), j = e("#loginLayerPopup"), $ = e("#email"), Y = e("#password"), F = e("#save-mail"), q = e("label[for='save-mail']"), z = e("#errorId"), Q = e("#errorPw"), K = e("#status"), $signInBtn = e("input[type='submit'].sign-in__btn-submit"), $signUpBtn = e(".sign-in__btn-submit__black"), $findAccountBtn = e(".sign-in__form-forgot-password a"), $signToggleArrow = e("#signToggleArrow"), J = e("#loginLayerPopup .login-close-btn"), $loginLeaveBtn = e(".login-leave-btn"), X = e("#dimContainer"), $storeLoginCheckIframe = e("#storeLoginCheckIframe"), Z = e("#privacyPopup"), ee = e("#preferencePopup"), ne = e("#confirmPopup"), te = e("#privacyBtn", Z), $privacyCheck1 = e("#privacy-terms", Z), $privacyCheck2 = e("#privacy-terms2", Z), $errorPrivacy = e("#errorPrivacy", Z), oe = e("#preferenceCheckBtn", ee), se = e("#privacyCloseBtn") }

        function T() {
            function n(e) { 0 == e ? C() : ss.Auth.signOut(L) }
            $signInBtn.click(function() { t() }), $signUpBtn.click(function() { l() }), $findAccountBtn.click(function() { u() }), J.click(function() { e(this).closest("#loginLayerPopup").is(":visible") && (e("body").removeClass("gb-login-open"), e("#loginLayerPopup .popAlign").trigger("clickoutside", "touchstartoutside")) }), $loginLeaveBtn.click(function() { return ss.Auth.signOut(), !1 }), e(document).on("click", G, function(t) { t.preventDefault(), "br" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD ? window.location.href = "desktop" != ss.Detect().device ? e(this).attr("href") : e(this).find("a").attr("href") : ss.Auth.checkSignIn(n) }), e(document).on("click", M, function(t) { t.preventDefault(), "br" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD ? window.location.href = "desktop" != ss.Detect().device ? e(this).attr("href") : e(this).find("a").attr("href") : ss.Auth.checkSignIn(n) }), e(document).on("click", N, function(e) { return e.preventDefault(), ss.Auth.checkSignIn(n), !1 }), e(".sign_input").focusin(function() {
                switch (e(this).attr("id")) {
                    case $.attr("id"):
                        z.hide();
                        break;
                    case Y.attr("id"):
                        Q.hide()
                }
            }), e(".sign-in__form-text").unbind("keydown").bind("keydown", function(n) {
                if ("13" == n.keyCode) switch (n.preventDefault(), e(this).attr("id")) {
                    case $.attr("id"):
                    case Y.attr("id"):
                        t()
                }
            }), F.focusin(function(e) { e.preventDefault(), q.addClass("fs-boarder") }), F.focusout(function(e) { e.preventDefault(), q.removeClass() }), te.click(function() { var n = $privacyCheck1.is(":checked"); return n ? (_satellite.setVar("account", "account:email verification"), _satellite.track("account"), k = $privacyCheck2.is(":checked"), void(0 == b ? h() : (e.cookies.set("shopPrivacyPolicyAgreeYN", "Y", { domain: ".samsung.com" }), D()))) : ($errorPrivacy.show(), !1) }), $privacyCheck1.change(function() { $errorPrivacy.hide() }), oe.click(function() { window.location.href = null != ae && "" != ae ? STORE_DOMAIN + ae : STORE_DOMAIN + "/" + SITE_CD + "/ng/my-samsung/updatemyprofile" }), se.click(function() { e(this).closest("#preferencePopup").is(":visible") && (e(this).closest("#preferencePopup").hide(), e("#dimContainer > .lightbox-skrim").hide()) }), $signToggleArrow.click(function() { e(".icon-down-arrow", j).toggleClass("icon-up-arrow") })
        }

        function D() {
            var t = e.cookies.get("snsSessionId", { domain: ".samsung.com" }),
                s = e.cookies.get("xsdcbxyn", { domain: ".samsung.com" }),
                a = (e.cookies.get("firstName", { domain: ".samsung.com" }), e.cookies.get("lastName", { domain: ".samsung.com" }), e.cookies.get("guid", { domain: ".samsung.com" })),
                i = "Y" == e.cookies.get("estoreLoginRequesting", { domain: ".samsung.com" }) ? !0 : !1;
            if (g(), d(), s)
                if (USE_ESTORE || "pe" == SITE_CD) {
                    var c = !1;
                    if (!i) {
                        for (var r = ["www.samsung.com", "origin2.samsung.com", "dev.samsung.com", "p4.samsung.com", "stgweb4.samsung.com", "ptcweb4.samsung.com", "qa.shop.samsung.com", "stg-uk.shop.samsung.com", "stg-kr.shop.samsung.com", "stg.shop.samsung.com", "store.samsung.com", "shop.samsung.com", "local.dev.my.eu.samsung.com", "dev.my.eu.samsung.com", "stg.my.eu.samsung.com", "my.eu.samsung.com", "www.eumysamsung.com", "stg-account.samsung.com", "account.samsung.com", "local.sec.samsung.com", "dev-aem.samsung.com", "stg-aem.samsung.com", "aem.samsung.com", "org-aem.samsung.com", "qaweb.samsung.com", "org-qaweb.samsung.com", "org-ap.samsung.com", "org-eu.samsung.com", "org-aem-eu.samsung.com", "aem-eu.samsung.com"], u = 0; u < r.length; u++)
                            if (document.referrer.indexOf(r[u]) > -1) { c = !0; break }
                        if (c)
                            for (var l = ["www.samsung.com", "dev.samsung.com", "p4.samsung.com", "stgweb4.samsung.com", "ptcweb4.samsung.com", "local.dev.my.eu.samsung.com", "dev.my.eu.samsung.com", "stg.my.eu.samsung.com", "my.eu.samsung.com", "www.eumysamsung.com", "stg-account.samsung.com", "account.samsung.com", "local.sec.samsung.com", "dev-aem.samsung.com", "stg-aem.samsung.com", "aem.samsung.com", "org-aem.samsung.com", "qaweb.samsung.com", "org-qaweb.samsung.com", "org-ap.samsung.com", "org-eu.samsung.com", "org-aem-eu.samsung.com", "aem-eu.samsung.com"], m = document.referrer.replace(/http(s)?:\/\//, ""), u = 0; u < l.length; u++)
                                if ("es" == SITE_CD || "se" == SITE_CD || "de" == SITE_CD || "it" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "nz" == SITE_CD || "sec" == SITE_CD || "au" == SITE_CD || "cn" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD) {
                                    if ("account.samsung.com" == l[u] || "stg-account.samsung.com" == l[u]) var p = l[u] + "/";
                                    else var p = l[u] + "/" + SITE_CD + "/";
                                    if (m.indexOf(p) > -1 && "Y" != e.cookies.get("isStoreLogedIn")) { c = !1; break }
                                } else { var p = l[u] + "/" + SITE_CD + "/"; if (p.indexOf(m) > -1 && "Y" != e.cookies.get("isStoreLogedIn")) { c = !1; break } }
                    }
                    if (c) _(!0), e.EstoreIfQueue && e.EstoreIfQueue.setIsSignReady(!0);
                    else if (nextGenLoginResult = function(n) { return "0000" != n.resultCode ? (I("903" == n.resultCode ? "BA" : n.customerStatus ? n.customerStatus : "UK"), void o()) : ((0 == n.hasAddInfo && ("au" == SITE_CD || "de" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD || ("es" == SITE_CD || "it" == SITE_CD) && STORE_DOMAIN.indexOf("https://") > -1) || 0 == n.hasAddInfo && "sec" != SITE_CD && "cn" != SITE_CD) && (b ? h() : (H = Z, I())), _(!0), "Y" == e.cookies.get("estoreLoginRequesting", { domain: ".samsung.com" }) && (o(), ss.Auth.getGlobalCartCount()), f(), void e.cookies.set("isStoreLogedIn", "Y")) }, e.cookies.set("estoreLoginRequesting", "Y", { domain: ".samsung.com" }), "sec" == SITE_CD && "https:" == location.protocol) {
                        var C = STORE_DOMAIN.split("/")[2];
                        e.ajax({
                            url: "https://" + C + "/" + SITE_CD + "/ng/p4v1/sessionCheck",
                            type: "GET",
                            dataType: "jsonp",
                            jsonp: "callback",
                            success: function(e) {
                                var n = "0000" == e.resultCode ? !0 : !1;
                                n ? nextGenLoginResult(e) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "01"), _satellite.track("account"), location.assign("http://" + DOMAIN + "/sec/home"))
                            },
                            error: function(e, n, t) { _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "02"), _satellite.track("account"), O = !1 }
                        })
                    } else if ("sec" == SITE_CD || "es" == SITE_CD || "de" == SITE_CD || "it" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "nz" == SITE_CD || "au" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD) try {
                        var S = "",
                            C = STORE_DOMAIN.split("/")[2];
                        S = "sec" == SITE_CD || "au" == SITE_CD || "de" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD ? "https://" + C + "/" + SITE_CD + "/ng/p4v1/sessionCheck" : ("es" == SITE_CD || "it" == SITE_CD) && STORE_DOMAIN.indexOf("https://") > -1 ? "https://" + C + "/" + SITE_CD + "/ng/p4v1/sessionCheck" : "https://" + C + "/" + SITE_CD + "/ng/p4v1/getSessionCheck", e.ajax({
                            url: S,
                            type: "GET",
                            dataType: "jsonp",
                            data: { ssoID: a },
                            jsonp: "callback",
                            success: function(e) {
                                var n = "0000" == e.resultCode ? !0 : !1;
                                n ? nextGenLoginResult(e) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "28"), _satellite.track("account"), ss.Auth.signOut())
                            },
                            error: function(e, n, t) { _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "29"), _satellite.track("account"), O = !1 }
                        }), O || "sec" == SITE_CD || ss.Auth.signOut()
                    } catch (y) { _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "29"), _satellite.track("account"), O = !1 } else if ("uk" == SITE_CD || "se" == SITE_CD || "dk" == SITE_CD || "fi" == SITE_CD || "no" == SITE_CD) {
                        O = !0;
                        var T = 0,
                            C = STORE_DOMAIN.split("/")[2];
                        e.ajax({
                            type: "GET",
                            url: STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/login",
                            jsonp: "callback",
                            dataType: "jsonp",
                            success: function(n) {
                                e.ajax({
                                    url: "https://" + C + "/" + SITE_CD + "/ng/p4v1/getSessionCheck",
                                    type: "GET",
                                    dataType: "jsonp",
                                    jsonp: "callback",
                                    success: function(n) {
                                        function t(n) {
                                            T++, e.ajax({
                                                url: "https://" + C + "/" + SITE_CD + "/ng/p4v1/getSessionCheck",
                                                type: "GET",
                                                dataType: "jsonp",
                                                jsonp: "callback",
                                                success: function(e) {
                                                    var n = "0000" == e.resultCode ? !0 : !1;
                                                    n ? (T = 0, nextGenLoginResult(e)) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "04"), _satellite.track("account"), (T = 1 && "Y" == s) ? (s = "N", setTimeout(function(e) { return function() { t(e) } }(e), 5e3)) : ("N" == s, ss.Auth.signOut()))
                                                },
                                                error: function(e, n, t) { _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "05"), _satellite.track("account"), O = !1 }
                                            })
                                        }
                                        var o = "0000" == n.resultCode ? !0 : !1,
                                            s = "N";
                                        T++, o ? (T = 0, nextGenLoginResult(n)) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "03"), _satellite.track("account"), setTimeout(function(e) { return function() { t(e) } }(n), 1e4))
                                    },
                                    error: function(e, n, t) { _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "05"), _satellite.track("account"), O = !1 }
                                })
                            },
                            error: function(e) {}
                        })
                    } else "cn" == SITE_CD ? (e("body").append("<iframe id='storeLoginIframe' src='" + STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/login' style='display:block;width:0px;height:0px;border:none;'></iframe>"), e("#storeLoginIframe").load(function() {
                        e("#storeLoginIframe").unbind("load");
                        try {
                            document.getElementById("storeLoginIframe").contentWindow.postMessage("", "*");
                            var n = 0,
                                t = STORE_DOMAIN.split("/")[2];
                            e.ajax({
                                url: "https://" + t + "/" + SITE_CD + "/ng/p4v1/getSessionCheck",
                                type: "GET",
                                dataType: "jsonp",
                                jsonp: "callback",
                                success: function(o) {
                                    function s(o) {
                                        n++, e.ajax({
                                            url: "https://" + t + "/" + SITE_CD + "/ng/p4v1/getSessionCheck",
                                            type: "GET",
                                            dataType: "jsonp",
                                            jsonp: "callback",
                                            success: function(e) {
                                                var t = "0000" == e.resultCode ? !0 : !1;
                                                i = "N", t ? (n = 0, nextGenLoginResult(e)) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "|case2"), _satellite.track("account"), (n = 1 && "Y" == i) ? (i = "N", setTimeout(function(e) {
                                                    return n = 2,
                                                        function() { s(e) }
                                                }(e), 5e3)) : ("N" == i, ss.Auth.signOut()))
                                            },
                                            error: function(e, n, t) { _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "|case3"), _satellite.track("account"), O = !1 }
                                        })
                                    }
                                    var a = "0000" == o.resultCode ? !0 : !1,
                                        i = "N";
                                    n++, a ? (n = 0, nextGenLoginResult(o)) : (_satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "|case1"), _satellite.track("account"), setTimeout(function(e) { return function() { s(e) } }(o), 6e3))
                                },
                                error: function(e, n, t) { _satellite.setVar("account", "login:samsung account|fail:" + (new Date).format("yyyyMMddHHmm") + "|case3"), _satellite.track("account"), O = !1 }
                            }), O || ss.Auth.signOut()
                        } catch (o) { O = !1, "sec" != SITE_CD && ss.Auth.signOut() }
                    })) : "pe" == SITE_CD && _(!0)
                } else "sec" == SITE_CD ? E() : _(!0);
            else t ? (_(!0), USE_ESTORE && f()) : _(!1);
            ss.Auth.getGlobalCartCount();
            var D = n(document.location.search);
            (null != D.customerStatus || null != D.isblock) && I(D.isblock && "true" == D.isblock ? "BA" : data.customerStatus ? data.customerStatus : "UK")
        }

        function v() {
            var n = e.cookies.get("xsdcbxyn", { domain: ".samsung.com" }),
                t = e.cookies.get("guid", { domain: ".samsung.com" });
            n && b ? e.ajax({ url: STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/getGuidCheckInfo", type: "GET", dataType: "jsonp", data: { ssoID: t }, jsonp: "callback", beforeSend: function() {}, success: function(e) { "0000" == e.resultCode ? "N" == e.resultValue ? (p(), H = Z, I()) : D() : ss.Auth.signOut() }, error: function(e, n, t) {} }) : D()
        }
        var b = "es" == SITE_CD ? !0 : !1,
            k = !1,
            w = null,
            O = !0,
            L = "",
            R = (location.href, e("#loginLinkURL").val()),
            x = e("#logoutURL").val(),
            A = e("#isLoginWithNoStore").val(),
            G = ("sec" == SITE_CD, ".s-login-c"),
            M = ("sec" == SITE_CD, ".s-login-j"),
            N = ".logoutBtn",
            H = null,
            j = null,
            U = null,
            P = null,
            B = null,
            V = null,
            W = null,
            $ = null,
            Y = null,
            F = null,
            q = null,
            z = null,
            Q = null,
            K = null,
            J = null,
            X = null,
            Z = null,
            ee = null,
            ne = null,
            te = null,
            oe = null,
            se = null,
            ae = e("#updateProfileURL").val();
        ss.Auth = {}, Date.prototype.format = function(e) {
            if (!this.valueOf()) return " ";
            var n = this;
            return e.replace(/(yyyy|MM|dd|HH|mm|ss)/gi, function(e) {
                switch (e) {
                    case "yyyy":
                        return n.getFullYear();
                    case "MM":
                        return (n.getMonth() + 1).zf(2);
                    case "dd":
                        return n.getDate().zf(2);
                    case "HH":
                        return n.getHours().zf(2);
                    case "mm":
                        return n.getMinutes().zf(2);
                    case "ss":
                        return n.getSeconds().zf(2);
                    default:
                        return e
                }
            })
        }, String.prototype.string = function(e) { for (var n = "", t = 0; t++ < e;) n += this; return n }, String.prototype.zf = function(e) { return "0".string(e - this.length) + this }, Number.prototype.zf = function(e) { return this.toString().zf(e) }, String.prototype.escapeHtml = function() { return this.replace(/</g, "&lt;").replace(/\"/g, "&quot;").replace(/>/g, "&gt;").replace(/\'/g, "&#039;") }, ss.Auth.checkSignIn = function(n, t, o) {
            var s = !1,
                a = e.cookies.get("snsSessionId", { domain: ".samsung.com" }),
                c = e.cookies.get("xsdcbxyn", { domain: ".samsung.com" }),
                r = e.cookies.get("guid", { domain: ".samsung.com" });
            if (c || a)
                if (t) {
                    if (USE_ESTORE) {
                        var u = "",
                            l = STORE_DOMAIN.split("/")[2];
                        "sec" == SITE_CD ? (u = "https://" + l + "/" + SITE_CD + "/ng/p4v1/sessionCheck", e.ajax({ url: u, type: "GET", dataType: "jsonp", jsonp: "callback", success: function(e) { if (n && "function" == typeof n) { var t = "0000" == e.resultCode ? !0 : !1; if (0 == t) return void i() } }, error: function(e, n, t) {} })) : (u = "au" == SITE_CD || "de" == SITE_CD || "fr" == SITE_CD || "nl" == SITE_CD || "be" == SITE_CD || "be_fr" == SITE_CD || "ca" == SITE_CD || "ca_fr" == SITE_CD || "es" == SITE_CD || "it" == SITE_CD ? "https://" + l + "/" + SITE_CD + "/ng/p4v1/sessionCheck" : "https://" + l + "/" + SITE_CD + "/ng/p4v1/getSessionCheck", e.ajax({
                            url: u,
                            type: "GET",
                            dataType: "jsonp",
                            data: { ssoID: r },
                            jsonp: "callback",
                            success: function(e) {
                                if (n && "function" == typeof n) {
                                    var t = "0000" == e.resultCode ? !0 : !1;
                                    0 == t && (i(), o && C()), n(t)
                                }
                            },
                            error: function(e, n, t) {}
                        }))
                    }
                } else s = !0, n && "function" == typeof n && (n(s), o && !s && C());
            else n && "function" == typeof n && (n(s), o && !s && C()), _(!1)
        }, ss.Auth.getUserProfile = function(n) {
            function t() {
                var t = e.cookies.get("firstName", { domain: ".samsung.com" }),
                    o = e.cookies.get("lastName", { domain: ".samsung.com" }),
                    s = e.cookies.get("emailId", { domain: ".samsung.com" }),
                    a = e.cookies.get("emailAddrText", { domain: ".samsung.com" }),
                    i = e.cookies.get("phone", { domain: ".samsung.com" }),
                    c = e.cookies.get("userAccount", { domain: ".samsung.com" });
                null != t || null != o ? (w = { firstName: t, lastName: o, emailId: s }, reservationUserData = { firstName: t, lastName: o, emailAddr: a, phone: i, userAccount: c }, (USE_ESTORE || A) && ("sec" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + " " + o + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + " " + o + "</strong>", SITE_CD))) : "vn" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + t + "</strong>", SITE_CD))) : "ca" == SITE_CD || "ca_fr" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + " " + t + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + o + " " + t + "</strong>", SITE_CD))))) : (w = null, (USE_ESTORE || A) && ("ca" != SITE_CD && "ca_fr" != SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", " ", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))))), n && "function" == typeof n && n(w)
            }
            if (w) n && "function" == typeof n && n(w);
            else {
                var o = e.cookies.get("xsdcbxyn", { domain: ".samsung.com" }),
                    s = e.cookies.get("snsSessionId", { domain: ".samsung.com" });
                if (!o && s) e.ajax({
                    url: STORE_DOMAIN + "/" + SITE_CD + "/ng/p4v1/getSnsUserInfo?snsSessionId=" + s,
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "callback",
                    beforeSend: function() {},
                    success: function(e) {
                        if (e) {
                            var t = e.familyName,
                                o = e.givenName,
                                s = e.email;
                            w = { firstName: t, lastName: o, emailId: s }
                        } else w = null;
                        n && "function" == typeof n && n(w)
                    },
                    error: function(e, n, t) {}
                });
                else if (o) {
                    var a = e.cookies.get("firstName", { domain: ".samsung.com" }),
                        i = e.cookies.get("lastName", { domain: ".samsung.com" }),
                        c = e.cookies.get("emailId", { domain: ".samsung.com" });
                    "sec" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + a + " " + i + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + a + " " + i + "</strong>", SITE_CD))) : "ca" == SITE_CD || "ca_fr" == SITE_CD ? (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("WELCOME", "", SITE_CD))) : (e(".gb-gnb__my-layer .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + i + " " + a + "</strong>", SITE_CD)), e(".s-depth1-wrap .s-mymenu-name").html(Granite.I18n.get("Hi, {0}", "<strong>" + i + " " + a + "</strong>", SITE_CD))), w = { firstName: a, lastName: i, emailId: c }
                } else "Y" == e("#useLogin").val() && (USE_ESTORE ? ss.EstoreIfQueue.setQueue(t) : t())
            }
        }, ss.Auth.signOut = function(n) { L = n ? n : window.location.href, L = L.escapeHtml(), "sec" == SITE_CD ? (i(), window.location.href = e("#secDomainURL").val() + "/sec/business/support/member/account/signout/") : (S(), c(!1)), L = void 0, w = null }, ss.Auth.getGlobalCartCount = function(n) {
            return USE_ESTORE && "Y" != e.cookies.get("estoreLoginRequesting", { domain: ".samsung.com" }) ? (ss.Auth.checkSignIn(function(n) {
                if (n);
                else {
                    var t = ss.cookies.get("everAddCart", { domain: ".samsung.com" });
                    ("sec" == SITE_CD || "br" == SITE_CD) && (t = "Y"), "Y" == t || (e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>0"), e("#globalCartCount").hide(), e(".js-empty-cart").show(), e(".js-cart").hide())
                }
            }), void("sec" == SITE_CD && "..." == e("#globalCartCount").text() && (e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>0"), e("#globalCartCount").hide(), e(".js-empty-cart").show(), e(".js-cart").hide()))) : void("sec" == SITE_CD && "..." == e("#globalCartCount").text() && e("#globalCartCount").html('<span class="blind">' + e("#productCountText").val() + " : </span>0"))
        }, ss.Auth.setReturnURL = function(e) { e || (e = window.location.href) }, y(), T(), v()
    }
}(jQuery), new ss.Sign;
! function(t, i) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.aem && (t.smg.aem = {}), "undefined" == typeof t.smg.aem.components && (t.smg.aem.components = {}), "undefined" == typeof t.smg.aem.components.product && (t.smg.aem.components.product = {});
    var n = (t.smg.aem.varStatic, t.smg.aem.util),
        o = (t.smg.aem.customEvent, t.smg.aem.components.product);
    o.columnNotificationBar = function() {
        var t = { notiBarSection: ".pr-notification-bar-pim", notiBarCloseBtn: ".pr-notification-bar-pim__close" };
        return {
            init: function(i, o) {
                (this.container = i).size() && (this.opts = n.def(t, o || {}), this.setElements(), this.setBindEvents())
            },
            setElements: function() { this.notiBarSection = this.container.find(this.opts.notiBarSection), this.notiBarCloseBtn = this.container.find(this.opts.notiBarCloseBtn) },
            setBindEvents: function() { this.notiBarCloseBtn.off("click.columnNotificationBar").on("click.columnNotificationBar", i.proxy(this.closeBtnClickHandler, this)) },
            closeBtnClickHandler: function() { this.notiBarSection.css("display", "none") }
        }
    }, o.toggleNotificationBar = function() {
        var o = { structure: { notiBarSection: ".pr-notification-bar-pim", notiBarInner: ".pr-notification-bar-pim__inner", collapsedBar: ".pr-notification-bar-pim__column--collapsed", expandedBar: ".pr-notification-bar-pim__column--expanded", notiBarToggleBtn: ".pr-notification-bar-pim__toggle-btn", blindSpan: "span.blind" }, cssClass: { expandClass: "is-expanded" }, i18n: { expand: void 0 !== i("#gnbRunmodeInfo").val() ? Granite.I18n.get("Click to Expand", [], i("#siteCode").val()) : "Click to Expand", collapse: void 0 !== i("#gnbRunmodeInfo").val() ? Granite.I18n.get("Click to Collapse", [], i("#siteCode").val()) : "Click to Collapse" } };
        return {
            init: function(t, i) {
                (this.container = t).size() && (this.opts = n.def(o, i || {}), this.setElements(), this.setBindEvents(), this.setZIndex())
            },
            setElements: function() { this.body = i("html,body"), this.notiBarSection = this.container.find(this.opts.structure.notiBarSection), this.notiBarInner = this.notiBarSection.find(this.opts.structure.notiBarInner), this.collapsedBar = this.notiBarInner.find(this.opts.structure.collapsedBar), this.expandedBar = this.notiBarInner.find(this.opts.structure.expandedBar), this.notiBarToggleBtn = this.container.find(this.opts.structure.notiBarToggleBtn), this.blindSpan = this.notiBarToggleBtn.find(this.opts.structure.blindSpan), this.prevScrollTop = this.body.scrollTop(), this.animateDuration = 250 },
            setBindEvents: function() { i(t).on("scroll", i.proxy(this.scrollHandler, this)), this.notiBarToggleBtn.off("click.toggleNotificationBar").on("click.toggleNotificationBar", i.proxy(this.toggleBtnClickHandler, this)) },
            scrollHandler: function() {
                var t = this.body.scrollTop();
                Math.abs(this.prevScrollTop - t) > 5 && (this.notiBarSection.hasClass(this.opts.cssClass.expandClass) && this.collapseBar(), this.prevScrollTop = t)
            },
            toggleBtnClickHandler: function() { this.notiBarSection.hasClass(this.opts.cssClass.expandClass) ? this.collapseBar() : this.expandBar() },
            expandBar: function() { this.notiBarSection.addClass(this.opts.cssClass.expandClass), this.collapsedBar.stop().slideUp(this.animateDuration), this.expandedBar.stop().slideDown(this.animateDuration), this.blindSpan.text(this.opts.i18n.collapse) },
            collapseBar: function() { this.notiBarSection.removeClass(this.opts.cssClass.expandClass), this.collapsedBar.stop().slideDown(this.animateDuration), this.expandedBar.stop().slideUp(this.animateDuration), this.blindSpan.text(this.opts.i18n.expand) },
            setZIndex: function() { this.notiBarSection.closest(".pr-g-notification-bar-pim").parent(".pr-g-notification-bar-pim").prevAll(".cm-g-gnb").length && this.notiBarSection.css("z-index", 999) }
        }
    }, i(function() {
        i(".pr-g-notification-bar-pim").not(".notificationbarpim").each(function() {
            var t = i(this),
                n = null;
            n = t.find(".pr-notification-bar-pim--toggle").length ? new o.toggleNotificationBar : new o.columnNotificationBar, n.init(t)
        })
    })
}(window, window.jQuery);
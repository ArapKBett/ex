/*! For license information please see 1739-32060137ed6276a15983-v2.js.LICENSE.txt */
(self.webpackChunkexodus_website = self.webpackChunkexodus_website || []).push([[1739], {
    32485: function(e, t) {
        var n;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var i = typeof n;
                        if ("string" === i || "number" === i)
                            e.push(n);
                        else if (Array.isArray(n)) {
                            if (n.length) {
                                var a = o.apply(null, n);
                                a && e.push(a)
                            }
                        } else if ("object" === i) {
                            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                e.push(n.toString());
                                continue
                            }
                            for (var c in n)
                                r.call(n, c) && n[c] && e.push(c)
                        }
                    }
                }
                return e.join(" ")
            }
            e.exports ? (o.default = o,
            e.exports = o) : void 0 === (n = function() {
                return o
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    94311: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ay: function() {
                return fe
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            addTrackers: function() {
                return $
            },
            default: function() {
                return ie
            },
            event: function() {
                return ee
            },
            exception: function() {
                return te
            },
            ga: function() {
                return Z
            },
            initialize: function() {
                return U
            },
            modalview: function() {
                return X
            },
            outboundLink: function() {
                return re
            },
            pageview: function() {
                return W
            },
            plugin: function() {
                return ne
            },
            send: function() {
                return Q
            },
            set: function() {
                return H
            },
            testModeAPI: function() {
                return oe
            },
            timing: function() {
                return Y
            }
        });
        var o = n(96540)
          , i = n(5556)
          , a = n.n(i);
        function c(e) {
            console.warn("[react-ga]", e)
        }
        function u(e) {
            return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            u(e)
        }
        var l = ["to", "target"];
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    h(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function p(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function b(e, t) {
            return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            b(e, t)
        }
        function g(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = v(e);
                if (t) {
                    var o = v(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === u(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return d(e)
                }(this, n)
            }
        }
        function d(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function v(e) {
            return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            v(e)
        }
        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var m = "_blank"
          , O = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && b(e, t)
            }(a, e);
            var t, n, r, i = g(a);
            function a() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                return h(d(e = i.call.apply(i, [this].concat(n))), "handleClick", (function(t) {
                    var n = e.props
                      , r = n.target
                      , o = n.eventLabel
                      , i = n.to
                      , c = n.onClick
                      , u = n.trackerNames
                      , l = {
                        label: o
                    }
                      , f = r !== m
                      , s = !(t.ctrlKey || t.shiftKey || t.metaKey || 1 === t.button);
                    f && s ? (t.preventDefault(),
                    a.trackLink(l, (function() {
                        window.location.href = i
                    }
                    ), u)) : a.trackLink(l, (function() {}
                    ), u),
                    c && c(t)
                }
                )),
                e
            }
            return t = a,
            (n = [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.to
                      , n = e.target
                      , r = s(s({}, p(e, l)), {}, {
                        target: n,
                        href: t,
                        onClick: this.handleClick
                    });
                    return n === m && (r.rel = "".concat(r.rel ? r.rel : "", " noopener noreferrer").trim()),
                    delete r.eventLabel,
                    delete r.trackerNames,
                    o.createElement("a", r)
                }
            }]) && y(t.prototype, n),
            r && y(t, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            a
        }(o.Component);
        h(O, "trackLink", (function() {
            c("ga tracking not enabled")
        }
        )),
        O.propTypes = {
            eventLabel: a().string.isRequired,
            target: a().string,
            to: a().string,
            onClick: a().func,
            trackerNames: a().arrayOf(a().string)
        },
        O.defaultProps = {
            target: null,
            to: null,
            onClick: null,
            trackerNames: null
        };
        var w = "REDACTED (Potential Email Address)";
        function j(e) {
            return e && e.toString().replace(/^\s+|\s+$/g, "")
        }
        var k = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
        function P() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
              , n = e || "";
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (n = j(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, (function(e, t, n) {
                return t > 0 && t + e.length !== n.length && e.search(k) > -1 && ":" !== n.charAt(t - 2) && ("-" !== n.charAt(t + e.length) || "-" === n.charAt(t - 1)) && n.charAt(t - 1).search(/[^\s-]/) < 0 ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1)
            }
            ))),
            t && (n = function(e) {
                return "string" == typeof (t = e) && -1 !== t.indexOf("@") ? (c("This arg looks like an email address, redacting."),
                w) : e;
                var t
            }(n)),
            n
        }
        var A = !1;
        function S(e) {
            console.info("[react-ga]", e)
        }
        var E = []
          , x = {
            calls: E,
            ga: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                E.push([].concat(t))
            },
            resetCalls: function() {
                E.length = 0
            }
        }
          , D = ["category", "action", "label", "value", "nonInteraction", "transport"];
        function C(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function T(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function N(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function q(e) {
            return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            q(e)
        }
        function L(e) {
            return function(e) {
                if (Array.isArray(e))
                    return I(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return I(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function I(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var _ = "undefined" == typeof window || "undefined" == typeof document
          , R = !1
          , J = !0
          , z = !1
          , B = !0
          , G = !0
          , M = function() {
            var e;
            return z ? x.ga.apply(x, arguments) : !_ && (window.ga ? (e = window).ga.apply(e, arguments) : c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))
        };
        function F(e) {
            return P(e, J, G)
        }
        function K(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            var o = n[0];
            if ("function" == typeof M) {
                if ("string" != typeof o)
                    return void c("ga command must be a string");
                !B && Array.isArray(e) || M.apply(void 0, n),
                Array.isArray(e) && e.forEach((function(e) {
                    M.apply(void 0, L(["".concat(e, ".").concat(o)].concat(n.slice(1))))
                }
                ))
            }
        }
        function V(e, t) {
            e ? t && (t.debug && !0 === t.debug && (R = !0),
            !1 === t.titleCase && (J = !1),
            !1 === t.redactEmail && (G = !1),
            t.useExistingGa) || (t && t.gaOptions ? M("create", e, t.gaOptions) : M("create", e, "auto")) : c("gaTrackingID is required in initialize()")
        }
        function $(e, t) {
            return Array.isArray(e) ? e.forEach((function(e) {
                "object" === q(e) ? V(e.trackingId, e) : c("All configs must be an object")
            }
            )) : V(e, t),
            !0
        }
        function U(e, t) {
            if (t && !0 === t.testMode)
                z = !0;
            else {
                if (_)
                    return;
                t && !0 === t.standardImplementation || function(e) {
                    if (!A) {
                        A = !0;
                        var t = "https://www.google-analytics.com/analytics.js";
                        e && e.gaAddress ? t = e.gaAddress : e && e.debug && (t = "https://www.google-analytics.com/analytics_debug.js");
                        var n, r, o, i, a, c, u, l = e && e.onerror;
                        n = window,
                        r = document,
                        o = "script",
                        i = t,
                        a = "ga",
                        n.GoogleAnalyticsObject = a,
                        n[a] = n[a] || function() {
                            (n[a].q = n[a].q || []).push(arguments)
                        }
                        ,
                        n[a].l = 1 * new Date,
                        c = r.createElement(o),
                        u = r.getElementsByTagName(o)[0],
                        c.async = 1,
                        c.src = i,
                        c.onerror = l,
                        u.parentNode.insertBefore(c, u)
                    }
                }(t)
            }
            B = !t || "boolean" != typeof t.alwaysSendToDefaultTracker || t.alwaysSendToDefaultTracker,
            $(e, t)
        }
        function Z() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.length > 0 && (M.apply(void 0, t),
            R && (S("called ga('arguments');"),
            S("with arguments: ".concat(JSON.stringify(t))))),
            window.ga
        }
        function H(e, t) {
            e ? "object" === q(e) ? (0 === Object.keys(e).length && c("empty `fieldsObject` given to .set()"),
            K(t, "set", e),
            R && (S("called ga('set', fieldsObject);"),
            S("with fieldsObject: ".concat(JSON.stringify(e))))) : c("Expected `fieldsObject` arg to be an Object") : c("`fieldsObject` is required in .set()")
        }
        function Q(e, t) {
            K(t, "send", e),
            R && (S("called ga('send', fieldObject);"),
            S("with fieldObject: ".concat(JSON.stringify(e))),
            S("with trackers: ".concat(JSON.stringify(t))))
        }
        function W(e, t, n) {
            if (e) {
                var r = j(e);
                if ("" !== r) {
                    var o = {};
                    if (n && (o.title = n),
                    K(t, "send", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? T(Object(n), !0).forEach((function(t) {
                                N(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({
                        hitType: "pageview",
                        page: r
                    }, o)),
                    R) {
                        S("called ga('send', 'pageview', path);");
                        var i = "";
                        n && (i = " and title: ".concat(n)),
                        S("with path: ".concat(r).concat(i))
                    }
                } else
                    c("path cannot be an empty string in .pageview()")
            } else
                c("path is required in .pageview()")
        }
        function X(e, t) {
            if (e) {
                var n, r = "/" === (n = j(e)).substring(0, 1) ? n.substring(1) : n;
                if ("" !== r) {
                    var o = "/modal/".concat(r);
                    K(t, "send", "pageview", o),
                    R && (S("called ga('send', 'pageview', path);"),
                    S("with path: ".concat(o)))
                } else
                    c("modalName cannot be an empty string or a single / in .modalview()")
            } else
                c("modalName is required in .modalview(modalName)")
        }
        function Y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.category
              , n = e.variable
              , r = e.value
              , o = e.label
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            if (t && n && "number" == typeof r) {
                var a = {
                    hitType: "timing",
                    timingCategory: F(t),
                    timingVar: F(n),
                    timingValue: r
                };
                o && (a.timingLabel = F(o)),
                Q(a, i)
            } else
                c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")
        }
        function ee() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.category
              , n = e.action
              , r = e.label
              , o = e.value
              , i = e.nonInteraction
              , a = e.transport
              , u = C(e, D)
              , l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            if (t && n) {
                var f = {
                    hitType: "event",
                    eventCategory: F(t),
                    eventAction: F(n)
                };
                r && (f.eventLabel = F(r)),
                void 0 !== o && ("number" != typeof o ? c("Expected `args.value` arg to be a Number.") : f.eventValue = o),
                void 0 !== i && ("boolean" != typeof i ? c("`args.nonInteraction` must be a boolean.") : f.nonInteraction = i),
                void 0 !== a && ("string" != typeof a ? c("`args.transport` must be a string.") : (-1 === ["beacon", "xhr", "image"].indexOf(a) && c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),
                f.transport = a)),
                Object.keys(u).filter((function(e) {
                    return "dimension" === e.substr(0, 9)
                }
                )).forEach((function(e) {
                    f[e] = u[e]
                }
                )),
                Object.keys(u).filter((function(e) {
                    return "metric" === e.substr(0, 6)
                }
                )).forEach((function(e) {
                    f[e] = u[e]
                }
                )),
                Q(f, l)
            } else
                c("args.category AND args.action are required in event()")
        }
        function te(e, t) {
            var n = e.description
              , r = e.fatal
              , o = {
                hitType: "exception"
            };
            n && (o.exDescription = F(n)),
            void 0 !== r && ("boolean" != typeof r ? c("`args.fatal` must be a boolean.") : o.exFatal = r),
            Q(o, t)
        }
        var ne = {
            require: function(e, t, n) {
                if (e) {
                    var r = j(e);
                    if ("" !== r) {
                        var o = n ? "".concat(n, ".require") : "require";
                        if (t) {
                            if ("object" !== q(t))
                                return void c("Expected `options` arg to be an Object");
                            0 === Object.keys(t).length && c("Empty `options` given to .require()"),
                            Z(o, r, t),
                            R && S("called ga('require', '".concat(r, "', ").concat(JSON.stringify(t)))
                        } else
                            Z(o, r),
                            R && S("called ga('require', '".concat(r, "');"))
                    } else
                        c("`name` cannot be an empty string in .require()")
                } else
                    c("`name` is required in .require()")
            },
            execute: function(e, t) {
                for (var n, r, o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++)
                    i[a - 2] = arguments[a];
                if (1 === i.length ? n = i[0] : (r = i[0],
                n = i[1]),
                "string" != typeof e)
                    c("Expected `pluginName` arg to be a String.");
                else if ("string" != typeof t)
                    c("Expected `action` arg to be a String.");
                else {
                    var u = "".concat(e, ":").concat(t);
                    n = n || null,
                    r && n ? (Z(u, r, n),
                    R && (S("called ga('".concat(u, "');")),
                    S('actionType: "'.concat(r, '" with payload: ').concat(JSON.stringify(n))))) : n ? (Z(u, n),
                    R && (S("called ga('".concat(u, "');")),
                    S("with payload: ".concat(JSON.stringify(n))))) : (Z(u),
                    R && S("called ga('".concat(u, "');")))
                }
            }
        };
        function re(e, t, n) {
            if ("function" == typeof t)
                if (e && e.label) {
                    var r = {
                        hitType: "event",
                        eventCategory: "Outbound",
                        eventAction: "Click",
                        eventLabel: F(e.label)
                    }
                      , o = !1
                      , i = setTimeout((function() {
                        o = !0,
                        t()
                    }
                    ), 250);
                    r.hitCallback = function() {
                        clearTimeout(i),
                        o || t()
                    }
                    ,
                    Q(r, n)
                } else
                    c("args.label is required in outboundLink()");
            else
                c("hitCallback function is required")
        }
        var oe = x
          , ie = {
            initialize: U,
            ga: Z,
            set: H,
            send: Q,
            pageview: W,
            modalview: X,
            timing: Y,
            event: ee,
            exception: te,
            plugin: ne,
            outboundLink: re,
            testModeAPI: x
        };
        function ae(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ce(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ae(Object(n), !0).forEach((function(t) {
                    ue(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ue(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        O.origTrackLink = O.trackLink,
        O.trackLink = re;
        var le = O
          , fe = ce(ce({}, r), {}, {
            OutboundLink: le
        })
    }
}]);
//# sourceMappingURL=1739-32060137ed6276a15983-v2.js.map

/*! For license information please see 8597-279aa0b04222f8fecc7a-v2.js.LICENSE.txt */
(self.webpackChunkexodus_website = self.webpackChunkexodus_website || []).push([[8597], {
    83535: function(t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.regionAPIs = void 0,
        n.regionAPIs = new Map([["us", "https://api-iam.intercom.io"], ["eu", "https://api-iam.eu.intercom.io"], ["ap", "https://api-iam.au.intercom.io"]])
    },
    80990: function(t, n, e) {
        "use strict";
        var o = this && this.__rest || function(t, n) {
            var e = {};
            for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (o = Object.getOwnPropertySymbols(t); i < o.length; i++)
                    n.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[i]) && (e[o[i]] = t[o[i]])
            }
            return e
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.onUserEmailSupplied = n.showConversation = n.showTicket = n.startChecklist = n.startSurvey = n.showNews = n.showArticle = n.startTour = n.getVisitorId = n.trackEvent = n.onUnreadCountChange = n.onShow = n.onHide = n.showNewMessage = n.showMessages = n.showSpace = n.show = n.hide = n.update = n.shutdown = n.boot = n.Intercom = void 0;
        const i = e(83535)
          , r = e(2037)
          , s = (t, ...n) => {
            void 0 !== typeof window && window.Intercom ? window.Intercom(t, ...n) : console.warn("Please ensure Intercom is setup and running on client-side!")
        }
        ;
        n.Intercom = t => {
            if ("object" != typeof t)
                return void console.warn("Intercom initialiser called with invalid parameters.");
            const {region: n="us"} = t
              , e = o(t, ["region"]);
            "undefined" == typeof window || r.ref || (window.intercomSettings = Object.assign(Object.assign({}, e), {
                api_base: i.regionAPIs.get(n)
            }),
            (0,
            r.init)())
        }
        ,
        n.default = n.Intercom;
        n.boot = t => s("boot", t);
        n.shutdown = () => s("shutdown");
        n.update = t => s("update", t);
        n.hide = () => s("hide");
        n.show = () => s("show");
        n.showSpace = t => s("showSpace", t);
        n.showMessages = () => s("showMessages");
        n.showNewMessage = t => s("showNewMessage", t);
        n.onHide = t => s("onHide", t);
        n.onShow = t => s("onShow", t);
        n.onUnreadCountChange = t => s("onUnreadCountChange", t);
        n.trackEvent = (...t) => s("trackEvent", ...t);
        n.getVisitorId = () => s("getVisitorId");
        n.startTour = t => s("startTour", t);
        n.showArticle = t => s("showArticle", t);
        n.showNews = t => s("showNews", t);
        n.startSurvey = t => s("startSurvey", t);
        n.startChecklist = t => s("startChecklist", t);
        n.showTicket = t => s("showTicket", t);
        n.showConversation = t => s("showConversation", t);
        n.onUserEmailSupplied = t => s("onUserEmailSupplied", t)
    },
    2037: function(t, n) {
        "use strict";
        var e = this && this.__awaiter || function(t, n, e, o) {
            return new (e || (e = Promise))((function(i, r) {
                function s(t) {
                    try {
                        u(o.next(t))
                    } catch (n) {
                        r(n)
                    }
                }
                function a(t) {
                    try {
                        u(o.throw(t))
                    } catch (n) {
                        r(n)
                    }
                }
                function u(t) {
                    var n;
                    t.done ? i(t.value) : (n = t.value,
                    n instanceof e ? n : new e((function(t) {
                        t(n)
                    }
                    ))).then(s, a)
                }
                u((o = o.apply(t, n || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.ref = n.init = void 0;
        const o = "_intercom_npm_loader"
          , i = function() {
            i.loaderQueue(arguments)
        };
        i.q = [],
        i.loaderQueue = function(t) {
            i.q.push(t)
        }
        ;
        const r = function() {
            var t, n, e = document;
            if (!e.getElementById(o)) {
                var i = e.createElement("script");
                i.type = "text/javascript",
                i.async = !0,
                i.id = o,
                i.src = "https://widget.intercom.io/widget/" + (null === (t = window.intercomSettings) || void 0 === t ? void 0 : t.app_id);
                var r = e.getElementsByTagName("script")[0];
                null === (n = r.parentNode) || void 0 === n || n.insertBefore(i, r)
            }
        }
          , s = () => "complete" === document.readyState || "interactive" === document.readyState;
        n.init = () => e(void 0, void 0, void 0, (function*() {
            var t = window
              , n = t.Intercom;
            t.intercomSettings && (t.intercomSettings.installation_type = "npm-package"),
            "function" == typeof n ? (n("reattach_activator"),
            n("update", t.intercomSettings)) : (t.Intercom = i,
            s() ? r() : (document.addEventListener("readystatechange", (function() {
                s() && r()
            }
            )),
            t.attachEvent ? t.attachEvent("onload", r) : t.addEventListener("load", r, !1)))
        }
        )),
        n.ref = void 0
    },
    88672: function(t, n, e) {
        "use strict";
        e.d(n, {
            Ay: function() {
                return a
            }
        });
        var o = !("undefined" == typeof window || !window.document || !window.document.createElement)
          , i = !1
          , r = !1;
        try {
            var s = {
                get passive() {
                    return i = !0
                },
                get once() {
                    return r = i = !0
                }
            };
            o && (window.addEventListener("test", s, s),
            window.removeEventListener("test", s, !0))
        } catch (u) {}
        var a = function(t, n, e, o) {
            if (o && "boolean" != typeof o && !r) {
                var s = o.once
                  , a = o.capture
                  , u = e;
                !r && s && (u = e.__once || function t(o) {
                    this.removeEventListener(n, t, a),
                    e.call(this, o)
                }
                ,
                e.__once = u),
                t.addEventListener(n, u, i ? o : a)
            }
            t.addEventListener(n, e, o)
        }
    },
    62660: function(t, n, e) {
        "use strict";
        e.d(n, {
            A: function() {
                return c
            }
        });
        var o = e(91625);
        function i(t, n) {
            return function(t) {
                var n = (0,
                o.A)(t);
                return n && n.defaultView || window
            }(t).getComputedStyle(t, n)
        }
        var r = /([A-Z])/g;
        var s = /^ms-/;
        function a(t) {
            return function(t) {
                return t.replace(r, "-$1").toLowerCase()
            }(t).replace(s, "-ms-")
        }
        var u = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        var c = function(t, n) {
            var e = ""
              , o = "";
            if ("string" == typeof n)
                return t.style.getPropertyValue(a(n)) || i(t).getPropertyValue(a(n));
            Object.keys(n).forEach((function(i) {
                var r = n[i];
                r || 0 === r ? !function(t) {
                    return !(!t || !u.test(t))
                }(i) ? e += a(i) + ": " + r + ";" : o += i + "(" + r + ") " : t.style.removeProperty(a(i))
            }
            )),
            o && (e += "transform: " + o + ";"),
            t.style.cssText += ";" + e
        }
    },
    69763: function(t, n, e) {
        "use strict";
        e.d(n, {
            A: function() {
                return r
            }
        });
        var o = e(88672);
        var i = function(t, n, e, o) {
            var i = o && "boolean" != typeof o ? o.capture : o;
            t.removeEventListener(n, e, i),
            e.__once && t.removeEventListener(n, e.__once, i)
        };
        var r = function(t, n, e, r) {
            return (0,
            o.Ay)(t, n, e, r),
            function() {
                i(t, n, e, r)
            }
        }
    },
    91625: function(t, n, e) {
        "use strict";
        function o(t) {
            return t && t.ownerDocument || document
        }
        e.d(n, {
            A: function() {
                return o
            }
        })
    },
    58280: function(t, n, e) {
        "use strict";
        var o, i = e(58168), r = e(98587), s = e(18978), a = e.n(s), u = e(62660), c = e(96540), l = e(13674), f = e(93295), p = e(29751), d = e(85258), h = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"], v = {
            height: ["marginTop", "marginBottom"],
            width: ["marginLeft", "marginRight"]
        };
        function m(t, n) {
            var e = n["offset" + t[0].toUpperCase() + t.slice(1)]
              , o = v[t];
            return e + parseInt((0,
            u.A)(n, o[0]), 10) + parseInt((0,
            u.A)(n, o[1]), 10)
        }
        var E = ((o = {})[l.kp] = "collapse",
        o[l.ze] = "collapsing",
        o[l.ns] = "collapsing",
        o[l._K] = "collapse show",
        o)
          , w = {
            in: !1,
            timeout: 300,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            getDimensionValue: m
        }
          , g = c.forwardRef((function(t, n) {
            var e = t.onEnter
              , o = t.onEntering
              , s = t.onEntered
              , u = t.onExit
              , v = t.onExiting
              , w = t.className
              , g = t.children
              , y = t.dimension
              , x = void 0 === y ? "height" : y
              , b = t.getDimensionValue
              , S = void 0 === b ? m : b
              , A = (0,
            r.A)(t, h)
              , O = "function" == typeof x ? x() : x
              , C = (0,
            c.useMemo)((function() {
                return (0,
                p.A)((function(t) {
                    t.style[O] = "0"
                }
                ), e)
            }
            ), [O, e])
              , k = (0,
            c.useMemo)((function() {
                return (0,
                p.A)((function(t) {
                    var n = "scroll" + O[0].toUpperCase() + O.slice(1);
                    t.style[O] = t[n] + "px"
                }
                ), o)
            }
            ), [O, o])
              , T = (0,
            c.useMemo)((function() {
                return (0,
                p.A)((function(t) {
                    t.style[O] = null
                }
                ), s)
            }
            ), [O, s])
              , _ = (0,
            c.useMemo)((function() {
                return (0,
                p.A)((function(t) {
                    t.style[O] = S(O, t) + "px",
                    (0,
                    d.A)(t)
                }
                ), u)
            }
            ), [u, S, O])
              , N = (0,
            c.useMemo)((function() {
                return (0,
                p.A)((function(t) {
                    t.style[O] = null
                }
                ), v)
            }
            ), [O, v]);
            return c.createElement(l.Ay, (0,
            i.A)({
                ref: n,
                addEndListener: f.A
            }, A, {
                "aria-expanded": A.role ? A.in : null,
                onEnter: C,
                onEntering: k,
                onEntered: T,
                onExit: _,
                onExiting: N
            }), (function(t, n) {
                return c.cloneElement(g, (0,
                i.A)({}, n, {
                    className: a()(w, g.props.className, E[t], "width" === O && "width")
                }))
            }
            ))
        }
        ));
        g.defaultProps = w,
        n.A = g
    },
    29751: function(t, n) {
        "use strict";
        n.A = function() {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
                n[e] = arguments[e];
            return n.filter((function(t) {
                return null != t
            }
            )).reduce((function(t, n) {
                if ("function" != typeof n)
                    throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
                return null === t ? n : function() {
                    for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++)
                        o[i] = arguments[i];
                    t.apply(this, o),
                    n.apply(this, o)
                }
            }
            ), null)
        }
    },
    93295: function(t, n, e) {
        "use strict";
        e.d(n, {
            A: function() {
                return u
            }
        });
        var o = e(62660)
          , i = e(69763);
        function r(t, n, e) {
            void 0 === e && (e = 5);
            var o = !1
              , r = setTimeout((function() {
                o || function(t, n, e, o) {
                    if (void 0 === e && (e = !1),
                    void 0 === o && (o = !0),
                    t) {
                        var i = document.createEvent("HTMLEvents");
                        i.initEvent(n, e, o),
                        t.dispatchEvent(i)
                    }
                }(t, "transitionend", !0)
            }
            ), n + e)
              , s = (0,
            i.A)(t, "transitionend", (function() {
                o = !0
            }
            ), {
                once: !0
            });
            return function() {
                clearTimeout(r),
                s()
            }
        }
        function s(t, n, e, s) {
            var a, u, c;
            null == e && (a = t,
            u = (0,
            o.A)(a, "transitionDuration") || "",
            c = -1 === u.indexOf("ms") ? 1e3 : 1,
            e = parseFloat(u) * c || 0);
            var l = r(t, e, s)
              , f = (0,
            i.A)(t, "transitionend", n);
            return function() {
                l(),
                f()
            }
        }
        function a(t, n) {
            var e = (0,
            o.A)(t, n) || ""
              , i = -1 === e.indexOf("ms") ? 1e3 : 1;
            return parseFloat(e) * i
        }
        function u(t, n) {
            var e = a(t, "transitionDuration")
              , o = a(t, "transitionDelay")
              , i = s(t, (function(e) {
                e.target === t && (i(),
                n(e))
            }
            ), e + o)
        }
    },
    85258: function(t, n, e) {
        "use strict";
        function o(t) {
            t.offsetHeight
        }
        e.d(n, {
            A: function() {
                return o
            }
        })
    },
    13674: function(t, n, e) {
        "use strict";
        e.d(n, {
            _K: function() {
                return p
            },
            ns: function() {
                return f
            },
            kp: function() {
                return l
            },
            ze: function() {
                return d
            },
            Ay: function() {
                return m
            }
        });
        var o = e(98587)
          , i = e(77387)
          , r = e(96540)
          , s = e(40961)
          , a = !1
          , u = r.createContext(null)
          , c = "unmounted"
          , l = "exited"
          , f = "entering"
          , p = "entered"
          , d = "exiting"
          , h = function(t) {
            function n(n, e) {
                var o;
                o = t.call(this, n, e) || this;
                var i, r = e && !e.isMounting ? n.enter : n.appear;
                return o.appearStatus = null,
                n.in ? r ? (i = l,
                o.appearStatus = f) : i = p : i = n.unmountOnExit || n.mountOnEnter ? c : l,
                o.state = {
                    status: i
                },
                o.nextCallback = null,
                o
            }
            (0,
            i.A)(n, t),
            n.getDerivedStateFromProps = function(t, n) {
                return t.in && n.status === c ? {
                    status: l
                } : null
            }
            ;
            var e = n.prototype;
            return e.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }
            ,
            e.componentDidUpdate = function(t) {
                var n = null;
                if (t !== this.props) {
                    var e = this.state.status;
                    this.props.in ? e !== f && e !== p && (n = f) : e !== f && e !== p || (n = d)
                }
                this.updateStatus(!1, n)
            }
            ,
            e.componentWillUnmount = function() {
                this.cancelNextCallback()
            }
            ,
            e.getTimeouts = function() {
                var t, n, e, o = this.props.timeout;
                return t = n = e = o,
                null != o && "number" != typeof o && (t = o.exit,
                n = o.enter,
                e = void 0 !== o.appear ? o.appear : n),
                {
                    exit: t,
                    enter: n,
                    appear: e
                }
            }
            ,
            e.updateStatus = function(t, n) {
                if (void 0 === t && (t = !1),
                null !== n)
                    if (this.cancelNextCallback(),
                    n === f) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var e = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this);
                            e && function(t) {
                                t.scrollTop
                            }(e)
                        }
                        this.performEnter(t)
                    } else
                        this.performExit();
                else
                    this.props.unmountOnExit && this.state.status === l && this.setState({
                        status: c
                    })
            }
            ,
            e.performEnter = function(t) {
                var n = this
                  , e = this.props.enter
                  , o = this.context ? this.context.isMounting : t
                  , i = this.props.nodeRef ? [o] : [s.findDOMNode(this), o]
                  , r = i[0]
                  , u = i[1]
                  , c = this.getTimeouts()
                  , l = o ? c.appear : c.enter;
                !t && !e || a ? this.safeSetState({
                    status: p
                }, (function() {
                    n.props.onEntered(r)
                }
                )) : (this.props.onEnter(r, u),
                this.safeSetState({
                    status: f
                }, (function() {
                    n.props.onEntering(r, u),
                    n.onTransitionEnd(l, (function() {
                        n.safeSetState({
                            status: p
                        }, (function() {
                            n.props.onEntered(r, u)
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ,
            e.performExit = function() {
                var t = this
                  , n = this.props.exit
                  , e = this.getTimeouts()
                  , o = this.props.nodeRef ? void 0 : s.findDOMNode(this);
                n && !a ? (this.props.onExit(o),
                this.safeSetState({
                    status: d
                }, (function() {
                    t.props.onExiting(o),
                    t.onTransitionEnd(e.exit, (function() {
                        t.safeSetState({
                            status: l
                        }, (function() {
                            t.props.onExited(o)
                        }
                        ))
                    }
                    ))
                }
                ))) : this.safeSetState({
                    status: l
                }, (function() {
                    t.props.onExited(o)
                }
                ))
            }
            ,
            e.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(),
                this.nextCallback = null)
            }
            ,
            e.safeSetState = function(t, n) {
                n = this.setNextCallback(n),
                this.setState(t, n)
            }
            ,
            e.setNextCallback = function(t) {
                var n = this
                  , e = !0;
                return this.nextCallback = function(o) {
                    e && (e = !1,
                    n.nextCallback = null,
                    t(o))
                }
                ,
                this.nextCallback.cancel = function() {
                    e = !1
                }
                ,
                this.nextCallback
            }
            ,
            e.onTransitionEnd = function(t, n) {
                this.setNextCallback(n);
                var e = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this)
                  , o = null == t && !this.props.addEndListener;
                if (e && !o) {
                    if (this.props.addEndListener) {
                        var i = this.props.nodeRef ? [this.nextCallback] : [e, this.nextCallback]
                          , r = i[0]
                          , a = i[1];
                        this.props.addEndListener(r, a)
                    }
                    null != t && setTimeout(this.nextCallback, t)
                } else
                    setTimeout(this.nextCallback, 0)
            }
            ,
            e.render = function() {
                var t = this.state.status;
                if (t === c)
                    return null;
                var n = this.props
                  , e = n.children
                  , i = (n.in,
                n.mountOnEnter,
                n.unmountOnExit,
                n.appear,
                n.enter,
                n.exit,
                n.timeout,
                n.addEndListener,
                n.onEnter,
                n.onEntering,
                n.onEntered,
                n.onExit,
                n.onExiting,
                n.onExited,
                n.nodeRef,
                (0,
                o.A)(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return r.createElement(u.Provider, {
                    value: null
                }, "function" == typeof e ? e(t, i) : r.cloneElement(r.Children.only(e), i))
            }
            ,
            n
        }(r.Component);
        function v() {}
        h.contextType = u,
        h.propTypes = {},
        h.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: v,
            onEntering: v,
            onEntered: v,
            onExit: v,
            onExiting: v,
            onExited: v
        },
        h.UNMOUNTED = c,
        h.EXITED = l,
        h.ENTERING = f,
        h.ENTERED = p,
        h.EXITING = d;
        var m = h
    },
    18978: function(t, n) {
        var e;
        !function() {
            "use strict";
            var o = {}.hasOwnProperty;
            function i() {
                for (var t = "", n = 0; n < arguments.length; n++) {
                    var e = arguments[n];
                    e && (t = s(t, r(e)))
                }
                return t
            }
            function r(t) {
                if ("string" == typeof t || "number" == typeof t)
                    return t;
                if ("object" != typeof t)
                    return "";
                if (Array.isArray(t))
                    return i.apply(null, t);
                if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
                    return t.toString();
                var n = "";
                for (var e in t)
                    o.call(t, e) && t[e] && (n = s(n, e));
                return n
            }
            function s(t, n) {
                return n ? t ? t + " " + n : t + n : t
            }
            t.exports ? (i.default = i,
            t.exports = i) : void 0 === (e = function() {
                return i
            }
            .apply(n, [])) || (t.exports = e)
        }()
    },
    58168: function(t, n, e) {
        "use strict";
        function o() {
            return o = Object.assign ? Object.assign.bind() : function(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = arguments[n];
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
                return t
            }
            ,
            o.apply(this, arguments)
        }
        e.d(n, {
            A: function() {
                return o
            }
        })
    },
    98587: function(t, n, e) {
        "use strict";
        function o(t, n) {
            if (null == t)
                return {};
            var e, o, i = {}, r = Object.keys(t);
            for (o = 0; o < r.length; o++)
                e = r[o],
                n.indexOf(e) >= 0 || (i[e] = t[e]);
            return i
        }
        e.d(n, {
            A: function() {
                return o
            }
        })
    }
}]);
//# sourceMappingURL=8597-279aa0b04222f8fecc7a-v2.js.map

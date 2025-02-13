"use strict";
(self.webpackChunkexodus_website = self.webpackChunkexodus_website || []).push([[8676], {
    17372: function(e, t, n) {
        var o = n(32485)
          , a = n.n(o)
          , r = n(96540);
        const i = {
            copy: ["Don't invest unless you're prepared to lose all the money you invest.", "Crypto is a high-risk investment and you should not expect to be protected if something goes wrong."],
            cta: {
                copy: "Take 2 mins to learn more",
                path: "https://uk.exodus.com/uk-regulations"
            }
        };
        t.A = e => {
            let {stretch: t, data: n=i, withPromoBanner: o=!1} = e;
            return r.createElement("div", {
                className: a()("x__investment-risk-banner", {
                    "x__investment-risk-banner--header-collapsed": t,
                    "x__investment-risk-banner--with-promo-banner": o
                })
            }, r.createElement("div", {
                className: "x__investment-risk-banner__content"
            }, r.createElement("p", null, n.copy.length > 0 && n.copy.map(( (e, t) => r.createElement("span", {
                key: t
            }, e, " "))), r.createElement("a", {
                href: n.cta.path,
                target: "_blank"
            }, n.cta.copy))))
        }
    },
    47240: function(e, t, n) {
        var o = n(96540)
          , a = n(18105)
          , r = n(32485)
          , i = n.n(r);
        function c() {
            return o.createElement("svg", {
                width: "16",
                height: "17",
                viewBox: "0 0 16 17",
                fill: "white"
            }, o.createElement("path", {
                d: "M16 4.54916L9.06182 0V2.54346L13.5127 5.43574L12.9891 7.09262H9.06182V9.20006H12.9891L13.5127 10.8569L9.06182 13.7492V16.2927L16 11.7581L14.8655 8.15361L16 4.54916Z"
            }), o.createElement("path", {
                d: "M3.02545 9.20006H6.93818V7.09262H3.01091L2.50182 5.43574L6.93818 2.54346V0L0 4.54916L1.13455 8.15361L0 11.7581L6.95273 16.2927V13.7492L2.50182 10.8569L3.02545 9.20006Z"
            }))
        }
        function s(e) {
            let {opacity: t} = e;
            return o.createElement(o.Fragment, null, o.createElement("span", {
                className: i()({
                    opacity: t
                })
            }, "Exodus ON NYSE American"), o.createElement(c, null))
        }
        t.A = function() {
            return a.fD ? o.createElement("div", {
                className: "x__promo-banner"
            }, o.createElement("a", {
                href: "https://finance.yahoo.com/news/sec-approves-crypto-wallet-maker-183305890.html",
                target: "_blank",
                rel: "noreferrer nofollow noopener"
            }, Array(24).fill().map(( (e, t) => o.createElement(s, {
                key: t,
                opacity: t % 2 == 1
            }))))) : null
        }
    },
    11931: function(e, t, n) {
        n.d(t, {
            Mt: function() {
                return y
            },
            P4: function() {
                return g
            },
            SK: function() {
                return f
            },
            km: function() {
                return w
            },
            lG: function() {
                return v
            }
        });
        var o = n(18105);
        function a(e) {
            return e ? Object.fromEntries(Object.entries(e).map((e => {
                let[t,n] = e;
                return [t, n[0]]
            }
            ))) : {}
        }
        const r = a(o.yd)
          , {android: i, ios: c, lin: s, linZip: l, mac: u, macMs: d, web3: m, win: p} = r
          , f = {
            ...r
        }
          , h = a(o.mL)
          , g = {
            ...h,
            extension: h.web3
        }
          , w = {
            [i]: "Download on Google Play",
            [c]: "Download on the App Store",
            [s]: "Download for Linux (.deb)",
            [l]: "Download for Linux (.zip)",
            [u]: "Download for Mac (Intel)",
            [d]: "Download for Mac (Apple Silicon)",
            [m]: "Download on Chrome Web Store",
            [p]: "Download for Windows (64-bit)"
        }
          , y = {
            [i]: "Google Play",
            [c]: "App Store",
            [s]: "Linux (.deb)",
            [l]: "Linux (.zip)",
            [u]: "Mac (Intel)",
            [d]: "Mac (Apple Silicon)",
            [m]: "Chrome Web Store",
            [p]: "Windows (64-bit)"
        }
          , v = {
            linux: "Download Exodus for Linux",
            macintosh: "Download Exodus for Mac",
            windows: "Download Exodus for Windows"
        }
    },
    3840: function(e, t, n) {
        var o = n(38033)
          , a = n(96288)
          , r = n(57497)
          , i = n(11931);
        t.A = function(e, t, n) {
            if (!e)
                return;
            const {android: c, ios: s, lin: l, linZip: u, mac: d, macMs: m, web3: p, win: f} = i.SK
              , h = "en" !== n ? n : ""
              , g = {
                [c]: (0,
                a.PZ)(h),
                [s]: (0,
                a.JL)(h),
                [l]: (0,
                a.S2)(h),
                [u]: (0,
                a.E1)(h),
                [d]: (0,
                a.EV)(h),
                [m]: (0,
                a.lE)(h),
                [p]: (0,
                a.Ne)(h),
                [f]: (0,
                a.Jt)(h)
            };
            return Object.entries(e).map((e => {
                let[n,a] = e;
                return {
                    label: i.km[n],
                    link: a,
                    key: n,
                    tracker: () => {
                        return e = g[n],
                        (0,
                        r.A)({
                            eventType: "download"
                        }),
                        void (e && (0,
                        o.A)(e, t));
                        var e
                    }
                }
            }
            ))
        }
    },
    81197: function(e, t, n) {
        var o = n(18105)
          , a = n(31896)
          , r = n(90305)
          , i = n(11931);
        const {android: c, ios: s, lin: l, linZip: u, mac: d, macMs: m, web3: p, win: f} = i.SK
          , {extension: h, desktop: g, mobile: w} = i.P4;
        t.A = function(e) {
            let {location: t, referrer: n, variant: i, version: g, androidLinkProps: y={}, extensionLinkProps: v={}} = e;
            const k = (0,
            r.A)({
                location: t,
                referrer: n,
                ...y
            })
              , _ = "".concat(o.qc)
              , b = "".concat(o.um, "/exodus-linux-x64-").concat(g, ".deb")
              , E = "".concat(o.um, "/exodus-linux-x64-").concat(g, ".zip")
              , x = "".concat(o.um, "/exodus-macos-").concat(g, ".dmg")
              , A = "".concat(o.um, "/exodus-macos-arm64-").concat(g, ".dmg")
              , C = (0,
            a.A)({
                location: t,
                referrer: n,
                ...v
            })
              , L = "".concat(o.um, "/exodus-windows-x64-").concat(g, ".exe");
            switch (i) {
            case p:
            case h:
                return {
                    [p]: C
                };
            case s:
                return {
                    [s]: _
                };
            case c:
                return {
                    [c]: k
                };
            case f:
                return {
                    [f]: L
                };
            case d:
                return {
                    [d]: x,
                    [m]: A
                };
            case m:
                return {
                    [m]: A,
                    [d]: x
                };
            case l:
                return {
                    [l]: b,
                    [u]: E
                };
            case u:
                return {
                    [u]: E,
                    [l]: b
                };
            case w:
                return {
                    [s]: _,
                    [c]: k
                };
            default:
                return {
                    [f]: L,
                    [d]: x,
                    [m]: A,
                    [l]: b,
                    [u]: E
                }
            }
        }
    },
    84833: function(e, t, n) {
        var o = n(18105);
        t.A = function(e, t) {
            const n = 1 === e.length
              , {key: a, link: r, tracker: i} = n && e[0];
            return n ? {
                itemKey: a || t,
                link: r,
                tracker: i
            } : {
                link: o.LI
            }
        }
    },
    17689: function(e, t, n) {
        n.d(t, {
            Ay: function() {
                return l
            }
        });
        var o = n(96540)
          , a = n(18105);
        var r = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Xp
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Zk;
            (0,
            o.useEffect)(( () => {
                var n, o, a, r, i, c, s;
                window.fbq || (n = window,
                o = document,
                a = "script",
                r = e,
                n.fbq || (i = n.fbq = function() {
                    i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments)
                }
                ,
                n._fbq || (n._fbq = i),
                i.push = i,
                i.loaded = !0,
                i.version = "2.0",
                i.queue = [],
                (c = o.createElement(a)).async = !0,
                c.src = r,
                (s = o.getElementsByTagName(a)[0]).parentNode.insertBefore(c, s)),
                t ? (fbq("init", t),
                fbq("track", "PageView")) : console.warn("Meta pixel: Please provide Meta Pixel's ID for initializing"))
            }
            ), [e, t])
        };
        var i = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.kv
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.S3;
            (0,
            o.useEffect)(( () => {
                window.rdt || (!function(e, t, n, o) {
                    if (!e.rdt) {
                        var a = e.rdt = function() {
                            a.sendEvent ? a.sendEvent.apply(a, arguments) : a.callQueue.push(arguments)
                        }
                        ;
                        a.callQueue = [];
                        var r = t.createElement(n);
                        r.src = o,
                        r.async = !0;
                        var i = t.getElementsByTagName(n)[0];
                        i.parentNode.insertBefore(r, i)
                    }
                }(window, document, "script", e),
                t ? (rdt("init", t),
                rdt("track", "PageVisit")) : console.warn("Reddit pixel: Please provide Reddit Advertiser ID for initializing"))
            }
            ), [e, t])
        };
        var c = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.O1
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.yg;
            (0,
            o.useEffect)(( () => {
                window.ttq || (!function(e, t, n, o) {
                    e.TiktokAnalyticsObject = n;
                    var a = e[n] = e[n] || [];
                    a.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"],
                    a.setAndDefer = function(e, t) {
                        e[t] = function() {
                            e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    }
                    ;
                    for (var r = 0; r < a.methods.length; r++)
                        a.setAndDefer(a, a.methods[r]);
                    a.instance = function(e) {
                        for (var t = a._i[e] || [], n = 0; n < a.methods.length; n++)
                            a.setAndDefer(t, a.methods[n]);
                        return t
                    }
                    ,
                    a.load = function(e, t) {
                        var r = o;
                        a._i = a._i || {},
                        a._i[e] = [],
                        a._i[e]._u = r,
                        a._t = a._t || {},
                        a._t[e] = +new Date,
                        a._o = a._o || {},
                        a._o[e] = t || {};
                        var i = document.createElement("script");
                        i.type = "text/javascript",
                        i.async = !0,
                        i.src = r + "?sdkid=" + e + "&lib=" + n;
                        var c = document.getElementsByTagName("script")[0];
                        c.parentNode.insertBefore(i, c)
                    }
                }(window, document, "ttq", e),
                t ? (ttq.load(t),
                ttq.page()) : console.warn("TikTok pixel: Please provide TikTok Pixel's ID for initializing"))
            }
            ), [e, t])
        }
          , s = n(55095);
        function l() {
            r(),
            i(),
            c(),
            (0,
            s.A)()
        }
    },
    55095: function(e, t, n) {
        n.d(t, {
            D: function() {
                return r
            }
        });
        var o = n(96540)
          , a = n(18105);
        function r(e) {
            window.twq ? window.twq("event", e, {}) : console.warn("Twitter pixel is not initialized")
        }
        t.A = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.X9
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.zF;
            (0,
            o.useEffect)(( () => {
                var n, o, a, r, i, c;
                window.twq || (n = window,
                o = document,
                a = "script",
                n.twq || (r = n.twq = function() {
                    r.exe ? r.exe.apply(r, arguments) : r.queue.push(arguments)
                }
                ,
                r.version = "1.1",
                r.queue = [],
                (i = o.createElement(a)).async = !0,
                i.src = e,
                (c = o.getElementsByTagName(a)[0]).parentNode.insertBefore(i, c)),
                t ? twq("config", t) : console.warn("Twitter pixel: Please provide Twitter Pixel's ID for initializing"))
            }
            ), [e, t])
        }
    },
    53732: function(e, t, n) {
        n.d(t, {
            A: function() {
                return s
            }
        });
        var o = n(96540)
          , a = n(80990)
          , r = n.n(a)
          , i = n(18105);
        function c(e) {
            let {intercomSettings: t={}, showNewMessage: n=!1, prepopulatedMessage: o=""} = e;
            return r()({
                app_id: i.CT,
                ...t
            }),
            n && window.Intercom("showNewMessage", o),
            null
        }
        function s(e) {
            let {intercomSettings: t, showNewMessage: n, prepopulatedMessage: a} = e;
            return o.createElement(c, {
                intercomSettings: t,
                showNewMessage: n,
                prepopulatedMessage: a
            })
        }
    },
    70339: function(e, t, n) {
        n.d(t, {
            A: function() {
                return R
            }
        });
        var o = n(32485)
          , a = n.n(o)
          , r = n(96540)
          , i = n(17689)
          , c = n(3840)
          , s = n(81197)
          , l = n(84833)
          , u = n(14181)
          , d = n(57497)
          , m = n(58277)
          , p = n(78330)
          , f = n(30587)
          , h = n(59404);
        var g = function(e) {
            let {preventCondition: t=!1, offset: n=80} = e;
            const {0: o, 1: a} = (0,
            r.useState)(!1);
            let i, c = 0;
            const s = () => {
                const e = document.documentElement.scrollTop;
                t || (c = e,
                i < c && e > n + n / 2 ? a(!0) : 0 === e && a(!1),
                i = c)
            }
            ;
            return (0,
            r.useEffect)(( () => {
                if ("undefined" != typeof document && "undefined" != typeof window)
                    return window.addEventListener("scroll", s),
                    () => window.removeEventListener("scroll", s)
            }
            ), [t]),
            o
        }
          , w = n(18105)
          , y = n(28007);
        var v = function(e) {
            let {isMenuOpen: t, data: n={
                title: "Download",
                href: w.LI,
                onClick: () => {}
            }} = e;
            const {title: o, href: i, onClick: c} = n;
            return r.createElement(y.N_, {
                to: i,
                className: a()("x__download", {
                    "x__download--menu-open": t
                }),
                onClick: c
            }, o)
        };
        function k() {
            return r.createElement("svg", {
                fill: "none",
                viewBox: "0 0 156 32"
            }, r.createElement("title", null, "Exodus"), r.createElement("g", {
                id: "exodus-logomark"
            }, r.createElement("path", {
                fill: "url(#gradient_1)",
                d: "M31.808 8.935L18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08z"
            }), r.createElement("path", {
                fill: "url(#gradient_2)",
                d: "M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254z"
            }), r.createElement("mask", {
                id: "mask0_536_8492",
                style: {
                    maskType: "alpha"
                },
                width: 32,
                height: 32,
                x: 0,
                y: 0,
                maskUnits: "userSpaceOnUse"
            }, r.createElement("path", {
                fill: "url(#gradient_3)",
                d: "M31.808 8.935L18.181 0v4.996l8.742 5.68-1.029 3.254h-7.713v4.14h7.713l1.029 3.254-8.742 5.68V32l13.627-8.906-2.228-7.08 2.228-7.08z"
            }), r.createElement("path", {
                fill: "url(#gradient_4)",
                d: "M6.325 18.07h7.685v-4.14H6.296l-1-3.254 8.714-5.68V0L.383 8.935l2.228 7.08-2.228 7.079L14.039 32v-4.995l-8.742-5.681 1.028-3.254z"
            })), r.createElement("g", {
                mask: "url(#mask0_536_8492)"
            }, r.createElement("path", {
                fill: "url(#gradient_5)",
                d: "M0.4 0H31.599999999999998V32H0.4z"
            }))), r.createElement("g", {
                id: "exodus-logotype"
            }, r.createElement("path", {
                fill: "#fff",
                d: "M58.92 8.8v2.797H46.029v2.863h10.955v2.798H46.028v3.144h12.893V23.2h-16.2V8.8h16.2zM60.75 23.2l7.407-7.287L60.96 8.8h4.553l5.078 5.14L75.46 8.8h4.26l-7.177 7.113L79.95 23.2h-4.595l-4.764-5.292-5.434 5.292H60.75z"
            }), r.createElement("path", {
                fill: "#fff",
                d: "M88.832 8.8c6.001 0 9.61 3.005 9.61 7.2s-3.609 7.2-9.61 7.2c-6.001 0-9.59-3.005-9.59-7.2s3.589-7.2 9.59-7.2zm0 2.692c-3.61 0-6.27 1.816-6.27 4.508s2.66 4.508 6.27 4.508c3.63 0 6.29-1.816 6.29-4.508s-2.66-4.508-6.29-4.508zM110.404 8.8c4.807 0 7.703 2.667 7.703 7.178 0 4.554-2.875 7.222-7.661 7.222h-9.739V8.8h9.697zm4.303 7.178c0-2.82-1.679-4.38-4.723-4.38h-5.982v8.804h5.982c3.044 0 4.723-1.583 4.723-4.424zM129.005 23.2c-5.061 0-8.9-2.297-8.9-6.53V8.8h3.312v7.55c0 2.617 2.72 3.83 5.588 3.83 2.89 0 5.61-1.192 5.61-3.83V8.8h3.29v7.87c0 4.233-3.817 6.53-8.9 6.53zM147.174 23.2c-2.719 0-5.651-.501-7.733-1.44l1.084-2.672c1.869.856 4.44 1.399 6.755 1.399 2.656 0 5.141-.564 5.141-1.565 0-.73-.786-1.044-2.422-1.294l-4.631-.501c-3.569-.48-5.311-1.711-5.311-3.882 0-2.796 2.953-4.445 7.287-4.445 2.613 0 6.203.48 8.051 1.315l-1.083 2.546c-1.827-.752-4.929-1.127-7.117-1.127-2.252 0-3.739.521-3.739 1.481 0 .668.744 1.002 2.656 1.274l4.503.5c3.442.48 5.226 1.65 5.226 3.924 0 2.88-3.781 4.487-8.667 4.487z"
            })), r.createElement("defs", null, r.createElement("linearGradient", {
                id: "gradient_1",
                x1: 27.4,
                x2: 18.272,
                y1: 34.2,
                y2: -3.514,
                gradientUnits: "userSpaceOnUse"
            }, r.createElement("stop", {
                stopColor: "#0B46F9"
            }), r.createElement("stop", {
                offset: "1",
                stopColor: "#BBFBE0"
            })), r.createElement("linearGradient", {
                id: "gradient_2",
                x1: 27.4,
                x2: 18.272,
                y1: 34.2,
                y2: -3.514,
                gradientUnits: "userSpaceOnUse"
            }, r.createElement("stop", {
                stopColor: "#0B46F9"
            }), r.createElement("stop", {
                offset: "1",
                stopColor: "#BBFBE0"
            })), r.createElement("linearGradient", {
                id: "gradient_3",
                x1: 27.4,
                x2: 18.272,
                y1: 34.2,
                y2: -3.514,
                gradientUnits: "userSpaceOnUse"
            }, r.createElement("stop", {
                stopColor: "#0B46F9"
            }), r.createElement("stop", {
                offset: "1",
                stopColor: "#BBFBE0"
            })), r.createElement("linearGradient", {
                id: "gradient_4",
                x1: 27.4,
                x2: 18.272,
                y1: 34.2,
                y2: -3.514,
                gradientUnits: "userSpaceOnUse"
            }, r.createElement("stop", {
                stopColor: "#0B46F9"
            }), r.createElement("stop", {
                offset: "1",
                stopColor: "#BBFBE0"
            })), r.createElement("linearGradient", {
                id: "gradient_5",
                x1: 2.4,
                x2: 18.2,
                y1: 7.2,
                y2: 19,
                gradientUnits: "userSpaceOnUse"
            }, r.createElement("stop", {
                offset: .12,
                stopColor: "#8952FF",
                stopOpacity: .87
            }), r.createElement("stop", {
                offset: 1,
                stopColor: "#DABDFF",
                stopOpacity: 0
            }))))
        }
        var _ = function(e) {
            let {hideLogotype: t, showLogotype: n, isMenuOpen: o=!1, href: i="/"} = e;
            return r.createElement(y.N_, {
                to: i,
                className: a()("x__exodus-logo", {
                    "x__exodus-logo--hide-logotype": t && !n,
                    "x__exodus-logo--show-logotype": !t && n,
                    "x__exodus-logo--menu-open": o
                })
            }, r.createElement(k, null), r.createElement("span", null, "Exodus"))
        };
        var b = function(e) {
            let {isMenuOpen: t, onClick: n} = e;
            return r.createElement("button", {
                className: a()("x__hamburger", {
                    "x__hamburger--menu-open": t
                }),
                onClick: n,
                type: "button"
            }, "Menu", r.createElement("span", null), r.createElement("span", null), r.createElement("span", null))
        }
          , E = n(45458)
          , x = n(70113)
          , A = n(7866);
        var C = function(e) {
            let {name: t} = e;
            return r.createElement("span", {
                className: "x__category"
            }, t)
        };
        const L = e => {
            let {children: t, className: n, href: o, onClick: a, target: i} = e;
            const c = {
                children: t,
                className: n,
                onClick: a
            };
            return o && o.startsWith("https://") ? r.createElement("a", Object.assign({
                href: o
            }, c, {
                target: i
            })) : r.createElement(y.N_, Object.assign({
                to: o
            }, c))
        }
        ;
        var M = function(e) {
            let {href: t, name: n, title: o, description: a, onClick: i, target: c="_self"} = e;
            return r.createElement(L, {
                className: "x__link",
                href: t,
                onClick: i,
                target: c
            }, r.createElement("i", {
                className: "x__link__icon x__link__icon--".concat((s = n,
                s.toString().toLowerCase().replace(/[^a-z0-9- ]/g, "").split(" ").join("-")))
            }), r.createElement("span", null, r.createElement("span", {
                className: "x__link__title"
            }, o), r.createElement("span", {
                className: "x__link__description"
            }, a)));
            var s
        };
        var S = function(e) {
            let {colName: t, onClick: n, items: o=[], open: i=!1} = e;
            return r.createElement("div", {
                className: a()("x__navigation-dropdown__menu", {
                    "x__navigation-dropdown__menu--open": i
                })
            }, r.createElement("div", null, o.map(( (e, o) => {
                const {description: a, items: i, name: c} = e
                  , s = "col-".concat(t, "_item-").concat(o);
                return a || c ? c && i && i.length > 0 ? r.createElement(r.Fragment, {
                    key: s
                }, r.createElement(C, {
                    name: c
                }), i.map(( (e, t) => r.createElement(M, Object.assign({
                    key: "".concat(s, "_subitem-").concat(t),
                    name: e.key
                }, e, {
                    onClick: n
                }))))) : r.createElement(M, Object.assign({
                    key: s,
                    name: e.key
                }, e, {
                    onClick: n
                })) : null
            }
            ))))
        };
        var N = function(e) {
            let {label: t, items: n, colIndex: o, onItemClick: i, onToggleClick: c, open: s=!1} = e;
            return r.createElement("li", {
                className: a()("x__navigation-dropdown", {
                    "x__navigation-dropdown--open": s
                })
            }, r.createElement("span", {
                onClick: c,
                tabIndex: 0
            }, t), r.createElement(S, {
                colName: o,
                items: n,
                open: s,
                onClick: i
            }))
        };
        function z(e) {
            let {onClick: t} = e;
            return r.createElement("li", {
                className: "x__navigation-dropdown x__navigation-dropdown--home"
            }, r.createElement(y.N_, {
                to: "/",
                onClick: t
            }, "Home"))
        }
        function O() {
            return r.createElement("li", {
                className: "x__navigation-dropdown x__navigation-dropdown--social"
            }, r.createElement(x.A, {
                filterItems: ["facebook", "twitter", "instagram", "youTube"],
                navigation: !0
            }))
        }
        var P = function(e) {
            let {background: t="primary", data: n=[], isMenuOpen: o=!1, showSocialNetworks: i=!1, onChange: c} = e;
            const s = (0,
            r.useRef)(null)
              , l = n.map(( () => !1))
              , {0: u, 1: d} = (0,
            r.useState)(l)
              , {isMobile: p} = (0,
            m.A)()
              , f = () => {
                c(d(l))
            }
              , h = e => {
                s.current && !s.current.contains(e.target) && d(l)
            }
              , g = (0,
            r.useCallback)((e => {
                d((t => {
                    if (t[e] !== !t[e]) {
                        const n = (0,
                        E.A)(t);
                        return n[e] = !t[e],
                        n.map(( (t, o) => o === e && n[o]))
                    }
                    return t
                }
                ))
            }
            ), []);
            return (0,
            A.A)("mouseup", h, !0),
            (0,
            A.A)("touched", h, !0),
            n && 0 !== n.length ? r.createElement("menu", {
                ref: s,
                className: a()("x__navigation x__navigation--".concat(t), {
                    "x__navigation--menu-open": o,
                    "x__navigation--social": i
                })
            }, r.createElement("ul", null, p && r.createElement(z, {
                onClick: f
            }), n.map(( (e, t) => {
                let {column: n, items: o} = e;
                return r.createElement(N, {
                    key: t,
                    colIndex: t,
                    items: o,
                    label: n,
                    open: u[t],
                    onItemClick: f,
                    onToggleClick: () => g(t)
                })
            }
            )), i && r.createElement(O, null))) : null
        };
        var B = function() {
            return r.createElement("span", {
                className: "x__plug-to-center-menu"
            })
        };
        let T, D;
        w.bR && (T = n(17372).A),
        w.fD && (D = n(47240).A);
        var R = function(e) {
            var t;
            let {location: n, trackerPage: o, pathname: y="en", background: k="primary", social: E=!1, minimal: A=!1, showInvestmentRiskBanner: C=!0, showHeaderPromoBanner: L=!1, onChange: M} = e;
            const {download: S, homepage: N, navigation: z} = function(e) {
                return {
                    download: (0,
                    u.iD)(e),
                    homepage: (0,
                    u.c4)(e),
                    navigation: (0,
                    u.f3)(e)
                }
            }(y)
              , {0: O, 1: R} = (0,
            r.useState)(!1)
              , {0: q, 1: V} = (0,
            r.useState)(!1)
              , I = (0,
            p.A)()
              , U = (0,
            f.r)().latest
              , {isMobile: F} = (0,
            m.A)()
              , H = g({
                preventCondition: O
            })
              , {loading: j, os: W} = (0,
            h.A)()
              , G = "header_".concat(o, "-page")
              , J = (0,
            s.A)({
                variant: W,
                location: I && n,
                referrer: I && (null === (t = document) || void 0 === t ? void 0 : t.referrer),
                version: U,
                androidLinkProps: {
                    utmSource: "exodus-website",
                    utmCampaign: G,
                    utmContent: G
                }
            })
              , Z = (0,
            c.A)(J, G, y)
              , K = (0,
            l.A)(Z, W);
            (0,
            r.useEffect)(( () => {
                F || R(!1)
            }
            ), [H]),
            (0,
            r.useEffect)(( () => {
                M && M(H)
            }
            ), [F]),
            (0,
            r.useEffect)(( () => {
                (0,
                d.A)({
                    eventType: "pageview"
                })
            }
            ), []);
            const X = H && !A
              , Y = O || !A
              , Q = E && !w.bR && !A
              , $ = !E && !A && !j
              , ee = F && !A
              , te = L && w.fD
              , ne = w.bR && C && !A;
            (0,
            r.useEffect)(( () => {
                if ("undefined" == typeof document)
                    return;
                const e = "exodus__body"
                  , t = "".concat(e, "--").concat(k)
                  , n = "".concat(e, "--menu-open")
                  , o = document.querySelector("body");
                return o.classList.add(e),
                o.classList.add(t),
                o.classList.toggle(n, O || ""),
                () => {
                    o.classList.remove(e),
                    o.classList.remove(t),
                    o.classList.remove(n)
                }
            }
            ), [k, O]),
            (0,
            i.Ay)();
            const oe = {
                ...S,
                ...F && K && {
                    href: K.link,
                    onClick: K.tracker
                }
            };
            return r.createElement(r.Fragment, null, te && r.createElement(D, null), r.createElement("div", {
                className: a()("exodus__header exodus__header--".concat(k), {
                    "exodus__header--condensed": H,
                    "exodus__header--menu-open": F && O,
                    "exodus__header--minimal": A,
                    "exodus__header--with-banner": te && !q
                })
            }, r.createElement("nav", null, r.createElement(_, Object.assign({}, N, {
                isMenuOpen: O,
                hideLogotype: X,
                showLogotype: A
            })), Y && r.createElement(P, {
                background: k,
                data: z,
                isMenuOpen: O,
                showSocialNetworks: Q && F,
                onChange: R
            }), Q && !F && r.createElement(x.A, {
                filterItems: ["facebook", "twitter", "instagram", "youTube"],
                navigation: !0
            }), $ && r.createElement(v, {
                data: oe,
                isMenuOpen: O
            }), !Q && !$ && r.createElement(B, null), ee && r.createElement(b, {
                isMenuOpen: O,
                onClick: () => R((e => !e))
            }))), ne && r.createElement(T, {
                withPromoBanner: te && !q,
                stretch: H,
                onBannerHide: () => V(!0)
            }))
        }
    },
    70113: function(e, t, n) {
        var o = n(45458)
          , a = n(96540)
          , r = n(32485)
          , i = n.n(r)
          , c = n(18105);
        const s = {
            discord: c.zp,
            github: c.Oe,
            youTube: c.OE,
            reddit: c.pf,
            twitter: c.Pt,
            instagram: c.f$,
            facebook: c.F3
        }
          , l = {
            discord: a.createElement("path", {
                d: "M24.214 7.66A21.637 21.637 0 0018.873 6a.081.081 0 00-.086.041c-.23.41-.486.945-.665 1.366a19.975 19.975 0 00-6 0 14.055 14.055 0 00-.674-1.365.084.084 0 00-.086-.04c-1.845.318-3.64.874-5.341 1.655a.076.076 0 00-.035.03C2.584 12.771 1.65 17.73 2.109 22.624a.09.09 0 00.035.061 21.761 21.761 0 006.552 3.312c.034.01.07-.002.092-.03.504-.69.954-1.416 1.34-2.18a.085.085 0 00.003-.068.083.083 0 00-.048-.048c-.714-.27-1.394-.6-2.047-.975a.084.084 0 01-.01-.14c.139-.103.277-.21.408-.318a.08.08 0 01.085-.012c4.294 1.96 8.943 1.96 13.186 0a.08.08 0 01.086.01c.132.11.27.217.408.32a.083.083 0 01.034.072.085.085 0 01-.041.068c-.654.382-1.334.705-2.048.974a.083.083 0 00-.049.049.084.084 0 00.004.068c.394.763.844 1.49 1.34 2.18.02.028.058.04.092.03a21.687 21.687 0 006.562-3.312.083.083 0 00.034-.06c.547-5.66-.916-10.576-3.88-14.935a.067.067 0 00-.033-.03zM10.769 19.642c-1.293 0-2.358-1.187-2.358-2.645 0-1.457 1.045-2.644 2.358-2.644 1.324 0 2.38 1.197 2.358 2.644 0 1.458-1.044 2.645-2.358 2.645zm8.719 0c-1.293 0-2.358-1.187-2.358-2.645 0-1.457 1.045-2.644 2.358-2.644 1.324 0 2.379 1.197 2.358 2.644 0 1.458-1.034 2.645-2.358 2.645z"
            }),
            facebook: a.createElement("path", {
                d: "M20.399 8.89a7.12 7.12 0 00-1.924-.292c-.781 0-2.464.498-2.464 1.463v2.311h3.997v3.891h-3.997V27h-4.027V16.263H10v-3.89h1.984v-1.96C11.984 7.456 13.366 5 16.702 5c1.142 0 3.186.059 4.298.439l-.601 3.452z"
            }),
            github: a.createElement("path", {
                d: "M16 4C9.37 4 4 9.373 4 16c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C24.565 25.795 28 21.295 28 16c0-6.627-5.373-12-12-12z"
            }),
            instagram: a.createElement("path", {
                d: "M16 4c-3.26 0-3.667.015-4.947.072-1.278.06-2.148.261-2.913.558a5.876 5.876 0 00-2.126 1.384A5.855 5.855 0 004.63 8.14c-.297.765-.499 1.635-.558 2.913C4.012 12.333 4 12.74 4 16s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.301.8.774 1.526 1.384 2.126.6.61 1.325 1.083 2.126 1.384.766.296 1.636.499 2.913.558 1.28.06 1.687.072 4.947.072s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0023.86 4.63c-.765-.297-1.636-.499-2.913-.558C19.667 4.012 19.26 4 16 4zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85 0 3.204-.015 3.585-.074 4.85-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382c-.388.397-.86.703-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.161 6.161 0 100 12.323 6.161 6.161 0 000-12.323zM16 20c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 112.88 0z"
            }),
            reddit: a.createElement("path", {
                d: "M19.867 19.2c-.971 0-1.788-.777-1.788-1.736s.817-1.762 1.788-1.762c.972 0 1.76.803 1.76 1.762s-.788 1.736-1.76 1.736zm.413 3.371c-.905.892-2.3 1.326-4.267 1.326h-.028c-1.966 0-3.36-.434-4.265-1.326a.692.692 0 010-.99.717.717 0 011.004 0c.624.615 1.69.915 3.261.915h.028c1.57 0 2.638-.3 3.263-.916a.717.717 0 011.158.227.694.694 0 01-.154.764zm-9.907-5.107c0-.958.815-1.762 1.785-1.762.972 0 1.76.804 1.76 1.762 0 .959-.788 1.736-1.76 1.736-.97 0-1.785-.777-1.785-1.736zM24.664 6.4c.659 0 1.194.529 1.194 1.177 0 .65-.535 1.178-1.194 1.178a1.187 1.187 0 01-1.193-1.178c0-.648.535-1.177 1.194-1.177M29 15.557c0-1.7-1.402-3.084-3.125-3.084-.746 0-1.43.26-1.969.692-1.905-1.182-4.323-1.894-6.915-2.044l1.352-4.218 3.716.863c.097 1.335 1.228 2.392 2.605 2.392 1.441 0 2.613-1.157 2.613-2.58C27.277 6.157 26.105 5 24.664 5a2.62 2.62 0 00-2.32 1.393L18.028 5.39a.71.71 0 00-.84.47l-1.678 5.236c-2.792.067-5.418.781-7.463 2.032a3.135 3.135 0 00-1.921-.655C4.402 12.473 3 13.856 3 15.557c0 1.05.536 1.98 1.353 2.536a5.36 5.36 0 00-.052.74c0 2.126 1.252 4.103 3.525 5.567 2.18 1.404 5.064 2.177 8.121 2.177 3.058 0 5.942-.773 8.121-2.177 2.273-1.464 3.526-3.441 3.526-5.567 0-.227-.016-.452-.044-.676a3.073 3.073 0 001.45-2.6z"
            }),
            twitter: a.createElement("path", {
                d: "M4.056 5l8.88 11.873L4 26.527h2.011l7.824-8.452 6.32 8.452H27l-9.38-12.541L25.938 5h-2.011l-7.205 7.784L10.9 5H4.056zm2.958 1.481h3.144l13.884 18.564h-3.144L7.014 6.481z"
            }),
            youTube: a.createElement("path", {
                d: "M28.457 9.78a3.244 3.244 0 00-2.263-2.243C24.168 7 16.012 7 16.012 7s-8.136-.01-10.183.538a3.244 3.244 0 00-2.263 2.241A33.237 33.237 0 003 16.011a33.249 33.249 0 00.566 6.209 3.244 3.244 0 002.263 2.241C7.853 25 16.012 25 16.012 25s8.134 0 10.182-.539a3.243 3.243 0 002.263-2.241A33.24 33.24 0 0029 16.011a33.222 33.222 0 00-.542-6.231zM13.408 19.865v-7.721l6.79 3.867-6.79 3.855v-.001z"
            })
        };
        t.A = function(e) {
            let {filterItems: t=[], navigation: n=!1} = e
              , r = Object.entries(s).map((e => {
                let[t,n] = e;
                return {
                    title: t,
                    href: n
                }
            }
            ));
            if (t && t.length > 0) {
                r = (0,
                o.A)(r).filter((e => t.includes(e.title))),
                r.sort(( (e, n) => t.indexOf(e.title) - t.indexOf(n.title)))
            }
            return a.createElement("div", {
                className: i()("exodus__social", {
                    "exodus__social--navigation": n
                })
            }, r.map((e => {
                let {title: t, href: n} = e;
                return a.createElement("a", {
                    key: t,
                    href: n,
                    target: "_blank"
                }, a.createElement("svg", {
                    fill: "none",
                    viewBox: "0 0 32 32"
                }, a.createElement("title", null, t), l[t]))
            }
            )))
        }
    },
    14181: function(e, t, n) {
        n.d(t, {
            Yq: function() {
                return u
            },
            c4: function() {
                return c
            },
            f3: function() {
                return s
            },
            iD: function() {
                return l
            }
        });
        var o = n(18105);
        const a = n(10188)
          , r = n(84646);
        let i = {
            en: a,
            es: r
        };
        if (o.bR) {
            const e = n(Object(function() {
                var e = new Error("Cannot find module './navigation__uk.json'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }()));
            i = {
                ...i,
                uk: e
            }
        }
        const c = function() {
            const e = i[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en"] || a
              , {home: t} = e;
            return {
                title: t.label,
                description: t.copy,
                href: t.path
            }
        }
          , s = function() {
            const e = i[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en"] || a
              , {products: t, support: n, learn: r, company: c} = e;
            return [{
                column: t.name,
                items: [t.web3 && {
                    key: t.web3.key,
                    title: t.web3.label,
                    description: t.web3.copy,
                    href: o.bR ? "/download" : t.web3.path
                }, t.mobile && {
                    key: t.mobile.key,
                    title: t.mobile.label,
                    description: t.mobile.copy,
                    href: o.bR ? "/download" : t.mobile.path
                }, t.desktop && {
                    key: t.desktop.key,
                    title: t.desktop.label,
                    description: t.desktop.copy,
                    href: o.bR ? "/download" : t.desktop.path
                }, !o.bR && t.trezor && {
                    key: t.trezor.key,
                    title: t.trezor.label,
                    description: t.trezor.copy,
                    href: t.trezor.path
                }, !o.bR && t.rewards && {
                    key: t.rewards.key,
                    title: t.rewards.label,
                    description: t.rewards.copy,
                    href: t.rewards.path
                }, !o.bR && t.category && {
                    name: t.category.name,
                    items: [t.category.items.xoswap && {
                        key: t.category.items.xoswap.key,
                        title: t.category.items.xoswap.label,
                        description: t.category.items.xoswap.copy,
                        href: t.category.items.xoswap.path,
                        target: "_blank"
                    }, t.category.items.passkeys && {
                        key: t.category.items.passkeys.key,
                        title: t.category.items.passkeys.label,
                        description: t.category.items.passkeys.copy,
                        href: t.category.items.passkeys.path,
                        target: "_blank"
                    }, t.category.items.waas && {
                        key: t.category.items.waas.key,
                        title: t.category.items.waas.label,
                        description: t.category.items.waas.copy,
                        href: t.category.items.waas.path,
                        target: "_blank"
                    }]
                }]
            }, {
                column: n.name,
                items: [n.support && {
                    key: n.support.key,
                    title: n.support.label,
                    description: n.support.copy,
                    href: n.support.path
                }, n.status && {
                    key: n.status.key,
                    title: n.status.label,
                    description: n.status.copy,
                    href: n.status.path
                }, n.legal && {
                    key: n.legal.key,
                    title: n.legal.label,
                    description: n.legal.copy,
                    href: n.legal.path
                }]
            }, {
                column: r.name,
                items: [r.kb && {
                    key: r.kb.key,
                    title: r.kb.label,
                    description: r.kb.copy,
                    href: r.kb.path,
                    target: "_blank"
                }, !o.bR && r.youtube && {
                    key: r.youtube.key,
                    title: r.youtube.label,
                    description: r.youtube.copy,
                    href: r.youtube.path,
                    target: "_blank"
                }, !o.bR && r.newsletter && {
                    key: r.newsletter.key,
                    title: r.newsletter.label,
                    description: r.newsletter.copy,
                    href: r.newsletter.path
                }]
            }, {
                column: c.name,
                items: [!o.bR && c.about && {
                    key: c.about.key,
                    title: c.about.label,
                    description: c.about.copy,
                    href: c.about.path
                }, !o.bR && c.investors && {
                    key: c.investors.key,
                    title: c.investors.label,
                    description: c.investors.copy,
                    href: c.investors.path
                }, c.careers && {
                    key: c.careers.key,
                    title: c.careers.label,
                    description: c.careers.copy,
                    href: c.careers.path
                }, c.contact && {
                    key: c.contact.key,
                    title: c.contact.label,
                    description: c.contact.copy,
                    href: c.contact.path
                }, !o.bR && c.brand && {
                    key: c.brand.key,
                    title: c.brand.label,
                    description: c.brand.copy,
                    href: c.brand.path
                }, !o.bR && c.security && {
                    key: c.security.key,
                    title: c.security.label,
                    description: c.security.copy,
                    href: c.security.path
                }, !o.bR && c.trademarks && {
                    key: c.trademarks.key,
                    title: c.trademarks.label,
                    description: c.trademarks.copy,
                    href: c.trademarks.path
                }]
            }].map((e => ({
                ...e,
                items: e.items.filter(Boolean)
            })))
        }
          , l = function() {
            const e = i[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en"] || a
              , {download: t} = e;
            return t ? {
                title: t.label,
                href: t.path
            } : {}
        }
          , u = function() {
            const e = i[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en"] || a
              , {privacy: t, terms: n} = e.legal;
            return {
                ...t ? {
                    privacy: {
                        title: t.label,
                        href: t.path
                    }
                } : {},
                ...n ? {
                    terms: {
                        title: n.label,
                        href: n.path
                    }
                } : {}
            }
        }
    },
    57497: function(e, t, n) {
        n.d(t, {
            A: function() {
                return u
            }
        });
        var o = n(18105)
          , a = n(90335);
        const r = "ex_swagbucks_campaign";
        var i = e => {
            let {ec: t, ea: n, el: a} = e;
            if (!t || !n)
                return;
            let r = "".concat(o.Ex, "/analytics-proxy?ec=").concat(t, "&ea=").concat(n);
            a && (r = "".concat(r, "&el=").concat(a)),
            fetch(r).catch((e => console.log(e)))
        }
        ;
        var c = function() {
            const e = navigator.userAgent || navigator.vendor || window.opera;
            return /windows phone/i.test(e) ? "windows-phone" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : "unknown"
        };
        const s = "ex_brave_campaign_2201";
        const l = [e => {
            let {eventType: t} = e;
            const n = (0,
            a.Ri)(r);
            if (n) {
                const e = JSON.parse(n);
                if (["download", "app-store"].includes(t) && !e.downloadReqSent) {
                    const t = e.tid
                      , n = o.Cu ? o.XY : "/swagbucks"
                      , i = "?transaction_id=".concat(t);
                    fetch("".concat(n, "/").concat(i)).catch((e => console.log(e))),
                    e.downloadReqSent = !0,
                    (0,
                    a.TV)({
                        name: r,
                        value: JSON.stringify(e)
                    })
                }
            } else {
                const e = new URL(window.location.href).searchParams.get("tid");
                if (e) {
                    const t = {
                        tid: e
                    };
                    (0,
                    a.TV)({
                        name: r,
                        value: JSON.stringify(t)
                    })
                }
            }
        }
        , e => {
            let {eventType: t} = e;
            const n = (0,
            a.Ri)(s)
              , o = ( () => {
                const e = c();
                return "android" === e ? "android" : "ios" === e ? "ios" : "desktop"
            }
            )();
            if (n) {
                const e = JSON.parse(n);
                if (["download", "app-store"].includes(t) && !e.downloadReqSent) {
                    const t = e.medium;
                    i({
                        ec: "Growth_2022",
                        ea: "Brave_2022".concat(t ? "_".concat(t) : ""),
                        el: "Download_".concat(o)
                    }),
                    e.downloadReqSent = !0,
                    (0,
                    a.TV)({
                        name: s,
                        value: JSON.stringify(e),
                        daysToPersist: "forever"
                    })
                }
            } else {
                const e = new URL(window.location.href)
                  , t = {
                    utm_source: "Brave",
                    utm_campaign: "growth_2022"
                }
                  , n = Object.keys(t).length;
                let c = 0;
                for (const [o,a] of e.searchParams.entries())
                    for (const [e,n] of Object.entries(t))
                        o === e && a === n && c++;
                if (n === c) {
                    const t = "string" != typeof (r = e.searchParams.get("utm_medium")) ? null : r.includes("Push0fee") ? "push" : r.includes("news_may") ? "news" : ["SI_1", "SI_2"].includes(r) ? "image" : null;
                    i({
                        ec: "Growth_2022",
                        ea: "Brave_2022".concat(t ? "_".concat(t) : ""),
                        el: "Clickthrough_".concat(o)
                    });
                    const n = {
                        medium: t
                    };
                    (0,
                    a.TV)({
                        name: s,
                        value: JSON.stringify(n),
                        daysToPersist: "forever"
                    })
                }
            }
            var r
        }
        ];
        var u = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            "undefined" != typeof window && l.forEach((e => {
                e.apply(void 0, t)
            }
            ))
        }
    },
    31896: function(e, t, n) {
        var o = n(18105);
        t.A = e => {
            let {location: t, referrer: n, utmSource: a, utmContent: r, utmCampaign: i} = e;
            const c = new URLSearchParams(null == t ? void 0 : t.search)
              , s = new URLSearchParams
              , l = c.get("utm_source") || a
              , u = c.get("utm_content") || r
              , d = c.get("utm_campaign") || i;
            return l && s.set("utm_source", l),
            d && s.set("utm_campaign", d),
            u && s.set("utm_content", u),
            n && s.set("referrer", n),
            "".concat(o.Wq, "?").concat(s.toString())
        }
    },
    90305: function(e, t, n) {
        var o = n(18105);
        t.A = e => {
            let {location: t, referrer: n, utmSource: a, utmContent: r, utmCampaign: i} = e;
            const c = new URLSearchParams(null == t ? void 0 : t.search)
              , s = new URLSearchParams
              , l = c.get("utm_source") || a
              , u = c.get("utm_content") || r
              , d = c.get("utm_campaign") || i;
            l && s.set("utm_source", l),
            u && s.set("utm_content", u),
            d && s.set("utm_campaign", d),
            n && s.set("referrer", n);
            const m = s ? "&referrer=".concat(s.toString().replace(/=/g, "%3D").replace(/&/g, "%26")) : "";
            return "".concat(o.Wh).concat(m)
        }
    },
    59404: function(e, t, n) {
        var o = n(96540)
          , a = n(11931);
        const {desktop: r, extension: i, mobile: c} = a.P4
          , {web3: s, ios: l, android: u, win: d, mac: m, macMs: p, lin: f, linZip: h} = a.SK
          , g = [{
            os: m,
            check: e => {
                let {userAgent: t, maxTouchPoints: n} = e;
                return /Macintosh.*Version\/[\d.]+.*Safari/.test(t) && (void 0 === n || n <= 2)
            }
            ,
            platform: r
        }, {
            os: u,
            check: e => {
                let {userAgent: t} = e;
                return /Android|SamsungBrowser/.test(t)
            }
            ,
            platform: c
        }, {
            os: u,
            check: e => {
                let {userAgent: t} = e;
                return /Linux.*Android/.test(t)
            }
            ,
            platform: c
        }, {
            os: l,
            check: e => {
                let {userAgent: t} = e;
                return /iPhone|iPad|iPod/.test(t)
            }
            ,
            platform: c
        }, {
            os: l,
            check: e => {
                let {userAgent: t} = e;
                return /Macintosh.*CriOS/.test(t)
            }
            ,
            platform: c
        }, {
            os: l,
            check: e => {
                let {userAgent: t} = e;
                return /Macintosh.*Version\/[\d.]+.*Safari/.test(t)
            }
            ,
            platform: c
        }, {
            os: u,
            check: e => {
                let {userAgent: t} = e;
                return /wv|WebView/.test(t)
            }
            ,
            platform: c
        }, {
            os: l,
            check: e => {
                let {userAgent: t} = e;
                return /iPhone.*AppleWebKit.*Safari/.test(t)
            }
            ,
            platform: c
        }, {
            os: d,
            check: e => {
                let {userAgent: t} = e;
                return /Windows.*Touch/.test(t)
            }
            ,
            platform: r
        }, {
            os: f,
            check: e => {
                let {userAgent: t} = e;
                return /Linux/.test(t)
            }
            ,
            platform: r
        }, {
            os: m,
            check: e => {
                let {userAgent: t} = e;
                return /Macintosh/.test(t)
            }
            ,
            platform: r
        }, {
            os: s,
            check: e => {
                let {userAgent: t} = e;
                return /CrOS/.test(t)
            }
            ,
            platform: i
        }, {
            os: d,
            check: e => {
                let {userAgent: t} = e;
                return /Windows/.test(t)
            }
            ,
            platform: r
        }]
          , w = {
            macos: [{
                version: m,
                regex: /Intel/
            }, {
                version: p,
                regex: /Apple/
            }],
            linux: [{
                version: f,
                regex: /Debian|Ubuntu/
            }, {
                version: h,
                regex: /Zip/
            }]
        };
        t.A = () => {
            const {0: e, 1: t} = (0,
            o.useState)({
                platform: "",
                os: "",
                version: ""
            })
              , {0: n, 1: a} = (0,
            o.useState)(!0)
              , s = () => {
                const {userAgent: e, maxTouchPoints: n} = window.navigator
                  , {platform: o, os: r} = ( (e, t) => g.find((n => {
                    let {check: o} = n;
                    return o({
                        userAgent: e,
                        maxTouchPoints: t
                    })
                }
                )) || "unknown")(e, n)
                  , i = ( (e, t) => {
                    var n;
                    const o = null === (n = w[e]) || void 0 === n ? void 0 : n.find((e => {
                        let {regex: n} = e;
                        return n.test(t)
                    }
                    ));
                    return o ? o.version : null
                }
                )(r, e);
                t({
                    platform: o,
                    os: i || r
                }),
                a(!1)
            }
            ;
            return (0,
            o.useEffect)(( () => {
                if ("undefined" != typeof window)
                    return s(),
                    window.addEventListener("resize", s),
                    () => {
                        window.removeEventListener("resize", s)
                    }
            }
            ), []),
            {
                ...e,
                isDesktop: e.platform === r,
                isExtension: e.platform === i,
                isMobile: e.platform === c,
                loading: n
            }
        }
    },
    78330: function(e, t, n) {
        var o = n(96540);
        t.A = () => {
            const {0: e, 1: t} = (0,
            o.useState)(!1);
            return (0,
            o.useEffect)(( () => (t(!0),
            () => t(!1))), []),
            e
        }
    },
    30587: function(e, t, n) {
        n.d(t, {
            r: function() {
                return a
            }
        });
        var o = n(28007);
        const a = () => (0,
        o.GR)("3529541644").latestReleaseJson
    },
    7866: function(e, t, n) {
        var o = n(96540);
        t.A = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0,
            o.useEffect)(( () => {
                if ("undefined" != typeof window)
                    return window.addEventListener(e, t, n),
                    () => window.removeEventListener(e, t, n)
            }
            ), [e, t, n])
        }
    }
}]);
//# sourceMappingURL=8676-b65c186ab213113d3b44-v2.js.map

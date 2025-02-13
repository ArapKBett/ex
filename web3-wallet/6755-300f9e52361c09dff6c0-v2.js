"use strict";
(self.webpackChunkexodus_website = self.webpackChunkexodus_website || []).push([[6755], {
    12729: function(e) {
        const t = (e, t) => {
            if ("string" != typeof e && !Array.isArray(e))
                throw new TypeError("Expected the input to be `string | string[]`");
            t = Object.assign({
                pascalCase: !1
            }, t);
            if (e = Array.isArray(e) ? e.map((e => e.trim())).filter((e => e.length)).join("-") : e.trim(),
            0 === e.length)
                return "";
            if (1 === e.length)
                return t.pascalCase ? e.toUpperCase() : e.toLowerCase();
            return e !== e.toLowerCase() && (e = (e => {
                let t = !1
                  , a = !1
                  , r = !1;
                for (let n = 0; n < e.length; n++) {
                    const s = e[n];
                    t && /[a-zA-Z]/.test(s) && s.toUpperCase() === s ? (e = e.slice(0, n) + "-" + e.slice(n),
                    t = !1,
                    r = a,
                    a = !0,
                    n++) : a && r && /[a-zA-Z]/.test(s) && s.toLowerCase() === s ? (e = e.slice(0, n - 1) + "-" + e.slice(n - 1),
                    r = a,
                    a = !1,
                    t = !0) : (t = s.toLowerCase() === s && s.toUpperCase() !== s,
                    r = a,
                    a = s.toUpperCase() === s && s.toLowerCase() !== s)
                }
                return e
            }
            )(e)),
            e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, ( (e, t) => t.toUpperCase())).replace(/\d+(\w|$)/g, (e => e.toUpperCase())),
            a = e,
            t.pascalCase ? a.charAt(0).toUpperCase() + a.slice(1) : a;
            var a
        }
        ;
        e.exports = t,
        e.exports.default = t
    },
    38556: function(e, t) {
        var a = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        t.validate = function(e) {
            if (!e)
                return !1;
            if (e.length > 254)
                return !1;
            if (!a.test(e))
                return !1;
            var t = e.split("@");
            return !(t[0].length > 64) && !t[1].split(".").some((function(e) {
                return e.length > 63
            }
            ))
        }
    },
    30978: function(e, t, a) {
        a.d(t, {
            G: function() {
                return N
            },
            L: function() {
                return y
            },
            M: function() {
                return S
            },
            P: function() {
                return k
            },
            S: function() {
                return M
            },
            _: function() {
                return l
            },
            a: function() {
                return o
            },
            b: function() {
                return p
            },
            c: function() {
                return d
            },
            g: function() {
                return g
            },
            h: function() {
                return u
            },
            w: function() {
                return m
            }
        });
        var r = a(45458)
          , n = a(96540)
          , s = (a(12729),
        a(5556))
          , i = a.n(s);
        function o() {
            return o = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var r in a)
                        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                }
                return e
            }
            ,
            o.apply(this, arguments)
        }
        function l(e, t) {
            if (null == e)
                return {};
            var a, r, n = {}, s = Object.keys(e);
            for (r = 0; r < s.length; r++)
                t.indexOf(a = s[r]) >= 0 || (n[a] = e[a]);
            return n
        }
        const c = ["images", "placeholder"]
          , u = () => "undefined" != typeof HTMLImageElement && "loading"in HTMLImageElement.prototype;
        const d = e => {
            var t;
            return (e => {
                var t, a;
                return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src)
            }
            )(e) ? e : (e => Boolean(null == e ? void 0 : e.gatsbyImageData))(e) ? e.gatsbyImageData : (e => Boolean(null == e ? void 0 : e.gatsbyImage))(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData
        }
        ;
        function p(e, t, a, r, n) {
            return void 0 === n && (n = {}),
            o({}, a, {
                loading: r,
                shouldLoad: e,
                "data-main-image": "",
                style: o({}, n, {
                    opacity: t ? 1 : 0
                })
            })
        }
        function g(e, t, a, r, n, s, i, l) {
            const c = {};
            s && (c.backgroundColor = s,
            "fixed" === a ? (c.width = r,
            c.height = n,
            c.backgroundColor = s,
            c.position = "relative") : ("constrained" === a || "fullWidth" === a) && (c.position = "absolute",
            c.top = 0,
            c.left = 0,
            c.bottom = 0,
            c.right = 0)),
            i && (c.objectFit = i),
            l && (c.objectPosition = l);
            const u = o({}, e, {
                "aria-hidden": !0,
                "data-placeholder-image": "",
                style: o({
                    opacity: t ? 0 : 1,
                    transition: "opacity 500ms linear"
                }, c)
            });
            return u
        }
        function m(e, t) {
            var a, n;
            const {images: s, placeholder: i} = e
              , u = o({}, l(e, c), {
                images: o({}, s, {
                    sources: []
                }),
                placeholder: i && o({}, i, {
                    sources: []
                })
            });
            var d;
            return t.forEach((t => {
                var a;
                let {media: n, image: s} = t;
                n && (s.layout,
                e.layout,
                (a = u.images.sources).push.apply(a, (0,
                r.A)(s.images.sources.map((e => o({}, e, {
                    media: n
                })))).concat([{
                    media: n,
                    srcSet: s.images.fallback.srcSet
                }])),
                u.placeholder && u.placeholder.sources.push({
                    media: n,
                    srcSet: s.placeholder.fallback
                }))
            }
            )),
            (a = u.images.sources).push.apply(a, (0,
            r.A)(s.sources)),
            null != i && i.sources && (null == (d = u.placeholder) || (n = d.sources).push.apply(n, (0,
            r.A)(i.sources))),
            u
        }
        const h = ["children"]
          , f = function(e) {
            let {layout: t, width: a, height: r} = e;
            return "fullWidth" === t ? n.createElement("div", {
                "aria-hidden": !0,
                style: {
                    paddingTop: r / a * 100 + "%"
                }
            }) : "constrained" === t ? n.createElement("div", {
                style: {
                    maxWidth: a,
                    display: "block"
                }
            }, n.createElement("img", {
                alt: "",
                role: "presentation",
                "aria-hidden": "true",
                src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + a + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
                style: {
                    maxWidth: "100%",
                    display: "block",
                    position: "static"
                }
            })) : null
        }
          , y = function(e) {
            let {children: t} = e
              , a = l(e, h);
            return n.createElement(n.Fragment, null, n.createElement(f, o({}, a)), t, null)
        }
          , v = ["src", "srcSet", "loading", "alt", "shouldLoad"]
          , w = ["fallback", "sources", "shouldLoad"]
          , b = function(e) {
            let {src: t, srcSet: a, loading: r, alt: s="", shouldLoad: i} = e
              , c = l(e, v);
            return n.createElement("img", o({}, c, {
                decoding: "async",
                loading: r,
                src: i ? t : void 0,
                "data-src": i ? void 0 : t,
                srcSet: i ? a : void 0,
                "data-srcset": i ? void 0 : a,
                alt: s
            }))
        }
          , E = function(e) {
            let {fallback: t, sources: a=[], shouldLoad: r=!0} = e
              , s = l(e, w);
            const i = s.sizes || (null == t ? void 0 : t.sizes)
              , c = n.createElement(b, o({}, s, t, {
                sizes: i,
                shouldLoad: r
            }));
            return a.length ? n.createElement("picture", null, a.map((e => {
                let {media: t, srcSet: a, type: s} = e;
                return n.createElement("source", {
                    key: t + "-" + s + "-" + a,
                    type: s,
                    media: t,
                    srcSet: r ? a : void 0,
                    "data-srcset": r ? void 0 : a,
                    sizes: i
                })
            }
            )), c) : c
        };
        var C;
        b.propTypes = {
            src: s.string.isRequired,
            alt: s.string.isRequired,
            sizes: s.string,
            srcSet: s.string,
            shouldLoad: s.bool
        },
        E.displayName = "Picture",
        E.propTypes = {
            alt: s.string.isRequired,
            shouldLoad: s.bool,
            fallback: s.exact({
                src: s.string.isRequired,
                srcSet: s.string,
                sizes: s.string
            }),
            sources: s.arrayOf(s.oneOfType([s.exact({
                media: s.string.isRequired,
                type: s.string,
                sizes: s.string,
                srcSet: s.string.isRequired
            }), s.exact({
                media: s.string,
                type: s.string.isRequired,
                sizes: s.string,
                srcSet: s.string.isRequired
            })]))
        };
        const L = ["fallback"]
          , k = function(e) {
            let {fallback: t} = e
              , a = l(e, L);
            return t ? n.createElement(E, o({}, a, {
                fallback: {
                    src: t
                },
                "aria-hidden": !0,
                alt: ""
            })) : n.createElement("div", o({}, a))
        };
        k.displayName = "Placeholder",
        k.propTypes = {
            fallback: s.string,
            sources: null == (C = E.propTypes) ? void 0 : C.sources,
            alt: function(e, t, a) {
                return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null
            }
        };
        const S = function(e) {
            return n.createElement(n.Fragment, null, n.createElement(E, o({}, e)), n.createElement("noscript", null, n.createElement(E, o({}, e, {
                shouldLoad: !0
            }))))
        };
        S.displayName = "MainImage",
        S.propTypes = E.propTypes;
        const x = function(e, t, a) {
            for (var r = arguments.length, n = new Array(r > 3 ? r - 3 : 0), s = 3; s < r; s++)
                n[s - 3] = arguments[s];
            return e.alt || "" === e.alt ? i().string.apply(i(), [e, t, a].concat(n)) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')
        }
          , A = {
            image: i().object.isRequired,
            alt: x
        }
          , I = ["as", "image", "style", "backgroundColor", "className", "class", "onStartLoad", "onLoad", "onError"]
          , T = ["style", "className"]
          , z = new Set;
        let O, _;
        const q = function(e) {
            let {as: t="div", image: r, style: s, backgroundColor: i, className: c, class: d, onStartLoad: p, onLoad: g, onError: m} = e
              , h = l(e, I);
            const {width: f, height: y, layout: v} = r
              , w = function(e, t, a) {
                const r = {};
                let n = "gatsby-image-wrapper";
                return "fixed" === a ? (r.width = e,
                r.height = t) : "constrained" === a && (n = "gatsby-image-wrapper gatsby-image-wrapper-constrained"),
                {
                    className: n,
                    "data-gatsby-image-wrapper": "",
                    style: r
                }
            }(f, y, v)
              , {style: b, className: E} = w
              , C = l(w, T)
              , L = (0,
            n.useRef)()
              , k = (0,
            n.useMemo)(( () => JSON.stringify(r.images)), [r.images]);
            d && (c = d);
            const S = function(e, t, a) {
                let r = "";
                return "fullWidth" === e && (r = '<div aria-hidden="true" style="padding-top: ' + a / t * 100 + '%;"></div>'),
                "constrained" === e && (r = '<div style="max-width: ' + t + 'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'' + a + "' width='" + t + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),
                r
            }(v, f, y);
            return (0,
            n.useEffect)(( () => {
                O || (O = a.e(7896).then(a.bind(a, 87896)).then((e => {
                    let {renderImageToString: t, swapPlaceholderImage: a} = e;
                    return _ = t,
                    {
                        renderImageToString: t,
                        swapPlaceholderImage: a
                    }
                }
                )));
                const e = L.current.querySelector("[data-gatsby-image-ssr]");
                if (e && u())
                    return e.complete ? (null == p || p({
                        wasCached: !0
                    }),
                    null == g || g({
                        wasCached: !0
                    }),
                    setTimeout(( () => {
                        e.removeAttribute("data-gatsby-image-ssr")
                    }
                    ), 0)) : (null == p || p({
                        wasCached: !0
                    }),
                    e.addEventListener("load", (function t() {
                        e.removeEventListener("load", t),
                        null == g || g({
                            wasCached: !0
                        }),
                        setTimeout(( () => {
                            e.removeAttribute("data-gatsby-image-ssr")
                        }
                        ), 0)
                    }
                    ))),
                    void z.add(k);
                if (_ && z.has(k))
                    return;
                let t, n;
                return O.then((e => {
                    let {renderImageToString: a, swapPlaceholderImage: i} = e;
                    L.current && (L.current.innerHTML = a(o({
                        isLoading: !0,
                        isLoaded: z.has(k),
                        image: r
                    }, h)),
                    z.has(k) || (t = requestAnimationFrame(( () => {
                        L.current && (n = i(L.current, k, z, s, p, g, m))
                    }
                    ))))
                }
                )),
                () => {
                    t && cancelAnimationFrame(t),
                    n && n()
                }
            }
            ), [r]),
            (0,
            n.useLayoutEffect)(( () => {
                z.has(k) && _ && (L.current.innerHTML = _(o({
                    isLoading: z.has(k),
                    isLoaded: z.has(k),
                    image: r
                }, h)),
                null == p || p({
                    wasCached: !0
                }),
                null == g || g({
                    wasCached: !0
                }))
            }
            ), [r]),
            (0,
            n.createElement)(t, o({}, C, {
                style: o({}, b, s, {
                    backgroundColor: i
                }),
                className: E + (c ? " " + c : ""),
                ref: L,
                dangerouslySetInnerHTML: {
                    __html: S
                },
                suppressHydrationWarning: !0
            }))
        }
          , N = (0,
        n.memo)((function(e) {
            return e.image ? (0,
            n.createElement)(q, e) : null
        }
        ));
        N.propTypes = A,
        N.displayName = "GatsbyImage";
        const R = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"]
          , j = function(e, t) {
            for (var a = arguments.length, r = new Array(a > 2 ? a - 2 : 0), n = 2; n < a; n++)
                r[n - 2] = arguments[n];
            return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? i().number.apply(i(), [e, t].concat(r)) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.")
        }
          , W = new Set(["fixed", "fullWidth", "constrained"])
          , P = {
            src: i().string.isRequired,
            alt: x,
            width: j,
            height: j,
            sizes: i().string,
            layout: e => {
                if (void 0 !== e.layout && !W.has(e.layout))
                    return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')
            }
        }
          , M = (Z = N,
        function(e) {
            let {src: t, __imageData: a, __error: r} = e
              , s = l(e, R);
            return r && console.warn(r),
            a ? n.createElement(Z, o({
                image: a
            }, s)) : (console.warn("Image not loaded", t),
            null)
        }
        );
        var Z;
        M.displayName = "StaticImage",
        M.propTypes = P
    }
}]);
//# sourceMappingURL=6755-300f9e52361c09dff6c0-v2.js.map

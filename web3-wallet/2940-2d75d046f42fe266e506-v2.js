"use strict";
(self.webpackChunkexodus_website = self.webpackChunkexodus_website || []).push([[2940], {
    32873: function(e, n, o) {
        o.d(n, {
            A: function() {
                return I
            }
        });
        var r = o(58168)
          , t = o(98587)
          , a = o(77387)
          , i = o(56406)
          , l = o(96540)
          , s = o(94820)
          , c = o(86816)
          , p = (o(9771),
        o(79566))
          , u = o(18978)
          , f = o.n(u)
          , d = o(5556)
          , h = o.n(d)
          , m = o(40961)
          , w = o(61244)
          , v = o(43804)
          , y = o(14278)
          , E = o(94483)
          , A = o(98040)
          , g = o(91625)
          , C = function(e) {
            var n;
            return "undefined" == typeof document ? null : null == e ? (0,
            g.A)().body : ("function" == typeof e && (e = e()),
            e && "current"in e && (e = e.current),
            null != (n = e) && n.nodeType && e || null)
        };
        function b(e, n) {
            var o = (0,
            l.useState)((function() {
                return C(e)
            }
            ))
              , r = o[0]
              , t = o[1];
            if (!r) {
                var a = C(e);
                a && t(a)
            }
            return (0,
            l.useEffect)((function() {
                n && r && n(r)
            }
            ), [n, r]),
            (0,
            l.useEffect)((function() {
                var n = C(e);
                n !== r && t(n)
            }
            ), [e, r]),
            r
        }
        var x = o(21458)
          , k = l.forwardRef((function(e, n) {
            var o = e.flip
              , a = e.offset
              , i = e.placement
              , s = e.containerPadding
              , c = void 0 === s ? 5 : s
              , p = e.popperConfig
              , u = void 0 === p ? {} : p
              , f = e.transition
              , d = (0,
            w.A)()
              , h = d[0]
              , y = d[1]
              , g = (0,
            w.A)()
              , C = g[0]
              , k = g[1]
              , P = (0,
            v.A)(y, n)
              , N = b(e.container)
              , O = b(e.target)
              , _ = (0,
            l.useState)(!e.show)
              , R = _[0]
              , T = _[1]
              , D = (0,
            E.A)(O, h, (0,
            x.Ay)({
                placement: i,
                enableEvents: !!e.show,
                containerPadding: c || 5,
                flip: o,
                offset: a,
                arrowElement: C,
                popperConfig: u
            }))
              , S = D.styles
              , F = D.attributes
              , H = (0,
            t.A)(D, ["styles", "attributes"]);
            e.show ? R && T(!1) : e.transition || R || T(!0);
            var U = e.show || f && !R;
            if ((0,
            A.A)(h, e.onHide, {
                disabled: !e.rootClose || e.rootCloseDisabled,
                clickTrigger: e.rootCloseEvent
            }),
            !U)
                return null;
            var j = e.children((0,
            r.A)({}, H, {
                show: !!e.show,
                props: (0,
                r.A)({}, F.popper, {
                    style: S.popper,
                    ref: P
                }),
                arrowProps: (0,
                r.A)({}, F.arrow, {
                    style: S.arrow,
                    ref: k
                })
            }));
            if (f) {
                var B = e.onExit
                  , q = e.onExiting
                  , M = e.onEnter
                  , K = e.onEntering
                  , L = e.onEntered;
                j = l.createElement(f, {
                    in: e.show,
                    appear: !0,
                    onExit: B,
                    onExiting: q,
                    onExited: function() {
                        T(!0),
                        e.onExited && e.onExited.apply(e, arguments)
                    },
                    onEnter: M,
                    onEntering: K,
                    onEntered: L
                }, j)
            }
            return N ? m.createPortal(j, N) : null
        }
        ));
        k.displayName = "Overlay",
        k.propTypes = {
            show: h().bool,
            placement: h().oneOf(y.DD),
            target: h().any,
            container: h().any,
            flip: h().bool,
            children: h().func.isRequired,
            containerPadding: h().number,
            popperConfig: h().object,
            rootClose: h().bool,
            rootCloseEvent: h().oneOf(["click", "mousedown"]),
            rootCloseDisabled: h().bool,
            onHide: function(e) {
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    o[r - 1] = arguments[r];
                var t;
                return e.rootClose ? (t = h().func).isRequired.apply(t, [e].concat(o)) : h().func.apply(h(), [e].concat(o))
            },
            transition: h().elementType,
            onEnter: h().func,
            onEntering: h().func,
            onEntered: h().func,
            onExit: h().func,
            onExiting: h().func,
            onExited: h().func
        };
        var P, N = k, O = o(31576), _ = o(13674), R = o(93295), T = o(85258), D = ["className", "children"], S = ((P = {})[_.ns] = "show",
        P[_._K] = "show",
        P), F = l.forwardRef((function(e, n) {
            var o = e.className
              , a = e.children
              , i = (0,
            t.A)(e, D)
              , s = (0,
            l.useCallback)((function(e) {
                (0,
                T.A)(e),
                i.onEnter && i.onEnter(e)
            }
            ), [i]);
            return l.createElement(_.Ay, (0,
            r.A)({
                ref: n,
                addEndListener: R.A
            }, i, {
                onEnter: s
            }), (function(e, n) {
                return l.cloneElement(a, (0,
                r.A)({}, n, {
                    className: f()("fade", o, a.props.className, S[e])
                }))
            }
            ))
        }
        ));
        F.defaultProps = {
            in: !1,
            timeout: 300,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1
        },
        F.displayName = "Fade";
        var H = F
          , U = ["children", "transition", "popperConfig"]
          , j = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"]
          , B = {
            transition: H,
            rootClose: !1,
            show: !1,
            placement: "top"
        };
        function q(e) {
            var n = e.children
              , o = e.transition
              , a = e.popperConfig
              , i = void 0 === a ? {} : a
              , s = (0,
            t.A)(e, U)
              , p = (0,
            l.useRef)({})
              , u = (0,
            O.A)()
              , d = u[0]
              , h = u[1]
              , m = !0 === o ? H : o || null;
            return l.createElement(N, (0,
            r.A)({}, s, {
                ref: d,
                popperConfig: (0,
                r.A)({}, i, {
                    modifiers: h.concat(i.modifiers || [])
                }),
                transition: m
            }), (function(e) {
                var a, i = e.props, s = e.arrowProps, u = e.show, d = e.update, h = (e.forceUpdate,
                e.placement), m = e.state, w = (0,
                t.A)(e, j);
                !function(e, n) {
                    var o = e.ref
                      , r = n.ref;
                    e.ref = o.__wrapped || (o.__wrapped = function(e) {
                        return o((0,
                        c.A)(e))
                    }
                    ),
                    n.ref = r.__wrapped || (r.__wrapped = function(e) {
                        return r((0,
                        c.A)(e))
                    }
                    )
                }(i, s);
                var v = Object.assign(p.current, {
                    state: m,
                    scheduleUpdate: d,
                    placement: h,
                    outOfBoundaries: (null == m || null == (a = m.modifiersData.hide) ? void 0 : a.isReferenceHidden) || !1
                });
                return "function" == typeof n ? n((0,
                r.A)({}, w, i, {
                    placement: h,
                    show: u
                }, !o && u && {
                    className: "show"
                }, {
                    popper: v,
                    arrowProps: s
                })) : l.cloneElement(n, (0,
                r.A)({}, w, i, {
                    placement: h,
                    arrowProps: s,
                    popper: v,
                    className: f()(n.props.className, !o && u && "show"),
                    style: (0,
                    r.A)({}, n.props.style, i.style)
                }))
            }
            ))
        }
        q.defaultProps = B;
        var M = q
          , K = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"]
          , L = function(e) {
            function n() {
                return e.apply(this, arguments) || this
            }
            return (0,
            a.A)(n, e),
            n.prototype.render = function() {
                return this.props.children
            }
            ,
            n
        }(l.Component);
        function z(e, n, o) {
            var r = n[0]
              , t = r.currentTarget
              , a = r.relatedTarget || r.nativeEvent[o];
            a && a === t || (0,
            i.A)(t, a) || e.apply(void 0, n)
        }
        function G(e) {
            var n = e.trigger
              , o = e.overlay
              , a = e.children
              , i = e.popperConfig
              , u = void 0 === i ? {} : i
              , f = e.show
              , d = e.defaultShow
              , h = void 0 !== d && d
              , m = e.onToggle
              , w = e.delay
              , v = e.placement
              , y = e.flip
              , E = void 0 === y ? v && -1 !== v.indexOf("auto") : y
              , A = (0,
            t.A)(e, K)
              , g = (0,
            l.useRef)(null)
              , C = (0,
            s.A)()
              , b = (0,
            l.useRef)("")
              , x = (0,
            p.iC)(f, h, m)
              , k = x[0]
              , P = x[1]
              , N = function(e) {
                return e && "object" == typeof e ? e : {
                    show: e,
                    hide: e
                }
            }(w)
              , O = "function" != typeof a ? l.Children.only(a).props : {}
              , _ = O.onFocus
              , R = O.onBlur
              , T = O.onClick
              , D = (0,
            l.useCallback)((function() {
                return (0,
                c.A)(g.current)
            }
            ), [])
              , S = (0,
            l.useCallback)((function() {
                C.clear(),
                b.current = "show",
                N.show ? C.set((function() {
                    "show" === b.current && P(!0)
                }
                ), N.show) : P(!0)
            }
            ), [N.show, P, C])
              , F = (0,
            l.useCallback)((function() {
                C.clear(),
                b.current = "hide",
                N.hide ? C.set((function() {
                    "hide" === b.current && P(!1)
                }
                ), N.hide) : P(!1)
            }
            ), [N.hide, P, C])
              , H = (0,
            l.useCallback)((function() {
                S();
                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                    n[o] = arguments[o];
                null == _ || _.apply(void 0, n)
            }
            ), [S, _])
              , U = (0,
            l.useCallback)((function() {
                F();
                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                    n[o] = arguments[o];
                null == R || R.apply(void 0, n)
            }
            ), [F, R])
              , j = (0,
            l.useCallback)((function() {
                P(!k),
                T && T.apply(void 0, arguments)
            }
            ), [T, P, k])
              , B = (0,
            l.useCallback)((function() {
                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                    n[o] = arguments[o];
                z(S, n, "fromElement")
            }
            ), [S])
              , q = (0,
            l.useCallback)((function() {
                for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                    n[o] = arguments[o];
                z(F, n, "toElement")
            }
            ), [F])
              , G = null == n ? [] : [].concat(n)
              , I = {};
            return -1 !== G.indexOf("click") && (I.onClick = j),
            -1 !== G.indexOf("focus") && (I.onFocus = H,
            I.onBlur = U),
            -1 !== G.indexOf("hover") && (I.onMouseOver = B,
            I.onMouseOut = q),
            l.createElement(l.Fragment, null, "function" == typeof a ? a((0,
            r.A)({}, I, {
                ref: g
            })) : l.createElement(L, {
                ref: g
            }, (0,
            l.cloneElement)(a, I)), l.createElement(M, (0,
            r.A)({}, A, {
                show: k,
                onHide: F,
                flip: E,
                placement: v,
                popperConfig: u,
                target: D
            }), o))
        }
        G.defaultProps = {
            defaultShow: !1,
            trigger: ["hover", "focus"]
        };
        var I = G
    },
    23524: function(e, n, o) {
        var r = o(58168)
          , t = o(98587)
          , a = o(18978)
          , i = o.n(a)
          , l = o(96540)
          , s = (o(98239),
        o(36519))
          , c = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"]
          , p = l.forwardRef((function(e, n) {
            var o = e.bsPrefix
              , a = e.placement
              , p = e.className
              , u = e.style
              , f = e.children
              , d = e.arrowProps
              , h = (e.popper,
            e.show,
            (0,
            t.A)(e, c));
            o = (0,
            s.oU)(o, "tooltip");
            var m = ((null == a ? void 0 : a.split("-")) || [])[0];
            return l.createElement("div", (0,
            r.A)({
                ref: n,
                style: u,
                role: "tooltip",
                "x-placement": m,
                className: i()(p, o, "bs-tooltip-" + m)
            }, h), l.createElement("div", (0,
            r.A)({
                className: "arrow"
            }, d)), l.createElement("div", {
                className: o + "-inner"
            }, f))
        }
        ));
        p.defaultProps = {
            placement: "right"
        },
        p.displayName = "Tooltip",
        n.A = p
    }
}]);
//# sourceMappingURL=2940-2d75d046f42fe266e506-v2.js.map

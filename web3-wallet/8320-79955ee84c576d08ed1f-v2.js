"use strict";
(self.webpackChunkexodus_website = self.webpackChunkexodus_website || []).push([[8320], {
    28320: function(e, t, a) {
        a.d(t, {
            w: function() {
                return k
            },
            Y: function() {
                return n.A
            }
        });
        var n = a(70339)
          , o = a(96540)
          , s = a(32485)
          , r = a.n(s)
          , i = a(39294)
          , l = a(43161)
          , c = a(70113)
          , u = a(45458)
          , m = a(28007)
          , d = a(58280);
        const b = e => {
            let {href: t, target: a, children: n, onClick: s} = e;
            const r = {
                className: "x__footer-navigation__link",
                children: n,
                onClick: s
            };
            return t && t.startsWith("https://") ? o.createElement("a", Object.assign({
                href: t
            }, r, {
                target: a || "_self"
            })) : o.createElement(m.N_, Object.assign({
                to: t
            }, r))
        }
        ;
        var p = e => {
            let {data: t=[]} = e;
            const a = t.map(( (e, t) => !1 === e[t]))
              , {0: n, 1: s} = (0,
            o.useState)(!1)
              , r = () => s(!1);
            return t && 0 !== t.length ? o.createElement("div", {
                className: "x__footer-navigation",
                id: "footernav"
            }, t.map(( (e, t) => {
                let {column: i, items: l} = e;
                return o.createElement("div", {
                    key: "col-".concat(t),
                    className: "x__footer-navigation-col"
                }, o.createElement("div", {
                    id: "footernavheading".concat(t)
                }, o.createElement("p", {
                    className: "x__footer-navigation__heading",
                    tabIndex: 0,
                    onClick: () => (e => {
                        const t = (0,
                        u.A)(a);
                        n[e] || (t[e] = !t[e]),
                        s(t)
                    }
                    )(t)
                }, i)), o.createElement(d.A, {
                    in: n[t]
                }, o.createElement("div", null, l.map(( (e, a) => {
                    let {href: n, title: s, items: i, target: l} = e;
                    const c = "col-".concat(t, "_item-").concat(a);
                    return i && i.length > 0 ? i.map(( (e, t) => {
                        let {href: a, title: n, target: s} = e;
                        return o.createElement(b, {
                            key: "".concat(c, "_subitem-").concat(t),
                            href: a,
                            target: s,
                            onClick: r
                        }, n)
                    }
                    )) : o.createElement(b, {
                        key: c,
                        href: n,
                        target: l,
                        onClick: r
                    }, s)
                }
                )))), o.createElement("span", {
                    className: "x__footer-navigation__arrow"
                }))
            }
            ))) : null
        }
          , f = a(30978);
        const _ = (new Date).getFullYear();
        var E = () => o.createElement("div", {
            className: "x__copyright"
        }, o.createElement("div", {
            className: "x__copyright__logo"
        }, o.createElement(f.S, {
            src: "../shared/img/exodus-logo.svg",
            alt: "Exodus Logo",
            __imageData: a(78978)
        })), o.createElement("div", {
            className: "x__copyright__copy"
        }, "Copyright © ", _, " Exodus Movement, Inc. ", o.createElement("br", null), "Exodus was co-founded by Daniel Castagnoli and JP Richardson."));
        const v = ["Exodus is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely responsible for evaluating your investments, for determining whether you will swap blockchain assets based on your own, and for all your decisions as to whether to swap blockchain assets with the Exodus in app swap feature. In many cases, blockchain assets you swap on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you swap on the basis of your research may increase in value after your swap.", "Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you swap is subject to market and other investment risks.", "Exodus users are responsible for storing their own recovery phrase. If the recovery phrase is lost, the user might not be able to retrieve their private keys."];
        var h = e => {
            let {copy: t=[], legalLinks: a, showPartners: n} = e;
            const s = t.length > 0 ? t : v
              , {privacy: r, terms: i} = a;
            return o.createElement("div", {
                className: "x__terms"
            }, s.map(( (e, t) => o.createElement("span", {
                key: t
            }, e))), n && o.createElement("span", null, "Partnered with", " ", o.createElement("a", {
                href: "https://www.moonpay.com/",
                target: "_blank"
            }, "MoonPay")), o.createElement("span", null, r && o.createElement("a", {
                target: "_blank",
                rel: "noreferrer noopener",
                href: r.href
            }, r.title), i && o.createElement("a", {
                target: "_blank",
                rel: "noreferrer noopener",
                href: i.href
            }, i.title)))
        }
          , g = a(53732)
          , x = a(14181)
          , y = a(18105);
        var k = e => {
            let {pathname: t="en", variant: a="product", legalCopy: n, enableSubscribeNotice: s=!0, backgroundColor: u, black: m=!1, noBorder: d=!1, intercom: b=!0, showPartners: f=!1, withDownloadBanner: _=!1} = e;
            const v = (0,
            x.Yq)(t)
              , k = (0,
            x.f3)(t);
            return o.createElement("footer", {
                className: r()("x__footer", {
                    "x__footer--black": m,
                    "x__footer--no-border": d
                }),
                style: {
                    backgroundColor: u
                }
            }, o.createElement("div", {
                className: "x__footer__content"
            }, o.createElement("div", {
                className: "x__footer__content-top"
            }, o.createElement(p, {
                data: k
            }), !y.bR && o.createElement(i.A, null)), o.createElement("div", {
                className: "x__footer__content-center row"
            }, o.createElement("div", {
                className: y.bR ? "col col-md-12 col-12" : "col col-md-7 col-12"
            }, o.createElement(E, null)), !y.bR && o.createElement("div", {
                className: "col col-md-5 col-12"
            }, o.createElement(c.A, {
                large: !0
            }))), o.createElement("div", {
                className: "x__footer__content-bottom row"
            }, o.createElement("div", {
                className: "col col-12"
            }, o.createElement(h, {
                copy: n,
                legalLinks: v,
                showPartners: f
            })))), s && !y.bR && o.createElement(l.A, {
                variant: a,
                withDownloadBanner: _
            }), b ? o.createElement(g.A, null) : null)
        }
    },
    39294: function(e, t, a) {
        a.d(t, {
            A: function() {
                return m
            }
        });
        var n = a(96540)
          , o = a(29306)
          , s = a(32485)
          , r = a.n(s);
        var i = function(e) {
            let {disabled: t, onClick: a} = e;
            const o = "Submit"
              , s = "Click to subscribe";
            return n.createElement("button", {
                className: r()("x__subscribe-module__submit", {
                    "x__subscribe-module__submit--disabled": t
                }),
                disabled: t,
                onClick: a,
                "aria-label": s,
                type: "button"
            }, n.createElement("svg", {
                viewBox: "0 0 23 13",
                "aria-label": o
            }, n.createElement("title", null, o), n.createElement("desc", null, s), n.createElement("path", {
                d: "M22.8794 6.36396L16.5154 0L15.1012 1.41421L19.187 5.5H0.879395V7.5H18.9149L15.1012 11.3137L16.5154 12.7279L22.8794 6.36396Z"
            })))
        }
          , l = a(60512)
          , c = a(40010)
          , u = a(18105);
        var m = function(e) {
            let {variant: t="product"} = e;
            const a = (0,
            n.useRef)()
              , {isCookieNotSet: s, isSessionCookieNotSet: r, setSubscribeCookieSession: m} = (0,
            l.A)(t)
              , {0: d, 1: b} = (0,
            n.useState)(s && r)
              , {0: p, 1: f} = (0,
            n.useState)(!0)
              , {0: _, 1: E} = (0,
            n.useState)("")
              , {formMessage: v, submitted: h, handleSubmit: g, setFormState: x} = (0,
            c.A)(t, _)
              , y = () => {
                f(!0),
                g()
            }
            ;
            return (0,
            n.useEffect)(( () => {
                const e = setTimeout(( () => {
                    "undefined" != typeof document && 0 === document.getElementsByClassName("x-cookies-banner").length ? m() : b(!1)
                }
                ), 3500);
                return () => clearTimeout(e)
            }
            ), []),
            n.createElement("div", {
                className: "x__subscribe-module"
            }, n.createElement("span", {
                className: "x__title"
            }, d && h ? "One last step!" : "Subscribe to the Newsletter!"), n.createElement("span", {
                className: "x__description"
            }, d && h ? "Look for our email and click the confirmation button to finish subscribing." : "Get the latest Exodus news and product updates delivered straight to your inbox."), n.createElement("div", {
                className: "x__subscribe-module__content"
            }, d ? h ? null : n.createElement(n.Fragment, null, n.createElement("div", {
                className: "x__input"
            }, n.createElement("input", {
                ref: a,
                id: "email",
                type: "email",
                placeholder: "Enter your email address",
                onChange: e => {
                    f(!1),
                    E(e.target.value),
                    x("initial")
                }
                ,
                onKeyDown: e => {
                    "Enter" === e.key && y()
                }
            }), n.createElement(i, {
                disabled: p,
                onClick: y
            })), n.createElement("span", {
                className: "x__form-message"
            }, v)) : n.createElement(o.A, {
                to: u.Yz,
                copy: "Subscribe",
                size: "largest"
            })), d && h ? null : n.createElement("span", {
                className: "x__disclaimer"
            }, "We'll only use your email to send information about Exodus.", " ", n.createElement("span", {
                className: "x-break-sm"
            }), "You can unsubscribe at any time."))
        }
    },
    43161: function(e, t, a) {
        a.d(t, {
            A: function() {
                return f
            }
        });
        var n = a(32485)
          , o = a.n(n)
          , s = a(28007)
          , r = a(30978)
          , i = a(96540)
          , l = a(29306);
        var c = function(e) {
            let {onClick: t} = e;
            const a = "Close"
              , n = "Click to close popup";
            return i.createElement("button", {
                className: "x__subscribe-popup__close",
                onClick: t,
                "aria-label": n,
                type: "button"
            }, i.createElement("svg", {
                viewBox: "0 0 13 13",
                "aria-label": a
            }, i.createElement("title", null, a), i.createElement("desc", null, n), i.createElement("path", {
                d: "M0.538916 1.13427C0.200551 1.47264 0.20746 2.03197 0.538916 2.36343L5.00667 6.83118L0.538944 11.2989C0.207453 11.6304 0.200536 12.1897 0.538901 12.5281C0.877266 12.8665 1.44351 12.8665 1.775 12.535L6.24273 8.06724L10.7035 12.5281C11.035 12.8595 11.5944 12.8665 11.9327 12.5281C12.2711 12.1897 12.2711 11.6235 11.9396 11.292L7.47879 6.83118L11.9396 2.37033C12.2711 2.03888 12.2711 1.47264 11.9327 1.13427C11.5944 0.79591 11.035 0.802819 10.7036 1.13428L6.24273 5.59512L1.77497 1.12737C1.44352 0.795911 0.877281 0.79591 0.538916 1.13427Z"
            })))
        };
        var u = function() {
            return i.createElement("svg", {
                width: 72,
                height: 72,
                viewBox: "0 0 72 72",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, i.createElement("title", null, "Subscribed icon"), i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M67.182 54.0032L62.8511 51.5028C57.4907 60.7672 47.4732 67 36 67C24.528 67 14.5115 60.7686 9.15063 51.5059L4.81978 54.0063C11.0452 64.7633 22.6775 72 36 72C49.3238 72 60.957 64.7619 67.182 54.0032Z",
                fill: "url(#paint0_linear_615_6414)"
            }), i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M62.8516 51.5021C65.4899 46.9419 67 41.6473 67 36C67 18.8795 53.1214 5.00054 36.001 5V0C55.8828 0.000542194 72 16.1181 72 36C72 42.5582 70.2464 48.7068 67.1824 54.0025L62.8516 51.5021Z",
                fill: "url(#paint1_linear_615_6414)"
            }), i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M35.9992 5C18.8787 5.00046 5 18.8795 5 36C5 41.6479 6.5104 46.9431 9.1493 51.5036L4.81845 54.004C1.75397 48.708 0 42.5588 0 36C0 16.118 16.1173 0.000457671 35.9992 0V5Z",
                fill: "url(#paint2_linear_615_6414)"
            }), i.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M27.8055 32.7908L24.27 36.3263L30.6339 42.6903L34.1695 46.2258L37.705 42.6903L49.7258 30.6694L46.1903 27.1339L34.1695 39.1547L27.8055 32.7908Z",
                fill: "white"
            }), i.createElement("defs", null, i.createElement("linearGradient", {
                id: "paint0_linear_615_6414",
                x1: 36.0009,
                y1: 41.2542,
                x2: 23.8405,
                y2: 78.2518,
                gradientUnits: "userSpaceOnUse"
            }, i.createElement("stop", {
                stopColor: "#5C26FF"
            }), i.createElement("stop", {
                offset: 1,
                stopColor: "#8C66FF"
            })), i.createElement("linearGradient", {
                id: "paint1_linear_615_6414",
                x1: 89.9995,
                y1: 27.0012,
                x2: 40.1525,
                y2: -6.22766,
                gradientUnits: "userSpaceOnUse"
            }, i.createElement("stop", {
                stopColor: "#556FF2"
            }), i.createElement("stop", {
                offset: 1,
                stopColor: "#00BFFF"
            })), i.createElement("linearGradient", {
                id: "paint2_linear_615_6414",
                x1: 17.9996,
                y1: 81.006,
                x2: 67.8475,
                y2: 47.7772,
                gradientUnits: "userSpaceOnUse"
            }, i.createElement("stop", {
                stopColor: "#FF9F1A"
            }), i.createElement("stop", {
                offset: 1,
                stopColor: "#FFCC33"
            }))))
        }
          , m = a(60512)
          , d = a(40010)
          , b = a(90335)
          , p = a(58277);
        var f = e => {
            let {variant: t="product", withDownloadBanner: a=!1} = e;
            const n = (0,
            i.useRef)()
              , {isMobile: f} = (0,
            p.A)()
              , {isCookieNotSet: _, isSessionCookieNotSet: E, setSubscribeCloseCookie: v, setSubscribeCookie: h, setSubscribeCookieSession: g} = (0,
            m.A)(t)
              , {0: x, 1: y} = (0,
            i.useState)(_ && E)
              , {0: k, 1: C} = (0,
            i.useState)(!1)
              , {0: w, 1: S} = (0,
            i.useState)(!1)
              , {0: N, 1: L} = (0,
            i.useState)(!0)
              , {0: F, 1: A} = (0,
            i.useState)("")
              , {formMessage: R, submitted: M, handleSubmit: T, setFormState: O} = (0,
            d.A)(t, F)
              , {0: B, 1: P} = (0,
            i.useState)(a && "1" !== (0,
            b.Ri)("ex_download_session"))
              , D = (0,
            s.GR)("1595321611")
              , I = () => {
                L(!0),
                T()
            }
            ;
            return (0,
            i.useEffect)(( () => {
                const e = setTimeout(( () => {
                    "undefined" != typeof document && 0 === document.getElementsByClassName("x-cookies-banner").length ? g() : y(!1)
                }
                ), 3500)
                  , t = setTimeout(( () => {
                    S(!0)
                }
                ), 4e3);
                return () => {
                    clearTimeout(e),
                    clearTimeout(t)
                }
            }
            ), []),
            (0,
            i.useEffect)(( () => {
                n.current && n.current.focus()
            }
            ), []),
            (0,
            i.useEffect)(( () => {
                if (!a)
                    return;
                const e = () => {
                    P(a && "1" !== (0,
                    b.Ri)("ex_download_session"))
                }
                ;
                e();
                const t = setInterval(e, 1e3);
                return () => clearInterval(t)
            }
            ), [a]),
            x ? i.createElement(i.Fragment, null, f ? i.createElement("div", {
                className: o()("x__subscribe-popup__overlay", {
                    "x__subscribe-popup__overlay--closed": k
                })
            }) : null, i.createElement("div", {
                className: o()("x__subscribe-popup", {
                    "x__subscribe-popup--done-animating": w,
                    "x__subscribe-popup--closed": k,
                    "x__subscribe-popup--with-banner": B
                })
            }, f ? null : i.createElement(r.G, {
                image: (0,
                r.c)(D.image),
                className: "x__subscribe-popup__background",
                alt: "Subscribe to the Exodus Newsletter background",
                loading: "eager"
            }), i.createElement(c, {
                onClick: () => {
                    C(!0),
                    O("initial"),
                    M ? h() : v()
                }
            }), i.createElement("div", {
                className: "x__subscribe-popup__content"
            }, i.createElement("span", {
                className: "x__title"
            }, M ? "One last step!" : "Stay in the loop!"), i.createElement("span", {
                className: "x__description"
            }, M ? "investor" === t ? "Look for our email and click the confirmation button to finish subscribing to the Exodus Investor Newsletter." : "Look for our email and click the confirmation button to finish subscribing to the Exodus Newsletter." : "investor" === t ? "Subscribe to the Exodus Investor Newsletter and stay informed about Company financials and investor communications." : "Subscribe to the Exodus Newsletter to get the latest news and product updates delivered straight to your inbox."), M ? i.createElement(u, null) : i.createElement(i.Fragment, null, i.createElement("label", {
                htmlFor: "email",
                className: "x__input"
            }, i.createElement("input", {
                ref: n,
                id: "email",
                type: "email",
                placeholder: "Enter your email address",
                autoFocus: !0,
                onChange: e => {
                    L(!1),
                    A(e.target.value),
                    O("initial")
                }
                ,
                onKeyDown: e => {
                    "Enter" === e.key && I()
                }
            }), i.createElement("span", null, R)), i.createElement(l.A, {
                copy: "Submit",
                size: "largest",
                disabled: N,
                onClick: I
            }))), M ? null : i.createElement("span", {
                className: "x__disclaimer"
            }, "We'll only use your email to send information about Exodus.", " ", i.createElement("span", {
                className: "x-break-lg"
            }), "You can unsubscribe at any time."))) : null
        }
    },
    60512: function(e, t, a) {
        var n = a(90335)
          , o = a(18105);
        const s = {
            investor: {
                cookieName: "ex_subscribe_investor",
                cookieSessionName: "ex_subscribe_investor_session"
            },
            product: {
                cookieName: "ex_subscribe",
                cookieSessionName: "ex_subscribe_session"
            }
        };
        t.A = function(e) {
            if (!e || !Object.keys(s).includes(e))
                return {
                    isCookieNotSet: !0,
                    isSessionCookieNotSet: !0
                };
            const t = s[e].cookieName
              , a = s[e].cookieSessionName
              , r = !!o.Cu || "1" !== (0,
            n.Ri)(t)
              , i = !!o.Cu || void 0 === (0,
            n.Ri)(a);
            return {
                isCookieNotSet: r,
                isSessionCookieNotSet: i,
                setSubscribeCloseCookie: () => {
                    r && (0,
                    n.TV)({
                        name: t,
                        value: "1",
                        daysToPersist: 60
                    })
                }
                ,
                setSubscribeCookie: () => {
                    r && (0,
                    n.TV)({
                        name: t,
                        value: "1"
                    })
                }
                ,
                setSubscribeCookieSession: () => {
                    i && (0,
                    n.TV)({
                        name: a,
                        value: "1"
                    })
                }
            }
        }
    },
    40010: function(e, t, a) {
        a.d(t, {
            A: function() {
                return c
            }
        });
        var n = a(38556)
          , o = a(96540)
          , s = a(60512);
        const r = {
            initial: "",
            loading: "Submitting...",
            invalid: "A valid email address must be provided.",
            ratelimit: "Too many requests. Please try again later.",
            error: "Something went wrong. Please try again."
        };
        var i = function() {
            const {0: e, 1: t} = (0,
            o.useState)("initial")
              , {0: a, 1: n} = (0,
            o.useState)(r.initial);
            return (0,
            o.useEffect)(( () => {
                Object.keys(r).includes(e) || t("initial"),
                n(r[e])
            }
            ), [e]),
            {
                formMessage: a,
                formState: e,
                setFormState: t
            }
        }
          , l = a(18105);
        var c = function(e, t) {
            const {0: a, 1: r} = (0,
            o.useState)(!1)
              , {formMessage: c, formState: u, setFormState: m} = i()
              , {setSubscribeCookie: d, setSubscribeCookieSession: b} = (0,
            s.A)(e)
              , p = "investor" === e;
            let f = "".concat(l.Ex, "/users/subscription");
            p && (f = "".concat(l.Ex, "/users/investors-subscription"));
            let _ = {
                website: !0,
                blog: !0
            };
            p && (_ = {
                shares: !0
            });
            const E = (0,
            o.useCallback)(( () => {
                "initial" !== u || a || (n.validate(t) ? (m("loading"),
                fetch(f, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: t,
                        origin: _
                    })
                }).then((async e => {
                    const t = 200 === e.status
                      , a = 400 === e.status
                      , n = 429 === e.status;
                    t ? (r(!0),
                    d(),
                    b()) : m(a ? "invalid" : n ? "ratelimit" : "error")
                }
                )).catch((e => {
                    console.log(e),
                    m("error")
                }
                ))) : m("invalid"))
            }
            ), [t, u, a, f, _, d, b, m, r]);
            return {
                formMessage: c,
                formState: u,
                submitted: a,
                handleSubmit: E,
                setFormState: m
            }
        }
    },
    78978: function(e) {
        e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/62a09178edfd5fe0b46c9c1f7bb26718/b7ccd/exodus-logo.svg","srcSet":"/static/62a09178edfd5fe0b46c9c1f7bb26718/7cb82/exodus-logo.svg 39w,\\n/static/62a09178edfd5fe0b46c9c1f7bb26718/703f4/exodus-logo.svg 78w,\\n/static/62a09178edfd5fe0b46c9c1f7bb26718/b7ccd/exodus-logo.svg 156w","sizes":"(min-width: 156px) 156px, 100vw"},"sources":[{"srcSet":"/static/62a09178edfd5fe0b46c9c1f7bb26718/574d0/exodus-logo.webp 39w,\\n/static/62a09178edfd5fe0b46c9c1f7bb26718/341c6/exodus-logo.webp 78w,\\n/static/62a09178edfd5fe0b46c9c1f7bb26718/2bf61/exodus-logo.webp 156w","type":"image/webp","sizes":"(min-width: 156px) 156px, 100vw"}]},"width":156,"height":32}')
    }
}]);
//# sourceMappingURL=8320-79955ee84c576d08ed1f-v2.js.map

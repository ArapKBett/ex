"use strict";
(self.webpackChunkexodus_website = self.webpackChunkexodus_website || []).push([[4571], {
    29306: function(t, e, n) {
        var o = n(96540)
          , a = n(28007)
          , c = n(32485)
          , r = n.n(c);
        const s = t => {
            let {children: e, size: n, type: c, external: s, active: u, lightbox: i, disabled: l, target: p, style: d, to: w, onClick: y} = t;
            const f = s ? !l && {
                href: w
            } : !l && {
                to: w
            }
              , b = {
                className: r()("x__button-default", "x__button-default--".concat(n), "x__button-default--".concat(c), {
                    "x__button-default--active": u,
                    "x__button-default--disabled": l
                }),
                tabIndex: 0,
                ...i ? {
                    "data-fslightbox": !0
                } : {},
                disabled: l,
                style: d,
                onClick: y,
                children: e
            };
            return s ? o.createElement("a", Object.assign({}, f, b, {
                target: p
            })) : w ? o.createElement(a.N_, Object.assign({}, f, b)) : o.createElement("button", b)
        }
          , u = t => {
            let {data: e, effect: n, iconLeft: a, iconRight: c} = t;
            return o.createElement("span", {
                className: "x__copy"
            }, a && o.createElement("i", {
                className: "x__copy__icon-left x__copy__icon-left--".concat(n)
            }, a), o.createElement("span", null, e), c && o.createElement("i", {
                className: "x__copy__icon-right x__copy__icon-right--".concat(n)
            }, c))
        }
        ;
        e.A = t => {
            let {copy: e="Exodus button", iconLeft: n=null, iconRight: a=null, size: c="normal", type: r="primary", active: i=!1, activeEffect: l="rotate", disabled: p=!1, lightbox: d=!1, target: w="_self", style: y, to: f, onClick: b} = t;
            const h = f && f.startsWith("https://") || "_blank" === w
              , m = {
                to: f,
                size: c,
                type: r,
                external: h,
                active: i,
                lightbox: d,
                target: w,
                style: y,
                disabled: p,
                onClick: b
            };
            return o.createElement(s, m, o.createElement(u, {
                data: e,
                effect: l,
                iconLeft: n,
                iconRight: a
            }))
        }
    },
    18105: function(t, e, n) {
        n.d(e, {
            B8: function() {
                return x
            },
            Bf: function() {
                return at
            },
            CT: function() {
                return yt
            },
            Cu: function() {
                return o
            },
            Ex: function() {
                return _
            },
            F3: function() {
                return j
            },
            FE: function() {
                return tt
            },
            FO: function() {
                return st
            },
            Ig: function() {
                return v
            },
            LG: function() {
                return L
            },
            LI: function() {
                return u
            },
            MR: function() {
                return it
            },
            O1: function() {
                return B
            },
            OE: function() {
                return X
            },
            OK: function() {
                return J
            },
            Oe: function() {
                return F
            },
            Pt: function() {
                return K
            },
            R1: function() {
                return V
            },
            S3: function() {
                return I
            },
            S_: function() {
                return $
            },
            Te: function() {
                return g
            },
            UM: function() {
                return dt
            },
            V2: function() {
                return c
            },
            W6: function() {
                return r
            },
            WF: function() {
                return rt
            },
            Wh: function() {
                return P
            },
            Wq: function() {
                return A
            },
            X9: function() {
                return q
            },
            XY: function() {
                return M
            },
            Xp: function() {
                return T
            },
            Yz: function() {
                return h
            },
            ZJ: function() {
                return Q
            },
            ZW: function() {
                return ut
            },
            Zk: function() {
                return O
            },
            bR: function() {
                return y
            },
            cK: function() {
                return d
            },
            dS: function() {
                return nt
            },
            di: function() {
                return ot
            },
            f$: function() {
                return Z
            },
            fD: function() {
                return Y
            },
            gu: function() {
                return w
            },
            hv: function() {
                return wt
            },
            jm: function() {
                return E
            },
            ku: function() {
                return D
            },
            kv: function() {
                return N
            },
            lX: function() {
                return W
            },
            mL: function() {
                return pt
            },
            mM: function() {
                return S
            },
            nh: function() {
                return s
            },
            oy: function() {
                return k
            },
            pf: function() {
                return H
            },
            pk: function() {
                return l
            },
            qc: function() {
                return C
            },
            rZ: function() {
                return f
            },
            tp: function() {
                return z
            },
            uY: function() {
                return et
            },
            um: function() {
                return i
            },
            uy: function() {
                return b
            },
            v5: function() {
                return ct
            },
            vG: function() {
                return m
            },
            yd: function() {
                return lt
            },
            yg: function() {
                return U
            },
            yy: function() {
                return a
            },
            zF: function() {
                return R
            },
            zS: function() {
                return p
            },
            zp: function() {
                return G
            }
        });
        const o = !1
          , a = "Exodus"
          , c = "exodus.com"
          , r = "https://www.".concat(c)
          , s = ("https://uk.".concat(c),
        "".concat(r, "/contact"))
          , u = ("https://dev.".concat(c),
        "".concat(r, "/download"))
          , i = "https://downloads.".concat(c, "/releases")
          , l = ("https://extension.".concat(c, "/releases"),
        "".concat(r, "/legal"),
        "".concat(r, "/news"),
        "".concat(r, "/privacy"))
          , p = "https://referrals.".concat(c)
          , d = "https://support.".concat(c)
          , w = "".concat(r, "/terms")
          , y = "uk" === {}.SUBSITE
          , f = "/download"
          , b = "/assets"
          , h = "/newsletter"
          , m = "jobs@".concat(c)
          , g = ("talent@".concat(c),
        "support@".concat(c))
          , k = ("investors@".concat(c),
        "legal@".concat(c),
        "data@".concat(c))
          , _ = "https://support-helpers.a.exodus.io"
          , x = "https://exchange.exodus.io"
          , v = "https://pricing.a.exodus.io"
          , S = "/api/is-eu-country"
          , W = "https://fiat-s.a.exodus.io/"
          , E = o ? W : "https://fiat.a.exodus.io/"
          , D = "https://boards.greenhouse.io/exodus54"
          , C = "https://apps.apple.com/app/apple-store/id".concat(1414384820, "?").concat("pt=118366236&ct=download", "&mt=8")
          , P = "https://play.google.com/store/apps/details?id=".concat("exodusmovement.exodus")
          , A = "https://www.exodus.com/install-forwarder/extension/"
          , L = ["browser", "nile"]
          , z = "https://trezor.go2cloud.org/aff_c?offer_id=133&aff_id=2683"
          , M = "https://sboffers.swagbucks.com/GP8A5"
          , I = "t2_c6meqdng"
          , N = "https://www.redditstatic.com/ads/pixel.js"
          , O = "1316946818800961"
          , T = "https://connect.facebook.net/en_US/fbevents.js"
          , U = "C8JRSK4B7AN1JESF6I5G"
          , B = "https://analytics.tiktok.com/i18n/pixel/events.js"
          , R = "o0arj"
          , q = "https://static.ads-twitter.com/uwt.js"
          , G = "http://discord.gg/exodus"
          , j = "https://www.facebook.com/exodus.io"
          , F = "https://github.com/ExodusMovement"
          , Z = "https://www.instagram.com/exodus"
          , H = "https://www.reddit.com/r/ExodusWallet"
          , J = "exodus"
          , K = "https://x.com/".concat(J)
          , X = "https://www.youtube.com/c/exodus"
          , Y = !1
          , V = !1
          , $ = !0
          , Q = !0
          , tt = !1
          , et = !1
          , nt = !1
          , ot = !0
          , at = !1
          , ct = !1
          , rt = !1
          , st = ["btc", "xmr"]
          , ut = ["btc", "xmr"]
          , it = ["btc"]
          , lt = {
            web3: ["web3", "Web3"],
            ios: ["ios", "iOS"],
            android: ["android", "Android"],
            win: ["windows", "Windows"],
            mac: ["macos", "MacOS_Intel"],
            macMs: ["macos-m1", "MacOS_Ms"],
            lin: ["linux-deb", "Linux_DEB"],
            linZip: ["linux-zip", "Linux_ZIP"]
        }
          , pt = {
            desktop: ["Desktop", "desktop"],
            mobile: ["Mobile", "mobile"],
            web3: ["Extension", "browser-extension"]
        }
          , dt = "USD"
          , wt = {
            name: "Exodus Movement, Inc.",
            address: "15418 Weir Street",
            address_line2: "#333",
            address_line_2: "No. 333",
            city: "Omaha",
            state: "Nebraska",
            st: "NE",
            zip: 68137,
            country: "United States"
        }
          , yt = "edr429y3"
    },
    38033: function(t, e, n) {
        var o = n(19039);
        e.A = o.Ay
    },
    19039: function(t, e, n) {
        n(12041);
        var o = n(94311);
        const a = ["MarCom"]
          , c = ["iOS", "Android"]
          , r = ["Page"];
        e.Ay = function(t) {
            let {ua: e, ga: n} = t
              , s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            e && (t => {
                const [e,n,a] = t;
                o.Ay.event({
                    category: e,
                    action: n,
                    label: a
                })
            }
            )(e),
            n && ( (t, e) => {
                if (!window.gtag || !t)
                    return null;
                const [n,o,s] = t;
                if (gtag("event", n, {
                    [o]: s
                }),
                a.includes(n))
                    return null;
                e ? gtag("event", o, {
                    [s]: "".concat(s.replaceAll("_", ""), "_").concat(e)
                }) : gtag("event", o, {
                    [s]: s
                });
                const [u,i] = (t => {
                    if (!t)
                        return null;
                    const e = t.split("_")
                      , [n,o] = e;
                    return [n, o]
                }
                )(s);
                if (void 0 !== i) {
                    if (r.includes(i))
                        return null;
                    gtag("event", u, {
                        [i]: i
                    })
                } else {
                    if (c.includes(u))
                        return null;
                    gtag("event", u)
                }
            }
            )(n, s)
        }
    },
    96288: function(t, e, n) {
        n.d(e, {
            $T: function() {
                return D
            },
            Bc: function() {
                return B
            },
            CL: function() {
                return G
            },
            E1: function() {
                return I
            },
            EV: function() {
                return T
            },
            F$: function() {
                return A
            },
            ID: function() {
                return C
            },
            JL: function() {
                return L
            },
            Jt: function() {
                return U
            },
            Ne: function() {
                return P
            },
            PZ: function() {
                return z
            },
            S2: function() {
                return N
            },
            iL: function() {
                return H
            },
            jW: function() {
                return F
            },
            lE: function() {
                return O
            },
            mE: function() {
                return Z
            },
            qU: function() {
                return R
            },
            qn: function() {
                return q
            },
            uB: function() {
                return M
            },
            zC: function() {
                return j
            }
        });
        var o = n(18105);
        const {web3: [a,c], ios: [r,s], android: [u,i], win: [l,p], mac: [d,w], macMs: [y,f], lin: [b,h], linZip: [m,g]} = o.yd
          , {desktop: [k,_], mobile: [x,v], web3: [S,W]} = o.mL
          , E = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return t ? e ? "".concat(e).concat(t.toUpperCase()) : t.toUpperCase() : ""
        }
          , D = {
            ua: ["Web3WalletPage", a, "web3-wallet-page"],
            ga: ["Web3WalletPage", c, "Web3WalletPage"]
        }
          , C = {
            ua: ["Web3WalletPage", v, "web3-wallet-page"],
            ga: ["Web3WalletPage", x, "Web3WalletPage"]
        }
          , P = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(a).concat(E(t, "-")), "".concat(W).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "-")), "".concat(c).concat(E(t, "-")), "".concat(S).concat(E(t, "-"))]
            }
        }
          , A = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(W).concat(E(t, "-")), "download-page".concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(c).concat(E(t, "_")), "Download_Page".concat(E(t, "_"))]
            }
        }
          , L = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(v).concat(E(t, "-")), "".concat(r).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(x).concat(E(t, "_")), "".concat(s).concat(E(t))]
            }
        }
          , z = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(v).concat(E(t, "-")), "".concat(u).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(x).concat(E(t, "_")), "".concat(i).concat(E(t))]
            }
        }
          , M = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(_).concat(E(t, "-")), "".concat(y).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(k).concat(E(t, "_")), "".concat(f).concat(E(t))]
            }
        }
          , I = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(_).concat(E(t, "-")), "".concat(m).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(k).concat(E(t, "_")), "".concat(g).concat(E(t))]
            }
        }
          , N = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(_).concat(E(t, "-")), "".concat(b).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(k).concat(E(t, "_")), "".concat(h).concat(E(t))]
            }
        }
          , O = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(_).concat(E(t, "-")), "".concat(y).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(k).concat(E(t, "_")), "".concat(f).concat(E(t))]
            }
        }
          , T = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(_).concat(E(t, "-")), "".concat(d).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(k).concat(E(t, "_")), "".concat(w).concat(E(t))]
            }
        }
          , U = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
                ua: ["Downloads".concat(E(t, "-")), "".concat(_).concat(E(t, "-")), "".concat(l).concat(E(t, "-"))],
                ga: ["Downloads".concat(E(t, "_")), "".concat(k).concat(E(t, "_")), "".concat(p).concat(E(t))]
            }
        }
          , B = t => ({
            ua: ["AssetPage_Downloads", t, a],
            ga: ["AssetPage_Downloads", t, c]
        })
          , R = t => ({
            ua: ["AssetPage_Downloads", t, v],
            ga: ["AssetPage_Downloads", t, x]
        })
          , q = t => ({
            ua: ["AssetPage_Downloads", t, _],
            ga: ["AssetPage_Downloads", t, k]
        })
          , G = {
            ga: ["Cardano_Pre_Seed", "Subscribe", "Get_Access"]
        }
          , j = {
            ga: ["CS_Membership", "Subscribe", "Sign_Up"]
        }
          , F = {
            ga: ["Newsletter_Subscription", "Subscribe", "Newsletter"]
        }
          , Z = {
            ga: ["StandWithCrypto_Banner", "HomePage", "Learn_More"]
        }
          , H = {
            ga: ["NYSE_American_Banner", "HomePage", "Learn_More"]
        }
    },
    90335: function(t, e, n) {
        n.d(e, {
            Ri: function() {
                return a
            },
            TV: function() {
                return c
            }
        });
        var o = n(18105);
        const a = t => {
            if ("undefined" == typeof document)
                return;
            const e = {};
            return decodeURIComponent(document.cookie).split(";").forEach((t => {
                const [n,o] = t.trim().split("=");
                e[n] = o
            }
            )),
            e[t]
        }
          , c = t => {
            let {name: e, value: n, daysToPersist: a, currentSubdomainOnly: c} = t;
            if ("undefined" == typeof document)
                return;
            "forever" === a && (a = 1e3);
            const r = new Date(Date.now() + 864e5 * (a || 0)).toUTCString()
              , s = a ? ";expires=".concat(r) : ""
              , u = c || o.Cu ? "" : ";domain=".concat(o.V2);
            document.cookie = "".concat(e, "=").concat(n, ";path=/").concat(s).concat(u)
        }
    },
    58277: function(t, e, n) {
        var o = n(96540);
        e.A = t => {
            const {0: e, 1: n} = (0,
            o.useState)({
                height: 0,
                width: 0,
                isDesktop: !1,
                isMobile: !1,
                isTablet: !1,
                breakpoint: !1
            })
              , a = () => {
                n({
                    height: window.innerHeight,
                    width: window.innerWidth,
                    isDesktop: window.innerWidth >= 1170,
                    isMobile: window.innerWidth <= 768,
                    isTablet: window.innerWidth > 768 && window.innerWidth < 1170,
                    breakpoint: !!t && window.innerWidth <= t
                })
            }
            ;
            return (0,
            o.useEffect)(( () => {
                if ("undefined" != typeof window)
                    return a(),
                    window.addEventListener("resize", a),
                    () => {
                        window.removeEventListener("resize", a)
                    }
            }
            ), []),
            e
        }
    },
    10188: function(t) {
        t.exports = JSON.parse('{"home":{"label":"Exodus","copy":"Digital blockchain products","path":"/"},"products":{"name":"Products","web3":{"key":"web3","label":"Web3 Wallet","copy":"Explore the world of web3 and DeFi","path":"/web3-wallet/"},"mobile":{"key":"mobile","label":"Mobile Wallet","copy":"Control your wealth anywhere","path":"https://exodus.com/mobile"},"desktop":{"key":"desktop","label":"Desktop Wallet","copy":"Swap and transfer digital assets","path":"https://exodus.com/desktop"},"trezor":{"key":"trezor","label":"Trezor Hardware Wallet","copy":"Advanced security made easy","path":"/trezor-wallet/"},"rewards":{"key":"earn","label":"Earn Crypto Rewards","copy":"Manage staking rewards for multiple assets","path":"/earn-crypto/"},"category":{"name":"Enterprise","items":{"xoswap":{"key":"xoswap","label":"XO Swap","copy":"Boost growth with a premium crypto swap engine","path":"https://www.xoswap.com"},"passkeys":{"key":"passkeys","label":"Passkeys Wallet & SDK","copy":"Reduce drop-off with one-click web3 onboarding","path":"https://passkeys.foundation"},"waas":{"key":"waas","label":"Wallet-as-a-Service (WaaS)","copy":"Grow your platform with a custom web3 wallet","path":"/wallet-as-a-service/"}}}},"support":{"name":"Support","support":{"key":"support","label":"24/7 Customer Support","copy":"Support engineers are standing by to help","path":"/contact-support/"},"status":{"key":"assets","label":"Crypto Assets","copy":"Info on supported assets, crypto rewards, and more","path":"/assets/"},"legal":{"key":"legal","label":"Legal Inquiries","path":"/legal-inquiries/"}},"learn":{"name":"Learn","kb":{"key":"kb","label":"Knowledge Base","copy":"Common questions and blockchain education","path":"https://www.exodus.com/support"},"youtube":{"key":"youtube","label":"YouTube","copy":"Crypto education and tutorials","path":"https://www.youtube.com/c/exodus/"},"newsletter":{"key":"newsletter","label":"Newsletter","copy":"Sign-up for product updates and crypto highlights","path":"/newsletter/"}},"company":{"name":"Company","about":{"key":"about","label":"About Us","copy":"Learn more about Exodus","path":"/about/"},"investors":{"key":"investors","label":"Investors","copy":"Read about news, media, events and more","path":"/investors/"},"careers":{"key":"careers","label":"Careers","copy":"See our open positions","path":"/careers/"},"contact":{"key":"contact","label":"Contact Us","copy":"Get in touch","path":"/contact/"},"brand":{"key":"brand","label":"Brand Guidelines","copy":"Exodus media kit","path":"/brand/"},"security":{"key":"security","label":"Security","copy":"How we keep your crypto safe","path":"/security/"},"trademarks":{"key":"trademarks","label":"Intellectual Property","copy":"Exodus Trademarks","path":"/trademarks/"}},"download":{"label":"Download","path":"/download/"},"legal":{"privacy":{"label":"Privacy Policy","path":"/privacy/"},"terms":{"label":"Terms of Use","path":"/terms/"}}}')
    },
    84646: function(t) {
        t.exports = JSON.parse('{"home":{"label":"Exodus","copy":"Productos digitales de blockchain","path":"/es"},"products":{"name":"Products","web3":{"key":"web3","label":"Web3 Wallet","copy":"Explore the world of Web3 and DeFi","path":"/web3-wallet/"},"mobile":{"key":"mobile","label":"Mobile Wallet","copy":"Control your wealth anywhere","path":"https://exodus.com/mobile"},"desktop":{"key":"desktop","label":"Desktop Wallet","copy":"Swap and transfer digital assets","path":"https://exodus.com/desktop"},"trezor":{"key":"trezor","label":"Trezor Hardware Wallet","copy":"Advanced security made easy","path":"/trezor-wallet/"},"rewards":{"key":"earn","label":"Earn Crypto Rewards","copy":"Manage staking rewards for multiple assets","path":"/earn-crypto/"},"category":{"name":"Enterprise","items":{"xoswap":{"key":"xoswap","label":"XO Swap","copy":"Boost growth with a premium crypto swap engine","path":"https://www.xoswap.com"},"passkeys":{"key":"passkeys","label":"Passkeys Wallet & SDK","copy":"Reduce drop-off with one-click web3 onboarding","path":"https://passkeys.foundation"},"waas":{"key":"waas","label":"Wallet-as-a-Service (WaaS)","copy":"Grow your platform with a custom web3 wallet","path":"/wallet-as-a-service/"}}}},"support":{"name":"Support","support":{"key":"support","label":"24/7 Customer Support","copy":"Support engineers are standing by to help","path":"/contact-support/"},"status":{"key":"assets","label":"Crypto Assets","copy":"Info on supported assets, crypto rewards, and more","path":"/assets/"},"legal":{"key":"legal","label":"Legal Inquiries","path":"/legal-inquiries/"}},"learn":{"name":"Learn","kb":{"key":"kb","label":"Knowledge Base","copy":"Common questions and blockchain education","path":"https://www.exodus.com/support"},"youtube":{"key":"youtube","label":"YouTube","copy":"Crypto education and tutorials","path":"https://www.youtube.com/c/exodus/"},"newsletter":{"key":"newsletter","label":"Newsletter","copy":"Sign-up for product updates and crypto highlights","path":"/newsletter/"}},"company":{"name":"Company","about":{"key":"about","label":"About Us","copy":"Learn more about Exodus","path":"/about/"},"investors":{"key":"investors","label":"Investors","copy":"Read about news, media, events and more","path":"/investors/"},"careers":{"key":"careers","label":"Careers","copy":"See our open positions","path":"/careers/"},"contact":{"key":"contact","label":"Contact Us","copy":"Get in touch","path":"/contact/"},"brand":{"key":"brand","label":"Brand Guidelines","copy":"Exodus media kit","path":"/brand/"},"security":{"key":"security","label":"Security","copy":"How we keep your crypto safe","path":"/security/"},"trademarks":{"key":"trademarks","label":"Intellectual Property","copy":"Exodus Trademarks","path":"/trademarks/"}},"download":{"label":"Descargar","path":"/es/descarga/"},"legal":{"privacy":{"label":"Privacy Policy","path":"/privacy/"},"terms":{"label":"Terms of Use","path":"/terms/"}}}')
    }
}]);
//# sourceMappingURL=4571-357422061ba8ce80875a-v2.js.map

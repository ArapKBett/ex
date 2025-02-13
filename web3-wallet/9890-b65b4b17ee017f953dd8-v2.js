(self.webpackChunkexodus_website = self.webpackChunkexodus_website || []).push([[9890], {
    59029: function(e, t) {
        "use strict";
        const r = {
            Bitcoin: {
                applicationName: "Bitcoin",
                supportedVersions: "^2.1.2",
                primaryAssetName: "bitcoin"
            },
            Solana: {
                applicationName: "Solana",
                supportedVersions: "^1.4.0",
                primaryAssetName: "solana"
            },
            Ethereum: {
                applicationName: "Ethereum",
                supportedVersions: "^1.10.4",
                primaryAssetName: "ethereum"
            },
            Polygon: {
                applicationName: "Polygon",
                supportedVersions: "^1.10.0",
                primaryAssetName: "matic"
            },
            Tron: {
                applicationName: "Tron",
                supportedVersions: "^0.7.0",
                primaryAssetName: "tronmainnet"
            }
        };
        t.A = r
    },
    61870: function(e, t) {
        var r;
        t = e.exports = m,
        r = "object" == typeof process && {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG) ? function() {
            var e = Array.prototype.slice.call(arguments, 0);
            e.unshift("SEMVER"),
            console.log.apply(console, e)
        }
        : function() {}
        ,
        t.SEMVER_SPEC_VERSION = "2.0.0";
        var o = 256
          , n = Number.MAX_SAFE_INTEGER || 9007199254740991
          , s = o - 6
          , i = t.re = []
          , a = t.safeRe = []
          , c = t.src = []
          , l = t.tokens = {}
          , p = 0;
        function u(e) {
            l[e] = p++
        }
        var h = "[a-zA-Z0-9-]"
          , f = [["\\s", 1], ["\\d", o], [h, s]];
        function _(e) {
            for (var t = 0; t < f.length; t++) {
                var r = f[t][0]
                  , o = f[t][1];
                e = e.split(r + "*").join(r + "{0," + o + "}").split(r + "+").join(r + "{1," + o + "}")
            }
            return e
        }
        u("NUMERICIDENTIFIER"),
        c[l.NUMERICIDENTIFIER] = "0|[1-9]\\d*",
        u("NUMERICIDENTIFIERLOOSE"),
        c[l.NUMERICIDENTIFIERLOOSE] = "\\d+",
        u("NONNUMERICIDENTIFIER"),
        c[l.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-]" + h + "*",
        u("MAINVERSION"),
        c[l.MAINVERSION] = "(" + c[l.NUMERICIDENTIFIER] + ")\\.(" + c[l.NUMERICIDENTIFIER] + ")\\.(" + c[l.NUMERICIDENTIFIER] + ")",
        u("MAINVERSIONLOOSE"),
        c[l.MAINVERSIONLOOSE] = "(" + c[l.NUMERICIDENTIFIERLOOSE] + ")\\.(" + c[l.NUMERICIDENTIFIERLOOSE] + ")\\.(" + c[l.NUMERICIDENTIFIERLOOSE] + ")",
        u("PRERELEASEIDENTIFIER"),
        c[l.PRERELEASEIDENTIFIER] = "(?:" + c[l.NUMERICIDENTIFIER] + "|" + c[l.NONNUMERICIDENTIFIER] + ")",
        u("PRERELEASEIDENTIFIERLOOSE"),
        c[l.PRERELEASEIDENTIFIERLOOSE] = "(?:" + c[l.NUMERICIDENTIFIERLOOSE] + "|" + c[l.NONNUMERICIDENTIFIER] + ")",
        u("PRERELEASE"),
        c[l.PRERELEASE] = "(?:-(" + c[l.PRERELEASEIDENTIFIER] + "(?:\\." + c[l.PRERELEASEIDENTIFIER] + ")*))",
        u("PRERELEASELOOSE"),
        c[l.PRERELEASELOOSE] = "(?:-?(" + c[l.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + c[l.PRERELEASEIDENTIFIERLOOSE] + ")*))",
        u("BUILDIDENTIFIER"),
        c[l.BUILDIDENTIFIER] = h + "+",
        u("BUILD"),
        c[l.BUILD] = "(?:\\+(" + c[l.BUILDIDENTIFIER] + "(?:\\." + c[l.BUILDIDENTIFIER] + ")*))",
        u("FULL"),
        u("FULLPLAIN"),
        c[l.FULLPLAIN] = "v?" + c[l.MAINVERSION] + c[l.PRERELEASE] + "?" + c[l.BUILD] + "?",
        c[l.FULL] = "^" + c[l.FULLPLAIN] + "$",
        u("LOOSEPLAIN"),
        c[l.LOOSEPLAIN] = "[v=\\s]*" + c[l.MAINVERSIONLOOSE] + c[l.PRERELEASELOOSE] + "?" + c[l.BUILD] + "?",
        u("LOOSE"),
        c[l.LOOSE] = "^" + c[l.LOOSEPLAIN] + "$",
        u("GTLT"),
        c[l.GTLT] = "((?:<|>)?=?)",
        u("XRANGEIDENTIFIERLOOSE"),
        c[l.XRANGEIDENTIFIERLOOSE] = c[l.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*",
        u("XRANGEIDENTIFIER"),
        c[l.XRANGEIDENTIFIER] = c[l.NUMERICIDENTIFIER] + "|x|X|\\*",
        u("XRANGEPLAIN"),
        c[l.XRANGEPLAIN] = "[v=\\s]*(" + c[l.XRANGEIDENTIFIER] + ")(?:\\.(" + c[l.XRANGEIDENTIFIER] + ")(?:\\.(" + c[l.XRANGEIDENTIFIER] + ")(?:" + c[l.PRERELEASE] + ")?" + c[l.BUILD] + "?)?)?",
        u("XRANGEPLAINLOOSE"),
        c[l.XRANGEPLAINLOOSE] = "[v=\\s]*(" + c[l.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + c[l.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + c[l.XRANGEIDENTIFIERLOOSE] + ")(?:" + c[l.PRERELEASELOOSE] + ")?" + c[l.BUILD] + "?)?)?",
        u("XRANGE"),
        c[l.XRANGE] = "^" + c[l.GTLT] + "\\s*" + c[l.XRANGEPLAIN] + "$",
        u("XRANGELOOSE"),
        c[l.XRANGELOOSE] = "^" + c[l.GTLT] + "\\s*" + c[l.XRANGEPLAINLOOSE] + "$",
        u("COERCE"),
        c[l.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",
        u("COERCERTL"),
        i[l.COERCERTL] = new RegExp(c[l.COERCE],"g"),
        a[l.COERCERTL] = new RegExp(_(c[l.COERCE]),"g"),
        u("LONETILDE"),
        c[l.LONETILDE] = "(?:~>?)",
        u("TILDETRIM"),
        c[l.TILDETRIM] = "(\\s*)" + c[l.LONETILDE] + "\\s+",
        i[l.TILDETRIM] = new RegExp(c[l.TILDETRIM],"g"),
        a[l.TILDETRIM] = new RegExp(_(c[l.TILDETRIM]),"g");
        u("TILDE"),
        c[l.TILDE] = "^" + c[l.LONETILDE] + c[l.XRANGEPLAIN] + "$",
        u("TILDELOOSE"),
        c[l.TILDELOOSE] = "^" + c[l.LONETILDE] + c[l.XRANGEPLAINLOOSE] + "$",
        u("LONECARET"),
        c[l.LONECARET] = "(?:\\^)",
        u("CARETTRIM"),
        c[l.CARETTRIM] = "(\\s*)" + c[l.LONECARET] + "\\s+",
        i[l.CARETTRIM] = new RegExp(c[l.CARETTRIM],"g"),
        a[l.CARETTRIM] = new RegExp(_(c[l.CARETTRIM]),"g");
        u("CARET"),
        c[l.CARET] = "^" + c[l.LONECARET] + c[l.XRANGEPLAIN] + "$",
        u("CARETLOOSE"),
        c[l.CARETLOOSE] = "^" + c[l.LONECARET] + c[l.XRANGEPLAINLOOSE] + "$",
        u("COMPARATORLOOSE"),
        c[l.COMPARATORLOOSE] = "^" + c[l.GTLT] + "\\s*(" + c[l.LOOSEPLAIN] + ")$|^$",
        u("COMPARATOR"),
        c[l.COMPARATOR] = "^" + c[l.GTLT] + "\\s*(" + c[l.FULLPLAIN] + ")$|^$",
        u("COMPARATORTRIM"),
        c[l.COMPARATORTRIM] = "(\\s*)" + c[l.GTLT] + "\\s*(" + c[l.LOOSEPLAIN] + "|" + c[l.XRANGEPLAIN] + ")",
        i[l.COMPARATORTRIM] = new RegExp(c[l.COMPARATORTRIM],"g"),
        a[l.COMPARATORTRIM] = new RegExp(_(c[l.COMPARATORTRIM]),"g");
        u("HYPHENRANGE"),
        c[l.HYPHENRANGE] = "^\\s*(" + c[l.XRANGEPLAIN] + ")\\s+-\\s+(" + c[l.XRANGEPLAIN] + ")\\s*$",
        u("HYPHENRANGELOOSE"),
        c[l.HYPHENRANGELOOSE] = "^\\s*(" + c[l.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + c[l.XRANGEPLAINLOOSE] + ")\\s*$",
        u("STAR"),
        c[l.STAR] = "(<|>)?=?\\s*\\*";
        for (var E = 0; E < p; E++)
            r(E, c[E]),
            i[E] || (i[E] = new RegExp(c[E]),
            a[E] = new RegExp(_(c[E])));
        function d(e, t) {
            if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }),
            e instanceof m)
                return e;
            if ("string" != typeof e)
                return null;
            if (e.length > o)
                return null;
            if (!(t.loose ? a[l.LOOSE] : a[l.FULL]).test(e))
                return null;
            try {
                return new m(e,t)
            } catch (r) {
                return null
            }
        }
        function m(e, t) {
            if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }),
            e instanceof m) {
                if (e.loose === t.loose)
                    return e;
                e = e.version
            } else if ("string" != typeof e)
                throw new TypeError("Invalid Version: " + e);
            if (e.length > o)
                throw new TypeError("version is longer than " + o + " characters");
            if (!(this instanceof m))
                return new m(e,t);
            r("SemVer", e, t),
            this.options = t,
            this.loose = !!t.loose;
            var s = e.trim().match(t.loose ? a[l.LOOSE] : a[l.FULL]);
            if (!s)
                throw new TypeError("Invalid Version: " + e);
            if (this.raw = e,
            this.major = +s[1],
            this.minor = +s[2],
            this.patch = +s[3],
            this.major > n || this.major < 0)
                throw new TypeError("Invalid major version");
            if (this.minor > n || this.minor < 0)
                throw new TypeError("Invalid minor version");
            if (this.patch > n || this.patch < 0)
                throw new TypeError("Invalid patch version");
            s[4] ? this.prerelease = s[4].split(".").map((function(e) {
                if (/^[0-9]+$/.test(e)) {
                    var t = +e;
                    if (t >= 0 && t < n)
                        return t
                }
                return e
            }
            )) : this.prerelease = [],
            this.build = s[5] ? s[5].split(".") : [],
            this.format()
        }
        t.parse = d,
        t.valid = function(e, t) {
            var r = d(e, t);
            return r ? r.version : null
        }
        ,
        t.clean = function(e, t) {
            var r = d(e.trim().replace(/^[=v]+/, ""), t);
            return r ? r.version : null
        }
        ,
        t.SemVer = m,
        m.prototype.format = function() {
            return this.version = this.major + "." + this.minor + "." + this.patch,
            this.prerelease.length && (this.version += "-" + this.prerelease.join(".")),
            this.version
        }
        ,
        m.prototype.toString = function() {
            return this.version
        }
        ,
        m.prototype.compare = function(e) {
            return r("SemVer.compare", this.version, this.options, e),
            e instanceof m || (e = new m(e,this.options)),
            this.compareMain(e) || this.comparePre(e)
        }
        ,
        m.prototype.compareMain = function(e) {
            return e instanceof m || (e = new m(e,this.options)),
            R(this.major, e.major) || R(this.minor, e.minor) || R(this.patch, e.patch)
        }
        ,
        m.prototype.comparePre = function(e) {
            if (e instanceof m || (e = new m(e,this.options)),
            this.prerelease.length && !e.prerelease.length)
                return -1;
            if (!this.prerelease.length && e.prerelease.length)
                return 1;
            if (!this.prerelease.length && !e.prerelease.length)
                return 0;
            var t = 0;
            do {
                var o = this.prerelease[t]
                  , n = e.prerelease[t];
                if (r("prerelease compare", t, o, n),
                void 0 === o && void 0 === n)
                    return 0;
                if (void 0 === n)
                    return 1;
                if (void 0 === o)
                    return -1;
                if (o !== n)
                    return R(o, n)
            } while (++t)
        }
        ,
        m.prototype.compareBuild = function(e) {
            e instanceof m || (e = new m(e,this.options));
            var t = 0;
            do {
                var o = this.build[t]
                  , n = e.build[t];
                if (r("prerelease compare", t, o, n),
                void 0 === o && void 0 === n)
                    return 0;
                if (void 0 === n)
                    return 1;
                if (void 0 === o)
                    return -1;
                if (o !== n)
                    return R(o, n)
            } while (++t)
        }
        ,
        m.prototype.inc = function(e, t) {
            switch (e) {
            case "premajor":
                this.prerelease.length = 0,
                this.patch = 0,
                this.minor = 0,
                this.major++,
                this.inc("pre", t);
                break;
            case "preminor":
                this.prerelease.length = 0,
                this.patch = 0,
                this.minor++,
                this.inc("pre", t);
                break;
            case "prepatch":
                this.prerelease.length = 0,
                this.inc("patch", t),
                this.inc("pre", t);
                break;
            case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t),
                this.inc("pre", t);
                break;
            case "major":
                0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
                this.minor = 0,
                this.patch = 0,
                this.prerelease = [];
                break;
            case "minor":
                0 === this.patch && 0 !== this.prerelease.length || this.minor++,
                this.patch = 0,
                this.prerelease = [];
                break;
            case "patch":
                0 === this.prerelease.length && this.patch++,
                this.prerelease = [];
                break;
            case "pre":
                if (0 === this.prerelease.length)
                    this.prerelease = [0];
                else {
                    for (var r = this.prerelease.length; --r >= 0; )
                        "number" == typeof this.prerelease[r] && (this.prerelease[r]++,
                        r = -2);
                    -1 === r && this.prerelease.push(0)
                }
                t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                break;
            default:
                throw new Error("invalid increment argument: " + e)
            }
            return this.format(),
            this.raw = this.version,
            this
        }
        ,
        t.inc = function(e, t, r, o) {
            "string" == typeof r && (o = r,
            r = void 0);
            try {
                return new m(e,r).inc(t, o).version
            } catch (n) {
                return null
            }
        }
        ,
        t.diff = function(e, t) {
            if (O(e, t))
                return null;
            var r = d(e)
              , o = d(t)
              , n = "";
            if (r.prerelease.length || o.prerelease.length) {
                n = "pre";
                var s = "prerelease"
            }
            for (var i in r)
                if (("major" === i || "minor" === i || "patch" === i) && r[i] !== o[i])
                    return n + i;
            return s
        }
        ,
        t.compareIdentifiers = R;
        var b = /^[0-9]+$/;
        function R(e, t) {
            var r = b.test(e)
              , o = b.test(t);
            return r && o && (e = +e,
            t = +t),
            e === t ? 0 : r && !o ? -1 : o && !r ? 1 : e < t ? -1 : 1
        }
        function g(e, t, r) {
            return new m(e,r).compare(new m(t,r))
        }
        function I(e, t, r) {
            return g(e, t, r) > 0
        }
        function v(e, t, r) {
            return g(e, t, r) < 0
        }
        function O(e, t, r) {
            return 0 === g(e, t, r)
        }
        function w(e, t, r) {
            return 0 !== g(e, t, r)
        }
        function T(e, t, r) {
            return g(e, t, r) >= 0
        }
        function L(e, t, r) {
            return g(e, t, r) <= 0
        }
        function N(e, t, r, o) {
            switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e === r;
            case "!==":
                return "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e !== r;
            case "":
            case "=":
            case "==":
                return O(e, r, o);
            case "!=":
                return w(e, r, o);
            case ">":
                return I(e, r, o);
            case ">=":
                return T(e, r, o);
            case "<":
                return v(e, r, o);
            case "<=":
                return L(e, r, o);
            default:
                throw new TypeError("Invalid operator: " + t)
            }
        }
        function S(e, t) {
            if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }),
            e instanceof S) {
                if (e.loose === !!t.loose)
                    return e;
                e = e.value
            }
            if (!(this instanceof S))
                return new S(e,t);
            e = e.trim().split(/\s+/).join(" "),
            r("comparator", e, t),
            this.options = t,
            this.loose = !!t.loose,
            this.parse(e),
            this.semver === A ? this.value = "" : this.value = this.operator + this.semver.version,
            r("comp", this)
        }
        t.rcompareIdentifiers = function(e, t) {
            return R(t, e)
        }
        ,
        t.major = function(e, t) {
            return new m(e,t).major
        }
        ,
        t.minor = function(e, t) {
            return new m(e,t).minor
        }
        ,
        t.patch = function(e, t) {
            return new m(e,t).patch
        }
        ,
        t.compare = g,
        t.compareLoose = function(e, t) {
            return g(e, t, !0)
        }
        ,
        t.compareBuild = function(e, t, r) {
            var o = new m(e,r)
              , n = new m(t,r);
            return o.compare(n) || o.compareBuild(n)
        }
        ,
        t.rcompare = function(e, t, r) {
            return g(t, e, r)
        }
        ,
        t.sort = function(e, r) {
            return e.sort((function(e, o) {
                return t.compareBuild(e, o, r)
            }
            ))
        }
        ,
        t.rsort = function(e, r) {
            return e.sort((function(e, o) {
                return t.compareBuild(o, e, r)
            }
            ))
        }
        ,
        t.gt = I,
        t.lt = v,
        t.eq = O,
        t.neq = w,
        t.gte = T,
        t.lte = L,
        t.cmp = N,
        t.Comparator = S;
        var A = {};
        function x(e, t) {
            if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }),
            e instanceof x)
                return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new x(e.raw,t);
            if (e instanceof S)
                return new x(e.value,t);
            if (!(this instanceof x))
                return new x(e,t);
            if (this.options = t,
            this.loose = !!t.loose,
            this.includePrerelease = !!t.includePrerelease,
            this.raw = e.trim().split(/\s+/).join(" "),
            this.set = this.raw.split("||").map((function(e) {
                return this.parseRange(e.trim())
            }
            ), this).filter((function(e) {
                return e.length
            }
            )),
            !this.set.length)
                throw new TypeError("Invalid SemVer Range: " + this.raw);
            this.format()
        }
        function z(e, t) {
            for (var r = !0, o = e.slice(), n = o.pop(); r && o.length; )
                r = o.every((function(e) {
                    return n.intersects(e, t)
                }
                )),
                n = o.pop();
            return r
        }
        function k(e) {
            return !e || "x" === e.toLowerCase() || "*" === e
        }
        function D(e, t, r, o, n, s, i, a, c, l, p, u, h) {
            return ((t = k(r) ? "" : k(o) ? ">=" + r + ".0.0" : k(n) ? ">=" + r + "." + o + ".0" : ">=" + t) + " " + (a = k(c) ? "" : k(l) ? "<" + (+c + 1) + ".0.0" : k(p) ? "<" + c + "." + (+l + 1) + ".0" : u ? "<=" + c + "." + l + "." + p + "-" + u : "<=" + a)).trim()
        }
        function y(e, t, o) {
            for (var n = 0; n < e.length; n++)
                if (!e[n].test(t))
                    return !1;
            if (t.prerelease.length && !o.includePrerelease) {
                for (n = 0; n < e.length; n++)
                    if (r(e[n].semver),
                    e[n].semver !== A && e[n].semver.prerelease.length > 0) {
                        var s = e[n].semver;
                        if (s.major === t.major && s.minor === t.minor && s.patch === t.patch)
                            return !0
                    }
                return !1
            }
            return !0
        }
        function C(e, t, r) {
            try {
                t = new x(t,r)
            } catch (o) {
                return !1
            }
            return t.test(e)
        }
        function M(e, t, r, o) {
            var n, s, i, a, c;
            switch (e = new m(e,o),
            t = new x(t,o),
            r) {
            case ">":
                n = I,
                s = L,
                i = v,
                a = ">",
                c = ">=";
                break;
            case "<":
                n = v,
                s = T,
                i = I,
                a = "<",
                c = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (C(e, t, o))
                return !1;
            for (var l = 0; l < t.set.length; ++l) {
                var p = t.set[l]
                  , u = null
                  , h = null;
                if (p.forEach((function(e) {
                    e.semver === A && (e = new S(">=0.0.0")),
                    u = u || e,
                    h = h || e,
                    n(e.semver, u.semver, o) ? u = e : i(e.semver, h.semver, o) && (h = e)
                }
                )),
                u.operator === a || u.operator === c)
                    return !1;
                if ((!h.operator || h.operator === a) && s(e, h.semver))
                    return !1;
                if (h.operator === c && i(e, h.semver))
                    return !1
            }
            return !0
        }
        S.prototype.parse = function(e) {
            var t = this.options.loose ? a[l.COMPARATORLOOSE] : a[l.COMPARATOR]
              , r = e.match(t);
            if (!r)
                throw new TypeError("Invalid comparator: " + e);
            this.operator = void 0 !== r[1] ? r[1] : "",
            "=" === this.operator && (this.operator = ""),
            r[2] ? this.semver = new m(r[2],this.options.loose) : this.semver = A
        }
        ,
        S.prototype.toString = function() {
            return this.value
        }
        ,
        S.prototype.test = function(e) {
            if (r("Comparator.test", e, this.options.loose),
            this.semver === A || e === A)
                return !0;
            if ("string" == typeof e)
                try {
                    e = new m(e,this.options)
                } catch (t) {
                    return !1
                }
            return N(e, this.operator, this.semver, this.options)
        }
        ,
        S.prototype.intersects = function(e, t) {
            if (!(e instanceof S))
                throw new TypeError("a Comparator is required");
            var r;
            if (t && "object" == typeof t || (t = {
                loose: !!t,
                includePrerelease: !1
            }),
            "" === this.operator)
                return "" === this.value || (r = new x(e.value,t),
                C(this.value, r, t));
            if ("" === e.operator)
                return "" === e.value || (r = new x(this.value,t),
                C(e.semver, r, t));
            var o = !(">=" !== this.operator && ">" !== this.operator || ">=" !== e.operator && ">" !== e.operator)
              , n = !("<=" !== this.operator && "<" !== this.operator || "<=" !== e.operator && "<" !== e.operator)
              , s = this.semver.version === e.semver.version
              , i = !(">=" !== this.operator && "<=" !== this.operator || ">=" !== e.operator && "<=" !== e.operator)
              , a = N(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator)
              , c = N(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
            return o || n || s && i || a || c
        }
        ,
        t.Range = x,
        x.prototype.format = function() {
            return this.range = this.set.map((function(e) {
                return e.join(" ").trim()
            }
            )).join("||").trim(),
            this.range
        }
        ,
        x.prototype.toString = function() {
            return this.range
        }
        ,
        x.prototype.parseRange = function(e) {
            var t = this.options.loose
              , o = t ? a[l.HYPHENRANGELOOSE] : a[l.HYPHENRANGE];
            e = e.replace(o, D),
            r("hyphen replace", e),
            e = e.replace(a[l.COMPARATORTRIM], "$1$2$3"),
            r("comparator trim", e, a[l.COMPARATORTRIM]),
            e = (e = (e = e.replace(a[l.TILDETRIM], "$1~")).replace(a[l.CARETTRIM], "$1^")).split(/\s+/).join(" ");
            var n = t ? a[l.COMPARATORLOOSE] : a[l.COMPARATOR]
              , s = e.split(" ").map((function(e) {
                return function(e, t) {
                    return r("comp", e, t),
                    e = function(e, t) {
                        return e.trim().split(/\s+/).map((function(e) {
                            return function(e, t) {
                                r("caret", e, t);
                                var o = t.loose ? a[l.CARETLOOSE] : a[l.CARET];
                                return e.replace(o, (function(t, o, n, s, i) {
                                    var a;
                                    return r("caret", e, t, o, n, s, i),
                                    k(o) ? a = "" : k(n) ? a = ">=" + o + ".0.0 <" + (+o + 1) + ".0.0" : k(s) ? a = "0" === o ? ">=" + o + "." + n + ".0 <" + o + "." + (+n + 1) + ".0" : ">=" + o + "." + n + ".0 <" + (+o + 1) + ".0.0" : i ? (r("replaceCaret pr", i),
                                    a = "0" === o ? "0" === n ? ">=" + o + "." + n + "." + s + "-" + i + " <" + o + "." + n + "." + (+s + 1) : ">=" + o + "." + n + "." + s + "-" + i + " <" + o + "." + (+n + 1) + ".0" : ">=" + o + "." + n + "." + s + "-" + i + " <" + (+o + 1) + ".0.0") : (r("no pr"),
                                    a = "0" === o ? "0" === n ? ">=" + o + "." + n + "." + s + " <" + o + "." + n + "." + (+s + 1) : ">=" + o + "." + n + "." + s + " <" + o + "." + (+n + 1) + ".0" : ">=" + o + "." + n + "." + s + " <" + (+o + 1) + ".0.0"),
                                    r("caret return", a),
                                    a
                                }
                                ))
                            }(e, t)
                        }
                        )).join(" ")
                    }(e, t),
                    r("caret", e),
                    e = function(e, t) {
                        return e.trim().split(/\s+/).map((function(e) {
                            return function(e, t) {
                                var o = t.loose ? a[l.TILDELOOSE] : a[l.TILDE];
                                return e.replace(o, (function(t, o, n, s, i) {
                                    var a;
                                    return r("tilde", e, t, o, n, s, i),
                                    k(o) ? a = "" : k(n) ? a = ">=" + o + ".0.0 <" + (+o + 1) + ".0.0" : k(s) ? a = ">=" + o + "." + n + ".0 <" + o + "." + (+n + 1) + ".0" : i ? (r("replaceTilde pr", i),
                                    a = ">=" + o + "." + n + "." + s + "-" + i + " <" + o + "." + (+n + 1) + ".0") : a = ">=" + o + "." + n + "." + s + " <" + o + "." + (+n + 1) + ".0",
                                    r("tilde return", a),
                                    a
                                }
                                ))
                            }(e, t)
                        }
                        )).join(" ")
                    }(e, t),
                    r("tildes", e),
                    e = function(e, t) {
                        return r("replaceXRanges", e, t),
                        e.split(/\s+/).map((function(e) {
                            return function(e, t) {
                                e = e.trim();
                                var o = t.loose ? a[l.XRANGELOOSE] : a[l.XRANGE];
                                return e.replace(o, (function(o, n, s, i, a, c) {
                                    r("xRange", e, o, n, s, i, a, c);
                                    var l = k(s)
                                      , p = l || k(i)
                                      , u = p || k(a)
                                      , h = u;
                                    return "=" === n && h && (n = ""),
                                    c = t.includePrerelease ? "-0" : "",
                                    l ? o = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && h ? (p && (i = 0),
                                    a = 0,
                                    ">" === n ? (n = ">=",
                                    p ? (s = +s + 1,
                                    i = 0,
                                    a = 0) : (i = +i + 1,
                                    a = 0)) : "<=" === n && (n = "<",
                                    p ? s = +s + 1 : i = +i + 1),
                                    o = n + s + "." + i + "." + a + c) : p ? o = ">=" + s + ".0.0" + c + " <" + (+s + 1) + ".0.0" + c : u && (o = ">=" + s + "." + i + ".0" + c + " <" + s + "." + (+i + 1) + ".0" + c),
                                    r("xRange return", o),
                                    o
                                }
                                ))
                            }(e, t)
                        }
                        )).join(" ")
                    }(e, t),
                    r("xrange", e),
                    e = function(e, t) {
                        return r("replaceStars", e, t),
                        e.trim().replace(a[l.STAR], "")
                    }(e, t),
                    r("stars", e),
                    e
                }(e, this.options)
            }
            ), this).join(" ").split(/\s+/);
            return this.options.loose && (s = s.filter((function(e) {
                return !!e.match(n)
            }
            ))),
            s = s.map((function(e) {
                return new S(e,this.options)
            }
            ), this)
        }
        ,
        x.prototype.intersects = function(e, t) {
            if (!(e instanceof x))
                throw new TypeError("a Range is required");
            return this.set.some((function(r) {
                return z(r, t) && e.set.some((function(e) {
                    return z(e, t) && r.every((function(r) {
                        return e.every((function(e) {
                            return r.intersects(e, t)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        t.toComparators = function(e, t) {
            return new x(e,t).set.map((function(e) {
                return e.map((function(e) {
                    return e.value
                }
                )).join(" ").trim().split(" ")
            }
            ))
        }
        ,
        x.prototype.test = function(e) {
            if (!e)
                return !1;
            if ("string" == typeof e)
                try {
                    e = new m(e,this.options)
                } catch (r) {
                    return !1
                }
            for (var t = 0; t < this.set.length; t++)
                if (y(this.set[t], e, this.options))
                    return !0;
            return !1
        }
        ,
        t.satisfies = C,
        t.maxSatisfying = function(e, t, r) {
            var o = null
              , n = null;
            try {
                var s = new x(t,r)
            } catch (i) {
                return null
            }
            return e.forEach((function(e) {
                s.test(e) && (o && -1 !== n.compare(e) || (n = new m(o = e,r)))
            }
            )),
            o
        }
        ,
        t.minSatisfying = function(e, t, r) {
            var o = null
              , n = null;
            try {
                var s = new x(t,r)
            } catch (i) {
                return null
            }
            return e.forEach((function(e) {
                s.test(e) && (o && 1 !== n.compare(e) || (n = new m(o = e,r)))
            }
            )),
            o
        }
        ,
        t.minVersion = function(e, t) {
            e = new x(e,t);
            var r = new m("0.0.0");
            if (e.test(r))
                return r;
            if (r = new m("0.0.0-0"),
            e.test(r))
                return r;
            r = null;
            for (var o = 0; o < e.set.length; ++o) {
                e.set[o].forEach((function(e) {
                    var t = new m(e.semver.version);
                    switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                        t.raw = t.format();
                    case "":
                    case ">=":
                        r && !I(r, t) || (r = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error("Unexpected operation: " + e.operator)
                    }
                }
                ))
            }
            if (r && e.test(r))
                return r;
            return null
        }
        ,
        t.validRange = function(e, t) {
            try {
                return new x(e,t).range || "*"
            } catch (r) {
                return null
            }
        }
        ,
        t.ltr = function(e, t, r) {
            return M(e, t, "<", r)
        }
        ,
        t.gtr = function(e, t, r) {
            return M(e, t, ">", r)
        }
        ,
        t.outside = M,
        t.prerelease = function(e, t) {
            var r = d(e, t);
            return r && r.prerelease.length ? r.prerelease : null
        }
        ,
        t.intersects = function(e, t, r) {
            return e = new x(e,r),
            t = new x(t,r),
            e.intersects(t)
        }
        ,
        t.coerce = function(e, t) {
            if (e instanceof m)
                return e;
            "number" == typeof e && (e = String(e));
            if ("string" != typeof e)
                return null;
            var r = null;
            if ((t = t || {}).rtl) {
                for (var o; (o = a[l.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); )
                    r && o.index + o[0].length === r.index + r[0].length || (r = o),
                    a[l.COERCERTL].lastIndex = o.index + o[1].length + o[2].length;
                a[l.COERCERTL].lastIndex = -1
            } else
                r = e.match(a[l.COERCE]);
            if (null === r)
                return null;
            return d(r[2] + "." + (r[3] || "0") + "." + (r[4] || "0"), t)
        }
    },
    55169: function(e, t, r) {
        const o = r(56691)
          , n = e => {
            for (const t of o) {
                if ([t.name, t.coin_name, t.coin_label, t.exodus_name, t.shortcut].filter(Boolean).map((e => e.toLowerCase())).includes(e.toLowerCase()))
                    return t
            }
            throw new Error(`not a supported coin: ${e}`)
        }
        ;
        e.exports = {
            findCoin: n,
            isSegwit: e => !!n(e).segwit
        }
    },
    14304: function(e, t, r) {
        const o = r(61870).gte
          , n = r(56691)
          , s = {
            "Safe 5": "2.7.2",
            "Safe 3": "2.6.3",
            T: "2.5.2",
            1: "1.11.1"
        }
          , i = {
            "Safe 5": n.filter((e => e.support.trezor3 && o(s["Safe 5"], e.support.trezor3))).map((e => e.exodus_name)),
            "Safe 3": n.filter((e => e.support.trezor3 && o(s["Safe 3"], e.support.trezor3))).map((e => e.exodus_name)),
            T: n.filter((e => e.support.trezor2 && o(s.T, e.support.trezor2))).map((e => e.exodus_name)),
            1: n.filter((e => e.support.trezor1 && o(s[1], e.support.trezor1))).map((e => e.exodus_name))
        }
          , a = ["Safe 5", "Safe 3", "T", "1"]
          , c = n.map((e => e.exodus_name));
        e.exports = {
            assets: c,
            MINIMUM_FIRMWARE_VERSIONS: s,
            LATEST_FIRMWARE_VERSIONS: {
                "Safe 5": "2.8.7",
                "Safe 3": "2.8.7",
                T: "2.8.7",
                1: "1.12.1"
            },
            ASSETS_BY_MODEL: i,
            SUPPORTED_MODELS: a,
            isSupportedModel: e => a.includes(e),
            isSupportedFirmware: ({model: e, major_version: t, minor_version: r, patch_version: n}) => o([t, r, n].join("."), s[e])
        }
    },
    70809: function(e, t, r) {
        const o = r(14304)
          , n = r(55169)
          , s = r(86172);
        e.exports = {
            constants: o,
            coinUtil: n,
            createMeta: s
        }
    },
    86172: function(e, t, r) {
        const o = r(14304)
          , n = r(55169);
        e.exports = e => {
            const t = Object.keys(e).filter((t => "ETHEREUM_ERC20" === e[t].assetType))
              , r = ["bitcoin", "ethereum", "dogecoin", "litecoin", "bcash", "ethereumclassic", "zcash", "stellar", ...t].sort()
              , s = [...r, "dash", "decred", "digibyte"]
              , i = {
                "Safe 5": [...r, "cardano", "monero", "ripple"].sort(),
                "Safe 3": [...r, "cardano", "monero", "ripple"].sort(),
                T: [...s, "cardano", "monero", "ripple"].sort(),
                1: [...s]
            }
              , a = {
                "Safe 5": [...o.ASSETS_BY_MODEL["Safe 5"], ...t],
                "Safe 3": [...o.ASSETS_BY_MODEL["Safe 3"], ...t],
                T: [...o.ASSETS_BY_MODEL.T, ...t],
                1: [...o.ASSETS_BY_MODEL[1], ...t]
            }
              , c = (l = Object.values(i).flat(),
            [...new Set(l)]).sort();
            var l;
            const p = ( (e, t) => {
                const r = new Set(t);
                return e.filter((e => !r.has(e)))
            }
            )(i.T, i[1]);
            return {
                isSupportedFirmware: o.isSupportedFirmware,
                SUPPORTED_MODELS: o.SUPPORTED_MODELS,
                BASE_SUPPORTED_ASSETS: r,
                ASSETS_BY_MODEL: i,
                FIRMWARE_ASSETS_BY_MODEL: a,
                SUPPORTED_ASSETS: c,
                SUPPORTED_ONLY_BY_MODEL_T: p,
                FUTURE_SUPPORTED_ASSETS: ["tezos", "ravencoin"],
                isSegwit: t => "ETHEREUM_ERC20" !== e[t].assetType && n.isSegwit(t),
                isBip84: e => ["bitcoin", "litecoin"].includes(e),
                isSupportedByTrezor: e => c.includes(e),
                isSupportedOnlyByModelT: e => p.includes(e)
            }
        }
    },
    43349: function(e) {
        function t(e, t) {
            if (!e)
                throw new Error(t || "Assertion failed")
        }
        e.exports = t,
        t.equal = function(e, t, r) {
            if (e != t)
                throw new Error(r || "Assertion failed: " + e + " != " + t)
        }
    },
    6469: function(e, t, r) {
        "use strict";
        var o = r(78227)
          , n = r(2360)
          , s = r(24913).f
          , i = o("unscopables")
          , a = Array.prototype;
        void 0 === a[i] && s(a, i, {
            configurable: !0,
            value: n(null)
        }),
        e.exports = function(e) {
            a[i][e] = !0
        }
    },
    20397: function(e, t, r) {
        "use strict";
        var o = r(97751);
        e.exports = o("document", "documentElement")
    },
    2360: function(e, t, r) {
        "use strict";
        var o, n = r(28551), s = r(96801), i = r(88727), a = r(30421), c = r(20397), l = r(4055), p = r(66119), u = "prototype", h = "script", f = p("IE_PROTO"), _ = function() {}, E = function(e) {
            return "<" + h + ">" + e + "</" + h + ">"
        }, d = function(e) {
            e.write(E("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, m = function() {
            try {
                o = new ActiveXObject("htmlfile")
            } catch (s) {}
            var e, t, r;
            m = "undefined" != typeof document ? document.domain && o ? d(o) : (t = l("iframe"),
            r = "java" + h + ":",
            t.style.display = "none",
            c.appendChild(t),
            t.src = String(r),
            (e = t.contentWindow.document).open(),
            e.write(E("document.F=Object")),
            e.close(),
            e.F) : d(o);
            for (var n = i.length; n--; )
                delete m[u][i[n]];
            return m()
        };
        a[f] = !0,
        e.exports = Object.create || function(e, t) {
            var r;
            return null !== e ? (_[u] = n(e),
            r = new _,
            _[u] = null,
            r[f] = e) : r = m(),
            void 0 === t ? r : s.f(r, t)
        }
    },
    96801: function(e, t, r) {
        "use strict";
        var o = r(43724)
          , n = r(48686)
          , s = r(24913)
          , i = r(28551)
          , a = r(25397)
          , c = r(71072);
        t.f = o && !n ? Object.defineProperties : function(e, t) {
            i(e);
            for (var r, o = a(t), n = c(t), l = n.length, p = 0; l > p; )
                s.f(e, r = n[p++], o[r]);
            return e
        }
    },
    71072: function(e, t, r) {
        "use strict";
        var o = r(61828)
          , n = r(88727);
        e.exports = Object.keys || function(e) {
            return o(e, n)
        }
    },
    93514: function(e, t, r) {
        "use strict";
        r(6469)("flat")
    },
    56691: function(e) {
        "use strict";
        e.exports = JSON.parse('[{"address_type":0,"address_type_p2sh":5,"bech32_prefix":"bc","bitcoin_like":true,"bip115":false,"bitcore":[],"blockbook":["https://btc1.trezor.io","https://btc2.trezor.io","https://btc3.trezor.io","https://btc4.trezor.io","https://btc5.trezor.io"],"blocktime_seconds":600,"cashaddr_prefix":null,"coin_label":"Bitcoin","exodus_name":"bitcoin","coin_name":"Bitcoin","coin_shortcut":"BTC","curve_name":"secp256k1","decred":false,"default_fee_b":{"Economy":70,"High":200,"Low":10,"Normal":140},"dust_limit":546,"force_bip143":false,"fork_id":null,"hash_genesis_block":"000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f","max_address_length":34,"maxfee_kb":2000000,"min_address_length":27,"minfee_kb":1000,"name":"Bitcoin","segwit":true,"shortcut":"BTC","signed_message_header":"Bitcoin Signed Message:\\n","slip44":0,"support":{"connect":true,"trezor1":"1.5.2","trezor2":"2.0.5","trezor3":"2.6.2","webwallet":true},"xprv_magic":76066276,"xpub_magic":76067358,"xpub_magic_segwit_native":78792518,"xpub_magic_segwit_p2sh":77429938},{"address_type":0,"address_type_p2sh":5,"bech32_prefix":null,"bip115":false,"bitcore":[],"blockbook":["https://bch1.trezor.io","https://bch2.trezor.io","https://bch3.trezor.io","https://bch4.trezor.io","https://bch5.trezor.io"],"blocktime_seconds":600,"cashaddr_prefix":"bitcoincash","coin_label":"Bitcoin Cash","coin_name":"Bcash","bitcoin_like":true,"exodus_name":"bcash","coin_shortcut":"BCH","curve_name":"secp256k1","decred":false,"default_fee_b":{"Economy":70,"High":200,"Low":10,"Normal":140},"dust_limit":546,"force_bip143":true,"fork_id":0,"hash_genesis_block":"000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f","max_address_length":34,"maxfee_kb":500000,"min_address_length":27,"minfee_kb":1000,"name":"Bitcoin Cash","segwit":false,"shortcut":"BCH","signed_message_header":"Bitcoin Signed Message:\\n","slip44":145,"support":{"connect":true,"trezor1":"1.6.2","trezor2":"2.0.7","trezor3":"2.6.2","webwallet":true},"xprv_magic":76066276,"xpub_magic":76067358,"xpub_magic_segwit_native":null,"xpub_magic_segwit_p2sh":null},{"address_type":76,"address_type_p2sh":16,"bech32_prefix":null,"bip115":false,"bitcore":[],"blockbook":["https://dash1.trezor.io","https://dash2.trezor.io","https://dash3.trezor.io","https://dash4.trezor.io","https://dash5.trezor.io"],"blocktime_seconds":150,"cashaddr_prefix":null,"coin_label":"Dash","bitcoin_like":true,"coin_name":"Dash","exodus_name":"dash","coin_shortcut":"DASH","curve_name":"secp256k1","decred":false,"default_fee_b":{"Normal":10},"dust_limit":5460,"force_bip143":false,"fork_id":null,"hash_genesis_block":"00000ffd590b1485b3caadc19b22e6379c733355108f107a430458cdf3407ab6","max_address_length":34,"maxfee_kb":100000,"min_address_length":27,"minfee_kb":1000,"name":"Dash","segwit":false,"shortcut":"DASH","signed_message_header":"DarkCoin Signed Message:\\n","slip44":5,"support":{"connect":true,"trezor1":"1.5.2","trezor2":"2.0.5","trezor3":false,"webwallet":true},"xprv_magic":50221816,"xpub_magic":50221772,"xpub_magic_segwit_native":null,"xpub_magic_segwit_p2sh":null},{"address_type":30,"address_type_p2sh":22,"bech32_prefix":null,"bip115":false,"bitcore":[],"blockbook":["https://doge1.trezor.io","https://doge2.trezor.io","https://doge3.trezor.io","https://doge4.trezor.io","https://doge5.trezor.io"],"blocktime_seconds":60,"cashaddr_prefix":null,"coin_label":"Dogecoin","bitcoin_like":true,"coin_name":"Dogecoin","exodus_name":"dogecoin","coin_shortcut":"DOGE","curve_name":"secp256k1","decred":false,"default_fee_b":{"Normal":100000},"dust_limit":10000000,"force_bip143":false,"fork_id":null,"hash_genesis_block":"1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691","max_address_length":34,"maxfee_kb":1000000000,"min_address_length":27,"minfee_kb":1000,"name":"Dogecoin","segwit":false,"shortcut":"DOGE","signed_message_header":"Dogecoin Signed Message:\\n","slip44":3,"support":{"connect":true,"trezor1":"1.5.2","trezor2":"2.0.5","trezor3":"2.6.2","webwallet":true},"xprv_magic":49988504,"xpub_magic":49990397,"xpub_magic_segwit_native":null,"xpub_magic_segwit_p2sh":null},{"address_type":30,"address_type_p2sh":63,"bip115":false,"coin_label":"DigiByte","coin_name":"DigiByte","name":"DigiByte","bech32_prefix":"dgb","bitcoin_like":true,"exodus_name":"digibyte","decred":false,"coin_shortcut":"DGB","shortcut":"DGB","support":{"connect":true,"trezor1":"1.6.3","trezor2":"2.0.7","trezor3":false,"webwallet":true},"curve_name":"secp256k1","segwit":true},{"coin_label":"Monero","coin_name":"Monero","name":"Monero","coin_shortcut":"XMR","shortcut":"XMR","exodus_name":"monero","slip44":128,"curve_name":"ed25519","decimals":12,"support":{"connect":false,"trezor1":false,"trezor2":"2.0.8","trezor3":"2.6.2","webwallet":false}},{"address_type":1855,"address_type_p2sh":1818,"bip115":false,"coin_label":"Decred","coin_name":"Decred","name":"Decred","bech32_prefix":null,"bitcoin_like":true,"exodus_name":"decred","decred":true,"coin_shortcut":"DCR","support":{"connect":true,"trezor1":"1.8.0","trezor2":"2.1.0","trezor3":false,"webwallet":false},"shortcut":"DCR","curve_name":"secp256k1-decred","segwit":false},{"address_type":48,"address_type_p2sh":50,"bech32_prefix":"ltc","bip115":false,"bitcore":[],"blockbook":["https://ltc1.trezor.io","https://ltc2.trezor.io","https://ltc3.trezor.io","https://ltc4.trezor.io","https://ltc5.trezor.io"],"blocktime_seconds":150,"cashaddr_prefix":null,"coin_label":"Litecoin","coin_name":"Litecoin","bitcoin_like":true,"exodus_name":"litecoin","coin_shortcut":"LTC","curve_name":"secp256k1","decred":false,"default_fee_b":{"Normal":1000},"dust_limit":546,"force_bip143":false,"fork_id":null,"hash_genesis_block":"12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2","max_address_length":34,"maxfee_kb":40000000,"min_address_length":27,"minfee_kb":100000,"name":"Litecoin","segwit":true,"shortcut":"LTC","signed_message_header":"Litecoin Signed Message:\\n","slip44":2,"support":{"connect":true,"trezor1":"1.5.2","trezor2":"2.0.5","trezor3":"2.6.2","webwallet":true},"xprv_magic":27106558,"xpub_magic":27108450,"xpub_magic_segwit_native":null,"xpub_magic_segwit_p2sh":28471030},{"address_type":71,"address_type_p2sh":5,"bech32_prefix":"vtc","bip115":false,"bitcore":[],"blockbook":["https://vtc1.trezor.io","https://vtc2.trezor.io","https://vtc3.trezor.io","https://vtc4.trezor.io","https://vtc5.trezor.io"],"blocktime_seconds":150,"cashaddr_prefix":null,"bitcoin_like":true,"coin_label":"Vertcoin","coin_name":"Vertcoin","exodus_name":"vertcoin","coin_shortcut":"VTC","curve_name":"secp256k1","decred":false,"default_fee_b":{"Normal":1000},"dust_limit":54600,"force_bip143":false,"fork_id":null,"hash_genesis_block":"4d96a915f49d40b1e5c2844d1ee2dccb90013a990ccea12c492d22110489f0c4","max_address_length":34,"maxfee_kb":40000000,"min_address_length":27,"minfee_kb":100000,"name":"Vertcoin","segwit":true,"shortcut":"VTC","signed_message_header":"Vertcoin Signed Message:\\n","slip44":28,"support":{"connect":true,"trezor1":"1.6.1","trezor2":"2.0.5","trezor3":false,"webwallet":true},"xprv_magic":76066276,"xpub_magic":76067358,"xpub_magic_segwit_native":null,"xpub_magic_segwit_p2sh":77429938},{"address_type":7352,"address_type_p2sh":7357,"bech32_prefix":null,"bip115":false,"bitcore":[],"blockbook":["https://zec1.trezor.io","https://zec2.trezor.io","https://zec3.trezor.io","https://zec4.trezor.io","https://zec5.trezor.io"],"blocktime_seconds":150,"cashaddr_prefix":null,"coin_label":"Zcash","bitcoin_like":true,"exodus_name":"zcash","coin_name":"Zcash","coin_shortcut":"ZEC","curve_name":"secp256k1","decred":false,"default_fee_b":{"Normal":10},"dust_limit":546,"force_bip143":false,"fork_id":null,"hash_genesis_block":"00040fe8ec8471911baa1db1266ea15dd06b4a8a5c453883c000b031973dce08","max_address_length":95,"maxfee_kb":1000000,"min_address_length":35,"minfee_kb":1000,"name":"Zcash","segwit":false,"shortcut":"ZEC","signed_message_header":"Zcash Signed Message:\\n","slip44":133,"support":{"connect":true,"trezor1":"1.6.2","trezor2":"2.0.7","trezor3":"2.6.2","webwallet":true},"xprv_magic":76066276,"xpub_magic":76067358,"xpub_magic_segwit_native":null,"xpub_magic_segwit_p2sh":null},{"address_type":30,"address_type_p2sh":22,"bech32_prefix":null,"bip115":false,"bitcore":[],"blockbook":["https://doge1.trezor.io","https://doge2.trezor.io","https://doge3.trezor.io","https://doge4.trezor.io","https://doge5.trezor.io"],"blocktime_seconds":60,"cashaddr_prefix":null,"coin_label":"Dogecoin","coin_name":"Dogecoin","coin_shortcut":"DOGE","exodus_name":"dogecoin","consensus_branch_id":null,"curve_name":"secp256k1","decred":false,"default_fee_b":{"Normal":100000},"dust_limit":10000000,"force_bip143":false,"fork_id":null,"hash_genesis_block":"1a91e3dace36e2be3bf030a65679fe821aa1d6ef92e7c9902eb318182c355691","max_address_length":34,"maxfee_kb":1000000000,"min_address_length":27,"minfee_kb":1000,"name":"Dogecoin","segwit":false,"shortcut":"DOGE","signed_message_header":"Dogecoin Signed Message:\\n","slip44":3,"support":{"connect":true,"trezor1":"1.5.2","trezor2":"2.0.5","trezor3":"2.6.2","webwallet":true},"xprv_magic":49988504,"xpub_magic":49990397,"xpub_magic_segwit_native":null,"xpub_magic_segwit_p2sh":null},{"address_type":71,"address_type_p2sh":5,"bech32_prefix":"vtc","bip115":false,"bitcore":[],"blockbook":["https://vtc1.trezor.io","https://vtc2.trezor.io","https://vtc3.trezor.io","https://vtc4.trezor.io","https://vtc5.trezor.io"],"blocktime_seconds":150,"cashaddr_prefix":null,"coin_label":"Vertcoin","coin_name":"Vertcoin","coin_shortcut":"VTC","exodus_name":"vertcoin","consensus_branch_id":null,"curve_name":"secp256k1","decred":false,"default_fee_b":{"Normal":1000},"dust_limit":54600,"force_bip143":false,"fork_id":null,"hash_genesis_block":"4d96a915f49d40b1e5c2844d1ee2dccb90013a990ccea12c492d22110489f0c4","max_address_length":34,"maxfee_kb":40000000,"min_address_length":27,"minfee_kb":100000,"name":"Vertcoin","segwit":true,"shortcut":"VTC","signed_message_header":"Vertcoin Signed Message:\\n","slip44":28,"support":{"connect":true,"trezor1":"1.6.1","trezor2":"2.0.5","trezor3":false,"webwallet":true},"xprv_magic":76066276,"xpub_magic":76067358,"xpub_magic_segwit_native":78792518,"xpub_magic_segwit_p2sh":77429938},{"address_type":60,"address_type_p2sh":122,"bech32_prefix":null,"bip115":false,"bitcore":["https://ravencoin.network"],"blockbook":[],"blocktime_seconds":60,"cashaddr_prefix":null,"coin_label":"Ravencoin","coin_name":"Ravencoin","coin_shortcut":"RVN","exodus_name":"ravencoin","consensus_branch_id":null,"curve_name":"secp256k1","decred":false,"default_fee_b":{"Low":10},"dust_limit":546,"force_bip143":false,"fork_id":null,"hash_genesis_block":"0000006b444bc2f2ffe627be9d9e7e7a0730000870ef6eb6da46c8eae389df90","max_address_length":34,"maxfee_kb":2000000,"min_address_length":27,"minfee_kb":1000,"name":"Ravencoin","segwit":false,"shortcut":"RVN","signed_message_header":"Ravencoin Signed Message:\\n","slip44":175,"support":{"connect":true,"trezor1":"1.7.2","trezor2":"2.0.10","trezor3":"2.6.2","webwallet":true},"xprv_magic":76066276,"xpub_magic":76067358,"xpub_magic_segwit_native":null,"xpub_magic_segwit_p2sh":null},{"blockbook":["https://eth1.trezor.io","https://eth2.trezor.io"],"chain":"eth","chain_id":1,"name":"Ethereum","exodus_name":"ethereum","ethereum_like":true,"rskip60":false,"shortcut":"ETH","slip44":60,"support":{"connect":true,"trezor1":"1.6.2","trezor2":"2.0.7","trezor3":"2.6.2","webwallet":true},"url":"https://www.ethereum.org"},{"blockbook":["https://etc1.trezor.io","https://etc2.trezor.io"],"chain":"etc","chain_id":61,"name":"Ethereum Classic","exodus_name":"ethereumclassic","ethereum_like":true,"rskip60":false,"shortcut":"ETC","slip44":61,"support":{"connect":true,"trezor1":"1.6.2","trezor2":"2.0.7","trezor3":"2.6.2","webwallet":true},"url":"https://ethereumclassic.github.io"},{"curve":"ed25519","name":"Lisk","exodus_name":"lisk","shortcut":"LSK","slip44":134,"support":{"connect":true,"trezor1":"1.7.1","trezor2":"2.0.7","trezor3":false,"webwallet":false},"wallet":{}},{"curve":"ed25519","exodus_name":"stellar","name":"Stellar","shortcut":"XLM","slip44":148,"support":{"connect":true,"trezor1":"1.7.1","trezor2":"2.0.8","trezor3":"2.6.2","webwallet":false},"wallet":{"Account Viewer":"https://trezor.io/stellar/"}},{"curve":"secp256k1","name":"Ripple","exodus_name":"ripple","shortcut":"XRP","slip44":144,"support":{"connect":true,"trezor1":false,"trezor2":"2.0.8","trezor3":"2.6.2","webwallet":false},"wallet":{}},{"curve":"ed25519","decimals":6,"name":"Tezos","exodus_name":"tezos","shortcut":"XTZ","slip44":1729,"support":{"connect":true,"trezor1":false,"trezor2":"2.0.8","trezor3":"2.6.2","webwallet":false}},{"divisibility":6,"mosaic":"xem","name":"NEM","exodus_name":"nem","namespace":"nem","shortcut":"XEM","support":{"connect":true,"trezor1":"1.6.2","trezor2":"2.0.7","trezor3":false,"webwallet":false},"ticker":"XEM"},{"blockchain_link":{"type":"blockfrost","url":["wss://trezor-cardano-mainnet.blockfrost.io"]},"links":{"Homepage":"https://www.cardano.org","Github":"https://github.com/input-output-hk/cardano-node"},"bip43Path":"m/1852\'/1815\'/i\'","curve":"ed25519","decimals":6,"name":"Cardano","exodus_name":"cardano","shortcut":"ADA","slip44":1815,"support":{"connect":true,"trezor1":false,"trezor2":"2.0.8","trezor3":"2.6.2","webwallet":false}}]')
    }
}]);
//# sourceMappingURL=9890-b65b4b17ee017f953dd8-v2.js.map

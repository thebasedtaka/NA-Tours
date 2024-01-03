(()=>{
    var e, t, r, n, o, i, s = globalThis;
    function a(e, t, r, n) {
        Object.defineProperty(e, t, {
            get: r,
            set: n,
            enumerable: !0,
            configurable: !0
        });
    }
    function u(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }
    let { toString: l } = Object.prototype, { getPrototypeOf: f } = Object, c = (e = Object.create(null), (t)=>{
        let r = l.call(t);
        return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    }), h = (e)=>(e = e.toLowerCase(), (t)=>c(t) === e), d = (e)=>(t)=>typeof t === e, { isArray: p } = Array, y = d("undefined"), m = h("ArrayBuffer"), g = d("string"), b = d("function"), w = d("number"), E = (e)=>null !== e && "object" == typeof e, v = (e)=>{
        if ("object" !== c(e)) return !1;
        let t = f(e);
        return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
    }, A = h("Date"), B = h("File"), S = h("Blob"), O = h("FileList"), R = h("URLSearchParams");
    function T(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, o;
        if (null != e) {
            if ("object" != typeof e && (e = [
                e
            ]), p(e)) for(n = 0, o = e.length; n < o; n++)t.call(null, e[n], n, e);
            else {
                let o;
                let i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
                for(n = 0; n < s; n++)o = i[n], t.call(null, e[o], o, e);
            }
        }
    }
    function I(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e), o = n.length;
        for(; o-- > 0;)if (t === (r = n[o]).toLowerCase()) return r;
        return null;
    }
    let U = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : s, L = (e)=>!y(e) && e !== U, x = (t = "undefined" != typeof Uint8Array && f(Uint8Array), (e)=>t && e instanceof t), C = h("HTMLFormElement"), N = (({ hasOwnProperty: e })=>(t, r)=>e.call(t, r))(Object.prototype), _ = h("RegExp"), j = (e, t)=>{
        let r = Object.getOwnPropertyDescriptors(e), n = {};
        T(r, (r, o)=>{
            let i;
            !1 !== (i = t(r, o, e)) && (n[o] = i || r);
        }), Object.defineProperties(e, n);
    }, P = "abcdefghijklmnopqrstuvwxyz", k = "0123456789", F = {
        DIGIT: k,
        ALPHA: P,
        ALPHA_DIGIT: P + P.toUpperCase() + k
    }, D = h("AsyncFunction");
    var q = {
        isArray: p,
        isArrayBuffer: m,
        isBuffer: function(e) {
            return null !== e && !y(e) && null !== e.constructor && !y(e.constructor) && b(e.constructor.isBuffer) && e.constructor.isBuffer(e);
        },
        isFormData: (e)=>{
            let t;
            return e && ("function" == typeof FormData && e instanceof FormData || b(e.append) && ("formdata" === (t = c(e)) || "object" === t && b(e.toString) && "[object FormData]" === e.toString()));
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && m(e.buffer);
        },
        isString: g,
        isNumber: w,
        isBoolean: (e)=>!0 === e || !1 === e,
        isObject: E,
        isPlainObject: v,
        isUndefined: y,
        isDate: A,
        isFile: B,
        isBlob: S,
        isRegExp: _,
        isFunction: b,
        isStream: (e)=>E(e) && b(e.pipe),
        isURLSearchParams: R,
        isTypedArray: x,
        isFileList: O,
        forEach: T,
        merge: function e() {
            let { caseless: t } = L(this) && this || {}, r = {}, n = (n, o)=>{
                let i = t && I(r, o) || o;
                v(r[i]) && v(n) ? r[i] = e(r[i], n) : v(n) ? r[i] = e({}, n) : p(n) ? r[i] = n.slice() : r[i] = n;
            };
            for(let e = 0, t = arguments.length; e < t; e++)arguments[e] && T(arguments[e], n);
            return r;
        },
        extend: (e, t, r, { allOwnKeys: n } = {})=>(T(t, (t, n)=>{
                r && b(t) ? e[n] = u(t, r) : e[n] = t;
            }, {
                allOwnKeys: n
            }), e),
        trim: (e)=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: (e)=>(65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, t, r, n)=>{
            e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), r && Object.assign(e.prototype, r);
        },
        toFlatObject: (e, t, r, n)=>{
            let o, i, s;
            let a = {};
            if (t = t || {}, null == e) return t;
            do {
                for(i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0;)s = o[i], (!n || n(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
                e = !1 !== r && f(e);
            }while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
        },
        kindOf: c,
        kindOfTest: h,
        endsWith: (e, t, r)=>{
            e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
        },
        toArray: (e)=>{
            if (!e) return null;
            if (p(e)) return e;
            let t = e.length;
            if (!w(t)) return null;
            let r = Array(t);
            for(; t-- > 0;)r[t] = e[t];
            return r;
        },
        forEachEntry: (e, t)=>{
            let r;
            let n = (e && e[Symbol.iterator]).call(e);
            for(; (r = n.next()) && !r.done;){
                let n = r.value;
                t.call(e, n[0], n[1]);
            }
        },
        matchAll: (e, t)=>{
            let r;
            let n = [];
            for(; null !== (r = e.exec(t));)n.push(r);
            return n;
        },
        isHTMLForm: C,
        hasOwnProperty: N,
        hasOwnProp: N,
        reduceDescriptors: j,
        freezeMethods: (e)=>{
            j(e, (t, r)=>{
                if (b(e) && -1 !== [
                    "arguments",
                    "caller",
                    "callee"
                ].indexOf(r)) return !1;
                if (b(e[r])) {
                    if (t.enumerable = !1, "writable" in t) {
                        t.writable = !1;
                        return;
                    }
                    t.set || (t.set = ()=>{
                        throw Error("Can not rewrite read-only method '" + r + "'");
                    });
                }
            });
        },
        toObjectSet: (e, t)=>{
            let r = {};
            return ((e)=>{
                e.forEach((e)=>{
                    r[e] = !0;
                });
            })(p(e) ? e : String(e).split(t)), r;
        },
        toCamelCase: (e)=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
                return t.toUpperCase() + r;
            }),
        noop: ()=>{},
        toFiniteNumber: (e, t)=>Number.isFinite(e = +e) ? e : t,
        findKey: I,
        global: U,
        isContextDefined: L,
        ALPHABET: F,
        generateString: (e = 16, t = F.ALPHA_DIGIT)=>{
            let r = "", { length: n } = t;
            for(; e--;)r += t[Math.random() * n | 0];
            return r;
        },
        isSpecCompliantForm: function(e) {
            return !!(e && b(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
        },
        toJSONObject: (e)=>{
            let t = Array(10), r = (e, n)=>{
                if (E(e)) {
                    if (t.indexOf(e) >= 0) return;
                    if (!("toJSON" in e)) {
                        t[n] = e;
                        let o = p(e) ? [] : {};
                        return T(e, (e, t)=>{
                            let i = r(e, n + 1);
                            y(i) || (o[t] = i);
                        }), t[n] = void 0, o;
                    }
                }
                return e;
            };
            return r(e, 0);
        },
        isAsyncFn: D,
        isThenable: (e)=>e && (E(e) || b(e)) && b(e.then) && b(e.catch)
    };
    function M(e, t, r, n, o) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
    }
    q.inherits(M, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: q.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            };
        }
    });
    let $ = M.prototype, z = {};
    [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
    ].forEach((e)=>{
        z[e] = {
            value: e
        };
    }), Object.defineProperties(M, z), Object.defineProperty($, "isAxiosError", {
        value: !0
    }), M.from = (e, t, r, n, o, i)=>{
        let s = Object.create($);
        return q.toFlatObject(e, s, function(e) {
            return e !== Error.prototype;
        }, (e)=>"isAxiosError" !== e), M.call(s, e.message, t, r, n, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
    }, n = function(e) {
        for(var t, r = e.length, n = r % 3, o = [], i = 0, s = r - n; i < s; i += 16383)o.push(function(e, t, r) {
            for(var n, o = [], i = t; i < r; i += 3)o.push(H[(n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2])) >> 18 & 63] + H[n >> 12 & 63] + H[n >> 6 & 63] + H[63 & n]);
            return o.join("");
        }(e, i, i + 16383 > s ? s : i + 16383));
        return 1 === n ? o.push(H[(t = e[r - 1]) >> 2] + H[t << 4 & 63] + "==") : 2 === n && o.push(H[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + H[t >> 4 & 63] + H[t << 2 & 63] + "="), o.join("");
    };
    for(var H = [], J = [], G = "undefined" != typeof Uint8Array ? Uint8Array : Array, W = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", V = 0, K = W.length; V < K; ++V)H[V] = W[V], J[W.charCodeAt(V)] = V;
    J["-".charCodeAt(0)] = 62, J["_".charCodeAt(0)] = 63, o = function(e, t, r, n, o) {
        var i, s, a = 8 * o - n - 1, u = (1 << a) - 1, l = u >> 1, f = -7, c = r ? o - 1 : 0, h = r ? -1 : 1, d = e[t + c];
        for(c += h, i = d & (1 << -f) - 1, d >>= -f, f += a; f > 0; i = 256 * i + e[t + c], c += h, f -= 8);
        for(s = i & (1 << -f) - 1, i >>= -f, f += n; f > 0; s = 256 * s + e[t + c], c += h, f -= 8);
        if (0 === i) i = 1 - l;
        else {
            if (i === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
            s += Math.pow(2, n), i -= l;
        }
        return (d ? -1 : 1) * s * Math.pow(2, i - n);
    }, i = function(e, t, r, n, o, i) {
        var s, a, u, l = 8 * i - o - 1, f = (1 << l) - 1, c = f >> 1, h = 23 === o ? 5960464477539062e-23 : 0, d = n ? 0 : i - 1, p = n ? 1 : -1, y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for(isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), s + c >= 1 ? t += h / u : t += h * Math.pow(2, 1 - c), t * u >= 2 && (s++, u /= 2), s + c >= f ? (a = 0, s = f) : s + c >= 1 ? (a = (t * u - 1) * Math.pow(2, o), s += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, o), s = 0)); o >= 8; e[r + d] = 255 & a, d += p, a /= 256, o -= 8);
        for(s = s << o | a, l += o; l > 0; e[r + d] = 255 & s, d += p, s /= 256, l -= 8);
        e[r + d - p] |= 128 * y;
    };
    let Y = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    function X(e) {
        if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, Z.prototype), t;
    }
    function Z(e, t, r) {
        if ("number" == typeof e) {
            if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
            return et(e);
        }
        return Q(e, t, r);
    }
    function Q(e, t, r) {
        if ("string" == typeof e) return function(e, t) {
            if (("string" != typeof t || "" === t) && (t = "utf8"), !Z.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
            let r = 0 | ei(e, t), n = X(r), o = n.write(e, t);
            return o !== r && (n = n.slice(0, o)), n;
        }(e, t);
        if (ArrayBuffer.isView(e)) return function(e) {
            if (eI(e, Uint8Array)) {
                let t = new Uint8Array(e);
                return en(t.buffer, t.byteOffset, t.byteLength);
            }
            return er(e);
        }(e);
        if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (eI(e, ArrayBuffer) || e && eI(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (eI(e, SharedArrayBuffer) || e && eI(e.buffer, SharedArrayBuffer))) return en(e, t, r);
        if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (null != n && n !== e) return Z.from(n, t, r);
        let o = function(e) {
            var t;
            if (Z.isBuffer(e)) {
                let t = 0 | eo(e.length), r = X(t);
                return 0 === r.length || e.copy(r, 0, 0, t), r;
            }
            return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? X(0) : er(e) : "Buffer" === e.type && Array.isArray(e.data) ? er(e.data) : void 0;
        }(e);
        if (o) return o;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return Z.from(e[Symbol.toPrimitive]("string"), t, r);
        throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    function ee(e) {
        if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
        if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function et(e) {
        return ee(e), X(e < 0 ? 0 : 0 | eo(e));
    }
    function er(e) {
        let t = e.length < 0 ? 0 : 0 | eo(e.length), r = X(t);
        for(let n = 0; n < t; n += 1)r[n] = 255 & e[n];
        return r;
    }
    function en(e, t, r) {
        let n;
        if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
        return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Z.prototype), n;
    }
    function eo(e) {
        if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
        return 0 | e;
    }
    function ei(e, t) {
        if (Z.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || eI(e, ArrayBuffer)) return e.byteLength;
        if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length, n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let o = !1;
        for(;;)switch(t){
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
                return eO(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return eR(e).length;
            default:
                if (o) return n ? -1 : eO(e).length;
                t = ("" + t).toLowerCase(), o = !0;
        }
    }
    function es(e, t, r) {
        let o = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
        for(e || (e = "utf8");;)switch(e){
            case "hex":
                return function(e, t, r) {
                    let n = e.length;
                    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                    let o = "";
                    for(let n = t; n < r; ++n)o += eU[e[n]];
                    return o;
                }(this, t, r);
            case "utf8":
            case "utf-8":
                return ef(this, t, r);
            case "ascii":
                return function(e, t, r) {
                    let n = "";
                    r = Math.min(e.length, r);
                    for(let o = t; o < r; ++o)n += String.fromCharCode(127 & e[o]);
                    return n;
                }(this, t, r);
            case "latin1":
            case "binary":
                return function(e, t, r) {
                    let n = "";
                    r = Math.min(e.length, r);
                    for(let o = t; o < r; ++o)n += String.fromCharCode(e[o]);
                    return n;
                }(this, t, r);
            case "base64":
                var i, s;
                return i = t, s = r, 0 === i && s === this.length ? n(this) : n(this.slice(i, s));
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return function(e, t, r) {
                    let n = e.slice(t, r), o = "";
                    for(let e = 0; e < n.length - 1; e += 2)o += String.fromCharCode(n[e] + 256 * n[e + 1]);
                    return o;
                }(this, t, r);
            default:
                if (o) throw TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), o = !0;
        }
    }
    function ea(e, t, r) {
        let n = e[t];
        e[t] = e[r], e[r] = n;
    }
    function eu(e, t, r, n, o) {
        var i;
        if (0 === e.length) return -1;
        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (i = r = +r) != i && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (o) return -1;
            r = e.length - 1;
        } else if (r < 0) {
            if (!o) return -1;
            r = 0;
        }
        if ("string" == typeof t && (t = Z.from(t, n)), Z.isBuffer(t)) return 0 === t.length ? -1 : el(e, t, r, n, o);
        if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : el(e, [
            t
        ], r, n, o);
        throw TypeError("val must be string, number or Buffer");
    }
    function el(e, t, r, n, o) {
        let i, s = 1, a = e.length, u = t.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (e.length < 2 || t.length < 2) return -1;
            s = 2, a /= 2, u /= 2, r /= 2;
        }
        function l(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (o) {
            let n = -1;
            for(i = r; i < a; i++)if (l(e, i) === l(t, -1 === n ? 0 : i - n)) {
                if (-1 === n && (n = i), i - n + 1 === u) return n * s;
            } else -1 !== n && (i -= i - n), n = -1;
        } else for(r + u > a && (r = a - u), i = r; i >= 0; i--){
            let r = !0;
            for(let n = 0; n < u; n++)if (l(e, i + n) !== l(t, n)) {
                r = !1;
                break;
            }
            if (r) return i;
        }
        return -1;
    }
    function ef(e, t, r) {
        r = Math.min(e.length, r);
        let n = [], o = t;
        for(; o < r;){
            let t = e[o], i = null, s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
            if (o + s <= r) {
                let r, n, a, u;
                switch(s){
                    case 1:
                        t < 128 && (i = t);
                        break;
                    case 2:
                        (192 & (r = e[o + 1])) == 128 && (u = (31 & t) << 6 | 63 & r) > 127 && (i = u);
                        break;
                    case 3:
                        r = e[o + 1], n = e[o + 2], (192 & r) == 128 && (192 & n) == 128 && (u = (15 & t) << 12 | (63 & r) << 6 | 63 & n) > 2047 && (u < 55296 || u > 57343) && (i = u);
                        break;
                    case 4:
                        r = e[o + 1], n = e[o + 2], a = e[o + 3], (192 & r) == 128 && (192 & n) == 128 && (192 & a) == 128 && (u = (15 & t) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a) > 65535 && u < 1114112 && (i = u);
                }
            }
            null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), o += s;
        }
        return function(e) {
            let t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            let r = "", n = 0;
            for(; n < t;)r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
            return r;
        }(n);
    }
    function ec(e, t, r) {
        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
        if (e + t > r) throw RangeError("Trying to access beyond buffer length");
    }
    function eh(e, t, r, n, o, i) {
        if (!Z.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i) throw RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw RangeError("Index out of range");
    }
    function ed(e, t, r, n, o) {
        ev(t, n, o, e, r, 7);
        let i = Number(t & BigInt(4294967295));
        e[r++] = i, i >>= 8, e[r++] = i, i >>= 8, e[r++] = i, i >>= 8, e[r++] = i;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, r;
    }
    function ep(e, t, r, n, o) {
        ev(t, n, o, e, r, 7);
        let i = Number(t & BigInt(4294967295));
        e[r + 7] = i, i >>= 8, e[r + 6] = i, i >>= 8, e[r + 5] = i, i >>= 8, e[r + 4] = i;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = s, s >>= 8, e[r + 2] = s, s >>= 8, e[r + 1] = s, s >>= 8, e[r] = s, r + 8;
    }
    function ey(e, t, r, n, o, i) {
        if (r + n > e.length || r < 0) throw RangeError("Index out of range");
    }
    function em(e, t, r, n, o) {
        return t = +t, r >>>= 0, o || ey(e, t, r, 4, 34028234663852886e22, -340282346638528860000000000000000000000), i(e, t, r, n, 23, 4), r + 4;
    }
    function eg(e, t, r, n, o) {
        return t = +t, r >>>= 0, o || ey(e, t, r, 8, 17976931348623157e292, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), i(e, t, r, n, 52, 8), r + 8;
    }
    Z.TYPED_ARRAY_SUPPORT = function() {
        try {
            let e = new Uint8Array(1), t = {
                foo: function() {
                    return 42;
                }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
        } catch (e) {
            return !1;
        }
    }(), Z.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Z.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (Z.isBuffer(this)) return this.buffer;
        }
    }), Object.defineProperty(Z.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (Z.isBuffer(this)) return this.byteOffset;
        }
    }), Z.poolSize = 8192, Z.from = function(e, t, r) {
        return Q(e, t, r);
    }, Object.setPrototypeOf(Z.prototype, Uint8Array.prototype), Object.setPrototypeOf(Z, Uint8Array), Z.alloc = function(e, t, r) {
        return (ee(e), e <= 0) ? X(e) : void 0 !== t ? "string" == typeof r ? X(e).fill(t, r) : X(e).fill(t) : X(e);
    }, Z.allocUnsafe = function(e) {
        return et(e);
    }, Z.allocUnsafeSlow = function(e) {
        return et(e);
    }, Z.isBuffer = function(e) {
        return null != e && !0 === e._isBuffer && e !== Z.prototype;
    }, Z.compare = function(e, t) {
        if (eI(e, Uint8Array) && (e = Z.from(e, e.offset, e.byteLength)), eI(t, Uint8Array) && (t = Z.from(t, t.offset, t.byteLength)), !Z.isBuffer(e) || !Z.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        let r = e.length, n = t.length;
        for(let o = 0, i = Math.min(r, n); o < i; ++o)if (e[o] !== t[o]) {
            r = e[o], n = t[o];
            break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
    }, Z.isEncoding = function(e) {
        switch(String(e).toLowerCase()){
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    }, Z.concat = function(e, t) {
        let r;
        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return Z.alloc(0);
        if (void 0 === t) for(r = 0, t = 0; r < e.length; ++r)t += e[r].length;
        let n = Z.allocUnsafe(t), o = 0;
        for(r = 0; r < e.length; ++r){
            let t = e[r];
            if (eI(t, Uint8Array)) o + t.length > n.length ? (Z.isBuffer(t) || (t = Z.from(t)), t.copy(n, o)) : Uint8Array.prototype.set.call(n, t, o);
            else if (Z.isBuffer(t)) t.copy(n, o);
            else throw TypeError('"list" argument must be an Array of Buffers');
            o += t.length;
        }
        return n;
    }, Z.byteLength = ei, Z.prototype._isBuffer = !0, Z.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
        for(let t = 0; t < e; t += 2)ea(this, t, t + 1);
        return this;
    }, Z.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
        for(let t = 0; t < e; t += 4)ea(this, t, t + 3), ea(this, t + 1, t + 2);
        return this;
    }, Z.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
        for(let t = 0; t < e; t += 8)ea(this, t, t + 7), ea(this, t + 1, t + 6), ea(this, t + 2, t + 5), ea(this, t + 3, t + 4);
        return this;
    }, Z.prototype.toString = function() {
        let e = this.length;
        return 0 === e ? "" : 0 == arguments.length ? ef(this, 0, e) : es.apply(this, arguments);
    }, Z.prototype.toLocaleString = Z.prototype.toString, Z.prototype.equals = function(e) {
        if (!Z.isBuffer(e)) throw TypeError("Argument must be a Buffer");
        return this === e || 0 === Z.compare(this, e);
    }, Z.prototype.inspect = function() {
        let e = "";
        return e = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (e += " ... "), "<Buffer " + e + ">";
    }, Y && (Z.prototype[Y] = Z.prototype.inspect), Z.prototype.compare = function(e, t, r, n, o) {
        if (eI(e, Uint8Array) && (e = Z.from(e, e.offset, e.byteLength)), !Z.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw RangeError("out of range index");
        if (n >= o && t >= r) return 0;
        if (n >= o) return -1;
        if (t >= r) return 1;
        if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
        let i = o - n, s = r - t, a = Math.min(i, s), u = this.slice(n, o), l = e.slice(t, r);
        for(let e = 0; e < a; ++e)if (u[e] !== l[e]) {
            i = u[e], s = l[e];
            break;
        }
        return i < s ? -1 : s < i ? 1 : 0;
    }, Z.prototype.includes = function(e, t, r) {
        return -1 !== this.indexOf(e, t, r);
    }, Z.prototype.indexOf = function(e, t, r) {
        return eu(this, e, t, r, !0);
    }, Z.prototype.lastIndexOf = function(e, t, r) {
        return eu(this, e, t, r, !1);
    }, Z.prototype.write = function(e, t, r, n) {
        var o, i, s, a, u, l, f, c;
        if (void 0 === t) n = "utf8", r = this.length, t = 0;
        else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
        else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
        else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let h = this.length - t;
        if ((void 0 === r || r > h) && (r = h), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let d = !1;
        for(;;)switch(n){
            case "hex":
                return function(e, t, r, n) {
                    let o;
                    r = Number(r) || 0;
                    let i = e.length - r;
                    n ? (n = Number(n)) > i && (n = i) : n = i;
                    let s = t.length;
                    for(n > s / 2 && (n = s / 2), o = 0; o < n; ++o){
                        let n = parseInt(t.substr(2 * o, 2), 16);
                        if (n != n) break;
                        e[r + o] = n;
                    }
                    return o;
                }(this, e, t, r);
            case "utf8":
            case "utf-8":
                return o = t, i = r, eT(eO(e, this.length - o), this, o, i);
            case "ascii":
            case "latin1":
            case "binary":
                return s = t, a = r, eT(function(e) {
                    let t = [];
                    for(let r = 0; r < e.length; ++r)t.push(255 & e.charCodeAt(r));
                    return t;
                }(e), this, s, a);
            case "base64":
                return u = t, l = r, eT(eR(e), this, u, l);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return f = t, c = r, eT(function(e, t) {
                    let r, n;
                    let o = [];
                    for(let i = 0; i < e.length && !((t -= 2) < 0); ++i)n = (r = e.charCodeAt(i)) >> 8, o.push(r % 256), o.push(n);
                    return o;
                }(e, this.length - f), this, f, c);
            default:
                if (d) throw TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), d = !0;
        }
    }, Z.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    }, Z.prototype.slice = function(e, t) {
        let r = this.length;
        e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, Z.prototype), n;
    }, Z.prototype.readUintLE = Z.prototype.readUIntLE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || ec(e, t, this.length);
        let n = this[e], o = 1, i = 0;
        for(; ++i < t && (o *= 256);)n += this[e + i] * o;
        return n;
    }, Z.prototype.readUintBE = Z.prototype.readUIntBE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || ec(e, t, this.length);
        let n = this[e + --t], o = 1;
        for(; t > 0 && (o *= 256);)n += this[e + --t] * o;
        return n;
    }, Z.prototype.readUint8 = Z.prototype.readUInt8 = function(e, t) {
        return e >>>= 0, t || ec(e, 1, this.length), this[e];
    }, Z.prototype.readUint16LE = Z.prototype.readUInt16LE = function(e, t) {
        return e >>>= 0, t || ec(e, 2, this.length), this[e] | this[e + 1] << 8;
    }, Z.prototype.readUint16BE = Z.prototype.readUInt16BE = function(e, t) {
        return e >>>= 0, t || ec(e, 2, this.length), this[e] << 8 | this[e + 1];
    }, Z.prototype.readUint32LE = Z.prototype.readUInt32LE = function(e, t) {
        return e >>>= 0, t || ec(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
    }, Z.prototype.readUint32BE = Z.prototype.readUInt32BE = function(e, t) {
        return e >>>= 0, t || ec(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    }, Z.prototype.readBigUInt64LE = eL(function(e) {
        eA(e >>>= 0, "offset");
        let t = this[e], r = this[e + 7];
        (void 0 === t || void 0 === r) && eB(e, this.length - 8);
        let n = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e], o = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r;
        return BigInt(n) + (BigInt(o) << BigInt(32));
    }), Z.prototype.readBigUInt64BE = eL(function(e) {
        eA(e >>>= 0, "offset");
        let t = this[e], r = this[e + 7];
        (void 0 === t || void 0 === r) && eB(e, this.length - 8);
        let n = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e], o = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
        return (BigInt(n) << BigInt(32)) + BigInt(o);
    }), Z.prototype.readIntLE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || ec(e, t, this.length);
        let n = this[e], o = 1, i = 0;
        for(; ++i < t && (o *= 256);)n += this[e + i] * o;
        return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
    }, Z.prototype.readIntBE = function(e, t, r) {
        e >>>= 0, t >>>= 0, r || ec(e, t, this.length);
        let n = t, o = 1, i = this[e + --n];
        for(; n > 0 && (o *= 256);)i += this[e + --n] * o;
        return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
    }, Z.prototype.readInt8 = function(e, t) {
        return (e >>>= 0, t || ec(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
    }, Z.prototype.readInt16LE = function(e, t) {
        e >>>= 0, t || ec(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, Z.prototype.readInt16BE = function(e, t) {
        e >>>= 0, t || ec(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, Z.prototype.readInt32LE = function(e, t) {
        return e >>>= 0, t || ec(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    }, Z.prototype.readInt32BE = function(e, t) {
        return e >>>= 0, t || ec(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    }, Z.prototype.readBigInt64LE = eL(function(e) {
        eA(e >>>= 0, "offset");
        let t = this[e], r = this[e + 7];
        return (void 0 === t || void 0 === r) && eB(e, this.length - 8), (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e]);
    }), Z.prototype.readBigInt64BE = eL(function(e) {
        eA(e >>>= 0, "offset");
        let t = this[e], r = this[e + 7];
        return (void 0 === t || void 0 === r) && eB(e, this.length - 8), (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r);
    }), Z.prototype.readFloatLE = function(e, t) {
        return e >>>= 0, t || ec(e, 4, this.length), o(this, e, !0, 23, 4);
    }, Z.prototype.readFloatBE = function(e, t) {
        return e >>>= 0, t || ec(e, 4, this.length), o(this, e, !1, 23, 4);
    }, Z.prototype.readDoubleLE = function(e, t) {
        return e >>>= 0, t || ec(e, 8, this.length), o(this, e, !0, 52, 8);
    }, Z.prototype.readDoubleBE = function(e, t) {
        return e >>>= 0, t || ec(e, 8, this.length), o(this, e, !1, 52, 8);
    }, Z.prototype.writeUintLE = Z.prototype.writeUIntLE = function(e, t, r, n) {
        if (e = +e, t >>>= 0, r >>>= 0, !n) {
            let n = Math.pow(2, 8 * r) - 1;
            eh(this, e, t, r, n, 0);
        }
        let o = 1, i = 0;
        for(this[t] = 255 & e; ++i < r && (o *= 256);)this[t + i] = e / o & 255;
        return t + r;
    }, Z.prototype.writeUintBE = Z.prototype.writeUIntBE = function(e, t, r, n) {
        if (e = +e, t >>>= 0, r >>>= 0, !n) {
            let n = Math.pow(2, 8 * r) - 1;
            eh(this, e, t, r, n, 0);
        }
        let o = r - 1, i = 1;
        for(this[t + o] = 255 & e; --o >= 0 && (i *= 256);)this[t + o] = e / i & 255;
        return t + r;
    }, Z.prototype.writeUint8 = Z.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
    }, Z.prototype.writeUint16LE = Z.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
    }, Z.prototype.writeUint16BE = Z.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
    }, Z.prototype.writeUint32LE = Z.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
    }, Z.prototype.writeUint32BE = Z.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
    }, Z.prototype.writeBigUInt64LE = eL(function(e, t = 0) {
        return ed(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Z.prototype.writeBigUInt64BE = eL(function(e, t = 0) {
        return ep(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }), Z.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t >>>= 0, !n) {
            let n = Math.pow(2, 8 * r - 1);
            eh(this, e, t, r, n - 1, -n);
        }
        let o = 0, i = 1, s = 0;
        for(this[t] = 255 & e; ++o < r && (i *= 256);)e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / i >> 0) - s & 255;
        return t + r;
    }, Z.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t >>>= 0, !n) {
            let n = Math.pow(2, 8 * r - 1);
            eh(this, e, t, r, n - 1, -n);
        }
        let o = r - 1, i = 1, s = 0;
        for(this[t + o] = 255 & e; --o >= 0 && (i *= 256);)e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / i >> 0) - s & 255;
        return t + r;
    }, Z.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
    }, Z.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
    }, Z.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
    }, Z.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
    }, Z.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t >>>= 0, r || eh(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
    }, Z.prototype.writeBigInt64LE = eL(function(e, t = 0) {
        return ed(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Z.prototype.writeBigInt64BE = eL(function(e, t = 0) {
        return ep(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), Z.prototype.writeFloatLE = function(e, t, r) {
        return em(this, e, t, !0, r);
    }, Z.prototype.writeFloatBE = function(e, t, r) {
        return em(this, e, t, !1, r);
    }, Z.prototype.writeDoubleLE = function(e, t, r) {
        return eg(this, e, t, !0, r);
    }, Z.prototype.writeDoubleBE = function(e, t, r) {
        return eg(this, e, t, !1, r);
    }, Z.prototype.copy = function(e, t, r, n) {
        if (!Z.isBuffer(e)) throw TypeError("argument should be a Buffer");
        if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || 0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw RangeError("Index out of range");
        if (n < 0) throw RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        let o = n - r;
        return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), o;
    }, Z.prototype.fill = function(e, t, r, n) {
        let o;
        if ("string" == typeof e) {
            if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
            if ("string" == typeof n && !Z.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
            if (1 === e.length) {
                let t = e.charCodeAt(0);
                ("utf8" === n && t < 128 || "latin1" === n) && (e = t);
            }
        } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
        if (r <= t) return this;
        if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for(o = t; o < r; ++o)this[o] = e;
        else {
            let i = Z.isBuffer(e) ? e : Z.from(e, n), s = i.length;
            if (0 === s) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for(o = 0; o < r - t; ++o)this[o + t] = i[o % s];
        }
        return this;
    };
    let eb = {};
    function ew(e, t, r) {
        eb[e] = class extends r {
            constructor(){
                super(), Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
            }
            get code() {
                return e;
            }
            set code(e) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                });
            }
            toString() {
                return `${this.name} [${e}]: ${this.message}`;
            }
        };
    }
    function eE(e) {
        let t = "", r = e.length, n = "-" === e[0] ? 1 : 0;
        for(; r >= n + 4; r -= 3)t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
    }
    function ev(e, t, r, n, o, i) {
        if (e > r || e < t) {
            let n;
            let o = "bigint" == typeof t ? "n" : "";
            throw n = i > 3 ? 0 === t || t === BigInt(0) ? `>= 0${o} and < 2${o} ** ${(i + 1) * 8}${o}` : `>= -(2${o} ** ${(i + 1) * 8 - 1}${o}) and < 2 ** ${(i + 1) * 8 - 1}${o}` : `>= ${t}${o} and <= ${r}${o}`, new eb.ERR_OUT_OF_RANGE("value", n, e);
        }
        eA(o, "offset"), (void 0 === n[o] || void 0 === n[o + i]) && eB(o, n.length - (i + 1));
    }
    function eA(e, t) {
        if ("number" != typeof e) throw new eb.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function eB(e, t, r) {
        if (Math.floor(e) !== e) throw eA(e, r), new eb.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
        if (t < 0) throw new eb.ERR_BUFFER_OUT_OF_BOUNDS;
        throw new eb.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
    }
    ew("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError), ew("ERR_INVALID_ARG_TYPE", function(e, t) {
        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError), ew("ERR_OUT_OF_RANGE", function(e, t, r) {
        let n = `The value of "${e}" is out of range.`, o = r;
        return Number.isInteger(r) && Math.abs(r) > 4294967296 ? o = eE(String(r)) : "bigint" == typeof r && (o = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = eE(o)), o += "n"), n += ` It must be ${t}. Received ${o}`;
    }, RangeError);
    let eS = /[^+/0-9A-Za-z-_]/g;
    function eO(e, t) {
        let r;
        t = t || 1 / 0;
        let n = e.length, o = null, i = [];
        for(let s = 0; s < n; ++s){
            if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                if (!o) {
                    if (r > 56319 || s + 1 === n) {
                        (t -= 3) > -1 && i.push(239, 191, 189);
                        continue;
                    }
                    o = r;
                    continue;
                }
                if (r < 56320) {
                    (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                    continue;
                }
                r = (o - 55296 << 10 | r - 56320) + 65536;
            } else o && (t -= 3) > -1 && i.push(239, 191, 189);
            if (o = null, r < 128) {
                if ((t -= 1) < 0) break;
                i.push(r);
            } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                i.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else if (r < 1114112) {
                if ((t -= 4) < 0) break;
                i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            } else throw Error("Invalid code point");
        }
        return i;
    }
    function eR(e) {
        return function(e) {
            var t, r, n = function(e) {
                var t = e.length;
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                -1 === r && (r = t);
                var n = r === t ? 0 : 4 - r % 4;
                return [
                    r,
                    n
                ];
            }(e), o = n[0], i = n[1], s = new G((o + i) * 3 / 4 - i), a = 0, u = i > 0 ? o - 4 : o;
            for(r = 0; r < u; r += 4)t = J[e.charCodeAt(r)] << 18 | J[e.charCodeAt(r + 1)] << 12 | J[e.charCodeAt(r + 2)] << 6 | J[e.charCodeAt(r + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
            return 2 === i && (t = J[e.charCodeAt(r)] << 2 | J[e.charCodeAt(r + 1)] >> 4, s[a++] = 255 & t), 1 === i && (t = J[e.charCodeAt(r)] << 10 | J[e.charCodeAt(r + 1)] << 4 | J[e.charCodeAt(r + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = 255 & t), s;
        }(function(e) {
            if ((e = (e = e.split("=")[0]).trim().replace(eS, "")).length < 2) return "";
            for(; e.length % 4 != 0;)e += "=";
            return e;
        }(e));
    }
    function eT(e, t, r, n) {
        let o;
        for(o = 0; o < n && !(o + r >= t.length) && !(o >= e.length); ++o)t[o + r] = e[o];
        return o;
    }
    function eI(e, t) {
        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
    }
    let eU = function() {
        let e = "0123456789abcdef", t = Array(256);
        for(let r = 0; r < 16; ++r){
            let n = 16 * r;
            for(let o = 0; o < 16; ++o)t[n + o] = e[r] + e[o];
        }
        return t;
    }();
    function eL(e) {
        return "undefined" == typeof BigInt ? ex : e;
    }
    function ex() {
        throw Error("BigInt not supported");
    }
    function eC(e) {
        return q.isPlainObject(e) || q.isArray(e);
    }
    function eN(e) {
        return q.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function e_(e, t, r) {
        return e ? e.concat(t).map(function(e, t) {
            return e = eN(e), !r && t ? "[" + e + "]" : e;
        }).join(r ? "." : "") : t;
    }
    let ej = q.toFlatObject(q, {}, null, function(e) {
        return /^is[A-Z]/.test(e);
    });
    var eP = function(e, t, r) {
        if (!q.isObject(e)) throw TypeError("target must be an object");
        t = t || new FormData;
        let n = (r = q.toFlatObject(r, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(e, t) {
            return !q.isUndefined(t[e]);
        })).metaTokens, o = r.visitor || l, i = r.dots, s = r.indexes, a = (r.Blob || "undefined" != typeof Blob && Blob) && q.isSpecCompliantForm(t);
        if (!q.isFunction(o)) throw TypeError("visitor must be a function");
        function u(e) {
            if (null === e) return "";
            if (q.isDate(e)) return e.toISOString();
            if (!a && q.isBlob(e)) throw new M("Blob is not supported. Use a Buffer instead.");
            return q.isArrayBuffer(e) || q.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([
                e
            ]) : Z.from(e) : e;
        }
        function l(e, r, o) {
            let a = e;
            if (e && !o && "object" == typeof e) {
                if (q.endsWith(r, "{}")) r = n ? r : r.slice(0, -2), e = JSON.stringify(e);
                else {
                    var l;
                    if (q.isArray(e) && (l = e, q.isArray(l) && !l.some(eC)) || (q.isFileList(e) || q.endsWith(r, "[]")) && (a = q.toArray(e))) return r = eN(r), a.forEach(function(e, n) {
                        q.isUndefined(e) || null === e || t.append(!0 === s ? e_([
                            r
                        ], n, i) : null === s ? r : r + "[]", u(e));
                    }), !1;
                }
            }
            return !!eC(e) || (t.append(e_(o, r, i), u(e)), !1);
        }
        let f = [], c = Object.assign(ej, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: eC
        });
        if (!q.isObject(e)) throw TypeError("data must be an object");
        return !function e(r, n) {
            if (!q.isUndefined(r)) {
                if (-1 !== f.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
                f.push(r), q.forEach(r, function(r, i) {
                    !0 === (!(q.isUndefined(r) || null === r) && o.call(t, r, q.isString(i) ? i.trim() : i, n, c)) && e(r, n ? n.concat(i) : [
                        i
                    ]);
                }), f.pop();
            }
        }(e), t;
    };
    function ek(e) {
        let t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\x00"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e];
        });
    }
    function eF(e, t) {
        this._pairs = [], e && eP(e, this, t);
    }
    let eD = eF.prototype;
    function eq(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    function eM(e, t, r) {
        let n;
        if (!t) return e;
        let o = r && r.encode || eq, i = r && r.serialize;
        if (n = i ? i(t, r) : q.isURLSearchParams(t) ? t.toString() : new eF(t, r).toString(o)) {
            let t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + n;
        }
        return e;
    }
    eD.append = function(e, t) {
        this._pairs.push([
            e,
            t
        ]);
    }, eD.toString = function(e) {
        let t = e ? function(t) {
            return e.call(this, t, ek);
        } : ek;
        return this._pairs.map(function(e) {
            return t(e[0]) + "=" + t(e[1]);
        }, "").join("&");
    };
    var e$ = class {
        constructor(){
            this.handlers = [];
        }
        use(e, t, r) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!r && r.synchronous,
                runWhen: r ? r.runWhen : null
            }), this.handlers.length - 1;
        }
        eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
            this.handlers && (this.handlers = []);
        }
        forEach(e) {
            q.forEach(this.handlers, function(t) {
                null !== t && e(t);
            });
        }
    }, ez = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }, eH = "undefined" != typeof URLSearchParams ? URLSearchParams : eF, eJ = "undefined" != typeof FormData ? FormData : null, eG = "undefined" != typeof Blob ? Blob : null, eW = {};
    a(eW, "hasBrowserEnv", ()=>eV), a(eW, "hasStandardBrowserEnv", ()=>eK), a(eW, "hasStandardBrowserWebWorkerEnv", ()=>eY);
    let eV = "undefined" != typeof window && "undefined" != typeof document, eK = (r = "undefined" != typeof navigator && navigator.product, eV && 0 > [
        "ReactNative",
        "NativeScript",
        "NS"
    ].indexOf(r)), eY = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
    var eX = {
        ...eW,
        isBrowser: !0,
        classes: {
            URLSearchParams: eH,
            FormData: eJ,
            Blob: eG
        },
        protocols: [
            "http",
            "https",
            "file",
            "blob",
            "url",
            "data"
        ]
    }, eZ = function(e) {
        if (q.isFormData(e) && q.isFunction(e.entries)) {
            let t = {};
            return q.forEachEntry(e, (e, r)=>{
                !function e(t, r, n, o) {
                    let i = t[o++], s = Number.isFinite(+i), a = o >= t.length;
                    return (i = !i && q.isArray(n) ? n.length : i, a) ? q.hasOwnProp(n, i) ? n[i] = [
                        n[i],
                        r
                    ] : n[i] = r : (n[i] && q.isObject(n[i]) || (n[i] = []), e(t, r, n[i], o) && q.isArray(n[i]) && (n[i] = function(e) {
                        let t, r;
                        let n = {}, o = Object.keys(e), i = o.length;
                        for(t = 0; t < i; t++)n[r = o[t]] = e[r];
                        return n;
                    }(n[i]))), !s;
                }(q.matchAll(/\w+|\[(\w*)]/g, e).map((e)=>"[]" === e[0] ? "" : e[1] || e[0]), r, t, 0);
            }), t;
        }
        return null;
    };
    let eQ = {
        transitional: ez,
        adapter: [
            "xhr",
            "http"
        ],
        transformRequest: [
            function(e, t) {
                let r;
                let n = t.getContentType() || "", o = n.indexOf("application/json") > -1, i = q.isObject(e);
                if (i && q.isHTMLForm(e) && (e = new FormData(e)), q.isFormData(e)) return o && o ? JSON.stringify(eZ(e)) : e;
                if (q.isArrayBuffer(e) || q.isBuffer(e) || q.isStream(e) || q.isFile(e) || q.isBlob(e)) return e;
                if (q.isArrayBufferView(e)) return e.buffer;
                if (q.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                if (i) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                        var s, a;
                        return (s = e, a = this.formSerializer, eP(s, new eX.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, r, n) {
                                return eX.isNode && q.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
                            }
                        }, a))).toString();
                    }
                    if ((r = q.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        let t = this.env && this.env.FormData;
                        return eP(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer);
                    }
                }
                return i || o ? (t.setContentType("application/json", !1), function(e, t, r) {
                    if (q.isString(e)) try {
                        return (0, JSON.parse)(e), q.trim(e);
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e;
                    }
                    return (0, JSON.stringify)(e);
                }(e)) : e;
            }
        ],
        transformResponse: [
            function(e) {
                let t = this.transitional || eQ.transitional, r = t && t.forcedJSONParsing, n = "json" === this.responseType;
                if (e && q.isString(e) && (r && !this.responseType || n)) {
                    let r = t && t.silentJSONParsing;
                    try {
                        return JSON.parse(e);
                    } catch (e) {
                        if (!r && n) {
                            if ("SyntaxError" === e.name) throw M.from(e, M.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e;
                        }
                    }
                }
                return e;
            }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: eX.classes.FormData,
            Blob: eX.classes.Blob
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300;
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": void 0
            }
        }
    };
    q.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch"
    ], (e)=>{
        eQ.headers[e] = {};
    });
    let e0 = q.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
    ]);
    var e1 = (e)=>{
        let t, r, n;
        let o = {};
        return e && e.split("\n").forEach(function(e) {
            n = e.indexOf(":"), t = e.substring(0, n).trim().toLowerCase(), r = e.substring(n + 1).trim(), !t || o[t] && e0[t] || ("set-cookie" === t ? o[t] ? o[t].push(r) : o[t] = [
                r
            ] : o[t] = o[t] ? o[t] + ", " + r : r);
        }), o;
    };
    let e2 = Symbol("internals");
    function e6(e) {
        return e && String(e).trim().toLowerCase();
    }
    function e5(e) {
        return !1 === e || null == e ? e : q.isArray(e) ? e.map(e5) : String(e);
    }
    let e8 = (e)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
    function e4(e, t, r, n, o) {
        if (q.isFunction(n)) return n.call(this, t, r);
        if (o && (t = r), q.isString(t)) {
            if (q.isString(n)) return -1 !== t.indexOf(n);
            if (q.isRegExp(n)) return n.test(t);
        }
    }
    class e3 {
        constructor(e){
            e && this.set(e);
        }
        set(e, t, r) {
            let n = this;
            function o(e, t, r) {
                let o = e6(t);
                if (!o) throw Error("header name must be a non-empty string");
                let i = q.findKey(n, o);
                i && void 0 !== n[i] && !0 !== r && (void 0 !== r || !1 === n[i]) || (n[i || t] = e5(e));
            }
            let i = (e, t)=>q.forEach(e, (e, r)=>o(e, r, t));
            return q.isPlainObject(e) || e instanceof this.constructor ? i(e, t) : q.isString(e) && (e = e.trim()) && !e8(e) ? i(e1(e), t) : null != e && o(t, e, r), this;
        }
        get(e, t) {
            if (e = e6(e)) {
                let r = q.findKey(this, e);
                if (r) {
                    let e = this[r];
                    if (!t) return e;
                    if (!0 === t) return function(e) {
                        let t;
                        let r = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        for(; t = n.exec(e);)r[t[1]] = t[2];
                        return r;
                    }(e);
                    if (q.isFunction(t)) return t.call(this, e, r);
                    if (q.isRegExp(t)) return t.exec(e);
                    throw TypeError("parser must be boolean|regexp|function");
                }
            }
        }
        has(e, t) {
            if (e = e6(e)) {
                let r = q.findKey(this, e);
                return !!(r && void 0 !== this[r] && (!t || e4(this, this[r], r, t)));
            }
            return !1;
        }
        delete(e, t) {
            let r = this, n = !1;
            function o(e) {
                if (e = e6(e)) {
                    let o = q.findKey(r, e);
                    o && (!t || e4(r, r[o], o, t)) && (delete r[o], n = !0);
                }
            }
            return q.isArray(e) ? e.forEach(o) : o(e), n;
        }
        clear(e) {
            let t = Object.keys(this), r = t.length, n = !1;
            for(; r--;){
                let o = t[r];
                (!e || e4(this, this[o], o, e, !0)) && (delete this[o], n = !0);
            }
            return n;
        }
        normalize(e) {
            let t = this, r = {};
            return q.forEach(this, (n, o)=>{
                let i = q.findKey(r, o);
                if (i) {
                    t[i] = e5(n), delete t[o];
                    return;
                }
                let s = e ? o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r)=>t.toUpperCase() + r) : String(o).trim();
                s !== o && delete t[o], t[s] = e5(n), r[s] = !0;
            }), this;
        }
        concat(...e) {
            return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
            let t = Object.create(null);
            return q.forEach(this, (r, n)=>{
                null != r && !1 !== r && (t[n] = e && q.isArray(r) ? r.join(", ") : r);
            }), t;
        }
        [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
            return Object.entries(this.toJSON()).map(([e, t])=>e + ": " + t).join("\n");
        }
        get [Symbol.toStringTag]() {
            return "AxiosHeaders";
        }
        static from(e) {
            return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
            let r = new this(e);
            return t.forEach((e)=>r.set(e)), r;
        }
        static accessor(e) {
            let t = (this[e2] = this[e2] = {
                accessors: {}
            }).accessors, r = this.prototype;
            function n(e) {
                let n = e6(e);
                t[n] || (!function(e, t) {
                    let r = q.toCamelCase(" " + t);
                    [
                        "get",
                        "set",
                        "has"
                    ].forEach((n)=>{
                        Object.defineProperty(e, n + r, {
                            value: function(e, r, o) {
                                return this[n].call(this, t, e, r, o);
                            },
                            configurable: !0
                        });
                    });
                }(r, e), t[n] = !0);
            }
            return q.isArray(e) ? e.forEach(n) : n(e), this;
        }
    }
    function e7(e, t) {
        let r = this || eQ, n = t || r, o = e3.from(n.headers), i = n.data;
        return q.forEach(e, function(e) {
            i = e.call(r, i, o.normalize(), t ? t.status : void 0);
        }), o.normalize(), i;
    }
    function e9(e) {
        return !!(e && e.__CANCEL__);
    }
    function te(e, t, r) {
        M.call(this, null == e ? "canceled" : e, M.ERR_CANCELED, t, r), this.name = "CanceledError";
    }
    e3.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization"
    ]), q.reduceDescriptors(e3.prototype, ({ value: e }, t)=>{
        let r = t[0].toUpperCase() + t.slice(1);
        return {
            get: ()=>e,
            set (e) {
                this[r] = e;
            }
        };
    }), q.freezeMethods(e3), q.inherits(te, M, {
        __CANCEL__: !0
    });
    var tt = eX.hasStandardBrowserEnv ? {
        write (e, t, r, n, o, i) {
            let s = [
                e + "=" + encodeURIComponent(t)
            ];
            q.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), q.isString(n) && s.push("path=" + n), q.isString(o) && s.push("domain=" + o), !0 === i && s.push("secure"), document.cookie = s.join("; ");
        },
        read (e) {
            let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
        },
        remove (e) {
            this.write(e, "", Date.now() - 864e5);
        }
    } : {
        write () {},
        read: ()=>null,
        remove () {}
    };
    function tr(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t;
    }
    var tn = eX.hasStandardBrowserEnv ? function() {
        let e;
        let t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
        function n(e) {
            let n = e;
            return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            };
        }
        return e = n(window.location.href), function(t) {
            let r = q.isString(t) ? n(t) : t;
            return r.protocol === e.protocol && r.host === e.host;
        };
    }() : function() {
        return !0;
    }, to = function(e, t) {
        let r;
        let n = Array(e = e || 10), o = Array(e), i = 0, s = 0;
        return t = void 0 !== t ? t : 1e3, function(a) {
            let u = Date.now(), l = o[s];
            r || (r = u), n[i] = a, o[i] = u;
            let f = s, c = 0;
            for(; f !== i;)c += n[f++], f %= e;
            if ((i = (i + 1) % e) === s && (s = (s + 1) % e), u - r < t) return;
            let h = l && u - l;
            return h ? Math.round(1e3 * c / h) : void 0;
        };
    };
    function ti(e, t) {
        let r = 0, n = to(50, 250);
        return (o)=>{
            let i = o.loaded, s = o.lengthComputable ? o.total : void 0, a = i - r, u = n(a);
            r = i;
            let l = {
                loaded: i,
                total: s,
                progress: s ? i / s : void 0,
                bytes: a,
                rate: u || void 0,
                estimated: u && s && i <= s ? (s - i) / u : void 0,
                event: o
            };
            l[t ? "download" : "upload"] = !0, e(l);
        };
    }
    let ts = {
        http: null,
        xhr: "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise(function(t, r) {
                let n, o, i = e.data, s = e3.from(e.headers).normalize(), { responseType: a, withXSRFToken: u } = e;
                function l() {
                    e.cancelToken && e.cancelToken.unsubscribe(n), e.signal && e.signal.removeEventListener("abort", n);
                }
                if (q.isFormData(i)) {
                    if (eX.hasStandardBrowserEnv || eX.hasStandardBrowserWebWorkerEnv) s.setContentType(!1);
                    else if (!1 !== (o = s.getContentType())) {
                        let [e, ...t] = o ? o.split(";").map((e)=>e.trim()).filter(Boolean) : [];
                        s.setContentType([
                            e || "multipart/form-data",
                            ...t
                        ].join("; "));
                    }
                }
                let f = new XMLHttpRequest;
                if (e.auth) {
                    let t = e.auth.username || "", r = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    s.set("Authorization", "Basic " + btoa(t + ":" + r));
                }
                let c = tr(e.baseURL, e.url);
                function h() {
                    if (!f) return;
                    let n = e3.from("getAllResponseHeaders" in f && f.getAllResponseHeaders());
                    !function(e, t, r) {
                        let n = r.config.validateStatus;
                        !r.status || !n || n(r.status) ? e(r) : t(new M("Request failed with status code " + r.status, [
                            M.ERR_BAD_REQUEST,
                            M.ERR_BAD_RESPONSE
                        ][Math.floor(r.status / 100) - 4], r.config, r.request, r));
                    }(function(e) {
                        t(e), l();
                    }, function(e) {
                        r(e), l();
                    }, {
                        data: a && "text" !== a && "json" !== a ? f.response : f.responseText,
                        status: f.status,
                        statusText: f.statusText,
                        headers: n,
                        config: e,
                        request: f
                    }), f = null;
                }
                if (f.open(e.method.toUpperCase(), eM(c, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, "onloadend" in f ? f.onloadend = h : f.onreadystatechange = function() {
                    f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:")) && setTimeout(h);
                }, f.onabort = function() {
                    f && (r(new M("Request aborted", M.ECONNABORTED, e, f)), f = null);
                }, f.onerror = function() {
                    r(new M("Network Error", M.ERR_NETWORK, e, f)), f = null;
                }, f.ontimeout = function() {
                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded", n = e.transitional || ez;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(new M(t, n.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, e, f)), f = null;
                }, eX.hasStandardBrowserEnv && (u && q.isFunction(u) && (u = u(e)), u || !1 !== u && tn(c))) {
                    let t = e.xsrfHeaderName && e.xsrfCookieName && tt.read(e.xsrfCookieName);
                    t && s.set(e.xsrfHeaderName, t);
                }
                void 0 === i && s.setContentType(null), "setRequestHeader" in f && q.forEach(s.toJSON(), function(e, t) {
                    f.setRequestHeader(t, e);
                }), q.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), a && "json" !== a && (f.responseType = e.responseType), "function" == typeof e.onDownloadProgress && f.addEventListener("progress", ti(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", ti(e.onUploadProgress)), (e.cancelToken || e.signal) && (n = (t)=>{
                    f && (r(!t || t.type ? new te(null, e, f) : t), f.abort(), f = null);
                }, e.cancelToken && e.cancelToken.subscribe(n), e.signal && (e.signal.aborted ? n() : e.signal.addEventListener("abort", n)));
                let d = function(e) {
                    let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || "";
                }(c);
                if (d && -1 === eX.protocols.indexOf(d)) {
                    r(new M("Unsupported protocol " + d + ":", M.ERR_BAD_REQUEST, e));
                    return;
                }
                f.send(i || null);
            });
        }
    };
    q.forEach(ts, (e, t)=>{
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            });
        }
    });
    let ta = (e)=>`- ${e}`, tu = (e)=>q.isFunction(e) || null === e || !1 === e;
    var tl = {
        getAdapter: (e)=>{
            let t, r;
            let { length: n } = e = q.isArray(e) ? e : [
                e
            ], o = {};
            for(let i = 0; i < n; i++){
                let n;
                if (r = t = e[i], !tu(t) && void 0 === (r = ts[(n = String(t)).toLowerCase()])) throw new M(`Unknown adapter '${n}'`);
                if (r) break;
                o[n || "#" + i] = r;
            }
            if (!r) {
                let e = Object.entries(o).map(([e, t])=>`adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
                throw new M("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(ta).join("\n") : " " + ta(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
            }
            return r;
        },
        adapters: ts
    };
    function tf(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new te(null, e);
    }
    function tc(e) {
        return tf(e), e.headers = e3.from(e.headers), e.data = e7.call(e, e.transformRequest), -1 !== [
            "post",
            "put",
            "patch"
        ].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), tl.getAdapter(e.adapter || eQ.adapter)(e).then(function(t) {
            return tf(e), t.data = e7.call(e, e.transformResponse, t), t.headers = e3.from(t.headers), t;
        }, function(t) {
            return !e9(t) && (tf(e), t && t.response && (t.response.data = e7.call(e, e.transformResponse, t.response), t.response.headers = e3.from(t.response.headers))), Promise.reject(t);
        });
    }
    let th = (e)=>e instanceof e3 ? e.toJSON() : e;
    function td(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r) {
            return q.isPlainObject(e) && q.isPlainObject(t) ? q.merge.call({
                caseless: r
            }, e, t) : q.isPlainObject(t) ? q.merge({}, t) : q.isArray(t) ? t.slice() : t;
        }
        function o(e, t, r) {
            return q.isUndefined(t) ? q.isUndefined(e) ? void 0 : n(void 0, e, r) : n(e, t, r);
        }
        function i(e, t) {
            if (!q.isUndefined(t)) return n(void 0, t);
        }
        function s(e, t) {
            return q.isUndefined(t) ? q.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t);
        }
        function a(r, o, i) {
            return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0;
        }
        let u = {
            url: i,
            method: i,
            data: i,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            withXSRFToken: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: a,
            headers: (e, t)=>o(th(e), th(t), !0)
        };
        return q.forEach(Object.keys(Object.assign({}, e, t)), function(n) {
            let i = u[n] || o, s = i(e[n], t[n], n);
            q.isUndefined(s) && i !== a || (r[n] = s);
        }), r;
    }
    let tp = "1.6.3", ty = {};
    [
        "object",
        "boolean",
        "number",
        "function",
        "string",
        "symbol"
    ].forEach((e, t)=>{
        ty[e] = function(r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    });
    let tm = {};
    ty.transitional = function(e, t, r) {
        function n(e, t) {
            return "[Axios v" + tp + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "");
        }
        return (r, o, i)=>{
            if (!1 === e) throw new M(n(o, " has been removed" + (t ? " in " + t : "")), M.ERR_DEPRECATED);
            return t && !tm[o] && (tm[o] = !0, console.warn(n(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, o, i);
        };
    };
    var tg = {
        assertOptions: function(e, t, r) {
            if ("object" != typeof e) throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
            let n = Object.keys(e), o = n.length;
            for(; o-- > 0;){
                let i = n[o], s = t[i];
                if (s) {
                    let t = e[i], r = void 0 === t || s(t, i, e);
                    if (!0 !== r) throw new M("option " + i + " must be " + r, M.ERR_BAD_OPTION_VALUE);
                    continue;
                }
                if (!0 !== r) throw new M("Unknown option " + i, M.ERR_BAD_OPTION);
            }
        },
        validators: ty
    };
    let tb = tg.validators;
    class tw {
        constructor(e){
            this.defaults = e, this.interceptors = {
                request: new e$,
                response: new e$
            };
        }
        request(e, t) {
            let r, n;
            "string" == typeof e ? (t = t || {}).url = e : t = e || {};
            let { transitional: o, paramsSerializer: i, headers: s } = t = td(this.defaults, t);
            void 0 !== o && tg.assertOptions(o, {
                silentJSONParsing: tb.transitional(tb.boolean),
                forcedJSONParsing: tb.transitional(tb.boolean),
                clarifyTimeoutError: tb.transitional(tb.boolean)
            }, !1), null != i && (q.isFunction(i) ? t.paramsSerializer = {
                serialize: i
            } : tg.assertOptions(i, {
                encode: tb.function,
                serialize: tb.function
            }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let a = s && q.merge(s.common, s[t.method]);
            s && q.forEach([
                "delete",
                "get",
                "head",
                "post",
                "put",
                "patch",
                "common"
            ], (e)=>{
                delete s[e];
            }), t.headers = e3.concat(a, s);
            let u = [], l = !0;
            this.interceptors.request.forEach(function(e) {
                ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (l = l && e.synchronous, u.unshift(e.fulfilled, e.rejected));
            });
            let f = [];
            this.interceptors.response.forEach(function(e) {
                f.push(e.fulfilled, e.rejected);
            });
            let c = 0;
            if (!l) {
                let e = [
                    tc.bind(this),
                    void 0
                ];
                for(e.unshift.apply(e, u), e.push.apply(e, f), n = e.length, r = Promise.resolve(t); c < n;)r = r.then(e[c++], e[c++]);
                return r;
            }
            n = u.length;
            let h = t;
            for(c = 0; c < n;){
                let e = u[c++], t = u[c++];
                try {
                    h = e(h);
                } catch (e) {
                    t.call(this, e);
                    break;
                }
            }
            try {
                r = tc.call(this, h);
            } catch (e) {
                return Promise.reject(e);
            }
            for(c = 0, n = f.length; c < n;)r = r.then(f[c++], f[c++]);
            return r;
        }
        getUri(e) {
            return eM(tr((e = td(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
        }
    }
    q.forEach([
        "delete",
        "get",
        "head",
        "options"
    ], function(e) {
        tw.prototype[e] = function(t, r) {
            return this.request(td(r || {}, {
                method: e,
                url: t,
                data: (r || {}).data
            }));
        };
    }), q.forEach([
        "post",
        "put",
        "patch"
    ], function(e) {
        function t(t) {
            return function(r, n, o) {
                return this.request(td(o || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: r,
                    data: n
                }));
            };
        }
        tw.prototype[e] = t(), tw.prototype[e + "Form"] = t(!0);
    });
    class tE {
        constructor(e){
            let t;
            if ("function" != typeof e) throw TypeError("executor must be a function.");
            this.promise = new Promise(function(e) {
                t = e;
            });
            let r = this;
            this.promise.then((e)=>{
                if (!r._listeners) return;
                let t = r._listeners.length;
                for(; t-- > 0;)r._listeners[t](e);
                r._listeners = null;
            }), this.promise.then = (e)=>{
                let t;
                let n = new Promise((e)=>{
                    r.subscribe(e), t = e;
                }).then(e);
                return n.cancel = function() {
                    r.unsubscribe(t);
                }, n;
            }, e(function(e, n, o) {
                r.reason || (r.reason = new te(e, n, o), t(r.reason));
            });
        }
        throwIfRequested() {
            if (this.reason) throw this.reason;
        }
        subscribe(e) {
            if (this.reason) {
                e(this.reason);
                return;
            }
            this._listeners ? this._listeners.push(e) : this._listeners = [
                e
            ];
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            let t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
            let e;
            return {
                token: new tE(function(t) {
                    e = t;
                }),
                cancel: e
            };
        }
    }
    let tv = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(tv).forEach(([e, t])=>{
        tv[t] = e;
    });
    let tA = function e(t) {
        let r = new tw(t), n = u(tw.prototype.request, r);
        return q.extend(n, tw.prototype, r, {
            allOwnKeys: !0
        }), q.extend(n, r, null, {
            allOwnKeys: !0
        }), n.create = function(r) {
            return e(td(t, r));
        }, n;
    }(eQ);
    tA.Axios = tw, tA.CanceledError = te, tA.CancelToken = tE, tA.isCancel = e9, tA.VERSION = tp, tA.toFormData = eP, tA.AxiosError = M, tA.Cancel = tA.CanceledError, tA.all = function(e) {
        return Promise.all(e);
    }, tA.spread = function(e) {
        return function(t) {
            return e.apply(null, t);
        };
    }, tA.isAxiosError = function(e) {
        return q.isObject(e) && !0 === e.isAxiosError;
    }, tA.mergeConfig = td, tA.AxiosHeaders = e3, tA.formToJSON = (e)=>eZ(q.isHTMLForm(e) ? new FormData(e) : e), tA.getAdapter = tl.getAdapter, tA.HttpStatusCode = tv, tA.default = tA;
    let { Axios: tB, AxiosError: tS, CanceledError: tO, isCancel: tR, CancelToken: tT, VERSION: tI, all: tU, Cancel: tL, isAxiosError: tx, spread: tC, toFormData: tN, AxiosHeaders: t_, HttpStatusCode: tj, formToJSON: tP, getAdapter: tk, mergeConfig: tF } = tA, tD = (e, t)=>{
        tq();
        let r = `<div class="alert alert--${e}">${t}</div>`;
        document.querySelector("body").insertAdjacentHTML("afterbegin", r);
    }, tq = ()=>{
        let e = document.querySelector(".alert");
        e && e.parentElement.removeChild(e), window.setTimeout(tq, 5e3);
    }, tM = async (e, t)=>{
        try {
            let r = await tA({
                method: "post",
                url: "/api/v1/users/login",
                data: {
                    email: e,
                    password: t
                }
            });
            "success" === r.data.status && (tD("success", "Logged in successfully"), window.setTimeout(()=>{
                location.assign("/");
            }, 100));
        } catch (e) {
            tD("success", e.response.data.message);
        }
    }, t$ = async ()=>{
        try {
            (await tA({
                method: "GET",
                url: "/api/v1/users/logout"
            })).data.status = "success", location.assign(window.location.href.endsWith("/me") ? "/" : window.location.href);
        } catch (e) {
            tD("error", "Error logging out!");
        }
    }, tz = async (e, t)=>{
        try {
            let r = await tA({
                method: "patch",
                url: "password" === t ? "/api/v1/users/updateMyPassword" : "/api/v1/users/updateMe",
                data: e
            });
            "success" === r.data.status && (tD("success", `${t.toUpperCase()} data updated successfully!`), window.location.href = "/me");
        } catch (e) {
            tD("error", e.response.data.message);
        }
    }, tH = Stripe("pk_test_51OOZMBBhpjB6GUEeu7qGaNrGdPp4bTmznCwCTjemnYXUD9x93IIFsG4zFrkFIN5xwFVpaeS00lDGmpeKFufp1PT500zMumsTpU"), tJ = async (e)=>{
        try {
            let t = await tA({
                method: "GET",
                url: `/api/v1/booking/checkout-session/${e}`
            });
            await tH.redirectToCheckout({
                sessionId: t.data.session.id
            });
        } catch (e) {
            console.error("error", e);
        }
    }, tG = async (e, t, r, n)=>{
        try {
            let o = await tA({
                method: "post",
                url: "/api/v1/users/signup",
                data: {
                    name: e,
                    email: t,
                    password: r,
                    passwordConfirm: n
                }
            });
            "success" === o.data.status && (tD("success", "Logged in successfully"), window.setTimeout(()=>{
                location.assign("/me");
            }, 100));
        } catch (e) {
            console.error(e);
        }
    }, tW = async (e, t, r)=>{
        let n = {};
        if (t && (n.review = t), r && (n.rating = +r), 0 !== Object.keys(n).length) try {
            let t = `/api/v1/reviews/${e}`, r = await tA.patch(t, n);
            "success" === r.data.status && (tD("success", "Review updated successfully!"), window.setTimeout(()=>{
                location.reload();
            }, 100));
        } catch (e) {
            tD("error", e.response.data.message);
        }
    }, tV = (e, t, r)=>{
        let n;
        let o = document.querySelector("#submit");
        document.querySelector("#role").addEventListener("change", (e)=>{
            n = e.target.value;
        }), o.addEventListener("click", async (e)=>{
            e.preventDefault();
            let r = new FormData;
            r.append("name", document.getElementById("name").value), r.append("email", document.getElementById("email").value), r.append("password", document.getElementById("password").value), r.append("photo", document.getElementById("photo").files[0]), r.append("role", n), await tY(t, "patch", "users", r);
        }), e.style.display = "flex", r.target === e && (e.style.display = "none");
    }, tK = (e, t, r)=>{
        let n, o;
        let i = document.querySelector("#submit"), s = document.querySelector("#difficultyDropdown"), a = document.getElementById("date");
        s.addEventListener("change", (e)=>{
            n = e.target.value;
        }), a.addEventListener("change", (e)=>{
            o = e.target.value;
        }), i.addEventListener("click", async (e)=>{
            e.preventDefault();
            let r = new FormData;
            r.append("name", document.querySelector("#tourName").value), r.append("difficulty", n), r.append("duration", document.querySelector("#durationInput").value), r.append("maxGroupSize", document.querySelector("#maxGroupSizeInput").value), r.append("startDates", o), r.append("price", document.querySelector("#price").value), r.append("description", document.querySelector("#tourDescription").value), tY(t, "patch", "tours", r);
        }), e.style.display = "flex", document.body.style.overflow = "hidden";
        let u = ()=>{
            document.body.style.overflow = "auto", e.style.display = "none", e.removeEventListener("click", u);
        };
        r.target === e && u();
    }, tY = async (e, t, r, n)=>{
        try {
            let o = `/api/v1/${r}/${e}`, i = await tA({
                method: t,
                url: o,
                data: n
            });
            204 === i.status || 200 === i.status ? (tD("success", `Tour ${t} successful`), window.location.reload()) : console.error(`Unexpected status code: ${i.status}`);
        } catch (e) {
            tD("error", e);
        }
    }, tX = document.getElementById("map"), tZ = document.querySelector(".form--login"), tQ = document.querySelector(".form--signup"), t0 = document.querySelector(".form-user-data"), t1 = document.querySelector(".nav__el--logout"), t2 = document.querySelector(".form-user-password"), t6 = document.getElementById("book-tour"), t5 = document.querySelector(".card.cardReview"), t8 = document.querySelectorAll(".card.cardAdmin"), t4 = document.querySelector(".edit__tours"), t3 = document.querySelector(".form__user-photo"), t7 = document.getElementById("modal-container");
    tX && ((e)=>{
        mapboxgl.accessToken = "pk.eyJ1IjoidGhlYmFzZWR0YWthIiwiYSI6ImNscTFsem8weDA3Z24ya3IybzBmYmNsMGEifQ.OL3LE5eLigkP4MjRgcTKAA";
        var t = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/thebasedtaka/clq4kgz3f01at01qm44ycgvsq",
            scrollZoom: !1
        });
        let r = new mapboxgl.LngLatBounds;
        e.forEach((e)=>{
            let n = document.createElement("div");
            n.className = "marker", new mapboxgl.Marker({
                element: n,
                anchor: "bottom"
            }).setLngLat(e.coordinates).addTo(t), new mapboxgl.Popup({
                offset: 30
            }).setLngLat(e.coordinates).setHTML(`<p>Day ${e.day}: ${e.description}</p>`).addTo(t), r.extend(e.coordinates);
        }), t.fitBounds(r, {
            padding: {
                top: 200,
                bottom: 150,
                left: 100,
                right: 100
            }
        });
    })(JSON.parse(tX.dataset.locations)), tZ && tZ.addEventListener("submit", (e)=>{
        e.preventDefault(), tM(document.getElementById("email").value, document.getElementById("password").value);
    }), t1 && t1.addEventListener("click", t$), t0 && t0.addEventListener("submit", async (e)=>{
        e.preventDefault();
        let t = new FormData;
        t.append("name", document.getElementById("name").value), t.append("email", document.getElementById("email").value), t.append("photo", document.getElementById("photo").files[0]), await tz(t, "data");
    }), t2 && t2.addEventListener("submit", async (e)=>{
        e.preventDefault(), document.querySelector(".btn--save-password").textContent = "Updating...";
        let t = document.getElementById("password-current").value, r = document.getElementById("password-confirm").value, n = document.getElementById("password").value;
        await tz({
            passwordCurrent: t,
            passwordConfirm: r,
            password: n
        }, "password"), document.querySelector(".btn--save-password").textContent = "Save Password", document.getElementById("password-current").value = "", document.getElementById("password-confirm").value = "", document.getElementById("password").value = "";
    }), tQ && tQ.addEventListener("submit", async (e)=>{
        e.preventDefault();
        let t = document.getElementById("name").value, r = document.getElementById("email").value, n = document.getElementById("password").value, o = document.getElementById("confirm").value;
        await tG(t, r, n, o);
    }), t6 && t6.addEventListener("click", (e)=>{
        e.target.textContent = "Processing...";
        let { tourId: t } = e.target.dataset;
        tJ(t);
    }), t5 && document.querySelectorAll(".card").forEach((e)=>{
        let t = e.querySelectorAll(".edit");
        !function(e, t, r, n) {
            let o, i, s, a;
            let u = !1;
            function l() {
                t.forEach((e, t)=>{
                    e.classList.toggle("hovered", t < a);
                });
            }
            function f(e) {
                u && (a = Array.from(t).indexOf(e.target) + 1, l());
            }
            function c() {
                a = null, l();
            }
            function h(e) {
                a = s = +("use" === e.target.nodeName ? e.target.parentNode : e.target).dataset.starIndex + 1, l(), e.target.removeEventListener("mouseover", f), e.target.removeEventListener("mouseout", c), e.target.removeEventListener("click", h);
            }
            t.forEach((e)=>{
                e.addEventListener("mouseover", f), e.addEventListener("mouseout", c), e.addEventListener("click", h);
            }), e.forEach((e)=>{
                e.addEventListener("click", (t)=>{
                    u ? (o = e.dataset.reviewId, i = t.target.parentNode.parentNode.querySelector(".form__input"), u = !1, tW(o, i.value, s), n.replaceWith(r)) : (u = !0, t.target.textContent = "Update Review", n.classList.add("form__input"), n.value = r.textContent, r.replaceWith(n));
                });
            });
        }(t, e.querySelectorAll(".reviews__star"), e.querySelector(".card__text"), document.createElement("input"));
    }), t8 && (document.querySelectorAll(".card.cardAdmin").forEach((e)=>{
        let t = e.querySelector(".btn--update"), r = e.querySelector(".btn--delete"), n = JSON.parse(t.dataset.user);
        r.addEventListener("click", (e)=>{
            e.preventDefault(), tY(n._id, "delete", "users");
        }), t.addEventListener("click", (e)=>{
            e.preventDefault(), t3.src = `/img/users/${n.photo}`, tV(t7, n._id, e.target);
        });
    }), window.addEventListener("click", (e)=>{
        e.target === t7 && (t7.style.display = "none", document.body.style.overflow = "auto");
    })), t4 && document.querySelectorAll(".card").forEach((e)=>{
        let t = e.querySelector(".btn--edit"), r = JSON.parse(t.dataset.tour);
        t.addEventListener("click", (e)=>{
            e.preventDefault(), t3.src = `/img/tours/${r.imageCover}`, tK(t7, r.id, e.target);
        });
    }), document.querySelector(".admin__reviews") && document.querySelectorAll(".admin__reviews__card").forEach((e)=>{
        let t = e.querySelector(".delete");
        t.addEventListener("click", (e)=>{
            e.preventDefault(), tY(t.dataset.id, "delete", "reviews");
        });
    });
})();


//# sourceMappingURL=bundle.js.map

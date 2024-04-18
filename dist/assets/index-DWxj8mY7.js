function u0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function c0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function In(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Tf = { exports: {} },
  bi = {},
  Mf = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qo = Symbol.for("react.element"),
  d0 = Symbol.for("react.portal"),
  f0 = Symbol.for("react.fragment"),
  p0 = Symbol.for("react.strict_mode"),
  m0 = Symbol.for("react.profiler"),
  h0 = Symbol.for("react.provider"),
  g0 = Symbol.for("react.context"),
  y0 = Symbol.for("react.forward_ref"),
  v0 = Symbol.for("react.suspense"),
  x0 = Symbol.for("react.memo"),
  w0 = Symbol.for("react.lazy"),
  Lc = Symbol.iterator;
function S0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lc && e[Lc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Of = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Lf = Object.assign,
  zf = {};
function Ur(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Of);
}
Ur.prototype.isReactComponent = {};
Ur.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function If() {}
If.prototype = Ur.prototype;
function hu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Of);
}
var gu = (hu.prototype = new If());
gu.constructor = hu;
Lf(gu, Ur.prototype);
gu.isPureReactComponent = !0;
var zc = Array.isArray,
  Af = Object.prototype.hasOwnProperty,
  yu = { current: null },
  Df = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Af.call(t, r) && !Df.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: qo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: yu.current,
  };
}
function k0(e, t) {
  return {
    $$typeof: qo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qo;
}
function C0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ic = /\/+/g;
function Ma(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? C0("" + e.key)
    : t.toString(36);
}
function jl(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qo:
          case d0:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ma(i, 0) : r),
      zc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ic, "$&/") + "/"),
          jl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (vu(o) &&
            (o = k0(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ic, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), zc(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var s = r + Ma(l, a);
      i += jl(l, t, n, s, o);
    }
  else if (((s = S0(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + Ma(l, a++)), (i += jl(l, t, n, s, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function sl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    jl(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function b0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var qe = { current: null },
  Tl = { transition: null },
  N0 = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: Tl,
    ReactCurrentOwner: yu,
  };
G.Children = {
  map: sl,
  forEach: function (e, t, n) {
    sl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      sl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      sl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = Ur;
G.Fragment = f0;
G.Profiler = m0;
G.PureComponent = hu;
G.StrictMode = p0;
G.Suspense = v0;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N0;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Lf({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = yu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Af.call(t, s) &&
        !Df.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: qo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: g0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: h0, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Ff;
G.createFactory = function (e) {
  var t = Ff.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: y0, render: e };
};
G.isValidElement = vu;
G.lazy = function (e) {
  return { $$typeof: w0, _payload: { _status: -1, _result: e }, _init: b0 };
};
G.memo = function (e, t) {
  return { $$typeof: x0, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Tl.transition;
  Tl.transition = {};
  try {
    e();
  } finally {
    Tl.transition = t;
  }
};
G.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
G.useCallback = function (e, t) {
  return qe.current.useCallback(e, t);
};
G.useContext = function (e) {
  return qe.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return qe.current.useEffect(e, t);
};
G.useId = function () {
  return qe.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return qe.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return qe.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return qe.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return qe.current.useRef(e);
};
G.useState = function (e) {
  return qe.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return qe.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return qe.current.useTransition();
};
G.version = "18.2.0";
Mf.exports = G;
var S = Mf.exports;
const z = c0(S),
  Ac = u0({ __proto__: null, default: z }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $0 = S,
  P0 = Symbol.for("react.element"),
  E0 = Symbol.for("react.fragment"),
  _0 = Object.prototype.hasOwnProperty,
  R0 = $0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  j0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bf(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) _0.call(t, r) && !j0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: P0,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: R0.current,
  };
}
bi.Fragment = E0;
bi.jsx = Bf;
bi.jsxs = Bf;
Tf.exports = bi;
var d = Tf.exports,
  ds = {},
  Vf = { exports: {} },
  ht = {},
  Uf = { exports: {} },
  Wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, A) {
    var D = E.length;
    E.push(A);
    e: for (; 0 < D; ) {
      var H = (D - 1) >>> 1,
        ee = E[H];
      if (0 < o(ee, A)) (E[H] = A), (E[D] = ee), (D = H);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var A = E[0],
      D = E.pop();
    if (D !== A) {
      E[0] = D;
      e: for (var H = 0, ee = E.length, Te = ee >>> 1; H < Te; ) {
        var J = 2 * (H + 1) - 1,
          ve = E[J],
          Ue = J + 1,
          it = E[Ue];
        if (0 > o(ve, D))
          Ue < ee && 0 > o(it, ve)
            ? ((E[H] = it), (E[Ue] = D), (H = Ue))
            : ((E[H] = ve), (E[J] = D), (H = J));
        else if (Ue < ee && 0 > o(it, D)) (E[H] = it), (E[Ue] = D), (H = Ue);
        else break e;
      }
    }
    return A;
  }
  function o(E, A) {
    var D = E.sortIndex - A.sortIndex;
    return D !== 0 ? D : E.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    u = [],
    p = 1,
    m = null,
    c = 3,
    x = !1,
    v = !1,
    y = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(E) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= E)
        r(u), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(u);
    }
  }
  function w(E) {
    if (((y = !1), g(E), !v))
      if (n(s) !== null) (v = !0), Q(k);
      else {
        var A = n(u);
        A !== null && K(w, A.startTime - E);
      }
  }
  function k(E, A) {
    (v = !1), y && ((y = !1), h(_), (_ = -1)), (x = !0);
    var D = c;
    try {
      for (
        g(A), m = n(s);
        m !== null && (!(m.expirationTime > A) || (E && !I()));

      ) {
        var H = m.callback;
        if (typeof H == "function") {
          (m.callback = null), (c = m.priorityLevel);
          var ee = H(m.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ee == "function" ? (m.callback = ee) : m === n(s) && r(s),
            g(A);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Te = !0;
      else {
        var J = n(u);
        J !== null && K(w, J.startTime - A), (Te = !1);
      }
      return Te;
    } finally {
      (m = null), (c = D), (x = !1);
    }
  }
  var N = !1,
    C = null,
    _ = -1,
    M = 5,
    P = -1;
  function I() {
    return !(e.unstable_now() - P < M);
  }
  function V() {
    if (C !== null) {
      var E = e.unstable_now();
      P = E;
      var A = !0;
      try {
        A = C(!0, E);
      } finally {
        A ? W() : ((N = !1), (C = null));
      }
    } else N = !1;
  }
  var W;
  if (typeof f == "function")
    W = function () {
      f(V);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      U = B.port2;
    (B.port1.onmessage = V),
      (W = function () {
        U.postMessage(null);
      });
  } else
    W = function () {
      b(V, 0);
    };
  function Q(E) {
    (C = E), N || ((N = !0), W());
  }
  function K(E, A) {
    _ = b(function () {
      E(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), Q(k));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = c;
      }
      var D = c;
      c = A;
      try {
        return E();
      } finally {
        c = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, A) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = c;
      c = E;
      try {
        return A();
      } finally {
        c = D;
      }
    }),
    (e.unstable_scheduleCallback = function (E, A, D) {
      var H = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? H + D : H))
          : (D = H),
        E)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = D + ee),
        (E = {
          id: p++,
          callback: A,
          priorityLevel: E,
          startTime: D,
          expirationTime: ee,
          sortIndex: -1,
        }),
        D > H
          ? ((E.sortIndex = D),
            t(u, E),
            n(s) === null &&
              E === n(u) &&
              (y ? (h(_), (_ = -1)) : (y = !0), K(w, D - H)))
          : ((E.sortIndex = ee), t(s, E), v || x || ((v = !0), Q(k))),
        E
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (E) {
      var A = c;
      return function () {
        var D = c;
        c = A;
        try {
          return E.apply(this, arguments);
        } finally {
          c = D;
        }
      };
    });
})(Wf);
Uf.exports = Wf;
var T0 = Uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hf = S,
  mt = T0;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Kf = new Set(),
  Eo = {};
function nr(e, t) {
  Lr(e, t), Lr(e + "Capture", t);
}
function Lr(e, t) {
  for (Eo[e] = t, e = 0; e < t.length; e++) Kf.add(t[e]);
}
var an = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  fs = Object.prototype.hasOwnProperty,
  M0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Dc = {},
  Fc = {};
function O0(e) {
  return fs.call(Fc, e)
    ? !0
    : fs.call(Dc, e)
    ? !1
    : M0.test(e)
    ? (Fc[e] = !0)
    : ((Dc[e] = !0), !1);
}
function L0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function z0(e, t, n, r) {
  if (t === null || typeof t > "u" || L0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ze(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Be[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Be[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Be[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Be[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Be[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xu = /[\-:]([a-z])/g;
function wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xu, wu);
    Be[t] = new Ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xu, wu);
    Be[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xu, wu);
  Be[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new Ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Su(e, t, n, r) {
  var o = Be.hasOwnProperty(t) ? Be[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (z0(t, n, o, r) && (n = null),
    r || o === null
      ? O0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fn = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ul = Symbol.for("react.element"),
  hr = Symbol.for("react.portal"),
  gr = Symbol.for("react.fragment"),
  ku = Symbol.for("react.strict_mode"),
  ps = Symbol.for("react.profiler"),
  Qf = Symbol.for("react.provider"),
  Gf = Symbol.for("react.context"),
  Cu = Symbol.for("react.forward_ref"),
  ms = Symbol.for("react.suspense"),
  hs = Symbol.for("react.suspense_list"),
  bu = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  Yf = Symbol.for("react.offscreen"),
  Bc = Symbol.iterator;
function no(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bc && e[Bc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ye = Object.assign,
  Oa;
function po(e) {
  if (Oa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Oa = (t && t[1]) || "";
    }
  return (
    `
` +
    Oa +
    e
  );
}
var La = !1;
function za(e, t) {
  if (!e || La) return "";
  La = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          a = l.length - 1;
        1 <= i && 0 <= a && o[i] !== l[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== l[a])) {
                var s =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (La = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? po(e) : "";
}
function I0(e) {
  switch (e.tag) {
    case 5:
      return po(e.type);
    case 16:
      return po("Lazy");
    case 13:
      return po("Suspense");
    case 19:
      return po("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = za(e.type, !1)), e;
    case 11:
      return (e = za(e.type.render, !1)), e;
    case 1:
      return (e = za(e.type, !0)), e;
    default:
      return "";
  }
}
function gs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gr:
      return "Fragment";
    case hr:
      return "Portal";
    case ps:
      return "Profiler";
    case ku:
      return "StrictMode";
    case ms:
      return "Suspense";
    case hs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Gf:
        return (e.displayName || "Context") + ".Consumer";
      case Qf:
        return (e._context.displayName || "Context") + ".Provider";
      case Cu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bu:
        return (
          (t = e.displayName || null), t !== null ? t : gs(e.type) || "Memo"
        );
      case xn:
        (t = e._payload), (e = e._init);
        try {
          return gs(e(t));
        } catch {}
    }
  return null;
}
function A0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gs(t);
    case 8:
      return t === ku ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Xf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function D0(e) {
  var t = Xf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function cl(e) {
  e._valueTracker || (e._valueTracker = D0(e));
}
function qf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Xf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ys(e, t) {
  var n = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zf(e, t) {
  (t = t.checked), t != null && Su(e, "checked", t, !1);
}
function vs(e, t) {
  Zf(e, t);
  var n = Ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? xs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && xs(e, t.type, Ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function xs(e, t, n) {
  (t !== "number" || Xl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mo = Array.isArray;
function Pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ln(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ws(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (mo(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ln(n) };
}
function Jf(e, t) {
  var n = Ln(t.value),
    r = Ln(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ep(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ss(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ep(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var dl,
  tp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        dl = dl || document.createElement("div"),
          dl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = dl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _o(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  F0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(yo).forEach(function (e) {
  F0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yo[t] = yo[e]);
  });
});
function np(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (yo.hasOwnProperty(e) && yo[e])
    ? ("" + t).trim()
    : t + "px";
}
function rp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = np(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var B0 = ye(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ks(e, t) {
  if (t) {
    if (B0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Cs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var bs = null;
function Nu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ns = null,
  Er = null,
  _r = null;
function Kc(e) {
  if ((e = el(e))) {
    if (typeof Ns != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = _i(t)), Ns(e.stateNode, e.type, t));
  }
}
function op(e) {
  Er ? (_r ? _r.push(e) : (_r = [e])) : (Er = e);
}
function lp() {
  if (Er) {
    var e = Er,
      t = _r;
    if (((_r = Er = null), Kc(e), t)) for (e = 0; e < t.length; e++) Kc(t[e]);
  }
}
function ip(e, t) {
  return e(t);
}
function ap() {}
var Ia = !1;
function sp(e, t, n) {
  if (Ia) return e(t, n);
  Ia = !0;
  try {
    return ip(e, t, n);
  } finally {
    (Ia = !1), (Er !== null || _r !== null) && (ap(), lp());
  }
}
function Ro(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _i(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var $s = !1;
if (an)
  try {
    var ro = {};
    Object.defineProperty(ro, "passive", {
      get: function () {
        $s = !0;
      },
    }),
      window.addEventListener("test", ro, ro),
      window.removeEventListener("test", ro, ro);
  } catch {
    $s = !1;
  }
function V0(e, t, n, r, o, l, i, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var vo = !1,
  ql = null,
  Zl = !1,
  Ps = null,
  U0 = {
    onError: function (e) {
      (vo = !0), (ql = e);
    },
  };
function W0(e, t, n, r, o, l, i, a, s) {
  (vo = !1), (ql = null), V0.apply(U0, arguments);
}
function H0(e, t, n, r, o, l, i, a, s) {
  if ((W0.apply(this, arguments), vo)) {
    if (vo) {
      var u = ql;
      (vo = !1), (ql = null);
    } else throw Error(j(198));
    Zl || ((Zl = !0), (Ps = u));
  }
}
function rr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function up(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qc(e) {
  if (rr(e) !== e) throw Error(j(188));
}
function K0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rr(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Qc(o), e;
        if (l === r) return Qc(o), t;
        l = l.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function cp(e) {
  return (e = K0(e)), e !== null ? dp(e) : null;
}
function dp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fp = mt.unstable_scheduleCallback,
  Gc = mt.unstable_cancelCallback,
  Q0 = mt.unstable_shouldYield,
  G0 = mt.unstable_requestPaint,
  Ce = mt.unstable_now,
  Y0 = mt.unstable_getCurrentPriorityLevel,
  $u = mt.unstable_ImmediatePriority,
  pp = mt.unstable_UserBlockingPriority,
  Jl = mt.unstable_NormalPriority,
  X0 = mt.unstable_LowPriority,
  mp = mt.unstable_IdlePriority,
  Ni = null,
  Xt = null;
function q0(e) {
  if (Xt && typeof Xt.onCommitFiberRoot == "function")
    try {
      Xt.onCommitFiberRoot(Ni, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Dt = Math.clz32 ? Math.clz32 : eg,
  Z0 = Math.log,
  J0 = Math.LN2;
function eg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Z0(e) / J0) | 0)) | 0;
}
var fl = 64,
  pl = 4194304;
function ho(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ei(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = ho(a)) : ((l &= i), l !== 0 && (r = ho(l)));
  } else (i = n & ~o), i !== 0 ? (r = ho(i)) : l !== 0 && (r = ho(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function tg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ng(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Dt(l),
      a = 1 << i,
      s = o[i];
    s === -1
      ? (!(a & n) || a & r) && (o[i] = tg(a, t))
      : s <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Es(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hp() {
  var e = fl;
  return (fl <<= 1), !(fl & 4194240) && (fl = 64), e;
}
function Aa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Dt(t)),
    (e[t] = n);
}
function rg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Dt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Pu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var oe = 0;
function gp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yp,
  Eu,
  vp,
  xp,
  wp,
  _s = !1,
  ml = [],
  Pn = null,
  En = null,
  _n = null,
  jo = new Map(),
  To = new Map(),
  kn = [],
  og =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Yc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pn = null;
      break;
    case "dragenter":
    case "dragleave":
      En = null;
      break;
    case "mouseover":
    case "mouseout":
      _n = null;
      break;
    case "pointerover":
    case "pointerout":
      jo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      To.delete(t.pointerId);
  }
}
function oo(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = el(t)), t !== null && Eu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function lg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Pn = oo(Pn, e, t, n, r, o)), !0;
    case "dragenter":
      return (En = oo(En, e, t, n, r, o)), !0;
    case "mouseover":
      return (_n = oo(_n, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return jo.set(l, oo(jo.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), To.set(l, oo(To.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Sp(e) {
  var t = Wn(e.target);
  if (t !== null) {
    var n = rr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = up(n)), t !== null)) {
          (e.blockedOn = t),
            wp(e.priority, function () {
              vp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Rs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (bs = r), n.target.dispatchEvent(r), (bs = null);
    } else return (t = el(n)), t !== null && Eu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xc(e, t, n) {
  Ml(e) && n.delete(t);
}
function ig() {
  (_s = !1),
    Pn !== null && Ml(Pn) && (Pn = null),
    En !== null && Ml(En) && (En = null),
    _n !== null && Ml(_n) && (_n = null),
    jo.forEach(Xc),
    To.forEach(Xc);
}
function lo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _s ||
      ((_s = !0),
      mt.unstable_scheduleCallback(mt.unstable_NormalPriority, ig)));
}
function Mo(e) {
  function t(o) {
    return lo(o, e);
  }
  if (0 < ml.length) {
    lo(ml[0], e);
    for (var n = 1; n < ml.length; n++) {
      var r = ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Pn !== null && lo(Pn, e),
      En !== null && lo(En, e),
      _n !== null && lo(_n, e),
      jo.forEach(t),
      To.forEach(t),
      n = 0;
    n < kn.length;
    n++
  )
    (r = kn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
    Sp(n), n.blockedOn === null && kn.shift();
}
var Rr = fn.ReactCurrentBatchConfig,
  ti = !0;
function ag(e, t, n, r) {
  var o = oe,
    l = Rr.transition;
  Rr.transition = null;
  try {
    (oe = 1), _u(e, t, n, r);
  } finally {
    (oe = o), (Rr.transition = l);
  }
}
function sg(e, t, n, r) {
  var o = oe,
    l = Rr.transition;
  Rr.transition = null;
  try {
    (oe = 4), _u(e, t, n, r);
  } finally {
    (oe = o), (Rr.transition = l);
  }
}
function _u(e, t, n, r) {
  if (ti) {
    var o = Rs(e, t, n, r);
    if (o === null) Ga(e, t, r, ni, n), Yc(e, r);
    else if (lg(o, e, t, n, r)) r.stopPropagation();
    else if ((Yc(e, r), t & 4 && -1 < og.indexOf(e))) {
      for (; o !== null; ) {
        var l = el(o);
        if (
          (l !== null && yp(l),
          (l = Rs(e, t, n, r)),
          l === null && Ga(e, t, r, ni, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Ga(e, t, r, null, n);
  }
}
var ni = null;
function Rs(e, t, n, r) {
  if (((ni = null), (e = Nu(r)), (e = Wn(e)), e !== null))
    if (((t = rr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = up(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ni = e), null;
}
function kp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Y0()) {
        case $u:
          return 1;
        case pp:
          return 4;
        case Jl:
        case X0:
          return 16;
        case mp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nn = null,
  Ru = null,
  Ol = null;
function Cp() {
  if (Ol) return Ol;
  var e,
    t = Ru,
    n = t.length,
    r,
    o = "value" in Nn ? Nn.value : Nn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Ol = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ll(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hl() {
  return !0;
}
function qc() {
  return !1;
}
function gt(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? hl
        : qc),
      (this.isPropagationStopped = qc),
      this
    );
  }
  return (
    ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = hl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = hl));
      },
      persist: function () {},
      isPersistent: hl,
    }),
    t
  );
}
var Wr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ju = gt(Wr),
  Jo = ye({}, Wr, { view: 0, detail: 0 }),
  ug = gt(Jo),
  Da,
  Fa,
  io,
  $i = ye({}, Jo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== io &&
            (io && e.type === "mousemove"
              ? ((Da = e.screenX - io.screenX), (Fa = e.screenY - io.screenY))
              : (Fa = Da = 0),
            (io = e)),
          Da);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fa;
    },
  }),
  Zc = gt($i),
  cg = ye({}, $i, { dataTransfer: 0 }),
  dg = gt(cg),
  fg = ye({}, Jo, { relatedTarget: 0 }),
  Ba = gt(fg),
  pg = ye({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mg = gt(pg),
  hg = ye({}, Wr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gg = gt(hg),
  yg = ye({}, Wr, { data: 0 }),
  Jc = gt(yg),
  vg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  xg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  wg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Sg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wg[e]) ? !!t[e] : !1;
}
function Tu() {
  return Sg;
}
var kg = ye({}, Jo, {
    key: function (e) {
      if (e.key) {
        var t = vg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ll(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? xg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tu,
    charCode: function (e) {
      return e.type === "keypress" ? Ll(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ll(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Cg = gt(kg),
  bg = ye({}, $i, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ed = gt(bg),
  Ng = ye({}, Jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tu,
  }),
  $g = gt(Ng),
  Pg = ye({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Eg = gt(Pg),
  _g = ye({}, $i, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rg = gt(_g),
  jg = [9, 13, 27, 32],
  Mu = an && "CompositionEvent" in window,
  xo = null;
an && "documentMode" in document && (xo = document.documentMode);
var Tg = an && "TextEvent" in window && !xo,
  bp = an && (!Mu || (xo && 8 < xo && 11 >= xo)),
  td = " ",
  nd = !1;
function Np(e, t) {
  switch (e) {
    case "keyup":
      return jg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $p(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var yr = !1;
function Mg(e, t) {
  switch (e) {
    case "compositionend":
      return $p(t);
    case "keypress":
      return t.which !== 32 ? null : ((nd = !0), td);
    case "textInput":
      return (e = t.data), e === td && nd ? null : e;
    default:
      return null;
  }
}
function Og(e, t) {
  if (yr)
    return e === "compositionend" || (!Mu && Np(e, t))
      ? ((e = Cp()), (Ol = Ru = Nn = null), (yr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lg[e.type] : t === "textarea";
}
function Pp(e, t, n, r) {
  op(r),
    (t = ri(t, "onChange")),
    0 < t.length &&
      ((n = new ju("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var wo = null,
  Oo = null;
function zg(e) {
  Ap(e, 0);
}
function Pi(e) {
  var t = wr(e);
  if (qf(t)) return e;
}
function Ig(e, t) {
  if (e === "change") return t;
}
var Ep = !1;
if (an) {
  var Va;
  if (an) {
    var Ua = "oninput" in document;
    if (!Ua) {
      var od = document.createElement("div");
      od.setAttribute("oninput", "return;"),
        (Ua = typeof od.oninput == "function");
    }
    Va = Ua;
  } else Va = !1;
  Ep = Va && (!document.documentMode || 9 < document.documentMode);
}
function ld() {
  wo && (wo.detachEvent("onpropertychange", _p), (Oo = wo = null));
}
function _p(e) {
  if (e.propertyName === "value" && Pi(Oo)) {
    var t = [];
    Pp(t, Oo, e, Nu(e)), sp(zg, t);
  }
}
function Ag(e, t, n) {
  e === "focusin"
    ? (ld(), (wo = t), (Oo = n), wo.attachEvent("onpropertychange", _p))
    : e === "focusout" && ld();
}
function Dg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pi(Oo);
}
function Fg(e, t) {
  if (e === "click") return Pi(t);
}
function Bg(e, t) {
  if (e === "input" || e === "change") return Pi(t);
}
function Vg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Bt = typeof Object.is == "function" ? Object.is : Vg;
function Lo(e, t) {
  if (Bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fs.call(t, o) || !Bt(e[o], t[o])) return !1;
  }
  return !0;
}
function id(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ad(e, t) {
  var n = id(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = id(n);
  }
}
function Rp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Rp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jp() {
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xl(e.document);
  }
  return t;
}
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ug(e) {
  var t = jp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ou(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = ad(n, l));
        var i = ad(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Wg = an && "documentMode" in document && 11 >= document.documentMode,
  vr = null,
  js = null,
  So = null,
  Ts = !1;
function sd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ts ||
    vr == null ||
    vr !== Xl(r) ||
    ((r = vr),
    "selectionStart" in r && Ou(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (So && Lo(So, r)) ||
      ((So = r),
      (r = ri(js, "onSelect")),
      0 < r.length &&
        ((t = new ju("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = vr))));
}
function gl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xr = {
    animationend: gl("Animation", "AnimationEnd"),
    animationiteration: gl("Animation", "AnimationIteration"),
    animationstart: gl("Animation", "AnimationStart"),
    transitionend: gl("Transition", "TransitionEnd"),
  },
  Wa = {},
  Tp = {};
an &&
  ((Tp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xr.animationend.animation,
    delete xr.animationiteration.animation,
    delete xr.animationstart.animation),
  "TransitionEvent" in window || delete xr.transitionend.transition);
function Ei(e) {
  if (Wa[e]) return Wa[e];
  if (!xr[e]) return e;
  var t = xr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tp) return (Wa[e] = t[n]);
  return e;
}
var Mp = Ei("animationend"),
  Op = Ei("animationiteration"),
  Lp = Ei("animationstart"),
  zp = Ei("transitionend"),
  Ip = new Map(),
  ud =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function An(e, t) {
  Ip.set(e, t), nr(t, [e]);
}
for (var Ha = 0; Ha < ud.length; Ha++) {
  var Ka = ud[Ha],
    Hg = Ka.toLowerCase(),
    Kg = Ka[0].toUpperCase() + Ka.slice(1);
  An(Hg, "on" + Kg);
}
An(Mp, "onAnimationEnd");
An(Op, "onAnimationIteration");
An(Lp, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(zp, "onTransitionEnd");
Lr("onMouseEnter", ["mouseout", "mouseover"]);
Lr("onMouseLeave", ["mouseout", "mouseover"]);
Lr("onPointerEnter", ["pointerout", "pointerover"]);
Lr("onPointerLeave", ["pointerout", "pointerover"]);
nr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
nr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
nr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var go =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Qg = new Set("cancel close invalid load scroll toggle".split(" ").concat(go));
function cd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), H0(r, t, void 0, e), (e.currentTarget = null);
}
function Ap(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== l && o.isPropagationStopped())) break e;
          cd(o, a, u), (l = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          cd(o, a, u), (l = s);
        }
    }
  }
  if (Zl) throw ((e = Ps), (Zl = !1), (Ps = null), e);
}
function se(e, t) {
  var n = t[Is];
  n === void 0 && (n = t[Is] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Dp(t, e, 2, !1), n.add(r));
}
function Qa(e, t, n) {
  var r = 0;
  t && (r |= 4), Dp(n, e, r, t);
}
var yl = "_reactListening" + Math.random().toString(36).slice(2);
function zo(e) {
  if (!e[yl]) {
    (e[yl] = !0),
      Kf.forEach(function (n) {
        n !== "selectionchange" && (Qg.has(n) || Qa(n, !1, e), Qa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yl] || ((t[yl] = !0), Qa("selectionchange", !1, t));
  }
}
function Dp(e, t, n, r) {
  switch (kp(t)) {
    case 1:
      var o = ag;
      break;
    case 4:
      o = sg;
      break;
    default:
      o = _u;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !$s ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ga(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Wn(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sp(function () {
    var u = l,
      p = Nu(n),
      m = [];
    e: {
      var c = Ip.get(e);
      if (c !== void 0) {
        var x = ju,
          v = e;
        switch (e) {
          case "keypress":
            if (Ll(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Cg;
            break;
          case "focusin":
            (v = "focus"), (x = Ba);
            break;
          case "focusout":
            (v = "blur"), (x = Ba);
            break;
          case "beforeblur":
          case "afterblur":
            x = Ba;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Zc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = dg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = $g;
            break;
          case Mp:
          case Op:
          case Lp:
            x = mg;
            break;
          case zp:
            x = Eg;
            break;
          case "scroll":
            x = ug;
            break;
          case "wheel":
            x = Rg;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = gg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ed;
        }
        var y = (t & 4) !== 0,
          b = !y && e === "scroll",
          h = y ? (c !== null ? c + "Capture" : null) : c;
        y = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              h !== null && ((w = Ro(f, h)), w != null && y.push(Io(f, w, g)))),
            b)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((c = new x(c, v, null, n, p)), m.push({ event: c, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          c &&
            n !== bs &&
            (v = n.relatedTarget || n.fromElement) &&
            (Wn(v) || v[sn]))
        )
          break e;
        if (
          (x || c) &&
          ((c =
            p.window === p
              ? p
              : (c = p.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = u),
              (v = v ? Wn(v) : null),
              v !== null &&
                ((b = rr(v)), v !== b || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((y = Zc),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ed),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (b = x == null ? c : wr(x)),
            (g = v == null ? c : wr(v)),
            (c = new y(w, f + "leave", x, n, p)),
            (c.target = b),
            (c.relatedTarget = g),
            (w = null),
            Wn(p) === u &&
              ((y = new y(h, f + "enter", v, n, p)),
              (y.target = g),
              (y.relatedTarget = b),
              (w = y)),
            (b = w),
            x && v)
          )
            t: {
              for (y = x, h = v, f = 0, g = y; g; g = sr(g)) f++;
              for (g = 0, w = h; w; w = sr(w)) g++;
              for (; 0 < f - g; ) (y = sr(y)), f--;
              for (; 0 < g - f; ) (h = sr(h)), g--;
              for (; f--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = sr(y)), (h = sr(h));
              }
              y = null;
            }
          else y = null;
          x !== null && dd(m, c, x, y, !1),
            v !== null && b !== null && dd(m, b, v, y, !0);
        }
      }
      e: {
        if (
          ((c = u ? wr(u) : window),
          (x = c.nodeName && c.nodeName.toLowerCase()),
          x === "select" || (x === "input" && c.type === "file"))
        )
          var k = Ig;
        else if (rd(c))
          if (Ep) k = Bg;
          else {
            k = Dg;
            var N = Ag;
          }
        else
          (x = c.nodeName) &&
            x.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (k = Fg);
        if (k && (k = k(e, u))) {
          Pp(m, k, n, p);
          break e;
        }
        N && N(e, c, u),
          e === "focusout" &&
            (N = c._wrapperState) &&
            N.controlled &&
            c.type === "number" &&
            xs(c, "number", c.value);
      }
      switch (((N = u ? wr(u) : window), e)) {
        case "focusin":
          (rd(N) || N.contentEditable === "true") &&
            ((vr = N), (js = u), (So = null));
          break;
        case "focusout":
          So = js = vr = null;
          break;
        case "mousedown":
          Ts = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ts = !1), sd(m, n, p);
          break;
        case "selectionchange":
          if (Wg) break;
        case "keydown":
        case "keyup":
          sd(m, n, p);
      }
      var C;
      if (Mu)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        yr
          ? Np(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (bp &&
          n.locale !== "ko" &&
          (yr || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && yr && (C = Cp())
            : ((Nn = p),
              (Ru = "value" in Nn ? Nn.value : Nn.textContent),
              (yr = !0))),
        (N = ri(u, _)),
        0 < N.length &&
          ((_ = new Jc(_, e, null, n, p)),
          m.push({ event: _, listeners: N }),
          C ? (_.data = C) : ((C = $p(n)), C !== null && (_.data = C)))),
        (C = Tg ? Mg(e, n) : Og(e, n)) &&
          ((u = ri(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new Jc("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: u }),
            (p.data = C)));
    }
    Ap(m, t);
  });
}
function Io(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ri(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Ro(e, n)),
      l != null && r.unshift(Io(e, l, o)),
      (l = Ro(e, t)),
      l != null && r.push(Io(e, l, o))),
      (e = e.return);
  }
  return r;
}
function sr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dd(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = Ro(n, l)), s != null && i.unshift(Io(n, s, a)))
        : o || ((s = Ro(n, l)), s != null && i.push(Io(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Gg = /\r\n?/g,
  Yg = /\u0000|\uFFFD/g;
function fd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gg,
      `
`
    )
    .replace(Yg, "");
}
function vl(e, t, n) {
  if (((t = fd(t)), fd(e) !== t && n)) throw Error(j(425));
}
function oi() {}
var Ms = null,
  Os = null;
function Ls(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var zs = typeof setTimeout == "function" ? setTimeout : void 0,
  Xg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pd = typeof Promise == "function" ? Promise : void 0,
  qg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pd < "u"
      ? function (e) {
          return pd.resolve(null).then(e).catch(Zg);
        }
      : zs;
function Zg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ya(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Mo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Mo(t);
}
function Rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function md(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Hr = Math.random().toString(36).slice(2),
  Yt = "__reactFiber$" + Hr,
  Ao = "__reactProps$" + Hr,
  sn = "__reactContainer$" + Hr,
  Is = "__reactEvents$" + Hr,
  Jg = "__reactListeners$" + Hr,
  ey = "__reactHandles$" + Hr;
function Wn(e) {
  var t = e[Yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[sn] || n[Yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = md(e); e !== null; ) {
          if ((n = e[Yt])) return n;
          e = md(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function el(e) {
  return (
    (e = e[Yt] || e[sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function wr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function _i(e) {
  return e[Ao] || null;
}
var As = [],
  Sr = -1;
function Dn(e) {
  return { current: e };
}
function ue(e) {
  0 > Sr || ((e.current = As[Sr]), (As[Sr] = null), Sr--);
}
function ae(e, t) {
  Sr++, (As[Sr] = e.current), (e.current = t);
}
var zn = {},
  Ge = Dn(zn),
  nt = Dn(!1),
  qn = zn;
function zr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function rt(e) {
  return (e = e.childContextTypes), e != null;
}
function li() {
  ue(nt), ue(Ge);
}
function hd(e, t, n) {
  if (Ge.current !== zn) throw Error(j(168));
  ae(Ge, t), ae(nt, n);
}
function Fp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, A0(e) || "Unknown", o));
  return ye({}, n, r);
}
function ii(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zn),
    (qn = Ge.current),
    ae(Ge, e),
    ae(nt, nt.current),
    !0
  );
}
function gd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Fp(e, t, qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(nt),
      ue(Ge),
      ae(Ge, e))
    : ue(nt),
    ae(nt, n);
}
var nn = null,
  Ri = !1,
  Xa = !1;
function Bp(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function ty(e) {
  (Ri = !0), Bp(e);
}
function Fn() {
  if (!Xa && nn !== null) {
    Xa = !0;
    var e = 0,
      t = oe;
    try {
      var n = nn;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (nn = null), (Ri = !1);
    } catch (o) {
      throw (nn !== null && (nn = nn.slice(e + 1)), fp($u, Fn), o);
    } finally {
      (oe = t), (Xa = !1);
    }
  }
  return null;
}
var kr = [],
  Cr = 0,
  ai = null,
  si = 0,
  kt = [],
  Ct = 0,
  Zn = null,
  rn = 1,
  on = "";
function Vn(e, t) {
  (kr[Cr++] = si), (kr[Cr++] = ai), (ai = e), (si = t);
}
function Vp(e, t, n) {
  (kt[Ct++] = rn), (kt[Ct++] = on), (kt[Ct++] = Zn), (Zn = e);
  var r = rn;
  e = on;
  var o = 32 - Dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - Dt(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (rn = (1 << (32 - Dt(t) + o)) | (n << o) | r),
      (on = l + e);
  } else (rn = (1 << l) | (n << o) | r), (on = e);
}
function Lu(e) {
  e.return !== null && (Vn(e, 1), Vp(e, 1, 0));
}
function zu(e) {
  for (; e === ai; )
    (ai = kr[--Cr]), (kr[Cr] = null), (si = kr[--Cr]), (kr[Cr] = null);
  for (; e === Zn; )
    (Zn = kt[--Ct]),
      (kt[Ct] = null),
      (on = kt[--Ct]),
      (kt[Ct] = null),
      (rn = kt[--Ct]),
      (kt[Ct] = null);
}
var ft = null,
  dt = null,
  fe = !1,
  At = null;
function Up(e, t) {
  var n = Nt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (dt = Rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (dt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zn !== null ? { id: rn, overflow: on } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ds(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fs(e) {
  if (fe) {
    var t = dt;
    if (t) {
      var n = t;
      if (!yd(e, t)) {
        if (Ds(e)) throw Error(j(418));
        t = Rn(n.nextSibling);
        var r = ft;
        t && yd(e, t)
          ? Up(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (fe = !1), (ft = e));
      }
    } else {
      if (Ds(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (fe = !1), (ft = e);
    }
  }
}
function vd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function xl(e) {
  if (e !== ft) return !1;
  if (!fe) return vd(e), (fe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ls(e.type, e.memoizedProps))),
    t && (t = dt))
  ) {
    if (Ds(e)) throw (Wp(), Error(j(418)));
    for (; t; ) Up(e, t), (t = Rn(t.nextSibling));
  }
  if ((vd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              dt = Rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      dt = null;
    }
  } else dt = ft ? Rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Wp() {
  for (var e = dt; e; ) e = Rn(e.nextSibling);
}
function Ir() {
  (dt = ft = null), (fe = !1);
}
function Iu(e) {
  At === null ? (At = [e]) : At.push(e);
}
var ny = fn.ReactCurrentBatchConfig;
function zt(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ui = Dn(null),
  ci = null,
  br = null,
  Au = null;
function Du() {
  Au = br = ci = null;
}
function Fu(e) {
  var t = ui.current;
  ue(ui), (e._currentValue = t);
}
function Bs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function jr(e, t) {
  (ci = e),
    (Au = br = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (tt = !0), (e.firstContext = null));
}
function Et(e) {
  var t = e._currentValue;
  if (Au !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), br === null)) {
      if (ci === null) throw Error(j(308));
      (br = e), (ci.dependencies = { lanes: 0, firstContext: e });
    } else br = br.next = e;
  return t;
}
var Hn = null;
function Bu(e) {
  Hn === null ? (Hn = [e]) : Hn.push(e);
}
function Hp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Bu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    un(e, r)
  );
}
function un(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wn = !1;
function Vu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ln(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      un(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Bu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    un(e, n)
  );
}
function zl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pu(e, n);
  }
}
function xd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function di(e, t, n, r) {
  var o = e.updateQueue;
  wn = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), i === null ? (l = u) : (i.next = u), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== i &&
        (a === null ? (p.firstBaseUpdate = u) : (a.next = u),
        (p.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var m = o.baseState;
    (i = 0), (p = u = s = null), (a = l);
    do {
      var c = a.lane,
        x = a.eventTime;
      if ((r & c) === c) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((c = t), (x = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                m = v.call(x, m, c);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (c = typeof v == "function" ? v.call(x, m, c) : v),
                c == null)
              )
                break e;
              m = ye({}, m, c);
              break e;
            case 2:
              wn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (c = o.effects),
          c === null ? (o.effects = [a]) : c.push(a));
      } else
        (x = {
          eventTime: x,
          lane: c,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((u = p = x), (s = m)) : (p = p.next = x),
          (i |= c);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (c = a),
          (a = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (s = m),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (er |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function wd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var Qp = new Hf.Component().refs;
function Vs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ye({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ji = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      o = Mn(e),
      l = ln(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = jn(e, l, o)),
      t !== null && (Ft(t, e, o, r), zl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      o = Mn(e),
      l = ln(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = jn(e, l, o)),
      t !== null && (Ft(t, e, o, r), zl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Xe(),
      r = Mn(e),
      o = ln(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = jn(e, o, r)),
      t !== null && (Ft(t, e, r, n), zl(t, e, r));
  },
};
function Sd(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lo(n, r) || !Lo(o, l)
      : !0
  );
}
function Gp(e, t, n) {
  var r = !1,
    o = zn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Et(l))
      : ((o = rt(t) ? qn : Ge.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? zr(e, o) : zn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ji),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function kd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ji.enqueueReplaceState(t, t.state, null);
}
function Us(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Qp), Vu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Et(l))
    : ((l = rt(t) ? qn : Ge.current), (o.context = zr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Vs(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ji.enqueueReplaceState(o, o.state, null),
      di(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ao(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            a === Qp && (a = o.refs = {}),
              i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function wl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cd(e) {
  var t = e._init;
  return t(e._payload);
}
function Yp(e) {
  function t(h, f) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [f]), (h.flags |= 16)) : g.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function o(h, f) {
    return (h = On(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, f, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((h.flags |= 2), f) : g)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, f, g, w) {
    return f === null || f.tag !== 6
      ? ((f = rs(g, h.mode, w)), (f.return = h), f)
      : ((f = o(f, g)), (f.return = h), f);
  }
  function s(h, f, g, w) {
    var k = g.type;
    return k === gr
      ? p(h, f, g.props.children, w, g.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === xn &&
            Cd(k) === f.type))
      ? ((w = o(f, g.props)), (w.ref = ao(h, f, g)), (w.return = h), w)
      : ((w = Vl(g.type, g.key, g.props, null, h.mode, w)),
        (w.ref = ao(h, f, g)),
        (w.return = h),
        w);
  }
  function u(h, f, g, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = os(g, h.mode, w)), (f.return = h), f)
      : ((f = o(f, g.children || [])), (f.return = h), f);
  }
  function p(h, f, g, w, k) {
    return f === null || f.tag !== 7
      ? ((f = Xn(g, h.mode, w, k)), (f.return = h), f)
      : ((f = o(f, g)), (f.return = h), f);
  }
  function m(h, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = rs("" + f, h.mode, g)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ul:
          return (
            (g = Vl(f.type, f.key, f.props, null, h.mode, g)),
            (g.ref = ao(h, null, f)),
            (g.return = h),
            g
          );
        case hr:
          return (f = os(f, h.mode, g)), (f.return = h), f;
        case xn:
          var w = f._init;
          return m(h, w(f._payload), g);
      }
      if (mo(f) || no(f))
        return (f = Xn(f, h.mode, g, null)), (f.return = h), f;
      wl(h, f);
    }
    return null;
  }
  function c(h, f, g, w) {
    var k = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : a(h, f, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ul:
          return g.key === k ? s(h, f, g, w) : null;
        case hr:
          return g.key === k ? u(h, f, g, w) : null;
        case xn:
          return (k = g._init), c(h, f, k(g._payload), w);
      }
      if (mo(g) || no(g)) return k !== null ? null : p(h, f, g, w, null);
      wl(h, g);
    }
    return null;
  }
  function x(h, f, g, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(g) || null), a(f, h, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ul:
          return (h = h.get(w.key === null ? g : w.key) || null), s(f, h, w, k);
        case hr:
          return (h = h.get(w.key === null ? g : w.key) || null), u(f, h, w, k);
        case xn:
          var N = w._init;
          return x(h, f, g, N(w._payload), k);
      }
      if (mo(w) || no(w)) return (h = h.get(g) || null), p(f, h, w, k, null);
      wl(f, w);
    }
    return null;
  }
  function v(h, f, g, w) {
    for (
      var k = null, N = null, C = f, _ = (f = 0), M = null;
      C !== null && _ < g.length;
      _++
    ) {
      C.index > _ ? ((M = C), (C = null)) : (M = C.sibling);
      var P = c(h, C, g[_], w);
      if (P === null) {
        C === null && (C = M);
        break;
      }
      e && C && P.alternate === null && t(h, C),
        (f = l(P, f, _)),
        N === null ? (k = P) : (N.sibling = P),
        (N = P),
        (C = M);
    }
    if (_ === g.length) return n(h, C), fe && Vn(h, _), k;
    if (C === null) {
      for (; _ < g.length; _++)
        (C = m(h, g[_], w)),
          C !== null &&
            ((f = l(C, f, _)), N === null ? (k = C) : (N.sibling = C), (N = C));
      return fe && Vn(h, _), k;
    }
    for (C = r(h, C); _ < g.length; _++)
      (M = x(C, h, _, g[_], w)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? _ : M.key),
          (f = l(M, f, _)),
          N === null ? (k = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        C.forEach(function (I) {
          return t(h, I);
        }),
      fe && Vn(h, _),
      k
    );
  }
  function y(h, f, g, w) {
    var k = no(g);
    if (typeof k != "function") throw Error(j(150));
    if (((g = k.call(g)), g == null)) throw Error(j(151));
    for (
      var N = (k = null), C = f, _ = (f = 0), M = null, P = g.next();
      C !== null && !P.done;
      _++, P = g.next()
    ) {
      C.index > _ ? ((M = C), (C = null)) : (M = C.sibling);
      var I = c(h, C, P.value, w);
      if (I === null) {
        C === null && (C = M);
        break;
      }
      e && C && I.alternate === null && t(h, C),
        (f = l(I, f, _)),
        N === null ? (k = I) : (N.sibling = I),
        (N = I),
        (C = M);
    }
    if (P.done) return n(h, C), fe && Vn(h, _), k;
    if (C === null) {
      for (; !P.done; _++, P = g.next())
        (P = m(h, P.value, w)),
          P !== null &&
            ((f = l(P, f, _)), N === null ? (k = P) : (N.sibling = P), (N = P));
      return fe && Vn(h, _), k;
    }
    for (C = r(h, C); !P.done; _++, P = g.next())
      (P = x(C, h, _, P.value, w)),
        P !== null &&
          (e && P.alternate !== null && C.delete(P.key === null ? _ : P.key),
          (f = l(P, f, _)),
          N === null ? (k = P) : (N.sibling = P),
          (N = P));
    return (
      e &&
        C.forEach(function (V) {
          return t(h, V);
        }),
      fe && Vn(h, _),
      k
    );
  }
  function b(h, f, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === gr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ul:
          e: {
            for (var k = g.key, N = f; N !== null; ) {
              if (N.key === k) {
                if (((k = g.type), k === gr)) {
                  if (N.tag === 7) {
                    n(h, N.sibling),
                      (f = o(N, g.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === xn &&
                    Cd(k) === N.type)
                ) {
                  n(h, N.sibling),
                    (f = o(N, g.props)),
                    (f.ref = ao(h, N, g)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, N);
                break;
              } else t(h, N);
              N = N.sibling;
            }
            g.type === gr
              ? ((f = Xn(g.props.children, h.mode, w, g.key)),
                (f.return = h),
                (h = f))
              : ((w = Vl(g.type, g.key, g.props, null, h.mode, w)),
                (w.ref = ao(h, f, g)),
                (w.return = h),
                (h = w));
          }
          return i(h);
        case hr:
          e: {
            for (N = g.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(h, f.sibling),
                    (f = o(f, g.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = os(g, h.mode, w)), (f.return = h), (h = f);
          }
          return i(h);
        case xn:
          return (N = g._init), b(h, f, N(g._payload), w);
      }
      if (mo(g)) return v(h, f, g, w);
      if (no(g)) return y(h, f, g, w);
      wl(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, g)), (f.return = h), (h = f))
          : (n(h, f), (f = rs(g, h.mode, w)), (f.return = h), (h = f)),
        i(h))
      : n(h, f);
  }
  return b;
}
var Ar = Yp(!0),
  Xp = Yp(!1),
  tl = {},
  qt = Dn(tl),
  Do = Dn(tl),
  Fo = Dn(tl);
function Kn(e) {
  if (e === tl) throw Error(j(174));
  return e;
}
function Uu(e, t) {
  switch ((ae(Fo, t), ae(Do, e), ae(qt, tl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ss(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ss(t, e));
  }
  ue(qt), ae(qt, t);
}
function Dr() {
  ue(qt), ue(Do), ue(Fo);
}
function qp(e) {
  Kn(Fo.current);
  var t = Kn(qt.current),
    n = Ss(t, e.type);
  t !== n && (ae(Do, e), ae(qt, n));
}
function Wu(e) {
  Do.current === e && (ue(qt), ue(Do));
}
var me = Dn(0);
function fi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qa = [];
function Hu() {
  for (var e = 0; e < qa.length; e++)
    qa[e]._workInProgressVersionPrimary = null;
  qa.length = 0;
}
var Il = fn.ReactCurrentDispatcher,
  Za = fn.ReactCurrentBatchConfig,
  Jn = 0,
  ge = null,
  Re = null,
  Me = null,
  pi = !1,
  ko = !1,
  Bo = 0,
  ry = 0;
function We() {
  throw Error(j(321));
}
function Ku(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Bt(e[n], t[n])) return !1;
  return !0;
}
function Qu(e, t, n, r, o, l) {
  if (
    ((Jn = l),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Il.current = e === null || e.memoizedState === null ? ay : sy),
    (e = n(r, o)),
    ko)
  ) {
    l = 0;
    do {
      if (((ko = !1), (Bo = 0), 25 <= l)) throw Error(j(301));
      (l += 1),
        (Me = Re = null),
        (t.updateQueue = null),
        (Il.current = uy),
        (e = n(r, o));
    } while (ko);
  }
  if (
    ((Il.current = mi),
    (t = Re !== null && Re.next !== null),
    (Jn = 0),
    (Me = Re = ge = null),
    (pi = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Gu() {
  var e = Bo !== 0;
  return (Bo = 0), e;
}
function Kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (ge.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function _t() {
  if (Re === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Me === null ? ge.memoizedState : Me.next;
  if (t !== null) (Me = t), (Re = e);
  else {
    if (e === null) throw Error(j(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Me === null ? (ge.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function Vo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ja(e) {
  var t = _t(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Re,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var a = (i = null),
      s = null,
      u = l;
    do {
      var p = u.lane;
      if ((Jn & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var m = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = m), (i = r)) : (s = s.next = m),
          (ge.lanes |= p),
          (er |= p);
      }
      u = u.next;
    } while (u !== null && u !== l);
    s === null ? (i = r) : (s.next = a),
      Bt(r, t.memoizedState) || (tt = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (ge.lanes |= l), (er |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function es(e) {
  var t = _t(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Bt(l, t.memoizedState) || (tt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Zp() {}
function Jp(e, t) {
  var n = ge,
    r = _t(),
    o = t(),
    l = !Bt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (tt = !0)),
    (r = r.queue),
    Yu(nm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Uo(9, tm.bind(null, n, r, o, t), void 0, null),
      Oe === null)
    )
      throw Error(j(349));
    Jn & 30 || em(n, t, o);
  }
  return o;
}
function em(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function tm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rm(t) && om(e);
}
function nm(e, t, n) {
  return n(function () {
    rm(t) && om(e);
  });
}
function rm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Bt(e, n);
  } catch {
    return !0;
  }
}
function om(e) {
  var t = un(e, 1);
  t !== null && Ft(t, e, 1, -1);
}
function bd(e) {
  var t = Kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = iy.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function Uo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function lm() {
  return _t().memoizedState;
}
function Al(e, t, n, r) {
  var o = Kt();
  (ge.flags |= e),
    (o.memoizedState = Uo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ti(e, t, n, r) {
  var o = _t();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Re !== null) {
    var i = Re.memoizedState;
    if (((l = i.destroy), r !== null && Ku(r, i.deps))) {
      o.memoizedState = Uo(t, n, l, r);
      return;
    }
  }
  (ge.flags |= e), (o.memoizedState = Uo(1 | t, n, l, r));
}
function Nd(e, t) {
  return Al(8390656, 8, e, t);
}
function Yu(e, t) {
  return Ti(2048, 8, e, t);
}
function im(e, t) {
  return Ti(4, 2, e, t);
}
function am(e, t) {
  return Ti(4, 4, e, t);
}
function sm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function um(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ti(4, 4, sm.bind(null, t, e), n)
  );
}
function Xu() {}
function cm(e, t) {
  var n = _t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ku(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dm(e, t) {
  var n = _t();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ku(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fm(e, t, n) {
  return Jn & 21
    ? (Bt(n, t) || ((n = hp()), (ge.lanes |= n), (er |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (tt = !0)), (e.memoizedState = n));
}
function oy(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Za.transition;
  Za.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (Za.transition = r);
  }
}
function pm() {
  return _t().memoizedState;
}
function ly(e, t, n) {
  var r = Mn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mm(e))
  )
    hm(t, n);
  else if (((n = Hp(e, t, n, r)), n !== null)) {
    var o = Xe();
    Ft(n, e, r, o), gm(n, t, r);
  }
}
function iy(e, t, n) {
  var r = Mn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mm(e)) hm(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Bt(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Bu(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hp(e, t, o, r)),
      n !== null && ((o = Xe()), Ft(n, e, r, o), gm(n, t, r));
  }
}
function mm(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function hm(e, t) {
  ko = pi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pu(e, n);
  }
}
var mi = {
    readContext: Et,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  ay = {
    readContext: Et,
    useCallback: function (e, t) {
      return (Kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Et,
    useEffect: Nd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Al(4194308, 4, sm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Al(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Al(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ly.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bd,
    useDebugValue: Xu,
    useDeferredValue: function (e) {
      return (Kt().memoizedState = e);
    },
    useTransition: function () {
      var e = bd(!1),
        t = e[0];
      return (e = oy.bind(null, e[1])), (Kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ge,
        o = Kt();
      if (fe) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Oe === null)) throw Error(j(349));
        Jn & 30 || em(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Nd(nm.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Uo(9, tm.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Kt(),
        t = Oe.identifierPrefix;
      if (fe) {
        var n = on,
          r = rn;
        (n = (r & ~(1 << (32 - Dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ry++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sy = {
    readContext: Et,
    useCallback: cm,
    useContext: Et,
    useEffect: Yu,
    useImperativeHandle: um,
    useInsertionEffect: im,
    useLayoutEffect: am,
    useMemo: dm,
    useReducer: Ja,
    useRef: lm,
    useState: function () {
      return Ja(Vo);
    },
    useDebugValue: Xu,
    useDeferredValue: function (e) {
      var t = _t();
      return fm(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ja(Vo)[0],
        t = _t().memoizedState;
      return [e, t];
    },
    useMutableSource: Zp,
    useSyncExternalStore: Jp,
    useId: pm,
    unstable_isNewReconciler: !1,
  },
  uy = {
    readContext: Et,
    useCallback: cm,
    useContext: Et,
    useEffect: Yu,
    useImperativeHandle: um,
    useInsertionEffect: im,
    useLayoutEffect: am,
    useMemo: dm,
    useReducer: es,
    useRef: lm,
    useState: function () {
      return es(Vo);
    },
    useDebugValue: Xu,
    useDeferredValue: function (e) {
      var t = _t();
      return Re === null ? (t.memoizedState = e) : fm(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = es(Vo)[0],
        t = _t().memoizedState;
      return [e, t];
    },
    useMutableSource: Zp,
    useSyncExternalStore: Jp,
    useId: pm,
    unstable_isNewReconciler: !1,
  };
function Fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += I0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ts(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ws(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var cy = typeof WeakMap == "function" ? WeakMap : Map;
function ym(e, t, n) {
  (n = ln(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gi || ((gi = !0), (eu = r)), Ws(e, t);
    }),
    n
  );
}
function vm(e, t, n) {
  (n = ln(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ws(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Ws(e, t),
          typeof r != "function" &&
            (Tn === null ? (Tn = new Set([this])) : Tn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function $d(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = by.bind(null, e, t, n)), t.then(e, e));
}
function Pd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ed(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ln(-1, 1)), (t.tag = 2), jn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var dy = fn.ReactCurrentOwner,
  tt = !1;
function Ye(e, t, n, r) {
  t.child = e === null ? Xp(t, null, n, r) : Ar(t, e.child, n, r);
}
function _d(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    jr(t, o),
    (r = Qu(e, t, n, r, l, o)),
    (n = Gu()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cn(e, t, o))
      : (fe && n && Lu(t), (t.flags |= 1), Ye(e, t, r, o), t.child)
  );
}
function Rd(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !oc(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), xm(e, t, l, r, o))
      : ((e = Vl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lo), n(i, r) && e.ref === t.ref)
    )
      return cn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = On(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xm(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Lo(l, r) && e.ref === t.ref)
      if (((tt = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (tt = !0);
      else return (t.lanes = e.lanes), cn(e, t, o);
  }
  return Hs(e, t, n, r, o);
}
function wm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae($r, ut),
        (ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae($r, ut),
          (ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        ae($r, ut),
        (ut |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ae($r, ut),
      (ut |= r);
  return Ye(e, t, o, n), t.child;
}
function Sm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hs(e, t, n, r, o) {
  var l = rt(n) ? qn : Ge.current;
  return (
    (l = zr(t, l)),
    jr(t, o),
    (n = Qu(e, t, n, r, l, o)),
    (r = Gu()),
    e !== null && !tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        cn(e, t, o))
      : (fe && r && Lu(t), (t.flags |= 1), Ye(e, t, n, o), t.child)
  );
}
function jd(e, t, n, r, o) {
  if (rt(n)) {
    var l = !0;
    ii(t);
  } else l = !1;
  if ((jr(t, o), t.stateNode === null))
    Dl(e, t), Gp(t, n, r), Us(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Et(u))
      : ((u = rt(n) ? qn : Ge.current), (u = zr(t, u)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && kd(t, i, r, u)),
      (wn = !1);
    var c = t.memoizedState;
    (i.state = c),
      di(t, r, i, o),
      (s = t.memoizedState),
      a !== r || c !== s || nt.current || wn
        ? (typeof p == "function" && (Vs(t, n, p, r), (s = t.memoizedState)),
          (a = wn || Sd(t, n, a, r, c, s, u))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Kp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : zt(t.type, a)),
      (i.props = u),
      (m = t.pendingProps),
      (c = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Et(s))
        : ((s = rt(n) ? qn : Ge.current), (s = zr(t, s)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== m || c !== s) && kd(t, i, r, s)),
      (wn = !1),
      (c = t.memoizedState),
      (i.state = c),
      di(t, r, i, o);
    var v = t.memoizedState;
    a !== m || c !== v || nt.current || wn
      ? (typeof x == "function" && (Vs(t, n, x, r), (v = t.memoizedState)),
        (u = wn || Sd(t, n, u, r, c, v, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ks(e, t, n, r, l, o);
}
function Ks(e, t, n, r, o, l) {
  Sm(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && gd(t, n, !1), cn(e, t, l);
  (r = t.stateNode), (dy.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ar(t, e.child, null, l)), (t.child = Ar(t, null, a, l)))
      : Ye(e, t, a, l),
    (t.memoizedState = r.state),
    o && gd(t, n, !0),
    t.child
  );
}
function km(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hd(e, t.context, !1),
    Uu(e, t.containerInfo);
}
function Td(e, t, n, r, o) {
  return Ir(), Iu(o), (t.flags |= 256), Ye(e, t, n, r), t.child;
}
var Qs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cm(e, t, n) {
  var r = t.pendingProps,
    o = me.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(me, o & 1),
    e === null)
  )
    return (
      Fs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Li(i, r, 0, null)),
              (e = Xn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Gs(n)),
              (t.memoizedState = Qs),
              e)
            : qu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return fy(e, t, i, r, a, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = On(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = On(a, l)) : ((l = Xn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Gs(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Qs),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = On(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qu(e, t) {
  return (
    (t = Li({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Sl(e, t, n, r) {
  return (
    r !== null && Iu(r),
    Ar(t, e.child, null, n),
    (e = qu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function fy(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ts(Error(j(422)))), Sl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Li({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Xn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Ar(t, e.child, null, i),
        (t.child.memoizedState = Gs(i)),
        (t.memoizedState = Qs),
        l);
  if (!(t.mode & 1)) return Sl(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(j(419))), (r = ts(l, r, void 0)), Sl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), tt || a)) {
    if (((r = Oe), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), un(e, o), Ft(r, e, o, -1));
    }
    return rc(), (r = ts(Error(j(421)))), Sl(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ny.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (dt = Rn(o.nextSibling)),
      (ft = t),
      (fe = !0),
      (At = null),
      e !== null &&
        ((kt[Ct++] = rn),
        (kt[Ct++] = on),
        (kt[Ct++] = Zn),
        (rn = e.id),
        (on = e.overflow),
        (Zn = t)),
      (t = qu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Md(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bs(e.return, t, n);
}
function ns(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function bm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ye(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Md(e, n, t);
        else if (e.tag === 19) Md(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ae(me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && fi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ns(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ns(t, !0, n, null, l);
        break;
      case "together":
        ns(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Dl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function cn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (er |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = On(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function py(e, t, n) {
  switch (t.tag) {
    case 3:
      km(t), Ir();
      break;
    case 5:
      qp(t);
      break;
    case 1:
      rt(t.type) && ii(t);
      break;
    case 4:
      Uu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ae(ui, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Cm(e, t, n)
          : (ae(me, me.current & 1),
            (e = cn(e, t, n)),
            e !== null ? e.sibling : null);
      ae(me, me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return bm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ae(me, me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wm(e, t, n);
  }
  return cn(e, t, n);
}
var Nm, Ys, $m, Pm;
Nm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ys = function () {};
$m = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Kn(qt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = ys(e, o)), (r = ys(e, r)), (l = []);
        break;
      case "select":
        (o = ye({}, o, { value: void 0 })),
          (r = ye({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = ws(e, o)), (r = ws(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oi);
    }
    ks(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Eo.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (l = l || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (l = l || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Eo.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && se("scroll", e),
                  l || a === s || (l = []))
                : (l = l || []).push(u, s));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Pm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function so(e, t) {
  if (!fe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function He(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function my(e, t, n) {
  var r = t.pendingProps;
  switch ((zu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return He(t), null;
    case 1:
      return rt(t.type) && li(), He(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Dr(),
        ue(nt),
        ue(Ge),
        Hu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), At !== null && (ru(At), (At = null)))),
        Ys(e, t),
        He(t),
        null
      );
    case 5:
      Wu(t);
      var o = Kn(Fo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $m(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return He(t), null;
        }
        if (((e = Kn(qt.current)), xl(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Yt] = t), (r[Ao] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < go.length; o++) se(go[o], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              Vc(r, l), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              Wc(r, l), se("invalid", r);
          }
          ks(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      vl(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      vl(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Eo.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              cl(r), Uc(r, l, !0);
              break;
            case "textarea":
              cl(r), Hc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = oi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ep(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Yt] = t),
            (e[Ao] = r),
            Nm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Cs(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < go.length; o++) se(go[o], e);
                o = r;
                break;
              case "source":
                se("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (o = r);
                break;
              case "details":
                se("toggle", e), (o = r);
                break;
              case "input":
                Vc(e, r), (o = ys(e, r)), se("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ye({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                Wc(e, r), (o = ws(e, r)), se("invalid", e);
                break;
              default:
                o = r;
            }
            ks(n, o), (a = o);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var s = a[l];
                l === "style"
                  ? rp(e, s)
                  : l === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && tp(e, s))
                  : l === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && _o(e, s)
                    : typeof s == "number" && _o(e, "" + s)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Eo.hasOwnProperty(l)
                      ? s != null && l === "onScroll" && se("scroll", e)
                      : s != null && Su(e, l, s, i));
              }
            switch (n) {
              case "input":
                cl(e), Uc(e, r, !1);
                break;
              case "textarea":
                cl(e), Hc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ln(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Pr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Pr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = oi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return He(t), null;
    case 6:
      if (e && t.stateNode != null) Pm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Kn(Fo.current)), Kn(qt.current), xl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Yt] = t),
            (l = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                vl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Yt] = t),
            (t.stateNode = r);
      }
      return He(t), null;
    case 13:
      if (
        (ue(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (fe && dt !== null && t.mode & 1 && !(t.flags & 128))
          Wp(), Ir(), (t.flags |= 98560), (l = !1);
        else if (((l = xl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(j(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(j(317));
            l[Yt] = t;
          } else
            Ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          He(t), (l = !1);
        } else At !== null && (ru(At), (At = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? je === 0 && (je = 3) : rc())),
          t.updateQueue !== null && (t.flags |= 4),
          He(t),
          null);
    case 4:
      return (
        Dr(), Ys(e, t), e === null && zo(t.stateNode.containerInfo), He(t), null
      );
    case 10:
      return Fu(t.type._context), He(t), null;
    case 17:
      return rt(t.type) && li(), He(t), null;
    case 19:
      if ((ue(me), (l = t.memoizedState), l === null)) return He(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) so(l, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = fi(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    so(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ae(me, (me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Ce() > Br &&
            ((t.flags |= 128), (r = !0), so(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fi(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              so(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !fe)
            )
              return He(t), null;
          } else
            2 * Ce() - l.renderingStartTime > Br &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), so(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = me.current),
          ae(me, r ? (n & 1) | 2 : n & 1),
          t)
        : (He(t), null);
    case 22:
    case 23:
      return (
        nc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ut & 1073741824 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : He(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function hy(e, t) {
  switch ((zu(t), t.tag)) {
    case 1:
      return (
        rt(t.type) && li(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Dr(),
        ue(nt),
        ue(Ge),
        Hu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wu(t), null;
    case 13:
      if (
        (ue(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(me), null;
    case 4:
      return Dr(), null;
    case 10:
      return Fu(t.type._context), null;
    case 22:
    case 23:
      return nc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kl = !1,
  Qe = !1,
  gy = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function Xs(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var Od = !1;
function yy(e, t) {
  if (((Ms = ti), (e = jp()), Ou(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            s = -1,
            u = 0,
            p = 0,
            m = e,
            c = null;
          t: for (;;) {
            for (
              var x;
              m !== n || (o !== 0 && m.nodeType !== 3) || (a = i + o),
                m !== l || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (c = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (c === n && ++u === o && (a = i),
                c === l && ++p === r && (s = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = c), (c = m.parentNode);
            }
            m = x;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Os = { focusedElem: e, selectionRange: n }, ti = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    b = v.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : zt(t.type, y),
                      b
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (w) {
          Se(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (v = Od), (Od = !1), v;
}
function Co(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Xs(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Mi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function qs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Em(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Em(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Yt], delete t[Ao], delete t[Is], delete t[Jg], delete t[ey])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _m(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ld(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _m(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = oi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zs(e, t, n), e = e.sibling; e !== null; ) Zs(e, t, n), (e = e.sibling);
}
function Js(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Js(e, t, n), e = e.sibling; e !== null; ) Js(e, t, n), (e = e.sibling);
}
var Ae = null,
  It = !1;
function yn(e, t, n) {
  for (n = n.child; n !== null; ) Rm(e, t, n), (n = n.sibling);
}
function Rm(e, t, n) {
  if (Xt && typeof Xt.onCommitFiberUnmount == "function")
    try {
      Xt.onCommitFiberUnmount(Ni, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Qe || Nr(n, t);
    case 6:
      var r = Ae,
        o = It;
      (Ae = null),
        yn(e, t, n),
        (Ae = r),
        (It = o),
        Ae !== null &&
          (It
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (It
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ya(e.parentNode, n)
              : e.nodeType === 1 && Ya(e, n),
            Mo(e))
          : Ya(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae),
        (o = It),
        (Ae = n.stateNode.containerInfo),
        (It = !0),
        yn(e, t, n),
        (Ae = r),
        (It = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Xs(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      yn(e, t, n);
      break;
    case 1:
      if (
        !Qe &&
        (Nr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Se(n, t, a);
        }
      yn(e, t, n);
      break;
    case 21:
      yn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Qe = (r = Qe) || n.memoizedState !== null), yn(e, t, n), (Qe = r))
        : yn(e, t, n);
      break;
    default:
      yn(e, t, n);
  }
}
function zd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gy()),
      t.forEach(function (r) {
        var o = $y.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (It = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (It = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (It = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(j(160));
        Rm(l, i, o), (Ae = null), (It = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) jm(t, e), (t = t.sibling);
}
function jm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lt(t, e), Ht(e), r & 4)) {
        try {
          Co(3, e, e.return), Mi(3, e);
        } catch (y) {
          Se(e, e.return, y);
        }
        try {
          Co(5, e, e.return);
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      break;
    case 1:
      Lt(t, e), Ht(e), r & 512 && n !== null && Nr(n, n.return);
      break;
    case 5:
      if (
        (Lt(t, e),
        Ht(e),
        r & 512 && n !== null && Nr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          _o(o, "");
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Zf(o, l),
              Cs(a, i);
            var u = Cs(a, l);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                m = s[i + 1];
              p === "style"
                ? rp(o, m)
                : p === "dangerouslySetInnerHTML"
                ? tp(o, m)
                : p === "children"
                ? _o(o, m)
                : Su(o, p, m, u);
            }
            switch (a) {
              case "input":
                vs(o, l);
                break;
              case "textarea":
                Jf(o, l);
                break;
              case "select":
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? Pr(o, !!l.multiple, x, !1)
                  : c !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Pr(o, !!l.multiple, l.defaultValue, !0)
                      : Pr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Ao] = l;
          } catch (y) {
            Se(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Lt(t, e), Ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Lt(t, e), Ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mo(t.containerInfo);
        } catch (y) {
          Se(e, e.return, y);
        }
      break;
    case 4:
      Lt(t, e), Ht(e);
      break;
    case 13:
      Lt(t, e),
        Ht(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ec = Ce())),
        r & 4 && zd(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Qe = (u = Qe) || p), Lt(t, e), (Qe = u)) : Lt(t, e),
        Ht(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (O = e, p = e.child; p !== null; ) {
            for (m = O = p; O !== null; ) {
              switch (((c = O), (x = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Co(4, c, c.return);
                  break;
                case 1:
                  Nr(c, c.return);
                  var v = c.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      Se(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Nr(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Ad(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = c), (O = x)) : Ad(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (o = m.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = np("display", i)));
              } catch (y) {
                Se(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (y) {
                Se(e, e.return, y);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Lt(t, e), Ht(e), r & 4 && zd(e);
      break;
    case 21:
      break;
    default:
      Lt(t, e), Ht(e);
  }
}
function Ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_m(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_o(o, ""), (r.flags &= -33));
          var l = Ld(e);
          Js(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ld(e);
          Zs(e, a, i);
          break;
        default:
          throw Error(j(161));
      }
    } catch (s) {
      Se(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vy(e, t, n) {
  (O = e), Tm(e);
}
function Tm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || kl;
      if (!i) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Qe;
        a = kl;
        var u = Qe;
        if (((kl = i), (Qe = s) && !u))
          for (O = o; O !== null; )
            (i = O),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Dd(o)
                : s !== null
                ? ((s.return = i), (O = s))
                : Dd(o);
        for (; l !== null; ) (O = l), Tm(l), (l = l.sibling);
        (O = o), (kl = a), (Qe = u);
      }
      Id(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (O = l)) : Id(e);
  }
}
function Id(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || Mi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Qe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : zt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && wd(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wd(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && Mo(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Qe || (t.flags & 512 && qs(t));
      } catch (c) {
        Se(t, t.return, c);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Ad(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Dd(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mi(4, t);
          } catch (s) {
            Se(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Se(t, o, s);
            }
          }
          var l = t.return;
          try {
            qs(t);
          } catch (s) {
            Se(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qs(t);
          } catch (s) {
            Se(t, i, s);
          }
      }
    } catch (s) {
      Se(t, t.return, s);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var xy = Math.ceil,
  hi = fn.ReactCurrentDispatcher,
  Zu = fn.ReactCurrentOwner,
  Pt = fn.ReactCurrentBatchConfig,
  Z = 0,
  Oe = null,
  _e = null,
  Fe = 0,
  ut = 0,
  $r = Dn(0),
  je = 0,
  Wo = null,
  er = 0,
  Oi = 0,
  Ju = 0,
  bo = null,
  et = null,
  ec = 0,
  Br = 1 / 0,
  tn = null,
  gi = !1,
  eu = null,
  Tn = null,
  Cl = !1,
  $n = null,
  yi = 0,
  No = 0,
  tu = null,
  Fl = -1,
  Bl = 0;
function Xe() {
  return Z & 6 ? Ce() : Fl !== -1 ? Fl : (Fl = Ce());
}
function Mn(e) {
  return e.mode & 1
    ? Z & 2 && Fe !== 0
      ? Fe & -Fe
      : ny.transition !== null
      ? (Bl === 0 && (Bl = hp()), Bl)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kp(e.type))),
        e)
    : 1;
}
function Ft(e, t, n, r) {
  if (50 < No) throw ((No = 0), (tu = null), Error(j(185)));
  Zo(e, n, r),
    (!(Z & 2) || e !== Oe) &&
      (e === Oe && (!(Z & 2) && (Oi |= n), je === 4 && Cn(e, Fe)),
      ot(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Br = Ce() + 500), Ri && Fn()));
}
function ot(e, t) {
  var n = e.callbackNode;
  ng(e, t);
  var r = ei(e, e === Oe ? Fe : 0);
  if (r === 0)
    n !== null && Gc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gc(n), t === 1))
      e.tag === 0 ? ty(Fd.bind(null, e)) : Bp(Fd.bind(null, e)),
        qg(function () {
          !(Z & 6) && Fn();
        }),
        (n = null);
    else {
      switch (gp(r)) {
        case 1:
          n = $u;
          break;
        case 4:
          n = pp;
          break;
        case 16:
          n = Jl;
          break;
        case 536870912:
          n = mp;
          break;
        default:
          n = Jl;
      }
      n = Fm(n, Mm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Mm(e, t) {
  if (((Fl = -1), (Bl = 0), Z & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Tr() && e.callbackNode !== n) return null;
  var r = ei(e, e === Oe ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vi(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var l = Lm();
    (Oe !== e || Fe !== t) && ((tn = null), (Br = Ce() + 500), Yn(e, t));
    do
      try {
        ky();
        break;
      } catch (a) {
        Om(e, a);
      }
    while (!0);
    Du(),
      (hi.current = l),
      (Z = o),
      _e !== null ? (t = 0) : ((Oe = null), (Fe = 0), (t = je));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Es(e)), o !== 0 && ((r = o), (t = nu(e, o)))), t === 1)
    )
      throw ((n = Wo), Yn(e, 0), Cn(e, r), ot(e, Ce()), n);
    if (t === 6) Cn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !wy(o) &&
          ((t = vi(e, r)),
          t === 2 && ((l = Es(e)), l !== 0 && ((r = l), (t = nu(e, l)))),
          t === 1))
      )
        throw ((n = Wo), Yn(e, 0), Cn(e, r), ot(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Un(e, et, tn);
          break;
        case 3:
          if (
            (Cn(e, r), (r & 130023424) === r && ((t = ec + 500 - Ce()), 10 < t))
          ) {
            if (ei(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Xe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = zs(Un.bind(null, e, et, tn), t);
            break;
          }
          Un(e, et, tn);
          break;
        case 4:
          if ((Cn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Dt(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * xy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zs(Un.bind(null, e, et, tn), r);
            break;
          }
          Un(e, et, tn);
          break;
        case 5:
          Un(e, et, tn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return ot(e, Ce()), e.callbackNode === n ? Mm.bind(null, e) : null;
}
function nu(e, t) {
  var n = bo;
  return (
    e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256),
    (e = vi(e, t)),
    e !== 2 && ((t = et), (et = n), t !== null && ru(t)),
    e
  );
}
function ru(e) {
  et === null ? (et = e) : et.push.apply(et, e);
}
function wy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Bt(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Cn(e, t) {
  for (
    t &= ~Ju,
      t &= ~Oi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fd(e) {
  if (Z & 6) throw Error(j(327));
  Tr();
  var t = ei(e, 0);
  if (!(t & 1)) return ot(e, Ce()), null;
  var n = vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Es(e);
    r !== 0 && ((t = r), (n = nu(e, r)));
  }
  if (n === 1) throw ((n = Wo), Yn(e, 0), Cn(e, t), ot(e, Ce()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Un(e, et, tn),
    ot(e, Ce()),
    null
  );
}
function tc(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Br = Ce() + 500), Ri && Fn());
  }
}
function tr(e) {
  $n !== null && $n.tag === 0 && !(Z & 6) && Tr();
  var t = Z;
  Z |= 1;
  var n = Pt.transition,
    r = oe;
  try {
    if (((Pt.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (Pt.transition = n), (Z = t), !(Z & 6) && Fn();
  }
}
function nc() {
  (ut = $r.current), ue($r);
}
function Yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Xg(n)), _e !== null))
    for (n = _e.return; n !== null; ) {
      var r = n;
      switch ((zu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && li();
          break;
        case 3:
          Dr(), ue(nt), ue(Ge), Hu();
          break;
        case 5:
          Wu(r);
          break;
        case 4:
          Dr();
          break;
        case 13:
          ue(me);
          break;
        case 19:
          ue(me);
          break;
        case 10:
          Fu(r.type._context);
          break;
        case 22:
        case 23:
          nc();
      }
      n = n.return;
    }
  if (
    ((Oe = e),
    (_e = e = On(e.current, null)),
    (Fe = ut = t),
    (je = 0),
    (Wo = null),
    (Ju = Oi = er = 0),
    (et = bo = null),
    Hn !== null)
  ) {
    for (t = 0; t < Hn.length; t++)
      if (((n = Hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Hn = null;
  }
  return e;
}
function Om(e, t) {
  do {
    var n = _e;
    try {
      if ((Du(), (Il.current = mi), pi)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        pi = !1;
      }
      if (
        ((Jn = 0),
        (Me = Re = ge = null),
        (ko = !1),
        (Bo = 0),
        (Zu.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (Wo = t), (_e = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = Fe),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            p = a,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var c = p.alternate;
            c
              ? ((p.updateQueue = c.updateQueue),
                (p.memoizedState = c.memoizedState),
                (p.lanes = c.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = Pd(i);
          if (x !== null) {
            (x.flags &= -257),
              Ed(x, i, a, l, t),
              x.mode & 1 && $d(l, u, t),
              (t = x),
              (s = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              $d(l, u, t), rc();
              break e;
            }
            s = Error(j(426));
          }
        } else if (fe && a.mode & 1) {
          var b = Pd(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              Ed(b, i, a, l, t),
              Iu(Fr(s, a));
            break e;
          }
        }
        (l = s = Fr(s, a)),
          je !== 4 && (je = 2),
          bo === null ? (bo = [l]) : bo.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var h = ym(l, s, t);
              xd(l, h);
              break e;
            case 1:
              a = s;
              var f = l.type,
                g = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Tn === null || !Tn.has(g))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var w = vm(l, a, t);
                xd(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Im(n);
    } catch (k) {
      (t = k), _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lm() {
  var e = hi.current;
  return (hi.current = mi), e === null ? mi : e;
}
function rc() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    Oe === null || (!(er & 268435455) && !(Oi & 268435455)) || Cn(Oe, Fe);
}
function vi(e, t) {
  var n = Z;
  Z |= 2;
  var r = Lm();
  (Oe !== e || Fe !== t) && ((tn = null), Yn(e, t));
  do
    try {
      Sy();
      break;
    } catch (o) {
      Om(e, o);
    }
  while (!0);
  if ((Du(), (Z = n), (hi.current = r), _e !== null)) throw Error(j(261));
  return (Oe = null), (Fe = 0), je;
}
function Sy() {
  for (; _e !== null; ) zm(_e);
}
function ky() {
  for (; _e !== null && !Q0(); ) zm(_e);
}
function zm(e) {
  var t = Dm(e.alternate, e, ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? Im(e) : (_e = t),
    (Zu.current = null);
}
function Im(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hy(n, t)), n !== null)) {
        (n.flags &= 32767), (_e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (je = 6), (_e = null);
        return;
      }
    } else if (((n = my(n, t, ut)), n !== null)) {
      _e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function Un(e, t, n) {
  var r = oe,
    o = Pt.transition;
  try {
    (Pt.transition = null), (oe = 1), Cy(e, t, n, r);
  } finally {
    (Pt.transition = o), (oe = r);
  }
  return null;
}
function Cy(e, t, n, r) {
  do Tr();
  while ($n !== null);
  if (Z & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (rg(e, l),
    e === Oe && ((_e = Oe = null), (Fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Cl ||
      ((Cl = !0),
      Fm(Jl, function () {
        return Tr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Pt.transition), (Pt.transition = null);
    var i = oe;
    oe = 1;
    var a = Z;
    (Z |= 4),
      (Zu.current = null),
      yy(e, n),
      jm(n, e),
      Ug(Os),
      (ti = !!Ms),
      (Os = Ms = null),
      (e.current = n),
      vy(n),
      G0(),
      (Z = a),
      (oe = i),
      (Pt.transition = l);
  } else e.current = n;
  if (
    (Cl && ((Cl = !1), ($n = e), (yi = o)),
    (l = e.pendingLanes),
    l === 0 && (Tn = null),
    q0(n.stateNode),
    ot(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (gi) throw ((gi = !1), (e = eu), (eu = null), e);
  return (
    yi & 1 && e.tag !== 0 && Tr(),
    (l = e.pendingLanes),
    l & 1 ? (e === tu ? No++ : ((No = 0), (tu = e))) : (No = 0),
    Fn(),
    null
  );
}
function Tr() {
  if ($n !== null) {
    var e = gp(yi),
      t = Pt.transition,
      n = oe;
    try {
      if (((Pt.transition = null), (oe = 16 > e ? 16 : e), $n === null))
        var r = !1;
      else {
        if (((e = $n), ($n = null), (yi = 0), Z & 6)) throw Error(j(331));
        var o = Z;
        for (Z |= 4, O = e.current; O !== null; ) {
          var l = O,
            i = l.child;
          if (O.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (O = u; O !== null; ) {
                  var p = O;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Co(8, p, l);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (O = m);
                  else
                    for (; O !== null; ) {
                      p = O;
                      var c = p.sibling,
                        x = p.return;
                      if ((Em(p), p === u)) {
                        O = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = x), (O = c);
                        break;
                      }
                      O = x;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var b = y.sibling;
                    (y.sibling = null), (y = b);
                  } while (y !== null);
                }
              }
              O = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (O = i);
          else
            e: for (; O !== null; ) {
              if (((l = O), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Co(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (O = h);
                break e;
              }
              O = l.return;
            }
        }
        var f = e.current;
        for (O = f; O !== null; ) {
          i = O;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), (O = g);
          else
            e: for (i = f; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mi(9, a);
                  }
                } catch (k) {
                  Se(a, a.return, k);
                }
              if (a === i) {
                O = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (O = w);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((Z = o), Fn(), Xt && typeof Xt.onPostCommitFiberRoot == "function")
        )
          try {
            Xt.onPostCommitFiberRoot(Ni, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (Pt.transition = t);
    }
  }
  return !1;
}
function Bd(e, t, n) {
  (t = Fr(n, t)),
    (t = ym(e, t, 1)),
    (e = jn(e, t, 1)),
    (t = Xe()),
    e !== null && (Zo(e, 1, t), ot(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) Bd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Tn === null || !Tn.has(r)))
        ) {
          (e = Fr(n, e)),
            (e = vm(t, e, 1)),
            (t = jn(t, e, 1)),
            (e = Xe()),
            t !== null && (Zo(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function by(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Oe === e &&
      (Fe & n) === n &&
      (je === 4 || (je === 3 && (Fe & 130023424) === Fe && 500 > Ce() - ec)
        ? Yn(e, 0)
        : (Ju |= n)),
    ot(e, t);
}
function Am(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pl), (pl <<= 1), !(pl & 130023424) && (pl = 4194304))
      : (t = 1));
  var n = Xe();
  (e = un(e, t)), e !== null && (Zo(e, t, n), ot(e, n));
}
function Ny(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Am(e, n);
}
function $y(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Am(e, n);
}
var Dm;
Dm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || nt.current) tt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (tt = !1), py(e, t, n);
      tt = !!(e.flags & 131072);
    }
  else (tt = !1), fe && t.flags & 1048576 && Vp(t, si, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Dl(e, t), (e = t.pendingProps);
      var o = zr(t, Ge.current);
      jr(t, n), (o = Qu(null, t, r, e, o, n));
      var l = Gu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            rt(r) ? ((l = !0), ii(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Vu(t),
            (o.updater = ji),
            (t.stateNode = o),
            (o._reactInternals = t),
            Us(t, r, e, n),
            (t = Ks(null, t, r, !0, l, n)))
          : ((t.tag = 0), fe && l && Lu(t), Ye(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Dl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ey(r)),
          (e = zt(r, e)),
          o)
        ) {
          case 0:
            t = Hs(null, t, r, e, n);
            break e;
          case 1:
            t = jd(null, t, r, e, n);
            break e;
          case 11:
            t = _d(null, t, r, e, n);
            break e;
          case 14:
            t = Rd(null, t, r, zt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : zt(r, o)),
        Hs(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : zt(r, o)),
        jd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((km(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Kp(e, t),
          di(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Fr(Error(j(423)), t)), (t = Td(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Fr(Error(j(424)), t)), (t = Td(e, t, r, n, o));
            break e;
          } else
            for (
              dt = Rn(t.stateNode.containerInfo.firstChild),
                ft = t,
                fe = !0,
                At = null,
                n = Xp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ir(), r === o)) {
            t = cn(e, t, n);
            break e;
          }
          Ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qp(t),
        e === null && Fs(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Ls(r, o) ? (i = null) : l !== null && Ls(r, l) && (t.flags |= 32),
        Sm(e, t),
        Ye(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Fs(t), null;
    case 13:
      return Cm(e, t, n);
    case 4:
      return (
        Uu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ar(t, null, r, n)) : Ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : zt(r, o)),
        _d(e, t, r, o, n)
      );
    case 7:
      return Ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          ae(ui, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Bt(l.value, i)) {
            if (l.children === o.children && !nt.current) {
              t = cn(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      (s = ln(-1, n & -n)), (s.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (u.pending = s);
                      }
                    }
                    (l.lanes |= n),
                      (s = l.alternate),
                      s !== null && (s.lanes |= n),
                      Bs(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(j(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Bs(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ye(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        jr(t, n),
        (o = Et(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = zt(r, t.pendingProps)),
        (o = zt(r.type, o)),
        Rd(e, t, r, o, n)
      );
    case 15:
      return xm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : zt(r, o)),
        Dl(e, t),
        (t.tag = 1),
        rt(r) ? ((e = !0), ii(t)) : (e = !1),
        jr(t, n),
        Gp(t, r, o),
        Us(t, r, o, n),
        Ks(null, t, r, !0, e, n)
      );
    case 19:
      return bm(e, t, n);
    case 22:
      return wm(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Fm(e, t) {
  return fp(e, t);
}
function Py(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Nt(e, t, n, r) {
  return new Py(e, t, n, r);
}
function oc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ey(e) {
  if (typeof e == "function") return oc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Cu)) return 11;
    if (e === bu) return 14;
  }
  return 2;
}
function On(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vl(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) oc(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case gr:
        return Xn(n.children, o, l, t);
      case ku:
        (i = 8), (o |= 8);
        break;
      case ps:
        return (
          (e = Nt(12, n, t, o | 2)), (e.elementType = ps), (e.lanes = l), e
        );
      case ms:
        return (e = Nt(13, n, t, o)), (e.elementType = ms), (e.lanes = l), e;
      case hs:
        return (e = Nt(19, n, t, o)), (e.elementType = hs), (e.lanes = l), e;
      case Yf:
        return Li(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qf:
              i = 10;
              break e;
            case Gf:
              i = 9;
              break e;
            case Cu:
              i = 11;
              break e;
            case bu:
              i = 14;
              break e;
            case xn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Nt(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Xn(e, t, n, r) {
  return (e = Nt(7, e, r, t)), (e.lanes = n), e;
}
function Li(e, t, n, r) {
  return (
    (e = Nt(22, e, r, t)),
    (e.elementType = Yf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function rs(e, t, n) {
  return (e = Nt(6, e, null, t)), (e.lanes = n), e;
}
function os(e, t, n) {
  return (
    (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _y(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Aa(0)),
    (this.expirationTimes = Aa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Aa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function lc(e, t, n, r, o, l, i, a, s) {
  return (
    (e = new _y(e, t, n, a, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Nt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vu(l),
    e
  );
}
function Ry(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bm(e) {
  if (!e) return zn;
  e = e._reactInternals;
  e: {
    if (rr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return Fp(e, n, t);
  }
  return t;
}
function Vm(e, t, n, r, o, l, i, a, s) {
  return (
    (e = lc(n, r, !0, e, o, l, i, a, s)),
    (e.context = Bm(null)),
    (n = e.current),
    (r = Xe()),
    (o = Mn(n)),
    (l = ln(r, o)),
    (l.callback = t ?? null),
    jn(n, l, o),
    (e.current.lanes = o),
    Zo(e, o, r),
    ot(e, r),
    e
  );
}
function zi(e, t, n, r) {
  var o = t.current,
    l = Xe(),
    i = Mn(o);
  return (
    (n = Bm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ln(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jn(o, t, i)),
    e !== null && (Ft(e, o, i, l), zl(e, o, i)),
    i
  );
}
function xi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ic(e, t) {
  Vd(e, t), (e = e.alternate) && Vd(e, t);
}
function jy() {
  return null;
}
var Um =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ac(e) {
  this._internalRoot = e;
}
Ii.prototype.render = ac.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  zi(e, t, null, null);
};
Ii.prototype.unmount = ac.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function () {
      zi(null, e, null, null);
    }),
      (t[sn] = null);
  }
};
function Ii(e) {
  this._internalRoot = e;
}
Ii.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
    kn.splice(n, 0, e), n === 0 && Sp(e);
  }
};
function sc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ai(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ud() {}
function Ty(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = xi(i);
        l.call(u);
      };
    }
    var i = Vm(t, r, e, 0, null, !1, !1, "", Ud);
    return (
      (e._reactRootContainer = i),
      (e[sn] = i.current),
      zo(e.nodeType === 8 ? e.parentNode : e),
      tr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = xi(s);
      a.call(u);
    };
  }
  var s = lc(e, 0, !1, null, null, !1, !1, "", Ud);
  return (
    (e._reactRootContainer = s),
    (e[sn] = s.current),
    zo(e.nodeType === 8 ? e.parentNode : e),
    tr(function () {
      zi(t, s, n, r);
    }),
    s
  );
}
function Di(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = xi(i);
        a.call(s);
      };
    }
    zi(t, i, e, o);
  } else i = Ty(n, t, e, o, r);
  return xi(i);
}
yp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ho(t.pendingLanes);
        n !== 0 &&
          (Pu(t, n | 1), ot(t, Ce()), !(Z & 6) && ((Br = Ce() + 500), Fn()));
      }
      break;
    case 13:
      tr(function () {
        var r = un(e, 1);
        if (r !== null) {
          var o = Xe();
          Ft(r, e, 1, o);
        }
      }),
        ic(e, 1);
  }
};
Eu = function (e) {
  if (e.tag === 13) {
    var t = un(e, 134217728);
    if (t !== null) {
      var n = Xe();
      Ft(t, e, 134217728, n);
    }
    ic(e, 134217728);
  }
};
vp = function (e) {
  if (e.tag === 13) {
    var t = Mn(e),
      n = un(e, t);
    if (n !== null) {
      var r = Xe();
      Ft(n, e, t, r);
    }
    ic(e, t);
  }
};
xp = function () {
  return oe;
};
wp = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
Ns = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = _i(r);
            if (!o) throw Error(j(90));
            qf(r), vs(r, o);
          }
        }
      }
      break;
    case "textarea":
      Jf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Pr(e, !!n.multiple, t, !1);
  }
};
ip = tc;
ap = tr;
var My = { usingClientEntryPoint: !1, Events: [el, wr, _i, op, lp, tc] },
  uo = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Oy = {
    bundleType: uo.bundleType,
    version: uo.version,
    rendererPackageName: uo.rendererPackageName,
    rendererConfig: uo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: uo.findFiberByHostInstance || jy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bl.isDisabled && bl.supportsFiber)
    try {
      (Ni = bl.inject(Oy)), (Xt = bl);
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = My;
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sc(t)) throw Error(j(200));
  return Ry(e, t, null, n);
};
ht.createRoot = function (e, t) {
  if (!sc(e)) throw Error(j(299));
  var n = !1,
    r = "",
    o = Um;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = lc(e, 1, !1, null, null, n, !1, r, o)),
    (e[sn] = t.current),
    zo(e.nodeType === 8 ? e.parentNode : e),
    new ac(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = cp(t)), (e = e === null ? null : e.stateNode), e;
};
ht.flushSync = function (e) {
  return tr(e);
};
ht.hydrate = function (e, t, n) {
  if (!Ai(t)) throw Error(j(200));
  return Di(null, e, t, !0, n);
};
ht.hydrateRoot = function (e, t, n) {
  if (!sc(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Um;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Vm(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[sn] = t.current),
    zo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ii(t);
};
ht.render = function (e, t, n) {
  if (!Ai(t)) throw Error(j(200));
  return Di(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function (e) {
  if (!Ai(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (tr(function () {
        Di(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[sn] = null);
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = tc;
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ai(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Di(e, t, n, !1, r);
};
ht.version = "18.2.0-next-9e3b772b8-20220608";
function Wm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wm);
    } catch (e) {
      console.error(e);
    }
}
Wm(), (Vf.exports = ht);
var Ly = Vf.exports,
  Wd = Ly;
(ds.createRoot = Wd.createRoot), (ds.hydrateRoot = Wd.hydrateRoot);
const zy = () =>
  d.jsx("nav", {
    className: "navbar navbar-expand-lg",
    id: "navbar",
    children: d.jsxs("div", {
      className: "container-fluid",
      id: "container-fluid",
      children: [
        d.jsxs("a", {
          className: "navbar-brand f-lg-5 ms-lg-5 ",
          href: "#",
          id: "logo",
          children: [
            "Restaurante S ",
            d.jsx("span", { className: "yellow", children: "Co" }),
            d.jsx("span", { className: "blue", children: "ci" }),
            d.jsx("span", { className: "red", children: "na" }),
          ],
        }),
        d.jsx("button", {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: d.jsx("span", {
            children: d.jsx("i", { className: "fa-solid fa-bars bars" }),
          }),
        }),
        d.jsx("div", {
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: d.jsxs("div", {
            className: "navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5 navcontent",
            children: [
              d.jsx("a", {
                className: "fs-5",
                id: "nav-link",
                "aria-current": "page",
                href: "#home",
                children: "Inicio",
              }),
              d.jsx("a", {
                className: "fs-5",
                id: "nav-link",
                href: "#about",
                children: "Sobre nosotros",
              }),
              d.jsx("a", {
                className: "fs-5",
                id: "nav-link",
                href: "#menu",
                children: "Menú",
              }),
              d.jsx("a", {
                className: "fs-5",
                id: "nav-link",
                href: "#contact",
                children: "Contactanos",
              }),
            ],
          }),
        }),
      ],
    }),
  });
function Fi({ url: e, render: t }) {
  const [n, r] = S.useState([]),
    [o, l] = S.useState(!0),
    [i, a] = S.useState(null);
  return (
    S.useEffect(() => {
      fetch(e)
        .then((s) => {
          if (!s.ok) throw new Error("Network response was not ok");
          return s.json();
        })
        .then((s) => r(s))
        .catch((s) => {
          console.error("Error fetching data:", s), a(s.message);
        })
        .finally(() => l(!1));
    }, [e]),
    o
      ? d.jsx("p", { children: "Cargando..." })
      : i
      ? d.jsxs("p", { children: ["Error: ", i] })
      : t(n)
  );
}
const Iy = () =>
    d.jsx(d.Fragment, {
      children: d.jsx(Fi, {
        url: "https://hoteless-hilton.000webhostapp.com/getFood.php",
        render: (e) =>
          d.jsx(d.Fragment, {
            children:
              e.length > 0
                ? e
                    .filter((t) => t.id === "9")
                    .map((t) =>
                      d.jsx(
                        "section",
                        {
                          id: "home",
                          style: {
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${t.img})`,
                          },
                          children: d.jsxs("div", {
                            className: "content",
                            id: "content",
                            children: [
                              d.jsxs("h3", {
                                children: [
                                  "Mejora tu día con",
                                  d.jsx("br", {}),
                                  "comida 100% Colombiana",
                                ],
                              }),
                              d.jsx("p", {
                                children:
                                  "Explora la diversidad de sabores de Colombia a través de nuestros platos, que te llevarán desde las montañas de los Andes hasta las costas del Caribe.",
                              }),
                              d.jsx("button", {
                                className: "btn btn-buy",
                                id: "btn-home",
                                children: "Pide ahora!",
                              }),
                            ],
                          }),
                        },
                        t.id
                      )
                    )
                : d.jsx("p", { children: "No hay datos disponibles." }),
          }),
      }),
    }),
  Ay = () =>
    d.jsxs("section", {
      id: "about",
      children: [
        d.jsx("div", {
          className: "container",
          id: "container",
          children: d.jsxs("h2", {
            id: "heading",
            children: ["Sobre ", d.jsx("span", { children: "nosotros" })],
          }),
        }),
        d.jsxs("div", {
          className: "row",
          id: "container-about",
          children: [
            d.jsx("div", {
              className: "col-lg-6",
              id: "about-img",
              children: d.jsx("div", {
                className: "img-about",
                children: d.jsx(Fi, {
                  url: "https://hoteless-hilton.000webhostapp.com/getFood.php",
                  render: (e) =>
                    d.jsx(d.Fragment, {
                      children:
                        e.length > 0
                          ? e
                              .filter((t) => t.id === "7")
                              .map((t) =>
                                d.jsx("img", { src: t.img, alt: "" }, t.id)
                              )
                          : d.jsx("p", {
                              children: "No hay datos disponibles.",
                            }),
                    }),
                }),
              }),
            }),
            d.jsxs("div", {
              className: "col-lg-6",
              id: "about-text",
              children: [
                d.jsx("h3", {
                  children: "¿Qué hace a nuestra comida especial?",
                }),
                d.jsxs("p", {
                  children: [
                    "Cada región de Colombia tiene su propia identidad culinaria, influenciada por su clima, geografía y tradiciones. Desde los platos andinos con influencias indígenas hasta la cocina costeña con sabores del mar, hay una gran variedad de platos para explorar.",
                    d.jsx("br", {}),
                    "La cocina colombiana ha sido influenciada por diversas culturas a lo largo de su historia, incluyendo la indígena, española y africana. Estas influencias se reflejan en la variedad de ingredientes, técnicas de cocina y platos que se encuentran en todo el país.",
                  ],
                }),
                d.jsx("button", {
                  className: "btn",
                  id: "btn-about",
                  children: "Saber más",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Dy = () =>
    d.jsx("section", {
      id: "popular-dish",
      children: d.jsxs("div", {
        className: "container",
        id: "container",
        children: [
          d.jsx("div", {
            className: "title",
            children: d.jsxs("h2", {
              id: "heading",
              children: ["Comidas ", d.jsx("span", { children: "populares" })],
            }),
          }),
          d.jsx("div", {
            className: "row",
            id: "container-popular-dish",
            children: d.jsx(Fi, {
              url: "https://hoteless-hilton.000webhostapp.com/getFood.php",
              render: (e) => {
                if (e && e.length > 0) {
                  const t = e
                    .sort((n, r) => r.cant_vendidos - n.cant_vendidos)
                    .slice(0, 3);
                  return d.jsx(d.Fragment, {
                    children: t.map((n) =>
                      d.jsx(
                        "div",
                        {
                          className: "col-md-6 col-lg-4 m-0 mb-3",
                          id: "top-dish",
                          children: d.jsx("img", {
                            src: n.img,
                            alt: n.nombre,
                            id: "img_top",
                          }),
                        },
                        n.id
                      )
                    ),
                  });
                }
              },
            }),
          }),
        ],
      }),
    });
function Hm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Hm(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function L() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Hm(t)) && (r && (r += " "), (r += n));
  return r;
}
(function () {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          ".dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}"
        )
      ),
        document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
const Km = z.forwardRef(
  (
    {
      breakpoint: e,
      fluid: t,
      children: n,
      className: r,
      tag: o = "div",
      ...l
    },
    i
  ) => {
    const a = L(`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`, r);
    return d.jsx(o, { className: a, ...l, ref: i, children: n });
  }
);
Km.displayName = "MDBContainer";
const Qm = z.forwardRef(
  (
    {
      center: e,
      children: t,
      className: n,
      end: r,
      lg: o,
      md: l,
      offsetLg: i,
      offsetMd: a,
      offsetSm: s,
      order: u,
      size: p,
      sm: m,
      start: c,
      tag: x = "div",
      xl: v,
      xxl: y,
      xs: b,
      ...h
    },
    f
  ) => {
    const g = L(
      p && `col-${p}`,
      b && `col-xs-${b}`,
      m && `col-sm-${m}`,
      l && `col-md-${l}`,
      o && `col-lg-${o}`,
      v && `col-xl-${v}`,
      y && `col-xxl-${y}`,
      !p && !b && !m && !l && !o && !v && !y ? "col" : "",
      u && `order-${u}`,
      c && "align-self-start",
      e && "align-self-center",
      r && "align-self-end",
      s && `offset-sm-${s}`,
      a && `offset-md-${a}`,
      i && `offset-lg-${i}`,
      n
    );
    return d.jsx(x, { className: g, ref: f, ...h, children: t });
  }
);
Qm.displayName = "MDBCol";
const Fy = z.forwardRef(
  (
    {
      className: e,
      color: t = "primary",
      pill: n,
      light: r,
      dot: o,
      tag: l = "span",
      children: i,
      notification: a,
      ...s
    },
    u
  ) => {
    const p = L(
      "badge",
      r ? t && `badge-${t}` : t && `bg-${t}`,
      o && "badge-dot",
      n && "rounded-pill",
      a && "badge-notification",
      e
    );
    return d.jsx(l, { className: p, ref: u, ...s, children: i });
  }
);
Fy.displayName = "MDBBadge";
const By = ({ ...e }) => {
    const [t, n] = S.useState(!1),
      r = L("ripple-wave", t && "active");
    return (
      S.useEffect(() => {
        const o = setTimeout(() => {
          n(!0);
        }, 50);
        return () => {
          clearTimeout(o);
        };
      }, []),
      d.jsx("div", { className: r, ...e })
    );
  },
  Vy = (...e) => {
    const t = z.useRef();
    return (
      z.useEffect(() => {
        e.forEach((n) => {
          n &&
            (typeof n == "function" ? n(t.current) : (n.current = t.current));
        });
      }, [e]),
      t
    );
  },
  Gm = z.forwardRef(
    (
      {
        className: e,
        rippleTag: t = "div",
        rippleCentered: n,
        rippleDuration: r = 500,
        rippleUnbound: o,
        rippleRadius: l = 0,
        rippleColor: i = "dark",
        children: a,
        onMouseDown: s,
        ...u
      },
      p
    ) => {
      const m = S.useRef(null),
        c = Vy(p, m),
        x =
          "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%",
        v = [0, 0, 0],
        y = [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ],
        [b, h] = S.useState([]),
        [f, g] = S.useState(!1),
        w = L(
          "ripple",
          "ripple-surface",
          o && "ripple-surface-unbound",
          f && `ripple-surface-${i}`,
          e
        ),
        k = () => {
          if (y.find((P) => P === (i == null ? void 0 : i.toLowerCase())))
            return g(!0);
          {
            const P = N(i).join(",");
            return `radial-gradient(circle, ${x
              .split("{{color}}")
              .join(`${P}`)})`;
          }
        },
        N = (P) => {
          const I = (B) => (
              B.length < 7 &&
                (B = `#${B[1]}${B[1]}${B[2]}${B[2]}${B[3]}${B[3]}`),
              [
                parseInt(B.substr(1, 2), 16),
                parseInt(B.substr(3, 2), 16),
                parseInt(B.substr(5, 2), 16),
              ]
            ),
            V = (B) => {
              const U = document.body.appendChild(
                  document.createElement("fictum")
                ),
                Q = "rgb(1, 2, 3)";
              return (
                (U.style.color = Q),
                U.style.color !== Q ||
                ((U.style.color = B),
                U.style.color === Q || U.style.color === "")
                  ? v
                  : ((B = getComputedStyle(U).color),
                    document.body.removeChild(U),
                    B)
              );
            },
            W = (B) => (
              (B = B.match(/[.\d]+/g).map((U) => +Number(U))), (B.length = 3), B
            );
          return P.toLowerCase() === "transparent"
            ? v
            : P[0] === "#"
            ? I(P)
            : (P.indexOf("rgb") === -1 && (P = V(P)),
              P.indexOf("rgb") === 0 ? W(P) : v);
        },
        C = (P) => {
          const { offsetX: I, offsetY: V, height: W, width: B } = P,
            U = V <= W / 2,
            Q = I <= B / 2,
            K = (ee, Te) => Math.sqrt(ee ** 2 + Te ** 2),
            E = V === W / 2 && I === B / 2,
            A = {
              first: U === !0 && Q === !1,
              second: U === !0 && Q === !0,
              third: U === !1 && Q === !0,
              fourth: U === !1 && Q === !1,
            },
            D = {
              topLeft: K(I, V),
              topRight: K(B - I, V),
              bottomLeft: K(I, W - V),
              bottomRight: K(B - I, W - V),
            };
          let H = 0;
          return (
            E || A.fourth
              ? (H = D.topLeft)
              : A.third
              ? (H = D.topRight)
              : A.second
              ? (H = D.bottomRight)
              : A.first && (H = D.bottomLeft),
            H * 2
          );
        },
        _ = (P) => {
          var I;
          const V =
              (I = c.current) == null ? void 0 : I.getBoundingClientRect(),
            W = P.clientX - V.left,
            B = P.clientY - V.top,
            U = V.height,
            Q = V.width,
            K = {
              offsetX: n ? U / 2 : W,
              offsetY: n ? Q / 2 : B,
              height: U,
              width: Q,
            },
            E = { delay: r && r * 0.5, duration: r && r - r * 0.5 },
            A = C(K),
            D = l || A / 2,
            H = {
              left: n ? `${Q / 2 - D}px` : `${W - D}px`,
              top: n ? `${U / 2 - D}px` : `${B - D}px`,
              height: l ? `${l * 2}px` : `${A}px`,
              width: l ? `${l * 2}px` : `${A}px`,
              transitionDelay: `0s, ${E.delay}ms`,
              transitionDuration: `${r}ms, ${E.duration}ms`,
            };
          return f ? H : { ...H, backgroundImage: `${k()}` };
        },
        M = (P) => {
          const I = _(P),
            V = b.concat(I);
          h(V), s && s(P);
        };
      return (
        S.useEffect(() => {
          const P = setTimeout(() => {
            b.length > 0 && h(b.splice(1, b.length - 1));
          }, r);
          return () => {
            clearTimeout(P);
          };
        }, [r, b]),
        d.jsxs(t, {
          className: w,
          onMouseDown: (P) => M(P),
          ref: c,
          ...u,
          children: [a, b.map((P, I) => d.jsx(By, { style: P }, I))],
        })
      );
    }
  );
Gm.displayName = "MDBRipple";
const Uy = z.forwardRef(
  (
    {
      className: e,
      color: t = "primary",
      outline: n,
      children: r,
      rounded: o,
      disabled: l,
      floating: i,
      size: a,
      href: s,
      block: u,
      active: p,
      toggle: m,
      noRipple: c,
      tag: x = "button",
      role: v = "button",
      ...y
    },
    b
  ) => {
    const [h, f] = S.useState(p || !1);
    let g;
    const w = (t && ["light", "link"].includes(t)) || n ? "dark" : "light";
    t !== "none"
      ? n
        ? t
          ? (g = `btn-outline-${t}`)
          : (g = "btn-outline-primary")
        : t
        ? (g = `btn-${t}`)
        : (g = "btn-primary")
      : (g = "");
    const k = L(
      t !== "none" && "btn",
      g,
      o && "btn-rounded",
      i && "btn-floating",
      a && `btn-${a}`,
      `${(s || x !== "button") && l ? "disabled" : ""}`,
      u && "btn-block",
      h && "active",
      e
    );
    return (
      s && x !== "a" && (x = "a"),
      ["hr", "img", "input"].includes(x) || c
        ? d.jsx(x, {
            className: k,
            onClick: m
              ? () => {
                  f(!h);
                }
              : void 0,
            disabled: l && x === "button" ? !0 : void 0,
            href: s,
            ref: b,
            role: v,
            ...y,
            children: r,
          })
        : d.jsx(Gm, {
            rippleTag: x,
            rippleColor: w,
            className: k,
            onClick: m
              ? () => {
                  f(!h);
                }
              : void 0,
            disabled: l && x === "button" ? !0 : void 0,
            href: s,
            ref: b,
            role: v,
            ...y,
            children: r,
          })
    );
  }
);
Uy.displayName = "MDBBtn";
const Wy = z.forwardRef(
  (
    {
      className: e,
      children: t,
      shadow: n,
      toolbar: r,
      size: o,
      vertical: l,
      tag: i = "div",
      role: a = "group",
      ...s
    },
    u
  ) => {
    let p;
    r
      ? (p = "btn-toolbar")
      : l
      ? (p = "btn-group-vertical")
      : (p = "btn-group");
    const m = L(p, n && `shadow-${n}`, o && `btn-group-${o}`, e);
    return d.jsx(i, { className: m, ref: u, role: a, ...s, children: t });
  }
);
Wy.displayName = "MDBBtnGroup";
const Hy = z.forwardRef(
  (
    {
      className: e,
      children: t,
      tag: n = "div",
      color: r,
      grow: o,
      size: l,
      ...i
    },
    a
  ) => {
    const s = L(
      `${o ? "spinner-grow" : "spinner-border"}`,
      r && `text-${r}`,
      `${l ? (o ? "spinner-grow-" + l : "spinner-border-" + l) : ""}`,
      e
    );
    return d.jsx(n, { className: s, ref: a, ...i, children: t });
  }
);
Hy.displayName = "MDBSpinner";
const Ym = z.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: o = "div",
      shadow: l,
      alignment: i,
      ...a
    },
    s
  ) => {
    const u = L(
      "card",
      n && `border border-${n}`,
      r && `bg-${r}`,
      l && `shadow-${l}`,
      i && `text-${i}`,
      e
    );
    return d.jsx(o, { className: u, ref: s, ...a, children: t });
  }
);
Ym.displayName = "MDBCard";
const Ky = z.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: o = "div",
      ...l
    },
    i
  ) => {
    const a = L("card-header", n && `border-${n}`, r && `bg-${r}`, e);
    return d.jsx(o, { className: a, ...l, ref: i, children: t });
  }
);
Ky.displayName = "MDBCardHeader";
const Qy = z.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...r }, o) => {
    const l = L("card-subtitle", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
Qy.displayName = "MDBCardSubTitle";
const Gy = z.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...r }, o) => {
    const l = L("card-title", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
Gy.displayName = "MDBCardTitle";
const Yy = z.forwardRef(
  ({ className: e, children: t, tag: n = "p", ...r }, o) => {
    const l = L("card-text", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
Yy.displayName = "MDBCardText";
const Xm = z.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const l = L("card-body", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
Xm.displayName = "MDBCardBody";
const Xy = z.forwardRef(
  (
    {
      className: e,
      children: t,
      border: n,
      background: r,
      tag: o = "div",
      ...l
    },
    i
  ) => {
    const a = L("card-footer", n && `border-${n}`, r && `bg-${r}`, e);
    return d.jsx(o, { className: a, ...l, ref: i, children: t });
  }
);
Xy.displayName = "MDBCardFooter";
const qy = ({
    className: e,
    children: t,
    overlay: n,
    position: r,
    fluid: o,
    ...l
  }) => {
    const i = L(r && `card-img-${r}`, o && "img-fluid", n && "card-img", e);
    return d.jsx("img", { className: i, ...l, children: t });
  },
  Zy = z.forwardRef(
    ({ className: e, children: t, tag: n = "div", ...r }, o) => {
      const l = L("card-img-overlay", e);
      return d.jsx(n, { className: l, ...r, ref: o, children: t });
    }
  );
Zy.displayName = "MDBCardOverlay";
const Jy = z.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const l = L("card-group", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
Jy.displayName = "MDBCardGroup";
const ev = z.forwardRef(
  (
    {
      className: e,
      tag: t = "ul",
      horizontal: n,
      horizontalSize: r,
      light: o,
      numbered: l,
      children: i,
      small: a,
      ...s
    },
    u
  ) => {
    const p = L(
      "list-group",
      n && (r ? `list-group-horizontal-${r}` : "list-group-horizontal"),
      o && "list-group-light",
      l && "list-group-numbered",
      a && "list-group-small",
      e
    );
    return d.jsx(t, { className: p, ref: u, ...s, children: i });
  }
);
ev.displayName = "MDBListGroup";
const tv = z.forwardRef(
  (
    {
      className: e,
      tag: t = "li",
      active: n,
      disabled: r,
      action: o,
      color: l,
      children: i,
      noBorders: a,
      ...s
    },
    u
  ) => {
    const p = t === "button",
      m = L(
        "list-group-item",
        n && "active",
        r && !p && "disabled",
        o && "list-group-item-action",
        l && `list-group-item-${l}`,
        a && "border-0",
        e
      );
    return d.jsx(t, {
      className: m,
      disabled: p && r,
      ref: u,
      ...s,
      children: i,
    });
  }
);
tv.displayName = "MDBListGroupItem";
const nv = z.forwardRef(
  (
    {
      around: e,
      between: t,
      bottom: n,
      center: r,
      children: o,
      className: l,
      evenly: i,
      end: a,
      middle: s,
      start: u,
      tag: p = "div",
      top: m,
      ...c
    },
    x
  ) => {
    const v = L(
      "row",
      e && "justify-content-around",
      t && "justify-content-between",
      n && "align-self-end",
      r && "justify-content-center",
      i && "justifty-content-evenly",
      a && "justify-content-end",
      s && "align-self-center",
      u && "justify-content-start",
      m && "align-self-start",
      l
    );
    return d.jsx(p, { className: v, ...c, ref: x, children: o });
  }
);
nv.displayName = "MDBRow";
const ls = ({
    animate: e,
    className: t,
    icon: n,
    fab: r,
    fas: o,
    fal: l,
    far: i,
    flag: a,
    spin: s,
    fixed: u,
    flip: p,
    list: m,
    size: c,
    pull: x,
    pulse: v,
    color: y,
    border: b,
    rotate: h,
    inverse: f,
    stack: g,
    iconType: w,
    children: k,
    ...N
  }) => {
    let C;
    a
      ? (C = "flag")
      : r
      ? (C = "fab")
      : o
      ? (C = "fas")
      : i
      ? (C = "far")
      : l
      ? (C = "fal")
      : (C = "fa");
    const _ = L(
      w ? `fa-${w}` : C,
      e && `fa-${e}`,
      a ? `flag-${a}` : n && `fa-${n}`,
      c && `fa-${c}`,
      y && `text-${y}`,
      b && "fa-border",
      h && `fa-rotate-${h}`,
      x && `fa-pull-${x}`,
      s && !e && "fa-spin",
      m && "fa-li",
      u && "fa-fw",
      v && !e && "fa-pulse",
      f && "fa-inverse",
      p && `fa-flip-${p}`,
      g && `fa-stack-${g}`,
      t
    );
    return d.jsx("i", { className: _, ...N, children: k });
  },
  rv = z.forwardRef(
    (
      {
        className: e,
        children: t,
        tag: n = "p",
        variant: r,
        color: o,
        blockquote: l,
        note: i,
        noteColor: a,
        listUnStyled: s,
        listInLine: u,
        ...p
      },
      m
    ) => {
      const c = L(
        r && r,
        l && "blockquote",
        i && "note",
        o && `text-${o}`,
        a && `note-${a}`,
        s && "list-unstyled",
        u && "list-inline",
        e
      );
      return (
        l && (n = "blockquote"),
        (s || u) && (n = "ul"),
        d.jsx(n, { className: c, ref: m, ...p, children: t })
      );
    }
  );
rv.displayName = "MDBTypography";
const ov = z.forwardRef(
  ({ className: e, color: t, uppercase: n, bold: r, children: o, ...l }, i) => {
    const a = L(
      "breadcrumb",
      r && "font-weight-bold",
      t && `text-${t}`,
      n && "text-uppercase",
      e
    );
    return d.jsx("nav", {
      "aria-label": "breadcrumb",
      children: d.jsx("ol", { className: a, ref: i, ...l, children: o }),
    });
  }
);
ov.displayName = "MDBBreadcrumb";
const lv = z.forwardRef(
  ({ className: e, active: t, current: n = "page", children: r, ...o }, l) => {
    const i = L("breadcrumb-item", t && "active", e);
    return d.jsx("li", {
      className: i,
      ref: l,
      "aria-current": t && n,
      ...o,
      children: r,
    });
  }
);
lv.displayName = "MDBBreadcrumbItem";
const iv = (e) => {
    if (e !== !1) return `navbar-expand-${e}`;
  },
  av = z.forwardRef(
    (
      {
        className: e,
        children: t,
        light: n,
        dark: r,
        scrolling: o,
        fixed: l,
        sticky: i,
        scrollingNavbarOffset: a,
        color: s,
        transparent: u,
        expand: p,
        tag: m = "nav",
        bgColor: c,
        ...x
      },
      v
    ) => {
      const [y, b] = S.useState(!1),
        h = L(
          {
            "navbar-light": n,
            "navbar-dark": r,
            "scrolling-navbar": o || a,
            "top-nav-collapse": y,
            [`text-${s}`]: s && u ? y : s,
          },
          l && `fixed-${l}`,
          i && "sticky-top",
          "navbar",
          p && iv(p),
          c && `bg-${c}`,
          e
        ),
        f = S.useCallback(() => {
          a && window.pageYOffset > a ? b(!0) : b(!1);
        }, [a]);
      return (
        S.useEffect(
          () => (
            (o || a) && window.addEventListener("scroll", f),
            () => {
              window.removeEventListener("scroll", f);
            }
          ),
          [f, o, a]
        ),
        d.jsx(m, {
          className: h,
          role: "navigation",
          ...x,
          ref: v,
          children: t,
        })
      );
    }
  );
av.displayName = "MDBNavbar";
const sv = z.forwardRef(
  (
    {
      children: e,
      className: t = "",
      disabled: n = !1,
      active: r = !1,
      tag: o = "a",
      ...l
    },
    i
  ) => {
    const a = L("nav-link", n ? "disabled" : r ? "active" : "", t);
    return d.jsx(o, {
      "data-test": "nav-link",
      className: a,
      style: { cursor: "pointer" },
      ref: i,
      ...l,
      children: e,
    });
  }
);
sv.displayName = "MDBNavbarLink";
const uv = z.forwardRef(
  ({ className: e, children: t, tag: n = "a", ...r }, o) => {
    const l = L("navbar-brand", e);
    return d.jsx(n, { className: l, ref: o, ...r, children: t });
  }
);
uv.displayName = "MDBNavbarBrand";
const cv = z.forwardRef(
  (
    { children: e, className: t, active: n, text: r, tag: o = "li", ...l },
    i
  ) => {
    const a = L("nav-item", n && "active", r && "navbar-text", t);
    return d.jsx(o, { ...l, className: a, ref: i, children: e });
  }
);
cv.displayName = "MDBNavbarItem";
const dv = z.forwardRef(
  (
    {
      children: e,
      className: t,
      right: n,
      fullWidth: r = !0,
      left: o,
      tag: l = "ul",
      ...i
    },
    a
  ) => {
    const s = L("navbar-nav", r && "w-100", n && "ms-auto", o && "me-auto", t);
    return d.jsx(l, { className: s, ref: a, ...i, children: e });
  }
);
dv.displayName = "MDBNavbarNav";
const fv = z.forwardRef(
  ({ children: e, className: t, tag: n = "button", ...r }, o) => {
    const l = L("navbar-toggler", t);
    return d.jsx(n, { ...r, className: l, ref: o, children: e });
  }
);
fv.displayName = "MDBNavbarToggler";
const pv = z.forwardRef(
  ({ children: e, bgColor: t, color: n, className: r, ...o }, l) => {
    const i = L(t && `bg-${t}`, n && `text-${n}`, r);
    return d.jsx("footer", { className: i, ...o, ref: l, children: e });
  }
);
pv.displayName = "MDBFooter";
const mv = z.forwardRef(
  (
    {
      children: e,
      size: t,
      circle: n,
      center: r,
      end: o,
      start: l,
      className: i,
      ...a
    },
    s
  ) => {
    const u = L(
      "pagination",
      r && "justify-content-center",
      n && "pagination-circle",
      o && "justify-content-end",
      t && `pagination-${t}`,
      l && "justify-content-start",
      i
    );
    return d.jsx("ul", { className: u, ...a, ref: s, children: e });
  }
);
mv.displayName = "MDBPagination";
const hv = z.forwardRef(
  ({ children: e, className: t, tag: n = "a", ...r }, o) => {
    const l = L("page-link", t);
    return d.jsx(n, { className: l, ...r, ref: o, children: e });
  }
);
hv.displayName = "MDBPaginationLink";
const gv = z.forwardRef(
  ({ children: e, className: t, active: n, disabled: r, ...o }, l) => {
    const i = L("page-item", n && "active", r && "disabled", t);
    return d.jsx("li", { className: i, ...o, ref: l, children: e });
  }
);
gv.displayName = "MDBPaginationItem";
const qm = z.forwardRef(
  (
    {
      animated: e,
      children: t,
      className: n,
      style: r,
      tag: o = "div",
      valuenow: l,
      valuemax: i,
      striped: a,
      bgColor: s,
      valuemin: u,
      width: p,
      ...m
    },
    c
  ) => {
    const x = L(
        "progress-bar",
        s && `bg-${s}`,
        a && "progress-bar-striped",
        e && "progress-bar-animated",
        n
      ),
      v = { width: `${p}%`, ...r };
    return d.jsx(o, {
      className: x,
      style: v,
      ref: c,
      role: "progressbar",
      ...m,
      "aria-valuenow": Number(p) ?? l,
      "aria-valuemin": Number(u),
      "aria-valuemax": Number(i),
      children: t,
    });
  }
);
qm.displayName = "MDBProgressBar";
const yv = z.forwardRef(
  (
    { className: e, children: t, tag: n = "div", height: r, style: o, ...l },
    i
  ) => {
    const a = L("progress", e),
      s = { height: `${r}px`, ...o };
    return d.jsx(n, {
      className: a,
      ref: i,
      style: s,
      ...l,
      children: z.Children.map(t, (u) => {
        if (!z.isValidElement(u) || u.type !== qm) {
          console.error("Progress component only allows ProgressBar as child");
          return;
        } else return u;
      }),
    });
  }
);
yv.displayName = "MDBProgress";
const vv = (e) => {
    const [t, n] = S.useState(!1),
      [r, o] = S.useState(null);
    return (
      S.useEffect(() => {
        o(
          () =>
            new IntersectionObserver(([l]) => {
              n(l.isIntersecting);
            })
        );
      }, []),
      S.useEffect(() => {
        if (!(!e.current || !r))
          return r.observe(e.current), () => r.disconnect();
      }, [r, e]),
      t
    );
  },
  xv = z.forwardRef(
    (
      {
        className: e,
        size: t,
        contrast: n,
        value: r,
        defaultValue: o,
        id: l,
        labelClass: i,
        wrapperClass: a,
        wrapperStyle: s,
        wrapperTag: u = "div",
        label: p,
        onChange: m,
        children: c,
        labelRef: x,
        labelStyle: v,
        type: y,
        onBlur: b,
        readonly: h = !1,
        showCounter: f = !1,
        ...g
      },
      w
    ) => {
      var k;
      const [N, C] = S.useState(o),
        _ = S.useMemo(() => (r !== void 0 ? r : N), [r, N]),
        [M, P] = S.useState(0),
        [I, V] = S.useState(!1),
        [W, B] = S.useState(0),
        U = S.useRef(null),
        Q = vv(U),
        K = S.useRef(null),
        E = x || K;
      S.useImperativeHandle(w, () => U.current);
      const A = L("form-outline", n && "form-white", a),
        D = L(
          "form-control",
          I && "active",
          y === "date" && "active",
          t && `form-control-${t}`,
          e
        ),
        H = L("form-label", i),
        ee = S.useCallback(() => {
          var ve;
          (ve = E.current) != null &&
            ve.clientWidth &&
            P(E.current.clientWidth * 0.8 + 8);
        }, [E]),
        Te = (ve) => {
          C(ve.target.value),
            f && B(ve.target.value.length),
            m == null || m(ve);
        },
        J = S.useCallback(
          (ve) => {
            U.current && (V(!!_), b && b(ve));
          },
          [_, b]
        );
      return (
        S.useEffect(() => {
          ee();
        }, [(k = E.current) == null ? void 0 : k.clientWidth, ee, Q]),
        S.useEffect(() => {
          if (_) return V(!0);
          V(!1);
        }, [_]),
        d.jsxs(u, {
          className: A,
          style: s,
          children: [
            d.jsx("input", {
              type: y,
              readOnly: h,
              className: D,
              onBlur: J,
              onChange: Te,
              onFocus: ee,
              value: r,
              defaultValue: o,
              id: l,
              ref: U,
              ...g,
            }),
            p &&
              d.jsx("label", {
                className: H,
                style: v,
                htmlFor: l,
                ref: E,
                children: p,
              }),
            d.jsxs("div", {
              className: "form-notch",
              children: [
                d.jsx("div", { className: "form-notch-leading" }),
                d.jsx("div", {
                  className: "form-notch-middle",
                  style: { width: M },
                }),
                d.jsx("div", { className: "form-notch-trailing" }),
              ],
            }),
            c,
            f &&
              g.maxLength &&
              d.jsx("div", {
                className: "form-helper",
                children: d.jsx("div", {
                  className: "form-counter",
                  children: `${W}/${g.maxLength}`,
                }),
              }),
          ],
        })
      );
    }
  );
xv.displayName = "MDBInput";
const wv = S.forwardRef(
  (
    {
      className: e,
      inputRef: t,
      labelClass: n,
      wrapperClass: r,
      labelStyle: o,
      wrapperTag: l = "div",
      wrapperStyle: i,
      label: a,
      inline: s,
      btn: u,
      id: p,
      btnColor: m,
      disableWrapper: c,
      toggleSwitch: x,
      ...v
    },
    y
  ) => {
    let b = "form-check-input",
      h = "form-check-label";
    u &&
      ((b = "btn-check"), m ? (h = `btn btn-${m}`) : (h = "btn btn-primary"));
    const f = L(
        a && !u && "form-check",
        s && !u && "form-check-inline",
        x && "form-switch",
        r
      ),
      g = L(b, e),
      w = L(h, n),
      k = d.jsxs(d.Fragment, {
        children: [
          d.jsx("input", { className: g, id: p, ref: t, ...v }),
          a &&
            d.jsx("label", { className: w, style: o, htmlFor: p, children: a }),
        ],
      });
    return d.jsx(d.Fragment, {
      children: c
        ? k
        : d.jsx(l, { style: i, className: f, ref: y, children: k }),
    });
  }
);
wv.displayName = "InputTemplate";
const Sv = ({
  className: e,
  children: t,
  open: n = !1,
  id: r,
  navbar: o,
  tag: l = "div",
  collapseRef: i,
  style: a,
  onOpen: s,
  onClose: u,
  ...p
}) => {
  const [m, c] = S.useState(!1),
    [x, v] = S.useState(void 0),
    [y, b] = S.useState(!1),
    h = L(
      y ? "collapsing" : "collapse",
      !y && m && "show",
      o && "navbar-collapse",
      e
    ),
    f = S.useRef(null),
    g = i ?? f,
    w = S.useCallback(() => {
      m && v(void 0);
    }, [m]);
  return (
    S.useEffect(() => {
      var k;
      x === void 0 &&
        m &&
        v(
          (k = g == null ? void 0 : g.current) == null ? void 0 : k.scrollHeight
        );
    }, [x, m, g]),
    S.useEffect(() => {
      m !== n && (n ? s == null || s() : u == null || u(), c(n)), m && b(!0);
      const k = setTimeout(() => {
        b(!1);
      }, 350);
      return () => {
        clearTimeout(k);
      };
    }, [n, m, s, u]),
    S.useEffect(() => {
      var k;
      v(
        m
          ? (k = g == null ? void 0 : g.current) == null
            ? void 0
            : k.scrollHeight
          : 0
      );
    }, [m, g, t]),
    S.useEffect(
      () => (
        window.addEventListener("resize", w),
        () => {
          window.removeEventListener("resize", w);
        }
      ),
      [w]
    ),
    d.jsx(l, {
      style: { height: x, ...a },
      id: r,
      className: h,
      ...p,
      ref: g,
      children: t,
    })
  );
};
S.createContext(null);
const kv = z.forwardRef(
  (
    {
      className: e,
      centered: t,
      children: n,
      size: r,
      scrollable: o,
      tag: l = "div",
      ...i
    },
    a
  ) => {
    const s = L(
      "modal-dialog",
      o && "modal-dialog-scrollable",
      t && "modal-dialog-centered",
      r && `modal-${r}`,
      e
    );
    return d.jsx(l, { className: s, ...i, ref: a, children: n });
  }
);
kv.displayName = "MDBModalDialog";
const Cv = z.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const l = L("modal-content", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
Cv.displayName = "MDBModalContent";
const bv = z.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const l = L("modal-header", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
bv.displayName = "MDBModalHeader";
const Nv = z.forwardRef(
  ({ className: e, children: t, tag: n = "h5", ...r }, o) => {
    const l = L("modal-title", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
Nv.displayName = "MDBModalTitle";
const $v = z.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const l = L("modal-body", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
$v.displayName = "MDBModalBody";
const Pv = z.forwardRef(
  ({ className: e, children: t, tag: n = "div", ...r }, o) => {
    const l = L("modal-footer", e);
    return d.jsx(n, { className: l, ...r, ref: o, children: t });
  }
);
Pv.displayName = "MDBModalFooter";
z.createContext({ activeElement: null, setTargets: null });
const Ev = S.forwardRef(
  (
    {
      className: e,
      labelClass: t,
      labelStyle: n,
      inputRef: r,
      size: o,
      label: l,
      id: i,
      ...a
    },
    s
  ) => {
    const u = L("form-control", `form-control-${o}`, e),
      p = L("form-label", t),
      m = S.useRef(null);
    return (
      S.useImperativeHandle(
        s,
        () => m.current || (r == null ? void 0 : r.current)
      ),
      d.jsxs(d.Fragment, {
        children: [
          l &&
            d.jsx("label", { className: p, style: n, htmlFor: i, children: l }),
          d.jsx("input", { className: u, type: "file", id: i, ref: m, ...a }),
        ],
      })
    );
  }
);
Ev.displayName = "MDBFile";
const _v = z.forwardRef(
  (
    {
      className: e,
      children: t,
      noBorder: n,
      textBefore: r,
      textAfter: o,
      noWrap: l,
      tag: i = "div",
      textTag: a = "span",
      textClass: s,
      size: u,
      textProps: p,
      ...m
    },
    c
  ) => {
    const x = L("input-group", l && "flex-nowrap", u && `input-group-${u}`, e),
      v = L("input-group-text", n && "border-0", s),
      y = (b) =>
        d.jsx(d.Fragment, {
          children:
            b && Array.isArray(b)
              ? b.map((h, f) =>
                  d.jsx(a, { className: v, ...p, children: h }, f)
                )
              : d.jsx(a, { className: v, ...p, children: b }),
        });
    return d.jsxs(i, {
      className: x,
      ref: c,
      ...m,
      children: [r && y(r), t, o && y(o)],
    });
  }
);
_v.displayName = "MDBInputGroup";
const Rv = z.forwardRef(
  (
    {
      className: e,
      children: t,
      isValidated: n = !1,
      onReset: r,
      onSubmit: o,
      noValidate: l = !0,
      ...i
    },
    a
  ) => {
    const [s, u] = S.useState(n),
      p = L("needs-validation", s && "was-validated", e),
      m = (x) => {
        x.preventDefault(), u(!0), o && o(x);
      },
      c = (x) => {
        x.preventDefault(), u(!1), r && r(x);
      };
    return (
      S.useEffect(() => {
        u(n);
      }, [n]),
      d.jsx("form", {
        className: p,
        onSubmit: m,
        onReset: c,
        ref: a,
        noValidate: l,
        ...i,
        children: t,
      })
    );
  }
);
Rv.displayName = "MDBValidation";
const jv = z.forwardRef(
  ({ className: e, fill: t, pills: n, justify: r, children: o, ...l }, i) => {
    const a = L(
      "nav",
      n ? "nav-pills" : "nav-tabs",
      t && "nav-fill",
      r && "nav-justified",
      e
    );
    return d.jsx("ul", { className: a, ref: i, ...l, children: o });
  }
);
jv.displayName = "MDBTabs";
const Tv = z.forwardRef(
  ({ className: e, children: t, style: n, tag: r = "li", ...o }, l) => {
    const i = L("nav-item", e);
    return d.jsx(r, {
      className: i,
      style: { cursor: "pointer", ...n },
      role: "presentation",
      ref: l,
      ...o,
      children: t,
    });
  }
);
Tv.displayName = "MDBTabsItem";
const Mv = z.forwardRef(
  (
    {
      className: e,
      color: t,
      active: n,
      onOpen: r,
      onClose: o,
      children: l,
      ...i
    },
    a
  ) => {
    const s = L("nav-link", n && "active", t && `bg-${t}`, e);
    return (
      S.useEffect(() => {
        n ? r == null || r() : o == null || o();
      }, [n]),
      d.jsx("a", { className: s, ref: a, ...i, children: l })
    );
  }
);
Mv.displayName = "MDBTabsLink";
const Ov = z.forwardRef(
  ({ className: e, tag: t = "div", children: n, ...r }, o) => {
    const l = L("tab-content", e);
    return d.jsx(t, { className: l, ref: o, ...r, children: n });
  }
);
Ov.displayName = "MDBTabsContent";
const Lv = z.forwardRef(
  ({ className: e, tag: t = "div", open: n, children: r, ...o }, l) => {
    const [i, a] = S.useState(!1),
      s = L("tab-pane", "fade", i && "show", n && "active", e);
    return (
      S.useEffect(() => {
        let u;
        return (
          n
            ? (u = setTimeout(() => {
                a(!0);
              }, 100))
            : a(!1),
          () => {
            clearTimeout(u);
          }
        );
      }, [n]),
      d.jsx(t, { className: s, role: "tabpanel", ref: l, ...o, children: r })
    );
  }
);
Lv.displayName = "MDBTabsPane";
S.createContext({ active: 0 });
const Zm = z.createContext({
    activeItem: 0,
    setActiveItem: null,
    alwaysOpen: !1,
    initialActive: 0,
  }),
  zv = z.forwardRef(
    (
      {
        alwaysOpen: e,
        borderless: t,
        className: n,
        flush: r,
        active: o,
        initialActive: l = 0,
        tag: i = "div",
        children: a,
        onChange: s,
        ...u
      },
      p
    ) => {
      const m = S.useMemo(() => typeof o < "u", [o]),
        c = L(
          "accordion",
          r && "accordion-flush",
          t && "accordion-borderless",
          n
        ),
        [x, v] = S.useState(l);
      return d.jsx(i, {
        className: c,
        ref: p,
        ...u,
        children: d.jsx(Zm.Provider, {
          value: {
            activeItem: m ? o : x,
            setActiveItem: v,
            alwaysOpen: e,
            initialActive: l,
            onChange: s,
          },
          children: a,
        }),
      });
    }
  );
zv.displayName = "MDBAccordion";
const Iv = z.forwardRef(
  (
    {
      className: e,
      bodyClassName: t,
      bodyStyle: n,
      headerClassName: r,
      collapseId: o,
      headerTitle: l,
      headerStyle: i,
      btnClassName: a,
      tag: s = "div",
      children: u,
      ...p
    },
    m
  ) => {
    const {
        activeItem: c,
        setActiveItem: x,
        alwaysOpen: v,
        onChange: y,
      } = S.useContext(Zm),
      b = S.useMemo(() => (Array.isArray(c) ? c.includes(o) : c === o), [c, o]),
      h = L("accordion-item", e),
      f = L("accordion-header", r),
      g = L("accordion-body", t),
      w = L("accordion-button", !b && "collapsed", a),
      k = S.useCallback(
        (N) => {
          let C = N;
          Array.isArray(c)
            ? c.includes(N)
              ? (C = c.filter((_) => _ !== N))
              : (C = v ? [...c, N] : [N])
            : ((C = c === N ? 0 : N), v && (C = [C])),
            y == null || y(C),
            x(C);
        },
        [y, c, x, v]
      );
    return d.jsxs(s, {
      className: h,
      ref: m,
      ...p,
      children: [
        d.jsx("h2", {
          className: f,
          style: i,
          children: d.jsx("button", {
            onClick: () => k(o),
            className: w,
            type: "button",
            children: l,
          }),
        }),
        d.jsx(Sv, {
          id: o.toString(),
          open: b,
          children: d.jsx("div", { className: g, style: n, children: u }),
        }),
      ],
    });
  }
);
Iv.displayName = "MDBAccordionItem";
function Av({ data: e }) {
  const t = e.popularidad,
    n = [];
  for (let r = 1; r <= 5; r++)
    r <= t
      ? n.push(d.jsx(ls, { fas: !0, icon: "star" }, `star-full-${r}`))
      : r - 1 < t && r > t
      ? n.push(d.jsx(ls, { fas: !0, icon: "star-half-alt" }, `star-half-${r}`))
      : n.push(d.jsx(ls, { far: !0, icon: "star" }, `star-empty-${r}`));
  return d.jsx("div", { className: "ms-auto stars", children: n });
}
function Dv({ data: e }) {
  return d.jsx(d.Fragment, {
    children: d.jsx(Qm, {
      md: "6",
      lg: "4",
      className: "container-fluid m-0 mb-3",
      children: d.jsxs(Ym, {
        className: "card-body",
        children: [
          d.jsx(qy, { src: e.img, position: "top", alt: e.nombre }),
          d.jsxs(Xm, {
            children: [
              d.jsxs("div", {
                className: "d-flex justify-content-between",
                children: [
                  d.jsx("p", {
                    className: "small",
                    children: d.jsx("a", {
                      href: "#!",
                      className: "text-muted",
                      children: e.categoria,
                    }),
                  }),
                  d.jsx("p", {
                    className: "small text-danger",
                    children: d.jsxs("s", { children: ["$", e.precio] }),
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "d-flex justify-content-between mb-3",
                children: [
                  d.jsx("h5", { className: "mb-0", children: e.nombre }),
                  d.jsxs("h5", {
                    className: "text-dark mb-0",
                    children: ["$", e.precio],
                  }),
                ],
              }),
              Av({ data: e }),
              d.jsxs("div", {
                className: "buy",
                children: [
                  d.jsx("button", {
                    className: "btn btn-buy",
                    children: " Comprar",
                  }),
                  d.jsx("button", {
                    className: "cart",
                    children: d.jsx("i", {
                      className: "fa-solid fa-cart-shopping",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const Fv = { black: "#000", white: "#fff" },
  Ho = Fv,
  Bv = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  ur = Bv,
  Vv = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  cr = Vv,
  Uv = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  dr = Uv,
  Wv = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  fr = Wv,
  Hv = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  pr = Hv,
  Kv = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  co = Kv,
  Qv = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  Gv = Qv;
function Ko(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Yv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ko },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  uc = "$$material";
function R() {
  return (
    (R = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    R.apply(this, arguments)
  );
}
function Le(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Xv(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var qv =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Zv = Xv(function (e) {
    return (
      qv.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function Jv(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function e1(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var t1 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var l;
        r.tags.length === 0
          ? r.insertionPoint
            ? (l = r.insertionPoint.nextSibling)
            : r.prepend
            ? (l = r.container.firstChild)
            : (l = r.before)
          : (l = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, l),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(e1(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var l = Jv(o);
          try {
            l.insertRule(r, l.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ke = "-ms-",
  wi = "-moz-",
  te = "-webkit-",
  Jm = "comm",
  cc = "rule",
  dc = "decl",
  n1 = "@import",
  eh = "@keyframes",
  r1 = "@layer",
  o1 = Math.abs,
  Bi = String.fromCharCode,
  l1 = Object.assign;
function i1(e, t) {
  return De(e, 0) ^ 45
    ? (((((((t << 2) ^ De(e, 0)) << 2) ^ De(e, 1)) << 2) ^ De(e, 2)) << 2) ^
        De(e, 3)
    : 0;
}
function th(e) {
  return e.trim();
}
function a1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, n) {
  return e.replace(t, n);
}
function ou(e, t) {
  return e.indexOf(t);
}
function De(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qo(e, t, n) {
  return e.slice(t, n);
}
function Qt(e) {
  return e.length;
}
function fc(e) {
  return e.length;
}
function Nl(e, t) {
  return t.push(e), e;
}
function s1(e, t) {
  return e.map(t).join("");
}
var Vi = 1,
  Vr = 1,
  nh = 0,
  lt = 0,
  Ee = 0,
  Kr = "";
function Ui(e, t, n, r, o, l, i) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: l,
    line: Vi,
    column: Vr,
    length: i,
    return: "",
  };
}
function fo(e, t) {
  return l1(Ui("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function u1() {
  return Ee;
}
function c1() {
  return (
    (Ee = lt > 0 ? De(Kr, --lt) : 0), Vr--, Ee === 10 && ((Vr = 1), Vi--), Ee
  );
}
function pt() {
  return (
    (Ee = lt < nh ? De(Kr, lt++) : 0), Vr++, Ee === 10 && ((Vr = 1), Vi++), Ee
  );
}
function Zt() {
  return De(Kr, lt);
}
function Ul() {
  return lt;
}
function nl(e, t) {
  return Qo(Kr, e, t);
}
function Go(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function rh(e) {
  return (Vi = Vr = 1), (nh = Qt((Kr = e))), (lt = 0), [];
}
function oh(e) {
  return (Kr = ""), e;
}
function Wl(e) {
  return th(nl(lt - 1, lu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function d1(e) {
  for (; (Ee = Zt()) && Ee < 33; ) pt();
  return Go(e) > 2 || Go(Ee) > 3 ? "" : " ";
}
function f1(e, t) {
  for (
    ;
    --t &&
    pt() &&
    !(Ee < 48 || Ee > 102 || (Ee > 57 && Ee < 65) || (Ee > 70 && Ee < 97));

  );
  return nl(e, Ul() + (t < 6 && Zt() == 32 && pt() == 32));
}
function lu(e) {
  for (; pt(); )
    switch (Ee) {
      case e:
        return lt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lu(Ee);
        break;
      case 40:
        e === 41 && lu(e);
        break;
      case 92:
        pt();
        break;
    }
  return lt;
}
function p1(e, t) {
  for (; pt() && e + Ee !== 57; ) if (e + Ee === 84 && Zt() === 47) break;
  return "/*" + nl(t, lt - 1) + "*" + Bi(e === 47 ? e : pt());
}
function m1(e) {
  for (; !Go(Zt()); ) pt();
  return nl(e, lt);
}
function h1(e) {
  return oh(Hl("", null, null, null, [""], (e = rh(e)), 0, [0], e));
}
function Hl(e, t, n, r, o, l, i, a, s) {
  for (
    var u = 0,
      p = 0,
      m = i,
      c = 0,
      x = 0,
      v = 0,
      y = 1,
      b = 1,
      h = 1,
      f = 0,
      g = "",
      w = o,
      k = l,
      N = r,
      C = g;
    b;

  )
    switch (((v = f), (f = pt()))) {
      case 40:
        if (v != 108 && De(C, m - 1) == 58) {
          ou((C += ne(Wl(f), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Wl(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += d1(v);
        break;
      case 92:
        C += f1(Ul() - 1, 7);
        continue;
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Nl(g1(p1(pt(), Ul()), t, n), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * y:
        a[u++] = Qt(C) * h;
      case 125 * y:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            b = 0;
          case 59 + p:
            h == -1 && (C = ne(C, /\f/g, "")),
              x > 0 &&
                Qt(C) - m &&
                Nl(
                  x > 32
                    ? Kd(C + ";", r, n, m - 1)
                    : Kd(ne(C, " ", "") + ";", r, n, m - 2),
                  s
                );
            break;
          case 59:
            C += ";";
          default:
            if (
              (Nl((N = Hd(C, t, n, u, p, o, a, g, (w = []), (k = []), m)), l),
              f === 123)
            )
              if (p === 0) Hl(C, t, N, N, w, l, m, a, k);
              else
                switch (c === 99 && De(C, 3) === 110 ? 100 : c) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Hl(
                      e,
                      N,
                      N,
                      r && Nl(Hd(e, N, N, 0, 0, o, a, g, o, (w = []), m), k),
                      o,
                      k,
                      m,
                      a,
                      r ? w : k
                    );
                    break;
                  default:
                    Hl(C, N, N, N, [""], k, 0, a, k);
                }
        }
        (u = p = x = 0), (y = h = 1), (g = C = ""), (m = i);
        break;
      case 58:
        (m = 1 + Qt(C)), (x = v);
      default:
        if (y < 1) {
          if (f == 123) --y;
          else if (f == 125 && y++ == 0 && c1() == 125) continue;
        }
        switch (((C += Bi(f)), f * y)) {
          case 38:
            h = p > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Qt(C) - 1) * h), (h = 1);
            break;
          case 64:
            Zt() === 45 && (C += Wl(pt())),
              (c = Zt()),
              (p = m = Qt((g = C += m1(Ul())))),
              f++;
            break;
          case 45:
            v === 45 && Qt(C) == 2 && (y = 0);
        }
    }
  return l;
}
function Hd(e, t, n, r, o, l, i, a, s, u, p) {
  for (
    var m = o - 1, c = o === 0 ? l : [""], x = fc(c), v = 0, y = 0, b = 0;
    v < r;
    ++v
  )
    for (var h = 0, f = Qo(e, m + 1, (m = o1((y = i[v])))), g = e; h < x; ++h)
      (g = th(y > 0 ? c[h] + " " + f : ne(f, /&\f/g, c[h]))) && (s[b++] = g);
  return Ui(e, t, n, o === 0 ? cc : a, s, u, p);
}
function g1(e, t, n) {
  return Ui(e, t, n, Jm, Bi(u1()), Qo(e, 2, -2), 0);
}
function Kd(e, t, n, r) {
  return Ui(e, t, n, dc, Qo(e, 0, r), Qo(e, r + 1, -1), r);
}
function Mr(e, t) {
  for (var n = "", r = fc(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function y1(e, t, n, r) {
  switch (e.type) {
    case r1:
      if (e.children.length) break;
    case n1:
    case dc:
      return (e.return = e.return || e.value);
    case Jm:
      return "";
    case eh:
      return (e.return = e.value + "{" + Mr(e.children, r) + "}");
    case cc:
      e.value = e.props.join(",");
  }
  return Qt((n = Mr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function v1(e) {
  var t = fc(e);
  return function (n, r, o, l) {
    for (var i = "", a = 0; a < t; a++) i += e[a](n, r, o, l) || "";
    return i;
  };
}
function x1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var w1 = function (t, n, r) {
    for (
      var o = 0, l = 0;
      (o = l), (l = Zt()), o === 38 && l === 12 && (n[r] = 1), !Go(l);

    )
      pt();
    return nl(t, lt);
  },
  S1 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Go(o)) {
        case 0:
          o === 38 && Zt() === 12 && (n[r] = 1), (t[r] += w1(lt - 1, n, r));
          break;
        case 2:
          t[r] += Wl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Zt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Bi(o);
      }
    while ((o = pt()));
    return t;
  },
  k1 = function (t, n) {
    return oh(S1(rh(t), n));
  },
  Qd = new WeakMap(),
  C1 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Qd.get(r)) &&
        !o
      ) {
        Qd.set(t, !0);
        for (
          var l = [], i = k1(n, l), a = r.props, s = 0, u = 0;
          s < i.length;
          s++
        )
          for (var p = 0; p < a.length; p++, u++)
            t.props[u] = l[s] ? i[s].replace(/&\f/g, a[p]) : a[p] + " " + i[s];
      }
    }
  },
  b1 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function lh(e, t) {
  switch (i1(e, t)) {
    case 5103:
      return te + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return te + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return te + e + wi + e + Ke + e + e;
    case 6828:
    case 4268:
      return te + e + Ke + e + e;
    case 6165:
      return te + e + Ke + "flex-" + e + e;
    case 5187:
      return (
        te + e + ne(e, /(\w+).+(:[^]+)/, te + "box-$1$2" + Ke + "flex-$1$2") + e
      );
    case 5443:
      return te + e + Ke + "flex-item-" + ne(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        te +
        e +
        Ke +
        "flex-line-pack" +
        ne(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return te + e + Ke + ne(e, "shrink", "negative") + e;
    case 5292:
      return te + e + Ke + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        te +
        "box-" +
        ne(e, "-grow", "") +
        te +
        e +
        Ke +
        ne(e, "grow", "positive") +
        e
      );
    case 4554:
      return te + ne(e, /([^-])(transform)/g, "$1" + te + "$2") + e;
    case 6187:
      return (
        ne(
          ne(ne(e, /(zoom-|grab)/, te + "$1"), /(image-set)/, te + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, te + "$1$`$1");
    case 4968:
      return (
        ne(
          ne(e, /(.+:)(flex-)?(.*)/, te + "box-pack:$3" + Ke + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        te +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, te + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qt(e) - 1 - t > 6)
        switch (De(e, t + 1)) {
          case 109:
            if (De(e, t + 4) !== 45) break;
          case 102:
            return (
              ne(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  te +
                  "$2-$3$1" +
                  wi +
                  (De(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~ou(e, "stretch")
              ? lh(ne(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (De(e, t + 1) !== 115) break;
    case 6444:
      switch (De(e, Qt(e) - 3 - (~ou(e, "!important") && 10))) {
        case 107:
          return ne(e, ":", ":" + te) + e;
        case 101:
          return (
            ne(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                te +
                (De(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                te +
                "$2$3$1" +
                Ke +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (De(e, t + 11)) {
        case 114:
          return te + e + Ke + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return te + e + Ke + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return te + e + Ke + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return te + e + Ke + e + e;
  }
  return e;
}
var N1 = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case dc:
          t.return = lh(t.value, t.length);
          break;
        case eh:
          return Mr([fo(t, { value: ne(t.value, "@", "@" + te) })], o);
        case cc:
          if (t.length)
            return s1(t.props, function (l) {
              switch (a1(l, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Mr(
                    [fo(t, { props: [ne(l, /:(read-\w+)/, ":" + wi + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Mr(
                    [
                      fo(t, {
                        props: [ne(l, /:(plac\w+)/, ":" + te + "input-$1")],
                      }),
                      fo(t, { props: [ne(l, /:(plac\w+)/, ":" + wi + "$1")] }),
                      fo(t, { props: [ne(l, /:(plac\w+)/, Ke + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  $1 = [N1],
  ih = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (y) {
        var b = y.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(y), y.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || $1,
      l = {},
      i,
      a = [];
    (i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (y) {
          for (
            var b = y.getAttribute("data-emotion").split(" "), h = 1;
            h < b.length;
            h++
          )
            l[b[h]] = !0;
          a.push(y);
        }
      );
    var s,
      u = [C1, b1];
    {
      var p,
        m = [
          y1,
          x1(function (y) {
            p.insert(y);
          }),
        ],
        c = v1(u.concat(o, m)),
        x = function (b) {
          return Mr(h1(b), c);
        };
      s = function (b, h, f, g) {
        (p = f),
          x(b ? b + "{" + h.styles + "}" : h.styles),
          g && (v.inserted[h.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new t1({
        key: n,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: l,
      registered: {},
      insert: s,
    };
    return v.sheet.hydrate(a), v;
  },
  ah = { exports: {} },
  le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ze = typeof Symbol == "function" && Symbol.for,
  pc = ze ? Symbol.for("react.element") : 60103,
  mc = ze ? Symbol.for("react.portal") : 60106,
  Wi = ze ? Symbol.for("react.fragment") : 60107,
  Hi = ze ? Symbol.for("react.strict_mode") : 60108,
  Ki = ze ? Symbol.for("react.profiler") : 60114,
  Qi = ze ? Symbol.for("react.provider") : 60109,
  Gi = ze ? Symbol.for("react.context") : 60110,
  hc = ze ? Symbol.for("react.async_mode") : 60111,
  Yi = ze ? Symbol.for("react.concurrent_mode") : 60111,
  Xi = ze ? Symbol.for("react.forward_ref") : 60112,
  qi = ze ? Symbol.for("react.suspense") : 60113,
  P1 = ze ? Symbol.for("react.suspense_list") : 60120,
  Zi = ze ? Symbol.for("react.memo") : 60115,
  Ji = ze ? Symbol.for("react.lazy") : 60116,
  E1 = ze ? Symbol.for("react.block") : 60121,
  _1 = ze ? Symbol.for("react.fundamental") : 60117,
  R1 = ze ? Symbol.for("react.responder") : 60118,
  j1 = ze ? Symbol.for("react.scope") : 60119;
function yt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case pc:
        switch (((e = e.type), e)) {
          case hc:
          case Yi:
          case Wi:
          case Ki:
          case Hi:
          case qi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Gi:
              case Xi:
              case Ji:
              case Zi:
              case Qi:
                return e;
              default:
                return t;
            }
        }
      case mc:
        return t;
    }
  }
}
function sh(e) {
  return yt(e) === Yi;
}
le.AsyncMode = hc;
le.ConcurrentMode = Yi;
le.ContextConsumer = Gi;
le.ContextProvider = Qi;
le.Element = pc;
le.ForwardRef = Xi;
le.Fragment = Wi;
le.Lazy = Ji;
le.Memo = Zi;
le.Portal = mc;
le.Profiler = Ki;
le.StrictMode = Hi;
le.Suspense = qi;
le.isAsyncMode = function (e) {
  return sh(e) || yt(e) === hc;
};
le.isConcurrentMode = sh;
le.isContextConsumer = function (e) {
  return yt(e) === Gi;
};
le.isContextProvider = function (e) {
  return yt(e) === Qi;
};
le.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === pc;
};
le.isForwardRef = function (e) {
  return yt(e) === Xi;
};
le.isFragment = function (e) {
  return yt(e) === Wi;
};
le.isLazy = function (e) {
  return yt(e) === Ji;
};
le.isMemo = function (e) {
  return yt(e) === Zi;
};
le.isPortal = function (e) {
  return yt(e) === mc;
};
le.isProfiler = function (e) {
  return yt(e) === Ki;
};
le.isStrictMode = function (e) {
  return yt(e) === Hi;
};
le.isSuspense = function (e) {
  return yt(e) === qi;
};
le.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wi ||
    e === Yi ||
    e === Ki ||
    e === Hi ||
    e === qi ||
    e === P1 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ji ||
        e.$$typeof === Zi ||
        e.$$typeof === Qi ||
        e.$$typeof === Gi ||
        e.$$typeof === Xi ||
        e.$$typeof === _1 ||
        e.$$typeof === R1 ||
        e.$$typeof === j1 ||
        e.$$typeof === E1))
  );
};
le.typeOf = yt;
ah.exports = le;
var T1 = ah.exports,
  uh = T1,
  M1 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  O1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ch = {};
ch[uh.ForwardRef] = M1;
ch[uh.Memo] = O1;
var L1 = !0;
function z1(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var dh = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || L1 === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  fh = function (t, n, r) {
    dh(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var l = n;
      do t.insert(n === l ? "." + o : "", l, t.sheet, !0), (l = l.next);
      while (l !== void 0);
    }
  };
function I1(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var A1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function D1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var F1 = /[A-Z]|^ms/g,
  B1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ph = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Gd = function (t) {
    return t != null && typeof t != "boolean";
  },
  is = D1(function (e) {
    return ph(e) ? e : e.replace(F1, "-$&").toLowerCase();
  }),
  Yd = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(B1, function (r, o, l) {
            return (Gt = { name: o, styles: l, next: Gt }), o;
          });
    }
    return A1[t] !== 1 && !ph(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Yo(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Gt = { name: n.name, styles: n.styles, next: Gt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Gt = { name: r.name, styles: r.styles, next: Gt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return V1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Gt,
          i = n(e);
        return (Gt = l), Yo(e, t, i);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function V1(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Yo(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0
          ? (r += l + "{" + t[i] + "}")
          : Gd(i) && (r += is(l) + ":" + Yd(l, i) + ";");
      else if (
        Array.isArray(i) &&
        typeof i[0] == "string" &&
        (t == null || t[i[0]] === void 0)
      )
        for (var a = 0; a < i.length; a++)
          Gd(i[a]) && (r += is(l) + ":" + Yd(l, i[a]) + ";");
      else {
        var s = Yo(e, t, i);
        switch (l) {
          case "animation":
          case "animationName": {
            r += is(l) + ":" + s + ";";
            break;
          }
          default:
            r += l + "{" + s + "}";
        }
      }
    }
  return r;
}
var Xd = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Gt,
  gc = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      l = "";
    Gt = void 0;
    var i = t[0];
    i == null || i.raw === void 0
      ? ((o = !1), (l += Yo(r, n, i)))
      : (l += i[0]);
    for (var a = 1; a < t.length; a++) (l += Yo(r, n, t[a])), o && (l += i[a]);
    Xd.lastIndex = 0;
    for (var s = "", u; (u = Xd.exec(l)) !== null; ) s += "-" + u[1];
    var p = I1(l) + s;
    return { name: p, styles: l, next: Gt };
  },
  U1 = function (t) {
    return t();
  },
  mh = Ac.useInsertionEffect ? Ac.useInsertionEffect : !1,
  W1 = mh || U1,
  qd = mh || S.useLayoutEffect,
  hh = S.createContext(typeof HTMLElement < "u" ? ih({ key: "css" }) : null),
  H1 = hh.Provider,
  gh = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(hh);
      return t(n, o, r);
    });
  },
  ea = S.createContext({}),
  as = { exports: {} },
  Zd;
function yh() {
  return (
    Zd ||
      ((Zd = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var l in o)
                        Object.prototype.hasOwnProperty.call(o, l) &&
                          (n[l] = o[l]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(as)),
    as.exports
  );
}
yh();
var K1 = gh(function (e, t) {
  var n = e.styles,
    r = gc([n], void 0, S.useContext(ea)),
    o = S.useRef();
  return (
    qd(
      function () {
        var l = t.key + "-global",
          i = new t.sheet.constructor({
            key: l,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          s = document.querySelector(
            'style[data-emotion="' + l + " " + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (i.before = t.sheet.tags[0]),
          s !== null &&
            ((a = !0), s.setAttribute("data-emotion", l), i.hydrate([s])),
          (o.current = [i, a]),
          function () {
            i.flush();
          }
        );
      },
      [t]
    ),
    qd(
      function () {
        var l = o.current,
          i = l[0],
          a = l[1];
        if (a) {
          l[1] = !1;
          return;
        }
        if ((r.next !== void 0 && fh(t, r.next, !0), i.tags.length)) {
          var s = i.tags[i.tags.length - 1].nextElementSibling;
          (i.before = s), i.flush();
        }
        t.insert("", r, i, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function vh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return gc(t);
}
var ta = function () {
    var t = vh.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  Q1 = Zv,
  G1 = function (t) {
    return t !== "theme";
  },
  Jd = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Q1 : G1;
  },
  ef = function (t, n, r) {
    var o;
    if (n) {
      var l = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && l
          ? function (i) {
              return t.__emotion_forwardProp(i) && l(i);
            }
          : l;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  Y1 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      dh(n, r, o),
      W1(function () {
        return fh(n, r, o);
      }),
      null
    );
  },
  X1 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      l,
      i;
    n !== void 0 && ((l = n.label), (i = n.target));
    var a = ef(t, n, r),
      s = a || Jd(o),
      u = !s("as");
    return function () {
      var p = arguments,
        m =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (l !== void 0 && m.push("label:" + l + ";"),
        p[0] == null || p[0].raw === void 0)
      )
        m.push.apply(m, p);
      else {
        m.push(p[0][0]);
        for (var c = p.length, x = 1; x < c; x++) m.push(p[x], p[0][x]);
      }
      var v = gh(function (y, b, h) {
        var f = (u && y.as) || o,
          g = "",
          w = [],
          k = y;
        if (y.theme == null) {
          k = {};
          for (var N in y) k[N] = y[N];
          k.theme = S.useContext(ea);
        }
        typeof y.className == "string"
          ? (g = z1(b.registered, w, y.className))
          : y.className != null && (g = y.className + " ");
        var C = gc(m.concat(w), b.registered, k);
        (g += b.key + "-" + C.name), i !== void 0 && (g += " " + i);
        var _ = u && a === void 0 ? Jd(f) : s,
          M = {};
        for (var P in y) (u && P === "as") || (_(P) && (M[P] = y[P]));
        return (
          (M.className = g),
          (M.ref = h),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(Y1, {
              cache: b,
              serialized: C,
              isStringTag: typeof f == "string",
            }),
            S.createElement(f, M)
          )
        );
      });
      return (
        (v.displayName =
          l !== void 0
            ? l
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = m),
        (v.__emotion_forwardProp = a),
        Object.defineProperty(v, "toString", {
          value: function () {
            return "." + i;
          },
        }),
        (v.withComponent = function (y, b) {
          return e(y, R({}, n, b, { shouldForwardProp: ef(v, b, !0) })).apply(
            void 0,
            m
          );
        }),
        v
      );
    };
  },
  q1 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  iu = X1.bind();
q1.forEach(function (e) {
  iu[e] = iu(e);
});
let au;
typeof document == "object" && (au = ih({ key: "css", prepend: !0 }));
function Z1(e) {
  const { injectFirst: t, children: n } = e;
  return t && au ? d.jsx(H1, { value: au, children: n }) : n;
}
function J1(e) {
  return e == null || Object.keys(e).length === 0;
}
function ex(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(J1(o) ? n : o) : t;
  return d.jsx(K1, { styles: r });
}
function xh(e, t) {
  return iu(e, t);
}
const tx = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  nx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: ex,
        StyledEngineProvider: Z1,
        ThemeContext: ea,
        css: vh,
        default: xh,
        internal_processStyles: tx,
        keyframes: ta,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function bn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function wh(e) {
  if (!bn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = wh(e[n]);
    }),
    t
  );
}
function Jt(e, t, n = { clone: !0 }) {
  const r = n.clone ? R({}, e) : e;
  return (
    bn(e) &&
      bn(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (bn(t[o]) && o in e && bn(e[o])
            ? (r[o] = Jt(e[o], t[o], n))
            : n.clone
            ? (r[o] = bn(t[o]) ? wh(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
const rx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Jt, isPlainObject: bn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ox = ["values", "unit", "step"],
  lx = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => R({}, n, { [r.key]: r.val }), {})
    );
  };
function Sh(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = Le(e, ox),
    l = lx(t),
    i = Object.keys(l);
  function a(c) {
    return `@media (min-width:${typeof t[c] == "number" ? t[c] : c}${n})`;
  }
  function s(c) {
    return `@media (max-width:${
      (typeof t[c] == "number" ? t[c] : c) - r / 100
    }${n})`;
  }
  function u(c, x) {
    const v = i.indexOf(x);
    return `@media (min-width:${
      typeof t[c] == "number" ? t[c] : c
    }${n}) and (max-width:${
      (v !== -1 && typeof t[i[v]] == "number" ? t[i[v]] : x) - r / 100
    }${n})`;
  }
  function p(c) {
    return i.indexOf(c) + 1 < i.length ? u(c, i[i.indexOf(c) + 1]) : a(c);
  }
  function m(c) {
    const x = i.indexOf(c);
    return x === 0
      ? a(i[1])
      : x === i.length - 1
      ? s(i[x])
      : u(c, i[i.indexOf(c) + 1]).replace("@media", "@media not all and");
  }
  return R(
    {
      keys: i,
      values: l,
      up: a,
      down: s,
      between: u,
      only: p,
      not: m,
      unit: n,
    },
    o
  );
}
const ix = { borderRadius: 4 },
  ax = ix;
function $o(e, t) {
  return t ? Jt(e, t, { clone: !1 }) : e;
}
const yc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  tf = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${yc[e]}px)`,
  };
function dn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const l = r.breakpoints || tf;
    return t.reduce((i, a, s) => ((i[l.up(l.keys[s])] = n(t[s])), i), {});
  }
  if (typeof t == "object") {
    const l = r.breakpoints || tf;
    return Object.keys(t).reduce((i, a) => {
      if (Object.keys(l.values || yc).indexOf(a) !== -1) {
        const s = l.up(a);
        i[s] = n(t[a], a);
      } else {
        const s = a;
        i[s] = t[s];
      }
      return i;
    }, {});
  }
  return n(t);
}
function sx(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const l = e.up(o);
          return (r[l] = {}), r;
        }, {})) || {}
  );
}
function ux(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function he(e) {
  if (typeof e != "string") throw new Error(Ko(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const cx = Object.freeze(
  Object.defineProperty({ __proto__: null, default: he }, Symbol.toStringTag, {
    value: "Module",
  })
);
function na(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, l) => (o && o[l] ? o[l] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Si(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = na(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function be(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    l = (i) => {
      if (i[t] == null) return null;
      const a = i[t],
        s = i.theme,
        u = na(s, r) || {};
      return dn(i, a, (m) => {
        let c = Si(u, o, m);
        return (
          m === c &&
            typeof m == "string" &&
            (c = Si(u, o, `${t}${m === "default" ? "" : he(m)}`, m)),
          n === !1 ? c : { [n]: c }
        );
      });
    };
  return (l.propTypes = {}), (l.filterProps = [t]), l;
}
function dx(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const fx = { m: "margin", p: "padding" },
  px = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  nf = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  mx = dx((e) => {
    if (e.length > 2)
      if (nf[e]) e = nf[e];
      else return [e];
    const [t, n] = e.split(""),
      r = fx[t],
      o = px[n] || "";
    return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
  }),
  vc = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  xc = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...vc, ...xc];
function rl(e, t, n, r) {
  var o;
  const l = (o = na(e, t, !1)) != null ? o : n;
  return typeof l == "number"
    ? (i) => (typeof i == "string" ? i : l * i)
    : Array.isArray(l)
    ? (i) => (typeof i == "string" ? i : l[i])
    : typeof l == "function"
    ? l
    : () => {};
}
function kh(e) {
  return rl(e, "spacing", 8);
}
function ol(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function hx(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = ol(t, n)), r), {});
}
function gx(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = mx(n),
    l = hx(o, r),
    i = e[n];
  return dn(e, i, l);
}
function Ch(e, t) {
  const n = kh(e.theme);
  return Object.keys(e)
    .map((r) => gx(e, t, r, n))
    .reduce($o, {});
}
function xe(e) {
  return Ch(e, vc);
}
xe.propTypes = {};
xe.filterProps = vc;
function we(e) {
  return Ch(e, xc);
}
we.propTypes = {};
we.filterProps = xc;
function yx(e = 8) {
  if (e.mui) return e;
  const t = kh({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((l) => {
          const i = t(l);
          return typeof i == "number" ? `${i}px` : i;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function ra(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((l) => {
          r[l] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, l) => (t[l] ? $o(o, t[l](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function bt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function jt(e, t) {
  return be({ prop: e, themeKey: "borders", transform: t });
}
const vx = jt("border", bt),
  xx = jt("borderTop", bt),
  wx = jt("borderRight", bt),
  Sx = jt("borderBottom", bt),
  kx = jt("borderLeft", bt),
  Cx = jt("borderColor"),
  bx = jt("borderTopColor"),
  Nx = jt("borderRightColor"),
  $x = jt("borderBottomColor"),
  Px = jt("borderLeftColor"),
  Ex = jt("outline", bt),
  _x = jt("outlineColor"),
  oa = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = rl(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: ol(t, r) });
      return dn(e, e.borderRadius, n);
    }
    return null;
  };
oa.propTypes = {};
oa.filterProps = ["borderRadius"];
ra(vx, xx, wx, Sx, kx, Cx, bx, Nx, $x, Px, oa, Ex, _x);
const la = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = rl(e.theme, "spacing", 8),
      n = (r) => ({ gap: ol(t, r) });
    return dn(e, e.gap, n);
  }
  return null;
};
la.propTypes = {};
la.filterProps = ["gap"];
const ia = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = rl(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: ol(t, r) });
    return dn(e, e.columnGap, n);
  }
  return null;
};
ia.propTypes = {};
ia.filterProps = ["columnGap"];
const aa = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = rl(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: ol(t, r) });
    return dn(e, e.rowGap, n);
  }
  return null;
};
aa.propTypes = {};
aa.filterProps = ["rowGap"];
const Rx = be({ prop: "gridColumn" }),
  jx = be({ prop: "gridRow" }),
  Tx = be({ prop: "gridAutoFlow" }),
  Mx = be({ prop: "gridAutoColumns" }),
  Ox = be({ prop: "gridAutoRows" }),
  Lx = be({ prop: "gridTemplateColumns" }),
  zx = be({ prop: "gridTemplateRows" }),
  Ix = be({ prop: "gridTemplateAreas" }),
  Ax = be({ prop: "gridArea" });
ra(la, ia, aa, Rx, jx, Tx, Mx, Ox, Lx, zx, Ix, Ax);
function Or(e, t) {
  return t === "grey" ? t : e;
}
const Dx = be({ prop: "color", themeKey: "palette", transform: Or }),
  Fx = be({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Or,
  }),
  Bx = be({ prop: "backgroundColor", themeKey: "palette", transform: Or });
ra(Dx, Fx, Bx);
function ct(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Vx = be({ prop: "width", transform: ct }),
  wc = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const l =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || yc[n];
        return l
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${l}${e.theme.breakpoints.unit}` }
            : { maxWidth: l }
          : { maxWidth: ct(n) };
      };
      return dn(e, e.maxWidth, t);
    }
    return null;
  };
wc.filterProps = ["maxWidth"];
const Ux = be({ prop: "minWidth", transform: ct }),
  Wx = be({ prop: "height", transform: ct }),
  Hx = be({ prop: "maxHeight", transform: ct }),
  Kx = be({ prop: "minHeight", transform: ct });
be({ prop: "size", cssProperty: "width", transform: ct });
be({ prop: "size", cssProperty: "height", transform: ct });
const Qx = be({ prop: "boxSizing" });
ra(Vx, wc, Ux, Wx, Hx, Kx, Qx);
const Gx = {
    border: { themeKey: "borders", transform: bt },
    borderTop: { themeKey: "borders", transform: bt },
    borderRight: { themeKey: "borders", transform: bt },
    borderBottom: { themeKey: "borders", transform: bt },
    borderLeft: { themeKey: "borders", transform: bt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: bt },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: oa },
    color: { themeKey: "palette", transform: Or },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Or,
    },
    backgroundColor: { themeKey: "palette", transform: Or },
    p: { style: we },
    pt: { style: we },
    pr: { style: we },
    pb: { style: we },
    pl: { style: we },
    px: { style: we },
    py: { style: we },
    padding: { style: we },
    paddingTop: { style: we },
    paddingRight: { style: we },
    paddingBottom: { style: we },
    paddingLeft: { style: we },
    paddingX: { style: we },
    paddingY: { style: we },
    paddingInline: { style: we },
    paddingInlineStart: { style: we },
    paddingInlineEnd: { style: we },
    paddingBlock: { style: we },
    paddingBlockStart: { style: we },
    paddingBlockEnd: { style: we },
    m: { style: xe },
    mt: { style: xe },
    mr: { style: xe },
    mb: { style: xe },
    ml: { style: xe },
    mx: { style: xe },
    my: { style: xe },
    margin: { style: xe },
    marginTop: { style: xe },
    marginRight: { style: xe },
    marginBottom: { style: xe },
    marginLeft: { style: xe },
    marginX: { style: xe },
    marginY: { style: xe },
    marginInline: { style: xe },
    marginInlineStart: { style: xe },
    marginInlineEnd: { style: xe },
    marginBlock: { style: xe },
    marginBlockStart: { style: xe },
    marginBlockEnd: { style: xe },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: la },
    rowGap: { style: aa },
    columnGap: { style: ia },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: ct },
    maxWidth: { style: wc },
    minWidth: { transform: ct },
    height: { transform: ct },
    maxHeight: { transform: ct },
    minHeight: { transform: ct },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  ll = Gx;
function Yx(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Xx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bh() {
  function e(n, r, o, l) {
    const i = { [n]: r, theme: o },
      a = l[n];
    if (!a) return { [n]: r };
    const { cssProperty: s = n, themeKey: u, transform: p, style: m } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const c = na(o, u) || {};
    return m
      ? m(i)
      : dn(i, r, (v) => {
          let y = Si(c, p, v);
          return (
            v === y &&
              typeof v == "string" &&
              (y = Si(c, p, `${n}${v === "default" ? "" : he(v)}`, v)),
            s === !1 ? y : { [s]: y }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: l = {} } = n || {};
    if (!o) return null;
    const i = (r = l.unstable_sxConfig) != null ? r : ll;
    function a(s) {
      let u = s;
      if (typeof s == "function") u = s(l);
      else if (typeof s != "object") return s;
      if (!u) return null;
      const p = sx(l.breakpoints),
        m = Object.keys(p);
      let c = p;
      return (
        Object.keys(u).forEach((x) => {
          const v = Xx(u[x], l);
          if (v != null)
            if (typeof v == "object")
              if (i[x]) c = $o(c, e(x, v, l, i));
              else {
                const y = dn({ theme: l }, v, (b) => ({ [x]: b }));
                Yx(y, v) ? (c[x] = t({ sx: v, theme: l })) : (c = $o(c, y));
              }
            else c = $o(c, e(x, v, l, i));
        }),
        ux(m, c)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Nh = bh();
Nh.filterProps = ["sx"];
const sa = Nh;
function $h(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const qx = ["breakpoints", "palette", "spacing", "shape"];
function Sc(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: l = {} } = e,
    i = Le(e, qx),
    a = Sh(n),
    s = yx(o);
  let u = Jt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: R({ mode: "light" }, r),
      spacing: s,
      shape: R({}, ax, l),
    },
    i
  );
  return (
    (u.applyStyles = $h),
    (u = t.reduce((p, m) => Jt(p, m), u)),
    (u.unstable_sxConfig = R({}, ll, i == null ? void 0 : i.unstable_sxConfig)),
    (u.unstable_sx = function (m) {
      return sa({ sx: m, theme: this });
    }),
    u
  );
}
const Zx = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Sc,
      private_createBreakpoints: Sh,
      unstable_applyStyles: $h,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Jx(e) {
  return Object.keys(e).length === 0;
}
function ew(e = null) {
  const t = S.useContext(ea);
  return !t || Jx(t) ? e : t;
}
const tw = Sc();
function Ph(e = tw) {
  return ew(e);
}
const nw = ["sx"],
  rw = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : ll;
    return (
      Object.keys(e).forEach((l) => {
        o[l] ? (r.systemProps[l] = e[l]) : (r.otherProps[l] = e[l]);
      }),
      r
    );
  };
function kc(e) {
  const { sx: t } = e,
    n = Le(e, nw),
    { systemProps: r, otherProps: o } = rw(n);
  let l;
  return (
    Array.isArray(t)
      ? (l = [r, ...t])
      : typeof t == "function"
      ? (l = (...i) => {
          const a = t(...i);
          return bn(a) ? R({}, r, a) : r;
        })
      : (l = R({}, r, t)),
    R({}, o, { sx: l })
  );
}
const ow = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: sa,
        extendSxProp: kc,
        unstable_createStyleFunctionSx: bh,
        unstable_defaultSxConfig: ll,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  rf = (e) => e,
  lw = () => {
    let e = rf;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = rf;
      },
    };
  },
  iw = lw(),
  Eh = iw;
function _h(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = _h(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function aw() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = _h(e)) && (r && (r += " "), (r += t));
  return r;
}
const sw = ["className", "component"];
function uw(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    l = xh("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(sa);
  return S.forwardRef(function (s, u) {
    const p = Ph(n),
      m = kc(s),
      { className: c, component: x = "div" } = m,
      v = Le(m, sw);
    return d.jsx(
      l,
      R(
        {
          as: x,
          ref: u,
          className: aw(c, o ? o(r) : r),
          theme: (t && p[t]) || p,
        },
        v
      )
    );
  });
}
const cw = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function or(e, t, n = "Mui") {
  const r = cw[t];
  return r ? `${n}-${r}` : `${Eh.generate(e)}-${t}`;
}
function Bn(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = or(e, o, n);
    }),
    r
  );
}
var Rh = { exports: {} },
  ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc = Symbol.for("react.element"),
  bc = Symbol.for("react.portal"),
  ua = Symbol.for("react.fragment"),
  ca = Symbol.for("react.strict_mode"),
  da = Symbol.for("react.profiler"),
  fa = Symbol.for("react.provider"),
  pa = Symbol.for("react.context"),
  dw = Symbol.for("react.server_context"),
  ma = Symbol.for("react.forward_ref"),
  ha = Symbol.for("react.suspense"),
  ga = Symbol.for("react.suspense_list"),
  ya = Symbol.for("react.memo"),
  va = Symbol.for("react.lazy"),
  fw = Symbol.for("react.offscreen"),
  jh;
jh = Symbol.for("react.module.reference");
function Tt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Cc:
        switch (((e = e.type), e)) {
          case ua:
          case da:
          case ca:
          case ha:
          case ga:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case dw:
              case pa:
              case ma:
              case va:
              case ya:
              case fa:
                return e;
              default:
                return t;
            }
        }
      case bc:
        return t;
    }
  }
}
ie.ContextConsumer = pa;
ie.ContextProvider = fa;
ie.Element = Cc;
ie.ForwardRef = ma;
ie.Fragment = ua;
ie.Lazy = va;
ie.Memo = ya;
ie.Portal = bc;
ie.Profiler = da;
ie.StrictMode = ca;
ie.Suspense = ha;
ie.SuspenseList = ga;
ie.isAsyncMode = function () {
  return !1;
};
ie.isConcurrentMode = function () {
  return !1;
};
ie.isContextConsumer = function (e) {
  return Tt(e) === pa;
};
ie.isContextProvider = function (e) {
  return Tt(e) === fa;
};
ie.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cc;
};
ie.isForwardRef = function (e) {
  return Tt(e) === ma;
};
ie.isFragment = function (e) {
  return Tt(e) === ua;
};
ie.isLazy = function (e) {
  return Tt(e) === va;
};
ie.isMemo = function (e) {
  return Tt(e) === ya;
};
ie.isPortal = function (e) {
  return Tt(e) === bc;
};
ie.isProfiler = function (e) {
  return Tt(e) === da;
};
ie.isStrictMode = function (e) {
  return Tt(e) === ca;
};
ie.isSuspense = function (e) {
  return Tt(e) === ha;
};
ie.isSuspenseList = function (e) {
  return Tt(e) === ga;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ua ||
    e === da ||
    e === ca ||
    e === ha ||
    e === ga ||
    e === fw ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === va ||
        e.$$typeof === ya ||
        e.$$typeof === fa ||
        e.$$typeof === pa ||
        e.$$typeof === ma ||
        e.$$typeof === jh ||
        e.getModuleId !== void 0))
  );
};
ie.typeOf = Tt;
Rh.exports = ie;
var of = Rh.exports;
const pw = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Th(e) {
  const t = `${e}`.match(pw);
  return (t && t[1]) || "";
}
function Mh(e, t = "") {
  return e.displayName || e.name || Th(e) || t;
}
function lf(e, t, n) {
  const r = Mh(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function mw(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return Mh(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case of.ForwardRef:
          return lf(e, e.render, "ForwardRef");
        case of.Memo:
          return lf(e, e.type, "memo");
        default:
          return;
      }
  }
}
const hw = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: mw, getFunctionName: Th },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Oh(e, t) {
  const n = R({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = R({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          l = t[r];
        (n[r] = {}),
          !l || !Object.keys(l)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = l)
            : ((n[r] = R({}, l)),
              Object.keys(o).forEach((i) => {
                n[r][i] = Oh(o[i], l[i]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function gw(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Oh(t.components[n].defaultProps, r);
}
function yw({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Ph(n);
  return r && (o = o[r] || o), gw({ theme: o, name: t, props: e });
}
const Lh = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function mr(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const vw = Object.freeze(
  Object.defineProperty({ __proto__: null, default: mr }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Kl(e) {
  return (e && e.ownerDocument) || document;
}
function xw(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function zh({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = S.useRef(e !== void 0),
    [l, i] = S.useState(t),
    a = o ? e : l,
    s = S.useCallback((u) => {
      o || i(u);
    }, []);
  return [a, s];
}
function Qn(e) {
  const t = S.useRef(e);
  return (
    Lh(() => {
      t.current = e;
    }),
    S.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Xo(...e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              xw(n, t);
            });
          },
    e
  );
}
const af = {};
function ww(e, t) {
  const n = S.useRef(af);
  return n.current === af && (n.current = e(t)), n;
}
const Sw = [];
function kw(e) {
  S.useEffect(e, Sw);
}
class xa {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new xa();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function Cw() {
  const e = ww(xa.create).current;
  return kw(e.disposeEffect), e;
}
let wa = !0,
  su = !1;
const bw = new xa(),
  Nw = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function $w(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && Nw[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function Pw(e) {
  e.metaKey || e.altKey || e.ctrlKey || (wa = !0);
}
function ss() {
  wa = !1;
}
function Ew() {
  this.visibilityState === "hidden" && su && (wa = !0);
}
function _w(e) {
  e.addEventListener("keydown", Pw, !0),
    e.addEventListener("mousedown", ss, !0),
    e.addEventListener("pointerdown", ss, !0),
    e.addEventListener("touchstart", ss, !0),
    e.addEventListener("visibilitychange", Ew, !0);
}
function Rw(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return wa || $w(t);
}
function Ih() {
  const e = S.useCallback((o) => {
      o != null && _w(o.ownerDocument);
    }, []),
    t = S.useRef(!1);
  function n() {
    return t.current
      ? ((su = !0),
        bw.start(100, () => {
          su = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return Rw(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
const jw = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
  Tw = jw;
function Qr(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((l, i) => {
          if (i) {
            const a = t(i);
            a !== "" && l.push(a), n && n[i] && l.push(n[i]);
          }
          return l;
        }, [])
        .join(" ");
    }),
    r
  );
}
const Mw = S.createContext(),
  Ah = () => {
    const e = S.useContext(Mw);
    return e ?? !1;
  };
function Ow(e, t) {
  return R(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var Ne = {},
  Dh = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Dh);
var Fh = Dh.exports;
const Lw = In(Yv),
  zw = In(vw);
var Bh = Fh;
Object.defineProperty(Ne, "__esModule", { value: !0 });
var Sn = (Ne.alpha = Hh);
Ne.blend = Qw;
Ne.colorChannel = void 0;
var uu = (Ne.darken = $c);
Ne.decomposeColor = Rt;
Ne.emphasize = Kh;
var Iw = (Ne.getContrastRatio = Vw);
Ne.getLuminance = ki;
Ne.hexToRgb = Vh;
Ne.hslToRgb = Wh;
var cu = (Ne.lighten = Pc);
Ne.private_safeAlpha = Uw;
Ne.private_safeColorChannel = void 0;
Ne.private_safeDarken = Ww;
Ne.private_safeEmphasize = Kw;
Ne.private_safeLighten = Hw;
Ne.recomposeColor = Gr;
Ne.rgbToHex = Bw;
var sf = Bh(Lw),
  Aw = Bh(zw);
function Nc(e, t = 0, n = 1) {
  return (0, Aw.default)(e, t, n);
}
function Vh(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Dw(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Rt(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Rt(Vh(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, sf.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, sf.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((l) => parseFloat(l))), { type: n, values: r, colorSpace: o }
  );
}
const Uh = (e) => {
  const t = Rt(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
Ne.colorChannel = Uh;
const Fw = (e, t) => {
  try {
    return Uh(e);
  } catch {
    return e;
  }
};
Ne.private_safeColorChannel = Fw;
function Gr(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, l) => (l < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function Bw(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = Rt(e);
  return `#${t.map((n, r) => Dw(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Wh(e) {
  e = Rt(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    l = r * Math.min(o, 1 - o),
    i = (u, p = (u + n / 30) % 12) =>
      o - l * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let a = "rgb";
  const s = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), s.push(t[3])), Gr({ type: a, values: s })
  );
}
function ki(e) {
  e = Rt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Rt(Wh(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function Vw(e, t) {
  const n = ki(e),
    r = ki(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Hh(e, t) {
  return (
    (e = Rt(e)),
    (t = Nc(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Gr(e)
  );
}
function Uw(e, t, n) {
  try {
    return Hh(e, t);
  } catch {
    return e;
  }
}
function $c(e, t) {
  if (((e = Rt(e)), (t = Nc(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Gr(e);
}
function Ww(e, t, n) {
  try {
    return $c(e, t);
  } catch {
    return e;
  }
}
function Pc(e, t) {
  if (((e = Rt(e)), (t = Nc(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Gr(e);
}
function Hw(e, t, n) {
  try {
    return Pc(e, t);
  } catch {
    return e;
  }
}
function Kh(e, t = 0.15) {
  return ki(e) > 0.5 ? $c(e, t) : Pc(e, t);
}
function Kw(e, t, n) {
  try {
    return Kh(e, t);
  } catch {
    return e;
  }
}
function Qw(e, t, n, r = 1) {
  const o = (s, u) =>
      Math.round((s ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    l = Rt(e),
    i = Rt(t),
    a = [
      o(l.values[0], i.values[0]),
      o(l.values[1], i.values[1]),
      o(l.values[2], i.values[2]),
    ];
  return Gr({ type: "rgb", values: a });
}
const Gw = ["mode", "contrastThreshold", "tonalOffset"],
  uf = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Ho.white, default: Ho.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  us = {
    text: {
      primary: Ho.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Ho.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function cf(e, t, n, r) {
  const o = r.light || r,
    l = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = cu(e.main, o))
      : t === "dark" && (e.dark = uu(e.main, l)));
}
function Yw(e = "light") {
  return e === "dark"
    ? { main: dr[200], light: dr[50], dark: dr[400] }
    : { main: dr[700], light: dr[400], dark: dr[800] };
}
function Xw(e = "light") {
  return e === "dark"
    ? { main: cr[200], light: cr[50], dark: cr[400] }
    : { main: cr[500], light: cr[300], dark: cr[700] };
}
function qw(e = "light") {
  return e === "dark"
    ? { main: ur[500], light: ur[300], dark: ur[700] }
    : { main: ur[700], light: ur[400], dark: ur[800] };
}
function Zw(e = "light") {
  return e === "dark"
    ? { main: fr[400], light: fr[300], dark: fr[700] }
    : { main: fr[700], light: fr[500], dark: fr[900] };
}
function Jw(e = "light") {
  return e === "dark"
    ? { main: pr[400], light: pr[300], dark: pr[700] }
    : { main: pr[800], light: pr[500], dark: pr[900] };
}
function eS(e = "light") {
  return e === "dark"
    ? { main: co[400], light: co[300], dark: co[700] }
    : { main: "#ed6c02", light: co[500], dark: co[900] };
}
function tS(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Le(e, Gw),
    l = e.primary || Yw(t),
    i = e.secondary || Xw(t),
    a = e.error || qw(t),
    s = e.info || Zw(t),
    u = e.success || Jw(t),
    p = e.warning || eS(t);
  function m(y) {
    return Iw(y, us.text.primary) >= n ? us.text.primary : uf.text.primary;
  }
  const c = ({
      color: y,
      name: b,
      mainShade: h = 500,
      lightShade: f = 300,
      darkShade: g = 700,
    }) => {
      if (
        ((y = R({}, y)),
        !y.main && y[h] && (y.main = y[h]),
        !y.hasOwnProperty("main"))
      )
        throw new Error(Ko(11, b ? ` (${b})` : "", h));
      if (typeof y.main != "string")
        throw new Error(Ko(12, b ? ` (${b})` : "", JSON.stringify(y.main)));
      return (
        cf(y, "light", f, r),
        cf(y, "dark", g, r),
        y.contrastText || (y.contrastText = m(y.main)),
        y
      );
    },
    x = { dark: us, light: uf };
  return Jt(
    R(
      {
        common: R({}, Ho),
        mode: t,
        primary: c({ color: l, name: "primary" }),
        secondary: c({
          color: i,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: c({ color: a, name: "error" }),
        warning: c({ color: p, name: "warning" }),
        info: c({ color: s, name: "info" }),
        success: c({ color: u, name: "success" }),
        grey: Gv,
        contrastThreshold: n,
        getContrastText: m,
        augmentColor: c,
        tonalOffset: r,
      },
      x[t]
    ),
    o
  );
}
const nS = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function rS(e) {
  return Math.round(e * 1e5) / 1e5;
}
const df = { textTransform: "uppercase" },
  ff = '"Roboto", "Helvetica", "Arial", sans-serif';
function oS(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = ff,
      fontSize: o = 14,
      fontWeightLight: l = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: s = 700,
      htmlFontSize: u = 16,
      allVariants: p,
      pxToRem: m,
    } = n,
    c = Le(n, nS),
    x = o / 14,
    v = m || ((h) => `${(h / u) * x}rem`),
    y = (h, f, g, w, k) =>
      R(
        { fontFamily: r, fontWeight: h, fontSize: v(f), lineHeight: g },
        r === ff ? { letterSpacing: `${rS(w / f)}em` } : {},
        k,
        p
      ),
    b = {
      h1: y(l, 96, 1.167, -1.5),
      h2: y(l, 60, 1.2, -0.5),
      h3: y(i, 48, 1.167, 0),
      h4: y(i, 34, 1.235, 0.25),
      h5: y(i, 24, 1.334, 0),
      h6: y(a, 20, 1.6, 0.15),
      subtitle1: y(i, 16, 1.75, 0.15),
      subtitle2: y(a, 14, 1.57, 0.1),
      body1: y(i, 16, 1.5, 0.15),
      body2: y(i, 14, 1.43, 0.15),
      button: y(a, 14, 1.75, 0.4, df),
      caption: y(i, 12, 1.66, 0.4),
      overline: y(i, 12, 2.66, 1, df),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Jt(
    R(
      {
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: l,
        fontWeightRegular: i,
        fontWeightMedium: a,
        fontWeightBold: s,
      },
      b
    ),
    c,
    { clone: !1 }
  );
}
const lS = 0.2,
  iS = 0.14,
  aS = 0.12;
function de(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${lS})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${iS})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${aS})`,
  ].join(",");
}
const sS = [
    "none",
    de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  uS = ["duration", "easing", "delay"],
  cS = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  dS = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function pf(e) {
  return `${Math.round(e)}ms`;
}
function fS(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function pS(e) {
  const t = R({}, cS, e.easing),
    n = R({}, dS, e.duration);
  return R(
    {
      getAutoHeightDuration: fS,
      create: (o = ["all"], l = {}) => {
        const {
          duration: i = n.standard,
          easing: a = t.easeInOut,
          delay: s = 0,
        } = l;
        return (
          Le(l, uS),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof i == "string" ? i : pf(i)} ${a} ${
                  typeof s == "string" ? s : pf(s)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const mS = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  hS = mS,
  gS = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Qh(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: l = {},
    } = e,
    i = Le(e, gS);
  if (e.vars) throw new Error(Ko(18));
  const a = tS(r),
    s = Sc(e);
  let u = Jt(s, {
    mixins: Ow(s.breakpoints, n),
    palette: a,
    shadows: sS.slice(),
    typography: oS(a, l),
    transitions: pS(o),
    zIndex: R({}, hS),
  });
  return (
    (u = Jt(u, i)),
    (u = t.reduce((p, m) => Jt(p, m), u)),
    (u.unstable_sxConfig = R({}, ll, i == null ? void 0 : i.unstable_sxConfig)),
    (u.unstable_sx = function (m) {
      return sa({ sx: m, theme: this });
    }),
    u
  );
}
const yS = Qh(),
  Gh = yS;
function lr({ props: e, name: t }) {
  return yw({ props: e, name: t, defaultTheme: Gh, themeId: uc });
}
var il = {},
  cs = { exports: {} },
  mf;
function vS() {
  return (
    mf ||
      ((mf = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            l = Object.keys(n),
            i,
            a;
          for (a = 0; a < l.length; a++)
            (i = l[a]), !(r.indexOf(i) >= 0) && (o[i] = n[i]);
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(cs)),
    cs.exports
  );
}
const xS = In(nx),
  wS = In(rx),
  SS = In(cx),
  kS = In(hw),
  CS = In(Zx),
  bS = In(ow);
var Yr = Fh;
Object.defineProperty(il, "__esModule", { value: !0 });
var NS = (il.default = AS);
il.shouldForwardProp = Ql;
il.systemDefaultTheme = void 0;
var wt = Yr(yh()),
  du = Yr(vS()),
  hf = TS(xS),
  $S = wS;
Yr(SS);
Yr(kS);
var PS = Yr(CS),
  ES = Yr(bS);
const _S = ["ownerState"],
  RS = ["variants"],
  jS = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Yh(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Yh = function (r) {
    return r ? n : t;
  })(e);
}
function TS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Yh(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e)
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, l) : null;
      i && (i.get || i.set) ? Object.defineProperty(r, l, i) : (r[l] = e[l]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function MS(e) {
  return Object.keys(e).length === 0;
}
function OS(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Ql(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const LS = (il.systemDefaultTheme = (0, PS.default)()),
  zS = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function $l({ defaultTheme: e, theme: t, themeId: n }) {
  return MS(t) ? e : t[n] || t;
}
function IS(e) {
  return e ? (t, n) => n[e] : null;
}
function Gl(e, t) {
  let { ownerState: n } = t,
    r = (0, du.default)(t, _S);
  const o =
    typeof e == "function" ? e((0, wt.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((l) => Gl(l, (0, wt.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: l = [] } = o;
    let a = (0, du.default)(o, RS);
    return (
      l.forEach((s) => {
        let u = !0;
        typeof s.props == "function"
          ? (u = s.props((0, wt.default)({ ownerState: n }, r, n)))
          : Object.keys(s.props).forEach((p) => {
              (n == null ? void 0 : n[p]) !== s.props[p] &&
                r[p] !== s.props[p] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof s.style == "function"
                ? s.style((0, wt.default)({ ownerState: n }, r, n))
                : s.style
            ));
      }),
      a
    );
  }
  return o;
}
function AS(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = LS,
      rootShouldForwardProp: r = Ql,
      slotShouldForwardProp: o = Ql,
    } = e,
    l = (i) =>
      (0, ES.default)(
        (0, wt.default)({}, i, {
          theme: $l((0, wt.default)({}, i, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (l.__mui_systemSx = !0),
    (i, a = {}) => {
      (0, hf.internal_processStyles)(i, (k) =>
        k.filter((N) => !(N != null && N.__mui_systemSx))
      );
      const {
          name: s,
          slot: u,
          skipVariantsResolver: p,
          skipSx: m,
          overridesResolver: c = IS(zS(u)),
        } = a,
        x = (0, du.default)(a, jS),
        v = p !== void 0 ? p : (u && u !== "Root" && u !== "root") || !1,
        y = m || !1;
      let b,
        h = Ql;
      u === "Root" || u === "root"
        ? (h = r)
        : u
        ? (h = o)
        : OS(i) && (h = void 0);
      const f = (0, hf.default)(
          i,
          (0, wt.default)({ shouldForwardProp: h, label: b }, x)
        ),
        g = (k) =>
          (typeof k == "function" && k.__emotion_real !== k) ||
          (0, $S.isPlainObject)(k)
            ? (N) =>
                Gl(
                  k,
                  (0, wt.default)({}, N, {
                    theme: $l({ theme: N.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : k,
        w = (k, ...N) => {
          let C = g(k);
          const _ = N ? N.map(g) : [];
          s &&
            c &&
            _.push((I) => {
              const V = $l(
                (0, wt.default)({}, I, { defaultTheme: n, themeId: t })
              );
              if (
                !V.components ||
                !V.components[s] ||
                !V.components[s].styleOverrides
              )
                return null;
              const W = V.components[s].styleOverrides,
                B = {};
              return (
                Object.entries(W).forEach(([U, Q]) => {
                  B[U] = Gl(Q, (0, wt.default)({}, I, { theme: V }));
                }),
                c(I, B)
              );
            }),
            s &&
              !v &&
              _.push((I) => {
                var V;
                const W = $l(
                    (0, wt.default)({}, I, { defaultTheme: n, themeId: t })
                  ),
                  B =
                    W == null ||
                    (V = W.components) == null ||
                    (V = V[s]) == null
                      ? void 0
                      : V.variants;
                return Gl(
                  { variants: B },
                  (0, wt.default)({}, I, { theme: W })
                );
              }),
            y || _.push(l);
          const M = _.length - N.length;
          if (Array.isArray(k) && M > 0) {
            const I = new Array(M).fill("");
            (C = [...k, ...I]), (C.raw = [...k.raw, ...I]);
          }
          const P = f(C, ..._);
          return i.muiName && (P.muiName = i.muiName), P;
        };
      return f.withConfig && (w.withConfig = f.withConfig), w;
    }
  );
}
function Ec(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const DS = (e) => Ec(e) && e !== "classes",
  FS = DS,
  Ve = NS({ themeId: uc, defaultTheme: Gh, rootShouldForwardProp: FS });
function Xh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Xh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ke() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Xh(e)) && (r && (r += " "), (r += t));
  return r;
}
function BS(e) {
  return or("MuiSvgIcon", e);
}
Bn("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const VS = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  US = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${he(t)}`, `fontSize${he(n)}`],
      };
    return Qr(o, BS, r);
  },
  WS = Ve("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${he(n.color)}`],
        t[`fontSize${he(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, l, i, a, s, u, p, m, c, x, v;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((l = e.typography) == null || (i = l.pxToRem) == null
            ? void 0
            : i.call(l, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (s = a.pxToRem) == null
            ? void 0
            : s.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (p = u.pxToRem) == null
            ? void 0
            : p.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (m =
          (c = (e.vars || e).palette) == null || (c = c[t.color]) == null
            ? void 0
            : c.main) != null
          ? m
          : {
              action:
                (x = (e.vars || e).palette) == null || (x = x.action) == null
                  ? void 0
                  : x.active,
              disabled:
                (v = (e.vars || e).palette) == null || (v = v.action) == null
                  ? void 0
                  : v.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  fu = S.forwardRef(function (t, n) {
    const r = lr({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: l,
        color: i = "inherit",
        component: a = "svg",
        fontSize: s = "medium",
        htmlColor: u,
        inheritViewBox: p = !1,
        titleAccess: m,
        viewBox: c = "0 0 24 24",
      } = r,
      x = Le(r, VS),
      v = S.isValidElement(o) && o.type === "svg",
      y = R({}, r, {
        color: i,
        component: a,
        fontSize: s,
        instanceFontSize: t.fontSize,
        inheritViewBox: p,
        viewBox: c,
        hasSvgAsChild: v,
      }),
      b = {};
    p || (b.viewBox = c);
    const h = US(y);
    return d.jsxs(
      WS,
      R(
        {
          as: a,
          className: ke(h.root, l),
          focusable: "false",
          color: u,
          "aria-hidden": m ? void 0 : !0,
          role: m ? "img" : void 0,
          ref: n,
        },
        b,
        x,
        v && o.props,
        {
          ownerState: y,
          children: [
            v ? o.props.children : o,
            m ? d.jsx("title", { children: m }) : null,
          ],
        }
      )
    );
  });
fu.muiName = "SvgIcon";
function Sa(e, t) {
  function n(r, o) {
    return d.jsx(
      fu,
      R({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = fu.muiName), S.memo(S.forwardRef(n));
}
function HS(e) {
  return lr;
}
function pu(e, t) {
  return (
    (pu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    pu(e, t)
  );
}
function KS(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    pu(e, t);
}
const gf = z.createContext(null);
function QS(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _c(e, t) {
  var n = function (l) {
      return t && S.isValidElement(l) ? t(l) : l;
    },
    r = Object.create(null);
  return (
    e &&
      S.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function GS(e, t) {
  (e = e || {}), (t = t || {});
  function n(p) {
    return p in t ? t[p] : e[p];
  }
  var r = Object.create(null),
    o = [];
  for (var l in e) l in t ? o.length && ((r[l] = o), (o = [])) : o.push(l);
  var i,
    a = {};
  for (var s in t) {
    if (r[s])
      for (i = 0; i < r[s].length; i++) {
        var u = r[s][i];
        a[r[s][i]] = n(u);
      }
    a[s] = n(s);
  }
  for (i = 0; i < o.length; i++) a[o[i]] = n(o[i]);
  return a;
}
function Gn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function YS(e, t) {
  return _c(e.children, function (n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Gn(n, "appear", e),
      enter: Gn(n, "enter", e),
      exit: Gn(n, "exit", e),
    });
  });
}
function XS(e, t, n) {
  var r = _c(e.children),
    o = GS(t, r);
  return (
    Object.keys(o).forEach(function (l) {
      var i = o[l];
      if (S.isValidElement(i)) {
        var a = l in t,
          s = l in r,
          u = t[l],
          p = S.isValidElement(u) && !u.props.in;
        s && (!a || p)
          ? (o[l] = S.cloneElement(i, {
              onExited: n.bind(null, i),
              in: !0,
              exit: Gn(i, "exit", e),
              enter: Gn(i, "enter", e),
            }))
          : !s && a && !p
          ? (o[l] = S.cloneElement(i, { in: !1 }))
          : s &&
            a &&
            S.isValidElement(u) &&
            (o[l] = S.cloneElement(i, {
              onExited: n.bind(null, i),
              in: u.props.in,
              exit: Gn(i, "exit", e),
              enter: Gn(i, "enter", e),
            }));
      }
    }),
    o
  );
}
var qS =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  ZS = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Rc = (function (e) {
    KS(t, e);
    function t(r, o) {
      var l;
      l = e.call(this, r, o) || this;
      var i = l.handleExited.bind(QS(l));
      return (
        (l.state = {
          contextValue: { isMounting: !0 },
          handleExited: i,
          firstRender: !0,
        }),
        l
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, l) {
        var i = l.children,
          a = l.handleExited,
          s = l.firstRender;
        return { children: s ? YS(o, a) : XS(o, i, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, l) {
        var i = _c(this.props.children);
        o.key in i ||
          (o.props.onExited && o.props.onExited(l),
          this.mounted &&
            this.setState(function (a) {
              var s = R({}, a.children);
              return delete s[o.key], { children: s };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          l = o.component,
          i = o.childFactory,
          a = Le(o, ["component", "childFactory"]),
          s = this.state.contextValue,
          u = qS(this.state.children).map(i);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          l === null
            ? z.createElement(gf.Provider, { value: s }, u)
            : z.createElement(
                gf.Provider,
                { value: s },
                z.createElement(l, a, u)
              )
        );
      }),
      t
    );
  })(z.Component);
Rc.propTypes = {};
Rc.defaultProps = ZS;
const JS = Rc;
function Po(e) {
  return typeof e == "string";
}
function ek(e, t, n) {
  return e === void 0 || Po(e)
    ? t
    : R({}, t, { ownerState: R({}, t.ownerState, n) });
}
function tk(e, t, n = (r, o) => r === o) {
  return e.length === t.length && e.every((r, o) => n(r, t[o]));
}
function Yl(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function nk(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function qh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = qh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function yf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = qh(e)) && (r && (r += " "), (r += t));
  return r;
}
function vf(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function rk(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: l,
  } = e;
  if (!t) {
    const x = yf(
        n == null ? void 0 : n.className,
        l,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      v = R(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      y = R({}, n, o, r);
    return (
      x.length > 0 && (y.className = x),
      Object.keys(v).length > 0 && (y.style = v),
      { props: y, internalRef: void 0 }
    );
  }
  const i = Yl(R({}, o, r)),
    a = vf(r),
    s = vf(o),
    u = t(i),
    p = yf(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      l,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    m = R(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    c = R({}, u, n, s, a);
  return (
    p.length > 0 && (c.className = p),
    Object.keys(m).length > 0 && (c.style = m),
    { props: c, internalRef: u.ref }
  );
}
const ok = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function vn(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: l = !1,
    } = e,
    i = Le(e, ok),
    a = l ? {} : nk(r, o),
    { props: s, internalRef: u } = rk(R({}, i, { externalSlotProps: a })),
    p = Xo(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return ek(n, R({}, s, { ref: p }), o);
}
function lk(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: l,
      rippleSize: i,
      in: a,
      onExited: s,
      timeout: u,
    } = e,
    [p, m] = S.useState(!1),
    c = ke(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    x = { width: i, height: i, top: -(i / 2) + l, left: -(i / 2) + o },
    v = ke(n.child, p && n.childLeaving, r && n.childPulsate);
  return (
    !a && !p && m(!0),
    S.useEffect(() => {
      if (!a && s != null) {
        const y = setTimeout(s, u);
        return () => {
          clearTimeout(y);
        };
      }
    }, [s, a, u]),
    d.jsx("span", {
      className: c,
      style: x,
      children: d.jsx("span", { className: v }),
    })
  );
}
const St = Bn("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  ik = ["center", "classes", "className"];
let ka = (e) => e,
  xf,
  wf,
  Sf,
  kf;
const mu = 550,
  ak = 80,
  sk = ta(
    xf ||
      (xf = ka`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  uk = ta(
    wf ||
      (wf = ka`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  ck = ta(
    Sf ||
      (Sf = ka`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  dk = Ve("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  fk = Ve(lk, { name: "MuiTouchRipple", slot: "Ripple" })(
    kf ||
      (kf = ka`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    St.rippleVisible,
    sk,
    mu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    St.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    St.child,
    St.childLeaving,
    uk,
    mu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    St.childPulsate,
    ck,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  pk = S.forwardRef(function (t, n) {
    const r = lr({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: l = {}, className: i } = r,
      a = Le(r, ik),
      [s, u] = S.useState([]),
      p = S.useRef(0),
      m = S.useRef(null);
    S.useEffect(() => {
      m.current && (m.current(), (m.current = null));
    }, [s]);
    const c = S.useRef(!1),
      x = Cw(),
      v = S.useRef(null),
      y = S.useRef(null),
      b = S.useCallback(
        (w) => {
          const {
            pulsate: k,
            rippleX: N,
            rippleY: C,
            rippleSize: _,
            cb: M,
          } = w;
          u((P) => [
            ...P,
            d.jsx(
              fk,
              {
                classes: {
                  ripple: ke(l.ripple, St.ripple),
                  rippleVisible: ke(l.rippleVisible, St.rippleVisible),
                  ripplePulsate: ke(l.ripplePulsate, St.ripplePulsate),
                  child: ke(l.child, St.child),
                  childLeaving: ke(l.childLeaving, St.childLeaving),
                  childPulsate: ke(l.childPulsate, St.childPulsate),
                },
                timeout: mu,
                pulsate: k,
                rippleX: N,
                rippleY: C,
                rippleSize: _,
              },
              p.current
            ),
          ]),
            (p.current += 1),
            (m.current = M);
        },
        [l]
      ),
      h = S.useCallback(
        (w = {}, k = {}, N = () => {}) => {
          const {
            pulsate: C = !1,
            center: _ = o || k.pulsate,
            fakeElement: M = !1,
          } = k;
          if ((w == null ? void 0 : w.type) === "mousedown" && c.current) {
            c.current = !1;
            return;
          }
          (w == null ? void 0 : w.type) === "touchstart" && (c.current = !0);
          const P = M ? null : y.current,
            I = P
              ? P.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let V, W, B;
          if (
            _ ||
            w === void 0 ||
            (w.clientX === 0 && w.clientY === 0) ||
            (!w.clientX && !w.touches)
          )
            (V = Math.round(I.width / 2)), (W = Math.round(I.height / 2));
          else {
            const { clientX: U, clientY: Q } =
              w.touches && w.touches.length > 0 ? w.touches[0] : w;
            (V = Math.round(U - I.left)), (W = Math.round(Q - I.top));
          }
          if (_)
            (B = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3)),
              B % 2 === 0 && (B += 1);
          else {
            const U =
                Math.max(Math.abs((P ? P.clientWidth : 0) - V), V) * 2 + 2,
              Q = Math.max(Math.abs((P ? P.clientHeight : 0) - W), W) * 2 + 2;
            B = Math.sqrt(U ** 2 + Q ** 2);
          }
          w != null && w.touches
            ? v.current === null &&
              ((v.current = () => {
                b({ pulsate: C, rippleX: V, rippleY: W, rippleSize: B, cb: N });
              }),
              x.start(ak, () => {
                v.current && (v.current(), (v.current = null));
              }))
            : b({ pulsate: C, rippleX: V, rippleY: W, rippleSize: B, cb: N });
        },
        [o, b, x]
      ),
      f = S.useCallback(() => {
        h({}, { pulsate: !0 });
      }, [h]),
      g = S.useCallback(
        (w, k) => {
          if (
            (x.clear(),
            (w == null ? void 0 : w.type) === "touchend" && v.current)
          ) {
            v.current(),
              (v.current = null),
              x.start(0, () => {
                g(w, k);
              });
            return;
          }
          (v.current = null),
            u((N) => (N.length > 0 ? N.slice(1) : N)),
            (m.current = k);
        },
        [x]
      );
    return (
      S.useImperativeHandle(n, () => ({ pulsate: f, start: h, stop: g }), [
        f,
        h,
        g,
      ]),
      d.jsx(
        dk,
        R({ className: ke(St.root, l.root, i), ref: y }, a, {
          children: d.jsx(JS, { component: null, exit: !0, children: s }),
        })
      )
    );
  }),
  mk = pk;
function hk(e) {
  return or("MuiButtonBase", e);
}
const gk = Bn("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  yk = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  vk = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      i = Qr({ root: ["root", t && "disabled", n && "focusVisible"] }, hk, o);
    return n && r && (i.root += ` ${r}`), i;
  },
  xk = Ve("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${gk.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  wk = S.forwardRef(function (t, n) {
    const r = lr({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: l = !1,
        children: i,
        className: a,
        component: s = "button",
        disabled: u = !1,
        disableRipple: p = !1,
        disableTouchRipple: m = !1,
        focusRipple: c = !1,
        LinkComponent: x = "a",
        onBlur: v,
        onClick: y,
        onContextMenu: b,
        onDragLeave: h,
        onFocus: f,
        onFocusVisible: g,
        onKeyDown: w,
        onKeyUp: k,
        onMouseDown: N,
        onMouseLeave: C,
        onMouseUp: _,
        onTouchEnd: M,
        onTouchMove: P,
        onTouchStart: I,
        tabIndex: V = 0,
        TouchRippleProps: W,
        touchRippleRef: B,
        type: U,
      } = r,
      Q = Le(r, yk),
      K = S.useRef(null),
      E = S.useRef(null),
      A = Xo(E, B),
      { isFocusVisibleRef: D, onFocus: H, onBlur: ee, ref: Te } = Ih(),
      [J, ve] = S.useState(!1);
    u && J && ve(!1),
      S.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ve(!0), K.current.focus();
          },
        }),
        []
      );
    const [Ue, it] = S.useState(!1);
    S.useEffect(() => {
      it(!0);
    }, []);
    const pn = Ue && !p && !u;
    S.useEffect(() => {
      J && c && !p && Ue && E.current.pulsate();
    }, [p, c, J, Ue]);
    function Je($, F, X = m) {
      return Qn((q) => (F && F(q), !X && E.current && E.current[$](q), !0));
    }
    const Xr = Je("start", N),
      qr = Je("stop", b),
      ir = Je("stop", h),
      Mt = Je("stop", _),
      pe = Je("stop", ($) => {
        J && $.preventDefault(), C && C($);
      }),
      ce = Je("start", I),
      at = Je("stop", M),
      Vt = Je("stop", P),
      st = Je(
        "stop",
        ($) => {
          ee($), D.current === !1 && ve(!1), v && v($);
        },
        !1
      ),
      Zr = Qn(($) => {
        K.current || (K.current = $.currentTarget),
          H($),
          D.current === !0 && (ve(!0), g && g($)),
          f && f($);
      }),
      $e = () => {
        const $ = K.current;
        return s && s !== "button" && !($.tagName === "A" && $.href);
      },
      Ut = S.useRef(!1),
      Jr = Qn(($) => {
        c &&
          !Ut.current &&
          J &&
          E.current &&
          $.key === " " &&
          ((Ut.current = !0),
          E.current.stop($, () => {
            E.current.start($);
          })),
          $.target === $.currentTarget &&
            $e() &&
            $.key === " " &&
            $.preventDefault(),
          w && w($),
          $.target === $.currentTarget &&
            $e() &&
            $.key === "Enter" &&
            !u &&
            ($.preventDefault(), y && y($));
      }),
      eo = Qn(($) => {
        c &&
          $.key === " " &&
          E.current &&
          J &&
          !$.defaultPrevented &&
          ((Ut.current = !1),
          E.current.stop($, () => {
            E.current.pulsate($);
          })),
          k && k($),
          y &&
            $.target === $.currentTarget &&
            $e() &&
            $.key === " " &&
            !$.defaultPrevented &&
            y($);
      });
    let mn = s;
    mn === "button" && (Q.href || Q.to) && (mn = x);
    const hn = {};
    mn === "button"
      ? ((hn.type = U === void 0 ? "button" : U), (hn.disabled = u))
      : (!Q.href && !Q.to && (hn.role = "button"),
        u && (hn["aria-disabled"] = u));
    const to = Xo(n, Te, K),
      gn = R({}, r, {
        centerRipple: l,
        component: s,
        disabled: u,
        disableRipple: p,
        disableTouchRipple: m,
        focusRipple: c,
        tabIndex: V,
        focusVisible: J,
      }),
      T = vk(gn);
    return d.jsxs(
      xk,
      R(
        {
          as: mn,
          className: ke(T.root, a),
          ownerState: gn,
          onBlur: st,
          onClick: y,
          onContextMenu: qr,
          onFocus: Zr,
          onKeyDown: Jr,
          onKeyUp: eo,
          onMouseDown: Xr,
          onMouseLeave: pe,
          onMouseUp: Mt,
          onDragLeave: ir,
          onTouchEnd: at,
          onTouchMove: Vt,
          onTouchStart: ce,
          ref: to,
          tabIndex: u ? -1 : V,
          type: U,
        },
        hn,
        Q,
        { children: [i, pn ? d.jsx(mk, R({ ref: A, center: l }, W)) : null] }
      )
    );
  }),
  Sk = wk;
function kk(e) {
  return or("MuiTypography", e);
}
Bn("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const Ck = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  bk = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: l,
        classes: i,
      } = e,
      a = {
        root: [
          "root",
          l,
          e.align !== "inherit" && `align${he(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Qr(a, kk, i);
  },
  Nk = Ve("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${he(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  Cf = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  $k = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  Pk = (e) => $k[e] || e,
  Ek = S.forwardRef(function (t, n) {
    const r = lr({ props: t, name: "MuiTypography" }),
      o = Pk(r.color),
      l = kc(R({}, r, { color: o })),
      {
        align: i = "inherit",
        className: a,
        component: s,
        gutterBottom: u = !1,
        noWrap: p = !1,
        paragraph: m = !1,
        variant: c = "body1",
        variantMapping: x = Cf,
      } = l,
      v = Le(l, Ck),
      y = R({}, l, {
        align: i,
        color: o,
        className: a,
        component: s,
        gutterBottom: u,
        noWrap: p,
        paragraph: m,
        variant: c,
        variantMapping: x,
      }),
      b = s || (m ? "p" : x[c] || Cf[c]) || "span",
      h = bk(y);
    return d.jsx(
      Nk,
      R({ as: b, ref: n, ownerState: y, className: ke(h.root, a) }, v)
    );
  }),
  _k = Ek,
  Rk = 2;
function Zh(e, t) {
  return e - t;
}
function bf(e, t) {
  var n;
  const { index: r } =
    (n = e.reduce((o, l, i) => {
      const a = Math.abs(t - l);
      return o === null || a < o.distance || a === o.distance
        ? { distance: a, index: i }
        : o;
    }, null)) != null
      ? n
      : {};
  return r;
}
function Pl(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const n = e;
    for (let r = 0; r < n.changedTouches.length; r += 1) {
      const o = n.changedTouches[r];
      if (o.identifier === t.current) return { x: o.clientX, y: o.clientY };
    }
    return !1;
  }
  return { x: e.clientX, y: e.clientY };
}
function Ci(e, t, n) {
  return ((e - t) * 100) / (n - t);
}
function jk(e, t, n) {
  return (n - t) * e + t;
}
function Tk(e) {
  if (Math.abs(e) < 1) {
    const n = e.toExponential().split("e-"),
      r = n[0].split(".")[1];
    return (r ? r.length : 0) + parseInt(n[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function Mk(e, t, n) {
  const r = Math.round((e - n) / t) * t + n;
  return Number(r.toFixed(Tk(t)));
}
function Nf({ values: e, newValue: t, index: n }) {
  const r = e.slice();
  return (r[n] = t), r.sort(Zh);
}
function El({ sliderRef: e, activeIndex: t, setActive: n }) {
  var r, o;
  const l = Kl(e.current);
  if (
    !((r = e.current) != null && r.contains(l.activeElement)) ||
    Number(
      l == null || (o = l.activeElement) == null
        ? void 0
        : o.getAttribute("data-index")
    ) !== t
  ) {
    var i;
    (i = e.current) == null ||
      i.querySelector(`[type="range"][data-index="${t}"]`).focus();
  }
  n && n(t);
}
function _l(e, t) {
  return typeof e == "number" && typeof t == "number"
    ? e === t
    : typeof e == "object" && typeof t == "object"
    ? tk(e, t)
    : !1;
}
const Ok = {
    horizontal: {
      offset: (e) => ({ left: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    "horizontal-reverse": {
      offset: (e) => ({ right: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    vertical: {
      offset: (e) => ({ bottom: `${e}%` }),
      leap: (e) => ({ height: `${e}%` }),
    },
  },
  Lk = (e) => e;
let Rl;
function $f() {
  return (
    Rl === void 0 &&
      (typeof CSS < "u" && typeof CSS.supports == "function"
        ? (Rl = CSS.supports("touch-action", "none"))
        : (Rl = !0)),
    Rl
  );
}
function zk(e) {
  const {
      "aria-labelledby": t,
      defaultValue: n,
      disabled: r = !1,
      disableSwap: o = !1,
      isRtl: l = !1,
      marks: i = !1,
      max: a = 100,
      min: s = 0,
      name: u,
      onChange: p,
      onChangeCommitted: m,
      orientation: c = "horizontal",
      rootRef: x,
      scale: v = Lk,
      step: y = 1,
      shiftStep: b = 10,
      tabIndex: h,
      value: f,
    } = e,
    g = S.useRef(),
    [w, k] = S.useState(-1),
    [N, C] = S.useState(-1),
    [_, M] = S.useState(!1),
    P = S.useRef(0),
    [I, V] = zh({ controlled: f, default: n ?? s, name: "Slider" }),
    W =
      p &&
      ((T, $, F) => {
        const X = T.nativeEvent || T,
          q = new X.constructor(X.type, X);
        Object.defineProperty(q, "target", {
          writable: !0,
          value: { value: $, name: u },
        }),
          p(q, $, F);
      }),
    B = Array.isArray(I);
  let U = B ? I.slice().sort(Zh) : [I];
  U = U.map((T) => (T == null ? s : mr(T, s, a)));
  const Q =
      i === !0 && y !== null
        ? [...Array(Math.floor((a - s) / y) + 1)].map((T, $) => ({
            value: s + y * $,
          }))
        : i || [],
    K = Q.map((T) => T.value),
    { isFocusVisibleRef: E, onBlur: A, onFocus: D, ref: H } = Ih(),
    [ee, Te] = S.useState(-1),
    J = S.useRef(),
    ve = Xo(H, J),
    Ue = Xo(x, ve),
    it = (T) => ($) => {
      var F;
      const X = Number($.currentTarget.getAttribute("data-index"));
      D($),
        E.current === !0 && Te(X),
        C(X),
        T == null || (F = T.onFocus) == null || F.call(T, $);
    },
    pn = (T) => ($) => {
      var F;
      A($),
        E.current === !1 && Te(-1),
        C(-1),
        T == null || (F = T.onBlur) == null || F.call(T, $);
    },
    Je = (T, $) => {
      const F = Number(T.currentTarget.getAttribute("data-index")),
        X = U[F],
        q = K.indexOf(X);
      let Y = $;
      if (Q && y == null) {
        const Ot = K[K.length - 1];
        Y > Ot
          ? (Y = Ot)
          : Y < K[0]
          ? (Y = K[0])
          : (Y = Y < X ? K[q - 1] : K[q + 1]);
      }
      if (((Y = mr(Y, s, a)), B)) {
        o && (Y = mr(Y, U[F - 1] || -1 / 0, U[F + 1] || 1 / 0));
        const Ot = Y;
        Y = Nf({ values: U, newValue: Y, index: F });
        let Wt = F;
        o || (Wt = Y.indexOf(Ot)), El({ sliderRef: J, activeIndex: Wt });
      }
      V(Y), Te(F), W && !_l(Y, I) && W(T, Y, F), m && m(T, Y);
    },
    Xr = (T) => ($) => {
      var F;
      if (y !== null) {
        const X = Number($.currentTarget.getAttribute("data-index")),
          q = U[X];
        let Y = null;
        (($.key === "ArrowLeft" || $.key === "ArrowDown") && $.shiftKey) ||
        $.key === "PageDown"
          ? (Y = Math.max(q - b, s))
          : ((($.key === "ArrowRight" || $.key === "ArrowUp") && $.shiftKey) ||
              $.key === "PageUp") &&
            (Y = Math.min(q + b, a)),
          Y !== null && (Je($, Y), $.preventDefault());
      }
      T == null || (F = T.onKeyDown) == null || F.call(T, $);
    };
  Lh(() => {
    if (r && J.current.contains(document.activeElement)) {
      var T;
      (T = document.activeElement) == null || T.blur();
    }
  }, [r]),
    r && w !== -1 && k(-1),
    r && ee !== -1 && Te(-1);
  const qr = (T) => ($) => {
      var F;
      (F = T.onChange) == null || F.call(T, $), Je($, $.target.valueAsNumber);
    },
    ir = S.useRef();
  let Mt = c;
  l && c === "horizontal" && (Mt += "-reverse");
  const pe = ({ finger: T, move: $ = !1 }) => {
      const { current: F } = J,
        {
          width: X,
          height: q,
          bottom: Y,
          left: Ot,
        } = F.getBoundingClientRect();
      let Wt;
      Mt.indexOf("vertical") === 0
        ? (Wt = (Y - T.y) / q)
        : (Wt = (T.x - Ot) / X),
        Mt.indexOf("-reverse") !== -1 && (Wt = 1 - Wt);
      let re;
      if (((re = jk(Wt, s, a)), y)) re = Mk(re, y, s);
      else {
        const ar = bf(K, re);
        re = K[ar];
      }
      re = mr(re, s, a);
      let vt = 0;
      if (B) {
        $ ? (vt = ir.current) : (vt = bf(U, re)),
          o && (re = mr(re, U[vt - 1] || -1 / 0, U[vt + 1] || 1 / 0));
        const ar = re;
        (re = Nf({ values: U, newValue: re, index: vt })),
          (o && $) || ((vt = re.indexOf(ar)), (ir.current = vt));
      }
      return { newValue: re, activeIndex: vt };
    },
    ce = Qn((T) => {
      const $ = Pl(T, g);
      if (!$) return;
      if (((P.current += 1), T.type === "mousemove" && T.buttons === 0)) {
        at(T);
        return;
      }
      const { newValue: F, activeIndex: X } = pe({ finger: $, move: !0 });
      El({ sliderRef: J, activeIndex: X, setActive: k }),
        V(F),
        !_ && P.current > Rk && M(!0),
        W && !_l(F, I) && W(T, F, X);
    }),
    at = Qn((T) => {
      const $ = Pl(T, g);
      if ((M(!1), !$)) return;
      const { newValue: F } = pe({ finger: $, move: !0 });
      k(-1),
        T.type === "touchend" && C(-1),
        m && m(T, F),
        (g.current = void 0),
        st();
    }),
    Vt = Qn((T) => {
      if (r) return;
      $f() || T.preventDefault();
      const $ = T.changedTouches[0];
      $ != null && (g.current = $.identifier);
      const F = Pl(T, g);
      if (F !== !1) {
        const { newValue: q, activeIndex: Y } = pe({ finger: F });
        El({ sliderRef: J, activeIndex: Y, setActive: k }),
          V(q),
          W && !_l(q, I) && W(T, q, Y);
      }
      P.current = 0;
      const X = Kl(J.current);
      X.addEventListener("touchmove", ce, { passive: !0 }),
        X.addEventListener("touchend", at, { passive: !0 });
    }),
    st = S.useCallback(() => {
      const T = Kl(J.current);
      T.removeEventListener("mousemove", ce),
        T.removeEventListener("mouseup", at),
        T.removeEventListener("touchmove", ce),
        T.removeEventListener("touchend", at);
    }, [at, ce]);
  S.useEffect(() => {
    const { current: T } = J;
    return (
      T.addEventListener("touchstart", Vt, { passive: $f() }),
      () => {
        T.removeEventListener("touchstart", Vt), st();
      }
    );
  }, [st, Vt]),
    S.useEffect(() => {
      r && st();
    }, [r, st]);
  const Zr = (T) => ($) => {
      var F;
      if (
        ((F = T.onMouseDown) == null || F.call(T, $),
        r || $.defaultPrevented || $.button !== 0)
      )
        return;
      $.preventDefault();
      const X = Pl($, g);
      if (X !== !1) {
        const { newValue: Y, activeIndex: Ot } = pe({ finger: X });
        El({ sliderRef: J, activeIndex: Ot, setActive: k }),
          V(Y),
          W && !_l(Y, I) && W($, Y, Ot);
      }
      P.current = 0;
      const q = Kl(J.current);
      q.addEventListener("mousemove", ce, { passive: !0 }),
        q.addEventListener("mouseup", at);
    },
    $e = Ci(B ? U[0] : s, s, a),
    Ut = Ci(U[U.length - 1], s, a) - $e,
    Jr = (T = {}) => {
      const $ = Yl(T),
        F = { onMouseDown: Zr($ || {}) },
        X = R({}, $, F);
      return R({}, T, { ref: Ue }, X);
    },
    eo = (T) => ($) => {
      var F;
      (F = T.onMouseOver) == null || F.call(T, $);
      const X = Number($.currentTarget.getAttribute("data-index"));
      C(X);
    },
    mn = (T) => ($) => {
      var F;
      (F = T.onMouseLeave) == null || F.call(T, $), C(-1);
    };
  return {
    active: w,
    axis: Mt,
    axisProps: Ok,
    dragging: _,
    focusedThumbIndex: ee,
    getHiddenInputProps: (T = {}) => {
      var $;
      const F = Yl(T),
        X = {
          onChange: qr(F || {}),
          onFocus: it(F || {}),
          onBlur: pn(F || {}),
          onKeyDown: Xr(F || {}),
        },
        q = R({}, F, X);
      return R(
        {
          tabIndex: h,
          "aria-labelledby": t,
          "aria-orientation": c,
          "aria-valuemax": v(a),
          "aria-valuemin": v(s),
          name: u,
          type: "range",
          min: e.min,
          max: e.max,
          step:
            e.step === null && e.marks
              ? "any"
              : ($ = e.step) != null
              ? $
              : void 0,
          disabled: r,
        },
        T,
        q,
        {
          style: R({}, Tw, {
            direction: l ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
          }),
        }
      );
    },
    getRootProps: Jr,
    getThumbProps: (T = {}) => {
      const $ = Yl(T),
        F = { onMouseOver: eo($ || {}), onMouseLeave: mn($ || {}) };
      return R({}, T, $, F);
    },
    marks: Q,
    open: N,
    range: B,
    rootRef: Ue,
    trackLeap: Ut,
    trackOffset: $e,
    values: U,
    getThumbStyle: (T) => ({
      pointerEvents: w !== -1 && w !== T ? "none" : void 0,
    }),
  };
}
const Ik = Bn("MuiBox", ["root"]),
  Ak = Ik,
  Dk = Qh(),
  Fk = uw({
    themeId: uc,
    defaultTheme: Dk,
    defaultClassName: Ak.root,
    generateClassName: Eh.generate,
  }),
  Bk = Fk;
function Vk(e) {
  return or("MuiPagination", e);
}
Bn("MuiPagination", ["root", "ul", "outlined", "text"]);
const Uk = [
  "boundaryCount",
  "componentName",
  "count",
  "defaultPage",
  "disabled",
  "hideNextButton",
  "hidePrevButton",
  "onChange",
  "page",
  "showFirstButton",
  "showLastButton",
  "siblingCount",
];
function Wk(e = {}) {
  const {
      boundaryCount: t = 1,
      componentName: n = "usePagination",
      count: r = 1,
      defaultPage: o = 1,
      disabled: l = !1,
      hideNextButton: i = !1,
      hidePrevButton: a = !1,
      onChange: s,
      page: u,
      showFirstButton: p = !1,
      showLastButton: m = !1,
      siblingCount: c = 1,
    } = e,
    x = Le(e, Uk),
    [v, y] = zh({ controlled: u, default: o, name: n, state: "page" }),
    b = (M, P) => {
      u || y(P), s && s(M, P);
    },
    h = (M, P) => {
      const I = P - M + 1;
      return Array.from({ length: I }, (V, W) => M + W);
    },
    f = h(1, Math.min(t, r)),
    g = h(Math.max(r - t + 1, t + 1), r),
    w = Math.max(Math.min(v - c, r - t - c * 2 - 1), t + 2),
    k = Math.min(
      Math.max(v + c, t + c * 2 + 2),
      g.length > 0 ? g[0] - 2 : r - 1
    ),
    N = [
      ...(p ? ["first"] : []),
      ...(a ? [] : ["previous"]),
      ...f,
      ...(w > t + 2 ? ["start-ellipsis"] : t + 1 < r - t ? [t + 1] : []),
      ...h(w, k),
      ...(k < r - t - 1 ? ["end-ellipsis"] : r - t > t ? [r - t] : []),
      ...g,
      ...(i ? [] : ["next"]),
      ...(m ? ["last"] : []),
    ],
    C = (M) => {
      switch (M) {
        case "first":
          return 1;
        case "previous":
          return v - 1;
        case "next":
          return v + 1;
        case "last":
          return r;
        default:
          return null;
      }
    },
    _ = N.map((M) =>
      typeof M == "number"
        ? {
            onClick: (P) => {
              b(P, M);
            },
            type: "page",
            page: M,
            selected: M === v,
            disabled: l,
            "aria-current": M === v ? "true" : void 0,
          }
        : {
            onClick: (P) => {
              b(P, C(M));
            },
            type: M,
            page: C(M),
            selected: !1,
            disabled:
              l ||
              (M.indexOf("ellipsis") === -1 &&
                (M === "next" || M === "last" ? v >= r : v <= 1)),
          }
    );
  return R({ items: _ }, x);
}
function Hk(e) {
  return or("MuiPaginationItem", e);
}
const Kk = Bn("MuiPaginationItem", [
    "root",
    "page",
    "sizeSmall",
    "sizeLarge",
    "text",
    "textPrimary",
    "textSecondary",
    "outlined",
    "outlinedPrimary",
    "outlinedSecondary",
    "rounded",
    "ellipsis",
    "firstLast",
    "previousNext",
    "focusVisible",
    "disabled",
    "selected",
    "icon",
    "colorPrimary",
    "colorSecondary",
  ]),
  xt = Kk,
  Pf = Sa(
    d.jsx("path", {
      d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z",
    }),
    "FirstPage"
  ),
  Ef = Sa(
    d.jsx("path", {
      d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z",
    }),
    "LastPage"
  ),
  _f = Sa(
    d.jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }),
    "NavigateBefore"
  ),
  Rf = Sa(
    d.jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }),
    "NavigateNext"
  ),
  Qk = [
    "className",
    "color",
    "component",
    "components",
    "disabled",
    "page",
    "selected",
    "shape",
    "size",
    "slots",
    "type",
    "variant",
  ],
  Jh = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[n.variant],
      t[`size${he(n.size)}`],
      n.variant === "text" && t[`text${he(n.color)}`],
      n.variant === "outlined" && t[`outlined${he(n.color)}`],
      n.shape === "rounded" && t.rounded,
      n.type === "page" && t.page,
      (n.type === "start-ellipsis" || n.type === "end-ellipsis") && t.ellipsis,
      (n.type === "previous" || n.type === "next") && t.previousNext,
      (n.type === "first" || n.type === "last") && t.firstLast,
    ];
  },
  Gk = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        selected: o,
        size: l,
        shape: i,
        type: a,
        variant: s,
      } = e,
      u = {
        root: [
          "root",
          `size${he(l)}`,
          s,
          i,
          n !== "standard" && `color${he(n)}`,
          n !== "standard" && `${s}${he(n)}`,
          r && "disabled",
          o && "selected",
          {
            page: "page",
            first: "firstLast",
            last: "firstLast",
            "start-ellipsis": "ellipsis",
            "end-ellipsis": "ellipsis",
            previous: "previousNext",
            next: "previousNext",
          }[a],
        ],
        icon: ["icon"],
      };
    return Qr(u, Hk, t);
  },
  Yk = Ve("div", {
    name: "MuiPaginationItem",
    slot: "Root",
    overridesResolver: Jh,
  })(({ theme: e, ownerState: t }) =>
    R(
      {},
      e.typography.body2,
      {
        borderRadius: 32 / 2,
        textAlign: "center",
        boxSizing: "border-box",
        minWidth: 32,
        padding: "0 6px",
        margin: "0 3px",
        color: (e.vars || e).palette.text.primary,
        height: "auto",
        [`&.${xt.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
      },
      t.size === "small" && {
        minWidth: 26,
        borderRadius: 26 / 2,
        margin: "0 1px",
        padding: "0 4px",
      },
      t.size === "large" && {
        minWidth: 40,
        borderRadius: 40 / 2,
        padding: "0 10px",
        fontSize: e.typography.pxToRem(15),
      }
    )
  ),
  Xk = Ve(Sk, {
    name: "MuiPaginationItem",
    slot: "Root",
    overridesResolver: Jh,
  })(
    ({ theme: e, ownerState: t }) =>
      R(
        {},
        e.typography.body2,
        {
          borderRadius: 32 / 2,
          textAlign: "center",
          boxSizing: "border-box",
          minWidth: 32,
          height: 32,
          padding: "0 6px",
          margin: "0 3px",
          color: (e.vars || e).palette.text.primary,
          [`&.${xt.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${xt.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
          transition: e.transitions.create(["color", "background-color"], {
            duration: e.transitions.duration.short,
          }),
          "&:hover": {
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${xt.selected}`]: {
            backgroundColor: (e.vars || e).palette.action.selected,
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                : Sn(
                    e.palette.action.selected,
                    e.palette.action.selectedOpacity +
                      e.palette.action.hoverOpacity
                  ),
              "@media (hover: none)": {
                backgroundColor: (e.vars || e).palette.action.selected,
              },
            },
            [`&.${xt.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : Sn(
                    e.palette.action.selected,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity
                  ),
            },
            [`&.${xt.disabled}`]: {
              opacity: 1,
              color: (e.vars || e).palette.action.disabled,
              backgroundColor: (e.vars || e).palette.action.selected,
            },
          },
        },
        t.size === "small" && {
          minWidth: 26,
          height: 26,
          borderRadius: 26 / 2,
          margin: "0 1px",
          padding: "0 4px",
        },
        t.size === "large" && {
          minWidth: 40,
          height: 40,
          borderRadius: 40 / 2,
          padding: "0 10px",
          fontSize: e.typography.pxToRem(15),
        },
        t.shape === "rounded" && {
          borderRadius: (e.vars || e).shape.borderRadius,
        }
      ),
    ({ theme: e, ownerState: t }) =>
      R(
        {},
        t.variant === "text" && {
          [`&.${xt.selected}`]: R(
            {},
            t.color !== "standard" && {
              color: (e.vars || e).palette[t.color].contrastText,
              backgroundColor: (e.vars || e).palette[t.color].main,
              "&:hover": {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              },
              [`&.${xt.focusVisible}`]: {
                backgroundColor: (e.vars || e).palette[t.color].dark,
              },
            },
            {
              [`&.${xt.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
              },
            }
          ),
        },
        t.variant === "outlined" && {
          border: e.vars
            ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
            : `1px solid ${
                e.palette.mode === "light"
                  ? "rgba(0, 0, 0, 0.23)"
                  : "rgba(255, 255, 255, 0.23)"
              }`,
          [`&.${xt.selected}`]: R(
            {},
            t.color !== "standard" && {
              color: (e.vars || e).palette[t.color].main,
              border: `1px solid ${
                e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
                  : Sn(e.palette[t.color].main, 0.5)
              }`,
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.activatedOpacity
                  })`
                : Sn(
                    e.palette[t.color].main,
                    e.palette.action.activatedOpacity
                  ),
              "&:hover": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / calc(${
                      e.vars.palette.action.activatedOpacity
                    } + ${e.vars.palette.action.focusOpacity}))`
                  : Sn(
                      e.palette[t.color].main,
                      e.palette.action.activatedOpacity +
                        e.palette.action.focusOpacity
                    ),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              [`&.${xt.focusVisible}`]: {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / calc(${
                      e.vars.palette.action.activatedOpacity
                    } + ${e.vars.palette.action.focusOpacity}))`
                  : Sn(
                      e.palette[t.color].main,
                      e.palette.action.activatedOpacity +
                        e.palette.action.focusOpacity
                    ),
              },
            },
            {
              [`&.${xt.disabled}`]: {
                borderColor: (e.vars || e).palette.action.disabledBackground,
                color: (e.vars || e).palette.action.disabled,
              },
            }
          ),
        }
      )
  ),
  qk = Ve("div", {
    name: "MuiPaginationItem",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })(({ theme: e, ownerState: t }) =>
    R(
      { fontSize: e.typography.pxToRem(20), margin: "0 -8px" },
      t.size === "small" && { fontSize: e.typography.pxToRem(18) },
      t.size === "large" && { fontSize: e.typography.pxToRem(22) }
    )
  ),
  Zk = S.forwardRef(function (t, n) {
    const r = lr({ props: t, name: "MuiPaginationItem" }),
      {
        className: o,
        color: l = "standard",
        component: i,
        components: a = {},
        disabled: s = !1,
        page: u,
        selected: p = !1,
        shape: m = "circular",
        size: c = "medium",
        slots: x = {},
        type: v = "page",
        variant: y = "text",
      } = r,
      b = Le(r, Qk),
      h = R({}, r, {
        color: l,
        disabled: s,
        selected: p,
        shape: m,
        size: c,
        type: v,
        variant: y,
      }),
      f = Ah(),
      g = Gk(h),
      k = (
        f
          ? {
              previous: x.next || a.next || Rf,
              next: x.previous || a.previous || _f,
              last: x.first || a.first || Pf,
              first: x.last || a.last || Ef,
            }
          : {
              previous: x.previous || a.previous || _f,
              next: x.next || a.next || Rf,
              first: x.first || a.first || Pf,
              last: x.last || a.last || Ef,
            }
      )[v];
    return v === "start-ellipsis" || v === "end-ellipsis"
      ? d.jsx(Yk, {
          ref: n,
          ownerState: h,
          className: ke(g.root, o),
          children: "…",
        })
      : d.jsxs(
          Xk,
          R(
            {
              ref: n,
              ownerState: h,
              component: i,
              disabled: s,
              className: ke(g.root, o),
            },
            b,
            {
              children: [
                v === "page" && u,
                k
                  ? d.jsx(qk, { as: k, ownerState: h, className: g.icon })
                  : null,
              ],
            }
          )
        );
  }),
  Jk = Zk,
  e2 = [
    "boundaryCount",
    "className",
    "color",
    "count",
    "defaultPage",
    "disabled",
    "getItemAriaLabel",
    "hideNextButton",
    "hidePrevButton",
    "onChange",
    "page",
    "renderItem",
    "shape",
    "showFirstButton",
    "showLastButton",
    "siblingCount",
    "size",
    "variant",
  ],
  t2 = (e) => {
    const { classes: t, variant: n } = e;
    return Qr({ root: ["root", n], ul: ["ul"] }, Vk, t);
  },
  n2 = Ve("nav", {
    name: "MuiPagination",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant]];
    },
  })({}),
  r2 = Ve("ul", {
    name: "MuiPagination",
    slot: "Ul",
    overridesResolver: (e, t) => t.ul,
  })({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyle: "none",
  });
function o2(e, t, n) {
  return e === "page" ? `${n ? "" : "Go to "}page ${t}` : `Go to ${e} page`;
}
const l2 = S.forwardRef(function (t, n) {
    const r = lr({ props: t, name: "MuiPagination" }),
      {
        boundaryCount: o = 1,
        className: l,
        color: i = "standard",
        count: a = 1,
        defaultPage: s = 1,
        disabled: u = !1,
        getItemAriaLabel: p = o2,
        hideNextButton: m = !1,
        hidePrevButton: c = !1,
        renderItem: x = (_) => d.jsx(Jk, R({}, _)),
        shape: v = "circular",
        showFirstButton: y = !1,
        showLastButton: b = !1,
        siblingCount: h = 1,
        size: f = "medium",
        variant: g = "text",
      } = r,
      w = Le(r, e2),
      { items: k } = Wk(R({}, r, { componentName: "Pagination" })),
      N = R({}, r, {
        boundaryCount: o,
        color: i,
        count: a,
        defaultPage: s,
        disabled: u,
        getItemAriaLabel: p,
        hideNextButton: m,
        hidePrevButton: c,
        renderItem: x,
        shape: v,
        showFirstButton: y,
        showLastButton: b,
        siblingCount: h,
        size: f,
        variant: g,
      }),
      C = t2(N);
    return d.jsx(
      n2,
      R(
        {
          "aria-label": "pagination navigation",
          className: ke(C.root, l),
          ownerState: N,
          ref: n,
        },
        w,
        {
          children: d.jsx(r2, {
            className: C.ul,
            ownerState: N,
            children: k.map((_, M) =>
              d.jsx(
                "li",
                {
                  children: x(
                    R({}, _, {
                      color: i,
                      "aria-label": p(_.type, _.page, _.selected),
                      shape: v,
                      size: f,
                      variant: g,
                    })
                  ),
                },
                M
              )
            ),
          }),
        }
      )
    );
  }),
  i2 = l2,
  a2 = (e) => !e || !Po(e);
function s2(e) {
  return or("MuiSlider", e);
}
const u2 = Bn("MuiSlider", [
    "root",
    "active",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "dragging",
    "focusVisible",
    "mark",
    "markActive",
    "marked",
    "markLabel",
    "markLabelActive",
    "rail",
    "sizeSmall",
    "thumb",
    "thumbColorPrimary",
    "thumbColorSecondary",
    "thumbColorError",
    "thumbColorSuccess",
    "thumbColorInfo",
    "thumbColorWarning",
    "track",
    "trackInverted",
    "trackFalse",
    "thumbSizeSmall",
    "valueLabel",
    "valueLabelOpen",
    "valueLabelCircle",
    "valueLabelLabel",
    "vertical",
  ]),
  $t = u2,
  c2 = (e) => {
    const { open: t } = e;
    return {
      offset: ke(t && $t.valueLabelOpen),
      circle: $t.valueLabelCircle,
      label: $t.valueLabelLabel,
    };
  };
function d2(e) {
  const { children: t, className: n, value: r } = e,
    o = c2(e);
  return t
    ? S.cloneElement(
        t,
        { className: ke(t.props.className) },
        d.jsxs(S.Fragment, {
          children: [
            t.props.children,
            d.jsx("span", {
              className: ke(o.offset, n),
              "aria-hidden": !0,
              children: d.jsx("span", {
                className: o.circle,
                children: d.jsx("span", { className: o.label, children: r }),
              }),
            }),
          ],
        })
      )
    : null;
}
const f2 = [
    "aria-label",
    "aria-valuetext",
    "aria-labelledby",
    "component",
    "components",
    "componentsProps",
    "color",
    "classes",
    "className",
    "disableSwap",
    "disabled",
    "getAriaLabel",
    "getAriaValueText",
    "marks",
    "max",
    "min",
    "name",
    "onChange",
    "onChangeCommitted",
    "orientation",
    "shiftStep",
    "size",
    "step",
    "scale",
    "slotProps",
    "slots",
    "tabIndex",
    "track",
    "value",
    "valueLabelDisplay",
    "valueLabelFormat",
  ],
  p2 = HS();
function jf(e) {
  return e;
}
const m2 = Ve("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`color${he(n.color)}`],
        n.size !== "medium" && t[`size${he(n.size)}`],
        n.marked && t.marked,
        n.orientation === "vertical" && t.vertical,
        n.track === "inverted" && t.trackInverted,
        n.track === !1 && t.trackFalse,
      ];
    },
  })(({ theme: e }) => {
    var t;
    return {
      borderRadius: 12,
      boxSizing: "content-box",
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      touchAction: "none",
      WebkitTapHighlightColor: "transparent",
      "@media print": { colorAdjust: "exact" },
      [`&.${$t.disabled}`]: {
        pointerEvents: "none",
        cursor: "default",
        color: (e.vars || e).palette.grey[400],
      },
      [`&.${$t.dragging}`]: {
        [`& .${$t.thumb}, & .${$t.track}`]: { transition: "none" },
      },
      variants: [
        ...Object.keys(((t = e.vars) != null ? t : e).palette)
          .filter((n) => {
            var r;
            return ((r = e.vars) != null ? r : e).palette[n].main;
          })
          .map((n) => ({
            props: { color: n },
            style: { color: (e.vars || e).palette[n].main },
          })),
        {
          props: { orientation: "horizontal" },
          style: {
            height: 4,
            width: "100%",
            padding: "13px 0",
            "@media (pointer: coarse)": { padding: "20px 0" },
          },
        },
        {
          props: { orientation: "horizontal", size: "small" },
          style: { height: 2 },
        },
        {
          props: { orientation: "horizontal", marked: !0 },
          style: { marginBottom: 20 },
        },
        {
          props: { orientation: "vertical" },
          style: {
            height: "100%",
            width: 4,
            padding: "0 13px",
            "@media (pointer: coarse)": { padding: "0 20px" },
          },
        },
        {
          props: { orientation: "vertical", size: "small" },
          style: { width: 2 },
        },
        {
          props: { orientation: "vertical", marked: !0 },
          style: { marginRight: 44 },
        },
      ],
    };
  }),
  h2 = Ve("span", {
    name: "MuiSlider",
    slot: "Rail",
    overridesResolver: (e, t) => t.rail,
  })({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    backgroundColor: "currentColor",
    opacity: 0.38,
    variants: [
      {
        props: { orientation: "horizontal" },
        style: {
          width: "100%",
          height: "inherit",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      {
        props: { orientation: "vertical" },
        style: {
          height: "100%",
          width: "inherit",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
      { props: { track: "inverted" }, style: { opacity: 1 } },
    ],
  }),
  g2 = Ve("span", {
    name: "MuiSlider",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e }) => {
    var t;
    return {
      display: "block",
      position: "absolute",
      borderRadius: "inherit",
      border: "1px solid currentColor",
      backgroundColor: "currentColor",
      transition: e.transitions.create(["left", "width", "bottom", "height"], {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        { props: { size: "small" }, style: { border: "none" } },
        {
          props: { orientation: "horizontal" },
          style: {
            height: "inherit",
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
        {
          props: { orientation: "vertical" },
          style: {
            width: "inherit",
            left: "50%",
            transform: "translateX(-50%)",
          },
        },
        { props: { track: !1 }, style: { display: "none" } },
        ...Object.keys(((t = e.vars) != null ? t : e).palette)
          .filter((n) => {
            var r;
            return ((r = e.vars) != null ? r : e).palette[n].main;
          })
          .map((n) => ({
            props: { color: n, track: "inverted" },
            style: R(
              {},
              e.vars
                ? {
                    backgroundColor: e.vars.palette.Slider[`${n}Track`],
                    borderColor: e.vars.palette.Slider[`${n}Track`],
                  }
                : R(
                    {
                      backgroundColor: cu(e.palette[n].main, 0.62),
                      borderColor: cu(e.palette[n].main, 0.62),
                    },
                    e.applyStyles("dark", {
                      backgroundColor: uu(e.palette[n].main, 0.5),
                    }),
                    e.applyStyles("dark", {
                      borderColor: uu(e.palette[n].main, 0.5),
                    })
                  )
            ),
          })),
      ],
    };
  }),
  y2 = Ve("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.thumb,
        t[`thumbColor${he(n.color)}`],
        n.size !== "medium" && t[`thumbSize${he(n.size)}`],
      ];
    },
  })(({ theme: e }) => {
    var t;
    return {
      position: "absolute",
      width: 20,
      height: 20,
      boxSizing: "border-box",
      borderRadius: "50%",
      outline: 0,
      backgroundColor: "currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: e.transitions.create(["box-shadow", "left", "bottom"], {
        duration: e.transitions.duration.shortest,
      }),
      "&::before": {
        position: "absolute",
        content: '""',
        borderRadius: "inherit",
        width: "100%",
        height: "100%",
        boxShadow: (e.vars || e).shadows[2],
      },
      "&::after": {
        position: "absolute",
        content: '""',
        borderRadius: "50%",
        width: 42,
        height: 42,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      [`&.${$t.disabled}`]: { "&:hover": { boxShadow: "none" } },
      variants: [
        ...Object.keys(((t = e.vars) != null ? t : e).palette)
          .filter((n) => {
            var r;
            return ((r = e.vars) != null ? r : e).palette[n].main;
          })
          .map((n) => ({
            props: { color: n },
            style: {
              [`&:hover, &.${$t.focusVisible}`]: R(
                {},
                e.vars
                  ? {
                      boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[n].mainChannel} / 0.16)`,
                    }
                  : {
                      boxShadow: `0px 0px 0px 8px ${Sn(
                        e.palette[n].main,
                        0.16
                      )}`,
                    },
                { "@media (hover: none)": { boxShadow: "none" } }
              ),
              [`&.${$t.active}`]: R(
                {},
                e.vars
                  ? {
                      boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[n].mainChannel} / 0.16)}`,
                    }
                  : {
                      boxShadow: `0px 0px 0px 14px ${Sn(
                        e.palette[n].main,
                        0.16
                      )}`,
                    }
              ),
            },
          })),
        {
          props: { size: "small" },
          style: { width: 12, height: 12, "&::before": { boxShadow: "none" } },
        },
        {
          props: { orientation: "horizontal" },
          style: { top: "50%", transform: "translate(-50%, -50%)" },
        },
        {
          props: { orientation: "vertical" },
          style: { left: "50%", transform: "translate(-50%, 50%)" },
        },
      ],
    };
  }),
  v2 = Ve(d2, {
    name: "MuiSlider",
    slot: "ValueLabel",
    overridesResolver: (e, t) => t.valueLabel,
  })(({ theme: e }) =>
    R({ zIndex: 1, whiteSpace: "nowrap" }, e.typography.body2, {
      fontWeight: 500,
      transition: e.transitions.create(["transform"], {
        duration: e.transitions.duration.shortest,
      }),
      position: "absolute",
      backgroundColor: (e.vars || e).palette.grey[600],
      borderRadius: 2,
      color: (e.vars || e).palette.common.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.25rem 0.75rem",
      variants: [
        {
          props: { orientation: "horizontal" },
          style: {
            transform: "translateY(-100%) scale(0)",
            top: "-10px",
            transformOrigin: "bottom center",
            "&::before": {
              position: "absolute",
              content: '""',
              width: 8,
              height: 8,
              transform: "translate(-50%, 50%) rotate(45deg)",
              backgroundColor: "inherit",
              bottom: 0,
              left: "50%",
            },
            [`&.${$t.valueLabelOpen}`]: {
              transform: "translateY(-100%) scale(1)",
            },
          },
        },
        {
          props: { orientation: "vertical" },
          style: {
            transform: "translateY(-50%) scale(0)",
            right: "30px",
            top: "50%",
            transformOrigin: "right center",
            "&::before": {
              position: "absolute",
              content: '""',
              width: 8,
              height: 8,
              transform: "translate(-50%, -50%) rotate(45deg)",
              backgroundColor: "inherit",
              right: -8,
              top: "50%",
            },
            [`&.${$t.valueLabelOpen}`]: {
              transform: "translateY(-50%) scale(1)",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            fontSize: e.typography.pxToRem(12),
            padding: "0.25rem 0.5rem",
          },
        },
        {
          props: { orientation: "vertical", size: "small" },
          style: { right: "20px" },
        },
      ],
    })
  ),
  x2 = Ve("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (e) => Ec(e) && e !== "markActive",
    overridesResolver: (e, t) => {
      const { markActive: n } = e;
      return [t.mark, n && t.markActive];
    },
  })(({ theme: e }) => ({
    position: "absolute",
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: "currentColor",
    variants: [
      {
        props: { orientation: "horizontal" },
        style: { top: "50%", transform: "translate(-1px, -50%)" },
      },
      {
        props: { orientation: "vertical" },
        style: { left: "50%", transform: "translate(-50%, 1px)" },
      },
      {
        props: { markActive: !0 },
        style: {
          backgroundColor: (e.vars || e).palette.background.paper,
          opacity: 0.8,
        },
      },
    ],
  })),
  w2 = Ve("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (e) => Ec(e) && e !== "markLabelActive",
    overridesResolver: (e, t) => t.markLabel,
  })(({ theme: e }) =>
    R({}, e.typography.body2, {
      color: (e.vars || e).palette.text.secondary,
      position: "absolute",
      whiteSpace: "nowrap",
      variants: [
        {
          props: { orientation: "horizontal" },
          style: {
            top: 30,
            transform: "translateX(-50%)",
            "@media (pointer: coarse)": { top: 40 },
          },
        },
        {
          props: { orientation: "vertical" },
          style: {
            left: 36,
            transform: "translateY(50%)",
            "@media (pointer: coarse)": { left: 44 },
          },
        },
        {
          props: { markLabelActive: !0 },
          style: { color: (e.vars || e).palette.text.primary },
        },
      ],
    })
  ),
  S2 = (e) => {
    const {
        disabled: t,
        dragging: n,
        marked: r,
        orientation: o,
        track: l,
        classes: i,
        color: a,
        size: s,
      } = e,
      u = {
        root: [
          "root",
          t && "disabled",
          n && "dragging",
          r && "marked",
          o === "vertical" && "vertical",
          l === "inverted" && "trackInverted",
          l === !1 && "trackFalse",
          a && `color${he(a)}`,
          s && `size${he(s)}`,
        ],
        rail: ["rail"],
        track: ["track"],
        mark: ["mark"],
        markActive: ["markActive"],
        markLabel: ["markLabel"],
        markLabelActive: ["markLabelActive"],
        valueLabel: ["valueLabel"],
        thumb: [
          "thumb",
          t && "disabled",
          s && `thumbSize${he(s)}`,
          a && `thumbColor${he(a)}`,
        ],
        active: ["active"],
        disabled: ["disabled"],
        focusVisible: ["focusVisible"],
      };
    return Qr(u, s2, i);
  },
  k2 = ({ children: e }) => e,
  C2 = S.forwardRef(function (t, n) {
    var r, o, l, i, a, s, u, p, m, c, x, v, y, b, h, f, g, w, k, N, C, _, M, P;
    const I = p2({ props: t, name: "MuiSlider" }),
      V = Ah(),
      {
        "aria-label": W,
        "aria-valuetext": B,
        "aria-labelledby": U,
        component: Q = "span",
        components: K = {},
        componentsProps: E = {},
        color: A = "primary",
        classes: D,
        className: H,
        disableSwap: ee = !1,
        disabled: Te = !1,
        getAriaLabel: J,
        getAriaValueText: ve,
        marks: Ue = !1,
        max: it = 100,
        min: pn = 0,
        orientation: Je = "horizontal",
        shiftStep: Xr = 10,
        size: qr = "medium",
        step: ir = 1,
        scale: Mt = jf,
        slotProps: pe,
        slots: ce,
        track: at = "normal",
        valueLabelDisplay: Vt = "off",
        valueLabelFormat: st = jf,
      } = I,
      Zr = Le(I, f2),
      $e = R({}, I, {
        isRtl: V,
        max: it,
        min: pn,
        classes: D,
        disabled: Te,
        disableSwap: ee,
        orientation: Je,
        marks: Ue,
        color: A,
        size: qr,
        step: ir,
        shiftStep: Xr,
        scale: Mt,
        track: at,
        valueLabelDisplay: Vt,
        valueLabelFormat: st,
      }),
      {
        axisProps: Ut,
        getRootProps: Jr,
        getHiddenInputProps: eo,
        getThumbProps: mn,
        open: hn,
        active: to,
        axis: gn,
        focusedThumbIndex: T,
        range: $,
        dragging: F,
        marks: X,
        values: q,
        trackOffset: Y,
        trackLeap: Ot,
        getThumbStyle: Wt,
      } = zk(R({}, $e, { rootRef: n }));
    ($e.marked = X.length > 0 && X.some((Pe) => Pe.label)),
      ($e.dragging = F),
      ($e.focusedThumbIndex = T);
    const re = S2($e),
      vt =
        (r = (o = ce == null ? void 0 : ce.root) != null ? o : K.Root) != null
          ? r
          : m2,
      ar =
        (l = (i = ce == null ? void 0 : ce.rail) != null ? i : K.Rail) != null
          ? l
          : h2,
      jc =
        (a = (s = ce == null ? void 0 : ce.track) != null ? s : K.Track) != null
          ? a
          : g2,
      Tc =
        (u = (p = ce == null ? void 0 : ce.thumb) != null ? p : K.Thumb) != null
          ? u
          : y2,
      Mc =
        (m =
          (c = ce == null ? void 0 : ce.valueLabel) != null
            ? c
            : K.ValueLabel) != null
          ? m
          : v2,
      Ca =
        (x = (v = ce == null ? void 0 : ce.mark) != null ? v : K.Mark) != null
          ? x
          : x2,
      ba =
        (y =
          (b = ce == null ? void 0 : ce.markLabel) != null ? b : K.MarkLabel) !=
        null
          ? y
          : w2,
      Oc =
        (h = (f = ce == null ? void 0 : ce.input) != null ? f : K.Input) != null
          ? h
          : "input",
      Na = (g = pe == null ? void 0 : pe.root) != null ? g : E.root,
      e0 = (w = pe == null ? void 0 : pe.rail) != null ? w : E.rail,
      $a = (k = pe == null ? void 0 : pe.track) != null ? k : E.track,
      Pa = (N = pe == null ? void 0 : pe.thumb) != null ? N : E.thumb,
      Ea = (C = pe == null ? void 0 : pe.valueLabel) != null ? C : E.valueLabel,
      t0 = (_ = pe == null ? void 0 : pe.mark) != null ? _ : E.mark,
      n0 = (M = pe == null ? void 0 : pe.markLabel) != null ? M : E.markLabel,
      r0 = (P = pe == null ? void 0 : pe.input) != null ? P : E.input,
      o0 = vn({
        elementType: vt,
        getSlotProps: Jr,
        externalSlotProps: Na,
        externalForwardedProps: Zr,
        additionalProps: R({}, a2(vt) && { as: Q }),
        ownerState: R({}, $e, Na == null ? void 0 : Na.ownerState),
        className: [re.root, H],
      }),
      l0 = vn({
        elementType: ar,
        externalSlotProps: e0,
        ownerState: $e,
        className: re.rail,
      }),
      i0 = vn({
        elementType: jc,
        externalSlotProps: $a,
        additionalProps: { style: R({}, Ut[gn].offset(Y), Ut[gn].leap(Ot)) },
        ownerState: R({}, $e, $a == null ? void 0 : $a.ownerState),
        className: re.track,
      }),
      _a = vn({
        elementType: Tc,
        getSlotProps: mn,
        externalSlotProps: Pa,
        ownerState: R({}, $e, Pa == null ? void 0 : Pa.ownerState),
        className: re.thumb,
      }),
      a0 = vn({
        elementType: Mc,
        externalSlotProps: Ea,
        ownerState: R({}, $e, Ea == null ? void 0 : Ea.ownerState),
        className: re.valueLabel,
      }),
      Ra = vn({
        elementType: Ca,
        externalSlotProps: t0,
        ownerState: $e,
        className: re.mark,
      }),
      ja = vn({
        elementType: ba,
        externalSlotProps: n0,
        ownerState: $e,
        className: re.markLabel,
      }),
      s0 = vn({
        elementType: Oc,
        getSlotProps: eo,
        externalSlotProps: r0,
        ownerState: $e,
      });
    return d.jsxs(
      vt,
      R({}, o0, {
        children: [
          d.jsx(ar, R({}, l0)),
          d.jsx(jc, R({}, i0)),
          X.filter((Pe) => Pe.value >= pn && Pe.value <= it).map((Pe, Ie) => {
            const Ta = Ci(Pe.value, pn, it),
              al = Ut[gn].offset(Ta);
            let en;
            return (
              at === !1
                ? (en = q.indexOf(Pe.value) !== -1)
                : (en =
                    (at === "normal" &&
                      ($
                        ? Pe.value >= q[0] && Pe.value <= q[q.length - 1]
                        : Pe.value <= q[0])) ||
                    (at === "inverted" &&
                      ($
                        ? Pe.value <= q[0] || Pe.value >= q[q.length - 1]
                        : Pe.value >= q[0]))),
              d.jsxs(
                S.Fragment,
                {
                  children: [
                    d.jsx(
                      Ca,
                      R(
                        { "data-index": Ie },
                        Ra,
                        !Po(Ca) && { markActive: en },
                        {
                          style: R({}, al, Ra.style),
                          className: ke(Ra.className, en && re.markActive),
                        }
                      )
                    ),
                    Pe.label != null
                      ? d.jsx(
                          ba,
                          R(
                            { "aria-hidden": !0, "data-index": Ie },
                            ja,
                            !Po(ba) && { markLabelActive: en },
                            {
                              style: R({}, al, ja.style),
                              className: ke(
                                re.markLabel,
                                ja.className,
                                en && re.markLabelActive
                              ),
                              children: Pe.label,
                            }
                          )
                        )
                      : null,
                  ],
                },
                Ie
              )
            );
          }),
          q.map((Pe, Ie) => {
            const Ta = Ci(Pe, pn, it),
              al = Ut[gn].offset(Ta),
              en = Vt === "off" ? k2 : Mc;
            return d.jsx(
              en,
              R(
                {},
                !Po(en) && {
                  valueLabelFormat: st,
                  valueLabelDisplay: Vt,
                  value: typeof st == "function" ? st(Mt(Pe), Ie) : st,
                  index: Ie,
                  open: hn === Ie || to === Ie || Vt === "on",
                  disabled: Te,
                },
                a0,
                {
                  children: d.jsx(
                    Tc,
                    R({ "data-index": Ie }, _a, {
                      className: ke(
                        re.thumb,
                        _a.className,
                        to === Ie && re.active,
                        T === Ie && re.focusVisible
                      ),
                      style: R({}, al, Wt(Ie), _a.style),
                      children: d.jsx(
                        Oc,
                        R(
                          {
                            "data-index": Ie,
                            "aria-label": J ? J(Ie) : W,
                            "aria-valuenow": Mt(Pe),
                            "aria-labelledby": U,
                            "aria-valuetext": ve ? ve(Mt(Pe), Ie) : B,
                            value: q[Ie],
                          },
                          s0
                        )
                      ),
                    })
                  ),
                }
              ),
              Ie
            );
          }),
        ],
      })
    );
  }),
  b2 = C2;
function N2(e) {
  return `${e}`;
}
function $2({ value: e, onChange: t }) {
  return d.jsxs(Bk, {
    sx: { width: 200 },
    children: [
      d.jsxs(_k, {
        className: "m-0",
        id: "non-linear-slider",
        gutterBottom: !0,
        children: ["$", e],
      }),
      d.jsx(b2, {
        "aria-label": "Precio máximo",
        value: e,
        onChange: t,
        getAriaValueText: N2,
        valueLabelDisplay: "auto",
        step: 5e3,
        min: 0,
        max: 3e4,
      }),
    ],
  });
}
const P2 = () => {
    const [e, t] = S.useState(""),
      [n, r] = S.useState(0),
      [o, l] = S.useState(1),
      [i, a] = S.useState(6),
      s = (p, m) => {
        r(m);
      },
      u = (p, m) => {
        l(m);
      };
    return d.jsxs("section", {
      className: "menu",
      id: "menu",
      children: [
        d.jsxs("div", {
          className: "container",
          id: "container",
          children: [
            d.jsx("div", {
              className: "title",
              children: d.jsxs("h2", {
                id: "heading",
                children: ["Nuestro ", d.jsx("span", { children: "menú" })],
              }),
            }),
            d.jsxs("div", {
              className: "filterDish",
              id: "filterDish",
              children: [
                d.jsxs("div", {
                  className: "filterPrice",
                  id: "filterPrice",
                  children: [
                    d.jsx("h4", {
                      className: "fs-4 m-0",
                      children: "Precio a partir de:",
                    }),
                    d.jsx($2, { id: "slider-content", value: n, onChange: s }),
                    " ",
                  ],
                }),
                d.jsxs("div", {
                  className: "filterCategory",
                  id: "filterCategory",
                  children: [
                    d.jsx("h4", {
                      className: "fs-4 m-0",
                      children: "Categoría:",
                    }),
                    d.jsxs("select", {
                      className: "selectCategory",
                      id: "selectCategory",
                      value: e,
                      onChange: (p) => t(p.target.value),
                      children: [
                        d.jsx("option", {
                          value: "",
                          children: "Todas las categorías",
                        }),
                        d.jsx("option", {
                          value: "Plato principal",
                          children: "Plato principal",
                        }),
                        d.jsx("option", {
                          value: "Entrada",
                          children: "Entrada",
                        }),
                        d.jsx("option", {
                          value: "Bebida",
                          children: "Bebida",
                        }),
                        d.jsx("option", {
                          value: "Postre",
                          children: "Postre",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        d.jsx(Km, {
          children: d.jsx("div", {
            className: "card-container",
            children: d.jsx(Fi, {
              url: "https://hoteless-hilton.000webhostapp.com/getFood.php",
              render: (p) => {
                const m = p.filter(
                  (c) =>
                    (c.categoria === e || e === "") &&
                    (!n || Number(c.precio) <= Number(n))
                );
                return d.jsx(d.Fragment, {
                  children:
                    m.length > 0
                      ? d.jsxs(d.Fragment, {
                          children: [
                            m
                              .sort((c, x) =>
                                n ? Number(c.precio) - Number(x.precio) : 0
                              )
                              .slice((o - 1) * i, o * i)
                              .map((c) => d.jsx(Dv, { data: c }, c.id)),
                            d.jsx(i2, {
                              className: "mt-4",
                              count: Math.ceil(m.length / i),
                              page: o,
                              onChange: u,
                              color: "primary",
                            }),
                          ],
                        })
                      : d.jsx("p", { children: "No hay datos disponibles." }),
                });
              },
            }),
          }),
        }),
      ],
    });
  },
  E2 = () =>
    d.jsx("footer", {
      id: "footer",
      children: d.jsxs("div", {
        className: "footer",
        children: [
          d.jsx("p", {
            className: "m-0",
            children:
              "© Copyright 2024 - Todos los derechos reservados | KevinJp ",
          }),
          d.jsx("a", {
            href: "https://github.com/KevinJp21?tab=repositories",
            children: d.jsx("i", { className: "fa-brands fa-github" }),
          }),
        ],
      }),
    }),
  _2 = () =>
    d.jsx("section", {
      id: "contact",
      children: d.jsx("div", {
        className: "container",
        id: "contact-container",
        children: d.jsxs("div", {
          className: "row",
          id: "container-contact",
          children: [
            d.jsxs("div", {
              className: "col-md-7",
              id: "col1",
              children: [
                d.jsx("h2", {
                  className: "heading4 display-4",
                  children: "Contactanos",
                }),
                d.jsxs("p", {
                  className: "fs-5 pe-5",
                  children: [
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit assumenda, velit suscipit autem mollitia accusantium? Amet, dolores quasi atque optio delectus aliquid impedit vitae molestiae unde a, quam tempora quod.",
                    d.jsx("br", {}),
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas corporis repellendus unde necessitatibus ipsum velit assumenda cum, adipisci vitae odio voluptatibus quod saepe eligendi tempore? Recusandae rerum quis sunt!",
                  ],
                }),
                d.jsx("input", {
                  type: "text",
                  className: "fs-6 form-control",
                  placeholder: "Nombre",
                  "aria-label": "default input example",
                }),
                d.jsx("br", {}),
                d.jsx("input", {
                  type: "email",
                  className: "fs-6 form-control",
                  placeholder: "Email",
                  "aria-label": "default input example",
                }),
                d.jsx("br", {}),
                d.jsx("textarea", {
                  className: "fs-6 form-control",
                  placeholder: "Comentario",
                  "aria-label": "default input example",
                }),
                d.jsx("br", {}),
                d.jsx("button", {
                  className: "btn",
                  id: "contact-btn",
                  children: "Enviar Mensaje",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "col-md-5",
              id: "col2",
              children: [
                d.jsx("h2", {
                  className: "heading5 display-4",
                  children: "Informacion",
                }),
                d.jsxs("p", {
                  className: "fs-6",
                  children: [
                    d.jsx("i", {
                      className: "fa-regular fa-envelope",
                      id: "icons",
                    }),
                    "example@gmail.com",
                  ],
                }),
                d.jsxs("p", {
                  className: "fs-6",
                  children: [
                    d.jsx("i", { className: "fa-solid fa-phone", id: "icons" }),
                    "+573045214315",
                  ],
                }),
                d.jsxs("p", {
                  className: "fs-6",
                  children: [
                    d.jsx("i", {
                      className: "fa-solid fa-building-columns",
                      id: "icons",
                    }),
                    "Colombia",
                  ],
                }),
                d.jsx("p", {
                  className: "fs-5",
                  children:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt quisquam, sunt fuga dolores impedit omnis minus saepe voluptatum accusantium ipsum laudantium laborum debitis quae rem deleniti dicta nemo sit!",
                }),
              ],
            }),
          ],
        }),
      }),
    });
function R2() {
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(zy, {}),
      d.jsx(Iy, {}),
      d.jsx(Ay, {}),
      d.jsx(Dy, {}),
      d.jsx(P2, {}),
      d.jsx(_2, {}),
      d.jsx(E2, {}),
    ],
  });
}
ds.createRoot(document.getElementById("root")).render(
  d.jsx(z.StrictMode, { children: d.jsx(R2, {}) })
);

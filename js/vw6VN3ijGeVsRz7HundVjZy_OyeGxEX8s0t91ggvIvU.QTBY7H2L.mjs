import { a as Pt } from './chunk-YKV5WITT.mjs';
import {
  a as Ca,
  b as rt,
  c as On,
  d as An,
  e as Un,
  f as Wn,
  g as jn,
  h as zn,
} from './chunk-JDZQO7JY.mjs';
import './chunk-42U43NKG.mjs';
import {
  $ as le,
  A as Fr,
  Aa as he,
  B as qe,
  Ba as ne,
  C as Nt,
  Ca as P,
  D as Vt,
  E as tr,
  Ea as Ne,
  F as Tn,
  Fa as ue,
  G as Tt,
  Ga as fe,
  H as En,
  Ha as be,
  Q as de,
  S as vr,
  U as Ue,
  W as s,
  Z as G,
  _ as Et,
  aa as Pr,
  b as Qe,
  c as p,
  ca as xe,
  d as mr,
  da as M,
  ea as Ce,
  f as cr,
  g as te,
  ga as pe,
  ha as Fn,
  i as or,
  ia as Pn,
  j as ge,
  ja as In,
  k as ve,
  l as ce,
  la as we,
  m as Yn,
  n as va,
  na as ee,
  o as K,
  p as N,
  q as Pe,
  r as Ye,
  ra as Ft,
  s as Nn,
  t as e,
  u as g,
  v as B,
  va as Ie,
  w as Er,
  wa as Ln,
  x as l,
  y as Vn,
  ya as Mn,
  z as X,
  za as ye,
} from './chunk-KS6JXC2O.mjs';
import { b as Y, c as S } from './chunk-ELYU6EKT.mjs';
function Bn(r, t) {
  r.indexOf(t) === -1 && r.push(t);
}
var ka = (r, t, a) => Math.min(Math.max(a, r), t),
  We = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: 'ease' },
  Ir = (r) => typeof r == 'number',
  dr = (r) => Array.isArray(r) && !Ir(r[0]),
  Oi = (r, t, a) => {
    let n = t - r;
    return ((((a - r) % n) + n) % n) + r;
  };
function qn(r, t) {
  return dr(r) ? r[Oi(0, r.length, t)] : r;
}
var _a = (r, t, a) => -a * r + a * t + r,
  Sa = () => {},
  je = (r) => r,
  It = (r, t, a) => (t - r === 0 ? 1 : (a - r) / (t - r));
function Da(r, t) {
  let a = r[r.length - 1];
  for (let n = 1; n <= t; n++) {
    let o = It(0, t, n);
    r.push(_a(a, 1, o));
  }
}
function Kn(r) {
  let t = [0];
  return Da(t, r - 1), t;
}
function Ha(r, t = Kn(r.length), a = je) {
  let n = r.length,
    o = n - t.length;
  return (
    o > 0 && Da(t, o),
    (m) => {
      let i = 0;
      for (; i < n - 2 && !(m < t[i + 1]); i++);
      let d = ka(0, 1, It(t[i], t[i + 1], m));
      return (d = qn(a, i)(d)), _a(r[i], r[i + 1], d);
    }
  );
}
var Lt = (r) => Array.isArray(r) && Ir(r[0]),
  tt = (r) => typeof r == 'object' && !!r.createAnimation,
  ir = (r) => typeof r == 'function',
  Ra = (r) => typeof r == 'string',
  sr = { ms: (r) => 1e3 * r, s: (r) => r / 1e3 };
function Ya(r, t) {
  return t ? r * (1e3 / t) : 0;
}
var Zn = (r, t, a) =>
    (((1 - 3 * a + 3 * t) * r + (3 * a - 6 * t)) * r + 3 * t) * r,
  Ai = 1e-7,
  Ui = 12;
function Wi(r, t, a, n, o) {
  let m,
    i,
    d = 0;
  do (i = t + (a - t) / 2), (m = Zn(i, n, o) - r), m > 0 ? (a = i) : (t = i);
  while (Math.abs(m) > Ai && ++d < Ui);
  return i;
}
function Lr(r, t, a, n) {
  if (r === t && a === n) return je;
  let o = (m) => Wi(m, 0, 1, r, a);
  return (m) => (m === 0 || m === 1 ? m : Zn(o(m), t, n));
}
var Xn =
  (r, t = 'end') =>
  (a) => {
    a = t === 'end' ? Math.min(a, 0.999) : Math.max(a, 0.001);
    let n = a * r,
      o = t === 'end' ? Math.floor(n) : Math.ceil(n);
    return ka(0, 1, o / r);
  };
var Gn = {
    ease: Lr(0.25, 0.1, 0.25, 1),
    'ease-in': Lr(0.42, 0, 1, 1),
    'ease-in-out': Lr(0.42, 0, 0.58, 1),
    'ease-out': Lr(0, 0, 0.58, 1),
  },
  ji = /\((.*?)\)/;
function Na(r) {
  if (ir(r)) return r;
  if (Lt(r)) return Lr(...r);
  if (Gn[r]) return Gn[r];
  if (r.startsWith('steps')) {
    let t = ji.exec(r);
    if (t) {
      let a = t[1].split(',');
      return Xn(parseFloat(a[0]), a[1].trim());
    }
  }
  return je;
}
var Mt = class {
  constructor(
    t,
    a = [0, 1],
    {
      easing: n,
      duration: o = We.duration,
      delay: m = We.delay,
      endDelay: i = We.endDelay,
      repeat: d = We.repeat,
      offset: c,
      direction: f = 'normal',
      autoplay: u = !0,
    } = {}
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.easing = je),
      (this.duration = 0),
      (this.totalDuration = 0),
      (this.repeat = 0),
      (this.playState = 'idle'),
      (this.finished = new Promise((b, _) => {
        (this.resolve = b), (this.reject = _);
      })),
      (n = n || We.easing),
      tt(n))
    ) {
      let b = n.createAnimation(a);
      (n = b.easing), (a = b.keyframes || a), (o = b.duration || o);
    }
    (this.repeat = d),
      (this.easing = dr(n) ? je : Na(n)),
      this.updateDuration(o);
    let y = Ha(a, c, dr(n) ? n.map(Na) : je);
    (this.tick = (b) => {
      var _;
      let h = 0;
      (h =
        this.pauseTime !== void 0
          ? this.pauseTime
          : (b - this.startTime) * this.rate),
        (this.t = h),
        (h /= 1e3),
        (h = Math.max(h - m, 0)),
        this.playState === 'finished' &&
          this.pauseTime === void 0 &&
          (h = this.totalDuration);
      let C = h / this.duration,
        v = Math.floor(C),
        H = C % 1;
      !H && C >= 1 && (H = 1), H === 1 && v--;
      let x = v % 2;
      (f === 'reverse' ||
        (f === 'alternate' && x) ||
        (f === 'alternate-reverse' && !x)) &&
        (H = 1 - H);
      let w = h >= this.totalDuration ? 1 : Math.min(H, 1),
        D = y(this.easing(w));
      t(D),
        this.pauseTime === void 0 &&
        (this.playState === 'finished' || h >= this.totalDuration + i)
          ? ((this.playState = 'finished'),
            (_ = this.resolve) === null || _ === void 0 || _.call(this, D))
          : this.playState !== 'idle' &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
    }),
      u && this.play();
  }
  play() {
    let t = performance.now();
    (this.playState = 'running'),
      this.pauseTime !== void 0
        ? (this.startTime = t - this.pauseTime)
        : this.startTime || (this.startTime = t),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      (this.frameRequestId = requestAnimationFrame(this.tick));
  }
  pause() {
    (this.playState = 'paused'), (this.pauseTime = this.t);
  }
  finish() {
    (this.playState = 'finished'), this.tick(0);
  }
  stop() {
    var t;
    (this.playState = 'idle'),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (t = this.reject) === null || t === void 0 || t.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(t) {
    (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    this.pauseTime !== void 0 || this.rate === 0
      ? (this.pauseTime = t)
      : (this.startTime = performance.now() - t / this.rate);
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t) {
    this.rate = t;
  }
};
var Mr = {};
Object.defineProperty(Mr, '__esModule', { value: !0 });
Mr.warning = function () {};
Mr.invariant = function () {};
var Md = Mr.__esModule,
  Od = Mr.warning,
  Va = Mr.invariant;
var Ot = class {
  setAnimation(t) {
    (this.animation = t),
      t?.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};
function Qn(r, t) {
  var a = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) &&
      t.indexOf(n) < 0 &&
      (a[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == 'function') {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(r); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, n[o]) &&
        (a[n[o]] = r[n[o]]);
  }
  return a;
}
var zi = 5;
function At(r, t, a) {
  let n = Math.max(t - zi, 0);
  return Ya(a - r(n), t - n);
}
var Or = { stiffness: 100, damping: 10, mass: 1 },
  Bi = (r = Or.stiffness, t = Or.damping, a = Or.mass) =>
    t / (2 * Math.sqrt(r * a));
function qi(r, t, a) {
  return (r < t && a >= t) || (r > t && a <= t);
}
var Ea = ({
    stiffness: r = Or.stiffness,
    damping: t = Or.damping,
    mass: a = Or.mass,
    from: n = 0,
    to: o = 1,
    velocity: m = 0,
    restSpeed: i,
    restDistance: d,
  } = {}) => {
    m = m ? sr.s(m) : 0;
    let c = { done: !1, hasReachedTarget: !1, current: n, target: o },
      f = o - n,
      u = Math.sqrt(r / a) / 1e3,
      y = Bi(r, t, a),
      b = Math.abs(f) < 5;
    i || (i = b ? 0.01 : 2), d || (d = b ? 0.005 : 0.5);
    let _;
    if (y < 1) {
      let h = u * Math.sqrt(1 - y * y);
      _ = (C) =>
        o -
        Math.exp(-y * u * C) *
          (((y * u * f - m) / h) * Math.sin(h * C) + f * Math.cos(h * C));
    } else _ = (h) => o - Math.exp(-u * h) * (f + (u * f - m) * h);
    return (h) => {
      c.current = _(h);
      let C = h === 0 ? m : At(_, h, c.current),
        v = Math.abs(C) <= i,
        H = Math.abs(o - c.current) <= d;
      return (c.done = v && H), (c.hasReachedTarget = qi(n, o, c.current)), c;
    };
  },
  Jn = ({
    from: r = 0,
    velocity: t = 0,
    power: a = 0.8,
    decay: n = 0.325,
    bounceDamping: o,
    bounceStiffness: m,
    changeTarget: i,
    min: d,
    max: c,
    restDistance: f = 0.5,
    restSpeed: u,
  }) => {
    n = sr.ms(n);
    let y = { hasReachedTarget: !1, done: !1, current: r, target: r },
      b = (k) => (d !== void 0 && k < d) || (c !== void 0 && k > c),
      _ = (k) =>
        d === void 0
          ? c
          : c === void 0 || Math.abs(d - k) < Math.abs(c - k)
          ? d
          : c,
      h = a * t,
      C = r + h,
      v = i === void 0 ? C : i(C);
    (y.target = v), v !== C && (h = v - r);
    let H = (k) => -h * Math.exp(-k / n),
      x = (k) => v + H(k),
      w = (k) => {
        let F = H(k),
          V = x(k);
        (y.done = Math.abs(F) <= f), (y.current = y.done ? v : V);
      },
      D,
      R,
      L = (k) => {
        b(y.current) &&
          ((D = k),
          (R = Ea({
            from: y.current,
            to: _(y.current),
            velocity: At(x, k, y.current),
            damping: o,
            stiffness: m,
            restDistance: f,
            restSpeed: u,
          })));
      };
    return (
      L(0),
      (k) => {
        let F = !1;
        return (
          !R && D === void 0 && ((F = !0), w(k), L(k)),
          D !== void 0 && k > D
            ? ((y.hasReachedTarget = !0), R(k - D))
            : ((y.hasReachedTarget = !1), !F && w(k), y)
        );
      }
    );
  },
  Ta = 10,
  Ki = 1e4;
function $n(r, t = je) {
  let a,
    n = Ta,
    o = r(0),
    m = [t(o.current)];
  for (; !o.done && n < Ki; )
    (o = r(n)),
      m.push(t(o.done ? o.target : o.current)),
      a === void 0 && o.hasReachedTarget && (a = n),
      (n += Ta);
  let i = n - Ta;
  return (
    m.length === 1 && m.push(o.current),
    { keyframes: m, duration: i / 1e3, overshootDuration: (a ?? i) / 1e3 }
  );
}
var Fa = new WeakMap();
function so(r) {
  return (
    Fa.has(r) || Fa.set(r, { transforms: [], values: new Map() }), Fa.get(r)
  );
}
function Zi(r, t) {
  return r.has(t) || r.set(t, new Ot()), r.get(t);
}
var Xi = ['', 'X', 'Y', 'Z'],
  Gi = ['translate', 'scale', 'rotate', 'skew'],
  zt = { x: 'translateX', y: 'translateY', z: 'translateZ' },
  eo = {
    syntax: '<angle>',
    initialValue: '0deg',
    toDefaultUnit: (r) => r + 'deg',
  },
  Qi = {
    translate: {
      syntax: '<length-percentage>',
      initialValue: '0px',
      toDefaultUnit: (r) => r + 'px',
    },
    rotate: eo,
    scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: je },
    skew: eo,
  },
  Ur = new Map(),
  Aa = (r) => `--motion-${r}`,
  Bt = ['x', 'y', 'z'];
Gi.forEach((r) => {
  Xi.forEach((t) => {
    Bt.push(r + t), Ur.set(Aa(r + t), Qi[r]);
  });
});
var Ji = (r, t) => Bt.indexOf(r) - Bt.indexOf(t),
  $i = new Set(Bt),
  lo = (r) => $i.has(r),
  es = (r, t) => {
    zt[t] && (t = zt[t]);
    let { transforms: a } = so(r);
    Bn(a, t), (r.style.transform = rs(a));
  },
  rs = (r) => r.sort(Ji).reduce(ts, '').trim(),
  ts = (r, t) => `${r} ${t}(var(${Aa(t)}))`,
  Ma = (r) => r.startsWith('--'),
  ro = new Set();
function as(r) {
  if (!ro.has(r)) {
    ro.add(r);
    try {
      let { syntax: t, initialValue: a } = Ur.has(r) ? Ur.get(r) : {};
      CSS.registerProperty({
        name: r,
        inherits: !1,
        syntax: t,
        initialValue: a,
      });
    } catch {}
  }
}
var Pa = (r, t) => document.createElement('div').animate(r, t),
  to = {
    cssRegisterProperty: () =>
      typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty'),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
    partialKeyframes: () => {
      try {
        Pa({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Pa({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        Pa({ opacity: 0 }, { easing: 'linear(0, 1)' });
      } catch {
        return !1;
      }
      return !0;
    },
  },
  Ia = {},
  Ar = {};
for (let r in to) Ar[r] = () => (Ia[r] === void 0 && (Ia[r] = to[r]()), Ia[r]);
var ns = 0.015,
  os = (r, t) => {
    let a = '',
      n = Math.round(t / ns);
    for (let o = 0; o < n; o++) a += r(It(0, n - 1, o)) + ', ';
    return a.substring(0, a.length - 2);
  },
  ao = (r, t) =>
    ir(r)
      ? Ar.linearEasing()
        ? `linear(${os(r, t)})`
        : We.easing
      : Lt(r)
      ? is(r)
      : r,
  is = ([r, t, a, n]) => `cubic-bezier(${r}, ${t}, ${a}, ${n})`;
function ss(r, t) {
  for (let a = 0; a < r.length; a++)
    r[a] === null && (r[a] = a ? r[a - 1] : t());
  return r;
}
var ls = (r) => (Array.isArray(r) ? r : [r]);
function qt(r) {
  return zt[r] && (r = zt[r]), lo(r) ? Aa(r) : r;
}
var Ut = {
  get: (r, t) => {
    t = qt(t);
    let a = Ma(t) ? r.style.getPropertyValue(t) : getComputedStyle(r)[t];
    if (!a && a !== 0) {
      let n = Ur.get(t);
      n && (a = n.initialValue);
    }
    return a;
  },
  set: (r, t, a) => {
    (t = qt(t)), Ma(t) ? r.style.setProperty(t, a) : (r.style[t] = a);
  },
};
function fo(r, t = !0) {
  if (r && r.playState !== 'finished')
    try {
      r.stop ? r.stop() : (t && r.commitStyles(), r.cancel());
    } catch {}
}
function mo(r, t) {
  var a;
  let n = t?.toDefaultUnit || je,
    o = r[r.length - 1];
  if (Ra(o)) {
    let m =
      ((a = o.match(/(-?[\d.]+)([a-z%]*)/)) === null || a === void 0
        ? void 0
        : a[2]) || '';
    m && (n = (i) => i + m);
  }
  return n;
}
function fs() {
  return S.__MOTION_DEV_TOOLS_RECORD;
}
function ms(r, t, a, n = {}, o) {
  let m = fs(),
    i = n.record !== !1 && m,
    d,
    {
      duration: c = We.duration,
      delay: f = We.delay,
      endDelay: u = We.endDelay,
      repeat: y = We.repeat,
      easing: b = We.easing,
      persist: _ = !1,
      direction: h,
      offset: C,
      allowWebkitAcceleration: v = !1,
      autoplay: H = !0,
    } = n,
    x = so(r),
    w = lo(t),
    D = Ar.waapi();
  w && es(r, t);
  let R = qt(t),
    L = Zi(x.values, R),
    k = Ur.get(R);
  return (
    fo(L.animation, !(tt(b) && L.generator) && n.record !== !1),
    () => {
      let F = () => {
          var E, U;
          return (U =
            (E = Ut.get(r, R)) !== null && E !== void 0
              ? E
              : k?.initialValue) !== null && U !== void 0
            ? U
            : 0;
        },
        V = ss(ls(a), F),
        q = mo(V, k);
      if (tt(b)) {
        let E = b.createAnimation(V, t !== 'opacity', F, R, L);
        (b = E.easing), (V = E.keyframes || V), (c = E.duration || c);
      }
      if (
        (Ma(R) && (Ar.cssRegisterProperty() ? as(R) : (D = !1)),
        w && !Ar.linearEasing() && (ir(b) || (dr(b) && b.some(ir))) && (D = !1),
        D)
      ) {
        k && (V = V.map((I) => (Ir(I) ? k.toDefaultUnit(I) : I))),
          V.length !== 1 || (Ar.partialKeyframes() && !i) || V.unshift(F());
        let E = {
          delay: sr.ms(f),
          duration: sr.ms(c),
          endDelay: sr.ms(u),
          easing: dr(b) ? void 0 : ao(b, c),
          direction: h,
          iterations: y + 1,
          fill: 'both',
        };
        (d = r.animate(
          {
            [R]: V,
            offset: C,
            easing: dr(b) ? b.map((I) => ao(I, c)) : void 0,
          },
          E
        )),
          d.finished ||
            (d.finished = new Promise((I, A) => {
              (d.onfinish = I), (d.oncancel = A);
            }));
        let U = V[V.length - 1];
        d.finished
          .then(() => {
            _ || (Ut.set(r, R, U), d.cancel());
          })
          .catch(Sa),
          v || (d.playbackRate = 1.000001);
      } else if (o && w)
        (V = V.map((E) => (typeof E == 'string' ? parseFloat(E) : E))),
          V.length === 1 && V.unshift(parseFloat(F())),
          (d = new o(
            (E) => {
              Ut.set(r, R, q ? q(E) : E);
            },
            V,
            Object.assign(Object.assign({}, n), { duration: c, easing: b })
          ));
      else {
        let E = V[V.length - 1];
        Ut.set(r, R, k && Ir(E) ? k.toDefaultUnit(E) : E);
      }
      return (
        i &&
          m(
            r,
            t,
            V,
            { duration: c, delay: f, easing: b, repeat: y, offset: C },
            'motion-one'
          ),
        L.setAnimation(d),
        d && !H && d.pause(),
        d
      );
    }
  );
}
var cs = (r, t) =>
  r[t] ? Object.assign(Object.assign({}, r), r[t]) : Object.assign({}, r);
function Ua(r, t) {
  var a;
  return (
    typeof r == 'string'
      ? t
        ? (((a = t[r]) !== null && a !== void 0) ||
            (t[r] = document.querySelectorAll(r)),
          (r = t[r]))
        : (r = document.querySelectorAll(r))
      : r instanceof Element && (r = [r]),
    Array.from(r || [])
  );
}
var ds = (r) => r(),
  ps = (r, t, a = We.duration) =>
    new Proxy(
      { animations: r.map(ds).filter(Boolean), duration: a, options: t },
      us
    ),
  hs = (r) => r.animations[0],
  us = {
    get: (r, t) => {
      let a = hs(r);
      switch (t) {
        case 'duration':
          return r.duration;
        case 'currentTime':
          return sr.s(a?.[t] || 0);
        case 'playbackRate':
        case 'playState':
          return a?.[t];
        case 'finished':
          return (
            r.finished ||
              (r.finished = Promise.all(r.animations.map(gs)).catch(Sa)),
            r.finished
          );
        case 'stop':
          return () => {
            r.animations.forEach((n) => fo(n));
          };
        case 'forEachNative':
          return (n) => {
            r.animations.forEach((o) => n(o, r));
          };
        default:
          return typeof a?.[t] > 'u'
            ? void 0
            : () => r.animations.forEach((n) => n[t]());
      }
    },
    set: (r, t, a) => {
      switch (t) {
        case 'currentTime':
          a = sr.ms(a);
        case 'playbackRate':
          for (let n = 0; n < r.animations.length; n++) r.animations[n][t] = a;
          return !0;
      }
      return !1;
    },
  },
  gs = (r) => r.finished;
function xs(r, t, a) {
  return ir(r) ? r(t, a) : r;
}
function ys(r) {
  return function (a, n, o = {}) {
    a = Ua(a);
    let m = a.length;
    Va(!!m, 'No valid element provided.'), Va(!!n, 'No keyframes defined.');
    let i = [];
    for (let d = 0; d < m; d++) {
      let c = a[d];
      for (let f in n) {
        let u = cs(o, f);
        u.delay = xs(u.delay, d, m);
        let y = ms(c, f, n[f], u, r);
        i.push(y);
      }
    }
    return ps(i, o, o.duration);
  };
}
var tp = ys(Mt);
function no(r) {
  return Ir(r) && !isNaN(r);
}
function La(r) {
  return Ra(r) ? parseFloat(r) : r;
}
function co(r) {
  let t = new WeakMap();
  return (a = {}) => {
    let n = new Map(),
      o = (i = 0, d = 100, c = 0, f = !1) => {
        let u = `${i}-${d}-${c}-${f}`;
        return (
          n.has(u) ||
            n.set(u, r(Object.assign({ from: i, to: d, velocity: c }, a))),
          n.get(u)
        );
      },
      m = (i, d) => (t.has(i) || t.set(i, $n(i, d)), t.get(i));
    return {
      createAnimation: (i, d = !0, c, f, u) => {
        let y,
          b,
          _,
          h = 0,
          C = je,
          v = i.length;
        if (d) {
          C = mo(i, f ? Ur.get(qt(f)) : void 0);
          let H = i[v - 1];
          if (((_ = La(H)), v > 1 && i[0] !== null)) b = La(i[0]);
          else {
            let x = u?.generator;
            if (x) {
              let { animation: w, generatorStartTime: D } = u,
                R = w?.startTime || D || 0,
                L = w?.currentTime || performance.now() - R,
                k = x(L).current;
              (b = k), (h = At((F) => x(F).current, L, k));
            } else c && (b = La(c()));
          }
        }
        if (no(b) && no(_)) {
          let H = o(b, _, h, f?.includes('scale'));
          (y = Object.assign(Object.assign({}, m(H, C)), { easing: 'linear' })),
            u &&
              ((u.generator = H), (u.generatorStartTime = performance.now()));
        }
        return (
          y ||
            (y = { easing: 'ease', duration: m(o(0, 100)).overshootDuration }),
          y
        );
      },
    };
  };
}
var ap = co(Ea),
  np = co(Jn),
  ws = { any: 0, all: 1 };
function bs(r, t, { root: a, margin: n, amount: o = 'any' } = {}) {
  if (typeof IntersectionObserver > 'u') return () => {};
  let m = Ua(r),
    i = new WeakMap(),
    d = (f) => {
      f.forEach((u) => {
        let y = i.get(u.target);
        if (u.isIntersecting !== !!y)
          if (u.isIntersecting) {
            let b = t(u);
            ir(b) ? i.set(u.target, b) : c.unobserve(u.target);
          } else y && (y(u), i.delete(u.target));
      });
    },
    c = new IntersectionObserver(d, {
      root: a,
      rootMargin: n,
      threshold: typeof o == 'number' ? o : ws[o],
    });
  return m.forEach((f) => c.observe(f)), () => c.disconnect();
}
var Wt = new WeakMap(),
  pr;
function vs(r, t) {
  if (t) {
    let { inlineSize: a, blockSize: n } = t[0];
    return { width: a, height: n };
  }
  return r instanceof SVGElement && 'getBBox' in r
    ? r.getBBox()
    : { width: r.offsetWidth, height: r.offsetHeight };
}
function Cs({ target: r, contentRect: t, borderBoxSize: a }) {
  var n;
  (n = Wt.get(r)) === null ||
    n === void 0 ||
    n.forEach((o) => {
      o({
        target: r,
        contentSize: t,
        get size() {
          return vs(r, a);
        },
      });
    });
}
function ks(r) {
  r.forEach(Cs);
}
function _s() {
  typeof ResizeObserver < 'u' && (pr = new ResizeObserver(ks));
}
function Ss(r, t) {
  pr || _s();
  let a = Ua(r);
  return (
    a.forEach((n) => {
      let o = Wt.get(n);
      o || ((o = new Set()), Wt.set(n, o)), o.add(t), pr?.observe(n);
    }),
    () => {
      a.forEach((n) => {
        let o = Wt.get(n);
        o?.delete(t), o?.size || pr?.unobserve(n);
      });
    }
  );
}
var jt = new Set(),
  at;
function Ds() {
  (at = () => {
    let r = { width: S.innerWidth, height: S.innerHeight },
      t = { target: S, size: r, contentSize: r };
    jt.forEach((a) => a(t));
  }),
    S.addEventListener('resize', at);
}
function Hs(r) {
  return (
    jt.add(r),
    at || Ds(),
    () => {
      jt.delete(r), !jt.size && at && (at = void 0);
    }
  );
}
function Wr(r, t) {
  return ir(r) ? Hs(r) : Ss(r, t);
}
function Oa(r, t, a) {
  r.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: a } }));
}
function oo(r, t, a) {
  r.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: a } }));
}
var Rs = {
    isActive: (r) => !!r.inView,
    subscribe: (r, { enable: t, disable: a }, { inViewOptions: n = {} }) => {
      let { once: o } = n,
        m = Qn(n, ['once']);
      return bs(
        r,
        (i) => {
          if ((t(), oo(r, 'viewenter', i), !o))
            return (d) => {
              a(), oo(r, 'viewleave', d);
            };
        },
        m
      );
    },
  },
  io = (r, t, a) => (n) => {
    (!n.pointerType || n.pointerType === 'mouse') && (a(), Oa(r, t, n));
  },
  Ys = {
    isActive: (r) => !!r.hover,
    subscribe: (r, { enable: t, disable: a }) => {
      let n = io(r, 'hoverstart', t),
        o = io(r, 'hoverend', a);
      return (
        r.addEventListener('pointerenter', n),
        r.addEventListener('pointerleave', o),
        () => {
          r.removeEventListener('pointerenter', n),
            r.removeEventListener('pointerleave', o);
        }
      );
    },
  },
  Ns = {
    isActive: (r) => !!r.press,
    subscribe: (r, { enable: t, disable: a }) => {
      let n = (m) => {
          a(), Oa(r, 'pressend', m), S.removeEventListener('pointerup', n);
        },
        o = (m) => {
          t(), Oa(r, 'pressstart', m), S.addEventListener('pointerup', n);
        };
      return (
        r.addEventListener('pointerdown', o),
        () => {
          r.removeEventListener('pointerdown', o),
            S.removeEventListener('pointerup', n);
        }
      );
    },
  },
  Vs = { inView: Rs, hover: Ys, press: Ns },
  op = ['initial', 'animate', ...Object.keys(Vs), 'exit'];
var Ts = 100,
  Es = {
    left: (r) => `translateX(-${r}px)`,
    right: (r) => `translateX(${r}px)`,
    top: (r) => `translateY(-${r}px)`,
    bottom: (r) => `translateY(${r}px)`,
  },
  Wa =
    typeof Animation < 'u' &&
    typeof Animation.prototype.updatePlaybackRate == 'function';
function Cr(r) {
  let {
      slots: t,
      gap: a,
      padding: n,
      paddingPerSide: o,
      paddingTop: m,
      paddingRight: i,
      paddingBottom: d,
      paddingLeft: c,
      speed: f,
      hoverFactor: u,
      direction: y,
      alignment: b,
      sizingOptions: _,
      fadeOptions: h,
      style: C,
    } = r,
    {
      fadeContent: v,
      overflow: H,
      fadeWidth: x,
      fadeInset: w,
      fadeAlpha: D,
    } = h,
    { widthType: R, heightType: L } = _,
    k = o ? `${m}px ${i}px ${d}px ${c}px` : `${n}px`,
    F = Ue.current() === Ue.canvas,
    V = t.filter(Boolean),
    q = Qe.count(V),
    E = q > 0;
  y === !0 && (y = 'left');
  let U = y === 'left' || y === 'right',
    I = Fr(0),
    A = Es[y],
    j = qe(I, A),
    W = N(null),
    Z = K(() => [cr(), cr()], []),
    [re, z] = Pe({ parent: null, children: null }),
    ae = [],
    He = [],
    Le = 0,
    Ee = 0;
  F && ((Le = q ? Math.floor(10 / q) : 0), (Ee = 1)),
    !F &&
      E &&
      re.parent &&
      ((Le = Math.round((re.parent / re.children) * 2) + 1),
      (Le = Math.min(Le, Ts)),
      (Ee = 1));
  let Je = or(() => {
      if (E && W.current) {
        let O = U ? W.current.offsetWidth : W.current.offsetHeight,
          Q = Z[0].current
            ? U
              ? Z[0].current.offsetLeft
              : Z[0].current.offsetTop
            : 0,
          De =
            (Z[1].current
              ? U
                ? Z[1].current.offsetLeft + Z[1].current.offsetWidth
                : Z[1].current.offsetTop + Z[1].current.offsetHeight
              : 0) -
            Q +
            a;
        z({ parent: O, children: De });
      }
    }, []),
    ie = F ? { contentVisibility: 'auto' } : {};
  if (E) {
    if (!F) {
      let O = N(!0);
      ve(
        () => (
          Er.read(Je),
          Wr(W.current, ({ contentSize: Q }) => {
            !O.current && (Q.width || Q.height) && Er.read(Je),
              (O.current = !1);
          })
        ),
        []
      );
    }
    ae = Qe.map(V, (O, Q) => {
      var ke, De, _e, se;
      let Re;
      Q === 0 && (Re = Z[0]), Q === V.length - 1 && (Re = Z[1]);
      let J = {
        width: R
          ? (ke = O.props) === null || ke === void 0
            ? void 0
            : ke.width
          : '100%',
        height: L
          ? (De = O.props) === null || De === void 0
            ? void 0
            : De.height
          : '100%',
      };
      return e(X, {
        inherit: 'id',
        children: e('li', {
          ref: Re,
          style: J,
          children: mr(
            O,
            {
              style: {
                ...((_e = O.props) === null || _e === void 0
                  ? void 0
                  : _e.style),
                ...J,
                flexShrink: 0,
                ...ie,
              },
              layoutId: O.props.layoutId
                ? O.props.layoutId + '-original-' + Q
                : void 0,
            },
            (se = O.props) === null || se === void 0 ? void 0 : se.children
          ),
        }),
      });
    });
  }
  if (!F)
    for (let O = 0; O < Le; O++)
      He = [
        ...He,
        ...Qe.map(V, (Q, ke) => {
          var De, _e, se, Re, J, rr;
          let br = {
            width: R
              ? (De = Q.props) === null || De === void 0
                ? void 0
                : De.width
              : '100%',
            height: L
              ? (_e = Q.props) === null || _e === void 0
                ? void 0
                : _e.height
              : '100%',
            willChange: 'transform',
          };
          return e(
            X,
            {
              inherit: 'id',
              children: e(
                'li',
                {
                  style: br,
                  'aria-hidden': !0,
                  children: mr(
                    Q,
                    {
                      key: O + ' ' + ke,
                      style: {
                        ...((se = Q.props) === null || se === void 0
                          ? void 0
                          : se.style),
                        width: R
                          ? (Re = Q.props) === null || Re === void 0
                            ? void 0
                            : Re.width
                          : '100%',
                        height: L
                          ? (J = Q.props) === null || J === void 0
                            ? void 0
                            : J.height
                          : '100%',
                        flexShrink: 0,
                        ...ie,
                      },
                      layoutId: Q.props.layoutId
                        ? Q.props.layoutId + '-dupe-' + O
                        : void 0,
                    },
                    (rr = Q.props) === null || rr === void 0
                      ? void 0
                      : rr.children
                  ),
                },
                O + 'li' + ke
              ),
            },
            O + 'lg' + ke
          );
        }),
      ];
  let oe = re.children + re.children * Math.round(re.parent / re.children),
    Ae = N(null),
    $e = N(null),
    er = N(0),
    fr = N(!1),
    xr = Vt(),
    Me = N(null),
    Oe = N(null);
  if (!F) {
    let O = Tt(W);
    Wa
      ? (ve(() => {
          if (!(xr || !oe || !f))
            return (
              (Oe.current = Me.current.animate(
                { transform: [A(0), A(oe)] },
                {
                  duration: (Math.abs(oe) / f) * 1e3,
                  iterations: 1 / 0,
                  easing: 'linear',
                }
              )),
              () => Oe.current.cancel()
            );
        }, [u, oe, f]),
        ve(() => {
          Oe.current &&
            (O && Oe.current.playState === 'paused'
              ? Oe.current.play()
              : !O && Oe.current.playState === 'running' && Oe.current.pause());
        }, [O]))
      : Nt((Q) => {
          if (!oe || xr || Wa) return;
          Ae.current === null && (Ae.current = Q), (Q = Q - Ae.current);
          let De = ($e.current === null ? 0 : Q - $e.current) * (f / 1e3);
          fr.current && (De *= u),
            (er.current += De),
            (er.current = tr(0, oe, er.current)),
            ($e.current = Q),
            O && I.set(er.current);
        });
  }
  let yr = U ? 'to right' : 'to bottom',
    Hr = x / 2,
    Jr = 100 - x / 2,
    $r = Ms(w, 0, Hr),
    wr = 100 - w,
    me = `linear-gradient(${yr}, rgba(0, 0, 0, ${D}) ${$r}%, rgba(0, 0, 0, 1) ${Hr}%, rgba(0, 0, 0, 1) ${Jr}%, rgba(0, 0, 0, ${D}) ${wr}%)`;
  return E
    ? e('section', {
        style: {
          ...po,
          opacity: Ee,
          WebkitMaskImage: v ? me : void 0,
          MozMaskImage: v ? me : void 0,
          maskImage: v ? me : void 0,
          overflow: H ? 'visible' : 'hidden',
          padding: k,
        },
        ref: W,
        children: g(l.ul, {
          ref: Me,
          style: {
            ...po,
            gap: a,
            top: y === 'bottom' && ho(oe) ? -oe : void 0,
            left: y === 'right' && ho(oe) ? -oe : void 0,
            placeItems: b,
            position: 'relative',
            flexDirection: U ? 'row' : 'column',
            ...C,
            willChange: F ? 'auto' : 'transform',
            transform: Wa ? A(0) : j,
          },
          onMouseEnter: () => {
            (fr.current = !0), Oe.current && (Oe.current.playbackRate = u);
          },
          onMouseLeave: () => {
            (fr.current = !1), Oe.current && (Oe.current.playbackRate = 1);
          },
          children: [ae, He],
        }),
      })
    : g('section', {
        style: Fs,
        children: [
          e('div', { style: Ps, children: '\u2728' }),
          e('p', { style: Is, children: 'Connect to Content' }),
          e('p', {
            style: Ls,
            children:
              'Add layers or components to infinitely loop on your page.',
          }),
        ],
      });
}
Cr.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
G(Cr, {
  slots: {
    type: s.Array,
    title: 'Children',
    control: { type: s.ComponentInstance },
  },
  speed: {
    type: s.Number,
    title: 'Speed',
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: '%',
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: s.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom'],
    optionIcons: [
      'direction-left',
      'direction-right',
      'direction-up',
      'direction-down',
    ],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom'],
    defaultValue: 'left',
    displaySegmentedControl: !0,
  },
  alignment: {
    type: s.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end'],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom'],
        left: ['align-top', 'align-middle', 'align-bottom'],
        top: ['align-left', 'align-center', 'align-right'],
        bottom: ['align-left', 'align-center', 'align-right'],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: !0,
  },
  gap: { type: s.Number, title: 'Gap' },
  padding: {
    title: 'Padding',
    type: s.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side'],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    valueLabels: ['T', 'R', 'B', 'L'],
    min: 0,
  },
  sizingOptions: {
    type: s.Object,
    title: 'Sizing',
    controls: {
      widthType: {
        type: s.Boolean,
        title: 'Width',
        enabledTitle: 'Auto',
        disabledTitle: 'Stretch',
        defaultValue: !0,
      },
      heightType: {
        type: s.Boolean,
        title: 'Height',
        enabledTitle: 'Auto',
        disabledTitle: 'Stretch',
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: s.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: s.Boolean, title: 'Fade', defaultValue: !0 },
      overflow: {
        type: s.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: s.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: s.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: s.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: s.Number,
    title: 'Hover',
    min: 0,
    max: 1,
    unit: 'x',
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: 'Slows down the speed while you are hovering.',
  },
});
var po = {
    display: 'flex',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    placeItems: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    textIndent: 'none',
  },
  Fs = {
    display: 'flex',
    width: '100%',
    height: '100%',
    placeContent: 'center',
    placeItems: 'center',
    flexDirection: 'column',
    color: '#96F',
    background: 'rgba(136, 85, 255, 0.1)',
    fontSize: 11,
    overflow: 'hidden',
    padding: '20px 20px 30px 20px',
  },
  Ps = { fontSize: 32, marginBottom: 10 },
  Is = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center' },
  Ls = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: 'center',
  },
  Ms = (r, t, a) => Math.min(Math.max(r, t), a),
  ho = (r) => typeof r == 'number' && !isNaN(r);
var Os = 100,
  As = {
    left: (r) => `translateX(-${r}px)`,
    right: (r) => `translateX(${r}px)`,
    top: (r) => `translateY(-${r}px)`,
    bottom: (r) => `translateY(${r}px)`,
  },
  ja =
    typeof Animation < 'u' &&
    typeof Animation.prototype.updatePlaybackRate == 'function';
function kr(r) {
  let {
      slots: t,
      gap: a,
      padding: n,
      paddingPerSide: o,
      paddingTop: m,
      paddingRight: i,
      paddingBottom: d,
      paddingLeft: c,
      speed: f,
      hoverFactor: u,
      direction: y,
      alignment: b,
      sizingOptions: _,
      fadeOptions: h,
      style: C,
    } = r,
    {
      fadeContent: v,
      overflow: H,
      fadeWidth: x,
      fadeInset: w,
      fadeAlpha: D,
    } = h,
    { widthType: R, heightType: L } = _,
    k = o ? `${m}px ${i}px ${d}px ${c}px` : `${n}px`,
    F = Ue.current() === Ue.canvas,
    V = Qe.count(t),
    q = V > 0;
  y === !0 && (y = 'left');
  let E = y === 'left' || y === 'right',
    U = Fr(0),
    I = As[y],
    A = qe(U, I),
    j = N(null),
    W = K(() => [cr(), cr()], []),
    [Z, re] = Pe({ parent: null, children: null }),
    z = [],
    ae = [],
    He = 0,
    Le = 0;
  F && ((He = V ? Math.floor(10 / V) : 0), (Le = 1)),
    !F &&
      q &&
      Z.parent &&
      ((He = Math.round((Z.parent / Z.children) * 2) + 1),
      (He = Math.min(He, Os)),
      (Le = 1));
  let Ee = or(() => {
      if (q && j.current) {
        let me = E ? j.current.offsetWidth : j.current.offsetHeight,
          O = W[0].current
            ? E
              ? W[0].current.offsetLeft
              : W[0].current.offsetTop
            : 0,
          ke =
            (W[1].current
              ? E
                ? W[1].current.offsetLeft + W[1].current.offsetWidth
                : W[1].current.offsetTop + W[1].current.offsetHeight
              : 0) -
            O +
            a;
        re({ parent: me, children: ke });
      }
    }, []),
    Je = F ? { contentVisibility: 'auto' } : {};
  if (q) {
    if (!F) {
      let me = N(!0);
      ve(
        () => (
          Er.read(Ee),
          Wr(j.current, ({ contentSize: O }) => {
            !me.current && (O.width || O.height) && Er.read(Ee),
              (me.current = !1);
          })
        ),
        []
      );
    }
    z = Qe.map(t, (me, O) => {
      var Q, ke, De, _e;
      let se;
      O === 0 && (se = W[0]), O === t.length - 1 && (se = W[1]);
      let Re = {
        width: R
          ? (Q = me.props) === null || Q === void 0
            ? void 0
            : Q.width
          : '100%',
        height: L
          ? (ke = me.props) === null || ke === void 0
            ? void 0
            : ke.height
          : '100%',
      };
      return e(X, {
        inherit: 'id',
        children: e('li', {
          ref: se,
          style: Re,
          children: mr(
            me,
            {
              style: {
                ...((De = me.props) === null || De === void 0
                  ? void 0
                  : De.style),
                ...Re,
                flexShrink: 0,
                ...Je,
              },
              layoutId: me.props.layoutId
                ? me.props.layoutId + '-original-' + O
                : void 0,
            },
            (_e = me.props) === null || _e === void 0 ? void 0 : _e.children
          ),
        }),
      });
    });
  }
  if (!F)
    for (let me = 0; me < He; me++)
      ae = [
        ...ae,
        ...Qe.map(t, (O, Q) => {
          var ke, De, _e, se, Re, J;
          let rr = {
            width: R
              ? (ke = O.props) === null || ke === void 0
                ? void 0
                : ke.width
              : '100%',
            height: L
              ? (De = O.props) === null || De === void 0
                ? void 0
                : De.height
              : '100%',
            willChange: 'transform',
          };
          return e(
            X,
            {
              inherit: 'id',
              children: e(
                'li',
                {
                  style: rr,
                  'aria-hidden': !0,
                  children: mr(
                    O,
                    {
                      key: me + ' ' + Q,
                      style: {
                        ...((_e = O.props) === null || _e === void 0
                          ? void 0
                          : _e.style),
                        width: R
                          ? (se = O.props) === null || se === void 0
                            ? void 0
                            : se.width
                          : '100%',
                        height: L
                          ? (Re = O.props) === null || Re === void 0
                            ? void 0
                            : Re.height
                          : '100%',
                        flexShrink: 0,
                        ...Je,
                      },
                      layoutId: O.props.layoutId
                        ? O.props.layoutId + '-dupe-' + me
                        : void 0,
                    },
                    (J = O.props) === null || J === void 0 ? void 0 : J.children
                  ),
                },
                me + 'li' + Q
              ),
            },
            me + 'lg' + Q
          );
        }),
      ];
  let ie = Z.children + Z.children * Math.round(Z.parent / Z.children),
    oe = N(null),
    Ae = N(null),
    $e = N(0),
    er = N(!1),
    fr = Vt(),
    xr = N(null),
    Me = N(null);
  if (!F) {
    let me = Tt(j);
    ja
      ? (ve(() => {
          if (!(fr || !ie || !f))
            return (
              (Me.current = xr.current.animate(
                { transform: [I(0), I(ie)] },
                {
                  duration: (Math.abs(ie) / f) * 1e3,
                  iterations: 1 / 0,
                  easing: 'linear',
                }
              )),
              () => Me.current.cancel()
            );
        }, [u, ie, f]),
        ve(() => {
          Me.current &&
            (me && Me.current.playState === 'paused'
              ? Me.current.play()
              : !me &&
                Me.current.playState === 'running' &&
                Me.current.pause());
        }, [me]))
      : Nt((O) => {
          if (!ie || fr || ja) return;
          oe.current === null && (oe.current = O), (O = O - oe.current);
          let ke = (Ae.current === null ? 0 : O - Ae.current) * (f / 1e3);
          er.current && (ke *= u),
            ($e.current += ke),
            ($e.current = tr(0, ie, $e.current)),
            (Ae.current = O),
            me && U.set($e.current);
        });
  }
  let Oe = E ? 'to right' : 'to bottom',
    yr = x / 2,
    Hr = 100 - x / 2,
    Jr = Bs(w, 0, yr),
    $r = 100 - w,
    wr = `linear-gradient(${Oe}, rgba(0, 0, 0, ${D}) ${Jr}%, rgba(0, 0, 0, 1) ${yr}%, rgba(0, 0, 0, 1) ${Hr}%, rgba(0, 0, 0, ${D}) ${$r}%)`;
  return q
    ? e('section', {
        style: {
          ...uo,
          opacity: Le,
          WebkitMaskImage: v ? wr : void 0,
          MozMaskImage: v ? wr : void 0,
          maskImage: v ? wr : void 0,
          overflow: H ? 'visible' : 'hidden',
          padding: k,
        },
        ref: j,
        children: g(l.ul, {
          ref: xr,
          style: {
            ...uo,
            gap: a,
            top: y === 'bottom' && go(ie) ? -ie : void 0,
            left: y === 'right' && go(ie) ? -ie : void 0,
            placeItems: b,
            position: 'relative',
            flexDirection: E ? 'row' : 'column',
            ...C,
            willChange: F ? 'auto' : 'transform',
            transform: ja ? I(0) : A,
          },
          onMouseEnter: () => {
            (er.current = !0), Me.current && (Me.current.playbackRate = u);
          },
          onMouseLeave: () => {
            (er.current = !1), Me.current && (Me.current.playbackRate = 1);
          },
          children: [z, ae],
        }),
      })
    : g('section', {
        style: Us,
        children: [
          e('div', { style: Ws, children: '\u2728' }),
          e('p', { style: js, children: 'Connect to Content' }),
          e('p', {
            style: zs,
            children:
              'Add layers or components to infinitely loop on your page.',
          }),
        ],
      });
}
kr.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
G(kr, {
  slots: {
    type: s.Array,
    title: 'Children',
    control: { type: s.ComponentInstance },
  },
  speed: {
    type: s.Number,
    title: 'Speed',
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: '%',
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: s.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom'],
    optionIcons: [
      'direction-left',
      'direction-right',
      'direction-up',
      'direction-down',
    ],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom'],
    defaultValue: 'left',
    displaySegmentedControl: !0,
  },
  alignment: {
    type: s.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end'],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom'],
        left: ['align-top', 'align-middle', 'align-bottom'],
        top: ['align-left', 'align-center', 'align-right'],
        bottom: ['align-left', 'align-center', 'align-right'],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: !0,
  },
  gap: { type: s.Number, title: 'Gap' },
  padding: {
    title: 'Padding',
    type: s.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side'],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    valueLabels: ['T', 'R', 'B', 'L'],
    min: 0,
  },
  sizingOptions: {
    type: s.Object,
    title: 'Sizing',
    controls: {
      widthType: {
        type: s.Boolean,
        title: 'Width',
        enabledTitle: 'Auto',
        disabledTitle: 'Stretch',
        defaultValue: !0,
      },
      heightType: {
        type: s.Boolean,
        title: 'Height',
        enabledTitle: 'Auto',
        disabledTitle: 'Stretch',
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: s.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: s.Boolean, title: 'Fade', defaultValue: !0 },
      overflow: {
        type: s.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: s.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: s.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: s.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: s.Number,
    title: 'Hover',
    min: 0,
    max: 1,
    unit: 'x',
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: 'Slows down the speed while you are hovering.',
  },
});
var uo = {
    display: 'flex',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    placeItems: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    textIndent: 'none',
  },
  Us = {
    display: 'flex',
    width: '100%',
    height: '100%',
    placeContent: 'center',
    placeItems: 'center',
    flexDirection: 'column',
    color: '#96F',
    background: 'rgba(136, 85, 255, 0.1)',
    fontSize: 11,
    overflow: 'hidden',
    padding: '20px 20px 30px 20px',
  },
  Ws = { fontSize: 32, marginBottom: 10 },
  js = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center' },
  zs = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: 'center',
  },
  Bs = (r, t, a) => Math.min(Math.max(r, t), a),
  go = (r) => typeof r == 'number' && !isNaN(r);
var Kt = () => typeof document == 'object';
function qs() {
  if (Kt()) {
    if (typeof document.hidden < 'u') return 'visibilitychange';
    if (typeof document.msHidden < 'u') return 'msvisibilitychange';
    if (typeof document.webkitHidden < 'u') return 'webkitvisibilitychange';
  }
}
function Ks() {
  if (Kt()) {
    if (typeof document.hidden < 'u') return 'hidden';
    if (typeof document.msHidden < 'u') return 'msHidden';
    if (typeof document.webkitHidden < 'u') return 'webkitHidden';
  }
}
function xo() {
  if (Kt()) return !document[Ks()];
}
function yo() {
  if (!Kt()) return;
  let [r, t] = Pe(xo()),
    a = () => t(xo());
  return (
    ve(() => {
      let n = qs();
      return (
        document.addEventListener(n, a, !1),
        () => {
          document.removeEventListener(n, a);
        }
      );
    }),
    r
  );
}
var za = 0.001;
function Te(r) {
  let {
      slots: t,
      startFrom: a,
      direction: n,
      effectsOptions: o,
      autoPlayControl: m,
      dragControl: i,
      alignment: d,
      gap: c,
      padding: f,
      paddingPerSide: u,
      paddingTop: y,
      paddingRight: b,
      paddingBottom: _,
      paddingLeft: h,
      itemAmount: C,
      fadeOptions: v,
      intervalControl: H,
      transitionControl: x,
      arrowOptions: w,
      borderRadius: D,
      progressOptions: R,
      style: L,
    } = r,
    {
      effectsOpacity: k,
      effectsScale: F,
      effectsRotate: V,
      effectsPerspective: q,
      effectsHover: E,
    } = o,
    {
      fadeContent: U,
      overflow: I,
      fadeWidth: A,
      fadeInset: j,
      fadeAlpha: W,
    } = v,
    {
      showMouseControls: Z,
      arrowSize: re,
      arrowRadius: z,
      arrowFill: ae,
      leftArrow: He,
      rightArrow: Le,
      arrowShouldSpace: Ee = !0,
      arrowShouldFadeIn: Je = !1,
      arrowPosition: ie,
      arrowPadding: oe,
      arrowGap: Ae,
      arrowPaddingTop: $e,
      arrowPaddingRight: er,
      arrowPaddingBottom: fr,
      arrowPaddingLeft: xr,
    } = w,
    {
      showProgressDots: Me,
      dotSize: Oe,
      dotsInset: yr,
      dotsRadius: Hr,
      dotsPadding: Jr,
      dotsGap: $r,
      dotsFill: wr,
      dotsBackground: me,
      dotsActiveOpacity: O,
      dotsOpacity: Q,
      dotsBlur: ke,
    } = R,
    De = u ? `${y}px ${b}px ${_}px ${h}px` : `${f}px`,
    _e = Ue.current() === Ue.canvas,
    se = t.filter(Boolean),
    Re = Qe.count(se) > 0,
    J = n === 'left' || n === 'right',
    rr = n === 'right' || n === 'bottom';
  if (!Re)
    return g('section', {
      style: Zs,
      children: [
        e('div', { style: Xs, children: '\u2B50\uFE0F' }),
        e('p', { style: Gs, children: 'Connect to Content' }),
        e('p', {
          style: Qs,
          children:
            'Add layers or components to make infinite auto-playing slideshows.',
        }),
      ],
    });
  let br = N(null),
    Fe = K(() => se.map(($) => cr()), [se]),
    ca = N(void 0),
    [Se, xi] = Pe({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [yi, hn] = Pe(!1),
    [wi, un] = Pe(m),
    [bi, gn] = Pe(!1),
    [Rr, xn] = Pe(!1),
    da = [],
    yn = 4;
  _e && (yn = 1);
  let wn = or(() => {
    En.read(() => {
      if (Re && br.current) {
        let $ = se.length - 1,
          Ge = J ? br.current.offsetWidth : br.current.offsetHeight,
          ze = Fe[0].current
            ? J
              ? Fe[0].current.offsetLeft
              : Fe[0].current.offsetTop
            : 0,
          Tr =
            (Fe[$].current
              ? J
                ? Fe[$].current.offsetLeft + Fe[$].current.offsetWidth
                : Fe[$].current.offsetTop + Fe[$].current.offsetHeight
              : 0) -
            ze +
            c,
          Rt = Fe[0].current
            ? J
              ? Fe[0].current.offsetWidth
              : Fe[0].current.offsetHeight
            : 0,
          wa = Fe[0].current ? Fe[0].current.offsetWidth : 0,
          ba = Fe[0].current ? Fe[0].current.offsetHeight : 0;
        xi({
          parent: Ge,
          children: Tr,
          item: Rt,
          itemWidth: wa,
          itemHeight: ba,
        });
      }
    });
  }, [Re]);
  va(() => {
    Re && wn();
  }, [Re, C]);
  let pa = N(!0);
  ve(
    () =>
      Wr(br.current, ({ contentSize: $ }) => {
        !pa.current && ($.width || $.height) && (wn(), xn(!0)),
          (pa.current = !1);
      }),
    []
  ),
    ve(() => {
      if (Rr) {
        let $ = setTimeout(() => xn(!1), 500);
        return () => clearTimeout($);
      }
    }, [Rr]);
  let Yr = se?.length,
    Dt = _e ? 0 : Se?.children,
    ha = Se?.item + c,
    vi = a * ha,
    [Xe, et] = Pe(a + Yr),
    [Ci, bn] = Pe(!1),
    vn = yo(),
    Cn = rr ? 1 : -1,
    Nr = Fr(Dt),
    kn = J ? -a * (Se?.itemWidth + c) : -a * (Se?.itemHeight + c),
    ua = () => Cn * Xe * ha,
    ga = _e
      ? 0
      : qe(Nr, ($) => {
          let Ge = tr(-Dt, -Dt * 2, $);
          return isNaN(Ge) ? 0 : Ge;
        }),
    ki = tr(0, Yr, Xe),
    _i = tr(0, -Yr, Xe);
  va(() => {
    Se?.children !== null && !pa.current && Rr && Nr.set(ua());
  }, [Se, Dt, Cn, vi, Xe, ha, Rr]);
  let _n = () => {
      _e ||
        !Re ||
        !Se.parent ||
        Ci ||
        (Nr.get() !== ua() && Tn(Nr, ua(), x),
        m &&
          wi &&
          (ca.current = setTimeout(() => {
            et(Xe + 1), _n();
          }, H * 1e3)));
    },
    Vr = ($) => {
      et(rr ? Xe - $ : Xe + $);
    },
    Si = ($) => {
      let Ge = tr(0, Yr, Xe),
        ze = tr(0, -Yr, Xe),
        nr = $ - Ge,
        Tr = $ - Math.abs(ze);
      et(rr ? Xe - Tr : Xe + nr);
    },
    Di = () => {
      bn(!0);
    },
    Hi = ($, { offset: Ge, velocity: ze }) => {
      bn(!1);
      let nr = J ? Ge.x : Ge.y,
        Tr = 200,
        Rt = J ? ze.x : ze.y,
        wa = nr < -Se.item / 2,
        ba = nr > Se.item / 2,
        Mi = Math.abs(nr),
        Yt = Math.round(Mi / Se.item),
        Rn = Yt === 0 ? 1 : Yt;
      Rt > Tr ? Vr(-Rn) : Rt < -Tr ? Vr(Rn) : (wa && Vr(Yt), ba && Vr(-Yt));
    };
  ve(() => {
    if (!(!vn || Rr)) return _n(), () => ca.current && clearTimeout(ca.current);
  }, [da, vn, Rr]);
  let Ri = 0,
    Sn = `calc(${100 / C}% - ${c}px + ${c / C}px)`;
  for (let $ = 0; $ < yn; $++)
    da.push(
      ...Qe.map(se, (Ge, ze) => {
        let nr;
        return (
          ze === 0 && (nr = Fe[0]),
          ze === se.length - 1 && (nr = Fe[1]),
          e(
            el,
            {
              ref: Fe[ze],
              slideKey: $ + ze + 'lg',
              index: $,
              width: J && C > 1 ? Sn : '100%',
              height: J ? '100%' : C > 1 ? Sn : '100%',
              size: Se,
              child: Ge,
              numChildren: se?.length,
              wrappedValue: ga,
              childCounter: Ri++,
              gap: c,
              isCanvas: _e,
              isHorizontal: J,
              effectsOpacity: k,
              effectsScale: F,
              effectsRotate: V,
              children: $ + ze,
            },
            $ + ze + 'lg'
          )
        );
      })
    );
  let Yi = J ? 'to right' : 'to bottom',
    Dn = A / 2,
    Ni = 100 - A / 2,
    Vi = $s(j, 0, Dn),
    Ti = 100 - j,
    xa = `linear-gradient(${Yi}, rgba(0, 0, 0, ${W}) ${Vi}%, rgba(0, 0, 0, 1) ${Dn}%, rgba(0, 0, 0, 1) ${Ni}%, rgba(0, 0, 0, ${W}) ${Ti}%)`,
    ya = [],
    Ht = {};
  if (Me) {
    for (let $ = 0; $ < se?.length; $++)
      ya.push(
        e(
          rl,
          {
            dotStyle: { ...al, width: Oe, height: Oe, backgroundColor: wr },
            buttonStyle: Ba,
            selectedOpacity: O,
            opacity: Q,
            onClick: () => Si($),
            wrappedIndex: ki,
            wrappedIndexInverted: _i,
            total: Yr,
            index: $,
            gap: $r,
            padding: Jr,
            isHorizontal: J,
            isInverted: rr,
          },
          $
        )
      );
    ke > 0 &&
      (Ht.backdropFilter =
        Ht.WebkitBackdropFilter =
        Ht.MozBackdropFilter =
          `blur(${ke}px)`);
  }
  let Ei = i
      ? {
          drag: J ? 'x' : 'y',
          onDragStart: Di,
          onDragEnd: Hi,
          dragDirectionLock: !0,
          values: { x: Nr, y: Nr },
          dragMomentum: !1,
        }
      : {},
    Fi = ie === 'top-left' || ie === 'top-mid' || ie === 'top-right',
    Pi = ie === 'bottom-left' || ie === 'bottom-mid' || ie === 'bottom-right',
    Ii = ie === 'top-left' || ie === 'bottom-left',
    Li = ie === 'top-right' || ie === 'bottom-right',
    Hn = ie === 'top-mid' || ie === 'bottom-mid' || ie === 'auto';
  return g('section', {
    style: {
      ...wo,
      padding: De,
      WebkitMaskImage: U ? xa : void 0,
      MozMaskImage: U ? xa : void 0,
      maskImage: U ? xa : void 0,
      opacity: Se?.item !== null ? 1 : za,
      userSelect: 'none',
    },
    onMouseEnter: () => {
      hn(!0), E || un(!1);
    },
    onMouseLeave: () => {
      hn(!1), E || un(!0);
    },
    onMouseDown: ($) => {
      $.preventDefault(), gn(!0);
    },
    onMouseUp: () => gn(!1),
    children: [
      e('div', {
        style: {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 'inherit',
          position: 'absolute',
          inset: 0,
          overflow: I ? 'visible' : 'hidden',
          borderRadius: D,
          userSelect: 'none',
          perspective: _e ? 'none' : q,
        },
        children: e(l.ul, {
          ref: br,
          ...Ei,
          style: {
            ...wo,
            gap: c,
            placeItems: d,
            x: J ? (_e ? kn : ga) : 0,
            y: J ? 0 : _e ? kn : ga,
            flexDirection: J ? 'row' : 'column',
            transformStyle: V !== 0 && !_e ? 'preserve-3d' : void 0,
            cursor: i ? (bi ? 'grabbing' : 'grab') : 'auto',
            userSelect: 'none',
            ...L,
          },
          children: da,
        }),
      }),
      g('fieldset', {
        style: { ...Js },
        'aria-label': 'Slideshow pagination controls',
        className: 'framer--slideshow-controls',
        children: [
          g(l.div, {
            style: {
              position: 'absolute',
              display: 'flex',
              flexDirection: J ? 'row' : 'column',
              justifyContent: Ee ? 'space-between' : 'center',
              gap: Ee ? 'unset' : Ae,
              opacity: Je ? za : 1,
              alignItems: 'center',
              inset: oe,
              top: Ee ? oe : Fi ? $e : 'unset',
              left: Ee ? oe : Ii ? xr : Hn ? 0 : 'unset',
              right: Ee ? oe : Li ? er : Hn ? 0 : 'unset',
              bottom: Ee ? oe : Pi ? fr : 'unset',
            },
            animate: Je && { opacity: yi ? 1 : za },
            transition: x,
            children: [
              e(l.button, {
                type: 'button',
                style: {
                  ...Ba,
                  backgroundColor: ae,
                  width: re,
                  height: re,
                  borderRadius: z,
                  rotate: J ? 0 : 90,
                  display: Z ? 'block' : 'none',
                  pointerEvents: 'auto',
                },
                onClick: () => Vr(-1),
                'aria-label': 'Previous',
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: e('img', {
                  width: re,
                  height: re,
                  src:
                    He ||
                    'https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg',
                  alt: 'Back Arrow',
                }),
              }),
              e(l.button, {
                type: 'button',
                style: {
                  ...Ba,
                  backgroundColor: ae,
                  width: re,
                  height: re,
                  borderRadius: z,
                  rotate: J ? 0 : 90,
                  display: Z ? 'block' : 'none',
                  pointerEvents: 'auto',
                },
                onClick: () => Vr(1),
                'aria-label': 'Next',
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: e('img', {
                  width: re,
                  height: re,
                  src:
                    Le ||
                    'https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg',
                  alt: 'Next Arrow',
                }),
              }),
            ],
          }),
          ya.length > 1
            ? e('div', {
                style: {
                  ...tl,
                  left: J ? '50%' : yr,
                  top: J ? 'unset' : '50%',
                  transform: J ? 'translateX(-50%)' : 'translateY(-50%)',
                  flexDirection: J ? 'row' : 'column',
                  bottom: J ? yr : 'unset',
                  borderRadius: Hr,
                  backgroundColor: me,
                  userSelect: 'none',
                  ...Ht,
                },
                children: ya,
              })
            : null,
        ],
      }),
    ],
  });
}
Te.defaultProps = {
  direction: 'left',
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: 'spring', stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: 'rgba(0,0,0,0.2)',
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
G(Te, {
  slots: {
    type: s.Array,
    title: 'Content',
    control: { type: s.ComponentInstance },
  },
  direction: {
    type: s.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom'],
    optionIcons: [
      'direction-left',
      'direction-right',
      'direction-up',
      'direction-down',
    ],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom'],
    displaySegmentedControl: !0,
    defaultValue: Te.defaultProps.direction,
  },
  autoPlayControl: { type: s.Boolean, title: 'Auto Play', defaultValue: !0 },
  intervalControl: {
    type: s.Number,
    title: 'Interval',
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: 's',
    hidden: (r) => !r.autoPlayControl,
  },
  dragControl: { type: s.Boolean, title: 'Draggable', defaultValue: !1 },
  startFrom: {
    type: s.Number,
    title: 'Current',
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: Te.defaultProps.startFrom,
  },
  effectsOptions: {
    type: s.Object,
    title: 'Effects',
    controls: {
      effectsOpacity: {
        type: s.Number,
        title: 'Opacity',
        defaultValue: Te.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: s.Number,
        title: 'Scale',
        defaultValue: Te.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: s.Number,
        title: 'Perspective',
        defaultValue: Te.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: s.Number,
        title: 'Rotate',
        defaultValue: Te.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: s.Boolean,
        title: 'On Hover',
        enabledTitle: 'Play',
        disabledTitle: 'Pause',
        defaultValue: Te.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: s.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end'],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom'],
        left: ['align-top', 'align-middle', 'align-bottom'],
        top: ['align-left', 'align-center', 'align-right'],
        bottom: ['align-left', 'align-center', 'align-right'],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: !0,
  },
  itemAmount: {
    type: s.Number,
    title: 'Items',
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: Te.defaultProps.itemAmount,
  },
  gap: { type: s.Number, title: 'Gap', min: 0 },
  padding: {
    title: 'Padding',
    type: s.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side'],
    defaultValue: 0,
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    valueLabels: ['T', 'R', 'B', 'L'],
    min: 0,
  },
  borderRadius: {
    type: s.Number,
    title: 'Radius',
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: s.Transition,
    defaultValue: Te.defaultProps.transitionControl,
    title: 'Transition',
  },
  fadeOptions: {
    type: s.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: s.Boolean, title: 'Fade', defaultValue: !1 },
      overflow: {
        type: s.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: s.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: s.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: s.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: s.Object,
    title: 'Arrows',
    controls: {
      showMouseControls: {
        type: s.Boolean,
        title: 'Show',
        defaultValue: Te.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: s.Color,
        title: 'Fill',
        hidden: (r) => !r.showMouseControls,
        defaultValue: Te.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: s.Image,
        title: 'Previous',
        hidden: (r) => !r.showMouseControls,
      },
      rightArrow: {
        type: s.Image,
        title: 'Next',
        hidden: (r) => !r.showMouseControls,
      },
      arrowSize: {
        type: s.Number,
        title: 'Size',
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: Te.defaultProps.arrowOptions.arrowSize,
        hidden: (r) => !r.showMouseControls,
      },
      arrowRadius: {
        type: s.Number,
        title: 'Radius',
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (r) => !r.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: s.Boolean,
        title: 'Fade In',
        defaultValue: !1,
        hidden: (r) => !r.showMouseControls,
      },
      arrowShouldSpace: {
        type: s.Boolean,
        title: 'Distance',
        enabledTitle: 'Space',
        disabledTitle: 'Group',
        defaultValue: Te.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (r) => !r.showMouseControls,
      },
      arrowPosition: {
        type: s.Enum,
        title: 'Position',
        options: [
          'auto',
          'top-left',
          'top-mid',
          'top-right',
          'bottom-left',
          'bottom-mid',
          'bottom-right',
        ],
        optionTitles: [
          'Center',
          'Top Left',
          'Top Middle',
          'Top Right',
          'Bottom Left',
          'Bottom Middle',
          'Bottom Right',
        ],
        hidden: (r) => !r.showMouseControls || r.arrowShouldSpace,
      },
      arrowPadding: {
        type: s.Number,
        title: 'Inset',
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls || !r.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: s.Number,
        title: 'Top',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === 'auto' ||
          r.arrowPosition === 'bottom-mid' ||
          r.arrowPosition === 'bottom-left' ||
          r.arrowPosition === 'bottom-right',
      },
      arrowPaddingBottom: {
        type: s.Number,
        title: 'Bottom',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === 'auto' ||
          r.arrowPosition === 'top-mid' ||
          r.arrowPosition === 'top-left' ||
          r.arrowPosition === 'top-right',
      },
      arrowPaddingRight: {
        type: s.Number,
        title: 'Right',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === 'auto' ||
          r.arrowPosition === 'top-left' ||
          r.arrowPosition === 'top-mid' ||
          r.arrowPosition === 'bottom-left' ||
          r.arrowPosition === 'bottom-mid',
      },
      arrowPaddingLeft: {
        type: s.Number,
        title: 'Left',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === 'auto' ||
          r.arrowPosition === 'top-right' ||
          r.arrowPosition === 'top-mid' ||
          r.arrowPosition === 'bottom-right' ||
          r.arrowPosition === 'bottom-mid',
      },
      arrowGap: {
        type: s.Number,
        title: 'Gap',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls || r.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: s.Object,
    title: 'Dots',
    controls: {
      showProgressDots: { type: s.Boolean, title: 'Show', defaultValue: !1 },
      dotSize: {
        type: s.Number,
        title: 'Size',
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsInset: {
        type: s.Number,
        title: 'Inset',
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsGap: {
        type: s.Number,
        title: 'Gap',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsPadding: {
        type: s.Number,
        title: 'Padding',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsFill: {
        type: s.Color,
        title: 'Fill',
        defaultValue: '#fff',
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBackground: {
        type: s.Color,
        title: 'Backdrop',
        defaultValue: 'rgba(0,0,0,0.2)',
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsRadius: {
        type: s.Number,
        title: 'Radius',
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsOpacity: {
        type: s.Number,
        title: 'Opacity',
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsActiveOpacity: {
        type: s.Number,
        title: 'Current',
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBlur: {
        type: s.Number,
        title: 'Blur',
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
    },
  },
});
var wo = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    placeItems: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    textIndent: 'none',
  },
  Zs = {
    display: 'flex',
    width: '100%',
    height: '100%',
    placeContent: 'center',
    placeItems: 'center',
    flexDirection: 'column',
    color: '#96F',
    background: 'rgba(136, 85, 255, 0.1)',
    fontSize: 11,
    overflow: 'hidden',
    padding: '20px 20px 30px 20px',
  },
  Xs = { fontSize: 32, marginBottom: 10 },
  Gs = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center' },
  Qs = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: 'center',
  },
  Ba = {
    border: 'none',
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    overflow: 'hidden',
    background: 'transparent',
    cursor: 'pointer',
    margin: 0,
    padding: 0,
  },
  Js = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    pointerEvents: 'none',
    userSelect: 'none',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  $s = (r, t, a) => Math.min(Math.max(r, t), a),
  el = te(function (t, a) {
    var n, o;
    let {
        slideKey: m,
        width: i,
        height: d,
        child: c,
        size: f,
        gap: u,
        wrappedValue: y,
        numChildren: b,
        childCounter: _,
        isCanvas: h,
        effects: C,
        effectsOpacity: v,
        effectsScale: H,
        effectsRotate: x,
        isHorizontal: w,
        isLast: D,
        index: R,
      } = t,
      L = (f?.item + u) * _,
      k = [-f?.item, 0, f?.parent - f?.item + u, f?.parent].map((A) => A - L),
      F = !h && qe(y, k, [-x, 0, 0, x]),
      V = !h && qe(y, k, [x, 0, 0, -x]),
      q = !h && qe(y, k, [v, 1, 1, v]),
      E = !h && qe(y, k, [H, 1, 1, H]),
      U = !h && qe(y, k, [1, 1, 0, 0]),
      I = !h && qe(y, (A) => A >= k[1] && A <= k[2]);
    return (
      ve(() => {
        if (I)
          return I.onChange((A) => {
            var j;
            (j = a.current) === null ||
              j === void 0 ||
              j.setAttribute('aria-hidden', !A);
          });
      }, []),
      e(X, {
        inherit: 'id',
        children: e('li', {
          style: { display: 'contents' },
          'aria-hidden': R !== 0,
          children: mr(
            c,
            {
              ref: a,
              key: m + 'child',
              style: {
                ...((n = c.props) === null || n === void 0 ? void 0 : n.style),
                flexShrink: 0,
                userSelect: 'none',
                width: i,
                height: d,
                opacity: q,
                scale: E,
                originX: w ? U : 0.5,
                originY: w ? 0.5 : U,
                rotateY: w ? F : 0,
                rotateX: w ? 0 : V,
              },
              layoutId: c.props.layoutId
                ? c.props.layoutId + '-original-' + R
                : void 0,
            },
            (o = c.props) === null || o === void 0 ? void 0 : o.children
          ),
        }),
      })
    );
  });
function rl({
  selectedOpacity: r,
  opacity: t,
  total: a,
  index: n,
  wrappedIndex: o,
  wrappedIndexInverted: m,
  dotStyle: i,
  buttonStyle: d,
  gap: c,
  padding: f,
  isHorizontal: u,
  isInverted: y,
  ...b
}) {
  let _ = o === n;
  y && (_ = Math.abs(m) === n);
  let h = c / 2,
    C = !u && n > 0 ? h : f,
    v = !u && n !== a - 1 ? h : f,
    H = u && n !== a - 1 ? h : f,
    x = u && n > 0 ? h : f;
  return e('button', {
    'aria-label': `Scroll to page ${n + 1}`,
    type: 'button',
    ...b,
    style: { ...d, padding: `${C}px ${H}px ${v}px ${x}px` },
    children: e(l.div, {
      style: { ...i },
      initial: !1,
      animate: { opacity: _ ? r : t },
      transition: { duration: 0.3 },
    }),
  });
}
var tl = {
    display: 'flex',
    placeContent: 'center',
    placeItems: 'center',
    overflow: 'hidden',
    position: 'absolute',
    pointerEvents: 'auto',
  },
  al = {
    borderRadius: '50%',
    background: 'white',
    cursor: 'pointer',
    border: 'none',
    placeContent: 'center',
    placeItems: 'center',
    padding: 0,
  };
var nl = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
var ol = {
    ...nl,
    borderRadius: 6,
    background: 'rgba(149, 149, 149, 0.1)',
    border: '1px dashed rgba(149, 149, 149, 0.15)',
    color: '#a5a5a5',
    flexDirection: 'column',
  },
  bo = te((r, t) => e('div', { style: ol, ref: t }));
var qa,
  vo = (r) => {
    if (!qa) {
      let t = new Map([
          [
            'bold',
            r.createElement(
              r.Fragment,
              null,
              r.createElement('path', {
                d: 'M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z',
              })
            ),
          ],
          [
            'duotone',
            r.createElement(
              r.Fragment,
              null,
              r.createElement('path', {
                d: 'M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z',
                opacity: '0.2',
              }),
              r.createElement('path', {
                d: 'M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z',
              })
            ),
          ],
          [
            'fill',
            r.createElement(
              r.Fragment,
              null,
              r.createElement('path', {
                d: 'M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z',
              })
            ),
          ],
          [
            'light',
            r.createElement(
              r.Fragment,
              null,
              r.createElement('path', {
                d: 'M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z',
              })
            ),
          ],
          [
            'regular',
            r.createElement(
              r.Fragment,
              null,
              r.createElement('path', {
                d: 'M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z',
              })
            ),
          ],
          [
            'thin',
            r.createElement(
              r.Fragment,
              null,
              r.createElement('path', {
                d: 'M216.13,106.72,136.07,31.13a12,12,0,0,0-16.2.05L39.93,106.67A12,12,0,0,0,36,115.54V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V160a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V115.54A12,12,0,0,0,216.13,106.72ZM212,208a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V160a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v48a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V115.54a4.09,4.09,0,0,1,1.36-3L125.3,37.05a4,4,0,0,1,5.33,0l80.06,75.58a4,4,0,0,1,1.31,3Z',
              })
            ),
          ],
        ]),
        a = r.forwardRef((n, o) =>
          r.createElement('g', { ref: o, ...n }, t.get(n.weight))
        );
      (a.displayName = 'House'), (qa = a);
    }
    return qa;
  };
var Co = {
    onClick: { type: s.EventHandler },
    onMouseDown: { type: s.EventHandler },
    onMouseUp: { type: s.EventHandler },
    onMouseEnter: { type: s.EventHandler },
    onMouseLeave: { type: s.EventHandler },
  },
  il = (r, t) => r.find((a) => a.toLowerCase().includes(t));
function ko(r, t, a = '', n, o) {
  let m = K(() => {
    if (a == null || a?.length === 0) return null;
    let d = a.toLowerCase().replace(/-|\s/g, '');
    var c;
    return (c = o[d]) !== null && c !== void 0 ? c : il(r, d);
  }, [n, a]);
  return t ? n : m;
}
var Ka = [
    'AddressBook',
    'AirTrafficControl',
    'Airplane',
    'AirplaneInFlight',
    'AirplaneLanding',
    'AirplaneTakeoff',
    'AirplaneTilt',
    'Airplay',
    'Alarm',
    'Alien',
    'AlignBottom',
    'AlignBottomSimple',
    'AlignCenterVertical',
    'AlignLeft',
    'AlignLeftSimple',
    'AlignRight',
    'AlignRightSimple',
    'AlignTop',
    'AlignTopSimple',
    'AmazonLogo',
    'Anchor',
    'AnchorSimple',
    'AndroidLogo',
    'AngularLogo',
    'Aperture',
    'AppStoreLogo',
    'AppWindow',
    'AppleLogo',
    'ApplePodcastsLogo',
    'Archive',
    'ArchiveBox',
    'ArchiveTray',
    'Armchair',
    'ArrowArcLeft',
    'ArrowArcRight',
    'ArrowBendDownLeft',
    'ArrowBendDownRight',
    'ArrowBendLeftDown',
    'ArrowBendLeftUp',
    'ArrowBendRightDown',
    'ArrowBendRightUp',
    'ArrowBendUpLeft',
    'ArrowBendUpRight',
    'ArrowCircleDown',
    'ArrowCircleDownLeft',
    'ArrowCircleDownRight',
    'ArrowCircleLeft',
    'ArrowCircleRight',
    'ArrowCircleUp',
    'ArrowCircleUpLeft',
    'ArrowCircleUpRight',
    'ArrowClockwise',
    'ArrowDown',
    'ArrowDownLeft',
    'ArrowDownRight',
    'ArrowElbowDownLeft',
    'ArrowElbowDownRight',
    'ArrowElbowLeft',
    'ArrowElbowLeftDown',
    'ArrowElbowLeftUp',
    'ArrowElbowRight',
    'ArrowElbowRightDown',
    'ArrowElbowRightUp',
    'ArrowElbowUpLeft',
    'ArrowElbowUpRight',
    'ArrowFatDown',
    'ArrowFatLeft',
    'ArrowFatLineDown',
    'ArrowFatLineLeft',
    'ArrowFatLineRight',
    'ArrowFatLineUp',
    'ArrowFatLinesDown',
    'ArrowFatLinesLeft',
    'ArrowFatLinesRight',
    'ArrowFatLinesUp',
    'ArrowFatRight',
    'ArrowFatUp',
    'ArrowLeft',
    'ArrowLineDown',
    'ArrowLineDownLeft',
    'ArrowLineDownRight',
    'ArrowLineLeft',
    'ArrowLineRight',
    'ArrowLineUp',
    'ArrowLineUpLeft',
    'ArrowLineUpRight',
    'ArrowRight',
    'ArrowSquareDown',
    'ArrowSquareDownLeft',
    'ArrowSquareDownRight',
    'ArrowSquareIn',
    'ArrowSquareLeft',
    'ArrowSquareOut',
    'ArrowSquareRight',
    'ArrowSquareUp',
    'ArrowSquareUpLeft',
    'ArrowSquareUpRight',
    'ArrowUDownLeft',
    'ArrowUDownRight',
    'ArrowULeftDown',
    'ArrowULeftUp',
    'ArrowURightDown',
    'ArrowURightUp',
    'ArrowUUpLeft',
    'ArrowUUpRight',
    'ArrowUp',
    'ArrowUpLeft',
    'ArrowUpRight',
    'ArrowsClockwise',
    'ArrowsDownUp',
    'ArrowsHorizontal',
    'ArrowsIn',
    'ArrowsInCardinal',
    'ArrowsInLineVertical',
    'ArrowsInSimple',
    'ArrowsLeftRight',
    'ArrowsMerge',
    'ArrowsOut',
    'ArrowsOutCardinal',
    'ArrowsOutSimple',
    'ArrowsSplit',
    'ArrowsVertical',
    'Article',
    'ArticleMedium',
    'ArticleNyTimes',
    'Asterisk',
    'AsteriskSimple',
    'At',
    'Atom',
    'Baby',
    'Backpack',
    'Backspace',
    'Bag',
    'BagSimple',
    'Balloon',
    'Bandaids',
    'Bank',
    'Barbell',
    'Barcode',
    'Barricade',
    'Baseball',
    'BaseballCap',
    'Basket',
    'Basketball',
    'Bathtub',
    'BatteryCharging',
    'BatteryEmpty',
    'BatteryFull',
    'BatteryHigh',
    'BatteryLow',
    'BatteryMedium',
    'BatteryPlus',
    'BatteryPlusVertical',
    'BatteryVerticalEmpty',
    'BatteryVerticalFull',
    'BatteryVerticalHigh',
    'BatteryVerticalLow',
    'BatteryWarning',
    'Bed',
    'BeerBottle',
    'BeerStein',
    'BehanceLogo',
    'Bell',
    'BellRinging',
    'BellSimple',
    'BellSimpleRinging',
    'BellSimpleSlash',
    'BellSimpleZ',
    'BellSlash',
    'BellZ',
    'BezierCurve',
    'Bicycle',
    'Binoculars',
    'Bird',
    'Bluetooth',
    'BluetoothConnected',
    'BluetoothSlash',
    'BluetoothX',
    'Boat',
    'Bone',
    'Book',
    'BookBookmark',
    'BookOpen',
    'BookOpenText',
    'Bookmark',
    'BookmarkSimple',
    'Bookmarks',
    'BookmarksSimple',
    'Books',
    'Boot',
    'BoundingBox',
    'BowlFood',
    'BracketsAngle',
    'BracketsCurly',
    'BracketsRound',
    'BracketsSquare',
    'Brain',
    'Brandy',
    'Bridge',
    'Briefcase',
    'BriefcaseMetal',
    'Broadcast',
    'Broom',
    'Browser',
    'Browsers',
    'Bug',
    'BugBeetle',
    'BugDroid',
    'Buildings',
    'Bus',
    'Butterfly',
    'Cactus',
    'Cake',
    'Calculator',
    'Calendar',
    'CalendarBlank',
    'CalendarCheck',
    'CalendarPlus',
    'CalendarX',
    'CallBell',
    'Camera',
    'CameraPlus',
    'CameraRotate',
    'CameraSlash',
    'Campfire',
    'Car',
    'CarProfile',
    'CarSimple',
    'Cardholder',
    'Cards',
    'CaretCircleDoubleUp',
    'CaretCircleDown',
    'CaretCircleLeft',
    'CaretCircleRight',
    'CaretCircleUp',
    'CaretCircleUpDown',
    'CaretDoubleDown',
    'CaretDoubleLeft',
    'CaretDoubleRight',
    'CaretDoubleUp',
    'CaretDown',
    'CaretLeft',
    'CaretRight',
    'CaretUp',
    'CaretUpDown',
    'Carrot',
    'CassetteTape',
    'CastleTurret',
    'Cat',
    'CellSignalFull',
    'CellSignalHigh',
    'CellSignalLow',
    'CellSignalMedium',
    'CellSignalNone',
    'CellSignalSlash',
    'CellSignalX',
    'Certificate',
    'Chair',
    'Chalkboard',
    'ChalkboardSimple',
    'ChalkboardTeacher',
    'Champagne',
    'ChargingStation',
    'ChartBar',
    'ChartBarHorizontal',
    'ChartDonut',
    'ChartLine',
    'ChartLineDown',
    'ChartLineUp',
    'ChartPie',
    'ChartPieSlice',
    'ChartPolar',
    'ChartScatter',
    'Chat',
    'ChatCentered',
    'ChatCenteredDots',
    'ChatCenteredText',
    'ChatCircle',
    'ChatCircleDots',
    'ChatCircleText',
    'ChatDots',
    'ChatTeardrop',
    'ChatTeardropDots',
    'ChatTeardropText',
    'ChatText',
    'Chats',
    'ChatsCircle',
    'ChatsTeardrop',
    'Check',
    'CheckCircle',
    'CheckFat',
    'CheckSquare',
    'CheckSquareOffset',
    'Checks',
    'Church',
    'Circle',
    'CircleDashed',
    'CircleHalf',
    'CircleHalfTilt',
    'CircleNotch',
    'CirclesFour',
    'CirclesThree',
    'CirclesThreePlus',
    'Circuitry',
    'Clipboard',
    'ClipboardText',
    'Clock',
    'ClockAfternoon',
    'ClockClockwise',
    'ClockCounterClockwise',
    'ClockCountdown',
    'ClosedCaptioning',
    'Cloud',
    'CloudArrowDown',
    'CloudArrowUp',
    'CloudCheck',
    'CloudFog',
    'CloudLightning',
    'CloudMoon',
    'CloudRain',
    'CloudSlash',
    'CloudSnow',
    'CloudSun',
    'CloudWarning',
    'CloudX',
    'Club',
    'CoatHanger',
    'CodaLogo',
    'Code',
    'CodeBlock',
    'CodeSimple',
    'CodepenLogo',
    'CodesandboxLogo',
    'Coffee',
    'Coin',
    'CoinVertical',
    'Coins',
    'Columns',
    'Command',
    'Compass',
    'CompassTool',
    'ComputerTower',
    'Confetti',
    'ContactlessPayment',
    'Control',
    'Cookie',
    'CookingPot',
    'Copy',
    'CopySimple',
    'Copyleft',
    'Copyright',
    'CornersIn',
    'CornersOut',
    'Couch',
    'Cpu',
    'CreditCard',
    'Crop',
    'Cross',
    'Crosshair',
    'CrosshairSimple',
    'Crown',
    'CrownSimple',
    'Cube',
    'CubeFocus',
    'CubeTransparent',
    'CurrencyBtc',
    'CurrencyCircleDollar',
    'CurrencyCny',
    'CurrencyDollar',
    'CurrencyDollarSimple',
    'CurrencyEth',
    'CurrencyEur',
    'CurrencyGbp',
    'CurrencyInr',
    'CurrencyJpy',
    'CurrencyKrw',
    'CurrencyKzt',
    'CurrencyNgn',
    'CurrencyRub',
    'Cursor',
    'CursorClick',
    'CursorText',
    'Cylinder',
    'Database',
    'Desktop',
    'DesktopTower',
    'Detective',
    'DevToLogo',
    'DeviceMobile',
    'DeviceMobileCamera',
    'DeviceMobileSpeaker',
    'DeviceTablet',
    'DeviceTabletCamera',
    'DeviceTabletSpeaker',
    'Devices',
    'Diamond',
    'DiamondsFour',
    'DiceFive',
    'DiceFour',
    'DiceOne',
    'DiceSix',
    'DiceThree',
    'DiceTwo',
    'Disc',
    'DiscordLogo',
    'Divide',
    'Dna',
    'Dog',
    'Door',
    'DoorOpen',
    'Dot',
    'DotOutline',
    'DotsNine',
    'DotsSix',
    'DotsSixVertical',
    'DotsThree',
    'DotsThreeCircle',
    'DotsThreeOutline',
    'DotsThreeVertical',
    'Download',
    'DownloadSimple',
    'Dress',
    'DribbbleLogo',
    'Drop',
    'DropHalf',
    'DropHalfBottom',
    'DropboxLogo',
    'Ear',
    'EarSlash',
    'Egg',
    'EggCrack',
    'Eject',
    'EjectSimple',
    'Elevator',
    'Engine',
    'Envelope',
    'EnvelopeOpen',
    'EnvelopeSimple',
    'EnvelopeSimpleOpen',
    'Equalizer',
    'Equals',
    'Eraser',
    'EscalatorDown',
    'EscalatorUp',
    'Exam',
    'Exclude',
    'ExcludeSquare',
    'Export',
    'Eye',
    'EyeClosed',
    'EyeSlash',
    'Eyedropper',
    'EyedropperSample',
    'Eyeglasses',
    'FaceMask',
    'FacebookLogo',
    'Factory',
    'Faders',
    'FadersHorizontal',
    'Fan',
    'FastForward',
    'FastForwardCircle',
    'Feather',
    'FigmaLogo',
    'File',
    'FileArchive',
    'FileArrowDown',
    'FileArrowUp',
    'FileAudio',
    'FileCloud',
    'FileCode',
    'FileCss',
    'FileCsv',
    'FileDashed',
    'FileDoc',
    'FileHtml',
    'FileImage',
    'FileJpg',
    'FileJs',
    'FileJsx',
    'FileLock',
    'FileMagnifyingGlass',
    'FileMinus',
    'FilePdf',
    'FilePlus',
    'FilePng',
    'FilePpt',
    'FileRs',
    'FileSql',
    'FileSvg',
    'FileText',
    'FileTs',
    'FileTsx',
    'FileVideo',
    'FileVue',
    'FileX',
    'FileXls',
    'FileZip',
    'Files',
    'FilmReel',
    'FilmScript',
    'FilmSlate',
    'FilmStrip',
    'Fingerprint',
    'FingerprintSimple',
    'FinnTheHuman',
    'Fire',
    'FireExtinguisher',
    'FireSimple',
    'FirstAid',
    'FirstAidKit',
    'Fish',
    'FishSimple',
    'Flag',
    'FlagBanner',
    'FlagCheckered',
    'FlagPennant',
    'Flame',
    'Flashlight',
    'Flask',
    'FloppyDisk',
    'FloppyDiskBack',
    'FlowArrow',
    'Flower',
    'FlowerLotus',
    'FlowerTulip',
    'FlyingSaucer',
    'Folder',
    'FolderDashed',
    'FolderLock',
    'FolderMinus',
    'FolderNotch',
    'FolderNotchMinus',
    'FolderNotchOpen',
    'FolderNotchPlus',
    'FolderOpen',
    'FolderPlus',
    'FolderSimple',
    'FolderSimpleDashed',
    'FolderSimpleLock',
    'FolderSimpleMinus',
    'FolderSimplePlus',
    'FolderSimpleStar',
    'FolderSimpleUser',
    'FolderStar',
    'FolderUser',
    'Folders',
    'Football',
    'Footprints',
    'ForkKnife',
    'FrameCorners',
    'FramerLogo',
    'Function',
    'Funnel',
    'FunnelSimple',
    'GameController',
    'Garage',
    'GasCan',
    'GasPump',
    'Gauge',
    'Gavel',
    'Gear',
    'GearFine',
    'GearSix',
    'GenderFemale',
    'GenderIntersex',
    'GenderMale',
    'GenderNeuter',
    'GenderNonbinary',
    'GenderTransgender',
    'Ghost',
    'Gif',
    'Gift',
    'GitBranch',
    'GitCommit',
    'GitDiff',
    'GitFork',
    'GitMerge',
    'GitPullRequest',
    'GithubLogo',
    'GitlabLogo',
    'GitlabLogoSimple',
    'Globe',
    'GlobeHemisphereEast',
    'GlobeHemisphereWest',
    'GlobeSimple',
    'GlobeStand',
    'Goggles',
    'GoodreadsLogo',
    'GoogleCardboardLogo',
    'GoogleChromeLogo',
    'GoogleDriveLogo',
    'GoogleLogo',
    'GooglePhotosLogo',
    'GooglePlayLogo',
    'GooglePodcastsLogo',
    'Gradient',
    'GraduationCap',
    'Grains',
    'GrainsSlash',
    'Graph',
    'GridFour',
    'GridNine',
    'Guitar',
    'Hamburger',
    'Hammer',
    'Hand',
    'HandCoins',
    'HandEye',
    'HandFist',
    'HandGrabbing',
    'HandHeart',
    'HandPalm',
    'HandPointing',
    'HandSoap',
    'HandSwipeLeft',
    'HandSwipeRight',
    'HandTap',
    'HandWaving',
    'Handbag',
    'HandbagSimple',
    'HandsClapping',
    'HandsPraying',
    'Handshake',
    'HardDrive',
    'HardDrives',
    'Hash',
    'HashStraight',
    'Headlights',
    'Headphones',
    'Headset',
    'Heart',
    'HeartBreak',
    'HeartHalf',
    'HeartStraight',
    'HeartStraightBreak',
    'Heartbeat',
    'Hexagon',
    'HighHeel',
    'HighlighterCircle',
    'Hoodie',
    'Horse',
    'Hourglass',
    'HourglassHigh',
    'HourglassLow',
    'HourglassMedium',
    'HourglassSimple',
    'HourglassSimpleHigh',
    'HourglassSimpleLow',
    'House',
    'HouseLine',
    'HouseSimple',
    'IceCream',
    'IdentificationBadge',
    'IdentificationCard',
    'Image',
    'ImageSquare',
    'Images',
    'ImagesSquare',
    'Infinity',
    'Info',
    'InstagramLogo',
    'Intersect',
    'IntersectSquare',
    'IntersectThree',
    'Jeep',
    'Kanban',
    'Key',
    'KeyReturn',
    'Keyboard',
    'Keyhole',
    'Knife',
    'Ladder',
    'LadderSimple',
    'Lamp',
    'Laptop',
    'Layout',
    'Leaf',
    'Lifebuoy',
    'Lightbulb',
    'LightbulbFilament',
    'Lighthouse',
    'Lightning',
    'LightningA',
    'LightningSlash',
    'LineSegment',
    'LineSegments',
    'Link',
    'LinkBreak',
    'LinkSimple',
    'LinkSimpleBreak',
    'LinkSimpleHorizontal',
    'LinkedinLogo',
    'LinuxLogo',
    'List',
    'ListBullets',
    'ListChecks',
    'ListDashes',
    'ListMagnifyingGlass',
    'ListNumbers',
    'ListPlus',
    'Lock',
    'LockKey',
    'LockKeyOpen',
    'LockLaminated',
    'LockLaminatedOpen',
    'LockOpen',
    'LockSimple',
    'LockSimpleOpen',
    'Lockers',
    'MagicWand',
    'Magnet',
    'MagnetStraight',
    'MagnifyingGlass',
    'MagnifyingGlassMinus',
    'MagnifyingGlassPlus',
    'MapPin',
    'MapPinLine',
    'MapTrifold',
    'MarkerCircle',
    'Martini',
    'MaskHappy',
    'MaskSad',
    'MathOperations',
    'Medal',
    'MedalMilitary',
    'MediumLogo',
    'Megaphone',
    'MegaphoneSimple',
    'MessengerLogo',
    'MetaLogo',
    'Metronome',
    'Microphone',
    'MicrophoneSlash',
    'MicrophoneStage',
    'MicrosoftExcelLogo',
    'MicrosoftOutlookLogo',
    'MicrosoftTeamsLogo',
    'MicrosoftWordLogo',
    'Minus',
    'MinusCircle',
    'MinusSquare',
    'Money',
    'Monitor',
    'MonitorPlay',
    'Moon',
    'MoonStars',
    'Moped',
    'MopedFront',
    'Mosque',
    'Motorcycle',
    'Mountains',
    'Mouse',
    'MouseSimple',
    'MusicNote',
    'MusicNoteSimple',
    'MusicNotes',
    'MusicNotesPlus',
    'MusicNotesSimple',
    'NavigationArrow',
    'Needle',
    'Newspaper',
    'NewspaperClipping',
    'Notches',
    'Note',
    'NoteBlank',
    'NotePencil',
    'Notebook',
    'Notepad',
    'Notification',
    'NotionLogo',
    'NumberCircleEight',
    'NumberCircleFive',
    'NumberCircleFour',
    'NumberCircleNine',
    'NumberCircleOne',
    'NumberCircleSeven',
    'NumberCircleSix',
    'NumberCircleThree',
    'NumberCircleTwo',
    'NumberCircleZero',
    'NumberEight',
    'NumberFive',
    'NumberFour',
    'NumberNine',
    'NumberOne',
    'NumberSeven',
    'NumberSix',
    'NumberSquareEight',
    'NumberSquareFive',
    'NumberSquareFour',
    'NumberSquareNine',
    'NumberSquareOne',
    'NumberSquareSeven',
    'NumberSquareSix',
    'NumberSquareThree',
    'NumberSquareTwo',
    'NumberSquareZero',
    'NumberThree',
    'NumberTwo',
    'NumberZero',
    'Nut',
    'NyTimesLogo',
    'Octagon',
    'OfficeChair',
    'Option',
    'OrangeSlice',
    'Package',
    'PaintBrush',
    'PaintBrushBroad',
    'PaintBrushHousehold',
    'PaintBucket',
    'PaintRoller',
    'Palette',
    'Pants',
    'PaperPlane',
    'PaperPlaneRight',
    'PaperPlaneTilt',
    'Paperclip',
    'PaperclipHorizontal',
    'Parachute',
    'Paragraph',
    'Parallelogram',
    'Park',
    'Password',
    'Path',
    'PatreonLogo',
    'Pause',
    'PauseCircle',
    'PawPrint',
    'PaypalLogo',
    'Peace',
    'Pen',
    'PenNib',
    'PenNibStraight',
    'Pencil',
    'PencilCircle',
    'PencilLine',
    'PencilSimple',
    'PencilSimpleLine',
    'PencilSimpleSlash',
    'PencilSlash',
    'Pentagram',
    'Pepper',
    'Percent',
    'Person',
    'PersonArmsSpread',
    'PersonSimple',
    'PersonSimpleBike',
    'PersonSimpleRun',
    'PersonSimpleThrow',
    'PersonSimpleWalk',
    'Perspective',
    'Phone',
    'PhoneCall',
    'PhoneDisconnect',
    'PhoneIncoming',
    'PhoneOutgoing',
    'PhonePlus',
    'PhoneSlash',
    'PhoneX',
    'PhosphorLogo',
    'Pi',
    'PianoKeys',
    'PictureInPicture',
    'PiggyBank',
    'Pill',
    'PinterestLogo',
    'Pinwheel',
    'Pizza',
    'Placeholder',
    'Planet',
    'Plant',
    'Play',
    'PlayCircle',
    'PlayPause',
    'Playlist',
    'Plug',
    'PlugCharging',
    'Plugs',
    'PlugsConnected',
    'Plus',
    'PlusCircle',
    'PlusMinus',
    'PlusSquare',
    'PokerChip',
    'PoliceCar',
    'Polygon',
    'Popcorn',
    'PottedPlant',
    'Power',
    'Prescription',
    'Presentation',
    'PresentationChart',
    'Printer',
    'Prohibit',
    'ProhibitInset',
    'ProjectorScreen',
    'ProjectorScreenChart',
    'Pulse',
    'PushPin',
    'PushPinSimple',
    'PushPinSimpleSlash',
    'PushPinSlash',
    'PuzzlePiece',
    'QrCode',
    'Question',
    'Queue',
    'Quotes',
    'Radical',
    'Radio',
    'RadioButton',
    'Radioactive',
    'Rainbow',
    'RainbowCloud',
    'ReadCvLogo',
    'Receipt',
    'ReceiptX',
    'Record',
    'Rectangle',
    'Recycle',
    'RedditLogo',
    'Repeat',
    'RepeatOnce',
    'Rewind',
    'RewindCircle',
    'RoadHorizon',
    'Robot',
    'Rocket',
    'RocketLaunch',
    'Rows',
    'Rss',
    'RssSimple',
    'Rug',
    'Ruler',
    'Scales',
    'Scan',
    'Scissors',
    'Scooter',
    'Screencast',
    'ScribbleLoop',
    'Scroll',
    'Seal',
    'SealCheck',
    'SealQuestion',
    'SealWarning',
    'Selection',
    'SelectionAll',
    'SelectionBackground',
    'SelectionForeground',
    'SelectionInverse',
    'SelectionPlus',
    'SelectionSlash',
    'Shapes',
    'Share',
    'ShareFat',
    'ShareNetwork',
    'Shield',
    'ShieldCheck',
    'ShieldCheckered',
    'ShieldChevron',
    'ShieldPlus',
    'ShieldSlash',
    'ShieldStar',
    'ShieldWarning',
    'ShirtFolded',
    'ShootingStar',
    'ShoppingBag',
    'ShoppingBagOpen',
    'ShoppingCart',
    'ShoppingCartSimple',
    'Shower',
    'Shrimp',
    'Shuffle',
    'ShuffleAngular',
    'ShuffleSimple',
    'Sidebar',
    'SidebarSimple',
    'Sigma',
    'SignIn',
    'SignOut',
    'Signature',
    'Signpost',
    'SimCard',
    'Siren',
    'SketchLogo',
    'SkipBack',
    'SkipBackCircle',
    'SkipForward',
    'SkipForwardCircle',
    'Skull',
    'SlackLogo',
    'Sliders',
    'SlidersHorizontal',
    'Slideshow',
    'Smiley',
    'SmileyAngry',
    'SmileyBlank',
    'SmileyMeh',
    'SmileyNervous',
    'SmileySad',
    'SmileySticker',
    'SmileyWink',
    'SmileyXEyes',
    'SnapchatLogo',
    'Sneaker',
    'SneakerMove',
    'Snowflake',
    'SoccerBall',
    'SortAscending',
    'SortDescending',
    'SoundcloudLogo',
    'Spade',
    'Sparkle',
    'SpeakerHifi',
    'SpeakerHigh',
    'SpeakerLow',
    'SpeakerNone',
    'SpeakerSimpleHigh',
    'SpeakerSimpleLow',
    'SpeakerSimpleNone',
    'SpeakerSimpleSlash',
    'SpeakerSimpleX',
    'SpeakerSlash',
    'SpeakerX',
    'Spinner',
    'SpinnerGap',
    'Spiral',
    'SplitHorizontal',
    'SplitVertical',
    'SpotifyLogo',
    'Square',
    'SquareHalf',
    'SquareHalfBottom',
    'SquareLogo',
    'SquareSplitVertical',
    'SquaresFour',
    'Stack',
    'StackOverflowLogo',
    'StackSimple',
    'Stairs',
    'Stamp',
    'Star',
    'StarAndCrescent',
    'StarFour',
    'StarHalf',
    'StarOfDavid',
    'SteeringWheel',
    'Steps',
    'Stethoscope',
    'Sticker',
    'Stool',
    'Stop',
    'StopCircle',
    'Storefront',
    'Strategy',
    'StripeLogo',
    'Student',
    'Subtitles',
    'Subtract',
    'SubtractSquare',
    'Suitcase',
    'SuitcaseRolling',
    'SuitcaseSimple',
    'Sun',
    'SunDim',
    'SunHorizon',
    'Sunglasses',
    'Swap',
    'Swatches',
    'SwimmingPool',
    'Sword',
    'Synagogue',
    'Syringe',
    'TShirt',
    'Table',
    'Tabs',
    'Tag',
    'TagChevron',
    'TagSimple',
    'Target',
    'Taxi',
    'TelegramLogo',
    'Television',
    'TelevisionSimple',
    'TennisBall',
    'Tent',
    'Terminal',
    'TerminalWindow',
    'TestTube',
    'TextAUnderline',
    'TextAa',
    'TextAlignCenter',
    'TextAlignJustify',
    'TextAlignLeft',
    'TextAlignRight',
    'TextB',
    'TextColumns',
    'TextH',
    'TextHFive',
    'TextHFour',
    'TextHOne',
    'TextHSix',
    'TextHThree',
    'TextHTwo',
    'TextIndent',
    'TextItalic',
    'TextOutdent',
    'TextStrikethrough',
    'TextT',
    'TextUnderline',
    'Textbox',
    'Thermometer',
    'ThermometerCold',
    'ThermometerHot',
    'ThermometerSimple',
    'ThumbsDown',
    'ThumbsUp',
    'Ticket',
    'TidalLogo',
    'TiktokLogo',
    'Timer',
    'Tipi',
    'ToggleLeft',
    'ToggleRight',
    'Toilet',
    'ToiletPaper',
    'Toolbox',
    'Tooth',
    'Tote',
    'ToteSimple',
    'Trademark',
    'TrademarkRegistered',
    'TrafficCone',
    'TrafficSign',
    'TrafficSignal',
    'Train',
    'TrainRegional',
    'TrainSimple',
    'Tram',
    'Translate',
    'Trash',
    'TrashSimple',
    'Tray',
    'Tree',
    'TreeEvergreen',
    'TreePalm',
    'TreeStructure',
    'TrendDown',
    'TrendUp',
    'Triangle',
    'Trophy',
    'Truck',
    'TwitchLogo',
    'TwitterLogo',
    'Umbrella',
    'UmbrellaSimple',
    'Unite',
    'UniteSquare',
    'Upload',
    'UploadSimple',
    'Usb',
    'User',
    'UserCircle',
    'UserCircleGear',
    'UserCircleMinus',
    'UserCirclePlus',
    'UserFocus',
    'UserGear',
    'UserList',
    'UserMinus',
    'UserPlus',
    'UserRectangle',
    'UserSquare',
    'UserSwitch',
    'Users',
    'UsersFour',
    'UsersThree',
    'Van',
    'Vault',
    'Vibrate',
    'Video',
    'VideoCamera',
    'VideoCameraSlash',
    'Vignette',
    'VinylRecord',
    'VirtualReality',
    'Virus',
    'Voicemail',
    'Volleyball',
    'Wall',
    'Wallet',
    'Warehouse',
    'Warning',
    'WarningCircle',
    'WarningDiamond',
    'WarningOctagon',
    'Watch',
    'WaveSawtooth',
    'WaveSine',
    'WaveSquare',
    'WaveTriangle',
    'Waveform',
    'Waves',
    'Webcam',
    'WebcamSlash',
    'WebhooksLogo',
    'WechatLogo',
    'WhatsappLogo',
    'Wheelchair',
    'WheelchairMotion',
    'WifiHigh',
    'WifiLow',
    'WifiMedium',
    'WifiNone',
    'WifiSlash',
    'WifiX',
    'Wind',
    'WindowsLogo',
    'Wine',
    'Wrench',
    'X',
    'XCircle',
    'XSquare',
    'YinYang',
    'YoutubeLogo',
  ],
  sl = 'https://framer.com/m/phosphor-icons/',
  _o = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'],
  ll = Ka.reduce((r, t) => ((r[t.toLowerCase()] = t), r), {});
function Ke(r) {
  let {
      color: t,
      selectByList: a,
      iconSearch: n,
      iconSelection: o,
      onClick: m,
      onMouseDown: i,
      onMouseUp: d,
      onMouseEnter: c,
      onMouseLeave: f,
      weight: u,
      mirrored: y,
    } = r,
    b = N(!1),
    _ = ko(Ka, a, n, o, ll),
    [h, C] = Pe(_ === 'Home' ? vo(Ye) : null);
  async function v() {
    try {
      let R = await import(`${sl}${_}.js@0.0.53`);
      b.current && C(R.default(Ye));
    } catch {
      b.current && C(null);
    }
  }
  ve(
    () => (
      (b.current = !0),
      v(),
      () => {
        b.current = !1;
      }
    ),
    [_]
  );
  let x = Ue.current() === Ue.canvas ? e(bo, {}) : null;
  return e(l.div, {
    style: { display: 'contents' },
    onClick: m,
    onMouseEnter: c,
    onMouseLeave: f,
    onMouseDown: i,
    onMouseUp: d,
    children: h
      ? e('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 256 256',
          style: {
            userSelect: 'none',
            width: '100%',
            height: '100%',
            display: 'inline-block',
            fill: t,
            color: t,
            flexShrink: 0,
            transform: y ? 'scale(-1, 1)' : void 0,
          },
          focusable: 'false',
          color: t,
          children: e(h, { color: t, weight: u }),
        })
      : x,
  });
}
Ke.displayName = 'Phosphor';
Ke.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: 'House',
  iconSearch: 'House',
  color: '#66F',
  selectByList: !0,
  weight: 'regular',
  mirrored: !1,
};
G(Ke, {
  selectByList: {
    type: s.Boolean,
    title: 'Select',
    enabledTitle: 'List',
    disabledTitle: 'Search',
    defaultValue: Ke.defaultProps.selectByList,
  },
  iconSelection: {
    type: s.Enum,
    options: Ka,
    defaultValue: Ke.defaultProps.iconSelection,
    title: 'Name',
    hidden: ({ selectByList: r }) => !r,
    description:
      'Find every icon name on the [Phosphor site](https://phosphoricons.com/)',
  },
  iconSearch: {
    type: s.String,
    title: 'Name',
    placeholder: 'Menu, Wifi, Box\u2026',
    hidden: ({ selectByList: r }) => r,
  },
  color: { type: s.Color, title: 'Color', defaultValue: Ke.defaultProps.color },
  weight: {
    type: s.Enum,
    title: 'Weight',
    optionTitles: _o.map((r) => r.charAt(0).toUpperCase() + r.slice(1)),
    options: _o,
    defaultValue: Ke.defaultProps.weight,
  },
  mirrored: {
    type: s.Boolean,
    enabledTitle: 'Yes',
    disabledTitle: 'No',
    defaultValue: Ke.defaultProps.mirrored,
  },
  ...Co,
});
he.loadFonts([]);
var So = [{ explicitInter: !0, fonts: [] }],
  Do = [
    '.framer-5obUG .framer-styles-preset-18e66o5:not(.rich-text-wrapper), .framer-5obUG .framer-styles-preset-18e66o5.rich-text-wrapper a { --framer-link-current-text-color: var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, #000000) /* {"name":"black"} */; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: #0d5418; --framer-link-hover-text-decoration: none; --framer-link-text-color: #b60003; --framer-link-text-decoration: none; }',
  ],
  Ho = 'framer-5obUG';
he.loadFonts([]);
var Zt = [{ explicitInter: !0, fonts: [] }],
  Xt = [
    '.framer-HQTf7 .framer-styles-preset-1oyyjcj:not(.rich-text-wrapper), .framer-HQTf7 .framer-styles-preset-1oyyjcj.rich-text-wrapper a { --framer-link-current-text-color: var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, #f8ffe8) /* {"name":"light green"} */; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: #5e140d; --framer-link-hover-text-decoration: none; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; }',
  ],
  Gt = 'framer-HQTf7';
he.loadFonts([]);
var Yo = [{ explicitInter: !0, fonts: [] }],
  No = [
    '.framer-stk4y .framer-styles-preset-3udxii:not(.rich-text-wrapper), .framer-stk4y .framer-styles-preset-3udxii.rich-text-wrapper a { --framer-link-current-text-color: #3f8a46; --framer-link-current-text-decoration: none; --framer-link-hover-text-color: #7dd665; --framer-link-hover-text-decoration: none; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; }',
  ],
  Vo = 'framer-stk4y';
he.loadFonts(['CUSTOM;Kremlin Regular']);
var To = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  Eo = [
    '.framer-A3gHD .framer-styles-preset-w7geft:not(.rich-text-wrapper), .framer-A3gHD .framer-styles-preset-w7geft.rich-text-wrapper h5 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 32px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, #f8ffe8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-A3gHD .framer-styles-preset-w7geft:not(.rich-text-wrapper), .framer-A3gHD .framer-styles-preset-w7geft.rich-text-wrapper h5 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 30px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, #f8ffe8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-A3gHD .framer-styles-preset-w7geft:not(.rich-text-wrapper), .framer-A3gHD .framer-styles-preset-w7geft.rich-text-wrapper h5 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 24px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, #f8ffe8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Fo = 'framer-A3gHD';
he.loadFonts(['CUSTOM;Kremlin Regular']);
var Po = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  Io = [
    '.framer-zshsy .framer-styles-preset-1hrnm6p:not(.rich-text-wrapper), .framer-zshsy .framer-styles-preset-1hrnm6p.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #b60003; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  Lo = 'framer-zshsy';
var pl = ['urabo5182', 'lOD2rTBam'],
  hl = 'framer-48rYj',
  ul = { lOD2rTBam: 'framer-v-16wzu3h', urabo5182: 'framer-v-ob84kb' };
function gl(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var xl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  yl = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  wl = l(p),
  bl = { menu: 'lOD2rTBam', regular: 'urabo5182' },
  vl = ({ buttonLink: r, buttonText: t, height: a, id: n, width: o, ...m }) => {
    var i, d, c;
    return {
      ...m,
      GdourQ0Kg:
        (i = t ?? m.GdourQ0Kg) !== null && i !== void 0 ? i : 'Buy on Uniswap',
      I5Cx2nwHn: r ?? m.I5Cx2nwHn,
      variant:
        (c = (d = bl[m.variant]) !== null && d !== void 0 ? d : m.variant) !==
          null && c !== void 0
          ? c
          : 'urabo5182',
    };
  },
  Cl = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  kl = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        GdourQ0Kg: c,
        I5Cx2nwHn: f,
        ...u
      } = vl(r),
      {
        baseVariant: y,
        classNames: b,
        clearLoadingGesture: _,
        gestureHandlers: h,
        gestureVariant: C,
        isLoading: v,
        setGestureState: H,
        setVariant: x,
        variants: w,
      } = ye({
        cycleOrder: pl,
        defaultVariant: 'urabo5182',
        variant: d,
        variantClassNames: ul,
      }),
      D = Cl(r, w),
      R = N(null),
      L = ce(),
      k = [Lo],
      F = xe();
    return e(X, {
      id: i ?? L,
      children: e(wl, {
        animate: w,
        initial: !1,
        children: e(yl, {
          value: xl,
          children: e(we, {
            href: f,
            children: e(l.a, {
              ...u,
              ...h,
              className: `${le(hl, ...k, 'framer-ob84kb', m, b)} framer-6ac9md`,
              'data-border': !0,
              'data-framer-name': 'regular',
              layoutDependency: D,
              layoutId: 'urabo5182',
              ref: t ?? R,
              style: {
                '--border-bottom-width': '2px',
                '--border-color':
                  'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                '--border-left-width': '2px',
                '--border-right-width': '2px',
                '--border-style': 'solid',
                '--border-top-width': '2px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                boxShadow: '1px 3px 0px 0px rgba(0, 0, 0, 1)',
                ...o,
              },
              variants: {
                lOD2rTBam: { boxShadow: '1px 2px 0px 0px rgba(0, 0, 0, 1)' },
              },
              ...gl({ lOD2rTBam: { 'data-framer-name': 'menu' } }, y, C),
              children: e(P, {
                __fromCanvasComponent: !0,
                children: e(p, {
                  children: e(l.p, {
                    className: 'framer-styles-preset-1hrnm6p',
                    'data-styles-preset': 'Y62glePjT',
                    children: 'Buy on Uniswap',
                  }),
                }),
                className: 'framer-ts3gfi',
                'data-framer-name': 'Buy on Uniswap',
                fonts: ['Inter'],
                layoutDependency: D,
                layoutId: 'kgNaRCtBy',
                style: { '--framer-paragraph-spacing': '0px' },
                text: c,
                verticalAlignment: 'top',
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  _l = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-48rYj.framer-6ac9md, .framer-48rYj .framer-6ac9md { display: block; }',
    '.framer-48rYj.framer-ob84kb { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 15px 30px 15px 30px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }',
    '.framer-48rYj .framer-ts3gfi { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-48rYj.framer-ob84kb { gap: 0px; } .framer-48rYj.framer-ob84kb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-48rYj.framer-ob84kb > :first-child { margin-top: 0px; } .framer-48rYj.framer-ob84kb > :last-child { margin-bottom: 0px; } }',
    ...Io,
    '.framer-48rYj[data-border="true"]::after, .framer-48rYj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  nt = pe(kl, _l, 'framer-48rYj'),
  hr = nt;
nt.displayName = 'buy button';
nt.defaultProps = { height: 54, width: 229 };
G(nt, {
  variant: {
    options: ['urabo5182', 'lOD2rTBam'],
    optionTitles: ['regular', 'menu'],
    title: 'Variant',
    type: s.Enum,
  },
  GdourQ0Kg: {
    defaultValue: 'Buy on Uniswap',
    displayTextArea: !1,
    title: 'button text',
    type: s.String,
  },
  I5Cx2nwHn: { title: 'button link', type: s.Link },
});
ue(
  nt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+1F00-1FFF',
          url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0370-03FF',
          url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
          url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
          weight: '400',
        },
      ],
    },
    ...be(Po),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Sl = ['u55ieWqM5', 'LBZq7UoTU'],
  Dl = 'framer-zbFKL',
  Hl = { LBZq7UoTU: 'framer-v-18vbddt', u55ieWqM5: 'framer-v-7u2ons' };
function Mo(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var Rl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  Yl = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  Nl = l(p),
  Vl = { burger: 'u55ieWqM5', close: 'LBZq7UoTU' },
  Tl = ({ height: r, id: t, tap2: a, width: n, ...o }) => {
    var m, i;
    return {
      ...o,
      a5XDyMvQy: a ?? o.a5XDyMvQy,
      variant:
        (i = (m = Vl[o.variant]) !== null && m !== void 0 ? m : o.variant) !==
          null && i !== void 0
          ? i
          : 'u55ieWqM5',
    };
  },
  El = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  Fl = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        a5XDyMvQy: c,
        ...f
      } = Tl(r),
      {
        baseVariant: u,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: _,
        gestureVariant: h,
        isLoading: C,
        setGestureState: v,
        setVariant: H,
        variants: x,
      } = ye({
        cycleOrder: Sl,
        defaultVariant: 'u55ieWqM5',
        variant: d,
        variantClassNames: Hl,
      }),
      w = El(r, x),
      { activeVariantCallback: D, delay: R } = Ie(u),
      L = D(async (...E) => {
        if ((v({ isPressed: !1 }), c && (await c(...E)) === !1)) return !1;
      }),
      k = N(null),
      F = ce(),
      V = [],
      q = xe();
    return e(X, {
      id: i ?? F,
      children: e(Nl, {
        animate: x,
        initial: !1,
        children: e(Yl, {
          value: Rl,
          children: e(l.div, {
            ...f,
            ..._,
            className: le(Dl, ...V, 'framer-7u2ons', m, y),
            'data-framer-name': 'burger',
            'data-highlight': !0,
            layoutDependency: w,
            layoutId: 'u55ieWqM5',
            onTap: L,
            ref: t ?? k,
            style: {
              backgroundColor: 'rgb(182, 0, 3)',
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              ...o,
            },
            ...Mo({ LBZq7UoTU: { 'data-framer-name': 'close' } }, u, h),
            children: e(Ne, {
              className: 'framer-wauc5x',
              'data-framer-name': 'icon',
              layout: 'position',
              layoutDependency: w,
              layoutId: 'h_7fCzzHT',
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 15"><path d="M 1.827 3.281 L 18.173 3.281 C 18.97 3.281 19.615 2.652 19.615 1.875 C 19.615 1.098 18.97 0.469 18.173 0.469 L 1.827 0.469 C 1.03 0.469 0.385 1.098 0.385 1.875 C 0.385 2.652 1.03 3.281 1.827 3.281 Z" fill="rgb(248,255,232)"></path><path d="M 18.173 6.094 L 1.827 6.094 C 1.03 6.094 0.385 6.723 0.385 7.5 C 0.385 8.277 1.03 8.906 1.827 8.906 L 18.173 8.906 C 18.97 8.906 19.615 8.277 19.615 7.5 C 19.615 6.723 18.97 6.094 18.173 6.094 Z" fill="rgb(248,255,232)"></path><path d="M 18.173 11.719 L 1.827 11.719 C 1.03 11.719 0.385 12.348 0.385 13.125 C 0.385 13.902 1.03 14.531 1.827 14.531 L 18.173 14.531 C 18.97 14.531 19.615 13.902 19.615 13.125 C 19.615 12.348 18.97 11.719 18.173 11.719 Z" fill="rgb(248,255,232)"></path></svg>',
              svgContentId: 8979563975,
              withExternalLayout: !0,
              ...Mo(
                {
                  LBZq7UoTU: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 15"><path d="M 1.442 2.813 L 17.788 2.813 C 18.585 2.813 19.231 2.183 19.231 1.406 C 19.231 0.629 18.585 0 17.788 0 L 1.442 0 C 0.646 0 0 0.629 0 1.406 C 0 2.183 0.646 2.813 1.442 2.813 Z" transform="translate(0.385 6.469) rotate(-30 9.615 1.406)" fill="rgb(248,255,232)"></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><path d="M 17.788 0 L 1.442 0 C 0.646 0 0 0.629 0 1.406 C 0 2.183 0.646 2.813 1.442 2.813 L 17.788 2.813 C 18.585 2.813 19.231 2.183 19.231 1.406 C 19.231 0.629 18.585 0 17.788 0 Z" transform="translate(0.385 6.719) rotate(30 9.615 1.406)" fill="rgb(248,255,232)"></path></svg>',
                    svgContentId: 8983257864,
                  },
                },
                u,
                h
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Pl = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-zbFKL.framer-1qsaatl, .framer-zbFKL .framer-1qsaatl { display: block; }',
    '.framer-zbFKL.framer-7u2ons { cursor: pointer; height: 50px; overflow: visible; position: relative; width: 50px; }',
    '.framer-zbFKL .framer-wauc5x { flex: none; height: 15px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(50.00000000000002% - 15px / 2); width: 20px; }',
  ],
  ot = pe(Fl, Pl, 'framer-zbFKL'),
  Za = ot;
ot.displayName = 'burger menu';
ot.defaultProps = { height: 50, width: 50 };
G(ot, {
  variant: {
    options: ['u55ieWqM5', 'LBZq7UoTU'],
    optionTitles: ['burger', 'close'],
    title: 'Variant',
    type: s.Enum,
  },
  a5XDyMvQy: { title: 'Tap 2', type: s.EventHandler },
});
ue(ot, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var Il = fe(Ke),
  Ll = fe(hr),
  Ml = fe(Za),
  jr = Ft(Pr(P)),
  Ol = ['EO_UroCgC', 'AeX4xbGKT', 'jMFzaKYw5', 'YkIfYq2PY'],
  Al = 'framer-TcEVh',
  Ul = {
    AeX4xbGKT: 'framer-v-1jvfql4',
    EO_UroCgC: 'framer-v-1ra01w4',
    jMFzaKYw5: 'framer-v-lwq7t6',
    YkIfYq2PY: 'framer-v-1798v07',
  };
function lr(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var Wl = { duration: 0, type: 'tween' },
  Ja = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: 'tween' },
  $a = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: 'spring' },
  it = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transition: $a,
  },
  ur = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: $a,
  },
  jl = { delay: 0.1, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: 'tween' },
  zl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: jl,
    x: 0,
    y: 0,
  },
  zr = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150,
  },
  Bl = { delay: 0.2, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: 'tween' },
  ql = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Bl,
    x: 0,
    y: 0,
  },
  Kl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ja,
    x: 0,
    y: 0,
  },
  Zl = { delay: 0.3, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: 'tween' },
  Xa = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Zl,
    x: 0,
    y: 0,
  },
  Xl = { delay: 0.4, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: 'tween' },
  Ga = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Xl,
    x: 0,
    y: 0,
  },
  Gl = { delay: 0.5, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: 'tween' },
  Qa = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Gl,
    x: 0,
    y: 0,
  },
  Ql = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: $a,
    y: -260,
  },
  Jl = (r, t) => `translate(-50%, -50%) ${t}`,
  $l = (r, t) => `translateX(-50%) ${t}`,
  ef = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  rf = l(p),
  tf = {
    'desktop and tablet open': 'AeX4xbGKT',
    'desktop and tablet': 'EO_UroCgC',
    'mobile open': 'YkIfYq2PY',
    mobile: 'jMFzaKYw5',
  },
  af = ({ height: r, id: t, width: a, ...n }) => {
    var o, m;
    return {
      ...n,
      variant:
        (m = (o = tf[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && m !== void 0
          ? m
          : 'EO_UroCgC',
    };
  },
  nf = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  of = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      { style: o, className: m, layoutId: i, variant: d, ...c } = af(r),
      {
        baseVariant: f,
        classNames: u,
        clearLoadingGesture: y,
        gestureHandlers: b,
        gestureVariant: _,
        isLoading: h,
        setGestureState: C,
        setVariant: v,
        variants: H,
      } = ye({
        cycleOrder: Ol,
        defaultVariant: 'EO_UroCgC',
        variant: d,
        variantClassNames: Ul,
      }),
      x = nf(r, H),
      { activeVariantCallback: w, delay: D } = Ie(f),
      R = w(async (...ae) => {
        v('AeX4xbGKT');
      }),
      L = w(async (...ae) => {
        v('EO_UroCgC');
      }),
      k = w(async (...ae) => {
        v('YkIfYq2PY');
      }),
      F = w(async (...ae) => {
        v('jMFzaKYw5');
      }),
      V = w(async (...ae) => {
        await D(() => v('EO_UroCgC'), 100);
      }),
      q = w(async (...ae) => {
        await D(() => v('jMFzaKYw5'), 100);
      }),
      E = N(null),
      U = () => !['jMFzaKYw5', 'YkIfYq2PY'].includes(f),
      I = () => !!['AeX4xbGKT', 'YkIfYq2PY'].includes(f),
      A = () => !['AeX4xbGKT', 'YkIfYq2PY'].includes(f),
      j = () => f !== 'AeX4xbGKT',
      W = () => f !== 'YkIfYq2PY',
      Z = ce(),
      re = [Ho, Fo, Vo, Gt],
      z = xe();
    return e(X, {
      id: i ?? Z,
      children: e(rf, {
        animate: H,
        initial: !1,
        children: e(ef, {
          value: Wl,
          ...lr({ AeX4xbGKT: { value: Ja }, YkIfYq2PY: { value: Ja } }, f, _),
          children: g(l.div, {
            ...c,
            ...b,
            className: le(Al, ...re, 'framer-1ra01w4', m, u),
            'data-border': !0,
            'data-framer-name': 'desktop and tablet',
            layoutDependency: x,
            layoutId: 'EO_UroCgC',
            ref: t ?? E,
            style: {
              '--border-bottom-width': '4px',
              '--border-color': 'rgb(182, 0, 3)',
              '--border-left-width': '4px',
              '--border-right-width': '4px',
              '--border-style': 'solid',
              '--border-top-width': '4px',
              backgroundColor: 'rgb(248, 255, 232)',
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              boxShadow: '2px 4px 0px 0px rgba(0, 0, 0, 1)',
              ...o,
            },
            ...lr(
              {
                AeX4xbGKT: { 'data-framer-name': 'desktop and tablet open' },
                jMFzaKYw5: { 'data-framer-name': 'mobile' },
                YkIfYq2PY: { 'data-framer-name': 'mobile open' },
              },
              f,
              _
            ),
            children: [
              g(l.div, {
                className: 'framer-skd59',
                'data-framer-name': 'desktop',
                layoutDependency: x,
                layoutId: 'VXcP22dH8',
                children: [
                  e(l.div, {
                    className: 'framer-17cl4dk',
                    'data-framer-name': 'logo',
                    layoutDependency: x,
                    layoutId: 'XkfKekooS',
                    children: e(P, {
                      __fromCanvasComponent: !0,
                      children: e(p, {
                        children: e(l.p, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                            '--framer-font-family':
                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                            '--framer-font-size': '30px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, rgb(166, 18, 21))',
                          },
                          children: e(we, {
                            href: {
                              hash: ':fY1i5DyBD',
                              webPageId: 'augiA20Il',
                            },
                            openInNewTab: !1,
                            smoothScroll: !0,
                            children: e(l.a, {
                              className: 'framer-styles-preset-18e66o5',
                              'data-styles-preset': 'aFBoHagug',
                              children: '$PEPTIN',
                            }),
                          }),
                        }),
                      }),
                      className: 'framer-1n2umff',
                      'data-framer-name': '$MMC',
                      fonts: ['CUSTOM;Kremlin Regular'],
                      layoutDependency: x,
                      layoutId: 'OXvJwsU4u',
                      style: {
                        '--extracted-r6o4lv': 'rgb(166, 18, 21)',
                        '--framer-paragraph-spacing': '0px',
                      },
                      verticalAlignment: 'center',
                      withExternalLayout: !0,
                    }),
                  }),
                  g(l.div, {
                    className: 'framer-hog65k',
                    'data-framer-name': 'nav',
                    layoutDependency: x,
                    layoutId: 'GXv2ggTpM',
                    children: [
                      U() &&
                        g(l.div, {
                          className: 'framer-19mmcuz',
                          'data-framer-name': 'socials',
                          layoutDependency: x,
                          layoutId: 'sdTcOiCoW',
                          children: [
                            e(we, {
                              openInNewTab: !0,
                              children: e(l.a, {
                                className: 'framer-1mop0n framer-ppl9u9',
                                'data-framer-name': 'telegram',
                                layoutDependency: x,
                                layoutId: 'IPGAU9emc',
                                whileHover: it,
                                children: e(Ne, {
                                  className: 'framer-17sohv8',
                                  'data-framer-name': 'icon',
                                  layout: 'position',
                                  layoutDependency: x,
                                  layoutId: 'lygzl5PuY',
                                  opacity: 1,
                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g transform="translate(0 0)" id="ss9627395697_1"><path d="M 0 24 L 0 0 L 24 0 L 24 24 Z" fill="transparent"></path><path d="M 9.417 15.181 L 9.02 20.765 C 9.588 20.765 9.834 20.521 10.129 20.228 L 12.792 17.683 L 18.31 21.724 C 19.322 22.288 20.035 21.991 20.308 20.793 L 23.93 3.821 L 23.931 3.82 C 24.252 2.324 23.39 1.739 22.404 2.106 L 1.114 10.257 C -0.339 10.821 -0.317 11.631 0.867 11.998 L 6.31 13.691 L 18.953 5.78 C 19.548 5.386 20.089 5.604 19.644 5.998 Z" fill="rgb(182, 0, 3)"></path></g></svg>',
                                  svgContentId: 9627395697,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(we, {
                              openInNewTab: !0,
                              children: e(l.a, {
                                className: 'framer-1a8ikev framer-ppl9u9',
                                'data-framer-name': 'discord',
                                layoutDependency: x,
                                layoutId: 'BJ9Ecrb1V',
                                whileHover: it,
                                children: e(M, {
                                  children: e(l.div, {
                                    className: 'framer-9bq9od-container',
                                    layoutDependency: x,
                                    layoutId: 'K9RrOGMUW-container',
                                    children: e(Ke, {
                                      color: 'rgb(182, 0, 3)',
                                      height: '100%',
                                      iconSearch: 'House',
                                      iconSelection: 'TwitterLogo',
                                      id: 'K9RrOGMUW',
                                      layoutId: 'K9RrOGMUW',
                                      mirrored: !1,
                                      selectByList: !0,
                                      style: { height: '100%', width: '100%' },
                                      weight: 'bold',
                                      width: '100%',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      g(l.div, {
                        className: 'framer-1hyj278',
                        'data-framer-name': 'cta',
                        layoutDependency: x,
                        layoutId: 'YhwN8LYMs',
                        children: [
                          e(M, {
                            children: e(l.div, {
                              className: 'framer-1yituex-container',
                              layoutDependency: x,
                              layoutId: 'lPW16aumQ-container',
                              whileHover: ur,
                              children: e(hr, {
                                GdourQ0Kg: 'Buy',
                                height: '100%',
                                id: 'lPW16aumQ',
                                layoutId: 'lPW16aumQ',
                                style: { height: '100%' },
                                variant: 'urabo5182',
                                width: '100%',
                              }),
                            }),
                          }),
                          e(M, {
                            width: '50px',
                            children: e(l.div, {
                              className: 'framer-1jrk7h2-container',
                              layoutDependency: x,
                              layoutId: 'kKlXztS7p-container',
                              whileHover: ur,
                              children: e(Za, {
                                a5XDyMvQy: R,
                                height: '100%',
                                id: 'kKlXztS7p',
                                layoutId: 'kKlXztS7p',
                                style: { height: '100%', width: '100%' },
                                variant: 'u55ieWqM5',
                                width: '100%',
                                ...lr(
                                  {
                                    AeX4xbGKT: {
                                      a5XDyMvQy: L,
                                      variant: 'LBZq7UoTU',
                                    },
                                    jMFzaKYw5: { a5XDyMvQy: k },
                                    YkIfYq2PY: {
                                      a5XDyMvQy: F,
                                      variant: 'LBZq7UoTU',
                                    },
                                  },
                                  f,
                                  _
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              I() &&
                g(l.div, {
                  className: 'framer-ngi5e7',
                  'data-border': !0,
                  'data-framer-name': 'tablet and mobile',
                  layoutDependency: x,
                  layoutId: 'w0b5zlj3D',
                  style: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'rgb(34, 34, 34)',
                    '--border-left-width': '1px',
                    '--border-right-width': '1px',
                    '--border-style': 'solid',
                    '--border-top-width': '1px',
                    backgroundColor:
                      'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                  },
                  variants: {
                    AeX4xbGKT: { backgroundColor: 'rgb(143, 9, 11)' },
                    YkIfYq2PY: { backgroundColor: 'rgb(143, 9, 11)' },
                  },
                  children: [
                    g(l.div, {
                      className: 'framer-1q6s3w8',
                      'data-framer-name': 'nav',
                      layoutDependency: x,
                      layoutId: 'FV1OEHZ3W',
                      children: [
                        e(jr, {
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: zl,
                          children: e(p, {
                            children: e(l.h5, {
                              className: 'framer-styles-preset-w7geft',
                              'data-styles-preset': 'skoodhu14',
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-1lwpl3i, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                              },
                              children: e(we, {
                                href: {
                                  hash: ':rPEgAqoBb',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: e(l.a, {
                                  className: 'framer-styles-preset-3udxii',
                                  'data-styles-preset': 'miOh6BxxI',
                                  children: 'ABOUT',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-tdjwj7',
                          'data-framer-appear-id': 'tdjwj7',
                          'data-highlight': !0,
                          fonts: ['Inter'],
                          initial: zr,
                          layoutDependency: x,
                          layoutId: 'B_1oGrlEM',
                          onTap: V,
                          optimized: !0,
                          style: {
                            '--extracted-1lwpl3i':
                              'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                          },
                          verticalAlignment: 'top',
                          whileHover: ur,
                          withExternalLayout: !0,
                          ...lr(
                            {
                              AeX4xbGKT: {
                                children: e(p, {
                                  children: e(l.h5, {
                                    className: 'framer-styles-preset-w7geft',
                                    'data-styles-preset': 'skoodhu14',
                                    style: {
                                      '--framer-text-color':
                                        'var(--extracted-1lwpl3i, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                                    },
                                    children: e(we, {
                                      href: {
                                        hash: ':rPEgAqoBb',
                                        webPageId: 'augiA20Il',
                                      },
                                      openInNewTab: !1,
                                      smoothScroll: !0,
                                      children: e(l.a, {
                                        className:
                                          'framer-styles-preset-1oyyjcj',
                                        'data-styles-preset': 'gkqXXUcOC',
                                        children: 'ABOUT',
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              YkIfYq2PY: { onTap: q },
                            },
                            f,
                            _
                          ),
                        }),
                        A() &&
                          e(jr, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: ql,
                            children: e(p, {
                              children: e(l.h5, {
                                className: 'framer-styles-preset-w7geft',
                                'data-styles-preset': 'skoodhu14',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-1lwpl3i, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                                },
                                children: e(we, {
                                  href: {
                                    hash: ':nvL53Xnap',
                                    webPageId: 'augiA20Il',
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(l.a, {
                                    className: 'framer-styles-preset-3udxii',
                                    'data-styles-preset': 'miOh6BxxI',
                                    children: 'FEATURES',
                                  }),
                                }),
                              }),
                            }),
                            className: 'framer-o6haba',
                            'data-framer-appear-id': 'o6haba',
                            'data-highlight': !0,
                            fonts: ['Inter'],
                            initial: zr,
                            layoutDependency: x,
                            layoutId: 'QRiJ40PRw',
                            onTap: V,
                            optimized: !0,
                            style: {
                              '--extracted-1lwpl3i':
                                'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                            },
                            verticalAlignment: 'top',
                            whileHover: ur,
                            withExternalLayout: !0,
                          }),
                        e(jr, {
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Kl,
                          children: e(p, {
                            children: e(l.h5, {
                              className: 'framer-styles-preset-w7geft',
                              'data-styles-preset': 'skoodhu14',
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-1lwpl3i, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                              },
                              children: e(we, {
                                href: {
                                  hash: ':M8l5gH3jw',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: e(l.a, {
                                  className: 'framer-styles-preset-3udxii',
                                  'data-styles-preset': 'miOh6BxxI',
                                  children: 'TOKENOMICS',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-1ejs8wg',
                          'data-framer-appear-id': '1ejs8wg',
                          'data-highlight': !0,
                          fonts: ['Inter'],
                          initial: zr,
                          layoutDependency: x,
                          layoutId: 'D5Gu2XeyL',
                          onTap: V,
                          optimized: !0,
                          style: {
                            '--extracted-1lwpl3i':
                              'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                          },
                          variants: {
                            AeX4xbGKT: {
                              '--extracted-1lwpl3i':
                                'var(--token-703b9687-58c7-4c33-93f2-79c7ee64fba4, rgb(226, 254, 165))',
                            },
                          },
                          verticalAlignment: 'top',
                          whileHover: ur,
                          withExternalLayout: !0,
                          ...lr(
                            {
                              AeX4xbGKT: {
                                animate: Xa,
                                children: e(p, {
                                  children: e(l.h5, {
                                    className: 'framer-styles-preset-w7geft',
                                    'data-styles-preset': 'skoodhu14',
                                    style: {
                                      '--framer-text-color':
                                        'var(--extracted-1lwpl3i, var(--token-703b9687-58c7-4c33-93f2-79c7ee64fba4, rgb(226, 254, 165)))',
                                    },
                                    children: e(we, {
                                      href: {
                                        hash: ':M8l5gH3jw',
                                        webPageId: 'augiA20Il',
                                      },
                                      openInNewTab: !1,
                                      smoothScroll: !0,
                                      children: e(l.a, {
                                        className:
                                          'framer-styles-preset-3udxii',
                                        'data-styles-preset': 'miOh6BxxI',
                                        children: 'TOKENOMICS',
                                      }),
                                    }),
                                  }),
                                }),
                              },
                              YkIfYq2PY: { animate: Xa, onTap: q },
                            },
                            f,
                            _
                          ),
                        }),
                        e(jr, {
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Xa,
                          children: e(p, {
                            children: e(l.h5, {
                              className: 'framer-styles-preset-w7geft',
                              'data-styles-preset': 'skoodhu14',
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-1lwpl3i, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                              },
                              children: e(we, {
                                href: {
                                  hash: ':B2nUNr_PH',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: e(l.a, {
                                  className: 'framer-styles-preset-3udxii',
                                  'data-styles-preset': 'miOh6BxxI',
                                  children: 'ROADMAP',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-1ksig6o',
                          'data-framer-appear-id': '1ksig6o',
                          'data-highlight': !0,
                          fonts: ['Inter'],
                          initial: zr,
                          layoutDependency: x,
                          layoutId: 'ltGA92qV4',
                          onTap: V,
                          optimized: !0,
                          style: {
                            '--extracted-1lwpl3i':
                              'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                          },
                          verticalAlignment: 'top',
                          whileHover: ur,
                          withExternalLayout: !0,
                          ...lr(
                            {
                              AeX4xbGKT: { animate: Ga },
                              YkIfYq2PY: { animate: Ga, onTap: q },
                            },
                            f,
                            _
                          ),
                        }),
                        e(jr, {
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Ga,
                          children: e(p, {
                            children: e(l.h5, {
                              className: 'framer-styles-preset-w7geft',
                              'data-styles-preset': 'skoodhu14',
                              style: {
                                '--framer-text-color':
                                  'var(--extracted-1lwpl3i, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                              },
                              children: e(we, {
                                href: {
                                  hash: ':cJTvuGgks',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: e(l.a, {
                                  className: 'framer-styles-preset-3udxii',
                                  'data-styles-preset': 'miOh6BxxI',
                                  children: 'HOW TO BUY',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-gzryi7',
                          'data-framer-appear-id': 'gzryi7',
                          'data-highlight': !0,
                          fonts: ['Inter'],
                          initial: zr,
                          layoutDependency: x,
                          layoutId: 'CH9I7nXS8',
                          onTap: V,
                          optimized: !0,
                          style: {
                            '--extracted-1lwpl3i':
                              'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                          },
                          verticalAlignment: 'top',
                          whileHover: ur,
                          withExternalLayout: !0,
                          ...lr(
                            {
                              AeX4xbGKT: { animate: Qa },
                              YkIfYq2PY: { animate: Qa, onTap: q },
                            },
                            f,
                            _
                          ),
                        }),
                        A() &&
                          e(jr, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Qa,
                            children: e(p, {
                              children: e(l.h5, {
                                className: 'framer-styles-preset-w7geft',
                                'data-styles-preset': 'skoodhu14',
                                style: {
                                  '--framer-text-color':
                                    'var(--extracted-1lwpl3i, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                                },
                                children: e(we, {
                                  href: {
                                    hash: ':gNsm22jQM',
                                    webPageId: 'augiA20Il',
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(l.a, {
                                    className: 'framer-styles-preset-3udxii',
                                    'data-styles-preset': 'miOh6BxxI',
                                    children: 'FAQ',
                                  }),
                                }),
                              }),
                            }),
                            className: 'framer-hnh5ku',
                            'data-framer-appear-id': 'hnh5ku',
                            'data-highlight': !0,
                            fonts: ['Inter'],
                            initial: zr,
                            layoutDependency: x,
                            layoutId: 'KKsEDXH4Q',
                            onTap: V,
                            optimized: !0,
                            style: {
                              '--extracted-1lwpl3i':
                                'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                            },
                            verticalAlignment: 'top',
                            whileHover: ur,
                            withExternalLayout: !0,
                          }),
                        j() &&
                          g(l.div, {
                            className: 'framer-uvpuh1',
                            'data-framer-name': 'socials',
                            layoutDependency: x,
                            layoutId: 'YAHuk8QDz',
                            children: [
                              e(we, {
                                openInNewTab: !0,
                                children: e(l.a, {
                                  className: 'framer-px65ln framer-ppl9u9',
                                  'data-framer-name': 'telegram',
                                  layoutDependency: x,
                                  layoutId: 'B0kzXV0Kf',
                                  whileHover: it,
                                  children: e(Ne, {
                                    className: 'framer-1lz1iql',
                                    'data-framer-name': 'icon',
                                    layout: 'position',
                                    layoutDependency: x,
                                    layoutId: 'dHSAzoTwW',
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 25"><g transform="translate(0 0)" id="ss10605280835_1"><path d="M 0 25 L 0 0 L 25 0 L 25 25 Z" fill="transparent"></path><path d="M 9.81 15.813 L 9.396 21.63 C 9.988 21.63 10.244 21.376 10.551 21.071 L 13.325 18.42 L 19.073 22.629 C 20.127 23.217 20.87 22.907 21.154 21.659 L 24.927 3.98 L 24.928 3.979 C 25.263 2.421 24.365 1.811 23.338 2.194 L 1.161 10.684 C -0.353 11.272 -0.33 12.116 0.903 12.498 L 6.573 14.261 L 19.743 6.021 C 20.363 5.61 20.926 5.837 20.463 6.248 Z" fill="rgb(255, 255, 255)"></path></g></svg>',
                                    svgContentId: 10605280835,
                                    withExternalLayout: !0,
                                    ...lr(
                                      {
                                        YkIfYq2PY: {
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 25"><g transform="translate(0 0)" id="ss12157584333_1"><path d="M 0 25 L 0 0 L 25 0 L 25 25 Z" fill="transparent"></path><path d="M 9.81 15.813 L 9.396 21.63 C 9.988 21.63 10.244 21.376 10.551 21.071 L 13.325 18.42 L 19.073 22.629 C 20.127 23.217 20.87 22.907 21.154 21.659 L 24.927 3.98 L 24.928 3.979 C 25.263 2.421 24.365 1.811 23.338 2.194 L 1.161 10.684 C -0.353 11.272 -0.33 12.116 0.903 12.498 L 6.573 14.261 L 19.743 6.021 C 20.363 5.61 20.926 5.837 20.463 6.248 Z" fill="rgb(255, 255, 255)"></path></g></svg>',
                                          svgContentId: 12157584333,
                                        },
                                      },
                                      f,
                                      _
                                    ),
                                  }),
                                }),
                              }),
                              e(we, {
                                openInNewTab: !0,
                                children: g(l.a, {
                                  className: 'framer-1fjf7bu framer-ppl9u9',
                                  'data-framer-name': 'discord',
                                  layoutDependency: x,
                                  layoutId: 'q5mvnH9LZ',
                                  whileHover: it,
                                  children: [
                                    W() &&
                                      e(Ne, {
                                        className: 'framer-1kjds14',
                                        'data-framer-name': 'icon',
                                        layout: 'position',
                                        layoutDependency: x,
                                        layoutId: 'qHoVtSnnB',
                                        opacity: 1,
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26"><g transform="translate(0 0)" id="ss12420476962_1"><path d="M 0 26 L 0 0 L 26 0 L 26 26 Z" fill="transparent"></path><path d="M 22.01 4.734 C 20.353 3.974 18.576 3.414 16.718 3.093 C 16.684 3.086 16.651 3.103 16.632 3.133 C 16.404 3.539 16.15 4.07 15.974 4.486 C 13.975 4.187 11.987 4.187 10.03 4.486 C 9.853 4.06 9.59 3.539 9.361 3.133 C 9.343 3.103 9.309 3.088 9.276 3.093 C 7.419 3.413 5.642 3.973 3.984 4.734 C 3.969 4.74 3.956 4.75 3.949 4.763 C 0.579 9.799 -0.345 14.711 0.107 19.562 C 0.11 19.586 0.123 19.608 0.141 19.622 C 2.365 21.256 4.519 22.247 6.633 22.904 C 6.667 22.915 6.703 22.902 6.724 22.874 C 7.225 22.191 7.67 21.471 8.053 20.713 C 8.075 20.669 8.054 20.616 8.007 20.599 C 7.3 20.33 6.627 20.003 5.979 19.632 C 5.928 19.602 5.924 19.529 5.97 19.494 C 6.107 19.392 6.243 19.286 6.373 19.178 C 6.397 19.159 6.43 19.154 6.458 19.167 C 10.713 21.11 15.319 21.11 19.524 19.167 C 19.552 19.154 19.585 19.158 19.609 19.178 C 19.739 19.286 19.876 19.393 20.014 19.495 C 20.061 19.529 20.058 19.603 20.006 19.633 C 19.358 20.011 18.685 20.332 17.977 20.599 C 17.93 20.616 17.911 20.67 17.932 20.714 C 18.322 21.471 18.769 22.191 19.26 22.874 C 19.28 22.903 19.317 22.915 19.351 22.905 C 21.475 22.247 23.63 21.256 25.853 19.624 C 25.872 19.609 25.884 19.588 25.886 19.564 C 26.428 13.956 24.978 9.084 22.043 4.766 C 22.037 4.75 22.024 4.74 22.01 4.734 Z M 8.688 16.609 C 7.407 16.609 6.352 15.432 6.352 13.988 C 6.352 12.544 7.386 11.367 8.688 11.367 C 10 11.367 11.046 12.554 11.025 13.988 C 11.025 15.433 9.989 16.609 8.688 16.609 Z M 17.328 16.609 C 16.047 16.609 14.991 15.432 14.991 13.988 C 14.991 12.544 16.026 11.367 17.328 11.367 C 18.64 11.367 19.685 12.554 19.665 13.988 C 19.665 15.433 18.64 16.609 17.328 16.609 Z" fill="rgb(127, 255, 122)"></path></g></svg>',
                                        svgContentId: 12420476962,
                                        withExternalLayout: !0,
                                      }),
                                    e(M, {
                                      children: e(l.div, {
                                        className: 'framer-17vuho8-container',
                                        layoutDependency: x,
                                        layoutId: 'tNytcZBnk-container',
                                        children: e(Ke, {
                                          color: 'rgb(255, 255, 255)',
                                          height: '100%',
                                          iconSearch: 'House',
                                          iconSelection: 'TwitterLogo',
                                          id: 'tNytcZBnk',
                                          layoutId: 'tNytcZBnk',
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: {
                                            height: '100%',
                                            width: '100%',
                                          },
                                          weight: 'bold',
                                          width: '100%',
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              W() &&
                                e(we, {
                                  href: 'https://dexscreener.com/',
                                  openInNewTab: !0,
                                  children: e(l.a, {
                                    className: 'framer-1ssd915 framer-ppl9u9',
                                    'data-framer-name': 'dextools',
                                    layoutDependency: x,
                                    layoutId: 'PqM2GAiQs',
                                    whileHover: it,
                                    children: e(Ne, {
                                      background: {
                                        alt: '',
                                        fit: 'fill',
                                        pixelHeight: 400,
                                        pixelWidth: 400,
                                        src: 'https://framerusercontent.com/images/iFW8DutCrH2WGOpnDP8Va5ZMaow.png',
                                      },
                                      className: 'framer-zy8ncu',
                                      'data-framer-name': 'icon',
                                      layout: 'position',
                                      layoutDependency: x,
                                      layoutId: 'sWPD5bYoF',
                                      opacity: 1,
                                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 28"><g id="ss11600737880_1"><path d="M 0 27.428 L 0 0 L 24 0 L 24 27.428 Z" fill="transparent"></path><path d="M 8.916 1.565 C 7.274 2.416 5.93 3.135 5.93 3.164 C 5.931 3.24 9.872 5.223 10.012 5.218 C 10.075 5.216 10.537 5.005 11.037 4.749 L 11.947 4.284 L 12.941 4.792 L 13.935 5.3 L 15.563 4.573 C 18.015 3.478 18.27 3.358 18.23 3.317 C 18.177 3.264 17.297 2.794 14.911 1.545 C 13.757 0.942 12.638 0.35 12.423 0.23 C 12.208 0.111 12.003 0.014 11.967 0.016 C 11.931 0.018 10.558 0.715 8.916 1.565 Z M 1.713 5.569 L 0.003 6.447 L 0.003 10.298 C 0.003 12.417 0.026 14.15 0.053 14.15 C 0.081 14.15 0.922 13.788 1.922 13.345 L 3.741 12.539 L 3.741 8.479 L 4.63 8.961 C 5.315 9.331 6.001 9.701 6.687 10.07 L 7.854 10.698 L 8.374 10.465 C 8.699 10.318 9.024 10.17 9.349 10.021 C 9.6 9.905 10.215 9.629 10.717 9.408 C 11.218 9.188 11.682 8.965 11.748 8.915 C 11.836 8.848 10.769 8.262 7.804 6.749 C 5.57 5.608 3.669 4.679 3.582 4.683 C 3.494 4.688 2.653 5.086 1.713 5.569 Z M 18.538 5.828 C 17.374 6.35 16.42 6.798 16.419 6.824 C 16.418 6.849 17.053 7.224 17.83 7.657 C 18.606 8.09 19.242 8.467 19.242 8.495 C 19.242 8.524 18.555 8.855 17.715 9.231 C 16.875 9.607 14.751 10.56 12.996 11.349 L 7.115 13.991 C 5.636 14.655 4.302 15.254 4.152 15.322 C 1.13 16.682 0.299 17.059 0.185 17.124 C 0.071 17.189 0.045 17.567 0.024 19.468 L 0 21.736 L 1.529 22.51 L 3.058 23.284 L 5.178 22.333 C 6.343 21.81 7.297 21.355 7.297 21.321 C 7.297 21.288 7.082 21.148 6.819 21.011 C 6.555 20.874 6.012 20.57 5.611 20.336 C 5.209 20.102 4.809 19.887 4.722 19.859 C 4.634 19.83 4.563 19.78 4.565 19.748 C 4.566 19.716 5.5 19.275 6.639 18.769 C 8.852 17.785 10.546 17.027 14.181 15.393 C 15.807 14.663 17.433 13.933 19.059 13.203 C 20.489 12.562 22.15 11.813 22.752 11.539 L 23.846 11.041 L 23.871 8.748 L 23.895 6.455 L 22.345 5.664 C 21.492 5.229 20.763 4.874 20.725 4.875 C 20.686 4.877 19.702 5.305 18.538 5.828 Z M 23.431 14.712 C 23.202 14.823 22.751 15.03 22.428 15.173 C 22.105 15.316 21.492 15.591 21.065 15.784 L 20.29 16.136 L 20.273 18.149 C 20.263 19.256 20.222 20.157 20.182 20.151 C 20.09 20.137 18.637 19.397 17.177 18.619 C 16.123 18.058 16.057 18.036 15.809 18.158 C 15.666 18.228 14.811 18.61 13.908 19.006 C 13.005 19.401 12.237 19.751 12.201 19.782 C 12.165 19.814 13.982 20.793 16.238 21.957 L 20.341 24.075 L 22.094 23.174 C 23.058 22.678 23.877 22.226 23.915 22.169 C 24 22.041 23.993 14.492 23.908 14.503 C 23.874 14.507 23.659 14.601 23.431 14.712 Z M 13.725 24.167 C 13.422 24.296 13.118 24.426 12.814 24.557 C 11.896 24.951 12.076 24.964 10.984 24.424 C 10.257 24.065 9.944 23.954 9.808 24.007 C 9.706 24.048 8.828 24.441 7.856 24.88 C 6.885 25.319 6.057 25.679 6.015 25.679 C 5.608 25.679 6.285 26.081 8.9 27.392 L 11.966 28.929 L 13.256 28.296 C 13.966 27.948 15.397 27.251 16.436 26.747 C 17.476 26.243 18.314 25.817 18.298 25.801 C 18.282 25.785 17.411 25.341 16.362 24.813 L 14.455 23.855 Z" fill="var(--token-02baa3d7-c8fa-4c33-9ed9-8cd7c912f365, rgb(202, 194, 252)) /* {&quot;name&quot;:&quot;light purple&quot;} */"></path></g></svg>',
                                      svgContentId: 11600737880,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                      ],
                    }),
                    e(ne, {
                      background: {
                        alt: '',
                        fit: 'fill',
                        intrinsicHeight: 1064.5,
                        intrinsicWidth: 891.5,
                        pixelHeight: 2129,
                        pixelWidth: 1783,
                        sizes: '346px',
                        src: 'https://framerusercontent.com/images/rTDHqMICHLVsWQRSJVVYM2G3E.png?scale-down-to=2048',
                        srcSet:
                          'https://framerusercontent.com/images/rTDHqMICHLVsWQRSJVVYM2G3E.png?scale-down-to=1024 857w,https://framerusercontent.com/images/rTDHqMICHLVsWQRSJVVYM2G3E.png?scale-down-to=2048 1715w,https://framerusercontent.com/images/rTDHqMICHLVsWQRSJVVYM2G3E.png 1783w',
                      },
                      className: 'framer-1v7fewc',
                      'data-framer-name': 'pouchfella',
                      layoutDependency: x,
                      layoutId: 'LcPoADN4k',
                      style: { rotate: 0 },
                      transformTemplate: Jl,
                      variants: { AeX4xbGKT: { rotate: -2 } },
                      whileHover: Ql,
                      ...lr(
                        {
                          AeX4xbGKT: {
                            background: {
                              alt: '',
                              fit: 'fit',
                              intrinsicHeight: 1064.5,
                              intrinsicWidth: 891.5,
                              pixelHeight: 1e3,
                              pixelWidth: 1e3,
                              positionX: 'center',
                              positionY: 'center',
                              sizes: `calc((${
                                z?.width || '100vw'
                              } - 20px) / 2.624)`,
                              src: 'https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png',
                              srcSet:
                                'https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png?scale-down-to=512 512w,https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png 1000w',
                            },
                            whileHover: void 0,
                          },
                          YkIfYq2PY: {
                            background: {
                              alt: '',
                              fit: 'fill',
                              intrinsicHeight: 1064.5,
                              intrinsicWidth: 891.5,
                              pixelHeight: 1e3,
                              pixelWidth: 1e3,
                              sizes: '153px',
                              src: 'https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png',
                              srcSet:
                                'https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png?scale-down-to=512 512w,https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png 1000w',
                            },
                            transformTemplate: $l,
                            whileHover: void 0,
                          },
                        },
                        f,
                        _
                      ),
                    }),
                  ],
                }),
            ],
          }),
        }),
      }),
    });
  }),
  sf = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-TcEVh.framer-ppl9u9, .framer-TcEVh .framer-ppl9u9 { display: block; }',
    '.framer-TcEVh.framer-1ra01w4 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 70px; justify-content: flex-start; overflow: visible; padding: 10px; position: relative; width: 1332px; }',
    '.framer-TcEVh .framer-skd59 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: 100%; }',
    '.framer-TcEVh .framer-17cl4dk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 0px 12px 0px; position: relative; width: min-content; }',
    '.framer-TcEVh .framer-1n2umff { flex: none; height: 24px; position: relative; white-space: pre-wrap; width: 144px; word-break: break-word; word-wrap: break-word; }',
    '.framer-TcEVh .framer-hog65k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-TcEVh .framer-19mmcuz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-TcEVh .framer-1mop0n { flex: none; height: 25px; overflow: visible; position: relative; text-decoration: none; width: 24px; }',
    '.framer-TcEVh .framer-17sohv8 { flex: none; height: 24px; left: 0px; position: absolute; top: calc(48.00000000000002% - 24px / 2); width: 24px; }',
    '.framer-TcEVh .framer-1a8ikev { flex: none; height: 27px; overflow: visible; position: relative; text-decoration: none; width: 27px; }',
    '.framer-TcEVh .framer-9bq9od-container { flex: none; height: 27px; left: 0px; position: absolute; right: 0px; top: 0px; }',
    '.framer-TcEVh .framer-1hyj278 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-TcEVh .framer-1yituex-container { flex: none; height: 48px; position: relative; width: auto; }',
    '.framer-TcEVh .framer-1jrk7h2-container { flex: none; height: 50px; position: relative; width: 50px; }',
    '.framer-TcEVh .framer-ngi5e7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 48px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-TcEVh .framer-1q6s3w8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-TcEVh .framer-tdjwj7, .framer-TcEVh .framer-o6haba, .framer-TcEVh .framer-1ejs8wg, .framer-TcEVh .framer-1ksig6o, .framer-TcEVh .framer-gzryi7, .framer-TcEVh .framer-hnh5ku { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-TcEVh .framer-uvpuh1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: min-content; }',
    '.framer-TcEVh .framer-px65ln { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
    '.framer-TcEVh .framer-1lz1iql { flex: none; height: 25px; position: relative; width: 26px; }',
    '.framer-TcEVh .framer-1fjf7bu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 27px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
    '.framer-TcEVh .framer-1kjds14 { flex: none; height: 26px; position: relative; width: 26px; }',
    '.framer-TcEVh .framer-17vuho8-container { flex: none; height: 30px; position: relative; width: 34px; }',
    '.framer-TcEVh .framer-1ssd915 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }',
    '.framer-TcEVh .framer-zy8ncu { flex: none; height: 28px; position: relative; width: 24px; }',
    '.framer-TcEVh .framer-1v7fewc { aspect-ratio: 0.8374823860967591 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 413px); left: 81%; overflow: visible; position: absolute; top: 110%; width: 346px; z-index: 1; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TcEVh.framer-1ra01w4, .framer-TcEVh .framer-17cl4dk, .framer-TcEVh .framer-hog65k, .framer-TcEVh .framer-19mmcuz, .framer-TcEVh .framer-1hyj278, .framer-TcEVh .framer-ngi5e7, .framer-TcEVh .framer-1q6s3w8, .framer-TcEVh .framer-uvpuh1, .framer-TcEVh .framer-px65ln, .framer-TcEVh .framer-1fjf7bu, .framer-TcEVh .framer-1ssd915 { gap: 0px; } .framer-TcEVh.framer-1ra01w4 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TcEVh.framer-1ra01w4 > :first-child, .framer-TcEVh .framer-1q6s3w8 > :first-child, .framer-TcEVh .framer-px65ln > :first-child { margin-top: 0px; } .framer-TcEVh.framer-1ra01w4 > :last-child, .framer-TcEVh .framer-1q6s3w8 > :last-child, .framer-TcEVh .framer-px65ln > :last-child { margin-bottom: 0px; } .framer-TcEVh .framer-17cl4dk > *, .framer-TcEVh .framer-ngi5e7 > *, .framer-TcEVh .framer-1fjf7bu > *, .framer-TcEVh .framer-1ssd915 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-TcEVh .framer-17cl4dk > :first-child, .framer-TcEVh .framer-hog65k > :first-child, .framer-TcEVh .framer-19mmcuz > :first-child, .framer-TcEVh .framer-1hyj278 > :first-child, .framer-TcEVh .framer-ngi5e7 > :first-child, .framer-TcEVh .framer-uvpuh1 > :first-child, .framer-TcEVh .framer-1fjf7bu > :first-child, .framer-TcEVh .framer-1ssd915 > :first-child { margin-left: 0px; } .framer-TcEVh .framer-17cl4dk > :last-child, .framer-TcEVh .framer-hog65k > :last-child, .framer-TcEVh .framer-19mmcuz > :last-child, .framer-TcEVh .framer-1hyj278 > :last-child, .framer-TcEVh .framer-ngi5e7 > :last-child, .framer-TcEVh .framer-uvpuh1 > :last-child, .framer-TcEVh .framer-1fjf7bu > :last-child, .framer-TcEVh .framer-1ssd915 > :last-child { margin-right: 0px; } .framer-TcEVh .framer-hog65k > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-TcEVh .framer-19mmcuz > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-TcEVh .framer-1hyj278 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-TcEVh .framer-1q6s3w8 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-TcEVh .framer-uvpuh1 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-TcEVh .framer-px65ln > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }',
    '.framer-TcEVh.framer-v-1jvfql4.framer-1ra01w4 { gap: 8px; height: min-content; overflow: hidden; will-change: var(--framer-will-change-override, transform); }',
    '.framer-TcEVh.framer-v-1jvfql4 .framer-tdjwj7 { order: 0; }',
    '.framer-TcEVh.framer-v-1jvfql4 .framer-1ejs8wg { order: 2; }',
    '.framer-TcEVh.framer-v-1jvfql4 .framer-1ksig6o { order: 3; }',
    '.framer-TcEVh.framer-v-1jvfql4 .framer-gzryi7 { order: 4; }',
    '.framer-TcEVh.framer-v-1jvfql4 .framer-1v7fewc { height: var(--framer-aspect-ratio-supported, 597px); left: 83%; top: 67%; width: 38%; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TcEVh.framer-v-1jvfql4.framer-1ra01w4 { gap: 0px; } .framer-TcEVh.framer-v-1jvfql4.framer-1ra01w4 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-TcEVh.framer-v-1jvfql4.framer-1ra01w4 > :first-child { margin-top: 0px; } .framer-TcEVh.framer-v-1jvfql4.framer-1ra01w4 > :last-child { margin-bottom: 0px; } }',
    '.framer-TcEVh.framer-v-lwq7t6.framer-1ra01w4 { width: 390px; }',
    '.framer-TcEVh.framer-v-1798v07.framer-1ra01w4 { gap: 8px; height: min-content; overflow: hidden; width: 390px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-TcEVh.framer-v-1798v07 .framer-ngi5e7 { flex-direction: column; padding: 40px 32px 160px 32px; }',
    '.framer-TcEVh.framer-v-1798v07 .framer-1q6s3w8 { gap: 32px; }',
    '.framer-TcEVh.framer-v-1798v07 .framer-1v7fewc { bottom: -25px; height: unset; left: 54%; top: 341px; width: var(--framer-aspect-ratio-supported, 153px); }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TcEVh.framer-v-1798v07.framer-1ra01w4, .framer-TcEVh.framer-v-1798v07 .framer-ngi5e7, .framer-TcEVh.framer-v-1798v07 .framer-1q6s3w8 { gap: 0px; } .framer-TcEVh.framer-v-1798v07.framer-1ra01w4 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-TcEVh.framer-v-1798v07.framer-1ra01w4 > :first-child, .framer-TcEVh.framer-v-1798v07 .framer-ngi5e7 > :first-child, .framer-TcEVh.framer-v-1798v07 .framer-1q6s3w8 > :first-child { margin-top: 0px; } .framer-TcEVh.framer-v-1798v07.framer-1ra01w4 > :last-child, .framer-TcEVh.framer-v-1798v07 .framer-ngi5e7 > :last-child, .framer-TcEVh.framer-v-1798v07 .framer-1q6s3w8 > :last-child { margin-bottom: 0px; } .framer-TcEVh.framer-v-1798v07 .framer-ngi5e7 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-TcEVh.framer-v-1798v07 .framer-1q6s3w8 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }',
    ...Do,
    ...Eo,
    ...No,
    ...Xt,
    '.framer-TcEVh[data-border="true"]::after, .framer-TcEVh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  st = pe(of, sf, 'framer-TcEVh'),
  en = st;
st.displayName = 'header';
st.defaultProps = { height: 70, width: 1332 };
G(st, {
  variant: {
    options: ['EO_UroCgC', 'AeX4xbGKT', 'jMFzaKYw5', 'YkIfYq2PY'],
    optionTitles: [
      'desktop and tablet',
      'desktop and tablet open',
      'mobile',
      'mobile open',
    ],
    title: 'Variant',
    type: s.Enum,
  },
});
ue(
  st,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+1F00-1FFF',
          url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0370-03FF',
          url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
          url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
          weight: '400',
        },
      ],
    },
    ...Il,
    ...Ll,
    ...Ml,
    ...be(So),
    ...be(To),
    ...be(Yo),
    ...be(Zt),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var lf = ['YLbU9SENw'],
  ff = 'framer-TbqPc',
  mf = { YLbU9SENw: 'framer-v-10rdlfa' };
var cf = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  df = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  pf = l(p),
  hf = ({ background: r, height: t, id: a, title: n, width: o, ...m }) => {
    var i, d;
    return {
      ...m,
      jU15QRu8u:
        (i = r ?? m.jU15QRu8u) !== null && i !== void 0
          ? i
          : 'var(--token-02baa3d7-c8fa-4c33-9ed9-8cd7c912f365, rgb(185, 164, 233))',
      UT6Uu4wmc:
        (d = n ?? m.UT6Uu4wmc) !== null && d !== void 0 ? d : 'LP locked',
    };
  },
  uf = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  gf = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        UT6Uu4wmc: c,
        jU15QRu8u: f,
        ...u
      } = hf(r),
      {
        baseVariant: y,
        classNames: b,
        clearLoadingGesture: _,
        gestureHandlers: h,
        gestureVariant: C,
        isLoading: v,
        setGestureState: H,
        setVariant: x,
        variants: w,
      } = ye({
        cycleOrder: lf,
        defaultVariant: 'YLbU9SENw',
        variant: d,
        variantClassNames: mf,
      }),
      D = uf(r, w),
      R = N(null),
      L = ce(),
      k = [],
      F = xe();
    return e(X, {
      id: i ?? L,
      children: e(pf, {
        animate: w,
        initial: !1,
        children: e(df, {
          value: cf,
          children: e(l.div, {
            ...u,
            ...h,
            className: le(ff, ...k, 'framer-10rdlfa', m, b),
            'data-border': !0,
            'data-framer-name': 'base',
            layoutDependency: D,
            layoutId: 'YLbU9SENw',
            ref: t ?? R,
            style: {
              '--border-bottom-width': '4px',
              '--border-color': 'rgb(255, 255, 255)',
              '--border-left-width': '4px',
              '--border-right-width': '4px',
              '--border-style': 'solid',
              '--border-top-width': '4px',
              backgroundColor: f,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...o,
            },
            children: e(l.div, {
              className: 'framer-2b6s1q',
              layoutDependency: D,
              layoutId: 'uoJebQLpd',
              children: e(P, {
                __fromCanvasComponent: !0,
                children: e(p, {
                  children: e(l.h6, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                      '--framer-font-family':
                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                      '--framer-font-size': '25px',
                      '--framer-line-height': '20px',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color':
                        'var(--extracted-1w1cjl5, rgb(255, 255, 255))',
                    },
                    children: 'LP locked',
                  }),
                }),
                className: 'framer-y63zgv',
                'data-framer-name': 'LP locked',
                fonts: ['CUSTOM;Kremlin Regular'],
                layoutDependency: D,
                layoutId: 'BOvfcFYdk',
                style: {
                  '--extracted-1w1cjl5': 'rgb(255, 255, 255)',
                  '--framer-paragraph-spacing': '0px',
                },
                text: c,
                verticalAlignment: 'top',
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  xf = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-TbqPc.framer-1n4gnby, .framer-TbqPc .framer-1n4gnby { display: block; }',
    '.framer-TbqPc.framer-10rdlfa { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 74px; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 211px; }',
    '.framer-TbqPc .framer-2b6s1q { flex: none; height: 20px; overflow: visible; position: relative; width: 143px; }',
    '.framer-TbqPc .framer-y63zgv { bottom: 0px; flex: none; height: 100%; left: -1px; position: absolute; white-space: pre-wrap; width: 127%; word-break: break-word; word-wrap: break-word; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TbqPc.framer-10rdlfa { gap: 0px; } .framer-TbqPc.framer-10rdlfa > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-TbqPc.framer-10rdlfa > :first-child { margin-left: 0px; } .framer-TbqPc.framer-10rdlfa > :last-child { margin-right: 0px; } }',
    '.framer-TbqPc[data-border="true"]::after, .framer-TbqPc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  lt = pe(gf, xf, 'framer-TbqPc'),
  Qt = lt;
lt.displayName = 'chart legend';
lt.defaultProps = { height: 74, width: 211 };
G(lt, {
  UT6Uu4wmc: {
    defaultValue: 'LP locked',
    displayTextArea: !1,
    title: 'Title',
    type: s.String,
  },
  jU15QRu8u: {
    defaultValue:
      'var(--token-02baa3d7-c8fa-4c33-9ed9-8cd7c912f365, rgb(185, 164, 233)) /* {"name":"light purple"} */',
    title: 'Background',
    type: s.Color,
  },
});
ue(
  lt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
he.loadFonts(['CUSTOM;Kremlin Regular']);
var Jt = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  $t = [
    '.framer-4meFA .framer-styles-preset-w8f8rx:not(.rich-text-wrapper), .framer-4meFA .framer-styles-preset-w8f8rx.rich-text-wrapper h4 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-4meFA .framer-styles-preset-w8f8rx:not(.rich-text-wrapper), .framer-4meFA .framer-styles-preset-w8f8rx.rich-text-wrapper h4 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-4meFA .framer-styles-preset-w8f8rx:not(.rich-text-wrapper), .framer-4meFA .framer-styles-preset-w8f8rx.rich-text-wrapper h4 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 21px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  ea = 'framer-4meFA';
he.loadFonts(['CUSTOM;Troika Regular']);
var ra = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Troika Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/W1kBe3t4YAsECqsQa1Yu22IYSg.woff2',
        },
      ],
    },
  ],
  ta = [
    '.framer-mZD4v .framer-styles-preset-17f9v5x:not(.rich-text-wrapper), .framer-mZD4v .framer-styles-preset-17f9v5x.rich-text-wrapper p { --framer-font-family: "Troika Regular", "Troika Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-mZD4v .framer-styles-preset-17f9v5x:not(.rich-text-wrapper), .framer-mZD4v .framer-styles-preset-17f9v5x.rich-text-wrapper p { --framer-font-family: "Troika Regular", "Troika Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-mZD4v .framer-styles-preset-17f9v5x:not(.rich-text-wrapper), .framer-mZD4v .framer-styles-preset-17f9v5x.rich-text-wrapper p { --framer-font-family: "Troika Regular", "Troika Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  aa = 'framer-mZD4v';
var yf = ['dJ4LyZYXY', 'Ze9yV_2mq'],
  wf = 'framer-wgJjt',
  bf = { dJ4LyZYXY: 'framer-v-fh5sov', Ze9yV_2mq: 'framer-v-2x5ih0' };
function Uo(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var vf = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  Cf = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  kf = l(p),
  _f = { checked: 'dJ4LyZYXY', unchecked: 'Ze9yV_2mq' },
  Sf = ({ height: r, id: t, width: a, ...n }) => {
    var o, m;
    return {
      ...n,
      variant:
        (m = (o = _f[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && m !== void 0
          ? m
          : 'dJ4LyZYXY',
    };
  },
  Df = (r, t) => t.join('-') + r.layoutDependency,
  Hf = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      { style: o, className: m, layoutId: i, variant: d, ...c } = Sf(r),
      {
        baseVariant: f,
        classNames: u,
        gestureVariant: y,
        setGestureState: b,
        setVariant: _,
        variants: h,
      } = ye({
        cycleOrder: yf,
        defaultVariant: 'dJ4LyZYXY',
        variant: d,
        variantClassNames: bf,
      }),
      C = Df(r, h),
      v = N(null),
      H = ce(),
      x = [],
      w = xe();
    return e(X, {
      id: i ?? H,
      children: e(kf, {
        animate: h,
        initial: !1,
        children: e(Cf, {
          value: vf,
          children: e(l.div, {
            ...c,
            className: le(wf, ...x, 'framer-fh5sov', m, u),
            'data-framer-name': 'checked',
            layoutDependency: C,
            layoutId: 'dJ4LyZYXY',
            onHoverEnd: () => b({ isHovered: !1 }),
            onHoverStart: () => b({ isHovered: !0 }),
            onTap: () => b({ isPressed: !1 }),
            onTapCancel: () => b({ isPressed: !1 }),
            onTapStart: () => b({ isPressed: !0 }),
            ref: t ?? v,
            style: { ...o },
            ...Uo({ Ze9yV_2mq: { 'data-framer-name': 'unchecked' } }, f, y),
            children: e(Ne, {
              className: 'framer-16e005x',
              'data-framer-name': 'icon',
              layout: 'position',
              layoutDependency: C,
              layoutId: 'H8okbqNay',
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 15 2.5 L 5 2.5 C 4.337 2.5 3.701 2.763 3.232 3.232 C 2.763 3.701 2.5 4.337 2.5 5 L 2.5 15 C 2.5 15.663 2.763 16.299 3.232 16.768 C 3.701 17.237 4.337 17.5 5 17.5 L 15 17.5 C 15.663 17.5 16.299 17.237 16.768 16.768 C 17.237 16.299 17.5 15.663 17.5 15 L 17.5 5 C 17.5 4.337 17.237 3.701 16.768 3.232 C 16.299 2.763 15.663 2.5 15 2.5 Z M 15.833 15 C 15.833 15.221 15.745 15.433 15.589 15.589 C 15.433 15.745 15.221 15.833 15 15.833 L 5 15.833 C 4.779 15.833 4.567 15.745 4.411 15.589 C 4.254 15.433 4.167 15.221 4.167 15 L 4.167 5 C 4.167 4.779 4.254 4.567 4.411 4.411 C 4.567 4.254 4.779 4.167 5 4.167 L 15 4.167 C 15.221 4.167 15.433 4.254 15.589 4.411 C 15.745 4.567 15.833 4.779 15.833 5 Z" fill="rgb(35,31,32)"></path><path d="M 12.25 6.992 L 9.1 11.158 L 7.742 9.4 C 7.606 9.225 7.406 9.112 7.186 9.085 C 6.967 9.057 6.745 9.118 6.571 9.254 C 6.396 9.39 6.283 9.59 6.255 9.809 C 6.228 10.029 6.289 10.25 6.425 10.425 L 8.45 13.017 C 8.528 13.116 8.629 13.196 8.743 13.251 C 8.857 13.306 8.982 13.334 9.108 13.333 C 9.236 13.333 9.361 13.304 9.475 13.247 C 9.589 13.191 9.689 13.109 9.767 13.008 L 13.575 8.008 C 13.71 7.832 13.769 7.608 13.739 7.388 C 13.71 7.168 13.594 6.968 13.417 6.833 C 13.24 6.699 13.017 6.639 12.796 6.669 C 12.576 6.699 12.377 6.815 12.242 6.992 Z" fill="rgb(35,31,32)"></path></svg>',
              svgContentId: 2412111244,
              withExternalLayout: !0,
              ...Uo(
                {
                  Ze9yV_2mq: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 15 2.5 L 5 2.5 C 4.337 2.5 3.701 2.763 3.232 3.232 C 2.763 3.701 2.5 4.337 2.5 5 L 2.5 15 C 2.5 15.663 2.763 16.299 3.232 16.768 C 3.701 17.237 4.337 17.5 5 17.5 L 15 17.5 C 15.663 17.5 16.299 17.237 16.768 16.768 C 17.237 16.299 17.5 15.663 17.5 15 L 17.5 5 C 17.5 4.337 17.237 3.701 16.768 3.232 C 16.299 2.763 15.663 2.5 15 2.5 Z M 15.833 15 C 15.833 15.221 15.745 15.433 15.589 15.589 C 15.433 15.745 15.221 15.833 15 15.833 L 5 15.833 C 4.779 15.833 4.567 15.745 4.411 15.589 C 4.254 15.433 4.167 15.221 4.167 15 L 4.167 5 C 4.167 4.779 4.254 4.567 4.411 4.411 C 4.567 4.254 4.779 4.167 5 4.167 L 15 4.167 C 15.221 4.167 15.433 4.254 15.589 4.411 C 15.745 4.567 15.833 4.779 15.833 5 Z" fill="rgb(35,31,32)"></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path></svg>',
                    svgContentId: 3755280020,
                  },
                },
                f,
                y
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Rf = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-wgJjt.framer-17brhcp, .framer-wgJjt .framer-17brhcp { display: block; }',
    '.framer-wgJjt.framer-fh5sov { height: 20px; overflow: hidden; position: relative; width: 20px; }',
    '.framer-wgJjt .framer-16e005x { flex: none; height: 20px; left: 0px; position: absolute; top: 0px; width: 20px; }',
  ],
  ft = pe(Hf, Rf, 'framer-wgJjt'),
  rn = ft;
ft.displayName = 'roadmap check';
ft.defaultProps = { height: 20, width: 20 };
G(ft, {
  variant: {
    options: ['dJ4LyZYXY', 'Ze9yV_2mq'],
    optionTitles: ['checked', 'unchecked'],
    title: 'Variant',
    type: s.Enum,
  },
});
ue(ft, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var Yf = fe(rn),
  Nf = ['afKNWPpoW', 'qS4lWnwKI'],
  Vf = 'framer-HfIMC',
  Tf = { afKNWPpoW: 'framer-v-w8ord', qS4lWnwKI: 'framer-v-uwcbt7' };
function Wo(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var Ef = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  Ff = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  Pf = l(p),
  If = { 'to do': 'qS4lWnwKI', done: 'afKNWPpoW' },
  Lf = ({ event: r, height: t, id: a, width: n, ...o }) => {
    var m, i, d;
    return {
      ...o,
      LStEqEWaj:
        (m = r ?? o.LStEqEWaj) !== null && m !== void 0 ? m : 'Research',
      variant:
        (d = (i = If[o.variant]) !== null && i !== void 0 ? i : o.variant) !==
          null && d !== void 0
          ? d
          : 'afKNWPpoW',
    };
  },
  Mf = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  Of = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        LStEqEWaj: c,
        ...f
      } = Lf(r),
      {
        baseVariant: u,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: _,
        gestureVariant: h,
        isLoading: C,
        setGestureState: v,
        setVariant: H,
        variants: x,
      } = ye({
        cycleOrder: Nf,
        defaultVariant: 'afKNWPpoW',
        variant: d,
        variantClassNames: Tf,
      }),
      w = Mf(r, x),
      D = N(null),
      R = ce(),
      L = [aa],
      k = xe();
    return e(X, {
      id: i ?? R,
      children: e(Pf, {
        animate: x,
        initial: !1,
        children: e(Ff, {
          value: Ef,
          children: g(l.div, {
            ...f,
            ..._,
            className: le(Vf, ...L, 'framer-w8ord', m, y),
            'data-framer-name': 'done',
            layoutDependency: w,
            layoutId: 'afKNWPpoW',
            ref: t ?? D,
            style: { ...o },
            ...Wo({ qS4lWnwKI: { 'data-framer-name': 'to do' } }, u, h),
            children: [
              e(M, {
                width: '20px',
                children: e(l.div, {
                  className: 'framer-1kcola9-container',
                  layoutDependency: w,
                  layoutId: 'Zb6U0uL1_-container',
                  children: e(rn, {
                    height: '100%',
                    id: 'Zb6U0uL1_',
                    layoutId: 'Zb6U0uL1_',
                    style: { height: '100%', width: '100%' },
                    variant: 'dJ4LyZYXY',
                    width: '100%',
                    ...Wo({ qS4lWnwKI: { variant: 'Ze9yV_2mq' } }, u, h),
                  }),
                }),
              }),
              e(P, {
                __fromCanvasComponent: !0,
                children: e(p, {
                  children: e(l.p, {
                    className: 'framer-styles-preset-17f9v5x',
                    'data-styles-preset': 'mMFVfJbPs',
                    style: {
                      '--framer-text-color':
                        'var(--extracted-r6o4lv, var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)))',
                    },
                    children: 'Research',
                  }),
                }),
                className: 'framer-yob4wu',
                'data-framer-name': 'Research',
                fonts: ['Inter'],
                layoutDependency: w,
                layoutId: 'kCWt6mEqs',
                style: {
                  '--extracted-r6o4lv':
                    'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                  '--framer-paragraph-spacing': '0px',
                },
                text: c,
                verticalAlignment: 'top',
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Af = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-HfIMC.framer-nkd850, .framer-HfIMC .framer-nkd850 { display: block; }',
    '.framer-HfIMC.framer-w8ord { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-HfIMC .framer-1kcola9-container { flex: none; height: 20px; position: relative; width: 20px; }',
    '.framer-HfIMC .framer-yob4wu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HfIMC.framer-w8ord { gap: 0px; } .framer-HfIMC.framer-w8ord > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-HfIMC.framer-w8ord > :first-child { margin-left: 0px; } .framer-HfIMC.framer-w8ord > :last-child { margin-right: 0px; } }',
    ...ta,
  ],
  mt = pe(Of, Af, 'framer-HfIMC'),
  gr = mt;
mt.displayName = 'roadmap event';
mt.defaultProps = { height: 20, width: 92 };
G(mt, {
  variant: {
    options: ['afKNWPpoW', 'qS4lWnwKI'],
    optionTitles: ['done', 'to do'],
    title: 'Variant',
    type: s.Enum,
  },
  LStEqEWaj: {
    defaultValue: 'Research',
    displayTextArea: !1,
    title: 'Event',
    type: s.String,
  },
});
ue(
  mt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+1F00-1FFF',
          url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0370-03FF',
          url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
          url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
          weight: '400',
        },
      ],
    },
    ...Yf,
    ...be(ra),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Uf = fe(gr),
  Ve = Et(gr),
  Wf = ['zXZbwLLFo'],
  jf = 'framer-PlvOw',
  zf = { zXZbwLLFo: 'framer-v-43mwsc' };
var Bf = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  qf = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  Kf = l(p),
  ct = { 'to do': 'qS4lWnwKI', done: 'afKNWPpoW' },
  Zf = ({
    event1: r,
    event1Progress: t,
    event2: a,
    event2Progress: n,
    event3: o,
    event3Progress: m,
    event4: i,
    event4Progress: d,
    event5: c,
    event5Progress: f,
    height: u,
    id: y,
    stage: b,
    stageColor: _,
    width: h,
    ...C
  }) => {
    var v, H, x, w, D, R, L, k, F, V, q, E, U, I, A, j, W, Z, re, z, ae, He;
    return {
      ...C,
      bmJ00pJCf:
        (v = b ?? C.bmJ00pJCf) !== null && v !== void 0 ? v : 'STAGE 1:',
      DK3hrsNib:
        (w =
          (x = (H = ct[n]) !== null && H !== void 0 ? H : n) !== null &&
          x !== void 0
            ? x
            : C.DK3hrsNib) !== null && w !== void 0
          ? w
          : 'afKNWPpoW',
      IwyWoPYTJ:
        (L =
          (R = (D = ct[f]) !== null && D !== void 0 ? D : f) !== null &&
          R !== void 0
            ? R
            : C.IwyWoPYTJ) !== null && L !== void 0
          ? L
          : 'afKNWPpoW',
      LBDUHqDoj:
        (V =
          (F = (k = ct[m]) !== null && k !== void 0 ? k : m) !== null &&
          F !== void 0
            ? F
            : C.LBDUHqDoj) !== null && V !== void 0
          ? V
          : 'afKNWPpoW',
      MHuu5k59X:
        (U =
          (E = (q = ct[d]) !== null && q !== void 0 ? q : d) !== null &&
          E !== void 0
            ? E
            : C.MHuu5k59X) !== null && U !== void 0
          ? U
          : 'afKNWPpoW',
      mt0kI86F0:
        (I = c ?? C.mt0kI86F0) !== null && I !== void 0 ? I : 'Research',
      PcHrrqnNM:
        (A = a ?? C.PcHrrqnNM) !== null && A !== void 0 ? A : 'Research',
      SyiJ2oeW4:
        (j = o ?? C.SyiJ2oeW4) !== null && j !== void 0 ? j : 'Research',
      tsiF126FN:
        (W = r ?? C.tsiF126FN) !== null && W !== void 0 ? W : 'Research',
      W9MhgJeNS:
        (Z = i ?? C.W9MhgJeNS) !== null && Z !== void 0 ? Z : 'Research',
      Wpb9Vujia:
        (ae =
          (z = (re = ct[t]) !== null && re !== void 0 ? re : t) !== null &&
          z !== void 0
            ? z
            : C.Wpb9Vujia) !== null && ae !== void 0
          ? ae
          : 'afKNWPpoW',
      YW2s9Dng4:
        (He = _ ?? C.YW2s9Dng4) !== null && He !== void 0
          ? He
          : 'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
    };
  },
  Xf = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  Gf = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        bmJ00pJCf: c,
        YW2s9Dng4: f,
        tsiF126FN: u,
        Wpb9Vujia: y,
        PcHrrqnNM: b,
        DK3hrsNib: _,
        SyiJ2oeW4: h,
        LBDUHqDoj: C,
        W9MhgJeNS: v,
        MHuu5k59X: H,
        mt0kI86F0: x,
        IwyWoPYTJ: w,
        ...D
      } = Zf(r),
      {
        baseVariant: R,
        classNames: L,
        clearLoadingGesture: k,
        gestureHandlers: F,
        gestureVariant: V,
        isLoading: q,
        setGestureState: E,
        setVariant: U,
        variants: I,
      } = ye({
        cycleOrder: Wf,
        defaultVariant: 'zXZbwLLFo',
        variant: d,
        variantClassNames: zf,
      }),
      A = Xf(r, I),
      j = N(null),
      W = ce(),
      Z = [ea],
      re = xe();
    return e(X, {
      id: i ?? W,
      children: e(Kf, {
        animate: I,
        initial: !1,
        children: e(qf, {
          value: Bf,
          children: e(l.div, {
            ...D,
            ...F,
            className: le(jf, ...Z, 'framer-43mwsc', m, L),
            'data-border': !0,
            'data-framer-name': 'base',
            layoutDependency: A,
            layoutId: 'zXZbwLLFo',
            ref: t ?? j,
            style: {
              '--border-bottom-width': '2px',
              '--border-color':
                'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
              '--border-left-width': '2px',
              '--border-right-width': '2px',
              '--border-style': 'solid',
              '--border-top-width': '2px',
              backgroundColor: 'rgb(255, 255, 255)',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...o,
            },
            children: g(l.div, {
              className: 'framer-114tyuw',
              'data-framer-name': 'stage',
              layoutDependency: A,
              layoutId: 'IdK99_NBM',
              children: [
                e(l.div, {
                  className: 'framer-16m9572',
                  'data-framer-name': 'headline',
                  layoutDependency: A,
                  layoutId: 'jHd8bMJaI',
                  children: e(P, {
                    __fromCanvasComponent: !0,
                    children: e(p, {
                      children: e(l.h4, {
                        className: 'framer-styles-preset-w8f8rx',
                        'data-styles-preset': 'AwLi8XHR7',
                        style: {
                          '--framer-text-color':
                            'var(--extracted-1eung3n, var(--variable-reference-YW2s9Dng4-KbdYLYSwX))',
                        },
                        children: 'STAGE 1:',
                      }),
                    }),
                    className: 'framer-udy1ba',
                    'data-framer-name': 'STAGE 1:',
                    fonts: ['Inter'],
                    layoutDependency: A,
                    layoutId: 'qieudCUtd',
                    style: {
                      '--extracted-1eung3n':
                        'var(--variable-reference-YW2s9Dng4-KbdYLYSwX)',
                      '--framer-paragraph-spacing': '0px',
                      '--variable-reference-YW2s9Dng4-KbdYLYSwX': f,
                    },
                    text: c,
                    verticalAlignment: 'center',
                    withExternalLayout: !0,
                  }),
                }),
                g(l.div, {
                  className: 'framer-7btee2',
                  'data-framer-name': 'events',
                  layoutDependency: A,
                  layoutId: 'Gev7JD0nm',
                  children: [
                    e(M, {
                      children: e(l.div, {
                        className: 'framer-n5q7fz-container',
                        layoutDependency: A,
                        layoutId: 'EhVis3EjW-container',
                        children: e(gr, {
                          height: '100%',
                          id: 'EhVis3EjW',
                          layoutId: 'EhVis3EjW',
                          LStEqEWaj: u,
                          variant: y,
                          width: '100%',
                        }),
                      }),
                    }),
                    e(M, {
                      children: e(l.div, {
                        className: 'framer-1o5wpnf-container',
                        layoutDependency: A,
                        layoutId: 'vqbP6w0ek-container',
                        children: e(gr, {
                          height: '100%',
                          id: 'vqbP6w0ek',
                          layoutId: 'vqbP6w0ek',
                          LStEqEWaj: b,
                          variant: _,
                          width: '100%',
                        }),
                      }),
                    }),
                    e(M, {
                      children: e(l.div, {
                        className: 'framer-v0yy08-container',
                        layoutDependency: A,
                        layoutId: 'SXgg1KHXx-container',
                        children: e(gr, {
                          height: '100%',
                          id: 'SXgg1KHXx',
                          layoutId: 'SXgg1KHXx',
                          LStEqEWaj: h,
                          variant: C,
                          width: '100%',
                        }),
                      }),
                    }),
                    e(M, {
                      children: e(l.div, {
                        className: 'framer-oalc24-container',
                        layoutDependency: A,
                        layoutId: 'HkV1O1dgu-container',
                        children: e(gr, {
                          height: '100%',
                          id: 'HkV1O1dgu',
                          layoutId: 'HkV1O1dgu',
                          LStEqEWaj: v,
                          variant: H,
                          width: '100%',
                        }),
                      }),
                    }),
                    e(M, {
                      children: e(l.div, {
                        className: 'framer-7ja4i7-container',
                        layoutDependency: A,
                        layoutId: 'x61_SsEpC-container',
                        children: e(gr, {
                          height: '100%',
                          id: 'x61_SsEpC',
                          layoutId: 'x61_SsEpC',
                          LStEqEWaj: x,
                          variant: w,
                          width: '100%',
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Qf = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-PlvOw.framer-11z0kp3, .framer-PlvOw .framer-11z0kp3 { display: block; }',
    '.framer-PlvOw.framer-43mwsc { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 486px; justify-content: center; overflow: hidden; padding: 0px 0px 64px 0px; position: relative; width: 441px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-PlvOw .framer-114tyuw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 302px; }',
    '.framer-PlvOw .framer-16m9572 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-PlvOw .framer-udy1ba { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-PlvOw .framer-7btee2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-PlvOw .framer-n5q7fz-container, .framer-PlvOw .framer-1o5wpnf-container, .framer-PlvOw .framer-v0yy08-container, .framer-PlvOw .framer-oalc24-container, .framer-PlvOw .framer-7ja4i7-container { flex: none; height: auto; position: relative; width: auto; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PlvOw.framer-43mwsc, .framer-PlvOw .framer-114tyuw, .framer-PlvOw .framer-16m9572, .framer-PlvOw .framer-7btee2 { gap: 0px; } .framer-PlvOw.framer-43mwsc > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-PlvOw.framer-43mwsc > :first-child { margin-left: 0px; } .framer-PlvOw.framer-43mwsc > :last-child { margin-right: 0px; } .framer-PlvOw .framer-114tyuw > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-PlvOw .framer-114tyuw > :first-child, .framer-PlvOw .framer-16m9572 > :first-child, .framer-PlvOw .framer-7btee2 > :first-child { margin-top: 0px; } .framer-PlvOw .framer-114tyuw > :last-child, .framer-PlvOw .framer-16m9572 > :last-child, .framer-PlvOw .framer-7btee2 > :last-child { margin-bottom: 0px; } .framer-PlvOw .framer-16m9572 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-PlvOw .framer-7btee2 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }',
    ...$t,
    '.framer-PlvOw[data-border="true"]::after, .framer-PlvOw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  dt = pe(Gf, Qf, 'framer-PlvOw'),
  pt = dt;
dt.displayName = 'roadmap stage';
dt.defaultProps = { height: 486, width: 441 };
G(dt, {
  bmJ00pJCf: {
    defaultValue: 'STAGE 1:',
    displayTextArea: !1,
    title: 'Stage',
    type: s.String,
  },
  YW2s9Dng4: {
    defaultValue:
      'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
    title: 'Stage color',
    type: s.Color,
  },
  tsiF126FN: {
    defaultValue: 'Research',
    displayTextArea: !1,
    title: 'Event 1',
    type: s.String,
  },
  Wpb9Vujia: Ve?.variant && {
    ...Ve.variant,
    defaultValue: 'afKNWPpoW',
    description: void 0,
    hidden: void 0,
    title: 'Event 1 progress',
  },
  PcHrrqnNM: {
    defaultValue: 'Research',
    displayTextArea: !1,
    title: 'Event 2',
    type: s.String,
  },
  DK3hrsNib: Ve?.variant && {
    ...Ve.variant,
    defaultValue: 'afKNWPpoW',
    description: void 0,
    hidden: void 0,
    title: 'Event 2 progress',
  },
  SyiJ2oeW4: {
    defaultValue: 'Research',
    displayTextArea: !1,
    title: 'Event 3',
    type: s.String,
  },
  LBDUHqDoj: Ve?.variant && {
    ...Ve.variant,
    defaultValue: 'afKNWPpoW',
    description: void 0,
    hidden: void 0,
    title: 'Event 3 progress',
  },
  W9MhgJeNS: {
    defaultValue: 'Research',
    displayTextArea: !1,
    title: 'Event 4',
    type: s.String,
  },
  MHuu5k59X: Ve?.variant && {
    ...Ve.variant,
    defaultValue: 'afKNWPpoW',
    description: void 0,
    hidden: void 0,
    title: 'Event 4 progress',
  },
  mt0kI86F0: {
    defaultValue: 'Research',
    displayTextArea: !1,
    title: 'Event 5',
    type: s.String,
  },
  IwyWoPYTJ: Ve?.variant && {
    ...Ve.variant,
    defaultValue: 'afKNWPpoW',
    description: void 0,
    hidden: void 0,
    title: 'Event 5 progress',
  },
});
ue(
  dt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+1F00-1FFF',
          url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0370-03FF',
          url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
          url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
          weight: '400',
        },
      ],
    },
    ...Uf,
    ...be(Jt),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Jf = { CzGPiPVSa: { hover: !0 }, q_B90NkEj: { hover: !0 } },
  $f = ['q_B90NkEj', 'CzGPiPVSa'],
  em = 'framer-45SjU',
  rm = { CzGPiPVSa: 'framer-v-1sperfe', q_B90NkEj: 'framer-v-1ptx523' };
function tn(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var tm = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  am = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  nm = l(p),
  om = { dark: 'q_B90NkEj', light: 'CzGPiPVSa' },
  im = ({ height: r, id: t, link: a, tap: n, text: o, width: m, ...i }) => {
    var d, c, f;
    return {
      ...i,
      dUkaU4KhJ: a ?? i.dUkaU4KhJ,
      Fy67gOM2B: n ?? i.Fy67gOM2B,
      m_cygckEt:
        (d = o ?? i.m_cygckEt) !== null && d !== void 0 ? d : 'dextools chart',
      variant:
        (f = (c = om[i.variant]) !== null && c !== void 0 ? c : i.variant) !==
          null && f !== void 0
          ? f
          : 'q_B90NkEj',
    };
  },
  sm = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  lm = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        m_cygckEt: c,
        Fy67gOM2B: f,
        dUkaU4KhJ: u,
        ...y
      } = im(r),
      {
        baseVariant: b,
        classNames: _,
        gestureHandlers: h,
        gestureVariant: C,
        setGestureState: v,
        setVariant: H,
        variants: x,
      } = ye({
        cycleOrder: $f,
        defaultVariant: 'q_B90NkEj',
        enabledGestures: Jf,
        variant: d,
        variantClassNames: rm,
      }),
      w = sm(r, x),
      { activeVariantCallback: D, delay: R } = Ie(b),
      L = D(async (...E) => {
        if ((v({ isPressed: !1 }), f && (await f(...E)) === !1)) return !1;
      }),
      k = N(null),
      F = ce(),
      V = [Un],
      q = xe();
    return e(X, {
      id: i ?? F,
      children: e(nm, {
        animate: x,
        initial: !1,
        children: e(am, {
          value: tm,
          children: e(we, {
            href: u,
            children: g(l.a, {
              ...y,
              ...h,
              className: `${le(em, ...V, 'framer-1ptx523', m, _)} framer-6tpy3`,
              'data-framer-name': 'dark',
              'data-highlight': !0,
              layoutDependency: w,
              layoutId: 'q_B90NkEj',
              onTap: L,
              ref: t ?? k,
              style: { ...o },
              ...tn(
                {
                  'CzGPiPVSa-hover': { 'data-framer-name': void 0 },
                  'q_B90NkEj-hover': { 'data-framer-name': void 0 },
                  CzGPiPVSa: { 'data-framer-name': 'light' },
                },
                b,
                C
              ),
              children: [
                e(l.div, {
                  className: 'framer-1e5jyyu',
                  'data-framer-name': 'arrow',
                  layoutDependency: w,
                  layoutId: 'jmjkKK8ci',
                  children: e(Ne, {
                    className: 'framer-1ithfoc',
                    'data-framer-name': 'right',
                    layout: 'position',
                    layoutDependency: w,
                    layoutId: 'sESQjPrd2',
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 19.998 9.991 C 19.997 9.954 19.984 9.919 19.977 9.883 C 19.97 9.845 19.968 9.807 19.954 9.771 C 19.951 9.764 19.951 9.758 19.948 9.752 C 19.937 9.726 19.914 9.704 19.899 9.679 C 19.892 9.669 19.886 9.659 19.879 9.649 C 19.862 9.624 19.853 9.595 19.831 9.572 C 19.829 9.569 19.826 9.569 19.823 9.566 C 19.819 9.561 19.814 9.557 19.809 9.553 C 19.807 9.55 19.806 9.547 19.804 9.544 L 13.151 3.294 C 12.899 3.059 12.504 3.071 12.267 3.322 C 12.031 3.573 12.043 3.969 12.294 4.206 L 17.797 9.375 L 0.625 9.375 C 0.28 9.375 0 9.655 0 10 C 0 10.345 0.28 10.625 0.625 10.625 L 17.797 10.625 L 12.294 15.794 C 12.042 16.031 12.03 16.426 12.266 16.678 C 12.389 16.809 12.556 16.875 12.722 16.875 C 12.876 16.875 13.029 16.819 13.15 16.706 L 19.803 10.456 C 19.806 10.453 19.806 10.45 19.809 10.447 C 19.814 10.443 19.818 10.438 19.823 10.433 C 19.826 10.431 19.829 10.43 19.831 10.428 C 19.853 10.404 19.862 10.375 19.879 10.35 C 19.886 10.341 19.892 10.331 19.899 10.321 C 19.914 10.296 19.937 10.274 19.948 10.247 C 19.951 10.241 19.951 10.234 19.954 10.229 C 19.968 10.193 19.971 10.154 19.977 10.116 C 19.984 10.08 19.997 10.046 19.998 10.009 C 19.998 10.006 20 10.003 20 10 C 20 9.997 19.998 9.994 19.998 9.991 Z" fill="rgb(15,44,35)"></path></svg>',
                    svgContentId: 11251493644,
                    withExternalLayout: !0,
                    ...tn(
                      {
                        CzGPiPVSa: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><path d="M 19.998 9.991 C 19.997 9.954 19.984 9.919 19.977 9.883 C 19.97 9.845 19.968 9.807 19.954 9.771 C 19.951 9.764 19.951 9.758 19.948 9.752 C 19.937 9.726 19.914 9.704 19.899 9.679 C 19.892 9.669 19.886 9.659 19.879 9.649 C 19.862 9.624 19.853 9.595 19.831 9.572 C 19.829 9.569 19.826 9.569 19.823 9.566 C 19.819 9.561 19.814 9.557 19.809 9.553 C 19.807 9.55 19.806 9.547 19.804 9.544 L 13.151 3.294 C 12.899 3.059 12.504 3.071 12.267 3.322 C 12.031 3.573 12.043 3.969 12.294 4.206 L 17.797 9.375 L 0.625 9.375 C 0.28 9.375 0 9.655 0 10 C 0 10.345 0.28 10.625 0.625 10.625 L 17.797 10.625 L 12.294 15.794 C 12.042 16.031 12.03 16.426 12.266 16.678 C 12.389 16.809 12.556 16.875 12.722 16.875 C 12.876 16.875 13.029 16.819 13.15 16.706 L 19.803 10.456 C 19.806 10.453 19.806 10.45 19.809 10.447 C 19.814 10.443 19.818 10.438 19.823 10.433 C 19.826 10.431 19.829 10.43 19.831 10.428 C 19.853 10.404 19.862 10.375 19.879 10.35 C 19.886 10.341 19.892 10.331 19.899 10.321 C 19.914 10.296 19.937 10.274 19.948 10.247 C 19.951 10.241 19.951 10.234 19.954 10.229 C 19.968 10.193 19.971 10.154 19.977 10.116 C 19.984 10.08 19.997 10.046 19.998 10.009 C 19.998 10.006 20 10.003 20 10 C 20 9.997 19.998 9.994 19.998 9.991 Z" fill="var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, rgb(248, 255, 232)) /* {&quot;name&quot;:&quot;light green&quot;} */"></path></svg>',
                          svgContentId: 12511599005,
                        },
                      },
                      b,
                      C
                    ),
                  }),
                }),
                e(P, {
                  __fromCanvasComponent: !0,
                  children: e(p, {
                    children: e(l.p, {
                      className: 'framer-styles-preset-1wzs4f3',
                      'data-styles-preset': 'VjBDXHxPb',
                      children: 'dextools chart',
                    }),
                  }),
                  className: 'framer-1cfn3gh',
                  'data-framer-name': 'dextools chart',
                  fonts: ['Inter'],
                  layoutDependency: w,
                  layoutId: 'swX32Rtmj',
                  style: { '--framer-paragraph-spacing': '0px' },
                  text: c,
                  variants: {
                    CzGPiPVSa: { '--extracted-r6o4lv': 'rgb(255, 255, 255)' },
                  },
                  verticalAlignment: 'top',
                  withExternalLayout: !0,
                  ...tn(
                    {
                      CzGPiPVSa: {
                        children: e(p, {
                          children: e(l.p, {
                            className: 'framer-styles-preset-1wzs4f3',
                            'data-styles-preset': 'VjBDXHxPb',
                            style: {
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'dextools chart',
                          }),
                        }),
                      },
                    },
                    b,
                    C
                  ),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  fm = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-45SjU.framer-6tpy3, .framer-45SjU .framer-6tpy3 { display: block; }',
    '.framer-45SjU.framer-1ptx523 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 30px; position: relative; text-decoration: none; width: min-content; }',
    '.framer-45SjU .framer-1e5jyyu { flex: none; height: 20px; left: 0px; overflow: visible; position: absolute; top: calc(51.162790697674446% - 20px / 2); width: 20px; z-index: 1; }',
    '.framer-45SjU .framer-1ithfoc { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; }',
    '.framer-45SjU .framer-1cfn3gh { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-45SjU.framer-1ptx523 { gap: 0px; } .framer-45SjU.framer-1ptx523 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-45SjU.framer-1ptx523 > :first-child { margin-left: 0px; } .framer-45SjU.framer-1ptx523 > :last-child { margin-right: 0px; } }',
    '.framer-45SjU.framer-v-1ptx523.hover.framer-1ptx523, .framer-45SjU.framer-v-1sperfe.hover.framer-1ptx523 { gap: 16px; }',
    '.framer-45SjU.framer-v-1ptx523.hover .framer-1e5jyyu, .framer-45SjU.framer-v-1sperfe.hover .framer-1e5jyyu { left: 4px; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-45SjU.framer-v-1ptx523.hover.framer-1ptx523 { gap: 0px; } .framer-45SjU.framer-v-1ptx523.hover.framer-1ptx523 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-45SjU.framer-v-1ptx523.hover.framer-1ptx523 > :first-child { margin-left: 0px; } .framer-45SjU.framer-v-1ptx523.hover.framer-1ptx523 > :last-child { margin-right: 0px; } }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-45SjU.framer-v-1sperfe.hover.framer-1ptx523 { gap: 0px; } .framer-45SjU.framer-v-1sperfe.hover.framer-1ptx523 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-45SjU.framer-v-1sperfe.hover.framer-1ptx523 > :first-child { margin-left: 0px; } .framer-45SjU.framer-v-1sperfe.hover.framer-1ptx523 > :last-child { margin-right: 0px; } }',
    ...An,
  ],
  ht = pe(lm, fm, 'framer-45SjU'),
  Br = ht;
ht.displayName = 'arrow cta';
ht.defaultProps = { height: 22, width: 172 };
G(ht, {
  variant: {
    options: ['q_B90NkEj', 'CzGPiPVSa'],
    optionTitles: ['dark', 'light'],
    title: 'Variant',
    type: s.Enum,
  },
  m_cygckEt: {
    defaultValue: 'dextools chart',
    displayTextArea: !1,
    title: 'text',
    type: s.String,
  },
  Fy67gOM2B: { title: 'Tap', type: s.EventHandler },
  dUkaU4KhJ: { title: 'Link', type: s.Link },
});
ue(
  ht,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          url: 'https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          url: 'https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+1F00-1FFF',
          url: 'https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0370-03FF',
          url: 'https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          url: 'https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          url: 'https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
          url: 'https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2',
          weight: '400',
        },
      ],
    },
    ...be(On),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var an =
    '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  jo = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mm = {
    ...jo,
    borderRadius: 6,
    background: 'rgba(136, 85, 255, 0.3)',
    color: '#85F',
    border: '1px dashed #85F',
    flexDirection: 'column',
  },
  nn = {
    onClick: { type: s.EventHandler },
    onMouseEnter: { type: s.EventHandler },
    onMouseLeave: { type: s.EventHandler },
  },
  cm = {
    type: s.Number,
    title: 'Font Size',
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  dm = {
    font: {
      type: s.Boolean,
      title: 'Font',
      defaultValue: !1,
      disabledTitle: 'Default',
      enabledTitle: 'Custom',
    },
    fontFamily: {
      type: s.String,
      title: 'Family',
      placeholder: 'Inter',
      hidden: ({ font: r }) => !r,
    },
    fontWeight: {
      type: s.Enum,
      title: 'Weight',
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        'Thin',
        'Extra-light',
        'Light',
        'Regular',
        'Medium',
        'Semi-bold',
        'Bold',
        'Extra-bold',
        'Black',
      ],
      hidden: ({ font: r }) => !r,
    },
  };
var hm = {
  100: 'Thin',
  200: 'Extra-light',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semi-bold',
  700: 'Bold',
  800: 'Extra-bold',
  900: 'Black',
};
function on(r) {
  let {
      fontFamily: t = 'Inter',
      fontSize: a = 16,
      fontWeight: n = 400,
      font: o = !1,
    } = r,
    m = hm[n],
    i = `"${t} ${m}", "${t}", ${an}`,
    d = t
      ? { fontSize: a, fontWeight: n, fontFamily: i }
      : { fontSize: a, fontWeight: n },
    c = async () => {
      await he
        .loadWebFontsFromSelectors([
          `CUSTOM;${t}`,
          `CUSTOM;${t} ${m}`,
          `GF;${t}-${m.toLowerCase()}`,
        ])
        .catch((f) => console.error(f));
    };
  return (
    ve(() => {
      o && c();
    }, [o, t, n]),
    d
  );
}
function sn(r) {
  let {
    borderRadius: t,
    isMixedBorderRadius: a,
    topLeftRadius: n,
    topRightRadius: o,
    bottomRightRadius: m,
    bottomLeftRadius: i,
  } = r;
  return K(
    () => (a ? `${n}px ${o}px ${m}px ${i}px` : `${t}px`),
    [t, a, n, o, m, i]
  );
}
var um = {
  borderRadius: {
    title: 'Radius',
    type: s.FusedNumber,
    toggleKey: 'isMixedBorderRadius',
    toggleTitles: ['Radius', 'Radius per corner'],
    valueKeys: [
      'topLeftRadius',
      'topRightRadius',
      'bottomRightRadius',
      'bottomLeftRadius',
    ],
    valueLabels: ['TL', 'TR', 'BR', 'BL'],
    min: 0,
  },
};
function ln(r) {
  let {
    padding: t,
    paddingPerSide: a,
    paddingTop: n,
    paddingRight: o,
    paddingBottom: m,
    paddingLeft: i,
  } = r;
  return K(() => (a ? `${n}px ${o}px ${m}px ${i}px` : t), [t, a, n, o, m, i]);
}
var gm = {
  padding: {
    type: s.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side'],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    valueLabels: ['T', 'R', 'B', 'L'],
    min: 0,
    title: 'Padding',
  },
};
function ut(r) {
  let {
      label: t,
      content: a,
      fill: n,
      color: o,
      style: m,
      onClick: i,
      font: d,
      hoverOptions: c,
      ...f
    } = r,
    u = on({ fontWeight: 500, ...f }),
    y = sn(r),
    b = ln(r),
    _ = or(() => {
      var h;
      (h = Y.clipboard) === null || h === void 0 || h.writeText(a), i?.();
    }, [i, a]);
  return e(l.button, {
    style: {
      border: 'none',
      outline: 'none',
      resize: 'none',
      width: 'max-content',
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      letterSpacing: '-0.2px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: n,
      borderRadius: y,
      cursor: 'pointer',
      padding: b,
      color: o,
      ...u,
      ...d,
      ...m,
    },
    onClick: _,
    ...f,
    whileHover: c,
    transition: c?.transition,
    children: t,
  });
}
G(ut, {
  content: {
    type: s.String,
    title: 'Content',
    displayTextArea: !0,
    description: 'When clicked, this content will be copied to the clipboard.',
  },
  label: { type: s.String, title: 'Label', defaultValue: 'Copy to Clipboard' },
  fill: { type: s.Color, title: 'Fill', defaultValue: '#06F' },
  color: { type: s.Color, title: 'Text', defaultValue: '#fff' },
  font: { type: s.Font, controls: 'extended', defaultValue: { fontSize: 16 } },
  hoverOptions: {
    type: s.Object,
    title: 'Hover',
    buttonTitle: 'Effect',
    optional: !0,
    controls: {
      scale: {
        type: s.Number,
        title: 'Scale',
        min: 0,
        max: 10,
        displayStepper: !0,
        step: 0.01,
        defaultValue: 1.1,
      },
      backgroundColor: {
        type: s.Color,
        title: 'Fill',
        defaultValue: '#0088FF',
        optional: !0,
      },
      color: {
        type: s.Color,
        title: 'Color',
        defaultValue: '#FFF',
        optional: !0,
      },
      transition: {
        type: s.Transition,
        title: 'Transition',
        defaultValue: { type: 'spring', stiffness: 400, damping: 30 },
      },
    },
  },
  padding: {
    type: s.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side'],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    valueLabels: ['T', 'R', 'B', 'L'],
    min: 0,
    title: 'Padding',
    defaultValue: 10,
  },
  borderRadius: {
    title: 'Radius',
    type: s.FusedNumber,
    toggleKey: 'isMixedBorderRadius',
    toggleTitles: ['Radius', 'Radius per corner'],
    valueKeys: [
      'topLeftRadius',
      'topRightRadius',
      'bottomRightRadius',
      'bottomLeftRadius',
    ],
    valueLabels: ['TL', 'TR', 'BR', 'BL'],
    min: 0,
    defaultValue: 50,
  },
  ...nn,
});
var xm = fe(ut),
  ym = ['RIIePEulV', 'n01JR_u7W'],
  wm = 'framer-eFWR4',
  bm = { n01JR_u7W: 'framer-v-12rmygm', RIIePEulV: 'framer-v-1ma8u37' };
function na(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var vm = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  Cm = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  km = l(p),
  _m = { base: 'RIIePEulV', copied: 'n01JR_u7W' },
  Sm = ({ height: r, hover: t, id: a, width: n, ...o }) => {
    var m, i;
    return {
      ...o,
      ILnGoRAop: t ?? o.ILnGoRAop,
      variant:
        (i = (m = _m[o.variant]) !== null && m !== void 0 ? m : o.variant) !==
          null && i !== void 0
          ? i
          : 'RIIePEulV',
    };
  },
  Dm = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  Hm = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        ILnGoRAop: c,
        ...f
      } = Sm(r),
      {
        baseVariant: u,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: _,
        gestureVariant: h,
        isLoading: C,
        setGestureState: v,
        setVariant: H,
        variants: x,
      } = ye({
        cycleOrder: ym,
        defaultVariant: 'RIIePEulV',
        variant: d,
        variantClassNames: bm,
      }),
      w = Dm(r, x),
      { activeVariantCallback: D, delay: R } = Ie(u),
      L = D(async (...U) => {
        v({ isPressed: !1 }), H('n01JR_u7W');
      }),
      k = D(async (...U) => {
        if ((v({ isHovered: !0 }), c && (await c(...U)) === !1)) return !1;
      }),
      F = N(null),
      V = ce(),
      q = [],
      E = xe();
    return e(X, {
      id: i ?? V,
      children: e(km, {
        animate: x,
        initial: !1,
        children: e(Cm, {
          value: vm,
          children: g(l.div, {
            ...f,
            ..._,
            className: le(wm, ...q, 'framer-1ma8u37', m, y),
            'data-border': !0,
            'data-framer-name': 'base',
            'data-highlight': !0,
            layoutDependency: w,
            layoutId: 'RIIePEulV',
            onMouseEnter: k,
            onTap: L,
            ref: t ?? F,
            style: {
              '--border-bottom-width': '0px',
              '--border-color':
                'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
              '--border-left-width': '4px',
              '--border-right-width': '4px',
              '--border-style': 'solid',
              '--border-top-width': '4px',
              backgroundColor: 'rgb(255, 255, 255)',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...o,
            },
            ...na({ n01JR_u7W: { 'data-framer-name': 'copied' } }, u, h),
            children: [
              e(M, {
                children: e(l.div, {
                  className: 'framer-153hrro-container',
                  layoutDependency: w,
                  layoutId: 'bFJKKECdo-container',
                  children: e(ut, {
                    borderRadius: 50,
                    bottomLeftRadius: 0,
                    bottomRightRadius: 0,
                    color: 'rgba(255, 255, 255, 0)',
                    content: '0x000000000000000000000000000000000',
                    fill: 'rgba(0, 0, 0, 0)',
                    font: {
                      fontFamily:
                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                      fontSize: '16px',
                      letterSpacing: '0em',
                      lineHeight: '1em',
                    },
                    height: '100%',
                    id: 'bFJKKECdo',
                    isMixedBorderRadius: !0,
                    label: 'Copy to Clipboard',
                    layoutId: 'bFJKKECdo',
                    padding: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingPerSide: !1,
                    paddingRight: 0,
                    paddingTop: 0,
                    style: { height: '100%', width: '100%' },
                    topLeftRadius: 50,
                    topRightRadius: 50,
                    width: '100%',
                  }),
                }),
              }),
              e(Ne, {
                className: 'framer-13o24a4',
                'data-framer-name': 'icon',
                layout: 'position',
                layoutDependency: w,
                layoutId: 'iA61V75Ig',
                opacity: 1,
                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 3.41 15.5 L 10.59 15.5 C 11.097 15.5 11.582 15.299 11.941 14.941 C 12.299 14.582 12.5 14.097 12.5 13.59 L 12.5 13.5 L 12.59 13.5 C 13.097 13.5 13.582 13.299 13.941 12.941 C 14.299 12.582 14.5 12.097 14.5 11.59 L 14.5 2.41 C 14.5 2.159 14.451 1.911 14.355 1.679 C 14.259 1.447 14.118 1.237 13.941 1.059 C 13.763 0.882 13.553 0.741 13.321 0.645 C 13.089 0.549 12.841 0.5 12.59 0.5 L 5.41 0.5 C 4.903 0.5 4.418 0.701 4.059 1.059 C 3.701 1.418 3.5 1.903 3.5 2.41 L 3.5 2.5 L 3.41 2.5 C 2.903 2.5 2.418 2.701 2.059 3.059 C 1.701 3.418 1.5 3.903 1.5 4.41 L 1.5 13.59 C 1.5 14.097 1.701 14.582 2.059 14.941 C 2.418 15.299 2.903 15.5 3.41 15.5 Z M 2.5 4.41 C 2.501 4.169 2.598 3.938 2.768 3.768 C 2.938 3.598 3.169 3.501 3.41 3.5 L 10.59 3.5 C 10.831 3.501 11.062 3.598 11.232 3.768 C 11.402 3.938 11.499 4.169 11.5 4.41 L 11.5 13.59 C 11.499 13.831 11.402 14.062 11.232 14.232 C 11.062 14.402 10.831 14.499 10.59 14.5 L 3.41 14.5 C 3.169 14.499 2.938 14.402 2.768 14.232 C 2.598 14.062 2.501 13.831 2.5 13.59 Z" fill="var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;black&quot;} */"></path></svg>',
                svgContentId: 12315286369,
                withExternalLayout: !0,
                ...na(
                  {
                    n01JR_u7W: {
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 3.41 15.5 L 10.59 15.5 C 11.097 15.5 11.582 15.299 11.941 14.941 C 12.299 14.582 12.5 14.097 12.5 13.59 L 12.5 13.5 L 12.59 13.5 C 13.097 13.5 13.582 13.299 13.941 12.941 C 14.299 12.582 14.5 12.097 14.5 11.59 L 14.5 2.41 C 14.5 2.159 14.451 1.911 14.355 1.679 C 14.259 1.447 14.118 1.237 13.941 1.059 C 13.763 0.882 13.553 0.741 13.321 0.645 C 13.089 0.549 12.841 0.5 12.59 0.5 L 5.41 0.5 C 4.903 0.5 4.418 0.701 4.059 1.059 C 3.701 1.418 3.5 1.903 3.5 2.41 L 3.5 2.5 L 3.41 2.5 C 2.903 2.5 2.418 2.701 2.059 3.059 C 1.701 3.418 1.5 3.903 1.5 4.41 L 1.5 13.59 C 1.5 14.097 1.701 14.582 2.059 14.941 C 2.418 15.299 2.903 15.5 3.41 15.5 Z M 2.5 4.41 C 2.501 4.169 2.598 3.938 2.768 3.768 C 2.938 3.598 3.169 3.501 3.41 3.5 L 10.59 3.5 C 10.831 3.501 11.062 3.598 11.232 3.768 C 11.402 3.938 11.499 4.169 11.5 4.41 L 11.5 13.59 C 11.499 13.831 11.402 14.062 11.232 14.232 C 11.062 14.402 10.831 14.499 10.59 14.5 L 3.41 14.5 C 3.169 14.499 2.938 14.402 2.768 14.232 C 2.598 14.062 2.501 13.831 2.5 13.59 Z" fill="var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)) /* {&quot;name&quot;:&quot;dark green&quot;} */"></path></svg>',
                      svgContentId: 9213950488,
                    },
                  },
                  u,
                  h
                ),
              }),
              e(P, {
                __fromCanvasComponent: !0,
                children: e(p, {
                  children: e(l.p, {
                    style: {
                      '--font-selector': 'R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS02MDA=',
                      '--framer-font-family':
                        '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                      '--framer-font-size': '75.00932820233868px',
                      '--framer-font-weight': '600',
                      '--framer-letter-spacing': '-0.07px',
                      '--framer-text-color':
                        'var(--extracted-r6o4lv, var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, rgb(0, 0, 0)))',
                    },
                    children: 'Token address:',
                  }),
                }),
                className: 'framer-1rcr6xr',
                fonts: ['GF;Bricolage Grotesque-600'],
                layoutDependency: w,
                layoutId: 'VmZ2kPczI',
                style: {
                  '--extracted-r6o4lv':
                    'var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, rgb(0, 0, 0))',
                },
                variants: {
                  n01JR_u7W: {
                    '--extracted-r6o4lv':
                      'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                  },
                },
                verticalAlignment: 'top',
                viewBox: '0 0 543.07 90',
                withExternalLayout: !0,
                ...na(
                  {
                    n01JR_u7W: {
                      children: e(p, {
                        children: e(l.p, {
                          style: {
                            '--font-selector':
                              'R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS02MDA=',
                            '--framer-font-family':
                              '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                            '--framer-font-size': '75.00932820233868px',
                            '--framer-font-weight': '600',
                            '--framer-letter-spacing': '-0.07px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                          },
                          children: 'Copied:',
                        }),
                      }),
                      viewBox: '0 0 271.07 90',
                    },
                  },
                  u,
                  h
                ),
              }),
              e(P, {
                __fromCanvasComponent: !0,
                children: e(p, {
                  children: e(l.p, {
                    style: {
                      '--font-selector': 'R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS02MDA=',
                      '--framer-font-family':
                        '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                      '--framer-font-size': '75.00932820233868px',
                      '--framer-font-weight': '600',
                      '--framer-letter-spacing': '-0.07px',
                      '--framer-text-color':
                        'var(--extracted-r6o4lv, var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, rgb(0, 0, 0)))',
                    },
                    children: '0x0000000000000000000000000000',
                  }),
                }),
                className: 'framer-y87yk5',
                fonts: ['GF;Bricolage Grotesque-600'],
                layoutDependency: w,
                layoutId: 'v5dm6evkg',
                style: {
                  '--extracted-r6o4lv':
                    'var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, rgb(0, 0, 0))',
                },
                variants: {
                  n01JR_u7W: {
                    '--extracted-r6o4lv':
                      'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35))',
                  },
                },
                verticalAlignment: 'top',
                viewBox: '0 0 1478.07 90',
                withExternalLayout: !0,
                ...na(
                  {
                    n01JR_u7W: {
                      children: e(p, {
                        children: e(l.p, {
                          style: {
                            '--font-selector':
                              'R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS02MDA=',
                            '--framer-font-family':
                              '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                            '--framer-font-size': '75.00932820233868px',
                            '--framer-font-weight': '600',
                            '--framer-letter-spacing': '-0.07px',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(15, 44, 35)))',
                          },
                          children: '0x0000000000000000000000000000',
                        }),
                      }),
                    },
                  },
                  u,
                  h
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Rm = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-eFWR4.framer-dsv7rd, .framer-eFWR4 .framer-dsv7rd { display: block; }',
    '.framer-eFWR4.framer-1ma8u37 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 16px 8px 12px 20px; position: relative; width: 508px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-eFWR4 .framer-153hrro-container { flex: none; height: 98%; position: absolute; right: 0px; top: calc(48.93617021276598% - 97.87234042553192% / 2); width: 100%; z-index: 2; }',
    '.framer-eFWR4 .framer-13o24a4 { flex: none; height: 16px; position: relative; width: 16px; }',
    '.framer-eFWR4 .framer-1rcr6xr { flex: none; height: auto; position: relative; white-space: pre; width: 21%; }',
    '.framer-eFWR4 .framer-y87yk5 { flex: none; height: auto; position: relative; white-space: pre; width: 68%; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eFWR4.framer-1ma8u37 { gap: 0px; } .framer-eFWR4.framer-1ma8u37 > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-eFWR4.framer-1ma8u37 > :first-child { margin-left: 0px; } .framer-eFWR4.framer-1ma8u37 > :last-child { margin-right: 0px; } }',
    '.framer-eFWR4.framer-v-12rmygm .framer-1rcr6xr { width: 11%; }',
    '.framer-eFWR4.framer-v-12rmygm .framer-y87yk5 { width: 70%; }',
    '.framer-eFWR4[data-border="true"]::after, .framer-eFWR4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  gt = pe(Hm, Rm, 'framer-eFWR4'),
  fn = gt;
gt.displayName = 'copy token address';
gt.defaultProps = { height: 48, width: 508 };
G(gt, {
  variant: {
    options: ['RIIePEulV', 'n01JR_u7W'],
    optionTitles: ['base', 'copied'],
    title: 'Variant',
    type: s.Enum,
  },
  ILnGoRAop: { title: 'Hover', type: s.EventHandler },
});
ue(
  gt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
        {
          family: 'Bricolage Grotesque',
          source: 'google',
          style: 'normal',
          url: 'https://fonts.gstatic.com/s/bricolagegrotesque/v7/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvcXlyMgvs-wJDtw.woff2',
          weight: '600',
        },
      ],
    },
    ...xm,
  ],
  { supportsExplicitInterCodegen: !0 }
);
he.loadFonts(['CUSTOM;Kremlin Regular']);
var Bo = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  qo = [
    '.framer-hpvEK .framer-styles-preset-1sim65v:not(.rich-text-wrapper), .framer-hpvEK .framer-styles-preset-1sim65v.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-hpvEK .framer-styles-preset-1sim65v:not(.rich-text-wrapper), .framer-hpvEK .framer-styles-preset-1sim65v.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-hpvEK .framer-styles-preset-1sim65v:not(.rich-text-wrapper), .framer-hpvEK .framer-styles-preset-1sim65v.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Ko = 'framer-hpvEK';
var Nm = { Z8bqbKfc6: { hover: !0 } },
  Vm = ['Z8bqbKfc6'],
  Tm = 'framer-gujqn',
  Em = { Z8bqbKfc6: 'framer-v-1g5q701' };
function Fm(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var Pm = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  Im = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  Lm = l(p),
  Mm = ({
    borderColor: r,
    height: t,
    id: a,
    link: n,
    platform: o,
    width: m,
    ...i
  }) => {
    var d, c;
    return {
      ...i,
      Its1JhWV6:
        (d = r ?? i.Its1JhWV6) !== null && d !== void 0
          ? d
          : {
              borderColor:
                'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)) /* {"name":"RED Peptin"} */',
              borderStyle: 'solid',
              borderWidth: 2,
            },
      MXQbksIQp: n ?? i.MXQbksIQp,
      OuwuIp1nU:
        (c = o ?? i.OuwuIp1nU) !== null && c !== void 0 ? c : 'Gate.io',
    };
  },
  Om = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  Am = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        OuwuIp1nU: c,
        Its1JhWV6: f,
        MXQbksIQp: u,
        ...y
      } = Mm(r),
      {
        baseVariant: b,
        classNames: _,
        clearLoadingGesture: h,
        gestureHandlers: C,
        gestureVariant: v,
        isLoading: H,
        setGestureState: x,
        setVariant: w,
        variants: D,
      } = ye({
        cycleOrder: Vm,
        defaultVariant: 'Z8bqbKfc6',
        enabledGestures: Nm,
        variant: d,
        variantClassNames: Em,
      }),
      R = Om(r, D),
      L = N(null),
      k = ce(),
      F = [Ko],
      V = xe();
    var q, E, U, I;
    return e(X, {
      id: i ?? k,
      children: e(Lm, {
        animate: D,
        initial: !1,
        children: e(Im, {
          value: Pm,
          children: e(we, {
            href: u,
            children: e(l.a, {
              ...y,
              ...C,
              className: `${le(
                Tm,
                ...F,
                'framer-1g5q701',
                m,
                _
              )} framer-19nono9`,
              'data-border': !0,
              'data-framer-name': 'base',
              layoutDependency: R,
              layoutId: 'Z8bqbKfc6',
              ref: t ?? L,
              style: {
                '--border-bottom-width': `${
                  (q = f.borderBottomWidth) !== null && q !== void 0
                    ? q
                    : f.borderWidth
                }px`,
                '--border-color': f.borderColor,
                '--border-left-width': `${
                  (E = f.borderLeftWidth) !== null && E !== void 0
                    ? E
                    : f.borderWidth
                }px`,
                '--border-right-width': `${
                  (U = f.borderRightWidth) !== null && U !== void 0
                    ? U
                    : f.borderWidth
                }px`,
                '--border-style': f.borderStyle,
                '--border-top-width': `${
                  (I = f.borderTopWidth) !== null && I !== void 0
                    ? I
                    : f.borderWidth
                }px`,
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                boxShadow:
                  '1px 3px 0px 0px var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, rgb(0, 0, 0))',
                ...o,
              },
              variants: {
                'Z8bqbKfc6-hover': { backgroundColor: 'rgb(222, 222, 222)' },
              },
              ...Fm(
                { 'Z8bqbKfc6-hover': { 'data-framer-name': void 0 } },
                b,
                v
              ),
              children: e(P, {
                __fromCanvasComponent: !0,
                children: e(p, {
                  children: e(l.p, {
                    className: 'framer-styles-preset-1sim65v',
                    'data-styles-preset': 'h0597VtEv',
                    children: 'Gate.io',
                  }),
                }),
                className: 'framer-1u2c1g1',
                'data-framer-name': 'Gate.io',
                fonts: ['Inter'],
                layoutDependency: R,
                layoutId: 'DdF7QAgem',
                style: { '--framer-paragraph-spacing': '0px' },
                text: c,
                verticalAlignment: 'top',
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Um = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-gujqn.framer-19nono9, .framer-gujqn .framer-19nono9 { display: block; }',
    '.framer-gujqn.framer-1g5q701 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 48px 24px 48px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }',
    '.framer-gujqn .framer-1u2c1g1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gujqn.framer-1g5q701 { gap: 0px; } .framer-gujqn.framer-1g5q701 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-gujqn.framer-1g5q701 > :first-child { margin-left: 0px; } .framer-gujqn.framer-1g5q701 > :last-child { margin-right: 0px; } }',
    ...qo,
    '.framer-gujqn[data-border="true"]::after, .framer-gujqn [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  xt = pe(Am, Um, 'framer-gujqn'),
  qr = xt;
xt.displayName = 'get it now';
xt.defaultProps = { height: 72, width: 176 };
G(xt, {
  OuwuIp1nU: {
    defaultValue: 'Gate.io',
    displayTextArea: !1,
    title: 'Platform',
    type: s.String,
  },
  Its1JhWV6: {
    defaultValue: {
      borderColor:
        'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)) /* {"name":"RED Peptin"} */',
      borderStyle: 'solid',
      borderWidth: 2,
    },
    title: 'Border color',
    type: s.Border,
  },
  MXQbksIQp: { title: 'Link', type: s.Link },
});
ue(
  xt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+1F00-1FFF',
          url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0370-03FF',
          url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
          url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
          weight: '400',
        },
      ],
    },
    ...be(Bo),
  ],
  { supportsExplicitInterCodegen: !0 }
);
he.loadFonts(['CUSTOM;Kremlin Regular']);
var Zo = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  Xo = [
    '.framer-MUTc1 .framer-styles-preset-1ju0rke:not(.rich-text-wrapper), .framer-MUTc1 .framer-styles-preset-1ju0rke.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #f8ffe8; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  Go = 'framer-MUTc1';
var jm = { UhAGYfgXx: { hover: !0 } },
  zm = ['M8G5UClx1', 'UhAGYfgXx'],
  Bm = 'framer-lAdwC',
  qm = { M8G5UClx1: 'framer-v-dx7i0g', UhAGYfgXx: 'framer-v-1885uyj' };
function Km(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var Zm = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  Xm = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  Gm = l(p),
  Qm = { hidden: 'UhAGYfgXx', shown: 'M8G5UClx1' },
  Jm = ({ height: r, id: t, tap: a, width: n, ...o }) => {
    var m, i;
    return {
      ...o,
      po6Q8spSW: a ?? o.po6Q8spSW,
      variant:
        (i = (m = Qm[o.variant]) !== null && m !== void 0 ? m : o.variant) !==
          null && i !== void 0
          ? i
          : 'M8G5UClx1',
    };
  },
  $m = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  ec = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        po6Q8spSW: c,
        ...f
      } = Jm(r),
      {
        baseVariant: u,
        classNames: y,
        clearLoadingGesture: b,
        gestureHandlers: _,
        gestureVariant: h,
        isLoading: C,
        setGestureState: v,
        setVariant: H,
        variants: x,
      } = ye({
        cycleOrder: zm,
        defaultVariant: 'M8G5UClx1',
        enabledGestures: jm,
        variant: d,
        variantClassNames: qm,
      }),
      w = $m(r, x),
      { activeVariantCallback: D, delay: R } = Ie(u),
      L = D(async (...E) => {
        if ((v({ isPressed: !1 }), c && (await c(...E)) === !1)) return !1;
      }),
      k = N(null),
      F = ce(),
      V = [],
      q = xe();
    return e(X, {
      id: i ?? F,
      children: e(Gm, {
        animate: x,
        initial: !1,
        children: e(Xm, {
          value: Zm,
          children: e(l.div, {
            ...f,
            ..._,
            className: le(Bm, ...V, 'framer-dx7i0g', m, y),
            'data-framer-name': 'shown',
            'data-highlight': !0,
            layoutDependency: w,
            layoutId: 'M8G5UClx1',
            onTap: L,
            ref: t ?? k,
            style: {
              backgroundColor:
                'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              opacity: 1,
              ...o,
            },
            variants: {
              'UhAGYfgXx-hover': {
                backgroundColor:
                  'var(--token-703b9687-58c7-4c33-93f2-79c7ee64fba4, rgb(226, 254, 165))',
              },
              UhAGYfgXx: {
                backgroundColor:
                  'var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, rgb(248, 255, 232))',
                opacity: 0.5,
              },
            },
            ...Km(
              {
                'UhAGYfgXx-hover': { 'data-framer-name': void 0 },
                UhAGYfgXx: { 'data-framer-name': 'hidden' },
              },
              u,
              h
            ),
          }),
        }),
      }),
    });
  }),
  rc = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-lAdwC.framer-qf1616, .framer-lAdwC .framer-qf1616 { display: block; }',
    '.framer-lAdwC.framer-dx7i0g { cursor: pointer; height: 16px; position: relative; width: 64px; }',
    '.framer-lAdwC.framer-v-1885uyj.framer-dx7i0g { aspect-ratio: 4 / 1; height: var(--framer-aspect-ratio-supported, 16px); }',
    '.framer-lAdwC.framer-v-1885uyj.hover.framer-dx7i0g { height: var(--framer-aspect-ratio-supported, 18px); width: 70px; }',
  ],
  yt = pe(ec, rc, 'framer-lAdwC'),
  _r = yt;
yt.displayName = 'how to buy - nav button';
yt.defaultProps = { height: 16, width: 64 };
G(yt, {
  variant: {
    options: ['M8G5UClx1', 'UhAGYfgXx'],
    optionTitles: ['shown', 'hidden'],
    title: 'Variant',
    type: s.Enum,
  },
  po6Q8spSW: { title: 'Tap', type: s.EventHandler },
});
ue(yt, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var tc = fe(_r),
  ac = ['MtciMFQhU', 'z6dret1gw', 'BwRaeu9v_', 'jL9WUvk_6', 'hPvLRCL3N'],
  nc = 'framer-b7XEN',
  oc = {
    BwRaeu9v_: 'framer-v-1qtuzoj',
    hPvLRCL3N: 'framer-v-1uo7onq',
    jL9WUvk_6: 'framer-v-mrkrb5',
    MtciMFQhU: 'framer-v-rcwwaq',
    z6dret1gw: 'framer-v-1wu92jb',
  };
function Kr(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var ic = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  sc = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  lc = l(p),
  fc = {
    'Step 1': 'MtciMFQhU',
    'Step 2': 'z6dret1gw',
    'Step 3': 'BwRaeu9v_',
    'Step 4': 'jL9WUvk_6',
    'Step 5': 'hPvLRCL3N',
  },
  mc = ({
    height: r,
    id: t,
    tap1: a,
    tap2: n,
    tap3: o,
    tap4: m,
    tap5: i,
    width: d,
    ...c
  }) => {
    var f, u;
    return {
      ...c,
      FDqHNhm1y: a ?? c.FDqHNhm1y,
      gRLOFbfGz: m ?? c.gRLOFbfGz,
      MbVQYiw6w: n ?? c.MbVQYiw6w,
      rTs7rWO9p: o ?? c.rTs7rWO9p,
      tyZwHmxhK: i ?? c.tyZwHmxhK,
      variant:
        (u = (f = fc[c.variant]) !== null && f !== void 0 ? f : c.variant) !==
          null && u !== void 0
          ? u
          : 'MtciMFQhU',
    };
  },
  cc = (r, t) => t.join('-') + r.layoutDependency,
  dc = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        FDqHNhm1y: c,
        MbVQYiw6w: f,
        rTs7rWO9p: u,
        gRLOFbfGz: y,
        tyZwHmxhK: b,
        ..._
      } = mc(r),
      {
        baseVariant: h,
        classNames: C,
        gestureVariant: v,
        setGestureState: H,
        setVariant: x,
        variants: w,
      } = ye({
        cycleOrder: ac,
        defaultVariant: 'MtciMFQhU',
        variant: d,
        variantClassNames: oc,
      }),
      D = cc(r, w),
      { activeVariantCallback: R, delay: L } = Ie(h),
      k = R(async (...W) => {
        if (c && (await c(...W)) === !1) return !1;
      }),
      F = R(async (...W) => {
        if (f && (await f(...W)) === !1) return !1;
      }),
      V = R(async (...W) => {
        if (u && (await u(...W)) === !1) return !1;
      }),
      q = R(async (...W) => {
        if (y && (await y(...W)) === !1) return !1;
      }),
      E = R(async (...W) => {
        if (b && (await b(...W)) === !1) return !1;
      }),
      U = N(null),
      I = ce(),
      A = [],
      j = xe();
    return e(X, {
      id: i ?? I,
      children: e(lc, {
        animate: w,
        initial: !1,
        children: e(sc, {
          value: ic,
          children: g(l.div, {
            ..._,
            className: le(nc, ...A, 'framer-rcwwaq', m, C),
            'data-framer-name': 'Step 1',
            layoutDependency: D,
            layoutId: 'MtciMFQhU',
            onHoverEnd: () => H({ isHovered: !1 }),
            onHoverStart: () => H({ isHovered: !0 }),
            onTap: () => H({ isPressed: !1 }),
            onTapCancel: () => H({ isPressed: !1 }),
            onTapStart: () => H({ isPressed: !0 }),
            ref: t ?? U,
            style: { ...o },
            ...Kr(
              {
                BwRaeu9v_: { 'data-framer-name': 'Step 3' },
                hPvLRCL3N: { 'data-framer-name': 'Step 5' },
                jL9WUvk_6: { 'data-framer-name': 'Step 4' },
                z6dret1gw: { 'data-framer-name': 'Step 2' },
              },
              h,
              v
            ),
            children: [
              e(M, {
                width: `max((${j?.width || '100vw'} - 64px) / 5, 1px)`,
                children: e(l.div, {
                  className: 'framer-zmtkze-container',
                  'data-framer-name': '1',
                  layoutDependency: D,
                  layoutId: 'FR6ci9kYS-container',
                  name: '1',
                  children: e(_r, {
                    height: '100%',
                    id: 'FR6ci9kYS',
                    layoutId: 'FR6ci9kYS',
                    name: '1',
                    po6Q8spSW: k,
                    style: { height: '100%', width: '100%' },
                    variant: 'M8G5UClx1',
                    width: '100%',
                    ...Kr(
                      {
                        BwRaeu9v_: { variant: 'UhAGYfgXx' },
                        hPvLRCL3N: { variant: 'UhAGYfgXx' },
                        jL9WUvk_6: { variant: 'UhAGYfgXx' },
                        z6dret1gw: { variant: 'UhAGYfgXx' },
                      },
                      h,
                      v
                    ),
                  }),
                }),
              }),
              e(M, {
                width: `max((${j?.width || '100vw'} - 64px) / 5, 1px)`,
                children: e(l.div, {
                  className: 'framer-1d8w4w7-container',
                  'data-framer-name': '2',
                  layoutDependency: D,
                  layoutId: 'qClxAoP1N-container',
                  name: '2',
                  children: e(_r, {
                    height: '100%',
                    id: 'qClxAoP1N',
                    layoutId: 'qClxAoP1N',
                    name: '2',
                    po6Q8spSW: F,
                    style: { height: '100%', width: '100%' },
                    variant: 'UhAGYfgXx',
                    width: '100%',
                    ...Kr({ z6dret1gw: { variant: 'M8G5UClx1' } }, h, v),
                  }),
                }),
              }),
              e(M, {
                width: `max((${j?.width || '100vw'} - 64px) / 5, 1px)`,
                children: e(l.div, {
                  className: 'framer-tvnbg-container',
                  'data-framer-name': '3',
                  layoutDependency: D,
                  layoutId: 'E5iMaKOh2-container',
                  name: '3',
                  children: e(_r, {
                    height: '100%',
                    id: 'E5iMaKOh2',
                    layoutId: 'E5iMaKOh2',
                    name: '3',
                    po6Q8spSW: V,
                    style: { height: '100%', width: '100%' },
                    variant: 'UhAGYfgXx',
                    width: '100%',
                    ...Kr({ BwRaeu9v_: { variant: 'M8G5UClx1' } }, h, v),
                  }),
                }),
              }),
              e(M, {
                width: `max((${j?.width || '100vw'} - 64px) / 5, 1px)`,
                children: e(l.div, {
                  className: 'framer-18j85z4-container',
                  'data-framer-name': '4',
                  layoutDependency: D,
                  layoutId: 'VncgQhW6I-container',
                  name: '4',
                  children: e(_r, {
                    height: '100%',
                    id: 'VncgQhW6I',
                    layoutId: 'VncgQhW6I',
                    name: '4',
                    po6Q8spSW: q,
                    style: { height: '100%', width: '100%' },
                    variant: 'UhAGYfgXx',
                    width: '100%',
                    ...Kr({ jL9WUvk_6: { variant: 'M8G5UClx1' } }, h, v),
                  }),
                }),
              }),
              e(M, {
                width: `max((${j?.width || '100vw'} - 64px) / 5, 1px)`,
                children: e(l.div, {
                  className: 'framer-zstecz-container',
                  'data-framer-name': '5',
                  layoutDependency: D,
                  layoutId: 'r4_pJAkjt-container',
                  name: '5',
                  children: e(_r, {
                    height: '100%',
                    id: 'r4_pJAkjt',
                    layoutId: 'r4_pJAkjt',
                    name: '5',
                    po6Q8spSW: E,
                    style: { height: '100%', width: '100%' },
                    variant: 'UhAGYfgXx',
                    width: '100%',
                    ...Kr({ hPvLRCL3N: { variant: 'M8G5UClx1' } }, h, v),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  pc = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-b7XEN.framer-gniq23, .framer-b7XEN .framer-gniq23 { display: block; }',
    '.framer-b7XEN.framer-rcwwaq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 384px; }',
    '.framer-b7XEN .framer-zmtkze-container, .framer-b7XEN .framer-1d8w4w7-container, .framer-b7XEN .framer-tvnbg-container, .framer-b7XEN .framer-18j85z4-container, .framer-b7XEN .framer-zstecz-container { flex: 1 0 0px; height: 16px; position: relative; width: 1px; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-b7XEN.framer-rcwwaq { gap: 0px; } .framer-b7XEN.framer-rcwwaq > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-b7XEN.framer-rcwwaq > :first-child { margin-left: 0px; } .framer-b7XEN.framer-rcwwaq > :last-child { margin-right: 0px; } }',
    '.framer-b7XEN.framer-v-1wu92jb .framer-zmtkze-container, .framer-b7XEN.framer-v-1qtuzoj .framer-zmtkze-container, .framer-b7XEN.framer-v-mrkrb5 .framer-zmtkze-container, .framer-b7XEN.framer-v-1uo7onq .framer-zmtkze-container { order: 0; }',
    '.framer-b7XEN.framer-v-1wu92jb .framer-1d8w4w7-container, .framer-b7XEN.framer-v-1qtuzoj .framer-1d8w4w7-container, .framer-b7XEN.framer-v-mrkrb5 .framer-1d8w4w7-container, .framer-b7XEN.framer-v-1uo7onq .framer-1d8w4w7-container { order: 1; }',
    '.framer-b7XEN.framer-v-1wu92jb .framer-tvnbg-container, .framer-b7XEN.framer-v-1qtuzoj .framer-tvnbg-container, .framer-b7XEN.framer-v-mrkrb5 .framer-tvnbg-container, .framer-b7XEN.framer-v-1uo7onq .framer-tvnbg-container { order: 2; }',
    '.framer-b7XEN.framer-v-1wu92jb .framer-18j85z4-container, .framer-b7XEN.framer-v-1qtuzoj .framer-18j85z4-container, .framer-b7XEN.framer-v-mrkrb5 .framer-18j85z4-container, .framer-b7XEN.framer-v-1uo7onq .framer-18j85z4-container { order: 3; }',
    '.framer-b7XEN.framer-v-1wu92jb .framer-zstecz-container, .framer-b7XEN.framer-v-1qtuzoj .framer-zstecz-container, .framer-b7XEN.framer-v-mrkrb5 .framer-zstecz-container, .framer-b7XEN.framer-v-1uo7onq .framer-zstecz-container { order: 4; }',
  ],
  wt = pe(dc, pc, 'framer-b7XEN'),
  oa = wt;
wt.displayName = 'how to buy - navigation';
wt.defaultProps = { height: 16, width: 384 };
G(wt, {
  variant: {
    options: ['MtciMFQhU', 'z6dret1gw', 'BwRaeu9v_', 'jL9WUvk_6', 'hPvLRCL3N'],
    optionTitles: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
    title: 'Variant',
    type: s.Enum,
  },
  FDqHNhm1y: { title: 'Tap 1', type: s.EventHandler },
  MbVQYiw6w: { title: 'Tap 2', type: s.EventHandler },
  rTs7rWO9p: { title: 'Tap 3', type: s.EventHandler },
  gRLOFbfGz: { title: 'Tap 4', type: s.EventHandler },
  tyZwHmxhK: { title: 'Tap 5', type: s.EventHandler },
});
ue(wt, [{ explicitInter: !0, fonts: [] }, ...tc], {
  supportsExplicitInterCodegen: !0,
});
var hc = fe(Br),
  uc = fe(oa),
  ia = Et(oa),
  gc = ['hlLFoPM3i'],
  xc = 'framer-Ny5JE',
  yc = { hlLFoPM3i: 'framer-v-12wcx1g' };
var wc = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  bc = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  vc = l(p),
  Cc = {
    'Step 1': 'MtciMFQhU',
    'Step 2': 'z6dret1gw',
    'Step 3': 'BwRaeu9v_',
    'Step 4': 'jL9WUvk_6',
    'Step 5': 'hPvLRCL3N',
  },
  kc = ({
    buttonText: r,
    description: t,
    headline: a,
    height: n,
    id: o,
    nextStep: m,
    progress: i,
    step: d,
    step1: c,
    step2: f,
    step3: u,
    step4: y,
    step5: b,
    width: _,
    ...h
  }) => {
    var C, v, H, x, w, D, R;
    return {
      ...h,
      B0rZsx27B: y ?? h.B0rZsx27B,
      B5kojsSXC: m ?? h.B5kojsSXC,
      dU8HHvrlY: f ?? h.dU8HHvrlY,
      HeJ6SEuVp:
        (C = t ?? h.HeJ6SEuVp) !== null && C !== void 0
          ? C
          : 'Research and select a reputable cryptocurrency exchange that supports the trading of your fictional cryptocurrency with dollars. Popular exchanges that offer fiat-to-crypto trading pairs include Coinbase, Binance, Kraken, and Gemini.',
      JD5qEY1nf:
        (v = a ?? h.JD5qEY1nf) !== null && v !== void 0
          ? v
          : 'CHOOSE A CRYPTO-CURRENCY EXCHANGE:',
      NX41E5I1z: b ?? h.NX41E5I1z,
      O2a1uM_6W:
        (w =
          (x = (H = Cc[i]) !== null && H !== void 0 ? H : i) !== null &&
          x !== void 0
            ? x
            : h.O2a1uM_6W) !== null && w !== void 0
          ? w
          : 'MtciMFQhU',
      pNgx0yTDg:
        (D = d ?? h.pNgx0yTDg) !== null && D !== void 0 ? D : 'STEP 1:',
      PnPKjoQjZ: u ?? h.PnPKjoQjZ,
      TZNitsspF:
        (R = r ?? h.TZNitsspF) !== null && R !== void 0 ? R : 'next step',
      YbU8RvvEC: c ?? h.YbU8RvvEC,
    };
  },
  _c = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  Sc = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      {
        style: o,
        className: m,
        layoutId: i,
        variant: d,
        pNgx0yTDg: c,
        JD5qEY1nf: f,
        HeJ6SEuVp: u,
        TZNitsspF: y,
        O2a1uM_6W: b,
        YbU8RvvEC: _,
        dU8HHvrlY: h,
        PnPKjoQjZ: C,
        B0rZsx27B: v,
        NX41E5I1z: H,
        B5kojsSXC: x,
        ...w
      } = kc(r),
      {
        baseVariant: D,
        classNames: R,
        clearLoadingGesture: L,
        gestureHandlers: k,
        gestureVariant: F,
        isLoading: V,
        setGestureState: q,
        setVariant: E,
        variants: U,
      } = ye({
        cycleOrder: gc,
        defaultVariant: 'hlLFoPM3i',
        variant: d,
        variantClassNames: yc,
      }),
      I = _c(r, U),
      { activeVariantCallback: A, delay: j } = Ie(D),
      W = A(async (...oe) => {
        if (x && (await x(...oe)) === !1) return !1;
      }),
      Z = A(async (...oe) => {
        if (_ && (await _(...oe)) === !1) return !1;
      }),
      re = A(async (...oe) => {
        if (h && (await h(...oe)) === !1) return !1;
      }),
      z = A(async (...oe) => {
        if (C && (await C(...oe)) === !1) return !1;
      }),
      ae = A(async (...oe) => {
        if (v && (await v(...oe)) === !1) return !1;
      }),
      He = A(async (...oe) => {
        if (H && (await H(...oe)) === !1) return !1;
      }),
      Le = N(null),
      Ee = ce(),
      Je = [Go, ea, aa],
      ie = xe();
    return e(X, {
      id: i ?? Ee,
      children: e(vc, {
        animate: U,
        initial: !1,
        children: e(bc, {
          value: wc,
          children: g(l.div, {
            ...w,
            ...k,
            className: le(xc, ...Je, 'framer-12wcx1g', m, R),
            'data-border': !0,
            'data-framer-name': 'Step 1',
            layoutDependency: I,
            layoutId: 'hlLFoPM3i',
            ref: t ?? Le,
            style: {
              '--border-bottom-width': '3px',
              '--border-color': 'rgb(94, 0, 0)',
              '--border-left-width': '3px',
              '--border-right-width': '3px',
              '--border-style': 'solid',
              '--border-top-width': '3px',
              backgroundColor:
                'var(--token-01db68c6-eff7-468f-a116-48ab688168e3, rgb(17, 92, 28))',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              ...o,
            },
            children: [
              e(l.div, {
                className: 'framer-9pnmux',
                'data-framer-name': 'background illustration',
                layoutDependency: I,
                layoutId: 'cDSkrxmNJ',
                style: { rotate: 360 },
                children: e(ne, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 1e3,
                    intrinsicWidth: 1e3,
                    pixelHeight: 1e3,
                    pixelWidth: 1e3,
                    sizes: '218px',
                    src: 'https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png',
                    srcSet:
                      'https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png?scale-down-to=512 512w,https://framerusercontent.com/images/6C4KY1fCOJPPd5Cdc7vLrboWAU.png 1000w',
                  },
                  className: 'framer-3ks7jt',
                  'data-framer-name': 'PeePeeTrump',
                  layoutDependency: I,
                  layoutId: 'LRpOVf54o',
                }),
              }),
              e(l.div, {
                className: 'framer-mgczos',
                'data-framer-name': 'content',
                layoutDependency: I,
                layoutId: 'fxwJQACP2',
                children: g(l.div, {
                  className: 'framer-1cdb5ii',
                  'data-framer-name': 'copy',
                  layoutDependency: I,
                  layoutId: 'IdW8GhT_q',
                  children: [
                    g(l.div, {
                      className: 'framer-ledk9l',
                      'data-framer-name': 'headlines',
                      layoutDependency: I,
                      layoutId: 'ZXcVNRlUR',
                      children: [
                        e(P, {
                          __fromCanvasComponent: !0,
                          children: e(p, {
                            children: e(l.p, {
                              className: 'framer-styles-preset-1ju0rke',
                              'data-styles-preset': 'WelMRRkgo',
                              children: 'STEP 1:',
                            }),
                          }),
                          className: 'framer-1vnjp4x',
                          'data-framer-name': 'STEP 1:',
                          fonts: ['Inter'],
                          layoutDependency: I,
                          layoutId: 'XapSk1eA8',
                          style: { '--framer-paragraph-spacing': '0px' },
                          text: c,
                          verticalAlignment: 'center',
                          withExternalLayout: !0,
                        }),
                        e(P, {
                          __fromCanvasComponent: !0,
                          children: g(p, {
                            children: [
                              e(l.h4, {
                                className: 'framer-styles-preset-w8f8rx',
                                'data-styles-preset': 'AwLi8XHR7',
                                children: 'CHOOSE A CRYPTO-',
                              }),
                              e(l.h4, {
                                className: 'framer-styles-preset-w8f8rx',
                                'data-styles-preset': 'AwLi8XHR7',
                                children: 'CURRENCY EXCHANGE:',
                              }),
                            ],
                          }),
                          className: 'framer-xe9ce3',
                          'data-framer-name':
                            'CHOOSE A CRYPTO- CURRENCY EXCHANGE:',
                          fonts: ['Inter'],
                          layoutDependency: I,
                          layoutId: 'bI2ynWkow',
                          style: { '--framer-paragraph-spacing': '0px' },
                          text: f,
                          verticalAlignment: 'center',
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    e(P, {
                      __fromCanvasComponent: !0,
                      children: e(p, {
                        children: e(l.p, {
                          className: 'framer-styles-preset-17f9v5x',
                          'data-styles-preset': 'mMFVfJbPs',
                          children:
                            'Research and select a reputable cryptocurrency exchange that supports the trading of your fictional cryptocurrency with dollars. Popular exchanges that offer fiat-to-crypto trading pairs include Coinbase, Binance, Kraken, and Gemini.',
                        }),
                      }),
                      className: 'framer-1wc4kjj',
                      'data-framer-name':
                        'Research and select a reputable cryptocurrency exchange that supports the trading of your fictional cryptocurrency with dollars. Popular exchanges that offer fiat-to-crypto trading pairs include Coinbase, Binance, Kraken, and Gemini.',
                      fonts: ['Inter'],
                      layoutDependency: I,
                      layoutId: 'yXOicwgID',
                      style: { '--framer-paragraph-spacing': '0px' },
                      text: u,
                      verticalAlignment: 'top',
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
              g(l.div, {
                className: 'framer-1lr33fk',
                'data-framer-name': 'nav',
                layoutDependency: I,
                layoutId: 'u0Z07bOti',
                children: [
                  e(M, {
                    children: e(l.div, {
                      className: 'framer-bmkx2b-container',
                      layoutDependency: I,
                      layoutId: 'MMvJ5D2av-container',
                      children: e(Br, {
                        Fy67gOM2B: W,
                        height: '100%',
                        id: 'MMvJ5D2av',
                        layoutId: 'MMvJ5D2av',
                        m_cygckEt: y,
                        variant: 'CzGPiPVSa',
                        width: '100%',
                      }),
                    }),
                  }),
                  e(M, {
                    width: `min(${ie?.width || '100vw'} - 80px, 420px)`,
                    children: e(l.div, {
                      className: 'framer-1iiwkk3-container',
                      layoutDependency: I,
                      layoutId: 'itCRNWplK-container',
                      children: e(oa, {
                        FDqHNhm1y: Z,
                        gRLOFbfGz: ae,
                        height: '100%',
                        id: 'itCRNWplK',
                        layoutId: 'itCRNWplK',
                        MbVQYiw6w: re,
                        rTs7rWO9p: z,
                        style: { maxWidth: '100%', width: '100%' },
                        tyZwHmxhK: He,
                        variant: b,
                        width: '100%',
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Dc = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-Ny5JE.framer-15dmaua, .framer-Ny5JE .framer-15dmaua { display: block; }',
    '.framer-Ny5JE.framer-12wcx1g { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; height: 438px; justify-content: space-between; overflow: hidden; padding: 40px; position: relative; width: 684px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-Ny5JE .framer-9pnmux { bottom: -79px; flex: none; height: 517px; overflow: hidden; position: absolute; right: 6px; width: 383px; }',
    '.framer-Ny5JE .framer-3ks7jt { bottom: 105px; flex: none; height: 228px; overflow: visible; position: absolute; right: 20px; width: 218px; }',
    '.framer-Ny5JE .framer-mgczos { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 480px; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-Ny5JE .framer-1cdb5ii { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-Ny5JE .framer-ledk9l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-Ny5JE .framer-1vnjp4x, .framer-Ny5JE .framer-xe9ce3, .framer-Ny5JE .framer-1wc4kjj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-Ny5JE .framer-1lr33fk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-Ny5JE .framer-bmkx2b-container { flex: none; height: auto; position: relative; width: auto; }',
    '.framer-Ny5JE .framer-1iiwkk3-container { flex: none; height: auto; max-width: 420px; position: relative; width: 100%; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ny5JE .framer-mgczos, .framer-Ny5JE .framer-1cdb5ii, .framer-Ny5JE .framer-ledk9l, .framer-Ny5JE .framer-1lr33fk { gap: 0px; } .framer-Ny5JE .framer-mgczos > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-Ny5JE .framer-mgczos > :first-child, .framer-Ny5JE .framer-1cdb5ii > :first-child, .framer-Ny5JE .framer-ledk9l > :first-child, .framer-Ny5JE .framer-1lr33fk > :first-child { margin-top: 0px; } .framer-Ny5JE .framer-mgczos > :last-child, .framer-Ny5JE .framer-1cdb5ii > :last-child, .framer-Ny5JE .framer-ledk9l > :last-child, .framer-Ny5JE .framer-1lr33fk > :last-child { margin-bottom: 0px; } .framer-Ny5JE .framer-1cdb5ii > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-Ny5JE .framer-ledk9l > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Ny5JE .framer-1lr33fk > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } }',
    ...Xo,
    ...$t,
    ...ta,
    '.framer-Ny5JE[data-border="true"]::after, .framer-Ny5JE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  bt = pe(Sc, Dc, 'framer-Ny5JE'),
  mn = bt;
bt.displayName = 'how to buy - step';
bt.defaultProps = { height: 438, width: 684 };
G(bt, {
  pNgx0yTDg: {
    defaultValue: 'STEP 1:',
    displayTextArea: !1,
    title: 'Step',
    type: s.String,
  },
  JD5qEY1nf: {
    defaultValue: 'CHOOSE A CRYPTO-CURRENCY EXCHANGE:',
    displayTextArea: !1,
    title: 'Headline',
    type: s.String,
  },
  HeJ6SEuVp: {
    defaultValue:
      'Research and select a reputable cryptocurrency exchange that supports the trading of your fictional cryptocurrency with dollars. Popular exchanges that offer fiat-to-crypto trading pairs include Coinbase, Binance, Kraken, and Gemini.',
    displayTextArea: !1,
    title: 'Description',
    type: s.String,
  },
  TZNitsspF: {
    defaultValue: 'next step',
    displayTextArea: !1,
    title: 'Button text',
    type: s.String,
  },
  O2a1uM_6W: ia?.variant && {
    ...ia.variant,
    defaultValue: 'MtciMFQhU',
    description: void 0,
    hidden: void 0,
    title: 'Progress',
  },
  YbU8RvvEC: { title: 'Step 1', type: s.EventHandler },
  dU8HHvrlY: { title: 'Step 2', type: s.EventHandler },
  PnPKjoQjZ: { title: 'Step 3', type: s.EventHandler },
  B0rZsx27B: { title: 'Step 4', type: s.EventHandler },
  NX41E5I1z: { title: 'Step 5', type: s.EventHandler },
  B5kojsSXC: { title: 'Next Step', type: s.EventHandler },
});
ue(
  bt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+1F00-1FFF',
          url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0370-03FF',
          url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
          url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
          weight: '400',
        },
      ],
    },
    ...hc,
    ...uc,
    ...be(Zo),
    ...be(Jt),
    ...be(ra),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Hc = fe(mn),
  Rc = ['fqNnyX_5V', 'oP4uZ7ofQ', 'NcT6UQYVv', 'Fv3raRVY8', 'V2WHv8SRY'],
  Yc = 'framer-nCefn',
  Nc = {
    fqNnyX_5V: 'framer-v-dayqgi',
    Fv3raRVY8: 'framer-v-lfob6q',
    NcT6UQYVv: 'framer-v-vntq0y',
    oP4uZ7ofQ: 'framer-v-40ud0b',
    V2WHv8SRY: 'framer-v-ssgtj3',
  };
function Qo(r, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, r[n])), a;
}
var Vc = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  Tc = ({ value: r, children: t }) => {
    let a = ge(B),
      n = r ?? a.transition,
      o = K(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(B.Provider, { value: o, children: t });
  },
  Ec = l(p),
  Fc = {
    'Variant 1': 'fqNnyX_5V',
    'Variant 2': 'oP4uZ7ofQ',
    'Variant 3': 'NcT6UQYVv',
    'Variant 4': 'Fv3raRVY8',
    'Variant 5': 'V2WHv8SRY',
  },
  Pc = ({ height: r, id: t, width: a, ...n }) => {
    var o, m;
    return {
      ...n,
      variant:
        (m = (o = Fc[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && m !== void 0
          ? m
          : 'fqNnyX_5V',
    };
  },
  Ic = (r, t) =>
    r.layoutDependency ? t.join('-') + r.layoutDependency : t.join('-'),
  Lc = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      { style: o, className: m, layoutId: i, variant: d, ...c } = Pc(r),
      {
        baseVariant: f,
        classNames: u,
        clearLoadingGesture: y,
        gestureHandlers: b,
        gestureVariant: _,
        isLoading: h,
        setGestureState: C,
        setVariant: v,
        variants: H,
      } = ye({
        cycleOrder: Rc,
        defaultVariant: 'fqNnyX_5V',
        variant: d,
        variantClassNames: Nc,
      }),
      x = Ic(r, H),
      { activeVariantCallback: w, delay: D } = Ie(f),
      R = w(async (...z) => {
        v('fqNnyX_5V');
      }),
      L = w(async (...z) => {
        v('oP4uZ7ofQ');
      }),
      k = w(async (...z) => {
        v('NcT6UQYVv');
      }),
      F = w(async (...z) => {
        v('Fv3raRVY8');
      }),
      V = w(async (...z) => {
        v('V2WHv8SRY');
      }),
      q = w(async (...z) => {
        v('oP4uZ7ofQ');
      }),
      E = w(async (...z) => {
        v('NcT6UQYVv');
      }),
      U = w(async (...z) => {
        v('Fv3raRVY8');
      }),
      I = w(async (...z) => {
        v('V2WHv8SRY');
      }),
      A = w(async (...z) => {
        v('fqNnyX_5V');
      }),
      j = N(null),
      W = ce(),
      Z = [],
      re = xe();
    return e(X, {
      id: i ?? W,
      children: e(Ec, {
        animate: H,
        initial: !1,
        children: e(Tc, {
          value: Vc,
          children: e(l.div, {
            ...c,
            ...b,
            className: le(Yc, ...Z, 'framer-dayqgi', m, u),
            'data-framer-name': 'Variant 1',
            layoutDependency: x,
            layoutId: 'fqNnyX_5V',
            ref: t ?? j,
            style: { ...o },
            ...Qo(
              {
                Fv3raRVY8: { 'data-framer-name': 'Variant 4' },
                NcT6UQYVv: { 'data-framer-name': 'Variant 3' },
                oP4uZ7ofQ: { 'data-framer-name': 'Variant 2' },
                V2WHv8SRY: { 'data-framer-name': 'Variant 5' },
              },
              f,
              _
            ),
            children: e(M, {
              width: `max(${re?.width || '100vw'}, 1px)`,
              children: e(l.div, {
                className: 'framer-12p0aya-container',
                layoutDependency: x,
                layoutId: 'NLYl1VOVv-container',
                children: e(mn, {
                  B0rZsx27B: F,
                  B5kojsSXC: q,
                  dU8HHvrlY: L,
                  height: '100%',
                  HeJ6SEuVp:
                    'download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.',
                  id: 'NLYl1VOVv',
                  JD5qEY1nf: 'Create a wallet',
                  layoutId: 'NLYl1VOVv',
                  NX41E5I1z: V,
                  O2a1uM_6W: 'MtciMFQhU',
                  pNgx0yTDg: 'STEP 1:',
                  PnPKjoQjZ: k,
                  style: { height: '100%', width: '100%' },
                  TZNitsspF: 'next step',
                  width: '100%',
                  YbU8RvvEC: R,
                  ...Qo(
                    {
                      Fv3raRVY8: {
                        B5kojsSXC: I,
                        HeJ6SEuVp:
                          "Navigate to the exchange's trading section and locate the trading pair for your cryptocurrency and dollars (e.g., MEME/USD). Choose whether to place a market order, which executes immediately at the current market price, or a limit order, where you specify the price at which you want to buy. Enter the amount of cryptocurrency you wish to purchase and review the order details before confirming.",
                        JD5qEY1nf: 'PLACE YOUR ORDER:',
                        O2a1uM_6W: 'jL9WUvk_6',
                        pNgx0yTDg: 'STEP 4:',
                      },
                      NcT6UQYVv: {
                        B5kojsSXC: U,
                        HeJ6SEuVp:
                          'Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPTIN token address into Uniswap, select $PEPTIN COIN, and confirm. When Metamask prompts you for a wallet signature, sign.',
                        JD5qEY1nf: 'Go To Uniswap',
                        O2a1uM_6W: 'BwRaeu9v_',
                        pNgx0yTDg: 'STEP 3:',
                      },
                      oP4uZ7ofQ: {
                        B5kojsSXC: E,
                        HeJ6SEuVp:
                          'Have ETH in your wallet to switch to $PEPTIN . If you don\u2019t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.',
                        JD5qEY1nf: 'Get some $ETH',
                        O2a1uM_6W: 'z6dret1gw',
                        pNgx0yTDg: 'STEP 2:',
                      },
                      V2WHv8SRY: {
                        B5kojsSXC: A,
                        HeJ6SEuVp:
                          'Swap ETH for $PEPTIN. We have ZERO taxes so you don\u2019t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility. And you are now a $PEPTIN holder.',
                        JD5qEY1nf: 'Switch ETH for $KERMIT',
                        O2a1uM_6W: 'hPvLRCL3N',
                        pNgx0yTDg: 'STEP 5:',
                        TZNitsspF: 'back to start',
                      },
                    },
                    f,
                    _
                  ),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Mc = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-nCefn.framer-vt9g9x, .framer-nCefn .framer-vt9g9x { display: block; }',
    '.framer-nCefn.framer-dayqgi { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 438px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 684px; }',
    '.framer-nCefn .framer-12p0aya-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }',
    '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-nCefn.framer-dayqgi { gap: 0px; } .framer-nCefn.framer-dayqgi > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-nCefn.framer-dayqgi > :first-child { margin-left: 0px; } .framer-nCefn.framer-dayqgi > :last-child { margin-right: 0px; } }',
  ],
  vt = pe(Lc, Mc, 'framer-nCefn'),
  cn = vt;
vt.displayName = 'how to buy - process';
vt.defaultProps = { height: 438, width: 684 };
G(vt, {
  variant: {
    options: ['fqNnyX_5V', 'oP4uZ7ofQ', 'NcT6UQYVv', 'Fv3raRVY8', 'V2WHv8SRY'],
    optionTitles: [
      'Variant 1',
      'Variant 2',
      'Variant 3',
      'Variant 4',
      'Variant 5',
    ],
    title: 'Variant',
    type: s.Enum,
  },
});
ue(vt, [{ explicitInter: !0, fonts: [] }, ...Hc], {
  supportsExplicitInterCodegen: !0,
});
he.loadFonts(['CUSTOM;Kremlin Regular']);
var Jo = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  $o = [
    '.framer-Xhaua .framer-styles-preset-1nl4nl9:not(.rich-text-wrapper), .framer-Xhaua .framer-styles-preset-1nl4nl9.rich-text-wrapper h6 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 34px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-Xhaua .framer-styles-preset-1nl4nl9:not(.rich-text-wrapper), .framer-Xhaua .framer-styles-preset-1nl4nl9.rich-text-wrapper h6 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 19px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-Xhaua .framer-styles-preset-1nl4nl9:not(.rich-text-wrapper), .framer-Xhaua .framer-styles-preset-1nl4nl9.rich-text-wrapper h6 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  ei = 'framer-Xhaua';
he.loadFonts(['CUSTOM;Kremlin Regular']);
var ri = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  ti = [
    '.framer-Mpt2r .framer-styles-preset-1litlgy:not(.rich-text-wrapper), .framer-Mpt2r .framer-styles-preset-1litlgy.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 0px) { .framer-Mpt2r .framer-styles-preset-1litlgy:not(.rich-text-wrapper), .framer-Mpt2r .framer-styles-preset-1litlgy.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  ai = 'framer-Mpt2r';
he.loadFonts(['CUSTOM;Kremlin Regular']);
var ni = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  oi = [
    '.framer-wGNzH .framer-styles-preset-10kvllk:not(.rich-text-wrapper), .framer-wGNzH .framer-styles-preset-10kvllk.rich-text-wrapper h1 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 100px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 100px; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-wGNzH .framer-styles-preset-10kvllk:not(.rich-text-wrapper), .framer-wGNzH .framer-styles-preset-10kvllk.rich-text-wrapper h1 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 85px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 80px; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-wGNzH .framer-styles-preset-10kvllk:not(.rich-text-wrapper), .framer-wGNzH .framer-styles-preset-10kvllk.rich-text-wrapper h1 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 40px; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  ii = 'framer-wGNzH';
he.loadFonts(['CUSTOM;Kremlin Regular']);
var si = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  li = [
    '.framer-YFDys .framer-styles-preset-19cq3om:not(.rich-text-wrapper), .framer-YFDys .framer-styles-preset-19cq3om.rich-text-wrapper h3 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 76px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 85px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-YFDys .framer-styles-preset-19cq3om:not(.rich-text-wrapper), .framer-YFDys .framer-styles-preset-19cq3om.rich-text-wrapper h3 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 61px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 68px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-YFDys .framer-styles-preset-19cq3om:not(.rich-text-wrapper), .framer-YFDys .framer-styles-preset-19cq3om.rich-text-wrapper h3 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 49px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 50px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  fi = 'framer-YFDys';
he.loadFonts(['CUSTOM;Kremlin Regular']);
var mi = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
      ],
    },
  ],
  ci = [
    '.framer-JBYbF .framer-styles-preset-hp3uw5:not(.rich-text-wrapper), .framer-JBYbF .framer-styles-preset-hp3uw5.rich-text-wrapper h2 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 80px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 85px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-703b9687-58c7-4c33-93f2-79c7ee64fba4, #e2fea5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-JBYbF .framer-styles-preset-hp3uw5:not(.rich-text-wrapper), .framer-JBYbF .framer-styles-preset-hp3uw5.rich-text-wrapper h2 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 69px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-703b9687-58c7-4c33-93f2-79c7ee64fba4, #e2fea5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-JBYbF .framer-styles-preset-hp3uw5:not(.rich-text-wrapper), .framer-JBYbF .framer-styles-preset-hp3uw5.rich-text-wrapper h2 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 42px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 44px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-703b9687-58c7-4c33-93f2-79c7ee64fba4, #e2fea5); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  di = 'framer-JBYbF';
var zc = fe(en),
  Be = Pr(l.div),
  ar = Pr(P),
  Bc = fe(hr),
  qc = fe(Br),
  Kc = fe(fn),
  Zc = fe(qr),
  Xc = fe(Cr),
  Gc = fe(kr),
  pi = Pr(ne),
  Qc = fe(Ca),
  Jc = fe(Qt),
  $c = fe(pt),
  ed = fe(Te),
  rd = fe(rt),
  td = fe(cn),
  sa = Ft(P);
var ad = {
    jVwZneS9k: '(min-width: 810px) and (max-width: 1199px)',
    WQLkyLRf1: '(min-width: 1200px)',
    XXbQgpb6O: '(max-width: 809px)',
  },
  dn = () => typeof document < 'u',
  hi = 'framer-YHDe7',
  nd = {
    jVwZneS9k: 'framer-v-tfjr65',
    WQLkyLRf1: 'framer-v-72rtr7',
    XXbQgpb6O: 'framer-v-1gask65',
  },
  od = { delay: 0, duration: 90, ease: [0, 0, 1, 1], type: 'tween' },
  id = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  sd = (r, t) => `translateX(-50%) ${t}`,
  Ze = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 40,
  },
  Gr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  Ct = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Gr,
    x: 0,
    y: 40,
  },
  Qr = { damping: 60, delay: 0.1, mass: 1, stiffness: 500, type: 'spring' },
  kt = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Qr,
    x: 0,
    y: 40,
  },
  ui = { damping: 60, delay: 0.2, mass: 1, stiffness: 500, type: 'spring' },
  ld = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ui,
    x: 0,
    y: 40,
  },
  gi = { damping: 60, delay: 0.3, mass: 1, stiffness: 500, type: 'spring' },
  fd = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: gi,
    x: 0,
    y: 40,
  },
  Dr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: 'spring' },
  Zr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Dr,
  },
  md = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Dr,
    x: 0,
    y: 0,
  },
  cd = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Dr,
    x: 0,
    y: 0,
  },
  dd = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  pd = ({ children: r, blockDocumentScrolling: t, enabled: a = !0 }) => {
    let [n, o] = Mn({ blockDocumentScrolling: t });
    return r({
      hide: () => o(!1),
      show: () => o(!0),
      toggle: () => o(!n),
      visible: a && n,
    });
  },
  Sr = (r, t) => `translate(-50%, -50%) ${t}`,
  hd = {
    opacity: 1,
    rotate: 3,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transition: Dr,
  },
  ud = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    transition: Dr,
  },
  Xr = { delay: 0, duration: 10, ease: [0, 0, 1, 1], type: 'tween' },
  gd = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 360,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  _t = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: -360,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  St = { delay: 0, duration: 5, ease: [0.2, 0, 0.8, 1], type: 'tween' },
  xd = {
    opacity: 1,
    rotate: -31,
    rotateX: -8,
    rotateY: 10,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  yd = {
    opacity: 1,
    rotate: -21,
    rotateX: -10,
    rotateY: 15,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  wd = {
    opacity: 1,
    rotate: -13,
    rotateX: -11,
    rotateY: 13,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  bd = {
    opacity: 1,
    rotate: 32,
    rotateX: 21,
    rotateY: -14,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  vd = {
    opacity: 1,
    rotate: 22,
    rotateX: -12,
    rotateY: 17,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Cd = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: 'tween' },
  la = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Cd,
    x: 0,
    y: 0,
  },
  fa = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150,
  },
  kd = {
    opacity: 1,
    rotate: -7,
    rotateX: 0,
    rotateY: 0,
    scale: 1.2,
    skewX: 0,
    skewY: 0,
    transition: Dr,
  },
  _d = {
    opacity: 1,
    rotate: 4,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: Dr,
  },
  pn = Pt(),
  Sd = { Desktop: 'WQLkyLRf1', Phone: 'XXbQgpb6O', Tablet: 'jVwZneS9k' },
  Dd = ({ height: r, id: t, width: a, ...n }) => {
    var o, m;
    return {
      ...n,
      variant:
        (m = (o = Sd[n.variant]) !== null && o !== void 0 ? o : n.variant) !==
          null && m !== void 0
          ? m
          : 'WQLkyLRf1',
    };
  },
  Hd = te(function (r, t) {
    let { activeLocale: a, setLocale: n } = de(),
      { style: o, className: m, layoutId: i, variant: d, ...c } = Dd(r);
    ve(() => {
      let z = Pt(void 0, a);
      if (z.robots) {
        let ae = document.querySelector('meta[name="robots"]');
        ae
          ? ae.setAttribute('content', z.robots)
          : ((ae = document.createElement('meta')),
            ae.setAttribute('name', 'robots'),
            ae.setAttribute('content', z.robots),
            document.head.appendChild(ae));
      }
    }, [void 0, a]),
      Yn(() => {
        let z = Pt(void 0, a);
        if (((document.title = z.title || ''), z.viewport)) {
          var ae;
          (ae = document.querySelector('meta[name="viewport"]')) === null ||
            ae === void 0 ||
            ae.setAttribute('content', z.viewport);
        }
        let He = z.bodyClassName;
        if (He) {
          let Le = document.body;
          Le.classList.forEach(
            (Ee) => Ee.startsWith('framer-body-') && Le.classList.remove(Ee)
          ),
            Le.classList.add(`${z.bodyClassName}-framer-YHDe7`);
        }
        return () => {
          He &&
            document.body.classList.remove(`${z.bodyClassName}-framer-YHDe7`);
        };
      }, [void 0, a]);
    let [f, u] = Ln(d, ad, !1),
      y = void 0,
      { activeVariantCallback: b, delay: _ } = Ie(void 0),
      h = ({ overlay: z, paginationInfo: ae }) =>
        b(async (...He) => {
          z.show();
        }),
      C = N(null),
      v = vr('fY1i5DyBD'),
      H = N(null),
      x = N(null),
      w = () => (dn() ? !['jVwZneS9k', 'XXbQgpb6O'].includes(f) : !0),
      D = N(null),
      R = vr('rPEgAqoBb'),
      L = N(null),
      k = () => !!(!dn() || ['jVwZneS9k', 'XXbQgpb6O'].includes(f)),
      F = vr('M8l5gH3jw'),
      V = N(null),
      q = vr('B2nUNr_PH'),
      E = N(null),
      U = vr('cJTvuGgks'),
      I = N(null),
      A = vr('pyD_KHTvn'),
      j = N(null),
      W = () => (dn() ? f !== 'XXbQgpb6O' : !0),
      Z = ce(),
      re = [ei, ii, di, zn, fi, ai, Gt];
    return (
      Fn({}),
      e(In.Provider, {
        value: { primaryVariantId: 'WQLkyLRf1', variantClassNames: nd },
        children: g(X, {
          id: i ?? Z,
          children: [
            g(l.div, {
              ...c,
              className: le(hi, ...re, 'framer-72rtr7', m),
              ref: t ?? C,
              style: { ...o },
              children: [
                e('div', {
                  className: 'framer-16113bk',
                  'data-framer-name': 'fixed',
                  name: 'fixed',
                  children: e(ee, {
                    breakpoint: f,
                    overrides: {
                      XXbQgpb6O: { width: 'calc(min(100vw, 406px) - 16px)' },
                    },
                    children: e(M, {
                      width: 'max(min(100vw, 1380px) - 48px, 1px)',
                      children: e(Ce, {
                        className: 'framer-1kntkg0-container',
                        children: e(ee, {
                          breakpoint: f,
                          overrides: { XXbQgpb6O: { variant: 'jMFzaKYw5' } },
                          children: e(en, {
                            height: '100%',
                            id: 'cy3yV9IeJ',
                            layoutId: 'cy3yV9IeJ',
                            style: { width: '100%' },
                            variant: 'EO_UroCgC',
                            width: '100%',
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                g('div', {
                  className: 'framer-uw1cov',
                  'data-framer-name': 'hero',
                  id: v,
                  name: 'hero',
                  ref: H,
                  children: [
                    e(Be, {
                      __framer__loop: id,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: 'loop',
                      __framer__loopTransition: od,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: 'framer-qnxw74',
                      'data-framer-name': 'background pattern',
                      name: 'background pattern',
                      transformTemplate: sd,
                      children: e(Ne, {
                        className: 'framer-167qq28',
                        'data-framer-name': 'Vector',
                        layout: 'position',
                        name: 'Vector',
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 1200"><g><defs><radialGradient id="idss10994464926_1g-809947221" cy="0.5" cx="0.5" r="0.5" gradientTransform="translate(0.5, 0.5) scale(1 1) translate(-0.5, -0.5)"><stop offset="0" stop-color="rgba(255, 255, 255, 0.43)" stop-opacity="0.43"></stop><stop offset="0.7117117117117118" stop-color="rgba(217, 217, 217, 0)" stop-opacity="0"></stop></radialGradient></defs><path d="M 600 642 L 669.218 106.865 L 768.055 24.27 L 600 642 L 924.436 95.027 L 926.182 223.135 L 600 642 L 1019.618 330 L 1147.309 349.946 L 600 642 L 1195.745 513.405 L 1099.2 598.595 L 600 642 L 1078.909 738.541 L 1147.309 847.243 L 600 642 L 1054.364 990.595 L 926.182 974.054 L 600 642 L 806.127 1050.486 L 768.055 1172.919 L 600 642 L 597.873 1197.189 L 526.527 1090.324 L 600 642 L 389.618 1050.486 L 271.309 1102.162 L 600 642 L 141.382 990.595 L 176.127 867.189 L 600 642 L 116.891 738.541 L 48.745 706.618 L 598 642 L 96.545 598.595 L 0 513.405 L 600 642 L 48.436 349.946 L 176.127 330 L 600 642 L 269.618 223.135 L 271.309 95.027 L 600 642 L 427.691 24.27 L 526.527 106.865 Z" fill="url(#idss10994464926_1g-809947221)"></path></g></svg>',
                        svgContentId: 10994464926,
                        withExternalLayout: !0,
                      }),
                    }),
                    e('div', {
                      className: 'framer-1q3xhik',
                      'data-framer-name': 'headlines',
                      name: 'headlines',
                      children: g('div', {
                        className: 'framer-1yepqim',
                        'data-framer-name': 'stack',
                        name: 'stack',
                        children: [
                          e(ar, {
                            __framer__animate: { transition: Gr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ze,
                            __framer__exit: Ct,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(p, {
                              children: e('h6', {
                                className: 'framer-styles-preset-1nl4nl9',
                                'data-styles-preset': 'C3wRpoMJX',
                                style: {
                                  '--framer-text-color': 'rgb(255, 255, 255)',
                                },
                                children: 'INTRODUCING',
                              }),
                            }),
                            className: 'framer-1fdfkpz',
                            'data-framer-name': 'INTRODUCING',
                            fonts: ['Inter'],
                            name: 'INTRODUCING',
                            verticalAlignment: 'top',
                            withExternalLayout: !0,
                          }),
                          g('div', {
                            className: 'framer-1cokx2p',
                            'data-framer-name': 'headlines',
                            name: 'headlines',
                            children: [
                              e(ar, {
                                __framer__animate: { transition: Qr },
                                __framer__animateOnce: !0,
                                __framer__enter: Ze,
                                __framer__exit: kt,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: e(p, {
                                  children: e('h1', {
                                    className: 'framer-styles-preset-10kvllk',
                                    'data-styles-preset': 'mD2wS4ps3',
                                    style: {
                                      '--framer-text-color':
                                        'rgb(253, 255, 250)',
                                    },
                                    children: 'PEPTIN',
                                  }),
                                }),
                                className: 'framer-15ehnwh',
                                'data-framer-name': 'MEMECOIN',
                                fonts: ['Inter'],
                                name: 'MEMECOIN',
                                verticalAlignment: 'center',
                                withExternalLayout: !0,
                              }),
                              e(ee, {
                                breakpoint: f,
                                overrides: {
                                  jVwZneS9k: {
                                    children: e(p, {
                                      children: e('h6', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                          '--framer-font-size': '19px',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children:
                                          'Inspired by Pepe & approved by Matt Furie',
                                      }),
                                    }),
                                  },
                                  XXbQgpb6O: {
                                    children: e(p, {
                                      children: e('h6', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                          '--framer-font-family':
                                            '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                          '--framer-font-size': '17px',
                                          '--framer-text-alignment': 'center',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children:
                                          'Inspired by Pepe & approved by Matt Furie',
                                      }),
                                    }),
                                  },
                                },
                                children: e(ar, {
                                  __framer__animate: { transition: ui },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Ze,
                                  __framer__exit: ld,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: e(p, {
                                    children: e('h6', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                        '--framer-font-family':
                                          '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                        '--framer-font-size': '34px',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children:
                                        'Inspired by Pepe & approved by Matt Furie',
                                    }),
                                  }),
                                  className: 'framer-8yynmu',
                                  'data-framer-name':
                                    'The only cryptocurrency you will HODL till the next bear run.',
                                  fonts: ['CUSTOM;Troika Regular'],
                                  name: 'The only cryptocurrency you will HODL till the next bear run.',
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                              }),
                              g(Be, {
                                __framer__animate: { transition: gi },
                                __framer__animateOnce: !0,
                                __framer__enter: Ze,
                                __framer__exit: fd,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: 'framer-ofhvc0',
                                'data-framer-name': 'CTA',
                                name: 'CTA',
                                children: [
                                  e(M, {
                                    width: '200px',
                                    children: e(Ce, {
                                      className: 'framer-1r04iak-container',
                                      whileHover: Zr,
                                      children: e(hr, {
                                        GdourQ0Kg: 'Buy $PEPTIN',
                                        height: '100%',
                                        id: 'AeirbBR15',
                                        layoutId: 'AeirbBR15',
                                        style: {
                                          height: '100%',
                                          width: '100%',
                                        },
                                        variant: 'urabo5182',
                                        width: '100%',
                                      }),
                                    }),
                                  }),
                                  e(M, {
                                    children: e(Ce, {
                                      className: 'framer-lj244q-container',
                                      children: e(Br, {
                                        dUkaU4KhJ: 'https://dexscreener.com/',
                                        height: '100%',
                                        id: 'BDEqDadqg',
                                        layoutId: 'BDEqDadqg',
                                        m_cygckEt: 'Chart',
                                        variant: 'CzGPiPVSa',
                                        width: '100%',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    g('div', {
                      className: 'framer-y43kx8',
                      'data-framer-name': 'sub-hero',
                      name: 'sub-hero',
                      children: [
                        e('div', {
                          className: 'framer-1dbm505',
                          'data-framer-name': 'address',
                          name: 'address',
                          children: e(pd, {
                            blockDocumentScrolling: !1,
                            enabled: w(),
                            children: (z) =>
                              e(Nn, {
                                children: e(ee, {
                                  breakpoint: f,
                                  overrides: {
                                    jVwZneS9k: { width: '420px' },
                                    XXbQgpb6O: {
                                      width: 'min(100vw - 16px, 390px)',
                                    },
                                  },
                                  children: e(M, {
                                    width: '500px',
                                    children: g(Ce, {
                                      className: 'framer-12pheqy-container',
                                      id: '12pheqy',
                                      ref: x,
                                      children: [
                                        e(fn, {
                                          height: '100%',
                                          id: 'rybC4WUUd',
                                          ILnGoRAop: h({ overlay: z }),
                                          layoutId: 'rybC4WUUd',
                                          style: { width: '100%' },
                                          variant: 'RIIePEulV',
                                          width: '100%',
                                        }),
                                        w() &&
                                          e(Vn, {
                                            children:
                                              z.visible &&
                                              e(Pn, {
                                                alignment: 'start',
                                                anchorRef: x,
                                                collisionDetection: !0,
                                                collisionDetectionPadding: 20,
                                                'data-framer-portal-id':
                                                  '12pheqy',
                                                offsetX: 20,
                                                offsetY: -5,
                                                onDismiss: z.hide,
                                                placement: 'top',
                                                portalSelector: '#overlay',
                                                safeArea: !0,
                                                zIndex: 11,
                                                children: e(l.div, {
                                                  animate: cd,
                                                  className:
                                                    'framer-hftvb7 hidden-tfjr65 hidden-1gask65',
                                                  exit: md,
                                                  initial: dd,
                                                  ref: D,
                                                  role: 'dialog',
                                                  children: e(P, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(p, {
                                                      children: e('p', {
                                                        style: {
                                                          '--font-selector':
                                                            'R0Y7QnJpY29sYWdlIEdyb3Rlc3F1ZS02MDA=',
                                                          '--framer-font-family':
                                                            '"Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif',
                                                          '--framer-font-size':
                                                            '10px',
                                                          '--framer-font-weight':
                                                            '600',
                                                          '--framer-letter-spacing':
                                                            '0.01em',
                                                          '--framer-text-alignment':
                                                            'center',
                                                          '--framer-text-color':
                                                            'var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, rgb(0, 0, 0))',
                                                        },
                                                        children:
                                                          'Click to copy address',
                                                      }),
                                                    }),
                                                    className: 'framer-9sj71q',
                                                    fonts: [
                                                      'GF;Bricolage Grotesque-600',
                                                    ],
                                                    verticalAlignment: 'top',
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              }),
                                          }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        }),
                        g('div', {
                          className: 'framer-1hq8n6p',
                          'data-border': !0,
                          'data-framer-name': 'get it now',
                          name: 'get it now',
                          children: [
                            g('div', {
                              className: 'framer-1c1oyo9',
                              'data-framer-name': 'stack',
                              name: 'stack',
                              children: [
                                g('div', {
                                  className: 'framer-1m19oa9',
                                  'data-framer-name': 'headlines',
                                  name: 'headlines',
                                  children: [
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: g('h2', {
                                          className:
                                            'framer-styles-preset-hp3uw5',
                                          'data-styles-preset': 'YQqYaJaGY',
                                          style: {
                                            '--framer-text-color':
                                              'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                                          },
                                          children: [
                                            'GET IT ',
                                            e('br', {}),
                                            'SOON ON:',
                                          ],
                                        }),
                                      }),
                                      className: 'framer-1q3twn1',
                                      'data-framer-name': 'GET IT NOW ON:',
                                      fonts: ['Inter'],
                                      name: 'GET IT NOW ON:',
                                      verticalAlignment: 'center',
                                      withExternalLayout: !0,
                                    }),
                                    e('div', {
                                      className: 'framer-fi7r50',
                                      'data-framer-name': 'illustration',
                                      name: 'illustration',
                                      children: e(l.div, {
                                        className: 'framer-zwbfv9',
                                        style: { rotate: 22 },
                                        children: e(ee, {
                                          breakpoint: f,
                                          overrides: {
                                            XXbQgpb6O: {
                                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 44"><path d="M 20.052 1.726 L 25.869 14.329 L 38.874 16.351 L 29.463 26.161 L 31.685 40.014 L 20.052 33.474 L 8.42 40.014 L 10.641 26.161 L 1.23 16.351 L 14.236 14.329 Z" fill="rgb(181, 13, 13)"></path></svg>',
                                              svgContentId: 10333964217,
                                            },
                                          },
                                          children: e(Ne, {
                                            className: 'framer-1y9x08v',
                                            layout: 'position',
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 72"><path d="M 35 3.438 L 45.286 24.875 L 68.287 28.313 L 51.643 45 L 55.572 68.562 L 35 57.438 L 14.428 68.562 L 18.357 45 L 1.713 28.313 L 24.714 24.875 Z" fill="rgb(181, 13, 13)"></path></svg>',
                                            svgContentId: 9942688694,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                e(M, {
                                  children: e(Ce, {
                                    className: 'framer-hx91g6-container',
                                    children: e(ee, {
                                      breakpoint: f,
                                      overrides: {
                                        XXbQgpb6O: {
                                          fadeOptions: {
                                            fadeAlpha: 0,
                                            fadeContent: !1,
                                            fadeInset: 1,
                                            fadeWidth: 20,
                                            overflow: !1,
                                          },
                                        },
                                      },
                                      children: e(Cr, {
                                        alignment: 'center',
                                        direction: 'left',
                                        fadeOptions: {
                                          fadeAlpha: 0,
                                          fadeContent: !0,
                                          fadeInset: 0,
                                          fadeWidth: 25,
                                          overflow: !1,
                                        },
                                        gap: 32,
                                        height: '100%',
                                        hoverFactor: 1,
                                        id: 'za6BhRNZ7',
                                        layoutId: 'za6BhRNZ7',
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        sizingOptions: {
                                          heightType: !0,
                                          widthType: !0,
                                        },
                                        slots: [
                                          g(l.div, {
                                            className: 'framer-6b1r33',
                                            'data-framer-name': 'slider',
                                            name: 'slider',
                                            children: [
                                              e(M, {
                                                children: e(Ce, {
                                                  className:
                                                    'framer-gs36rl-container',
                                                  children: e(qr, {
                                                    height: '100%',
                                                    id: 'hKoeZHRL5',
                                                    Its1JhWV6: {
                                                      borderColor:
                                                        'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)) /* {"name":"RED Peptin"} */',
                                                      borderStyle: 'solid',
                                                      borderWidth: 2,
                                                    },
                                                    layoutId: 'hKoeZHRL5',
                                                    MXQbksIQp:
                                                      'https://www.gate.io/',
                                                    OuwuIp1nU: 'Gate.io',
                                                    width: '100%',
                                                  }),
                                                }),
                                              }),
                                              e(M, {
                                                children: e(Ce, {
                                                  className:
                                                    'framer-6a6ujw-container',
                                                  children: e(qr, {
                                                    height: '100%',
                                                    id: 'LZEnNjHJt',
                                                    Its1JhWV6: {
                                                      borderColor:
                                                        'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)) /* {"name":"RED Peptin"} */',
                                                      borderStyle: 'solid',
                                                      borderWidth: 2,
                                                    },
                                                    layoutId: 'LZEnNjHJt',
                                                    MXQbksIQp:
                                                      'https://www.bitget.com/',
                                                    OuwuIp1nU: 'Bitget',
                                                    width: '100%',
                                                  }),
                                                }),
                                              }),
                                              e(M, {
                                                children: e(Ce, {
                                                  className:
                                                    'framer-47qg1n-container',
                                                  children: e(qr, {
                                                    height: '100%',
                                                    id: 'k5OEctViG',
                                                    Its1JhWV6: {
                                                      borderColor:
                                                        'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)) /* {"name":"RED Peptin"} */',
                                                      borderStyle: 'solid',
                                                      borderWidth: 2,
                                                    },
                                                    layoutId: 'k5OEctViG',
                                                    MXQbksIQp:
                                                      'https://bingx.com/en-us/',
                                                    OuwuIp1nU: 'BingX',
                                                    width: '100%',
                                                  }),
                                                }),
                                              }),
                                              e(M, {
                                                children: e(Ce, {
                                                  className:
                                                    'framer-135i5op-container',
                                                  children: e(qr, {
                                                    height: '100%',
                                                    id: 'WRaWhXh_S',
                                                    Its1JhWV6: {
                                                      borderColor:
                                                        'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)) /* {"name":"RED Peptin"} */',
                                                      borderStyle: 'solid',
                                                      borderWidth: 2,
                                                    },
                                                    layoutId: 'WRaWhXh_S',
                                                    MXQbksIQp:
                                                      'https://www.lbank.com/',
                                                    OuwuIp1nU: 'LBANK',
                                                    width: '100%',
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                        speed: 50,
                                        style: {
                                          height: '100%',
                                          width: '100%',
                                        },
                                        width: '100%',
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            g('div', {
                              className: 'framer-1umlpiq',
                              'data-framer-name': 'illustration',
                              name: 'illustration',
                              children: [
                                g('div', {
                                  className: 'framer-hms3ed',
                                  'data-framer-name': 'bubble',
                                  name: 'bubble',
                                  children: [
                                    e(ee, {
                                      breakpoint: f,
                                      overrides: {
                                        jVwZneS9k: {
                                          children: e(p, {
                                            children: e('p', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                                '--framer-font-family':
                                                  '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                                '--framer-font-size': '28px',
                                                '--framer-text-alignment':
                                                  'center',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                                '--framer-text-stroke-color':
                                                  'rgb(61, 2, 3)',
                                                '--framer-text-stroke-width':
                                                  '1px',
                                              },
                                              children: 'WAGMI!',
                                            }),
                                          }),
                                        },
                                        XXbQgpb6O: {
                                          children: e(p, {
                                            children: e('p', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                                '--framer-font-family':
                                                  '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                                '--framer-font-size': '25px',
                                                '--framer-text-alignment':
                                                  'center',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                                '--framer-text-stroke-color':
                                                  'rgb(61, 2, 3)',
                                                '--framer-text-stroke-width':
                                                  '1px',
                                              },
                                              children: 'WAGMI!',
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(P, {
                                        __fromCanvasComponent: !0,
                                        children: e(p, {
                                          children: e('p', {
                                            style: {
                                              '--font-selector':
                                                'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                              '--framer-font-family':
                                                '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                              '--framer-font-size': '40px',
                                              '--framer-text-alignment':
                                                'center',
                                              '--framer-text-color':
                                                'rgb(255, 255, 255)',
                                              '--framer-text-stroke-color':
                                                'rgb(61, 2, 3)',
                                              '--framer-text-stroke-width':
                                                '1px',
                                            },
                                            children: 'WAGMI!',
                                          }),
                                        }),
                                        className: 'framer-23je42',
                                        'data-framer-name': 'WAGMI!',
                                        fonts: ['CUSTOM;Kremlin Regular'],
                                        name: 'WAGMI!',
                                        style: { rotate: 9 },
                                        verticalAlignment: 'top',
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    e(l.div, {
                                      className: 'framer-jwnynj',
                                      'data-framer-name': 'bubble',
                                      name: 'bubble',
                                      style: { rotate: 8 },
                                      children: e(ee, {
                                        breakpoint: f,
                                        overrides: {
                                          jVwZneS9k: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 170 86"><path d="M 21.499 0.997 L 148.501 0.997 C 155.403 0.997 161 7.149 161 14.734 L 161 50.998 C 161 58.583 155.403 64.734 148.501 64.734 L 75.413 64.734 L 58.796 82.997 L 42.178 64.734 L 21.499 64.734 C 14.598 64.734 9 58.583 9 50.998 L 9 14.734 C 9 7.149 14.598 0.997 21.499 0.997 Z" fill="rgb(182, 0, 3)"></path></svg>',
                                            svgContentId: 12362359683,
                                          },
                                          XXbQgpb6O: {
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 142 82"><path d="M 11.677 0.995 L 130.323 0.995 C 136.771 0.995 142 7.072 142 14.564 L 142 50.386 C 142 57.879 136.771 63.955 130.323 63.955 L 62.044 63.955 L 46.52 81.995 L 30.995 63.955 L 11.677 63.955 C 5.229 63.955 0 57.879 0 50.386 L 0 14.564 C 0 7.072 5.229 0.995 11.677 0.995 Z" fill="rgb(182, 0, 3)"></path></svg>',
                                            svgContentId: 12837049668,
                                          },
                                        },
                                        children: e(Ne, {
                                          className: 'framer-1mev5nj',
                                          'data-framer-name': 'Vector',
                                          layout: 'position',
                                          name: 'Vector',
                                          opacity: 1,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 169 79"><path d="M 13.897 0 L 155.103 0 C 162.777 0 169 5.926 169 13.233 L 169 48.168 C 169 55.475 162.777 61.401 155.103 61.401 L 73.841 61.401 L 55.365 78.995 L 36.889 61.401 L 13.897 61.401 C 6.224 61.401 0 55.475 0 48.168 L 0 13.233 C 0 5.926 6.224 0 13.897 0 Z" fill="rgb(182, 0, 3)"></path></svg>',
                                          svgContentId: 12307554676,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                e(ee, {
                                  breakpoint: f,
                                  overrides: {
                                    jVwZneS9k: {
                                      background: {
                                        alt: 'illustration of a dollar shaped character on a skateboard',
                                        fit: 'fill',
                                        intrinsicHeight: 512,
                                        intrinsicWidth: 414,
                                        pixelHeight: 2e3,
                                        pixelWidth: 2e3,
                                        sizes: '262px',
                                        src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512',
                                        srcSet:
                                          'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                      },
                                    },
                                    XXbQgpb6O: {
                                      background: {
                                        alt: 'illustration of a dollar shaped character on a skateboard',
                                        fit: 'fill',
                                        intrinsicHeight: 512,
                                        intrinsicWidth: 414,
                                        pixelHeight: 2e3,
                                        pixelWidth: 2e3,
                                        sizes: '386px',
                                        src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512',
                                        srcSet:
                                          'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                      },
                                    },
                                  },
                                  children: e(ne, {
                                    background: {
                                      alt: 'illustration of a dollar shaped character on a skateboard',
                                      fit: 'fill',
                                      intrinsicHeight: 512,
                                      intrinsicWidth: 414,
                                      pixelHeight: 2e3,
                                      pixelWidth: 2e3,
                                      sizes: '704px',
                                      src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512',
                                      srcSet:
                                        'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                    },
                                    className: 'framer-bszj59',
                                    'data-framer-name':
                                      'dollafella by pikisuperstar',
                                    name: 'dollafella by pikisuperstar',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e(M, {
                      children: e(Ce, {
                        className: 'framer-obz7do-container',
                        children: e(kr, {
                          alignment: 'center',
                          direction: 'left',
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !1,
                            fadeInset: 0,
                            fadeWidth: 23,
                            overflow: !1,
                          },
                          gap: 0,
                          height: '100%',
                          hoverFactor: 1,
                          id: 'TNCldh1yb',
                          layoutId: 'TNCldh1yb',
                          padding: 0,
                          paddingBottom: 0,
                          paddingLeft: 0,
                          paddingPerSide: !1,
                          paddingRight: 0,
                          paddingTop: 0,
                          sizingOptions: { heightType: !0, widthType: !0 },
                          slots: [
                            g(l.div, {
                              className: 'framer-6v2ke1',
                              'data-framer-name': 'Ticker Content',
                              name: 'Ticker Content',
                              children: [
                                e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 2200,
                                    intrinsicWidth: 2200,
                                    pixelHeight: 2e3,
                                    pixelWidth: 2e3,
                                    sizes: '41px',
                                    src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                  },
                                  className: 'framer-jnqlvw',
                                  'data-framer-name': 'chickceen_2',
                                  name: 'chickceen_2',
                                }),
                                e(l.div, {
                                  className: 'framer-1dcd7ze',
                                  children: e(P, {
                                    __fromCanvasComponent: !0,
                                    children: e(p, {
                                      children: e('p', {
                                        style: {
                                          '--font-selector':
                                            'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                          '--framer-font-family':
                                            '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                          '--framer-font-size': '28px',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'PEPTIN',
                                      }),
                                    }),
                                    className: 'framer-17r9par',
                                    fonts: ['CUSTOM;Kremlin Regular'],
                                    transformTemplate: Sr,
                                    verticalAlignment: 'top',
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 2200,
                                    intrinsicWidth: 2200,
                                    pixelHeight: 2e3,
                                    pixelWidth: 2e3,
                                    sizes: '41px',
                                    src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                  },
                                  className: 'framer-kzeuec',
                                  'data-framer-name': 'chickceen_2',
                                  name: 'chickceen_2',
                                }),
                                e(P, {
                                  __fromCanvasComponent: !0,
                                  children: e(p, {
                                    children: e('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                        '--framer-font-family':
                                          '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                        '--framer-font-size': '28px',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'PEPTIN',
                                    }),
                                  }),
                                  className: 'framer-1uw5uix',
                                  fonts: ['CUSTOM;Kremlin Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                                e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 2200,
                                    intrinsicWidth: 2200,
                                    pixelHeight: 2e3,
                                    pixelWidth: 2e3,
                                    sizes: '41px',
                                    src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                  },
                                  className: 'framer-g299kz',
                                  'data-framer-name': 'chickceen_2',
                                  name: 'chickceen_2',
                                }),
                                e(P, {
                                  __fromCanvasComponent: !0,
                                  children: e(p, {
                                    children: e('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                        '--framer-font-family':
                                          '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                        '--framer-font-size': '28px',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'PEPTIN',
                                    }),
                                  }),
                                  className: 'framer-1n5d9x5',
                                  fonts: ['CUSTOM;Kremlin Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                                e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 2200,
                                    intrinsicWidth: 2200,
                                    pixelHeight: 2e3,
                                    pixelWidth: 2e3,
                                    sizes: '41px',
                                    src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                  },
                                  className: 'framer-uwoxwd',
                                  'data-framer-name': 'chickceen_2',
                                  name: 'chickceen_2',
                                }),
                                e(P, {
                                  __fromCanvasComponent: !0,
                                  children: e(p, {
                                    children: e('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                        '--framer-font-family':
                                          '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                        '--framer-font-size': '28px',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'PEPTIN',
                                    }),
                                  }),
                                  className: 'framer-19rmzz8',
                                  fonts: ['CUSTOM;Kremlin Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                                e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 2200,
                                    intrinsicWidth: 2200,
                                    pixelHeight: 2e3,
                                    pixelWidth: 2e3,
                                    sizes: '41px',
                                    src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                  },
                                  className: 'framer-xcyvaa',
                                  'data-framer-name': 'chickceen_2',
                                  name: 'chickceen_2',
                                }),
                                e(P, {
                                  __fromCanvasComponent: !0,
                                  children: e(p, {
                                    children: e('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                        '--framer-font-family':
                                          '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                        '--framer-font-size': '28px',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'PEPTIN',
                                    }),
                                  }),
                                  className: 'framer-qoqy90',
                                  fonts: ['CUSTOM;Kremlin Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                                e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 2200,
                                    intrinsicWidth: 2200,
                                    pixelHeight: 2e3,
                                    pixelWidth: 2e3,
                                    sizes: '41px',
                                    src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                  },
                                  className: 'framer-12f9xqt',
                                  'data-framer-name': 'chickceen_2',
                                  name: 'chickceen_2',
                                }),
                                e(P, {
                                  __fromCanvasComponent: !0,
                                  children: e(p, {
                                    children: e('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                        '--framer-font-family':
                                          '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                        '--framer-font-size': '28px',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'PEPTIN',
                                    }),
                                  }),
                                  className: 'framer-1srrrlr',
                                  fonts: ['CUSTOM;Kremlin Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                                e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 2200,
                                    intrinsicWidth: 2200,
                                    pixelHeight: 2e3,
                                    pixelWidth: 2e3,
                                    sizes: '41px',
                                    src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                  },
                                  className: 'framer-zdckpa',
                                  'data-framer-name': 'chickceen_2',
                                  name: 'chickceen_2',
                                }),
                                e(P, {
                                  __fromCanvasComponent: !0,
                                  children: e(p, {
                                    children: e('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                        '--framer-font-family':
                                          '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                        '--framer-font-size': '28px',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'PEPTIN',
                                    }),
                                  }),
                                  className: 'framer-16avoa1',
                                  fonts: ['CUSTOM;Kremlin Regular'],
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                                e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 2200,
                                    intrinsicWidth: 2200,
                                    pixelHeight: 2e3,
                                    pixelWidth: 2e3,
                                    sizes: '41px',
                                    src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                  },
                                  className: 'framer-1w4p4jt',
                                  'data-framer-name': 'chickceen_2',
                                  name: 'chickceen_2',
                                }),
                              ],
                            }),
                          ],
                          speed: 180,
                          style: { height: '100%', width: '100%' },
                          width: '100%',
                        }),
                      }),
                    }),
                  ],
                }),
                g('div', {
                  className: 'framer-1ysukz3',
                  'data-framer-name': 'about',
                  id: R,
                  name: 'about',
                  ref: L,
                  children: [
                    g('div', {
                      className: 'framer-1wb4hw',
                      'data-framer-name': 'stack',
                      name: 'stack',
                      children: [
                        e(ee, {
                          breakpoint: f,
                          overrides: {
                            jVwZneS9k: { viewBox: '0 0 1150.07 172' },
                            XXbQgpb6O: {
                              children: e(p, {
                                children: e('p', {
                                  style: {
                                    '--font-selector':
                                      'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                    '--framer-font-family':
                                      '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                    '--framer-font-size':
                                      '46.295920435010416px',
                                    '--framer-letter-spacing': '-0.07px',
                                    '--framer-text-alignment': 'center',
                                    '--framer-text-color': 'rgb(255, 255, 255)',
                                  },
                                  children: 'WHO IS PEPTIN?',
                                }),
                              }),
                              viewBox: '0 0 370.07 56',
                            },
                          },
                          children: e(ar, {
                            __framer__animate: { transition: Gr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ze,
                            __framer__exit: Ct,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(p, {
                              children: e('p', {
                                style: {
                                  '--font-selector':
                                    'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                  '--framer-font-family':
                                    '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                  '--framer-font-size': '143.57435309557712px',
                                  '--framer-letter-spacing': '-0.07px',
                                  '--framer-text-color': 'rgb(255, 255, 255)',
                                },
                                children: 'WHO IS PEPTIN?',
                              }),
                            }),
                            className: 'framer-vk3468',
                            'data-framer-name': 'fit text headline',
                            fonts: ['CUSTOM;Kremlin Regular'],
                            name: 'fit text headline',
                            verticalAlignment: 'top',
                            viewBox: '0 0 1150 172',
                            withExternalLayout: !0,
                          }),
                        }),
                        g('div', {
                          className: 'framer-29eknz',
                          'data-framer-name': 'story',
                          name: 'story',
                          children: [
                            g('div', {
                              className: 'framer-obmqbz',
                              'data-framer-name': 'headline',
                              name: 'headline',
                              children: [
                                e('div', {
                                  className: 'framer-as7jeh',
                                  'data-border': !0,
                                  'data-framer-name': 'stack',
                                  name: 'stack',
                                  children: e('div', {
                                    className: 'framer-b2xvzq',
                                    children: e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: g('h4', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '37px',
                                            '--framer-text-color':
                                              'rgb(35, 117, 48)',
                                          },
                                          children: [
                                            'PUTIN ',
                                            e('span', {
                                              style: {
                                                '--font-selector':
                                                  'R0Y7QWNsb25pY2EtcmVndWxhcg==',
                                                '--framer-font-family':
                                                  '"Aclonica", "Aclonica Placeholder", sans-serif',
                                              },
                                              children: '+ ',
                                            }),
                                            'PEPE',
                                          ],
                                        }),
                                      }),
                                      className: 'framer-wp5luw',
                                      'data-framer-name':
                                        'THE POSSIBILITIES ARE ENDLESS.',
                                      fonts: [
                                        'CUSTOM;Kremlin Regular',
                                        'GF;Aclonica-regular',
                                      ],
                                      name: 'THE POSSIBILITIES ARE ENDLESS.',
                                      verticalAlignment: 'center',
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                e(ee, {
                                  breakpoint: f,
                                  overrides: {
                                    jVwZneS9k: {
                                      background: {
                                        alt: '',
                                        fit: 'fit',
                                        intrinsicHeight: 2e3,
                                        intrinsicWidth: 2e3,
                                        loading: 'lazy',
                                        pixelHeight: 2e3,
                                        pixelWidth: 2e3,
                                        positionX: 'center',
                                        positionY: 'center',
                                        sizes:
                                          'calc(min(min(100vw - 48px, 1150px), 1200px) - 442px)',
                                        src: 'https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png',
                                        srcSet:
                                          'https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png?scale-down-to=512 512w,https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png 2000w',
                                      },
                                    },
                                    XXbQgpb6O: {
                                      background: {
                                        alt: '',
                                        fit: 'fit',
                                        intrinsicHeight: 2e3,
                                        intrinsicWidth: 2e3,
                                        loading: 'lazy',
                                        pixelHeight: 2e3,
                                        pixelWidth: 2e3,
                                        positionX: 'center',
                                        positionY: 'center',
                                        sizes:
                                          'calc(min(min(100vw - 16px, 390px), 1200px) - 182px)',
                                        src: 'https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png',
                                        srcSet:
                                          'https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png?scale-down-to=512 512w,https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png 2000w',
                                      },
                                    },
                                  },
                                  children: e(ne, {
                                    background: {
                                      alt: '',
                                      fit: 'fit',
                                      intrinsicHeight: 2e3,
                                      intrinsicWidth: 2e3,
                                      loading: 'lazy',
                                      pixelHeight: 2e3,
                                      pixelWidth: 2e3,
                                      positionX: 'center',
                                      positionY: 'center',
                                      src: 'https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png',
                                      srcSet:
                                        'https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png?scale-down-to=512 512w,https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9flsmpe78UMNtr9T12o7fubwmqc.png 2000w',
                                    },
                                    className: 'framer-752w37',
                                    'data-framer-name':
                                      'killer_20240704021419_',
                                    name: 'killer_20240704021419_',
                                  }),
                                }),
                              ],
                            }),
                            e('div', {
                              className: 'framer-1sw2kq1',
                              'data-framer-name': 'copy and video',
                              name: 'copy and video',
                              children: g('div', {
                                className: 'framer-1f4l70i',
                                'data-framer-name': 'copy',
                                name: 'copy',
                                children: [
                                  e('div', {
                                    className: 'framer-q7769h',
                                    'data-border': !0,
                                    'data-framer-name': 'stack',
                                    name: 'stack',
                                    children: e(ee, {
                                      breakpoint: f,
                                      overrides: {
                                        jVwZneS9k: {
                                          children: g(p, {
                                            children: [
                                              g('p', {
                                                style: {
                                                  '--font-selector':
                                                    'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                  '--framer-font-family':
                                                    '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                  '--framer-font-size': '15px',
                                                  '--framer-letter-spacing':
                                                    '0.01em',
                                                  '--framer-text-alignment':
                                                    'left',
                                                  '--framer-text-color':
                                                    'rgb(255, 255, 255)',
                                                },
                                                children: [
                                                  'Inspired by Pepe & approved by Matt Furie, Putin arises in the form of Peptin!',
                                                  g('span', {
                                                    style: {
                                                      '--framer-font-size':
                                                        '34px',
                                                      '--framer-text-color':
                                                        'rgb(15, 44, 35)',
                                                    },
                                                    children: [
                                                      e('br', {}),
                                                      e('br', {}),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              g('p', {
                                                style: {
                                                  '--font-selector':
                                                    'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                  '--framer-font-family':
                                                    '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                  '--framer-font-size': '15px',
                                                  '--framer-letter-spacing':
                                                    '0.01em',
                                                  '--framer-text-alignment':
                                                    'left',
                                                  '--framer-text-color':
                                                    'rgb(255, 255, 255)',
                                                },
                                                children: [
                                                  'Peptin, tired of the western control era, is here for the universal takeover under the Russian Federation!',
                                                  e('span', {
                                                    style: {
                                                      '--framer-font-size':
                                                        '34px',
                                                      '--framer-text-color':
                                                        'rgb(15, 44, 35)',
                                                    },
                                                    children: e('br', {}),
                                                  }),
                                                ],
                                              }),
                                              g('p', {
                                                style: {
                                                  '--font-selector':
                                                    'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                  '--framer-font-family':
                                                    '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                  '--framer-font-size': '15px',
                                                  '--framer-letter-spacing':
                                                    '0.01em',
                                                  '--framer-text-alignment':
                                                    'left',
                                                  '--framer-text-color':
                                                    'rgb(255, 255, 255)',
                                                },
                                                children: [
                                                  'For decades the west has been in control and has countlessly stabbed Peptin and the Russian Federation in the back. ',
                                                  e('br', {}),
                                                  e('br', {}),
                                                  'Enough is enough. ',
                                                  e('br', {}),
                                                  e('br', {}),
                                                  'The takeover begins..',
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        XXbQgpb6O: {
                                          children: g(p, {
                                            children: [
                                              g('p', {
                                                style: {
                                                  '--font-selector':
                                                    'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                  '--framer-font-family':
                                                    '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                  '--framer-font-size': '15px',
                                                  '--framer-letter-spacing':
                                                    '0.01em',
                                                  '--framer-text-alignment':
                                                    'left',
                                                  '--framer-text-color':
                                                    'rgb(255, 255, 255)',
                                                },
                                                children: [
                                                  'Inspired by Pepe & approved by Matt Furie, Putin arises in the form of Peptin!',
                                                  g('span', {
                                                    style: {
                                                      '--framer-font-size':
                                                        '34px',
                                                      '--framer-text-color':
                                                        'rgb(15, 44, 35)',
                                                    },
                                                    children: [
                                                      e('br', {}),
                                                      e('br', {}),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              g('p', {
                                                style: {
                                                  '--font-selector':
                                                    'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                  '--framer-font-family':
                                                    '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                  '--framer-font-size': '15px',
                                                  '--framer-letter-spacing':
                                                    '0.01em',
                                                  '--framer-text-alignment':
                                                    'left',
                                                  '--framer-text-color':
                                                    'rgb(255, 255, 255)',
                                                },
                                                children: [
                                                  'Peptin, tired of the western control era, is here for the universal takeover under the Russian Federation!',
                                                  e('span', {
                                                    style: {
                                                      '--framer-font-size':
                                                        '34px',
                                                      '--framer-text-color':
                                                        'rgb(15, 44, 35)',
                                                    },
                                                    children: e('br', {}),
                                                  }),
                                                ],
                                              }),
                                              g('p', {
                                                style: {
                                                  '--font-selector':
                                                    'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                  '--framer-font-family':
                                                    '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                  '--framer-font-size': '15px',
                                                  '--framer-letter-spacing':
                                                    '0.01em',
                                                  '--framer-text-alignment':
                                                    'left',
                                                  '--framer-text-color':
                                                    'rgb(255, 255, 255)',
                                                },
                                                children: [
                                                  'For decades the west has been in control and has countlessly stabbed Peptin and the Russian Federation in the back. ',
                                                  e('br', {}),
                                                  e('br', {}),
                                                  'Enough is enough. ',
                                                  e('br', {}),
                                                  e('br', {}),
                                                  'The takeover begins..',
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                      },
                                      children: e(P, {
                                        __fromCanvasComponent: !0,
                                        children: g(p, {
                                          children: [
                                            g('p', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                '--framer-font-family':
                                                  '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                '--framer-font-size': '20px',
                                                '--framer-letter-spacing':
                                                  '0.01em',
                                                '--framer-text-alignment':
                                                  'left',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                              },
                                              children: [
                                                e('span', {
                                                  style: {
                                                    '--framer-font-size':
                                                      '34px',
                                                  },
                                                  children:
                                                    'Inspired by Pepe & approved by Matt Furie, Putin arises in the form of Peptin!',
                                                }),
                                                g('span', {
                                                  style: {
                                                    '--framer-font-size':
                                                      '34px',
                                                    '--framer-text-color':
                                                      'rgb(15, 44, 35)',
                                                  },
                                                  children: [
                                                    e('br', {}),
                                                    e('br', {}),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            g('p', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                '--framer-font-family':
                                                  '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                '--framer-font-size': '20px',
                                                '--framer-letter-spacing':
                                                  '0.01em',
                                                '--framer-text-alignment':
                                                  'left',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                              },
                                              children: [
                                                e('span', {
                                                  style: {
                                                    '--framer-font-size':
                                                      '34px',
                                                  },
                                                  children:
                                                    'Peptin, tired of the western control era, is here for the universal takeover under the Russian Federation!',
                                                }),
                                                e('span', {
                                                  style: {
                                                    '--framer-font-size':
                                                      '34px',
                                                    '--framer-text-color':
                                                      'rgb(15, 44, 35)',
                                                  },
                                                  children: e('br', {}),
                                                }),
                                              ],
                                            }),
                                            g('p', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                '--framer-font-family':
                                                  '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                '--framer-font-size': '34px',
                                                '--framer-letter-spacing':
                                                  '0.01em',
                                                '--framer-text-alignment':
                                                  'left',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                              },
                                              children: [
                                                'For decades the west has been in control and has countlessly stabbed Peptin and the Russian Federation in the back. ',
                                                e('br', {}),
                                                e('br', {}),
                                                'Enough is enough. ',
                                                e('br', {}),
                                                e('br', {}),
                                                'The takeover begins..',
                                              ],
                                            }),
                                          ],
                                        }),
                                        className: 'framer-1y0lgvf',
                                        'data-framer-name':
                                          "In the vibrant and ever-evolving world of cryptocurrency, where innovation and creativity reign supreme, there emerged a phenomenon that captured the hearts and minds of digital enthusiasts everywhere: Memecoin. It all began with a spark of inspiration, a playful nod to the internet culture that thrived on humor and satire. A group of visionary developers and meme enthusiasts came together with a shared passion for both cryptocurrency and the art of internet memes. They envisioned a platform that would combine these two seemingly disparate worlds into a harmonious symphony of laughter and digital currency. Thus, Memecoin was born \u2013 a revolutionary platform that empowered creators to unleash their imagination and bring their wildest meme-inspired dreams to life. It wasn't just about trading coins; it was about building communities, sparking conversations, and spreading joy through the power of memes.",
                                        fonts: ['CUSTOM;Troika Regular'],
                                        name: "In the vibrant and ever-evolving world of cryptocurrency, where innovation and creativity reign supreme, there emerged a phenomenon that captured the hearts and minds of digital enthusiasts everywhere: Memecoin. It all began with a spark of inspiration, a playful nod to the internet culture that thrived on humor and satire. A group of visionary developers and meme enthusiasts came together with a shared passion for both cryptocurrency and the art of internet memes. They envisioned a platform that would combine these two seemingly disparate worlds into a harmonious symphony of laughter and digital currency. Thus, Memecoin was born \u2013 a revolutionary platform that empowered creators to unleash their imagination and bring their wildest meme-inspired dreams to life. It wasn't just about trading coins; it was about building communities, sparking conversations, and spreading joy through the power of memes.",
                                        verticalAlignment: 'top',
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  w() &&
                                    e(M, {
                                      width: '200px',
                                      children: e(Ce, {
                                        className:
                                          'framer-1bofeh1-container hidden-tfjr65 hidden-1gask65',
                                        whileHover: hd,
                                        children: e(hr, {
                                          GdourQ0Kg: 'Join PEPTIN',
                                          height: '100%',
                                          id: 'FoA671ZXO',
                                          layoutId: 'FoA671ZXO',
                                          style: {
                                            height: '100%',
                                            width: '100%',
                                          },
                                          variant: 'urabo5182',
                                          width: '100%',
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        k() &&
                          e(ee, {
                            breakpoint: f,
                            overrides: {
                              jVwZneS9k: { width: '229px' },
                              XXbQgpb6O: { width: '229px' },
                            },
                            children: e(M, {
                              children: e(Ce, {
                                className:
                                  'framer-z987dd-container hidden-72rtr7',
                                'data-framer-name': 'tablet and mobile button',
                                name: 'tablet and mobile button',
                                whileHover: Zr,
                                children: e(ee, {
                                  breakpoint: f,
                                  overrides: {
                                    jVwZneS9k: {
                                      GdourQ0Kg: 'Join $KERMIT',
                                      I5Cx2nwHn:
                                        'https://t.me/KermitOnEthereum',
                                    },
                                    XXbQgpb6O: {
                                      GdourQ0Kg: 'Join $Kermit TG',
                                      I5Cx2nwHn:
                                        'https://t.me/KermitOnEthereum',
                                    },
                                  },
                                  children: e(hr, {
                                    GdourQ0Kg: 'Buy on Uniswap',
                                    height: '100%',
                                    id: 'HzdOxRXVE',
                                    layoutId: 'HzdOxRXVE',
                                    name: 'tablet and mobile button',
                                    style: { height: '100%', width: '100%' },
                                    variant: 'urabo5182',
                                    width: '100%',
                                  }),
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    e('div', {
                      className: 'framer-9612wo',
                      'data-framer-name': 'waves background',
                      name: 'waves background',
                      children: e(ee, {
                        breakpoint: f,
                        overrides: {
                          jVwZneS9k: {
                            background: {
                              alt: '',
                              fit: 'fill',
                              intrinsicHeight: 4375,
                              intrinsicWidth: 7292,
                              pixelHeight: 4375,
                              pixelWidth: 7292,
                              sizes: '100vw',
                              src: 'https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg',
                              srcSet:
                                'https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg 7292w',
                            },
                          },
                          XXbQgpb6O: {
                            background: {
                              alt: '',
                              fit: 'fill',
                              intrinsicHeight: 4375,
                              intrinsicWidth: 7292,
                              pixelHeight: 4375,
                              pixelWidth: 7292,
                              sizes: '100vw',
                              src: 'https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg',
                              srcSet:
                                'https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg 7292w',
                            },
                          },
                        },
                        children: e(ne, {
                          background: {
                            alt: '',
                            fit: 'fill',
                            intrinsicHeight: 4375,
                            intrinsicWidth: 7292,
                            loading: 'lazy',
                            pixelHeight: 4375,
                            pixelWidth: 7292,
                            sizes: '100vw',
                            src: 'https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg',
                            srcSet:
                              'https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/Vf58AgBqKJ8CmyNWpOzVkvThs0.jpg 7292w',
                          },
                          className: 'framer-1y5nlld',
                          'data-framer-name':
                            '$4ee861b2_1e17_444f_8dbe_fa836a5b9352',
                          name: '$4ee861b2_1e17_444f_8dbe_fa836a5b9352',
                        }),
                      }),
                    }),
                  ],
                }),
                g('div', {
                  className: 'framer-1xxhkox',
                  'data-framer-name': 'tokenomics',
                  id: F,
                  name: 'tokenomics',
                  ref: V,
                  children: [
                    g('div', {
                      className: 'framer-k50xpg',
                      'data-framer-name': 'headlines',
                      name: 'headlines',
                      children: [
                        e(ar, {
                          __framer__animate: { transition: Gr },
                          __framer__animateOnce: !0,
                          __framer__enter: Ze,
                          __framer__exit: Ct,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: e(p, {
                            children: e('h6', {
                              className: 'framer-styles-preset-1nl4nl9',
                              'data-styles-preset': 'C3wRpoMJX',
                              style: {
                                '--framer-text-color': 'rgb(255, 255, 255)',
                              },
                              children: 'It\u2019s always about that',
                            }),
                          }),
                          className: 'framer-66vgt8',
                          'data-framer-name': 'It\u2019s always about that',
                          fonts: ['Inter'],
                          name: 'It\u2019s always about that',
                          verticalAlignment: 'top',
                          withExternalLayout: !0,
                        }),
                        e(ee, {
                          breakpoint: f,
                          overrides: {
                            XXbQgpb6O: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          children: e(ar, {
                            __framer__animate: { transition: Qr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ze,
                            __framer__exit: kt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(p, {
                              children: e('p', {
                                style: {
                                  '--font-selector':
                                    'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                  '--framer-font-family':
                                    '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                  '--framer-font-size': '28.77982446300493px',
                                  '--framer-letter-spacing': '-0.07px',
                                  '--framer-line-height': '0.9em',
                                  '--framer-text-color': 'rgb(255, 255, 255)',
                                },
                                children: 'TOKENOMICS',
                              }),
                            }),
                            className: 'framer-s25ft2',
                            'data-framer-name': 'fit text headline',
                            fonts: ['CUSTOM;Kremlin Regular'],
                            name: 'fit text headline',
                            verticalAlignment: 'top',
                            viewBox: '0 0 187.07 26',
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    e(ee, {
                      breakpoint: f,
                      overrides: {
                        jVwZneS9k: {
                          background: {
                            alt: 'illustration of a purse shaped character holding coins',
                            fit: 'fit',
                            intrinsicHeight: 884,
                            intrinsicWidth: 764,
                            loading: 'lazy',
                            pixelHeight: 1e3,
                            pixelWidth: 1e3,
                            positionX: 'center',
                            positionY: 'center',
                            sizes: '714px',
                            src: 'https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?lossless=1',
                            srcSet:
                              'https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?scale-down-to=512&lossless=1 512w,https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?lossless=1 1000w',
                          },
                        },
                        XXbQgpb6O: {
                          background: {
                            alt: 'illustration of a purse shaped character holding coins',
                            fit: 'fit',
                            intrinsicHeight: 884,
                            intrinsicWidth: 764,
                            loading: 'lazy',
                            pixelHeight: 1e3,
                            pixelWidth: 1e3,
                            positionX: 'center',
                            positionY: 'center',
                            sizes: '326px',
                            src: 'https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?lossless=1',
                            srcSet:
                              'https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?scale-down-to=512&lossless=1 512w,https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?lossless=1 1000w',
                          },
                        },
                      },
                      children: e(pi, {
                        __framer__spring: {
                          damping: 60,
                          delay: 0,
                          duration: 0.3,
                          ease: [0.44, 0, 0.56, 1],
                          mass: 1,
                          stiffness: 500,
                          type: 'spring',
                        },
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 320,
                            },
                          },
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: 'onInView',
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        background: {
                          alt: 'illustration of a purse shaped character holding coins',
                          fit: 'fit',
                          intrinsicHeight: 884,
                          intrinsicWidth: 764,
                          loading: 'lazy',
                          pixelHeight: 1e3,
                          pixelWidth: 1e3,
                          positionX: 'center',
                          positionY: 'center',
                          sizes: '656px',
                          src: 'https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?lossless=1',
                          srcSet:
                            'https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?scale-down-to=512&lossless=1 512w,https://framerusercontent.com/images/xeG6XsUFI1CjqvyAVzHjfNRlMI.png?lossless=1 1000w',
                        },
                        className: 'framer-1r4k5ho',
                        'data-framer-name': 'pursefella by pikisuperstar',
                        name: 'pursefella by pikisuperstar',
                      }),
                    }),
                    g('div', {
                      className: 'framer-1x8ncrw',
                      'data-border': !0,
                      'data-framer-name': 'chart',
                      name: 'chart',
                      children: [
                        e(M, {
                          children: e(Ce, {
                            className: 'framer-xvheh-container',
                            children: e(Ca, {
                              back: 'rgba(62, 97, 82, 0)',
                              diagonal: !0,
                              direction: 'left',
                              duration: 5,
                              front: 'rgb(84, 9, 9)',
                              height: '100%',
                              id: 'R5o6m0ae6',
                              layoutId: 'R5o6m0ae6',
                              patternType: 'crosses',
                              radius: 0,
                              scale: 39,
                              shouldAnimate: !1,
                              style: { height: '100%', width: '100%' },
                              width: '100%',
                            }),
                          }),
                        }),
                        e(M, {
                          children: e(Ce, {
                            className: 'framer-1obfe50-container',
                            children: e(Cr, {
                              alignment: 'center',
                              direction: 'left',
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !0,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !1,
                              },
                              gap: 32,
                              height: '100%',
                              hoverFactor: 1,
                              id: 'saGigX0f5',
                              layoutId: 'saGigX0f5',
                              padding: 10,
                              paddingBottom: 10,
                              paddingLeft: 10,
                              paddingPerSide: !1,
                              paddingRight: 10,
                              paddingTop: 10,
                              sizingOptions: { heightType: !0, widthType: !0 },
                              slots: [
                                g(l.div, {
                                  className: 'framer-cbimcj',
                                  'data-framer-name': 'ticker',
                                  name: 'ticker',
                                  children: [
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-ahh30z',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-1w9sw6a',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-lqivs4',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-1j20kln',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-1cvzc2p',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-1nkyvss',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-8bz2ag',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-8xc8lt',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-1orarru',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-u6v6i2',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                    e(P, {
                                      __fromCanvasComponent: !0,
                                      children: e(p, {
                                        children: e('p', {
                                          style: {
                                            '--font-selector':
                                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                            '--framer-font-family':
                                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                            '--framer-font-size': '28px',
                                            '--framer-text-color':
                                              'rgb(255, 255, 255)',
                                          },
                                          children: 'PEPTIN',
                                        }),
                                      }),
                                      className: 'framer-mfwk08',
                                      fonts: ['CUSTOM;Kremlin Regular'],
                                      verticalAlignment: 'top',
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                              speed: 145,
                              style: { height: '100%', width: '100%' },
                              width: '100%',
                            }),
                          }),
                        }),
                        e(ee, {
                          breakpoint: f,
                          overrides: {
                            jVwZneS9k: { viewBox: '0 0 2045.07 143' },
                            XXbQgpb6O: {
                              __framer__styleAppearEffectEnabled: void 0,
                              viewBox: '0 0 2045.07 143',
                            },
                          },
                          children: e(ar, {
                            __framer__animate: { transition: Qr },
                            __framer__animateOnce: !0,
                            __framer__enter: Ze,
                            __framer__exit: kt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: e(p, {
                              children: e('p', {
                                style: {
                                  '--font-selector':
                                    'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                  '--framer-font-family':
                                    '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                  '--framer-font-size': '90px',
                                  '--framer-letter-spacing': '-0.07px',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'rgb(255, 255, 255)',
                                },
                                children: 'Total Supply 1,000,000 $PEPTIN',
                              }),
                            }),
                            className: 'framer-1kh30hj',
                            'data-framer-name': 'fit text headline',
                            fonts: ['CUSTOM;Kremlin Regular'],
                            name: 'fit text headline',
                            verticalAlignment: 'top',
                            withExternalLayout: !0,
                          }),
                        }),
                        g('div', {
                          className: 'framer-1dncs4e',
                          'data-framer-name': 'chart legend',
                          name: 'chart legend',
                          children: [
                            e(M, {
                              children: e(Ce, {
                                className: 'framer-3f98js-container',
                                children: e(Qt, {
                                  height: '100%',
                                  id: 'ryZTk0wVk',
                                  jU15QRu8u:
                                    'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                                  layoutId: 'ryZTk0wVk',
                                  UT6Uu4wmc: 'LP Burned',
                                  width: '100%',
                                }),
                              }),
                            }),
                            e(M, {
                              children: e(Ce, {
                                className: 'framer-wc8yfl-container',
                                children: e(Qt, {
                                  height: '100%',
                                  id: 'QIrFFy144',
                                  jU15QRu8u:
                                    'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                                  layoutId: 'QIrFFy144',
                                  UT6Uu4wmc: 'Tax ',
                                  width: '100%',
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e('div', {
                  className: 'framer-1ijdnb4',
                  children: e(M, {
                    children: e(Ce, {
                      className: 'framer-z0hm95-container',
                      children: e(kr, {
                        alignment: 'center',
                        direction: 'left',
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !1,
                          fadeInset: 0,
                          fadeWidth: 23,
                          overflow: !1,
                        },
                        gap: 0,
                        height: '100%',
                        hoverFactor: 1,
                        id: 'DALhiDVZ2',
                        layoutId: 'DALhiDVZ2',
                        padding: 1,
                        paddingBottom: 1,
                        paddingLeft: 1,
                        paddingPerSide: !1,
                        paddingRight: 1,
                        paddingTop: 1,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          g(l.div, {
                            className: 'framer-6v2ke1',
                            'data-framer-name': 'Ticker Content',
                            name: 'Ticker Content',
                            children: [
                              e(ne, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 2200,
                                  intrinsicWidth: 2200,
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  sizes: '41px',
                                  src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                },
                                className: 'framer-jnqlvw',
                                'data-framer-name': 'chickceen_2',
                                name: 'chickceen_2',
                              }),
                              e(l.div, {
                                className: 'framer-1dcd7ze',
                                children: e(P, {
                                  __fromCanvasComponent: !0,
                                  children: e(p, {
                                    children: e('p', {
                                      style: {
                                        '--font-selector':
                                          'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                        '--framer-font-family':
                                          '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                        '--framer-font-size': '28px',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'PEPTIN',
                                    }),
                                  }),
                                  className: 'framer-17r9par',
                                  fonts: ['CUSTOM;Kremlin Regular'],
                                  transformTemplate: Sr,
                                  verticalAlignment: 'top',
                                  withExternalLayout: !0,
                                }),
                              }),
                              e(ne, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 2200,
                                  intrinsicWidth: 2200,
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  sizes: '41px',
                                  src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                },
                                className: 'framer-kzeuec',
                                'data-framer-name': 'chickceen_2',
                                name: 'chickceen_2',
                              }),
                              e(P, {
                                __fromCanvasComponent: !0,
                                children: e(p, {
                                  children: e('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                      '--framer-font-size': '28px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                    },
                                    children: 'PEPTIN',
                                  }),
                                }),
                                className: 'framer-1uw5uix',
                                fonts: ['CUSTOM;Kremlin Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                              e(ne, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 2200,
                                  intrinsicWidth: 2200,
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  sizes: '41px',
                                  src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                },
                                className: 'framer-g299kz',
                                'data-framer-name': 'chickceen_2',
                                name: 'chickceen_2',
                              }),
                              e(P, {
                                __fromCanvasComponent: !0,
                                children: e(p, {
                                  children: e('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                      '--framer-font-size': '28px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                    },
                                    children: 'PEPTIN',
                                  }),
                                }),
                                className: 'framer-1n5d9x5',
                                fonts: ['CUSTOM;Kremlin Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                              e(ne, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 2200,
                                  intrinsicWidth: 2200,
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  sizes: '41px',
                                  src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                },
                                className: 'framer-uwoxwd',
                                'data-framer-name': 'chickceen_2',
                                name: 'chickceen_2',
                              }),
                              e(P, {
                                __fromCanvasComponent: !0,
                                children: e(p, {
                                  children: e('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                      '--framer-font-size': '28px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                    },
                                    children: 'PEPTIN',
                                  }),
                                }),
                                className: 'framer-19rmzz8',
                                fonts: ['CUSTOM;Kremlin Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                              e(ne, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 2200,
                                  intrinsicWidth: 2200,
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  sizes: '41px',
                                  src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                },
                                className: 'framer-xcyvaa',
                                'data-framer-name': 'chickceen_2',
                                name: 'chickceen_2',
                              }),
                              e(P, {
                                __fromCanvasComponent: !0,
                                children: e(p, {
                                  children: e('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                      '--framer-font-size': '28px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                    },
                                    children: 'PEPTIN',
                                  }),
                                }),
                                className: 'framer-qoqy90',
                                fonts: ['CUSTOM;Kremlin Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                              e(ne, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 2200,
                                  intrinsicWidth: 2200,
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  sizes: '41px',
                                  src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                },
                                className: 'framer-12f9xqt',
                                'data-framer-name': 'chickceen_2',
                                name: 'chickceen_2',
                              }),
                              e(P, {
                                __fromCanvasComponent: !0,
                                children: e(p, {
                                  children: e('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                      '--framer-font-size': '28px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                    },
                                    children: 'PEPTIN',
                                  }),
                                }),
                                className: 'framer-1srrrlr',
                                fonts: ['CUSTOM;Kremlin Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                              e(ne, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 2200,
                                  intrinsicWidth: 2200,
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  sizes: '41px',
                                  src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                },
                                className: 'framer-zdckpa',
                                'data-framer-name': 'chickceen_2',
                                name: 'chickceen_2',
                              }),
                              e(P, {
                                __fromCanvasComponent: !0,
                                children: e(p, {
                                  children: e('p', {
                                    style: {
                                      '--font-selector':
                                        'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                      '--framer-font-family':
                                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                      '--framer-font-size': '28px',
                                      '--framer-text-color':
                                        'rgb(255, 255, 255)',
                                    },
                                    children: 'PEPTIN',
                                  }),
                                }),
                                className: 'framer-16avoa1',
                                fonts: ['CUSTOM;Kremlin Regular'],
                                verticalAlignment: 'top',
                                withExternalLayout: !0,
                              }),
                              e(ne, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 2200,
                                  intrinsicWidth: 2200,
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  sizes: '41px',
                                  src: 'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=512 512w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/kx9xZ2GN0Zr52S0ZKDhw5553h1M.png 2000w',
                                },
                                className: 'framer-1w4p4jt',
                                'data-framer-name': 'chickceen_2',
                                name: 'chickceen_2',
                              }),
                            ],
                          }),
                        ],
                        speed: 180,
                        style: { height: '100%', width: '100%' },
                        width: '100%',
                      }),
                    }),
                  }),
                }),
                g('div', {
                  className: 'framer-iho8hm',
                  'data-framer-name': 'roadmap',
                  id: q,
                  name: 'roadmap',
                  ref: E,
                  children: [
                    e('div', {
                      className: 'framer-1kc92h5',
                      'data-framer-name': 'headlines',
                      name: 'headlines',
                      children: g('div', {
                        className: 'framer-tri7lk',
                        'data-framer-name': 'copy and illustration',
                        name: 'copy and illustration',
                        children: [
                          e('div', {
                            className: 'framer-1qymh2z',
                            'data-framer-name': 'headlines',
                            name: 'headlines',
                            children: e('div', {
                              className: 'framer-1y0d41u',
                              'data-framer-name': 'upper part',
                              name: 'upper part',
                              children: e(ee, {
                                breakpoint: f,
                                overrides: {
                                  jVwZneS9k: {
                                    children: e(p, {
                                      children: e('h1', {
                                        className:
                                          'framer-styles-preset-10kvllk',
                                        'data-styles-preset': 'mD2wS4ps3',
                                        style: {
                                          '--framer-text-alignment': 'left',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'FEDMAP',
                                      }),
                                    }),
                                  },
                                  XXbQgpb6O: {
                                    __framer__styleAppearEffectEnabled: void 0,
                                    children: e(p, {
                                      children: e('h1', {
                                        className:
                                          'framer-styles-preset-10kvllk',
                                        'data-styles-preset': 'mD2wS4ps3',
                                        style: {
                                          '--framer-text-alignment': 'center',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'FEDMAP',
                                      }),
                                    }),
                                  },
                                },
                                children: e(ar, {
                                  __framer__animate: { transition: Qr },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Ze,
                                  __framer__exit: kt,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: e(p, {
                                    children: e('h1', {
                                      className: 'framer-styles-preset-gm2glu',
                                      'data-styles-preset': 'uxL_c9eRw',
                                      style: {
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'FEDMAP',
                                    }),
                                  }),
                                  className: 'framer-1kts97u',
                                  'data-framer-name': 'ROAD MAP',
                                  fonts: ['Inter'],
                                  name: 'ROAD MAP',
                                  verticalAlignment: 'center',
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                          e(ee, {
                            breakpoint: f,
                            overrides: {
                              jVwZneS9k: {
                                background: {
                                  alt: 'illustration of a coin shaped character walking between clouds',
                                  fit: 'fill',
                                  loading: 'lazy',
                                  pixelHeight: 1e3,
                                  pixelWidth: 1e3,
                                  sizes: '350px',
                                  src: 'https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png?scale-down-to=512 512w,https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png 1000w',
                                },
                                style: { rotate: 4 },
                              },
                              XXbQgpb6O: {
                                background: {
                                  alt: 'illustration of a coin shaped character walking between clouds',
                                  fit: 'fill',
                                  loading: 'lazy',
                                  pixelHeight: 1e3,
                                  pixelWidth: 1e3,
                                  sizes: '350px',
                                  src: 'https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png',
                                  srcSet:
                                    'https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png?scale-down-to=512 512w,https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png 1000w',
                                },
                                style: { rotate: 4 },
                              },
                            },
                            children: e(pi, {
                              __framer__animate: { transition: Qr },
                              __framer__animateOnce: !0,
                              __framer__enter: Ze,
                              __framer__exit: kt,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              background: {
                                alt: 'illustration of a coin shaped character walking between clouds',
                                fit: 'fill',
                                loading: 'lazy',
                                pixelHeight: 1e3,
                                pixelWidth: 1e3,
                                sizes: '448px',
                                src: 'https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png',
                                srcSet:
                                  'https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png?scale-down-to=512 512w,https://framerusercontent.com/images/25M5MJoSr7BQz2xiKC4jRSbkXJY.png 1000w',
                              },
                              className: 'framer-vf1nvp',
                              'data-framer-name': 'coinfella by pikisuperstar',
                              name: 'coinfella by pikisuperstar',
                            }),
                          }),
                        ],
                      }),
                    }),
                    e('div', {
                      className: 'framer-1wranau',
                      'data-framer-name': 'slideshow',
                      name: 'slideshow',
                      children: e(M, {
                        children: e(Ce, {
                          className: 'framer-kyuclr-container',
                          'data-framer-name': 'slideshow',
                          name: 'slideshow',
                          children: e(ee, {
                            breakpoint: f,
                            overrides: {
                              jVwZneS9k: {
                                arrowOptions: {
                                  arrowFill: 'rgba(15, 43, 34, 0)',
                                  arrowGap: 8,
                                  arrowPadding: -100,
                                  arrowPaddingBottom: -40,
                                  arrowPaddingLeft: 0,
                                  arrowPaddingRight: 0,
                                  arrowPaddingTop: 0,
                                  arrowPosition: 'top-mid',
                                  arrowRadius: 0,
                                  arrowShouldFadeIn: !1,
                                  arrowShouldSpace: !1,
                                  arrowSize: 45,
                                  leftArrow:
                                    'https://framerusercontent.com/images/EWyeLV951s5tqCwu5Eb2i2c2ZI.png',
                                  rightArrow:
                                    'https://framerusercontent.com/images/iI6BQrkW5hJYi0xIQuJt1Kg4jU.png',
                                  showMouseControls: !0,
                                },
                                gap: 24,
                                itemAmount: 2,
                              },
                              XXbQgpb6O: {
                                arrowOptions: {
                                  arrowFill: 'rgba(15, 43, 34, 0)',
                                  arrowGap: 12,
                                  arrowPadding: -100,
                                  arrowPaddingBottom: -40,
                                  arrowPaddingLeft: 0,
                                  arrowPaddingRight: 0,
                                  arrowPaddingTop: 40,
                                  arrowPosition: 'top-mid',
                                  arrowRadius: 0,
                                  arrowShouldFadeIn: !1,
                                  arrowShouldSpace: !1,
                                  arrowSize: 50,
                                  leftArrow:
                                    'https://framerusercontent.com/images/EWyeLV951s5tqCwu5Eb2i2c2ZI.png',
                                  rightArrow:
                                    'https://framerusercontent.com/images/iI6BQrkW5hJYi0xIQuJt1Kg4jU.png',
                                  showMouseControls: !0,
                                },
                                gap: 24,
                                itemAmount: 1,
                              },
                            },
                            children: e(Te, {
                              alignment: 'center',
                              arrowOptions: {
                                arrowFill: 'rgba(33, 130, 99, 0)',
                                arrowGap: 57,
                                arrowPadding: -100,
                                arrowPaddingBottom: -24,
                                arrowPaddingLeft: 0,
                                arrowPaddingRight: 0,
                                arrowPaddingTop: -25,
                                arrowPosition: 'top-mid',
                                arrowRadius: 0,
                                arrowShouldFadeIn: !1,
                                arrowShouldSpace: !1,
                                arrowSize: 50,
                                leftArrow:
                                  'https://framerusercontent.com/images/EWyeLV951s5tqCwu5Eb2i2c2ZI.png',
                                rightArrow:
                                  'https://framerusercontent.com/images/iI6BQrkW5hJYi0xIQuJt1Kg4jU.png',
                                showMouseControls: !0,
                              },
                              autoPlayControl: !1,
                              borderRadius: 0,
                              direction: 'right',
                              dragControl: !0,
                              effectsOptions: {
                                effectsHover: !0,
                                effectsOpacity: 1,
                                effectsPerspective: 1200,
                                effectsRotate: 0,
                                effectsScale: 1,
                              },
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !1,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !1,
                              },
                              gap: 32,
                              height: '100%',
                              id: 'kb63n2To_',
                              intervalControl: 1.5,
                              itemAmount: 3,
                              layoutId: 'kb63n2To_',
                              name: 'slideshow',
                              padding: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingPerSide: !1,
                              paddingRight: 0,
                              paddingTop: 0,
                              progressOptions: {
                                dotsActiveOpacity: 1,
                                dotsBackground: 'rgba(0, 0, 0, 0.2)',
                                dotsBlur: 0,
                                dotsFill: 'rgb(255, 255, 255)',
                                dotsGap: 10,
                                dotsInset: 10,
                                dotSize: 10,
                                dotsOpacity: 0.5,
                                dotsPadding: 10,
                                dotsRadius: 50,
                                showProgressDots: !0,
                              },
                              slots: [
                                e(M, {
                                  width: '440px',
                                  children: e(Ce, {
                                    className: 'framer-5sdj91-container',
                                    'data-framer-name': 'Stage 1',
                                    name: 'Stage 1',
                                    children: e(pt, {
                                      bmJ00pJCf: 'Phase 1:',
                                      DK3hrsNib: 'qS4lWnwKI',
                                      height: '100%',
                                      id: 'yfaW24O4X',
                                      IwyWoPYTJ: 'afKNWPpoW',
                                      layoutId: 'yfaW24O4X',
                                      LBDUHqDoj: 'qS4lWnwKI',
                                      MHuu5k59X: 'qS4lWnwKI',
                                      mt0kI86F0: 'Socials',
                                      name: 'Stage 1',
                                      PcHrrqnNM: 'CG & CMC listings',
                                      style: { height: '100%', width: '100%' },
                                      SyiJ2oeW4: '888+  holders',
                                      tsiF126FN: 'Launch',
                                      W9MhgJeNS:
                                        'The beginning of the takeover',
                                      width: '100%',
                                      Wpb9Vujia: 'qS4lWnwKI',
                                      YW2s9Dng4:
                                        'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                                    }),
                                  }),
                                }),
                                e(M, {
                                  width: '440px',
                                  children: e(Ce, {
                                    className: 'framer-kdoy09-container',
                                    'data-framer-name': 'Stage 2',
                                    name: 'Stage 2',
                                    children: e(pt, {
                                      bmJ00pJCf: 'Phase 2:',
                                      DK3hrsNib: 'qS4lWnwKI',
                                      height: '100%',
                                      id: 'WqAyEN6Gp',
                                      IwyWoPYTJ: 'qS4lWnwKI',
                                      layoutId: 'WqAyEN6Gp',
                                      LBDUHqDoj: 'qS4lWnwKI',
                                      MHuu5k59X: 'qS4lWnwKI',
                                      mt0kI86F0: 'Initial KOLs',
                                      name: 'Stage 2',
                                      PcHrrqnNM: 'CEX Listings',
                                      style: { height: '100%', width: '100%' },
                                      SyiJ2oeW4: '2888+ holders',
                                      tsiF126FN: 'Peptin TG game',
                                      W9MhgJeNS: 'Nuke marketing push',
                                      width: '100%',
                                      Wpb9Vujia: 'qS4lWnwKI',
                                      YW2s9Dng4:
                                        'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                                    }),
                                  }),
                                }),
                                e(M, {
                                  width: '440px',
                                  children: e(Ce, {
                                    className: 'framer-1rk2jbj-container',
                                    'data-framer-name': 'Stage 3',
                                    name: 'Stage 3',
                                    children: e(pt, {
                                      bmJ00pJCf: 'Phase 3:',
                                      DK3hrsNib: 'qS4lWnwKI',
                                      height: '100%',
                                      id: 'bQWF0HNxK',
                                      IwyWoPYTJ: 'qS4lWnwKI',
                                      layoutId: 'bQWF0HNxK',
                                      LBDUHqDoj: 'qS4lWnwKI',
                                      MHuu5k59X: 'qS4lWnwKI',
                                      mt0kI86F0: '',
                                      name: 'Stage 3',
                                      PcHrrqnNM: 'Tier 1 exchange listings',
                                      style: { height: '100%', width: '100%' },
                                      SyiJ2oeW4: '8888+ holders',
                                      tsiF126FN: ' Multichain bridging',
                                      W9MhgJeNS: '',
                                      width: '100%',
                                      Wpb9Vujia: 'qS4lWnwKI',
                                      YW2s9Dng4:
                                        'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                                    }),
                                  }),
                                }),
                              ],
                              startFrom: 0,
                              style: {
                                height: '100%',
                                maxWidth: '100%',
                                width: '100%',
                              },
                              transitionControl: {
                                damping: 40,
                                stiffness: 200,
                                type: 'spring',
                              },
                              width: '100%',
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                g('div', {
                  className: 'framer-ltzxeh',
                  'data-framer-name': 'how to buy',
                  id: U,
                  name: 'how to buy',
                  ref: I,
                  children: [
                    g('div', {
                      className: 'framer-7ewpp',
                      'data-framer-name': 'stack',
                      name: 'stack',
                      children: [
                        g('div', {
                          className: 'framer-4d1q8i',
                          'data-framer-name': 'headlines',
                          name: 'headlines',
                          children: [
                            e('div', {
                              className: 'framer-1piebjh',
                              'data-border': !0,
                              'data-framer-name': 'text',
                              name: 'text',
                              children: e(ee, {
                                breakpoint: f,
                                overrides: {
                                  jVwZneS9k: {
                                    children: e(p, {
                                      children: e('h3', {
                                        className:
                                          'framer-styles-preset-19cq3om',
                                        'data-styles-preset': 'UplozwuDX',
                                        style: {
                                          '--framer-text-alignment': 'left',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'HOW TO BUY?',
                                      }),
                                    }),
                                  },
                                  XXbQgpb6O: {
                                    children: e(p, {
                                      children: e('h3', {
                                        className:
                                          'framer-styles-preset-19cq3om',
                                        'data-styles-preset': 'UplozwuDX',
                                        style: {
                                          '--framer-text-alignment': 'left',
                                          '--framer-text-color':
                                            'rgb(255, 255, 255)',
                                        },
                                        children: 'HOW TO BUY?',
                                      }),
                                    }),
                                  },
                                },
                                children: e(ar, {
                                  __framer__animate: { transition: Gr },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Ze,
                                  __framer__exit: Ct,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: e(p, {
                                    children: e('h1', {
                                      className: 'framer-styles-preset-10kvllk',
                                      'data-styles-preset': 'mD2wS4ps3',
                                      style: {
                                        '--framer-text-alignment': 'left',
                                        '--framer-text-color':
                                          'rgb(255, 255, 255)',
                                      },
                                      children: 'HOW TO BUY?',
                                    }),
                                  }),
                                  className: 'framer-1sosvy7',
                                  'data-framer-name': 'HOW TO BUY?',
                                  fonts: ['Inter'],
                                  name: 'HOW TO BUY?',
                                  verticalAlignment: 'center',
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e('div', {
                              className: 'framer-1r6d62',
                              'data-border': !0,
                              'data-framer-name': 'illustration',
                              name: 'illustration',
                              children: e(ee, {
                                breakpoint: f,
                                overrides: {
                                  jVwZneS9k: {
                                    background: {
                                      alt: '',
                                      fit: 'fill',
                                      intrinsicHeight: 912,
                                      intrinsicWidth: 560,
                                      loading: 'lazy',
                                      pixelHeight: 912,
                                      pixelWidth: 560,
                                      sizes: '173px',
                                      src: 'https://framerusercontent.com/images/CV2f345ez92AsfAZw9W4qK8Q7k.png',
                                      srcSet:
                                        'https://framerusercontent.com/images/CV2f345ez92AsfAZw9W4qK8Q7k.png 560w',
                                    },
                                  },
                                  XXbQgpb6O: {
                                    background: {
                                      alt: '',
                                      fit: 'fill',
                                      intrinsicHeight: 912,
                                      intrinsicWidth: 560,
                                      loading: 'lazy',
                                      pixelHeight: 912,
                                      pixelWidth: 560,
                                      sizes:
                                        'calc(min(min(100vw, 390px) - 16px, 400px) - 195px)',
                                      src: 'https://framerusercontent.com/images/CV2f345ez92AsfAZw9W4qK8Q7k.png',
                                      srcSet:
                                        'https://framerusercontent.com/images/CV2f345ez92AsfAZw9W4qK8Q7k.png 560w',
                                    },
                                  },
                                },
                                children: e(ne, {
                                  background: {
                                    alt: '',
                                    fit: 'fill',
                                    intrinsicHeight: 912,
                                    intrinsicWidth: 560,
                                    loading: 'lazy',
                                    pixelHeight: 912,
                                    pixelWidth: 560,
                                    sizes: '180px',
                                    src: 'https://framerusercontent.com/images/CV2f345ez92AsfAZw9W4qK8Q7k.png',
                                    srcSet:
                                      'https://framerusercontent.com/images/CV2f345ez92AsfAZw9W4qK8Q7k.png 560w',
                                  },
                                  className: 'framer-115tcr2',
                                  'data-framer-name': 'swap',
                                  name: 'swap',
                                }),
                              }),
                            }),
                          ],
                        }),
                        g('div', {
                          className: 'framer-a957xh',
                          'data-framer-name': 'process and cta',
                          name: 'process and cta',
                          children: [
                            g('div', {
                              className: 'framer-114h3nf',
                              'data-framer-name': 'cta',
                              name: 'cta',
                              children: [
                                g('div', {
                                  className: 'framer-8suqic',
                                  'data-border': !0,
                                  'data-framer-name': 'stack',
                                  name: 'stack',
                                  children: [
                                    e(ee, {
                                      breakpoint: f,
                                      overrides: {
                                        jVwZneS9k: {
                                          children: e(p, {
                                            children: e('h6', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                '--framer-font-family':
                                                  '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                '--framer-font-size': '19px',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                              },
                                              children:
                                                'Have you gone through all of the steps before? Great! Then just hit the button down below and go straight to uniswap.',
                                            }),
                                          }),
                                        },
                                        XXbQgpb6O: {
                                          children: e(p, {
                                            children: e('h6', {
                                              style: {
                                                '--font-selector':
                                                  'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                                '--framer-font-family':
                                                  '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                                '--framer-font-size': '17px',
                                                '--framer-text-color':
                                                  'rgb(255, 255, 255)',
                                              },
                                              children:
                                                'Have you gone through all of the steps before? Great! Then just hit the button down below and go straight to uniswap.',
                                            }),
                                          }),
                                        },
                                      },
                                      children: e(P, {
                                        __fromCanvasComponent: !0,
                                        children: e(p, {
                                          children: e('h6', {
                                            style: {
                                              '--font-selector':
                                                'Q1VTVE9NO1Ryb2lrYSBSZWd1bGFy',
                                              '--framer-font-family':
                                                '"Troika Regular", "Troika Regular Placeholder", sans-serif',
                                              '--framer-font-size': '25px',
                                              '--framer-text-color':
                                                'rgb(255, 255, 255)',
                                            },
                                            children:
                                              'Have you gone through all of the steps before? Great! Then just hit the button down below and go straight to uniswap.',
                                          }),
                                        }),
                                        className: 'framer-wuqcyr',
                                        'data-framer-name':
                                          'Have you gone through all of the steps before? Great! Then just hit the button down below and fill up your bag with memecoin right now.',
                                        fonts: ['CUSTOM;Troika Regular'],
                                        name: 'Have you gone through all of the steps before? Great! Then just hit the button down below and fill up your bag with memecoin right now.',
                                        verticalAlignment: 'center',
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    e(ee, {
                                      breakpoint: f,
                                      overrides: {
                                        jVwZneS9k: {
                                          background: {
                                            alt: '',
                                            fit: 'fit',
                                            intrinsicHeight: 743,
                                            intrinsicWidth: 501,
                                            loading: 'lazy',
                                            pixelHeight: 743,
                                            pixelWidth: 501,
                                            positionX: 'center',
                                            positionY: 'center',
                                            sizes: '218px',
                                            src: 'https://framerusercontent.com/images/HlPG0B6oJ4o6XIab4smE01AE.png',
                                            srcSet:
                                              'https://framerusercontent.com/images/HlPG0B6oJ4o6XIab4smE01AE.png 501w',
                                          },
                                        },
                                      },
                                      children: e(ne, {
                                        background: {
                                          alt: '',
                                          fit: 'fit',
                                          intrinsicHeight: 743,
                                          intrinsicWidth: 501,
                                          loading: 'lazy',
                                          pixelHeight: 743,
                                          pixelWidth: 501,
                                          positionX: 'center',
                                          positionY: 'center',
                                          sizes: '141px',
                                          src: 'https://framerusercontent.com/images/HlPG0B6oJ4o6XIab4smE01AE.png',
                                          srcSet:
                                            'https://framerusercontent.com/images/HlPG0B6oJ4o6XIab4smE01AE.png 501w',
                                        },
                                        className: 'framer-1y5iwfi',
                                        'data-framer-name': 'hand',
                                        name: 'hand',
                                      }),
                                    }),
                                  ],
                                }),
                                e(ee, {
                                  breakpoint: f,
                                  overrides: {
                                    jVwZneS9k: { width: 'calc(100vw - 48px)' },
                                    XXbQgpb6O: {
                                      width:
                                        'min(min(100vw, 390px) - 16px, 400px)',
                                    },
                                  },
                                  children: e(M, {
                                    width: '450px',
                                    children: e(Ce, {
                                      className: 'framer-1e54y3n-container',
                                      whileHover: ud,
                                      children: e(ee, {
                                        breakpoint: f,
                                        overrides: {
                                          XXbQgpb6O: { variant: 'Rwf8mnR13' },
                                        },
                                        children: e(rt, {
                                          height: '100%',
                                          id: 'dROGj9J9r',
                                          layoutId: 'dROGj9J9r',
                                          style: {
                                            height: '100%',
                                            width: '100%',
                                          },
                                          variant: 'DGEBFeyzT',
                                          width: '100%',
                                          yb8uI6K95: 'Buy on Uniswap',
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            e(ee, {
                              breakpoint: f,
                              overrides: {
                                jVwZneS9k: { width: 'calc(100vw - 48px)' },
                                XXbQgpb6O: {
                                  width: 'min(min(100vw, 390px) - 16px, 400px)',
                                },
                              },
                              children: e(M, {
                                width: '684px',
                                children: e(Ce, {
                                  className: 'framer-1tf4wa9-container',
                                  children: e(cn, {
                                    height: '100%',
                                    id: 'S1D0KvL3C',
                                    layoutId: 'S1D0KvL3C',
                                    style: { width: '100%' },
                                    variant: 'fqNnyX_5V',
                                    width: '100%',
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    g(Be, {
                      __framer__loop: gd,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: 'loop',
                      __framer__loopTransition: Xr,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: 'framer-irsc83',
                      'data-framer-name': 'Objects',
                      name: 'Objects',
                      style: { rotateY: -18, transformPerspective: 1200 },
                      children: [
                        e(l.div, {
                          className: 'framer-1bc7d1a',
                          'data-framer-name': 'Main Rotator',
                          name: 'Main Rotator',
                          style: { rotateY: 90 },
                          children: e(Be, {
                            __framer__loop: _t,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: 'loop',
                            __framer__loopTransition: Xr,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: 'framer-zkpn8f',
                            'data-framer-name': 'Rotator Wrap',
                            name: 'Rotator Wrap',
                            children: e(l.div, {
                              className: 'framer-b1thxc',
                              'data-framer-name': 'Rotator Frame',
                              name: 'Rotator Frame',
                              style: { rotateY: -90 },
                              children: g(Be, {
                                __framer__loop: xd,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: 'mirror',
                                __framer__loopTransition: St,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: 'framer-8my5n3',
                                'data-framer-name': 'Object',
                                name: 'Object',
                                style: { rotate: 17, rotateX: 9, rotateY: 31 },
                                children: [
                                  e(l.div, {
                                    className: 'framer-gkq9qg',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: 4 },
                                    children: e('div', {
                                      className: 'framer-11l9zo3',
                                      'data-framer-name': 'Content',
                                      name: 'Content',
                                      children: e(ne, {
                                        background: {
                                          alt: '',
                                          fit: 'fill',
                                          loading: 'lazy',
                                          pixelHeight: 1080,
                                          pixelWidth: 1080,
                                          sizes: '240px',
                                          src: 'https://framerusercontent.com/images/p7UhpYnO96tfxZeuOprteoVEs.png',
                                          srcSet:
                                            'https://framerusercontent.com/images/p7UhpYnO96tfxZeuOprteoVEs.png?scale-down-to=512 512w,https://framerusercontent.com/images/p7UhpYnO96tfxZeuOprteoVEs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/p7UhpYnO96tfxZeuOprteoVEs.png 1080w',
                                        },
                                        className: 'framer-1qw4smc',
                                        'data-framer-name': 'IMG',
                                        name: 'IMG',
                                      }),
                                    }),
                                  }),
                                  e(l.div, {
                                    className: 'framer-6dgjt2',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: -4 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-ebyqho',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-1inlome',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-vyzeo3',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-p6h0hk',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        e(l.div, {
                          className: 'framer-96lm67',
                          'data-framer-name': 'Main Rotator',
                          name: 'Main Rotator',
                          style: { rotateY: 162 },
                          transformTemplate: Sr,
                          children: e(Be, {
                            __framer__loop: _t,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: 'loop',
                            __framer__loopTransition: Xr,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: 'framer-107f3d5',
                            'data-framer-name': 'Rotator Wrap',
                            name: 'Rotator Wrap',
                            children: e(l.div, {
                              className: 'framer-73wida',
                              'data-framer-name': 'Rotator Frame',
                              name: 'Rotator Frame',
                              style: { rotateY: -163 },
                              children: g(Be, {
                                __framer__loop: yd,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: 'mirror',
                                __framer__loopTransition: St,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: 'framer-83jxs4',
                                'data-framer-name': 'Object',
                                name: 'Object',
                                style: { rotate: 1, rotateX: 17, rotateY: 43 },
                                children: [
                                  e(l.div, {
                                    className: 'framer-1j9lmee',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: 4 },
                                    children: e('div', {
                                      className: 'framer-1atbsp3',
                                      'data-framer-name': 'Content',
                                      name: 'Content',
                                      children: e(ne, {
                                        background: {
                                          alt: '',
                                          fit: 'fit',
                                          loading: 'lazy',
                                          pixelHeight: 1e3,
                                          pixelWidth: 500,
                                          positionX: 'center',
                                          positionY: 'center',
                                          sizes: '240px',
                                          src: 'https://framerusercontent.com/images/1hODypNEAyoDSNUAf9yrHoW23ow.png',
                                          srcSet:
                                            'https://framerusercontent.com/images/1hODypNEAyoDSNUAf9yrHoW23ow.png 500w',
                                        },
                                        className: 'framer-pfygjo',
                                        'data-framer-name': 'IMG',
                                        name: 'IMG',
                                      }),
                                    }),
                                  }),
                                  e(l.div, {
                                    className: 'framer-qjovo1',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: -4 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-1qs9hp7',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-1s10b76',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-12ovxkc',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-1gswscj',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        e(l.div, {
                          className: 'framer-13bjwsn',
                          'data-framer-name': 'Main Rotator',
                          name: 'Main Rotator',
                          style: { rotateY: 234 },
                          transformTemplate: Sr,
                          children: e(Be, {
                            __framer__loop: _t,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: 'loop',
                            __framer__loopTransition: Xr,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: 'framer-mznm8',
                            'data-framer-name': 'Rotator Wrap',
                            name: 'Rotator Wrap',
                            children: e(l.div, {
                              className: 'framer-lyvige',
                              'data-framer-name': 'Rotator Frame',
                              name: 'Rotator Frame',
                              style: { rotateY: -232 },
                              children: g(Be, {
                                __framer__loop: wd,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: 'mirror',
                                __framer__loopTransition: St,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: 'framer-19t6ldc',
                                'data-framer-name': 'Object',
                                name: 'Object',
                                style: { rotate: -2, rotateX: 14, rotateY: 24 },
                                children: [
                                  e(l.div, {
                                    className: 'framer-k72my9',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: 4 },
                                    children: e('div', {
                                      className: 'framer-1f14yrj',
                                      'data-framer-name': 'Content',
                                      name: 'Content',
                                      children: e(ne, {
                                        background: {
                                          alt: '',
                                          fit: 'fill',
                                          loading: 'lazy',
                                          pixelHeight: 500,
                                          pixelWidth: 888,
                                          sizes: '240px',
                                          src: 'https://framerusercontent.com/images/rLmz5jd180xWKZ5VZv7lfHyP0.jpg',
                                          srcSet:
                                            'https://framerusercontent.com/images/rLmz5jd180xWKZ5VZv7lfHyP0.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/rLmz5jd180xWKZ5VZv7lfHyP0.jpg 888w',
                                        },
                                        className: 'framer-18j6uz5',
                                        'data-framer-name': 'IMG',
                                        name: 'IMG',
                                      }),
                                    }),
                                  }),
                                  e(l.div, {
                                    className: 'framer-e84j7e',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: -4 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-1ncs0sp',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-xebuvg',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-1hv5tf',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-1mzo4o6',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        e(l.div, {
                          className: 'framer-rnc81j',
                          'data-framer-name': 'Main Rotator',
                          name: 'Main Rotator',
                          style: { rotateY: 306 },
                          transformTemplate: Sr,
                          children: e(Be, {
                            __framer__loop: _t,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: 'loop',
                            __framer__loopTransition: Xr,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: 'framer-12ubdov',
                            'data-framer-name': 'Rotator Wrap',
                            name: 'Rotator Wrap',
                            children: e(l.div, {
                              className: 'framer-13iq58z',
                              'data-framer-name': 'Rotator Frame',
                              name: 'Rotator Frame',
                              style: { rotateY: 57 },
                              children: g(Be, {
                                __framer__loop: bd,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: 'mirror',
                                __framer__loopTransition: St,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: 'framer-uxy8tu',
                                'data-framer-name': 'Object',
                                name: 'Object',
                                style: {
                                  rotate: -22,
                                  rotateX: -22,
                                  rotateY: 58,
                                },
                                children: [
                                  e(l.div, {
                                    className: 'framer-15eq4vz',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: 4 },
                                    children: e('div', {
                                      className: 'framer-1fcw1rg',
                                      'data-framer-name': 'Content',
                                      name: 'Content',
                                      children: e(ne, {
                                        background: {
                                          alt: '',
                                          fit: 'fill',
                                          loading: 'lazy',
                                          pixelHeight: 2e3,
                                          pixelWidth: 2e3,
                                          sizes: '240px',
                                          src: 'https://framerusercontent.com/images/rRl0w7Gx86vcoUBApDTQHBnM6J0.png',
                                          srcSet:
                                            'https://framerusercontent.com/images/rRl0w7Gx86vcoUBApDTQHBnM6J0.png?scale-down-to=512 512w,https://framerusercontent.com/images/rRl0w7Gx86vcoUBApDTQHBnM6J0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/rRl0w7Gx86vcoUBApDTQHBnM6J0.png 2000w',
                                        },
                                        className: 'framer-y6n6fu',
                                        'data-framer-name': 'IMG',
                                        name: 'IMG',
                                      }),
                                    }),
                                  }),
                                  e(l.div, {
                                    className: 'framer-ejox05',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: -4 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-9wdi0o',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-kh2g6t',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-sok9hv',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-8r0gq7',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        e(l.div, {
                          className: 'framer-1k3zntb',
                          'data-framer-name': 'Main Rotator',
                          name: 'Main Rotator',
                          style: { rotateY: 18 },
                          transformTemplate: Sr,
                          children: e(Be, {
                            __framer__loop: _t,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: 'loop',
                            __framer__loopTransition: Xr,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: 'framer-l7wt71',
                            'data-framer-name': 'Rotator Wrap',
                            name: 'Rotator Wrap',
                            children: e(l.div, {
                              className: 'framer-bragua',
                              'data-framer-name': 'Rotator Frame',
                              name: 'Rotator Frame',
                              style: { rotateY: -15 },
                              children: g(Be, {
                                __framer__loop: vd,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: 'mirror',
                                __framer__loopTransition: St,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: 'framer-1fx9r54',
                                'data-framer-name': 'Object',
                                name: 'Object',
                                style: {
                                  rotate: -5,
                                  rotateX: 21,
                                  rotateY: -33,
                                },
                                children: [
                                  e(l.div, {
                                    className: 'framer-1937vah',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: 4 },
                                    children: e('div', {
                                      className: 'framer-1f2r7g5',
                                      'data-framer-name': 'Content',
                                      name: 'Content',
                                      children: e(ne, {
                                        background: {
                                          alt: '',
                                          fit: 'fill',
                                          loading: 'lazy',
                                          pixelHeight: 1080,
                                          pixelWidth: 1920,
                                          positionX: '71.9%',
                                          positionY: '67.3%',
                                          sizes: '240px',
                                          src: 'https://framerusercontent.com/images/afkqxSx6THspVKVC7gqZgFRRVu4.jpg',
                                          srcSet:
                                            'https://framerusercontent.com/images/afkqxSx6THspVKVC7gqZgFRRVu4.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/afkqxSx6THspVKVC7gqZgFRRVu4.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/afkqxSx6THspVKVC7gqZgFRRVu4.jpg 1920w',
                                        },
                                        className: 'framer-1faz0c7',
                                        'data-framer-name': 'IMG',
                                        name: 'IMG',
                                      }),
                                    }),
                                  }),
                                  e(l.div, {
                                    className: 'framer-1rob1x1',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { z: -4 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-9tsp4b',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-z7yr5j',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateY: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-ksq063',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                  e(l.div, {
                                    className: 'framer-d7hina',
                                    'data-framer-name': 'SAME COLOR',
                                    name: 'SAME COLOR',
                                    style: { rotateX: 90 },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                g('div', {
                  className: 'framer-19a7ptm',
                  'data-framer-name': 'footer',
                  id: A,
                  name: 'footer',
                  ref: j,
                  children: [
                    e('div', {
                      className: 'framer-1x0zz9f',
                      'data-framer-name': 'headline',
                      name: 'headline',
                      children: e(ee, {
                        breakpoint: f,
                        overrides: {
                          XXbQgpb6O: {
                            children: e(p, {
                              children: e('p', {
                                style: {
                                  '--font-selector':
                                    'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                  '--framer-font-family':
                                    '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                  '--framer-font-size': '79.65081922365826px',
                                  '--framer-letter-spacing': '-0.07px',
                                  '--framer-line-height': '0.9em',
                                  '--framer-text-alignment': 'center',
                                  '--framer-text-color': 'rgb(255, 255, 255)',
                                },
                                children: 'PEPTIN',
                              }),
                            }),
                            viewBox: '0 0 298.07 72',
                          },
                        },
                        children: e(ar, {
                          __framer__animate: { transition: Gr },
                          __framer__animateOnce: !0,
                          __framer__enter: Ze,
                          __framer__exit: Ct,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          children: e(p, {
                            children: e('p', {
                              style: {
                                '--font-selector':
                                  'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                '--framer-font-family':
                                  '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                '--framer-font-size': '154.84717490568556px',
                                '--framer-letter-spacing': '-0.07px',
                                '--framer-line-height': '0.9em',
                                '--framer-text-color': 'rgb(255, 255, 255)',
                              },
                              children: 'PEPTIN',
                            }),
                          }),
                          className: 'framer-qgqlvf',
                          'data-framer-name': 'fit text headline',
                          fonts: ['CUSTOM;Kremlin Regular'],
                          name: 'fit text headline',
                          verticalAlignment: 'top',
                          viewBox: '0 0 579.07 139',
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    g('div', {
                      className: 'framer-591i0z',
                      'data-framer-name': 'footer links',
                      name: 'footer links',
                      children: [
                        e(sa, {
                          __fromCanvasComponent: !0,
                          animate: la,
                          children: e(p, {
                            children: e('p', {
                              className: 'framer-styles-preset-1litlgy',
                              'data-styles-preset': 'dffKIEnzl',
                              children: e(we, {
                                href: {
                                  hash: ':rPEgAqoBb',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: e('a', {
                                  className: 'framer-styles-preset-1oyyjcj',
                                  'data-styles-preset': 'gkqXXUcOC',
                                  children: 'About',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-adug6f',
                          'data-framer-appear-id': 'adug6f',
                          'data-framer-name': 'About',
                          fonts: ['Inter'],
                          initial: fa,
                          name: 'About',
                          optimized: !0,
                          verticalAlignment: 'center',
                          whileHover: Zr,
                          withExternalLayout: !0,
                        }),
                        e(sa, {
                          __fromCanvasComponent: !0,
                          animate: la,
                          children: e(p, {
                            children: e('p', {
                              className: 'framer-styles-preset-1litlgy',
                              'data-styles-preset': 'dffKIEnzl',
                              children: e(we, {
                                href: {
                                  hash: ':M8l5gH3jw',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: e('a', {
                                  className: 'framer-styles-preset-1oyyjcj',
                                  'data-styles-preset': 'gkqXXUcOC',
                                  children: 'Tokenomics',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-30s9tk',
                          'data-framer-appear-id': '30s9tk',
                          'data-framer-name': 'Tokenomics',
                          fonts: ['Inter'],
                          initial: fa,
                          name: 'Tokenomics',
                          optimized: !0,
                          verticalAlignment: 'center',
                          whileHover: Zr,
                          withExternalLayout: !0,
                        }),
                        e(sa, {
                          __fromCanvasComponent: !0,
                          animate: la,
                          children: e(p, {
                            children: e('p', {
                              className: 'framer-styles-preset-1litlgy',
                              'data-styles-preset': 'dffKIEnzl',
                              children: e(we, {
                                href: {
                                  hash: ':B2nUNr_PH',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: e('a', {
                                  className: 'framer-styles-preset-1oyyjcj',
                                  'data-styles-preset': 'gkqXXUcOC',
                                  children: 'Roadmap',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-i6ww5i',
                          'data-framer-appear-id': 'i6ww5i',
                          'data-framer-name': 'Roadmap',
                          fonts: ['Inter'],
                          initial: fa,
                          name: 'Roadmap',
                          optimized: !0,
                          verticalAlignment: 'center',
                          whileHover: Zr,
                          withExternalLayout: !0,
                        }),
                        e(sa, {
                          __fromCanvasComponent: !0,
                          animate: la,
                          children: e(p, {
                            children: e('p', {
                              className: 'framer-styles-preset-1litlgy',
                              'data-styles-preset': 'dffKIEnzl',
                              children: e(we, {
                                href: {
                                  hash: ':cJTvuGgks',
                                  webPageId: 'augiA20Il',
                                },
                                openInNewTab: !1,
                                smoothScroll: !0,
                                children: e('a', {
                                  className: 'framer-styles-preset-1oyyjcj',
                                  'data-styles-preset': 'gkqXXUcOC',
                                  children: 'How to Buy',
                                }),
                              }),
                            }),
                          }),
                          className: 'framer-js9edy',
                          'data-framer-appear-id': 'js9edy',
                          'data-framer-name': 'How to Buy',
                          fonts: ['Inter'],
                          initial: fa,
                          name: 'How to Buy',
                          optimized: !0,
                          verticalAlignment: 'center',
                          whileHover: Zr,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    g('div', {
                      className: 'framer-1s2iho1',
                      'data-framer-name': 'CTA',
                      name: 'CTA',
                      children: [
                        e(ee, {
                          breakpoint: f,
                          overrides: {
                            XXbQgpb6O: { width: 'min(100vw - 16px, 390px)' },
                          },
                          children: e(M, {
                            width: '400px',
                            children: e(Ce, {
                              className: 'framer-urn6t5-container',
                              whileHover: kd,
                              children: e(ee, {
                                breakpoint: f,
                                overrides: {
                                  XXbQgpb6O: {
                                    style: {
                                      height: '100%',
                                      maxWidth: '100%',
                                      width: '100%',
                                    },
                                    variant: 'Rwf8mnR13',
                                  },
                                },
                                children: e(rt, {
                                  height: '100%',
                                  id: 'xrwgPhVQ2',
                                  layoutId: 'xrwgPhVQ2',
                                  style: { height: '100%', width: '100%' },
                                  variant: 'DGEBFeyzT',
                                  width: '100%',
                                  yb8uI6K95: 'JOIN PEPTIN TG',
                                }),
                              }),
                            }),
                          }),
                        }),
                        e(ee, {
                          breakpoint: f,
                          overrides: {
                            XXbQgpb6O: { width: 'min(100vw - 16px, 390px)' },
                          },
                          children: e(M, {
                            width: '400px',
                            children: e(Ce, {
                              className: 'framer-1gu1pnt-container',
                              whileHover: _d,
                              children: e(ee, {
                                breakpoint: f,
                                overrides: {
                                  XXbQgpb6O: {
                                    style: {
                                      height: '100%',
                                      maxWidth: '100%',
                                      width: '100%',
                                    },
                                    variant: 'Rwf8mnR13',
                                  },
                                },
                                children: e(rt, {
                                  height: '100%',
                                  id: 'g8tx2kv4M',
                                  layoutId: 'g8tx2kv4M',
                                  style: { height: '100%', width: '100%' },
                                  variant: 'DGEBFeyzT',
                                  width: '100%',
                                  yb8uI6K95: 'Follow PEPTIN X',
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    g('div', {
                      className: 'framer-8bf2s5',
                      'data-framer-name': 'end section',
                      name: 'end section',
                      children: [
                        W() &&
                          e('div', {
                            className: 'framer-13kfr0p hidden-1gask65',
                            'data-framer-name': 'left part',
                            name: 'left part',
                            children: e(Ne, {
                              className: 'framer-18yhr1c',
                              'data-framer-name': 'illustration',
                              fill: 'rgba(0,0,0,1)',
                              intrinsicHeight: 347,
                              intrinsicWidth: 626,
                              name: 'illustration',
                              svg: `<svg width="626" height="347" viewBox="0 0 626 347" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M93.3603 159.85C102.722 159.85 111.751 161.234 120.269 163.823C120.908 73.2348 194.368 0 284.89 0C357.89 0 419.789 47.6526 441.351 113.582C459.23 103.61 479.795 97.8941 501.716 97.8941C570.367 97.8941 626 153.647 626 222.447C626 291.247 570.367 347 501.716 347H93.3603C41.7947 347 0 305.115 0 253.438C0 201.761 41.7947 159.876 93.3603 159.876V159.85Z" fill="#0F2C23"/>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                          }),
                        e(ee, {
                          breakpoint: f,
                          overrides: {
                            XXbQgpb6O: {
                              background: {
                                alt: 'illustration of a safe shaped character counting dollar bills',
                                fit: 'fill',
                                intrinsicHeight: 525,
                                intrinsicWidth: 523,
                                loading: 'lazy',
                                pixelHeight: 1e3,
                                pixelWidth: 1e3,
                                sizes: '639px',
                                src: 'https://framerusercontent.com/images/xZomGFmmVOWzt9yB0giyIiIYY24.png',
                                srcSet:
                                  'https://framerusercontent.com/images/xZomGFmmVOWzt9yB0giyIiIYY24.png?scale-down-to=512 512w,https://framerusercontent.com/images/xZomGFmmVOWzt9yB0giyIiIYY24.png 1000w',
                              },
                              transformTemplate: void 0,
                            },
                          },
                          children: e(ne, {
                            background: {
                              alt: 'illustration of a safe shaped character counting dollar bills',
                              fit: 'fill',
                              intrinsicHeight: 525,
                              intrinsicWidth: 523,
                              loading: 'lazy',
                              pixelHeight: 1e3,
                              pixelWidth: 1e3,
                              sizes: '987px',
                              src: 'https://framerusercontent.com/images/xZomGFmmVOWzt9yB0giyIiIYY24.png',
                              srcSet:
                                'https://framerusercontent.com/images/xZomGFmmVOWzt9yB0giyIiIYY24.png?scale-down-to=512 512w,https://framerusercontent.com/images/xZomGFmmVOWzt9yB0giyIiIYY24.png 1000w',
                            },
                            className: 'framer-1mo2k31',
                            'data-framer-name': 'safella by pikisuperstar',
                            name: 'safella by pikisuperstar',
                            transformTemplate: Sr,
                          }),
                        }),
                        e('div', {
                          className: 'framer-a5g7jd',
                          'data-framer-name': 'right part',
                          name: 'right part',
                          children: e(Ne, {
                            className: 'framer-14ven2t',
                            'data-framer-name': 'illustration',
                            fill: 'rgba(0,0,0,1)',
                            intrinsicHeight: 347,
                            intrinsicWidth: 626,
                            name: 'illustration',
                            svg: `<svg width="626" height="347" viewBox="0 0 626 347" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M532.64 159.85C523.278 159.85 514.249 161.234 505.731 163.823C505.092 73.2348 431.632 0 341.11 0C268.11 0 206.211 47.6526 184.649 113.582C166.77 103.61 146.205 97.8941 124.284 97.8941C55.6325 97.8941 0 153.647 0 222.447C0 291.247 55.6325 347 124.284 347H532.64C584.205 347 626 305.115 626 253.438C626 201.761 584.205 159.876 532.64 159.876V159.85Z" fill="#0F2C23"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        }),
                        g('div', {
                          className: 'framer-e7gepl',
                          'data-framer-name': 'copyright',
                          name: 'copyright',
                          children: [
                            e(Ne, {
                              className: 'framer-17df5i8',
                              'data-framer-name': 'C',
                              fill: 'rgba(0,0,0,1)',
                              intrinsicHeight: 12,
                              intrinsicWidth: 12,
                              name: 'C',
                              svg: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1C5.01109 1 4.0444 1.29324 3.22215 1.84265C2.39991 2.39206 1.75904 3.17295 1.3806 4.08658C1.00217 5.00021 0.90315 6.00555 1.09608 6.97545C1.289 7.94536 1.76521 8.83627 2.46447 9.53553C3.16373 10.2348 4.05465 10.711 5.02455 10.9039C5.99445 11.0969 6.99979 10.9978 7.91342 10.6194C8.82705 10.241 9.60794 9.6001 10.1573 8.77785C10.7068 7.9556 11 6.98891 11 6C11 4.67392 10.4732 3.40215 9.53553 2.46447C8.59785 1.52678 7.32608 1 6 1ZM6 10.0909C5.1909 10.0909 4.39996 9.85098 3.72721 9.40147C3.05447 8.95195 2.53013 8.31304 2.22049 7.56552C1.91086 6.81801 1.82985 5.99546 1.9877 5.2019C2.14555 4.40834 2.53517 3.67941 3.10729 3.10729C3.67942 2.53517 4.40835 2.14555 5.2019 1.9877C5.99546 1.82985 6.81801 1.91086 7.56552 2.22049C8.31304 2.53012 8.95195 3.05447 9.40147 3.72721C9.85098 4.39996 10.0909 5.19089 10.0909 6C10.0909 7.08498 9.6599 8.12551 8.89271 8.89271C8.12552 9.6599 7.08498 10.0909 6 10.0909ZM4.63636 6C4.6357 6.27046 4.71547 6.53502 4.86555 6.76002C5.01563 6.98503 5.22923 7.16033 5.47919 7.26363C5.72915 7.36692 6.00418 7.39356 6.26932 7.34014C6.53446 7.28672 6.77772 7.15567 6.96818 6.96364C7.00927 6.91637 7.05969 6.8781 7.11627 6.85124C7.17285 6.82437 7.23438 6.80949 7.29698 6.80753C7.35958 6.80556 7.42191 6.81656 7.48007 6.83983C7.53822 6.86309 7.59094 6.89812 7.63491 6.94273C7.67888 6.98733 7.71317 7.04054 7.7356 7.09901C7.75804 7.15749 7.76815 7.21997 7.7653 7.28254C7.76245 7.34511 7.7467 7.40641 7.71904 7.46261C7.69137 7.5188 7.65239 7.56867 7.60455 7.60909C7.28647 7.92636 6.8815 8.14225 6.44079 8.22948C6.00008 8.3167 5.54341 8.27136 5.12846 8.09917C4.7135 7.92699 4.35889 7.63568 4.10942 7.26206C3.85994 6.88844 3.72679 6.44926 3.72679 6C3.72679 5.55074 3.85994 5.11156 4.10942 4.73794C4.35889 4.36431 4.7135 4.07301 5.12846 3.90082C5.54341 3.72864 6.00008 3.68329 6.44079 3.77052C6.8815 3.85775 7.28647 4.07364 7.60455 4.39091C7.65239 4.43133 7.69137 4.4812 7.71904 4.53739C7.7467 4.59358 7.76245 4.65489 7.7653 4.71746C7.76815 4.78003 7.75804 4.84251 7.7356 4.90099C7.71317 4.95946 7.67888 5.01267 7.63491 5.05727C7.59094 5.10187 7.53822 5.13691 7.48007 5.16017C7.42191 5.18344 7.35958 5.19443 7.29698 5.19247C7.23438 5.19051 7.17285 5.17563 7.11627 5.14876C7.05969 5.1219 7.00927 5.08363 6.96818 5.03636C6.77772 4.84433 6.53446 4.71328 6.26932 4.65986C6.00418 4.60644 5.72915 4.63307 5.47919 4.73637C5.22923 4.83967 5.01563 5.01497 4.86555 5.23997C4.71547 5.46498 4.6357 5.72954 4.63636 6Z" fill="#F8FFE8"/>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                            e(P, {
                              __fromCanvasComponent: !0,
                              children: e(p, {
                                children: e('p', {
                                  style: {
                                    '--font-selector':
                                      'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                    '--framer-font-family':
                                      '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                    '--framer-font-size': '10px',
                                    '--framer-line-height': '10px',
                                    '--framer-text-color': 'rgb(255, 255, 255)',
                                  },
                                  children: 'PEPTIN,2024',
                                }),
                              }),
                              className: 'framer-kh7dr7',
                              'data-framer-name': 'MEMECOIN, 2024',
                              fonts: ['CUSTOM;Kremlin Regular'],
                              name: 'MEMECOIN, 2024',
                              verticalAlignment: 'center',
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        e('div', {
                          className: 'framer-17fsrbz',
                          'data-framer-name': 'designed',
                          name: 'designed',
                          children: e(P, {
                            __fromCanvasComponent: !0,
                            children: e(p, {
                              children: e('p', {
                                style: {
                                  '--font-selector':
                                    'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                                  '--framer-font-family':
                                    '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                                  '--framer-font-size': '10px',
                                  '--framer-line-height': '10px',
                                  '--framer-text-color': 'rgb(255, 255, 255)',
                                },
                                children: e(we, {
                                  href: 'https://hoffedesign.contra.com/',
                                  openInNewTab: !0,
                                  smoothScroll: !1,
                                  children: e('a', {
                                    className: 'framer-styles-preset-1oyyjcj',
                                    'data-styles-preset': 'gkqXXUcOC',
                                    children: 'Enough! PEPTIN is here!',
                                  }),
                                }),
                              }),
                            }),
                            className: 'framer-2wtcsp',
                            'data-framer-name': 'MEMECOIN, 2024',
                            fonts: ['CUSTOM;Kremlin Regular'],
                            name: 'MEMECOIN, 2024',
                            verticalAlignment: 'center',
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e('div', { className: le(hi, ...re), id: 'overlay' }),
          ],
        }),
      })
    );
  }),
  Rd = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    `.${pn.bodyClassName}-framer-YHDe7 { background: rgb(163, 18, 40); }`,
    '.framer-YHDe7.framer-lux5qc, .framer-YHDe7 .framer-lux5qc { display: block; }',
    '.framer-YHDe7.framer-72rtr7 { align-content: center; align-items: center; background-color: #a31228; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 6951px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }',
    '.framer-YHDe7 .framer-16113bk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; max-width: 1380px; overflow: visible; padding: 0px 24px 0px 24px; position: fixed; top: 24px; transform: translateX(-50%); width: 100%; z-index: 3; }',
    '.framer-YHDe7 .framer-1kntkg0-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }',
    '.framer-YHDe7 .framer-uw1cov { align-content: center; align-items: center; background: linear-gradient(180deg, #540d0d 0%, rgba(107, 12, 12, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 24px 0px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-qnxw74 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1600px); left: 50%; overflow: hidden; position: absolute; top: -480px; transform: translateX(-50%); width: 1600px; z-index: 0; }',
    '.framer-YHDe7 .framer-167qq28 { flex: none; height: 1200px; left: calc(50.00000000000002% - 1200px / 2); position: absolute; top: calc(50.00000000000002% - 1200px / 2); width: 1200px; }',
    '.framer-YHDe7 .framer-1q3xhik { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 240px 0px 200px 0px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-1yepqim { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-1fdfkpz, .framer-YHDe7 .framer-1q3twn1, .framer-YHDe7 .framer-23je42, .framer-YHDe7 .framer-66vgt8, .framer-YHDe7 .framer-adug6f, .framer-YHDe7 .framer-30s9tk, .framer-YHDe7 .framer-i6ww5i, .framer-YHDe7 .framer-js9edy, .framer-YHDe7 .framer-kh7dr7, .framer-YHDe7 .framer-2wtcsp { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-YHDe7 .framer-1cokx2p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 39px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-15ehnwh { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; text-shadow: 0px 4px 0px #4a0808; white-space: pre; width: auto; }',
    '.framer-YHDe7 .framer-8yynmu { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; text-shadow: -6px 3px 0px #4a0808; white-space: pre; width: auto; }',
    '.framer-YHDe7 .framer-ofhvc0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-1r04iak-container, .framer-YHDe7 .framer-1bofeh1-container { flex: none; height: 48px; position: relative; width: 200px; }',
    '.framer-YHDe7 .framer-lj244q-container, .framer-YHDe7 .framer-gs36rl-container, .framer-YHDe7 .framer-6a6ujw-container, .framer-YHDe7 .framer-47qg1n-container, .framer-YHDe7 .framer-135i5op-container, .framer-YHDe7 .framer-3f98js-container, .framer-YHDe7 .framer-wc8yfl-container { flex: none; height: auto; position: relative; width: auto; }',
    '.framer-YHDe7 .framer-y43kx8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1380px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-1dbm505 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 96px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-12pheqy-container { flex: none; height: auto; position: relative; width: 500px; }',
    '.framer-YHDe7 .framer-hftvb7 { align-content: center; align-items: center; background-color: var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, #f8ffe8); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }',
    '.framer-YHDe7 .framer-9sj71q, .framer-YHDe7 .framer-1uw5uix, .framer-YHDe7 .framer-1n5d9x5, .framer-YHDe7 .framer-19rmzz8, .framer-YHDe7 .framer-qoqy90, .framer-YHDe7 .framer-1srrrlr, .framer-YHDe7 .framer-16avoa1, .framer-YHDe7 .framer-ahh30z, .framer-YHDe7 .framer-1w9sw6a, .framer-YHDe7 .framer-lqivs4, .framer-YHDe7 .framer-1j20kln, .framer-YHDe7 .framer-1cvzc2p, .framer-YHDe7 .framer-1nkyvss, .framer-YHDe7 .framer-8bz2ag, .framer-YHDe7 .framer-8xc8lt, .framer-YHDe7 .framer-1orarru, .framer-YHDe7 .framer-u6v6i2, .framer-YHDe7 .framer-mfwk08 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
    '.framer-YHDe7 .framer-1hq8n6p { --border-bottom-width: 8px; --border-color: #70090b; --border-left-width: 8px; --border-right-width: 8px; --border-style: solid; --border-top-width: 8px; align-content: center; align-items: center; background-color: var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, #f8ffe8); border-bottom-left-radius: 46px; border-bottom-right-radius: 46px; border-top-left-radius: 46px; border-top-right-radius: 46px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 48px 80px 64px 80px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-1c1oyo9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 1150px; overflow: visible; padding: 0px; position: relative; width: 1px; }',
    '.framer-YHDe7 .framer-1m19oa9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-fi7r50 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: -16px; top: 0px; width: min-content; z-index: 1; }',
    '.framer-YHDe7 .framer-zwbfv9 { flex: none; height: 77px; overflow: hidden; position: relative; width: 96px; }',
    '.framer-YHDe7 .framer-1y9x08v { flex: none; height: 72px; left: calc(42.70833333333336% - 70px / 2); position: absolute; top: calc(41.55844155844159% - 72px / 2); width: 70px; }',
    '.framer-YHDe7 .framer-hx91g6-container { flex: none; height: 80px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-6b1r33 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: 80px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-1umlpiq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 74%; overflow: visible; padding: 0px; position: absolute; top: 0%; transform: translate(-50%, -50%); width: min-content; z-index: 1; }',
    '.framer-YHDe7 .framer-hms3ed { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 415px; overflow: hidden; padding: 16px 24px 36px 24px; position: absolute; top: 101px; width: min-content; z-index: 1; }',
    '.framer-YHDe7 .framer-jwnynj { flex: none; height: 100px; left: calc(50.00000000000002% - 186px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100px / 2); width: 186px; z-index: -1; }',
    '.framer-YHDe7 .framer-1mev5nj { flex: none; height: 79px; left: calc(50.00000000000002% - 169px / 2); position: absolute; top: calc(49.00000000000002% - 79px / 2); width: 169px; }',
    '.framer-YHDe7 .framer-bszj59 { aspect-ratio: 0.80859375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 871px); position: relative; width: 704px; }',
    '.framer-YHDe7 .framer-obz7do-container { flex: none; height: 8%; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-6v2ke1 { align-content: center; align-items: center; background-color: #330707; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: 91px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1484px; }',
    '.framer-YHDe7 .framer-jnqlvw, .framer-YHDe7 .framer-kzeuec, .framer-YHDe7 .framer-g299kz, .framer-YHDe7 .framer-uwoxwd, .framer-YHDe7 .framer-xcyvaa, .framer-YHDe7 .framer-12f9xqt, .framer-YHDe7 .framer-zdckpa, .framer-YHDe7 .framer-1w4p4jt { flex: none; height: 44px; overflow: visible; position: relative; width: 41px; }',
    '.framer-YHDe7 .framer-1dcd7ze { flex: none; height: 34px; overflow: hidden; position: relative; width: 105px; }',
    '.framer-YHDe7 .framer-17r9par { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }',
    '.framer-YHDe7 .framer-1ysukz3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 24px 144px 24px; position: relative; scroll-margin-top: 80px; width: 100%; }',
    '.framer-YHDe7 .framer-1wb4hw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1150px; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-vk3468 { flex: none; height: auto; max-width: 1150px; position: relative; text-shadow: -10px 5px 0px #4f0f0f; white-space: pre; width: 100%; }',
    '.framer-YHDe7 .framer-29eknz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }',
    '.framer-YHDe7 .framer-obmqbz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 75px; height: min-content; justify-content: center; overflow: visible; padding: 80px 0px 0px 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-as7jeh { --border-bottom-width: 4px; --border-color: #000000; --border-left-width: 4px; --border-right-width: 0px; --border-style: solid; --border-top-width: 4px; align-content: flex-start; align-items: flex-start; background-color: var(--token-eb6636f3-e844-4fc1-b8f6-ce98b0287261, #f8ffe8); border-bottom-left-radius: 50px; border-top-left-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 570px; justify-content: flex-start; overflow: visible; padding: 40px 40px 440px 40px; position: relative; width: 360px; }',
    '.framer-YHDe7 .framer-b2xvzq { flex: 1 0 0px; height: 47px; overflow: hidden; position: relative; width: 1px; }',
    '.framer-YHDe7 .framer-wp5luw { --framer-paragraph-spacing: 0px; flex: none; height: 47px; left: calc(45.35714285714288% - min(440px, 254px) / 2); max-width: 440px; position: absolute; top: calc(48.93617021276598% - 47px / 2); white-space: pre-wrap; width: 254px; word-break: break-word; word-wrap: break-word; }',
    '.framer-YHDe7 .framer-752w37 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 952px); left: -262px; overflow: visible; position: absolute; right: -330px; top: 7px; z-index: 1; }',
    '.framer-YHDe7 .framer-1sw2kq1 { flex: none; height: 854px; overflow: visible; position: relative; width: 790px; }',
    '.framer-YHDe7 .framer-1f4l70i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-q7769h { --border-bottom-width: 4px; --border-color: var(--token-6367dca9-02b9-4a70-a116-e05e0733684b, #000000); --border-left-width: 4px; --border-right-width: 4px; --border-style: solid; --border-top-width: 4px; align-content: center; align-items: center; background-color: #075e14; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; box-shadow: 2px 4px 0px 0px #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 684px; justify-content: flex-start; overflow: hidden; padding: 48px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 0; }',
    '.framer-YHDe7 .framer-1y0lgvf, .framer-YHDe7 .framer-wuqcyr { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-YHDe7 .framer-z987dd-container { flex: none; height: 48px; position: relative; width: 229px; }',
    '.framer-YHDe7 .framer-9612wo { background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(163, 18, 40) 100%); bottom: 79px; flex: none; height: 984px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 0; }',
    '.framer-YHDe7 .framer-1y5nlld { bottom: -160px; flex: none; height: 1223px; left: 0px; opacity: 0.33; overflow: visible; position: absolute; right: 0px; }',
    '.framer-YHDe7 .framer-1xxhkox { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 280px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: hidden; padding: 120px 24px 24px 24px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-k50xpg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1150px; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-s25ft2 { flex: none; height: auto; max-width: 1150px; position: relative; text-shadow: -2px 2px 0px #660f0f; white-space: pre; width: 100%; }',
    '.framer-YHDe7 .framer-1r4k5ho { flex: none; height: 759px; left: calc(52.75000000000002% - 656px / 2); position: absolute; top: calc(29.017857142857167% - 759px / 2); width: 656px; z-index: 0; }',
    '.framer-YHDe7 .framer-1x8ncrw { --border-bottom-width: 4px; --border-color: #3b0404; --border-left-width: 4px; --border-right-width: 4px; --border-style: solid; --border-top-width: 4px; align-content: center; align-items: center; background-color: #075e14; border-bottom-left-radius: 58px; border-bottom-right-radius: 58px; border-top-left-radius: 58px; border-top-right-radius: 58px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 720px; justify-content: space-between; max-width: 1150px; overflow: hidden; padding: 40px 0px 148px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-YHDe7 .framer-xvheh-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 0; }',
    '.framer-YHDe7 .framer-1obfe50-container { flex: none; height: 24px; position: relative; width: 100%; z-index: 1; }',
    '.framer-YHDe7 .framer-cbimcj { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: 24px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-1kh30hj { flex: none; height: auto; max-width: 1150px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
    '.framer-YHDe7 .framer-1dncs4e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-1ijdnb4 { flex: none; height: 1%; overflow: hidden; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-z0hm95-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }',
    '.framer-YHDe7 .framer-iho8hm { align-content: flex-end; align-items: flex-end; background: linear-gradient(180deg, rgba(248, 255, 232, 0) 33%, rgb(61, 9, 9) 100%); border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-YHDe7 .framer-1kc92h5 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }',
    '.framer-YHDe7 .framer-tri7lk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1050px; overflow: hidden; padding: 0px; position: relative; width: 1px; }',
    '.framer-YHDe7 .framer-1qymh2z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-1y0d41u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
    '.framer-YHDe7 .framer-1kts97u { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; text-shadow: -7px 6px 0px #660b0b; white-space: pre-wrap; width: 586px; word-break: break-word; word-wrap: break-word; }',
    '.framer-YHDe7 .framer-vf1nvp { flex: none; height: 449px; overflow: hidden; position: relative; width: 448px; }',
    '.framer-YHDe7 .framer-1wranau { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; z-index: 1; }',
    '.framer-YHDe7 .framer-kyuclr-container { flex: 1 0 0px; height: 480px; max-width: 1150px; position: relative; width: 1px; }',
    '.framer-YHDe7 .framer-5sdj91-container, .framer-YHDe7 .framer-kdoy09-container, .framer-YHDe7 .framer-1rk2jbj-container { height: 480px; position: relative; width: 440px; }',
    '.framer-YHDe7 .framer-ltzxeh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 160px 24px 160px 24px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-7ewpp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1150px; }',
    '.framer-YHDe7 .framer-4d1q8i, .framer-YHDe7 .framer-a957xh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-1piebjh { --border-bottom-width: 3px; --border-color: #5e0000; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; align-content: flex-start; align-items: flex-start; background-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2b13); border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px 80px 48px 48px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-YHDe7 .framer-1sosvy7 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
    '.framer-YHDe7 .framer-1r6d62 { --border-bottom-width: 3px; --border-color: #5e0000; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; align-content: flex-start; align-items: flex-start; align-self: stretch; background-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: hidden; padding: 48px 48px 48px 64px; position: relative; width: 450px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-YHDe7 .framer-115tcr2 { bottom: -4px; flex: none; left: 135px; overflow: visible; position: absolute; right: 135px; top: 0px; z-index: 1; }',
    '.framer-YHDe7 .framer-114h3nf { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 450px; z-index: 2; }',
    '.framer-YHDe7 .framer-8suqic { --border-bottom-width: 3px; --border-color: #5e0000; --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; align-content: flex-start; align-items: flex-start; background-color: var(--token-01db68c6-eff7-468f-a116-48ab688168e3, #0f2c23); border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 40px 40px 200px 40px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
    '.framer-YHDe7 .framer-1y5iwfi { bottom: -41px; flex: none; left: 161px; overflow: visible; position: absolute; top: 193px; width: 141px; z-index: 1; }',
    '.framer-YHDe7 .framer-1e54y3n-container { flex: none; height: 100px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-1tf4wa9-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
    '.framer-YHDe7 .framer-irsc83 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 620px; }',
    '.framer-YHDe7 .framer-1bc7d1a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 700px; }',
    '.framer-YHDe7 .framer-zkpn8f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 451px; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 1px; }',
    '.framer-YHDe7 .framer-b1thxc, .framer-YHDe7 .framer-73wida, .framer-YHDe7 .framer-lyvige, .framer-YHDe7 .framer-13iq58z, .framer-YHDe7 .framer-bragua { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 375px; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 100%; }',
    '.framer-YHDe7 .framer-8my5n3, .framer-YHDe7 .framer-83jxs4, .framer-YHDe7 .framer-19t6ldc, .framer-YHDe7 .framer-uxy8tu, .framer-YHDe7 .framer-1fx9r54 { aspect-ratio: 0.75 / 1; box-shadow: -83px 117px 32px 0px rgba(0, 0, 0, 0.13); flex: none; height: var(--framer-aspect-ratio-supported, 320px); overflow: visible; position: relative; transform-style: preserve-3d; width: 240px; }',
    '.framer-YHDe7 .framer-gkq9qg { background-color: #89a18b; bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-11l9zo3, .framer-YHDe7 .framer-1atbsp3, .framer-YHDe7 .framer-1f14yrj, .framer-YHDe7 .framer-1fcw1rg, .framer-YHDe7 .framer-1f2r7g5 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-1qw4smc { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 1; }',
    '.framer-YHDe7 .framer-6dgjt2 { -webkit-filter: brightness(0.5); background-color: #344e4b; bottom: 0px; filter: brightness(0.5); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-ebyqho { -webkit-filter: brightness(1.3); background-color: #344e4b; filter: brightness(1.3); flex: none; height: 320px; left: 236px; overflow: hidden; position: absolute; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-1inlome { -webkit-filter: brightness(1.3); background-color: #344e4b; bottom: 0px; filter: brightness(1.3); flex: none; overflow: hidden; position: absolute; right: 236px; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-vyzeo3 { -webkit-filter: brightness(1.2); background-color: #344e4b; bottom: 316px; filter: brightness(1.2); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -4px; }',
    '.framer-YHDe7 .framer-p6h0hk { -webkit-filter: brightness(0.6); background-color: #344e4b; filter: brightness(0.6); flex: none; height: 8px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 316px; }',
    '.framer-YHDe7 .framer-96lm67, .framer-YHDe7 .framer-13bjwsn, .framer-YHDe7 .framer-rnc81j, .framer-YHDe7 .framer-1k3zntb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); transform-style: preserve-3d; width: 700px; z-index: 1; }',
    '.framer-YHDe7 .framer-107f3d5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 411px; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 279px; }',
    '.framer-YHDe7 .framer-1j9lmee { background-color: #634415; bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-pfygjo, .framer-YHDe7 .framer-18j6uz5, .framer-YHDe7 .framer-y6n6fu, .framer-YHDe7 .framer-1faz0c7 { -webkit-user-select: none; bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 1; }',
    '.framer-YHDe7 .framer-qjovo1 { -webkit-filter: brightness(0.5); background-color: #3d2809; bottom: 0px; filter: brightness(0.5); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-1qs9hp7 { -webkit-filter: brightness(1.3); background-color: #3d2809; filter: brightness(1.3); flex: none; height: 320px; left: 236px; overflow: hidden; position: absolute; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-1s10b76 { -webkit-filter: brightness(1.3); background-color: #3d2809; bottom: 0px; filter: brightness(1.3); flex: none; overflow: hidden; position: absolute; right: 236px; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-12ovxkc { -webkit-filter: brightness(1.2); background-color: #3d2809; bottom: 316px; filter: brightness(1.2); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -4px; }',
    '.framer-YHDe7 .framer-1gswscj { -webkit-filter: brightness(0.6); background-color: #3d2809; filter: brightness(0.6); flex: none; height: 8px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 316px; }',
    '.framer-YHDe7 .framer-mznm8, .framer-YHDe7 .framer-12ubdov, .framer-YHDe7 .framer-l7wt71 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 329px; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 143px; }',
    '.framer-YHDe7 .framer-k72my9 { background-color: #80340b; bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-e84j7e { -webkit-filter: brightness(0.5); background-color: #80340b; bottom: 0px; filter: brightness(0.5); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-1ncs0sp { -webkit-filter: brightness(1.3); background-color: #80340b; filter: brightness(1.3); flex: none; height: 320px; left: 236px; overflow: hidden; position: absolute; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-xebuvg { -webkit-filter: brightness(1.3); background-color: #80340b; bottom: 0px; filter: brightness(1.3); flex: none; overflow: hidden; position: absolute; right: 236px; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-1hv5tf { -webkit-filter: brightness(1.2); background-color: #80340b; bottom: 316px; filter: brightness(1.2); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -4px; }',
    '.framer-YHDe7 .framer-1mzo4o6 { -webkit-filter: brightness(0.6); background-color: #80340b; filter: brightness(0.6); flex: none; height: 8px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 316px; }',
    '.framer-YHDe7 .framer-15eq4vz { background-color: #19306b; bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-ejox05 { -webkit-filter: brightness(0.5); background-color: #19306b; bottom: 0px; filter: brightness(0.5); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-9wdi0o { -webkit-filter: brightness(1.3); background-color: #19306b; filter: brightness(1.3); flex: none; height: 320px; left: 236px; overflow: hidden; position: absolute; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-kh2g6t { -webkit-filter: brightness(1.3); background-color: #19306b; bottom: 0px; filter: brightness(1.3); flex: none; overflow: hidden; position: absolute; right: 236px; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-sok9hv { -webkit-filter: brightness(1.2); background-color: #19306b; bottom: 316px; filter: brightness(1.2); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -4px; }',
    '.framer-YHDe7 .framer-8r0gq7 { -webkit-filter: brightness(0.6); background-color: #19306b; filter: brightness(0.6); flex: none; height: 8px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 316px; }',
    '.framer-YHDe7 .framer-1937vah { background-color: #125a61; bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-1rob1x1 { -webkit-filter: brightness(0.5); background-color: #125a61; bottom: 0px; filter: brightness(0.5); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }',
    '.framer-YHDe7 .framer-9tsp4b { -webkit-filter: brightness(1.3); background-color: #125a61; filter: brightness(1.3); flex: none; height: 320px; left: 236px; overflow: hidden; position: absolute; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-z7yr5j { -webkit-filter: brightness(1.3); background-color: #125a61; bottom: 0px; filter: brightness(1.3); flex: none; overflow: hidden; position: absolute; right: 236px; top: 0px; width: 8px; }',
    '.framer-YHDe7 .framer-ksq063 { -webkit-filter: brightness(1.2); background-color: #125a61; bottom: 316px; filter: brightness(1.2); flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: -4px; }',
    '.framer-YHDe7 .framer-d7hina { -webkit-filter: brightness(0.6); background-color: #125a61; filter: brightness(0.6); flex: none; height: 8px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 316px; }',
    '.framer-YHDe7 .framer-19a7ptm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 64px 0px 0px 0px; position: relative; width: 100%; z-index: 0; }',
    '.framer-YHDe7 .framer-1x0zz9f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1380px; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-qgqlvf { flex: none; height: auto; position: relative; text-shadow: -5px 4px 0px #690c0c; white-space: pre; width: 100%; }',
    '.framer-YHDe7 .framer-591i0z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1198px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-1s2iho1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-urn6t5-container, .framer-YHDe7 .framer-1gu1pnt-container { flex: none; height: 87px; position: relative; width: 400px; z-index: 2; }',
    '.framer-YHDe7 .framer-8bf2s5 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 420px; height: 300px; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 0px 40px 0px; position: relative; width: 100%; }',
    '.framer-YHDe7 .framer-13kfr0p { flex: none; height: 348px; left: calc(18.958333333333353% - 626px / 2); overflow: hidden; position: absolute; top: calc(71.00000000000001% - 348px / 2); width: 626px; }',
    '.framer-YHDe7 .framer-18yhr1c, .framer-YHDe7 .framer-14ven2t { flex: none; height: 347px; left: 0px; position: absolute; right: 0px; top: calc(50.00000000000002% - 347px / 2); z-index: 1; }',
    '.framer-YHDe7 .framer-1mo2k31 { aspect-ratio: 1.7433333333333334 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 566px); left: 61%; position: absolute; top: 66%; transform: translate(-50%, -50%); width: 987px; z-index: 2; }',
    '.framer-YHDe7 .framer-a5g7jd { flex: none; height: 348px; left: calc(81.04166666666669% - 626px / 2); overflow: hidden; position: absolute; top: calc(71.00000000000001% - 348px / 2); width: 626px; }',
    '.framer-YHDe7 .framer-e7gepl, .framer-YHDe7 .framer-17fsrbz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }',
    '.framer-YHDe7 .framer-17df5i8 { flex: none; height: 12px; position: relative; width: 12px; }',
    '@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-YHDe7.framer-72rtr7, .framer-YHDe7 .framer-16113bk, .framer-YHDe7 .framer-uw1cov, .framer-YHDe7 .framer-1q3xhik, .framer-YHDe7 .framer-1yepqim, .framer-YHDe7 .framer-1cokx2p, .framer-YHDe7 .framer-ofhvc0, .framer-YHDe7 .framer-y43kx8, .framer-YHDe7 .framer-1dbm505, .framer-YHDe7 .framer-hftvb7, .framer-YHDe7 .framer-1hq8n6p, .framer-YHDe7 .framer-1c1oyo9, .framer-YHDe7 .framer-1m19oa9, .framer-YHDe7 .framer-fi7r50, .framer-YHDe7 .framer-6b1r33, .framer-YHDe7 .framer-1umlpiq, .framer-YHDe7 .framer-hms3ed, .framer-YHDe7 .framer-6v2ke1, .framer-YHDe7 .framer-1ysukz3, .framer-YHDe7 .framer-1wb4hw, .framer-YHDe7 .framer-29eknz, .framer-YHDe7 .framer-obmqbz, .framer-YHDe7 .framer-as7jeh, .framer-YHDe7 .framer-1f4l70i, .framer-YHDe7 .framer-q7769h, .framer-YHDe7 .framer-1xxhkox, .framer-YHDe7 .framer-k50xpg, .framer-YHDe7 .framer-cbimcj, .framer-YHDe7 .framer-1dncs4e, .framer-YHDe7 .framer-iho8hm, .framer-YHDe7 .framer-1kc92h5, .framer-YHDe7 .framer-1qymh2z, .framer-YHDe7 .framer-1y0d41u, .framer-YHDe7 .framer-1wranau, .framer-YHDe7 .framer-ltzxeh, .framer-YHDe7 .framer-7ewpp, .framer-YHDe7 .framer-4d1q8i, .framer-YHDe7 .framer-1piebjh, .framer-YHDe7 .framer-1r6d62, .framer-YHDe7 .framer-a957xh, .framer-YHDe7 .framer-114h3nf, .framer-YHDe7 .framer-8suqic, .framer-YHDe7 .framer-irsc83, .framer-YHDe7 .framer-1bc7d1a, .framer-YHDe7 .framer-zkpn8f, .framer-YHDe7 .framer-b1thxc, .framer-YHDe7 .framer-11l9zo3, .framer-YHDe7 .framer-96lm67, .framer-YHDe7 .framer-107f3d5, .framer-YHDe7 .framer-73wida, .framer-YHDe7 .framer-1atbsp3, .framer-YHDe7 .framer-13bjwsn, .framer-YHDe7 .framer-mznm8, .framer-YHDe7 .framer-lyvige, .framer-YHDe7 .framer-1f14yrj, .framer-YHDe7 .framer-rnc81j, .framer-YHDe7 .framer-12ubdov, .framer-YHDe7 .framer-13iq58z, .framer-YHDe7 .framer-1fcw1rg, .framer-YHDe7 .framer-1k3zntb, .framer-YHDe7 .framer-l7wt71, .framer-YHDe7 .framer-bragua, .framer-YHDe7 .framer-1f2r7g5, .framer-YHDe7 .framer-19a7ptm, .framer-YHDe7 .framer-1x0zz9f, .framer-YHDe7 .framer-1s2iho1, .framer-YHDe7 .framer-8bf2s5, .framer-YHDe7 .framer-e7gepl, .framer-YHDe7 .framer-17fsrbz { gap: 0px; } .framer-YHDe7.framer-72rtr7 > *, .framer-YHDe7 .framer-y43kx8 > *, .framer-YHDe7 .framer-1dbm505 > *, .framer-YHDe7 .framer-k50xpg > *, .framer-YHDe7 .framer-iho8hm > *, .framer-YHDe7 .framer-1y0d41u > *, .framer-YHDe7 .framer-8suqic > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-YHDe7.framer-72rtr7 > :first-child, .framer-YHDe7 .framer-uw1cov > :first-child, .framer-YHDe7 .framer-1q3xhik > :first-child, .framer-YHDe7 .framer-1yepqim > :first-child, .framer-YHDe7 .framer-1cokx2p > :first-child, .framer-YHDe7 .framer-y43kx8 > :first-child, .framer-YHDe7 .framer-1dbm505 > :first-child, .framer-YHDe7 .framer-hftvb7 > :first-child, .framer-YHDe7 .framer-1c1oyo9 > :first-child, .framer-YHDe7 .framer-1umlpiq > :first-child, .framer-YHDe7 .framer-hms3ed > :first-child, .framer-YHDe7 .framer-1ysukz3 > :first-child, .framer-YHDe7 .framer-1wb4hw > :first-child, .framer-YHDe7 .framer-1f4l70i > :first-child, .framer-YHDe7 .framer-q7769h > :first-child, .framer-YHDe7 .framer-1xxhkox > :first-child, .framer-YHDe7 .framer-k50xpg > :first-child, .framer-YHDe7 .framer-iho8hm > :first-child, .framer-YHDe7 .framer-1qymh2z > :first-child, .framer-YHDe7 .framer-1y0d41u > :first-child, .framer-YHDe7 .framer-ltzxeh > :first-child, .framer-YHDe7 .framer-7ewpp > :first-child, .framer-YHDe7 .framer-114h3nf > :first-child, .framer-YHDe7 .framer-8suqic > :first-child, .framer-YHDe7 .framer-1bc7d1a > :first-child, .framer-YHDe7 .framer-zkpn8f > :first-child, .framer-YHDe7 .framer-96lm67 > :first-child, .framer-YHDe7 .framer-107f3d5 > :first-child, .framer-YHDe7 .framer-13bjwsn > :first-child, .framer-YHDe7 .framer-mznm8 > :first-child, .framer-YHDe7 .framer-rnc81j > :first-child, .framer-YHDe7 .framer-12ubdov > :first-child, .framer-YHDe7 .framer-1k3zntb > :first-child, .framer-YHDe7 .framer-l7wt71 > :first-child, .framer-YHDe7 .framer-19a7ptm > :first-child, .framer-YHDe7 .framer-1x0zz9f > :first-child { margin-top: 0px; } .framer-YHDe7.framer-72rtr7 > :last-child, .framer-YHDe7 .framer-uw1cov > :last-child, .framer-YHDe7 .framer-1q3xhik > :last-child, .framer-YHDe7 .framer-1yepqim > :last-child, .framer-YHDe7 .framer-1cokx2p > :last-child, .framer-YHDe7 .framer-y43kx8 > :last-child, .framer-YHDe7 .framer-1dbm505 > :last-child, .framer-YHDe7 .framer-hftvb7 > :last-child, .framer-YHDe7 .framer-1c1oyo9 > :last-child, .framer-YHDe7 .framer-1umlpiq > :last-child, .framer-YHDe7 .framer-hms3ed > :last-child, .framer-YHDe7 .framer-1ysukz3 > :last-child, .framer-YHDe7 .framer-1wb4hw > :last-child, .framer-YHDe7 .framer-1f4l70i > :last-child, .framer-YHDe7 .framer-q7769h > :last-child, .framer-YHDe7 .framer-1xxhkox > :last-child, .framer-YHDe7 .framer-k50xpg > :last-child, .framer-YHDe7 .framer-iho8hm > :last-child, .framer-YHDe7 .framer-1qymh2z > :last-child, .framer-YHDe7 .framer-1y0d41u > :last-child, .framer-YHDe7 .framer-ltzxeh > :last-child, .framer-YHDe7 .framer-7ewpp > :last-child, .framer-YHDe7 .framer-114h3nf > :last-child, .framer-YHDe7 .framer-8suqic > :last-child, .framer-YHDe7 .framer-1bc7d1a > :last-child, .framer-YHDe7 .framer-zkpn8f > :last-child, .framer-YHDe7 .framer-96lm67 > :last-child, .framer-YHDe7 .framer-107f3d5 > :last-child, .framer-YHDe7 .framer-13bjwsn > :last-child, .framer-YHDe7 .framer-mznm8 > :last-child, .framer-YHDe7 .framer-rnc81j > :last-child, .framer-YHDe7 .framer-12ubdov > :last-child, .framer-YHDe7 .framer-1k3zntb > :last-child, .framer-YHDe7 .framer-l7wt71 > :last-child, .framer-YHDe7 .framer-19a7ptm > :last-child, .framer-YHDe7 .framer-1x0zz9f > :last-child { margin-bottom: 0px; } .framer-YHDe7 .framer-16113bk > *, .framer-YHDe7 .framer-1m19oa9 > *, .framer-YHDe7 .framer-fi7r50 > *, .framer-YHDe7 .framer-as7jeh > *, .framer-YHDe7 .framer-irsc83 > *, .framer-YHDe7 .framer-b1thxc > *, .framer-YHDe7 .framer-11l9zo3 > *, .framer-YHDe7 .framer-73wida > *, .framer-YHDe7 .framer-1atbsp3 > *, .framer-YHDe7 .framer-lyvige > *, .framer-YHDe7 .framer-1f14yrj > *, .framer-YHDe7 .framer-13iq58z > *, .framer-YHDe7 .framer-1fcw1rg > *, .framer-YHDe7 .framer-bragua > *, .framer-YHDe7 .framer-1f2r7g5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-YHDe7 .framer-16113bk > :first-child, .framer-YHDe7 .framer-ofhvc0 > :first-child, .framer-YHDe7 .framer-1hq8n6p > :first-child, .framer-YHDe7 .framer-1m19oa9 > :first-child, .framer-YHDe7 .framer-fi7r50 > :first-child, .framer-YHDe7 .framer-6b1r33 > :first-child, .framer-YHDe7 .framer-6v2ke1 > :first-child, .framer-YHDe7 .framer-29eknz > :first-child, .framer-YHDe7 .framer-obmqbz > :first-child, .framer-YHDe7 .framer-as7jeh > :first-child, .framer-YHDe7 .framer-cbimcj > :first-child, .framer-YHDe7 .framer-1dncs4e > :first-child, .framer-YHDe7 .framer-1kc92h5 > :first-child, .framer-YHDe7 .framer-1wranau > :first-child, .framer-YHDe7 .framer-4d1q8i > :first-child, .framer-YHDe7 .framer-1piebjh > :first-child, .framer-YHDe7 .framer-1r6d62 > :first-child, .framer-YHDe7 .framer-a957xh > :first-child, .framer-YHDe7 .framer-irsc83 > :first-child, .framer-YHDe7 .framer-b1thxc > :first-child, .framer-YHDe7 .framer-11l9zo3 > :first-child, .framer-YHDe7 .framer-73wida > :first-child, .framer-YHDe7 .framer-1atbsp3 > :first-child, .framer-YHDe7 .framer-lyvige > :first-child, .framer-YHDe7 .framer-1f14yrj > :first-child, .framer-YHDe7 .framer-13iq58z > :first-child, .framer-YHDe7 .framer-1fcw1rg > :first-child, .framer-YHDe7 .framer-bragua > :first-child, .framer-YHDe7 .framer-1f2r7g5 > :first-child, .framer-YHDe7 .framer-1s2iho1 > :first-child, .framer-YHDe7 .framer-8bf2s5 > :first-child, .framer-YHDe7 .framer-e7gepl > :first-child, .framer-YHDe7 .framer-17fsrbz > :first-child { margin-left: 0px; } .framer-YHDe7 .framer-16113bk > :last-child, .framer-YHDe7 .framer-ofhvc0 > :last-child, .framer-YHDe7 .framer-1hq8n6p > :last-child, .framer-YHDe7 .framer-1m19oa9 > :last-child, .framer-YHDe7 .framer-fi7r50 > :last-child, .framer-YHDe7 .framer-6b1r33 > :last-child, .framer-YHDe7 .framer-6v2ke1 > :last-child, .framer-YHDe7 .framer-29eknz > :last-child, .framer-YHDe7 .framer-obmqbz > :last-child, .framer-YHDe7 .framer-as7jeh > :last-child, .framer-YHDe7 .framer-cbimcj > :last-child, .framer-YHDe7 .framer-1dncs4e > :last-child, .framer-YHDe7 .framer-1kc92h5 > :last-child, .framer-YHDe7 .framer-1wranau > :last-child, .framer-YHDe7 .framer-4d1q8i > :last-child, .framer-YHDe7 .framer-1piebjh > :last-child, .framer-YHDe7 .framer-1r6d62 > :last-child, .framer-YHDe7 .framer-a957xh > :last-child, .framer-YHDe7 .framer-irsc83 > :last-child, .framer-YHDe7 .framer-b1thxc > :last-child, .framer-YHDe7 .framer-11l9zo3 > :last-child, .framer-YHDe7 .framer-73wida > :last-child, .framer-YHDe7 .framer-1atbsp3 > :last-child, .framer-YHDe7 .framer-lyvige > :last-child, .framer-YHDe7 .framer-1f14yrj > :last-child, .framer-YHDe7 .framer-13iq58z > :last-child, .framer-YHDe7 .framer-1fcw1rg > :last-child, .framer-YHDe7 .framer-bragua > :last-child, .framer-YHDe7 .framer-1f2r7g5 > :last-child, .framer-YHDe7 .framer-1s2iho1 > :last-child, .framer-YHDe7 .framer-8bf2s5 > :last-child, .framer-YHDe7 .framer-e7gepl > :last-child, .framer-YHDe7 .framer-17fsrbz > :last-child { margin-right: 0px; } .framer-YHDe7 .framer-uw1cov > *, .framer-YHDe7 .framer-1q3xhik > *, .framer-YHDe7 .framer-hftvb7 > *, .framer-YHDe7 .framer-1umlpiq > *, .framer-YHDe7 .framer-hms3ed > *, .framer-YHDe7 .framer-q7769h > *, .framer-YHDe7 .framer-ltzxeh > *, .framer-YHDe7 .framer-1bc7d1a > *, .framer-YHDe7 .framer-zkpn8f > *, .framer-YHDe7 .framer-96lm67 > *, .framer-YHDe7 .framer-107f3d5 > *, .framer-YHDe7 .framer-13bjwsn > *, .framer-YHDe7 .framer-mznm8 > *, .framer-YHDe7 .framer-rnc81j > *, .framer-YHDe7 .framer-12ubdov > *, .framer-YHDe7 .framer-1k3zntb > *, .framer-YHDe7 .framer-l7wt71 > *, .framer-YHDe7 .framer-1x0zz9f > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-YHDe7 .framer-1yepqim > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-YHDe7 .framer-1cokx2p > * { margin: 0px; margin-bottom: calc(39px / 2); margin-top: calc(39px / 2); } .framer-YHDe7 .framer-ofhvc0 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-YHDe7 .framer-1hq8n6p > *, .framer-YHDe7 .framer-29eknz > *, .framer-YHDe7 .framer-1kc92h5 > *, .framer-YHDe7 .framer-1piebjh > *, .framer-YHDe7 .framer-1r6d62 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-YHDe7 .framer-1c1oyo9 > *, .framer-YHDe7 .framer-1wb4hw > *, .framer-YHDe7 .framer-19a7ptm > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-YHDe7 .framer-6b1r33 > *, .framer-YHDe7 .framer-cbimcj > *, .framer-YHDe7 .framer-1dncs4e > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-YHDe7 .framer-6v2ke1 > * { margin: 0px; margin-left: calc(28px / 2); margin-right: calc(28px / 2); } .framer-YHDe7 .framer-1ysukz3 > * { margin: 0px; margin-bottom: calc(200px / 2); margin-top: calc(200px / 2); } .framer-YHDe7 .framer-obmqbz > * { margin: 0px; margin-left: calc(75px / 2); margin-right: calc(75px / 2); } .framer-YHDe7 .framer-1f4l70i > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-YHDe7 .framer-1xxhkox > * { margin: 0px; margin-bottom: calc(280px / 2); margin-top: calc(280px / 2); } .framer-YHDe7 .framer-1qymh2z > *, .framer-YHDe7 .framer-7ewpp > *, .framer-YHDe7 .framer-114h3nf > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-YHDe7 .framer-1wranau > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-YHDe7 .framer-4d1q8i > *, .framer-YHDe7 .framer-a957xh > *, .framer-YHDe7 .framer-1s2iho1 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-YHDe7 .framer-8bf2s5 > * { margin: 0px; margin-left: calc(420px / 2); margin-right: calc(420px / 2); } .framer-YHDe7 .framer-e7gepl > *, .framer-YHDe7 .framer-17fsrbz > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } }',
    '@media (min-width: 1200px) { .framer-YHDe7 .hidden-72rtr7 { display: none !important; } }',
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-YHDe7 .hidden-tfjr65 { display: none !important; } .${pn.bodyClassName}-framer-YHDe7 { background: rgb(163, 18, 40); } .framer-YHDe7.framer-72rtr7 { height: 6302px; width: 810px; } .framer-YHDe7 .framer-qnxw74 { height: var(--framer-aspect-ratio-supported, 1400px); top: -400px; width: 1400px; } .framer-YHDe7 .framer-1dbm505 { padding: 0px 0px 0px 45px; } .framer-YHDe7 .framer-12pheqy-container { width: 420px; } .framer-YHDe7 .framer-1hq8n6p { border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; padding: 32px 48px 40px 48px; } .framer-YHDe7 .framer-1c1oyo9, .framer-YHDe7 .framer-1wb4hw { gap: 40px; } .framer-YHDe7 .framer-fi7r50 { right: -24px; } .framer-YHDe7 .framer-1umlpiq { left: 75%; top: 3%; } .framer-YHDe7 .framer-hms3ed { top: -64px; } .framer-YHDe7 .framer-1mev5nj { height: 86px; left: calc(50.00000000000002% - 170px / 2); top: calc(49.00000000000002% - 86px / 2); width: 170px; } .framer-YHDe7 .framer-bszj59 { height: var(--framer-aspect-ratio-supported, 324px); width: 262px; } .framer-YHDe7 .framer-1ysukz3 { padding: 40px 24px 120px 24px; } .framer-YHDe7 .framer-29eknz { flex-direction: column; } .framer-YHDe7 .framer-obmqbz { padding: 0px; width: 100%; } .framer-YHDe7 .framer-as7jeh { --border-bottom-width: 0px; --border-right-width: 4px; border-bottom-left-radius: unset; border-top-right-radius: 50px; flex: 1 0 0px; height: min-content; padding: 40px; width: 1px; } .framer-YHDe7 .framer-752w37 { height: var(--framer-aspect-ratio-supported, 320px); left: 442px; right: 0px; top: -108px; } .framer-YHDe7 .framer-1sw2kq1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 370px; justify-content: center; overflow: hidden; padding: 0px; width: 100%; } .framer-YHDe7 .framer-1f4l70i { flex: 1 0 0px; height: 100%; left: unset; position: relative; right: unset; top: unset; width: 1px; } .framer-YHDe7 .framer-q7769h { --border-right-width: 0px; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; box-shadow: unset; flex: 1 0 0px; height: 1px; } .framer-YHDe7 .framer-9612wo { bottom: unset; height: 506px; top: calc(48.720800889877665% - 506px / 2); } .framer-YHDe7 .framer-1xxhkox { padding: 104px 24px 24px 24px; } .framer-YHDe7 .framer-1r4k5ho { height: 826px; left: calc(46.29629629629632% - 714px / 2); top: -70px; width: 714px; } .framer-YHDe7 .framer-1x8ncrw { border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; } .framer-YHDe7 .framer-1kh30hj { white-space: pre; } .framer-YHDe7 .framer-1dncs4e { gap: 24px; } .framer-YHDe7 .framer-tri7lk { gap: 24px; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 0px 40px 0px 40px; } .framer-YHDe7 .framer-1qymh2z { flex: 1 0 0px; order: 0; width: 1px; } .framer-YHDe7 .framer-1y0d41u, .framer-YHDe7 .framer-1kts97u { width: 100%; } .framer-YHDe7 .framer-vf1nvp { aspect-ratio: 0.9977728285077951 / 1; height: var(--framer-aspect-ratio-supported, 351px); order: 1; width: 350px; } .framer-YHDe7 .framer-ltzxeh { padding: 120px 24px 120px 24px; } .framer-YHDe7 .framer-7ewpp { gap: 8px; width: 100%; } .framer-YHDe7 .framer-4d1q8i { gap: 8px; } .framer-YHDe7 .framer-1piebjh { padding: 40px 48px 48px 48px; } .framer-YHDe7 .framer-1r6d62 { width: 315px; } .framer-YHDe7 .framer-115tcr2 { bottom: 0px; left: 82px; right: 60px; } .framer-YHDe7 .framer-a957xh { flex-direction: column; gap: 8px; } .framer-YHDe7 .framer-114h3nf { align-self: unset; gap: 8px; height: min-content; order: 1; width: 100%; } .framer-YHDe7 .framer-8suqic { flex: none; flex-direction: row; gap: unset; height: 205px; justify-content: space-between; padding: 40px 56px 0px 40px; } .framer-YHDe7 .framer-wuqcyr { flex: 1 0 0px; max-width: 520px; width: 1px; } .framer-YHDe7 .framer-1y5iwfi { left: 515px; top: 52px; width: 218px; } .framer-YHDe7 .framer-1tf4wa9-container { flex: none; order: 0; width: 100%; } .framer-YHDe7 .framer-19a7ptm { gap: 48px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-YHDe7 .framer-1c1oyo9, .framer-YHDe7 .framer-1wb4hw, .framer-YHDe7 .framer-29eknz, .framer-YHDe7 .framer-1sw2kq1, .framer-YHDe7 .framer-1dncs4e, .framer-YHDe7 .framer-tri7lk, .framer-YHDe7 .framer-7ewpp, .framer-YHDe7 .framer-4d1q8i, .framer-YHDe7 .framer-a957xh, .framer-YHDe7 .framer-114h3nf, .framer-YHDe7 .framer-8suqic, .framer-YHDe7 .framer-19a7ptm { gap: 0px; } .framer-YHDe7 .framer-1c1oyo9 > *, .framer-YHDe7 .framer-1wb4hw > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-YHDe7 .framer-1c1oyo9 > :first-child, .framer-YHDe7 .framer-1wb4hw > :first-child, .framer-YHDe7 .framer-29eknz > :first-child, .framer-YHDe7 .framer-7ewpp > :first-child, .framer-YHDe7 .framer-a957xh > :first-child, .framer-YHDe7 .framer-114h3nf > :first-child, .framer-YHDe7 .framer-19a7ptm > :first-child { margin-top: 0px; } .framer-YHDe7 .framer-1c1oyo9 > :last-child, .framer-YHDe7 .framer-1wb4hw > :last-child, .framer-YHDe7 .framer-29eknz > :last-child, .framer-YHDe7 .framer-7ewpp > :last-child, .framer-YHDe7 .framer-a957xh > :last-child, .framer-YHDe7 .framer-114h3nf > :last-child, .framer-YHDe7 .framer-19a7ptm > :last-child { margin-bottom: 0px; } .framer-YHDe7 .framer-29eknz > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-YHDe7 .framer-1sw2kq1 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-YHDe7 .framer-1sw2kq1 > :first-child, .framer-YHDe7 .framer-1dncs4e > :first-child, .framer-YHDe7 .framer-tri7lk > :first-child, .framer-YHDe7 .framer-4d1q8i > :first-child { margin-left: 0px; } .framer-YHDe7 .framer-1sw2kq1 > :last-child, .framer-YHDe7 .framer-1dncs4e > :last-child, .framer-YHDe7 .framer-tri7lk > :last-child, .framer-YHDe7 .framer-4d1q8i > :last-child { margin-right: 0px; } .framer-YHDe7 .framer-1dncs4e > *, .framer-YHDe7 .framer-tri7lk > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-YHDe7 .framer-7ewpp > *, .framer-YHDe7 .framer-a957xh > *, .framer-YHDe7 .framer-114h3nf > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-YHDe7 .framer-4d1q8i > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-YHDe7 .framer-8suqic > *, .framer-YHDe7 .framer-8suqic > :first-child, .framer-YHDe7 .framer-8suqic > :last-child { margin: 0px; } .framer-YHDe7 .framer-19a7ptm > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } }}`,
    `@media (max-width: 809px) { .framer-YHDe7 .hidden-1gask65 { display: none !important; } .${pn.bodyClassName}-framer-YHDe7 { background: rgb(163, 18, 40); } .framer-YHDe7.framer-72rtr7 { height: 6020px; width: 390px; } .framer-YHDe7 .framer-16113bk { flex-direction: column; max-width: 406px; padding: 0px 8px 0px 8px; top: 8px; } .framer-YHDe7 .framer-1kntkg0-container { flex: none; width: 100%; } .framer-YHDe7 .framer-uw1cov { gap: 200px; padding: 0px 8px 24px 8px; } .framer-YHDe7 .framer-qnxw74 { height: var(--framer-aspect-ratio-supported, 1300px); top: -550px; width: 1300px; } .framer-YHDe7 .framer-1q3xhik { max-width: 390px; padding: 144px 0px 216px 0px; } .framer-YHDe7 .framer-1yepqim, .framer-YHDe7 .framer-12pheqy-container, .framer-YHDe7 .framer-1kts97u { width: 100%; } .framer-YHDe7 .framer-1cokx2p { gap: 24px; width: 100%; } .framer-YHDe7 .framer-15ehnwh { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-YHDe7 .framer-8yynmu { max-width: 300px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-YHDe7 .framer-ofhvc0, .framer-YHDe7 .framer-29eknz, .framer-YHDe7 .framer-1s2iho1 { flex-direction: column; } .framer-YHDe7 .framer-y43kx8 { max-width: 390px; padding: 0px; } .framer-YHDe7 .framer-1dbm505, .framer-YHDe7 .framer-1x0zz9f { padding: 0px; } .framer-YHDe7 .framer-1hq8n6p { border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: unset; border-top-right-radius: unset; padding: 32px 0px 40px 0px; } .framer-YHDe7 .framer-1c1oyo9 { gap: 24px; overflow: hidden; } .framer-YHDe7 .framer-1m19oa9 { padding: 0px 0px 0px 32px; } .framer-YHDe7 .framer-fi7r50 { right: -24px; } .framer-YHDe7 .framer-zwbfv9 { height: 39px; width: 62px; } .framer-YHDe7 .framer-1y9x08v { height: 44px; left: 15px; top: -3px; width: 40px; } .framer-YHDe7 .framer-1umlpiq { bottom: 305px; left: 42%; top: unset; transform: translateX(-50%); } .framer-YHDe7 .framer-hms3ed { left: 280px; order: 0; top: 122px; width: 134px; } .framer-YHDe7 .framer-jwnynj { height: 65px; left: calc(48.50746268656719% - 123px / 2); top: calc(47.56097560975612% - 65px / 2); width: 123px; } .framer-YHDe7 .framer-1mev5nj { height: 82px; left: calc(49.824561403508795% - 142px / 2); top: calc(50.00000000000002% - 82px / 2); width: 142px; } .framer-YHDe7 .framer-bszj59 { height: var(--framer-aspect-ratio-supported, 477px); order: 1; width: 386px; } .framer-YHDe7 .framer-1ysukz3 { padding: 24px 8px 0px 8px; } .framer-YHDe7 .framer-1wb4hw { gap: 40px; max-width: 390px; } .framer-YHDe7 .framer-obmqbz { padding: 0px; width: 100%; } .framer-YHDe7 .framer-as7jeh { --border-bottom-width: 0px; --border-right-width: 4px; border-bottom-left-radius: unset; border-top-right-radius: 50px; flex: 1 0 0px; height: min-content; padding: 32px; width: 1px; } .framer-YHDe7 .framer-752w37 { height: var(--framer-aspect-ratio-supported, 192px); left: 238px; right: -56px; top: -68px; } .framer-YHDe7 .framer-1sw2kq1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; width: 100%; } .framer-YHDe7 .framer-1f4l70i { left: unset; position: relative; right: unset; top: unset; width: 100%; } .framer-YHDe7 .framer-q7769h { --border-bottom-width: 0px; border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; box-shadow: unset; height: min-content; padding: 32px; } .framer-YHDe7 .framer-9612wo { bottom: unset; height: 568px; top: calc(45.77259475218661% - 568px / 2); } .framer-YHDe7 .framer-1xxhkox { gap: 160px; max-width: 390px; padding: 80px 8px 24px 8px; } .framer-YHDe7 .framer-1r4k5ho { height: 412px; left: calc(51.794871794871824% - 326px / 2); top: 0px; width: 326px; } .framer-YHDe7 .framer-1x8ncrw { border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; gap: 0px; height: min-content; justify-content: center; padding: 40px 0px 47px 0px; } .framer-YHDe7 .framer-1kh30hj { white-space: pre; } .framer-YHDe7 .framer-1dncs4e { align-content: center; align-items: center; flex-direction: column; gap: 16px; width: 100%; } .framer-YHDe7 .framer-iho8hm { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; scroll-margin-top: 80px; } .framer-YHDe7 .framer-1kc92h5 { padding: 40px 0px 0px 0px; } .framer-YHDe7 .framer-tri7lk { flex-direction: column; gap: 24px; justify-content: center; max-width: 390px; overflow: visible; padding: 0px 8px 0px 8px; } .framer-YHDe7 .framer-1qymh2z { align-content: center; align-items: center; order: 0; width: 100%; } .framer-YHDe7 .framer-1y0d41u { align-content: center; align-items: center; gap: 8px; width: 100%; } .framer-YHDe7 .framer-vf1nvp { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 350px); order: 1; width: 350px; } .framer-YHDe7 .framer-1wranau { padding: 0px 8px 0px 8px; } .framer-YHDe7 .framer-kyuclr-container, .framer-YHDe7 .framer-qgqlvf { max-width: 390px; } .framer-YHDe7 .framer-ltzxeh { max-width: 390px; padding: 80px 8px 80px 8px; scroll-margin-top: 10px; } .framer-YHDe7 .framer-7ewpp { gap: 8px; max-width: 400px; width: 100%; } .framer-YHDe7 .framer-4d1q8i, .framer-YHDe7 .framer-a957xh { flex-direction: column; gap: 8px; } .framer-YHDe7 .framer-1piebjh { flex: none; padding: 32px 40px 40px 40px; width: 100%; } .framer-YHDe7 .framer-1r6d62 { align-self: unset; height: 240px; width: 100%; } .framer-YHDe7 .framer-115tcr2 { left: 99px; right: 96px; } .framer-YHDe7 .framer-114h3nf { align-self: unset; gap: 8px; height: min-content; order: 1; width: 100%; } .framer-YHDe7 .framer-8suqic { align-content: center; align-items: center; flex: none; gap: 40px; height: min-content; justify-content: center; padding: 50px 40px 85px 40px; } .framer-YHDe7 .framer-wuqcyr { max-width: 520px; } .framer-YHDe7 .framer-1y5iwfi { bottom: unset; height: 103px; left: 236px; top: 135px; } .framer-YHDe7 .framer-1tf4wa9-container { flex: none; order: 0; width: 100%; } .framer-YHDe7 .framer-19a7ptm { gap: 32px; justify-content: center; padding: 40px 8px 0px 8px; } .framer-YHDe7 .framer-591i0z { align-content: unset; align-items: unset; display: grid; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); justify-content: center; max-width: 390px; padding: 0px 8px 0px 32px; } .framer-YHDe7 .framer-adug6f, .framer-YHDe7 .framer-30s9tk, .framer-YHDe7 .framer-i6ww5i, .framer-YHDe7 .framer-js9edy { align-self: start; height: 100%; justify-self: start; width: 100%; } .framer-YHDe7 .framer-urn6t5-container, .framer-YHDe7 .framer-1gu1pnt-container { max-width: 390px; width: 100%; } .framer-YHDe7 .framer-8bf2s5 { align-content: center; align-items: center; flex-direction: column; gap: 24px; height: min-content; justify-content: flex-end; padding: 320px 0px 40px 0px; } .framer-YHDe7 .framer-1mo2k31 { bottom: -1px; height: var(--framer-aspect-ratio-supported, 366px); left: -82px; top: unset; transform: unset; width: 639px; } .framer-YHDe7 .framer-a5g7jd { height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; top: calc(49.945945945945965% - 100% / 2); width: 100%; } .framer-YHDe7 .framer-14ven2t { height: 100%; left: -299px; right: -299px; top: calc(49.945945945945965% - 100.10810810810811% / 2); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-YHDe7 .framer-16113bk, .framer-YHDe7 .framer-uw1cov, .framer-YHDe7 .framer-1cokx2p, .framer-YHDe7 .framer-ofhvc0, .framer-YHDe7 .framer-1c1oyo9, .framer-YHDe7 .framer-1wb4hw, .framer-YHDe7 .framer-29eknz, .framer-YHDe7 .framer-1sw2kq1, .framer-YHDe7 .framer-1xxhkox, .framer-YHDe7 .framer-1x8ncrw, .framer-YHDe7 .framer-1dncs4e, .framer-YHDe7 .framer-tri7lk, .framer-YHDe7 .framer-1y0d41u, .framer-YHDe7 .framer-7ewpp, .framer-YHDe7 .framer-4d1q8i, .framer-YHDe7 .framer-a957xh, .framer-YHDe7 .framer-114h3nf, .framer-YHDe7 .framer-8suqic, .framer-YHDe7 .framer-19a7ptm, .framer-YHDe7 .framer-591i0z, .framer-YHDe7 .framer-1s2iho1, .framer-YHDe7 .framer-8bf2s5 { gap: 0px; } .framer-YHDe7 .framer-16113bk > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-YHDe7 .framer-16113bk > :first-child, .framer-YHDe7 .framer-uw1cov > :first-child, .framer-YHDe7 .framer-1cokx2p > :first-child, .framer-YHDe7 .framer-ofhvc0 > :first-child, .framer-YHDe7 .framer-1c1oyo9 > :first-child, .framer-YHDe7 .framer-1wb4hw > :first-child, .framer-YHDe7 .framer-29eknz > :first-child, .framer-YHDe7 .framer-1sw2kq1 > :first-child, .framer-YHDe7 .framer-1xxhkox > :first-child, .framer-YHDe7 .framer-1x8ncrw > :first-child, .framer-YHDe7 .framer-1dncs4e > :first-child, .framer-YHDe7 .framer-tri7lk > :first-child, .framer-YHDe7 .framer-1y0d41u > :first-child, .framer-YHDe7 .framer-7ewpp > :first-child, .framer-YHDe7 .framer-4d1q8i > :first-child, .framer-YHDe7 .framer-a957xh > :first-child, .framer-YHDe7 .framer-114h3nf > :first-child, .framer-YHDe7 .framer-8suqic > :first-child, .framer-YHDe7 .framer-19a7ptm > :first-child, .framer-YHDe7 .framer-1s2iho1 > :first-child, .framer-YHDe7 .framer-8bf2s5 > :first-child { margin-top: 0px; } .framer-YHDe7 .framer-16113bk > :last-child, .framer-YHDe7 .framer-uw1cov > :last-child, .framer-YHDe7 .framer-1cokx2p > :last-child, .framer-YHDe7 .framer-ofhvc0 > :last-child, .framer-YHDe7 .framer-1c1oyo9 > :last-child, .framer-YHDe7 .framer-1wb4hw > :last-child, .framer-YHDe7 .framer-29eknz > :last-child, .framer-YHDe7 .framer-1sw2kq1 > :last-child, .framer-YHDe7 .framer-1xxhkox > :last-child, .framer-YHDe7 .framer-1x8ncrw > :last-child, .framer-YHDe7 .framer-1dncs4e > :last-child, .framer-YHDe7 .framer-tri7lk > :last-child, .framer-YHDe7 .framer-1y0d41u > :last-child, .framer-YHDe7 .framer-7ewpp > :last-child, .framer-YHDe7 .framer-4d1q8i > :last-child, .framer-YHDe7 .framer-a957xh > :last-child, .framer-YHDe7 .framer-114h3nf > :last-child, .framer-YHDe7 .framer-8suqic > :last-child, .framer-YHDe7 .framer-19a7ptm > :last-child, .framer-YHDe7 .framer-1s2iho1 > :last-child, .framer-YHDe7 .framer-8bf2s5 > :last-child { margin-bottom: 0px; } .framer-YHDe7 .framer-uw1cov > * { margin: 0px; margin-bottom: calc(200px / 2); margin-top: calc(200px / 2); } .framer-YHDe7 .framer-1cokx2p > *, .framer-YHDe7 .framer-ofhvc0 > *, .framer-YHDe7 .framer-1c1oyo9 > *, .framer-YHDe7 .framer-tri7lk > *, .framer-YHDe7 .framer-8bf2s5 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-YHDe7 .framer-1wb4hw > *, .framer-YHDe7 .framer-8suqic > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-YHDe7 .framer-29eknz > *, .framer-YHDe7 .framer-1sw2kq1 > *, .framer-YHDe7 .framer-1x8ncrw > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-YHDe7 .framer-1xxhkox > * { margin: 0px; margin-bottom: calc(160px / 2); margin-top: calc(160px / 2); } .framer-YHDe7 .framer-1dncs4e > *, .framer-YHDe7 .framer-1s2iho1 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-YHDe7 .framer-1y0d41u > *, .framer-YHDe7 .framer-7ewpp > *, .framer-YHDe7 .framer-4d1q8i > *, .framer-YHDe7 .framer-a957xh > *, .framer-YHDe7 .framer-114h3nf > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-YHDe7 .framer-19a7ptm > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-YHDe7 .framer-591i0z > *, .framer-YHDe7 .framer-591i0z > :first-child, .framer-YHDe7 .framer-591i0z > :last-child { margin: 0px; } }}`,
    ...$o,
    ...oi,
    ...ci,
    ...jn,
    ...li,
    ...ti,
    ...Xt,
    '.framer-YHDe7[data-border="true"]::after, .framer-YHDe7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  ma = pe(Hd, Rd, 'framer-YHDe7'),
  mg = ma;
ma.displayName = 'Home';
ma.defaultProps = { height: 6951, width: 1200 };
ue(
  ma,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
          url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
          url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+1F00-1FFF',
          url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange: 'U+0370-03FF',
          url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
          url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
          url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
          weight: '400',
        },
        {
          family: 'Inter',
          source: 'framer',
          style: 'normal',
          unicodeRange:
            'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
          url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
          weight: '400',
        },
        {
          family: 'Troika Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/W1kBe3t4YAsECqsQa1Yu22IYSg.woff2',
        },
        {
          family: 'Bricolage Grotesque',
          source: 'google',
          style: 'normal',
          url: 'https://fonts.gstatic.com/s/bricolagegrotesque/v7/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvcXlyMgvs-wJDtw.woff2',
          weight: '600',
        },
        {
          family: 'Kremlin Regular',
          source: 'custom',
          url: 'https://framerusercontent.com/assets/fR0SwRnK7yBX3Ru9l7MJMggRZFk.woff2',
        },
        {
          family: 'Aclonica',
          source: 'google',
          style: 'normal',
          url: 'https://fonts.gstatic.com/s/aclonica/v22/K2FyfZJVlfNNSEBXGb7WCI6oBjLz.woff2',
          weight: '400',
        },
      ],
    },
    ...zc,
    ...Bc,
    ...qc,
    ...Kc,
    ...Zc,
    ...Xc,
    ...Gc,
    ...Qc,
    ...Jc,
    ...$c,
    ...ed,
    ...rd,
    ...td,
    ...be(Jo),
    ...be(ni),
    ...be(mi),
    ...be(Wn),
    ...be(si),
    ...be(ri),
    ...be(Zt),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var cg = {
  exports: {
    default: {
      type: 'reactComponent',
      name: 'FrameraugiA20Il',
      slots: [],
      annotations: {
        framerIntrinsicHeight: '6951',
        framerIntrinsicWidth: '1200',
        framerDisplayContentsDiv: 'false',
        framerResponsiveScreen: '',
        framerComponentViewportWidth: 'true',
        framerContractVersion: '1',
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"jVwZneS9k":{"layout":["fixed","fixed"]},"XXbQgpb6O":{"layout":["fixed","fixed"]}}}',
        framerImmutableVariables: 'true',
      },
    },
    Props: { type: 'tsType', annotations: { framerContractVersion: '1' } },
    __FramerMetadata__: { type: 'variable' },
  },
};
export { cg as __FramerMetadata__, mg as default };
//# sourceMappingURL=vw6VN3ijGeVsRz7HundVjZy_OyeGxEX8s0t91ggvIvU.QTBY7H2L.mjs.map

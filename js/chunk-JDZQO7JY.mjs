import {
  $ as X,
  Aa as T,
  Ca as J,
  Fa as q,
  Q as U,
  T as w,
  U as I,
  W as p,
  Z as k,
  c as E,
  ca as Y,
  g as O,
  ga as j,
  j as P,
  l as D,
  la as Z,
  o as A,
  p as W,
  t as s,
  v as M,
  x as u,
  z as G,
  za as Q,
} from './chunk-KS6JXC2O.mjs';
function K(n) {
  let {
      patternType: a,
      front: r,
      back: t,
      radius: h,
      scale: e,
      shouldAnimate: l,
      direction: m,
      diagonal: x,
      duration: _,
    } = n,
    S = I.current() === I.canvas,
    i,
    d,
    o,
    $,
    v,
    H,
    f,
    g,
    C = w.toHexString(w(r)),
    R = w.toHexString(w(t)),
    c = C.replace('#', ''),
    N = R.replace('#', ''),
    z = m === 'left' || m === 'top' ? -1 : 1,
    y = m === 'left' || m === 'right' ? z * e : 0,
    V = m === 'top' || m === 'bottom' ? z * e : 0;
  return (
    a === 'wave' &&
      ((i = `radial-gradient(circle at center center, ${r}, ${t}), repeating-radial-gradient(circle at center center, ${r}, ${r}, ${e}px, transparent ${
        e * 2
      }px, transparent ${e}px)`),
      (v = 'multiply')),
    a === 'zigzag' &&
      ((i = `linear-gradient(135deg, ${r} 25%, transparent 25%), linear-gradient(225deg, ${r} 25%, transparent 25%), linear-gradient(45deg, ${r} 25%, transparent 25%), linear-gradient(315deg, ${r} 25%, ${t} 25%)`),
      (d = `${e}px 0, ${e}px 0, 0 0, 0 0`),
      (o = `${e * 2}px ${e * 2}px`),
      ($ = 'repeat')),
    a === 'diagonal' &&
      (i = `repeating-linear-gradient(45deg, ${r}, ${r} ${e / 2}px, ${t} ${
        e / 2
      }px, ${t} ${e * 2}px )`),
    a === 'diagonal-two' &&
      (i = `repeating-linear-gradient( 135deg, ${r}, ${r} ${e / 2}px, ${t} ${
        e / 2
      }px, ${t} ${e * 2}px )`),
    a === 'blocks' &&
      ((i = `linear-gradient(30deg, ${r} 12%, transparent 12.5%, transparent 87%, ${r} 87.5%, ${r}), linear-gradient(150deg, ${r} 12%, transparent 12.5%, transparent 87%, ${r} 87.5%, ${r}), linear-gradient(30deg, ${r} 12%, transparent 12.5%, transparent 87%, ${r} 87.5%, ${r}), linear-gradient(150deg, ${r} 12%, transparent 12.5%, transparent 87%, ${r} 87.5%, ${r}), linear-gradient(60deg, ${t} 25%, transparent 25.5%, transparent 75%, ${t} 75%, ${t}), linear-gradient(60deg, ${t} 25%, transparent 25.5%, transparent 75%, ${t} 75%, ${t})`),
      (o = `${e * 8}px ${e * 14}px`),
      (d = `0 0, 0 0, ${e * 4}px ${e * 7}px, ${e * 4}px ${e * 7}px, 0 0, ${
        e * 4
      }px ${e * 7}px`)),
    a === 'polka' &&
      ((i = `radial-gradient(${r} 1px, transparent 1px), radial-gradient(${r} 1px, ${t} 1px)`),
      (o = `${e * 2}px ${e * 2}px`),
      (d = `0 0, ${e}px ${e}px`)),
    a === 'rhombus' &&
      ((i = `linear-gradient(135deg, ${r} 25%, transparent 25%), linear-gradient(225deg, ${r} 25%, transparent 25%), linear-gradient(45deg, ${r} 25%, transparent 25%), linear-gradient(315deg, ${r} 25%, ${t} 25%)`),
      (d = `${e}px 0, ${e}px 0, 0 0, 0 0`),
      (o = `${e}px ${e}px`),
      ($ = 'repeat')),
    a === 'stars' &&
      ((i = `radial-gradient(ellipse ${e}px ${e}px, ${r}, ${r} 25%, ${t} 25%)`),
      (o = `${e / 2}px ${e / 2}px`),
      l && (g = `${y}px ${V}px`)),
    a === 'circles' &&
      ((i = `radial-gradient(circle at 100% 50%, ${t} 20%, ${r} 21%, ${r} 34%, transparent 35%, transparent), radial-gradient(circle at 0% 50%, ${t} 20%, ${r} 21%, ${r} 34%, ${t} 35%, ${t})`),
      (o = `${e * 2}px ${e * 2}px`)),
    a === 'rectangles' &&
      ((i = `repeating-linear-gradient(45deg, ${r} 25%, transparent 25%, transparent 75%, ${r} 75%, ${r}), repeating-linear-gradient(45deg, ${r} 25%, ${t} 25%, ${t} 75%, ${r} 75%, ${r})`),
      (d = `0 0, ${e}px ${e}px`),
      (o = `${e * 2}px ${e * 2}px`)),
    a === 'lines' &&
      ((i = `linear-gradient(0deg, ${r} 50%, ${t} 50%)`),
      (o = `${e}px ${e}px`)),
    a === 'lines-vertical' &&
      ((i = `linear-gradient(to right, ${r} 50%, ${t} 50%)`),
      (o = `${e}px ${e}px`)),
    a === 'paper' &&
      ((i = `linear-gradient(${r} 2px, transparent 2px), linear-gradient(90deg, ${r} 2px, transparent 2px), linear-gradient(${r} 1px, transparent 1px), linear-gradient(90deg, ${r} 1px, ${t} 1px)`),
      (o = `${e * 5}px ${e * 5}px, ${e * 5}px ${
        e * 5
      }px, ${e}px ${e}px, ${e}px ${e}px`),
      (d = '-2px -2px, -2px -2px, -1px -1px, -1px -1px')),
    a === 'crosses' &&
      ((i = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' %3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${c}' %3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`),
      (o = `${e * 4}px ${e * 4}px`),
      (f = t)),
    a === 'wave-lines' &&
      ((i = `url("data:image/svg+xml,%3Csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23${c}' fill-rule='evenodd'/%3E%3C/svg%3E")`),
      (o = `${e * 10}px ${e * 2}px`),
      (f = t),
      l && (g = `${y * 10}px ${V * 2}px`)),
    a === 'clouds' &&
      ((i = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='28'%3E%3Cpath fill='%23${c}' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`),
      (o = `${e * 5.6}px ${e * 2.8}px`),
      (f = t),
      l && (g = `${y * 5.6}px ${V * 2.8}px`)),
    a === 'stars-two' &&
      ((i = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath fill='%23${c}' d='m16 8.764 2.351 4.764 5.257.764L19.804 18l.898 5.236L16 20.764l-4.702 2.472.898-5.236-3.804-3.708 5.257-.764Z'%3E%3C/path%3E%3C/svg%3E")`),
      (o = `${e * 3.2}px ${e * 3.2}px`),
      (f = t)),
    a === 'wiggle' &&
      ((i = `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${c}' %3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`),
      (f = t),
      (o = `${e * 5.2}px ${e * 2.6}px`),
      l &&
        (x
          ? (g = `-${e * 5.2}px -${e * 5.2}px`)
          : (g = `${e * 5.2}px ${e * 5.2}px`))),
    a === 'groovy' &&
      ((i = `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V0C4.477 0 0 4.477 0 10v30zm22 0c-5.523 0-10-4.477-10-10V0c5.523 0 10 4.477 10 10v30z' fill='%23${c}' fill-rule='evenodd'/%3E%3C/svg%3E")`),
      (f = t),
      (o = `${e * 2.4}px ${e * 4}px`),
      l && (g = `${y * 2.4}px ${V * 4}px`)),
    a === 'plus' &&
      ((i = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${c}' %3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`),
      (f = t),
      (o = `${e * 6}px ${e * 6}px`)),
    s(u.div, {
      style: {
        width: '100%',
        height: '100%',
        backgroundColor: f || 'transparent',
        backgroundImage: i,
        backgroundPosition: d,
        backgroundSize: o,
        backgroundRepeat: $,
        backgroundBlendMode: v,
        borderRadius: h,
        filter: H,
      },
      animate: l && { backgroundPosition: g },
      transition: {
        type: 'tween',
        ease: 'linear',
        duration: _,
        repeat: 1 / 0,
        repeatType: 'loop',
      },
    })
  );
}
K.displayName = 'Pattern';
k(K, {
  patternType: {
    type: p.Enum,
    defaultValue: 'wave-lines',
    options: [
      'wave-lines',
      'clouds',
      'wiggle',
      'groovy',
      'plus',
      'circles',
      'rectangles',
      'lines',
      'lines-vertical',
      'diagonal',
      'diagonal-two',
      'blocks',
      'wave',
      'zigzag',
      'polka',
      'rhombus',
      'stars',
      'stars-two',
      'paper',
      'crosses',
    ],
    optionTitles: [
      'Wave Lines',
      'Clouds',
      'Wiggle',
      'Groovy',
      'Plus',
      'Circles',
      'Rectangles',
      'Lines',
      'Lines Vertical',
      'Diagonal',
      'Diagonal 2',
      'Blocks',
      'Wave',
      'ZigZag',
      'Polka',
      'Rhombus',
      'Stars',
      'Stars 2',
      'Paper',
      'Crosses',
    ],
    title: 'Type',
  },
  front: { type: p.Color, title: 'Front', defaultValue: '#FFF' },
  back: { type: p.Color, title: 'Back', defaultValue: '#2DD' },
  scale: { type: p.Number, min: 1, max: 100, step: 1, defaultValue: 10 },
  radius: { type: p.Number, min: 0, max: 100, step: 1, defaultValue: 0 },
  shouldAnimate: {
    type: p.Boolean,
    title: 'Animate',
    defaultValue: !1,
    hidden(n) {
      return (
        n.patternType !== 'wave-lines' &&
        n.patternType !== 'wiggle' &&
        n.patternType !== 'clouds' &&
        n.patternType !== 'stars' &&
        n.patternType !== 'groovy'
      );
    },
  },
  direction: {
    type: p.Enum,
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
    hidden(n) {
      return n.patternType === 'wiggle' || n.shouldAnimate === !1;
    },
  },
  diagonal: {
    type: p.Boolean,
    title: 'Direction',
    defaultValue: !0,
    enabledTitle: 'TL',
    disabledTitle: 'BR',
    hidden(n) {
      return n.patternType !== 'wiggle';
    },
  },
  duration: {
    type: p.Number,
    min: 0,
    max: 50,
    step: 0.1,
    defaultValue: 5,
    hidden(n) {
      return n.shouldAnimate === !1;
    },
  },
});
var re = ['DGEBFeyzT', 'Rwf8mnR13'],
  te = 'framer-YOCIf',
  ae = { DGEBFeyzT: 'framer-v-v2o4wn', Rwf8mnR13: 'framer-v-7gm07v' };
function ee(n, ...a) {
  let r = {};
  return a?.forEach((t) => t && Object.assign(r, n[t])), r;
}
var ne = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring' },
  ie = (n, a) => `translate(-50%, -50%) ${a}`,
  oe = ({ value: n, children: a }) => {
    let r = P(M),
      t = n ?? r.transition,
      h = A(() => ({ ...r, transition: t }), [JSON.stringify(t)]);
    return s(M.Provider, { value: h, children: a });
  },
  le = u(E),
  se = { big: 'DGEBFeyzT', smaller: 'Rwf8mnR13' },
  pe = ({ buttonText: n, height: a, id: r, link: t, width: h, ...e }) => {
    var l, m, x;
    return {
      ...e,
      iNbkgQyTX: t ?? e.iNbkgQyTX,
      variant:
        (m = (l = se[e.variant]) !== null && l !== void 0 ? l : e.variant) !==
          null && m !== void 0
          ? m
          : 'DGEBFeyzT',
      yb8uI6K95:
        (x = n ?? e.yb8uI6K95) !== null && x !== void 0 ? x : 'Buy on Uniswap',
    };
  },
  me = (n, a) =>
    n.layoutDependency ? a.join('-') + n.layoutDependency : a.join('-'),
  fe = O(function (n, a) {
    let { activeLocale: r, setLocale: t } = U(),
      {
        style: h,
        className: e,
        layoutId: l,
        variant: m,
        iNbkgQyTX: x,
        yb8uI6K95: _,
        ...S
      } = pe(n),
      {
        baseVariant: i,
        classNames: d,
        clearLoadingGesture: o,
        gestureHandlers: $,
        gestureVariant: v,
        isLoading: H,
        setGestureState: f,
        setVariant: g,
        variants: C,
      } = Q({
        cycleOrder: re,
        defaultVariant: 'DGEBFeyzT',
        variant: m,
        variantClassNames: ae,
      }),
      R = me(n, C),
      c = W(null),
      N = D(),
      z = [],
      y = Y();
    return s(G, {
      id: l ?? N,
      children: s(le, {
        animate: C,
        initial: !1,
        children: s(oe, {
          value: ne,
          children: s(Z, {
            href: x,
            children: s(u.a, {
              ...S,
              ...$,
              className: `${X(te, ...z, 'framer-v2o4wn', e, d)} framer-1gz4d3o`,
              'data-border': !0,
              'data-framer-name': 'big',
              layoutDependency: R,
              layoutId: 'DGEBFeyzT',
              ref: a ?? c,
              style: {
                '--border-bottom-width': '4px',
                '--border-color':
                  'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                '--border-left-width': '4px',
                '--border-right-width': '4px',
                '--border-style': 'solid',
                '--border-top-width': '4px',
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                boxShadow: '2px 4px 0px 0px rgba(0, 0, 0, 1)',
                ...h,
              },
              ...ee({ Rwf8mnR13: { 'data-framer-name': 'smaller' } }, i, v),
              children: s(J, {
                __fromCanvasComponent: !0,
                children: s(E, {
                  children: s(u.p, {
                    style: {
                      '--font-selector': 'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                      '--framer-font-family':
                        '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                      '--framer-font-size': '40px',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color':
                        'var(--extracted-r6o4lv, var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)))',
                    },
                    children: 'Buy on Uniswap',
                  }),
                }),
                className: 'framer-vim1dg',
                'data-framer-name': 'Buy on Uniswap',
                fonts: ['CUSTOM;Kremlin Regular'],
                layoutDependency: R,
                layoutId: 'bZcn4_a3Y',
                style: {
                  '--extracted-r6o4lv':
                    'var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3))',
                  '--framer-paragraph-spacing': '0px',
                },
                text: _,
                transformTemplate: ie,
                verticalAlignment: 'top',
                withExternalLayout: !0,
                ...ee(
                  {
                    Rwf8mnR13: {
                      children: s(E, {
                        children: s(u.p, {
                          style: {
                            '--font-selector':
                              'Q1VTVE9NO0tyZW1saW4gUmVndWxhcg==',
                            '--framer-font-family':
                              '"Kremlin Regular", "Kremlin Regular Placeholder", sans-serif',
                            '--framer-font-size': '30px',
                            '--framer-text-alignment': 'center',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-0988bbea-d0bc-43f0-9171-a26ca77d13ab, rgb(182, 0, 3)))',
                          },
                          children: 'Buy on Uniswap',
                        }),
                      }),
                    },
                  },
                  i,
                  v
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  de = [
    '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
    '.framer-YOCIf.framer-1gz4d3o, .framer-YOCIf .framer-1gz4d3o { display: block; }',
    '.framer-YOCIf.framer-v2o4wn { height: 100px; overflow: hidden; position: relative; text-decoration: none; width: 450px; will-change: var(--framer-will-change-override, transform); }',
    '.framer-YOCIf .framer-vim1dg { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }',
    '.framer-YOCIf.framer-v-7gm07v.framer-v2o4wn { height: 80px; width: 320px; }',
    '.framer-YOCIf[data-border="true"]::after, .framer-YOCIf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  b = j(fe, de, 'framer-YOCIf'),
  be = b;
b.displayName = 'big buy button';
b.defaultProps = { height: 100, width: 450 };
k(b, {
  variant: {
    options: ['DGEBFeyzT', 'Rwf8mnR13'],
    optionTitles: ['big', 'smaller'],
    title: 'Variant',
    type: p.Enum,
  },
  iNbkgQyTX: { title: 'Link', type: p.Link },
  yb8uI6K95: {
    defaultValue: 'Buy on Uniswap',
    displayTextArea: !1,
    title: 'Button text',
    type: p.String,
  },
});
q(
  b,
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
T.loadFonts(['CUSTOM;Kremlin Regular']);
var Ve = [
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
  Ee = [
    '.framer-mecxp .framer-styles-preset-1wzs4f3:not(.rich-text-wrapper), .framer-mecxp .framer-styles-preset-1wzs4f3.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-mecxp .framer-styles-preset-1wzs4f3:not(.rich-text-wrapper), .framer-mecxp .framer-styles-preset-1wzs4f3.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-mecxp .framer-styles-preset-1wzs4f3:not(.rich-text-wrapper), .framer-mecxp .framer-styles-preset-1wzs4f3.rich-text-wrapper p { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: #0f2c23; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  ke = 'framer-mecxp';
T.loadFonts(['CUSTOM;Kremlin Regular']);
var Ie = [
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
  Le = [
    '.framer-90ROt .framer-styles-preset-gm2glu:not(.rich-text-wrapper), .framer-90ROt .framer-styles-preset-gm2glu.rich-text-wrapper h1 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 140px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 120px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #f8ffe8; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 0px) { .framer-90ROt .framer-styles-preset-gm2glu:not(.rich-text-wrapper), .framer-90ROt .framer-styles-preset-gm2glu.rich-text-wrapper h1 { --framer-font-family: "Kremlin Regular", "Kremlin Regular Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 112px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 90px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #f8ffe8; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Fe = 'framer-90ROt';
export {
  K as a,
  be as b,
  Ve as c,
  Ee as d,
  ke as e,
  Ie as f,
  Le as g,
  Fe as h,
};
//# sourceMappingURL=chunk-JDZQO7JY.mjs.map

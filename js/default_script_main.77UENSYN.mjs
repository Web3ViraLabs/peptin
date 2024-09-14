import {
  I as R,
  Ia as M,
  J as _,
  K as i,
  L as v,
  M as b,
  N as E,
  O as F,
  R as k,
  V as P,
  X as S,
  ba as w,
  e as o,
  ea as I,
  h as f,
  ka as D,
  ma as O,
  xa as H,
} from './chunk-KS6JXC2O.mjs';
import { c as t } from './chunk-ELYU6EKT.mjs';
var C = 'default' in _ ? R : _,
  m = {},
  B = C;
m.createRoot = B.createRoot;
m.hydrateRoot = B.hydrateRoot;
var u = m.createRoot,
  x = m.hydrateRoot;
var p = {
    augiA20Il: {
      elements: {
        B2nUNr_PH: 'roadmap',
        cJTvuGgks: 'how-to-buy',
        fY1i5DyBD: 'hero',
        gNsm22jQM: 'faq',
        M8l5gH3jw: 'tokenomics',
        nvL53Xnap: 'features',
        pyD_KHTvn: 'footer',
        rPEgAqoBb: 'about',
      },
      page: i(() =>
        import('./vw6VN3ijGeVsRz7HundVjZy_OyeGxEX8s0t91ggvIvU.QTBY7H2L.mjs')
      ),
      path: '/',
    },
    yAwDOL9_Q: {
      elements: {},
      page: i(() =>
        import('./wcLW72Ma153n1NhRAtNcH28SiTzwpp2ZqFLa7nLxKNk.GFK63OPR.mjs')
      ),
      path: '/404',
    },
  },
  V = [{ code: 'en', id: 'default', name: 'English', slug: '' }];
async function z({ routeId: e, pathVariables: a, localeId: n }) {
  await p[e].page.preload();
  let s = o(O, {
      isWebsite: !0,
      routeId: e,
      pathVariables: a,
      routes: p,
      collectionUtils: {},
      framerSiteId:
        '867075d9637a9e40c1a0b3a8e82e47d52398bb5bb737663acaeef0f4459a470e',
      notFoundPage: i(() =>
        import('./wcLW72Ma153n1NhRAtNcH28SiTzwpp2ZqFLa7nLxKNk.GFK63OPR.mjs')
      ),
      isReducedMotion: void 0,
      localeId: n,
      locales: V,
      preserveQueryParams: void 0,
    }),
    c = o(D, {
      children: s,
      value: { enableAsyncURLUpdates: !1, useGranularSuspense: !1 },
    });
  return o(v, { children: c, value: { routes: {} } });
}
var y = typeof document < 'u';
y &&
  ((t.__framer_importFromPackage = (e, a) => () =>
    o(P, {
      error: 'Package component not supported: "' + a + '" in "' + e + '"',
    })),
  (t.process = {
    ...t.process,
    env: { ...(t.process ? t.process.env : void 0), NODE_ENV: 'production' },
  }),
  S(),
  (t.__framer_events = t.__framer_events || []));
function N() {
  y && t.__framer_events.push(arguments);
}
function A(e) {
  y &&
    (document.readyState === 'interactive' || document.readyState === 'complete'
      ? e()
      : document.addEventListener('readystatechange', () => {
          document.readyState === 'interactive' && e();
        }));
}
A(async function () {
  try {
    let h = function (r, L) {
        let l = L?.componentStack;
        console.warn(
          'Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.',
          r,
          l
        ),
          !(Math.random() > 0.01) &&
            N('published_site_load_recoverable_error', {
              message: String(r),
              componentStack: l,
              stack: l
                ? void 0
                : r instanceof Error && typeof r.stack == 'string'
                ? r.stack
                : null,
            });
      },
      e = document.getElementById('main'),
      a,
      n,
      s,
      c,
      d = !1;
    if ('framerHydrateV2' in e.dataset) {
      let r = JSON.parse(e.dataset.framerHydrateV2);
      (a = r.routeId),
        (n = r.localeId),
        (s = r.pathVariables),
        (c = r.breakpoints),
        (d = !0);
    } else {
      let r = k(p, decodeURIComponent(location.pathname), !0, V);
      (a = r.routeId), (n = r.localeId), (s = r.pathVariables);
    }
    let g = await z({ routeId: a, localeId: n, pathVariables: s });
    d
      ? (M('framer-rewrite-breakpoints', () => {
          H(c), t.__framer_onRewriteBreakpoints?.(c);
        }),
        f(() => {
          b(), F(), E(), x(e, g, { onRecoverableError: h });
        }))
      : u(e, { onRecoverableError: h }).render(g);
  } catch (e) {
    throw (
      (N('published_site_load_error', {
        message: String(e),
        stack:
          e instanceof Error && typeof e.stack == 'string' ? e.stack : null,
      }),
      e)
    );
  }
});
A(async function () {
  let { default: e } = await import('./__framer-badge.QOAT2SFM.mjs'),
    a = w(I);
  f(() => {
    u(document.getElementById('__framer-badge-container')).render(
      o(
        a,
        {
          className: '__framer-badge',
          __framer__threshold: 0.5,
          __framer__animateOnce: !0,
          __framer__opacity: 0,
          __framer__targetOpacity: 1,
          __framer__rotate: 0,
          __framer__x: 0,
          __framer__y: 10,
          __framer__scale: 1,
          __framer__transition: {
            type: 'spring',
            ease: [0.44, 0, 0.56, 1],
            duration: 0.3,
            delay: 1,
            stiffness: 350,
            damping: 40,
            mass: 1.5,
          },
          __framer__rotateX: 0,
          __framer__rotateY: 0,
          __framer__perspective: 1200,
        },
        o(e)
      )
    );
  });
});
export { z as getPageRoot };
//# sourceMappingURL=default_script_main.77UENSYN.mjs.map

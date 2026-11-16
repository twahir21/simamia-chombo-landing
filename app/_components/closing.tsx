import { Cta } from "./motion-ui";
import { Icon, Logo, LOGIN_URL, NAV_LINKS, REGISTER_URL } from "./ui";

export function FinalCta() {
  return (
    <section aria-labelledby="anza" className="bg-canvas-2 px-3 pb-6 sm:px-5 sm:pb-10">
      <div data-reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-night px-6 py-16 text-center text-white sm:px-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div data-parallax="-0.15" className="absolute -top-40 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(15_157_138/0.45),transparent)]" />
          <div className="bg-grid absolute inset-0 opacity-40 invert" />
        </div>
        <div className="relative">
          <h2 id="anza" className="mx-auto max-w-3xl font-display text-[2.1rem] font-extrabold leading-[1.06] tracking-tight text-balance sm:text-5xl">
            Weka daftari pembeni. Simamia vyombo vyako leo.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/70">
            Fungua akaunti ya Boss, sajili chombo chako cha kwanza na funga mkataba ndani ya dakika chache.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Cta href={REGISTER_URL} variant="light">
              Fungua Akaunti <Icon.Arrow />
            </Cta>
            <Cta href={LOGIN_URL} variant="ghost-light">
              Tayari una akaunti? Ingia
            </Cta>
          </div>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><Icon.Android className="size-4" /> Android</span>
            <span className="flex items-center gap-1.5"><Icon.Globe className="size-4" /> Kivinjari (web)</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-canvas-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
            App ya kusimamia pikipiki, bajaji na guta zinazotolewa kwa mikataba ya malipo ya awamu.
          </p>
        </div>
        <nav aria-label="Sehemu za ukurasa">
          <p className="text-sm font-semibold">Ukurasa</p>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-brand-dark">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Akaunti">
          <p className="text-sm font-semibold">Akaunti</p>
          <ul className="mt-3 space-y-2 text-[15px] text-muted">
            <li><a href={REGISTER_URL} className="hover:text-brand-dark">Fungua akaunti</a></li>
            <li><a href={LOGIN_URL} className="hover:text-brand-dark">Ingia</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted">© 2026 Simamia. Haki zote zimehifadhiwa.</p>
      </div>
    </footer>
  );
}

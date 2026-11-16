import { Cta } from "./motion-ui";
import { DemoNote, Icon, REGISTER_URL, StatusBadge, type Status } from "./ui";

const week = [
  { d: "Jt", v: 62 },
  { d: "Jn", v: 78 },
  { d: "Jtn", v: 55 },
  { d: "Al", v: 88 },
  { d: "Ij", v: 70 },
  { d: "Jm", v: 96 },
  { d: "Jp", v: 40 },
];

const contracts: { name: string; vehicle: string; plate: string; paid: number; status: Status; short?: string }[] = [
  { name: "Juma Hassan", vehicle: "Pikipiki", plate: "MC 482 DKT", paid: 72, status: "ok", short: "Kwa wakati" },
  { name: "Neema Mollel", vehicle: "Bajaji", plate: "T 915 DFR", paid: 41, status: "late" },
  { name: "Baraka Mushi", vehicle: "Pikipiki", plate: "MC 117 CZX", paid: 18, status: "risk" },
  { name: "Rehema Ally", vehicle: "Guta", plate: "MC 903 EAB", paid: 100, status: "done", short: "Amemaliza" },
];

const sideNav = [
  { label: "Nyumbani", icon: Icon.Home, active: true },
  { label: "Vyombo", icon: Icon.Bike },
  { label: "Wateja", icon: Icon.Users },
  { label: "Mikataba", icon: Icon.Doc },
  { label: "Malipo", icon: Icon.Wallet },
];

function Stat({ label, value, prefix, sub, accent }: { label: string; value: number; prefix?: string; sub: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-line bg-white p-3 sm:p-3.5">
      <p className="text-[11px] font-medium text-muted">{label}</p>
      <p className={`mt-1 font-display text-lg font-bold tabular-nums sm:text-xl ${accent ? "text-unpaid" : "text-ink"}`}>
        {prefix && <span className="mr-1 text-xs font-semibold text-muted">{prefix}</span>}
        <span data-hero-count={value}>{value.toLocaleString("en-US")}</span>
      </p>
      <p className="mt-0.5 truncate text-[10.5px] text-muted">{sub}</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div
      role="img"
      aria-label="Mfano wa dashibodi ya Simamia Chombo: vyombo 24, mikataba hai 19, makusanyo ya wiki na orodha ya mikataba pamoja na hali za malipo."
      className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-(--shadow-float) sm:rounded-[20px]"
    >
      {/* Window bar */}
      <div className="flex items-center gap-3 border-b border-line bg-canvas-2 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#e5e9e7]" />
          <span className="size-2.5 rounded-full bg-[#e5e9e7]" />
          <span className="size-2.5 rounded-full bg-[#e5e9e7]" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-muted ring-1 ring-line">
          <Icon.Lock className="size-3" />
          chombo-app.simamia.co.tz
        </div>
        <span className="w-12" aria-hidden="true" />
      </div>

      <div className="grid md:grid-cols-[168px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r border-line bg-canvas-2/60 p-3 md:block">
          <ul className="space-y-0.5">
            {sideNav.map(({ label, icon: I, active }) => (
              <li
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] ${
                  active ? "bg-white font-semibold text-ink shadow-sm ring-1 ring-line" : "text-muted"
                }`}
              >
                <I className={`size-4 ${active ? "text-brand" : ""}`} />
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg bg-brand-light p-3">
            <p className="text-[11px] font-semibold text-brand-dark">Namba za malipo</p>
            <p className="mt-1 text-[10.5px] leading-snug text-brand-dark/80">Airtel Money na NMB zinaonekana kwenye kila mkataba</p>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 p-3.5 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] text-muted">Habari, Boss</p>
              <p className="font-display text-base font-bold sm:text-lg">Muhtasari wa biashara</p>
            </div>
            <span className="hidden rounded-full bg-brand-light px-2.5 py-1 text-[11px] font-semibold text-brand-dark sm:inline">
              Wiki hii
            </span>
          </div>

          <div className="mt-3.5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            <Stat label="Jumla ya vyombo" value={24} sub="Pikipiki 14 · Bajaji 7 · Guta 3" />
            <Stat label="Mikataba hai" value={19} sub="Wateja 19 wanalipa awamu" />
            <Stat label="Malipo ya wiki" prefix="TSh" value={1240000} sub="Miamala 86 imerekodiwa" />
            <Stat label="Madeni yaliyochelewa" prefix="TSh" value={860000} sub="Wateja 5 wamechelewa" accent />
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.55fr_1fr]">
            {/* Contracts */}
            <div className="rounded-xl border border-line">
              <div className="flex items-center justify-between border-b border-line px-3.5 py-2.5">
                <p className="text-[12.5px] font-semibold">Mikataba</p>
                <p className="text-[11px] text-muted">Imelipwa</p>
              </div>
              <ul>
                {contracts.map((c) => (
                  <li data-hero-row key={c.plate} className="flex items-center gap-3 border-b border-line px-3.5 py-2.5 last:border-0">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-semibold">{c.name}</p>
                      <p className="truncate font-mono text-[10.5px] text-muted">
                        {c.vehicle} · {c.plate}
                      </p>
                    </div>
                    <div className="hidden w-24 sm:block">
                      <div className="h-1.5 overflow-hidden rounded-full bg-canvas-2 ring-1 ring-line">
                        <div
                          data-hero-progress
                          className={`h-full rounded-full ${c.status === "risk" || c.status === "none" ? "bg-unpaid" : c.status === "late" ? "bg-[#d68a1c]" : "bg-brand"}`}
                          style={{ width: `${c.paid}%` }}
                        />
                      </div>
                      <p className="mt-1 text-right font-mono text-[10px] text-muted">{c.paid}%</p>
                    </div>
                    <StatusBadge status={c.status} short={c.short} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly collection */}
            <div className="hidden rounded-xl border border-line p-3.5 sm:block">
              <p className="text-[12.5px] font-semibold">Makusanyo ya siku 7</p>
              <p className="text-[11px] text-muted">TSh elfu, kwa siku</p>
              <div className="mt-3 flex h-28 items-end gap-2" aria-hidden="true">
                {week.map((b, i) => (
                  <div key={b.d} className="flex flex-1 flex-col items-center gap-1.5">
                    <div
                      data-hero-bar
                      className={`w-full rounded-md ${i === 5 ? "bg-brand" : "bg-brand/20"}`}
                      style={{ height: `${b.v}%` }}
                    />
                    <span className="text-[10px] text-muted">{b.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="juu" className="relative isolate overflow-hidden pt-28 sm:pt-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div data-parallax="0.25" className="absolute left-1/2 -top-48 h-136 w-240 -translate-x-1/2 rounded-full bg-[radial-linear(closest-side,rgb(15_157_138/0.18),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-canvas-2" />
      </div>

      <div className="mx-auto max-w-6xl px-5 text-center">
        <p data-hero-item className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-dark shadow-sm sm:text-xs">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          Kwa mabosi wa pikipiki, bajaji na guta
        </p>
        <h1
          data-hero-item
          className="mx-auto mt-6 max-w-4xl font-display text-[2.35rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.4rem]"
        >
          Simamia <span className="text-brand">Vyombo Vyako</span> kwa ukakika na urahisi zaidi.
        </h1>
        <p data-hero-item className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted text-pretty sm:text-lg">
          Simamia vyombo, wateja, mikataba na malipo ya awamu sehemu moja. Jua nani amelipa, nani amechelewa na deni lililobaki
          bila kupiga simu wala kupiga hesabu.
        </p>
        <div data-hero-item className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Cta href={REGISTER_URL}>
            Fungua Akaunti <Icon.Arrow />
          </Cta>
          <Cta href="#jinsi" variant="secondary">
            Ona Inavyofanya Kazi
          </Cta>
        </div>
        <ul data-hero-item className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
          <li className="flex items-center gap-1.5">
            <Icon.Android className="size-4 text-brand-dark" /> Inapatikana kwenye Android
          </li>
          <li className="flex items-center gap-1.5">
            <Icon.Globe className="size-4 text-brand-dark" /> Na kwenye kivinjari (web)
          </li>
        </ul>
      </div>

      {/* Product showcase */}
      <div className="relative mx-auto mt-14 max-w-5xl px-3 pb-16 sm:mt-16 sm:px-5 sm:pb-24">
        <div data-hero-item>
          <Dashboard />
        </div>

        <div
          data-hero-float
          aria-hidden="true"
          className="absolute -left-2 bottom-6 hidden w-64 rounded-2xl border border-line bg-white p-3.5 shadow-(--shadow-float) md:block lg:-left-10 lg:bottom-12"
        >
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-ok-bg text-ok">
              <Icon.Check />
            </span>
            <div>
              <p className="text-[12.5px] font-semibold">Malipo yamerekodiwa</p>
              <p className="text-[11px] text-muted">Juma Hassan · Airtel Money</p>
            </div>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-lg bg-canvas-2 px-2.5 py-1.5">
            <span className="font-mono text-[11px] text-muted">CK48H2KL9</span>
            <span className="font-display text-sm font-bold">TSh 10,000</span>
          </div>
        </div>

        <div
          data-hero-float
          aria-hidden="true"
          className="absolute -right-2 top-16 hidden w-60 rounded-2xl border border-unpaid/15 bg-white p-3.5 shadow-(--shadow-float) md:block lg:-right-10"
        >
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-unpaid-bg text-unpaid">
              <Icon.Alert className="size-3.5" />
            </span>
            <p className="text-[12.5px] font-semibold">Baraka Mushi yuko hatari</p>
          </div>
          <p className="mt-2 text-[11px] leading-snug text-muted">Siku 8 hajalipa. Boss anaweza kuamua kuchukua chombo.</p>
        </div>

        <DemoNote className="mt-4 text-center" />
      </div>
    </section>
  );
}

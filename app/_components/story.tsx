import { Icon, SectionHeading, StatusBadge, type Status } from "./ui";

const benefits = [
  "Kujua nani amelipa",
  "Kujua nani amechelewa",
  "Kujua deni lililobaki",
  "Kufuatilia mikataba",
  "Kutunza taarifa za wateja na wadhamini",
  "Kurekodi malipo",
  "Kudhibiti wafanyakazi",
  "Kujua wakati wa kuchukua chombo",
];

export function Benefits() {
  return (
    <section aria-labelledby="faida" className="bg-canvas-2 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="faida" data-reveal className="text-center text-sm font-semibold text-muted">
          Ukiwa na Simamia Chombo, unapata uwezo wa:
        </h2>
        <ul data-stagger className="mt-6 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <li
              key={b}
              data-stagger-item
              className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-[15px] font-medium shadow-[var(--shadow-card)]"
            >
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-light text-brand-dark">
                <Icon.Check className="size-3.5" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const notebook = [
  { text: "Juma 10,000 — jumanne au jumatano?", strike: false },
  { text: "Neema alisema atalipa ijumaa…", strike: true },
  { text: "Baraka ?? simu haipatikani", strike: false },
  { text: "Deni la Neema = 1,140,000 − ??", strike: true },
  { text: "Mdhamini wa Baraka — namba iko wapi?", strike: false },
];

const resolved: { name: string; plate: string; detail: string; status: Status; short?: string }[] = [
  { name: "Juma Hassan", plate: "MC 482 DKT", detail: "Alilipa TSh 10,000 · Jumanne, 08:14", status: "ok", short: "Kwa wakati" },
  { name: "Neema Mollel", plate: "T 915 DFR", detail: "Vipindi 2 vimekosa · TSh 40,000 vimechelewa", status: "late" },
  { name: "Baraka Mushi", plate: "MC 117 CZX", detail: "Siku 8 bila malipo · mdhamini: 0754 *** 210", status: "risk" },
];

export function Problem() {
  return (
    <section aria-labelledby="tatizo" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Daftari dhidi ya Simamia Chombo"
          title={<span id="tatizo">Daftari halikuambii nani amechelewa. Simamia Chombo inakuambia.</span>}
          lead="Wateja wale wale watatu. Upande mmoja ni kumbukumbu za kalamu na simu zisizopokelewa. Upande mwingine ni hesabu sahihi, kila siku."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-2 lg:gap-8">
          {/* Notebook */}
          <div data-reveal className="relative">
            <div className="ruled relative h-full rotate-[-0.6deg] rounded-2xl border border-paper-line px-5 pb-8 pl-14 pt-5 shadow-[var(--shadow-card)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9b8b6a]">Leo · kwa daftari</p>
              <ul className="mt-3 font-hand text-[1.45rem] leading-[2.25rem] text-[#3b3a5a] sm:text-[1.6rem]">
                {notebook.map((n) => (
                  <li key={n.text} className="relative w-fit">
                    {n.text}
                    {n.strike && (
                      <span
                        data-strike
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-1/2 h-[2px] -rotate-1 rounded bg-[#c2410c]/70"
                      />
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[#7a6d55]">Unapiga simu, unahesabu kwa mkono, unasahau.</p>
            </div>
          </div>

          {/* App */}
          <div data-reveal className="relative overflow-hidden rounded-2xl bg-night p-5 text-white shadow-[var(--shadow-float)] sm:p-6">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(15_157_138/0.35),transparent)]" aria-hidden="true" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.14em] text-brand-mint">Leo · kwa Simamia Chombo</p>
            <ul data-stagger className="relative mt-4 space-y-2.5">
              {resolved.map((r) => (
                <li key={r.plate} data-stagger-item className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold">
                      {r.name} <span className="ml-1 font-mono text-xs font-normal text-white/45">{r.plate}</span>
                    </p>
                    <StatusBadge status={r.status} short={r.short} />
                  </div>
                  <p className="mt-1.5 text-sm text-white/60">{r.detail}</p>
                </li>
              ))}
            </ul>
            <div className="relative mt-4 flex items-center justify-between rounded-xl bg-brand/15 px-4 py-3 ring-1 ring-brand/30">
              <p className="text-sm text-white/75">Deni lililobaki la Neema</p>
              <p className="font-display text-lg font-bold">
                TSh <span data-count="1140000">1,140,000</span>
              </p>
            </div>
            <p className="relative mt-4 text-xs text-white/40">Mfano · takwimu ni za maonyesho tu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

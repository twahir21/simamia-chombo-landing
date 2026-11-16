const APP_URL = "https://chombo-app.simamia.co.tz";

const features = [
  {
    title: "Vyombo",
    body: "Sajili pikipiki, bajaji na guta kwa chassis na plate number. Ona kipi kinapatikana na kipi kiko kwa mteja.",
  },
  {
    title: "Wateja na wadhamini",
    body: "Hifadhi jina, simu na mdhamini wa kila mteja. Piga simu moja kwa moja kutoka kwenye app.",
  },
  {
    title: "Mikataba",
    body: "Weka malipo ya kila siku, wiki au mwezi. App inakuonyesha idadi ya malipo na tarehe ya kumaliza kabla hujahifadhi.",
  },
  {
    title: "Malipo",
    body: "Rekodi Airtel Money, NMB au fedha taslimu pamoja na namba ya muamala. Historia yote inabaki.",
  },
  {
    title: "Madeni",
    body: "Jua kiasi kilichochelewa, vipindi vilivyokosa na deni lililobaki kwa kila mteja, bila kupiga hesabu.",
  },
  {
    title: "Ukumbusho",
    body: "Tuma SMS ya ukumbusho yenye jina, kiasi, tarehe na namba ya kulipia kwa kubofya mara moja.",
  },
];

const steps = [
  {
    n: "01",
    title: "Fungua akaunti ya Boss",
    body: "Jisajili kwa barua pepe, unda biashara yako na weka namba zako za kupokea malipo.",
  },
  {
    n: "02",
    title: "Sajili vyombo na wateja",
    body: "Ingiza vyombo vyako na wateja wako. Waalike wafanyakazi kwa code ya mara moja.",
  },
  {
    n: "03",
    title: "Funga mkataba, pokea malipo",
    body: "Kila malipo yanapunguza deni. Mkataba ukilipwa wote, chombo kinakuwa cha mteja kiotomatiki.",
  },
];

const debtors = [
  { name: "Juma Hassan", plate: "MC 482 DKT", status: "Analipa", tone: "ok", owed: "320,000" },
  { name: "Neema Mollel", plate: "T 915 DFR", status: "Amechelewa", tone: "late", owed: "1,140,000" },
  { name: "Baraka Mushi", plate: "MC 117 CZX", status: "Hatari", tone: "risk", owed: "2,450,000" },
] as const;

const toneClass = {
  ok: "bg-ok-light text-ok",
  late: "bg-late-light text-late",
  risk: "bg-risk-light text-risk",
} as const;

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-brand text-white">
        <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
          <circle cx="6" cy="16" r="3.25" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="16" r="3.25" stroke="currentColor" strokeWidth="2" />
          <path d="M6 16l4-7h5l3 7M13 9l-1-3h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight">
        Simamia <span className="text-brand">Chombo</span>
      </span>
    </span>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand-mint/40 blur-3xl" aria-hidden="true" />
      <div className="rounded-[2.5rem] border-[10px] border-brand-ink bg-white shadow-2xl shadow-brand-deep/30">
        <div className="rounded-t-[1.75rem] bg-brand-dark px-5 pb-6 pt-5 text-white">
          <p className="text-xs text-white/70">Habari, Boss</p>
          <p className="font-display text-lg font-semibold">Muhtasari wa leo</p>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-[11px] text-white/70">Vyombo</p>
              <p className="font-display text-xl font-bold">24</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="text-[11px] text-white/70">Wamechelewa</p>
              <p className="font-display text-xl font-bold text-brand-mint">5</p>
            </div>
            <div className="col-span-2 rounded-xl bg-white p-3 text-ink">
              <p className="text-[11px] text-ink/60">Madeni yaliyobaki</p>
              <p className="font-mono text-lg font-semibold">TSh 18,760,000</p>
            </div>
          </div>
        </div>
        <div className="space-y-2 px-4 pb-6 pt-4">
          <p className="px-1 text-xs font-semibold uppercase tracking-wider text-ink/50">Wateja</p>
          {debtors.map((d) => (
            <div key={d.plate} className="flex items-center justify-between rounded-xl border border-ink/5 bg-surface p-3">
              <div>
                <p className="text-sm font-semibold">{d.name}</p>
                <p className="font-mono text-[11px] text-ink/50">{d.plate}</p>
              </div>
              <div className="text-right">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${toneClass[d.tone]}`}>{d.status}</span>
                <p className="mt-1 font-mono text-[11px] text-ink/70">{d.owed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-20 border-b border-ink/5 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#" aria-label="Simamia Chombo, mwanzo">
            <Logo />
          </a>
          <div className="hidden items-center gap-8 text-sm text-ink/70 md:flex">
            <a href="#huduma" className="hover:text-brand-dark">Huduma</a>
            <a href="#jinsi" className="hover:text-brand-dark">Jinsi inavyofanya kazi</a>
            <a href="#timu" className="hover:text-brand-dark">Boss na wafanyakazi</a>
          </div>
          <div className="flex items-center gap-2">
            <a href={`${APP_URL}/login`} className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand-dark sm:block">
              Ingia
            </a>
            <a href={`${APP_URL}/register`} className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">
              Anza sasa
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-gradient-to-b from-brand-light to-white" aria-hidden="true" />
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-medium text-brand-dark">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                Kwa mabosi wa pikipiki, bajaji na guta
              </p>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Achana na daftari.
                <br />
                <span className="text-brand">Jua nani amelipa</span> kwa sekunde.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                Simamia Chombo inafuatilia vyombo, wateja, mikataba na malipo yako ya awamu.
                Unaona deni la kila mteja, aliyechelewa, na wakati wa kuchukua chombo, bila kupiga simu wala kupiga hesabu.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`${APP_URL}/register`} className="rounded-full bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark">
                  Fungua akaunti
                </a>
                <a href="#jinsi" className="rounded-full border border-ink/15 bg-white px-6 py-3 font-semibold text-ink hover:border-brand hover:text-brand-dark">
                  Ona inavyofanya kazi
                </a>
              </div>
              <p className="mt-5 text-sm text-ink/50">Inapatikana kwenye Android na kwenye kivinjari (web).</p>
            </div>
            <PhoneMock />
          </div>
        </section>

        {/* Daftari vs Chombo */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Daftari halikuambii nani amechelewa. Simamia Chombo inakuambia.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="ruled rounded-2xl border border-paper-line p-6 pl-16 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-ink/40">Leo, kwa daftari</p>
                <ul className="mt-4 space-y-[0.9rem] text-[15px] leading-[1.15rem] text-ink/75">
                  <li>Juma alilipa jana? Au juzi?</li>
                  <li>Neema amebakiza kiasi gani?</li>
                  <li>Namba ya mdhamini wa Baraka iko wapi?</li>
                  <li>Mfanyakazi aliandika malipo gani?</li>
                  <li>Pikipiki ipi bado inapatikana?</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-brand-ink p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-mint">Kesho, kwa Simamia Chombo</p>
                <ul className="mt-4 space-y-3 text-[15px]">
                  {[
                    "Kila malipo yana tarehe, kiasi na namba ya muamala",
                    "Deni lililobaki linahesabiwa lenyewe",
                    "Wateja na wadhamini wako mahali pamoja",
                    "Kila malipo yanaonyesha nani aliyarekodi",
                    "Vyombo vinavyopatikana vinaonekana mara moja",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <svg viewBox="0 0 20 20" className="mt-0.5 size-5 shrink-0 text-brand-mint" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="huduma" className="scroll-mt-20 bg-brand-light/50 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-dark">Huduma</p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Kila kitu cha biashara yako ya mikataba, mahali pamoja
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-brand/15 bg-brand/15 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <div key={f.title} className="bg-white p-6">
                  <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/65">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Status legend */}
        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Hali ya kila mteja, kwa rangi moja</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">
                App inapiga hesabu ya kiasi kilichotakiwa kulipwa hadi leo, vipindi vilivyokosa na deni lililobaki.
                Mteja akilipa nusu au akikosa, deni linabaki palepale, bila faini.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                { s: "Analipa kwa wakati", c: "bg-ok-light text-ok" },
                { s: "Amechelewa", c: "bg-late-light text-late" },
                { s: "Hajalipa kabisa", c: "bg-risk-light text-risk" },
                { s: "Hatari", c: "bg-risk text-white" },
                { s: "Amemaliza deni", c: "bg-brand-light text-brand-dark" },
              ].map((x) => (
                <li key={x.s} className="flex items-center justify-between rounded-xl border border-ink/5 px-4 py-3">
                  <span className="text-ink/80">{x.s}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${x.c}`}>{x.s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="jinsi" className="scroll-mt-20 bg-brand-ink py-20 text-white">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-mint">Jinsi inavyofanya kazi</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">Anza kwa hatua tatu</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} className="border-t border-white/15 pt-6">
                  <p className="font-display text-5xl font-extrabold text-brand">{s.n}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Roles */}
        <section id="timu" className="scroll-mt-20 bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Wafanyakazi wanasaidia. Boss anabaki na mamlaka.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-brand p-7">
                <h3 className="font-display text-2xl font-bold">Boss</h3>
                <p className="mt-1 text-ink/60">Mmiliki wa vyombo</p>
                <ul className="mt-5 space-y-2.5 text-ink/80">
                  <li>Anaongeza wafanyakazi kwa code ya mara moja</li>
                  <li>Anaweka namba za kupokea malipo</li>
                  <li>Anabadilisha au kufuta malipo na mikataba</li>
                  <li>Anachukua chombo kutoka kwa mteja</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-ink/10 p-7">
                <h3 className="font-display text-2xl font-bold">Mfanyakazi</h3>
                <p className="mt-1 text-ink/60">Ameunganishwa na boss</p>
                <ul className="mt-5 space-y-2.5 text-ink/80">
                  <li>Anasajili wateja na vyombo</li>
                  <li>Anaunda mikataba na kurekodi malipo</li>
                  <li>Anaona madeni na kutuma ukumbusho</li>
                  <li>Hawezi kufuta, kubadilisha malipo wala kuchukua chombo</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-ink/60">
              Data ya biashara yako ni yako peke yako. Hakuna boss mwingine anayeweza kuona vyombo, wateja au malipo yako.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand px-8 py-14 text-center text-white sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Weka daftari pembeni. Simamia vyombo vyako leo.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Fungua akaunti ya Boss, sajili chombo chako cha kwanza na funga mkataba ndani ya dakika chache.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`${APP_URL}/register`} className="rounded-full bg-white px-6 py-3 font-semibold text-brand-dark hover:bg-brand-light">
                Fungua akaunti
              </a>
              <a href={`${APP_URL}/login`} className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Tayari una akaunti? Ingia
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-ink/50 sm:flex-row">
          <Logo />
          <p>© 2026 Simamia. Haki zote zimehifadhiwa.</p>
        </div>
      </footer>
    </div>
  );
}

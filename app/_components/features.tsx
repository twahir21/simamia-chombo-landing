import type { ReactNode } from "react";
import { Cta, HoverCard } from "./motion-ui";
import { Icon, REGISTER_URL, SectionHeading } from "./ui";

function CardHead({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div>
      <span className="grid size-9 place-items-center rounded-lg bg-brand-light text-brand-dark">{icon}</span>
      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{body}</p>
    </div>
  );
}

const card = "rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]";

// Instalment schedule preview: 1 paid, 0 partly paid, -1 missed, null upcoming.
const schedule: (1 | 0 | -1 | null)[] = [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1, null, null, null, null, null, null, null, null, null, null];

function ContractPreview() {
  return (
    <div aria-hidden="true" className="mt-6 rounded-xl border border-line bg-canvas-2 p-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Njia ya kulipa", "Kila siku"],
          ["Kila malipo", "TSh 10,000"],
          ["Jumla ya mkataba", "TSh 2,400,000"],
          ["Tarehe ya kuanza", "2 Nov 2026"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-white p-2.5 ring-1 ring-line">
            <p className="text-[11px] text-muted">{k}</p>
            <p className="mt-0.5 text-sm font-semibold">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-brand-light px-3 py-2.5 text-sm text-brand-dark">
        <span>
          Malipo <b className="font-semibold">240</b> · yataisha <b className="font-semibold">29 Jun 2027</b>
        </span>
        <span className="text-xs">Inaonyeshwa kabla ya kuhifadhi</span>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-1.5" data-stagger>
        {schedule.map((s, i) => (
          <span
            key={i}
            data-stagger-item
            className={`h-6 rounded-[5px] ${
              s === 1 ? "bg-brand" : s === 0 ? "bg-[linear-gradient(90deg,var(--color-brand)_50%,var(--color-brand-light)_50%)]" : s === -1 ? "bg-unpaid/80" : "bg-white ring-1 ring-line"
            }`}
          />
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
        <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-brand" />Imelipwa</span>
        <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-[linear-gradient(90deg,var(--color-brand)_50%,var(--color-brand-light)_50%)]" />Nusu</span>
        <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-unpaid/80" />Imekosa</span>
        <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-white ring-1 ring-line" />Inakuja</span>
      </div>
    </div>
  );
}

function VehiclesPreview() {
  const rows = [
    { label: "Kinapatikana", n: 5, c: "bg-brand-light text-brand-dark" },
    { label: "Kiko kwa mteja", n: 16, c: "bg-late-bg text-late" },
    { label: "Kimekuwa cha mteja", n: 3, c: "bg-ok-bg text-ok" },
  ];
  return (
    <div aria-hidden="true" className="mt-6 space-y-2">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5">
          <span className="text-sm">{r.label}</span>
          <span className={`min-w-9 rounded-md px-2 py-0.5 text-center font-display text-sm font-bold ${r.c}`}>
            <span data-count={r.n}>{r.n}</span>
          </span>
        </div>
      ))}
      <p className="pt-1 font-mono text-[11px] text-muted">Chassis: ME4KC2… · Plate: MC 482 DKT</p>
    </div>
  );
}

function CustomerPreview() {
  return (
    <div aria-hidden="true" className="mt-6 rounded-xl border border-line p-4">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-brand text-sm font-bold text-white">NM</span>
        <div className="min-w-0 flex-1">
          <p className="font-semibold">Neema Mollel</p>
          <p className="font-mono text-xs text-muted">0713 *** 482</p>
        </div>
        <span className="grid size-9 place-items-center rounded-full bg-brand-light text-brand-dark">
          <Icon.Phone />
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-canvas-2 px-3 py-2">
        <div>
          <p className="text-[11px] text-muted">Mdhamini</p>
          <p className="text-sm font-medium">Peter Mollel · 0765 *** 901</p>
        </div>
        <Icon.Phone className="size-4 text-brand-dark" />
      </div>
    </div>
  );
}

function PaymentsPreview() {
  const rows = [
    { m: "Airtel Money", ref: "CK48H2KL9", a: "20,000", by: "Asha" },
    { m: "NMB", ref: "NMB7731042", a: "70,000", by: "Boss" },
    { m: "Fedha taslimu", ref: "—", a: "10,000", by: "Asha" },
  ];
  return (
    <ul aria-hidden="true" className="mt-6 divide-y divide-line rounded-xl border border-line">
      {rows.map((r) => (
        <li key={r.ref + r.m} className="flex items-center justify-between gap-2 px-3 py-2.5">
          <div className="min-w-0">
            <p className="text-sm font-medium">{r.m}</p>
            <p className="truncate font-mono text-[11px] text-muted">
              {r.ref} · amerekodi {r.by}
            </p>
          </div>
          <p className="font-display text-sm font-bold whitespace-nowrap">TSh {r.a}</p>
        </li>
      ))}
    </ul>
  );
}

function ReminderPreview() {
  return (
    <div aria-hidden="true" className="mt-6 rounded-xl bg-canvas-2 p-4">
      <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-white p-3.5 text-[13.5px] leading-relaxed shadow-sm ring-1 ring-line">
        Habari Neema, malipo yako ya <b>TSh 40,000</b> yamechelewa tangu <b>14 Nov</b>. Tafadhali lipa kupitia Airtel Money{" "}
        <span className="font-mono">0712 *** 678</span> (Simamia Motors). Asante.
      </div>
      <div className="mt-3 flex justify-end">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-dark px-3 py-1.5 text-xs font-semibold text-white">
          <Icon.Chat className="size-3.5" /> Tuma ukumbusho
        </span>
      </div>
    </div>
  );
}

const debtFigures = [
  { k: "Kilichotakiwa hadi leo", v: 440000 },
  { k: "Kilicholipwa", v: 400000 },
  { k: "Kilichochelewa", v: 40000, warn: true },
  { k: "Deni lililobaki", v: 2000000 },
];

export function Features() {
  return (
    <section id="huduma" aria-label="Huduma" className="scroll-mt-20 bg-canvas-2 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Huduma"
          title="Kila kitu cha biashara yako ya mikataba, mahali pamoja"
          lead="Kutoka kusajili chombo hadi siku mteja anamaliza deni: kila hatua imerekodiwa, kila hesabu inafanywa na mfumo."
        />

        <div data-stagger className="mt-14 grid gap-4 lg:grid-cols-6">
          <HoverCard className="lg:col-span-4" cardClassName={card}>
            <CardHead
              icon={<Icon.Doc />}
              title="Mikataba ya malipo ya awamu"
              body="Chagua kulipa kila siku, wiki au mwezi. Weka jumla ya mkataba na kiasi cha kila malipo, na mfumo unakuonyesha idadi ya malipo na tarehe ya kumaliza."
            />
            <ContractPreview />
          </HoverCard>

          <HoverCard className="lg:col-span-2" cardClassName={card}>
            <CardHead
              icon={<Icon.Bike />}
              title="Usimamizi wa vyombo"
              body="Sajili pikipiki, bajaji na guta kwa chassis na plate number. Jua kipi kinapatikana na kipi kiko kwa mteja."
            />
            <VehiclesPreview />
          </HoverCard>

          <HoverCard className="lg:col-span-2" cardClassName={card}>
            <CardHead
              icon={<Icon.Users />}
              title="Wateja na wadhamini"
              body="Jina, simu na mdhamini wa kila mteja mahali pamoja. Piga simu moja kwa moja kutoka kwenye app."
            />
            <CustomerPreview />
          </HoverCard>

          <HoverCard className="lg:col-span-2" cardClassName={card}>
            <CardHead
              icon={<Icon.Wallet />}
              title="Ufuatiliaji wa malipo"
              body="Rekodi Airtel Money, NMB au fedha taslimu pamoja na namba ya muamala. Historia yote inabaki."
            />
            <PaymentsPreview />
          </HoverCard>

          <HoverCard className="lg:col-span-2" cardClassName={card}>
            <CardHead
              icon={<Icon.Chat />}
              title="Ujumbe wa ukumbusho"
              body="Tuma SMS yenye jina, kiasi, tarehe na namba ya kulipia kwa kubofya mara moja."
            />
            <ReminderPreview />
          </HoverCard>

          {/* Debt: wide dark band */}
          <HoverCard
            className="lg:col-span-6"
            cardClassName="relative overflow-hidden rounded-2xl bg-night p-6 text-white shadow-[var(--shadow-float)] sm:p-8"
          >
            <div className="pointer-events-none absolute -left-20 -top-32 size-96 rounded-full bg-[radial-gradient(closest-side,rgb(15_157_138/0.3),transparent)]" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center">
              <div>
                <span className="grid size-9 place-items-center rounded-lg bg-white/10 text-brand-mint">
                  <Icon.Alert />
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">Madeni na ucheleweshaji</h3>
                <p className="mt-2 leading-relaxed text-white/65">
                  Mfumo unahesabu kiasi kilichotakiwa hadi leo, kilichochelewa, vipindi vilivyokosa na deni lililobaki. Mteja
                  akilipa nusu au akikosa, deni linabaki palepale, bila faini.
                </p>
              </div>
              <div aria-hidden="true">
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {debtFigures.map((f) => (
                    <div key={f.k} className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5">
                      <p className="text-[11px] leading-tight text-white/55">{f.k}</p>
                      <p className={`mt-2 font-display text-lg font-bold tabular-nums ${f.warn ? "text-[#ffb4a8]" : "text-white"}`}>
                        <span className="mr-1 text-[11px] font-medium text-white/45">TSh</span>
                        <span data-count={f.v}>{f.v.toLocaleString("en-US")}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-white/55">
                    <span>Vipindi vilivyokosa: 4</span>
                    <span>Malipo yajayo: 17 Nov</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div data-progress className="h-full w-[17%] rounded-full bg-brand-mint" />
                  </div>
                  <p className="mt-2 text-xs text-white/40">Mfano · takwimu ni za maonyesho tu</p>
                </div>
              </div>
            </div>
          </HoverCard>
        </div>

        <div data-reveal className="mt-12 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <p className="text-muted">Tayari kuweka vyombo vyako kwenye mfumo?</p>
          <Cta href={REGISTER_URL}>
            Fungua Akaunti <Icon.Arrow />
          </Cta>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { Icon, SectionHeading } from "./ui";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white px-3 py-2 ring-1 ring-line">
      <p className="text-[10.5px] text-muted">{label}</p>
      <p className="text-[13px] font-medium">{value}</p>
    </div>
  );
}

const previews: ReactNode[] = [
  <div key="1" className="space-y-2">
    <Field label="Jina la biashara" value="Simamia Motors" />
    <Field label="Airtel Money" value="0712 *** 678 · Simamia Motors" />
    <Field label="NMB" value="2041 **** 118 · Simamia Motors" />
  </div>,
  <div key="2" className="space-y-2">
    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-line">
      <Icon.Bike className="size-4 text-brand-dark" />
      <p className="text-[13px] font-medium">Bajaji · T 915 DFR</p>
      <span className="ml-auto rounded-full bg-brand-light px-2 py-0.5 text-[10.5px] font-semibold text-brand-dark">Kinapatikana</span>
    </div>
    <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-line">
      <Icon.Users className="size-4 text-brand-dark" />
      <p className="text-[13px] font-medium">Neema Mollel</p>
      <span className="ml-auto text-[10.5px] text-muted">+ mdhamini</span>
    </div>
    <div className="flex items-center justify-between rounded-lg border border-dashed border-brand/40 bg-brand-light/60 px-3 py-2">
      <p className="text-[12px] text-brand-dark">Code ya mfanyakazi</p>
      <p className="font-mono text-[13px] font-semibold tracking-wider text-brand-dark">K7P-29Q</p>
    </div>
  </div>,
  <div key="3" className="space-y-2.5">
    <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2 ring-1 ring-line">
      <p className="text-[13px] font-medium">Malipo · Airtel Money</p>
      <p className="font-display text-[13px] font-bold">TSh 40,000</p>
    </div>
    <div className="rounded-lg bg-white px-3 py-2.5 ring-1 ring-line">
      <div className="flex justify-between text-[11px] text-muted">
        <span>Imelipwa</span>
        <span>100%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-canvas-2">
        <div data-progress className="h-full w-full rounded-full bg-brand" />
      </div>
    </div>
    <div className="flex items-center gap-2 rounded-lg bg-ok-bg px-3 py-2 text-ok">
      <Icon.Check />
      <p className="text-[12.5px] font-semibold">Chombo kimekuwa cha mteja</p>
    </div>
  </div>,
];

const steps = [
  {
    title: "Fungua akaunti ya Boss",
    body: "Jisajili kwa barua pepe, unda biashara yako na weka namba zako za kupokea malipo.",
  },
  {
    title: "Sajili vyombo, wateja na wafanyakazi",
    body: "Ingiza vyombo na wateja wako. Waalike wafanyakazi kwa code inayotumika mara moja tu.",
  },
  {
    title: "Funga mkataba, pokea malipo",
    body: "Kila malipo yanapunguza deni. Mkataba ukilipwa wote, chombo kinakuwa cha mteja kiotomatiki.",
  },
];

export function Steps() {
  return (
    <section id="jinsi" aria-label="Jinsi inavyofanya kazi" className="relative scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Jinsi inavyofanya kazi"
          title="Anza kwa hatua tatu"
          lead="Hakuna mafunzo marefu. Ukiweza kutumia simu janja, unaweza kutumia Simamia Chombo."
          center
        />

        <div className="relative mt-16">
          {/* Progress line: horizontal on desktop, vertical on mobile */}
          <div className="absolute left-[8.5%] right-[8.5%] top-5 hidden h-px bg-line lg:block" aria-hidden="true">
            <div data-draw="x" className="h-full w-full bg-brand" />
          </div>
          <div className="absolute bottom-0 left-5 top-5 w-px bg-line lg:hidden" aria-hidden="true">
            <div data-draw="y" className="h-full w-full bg-brand" />
          </div>

          <ol className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal className="relative pl-16 lg:pl-0">
                <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full bg-brand-dark font-display text-sm font-bold text-white ring-8 ring-white lg:relative lg:mx-auto">
                  {i + 1}
                </span>
                <div className="lg:mt-6 lg:text-center">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted lg:mx-auto lg:max-w-xs">{s.body}</p>
                </div>
                <div aria-hidden="true" className="mt-6 rounded-2xl border border-line bg-canvas-2 p-3.5 shadow-[var(--shadow-card)]">
                  {previews[i]}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

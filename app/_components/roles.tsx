import { Icon, SectionHeading } from "./ui";

const rows: { action: string; staff: boolean }[] = [
  { action: "Kusajili wateja na vyombo", staff: true },
  { action: "Kuunda mikataba", staff: true },
  { action: "Kurekodi malipo", staff: true },
  { action: "Kuona madeni na kutuma ukumbusho", staff: true },
  { action: "Kuongeza wafanyakazi", staff: false },
  { action: "Kuweka namba za kupokea malipo", staff: false },
  { action: "Kubadilisha au kufuta malipo na mikataba", staff: false },
  { action: "Kuchukua chombo kutoka kwa mteja", staff: false },
];

function Mark({ yes, label }: { yes: boolean; label: string }) {
  return (
    <span
      className={`mx-auto grid size-7 place-items-center rounded-full ${yes ? "bg-brand-light text-brand-dark" : "bg-canvas-2 text-muted/70"}`}
    >
      {yes ? <Icon.Check /> : <Icon.X className="size-3.5" />}
      <span className="sr-only">{`${label}: ${yes ? "ndiyo" : "hapana"}`}</span>
    </span>
  );
}

export function Roles() {
  return (
    <section id="timu" aria-label="Boss na wafanyakazi" className="scroll-mt-20 bg-canvas-2 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Boss na wafanyakazi"
            title="Wafanyakazi wanasaidia. Boss anabaki na mamlaka."
            lead="Mfanyakazi anaunganishwa na biashara yako kwa code ya mara moja. Anaweza kufanya kazi za kila siku, lakini vitendo nyeti vinabaki mikononi mwako."
          />
          <div data-reveal className="mt-8 flex gap-3 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-light text-brand-dark">
              <Icon.Lock />
            </span>
            <div>
              <p className="font-semibold">Data yako ni yako peke yako</p>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">
                Kila biashara imetengwa. Hakuna boss mwingine anayeweza kuona vyombo, wateja au malipo yako.
              </p>
            </div>
          </div>
        </div>

        <div data-reveal className="overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
          <table className="w-full text-left">
            <caption className="sr-only">Ruhusa za Boss na Mfanyakazi</caption>
            <thead>
              <tr className="border-b border-line bg-canvas-2/70 text-sm">
                <th scope="col" className="px-4 py-3.5 font-medium text-muted sm:px-5">Kitendo</th>
                <th scope="col" className="w-20 px-2 py-3.5 text-center font-display font-semibold sm:w-28">Boss</th>
                <th scope="col" className="w-24 px-2 py-3.5 text-center font-display font-semibold sm:w-28">Mfanyakazi</th>
              </tr>
            </thead>
            <tbody data-stagger>
              {rows.map((r) => (
                <tr key={r.action} data-stagger-item className="border-b border-line last:border-0">
                  <th scope="row" className="px-4 py-3.5 text-[15px] font-normal sm:px-5">{r.action}</th>
                  <td className="px-2 py-3.5"><Mark yes label="Boss" /></td>
                  <td className="px-2 py-3.5"><Mark yes={r.staff} label="Mfanyakazi" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

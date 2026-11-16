import { Eyebrow, STATUS, type Status } from "./ui";

type Cell = 1 | 0 | -1 | null; // paid, partly paid, missed, upcoming

const items: { status: Status; rule: string; meaning: string; cells: Cell[] }[] = [
  {
    status: "ok",
    rule: "Hana malipo yaliyochelewa.",
    meaning: "Kila kipindi kilichopita kimelipwa. Hakuna cha kufanya.",
    cells: [1, 1, 1, 1, 1, 1, 1, 1, null, null, null, null],
  },
  {
    status: "late",
    rule: "Ana kiasi kilichochelewa, ingawa amewahi kulipa.",
    meaning: "Mtumie ukumbusho au mpigie simu kabla deni halijakua.",
    cells: [1, 1, 1, 0, 1, -1, -1, 1, null, null, null, null],
  },
  {
    status: "none",
    rule: "Hajalipa chochote, na kipindi kimoja au zaidi kimepita.",
    meaning: "Mkataba umeanza lakini hakuna malipo. Fuatilia mapema.",
    cells: [-1, -1, -1, null, null, null, null, null, null, null, null, null],
  },
  {
    status: "risk",
    rule: "Vipindi vilivyokosa vimefika kikomo: siku 7, wiki 3 au miezi 2.",
    meaning: "Boss anaona mara moja, na anaweza kuamua kuchukua chombo.",
    cells: [1, 1, -1, -1, -1, -1, -1, -1, -1, null, null, null],
  },
  {
    status: "done",
    rule: "Amelipa jumla yote ya mkataba.",
    meaning: "Mkataba unakamilika wenyewe na chombo kinakuwa cha mteja.",
    cells: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
];

const cellClass = (c: Cell) =>
  c === 1
    ? "bg-brand"
    : c === 0
      ? "bg-[linear-gradient(90deg,var(--color-brand)_50%,rgb(255_255_255/0.12)_50%)]"
      : c === -1
        ? "bg-[#f0786a]"
        : "bg-white/[0.06] ring-1 ring-white/10";

export function Statuses() {
  return (
    <section
      id="hali"
      data-hpin
      aria-labelledby="hali-kichwa"
      className="relative scroll-mt-16 overflow-hidden bg-night py-24 text-white sm:py-28 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/3 top-0 h-80 w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgb(15_157_138/0.22),transparent)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <div data-reveal className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow tone="light">Ufuatiliaji wa hali ya wateja</Eyebrow>
            <h2 id="hali-kichwa" className="mt-3 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-balance sm:text-[2.6rem]">
              Hali tano. Rangi tano. Unajua cha kufanya.
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-white/65 text-pretty">
            Kila mteja anapewa hali kulingana na malipo yake halisi. Huna haja ya kupiga hesabu au kukumbuka nani alisema nini.
          </p>
        </div>
      </div>

      {/* Mobile/tablet: swipeable row. Desktop with motion: pinned, moved by GSAP. */}
      <div
        data-hwrap
        className="no-scrollbar relative mt-12 overflow-x-auto overscroll-x-contain"
        data-lenis-prevent-horizontal
      >
        <ol
          data-htrack
          className="flex w-max snap-x snap-mandatory gap-4 px-5 pb-2 lg:px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]"
        >
          {items.map((it, i) => {
            const s = STATUS[it.status];
            return (
              <li
                key={it.status}
                className="w-[82vw] max-w-[340px] shrink-0 snap-start rounded-2xl border border-white/10 bg-night-2 p-6 sm:w-[340px] lg:w-[360px] lg:max-w-none"
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${s.className}`}>{s.label}</span>
                  <span className="font-mono text-xs text-white/35">0{i + 1}</span>
                </div>
                <div className="mt-6 grid grid-cols-12 gap-1" aria-hidden="true">
                  {it.cells.map((c, j) => (
                    <span key={j} className={`h-7 rounded ${cellClass(c)}`} />
                  ))}
                </div>
                <p className="mt-6 font-display text-lg font-semibold leading-snug">{it.rule}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{it.meaning}</p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="relative mx-auto mt-8 flex w-full max-w-6xl flex-wrap gap-x-5 gap-y-2 px-5 text-xs text-white/50" aria-hidden="true">
        <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-brand" />Kipindi kimelipwa</span>
        <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-[#f0786a]" />Kipindi kimekosa</span>
        <span className="flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-white/10" />Kipindi kinakuja</span>
        <span className="lg:hidden">· Telezesha kuona zote</span>
      </div>
    </section>
  );
}

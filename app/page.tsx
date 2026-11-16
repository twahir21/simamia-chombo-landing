import { FinalCta, Footer } from "./_components/closing";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { Nav } from "./_components/nav";
import { Roles } from "./_components/roles";
import { ScrollFx } from "./_components/scroll-fx";
import { Statuses } from "./_components/statuses";
import { Steps } from "./_components/steps";
import { Benefits, Problem } from "./_components/story";

export default function Home() {
  return (
    <>
      <a
        href="#maudhui"
        className="sr-only z-60 rounded-full bg-brand-dark px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Ruka hadi maudhui
      </a>
      <Nav />
      <main id="maudhui" className="flex-1">
        <Hero />
        <Benefits />
        <Problem />
        <Features />
        <Statuses />
        <Steps />
        <Roles />
        <FinalCta />
      </main>
      <Footer />
      <ScrollFx />
    </>
  );
}

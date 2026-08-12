import Image from "next/image";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";

const technologies = [
  "React Native",
  "Expo",
  "Firebase",
  "Firestore",
  "TypeScript",
  "Forward Chaining",
];

const features = [
  {
    title: "Symptom Detection",
    description:
      "Users can select symptoms experienced and use them as the basis for the diagnosis process.",
  },
  {
    title: "Forward Chaining",
    description:
      "The application compares user symptoms with the knowledge base to determine the most suitable diagnosis.",
  },
  {
    title: "Diagnosis History",
    description:
      "Diagnosis results can be stored so users can review their previous consultations.",
  },
  {
    title: "Admin Management",
    description:
      "An administration system manages symptoms, diseases, and expert system rules.",
  },
];

export default function GumExpertPage() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-[#080808] text-white">
        {/* NAVBAR */}
        {/* PROJECT NAVBAR */}
        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080808]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[0.2em] text-white"
            >
              AHMAD HAZLI
            </Link>

            <Link href="/#projects" className="text-sm text-white/50">
              ← Back to Projects
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <section className="px-6 pb-20 pt-40 lg:px-10 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-5xl">
              <p className="text-xs tracking-[0.3em] text-white/40">
                MOBILE APPLICATION · 2026
              </p>

              <h1 className="mt-8 text-6xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-[8rem] lg:leading-[0.9]">
                Gum
                <br />
                <span className="text-white/30">Expert.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-xl leading-relaxed text-white/50 lg:text-2xl">
                A mobile expert system designed to help users identify potential
                gum diseases using Forward Chaining.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN IMAGE */}
        <section className="px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <Image
                src="/projects/gum-expert.jpg"
                alt="Gum Expert application"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="border-t border-white/10 px-6 py-32 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.3em] text-white/40">
                01 — OVERVIEW
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Making preliminary gum disease detection more accessible.
              </h2>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <p className="leading-8 text-white/50">
                  Gum Expert is a mobile-based expert system that provides an
                  initial indication of possible gum disease based on symptoms
                  entered by the user.
                </p>

                <p className="leading-8 text-white/50">
                  The system applies Forward Chaining inference to compare
                  symptoms with predefined rules and determine the most relevant
                  diagnosis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-t border-white/10 px-6 py-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.3em] text-white/40">
              02 — FEATURES
            </p>

            <h2 className="mt-8 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl">
              Built around a simple diagnosis flow.
            </h2>

            <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="bg-[#080808] p-8 lg:p-12"
                >
                  <span className="text-xs text-white/30">0{index + 1}</span>

                  <h3 className="mt-8 text-2xl font-medium">{feature.title}</h3>

                  <p className="mt-5 max-w-md leading-7 text-white/40">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="border-t border-white/10 px-6 py-32 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.3em] text-white/40">
                03 — TECHNOLOGY
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
                Technology stack.
              </h2>

              <div className="mt-10 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-white/10 px-6 py-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.3em] text-white/40">
              04 — PROCESS
            </p>

            <div className="mt-16 grid gap-12 md:grid-cols-3">
              <div>
                <span className="text-xs text-white/30">01</span>
                <h3 className="mt-6 text-2xl">Input</h3>
                <p className="mt-4 leading-7 text-white/40">
                  Users provide symptoms based on their current condition.
                </p>
              </div>

              <div>
                <span className="text-xs text-white/30">02</span>
                <h3 className="mt-6 text-2xl">Inference</h3>
                <p className="mt-4 leading-7 text-white/40">
                  The Forward Chaining engine evaluates the selected symptoms
                  against the knowledge base.
                </p>
              </div>

              <div>
                <span className="text-xs text-white/30">03</span>
                <h3 className="mt-6 text-2xl">Result</h3>
                <p className="mt-4 leading-7 text-white/40">
                  The application displays the most relevant diagnosis based on
                  the matching rules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 px-6 py-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs tracking-[0.3em] text-white/40">
              MORE PROJECTS
            </p>

            <h2 className="mt-8 max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              See what else
              <br />
              <span className="text-white/30">I&apos;ve built.</span>
            </h2>

            <Link
              href="/#projects"
              className="mt-10 inline-block rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:scale-105"
            >
              Back to Projects →
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
          <div className="mx-auto max-w-7xl text-xs text-white/30">
            © 2026 Ahmad Hazli
          </div>
        </footer>
      </main>
    </>
  );
}

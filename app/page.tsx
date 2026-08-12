"use client";
import CustomCursor from "@/components/CustomCursor";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Gum Expert",
    category: "Mobile Application",
    description:
      "An expert system mobile application for gum disease diagnosis using Forward Chaining.",
    tech: ["React Native", "Firebase", "Expo"],
    year: "2026",
    image: "/projects/gum-expert.jpg",
  },
  {
    number: "02",
    title: "Gum Expert Admin",
    category: "Web Application",
    description:
      "A web-based administration dashboard for managing diagnosis data, symptoms, diseases, and expert system rules.",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    year: "2026",
  },
  {
    number: "03",
    title: "PlayBox PS4",
    category: "Business Project",
    description:
      "An entertainment business concept designed to bring PlayStation experiences into cafes.",
    tech: ["Business", "Product", "Branding"],
    year: "2026",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <main className="min-h-screen text-white portfolio-bg">
        {/* NAVBAR */}
        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080808]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
            <a
              href="#home"
              className="text-5xl leading-none transition-transform duration-300 hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              🧑🏻‍💻
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden items-center gap-2 text-sm text-white/60 md:flex">
              <a
                href="#about"
                className="rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                About
              </a>

              <a
                href="#skills"
                className="rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                Projects
              </a>

              <a
                href="#education"
                className="rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="rounded-full px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                Contact
              </a>
            </div>

            {/* DESKTOP CTA */}
            <a
              href="#contact"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-xs transition hover:bg-white hover:text-black md:block"
            >
              LET&apos;S TALK
            </a>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex w-4 flex-col gap-1.5">
                <span
                  className={`h-px w-full bg-white transition ${
                    menuOpen ? "translate-y-1 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-white transition ${
                    menuOpen ? "-rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="border-t border-white/10 bg-[#080808] px-6 py-6 md:hidden">
              <div className="flex flex-col gap-5 text-sm text-white/60">
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  About
                </a>

                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#education"
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  Experience
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-white"
                >
                  Contact
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex w-fit rounded-full bg-white px-5 py-3 text-xs font-medium text-black"
                >
                  LET&apos;S TALK
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-10"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* LEFT — INTRO */}
            <div>
              <p className="mb-8 text-xs tracking-[0.35em] text-white/40">
                INFORMATICS · CREATIVE · TECHNOLOGY
              </p>

              <h1 className="max-w-5xl text-[3.5rem] font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem]">
                Ahmad
                <br />
                <span className="text-white/30">Hazli.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:mt-10 sm:text-xl sm:leading-8">
                Informatics graduate, creative developer, and visual storyteller
                focused on building digital products and engaging visual
                experiences.
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex min-w-[150px] items-center justify-center whitespace-nowrap rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
                >
                  View My Work
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-w-[130px] items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-7 py-4 text-sm text-white/70 transition-colors duration-300 hover:border-white/50 hover:text-white"
                >
                  Let&apos;s Talk
                </a>
              </div>

              {/* SMALL INFO */}
              <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-xs tracking-[0.2em] text-white/30">
                <span>WEB DEVELOPMENT</span>
                <span>MOBILE APPS</span>
                <span>CREATIVE WORK</span>
              </div>
            </div>

            {/* RIGHT — PROFILE */}
            <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
              {/* Image frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                <Image
                  src="/profile.jpeg"
                  alt="Ahmad Hazli"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/10 bg-[#111]/90 px-5 py-4 backdrop-blur-xl sm:-left-5">
                <p className="text-[10px] tracking-[0.25em] text-white/30">
                  CURRENTLY
                </p>

                <p className="mt-1 text-sm text-white/80">
                  Building & Creating
                </p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-6 hidden items-center gap-3 text-[10px] tracking-[0.3em] text-white/30 lg:flex">
            <span className="h-px w-10 bg-white/20" />
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-40"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
              {/* LABEL */}
              <div className="lg:col-span-3">
                <p className="text-xs tracking-[0.3em] text-white/40">
                  01 — ABOUT
                </p>
              </div>

              {/* CONTENT */}
              <div className="lg:col-span-9">
                <h2 className="max-w-5xl text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  I build digital experiences where{" "}
                  <span className="text-white/30">
                    technology meets creativity.
                  </span>
                </h2>

                <div className="mt-12 grid gap-10 lg:grid-cols-2">
                  <p className="text-base leading-8 text-white/50">
                    I&apos;m an Informatics graduate with an interest in
                    software development, digital products, and creative
                    technology. I enjoy turning ideas and problems into
                    practical digital experiences.
                  </p>

                  <p className="text-base leading-8 text-white/50">
                    Alongside development, I have experience working with visual
                    content and digital media. This combination allows me to
                    approach projects from both a technical and creative
                    perspective.
                  </p>
                </div>

                {/* HIGHLIGHTS */}
                <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                  <div className="bg-[#080808] p-6">
                    <p className="text-3xl font-medium">S1</p>
                    <p className="mt-2 text-xs tracking-wider text-white/30">
                      INFORMATICS
                    </p>
                  </div>

                  <div className="bg-[#080808] p-6">
                    <p className="text-3xl font-medium">DEV</p>
                    <p className="mt-2 text-xs tracking-wider text-white/30">
                      SOFTWARE
                    </p>
                  </div>

                  <div className="bg-[#080808] p-6">
                    <p className="text-3xl font-medium">APP</p>
                    <p className="mt-2 text-xs tracking-wider text-white/30">
                      MOBILE & WEB
                    </p>
                  </div>

                  <div className="bg-[#080808] p-6">
                    <p className="text-3xl font-medium">CREATIVE</p>
                    <p className="mt-2 text-xs tracking-wider text-white/30">
                      VISUAL MEDIA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-40"
        >
          <div className="mx-auto max-w-7xl">
            {/* HEADER */}
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs tracking-[0.3em] text-white/40">
                  02 — SKILLS
                </p>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Technology, design,
                  <span className="text-white/30"> and creative thinking.</span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/40">
                  I combine software development, product design, and visual
                  creativity to turn ideas into functional and engaging digital
                  experiences.
                </p>
              </div>
            </div>

            {/* SKILLS GRID */}
            <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
              {/* DEVELOPMENT */}
              <div className="bg-[#080808] p-8 lg:p-12">
                <p className="text-xs tracking-[0.25em] text-white/30">
                  01 — DEVELOPMENT
                </p>

                <h3 className="mt-8 text-2xl font-medium">
                  Software Development
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  Building web and mobile applications, from user interfaces to
                  application logic and integration.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "React Native",
                    "Expo",
                    "JavaScript",
                    "TypeScript",
                    "Dart",
                    "Blade",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* BACKEND */}
              <div className="bg-[#080808] p-8 lg:p-12">
                <p className="text-xs tracking-[0.25em] text-white/30">
                  02 — BACKEND & DATABASE
                </p>

                <h3 className="mt-8 text-2xl font-medium">Backend & Data</h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  Developing application services, APIs, databases, and
                  cloud-based systems.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Firebase",
                    "Firestore",
                    "MySQL",
                    "REST API",
                    "Git",
                    "Database Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & DATA */}
              <div className="bg-[#080808] p-8 lg:p-12">
                <p className="text-xs tracking-[0.25em] text-white/30">
                  03 — AI & DATA
                </p>

                <h3 className="mt-8 text-2xl font-medium">
                  Intelligent Systems
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  Working with intelligent systems, machine learning, data
                  processing, and analytical workflows.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Forward Chaining",
                    "Expert Systems",
                    "Machine Learning",
                    "Naive Bayes",
                    "Data Analysis",
                    "ETL",
                    "Looker Studio",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* UI/UX */}
              <div className="bg-[#080808] p-8 lg:p-12">
                <p className="text-xs tracking-[0.25em] text-white/30">
                  04 — UI/UX
                </p>

                <h3 className="mt-8 text-2xl font-medium">
                  Product & Interface Design
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  Designing intuitive interfaces and digital experiences with
                  attention to usability, visual hierarchy, and interaction.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "UI Design",
                    "UX Design",
                    "Wireframing",
                    "Prototyping",
                    "Design Systems",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CREATIVE */}
              <div className="bg-[#080808] p-8 lg:p-12 md:col-span-2">
                <p className="text-xs tracking-[0.25em] text-white/30">
                  05 — CREATIVE
                </p>

                <h3 className="mt-8 text-2xl font-medium">
                  Visual & Content Production
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                  Creating visual content through video editing, graphic design,
                  motion, and digital content production.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Adobe Premiere Pro",
                    "Adobe After Effects",
                    "Adobe Illustrator",
                    "Adobe Photoshop",
                    "Canva",
                    "Video Editing",
                    "Motion Graphics",
                    "Content Creation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-t border-white/10 px-6 py-32 lg:px-10 lg:py-40"
        >
          <div className="mx-auto max-w-7xl">
            {/* HEADER */}
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs tracking-[0.3em] text-white/40">
                  03 — PROJECTS
                </p>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-5xl text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Selected work,
                  <span className="text-white/30"> experiments & ideas.</span>
                </h2>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/40">
                  A selection of applications, digital products, and technical
                  experiments I&apos;ve worked on across development, design,
                  data, and creative technology.
                </p>
              </div>
            </div>

            {/* FEATURED PROJECTS */}
            <div className="mt-20 space-y-8">
              {/* GUM EXPERT */}
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
                  {/* IMAGE */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03]">
                    <Image
                      src="/projects/gum-expert.jpg"
                      alt="Gum Expert mobile application"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs tracking-[0.25em] text-white/30">
                          01
                        </span>

                        <span className="text-xs text-white/30">
                          MOBILE APPLICATION
                        </span>
                      </div>

                      <h3 className="mt-10 text-3xl font-medium tracking-tight">
                        Gum Expert
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-white/40">
                        A mobile expert system designed to provide preliminary
                        gum disease detection using Forward Chaining.
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {[
                          "React Native",
                          "Expo",
                          "Firebase",
                          "Forward Chaining",
                        ].map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/projects/gum-expert"
                      className="mt-12 inline-flex w-fit items-center gap-3 text-sm text-white/70"
                    >
                      View Case Study
                      <span>↗</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* INLIFE */}
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                <div className="grid lg:grid-cols-[0.6fr_1.4fr]">
                  {/* CONTENT */}
                  <div className="flex flex-col justify-between p-8 lg:p-12">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs tracking-[0.25em] text-white/30">
                          02
                        </span>

                        <span className="text-xs text-white/30">
                          FULL-STACK WEB
                        </span>
                      </div>

                      <h3 className="mt-10 text-3xl font-medium tracking-tight">
                        InLife by Telkom
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-white/40">
                        A full-stack digital application developed as part of
                        the InLife by Telkom project, involving frontend and
                        backend development.
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {["Frontend", "Backend", "Database", "API"].map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                            >
                              {technology}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <span className="mt-12 inline-flex w-fit items-center gap-3 text-sm text-white/30">
                      Case study coming soon
                      <span>↗</span>
                    </span>
                  </div>

                  {/* IMAGE */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/[0.03] lg:aspect-auto">
                    <Image
                      src="/projects/Inlife.png"
                      alt="InLife by Telkom web application"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              </article>
            </div>

            {/* MORE PROJECTS */}
            <div className="mt-32">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs tracking-[0.3em] text-white/40">
                    MORE PROJECTS
                  </p>

                  <h3 className="mt-5 text-3xl font-medium tracking-tight">
                    Other things I&apos;ve built.
                  </h3>
                </div>
              </div>

              <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
                {/* PHARMACY APP */}
                <article className="group bg-[#080808] p-6 lg:p-8">
                  <div className="grid h-full gap-8 md:grid-cols-[1fr_0.9fr]">
                    {/* CONTENT */}
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">03</span>

                        <span className="text-xs text-white/30">MOBILE</span>
                      </div>

                      <h3 className="mt-8 text-xl font-medium sm:text-2xl">
                        PharmacyApp
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/40">
                        Mobile application project built with Dart, focused on
                        pharmaceutical and healthcare-related functionality.
                      </p>

                      <div className="mt-auto pt-8">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                            Dart
                          </span>
                          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                            Mobile
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <img
                        src="/projects/Pharmacy.png"
                        alt="PharmacyApp project preview"
                        className="h-48 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 sm:h-56 md:h-full"
                      />
                    </div>
                  </div>
                </article>

                {/* METROLINK */}
                <article className="group bg-[#080808] p-6 lg:p-8">
                  <div className="grid h-full gap-8 md:grid-cols-[1fr_0.9fr]">
                    {/* CONTENT */}
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">04</span>

                        <span className="text-xs text-white/30">WEB</span>
                      </div>

                      <h3 className="mt-8 text-xl font-medium sm:text-2xl">
                        MetroLink
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/40">
                        A web application concept focused on the future of urban
                        transportation, exploring digital interfaces and
                        mobility experience.
                      </p>

                      <div className="mt-auto pt-8">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                            Blade
                          </span>
                          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                            Web
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <img
                        src="/projects/Metrolink.png"
                        alt="MetroLink project preview"
                        className="h-48 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 sm:h-56 md:h-full"
                      />
                    </div>
                  </div>
                </article>

                {/* AIOT */}
                <article className="group bg-[#080808] p-6 lg:p-8">
                  <div className="grid h-full gap-8 md:grid-cols-[1fr_0.9fr]">
                    {/* CONTENT */}
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">05</span>

                        <span className="text-xs text-white/30">
                          MACHINE LEARNING
                        </span>
                      </div>

                      <h3 className="mt-8 text-xl font-medium sm:text-2xl">
                        AIOT — Room Comfort Prediction
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/40">
                        Machine learning experiment for predicting room comfort
                        using environmental data and the Naive Bayes algorithm.
                      </p>

                      <div className="mt-auto pt-8">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                            Python
                          </span>

                          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                            Naive Bayes
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <img
                        src="/projects/AIOT.png"
                        alt="AIOT Room Comfort Prediction project preview"
                        className="h-48 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 sm:h-56 md:h-full"
                      />
                    </div>
                  </div>
                </article>

                {/* PARTLIFE */}
                <article className="group bg-[#080808] p-6 lg:p-8">
                  <div className="grid h-full gap-8 md:grid-cols-[1fr_0.9fr]">
                    {/* CONTENT */}
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/30">06</span>

                        <span className="text-xs text-white/30">
                          JAVASCRIPT
                        </span>
                      </div>

                      <h3 className="mt-8 text-xl font-medium sm:text-2xl">
                        PartLifeEstimator
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/40">
                        JavaScript application project exploring estimation,
                        application logic, and interactive user input.
                      </p>

                      <div className="mt-auto pt-8">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                            JavaScript
                          </span>

                          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                            Web App
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <img
                        src="/projects/PartLife.png"
                        alt="PartLifeEstimator project preview"
                        className="h-48 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 sm:h-56 md:h-full"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section
          id="education"
          className="border-t border-white/10 px-6 py-24 lg:px-10 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            {/* HEADER */}
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs tracking-[0.3em] text-white/40">
                  04 — EXPERIENCE & EDUCATION
                </p>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  The experience behind
                  <span className="text-white/30"> what I build.</span>
                </h2>
              </div>
            </div>

            {/* TWO COLUMNS */}
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
              {/* EXPERIENCE */}
              <div className="bg-[#080808] p-8 lg:p-12">
                <p className="text-xs tracking-[0.25em] text-white/30">
                  EXPERIENCE
                </p>

                <div className="mt-10 space-y-0">
                  {/* ISTANA WAKIL PRESIDEN */}
                  <div className="border-b border-white/10 pb-10">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs text-white/30">2019 — 2020</p>

                      <span className="text-xs text-white/20">INTERNSHIP</span>
                    </div>

                    <h3 className="mt-4 text-2xl font-medium">
                      Vice Presidential Palace
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      Jakarta · Vice Presidential Administration
                    </p>

                    <p className="mt-5 text-sm leading-7 text-white/40">
                      Gained professional experience within the Office of the
                      Vice President of the Republic of Indonesia during the
                      administration of Ma&apos;ruf Amin, developing workplace
                      discipline, communication, administrative awareness, and
                      professional collaboration in a formal government
                      environment.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Professional Environment",
                        "Communication",
                        "Administration",
                        "Teamwork",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* UTERO INDONESIA */}
                  <div className="border-b border-white/10 py-10">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs text-white/30">2021 — 2022</p>

                      <span className="text-xs text-white/20">
                        PROFESSIONAL
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-medium">
                      Utero Indonesia
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      Creative & Digital Production
                    </p>

                    <p className="mt-5 text-sm leading-7 text-white/40">
                      Worked in a professional creative environment,
                      contributing to digital content production and visual
                      communication. Developed practical experience in creative
                      workflows, content execution, teamwork, and delivering
                      visual materials according to project requirements.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Creative Production",
                        "Visual Content",
                        "Video Editing",
                        "Digital Media",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* TELKOMSEL */}
                  <div className="border-b border-white/10 py-10">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs text-white/30">2024 — 2025</p>

                      <span className="text-xs text-white/20">INTERNSHIP</span>
                    </div>

                    <h3 className="mt-4 text-2xl font-medium">Telkomsel</h3>

                    <p className="mt-2 text-sm text-white/40">
                      Telkom Landmark Tower · Surabaya
                    </p>

                    <p className="mt-5 text-sm leading-7 text-white/40">
                      Contributed to technology and digital-related projects in
                      a corporate environment, gaining hands-on experience in
                      software development, digital solutions, collaboration,
                      and professional project workflows.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Software Development",
                        "Digital Technology",
                        "Project Collaboration",
                        "Problem Solving",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* KAGOENGAN STUDIO */}
                  <div className="pt-10">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs text-white/30">2025 — 2026</p>

                      <span className="text-xs text-white/20">
                        PROFESSIONAL
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-medium">
                      Kagoengan Studio
                    </h3>

                    <p className="mt-2 text-sm text-white/40">
                      Video Editor · Creative & Digital Content
                    </p>

                    <p className="mt-5 text-sm leading-7 text-white/40">
                      Worked on digital content production from concept
                      development to final delivery. Focused on video editing,
                      visual storytelling, motion, graphic elements, and
                      creating engaging content for digital platforms while
                      maintaining consistency with creative direction.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Video Editing",
                        "Motion Graphics",
                        "Visual Storytelling",
                        "Creative Production",
                        "Adobe Premiere Pro",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="bg-[#080808] p-8 lg:p-12">
                <p className="text-xs tracking-[0.25em] text-white/30">
                  EDUCATION
                </p>

                {/* UNIVERSITY */}
                <div className="mt-10">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs text-white/30">2022 — 2025</p>

                    <span className="text-xs text-white/20">GRADUATE</span>
                  </div>

                  <p className="mt-6 text-xs tracking-[0.2em] text-white/30">
                    BACHELOR&apos;S DEGREE
                  </p>

                  <h3 className="mt-4 text-3xl font-medium">Informatics</h3>

                  <p className="mt-2 text-sm text-white/40">
                    Telkom University Surabaya
                  </p>

                  <p className="mt-6 text-sm leading-7 text-white/40">
                    Studied Informatics with a focus on software development,
                    intelligent systems, databases, data processing, and digital
                    technology. Developed practical experience through academic
                    projects involving application development, system design,
                    artificial intelligence, and data-driven solutions.
                  </p>

                  {/* DEGREE */}
                  <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="text-xs tracking-[0.2em] text-white/30">
                      DEGREE
                    </p>

                    <p className="mt-2 text-sm text-white/60">
                      Bachelor of Informatics
                    </p>
                  </div>

                  {/* ORGANIZATIONAL EXPERIENCE */}
                  <div className="mt-8 border-t border-white/10 pt-8">
                    <p className="text-xs tracking-[0.2em] text-white/30">
                      ORGANIZATIONAL EXPERIENCE
                    </p>

                    {/* MENKO */}
                    <div className="mt-8">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-xs text-white/30">2024 — 2025</p>

                        <span className="text-xs text-white/20">BEM</span>
                      </div>

                      <h4 className="mt-4 text-xl font-medium">
                        Coordinating Minister
                      </h4>

                      <p className="mt-2 text-sm text-white/40">
                        Pergerakan dan Pengabdian · BEM Telkom University
                        Surabaya
                      </p>

                      <p className="mt-4 text-sm leading-7 text-white/40">
                        Led and coordinated the Pergerakan dan Pengabdian
                        division, overseeing programs related to social
                        engagement, external relations, and strategic
                        initiatives while coordinating multiple internal
                        departments and organizational activities.
                      </p>
                    </div>

                    {/* SEKRETARIS MENKO */}
                    <div className="mt-8 border-t border-white/10 pt-8">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-xs text-white/30">2023 — 2024</p>

                        <span className="text-xs text-white/20">BEM</span>
                      </div>

                      <h4 className="mt-4 text-xl font-medium">
                        Secretary to the Coordinating Minister
                      </h4>

                      <p className="mt-2 text-sm text-white/40">
                        Pergerakan dan Pengabdian · BEM Telkom University
                        Surabaya
                      </p>

                      <p className="mt-4 text-sm leading-7 text-white/40">
                        Supported coordination and administration within the
                        Pergerakan dan Pengabdian division, assisting with
                        program planning, documentation, communication, and
                        coordination across departments and organizational
                        stakeholders.
                      </p>
                    </div>
                  </div>

                  {/* FOCUS */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-xs tracking-[0.2em] text-white/30">
                      FOCUS
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "Software Development",
                        "UI/UX",
                        "Artificial Intelligence",
                        "Database",
                        "Data Processing",
                        "Leadership",
                        "Project Coordination",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] tracking-wide text-white/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-white/10 px-6 py-32 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* LABEL */}
              <div className="lg:col-span-3">
                <p className="text-xs tracking-[0.3em] text-white/40">
                  07 — CONTACT
                </p>
              </div>

              {/* CONTENT */}
              <div className="lg:col-span-9">
                <div className="max-w-5xl">
                  <h2 className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                    Let&apos;s work
                    <br />
                    <span className="text-white/30">together.</span>
                  </h2>

                  <p className="mt-10 max-w-lg leading-7 text-white/40">
                    Have a project, collaboration, or opportunity? Feel free to
                    get in touch. I&apos;m always open to creating something
                    meaningful together.
                  </p>

                  {/* GET IN TOUCH */}
                  <a
                    href="mailto:hazliyahya03@gmail.com"
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition duration-300 hover:scale-105"
                  >
                    Get in touch
                    <span>→</span>
                  </a>
                </div>

                {/* CONTACT LINKS */}
                <div className="mt-20 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                  {/* EMAIL */}
                  <a
                    href="mailto:hazliyahya03@gmail.com"
                    className="group bg-[#080808] p-6 transition duration-300 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs tracking-[0.2em] text-white/30">
                        EMAIL
                      </p>

                      <span className="text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/70">
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-white/60 transition group-hover:text-white">
                      hazliyahya03@gmail.com
                    </p>
                  </a>

                  {/* GITHUB */}
                  <a
                    href="https://github.com/natalio0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#080808] p-6 transition duration-300 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs tracking-[0.2em] text-white/30">
                        GITHUB
                      </p>

                      <span className="text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/70">
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-white/60 transition group-hover:text-white">
                      @natalio0
                    </p>
                  </a>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/ahmadhazlii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#080808] p-6 transition duration-300 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs tracking-[0.2em] text-white/30">
                        LINKEDIN
                      </p>

                      <span className="text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/70">
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-white/60 transition group-hover:text-white">
                      Ahmad Hazli
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/30 sm:flex-row">
            <p>© 2026 Ahmad Hazli</p>

            <p>Built with Next.js</p>
          </div>
        </footer>
      </main>
    </>
  );
}

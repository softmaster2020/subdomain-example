import { createFileRoute } from "@tanstack/react-router";
import v1 from "@/assets/hero_clip_2.mp4.asset.json";
import v2 from "@/assets/hero_clip_3.mp4.asset.json";
import v3 from "@/assets/hero_clip_4.mp4.asset.json";
import v4 from "@/assets/hero_clip_5.mp4.asset.json";
import introClip from "@/assets/hero_intro.mp4.asset.json";
import heroBg from "@/assets/hero-background.png.asset.json";
import servicesBg from "@/assets/services-background.png.asset.json";
import aboutBg from "@/assets/about_background.mp4.asset.json";
import { useState, useEffect } from "react";
import contactBg from "@/assets/contact-background.png.asset.json";
import pb1 from "@/assets/process-bg-1.png.asset.json";
import pb2 from "@/assets/process-bg-2.png.asset.json";
import pb3 from "@/assets/process-bg-3.png.asset.json";
import pb4 from "@/assets/process-bg-4.png.asset.json";
import pb5 from "@/assets/process-bg-5.png.asset.json";
const processBgs = [pb1.url, pb2.url, pb3.url, pb4.url, pb5.url];
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook, FaSnapchat, FaXTwitter, FaPinterest, FaTwitch } from "react-icons/fa6";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PULSO — AI Microdrama Production" },
      { name: "description", content: "PULSO produces cinematic vertical microdramas at the speed of AI." },
      { property: "og:title", content: "PULSO — AI Microdrama Production" },
      { property: "og:description", content: "PULSO produces cinematic vertical microdramas at the speed of AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const posters = [
  { src: introClip.url, t: "PULSO Intro" },
  { src: v1.url, t: "Red Signal" }, { src: v2.url, t: "The Last Waltz" },
  { src: v3.url, t: "Runaway Vows" }, { src: v4.url, t: "Corner Office" },
];
const services = [
  ["Full Series Production", "Complete vertical seasons, written, rendered, scored and delivered with consistent characters across every episode."],
  ["Scripts & Hooks", "Episode outlines built around mobile attention spans — open on tension, close on a reason to keep tapping."],
  ["Branded Stories", "Short serialized stories where your product belongs inside the plot rather than interrupting it."],
  ["Pilot Episodes", "Test a premise with one to three episodes before committing to a full season."],
  ["Characters & Worlds", "Faces, costumes and locations designed and approved up front so the series stays consistent."],
  ["Sound & Localization", "Dialogue, effects and music mixed for phone speakers, with versions in multiple languages."],
];
const steps = [
  ["Concept", "Find the emotional core and the opening hook."],
  ["Script", "Pace every episode for vertical viewing."],
  ["Look lock", "Approve characters and sets before rendering."],
  ["Generate", "Render scenes with real camera coverage."],
  ["Sound", "Mix voice, effects and score."],
  ["Deliver", "Export masters for every platform."],
];

function Btn({ children }: { children: React.ReactNode }) {
  return <a href="#contact" className="btn-primary">{children}</a>;
}

function Index() {
  const strip = [...posters, ...posters, ...posters, ...posters];
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">

      <section id="home" className="relative scroll-mt-16 overflow-hidden bg-foreground bg-cover bg-center pt-10 text-center text-background sm:pt-16" style={{ backgroundImage: `linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 55%, transparent), color-mix(in oklab, var(--foreground) 85%, transparent)), url(${heroBg.url})` }}>
        <h1 className="px-4 text-[2.6rem] font-extrabold leading-[0.95] sm:text-6xl lg:text-8xl">PULSO AI Micro<br /><span className="relative inline-block text-primary">Production Studio</span></h1>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-5">
            {strip.map((p, i) => (
              <figure key={i} className="relative h-72 w-40 sm:h-[420px] sm:w-60 shrink-0 overflow-hidden rounded-2xl border">
                <video src={p.src} autoPlay muted loop playsInline preload={i < 4 ? "auto" : "metadata"} aria-label={p.t} className="h-full w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 p-4 text-left text-sm font-bold text-background">{p.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <IconRow />
        <div className="pb-14 pt-8"><Btn>Book a demo</Btn></div>
      </section>

      <section id="about" className="relative flex min-h-svh items-center justify-center overflow-hidden bg-foreground px-6 py-16 text-center text-background">
        <video src={aboutBg.url} autoPlay muted loop playsInline aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative mx-auto max-w-4xl">
        <p className="text-xs font-bold tracking-[0.3em] text-primary">ABOUT US</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold lg:text-5xl">Built for the vertical screen.</h2>
        <p className="mt-6 text-lg text-background/80">We pair sharp storytelling with generative visuals and mobile-native pacing, turning around full series in days instead of months — at a fraction of the usual budget. Bring a finished script or just an idea.</p>
        <div className="mt-8"><Btn>Start a project</Btn></div>
        </div>
      </section>

      <section id="services" className="bg-foreground bg-cover bg-center py-16 text-background sm:py-24" style={{ backgroundImage: `linear-gradient(color-mix(in oklab, var(--foreground) 45%, transparent), color-mix(in oklab, var(--foreground) 45%, transparent)), url(${servicesBg.url})` }}>
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold tracking-[0.3em] text-primary">SERVICES</p>
          <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl font-extrabold lg:text-5xl">Everything from idea to final episode</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([t, d], i) => (
              <div key={t} className="rounded-2xl border border-background/15 bg-tile p-7 backdrop-blur-sm transition duration-300 hover:z-10 hover:-translate-y-2 hover:scale-[1.06] hover:border-primary/60 hover:shadow-2xl">
                <span className="text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{t}</h3>
                <p className="mt-3 text-background/75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative flex min-h-svh items-center overflow-hidden bg-foreground text-background">
        <ProcessBg />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
        <p className="text-xs font-bold tracking-[0.3em] text-primary">THE PROCESS</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold lg:text-5xl">Six stages. Weeks, not quarters.</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t-2 border-primary pt-5">
              <span className="text-3xl sm:text-4xl font-extrabold text-primary/70">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-background/75">{d}</p>
            </li>
          ))}
        </ol>
        </div>
      </section>


      <section id="contact" className="bg-cover bg-center px-4 py-16 sm:py-24" style={{ backgroundImage: `linear-gradient(color-mix(in oklab, var(--background) 70%, transparent), color-mix(in oklab, var(--background) 70%, transparent)), url(${contactBg.url})` }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-5xl">Your next hit is <span className="text-primary">one tap away.</span></h2>
          <p className="mt-4 text-muted-foreground">Pick a time that works for you.</p>
          <div className="mt-10"><CalendlyEmbed /></div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 PULSO</footer>
    </div>
  );
}

const icons = [
  [FaYoutube, "YouTube"], [FaInstagram, "Instagram"], [FaTiktok, "TikTok"], [FaFacebook, "Facebook"],
  [FaSnapchat, "Snapchat"], [FaXTwitter, "X"], [FaPinterest, "Pinterest"], [FaTwitch, "Twitch"],
] as const;
function IconRow() {
  const row = [...icons, ...icons, ...icons, ...icons];
  return (
    <div className="mt-10">
      <p className="px-4 text-[11px] font-bold tracking-[0.3em] text-background/70">MADE FOR EVERY VERTICAL SCREEN</p>
      <div className="mx-auto mt-5 max-w-4xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 py-2 sm:gap-5 [animation-duration:30s]">
          {row.map(([I, name], i) => (
            <div key={i} title={name} aria-label={name} className={`grid size-12 shrink-0 place-items-center rounded-2xl shadow-md sm:size-14 ${i % 2 ? "bg-foreground text-background" : "bg-primary text-primary-foreground"}`}><I className="size-6" /></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessBg() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % processBgs.length), 8000);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      {processBgs.map((src, n) => (
        <img key={src} src={src} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[2500ms] ease-in-out" style={{ opacity: n === i ? 1 : 0 }} />
      ))}
    </>
  );
}

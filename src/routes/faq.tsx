import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
    { title: "FAQ — PULSO AI Production Studio" },
    { name: "description", content: "Answers to common questions about PULSO's AI microdrama production, timelines, characters, delivery, and ownership." },
    { property: "og:title", content: "FAQ — PULSO AI Production Studio" },
    { property: "og:description", content: "Explore how PULSO produces vertical microdramas, from scripts and characters to final delivery." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FAQPage,
});

const questions = [
  ["What is an AI microdrama production studio?", "It's a studio that produces vertical, episodic drama — typically 60 to 120 second episodes — using generative production instead of a conventional shoot. The writing, directing, and editorial craft are human; the camera, cast, and locations are generated. That combination is what lets a 50-episode season ship in weeks rather than quarters."],
  ["How long does a microdrama season take to produce?", "A pilot episode typically takes a few days. A full season of 40 to 100 episodes runs two to four weeks from locked script, depending on episode count, cast size, and how much world design has to be built from scratch."],
  ["How much does AI microdrama production cost?", "Pricing is per episode and depends on episode length, cast complexity, and how many rendering passes a look requires. Every proposal we send includes a per-episode cost sheet so you can see what scales and what doesn't before you commit to a season."],
  ["Do you keep characters consistent across every episode?", "Yes — identity consistency is the core of the pipeline. Faces, wardrobe, and locations are built as approved reference assets before any video is generated, so a character looks the same in episode 1 and episode 50."],
  ["Can you work from a script we already have?", "Yes. If you have a finished script or series bible we go straight to character and world design. If you have an idea, a logline, or a piece of IP, we handle beat sheets and episodic scripts as part of the production."],
  ["Which platforms do you deliver for?", "Native 9:16 masters for TikTok, Instagram Reels, YouTube Shorts, and dedicated microdrama apps. Localized audio and subtitle versions are available for international drama platforms."],
  ["Do we own the finished series?", "Yes. Output ownership, a synthetic-origin warranty, and custody of the character sheets are written into the agreement before production starts."],
];

function FAQPage() {
  return <>
    <main className="min-h-svh bg-background px-6 py-12 font-sans text-foreground sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold tracking-[0.15em] text-primary">FAQ</p>
        <h1 className="mb-8 mt-3 text-3xl font-extrabold sm:text-4xl">Frequently asked questions</h1>
        <dl>{questions.map(([question, answer]) => <div key={question} className="border-t py-6">
          <dt className="text-base font-extrabold">{question}</dt>
          <dd className="mt-3 text-sm leading-7 text-muted-foreground">{answer}</dd>
        </div>)}</dl>
      </div>
    </main>
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 PULSO</footer>
  </>;
}
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-DDN-QBL1.js
var import_jsx_runtime = require_jsx_runtime();
var questions = [
	["What is an AI microdrama production studio?", "It's a studio that produces vertical, episodic drama — typically 60 to 120 second episodes — using generative production instead of a conventional shoot. The writing, directing, and editorial craft are human; the camera, cast, and locations are generated. That combination is what lets a 50-episode season ship in weeks rather than quarters."],
	["How long does a microdrama season take to produce?", "A pilot episode typically takes a few days. A full season of 40 to 100 episodes runs two to four weeks from locked script, depending on episode count, cast size, and how much world design has to be built from scratch."],
	["How much does AI microdrama production cost?", "Pricing is per episode and depends on episode length, cast complexity, and how many rendering passes a look requires. Every proposal we send includes a per-episode cost sheet so you can see what scales and what doesn't before you commit to a season."],
	["Do you keep characters consistent across every episode?", "Yes — identity consistency is the core of the pipeline. Faces, wardrobe, and locations are built as approved reference assets before any video is generated, so a character looks the same in episode 1 and episode 50."],
	["Can you work from a script we already have?", "Yes. If you have a finished script or series bible we go straight to character and world design. If you have an idea, a logline, or a piece of IP, we handle beat sheets and episodic scripts as part of the production."],
	["Which platforms do you deliver for?", "Native 9:16 masters for TikTok, Instagram Reels, YouTube Shorts, and dedicated microdrama apps. Localized audio and subtitle versions are available for international drama platforms."],
	["Do we own the finished series?", "Yes. Output ownership, a synthetic-origin warranty, and custody of the character sheets are written into the agreement before production starts."]
];
function FAQPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-svh bg-background px-6 py-12 font-sans text-foreground sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold tracking-[0.15em] text-primary",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-8 mt-3 text-3xl font-extrabold sm:text-4xl",
					children: "Frequently asked questions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children: questions.map(([question, answer]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-base font-extrabold",
						children: question
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-3 text-sm leading-7 text-muted-foreground",
						children: answer
					})]
				}, question)) })
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t py-8 text-center text-sm text-muted-foreground",
		children: "© 2026 PULSO"
	})] });
}
//#endregion
export { FAQPage as component };

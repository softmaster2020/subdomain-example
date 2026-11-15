import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { i as Clock3, o as CalendarDays, r as LoaderCircle, s as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as FaTiktok, c as FaYoutube, i as FaSnapchat, n as FaInstagram, o as FaTwitch, r as FaPinterest, s as FaXTwitter, t as FaFacebook } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BkJ2u3UE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_clip_2_default = "/assets/hero_clip_2-DCm0XYKa.mp4";
var hero_clip_3_default = "/assets/hero_clip_3-BwlrXfBO.mp4";
var hero_clip_4_default = "/assets/hero_clip_4-dMW_udNF.mp4";
var hero_clip_5_default = "/assets/hero_clip_5-BLmogWTC.mp4";
var hero_intro_default = "/assets/hero_intro-i_hAKMYi.mp4";
var hero_background_default = "/assets/hero-background-D1i1wW-S.png";
var services_background_default = "/assets/services-background-Dv4EN3nd.png";
var about_background_default = "/assets/about_background-CSyv-FOX.mp4";
var contact_background_default = "/assets/contact-background-BPQsmEio.png";
var process_bg_1_default = "/assets/process-bg-1-qlh3KAjE.png";
var process_bg_2_default = "/assets/process-bg-2-De00kNKI.png";
var process_bg_3_default = "/assets/process-bg-3-CaT50qN6.png";
var process_bg_4_default = "/assets/process-bg-4-BJUPoLZP.png";
var process_bg_5_default = "/assets/process-bg-5-NNeENJHl.png";
var pulso_logo_default = "/assets/pulso-logo-DxP_8BNu.png";
var CALENDLY_URL = "https://calendly.com/nova2026p/30min";
function CalendlyEmbed() {
	const [embedUrl, setEmbedUrl] = (0, import_react.useState)();
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const url = new URL(CALENDLY_URL);
		url.searchParams.set("hide_gdpr_banner", "1");
		url.searchParams.set("hide_event_type_details", "1");
		url.searchParams.set("embed_domain", window.location.hostname);
		url.searchParams.set("embed_type", "Inline");
		setEmbedUrl(url.toString());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-xl shadow-primary/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-5 border-b px-5 py-6 text-left sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pulso_logo_default,
						alt: "PULSO Studios logo",
						className: "h-20 w-24 shrink-0 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold text-muted-foreground",
						children: "PULSO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-xl font-bold",
						children: "Book a demo"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-4 text-primary" }), "30 minutes"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
						className: "size-5 text-primary",
						"aria-hidden": "true"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[760px] sm:h-[680px]",
				children: [!loaded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex items-center justify-center gap-3 text-sm text-muted-foreground",
					role: "status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin motion-reduce:animate-none" }), "Loading calendar…"]
				}), embedUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Book a demo with PULSO",
					src: embedUrl,
					className: `relative h-full w-full border-0 bg-card transition-opacity motion-reduce:transition-none ${loaded ? "opacity-100" : "opacity-0"}`,
					onLoad: () => setLoaded(true)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 border-t px-5 py-3 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Powered by Calendly"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: CALENDLY_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						children: ["Open in Calendly", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})]
			})
		]
	});
}
var processBgs = [
	process_bg_1_default,
	process_bg_2_default,
	process_bg_3_default,
	process_bg_4_default,
	process_bg_5_default
];
var posters = [
	{
		src: hero_intro_default,
		t: "PULSO Intro"
	},
	{
		src: hero_clip_2_default,
		t: "Red Signal"
	},
	{
		src: hero_clip_3_default,
		t: "The Last Waltz"
	},
	{
		src: hero_clip_4_default,
		t: "Runaway Vows"
	},
	{
		src: hero_clip_5_default,
		t: "Corner Office"
	}
];
var services = [
	["Full Series Production", "Complete vertical seasons, written, rendered, scored and delivered with consistent characters across every episode."],
	["Scripts & Hooks", "Episode outlines built around mobile attention spans — open on tension, close on a reason to keep tapping."],
	["Branded Stories", "Short serialized stories where your product belongs inside the plot rather than interrupting it."],
	["Pilot Episodes", "Test a premise with one to three episodes before committing to a full season."],
	["Characters & Worlds", "Faces, costumes and locations designed and approved up front so the series stays consistent."],
	["Sound & Localization", "Dialogue, effects and music mixed for phone speakers, with versions in multiple languages."]
];
var steps = [
	["Concept", "Find the emotional core and the opening hook."],
	["Script", "Pace every episode for vertical viewing."],
	["Look lock", "Approve characters and sets before rendering."],
	["Generate", "Render scenes with real camera coverage."],
	["Sound", "Mix voice, effects and score."],
	["Deliver", "Export masters for every platform."]
];
function Btn({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#contact",
		className: "btn-primary",
		children
	});
}
function Index() {
	const strip = [
		...posters,
		...posters,
		...posters,
		...posters
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "home",
				className: "relative scroll-mt-16 overflow-hidden bg-foreground bg-cover bg-center pt-10 text-center text-background sm:pt-16",
				style: { backgroundImage: `linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 55%, transparent), color-mix(in oklab, var(--foreground) 85%, transparent)), url(${hero_background_default})` },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "px-4 text-[2.6rem] font-extrabold leading-[0.95] sm:text-6xl lg:text-8xl",
						children: [
							"PULSO AI Micro",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative inline-block text-primary",
								children: "Production Studio"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-max animate-marquee gap-5",
							children: strip.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "relative h-72 w-40 sm:h-[420px] sm:w-60 shrink-0 overflow-hidden rounded-2xl border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									src: p.src,
									autoPlay: true,
									muted: true,
									loop: true,
									playsInline: true,
									preload: i < 4 ? "auto" : "metadata",
									"aria-label": p.t,
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 p-4 text-left text-sm font-bold text-background",
									children: p.t
								})]
							}, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRow, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pb-14 pt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, { children: "Book a demo" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "about",
				className: "relative flex min-h-svh items-center justify-center overflow-hidden bg-foreground px-6 py-16 text-center text-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						src: about_background_default,
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						"aria-hidden": true,
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-foreground/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-4xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold tracking-[0.3em] text-primary",
								children: "ABOUT US"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-3xl sm:text-4xl font-extrabold lg:text-5xl",
								children: "Built for the vertical screen."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg text-background/80",
								children: "We pair sharp storytelling with generative visuals and mobile-native pacing, turning around full series in days instead of months — at a fraction of the usual budget. Bring a finished script or just an idea."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, { children: "Start a project" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "bg-foreground bg-cover bg-center py-16 text-background sm:py-24",
				style: { backgroundImage: `linear-gradient(color-mix(in oklab, var(--foreground) 45%, transparent), color-mix(in oklab, var(--foreground) 45%, transparent)), url(${services_background_default})` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold tracking-[0.3em] text-primary",
							children: "SERVICES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl text-3xl sm:text-4xl font-extrabold lg:text-5xl",
							children: "Everything from idea to final episode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: services.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-background/15 bg-tile p-7 backdrop-blur-sm transition duration-300 hover:z-10 hover:-translate-y-2 hover:scale-[1.06] hover:border-primary/60 hover:shadow-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-bold text-primary",
										children: ["0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-xl font-bold",
										children: t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-background/75",
										children: d
									})
								]
							}, t))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "process",
				className: "relative flex min-h-svh items-center overflow-hidden bg-foreground text-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessBg, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-foreground/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-6xl px-6 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold tracking-[0.3em] text-primary",
								children: "THE PROCESS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-3xl sm:text-4xl font-extrabold lg:text-5xl",
								children: "Six stages. Weeks, not quarters."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
								children: steps.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "border-t-2 border-primary pt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-3xl sm:text-4xl font-extrabold text-primary/70",
											children: ["0", i + 1]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-xl font-bold",
											children: t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-background/75",
											children: d
										})
									]
								}, t))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "bg-cover bg-center px-4 py-16 sm:py-24",
				style: { backgroundImage: `linear-gradient(color-mix(in oklab, var(--background) 70%, transparent), color-mix(in oklab, var(--background) 70%, transparent)), url(${contact_background_default})` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-extrabold sm:text-5xl",
							children: ["Your next hit is ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "one tap away."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Pick a time that works for you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendlyEmbed, {})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t py-8 text-center text-sm text-muted-foreground",
				children: "© 2026 PULSO"
			})
		]
	});
}
var icons = [
	[FaYoutube, "YouTube"],
	[FaInstagram, "Instagram"],
	[FaTiktok, "TikTok"],
	[FaFacebook, "Facebook"],
	[FaSnapchat, "Snapchat"],
	[FaXTwitter, "X"],
	[FaPinterest, "Pinterest"],
	[FaTwitch, "Twitch"]
];
function IconRow() {
	const row = [
		...icons,
		...icons,
		...icons,
		...icons
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-4 text-[11px] font-bold tracking-[0.3em] text-background/70",
			children: "MADE FOR EVERY VERTICAL SCREEN"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-5 max-w-4xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-marquee gap-3 py-2 sm:gap-5 [animation-duration:30s]",
				children: row.map(([I, name], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					title: name,
					"aria-label": name,
					className: `grid size-12 shrink-0 place-items-center rounded-2xl shadow-md sm:size-14 ${i % 2 ? "bg-foreground text-background" : "bg-primary text-primary-foreground"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "size-6" })
				}, i))
			})
		})]
	});
}
function ProcessBg() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((n) => (n + 1) % processBgs.length), 8e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: processBgs.map((src, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: "",
		"aria-hidden": true,
		className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-[2500ms] ease-in-out",
		style: { opacity: n === i ? 1 : 0 }
	}, src)) });
}
//#endregion
export { Index as component };

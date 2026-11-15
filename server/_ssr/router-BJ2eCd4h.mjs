import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { S as useRouter, _ as Outlet, b as createRootRouteWithContext, d as Scripts, f as HeadContent, g as createRouter, m as useRouterState, p as useLocation, v as lazyRouteComponent, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as Clapperboard, c as ArrowRight, n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BJ2eCd4h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-d14L4OI-.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var pulso_symbol_default = "/assets/pulso-symbol-Bg0qTZaE.png";
var sections = [
	{
		label: "Home",
		hash: "home"
	},
	{
		label: "About",
		hash: "about"
	},
	{
		label: "Services",
		hash: "services"
	},
	{
		label: "Process",
		hash: "process"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const navigation = (mobile = false) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		sections.map(({ label, hash }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			hash,
			hashScrollIntoView: false,
			onClick: () => setOpen(false),
			className: mobile ? "px-3 py-3 text-sm font-bold hover:text-primary" : "transition hover:text-primary",
			children: label.toUpperCase()
		}, hash)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/faq",
			onClick: () => setOpen(false),
			activeProps: { className: "text-primary" },
			className: mobile ? "px-3 py-3 text-sm font-bold hover:text-primary" : "transition hover:text-primary",
			children: "FAQ"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			hash: "contact",
			hashScrollIntoView: false,
			onClick: () => setOpen(false),
			className: mobile ? "px-3 py-3 text-sm font-bold hover:text-primary" : "transition hover:text-primary",
			children: "CONTACT"
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-transparent bg-background/80 font-sans backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					hash: "home",
					hashScrollIntoView: false,
					className: "flex min-w-0 shrink-0 items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pulso_symbol_default,
						alt: "PULSO logo",
						width: 36,
						height: 36,
						className: "size-9 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base font-extrabold sm:text-lg",
						children: "PULSO"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main navigation",
					className: "hidden items-center gap-5 text-[11px] font-bold lg:flex",
					children: navigation()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "btn-primary hidden !px-5 !py-2.5 !text-[11px] sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "contact",
							hashScrollIntoView: false,
							children: "Book a demo"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen(!open),
						className: "lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Mobile navigation",
			className: "grid border-t bg-background px-4 py-4 lg:hidden",
			children: [navigation(true), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "btn-primary mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: "contact",
					hashScrollIntoView: false,
					onClick: () => setOpen(false),
					children: "Book a demo"
				})
			})]
		})]
	});
}
/** Track unique images and playable video frames, rather than download byte estimates. */
function trackPageMedia(root, onProgress) {
	const images = /* @__PURE__ */ new Set();
	const videos = /* @__PURE__ */ new Map();
	root.querySelectorAll("img").forEach((image) => {
		if (image.currentSrc || image.src) images.add(image.currentSrc || image.src);
	});
	root.querySelectorAll("video").forEach((video) => {
		const src = video.currentSrc || video.src;
		if (src && !videos.has(src)) videos.set(src, video);
	});
	root.querySelectorAll("*").forEach((element) => {
		const background = getComputedStyle(element).backgroundImage;
		for (const match of background.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
			const src = match[1];
			if (src) images.add(new URL(src, document.baseURI).href);
		}
	});
	const progress = {
		total: images.size + videos.size,
		settled: 0,
		failed: 0
	};
	const cleanups = [];
	let disposed = false;
	const publish = () => {
		if (!disposed) onProgress({ ...progress });
	};
	const watch = (element, event) => {
		let settled = false;
		const finish = (failed) => {
			if (settled || disposed) return;
			settled = true;
			progress.settled += 1;
			if (failed) progress.failed += 1;
			publish();
		};
		const ready = () => finish(false);
		const error = () => finish(true);
		element.addEventListener(event, ready);
		element.addEventListener("error", error);
		cleanups.push(() => {
			element.removeEventListener(event, ready);
			element.removeEventListener("error", error);
		});
		return finish;
	};
	publish();
	images.forEach((src) => {
		const image = new Image();
		const finish = watch(image, "load");
		image.src = src;
		if (image.complete) finish(image.naturalWidth === 0);
	});
	videos.forEach((video) => {
		const finish = watch(video, "loadeddata");
		if (video.error) finish(true);
		else if (video.readyState >= 2) finish(false);
		else video.preload = "auto";
	});
	return () => {
		disposed = true;
		cleanups.forEach((cleanup) => cleanup());
	};
}
function PageLoading() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaLoadingScreen, {}, pathname);
}
function MediaLoadingScreen() {
	const [progress, setProgress] = (0, import_react.useState)({
		total: 0,
		settled: 0,
		failed: 0
	});
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	const [slow, setSlow] = (0, import_react.useState)(false);
	const percent = progress.total ? Math.floor(progress.settled / progress.total * 100) : 0;
	(0, import_react.useEffect)(() => {
		let completion;
		const cleanup = trackPageMedia(document.body, (next) => {
			setProgress(next);
			if (next.settled === next.total) completion = setTimeout(() => setLeaving(true), 350);
		});
		const slowTimer = setTimeout(() => setSlow(true), 8e3);
		const deadline = setTimeout(() => setLeaving(true), 15e3);
		return () => {
			cleanup();
			clearTimeout(completion);
			clearTimeout(slowTimer);
			clearTimeout(deadline);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!leaving) return;
		const timer = setTimeout(() => setVisible(false), 450);
		return () => clearTimeout(timer);
	}, [leaving]);
	(0, import_react.useEffect)(() => {
		if (!visible) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previous;
		};
	}, [visible]);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `cinema-loading fixed inset-0 z-[100] flex items-center justify-center bg-loading-background px-6 font-sans text-loading-foreground transition-opacity duration-[450ms] motion-reduce:transition-none ${leaving ? "pointer-events-none opacity-0" : "opacity-100"}`,
		"aria-label": "Page loading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cinema-frame absolute inset-5 border border-loading-foreground/15 sm:inset-8",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-10 top-10 text-xs font-bold text-loading-foreground/50 sm:left-14 sm:top-14",
				children: "PULSO STUDIOS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute right-10 top-10 flex items-center gap-2 text-xs text-loading-foreground/50 sm:right-14 sm:top-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary motion-safe:animate-pulse" }), " ON AIR"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-md text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clapperboard, {
						className: "mx-auto mb-6 size-10 text-primary",
						strokeWidth: 1.3,
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-5xl font-extrabold sm:text-6xl",
						children: ["PULSO", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-loading-foreground/60",
						role: "status",
						"aria-live": "polite",
						children: slow ? "A few frames are taking longer…" : percent === 100 ? "Ready for the spotlight." : "Setting the scene…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-end justify-between text-xs text-loading-foreground/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LOADING MEDIA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-medium tabular-nums text-loading-foreground",
							children: [percent, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 text-xs text-loading-foreground/50",
								children: "%"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1 w-full overflow-hidden bg-loading-foreground/15",
						role: "progressbar",
						"aria-label": "Media loading progress",
						"aria-valuemin": 0,
						"aria-valuemax": 100,
						"aria-valuenow": percent,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "cinema-progress h-full w-full origin-left bg-primary transition-transform duration-500 motion-reduce:transition-none",
							ref: (element) => {
								element?.style.setProperty("--loading-progress", String(percent / 100));
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex justify-between text-xs tabular-nums text-loading-foreground/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							progress.settled,
							" / ",
							progress.total,
							" assets"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PICTURE · SOUND · STORY" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						className: "mt-9 text-xs text-loading-foreground/60 hover:bg-loading-foreground/10 hover:text-loading-foreground",
						onClick: () => setLeaving(true),
						children: ["Enter studio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "absolute bottom-10 text-xs text-loading-foreground/35 sm:bottom-14",
				children: "STORIES WITH A HEARTBEAT"
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "PULSO" },
			{
				name: "description",
				content: "PULSO — AI vertical microdrama production studio"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "PULSO"
			},
			{
				property: "og:description",
				content: "PULSO — AI vertical microdrama production studio"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let lenis;
		let id = 0;
		let disposed = false;
		const glide = (el) => lenis?.scrollTo(el, {
			offset: -64,
			duration: 1.6,
			easing: (t) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
		});
		const onClick = (e) => {
			if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
			const a = e.target.closest("a[href]");
			if (!a || !lenis || a.target === "_blank") return;
			let url;
			try {
				url = new URL(a.getAttribute("href") || "", window.location.origin + window.location.pathname);
			} catch {
				return;
			}
			if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
			const el = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
			if (!url.hash && url.pathname === window.location.pathname) {
				e.preventDefault();
				e.stopPropagation();
				glide(0);
				return;
			}
			if (!el) return;
			e.preventDefault();
			e.stopPropagation();
			history.pushState(history.state, "", url.pathname + url.hash);
			glide(el);
		};
		let ro;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			if (disposed) return;
			lenis = new Lenis({
				duration: 1.25,
				easing: (t) => 1 - Math.pow(1 - t, 4),
				wheelMultiplier: 1,
				touchMultiplier: 1.3,
				autoResize: true
			});
			ro = new ResizeObserver(() => lenis?.resize());
			ro.observe(document.body);
			document.addEventListener("load", () => lenis?.resize(), true);
			const loop = (t) => {
				if (disposed || !lenis) return;
				lenis.raf(t);
				id = requestAnimationFrame(loop);
			};
			id = requestAnimationFrame(loop);
		});
		window.__glide = glide;
		document.addEventListener("click", onClick, true);
		return () => {
			disposed = true;
			cancelAnimationFrame(id);
			ro?.disconnect();
			lenis?.destroy();
			document.removeEventListener("click", onClick, true);
		};
	}, []);
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		const hash = location.hash;
		window.scrollTo(0, 0);
		if (!hash) return;
		const t = setTimeout(() => {
			const el = document.getElementById(hash);
			const g = window.__glide;
			if (el && g) g(el);
			else el?.scrollIntoView({ behavior: "smooth" });
		}, 120);
		return () => clearTimeout(t);
	}, [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLoading, {})
		]
	});
}
var $$splitComponentImporter$1 = () => import("./routes-BkJ2u3UE.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "PULSO — AI Microdrama Production" },
		{
			name: "description",
			content: "PULSO produces cinematic vertical microdramas at the speed of AI."
		},
		{
			property: "og:title",
			content: "PULSO — AI Microdrama Production"
		},
		{
			property: "og:description",
			content: "PULSO produces cinematic vertical microdramas at the speed of AI."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./faq-DDN-QBL1.mjs");
var Route = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — PULSO AI Production Studio" },
		{
			name: "description",
			content: "Answers to common questions about PULSO's AI microdrama production, timelines, characters, delivery, and ownership."
		},
		{
			property: "og:title",
			content: "FAQ — PULSO AI Production Studio"
		},
		{
			property: "og:description",
			content: "Explore how PULSO produces vertical microdramas, from scripts and characters to final delivery."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	FaqRoute: Route.update({
		id: "/faq",
		path: "/faq",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-13T01:55:59.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1abf-27OO47sThPVr8IGXudGM+W1mps8\"",
		"mtime": "2026-11-13T01:55:59.000Z",
		"size": 6847,
		"path": "../public/favicon.png"
	},
	"/assets/faq-37WHWqX5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af6-AGegsFsxBTE9GI3iYfP8dF0Z8O8\"",
		"mtime": "2026-11-15T02:17:43.672Z",
		"size": 2806,
		"path": "../public/assets/faq-37WHWqX5.js"
	},
	"/assets/index-fOJvfYOR.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1c9-5MNtFTU6H5x6R/lcSKFEhFi3z2s\"",
		"mtime": "2026-11-15T02:17:43.692Z",
		"size": 457,
		"path": "../public/assets/index-fOJvfYOR.css"
	},
	"/assets/lenis-Urn-SVCX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"490d-zKrU4HpUm8qxLPwUw1LQY2gTBZc\"",
		"mtime": "2026-11-15T02:17:43.673Z",
		"size": 18701,
		"path": "../public/assets/lenis-Urn-SVCX.js"
	},
	"/assets/pulso-logo-DxP_8BNu.png": {
		"type": "image/png",
		"etag": "\"10cac-56BL3fRCXSqwqHfg3MTH3nke864\"",
		"mtime": "2026-11-15T02:17:43.698Z",
		"size": 68780,
		"path": "../public/assets/pulso-logo-DxP_8BNu.png"
	},
	"/assets/pulso-symbol-Bg0qTZaE.png": {
		"type": "image/png",
		"etag": "\"9627-UeoRkJlbhRUAspZqVByhb53iwgs\"",
		"mtime": "2026-11-15T02:17:43.698Z",
		"size": 38439,
		"path": "../public/assets/pulso-symbol-Bg0qTZaE.png"
	},
	"/assets/index-CCOsmNiD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b346-eCCNNeCHpEfQxzxtp7m0T8ItzX4\"",
		"mtime": "2026-11-15T02:17:43.672Z",
		"size": 635718,
		"path": "../public/assets/index-CCOsmNiD.js"
	},
	"/assets/routes-CHTabRiR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"51e0-asLj5r0fMXBqakio3lxDkEXKBS0\"",
		"mtime": "2026-11-15T02:17:43.674Z",
		"size": 20960,
		"path": "../public/assets/routes-CHTabRiR.js"
	},
	"/assets/styles-d14L4OI-.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15209-/SlktUAigUdxp16++rFbFwQQTPE\"",
		"mtime": "2026-11-15T02:17:43.699Z",
		"size": 86537,
		"path": "../public/assets/styles-d14L4OI-.css"
	},
	"/assets/contact-background-BPQsmEio.png": {
		"type": "image/png",
		"etag": "\"198d5a-OVTRkqKXHYdPT8D60VV8Fz7m1oY\"",
		"mtime": "2026-11-15T02:17:43.678Z",
		"size": 1674586,
		"path": "../public/assets/contact-background-BPQsmEio.png"
	},
	"/assets/hero-background-D1i1wW-S.png": {
		"type": "image/png",
		"etag": "\"1cb76a-b59y29XOhwPFc4Qzf8OEY/Hzjp0\"",
		"mtime": "2026-11-15T02:17:43.679Z",
		"size": 1881962,
		"path": "../public/assets/hero-background-D1i1wW-S.png"
	},
	"/assets/process-bg-3-CaT50qN6.png": {
		"type": "image/png",
		"etag": "\"1f9458-QdTX/RkguLB/9qk6DTXDs1fkB5A\"",
		"mtime": "2026-11-15T02:17:43.695Z",
		"size": 2069592,
		"path": "../public/assets/process-bg-3-CaT50qN6.png"
	},
	"/assets/process-bg-2-De00kNKI.png": {
		"type": "image/png",
		"etag": "\"1f4624-sbe52L61BBrXNPv7Fdl5deRL2Is\"",
		"mtime": "2026-11-15T02:17:43.693Z",
		"size": 2049572,
		"path": "../public/assets/process-bg-2-De00kNKI.png"
	},
	"/assets/process-bg-4-BJUPoLZP.png": {
		"type": "image/png",
		"etag": "\"268533-aV4N4aJFBeAY46UvFMrL9yPoDhg\"",
		"mtime": "2026-11-15T02:17:43.697Z",
		"size": 2524467,
		"path": "../public/assets/process-bg-4-BJUPoLZP.png"
	},
	"/assets/process-bg-5-NNeENJHl.png": {
		"type": "image/png",
		"etag": "\"275cf0-pB8ZxqMZ5MVKpFH1aX1fj+TTiMk\"",
		"mtime": "2026-11-15T02:17:43.698Z",
		"size": 2579696,
		"path": "../public/assets/process-bg-5-NNeENJHl.png"
	},
	"/assets/services-background-Dv4EN3nd.png": {
		"type": "image/png",
		"etag": "\"1b11b2-Ym7ogC2qE5UuSVTcKbk8NKS5VNM\"",
		"mtime": "2026-11-15T02:17:43.699Z",
		"size": 1774002,
		"path": "../public/assets/services-background-Dv4EN3nd.png"
	},
	"/assets/process-bg-1-qlh3KAjE.png": {
		"type": "image/png",
		"etag": "\"2a5adc-YnWRUIWwnN9+dChr3gd8d4WlZ5M\"",
		"mtime": "2026-11-15T02:17:43.693Z",
		"size": 2775772,
		"path": "../public/assets/process-bg-1-qlh3KAjE.png"
	},
	"/assets/hero_clip_4-dMW_udNF.mp4": {
		"type": "video/mp4",
		"etag": "\"6803bc-6twIaEs34UNBrbmhbw5Hgg6f8cs\"",
		"mtime": "2026-11-15T02:17:43.686Z",
		"size": 6816700,
		"path": "../public/assets/hero_clip_4-dMW_udNF.mp4"
	},
	"/assets/hero_clip_3-BwlrXfBO.mp4": {
		"type": "video/mp4",
		"etag": "\"7c9e83-eHeVLlKq9qjFlXVAbT7jRt7SUaA\"",
		"mtime": "2026-11-15T02:17:43.684Z",
		"size": 8167043,
		"path": "../public/assets/hero_clip_3-BwlrXfBO.mp4"
	},
	"/assets/hero_clip_2-DCm0XYKa.mp4": {
		"type": "video/mp4",
		"etag": "\"87a999-CPmr6K2M0bZj+IQ84p98GjAQ2/s\"",
		"mtime": "2026-11-15T02:17:43.682Z",
		"size": 8890777,
		"path": "../public/assets/hero_clip_2-DCm0XYKa.mp4"
	},
	"/assets/hero_intro-i_hAKMYi.mp4": {
		"type": "video/mp4",
		"etag": "\"9c0be2-7p7yDtTFVk7m55Tf3reJkj2kBwE\"",
		"mtime": "2026-11-15T02:17:43.692Z",
		"size": 10226658,
		"path": "../public/assets/hero_intro-i_hAKMYi.mp4"
	},
	"/assets/hero_clip_5-BLmogWTC.mp4": {
		"type": "video/mp4",
		"etag": "\"c85c14-vfb/p5zR0HubUQ9RbvcPD7HoaZ8\"",
		"mtime": "2026-11-15T02:17:43.690Z",
		"size": 13130772,
		"path": "../public/assets/hero_clip_5-BLmogWTC.mp4"
	},
	"/assets/about_background-CSyv-FOX.mp4": {
		"type": "video/mp4",
		"etag": "\"bf122b-PgoP0ow+W6bABujSQZF3v9ILoQI\"",
		"mtime": "2026-11-15T02:17:43.677Z",
		"size": 12522027,
		"path": "../public/assets/about_background-CSyv-FOX.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_UegFyp = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_UegFyp
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

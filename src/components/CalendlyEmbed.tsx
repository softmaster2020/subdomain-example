import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/pulso-logo.png.asset.json";

export const CALENDLY_URL = "https://calendly.com/nova2026p/30min";

export function CalendlyEmbed() {
  const [embedUrl, setEmbedUrl] = useState<string>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const url = new URL(CALENDLY_URL);
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("hide_event_type_details", "1");
    url.searchParams.set("embed_domain", window.location.hostname);
    url.searchParams.set("embed_type", "Inline");
    setEmbedUrl(url.toString());
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-xl shadow-primary/5">
      <div className="flex flex-wrap items-center justify-between gap-5 border-b px-5 py-6 text-left sm:px-8">
        <div className="flex items-center gap-4">
          <img src={logo.url} alt="PULSO Studios logo" className="h-20 w-24 shrink-0 object-contain" />
          <div>
            <p className="text-xs font-bold text-muted-foreground">PULSO</p>
            <h3 className="mt-1 text-xl font-bold">Book a demo</h3>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-primary" />30 minutes</span>
          <CalendarDays className="size-5 text-primary" aria-hidden="true" />
        </div>
      </div>
      <div className="relative h-[760px] sm:h-[680px]">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 text-sm text-muted-foreground" role="status">
            <LoaderCircle className="size-5 animate-spin motion-reduce:animate-none" />
            Loading calendar…
          </div>
        )}
        {embedUrl && (
          <iframe
            title="Book a demo with PULSO"
            src={embedUrl}
            className={`relative h-full w-full border-0 bg-card transition-opacity motion-reduce:transition-none ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
          />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t px-5 py-3 sm:px-8">
        <span className="text-xs text-muted-foreground">Powered by Calendly</span>
        <Button asChild variant="ghost" size="sm">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Open in Calendly<ArrowUpRight /></a>
        </Button>
      </div>
    </div>
  );
}

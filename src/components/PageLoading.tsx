import { useEffect, useState } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { ArrowRight, Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackPageMedia, type MediaProgress } from '@/lib/media-loading';

export function PageLoading() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <MediaLoadingScreen key={pathname} />;
}

function MediaLoadingScreen() {
  const [progress, setProgress] = useState<MediaProgress>({ total: 0, settled: 0, failed: 0 });
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [slow, setSlow] = useState(false);
  const percent = progress.total ? Math.floor(progress.settled / progress.total * 100) : 0;

  useEffect(() => {
    let completion: ReturnType<typeof setTimeout> | undefined;
    const cleanup = trackPageMedia(document.body, (next) => {
      setProgress(next);
      if (next.settled === next.total) {
        completion = setTimeout(() => setLeaving(true), 350);
      }
    });
    const slowTimer = setTimeout(() => setSlow(true), 8000);
    // A provider or an unavailable movie must never trap visitors behind the screen.
    const deadline = setTimeout(() => setLeaving(true), 15000);
    return () => {
      cleanup();
      clearTimeout(completion);
      clearTimeout(slowTimer);
      clearTimeout(deadline);
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const timer = setTimeout(() => setVisible(false), 450);
    return () => clearTimeout(timer);
  }, [leaving]);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [visible]);

  if (!visible) return null;
  return (
    <div className={`cinema-loading fixed inset-0 z-[100] flex items-center justify-center bg-loading-background px-6 font-sans text-loading-foreground transition-opacity duration-[450ms] motion-reduce:transition-none ${leaving ? 'pointer-events-none opacity-0' : 'opacity-100'}`} aria-label="Page loading">
      <div className="cinema-frame absolute inset-5 border border-loading-foreground/15 sm:inset-8" aria-hidden="true" />
      <span className="absolute left-10 top-10 text-xs font-bold text-loading-foreground/50 sm:left-14 sm:top-14">PULSO STUDIOS</span>
      <span className="absolute right-10 top-10 flex items-center gap-2 text-xs text-loading-foreground/50 sm:right-14 sm:top-14"><span className="size-1.5 rounded-full bg-primary motion-safe:animate-pulse" /> ON AIR</span>
      <div className="relative w-full max-w-md text-center">
        <Clapperboard className="mx-auto mb-6 size-10 text-primary" strokeWidth={1.3} aria-hidden="true" />
        <p className="text-5xl font-extrabold sm:text-6xl">PULSO<span className="text-primary">.</span></p>
        <p className="mt-4 text-sm text-loading-foreground/60" role="status" aria-live="polite">{slow ? 'A few frames are taking longer…' : percent === 100 ? 'Ready for the spotlight.' : 'Setting the scene…'}</p>
        <div className="mt-10 flex items-end justify-between text-xs text-loading-foreground/50">
          <span>LOADING MEDIA</span>
          <span className="text-2xl font-medium tabular-nums text-loading-foreground">{percent}<span className="ml-1 text-xs text-loading-foreground/50">%</span></span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden bg-loading-foreground/15" role="progressbar" aria-label="Media loading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
          <div className="cinema-progress h-full w-full origin-left bg-primary transition-transform duration-500 motion-reduce:transition-none" ref={(element) => { element?.style.setProperty('--loading-progress', String(percent / 100)); }} />
        </div>
        <div className="mt-3 flex justify-between text-xs tabular-nums text-loading-foreground/40"><span>{progress.settled} / {progress.total} assets</span><span>PICTURE · SOUND · STORY</span></div>
        <Button variant="ghost" className="mt-9 text-xs text-loading-foreground/60 hover:bg-loading-foreground/10 hover:text-loading-foreground" onClick={() => setLeaving(true)}>Enter studio <ArrowRight className="size-3" /></Button>
      </div>
      <p className="absolute bottom-10 text-xs text-loading-foreground/35 sm:bottom-14">STORIES WITH A HEARTBEAT</p>
    </div>
  );
}
export type MediaProgress = { total: number; settled: number; failed: number };

/** Track unique images and playable video frames, rather than download byte estimates. */
export function trackPageMedia(root: ParentNode, onProgress: (progress: MediaProgress) => void) {
  const images = new Set<string>();
  const videos = new Map<string, HTMLVideoElement>();
  root.querySelectorAll<HTMLImageElement>('img').forEach((image) => {
    if (image.currentSrc || image.src) images.add(image.currentSrc || image.src);
  });
  root.querySelectorAll<HTMLVideoElement>('video').forEach((video) => {
    const src = video.currentSrc || video.src;
    if (src && !videos.has(src)) videos.set(src, video);
  });
  root.querySelectorAll<HTMLElement>('*').forEach((element) => {
    const background = getComputedStyle(element).backgroundImage;
    for (const match of background.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
      const src = match[1];
      if (src) images.add(new URL(src, document.baseURI).href);
    }
  });

  const progress: MediaProgress = { total: images.size + videos.size, settled: 0, failed: 0 };
  const cleanups: (() => void)[] = [];
  let disposed = false;
  const publish = () => { if (!disposed) onProgress({ ...progress }); };
  const watch = (element: HTMLImageElement | HTMLVideoElement, event: string) => {
    let settled = false;
    const finish = (failed: boolean) => {
      if (settled || disposed) return;
      settled = true;
      progress.settled += 1;
      if (failed) progress.failed += 1;
      publish();
    };
    const ready = () => finish(false);
    const error = () => finish(true);
    element.addEventListener(event, ready);
    element.addEventListener('error', error);
    cleanups.push(() => {
      element.removeEventListener(event, ready);
      element.removeEventListener('error', error);
    });
    return finish;
  };

  publish();
  images.forEach((src) => {
    const image = new Image();
    const finish = watch(image, 'load');
    image.src = src;
    if (image.complete) finish(image.naturalWidth === 0);
  });
  videos.forEach((video) => {
    const finish = watch(video, 'loadeddata');
    if (video.error) finish(true);
    else if (video.readyState >= 2) finish(false);
    else video.preload = 'auto';
  });
  return () => { disposed = true; cleanups.forEach((cleanup) => cleanup()); };
}
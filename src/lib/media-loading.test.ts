import { afterEach, describe, expect, it, vi } from 'vitest';
import { trackPageMedia, type MediaProgress } from './media-loading';

afterEach(() => { document.body.innerHTML = ''; vi.unstubAllGlobals(); });

describe('page media loading', () => {
  it('counts repeated movie-strip sources once and waits for a playable frame', () => {
    document.body.innerHTML = '<video src="/intro.mp4"></video><video src="/intro.mp4"></video><video src="/about.mp4"></video>';
    const updates: MediaProgress[] = [];
    const cleanup = trackPageMedia(document.body, (progress) => updates.push(progress));
    expect(updates.at(-1)).toEqual({ total: 2, settled: 0, failed: 0 });
    const videos = document.querySelectorAll('video');
    videos[0]?.dispatchEvent(new Event('loadedmetadata'));
    expect(updates.at(-1)?.settled).toBe(0);
    videos[0]?.dispatchEvent(new Event('loadeddata'));
    expect(updates.at(-1)?.settled).toBe(1);
    videos[0]?.dispatchEvent(new Event('loadeddata'));
    expect(updates.at(-1)?.settled).toBe(1);
    videos[2]?.dispatchEvent(new Event('loadeddata'));
    expect(updates.at(-1)).toEqual({ total: 2, settled: 2, failed: 0 });
    cleanup();
  });

  it('settles unavailable media and detaches listeners on disposal', () => {
    document.body.innerHTML = '<video src="/missing.mp4"></video><video src="/next.mp4"></video>';
    const updates: MediaProgress[] = [];
    const cleanup = trackPageMedia(document.body, (progress) => updates.push(progress));
    document.querySelector('video')?.dispatchEvent(new Event('error'));
    expect(updates.at(-1)).toEqual({ total: 2, settled: 1, failed: 1 });
    cleanup();
    document.querySelectorAll('video')[1]?.dispatchEvent(new Event('loadeddata'));
    expect(updates.at(-1)?.settled).toBe(1);
  });

  it('tracks background images and regular images without counting duplicates', () => {
    document.body.innerHTML = '<img src="/set.jpg"><div style="background-image: url(/set.jpg)"></div><div style="background-image: url(/other.jpg)"></div>';
    const images: HTMLImageElement[] = [];
    vi.stubGlobal('Image', function () {
      const image = document.createElement('img');
      images.push(image);
      return image;
    });
    const updates: MediaProgress[] = [];
    const cleanup = trackPageMedia(document.body, (progress) => updates.push(progress));
    expect(updates.at(-1)?.total).toBe(2);
    images[0]?.dispatchEvent(new Event('load'));
    expect(updates.at(-1)?.settled).toBe(1);
    images[1]?.dispatchEvent(new Event('load'));
    expect(updates.at(-1)?.settled).toBe(2);
    cleanup();
  });
});
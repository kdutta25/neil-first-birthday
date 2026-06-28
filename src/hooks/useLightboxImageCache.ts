import { useEffect, useRef, useState } from "react";
import { fullPhotoUrl } from "../utils/photos";
import {
  getBlobCacheEntry,
  initialBlobCacheEntry,
  preloadFullImage,
  retainBlobCacheUrls,
  subscribeBlobCache,
  type BlobCacheEntry,
} from "../utils/lightboxBlobCache";

export type ImageLoadState = BlobCacheEntry;

function getAdjacentUrls(photos: string[], index: number): string[] {
  const urls: string[] = [];
  if (index > 0) {
    urls.push(fullPhotoUrl(photos[index - 1]));
  }
  urls.push(fullPhotoUrl(photos[index]));
  if (index < photos.length - 1) {
    urls.push(fullPhotoUrl(photos[index + 1]));
  }
  return urls;
}

/**
 * Loads the current lightbox image with progress and preloads previous/next
 * full-size photos so arrow, keyboard, and swipe navigation feel instant.
 */
export function useLightboxImageCache(
  photos: string[],
  index: number,
): ImageLoadState {
  const currentUrlRef = useRef<string | null>(null);
  const [currentState, setCurrentState] =
    useState<ImageLoadState>(initialBlobCacheEntry);

  useEffect(() => {
    const current = photos[index];
    if (!current) {
      currentUrlRef.current = null;
      setCurrentState(initialBlobCacheEntry);
      return;
    }

    const currentUrl = fullPhotoUrl(current);
    currentUrlRef.current = currentUrl;
    const keep = new Set(getAdjacentUrls(photos, index));
    retainBlobCacheUrls(keep);

    const cached = getBlobCacheEntry(currentUrl);
    setCurrentState(cached ?? initialBlobCacheEntry);

    const unsubscribe = subscribeBlobCache(currentUrl, (entry) => {
      if (currentUrlRef.current === currentUrl) {
        setCurrentState(entry);
      }
    });

    const cancel = preloadFullImage(currentUrl, true);

    return () => {
      currentUrlRef.current = null;
      cancel();
      unsubscribe();
    };
  }, [photos, index]);

  return currentState;
}

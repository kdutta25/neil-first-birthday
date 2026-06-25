export const GALLERY_BATCH_SIZE = 20;

export type PhotoManifest = {
  photos: string[];
};

const albumBase = `${import.meta.env.BASE_URL}album`;

const manifestUrl = `${albumBase}/manifest.json`;

export async function loadPhotos(): Promise<string[]> {
  try {
    const response = await fetch(manifestUrl);
    if (!response.ok) return [];
    const data = (await response.json()) as PhotoManifest;
    return data.photos ?? [];
  } catch {
    return [];
  }
}

/** Full-size image for the lightbox. */
export function fullPhotoUrl(filename: string): string {
  return `${albumBase}/full/${filename}`;
}

/** WebP thumbnail for the grid (generated at build time). */
export function thumbPhotoUrl(filename: string): string {
  const webpName = filename.replace(/\.[^.]+$/i, ".webp");
  return `${albumBase}/thumbs/${webpName}`;
}

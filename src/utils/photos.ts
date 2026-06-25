export const GALLERY_BATCH_SIZE = 20;

export type PhotoManifest = {
  photos: string[];
};

const manifestUrl = `${import.meta.env.BASE_URL}album/manifest.json`;

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

export function photoUrl(filename: string): string {
  return `${import.meta.env.BASE_URL}album/${filename}`;
}

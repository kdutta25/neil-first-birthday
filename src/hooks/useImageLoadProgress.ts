import { useEffect, useRef, useState } from "react";

type ImageLoadState = {
  objectUrl: string | null;
  progress: number;
  ready: boolean;
  error: boolean;
};

const initialState: ImageLoadState = {
  objectUrl: null,
  progress: 0,
  ready: false,
  error: false,
};

/**
 * Loads an image with XMLHttpRequest so byte progress can be reported when
 * Content-Length is available (static album files on GitHub Pages).
 */
export function useImageLoadProgress(url: string | null): ImageLoadState {
  const [state, setState] = useState<ImageLoadState>(initialState);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!url) {
      setState(initialState);
      return;
    }

    let cancelled = false;
    const xhr = new XMLHttpRequest();

    setState({
      objectUrl: null,
      progress: 0,
      ready: false,
      error: false,
    });

    xhr.open("GET", url);
    xhr.responseType = "blob";

    xhr.onprogress = (event) => {
      if (cancelled || !event.lengthComputable) {
        return;
      }
      const progress = Math.min(
        99,
        Math.round((event.loaded / event.total) * 100),
      );
      setState((current) =>
        current.ready ? current : { ...current, progress },
      );
    };

    xhr.onload = () => {
      if (cancelled) {
        return;
      }
      if (xhr.status >= 200 && xhr.status < 300) {
        const nextObjectUrl = URL.createObjectURL(xhr.response);
        objectUrlRef.current = nextObjectUrl;
        setState({
          objectUrl: nextObjectUrl,
          progress: 100,
          ready: true,
          error: false,
        });
        return;
      }
      setState((current) => ({ ...current, error: true }));
    };

    xhr.onerror = () => {
      if (!cancelled) {
        setState((current) => ({ ...current, error: true }));
      }
    };

    xhr.send();

    return () => {
      cancelled = true;
      xhr.abort();
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    };
  }, [url]);

  return state;
}

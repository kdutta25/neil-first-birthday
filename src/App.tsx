import { useEffect, useState } from "react";
import styledWithConfig from "./utils/styledWithConfig";
import { SkyDecorations } from "./components/SkyDecorations";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { PreferencesBar } from "./components/PreferencesBar";
import { SiteFooter } from "./components/SiteFooter";
import { loadPhotos } from "./utils/photos";

const Page = styledWithConfig("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 24px 20px 48px;
  min-height: 100%;
`;

const Shell = styledWithConfig("div")`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export default function App() {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    void loadPhotos().then(setPhotos);
  }, []);

  return (
    <Page data-component-id="Page">
      <SkyDecorations />
      <Shell data-component-id="Shell">
        <PreferencesBar />
        <Hero />
        <Gallery photos={photos} />
        <SiteFooter />
      </Shell>
    </Page>
  );
}

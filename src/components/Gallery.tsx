import { PhotoProvider, PhotoView } from "react-photo-view";
import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import { photoUrl } from "../utils/photos";

const Section = styledWithConfig("section")`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  padding: 0 4px 8px;
  text-align: left;
`;

const Heading = styledWithConfig("h2")`
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 6px;
`;

const Subheading = styledWithConfig("p")`
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 15px;
`;

const Grid = styledWithConfig("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
`;

const Item = styledWithConfig("div")`
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 1;
  box-shadow: 0 10px 24px -14px var(--gallery-shadow);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: zoom-in;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 30px -12px var(--gallery-shadow);
  }
`;

const Thumb = styledWithConfig("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const EmptyState = styledWithConfig("p")`
  text-align: center;
  color: var(--muted);
  font-size: 15px;
  padding: 24px 12px;
  border: 1px dashed var(--gallery-empty-border);
  border-radius: 16px;
  background: var(--gallery-empty-bg);
`;

const ViewerCaption = styledWithConfig("p")`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  margin: 0;
  pointer-events: none;
`;

type GalleryProps = {
  photos: string[];
};

export function Gallery({ photos }: GalleryProps) {
  const { t } = useI18n();

  return (
    <Section data-component-id="Gallery" aria-label={t("galleryHeading")}>
      <Heading data-component-id="GalleryHeading">{t("galleryHeading")}</Heading>
      <Subheading data-component-id="GallerySubheading">
        {t("gallerySub")}
      </Subheading>

      {photos.length === 0 ? (
        <EmptyState data-component-id="GalleryEmpty">
          {t("galleryEmpty")}
        </EmptyState>
      ) : (
        <PhotoProvider
          loop
          maskClosable
          pullClosable
          overlayRender={({ index, images }) => (
            <ViewerCaption data-component-id="GalleryViewerCaption">
              {t("birthdayPhoto", { n: index + 1, total: images.length })}
            </ViewerCaption>
          )}
        >
          <Grid data-component-id="GalleryGrid">
            {photos.map((filename, index) => {
              const src = photoUrl(filename);

              return (
                <Item key={filename} data-component-id="GalleryItem">
                  <PhotoView src={src}>
                    <Thumb
                      data-component-id="GalleryThumb"
                      src={src}
                      alt={t("photoAlt", { n: index + 1 })}
                      loading="lazy"
                      decoding="async"
                    />
                  </PhotoView>
                </Item>
              );
            })}
          </Grid>
        </PhotoProvider>
      )}
    </Section>
  );
}

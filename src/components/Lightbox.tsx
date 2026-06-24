import { useEffect } from "react";
import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import { photoUrl } from "../utils/photos";

const Overlay = styledWithConfig("div")`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: var(--lightbox-bg);
`;

const Photo = styledWithConfig("img")`
  max-width: min(100%, 1100px);
  max-height: 88vh;
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
`;

const CloseButton = styledWithConfig("button")`
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(8px);
`;

const NavButton = styledWithConfig("button")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(8px);
`;

const PrevButton = styledWithConfig(NavButton)`
  left: 18px;
`;

const NextButton = styledWithConfig(NavButton)`
  right: 18px;
`;

const Caption = styledWithConfig("p")`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  margin: 0;
`;

type LightboxProps = {
  photos: string[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
  const { t } = useI18n();
  const current = photos[index];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && index > 0) onChange(index - 1);
      if (event.key === "ArrowRight" && index < photos.length - 1) {
        onChange(index + 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, onChange, onClose, photos.length]);

  if (!current) return null;

  return (
    <Overlay
      data-component-id="Lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={t("lightboxLabel")}
      onClick={onClose}
    >
      <CloseButton
        data-component-id="LightboxClose"
        type="button"
        aria-label={t("close")}
        onClick={onClose}
      >
        ×
      </CloseButton>

      {index > 0 ? (
        <PrevButton
          data-component-id="LightboxPrev"
          type="button"
          aria-label={t("previousPhoto")}
          onClick={(event) => {
            event.stopPropagation();
            onChange(index - 1);
          }}
        >
          ‹
        </PrevButton>
      ) : null}

      <Photo
        data-component-id="LightboxPhoto"
        src={photoUrl(current)}
        alt={t("birthdayPhoto", { n: index + 1, total: photos.length })}
        onClick={(event) => event.stopPropagation()}
      />

      {index < photos.length - 1 ? (
        <NextButton
          data-component-id="LightboxNext"
          type="button"
          aria-label={t("nextPhoto")}
          onClick={(event) => {
            event.stopPropagation();
            onChange(index + 1);
          }}
        >
          ›
        </NextButton>
      ) : null}

      <Caption data-component-id="LightboxCaption">
        {t("birthdayPhoto", { n: index + 1, total: photos.length })}
      </Caption>
    </Overlay>
  );
}

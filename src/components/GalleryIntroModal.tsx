import { useEffect } from "react";
import styledWithConfig, { keyframes } from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import { OTTAWA_MISSION_FUNDRAISER_URL } from "../constants/donationLinks";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Backdrop = styledWithConfig("div")`
  position: fixed;
  inset: 0;
  z-index: 90;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0;
  background: rgba(20, 14, 10, 0.55);
  backdrop-filter: blur(4px);
`;

const Panel = styledWithConfig("aside")`
  display: flex;
  flex-direction: column;
  width: min(100%, 420px);
  max-height: 100%;
  overflow-y: auto;
  padding: 28px 24px 32px;
  background: var(--card);
  border-right: 1px solid var(--card-border);
  box-shadow: 24px 0 60px -20px var(--card-shadow);
  animation: ${slideIn} 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const CloseButton = styledWithConfig("button")`
  align-self: flex-end;
  border: none;
  background: var(--pref-control-bg);
  color: var(--muted);
  width: 40px;
  height: 40px;
  border-radius: 999px;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  border: 1px solid var(--pref-border);
  margin-bottom: 8px;

  &:hover {
    color: var(--ink);
  }
`;

const Badge = styledWithConfig("p")`
  display: inline-flex;
  align-self: flex-start;
  margin: 0 0 14px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(196, 160, 106, 0.18);
  color: var(--accent-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Title = styledWithConfig("h2")`
  margin: 0 0 14px;
  font-size: clamp(24px, 5vw, 30px);
  line-height: 1.15;
  color: var(--ink);
`;

const Body = styledWithConfig("p")`
  margin: 0 0 12px;
  font-size: 16px;
  line-height: 1.65;
  color: var(--muted);
`;

const Highlight = styledWithConfig("p")`
  margin: 0 0 24px;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid var(--pref-border);
  background: var(--pref-bg);
  font-size: 15px;
  line-height: 1.55;
  color: var(--ink);
  font-weight: 600;
`;

const Actions = styledWithConfig("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
`;

const PrimaryButton = styledWithConfig("a")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent-dark), var(--accent));
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 12px 28px -14px var(--gallery-shadow);

  &:hover {
    filter: brightness(1.05);
  }
`;

const SecondaryButton = styledWithConfig("button")`
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid var(--pref-border);
  background: var(--pref-control-bg);
  color: var(--ink);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border-color: var(--accent);
  }
`;

type GalleryIntroModalProps = {
  onContinue: () => void;
};

export function GalleryIntroModal({ onContinue }: GalleryIntroModalProps) {
  const { t } = useI18n();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onContinue();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onContinue]);

  return (
    <Backdrop
      data-component-id="GalleryIntroBackdrop"
      role="presentation"
      onClick={onContinue}
    >
      <Panel
        data-component-id="GalleryIntroModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-intro-title"
        onClick={(event) => event.stopPropagation()}
      >
        <CloseButton
          type="button"
          data-component-id="GalleryIntroClose"
          aria-label={t("galleryIntroClose")}
          onClick={onContinue}
        >
          ×
        </CloseButton>
        <Badge data-component-id="GalleryIntroBadge">{t("galleryIntroBadge")}</Badge>
        <Title id="gallery-intro-title" data-component-id="GalleryIntroTitle">
          {t("galleryIntroTitle")}
        </Title>
        <Body data-component-id="GalleryIntroBody">{t("galleryIntroBody")}</Body>
        <Highlight data-component-id="GalleryIntroHighlight">
          {t("galleryIntroHighlight")}
        </Highlight>
        <Actions data-component-id="GalleryIntroActions">
          <PrimaryButton
            data-component-id="GalleryIntroDonate"
            href={OTTAWA_MISSION_FUNDRAISER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("galleryIntroDonate")}
          </PrimaryButton>
          <SecondaryButton
            type="button"
            data-component-id="GalleryIntroContinue"
            onClick={onContinue}
          >
            {t("galleryIntroContinue")}
          </SecondaryButton>
        </Actions>
      </Panel>
    </Backdrop>
  );
}

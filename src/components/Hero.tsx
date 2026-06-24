import styledWithConfig from "../utils/styledWithConfig";
import { useI18n } from "../i18n/I18nContext";
import { rise } from "../theme/GlobalStyle";
import heroImage from "../assets/hero.png";

const HeroCard = styledWithConfig("header")`
  display: flex;
  flex-direction: column;
  background: var(--card);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid var(--card-border);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 30px 70px -25px var(--card-shadow);
  animation: ${rise} 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HeroBanner = styledWithConfig("img")`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-bottom: 4px solid var(--hero-border);
`;

const CardBody = styledWithConfig("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 28px 36px;
  text-align: center;
`;

const Emoji = styledWithConfig("span")`
  font-size: 42px;
  line-height: 1;
  margin: -48px 0 4px;
  display: block;
`;

const Kicker = styledWithConfig("p")`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  font-weight: 700;
  color: var(--accent-dark);
  margin: 0 0 12px;
`;

const Lead = styledWithConfig("p")`
  font-size: 17px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
  max-width: 48ch;
`;

export function Hero() {
  const { t } = useI18n();

  return (
    <HeroCard data-component-id="Hero">
      <HeroBanner
        data-component-id="HeroBanner"
        src={heroImage}
        alt={t("heroAlt")}
      />
      <CardBody data-component-id="HeroBody">
        <Emoji data-component-id="HeroEmoji" aria-hidden="true">
          🎈
        </Emoji>
        <Kicker data-component-id="HeroKicker">{t("kicker")}</Kicker>
        <Lead data-component-id="HeroLead">{t("lead")}</Lead>
      </CardBody>
    </HeroCard>
  );
}

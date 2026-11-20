import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../i18n/LanguageContext";
import "./ChiSiamo.css";

const SLIDES = [
  "img_5396",
  "img_5231",
  "img_5410",
  "img_5414",
  "img_5426",
  "img_5449",
].map((name) => `${import.meta.env.BASE_URL}images/galleria/${name}.jpg`);

const SLIDE_INTERVAL = 2500;

export default function ChiSiamo() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [current]);

  const goTo = (step) =>
    setCurrent((i) => (i + step + SLIDES.length) % SLIDES.length);

  return (
    <section id="chi-siamo" className="section section--cream">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header ${headerVisible ? "is-visible" : ""}`}
        >
          <span className="section-tag">{t("chiSiamo.tag")}</span>
          <h2 className="section-title">{t("chiSiamo.title")}</h2>
          <div className="section-divider-line"></div>
        </div>

        <div className="chi-siamo-grid">
          <div
            ref={contentRef}
            className={`chi-siamo-text ${contentVisible ? "is-visible" : ""}`}
          >
            <p className="text-lead">
              {t("chiSiamo.lead")[0]}
              <strong>{t("chiSiamo.lead")[1]}</strong>
              {t("chiSiamo.lead")[2]}
            </p>
            <p>{t("chiSiamo.p1")}</p>
            <p>{t("chiSiamo.p2")}</p>
          </div>

          <div
            ref={imageRef}
            className={`chi-siamo-image ${imageVisible ? "is-visible" : ""}`}
          >
            <div className="image-frame image-slider">
              {SLIDES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={i === current ? t("chiSiamo.imgAlt") : ""}
                  aria-hidden={i !== current}
                  className={`slide ${i === current ? "is-active" : ""}`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="image-frame-accent"></div>
              <button
                type="button"
                className="slider-arrow slider-arrow--prev"
                onClick={() => goTo(-1)}
                aria-label={t("chiSiamo.prevPhoto")}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="slider-arrow slider-arrow--next"
                onClick={() => goTo(1)}
                aria-label={t("chiSiamo.nextPhoto")}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

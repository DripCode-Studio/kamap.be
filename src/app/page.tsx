"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LockKeyhole,
} from "lucide-react";
import { translations } from "@/lib/translations";

const slides = [
  {
    background: "/assets/hero/backgrounds/slide-1.webp",
    images: [
      "/assets/hero/social/slide-1/teambrussels.jpg",
      "/assets/hero/social/slide-1/beball.jpg",
      "/assets/hero/social/slide-1/teambrussels-3x3.jpg",
    ],
  },
  {
    background: "/assets/hero/backgrounds/slide-2.jpg",
    images: [
      "/assets/hero/social/slide-2/b-sthenos.jpg",
      "/assets/hero/social/slide-2/noah-swc.jpg",
      "/assets/hero/social/slide-2/barbenders-belgium.jpg",
    ],
  },
  {
    background: "/assets/hero/backgrounds/slide-3.jpg",
    images: [
      "/assets/hero/social/slide-3/rising-stars.jpg",
      "/assets/hero/social/slide-3/balcax-djrider.jpg",
      "/assets/hero/social/slide-3/golyvalent.jpg",
    ],
  },
];

const cards = [
  {
    number: "1. QUALITÉ",
    title: "Carte",
    description:
      "Le sport n'a jamais été aussi facile à trouver, la découverte devient instinctive.",
    image: "/assets/cards/card-1/image.webp",
    background: "/assets/cards/card-1/background.webp",
    icon: "/assets/logos/marks/mark-1.png",
    text: "Les Nomades\nrepèrent les opportunités",
    quote:
      "Chaque spot certifié passe par un/une Nomade avec une vision d'aigle.",
    available: true,
  },
  {
    number: "2. ADAPTABILITÉ",
    title: "Workflow route",
    description:
      "Note & crée facilement des plannings/documents pour transformer les objectifs en cible.",
    image: "/assets/cards/card-2/image.webp",
    background: "/assets/cards/card-2/background.webp",
    icon: "/assets/logos/marks/mark-2.png",
    text: "Les Flèches\nles transforment",
    quote: "Une Flèche ne suit pas le mouvement, elle le crée.",
    available: false,
  },
  {
    number: "3. DURABILITÉ",
    title: "Calendrier",
    description:
      "Construit la destination qui assure une continuité inépuisable.",
    image: "/assets/cards/card-3/image.webp",
    background: "/assets/cards/card-3/background.webp",
    icon: "/assets/logos/marks/mark-3.png",
    text: "Les Architectes\nles font durer",
    quote: "Définir un cap permet d'avoir une direction sur la route.",
    available: false,
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [photo, setPhoto] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("FR");
  const [word, setWord] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const t = translations[language as keyof typeof translations];
  const words = t.animated_words;

  useEffect(() => {
    const slider = window.setInterval(
      () => setSlide((value) => (value + 1) % slides.length),
      13000,
    );
    const wordsTimer = window.setInterval(
      () => setWord((value) => (value + 1) % words.length),
      8000,
    );
    return () => {
      window.clearInterval(slider);
      window.clearInterval(wordsTimer);
    };
  }, [words.length]);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - previous) > 5)
        setHeaderHidden(current > previous && current > 100);
      previous = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selected = slides[slide];
  const imageName =
    selected.images[photo]
      .split("/")
      .at(-1)
      ?.replace(/\.[^.]+$/, "") ?? "kamapbe";
  const lines = (value: string) =>
    value.split("<br>").map((line, index) => (
      <span key={`${line}-${index}`}>
        {line}
        {index < value.split("<br>").length - 1 && <br />}
      </span>
    ));
  const plainLines = (value: string) => lines(value.replace(/<[^>]*>/g, ""));
  const cardCopy = [
    {
      number: t.card1_title,
      title: t.card1_h,
      description: t.card1_p,
      imageText: t.card1_img_text,
    },
    {
      number: t.card2_title,
      title: t.card2_h,
      description: t.card2_p,
      imageText: t.card2_img_text,
    },
    {
      number: t.card3_title,
      title: t.card3_h,
      description: t.card3_p,
      imageText: t.card3_img_text,
    },
  ];

  return (
    <>
      <header
        className={`site-header ${headerHidden ? "site-header-hidden" : ""}`}
      >
        <a href="#top" className="brand" aria-label="Kamap, accueil">
          <img src="/assets/logos/brand/full-black.svg" alt="KAMAP" />
          <span>{t.nav_logo_subtext}</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#top">{t.nav_home}</a>
          <a href="#about">{t.nav_about}</a>
          <a href="#about">{t.nav_contact}</a>
        </nav>
        <div className="language-picker">
          <button
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            className="language-current"
          >
            <img
              src={`/assets/flags/${language === "FR" ? "fr" : language === "NL" ? "nl" : language === "EN" ? "en" : language === "ES" ? "es" : "de"}.png`}
              alt=""
            />
            {language}
            <ChevronDown size={15} strokeWidth={2.25} aria-hidden="true" />
          </button>
          {menuOpen && (
            <div className="language-menu">
              {["FR", "NL", "EN", "ES", "DE"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setLanguage(item);
                    setMenuOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main id="top">
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(12,25,53,.83) 0%, rgba(15,29,55,.5) 52%, rgba(12,25,53,.16)), url("${selected.background}")`,
          }}
        >
          <div className="hero-copy">
            <h1>
              {t.hero_title_1}{" "}
              <span className="changing-word" key={word}>
                {words[word]}
              </span>
              <br />
              {t.hero_title_2}
              <br />
              {t.hero_title_3}{" "}
              <img src="/assets/hero/tonsport.png" alt="ton sport" />
            </h1>
            <p>{plainLines(t.hero_desc)}</p>
            <div className="actions">
              <a className="button button-light" href="#foundations">
                {t.hero_btn_1}
              </a>
              <a className="button button-teal" href="#soon">
                {t.hero_btn_2}
              </a>
            </div>
          </div>
          <div className="instagram-card">
            <p>@{imageName}</p>
            <div className="instagram-image">
              <button
                aria-label="Photo précédente"
                onClick={() =>
                  setPhoto(
                    (value) =>
                      (value + selected.images.length - 1) %
                      selected.images.length,
                  )
                }
              >
                <ChevronLeft size={22} strokeWidth={2.25} aria-hidden="true" />
              </button>
              <a
                href="https://www.instagram.com/kamapbe/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={selected.images[photo]}
                  alt={`Publication Instagram ${imageName}`}
                />
              </a>
              <button
                aria-label="Photo suivante"
                onClick={() =>
                  setPhoto((value) => (value + 1) % selected.images.length)
                }
              >
                <ChevronRight size={22} strokeWidth={2.25} aria-hidden="true" />
              </button>
              <img
                className="deco deco-one"
                src="/assets/hero/decorations/deco-1.png"
                alt=""
              />
              <img
                className="deco deco-two"
                src="/assets/hero/decorations/deco-2.png"
                alt=""
              />
              <img
                className="deco deco-three"
                src="/assets/hero/decorations/deco-3.png"
                alt=""
              />
            </div>
            <div className="follow">
              {t.hero_suis}
              <br />
              <strong>{t.hero_insta}</strong>
            </div>
          </div>
          <div className="slide-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={index === slide ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
                onClick={() => {
                  setPhoto(0);
                  setSlide(index);
                }}
              />
            ))}
          </div>
        </section>

        <section className="partners" aria-label="Partenaires">
          <a
            href="https://www.startlab.brussels/fr"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/logos/partners/startlab-brussels.png"
              alt="StartLAB Brussels"
            />
          </a>
          <a
            href="https://www.instagram.com/dripcodestudio/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/logos/partners/dripcode-full.svg"
              alt="DripCode"
            />
          </a>
          <a href="https://bsthenos.com/" target="_blank" rel="noreferrer">
            <img
              src="/assets/logos/partners/b-sthenos-dark.png"
              alt="B-sthenos"
            />
          </a>
        </section>

        <section className="foundations section" id="foundations">
          <div className="section-heading">
            <div>
              <h2>{lines(t.found_title)}</h2>
              <p>{plainLines(t.found_p1)}</p>
              <p>{plainLines(t.found_p2)}</p>
            </div>
            <img src="/assets/logos/marks/mark-3.png" alt="" />
          </div>
          <div className="foundation-grid">
            {cards.map((card, index) => (
              <article className="foundation" key={card.number}>
                <p className="foundation-number">{cardCopy[index].number}</p>
                <div
                  className={`foundation-panel ${!card.available ? "locked" : ""}`}
                  style={{ backgroundImage: `url("${card.background}")` }}
                >
                  <div className="card-title">
                    <h3>
                      {cardCopy[index].title}{" "}
                      <img
                        src="/assets/logos/brand/wordmark-black.svg"
                        alt="Kamap"
                      />
                    </h3>
                    <img src={card.icon} alt="" />
                  </div>
                  <p>{cardCopy[index].description}</p>
                  <div
                    className="card-photo"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.55), transparent), url("${card.image}")`,
                    }}
                  >
                    <span>{lines(cardCopy[index].imageText)}</span>
                  </div>
                  {!card.available && (
                    <span className="lock" aria-label="Bientôt disponible">
                      <LockKeyhole size={38} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                  )}
                </div>
                <p className="quote">“ {card.quote} ”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="coming-soon" id="soon">
          <div>
            <img src="/assets/logos/marks/mark-white-1.png" alt="" />
            <span>{t.banner_badge}</span>
            <h2>{lines(t.banner_title)}</h2>
            <p>{plainLines(t.banner_p1)}</p>
            <p>{plainLines(t.banner_p2)}</p>
            <p>{plainLines(t.banner_p3)}</p>
            <form>
              <input type="email" placeholder={t.banner_placeholder} disabled />
              <button disabled>{t.banner_btn}</button>
            </form>
          </div>
        </section>

        <section className="about section" id="about">
          <div>
            <h2>{t.about_h2}</h2>
            <p>{plainLines(t.about_sub)}</p>
            <ul>
              <li>
                {t.about_li1} <b>⌑</b>
              </li>
              <li>
                {t.about_li2} <b>⌑</b>
              </li>
              <li>
                {t.about_li3} <b>⌑</b>
              </li>
              <li>
                {t.about_li4} <b>⌑</b>
              </li>
            </ul>
          </div>
          <div>
            <h2>{t.contact_h2}</h2>
            <p>
              {plainLines(t.contact_p)}{" "}
              <a
                href="https://www.instagram.com/kamapbe/"
                target="_blank"
                rel="noreferrer"
              >
                instagram ↗
              </a>
            </p>
            <div className="about-photos">
              <img src="/assets/about/image-bike.jpg" alt="Cyclisme" />
              <img src="/assets/about/image-basketball.jpg" alt="Basketball" />
              <img src="/assets/about/image-street.jpg" alt="Street workout" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <img src="/assets/logos/brand/wordmark-white.svg" alt="KAMAP" />
          <span>{t.footer_tagline}</span>
        </div>
        <p>{t.footer_rights}</p>
      </footer>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Cookie,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  LockKeyhole,
  Map,
  Share2,
  ArrowRight,
} from "lucide-react";
import { translations } from "@/lib/translations";

function InstagramIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.056 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0063 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.069-1.6898.063-4.948-.006-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.7716-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077Z" />
    </svg>
  );
}

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
      quote: t.card1_quote,
    },
    {
      number: t.card2_title,
      title: t.card2_h,
      description: t.card2_p,
      imageText: t.card2_img_text,
      quote: t.card2_quote,
    },
    {
      number: t.card3_title,
      title: t.card3_h,
      description: t.card3_p,
      imageText: t.card3_img_text,
      quote: t.card3_quote,
    },
  ];

  return (
    <>
      <header
        className={`site-header ${headerHidden ? "site-header-hidden" : ""}`}
      >
        <a href="#top" className="brand" aria-label="Kamap, accueil">
          <Image
            src="/assets/logos/brand/full-black.svg"
            alt="KAMAP"
            width={118}
            height={40}
          />
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
            <Image
              src={`/assets/flags/${language === "FR" ? "fr" : language === "NL" ? "nl" : language === "EN" ? "en" : language === "ES" ? "es" : "de"}.png`}
              alt=""
              width={23}
              height={23}
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
              <Image
                src="/assets/hero/tonsport.png"
                alt="ton sport"
                width={100}
                height={40}
              />
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
                <Image
                  fill
                  sizes="240px"
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
              <Image
                className="deco deco-one"
                src="/assets/hero/decorations/deco-1.png"
                alt=""
                width={57}
                height={57}
              />
              <Image
                className="deco deco-two"
                src="/assets/hero/decorations/deco-2.png"
                alt=""
                width={57}
                height={57}
              />
              <Image
                className="deco deco-three"
                src="/assets/hero/decorations/deco-3.png"
                alt=""
                width={57}
                height={57}
              />
            </div>
            <a
              className="follow"
              href="https://www.instagram.com/kamapbe/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={24} />
              <span>{t.hero_suis}</span>
              <strong>{t.hero_insta}</strong>
            </a>
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
            <Image
              src="/assets/logos/partners/startlab-brussels.png"
              alt="StartLAB Brussels"
              width={160}
              height={43}
            />
          </a>
          <a
            href="https://www.instagram.com/dripcodestudio/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/logos/partners/dripcode-full.svg"
              alt="DripCode"
              width={160}
              height={43}
            />
          </a>
          <a href="https://bsthenos.com/" target="_blank" rel="noreferrer">
            <Image
              src="/assets/logos/partners/b-sthenos-dark.png"
              alt="B-sthenos"
              width={160}
              height={43}
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
            <Image
              src="/assets/logos/marks/mark-3.png"
              alt=""
              width={46}
              height={46}
            />
          </div>
          <div className="foundation-grid">
            {cards.map((card, index) => (
              <article className="foundation" key={card.number}>
                <p className="foundation-number">{cardCopy[index].number}</p>
                <div
                  className={`foundation-panel foundation-panel-${index + 1} ${!card.available ? "locked" : ""}`}
                  style={{ backgroundImage: `url("${card.background}")` }}
                >
                  <div className="card-title">
                    <h3>
                      {cardCopy[index].title}{" "}
                      <Image
                        src="/assets/logos/brand/wordmark-black.svg"
                        alt="Kamap"
                        width={67}
                        height={24}
                      />
                    </h3>
                    <Image src={card.icon} alt="" width={36} height={36} />
                  </div>
                  <p>{lines(cardCopy[index].description)}</p>
                  <div
                    className="card-photo"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.68) 0%, rgba(0,0,0,.08) 62%, transparent 100%), url("${card.image}")`,
                    }}
                  >
                    <span className="card-image-text">
                      {lines(cardCopy[index].imageText)}
                    </span>
                  </div>
                  {!card.available && (
                    <span className="lock" aria-label="Bientôt disponible">
                      <LockKeyhole
                        size={38}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </div>
                <p className="quote">“ {lines(cardCopy[index].quote)} ”</p>
                {card.available && (
                  <a className="foundation-action" href="#soon">
                    Devenir Nomade
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="coming-soon" id="soon">
          <div>
            <Image
              src="/assets/logos/marks/mark-white-1.png"
              alt=""
              width={45}
              height={45}
            />
            <span className="coming-soon-badge">{t.banner_badge}</span>
            <h2>{lines(t.banner_title)}</h2>
            <p>{plainLines(t.banner_p1)}</p>
            <p>{plainLines(t.banner_p2)}</p>
            <p>{plainLines(t.banner_p3)}</p>
            <div className="coming-soon-form">
              <div className="form-lock" aria-label="Inscription bientôt disponible">
                <LockKeyhole size={28} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <form>
                <input type="email" placeholder={t.banner_placeholder} disabled />
                <button disabled>{t.banner_btn}</button>
              </form>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div>
            <h2>{t.about_h2}</h2>
            <p>{plainLines(t.about_sub)}</p>
            <ul>
              {[t.about_li1, t.about_li2, t.about_li3, t.about_li4].map((item) => (
                <li key={item}>
                  <span>{item}</span>
                  <LockKeyhole size={16} strokeWidth={1.8} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.contact_h2}</h2>
            <p>
              {plainLines(t.contact_p)}{" "}
              <a
                className="contact-instagram"
                href="https://www.instagram.com/kamapbe/"
                target="_blank"
                rel="noreferrer"
                aria-label="KAMAP sur Instagram"
              >
                <InstagramIcon size={23} />
              </a>
            </p>
            <div className="about-photos">
              <Image
                src="/assets/about/image-bike.jpg"
                alt="Cyclisme"
                width={160}
                height={175}
              />
              <Image
                src="/assets/about/image-basketball.jpg"
                alt="Basketball"
                width={160}
                height={225}
              />
              <Image
                src="/assets/about/image-street.jpg"
                alt="Street workout"
                width={160}
                height={145}
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <Image
            src="/assets/logos/brand/wordmark-white.svg"
            alt="KAMAP"
            width={86}
            height={24}
          />
          <span>{t.footer_tagline}</span>
        </div>
        <nav className="footer-links" aria-label="Liens utiles">
          <a href="#top">
            <Map size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>{t.about_li1}</span>
          </a>
          <a href="#about">
            <Info size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>{t.about_li2}</span>
          </a>
          <a
            href="https://www.instagram.com/kamapbe/"
            target="_blank"
            rel="noreferrer"
          >
            <Share2 size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>{t.about_li3}</span>
          </a>
          <a href="#cookies">
            <Cookie size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>{t.about_li4}</span>
          </a>
        </nav>
        <div className="footer-meta">
          <a
            className="footer-social"
            href="https://www.instagram.com/kamapbe/"
            target="_blank"
            rel="noreferrer"
            aria-label="KAMAP sur Instagram"
          >
            <InstagramIcon size={22} />
          </a>
          <p>{t.footer_rights}</p>
        </div>
      </footer>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { translations } from "@/lib/translations";

const asset = "/assets/";

const slides = [
  {
    background: "Hero image/hero_slide1/img-hero/background_hero.webp",
    images: [
      "Hero image/hero_slide1/img_insta1/img1/teambrussels_asbl.jpg",
      "Hero image/hero_slide1/img_insta1/img2/beball_32.jpg",
      "Hero image/hero_slide1/img_insta1/img3/teambrussels3x3.jpg",
    ],
  },
  {
    background: "Hero image/image_slide2/image1_sl2_background/horse_bckground.jpg",
    images: [
      "Hero image/image_slide2/img_insta2/img1/b.sthenos.jpg",
      "Hero image/image_slide2/img_insta2/img2/noah_swc.jpg",
      "Hero image/image_slide2/img_insta2/img3/barbendersbelgium.jpg",
    ],
  },
  {
    background: "Hero image/image_slide3/image1_sl3_background/gym_chill.jpg",
    images: [
      "Hero image/image_slide3/img_insta3/img_1/rising_stars.be.jpg",
      "Hero image/image_slide3/img_insta3/img_2/balcax_djrider.jpg",
      "Hero image/image_slide3/img_insta3/img_3/golyvalent.jpg",
    ],
  },
];

const cards = [
  {
    number: "1. QUALITÉ",
    title: "Carte",
    description: "Le sport n'a jamais été aussi facile à trouver, la découverte devient instinctive.",
    image: "card/card1/card_image1.webp",
    background: "card/card1/card_background1.webp",
    icon: "Logo Kamap/mini_icone_kamap/iconne_1.png",
    text: "Les Nomades\nrepèrent les opportunités",
    quote: "Chaque spot certifié passe par un/une Nomade avec une vision d'aigle.",
    available: true,
  },
  {
    number: "2. ADAPTABILITÉ",
    title: "Workflow route",
    description: "Note & crée facilement des plannings/documents pour transformer les objectifs en cible.",
    image: "card/card2/card_imageroute2.webp",
    background: "card/card2/card_background2.webp",
    icon: "Logo Kamap/mini_icone_kamap/iconne_2.png",
    text: "Les Flèches\nles transforment",
    quote: "Une Flèche ne suit pas le mouvement, elle le crée.",
    available: false,
  },
  {
    number: "3. DURABILITÉ",
    title: "Calendrier",
    description: "Construit la destination qui assure une continuité inépuisable.",
    image: "card/card3/card_imagecalen3.webp",
    background: "card/card3/card_background3.webp",
    icon: "Logo Kamap/mini_icone_kamap/iconne_3.png",
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
    const slider = window.setInterval(() => setSlide((value) => (value + 1) % slides.length), 13000);
    const wordsTimer = window.setInterval(() => setWord((value) => (value + 1) % words.length), 8000);
    return () => { window.clearInterval(slider); window.clearInterval(wordsTimer); };
  }, [words.length]);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - previous) > 5) setHeaderHidden(current > previous && current > 100);
      previous = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selected = slides[slide];
  const imageName = selected.images[photo].split("/").at(-1)?.replace(/\.[^.]+$/, "") ?? "kamapbe";
  const lines = (value: string) => value.split("<br>").map((line, index) => <span key={`${line}-${index}`}>{line}{index < value.split("<br>").length - 1 && <br />}</span>);
  const plainLines = (value: string) => lines(value.replace(/<[^>]*>/g, ""));
  const cardCopy = [
    { number: t.card1_title, title: t.card1_h, description: t.card1_p, imageText: t.card1_img_text },
    { number: t.card2_title, title: t.card2_h, description: t.card2_p, imageText: t.card2_img_text },
    { number: t.card3_title, title: t.card3_h, description: t.card3_p, imageText: t.card3_img_text },
  ];

  return (
    <>
      <header className={`site-header ${headerHidden ? "site-header-hidden" : ""}`}>
        <a href="#top" className="brand" aria-label="Kamap, accueil">
          <img src={`${asset}Logo Kamap/Logo_kamap_hero/logo_complet_noir.svg`} alt="KAMAP" />
          <span>{t.nav_logo_subtext}</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#top">{t.nav_home}</a><a href="#about">{t.nav_about}</a><a href="#about">{t.nav_contact}</a>
        </nav>
        <div className="language-picker">
          <button onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} className="language-current">
            <img src={`${asset}languenav/${language === "FR" ? "france/france" : language === "NL" ? "hollande/pays-bas" : language === "EN" ? "anglais/royaume-uni" : language === "ES" ? "espagne/espagne" : "allemagne/allemagne"}.png`} alt="" />{language}
          </button>
          {menuOpen && <div className="language-menu">{["FR", "NL", "EN", "ES", "DE"].map((item) => <button key={item} onClick={() => { setLanguage(item); setMenuOpen(false); }}>{item}</button>)}</div>}
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(12,25,53,.83) 0%, rgba(15,29,55,.5) 52%, rgba(12,25,53,.16)), url("${asset}${selected.background}")` }}>
          <div className="hero-copy">
            <h1>{t.hero_title_1} <span className="changing-word" key={word}>{words[word]}</span><br />{t.hero_title_2}<br />{t.hero_title_3} <img src={`${asset}Hero image/tonsport.png`} alt="ton sport" /></h1>
            <p>{plainLines(t.hero_desc)}</p>
            <div className="actions"><a className="button button-light" href="#foundations">{t.hero_btn_1}</a><a className="button button-teal" href="#soon">{t.hero_btn_2}</a></div>
          </div>
          <div className="instagram-card">
            <p>@{imageName}</p>
            <div className="instagram-image">
              <button aria-label="Photo précédente" onClick={() => setPhoto((value) => (value + selected.images.length - 1) % selected.images.length)}>‹</button>
              <a href="https://www.instagram.com/kamapbe/" target="_blank" rel="noreferrer"><img src={`${asset}${selected.images[photo]}`} alt={`Publication Instagram ${imageName}`} /></a>
              <button aria-label="Photo suivante" onClick={() => setPhoto((value) => (value + 1) % selected.images.length)}>›</button>
              <img className="deco deco-one" src={`${asset}Hero image/hero_slide1/deco/deco1.png`} alt="" />
              <img className="deco deco-two" src={`${asset}Hero image/hero_slide1/deco/deco2.png`} alt="" />
              <img className="deco deco-three" src={`${asset}Hero image/hero_slide1/deco/deco3.png`} alt="" />
            </div>
            <div className="follow">{t.hero_suis}<br /><strong>{t.hero_insta}</strong></div>
          </div>
          <div className="slide-dots">{slides.map((_, index) => <button key={index} className={index === slide ? "active" : ""} aria-label={`Slide ${index + 1}`} onClick={() => { setPhoto(0); setSlide(index); }} />)}</div>
        </section>

        <section className="partners" aria-label="Partenaires">
          <a href="https://www.startlab.brussels/fr" target="_blank" rel="noreferrer"><img src={`${asset}Logo Kamap/Startlab/StartLAB_Brussels_Blue 1.png`} alt="StartLAB Brussels" /></a>
          <a href="https://www.instagram.com/dripcodestudio/" target="_blank" rel="noreferrer"><img src={`${asset}Logo Kamap/Dripcode/Logo complet+rouge noir.svg`} alt="DripCode" /></a>
          <a href="https://bsthenos.com/" target="_blank" rel="noreferrer"><img src={`${asset}Logo Kamap/B-sthenos/bsthenos_dark.png`} alt="B-sthenos" /></a>
        </section>

        <section className="foundations section" id="foundations">
          <div className="section-heading"><div><h2>{lines(t.found_title)}</h2><p>{plainLines(t.found_p1)}</p><p>{plainLines(t.found_p2)}</p></div><img src={`${asset}Logo Kamap/mini_icone_kamap/iconne_3.png`} alt="" /></div>
          <div className="foundation-grid">{cards.map((card, index) => <article className="foundation" key={card.number}><p className="foundation-number">{cardCopy[index].number}</p><div className={`foundation-panel ${!card.available ? "locked" : ""}`} style={{ backgroundImage: `url("${asset}${card.background}")` }}><div className="card-title"><h3>{cardCopy[index].title} <img src={`${asset}Logo Kamap/Text_kamap/logo_texte_noir.svg`} alt="Kamap" /></h3><img src={`${asset}${card.icon}`} alt="" /></div><p>{cardCopy[index].description}</p><div className="card-photo" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.55), transparent), url("${asset}${card.image}")` }}><span>{lines(cardCopy[index].imageText)}</span></div>{!card.available && <span className="lock">⌑</span>}</div><p className="quote">“ {card.quote} ”</p></article>)}</div>
        </section>

        <section className="coming-soon" id="soon"><div><img src={`${asset}Logo Kamap/mini_icone_kamap/iconneblanc_1.png`} alt="" /><span>{t.banner_badge}</span><h2>{lines(t.banner_title)}</h2><p>{plainLines(t.banner_p1)}</p><p>{plainLines(t.banner_p2)}</p><p>{plainLines(t.banner_p3)}</p><form><input type="email" placeholder={t.banner_placeholder} disabled /><button disabled>{t.banner_btn}</button></form></div></section>

        <section className="about section" id="about"><div><h2>{t.about_h2}</h2><p>{plainLines(t.about_sub)}</p><ul><li>{t.about_li1} <b>⌑</b></li><li>{t.about_li2} <b>⌑</b></li><li>{t.about_li3} <b>⌑</b></li><li>{t.about_li4} <b>⌑</b></li></ul></div><div><h2>{t.contact_h2}</h2><p>{plainLines(t.contact_p)} <a href="https://www.instagram.com/kamapbe/" target="_blank" rel="noreferrer">instagram ↗</a></p><div className="about-photos"><img src={`${asset}image à propos/image bike.jpg`} alt="Cyclisme" /><img src={`${asset}image à propos/image b-ball.jpg`} alt="Basketball" /><img src={`${asset}image à propos/image street.jpg`} alt="Street workout" /></div></div></section>
      </main>
      <footer><div><img src={`${asset}Logo Kamap/Text_kamap/logo_texte_blanc.svg`} alt="KAMAP" /><span>{t.footer_tagline}</span></div><p>{t.footer_rights}</p></footer>
    </>
  );
}

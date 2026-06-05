// Force scroll to top on refresh
if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

function openModal() {
    document.getElementById('carte-modal').style.display = 'flex';
}

function closeModal(event) {
    document.getElementById('carte-modal').style.display = 'none';
}

// Insta Modal logic
function openInstaModal(event) {
    if (event) event.preventDefault();
    document.getElementById('insta-modal').style.display = 'flex';
}

function closeInstaModal(event) {
    if (event) event.preventDefault();
    document.getElementById('insta-modal').style.display = 'none';
}

// Language dropdown logic and Translation
// Language dropdown logic and Translation
const translations = {
    "FR": {
        "nav_home": "Accueil",
        "nav_about": "À propos",
        "nav_contact": "Contact",
        "nav_logo_subtext": "la carte interactive du sport",
        "hero_title_1": "Trouve",
        "hero_title_1_alt": "Partage",
        "hero_title_2": "En toute liberté",
        "hero_title_3": "Pour conquérir",
        "hero_desc": "Nous aidons la communauté sportif à facilement trouver les meilleurs organisations & lieux d'entraînement non référencés de leur région.<br>Dans l'espace \"public, privé et urbain\" afin de conquérir leur discipline.",
        "hero_btn_1": "Découvrir le projet",
        "hero_btn_2": "La carte",
        "hero_suis": "suis-nous sur",
        "hero_insta": "insta !!",
        "found_title": "Nos 3 fondamentaux,<br>au sein du projet pour la communauté.",
        "found_p1": "Kamap est une carte interactive qui permet à chaque athlète de bénéficier<br> d'un soutien sur base de qualité, adaptabilité et durabilité<br> tout au long du parcours sportif de chacun et chacune.",
        "found_p2": "Lorsque nos fondements sont intégré au sein de votre organisation sportive,<br> vous créez l'environnement idéal permettant à chaque athlète de véritablement<br> s'épanouir afin de construire la meilleure version de soi au sein de sa discipline.",
        "card1_title": "1. QUALITÉ",
        "card1_h": "Carte",
        "card2_title": "2. ADAPTABILITÉ",
        "card2_h": "Workflow route",
        "card3_title": "3. DURABILITÉ",
        "card3_h": "Calendrier",
        "banner_badge": "BIENTOT DISPONIBLE",
        "banner_title": "conquiers. crée. partage<br>ton univers sportif",
        "banner_p1": "La carte Kamap est actuellement en cours de développement privé...<br> Cette carte reflète la qualité de référencement des meilleurs lieux d'entraînement, organisations, compétitions et événements sportif de votre région !",
        "banner_p2": "Apprêtez vous à non seulement bénéficier d'une recherche filtrée en fonction de vos besoins<br> comme le type d'infrastructure sportive et ses disponibilités \"public, privé et urbain\".",
        "banner_p3": "Mais également découvrir & partager votre avis sur les organisations sportif présentes sur la carte.<br> Avec d'autres fonctionnalités comme devenir spotter, visualiser l'itinéraire ou<br> l'intégration API de la carte sur votre propre plateforme !",
        "banner_placeholder": "Votre adresse e-mail...",
        "banner_btn": "S'inscrire",
        "about_h2": "À propos",
        "about_sub": "Kamap est une carte intéractive web app qui offre des services à la communauté sportive.<br>Avec des services qui sont divisés en formule d'abonnement au choix entre l'accès gratuit, basic ou premium.",
        "about_li1": "Carte intéractive",
        "about_li2": "IH",
        "about_li3": "Résaux Kamap",
        "about_li4": "Les cookies",
        "contact_h2": "Contact",
        "contact_p": "Contacte nous sur instagram",
        "footer_tagline": "conquiers. crée. partage",
        "footer_rights": "©2026 KAMAP, Tous droits réservés",
        "animated_words": ["facilement", "ton terrain", "ta salle", "ton parc", "ton club", "ton espace", "ton évènement", "ton lieu", "ta compétition", "l'entrainement"]
    },
    "EN": {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_contact": "Contact",
        "nav_logo_subtext": "the interactive sports map",
        "hero_title_1": "Find",
        "hero_title_1_alt": "Share",
        "hero_title_2": "With total freedom",
        "hero_title_3": "To conquer",
        "hero_desc": "We help the sports community easily find the best unlisted organizations & training spots in their area.<br>In \"public, private, and urban\" spaces to conquer their discipline.",
        "hero_btn_1": "Discover the project",
        "hero_btn_2": "The map",
        "hero_suis": "follow us on",
        "hero_insta": "insta !!",
        "found_title": "Our 3 fundamentals,<br>within the project for the community.",
        "found_p1": "Kamap is an interactive map that allows every athlete to benefit<br> from support based on quality, adaptability, and sustainability<br> throughout their sports journey.",
        "found_p2": "When our fundamentals are integrated into your sports organization,<br> you create the ideal environment allowing every athlete to truly<br> thrive and build the best version of themselves in their discipline.",
        "card1_title": "1. QUALITY",
        "card1_h": "Map",
        "card2_title": "2. ADAPTABILITY",
        "card2_h": "Workflow route",
        "card3_title": "3. SUSTAINABILITY",
        "card3_h": "Calendar",
        "banner_badge": "COMING SOON",
        "banner_title": "conquer. create. share<br>your sports universe",
        "banner_p1": "The Kamap map is currently under private development...<br> This map reflects the quality of referencing the best training spots, organizations, competitions, and sports events in your region!",
        "banner_p2": "Get ready to not only benefit from a filtered search based on your needs<br> such as the type of sports infrastructure and its availability \"public, private, and urban\".",
        "banner_p3": "But also discover & share your opinion on the sports organizations present on the map.<br> With other features like becoming a spotter, viewing the route, or<br> API integration of the map on your own platform!",
        "banner_placeholder": "Your email address...",
        "banner_btn": "Subscribe",
        "about_h2": "About",
        "about_sub": "Kamap is an interactive map<br>SaaS web app",
        "about_li1": "Interactive map",
        "about_li2": "UI",
        "about_li3": "Kamap Networks",
        "about_li4": "Cookies",
        "contact_h2": "Contact",
        "contact_p": "Contact us on instagram",
        "footer_tagline": "conquer. create. share",
        "footer_rights": "©2026 KAMAP, All rights reserved",
        "animated_words": ["easily", "your field", "your gym", "your park", "your club", "your space", "your event", "your facility", "your competition", "your training"]
    },
    "NL": {
        "nav_home": "Startpagina",
        "nav_about": "Over ons",
        "nav_contact": "Contact",
        "nav_logo_subtext": "de interactieve sportkaart",
        "hero_title_1": "Vind",
        "hero_title_1_alt": "Deel",
        "hero_title_2": "In alle vrijheid",
        "hero_title_3": "Om te veroveren",
        "hero_desc": "Wij helpen de sportgemeenschap gemakkelijk de beste onvermelde organisaties & trainingslocaties in hun regio te vinden.<br>In de \"openbare, private en stedelijke\" ruimte om hun discipline te veroveren.",
        "hero_btn_1": "Ontdek het project",
        "hero_btn_2": "De kaart",
        "hero_suis": "volg ons op",
        "hero_insta": "insta !!",
        "found_title": "Onze 3 fundamenten,<br>binnen het project voor de gemeenschap.",
        "found_p1": "Kamap is een interactieve kaart waarmee elke atleet kan profiteren<br> van ondersteuning op basis van kwaliteit, aanpasbaarheid en duurzaamheid<br> gedurende hun sportieve reis.",
        "found_p2": "Wanneer onze fundamenten in uw sportorganisatie zijn geïntegreerd,<br> creëert u de ideale omgeving waarin elke atleet echt<br> kan gedijen om de beste versie van zichzelf in zijn discipline op te bouwen.",
        "card1_title": "1. KWALITEIT",
        "card1_h": "Kaart",
        "card2_title": "2. AANPASBAARHEID",
        "card2_h": "Workflow route",
        "card3_title": "3. DUURZAAMHEID",
        "card3_h": "Kalender",
        "banner_badge": "BINNENKORT BESCHIKBAAR",
        "banner_title": "verover. creëer. deel<br>jouw sportuniversum",
        "banner_p1": "De Kamap-kaart is momenteel in privé-ontwikkeling...<br> Deze kaart weerspiegelt de kwaliteit van de beste trainingslocaties, organisaties, competities en sportevenementen in Ihre regio!",
        "banner_p2": "Maak u klaar om niet alleen te profiteren van een gefilterde zoekopdracht op basis van uw behoeften<br> zoals het type sportinfrastructuur en de beschikbaarheid ervan \"openbaar, privé en stedelijk\".",
        "banner_p3": "Maar ontdek en deel ook uw mening over de sportorganisaties op de kaart.<br> Met andere functies zoals spotter worden, de route bekijken of<br> API-integratie van de kaart op uw eigen platform!",
        "banner_placeholder": "Uw e-mailadres...",
        "banner_btn": "Inschrijven",
        "about_h2": "Over ons",
        "about_sub": "Kamap is een interactieve kaart<br>SaaS-webapp",
        "about_li1": "Interactieve kaart",
        "about_li2": "UI",
        "about_li3": "Kamap Netwerken",
        "about_li4": "Cookies",
        "contact_h2": "Contact",
        "contact_p": "Neem contact op via instagram",
        "footer_tagline": "verover. creëer. deel",
        "footer_rights": "©2026 KAMAP, Alle rechten voorbehouden",
        "animated_words": ["gemakkelijk", "jouw veld", "jouw sportschool", "jouw park", "jouw club", "jouw ruimte", "jouw evenement", "jouw infrastructuur", "jouw competitie", "jouw training"]
    },
    "ES": {
        "nav_home": "Inicio",
        "nav_about": "Acerca de",
        "nav_contact": "Contacto",
        "nav_logo_subtext": "el mapa interactivo del deporte",
        "hero_title_1": "Encuentra",
        "hero_title_1_alt": "Comparte",
        "hero_title_2": "Con total libertad",
        "hero_title_3": "Para conquistar",
        "hero_desc": "Ayudamos a la comunidad deportiva a encontrar fácilmente las mejores organizaciones y lugares de entrenamiento no listados en su región.<br>En espacios \"públicos, privados y urbanos\" para conquistar su disciplina.",
        "hero_btn_1": "Descubre el proyecto",
        "hero_btn_2": "El mapa",
        "hero_suis": "síguenos en",
        "hero_insta": "insta !!",
        "found_title": "Nuestros 3 fundamentos,<br>dentro del proyecto para la comunidad.",
        "found_p1": "Kamap es un mapa interactivo que permite a cada atleta beneficiarse<br> de apoyo basado en la calidad, adaptabilidad y sostenibilidad<br> a lo largo de su trayectoria deportiva.",
        "found_p2": "Cuando nuestros fundamentos se integran en su organización deportiva,<br> crea el entorno ideal que permite a cada atleta realmente<br> prosperar para construir la mejor versión de sí mismos en su disciplina.",
        "card1_title": "1. CALIDAD",
        "card1_h": "Mapa",
        "card2_title": "2. ADAPTABILIDAD",
        "card2_h": "Ruta de flujo de trabajo",
        "card3_title": "3. SOSTENIBILIDAD",
        "card3_h": "Calendario",
        "banner_badge": "PRÓXIMAMENTE",
        "banner_title": "conquista. crea. comparte<br>tu universo deportivo",
        "banner_p1": "El mapa Kamap se encuentra actualmente en desarrollo privado...<br> ¡Este mapa refleja la calidad de referenciar los mejores lugares de entrenamiento, organizaciones, competiciones y eventos deportivos de su región!",
        "banner_p2": "Prepárese no solo para beneficiarse de una búsqueda filtrada según sus necesidades<br> como el tipo de infraestructura deportiva y su disponibilidad \"pública, privada y urbana\".",
        "banner_p3": "Sino también para descubrir y compartir su opinión sobre las organizaciones deportivas presentes en el mapa.<br> ¡Con otras características como convertirse en observador, ver la ruta o<br> la integración API del mapa en su propia plataforma!",
        "banner_placeholder": "Su correo electrónico...",
        "banner_btn": "Suscribirse",
        "about_h2": "Acerca de",
        "about_sub": "Kamap es un mapa interactivo<br>aplicación web SaaS",
        "about_li1": "Mapa interactivo",
        "about_li2": "UI",
        "about_li3": "Redes Kamap",
        "about_li4": "Cookies",
        "contact_h2": "Contacto",
        "contact_p": "Contáctanos en instagram",
        "footer_tagline": "conquista. crea. comparte",
        "footer_rights": "©2026 KAMAP, Todos los derechos reservados",
        "animated_words": ["fácilmente", "tu campo", "tu gimnasio", "tu parque", "tu club", "tu espacio", "tu evento", "tu infraestructura", "tu competición", "tu entrenamiento"]
    },
    "DE": {
        "nav_home": "Startseite",
        "nav_about": "Über uns",
        "nav_contact": "Kontakt",
        "nav_logo_subtext": "die interaktive Sportkarte",
        "hero_title_1": "Finde",
        "hero_title_1_alt": "Teile",
        "hero_title_2": "In völliger Freiheit",
        "hero_title_3": "Zum Erobern",
        "hero_desc": "Wir helfen der Sportgemeinschaft, leicht die besten nicht gelisteten Organisationen & Trainingsorte in ihrer Region zu finden.<br>Im \"öffentlichen, privaten und städtischen\" Raum, um ihre Disziplin zu erobern.",
        "hero_btn_1": "Entdecke das Projekt",
        "hero_btn_2": "Die Karte",
        "hero_suis": "folge uns auf",
        "hero_insta": "insta !!",
        "found_title": "Unsere 3 Grundlagen,<br>innerhalb des Projekts für die Gemeinschaft.",
        "found_p1": "Kamap ist eine interaktive Karte, die es jedem Athleten ermöglicht, von<br> Unterstützung basierend auf Qualität, Anpassungsfähigkeit und Nachhaltigkeit<br> auf seiner gesamten sportlichen Reise zu profitieren.",
        "found_p2": "Wenn unsere Grundlagen in Ihre Sportorganisation integriert sind,<br> schaffen Sie das ideale Umfeld, das es jedem Athleten ermöglicht, wirklich<br> zu gedeihen, um die beste Version seiner selbst in seiner Disziplin aufzubauen.",
        "card1_title": "1. QUALITÄT",
        "card1_h": "Karte",
        "card2_title": "2. ANPASSUNGSFÄHIGKEIT",
        "card2_h": "Workflow-Route",
        "card3_title": "3. NACHHALTIGKEIT",
        "card3_h": "Kalender",
        "banner_badge": "DEMNÄCHST VERFÜGBAR",
        "banner_title": "erobere. erschaffe. teile<br>dein Sportuniversum",
        "banner_p1": "Die Kamap-Karte befindet sich derzeit in privater Entwicklung...<br> Diese Karte spiegelt die Qualität der Referenzierung der besten Trainingsorte, Organisationen, Wettbewerbe und Sportveranstaltungen in Ihrer Region wider!",
        "banner_p2": "Machen Sie sich bereit, nicht nur von einer gefilterten Suche nach Ihren Bedürfnissen zu profitieren<br>, wie z. B. der Art der Sportinfrastruktur und ihrer Verfügbarkeit \"öffentlich, privat und städtisch\".",
        "banner_p3": "Sondern entdecken und teilen Sie auch Ihre Meinung zu den auf der Karte vorhandenen Sportorganisationen.<br> Mit weiteren Funktionen wie Spotter werden, Route anzeigen oder<br> API-Integration der Karte auf Ihrer eigenen Plattform!",
        "banner_placeholder": "Ihre E-Mail-Adresse...",
        "banner_btn": "Abonnieren",
        "about_h2": "Über uns",
        "about_sub": "Kamap ist eine interaktive Karte<br>SaaS-Web-App",
        "about_li1": "Interaktive Karte",
        "about_li2": "UI",
        "about_li3": "Kamap-Netzwerke",
        "about_li4": "Cookies",
        "contact_h2": "Kontakt",
        "contact_p": "Kontaktiere uns auf instagram",
        "footer_tagline": "erobere. erschaffe. teile",
        "footer_rights": "©2026 KAMAP, Alle Rechte vorbehalten",
        "animated_words": ["leicht", "dein Feld", "dein Fitnessstudio", "deinen Park", "deinen Club", "deinen Raum", "dein Event", "deine Infrastruktur", "deinen Wettbewerb", "dein Training"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentWordsArray = translations["FR"].animated_words; // Default to FR words
    let currentWordIndex = 0;
    const animatedWordElement = document.getElementById('animated-word');

    const currentLangBtn = document.getElementById('current-lang-btn');
    const langOptions = document.querySelectorAll('#lang-options .lang-flag-btn');

    function updatePageLanguage(langCode) {
        if (!translations[langCode]) return;
        const dict = translations[langCode];
        
        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                    el.placeholder = dict[key];
                } else {
                    el.innerHTML = dict[key];
                }
            }
        });

        // Update animated words array
        currentWordsArray = dict.animated_words;
        currentWordIndex = 0;
        if (animatedWordElement) {
            animatedWordElement.textContent = currentWordsArray[0];
        }
    }

    if (currentLangBtn && langOptions.length > 0) {
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                // Get data from clicked option
                const newLang = this.getAttribute('data-lang');
                const newFlag = this.getAttribute('data-flag');
                
                // Get current main button data
                const currentImg = currentLangBtn.querySelector('img');
                const currentSpan = currentLangBtn.querySelector('span');
                const oldLang = currentSpan.textContent.trim();
                const oldFlag = currentImg.getAttribute('src');
                
                // Update main button
                currentImg.setAttribute('src', newFlag);
                currentImg.setAttribute('alt', newLang);
                currentSpan.textContent = newLang;
                
                // Update clicked option to hold the old main button data
                this.setAttribute('data-lang', oldLang);
                this.setAttribute('data-flag', oldFlag);
                const thisImg = this.querySelector('img');
                const thisSpan = this.querySelector('span');
                thisImg.setAttribute('src', oldFlag);
                thisImg.setAttribute('alt', oldLang);
                thisSpan.textContent = oldLang;

                // Trigger translation
                updatePageLanguage(newLang);
            });
        });
    }

    // Animated word logic (Slower: 5000ms)
    const animatedActionElement = document.getElementById('hero-action-word');
    let verbToggle = 0;

    if (animatedWordElement) {
        setInterval(() => {
            // Fade out
            animatedWordElement.classList.add('fade-out');
            if (animatedActionElement) {
                animatedActionElement.classList.add('fade-out');
            }
            
            setTimeout(() => {
                // Change text and fade in
                currentWordIndex = (currentWordIndex + 1) % currentWordsArray.length;
                animatedWordElement.textContent = currentWordsArray[currentWordIndex];
                
                if (animatedActionElement) {
                    const currentLang = currentLangBtn ? currentLangBtn.querySelector('span').textContent.trim() : 'FR';
                    const dict = translations[currentLang] || translations["FR"];
                    
                    if (currentWordIndex === 0) {
                        verbToggle = 1 - verbToggle;
                    }
                    verbToggle = 1 - verbToggle;

                    if (currentWordIndex === currentWordsArray.length - 1) {
                        animatedActionElement.textContent = dict["hero_title_1"];
                    } else {
                        animatedActionElement.textContent = (verbToggle === 0) ? dict["hero_title_1"] : dict["hero_title_1_alt"];
                    }
                }

                animatedWordElement.classList.remove('fade-out');
                if (animatedActionElement) {
                    animatedActionElement.classList.remove('fade-out');
                }
            }, 400); // Wait for fade-out transition
        }, 8000); // Change word every 8 seconds
    }

    // Scroll header hide/show logic
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Ignore small scrolls or negative/overscroll
            if (Math.abs(currentScrollY - lastScrollY) < 5 || currentScrollY < 0) return;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide header
                header.classList.add('header--hidden');
            } else {
                // Scrolling up - show header
                header.classList.remove('header--hidden');
            }
            
            lastScrollY = currentScrollY;
        });
    }
});

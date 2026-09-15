import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "../components/SiteShell";
import { InstagramSection, Location, SectionIntro } from "../components/Sections";
import { businessConfig } from "../data/businessConfig";
import { images, realPizzaImages } from "../data/images";
import { menuData } from "../data/menuData";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Espresso Club Genève | Pizza, Drinks & Good Times aux Pâquis" },
    { name: "description", content: "Découvrez Espresso Club aux Pâquis à Genève. Pizza, pasta, drinks et bonne ambiance au cœur de Genève." },
    { property: "og:title", content: "Espresso Club Genève | Pizza, Drinks & Good Times aux Pâquis" },
    { property: "og:description", content: "Pizza, pasta, drinks et bonne ambiance au cœur de Genève." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "/" }
  ], links: [{ rel: "canonical", href: "/" }], scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org", "@type":["Restaurant","BarOrPub","LocalBusiness"], name:"Espresso Club", telephone:"+41227388488", servesCuisine:["Pizza","Italian"], address:{"@type":"PostalAddress",streetAddress:"Rue des Pâquis 25",postalCode:"1201",addressLocality:"Genève",addressCountry:"CH"} }) }] }),
  component: HomePage,
});

function HomePage() {
  const { t, locale } = useLanguage();
  const featured = menuData.filter((entry) => entry.featured);
  const photos = realPizzaImages.slice(0, 4);
  return <>
    <section className="home-hero"><img src={images.roomWide} alt={t.a11y.heroAlt} fetchPriority="high"/><div className="image-shade"/><div className="hero-content"><p className="hero-brand">ESPRESSO CLUB</p><p className="hero-strap">{t.home.strap}</p><h1>{t.home.title}</h1><p className="hero-description">{t.home.description}</p><div className="button-row"><Link className="button" to="/le-club">{t.common.discover}</Link><a className="button button-outline" href={businessConfig.googleMaps} target="_blank" rel="noreferrer"><MapPin size={17}/>{t.common.directions}</a></div><p className="hero-address">{businessConfig.address.street} · {businessConfig.address.city}</p></div><ArrowDown className="scroll-cue" aria-hidden="true"/></section>
    <section className="editorial-split"><div><SectionIntro label={t.home.label} title={t.home.introTitle}/><p>{t.home.intro1}</p><p>{t.home.intro2}</p><Link className="text-link" to="/le-club">{t.common.discover}<ArrowRight size={18}/></Link></div><img src={images.roomCurve} alt={t.a11y.barAlt} loading="lazy"/></section>
    <section className="concept-grid">
      <Concept image={realPizzaImages[1]} kicker={t.home.kickerPizza} title={t.home.pizzaTitle} text={t.home.pizzaText} cta={t.home.pizzasCta} to="/la-carte"/>
      <Concept image={images.drinks} kicker={t.home.kickerDrinks} title={t.home.drinksTitle} text={t.home.drinksText} cta={t.home.drinksCta} to="/la-carte"/>
      <Concept image={images.goodTimes} kicker={t.home.kickerGoodTimes} title={t.home.vibeTitle} text={t.home.vibeText}/>
    </section>
    <section className="manifesto">{t.home.manifesto.map((line) => <span key={line}>{line}</span>)}<small>{t.home.manifestEnd}</small></section>
    <section className="featured-section"><SectionIntro label="Espresso Club" title={t.home.featured} text={t.home.featuredSub}/><div className="food-grid">{featured.map((entry,index) => <article className="food-card" key={entry.name}><div className="food-photo"><img src={photos[index]} alt={`${entry.name} — Espresso Club`} loading="lazy"/></div><div className="food-card-head"><h3>{entry.name}</h3><strong>CHF {entry.price}</strong></div><p>{entry.translations[locale]}</p></article>)}</div><Link className="button" to="/la-carte">{t.home.featuredCta}</Link></section>
    <section className="duo-section"><div className="duo-images"><img src={realPizzaImages[4]} alt={t.a11y.pizzaAlt} loading="lazy"/><img src={images.drinks} alt={t.a11y.drinkAlt} loading="lazy"/></div><div><h2>{t.home.duoTitle}</h2><p>{t.home.duoText}</p><Link className="button" to="/la-carte">{t.common.menu}</Link></div></section>
    <section className="night-section"><img src={images.goodTimes} alt={t.a11y.nightAlt} loading="lazy"/><div className="image-shade"/><div><p className="eyebrow">{t.home.nightEyebrow}</p><h2>{t.home.nightTitle}</h2><p>{t.home.nightText}</p></div></section>
    <InstagramSection/><Location/>
  </>;
}

function Concept({ image, kicker, title, text, cta, to }: { image:string;kicker:string;title:string;text:string;cta?:string;to?:"/la-carte" }) {
  const { t } = useLanguage();
  return <article className="concept-card"><img src={image} alt={t.a11y.ambianceAlt} loading="lazy"/><div className="image-shade"/><div><p className="eyebrow">{kicker}</p><h2>{title}</h2><p>{text}</p>{cta && to && <Link className="text-link" to={to}>{cta}<ArrowRight size={18}/></Link>}</div></article>;
}

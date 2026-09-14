import { Link } from "@tanstack/react-router";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { businessConfig } from "../data/businessConfig";
import { images } from "../data/images";
import { useLanguage } from "./SiteShell";

export function PageHero({ image = images.roomWide, eyebrow, title, copy }: { image?: string; eyebrow?: string; title: string; copy?: string }) {
  const { t } = useLanguage();
  return <section className="page-hero"><img src={image} alt={t.a11y.interiorAlt}/><div className="image-shade"/><div className="page-hero-content">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>{copy && <p>{copy}</p>}</div></section>;
}

export function SectionIntro({ label, title, text, align = "left" }: { label?: string; title: string; text?: string; align?: "left"|"center" }) {
  return <div className={`section-intro section-intro--${align}`}>{label && <p className="eyebrow">{label}</p>}<h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function OpeningHours() {
  const { t } = useLanguage();
  return <div className="hours"><span>{t.common.hours}</span><strong>{t.common.unconfirmed}</strong></div>;
}

export function Location() {
  const { t } = useLanguage();
  return <section className="location-section">
    <div className="location-copy"><p className="eyebrow">{t.home.locationEyebrow}</p><h2>{t.home.location}</h2><address><strong>ESPRESSO CLUB</strong><br/>{businessConfig.address.street}<br/>{businessConfig.address.postalCode} {businessConfig.address.city}<br/>{businessConfig.address.country}</address><a href={businessConfig.phoneHref}>{businessConfig.phone}</a><OpeningHours/><div className="button-row"><a className="button" href={businessConfig.googleMaps} target="_blank" rel="noreferrer"><MapPin size={17}/>{t.common.directions}</a><a className="button button-outline" href={businessConfig.phoneHref}><Phone size={17}/>{t.common.call}</a></div></div>
    <iframe title={t.a11y.mapTitle} src={businessConfig.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </section>;
}

export function InstagramSection() {
  const { t } = useLanguage();
  return <section className="instagram-section"><div><p className="eyebrow">Instagram</p><h2>{t.home.instagram}</h2><p>{t.home.instagramText}</p></div><a className="text-link" href={businessConfig.instagram} target="_blank" rel="noreferrer">{t.common.follow}<ArrowUpRight size={18}/></a></section>;
}

export function CTASection() {
  const { t } = useLanguage();
  return <section className="cta-section"><h2>{t.home.location}</h2><Link className="button" to="/contact">{t.nav.contact}<ArrowUpRight size={17}/></Link></section>;
}

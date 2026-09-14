import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { OpeningHours, PageHero } from "../components/Sections";
import { useLanguage } from "../components/SiteShell";
import { businessConfig } from "../data/businessConfig";
import { images } from "../data/images";

export const Route=createFileRoute("/contact")({head:()=>({meta:[{title:"Contact | Espresso Club Genève"},{name:"description",content:"Retrouvez Espresso Club, Rue des Pâquis 25 à Genève. Téléphone, itinéraire et contact."},{property:"og:title",content:"Contact | Espresso Club Genève"},{property:"og:description",content:"On se retrouve aux Pâquis, Rue des Pâquis 25."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/contact"}],links:[{rel:"canonical",href:"/contact"}]}),component:ContactPage});
function ContactPage(){
  const { t } = useLanguage();
  const [sent,setSent]=useState(false);
  const submit=(e:FormEvent)=>{e.preventDefault();setSent(true)};
  return <>
    <PageHero image={images.clock} eyebrow={t.contact.eyebrow} title={t.contact.title} copy={t.contact.subtitle}/>
    <section className="contact-grid"><div className="contact-info"><p className="eyebrow">{t.contact.address}</p><h2>ESPRESSO CLUB</h2><address>{businessConfig.address.street}<br/>{businessConfig.address.postalCode} {businessConfig.address.city}<br/>{businessConfig.address.country}</address><a href={businessConfig.phoneHref}>{businessConfig.phone}</a><OpeningHours/><div className="button-row"><a className="button" href={businessConfig.googleMaps} target="_blank" rel="noreferrer"><MapPin size={17}/>{t.common.directions}</a><a className="button button-outline" href={businessConfig.phoneHref}><Phone size={17}/>{t.common.call}</a></div></div><form onSubmit={submit}><label>{t.contact.name}<input name="name" placeholder={t.contact.namePlaceholder} required/></label><label>{t.contact.email}<input type="email" name="email" placeholder={t.contact.emailPlaceholder} required/></label><label>{t.contact.phone}<input type="tel" name="phone" placeholder={t.contact.phonePlaceholder}/></label><label>{t.contact.message}<textarea name="message" rows={5} placeholder={t.contact.messagePlaceholder} required/></label><button className="button" type="submit">{t.contact.send}</button>{sent&&<p role="status" className="form-success">{t.contact.sent}</p>}</form></section>
    <iframe className="contact-map" title={t.a11y.mapTitle} src={businessConfig.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
  </>;
}

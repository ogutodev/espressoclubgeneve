import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero } from "../components/Sections";
import { useLanguage } from "../components/SiteShell";
import { images } from "../data/images";

export const Route = createFileRoute("/le-club")({ head: () => ({ meta: [{ title:"Le Club | Espresso Club Genève"},{name:"description",content:"Découvrez l’esprit urbain, convivial et nocturne d’Espresso Club aux Pâquis."},{property:"og:title",content:"Le Club | Espresso Club Genève"},{property:"og:description",content:"Pizza, drinks et good times au cœur des Pâquis."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/le-club"}],links:[{rel:"canonical",href:"/le-club"}] }), component: ClubPage });
function ClubPage(){
  const { t } = useLanguage();
  const pics = [undefined, images.drinks, images.roomCurve, images.roomBar];
  return <>
    <PageHero image={images.roomCurve} eyebrow={t.club.eyebrow} title={`${t.club.headlineLine1}\n${t.club.headlineLine2}`}/>
    <section className="club-intro"><h2>{t.club.lead}</h2><p>{t.club.text}</p></section>
    <section className="club-blocks">{t.club.blocks.map((title,i)=><article key={title} className={pics[i] ? undefined : "club-block--typographic"}>{pics[i] && <img src={pics[i]} alt={title} loading="lazy"/>}<span>0{i+1}</span><h2>{title}</h2>{!pics[i] && <p>{t.home.pizzaText}</p>}</article>)}</section>
    <CTASection/>
  </>;
}

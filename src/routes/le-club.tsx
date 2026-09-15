import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero } from "../components/Sections";
import { useLanguage } from "../components/SiteShell";
import { images, realPizzaImages } from "../data/images";

export const Route = createFileRoute("/le-club")({ head: () => ({ meta: [{ title:"Le Club | Espresso Club Genève"},{name:"description",content:"Découvrez l’esprit urbain, convivial et nocturne d’Espresso Club aux Pâquis."},{property:"og:title",content:"Le Club | Espresso Club Genève"},{property:"og:description",content:"Pizza, drinks et good times au cœur des Pâquis."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/le-club"}],links:[{rel:"canonical",href:"/le-club"}] }), component: ClubPage });
function ClubPage(){
  const { t } = useLanguage();
  const pics = [realPizzaImages[0], images.drinks, images.roomCurve, realPizzaImages[3]];
  return <>
    <PageHero image={images.roomCurve} eyebrow={t.club.eyebrow} title={`${t.club.headlineLine1}\n${t.club.headlineLine2}`}/>
    <section className="club-intro"><h2>{t.club.lead}</h2><p>{t.club.text}</p></section>
    <section className="club-blocks">{t.club.blocks.map((title,i)=><article key={title}><img src={pics[i]} alt={title} loading="lazy"/><span>0{i+1}</span><h2>{title}</h2></article>)}</section>
    <CTASection/>
  </>;
}

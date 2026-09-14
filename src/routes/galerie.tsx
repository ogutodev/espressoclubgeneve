import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";
import { PageHero } from "../components/Sections";
import { useLanguage } from "../components/SiteShell";
import { galleryImages, images } from "../data/images";

export const Route=createFileRoute("/galerie")({head:()=>({meta:[{title:"Galerie | Espresso Club Genève"},{name:"description",content:"Découvrez en images l’atmosphère d’Espresso Club aux Pâquis à Genève."},{property:"og:title",content:"Galerie | Espresso Club Genève"},{property:"og:description",content:"Les lumières, les verres et les soirées aux Pâquis."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/galerie"}],links:[{rel:"canonical",href:"/galerie"}]}),component:GalleryPage});
function GalleryPage(){
  const { t } = useLanguage();
  const [filter,setFilter]=useState("all");
  const [selected,setSelected]=useState<string|null>(null);
  const filters=["all","pizza","drinks","food","people","atmosphere"] as const;
  const visible=filter==="all"?galleryImages:galleryImages.filter(x=>x.category===filter);
  return <>
    <PageHero image={images.portraits} eyebrow={t.gallery.eyebrow} title={t.gallery.title} copy={t.gallery.subtitle}/>
    <section className="gallery-page"><div className="gallery-filters">{filters.map(f=><button key={f} className={filter===f?"active":""} onClick={()=>setFilter(f)}>{t.gallery.filters[f]}</button>)}</div><div className="gallery-grid">{visible.map((image,i)=><button key={image.src} onClick={()=>setSelected(image.src)} aria-label={`${t.a11y.galleryImage} ${i+1}`}><img src={image.src} alt={image.alt} loading="lazy"/></button>)}</div></section>
    {selected&&<div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setSelected(null)}><button aria-label={t.common.close} onClick={()=>setSelected(null)}><X/></button><img src={selected} alt={t.a11y.galleryImage} onClick={e=>e.stopPropagation()}/></div>}
  </>;
}

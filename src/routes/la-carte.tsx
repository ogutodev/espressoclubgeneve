import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/Sections";
import { useLanguage } from "../components/SiteShell";
import { categoryOrder, menuData } from "../data/menuData";
import { images, realPizzaImages } from "../data/images";

export const Route = createFileRoute("/la-carte")({ head:()=>({meta:[{title:"La Carte | Espresso Club Genève"},{name:"description",content:"Pizzas, pasta, salades et desserts d’Espresso Club Genève. Tous les prix en CHF."},{property:"og:title",content:"La Carte | Espresso Club Genève"},{property:"og:description",content:"Choisissez ce qui accompagne votre soirée aux Pâquis."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/la-carte"}],links:[{rel:"canonical",href:"/la-carte"}]}),component:MenuPage});
function MenuPage(){
  const { t, locale } = useLanguage();
  return <>
    <PageHero image={images.pizza} eyebrow={t.menu.eyebrow} title={t.menu.title} copy={t.menu.subtitle}/>
    <section className="real-pizza-strip" aria-label={t.menu.realPhotosLabel}>{realPizzaImages.slice(0, 3).map((src, index)=><img key={src} src={src} alt={`${t.a11y.realPizzaAlt} ${index + 1}`} loading="lazy"/>)}</section>
    <nav className="category-nav" aria-label={t.menu.navLabel}>{categoryOrder.map(cat=><a key={cat} href={`#${cat}`}>{t.menu.categories[cat]}</a>)}</nav>
    <div className="menu-page">{categoryOrder.map(cat=><section id={cat} key={cat} className="menu-category"><div className="menu-category-title"><span>0{categoryOrder.indexOf(cat)+1}</span><h2>{t.menu.categories[cat]}</h2></div><div className="menu-items">{menuData.filter(x=>x.category===cat).map(entry=><article className="menu-item" key={`${cat}-${entry.name}`}><div><h3>{entry.name}</h3><p>{entry.translations[locale]}</p></div><strong>CHF {entry.price}</strong></article>)}{!menuData.some(x=>x.category===cat)&&<p className="empty-menu">{t.menu.empty}</p>}</div></section>)}</div>
  </>;
}

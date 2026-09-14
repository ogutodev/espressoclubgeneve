import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { businessConfig } from "../data/businessConfig";
import type { Locale } from "../data/menuData";
import { isLocale, translations, type Translation } from "../translations";

type LanguageContextValue = { locale: Locale; t: Translation; setLocale: (locale: Locale) => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within SiteShell");
  return value;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    const stored = window.localStorage.getItem("espresso-locale");
    if (isLocale(stored)) setLocaleState(stored);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setMenuOpen(false), [pathname]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("espresso-locale", next);
    document.documentElement.lang = next;
  };
  const t = translations[locale] as Translation;
  const links = [["/", t.nav.home], ["/le-club", t.nav.club], ["/la-carte", t.nav.menu], ["/galerie", t.nav.gallery], ["/contact", t.nav.contact]] as const;

  return <LanguageContext.Provider value={{ locale, t, setLocale }}>
    <header className={`site-header ${scrolled || pathname !== "/" ? "site-header--solid" : ""}`}>
      <Link to="/" className="brand" aria-label={t.a11y.homeLink}><span>ESPRESSO</span><span>CLUB</span></Link>
      <nav className="desktop-nav" aria-label={t.a11y.mainNav}>
        {links.map(([to,label]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "active" }}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <LanguageSwitcher compact />
        <a className="button button-small" href={businessConfig.googleMaps} target="_blank" rel="noreferrer"><MapPin size={15}/>{t.nav.find}</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.common.close : t.common.menuLabel} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label={t.a11y.mobileNav}>
        {links.map(([to,label]) => <Link key={to} to={to}>{label}</Link>)}
        <LanguageSwitcher />
      </nav>}
    </header>
    <main>{children}</main>
    <Footer />
    <div className="mobile-cta">
      <a href={businessConfig.phoneHref}><Phone size={17}/>{t.common.call}</a>
      <a href={businessConfig.googleMaps} target="_blank" rel="noreferrer"><MapPin size={17}/>{t.common.directions}</a>
    </div>
  </LanguageContext.Provider>;
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  return <div className={`language-switcher ${compact ? "language-switcher--compact" : ""}`} aria-label={t.a11y.language}>
    {(["fr","en","pt"] as Locale[]).map((lang) => <button key={lang} className={locale === lang ? "active" : ""} onClick={() => setLocale(lang)} aria-pressed={locale === lang}>{lang.toUpperCase()}</button>)}
  </div>;
}

function Footer() {
  const { t } = useLanguage();
  return <footer className="footer">
    <div className="footer-brand"><strong>ESPRESSO CLUB</strong><span>Pizza · Drinks · Wine · Good Times</span></div>
    <address>{businessConfig.address.street}<br/>{businessConfig.address.postalCode} {businessConfig.address.city}<br/><a href={businessConfig.phoneHref}>{businessConfig.phone}</a></address>
    <nav><Link to="/">{t.nav.home}</Link><Link to="/le-club">{t.nav.club}</Link><Link to="/la-carte">{t.nav.menu}</Link><Link to="/galerie">{t.nav.gallery}</Link><Link to="/contact">{t.nav.contact}</Link></nav>
    <div className="footer-meta"><LanguageSwitcher/><a href={businessConfig.instagram} target="_blank" rel="noreferrer">Instagram</a></div>
    <div className="footer-bottom"><span>© Espresso Club Genève. {t.footer.rights}</span><a href="https://triadepublicite.ch" target="_blank" rel="noreferrer">{t.footer.by}</a></div>
  </footer>;
}
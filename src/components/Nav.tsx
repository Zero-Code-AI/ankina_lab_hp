"use client";
import { usePathname } from "next/navigation";
import { useLang } from "./LangContext";
import { useState } from "react";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLangSwitch = () => {
    const newLang = lang === "en" ? "ja" : "en";
    setLang(newLang);
    if (pathname.startsWith("/blog/en")) {
      window.location.href = pathname.replace("/blog/en", "/blog/ja");
    } else if (pathname.startsWith("/blog/ja")) {
      window.location.href = pathname.replace("/blog/ja", "/blog/en");
    }
  };

  const navItems = [
    { href: "/#problem", label: t("Problem", "課題") },
    { href: "/#research", label: t("Research", "研究") },
    { href: "/#soma", label: "SOMA" },
    { href: lang === "ja" ? "/blog/ja" : "/blog/en", label: "Blog" },
    { href: "/#contact", label: t("Contact", "連絡先") },
  ];

  return (
    <nav className="site-nav">
      <div className="site-nav-bar">
        <a href="/" className="site-nav-logo">Ankina Lab</a>
        <div className="site-nav-right">
          <div className="site-nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="site-nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <button onClick={handleLangSwitch} className="site-nav-lang">
            {lang === "en" ? "日本語" : "EN"}
          </button>
          <button className="site-nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="site-nav-mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-mobile-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

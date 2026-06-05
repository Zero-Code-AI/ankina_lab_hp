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

  const mono = "'DM Mono', monospace";
  const serif = "'Shippori Mincho', serif";

  return (
    <>
      <style>{`
        .nav-links { display: flex; gap: 2.5rem; align-items: center; }
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: transparent; border: none; cursor: pointer; padding: 0.2rem; }
        .nav-hamburger span { display: block; width: 22px; height: 1px; background: #1a1008; transition: all 0.2s; }
        .nav-mobile { display: none; flex-direction: column; padding: 1rem 1.5rem 1.5rem; border-top: 1px solid rgba(58,28,82,0.06); gap: 1.2rem; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile.open { display: flex !important; }
          .nav-bar { padding: 1.2rem 1.5rem !important; }
        }
      `}</style>
      <nav style={{ position: "fixed", top: "4px", left: 0, right: 0, zIndex: 100, background: "rgba(247,244,239,0.94)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(58,28,82,0.06)" }}>
        <div className="nav-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.4rem 5rem 1.4rem 6.5rem" }}>
          <a href="/" style={{ fontFamily: serif, fontSize: "1.1rem", color: "#1a1008", letterSpacing: "0.08em", fontWeight: 400, textDecoration: "none" }}>
            Ankina Lab
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className="nav-links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} style={{ fontFamily: mono, fontSize: "0.6rem", color: "#6b5c4e", textDecoration: "none", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  {item.label}
                </a>
              ))}
            </div>
            <button onClick={handleLangSwitch} style={{ fontFamily: mono, fontSize: "0.6rem", color: "#5c3d7a", background: "transparent", border: "1px solid rgba(58,28,82,0.2)", padding: "0.2rem 0.6rem", letterSpacing: "0.1em", cursor: "pointer", whiteSpace: "nowrap" }}>
              {lang === "en" ? "日本語" : "EN"}
            </button>
            <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
            </button>
          </div>
        </div>
        <div className={`nav-mobile${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: mono, fontSize: "0.75rem", color: "#6b5c4e", textDecoration: "none", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

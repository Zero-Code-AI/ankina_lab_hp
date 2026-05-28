"use client";
import { useLang } from "./LangContext";

export default function Nav() {
  const { lang, setLang, t } = useLang();

  return (
    <nav
      style={{
        position: "fixed",
        top: "4px",
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.4rem 5rem 1.4rem 6.5rem",
        background: "rgba(247,244,239,0.94)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line-faint)",
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "'Shippori Mincho', serif",
          fontSize: "1.1rem",
          color: "var(--ink)",
          letterSpacing: "0.08em",
          fontWeight: 400,
          textDecoration: "none",
        }}
      >
        Ankina Lab
      </a>

      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {[
          { href: "/#problem", label: t("Problem", "問題") },
          { href: "/#research", label: t("Research", "研究") },
          { href: "/#soma", label: "SOMA" },
          { href: "/blog", label: "Blog" },
          { href: "/#contact", label: t("Contact", "連絡先") },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            {item.label}
          </a>
        ))}

        {/* 言語切り替え */}
        <button
          onClick={() => setLang(lang === "en" ? "ja" : "en")}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            color: "var(--anko-mid)",
            background: "transparent",
            border: "1px solid rgba(58,28,82,0.2)",
            padding: "0.2rem 0.6rem",
            letterSpacing: "0.1em",
            cursor: "pointer",
          }}
        >
          {lang === "en" ? "日本語" : "EN"}
        </button>
      </div>
    </nav>
  );
}

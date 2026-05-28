import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/components/LangContext";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Ankina Lab — Independent AI Research",
  description:
    "Researching personal AI systems that form lasting relationships with their users. Beyond context windows, beyond sessions.",
  openGraph: {
    title: "Ankina Lab — Independent AI Research",
    description: "AI should remember the people it grows with.",
    url: "https://ankina.ai",
    siteName: "Ankina Lab",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          {/* 構造ライン */}
          <div
            style={{
              position: "fixed",
              left: "3.5rem",
              top: 0,
              bottom: 0,
              width: "4px",
              background: "var(--ink)",
              opacity: 0.08,
              zIndex: 50,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: "3.5rem",
              right: "3.5rem",
              height: "4px",
              background: "var(--ink)",
              opacity: 0.08,
              zIndex: 50,
              pointerEvents: "none",
            }}
          />
          <Nav />
          {children}
          <footer
            style={{
              borderTop: "1px solid var(--line-faint)",
              padding: "2.5rem 5rem 2.5rem 6.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Shippori Mincho', serif",
                fontSize: "0.82rem",
                color: "var(--muted)",
                letterSpacing: "0.04em",
              }}
            >
              © 2026 Ankina Lab
            </span>
          </footer>
        </LangProvider>
      </body>
    </html>
  );
}

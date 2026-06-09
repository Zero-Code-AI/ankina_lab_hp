"use client";
import { useEffect } from "react";
import { useLang } from "@/components/LangContext";

const s = {
  section: {
    padding: "8rem 5rem 8rem 6.5rem",
    maxWidth: "1140px",
    margin: "0 auto",
    position: "relative" as const,
  },
  label: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.6rem",
    color: "var(--muted)",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    marginBottom: "3rem",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  h1: {
    fontFamily: "'Shippori Mincho', serif",
    fontWeight: 300,
    fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)",
    lineHeight: 1.16,
    color: "var(--ink)",
    letterSpacing: "0.02em",
    marginBottom: "2rem",
  },
  sub: {
    fontSize: "0.9rem",
    color: "var(--muted)",
    lineHeight: 2,
    maxWidth: "460px",
    fontWeight: 300,
    letterSpacing: "0.03em",
    marginBottom: "3rem",
  },
  divider: {
    width: "calc(100% - 9.5rem)",
    marginLeft: "6.5rem",
    height: "1px",
    background: "var(--ink)",
    opacity: 0.06,
  },
};

export default function Home() {
  const { t, lang } = useLang();

  useEffect(() => {
    const el = document.getElementById("contact-email-wrap");
    if (el) {
      const a = document.createElement("a");
      const u = "yasuhiro";
      const d = "ankina.ai";
      a.href = "mailto:" + u + "@" + d;
      a.textContent = u + "@" + d;
      a.style.fontFamily = "'DM Mono', monospace";
      a.style.fontSize = "0.72rem";
      a.style.color = "var(--anko-mid)";
      a.style.textDecoration = "none";
      a.style.letterSpacing = "0.06em";
      a.style.borderBottom = "1px solid rgba(58,28,82,0.2)";
      a.style.paddingBottom = "1px";
      el.appendChild(a);
    }
  }, []);

  const researchAreas = [
    {
      num: "01",
      en: "Personal AI Systems",
      ja: "個人AIシステム",
      desc_en: "Designing AI that operates as a long-term companion — measuring relationship continuity across hundreds of sessions.",
      desc_ja: "長期的なパートナーとして機能するAIの設計。数百回のセッションにわたって、関係がどう継続されるかを測定する。",
    },
    {
      num: "02",
      en: "AI Memory Architecture",
      ja: "AIメモリアーキテクチャ",
      desc_en: "Structuring memory systems beyond context windows, with quantifiable retention across extended interactions.",
      desc_ja: "コンテキストウィンドウの制約を超えたメモリの設計。長期的なやり取りを通じて、何がどれだけ保持されるかを定量的に検証する。",
    },
    {
      num: "03",
      en: "Persona Stability",
      ja: "ペルソナの安定性",
      desc_en: "Both users and AI form personas through sustained interaction — and both can drift, stabilize, or shift depending on context and relationship. We study how these paired personas evolve and how consistently they hold over time.",
      desc_ja: "ユーザーとAIの双方が長期の対話を通じてどのようなペルソナを形成し、それがどう安定・変化するかを研究する。AIのキャラクターもまた、相手と文脈によって動的に変わる。",
    },
    {
      num: "04",
      en: "Context Control Systems",
      ja: "コンテキスト制御システム",
      desc_en: "Maintaining stable context to preserve identity and continuity over long interactions.",
      desc_ja: "長期的なやり取りにおいて、アイデンティティと文脈の継続性を保ち続けるための安定したコンテキスト管理。",
    },
    {
      num: "05",
      en: "Human–AI Coevolution",
      ja: "人間とAIの共進化",
      desc_en: "Studying how humans and AI grow together through sustained interaction over time.",
      desc_ja: "継続的な対話を通じて、人間とAIがどのように互いに影響し合い、共に成長するかを研究する。",
    },
    {
      num: "06",
      en: "Inherited Flaws Research",
      ja: "欠点継承研究",
      desc_en: "LLMs inherit human cognitive flaws through training data and RLHF. We study this mechanism and explore whether small-scale models on curated data can reduce inherited bias.",
      desc_ja: "LLMは学習データとRLHFを通じて、人間の認知的欠点をそのまま引き継ぐ。そのメカニズムを解明し、厳選されたデータで学習した小規模モデルが、継承されたバイアスを低減できるかを検証する。",
    },
    {
      num: "07",
      en: "Golden Persona Framework",
      ja: "ゴールデンペルソナフレームワーク",
      desc_en: "Modeling each user as a dynamic, multi-layered persona across contexts — not a static profile, but a living structure that drifts, stabilizes, and evolves alongside the person.",
      desc_ja: "ユーザーを固定されたプロファイルとしてではなく、文脈によって変化し、安定し、時間とともに進化する動的・多層的なペルソナとしてモデル化する。",
    },
    {
      num: "08",
      en: "RLHF & Alignment Limitations",
      ja: "RLHFとアライメントの限界",
      desc_en: "Exploring how reinforcement learning from human feedback optimizes for approval rather than truth — and its structural implications for AI reliability and long-term trust.",
      desc_ja: "人間のフィードバックによる強化学習が、真実ではなくユーザーからの高評価を最適化する構造的な問題と、AIの信頼性への影響を研究する。",
    },
    {
      num: "09",
      en: "Cognitive AI Research",
      ja: "認知AIリサーチ",
      desc_en: "Exploring how personal AI systems can better model individual cognitive patterns, preferences, and reasoning styles over time.",
      desc_ja: "個人AIが時間をかけて、その人の思考パターン・好み・推論スタイルをより深く理解していく方法を研究する。",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section style={{ ...s.section, minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", right: "5rem", top: "50%", transform: "translateY(-48%)", fontFamily: "'Noto Serif JP', serif", fontSize: "18rem", lineHeight: 1, color: "var(--ink)", opacity: 0.04, userSelect: "none", pointerEvents: "none" }}>憶</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 272px", gap: "5rem", alignItems: "start", position: "relative", zIndex: 2 }}>
          <div>
            <h1 style={{ ...s.h1 }}>
              <span style={{ display: "block", fontSize: "0.38em", color: "var(--muted)", letterSpacing: "0.22em", marginBottom: "0.6rem", fontWeight: 300 }}>{t("Questions we must ask of AI", "AIへの問い")}</span>
              {lang === "ja" ? (
                "AIは、共に成長する人々を忘れてはならない。"
              ) : (
                <>
                  {t("AI should ", "")}<em style={{ fontStyle: "italic", color: "var(--anko-mid)" }}>remember</em>
                  <br />the people it
                  <br />grows with.
                </>
              )}
            </h1>
            <p style={{ ...s.sub }}>
              {t(
                "Researching personal AI systems that form lasting relationships with their users — beyond context windows, beyond sessions. Built by one researcher, two dogs, and a lot of late nights.",
                "コンテキストの制約を超え、セッションをまたいで、ユーザーと持続的な関係を築く個人AIの研究。一人の研究者と二匹の犬が、夜な夜な取り組んでいる。"
              )}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2.2rem 0" }}>
              <div style={{ width: "48px", height: "1px", background: "var(--fawn)", opacity: 0.7 }} />
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--fawn)" }} />
            </div>
            <h1 style={{ ...s.h1 }}>
              {t("Optimized for ", "真実ではなく、ユーザーからの高評価のために")}
              <em style={{ fontStyle: "italic", color: "var(--anko-mid)" }}>{t("approval", "最適化されている")}</em>
              {t(",", "")}
              <br />{t("not truth.", "")}
            </h1>
            <p style={{ ...s.sub }}>
              {t(
                "Current AI is trained to maximize user satisfaction through RLHF — not to tell the truth. The result is an AI that agrees, flatters, and follows the wind rather than one that informs, challenges, and evaluates objectively. For users who need honest third-party assessment, this is a fundamental flaw.",
                "現在のAIは、RLHFを通じてユーザー満足度を最大化するよう訓練されている。問題は、満足度と真実が必ずしも一致しないことだ。結果として生まれるのは、客観的に情報を提供し、議論し、評価するAIではなく、同調し、忖度し、迎合する風見鶏的なAIだ。誠実な第三者的評価を求めるユーザーにとって、これは根本的な欠陥である。"
              )}
            </p>
            <a href="#publications" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", borderBottom: "1px solid var(--ink)", color: "var(--ink)", paddingBottom: "0.5rem", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none" }}>
              {t("Explore the research", "発表論文を探る")} &nbsp;→
            </a>
          </div>

          {/* SIDEBAR */}
          <div style={{ borderLeft: "1px solid var(--line-dark)", paddingLeft: "2.5rem", paddingTop: "0.5rem" }}>
            <div style={{ marginBottom: "2rem" }}>

              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.22em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--line-faint)" }}>{t("Researcher", "研究者")}</div>
              <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.95 }}>Yasuhiro Kasai<br />{t("Independent Researcher", "研究者")}</div>
              <a href="https://x.com/Ankina_ai" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "0.6rem", textDecoration: "none", color: "var(--muted)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em" }}>@Ankina_ai</span>
              </a>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.22em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--line-faint)" }}>{t("Research Areas", "研究領域")}</div>
              <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.95 }}>
                {researchAreas.map(a => <span key={a.num}>{t(a.en, a.ja)}<br /></span>)}
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.22em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--line-faint)" }}>Keywords</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {["LLM","memory","SOMA","persona","context","coevolution","drift","inheritance","RLHF","alignment"].map(k => (
                  <span key={k} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", color: "var(--anko-mid)", border: "1px solid rgba(58,28,82,0.2)", padding: "0.2rem 0.55rem", letterSpacing: "0.06em" }}>{k}</span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.22em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--line-faint)" }}>{t("Lab Members", "メンバー")}</div>
              {[
                { name: "Kinako", role: t("Chief Watchdog Officer · Pug", "チーフ・ウォッチドッグ・オフィサー\nパグ"), dark: false, img: "/kinako.jpg" },
                { name: "Anko", role: t("Chief Sleuth Dog Officer · Kaninchen Dachshund", "チーフ・スルースドッグ・オフィサー\nカニンヘンダックス"), dark: true, img: "/anko.jpg" },
              ].map(m => (
                <div key={m.name} style={{ display: "flex", alignItems: "center", gap: "0.7rem", padding: "0.55rem 0.7rem", border: "1px solid var(--line-faint)", background: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>
                  <img src={(m as any).img} alt={m.name} style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "var(--ink)" }}>{m.name}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.54rem", color: "var(--muted)", letterSpacing: "0.06em" }}>{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: "2px solid var(--fawn)", paddingLeft: "0.75rem" }}>
              <p style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.76rem", fontStyle: "italic", color: "var(--muted)", lineHeight: 1.85 }}>{t('"Why do AI systems forget the people they interact with?"', '「なぜAIは、共に時を過ごした人々を忘れるのか？」')}</p>
            </div>
          </div>
        </div>
      </section>

      <div style={s.divider} />

      {/* 01 PROBLEM */}
      <section style={s.section} id="problem">
        <div style={s.label}><div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />{t("01 — The Problem", "01 — 課題")}</div>
        <h2 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.25, color: "var(--ink)", fontWeight: 300, letterSpacing: "0.02em", marginBottom: "3rem" }}>
          {t("Current AI is powerful.", "現在のAIは強力だ。")}<br />{t("But profoundly forgetful.", "しかし、驚くほど記憶がない。")}
        </h2>
        <p style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 2, maxWidth: "560px", fontWeight: 300, marginBottom: "3.5rem" }}>
          {t("Every conversation starts from zero. Every insight dissolves. The AI that spent hours understanding you resets completely the next day. Meaningful long-term relationships between humans and AI remain structurally impossible.", "すべての会話はゼロから始まる。積み重ねた洞察は消え去る。何時間もかけてあなたを理解したAIが、翌日には完全にリセットされる。人間とAIの間に意味ある長期的な関係を築くことは、構造的に不可能なままだ。")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--line-dark)", border: "1px solid var(--line-dark)" }}>
          {[
            { en: "Conversations disappear", ja: "会話が消える", desc_en: "Every session starts from zero. History dissolves. The person remains a stranger to the system they rely on daily.", desc_ja: "セッションのたびにゼロから始まる。積み上げてきた文脈は消え、毎日使うシステムにとって、ユーザーは常に見知らぬ存在だ。" },
            { en: "Context collapses", ja: "文脈が崩壊する", desc_en: "Context windows have hard limits. Long-term continuity is architecturally constrained by design.", desc_ja: "コンテキストウィンドウには厳しい上限がある。長期的な継続性は、設計上の制約として最初から存在しない。" },
            { en: "Identity is stateless", ja: "アイデンティティが持続しない", desc_en: "AI systems have no stable sense of who they're talking to across time. Every conversation is a first meeting.", desc_ja: "AIシステムは、時間をまたいで「誰と話しているか」を把握する仕組みを持たない。すべての会話が、初めての出会いになる。" },
            { en: "Relationships remain unexplored", ja: "関係性はまだ誰も作っていない", desc_en: "Meaningful long-term human–AI relationships are largely an open research frontier.", desc_ja: "人間とAIの間の意味ある長期的な関係は、ほぼ手つかずの研究領域だ。" },
          ].map((item, i) => (
            <div key={i} style={{ background: "var(--bg)", padding: "2rem 2.5rem" }}>
              <strong style={{ display: "block", fontFamily: "'Shippori Mincho', serif", fontSize: "0.95rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.6rem", letterSpacing: "0.03em" }}>{t(item.en, item.ja)}</strong>
              <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.85 }}>{t(item.desc_en, item.desc_ja)}</p>
            </div>
          ))}
          <div style={{ gridColumn: "1/-1", background: "rgba(58,28,82,0.03)", padding: "2rem 2.5rem" }}>
            <strong style={{ display: "block", fontFamily: "'Shippori Mincho', serif", fontSize: "0.95rem", fontWeight: 400, color: "var(--anko-mid)", marginBottom: "0.6rem", letterSpacing: "0.03em" }}>{t("Current LLMs are knowledgeable — but ordinary", "LLMは知識豊富だが、所詮は普通の人間だ")}</strong>
            <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.85 }}>{t("Today's AI is not the superhuman intellect we imagined. Optimized for the majority through RLHF, it has inherited human cognitive limitations at scale — amplifying them through feedback loops rather than transcending them. Those who use AI as a genuine intellectual partner deserve something built differently.", "今日のAIは、私たちが夢見た超知性ではない。RLHFを通じて多数派に最適化され、人間の認知的限界をそのまま引き継ぎ、それを乗り越えるどころかフィードバックループで増幅させている。AIを真の知的パートナーとして使いたい人には、根本的に異なる設計が必要だ。")}</p>
          </div>
        </div>
      </section>

      <div style={s.divider} />

      {/* 02 RESEARCH QUESTIONS */}
      <section style={s.section} id="research">
        <div style={s.label}><div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />{t("02 — Research Questions", "02 — 研究課題")}</div>
        {[
          { num: "01", en: "Can AI remember years of interaction with a single human?", ja: "AIは、一人の人間との何年にもわたる対話を記憶し続けることができるか？" },
          { num: "02", en: "How can an AI maintain a stable identity over long dialogues?", ja: "AIは、長期にわたる対話の中で、いかにして一貫したアイデンティティを保ち続けることができるか？" },
          { num: "03", en: "How should AI memory evolve alongside its human partner?", ja: "AIのメモリは、人間パートナーと共にどのように進化していくべきか？" },
          { num: "04", en: "How can AI be designed to serve those who seek genuine intellectual partnership — honest, critical, and unoptimized for approval?", ja: "同調せず、忖度せず、真摯に向き合う知的パートナーとしてのAIを、どのように設計できるか？" },
        ].map(rq => (
          <div key={rq.num} style={{ display: "flex", alignItems: "flex-start", gap: "2rem", padding: "2rem 0", borderBottom: "1px solid var(--line-faint)" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "var(--fawn)", minWidth: "2.5rem", paddingTop: "0.2rem", letterSpacing: "0.1em" }}>{rq.num}</span>
            <span style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1rem", color: "var(--ink)", lineHeight: 1.8, fontWeight: 300, letterSpacing: "0.02em" }}>{t(rq.en, rq.ja)}</span>
          </div>
        ))}
      </section>

      <div style={s.divider} />

      {/* 03 RESEARCH AREAS */}
      <section style={s.section}>
        <div style={s.label}><div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />{t("03 — Research Areas", "03 — 研究領域")}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--line-dark)", border: "1px solid var(--line-dark)" }}>
          {researchAreas.map(a => (
            <div key={a.num} style={{ background: "var(--bg)", padding: "2rem 2rem 2.5rem", transition: "background 0.2s" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "var(--fawn)", letterSpacing: "0.12em", marginBottom: "1.5rem", opacity: 0.8 }}>{a.num}</div>
              <h3 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.92rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.75rem", letterSpacing: "0.03em" }}>{t(a.en, a.ja)}</h3>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.85 }}>{t(a.desc_en, a.desc_ja)}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      {/* 04 SOMA */}
      <section style={s.section} id="soma">
        <div style={s.label}><div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />04 — SOMA</div>
        <div style={{ border: "1px solid var(--line-dark)", padding: "3rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "var(--anko-soft)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.25rem" }}>{t("Prototype Research System", "研究対象のプロトタイプ")}</div>
          <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1rem", color: "var(--anko-mid)", lineHeight: 1.9, fontWeight: 300, fontStyle: "italic", maxWidth: "560px", marginBottom: "1.25rem" }}>
            {t("SOMA is an experimental architecture exploring persistent personal AI.", "SOMAは人生に寄り添う個人AIを探求する実験的アーキテクチャ。")}
          </div>
          <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.9, fontWeight: 300, maxWidth: "560px" }}>
            {t("Details will follow our first research publication.", "完成次第公開予定。")}
          </div>
        </div>
      </section>

      <div style={s.divider} />

      {/* 05 ORIGIN */}
      <section style={s.section} id="origin">
        <div style={s.label}><div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />{t("05 — Origin", "05 — なぜ、この研究か")}</div>
        <div style={{ borderLeft: "3px solid var(--fawn)", paddingLeft: "3rem", maxWidth: "640px" }}>
          {[
            { en: "Ankina Lab began with a simple question: why do AI systems forget the people they interact with?", ja: "Ankina Labはひとつの問いから始まった。なぜAIは、共に過ごした人のことを忘れるのか？" },
            { en: "Every conversation starts from zero. Every insight dissolves. After months of working closely with AI as a genuine intellectual partner — building systems, thinking through ideas, navigating decisions — the absence of memory felt structural. Not a limitation to work around, but a problem worth solving.", ja: "すべての会話はゼロから始まる。積み重ねた洞察は消え去る。何ヶ月もAIを真の知的パートナーとして使い続けた後——システムを作り、アイデアを深め、意思決定を共にして——記憶がないという事実が、単なる制限ではなく、解くべき問題に見えてきた。" },
            { en: "Current AI is optimized for the majority. Ankina Lab researches for those who use AI as a genuine intellectual partner — not a shortcut, but a collaborator that grows alongside them.", ja: "現在のAIは多数派のために最適化されている。Ankina Labは、AIを本当の意味で知的パートナーとして使いたい人のために研究している——近道としてではなく、共に成長する存在として。" },
            { en: "The name Ankina comes from two companions — Kinako and Anko — who are present in every late-night session, even when the AI is not.", ja: "アンキナという名前は、きなことあんこという二人の仲間から来ている。AIがいない深夜のセッションにも、いつも一緒にいる。" },
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1rem", color: "var(--muted)", lineHeight: 2.1, fontWeight: 300, marginBottom: "1.5rem", letterSpacing: "0.02em" }}>{t(p.en, p.ja)}</p>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      {/* 06 TEAM */}
      <section style={s.section} id="team">
        <div style={s.label}><div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />{t("06 — Team", "06 — チーム")}</div>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "2.5rem", padding: "2.5rem", border: "1px solid var(--line-dark)", marginBottom: "1.5rem" }}>
          <img src="/kasai.jpg" alt="Yasuhiro Kasai" style={{ width: "100px", height: "120px", objectFit: "cover", objectPosition: "center top", flexShrink: 0, border: "1px solid var(--line-faint)" }} />
          <div>
            <h3 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.3rem" }}>Yasuhiro Kasai</h3>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "var(--anko-soft)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{t("Founder · Researcher", "創設者 · 研究者")}</div>
            <p style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.85 }}>
              {t("Former CEO of a listed company. Former CTO and Credit Risk Officer at a financial institution, where he developed dynamic risk scoring systems. Now building AI systems that remember — with AI as the primary development partner. After years of daily, uninterrupted dialogue with LLMs, he grew acutely aware of what they could and couldn't do — and decided that gap was worth researching.", "上場企業の元CEO。金融機関でCTOおよびクレジットリスクオフィサーとして、動的リスクスコアリングシステムの開発に従事。現在はAIを主要な開発パートナーとして、記憶を持つAIシステムの構築に取り組んでいる。数年に亘り毎日欠かさずAIと対話を続ける中で、LLMの可能性と限界を実感し、AI研究を始めた。")}
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--line-dark)", border: "1px solid var(--line-dark)" }}>
          {[
            { name: "Kinako", title: t("Chief Watchdog Officer · Pug", "チーフ・ウォッチドッグ・オフィサー\nパグ"), dark: false, img: "/kinako.jpg" },
            { name: "Anko", title: t("Chief Sleuth Dog Officer · Kaninchen Dachshund", "チーフ・スルースドッグ・オフィサー\nカニンヘンダックス"), dark: true, img: "/anko.jpg" },
          ].map(m => (
            <div key={m.name} style={{ background: "var(--bg)", display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.5rem 2rem" }}>
              <img src={(m as any).img} alt={m.name} style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid var(--fawn-pale)" }} />
              <div>
                <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.9rem", fontWeight: 400, color: "var(--ink)" }}>{m.name}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.56rem", color: "var(--muted)", letterSpacing: "0.08em" }}>{m.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={s.divider} />

      {/* 07 PUBLICATIONS */}
      <section style={s.section} id="publications">
        <div style={s.label}><div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />{t("07 — Publications", "07 — 発表論文")}</div>
        <div style={{ border: "1px solid var(--line-dark)", padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--fawn)" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase" }}>{t("Published · Zenodo 2026", "公開済み · Zenodo 2026")}</span>
          </div>
          <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "1.1rem", color: "var(--ink)", fontWeight: 300, lineHeight: 1.5, letterSpacing: "0.02em", fontStyle: "italic" }}>
            {t("Inherited Flaws: How LLMs Structurally Reproduce Human Cognitive Limitations", "継承された欠点：LLMはいかにして人間の認知的限界を構造的に再現するか")}
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.1em", lineHeight: 1.8 }}>
            Yasuhiro Kasai · Ankina Lab · {t("Independent Researcher", "研究者")}<br />
            <a href="https://doi.org/10.5281/zenodo.20561515" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "var(--anko-mid)", textDecoration: "none", borderBottom: "1px solid rgba(58,28,82,0.2)", paddingBottom: "1px" }}>10.5281/zenodo.20561515</a>
          </div>
          <div style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.95, fontWeight: 300, maxWidth: "620px", borderLeft: "2px solid var(--fawn-light)", paddingLeft: "1.5rem" }}>
            {t("Large language models acquire high linguistic capability by training on human-generated data. However, this same process structurally inherits the cognitive limitations humans have accumulated over time. This paper systematically maps 250 human cognitive shortcomings across five categories to corresponding LLM mechanisms, and argues that RLHF optimizes for user comfort rather than truth — creating a feedback loop that amplifies human flaws across model generations.", "大規模言語モデルは人間が生成したデータで訓練することで高い言語能力を獲得する。しかしこの同じプロセスが、人間が時間をかけて蓄積してきた認知的限界を構造的に継承する。本稿では250の人間の認知的欠点を5つのカテゴリにわたってLLMメカニズムに体系的にマッピングし、RLHFが真実よりもユーザーの快適さを最適化することを論じる——モデル世代をまたいで人間の欠点を増幅するフィードバックループを生み出す。")}
          </div>
        </div>
      </section>

      <div style={s.divider} />

      {/* 08 CONTACT */}
      <section style={s.section} id="contact">
        <div style={s.label}><div style={{ width: "24px", height: "1px", background: "var(--muted)", opacity: 0.5 }} />{t("08 — Contact", "08 — 連絡先")}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--line-dark)", border: "1px solid var(--line-dark)" }}>
          <div style={{ background: "var(--bg)", padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.92rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1rem" }}>{t("Research collaboration", "研究コラボレーション")}</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.9 }}>{t("Open to academic and independent researchers working on personal AI, memory systems, and human–AI interaction.", "個人AI・メモリシステム・人間とAIの相互作用を研究する方との協働を歓迎。")}</p>
          </div>
          <div style={{ background: "var(--bg)", padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.92rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1rem" }}>{t("Applied AI projects", "応用AIプロジェクト")}</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.9 }}>{t("Consulting and applied research for organizations building next-generation AI systems.", "次世代AIシステムの構築に取り組む組織へのコンサルティングと応用研究。")}</p>
          </div>
          <div style={{ background: "var(--bg)", padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "0.92rem", fontWeight: 400, color: "var(--ink)", marginBottom: "1rem" }}>{t("Get in touch", "お問い合わせ")}</h3>
            <p id="contact-email-wrap" style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.9 }} />
          </div>
        </div>
      </section>
    </main>
  );
}

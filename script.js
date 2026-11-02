/* =========================================================
   Thème clair/sombre · bilingue FR/EN · apparition · bulles
   · épicycle (cercles de Fourier) qui dessine un oiseau
   ========================================================= */

/* ---------------- i18n (traductions) ---------------- */
const I18N = {
  fr: {
    "nav.what": "Ce que je fais", "nav.projects": "Projets", "nav.experience": "Expérience",
    "nav.stack": "Stack", "nav.blog": "Blog", "nav.collab": "Collaborer",
    "intro": "bonjour<b>.</b>",
    "hero.greet": "Bonjour<b>.</b>",
    "hero.lead": "Bienvenue — jette un œil à ce que je construis.",
    "hero.cap": "un oiseau dessiné par une série de Fourier",
    "hero.cta1": "Voir mes projets", "hero.cta2": "Collaborer",
    "what.eyebrow": "Ce que je fais",
    "what.title": "De la donnée au système qui tient",
    "what.sub": "Trois terrains de jeu, une même exigence : des résultats fiables, mesurables et durables.",
    "c1.t": "Machine learning en production",
    "c1.b": "Scoring, NLP, systèmes RAG et agents LLM — conçus pour la précision, la latence et le coût réels, pas pour une démo de benchmark.",
    "c2.t": "Pipelines data &amp; automatisation",
    "c2.b": "Ingestion, transformation, reporting et workflows (n8n, APIs). Des chaînes reproductibles qui font gagner du temps aux équipes.",
    "c3.t": "Modélisation statistique",
    "c3.b": "Inférence causale, modèles de survie, séries temporelles. La rigueur scientifique au service de décisions fiables.",
    "proj.eyebrow": "Projets", "proj.title": "Quelques projets",
    "p1.t": "Agent Recruteur intelligent",
    "p1.b": "Système de matching (RAG) automatisant l'analyse et la mise en relation entre CVs et fiches de poste, exposé via une API REST et une application web temps réel.",
    "p2.t": "Prédiction de churn par boosting",
    "p2.b": "Étude théorique des méthodes de boosting puis application à la prédiction du désabonnement sur 7 000+ clients, traduite en recommandations marketing pour réduire l'attrition.",
    "exp.eyebrow": "Expérience", "exp.title": "Où j'ai travaillé",
    "x1.when": "Juin 2026 – Déc. 2026", "x1.role": "Data Scientist",
    "x1.ul": "<li>Agent de veille concurrentielle : suivi automatisé de 25 sources, scoring par LLM, synthèse hebdomadaire sur Slack.</li><li>Workflows n8n : synchronisation Instantly ↔ HubSpot, enrichissement CRM, détection de signaux d'achat (DRH/SIRH).</li><li>Plugin Figma de traduction de livres blancs par LLM, avec préservation de la mise en forme.</li><li>Automatisation du reporting SEO (Google Search Console, Analytics).</li>",
    "x2.when": "Avr. 2025 – Oct. 2025", "x2.role": "Data Scientist",
    "x2.ul": "<li>Modélisation de l'efficacité thérapeutique du cancer du poumon (NSCLC), cohorte de 933 patients en vie réelle.</li><li>Inférence causale (IPTW) et imputation multiple (MICE) pour corriger biais et données manquantes.</li><li>Prédiction de réponse au traitement (régression logistique, Random Forest, GBM, XGBoost).</li><li>Modèles de survie (Cox, AFT, Aalen) : chimiothérapie identifiée comme facteur protecteur majeur (−85 % de risque).</li>",
    "x3.when": "Mai 2024 – Juil. 2024", "x3.role": "Data Analyst",
    "x3.ul": "<li>Tableaux de bord Power BI pour le suivi du recouvrement et de la dégradation des comptes.</li><li>Automatisation de reportings Excel (VBA) pour fiabiliser les KPIs financiers.</li>",
    "stack.eyebrow": "Stack", "stack.title": "Mes outils",
    "stack.sub": "Choisis pour le travail à faire, pas pour faire joli sur un CV.",
    "stack.g3": "Stats &amp; R",
    "chip.causal": "Inférence causale", "chip.surv": "Modèles de survie", "chip.ts": "Séries temporelles",
    "edu.eyebrow": "Formation", "edu.title": "Mon parcours académique",
    "e1.t": "Ingénieur en Mathématiques Appliquées",
    "e1.b": "Recherche opérationnelle, séries temporelles, Deep &amp; Machine Learning.",
    "e2.t": "Master Actuariat &amp; Ingénierie Mathématique",
    "e2.b": "Actuariat vie &amp; non-vie, réassurance, outils statistiques en assurance.",
    "contact.eyebrow": "Contact", "contact.title": "Construisons quelque chose ensemble",
    "contact.b": "Un projet data, une opportunité, une idée à explorer ? Écris-moi quelques lignes sur le problème, ça me suffit pour voir si je peux aider.",
    "footer.role": "Data Scientist · Paris, France",
    "blog.eyebrow": "Journal", "blog.title": "Blog",
    "blog.sub": "Mes notes sur la data science, le machine learning, l'inférence causale et l'automatisation — au fil de mes projets et de mes lectures.",
    "post1.t": "Pourquoi l'inférence causale change tout en data science",
    "post1.b": "Corrélation n'est pas causalité : retour sur la pondération IPTW et ce qu'elle m'a appris sur une cohorte réelle de patients.",
    "back": "← Retour au blog"
  },
  en: {
    "nav.what": "What I do", "nav.projects": "Projects", "nav.experience": "Experience",
    "nav.stack": "Stack", "nav.blog": "Blog", "nav.collab": "Let's talk",
    "intro": "hello<b>.</b>",
    "hero.greet": "Hello<b>.</b>",
    "hero.lead": "Welcome — take a look at what I build.",
    "hero.cap": "a bird drawn by a Fourier series",
    "hero.cta1": "See my work", "hero.cta2": "Let's talk",
    "what.eyebrow": "What I do",
    "what.title": "From data to systems that hold up",
    "what.sub": "Three playing fields, one standard: reliable, measurable, lasting results.",
    "c1.t": "Machine learning in production",
    "c1.b": "Scoring, NLP, RAG systems and LLM agents — built for real accuracy, latency and cost, not for a benchmark demo.",
    "c2.t": "Data pipelines &amp; automation",
    "c2.b": "Ingestion, transformation, reporting and workflows (n8n, APIs). Reproducible pipelines that save teams time.",
    "c3.t": "Statistical modelling",
    "c3.b": "Causal inference, survival models, time series. Scientific rigor in service of reliable decisions.",
    "proj.eyebrow": "Projects", "proj.title": "Selected projects",
    "p1.t": "Intelligent Recruiting Agent",
    "p1.b": "A matching system (RAG) automating the analysis and pairing of CVs with job descriptions, served through a REST API and a real-time web app.",
    "p2.t": "Churn prediction with boosting",
    "p2.b": "Theoretical study of boosting methods, then applied to churn prediction over 7,000+ customers, turned into marketing recommendations to reduce attrition.",
    "exp.eyebrow": "Experience", "exp.title": "Where I've worked",
    "x1.when": "Jun 2026 – Dec 2026", "x1.role": "Data Scientist",
    "x1.ul": "<li>Competitive-intelligence agent: automated monitoring of 25 sources, LLM scoring, weekly digest on Slack.</li><li>n8n workflows: Instantly ↔ HubSpot sync, CRM enrichment, purchase-signal detection (HR/HRIS changes).</li><li>Figma plugin for LLM translation of whitepapers, preserving formatting.</li><li>Automated SEO reporting (Google Search Console, Analytics).</li>",
    "x2.when": "Apr 2025 – Oct 2025", "x2.role": "Data Scientist",
    "x2.ul": "<li>Modelling the therapeutic efficacy of lung cancer (NSCLC) on a real-world cohort of 933 patients.</li><li>Causal inference (IPTW) and multiple imputation (MICE) to correct bias and missing data.</li><li>Treatment-response prediction (logistic regression, Random Forest, GBM, XGBoost).</li><li>Survival models (Cox, AFT, Aalen): chemotherapy identified as the main protective factor (−85% risk).</li>",
    "x3.when": "May 2024 – Jul 2024", "x3.role": "Data Analyst",
    "x3.ul": "<li>Power BI dashboards tracking debt recovery and account deterioration.</li><li>Automated Excel reporting (VBA) to make financial KPIs reliable.</li>",
    "stack.eyebrow": "Stack", "stack.title": "My toolkit",
    "stack.sub": "Chosen for the job at hand, not to look good on a resume.",
    "stack.g3": "Stats &amp; R",
    "chip.causal": "Causal inference", "chip.surv": "Survival models", "chip.ts": "Time series",
    "edu.eyebrow": "Education", "edu.title": "Academic background",
    "e1.t": "M.Eng. in Applied Mathematics",
    "e1.b": "Operations research, time series, Deep &amp; Machine Learning.",
    "e2.t": "M.Sc. in Actuarial &amp; Mathematical Engineering",
    "e2.b": "Life &amp; non-life actuarial science, reinsurance, statistical tools for insurance.",
    "contact.eyebrow": "Contact", "contact.title": "Let's build something together",
    "contact.b": "A data project, an opportunity, an idea to explore? Send me a few lines about the problem — that's enough for me to tell whether I can help.",
    "footer.role": "Data Scientist · Paris, France",
    "blog.eyebrow": "Journal", "blog.title": "Blog",
    "blog.sub": "My notes on data science, machine learning, causal inference and automation — along the way of my projects and readings.",
    "post1.t": "Why causal inference changes everything in data science",
    "post1.b": "Correlation is not causation: a look at IPTW weighting and what it taught me on a real patient cohort.",
    "back": "← Back to the blog"
  }
};

function getLang() {
  try { return localStorage.getItem("lang") || "fr"; } catch (e) { return "fr"; }
}
function applyLang(lang) {
  const dict = I18N[lang] || I18N.fr;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.innerHTML = dict[k];
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

/* ---------------- Thème ---------------- */
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  function setIcon() { if (btn) btn.textContent = root.getAttribute("data-theme") === "dark" ? "☀" : "☾"; }
  setIcon();
  if (btn) btn.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setIcon();
    if (window.__epiColors) window.__epiColors();
  });
})();

/* ---------------- Langue (init + boutons) ---------------- */
(function () {
  applyLang(getLang());
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });
})();

/* ---------------- Apparition au défilement ---------------- */
(function () {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach((el) => el.classList.add("in")); return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
})();

/* ---------------- Bulles de mer ---------------- */
(function () {
  const field = document.querySelector(".field");
  if (!field) return;
  for (let i = 0; i < 16; i++) {
    const b = document.createElement("span");
    b.className = "bubble";
    const s = 6 + Math.random() * 20;
    b.style.width = b.style.height = s + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.animationDuration = 9 + Math.random() * 10 + "s";
    b.style.animationDelay = -Math.random() * 16 + "s";
    field.appendChild(b);
  }
})();

/* ===================== ÉPICYCLE (oiseau) ===================== */
(function () {
  const canvas = document.getElementById("epi");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Silhouette d'oiseau ORIGINALE (sens horaire), coords y vers le bas (négatif = haut)
  const BIRD = [
    [0,-150],[7,-141],[13,-129],[21,-120],
    [60,-129],[106,-141],[151,-150],[190,-149],[201,-139],
    [166,-119],[121,-107],[81,-95],[49,-83],[37,-63],
    [23,-30],[17,10],[21,55],[27,110],[14,131],
    [0,118],
    [-14,131],[-27,110],[-21,55],[-17,10],[-23,-30],
    [-37,-63],[-49,-83],[-81,-95],[-121,-107],[-166,-119],[-201,-139],
    [-190,-149],[-151,-150],[-106,-141],[-60,-129],
    [-21,-120],[-13,-129],[-7,-141]
  ];

  const N = 240;

  function resampleClosed(pts, n) {
    const P = pts.map((p) => ({ x: p[0], y: p[1] }));
    const seg = []; let total = 0;
    for (let i = 0; i < P.length; i++) {
      const a = P[i], b = P[(i + 1) % P.length];
      const d = Math.hypot(b.x - a.x, b.y - a.y);
      seg.push({ a, b, d, acc: total }); total += d;
    }
    const out = [];
    for (let i = 0; i < n; i++) {
      const target = (total * i) / n;
      let s = seg[seg.length - 1];
      for (let j = 0; j < seg.length; j++) {
        if (target >= seg[j].acc && target <= seg[j].acc + seg[j].d) { s = seg[j]; break; }
      }
      const t = s.d ? (target - s.acc) / s.d : 0;
      out.push({ re: s.a.x + (s.b.x - s.a.x) * t, im: s.a.y + (s.b.y - s.a.y) * t });
    }
    return out;
  }

  function dft(x) {
    const n = x.length, X = [];
    for (let k = 0; k < n; k++) {
      let re = 0, im = 0;
      for (let i = 0; i < n; i++) {
        const phi = (2 * Math.PI * k * i) / n;
        re += x[i].re * Math.cos(phi) + x[i].im * Math.sin(phi);
        im += -x[i].re * Math.sin(phi) + x[i].im * Math.cos(phi);
      }
      re /= n; im /= n;
      const freq = k <= n / 2 ? k : k - n;
      X.push({ freq, amp: Math.hypot(re, im), phase: Math.atan2(im, re), re, im });
    }
    X.sort((a, b) => b.amp - a.amp);
    return X;
  }

  const samples = resampleClosed(BIRD, N);
  const terms = dft(samples);
  const c0 = terms.find((t) => t.freq === 0) || { re: 0, im: 0 };

  let W, H, scale, originX, originY, dpr;
  function layout() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.clientWidth || 520;
    const cssH = Math.round(cssW * 0.66);
    canvas.width = cssW * dpr; canvas.height = cssH * dpr;
    canvas.style.height = cssH + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    W = cssW; H = cssH;
    scale = (W * 0.8) / 420;               // largeur data ≈ 420
    originX = W / 2 - scale * c0.re;
    originY = H / 2 - scale * c0.im;
  }

  let colLine = "rgba(21,119,199,0.16)", colPen = "#1577C7";
  function refreshColors() {
    const cs = getComputedStyle(document.documentElement);
    colPen = (cs.getPropertyValue("--sea") || "#1577C7").trim();
    const aqua = (cs.getPropertyValue("--aqua") || "#17B6CC").trim();
    colLine = aqua + "33"; // alpha ~20%
  }
  window.__epiColors = refreshColors;

  let t = 0;
  let trace = [];
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    let x = originX, y = originY;
    // vecteurs tournants
    ctx.lineWidth = 1;
    for (let i = 0; i < terms.length; i++) {
      const term = terms[i];
      const px = x, py = y;
      const r = scale * term.amp;
      x += r * Math.cos(term.freq * t + term.phase);
      y += r * Math.sin(term.freq * t + term.phase);
      if (r > 0.8 && i < 90) {
        ctx.strokeStyle = colLine;
        ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke();
      }
    }
    trace.unshift({ x, y });
    if (trace.length > N) trace.pop();
    // tracé de l'oiseau
    ctx.strokeStyle = colPen; ctx.lineWidth = 2.4; ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < trace.length; i++) {
      if (i === 0) ctx.moveTo(trace[i].x, trace[i].y);
      else ctx.lineTo(trace[i].x, trace[i].y);
    }
    ctx.stroke();

    t += (2 * Math.PI) / N;
    if (t >= 2 * Math.PI) { t = 0; trace = []; }
    requestAnimationFrame(draw);
  }

  function staticDraw() {
    // version sans animation : trace complet de l'oiseau
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = colPen; ctx.lineWidth = 2.4; ctx.lineJoin = "round";
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const tt = (2 * Math.PI * i) / N;
      let x = originX, y = originY;
      for (const term of terms) {
        x += scale * term.amp * Math.cos(term.freq * tt + term.phase);
        y += scale * term.amp * Math.sin(term.freq * tt + term.phase);
      }
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  function start() { layout(); refreshColors(); if (prefersReduced) staticDraw(); else requestAnimationFrame(draw); }
  window.addEventListener("resize", () => { layout(); if (prefersReduced) staticDraw(); });
  start();
})();

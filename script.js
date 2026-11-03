/* =========================================================
   Thème clair/sombre · bilingue FR/EN · apparition · bulles
   · épicycle (cercles de Fourier) qui dessine un oiseau
     — silhouette lisse + traînée en fondu
   ========================================================= */

/* ---------------- i18n (traductions) ---------------- */
const I18N = {
  fr: {
    "nav.what": "Ce que je fais", "nav.projects": "Projets", "nav.experience": "Expérience",
    "nav.stack": "Stack", "nav.blog": "Blog", "nav.collab": "Collaborer",
    "intro": "bonjour<b>.</b>",
    "hero.greet": "bonjour<b>.</b>",
    "hero.lead": "Clique sur le « Bonjour » pour faire des vagues 🌊",
    "intro.eyebrow": "Enchanté",
    "intro.role": "Ingénieur en mathématiques appliquées (INSA Rouen) &amp; data scientist. Je transforme des données en décisions qui tiennent.",
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
    "c1.ex": "Ex. : scoring par LLM · RAG · agents · NLP",
    "c2.ex": "Ex. : n8n · APIs REST · reporting automatisé",
    "c3.ex": "Ex. : IPTW · modèles de Cox · séries temporelles",
    "nav.research": "Recherche",
    "research.eyebrow": "Recherche", "research.title": "Recherche & études",
    "research.sub": "Mes travaux analytiques les plus poussés — inférence causale, modèles de survie, apprentissage supervisé.",
    "r1.when": "2025 · Oncologie",
    "r1.t": "Modélisation de la survie en cancer du poumon (NSCLC)",
    "r1.b": "Sur une cohorte réelle de 933 patients : correction des biais par inférence causale (IPTW), imputation multiple (MICE) et modèles de survie (Cox, AFT, Aalen) pour isoler les facteurs de pronostic.",
    "r2.when": "2024–2025 · Machine Learning",
    "r2.t": "Méthodes de boosting pour la prédiction du churn",
    "r2.b": "Étude théorique des méthodes de boosting, puis mise en pratique sur 7 000+ clients : benchmark de modèles ensemblistes et traduction en leviers marketing concrets.",
    "research.note": "D'autres notes et articles arrivent au fil du temps sur le blog.",
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
    "hero.greet": "hello<b>.</b>",
    "hero.lead": "Click the “Hello” to make waves 🌊",
    "intro.eyebrow": "Nice to meet you",
    "intro.role": "Applied-mathematics engineer (INSA Rouen) &amp; data scientist. I turn data into decisions that hold up.",
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
    "c1.ex": "e.g. LLM scoring · RAG · agents · NLP",
    "c2.ex": "e.g. n8n · REST APIs · automated reporting",
    "c3.ex": "e.g. IPTW · Cox models · time series",
    "nav.research": "Research",
    "research.eyebrow": "Research", "research.title": "Research & studies",
    "research.sub": "My most in-depth analytical work — causal inference, survival models, supervised learning.",
    "r1.when": "2025 · Oncology",
    "r1.t": "Survival modelling in lung cancer (NSCLC)",
    "r1.b": "On a real-world cohort of 933 patients: bias correction via causal inference (IPTW), multiple imputation (MICE) and survival models (Cox, AFT, Aalen) to isolate prognostic factors.",
    "r2.when": "2024–2025 · Machine Learning",
    "r2.t": "Boosting methods for churn prediction",
    "r2.b": "Theoretical study of boosting methods, then applied to 7,000+ customers: benchmarking ensemble models and turning them into concrete marketing levers.",
    "research.note": "More notes and articles will appear on the blog over time.",
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

function getLang() { try { return localStorage.getItem("lang") || "fr"; } catch (e) { return "fr"; } }
function applyLang(lang) {
  const dict = I18N[lang] || I18N.fr;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.innerHTML = dict[k];
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch (e) {}
  if (window.__pixelRebuild) window.__pixelRebuild();
}

/* ---------------- Thème ---------------- */
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const SUN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';
  function setIcon() { if (btn) btn.innerHTML = root.getAttribute("data-theme") === "dark" ? SUN : MOON; }
  setIcon();
  if (btn) btn.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setIcon();
    if (window.__pixelColors) window.__pixelColors();
  });
})();

/* ---------------- Langue ---------------- */
(function () {
  applyLang(getLang());
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
})();

/* ---------------- « Bonjour » cliquable → présentation ---------------- */
(function () {
  const g = document.getElementById("greet");
  const r = document.getElementById("intro-reveal");
  const hint = document.getElementById("hero-hint");
  if (!g || !r) return;
  function toggle() {
    const open = r.classList.toggle("open");
    g.setAttribute("aria-expanded", open ? "true" : "false");
    if (hint) hint.style.opacity = open ? "0" : "";
  }
  g.addEventListener("click", toggle);
  g.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
})();

/* ---------------- Menu mobile (hamburger) ---------------- */
(function () {
  const btn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-links");
  if (!btn || !menu) return;
  function close() { menu.classList.remove("open"); btn.textContent = "☰"; }
  btn.addEventListener("click", function () {
    const open = menu.classList.toggle("open");
    btn.textContent = open ? "✕" : "☰";
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
})();

/* ---------------- Apparition au défilement ---------------- */
(function () {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || !items.length) { items.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
})();

/* ---------------- Hero : « Bonjour » pixelisé + onde au clic ---------------- */
(function () {
  const canvas = document.getElementById("pixelcanvas");
  const hero = document.getElementById("hero");
  if (!canvas || !hero) return;
  const ctx = canvas.getContext("2d");

  let W = 0, H = 0, pixels = [], ripples = [], inkRGB = [13, 13, 13];
  const GAP = 11, SIZE = 5, SPEED = 470, WID = 48;

  function wordForLang() {
    try { return (localStorage.getItem("lang") || "fr") === "en" ? "Hello" : "Bonjour"; }
    catch (e) { return "Bonjour"; }
  }
  function hexToRgb(h) {
    h = (h || "").trim().replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const n = parseInt(h || "0d0d0d", 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function refreshColors() {
    const cs = getComputedStyle(document.documentElement);
    inkRGB = hexToRgb(cs.getPropertyValue("--ink") || "#0d0d0d");
  }
  window.__pixelColors = refreshColors;

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth; H = hero.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // champ de pixels uniforme (le mot est écrit en texte par-dessus, en HTML)
    pixels = [];
    for (let y = 0; y < H; y += GAP) {
      for (let x = 0; x < W; x += GAP) {
        pixels.push({ x: x, y: y });
      }
    }
  }

  function addRipple(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    ripples.push({ x: clientX - rect.left, y: clientY - rect.top, t0: performance.now() });
    if (ripples.length > 6) ripples.shift();
  }
  hero.addEventListener("pointerdown", function (e) { addRipple(e.clientX, e.clientY); });

  function frame(now) {
    ctx.clearRect(0, 0, W, H);
    ripples = ripples.filter((r) => (now - r.t0) / 1000 < 2.4);
    const base = "rgba(" + inkRGB[0] + "," + inkRGB[1] + "," + inkRGB[2] + ",";
    for (let i = 0; i < pixels.length; i++) {
      const p = pixels[i];
      let ox = 0, oy = 0, bright = 0;
      for (let k = 0; k < ripples.length; k++) {
        const r = ripples[k];
        const a = (now - r.t0) / 1000;
        const dx = p.x - r.x, dy = p.y - r.y;
        const d = Math.hypot(dx, dy) || 0.001;
        const delta = d - a * SPEED;
        if (delta > -WID && delta < WID) {
          const fall = Math.cos((delta / WID) * (Math.PI / 2));
          const push = 16 * Math.exp(-a * 1.5) * fall;
          ox += (dx / d) * push; oy += (dy / d) * push;
          bright += fall * Math.max(0, 1 - a * 0.5);
        }
      }
      const alpha = 0.06 + Math.min(bright, 1) * 0.6;
      ctx.fillStyle = base + alpha.toFixed(3) + ")";
      ctx.fillRect(p.x + ox - SIZE / 2, p.y + oy - SIZE / 2, SIZE, SIZE);
    }
    requestAnimationFrame(frame);
  }

  function start() { build(); refreshColors(); requestAnimationFrame(frame); }
  window.__pixelRebuild = build;
  let rz; window.addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(build, 150); });
  start();
})();

/* ===================== ÉPICYCLE (oiseau) ===================== */
(function () {
  const canvas = document.getElementById("epi");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Silhouette d'oiseau ORIGINALE — courbes de Bézier lisses, un seul tracé fermé.
  // (mouette en vol, vue de face : ailes déployées, petit corps, queue)
  // Mouette en vol (silhouette fine, deux ailes + petit corps) — tracé lisse, fermé.
  const BIRD_PATH =
    "M 20 78 " +
    "C 56 50 86 42 114 40 " +            // aile gauche : bord haut vers la crête
    "C 150 42 176 58 200 70 " +          // descente vers le centre (tête/corps)
    "C 224 58 250 42 286 40 " +          // montée vers la crête de l'aile droite
    "C 314 42 344 50 380 78 " +          // vers la pointe de l'aile droite
    "C 350 72 320 70 296 73 " +          // bord bas de l'aile droite
    "C 256 80 226 92 208 99 " +          // vers le ventre
    "C 204 103 196 103 192 99 " +        // petit ventre arrondi
    "C 174 92 144 80 104 73 " +          // bord bas de l'aile gauche
    "C 80 70 50 72 20 78 Z";             // retour à la pointe gauche

  const N = 320;

  function samplePath(d, n) {
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width", "10"); svg.setAttribute("height", "10");
    svg.style.position = "absolute"; svg.style.left = "-9999px"; svg.style.top = "0"; svg.style.visibility = "hidden";
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", d); svg.appendChild(p); document.body.appendChild(svg);
    const L = p.getTotalLength(); const pts = [];
    for (let i = 0; i < n; i++) { const pt = p.getPointAtLength((L * i) / n); pts.push({ re: pt.x, im: pt.y }); }
    document.body.removeChild(svg);
    return pts;
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
      X.push({ freq: k <= n / 2 ? k : k - n, amp: Math.hypot(re, im), phase: Math.atan2(im, re) });
    }
    X.sort((a, b) => b.amp - a.amp);
    return X;
  }

  const samples = samplePath(BIRD_PATH, N);
  const terms = dft(samples);

  let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
  samples.forEach((s) => { minX = Math.min(minX, s.re); maxX = Math.max(maxX, s.re); minY = Math.min(minY, s.im); maxY = Math.max(maxY, s.im); });
  const dcx = (minX + maxX) / 2, dcy = (minY + maxY) / 2, dW = maxX - minX, dH = maxY - minY;

  // Trois oiseaux volant côte à côte (en formation)
  const BIRDS = [
    { fx: -1, fy:  0.12, s: 0.78, ph: 2.2 },
    { fx:  0, fy: -0.10, s: 1.00, ph: 0.0 },
    { fx:  1, fy:  0.12, s: 0.78, ph: 4.3 },
  ];

  function penData(tt) {
    let x = 0, y = 0;
    for (const term of terms) { x += term.amp * Math.cos(term.freq * tt + term.phase); y += term.amp * Math.sin(term.freq * tt + term.phase); }
    return { x, y };
  }

  let W, H, dpr, baseScale, cx, cy, spacing;
  function tf(b) { return { sc: baseScale * b.s, ox: cx + b.fx * spacing, oy: cy + b.fy * H }; }
  function computeFull(b) {
    const { sc, ox, oy } = tf(b); const a = [];
    for (let i = 0; i <= N; i++) { const p = penData((2 * Math.PI * i) / N); a.push({ x: ox + (p.x - dcx) * sc, y: oy + (p.y - dcy) * sc }); }
    return a;
  }
  function layout() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.clientWidth || 520;
    const cssH = Math.round(cssW * 0.5);
    canvas.width = cssW * dpr; canvas.height = cssH * dpr; canvas.style.height = cssH + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    W = cssW; H = cssH; cx = W / 2; cy = H / 2;
    spacing = W * 0.31;
    baseScale = Math.min((W * 0.30) / dW, (H * 0.58) / dH);
    BIRDS.forEach((b) => { b._full = computeFull(b); });
  }

  let colLine = "rgba(23,182,204,0.18)", colPen = "#1577C7", colDot = "#17B6CC", colGhost = "rgba(21,119,199,0.14)";
  function refreshColors() {
    const cs = getComputedStyle(document.documentElement);
    colPen = (cs.getPropertyValue("--sea") || "#1577C7").trim();
    const aqua = (cs.getPropertyValue("--aqua") || "#17B6CC").trim();
    colLine = aqua + "2b"; colDot = aqua; colGhost = colPen + "22";
  }
  window.__epiColors = refreshColors;

  const DURATION = 14;
  const MAXCIRCLES = 44;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let t = 0, last = performance.now();
  let trails = BIRDS.map(() => []);
  const MAXTRAIL = 340;

  function strokePts(pts, color, width) {
    if (pts.length < 2) return;
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < pts.length; i++) { const p = pts[i]; i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); }
    ctx.stroke();
  }

  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    ctx.clearRect(0, 0, W, H);

    BIRDS.forEach((b, k) => {
      const { sc, ox, oy } = tf(b);
      strokePts(b._full, colGhost, 1.4);
      let x = 0, y = 0; ctx.lineWidth = 1;
      for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        const px = x, py = y;
        x += term.amp * Math.cos(term.freq * (t + b.ph) + term.phase);
        y += term.amp * Math.sin(term.freq * (t + b.ph) + term.phase);
        if (i < MAXCIRCLES) {
          const r = term.amp * sc;
          if (r > 0.7) {
            const sx1 = ox + (px - dcx) * sc, sy1 = oy + (py - dcy) * sc;
            ctx.strokeStyle = colLine;
            ctx.beginPath(); ctx.arc(sx1, sy1, r, 0, 6.2832); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(sx1, sy1); ctx.lineTo(ox + (x - dcx) * sc, oy + (y - dcy) * sc); ctx.stroke();
          }
        }
      }
      const penx = ox + (x - dcx) * sc, peny = oy + (y - dcy) * sc;
      trails[k].push({ x: penx, y: peny });
      if (trails[k].length > MAXTRAIL) trails[k].shift();
      strokePts(trails[k], colPen, 2.2);
      ctx.fillStyle = colDot; ctx.beginPath(); ctx.arc(penx, peny, 2.6, 0, 6.2832); ctx.fill();
    });

    t += (2 * Math.PI * dt) / DURATION;
    if (t >= 2 * Math.PI) t -= 2 * Math.PI;
    requestAnimationFrame(frame);
  }

  function drawStatic() { ctx.clearRect(0, 0, W, H); BIRDS.forEach((b) => strokePts(b._full, colPen, 2.1)); }
  function start() { layout(); refreshColors(); if (reduce) drawStatic(); else requestAnimationFrame(frame); }
  window.addEventListener("resize", () => { layout(); trails = BIRDS.map(() => []); if (reduce) drawStatic(); });
  start();
})();

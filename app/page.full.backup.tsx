"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "01",
    title: "QualiMind AI",
    category: "AI + QUALITY",
    year: "2026",
    description:
      "AI-powered Software Quality Intelligence Platform built to understand project context, requirements, APIs and quality workflows.",
    problem:
      "Software projects contain scattered requirements, project knowledge, APIs and testing information. QualiMind AI brings that context together for intelligent software-quality workflows.",
    role: "Founder · AI Developer · Software Developer · Product & Quality Engineering",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "MongoDB", "AI APIs"],
  },
  {
    id: "02",
    title: "Nirvira",
    category: "AI OPERATING SYSTEM",
    year: "2026",
    description:
      "AI-driven operating system concept for Information Technology focused on reducing the context gap between technology domains.",
    problem:
      "Disconnected tools, scattered knowledge and repeated context analysis create a context gap across IT domains.",
    role: "Founder · AI Developer · Software Developer · System Designer",
    technologies: ["Next.js", "TypeScript", "AI", "System Design", "Automation"],
  },
];

const skillGroups = [
  {
    title: "Development",
    skills: ["C", "Python", "Java", "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "HTML5", "CSS3"],
  },
  {
    title: "AI Engineering",
    skills: ["Generative AI", "LLM Integration", "AI Application Development", "Prompt Engineering", "AI APIs"],
  },
  {
    title: "Data & Backend",
    skills: ["SQL", "PostgreSQL", "MongoDB", "API Development", "Backend Systems"],
  },
  {
    title: "Quality & Systems",
    skills: ["Software Quality Assurance", "API Testing", "Requirements Analysis", "System Thinking", "Product Engineering"],
  },
];

const answers = {
  "Who is Dipak?":
    "Dipak Datta Popalghat is a final-year B.E. Computer Science & Engineering student focused on software development, AI development and software quality.",
  "What has Dipak built?":
    "His featured products are QualiMind AI and Nirvira, combining software development, AI and quality-focused product engineering.",
  "What is QualiMind AI?":
    "QualiMind AI is an AI-powered Software Quality Intelligence Platform for understanding project context, requirements, APIs and quality workflows.",
  "What is Nirvira?":
    "Nirvira is an AI Operating System concept for IT focused on reducing the context gap between technology domains.",
};

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [assistant, setAssistant] = useState(false);
  const [answer, setAnswer] = useState(
    "Welcome. Ask me about Dipak's projects, skills or background."
  );
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const filtered =
    filter === "ALL"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <main className={dark ? "site dark" : "site light"}>
      <div
        className="cursor-glow"
        style={{ left: cursor.x, top: cursor.y }}
      />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar shell">
        <a href="#home" className="brand" onClick={() => setMenu(false)}>
          <span className="brand-mark">DP</span>
          <span className="brand-copy">
            <strong>Dipak Datta Popalghat</strong>
            <small>Software Developer · AI Developer</small>
          </span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#expertise" onClick={() => setMenu(false)}>Expertise</a>
          <a href="#skills" onClick={() => setMenu(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
          <a href="#education" onClick={() => setMenu(false)}>Education</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => setDark((v) => !v)}
          >
            {dark ? "LIGHT" : "DARK"}
          </button>

          <a href="#contact" className="nav-cta">
            LET&apos;S TALK
          </a>

          <button
            className="menu-button"
            onClick={() => setMenu((v) => !v)}
          >
            {menu ? "×" : "☰"}
          </button>
        </div>
      </header>

      <section id="home" className="hero shell">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="live-dot" />
            FINAL YEAR B.E. CSE
            <i>/</i>
            AI + SOFTWARE
          </motion.div>

          <motion.p
            className="hero-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            DIPAK DATTA POPALGHAT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Building software
            <br />
            <span>that thinks with AI.</span>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Software Developer, AI Developer and Software Quality-focused
            engineer building intelligent products from idea to working system.
          </motion.p>

          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">
              EXPLORE PROJECTS
              <span>↗</span>
            </a>

            <a
              href="/resume/Dipak_Datta_Popalghat_Resume.pdf"
              className="button button-secondary"
            >
              DOWNLOAD RESUME
              <span>↓</span>
            </a>
          </div>

          <div className="hero-location">
            <span className="live-dot" />
            Sambhaji Nagar, Maharashtra
            <i>•</i>
            Open to opportunities
          </div>

          <div className="hero-metrics">
            <div>
              <strong>02</strong>
              <span>CORE PRODUCTS</span>
            </div>
            <div>
              <strong>03</strong>
              <span>CORE DOMAINS</span>
            </div>
            <div>
              <strong>R&amp;D</strong>
              <span>RESEARCH TRACK</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <motion.div
            className="ring ring-one"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="ring ring-two"
            animate={{ rotate: -360 }}
            transition={{ duration: 29, repeat: Infinity, ease: "linear" }}
          />
          <div className="ring ring-three" />

          <div className="profile-card">
            <div className="profile-top">
              <span>PROFILE / 01</span>
              <span className="available">
                <span className="live-dot" />
                AVAILABLE
              </span>
            </div>

            <div className="portrait">
              <img
                src="/profile.jpg"
                alt="Dipak Datta Popalghat"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <strong>DP</strong>
            </div>

            <h2>Dipak Datta Popalghat</h2>
            <p>Software Developer · AI Developer · QA</p>

            <div className="profile-grid">
              <div><span>FOCUS</span><strong>AI</strong></div>
              <div><span>QUALITY</span><strong>QA</strong></div>
              <div><span>BUILD</span><strong>WEB</strong></div>
              <div><span>RESEARCH</span><strong>R&amp;D</strong></div>
            </div>
          </div>

          <div className="floating floating-one">
            <span className="node">AI</span>
            <div>
              <small>AI ENGINEERING</small>
              <strong>ACTIVE</strong>
            </div>
          </div>

          <div className="floating floating-two">
            <span className="node">QA</span>
            <div>
              <small>SOFTWARE QUALITY</small>
              <strong>ENGINEERED</strong>
            </div>
          </div>

          <div className="floating floating-three">
            <span className="node">DX</span>
            <div>
              <small>CORE PRODUCTS</small>
              <strong>QUALIMIND / NIRVIRA</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          SOFTWARE DEVELOPMENT <span>✦</span>
          AI DEVELOPMENT <span>✦</span>
          SOFTWARE QUALITY <span>✦</span>
          PRODUCT ENGINEERING <span>✦</span>
          GENERATIVE AI <span>✦</span>
          SYSTEM THINKING <span>✦</span>
          SOFTWARE DEVELOPMENT <span>✦</span>
          AI DEVELOPMENT
        </div>
      </div>

      <section id="about" className="section shell">
        <div className="section-label">01 / ABOUT</div>

        <div className="section-heading">
          <h2>
            More than code.
            <br />
            <span>I build systems.</span>
          </h2>

          <p>
            Final-year B.E. Computer Science &amp; Engineering student focused
            on software development, AI application development and software
            quality engineering.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-main">
            <p className="big-copy">
              I like understanding the complete product — architecture,
              requirements, APIs, workflows, quality and how every part
              connects.
            </p>

            <p className="muted-copy">
              My work combines software engineering with AI-driven thinking to
              turn complex ideas into usable, structured products.
            </p>
          </div>

          <div className="about-list">
            <article>
              <span>ROLE</span>
              <strong>Developer / AI Developer</strong>
              <p>Building complete software experiences.</p>
            </article>

            <article>
              <span>QUALITY</span>
              <strong>Software Quality</strong>
              <p>Requirements, APIs, testing and product quality.</p>
            </article>

            <article>
              <span>OWNERSHIP</span>
              <strong>Product Builder</strong>
              <p>Hands-on work across QualiMind AI and Nirvira.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="expertise" className="section shell">
        <div className="section-label">02 / EXPERTISE</div>

        <div className="section-heading">
          <h2>
            Where software
            <br />
            <span>meets intelligence.</span>
          </h2>
          <p>
            Development, AI, quality and systems thinking brought together
            inside one engineering workflow.
          </p>
        </div>

        <div className="expertise-grid">
          <article className="expertise-card featured">
            <span className="card-no">01</span>
            <div className="card-icon">AI</div>
            <h3>AI Development</h3>
            <p>
              Generative AI, LLM integration, AI application development,
              intelligent workflows and AI API integration.
            </p>
            <div className="chips">
              <span>GEN AI</span>
              <span>LLM</span>
              <span>AI APIs</span>
            </div>
          </article>

          <article className="expertise-card">
            <span className="card-no">02</span>
            <div className="card-icon">DEV</div>
            <h3>Software Development</h3>
            <p>
              Frontend systems, backend APIs, databases and modern web
              applications.
            </p>
            <div className="chips">
              <span>REACT</span>
              <span>NEXT.JS</span>
              <span>NODE</span>
            </div>
          </article>

          <article className="expertise-card">
            <span className="card-no">03</span>
            <div className="card-icon">QA</div>
            <h3>Software Quality</h3>
            <p>
              Requirements analysis, API testing, product validation and
              quality-focused engineering.
            </p>
            <div className="chips">
              <span>API</span>
              <span>QUALITY</span>
              <span>REQUIREMENTS</span>
            </div>
          </article>

          <article className="expertise-card">
            <span className="card-no">04</span>
            <div className="card-icon">SYS</div>
            <h3>Systems Thinking</h3>
            <p>
              Understanding architecture, connected workflows, context and
              complete product systems.
            </p>
            <div className="chips">
              <span>ARCHITECTURE</span>
              <span>R&amp;D</span>
              <span>PRODUCT</span>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="section shell">
        <div className="section-label">03 / SKILLS</div>

        <div className="section-heading">
          <h2>
            Technology I use
            <br />
            <span>to build.</span>
          </h2>
          <p>
            A practical engineering stack spanning development, AI, databases,
            APIs and software quality.
          </p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-label">04 / PROJECTS</div>

        <div className="section-heading">
          <h2>
            Products I&apos;ve
            <br />
            <span>built from scratch.</span>
          </h2>
          <p>
            Featured products with confidential repositories and live demos.
          </p>
        </div>

        <div className="filters">
          {["ALL", "AI", "QUALITY", "SYSTEMS"].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <motion.article
              layout
              key={project.id}
              className="project-card"
              whileHover={{ y: -7 }}
              onClick={() => setSelected(project)}
            >
              <div className="project-visual">
                <div className="project-grid" />
                <div className="project-window">
                  <small>{project.id}</small>
                  <strong>{project.title}</strong>
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-link">
                  VIEW PROJECT
                  <span>↗</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="education" className="section shell">
        <div className="section-label">05 / EDUCATION</div>

        <div className="section-heading">
          <h2>
            Learning,
            <br />
            <span>building, researching.</span>
          </h2>
          <p>
            Academic foundation combined with independent product development
            and technical research.
          </p>
        </div>

        <div className="education-card">
          <div className="education-left">
            <span>FINAL YEAR · B.E. COMPUTER SCIENCE &amp; ENGINEERING</span>
            <h3>ICEEM</h3>
            <p>Dr. Babasaheb Ambedkar Marathwada University</p>
            <small>COMPUTER SCIENCE &amp; ENGINEERING</small>
          </div>

          <div className="education-score">
            <span>CGPA</span>
            <strong>6.4</strong>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-label">06 / ACHIEVEMENTS</div>

        <div className="achievement-grid">
          <article>
            <span>COMPETITION</span>
            <h3>AAVISHKAR</h3>
            <p>
              Technical project participation focused on innovation, research
              and practical product development.
            </p>
            <small>PARTICIPATION</small>
          </article>

          <article>
            <span>COMPETITION</span>
            <h3>TECHARENA</h3>
            <p>
              Technical competition participation and hands-on technology
              problem solving.
            </p>
            <small>PARTICIPATION</small>
          </article>

          <article>
            <span>RESEARCH</span>
            <h3>RESEARCH PAPER</h3>
            <p>
              Technical research and documentation work around software and
              emerging technology.
            </p>
            <small>R&amp;D</small>
          </article>
        </div>
      </section>

      <section className="section shell">
        <div className="section-label">07 / CERTIFICATIONS</div>

        <div className="cert-card">
          <div>
            <span>CONTINUOUS LEARNING</span>
            <h2>Technical credentials.</h2>
            <p>
              Hydra and additional technical certifications will be displayed
              here as the certification collection is finalized.
            </p>
          </div>

          <div className="cert-orbit">
            <span>CERT</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section shell contact-section">
        <div className="contact-box">
          <div className="section-label">08 / CONTACT</div>

          <h2>
            Let&apos;s build something
            <br />
            <span>intelligent.</span>
          </h2>

          <p>
            Open to opportunities, collaborations, technical projects and
            conversations around software and AI.
          </p>

          <div className="contact-grid">
            <a href="mailto:dipakpopalghat07@gmail.com">
              <small>EMAIL</small>
              <strong>dipakpopalghat07@gmail.com</strong>
              <span>↗</span>
            </a>

            <a href="tel:8308162948">
              <small>PHONE</small>
              <strong>+91 83081 62948</strong>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dipak-popalghat-1a78b0414"
              target="_blank"
              rel="noreferrer"
            >
              <small>LINKEDIN</small>
              <strong>dipak-popalghat</strong>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/dipakpopalghat07-prog"
              target="_blank"
              rel="noreferrer"
            >
              <small>GITHUB</small>
              <strong>dipakpopalghat07-prog</strong>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-brand">
          <span>DP</span>
          <strong>Dipak Datta Popalghat</strong>
        </div>

        <p>Software Developer · AI Developer · Software Quality</p>

        <small>© {new Date().getFullYear()} ALL RIGHTS RESERVED</small>
      </footer>

      <button
        className="assistant-button"
        onClick={() => setAssistant((v) => !v)}
      >
        AI
      </button>

      <AnimatePresence>
        {assistant && (
          <motion.aside
            className="assistant"
            initial={{ opacity: 0, y: 20, scale: .96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: .96 }}
          >
            <div className="assistant-title">
              <div>
                <span>PORTFOLIO COPILOT</span>
                <strong>Ask about Dipak</strong>
              </div>
              <button onClick={() => setAssistant(false)}>×</button>
            </div>

            <div className="assistant-answer">
              {answer}
            </div>

            <div className="assistant-questions">
              {Object.keys(answers).map((question) => (
                <button
                  key={question}
                  onClick={() =>
                    setAnswer(answers[question as keyof typeof answers])
                  }
                >
                  {question}
                </button>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ opacity: 0, y: 30, scale: .96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
              >
                ×
              </button>

              <span>{selected.category}</span>
              <h2>{selected.title}</h2>
              <p className="modal-main">{selected.description}</p>

              <div className="modal-section">
                <small>PROBLEM SOLVED</small>
                <p>{selected.problem}</p>
              </div>

              <div className="modal-section">
                <small>ROLE</small>
                <p>{selected.role}</p>
              </div>

              <div className="modal-tags">
                {selected.technologies.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="confidential">
                Repository and live demo are currently confidential.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,


  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const skills = [
  "C","Python","Java","JavaScript","TypeScript",
  "HTML5","CSS3","React.js","Next.js","Node.js",
  "SQL","PostgreSQL","MongoDB","Generative AI",
  "LLM Integration","AI Application Development",
  "API Development","Software Quality Assurance",
  "API Testing","Prompt Engineering"
];

const projects = [
  {
    no: "01",
    title: "QualiMind AI",
    type: "AI / SOFTWARE QUALITY",
    description:
      "AI-powered software quality intelligence platform focused on project understanding, requirements, APIs, testing and quality workflows.",
  },
  {
    no: "02",
    title: "Nirvira",
    type: "AI OPERATING SYSTEM",
    description:
      "AI-driven IT operating system focused on connecting context across technology domains and enabling intelligent coordination.",
  },
];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);

  return (
    <main className={dark ? "site dark" : "site light"}>
      <header className="nav wrap">
        <a href="#home" className="logo">
          <span>DP</span>
          <b>Dipak Datta Popalghat</b>
        </a>

        <nav className={menu ? "links open" : "links"}>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#skills" onClick={() => setMenu(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
          <a href="#education" onClick={() => setMenu(false)}>Education</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </nav>

        <div className="nav-right">
          <button className="theme" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a href="#contact" className="talk">Let's Talk</a>

          <button className="menu" onClick={() => setMenu(!menu)}>
            {menu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <section id="home" className="hero wrap">
        <div className="hero-copy">
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={14} />
            FINAL YEAR B.E. CSE • AI & SOFTWARE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Building software.
            <span> Engineering with AI.</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I&apos;m Dipak Datta Popalghat — a software developer and AI
            developer focused on building intelligent products, understanding
            complex systems and engineering software with quality in mind.
          </motion.p>

          <div className="hero-actions">
            <a href="#projects" className="primary">
              Explore Projects <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="secondary">
              Contact Me
            </a>
          </div>

          <div className="location">
            <span className="online" />
            Available for opportunities
            <i>•</i>
            Sambhaji Nagar, Maharashtra
          </div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="profile-card">
            <div className="profile-top">
              <small>PROFILE_01</small>
              <span className="live">
                <span className="online" /> LIVE
              </span>
            </div>

            <div className="avatar">
              <strong>DP</strong>
            </div>

            <h2>Dipak Datta Popalghat</h2>
            <p>Software Developer • AI Developer</p>

            <div className="stats">
              <div><small>FOCUS</small><b>AI</b></div>
              <div><small>QUALITY</small><b>QA</b></div>
              <div><small>BUILD</small><b>WEB</b></div>
              <div><small>STATUS</small><b>READY</b></div>
            </div>
          </div>

          <div className="float-card float-one">
            <BrainCircuit size={18} />
            <div>
              <small>AI ENGINEERING</small>
              <b>ACTIVE</b>
            </div>
          </div>

          <div className="float-card float-two">
            <Zap size={18} />
            <div>
              <small>CORE PRODUCTS</small>
              <b>QUALIMIND + NIRVIRA</b>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="marquee">
        SOFTWARE DEVELOPMENT <span>✦</span>
        AI DEVELOPMENT <span>✦</span>
        SOFTWARE QUALITY <span>✦</span>
        PRODUCT ENGINEERING
      </div>

      <section id="about" className="section wrap">
        <div className="section-title">
          <small>01 / ABOUT</small>
          <h2>Turning ideas into <span>working systems.</span></h2>
        </div>

        <div className="about-grid">
          <div>
            <p className="big">
              Final-year B.E. Computer Science & Engineering student focused
              on software development, AI application development and software
              quality engineering.
            </p>

            <p className="muted">
              I focus on understanding the complete product — architecture,
              requirements, workflows, APIs and how different parts connect.
            </p>
          </div>

          <div className="info">
            <article><small>ROLE</small><b>Software Developer / AI Developer</b></article>
            <article><small>EDUCATION</small><b>B.E. Computer Science & Engineering</b></article>
            <article><small>PROJECTS</small><b>QualiMind AI + Nirvira</b></article>
          </div>
        </div>
      </section>

      <section id="skills" className="section wrap">
        <div className="section-title">
          <small>02 / SKILLS</small>
          <h2>Technology I use to <span>build.</span></h2>
        </div>

        <div className="skills-grid">
          <div className="skill-feature">
            <Zap size={24} />
            <h3>AI-first engineering</h3>
            <p>
              Combining software development with modern AI capabilities,
              APIs and intelligent product workflows.
            </p>
          </div>

          <div className="skill-list">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section wrap">
        <div className="section-title">
          <small>03 / PROJECTS</small>
          <h2>Products I&apos;ve <span>built.</span></h2>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-no">{project.no}</div>

              <div>
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <ArrowUpRight className="project-arrow" size={25} />
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section wrap">
        <div className="section-title">
          <small>04 / EDUCATION</small>
          <h2>Currently <span>learning.</span></h2>
        </div>

        <div className="education">
          <div>
            <small>FINAL YEAR</small>
            <h3>B.E. Computer Science & Engineering</h3>
            <p>ICEEM • Dr. Babasaheb Ambedkar Marathwada University</p>
          </div>

          <div className="cgpa">
            <small>CGPA</small>
            <b>6.4</b>
          </div>
        </div>
      </section>

      <section id="contact" className="section wrap">
        <div className="contact-card">
          <small>05 / CONTACT</small>
          <h2>Let&apos;s build something <span>intelligent.</span></h2>
          <p>
            Open to opportunities, collaborations and interesting software
            ideas.
          </p>

          <div className="contact-buttons">
            <a className="primary" href="mailto:dipakpopalghat07@gmail.com">
              <Mail size={17} /> Send Email
            </a>

            <a
              className="secondary"
              href="https://www.linkedin.com/in/dipak-popalghat-1a78b0414"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              className="secondary"
              href="https://github.com/dipakpopalghat07-prog"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} Dipak Datta Popalghat</span>
        <span>Built with Next.js + AI mindset.</span>
      </footer>
    </main>
  );
}


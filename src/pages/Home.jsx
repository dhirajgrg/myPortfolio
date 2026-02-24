import React from "react";
import { useNavigate } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import Button from "../components/Button";
import Cards from "../components/Cards";
import Masonry from "../components/Masonary";
import SkillsMarquee from "../components/SkillsMarquee";

const CARDS_DATA = [
  {
    id: "01",
    title: "Discover",
    rotate: "md:-rotate-3",
    description:
      "Understanding requirements, user needs, and technical goals to define a clear project direction.",
  },
  {
    id: "02",
    title: "Plan",
    rotate: "md:rotate-3",
    description:
      "Creating the system architecture, database structure, API flow, and selecting the right technologies.",
  },
  {
    id: "03",
    title: "Build",
    rotate: "md:-rotate-2",
    description:
      "Developing frontend, backend, and database layers with clean, scalable, and maintainable code.",
  },
  {
    id: "04",
    title: "Test",
    rotate: "md:rotate-2",
    description:
      "Validating features through functional, integration, and performance testing to ensure reliability.",
  },
  {
    id: "05",
    title: "Deploy",
    rotate: "md:-rotate-3",
    description:
      "Launching the application using modern DevOps workflows and optimized infrastructure.",
  },
  {
    id: "06",
    title: "Maintain",
    rotate: "md:rotate-3",
    description:
      "Monitoring performance, fixing issues, and delivering continuous enhancements as the product grows.",
  },
];

const TECH_ICONS = [
  {
    src: "/images/js.png",
    alt: "JavaScript",
    pos: "top-0 left-0   lg:left-10",
    rot: "rotate-12",
  },
  {
    src: "/images/nodejs.png",
    alt: "Node.js",
    pos: "top-1/3 left-2 lg:left-24",
    rot: "-rotate-6",
  },
  {
    src: "/images/git.png",
    alt: "Git",
    pos: "bottom-0 left-0 lg:left-10",
    rot: "rotate-6",
  },
  {
    src: "/images/physics.png",
    alt: "React",
    pos: "top-0 right-0  lg:right-10",
    rot: "-rotate-12",
  },
  {
    src: "/images/sql.png",
    alt: "SQL",
    pos: "top-1/3 right-2 lg:right-24",
    rot: "rotate-6",
  },
  {
    src: "/images/typescript.png",
    alt: "TypeScript",
    pos: "bottom-0 right-0 lg:right-10",
    rot: "-rotate-6",
  },
];

const TIMELINE = [
  { label: "Kasturi Bank", year: "2020" },
  { label: "Load Bags", year: "2021" },
  { label: "Obsey Clone", year: "2022" },
  { label: "AI Chatbot", year: "2023" },
  { label: "Moody Player", year: "2024" },
  { label: "Nepal Mart", year: "2025" },
];

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-base-100 min-h-screen">
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section
        id="home"
        className="magicpattern relative overflow-hidden min-h-screen flex flex-col
                   items-center justify-center pt-24 pb-16 px-5 sm:px-8 text-center"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 bg-hero-pattern" />

        {/* Label */}
        <span className="label-tag animate-fade-in mb-6">
          Full-Stack Developer
        </span>

        {/* Name */}
        <h1
          className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                       text-base-900 animate-fade-up"
        >
          Hi, I'm <span className="text-primary-700 italic">Dhiraj</span>
        </h1>

        {/* Tagline */}
        <p
          className="mt-4 font-body text-base sm:text-lg md:text-xl text-base-600
                      max-w-xl animate-fade-up-d1 leading-relaxed"
        >
          I craft clean, scalable, and user-friendly web applications — end to
          end.
        </p>

        {/* Illustration + CTA */}
        <div className="relative mt-8 animate-fade-up-d2">
          <img
            src="/images/man.png"
            alt="Dhiraj illustration"
            className="w-52 sm:w-64 md:w-72 lg:w-80 mx-auto drop-shadow-xl animate-float"
          />
          <div className="mt-4 flex items-center justify-center gap-3">
            <Button onClick={()=>navigate("/contact")} size="lg">Contact</Button>
            <Button variant="ghost" size="lg">
              <a
                href="https://drive.google.com/file/d/1GfTjufcJsM9PJzsvZQHWsvpGO366z9CA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-3"
              >
                <BsEye />
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
                        items-center gap-1 animate-fade-in opacity-60"
        >
          <span className="font-mono text-2xs uppercase tracking-widest text-base-500">
            Scroll
          </span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-primary-400 to-transparent rounded-full" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HELLO / TECH SECTION
      ═══════════════════════════════════════════════════════ */}
      <section
        id="hello"
        className="section bg-base-50 relative overflow-hidden"
      >
        <div className="container-xl">
          {/* Small label */}
          <p className="text-center font-bilbo text-3xl sm:text-4xl text-primary-600 mb-2">
            Hello!
          </p>

          {/* Tech icons floating */}
          <div className="relative px-16 sm:px-24 md:px-36 lg:px-52 py-6 md:py-12">
            {TECH_ICONS.map(({ src, alt, pos, rot }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                title={alt}
                className={`absolute ${pos} ${rot} w-9 sm:w-11 md:w-14 lg:w-20
                            object-contain opacity-80 hover:opacity-100
                            hover:scale-110 transition-all duration-300`}
              />
            ))}

            <h2
              className="heading-section text-center text-2xl sm:text-3xl md:text-5xl
                           lg:text-6xl text-base-900 leading-tight"
            >
              Focused on building{" "}
              <em className="text-primary-700 not-italic">clean, scalable</em>{" "}
              and user-friendly web applications
            </h2>
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════════
          MARQUEE SECTION
      ═══════════════════════════════════════════════════════ */}
      <div className="py-16 bg-base-50">
        {/* Skills pills */}

        <SkillsMarquee />
        <SkillsMarquee />
      </div>

      {/* ═══════════════════════════════════════════════════════
          PROCESS CARDS
      ═══════════════════════════════════════════════════════ */}
      <section id="process" className="section bg-base-100">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="font-bilbo text-3xl text-primary-600 mb-1">
              Projects Explained
            </p>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-base-900">
              Here's How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {CARDS_DATA.map((card) => (
              <Cards key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SHOWREEL / MASONRY
      ═══════════════════════════════════════════════════════ */}
      <section id="showreel" className="section bg-base-50">
        <div className="container-xl">
          <div className="text-center mb-10">
            <p className="font-bilbo text-3xl text-primary-600 mb-1">
              Projects
            </p>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-base-900">
              Show Reel
            </h2>
          </div>
          <Masonry />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════════════════════ */}
      <section id="about" className="section bg-base-100">
        <div className="container-xl">
          <div className="text-center mb-10">
            <p className="font-bilbo text-3xl text-primary-600 mb-1">
              Who Am I
            </p>
            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl text-base-900">
              Pushing Boundaries
              <br />
              <span className="text-primary-700">Since 2017</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Photo card */}
            <div className="flex-shrink-0 w-full max-w-xs md:max-w-sm">
              <div
                className="relative rounded-3xl overflow-hidden bg-primary-500
                              aspect-[3/4] flex items-end justify-center -rotate-1
                              shadow-card-hover"
              >
                <img
                  src="/images/man3.png"
                  alt="Dhiraj"
                  className="h-full object-cover object-top"
                />
                {/* Decorative ring */}
                <div className="absolute -inset-1 rounded-3xl ring-2 ring-primary-300/30 pointer-events-none" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-6">
              <p className="font-body text-base md:text-lg text-base-700 leading-relaxed">
                A full-stack developer passionate about building clean, scalable
                web applications end-to-end — crafting solid APIs, modern UIs,
                and reliable backend systems with a focus on performance,
                clarity, and real-world problem-solving.
              </p>

              {/* Timeline */}
              <div className="flex flex-col divide-y divide-base-200 border border-base-200 rounded-2xl overflow-hidden">
                {TIMELINE.map(({ label, year }) => (
                  <div
                    key={year}
                    className="flex items-center justify-between px-5 py-3.5
                               hover:bg-primary-50 transition-colors duration-200 group"
                  >
                    <span
                      className="font-body font-medium text-sm text-base-800
                                     group-hover:text-primary-800 transition-colors"
                    >
                      {label}
                    </span>
                    <span
                      className="font-mono text-xs text-base-500 group-hover:text-primary-600
                                     transition-colors"
                    >
                      {year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
    FOOTER CTA
═══════════════════════════════════════════════════════ */}
      <footer className="magicpattern section-sm bg-base-50 border-t border-primary-100">
        <div className="container-xl text-center flex flex-col items-center gap-6">
          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-base-900">
            Let's Make It Happen
          </h2>
          <p className="font-body text-sm sm:text-base text-base-600 max-w-lg leading-relaxed">
            I'm always excited to build, collaborate, and turn ideas into real,
            working products — whether it's a full-stack application, a scalable
            backend, or a polished user experience.
          </p>

          <div className="flex items-center gap-3">
            <Button onClick={() => navigate("/contact")} size="lg">
              Contact Me
            </Button>
            <Button variant="ghost" size="lg">
              ↓ Resume
            </Button>
          </div>

          <div className="divider w-full max-w-sm mt-4" />

          <p className="font-mono text-2xs text-base-400 pt-16">
            © 2025 Dhiraj. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

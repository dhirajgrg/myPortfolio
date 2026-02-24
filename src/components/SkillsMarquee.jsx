export default function SkillsMarquee() {
  const row1 = [
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Express.js",
    "REST APIs",
    "Docker",
    "Git",
  ];
  const row2 = [
    "Next.js",
    "Tailwind CSS",
    "GraphQL",
    "Redis",
    "AWS",
    "CI/CD",
    "Jest",
    "Figma",
    "Linux",
  ];

  return (
    <div className=" space-y-4">
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }
        .animate-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-right {
          animation: marquee-right 35s linear infinite;
        }
      `}</style>

      {[
        { skills: row1, cls: "animate-left" },
        { skills: row2, cls: "animate-right" },
      ].map(({ skills, cls }, rowIdx) => (
        <div key={rowIdx} className="overflow-hidden w-full relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* 8x duplication so 25% shift = exactly 2 copies worth of content */}
          <div className={`flex w-max gap-3 ${cls}`}>
            {[
              ...skills,
              ...skills,
              ...skills,
              ...skills,
              ...skills,
              ...skills,
              ...skills,
              ...skills,
            ].map((s, i) => (
              <span key={i} className="tech-badge whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

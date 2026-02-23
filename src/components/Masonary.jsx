import React from "react";

const TILES = [
  { color: "bg-yellow-300",  label: "UI / UX",      span: "md:col-span-3 md:row-span-3" },
  { color: "bg-green-400",   label: "Backend",       span: "md:col-span-2 md:row-span-3" },
  { color: "bg-violet-400",  label: "Mobile",        span: "md:col-span-2 md:row-span-5" },
  { color: "bg-pink-400",    label: "Frontend",      span: "md:col-span-2 md:row-span-3" },
  { color: "bg-blue-400",    label: "Databases",     span: "md:col-span-3 md:row-span-3" },
  { color: "bg-yellow-400",  label: "DevOps",        span: "md:col-span-2 md:row-span-4" },
  { color: "bg-emerald-400", label: "APIs",          span: "md:col-span-3 md:row-span-3" },
  { color: "bg-rose-400",    label: "Cloud",         span: "md:col-span-2 md:row-span-3" },
];

function Masonry() {
  return (
    <div
      className="
        grid gap-3
        grid-cols-2 sm:grid-cols-3
        md:grid-cols-7 md:grid-rows-9 md:h-[780px]
        md:gap-4
        w-full
      "
    >
      {TILES.map(({ color, label, span }) => (
        <div
          key={label}
          className={`
            ${color} ${span}
            rounded-2xl cursor-pointer
            flex items-end p-4
            overflow-hidden relative
            group transition-all duration-350 ease-smooth
            hover:-translate-y-1 hover:shadow-lg
            h-36 sm:h-44 md:h-auto
          `}
        >
          {/* shine overlay */}
          <div className="absolute inset-0 bg-card-shine opacity-0 group-hover:opacity-100
                          transition-opacity duration-350" />
          <span className="font-body font-semibold text-sm text-white/90 drop-shadow-sm
                           translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Masonry;

import React from "react";

const TILES = [
  {
    videoUrl:
      "https://ik.imagekit.io/ieamrnk3n/hatemalo.mp4?updatedAt=1774421428298",
    label: "hatemalo",
    span: "md:col-span-3 md:row-span-3",
  },
  {
    videoUrl: "https://ik.imagekit.io/ieamrnk3n/jhola.mp4",
    label: "check-list app",
    span: "md:col-span-2 md:row-span-3",
  },
  {
    videoUrl: "https://ik.imagekit.io/ieamrnk3n/nodefarm.mp4",
    label: "nodefarm",
    span: "md:col-span-2 md:row-span-5",
  },

  {
    color: "bg-pink-400",
    label: "Frontend",
    span: "md:col-span-2 md:row-span-3",
  },
  {
    videoUrl:
      "https://ik.imagekit.io/ieamrnk3n/bank.mp4?updatedAt=1774427748698",
    label: "bank app",
    span: "md:col-span-3 md:row-span-3",
  },
  {
    color: "bg-yellow-400",
    label: "DevOps",
    span: "md:col-span-2 md:row-span-4",
  },
  {
    color: "bg-emerald-400",
    label: "APIs",
    span: "md:col-span-3 md:row-span-3",
  },
  { color: "bg-rose-400", label: "Cloud", span: "md:col-span-2 md:row-span-3" },
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
      {TILES.map(({ videoUrl, color, span }, idx) => (
        <div
          key={idx}
          className={`
            ${span} ${color ? color : ""}
            rounded-2xl cursor-pointer
            flex items-end p-4
            overflow-hidden relative
            group transition-all duration-350 ease-smooth
            hover:-translate-y-1 hover:shadow-lg
            h-36 sm:h-44 md:h-auto
          `}
          onMouseEnter={(e) => {
            if (!videoUrl) return;
            const v = e.currentTarget.querySelector("video");
            if (v) {
              v.muted = true;
              v.play().catch(() => {});
            }
          }}
          onMouseLeave={(e) => {
            if (!videoUrl) return;
            const v = e.currentTarget.querySelector("video");
            if (v) {
              v.pause();
              if (typeof v.currentTime === "number") v.currentTime = 0;
            }
          }}
        >
          {/* background: video or color */}
          {videoUrl ? (
            <video
              src={videoUrl}
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              muted
              loop
              preload="metadata"
              aria-hidden="true"
            />
          ) : (
            <>
              <div
                className={`absolute inset-0 ${color ? color : "bg-gray-200"}`}
                aria-hidden="true"
              />

              {/* centered "Coming Soon" for colored tiles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg md:text-xl font-semibold text-white/95 drop-shadow-sm">
                  Coming Soon
                </span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Masonry;

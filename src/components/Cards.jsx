import React from "react";

function Cards({ data }) {
  return (
    <div
      className={`
        card card-hover magicpattern
        p-6 md:p-7
        flex flex-col gap-8
        cursor-pointer group
        ${data.rotate ?? ""}
      `}
    >
      {/* Number badge */}
      <span className="font-mono text-4xl font-black text-primary-200 leading-none
                       group-hover:text-primary-300 transition-colors duration-300">
        {data.id}
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="font-display font-bold text-xl text-base-900 leading-tight">
          {data.title}
        </h3>
        <p className="font-body text-sm text-base-600 leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Accent line */}
      <div className="h-0.5 w-10 bg-primary-500 rounded-full mt-auto
                      group-hover:w-16 transition-all duration-350" />
    </div>
  );
}

export default Cards;

import React from "react";

export function TechnoComponent({ imgSrc, technoName, link }) {
  return (
    <a href={link} target="_blank">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer select-none">
        {technoName}
        <img className="rounded w-5 h-5" src={imgSrc} alt="Next.js Logo" />
      </div>
    </a>
  );
}

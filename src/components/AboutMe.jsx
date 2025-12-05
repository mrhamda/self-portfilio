import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faIntercom,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export function AboutMe() {
  return (
    <div className="mt-10">
      <div
        className="flex flex-col md:flex-row items-stretch px-4 m-5 max-w-4xl mx-auto gap-4"
        id="Aboutme"
      >
        {/* Image */}
        <div className="flex justify-center md:justify-start fromLeft">
          <div className="card">
            <img
              src="./AbdullahEnchancedSmaller.jpg"
              alt="About me"
              className="rounded-lg shadow-md object-cover h-[25rem] z-2 "
            />
          </div>
        </div>

        {/* Content box */}
        <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg md:w-1/2 h-[27rem] fromRight">
          <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1 flex justify-between">
            <span className="text-sm text-slate-600 font-medium">About me</span>
            <span className="text-sm text-slate-600 font-medium">
              <FontAwesomeIcon icon={faGlobe} />
            </span>
          </div>

          <div className="p-4 flex flex-col justify-center h-full">
            <h5 className="mb-4 text-slate-800 text-xl font-semibold leading-tight">
              Abdullah Hamdan — Fullstack webdeveloper
            </h5>
            <p className="text-slate-600 leading-relaxed font-light">
              Self taught fullstack webdeveloper. I have been coding for over 3
              years. My first projects were simple built with HTMl, CSS and
              Javascript which later progressed to much more advanced projects
              like realtime chat apps and E-comernace site and such.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

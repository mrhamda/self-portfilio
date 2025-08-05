"use client";

import { Context } from "@/contexts/context";
import {
  faArrowRight,
  faArrowRightArrowLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";

export function SideNavbar() {
  const { activeSidebar, setActiveSidebar } = useContext(Context);

  function activeLink(e) {
    const allItems = document.querySelectorAll(".link-me");

    allItems.forEach((x) => {
      x.classList.remove("bg-gray-800");
      x.classList.remove("text-white");
      x.classList.remove("pointer-events-none");
    });

    e.target.classList.add("bg-gray-800");
    e.target.classList.add("text-white");

    e.target.classList.add("pointer-events-none");
  }
  useEffect(() => {
    const home = document.querySelector("#Home");
    const aboutMe = document.querySelector("#Aboutme");
    const projects = document.querySelector("#Projects");
    const technologies = document.querySelector("#Technologies");
    const contact = document.querySelector("#Contact");

    const fullArray = [home, aboutMe, projects, technologies, contact];

    function handleScroll() {
      for (let i = 0; i < fullArray.length; i++) {
        const section = fullArray[i];
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        const offset = 200;

        if (rect.top <= offset && rect.bottom > offset) {
          const allItems = document.querySelectorAll(".link-me");

          allItems.forEach((item) => {
            item.classList.remove(
              "bg-gray-800",
              "text-white",
              "pointer-events-none"
            );

            const href = item.getAttribute("href")?.substring(1);
            if (href === section.id) {
              item.classList.add(
                "bg-gray-800",
                "text-white",
                "pointer-events-none"
              );
            }
          });

          break;
        }
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside
      style={{ boxShadow: activeSidebar ? "0px 0px 50px white" : "none" }}
      className={`w-64 h-screen bg-white dark:bg-white text-black dark:text-white shadow-lg fixed top-0 left-0 z-40
        transform transition-transform duration-200 ease-in-out 
       ${
         activeSidebar
           ? "translate-x-0 pointer-events-auto"
           : "-translate-x-full pointer-events-none"
       }
`}
    >
      <nav className="mt-6">
        <div className="text-black flex justify-end pr-4 mb-5 hover:opacity-35 cursor-pointer transition-all">
          <div
            onClick={() => {
              setActiveSidebar(!activeSidebar);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />{" "}
          </div>
        </div>
        <ul className="space-y-2 uppercase font-bold">
          <li
            onClick={() => {
              setActiveSidebar(!activeSidebar);
            }}
          >
            <a
              href="#Home"
              onClick={activeLink}
              className="flex items-center px-6 py-3 rounded transition hover:text-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 link-me"
            >
              <span>Home</span>
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </li>
          <li
            onClick={() => {
              setActiveSidebar(!activeSidebar);
            }}
          >
            {" "}
            <a
              href="#Aboutme"
              onClick={activeLink}
              className="flex items-center px-6 py-3 rounded transition hover:text-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 link-me"
            >
              About me
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </li>
          <li
            onClick={() => {
              setActiveSidebar(!activeSidebar);
            }}
          >
            {" "}
            <a
              href="#Projects"
              onClick={activeLink}
              className="flex items-center px-6 py-3 rounded transition hover:text-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 link-me"
            >
              Projects
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </li>
          <li
            onClick={() => {
              setActiveSidebar(!activeSidebar);
            }}
          >
            {" "}
            <a
              href="#Technologies"
              onClick={activeLink}
              className="flex items-center px-6 py-3 rounded transition hover:text-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 link-me"
            >
              Technologies
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </li>
          <li
            onClick={() => {
              setActiveSidebar(!activeSidebar);
            }}
          >
            {" "}
            <a
              href="#Contact"
              onClick={activeLink}
              className="flex items-center px-6 py-3 rounded transition hover:text-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 link-me"
            >
              Contact
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

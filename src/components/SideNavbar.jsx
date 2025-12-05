"use client";

import { Context } from "@/contexts/context";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";

export function SideNavbar() {
  const { activeSidebar, setActiveSidebar } = useContext(Context);

  function activeLink(e) {
    const allItems = document.querySelectorAll(".link-me");

    allItems.forEach((x) => {
      x.classList.remove(
        "bg-gray-800",
        "text-white",
        "pointer-events-none",
        "light:text-white",
        "ligt:bg-gray-800"
      );
    });

    e.currentTarget.classList.add(
      "bg-gray-800",
      "text-white",
      "pointer-events-none",
      "light:text-white",
      "ligt:bg-gray-800"
    );
  }

  useEffect(() => {
    const sectionIds = [
      "Home",
      "Aboutme",
      "Projects",
      "Certs",
      "Technologies",
      "Cybersecruity",
      "Contact",
    ];

    const sections = sectionIds
      .map((id) => document.querySelector(`#${id}`))
      .filter((section) => section !== null);

    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const SCROLL_OFFSET = 150; 

      let activeSectionId = null;

    
      if (scrollY >= scrollableHeight - 5) {
        activeSectionId = "Contact";
      }

     
      if (!activeSectionId) {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (!section) continue;

          const sectionTop = section.offsetTop;

          if (scrollY >= sectionTop - SCROLL_OFFSET) {
            activeSectionId = section.id;
            break; // Found the active section, stop iterating
          }
        }
      }

      if (!activeSectionId && sections[0]) {
        activeSectionId = sections[0].id;
      }

      if (activeSectionId) {
        const allItems = document.querySelectorAll(".link-me");

        allItems.forEach((item) => {
          // Remove all active classes from all links
          item.classList.remove(
            "bg-gray-800",
            "text-white",
            "pointer-events-none",
            "light:text-white",
            "ligt:bg-gray-800"
          );

          const href = item.getAttribute("href")?.substring(1);

          if (href === activeSectionId) {
            item.classList.add(
              "bg-gray-800",
              "text-white",
              "pointer-events-none",
              "light:text-white",
              "ligt:bg-gray-800"
            );
          }
        });
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            <a
              href="#Certs"
              onClick={activeLink}
              className="flex items-center px-6 py-3 rounded transition hover:text-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 link-me"
            >
              Certifications
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
              href="#Cybersecruity"
              onClick={activeLink}
              className="flex items-center px-6 py-3 rounded transition hover:text-white text-black hover:bg-gray-200 dark:hover:bg-gray-800 link-me"
            >
              Cybersecruity
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

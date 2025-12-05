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
      x.classList.remove("bg-gray-800");
      x.classList.remove("text-white");
      x.classList.remove("pointer-events-none");
    });

    e.target.classList.add("bg-gray-800");
    e.target.classList.add("text-white");

    e.target.classList.add("pointer-events-none");
  }

  // 💡 Updated useEffect Hook for scroll-based link activation
  useEffect(() => {
    // 1. Get all section elements
    const sections = [
      document.querySelector("#Home"),
      document.querySelector("#Aboutme"),
      document.querySelector("#Projects"),
      document.querySelector("#Certs"),
      document.querySelector("#Technologies"),
      document.querySelector("#Cybersecruity"),
      document.querySelector("#Contact"),
    ].filter((section) => section !== null); // Filter out any sections that weren't found

    // 2. Main scroll handler function
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const scrollableHeight = documentHeight - windowHeight;

      // --- New Logic for 200px near bottom ---
      const proximityThreshold = 200;
      const isNearBottom = scrollY >= scrollableHeight - proximityThreshold;
      // ---------------------------------------

      let activeSectionId = null;

      // First, check the special "near bottom" condition for the Contact section
      if (isNearBottom) {
        // The last section is assumed to be Contact
        activeSectionId = sections[sections.length - 1]?.id || null;
      } else {
        // Otherwise, use the standard intersection logic
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (!section) continue;

          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // You can adjust the offset (-50) to make it select slightly earlier
          const intersectionOffset = 50;

          const isInSection =
            scrollY >= sectionTop - intersectionOffset &&
            scrollY < sectionTop + sectionHeight - intersectionOffset;

          if (isInSection) {
            activeSectionId = section.id;
            break; // Found the active section, stop iterating
          }
        }
      }

      // 3. Apply active state to the corresponding link
      if (activeSectionId) {
        const allItems = document.querySelectorAll(".link-me");

        allItems.forEach((item) => {
          // Remove all active classes from all links
          item.classList.remove(
            "ligt:bg-gray-800",
            "bg-gray-800",
            "text-white",
            "pointer-events-none",
            "light:text-white"
          );

          const href = item.getAttribute("href")?.substring(1);

          // Add active classes to the matching link
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

    // 4. Set up scroll listener and initial call
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    // 5. Cleanup function
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
              Certifcations
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

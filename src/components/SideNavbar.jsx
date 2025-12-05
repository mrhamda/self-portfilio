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
      // Remove active classes
      x.classList.remove(
        "bg-gray-800",
        "text-white",
        "pointer-events-none",
        "light:text-white",
        "ligt:bg-gray-800"
      );
    });

    // Add active classes to the clicked element
    e.currentTarget.classList.add(
      "bg-gray-800",
      "text-white",
      "pointer-events-none",
      "light:text-white",
      "ligt:bg-gray-800"
    );
  }

  // 💡 FIXED useEffect Hook for scroll-based link activation
  useEffect(() => {
    // 1. Get all section elements (Corrected typo for consistency with link href)
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

    // 2. Main scroll handler function
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.offsetHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const SCROLL_OFFSET = 150; // Adjust this value to select the link earlier/later (e.g., 150px)

      let activeSectionId = null;

      // --- Logic for final section when scrolling to the bottom ---
      // Force 'Contact' to be active when the user is at the very bottom of the page.
      // This is necessary because the last section might be shorter than the window height.
      if (scrollY >= scrollableHeight - 5) {
        // 5px tolerance at the very bottom
        activeSectionId = "Contact";
      }

      // --- Standard intersection logic for all sections ---
      // Iterate sections in reverse order to ensure the lowest visible section is selected.
      if (!activeSectionId) {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (!section) continue;

          const sectionTop = section.offsetTop;

          // Check if the current scroll position is past the top of the section,
          // adjusted by the offset.
          if (scrollY >= sectionTop - SCROLL_OFFSET) {
            activeSectionId = section.id;
            break; // Found the active section, stop iterating
          }
        }
      }

      // If nothing is active (usually at the very top), default to Home
      if (!activeSectionId && sections[0]) {
        activeSectionId = sections[0].id;
      }

      // 3. Apply active state to the corresponding link
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

          // Use the href attribute without the '#'
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

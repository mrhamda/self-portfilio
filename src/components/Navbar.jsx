"use client";

import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Context } from "@/contexts/context";

export function Navbar() {
  const { activeSidebar, setActiveSidebar } = useContext(Context);
  return (
    <>
      <nav
        className={`bg-white border-gray-200 dark:bg-white cursor-pointer fixed  w-[100vw] z-10`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#Home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              AH
            </span>
          </a>

          <div
            id="navbar-cta"
            className="
    top-2 right-2 z-50
    flex items-center justify-center
    w-12 h-12
    bg-white dark:bg-gray-900 rounded-md
    md:static md:w-auto md:h-auto md:bg-transparent md:dark:bg-transparent md:rounded-none
  "
          >
            <ul
              className="
      flex items-center justify-center
      p-0 m-0
      md:flex-row md:p-0 md:m-0
    "
            >
              <li>
                <a
                  aria-current="page"
                  className="
          block
          text-black dark:text-white
          hover:opacity-30 transition-all scale-125
        "
                >
                  <div>
                    <input
                      id="checkbox"
                      type="checkbox"
                      readOnly
                      checked={activeSidebar}
                      onClick={() => setActiveSidebar(!activeSidebar)}
                    />
                    <label className="toggle" htmlFor="checkbox">
                      <div id="bar1" className="bars"></div>
                      <div id="bar2" className="bars"></div>
                      <div id="bar3" className="bars"></div>
                    </label>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

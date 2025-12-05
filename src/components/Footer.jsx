import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer
      id="Contact"
      className="bottom-0 light:text-white left-0 z-20 w-full p-12 bg-black border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-black dark:border-white mt-10 "
    >
      <div className="flex justify-center items-center w-[100vw] overflow-hidden">
        <span className="text-sm light:text-white text-white sm:text-cewhitenter dark:text-white">
          {date + " "}
          <a href="https://flowbite.com/" className="hover:underline">
            Abdullah Hamdan
          </a>
          . All Rights Reserved.
        </span>
      </div>

      {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul> */}
    </footer>
  );
}

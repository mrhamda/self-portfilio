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
    </footer>
  );
}

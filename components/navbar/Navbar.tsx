"use client";

import React from 'react'
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.25rem] w-full rounded-none border border-white border-opacity-50 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.2rem]  sm:h-[3.25rem]  dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2  sm:h-[initial] sm:py-0 ">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative font-semibold font-mono text-[11px] sm:text-[13px]  "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition   dark:text-gray-500 dark:hover:text-gray-300 ",
                  {
                    "text-gray-950 dark:text-white": activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-lg absolute inset-0 -z-10 dark:bg-white/10 "
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

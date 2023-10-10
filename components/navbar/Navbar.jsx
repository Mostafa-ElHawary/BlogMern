"use client";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";
import { links } from "@/lib/data";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="z-[999] relative flex items-center justify-between h-16">
      {
        // <div className={styles.social}>
        //   <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        //   <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        //   <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        //   <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        // </div>
      }

      {
        // <div className="flex-1 text-left text-3xl font-bold ">blog</div>
      }
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-50 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.2rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-lg dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative font-semibold font-mono text-[11px] sm:text-[13px]  "
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition   dark:text-gray-500 dark:hover:text-gray-300"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
          {
            //  <Link href="/"  >
            //         Homepage
            //       </Link>
            //       <Link href="/" className="flex items-center gap-4 flex-1 text-lg">
            //         Contact
            //       </Link>
            //       <Link href="/" className="flex items-center gap-4 flex-1 text-lg">
            //         About
            //       </Link>
          }
          {
            // <AuthLinks />
            // <ThemeToggle />
          }
        </ul>
      </nav>
    </header>
  );
}

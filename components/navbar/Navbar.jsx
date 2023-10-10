import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-16">
      {
        // <div className={styles.social}>
        //   <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        //   <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        //   <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        //   <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        // </div>
      }

      <div className="flex-1 text-left text-3xl font-bold ">blog</div>
      <div className="flex items-center gap-4 flex-1 text-lg">
        <Link href="/" className="flex items-center gap-4 flex-1 text-lg text-red-600">
          Homepage
        </Link>
        <Link href="/" className="flex items-center gap-4 flex-1 text-lg">
          Contact
        </Link>
        <Link href="/" className="flex items-center gap-4 flex-1 text-lg">
          About
        </Link>
        <AuthLinks />
        <ThemeToggle />
      </div>
    </div>
  );
}

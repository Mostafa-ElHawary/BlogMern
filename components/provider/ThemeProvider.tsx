"use client";
import { ThemeContext } from "@/components/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={`${theme} this is dark`}>{children}</div>;
  }
}

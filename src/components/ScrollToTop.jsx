"use client";

import { useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { LenisContext } from './LenisContext';

function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useContext(LenisContext);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true, // Instant scroll on route change
      });
    } else {
      window.scrollTo(0, 0); // Fallback for non-Lenis scenarios
    }
  }, [pathname, lenis]); // Re-run when pathname changes

  return null;
}

export default ScrollToTop;
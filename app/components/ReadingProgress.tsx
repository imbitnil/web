"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(Math.min(percent, 100));
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full">
      <div
        className="h-full bg-black transition-all duration-75 dark:bg-white"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
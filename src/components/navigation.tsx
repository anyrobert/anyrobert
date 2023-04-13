import { ThemeSwitch } from "./theme-switch";

import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 md:py-6 md:mb-6">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link
          href="/"
          className="font-medium tracking-wider transition-colors text-gray-900 hover:text-primary uppercase dark:text-white dark:hover:text-primary"
        >
          Robert Gabriel
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

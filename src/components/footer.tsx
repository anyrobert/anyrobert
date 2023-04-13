"use client";

import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <motion.div
          className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"
          initial={{ opacity: 0, skew: 30, x: 250 }}
          animate={{ opacity: 1, skew: 0, x: 0 }}
        />
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <motion.p
            className="hover:text-primary cursor-default"
            initial={{ opacity: 0, skew: 30, x: -250 }}
            animate={{ opacity: 1, skew: 0, x: 0 }}
            whileHover={{ scale: 1.1, skew: 5 }}
          >
            ¯\_(ツ)_/¯
          </motion.p>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://twitter.com/anyrobert_"
              className={"transition-colors hover:text-primary"}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/robert-gabriel-da-luz"
              className={"transition-colors hover:text-primary"}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/anyrobert"
              className={"transition-colors hover:text-primary"}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

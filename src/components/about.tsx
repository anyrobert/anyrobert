"use client";

import anyrobert from "../../public/anyrobert.jpg";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left items-center">
        <motion.article
          className="lg:px-4 lg:mt-12 h-max"
          initial={{ opacity: 0, skew: 30, x: -250 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, skew: 0, x: 0 }}
        >
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Robert Gabriel,
          </h1>
          <h3 className="lg:text-2xl font-bold text-gray-900  dark:text-white">
            Developer
          </h3>
          <div className=" mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 text-lg flex">
              Freelance Web Developer based in Curitiba, Brazil. ☕
              <br />
              Passionate about technology and design area, clean code and agile
              ways of work enthusiast.
              <br />
            </p>
          </div>
        </motion.article>
        <motion.div
          initial={{ opacity: 0, skew: 10, x: 250 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, skew: 0, x: 0 }}
        >
          <Image
            className="rounded-full max-w-xs aspect-square object-cover mb-4 lg:mb-0"
            src={anyrobert}
            alt="Picture of the author"
            placeholder="blur"
          />
        </motion.div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A back-end developer who just can't get enough of{" "}
        <span className="font-medium">technology.</span> Started off tinkering
        with front-end stuff, but soon found my groove in the{" "}
        <span className="font-medium">back-end world.</span>{" "}
        <span className="italic">I love diving into tricky problems and</span>{" "}
        coming up with smart solutions,<span className="underline">love</span>
        to make web applications run smoothly. My core stack is{" "}
      </p>

      <p>
        <span className="italic">
          When I'm not coding, you'll probably find me typing away on my blog,
        </span>{" "}
        sharing what I've learned and hopefully making tech less intimidating
        for everyone.{" "}
        <span className="font-medium">
          Let's navigate this digital universe together!
        </span>
      </p>
    </motion.section>
  );
}

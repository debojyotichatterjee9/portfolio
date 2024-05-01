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
      {/* <p className="mb-3">
        A back-end developer who just can't get enough of{" "}
        <span className="font-medium">technology.</span> Started off tinkering
        with front-end stuff, but soon found my groove in the{" "}
        <span className="font-medium">back-end world.</span>{" "}
        <span className="italic">I love diving into tricky problems and</span>{" "}
        coming up with smart solutions,<span className="underline">love</span>
        to make web applications run smoothly. My core stack is{" "}
      </p> */}
      <p className="mb-3">
        Hi there! I'm a <span className="font-medium">back-end developer</span>{" "}
        who is absolutely fascinated by technology. I started out playing around
        with <span className="font-medium">front-end stuff</span>, but I quickly
        found my groove in the{" "}
        <span className="font-medium">back-end realm.</span> I really enjoy
        tackling{" "}
        <span className="font-medium">complex problems</span> and coming up with
        clever solutions to make web apps run like a dream. My core stack is{" "}
        <span className="font-medium italic">MERN, Django, and Flask.</span>
      </p>

      <p>
        <span className="italic">
          When I'm not busy coding, you can usually find me sketching or typing
          away on my blog,
        </span>{" "}
        <span className="italic">
          sharing what I've learned and hopefully making tech less intimidating
          for everyone.{" "}
        </span>
      </p>

      <p>
        <span className="font-medium">
          So let's explore this digital universe together
        </span>
        <span className="font-medium">
          - I'd love to have you along for the ride!
        </span>
      </p>
    </motion.section>
  );
}

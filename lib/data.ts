import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "SimplifyVMS",
    description:
      "I worked as a backend developer on this project. Simplify VMS is secure private-cloud Vendor Management System.",
    tags: [
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "MySQL",
      "Django",
      "AWS",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "DocHipo",
    description:
      "DocHipo, which is a collaborative graphic design software to create beautiful, engaging documents.",
    tags: [
      "React",
      "AngularJS",
      "TypeScript",
      "ExpressJS",
      "NodeJS",
      "Python",
      "CherryPy",
      "MongoDB",
      "Mongoose",
      "Redux",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "User Profile Management",
    description:
      "A service that features, user authentication and permissions and can be used as a microserice.",
    tags: [
      "NodeJS",
      "ExpressJS",
      "Javascript",
      "TypeScript",
      "MongoDB",
      "TypeORM",
      "PostgreSQL",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const experiencesData = [
  {
    title: "Cloud Specialist",
    location: "LTIMindtree",
    description:
      "Responsible for designing, implementing, and managing cloud-based infrastructure, ensuring optimal performance, security, and cost-effectiveness.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Development Lead",
    location: "Simplify Workforce Pvt. Ltd.",
    description:
      "Building backend services, managing a team of developers, ensuring project delivery, and fostering a collaborative, innovative work environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Full-Stack Developer",
    location: "DocHipo",
    description:
      "Designing, developking, and maintaining both the front-end and back-end components as per specifications, ensuring seamless integration and optimal user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Python",
  "NodeJS",
  "ExpressJS",
  "NestJS",
  "Fastify",
  "Django",
  "Flask",
  "React",
  "NextJS",
  "Redux",
  "TypeORM",
  "Prisma",
  "SQL",
  "PostgreSQL",
  "Mongoose",
  "MongoDB",
  "REST",
  "GraphQL",
  "Apollo",
  "Git",
] as const;

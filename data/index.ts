import { Github } from "lucide-react";

const data = {
  home: {
    name: "Mohamed Hassan",
    description: "The #full__stack developer who builds things for #the_Web.", // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: "asdf",
  },
  sidebar: {
    links: [
      {
        name: "git hub",
        link: "https://github.com/mo-hassann",
        icon: Github,
      },
    ],
  },
  about: {
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur expedita eius unde. Esse accusamus a, earum quia, eius, debitis possimus iste natus saepe aliquid quasi. Consequatur reiciendis, illo alias quaerat facere vitae exercitationem rem!",
    image: "/imgs/about-image.png",
    numbers: [
      { name: "PROJECTS-COMPLETED", number: 100 },
      { name: "TASk-COMPLETED", number: 150 },
      { name: "TODOS-COMPLETED", number: 7 },
    ],
  },
  projects: {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id incidunt voluptatibus.",
    projects: [
      {
        id: 1,
        title: "React Application",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, similique. Maxime quam ex consectetur debitis explicabo accusantium eligendi, aspernatur expedita! Fuga, vero sint tempore perferendis omnis dicta. Non, inventore perferendis!",
        image: "/imgs/project-placeholder.jpg",
        githubLink: "/",
        previewLink: "/",
      },
      {
        id: 2,
        title: "next Application",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, similique. Maxime quam ex consectetur debitis explicabo accusantium eligendi, aspernatur expedita! Fuga, vero sint tempore perferendis omnis dicta. Non, inventore perferendis!",
        image: "/imgs/project-placeholder.jpg",
        githubLink: "/",
        previewLink: "/",
      },
      {
        id: 3,
        title: "typescript Application",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, similique. Maxime quam ex consectetur debitis explicabo accusantium eligendi, aspernatur expedita! Fuga, vero sint tempore perferendis omnis dicta. Non, inventore perferendis!",
        image: "/imgs/project-placeholder.jpg",
        githubLink: "/",
        previewLink: "/",
      },
      {
        id: 4,
        title: "javascript Application",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, similique. Maxime quam ex consectetur debitis explicabo accusantium eligendi, aspernatur expedita! Fuga, vero sint tempore perferendis omnis dicta. Non, inventore perferendis!",
        image: "/imgs/project-placeholder.jpg",
        githubLink: "/",
        previewLink: "/",
      },
      {
        id: 5,
        title: "vite Application",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, similique. Maxime quam ex consectetur debitis explicabo accusantium eligendi, aspernatur expedita! Fuga, vero sint tempore perferendis omnis dicta. Non, inventore perferendis!",
        image: "/imgs/project-placeholder.jpg",
        githubLink: "/",
        previewLink: "/",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 7,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 8,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 9,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 10,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 11,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 12,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 13,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 14,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 15,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "mohamed.hassan.bu@gmail.com",
  },
};

export default data;

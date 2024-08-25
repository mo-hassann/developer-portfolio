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
      "My name is Mohamed Hassan and I love building full-stack applications. In my free time, I enjoy exploring new technologies and keeping up with the latest trends in web development. Additionally, I like to contribute to open-source projects and share my knowledge through writing technical blogs.",
    image: "/imgs/about-image.png",
    numbers: [
      { name: "PROJECTS-COMPLETED", number: 5 },
      { name: "TOTAL-CONTRIBUTIONS", number: 160 },
      { name: "CURRENT-YEAR-CONTRIBUTIONS", number: 130 },
    ],
  },
  projects: {
    description: "Projects that have recently been completed.",
    projects: [
      {
        id: 1,
        title: "Social Media App",
        description: "A platform that allows users to connect, share, and interact with others. It provides a space for posting updates and engaging with content from friends, family, and communities around the world.",
        image: "/projects-imgs/social.png",
        githubLink: "https://github.com/mo-hassann/social-app",
        previewLink: "https://social-m-app.vercel.app",
      },
      {
        id: 2,
        title: "Quran App",
        description:
          "In this app you can view the Quran in different languages. You can also listen to the Quran with up to eight different readers. Additionally, you can search for chapters and verses by keyword and view the Quran's translation. Also you can track your reading time and set daily reading goals.",
        image: "/projects-imgs/quran.png",
        githubLink: "https://github.com/mo-hassann/nextjs-quran-app",
        previewLink: "https://quraany-app.vercel.app",
      },
      {
        id: 3,
        title: "Notes Taker",
        description: "The Notes App is a versatile tool designed to help you quickly jot down thoughts, ideas, to-do lists, and important information. you can use it on smartphones, tablets, and computers, making it easy to sync notes across all your devices.",
        image: "/projects-imgs/notes.png",
        githubLink: "https://github.com/mo-hassann/simple-notes-app",
        previewLink: "https://notes-app-s.vercel.app",
      },
      {
        id: 4,
        title: "Developer Portfolio",
        description: "A developer portfolio is a website or digital platform that showcases a developer's skills, projects, and professional experience. It serves as a personal brand, highlighting the developer's expertise and work to potential employers, clients, or collaborators.",
        image: "/projects-imgs/portfolio.png",
        githubLink: "https://github.com/mo-hassann/my-portfolio",
        previewLink: "https://mohamed-hassan.vercel.app",
      },
      {
        id: 5,
        title: "Trello Clone",
        description:
          "Clone of the Trello App which is a popular project management tool designed to help individuals and teams organize tasks and collaborate efficiently. It uses boards, lists, and cards to visually represent projects and tasks, making it easy to track progress and prioritize work.",
        image: "/projects-imgs/trello.png",
        githubLink: "https://github.com/mo-hassann/trello-app",
        previewLink: "https://trello-app-v1.vercel.app",
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

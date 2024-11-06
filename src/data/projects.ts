import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "Devta",
    description:
      "It is an Open-source project.The aim is to build a single tool which most developers could use for their everyday tasks",
    icon: "/skills/vuejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/techrail/devta",
    url: "https://devta.techrail.in/",
    tags: ["Vuejs", "Javascript", "Bootstrap"],
  },
  {
    id: "e-commerce-app-mern",
    title: "FileSink",
    description:
      "Developed a cloud storage application using React and Next.js for a user-friendly interface and server-side rendering.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/arjun3649/Filesink",
    url: " https://filesink.vercel.app",
    tags: ["React.js", "Nextjs","Javascript", "Shadcn", "Clerk","Tailwindcss"],
  },
  {
    id: "video-calling-app-flutter",
    title: "PlusKart",
    description:
      "Integrated responsive design, delivering a seamless user experience across all devices.Implemented comprehensive cart functionalities, including product addition, removal, and quantity management. ",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/arjun3649/Fyi-assignment",
    url: "https://fyiassignment.vercel.app/",
    tags: ["React.js", "Nextjs","Javascript","Redux","Tailwindcss"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/arjun3649/Portfolio",
    url: "https://portfolio-3649.vercel.app/",
    tags: ["Next.js", "Reactjs", "Web Development"],
  },
  
];
export default projects;

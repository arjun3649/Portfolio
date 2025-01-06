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
    title: "ZAPP",
    description:
      "Designed and implemented the complete frontend for ZAPP, a grocery delivery app inspired by Blinkit, focusing on user-centric design and responsiveness. ",
    icon: "/skills/reactnative.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/arjun3649/zapts",
    url: "",
    tags: ["React Native","Typescript","Redux","Nativewind"],
  },
  
  
];
export default projects;

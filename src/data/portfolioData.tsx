

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  clientRepoUrl?: string;
  serverRepoUrl?: string;
  challenges: string[];
  improvements: string[];
  featured: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period?: string;
  description: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}


export const PROFILE = {
  name: "Soha Tabassom Supre",
  shortName: "Soha",
  designation: "CSE Undergraduate | Aspiring Software Developer",

  university: "Jashore University of Science and Technology",

  introduction:
    "I'm a Computer Science and Engineering undergraduate interested in building practical software solutions. I enjoy working with modern web technologies, solving programming problems, and continuously improving my development skills.",

  about: [
    "My journey in Computer Science has helped me develop an interest in software development and problem-solving. I enjoy turning ideas into functional applications and learning how different parts of a software system work together.",

    "Alongside development, I actively practice competitive programming and help fellow students strengthen their programming fundamentals. I'm also interested in exploring Artificial Intelligence and Machine Learning as I continue growing as a developer.",
  ],

  interests: [
    "Full-Stack Development",
    "Problem Solving",
    "Artificial Intelligence",
    "Competitive Programming",
  ],

  resumeUrl: "",

  email: "sohatabassom2@gmail.com",

  location: "Bangladesh",

  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/Soha-Tabassom-Supre",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/soha-tabassom-supre/",
    },
    {
      label: "Codeforces",
      href: "https://codeforces.com/profile/soha_stack",
    },
    {
      label: "CodeChef",
      href: "https://www.codechef.com/users/soha_stack",
    },
  ] satisfies SocialLink[],
};



export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "DaisyUI"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "Better Auth"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code" ],
  },
  {
    category: "Computer Science",
    skills: ["Data Structures", "Algorithms", "Competitive Programming"],
  },
];


export const PROJECTS: ProjectItem[] = [
  {
    id: "uddog",
    name: "Uddog",
    tagline: "Small actions. Shared impact.",

    description:
      "A community-driven social development and event management platform that encourages people to participate in meaningful activities and create positive changes in their communities.",

    stack: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Better Auth"],

    image: "/projects/uddog.png",

    challenges: [
      "Integrating authentication between the Next.js frontend and separate Express backend.",
      "Managing protected backend routes and user authentication.",
    ],

    improvements: [
      "Expand event participation and community engagement features.",
      "Improve testing and application performance.",
    ],

    featured: true,
  },

  {
    id: "bazar-dor",
    name: "Bazar-Dor",
    tagline: "A web application developed as a full-stack project.",

    description:
      "A full-stack web development project involving frontend development, backend API integration, authentication, and database connectivity.",

    stack: ["Next.js", "Better Auth", "Neon PostgreSQL"],

    image: "/projects/bazar-dor.png",

    challenges: [
      "Integrating authentication with the application.",
      "Handling database connectivity and deployment-related issues.",
    ],

    improvements: [
      "Improve application reliability and error handling.",
      "Expand functionality and refine the user experience.",
    ],

    featured: true,
  },

  {
    id: "fitlog",
    name: "FitLog",
    tagline: "A fitness-related web application.",

    description:
      "A frontend development project built with React, Tailwind CSS, and DaisyUI, involving API integration and application interface development.",

    stack: ["React", "Tailwind CSS", "DaisyUI", "REST API"],

    image: "/projects/fitlog.png",

    challenges: [
      "Implementing API-based application functionality.",
      "Building a responsive and consistent user interface.",
    ],

    improvements: [
      "Further improve usability and interface consistency.",
      "Expand application functionality.",
    ],

    featured: true,
  },


];



export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "ACM Lab Instructor",
    organization: "Jashore University of Science and Technology",

    description:
      "Supporting junior students in developing programming fundamentals and problem-solving skills.",

    responsibilities: [
      "Helping students understand C++ programming fundamentals.",
      "Guiding juniors through competitive programming problems.",
      "Supporting students in improving their logical thinking and problem-solving approaches.",
    ],
  },
];



export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Jashore University of Science and Technology",
    period: "2024 – 2028",

    description: "Undergraduate studies in Computer Science and Engineering.",
  },
];


export const CODING_PROFILES = {
  codeforces: {
    handle: "soha_stack",
    maxRating: 1054,
    problemsSolved: 258,
    contests: 27,
  },

  codechef: {
    handle: "soha_stack",
    rating: 1548,
    problemsSolved: 94,
    contests: 15,
  },

  icpc: {
    participationCount: 2,
  },
};



export const ACTIVITIES = [
  "ICPC participation",
  "Hackathon participation",
  "Business case competition",
];

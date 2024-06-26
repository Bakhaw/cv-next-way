import { yearsDiff } from "@/lib/utils";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const baseDate = new Date("2019").toString();
const now = new Date(Date.now()).toString();
const exeperienceInYears = yearsDiff(baseDate, now);

export const RESUME_DATA = {
  name: "Faïssal Hattou",
  initials: "FH",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  about:
    "Développeur axé sur la création de produits performants, passionné du web 🧑‍💻",
  summary: `Développeur React/Next.js depuis ${exeperienceInYears} ans, j'ai accompagné plusieurs clients et développé de nombreux projets innovants sur le web. Autodidacte, je m'adapte facilement et touche à tout. Mon autonomie me permet de m'intégrer rapidement au sein d'une nouvelle équipe. Le web et ses nouvelles technologies me passionnent, je m'en sers pour concevoir des interfaces modernes et centrées sur l'expérience utilisateur.`,
  avatarUrl:
    "https://media.licdn.com/dms/image/D4E03AQHYC435Asb31A/profile-displayphoto-shrink_200_200/0/1685728239094?e=2147483647&v=beta&t=NWGb_NjCDwNnpHj1i0_XkYLTEjlRpiVEFC6ldVOjwVY",
  personalWebsiteUrl: "https://fh-universe.netlify.app/",
  contact: {
    email: "faissal.hattou@gmail.com",
    tel: "+33634161866",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Bakhaw",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/faissal-hattou/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/Faissal_Hattou",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Simplon Prod",
      degree: "Développeur Full-Stack en alternance",
      start: "2018",
      end: "2019",
    },
    {
      school: "Simplon.co",
      degree: "Formation développeur full-stack Javascript web et mobile",
      start: "2017",
      end: "2018",
    },
  ],
  work: [
    {
      company: "ekino",
      link: "https://www.ekino.fr/",
      badges: [],
      skills: [
        "Next.js",
        "React",
        "Typescript",
        "GraphQL",
        "React-Query",
        "Magento",
        "Figma",
        "Git",
        "Agile",
      ],
      title: "Développeur Front-End Sénior",
      start: "juil. 2023",
      end: "oct 2023",
      description:
        "Développement d’une boutique de bijoux en ligne (ecommerce)",
      tasks: [
        "Refonte de la codebase vers Next 13",
        "Mise en place d’un système de réservation de rendez-vous pour les clients de la bijouterie",
        "Mise en place de l’internationalisation",
        "Architecture du projet et création de composants flexibles",
      ],
    },
    {
      company: "One First Group",
      link: "https://onefirstgroup.com/",
      badges: ["Freelance"],
      skills: ["React", "Typescript", "Git", "Figma", "Agile"],
      title: "Développeur Front-End",
      start: "juil. 2022",
      end: "déc. 2022",
      description:
        "Développement d'applications web au sein d'une Digital Factory",
      tasks: [
        "Développement d'un back-office pour une entreprise de logistique",
        "Développement d'un calendrier connecté via API",
        "Développement de formulaires et gestion d'erreurs",
        "Création de composants flexibles",
      ],
    },
    {
      company: "Virtual Pro Gaming",
      link: "https://virtualprogaming.com/",
      badges: ["Freelance"],
      skills: ["React", "Typescript", "SASS", "Design System", "Figma", "Git"],
      title: "Développeur Front-End",
      start: "févr. 2022",
      end: "juil. 2022",
      description: "Plateforme dédiée à l'e-sport sur FIFA",
      tasks: [
        "Développement de plusieurs interfaces et de pages équipes et joueurs",
        "Développement d’un système de classement, permettant aux joueurs d’avoir un aspect compétitif",
        "Mise en place d'un Design System",
        "Architecture et mise en place de React Hooks",
        "Code review, cadrage technique et organisation des tâches",
      ],
    },
    {
      company: "Services Perso",
      link: "https://servicesperso.fr/",
      badges: ["Freelance"],
      skills: ["Wordpress", "OVH", "Figma"],
      title: "Développeur Wordpress",
      start: "juil. 2021",
      end: "janv. 2022",
      description:
        "Création d'un site vitrine pour une association basée à Saint-Denis",
      tasks: [
        "Développement de l'interface via Wordpress",
        "Création du domaine via OVH",
        "Gestion du déploiement",
        "Cadrage & spécifications techniques",
        "Collaboration avec un designer freelance",
      ],
    },
    {
      company: "UNOWHY",
      link: "https://www.unowhy.com/",
      badges: [],
      skills: [
        "React",
        "SASS",
        "Material UI",
        "Storybook",
        "Git",
        "Figma",
        "Design System",
      ],
      title: "Développeur Front-End",
      start: "déc. 2020",
      end: "févr. 2022",
      description:
        "Développement d'outils visant à faciliter l'apprentissage et l'échange entre les élèves et leurs professeurs",
      tasks: [
        "Développement from scratch, d'un dashboard entièrement connecté via API",
        "Développement d'un catalogue d'applications, permettant d'installer des applications sur le Dashboard",
        "Mise en place d'un Design System et d'un Storybook",
        "Développement d'une librairie de composants UI, flexibles et réutilisables",
      ],
    },
    {
      company: "Société Générale",
      link: "https://www.societegenerale.com/fr",
      badges: [],
      skills: [
        "React",
        "Typescript",
        "NestJS",
        "Node.js",
        "Jest",
        "TDD",
        "Git",
        "Agile",
      ],
      title: "Développeur Full-Stack",
      start: "sept. 2020",
      end: "déc. 2020",
      description:
        "Développement d'une outil visant à aider les juristes de la Société Générale, dans la création de contrats",
      tasks: [
        "Développement de nouveaux composants",
        "Refacto d'un proxy en Nest JS",
        "Tests unitaires & TDD",
      ],
    },
    {
      company: "France Télévisions",
      link: "https://www.france.tv/",
      badges: [],
      skills: [
        "React",
        "Redux",
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Jest",
        "React Testing Library",
        "Cypress",
        "Git",
        "Figma",
        "Design System",
        "Agile",
      ],
      title: "Développeur Full-Stack",
      start: "mars 2019",
      end: "sept. 2020",
      description:
        "Développement de plusieurs outils pour les utilisateurs de la plateforme France TV",
      tasks: [
        "Développement de nouvelles fonctionnalités front & back, optimisation des performances",
        "Mise en place d'un Design System",
        "Développement d'une librairie de composants UI",
        "Refonte graphique",
        "Refacto de code legacy",
        "Tests unitaires, fonctionnels et d'intégration",
      ],
    },
  ],
  projects: [
    {
      title: "Wrappped",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind",
        "React Query",
        "Prisma",
        "Supabase",
        "Spotify API",
      ],
      description: "Wrap your favorite music",
      link: {
        href: "https://wrappped.vercel.app/",
      },
    },
    {
      title: "Spotify",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind",
        "React Query",
        "Spotify API",
      ],
      description: "Explore new features and improved user experience",
      link: {
        href: "https://github.com/Bakhaw/spotify",
      },
    },
    {
      title: "Dark Twitter",
      techStack: ["TypeScript", "Next.js", "Tailwind", "Generative AI"],
      description:
        "Dark Twitter with multiple worlds. Posts and bios are using Generative AI",
      link: {
        href: "https://dark-twitter.netlify.app?world=marvel",
      },
    },
    {
      title: "Genius",
      techStack: ["React", "SASS", "Genius API"],
      description: "Lyrics finder. Built with Genius API",
      link: {
        href: "https://fh-genius.netlify.app/",
      },
    },
  ],
} as const;

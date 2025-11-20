import {
  Award,
  BookOpen,
  Briefcase,
  CarFront,
  Code,
  Code2,
  CodeSquare,
  GraduationCap,
  LockOpenIcon,
  Mail,
  Rocket,
  School2,
  Star,
  TextSelection,
  User,
} from "lucide-react";

import testFresher from "../data/test_fresher_img.png";
import nextToEat from "../data/next_to_eat.PNG";
import burgerBite from "../data/burger_bites.png";

export const skills = [
  {
    category: "Frontend Development",
    items: [
      {
        name: "React.js",
        level: 95,
        icon: Code,
      },
      {
        name: "JavaScript",
        level: 99,
        icon: Briefcase,
      },
      {
        name: "TypeScript",
        level: 80,
        icon: Star,
      },
      {
        name: "Bootstrap",
        level: 82,
        icon: Award,
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: User,
      },
      {
        name: "HTML5/CSS3",
        level: 98,
        icon: BookOpen,
      },
    ],
    color: "from-blue-500 to-cyan-500",
    icon: Code,
  },
  {
    category: "Backend Development",
    items: [
      {
        name: "Node.js",
        level: 95,
        icon: Rocket,
      },
      {
        name: "Python",
        level: 85,
        icon: Star,
      },
      {
        name: "Express.js",
        level: 80,
        icon: Code,
      },
      {
        name: "Django",
        level: 88,
        icon: Award,
      },
    ],
    color: "from-green-500 to-emerald-500",
    icon: Code,
  },
  {
    category: "Database & Tools",
    items: [
      {
        name: "SQL",
        level: 95,
        icon: BookOpen,
      },
      {
        name: "MongoDB",
        level: 90,
        icon: Briefcase,
      },
      {
        name: "Git",
        level: 88,
        icon: Star,
      },
    ],
    color: "from-purple-500 to-pink-500",
    icon: Code,
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    school: "Guru Gobind Singh Indraprastha University",
    year: "2022-2024",
    gpa: "8.6/10",
    status: "completed",
    description:
      "Specialized inb software engineering and web development with focus on modern framworks and cloud technologies. Active member of the Computer Science Society. ",

    achievements: [
      "Led major full-stack development projects as team lead",
      "Winner of an inter-college programming competition",
      "Served as captain of both the Chess and Kabaddi teams",
    ],
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Maharshi Dayanand University",
    year: "2018-2021",
    gpa: "6/10",
    status: "completed",
    description:
      "Good command over core CS principles, particularly database systems. Work centered around software engineering and modern web technologies supported by cloud platforms. Involved in Computer Science Society activities during academic tenure. ",

    achievements: [
      "Took charge of full-stack project development, overseeing planning and execution",
      "Led and managed student cricket teams in competitive tournaments.",
    ],
    icon: School2,
  },
  {
    degree: "Full Stack Developer",
    school: "QSpiders and PySpiders",
    year: "Mar 2024 - Oct 2024",
    gpa: "NA",
    status: "completed",
    description:
      "Designed and developed front-end GUI for various websites using Python, HTML, JavaScript, and CSS. ",

    achievements: [
      "Real-time problem-solving skills. ",
      "Ability to work under high pressure. ",
    ],
    icon: Code2,
  },
];

export const projects = [
  {
    id:1,
    title: "Test Freshers",
    description:
      "Contributed to Test Freshers, a coding practice platform similar to LeetCode, by developing the front-end interface and integrating the database to manage problems, submissions, and user data efficiently.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    link: "https://testfreshers.qspiders.com/",
    image: testFresher,
    status: "local host",
    category: "Full Stack",
    icon: Briefcase,
    github: "https://github.com/Rishabh728/",
  },
  {
    id:2,
    title: "E-Commerce Platform",
    description:
      "A Compressive e-commerce solution with advance features like real-time inventory management, secure payment processing, order tracking, and admin dashboard with analytics",
    technologies: ["HTML", "CSS", "SCSS", "JavaScript", "Python", "Django"],
    link: "https://github.com/Rishabh728/Next-to-eat-store",
    image: nextToEat,
    status: "local host",
    category: "Full Stack",
    icon: CarFront,
    github: "https://github.com/Rishabh728/",
  },
  {
    id:3,
    title: "Frontend Page",
    description:
      "Designed and developed a responsive e-commerce landing page showcasing products, real-time inventory highlights, and an analytics-ready admin interface.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Rishabh728/Burger_joint",
    image: burgerBite,
    status: "local host",
    category: "Frontend",
    icon: TextSelection,
    github: "https://github.com/Rishabh728/",
  },
];

export const tabs = [
  {
    id: "about",
    label: "About Me",
    icon: User,
    color: "from-blue-500 to-cyan-500",
    description: "Get to know me better",
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    description: "My technical Experties",
  },
  {
    id: "education",
    label: "Education",
    icon: BookOpen,
    color: "from-green-500 to-teal-500",
    description: "Academic background",
  },
  {
    id: "projects",
    label: "Projects",
    icon: Briefcase,
    color: "from-yellow-400 to-orange-500",
    description: "My Featured Work",
  },

  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    color: "from-pink-500 to-rose-600",
    description: "Lets connect",
  },
];

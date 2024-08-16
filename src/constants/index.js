import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate full-stack developer (MERN stack) with a knack for crafting robust and scalable web applications. I am a certified Guvi (IITM) developer with hands-on experience in project-based curriculum`;

export const ABOUT_TEXT = `I love learning and am dedicated to mastering my tech stack (MERN) to become proficient in bringing any business idea to life through web applications. I am passionate about staying updated with the latest technologies and techniques in front-end and back-end development. With a strong foundation in HTML, CSS, and JavaScript, as well as expertise in React.js, Node.js, Express.js, MongoDB, and MySQL, I am equipped to handle diverse challenges in web development`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Mern Stack Developer",
    company: "Guvi",
    description: ` After working in the mechanical field for 2 years, I began exploring how the web works behind the scenes, igniting my passion for web development. I made the decision to join Guvi's project-based curriculum, and I successfully completed the program, earning certification `,
    technologies: [
      "Html",
      "Css",
      "Js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySql",
    ],
  },
  {
    year: "2020 - 2022",
    role: "Mechanical Engineer",
    company: "TVS",
    description: `non destructive tester for the various parts of the vehicle to ensuring the quality and managing the number of jobs exporting day by day`,
    technologies: [
      "ultrasonic testing (UT)",
      "radiographic testing (RT)",
      "magnetic particle testing (MPT)",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Threads",
    image: project5,
    url: "https://threads-y867.onrender.com",
    githubUrl: "https://github.com/Madhan235/threads",
    description:
      "A Social media site , where user can , post images, get likes and comments from other users, follow others, get followers, chat with other user with real time communication implemented with socket.io and much more to come",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "chakraUI"],
  },

  {
    title: "Madhan Estate",
    image: project4,
    url: "https://mern-estate-tvvm.onrender.com/",
    githubUrl: "https://github.com/Madhan235/mern-estate",
    description:
      "Madhan Estate is a full-stack real estate web application designed to streamline the property buying, selling, and renting process. Built using the MERN stack, this application offers a seamless search and efficient platform for users to browse, list, and manage real estate properties. The application integrates Firebase for secure OAuth authentication, providing a smooth and secure user login experience.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind.css",
    ],
  },
  {
    title: "Blog Website",
    image: project1,
    url: "https://mern-blog-8icy.onrender.com/",
    githubUrl: "https://github.com/Madhan235/mern-blog",
    description:
      "A role-based accessible page for admins, preferred themes with light and dark modes, and a blog post website for users with features such as adding posts, comments, and likes to comments. Additionally, user authentication with OAuth (Google) including the option to change profile pictures.",
    technologies: ["React", "Node.js", "MongoDB", "Flow Bite", "Firebase"],
  },
  {
    title: "Chat App",
    image: project2,
    url: "https://chat-app-2vp8.onrender.com/login",
    githubUrl: "https://github.com/Madhan235/chat-app",
    description:
      "An application for chatting with all users implemented using socket.io with the MERN stack. When a user receives a notification online, a notification sound will play.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Article Website",
    image: project3,
    url: "https://catalog23.netlify.app/home_about_oil_price",
    githubUrl: "https://github.com/Madhan235/items-server",
    description:
      "A social awareness website implemented with Chart.js, focusing on mobile addiction among kids, drug addiction, and addiction to junk and sugary foods.",
    technologies: ["React", "Node.js", "MongoDB", "Css", "Bootstrap"],
  },
];

export const CONTACT = {
  email: "madhanofficialmern@gmail.com",
};

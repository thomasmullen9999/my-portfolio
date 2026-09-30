export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string[];
  bullets?: string[];
  imagesrc: string;
};

export const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect Associate",
    issuer: "AWS",
    date: "In Progress",
    description: [
      "I am currently working on this qualification.",
      "To broaden my knowledge of cloud computing and gain insight into the technologies used in industry, I decided to undertake the AWS Solutions Architect course.",
      "The course covers a broad range of skills and knowledge relating to the design, deployment and management of applications and infrastructure within the AWS ecosystem.",
    ],
    bullets: [
      "Designing resilient and highly available architectures",
      "Defining high-performing architectures",
      "Designing secure applications and infrastructure",
      "Designing cost-optimised architectures",
      "Defining operationally excellent architectures",
    ],
    imagesrc: "/images/aws.png",
  },

  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University / DeepLearningAI / Coursera",
    date: "In Progress",
    description: [
      "I am currently working on this qualification to develop my understanding of machine learning and the mathematical concepts behind modern machine learning algorithms.",
      "This certification is composed of three courses:",
    ],
    bullets: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, Reinforcement Learning",
    ],
    imagesrc: "/images/coursera.png",
  },

  {
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    date: "2025",
    description: [
      "I decided to complete Meta's industry-recognised course covering the key concepts used in modern front-end web development.",
      "The course provided an opportunity to consolidate existing knowledge gained through hands-on development experience, whilst also allowing me to explore more advanced and specialised React concepts.",
      "The programme was composed of nine smaller courses, ranging from introductory concepts through to more complex topics. Several of the courses involved 30+ hours of study and practical work.",
      "The course covered a wide range of front-end development concepts, including modern JavaScript, React, responsive design, accessibility, version control, testing and user interface development.",
    ],
    imagesrc: "/images/metafrontend.png",
  },

  {
    title: "Software Engineering Bootcamp - Certificate of Completion",
    issuer: "Northcoders",
    date: "2024",
    description: [
      "In 2024 I attended Northcoders, a UK software development bootcamp, where I completed an intensive full-stack software engineering course.",
      "The course allowed me to consolidate existing skills such as HTML/CSS, Git and JavaScript, while introducing me to a broad range of technologies used in professional web development.",
      "On the back end, I learned how to use SQL and PostgreSQL to work with relational databases and integrated databases with APIs using Node.js and Express. I also used Test Driven Development to write and maintain unit tests.",
      "On the front end, I built user-facing applications using React and Bootstrap, with projects hosted using Netlify.",
      "During the final project, I worked as part of a small development team to create a mobile application called Trek-It Travel using React Native, Firestore and Expo.",
    ],
    bullets: [
      "HTML/CSS, JavaScript and Git",
      "Node.js and Express",
      "SQL and PostgreSQL",
      "React and Bootstrap",
      "Test Driven Development",
      "React Native and Expo",
      "Firestore",
      "Agile development and teamwork",
    ],
    imagesrc: "/images/northcoderscert.png",
  },

  {
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2024",
    description: [
      "An intensive course delivered by Harvard University's David Malan covering both theoretical Computer Science concepts and practical programming.",
      "The course began with the low-level C programming language before progressing to higher-level technologies including Python, SQL, HTML and CSS.",
      "It provided a broad understanding of algorithms, data structures, databases, web programming, memory, artificial intelligence and cybersecurity, culminating in a substantial final project.",
      "For my final project, I developed a web-based fitness application using Flask, Python and SQL. The application allowed users to store information about gym exercises and favourite foods, track workouts and dietary intake, and record personal statistics such as weight and steps.",
    ],
    imagesrc: "/images/cs50xcert.png",
  },

  {
    title: "CS50's Introduction to Databases with SQL",
    issuer: "Harvard University",
    date: "2024",
    description: [
      "This Harvard University course was instrumental in developing my understanding of relational databases and SQL.",
      "I learned how CRUD operations are used when manipulating application data and developed a deeper understanding of relational database design and querying.",
      "The course covered SQL queries, joins, junction tables, nested SELECT statements, indexes, views and database modification.",
      "For my final project, I created a database called Jukebox.db which allows users to store and modify information about bands, albums, musicians and related data.",
      "The project was created using SQLite3, while the course also introduced MySQL and its use when working with larger-scale applications.",
    ],
    imagesrc: "/images/cs50sqlcert.png",
  },

  {
    title: "Computer Science - Diploma of Higher Education (Level 5)",
    issuer: "Manchester Metropolitan University",
    date: "2022",
    description: [
      "At Manchester Metropolitan University I began my journey in Computer Science and programming, developing many of the fundamental concepts that underpin modern software development.",
      "I studied both functional and object-oriented programming, alongside conditionals, loops and a range of core programming principles.",
      "I developed an understanding of data structures including linked lists, binary trees and stacks and queues, while also working collaboratively on group projects.",
      "The course also introduced me to Entity Relationship Diagrams, relational database design, assembly code and machine language, giving me a broader understanding of how software is represented and executed at a lower level.",
    ],
    imagesrc: "/images/diphecert.png",
  },
];
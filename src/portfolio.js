/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Neha Gaddam",
  title: "Hello, I'm Neha Gaddam",
  subTitle: emoji(
    "A CS graduate with two years of professional experience developing restaurant management software. Actively looking for full time positions"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1eBLSQCtgd2-hA6EjfifwwBxSNygmmF-5/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/NehaReddy77",
  linkedin: "https://www.linkedin.com/in/nehareddyy",
  gmail: "nehareddy315@gmail.com",
};

// Your Skills Section

const skillsSection2 = {
  title: "What I do",
  subTitle:
    "HANDLING ALL TEST AUTOMATION ACTIVITIES AND EXPLORING DATA SCIENCE",
  skills: [
    emoji(
      "⚡ Designing and developing Test Automation frameworks using Python and Java"
    ),
    emoji("⚡ End to End automation executions"),
    emoji(
      "⚡ Working on test automation tools like Selenium, Appium, UFT, SoapUI, AutoIT, Katalon Studio, Seetest Mobile Cloud administration, etc"
    ),
    emoji(
      "⚡ Building predictive models to extract insights and make decisions out of data"
    ),
  ]};
  const skillsSection = {
    title: "What I do",
    subTitle: "EXPERIENCED SOFTWARE DEVELOPER SPECIALIZING IN .NET AND C++ APPLICATIONS",
    skills: [
      emoji("⚡ Developing and maintaining restaurant management applications using .NET and C++"),
      emoji("⚡ Designing and implementing software solutions for efficient restaurant operations"),
      emoji("⚡ Integrating various modules such as order management, inventory, and billing systems"),
      emoji("⚡ Ensuring high performance and responsiveness of applications"),
      emoji("⚡ Collaborating with cross-functional teams to enhance user experience and functionality"),
      emoji("⚡ Utilizing best practices in software development to deliver high-quality, scalable solutions"),
    ],
  
  softwareSkills: [
    {
      skillName: "python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "reactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "maven",
      classname: "vscode-icons:file-type-maven",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "jenkins",
      classname: "vscode-icons:file-type-jenkins",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "postgres",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "tensorflow",
      classname: "logos-tensorflow",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "keras",
      classname: "simple-icons:keras",
      style: {
        backgroundColor: "white",
        color: "#D00000",
      },
    },
    {
      skillName: "flask",
      classname: "simple-icons:flask",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// portfolio.js
const education = [
  {
    id: 1,
    institution: "Syracuse University",
    degree: "Master of Science in Computer Science",
    year: "August 2022 - May 2024",
    logo:require("./assets/images/su3.png"),
    courses: "Relevant Courses: Natural Language Processing, Artificial Intelligence, Data Science, Social Media and Data Mining, Android Programming, Data Structures and Algorithms"
  },
  {
    id: 2,
    institution: "Vasavi College of Engineering",
    degree: "Bachelor of Science in Computer Science",
    year: "August 2016 - May 2020",
    logo:require("./assets/images/vc.png"),
    courses: "Relevant Courses: Cloud Computing, Computer Architecture"
  },
];
const projects = [
  { id: 1, title: 'Event Nest', 
  description: "Developed an Angular, TypeScript application to enter and display events, which communicates with a Node.js backend connected to a MongoDB cluster for data storage. The Angular app allows users to input event details and view all saved events. The Node.js backend handles CRUD operations and connects to the MongoDB cluster to manage the event data. A Flask endpoint utilizes the trained BERT model to classify events based on their titles, providing the event type classification functionality. When a new event is added, the Angular app sends the event title to the Flask endpoint, retrieves the classified event type, and displays it to the user." ,
  techstack: "Angular JS, Typescript, Flask, MongoDB",
  githubLink: "https://github.com/NehaReddy77/Event-Nest"
  },
  { id: 2, title: 'Driver Drowsiness Detection', 
  description: 'Devised a real time system that sounds an alarm if it detects the driver to be drowsy based on eye closure and yawn rate. Employed OpenCV for facial detection and trained a Convolutional Neural Network (CNN) model to accurately identify instances of closed eyes and yawning in drivers, achieving an impressive accuracy rate of 98%.',
  techstack: "OpenCV, Keras",
  githubLink: "https://github.com/NehaReddy77/Driver_Drowsiness_Detection"
   },
  { id: 3, title: 'Food Donor Android App', 
  description: 'Description for Project 3',
  techstack: "Designed an app seamlessly connecting food donors and recipients through dynamic location-based connectivity and seamless notification integration.",
  githubLink: "https://github.com/NehaReddy77/HungerHelpHubApp"
   },
  { id: 4, title: 'Book selling react website', 
  description: 'Utilized React router, Reducers, Hooks, Redux Persist, JWT tokens to develop a book selling application. Provided book suggestions by employing TensorFlow neural network trained on TF-IDF vectors of book descriptions.',
  techstack: "React JS, Tailwind CSS, Flask",
  githubLink: "https://github.com/NehaReddy77/VirtualVerse"
   },
  { id: 5, title: 'Taxi data analytics', 
  description: 'Performed ETL on taxi trip record data by leveraging GCP VM Instance and loaded data into Google Big Query. Displayed dashboards demonstrating key performance indicators to analyze customer behavior, peak hours, traffic route optimization.',
  techstack: "Pandas, GCP, Big Query, Maze Pipelines",
  dashboardLink: "https://lookerstudio.google.com/reporting/2a3f946e-d4f6-4b87-af04-c344dc9824c4/page/mhAgD"
   },
  // Add more projects as needed
];

const workExperiences = {
  viewExperiences: true, 
  experience: [
    {
      role: ".NET Developer",
      company: "NCR Corporation",
      companylogo: require("./assets/images/ncr-logo.png"),
      date: "January 2021 – July 2022",
      desc: "Development and support of .NET applicaiton and it's API, named CFC used in restaurant order management.",
    },
    {
      role: "Software Engineer",
      company: "NCR Corporation",
      companylogo: require("./assets/images/ncr-logo.png"),
      date: "January 2020 – December 2020",
      desc: "Development and support of C++ MFC restaurant point of sale application named ALOHA POS",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "AWS certified cloud practitioner",
      subtitle: "- Cloud",
      logo_path: "aws-logo.png",
      certificate_link:
        "https://www.credly.com/badges/826006cc-fc32-4474-ac8b-de767cd399cc/public_url",
      alt_name: "AWS",
      color_code: "#F6EAEA",
    }
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://bharatkammakatla.hashnode.dev/selenium-python-automation-framework-how-to-build",
      title: "How to build a Selenium Python Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url: "https://bharatkammakatla.hashnode.dev/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url: "https://bharatkammakatla.hashnode.dev/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url: "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 6806975439",
  email_address: "nehareddy315@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  education,
  workExperiences,
  projects,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};

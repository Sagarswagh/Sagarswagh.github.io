/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sagar Wagh",
  title: "Hi all, I'm Sagar",
  subTitle: emoji("A passionate Software Engineer 🚀 with expertise in React, Node, and AWS. Skilled in C/C++, Python, and driven by a strong passion for AI/ML and cloud technologies. Experienced in building scalable, high-performance solutions and optimizing applications for efficiency and security. A problem-solver with a keen focus on delivering innovative software solutions."),
  resumeLink:
    "https://drive.google.com/drive/folders/1sa5V7hjf66fkZuOpJz1Th2jQNC9WBKOk?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  //   /* Your Social Media Link */
  github: "https://github.com/Sagarswagh",
  linkedin: "https://linkedin.com/in/sagarw1/",
  // youtube: "https://www.youtube.com/@islam-abdo",
  gmail: "sagarwagh2370@gmail.com",
  // facebook: "https://www.facebook.com/islam.abdo.925/",
  // instagram: "https://www.instagram.com/islamabd0/",
  hackerrank: "https://leetcode.com/u/sagarswagh/",
  // kaggle: "https://www.kaggle.com/islamabd0",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BUILDING SCALABLE SOFTWARE SOLUTIONS AND INNOVATIVE SYSTEMS ACROSS VARIOUS PLATFORMS",
  skills: [
    emoji("⚡ Designing and developing high-performance software solutions, including web applications."),
    emoji("⚡ Creating scalable, secure, and cost-efficient cloud-based architectures on AWS and Azure."),
    emoji("⚡ Optimizing application performance with data-driven approaches, utilizing modern frameworks like React.js, Node.js, and .NET."),
    emoji("⚡ Leveraging AI and the latest Hugging Face LLMs to develop intelligent chatbots, enhancing user interactions and enabling context-aware conversations across various applications.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery 
https://iconify.design/
*/

  softwareSkills: [
    {
      skillName: "C",
      classname: "logos:c"
    },
    {
      skillName: "C++",
      classname: "logos:c-plusplus"
    },
    {
      skillName: "python",
      classname: "logos:python",
    },
    {
      skillName: "React.js",
      classname: "logos:react"
    },
    {
      skillName: "Node.js",
      classname: "logos:nodejs"
    },
    {
      skillName: "AI/ML",
      classname: "logos:ai"
    },
    {
      skillName: ".NET",
      classname: "logos:dotnet"
    },
    {
      skillName: "Java",
      classname: "logos:java"
    },
    {
      skillName: "JavaScript",
      classname: "logos:javascript"
    },
    {
      skillName: "AWS",
      classname: "logos:aws"
    },
    {
      skillName: "Azure",
      classname: "logos:azure"
    },
    {
      skillName: "CSS",
      classname: "logos:css-3"
    },
    
    {
      skillName: "Linux",
      classname: "logos:linux-tux"
    },
    {
      skillName: "Matlab",
      classname: "vscode-icons:file-type-matlab"
    },
     {
      skillName: "VScode",
      classname: "vscode-icons:file-type-vscode"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maryland College Park",
      logo: require("./assets/images/umd.png"), 
      subHeader: "Masters in software engineering",
      duration: "Aug-2024 -  May-2026",
      desc: "Focused on Software Engineering, Secure Coding, Cloud Computing, and Machine Learning",
      descBullets: [
        "I have Studied secure coding practices to develop robust and secure applications.",
        "Gained hands-on experience with cloud computing platforms such as AWS and Azure.",
        "Applied cutting-edge techniques such as transformers for text generation and classification tasks, improving model performance and accuracy.",
      ],
    },
    {
      schoolName: "KLE Technological University",
      logo: require("./assets/images/kle.jpeg"), // Update logo path as needed
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "June 2018 – July 2022",
      location: "Hubballi, Karnataka, India",
      desc: "Studied computer science fundamentals with a focus on software engineering, algorithms, and data structures.",
      descBullets: [
        "Specialized in C, C++, Data Structures, and Algorithms.",
        "Gained hands-on experience in software development methodologies.",
        "Completed a final year project on a scalable cloud-based application."
      ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Eurofins IT Solutions",
      companylogo: require("./assets/images/Eurofins.jpeg"),
      date: "July 2022 – July 2024",
      // location: "Alexandria, Eygpt",
      desc: 
      "Worked as a Software Engineer at Eurofins IT Solutions, contributing to backend development, system optimization, and user interface improvements. Key responsibilities and achievements included:",
    impact: 
      "These efforts directly contributed to a more efficient application, improved user engagement, and ensured better performance for end-users, aligning with business goals and customer satisfaction."
    },
    {
      role: "Software Developer Intern",
      company: "Transil Technology",
      companylogo: require("./assets/images/transil.jpeg"),
      date: "Jan 2022 – Apr 2022",
      // location: "Alexandria, Eygpt",
      desc:
      "Worked as a Software Developer Intern, contributing to the development of high-performance mobile applications using **React Native**. Key contributions included building optimized **RESTful APIs** and implementing efficient state management strategies, resulting in a 35% increase in user satisfaction and a 30% improvement in app performance. Gained valuable hands-on experience in mobile development, UI design, and enhancing user experience.",
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(240)-438-0495",
  email_address: "sagarwagh2370@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

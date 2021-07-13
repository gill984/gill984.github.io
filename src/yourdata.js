// Social Icon
import githubIcon from "./images/github.svg"
import microIcon from "./images/computer-microprocessor.svg"
import leaderIcon from "./images/leadership.svg"
import programmingIcon from "./images/programming.svg"

import profilePicture from "./images/profile_square.jpeg"

import hpcPicture from "./images/hpc_picture.png"
import spojPicture from "./images/spoj_picture.png"
import leetcodePicture from "./images/leetcode.png"
import websitePicture from "./images/website_picture.png"

import linkedInPicture from "./images/linkedin.png"
import resumePdf from "./Resume.pdf"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Michael",
  headerTagline: [
    //Line 1 For Header
    "Creating software from",
    //Line 2 For Header
    "embedded systems",
    //Line 3 For Header
    "to GUIs",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a software engineer from Florida. I've been working in the software industry for eight years.",

  //Contact Email
  contactEmail: "mjgill984@gmail.com",
  resume: resumePdf,

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1,
      title: "Programming Competition",
      para:
        "In 2018 I created a programming competition for my company on free time.",
      imageSrc: hpcPicture,
      url: "https://bitbucket.org/gill984/hpc_2018",
    },
    {
      id: 2,
      title: "Leetcode Solutions",
      para:
        "I work on Leetcode to hone my skills as a programmer. To date I have over 350 solutions",
      imageSrc: leetcodePicture,
      url: "https://leetcode.com/bronickel/",
    },
    {
      id: 3,
      title: "SPOJ Solutions",
      para:
        "Repository of solutions to SPOJ problems I solved while on the UF Programming Team",
      imageSrc: spojPicture,
      url: "https://bitbucket.org/gill984/spoj/",
    },
    {
      id: 4,
      title: "Portfolio Website",
      para: "The website you're viewing now is managed on github.",
      imageSrc: websitePicture,
      url: "https://github.com/gill984/gill984.github.io",
    },
  ],
  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I started programming in 2010 in college and fell in love with it. " +
    "While in school I participated in the programming team and served as an officer for ACM. " +
    "I graduated from the University of Florida with my BS in Computer Engineering in 2013.",
  aboutParaTwo:
    "In 2013 I joined L3Harris corporation as a software engineer. " +
    "Since then I've worked as an individual contributor, a software team lead, " +
    "and a manager for a group.",
  aboutParaThree:
    "I always enjoy learning about new technologies and concepts. For example this website is a " +
    "project I started after learning React on my own. Some of my hobbies are longboarding, " +
    "playing basketball, reading, and playing video games. ",
  aboutImage: profilePicture,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: microIcon,
      para:
        "Embedded Software - I've worked on things from software defined radios to 8-bit microcontrollers. I've worked on software in C, C++, Java, Python, and more.",
    },
    {
      id: 2,
      img: leaderIcon,
      para:
        "Leadership - I have several years of experience as both a successful software project lead and department group leader.",
    },
    {
      id: 3,
      img: programmingIcon,
      para:
        "Software Testing - From unit testing to static code analysis to selling off software at the system level.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's talk",
  social: [
    { img: githubIcon,
      url: "https://github.com/gill984" },
    {
      img: linkedInPicture,
      url: "https://www.linkedin.com/in/michael-gill-76b41021/",
    },
  ],
}

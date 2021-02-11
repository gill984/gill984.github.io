// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import microIcon from "./images/computer-microprocessor.svg"
import leaderIcon from "./images/leadership.svg"
import programmingIcon from "./images/programming.svg"

import profilePicture from "./images/profile_square.jpeg"

import redPicture from "./images/red.png"
import greenPicture from "./images/green.png"
import yellowPicture from "./images/yellow.png"

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
    "I'm a software engineer from Florida. I've been working in the software industry for 7 years.",

  //Contact Email
  contactEmail: "mjgill984@gmail.com",
  resume: resumePdf,

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1,
      title: "Harris Programming Competition",
      para:
        "In 2018 I created a programming competition for my company on free time. I managed the project in this repository.",
      imageSrc: redPicture,
      url: "https://bitbucket.org/gill984/hpc_2018",
    },
    {
      id: 2,
      title: "Leetcode Solutions",
      para:
        "I work on Leetcode to hone my skills as a programmer. To date I have over 350 solutions",
      imageSrc: yellowPicture,
      url: "https://leetcode.com/bronickel/",
    },
    {
      id: 3,
      title: "SPOJ Solutions",
      para:
        "Repository of solutions to SPOJ problems I solved while on the UF Programming Team",
      imageSrc: greenPicture,
      url: "https://bitbucket.org/gill984/spoj/",
    },
  ],
  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I started programming in 2010 at the University of Florida. I obtained my BS in Computer Engineering. While in school I participated in the programming team and served as an officer for ACM.",
  aboutParaTwo:
    "In 2013 I joined L3Harris corporation as a software engineer. Since then I've worked as an individual contributor, software lead, and manager for a small group.",
  aboutParaThree:
    "I always enjoy learning about new technologies and concepts. Some of my hobbies are longboarding, playing basketball, and playing video games.",
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
    //   {
    //     id: 4,
    //     img: reactIcon,
    //     para:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   },
    //   {
    //     id: 5,
    //     img: designIcon,
    //     para:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   },
    //   {
    //     id: 6,
    //     img: codeIcon,
    //     para:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //   },
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
    { img: githubIcon, url: "https://github.com/gill984" },
    {
      img: linkedInPicture,
      url: "https://www.linkedin.com/in/michael-gill-76b41021/",
    },
  ],

  //  Clips Section
  clips: [
    "https://streamable.com/e/ryd0jz",
    "https://streamable.com/e/6jezgi",
    "https://streamable.com/e/aidnqk",
    "https://www.youtube.com/embed/Nis0GeqFdWI",
    "https://streamable.com/e/j6l4qd",
  ],
}

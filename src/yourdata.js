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

import profilePicture from "./images/profile_square.jpeg"
import leetcodePicture from "./images/LeetCode_Sharing.png"
import spojPicture from "./images/B1rm7i-y_400x400.jpeg"

import redPicture from "./images/red.png"
import greenPicture from "./images/green.png"
import yellowPicture from "./images/yellow.png"

import linkedInPicture from "./images/linkedin.png"

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
        "I work on Leetcode to hone my skills as a programmer, to date I have over 350 solutions",
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

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Resume",
  promotionPara: ".",
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
}

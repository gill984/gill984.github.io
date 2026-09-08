import hpcPicture from "./images/hpc_picture.png"
import hpcPictureWebp from "./images/hpc_picture.webp"
import hpcPictureAvif from "./images/hpc_picture.avif"
import discordPicture from "./images/discord_bot.jpg"
import discordPictureWebp from "./images/discord_bot.webp"
import discordPictureAvif from "./images/discord_bot.avif"
import leetcodePicture from "./images/leetcode2.png"
import leetcodePictureWebp from "./images/leetcode2.webp"
import leetcodePictureAvif from "./images/leetcode2.avif"
import websitePicture from "./images/website_picture.png"
import websitePictureWebp from "./images/website_picture.webp"
import websitePictureAvif from "./images/website_picture.avif"

import resumePdf from "./Michael Gill Resume Website.pdf"

const workStart = new Date("06/24/2013");

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Michael",
  headerTagline: [
    //Line 1 For Header
    "Engineering at scale",
    //Line 2 For Header
    "Leading strong teams",
    //Line 3 For Header
    "Delivering real impact",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a full-stack software engineer with " + calculateAge(workStart) + " years of experience.",

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
      imageWebp: hpcPictureWebp,
      imageAvif: hpcPictureAvif,
      url: "https://bitbucket.org/gill984/hpc_2018",
    },
    {
      id: 2,
      title: "Leetcode Solutions",
      para:
        "I work on Leetcode to hone my skills as a programmer. To date I have 1000+ solutions",
      imageSrc: leetcodePicture,
      imageWebp: leetcodePictureWebp,
      imageAvif: leetcodePictureAvif,
      url: "https://leetcode.com/bronickel/",
    },
    {
      id: 3,
      title: "Discord Bot",
      para:
        "I created a Discord bot which creates a thread containing the latest daily Leetcode question on command",
      imageSrc: discordPicture,
      imageWebp: discordPictureWebp,
      imageAvif: discordPictureAvif,
      url: "https://github.com/gill984/DiscordLeetcodeBot",
    },
    {
      id: 4,
      title: "Portfolio Website",
      para: "The website you're viewing now is managed on github.",
      imageSrc: websitePicture,
      imageWebp: websitePictureWebp,
      imageAvif: websitePictureAvif,
      url: "https://github.com/gill984/gill984.github.io",
    },
  ],
  // End Work Section -----------------------

  // About Secton --------------
  aboutExperience: [
    {
      company: "Capital One",
      role: "Senior Principal Software Engineer",
      bullets: [
        "Evolved an AWS-based transaction processing platform serving millions of daily transactions.",
        "Directed engineers in building an AWS Lambda-based journey-testing framework that achieved 90% system-level test coverage.",
        "Drove architectural modernization across three teams, migrating legacy store-and-forward processing to real-time transactions.",
      ],
    },
    {
      company: "Meta",
      role: "E5 Senior Software Engineer",
      bullets: [
        "Developed Python, Hack/PHP, and SQL systems supporting millions of Facebook Dating users.",
        "Designed integrity and enforcement projects that reduced scammer prevalence by more than 50%.",
        "Created an auto-balancing prioritization system to focus enforcement on the most harmful users.",
      ],
    },
  ],
  //   End About Section ---------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

}

function calculateAge(pastDate) {
  var ageDifMs = Date.now() - pastDate;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
